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
        // Conserva SOLO la masa de los GDL Ux,Uy (lumpeo por suma de filas = ETABS LUMPATSTORIES).
        // Uz y rotaciones → masa 0. Con la iteración de subespacio (abajo) esos GDL siguen en la
        // malla (rigidez completa) pero no cargan masa → los modos salen laterales/torsionales.
        if (lateral_mass)
        {
            Eigen::VectorXd rowsum = Eigen::VectorXd::Zero(dof);
            for (int k = 0; k < M_global.outerSize(); ++k)
                for (Eigen::SparseMatrix<double>::InnerIterator it(M_global, k); it; ++it)
                    rowsum(it.row()) += it.value();
            std::vector<Eigen::Triplet<double>> trips;
            for (int i = 0; i < num_nodes; ++i) {
                trips.emplace_back(i*6+0, i*6+0, std::max(rowsum(i*6+0), 0.0));  // Ux lumpeada
                trips.emplace_back(i*6+1, i*6+1, std::max(rowsum(i*6+1), 0.0));  // Uy lumpeada
            }
            Eigen::SparseMatrix<double> M_lat(dof, dof);
            M_lat.setFromTriplets(trips.begin(), trips.end());
            M_global = M_lat;
        }

        // --- 3. Apply boundary conditions + reducción ---
        std::vector<int> freeIndices = getFreeIndices(nodeInputs, dof);
        std::vector<int> zeroIndicesK = getZerosIndices(K_global);
        std::sort(zeroIndicesK.begin(), zeroIndicesK.end());

        std::vector<int> reducedIndices;   // GDL sobre los que vive el eigen (columnas de eigenvectors)
        Eigen::VectorXd eigenvalues;       // ω² (ascendente)
        Eigen::MatrixXd eigenvectors;      // reducedSize × nComputed (M-ortonormal)

        if (lateral_mass)
        {
            // ================= ITERACIÓN DE SUBESPACIO (Bathe) — como ETABS/SAPFire =================
            // Se resuelve K·φ = ω²·M·φ sobre la MALLA FINA COMPLETA (todos los GDL libres con rigidez),
            // sin condensar ni densificar. K se factoriza UNA sola vez (SimplicialLDLT sparse) y se
            // reusa en las ~pocas iteraciones. La masa vive solo en Ux,Uy → los GDL sin masa (Uz,
            // rotaciones) se "condensan" implícitamente vía K⁻¹M (igual que ETABS con INCLUDEVERTICALMASS
            // No). Coste ≈ O(nnz(K)·nModes) por iteración → rápido aun con miles de nodos.
            std::vector<int> keep;   // GDL libres con rigidez (toda la malla)
            keep.reserve(freeIndices.size());
            for (int idx : freeIndices)
                if (!std::binary_search(zeroIndicesK.begin(), zeroIndicesK.end(), idx))
                    keep.push_back(idx);
            int n = (int)keep.size();
            if (n == 0) return;

            Eigen::SparseMatrix<double> Kf = extractBlock(K_global, keep, keep);
            Eigen::VectorXd Md(n);                       // masa diagonal en el espacio 'keep'
            for (int i = 0; i < n; ++i) Md(i) = std::max(M_global.coeff(keep[i], keep[i]), 0.0);

            Eigen::SimplicialLDLT<Eigen::SparseMatrix<double>> chol(Kf);
            if (chol.info() != Eigen::Success) return;

            // ── vectores iniciales (Bathe): col 0 = diagonal de masa; resto = e_j en los GDL CON
            //    MASA de mayor razón masa/rigidez. Solo GDL con masa → el subespacio nunca degenera
            //    (ninguna columna sin masa → Mbar no se vuelve singular en modelos chicos). ──
            Eigen::VectorXd Kdiag = Kf.diagonal();
            std::vector<std::pair<double,int>> ratio;   // (Md/Kdiag, idx) solo GDL con masa
            for (int i = 0; i < n; ++i) {
                if (Md(i) > 0.0) {
                    double kd = (Kdiag(i) > 1e-30) ? Kdiag(i) : 1e-30;
                    ratio.emplace_back(Md(i) / kd, i);
                }
            }
            int nMass = (int)ratio.size();
            if (nMass == 0) return;                      // sin masa → sin modos
            std::sort(ratio.begin(), ratio.end(), [](auto &a, auto &b){ return a.first > b.first; });

            int nmodes = (num_modes > 0) ? num_modes : 10;
            // q acotado por el nº de GDL con masa: no hay más modos laterales que GDL de masa.
            int q = std::min(n, std::min(2 * nmodes + 8, nMass));
            if (q < 1) return;

            Eigen::MatrixXd X = Eigen::MatrixXd::Zero(n, q);
            for (int i = 0; i < n; ++i) X(i, 0) = Md(i);                  // col 0 = diagonal de masa
            for (int c = 1; c < q; ++c) X(ratio[c - 1].second, c) = 1.0;  // e_j en GDL con masa

            // ── iteración de subespacio ──
            Eigen::VectorXd lamPrev = Eigen::VectorXd::Zero(std::min(nmodes, q));
            Eigen::MatrixXd Xbar, Q;
            Eigen::VectorXd lam;
            for (int iter = 0; iter < 30; ++iter)
            {
                Eigen::MatrixXd MX = Md.asDiagonal() * X;      // M·X
                Xbar = chol.solve(MX);                         // X̄ = K⁻¹·M·X (barra de inversa)
                Eigen::MatrixXd MXbar = Md.asDiagonal() * Xbar;
                Eigen::MatrixXd Kbar = Xbar.transpose() * MX;  // X̄ᵀ·M·X = X̄ᵀ·K·X̄
                Eigen::MatrixXd Mbar = Xbar.transpose() * MXbar; // X̄ᵀ·M·X̄
                Kbar = 0.5 * (Kbar + Kbar.transpose());
                Mbar = 0.5 * (Mbar + Mbar.transpose());
                Eigen::GeneralizedSelfAdjointEigenSolver<Eigen::MatrixXd> ges(Kbar, Mbar);
                if (ges.info() != Eigen::Success) break;
                lam = ges.eigenvalues();                       // ω² ascendente
                Q = ges.eigenvectors();                        // Mbar-ortonormal
                X = Xbar * Q;                                  // nuevo subespacio (= autovectores aprox)
                // convergencia de los nmodes más bajos
                int nc = std::min(nmodes, (int)lam.size());
                double err = 0.0;
                for (int i = 0; i < nc; ++i) {
                    double d = std::abs(lam(i) - lamPrev(i));
                    err = std::max(err, d / (std::abs(lam(i)) + 1e-12));
                    lamPrev(i) = lam(i);
                }
                if (iter > 0 && err < 1e-7) break;
            }
            if (lam.size() == 0) return;

            // autovectores M-ortonormales: φ = X̄·Q  (φᵀMφ = QᵀMbarQ = I)
            eigenvectors = Xbar * Q;
            eigenvalues = lam;
            reducedIndices = keep;
        }
        else
        {
            // ================= camino denso (modelos chicos, ej. frame Paz 6.3) =================
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
            Eigen::MatrixXd K_dense = Eigen::MatrixXd(getReducedMatrix(K_global, reducedIndices));
            Eigen::MatrixXd M_dense = Eigen::MatrixXd(getReducedMatrix(M_global, reducedIndices));
            Eigen::GeneralizedSelfAdjointEigenSolver<Eigen::MatrixXd> solver(K_dense, M_dense);
            if (solver.info() != Eigen::Success)
            {
                std::cerr << "Error: Generalized eigenvalue solver failed." << std::endl;
                return;
            }
            eigenvalues = solver.eigenvalues();
            eigenvectors = solver.eigenvectors();
        }

        int reducedSize = (int)reducedIndices.size();
        int nComputed = (int)eigenvalues.size();
        if (reducedSize == 0 || nComputed == 0)
            return;

        // --- 6. Extraer modos válidos (ω² > 0), ascendente ---
        int totalModes = nComputed;
        if (num_modes > 0 && num_modes < nComputed)
            totalModes = num_modes;

        std::vector<double> freqVec;
        std::vector<int> validModeIndices;
        for (int i = 0; i < nComputed && (int)freqVec.size() < totalModes; ++i)
        {
            double omega2 = eigenvalues(i);
            if (omega2 > 1e-10)
            {
                double freq = std::sqrt(omega2) / (2.0 * M_PI);
                freqVec.push_back(freq);
                validModeIndices.push_back(i);
            }
        }

        int numValidModes = (int)freqVec.size();
        if (numValidModes == 0)
            return;

        // --- 7. Participación de masa (con M_global sparse, en GDL completos) ---
        // Centro de masa desde la diagonal de M (GDL Ux).
        double sum_m = 0.0, sum_mx = 0.0, sum_my = 0.0;
        for (int i = 0; i < num_nodes; ++i)
        {
            double mi = M_global.coeff(i * 6, i * 6);
            sum_m  += mi;
            sum_mx += mi * nodes[i][0];
            sum_my += mi * nodes[i][1];
        }
        double x_cm = (sum_m > 1e-30) ? sum_mx / sum_m : 0.0;
        double y_cm = (sum_m > 1e-30) ? sum_my / sum_m : 0.0;

        // 6 vectores de influencia en GDL completos
        std::vector<Eigen::VectorXd> r_full(6, Eigen::VectorXd::Zero(dof));
        for (int i = 0; i < num_nodes; ++i)
        {
            r_full[0](i * 6 + 0) = 1.0;  // Ux
            r_full[1](i * 6 + 1) = 1.0;  // Uy
            r_full[2](i * 6 + 2) = 1.0;  // Uz
            r_full[3](i * 6 + 3) = 1.0;  // Rx
            r_full[4](i * 6 + 4) = 1.0;  // Ry
            r_full[5](i * 6 + 0) = -(nodes[i][1] - y_cm);  // Rz (torsión CM): Ux = -(y-y_cm)
            r_full[5](i * 6 + 1) = +(nodes[i][0] - x_cm);  //                  Uy = +(x-x_cm)
            r_full[5](i * 6 + 5) = 1.0;
        }

        // Masa total por dirección: M_total_j = r_jᵀ · M · r_j   (M sparse)
        //
        // El divisor tiene que ser la masa que PUEDE participar, o sea la de
        // los grados LIBRES. Con M_global entera entraba tambien la masa
        // agrupada en los apoyos, que no se mueve nunca: todas las
        // participaciones salian bajas por el mismo factor (masa libre / masa
        // total). Medido en el mezanine: 0.9663 = 26.790 / 27.724 t, o sea
        // -3.4 % en UX y UY y -6.1 % en RZ, donde el factor es mayor porque la
        // masa anclada esta en las bases de las columnas, lejos del centro.
        // El numerador (Gamma) ya estaba bien: el autovector vale 0 en los
        // apoyos, asi que solo suma grados libres.
        Eigen::VectorXd libre = Eigen::VectorXd::Zero(dof);
        for (int j = 0; j < reducedSize; ++j) libre(reducedIndices[j]) = 1.0;

        std::vector<double> M_total(6, 0.0);
        std::vector<Eigen::VectorXd> Mr(6);
        for (int j = 0; j < 6; ++j)
        {
            Eigen::VectorXd r_libre = r_full[j].cwiseProduct(libre);
            Mr[j] = M_global * r_libre;
            M_total[j] = r_libre.dot(Mr[j]);
        }

        // Por modo: mapear autovector a GDL completos, participación con M sparse
        std::vector<std::vector<double>> participation(numValidModes, std::vector<double>(6, 0.0));
        std::vector<Eigen::VectorXd> fullModes(numValidModes, Eigen::VectorXd::Zero(dof));
        for (int m = 0; m < numValidModes; ++m)
        {
            int modeIdx = validModeIndices[m];
            Eigen::VectorXd fullRaw = Eigen::VectorXd::Zero(dof);
            for (int j = 0; j < reducedSize; ++j)
                fullRaw(reducedIndices[j]) = eigenvectors(j, modeIdx);

            double M_gen = fullRaw.dot(M_global * fullRaw);   // masa generalizada (=1 si M-ortonormal)
            for (int j = 0; j < 6; ++j)
            {
                if (M_total[j] < 1e-30 || M_gen < 1e-30) continue;
                double Gamma = fullRaw.dot(Mr[j]);            // φᵀ·M·r_j
                double M_eff = (Gamma * Gamma) / M_gen;
                participation[m][j] = M_eff / M_total[j];
            }
            fullModes[m] = fullRaw;
        }

        // --- 8. Salidas ---
        *num_frequencies_out = numValidModes;
        *frequencies_ptr_out = (double *)malloc(numValidModes * sizeof(double));
        for (int i = 0; i < numValidModes; ++i)
            (*frequencies_ptr_out)[i] = freqVec[i];

        *mode_shapes_rows_out = numValidModes;
        *mode_shapes_cols_out = dof;
        *mode_shapes_ptr_out = (double *)malloc(numValidModes * dof * sizeof(double));
        for (int m = 0; m < numValidModes; ++m)
        {
            Eigen::VectorXd fullMode = fullModes[m];
            double maxVal = fullMode.cwiseAbs().maxCoeff();  // normalizar a máx = 1 (para el visor)
            if (maxVal > 1e-15) fullMode /= maxVal;
            for (int d = 0; d < dof; ++d)
                (*mode_shapes_ptr_out)[m * dof + d] = fullMode(d);
        }

        *mass_participation_rows_out = numValidModes;
        *mass_participation_cols_out = 6;
        *mass_participation_ptr_out = (double *)malloc(numValidModes * 6 * sizeof(double));
        for (int m = 0; m < numValidModes; ++m)
            for (int j = 0; j < 6; ++j)
                (*mass_participation_ptr_out)[m * 6 + j] = participation[m][j];
    }
}
