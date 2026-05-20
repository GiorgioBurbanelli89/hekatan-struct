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
)
from .elements.shell import shell_q4_stiffness
from .elements.plate_mzc import mzc_plate_stiffness, mzc_to_shell_q4_24

# Global flag — usar MZC Kirchhoff (= ETABS Shell-Thin / DKE) en vez de Mindlin Q4 (= DSE)
USE_KIRCHHOFF_MZC = False


# ═══════════════════════════════════════════════════════════════════════════
# Helpers internos
# ═══════════════════════════════════════════════════════════════════════════
def _is_frame(conn: Element) -> bool:
    return len(conn) == 2


def _is_shell(conn: Element) -> bool:
    return len(conn) == 4


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
            p_i = np.asarray(nodes[i], dtype=float)
            p_j = np.asarray(nodes[j], dtype=float)
            e1, e2, e3, L = frame_local_axes_csi(p_i, p_j)
            E = element_inputs.elasticities[idx]
            nu = element_inputs.poissons_ratios.get(idx, 0.2)
            G = element_inputs.shear_moduli.get(idx, E / (2 * (1 + nu)))
            A = element_inputs.areas[idx]
            Iy = element_inputs.moments_of_inertia_y[idx]
            Iz = element_inputs.moments_of_inertia_z[idx]
            J = element_inputs.torsional_constants[idx]
            k_loc = frame_stiffness_local(E, G, A, Iz, Iy, J, L)
            # Rigid arm vía insertion_points (cardinal points). Si está, aplica.
            ins = element_inputs.insertion_points.get(idx)
            if ins is not None:
                dy, dz = ins
                r_loc = np.array([0.0, dy, dz])
                T_arm = rigid_arm_transform(r_loc, r_loc)
                k_loc = T_arm.T @ k_loc @ T_arm
            T = frame_T(e1, e2, e3)
            k_glob = T @ k_loc @ T.T
            dofs = list(range(6*i, 6*i+6)) + list(range(6*j, 6*j+6))
            for ii, di in enumerate(dofs):
                for jj, dj in enumerate(dofs):
                    K[di, dj] += k_glob[ii, jj]
        elif _is_shell(conn):
            coords_xy = np.array([nodes[n_idx][:2] for n_idx in conn])
            E = element_inputs.elasticities[idx]
            nu = element_inputs.poissons_ratios.get(idx, 0.2)
            t = element_inputs.thicknesses[idx]
            if USE_KIRCHHOFF_MZC:
                # ETABS Shell-Thin = DKE Kirchhoff: MZC plate bending + Mindlin membrana
                k_loc = shell_q4_stiffness(coords_xy, E, nu, t,
                                            include_membrane=True, include_bending=False)
                k_plate = mzc_plate_stiffness(coords_xy, E, nu, t)
                k_loc = k_loc + mzc_to_shell_q4_24(k_plate)
            else:
                k_loc = shell_q4_stiffness(coords_xy, E, nu, t)
            dofs = []
            for n_idx in conn:
                dofs += list(range(6*n_idx, 6*n_idx+6))
            for ii, di in enumerate(dofs):
                for jj, dj in enumerate(dofs):
                    K[di, dj] += k_loc[ii, jj]
    return K


def _assemble_F(nodes: Sequence[Node], node_inputs: NodeInputs) -> np.ndarray:
    n = len(nodes)
    F = np.zeros(6 * n)
    for node_idx, load in node_inputs.loads.items():
        for d, v in enumerate(load):
            F[6 * node_idx + d] += v
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
            L = np.linalg.norm(p_j - p_i)
            A = element_inputs.areas[idx]
            m_total = A * L * rho
            for dof in [6*i, 6*i+1, 6*i+2, 6*j, 6*j+1, 6*j+2]:
                M[dof] += m_total / 2
        elif _is_shell(conn):
            coords_xy = np.array([nodes[n_idx][:2] for n_idx in conn])
            x, y = coords_xy[:, 0], coords_xy[:, 1]
            area = 0.5 * abs((x[0]-x[2]) * (y[1]-y[3]) - (x[1]-x[3]) * (y[0]-y[2]))
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


# ═══════════════════════════════════════════════════════════════════════════
# Public API
# ═══════════════════════════════════════════════════════════════════════════
def deform(
    nodes: Sequence[Node],
    elements: Sequence[Element],
    node_inputs: NodeInputs,
    element_inputs: ElementInputs,
) -> DeformOutputs:
    """Análisis lineal estático. Espejo de awatif v2 deform()."""
    K_orig = _assemble_K(nodes, elements, element_inputs)
    F_orig = _assemble_F(nodes, node_inputs)
    K_bc, F_bc = _apply_supports_penalty(K_orig, F_orig, node_inputs)
    U = np.linalg.solve(K_bc, F_bc)

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
            p_i = np.asarray(nodes[i], dtype=float)
            p_j = np.asarray(nodes[j], dtype=float)
            e1, e2, e3, L = frame_local_axes_csi(p_i, p_j)
            E = element_inputs.elasticities[idx]
            nu = element_inputs.poissons_ratios.get(idx, 0.2)
            G = element_inputs.shear_moduli.get(idx, E / (2 * (1 + nu)))
            A = element_inputs.areas[idx]
            Iy = element_inputs.moments_of_inertia_y[idx]
            Iz = element_inputs.moments_of_inertia_z[idx]
            J = element_inputs.torsional_constants[idx]
            k_loc = frame_stiffness_local(E, G, A, Iz, Iy, J, L)
            ins = element_inputs.insertion_points.get(idx)
            if ins is not None:
                dy, dz = ins
                r_loc = np.array([0.0, dy, dz])
                T_arm = rigid_arm_transform(r_loc, r_loc)
                k_loc = T_arm.T @ k_loc @ T_arm
            T = frame_T(e1, e2, e3)
            u_global_12 = np.concatenate([U[6*i:6*i+6], U[6*j:6*j+6]])
            u_local = T.T @ u_global_12
            f_local = k_loc @ u_local
            # CSI sign convention en sentido de sección
            out.normals[idx]    = (f_local[0],  -f_local[6])
            out.shears_y[idx]   = (f_local[1],  -f_local[7])
            out.shears_z[idx]   = (f_local[2],  -f_local[8])
            out.torsions[idx]   = (f_local[3],  -f_local[9])
            out.bendings_y[idx] = (f_local[4],   f_local[10])
            out.bendings_z[idx] = (f_local[5],   f_local[11])
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
    free = [i for i in range(n_total) if i not in restrained and M_diag[i] > 0]
    K_ff = K[np.ix_(free, free)]
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
    for d in range(3):  # solo traslacional
        r = np.zeros(n_total)
        for nidx in range(len(nodes)):
            r[6*nidx + d] = 1.0
        M_total = np.sum(M_diag[d::6])
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
