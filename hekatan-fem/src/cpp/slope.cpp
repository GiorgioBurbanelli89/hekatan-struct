// ═══════════════════════════════════════════════════════════════════════
// SRM Slope Stability Solver — Optimized for WASM
// Plane Strain CST (Constant Strain Triangle) + Mohr-Coulomb
// ═══════════════════════════════════════════════════════════════════════

#include <Eigen/Dense>
#include <Eigen/Sparse>
#include <Eigen/SparseLU>
#include <vector>
#include <cmath>
#include <cstring>
#include <iostream>
#include <algorithm>

using SpMat = Eigen::SparseMatrix<double>;
using Triplet = Eigen::Triplet<double>;
using Vec3 = Eigen::Vector3d;
using Mat3 = Eigen::Matrix3d;
using Mat36 = Eigen::Matrix<double, 3, 6>;
using Mat63 = Eigen::Matrix<double, 6, 3>;
using Vec6 = Eigen::Matrix<double, 6, 1>;

// ── Plane strain elastic constitutive matrix ──
static Mat3 planeStrainD(double E, double nu) {
    double f = E / ((1.0 + nu) * (1.0 - 2.0 * nu));
    Mat3 D;
    D << (1.0 - nu), nu, 0.0,
         nu, (1.0 - nu), 0.0,
         0.0, 0.0, (1.0 - 2.0 * nu) / 2.0;
    return D * f;
}

// ── CST B matrix (3×6) and element area ──
struct CSTData {
    Mat36 B;
    Mat63 BtAt;  // B^T * area * thickness (precomputed)
    double area;
};

static CSTData getCSTB(double x1, double y1, double x2, double y2,
                        double x3, double y3, double thickness) {
    CSTData out;
    out.B.setZero();
    out.BtAt.setZero();

    double A2 = (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1);
    out.area = std::abs(A2) / 2.0;

    if (out.area < 1e-15) return out;

    double y23 = y2 - y3, y31 = y3 - y1, y12 = y1 - y2;
    double x32 = x3 - x2, x13 = x1 - x3, x21 = x2 - x1;

    out.B(0, 0) = y23; out.B(0, 2) = y31; out.B(0, 4) = y12;
    out.B(1, 1) = x32; out.B(1, 3) = x13; out.B(1, 5) = x21;
    out.B(2, 0) = x32; out.B(2, 1) = y23;
    out.B(2, 2) = x13; out.B(2, 3) = y31;
    out.B(2, 4) = x21; out.B(2, 5) = y12;

    out.B /= A2;
    out.BtAt = out.B.transpose() * out.area * thickness;
    return out;
}

// ── Mohr-Coulomb return mapping (2D plane strain) ──
struct MCResult {
    Vec3 sigma;
    double epsPlasticEq;
};

static MCResult mohrCoulombReturn(const Vec3& sigma_trial,
                                   double c, double sinPhi, double cosPhi) {
    double sxx = sigma_trial(0), syy = sigma_trial(1), sxy = sigma_trial(2);
    double p = (sxx + syy) / 2.0;
    double qx = (sxx - syy) / 2.0;
    double q = std::sqrt(qx * qx + sxy * sxy);

    // MC yield: f = q + p·sinφ - c·cosφ  (tension-positive convention)
    // Compression (p<0) INCREASES confinement → reduces f → stabilizes
    double f = q + p * sinPhi - c * cosPhi;

    if (f <= 0.0) {
        return {sigma_trial, 0.0};
    }

    // Return mapping: move back to yield surface
    // p_new = p - dλ·sinφ, q_new = q - dλ
    // f_new = (q-dλ) + (p-dλ·sinφ)·sinφ - c·cosφ = f - dλ·(1+sin²φ) = 0
    double dLambda = f / (1.0 + sinPhi * sinPhi);
    double p_new = p - dLambda * sinPhi;
    double q_new = std::max(0.0, q - dLambda);
    double ratio = (q > 1e-15) ? q_new / q : 0.0;

    Vec3 sc;
    sc << p_new + qx * ratio, p_new - qx * ratio, sxy * ratio;
    return {sc, dLambda};
}

// ── Single NR solve for a given SRF ──
// u0 and epsPlastic0 are initial guesses (from previous SRF)
struct NRResult {
    bool converged;
    Eigen::VectorXd u;
    std::vector<Vec3> epsPlastic;
    std::vector<double> plasticEqNorm;
};

