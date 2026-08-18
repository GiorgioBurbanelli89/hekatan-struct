"""Frame 3D Timoshenko element — 12 DOF, CSI §7.4 default orientation.

Convención CSI:
  Local 1 = longitudinal (I → J)
  Vertical elements (axis ≈ ±Z): Local 2 = global +X
  Non-vertical: Local 1-2 plane is vertical; Local 2 has +Z component
  Local 3 = Local 1 × Local 2 (right-handed)

Local DOFs order: [u1, u2, u3, r1, r2, r3] @ I, [...] @ J → 12 totales.

Formulación: la misma que SAP IV (`beam.for`, Bathe·Wilson·Peterson 1973) y que
el motor TS/C++ de Hekatan (`getLocalStiffnessMatrix.ts`): viga con deformación
por cortante, gobernada por φ = 12·E·I/(G·As·L²). Con As → ∞ (φ = 0) degenera
exactamente en Euler-Bernoulli, así que es la misma matriz de siempre más un
término. Sin ese término la barra sale SIEMPRE más rígida, nunca al revés.
"""
import numpy as np


def frame_local_axes_csi(p_i: np.ndarray, p_j: np.ndarray,
                         angle_deg: float = 0.0
                         ) -> tuple[np.ndarray, np.ndarray, np.ndarray, float]:
    """CSI Manual §7.4 — Default orientation + local axis angle. → (e1, e2, e3, L).

    `angle_deg` es el "local axis angle" de CSI: gira el par (eje2, eje3)
    alrededor del eje 1, dejando el eje 1 quieto. Sin él, una C 200×50 puesta a
    90° se calcula con I = 6.20e6 mm⁴ cuando en realidad trabaja con 0.53e6:
    once veces más rígida de lo que es.
    """
    e1 = np.asarray(p_j, dtype=float) - np.asarray(p_i, dtype=float)
    L = float(np.linalg.norm(e1))
    if L < 1e-12:
        raise ValueError(f"Zero-length frame: p_i={p_i}, p_j={p_j}")
    e1 = e1 / L
    # Vertical = la proyección horizontal se anula. Se mide D, no |n|, para
    # decidir igual que el motor TS/C++ (getTransformationMatrix.ts usa D<1e-9).
    D = float(np.hypot(e1[0], e1[1]))

    if D < 1e-9:
        # Vertical: Local 2 = +X global (CSI convention)
        s = 1.0 if e1[2] > 0 else -1.0
        e1 = np.array([0.0, 0.0, s])
        e2 = np.array([1.0, 0.0, 0.0])
        e3 = np.array([0.0, s, 0.0])
    else:
        # Non-vertical: plano 1-2 vertical, eje 2 con componente +Z
        l, m, n = e1
        e2 = np.array([-l * n / D, -m * n / D, D])
        e3 = np.array([m / D, -l / D, 0.0])

    if abs(angle_deg) > 1e-12:
        a = np.deg2rad(angle_deg)
        ca, sa = np.cos(a), np.sin(a)
        e2, e3 = ca * e2 + sa * e3, -sa * e2 + ca * e3

    return e1, e2, e3, L


def frame_stiffness_local(E: float, G: float, A: float, Iz_loc: float, Iy_loc: float,
                          J: float, L: float,
                          As_z: float = 0.0, As_y: float = 0.0,
                          shear_deformation: bool = True) -> np.ndarray:
    """Frame 3D Timoshenko local K matrix (12×12).

    DOFs orden: [u1, u2, u3, r1, r2, r3]_I + [u1, u2, u3, r1, r2, r3]_J
    Iz_loc = momento de inercia alrededor de Local 3 (flexión en plano 1-2 → V2, M3)
    Iy_loc = momento de inercia alrededor de Local 2 (flexión en plano 1-3 → V3, M2)
    As_z   = área de cortante que resiste V2 (va con Iz_loc) — el `As2` de CSI
    As_y   = área de cortante que resiste V3 (va con Iy_loc) — el `As3` de CSI

    Si no se dan las As y `shear_deformation`, se usa 5/6·A (rectángulo), que es
    lo que supone ETABS por defecto y lo que hace el motor TS. Para un perfil I
    eso es el DOBLE del alma real: hay que pasar las As de verdad.
    """
    if shear_deformation and As_z <= 0 and As_y <= 0 and A > 0 and G > 0:
        As_z = As_y = (5.0 / 6.0) * A
    if not shear_deformation:
        As_z = As_y = 0.0

    phiZ = (12 * E * Iz_loc) / (G * As_z * L * L) if (As_z > 0 and G > 0) else 0.0
    phiY = (12 * E * Iy_loc) / (G * As_y * L * L) if (As_y > 0 and G > 0) else 0.0

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
    tz = (12 * EIz / L3) / (1 + phiZ)
    bz = (6 * EIz / L2) / (1 + phiZ)
    kz = (4 * EIz / L) * (1 + phiZ / 4) / (1 + phiZ)
    az = (2 * EIz / L) * (1 - phiZ / 2) / (1 + phiZ)
    k[1, 1] = k[7, 7] = tz
    k[1, 7] = k[7, 1] = -tz
    k[1, 5] = k[5, 1] = k[1, 11] = k[11, 1] = bz
    k[7, 5] = k[5, 7] = k[7, 11] = k[11, 7] = -bz
    k[5, 5] = k[11, 11] = kz
    k[5, 11] = k[11, 5] = az
    # Bending plano 1-3 (V3, M2): usa Iy_loc, afecta u3, r2
    EIy = E * Iy_loc
    ty = (12 * EIy / L3) / (1 + phiY)
    by = (6 * EIy / L2) / (1 + phiY)
    ky = (4 * EIy / L) * (1 + phiY / 4) / (1 + phiY)
    ay = (2 * EIy / L) * (1 - phiY / 2) / (1 + phiY)
    k[2, 2] = k[8, 8] = ty
    k[2, 8] = k[8, 2] = -ty
    k[2, 4] = k[4, 2] = k[2, 10] = k[10, 2] = -by
    k[8, 4] = k[4, 8] = k[8, 10] = k[10, 8] = by
    k[4, 4] = k[10, 10] = ky
    k[4, 10] = k[10, 4] = ay
    return k


