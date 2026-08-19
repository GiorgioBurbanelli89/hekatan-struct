// =============================================================================
//  plate_formulations.cpp - C++17, compilable a WASM via emscripten
// =============================================================================
//  Implementa 4 formulaciones de elemento placa Kirchhoff sobre la MISMA malla
//  y devuelve {w_centro, Mxy_esquina, w_grid, Mxy_grid, time_ms} para que el
//  HTML las plotee y compare.
//
//  Formulaciones implementadas:
//   1. BFS  - Bogner-Fox-Schmit Q4 (16 DOF/elem, 4 DOF/nodo: w,βx,βy,ψ)
//   2. DKQ  - Batoz-Tahar Discrete Kirchhoff Quadrilateral (12 DOF, igual SAP 2000 Plate-Thin)
//   3. MELO - Melosh ACM non-conforming (12 DOF)
//   4. MIN  - Mindlin Q4 selective reduced integration (12 DOF, igual SAP 2000 Plate-Thick)
//
//  Caso fijo (idéntico al benchmark Calcpad oficial / SAP 2000):
//    a = 6 m, b = 4 m, t = 0.10 m
//    E = 35 GPa, ν = 0.15
//    q = 10 kN/m² uniforme
//    Mesh n_a × n_b configurable desde JS
//    BC: simply-supported 4 bordes (hard SS)
// =============================================================================
#include <vector>
#include <array>
#include <cmath>
#include <chrono>
#include <cstring>

#ifdef __EMSCRIPTEN__
#include <emscripten/emscripten.h>
#define EXPORT EMSCRIPTEN_KEEPALIVE
#else
#define EXPORT
#endif

using std::vector;
constexpr double PEN = 1e20;
constexpr double SQRT3 = 1.7320508075688772;

// ─────────────────────────────────────────────────────────────────────────────
//  Helpers — densas, factorización LU con pivoteo parcial (sin BLAS)
// ─────────────────────────────────────────────────────────────────────────────
static void solve_dense_LU(vector<double>& A, vector<double>& b, int n) {
    // A row-major n*n, b length n. Sobrescribe.
    vector<int> piv(n);
    for (int k = 0; k < n; ++k) {
        int p = k; double maxv = std::fabs(A[k*n + k]);
        for (int i = k + 1; i < n; ++i) {
            double v = std::fabs(A[i*n + k]);
            if (v > maxv) { maxv = v; p = i; }
        }
        piv[k] = p;
        if (p != k) {
            for (int j = 0; j < n; ++j) std::swap(A[k*n + j], A[p*n + j]);
            std::swap(b[k], b[p]);
        }
        double akk = A[k*n + k];
        if (std::fabs(akk) < 1e-30) continue;
        for (int i = k + 1; i < n; ++i) {
            double m = A[i*n + k] / akk;
            A[i*n + k] = m;
            for (int j = k + 1; j < n; ++j) A[i*n + j] -= m * A[k*n + j];
            b[i] -= m * b[k];
        }
    }
    for (int i = n - 1; i >= 0; --i) {
        double s = b[i];
        for (int j = i + 1; j < n; ++j) s -= A[i*n + j] * b[j];
        b[i] = s / A[i*n + i];
    }
}

// ─────────────────────────────────────────────────────────────────────────────
//  Estructura común de resultados
// ─────────────────────────────────────────────────────────────────────────────
struct Result {
    double w_centro_mm;        // w en el centro (positivo hacia arriba)
    double Mxy_esquina;        // M_xy en la esquina (0,0)
    double Mx_centro;
    double My_centro;
    double time_ms;
    vector<double> w_nodes;    // 1×n_j (mm)
    vector<double> Mxy_nodes;  // 1×n_j (kNm/m)
    vector<double> Mx_nodes;
    vector<double> My_nodes;
};

struct MeshConfig {
    double a, b, t, E, nu, q;
    int n_a, n_b;
};

// ─────────────────────────────────────────────────────────────────────────────
//  Cuadratura
// ─────────────────────────────────────────────────────────────────────────────
static const double GP4[4] = {0.0694318442029737, 0.3300094782075719,
                              0.6699905217924281, 0.9305681557970263};
static const double GW4[4] = {0.1739274225687269, 0.3260725774312731,
                              0.3260725774312731, 0.1739274225687269};
static const double GP2[2] = {-0.5773502691896257, 0.5773502691896257};
static const double GW2[2] = {1.0, 1.0};

