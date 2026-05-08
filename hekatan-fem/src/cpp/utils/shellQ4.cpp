// =============================================================================
// Shell Q4 — 4-node shell element for shear walls
// Combines: Membrane (plane stress Q4) + Plate bending (Mindlin-Reissner)
// 6 DOFs per node: u, v, w, θx, θy, θz → 24 DOFs total
//
// Membrane: Standard isoparametric Q4, 2×2 Gauss quadrature
// Bending:  Mindlin-Reissner with selective reduced integration
//           2×2 for bending, 1×1 for shear (avoids shear locking)
// Drilling: Small artificial stiffness for θz (stabilization)
// =============================================================================

#include "../data-model.h"
#include <vector>
#include <cmath>
#include <Eigen/Dense>
#include <iostream>

// Local copy of template helper (templates can't link across TUs)
template <typename K, typename V>
static V getMapVal(const std::map<K, V> &map, const K &key, const V &defaultValue)
{
    auto it = map.find(key);
    return (it != map.end()) ? it->second : defaultValue;
}

// ─── Shape functions for bilinear Q4 ────────────────────────────────────────
// Node ordering: 0(-1,-1), 1(+1,-1), 2(+1,+1), 3(-1,+1) → CCW
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

// ─── Jacobian at a Gauss point ──────────────────────────────────────────────
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
    if (std::abs(detJ) < 1e-15) detJ = 1e-15;
    double inv = 1.0 / detJ;
    Jinv[0][0] =  J11 * inv;
    Jinv[0][1] = -J01 * inv;
    Jinv[1][0] = -J10 * inv;
    Jinv[1][1] =  J00 * inv;
    return detJ;
}

// ─── 2×2 Gauss points ──────────────────────────────────────────────────────
static const double GP2  =  0.5773502691896258; // 1/sqrt(3)
static const double gp2x2[4][2] = {
    {-GP2, -GP2}, {GP2, -GP2}, {GP2, GP2}, {-GP2, GP2}
};

// ─── Membrane stiffness (plane stress Q4) — Wilson 1971 INCOMPATIBLE MODES
//     + Taylor 1976 patch-test correction (J0 evaluado en centro): 8×8
//
// Funciones de forma extendidas (Wilson 1971, Cook-Malkus-Plesha §6.5):
//   u_x(ξ,η) = Σ N_i(ξ,η)·u_xi + α₁·(1−ξ²) + α₂·(1−η²)
//   u_y(ξ,η) = Σ N_i(ξ,η)·u_yi + α₃·(1−ξ²) + α₄·(1−η²)
//
// Los 4 DOFs internos α_j cancelan el shear locking parásito del Q4 estándar
// (errores en flexión pura). Se condensan estáticamente ⇒ sale K 8×8.
//
// Taylor 1976 patch test: para que el elemento pase el patch test en mallas
// distorsionadas, las derivadas de N₅, N₆ se evalúan con el Jacobiano J0
// constante medido en el centro del elemento (ξ=η=0), no con J(ξ,η).
// Esto fuerza ∫B_I dV = 0 → patch test pasa.
//
// Refs:
//   - Wilson, Taylor, Doherty, Ghaboussi (1973), "Incompatible Displacement Models"
//   - Taylor, Beresford, Wilson (1976), "A non-conforming element for stress analysis"
//   - Cook, Malkus, Plesha, Witt (2002), §6.6
//   - CSI Analysis Reference Manual §10.1.1 (formulación del shell de ETABS)
// ───────────────────────────────────────────────────────────────────────────
static Eigen::MatrixXd getMembraneK(const double x[4], const double y[4],
                                     double E, double nu, double t)
{
    double factor = E / (1.0 - nu * nu);
    Eigen::Matrix3d Dm;
    Dm << factor,       factor * nu, 0,
          factor * nu,  factor,      0,
          0,            0,           factor * (1 - nu) / 2.0;

    // ── J0: Jacobiano en el centro (ξ=η=0) — Taylor 1976 correction ──
    double Jinv0[2][2];
    {
        double N0[4], dN0dxi[4], dN0deta[4];
        shapeFunctionsQ4(0.0, 0.0, N0, dN0dxi, dN0deta);
        jacobian2D(x, y, dN0dxi, dN0deta, Jinv0);
    }

    // K_uu (8×8): rigidez compatible
    // K_uα (8×4): acoplamiento compatible-incompatible
    // K_αα (4×4): rigidez incompatible
    Eigen::MatrixXd Kuu = Eigen::MatrixXd::Zero(8, 8);
    Eigen::MatrixXd Kua = Eigen::MatrixXd::Zero(8, 4);
    Eigen::MatrixXd Kaa = Eigen::MatrixXd::Zero(4, 4);

    for (int gp = 0; gp < 4; gp++) {
        double xi  = gp2x2[gp][0];
        double eta = gp2x2[gp][1];

        double N[4], dNdxi[4], dNdeta[4];
        shapeFunctionsQ4(xi, eta, N, dNdxi, dNdeta);

        double Jinv[2][2];
        double detJ = jacobian2D(x, y, dNdxi, dNdeta, Jinv);

        // ── B_C (3×8): standard compatible part ──
        Eigen::MatrixXd Bc = Eigen::MatrixXd::Zero(3, 8);
        for (int i = 0; i < 4; i++) {
            double dNdx = Jinv[0][0] * dNdxi[i] + Jinv[0][1] * dNdeta[i];
            double dNdy = Jinv[1][0] * dNdxi[i] + Jinv[1][1] * dNdeta[i];
            Bc(0, 2*i)     = dNdx;
            Bc(1, 2*i + 1) = dNdy;
            Bc(2, 2*i)     = dNdy;
            Bc(2, 2*i + 1) = dNdx;
        }

        // ── B_I (3×4): incompatible modes part ──
        // N₅ = 1−ξ², N₆ = 1−η² → derivadas naturales:
        //   ∂N₅/∂ξ = -2ξ,  ∂N₅/∂η =  0
        //   ∂N₆/∂ξ =  0,   ∂N₆/∂η = -2η
        // Taylor 1976: usar Jinv0 (centro) para mapear a ∂/∂x, ∂/∂y → patch test OK.
        double dN5dxi  = -2.0 * xi,  dN5deta = 0.0;
        double dN6dxi  =  0.0,       dN6deta = -2.0 * eta;
        double dN5dx = Jinv0[0][0] * dN5dxi + Jinv0[0][1] * dN5deta;
        double dN5dy = Jinv0[1][0] * dN5dxi + Jinv0[1][1] * dN5deta;
        double dN6dx = Jinv0[0][0] * dN6dxi + Jinv0[0][1] * dN6deta;
        double dN6dy = Jinv0[1][0] * dN6dxi + Jinv0[1][1] * dN6deta;

        // α-DOFs ordering: [α1 (u·N5), α2 (u·N6), α3 (v·N5), α4 (v·N6)]
        Eigen::MatrixXd Bi = Eigen::MatrixXd::Zero(3, 4);
        Bi(0, 0) = dN5dx;   // εxx contribuye α1 via ∂(α1·N5)/∂x
        Bi(0, 1) = dN6dx;   // εxx contribuye α2 via ∂(α2·N6)/∂x
        Bi(1, 2) = dN5dy;   // εyy contribuye α3 via ∂(α3·N5)/∂y
        Bi(1, 3) = dN6dy;   // εyy contribuye α4 via ∂(α4·N6)/∂y
        Bi(2, 0) = dN5dy;   // γxy = ∂u/∂y + ∂v/∂x  → α1·∂N5/∂y
        Bi(2, 1) = dN6dy;   //                       → α2·∂N6/∂y
        Bi(2, 2) = dN5dx;   //                       → α3·∂N5/∂x
        Bi(2, 3) = dN6dx;   //                       → α4·∂N6/∂x

        double w = t * std::abs(detJ);
        Kuu += Bc.transpose() * Dm * Bc * w;
        Kua += Bc.transpose() * Dm * Bi * w;
        Kaa += Bi.transpose() * Dm * Bi * w;
    }

    // ── Static condensation: K_cond = K_uu - K_uα · K_αα⁻¹ · K_αu ──
    // Como α-DOFs son internos, K_αα siempre debería ser invertible (rank 4).
    Eigen::MatrixXd KaaInv;
    if (std::abs(Kaa.determinant()) > 1e-20) {
        KaaInv = Kaa.inverse();
    } else {
        // Fallback: Q4 estándar sin modos incompatibles si Kaa es singular
        // (no debería pasar para Q4 razonablemente formado).
        std::cerr << "Warning: Kaa singular en getMembraneK, fallback a Q4 estandar." << std::endl;
        return Kuu;
    }
    Eigen::MatrixXd Km = Kuu - Kua * KaaInv * Kua.transpose();

    return Km;
}

