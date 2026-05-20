// =============================================================================
// Shell THIN — 4-node shell element with Kirchhoff plate bending
// ETABS-equivalent: "Shell-Thin" = DKE (Discrete Kirchhoff Element, Wilson Ch10)
//
// Combines: Membrane (plane stress Q4) + Plate bending (MZC Kirchhoff)
// 6 DOFs per node: u, v, w, θx, θy, θz → 24 DOFs total
//
// Differences vs shellQ4.cpp (Mindlin/Shell-Thick):
//   - NO shear DOFs in bending formulation (Kirchhoff hypothesis)
//   - Free of shear locking for thin slabs (t/L → 0)
//   - Uses MZC (Melosh-Zienkiewicz-Cheung / ACM) plate bending element
//
// Validated: Mesa Torsión (Gabriela/Seproinca, ETABS 19.1) matchea < 1.5%
// en V/M/T para Dead, Live, SCP, UDCon1, UDCon2 (hekatan-struct-py v0.1).
//
// Limitación MZC: válido para Q4 RECTANGULAR alineado con XY locales.
// Para Q4 distorsionados o no-rectangulares, usar shellQ4.cpp (Mindlin).
//
// Ref: Reddy "Theory and Analysis of Elastic Plates and Shells" §5.4
//      Wilson "Análisis Estático y Dinámico de Estructuras" Ch.10 (DKE)
// =============================================================================

#include "../data-model.h"
#include <vector>
#include <cmath>
#include <Eigen/Dense>

template <typename K, typename V>
static V getMapValST(const std::map<K, V> &map, const K &key, const V &defaultValue)
{
    auto it = map.find(key);
    return (it != map.end()) ? it->second : defaultValue;
}

// ─── Shape functions Q4 ──────────────────────────────────────────────────────
static void shapeFunctionsQ4_ST(double xi, double eta,
                                 double N[4], double dNdxi[4], double dNdeta[4])
{
    N[0] = 0.25 * (1 - xi) * (1 - eta);
    N[1] = 0.25 * (1 + xi) * (1 - eta);
    N[2] = 0.25 * (1 + xi) * (1 + eta);
    N[3] = 0.25 * (1 - xi) * (1 + eta);
    dNdxi[0] = -0.25 * (1 - eta); dNdxi[1] = 0.25 * (1 - eta);
    dNdxi[2] = 0.25 * (1 + eta);  dNdxi[3] = -0.25 * (1 + eta);
    dNdeta[0] = -0.25 * (1 - xi); dNdeta[1] = -0.25 * (1 + xi);
    dNdeta[2] = 0.25 * (1 + xi);  dNdeta[3] = 0.25 * (1 - xi);
}

// ─── Plane stress Membrane K (8×8) ──────────────────────────────────────────
static Eigen::MatrixXd getMembraneK_Thin(const double x[4], const double y[4],
                                          double E, double nu, double t)
{
    Eigen::Matrix3d Em;
    double c = E / (1 - nu * nu);
    Em << c,      c * nu, 0,
          c * nu, c,      0,
          0,      0,      c * (1 - nu) / 2.0;

    // 2x2 Gauss
    double gp[2] = {-1.0/std::sqrt(3.0), 1.0/std::sqrt(3.0)};
    double gw[2] = {1.0, 1.0};

    Eigen::MatrixXd K = Eigen::MatrixXd::Zero(8, 8);
    for (int ix = 0; ix < 2; ix++) for (int iy = 0; iy < 2; iy++) {
        double xi = gp[ix], eta = gp[iy];
        double N[4], dNdxi[4], dNdeta[4];
        shapeFunctionsQ4_ST(xi, eta, N, dNdxi, dNdeta);
        // Jacobiano
        double J11 = 0, J12 = 0, J21 = 0, J22 = 0;
        for (int i = 0; i < 4; i++) {
            J11 += dNdxi[i]  * x[i]; J12 += dNdxi[i]  * y[i];
            J21 += dNdeta[i] * x[i]; J22 += dNdeta[i] * y[i];
        }
        double detJ = J11 * J22 - J12 * J21;
        double Jinv11 =  J22 / detJ, Jinv12 = -J12 / detJ;
        double Jinv21 = -J21 / detJ, Jinv22 =  J11 / detJ;
        // B (3 × 8)
        Eigen::MatrixXd B = Eigen::MatrixXd::Zero(3, 8);
        for (int i = 0; i < 4; i++) {
            double dNdx = Jinv11 * dNdxi[i] + Jinv12 * dNdeta[i];
            double dNdy = Jinv21 * dNdxi[i] + Jinv22 * dNdeta[i];
            B(0, 2*i)   = dNdx;
            B(1, 2*i+1) = dNdy;
            B(2, 2*i)   = dNdy;
            B(2, 2*i+1) = dNdx;
        }
        K += gw[ix] * gw[iy] * B.transpose() * Em * B * t * detJ;
    }
    return K;
}

