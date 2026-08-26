"""Static + Modal solver — espejo de awatif v2 deform/analyze/modalAnalysis.

API espejo del JS:
    deform(nodes, elements, nodeInputs, elementInputs) → DeformOutputs
    analyze(nodes, elements, elementInputs, deformOutputs) → AnalyzeOutputs
    modalAnalysis(nodes, elements, nodeInputs, elementInputs, nModes) → ModalOutputs
"""
from __future__ import annotations
from typing import Sequence
import numpy as np
import scipy.linalg as la

from .data_model import (
    Node, Element, NodeInputs, ElementInputs,
    DeformOutputs, AnalyzeOutputs, ModalOutputs,
)
from .elements.frame import (
    frame_local_axes_csi, frame_stiffness_local, frame_T, rigid_arm_transform,
    frame_releases_condense, frame_fixed_end_loads,
    frame_partial_fixity, frame_rigid_offset_matrix,
    frame_stiffness_end_offsets, frame_end_offset_matrix,
    frame_self_weight_length,
)
from .elements.shell import shell_q4_stiffness, shell_q4_local_axes, shell_q4_T
from .elements.shell_q4_motor import shell_q4_motor
from .elements.shell_thin import shell_thin_motor
from .elements.plate_mzc import mzc_plate_stiffness, mzc_to_shell_q4_24

# Global flag — usar MZC Kirchhoff (= ETABS Shell-Thin) en vez de Mindlin Q4
USE_KIRCHHOFF_MZC = False

# Q4 del MOTOR (membrana Q6 con modos incompatibles + MITC4 + Hughes-Brezzi),
# port fiel de shellQ4.ts. El Q4 "de libro" de shell.py se queda rigido en
# MEMBRANA — que es como trabaja un muro — porque cuatro nudos bilineales no
# describen una curvatura en su plano. Medido en el edificio losa+muro: con el
# Q4 viejo, Python salia 1.83x mas rigido que ETABS.
USE_Q4_MOTOR = True

# ShellType Membrane de ETABS: solo trabajo EN EL PLANO, cero flexion.
USE_SOLO_MEMBRANA = False


# ═══════════════════════════════════════════════════════════════════════════
# Helpers internos
# ═══════════════════════════════════════════════════════════════════════════
def _is_frame(conn: Element) -> bool:
    return len(conn) == 2


def _is_shell(conn: Element) -> bool:
    return len(conn) == 4


