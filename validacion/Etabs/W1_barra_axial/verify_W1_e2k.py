# -*- coding: utf-8 -*-
"""
Verificar que barra_axial.e2k da el mismo resultado que el modelo armado via API.
Abre el E2K, corre analisis, lee Uz e Reaccion en joint base.
Esperado: Uz = 0.250000 mm, Reaccion FZ = -100 kN.
"""
import os, sys, time

LOG = os.path.join(os.path.dirname(os.path.abspath(__file__)), "verify_e2k.log")
if os.path.exists(LOG): os.remove(LOG)
_fh = open(LOG, "w", encoding="utf-8", buffering=1)
def p(*a):
    line = " ".join(str(x) for x in a); print(line, flush=True)
    _fh.write(line + "\n"); _fh.flush()

p(f"[LOG] {LOG}")
from pythonnet import load; load("coreclr")
import clr
DLL = r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll"
clr.AddReference(DLL)
from ETABSv1 import (Helper, cHelper, cOAPI, cSapModel, cFile,
                     cPointObj, cAnalyze, cAnalysisResults,
                     cAnalysisResultsSetup, eUnits, eItemTypeElm)
import System

HERE = os.path.dirname(os.path.abspath(__file__))
E2K = os.path.join(HERE, "W1_barra_axial.e2k")
EDB = os.path.join(HERE, "W1_barra_axial_from_e2k.EDB")

p(f"[1] E2K = {E2K}")
p(f"    exists? {os.path.exists(E2K)}  size={os.path.getsize(E2K) if os.path.exists(E2K) else 'n/a'}")

p("[2] Helper + ProgID + Start...")
helper = cHelper(Helper())
ETABS = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
ETABS.ApplicationStart(); time.sleep(3)
p("    OK")

p("[3] SapModel + SetPresentUnits(kN_m_C)...")
sap = cSapModel(ETABS.SapModel)
sap.SetPresentUnits(eUnits(6))
p("    OK")

p(f"[4] OpenFile({E2K})...")
File = cFile(sap.File)
ret = File.OpenFile(E2K)
p(f"    ret={ret}")

p("[5] SetModelIsLocked(False) + SetPresentUnits...")
sap.SetModelIsLocked(False)
sap.SetPresentUnits(eUnits(6))

p(f"[6] Save EDB -> {EDB}")
ret = File.Save(EDB)
p(f"    ret={ret}")

p("[7] RunAnalysis...")
Analyze = cAnalyze(sap.Analyze)
ret = Analyze.RunAnalysis()
p(f"    ret={ret}")

p("[8] Setup output AXIAL...")
Results = cAnalysisResults(sap.Results)
Setup = cAnalysisResultsSetup(Results.Setup)
Setup.DeselectAllCasesAndCombosForOutput()
Setup.SetCaseSelectedForOutput("AXIAL")

p("[9] Inventario joints...")
PointObj = cPointObj(sap.PointObj)
NR=0; Names=[]
[ret, NR, Names] = PointObj.GetNameList(NR, Names)
joints = list(Names)
p(f"    joints = {joints}")

for j in joints:
    X=0.0; Y=0.0; Z=0.0
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(j, X, Y, Z)
    p(f"    {j}: ({X:.3f}, {Y:.3f}, {Z:.3f})")

p("[10] Joint displacements + reactions:")
for j in joints:
    NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
    U1=[]; U2=[]; U3=[]; R1=[]; R2=[]; R3=[]
    [ret, NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3] = \
        Results.JointDispl(j, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3)
    if NR > 0:
        p(f"    Disp  {j}: Ux={U1[0]*1000:.5f} Uy={U2[0]*1000:.5f} Uz={U3[0]*1000:.5f} mm")
    NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
    F1=[]; F2=[]; F3=[]; M1=[]; M2=[]; M3=[]
    [ret, NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3] = \
        Results.JointReact(j, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3)
    if NR > 0:
        p(f"    React {j}: FX={F1[0]:.3f} FY={F2[0]:.3f} FZ={F3[0]:.3f} kN")

p("\n=== VALIDACION ===")
p("Esperado en joint LIBRE (Z=5): Uz = 0.250000 mm")
p("Esperado en joint BASE  (Z=0): FZ = -100 kN")
p("\nDONE — ETABS queda abierto")