// ─── Plate bending stiffness (Mindlin-Reissner Q4): 12×12 ──────────────────
// DOFs per node: w, θx, θy
// Bending: 2×2 Gauss + INCOMPATIBLE MODES Wilson 1971 (4 DOFs internos sobre
//          rotaciones θx, θy → curvatura cuadrática efectiva en lugar de lineal)
// Shear:   MITC4 tying (Dvorkin & Bathe 1984) — sin modificar
//
// Convención DOFs internos: [α1·θx·N₅, α2·θx·N₆, α3·θy·N₅, α4·θy·N₆]
// donde N₅ = 1−ξ², N₆ = 1−η².
//
// Las rotaciones extendidas son:
//   θx(ξ,η) = Σ N_i·θx_i + α1·(1−ξ²) + α2·(1−η²)
//   θy(ξ,η) = Σ N_i·θy_i + α3·(1−ξ²) + α4·(1−η²)
// Curvaturas (Mindlin) heredan los términos cuadráticos:
//   κxx = -∂θy/∂x  → contribución de α3, α4
//   κyy = +∂θx/∂y  → contribución de α1, α2
//   κxy = +∂θx/∂x − ∂θy/∂y  → contribución de α1..α4
// Los modos α se condensan estáticamente al final → K 12×12.
//
// NOTA: el shear MITC4 NO se modifica (los modos α en θ no contribuyen
// a γxz, γyz en los tying points porque allí ξ=0 o η=0 → ∂N₅/∂ξ o ∂N₆/∂η
// son evaluados después con J₀ Taylor 1976, dando contribución residual
// que mantenemos en el bending, no en el shear MITC4).
static Eigen::MatrixXd getBendingK(const double x[4], const double y[4],
                                    double E, double nu, double t)
{
    double D0 = E * t * t * t / (12.0 * (1.0 - nu * nu));
    Eigen::Matrix3d Db;
    Db << D0,      D0 * nu, 0,
          D0 * nu, D0,      0,
          0,       0,       D0 * (1 - nu) / 2.0;

    double ks = 5.0 / 6.0;
    double G  = E / (2.0 * (1.0 + nu));
    Eigen::Matrix2d Ds;
    Ds << ks * G * t, 0,
          0,          ks * G * t;

    // Taylor 1976: J₀ del centro para mapear derivadas de N₅, N₆
    double Jinv0[2][2];
    {
        double N0[4], dN0dxi[4], dN0deta[4];
        shapeFunctionsQ4(0.0, 0.0, N0, dN0dxi, dN0deta);
        jacobian2D(x, y, dN0dxi, dN0deta, Jinv0);
    }

    // Acumuladores K extendido: K_uu (12×12), K_uα (12×4), K_αα (4×4)
    Eigen::MatrixXd Kuu = Eigen::MatrixXd::Zero(12, 12);
    Eigen::MatrixXd Kua = Eigen::MatrixXd::Zero(12, 4);
    Eigen::MatrixXd Kaa = Eigen::MatrixXd::Zero(4, 4);

    // ─── Bending: 2×2 Gauss ──────────────────────
    for (int gp = 0; gp < 4; gp++) {
        double xi  = gp2x2[gp][0];
        double eta = gp2x2[gp][1];

        double N[4], dNdxi[4], dNdeta[4];
        shapeFunctionsQ4(xi, eta, N, dNdxi, dNdeta);

        double Jinv[2][2];
        double detJ = jacobian2D(x, y, dNdxi, dNdeta, Jinv);

        // Bb (3×12): convencion DOFs GLOBAL = rotation about axis (right-hand rule)
        // DOFs por nodo: [w, θx_global, θy_global] (índices 3*i+0, +1, +2)
        // Mapeo Mindlin βx,βy ↔ θ_global (límite Kirchhoff):
        //   βx_Mindlin = -θy_global   (axis swap + sign flip)
        //   βy_Mindlin = +θx_global   (axis swap)
        // Curvaturas:
        //   κxx = ∂βx/∂x = -∂θy/∂x = -∂(DOF 2)/∂x
        //   κyy = ∂βy/∂y = +∂θx/∂y = +∂(DOF 1)/∂y
        //   κxy = ∂βx/∂y + ∂βy/∂x = -∂θy/∂y + ∂θx/∂x
        // Este fix soluciona el bug de coupling shell-frame donde el shell
        // interpretaba erroneamente DOF 3,4 globales (θx, θy = rotation about axes)
        // como si fueran βx, βy (Mindlin normal rotations) — al asamblar con frames
        // que usan θ_global se sobre-rigidizaba el sistema ~3-30× (ver
        // BUG_ANALYSIS_shell_frame_dof_mismatch.md).
        Eigen::MatrixXd Bb = Eigen::MatrixXd::Zero(3, 12);
        for (int i = 0; i < 4; i++) {
            double dNdx = Jinv[0][0] * dNdxi[i] + Jinv[0][1] * dNdeta[i];
            double dNdy = Jinv[1][0] * dNdxi[i] + Jinv[1][1] * dNdeta[i];
            Bb(0, 3*i + 2) = -dNdx;  // κxx = -∂θy/∂x  (DOF 2 = θy_global)
            Bb(1, 3*i + 1) = +dNdy;  // κyy = +∂θx/∂y  (DOF 1 = θx_global)
            Bb(2, 3*i + 1) = +dNdx;  // κxy: +∂θx/∂x
            Bb(2, 3*i + 2) = -dNdy;  //      -∂θy/∂y
        }

        // Bb_alpha (3×4): incompatible modes contribution to curvatures
        // α1=θx·N₅ (col 0), α2=θx·N₆ (col 1), α3=θy·N₅ (col 2), α4=θy·N₆ (col 3)
        // Derivadas con J₀ Taylor 1976 (centro)
        double dN5dxi  = -2.0 * xi,  dN5deta = 0.0;
        double dN6dxi  =  0.0,       dN6deta = -2.0 * eta;
        double dN5dx0 = Jinv0[0][0] * dN5dxi + Jinv0[0][1] * dN5deta;
        double dN5dy0 = Jinv0[1][0] * dN5dxi + Jinv0[1][1] * dN5deta;
        double dN6dx0 = Jinv0[0][0] * dN6dxi + Jinv0[0][1] * dN6deta;
        double dN6dy0 = Jinv0[1][0] * dN6dxi + Jinv0[1][1] * dN6deta;

        Eigen::MatrixXd Ba = Eigen::MatrixXd::Zero(3, 4);
        // κxx = -∂θy/∂x → α3·(-∂N5/∂x) + α4·(-∂N6/∂x)
        Ba(0, 2) = -dN5dx0;
        Ba(0, 3) = -dN6dx0;
        // κyy = +∂θx/∂y → α1·(+∂N5/∂y) + α2·(+∂N6/∂y)
        Ba(1, 0) = +dN5dy0;
        Ba(1, 1) = +dN6dy0;
        // κxy = +∂θx/∂x - ∂θy/∂y
        //   → α1·(+∂N5/∂x) + α2·(+∂N6/∂x) + α3·(-∂N5/∂y) + α4·(-∂N6/∂y)
        Ba(2, 0) = +dN5dx0;
        Ba(2, 1) = +dN6dx0;
        Ba(2, 2) = -dN5dy0;
        Ba(2, 3) = -dN6dy0;

        double w = std::abs(detJ);
        Kuu += Bb.transpose() * Db * Bb * w;
        Kua += Bb.transpose() * Db * Ba * w;
        Kaa += Ba.transpose() * Db * Ba * w;
    }

    // ─── Shear: MITC4 tying (Dvorkin & Bathe 1984) ─────────
    // Same algorithm as OpenSees ShellMITC4 and our kirchhoff_q4.cpp
    // Tying points: A(0,-1), C(0,+1), B(-1,0), D(+1,0)
    // γxz: sampled at A,C → interpolated in η
    // γyz: sampled at B,D → interpolated in ξ

    // Helper: compute shear B at a point (same as shearBat in kirchhoff_q4)
    auto shearBat = [&](double xi_pt, double eta_pt) -> Eigen::MatrixXd {
        double Np[4], dNp_dxi[4], dNp_deta[4];
        shapeFunctionsQ4(xi_pt, eta_pt, Np, dNp_dxi, dNp_deta);
        double Jp[2][2];
        jacobian2D(x, y, dNp_dxi, dNp_deta, Jp);
        // Convencion DOFs GLOBAL (consistente con bending B arriba):
        //   βx_Mindlin = -θy_global → γxz = ∂w/∂x - βx = ∂w/∂x + θy = ∂w/∂x + DOF 2
        //   βy_Mindlin = +θx_global → γyz = ∂w/∂y - βy = ∂w/∂y - θx = ∂w/∂y - DOF 1
        Eigen::MatrixXd Bsp = Eigen::MatrixXd::Zero(2, 12);
        for (int i = 0; i < 4; i++) {
            double dNdx_p = Jp[0][0]*dNp_dxi[i] + Jp[0][1]*dNp_deta[i];
            double dNdy_p = Jp[1][0]*dNp_dxi[i] + Jp[1][1]*dNp_deta[i];
            Bsp(0, 3*i)     = +dNdx_p;  // γxz: +∂w/∂x
            Bsp(0, 3*i + 2) = +Np[i];   // γxz: +θy_global  (DOF 2)
            Bsp(1, 3*i)     = +dNdy_p;  // γyz: +∂w/∂y
            Bsp(1, 3*i + 1) = -Np[i];   // γyz: -θx_global  (DOF 1)
        }
        return Bsp;
    };

    // Pre-compute Bs at the 4 tying points
    auto Bs_A = shearBat(0.0, -1.0);  // A = (0, -1)
    auto Bs_C = shearBat(0.0, +1.0);  // C = (0, +1)
    auto Bs_B = shearBat(-1.0, 0.0);  // B = (-1, 0)
    auto Bs_D = shearBat(+1.0, 0.0);  // D = (+1, 0)

    // Integrate shear with 2×2 Gauss using MITC4 interpolated Bs
    for (int gp = 0; gp < 4; gp++) {
        double xi  = gp2x2[gp][0];
        double eta = gp2x2[gp][1];

        double N_gp[4], dN_gp_dxi[4], dN_gp_deta[4];
        shapeFunctionsQ4(xi, eta, N_gp, dN_gp_dxi, dN_gp_deta);

        double Jinv_gp[2][2];
        double detJ_gp = jacobian2D(x, y, dN_gp_dxi, dN_gp_deta, Jinv_gp);

        // MITC4 interpolation (Dvorkin & Bathe):
        Eigen::MatrixXd Bs_mitc = Eigen::MatrixXd::Zero(2, 12);
        // γxz (row 0): interpolate A→C in η
        Bs_mitc.row(0) = 0.5*(1.0 - eta)*Bs_A.row(0) + 0.5*(1.0 + eta)*Bs_C.row(0);
        // γyz (row 1): interpolate B→D in ξ
        Bs_mitc.row(1) = 0.5*(1.0 - xi)*Bs_B.row(1) + 0.5*(1.0 + xi)*Bs_D.row(1);

        Kuu += Bs_mitc.transpose() * Ds * Bs_mitc * std::abs(detJ_gp);
    }

    // ── Static condensation: K_b = K_uu - K_uα · K_αα⁻¹ · K_αu ──────────
    // K_αα incluye sólo aporte de bending (modos α actúan sobre rotaciones,
    // no sobre w → no hay contribución directa al shear; el acoplamiento
    // shear↔α es residual y se desprecia consistente con la nota anterior).
    Eigen::MatrixXd KaaInv;
    if (std::abs(Kaa.determinant()) > 1e-20) {
        KaaInv = Kaa.inverse();
    } else {
        std::cerr << "Warning: Kaa singular en getBendingK, fallback a Q4 estandar." << std::endl;
        return Kuu;
    }
    Eigen::MatrixXd Kb = Kuu - Kua * KaaInv * Kua.transpose();

    return Kb;
}

