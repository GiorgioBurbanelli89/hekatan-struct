#include "data-model.h"
#include <vector>
#include <map>
#include <algorithm>
#include <cmath>
#include <Eigen/Dense>
#include <Eigen/Sparse>
#include <Eigen/Eigenvalues>
#include <iostream>

#ifndef M_PI
#define M_PI 3.14159265358979323846
#endif

extern "C"
{
    void modal(
        // Geometry
        double *nodes_flat_ptr, int num_nodes,
        unsigned int *element_indices_ptr, int num_element_indices,
        unsigned int *element_sizes_ptr, int num_elements,

        // Node Inputs (supports only — no loads needed for modal)
        int *support_keys_ptr, bool *support_values_ptr, int num_supports,

        // Element Inputs (material & section properties)
        int *elasticity_keys_ptr, double *elasticity_values_ptr, int num_elasticities,
        int *area_keys_ptr, double *area_values_ptr, int num_areas,
        int *moi_z_keys_ptr, double *moi_z_values_ptr, int num_moi_z,
        int *moi_y_keys_ptr, double *moi_y_values_ptr, int num_moi_y,
        int *shear_mod_keys_ptr, double *shear_mod_values_ptr, int num_shear_mod,
        int *torsion_keys_ptr, double *torsion_values_ptr, int num_torsion,
        int *density_keys_ptr, double *density_values_ptr, int num_densities,
        int *thickness_keys_ptr, double *thickness_values_ptr, int num_thicknesses,
        int *poisson_keys_ptr, double *poisson_values_ptr, int num_poissons,
        int *memmod_keys_ptr, double *memmod_values_ptr, int num_memmods,
        int *bendmod_keys_ptr, double *bendmod_values_ptr, int num_bendmods,

        // Control
        int num_modes, // number of modes to return (0 = all)

        // Outputs
        double **frequencies_ptr_out, int *num_frequencies_out,
        double **mode_shapes_ptr_out, int *mode_shapes_rows_out, int *mode_shapes_cols_out,
        double **mass_participation_ptr_out, int *mass_participation_rows_out, int *mass_participation_cols_out)
    {
        // Initialize outputs to null
        *frequencies_ptr_out = nullptr;
        *num_frequencies_out = 0;
        *mode_shapes_ptr_out = nullptr;
        *mode_shapes_rows_out = 0;
        *mode_shapes_cols_out = 0;
        *mass_participation_ptr_out = nullptr;
        *mass_participation_rows_out = 0;
        *mass_participation_cols_out = 0;

        // --- 1. Parse Inputs ---
        std::vector<Node> nodes(num_nodes, Node(3));
        for (int i = 0; i < num_nodes; ++i)
        {
            nodes[i][0] = nodes_flat_ptr[i * 3 + 0];
            nodes[i][1] = nodes_flat_ptr[i * 3 + 1];
            nodes[i][2] = nodes_flat_ptr[i * 3 + 2];
        }

        std::vector<unsigned int> element_indices(element_indices_ptr, element_indices_ptr + num_element_indices);
        std::vector<unsigned int> element_sizes(element_sizes_ptr, element_sizes_ptr + num_elements);

        NodeInputs nodeInputs;
        nodeInputs.supports = parseMapBoolVecFromFlat(support_keys_ptr, support_values_ptr, num_supports, 6);

        ElementInputs elementInputs;
        elementInputs.elasticities = parseMapFromFlat(elasticity_keys_ptr, elasticity_values_ptr, num_elasticities);
        elementInputs.areas = parseMapFromFlat(area_keys_ptr, area_values_ptr, num_areas);
        elementInputs.momentsOfInertiaZ = parseMapFromFlat(moi_z_keys_ptr, moi_z_values_ptr, num_moi_z);
        elementInputs.momentsOfInertiaY = parseMapFromFlat(moi_y_keys_ptr, moi_y_values_ptr, num_moi_y);
        elementInputs.shearModuli = parseMapFromFlat(shear_mod_keys_ptr, shear_mod_values_ptr, num_shear_mod);
        elementInputs.torsionalConstants = parseMapFromFlat(torsion_keys_ptr, torsion_values_ptr, num_torsion);
        elementInputs.densities = parseMapFromFlat(density_keys_ptr, density_values_ptr, num_densities);
        elementInputs.thicknesses = parseMapFromFlat(thickness_keys_ptr, thickness_values_ptr, num_thicknesses);
        elementInputs.poissonsRatios = parseMapFromFlat(poisson_keys_ptr, poisson_values_ptr, num_poissons);
        elementInputs.membraneModifiers = parseMapFromFlat(memmod_keys_ptr, memmod_values_ptr, num_memmods);
        elementInputs.bendingModifiers = parseMapFromFlat(bendmod_keys_ptr, bendmod_values_ptr, num_bendmods);

        // --- 2. Assemble K and M ---
        int dof = num_nodes * 6;

        Eigen::SparseMatrix<double> K_global = getGlobalStiffnessMatrix(
            nodes, element_indices, element_sizes, elementInputs, dof);

        Eigen::SparseMatrix<double> M_global = getGlobalMassMatrix(
            nodes, element_indices, element_sizes, elementInputs, dof);

        // --- 3. Apply boundary conditions ---
        std::vector<int> freeIndices = getFreeIndices(nodeInputs, dof);
        std::vector<int> zeroIndicesK = getZerosIndices(K_global);
        std::vector<int> zeroIndicesM = getZerosIndices(M_global);

        std::vector<int> allZeroIndices;
        allZeroIndices.insert(allZeroIndices.end(), zeroIndicesK.begin(), zeroIndicesK.end());
        allZeroIndices.insert(allZeroIndices.end(), zeroIndicesM.begin(), zeroIndicesM.end());
        std::sort(allZeroIndices.begin(), allZeroIndices.end());
        allZeroIndices.erase(std::unique(allZeroIndices.begin(), allZeroIndices.end()), allZeroIndices.end());

        std::vector<int> reducedIndices;
        for (int idx : freeIndices)
        {
            if (!std::binary_search(allZeroIndices.begin(), allZeroIndices.end(), idx))
            {
                reducedIndices.push_back(idx);
            }
        }

        int reducedSize = reducedIndices.size();
        if (reducedSize == 0)
            return;

        Eigen::SparseMatrix<double> K_reduced = getReducedMatrix(K_global, reducedIndices);
        Eigen::SparseMatrix<double> M_reduced = getReducedMatrix(M_global, reducedIndices);

        // --- 4. Convert to dense for eigenvalue solver ---
        Eigen::MatrixXd K_dense = Eigen::MatrixXd(K_reduced);
        Eigen::MatrixXd M_dense = Eigen::MatrixXd(M_reduced);

        // --- 5. Solve generalized eigenvalue problem: K*phi = omega^2 * M*phi ---
        Eigen::GeneralizedSelfAdjointEigenSolver<Eigen::MatrixXd> solver(K_dense, M_dense);

        if (solver.info() != Eigen::Success)
        {
            std::cerr << "Error: Generalized eigenvalue solver failed." << std::endl;
            return;
        }

        Eigen::VectorXd eigenvalues = solver.eigenvalues();
        Eigen::MatrixXd eigenvectors = solver.eigenvectors();

        // --- 6. Extract valid modes ---
        int totalModes = reducedSize;
        if (num_modes > 0 && num_modes < reducedSize)
            totalModes = num_modes;

        std::vector<double> freqVec;
        std::vector<int> validModeIndices;
        for (int i = 0; i < reducedSize && (int)freqVec.size() < totalModes; ++i)
        {
            double omega2 = eigenvalues(i);
            if (omega2 > 1e-10)
            {
                double freq = std::sqrt(omega2) / (2.0 * M_PI);
                freqVec.push_back(freq);
                validModeIndices.push_back(i);
            }
        }

        int numValidModes = freqVec.size();
        if (numValidModes == 0)
            return;

        // --- 7. Compute mass participation factors ---
        // For Ux,Uy,Uz: standard unit influence vectors r_j[k] = 1 for DOF j
        // For Rz (torsional): rigid-body rotation about Z through center of mass
        //   r_rz[node*6+0] = -(y_i - y_cm)  (tangential Ux)
        //   r_rz[node*6+1] = +(x_i - x_cm)  (tangential Uy)
        //   r_rz[node*6+5] = 1.0             (rotation Rz)

        // Compute center of mass from diagonal of M (using Ux DOF mass)
        double sum_m = 0.0, sum_mx = 0.0, sum_my = 0.0;
        for (int i = 0; i < num_nodes; ++i)
        {
            int uxDof = i * 6;  // Ux DOF for node i
            double mi = M_global.coeff(uxDof, uxDof);
            sum_m  += mi;
            sum_mx += mi * nodes[i][0];
            sum_my += mi * nodes[i][1];
        }
        double x_cm = (sum_m > 1e-30) ? sum_mx / sum_m : 0.0;
        double y_cm = (sum_m > 1e-30) ? sum_my / sum_m : 0.0;

        // Build 6 influence vectors (full DOF size, then reduce)
        std::vector<Eigen::VectorXd> r_full(6, Eigen::VectorXd::Zero(dof));
        for (int i = 0; i < num_nodes; ++i)
        {
            r_full[0](i * 6 + 0) = 1.0;  // Ux
            r_full[1](i * 6 + 1) = 1.0;  // Uy
            r_full[2](i * 6 + 2) = 1.0;  // Uz
            r_full[3](i * 6 + 3) = 1.0;  // Rx
            r_full[4](i * 6 + 4) = 1.0;  // Ry
            // Rz: rigid-body torsion about center of mass
            r_full[5](i * 6 + 0) = -(nodes[i][1] - y_cm);  // Ux = -(y - y_cm)
            r_full[5](i * 6 + 1) = +(nodes[i][0] - x_cm);  // Uy = +(x - x_cm)
            r_full[5](i * 6 + 5) = 1.0;                     // Rz = 1
        }

        // Reduce to free DOFs
        std::vector<Eigen::VectorXd> r_reduced(6, Eigen::VectorXd::Zero(reducedSize));
        for (int k = 0; k < reducedSize; ++k)
        {
            int globalDof = reducedIndices[k];
            for (int j = 0; j < 6; ++j)
                r_reduced[j](k) = r_full[j](globalDof);
        }

        // Compute total mass in each direction: M_total_j = r_j^T * M_r * r_j
        std::vector<double> M_total(6, 0.0);
        for (int j = 0; j < 6; ++j)
        {
            Eigen::VectorXd Mr = M_dense * r_reduced[j];
            M_total[j] = r_reduced[j].dot(Mr);
        }

        // Compute participation for each valid mode
        // Output: numValidModes rows × 6 cols (ux, uy, uz, rx, ry, rz)
        std::vector<std::vector<double>> participation(numValidModes, std::vector<double>(6, 0.0));

        for (int m = 0; m < numValidModes; ++m)
        {
            int modeIdx = validModeIndices[m];
            Eigen::VectorXd phi = eigenvectors.col(modeIdx);

            // M_gen = phi^T * M * phi (generalized mass)
            double M_gen = phi.dot(M_dense * phi);

            for (int j = 0; j < 6; ++j)
            {
                if (M_total[j] < 1e-30 || M_gen < 1e-30)
                    continue;

                // Gamma = phi^T * M * r_j
                double Gamma = phi.dot(M_dense * r_reduced[j]);

                // Effective modal mass
                double M_eff = (Gamma * Gamma) / M_gen;

                // Participation ratio (fraction of total mass)
                participation[m][j] = M_eff / M_total[j];
            }
        }

        // --- 8. Allocate and fill output arrays ---

        // Frequencies
        *num_frequencies_out = numValidModes;
        *frequencies_ptr_out = (double *)malloc(numValidModes * sizeof(double));
        for (int i = 0; i < numValidModes; ++i)
            (*frequencies_ptr_out)[i] = freqVec[i];

        // Mode shapes (numValidModes rows × dof cols)
        *mode_shapes_rows_out = numValidModes;
        *mode_shapes_cols_out = dof;
        *mode_shapes_ptr_out = (double *)malloc(numValidModes * dof * sizeof(double));

        for (int m = 0; m < numValidModes; ++m)
        {
            Eigen::VectorXd fullMode = Eigen::VectorXd::Zero(dof);
            int modeIdx = validModeIndices[m];

            for (int j = 0; j < reducedSize; ++j)
                fullMode(reducedIndices[j]) = eigenvectors(j, modeIdx);

            // Normalize mode shape (max displacement = 1.0)
            double maxVal = fullMode.cwiseAbs().maxCoeff();
            if (maxVal > 1e-15)
                fullMode /= maxVal;

            for (int d = 0; d < dof; ++d)
                (*mode_shapes_ptr_out)[m * dof + d] = fullMode(d);
        }

        // Mass participation (numValidModes rows × 6 cols)
        *mass_participation_rows_out = numValidModes;
        *mass_participation_cols_out = 6;
        *mass_participation_ptr_out = (double *)malloc(numValidModes * 6 * sizeof(double));

        for (int m = 0; m < numValidModes; ++m)
        {
            for (int j = 0; j < 6; ++j)
            {
                (*mass_participation_ptr_out)[m * 6 + j] = participation[m][j];
            }
        }
    }
}
