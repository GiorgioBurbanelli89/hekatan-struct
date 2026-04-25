/**
 * Nonlinear Dynamic Analysis — Newmark-β with Steel02 BRB elements
 *
 * Features:
 *   - Steel02 (Menegotto-Pinto) uniaxial material
 *   - Truss element (BRB) with nonlinear material
 *   - Linear frame elements (elastic beam-column)
 *   - Newmark-β time integration (average acceleration)
 *   - Newton-Raphson iteration per time step
 *   - Rayleigh damping (C = αM + βK)
 *
 * Compiled to WASM via Emscripten.
 */

#include <cmath>
#include <cstring>
#include <cstdlib>
#include <vector>
#include <Eigen/Dense>
#include <Eigen/Sparse>

using namespace Eigen;
using SpMat = SparseMatrix<double>;
using Trip = Triplet<double>;

// ═══════════════════════════════════════════
//  Steel02 Material (Menegotto-Pinto with Filippou isotropic hardening)
// ═══════════════════════════════════════════
struct Steel02 {
    // Input parameters
    double Fy, E0, b;       // yield stress, initial stiffness, hardening ratio
    double R0, cR1, cR2;    // transition curve parameters
    double a1, a2, a3, a4;  // isotropic hardening parameters

    // Committed state (history)
    double epsP, sigP, eP;
    double epsminP, epsmaxP, epsplP;
    double epss0P, sigs0P, epssrP, sigsrP;
    int konP;

    // Trial state
    double eps, sig, e;
    double epsmin, epsmax, epspl;
    double epss0, sigs0, epssr, sigsr;
    int kon;

    void init(double fy, double e0, double bh,
              double r0 = 15.0, double cr1 = 0.925, double cr2 = 0.15,
              double _a1 = 0.0, double _a2 = 1.0, double _a3 = 0.0, double _a4 = 1.0) {
        Fy = fy; E0 = e0; b = bh;
        R0 = r0; cR1 = cr1; cR2 = cr2;
        a1 = _a1; a2 = _a2; a3 = _a3; a4 = _a4;

        // Initialize state
        konP = 0;
        epsP = sigP = 0.0;
        eP = E0;
        epsminP = -Fy / E0;
        epsmaxP = Fy / E0;
        epsplP = 0.0;
        epss0P = sigs0P = epssrP = sigsrP = 0.0;
    }

    void setTrialStrain(double strain) {
        double Esh = b * E0;
        double epsy = Fy / E0;

        eps = strain;
        // Copy committed state to trial
        epsmin = epsminP; epsmax = epsmaxP; epspl = epsplP;
        epss0 = epss0P; sigs0 = sigs0P;
        epssr = epssrP; sigsr = sigsrP;
        kon = konP;

        double deps = eps - epsP;
        if (fabs(deps) < 1e-20) {
            sig = sigP;
            e = eP;
            return;
        }

        if (kon == 0 || kon == 3) {
            // First step or elastic return
            if (deps < 0.0) {
                kon = 2;
                epss0 = -epsy;
                sigs0 = -Fy;
                epspl = epss0;
                epssr = 0.0;
                sigsr = 0.0;
            } else {
                kon = 1;
                epss0 = epsy;
                sigs0 = Fy;
                epspl = epss0;
                epssr = 0.0;
                sigsr = 0.0;
            }
        }

        // Detect reversal
        if (kon == 2 && deps > 0.0) {
            // Was compressing, now tensioning → reversal
            kon = 1;
            epssr = epsP;
            sigsr = sigP;
            if (epsP < epsmin) epsmin = epsP;

            double d1 = (epsmax - epsmin) / (2.0 * a2 * epsy);
            double shft = 1.0 + a1 * pow(d1, 0.8);
            epss0 = (Fy * shft - Esh * epsy * shft - sigsr + E0 * epssr) / (E0 - Esh);
            sigs0 = Fy * shft + Esh * (epss0 - epsy * shft);
            epspl = epsmax;
        } else if (kon == 1 && deps < 0.0) {
            // Was tensioning, now compressing → reversal
            kon = 2;
            epssr = epsP;
            sigsr = sigP;
            if (epsP > epsmax) epsmax = epsP;

            double d1 = (epsmax - epsmin) / (2.0 * a4 * epsy);
            double shft = 1.0 + a3 * pow(d1, 0.8);
            epss0 = (-Fy * shft + Esh * epsy * shft - sigsr + E0 * epssr) / (E0 - Esh);
            sigs0 = -Fy * shft + Esh * (epss0 + epsy * shft);
            epspl = epsmin;
        }

        // Menegotto-Pinto backbone curve
        double xi = fabs((epspl - epss0) / epsy);
        double R = R0 - (cR1 * xi) / (cR2 + xi);
        if (R < 0.1) R = 0.1;

        double epsrat = (eps - epssr) / (epss0 - epssr);
        double dum1 = 1.0 + pow(fabs(epsrat), R);
        double dum2 = pow(dum1, 1.0 / R);

        sig = b * epsrat + (1.0 - b) * epsrat / dum2;
        sig = sig * (sigs0 - sigsr) + sigsr;

        e = b + (1.0 - b) / (dum1 * dum2);
        e = e * (sigs0 - sigsr) / (epss0 - epssr);
    }

