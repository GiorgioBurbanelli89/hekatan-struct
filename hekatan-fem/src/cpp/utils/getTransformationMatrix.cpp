#include "../data-model.h"
#include <vector>
#include <cmath>
#include <Eigen/Dense>
#include <iostream>
#include <iomanip>
#include <stdexcept>

// Declarations
Eigen::MatrixXd getTransformationMatrixFrame(const Node &n0, const Node &n1);
Eigen::MatrixXd getTransformationMatrixShell(const Node &n0, const Node &n1, const Node &n2);

// Shell Q4 transformation — defined in shellQ4.cpp
Eigen::MatrixXd getTransformationMatrixShellQ4(
    const Node &n0, const Node &n1, const Node &n2, const Node &n3);

// Forward: check if 4-node element is shell Q4 (has thickness)
// We need elementInputs and index to decide, but the transformation dispatch
// doesn't have them. So for 4-node elements, we check if nodes are coplanar
// and non-coincident to decide shell vs interface.
// Simple heuristic: interface elements have coincident node pairs (0≈3, 1≈2).
static bool isShellQ4(const std::vector<Node> &nodes)
{
    // Interface: node 0 ≈ node 3, node 1 ≈ node 2 (zero-thickness)
    double d03 = std::sqrt(
        std::pow(nodes[0][0]-nodes[3][0], 2) +
        std::pow(nodes[0][1]-nodes[3][1], 2) +
        std::pow(nodes[0][2]-nodes[3][2], 2));
    double d12 = std::sqrt(
        std::pow(nodes[1][0]-nodes[2][0], 2) +
        std::pow(nodes[1][1]-nodes[2][1], 2) +
        std::pow(nodes[1][2]-nodes[2][2], 2));
    // If both pairs are nearly coincident → interface (zero-thickness)
    if (d03 < 1e-6 && d12 < 1e-6) return false;
    return true; // Otherwise → shell Q4
}

// Main dispatch function based on number of nodes
Eigen::MatrixXd getTransformationMatrix(const std::vector<Node> &nodes)
{
    if (nodes.size() == 2)
    {
        return getTransformationMatrixFrame(nodes[0], nodes[1]);
    }

    if (nodes.size() == 3)
    {
        return getTransformationMatrixShell(nodes[0], nodes[1], nodes[2]);
    }

    if (nodes.size() == 4)
    {
        if (isShellQ4(nodes))
        {
            return getTransformationMatrixShellQ4(nodes[0], nodes[1], nodes[2], nodes[3]);
        }
        // Interface element: K is computed directly in global coordinates
        return Eigen::MatrixXd::Identity(24, 24);
    }

    throw std::runtime_error("Unsupported element type in getTransformationMatrix (must have 2, 3, or 4 nodes).");
}

// Transformation matrix for 2-node frame/truss elements
Eigen::MatrixXd getTransformationMatrixFrame(const Node &n0, const Node &n1)
{
    Eigen::Vector3d vector(n1[0] - n0[0], n1[1] - n0[1], n1[2] - n0[2]);
    double length = vector.norm();
    if (length < 1e-12)
    {
        std::cerr << "Warning: Zero length element detected in getTransformationMatrixFrame. Returning 12x12 zero matrix." << std::endl;
        return Eigen::MatrixXd::Zero(12, 12);
    }

    double l = vector.x() / length;
    double m = vector.y() / length;
    double n = vector.z() / length;
    double D = std::sqrt(l * l + m * m);

    Eigen::Matrix3d lambda; // Direction cosine matrix

    if (std::abs(n - 1.0) < 1e-9) // Corresponds to n === 1 in TS
    {
        lambda << 0, 0, 1,
            0, 1, 0,
            -1, 0, 0;
    }
    else if (std::abs(n + 1.0) < 1e-9) // Corresponds to n === -1 in TS
    {
        lambda << 0, 0, -1,
            0, 1, 0,
            1, 0, 0;
    }
    else
    { // General case
        lambda << l, m, n,
            -m / D, l / D, 0,
            (-l * n) / D, (-m * n) / D, D;
    }

    // Construct the 12x12 transformation matrix T
    Eigen::MatrixXd T = Eigen::MatrixXd::Zero(12, 12);
    for (int i = 0; i < 4; ++i)
    {
        T.block<3, 3>(i * 3, i * 3) = lambda;
    }

    return T;
}