// ─── MZC Kirchhoff Plate Bending (12×12) — el corazón Shell-Thin ────────────
// DOFs por nodo: [w, θx, θy] donde θx = ∂w/∂y, θy = -∂w/∂x
// Asume Q4 rectangular alineado con XY locales.
// Validado vs ETABS Shell-Thin via hekatan-struct-py Mesa Torsión.
static Eigen::MatrixXd getBendingK_MZC(const double x[4], const double y[4],
                                        double E, double nu, double t)
{
    double xmin = x[0], xmax = x[0], ymin = y[0], ymax = y[0];
    for (int i = 1; i < 4; i++) {
        if (x[i] < xmin) xmin = x[i]; if (x[i] > xmax) xmax = x[i];
        if (y[i] < ymin) ymin = y[i]; if (y[i] > ymax) ymax = y[i];
    }
    double a = (xmax - xmin) / 2.0;
    double b = (ymax - ymin) / 2.0;

    double D0 = E * t * t * t / (12.0 * (1.0 - nu * nu));
    Eigen::Matrix3d D;
    D << D0,      D0 * nu, 0,
         D0 * nu, D0,      0,
         0,       0,       D0 * (1 - nu) / 2.0;

    double xi_n[4]  = {-1,  1, 1, -1};
    double eta_n[4] = {-1, -1, 1,  1};

    // 3×3 Gauss (integra cubico × cubico = 6º orden exacto)
    double gp[3] = {-std::sqrt(3.0/5.0), 0.0, std::sqrt(3.0/5.0)};
    double gw[3] = {5.0/9.0, 8.0/9.0, 5.0/9.0};

    Eigen::MatrixXd K = Eigen::MatrixXd::Zero(12, 12);

    for (int ix = 0; ix < 3; ix++) for (int iy = 0; iy < 3; iy++) {
        double xi = gp[ix], eta = gp[iy];
        double w_int = gw[ix] * gw[iy];

        Eigen::MatrixXd B = Eigen::MatrixXd::Zero(3, 12);
        for (int i = 0; i < 4; i++) {
            double xi_i = xi_n[i], eta_i = eta_n[i];
            double xi_ii = xi_i * xi, eta_ii = eta_i * eta;

            // ── H_i^1 (coeficiente para w_i) ──
            // H1 = (1/8)(1+ξ_iξ)(1+η_iη)(2 + ξ_iξ + η_iη - ξ² - η²)
            double term1 = (1 + xi_ii) * (1 + eta_ii);
            double t2_ = 2 + xi_ii + eta_ii - xi*xi - eta*eta;
            double dt1_dxi  = xi_i * (1 + eta_ii);
            double dt2_dxi  = xi_i - 2 * xi;
            double dt1_deta = eta_i * (1 + xi_ii);
            double dt2_deta = eta_i - 2 * eta;
            double d2H1_dxi2    = (1.0/8.0) * (term1 * (-2) + 2 * dt1_dxi * dt2_dxi);
            double d2H1_deta2   = (1.0/8.0) * (term1 * (-2) + 2 * dt1_deta * dt2_deta);
            double d2t1_dxideta = xi_i * eta_i;
            double d2H1_dxideta = (1.0/8.0) * (d2t1_dxideta * t2_ + dt1_dxi * dt2_deta
                                                + dt1_deta * dt2_dxi);

            // ── H_i^2 (coeficiente para θx_i) ──
            // H2 = (b/8) η_i (1+ξ_iξ)(1+η_iη)²(η_iη - 1)
            double d2H2_dxi2    = 0; // lineal en ξ
            double d2H2_deta2   = (b/8.0) * eta_i * (1 + xi_ii) * 2.0 * (3 * eta_ii + 1) * eta_i * eta_i;
            double d2H2_dxideta = (b/8.0) * xi_i * eta_i * eta_i * (1 + eta_ii) * (3 * eta_ii - 1);

            // ── H_i^3 (coeficiente para θy_i) ──
            // H3 = -(a/8) ξ_i (1+ξ_iξ)²(ξ_iξ - 1)(1+η_iη)  (simétrico a H2)
            double d2H3_dxi2    = -(a/8.0) * xi_i * (1 + eta_ii) * 2.0 * (3 * xi_ii + 1) * xi_i * xi_i;
            double d2H3_deta2   = 0;
            double d2H3_dxideta = -(a/8.0) * eta_i * xi_i * xi_i * (1 + xi_ii) * (3 * xi_ii - 1);

            int col_w  = 3*i + 0;
            int col_tx = 3*i + 1;
            int col_ty = 3*i + 2;

            // Curvaturas: κ_x = -∂²w/∂x², κ_y = -∂²w/∂y², 2κ_xy = -2∂²w/∂x∂y
            // Conversión natural → física: ∂²/∂x² = (1/a²)∂²/∂ξ², ∂²/∂y² = (1/b²)∂²/∂η², ∂²/∂x∂y = (1/ab)∂²/∂ξ∂η
            B(0, col_w)  = -d2H1_dxi2 / (a*a);
            B(1, col_w)  = -d2H1_deta2 / (b*b);
            B(2, col_w)  = -2 * d2H1_dxideta / (a*b);

            B(0, col_tx) = -d2H2_dxi2 / (a*a);
            B(1, col_tx) = -d2H2_deta2 / (b*b);
            B(2, col_tx) = -2 * d2H2_dxideta / (a*b);

            B(0, col_ty) = -d2H3_dxi2 / (a*a);
            B(1, col_ty) = -d2H3_deta2 / (b*b);
            B(2, col_ty) = -2 * d2H3_dxideta / (a*b);
        }
        double detJ = a * b;
        K += w_int * B.transpose() * D * B * detJ;
    }
    return K;
}