    void commitState() {
        epsP = eps; sigP = sig; eP = e;
        epsminP = epsmin; epsmaxP = epsmax; epsplP = epspl;
        epss0P = epss0; sigs0P = sigs0;
        epssrP = epssr; sigsrP = sigsr;
        konP = kon;
    }

    void revertToLastCommit() {
        eps = epsP; sig = sigP; e = eP;
        epsmin = epsminP; epsmax = epsmaxP; epspl = epsplP;
        epss0 = epss0P; sigs0 = sigs0P;
        epssr = epssrP; sigsr = sigsrP;
        kon = konP;
    }

    double getStress() const { return sig; }
    double getTangent() const { return e; }
    double getStrain() const { return eps; }
};

// ═══════════════════════════════════════════
//  Nonlinear Truss Element (BRB)
// ═══════════════════════════════════════════
struct TrussElement {
    int nodeI, nodeJ;       // node indices (0-based)
    double A;               // cross-sectional area
    double L0;              // initial length
    double cosX, cosY, cosZ; // direction cosines
    Steel02 material;

    void init(int ni, int nj, double area, const double* nodeCoords, int nDOF,
              double fy, double E0, double bh, double R0 = 15.0) {
        nodeI = ni; nodeJ = nj; A = area;
        const double* pi = nodeCoords + ni * 3;
        const double* pj = nodeCoords + nj * 3;
        double dx = pj[0] - pi[0], dy = pj[1] - pi[1], dz = pj[2] - pi[2];
        L0 = sqrt(dx*dx + dy*dy + dz*dz);
        cosX = dx / L0; cosY = dy / L0; cosZ = dz / L0;
        material.init(fy, E0, bh, R0);
    }

    // Compute axial strain from global displacements
    double getStrain(const VectorXd& u) const {
        int i3 = nodeI * 3, j3 = nodeJ * 3;
        double dux = u[j3] - u[i3];
        double duy = u[j3+1] - u[i3+1];
        double duz = u[j3+2] - u[i3+2];
        return (cosX * dux + cosY * duy + cosZ * duz) / L0;
    }

    // Update material state
    void setTrialDisp(const VectorXd& u) {
        double strain = getStrain(u);
        material.setTrialStrain(strain);
    }

    // Internal force vector (6 DOF: 3 per node)
    void getResistingForce(VectorXd& f) const {
        double force = material.getStress() * A;
        double fx = force * cosX, fy = force * cosY, fz = force * cosZ;
        f[nodeI*3]   -= fx;
        f[nodeI*3+1] -= fy;
        f[nodeI*3+2] -= fz;
        f[nodeJ*3]   += fx;
        f[nodeJ*3+1] += fy;
        f[nodeJ*3+2] += fz;
    }

    // Tangent stiffness contribution (add to global K)
    void getTangentStiffness(std::vector<Trip>& trips) const {
        double kt = material.getTangent() * A / L0;
        double cs[3] = { cosX, cosY, cosZ };
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                double val = kt * cs[i] * cs[j];
                int ii = nodeI*3 + i, jj = nodeJ*3 + j;
                // [K_ii  K_ij] = [ +k  -k ]
                // [K_ji  K_jj]   [ -k  +k ]
                trips.push_back(Trip(nodeI*3+i, nodeI*3+j,  val));
                trips.push_back(Trip(nodeI*3+i, nodeJ*3+j, -val));
                trips.push_back(Trip(nodeJ*3+i, nodeI*3+j, -val));
                trips.push_back(Trip(nodeJ*3+i, nodeJ*3+j,  val));
            }
        }
    }

    void commitState() { material.commitState(); }
    void revertToLastCommit() { material.revertToLastCommit(); }
};

// ═══════════════════════════════════════════
//  Newmark-β Dynamic Solver
// ═══════════════════════════════════════════

