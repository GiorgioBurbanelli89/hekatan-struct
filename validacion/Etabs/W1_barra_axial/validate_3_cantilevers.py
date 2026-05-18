# -*- coding: utf-8 -*-
"""
Valida 3 cantilevers exportados desde hekatan-struct en ETABS:
  1. Concrete (hormigón)
  2. Steel (acero)
  3. CFT (concrete-filled tube)

Cada uno: carga E2K → ETABS → run analysis → leer Uz_top + Fz_base.
Compara contra:
  - Resultado hekatan (impreso en consola hekatan al construir el modelo)
  - Solución analítica: u_top = q*L^2 / (2*E*A) bajo peso propio
"""
import os, sys, time, json

HERE = os.path.dirname(os.path.abspath(__file__))
LOG = os.path.join(HERE, "validate_3_cantilevers.log")
if os.path.exists(LOG): os.remove(LOG)
_fh = open(LOG, "w", encoding="utf-8", buffering=1)
def p(*a):
    line = " ".join(str(x) for x in a); print(line, flush=True)
    _fh.write(line + "\n"); _fh.flush()

# E2Ks a validar (orden: hormigón → acero → CFT)
CASES = [
    ("Concrete", "test_concrete_cantilever_fixed.e2k", -0.00424),  # mm — hekatan reporta este Uz
    # Steel y CFT se agregan después
]

from pythonnet import load; load("coreclr")
import clr
DLL = r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll"
clr.AddReference(DLL)
from ETABSv1 import (Helper, cHelper, cOAPI, cSapModel, cFile,
                     cPointObj, cAnalyze, cAnalysisResults,
                     cAnalysisResultsSetup, eUnits, eItemTypeElm)
import System

p("[1] Helper + ProgID + Start...")
helper = cHelper(Helper())
ETABS = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
ETABS.ApplicationStart(); time.sleep(3)
p("    OK")

results = []
for caseName, e2kFile, hekatan_uz_mm in CASES:
    p(f"\n{'='*60}")
    p(f"  CASE: {caseName}")
    p(f"  File: {e2kFile}")
    p(f"  Hekatan Uz_top reported: {hekatan_uz_mm:.5f} mm")
    p(f"{'='*60}")
    e2k_path = os.path.join(HERE, e2kFile)
    edb_path = e2k_path.replace(".e2k", ".EDB")
    if not os.path.exists(e2k_path):
        p(f"  [SKIP] No existe {e2k_path}"); continue

    p(f"\n[2-{caseName}] SapModel + Open...")
    sap = cSapModel(ETABS.SapModel)
    sap.SetPresentUnits(eUnits(6))  # kN_m_C
    File = cFile(sap.File)
    ret = File.OpenFile(e2k_path); p(f"    OpenFile ret={ret}")
    sap.SetModelIsLocked(False)
    sap.SetPresentUnits(eUnits(6))

    p(f"\n[3-{caseName}] Save EDB + Analyze...")
    ret = File.Save(edb_path); p(f"    Save ret={ret}")
    Analyze = cAnalyze(sap.Analyze)
    ret = Analyze.RunAnalysis(); p(f"    RunAnalysis ret={ret}")

    p(f"\n[4-{caseName}] Inventario + resultados Dead...")
    Results = cAnalysisResults(sap.Results)
    Setup = cAnalysisResultsSetup(Results.Setup)
    Setup.DeselectAllCasesAndCombosForOutput()
    Setup.SetCaseSelectedForOutput("Dead")

    PointObj = cPointObj(sap.PointObj)
    NR=0; Names=[]
    [ret, NR, Names] = PointObj.GetNameList(NR, Names)
    points = list(Names)

    # Encontrar top (Z máx) y base (Z=0)
    top_pt = None; base_pt = None; top_z = -1e9
    for pt in points:
        X=0.0; Y=0.0; Z=0.0
        [ret, X, Y, Z] = PointObj.GetCoordCartesian(pt, X, Y, Z)
        if abs(Z) < 1e-6: base_pt = pt
        if Z > top_z: top_z = Z; top_pt = pt
    p(f"    Base={base_pt!r}  Top={top_pt!r} @ Z={top_z:.3f}m")

    NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
    U1=[]; U2=[]; U3=[]; R1=[]; R2=[]; R3=[]
    [ret, NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3] = \
        Results.JointDispl(top_pt, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3)
    etabs_uz_mm = U3[0]*1000 if NR > 0 else float('nan')

    NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
    F1=[]; F2=[]; F3=[]; M1=[]; M2=[]; M3=[]
    [ret, NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3] = \
        Results.JointReact(base_pt, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3)
    etabs_fz_kN = F3[0] if NR > 0 else float('nan')

    p(f"\n[5-{caseName}] COMPARACIÓN:")
    p(f"    Hekatan Uz_top : {hekatan_uz_mm:.5f} mm")
    p(f"    ETABS   Uz_top : {etabs_uz_mm:.5f} mm")
    if abs(hekatan_uz_mm) > 1e-9:
        diff_pct = (etabs_uz_mm - hekatan_uz_mm) / abs(hekatan_uz_mm) * 100
        p(f"    Diferencia     : {diff_pct:+.3f}%  {'[PASS]' if abs(diff_pct) < 1 else '[FAIL]'}")
    p(f"    ETABS   Fz_base: {etabs_fz_kN:+.4f} kN")

    results.append({
        "case": caseName,
        "hekatan_uz_mm": hekatan_uz_mm,
        "etabs_uz_mm": etabs_uz_mm,
        "etabs_fz_kN": etabs_fz_kN,
    })

p(f"\n{'='*60}")
p(f"  RESUMEN")
p(f"{'='*60}")
for r in results:
    diff = (r["etabs_uz_mm"] - r["hekatan_uz_mm"]) / abs(r["hekatan_uz_mm"]) * 100 if abs(r["hekatan_uz_mm"]) > 1e-9 else 0
    p(f"  {r['case']:10s}: hekatan={r['hekatan_uz_mm']:+.5f}  ETABS={r['etabs_uz_mm']:+.5f}  Δ={diff:+.3f}%")

with open(os.path.join(HERE, "validate_3_cantilevers.json"), "w") as f:
    json.dump(results, f, indent=2)
p("\nDONE")
