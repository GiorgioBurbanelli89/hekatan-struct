"""Mesa Torsión — iteración hekatan-struct-py vs ETABS reference.

Itera combinaciones de switches para matchear la tabla ETABS:

    Caso    |P|max  |V2|max  |V3|max  |T|max  |M2|max  |M3|max
    Dead    5.72    2.05     0.45     0.53    1.57     2.43
    Live    4.50    2.20     0.61     1.15    2.13     3.14
    SCP     9.00    4.41     1.22     2.29    4.26     6.28
    UDCon1  20.61   9.03     2.33     3.96    8.16     12.20
    UDCon2  24.86   11.27    2.97     5.22    10.40    15.48

Switches:
    rigid_diaphragm    : ON/OFF
    cardinal_point_8   : ON/OFF
    slab_membrane      : full / disabled
    crack_col_factor   : 1.0 / 0.7 (ACI cols)
    crack_beam_factor  : 1.0 / 0.35 (ACI beams)
    nmesh              : 4, 5, 6

Total: 2 × 2 × 2 × 2 × 2 × 3 = 96 combinaciones.

Usage:
    python examples/mesa_torsion_iterate.py
"""
from __future__ import annotations
import itertools
import json
from pathlib import Path
import numpy as np

from hekatan_struct import (
    NodeInputs, ElementInputs, SectionShape,
    deform, analyze,
    apply_selfweight, apply_cardinal_point_8, apply_stiffness_modifiers,
    compute_picks, compare_picks,
)
from hekatan_struct.extensions import (
    apply_area_load, apply_rigid_diaphragm, score_picks, G_GRAV,
)
from hekatan_struct.solver import _assemble_K, _apply_supports_penalty, _assemble_F


# ─── ETABS Reference (Mesa Torsión 19.1) ───────────────────────────────────
ETABS_PICKS = {
    "Dead":   {"P": 5.72,  "V2": 2.05,  "V3": 0.45, "T": 0.53, "M2": 1.57, "M3": 2.43},
    "Live":   {"P": 4.50,  "V2": 2.20,  "V3": 0.61, "T": 1.15, "M2": 2.13, "M3": 3.14},
    "SCP":    {"P": 9.00,  "V2": 4.41,  "V3": 1.22, "T": 2.29, "M2": 4.26, "M3": 6.28},
    "UDCon1": {"P": 20.61, "V2": 9.03,  "V3": 2.33, "T": 3.96, "M2": 8.16, "M3": 12.20},
    "UDCon2": {"P": 24.86, "V2": 11.27, "V3": 2.97, "T": 5.22, "M2": 10.40, "M3": 15.48},
}

# ─── Modelo constants ───────────────────────────────────────────────────────
LX, LY, H = 6.0, 6.0, 4.0
B_COL, H_COL = 0.40, 0.40
B_BEAM, H_BEAM = 0.30, 0.50
T_SLAB = 0.10
GAMMA = 23.566  # kN/m³ (4000Psi: γ=2.40277 tonf/m³ × g)
E_KNM2 = 2.534564e7 * G_GRAV   # 24.86 GPa
NU = 0.20
RHO = GAMMA / G_GRAV


