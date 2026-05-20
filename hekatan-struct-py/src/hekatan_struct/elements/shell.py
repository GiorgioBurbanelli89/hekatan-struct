"""Shell Q4 element — Mindlin-Reissner bending + plane stress membrane.

24 DOFs per element: [Ux, Uy, Uz, Rx, Ry, Rz] × 4 nodes.
Asume slab horizontal en plano XY (z=const). Coordenadas locales = globales.

Membrana: plane stress 2D (Ux, Uy) — 2 DOFs efectivos/nodo, 8 total.
Bending: Mindlin-Reissner (Uz, Rx, Ry) — 3 DOFs/nodo, 12 total + shear locking factor.
Drilling Rz: penalty k_drill = 1e-6 × max K_diag (anti-singular).
"""
import numpy as np


GAUSS_2x2 = [
    (-1/np.sqrt(3), -1/np.sqrt(3), 1.0),
    ( 1/np.sqrt(3), -1/np.sqrt(3), 1.0),
    ( 1/np.sqrt(3),  1/np.sqrt(3), 1.0),
    (-1/np.sqrt(3),  1/np.sqrt(3), 1.0),
]


def _shape_q4(xi: float, eta: float):
    """Shape functions Q4 bilinear and derivatives @ (xi, eta)."""
    N = 0.25 * np.array([(1-xi)*(1-eta), (1+xi)*(1-eta), (1+xi)*(1+eta), (1-xi)*(1+eta)])
    N_xi = 0.25 * np.array([-(1-eta), (1-eta), (1+eta), -(1+eta)])
    N_eta = 0.25 * np.array([-(1-xi), -(1+xi), (1+xi), (1-xi)])
    return N, N_xi, N_eta


def _jacobian_2d(coords_xy: np.ndarray, N_xi, N_eta) -> tuple[np.ndarray, float, np.ndarray]:
    """Returns J (2×2), detJ, dN/dx_dy (2×4)."""
    Jmat = np.zeros((2, 2))
    for i in range(4):
        Jmat[0, 0] += N_xi[i] * coords_xy[i, 0]
        Jmat[0, 1] += N_xi[i] * coords_xy[i, 1]
        Jmat[1, 0] += N_eta[i] * coords_xy[i, 0]
        Jmat[1, 1] += N_eta[i] * coords_xy[i, 1]
    detJ = np.linalg.det(Jmat)
    Jinv = np.linalg.inv(Jmat)
    dN = Jinv @ np.vstack([N_xi, N_eta])
    return Jmat, detJ, dN


def shell_q4_stiffness(coords_xy: np.ndarray, E: float, nu: float, t: float,
                       *, include_membrane: bool = True,
                       include_bending: bool = True,
                       drill_penalty_factor: float = 1e-6) -> np.ndarray:
    """Shell Q4 K — 24×24 en orden [Ux, Uy, Uz, Rx, Ry, Rz] × 4 nodos.

    Args:
      coords_xy: (4, 2) coords XY de los 4 nodos del Q4
      E, nu, t: material y espesor
      include_membrane: si False, omite membrana plane stress (útil para diaphragm rigid)
      include_bending: si False, omite bending (raro)
      drill_penalty_factor: escala penalty del drilling DOF Rz

    Returns:
      K (24, 24) ensamblada con DOFs en orden estandar (6 per nodo).
    """
    K = np.zeros((24, 24))
    G = E / (2 * (1 + nu))

    # ── Membrana plane stress (Ux, Uy) ──
    if include_membrane:
        Em = (E / (1 - nu**2)) * np.array([
            [1, nu, 0], [nu, 1, 0], [0, 0, (1 - nu) / 2],
        ])
        K_mem = np.zeros((8, 8))
        for xi, eta, w in GAUSS_2x2:
            _, _, N_xi = _shape_q4(xi, eta)[:3]
            N, N_xi, N_eta = _shape_q4(xi, eta)
            _, detJ, dN = _jacobian_2d(coords_xy, N_xi, N_eta)
            B = np.zeros((3, 8))
            for i in range(4):
                B[0, 2*i]   = dN[0, i]
                B[1, 2*i+1] = dN[1, i]
                B[2, 2*i]   = dN[1, i]
                B[2, 2*i+1] = dN[0, i]
            K_mem += w * B.T @ Em @ B * t * detJ
        # Map 8 DOFs → 24-DOF indexes (Ux, Uy at each of 4 nodes = DOFs 0,1,6,7,12,13,18,19)
        mem_idx = [0, 1, 6, 7, 12, 13, 18, 19]
        for i in range(8):
            for j in range(8):
                K[mem_idx[i], mem_idx[j]] += K_mem[i, j]

    # ── Mindlin-Reissner bending (Uz, Rx, Ry) with Selective Reduced Integration ──
    # Bending: full 2×2 Gauss. Shear: REDUCED 1×1 Gauss (centro).
    # Esto previene SHEAR LOCKING para slab delgado (t/L → 0).
    if include_bending:
        D_b = (E * t**3 / (12 * (1 - nu**2))) * np.array([
            [1, nu, 0], [nu, 1, 0], [0, 0, (1 - nu) / 2],
        ])
        ks = 5/6
        D_s = ks * G * t * np.eye(2)
        K_b = np.zeros((12, 12))

        # Bending: 2×2 Gauss full integration
        for xi, eta, w in GAUSS_2x2:
            N, N_xi, N_eta = _shape_q4(xi, eta)
            _, detJ, dN = _jacobian_2d(coords_xy, N_xi, N_eta)
            Bb = np.zeros((3, 12))
            for i in range(4):
                Bb[0, 3*i+2] = -dN[0, i]
                Bb[1, 3*i+1] =  dN[1, i]
                Bb[2, 3*i+1] =  dN[0, i]
                Bb[2, 3*i+2] = -dN[1, i]
            K_b += w * Bb.T @ D_b @ Bb * detJ

        # Shear: 1×1 Gauss REDUCED integration (center point, weight=4)
        # Esto es la clave para evitar shear locking en placas delgadas
        N, N_xi, N_eta = _shape_q4(0.0, 0.0)
        _, detJ, dN = _jacobian_2d(coords_xy, N_xi, N_eta)
        Bs = np.zeros((2, 12))
        for i in range(4):
            Bs[0, 3*i]   = dN[0, i]
            Bs[0, 3*i+2] = -N[i]
            Bs[1, 3*i]   = dN[1, i]
            Bs[1, 3*i+1] = N[i]
        K_b += 4.0 * Bs.T @ D_s @ Bs * detJ  # weight 4 = (2x2 - sum) for 1 Gauss point

        bend_idx = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22]
        for i in range(12):
            for j in range(12):
                K[bend_idx[i], bend_idx[j]] += K_b[i, j]

    # ── Drilling Rz penalty (anti-singular) ──
    k_drill = drill_penalty_factor * np.max(np.abs(np.diag(K))) if np.any(np.diag(K)) else 1.0
    for i in [5, 11, 17, 23]:
        K[i, i] += k_drill

    return K
