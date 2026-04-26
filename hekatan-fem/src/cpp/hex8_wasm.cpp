/**
 * ============================================================================
 *  WASM Entry Point — Solver H8 (8-node hexahedral solid element)
 * ============================================================================
 *
 *  Linear elastic 3D FEM solver for hexahedral H8 elements.
 *  Implementación completa nativa C++ con Eigen sparse Cholesky para
 *  ~100× speedup respecto al solver TS puro (h8.ts).
 *
 *  Algoritmo clásico:
 *    - 8 funciones de forma N_i(ξ,η,ζ) = (1/8)(1+ξ_i ξ)(1+η_i η)(1+ζ_i ζ)
 *    - 24 DOFs por elemento (8 nodos × 3 displacement DOFs)
 *    - Integración Gauss 2×2×2 (8 puntos, weight=1)
 *    - Matriz constitutiva isótropa 6×6 (Lamé)
 *    - Ensamble sparse → Eigen SimplicialLDLT
 *    - Recovery de stresses en 8 puntos Gauss + vonMises 3D
 *
 *  Input format (flat arrays from JS):
 *    nodes:           [x1,y1,z1, x2,y2,z2, ...]      (3 doubles per node)
 *    elements:        [n0..n7, n0..n7, ...]           (8 ints per element)
 *    supports:        [node, fixUx, fixUy, fixUz, ...] (4 ints per support)
 *    loads:           [node, fx, fy, fz, ...]          (1 int + 3 doubles per load)
 *    E, nu:           material properties (scalar)
 *
 *  Output (allocated by C++):
 *    displacements:   [ux1,uy1,uz1, ux2,uy2,uz2, ...] (3 per node)
 *    vonMises:        [vm1,vm2,...,vm8, ...]           (8 per element)
 *    stresses:        [sxx,syy,szz,sxy,syz,sxz, ...]   (6×8=48 per element)
 *
 * ============================================================================
 */

#include <Eigen/Sparse>
#include <Eigen/Dense>
#include <vector>
#include <array>
#include <cmath>
#include <cstdlib>
#include <cstring>
#include <iostream>
#include <chrono>

using SpMat = Eigen::SparseMatrix<double>;
using Triplet = Eigen::Triplet<double>;
using Vec = Eigen::VectorXd;
using Mat = Eigen::MatrixXd;

// ═════════════════════════════════════════════════════════════════════════
//  CONSTANTES H8
// ═════════════════════════════════════════════════════════════════════════

// Coordenadas naturales de los 8 nodos del cubo de referencia
static const double NODE_XI[8][3] = {
    {-1, -1, -1}, {+1, -1, -1}, {+1, +1, -1}, {-1, +1, -1},
    {-1, -1, +1}, {+1, -1, +1}, {+1, +1, +1}, {-1, +1, +1},
};

// 8 puntos de Gauss 2×2×2 en (±1/√3) con weight 1
static const double G = 0.5773502691896258;  // 1/sqrt(3)
static const double GAUSS[8][3] = {
    {-G, -G, -G}, {+G, -G, -G}, {+G, +G, -G}, {-G, +G, -G},
    {-G, -G, +G}, {+G, -G, +G}, {+G, +G, +G}, {-G, +G, +G},
};

// ═════════════════════════════════════════════════════════════════════════
//  KERNELS H8
// ═════════════════════════════════════════════════════════════════════════

/**
 * Derivadas de las funciones de forma respecto a (ξ, η, ζ) en el punto natural.
 * dN[d][i] = ∂N_i/∂coord_d donde d=0:ξ, 1:η, 2:ζ.
 */
static inline void shapeDerivativesNatural(double xi, double eta, double zeta, double dN[3][8]) {
    for (int i = 0; i < 8; i++) {
        const double xi_i = NODE_XI[i][0], eta_i = NODE_XI[i][1], zeta_i = NODE_XI[i][2];
        dN[0][i] = (xi_i / 8.0) * (1 + eta_i * eta) * (1 + zeta_i * zeta);
        dN[1][i] = (eta_i / 8.0) * (1 + xi_i * xi) * (1 + zeta_i * zeta);
        dN[2][i] = (zeta_i / 8.0) * (1 + xi_i * xi) * (1 + eta_i * eta);
    }
}

/** Calcula Jacobiano J = sum_i dN_i × x_i (3×3). */
static inline void jacobian(const double nodeCoords[8][3], const double dN[3][8], double J[3][3]) {
    for (int r = 0; r < 3; r++)
        for (int c = 0; c < 3; c++)
            J[r][c] = 0.0;
    for (int i = 0; i < 8; i++) {
        for (int d = 0; d < 3; d++) {
            J[d][0] += dN[d][i] * nodeCoords[i][0];
            J[d][1] += dN[d][i] * nodeCoords[i][1];
            J[d][2] += dN[d][i] * nodeCoords[i][2];
        }
    }
}