// ═════════════════════════════════════════════════════════════════════════════
//  FORMULACIÓN 1: BFS Q4 (16 DOF/elem, 4 DOF/nodo)
// ═════════════════════════════════════════════════════════════════════════════
static void bfs_element_K_F(double a1, double b1, double q,
                             const double D[3][3],
                             double Ke[16][16], double Fe[16]) {
    for (int i = 0; i < 16; ++i) { Fe[i] = 0.0; for (int j = 0; j < 16; ++j) Ke[i][j] = 0.0; }
    for (int ig = 0; ig < 4; ++ig) for (int jg = 0; jg < 4; ++jg) {
        double xi = GP4[ig], eta = GP4[jg];
        double wgt = GW4[ig] * GW4[jg];
        // Hermite cubics en xi (longitud a1)
        double P1a = 1 - xi*xi*(3 - 2*xi);
        double P2a = xi*a1*(1 - xi*(2 - xi));
        double P3a = xi*xi*(3 - 2*xi);
        double P4a = xi*xi*a1*(xi - 1);
        double Pd1a = -6*(xi/a1)*(1 - xi),  Pd2a = 1 - xi*(4 - 3*xi);
        double Pd3a =  6*(xi/a1)*(1 - xi),  Pd4a = -xi*(2 - 3*xi);
        double Pdd1a = -(6/(a1*a1))*(1 - 2*xi), Pdd2a = -(2/a1)*(2 - 3*xi);
        double Pdd3a =  (6/(a1*a1))*(1 - 2*xi), Pdd4a = -(2/a1)*(1 - 3*xi);
        // Idem eta
        double P1b = 1 - eta*eta*(3 - 2*eta);
        double P2b = eta*b1*(1 - eta*(2 - eta));
        double P3b = eta*eta*(3 - 2*eta);
        double P4b = eta*eta*b1*(eta - 1);
        double Pd1b = -6*(eta/b1)*(1 - eta), Pd2b = 1 - eta*(4 - 3*eta);
        double Pd3b =  6*(eta/b1)*(1 - eta), Pd4b = -eta*(2 - 3*eta);
        double Pdd1b = -(6/(b1*b1))*(1 - 2*eta), Pdd2b = -(2/b1)*(2 - 3*eta);
        double Pdd3b =  (6/(b1*b1))*(1 - 2*eta), Pdd4b = -(2/b1)*(1 - 3*eta);
        double B1[16] = {Pdd1a*P1b, Pdd2a*P1b, Pdd1a*P2b, Pdd2a*P2b,
                         Pdd3a*P1b, Pdd4a*P1b, Pdd3a*P2b, Pdd4a*P2b,
                         Pdd3a*P3b, Pdd4a*P3b, Pdd3a*P4b, Pdd4a*P4b,
                         Pdd1a*P3b, Pdd2a*P3b, Pdd1a*P4b, Pdd2a*P4b};
        double B2[16] = {P1a*Pdd1b, P2a*Pdd1b, P1a*Pdd2b, P2a*Pdd2b,
                         P3a*Pdd1b, P4a*Pdd1b, P3a*Pdd2b, P4a*Pdd2b,
                         P3a*Pdd3b, P4a*Pdd3b, P3a*Pdd4b, P4a*Pdd4b,
                         P1a*Pdd3b, P2a*Pdd3b, P1a*Pdd4b, P2a*Pdd4b};
        double B3[16] = {Pd1a*Pd1b, Pd2a*Pd1b, Pd1a*Pd2b, Pd2a*Pd2b,
                         Pd3a*Pd1b, Pd4a*Pd1b, Pd3a*Pd2b, Pd4a*Pd2b,
                         Pd3a*Pd3b, Pd4a*Pd3b, Pd3a*Pd4b, Pd4a*Pd4b,
                         Pd1a*Pd3b, Pd2a*Pd3b, Pd1a*Pd4b, Pd2a*Pd4b};
        for (int k = 0; k < 16; ++k) B3[k] *= 2.0;
        double N[16] = {P1a*P1b, P2a*P1b, P1a*P2b, P2a*P2b,
                        P3a*P1b, P4a*P1b, P3a*P2b, P4a*P2b,
                        P3a*P3b, P4a*P3b, P3a*P4b, P4a*P4b,
                        P1a*P3b, P2a*P3b, P1a*P4b, P2a*P4b};
        double jac = a1 * b1 * wgt;
        // K_e += B^T D B * jac
        double DB[3][16];
        for (int k = 0; k < 16; ++k) {
            DB[0][k] = D[0][0]*B1[k] + D[0][1]*B2[k];
            DB[1][k] = D[1][0]*B1[k] + D[1][1]*B2[k];
            DB[2][k] = D[2][2]*B3[k];
        }
        for (int i = 0; i < 16; ++i) for (int j = 0; j < 16; ++j)
            Ke[i][j] += (B1[i]*DB[0][j] + B2[i]*DB[1][j] + B3[i]*DB[2][j]) * jac;
        for (int k = 0; k < 16; ++k) Fe[k] += N[k] * q * jac;
    }
}

static void bfs_eval_M_at(double a1, double b1, double xi, double eta,
                            const double D[3][3], const double Ze[16],
                            double& Mx, double& My, double& Mxy) {
    double P1a = 1 - xi*xi*(3 - 2*xi);
    double P2a = xi*a1*(1 - xi*(2 - xi));
    double P3a = xi*xi*(3 - 2*xi);
    double P4a = xi*xi*a1*(xi - 1);
    double Pd1a = -6*(xi/a1)*(1 - xi),  Pd2a = 1 - xi*(4 - 3*xi);
    double Pd3a =  6*(xi/a1)*(1 - xi),  Pd4a = -xi*(2 - 3*xi);
    double Pdd1a = -(6/(a1*a1))*(1 - 2*xi), Pdd2a = -(2/a1)*(2 - 3*xi);
    double Pdd3a =  (6/(a1*a1))*(1 - 2*xi), Pdd4a = -(2/a1)*(1 - 3*xi);
    double P1b = 1 - eta*eta*(3 - 2*eta);
    double P2b = eta*b1*(1 - eta*(2 - eta));
    double P3b = eta*eta*(3 - 2*eta);
    double P4b = eta*eta*b1*(eta - 1);
    double Pd1b = -6*(eta/b1)*(1 - eta), Pd2b = 1 - eta*(4 - 3*eta);
    double Pd3b =  6*(eta/b1)*(1 - eta), Pd4b = -eta*(2 - 3*eta);
    double Pdd1b = -(6/(b1*b1))*(1 - 2*eta), Pdd2b = -(2/b1)*(2 - 3*eta);
    double Pdd3b =  (6/(b1*b1))*(1 - 2*eta), Pdd4b = -(2/b1)*(1 - 3*eta);
    double B1[16] = {Pdd1a*P1b, Pdd2a*P1b, Pdd1a*P2b, Pdd2a*P2b,
                     Pdd3a*P1b, Pdd4a*P1b, Pdd3a*P2b, Pdd4a*P2b,
                     Pdd3a*P3b, Pdd4a*P3b, Pdd3a*P4b, Pdd4a*P4b,
                     Pdd1a*P3b, Pdd2a*P3b, Pdd1a*P4b, Pdd2a*P4b};
    double B2[16] = {P1a*Pdd1b, P2a*Pdd1b, P1a*Pdd2b, P2a*Pdd2b,
                     P3a*Pdd1b, P4a*Pdd1b, P3a*Pdd2b, P4a*Pdd2b,
                     P3a*Pdd3b, P4a*Pdd3b, P3a*Pdd4b, P4a*Pdd4b,
                     P1a*Pdd3b, P2a*Pdd3b, P1a*Pdd4b, P2a*Pdd4b};
    double B3[16] = {Pd1a*Pd1b, Pd2a*Pd1b, Pd1a*Pd2b, Pd2a*Pd2b,
                     Pd3a*Pd1b, Pd4a*Pd1b, Pd3a*Pd2b, Pd4a*Pd2b,
                     Pd3a*Pd3b, Pd4a*Pd3b, Pd3a*Pd4b, Pd4a*Pd4b,
                     Pd1a*Pd3b, Pd2a*Pd3b, Pd1a*Pd4b, Pd2a*Pd4b};
    double sumB1 = 0, sumB2 = 0, sumB3 = 0;
    for (int k = 0; k < 16; ++k) { sumB1 += B1[k]*Ze[k]; sumB2 += B2[k]*Ze[k]; sumB3 += 2*B3[k]*Ze[k]; }
    Mx = -(D[0][0]*sumB1 + D[0][1]*sumB2);
    My = -(D[1][0]*sumB1 + D[1][1]*sumB2);
    Mxy = -(D[2][2]*sumB3);
}