def _frame_k_local_T(
    nodes: Sequence[Node],
    conn: Element,
    element_inputs: ElementInputs,
    idx: int,
) -> tuple[np.ndarray, np.ndarray]:
    """K local (12×12) y T (local→global) de UNA barra. Fuente única.

    Antes esto estaba duplicado en _assemble_K y en analyze(), y las dos copias
    se fueron separando. Los esfuerzos hay que recuperarlos con la MISMA matriz
    con la que se armó el sistema, o se leen fuerzas de otro modelo.
    """
    i, j = conn
    p_i = np.asarray(nodes[i], dtype=float)
    p_j = np.asarray(nodes[j], dtype=float)
    ang = element_inputs.local_angles.get(idx, 0.0)
    e1, e2, e3, L = frame_local_axes_csi(p_i, p_j, ang)
    E = element_inputs.elasticities[idx]
    nu = element_inputs.poissons_ratios.get(idx, 0.2)
    G = element_inputs.shear_moduli.get(idx, E / (2 * (1 + nu)))
    A = element_inputs.areas[idx]
    Iy = element_inputs.moments_of_inertia_y[idx]
    Iz = element_inputs.moments_of_inertia_z[idx]
    J = element_inputs.torsional_constants[idx]
    As_z = element_inputs.shear_areas_z.get(idx, 0.0)
    As_y = element_inputs.shear_areas_y.get(idx, 0.0)
    # END LENGTH OFFSETS de CSI (`endoffset` del .heks). Con rz = 0 —el defecto
    # de ETABS— `frame_stiffness_end_offsets` devuelve la barra de siempre.
    eo = element_inputs.end_offsets.get(idx)
    if eo and (eo[0] > 0 or eo[1] > 0) and eo[2] > 0:
        k_loc, lr_i, lr_j, _Lf = frame_stiffness_end_offsets(
            E, G, A, Iz, Iy, J, L, eo[0], eo[1], eo[2], As_z=As_z, As_y=As_y)
    else:
        k_loc = frame_stiffness_local(E, G, A, Iz, Iy, J, L, As_z=As_z, As_y=As_y)
        lr_i = lr_j = 0.0
    # Orden del motor TS: muelles -> releases. Al reves, la condensacion del
    # release se traga el muelle.
    spr = element_inputs.partial_fixity_springs.get(idx)
    if spr:
        k_loc = frame_partial_fixity(k_loc, spr)
    rel = element_inputs.moment_releases.get(idx)
    if rel:
        k_loc = frame_releases_condense(k_loc, rel)
    # El brazo rígido del end length offset: los extremos flexibles cuelgan de
    # los nudos. Va DESPUÉS de releases, como en ETABS: el release está en el
    # extremo del tramo flexible, no en el nudo.
    if lr_i > 0 or lr_j > 0:
        Reo = frame_end_offset_matrix(lr_i, lr_j)
        k_loc = Reo.T @ k_loc @ Reo
    # Brazos rigidos: factores (0-1) de la longitud, uno por extremo.
    off = element_inputs.rigid_offsets.get(idx)
    if off and (off[0] > 0 or off[1] > 0):
        R = frame_rigid_offset_matrix(off[0] * L, off[1] * L)
        k_loc = R.T @ k_loc @ R
    # Rigid arm vía insertion_points (cardinal points). Si está, aplica.
    ins = element_inputs.insertion_points.get(idx)
    if ins is not None:
        dy, dz = ins
        r_loc = np.array([0.0, dy, dz])
        T_arm = rigid_arm_transform(r_loc, r_loc)
        k_loc = T_arm.T @ k_loc @ T_arm
    return k_loc, frame_T(e1, e2, e3)


def _shell_k_global(
    nodes: Sequence[Node],
    conn: Element,
    element_inputs: ElementInputs,
    idx: int,
) -> np.ndarray:
    """K del shell Q4 EN GLOBALES: se arma en el plano del paño y se gira.

    Antes se usaban las X,Y globales directamente, lo que obligaba a que el
    paño fuese horizontal. Un muro (plano XZ) daba jacobiano nulo.
    """
    p3 = np.array([nodes[n_idx] for n_idx in conn], dtype=float)
    R, xy = shell_q4_local_axes(p3)
    E = element_inputs.elasticities[idx]
    nu = element_inputs.poissons_ratios.get(idx, 0.2)
    t = element_inputs.thicknesses[idx]
    if USE_KIRCHHOFF_MZC:
        k_loc = shell_q4_stiffness(xy, E, nu, t,
                                   include_membrane=True, include_bending=False)
        k_loc = k_loc + mzc_to_shell_q4_24(mzc_plate_stiffness(xy, E, nu, t))
    elif USE_Q4_MOTOR:
        # Dispatch Thin/Thick por elemento, igual que
        # `getLocalStiffnessMatrix.cpp`: plate_formulations == 1 -> Kirchhoff.
        motor = (shell_thin_motor
                 if element_inputs.plate_formulations.get(idx) == 1
                 else shell_q4_motor)
        extra = {} if motor is shell_thin_motor else {
            "solo_membrana": USE_SOLO_MEMBRANA}
        k_loc = motor(
            xy, E, nu, t,
            mod_membrana=element_inputs.membrane_modifiers.get(idx, 1.0),
            mod_flexion=element_inputs.bending_modifiers.get(idx, 1.0),
            mod_dir=element_inputs.shell_modifiers.get(idx),
            **extra,
        )
    else:
        k_loc = shell_q4_stiffness(xy, E, nu, t)
    T = shell_q4_T(R)              # global -> local
    return T.T @ k_loc @ T


