#pragma once

#include <vector>
#include <map>
#include <string>
#include <Eigen/Core>
#include <Eigen/Dense>
#include <Eigen/Sparse>

// Define basic types similar to data-model.ts
using Node = std::vector<double>;          // [x, y, z]
using Element = std::vector<unsigned int>; // Node indices

struct ElementInputs
{
    std::map<int, double> elasticities;
    std::map<int, double> elasticitiesOrthogonal;
    std::map<int, double> shearModuli;
    std::map<int, double> areas;
    std::map<int, double> momentsOfInertiaZ;
    std::map<int, double> momentsOfInertiaY;
    std::map<int, double> torsionalConstants;
    std::map<int, double> thicknesses;
    std::map<int, double> poissonsRatios;
    std::map<int, double> densities; // mass density per element (rho)
    std::map<int, double> polarMomentsOfInertia; // I0 (polar moment of inertia, for Paz formulation)
    std::map<int, double> shearAreasY; // As_y for Timoshenko beams
    std::map<int, double> shearAreasZ; // As_z for Timoshenko beams
    std::map<int, std::vector<double>> rigidOffsets; // [factorI, factorJ] rigid zone factors
    // Releases via static condensation. Two formats:
    //  6 flags: [TI,M2I,M3I, TJ,M2J,M3J]  (rotational only, legacy)
    // 12 flags: [FxI,FyI,FzI,TI,M2I,M3I, FxJ,FyJ,FzJ,TJ,M2J,M3J] (all DOFs)
    std::map<int, std::vector<bool>> momentReleases;
    // Partial fixity springs (semi-rigid connections)
    // 12 values: [kFxI,kFyI,kFzI,kTI,kM2I,kM3I, kFxJ,kFyJ,kFzJ,kTJ,kM2J,kM3J]
    std::map<int, std::vector<double>> partialFixitySprings;
    // Property Modifiers (estilo ETABS Assign → Area → Property/Stiffness Modifiers).
    // Multiplican la rigidez de membrana y de flexión del shell. Default = 1.0.
    //   Membrane modifier = 0   → elemento se comporta como Plate puro
    //   Bending modifier  = 0   → elemento se comporta como Membrane puro (CSI Manual §10.7)
    // Esto permite simular fielmente los 4 tipos de área de ETABS (Shell/Membrane/Plate/Layered)
    // sin crear elementos distintos.
    std::map<int, double> membraneModifiers;
    std::map<int, double> bendingModifiers;
};

struct NodeInputs
{
    std::map<int, std::vector<bool>> supports; // Map<node_index, [tx, ty, tz, rx, ry, rz]>
    std::map<int, std::vector<double>> loads;  // Map<node_index, [fx, fy, fz, mx, my, mz]>
};

struct DeformOutputs
{
    std::map<int, std::vector<double>> deformations; // Map<node_index, [dx, dy, dz, rx, ry, rz]>
    std::map<int, std::vector<double>> reactions;    // Map<node_index, [fx, fy, fz, mx, my, mz]>
};

struct ModalOutputs
{
    std::vector<double> frequencies;                 // natural frequencies [Hz]
    std::vector<std::vector<double>> modeShapes;     // mode shapes [num_modes][total_dof]
    std::vector<std::vector<double>> massParticipation; // [num_modes][6] ratios (ux,uy,uz,rx,ry,rz)
};

// Shared FEA helpers (feHelpers.cpp)
std::map<int, double> parseMapFromFlat(int *keys, double *values, int count);
std::map<int, std::vector<double>> parseMapVecFromFlat(int *keys, double *values, int count, int vecSize);
std::map<int, std::vector<bool>> parseMapBoolVecFromFlat(int *keys, bool *values, int count, int vecSize);
Eigen::VectorXd getForces(const NodeInputs &nodeInputs, int dof);
std::vector<int> getFreeIndices(const NodeInputs &nodeInputs, int dof);
std::vector<int> getZerosIndices(const Eigen::SparseMatrix<double> &matrix);
Eigen::SparseMatrix<double> getReducedMatrix(
    const Eigen::SparseMatrix<double> &matrix,
    const std::vector<int> &reducedIndices);
Eigen::VectorXd getReducedVector(
    const Eigen::VectorXd &vector,
    const std::vector<int> &reducedIndices);

// Utils
Eigen::MatrixXd getLocalStiffnessMatrix(
    const std::vector<Node> &elementNodes,
    const ElementInputs &elementInputs,
    int elementIndex);

Eigen::MatrixXd getTransformationMatrix(
    const std::vector<Node> &elementNodes);

Eigen::SparseMatrix<double> getGlobalStiffnessMatrix(
    const std::vector<Node> &nodes,
    const std::vector<unsigned int> &element_indices, // Flat list of indices
    const std::vector<unsigned int> &elementSizes,    // Size of each element
    const ElementInputs &elementInputs,
    int dof);

Eigen::MatrixXd getLocalMassMatrix(
    const std::vector<Node> &elementNodes,
    const ElementInputs &elementInputs,
    int elementIndex);

Eigen::SparseMatrix<double> getGlobalMassMatrix(
    const std::vector<Node> &nodes,
    const std::vector<unsigned int> &element_indices,
    const std::vector<unsigned int> &elementSizes,
    const ElementInputs &elementInputs,
    int dof);

// Paz formulation (uses explicit I0 for torsional mass if provided)
Eigen::MatrixXd getLocalMassMatrixPaz(
    const std::vector<Node> &elementNodes,
    const ElementInputs &elementInputs,
    int elementIndex);

Eigen::SparseMatrix<double> getGlobalMassMatrixPaz(
    const std::vector<Node> &nodes,
    const std::vector<unsigned int> &element_indices,
    const std::vector<unsigned int> &elementSizes,
    const ElementInputs &elementInputs,
    int dof);