// ═════════════════════════════════════════════════════════════════════════════
//  FORMULACIÓN 2: Batoz DKQ (12 DOF/elem, 3 DOF/nodo) - IGUAL SAP 2000 Plate-Thin
// ═════════════════════════════════════════════════════════════════════════════
//  DOF order: [w_1, βx_1, βy_1, w_2, βx_2, βy_2, w_3, βx_3, βy_3, w_4, βx_4, βy_4]
//  βx = ∂w/∂x, βy = ∂w/∂y
// ─────────────────────────────────────────────────────────────────────────────
static void dkq_eval_B(double xi, double eta, double a1, double b1,
                        double B[3][12]) {
    double a_h = a1*0.5, b_h = b1*0.5;
    double c_a = 1.5 / a1, c_b = 1.5 / b1;
    // Q8 Serendipity en (xi, eta)
    double xi_q8[]  = {-1, 1, 1, -1,  0, 1, 0, -1};
    double eta_q8[] = {-1,-1, 1,  1, -1, 0, 1,  0};
    double N[8], dNdxi[8], dNdeta[8];
    for (int k = 0; k < 4; ++k) {
        double s = xi_q8[k], t = eta_q8[k];
        N[k] = 0.25*(1+s*xi)*(1+t*eta)*(s*xi + t*eta - 1);
        dNdxi[k]  = 0.25*s*(1+t*eta)*(2*s*xi + t*eta);
        dNdeta[k] = 0.25*t*(1+s*xi)*(s*xi + 2*t*eta);
    }
    N[4] = 0.5*(1-xi*xi)*(1-eta); dNdxi[4] = -xi*(1-eta); dNdeta[4] = -0.5*(1-xi*xi);
    N[5] = 0.5*(1+xi)*(1-eta*eta); dNdxi[5] = 0.5*(1-eta*eta); dNdeta[5] = -eta*(1+xi);
    N[6] = 0.5*(1-xi*xi)*(1+eta); dNdxi[6] = -xi*(1+eta); dNdeta[6] = 0.5*(1-xi*xi);
    N[7] = 0.5*(1-xi)*(1-eta*eta); dNdxi[7] = -0.5*(1-eta*eta); dNdeta[7] = -eta*(1-xi);
    // dHx, dHy en (xi, eta)
    double dHx_dxi[12]  = {0}, dHx_deta[12] = {0};
    double dHy_dxi[12]  = {0}, dHy_deta[12] = {0};
    // w_1
    dHx_dxi[0]  = -c_a*dNdxi[4];   dHx_deta[0] = -c_a*dNdeta[4];
    dHy_dxi[0]  = -c_b*dNdxi[7];   dHy_deta[0] = -c_b*dNdeta[7];
    // βx_1
    dHx_dxi[1]  = dNdxi[0]  - 0.25*dNdxi[4]  + 0.5*dNdxi[7];
    dHx_deta[1] = dNdeta[0] - 0.25*dNdeta[4] + 0.5*dNdeta[7];
    // βy_1
    dHy_dxi[2]  = dNdxi[0]  + 0.5*dNdxi[4]  - 0.25*dNdxi[7];
    dHy_deta[2] = dNdeta[0] + 0.5*dNdeta[4] - 0.25*dNdeta[7];
    // w_2
    dHx_dxi[3]  = c_a*dNdxi[4];    dHx_deta[3] = c_a*dNdeta[4];
    dHy_dxi[3]  = -c_b*dNdxi[5];   dHy_deta[3] = -c_b*dNdeta[5];
    // βx_2
    dHx_dxi[4]  = dNdxi[1]  - 0.25*dNdxi[4]  + 0.5*dNdxi[5];
    dHx_deta[4] = dNdeta[1] - 0.25*dNdeta[4] + 0.5*dNdeta[5];
    // βy_2
    dHy_dxi[5]  = dNdxi[1]  + 0.5*dNdxi[4]  - 0.25*dNdxi[5];
    dHy_deta[5] = dNdeta[1] + 0.5*dNdeta[4] - 0.25*dNdeta[5];
    // w_3
    dHx_dxi[6]  = c_a*dNdxi[6];    dHx_deta[6] = c_a*dNdeta[6];
    dHy_dxi[6]  = c_b*dNdxi[5];    dHy_deta[6] = c_b*dNdeta[5];
    // βx_3
    dHx_dxi[7]  = dNdxi[2]  + 0.5*dNdxi[5]  - 0.25*dNdxi[6];
    dHx_deta[7] = dNdeta[2] + 0.5*dNdeta[5] - 0.25*dNdeta[6];
    // βy_3
    dHy_dxi[8]  = dNdxi[2]  - 0.25*dNdxi[5]  + 0.5*dNdxi[6];
    dHy_deta[8] = dNdeta[2] - 0.25*dNdeta[5] + 0.5*dNdeta[6];
    // w_4
    dHx_dxi[9]  = -c_a*dNdxi[6];   dHx_deta[9] = -c_a*dNdeta[6];
    dHy_dxi[9]  = c_b*dNdxi[7];    dHy_deta[9] = c_b*dNdeta[7];
    // βx_4
    dHx_dxi[10]  = dNdxi[3]  - 0.25*dNdxi[6]  + 0.5*dNdxi[7];
    dHx_deta[10] = dNdeta[3] - 0.25*dNdeta[6] + 0.5*dNdeta[7];
    // βy_4
    dHy_dxi[11]  = dNdxi[3]  + 0.5*dNdxi[6]  - 0.25*dNdxi[7];
    dHy_deta[11] = dNdeta[3] + 0.5*dNdeta[6] - 0.25*dNdeta[7];
    for (int j = 0; j < 12; ++j) {
        B[0][j] = dHx_dxi[j]  / a_h;
        B[1][j] = dHy_deta[j] / b_h;
        B[2][j] = dHx_deta[j] / b_h + dHy_dxi[j] / a_h;
    }
}

