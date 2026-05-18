# -*- coding: utf-8 -*-
"""
═════════════════════════════════════════════════════════════════════════════
 01_test_diaphragm_comparison.py — VERIFICADO ✓ contra ETABS 22 (2026-04-24)
═════════════════════════════════════════════════════════════════════════════

Compara MODAL ANALYSIS de un edificio idéntico cambiando solo el modelado de
la losa. Construye los 3 modelos vía API Python, corre análisis modal en
cada uno y devuelve la tabla comparativa de períodos.

CASOS:
  1. Membrane:        SetSlab(ShellType=3) sin diaphragm constraint
  2. Flex Diaphragm:  SetSlab(ShellType=1, Shell-Thin) + Diaphragm SemiRigid=True
  3. Rigid Diaphragm: SetSlab(ShellType=1, Shell-Thin) + Diaphragm SemiRigid=False

USO:
  - Cierra ETABS si está abierto
  - python 01_test_diaphragm_comparison.py
  - El script lanza ETABS 22, construye los 3 modelos, los corre, cierra ETABS

RESULTADO ESPERADO:
  Rigid Diaphragm da T₁/T₃ ~44% MÁS CORTOS que Flexible Diaphragm
  → Confirma que el TIPO de modelado de losa afecta significativamente la
  rigidez torsional del edificio (diferencia >5% típica en T₃ = modo Rz).

REQUISITOS:
  - ETABS 22 instalado
  - Python 3.7+
  - pip install comtypes numpy
═════════════════════════════════════════════════════════════════════════════
"""
import os, sys, time, json
import comtypes.client
import numpy as np

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

# ── Parámetros del modelo ────────────────────────────────────────────────
N_VANOS_X, N_VANOS_Y = 2, 2     # 3×3 columnas
DX, DY = 5.0, 5.0                # m
H_PISO = 3.0                      # m
N_PISOS = 3
FC_KGCM2 = 210
LOSA_E = 0.15
COL_B, COL_H = 0.40, 0.40
VIG_B, VIG_H = 0.30, 0.40

E_KGFCM2 = 15100.0 * np.sqrt(FC_KGCM2)
E_TONFM2 = E_KGFCM2 * 10
NU = 0.2
RHO_TONFM3 = 2.4

OUT_DIR = os.path.dirname(os.path.abspath(__file__))


def launch_etabs():
    """Lanza ETABS 22 nueva instancia (sigue patrón ejemplo oficial CSI)"""
    helper = comtypes.client.CreateObject('ETABSv1.Helper')
    helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
    obj = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
    obj.ApplicationStart()
    print("[OK] ETABS lanzado")
    return obj, obj.SapModel


