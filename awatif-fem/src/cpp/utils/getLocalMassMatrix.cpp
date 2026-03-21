#include "../data-model.h"
#include <vector>
#include <cmath>
#include <Eigen/Dense>
#include <iostream>

template <typename K, typename V>
static V getMapValueOrDefault(const std::map<K, V> &map, const K &key, const V &defaultValue)
{
    auto it = map.find(key);
    if (it != map.end())
    {
        return it->second;
    }
    return defaultValue;
}

static Eigen::MatrixXd getLocalMassMatrixFrame(
    const std::vector<Node> &nodes,
    const ElementInputs &elementInputs,
    int index)
{
    double A = getMapValueOrDefault(elementInputs.areas, index, 0.0);
    double Iz = getMapValueOrDefault(elementInputs.momentsOfInertiaZ, index, 0.0);
    double Iy = getMapValueOrDefault(elementInputs.momentsOfInertiaY, index, 0.0);
    double rho = getMapValueOrDefault(elementInputs.densities, index, 0.0);

    Eigen::Vector3d node0(nodes[0][0], nodes[0][1], nodes[0][2]);
    Eigen::Vector3d node1(nodes[1][0], nodes[1][1], nodes[1][2]);
    double L = (node1 - node0).norm();

    if (L < 1e-12 || std::abs(rho) < 1e-30 || std::abs(A) < 1e-30)
    {
        return Eigen::MatrixXd::Zero(12, 12);
    }

    double Ip = Iy + Iz; // polar moment of inertia
    double rIp_A = Ip / A; // Ip/A ratio
    double L2 = L * L;
    double m = rho * A; // mass per unit length
    double factor = m * L / 420.0;

    // Consistent mass matrix for 3D frame element (Eq 6.20)
    // DOF order: ux1, uy1, uz1, rx1, ry1, rz1, ux2, uy2, uz2, rx2, ry2, rz2
    Eigen::MatrixXd mLocal = Eigen::MatrixXd::Zero(12, 12);

    // Row 0 (ux1): axial
    mLocal(0, 0) = 140;
    mLocal(0, 6) = 70;

    // Row 1 (uy1): transverse y
    mLocal(1, 1) = 156;
    mLocal(1, 5) = 22 * L;
    mLocal(1, 7) = 54;
    mLocal(1, 11) = -13 * L;

    // Row 2 (uz1): transverse z
    mLocal(2, 2) = 156;
    mLocal(2, 4) = -22 * L;
    mLocal(2, 8) = 54;
    mLocal(2, 10) = 13 * L;

    // Row 3 (rx1): torsion
    mLocal(3, 3) = 140 * rIp_A;
    mLocal(3, 9) = 70 * rIp_A;

    // Row 4 (ry1): bending about y
    mLocal(4, 2) = -22 * L;
    mLocal(4, 4) = 4 * L2;
    mLocal(4, 8) = -13 * L;
    mLocal(4, 10) = -3 * L2;

    // Row 5 (rz1): bending about z
    mLocal(5, 1) = 22 * L;
    mLocal(5, 5) = 4 * L2;
    mLocal(5, 7) = 13 * L;
    mLocal(5, 11) = -3 * L2;

    // Row 6 (ux2): axial
    mLocal(6, 0) = 70;
    mLocal(6, 6) = 140;

    // Row 7 (uy2): transverse y
    mLocal(7, 1) = 54;
    mLocal(7, 5) = 13 * L;
    mLocal(7, 7) = 156;
    mLocal(7, 11) = -22 * L;

    // Row 8 (uz2): transverse z
    mLocal(8, 2) = 54;
    mLocal(8, 4) = -13 * L;
    mLocal(8, 8) = 156;
    mLocal(8, 10) = 22 * L;

    // Row 9 (rx2): torsion
    mLocal(9, 3) = 70 * rIp_A;
    mLocal(9, 9) = 140 * rIp_A;

    // Row 10 (ry2): bending about y
    mLocal(10, 2) = 13 * L;
    mLocal(10, 4) = -3 * L2;
    mLocal(10, 8) = 22 * L;
    mLocal(10, 10) = 4 * L2;

    // Row 11 (rz2): bending about z
    mLocal(11, 1) = -13 * L;
    mLocal(11, 5) = -3 * L2;
    mLocal(11, 7) = -22 * L;
    mLocal(11, 11) = 4 * L2;

    mLocal *= factor;

    return mLocal;
}