def build_mesa_torsion(
    *,
    nmesh: int = 5,
    rigid_diaphragm: bool = False,
    cardinal_point_8: bool = False,
    slab_membrane: bool = True,
    crack_col_factor: float = 1.0,
    crack_beam_factor: float = 1.0,
    crack_slab_factor: float = 1.0,
):
    """Construye el modelo Mesa Torsión con los switches dados.

    Returns (nodes, elements, base_ni, ei, master_idx)
    """
    nodes = []
    # base 0..3
    nodes += [(0,0,0), (LX,0,0), (LX,LY,0), (0,LY,0)]
    # floor grid (idx 4..)
    dx, dy = LX / nmesh, LY / nmesh
    for j in range(nmesh + 1):
        for i in range(nmesh + 1):
            nodes.append((i*dx, j*dy, H))
    N_BASE = 4
    tg = lambda i, j: N_BASE + j * (nmesh + 1) + i

    elements = []
    is_col = []
    # 4 cols
    for nI, nJ in [(0, tg(0, 0)), (1, tg(nmesh, 0)), (2, tg(nmesh, nmesh)), (3, tg(0, nmesh))]:
        elements.append([nI, nJ]); is_col.append(True)
    col_end = len(elements)
    # 4 vigas perimetrales × nmesh segs
    for i in range(nmesh): elements.append([tg(i, 0), tg(i+1, 0)]); is_col.append(False)
    for j in range(nmesh): elements.append([tg(nmesh, j), tg(nmesh, j+1)]); is_col.append(False)
    for i in range(nmesh): elements.append([tg(i, nmesh), tg(i+1, nmesh)]); is_col.append(False)
    for j in range(nmesh): elements.append([tg(0, j), tg(0, j+1)]); is_col.append(False)
    beam_end = len(elements)
    # Shells losa
    for j in range(nmesh):
        for i in range(nmesh):
            elements.append([tg(i, j), tg(i+1, j), tg(i+1, j+1), tg(i, j+1)])
            is_col.append(False)

    # Element inputs
    ei = ElementInputs()
    G = E_KNM2 / (2 * (1 + NU))
    Ac = B_COL * H_COL
    Iy_col = B_COL * H_COL**3 / 12
    Iz_col = H_COL * B_COL**3 / 12
    Jc = 0.196 * min(B_COL, H_COL)**3 * max(B_COL, H_COL)
    Av = B_BEAM * H_BEAM
    Iz_beam = B_BEAM * H_BEAM**3 / 12  # strong axis
    Iy_beam = H_BEAM * B_BEAM**3 / 12
    Jv = 0.196 * min(B_BEAM, H_BEAM)**3 * max(B_BEAM, H_BEAM)

    for idx in range(col_end):
        ei.elasticities[idx] = E_KNM2
        ei.shear_moduli[idx] = G
        ei.poissons_ratios[idx] = NU
        ei.areas[idx] = Ac
        ei.moments_of_inertia_z[idx] = Iz_col
        ei.moments_of_inertia_y[idx] = Iy_col
        ei.torsional_constants[idx] = Jc
        ei.densities[idx] = RHO
        ei.section_shapes[idx] = SectionShape(type="rect", b=B_COL, h=H_COL)
        apply_stiffness_modifiers(ei, idx, factor_I=crack_col_factor)
    for idx in range(col_end, beam_end):
        ei.elasticities[idx] = E_KNM2
        ei.shear_moduli[idx] = G
        ei.poissons_ratios[idx] = NU
        ei.areas[idx] = Av
        ei.moments_of_inertia_z[idx] = Iz_beam
        ei.moments_of_inertia_y[idx] = Iy_beam
        ei.torsional_constants[idx] = Jv
        ei.densities[idx] = RHO
        ei.section_shapes[idx] = SectionShape(type="rect", b=B_BEAM, h=H_BEAM)
        apply_stiffness_modifiers(ei, idx, factor_I=crack_beam_factor)
        if cardinal_point_8:
            apply_cardinal_point_8(ei, idx, H_BEAM)
    # Shells
    for idx in range(beam_end, len(elements)):
        ei.elasticities[idx] = E_KNM2
        ei.poissons_ratios[idx] = NU
        ei.thicknesses[idx] = T_SLAB
        ei.densities[idx] = RHO
        # Slab crack factor: aplica a thickness equivalente → reduce E·I and E·A both
        # Simplificación: multiplica E (afecta tanto bending como membrane)
        if crack_slab_factor != 1.0:
            ei.elasticities[idx] *= crack_slab_factor
        # Rigid diaphragm: si ON, desactiva membrana del slab (modela diaph rígido)
        if rigid_diaphragm and not slab_membrane:
            # No way to disable membrane per-element in current solver. Skip.
            pass

    # Base supports — pinned UX UY UZ
    base_ni = NodeInputs(supports={
        0: (True, True, True, False, False, False),
        1: (True, True, True, False, False, False),
        2: (True, True, True, False, False, False),
        3: (True, True, True, False, False, False),
    })

    # Rigid diaphragm master node (si ON) — AGREGAR NODO VIRTUAL EN CENTROIDE EXACTO
    # (evita asimetría cuando nmesh es impar y no hay nodo de la grid en el centro)
    master_idx = -1
    slaves = []
    if rigid_diaphragm:
        # Append virtual master node at exact centroid
        master_idx = len(nodes)
        nodes.append((LX/2, LY/2, H))
        # Slaves = todos los nodos del piso original (sin incluir master)
        slaves = [i for i in range(N_BASE, master_idx) if abs(nodes[i][2] - H) < 1e-6]
        # Master node tiene 6 DOFs pero solo Ux/Uy/Rz participan en diaphragm.
        # Restringir Uz/Rx/Ry para evitar singularidad (no hay elem conectado al master).
        base_ni.supports[master_idx] = (False, False, True, True, True, False)

    return nodes, elements, base_ni, ei, master_idx, slaves, col_end, beam_end


