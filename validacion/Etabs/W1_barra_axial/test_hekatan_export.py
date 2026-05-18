# -*- coding: utf-8 -*-
"""Test: cargar E2K exportado desde hekatan-struct y validar en ETABS."""
import os, sys, time

LOG = os.path.join(os.path.dirname(os.path.abspath(__file__)), "test_hekatan_export.log")
if os.path.exists(LOG): os.remove(LOG)
_fh = open(LOG, "w", encoding="utf-8", buffering=1)
def p(*a):
    line = " ".join(str(x) for x in a); print(line, flush=True)
    _fh.write(line + "\n"); _fh.flush()

E2K = os.path.join(os.path.dirname(os.path.abspath(__file__)), "test_export_steel_cantilever.e2k")
EDB = os.path.join(os.path.dirname(os.path.abspath(__file__)), "test_export_steel_cantilever.EDB")

p(f"[1] E2K = {E2K}  exists={os.path.exists(E2K)}  size={os.path.getsize(E2K)}")

from pythonnet import load; load("coreclr")
import clr
DLL = r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll"
clr.AddReference(DLL)
from ETABSv1 import (Helper, cHelper, cOAPI, cSapModel, cFile,
                     cPointObj, cFrameObj, cAnalyze, cAnalysisResults,
                     cAnalysisResultsSetup, eUnits, eItemTypeElm)
import System

p("[2] Helper + ProgID + Start...")
helper = cHelper(Helper())
ETABS = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
ETABS.ApplicationStart(); time.sleep(3)
p("    OK")

p("[3] SapModel...")
sap = cSapModel(ETABS.SapModel)
sap.SetPresentUnits(eUnits(6))
p("    OK")

p(f"[4] OpenFile E2K...")
File = cFile(sap.File)
ret = File.OpenFile(E2K)
p(f"    ret={ret}")

p("[5] SetPresentUnits kN_m_C + unlock...")
sap.SetPresentUnits(eUnits(6))
sap.SetModelIsLocked(False)

p(f"[6] Save EDB -> {EDB}")
ret = File.Save(EDB)
p(f"    ret={ret}")

p("[7] Inventario...")
PointObj = cPointObj(sap.PointObj)
FrameObj = cFrameObj(sap.FrameObj)
NR=0; Names=[]
[ret, NR, Names] = PointObj.GetNameList(NR, Names)
points = list(Names)
p(f"    {NR} points: {points[:10]}{'...' if len(points)>10 else ''}")
NR=0; Names=[]
[ret, NR, Names] = FrameObj.GetNameList(NR, Names)
frames = list(Names)
p(f"    {NR} frames: {frames[:5]}{'...' if len(frames)>5 else ''}")

p("[8] RunAnalysis...")
Analyze = cAnalyze(sap.Analyze)
ret = Analyze.RunAnalysis()
p(f"    ret={ret}")

p("[9] Setup output Dead...")
Results = cAnalysisResults(sap.Results)
Setup = cAnalysisResultsSetup(Results.Setup)
Setup.DeselectAllCasesAndCombosForOutput()
Setup.SetCaseSelectedForOutput("Dead")

p("[10] Disp top joint + base reaction...")
# Encontrar top joint (Z máxima) y base (Z=0)
top_pt = None; base_pt = None; top_z = -1e9
for pt in points:
    X=0.0; Y=0.0; Z=0.0
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pt, X, Y, Z)
    if abs(Z) < 1e-6: base_pt = pt
    if Z > top_z: top_z = Z; top_pt = pt
p(f"    Base joint = {base_pt!r}  Top joint = {top_pt!r} @ Z={top_z}")

NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
U1=[]; U2=[]; U3=[]; R1=[]; R2=[]; R3=[]
[ret, NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3] = \
    Results.JointDispl(top_pt, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3)
if NR > 0:
    p(f"    Top Uz = {U3[0]*1000:.6f} mm")

NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
F1=[]; F2=[]; F3=[]; M1=[]; M2=[]; M3=[]
[ret, NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3] = \
    Results.JointReact(base_pt, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3)
if NR > 0:
    p(f"    Base FZ = {F3[0]:.4f} kN (suma peso propio = qL = ~-3.19 kN)")

p("\nDONE")