// ─── Public API: 24×24 K matrix para Shell-Thin element ────────────────────
// Ensamble: Membrane (Ux, Uy) + MZC Bending (Uz, Rx, Ry) + drilling penalty (Rz)
Eigen::MatrixXd getLocalStiffnessMatrixShellThin(
    const std::vector<Node> &nodes,
    const ElementInputs &elementInputs,
    int index)
{
    // Material y geometría
    double E = getMapValST(elementInputs.elasticities, index, 0.0);
    double nu = getMapValST(elementInputs.poissonsRatios, index, 0.2);
    double t = getMapValST(elementInputs.thicknesses, index, 0.0);
    if (E <= 0 || t <= 0) return Eigen::MatrixXd::Zero(24, 24);

    // Proyectar coords 3D al sistema local del shell
    Eigen::Vector3d p0(nodes[0][0], nodes[0][1], nodes[0][2]);
    Eigen::Vector3d p1(nodes[1][0], nodes[1][1], nodes[1][2]);
    Eigen::Vector3d p2(nodes[2][0], nodes[2][1], nodes[2][2]);
    Eigen::Vector3d p3(nodes[3][0], nodes[3][1], nodes[3][2]);
    Eigen::Vector3d v01 = p1 - p0, v32 = p2 - p3;
    Eigen::Vector3d localX = (v01 + v32);
    double lenX = localX.norm();
    if (lenX < 1e-12) return Eigen::MatrixXd::Zero(24, 24);
    localX /= lenX;
    Eigen::Vector3d d02 = p2 - p0, d13 = p3 - p1;
    Eigen::Vector3d localZ = d02.cross(d13);
    double lenZ = localZ.norm();
    if (lenZ < 1e-12) return Eigen::MatrixXd::Zero(24, 24);
    localZ /= lenZ;
    Eigen::Vector3d localY = localZ.cross(localX);
    localY.normalize();
    localX = localY.cross(localZ); localX.normalize();
    Eigen::Vector3d center = 0.25 * (p0 + p1 + p2 + p3);

    double x[4], y[4];
    Eigen::Vector3d pts[4] = {p0, p1, p2, p3};
    for (int i = 0; i < 4; i++) {
        Eigen::Vector3d d = pts[i] - center;
        x[i] = d.dot(localX);
        y[i] = d.dot(localY);
    }

    // ETABS Property Modifiers
    double mFactor = getMapValST(elementInputs.membraneModifiers, index, 1.0);
    double bFactor = getMapValST(elementInputs.bendingModifiers, index, 1.0);

    Eigen::MatrixXd Km = getMembraneK_Thin(x, y, E, nu, t);   // 8×8
    Eigen::MatrixXd Kb = getBendingK_MZC(x, y, E, nu, t);     // 12×12 Kirchhoff
    Km *= mFactor;
    Kb *= bFactor;

    // Drilling stiffness penalty (Rz)
    double drill = 0;
    for (int i = 0; i < 8; i++) drill += std::abs(Km(i, i));
    drill *= 1e-6 / 8.0;
    if (drill < 1e-15) drill = E * t * 1e-6 * std::max(mFactor, 1e-6);

    // Ensamblar en 24×24 (orden DOFs: [u, v, w, θx, θy, θz] por nodo)
    Eigen::MatrixXd K = Eigen::MatrixXd::Zero(24, 24);
    for (int ni = 0; ni < 4; ni++) for (int nj = 0; nj < 4; nj++) {
        // Membrane: u=6i+0, v=6i+1
        for (int di = 0; di < 2; di++) for (int dj = 0; dj < 2; dj++) {
            K(ni*6 + di, nj*6 + dj) = Km(ni*2 + di, nj*2 + dj);
        }
        // Bending: w=6i+2, θx=6i+3, θy=6i+4
        for (int di = 0; di < 3; di++) for (int dj = 0; dj < 3; dj++) {
            K(ni*6 + 2 + di, nj*6 + 2 + dj) = Kb(ni*3 + di, nj*3 + dj);
        }
    }
    // Drilling: θz=6i+5
    for (int i = 0; i < 4; i++) K(i*6 + 5, i*6 + 5) = drill;

    return K;
}
