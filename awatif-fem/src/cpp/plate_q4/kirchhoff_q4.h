/**
 * ============================================================================
 *  Kirchhoff-Mindlin Q4 Plate Bending Element
 * ============================================================================
 *
 *  4-node isoparametric quadrilateral plate element.
 *  Uses selective reduced integration to avoid shear locking:
 *    - Bending:  2×2 Gauss quadrature (full)
 *    - Shear:    1×1 Gauss quadrature (reduced)
 *
 *  In the thin plate limit (t/L < 1/20), recovers Kirchhoff theory.
 *
 *  DOFs per node: 3  →  w (transverse), βx (rotation about x), βy (rotation about y)
 *  DOFs per element: 12
 *
 *  Sign convention (Bathe):
 *    w  = transverse displacement (positive upward, +z)
 *    βx = rotation of the cross-section in the x-z plane
 *    βy = rotation of the cross-section in the y-z plane
 *
 *  Kinematics:
 *    Curvatures:     κ = {∂βx/∂x, ∂βy/∂y, ∂βx/∂y + ∂βy/∂x}
 *    Shear strains:  γ = {∂w/∂x - βx, ∂w/∂y - βy}
 *
 *  Constitutive:
 *    Db = Et³/(12(1-ν²)) [1, ν, 0; ν, 1, 0; 0, 0, (1-ν)/2]  (bending)
 *    Ds = κ·G·t [1, 0; 0, 1]   (shear, κ=5/6 correction factor)
 *
 *  Node numbering (counterclockwise):
 *      4 -------- 3
 *      |          |
 *      |    (0,0) |    ← natural coords (ξ,η)
 *      |          |
 *      1 -------- 2
 *
 *  References:
 *    [1] Bathe, K.J. "Finite Element Procedures", 2014, Ch. 5.4
 *    [2] Hughes, T.J.R. "The Finite Element Method", 2000
 *    [3] Zienkiewicz & Taylor, "The Finite Element Method", Vol.2, Ch. 5
 *
 * ============================================================================
 */

#pragma once

#include <Eigen/Dense>
#include <Eigen/Sparse>
#include <vector>
#include <array>
#include <cmath>
#include <cassert>
#include <iostream>

namespace plate_q4 {

// ── Types ──────────────────────────────────────────────────────────

struct Node2D {
    double x, y;
};

// Element connectivity: 4 node indices (0-based)
using Element = std::array<int, 4>;

// Boundary condition: node index + DOF (0=w, 1=βx, 2=βy) + prescribed value
struct BC {
    int node;
    int dof;       // 0=w, 1=βx, 2=βy
    double value;  // prescribed displacement/rotation (usually 0)
};

// Point load: node index + DOF + magnitude
struct PointLoad {
    int node;
    int dof;       // 0=w, 1=βx, 2=βy
    double value;
};

// Spring support: node index + DOF + stiffness (adds k to K_global diagonal)
struct Spring {
    int node;
    int dof;       // 0=w, 1=βx, 2=βy
    double k;      // spring stiffness (force/length or moment/radian)
};

// Plate theory type
enum class PlateTheory : int {
    MINDLIN    = 0,   // Plate-Thick: bending + transverse shear (κ=5/6)
    KIRCHHOFF  = 1,   // Plate-Thin:  bending only (κ→∞, no shear deformation)
    MEMBRANE   = 2,   // Membrane:    in-plane only (no bending) — NOT YET IMPLEMENTED
};

// Material properties (isotropic plate)
struct Material {
    double E;      // Young's modulus
    double nu;     // Poisson's ratio
    double t;      // plate thickness
    PlateTheory theory = PlateTheory::MINDLIN;  // plate theory
};

// Solution output
struct PlateResult {
    Eigen::VectorXd displacements;   // [w1, βx1, βy1, w2, βx2, βy2, ...]
    // Per-element results (evaluated at element center):
    std::vector<double> Mxx;         // bending moment per unit length
    std::vector<double> Myy;
    std::vector<double> Mxy;
    std::vector<double> Qx;          // transverse shear per unit length
    std::vector<double> Qy;
};

// ── Constants ──────────────────────────────────────────────────────

constexpr int DOFS_PER_NODE = 3;    // w, βx, βy
constexpr int NODES_PER_ELEM = 4;
constexpr int DOFS_PER_ELEM = 12;   // 4 nodes × 3 DOFs
constexpr double SHEAR_CORRECTION = 5.0 / 6.0;  // Mindlin shear correction factor

// ── Core Functions ─────────────────────────────────────────────────

/**
 * Compute 12×12 element stiffness matrix for a Q4 plate element.
 *
 * @param nodes  4 corner nodes (x, y) in physical coordinates
 * @param mat    Material properties (E, ν, t)
 * @return       12×12 symmetric stiffness matrix
 */
Eigen::Matrix<double, 12, 12> elementStiffness(
    const std::array<Node2D, 4>& nodes,
    const Material& mat);

/**
 * Compute 12×1 consistent load vector for uniform pressure.
 *
 * @param nodes     4 corner nodes
 * @param pressure  Pressure magnitude (force/area, positive = +z direction)
 * @return          12×1 load vector
 */
Eigen::Matrix<double, 12, 1> elementLoadUniform(
    const std::array<Node2D, 4>& nodes,
    double pressure);

/**
 * Recover bending moments and shear forces at element center.
 *
 * @param nodes  4 corner nodes
 * @param mat    Material properties
 * @param d_e    12×1 element displacement vector
 * @return       {Mxx, Myy, Mxy, Qx, Qy}
 */
std::array<double, 5> elementStressResultants(
    const std::array<Node2D, 4>& nodes,
    const Material& mat,
    const Eigen::Matrix<double, 12, 1>& d_e);

/**
 * Assemble and solve a complete plate problem.
 *
 * @param nodes     All mesh nodes
 * @param elements  Element connectivity (4 node indices each)
 * @param mat       Material (uniform for all elements)
 * @param bcs       Boundary conditions
 * @param pressure  Uniform pressure on all elements (force/area)
 * @param pointLoads  Additional point loads
 * @return          Solution with displacements and stress resultants
 */
PlateResult solve(
    const std::vector<Node2D>& nodes,
    const std::vector<Element>& elements,
    const Material& mat,
    const std::vector<BC>& bcs,
    double pressure = 0.0,
    const std::vector<PointLoad>& pointLoads = {},
    const std::vector<Spring>& springs = {});

// ── Mesh Generation ────────────────────────────────────────────────

/**
 * Generate a structured rectangular mesh of Q4 elements.
 *
 * @param Lx    Plate width (x-direction)
 * @param Ly    Plate height (y-direction)
 * @param nx    Number of elements in x
 * @param ny    Number of elements in y
 * @param nodes     [out] Generated nodes
 * @param elements  [out] Generated elements
 */
void generateRectMesh(
    double Lx, double Ly, int nx, int ny,
    std::vector<Node2D>& nodes,
    std::vector<Element>& elements);

/**
 * Apply simply-supported BCs on all 4 edges (w=0 on boundary).
 */
std::vector<BC> bcSimplySupported(
    const std::vector<Node2D>& nodes,
    double Lx, double Ly, double tol = 1e-10);

/**
 * Apply clamped BCs on all 4 edges (w=0, βx=0, βy=0 on boundary).
 */
std::vector<BC> bcClamped(
    const std::vector<Node2D>& nodes,
    double Lx, double Ly, double tol = 1e-10);

} // namespace plate_q4
