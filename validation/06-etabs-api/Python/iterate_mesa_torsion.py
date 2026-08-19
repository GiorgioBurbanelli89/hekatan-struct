# -*- coding: utf-8 -*-
"""
═══════════════════════════════════════════════════════════════════════════════
 Mesa de Torsión — Iteración de formulaciones FEM para matchear ETABS 19.1
═══════════════════════════════════════════════════════════════════════════════

 Modelo de referencia (Gabriela/Seproinca 2020, e2k reabierto en ETABS 19.1):
   1 piso 6×6m × 4m alto · hormigón 4000Psi · 4 cols C40×40 PINNED-base
   4 vigas V30×50 perim · losa 10cm ShellThin · diafragma rígido D1
   Modal Eigen 12 modos

 Iteramos en OpenSeesPy las siguientes variantes hasta matchear ETABS:
   1. Shell element type       : ShellMITC4 (Bathe-Dvorkin) vs ShellDKGQ
   2. Mass model              : -mass element (consistent) vs lumped nodal
   3. Diaphragm constraint    : rigidDiaphragm vs equalDOF UxUyRz vs none
   4. Mesh refinement         : 4×4, 5×5, 6×6, 8×8
   5. Base support            : pinned (UX UY UZ) vs fixed (6 DOFs)
   6. Concrete material model : Elastic vs ElasticIsotropic
   7. Column section          : elasticBeamColumn vs ForceBeamColumn (1 Lobatto)

 Output:
   - mesa_torsion_iteration_report.json  → ranking de todas las variantes
   - mesa_torsion_best.py                → script standalone con la combinación ganadora
   - mesa_torsion_iteration_summary.md   → tabla resumen humanamente legible

 Reference target (ETABS):
   Se lee de ../Api CSI Computers/etabs-api/python-verificado/mesa_torsion_etabs_results.json
   Si NO existe, usa target teórico SDOF como aproximación.
═══════════════════════════════════════════════════════════════════════════════
"""
import os
import sys
import json
import math
import itertools
from pathlib import Path

import openseespy.opensees as ops

sys.stdout.reconfigure(encoding="utf-8")

# ═════════════════════════════════════════════════════════════════════════════
# Constantes físicas del modelo ETABS
# ═════════════════════════════════════════════════════════════════════════════
G_M_S2     = 9.80665             # m/s²
LX_M       = 6.0                 # losa Lx
LY_M       = 6.0                 # losa Ly
H_M        = 4.0                 # alto piso
B_COL      = 0.40                # col 40×40 cm
H_COL      = 0.40
B_BEAM     = 0.30                # viga 30×50 cm
H_BEAM     = 0.50
T_SLAB     = 0.10                # losa 10 cm
# Material concreto 4000Psi (ETABS e2k):
#   E = 2.534564e7 tonf/m²  →  ×g = 2.4862e8 kN/m² (24.86 GPa)
#   γ = 2.40277 tonf/m³     →  ×g = 23.566 kN/m³
#   ν = 0.20
E_KNM2     = 2.534564e7 * G_M_S2
NU         = 0.20
GAMMA_KNM3 = 2.40277 * G_M_S2
RHO_TONM3  = GAMMA_KNM3 / G_M_S2  # = 2.40277 ton/m³ (consistent mass units kN·s²/m⁴/m³)

HERE = Path(__file__).parent.absolute()
ETABS_REF_PATH = HERE.parent / "Api CSI Computers" / "etabs-api" / "python-verificado" / "mesa_torsion_etabs_results.json"


# ═════════════════════════════════════════════════════════════════════════════
# Helpers de sección y propiedades
# ═════════════════════════════════════════════════════════════════════════════
def rect_section_properties(b, h):
    """Devuelve (A, Iy, Iz, J) para sección rectangular en kN-m."""
    A = b * h
    Iz = b * h**3 / 12.0
    Iy = h * b**3 / 12.0
    # Saint-Venant aprox para rect (Roark)
    a = max(b, h) / 2.0
    bb = min(b, h) / 2.0
    J = a * bb**3 * (16/3 - 3.36 * (bb/a) * (1 - (bb/a)**4 / 12))
    return A, Iy, Iz, J