// Transformation matrix for 3-node shell elements
Eigen::MatrixXd getTransformationMatrixShell(
    const Node &n0_node,
    const Node &n1_node,
    const Node &n2_node)
{
    const int nodesCount = 3;
    const int dimensions = 3;
    const int dof = 6;
    const int totalDof = nodesCount * dof;

    Eigen::MatrixXd localCoordinates = Eigen::MatrixXd::Zero(dimensions, nodesCount);
    localCoordinates.col(0) << n0_node[0], n0_node[1], n0_node[2];
    localCoordinates.col(1) << n1_node[0], n1_node[1], n1_node[2];
    localCoordinates.col(2) << n2_node[0], n2_node[1], n2_node[2];

    const Eigen::Vector3d dN_dxi_ts(-1.0, 1.0, 0.0);
    const Eigen::Vector3d dN_det_ts(-1.0, 0.0, 1.0);

    Eigen::MatrixXd jacobianMatrix = Eigen::MatrixXd::Zero(dimensions, 2);

    for (int i = 0; i < dimensions; ++i)
    {
        for (int k = 0; k < nodesCount; ++k)
        {
            jacobianMatrix(i, 0) += localCoordinates(i, k) * dN_dxi_ts(k);
            jacobianMatrix(i, 1) += localCoordinates(i, k) * dN_det_ts(k);
        }
    }

    Eigen::Vector3d dX_dxi(jacobianMatrix(0, 0), jacobianMatrix(1, 0), jacobianMatrix(2, 0));
    Eigen::Vector3d dX_det(jacobianMatrix(0, 1), jacobianMatrix(1, 1), jacobianMatrix(2, 1));

    Eigen::Vector3d normalVector = dX_dxi.cross(dX_det);
    double length = normalVector.norm();

    if (length < 1e-12)
    {
        std::cerr << "Warning: Degenerate triangle: nodes are collinear or coincident. Returning zero matrix." << std::endl;
        return Eigen::MatrixXd::Zero(totalDof, totalDof);
    }

    normalVector.normalize();
    Eigen::Vector3d localZ = normalVector;

    Eigen::Matrix3d globalIdentityMatrix = Eigen::Matrix3d::Identity();
    double dotProductWithGlobalX = normalVector.x();
    Eigen::Vector3d localX;

    if (std::abs(dotProductWithGlobalX) > 1.0 - 1e-10)
    {
        double dotProductWithGlobalZ = normalVector.z();
        localX = globalIdentityMatrix.col(2) - dotProductWithGlobalZ * normalVector;
    }
    else
    {
        localX = globalIdentityMatrix.col(0) - dotProductWithGlobalX * normalVector;
    }

    length = localX.norm();
    if (length < 1e-12)
    {
        std::cerr << "Warning: Degenerate local X-axis detected. Returning zero matrix." << std::endl;
        return Eigen::MatrixXd::Zero(totalDof, totalDof);
    }
    localX.normalize();

    Eigen::Vector3d localY = localZ.cross(localX);
    length = localY.norm();
    if (length < 1e-12)
    {
        std::cerr << "Warning: Degenerate local Y-axis detected. Returning zero matrix." << std::endl;
        return Eigen::MatrixXd::Zero(totalDof, totalDof);
    }
    localY.normalize();

    Eigen::Matrix3d transformationMatrixLocal;
    transformationMatrixLocal.row(0) = localX.transpose();
    transformationMatrixLocal.row(1) = localY.transpose();
    transformationMatrixLocal.row(2) = localZ.transpose();

    Eigen::MatrixXd transformationMatrixGlobal = Eigen::MatrixXd::Zero(totalDof, totalDof);

    for (int nodeIdx = 0; nodeIdx < nodesCount; ++nodeIdx)
    {
        int translationalDofOffset = nodeIdx * dof;
        int rotationalDofOffset = translationalDofOffset + dimensions;

        for (int i = 0; i < dimensions; ++i)
        {
            for (int j = 0; j < dimensions; ++j)
            {
                transformationMatrixGlobal(translationalDofOffset + i, translationalDofOffset + j) = transformationMatrixLocal(i, j);
                transformationMatrixGlobal(rotationalDofOffset + i, rotationalDofOffset + j) = transformationMatrixLocal(i, j);
            }
        }
    }

    return transformationMatrixGlobal;
}