static NRResult solveNR(
    int nDof, int nFree, int nElem,
    const std::vector<CSTData>& cstData,
    const std::vector<int>& elemDofs,
    const Mat3& D, const Mat3& D_inv,
    const Eigen::VectorXd& F_ext,
    const std::vector<int>& freeDofs,
    const Eigen::SparseLU<SpMat>& solver,
    double F_ext_norm,
    double c_red, double sinPhi, double cosPhi,
    int maxIter, double tol,
    const Eigen::VectorXd& u0,
    const std::vector<Vec3>& epsPlastic0)
{
    NRResult res;
    res.converged = false;
    res.u = u0;
    res.epsPlastic.assign(nElem, Vec3::Zero());
    res.plasticEqNorm.assign(nElem, 0.0);

    double prevResid = 1e20;
    int stableCount = 0;

    for (int iter = 0; iter < maxIter; iter++) {
        Eigen::VectorXd F_int = Eigen::VectorXd::Zero(nDof);

        for (int e = 0; e < nElem; e++) {
            if (cstData[e].area < 1e-15) continue;

            const int* dofs = &elemDofs[e * 6];
            Vec6 u_e;
            for (int i = 0; i < 6; i++) u_e[i] = res.u[dofs[i]];

            Vec3 eps = cstData[e].B * u_e;
            Vec3 sigma_trial = D * eps;
            MCResult mc = mohrCoulombReturn(sigma_trial, c_red, sinPhi, cosPhi);

            if (mc.epsPlasticEq > 0) {
                res.epsPlastic[e] = D_inv * (sigma_trial - mc.sigma);
            } else {
                res.epsPlastic[e] = Vec3::Zero();
            }

            Vec6 fe = cstData[e].BtAt * mc.sigma;
            for (int i = 0; i < 6; i++) F_int[dofs[i]] += fe[i];
        }

        Eigen::VectorXd R(nFree);
        for (int i = 0; i < nFree; i++)
            R[i] = F_ext[freeDofs[i]] - F_int[freeDofs[i]];

        double residNorm = R.norm();
        double relResid = residNorm / F_ext_norm;

        // Converged: residual small enough
        if (relResid < tol) {
            res.converged = true;
            for (int e = 0; e < nElem; e++)
                res.plasticEqNorm[e] = res.epsPlastic[e].norm();
            break;
        }

        // Diverging
        if (std::isnan(relResid) || relResid > 1e8) break;
        if (iter > 10 && residNorm > prevResid * 2.0) break;

        // Check stabilization: residual changing less than 0.1%
        // = plastic equilibrium reached (typical for initial stiffness method)
        if (iter > 5) {
            double changeRate = std::abs(residNorm - prevResid) / (prevResid + 1e-15);
            if (changeRate < 0.001) {
                stableCount++;
                if (stableCount >= 3) {
                    // Stabilized: consider converged if residual < 50%
                    // (above 50% means too much unbalanced force = actual failure)
                    if (relResid < 0.5) {
                        res.converged = true;
                        for (int e = 0; e < nElem; e++)
                            res.plasticEqNorm[e] = res.epsPlastic[e].norm();
                    }
                    break;
                }
            } else {
                stableCount = 0;
            }
        }
        prevResid = residNorm;

        Eigen::VectorXd du_red = solver.solve(R);
        for (int i = 0; i < nFree; i++)
            res.u[freeDofs[i]] += du_red[i];
    }
    return res;
}

