# -*- coding: utf-8 -*-
"""Diagnóstico: ver qué pasa cuando ETABS abre el e2k del cantilever hormigón.
Lista patterns, cases, loads en cada nodo, y resultados."""
import os, sys, time

HERE = os.path.dirname(os.path.abspath(__file__))
LOG = os.path.join(HERE, "diag_e2k_open.log")
if os.path.exists(LOG): os.remove(LOG)
_fh = open(LOG, "w", encoding="utf-8", buffering=1)
def p(*a):
    line = " ".join(str(x) for x in a); print(line, flush=True)
    _fh.write(line + "\n"); _fh.flush()

E2K = os.path.join(HERE, "test_concrete_cantilever.e2k")
EDB = os.path.join(HERE, "diag_concrete.EDB")

from pythonnet import load; load("coreclr")
import clr
DLL = r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll"
clr.AddReference(DLL)
from ETABSv1 import (Helper, cHelper, cOAPI, cSapModel, cFile,
                     cPointObj, cFrameObj, cLoadPatterns, cLoadCases,
                     cAnalyze, cAnalysisResults, cAnalysisResultsSetup,
                     eUnits, eItemTypeElm)
import System

p("[1] Start ETABS...")
helper = cHelper(Helper())
ETABS = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
ETABS.ApplicationStart(); time.sleep(3)
sap = cSapModel(ETABS.SapModel)

p(f"[2] OpenFile E2K = {E2K}")
File = cFile(sap.File)
ret = File.OpenFile(E2K); p(f"    ret={ret}")

p("[3] SetPresentUnits Tonf_m (5) — match E2K units...")
sap.SetPresentUnits(eUnits(5))  # Tonf_m_C
sap.SetModelIsLocked(False)

p("[4] LoadPatterns inventory...")
LP = cLoadPatterns(sap.LoadPatterns)
NR=0; Names=[]
[ret, NR, Names] = LP.GetNameList(NR, Names)
patterns = list(Names)
p(f"    {NR} patterns: {patterns}")

p("[5] LoadCases inventory...")
LC = cLoadCases(sap.LoadCases)
NR=0; Names=[]; CaseTypes=[]; SubTypes=[]; DesignTypes=[]; DesignTypeOpt=[]; Auto=[]
[ret, NR, Names] = LC.GetNameList(NR, Names)
cases = list(Names)
p(f"    {NR} cases: {cases}")

p("[6] PointObj inventory + coords...")
PointObj = cPointObj(sap.PointObj)
NR=0; Names=[]
[ret, NR, Names] = PointObj.GetNameList(NR, Names)
points = list(Names)
p(f"    {NR} points")
for pt in points:
    X=0.0; Y=0.0; Z=0.0
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pt, X, Y, Z)
    p(f"      pt={pt!r}  ({X:.3f}, {Y:.3f}, {Z:.3f})")

p("[7] Loads on each point (GetLoadForce)...")
total_load = 0.0
for pt in points:
    NR2=0; LP2=[]; F1=[]; F2=[]; F3=[]; M1=[]; M2=[]; M3=[]; LCS=[]; CSys=[]
    try:
        [ret, NR2, LP2, F1, F2, F3, M1, M2, M3, LCS, CSys] = \
            PointObj.GetLoadForce(pt, NR2, LP2, F1, F2, F3, M1, M2, M3, LCS, CSys, eItemTypeElm(0))
        if NR2 > 0:
            for i in range(NR2):
                p(f"      pt={pt!r}  LP={LP2[i]!r}  FZ={F3[i]:.5f}  (LCS={LCS[i]} CSys={CSys[i]!r})")
                total_load += F3[i]
    except Exception as ex:
        p(f"      pt={pt!r} GetLoadForce err: {ex}")
p(f"    TOTAL FZ load: {total_load:.5f}")

p("[8] Save EDB then RunAnalysis...")
ret = File.Save(EDB); p(f"    Save ret={ret}")
Analyze = cAnalyze(sap.Analyze)
ret = Analyze.RunAnalysis(); p(f"    RunAnalysis ret={ret}")

p("[9] Setup output for Dead case...")
Results = cAnalysisResults(sap.Results)
Setup = cAnalysisResultsSetup(Results.Setup)
Setup.DeselectAllCasesAndCombosForOutput()
ret = Setup.SetCaseSelectedForOutput("Dead")
p(f"    SetCaseSelectedForOutput('Dead') ret={ret}")

p("[10] JointDispl + JointReact for top + base...")
top_pt = max(points, key=lambda pt: (PointObj.GetCoordCartesian(pt, 0.0, 0.0, 0.0))[3])
base_pt = min(points, key=lambda pt: abs((PointObj.GetCoordCartesian(pt, 0.0, 0.0, 0.0))[3]))
p(f"    base_pt={base_pt!r}  top_pt={top_pt!r}")

NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
U1=[]; U2=[]; U3=[]; R1=[]; R2=[]; R3=[]
[ret, NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3] = \
    Results.JointDispl(top_pt, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3)
p(f"    top JointDispl: ret={ret} NR={NR}")
if NR > 0:
    for i in range(NR):
        p(f"      [{i}] case={AC[i]!r}  Uz={U3[i]:.6e}  Ux={U1[i]:.6e}")

NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
F1=[]; F2=[]; F3=[]; M1=[]; M2=[]; M3=[]
[ret, NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3] = \
    Results.JointReact(base_pt, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3)
p(f"    base JointReact: ret={ret} NR={NR}")
if NR > 0:
    for i in range(NR):
        p(f"      [{i}] case={AC[i]!r}  FZ={F3[i]:.5f}")

p("\nDONE")
