# -*- coding: utf-8 -*-
"""
Validacion directa via API (sin E2K I/O): 3 cantilevers axiales bajo peso propio.

Para cada caso:
  - Construye L=3m vertical column via API
  - Material con gamma y E especificos
  - Seccion solida con A apropiada
  - SELFWEIGHT=1 en pattern DEAD
  - RunAnalysis → lee Uz_top
  - Compara contra analitico hekatan: u_top = gamma*L^2 / (2*E)

Casos (hekatan analiticos, kN-m):
  Hormigon: gamma=23.56 kN/m3, E=24.98e6 kN/m2 → u_top = 23.56*9/(2*24.98e6) = 4.243e-6 m = 0.00424 mm
  Acero HSS: gamma=76.97, E=200e6                → u = 76.97*9/(2*200e6)    = 1.732e-6 m = 0.00173 mm
  CFT compuesto (eq): gamma_eq=31.76, E_eq=51.71e6 → u = 31.76*9/(2*51.71e6) = 2.764e-6 m = 0.00276 mm
"""
import os, sys, time

HERE = os.path.dirname(os.path.abspath(__file__))
LOG = os.path.join(HERE, "validate_3_cantilevers_v2.log")
if os.path.exists(LOG): os.remove(LOG)
_fh = open(LOG, "w", encoding="utf-8", buffering=1)
def p(*a):
    line = " ".join(str(x) for x in a); print(line, flush=True)
    _fh.write(line + "\n"); _fh.flush()

# Casos: (nombre, gamma_kN_m3, E_kN_m2, A_m2, hekatan_uz_mm)
CASES = [
    ("Concrete", 23.56,  24.98e6, 0.30*0.30,  -0.00424),
    ("Steel",    76.97,  200.0e6, 0.30*0.30,  -0.00173),   # A no afecta u_top axial
    ("CFT_eq",   31.76,  51.71e6, 0.30*0.30,  -0.00276),
]
L = 3.0  # m

from pythonnet import load; load("coreclr")
import clr
DLL = r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll"
clr.AddReference(DLL)
from ETABSv1 import (Helper, cHelper, cOAPI, cSapModel, cFile,
                     cPropMaterial, cPropFrame, cFrameObj, cPointObj,
                     cLoadPatterns, cAnalyze, cAnalysisResults,
                     cAnalysisResultsSetup, eUnits, eMatType,
                     eLoadPatternType, eItemTypeElm)
import System

p("[1] Start ETABS...")
helper = cHelper(Helper())
ETABS = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
ETABS.ApplicationStart(); time.sleep(3)
p("    OK")

