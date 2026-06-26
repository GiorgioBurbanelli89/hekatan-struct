#include "data-model.h"
#include <vector>
#include <map>
#include <unordered_map>
#include <algorithm>
#include <cmath>
#include <Eigen/Dense>
#include <Eigen/Sparse>
#include <Eigen/Eigenvalues>
#include <iostream>

#ifndef M_PI
#define M_PI 3.14159265358979323846
#endif

// Extrae el sub-bloque A(rows, cols) de una matriz dispersa (índices globales → locales).
static Eigen::SparseMatrix<double> extractBlock(
    const Eigen::SparseMatrix<double> &A,
    const std::vector<int> &rows, const std::vector<int> &cols)
{
    std::unordered_map<int, int> rmap, cmap;
    for (int i = 0; i < (int)rows.size(); ++i) rmap[rows[i]] = i;
    for (int j = 0; j < (int)cols.size(); ++j) cmap[cols[j]] = j;
    std::vector<Eigen::Triplet<double>> trips;
    for (int k = 0; k < A.outerSize(); ++k)
        for (Eigen::SparseMatrix<double>::InnerIterator it(A, k); it; ++it)
        {
            auto ri = rmap.find(it.row()); if (ri == rmap.end()) continue;
            auto ci = cmap.find(it.col()); if (ci == cmap.end()) continue;
            trips.emplace_back(ri->second, ci->second, it.value());
        }
    Eigen::SparseMatrix<double> B((int)rows.size(), (int)cols.size());
    B.setFromTriplets(trips.begin(), trips.end());
    return B;
}

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
        // Plate formulation per shell: 0=Mindlin (Shell-Thick DSE), 1=Kirchhoff MZC (Shell-Thin DKE)
        int *plateForm_keys_ptr, int *plateForm_values_ptr, int num_plateForm,

        // Control
        int num_modes,   // number of modes to return (0 = all)
        int lateral_mass, // 1 = masa solo lateral Ux,Uy (ETABS INCLUDEVERTICALMASS No)

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
        elementInputs.plateFormulations = parseMapIntFromFlat(plateForm_keys_ptr, plateForm_values_ptr, num_plateForm);

        // --- 2. Assemble K and M ---
        int dof = num_nodes * 6;

        Eigen::SparseMatrix<double> K_global = getGlobalStiffnessMatrix(
            nodes, element_indices, element_sizes, elementInputs, dof);

        Eigen::SparseMatrix<double> M_global = getGlobalMassMatrix(
            nodes, element_indices, element_sizes, elementInputs, dof);

        // --- 2b. Masa solo lateral (ETABS INCLUDEVERTICALMASS "No") ---
        // Conserva SOLO la masa de los GDL Ux,Uy (bloque lateral, incluido el acoplamiento
        // consistente de los frames). La masa de Uz y rotaciones (Rx,Ry,Rz) se elimina y esos
        // GDL reciben una regularización ε para que M siga definida-positiva (sus modos quedan
        // a frecuencia muy alta → fuera de los primeros num_modes). Así NO aparecen modos
        // verticales reales y los modos son laterales/torsionales, como en la tabla de ETABS.
        if (lateral_mass)
        {
            // Lumpeo por suma de filas (como ETABS LUMPATSTORIES): la masa lateral queda
            // DIAGONAL en Ux,Uy (suma de la fila consistente = masa traslacional total del GDL).
            // Uz y rotaciones → SIN masa (se condensan después por Guyan, no necesitan ε).
            Eigen::VectorXd rowsum = Eigen::VectorXd::Zero(dof);
            for (int k = 0; k < M_global.outerSize(); ++k)
                for (Eigen::SparseMatrix<double>::InnerIterator it(M_global, k); it; ++it)
                    rowsum(it.row()) += it.value();
            std::vector<Eigen::Triplet<double>> trips;
            for (int i = 0; i < num_nodes; ++i) {
                trips.emplace_back(i*6+0, i*6+0, std::max(rowsum(i*6+0), 0.0));  // Ux lumpeada
                trips.emplace_back(i*6+1, i*6+1, std::max(rowsum(i*6+1), 0.0));  // Uy lumpeada
                // Uz,Rx,Ry,Rz → masa 0 (condensados por Guyan)
            }
            Eigen::SparseMatrix<double> M_lat(dof, dof);
            M_lat.setFromTriplets(trips.begin(), trips.end());
            M_global = M_lat;
        }

        // --- 3. Apply boundary conditions + reducción ---
        std::vector<int> freeIndices = getFreeIndices(nodeInputs, dof);
        std::vector<int> zeroIndicesK = getZerosIndices(K_global);
        std::sort(zeroIndicesK.begin(), zeroIndicesK.end());

        std::vector<int> reducedIndices;   // GDL sobre los que se resuelve el eigen
        Eigen::MatrixXd K_dense, M_dense;

        if (lateral_mass)
        {
            // --- CONDENSACIÓN DE GUYAN ---
            // master = GDL libres CON masa (Ux,Uy); slave = GDL libres SIN masa (Uz, rotaciones).
            // Se eliminan los slaves: K_hat = Kmm − Kms·Kss⁻¹·Ksm,  M_hat = Mmm (diagonal lateral).
            // El eigen queda solo sobre los GDL laterales → chico y rápido aun a malla fina, y
            // los periodos convergen a ETABS (la rigidez de la losa/muro se conserva en K_hat).
            double mMax = 0.0;
            for (int i = 0; i < dof; ++i) mMax = std::max(mMax, M_global.coeff(i, i));
            double mEps = mMax * 1e-9;
            std::vector<int> master, slave;
            for (int idx : freeIndices)
            {
                if (std::binary_search(zeroIndicesK.begin(), zeroIndicesK.end(), idx)) continue; // sin rigidez → fuera
                if (M_global.coeff(idx, idx) > mEps) master.push_back(idx);
                else slave.push_back(idx);
            }
            int nm = (int)master.size(), ns = (int)slave.size();
            if (nm == 0) return;
            Eigen::SparseMatrix<double> Kmm = extractBlock(K_global, master, master);
            if (ns > 0)
            {
                Eigen::SparseMatrix<double> Kss = extractBlock(K_global, slave, slave);
                Eigen::SparseMatrix<double> Ksm = extractBlock(K_global, slave, master);
                Eigen::SimplicialLDLT<Eigen::SparseMatrix<double>> chol(Kss);
                if (chol.info() != Eigen::Success) return;
                Eigen::MatrixXd X = chol.solve(Eigen::MatrixXd(Ksm));          // Kss⁻¹·Ksm  (ns×nm)
                K_dense = Eigen::MatrixXd(Kmm) - Eigen::MatrixXd(Ksm).transpose() * X; // Kmm − Kms·X
            }
            else
                K_dense = Eigen::MatrixXd(Kmm);
            M_dense = Eigen::MatrixXd::Zero(nm, nm);
            for (int k = 0; k < nm; ++k) M_dense(k, k) = M_global.coeff(master[k], master[k]);
            reducedIndices = master;
        }
        else
        {
            std::vector<int> zeroIndicesM = getZerosIndices(M_global);
            std::vector<int> allZeroIndices;
            allZeroIndices.insert(allZeroIndices.end(), zeroIndicesK.begin(), zeroIndicesK.end());
            allZeroIndices.insert(allZeroIndices.end(), zeroIndicesM.begin(), zeroIndicesM.end());
            std::sort(allZeroIndices.begin(), allZeroIndices.end());
            allZeroIndices.erase(std::unique(allZeroIndices.begin(), allZeroIndices.end()), allZeroIndices.end());
            for (int idx : freeIndices)
                if (!std::binary_search(allZeroIndices.begin(), allZeroIndices.end(), idx))
                    reducedIndices.push_back(idx);
            if (reducedIndices.empty()) return;
            K_dense = Eigen::MatrixXd(getReducedMatrix(K_global, reducedIndices));
            M_dense = Eigen::MatrixXd(getReducedMatrix(M_global, reducedIndices));
        }

        int reducedSize = (int)reducedIndices.size();
        if (reducedSize == 0)
            return;

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