def run_static_case(
    nodes, elements, base_ni, ei, master_idx, slaves,
    sw_mult: float, q_scp_tm2: float, q_live_tm2: float,
    rigid_diaphragm: bool,
):
    """Aplica cargas + resuelve, retorna AnalyzeOutputs."""
    # Build fresh node_inputs cada vez (no acumular cargas entre casos)
    ni = NodeInputs(
        supports=dict(base_ni.supports),
        loads={},
    )
    # Selfweight
    if sw_mult != 0:
        apply_selfweight(nodes, elements, ei, ni, sw_multiplier=sw_mult)
    # Area load SCP + Live
    q_total_kNm2 = (q_scp_tm2 + q_live_tm2) * G_GRAV
    apply_area_load(nodes, elements, ni, q_total_kNm2)

    # Solve con rigid diaphragm si está
    K = _assemble_K(nodes, elements, ei)
    if rigid_diaphragm and master_idx >= 0:
        # Penalty constraint Ux/Uy/Rz slave = master + rigid arm
        penalty = 1e10 * np.max(np.abs(np.diag(K)))
        n_total = K.shape[0]
        pm = np.asarray(nodes[master_idx])
        for slave in slaves:
            ps = np.asarray(nodes[slave])
            dx, dy = ps[0] - pm[0], ps[1] - pm[1]
            for dof_local, coef_dy_dx in [(0, dy), (1, -dx), (5, 0)]:
                # u_slave_dof - u_master_dof + coef * Rz_master = 0
                c = np.zeros(n_total)
                c[6*slave + dof_local] = 1
                c[6*master_idx + dof_local] = -1
                if dof_local in (0, 1):
                    c[6*master_idx + 5] = coef_dy_dx
                K += penalty * np.outer(c, c)
    F = _assemble_F(nodes, ni)
    K_bc, F_bc = _apply_supports_penalty(K, F, ni)
    U = np.linalg.solve(K_bc, F_bc)
    # Build DeformOutputs sin necesidad de reacciones
    from hekatan_struct import DeformOutputs
    out = DeformOutputs()
    for i in range(len(nodes)):
        out.deformations[i] = tuple(U[6*i:6*i+6])
    ana = analyze(nodes, elements, ei, out)
    return ana