def _element_k_dofs(
    nodes: Sequence[Node],
    elements: Sequence[Element],
    element_inputs: ElementInputs,
):
    """Genera (k_global, gdl) de cada elemento. El ensamble es el `ADDSTF` de
    SAP IV: nada mas que sumar cada casilla del elemento en su sitio global."""
    for idx, conn in enumerate(elements):
        if _is_frame(conn):
            i, j = conn
            k_loc, T = _frame_k_local_T(nodes, conn, element_inputs, idx)
            yield T @ k_loc @ T.T, np.r_[6*i:6*i+6, 6*j:6*j+6]
        elif _is_shell(conn):
            k_glob = _shell_k_global(nodes, conn, element_inputs, idx)
            yield k_glob, np.concatenate([np.arange(6*n_idx, 6*n_idx+6)
                                          for n_idx in conn])


def _assemble_K_sparse(
    nodes: Sequence[Node],
    elements: Sequence[Element],
    element_inputs: ElementInputs,
):
    """K en formato disperso (CSR). Es el camino de `sesol.for`: la K de un
    portico es casi toda ceros — 723 barras sobre 2268 GDL llenan el 1.5 % —
    y guardarla entera cuesta el cuadrado de los nudos. Con 5000 nudos la
    densa son 7 GB y no hay modelo que correr."""
    from scipy.sparse import coo_matrix

    n6 = 6 * len(nodes)
    filas, cols, vals = [], [], []
    for k_glob, d in _element_k_dofs(nodes, elements, element_inputs):
        m = len(d)
        filas.append(np.repeat(d, m))
        cols.append(np.tile(d, m))
        vals.append(np.asarray(k_glob).ravel())
    if not vals:
        return coo_matrix((n6, n6)).tocsr()
    return coo_matrix((np.concatenate(vals),
                       (np.concatenate(filas), np.concatenate(cols))),
                      shape=(n6, n6)).tocsr()


def _assemble_K(
    nodes: Sequence[Node],
    elements: Sequence[Element],
    element_inputs: ElementInputs,
) -> np.ndarray:
    n = len(nodes)
    K = np.zeros((6 * n, 6 * n))
    for idx, conn in enumerate(elements):
        if _is_frame(conn):
            i, j = conn
            k_loc, T = _frame_k_local_T(nodes, conn, element_inputs, idx)
            k_glob = T @ k_loc @ T.T
            d = np.r_[6*i:6*i+6, 6*j:6*j+6]
            K[np.ix_(d, d)] += k_glob
        elif _is_shell(conn):
            # MISMO camino que el disperso: en el plano del paño y luego girado
            k_glob = _shell_k_global(nodes, conn, element_inputs, idx)
            d = np.concatenate([np.arange(6*n_idx, 6*n_idx+6) for n_idx in conn])
            K[np.ix_(d, d)] += k_glob
    return K


def _assemble_F(nodes: Sequence[Node], node_inputs: NodeInputs,
                elements: Sequence[Element] | None = None,
                element_inputs: ElementInputs | None = None) -> np.ndarray:
    n = len(nodes)
    F = np.zeros(6 * n)
    for node_idx, load in node_inputs.loads.items():
        for d, v in enumerate(load):
            F[6 * node_idx + d] += v
    # Carga repartida de barra -> fuerzas de empotramiento nodales CONSISTENTES
    if elements is not None and element_inputs is not None and element_inputs.frame_loads:
        for idx, w in element_inputs.frame_loads.items():
            if idx >= len(elements):
                continue
            conn = elements[idx]
            if not _is_frame(conn):
                continue
            i, j = conn
            fi, fj = frame_fixed_end_loads(nodes[i], nodes[j], w)
            F[6*i:6*i+6] += fi
            F[6*j:6*j+6] += fj
    return F


