"""Hexaedro H8 (8 nudos, 3 GDL por nudo) — espejo exacto de `hex8_wasm.cpp`:
Gauss 2×2×2, D isótropa (Lamé) y los 9 modos INCOMPATIBLES de Wilson–Taylor
condensados (`incompatible=True`, el defecto de SAP2000 y del WASM). Numeración:
0-1-2-3 la cara inferior antihoraria vista desde +z, 4-5-6-7 la superior.
"""
from __future__ import annotations

import numpy as np

_NODE_XI = np.array([[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
                     [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]], float)
_G = 0.5773502691896258
_GAUSS = np.array([[sx * _G, sy * _G, sz * _G] for sz in (-1, 1) for sy in (-1, 1) for sx in (-1, 1)])


def _dN_nat(xi: float, eta: float, zeta: float) -> np.ndarray:
    """dN/d(xi,eta,zeta): 3×8."""
    dN = np.zeros((3, 8))
    for i in range(8):
        xi_i, eta_i, zeta_i = _NODE_XI[i]
        dN[0, i] = (xi_i / 8.0) * (1 + eta_i * eta) * (1 + zeta_i * zeta)
        dN[1, i] = (eta_i / 8.0) * (1 + xi_i * xi) * (1 + zeta_i * zeta)
        dN[2, i] = (zeta_i / 8.0) * (1 + xi_i * xi) * (1 + eta_i * eta)
    return dN


def _B(dNxyz: np.ndarray) -> np.ndarray:
    B = np.zeros((6, 24))
    for i in range(8):
        dx, dy, dz = dNxyz[:, i]
        c = 3 * i
        B[0, c] = dx
        B[1, c + 1] = dy
        B[2, c + 2] = dz
        B[3, c] = dy; B[3, c + 1] = dx
        B[4, c + 1] = dz; B[4, c + 2] = dy
        B[5, c] = dz; B[5, c + 2] = dx
    return B


def d_matrix(E: float, nu: float) -> np.ndarray:
    lam = E * nu / ((1 + nu) * (1 - 2 * nu))
    mu = E / (2 * (1 + nu))
    D = np.zeros((6, 6))
    D[:3, :3] = lam
    D[0, 0] = D[1, 1] = D[2, 2] = lam + 2 * mu
    D[3, 3] = D[4, 4] = D[5, 5] = mu
    return D


def _Ba(coords: np.ndarray, g: int) -> np.ndarray:
    """B de los 3 modos incompatibles (1-xi², 1-eta², 1-zeta²) por componente, con el
    escalado detJ0/detJ de Taylor (como hex8_wasm.cpp)."""
    J0 = _dN_nat(0.0, 0.0, 0.0) @ coords
    J0inv = np.linalg.inv(J0); detJ0 = np.linalg.det(J0)
    J = _dN_nat(*_GAUSS[g]) @ coords
    detJ = np.linalg.det(J)
    esc = detJ0 / detJ
    dPnat = np.diag(-2.0 * _GAUSS[g])            # [nat][modo]
    dPxyz = esc * (J0inv @ dPnat)                # [xyz][modo]
    Ba = np.zeros((6, 9))
    for m in range(3):
        px, py, pz = dPxyz[:, m]
        c = 3 * m
        Ba[0, c] = px
        Ba[1, c + 1] = py
        Ba[2, c + 2] = pz
        Ba[3, c] = py; Ba[3, c + 1] = px
        Ba[4, c + 1] = pz; Ba[4, c + 2] = py
        Ba[5, c] = pz; Ba[5, c + 2] = px
    return Ba


def hex8_stiffness(coords, E: float, nu: float, incompatible: bool = True):
    """K 24×24 (u: ux,uy,uz por nudo). Con `incompatible` devuelve también G (9×24)
    para recuperar alpha = G u."""
    coords = np.asarray(coords, float)
    D = d_matrix(E, nu)
    Kuu = np.zeros((24, 24)); Kua = np.zeros((24, 9)); Kaa = np.zeros((9, 9))
    for g in range(8):
        dNn = _dN_nat(*_GAUSS[g])
        J = dNn @ coords
        detJ = np.linalg.det(J)
        dNxyz = np.linalg.inv(J) @ dNn
        B = _B(dNxyz)
        Kuu += B.T @ D @ B * detJ
        if incompatible:
            Ba = _Ba(coords, g)
            Kua += B.T @ D @ Ba * detJ
            Kaa += Ba.T @ D @ Ba * detJ
    if not incompatible:
        return Kuu, None
    G = -np.linalg.inv(Kaa) @ Kua.T
    return Kuu + Kua @ G, G


def hex8_stress(coords, E: float, nu: float, u24, G=None):
    """Tensiones [sxx,syy,szz,txy,tyz,txz] en los 8 puntos de Gauss (8×6)."""
    coords = np.asarray(coords, float); u = np.asarray(u24, float)
    D = d_matrix(E, nu)
    alpha = G @ u if G is not None else None
    out = np.zeros((8, 6))
    for g in range(8):
        dNn = _dN_nat(*_GAUSS[g])
        J = dNn @ coords
        dNxyz = np.linalg.inv(J) @ dNn
        eps = _B(dNxyz) @ u
        if alpha is not None:
            eps = eps + _Ba(coords, g) @ alpha
        out[g] = D @ eps
    return out