// ============================================================================
// ALTERNATIVA: getBendingK_DSE — Discrete Shear Element (Bathe-Wilson)
//
// Formulación inspirada en SAP2000/ETABS shell, Wilson §8.4-§8.6.
//
// 4 DOFs incompatibles Δθ_ij = uno por cada borde mid-side:
//   Δθ_5 (edge 1, η=-1): aporta a θy via N₅ = (1−ξ²)(1−η)/2
//   Δθ_6 (edge 2, ξ=+1): aporta a θx via N₆ = (1+ξ)(1−η²)/2
//   Δθ_7 (edge 3, η=+1): aporta a θy via N₇ = (1−ξ²)(1+η)/2
//   Δθ_8 (edge 4, ξ=-1): aporta a θx via N₈ = (1−ξ)(1−η²)/2
//
// Las rotaciones extendidas son (axis-aligned rect Q4 — caso típico):
//   θx(ξ,η) = Σ N_i·θx_i + N₆·Δθ_6 + N₈·Δθ_8
//   θy(ξ,η) = Σ N_i·θy_i + N₅·Δθ_5 + N₇·Δθ_7
//
// Enriquición cuadrática del campo de rotaciones POR LADO. Wilson §8.5 propone
// la patch-test correction (Eq. 8.17):
//   Ba_correc = Ba(ξ,η) − (1/A)·∫ Ba dA
// Esto fuerza que ∫Ba_correc dA = 0 → constant-curvature patch test pasa.
//
// IMPLEMENTACIÓN HEKATAN (híbrido pragmático):
// - BENDING: Bb estándar + Ba_b (mid-side bubbles) con patch-test correction
// - SHEAR:   MITC4 (Dvorkin & Bathe 1984) — los Δθ NO contribuyen al shear
//   directamente porque MITC4 muestrea exactamente en los edge midpoints
//   donde N5..N8 valen 1 — esto sería redundante con la condensación.
//   Usar MITC4 puro evita el shear locking cuando Δθ no es suficiente.
//
// Esto es DSE-bending + MITC4-shear (no es exactamente Wilson DSE, pero está
// más cerca de cómo trabaja realmente ETABS internamente — combina ambos
// mecanismos anti-locking en lugar de depender solo de los Δθ).
//
// Refs:
//   - Wilson §8.4-§8.6 (Edward L. Wilson, "Análisis Estructural", 4ª Ed.)
//   - Bathe & Bolourchi (1980), "A geometric and material nonlinear plate..."
//   - Dvorkin & Bathe (1984), MITC4 shear interpolation
//   - CSI Analysis Reference Manual §10.1 (DSE/DKE en SAP2000/ETABS)
// ============================================================================
static Eigen::MatrixXd getBendingK_DSE(const double x[4], const double y[4],
                                        double E, double nu, double t)
{
    // Material matrices (idénticas a getBendingK)
    double D0 = E * t * t * t / (12.0 * (1.0 - nu * nu));
    Eigen::Matrix3d Db;
    Db << D0,      D0 * nu, 0,
          D0 * nu, D0,      0,
          0,       0,       D0 * (1 - nu) / 2.0;

    double ks = 5.0 / 6.0;
    double G  = E / (2.0 * (1.0 + nu));
    Eigen::Matrix2d Ds;
    Ds << ks * G * t, 0,
          0,          ks * G * t;

    // Mid-side bubble shape functions and natural derivatives
    auto bubbleShapes = [](double xi, double eta,
                            double Nb[4], double dNbdxi[4], double dNbdeta[4]) {
        // N5 = (1-ξ²)(1-η)/2 — edge 1, bottom (η=-1) — afecta θy
        Nb[0]      = 0.5 * (1.0 - xi*xi) * (1.0 - eta);
        dNbdxi[0]  = -xi * (1.0 - eta);
        dNbdeta[0] = -0.5 * (1.0 - xi*xi);
        // N6 = (1+ξ)(1-η²)/2 — edge 2, right (ξ=+1) — afecta θx
        Nb[1]      = 0.5 * (1.0 + xi) * (1.0 - eta*eta);
        dNbdxi[1]  = 0.5 * (1.0 - eta*eta);
        dNbdeta[1] = -(1.0 + xi) * eta;
        // N7 = (1-ξ²)(1+η)/2 — edge 3, top (η=+1) — afecta θy
        Nb[2]      = 0.5 * (1.0 - xi*xi) * (1.0 + eta);
        dNbdxi[2]  = -xi * (1.0 + eta);
        dNbdeta[2] = 0.5 * (1.0 - xi*xi);
        // N8 = (1-ξ)(1-η²)/2 — edge 4, left (ξ=-1) — afecta θx
        Nb[3]      = 0.5 * (1.0 - xi) * (1.0 - eta*eta);
        dNbdxi[3]  = -0.5 * (1.0 - eta*eta);
        dNbdeta[3] = -(1.0 - xi) * eta;
    };

    // Lambda: compute Ba_b (3×4 bending) at a Gauss point
    // DOF mapping in α-vector: [Δθ5 (θy@e1), Δθ6 (θx@e2), Δθ7 (θy@e3), Δθ8 (θx@e4)]
    auto computeBa_b = [&](double xi, double eta) -> Eigen::MatrixXd {
        double Nb[4], dNbdxi_arr[4], dNbdeta_arr[4];
        bubbleShapes(xi, eta, Nb, dNbdxi_arr, dNbdeta_arr);

        double N_d[4], dN_d_xi[4], dN_d_eta[4];
        shapeFunctionsQ4(xi, eta, N_d, dN_d_xi, dN_d_eta);
        double Jinv[2][2];
        jacobian2D(x, y, dN_d_xi, dN_d_eta, Jinv);

        double dNbdx[4], dNbdy[4];
        for (int b = 0; b < 4; b++) {
            dNbdx[b] = Jinv[0][0] * dNbdxi_arr[b] + Jinv[0][1] * dNbdeta_arr[b];
            dNbdy[b] = Jinv[1][0] * dNbdxi_arr[b] + Jinv[1][1] * dNbdeta_arr[b];
        }

        Eigen::MatrixXd Ba_b = Eigen::MatrixXd::Zero(3, 4);
        // κxx = -∂θy/∂x  → Δθ5 (col 0) y Δθ7 (col 2)
        Ba_b(0, 0) = -dNbdx[0];
        Ba_b(0, 2) = -dNbdx[2];
        // κyy = +∂θx/∂y  → Δθ6 (col 1) y Δθ8 (col 3)
        Ba_b(1, 1) = +dNbdy[1];
        Ba_b(1, 3) = +dNbdy[3];
        // κxy = +∂θx/∂x − ∂θy/∂y
        Ba_b(2, 1) = +dNbdx[1];   // de θx
        Ba_b(2, 3) = +dNbdx[3];
        Ba_b(2, 0) = -dNbdy[0];   // de θy
        Ba_b(2, 2) = -dNbdy[2];
        return Ba_b;
    };

    // ── Pass 1: compute area-averaged Ba_b for patch test correction (Eq. 8.17) ──
    Eigen::MatrixXd Ba_b_avg = Eigen::MatrixXd::Zero(3, 4);
    double area = 0.0;

    for (int gp = 0; gp < 4; gp++) {
        double xi  = gp2x2[gp][0];
        double eta = gp2x2[gp][1];

        double N_d[4], dN_d_xi[4], dN_d_eta[4];
        shapeFunctionsQ4(xi, eta, N_d, dN_d_xi, dN_d_eta);
        double Jinv_d[2][2];
        double detJ = jacobian2D(x, y, dN_d_xi, dN_d_eta, Jinv_d);

        Eigen::MatrixXd Ba_b_gp = computeBa_b(xi, eta);
        double w = std::abs(detJ);
        Ba_b_avg += Ba_b_gp * w;
        area += w;
    }
    Ba_b_avg /= area;

    // ── Pass 2: assemble K_bending con Ba_b corregido ──
    Eigen::MatrixXd Kuu = Eigen::MatrixXd::Zero(12, 12);
    Eigen::MatrixXd Kua = Eigen::MatrixXd::Zero(12, 4);
    Eigen::MatrixXd Kaa = Eigen::MatrixXd::Zero(4, 4);

    for (int gp = 0; gp < 4; gp++) {
        double xi  = gp2x2[gp][0];
        double eta = gp2x2[gp][1];

        double N_gp[4], dNdxi[4], dNdeta[4];
        shapeFunctionsQ4(xi, eta, N_gp, dNdxi, dNdeta);
        double Jinv[2][2];
        double detJ = jacobian2D(x, y, dNdxi, dNdeta, Jinv);

        // Bb (3×12): standard bending B
        Eigen::MatrixXd Bb = Eigen::MatrixXd::Zero(3, 12);
        for (int i = 0; i < 4; i++) {
            double dNdx = Jinv[0][0] * dNdxi[i] + Jinv[0][1] * dNdeta[i];
            double dNdy = Jinv[1][0] * dNdxi[i] + Jinv[1][1] * dNdeta[i];
            Bb(0, 3*i + 2) = -dNdx;
            Bb(1, 3*i + 1) = +dNdy;
            Bb(2, 3*i + 1) = +dNdx;
            Bb(2, 3*i + 2) = -dNdy;
        }

        // Augmented Ba_b con patch-test correction (Wilson Eq. 8.17)
        Eigen::MatrixXd Ba_b = computeBa_b(xi, eta) - Ba_b_avg;

        double w = std::abs(detJ);
        // Bending contribution
        Kuu += Bb.transpose() * Db * Bb * w;
        Kua += Bb.transpose() * Db * Ba_b * w;
        Kaa += Ba_b.transpose() * Db * Ba_b * w;
    }

    // ── Pass 3: shear con MITC4 (Dvorkin & Bathe 1984) — sin contribución de Δθ ──
    // Los Δθ no contribuyen al shear porque MITC4 muestrea exactamente en
    // edge midpoints donde N5..N8 = 1 — sería redundante con la condensación.
    auto shearBat_dse = [&](double xi_pt, double eta_pt) -> Eigen::MatrixXd {
        double Np[4], dNp_dxi[4], dNp_deta[4];
        shapeFunctionsQ4(xi_pt, eta_pt, Np, dNp_dxi, dNp_deta);
        double Jp[2][2];
        jacobian2D(x, y, dNp_dxi, dNp_deta, Jp);
        Eigen::MatrixXd Bsp = Eigen::MatrixXd::Zero(2, 12);
        for (int i = 0; i < 4; i++) {
            double dNdx_p = Jp[0][0]*dNp_dxi[i] + Jp[0][1]*dNp_deta[i];
            double dNdy_p = Jp[1][0]*dNp_dxi[i] + Jp[1][1]*dNp_deta[i];
            Bsp(0, 3*i)     = +dNdx_p;
            Bsp(0, 3*i + 2) = +Np[i];
            Bsp(1, 3*i)     = +dNdy_p;
            Bsp(1, 3*i + 1) = -Np[i];
        }
        return Bsp;
    };
    auto Bs_A_dse = shearBat_dse(0.0, -1.0);
    auto Bs_C_dse = shearBat_dse(0.0, +1.0);
    auto Bs_B_dse = shearBat_dse(-1.0, 0.0);
    auto Bs_D_dse = shearBat_dse(+1.0, 0.0);

    for (int gp = 0; gp < 4; gp++) {
        double xi  = gp2x2[gp][0];
        double eta = gp2x2[gp][1];

        double N_gp[4], dNdxi_gp[4], dNdeta_gp[4];
        shapeFunctionsQ4(xi, eta, N_gp, dNdxi_gp, dNdeta_gp);
        double Jinv_gp[2][2];
        double detJ_gp = jacobian2D(x, y, dNdxi_gp, dNdeta_gp, Jinv_gp);

        Eigen::MatrixXd Bs_mitc = Eigen::MatrixXd::Zero(2, 12);
        Bs_mitc.row(0) = 0.5*(1.0 - eta)*Bs_A_dse.row(0) + 0.5*(1.0 + eta)*Bs_C_dse.row(0);
        Bs_mitc.row(1) = 0.5*(1.0 - xi)*Bs_B_dse.row(1) + 0.5*(1.0 + xi)*Bs_D_dse.row(1);

        Kuu += Bs_mitc.transpose() * Ds * Bs_mitc * std::abs(detJ_gp);
    }

    // Static condensation 16×16 → 12×12 (DSE de Wilson §8.6)
    Eigen::MatrixXd KaaInv;
    if (std::abs(Kaa.determinant()) > 1e-20) {
        KaaInv = Kaa.inverse();
    } else {
        std::cerr << "Warning: Kaa singular en getBendingK_DSE, fallback." << std::endl;
        return Kuu;
    }
    Eigen::MatrixXd Kb = Kuu - Kua * KaaInv * Kua.transpose();
    return Kb;
}