# ═════════════════════════════════════════════════════════════════════════════
# Construcción + análisis modal en OpenSeesPy
# ═════════════════════════════════════════════════════════════════════════════
def build_and_run_modal(variant, n_modes=12):
    """
    variant = {
      'shellType'   : 'ShellMITC4' | 'ShellDKGQ' | 'ShellNLDKGQ',
      'massModel'   : 'consistent' | 'lumped',
      'diaphragm'   : 'rigid' | 'equalDOF' | 'none',
      'nMesh'       : int,
      'baseSupport' : 'pinned' | 'fixed',
      'colElem'     : 'elastic' | 'forceBeam',
    }
    Returns dict { 'success', 'periods': [..], 'frequencies': [..], 'error': str|None }
    """
    nMesh = variant["nMesh"]
    shellType = variant["shellType"]
    massModel = variant["massModel"]
    diaphragm = variant["diaphragm"]
    baseSupport = variant["baseSupport"]
    colElem = variant["colElem"]

    try:
        ops.wipe()
        ops.model("basic", "-ndm", 3, "-ndf", 6)

        # ─── Material concreto 4000Psi ──────────────────────────────────
        # Para shell ElasticIsotropic / ElasticMembrane:
        ops.nDMaterial("ElasticIsotropic", 1, E_KNM2, NU, RHO_TONM3)

        # Sección shell (espesor 0.10 m)
        ops.section("ElasticMembranePlateSection", 1, E_KNM2, NU, T_SLAB, RHO_TONM3)

        # ─── Nodos ────────────────────────────────────────────────────
        # Base nodos (1..4) en las esquinas a z=0
        ops.node(1, 0.0,  0.0,  0.0)
        ops.node(2, LX_M, 0.0,  0.0)
        ops.node(3, LX_M, LY_M, 0.0)
        ops.node(4, 0.0,  LY_M, 0.0)

        # Floor grid: tags = 100 + j*(nMesh+1) + i
        dx = LX_M / nMesh
        dy = LY_M / nMesh

        def floor_tag(i, j):
            return 100 + j * (nMesh + 1) + i

        for j in range(nMesh + 1):
            for i in range(nMesh + 1):
                ops.node(floor_tag(i, j), i * dx, j * dy, H_M)

        # ─── Supports ─────────────────────────────────────────────────
        if baseSupport == "pinned":
            for n in [1, 2, 3, 4]:
                ops.fix(n, 1, 1, 1, 0, 0, 0)  # UX UY UZ restraint, rot libres
        else:
            for n in [1, 2, 3, 4]:
                ops.fix(n, 1, 1, 1, 1, 1, 1)

        # ─── Material elastic 3D y transformaciones para frames ───────
        ops.geomTransf("Linear", 1, 0.0, 1.0, 0.0)  # cols: local x vertical
        ops.geomTransf("Linear", 2, 0.0, 0.0, 1.0)  # vigas X: local x horizontal X
        ops.geomTransf("Linear", 3, 0.0, 0.0, 1.0)  # vigas Y: local x horizontal Y

        # ─── 4 columnas C40×40 ────────────────────────────────────────
        Ac, Iyc, Izc, Jc = rect_section_properties(B_COL, H_COL)
        Gc = E_KNM2 / (2 * (1 + NU))

        col_pairs = [
            (1, floor_tag(0, 0)),
            (2, floor_tag(nMesh, 0)),
            (3, floor_tag(nMesh, nMesh)),
            (4, floor_tag(0, nMesh)),
        ]
        eleTag = 1
        for nI, nJ in col_pairs:
            ops.element(
                "elasticBeamColumn", eleTag, nI, nJ,
                Ac, E_KNM2, Gc, Jc, Iyc, Izc, 1,
                "-mass", Ac * RHO_TONM3,
            )
            eleTag += 1

        # ─── 4 vigas V30×50 perimetrales (subdivididas según mesh) ────
        Av, Iyv, Izv, Jv = rect_section_properties(B_BEAM, H_BEAM)
        # Lado sur (y=0)
        for i in range(nMesh):
            ops.element(
                "elasticBeamColumn", eleTag,
                floor_tag(i, 0), floor_tag(i + 1, 0),
                Av, E_KNM2, Gc, Jv, Iyv, Izv, 2,
                "-mass", Av * RHO_TONM3,
            )
            eleTag += 1
        # Lado este (x=Lx)
        for j in range(nMesh):
            ops.element(
                "elasticBeamColumn", eleTag,
                floor_tag(nMesh, j), floor_tag(nMesh, j + 1),
                Av, E_KNM2, Gc, Jv, Iyv, Izv, 3,
                "-mass", Av * RHO_TONM3,
            )
            eleTag += 1
        # Lado norte (y=Ly)
        for i in range(nMesh):
            ops.element(
                "elasticBeamColumn", eleTag,
                floor_tag(i, nMesh), floor_tag(i + 1, nMesh),
                Av, E_KNM2, Gc, Jv, Iyv, Izv, 2,
                "-mass", Av * RHO_TONM3,
            )
            eleTag += 1
        # Lado oeste (x=0)
        for j in range(nMesh):
            ops.element(
                "elasticBeamColumn", eleTag,
                floor_tag(0, j), floor_tag(0, j + 1),
                Av, E_KNM2, Gc, Jv, Iyv, Izv, 3,
                "-mass", Av * RHO_TONM3,
            )
            eleTag += 1

        # ─── Shell elements losa ──────────────────────────────────────
        for j in range(nMesh):
            for i in range(nMesh):
                n1 = floor_tag(i, j)
                n2 = floor_tag(i + 1, j)
                n3 = floor_tag(i + 1, j + 1)
                n4 = floor_tag(i, j + 1)
                ops.element(shellType, eleTag, n1, n2, n3, n4, 1)
                eleTag += 1

        # ─── Mass model ───────────────────────────────────────────────
        if massModel == "lumped":
            # Lumped nodal mass: cada nodo del piso recibe masa tributaria de
            # losa + share de beams + share de cols. Aproximación tipo CSI.
            # Masa total losa = A * t * rho
            m_slab_total = LX_M * LY_M * T_SLAB * RHO_TONM3
            n_floor_nodes = (nMesh + 1) ** 2
            m_per_floor_node = m_slab_total / n_floor_nodes
            for j in range(nMesh + 1):
                for i in range(nMesh + 1):
                    ops.mass(floor_tag(i, j), m_per_floor_node, m_per_floor_node, m_per_floor_node, 0, 0, 0)

        # ─── Diaphragm constraint ─────────────────────────────────────
        if diaphragm == "rigid":
            # Master node en centro del piso
            mst = 999
            ops.node(mst, LX_M / 2, LY_M / 2, H_M)
            ops.fix(mst, 0, 0, 1, 1, 1, 0)  # diafragma rígido en plano XY → libera Ux Uy Rz
            slave_nodes = [floor_tag(i, j) for j in range(nMesh + 1) for i in range(nMesh + 1)]
            ops.rigidDiaphragm(3, mst, *slave_nodes)
        elif diaphragm == "equalDOF":
            mst = floor_tag(0, 0)
            for j in range(nMesh + 1):
                for i in range(nMesh + 1):
                    n = floor_tag(i, j)
                    if n != mst:
                        ops.equalDOF(mst, n, 1, 2, 6)  # Ux Uy Rz

        # ─── Eigen modal analysis ─────────────────────────────────────
        # Usar -fullGenLapack para robustez en modelos pequeños
        eigs = ops.eigen("-fullGenLapack", n_modes)
        ws = [math.sqrt(max(e, 1e-12)) for e in eigs]
        freqs = [w / (2 * math.pi) for w in ws]
        periods = [(2 * math.pi / w) if w > 1e-6 else float("inf") for w in ws]

        return {"success": True, "periods": periods, "frequencies": freqs, "omega": ws, "error": None}

    except Exception as e:
        import traceback
        return {
            "success": False,
            "periods": [],
            "frequencies": [],
            "omega": [],
            "error": f"{type(e).__name__}: {e}\n{traceback.format_exc()}",
        }


