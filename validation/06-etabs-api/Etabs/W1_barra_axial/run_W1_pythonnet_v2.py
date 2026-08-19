# -*- coding: utf-8 -*-
"""
Barra Axial 1D — pythonnet pattern EXACTO del usuario.
Cast wrappers (cHelper, cOAPI, cSapModel, cFile, ...) + eUnits enum.
AttachToInstance=True: conecta a la instancia de ETABS que el user abrio.

Modelo hekatan "Barra axial (1D)": L=5m, A=0.01 m^2, E=200 GPa, F=100 kN
Esperado: delta = F*L/(A*E) = 0.25 mm  ;  reaccion = -100 kN
"""
import os, sys, time

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

# Output a archivo log para ver progreso aunque corra en background
LOG_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "pynet_v2_live.log")
if os.path.exists(LOG_FILE):
    os.remove(LOG_FILE)
_log_fh = open(LOG_FILE, "w", encoding="utf-8", buffering=1)
_orig_print = print
def print(*args, **kwargs):
    kwargs["flush"] = True
    _orig_print(*args, **kwargs)
    line = " ".join(str(a) for a in args)
    _log_fh.write(line + "\n")
    _log_fh.flush()
print(f"[LOG] {LOG_FILE}")

# .NET Core runtime
UseNETCore = True
if UseNETCore:
    from pythonnet import load
    load("coreclr")
    import clr
else:
    import clr

# Probar ETABS 22 primero, fallback a 19
ETABS_VERSIONS = [
    (r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll",
     r"C:\Program Files\Computers and Structures\ETABS 22\ETABS.exe"),
    (r"C:\Program Files\Computers and Structures\ETABS 19\ETABSv1.dll",
     r"C:\Program Files\Computers and Structures\ETABS 19\ETABS.exe"),
]

APIDLL = None; ProgramPath = None
for dll, exe in ETABS_VERSIONS:
    if os.path.exists(dll):
        APIDLL = dll; ProgramPath = exe
        print(f"[CHOSEN] {dll}")
        break
if APIDLL is None:
    print("FATAL: no encontre ETABS"); sys.exit(1)

clr.AddReference(APIDLL)
from ETABSv1 import (Helper, cHelper, cOAPI, cSapModel, cFile,
                     cPropMaterial, cPropFrame, cFrameObj, cPointObj,
                     cView, cLoadPatterns, cAnalyze, cAnalysisResults,
                     cAnalysisResultsSetup, eUnits, eMatType,
                     eLoadPatternType, eItemTypeElm)

HERE = os.path.dirname(os.path.abspath(__file__))
ModelPath = os.path.join(HERE, "W1_W1_barra_axial_pynet_v2.edb")

# --- FLAGS --------------------------------------------
AttachToInstance = True   # conectar a la instancia abierta por el user
SpecifyPath = False
Remote = False
# ------------------------------------------------------

print("[1] Helper...")
helper = cHelper(Helper())
print("    OK")

myETABSObject = None
if AttachToInstance:
    print("[2] AttachToInstance=True → GetObject('CSI.ETABS.API.ETABSObject')...")
    try:
        raw = helper.GetObject("CSI.ETABS.API.ETABSObject")
        if raw is None:
            raise RuntimeError("GetObject returned None")
        myETABSObject = cOAPI(raw)
        print("    [OK] Attached")
    except Exception as e:
        print(f"    [WARN] Attach fallo: {type(e).__name__}: {e}")
        print("    [FALLBACK] CreateObjectProgID + ApplicationStart...")
        myETABSObject = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
        print("    Lanzando ETABS, esperar 8s...")
        myETABSObject.ApplicationStart()
        time.sleep(8)
else:
    if SpecifyPath:
        myETABSObject = cOAPI(helper.CreateObject(ProgramPath))
    else:
        myETABSObject = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
    myETABSObject.ApplicationStart()
    time.sleep(8)

print("[3] SapModel (cast cSapModel)...")
SapModel = cSapModel(myETABSObject.SapModel)
print("    OK")

print("[4] InitializeNewModel(eUnits(6)=kN_m_C)...")
kN_m_C = 6
SapModel.InitializeNewModel(eUnits(kN_m_C))
print("    OK")

print("[5] File.NewBlank()...")
File = cFile(SapModel.File)
ret = File.NewBlank()
print(f"    ret={ret}")

