/**
 * getGlobalMassMatrixPaz.cpp — Global mass matrix assembly using Paz formulation
 * Uses getLocalMassMatrixPaz (with explicit I0) instead of getLocalMassMatrix
 */

#include "../data-model.h"
#include <vector>
#include <cmath>
#include <Eigen/Dense>
#include <Eigen/Sparse>

// Declared in this file's companion: getLocalMassMatrixPaz.cpp
Eigen::MatrixXd getLocalMassMatrixPaz(
    const std::vector<Node> &elementNodes,
    const ElementInputs &elementInputs,
    int elementIndex);

Eigen::SparseMatrix<double> getGlobalMassMatrixPaz(
    const std::vector<Node> &nodes,
    const std::vector<unsigned int> &element_indices,
    const std::vector<unsigned int> &elementSizes,
    const ElementInputs &elementInputs,
    int dof)
{
    std::vector<Eigen::Triplet<double>> tripletList;
    tripletList.reserve(elementSizes.size() * 24 * 24);

    int current_element_node_idx = 0;
    for (size_t i = 0; i < elementSizes.size(); ++i)
    {
        unsigned int numElementNodes = elementSizes[i];
        std::vector<Node> elmNodes;
        Element currentElementIndices;
        elmNodes.reserve(numElementNodes);
        currentElementIndices.reserve(numElementNodes);

        for (unsigned int j = 0; j < numElementNodes; ++j)
        {
            unsigned int nodeIndex = element_indices[current_element_node_idx + j];
            elmNodes.push_back(nodes[nodeIndex]);
            currentElementIndices.push_back(nodeIndex);
        }

        // Use Paz local mass matrix (with explicit I0)
        Eigen::MatrixXd mLocal = getLocalMassMatrixPaz(elmNodes, elementInputs, i);
        Eigen::MatrixXd T = getTransformationMatrix(elmNodes);

        // M_global_element = T^T * mLocal * T
        Eigen::MatrixXd mGlobalElement = T.transpose() * mLocal * T;

        for (unsigned int rowNodeIdx = 0; rowNodeIdx < numElementNodes; ++rowNodeIdx)
        {
            for (int rowDof = 0; rowDof < 6; ++rowDof)
            {
                int globalRow = currentElementIndices[rowNodeIdx] * 6 + rowDof;

                for (unsigned int colNodeIdx = 0; colNodeIdx < numElementNodes; ++colNodeIdx)
                {
                    for (int colDof = 0; colDof < 6; ++colDof)
                    {
                        int globalCol = currentElementIndices[colNodeIdx] * 6 + colDof;
                        double value = mGlobalElement(rowNodeIdx * 6 + rowDof, colNodeIdx * 6 + colDof);

                        if (std::abs(value) > 1e-15)
                        {
                            tripletList.emplace_back(globalRow, globalCol, value);
                        }
                    }
                }
            }
        }

        current_element_node_idx += numElementNodes;
    }

    Eigen::SparseMatrix<double> M(dof, dof);
    M.setFromTriplets(tripletList.begin(), tripletList.end());

    return M;
}