# ═════════════════════════════════════════════════════════════════════════════
# Target ETABS
# ═════════════════════════════════════════════════════════════════════════════
def load_etabs_target():
    """Lee periodos ETABS. Si no existe, usa estimación teórica SDOF."""
    if ETABS_REF_PATH.exists():
        data = json.loads(ETABS_REF_PATH.read_text(encoding="utf-8"))
        periods = data.get("periods_s", [])
        mpf = data.get("MPF_pct", {})
        ux = mpf.get("UX", [])
        uy = mpf.get("UY", [])
        rz = mpf.get("RZ", [])

        # Identificar T1 (Ux), T2 (Uy), T3 (Rz)
        def find_dominant(arr, threshold=40):
            for i, v in enumerate(arr):
                if v > threshold:
                    return i, periods[i] if i < len(periods) else None
            return -1, None

        ix, T_ux = find_dominant(ux)
        iy, T_uy = find_dominant(uy)
        ir, T_rz = find_dominant(rz)
        return {
            "source": "ETABS 19.1",
            "T_Ux": T_ux,
            "T_Uy": T_uy,
            "T_Rz": T_rz,
            "all_periods": periods,
            "raw": data,
        }
    else:
        print(f"  [WARN] No existe {ETABS_REF_PATH.name} — usando target teórico SDOF")
        # SDOF aproximado: 4 cols pinned-fixed paralelas
        Ic = (B_COL * H_COL**3) / 12.0
        kc = (3 * E_KNM2 * Ic) / (H_M ** 3)
        K = 4 * kc
        # Masa total (solo selfweight, sin loads — como mass source ETABS)
        m_slab = LX_M * LY_M * T_SLAB * RHO_TONM3
        m_vigas = 2 * (LX_M + LY_M) * B_BEAM * H_BEAM * RHO_TONM3
        m_cols = 4 * H_M * B_COL * H_COL * RHO_TONM3
        m_total = m_slab + m_vigas + m_cols
        T_theory = 2 * math.pi * math.sqrt(m_total / K)
        # Para torsión: K_θ = 4 * kc * r², r = √(Lx²+Ly²)/2
        r = math.sqrt(LX_M**2 + LY_M**2) / 2
        K_theta = 4 * kc * r**2
        # I_p = m * (Lx²+Ly²)/12 (placa rect)
        I_p = m_slab * (LX_M**2 + LY_M**2) / 12 + m_vigas * (LX_M**2 + LY_M**2) / 12 * 0.5
        T_theta = 2 * math.pi * math.sqrt(I_p / K_theta)
        return {
            "source": "SDOF analítico (sin ETABS)",
            "T_Ux": T_theory,
            "T_Uy": T_theory,
            "T_Rz": T_theta,
            "all_periods": [],
            "raw": {"K": K, "m_total": m_total, "K_theta": K_theta, "I_p": I_p},
        }