static inline double det3(const double M[3][3]) {
    return M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1])
         - M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0])
         + M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0]);
}

static inline void inv3(const double M[3][3], double Minv[3][3]) {
    const double d = det3(M);
    Minv[0][0] = (M[1][1] * M[2][2] - M[1][2] * M[2][1]) / d;
    Minv[0][1] = (M[0][2] * M[2][1] - M[0][1] * M[2][2]) / d;
    Minv[0][2] = (M[0][1] * M[1][2] - M[0][2] * M[1][1]) / d;
    Minv[1][0] = (M[1][2] * M[2][0] - M[1][0] * M[2][2]) / d;
    Minv[1][1] = (M[0][0] * M[2][2] - M[0][2] * M[2][0]) / d;
    Minv[1][2] = (M[0][2] * M[1][0] - M[0][0] * M[1][2]) / d;
    Minv[2][0] = (M[1][0] * M[2][1] - M[1][1] * M[2][0]) / d;
    Minv[2][1] = (M[0][1] * M[2][0] - M[0][0] * M[2][1]) / d;
    Minv[2][2] = (M[0][0] * M[1][1] - M[0][1] * M[1][0]) / d;
}

/** Construye matriz B 6×24 (strain-displacement) en el punto Gauss. */
static inline void bMatrix(const double dNxyz[3][8], double B[6][24]) {
    for (int r = 0; r < 6; r++)
        for (int c = 0; c < 24; c++)
            B[r][c] = 0.0;
    for (int i = 0; i < 8; i++) {
        const double dNx = dNxyz[0][i], dNy = dNxyz[1][i], dNz = dNxyz[2][i];
        const int c = i * 3;
        B[0][c + 0] = dNx;
        B[1][c + 1] = dNy;
        B[2][c + 2] = dNz;
        B[3][c + 0] = dNy; B[3][c + 1] = dNx;
        B[4][c + 1] = dNz; B[4][c + 2] = dNy;
        B[5][c + 0] = dNz; B[5][c + 2] = dNx;
    }
}

/** Matriz constitutiva isótropa elástica D 6×6 (Lamé λ, μ). */
static inline void dMatrix(double E, double nu, double D[6][6]) {
    const double lambda = (E * nu) / ((1 + nu) * (1 - 2 * nu));
    const double mu = E / (2 * (1 + nu));
    const double a = lambda + 2 * mu;
    for (int r = 0; r < 6; r++)
        for (int c = 0; c < 6; c++)
            D[r][c] = 0.0;
    D[0][0] = a; D[0][1] = lambda; D[0][2] = lambda;
    D[1][0] = lambda; D[1][1] = a; D[1][2] = lambda;
    D[2][0] = lambda; D[2][1] = lambda; D[2][2] = a;
    D[3][3] = mu;
    D[4][4] = mu;
    D[5][5] = mu;
}

/**
 * Calcula la matriz de rigidez del elemento H8 24×24.
 * K_e = ∑_g B^T D B |J| w_g  (8 puntos Gauss, weight=1)
 */
static void hex8Stiffness(const double nodeCoords[8][3], double E, double nu, double Ke[24][24]) {
    double D[6][6];
    dMatrix(E, nu, D);
    for (int r = 0; r < 24; r++)
        for (int c = 0; c < 24; c++)
            Ke[r][c] = 0.0;

    for (int g = 0; g < 8; g++) {
        const double xi = GAUSS[g][0], eta = GAUSS[g][1], zeta = GAUSS[g][2];
        double dNnat[3][8];
        shapeDerivativesNatural(xi, eta, zeta, dNnat);
        double J[3][3];
        jacobian(nodeCoords, dNnat, J);
        const double detJ = det3(J);
        double Jinv[3][3];
        inv3(J, Jinv);
        double dNxyz[3][8];
        for (int i = 0; i < 8; i++) {
            dNxyz[0][i] = Jinv[0][0] * dNnat[0][i] + Jinv[0][1] * dNnat[1][i] + Jinv[0][2] * dNnat[2][i];
            dNxyz[1][i] = Jinv[1][0] * dNnat[0][i] + Jinv[1][1] * dNnat[1][i] + Jinv[1][2] * dNnat[2][i];
            dNxyz[2][i] = Jinv[2][0] * dNnat[0][i] + Jinv[2][1] * dNnat[1][i] + Jinv[2][2] * dNnat[2][i];
        }
        double B[6][24];
        bMatrix(dNxyz, B);

        // K_e += B^T · D · B · |J|
        // Compute D·B first (6×24)
        double DB[6][24];
        for (int r = 0; r < 6; r++) {
            for (int c = 0; c < 24; c++) {
                double s = 0.0;
                for (int k = 0; k < 6; k++) s += D[r][k] * B[k][c];
                DB[r][c] = s;
            }
        }
        // K_e += B^T · DB · detJ
        for (int r = 0; r < 24; r++) {
            for (int c = 0; c < 24; c++) {
                double s = 0.0;
                for (int k = 0; k < 6; k++) s += B[k][r] * DB[k][c];
                Ke[r][c] += s * detJ;
            }
        }
    }
}