results = []
for caseName, gamma, E, A, hekatan_uz_mm in CASES:
    p(f"\n{'='*60}")
    p(f"  CASE: {caseName}  gamma={gamma} kN/m3  E={E/1e6:.2f} GPa  A={A:.4f} m2")
    p(f"  Hekatan analytical Uz_top: {hekatan_uz_mm:.5f} mm")
    p(f"{'='*60}")

    sap = cSapModel(ETABS.SapModel)
    sap.InitializeNewModel(eUnits(6))  # kN_m_C
    File = cFile(sap.File)
    ret = File.NewBlank(); p(f"  NewBlank ret={ret}")

    # Material — usar gamma como WEIGHTPERVOLUME, E para isotropic
    matName = f"MAT_{caseName}"
    PropMaterial = cPropMaterial(sap.PropMaterial)
    ret = PropMaterial.SetMaterial(matName, eMatType(1) if caseName == "Steel" else eMatType(2))  # 1=Steel, 2=Concrete
    ret = PropMaterial.SetMPIsotropic(matName, E, 0.3 if caseName == "Steel" else 0.2, 1.17e-5)
    ret = PropMaterial.SetWeightAndMass(matName, 1, gamma)  # 1=weight per unit volume
    p(f"  Material {matName} set: gamma={gamma} E={E}")

    # Seccion rectangular solida A = b*h
    secName = f"SEC_{caseName}"
    side = (A) ** 0.5
    PropFrame = cPropFrame(sap.PropFrame)
    ret = PropFrame.SetRectangle(secName, matName, side, side)
    p(f"  Section {secName} {side*100:.2f}x{side*100:.2f} cm")

    # Frame vertical (0,0,0)→(0,0,L)
    FrameObj = cFrameObj(sap.FrameObj)
    FrameName = " "
    [ret, FrameName] = FrameObj.AddByCoord(0.0, 0.0, 0.0, 0.0, 0.0, L,
                                            FrameName, secName, "C1", "Global")
    p(f"  Frame: ret={ret} name={FrameName!r}")

    # Identificar nodos por coords
    PointObj = cPointObj(sap.PointObj)
    NR=0; Names=[]
    [ret, NR, Names] = PointObj.GetNameList(NR, Names)
    points = list(Names)
    base_pt = top_pt = None
    for pt in points:
        X=0.0; Y=0.0; Z=0.0
        [ret, X, Y, Z] = PointObj.GetCoordCartesian(pt, X, Y, Z)
        if abs(Z) < 1e-6: base_pt = pt
        if abs(Z - L) < 1e-6: top_pt = pt
    p(f"  Base={base_pt!r}  Top={top_pt!r}")

    # Restraint base (all 6 DOFs)
    Rest = System.Array[bool]([True]*6)
    ret = PointObj.SetRestraint(base_pt, Rest)

    # LoadPattern DEAD con SELFWEIGHT=1 (ya existe por default; agregar si no)
    LoadPatterns = cLoadPatterns(sap.LoadPatterns)
    NR=0; LPNames=[]
    [ret, NR, LPNames] = LoadPatterns.GetNameList(NR, LPNames)
    if "DEAD" not in list(LPNames):
        ret = LoadPatterns.Add("DEAD", eLoadPatternType(1), 1.0, True)  # 1=Dead, SW=1
    else:
        # Asegurar SW=1
        try:
            ret = LoadPatterns.SetSelfWtMultiplier("DEAD", 1.0)
        except Exception:
            pass
    p(f"  Load patterns: {list(LPNames)}")

    # Save & Analyze
    EDB = os.path.join(HERE, f"v2_{caseName}.EDB")
    ret = File.Save(EDB); p(f"  Save ret={ret}")
    Analyze = cAnalyze(sap.Analyze)
    ret = Analyze.RunAnalysis(); p(f"  RunAnalysis ret={ret}")

    # Resultados
    Results = cAnalysisResults(sap.Results)
    Setup = cAnalysisResultsSetup(Results.Setup)
    Setup.DeselectAllCasesAndCombosForOutput()
    Setup.SetCaseSelectedForOutput("DEAD")

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

    diff_pct = (etabs_uz_mm - hekatan_uz_mm) / abs(hekatan_uz_mm) * 100 if abs(hekatan_uz_mm) > 1e-9 else 0
    pass_fail = "[PASS]" if abs(diff_pct) < 2 else "[FAIL]"
    p(f"\n  RESULTADO {caseName}:")
    p(f"    Hekatan Uz_top : {hekatan_uz_mm:.5f} mm")
    p(f"    ETABS   Uz_top : {etabs_uz_mm:.5f} mm")
    p(f"    Diferencia     : {diff_pct:+.3f}%  {pass_fail}")
    p(f"    ETABS   Fz_base: {etabs_fz_kN:+.4f} kN  (W_analitico={gamma*A*L:.4f} kN)")

    results.append((caseName, hekatan_uz_mm, etabs_uz_mm, diff_pct, etabs_fz_kN))

p(f"\n{'='*60}\n  RESUMEN FINAL\n{'='*60}")
p(f"  {'Caso':10s} {'Hekatan(mm)':>14s} {'ETABS(mm)':>14s} {'Diff %':>10s}")
for caseName, hk, et, d, fz in results:
    p(f"  {caseName:10s} {hk:14.5f} {et:14.5f} {d:+10.3f}")
p("\nDONE")