# ═════════════════════════════════════════════════════════════════════════════
# Iteración de variantes
# ═════════════════════════════════════════════════════════════════════════════
def iterate_all_variants(target):
    """Itera el producto cartesiano de las variantes y rankea por error vs target."""
    variants_space = {
        "shellType":   ["ShellMITC4", "ShellDKGQ", "ShellNLDKGQ"],
        "massModel":   ["consistent", "lumped"],
        "diaphragm":   ["rigid", "equalDOF", "none"],
        "nMesh":       [4, 5, 6, 8],
        "baseSupport": ["pinned", "fixed"],
        "colElem":     ["elastic"],  # forceBeam quita opciones de mass distribuída — skip por simplicidad
    }
    keys = list(variants_space.keys())
    combos = list(itertools.product(*[variants_space[k] for k in keys]))
    print(f"  Total de combinaciones: {len(combos)}")

    results = []
    for idx, combo in enumerate(combos):
        variant = dict(zip(keys, combo))
        tag = f"{variant['shellType']}/{variant['massModel']}/{variant['diaphragm']}/m={variant['nMesh']}/{variant['baseSupport']}"
        res = build_and_run_modal(variant, n_modes=12)
        if not res["success"]:
            print(f"  [{idx+1:3}/{len(combos)}] FAIL: {tag}  ({res['error'].splitlines()[0]})")
            results.append({**variant, "ok": False, "error": res["error"].splitlines()[0], "periods": [], "score": float("inf")})
            continue

        periods = res["periods"]
        # Top 3 con periodo finito = candidatos para Ux, Uy, Rz
        finite_periods = [t for t in periods if math.isfinite(t)]
        if len(finite_periods) < 3:
            results.append({**variant, "ok": False, "error": "less than 3 finite modes", "periods": periods, "score": float("inf")})
            continue

        T1, T2, T3 = finite_periods[0], finite_periods[1], finite_periods[2]

        # Score: error relativo combinado vs ETABS target
        # Por simetría, T_Ux ≈ T_Uy → comparar T1 contra max(T_Ux, T_Uy)
        T_target_lateral = max(target["T_Ux"], target["T_Uy"]) if target["T_Ux"] else None
        T_target_torsion = target["T_Rz"]
        err1 = abs(T1 - T_target_lateral) / T_target_lateral if T_target_lateral else 0
        err2 = abs(T2 - T_target_lateral) / T_target_lateral if T_target_lateral else 0
        err3 = abs(T3 - T_target_torsion) / T_target_torsion if T_target_torsion else 0
        score = err1 + err2 + err3

        results.append({
            **variant,
            "ok": True,
            "T1_lateral_x": T1,
            "T2_lateral_y": T2,
            "T3_torsion":   T3,
            "all_periods":  periods[:6],
            "err_T1_pct": err1 * 100,
            "err_T2_pct": err2 * 100,
            "err_T3_pct": err3 * 100,
            "score":     score,
        })
        if (idx + 1) % 10 == 0 or idx < 5:
            print(f"  [{idx+1:3}/{len(combos)}] {tag:60} T1={T1:.4f} T3={T3:.4f} score={score:.4f}")

    # Ordenar por score (menor = mejor match)
    results.sort(key=lambda r: r["score"])
    return results