def _assemble_M_lumped(
    nodes: Sequence[Node],
    elements: Sequence[Element],
    element_inputs: ElementInputs,
) -> np.ndarray:
    """Lumped mass diagonal — CSI §4.12 (sin masa rotacional)."""
    n = len(nodes)
    M = np.zeros(6 * n)
    for idx, conn in enumerate(elements):
        rho = element_inputs.densities.get(idx, 0)
        if rho == 0:
            continue
        if _is_frame(conn):
            i, j = conn
            p_i = np.asarray(nodes[i], dtype=float)
            p_j = np.asarray(nodes[j], dtype=float)
            # ETABS pesa la VIGA por su luz libre (offset entero, sin RZ) y la
            # columna/diagonal por la longitud completa. Sin offsets, L.
            eo = element_inputs.end_offsets.get(idx)
            L = (frame_self_weight_length(p_i, p_j, eo[0], eo[1]) if eo
                 else float(np.linalg.norm(p_j - p_i)))
            A = element_inputs.areas[idx]
            m_total = A * L * rho
            for dof in [6*i, 6*i+1, 6*i+2, 6*j, 6*j+1, 6*j+2]:
                M[dof] += m_total / 2
        elif _is_shell(conn):
            # área REAL (no la proyección en planta): un techo inclinado tiene
            # la masa de su chapa, no la de su sombra.
            from .extensions import _area_q4
            area = _area_q4([nodes[n_idx] for n_idx in conn])
            t = element_inputs.thicknesses[idx]
            m_total = area * t * rho
            for n_idx in conn:
                for dof in [6*n_idx, 6*n_idx+1, 6*n_idx+2]:
                    M[dof] += m_total / 4
    return M


def _apply_supports_penalty(
    K: np.ndarray, F: np.ndarray, node_inputs: NodeInputs,
    penalty_factor: float = 1e15,
) -> tuple[np.ndarray, np.ndarray]:
    K = K.copy()
    F = F.copy()
    k_max = np.max(np.abs(np.diag(K))) if K.size else 1.0
    penalty = penalty_factor * k_max
    for node_idx, restraints in node_inputs.supports.items():
        for dof_local, r in enumerate(restraints):
            if r:
                gdof = 6 * node_idx + dof_local
                K[gdof, gdof] += penalty
                F[gdof] = 0
    return K, F


def _con_rigidez(K, gdl: np.ndarray, tol: float = 1e-12) -> np.ndarray:
    """Máscara de los GDL que SÍ tienen rigidez. Port de `getZerosIndices`.

    Un GDL con la diagonal a cero **y la columna entera a cero** no está en
    ninguna matriz de elemento: su ecuación es `0 = F`. Dejarlo dentro hace
    singular al sistema entero — no falla ese GDL, fallan los 609 nudos. Se
    saca y se queda en 0, que es lo que hace `deform.cpp` antes de factorizar.

    ⚠️ Las dos condiciones, no solo la diagonal: un GDL con diagonal nula pero
    columna no nula SÍ participa (aparece acoplado) y sacarlo sería empotrarlo.
    """
    if gdl.size == 0:
        return np.zeros(0, dtype=bool)
    if hasattr(K, "tocsc"):
        Kc = K.tocsc()
        diag = np.abs(Kc.diagonal()[gdl])
        col = np.zeros(gdl.size, dtype=bool)
        sospechosos = np.where(diag < tol)[0]
        for i in sospechosos:
            c = Kc[:, gdl[i]]
            col[i] = c.nnz == 0 or np.abs(c.data).max() < tol
    else:
        diag = np.abs(np.asarray(K)[gdl, gdl])
        col = np.zeros(gdl.size, dtype=bool)
        sospechosos = np.where(diag < tol)[0]
        for i in sospechosos:
            col[i] = np.abs(np.asarray(K)[:, gdl[i]]).max() < tol
    return ~((diag < tol) & col)


