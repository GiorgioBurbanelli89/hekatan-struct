# -*- coding: utf-8 -*-
"""
Barra Axial 1D — v3: evita GetPoints (que crashea con 0xC0000005).
Usa GetNameList + GetCoordCartesian para identificar nodos por coordenadas.

Modelo hekatan: L=5m, A=0.01 m^2, E=200 GPa, F=100 kN axial.
Esperado: delta = 0.25 mm, reaccion = -100 kN
"""
import os, sys, time

LOG = os.path.join(os.path.dirname(os.path.abspath(__file__)), "pynet_v3.log")
if os.path.exists(LOG): os.remove(LOG)
_fh = open(LOG, "w", encoding="utf-8", buffering=1)
def p(*a):
    line = " ".join(str(x) for x in a)
    print(line, flush=True)
    _fh.write(line + "\n"); _fh.flush()

p(f"[LOG] {LOG}")

from pythonnet import load
load("coreclr")
import clr
DLL = r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll"
clr.AddReference(DLL)
from ETABSv1 import (Helper, cHelper, cOAPI, cSapModel, cFile,
                     cPropMaterial, cPropFrame, cFrameObj, cPointObj,
                     cLoadPatterns, cAnalyze, cAnalysisResults,
                     cAnalysisResultsSetup, eUnits, eMatType,
                     eLoadPatternType, eItemTypeElm)
import System  # type: ignore  # para construir arrays .NET nativos

HERE = os.path.dirname(os.path.abspath(__file__))
ModelPath = os.path.join(HERE, "W1_barra_axial_v3.edb")

p("[1] Helper + ProgID + ApplicationStart...")
helper = cHelper(Helper())
myETABSObject = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
myETABSObject.ApplicationStart()
time.sleep(3)
p("    OK")

p("[2] SapModel + InitializeNewModel(eUnits(6)=kN_m_C)...")
SapModel = cSapModel(myETABSObject.SapModel)
SapModel.InitializeNewModel(eUnits(6))
p("    OK")

p("[3] File.NewBlank()...")
File = cFile(SapModel.File)
ret = File.NewBlank()
p(f"    ret={ret}")

p("[4] Material S200 (Steel)...")
PropMaterial = cPropMaterial(SapModel.PropMaterial)
ret = PropMaterial.SetMaterial("S200", eMatType(1))
ret = PropMaterial.SetMPIsotropic("S200", 200e6, 0.3, 1.17e-5)
p("    OK")

p("[5] Section BAR10x10 (10x10cm)...")
PropFrame = cPropFrame(SapModel.PropFrame)
ret = PropFrame.SetRectangle("BAR10x10", "S200", 0.10, 0.10)
p(f"    ret={ret}")

p("[6] AddByCoord (0,0,0)->(0,0,5) VERTICAL (columna)...")
FrameObj = cFrameObj(SapModel.FrameObj)
FrameName1 = " "
[ret, FrameName1] = FrameObj.AddByCoord(0.0, 0.0, 0.0, 0.0, 0.0, 5.0,
                                         FrameName1, "BAR10x10", "BarraAxial", "Global")
p(f"    name={FrameName1!r} ret={ret}")

p("[7] PointObj.GetNameList() (evitando GetPoints)...")
PointObj = cPointObj(SapModel.PointObj)
NumberNames = 0
MyName = []
[ret, NumberNames, MyName] = PointObj.GetNameList(NumberNames, MyName)
points = list(MyName)
p(f"    ret={ret} num={NumberNames} names={points}")

p("[8] GetCoordCartesian para cada nodo...")
PointOrigin = None
PointEnd = None
for pname in points:
    X = 0.0; Y = 0.0; Z = 0.0
    [ret, X, Y, Z] = PointObj.GetCoordCartesian(pname, X, Y, Z)
    p(f"    {pname}: ({X:.3f}, {Y:.3f}, {Z:.3f}) ret={ret}")
    if abs(X) < 1e-6 and abs(Y) < 1e-6 and abs(Z) < 1e-6:
        PointOrigin = pname
    elif abs(X) < 1e-6 and abs(Y) < 1e-6 and abs(Z - 5.0) < 1e-6:
        PointEnd = pname
p(f"    Origin={PointOrigin!r}  End={PointEnd!r}")

if not PointOrigin or not PointEnd:
    p("[FATAL] no identifique los 2 nodos")
    sys.exit(1)

p("[9] Restraint Origin (fully fixed) — usando System.Array[bool]...")
Restraint = System.Array[bool]([True, True, True, True, True, True])
ret = PointObj.SetRestraint(PointOrigin, Restraint)
p(f"    ret={ret}")

p("[10] LoadPattern AXIAL (LTYPE_OTHER=8 para evitar conflictos)...")
LoadPatterns = cLoadPatterns(SapModel.LoadPatterns)
ret = LoadPatterns.Add("AXIAL", eLoadPatternType(8), 0, True)
p(f"    Add ret={ret}")
# Verificar
NumberNames = 0; LPNames = []
[ret, NumberNames, LPNames] = LoadPatterns.GetNameList(NumberNames, LPNames)
p(f"    Patterns existentes: {list(LPNames)} (NR={NumberNames})")

p("[11] PointLoad FZ=+100 kN axial vertical en End...")
PointLoadValue = System.Array[float]([0.0, 0.0, 100.0, 0.0, 0.0, 0.0])
ret = PointObj.SetLoadForce(PointEnd, "AXIAL", PointLoadValue)
p(f"    ret={ret}")

p(f"[12] Save EDB -> {ModelPath}")
ret = File.Save(ModelPath)
p(f"    ret={ret}")

p("[13] RunAnalysis...")
Analyze = cAnalyze(SapModel.Analyze)
ret = Analyze.RunAnalysis()
p(f"    ret={ret}")

p("[14] Setup output LIVE...")
Results = cAnalysisResults(SapModel.Results)
Setup = cAnalysisResultsSetup(Results.Setup)
Setup.DeselectAllCasesAndCombosForOutput()
Setup.SetCaseSelectedForOutput("AXIAL")
p("    OK")

p(f"[15] JointDispl {PointEnd} (esperado Uz=2.5e-4 axial vertical)...")
NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
U1=[]; U2=[]; U3=[]; R1=[]; R2=[]; R3=[]
[ret, NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3] = \
    Results.JointDispl(PointEnd, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3)
p(f"    NR={NR} ret={ret}")
if NR > 0:
    uz = U3[0]
    p(f"    Ux={U1[0]:.6e}  Uy={U2[0]:.6e}  Uz={uz:.6e} m = {uz*1000:.6f} mm")
    p(f"    Esperado Uz: 0.250000 mm")
    err = abs(uz - 2.5e-4)/2.5e-4*100
    p(f"    Error: {err:.4f}%  {'[PASS]' if err < 0.5 else '[FAIL]'}")

p(f"[16] JointReact {PointOrigin}...")
NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
F1=[]; F2=[]; F3=[]; M1=[]; M2=[]; M3=[]
[ret, NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3] = \
    Results.JointReact(PointOrigin, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3)
p(f"    NR={NR} ret={ret}")
if NR > 0:
    p(f"    FX={F1[0]:.4f}  FY={F2[0]:.4f}  FZ={F3[0]:.4f} kN  (esperado FZ=-100)")

p("\nDONE — ETABS queda abierto")