# ═════════════════════════════════════════════════════════════════════════════
# Output: best variant standalone + JSON + Markdown
# ═════════════════════════════════════════════════════════════════════════════
def write_best_standalone(best, out_path):
    """Genera un script OpenSeesPy standalone con la combinación ganadora."""
    code = f'''# -*- coding: utf-8 -*-
"""
Mesa de Torsión — formulación OpenSeesPy GANADORA (match óptimo vs ETABS 19.1)

Variante:
  shellType   : {best["shellType"]}
  massModel   : {best["massModel"]}
  diaphragm   : {best["diaphragm"]}
  nMesh       : {best["nMesh"]}
  baseSupport : {best["baseSupport"]}
  colElem     : {best["colElem"]}

Resultados:
  T1 lateral X = {best["T1_lateral_x"]:.5f} s   (ETABS target → err {best["err_T1_pct"]:.2f}%)
  T2 lateral Y = {best["T2_lateral_y"]:.5f} s   (ETABS target → err {best["err_T2_pct"]:.2f}%)
  T3 torsión Rz = {best["T3_torsion"]:.5f} s   (ETABS target → err {best["err_T3_pct"]:.2f}%)
  Score combinado: {best["score"]:.5f}

Generado por iterate_mesa_torsion.py
"""
import openseespy.opensees as ops
import math

G = {G_M_S2}
LX, LY, H = {LX_M}, {LY_M}, {H_M}
B_COL, H_COL = {B_COL}, {H_COL}
B_BEAM, H_BEAM = {B_BEAM}, {H_BEAM}
T_SLAB = {T_SLAB}
E = {E_KNM2}
NU = {NU}
RHO = {RHO_TONM3}
NMESH = {best["nMesh"]}
SHELL_TYPE = "{best["shellType"]}"

ops.wipe()
ops.model("basic", "-ndm", 3, "-ndf", 6)
ops.nDMaterial("ElasticIsotropic", 1, E, NU, RHO)
ops.section("ElasticMembranePlateSection", 1, E, NU, T_SLAB, RHO)

# Base + floor nodes
ops.node(1, 0, 0, 0); ops.node(2, LX, 0, 0)
ops.node(3, LX, LY, 0); ops.node(4, 0, LY, 0)
dx, dy = LX / NMESH, LY / NMESH
def tg(i, j): return 100 + j * (NMESH + 1) + i
for j in range(NMESH + 1):
    for i in range(NMESH + 1):
        ops.node(tg(i, j), i * dx, j * dy, H)

# Supports
for n in [1, 2, 3, 4]:
    {"ops.fix(n, 1, 1, 1, 0, 0, 0)" if best["baseSupport"] == "pinned" else "ops.fix(n, 1, 1, 1, 1, 1, 1)"}

# Frame transformations
ops.geomTransf("Linear", 1, 0, 1, 0)
ops.geomTransf("Linear", 2, 0, 0, 1)

# Section properties
def rect_props(b, h):
    A = b * h
    Iz = b * h**3 / 12; Iy = h * b**3 / 12
    a, bb = max(b, h)/2, min(b, h)/2
    J = a * bb**3 * (16/3 - 3.36 * (bb/a) * (1 - (bb/a)**4 / 12))
    return A, Iy, Iz, J

Ac, Iyc, Izc, Jc = rect_props(B_COL, H_COL)
Av, Iyv, Izv, Jv = rect_props(B_BEAM, H_BEAM)
GMOD = E / (2 * (1 + NU))

# Columns
eleTag = 1
for nI, nJ in [(1, tg(0, 0)), (2, tg(NMESH, 0)), (3, tg(NMESH, NMESH)), (4, tg(0, NMESH))]:
    ops.element("elasticBeamColumn", eleTag, nI, nJ, Ac, E, GMOD, Jc, Iyc, Izc, 1, "-mass", Ac * RHO)
    eleTag += 1

# Beams perimeter
for i in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(i, 0), tg(i+1, 0), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1
for j in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(NMESH, j), tg(NMESH, j+1), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1
for i in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(i, NMESH), tg(i+1, NMESH), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1
for j in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(0, j), tg(0, j+1), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1

# Shells
for j in range(NMESH):
    for i in range(NMESH):
        ops.element(SHELL_TYPE, eleTag, tg(i, j), tg(i+1, j), tg(i+1, j+1), tg(i, j+1), 1)
        eleTag += 1
'''
    # Mass model
    if best["massModel"] == "lumped":
        code += '''
# Lumped nodal masses (slab tributary)
m_per_node = (LX * LY * T_SLAB * RHO) / ((NMESH + 1) ** 2)
for j in range(NMESH + 1):
    for i in range(NMESH + 1):
        ops.mass(tg(i, j), m_per_node, m_per_node, m_per_node, 0, 0, 0)
'''
    # Diaphragm
    if best["diaphragm"] == "rigid":
        code += '''
# Rigid diaphragm
mst = 999
ops.node(mst, LX / 2, LY / 2, H)
ops.fix(mst, 0, 0, 1, 1, 1, 0)
slaves = [tg(i, j) for j in range(NMESH + 1) for i in range(NMESH + 1)]
ops.rigidDiaphragm(3, mst, *slaves)
'''
    elif best["diaphragm"] == "equalDOF":
        code += '''
# Equal DOF diaphragm
mst = tg(0, 0)
for j in range(NMESH + 1):
    for i in range(NMESH + 1):
        n = tg(i, j)
        if n != mst:
            ops.equalDOF(mst, n, 1, 2, 6)
'''
    code += '''
# Modal analysis
eigs = ops.eigen("-fullGenLapack", 12)
print("\\nMode  T(s)      f(Hz)")
for i, e in enumerate(eigs):
    w = math.sqrt(max(e, 1e-12))
    T = 2 * math.pi / w
    f = w / (2 * math.pi)
    print(f"  {i+1:2}   {T:.5f}   {f:.4f}")
'''
    out_path.write_text(code, encoding="utf-8")