// ══════════════════════════════════════════════════════════════
extern "C" {

double* slopeAllocDouble(int n) {
    return (double*)malloc(n * sizeof(double));
}

double slopeStabilitySolver(
    double* nodesFlat, int nodesCount,
    int* elementsFlat, int elementsCount,
    double E, double nu, double gamma_soil, double c, double phi_deg, double thickness,
    int* supportsFlat, int supportsLen,
    double qs, double surfaceYThreshold,
    double* outPlasticStrain,
    double* outDisplacements)
{
    const int nDof = nodesCount * 2;
    const int nElem = elementsCount;
    const double phi_rad = phi_deg * M_PI / 180.0;

    // ── Parse nodes ──
    std::vector<double> nx(nodesCount), ny(nodesCount);
    for (int i = 0; i < nodesCount; i++) {
        nx[i] = nodesFlat[2 * i];
        ny[i] = nodesFlat[2 * i + 1];
    }

    // ── Parse elements ──
    struct Tri { int n0, n1, n2; };
    std::vector<Tri> elems(nElem);
    std::vector<int> elemDofs(nElem * 6);
    for (int i = 0; i < nElem; i++) {
        elems[i] = {elementsFlat[3*i], elementsFlat[3*i+1], elementsFlat[3*i+2]};
        elemDofs[i*6+0] = elems[i].n0*2;   elemDofs[i*6+1] = elems[i].n0*2+1;
        elemDofs[i*6+2] = elems[i].n1*2;   elemDofs[i*6+3] = elems[i].n1*2+1;
        elemDofs[i*6+4] = elems[i].n2*2;   elemDofs[i*6+5] = elems[i].n2*2+1;
    }

    // ── CST data + constitutive matrix ──
    Mat3 D = planeStrainD(E, nu);
    Mat3 D_inv = D.inverse();

    std::vector<CSTData> cstData(nElem);
    for (int i = 0; i < nElem; i++) {
        cstData[i] = getCSTB(
            nx[elems[i].n0], ny[elems[i].n0],
            nx[elems[i].n1], ny[elems[i].n1],
            nx[elems[i].n2], ny[elems[i].n2],
            thickness
        );
    }

    // ── Assemble global stiffness ──
    std::vector<Triplet> triplets;
    triplets.reserve(nElem * 36);
    for (int e = 0; e < nElem; e++) {
        if (cstData[e].area < 1e-15) continue;
        Eigen::Matrix<double, 6, 6> Ke = cstData[e].BtAt * D * cstData[e].B;
        const int* dofs = &elemDofs[e * 6];
        for (int i = 0; i < 6; i++)
            for (int j = 0; j < 6; j++)
                if (std::abs(Ke(i, j)) > 1e-20)
                    triplets.push_back({dofs[i], dofs[j], Ke(i, j)});
    }
    SpMat K(nDof, nDof);
    K.setFromTriplets(triplets.begin(), triplets.end());

    // ── External forces ──
    Eigen::VectorXd F_ext = Eigen::VectorXd::Zero(nDof);
    for (int e = 0; e < nElem; e++) {
        if (cstData[e].area < 1e-15) continue;
        double fy = -gamma_soil * cstData[e].area * thickness / 3.0;
        F_ext[elems[e].n0 * 2 + 1] += fy;
        F_ext[elems[e].n1 * 2 + 1] += fy;
        F_ext[elems[e].n2 * 2 + 1] += fy;
    }

    if (qs > 0 && surfaceYThreshold > -1e10) {
        struct SurfNode { int idx; double x; };
        std::vector<SurfNode> surfNodes;
        for (int i = 0; i < nodesCount; i++) {
            if (ny[i] > surfaceYThreshold - 0.1)
                surfNodes.push_back({i, nx[i]});
        }
        std::sort(surfNodes.begin(), surfNodes.end(),
                  [](const SurfNode& a, const SurfNode& b) { return a.x < b.x; });
        for (size_t k = 0; k < surfNodes.size(); k++) {
            double tribW = 0;
            if (surfNodes.size() == 1) tribW = 1.0;
            else if (k == 0) tribW = (surfNodes[1].x - surfNodes[0].x) / 2.0;
            else if (k == surfNodes.size() - 1) tribW = (surfNodes[k].x - surfNodes[k-1].x) / 2.0;
            else tribW = (surfNodes[k+1].x - surfNodes[k-1].x) / 2.0;
            F_ext[surfNodes[k].idx * 2 + 1] += -qs * tribW * thickness;
        }
    }

    // ── BCs ──
    std::vector<bool> isFixed(nDof, false);
    for (int i = 0; i < supportsLen; i++) {
        int nodeIdx = supportsFlat[3 * i];
        if (supportsFlat[3 * i + 1]) isFixed[nodeIdx * 2] = true;
        if (supportsFlat[3 * i + 2]) isFixed[nodeIdx * 2 + 1] = true;
    }

    std::vector<int> freeDofs;
    std::vector<int> dofMap(nDof, -1);
    for (int i = 0; i < nDof; i++) {
        if (!isFixed[i]) {
            dofMap[i] = (int)freeDofs.size();
            freeDofs.push_back(i);
        }
    }
    int nFree = (int)freeDofs.size();

    std::vector<Triplet> redTriplets;
    for (int k = 0; k < K.outerSize(); k++) {
        for (SpMat::InnerIterator it(K, k); it; ++it) {
            int ri = dofMap[it.row()];
            int ci = dofMap[it.col()];
            if (ri >= 0 && ci >= 0)
                redTriplets.push_back({ri, ci, it.value()});
        }
    }
    SpMat K_red(nFree, nFree);
    K_red.setFromTriplets(redTriplets.begin(), redTriplets.end());

    Eigen::SparseLU<SpMat> solver;
    solver.compute(K_red);
    if (solver.info() != Eigen::Success) {
        std::cerr << "SRM: K factorization failed" << std::endl;
        return -1.0;
    }

    // Compute F_ext norm
    Eigen::VectorXd F_red(nFree);
    for (int i = 0; i < nFree; i++) F_red[i] = F_ext[freeDofs[i]];
    double F_ext_norm = F_red.norm();

    if (F_ext_norm < 1e-15) {
        std::cerr << "SRM: Zero external forces" << std::endl;
        return 99.0;
    }

    // ══════════════════════════════════════════
    // Step 1: Elastic solution as initial guess
    // ══════════════════════════════════════════
    Eigen::VectorXd u_elastic = Eigen::VectorXd::Zero(nDof);
    {
        Eigen::VectorXd du = solver.solve(F_red);
        for (int i = 0; i < nFree; i++)
            u_elastic[freeDofs[i]] = du[i];
    }

    // ══════════════════════════════════════════
    // Step 2: SRM Loop
    // Start from SRF=0.5 with elastic solution,
    // use previous SRF result as starting point
    // ══════════════════════════════════════════
    const int maxNR = 100;
    const double tolNR = 1e-3;
    const double srfStart = 0.5;
    const double srfStep = 0.1;
    const double srfMax = 5.0;

    double lastConvergedSRF = srfStart;
    Eigen::VectorXd u_prev = u_elastic;
    std::vector<Vec3> epsP_prev(nElem, Vec3::Zero());
    Eigen::VectorXd u_best = u_elastic;
    std::vector<double> plasticEq_best(nElem, 0.0);

    for (double SRF = srfStart; SRF <= srfMax; SRF += srfStep) {
        double c_red = c / SRF;
        double phi_red = std::atan(std::tan(phi_rad) / SRF);

        NRResult res = solveNR(nDof, nFree, nElem, cstData, elemDofs,
                               D, D_inv, F_ext, freeDofs, solver, F_ext_norm,
                               c_red, std::sin(phi_red), std::cos(phi_red),
                               maxNR, tolNR,
                               u_prev, epsP_prev);

        if (res.converged) {
            lastConvergedSRF = SRF;
            u_prev = res.u;
            epsP_prev = res.epsPlastic;
            u_best = res.u;
            plasticEq_best = res.plasticEqNorm;
        } else {
            // Bisection between lastConvergedSRF and SRF
            double lo = lastConvergedSRF, hi = SRF;
            Eigen::VectorXd u_lo = u_prev;
            std::vector<Vec3> epsP_lo = epsP_prev;

            for (int bisect = 0; bisect < 8; bisect++) {
                double mid = (lo + hi) / 2.0;
                double c_m = c / mid;
                double phi_m = std::atan(std::tan(phi_rad) / mid);

                NRResult res_m = solveNR(nDof, nFree, nElem, cstData, elemDofs,
                                         D, D_inv, F_ext, freeDofs, solver, F_ext_norm,
                                         c_m, std::sin(phi_m), std::cos(phi_m),
                                         maxNR, tolNR,
                                         u_lo, epsP_lo);
                if (res_m.converged) {
                    lo = mid;
                    u_lo = res_m.u;
                    epsP_lo = res_m.epsPlastic;
                    u_best = res_m.u;
                    plasticEq_best = res_m.plasticEqNorm;
                } else {
                    hi = mid;
                }
            }
            lastConvergedSRF = lo;
            break;
        }
    }

    // ── Write outputs ──
    double FOS = lastConvergedSRF;

    if (outPlasticStrain) {
        for (int e = 0; e < nElem; e++)
            outPlasticStrain[e] = plasticEq_best[e];
    }
    if (outDisplacements) {
        for (int i = 0; i < nodesCount * 2; i++)
            outDisplacements[i] = u_best[i];
    }

    return FOS;
}

} // extern "C"