// ============================================================================
// VARIANTE C: getBendingK_DSE_FULL — Complete Wilson DSE per Cap. 8 (textbook)
//
// Implementación completa del Discrete Shear Element de Wilson considerando
// TODOS los problemas que enfrenta ETABS internamente (Cap. 6 + Cap. 8 del libro
// "Análisis Estructural" de Edward L. Wilson, 4ª Ed.):
//
// 1) ENRIQUECIMIENTO DEL CAMPO DE ROTACIONES (16 DOFs internos):
//    Δθ_e = "rotación perpendicular a borde e" (en plano de placa) en el
//    punto medio del lado, una por cada uno de los 4 bordes.
//    Funciones de forma de burbuja N5..N8 cuadráticas en lados:
//      N5 = (1−ξ²)(1−η)/2 (lado η=−1)
//      N6 = (1+ξ)(1−η²)/2 (lado ξ=+1)
//      N7 = (1−ξ²)(1+η)/2 (lado η=+1)
//      N8 = (1−ξ)(1−η²)/2 (lado ξ=−1)
//    Las rotaciones extendidas son:
//      θx_enriched += −sin α_e · N_{e+5} · Δθ_e
//      θy_enriched += +cos α_e · N_{e+5} · Δθ_e
//    (donde α_e es el ángulo del tangente del lado e con +x, y la dirección
//    perpendicular en plano de placa es n̂_e = (−sin α_e, cos α_e); Δθ_e
//    es la componente escalar de la rotación a lo largo de n̂_e.)
//
// 2) PATCH TEST DE CURVATURA CONSTANTE (Wilson Eq. 8.17 / Eq. 6.4):
//      Bb_aa_correc = Bb_aa(ξ,η) − (1/A)·∫ Bb_aa dA
//    Esto fuerza ∫ Bb_aa_correc dA = 0 → patch test pasa para cuadriláteros
//    distorsionados. Es la generalización de la corrección Taylor 1976 J0.
//
// 3) CORTANTE DISCRETO POR LADO (Wilson Eq. 8.6 → 8.9):
//    En lugar de usar MITC4 (sampling en (ξ=0,η=±1) y (ξ=±1,η=0) en coords
//    naturales), DSE muestrea el cortante TANGENCIAL γ_e en el punto medio
//    de cada lado en COORDS FÍSICAS:
//      γ_e = (1/L_e)(w_j − w_i) + (1/2)(θ_n_i + θ_n_j) + (2/3)·Δθ_e
//    donde θ_n = −sin α · θx + cos α · θy. La derivación viene de asumir
//    interpolación cúbica de Hermite para w a lo largo de cada lado.
//    El término +(2/3)·Δθ_e es CRUCIAL: acopla las rotaciones internas Δθ
//    con el cortante. SIN este término, los Δθ serían "modos puros de
//    flexión" y el elemento sufriría shear locking severo.
//
// 4) RECONSTRUCCIÓN DEL CORTANTE EN ESQUINAS (Wilson Eq. 8.9):
//    En cada esquina i, dos lados se encuentran (uno saliente, uno entrante).
//    Los cortantes tangenciales γ_out, γ_in en los respectivos puntos medios
//    se transforman a (γxz, γyz) cartesianos en la esquina via:
//      [γ_out]   [cx_out  cy_out] [γxz_i]
//      [γ_in ] = [-cx_in  -cy_in] [γyz_i]    (signo flip para dirección saliente)
//    Invertir 2×2 → (γxz_i, γyz_i) en cada esquina.
//
// 5) INTERPOLACIÓN BILINEAL N1..N4 PARA EVALUAR EN PUNTOS DE GAUSS:
//    γxz(ξ,η) = Σ N_i(ξ,η)·γxz_i
//    γyz(ξ,η) = Σ N_i(ξ,η)·γyz_i
//    Wilson §8.4: "el paso final es usar las funciones bilineales estándares
//    de cuatro nodos para evaluar los cortantes en el punto de integración."
//
// 6) CONDENSACIÓN ESTÁTICA (Wilson Eq. 6.11 / Eq. 8.18-8.19):
//    [Kuu Kua] [u]   [F]              Kb = Kuu − Kua · Kaa⁻¹ · Kua^T
//    [Kau Kaa] [α] = [0]      →       (12×12 final, los Δθ no aparecen en
//    Como F_α = 0 (no hay carga directa)  el ensamble global, pero su efecto
//    se puede eliminar α via condensación. estabilizante queda incorporado
//                                          en Kb.)
//
// PROPIEDADES MATEMÁTICAS GARANTIZADAS:
// - Pasa patch test de curvatura constante (gracias a Eq. 8.17).
// - Pasa patch test de cortante constante (gracias a interp. bilineal de
//   esquinas reconstruidas correctamente, en cuadriláteros convexos).
// - Sin shear locking en flexión pura (el (2/3)·Δθ_ij + condensación absorbe
//   el cortante parásito Q4, equivalente al ANS / MITC4 en rectángulos).
// - Equivalente exacto a MITC4 para rectángulos perfectos en plano X-Y.
// - Para mallas distorsionadas, ligeramente diferente de MITC4 (DSE muestrea
//   en coords físicas, MITC4 en coords naturales).
//
// Refs:
//   - Wilson, E.L., "Análisis Estructural", 4ª Ed., Cap. 6 §6.3-§6.5, Cap. 8 §8.2-§8.6
//   - CSI Analysis Reference Manual §10.1 (DSE/DKE en SAP2000/ETABS)
//   - Ibrahimbegovic & Wilson (1991), "A unified formulation for triangular
//     and quadrilateral flat shell finite elements"
//   - Bathe & Bolourchi (1980); Dvorkin & Bathe (1984), MITC4 (caso particular)
// ============================================================================
static Eigen::MatrixXd getBendingK_DSE_FULL(const double x[4], const double y[4],
                                              double E, double nu, double t)
{
    // ── Material matrices ───────────────────────────────
    double D0 = E * t * t * t / (12.0 * (1.0 - nu * nu));
    Eigen::Matrix3d Db;
    Db << D0,      D0 * nu, 0,
          D0 * nu, D0,      0,
          0,       0,       D0 * (1 - nu) / 2.0;

    double ks = 5.0 / 6.0;
    double G  = E / (2.0 * (1.0 + nu));
    Eigen::Matrix2d Ds;
    Ds << ks * G * t, 0,
          0,          ks * G * t;

    // ── Edge geometry: tangente (cx,cy) y longitud para los 4 bordes ──
    // Bordes (CCW): e0=0→1, e1=1→2, e2=2→3, e3=3→0
    int edge_node_i[4] = {0, 1, 2, 3};
    int edge_node_j[4] = {1, 2, 3, 0};
    double cx_e[4], cy_e[4], L_e[4];
    for (int e = 0; e < 4; e++) {
        int i = edge_node_i[e], j = edge_node_j[e];
        double dx = x[j] - x[i];
        double dy = y[j] - y[i];
        L_e[e] = std::sqrt(dx*dx + dy*dy);
        if (L_e[e] < 1e-15) L_e[e] = 1e-15;
        cx_e[e] = dx / L_e[e];   // = cos α_e
        cy_e[e] = dy / L_e[e];   // = sin α_e
    }

    // ── Funciones de forma burbuja N5..N8 (interior cuadrático en lados) ──
    auto bubbleShapes = [](double xi, double eta,
                            double Nb[4], double dNbdxi[4], double dNbdeta[4]) {
        Nb[0]      = 0.5 * (1.0 - xi*xi) * (1.0 - eta);
        dNbdxi[0]  = -xi * (1.0 - eta);
        dNbdeta[0] = -0.5 * (1.0 - xi*xi);
        Nb[1]      = 0.5 * (1.0 + xi) * (1.0 - eta*eta);
        dNbdxi[1]  = 0.5 * (1.0 - eta*eta);
        dNbdeta[1] = -(1.0 + xi) * eta;
        Nb[2]      = 0.5 * (1.0 - xi*xi) * (1.0 + eta);
        dNbdxi[2]  = -xi * (1.0 + eta);
        dNbdeta[2] = 0.5 * (1.0 - xi*xi);
        Nb[3]      = 0.5 * (1.0 - xi) * (1.0 - eta*eta);
        dNbdxi[3]  = -0.5 * (1.0 - eta*eta);
        dNbdeta[3] = -(1.0 - xi) * eta;
    };

    // ── Lambda: B_b en punto Gauss ──────────────────────
    // Devuelve Bb_uu (3×12) [estándar nodal] y Bb_aa (3×4) [contribución burbujas]
    auto computeBb = [&](double xi, double eta,
                          Eigen::MatrixXd &Bb_uu, Eigen::MatrixXd &Bb_aa,
                          double &detJ_out) {
        double N[4], dNdxi[4], dNdeta[4];
        shapeFunctionsQ4(xi, eta, N, dNdxi, dNdeta);
        double Jinv[2][2];
        detJ_out = jacobian2D(x, y, dNdxi, dNdeta, Jinv);

        // Bb_uu (3×12): nodal estándar (mismo que getBendingK base)
        Bb_uu = Eigen::MatrixXd::Zero(3, 12);
        for (int i = 0; i < 4; i++) {
            double dNdx = Jinv[0][0] * dNdxi[i] + Jinv[0][1] * dNdeta[i];
            double dNdy = Jinv[1][0] * dNdxi[i] + Jinv[1][1] * dNdeta[i];
            Bb_uu(0, 3*i + 2) = -dNdx;  // κxx = -∂θy/∂x
            Bb_uu(1, 3*i + 1) = +dNdy;  // κyy = +∂θx/∂y
            Bb_uu(2, 3*i + 1) = +dNdx;  // κxy: +∂θx/∂x
            Bb_uu(2, 3*i + 2) = -dNdy;  //      -∂θy/∂y
        }

        // Bb_aa (3×4): contribución de Δθ_e a curvaturas
        // Δθ_e enriquece el campo θ:
        //   Δθx = -sin α_e · N_{e+5} · Δθ_e
        //   Δθy = +cos α_e · N_{e+5} · Δθ_e
        // Curvaturas inducidas:
        //   κxx = -∂θy/∂x = -cos α_e · ∂N_{e+5}/∂x · Δθ_e
        //   κyy = +∂θx/∂y = -sin α_e · ∂N_{e+5}/∂y · Δθ_e
        //   κxy = +∂θx/∂x − ∂θy/∂y
        //        = -sin α_e · ∂N_{e+5}/∂x · Δθ_e − cos α_e · ∂N_{e+5}/∂y · Δθ_e
        double Nb[4], dNbdxi_a[4], dNbdeta_a[4];
        bubbleShapes(xi, eta, Nb, dNbdxi_a, dNbdeta_a);

        Bb_aa = Eigen::MatrixXd::Zero(3, 4);
        for (int e = 0; e < 4; e++) {
            double dNbdx_e = Jinv[0][0] * dNbdxi_a[e] + Jinv[0][1] * dNbdeta_a[e];
            double dNbdy_e = Jinv[1][0] * dNbdxi_a[e] + Jinv[1][1] * dNbdeta_a[e];
            double sa = cy_e[e];   // sin α_e
            double ca = cx_e[e];   // cos α_e
            Bb_aa(0, e) = -ca * dNbdx_e;                    // κxx
            Bb_aa(1, e) = -sa * dNbdy_e;                    // κyy
            Bb_aa(2, e) = -sa * dNbdx_e - ca * dNbdy_e;     // κxy
        }
    };

    // ── Pass 1: media de área de Bb_aa para corrección patch test (Eq. 8.17) ──
    Eigen::MatrixXd Bb_aa_avg = Eigen::MatrixXd::Zero(3, 4);
    double area = 0.0;
    {
        for (int gp = 0; gp < 4; gp++) {
            double xi  = gp2x2[gp][0];
            double eta = gp2x2[gp][1];
            Eigen::MatrixXd Bb_uu_gp, Bb_aa_gp;
            double detJ;
            computeBb(xi, eta, Bb_uu_gp, Bb_aa_gp, detJ);
            double w = std::abs(detJ);
            Bb_aa_avg += Bb_aa_gp * w;
            area += w;
        }
        if (area > 1e-15) Bb_aa_avg /= area;
    }

    // ── B_γedge (4×16): cortantes tangenciales en los 4 puntos medios de lado
    // Wilson Eq. 8.6:
    //   γ_e = (1/L_e)(w_j − w_i) + (1/2)(θ_n_i + θ_n_j) + (2/3)·Δθ_e
    //   donde θ_n = −sin α_e · θx + cos α_e · θy (perpendicular en plano)
    // DOF layout: cols 0..11 = [w0,θx0,θy0, w1,θx1,θy1, w2,θx2,θy2, w3,θx3,θy3]
    //             cols 12..15 = [Δθ_0, Δθ_1, Δθ_2, Δθ_3]
    Eigen::MatrixXd B_gamma_edge = Eigen::MatrixXd::Zero(4, 16);
    for (int e = 0; e < 4; e++) {
        int i = edge_node_i[e], j = edge_node_j[e];
        double sa = cy_e[e];   // sin α_e
        double ca = cx_e[e];   // cos α_e
        // (w_j − w_i) / L_e
        B_gamma_edge(e, 3*j + 0) += +1.0 / L_e[e];
        B_gamma_edge(e, 3*i + 0) += -1.0 / L_e[e];
        // (1/2)(θ_n_i + θ_n_j) donde θ_n = -sa·θx + ca·θy
        B_gamma_edge(e, 3*i + 1) += -0.5 * sa;  // θx_i
        B_gamma_edge(e, 3*i + 2) += +0.5 * ca;  // θy_i
        B_gamma_edge(e, 3*j + 1) += -0.5 * sa;  // θx_j
        B_gamma_edge(e, 3*j + 2) += +0.5 * ca;  // θy_j
        // (2/3)·Δθ_e
        B_gamma_edge(e, 12 + e) += 2.0 / 3.0;
    }

    // ── B_γcorner (8×16): (γxz, γyz) en cada esquina via Wilson Eq. 8.9 ──
    // En esquina i:
    //   - Lado saliente: edge_out = i, tangente (cx_i, cy_i)
    //   - Lado entrante: edge_in = (i+3)%4, tangente "saliendo de i" = (-cx_{i-1}, -cy_{i-1})
    //   Sistema 2×2:
    //     [cx_out  cy_out ] [γxz]   [γ_out_at_mid          ]
    //     [-cx_in  -cy_in ] [γyz] = [-γ_in_at_mid (sign flip)]
    //   det = cx_out·(-cy_in) − cy_out·(-cx_in) = cx_in·cy_out − cx_out·cy_in
    Eigen::MatrixXd B_gamma_corner = Eigen::MatrixXd::Zero(8, 16);
    for (int i = 0; i < 4; i++) {
        int edge_out = i;
        int edge_in  = (i + 3) % 4;
        double co_x = cx_e[edge_out],   co_y = cy_e[edge_out];
        double ci_x = -cx_e[edge_in],   ci_y = -cy_e[edge_in];
        double det = co_x * ci_y - co_y * ci_x;
        if (std::abs(det) < 1e-15) det = (det >= 0 ? 1e-15 : -1e-15);
        double inv_det = 1.0 / det;
        // Inversa 2×2: [ci_y -co_y; -ci_x co_x] / det
        // Sistema RHS: [γ_out; -γ_in] (sign flip en γ_in)
        // → γxz = (ci_y · γ_out + (-co_y)·(-γ_in)) / det = (ci_y·γ_out + co_y·γ_in) / det
        //   γyz = (-ci_x·γ_out + co_x·(-γ_in)) / det     = (-ci_x·γ_out - co_x·γ_in) / det
        B_gamma_corner.row(2*i)     = ( ci_y * B_gamma_edge.row(edge_out) + co_y * B_gamma_edge.row(edge_in)) * inv_det;
        B_gamma_corner.row(2*i + 1) = (-ci_x * B_gamma_edge.row(edge_out) - co_x * B_gamma_edge.row(edge_in)) * inv_det;
    }

    // ── Pass 2: ensamblar K_full = [K_uu (12×12) | K_uα (12×4); K_αu | K_αα (4×4)] ──
    Eigen::MatrixXd K_full = Eigen::MatrixXd::Zero(16, 16);

    // Bending: B_b_full (3×16) = [Bb_uu (3×12) | Bb_aa−avg (3×4)]
    for (int gp = 0; gp < 4; gp++) {
        double xi  = gp2x2[gp][0];
        double eta = gp2x2[gp][1];
        Eigen::MatrixXd Bb_uu, Bb_aa;
        double detJ;
        computeBb(xi, eta, Bb_uu, Bb_aa, detJ);
        Bb_aa = Bb_aa - Bb_aa_avg;  // patch test correction Eq. 8.17

        Eigen::MatrixXd B_b_full(3, 16);
        B_b_full.block(0,  0, 3, 12) = Bb_uu;
        B_b_full.block(0, 12, 3,  4) = Bb_aa;

        K_full += B_b_full.transpose() * Db * B_b_full * std::abs(detJ);
    }

    // Shear: B_s (2×16) = bilinear interpolation N_i · B_γcorner.row(2*i, 2*i+1)
    for (int gp = 0; gp < 4; gp++) {
        double xi  = gp2x2[gp][0];
        double eta = gp2x2[gp][1];
        double N_gp[4], dN_gp_dxi[4], dN_gp_deta[4];
        shapeFunctionsQ4(xi, eta, N_gp, dN_gp_dxi, dN_gp_deta);
        double Jinv_gp[2][2];
        double detJ_gp = jacobian2D(x, y, dN_gp_dxi, dN_gp_deta, Jinv_gp);

        Eigen::MatrixXd B_s = Eigen::MatrixXd::Zero(2, 16);
        for (int i = 0; i < 4; i++) {
            B_s.row(0) += N_gp[i] * B_gamma_corner.row(2*i);
            B_s.row(1) += N_gp[i] * B_gamma_corner.row(2*i + 1);
        }
        K_full += B_s.transpose() * Ds * B_s * std::abs(detJ_gp);
    }

    // ── Condensación estática 16×16 → 12×12 (Wilson Eq. 6.11 / §8.6) ──
    Eigen::MatrixXd Kuu = K_full.block( 0,  0, 12, 12);
    Eigen::MatrixXd Kua = K_full.block( 0, 12, 12,  4);
    Eigen::MatrixXd Kaa = K_full.block(12, 12,  4,  4);
    Eigen::MatrixXd KaaInv;
    if (std::abs(Kaa.determinant()) > 1e-20) {
        KaaInv = Kaa.inverse();
    } else {
        std::cerr << "Warning: Kaa singular en getBendingK_DSE_FULL, fallback a Kuu." << std::endl;
        return Kuu;
    }
    Eigen::MatrixXd Kb = Kuu - Kua * KaaInv * Kua.transpose();
    return Kb;
}