static void dkq_element_K_F(double a1, double b1, double q,
                              const double D[3][3],
                              double Ke[12][12], double Fe[12]) {
    for (int i = 0; i < 12; ++i) { Fe[i] = 0.0; for (int j = 0; j < 12; ++j) Ke[i][j] = 0.0; }
    double a_h = a1*0.5, b_h = b1*0.5;
    for (int ig = 0; ig < 2; ++ig) for (int jg = 0; jg < 2; ++jg) {
        double xi = GP2[ig], eta = GP2[jg];
        double wgt = GW2[ig] * GW2[jg];
        double B[3][12]; dkq_eval_B(xi, eta, a1, b1, B);
        double DB[3][12];
        for (int k = 0; k < 12; ++k) {
            DB[0][k] = D[0][0]*B[0][k] + D[0][1]*B[1][k];
            DB[1][k] = D[1][0]*B[0][k] + D[1][1]*B[1][k];
            DB[2][k] = D[2][2]*B[2][k];
        }
        double jac = a_h * b_h * wgt;
        for (int i = 0; i < 12; ++i) for (int j = 0; j < 12; ++j)
            Ke[i][j] += (B[0][i]*DB[0][j] + B[1][i]*DB[1][j] + B[2][i]*DB[2][j]) * jac;
    }
    // F_e: consistent Q4 bilinear → q*a1*b1/4 en cada DOF de w
    Fe[0] = Fe[3] = Fe[6] = Fe[9] = q * a1 * b1 / 4.0;
}

// ═════════════════════════════════════════════════════════════════════════════
//  FORMULACIÓN 3: Melosh ACM (12 DOF/elem, non-conforming)
// ═════════════════════════════════════════════════════════════════════════════
static void melosh_eval_B(double xi, double eta, double a1, double b1,
                            double B[3][12]) {
    double a_h = a1*0.5, b_h = b1*0.5;
    double xi_n[]  = {-1,  1, 1, -1};
    double eta_n[] = {-1, -1, 1,  1};
    double Bxx[12] = {0}, Byy[12] = {0}, Bxy[12] = {0};
    for (int k = 0; k < 4; ++k) {
        double si = xi_n[k], ti = eta_n[k];
        double c = 1 + si*xi, d = 1 + ti*eta;
        double en = 2 + si*xi + ti*eta - xi*xi - eta*eta;
        double d2Nw_dxi2 = -3*si*xi*d / 4.0;
        double d2Nw_deta2 = -3*ti*eta*c / 4.0;
        double d2Nw_dxieta = (si*ti*en + ti*c*(si - 2*xi) + d*si*(ti - 2*eta)) / 8.0;
        double d2Nx_dxi2 = (a_h/4.0) * d * si * (3*si*xi + 1);
        double d2Nx_dxieta = (a_h/8.0) * ti * c * (3*si*xi - 1);
        double d2Ny_deta2 = (b_h/4.0) * c * ti * (3*ti*eta + 1);
        double d2Ny_dxieta = (b_h/8.0) * si * d * (3*ti*eta - 1);
        int idx = 3*k;
        Bxx[idx]   = d2Nw_dxi2 / (a_h*a_h);
        Bxx[idx+1] = d2Nx_dxi2 / (a_h*a_h);
        Byy[idx]   = d2Nw_deta2 / (b_h*b_h);
        Byy[idx+2] = d2Ny_deta2 / (b_h*b_h);
        Bxy[idx]   = d2Nw_dxieta / (a_h*b_h);
        Bxy[idx+1] = d2Nx_dxieta / (a_h*b_h);
        Bxy[idx+2] = d2Ny_dxieta / (a_h*b_h);
    }
    for (int j = 0; j < 12; ++j) {
        B[0][j] = Bxx[j];
        B[1][j] = Byy[j];
        B[2][j] = 2.0 * Bxy[j];
    }
}

static void melosh_element_K_F(double a1, double b1, double q,
                                 const double D[3][3],
                                 double Ke[12][12], double Fe[12]) {
    for (int i = 0; i < 12; ++i) { Fe[i] = 0.0; for (int j = 0; j < 12; ++j) Ke[i][j] = 0.0; }
    double a_h = a1*0.5, b_h = b1*0.5;
    double xi_n[]  = {-1,  1, 1, -1};
    double eta_n[] = {-1, -1, 1,  1};
    for (int ig = 0; ig < 2; ++ig) for (int jg = 0; jg < 2; ++jg) {
        double xi = GP2[ig], eta = GP2[jg];
        double wgt = GW2[ig] * GW2[jg];
        double B[3][12]; melosh_eval_B(xi, eta, a1, b1, B);
        // Compute N for load vector
        double N[12] = {0};
        for (int k = 0; k < 4; ++k) {
            double si = xi_n[k], ti = eta_n[k];
            double c = 1 + si*xi, d = 1 + ti*eta;
            double en = 2 + si*xi + ti*eta - xi*xi - eta*eta;
            N[3*k]   = c*d*en / 8.0;
            N[3*k+1] = (a_h/8.0) * si * c*c * (si*xi - 1) * d;
            N[3*k+2] = (b_h/8.0) * ti * c * d*d * (ti*eta - 1);
        }
        double DB[3][12];
        for (int k = 0; k < 12; ++k) {
            DB[0][k] = D[0][0]*B[0][k] + D[0][1]*B[1][k];
            DB[1][k] = D[1][0]*B[0][k] + D[1][1]*B[1][k];
            DB[2][k] = D[2][2]*B[2][k];
        }
        double jac = a_h * b_h * wgt;
        for (int i = 0; i < 12; ++i) for (int j = 0; j < 12; ++j)
            Ke[i][j] += (B[0][i]*DB[0][j] + B[1][i]*DB[1][j] + B[2][i]*DB[2][j]) * jac;
        for (int k = 0; k < 12; ++k) Fe[k] += N[k] * q * jac;
    }
}

