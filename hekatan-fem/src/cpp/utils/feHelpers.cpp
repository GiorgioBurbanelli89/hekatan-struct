#include "../data-model.h"
#include <vector>
#include <map>
#include <cmath>
#include <Eigen/Sparse>

std::map<int, double> parseMapFromFlat(int *keys_ptr, double *values_ptr, int size)
{
    std::map<int, double> map_data;
    for (int i = 0; i < size; ++i)
    {
        map_data[keys_ptr[i]] = values_ptr[i];
    }
    return map_data;
}

std::map<int, std::vector<double>> parseMapVecFromFlat(int *keys_ptr, double *values_ptr, int size, int value_size)
{
    std::map<int, std::vector<double>> map_data;
    for (int i = 0; i < size; ++i)
    {
        std::vector<double> vec_value;
        vec_value.reserve(value_size);
        for (int j = 0; j < value_size; ++j)
        {
            vec_value.push_back(values_ptr[i * value_size + j]);
        }
        map_data[keys_ptr[i]] = vec_value;
    }
    return map_data;
}

std::map<int, std::vector<bool>> parseMapBoolVecFromFlat(int *keys_ptr, bool *values_ptr, int size, int value_size)
{
    std::map<int, std::vector<bool>> map_data;
    for (int i = 0; i < size; ++i)
    {
        std::vector<bool> vec_value;
        vec_value.reserve(value_size);
        for (int j = 0; j < value_size; ++j)
        {
            vec_value.push_back(values_ptr[i * value_size + j]);
        }
        map_data[keys_ptr[i]] = vec_value;
    }
    return map_data;
}

Eigen::VectorXd getForces(
    const NodeInputs &nodeInputs,
    int dof)
{
    Eigen::VectorXd forces = Eigen::VectorXd::Zero(dof);
    for (const auto &pair : nodeInputs.loads)
    {
        int nodeIndex = pair.first;
        const auto &loadVector = pair.second;
        if (loadVector.size() == 6)
        {
            for (int i = 0; i < 6; ++i)
            {
                forces(nodeIndex * 6 + i) = loadVector[i];
            }
        }
    }
    return forces;
}

std::vector<int> getFreeIndices(
    const NodeInputs &nodeInputs,
    int dof)
{
    std::vector<bool> isFixed(dof, false);
    for (const auto &pair : nodeInputs.supports)
    {
        int nodeIndex = pair.first;
        const auto &supportFlags = pair.second;
        if (supportFlags.size() == 6)
        {
            for (int i = 0; i < 6; ++i)
            {
                if (supportFlags[i])
                {
                    isFixed[nodeIndex * 6 + i] = true;
                }
            }
        }
    }

    std::vector<int> freeIndices;
    for (int i = 0; i < dof; ++i)
    {
        if (!isFixed[i])
        {
            freeIndices.push_back(i);
        }
    }
    return freeIndices;
}

std::vector<int> getZerosIndices(
    const Eigen::SparseMatrix<double> &matrix)
{
    std::vector<int> zeroIndices;
    int size = matrix.rows();
    const double tolerance = 1e-12;

    for (int i = 0; i < size; ++i)
    {
        if (std::abs(matrix.coeff(i, i)) < tolerance)
        {
            bool column_is_zero = true;
            for (Eigen::SparseMatrix<double>::InnerIterator it(matrix, i); it; ++it)
            {
                if (std::abs(it.value()) > tolerance)
                {
                    column_is_zero = false;
                    break;
                }
            }
            if (column_is_zero)
            {
                zeroIndices.push_back(i);
            }
        }
    }
    return zeroIndices;
}

Eigen::SparseMatrix<double> getReducedMatrix(
    const Eigen::SparseMatrix<double> &matrix,
    const std::vector<int> &reducedIndices)
{
    int reducedSize = reducedIndices.size();
    Eigen::SparseMatrix<double> reducedMatrix(reducedSize, reducedSize);
    std::vector<Eigen::Triplet<double>> tripletList;
    tripletList.reserve(matrix.nonZeros());

    std::map<int, int> globalToReducedIndex;
    for (int i = 0; i < reducedSize; ++i)
    {
        globalToReducedIndex[reducedIndices[i]] = i;
    }

    for (int k = 0; k < matrix.outerSize(); ++k)
    {
        for (Eigen::SparseMatrix<double>::InnerIterator it(matrix, k); it; ++it)
        {
            auto rowIt = globalToReducedIndex.find(it.row());
            auto colIt = globalToReducedIndex.find(it.col());
            if (rowIt != globalToReducedIndex.end() && colIt != globalToReducedIndex.end())
            {
                tripletList.emplace_back(rowIt->second, colIt->second, it.value());
            }
        }
    }

    reducedMatrix.setFromTriplets(tripletList.begin(), tripletList.end());
    return reducedMatrix;
}

Eigen::VectorXd getReducedVector(
    const Eigen::VectorXd &vector,
    const std::vector<int> &reducedIndices)
{
    int reducedSize = reducedIndices.size();
    Eigen::VectorXd reducedVector(reducedSize);
    for (int i = 0; i < reducedSize; ++i)
    {
        reducedVector(i) = vector(reducedIndices[i]);
    }
    return reducedVector;
}
