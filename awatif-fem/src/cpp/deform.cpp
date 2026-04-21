#include "data-model.h"
#include <vector>
#include <map>
#include <algorithm>
#include <Eigen/Dense>
#include <Eigen/Sparse>
#include <iostream>
#include <stdexcept>

extern "C"
{
    void deform(
        // --- Inputs from TypeScript (WASM Memory Pointers) ---
        // Geometry
        double *nodes_flat_ptr, int num_nodes,                      // nodes.flat() -> [x1, y1, z1, x2, y2, z2, ...]
        unsigned int *element_indices_ptr, int num_element_indices, // elements.flat() -> [n1_e1, n2_e1, n1_e2, n2_e2, n3_e2, ...]
        unsigned int *element_sizes_ptr, int num_elements,          // [size_e1, size_e2, ...] -> e.g., [2, 3]

        // Node Inputs (Boundary Conditions & Loads)
        int *support_keys_ptr, bool *support_values_ptr, int num_supports, // Map<nodeIdx, [bool, bool, bool, bool, bool, bool]>
        int *load_keys_ptr, double *load_values_ptr, int num_loads,        // Map<nodeIdx, [fx, fy, fz, mx, my, mz]>

        // Element Inputs (Material & Section Properties)
        // Note: Pass pointers/sizes for all potential properties used by getLocalStiffnessMatrix
        int *elasticity_keys_ptr, double *elasticity_values_ptr, int num_elasticities,                                   // Map<elemIdx, E>
        int *area_keys_ptr, double *area_values_ptr, int num_areas,                                                      // Map<elemIdx, A>
        int *moi_z_keys_ptr, double *moi_z_values_ptr, int num_moi_z,                                                    // Map<elemIdx, Iz>
        int *moi_y_keys_ptr, double *moi_y_values_ptr, int num_moi_y,                                                    // Map<elemIdx, Iy>
        int *shear_mod_keys_ptr, double *shear_mod_values_ptr, int num_shear_mod,                                        // Map<elemIdx, G>
        int *torsion_keys_ptr, double *torsion_values_ptr, int num_torsion,                                              // Map<elemIdx, J>
        int *thickness_keys_ptr, double *thickness_values_ptr, int num_thickness,                                        // Map<elemIdx, t>
        int *poisson_keys_ptr, double *poisson_values_ptr, int num_poisson,                                              // Map<elemIdx, nu>
        int *elasticitiesOrthogonal_keys_ptr, double *elasticitiesOrthogonal_values_ptr, int num_elasticitiesOrthogonal, // Map<elemIdx, E_ortho>

        // Nodal springs (Winkler foundation, partial restraints)
        // Flat layout: [node0, dof0, k0, node1, dof1, k1, ...]  length = 3 * num_springs
        double *springs_flat_ptr, int num_springs,

        // --- Output Pointers (to be allocated by C++ and filled) ---
        // These are pointers *to* pointers. C++ allocates memory using malloc
        // and writes the address of the allocated block into these pointers.
        double **deformations_data_ptr_out, // -> pointer to flat deformation data [nodeIdx, d1..d6, ...]
        int *deformations_size_out,         // -> pointer to total number of doubles in deformations_data_ptr_out
        double **reactions_data_ptr_out,    // -> pointer to flat reaction data [nodeIdx, r1..r6, ...]
        int *reactions_size_out             // -> pointer to total number of doubles in reactions_data_ptr_out
    )
    {
        // --- 1. Parse Inputs from WASM Memory ---
        // Convert flat arrays from WASM memory into C++ data structures.

        std::vector<Node> nodes(num_nodes, Node(3)); // Initialize vector of Nodes (each Node is std::vector<double>)
        for (int i = 0; i < num_nodes; ++i)
        {
            nodes[i][0] = nodes_flat_ptr[i * 3 + 0];
            nodes[i][1] = nodes_flat_ptr[i * 3 + 1];
            nodes[i][2] = nodes_flat_ptr[i * 3 + 2];
        }

        // Copy element indices and sizes directly
        std::vector<unsigned int> element_indices(element_indices_ptr, element_indices_ptr + num_element_indices);
        std::vector<unsigned int> element_sizes(element_sizes_ptr, element_sizes_ptr + num_elements);

        // Parse NodeInputs (supports and loads)
        NodeInputs nodeInputs;
        nodeInputs.supports = parseMapBoolVecFromFlat(support_keys_ptr, support_values_ptr, num_supports, 6);
        nodeInputs.loads = parseMapVecFromFlat(load_keys_ptr, load_values_ptr, num_loads, 6);

        // Parse ElementInputs (material/section properties)
        ElementInputs elementInputs;
        elementInputs.elasticities = parseMapFromFlat(elasticity_keys_ptr, elasticity_values_ptr, num_elasticities);
        elementInputs.areas = parseMapFromFlat(area_keys_ptr, area_values_ptr, num_areas);
        elementInputs.momentsOfInertiaZ = parseMapFromFlat(moi_z_keys_ptr, moi_z_values_ptr, num_moi_z);
        elementInputs.momentsOfInertiaY = parseMapFromFlat(moi_y_keys_ptr, moi_y_values_ptr, num_moi_y);
        elementInputs.shearModuli = parseMapFromFlat(shear_mod_keys_ptr, shear_mod_values_ptr, num_shear_mod);
        elementInputs.torsionalConstants = parseMapFromFlat(torsion_keys_ptr, torsion_values_ptr, num_torsion);
        elementInputs.thicknesses = parseMapFromFlat(thickness_keys_ptr, thickness_values_ptr, num_thickness);
        elementInputs.poissonsRatios = parseMapFromFlat(poisson_keys_ptr, poisson_values_ptr, num_poisson);
        elementInputs.elasticitiesOrthogonal = parseMapFromFlat(elasticitiesOrthogonal_keys_ptr, elasticitiesOrthogonal_values_ptr, num_elasticitiesOrthogonal);

        // --- 2. Core FEA Calculation using Eigen ---
        int dof = num_nodes * 6; // Total degrees of freedom

        Eigen::VectorXd F_global = getForces(nodeInputs, dof);
        Eigen::SparseMatrix<double> K_global = getGlobalStiffnessMatrix(nodes, element_indices, element_sizes, elementInputs, dof);

        // --- Add nodal springs (Winkler foundation) to diagonal of K_global ---
        // Each spring adds +k to K_global(gdof, gdof) where gdof = 6*node + dof
        for (int i = 0; i < num_springs; ++i) {
            int node = static_cast<int>(springs_flat_ptr[3 * i]);
            int d    = static_cast<int>(springs_flat_ptr[3 * i + 1]);
            double k = springs_flat_ptr[3 * i + 2];
            int gdof = 6 * node + d;
            if (gdof >= 0 && gdof < dof) {
                K_global.coeffRef(gdof, gdof) += k;
            }
        }

        std::vector<int> freeIndices = getFreeIndices(nodeInputs, dof);
        std::vector<int> zeroIndices = getZerosIndices(K_global);

        std::vector<int> reducedIndices;
        std::sort(zeroIndices.begin(), zeroIndices.end()); // Ensure zeroIndices is sorted for binary_search
        for (int idx : freeIndices)
        {
            if (!std::binary_search(zeroIndices.begin(), zeroIndices.end(), idx)) // Check if idx is NOT in zeroIndices
            {
                reducedIndices.push_back(idx);
            }
        }

        Eigen::SparseMatrix<double> K_reduced = getReducedMatrix(K_global, reducedIndices);
        Eigen::VectorXd F_reduced = getReducedVector(F_global, reducedIndices);

        // SparseLU: direct solver, more robust than CG for shells and mixed models
        Eigen::SparseLU<Eigen::SparseMatrix<double>> solver;
        solver.compute(K_reduced);

        if (solver.info() != Eigen::Success)
        {
            std::cerr << "Error: Matrix decomposition failed during solve." << std::endl;
            *deformations_data_ptr_out = nullptr;
            *deformations_size_out = 0;
            *reactions_data_ptr_out = nullptr;
            *reactions_size_out = 0;
            return;
        }
        Eigen::VectorXd U_reduced = solver.solve(F_reduced);
        if (solver.info() != Eigen::Success)
        {
            std::cerr << "Error: Matrix solving failed." << std::endl;
            // Handle error
            *deformations_data_ptr_out = nullptr;
            *deformations_size_out = 0;
            *reactions_data_ptr_out = nullptr;
            *reactions_size_out = 0;
            return;
        }

        // Map reduced deformations (U_reduced) back to the full deformation vector (U_global)
        Eigen::VectorXd U_global = Eigen::VectorXd::Zero(dof);
        for (size_t i = 0; i < reducedIndices.size(); ++i)
        {
            U_global(reducedIndices[i]) = U_reduced(i);
        }

        // Calculate the full reaction force vector: R_global = K_global * U_global
        Eigen::VectorXd R_global = K_global * U_global;

        // --- 3. Prepare Output Data Structures ---
        // Collate results into the DeformOutputs structure.
        DeformOutputs outputs;
        for (int i = 0; i < num_nodes; ++i)
        {
            // Extract deformations for the current node
            std::vector<double> node_def(6);
            for (int j = 0; j < 6; ++j)
            {
                node_def[j] = U_global(i * 6 + j);
            }
            outputs.deformations[i] = node_def;

            // Check if the node has any fixed support DOFs
            bool hasSupport = false;
            auto support_it = nodeInputs.supports.find(i);
            if (support_it != nodeInputs.supports.end())
            {
                for (bool fixed : support_it->second)
                {
                    if (fixed)
                    {
                        hasSupport = true;
                        break;
                    }
                }
            }

            // If the node has support, extract reactions
            if (hasSupport)
            {
                std::vector<double> node_react(6);
                for (int j = 0; j < 6; ++j)
                {
                    // Note: R_global = K*U. FEM reactions are often defined as internal forces balancing external loads.
                    // However, to match the JS implementation which returns K*U at supports, we use R_global directly.
                    node_react[j] = R_global(i * 6 + j);
                }
                outputs.reactions[i] = node_react;
            }
        }

        // --- 4. Allocate Memory for Output Arrays in WASM Heap ---
        // Allocate memory using malloc for the flat arrays to be sent back to TypeScript.
        // The size includes space for the node index + 6 DOF values per node.
        *deformations_size_out = outputs.deformations.size() * 7;
        *deformations_data_ptr_out = (double *)malloc(*deformations_size_out * sizeof(double));

        *reactions_size_out = outputs.reactions.size() * 7;
        *reactions_data_ptr_out = (double *)malloc(*reactions_size_out * sizeof(double));

        // Check if allocation was successful
        if (!(*deformations_data_ptr_out) || (outputs.reactions.size() > 0 && !(*reactions_data_ptr_out)))
        {
            std::cerr << "Error: Memory allocation failed for output arrays in deform()." << std::endl;
            // Free any partially allocated memory before returning null pointers
            free(*deformations_data_ptr_out); // free(nullptr) is safe
            free(*reactions_data_ptr_out);
            *deformations_data_ptr_out = nullptr;
            *deformations_size_out = 0;
            *reactions_data_ptr_out = nullptr;
            *reactions_size_out = 0;
            return; // Exit the function
        }

        // --- 5. Copy Output Data to Allocated WASM Memory ---
        // Flatten the output maps into the allocated arrays.

        int def_idx = 0;
        for (const auto &pair : outputs.deformations)
        {
            (*deformations_data_ptr_out)[def_idx++] = static_cast<double>(pair.first); // Node index
            for (double val : pair.second)
            {
                (*deformations_data_ptr_out)[def_idx++] = val; // 6 deformation values
            }
        }

        int react_idx = 0;
        for (const auto &pair : outputs.reactions)
        {
            (*reactions_data_ptr_out)[react_idx++] = static_cast<double>(pair.first); // Node index
            for (double val : pair.second)
            {
                (*reactions_data_ptr_out)[react_idx++] = val; // 6 reaction values
            }
        }
    }
}