// ─── FORMULATION SWITCH ─────────────────────────────────────────────────
// 0 = MITC4 + Wilson α-modes (default, current Hekatan, Variant A)
// 1 = DSE Bathe-Wilson híbrido (DSE-bending + MITC4-shear, Variant B)
// 2 = DSE Wilson COMPLETO (Cap 8 textbook, edge-discrete shear, Variant C)
// Cambiar y recompilar para evaluar la formulación deseada.
#ifndef HK_BENDING_FORMULATION
#define HK_BENDING_FORMULATION 0
#endif

// ─── Public: Combined Shell Q4 stiffness 24×24 ─────────────────────────────
Eigen::MatrixXd getLocalStiffnessMatrixShellQ4(
    const std::vector<Node> &nodes,
    const ElementInputs &elementInputs,
    int index)
{
    double E  = getMapVal(elementInputs.elasticities, index, 0.0);
    double nu = getMapVal(elementInputs.poissonsRatios, index, 0.0);
    double t  = getMapVal(elementInputs.thicknesses, index, 0.0);

    if (E < 1e-12 || t < 1e-12) {
        std::cerr << "Warning: ShellQ4 element " << index
                  << " has E=" << E << " t=" << t
                  << ". Returning zero 24x24." << std::endl;
        return Eigen::MatrixXd::Zero(24, 24);
    }

    // Project global 3D node coordinates to local 2D shell frame
    // This is critical for non-horizontal shells (e.g., vertical walls in XZ plane)
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
    localX = localY.cross(localZ);
    localX.normalize();

    Eigen::Vector3d center = 0.25 * (p0 + p1 + p2 + p3);
    double x[4], y[4];
    Eigen::Vector3d pts[4] = {p0, p1, p2, p3};
    for (int i = 0; i < 4; i++) {
        Eigen::Vector3d d = pts[i] - center;
        x[i] = d.dot(localX);
        y[i] = d.dot(localY);
    }

    // ── ETABS-style Property Modifiers (CSI Manual §10.7) ──
    //   Membrane modifier = 0 → Plate puro (sin rigidez in-plane)
    //   Bending modifier  = 0 → Membrane puro (sin rigidez out-of-plane)
    //   Por defecto ambos = 1.0 → Shell completo
    double mFactor = getMapVal(elementInputs.membraneModifiers, index, 1.0);
    double bFactor = getMapVal(elementInputs.bendingModifiers, index, 1.0);

    Eigen::MatrixXd Km = getMembraneK(x, y, E, nu, t);   // 8×8
    #if HK_BENDING_FORMULATION == 2
        Eigen::MatrixXd Kb = getBendingK_DSE_FULL(x, y, E, nu, t);  // 12×12 (Wilson DSE Cap 8 completo, Variant C)
    #elif HK_BENDING_FORMULATION == 1
        Eigen::MatrixXd Kb = getBendingK_DSE(x, y, E, nu, t);       // 12×12 (DSE-bending + MITC4-shear, Variant B)
    #else
        Eigen::MatrixXd Kb = getBendingK(x, y, E, nu, t);           // 12×12 (MITC4 + Wilson α, Variant A)
    #endif
    Km *= mFactor;
    Kb *= bFactor;

    // Drilling stiffness (small artificial value, escalada por modifier para
    // preservar la consistencia: si Membrane=0 → drilling también casi 0)
    double drill = 0;
    for (int i = 0; i < 8; i++) drill += std::abs(Km(i, i));
    drill *= 1e-6 / 8.0;
    if (drill < 1e-15) drill = E * t * 1e-6 * std::max(mFactor, 1e-6);

    // Assemble into 24×24
    // DOFs per node: [u, v, w, θx, θy, θz] = indices [0,1,2,3,4,5]
    Eigen::MatrixXd K = Eigen::MatrixXd::Zero(24, 24);

    // Membrane: u=6i+0, v=6i+1 ← Km indices 2i, 2i+1
    for (int ni = 0; ni < 4; ni++) {
        for (int nj = 0; nj < 4; nj++) {
            for (int di = 0; di < 2; di++) {
                for (int dj = 0; dj < 2; dj++) {
                    K(ni*6 + di, nj*6 + dj) = Km(ni*2 + di, nj*2 + dj);
                }
            }
        }
    }

    // Bending: w=6i+2, θx=6i+3, θy=6i+4 ← Kb indices 3i, 3i+1, 3i+2
    for (int ni = 0; ni < 4; ni++) {
        for (int nj = 0; nj < 4; nj++) {
            for (int di = 0; di < 3; di++) {
                for (int dj = 0; dj < 3; dj++) {
                    K(ni*6 + 2 + di, nj*6 + 2 + dj) = Kb(ni*3 + di, nj*3 + dj);
                }
            }
        }
    }

    // Drilling: θz=6i+5
    for (int i = 0; i < 4; i++) {
        K(i*6 + 5, i*6 + 5) = drill;
    }

    return K;
}

