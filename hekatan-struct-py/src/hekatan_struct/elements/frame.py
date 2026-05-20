"""Frame 3D Euler-Bernoulli element — 12 DOF, CSI §7.4 default orientation.

Convención CSI:
  Local 1 = longitudinal (I → J)
  Vertical elements (axis ≈ ±Z): Local 2 = global +X
  Non-vertical: Local 1-2 plane is vertical; Local 2 has +Z component
  Local 3 = Local 1 × Local 2 (right-handed)

Local DOFs order: [u1, u2, u3, r1, r2, r3] @ I, [...] @ J → 12 totales.
"""
import numpy as np


def frame_local_axes_csi(p_i: np.ndarray, p_j: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray, float]:
    """CSI Manual §7.4 — Default orientation. Devuelve (e1, e2, e3, L)."""
    e1 = np.asarray(p_j, dtype=float) - np.asarray(p_i, dtype=float)
    L = np.linalg.norm(e1)
    if L < 1e-12:
        raise ValueError(f"Zero-length frame: p_i={p_i}, p_j={p_j}")
    e1 = e1 / L
    sin_v = abs(e1[2])
    is_vertical = abs(1 - sin_v) < 1e-3

    if is_vertical:
        # Vertical: Local 2 = +X global (CSI convention)
        e2 = np.array([1.0, 0.0, 0.0])
        e2 = e2 - np.dot(e2, e1) * e1
        e2 = e2 / np.linalg.norm(e2)
    else:
        # Non-vertical: Local 1-2 plane vertical, Local 2 con +Z component
        Z = np.array([0.0, 0.0, 1.0])
        e3 = np.cross(e1, Z)
        n3 = np.linalg.norm(e3)
        if n3 < 1e-9:
            e3 = np.array([0.0, 1.0, 0.0])
        else:
            e3 = e3 / n3
        e2 = np.cross(e3, e1)
        e2 = e2 / np.linalg.norm(e2)

    e3 = np.cross(e1, e2)
    e3 = e3 / np.linalg.norm(e3)
    return e1, e2, e3, L


def frame_stiffness_local(E: float, G: float, A: float, Iz_loc: float, Iy_loc: float,
                          J: float, L: float) -> np.ndarray:
    """Frame 3D Euler-Bernoulli local K matrix (12×12).

    DOFs orden: [u1, u2, u3, r1, r2, r3]_I + [u1, u2, u3, r1, r2, r3]_J
    Iz_loc = momento de inercia alrededor de Local 3 (causa flexión en plano 1-2 → V2, M3)
    Iy_loc = momento de inercia alrededor de Local 2 (causa flexión en plano 1-3 → V3, M2)
    """
    k = np.zeros((12, 12))
    # Axial (u1_i, u1_j)
    EA_L = E * A / L
    k[0, 0] = k[6, 6] = EA_L
    k[0, 6] = k[6, 0] = -EA_L
    # Torsion (r1_i, r1_j)
    GJ_L = G * J / L
    k[3, 3] = k[9, 9] = GJ_L
    k[3, 9] = k[9, 3] = -GJ_L
    # Bending plano 1-2 (V2, M3): usa Iz_loc, afecta u2, r3
    EIz = E * Iz_loc
    L2 = L * L; L3 = L2 * L
    k[1, 1] = k[7, 7] = 12 * EIz / L3
    k[1, 7] = k[7, 1] = -12 * EIz / L3
    k[1, 5] = k[5, 1] = k[1, 11] = k[11, 1] = 6 * EIz / L2
    k[7, 5] = k[5, 7] = k[7, 11] = k[11, 7] = -6 * EIz / L2
    k[5, 5] = k[11, 11] = 4 * EIz / L
    k[5, 11] = k[11, 5] = 2 * EIz / L
    # Bending plano 1-3 (V3, M2): usa Iy_loc, afecta u3, r2
    EIy = E * Iy_loc
    k[2, 2] = k[8, 8] = 12 * EIy / L3
    k[2, 8] = k[8, 2] = -12 * EIy / L3
    k[2, 4] = k[4, 2] = k[2, 10] = k[10, 2] = -6 * EIy / L2
    k[8, 4] = k[4, 8] = k[8, 10] = k[10, 8] = 6 * EIy / L2
    k[4, 4] = k[10, 10] = 4 * EIy / L
    k[4, 10] = k[10, 4] = 2 * EIy / L
    return k


def frame_T(e1: np.ndarray, e2: np.ndarray, e3: np.ndarray) -> np.ndarray:
    """Matriz de transformación 12×12 local → global. R en bloques 3×3."""
    R = np.column_stack([e1, e2, e3])
    T = np.zeros((12, 12))
    for i in range(4):
        T[3*i:3*i+3, 3*i:3*i+3] = R
    return T


def rigid_arm_transform(r_local_I: np.ndarray, r_local_J: np.ndarray) -> np.ndarray:
    """CSI Cardinal Point offsets (rigid arms en local frame).

    Mapea [u_joint, ω_joint] → [u_centroid, ω_centroid] vía:
      u_centroid = u_joint + r × ω_joint
      ω_centroid = ω_joint

    Útil para Cardinal Point 8 (beams): r = (0, -h_beam/2, 0) en local.
    """
    def Rx(r):
        rx, ry, rz = r
        return np.array([
            [ 0,   -rz,   ry],
            [ rz,   0,  -rx],
            [-ry,  rx,    0],
        ])
    T_arm = np.eye(12)
    T_arm[0:3, 3:6] = Rx(np.asarray(r_local_I, dtype=float))
    T_arm[6:9, 9:12] = Rx(np.asarray(r_local_J, dtype=float))
    return T_arm


def frame_recover_local_forces(k_local: np.ndarray, T_global_to_local: np.ndarray,
                               u_global_12: np.ndarray) -> np.ndarray:
    """Recovers local 12-vec [P_i, V2_i, V3_i, T_i, M2_i, M3_i, P_j, ...].

    Convention CSI: f[0..5] son fuerzas internas en END I.
                    f[6..11] en END J.
    """
    u_local = T_global_to_local @ u_global_12
    f_local = k_local @ u_local
    return f_local
