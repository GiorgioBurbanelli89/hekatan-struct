#pragma once
// H8 (hexaedro de 8 nudos, 3 gdl por nudo) para el ensamblador COMUN
// (`getGlobalStiffnessMatrix`), de modo que los solidos convivan con barras y
// cascaras en la misma K (deform y modal). Es la misma formulacion que
// `hex8_wasm.cpp` (hex8Solve): Gauss 2x2x2 y, por defecto, los 9 modos
// incompatibles de Wilson-Taylor (J0 del centro), que es lo que hace SAP2000.
// Orden de nudos: antihorario abajo (z-) y antihorario arriba (z+), como el
// `hex ID n1..n8` del .heks. Header-only para que lo linke tambien el nativo
// (`build_modal_native.sh` no lleva hex8_wasm.cpp).
#include <Eigen/Dense>
#include <cmath>

namespace hk8 {

static const double XI[8][3] = {
    {-1, -1, -1}, {+1, -1, -1}, {+1, +1, -1}, {-1, +1, -1},
    {-1, -1, +1}, {+1, -1, +1}, {+1, +1, +1}, {-1, +1, +1},
};
static const double GP = 0.5773502691896258;
static const double GAUSS[8][3] = {
    {-GP, -GP, -GP}, {+GP, -GP, -GP}, {+GP, +GP, -GP}, {-GP, +GP, -GP},
    {-GP, -GP, +GP}, {+GP, -GP, +GP}, {+GP, +GP, +GP}, {-GP, +GP, +GP},
};

inline Eigen::Matrix<double, 3, 8> dNnat(double xi, double eta, double zeta) {
    Eigen::Matrix<double, 3, 8> dN;
    for (int i = 0; i < 8; i++) {
        const double a = XI[i][0], b = XI[i][1], c = XI[i][2];
        dN(0, i) = (a / 8.0) * (1 + b * eta) * (1 + c * zeta);
        dN(1, i) = (b / 8.0) * (1 + a * xi) * (1 + c * zeta);
        dN(2, i) = (c / 8.0) * (1 + a * xi) * (1 + b * eta);
    }
    return dN;
}

inline Eigen::Matrix<double, 6, 6> Dmat(double E, double nu) {
    const double lambda = (E * nu) / ((1 + nu) * (1 - 2 * nu));
    const double mu = E / (2 * (1 + nu));
    Eigen::Matrix<double, 6, 6> D = Eigen::Matrix<double, 6, 6>::Zero();
    D(0, 0) = D(1, 1) = D(2, 2) = lambda + 2 * mu;
    D(0, 1) = D(0, 2) = D(1, 0) = D(1, 2) = D(2, 0) = D(2, 1) = lambda;
    D(3, 3) = D(4, 4) = D(5, 5) = mu;
    return D;
}

/** B 6x(3n) a partir de las derivadas cartesianas g (3 x n). */
template <int N>
inline Eigen::Matrix<double, 6, 3 * N> Bmat(const Eigen::Matrix<double, 3, N> &g) {
    Eigen::Matrix<double, 6, 3 * N> B = Eigen::Matrix<double, 6, 3 * N>::Zero();
    for (int i = 0; i < N; i++) {
        const double gx = g(0, i), gy = g(1, i), gz = g(2, i);
        const int c = 3 * i;
        B(0, c) = gx; B(1, c + 1) = gy; B(2, c + 2) = gz;
        B(3, c) = gy; B(3, c + 1) = gx;
        B(4, c + 1) = gz; B(4, c + 2) = gy;
        B(5, c) = gz; B(5, c + 2) = gx;
    }
    return B;
}

/**
 * K 24x24 del H8. `X[i]` = coordenadas del nudo i. `incompatible` = los 9 modos
 * de Wilson-Taylor condensados (como SAP2000 con "incompatible bending modes").
 */
inline Eigen::Matrix<double, 24, 24> stiffness(const double X[8][3], double E, double nu, bool incompatible) {
    Eigen::Matrix<double, 8, 3> Xm;
    for (int i = 0; i < 8; i++) for (int d = 0; d < 3; d++) Xm(i, d) = X[i][d];
    const Eigen::Matrix<double, 6, 6> D = Dmat(E, nu);
    Eigen::Matrix<double, 24, 24> Kuu = Eigen::Matrix<double, 24, 24>::Zero();
    Eigen::Matrix<double, 24, 9> Kua = Eigen::Matrix<double, 24, 9>::Zero();
    Eigen::Matrix<double, 9, 9> Kaa = Eigen::Matrix<double, 9, 9>::Zero();
    // J0 en el centro (para los modos incompatibles, Taylor et al.)
    const Eigen::Matrix3d J0 = dNnat(0, 0, 0) * Xm;
    const double detJ0 = J0.determinant();
    const Eigen::Matrix3d J0inv = J0.inverse();
    for (int g = 0; g < 8; g++) {
        const double xi = GAUSS[g][0], eta = GAUSS[g][1], zeta = GAUSS[g][2];
        const Eigen::Matrix<double, 3, 8> dN = dNnat(xi, eta, zeta);
        const Eigen::Matrix3d J = dN * Xm;          // J(d, k) = sum_i dN(d,i) X(i,k)
        const double detJ = J.determinant();
        const Eigen::Matrix<double, 3, 8> gN = J.inverse() * dN;
        const Eigen::Matrix<double, 6, 24> B = Bmat<8>(gN);
        Kuu += B.transpose() * D * B * detJ;
        if (incompatible) {
            // dP_m/d(nat) = -2 * coord_m (solo la diagonal), llevado a xyz con J0 y
            // escalado por detJ0/detJ (Taylor, Beresford & Wilson 1976)
            Eigen::Matrix<double, 3, 3> dPnat = Eigen::Matrix<double, 3, 3>::Zero();
            dPnat(0, 0) = -2.0 * xi; dPnat(1, 1) = -2.0 * eta; dPnat(2, 2) = -2.0 * zeta;
            const Eigen::Matrix<double, 3, 3> dP = (detJ0 / detJ) * (J0inv * dPnat);   // [xyz][modo]
            const Eigen::Matrix<double, 6, 9> Ba = Bmat<3>(dP);
            Kua += B.transpose() * D * Ba * detJ;
            Kaa += Ba.transpose() * D * Ba * detJ;
        }
    }
    if (!incompatible) return Kuu;
    const Eigen::Matrix<double, 9, 24> Gm = -Kaa.inverse() * Kua.transpose();
    return Kuu + Kua * Gm;
}

/** Volumen del H8 (suma de |J| en los 8 puntos de Gauss). */
inline double volume(const double X[8][3]) {
    Eigen::Matrix<double, 8, 3> Xm;
    for (int i = 0; i < 8; i++) for (int d = 0; d < 3; d++) Xm(i, d) = X[i][d];
    double V = 0.0;
    for (int g = 0; g < 8; g++) {
        const Eigen::Matrix3d J = dNnat(GAUSS[g][0], GAUSS[g][1], GAUSS[g][2]) * Xm;
        V += std::abs(J.determinant());
    }
    return V;
}

} // namespace hk8