// ═════════════════════════════════════════════════════════════════════════════
//  FORMULACIÓN 4: Mindlin Q4 selective reduced integration (SAP 2000 Plate-Thick)
// ═════════════════════════════════════════════════════════════════════════════
//  Bilinear shape functions para w, βx, βy. 2×2 Gauss bending + 1×1 Gauss shear.
//  En límite t→0 reproduce Kirchhoff sin shear locking.
// ─────────────────────────────────────────────────────────────────────────────
static void mindlin_element_K_F(double a1, double b1, double t, double q,
                                  double E, double nu,
                                  double Ke[12][12], double Fe[12]) {
    for (int i = 0; i < 12; ++i) { Fe[i] = 0.0; for (int j = 0; j < 12; ++j) Ke[i][j] = 0.0; }
    double a_h = a1*0.5, b_h = b1*0.5;
    double Db_factor = E * t*t*t / (12.0 * (1.0 - nu*nu));
    double G = E / (2.0 * (1.0 + nu));
    double Ds_factor = (5.0/6.0) * G * t;   // κ=5/6
    // Bilinear Q4 nodes
    double xi_n[]  = {-1,  1, 1, -1};
    double eta_n[] = {-1, -1, 1,  1};
    // 2×2 Gauss for bending
    for (int ig = 0; ig < 2; ++ig) for (int jg = 0; jg < 2; ++jg) {
        double xi = GP2[ig], eta = GP2[jg];
        double wgt = GW2[ig] * GW2[jg];
        // N, dN/dxi, dN/deta
        double Nv[4], dNdx[4], dNdy[4];
        for (int k = 0; k < 4; ++k) {
            double si = xi_n[k], ti = eta_n[k];
            Nv[k]   = 0.25 * (1+si*xi) * (1+ti*eta);
            dNdx[k] = 0.25 * si * (1+ti*eta) / a_h;     // dN/dx = (1/a_h) dN/dxi
            dNdy[k] = 0.25 * ti * (1+si*xi) / b_h;
        }
        // Curvature B (3×12): rows = {∂βx/∂x, ∂βy/∂y, ∂βx/∂y + ∂βy/∂x}
        // DOF order: [w_i, βx_i, βy_i] for i=1..4
        double Bb[3][12] = {0};
        for (int k = 0; k < 4; ++k) {
            int idx = 3*k;
            Bb[0][idx+1] = dNdx[k];
            Bb[1][idx+2] = dNdy[k];
            Bb[2][idx+1] = dNdy[k];
            Bb[2][idx+2] = dNdx[k];
        }
        double D[3][3] = {
            {Db_factor*1,     Db_factor*nu,   0},
            {Db_factor*nu,    Db_factor*1,    0},
            {0, 0, Db_factor*(1-nu)/2}
        };
        double DB[3][12];
        for (int k = 0; k < 12; ++k) {
            DB[0][k] = D[0][0]*Bb[0][k] + D[0][1]*Bb[1][k];
            DB[1][k] = D[1][0]*Bb[0][k] + D[1][1]*Bb[1][k];
            DB[2][k] = D[2][2]*Bb[2][k];
        }
        double jac = a_h * b_h * wgt;
        for (int i = 0; i < 12; ++i) for (int j = 0; j < 12; ++j)
            Ke[i][j] += (Bb[0][i]*DB[0][j] + Bb[1][i]*DB[1][j] + Bb[2][i]*DB[2][j]) * jac;
        // load vector (lumped)
        for (int k = 0; k < 4; ++k) Fe[3*k] += Nv[k] * q * jac;
    }
    // 1×1 Gauss for SHEAR (reducida) - en (0,0)
    {
        double xi = 0.0, eta = 0.0;
        double wgt = 4.0;  // 2×2 weight for 1pt Gauss
        double Nv[4], dNdx[4], dNdy[4];
        for (int k = 0; k < 4; ++k) {
            double si = xi_n[k], ti = eta_n[k];
            Nv[k]   = 0.25 * (1+si*xi) * (1+ti*eta);
            dNdx[k] = 0.25 * si * (1+ti*eta) / a_h;
            dNdy[k] = 0.25 * ti * (1+si*xi) / b_h;
        }
        // Shear B (2×12): rows = {∂w/∂x - βx, ∂w/∂y - βy}
        double Bs[2][12] = {0};
        for (int k = 0; k < 4; ++k) {
            int idx = 3*k;
            Bs[0][idx]   = dNdx[k];
            Bs[0][idx+1] = -Nv[k];
            Bs[1][idx]   = dNdy[k];
            Bs[1][idx+2] = -Nv[k];
        }
        double jac = a_h * b_h * wgt;
        for (int i = 0; i < 12; ++i) for (int j = 0; j < 12; ++j)
            Ke[i][j] += Ds_factor * (Bs[0][i]*Bs[0][j] + Bs[1][i]*Bs[1][j]) * jac;
    }
}

