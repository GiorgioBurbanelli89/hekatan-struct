// =============================================================================
// Concrete02 — Concrete Material with Linear Tension Softening
// Based on OpenSees Concrete02 (Kent-Park + tension)
//
// Compression: parabolic ascending + linear descending (Modified Kent-Park)
// Tension: linear elastic + linear softening
//
// Parameters:
//   fpc  - compressive strength (negative value, e.g. -30 MPa)
//   epsc0 - strain at fpc (negative, e.g. -0.002)
//   fpcu - ultimate compressive stress (negative, e.g. -6 MPa)
//   epsU - ultimate strain (negative, e.g. -0.005)
//   ft   - tensile strength (positive, e.g. 3 MPa)
//   Ets  - tension softening modulus (positive slope after cracking)
//
// Standalone: no OpenSees dependencies
// =============================================================================

#ifndef CONCRETE02_H
#define CONCRETE02_H

#include <cmath>

struct Concrete02Material {
    // Input parameters
    double fpc;    // compressive strength (< 0)
    double epsc0;  // strain at fpc (< 0)
    double fpcu;   // residual compressive stress (< 0)
    double epsU;   // ultimate strain (< 0)
    double ft;     // tensile strength (> 0)
    double Ets;    // tension softening slope (> 0)

    // Derived
    double Ec;     // initial tangent modulus
    double rat;    // fpcu/fpc ratio
    double ept;    // tension cracking strain

    // State variables (committed)
    double cStrain;
    double cStress;
    double cTangent;

    // History (envelope tracking)
    double cMinStrain;   // minimum strain ever reached (most compressive)
    double cMaxStrain;   // maximum strain ever reached (most tensile)
    double cUnloadSlope; // unloading slope in compression
    double cEndStrain;   // strain at which unloading reaches zero stress

    // Trial state
    double tStrain;
    double tStress;
    double tTangent;
    double tMinStrain;
    double tMaxStrain;
    double tUnloadSlope;
    double tEndStrain;

    void init(double _fpc, double _epsc0, double _fpcu, double _epsU,
              double _ft, double _Ets) {
        // fpc should be negative
        fpc = (_fpc > 0) ? -_fpc : _fpc;
        epsc0 = (_epsc0 > 0) ? -_epsc0 : _epsc0;
        fpcu = (_fpcu > 0) ? -_fpcu : _fpcu;
        epsU = (_epsU > 0) ? -_epsU : _epsU;
        ft = (_ft < 0) ? -_ft : _ft;
        Ets = (_Ets < 0) ? -_Ets : _Ets;

        Ec = 2.0 * fpc / epsc0;  // initial tangent (secant to peak)
        rat = fpcu / fpc;
        ept = ft / Ec;  // cracking strain

        // Initialize state
        cStrain = 0.0;
        cStress = 0.0;
        cTangent = Ec;
        cMinStrain = 0.0;
        cMaxStrain = 0.0;
        cUnloadSlope = Ec;
        cEndStrain = 0.0;

        tStrain = 0.0;
        tStress = 0.0;
        tTangent = Ec;
        tMinStrain = 0.0;
        tMaxStrain = 0.0;
        tUnloadSlope = Ec;
        tEndStrain = 0.0;
    }

    // Compression envelope (Modified Kent-Park)
    void compEnvelope(double strain, double &stress, double &tangent) {
        if (strain >= epsc0) {
            // Ascending parabola: sigma = fpc * [2*(eps/eps0) - (eps/eps0)^2]
            double eta = strain / epsc0;
            stress = fpc * (2.0 * eta - eta * eta);
            tangent = fpc * 2.0 / epsc0 * (1.0 - eta);
        } else if (strain >= epsU) {
            // Linear descending from (epsc0, fpc) to (epsU, fpcu)
            double slope = (fpcu - fpc) / (epsU - epsc0);
            stress = fpc + slope * (strain - epsc0);
            tangent = slope;
        } else {
            // Beyond ultimate: residual
            stress = fpcu;
            tangent = 1e-10;
        }
    }

    void setTrialStrain(double strain) {
        // Reset trial to committed
        tMinStrain = cMinStrain;
        tMaxStrain = cMaxStrain;
        tUnloadSlope = cUnloadSlope;
        tEndStrain = cEndStrain;
        tStrain = strain;

        double dStrain = strain - cStrain;
        if (std::abs(dStrain) < 1e-18) {
            tStress = cStress;
            tTangent = cTangent;
            return;
        }

        // Track min/max
        if (strain < tMinStrain) tMinStrain = strain;
        if (strain > tMaxStrain) tMaxStrain = strain;

        if (strain <= 0.0) {
            // ── COMPRESSION ZONE ──
            if (strain <= tMinStrain) {
                // On the compression envelope
                compEnvelope(strain, tStress, tTangent);

                // Update unloading slope from this point
                if (strain < epsc0) {
                    double envStress, envTangent;
                    compEnvelope(tMinStrain, envStress, envTangent);
                    tUnloadSlope = envStress / tMinStrain;
                    if (tUnloadSlope > Ec) tUnloadSlope = Ec;
                    if (tUnloadSlope < Ec * 0.01) tUnloadSlope = Ec * 0.01;
                } else {
                    tUnloadSlope = Ec;
                }
                tEndStrain = strain - tStress / tUnloadSlope;
            } else if (strain <= tEndStrain) {
                // Unloading/reloading in compression
                tStress = tUnloadSlope * (strain - tEndStrain);
                tTangent = tUnloadSlope;
            } else {
                // Between endStrain and 0: transition zone
                tStress = 0.0;
                tTangent = 1e-10;
            }
        } else {
            // ── TENSION ZONE ──
            if (strain <= ept) {
                // Linear elastic in tension
                tStress = Ec * strain;
                tTangent = Ec;
            } else {
                // Post-cracking: linear softening
                tStress = ft - Ets * (strain - ept);
                tTangent = -Ets;
                if (tStress < 0.0) {
                    tStress = 0.0;
                    tTangent = 1e-10;
                }
            }

            // If previously compressed, reduce tension capacity
            if (tMinStrain < epsc0 * 0.5) {
                double reductionFactor = 1.0 + tMinStrain / epsc0;
                if (reductionFactor < 0.0) reductionFactor = 0.0;
                if (reductionFactor > 1.0) reductionFactor = 1.0;
                tStress *= reductionFactor;
            }
        }
    }

    double getStress() const { return tStress; }
    double getTangent() const { return tTangent; }
    double getStrain() const { return tStrain; }

    void commitState() {
        cStrain = tStrain;
        cStress = tStress;
        cTangent = tTangent;
        cMinStrain = tMinStrain;
        cMaxStrain = tMaxStrain;
        cUnloadSlope = tUnloadSlope;
        cEndStrain = tEndStrain;
    }

    void revertToLastCommit() {
        tStrain = cStrain;
        tStress = cStress;
        tTangent = cTangent;
        tMinStrain = cMinStrain;
        tMaxStrain = cMaxStrain;
        tUnloadSlope = cUnloadSlope;
        tEndStrain = cEndStrain;
    }
};

#endif // CONCRETE02_H