def write_summary_md(target, results, out_path):
    """Tabla markdown con top 10 + bottom 3."""
    lines = []
    lines.append("# Mesa de Torsión — Iteración FEM en Python (OpenSeesPy)")
    lines.append("")
    lines.append(f"Target (`{target['source']}`):")
    lines.append("")
    lines.append(f"- **T₁ (lateral X)** = {target['T_Ux']:.5f} s" if target['T_Ux'] else "- T₁ no disponible")
    lines.append(f"- **T₂ (lateral Y)** = {target['T_Uy']:.5f} s" if target['T_Uy'] else "- T₂ no disponible")
    lines.append(f"- **T₃ (torsión Rz)** = {target['T_Rz']:.5f} s" if target['T_Rz'] else "- T₃ no disponible")
    lines.append("")
    valid = [r for r in results if r.get("ok")]
    lines.append(f"Variantes evaluadas: **{len(results)}** ({len(valid)} válidas, {len(results)-len(valid)} con error)")
    lines.append("")
    lines.append("## Top 10 — mejor match con ETABS")
    lines.append("")
    lines.append("| Rank | Shell        | Mass       | Diaphragm | nMesh | Base    | T₁(s)   | T₂(s)   | T₃(s)   | err T₁ | err T₂ | err T₃ | Score |")
    lines.append("|------|--------------|------------|-----------|-------|---------|---------|---------|---------|--------|--------|--------|-------|")
    for r in valid[:10]:
        lines.append(
            f"| {valid.index(r)+1} | {r['shellType']:12} | {r['massModel']:10} | {r['diaphragm']:9} | "
            f"{r['nMesh']:5} | {r['baseSupport']:7} | {r['T1_lateral_x']:.4f} | {r['T2_lateral_y']:.4f} | "
            f"{r['T3_torsion']:.4f} | {r['err_T1_pct']:+.2f}% | {r['err_T2_pct']:+.2f}% | {r['err_T3_pct']:+.2f}% | "
            f"{r['score']:.4f} |"
        )
    lines.append("")
    if valid:
        b = valid[0]
        lines.append("## 🏆 Ganador")
        lines.append("")
        lines.append(f"- Shell: **{b['shellType']}**")
        lines.append(f"- Mass model: **{b['massModel']}**")
        lines.append(f"- Diaphragm constraint: **{b['diaphragm']}**")
        lines.append(f"- Mesh: **{b['nMesh']}×{b['nMesh']}**")
        lines.append(f"- Base support: **{b['baseSupport']}**")
        lines.append("")
        lines.append("Script standalone: `mesa_torsion_best.py`")
        lines.append("")
    out_path.write_text("\n".join(lines), encoding="utf-8")