// ═════════════════════════════════════════════════════════════════════════
//  WASM ENTRY POINT
// ═════════════════════════════════════════════════════════════════════════

extern "C" {

void hex8_solve(
    // ── Geometry ──
    double* nodes_ptr, int num_nodes,           // [x1,y1,z1, x2,y2,z2, ...] 3*num_nodes
    int* elements_ptr, int num_elements,        // [n0..n7, ...] 8*num_elements

    // ── Material ──
    double E, double nu,

    // ── Boundary conditions ──
    int* supports_ptr, int num_supports,         // [node, fixUx, fixUy, fixUz, ...] 4*num_supports

    // ── Loads ──
    double* loads_ptr, int num_loads,            // [node, fx, fy, fz, ...] 4*num_loads

    // ── Outputs (alloc'd by C++, freed by JS) ──
    double** displacements_out, int* displacements_size_out,
    double** vonmises_out, int* vonmises_size_out,
    double** stresses_out, int* stresses_size_out,
    double* elapsed_ms_out
)
{
    using Clock = std::chrono::high_resolution_clock;
    auto t0 = Clock::now();

    const int N = num_nodes;
    const int NDOF = 3 * N;

    // ── Triplets para sparse assembly ──
    std::vector<Triplet> triplets;
    triplets.reserve(num_elements * 24 * 24);

    // ── Ensamble K (sparse) ──
    for (int e = 0; e < num_elements; e++) {
        // Extraer coordenadas de los 8 nodos del elemento
        int elem[8];
        for (int j = 0; j < 8; j++) elem[j] = elements_ptr[8 * e + j];
        double nc[8][3];
        for (int j = 0; j < 8; j++) {
            nc[j][0] = nodes_ptr[3 * elem[j] + 0];
            nc[j][1] = nodes_ptr[3 * elem[j] + 1];
            nc[j][2] = nodes_ptr[3 * elem[j] + 2];
        }
        double Ke[24][24];
        hex8Stiffness(nc, E, nu, Ke);
        for (int a = 0; a < 8; a++) {
            for (int b = 0; b < 8; b++) {
                for (int p = 0; p < 3; p++) {
                    for (int q = 0; q < 3; q++) {
                        const int row = 3 * elem[a] + p;
                        const int col = 3 * elem[b] + q;
                        triplets.emplace_back(row, col, Ke[3 * a + p][3 * b + q]);
                    }
                }
            }
        }
    }

    SpMat K(NDOF, NDOF);
    K.setFromTriplets(triplets.begin(), triplets.end());

    // ── F vector ──
    Vec F = Vec::Zero(NDOF);
    for (int i = 0; i < num_loads; i++) {
        const int n = static_cast<int>(loads_ptr[4 * i]);
        F(3 * n + 0) += loads_ptr[4 * i + 1];
        F(3 * n + 1) += loads_ptr[4 * i + 2];
        F(3 * n + 2) += loads_ptr[4 * i + 3];
    }

    // ── BCs: penalty grande sobre la diagonal donde fix=true ──
    const double PEN = 1e15;
    for (int i = 0; i < num_supports; i++) {
        const int n = supports_ptr[4 * i];
        const int fxx = supports_ptr[4 * i + 1];
        const int fyy = supports_ptr[4 * i + 2];
        const int fzz = supports_ptr[4 * i + 3];
        if (fxx) K.coeffRef(3 * n + 0, 3 * n + 0) += PEN;
        if (fyy) K.coeffRef(3 * n + 1, 3 * n + 1) += PEN;
        if (fzz) K.coeffRef(3 * n + 2, 3 * n + 2) += PEN;
    }

    // ── Resolver Ku = F (Cholesky LDLT sparse) ──
    Eigen::SimplicialLDLT<SpMat> solver;
    solver.compute(K);
    if (solver.info() != Eigen::Success) {
        std::cerr << "hex8_solve: Cholesky decomposition failed" << std::endl;
        *displacements_size_out = 0;
        *vonmises_size_out = 0;
        *stresses_size_out = 0;
        return;
    }
    Vec u = solver.solve(F);

    // ── Recovery: stresses + vonMises por elemento (8 Gauss points) ──
    double D[6][6];
    dMatrix(E, nu, D);

    const int dispSize = NDOF;
    *displacements_out = (double*)malloc(dispSize * sizeof(double));
    *displacements_size_out = dispSize;
    if (!*displacements_out) {
        std::cerr << "hex8_solve: malloc failed for displacements" << std::endl;
        *displacements_size_out = 0;
        return;
    }
    for (int i = 0; i < NDOF; i++) (*displacements_out)[i] = u(i);

    const int vmSize = num_elements * 8;
    *vonmises_out = (double*)malloc(vmSize * sizeof(double));
    *vonmises_size_out = vmSize;
    if (!*vonmises_out) {
        std::cerr << "hex8_solve: malloc failed for vonmises" << std::endl;
        *vonmises_size_out = 0;
        return;
    }

    const int stSize = num_elements * 8 * 6;  // 6 components × 8 gauss × N elements
    *stresses_out = (double*)malloc(stSize * sizeof(double));
    *stresses_size_out = stSize;
    if (!*stresses_out) {
        std::cerr << "hex8_solve: malloc failed for stresses" << std::endl;
        *stresses_size_out = 0;
        return;
    }

    for (int e = 0; e < num_elements; e++) {
        int elem[8];
        for (int j = 0; j < 8; j++) elem[j] = elements_ptr[8 * e + j];
        double nc[8][3];
        for (int j = 0; j < 8; j++) {
            nc[j][0] = nodes_ptr[3 * elem[j] + 0];
            nc[j][1] = nodes_ptr[3 * elem[j] + 1];
            nc[j][2] = nodes_ptr[3 * elem[j] + 2];
        }
        // u del elemento (24 DOFs)
        double ueElem[24];
        for (int j = 0; j < 8; j++) {
            ueElem[3 * j + 0] = u(3 * elem[j] + 0);
            ueElem[3 * j + 1] = u(3 * elem[j] + 1);
            ueElem[3 * j + 2] = u(3 * elem[j] + 2);
        }
        for (int g = 0; g < 8; g++) {
            const double xi = GAUSS[g][0], eta = GAUSS[g][1], zeta = GAUSS[g][2];
            double dNnat[3][8];
            shapeDerivativesNatural(xi, eta, zeta, dNnat);
            double J[3][3];
            jacobian(nc, dNnat, J);
            double Jinv[3][3];
            inv3(J, Jinv);
            double dNxyz[3][8];
            for (int i = 0; i < 8; i++) {
                dNxyz[0][i] = Jinv[0][0] * dNnat[0][i] + Jinv[0][1] * dNnat[1][i] + Jinv[0][2] * dNnat[2][i];
                dNxyz[1][i] = Jinv[1][0] * dNnat[0][i] + Jinv[1][1] * dNnat[1][i] + Jinv[1][2] * dNnat[2][i];
                dNxyz[2][i] = Jinv[2][0] * dNnat[0][i] + Jinv[2][1] * dNnat[1][i] + Jinv[2][2] * dNnat[2][i];
            }
            double B[6][24];
            bMatrix(dNxyz, B);
            // ε = B · u
            double eps[6] = {0, 0, 0, 0, 0, 0};
            for (int r = 0; r < 6; r++) {
                for (int c = 0; c < 24; c++) eps[r] += B[r][c] * ueElem[c];
            }
            // σ = D · ε
            double sig[6] = {0, 0, 0, 0, 0, 0};
            for (int r = 0; r < 6; r++) {
                for (int c = 0; c < 6; c++) sig[r] += D[r][c] * eps[c];
            }
            // von Mises 3D
            const double sxx = sig[0], syy = sig[1], szz = sig[2];
            const double sxy = sig[3], syz = sig[4], sxz = sig[5];
            const double vm = std::sqrt(
                0.5 * ((sxx - syy) * (sxx - syy) + (syy - szz) * (syy - szz) + (szz - sxx) * (szz - sxx))
                + 3 * (sxy * sxy + syz * syz + sxz * sxz)
            );
            (*vonmises_out)[e * 8 + g] = vm;
            const int sBase = (e * 8 + g) * 6;
            (*stresses_out)[sBase + 0] = sxx;
            (*stresses_out)[sBase + 1] = syy;
            (*stresses_out)[sBase + 2] = szz;
            (*stresses_out)[sBase + 3] = sxy;
            (*stresses_out)[sBase + 4] = syz;
            (*stresses_out)[sBase + 5] = sxz;
        }
    }

    auto t1 = Clock::now();
    *elapsed_ms_out = std::chrono::duration<double, std::milli>(t1 - t0).count();
}

}  // extern "C"