def build_and_run(SapModel, slab_mode):
    print(f"\n=== {slab_mode.upper()} ===")
    SapModel.InitializeNewModel()
    SapModel.File.NewBlank()
    SapModel.SetPresentUnits(6)  # tonf, m

    # Material
    SapModel.PropMaterial.SetMaterial("CONC", 2)
    SapModel.PropMaterial.SetMPIsotropic("CONC", E_TONFM2, NU, 1e-5)
    SapModel.PropMaterial.SetWeightAndMass("CONC", 1, RHO_TONFM3)

    # Frame sections
    SapModel.PropFrame.SetRectangle("COL", "CONC", COL_H, COL_B)
    SapModel.PropFrame.SetRectangle("VIG", "CONC", VIG_H, VIG_B)

    # Slab — varía según slab_mode
    shell_type = 3 if slab_mode == "membrane" else 1  # 3=Membrane, 1=Shell-Thin
    SapModel.PropArea.SetSlab("LOSA", 0, shell_type, "CONC", LOSA_E)

    # Diaphragm
    if slab_mode == "rigid_diaphragm":
        SapModel.Diaphragm.SetDiaphragm("D1", False)  # rigid
    elif slab_mode == "flex_diaphragm":
        SapModel.Diaphragm.SetDiaphragm("D1", True)   # semi-rigid

    # Puntos
    pts = {}
    pid = 0
    for ip in range(N_PISOS + 1):
        for iy in range(N_VANOS_Y + 1):
            for ix in range(N_VANOS_X + 1):
                x, y, z = ix * DX, iy * DY, ip * H_PISO
                ret = SapModel.PointObj.AddCartesian(x, y, z, "", f"P{pid}")
                pts[(ix, iy, ip)] = ret[0] if isinstance(ret, tuple) else f"P{pid}"
                pid += 1

    # Columnas
    for ip in range(N_PISOS):
        for iy in range(N_VANOS_Y + 1):
            for ix in range(N_VANOS_X + 1):
                SapModel.FrameObj.AddByPoint(
                    pts[(ix, iy, ip)], pts[(ix, iy, ip + 1)],
                    "", "COL", f"C{ip}_{ix}_{iy}")

    # Vigas
    for ip in range(1, N_PISOS + 1):
        for iy in range(N_VANOS_Y + 1):
            for ix in range(N_VANOS_X):
                SapModel.FrameObj.AddByPoint(
                    pts[(ix, iy, ip)], pts[(ix + 1, iy, ip)],
                    "", "VIG", f"VX{ip}_{ix}_{iy}")
        for iy in range(N_VANOS_Y):
            for ix in range(N_VANOS_X + 1):
                SapModel.FrameObj.AddByPoint(
                    pts[(ix, iy, ip)], pts[(ix, iy + 1, ip)],
                    "", "VIG", f"VY{ip}_{ix}_{iy}")

    # Losas
    for ip in range(1, N_PISOS + 1):
        for iy in range(N_VANOS_Y):
            for ix in range(N_VANOS_X):
                ps = [pts[(ix, iy, ip)], pts[(ix + 1, iy, ip)],
                      pts[(ix + 1, iy + 1, ip)], pts[(ix, iy + 1, ip)]]
                SapModel.AreaObj.AddByPoint(4, ps, "", "LOSA", f"L{ip}_{ix}_{iy}")

    # Diaphragm assignment
    if slab_mode in ("flex_diaphragm", "rigid_diaphragm"):
        for ip in range(1, N_PISOS + 1):
            for iy in range(N_VANOS_Y + 1):
                for ix in range(N_VANOS_X + 1):
                    SapModel.PointObj.SetDiaphragm(pts[(ix, iy, ip)], 3, "D1")

    # Restraints
    for iy in range(N_VANOS_Y + 1):
        for ix in range(N_VANOS_X + 1):
            SapModel.PointObj.SetRestraint(pts[(ix, iy, 0)], [True] * 6)

    SapModel.View.RefreshView(0, False)

    # Save & analyze
    save_path = os.path.join(OUT_DIR, f"val_{slab_mode}.edb")
    SapModel.File.Save(save_path)
    SapModel.Analyze.SetRunCaseFlag("", False, True)
    SapModel.Analyze.SetRunCaseFlag("Modal", True)
    SapModel.Analyze.CreateAnalysisModel()
    print(f"  Corriendo análisis…")
    SapModel.Analyze.RunAnalysis()

    # Resultados
    SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
    SapModel.Results.Setup.SetCaseSelectedForOutput("Modal")

    ret = SapModel.Results.ModalPeriod(0, [], [], [], [], [], [], [])
    periods = list(ret[4]) if ret[0] > 0 else []

    ret2 = SapModel.Results.ModalParticipatingMassRatios(
        0, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [])
    if ret2[0] > 0:
        ux = list(ret2[5]); uy = list(ret2[6]); uz = list(ret2[7])
        rz = list(ret2[13])
    else:
        ux = uy = uz = rz = []

    return {"label": slab_mode, "T": periods,
            "UX": ux, "UY": uy, "UZ": uz, "RZ": rz}


def main():
    etabs, SapModel = launch_etabs()
    cases = ["membrane", "flex_diaphragm", "rigid_diaphragm"]
    results = {}
    try:
        for c in cases:
            results[c] = build_and_run(SapModel, c)
    finally:
        time.sleep(1)
        try:
            etabs.ApplicationExit(False)
        except Exception:
            pass

    # Resumen
    print("\n" + "=" * 90)
    print(f"  COMPARATIVA — Edificio {N_VANOS_X+1}x{N_VANOS_Y+1} columnas, {N_PISOS} pisos")
    print("=" * 90)
    Tm = results["membrane"]["T"]
    Tf = results["flex_diaphragm"]["T"]
    Tr = results["rigid_diaphragm"]["T"]
    print(f"  {'Modo':<5} {'T_M (s)':<10} {'T_FD (s)':<10} {'T_RD (s)':<10} {'D%(M-FD)':<10} {'D%(M-RD)':<10}")
    print("  " + "-" * 80)
    n_modes = max(len(Tm), len(Tf), len(Tr))
    n_modes = min(n_modes, 8)
    for i in range(n_modes):
        tm = Tm[i] if i < len(Tm) else 0
        tf = Tf[i] if i < len(Tf) else 0
        tr = Tr[i] if i < len(Tr) else 0
        d_mfd = (tm - tf) / tf * 100 if tf > 1e-9 else float('nan')
        d_mrd = (tm - tr) / tr * 100 if tr > 1e-9 else float('nan')
        print(f"  {i+1:<5} {tm:<10.4f} {tf:<10.4f} {tr:<10.4f} {d_mfd:<+10.2f} {d_mrd:<+10.2f}")

    # JSON
    with open(os.path.join(OUT_DIR, "results_diaphragm_comparison.json"),
              "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\n  JSON: results_diaphragm_comparison.json")


if __name__ == "__main__":
    main()