// ─────────────────────────────────────────────────────────────────────────────
//  Construir D matrix
// ─────────────────────────────────────────────────────────────────────────────
static void build_D(double E, double nu, double t, double D[3][3]) {
    double D11 = E*t*t*t / (12.0*(1.0 - nu*nu));
    D[0][0] = D11;       D[0][1] = D11*nu;   D[0][2] = 0;
    D[1][0] = D11*nu;    D[1][1] = D11;       D[1][2] = 0;
    D[2][0] = 0;         D[2][1] = 0;         D[2][2] = D11*(1-nu)/2;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Solver genérico para 3 DOF/nodo (DKQ, Melosh, Mindlin) y 4 DOF (BFS)
// ─────────────────────────────────────────────────────────────────────────────
template<int NDOF_PER_NODE>
struct PlateSolver {
    static constexpr int NDOF_PER_NODE_ = NDOF_PER_NODE;
    int n_a, n_b, n_j, n_e, n_g;
    double a, b, a1, b1, E, nu, t, q;
    vector<double> x_j, y_j;
    vector<int> e_j; // n_e × 4 connectivity
    vector<int> s_j; // nodes on boundary

    void init(const MeshConfig& m) {
        a = m.a; b = m.b; t = m.t; E = m.E; nu = m.nu; q = m.q;
        n_a = m.n_a; n_b = m.n_b;
        n_e = n_a * n_b;
        n_j = (n_a+1) * (n_b+1);
        n_g = NDOF_PER_NODE * n_j;
        a1 = a / n_a; b1 = b / n_b;
        x_j.resize(n_j); y_j.resize(n_j);
        e_j.resize(n_e * 4);
        double xx = 0, yy = 0;
        for (int j = 0; j < n_j; ++j) {
            x_j[j] = xx; y_j[j] = yy;
            yy += b1;
            if (yy > b + 1e-9) { yy = 0; xx += a1; }
        }
        for (int ia = 0; ia < n_a; ++ia) for (int ib = 0; ib < n_b; ++ib) {
            int e = ib + n_b*ia;
            int j0 = e + ia;
            e_j[4*e + 0] = j0;
            e_j[4*e + 1] = j0 + n_b + 1;
            e_j[4*e + 2] = j0 + n_b + 2;
            e_j[4*e + 3] = j0 + 1;
        }
        // bordes
        s_j.clear();
        for (int i = 0; i <= n_a; ++i) { s_j.push_back((n_b+1)*i); s_j.push_back((n_b+1)*(i+1) - 1); }
        for (int i = 1; i < n_b; ++i) { s_j.push_back(i); s_j.push_back(n_a*(n_b+1) + i); }
    }

    void apply_BC(vector<double>& K) {
        // BC: para 3 DOF/nodo (DKQ/Melosh/Mindlin):
        //   corner: w + β1 + β2 restringidos
        //   edge x=const: w + β2 (= ∂w/∂y o θ_x según interp)
        //   edge y=const: w + β1
        // Para 4 DOF/nodo (BFS): igual + ψ libre en bordes
        for (int j : s_j) {
            int g = NDOF_PER_NODE * j;
            K[g*n_g + g] += PEN;
            bool ex = (x_j[j] < 1e-9) || (x_j[j] > a - 1e-9);
            bool ey = (y_j[j] < 1e-9) || (y_j[j] > b - 1e-9);
            if (ex && ey) {
                K[(g+1)*n_g + (g+1)] += PEN;
                K[(g+2)*n_g + (g+2)] += PEN;
                // NOTA: NO restringir ψ (DOF 4 de BFS) — debe quedar libre
                //       en esquinas SS para capturar el twist correctamente.
            } else if (ex) {
                K[(g+2)*n_g + (g+2)] += PEN;
            } else if (ey) {
                K[(g+1)*n_g + (g+1)] += PEN;
            }
        }
    }
};

// ═════════════════════════════════════════════════════════════════════════════
//  SOLVE — 4 wrappers (uno por formulación)
// ═════════════════════════════════════════════════════════════════════════════

static Result solve_bfs(const MeshConfig& m) {
    auto t0 = std::chrono::high_resolution_clock::now();
    PlateSolver<4> S; S.init(m);
    double D[3][3]; build_D(m.E, m.nu, m.t, D);
    vector<double> K(S.n_g * S.n_g, 0.0);
    vector<double> F(S.n_g, 0.0);
    double Ke[16][16], Fe[16];
    bfs_element_K_F(S.a1, S.b1, m.q, D, Ke, Fe);
    for (int e = 0; e < S.n_e; ++e) {
        int g[16];
        for (int i = 0; i < 4; ++i) {
            int gi = S.e_j[4*e + i];
            for (int k = 0; k < 4; ++k) g[4*i + k] = 4*gi + k;
        }
        for (int i = 0; i < 16; ++i) {
            F[g[i]] += Fe[i];
            for (int j = 0; j < 16; ++j) K[g[i]*S.n_g + g[j]] += Ke[i][j];
        }
    }
    S.apply_BC(K);
    vector<double> Z = F;
    solve_dense_LU(K, Z, S.n_g);
    Result R;
    R.w_nodes.assign(S.n_j, 0); R.Mx_nodes.assign(S.n_j, 0);
    R.My_nodes.assign(S.n_j, 0); R.Mxy_nodes.assign(S.n_j, 0);
    vector<int> cnt(S.n_j, 0);
    for (int j = 0; j < S.n_j; ++j) R.w_nodes[j] = Z[4*j] * 1000.0;
    double xi_c[] = {0, 1, 1, 0};
    double eta_c[] = {0, 0, 1, 1};
    for (int e = 0; e < S.n_e; ++e) {
        double Ze[16];
        for (int i = 0; i < 4; ++i) {
            int gi = S.e_j[4*e + i];
            for (int k = 0; k < 4; ++k) Ze[4*i + k] = Z[4*gi + k];
        }
        for (int c = 0; c < 4; ++c) {
            double mx, my, mxy;
            bfs_eval_M_at(S.a1, S.b1, xi_c[c], eta_c[c], D, Ze, mx, my, mxy);
            int j = S.e_j[4*e + c];
            R.Mx_nodes[j]  += mx;
            R.My_nodes[j]  += my;
            R.Mxy_nodes[j] += mxy;
            cnt[j]++;
        }
    }
    for (int j = 0; j < S.n_j; ++j) if (cnt[j] > 0) {
        R.Mx_nodes[j]  /= cnt[j];
        R.My_nodes[j]  /= cnt[j];
        R.Mxy_nodes[j] /= cnt[j];
    }
    int j_c = (S.n_a/2)*(S.n_b+1) + (S.n_b/2);
    R.w_centro_mm = R.w_nodes[j_c];
    R.Mxy_esquina = R.Mxy_nodes[0];
    R.Mx_centro = R.Mx_nodes[j_c];
    R.My_centro = R.My_nodes[j_c];
    auto t1 = std::chrono::high_resolution_clock::now();
    R.time_ms = std::chrono::duration<double, std::milli>(t1 - t0).count();
    return R;
}

template<bool USE_DKQ>
static Result solve_dkq_or_melosh(const MeshConfig& m) {
    auto t0 = std::chrono::high_resolution_clock::now();
    PlateSolver<3> S; S.init(m);
    double D[3][3]; build_D(m.E, m.nu, m.t, D);
    vector<double> K(S.n_g * S.n_g, 0.0);
    vector<double> F(S.n_g, 0.0);
    double Ke[12][12], Fe[12];
    if (USE_DKQ) dkq_element_K_F(S.a1, S.b1, m.q, D, Ke, Fe);
    else         melosh_element_K_F(S.a1, S.b1, m.q, D, Ke, Fe);
    for (int e = 0; e < S.n_e; ++e) {
        int g[12];
        for (int i = 0; i < 4; ++i) {
            int gi = S.e_j[4*e + i];
            for (int k = 0; k < 3; ++k) g[3*i + k] = 3*gi + k;
        }
        for (int i = 0; i < 12; ++i) {
            F[g[i]] += Fe[i];
            for (int j = 0; j < 12; ++j) K[g[i]*S.n_g + g[j]] += Ke[i][j];
        }
    }
    S.apply_BC(K);
    vector<double> Z = F;
    solve_dense_LU(K, Z, S.n_g);
    Result R;
    R.w_nodes.assign(S.n_j, 0); R.Mx_nodes.assign(S.n_j, 0);
    R.My_nodes.assign(S.n_j, 0); R.Mxy_nodes.assign(S.n_j, 0);
    vector<int> cnt(S.n_j, 0);
    for (int j = 0; j < S.n_j; ++j) R.w_nodes[j] = Z[3*j] * 1000.0;
    // Recovery: 2×2 Gauss → extrapolación bilineal a esquinas (estilo SAP)
    double xi_g[] = {-1, 1, -1, 1};
    double eta_g[] = {-1, -1, 1, 1};
    for (int e = 0; e < S.n_e; ++e) {
        double Ze[12];
        for (int i = 0; i < 4; ++i) {
            int gi = S.e_j[4*e + i];
            for (int k = 0; k < 3; ++k) Ze[3*i + k] = Z[3*gi + k];
        }
        // Gauss values
        double Mg[3][4];
        int gi_idx = 0;
        for (int jg = 0; jg < 2; ++jg) for (int ig = 0; ig < 2; ++ig) {
            double xi = GP2[ig], eta = GP2[jg];
            double B[3][12];
            if (USE_DKQ) dkq_eval_B(xi, eta, S.a1, S.b1, B);
            else         melosh_eval_B(xi, eta, S.a1, S.b1, B);
            double sB[3] = {0, 0, 0};
            for (int k = 0; k < 12; ++k) {
                sB[0] += B[0][k] * Ze[k];
                sB[1] += B[1][k] * Ze[k];
                sB[2] += B[2][k] * Ze[k];
            }
            double mx  = -(D[0][0]*sB[0] + D[0][1]*sB[1]);
            double my  = -(D[1][0]*sB[0] + D[1][1]*sB[1]);
            double mxy = -(D[2][2]*sB[2]);
            Mg[0][gi_idx] = mx; Mg[1][gi_idx] = my; Mg[2][gi_idx] = mxy;
            gi_idx++;
        }
        // Extrapolate to 4 corners
        double xi_c[] = {-1, 1, 1, -1};
        double eta_c[] = {-1, -1, 1, 1};
        for (int c = 0; c < 4; ++c) {
            double mx_c = 0, my_c = 0, mxy_c = 0;
            for (int k = 0; k < 4; ++k) {
                double Nk = 0.25 * (1 + xi_g[k]*SQRT3*xi_c[c]) * (1 + eta_g[k]*SQRT3*eta_c[c]);
                mx_c  += Nk * Mg[0][k];
                my_c  += Nk * Mg[1][k];
                mxy_c += Nk * Mg[2][k];
            }
            int j = S.e_j[4*e + c];
            R.Mx_nodes[j]  += mx_c;
            R.My_nodes[j]  += my_c;
            R.Mxy_nodes[j] += mxy_c;
            cnt[j]++;
        }
    }
    for (int j = 0; j < S.n_j; ++j) if (cnt[j] > 0) {
        R.Mx_nodes[j]  /= cnt[j];
        R.My_nodes[j]  /= cnt[j];
        R.Mxy_nodes[j] /= cnt[j];
    }
    int j_c = (S.n_a/2)*(S.n_b+1) + (S.n_b/2);
    R.w_centro_mm = R.w_nodes[j_c];
    R.Mxy_esquina = R.Mxy_nodes[0];
    R.Mx_centro = R.Mx_nodes[j_c];
    R.My_centro = R.My_nodes[j_c];
    auto t1 = std::chrono::high_resolution_clock::now();
    R.time_ms = std::chrono::duration<double, std::milli>(t1 - t0).count();
    return R;
}

static Result solve_mindlin(const MeshConfig& m) {
    auto t0 = std::chrono::high_resolution_clock::now();
    PlateSolver<3> S; S.init(m);
    vector<double> K(S.n_g * S.n_g, 0.0);
    vector<double> F(S.n_g, 0.0);
    double Ke[12][12], Fe[12];
    mindlin_element_K_F(S.a1, S.b1, m.t, m.q, m.E, m.nu, Ke, Fe);
    for (int e = 0; e < S.n_e; ++e) {
        int g[12];
        for (int i = 0; i < 4; ++i) {
            int gi = S.e_j[4*e + i];
            for (int k = 0; k < 3; ++k) g[3*i + k] = 3*gi + k;
        }
        for (int i = 0; i < 12; ++i) {
            F[g[i]] += Fe[i];
            for (int j = 0; j < 12; ++j) K[g[i]*S.n_g + g[j]] += Ke[i][j];
        }
    }
    S.apply_BC(K);
    vector<double> Z = F;
    solve_dense_LU(K, Z, S.n_g);
    Result R;
    R.w_nodes.assign(S.n_j, 0); R.Mx_nodes.assign(S.n_j, 0);
    R.My_nodes.assign(S.n_j, 0); R.Mxy_nodes.assign(S.n_j, 0);
    vector<int> cnt(S.n_j, 0);
    for (int j = 0; j < S.n_j; ++j) R.w_nodes[j] = Z[3*j] * 1000.0;
    double a_h = S.a1*0.5, b_h = S.b1*0.5;
    double Db = m.E * m.t*m.t*m.t / (12.0 * (1.0 - m.nu*m.nu));
    // Mindlin: M = -D · κ donde κ = {∂βx/∂x, ∂βy/∂y, ∂βx/∂y + ∂βy/∂x}
    double xi_c[] = {-1, 1, 1, -1};
    double eta_c[] = {-1, -1, 1, 1};
    double xi_n[]  = {-1,  1, 1, -1};
    double eta_n[] = {-1, -1, 1,  1};
    for (int e = 0; e < S.n_e; ++e) {
        double bx[4], by[4];
        for (int i = 0; i < 4; ++i) {
            int gi = S.e_j[4*e + i];
            bx[i] = Z[3*gi + 1];
            by[i] = Z[3*gi + 2];
        }
        for (int c = 0; c < 4; ++c) {
            double xi = xi_c[c], eta = eta_c[c];
            double kxx = 0, kyy = 0, kxy = 0;
            for (int k = 0; k < 4; ++k) {
                double si = xi_n[k], ti = eta_n[k];
                double dNdx = 0.25 * si * (1 + ti*eta) / a_h;
                double dNdy = 0.25 * ti * (1 + si*xi) / b_h;
                kxx += dNdx * bx[k];
                kyy += dNdy * by[k];
                kxy += dNdy * bx[k] + dNdx * by[k];
            }
            double mx  = -Db * (kxx + m.nu*kyy);
            double my  = -Db * (m.nu*kxx + kyy);
            double mxy = -Db * (1 - m.nu)/2 * kxy;
            int j = S.e_j[4*e + c];
            R.Mx_nodes[j]  += mx;
            R.My_nodes[j]  += my;
            R.Mxy_nodes[j] += mxy;
            cnt[j]++;
        }
    }
    for (int j = 0; j < S.n_j; ++j) if (cnt[j] > 0) {
        R.Mx_nodes[j]  /= cnt[j];
        R.My_nodes[j]  /= cnt[j];
        R.Mxy_nodes[j] /= cnt[j];
    }
    int j_c = (S.n_a/2)*(S.n_b+1) + (S.n_b/2);
    R.w_centro_mm = R.w_nodes[j_c];
    R.Mxy_esquina = R.Mxy_nodes[0];
    R.Mx_centro = R.Mx_nodes[j_c];
    R.My_centro = R.My_nodes[j_c];
    auto t1 = std::chrono::high_resolution_clock::now();
    R.time_ms = std::chrono::duration<double, std::milli>(t1 - t0).count();
    return R;
}

// ═════════════════════════════════════════════════════════════════════════════
//  Bindings WASM (C ABI) — pasamos arrays como punteros
// ═════════════════════════════════════════════════════════════════════════════
// El JS llama: solve(method, a, b, t, E, nu, q, n_a, n_b, out_buf)
// out_buf format: [w_centro, Mxy_esquina, Mx_centro, My_centro, time_ms, n_j,
//                  x_0, y_0, w_0, Mx_0, My_0, Mxy_0,  ...n_j times]

extern "C" {

EXPORT int wasm_solve(int method,
                       double a, double b, double t, double E, double nu, double q,
                       int n_a, int n_b,
                       double* out_buf, int out_buf_size) {
    MeshConfig m{a, b, t, E, nu, q, n_a, n_b};
    Result R;
    switch (method) {
        case 0: R = solve_bfs(m);            break;   // BFS Q4 16 DOF
        case 1: R = solve_dkq_or_melosh<true>(m);   break;   // Batoz DKQ = SAP Plate-Thin
        case 2: R = solve_dkq_or_melosh<false>(m);  break;   // Melosh ACM
        case 3: R = solve_mindlin(m);        break;   // Mindlin SRI = SAP Plate-Thick
        default: return -1;
    }
    int n_j = (n_a+1)*(n_b+1);
    int need = 6 + n_j * 6;
    if (out_buf_size < need) return -2;
    out_buf[0] = R.w_centro_mm;
    out_buf[1] = R.Mxy_esquina;
    out_buf[2] = R.Mx_centro;
    out_buf[3] = R.My_centro;
    out_buf[4] = R.time_ms;
    out_buf[5] = (double)n_j;
    // mesh coords
    PlateSolver<3> S; MeshConfig mm = m; S.init(mm);
    for (int j = 0; j < n_j; ++j) {
        out_buf[6 + 6*j + 0] = S.x_j[j];
        out_buf[6 + 6*j + 1] = S.y_j[j];
        out_buf[6 + 6*j + 2] = R.w_nodes[j];
        out_buf[6 + 6*j + 3] = R.Mx_nodes[j];
        out_buf[6 + 6*j + 4] = R.My_nodes[j];
        out_buf[6 + 6*j + 5] = R.Mxy_nodes[j];
    }
    return 0;
}

}  // extern "C"

// ═════════════════════════════════════════════════════════════════════════════
//  main() — para test nativo (no se usa en WASM pero útil para depurar)
// ═════════════════════════════════════════════════════════════════════════════
#ifndef __EMSCRIPTEN__
#include <cstdio>
int main() {
    MeshConfig m{6.0, 4.0, 0.10, 35e6, 0.15, 10.0, 6, 4};
    const char* names[] = {"BFS", "DKQ=SAP", "Melosh", "Mindlin SRI"};
    for (int meth = 0; meth < 4; ++meth) {
        vector<double> out(6 + ((m.n_a+1)*(m.n_b+1))*6, 0);
        wasm_solve(meth, m.a, m.b, m.t, m.E, m.nu, m.q, m.n_a, m.n_b,
                   out.data(), (int)out.size());
        printf("%-12s  w_centro=%8.4f mm  Mx_c=%8.4f  My_c=%8.4f  Mxy_esq=%+8.4f  t=%.2f ms\n",
               names[meth], out[0], out[2], out[3], out[1], out[4]);
    }
    return 0;
}
#endif