# ═══════════════════════════════════════════════════════════════════════════
# Public API
# ═══════════════════════════════════════════════════════════════════════════
def deform(
    nodes: Sequence[Node],
    elements: Sequence[Element],
    node_inputs: NodeInputs,
    element_inputs: ElementInputs,
    *,
    sparse: bool | None = None,
) -> DeformOutputs:
    """Análisis lineal estático. Espejo de awatif v2 deform().

    `sparse`: None = decide por tamaño (disperso a partir de 3000 GDL),
    True/False = forzarlo. Los dos caminos dan el MISMO resultado; solo cambia
    la memoria (la densa crece con el cuadrado de los nudos).

    Los apoyos se imponen ELIMINANDO la ecuación, no con penalty: es lo que hace
    SAP IV (`bound.for` numera con 0 los GDL restringidos y `sesol.for` ni los
    ve). El penalty de 1e15·k_max mete un número enorme en la diagonal y se come
    los dígitos significativos de la fila; con eliminación el sistema resuelto es
    exactamente el de los GDL libres.

    Y además se sacan los GDL **sin rigidez ninguna** (diagonal y columna a
    cero), que se quedan en 0. Es el `getZerosIndices` de `deform.cpp`, y sin
    él el sistema es singular: en `galpon_lc.heks` hay 3 nudos que solo tocan
    cáscaras de zinc declaradas SIN flexión (`shellmod ... 0 0 0 ...`), así que
    sus w, θx y θy no aparecen en ninguna K y el solver devolvía NaN en los
    609 nudos por 9 GDL huérfanos.
    """
    n_total = 6 * len(nodes)
    disperso = sparse if sparse is not None else n_total > 3000
    K_orig = (_assemble_K_sparse(nodes, elements, element_inputs) if disperso
              else _assemble_K(nodes, elements, element_inputs))
    F_orig = _assemble_F(nodes, node_inputs, elements, element_inputs)

    # Muelles nodales, a la diagonal y ANTES de tocar apoyos — es lo que hace
    # `deform.cpp`. Van dentro de `node_inputs`, no como argumento suelto: si
    # no, el modal no puede verlos por mucho que el .heks los traiga (la
    # cimentación del RIOCHICO se apoya en 612 muelles de balasto).
    if node_inputs.springs:
        kd = np.zeros(n_total)
        for n_idx, dof_local, k in node_inputs.springs:
            g = 6 * n_idx + dof_local
            if 0 <= g < n_total:
                kd[g] += k
        if disperso:
            # De golpe y como diagonal: `K[g, g] += k` uno a uno sobre una CSR
            # cambia la estructura de dispersion 612 veces (los muelles de
            # balasto del RIOCHICO) y scipy avisa de que eso es carisimo.
            from scipy.sparse import diags
            K_orig = (K_orig + diags(kd)).tocsr()
        else:
            K_orig[np.arange(n_total), np.arange(n_total)] += kd

    fixed = np.zeros(n_total, dtype=bool)
    for node_idx, restraints in node_inputs.supports.items():
        for dof_local, r in enumerate(restraints):
            if r:
                fixed[6 * node_idx + dof_local] = True
    free = np.where(~fixed)[0]
    con_k = _con_rigidez(K_orig, free)
    # Un GDL sin rigidez se queda en 0, como en `deform.cpp`. Pero si ADEMAS
    # lleva carga, esa carga no va a ninguna parte: quitarlo la borraria del
    # modelo sin decirlo, y el resto saldria con numeros de aspecto normal.
    huerfanos_cargados = free[~con_k][np.abs(F_orig[free[~con_k]]) > 1e-12]
    if huerfanos_cargados.size:
        n0 = huerfanos_cargados[0]
        raise np.linalg.LinAlgError(
            f"{huerfanos_cargados.size} GDL sin rigidez llevan carga "
            f"(p.ej. nudo {n0 // 6}, componente {n0 % 6}): la estructura es un "
            "mecanismo por ahi y esa carga no la equilibra nada"
        )
    free = free[con_k]

    U = np.zeros(n_total)
    if free.size:
        if disperso:
            from scipy.sparse.linalg import spsolve
            U[free] = spsolve(K_orig[free][:, free].tocsc(), F_orig[free])
        else:
            U[free] = np.linalg.solve(K_orig[np.ix_(free, free)], F_orig[free])

    # Reacciones en nodos restringidos
    R = K_orig @ U - F_orig
    out = DeformOutputs()
    for i in range(len(nodes)):
        out.deformations[i] = tuple(U[6*i:6*i+6])  # type: ignore
    for node_idx, restraints in node_inputs.supports.items():
        if any(restraints):
            r = R[6*node_idx:6*node_idx+6]
            out.reactions[node_idx] = (r[0], r[1], r[2], r[3], r[4], r[5])
    return out


