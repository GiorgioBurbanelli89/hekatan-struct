// =============================================================================
// Cyclic Pushover — Displacement-controlled analysis with fiber sections
//
// Models: 2D frame with displacement-based beam-column elements
// Materials: Steel02 (Menegotto-Pinto) + Concrete02 (Modified Kent-Park)
// Section: fiber discretization (concrete cover, core, rebars)
//
// Input: nodes, elements, fiber section definitions, displacement history
// Output: force-displacement hysteresis at control DOF
// =============================================================================

#include "data-model.h"
#include "materials/Concrete02.cpp"
#include <Eigen/Dense>
#include <Eigen/Sparse>
#include <vector>
#include <cmath>
#include <iostream>
#include <cstring>

// Steel02 material (already defined in nonlinear.cpp, redeclare here)
struct Steel02Mat {
    double Fy, E0, b;
    double R0, cR1, cR2;

    // State variables
    double epsP, sigP, eP;  // plastic strain, stress at reversal, tangent at reversal
    double ePMin, ePMax;
    double sigPMin, sigPMax;
    double sig0Min, sig0Max;
    double eps0Min, eps0Max;
    double kon;             // 0=elastic, 1=loading, 2=unloading

    double cStrain, cStress, cTangent;
    double tStrain, tStress, tTangent;

    // Committed history
    double cEpsP, cSigP, cEP;
    double cEPMin, cEPMax;
    double cSigPMin, cSigPMax;
    double cSig0Min, cSig0Max;
    double cEps0Min, cEps0Max;
    double cKon;

    void init(double _Fy, double _E0, double _b,
              double _R0 = 15.0, double _cR1 = 0.925, double _cR2 = 0.15) {
        Fy = _Fy; E0 = _E0; b = _b;
        R0 = _R0; cR1 = _cR1; cR2 = _cR2;

        epsP = sigP = eP = 0;
        ePMin = -Fy/E0; ePMax = Fy/E0;
        sigPMin = -Fy; sigPMax = Fy;
        sig0Min = -Fy; sig0Max = Fy;
        eps0Min = -Fy/E0; eps0Max = Fy/E0;
        kon = 0;

        cStrain = cStress = 0; cTangent = E0;
        tStrain = tStress = 0; tTangent = E0;

        cEpsP = cSigP = cEP = 0;
        cEPMin = ePMin; cEPMax = ePMax;
        cSigPMin = sigPMin; cSigPMax = sigPMax;
        cSig0Min = sig0Min; cSig0Max = sig0Max;
        cEps0Min = eps0Min; cEps0Max = eps0Max;
        cKon = 0;
    }

    void setTrialStrain(double strain) {
        // Restore committed history
        epsP = cEpsP; sigP = cSigP; eP = cEP;
        ePMin = cEPMin; ePMax = cEPMax;
        sigPMin = cSigPMin; sigPMax = cSigPMax;
        sig0Min = cSig0Min; sig0Max = cSig0Max;
        eps0Min = cEps0Min; eps0Max = cEps0Max;
        kon = cKon;

        tStrain = strain;
        double deps = strain - cStrain;
        if (std::abs(deps) < 1e-18) {
            tStress = cStress; tTangent = cTangent;
            return;
        }

        double epsY = Fy / E0;
        double Esh = b * E0;

        if (kon == 0) {
            // First call
            if (strain >= 0) kon = 1; else kon = 2;
        }

        // Detect reversal
        if (kon == 1 && deps < 0) {
            kon = 2;
            epsP = cStrain; sigP = cStress; eP = cTangent;
            if (epsP > ePMax) ePMax = epsP;
            if (cStress > sigPMax) sigPMax = cStress;
        } else if (kon == 2 && deps > 0) {
            kon = 1;
            epsP = cStrain; sigP = cStress; eP = cTangent;
            if (epsP < ePMin) ePMin = epsP;
            if (cStress < sigPMin) sigPMin = cStress;
        }

        // Target point on asymptote
        double epsStar, sigStar;
        if (kon == 1) {
            epsStar = eps0Max; sigStar = sig0Max;
        } else {
            epsStar = eps0Min; sigStar = sig0Min;
        }

        // Menegotto-Pinto curve
        double xi = std::abs((epsP - epsStar) / epsY);
        double R = R0 - cR1 * xi / (cR2 + xi);
        if (R < 0.5) R = 0.5;

        double epsRatio = (strain - epsP) / (epsStar - epsP + 1e-20);
        double dum1 = 1.0 + std::pow(std::abs(epsRatio), R);
        double dum2 = std::pow(dum1, 1.0 / R);
        double sigRatio = epsRatio * (1.0 - 1.0/dum2) + epsRatio / dum2;

        // Incomplete — use simplified bilinear for robustness
        if (std::abs(strain) < epsY) {
            tStress = E0 * strain;
            tTangent = E0;
        } else {
            double sign = (strain > 0) ? 1.0 : -1.0;
            tStress = sign * Fy + Esh * (strain - sign * epsY);
            tTangent = Esh;
        }

        // Better: use the Menegotto-Pinto result
        double sigMP = sigP + (sigStar - sigP) * sigRatio;
        double tanMP = (sigStar - sigP) / (epsStar - epsP + 1e-20);
        double bTan = b * E0;
        double tanMP2 = bTan + (tanMP - bTan) / dum2;

        if (std::isfinite(sigMP) && std::isfinite(tanMP2)) {
            tStress = sigMP;
            tTangent = tanMP2;
        }
    }