// ─── Transformation matrix for Q4 shell: 24×24 ─────────────────────────────
Eigen::MatrixXd getTransformationMatrixShellQ4(
    const Node &n0, const Node &n1, const Node &n2, const Node &n3)
{
    // Local X: from node 0 toward node 1 direction (bottom edge average)
    Eigen::Vector3d v01(n1[0]-n0[0], n1[1]-n0[1], n1[2]-n0[2]);
    Eigen::Vector3d v32(n2[0]-n3[0], n2[1]-n3[1], n2[2]-n3[2]);
    Eigen::Vector3d localX = (v01 + v32);
    double lenX = localX.norm();
    if (lenX < 1e-12) {
        return Eigen::MatrixXd::Identity(24, 24);
    }
    localX /= lenX;

    // Normal from diagonals cross product
    Eigen::Vector3d d02(n2[0]-n0[0], n2[1]-n0[1], n2[2]-n0[2]);
    Eigen::Vector3d d13(n3[0]-n1[0], n3[1]-n1[1], n3[2]-n1[2]);
    Eigen::Vector3d localZ = d02.cross(d13);
    double lenZ = localZ.norm();
    if (lenZ < 1e-12) {
        return Eigen::MatrixXd::Identity(24, 24);
    }
    localZ /= lenZ;

    // Local Y = Z × X, then re-orthogonalize
    Eigen::Vector3d localY = localZ.cross(localX);
    localY.normalize();
    localX = localY.cross(localZ);
    localX.normalize();

    Eigen::Matrix3d R;
    R.row(0) = localX.transpose();
    R.row(1) = localY.transpose();
    R.row(2) = localZ.transpose();

    // 24×24 block-diagonal (4 nodes × 2 blocks of 3)
    Eigen::MatrixXd T = Eigen::MatrixXd::Zero(24, 24);
    for (int i = 0; i < 8; i++) {
        T.block<3,3>(i*3, i*3) = R;
    }

    return T;
}