def analyze(
    nodes: Sequence[Node],
    elements: Sequence[Element],
    element_inputs: ElementInputs,
    deform_outputs: DeformOutputs,
) -> AnalyzeOutputs:
    """Recupera esfuerzos internos por elemento. Espejo de awatif v2 analyze()."""
    out = AnalyzeOutputs()
    # Reconstruir U global desde deformations
    n = len(nodes)
    U = np.zeros(6 * n)
    for i, d in deform_outputs.deformations.items():
        U[6*i:6*i+6] = d
    for idx, conn in enumerate(elements):
        if _is_frame(conn):
            i, j = conn
            k_loc, T = _frame_k_local_T(nodes, conn, element_inputs, idx)
            u_global_12 = np.concatenate([U[6*i:6*i+6], U[6*j:6*j+6]])
            u_local = T.T @ u_global_12
            f_local = k_loc @ u_local
            # Carga de vano: f = k·u da solo la parte NODAL. El diagrama real
            # lleva además las fuerzas de empotramiento de la propia barra.
            w = element_inputs.frame_loads.get(idx)
            if w is not None:
                fi, fj = frame_fixed_end_loads(nodes[i], nodes[j], w)
                f_local = f_local - T.T @ np.concatenate([fi, fj])
            # FUERZAS DE EXTREMO crudas (f = k·u + f_empotramiento), sin tocar
            # el signo — es lo que devuelve `analyze.ts` y por tanto lo que
            # espera todo lo que lee este motor. El DIAGRAMA no es esto: en el
            # extremo i el diagrama es el negativo, y contra ETABS hay que
            # emitir M2 con el signo cambiado. Eso se hace al comparar, no aqui.
            # Antes se invertia el extremo J "por convenio CSI": no estaba en el
            # motor, y hacia que los seis campos salieran con el signo cambiado
            # respecto al TS en TODOS los casos (medido con el oraculo).
            out.normals[idx]    = (f_local[0],  f_local[6])
            out.shears_y[idx]   = (f_local[1],  f_local[7])
            out.shears_z[idx]   = (f_local[2],  f_local[8])
            out.torsions[idx]   = (f_local[3],  f_local[9])
            out.bendings_y[idx] = (f_local[4],  f_local[10])
            out.bendings_z[idx] = (f_local[5],  f_local[11])
    return out