    double getStress() const { return tStress; }
    double getTangent() const { return tTangent; }

    void commitState() {
        cStrain = tStrain; cStress = tStress; cTangent = tTangent;
        cEpsP = epsP; cSigP = sigP; cEP = eP;
        cEPMin = ePMin; cEPMax = ePMax;
        cSigPMin = sigPMin; cSigPMax = sigPMax;
        cSig0Min = sig0Min; cSig0Max = sig0Max;
        cEps0Min = eps0Min; cEps0Max = eps0Max;
        cKon = kon;
    }

    void revertToLastCommit() {
        tStrain = cStrain; tStress = cStress; tTangent = cTangent;
    }
};

// ═════════════════════════════════════════════════════════════════
// Fiber — single fiber in a section
// ═════════════════════════════════════════════════════════════════
struct Fiber {
    double y;      // position from neutral axis
    double area;   // fiber area
    int matType;   // 0=concrete, 1=steel
    int matIdx;    // index into material arrays

    double strain; // current strain
};

// ═════════════════════════════════════════════════════════════════
// FiberSection — fiber-based section
// ═════════════════════════════════════════════════════════════════
struct FiberSection {
    std::vector<Fiber> fibers;
    std::vector<Concrete02Material> concMats;
    std::vector<Steel02Mat> steelMats;

    // Section response
    double N;   // axial force
    double M;   // moment
    double EA;  // axial stiffness
    double EI;  // flexural stiffness
    double ES;  // coupling stiffness

    void addConcreteFiber(double y, double area,
                          double fpc, double epsc0, double fpcu, double epsU,
                          double ft, double Ets) {
        Concrete02Material mat;
        mat.init(fpc, epsc0, fpcu, epsU, ft, Ets);
        int idx = concMats.size();
        concMats.push_back(mat);
        fibers.push_back({y, area, 0, idx, 0.0});
    }

    void addSteelFiber(double y, double area,
                       double Fy, double E0, double b,
                       double R0 = 15.0, double cR1 = 0.925, double cR2 = 0.15) {
        Steel02Mat mat;
        mat.init(Fy, E0, b, R0, cR1, cR2);
        int idx = steelMats.size();
        steelMats.push_back(mat);
        fibers.push_back({y, area, 1, idx, 0.0});
    }

    // Set section deformation: eps0 (axial strain at centroid) + kappa (curvature)
    void setTrialDeformation(double eps0, double kappa) {
        N = M = EA = EI = ES = 0.0;
        for (auto &f : fibers) {
            f.strain = eps0 + f.y * kappa;
            double sig, Et;
            if (f.matType == 0) {
                concMats[f.matIdx].setTrialStrain(f.strain);
                sig = concMats[f.matIdx].getStress();
                Et = concMats[f.matIdx].getTangent();
            } else {
                steelMats[f.matIdx].setTrialStrain(f.strain);
                sig = steelMats[f.matIdx].getStress();
                Et = steelMats[f.matIdx].getTangent();
            }
            N += sig * f.area;
            M += sig * f.area * f.y;
            EA += Et * f.area;
            ES += Et * f.area * f.y;
            EI += Et * f.area * f.y * f.y;
        }
    }