def frame_releases_condense(k: np.ndarray, releases) -> np.ndarray:
    """End releases por condensación estática (el `applyReleases` del motor TS).

    `releases` = 12 flags (todos los GDL locales) o 6 (orden legacy
    [TI, M2I, M3I, TJ, M2J, M3J] → GDL 3,4,5,9,10,11).
    """
    rel = list(releases)
    if len(rel) >= 12:
        freed = [i for i in range(12) if rel[i]]
    else:
        dofs = [3, 4, 5, 9, 10, 11]
        freed = [dofs[i] for i in range(min(6, len(rel))) if rel[i]]
    if not freed:
        return k
    kept = [i for i in range(12) if i not in freed]
    Kff = k[np.ix_(freed, freed)]
    try:
        Kff_inv = np.linalg.inv(Kff)
    except np.linalg.LinAlgError:
        return k
    corr = k[np.ix_(kept, freed)] @ Kff_inv @ k[np.ix_(freed, kept)]
    kc = np.zeros((12, 12))
    kc[np.ix_(kept, kept)] = k[np.ix_(kept, kept)] - corr
    return kc


def frame_partial_fixity(k: np.ndarray, springs) -> np.ndarray:
    """Muelles de fijación parcial: se suman a la diagonal de la K LOCAL.

    Es el escalón entre empotrado (k → ∞) y articulado (k = 0). Se aplica ANTES
    de los releases, como en el motor TS: si se hace al revés, la condensación
    del release se come el muelle.
    """
    ks = k.copy()
    for i, v in enumerate(springs[:12]):
        if v > 1e-12:
            ks[i, i] += v
    return ks


def frame_rigid_offset_matrix(o_i: float, o_j: float) -> np.ndarray:
    """Brazo rígido en los extremos: R con u_extremo = R · u_nudo (12×12, LOCAL).

    El brazo va a lo largo del eje 1 (el de la barra), así que solo acopla las
    traslaciones transversales con los giros:
        u2_extremo = u2_nudo − o·r3        u3_extremo = u3_nudo + o·r2
    y en el nudo J con el signo cambiado, porque el brazo apunta al revés.

    ⚠️ Está en EJES LOCALES, así que se aplica sobre la K local: Rᵀ·k_local·R, y
    solo después se gira a globales. El motor TS
    (`getGlobalStiffnessMatrix.ts`) lo aplica sobre la K GLOBAL con esta misma
    R: para una barra alineada con los ejes globales da igual, para una barra
    oblicua no. Ver `test_oraculo_ts.py::test_offsets_barra_oblicua_discrepa`,
    que lo mide.
    """
    R = np.eye(12)
    if abs(o_i) > 1e-12:
        R[1, 5] = -o_i
        R[2, 4] = o_i
    if abs(o_j) > 1e-12:
        R[7, 11] = o_j
        R[8, 10] = -o_j
    return R


def frame_fixed_end_loads(p_i, p_j, w_global) -> tuple[np.ndarray, np.ndarray]:
    """Carga repartida global w (kN/m) → fuerzas de empotramiento nodales.

        F_i = F_j = w·L/2
        M_i = +(L²/12)·(t × w)      M_j = −(L²/12)·(t × w)

    con t = versor de la barra. Es EXACTO para desplazamientos y reacciones, y
    es lo que separa una viga CONTINUA de un reparto por ancho tributario: sin
    los momentos, el apoyo interior de un vano ancho recibe de menos.
    """
    a = np.asarray(p_i, float)
    b = np.asarray(p_j, float)
    d = b - a
    L = float(np.linalg.norm(d))
    if L < 1e-9:
        return np.zeros(6), np.zeros(6)
    t = d / L
    w = np.asarray(w_global, float)
    c = L * L / 12.0
    txw = np.cross(t, w)
    fi = np.concatenate([w * L / 2.0, c * txw])
    fj = np.concatenate([w * L / 2.0, -c * txw])
    return fi, fj


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