def modal_analysis(
    nodes: Sequence[Node],
    elements: Sequence[Element],
    node_inputs: NodeInputs,
    element_inputs: ElementInputs,
    n_modes: int = 12,
    *,
    lumped: bool = True,
) -> ModalOutputs:
    """Modal eigen K - λM. Espejo de awatif v2 modalAnalysis()."""
    K = _assemble_K(nodes, elements, element_inputs)
    if not lumped:
        raise NotImplementedError("Consistent mass not implemented yet")
    M_diag = _assemble_M_lumped(nodes, elements, element_inputs)

    # CSI §4.12: ignora masa en restrained
    restrained = set()
    for node_idx, restraints in node_inputs.supports.items():
        for dof_local, r in enumerate(restraints):
            if r:
                restrained.add(6 * node_idx + dof_local)
    n_total = K.shape[0]
    # ⚠️ Los GDL SIN masa no se BORRAN: se CONDENSAN (Guyan).
    #
    # Antes se hacia `free = [... if M_diag[i] > 0]`, o sea se sacaban del
    # sistema los grados de libertad sin masa — que con masa lumped son TODAS
    # las rotaciones. Sacar un GDL del sistema es lo mismo que EMPOTRARLO, y
    # empotrar todas las rotaciones rigidiza la estructura entera. Medido
    # contra ETABS en un portico 3D con losa: periodos 13-16 % cortos, sin
    # modo TORSIONAL y participacion 0.901 en vez de 1.000, con la masa
    # cuadrando al 0.000 %.
    #
    # Lo correcto es la condensacion estatica: los GDL sin masa no tienen
    # inercia, asi que su ecuacion es K_ss·u_s + K_sm·u_m = 0 y se despejan.
    #     K_red = K_mm − K_ms · K_ss⁻¹ · K_sm
    libres = [i for i in range(n_total) if i not in restrained]
    con_masa = [i for i in libres if M_diag[i] > 0]
    sin_masa = [i for i in libres if M_diag[i] <= 0]

    K_ff = K[np.ix_(con_masa, con_masa)]
    if sin_masa:
        Kss = K[np.ix_(sin_masa, sin_masa)]
        Ksm = K[np.ix_(sin_masa, con_masa)]
        K_ff = K_ff - Ksm.T @ np.linalg.solve(Kss, Ksm)
    free = con_masa
    M_ff = np.diag(M_diag[free])
    eigvals, eigvecs = la.eigh(K_ff, M_ff)
    n_modes_actual = min(n_modes, len(eigvals))
    eigvals = np.maximum(eigvals[:n_modes_actual], 1e-12)
    omega = np.sqrt(eigvals)
    freqs = omega / (2 * np.pi)
    periods = 2 * np.pi / omega

    # Reconstruct full mode shapes
    mode_shapes = np.zeros((n_total, n_modes_actual))
    for m in range(n_modes_actual):
        mode_shapes[free, m] = eigvecs[:, m]

    # MPF
    mpf = np.zeros((n_modes_actual, 6))
    # Vectores de influencia. Los tres primeros son traslacion rigida. El de
    # Rz es un GIRO rigido alrededor del centro de masa: ux = −(y−ycm),
    # uy = +(x−xcm). Sin el no hay participacion torsional y el modo de
    # torsion, que en un edificio es el tercero, parece no existir.
    xy = np.array([[nodes[i][0], nodes[i][1]] for i in range(len(nodes))], float)
    mt = M_diag[0::6]
    m_sum = mt.sum()
    if m_sum > 1e-12:
        cm = (mt[:, None] * xy).sum(axis=0) / m_sum
    else:
        cm = xy.mean(axis=0)
    dx = xy[:, 0] - cm[0]
    dy = xy[:, 1] - cm[1]

    vectores = []
    for d in range(3):
        r = np.zeros(n_total)
        r[d::6] = 1.0
        vectores.append((d, r, np.sum(M_diag[d::6])))
    r_rz = np.zeros(n_total)
    r_rz[0::6] = -dy
    r_rz[1::6] = dx
    m_rz = float(np.sum(M_diag[0::6] * dy ** 2 + M_diag[1::6] * dx ** 2))
    vectores.append((5, r_rz, m_rz))

    for d, r, M_total in vectores:
        for m in range(n_modes_actual):
            phi = mode_shapes[:, m]
            num = np.sum(M_diag * r * phi) ** 2
            denom = np.sum(M_diag * phi * phi) * M_total
            mpf[m, d] = num / denom if denom > 1e-12 else 0

    return ModalOutputs(
        frequencies=freqs.tolist(),
        periods=periods.tolist(),
        omega=omega.tolist(),
        mode_shapes=mode_shapes.T.tolist(),  # [mode_idx][dof_idx]
        mass_participation=mpf.tolist(),
    )