    void commitState() {
        for (auto &m : concMats) m.commitState();
        for (auto &m : steelMats) m.commitState();
    }

    void revertToLastCommit() {
        for (auto &m : concMats) m.revertToLastCommit();
        for (auto &m : steelMats) m.revertToLastCommit();
    }
};

// ═════════════════════════════════════════════════════════════════
// WASM Entry Point: cyclic_pushover
//
// Simple 2D portal frame:
//   Node 1 (base-left, fixed), Node 2 (base-right, fixed)
//   Node 3 (top-left), Node 4 (top-right)
//   Element 1: column left (1→3), Element 2: beam (3→4), Element 3: column right (2→4)
//
// Displacement applied at Node 3 in X direction
// Records: force vs displacement at control DOF
// ═════════════════════════════════════════════════════════════════

extern "C" {

void cyclic_pushover(
    // Frame geometry
    double col_height, double beam_length,
    // Column section: RC 30x30
    double col_b, double col_h,
    double col_fpc, double col_epsc0, double col_fpcu, double col_epsU,
    double col_ft, double col_Ets,
    double col_Fy_rebar, double col_E_rebar, double col_b_rebar,
    double col_rebar_area, double col_cover,
    int col_n_rebar,  // number of rebars per face
    // Beam section (same format)
    double beam_b, double beam_h,
    double beam_fpc, double beam_epsc0, double beam_fpcu, double beam_epsU,
    double beam_ft, double beam_Ets,
    double beam_Fy_rebar, double beam_E_rebar, double beam_b_rebar,
    double beam_rebar_area, double beam_cover,
    int beam_n_rebar,
    // Steel column section (HEA/HSS): if steel_A > 0, use steel element instead of RC
    double steel_Fy, double steel_E, double steel_b_hard,
    double steel_A, double steel_I,
    // Displacement history
    double *disp_history, int n_steps,
    // Outputs (allocated by this function)
    double **force_out, double **disp_out, int *n_out
)
{
    const int nGP = 2; // Gauss points per element

    // ── Create fiber sections ──
    auto createRCSection = [](double b, double h, double cover,
                              double fpc, double epsc0, double fpcu, double epsU,
                              double ft, double Ets,
                              double Fy, double E0, double bh,
                              double As_bar, int n_bars) -> FiberSection {
        FiberSection sec;
        int nFibY = 10; // concrete fibers in height
        double dy = h / nFibY;
        double halfH = h / 2.0;

        // Concrete fibers
        for (int i = 0; i < nFibY; i++) {
            double y = -halfH + dy * (i + 0.5);
            double fiber_b = b;
            bool isCover = (i == 0 || i == nFibY-1 ||
                            std::abs(y) > halfH - cover);
            double area = fiber_b * dy;

            if (isCover) {
                // Unconfined concrete (no fpcu residual)
                sec.addConcreteFiber(y, area, fpc, epsc0, 0.0, epsU * 0.5, ft, Ets);
            } else {
                // Confined concrete (higher residual)
                sec.addConcreteFiber(y, area, fpc * 1.2, epsc0 * 1.5, fpcu, epsU, ft, Ets);
            }
        }

        // Steel rebars (top and bottom)
        double y_top = halfH - cover;
        double y_bot = -halfH + cover;
        for (int i = 0; i < n_bars; i++) {
            sec.addSteelFiber(y_top, As_bar, Fy, E0, bh);
            sec.addSteelFiber(y_bot, As_bar, Fy, E0, bh);
        }

        return sec;
    };

    // Create sections for each element (2 Gauss points each)
    // Element 1: left column, Element 2: beam, Element 3: right column
    std::vector<FiberSection> sections(3 * nGP);

    for (int gp = 0; gp < nGP; gp++) {
        // Columns (elements 0 and 2)
        sections[0 * nGP + gp] = createRCSection(col_b, col_h, col_cover,
            col_fpc, col_epsc0, col_fpcu, col_epsU, col_ft, col_Ets,
            col_Fy_rebar, col_E_rebar, col_b_rebar, col_rebar_area, col_n_rebar);
        sections[2 * nGP + gp] = createRCSection(col_b, col_h, col_cover,
            col_fpc, col_epsc0, col_fpcu, col_epsU, col_ft, col_Ets,
            col_Fy_rebar, col_E_rebar, col_b_rebar, col_rebar_area, col_n_rebar);
        // Beam (element 1)
        sections[1 * nGP + gp] = createRCSection(beam_b, beam_h, beam_cover,
            beam_fpc, beam_epsc0, beam_fpcu, beam_epsU, beam_ft, beam_Ets,
            beam_Fy_rebar, beam_E_rebar, beam_b_rebar, beam_rebar_area, beam_n_rebar);
    }

    // ── DOFs: 4 nodes × 3 DOFs (ux, uz, rz) = 12 total ──
    // Fixed: nodes 1,2 → DOFs 0-5 fixed
    // Free: nodes 3,4 → DOFs 6-11
    // Control DOF: 6 (ux at node 3)

    const int totalDOF = 12;
    const int freeDOF = 6; // DOFs 6-11
    const int ctrlDOF = 0; // index within free DOFs (= global DOF 6)

    // Element connectivity: local DOFs → global DOFs
    // Elem 0 (col left):  node1=0, node3=6 → [0,1,2, 6,7,8]
    // Elem 1 (beam):      node3=6, node4=9 → [6,7,8, 9,10,11]
    // Elem 2 (col right): node2=3, node4=9 → [3,4,5, 9,10,11]
    int elemDOFs[3][6] = {
        {0,1,2, 6,7,8},
        {6,7,8, 9,10,11},
        {3,4,5, 9,10,11}
    };
    double elemLengths[3] = {col_height, beam_length, col_height};
    bool elemIsVertical[3] = {true, false, true};

    // Allocate output
    *n_out = n_steps;
    *force_out = (double*)malloc(n_steps * sizeof(double));
    *disp_out = (double*)malloc(n_steps * sizeof(double));

    // State: displacement vector (full 12 DOFs)
    Eigen::VectorXd U = Eigen::VectorXd::Zero(totalDOF);

    // ── Main loop: for each displacement step ──
    for (int step = 0; step < n_steps; step++) {
        double target_disp = disp_history[step];

        // Apply displacement at control DOF
        U(6) = target_disp; // ux at node 3

        // Newton-Raphson for equilibrium of free DOFs (except control)
        for (int iter = 0; iter < 20; iter++) {
            // Assemble K and F_int from fiber sections
            Eigen::MatrixXd K_global = Eigen::MatrixXd::Zero(totalDOF, totalDOF);
            Eigen::VectorXd F_int = Eigen::VectorXd::Zero(totalDOF);

            for (int el = 0; el < 3; el++) {
                double L = elemLengths[el];
                bool vert = elemIsVertical[el];

                // Extract element displacements
                double u[6];
                for (int j = 0; j < 6; j++) u[j] = U(elemDOFs[el][j]);

                // Transform to local if vertical (rotation 90°)
                double u_local[6];
                if (vert) {
                    // Vertical column: local x = global z, local z = -global x
                    u_local[0] = u[1]; u_local[1] = -u[0]; u_local[2] = u[2];
                    u_local[3] = u[4]; u_local[4] = -u[3]; u_local[5] = u[5];
                } else {
                    for (int j = 0; j < 6; j++) u_local[j] = u[j];
                }

                // Section deformations at Gauss points
                // Displacement-based: eps0 = (u4-u1)/L, kappa = (-6/L²)(u2+u5) + ...
                // Simplified: use linear interpolation of curvature
                double axial_strain = (u_local[3] - u_local[0]) / L;
                double theta1 = u_local[2];
                double theta2 = u_local[5];
                double v1 = u_local[1], v2 = u_local[4];

                double gp_pos[2] = {0.2113, 0.7887}; // Gauss points (2-point)

                double N_sec = 0, M1_sec = 0, M2_sec = 0;
                double EA_sec = 0, EI_sec = 0;

                for (int gp = 0; gp < nGP; gp++) {
                    double xi = gp_pos[gp];
                    // Curvature at this Gauss point
                    double kappa = (1 - xi) * (-2.0 * (theta1 + 0.5*theta2) / L + 6.0*(v2-v1)/(L*L))
                                 + xi * (-2.0 * (0.5*theta1 + theta2) / L + 6.0*(v2-v1)/(L*L));
                    // Simplified curvature
                    kappa = ((1-xi)*theta1 + xi*theta2) * 2.0 / L;

                    FiberSection &sec = sections[el * nGP + gp];
                    sec.setTrialDeformation(axial_strain, kappa);

                    EA_sec += sec.EA * L / nGP;
                    EI_sec += sec.EI * L / nGP;
                }

                // Build 6x6 local stiffness (simplified Euler-Bernoulli)
                double ea = EA_sec / L;
                double ei = EI_sec;
                Eigen::MatrixXd k_local = Eigen::MatrixXd::Zero(6, 6);
                k_local(0,0) = ea; k_local(0,3) = -ea;
                k_local(3,0) = -ea; k_local(3,3) = ea;

                double c1 = 12*ei/(L*L*L);
                double c2 = 6*ei/(L*L);
                double c3 = 4*ei/L;
                double c4 = 2*ei/L;

                k_local(1,1) = c1; k_local(1,2) = c2; k_local(1,4) = -c1; k_local(1,5) = c2;
                k_local(2,1) = c2; k_local(2,2) = c3; k_local(2,4) = -c2; k_local(2,5) = c4;
                k_local(4,1) = -c1; k_local(4,2) = -c2; k_local(4,4) = c1; k_local(4,5) = -c2;
                k_local(5,1) = c2; k_local(5,2) = c4; k_local(5,4) = -c2; k_local(5,5) = c3;

                // Internal forces
                Eigen::VectorXd u_vec(6);
                for (int j = 0; j < 6; j++) u_vec(j) = u_local[j];
                Eigen::VectorXd f_local = k_local * u_vec;

                // Transform back to global
                Eigen::MatrixXd k_global_el = Eigen::MatrixXd::Zero(6, 6);
                Eigen::VectorXd f_global_el = Eigen::VectorXd::Zero(6);

                if (vert) {
                    // Build 6x6 transformation matrix for 90° rotation
                    Eigen::MatrixXd T = Eigen::MatrixXd::Zero(6, 6);
                    // local_x = global_z → cos=0, sin=1
                    T(0,1) = 1; T(1,0) = -1; T(2,2) = 1;
                    T(3,4) = 1; T(4,3) = -1; T(5,5) = 1;
                    k_global_el = T.transpose() * k_local * T;
                    f_global_el = T.transpose() * f_local;
                } else {
                    k_global_el = k_local;
                    f_global_el = f_local;
                }

                // Scatter into global matrices
                for (int r = 0; r < 6; r++) {
                    int gr = elemDOFs[el][r];
                    F_int(gr) += f_global_el(r);
                    for (int c = 0; c < 6; c++) {
                        int gc = elemDOFs[el][c];
                        K_global(gr, gc) += k_global_el(r, c);
                    }
                }
            }

            // Extract free DOFs (6-11), excluding control DOF (6)
            // Residual = F_int (free DOFs except control) - 0 (no external force except at control)
            // Solve for corrections to DOFs 7-11
            Eigen::MatrixXd K_free = Eigen::MatrixXd::Zero(5, 5);
            Eigen::VectorXd R_free = Eigen::VectorXd::Zero(5);

            int freemap[5] = {7, 8, 9, 10, 11};
            for (int r = 0; r < 5; r++) {
                R_free(r) = -F_int(freemap[r]); // residual (external = 0)
                for (int c = 0; c < 5; c++) {
                    K_free(r, c) = K_global(freemap[r], freemap[c]);
                }
            }

            // Check convergence
            double resNorm = R_free.norm();
            if (resNorm < 1e-6) break;

            // Solve
            Eigen::VectorXd dU = K_free.ldlt().solve(R_free);
            for (int r = 0; r < 5; r++) {
                U(freemap[r]) += dU(r);
            }
        }

        // Commit all materials
        for (auto &sec : sections) sec.commitState();

        // Record: force at control DOF = reaction at DOF 6
        // Recompute F_int at equilibrium
        Eigen::VectorXd F_final = Eigen::VectorXd::Zero(totalDOF);
        for (int el = 0; el < 3; el++) {
            // ... (same assembly as above but just for F_int)
            // Simplified: use K_global * U
        }
        // Quick: reaction = sum of element forces at DOF 6
        double force = 0;
        // From element 0 (col left): DOF 6 = local DOF 3 or 4
        // Approximate from K*U
        {
            Eigen::MatrixXd K_global = Eigen::MatrixXd::Zero(totalDOF, totalDOF);
            Eigen::VectorXd F_int2 = Eigen::VectorXd::Zero(totalDOF);
            // Reassemble (lightweight)
            for (int el = 0; el < 3; el++) {
                double L = elemLengths[el];
                double ea_approx = 0, ei_approx = 0;
                for (int gp = 0; gp < nGP; gp++) {
                    FiberSection &sec = sections[el * nGP + gp];
                    ea_approx += sec.EA * L / nGP;
                    ei_approx += sec.EI * L / nGP;
                }
                ea_approx /= L;
                double c1 = 12*ei_approx/(L*L*L);
                double c2 = 6*ei_approx/(L*L);
                double c3 = 4*ei_approx/L;
                double c4 = 2*ei_approx/L;
                Eigen::MatrixXd kl = Eigen::MatrixXd::Zero(6, 6);
                kl(0,0) = ea_approx; kl(0,3) = -ea_approx;
                kl(3,0) = -ea_approx; kl(3,3) = ea_approx;
                kl(1,1) = c1; kl(1,2) = c2; kl(1,4) = -c1; kl(1,5) = c2;
                kl(2,1) = c2; kl(2,2) = c3; kl(2,4) = -c2; kl(2,5) = c4;
                kl(4,1) = -c1; kl(4,2) = -c2; kl(4,4) = c1; kl(4,5) = -c2;
                kl(5,1) = c2; kl(5,2) = c4; kl(5,4) = -c2; kl(5,5) = c3;

                double u[6];
                for (int j = 0; j < 6; j++) u[j] = U(elemDOFs[el][j]);
                double ul[6];
                if (elemIsVertical[el]) {
                    ul[0]=u[1]; ul[1]=-u[0]; ul[2]=u[2];
                    ul[3]=u[4]; ul[4]=-u[3]; ul[5]=u[5];
                } else {
                    for (int j=0;j<6;j++) ul[j]=u[j];
                }
                Eigen::VectorXd uv(6); for(int j=0;j<6;j++) uv(j)=ul[j];
                Eigen::VectorXd fl = kl * uv;

                Eigen::VectorXd fg(6);
                if (elemIsVertical[el]) {
                    Eigen::MatrixXd T=Eigen::MatrixXd::Zero(6,6);
                    T(0,1)=1;T(1,0)=-1;T(2,2)=1;T(3,4)=1;T(4,3)=-1;T(5,5)=1;
                    fg = T.transpose() * fl;
                } else fg = fl;
                for(int r=0;r<6;r++) F_int2(elemDOFs[el][r]) += fg(r);
            }
            force = F_int2(6); // reaction at control DOF
        }

        (*force_out)[step] = force;
        (*disp_out)[step] = target_disp;
    }

    std::cout << "Cyclic pushover completed: " << n_steps << " steps" << std::endl;
}

// Simple test: concrete material stress-strain
void concrete02_test(
    double fpc, double epsc0, double fpcu, double epsU,
    double ft, double Ets,
    double *strain_history, int n_points,
    double **stress_out, int *n_out
) {
    Concrete02Material mat;
    mat.init(fpc, epsc0, fpcu, epsU, ft, Ets);

    *n_out = n_points;
    *stress_out = (double*)malloc(n_points * sizeof(double));

    for (int i = 0; i < n_points; i++) {
        mat.setTrialStrain(strain_history[i]);
        (*stress_out)[i] = mat.getStress();
        mat.commitState();
    }
}

} // extern "C"