def evaluate_variant(variant: dict) -> tuple[dict, float]:
    """Construye + corre 5 casos + computa picks. Retorna (picks_by_case, score)."""
    nodes, elements, base_ni, ei, master_idx, slaves, col_end, beam_end = build_mesa_torsion(
        nmesh=variant["nmesh"],
        rigid_diaphragm=variant["rigid_diaphragm"],
        cardinal_point_8=variant["cardinal_point_8"],
        slab_membrane=variant["slab_membrane"],
        crack_col_factor=variant["crack_col"],
        crack_beam_factor=variant["crack_beam"],
        crack_slab_factor=variant.get("crack_slab", 1.0),
    )
    frame_indices = list(range(beam_end))  # cols + vigas (no shells)

    cases = [
        {"name": "Dead",   "sw": 1.0, "q_scp": 0,   "q_live": 0},
        {"name": "Live",   "sw": 0,   "q_scp": 0,   "q_live": 0.5},
        {"name": "SCP",    "sw": 0,   "q_scp": 1.0, "q_live": 0},
        {"name": "UDCon1", "sw": 1.4, "q_scp": 1.4, "q_live": 0},
        {"name": "UDCon2", "sw": 1.2, "q_scp": 1.2, "q_live": 0.8},  # 1.6 × 0.5
    ]
    picks_by_case = {}
    for c in cases:
        ana = run_static_case(
            nodes, elements, base_ni, ei, master_idx, slaves,
            sw_mult=c["sw"], q_scp_tm2=c["q_scp"], q_live_tm2=c["q_live"],
            rigid_diaphragm=variant["rigid_diaphragm"],
        )
        picks_by_case[c["name"]] = compute_picks(ana, frame_indices=frame_indices)
    sc = score_picks(picks_by_case, ETABS_PICKS)
    return picks_by_case, sc


# ─── Main: iteración ────────────────────────────────────────────────────────
if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding="utf-8")
    # ETABS Shell-Thin = DKE Kirchhoff → activar MZC plate bending
    import hekatan_struct.solver as solver
    solver.USE_KIRCHHOFF_MZC = True
    print("USE_KIRCHHOFF_MZC = True (ETABS Shell-Thin / DKE Wilson)")
    print("="*108)
    print("  Mesa Torsión — hekatan-struct-py vs ETABS Reference")
    print("  Iteración de variantes hasta minimizar score")
    print("="*108)

    space = {
        "rigid_diaphragm":  [False, True],
        "cardinal_point_8": [False, True],
        "slab_membrane":    [True],  # solo aplicable si rigid_diaphragm
        "crack_col":        [1.0, 0.7],
        "crack_beam":       [1.0, 0.35],
        "crack_slab":       [1.0, 0.25],
        "nmesh":            [5],  # fijar mesh=5 (matchea ETABS)
    }
    keys = list(space.keys())
    combos = list(itertools.product(*[space[k] for k in keys]))
    print(f"\n  Total combinaciones: {len(combos)}")

    results = []
    for idx, combo in enumerate(combos):
        variant = dict(zip(keys, combo))
        try:
            picks, score = evaluate_variant(variant)
            results.append({**variant, "picks": picks, "score": score})
            tag = "/".join(f"{k[:3]}={v}" for k, v in variant.items() if k not in ["slab_membrane", "nmesh"])
            print(f"  [{idx+1:2}/{len(combos)}] {tag:80} score={score:.4f}")
        except Exception as e:
            print(f"  [{idx+1:2}/{len(combos)}] FAIL: {e}")

    # Ordenar por score
    results.sort(key=lambda r: r["score"])
    best = results[0]

    print(f"\n  🏆 GANADOR:")
    for k in keys:
        print(f"     {k:18}: {best[k]}")
    print(f"     score = {best['score']:.5f}")
    print()
    print("  Comparativa GANADOR vs ETABS:")
    print(compare_picks(best["picks"], ETABS_PICKS))

    # Save best as JSON
    out_path = Path(__file__).parent / "mesa_torsion_best.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump({k: v for k, v in best.items()}, f, indent=2, default=str)
    print(f"  Guardado: {out_path.name}")
