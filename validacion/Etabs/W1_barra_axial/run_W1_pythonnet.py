# -*- coding: utf-8 -*-
"""
Barra Axial 1D — via pythonnet (.NET InterOp directo, NO COM/comtypes).

El COM/comtypes esta bloqueado por IPC issue en esta maquina. La via
pythonnet (Add-Type equivalent) carga ETABSv1.dll directamente y funciona.

Modelo hekatan "Barra axial (1D)": L=5m, A=0.01 m^2, E=200 GPa, F=100 kN
Esperado: delta = F*L/(A*E) = 0.25 mm  ;  reaccion = -100 kN
"""
import os, sys, time, json
import clr

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

HERE = os.path.dirname(os.path.abspath(__file__))
APIDLLPath = r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll"
ModelPath = os.path.join(HERE, "W1_barra_axial_pynet.edb")
LOG = os.path.join(HERE, "W1_barra_axial_pynet_log.txt")
RESULTS = os.path.join(HERE, "W1_barra_axial_pynet_results.json")

def log(msg):
    print(msg, flush=True)
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(msg + "\n")

if os.path.exists(LOG):
    os.remove(LOG)

log("=" * 70)
log("  BARRA AXIAL 1D — pythonnet (.NET direct, no COM)")
log("=" * 70)
log(f"  DLL    : {APIDLLPath}")
log(f"  EDB    : {ModelPath}")

# 1. Load ETABSv1.dll via .NET
log("\n[1] Add-Reference ETABSv1.dll...")
clr.AddReference(APIDLLPath)
from ETABSv1 import Helper  # type: ignore
log("    [OK] ETABSv1 namespace cargado")

# 2. Create ETABS object via .NET
log("\n[2] Helper + CreateObjectProgID...")
helper = Helper()
ETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
log("    [OK] ETABSObject creado")

# 3. ApplicationStart + esperar
log("\n[3] ApplicationStart + wait 5s...")
ret = ETABSObject.ApplicationStart()
log(f"    ret={ret}")
time.sleep(5)
log("    [OK]")

# 4. SapModel
log("\n[4] SapModel...")
SapModel = ETABSObject.SapModel
log("    [OK]")

# 5. Initialize con units (kN_m_C = 6)
log("\n[5] InitializeNewModel(6 = kN_m_C)...")
ret = SapModel.InitializeNewModel(6)
log(f"    ret={ret}")

# 6. NewBlank
log("\n[6] File.NewBlank()...")
ret = SapModel.File.NewBlank()
log(f"    ret={ret}")

# 7. Material Steel S200 (E=200 GPa = 200e6 kN/m^2)
log("\n[7] Material S200 (Steel, E=200 GPa)...")
ret = SapModel.PropMaterial.SetMaterial("S200", 1)  # 1=Steel
ret = SapModel.PropMaterial.SetMPIsotropic("S200", 200e6, 0.3, 1.17e-5)
log("    [OK]")

# 8. Section rect 10x10 cm
log("\n[8] FrameSection BAR10x10 (rect 0.10 x 0.10 m)...")
ret = SapModel.PropFrame.SetRectangle("BAR10x10", "S200", 0.10, 0.10)
log(f"    ret={ret}")

# 9. Add frame por coordenadas (0,0,0) -> (5,0,0) - horizontal en X
log("\n[9] AddByCoord (0,0,0)->(5,0,0)...")
import System  # type: ignore
FrameName1 = ""
result = SapModel.FrameObj.AddByCoord(0.0, 0.0, 0.0, 5.0, 0.0, 0.0, FrameName1, "BAR10x10", "BarraAxial", "Global")
# pythonnet returns tuple (ret, FrameName1_out)
ret = result[0] if isinstance(result, tuple) else result
FrameName1 = result[1] if isinstance(result, tuple) and len(result) > 1 else FrameName1
log(f"    name={FrameName1!r} ret={ret}")

# 10. Get endpoints
log("\n[10] GetPoints...")
PointName1 = ""; PointName2 = ""
result = SapModel.FrameObj.GetPoints(FrameName1, PointName1, PointName2)
ret = result[0] if isinstance(result, tuple) else result
PointName1 = result[1] if isinstance(result, tuple) else PointName1
PointName2 = result[2] if isinstance(result, tuple) else PointName2
log(f"    P1={PointName1!r} P2={PointName2!r} ret={ret}")

# 11. Restraint P1
log("\n[11] Restraint P1 (fully fixed)...")
Restraint = System.Array[bool]([True, True, True, True, True, True])
ret = SapModel.PointObj.SetRestraint(PointName1, Restraint)
log(f"    ret={ret}")

# 12. LoadPattern LIVE
log("\n[12] LoadPattern 'LIVE'...")
ret = SapModel.LoadPatterns.Add("LIVE", 3, 0, True)  # 3=Live
log(f"    ret={ret}")

# 13. Load FX=+100 kN en P2
log("\n[13] PointLoad FX=+100 kN en P2...")
PointLoadValue = System.Array[float]([100.0, 0.0, 0.0, 0.0, 0.0, 0.0])
ret = SapModel.PointObj.SetLoadForce(PointName2, "LIVE", PointLoadValue)
log(f"    ret={ret}")

# 14. Save EDB
log(f"\n[14] Save EDB -> {ModelPath}")
ret = SapModel.File.Save(ModelPath)
log(f"    ret={ret}")

# 15. RunAnalysis
log("\n[15] RunAnalysis...")
ret = SapModel.Analyze.RunAnalysis()
log(f"    ret={ret}")

# 16. Setup output LIVE
log("\n[16] Setup output for LIVE...")
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("LIVE")
log("    [OK]")

# 17. JointDispl P2
log("\n[17] JointDispl P2 (esperado Ux = 2.5e-4 m)...")
# Pythonnet handles out parameters specially. The call returns a tuple
# (ret, NumberResults, Obj_arr, Elm_arr, ACase_arr, ST_arr, SN_arr,
#  U1_arr, U2_arr, U3_arr, R1_arr, R2_arr, R3_arr).
result = SapModel.Results.JointDispl(PointName2, 0, 0, None, None, None, None, None, None, None, None, None, None, None)
log(f"    result type={type(result).__name__}, len={len(result) if hasattr(result, '__len__') else 'n/a'}")
log(f"    raw result={result}")

NumberResults = result[1]
if NumberResults > 0:
    U1 = list(result[7])
    U2 = list(result[8])
    U3 = list(result[9])
    ux_m = U1[0]
    log(f"    Ux = {ux_m:.6e} m = {ux_m*1000:.6f} mm")
    log(f"    Esperado: 2.5e-4 m = 0.250000 mm")
    err = abs(ux_m - 2.5e-4)/2.5e-4 * 100
    log(f"    Error rel: {err:.4f} %  {'[PASS]' if err < 0.5 else '[FAIL]'}")

# 18. JointReact P1
log("\n[18] JointReact P1 (esperado FX = -100 kN)...")
result = SapModel.Results.JointReact(PointName1, 0, 0, None, None, None, None, None, None, None, None, None, None, None)
NumberResults = result[1]
if NumberResults > 0:
    F1 = list(result[7])
    fx = F1[0]
    log(f"    FX = {fx:.4f} kN  (esperado -100.0000)")

# 19. Cleanup
log("\n[19] ApplicationExit...")
ETABSObject.ApplicationExit(False)
log("    [OK]")

log("\n=== DONE ===")