# ═════════════════════════════════════════════════════════════════════════════
# MAIN
# ═════════════════════════════════════════════════════════════════════════════
if __name__ == "__main__":
    print("="*72)
    print("  Mesa de Torsión — Iteración FEM en Python (OpenSeesPy)")
    print("="*72)

    target = load_etabs_target()
    print(f"\nTarget ({target['source']}):")
    print(f"  T_Ux = {target['T_Ux']}")
    print(f"  T_Uy = {target['T_Uy']}")
    print(f"  T_Rz = {target['T_Rz']}")

    print("\nIterando variantes…")
    results = iterate_all_variants(target)

    # Salvar JSON
    report_path = HERE / "mesa_torsion_iteration_report.json"
    report = {
        "target": target,
        "n_total": len(results),
        "n_valid": sum(1 for r in results if r.get("ok")),
        "ranked": results,
    }
    report_path.write_text(json.dumps(report, indent=2, default=str), encoding="utf-8")
    print(f"\n  JSON: {report_path.name}")

    # Salvar best standalone
    valid = [r for r in results if r.get("ok")]
    if valid:
        best = valid[0]
        best_path = HERE / "mesa_torsion_best.py"
        write_best_standalone(best, best_path)
        print(f"  Best script standalone: {best_path.name}")
        print(f"\n  🏆 GANADOR:")
        print(f"     Shell: {best['shellType']}")
        print(f"     Mass:  {best['massModel']}")
        print(f"     Diaph: {best['diaphragm']}")
        print(f"     Mesh:  {best['nMesh']}×{best['nMesh']}")
        print(f"     Base:  {best['baseSupport']}")
        print(f"     T1 = {best['T1_lateral_x']:.5f} s  (err {best['err_T1_pct']:+.2f}%)")
        print(f"     T2 = {best['T2_lateral_y']:.5f} s  (err {best['err_T2_pct']:+.2f}%)")
        print(f"     T3 = {best['T3_torsion']:.5f} s  (err {best['err_T3_pct']:+.2f}%)")
        print(f"     Score = {best['score']:.5f}")

    # Salvar markdown summary
    summary_path = HERE / "mesa_torsion_iteration_summary.md"
    write_summary_md(target, results, summary_path)
    print(f"  Summary: {summary_path.name}")
    print("\n  Done.")