print("[6] Material S200 (Steel, E=200 GPa)...")
PropMaterial = cPropMaterial(SapModel.PropMaterial)
MATERIAL_STEEL = 1
ret = PropMaterial.SetMaterial("S200", eMatType(MATERIAL_STEEL))
ret = PropMaterial.SetMPIsotropic("S200", 200e6, 0.3, 1.17e-5)
print(f"    OK")

print("[7] FrameSection BAR10x10 (0.10 x 0.10 m)...")
PropFrame = cPropFrame(SapModel.PropFrame)
ret = PropFrame.SetRectangle("BAR10x10", "S200", 0.10, 0.10)
print(f"    ret={ret}")

print("[8] AddByCoord (0,0,0)->(5,0,0)...")
FrameObj = cFrameObj(SapModel.FrameObj)
FrameName1 = " "
[ret, FrameName1] = FrameObj.AddByCoord(0.0, 0.0, 0.0, 5.0, 0.0, 0.0,
                                          FrameName1, "BAR10x10", "BarraAxial", "Global")
print(f"    name={FrameName1!r} ret={ret}")

print("[9] GetPoints...")
PointObj = cPointObj(SapModel.PointObj)
PointName1 = " "; PointName2 = " "
[ret, PointName1, PointName2] = FrameObj.GetPoints(FrameName1, PointName1, PointName2)
print(f"    P1={PointName1!r}  P2={PointName2!r}")

print("[10] Restraint P1 (fully fixed)...")
Restraint = [True, True, True, True, True, True]
ret = PointObj.SetRestraint(PointName1, Restraint)
print(f"    ret={ret}")

print("[11] LoadPattern LIVE...")
LoadPatterns = cLoadPatterns(SapModel.LoadPatterns)
LTYPE_LIVE = 3
ret = LoadPatterns.Add("LIVE", eLoadPatternType(LTYPE_LIVE), 0, True)
print(f"    ret={ret}")

print("[12] PointLoad FX=+100 kN en P2...")
PointLoadValue = [100.0, 0.0, 0.0, 0.0, 0.0, 0.0]
ret = PointObj.SetLoadForce(PointName2, "LIVE", PointLoadValue)
print(f"    ret={ret}")

print(f"[13] Save EDB → {ModelPath}")
ret = File.Save(ModelPath)
print(f"    ret={ret}")

print("[14] RunAnalysis...")
Analyze = cAnalyze(SapModel.Analyze)
ret = Analyze.RunAnalysis()
print(f"    ret={ret}")

print("[15] Setup output for LIVE...")
Results = cAnalysisResults(SapModel.Results)
Setup = cAnalysisResultsSetup(Results.Setup)
Setup.DeselectAllCasesAndCombosForOutput()
Setup.SetCaseSelectedForOutput("LIVE")
print("    OK")

print("[16] JointDispl P2 (esperado Ux = 2.5e-4 m = 0.25 mm)...")
NumberResults = 0
Obj = []; Elm = []; ACase = []; StepType = []; StepNum = []
U1 = []; U2 = []; U3 = []; R1 = []; R2 = []; R3 = []
[ret, NumberResults, Obj, Elm, ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3] = \
    Results.JointDispl(PointName2, eItemTypeElm(0), NumberResults, Obj, Elm,
                       ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3)
print(f"    NumberResults={NumberResults} ret={ret}")
if NumberResults > 0:
    ux_m = U1[0]
    print(f"    Ux = {ux_m:.6e} m = {ux_m*1000:.6f} mm")
    print(f"    Esperado: 0.250000 mm")
    err = abs(ux_m - 2.5e-4) / 2.5e-4 * 100
    print(f"    Error rel: {err:.4f} %  {'[PASS]' if err < 0.5 else '[FAIL]'}")

print("[17] JointReact P1 (esperado FX = -100 kN)...")
NumberResults = 0
Obj = []; Elm = []; ACase = []; StepType = []; StepNum = []
F1 = []; F2 = []; F3 = []; M1 = []; M2 = []; M3 = []
[ret, NumberResults, Obj, Elm, ACase, StepType, StepNum, F1, F2, F3, M1, M2, M3] = \
    Results.JointReact(PointName1, eItemTypeElm(0), NumberResults, Obj, Elm,
                       ACase, StepType, StepNum, F1, F2, F3, M1, M2, M3)
print(f"    NumberResults={NumberResults} ret={ret}")
if NumberResults > 0:
    fx = F1[0]
    print(f"    FX reaccion = {fx:.4f} kN  (esperado -100.0000)")

print("\n[18] NO ApplicationExit — dejamos ETABS abierta para inspeccion")
print("\nDONE")
