// =============================================================================
// Drilling DOF — Hughes & Brezzi 1989 / Ibrahimbegovic-Taylor-Wilson 1990
//
// Formulación variacional para acoplar el drilling DOF (θz, rotación normal al
// plano del shell) al campo de displacements in-plane (u, v). Reemplaza la
// "weak spring" tradicional (k = 1e-6 × diag o k = min(diagRot)/1000) por una
// penalización consistente sobre el residual:
//
//     R(x,y) = θz(x,y) − (1/2)·(∂v/∂x − ∂u/∂y)
//
// que es la diferencia entre el drilling DOF interpolado y la rotación in-plane
// real del medio continuo. La energía de penalización es:
//
//     Π_drill = (γ/2) · ∫_Ω R² dΩ      con γ = G·t · scale  (Hughes-Brezzi)
//
// donde scale = 1.0 por defecto (G·t original). El parámetro γ tiene unidades
// de [fuerza/long] consistentes con K_membrana → el penalty queda "calibrado".
//
// VENTAJAS sobre la weak spring:
//  - Transmite torsión losa↔viga consistente con ETABS/SAP (CSI Manual §10.1.1
//    cita explícitamente Taylor-Simo 1985 y Ibrahimbegovic-Wilson 1991).
//  - No introduce rigidez parásita arbitraria (la calibración es física).
//  - Pasa patch-test de rotación rígida (R=0 → energía 0).
//
// REFERENCIAS:
//   - Hughes, T.J.R. & Brezzi, F. (1989), "On drilling degrees of freedom",
//     Comp. Methods Appl. Mech. Eng. 72: 105-121.
//   - Ibrahimbegovic, A., Taylor, R.L. & Wilson, E.L. (1990), "A robust
//     quadrilateral membrane finite element with drilling degrees of freedom",
//     Int. J. Numer. Methods Eng. 30: 445-457.
//   - Wilson, E.L., "Análisis Estructural", 4ª Ed., Cap. 9: "Elemento de
//     Membrana con Rotaciones Normales".
//   - CSI Analysis Reference Manual §10.1.1 (formulación shell de ETABS).
// =============================================================================

#include "../data-model.h"
#include <Eigen/Dense>
#include <cmath>

namespace hb {

static void shapeFunctionsQ4(double xi, double eta,
                              double N[4], double dNdxi[4], double dNdeta[4])
{
    N[0] = 0.25 * (1 - xi) * (1 - eta);
    N[1] = 0.25 * (1 + xi) * (1 - eta);
    N[2] = 0.25 * (1 + xi) * (1 + eta);
    N[3] = 0.25 * (1 - xi) * (1 + eta);
    dNdxi[0] = -0.25 * (1 - eta);
    dNdxi[1] =  0.25 * (1 - eta);
    dNdxi[2] =  0.25 * (1 + eta);
    dNdxi[3] = -0.25 * (1 + eta);
    dNdeta[0] = -0.25 * (1 - xi);
    dNdeta[1] = -0.25 * (1 + xi);
    dNdeta[2] =  0.25 * (1 + xi);
    dNdeta[3] =  0.25 * (1 - xi);
}

static double jacobian2D(const double x[4], const double y[4],
                          const double dNdxi[4], const double dNdeta[4],
                          double Jinv[2][2])
{
    double J00 = 0, J01 = 0, J10 = 0, J11 = 0;
    for (int i = 0; i < 4; i++) {
        J00 += dNdxi[i]  * x[i];
        J01 += dNdxi[i]  * y[i];
        J10 += dNdeta[i] * x[i];
        J11 += dNdeta[i] * y[i];
    }
    double detJ = J00 * J11 - J01 * J10;
    if (std::abs(detJ) < 1e-15) detJ = (detJ >= 0 ? 1e-15 : -1e-15);
    double inv = 1.0 / detJ;
    Jinv[0][0] =  J11 * inv;
    Jinv[0][1] = -J01 * inv;
    Jinv[1][0] = -J10 * inv;
    Jinv[1][1] =  J00 * inv;
    return detJ;
}

} // namespace hb