// Lumped mass matrix for 3-node triangle shell (CST)
// DOFs per node: u, v, w, θx, θy, θz → 18×18
static Eigen::MatrixXd getLocalMassMatrixShellTri(
    const std::vector<Node> &nodes,
    const ElementInputs &elementInputs,
    int index)
{
    double rho = getMapValueOrDefault(elementInputs.densities, index, 0.0);
    double t = getMapValueOrDefault(elementInputs.thicknesses, index, 0.0);

    if (std::abs(rho) < 1e-30 || std::abs(t) < 1e-30) {
        return Eigen::MatrixXd::Zero(18, 18);
    }

    // Triangle area
    Eigen::Vector3d n0(nodes[0][0], nodes[0][1], nodes[0][2]);
    Eigen::Vector3d n1(nodes[1][0], nodes[1][1], nodes[1][2]);
    Eigen::Vector3d n2(nodes[2][0], nodes[2][1], nodes[2][2]);
    double area = 0.5 * ((n1 - n0).cross(n2 - n0)).norm();

    if (area < 1e-15) return Eigen::MatrixXd::Zero(18, 18);

    // Lumped mass: total mass / 3 per node
    double totalMass = rho * t * area;
    double mNode = totalMass / 3.0;

    // Rotational inertia (small value for drilling DOFs)
    double rotInertia = mNode * t * t / 12.0;

    Eigen::MatrixXd M = Eigen::MatrixXd::Zero(18, 18);
    for (int i = 0; i < 3; i++) {
        M(i*6 + 0, i*6 + 0) = mNode; // u
        M(i*6 + 1, i*6 + 1) = mNode; // v
        M(i*6 + 2, i*6 + 2) = mNode; // w
        M(i*6 + 3, i*6 + 3) = rotInertia; // θx
        M(i*6 + 4, i*6 + 4) = rotInertia; // θy
        M(i*6 + 5, i*6 + 5) = rotInertia; // θz (drilling)
    }

    return M;
}

// Lumped mass matrix for 4-node Q4 shell element
// DOFs per node: u, v, w, θx, θy, θz → 24×24
static Eigen::MatrixXd getLocalMassMatrixShellQ4(
    const std::vector<Node> &nodes,
    const ElementInputs &elementInputs,
    int index)
{
    double rho = getMapValueOrDefault(elementInputs.densities, index, 0.0);
    double t = getMapValueOrDefault(elementInputs.thicknesses, index, 0.0);

    if (std::abs(rho) < 1e-30 || std::abs(t) < 1e-30) {
        return Eigen::MatrixXd::Zero(24, 24);
    }

    // Q4 area: split into 2 triangles (0-1-2) and (0-2-3)
    Eigen::Vector3d n0(nodes[0][0], nodes[0][1], nodes[0][2]);
    Eigen::Vector3d n1(nodes[1][0], nodes[1][1], nodes[1][2]);
    Eigen::Vector3d n2(nodes[2][0], nodes[2][1], nodes[2][2]);
    Eigen::Vector3d n3(nodes[3][0], nodes[3][1], nodes[3][2]);

    double area1 = 0.5 * ((n1 - n0).cross(n2 - n0)).norm();
    double area2 = 0.5 * ((n2 - n0).cross(n3 - n0)).norm();
    double area = area1 + area2;

    if (area < 1e-15) return Eigen::MatrixXd::Zero(24, 24);

    // Lumped mass: total mass / 4 per node
    double totalMass = rho * t * area;
    double mNode = totalMass / 4.0;

    // Rotational inertia
    double rotInertia = mNode * t * t / 12.0;

    Eigen::MatrixXd M = Eigen::MatrixXd::Zero(24, 24);
    for (int i = 0; i < 4; i++) {
        M(i*6 + 0, i*6 + 0) = mNode; // u
        M(i*6 + 1, i*6 + 1) = mNode; // v
        M(i*6 + 2, i*6 + 2) = mNode; // w
        M(i*6 + 3, i*6 + 3) = rotInertia; // θx
        M(i*6 + 4, i*6 + 4) = rotInertia; // θy
        M(i*6 + 5, i*6 + 5) = rotInertia; // θz
    }

    return M;
}

Eigen::MatrixXd getLocalMassMatrix(
    const std::vector<Node> &elementNodes,
    const ElementInputs &elementInputs,
    int elementIndex)
{
    if (elementNodes.size() == 2)
    {
        return getLocalMassMatrixFrame(elementNodes, elementInputs, elementIndex);
    }
    if (elementNodes.size() == 3)
    {
        return getLocalMassMatrixShellTri(elementNodes, elementInputs, elementIndex);
    }
    if (elementNodes.size() == 4)
    {
        return getLocalMassMatrixShellQ4(elementNodes, elementInputs, elementIndex);
    }

    return Eigen::MatrixXd::Zero(0, 0);
}
