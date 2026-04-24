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

// ─── Membrane stiffness (plane stress Q4): 8×8 ─────────────────────────────
static Eigen::MatrixXd getMembraneK(const double x[4], const double y[4],
                                     double E, double nu, double t)
{
    Eigen::MatrixXd Km = Eigen::MatrixXd::Zero(8, 8);

    double factor = E / (1.0 - nu * nu);
    Eigen::Matrix3d Dm;
    Dm << factor,       factor * nu, 0,
          factor * nu,  factor,      0,
          0,            0,           factor * (1 - nu) / 2.0;

    for (int gp = 0; gp < 4; gp++) {
        double xi  = gp2x2[gp][0];
        double eta = gp2x2[gp][1];

        double N[4], dNdxi[4], dNdeta[4];
        shapeFunctionsQ4(xi, eta, N, dNdxi, dNdeta);

        double Jinv[2][2];
        double detJ = jacobian2D(x, y, dNdxi, dNdeta, Jinv);

        Eigen::MatrixXd B = Eigen::MatrixXd::Zero(3, 8);
        for (int i = 0; i < 4; i++) {
            double dNdx = Jinv[0][0] * dNdxi[i] + Jinv[0][1] * dNdeta[i];
            double dNdy = Jinv[1][0] * dNdxi[i] + Jinv[1][1] * dNdeta[i];
            B(0, 2*i)     = dNdx;
            B(1, 2*i + 1) = dNdy;
            B(2, 2*i)     = dNdy;
            B(2, 2*i + 1) = dNdx;
        }

        Km += B.transpose() * Dm * B * t * std::abs(detJ);
    }

    return Km;
}

// ─── Plate bending stiffness (Mindlin-Reissner Q4): 12×12 ──────────────────
// DOFs per node: w, θx, θy
// Selective Reduced Integration: 2×2 bending + 1×1 shear
static Eigen::MatrixXd getBendingK(const double x[4], const double y[4],
                                    double E, double nu, double t)
{
    Eigen::MatrixXd Kb = Eigen::MatrixXd::Zero(12, 12);

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

    // ─── Bending: 2×2 Gauss ──────────────────────
    for (int gp = 0; gp < 4; gp++) {
        double xi  = gp2x2[gp][0];
        double eta = gp2x2[gp][1];

        double N[4], dNdxi[4], dNdeta[4];
        shapeFunctionsQ4(xi, eta, N, dNdxi, dNdeta);

        double Jinv[2][2];
        double detJ = jacobian2D(x, y, dNdxi, dNdeta, Jinv);

        // Bb (3×12): same convention as kirchhoff_q4.cpp
        // DOFs: [w, θx, θy] per node (θx=βx, θy=βy in Mindlin convention)
        // κxx = dθx/dx, κyy = dθy/dy, κxy = dθx/dy + dθy/dx
        Eigen::MatrixXd Bb = Eigen::MatrixXd::Zero(3, 12);
        for (int i = 0; i < 4; i++) {
            double dNdx = Jinv[0][0] * dNdxi[i] + Jinv[0][1] * dNdeta[i];
            double dNdy = Jinv[1][0] * dNdxi[i] + Jinv[1][1] * dNdeta[i];
            Bb(0, 3*i + 1) = dNdx;   // κxx = dθx/dx (= dβx/dx)
            Bb(1, 3*i + 2) = dNdy;   // κyy = dθy/dy (= dβy/dy)
            Bb(2, 3*i + 1) = dNdy;   // κxy = dθx/dy
            Bb(2, 3*i + 2) = dNdx;   //     + dθy/dx
        }

        Kb += Bb.transpose() * Db * Bb * std::abs(detJ);
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
        // Same convention as kirchhoff_q4.cpp shearB():
        // γxz = dw/dx - θx (= dw/dx - βx)
        // γyz = dw/dy - θy (= dw/dy - βy)
        Eigen::MatrixXd Bsp = Eigen::MatrixXd::Zero(2, 12);
        for (int i = 0; i < 4; i++) {
            double dNdx_p = Jp[0][0]*dNp_dxi[i] + Jp[0][1]*dNp_deta[i];
            double dNdy_p = Jp[1][0]*dNp_dxi[i] + Jp[1][1]*dNp_deta[i];
            Bsp(0, 3*i)     =  dNdx_p;  // γxz: dw/dx
            Bsp(0, 3*i + 1) = -Np[i];   // γxz: -θx (= -βx)
            Bsp(1, 3*i)     =  dNdy_p;  // γyz: dw/dy
            Bsp(1, 3*i + 2) = -Np[i];   // γyz: -θy (= -βy)
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

        Kb += Bs_mitc.transpose() * Ds * Bs_mitc * std::abs(detJ_gp);
    }

    return Kb;
}

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
    Eigen::MatrixXd Kb = getBendingK(x, y, E, nu, t);     // 12×12
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