// =============================================================================
// Devuelve la contribución de drilling Hughes-Brezzi como matriz 24×24
// (sobre los 6 DOFs por nodo del shell: u, v, w, θx, θy, θz).
// Solo escribe en los 12 DOFs (u, v, θz) × 4 nodos; los otros 12 quedan en 0
// para que la suma con K_membrana + K_bending no perturbe esos DOFs.
//
// Inputs:
//   x[4], y[4]    : coords nodales en el sistema local del shell (2D)
//   E, nu, t      : módulo Young, Poisson, espesor
//   gamma_scale   : factor sobre γ = G·t (default 1.0 = HB original)
//                   - scale < 1 → drilling más débil (más permisivo)
//                   - scale > 1 → drilling más rígido (más restrictivo)
//                   - scale = 0 → equivalente a "sin drilling" (singular)
// =============================================================================
extern "C++" Eigen::MatrixXd getDrillingK_HughesBrezzi(
    const double x[4], const double y[4],
    double E, double nu, double t,
    double gamma_scale)
{
    using namespace hb;

    double G = E / (2.0 * (1.0 + nu));
    double gamma = gamma_scale * G * t;
    if (gamma < 1e-18) {
        // Sin drilling activo — devolver matriz cero
        return Eigen::MatrixXd::Zero(24, 24);
    }

    // 2×2 Gauss points
    static const double GP = 0.5773502691896258;  // 1/sqrt(3)
    static const double gp2x2[4][2] = {
        {-GP, -GP}, {GP, -GP}, {GP, GP}, {-GP, GP}
    };

    // K_drill (12×12): DOFs [u0, v0, θz0, u1, v1, θz1, u2, v2, θz2, u3, v3, θz3]
    Eigen::MatrixXd Kd = Eigen::MatrixXd::Zero(12, 12);

    for (int gp = 0; gp < 4; gp++) {
        double xi  = gp2x2[gp][0];
        double eta = gp2x2[gp][1];
        double N[4], dNdxi[4], dNdeta[4];
        shapeFunctionsQ4(xi, eta, N, dNdxi, dNdeta);
        double Jinv[2][2];
        double detJ = jacobian2D(x, y, dNdxi, dNdeta, Jinv);

        // B_d (1×12): operador del residual R = θz_h − 0.5·(∂v/∂x − ∂u/∂y)
        //   R = Σ N_i·θz_i − 0.5·Σ(∂N_i/∂x · v_i) + 0.5·Σ(∂N_i/∂y · u_i)
        // Derivadas parciales (B_d_k = ∂R/∂DOF_k):
        //   ∂R/∂u_i  = +0.5 · ∂N_i/∂y
        //   ∂R/∂v_i  = -0.5 · ∂N_i/∂x
        //   ∂R/∂θz_i = +N_i
        Eigen::RowVectorXd Bd = Eigen::RowVectorXd::Zero(12);
        for (int i = 0; i < 4; i++) {
            double dNdx = Jinv[0][0] * dNdxi[i] + Jinv[0][1] * dNdeta[i];
            double dNdy = Jinv[1][0] * dNdxi[i] + Jinv[1][1] * dNdeta[i];
            Bd(3 * i + 0) = +0.5 * dNdy;   // u_i
            Bd(3 * i + 1) = -0.5 * dNdx;   // v_i
            Bd(3 * i + 2) = N[i];          // θz_i
        }

        Kd += Bd.transpose() * Bd * (gamma * std::abs(detJ));
    }

    // Expand 12×12 → 24×24 (full shell DOFs: u, v, w, θx, θy, θz per node)
    // Mapping Kd_local → K24_global:
    //   Kd index 3i+0 (u_i)   → K24 index 6i+0 (u_i)
    //   Kd index 3i+1 (v_i)   → K24 index 6i+1 (v_i)
    //   Kd index 3i+2 (θz_i)  → K24 index 6i+5 (θz_i)
    int globalMap[12] = {
        0,  1,  5,    // node 0: u, v, θz
        6,  7,  11,   // node 1
        12, 13, 17,   // node 2
        18, 19, 23    // node 3
    };
    Eigen::MatrixXd K24 = Eigen::MatrixXd::Zero(24, 24);
    for (int i = 0; i < 12; i++) {
        for (int j = 0; j < 12; j++) {
            K24(globalMap[i], globalMap[j]) = Kd(i, j);
        }
    }
    return K24;
}