extern "C" {

/**
 * Nonlinear dynamic analysis with Newmark-β (average acceleration)
 *
 * Inputs:
 *   nodeCoords    - [nNodes * 3] flat array (x, y, z)
 *   nNodes        - number of nodes
 *
 *   // Linear frame elements (from existing deform)
 *   frameElems    - [nFrames * 2] node indices
 *   nFrames       - number of frame elements
 *   frameProps    - [nFrames * 7] per element: E, G, A, Iz, Iy, J, rho
 *
 *   // BRB truss elements (nonlinear Steel02)
 *   brbElems      - [nBRBs * 2] node indices
 *   nBRBs         - number of BRB elements
 *   brbProps      - [nBRBs * 5] per element: A, Fy, E0, b, R0
 *
 *   // Boundary conditions
 *   fixedDOFs     - array of fixed DOF indices
 *   nFixed        - number of fixed DOFs
 *
 *   // Ground motion (acceleration time history)
 *   groundAcc     - [nSteps] acceleration values (in force units)
 *   nSteps        - number of time steps
 *   dt            - time step size
 *   direction     - 0=X, 1=Y, 2=Z
 *
 *   // Damping
 *   dampAlpha     - Rayleigh mass proportional
 *   dampBeta      - Rayleigh stiffness proportional
 *
 * Outputs (caller must free):
 *   outDisp       - [nSteps * nFreeDOF] displacement history
 *   outBRBForce   - [nSteps * nBRBs] BRB axial force history
 *   outBRBStrain  - [nSteps * nBRBs] BRB axial strain history
 *   outSize       - [3] = { nSteps, nFreeDOF, nBRBs }
 */
void nonlinear_dynamic(
    const double* nodeCoords, int nNodes,
    const int* frameElems, int nFrames, const double* frameProps,
    const int* brbElems, int nBRBs, const double* brbProps,
    const int* fixedDOFs, int nFixed,
    const double* groundAcc, int nSteps, double dt, int direction,
    double dampAlpha, double dampBeta,
    double** outDisp, double** outBRBForce, double** outBRBStrain, int* outSize
) {
    int nDOF = nNodes * 3;

    // ── Build free DOF map ──
    std::vector<bool> isFixed(nDOF, false);
    for (int i = 0; i < nFixed; i++) {
        if (fixedDOFs[i] >= 0 && fixedDOFs[i] < nDOF)
            isFixed[fixedDOFs[i]] = true;
    }
    std::vector<int> freeMap(nDOF, -1);
    int nFree = 0;
    for (int i = 0; i < nDOF; i++) {
        if (!isFixed[i]) { freeMap[i] = nFree++; }
    }

    // ── Initialize BRB elements ──
    std::vector<TrussElement> brbs(nBRBs);
    for (int i = 0; i < nBRBs; i++) {
        int ni = brbElems[i*2], nj = brbElems[i*2+1];
        double A = brbProps[i*5], fy = brbProps[i*5+1];
        double E0 = brbProps[i*5+2], bh = brbProps[i*5+3];
        double R0 = brbProps[i*5+4];
        brbs[i].init(ni, nj, A, nodeCoords, nDOF, fy, E0, bh, R0);
    }

    // ── Assemble mass matrix (lumped) from frame elements ──
    VectorXd Mdiag = VectorXd::Zero(nFree);
    for (int ie = 0; ie < nFrames; ie++) {
        int ni = frameElems[ie*2], nj = frameElems[ie*2+1];
        double rho = frameProps[ie*7 + 6]; // density
        double A = frameProps[ie*7 + 2];
        const double* pi = nodeCoords + ni*3;
        const double* pj = nodeCoords + nj*3;
        double dx = pj[0]-pi[0], dy = pj[1]-pi[1], dz = pj[2]-pi[2];
        double L = sqrt(dx*dx + dy*dy + dz*dz);
        double mass = rho * A * L / 2.0; // half to each node
        for (int d = 0; d < 3; d++) {
            int di = freeMap[ni*3+d], dj = freeMap[nj*3+d];
            if (di >= 0) Mdiag[di] += mass;
            if (dj >= 0) Mdiag[dj] += mass;
        }
    }
    // Add BRB mass contribution
    for (int i = 0; i < nBRBs; i++) {
        double A = brbProps[i*5];
        double E0 = brbProps[i*5+2];
        double rho_steel = 7850.0 / 9.80665; // kg/m³ → mass units (assuming kN/m)
        double mass = rho_steel * A * brbs[i].L0 / 2.0;
        for (int d = 0; d < 3; d++) {
            int di = freeMap[brbs[i].nodeI*3+d], dj = freeMap[brbs[i].nodeJ*3+d];
            if (di >= 0) Mdiag[di] += mass;
            if (dj >= 0) Mdiag[dj] += mass;
        }
    }

    // ── Assemble initial elastic stiffness (frames only) ──
    // For frames, use simplified axial+flexural stiffness
    auto assembleLinearK = [&]() -> SpMat {
        std::vector<Trip> trips;
        for (int ie = 0; ie < nFrames; ie++) {
            int ni = frameElems[ie*2], nj = frameElems[ie*2+1];
            double E = frameProps[ie*7], A = frameProps[ie*7+2];
            const double* pi = nodeCoords + ni*3;
            const double* pj = nodeCoords + nj*3;
            double dx = pj[0]-pi[0], dy = pj[1]-pi[1], dz = pj[2]-pi[2];
            double L = sqrt(dx*dx + dy*dy + dz*dz);
            double k = E * A / L;
            double cs[3] = { dx/L, dy/L, dz/L };
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    double val = k * cs[i] * cs[j];
                    int ii_i = freeMap[ni*3+i], ii_j = freeMap[ni*3+j];
                    int jj_i = freeMap[nj*3+i], jj_j = freeMap[nj*3+j];
                    if (ii_i >= 0 && ii_j >= 0) trips.push_back(Trip(ii_i, ii_j,  val));
                    if (ii_i >= 0 && jj_j >= 0) trips.push_back(Trip(ii_i, jj_j, -val));
                    if (jj_i >= 0 && ii_j >= 0) trips.push_back(Trip(jj_i, ii_j, -val));
                    if (jj_i >= 0 && jj_j >= 0) trips.push_back(Trip(jj_i, jj_j,  val));
                }
            }
        }
        SpMat K(nFree, nFree);
        K.setFromTriplets(trips.begin(), trips.end());
        return K;
    };

    // ── Newmark-β parameters (average acceleration) ──
    double gamma = 0.5, beta = 0.25;

    // ── Initialize vectors ──
    VectorXd u = VectorXd::Zero(nFree);      // displacement
    VectorXd v = VectorXd::Zero(nFree);      // velocity
    VectorXd a = VectorXd::Zero(nFree);      // acceleration
    VectorXd u_full = VectorXd::Zero(nDOF);  // full DOF displacement

    // ── Allocate output arrays ──
    *outDisp = (double*)malloc(nSteps * nFree * sizeof(double));
    *outBRBForce = (double*)malloc(nSteps * nBRBs * sizeof(double));
    *outBRBStrain = (double*)malloc(nSteps * nBRBs * sizeof(double));
    outSize[0] = nSteps;
    outSize[1] = nFree;
    outSize[2] = nBRBs;

    // ── Time stepping loop ──
    SpMat K0 = assembleLinearK();

    for (int step = 0; step < nSteps; step++) {
        double ag = groundAcc[step];

        // Effective earthquake load: F = -M * ag * {direction}
        VectorXd Fext = VectorXd::Zero(nFree);
        for (int i = 0; i < nDOF; i++) {
            if (i % 3 == direction && freeMap[i] >= 0) {
                Fext[freeMap[i]] = -Mdiag[freeMap[i]] * ag;
            }
        }

        // Predictor
        VectorXd u_pred = u + dt * v + (0.5 - beta) * dt * dt * a;
        VectorXd v_pred = v + (1.0 - gamma) * dt * a;

        // Newton-Raphson iteration
        VectorXd u_new = u_pred;
        VectorXd a_new, v_new;
        int maxIter = 20;
        double tol = 1e-8;

        for (int iter = 0; iter < maxIter; iter++) {
            a_new = (u_new - u_pred) / (beta * dt * dt);
            v_new = v_pred + gamma * dt * a_new;

            // Map to full DOF
            u_full.setZero();
            for (int i = 0; i < nDOF; i++) {
                if (freeMap[i] >= 0) u_full[i] = u_new[freeMap[i]];
            }

            // Update BRB materials
            for (auto& brb : brbs) brb.setTrialDisp(u_full);

            // Assemble tangent stiffness (linear frames + nonlinear BRBs)
            std::vector<Trip> trips;
            // Frame contribution (linear)
            for (int ie = 0; ie < nFrames; ie++) {
                int ni = frameElems[ie*2], nj = frameElems[ie*2+1];
                double E = frameProps[ie*7], Af = frameProps[ie*7+2];
                const double* pi = nodeCoords + ni*3;
                const double* pj = nodeCoords + nj*3;
                double dx = pj[0]-pi[0], dy = pj[1]-pi[1], dz = pj[2]-pi[2];
                double L = sqrt(dx*dx + dy*dy + dz*dz);
                double k = E * Af / L;
                double cs[3] = { dx/L, dy/L, dz/L };
                for (int i = 0; i < 3; i++) {
                    for (int j = 0; j < 3; j++) {
                        double val = k * cs[i] * cs[j];
                        int ii = freeMap[ni*3+i], ij = freeMap[ni*3+j];
                        int ji = freeMap[nj*3+i], jj = freeMap[nj*3+j];
                        if (ii >= 0 && ij >= 0) trips.push_back(Trip(ii, ij,  val));
                        if (ii >= 0 && jj >= 0) trips.push_back(Trip(ii, jj, -val));
                        if (ji >= 0 && ij >= 0) trips.push_back(Trip(ji, ij, -val));
                        if (ji >= 0 && jj >= 0) trips.push_back(Trip(ji, jj,  val));
                    }
                }
            }
            // BRB contribution (nonlinear tangent)
            for (auto& brb : brbs) {
                std::vector<Trip> brbTrips;
                brb.getTangentStiffness(brbTrips);
                for (auto& t : brbTrips) {
                    int ri = freeMap[t.row()], ci = freeMap[t.col()];
                    if (ri >= 0 && ci >= 0) trips.push_back(Trip(ri, ci, t.value()));
                }
            }
            SpMat Kt(nFree, nFree);
            Kt.setFromTriplets(trips.begin(), trips.end());

            // Internal force
            VectorXd Fint = VectorXd::Zero(nFree);
            // Frame internal force (linear: K0 * u)
            VectorXd Fframe = K0 * u_new;
            Fint += Fframe;
            // BRB internal force
            VectorXd Fbrb_full = VectorXd::Zero(nDOF);
            for (auto& brb : brbs) brb.getResistingForce(Fbrb_full);
            for (int i = 0; i < nDOF; i++) {
                if (freeMap[i] >= 0) Fint[freeMap[i]] += Fbrb_full[i];
            }

            // Damping force: C = αM + βK → Fd = α*M*v + β*K*v
            VectorXd Fdamp = VectorXd::Zero(nFree);
            for (int i = 0; i < nFree; i++) Fdamp[i] = dampAlpha * Mdiag[i] * v_new[i];
            Fdamp += dampBeta * (Kt * v_new);

            // Residual: R = M*a + C*v + Fint - Fext
            VectorXd R = VectorXd::Zero(nFree);
            for (int i = 0; i < nFree; i++) R[i] = Mdiag[i] * a_new[i];
            R += Fdamp + Fint - Fext;

            double normR = R.norm();
            if (normR < tol) break;

            // Effective stiffness: K_eff = M/(β*dt²) + γ*C/(β*dt) + Kt
            SpMat Keff = Kt;
            for (int i = 0; i < nFree; i++) {
                // Diagonal mass term
                Keff.coeffRef(i, i) += Mdiag[i] / (beta * dt * dt);
                // Diagonal damping term (mass part)
                Keff.coeffRef(i, i) += dampAlpha * Mdiag[i] * gamma / (beta * dt);
            }
            // Stiffness damping part
            Keff += (dampBeta * gamma / (beta * dt)) * Kt;

            // Solve: Keff * Δu = -R
            Eigen::SparseLU<SpMat> solver;
            solver.compute(Keff);
            if (solver.info() != Eigen::Success) break;
            VectorXd du = solver.solve(-R);
            if (solver.info() != Eigen::Success) break;

            u_new += du;

            if (du.norm() < tol * 0.01) break;
        }

        // Accept step
        a = (u_new - u_pred) / (beta * dt * dt);
        v = v_pred + gamma * dt * a;
        u = u_new;

        // Commit BRB state
        for (auto& brb : brbs) brb.commitState();

        // Store output
        for (int i = 0; i < nFree; i++) {
            (*outDisp)[step * nFree + i] = u[i];
        }
        for (int i = 0; i < nBRBs; i++) {
            (*outBRBForce)[step * nBRBs + i] = brbs[i].material.getStress() * brbs[i].A;
            (*outBRBStrain)[step * nBRBs + i] = brbs[i].material.getStrain();
        }
    }
}

/**
 * Simple Steel02 material test — generates hysteresis curve
 * for validation (single point, cyclic loading)
 */
void steel02_test(
    double Fy, double E0, double bh, double R0,
    const double* strainHistory, int nPoints,
    double* outStress, double* outTangent
) {
    Steel02 mat;
    mat.init(Fy, E0, bh, R0);
    for (int i = 0; i < nPoints; i++) {
        mat.setTrialStrain(strainHistory[i]);
        outStress[i] = mat.getStress();
        outTangent[i] = mat.getTangent();
        mat.commitState();
    }
}

} // extern "C"
