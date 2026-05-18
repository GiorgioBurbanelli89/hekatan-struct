# -*- coding: utf-8 -*-
"""Conectar a ETABS YA CORRIENDO (GUI abierta) — pattern AttachToInstance=True.
Barra Axial 1D hekatan-struct: L=5m, A=0.01 m^2, E=200 GPa, F=100 kN.
Esperado: delta = 0.25 mm.
"""
import os, sys
import comtypes.client

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

HERE = os.path.dirname(os.path.abspath(__file__))
ModelPath = os.path.join(HERE, 'barra_axial_attach.edb')

print("[1] Helper...")
helper = comtypes.client.CreateObject('ETABSv1.Helper')
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
print("    OK")

print("[2] GetObject (attach to running ETABS)...")
try:
    myETABSObject = helper.GetObject("CSI.ETABS.API.ETABSObject")
    if myETABSObject is None:
        print("    GetObject devolvio None — no hay instancia API registrada")
        sys.exit(1)
    print(f"    OK obj={myETABSObject}")
except (OSError, comtypes.COMError) as e:
    print(f"    FATAL: {e}")
    sys.exit(1)

print("[3] SapModel...")
SapModel = myETABSObject.SapModel
print(f"    OK")

print("[4] InitializeNewModel() — limpia modelo abierto...")
SapModel.InitializeNewModel()
print(f"    OK")

print("[5] File.NewBlank()...")
ret = SapModel.File.NewBlank()
print(f"    OK ret={ret}")

print("[6] Material S200 (Steel, E=200 GPa)...")
ret = SapModel.PropMaterial.SetMaterial('S200', 1)  # 1=Steel
ret = SapModel.PropMaterial.SetMPIsotropic('S200', 200e6, 0.3, 1.17e-5)
print(f"    OK")

print("[7] Section BAR10x10 (rect 10x10 cm = A 0.01 m^2)...")
ret = SapModel.PropFrame.SetRectangle('BAR10x10', 'S200', 0.10, 0.10)
print(f"    OK ret={ret}")

print("[8] Units kN_m_C (=6)...")
ret = SapModel.SetPresentUnits(6)
print(f"    OK ret={ret}")

print("[9] AddByCoord (0,0,0)->(5,0,0)...")
FrameName1 = ' '
[FrameName1, ret] = SapModel.FrameObj.AddByCoord(
    0, 0, 0, 5, 0, 0, FrameName1, 'BAR10x10', 'BarraAxial', 'Global')
print(f"    OK name={FrameName1!r} ret={ret}")

PointName1 = ' '; PointName2 = ' '
[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName1, PointName1, PointName2)
print(f"    Pts: P1={PointName1!r} P2={PointName2!r}")

print("[10] Restraint P1 (fully fixed)...")
Restraint = [True, True, True, True, True, True]
ret = SapModel.PointObj.SetRestraint(PointName1, Restraint)
print(f"    OK ret={ret}")

print("[11] LoadPattern LIVE...")
ret = SapModel.LoadPatterns.Add('LIVE', 3, 0, True)
print(f"    OK ret={ret}")

print("[12] Carga FX=+100 kN en P2...")
PointLoadValue = [100.0, 0, 0, 0, 0, 0]
ret = SapModel.PointObj.SetLoadForce(PointName2, 'LIVE', PointLoadValue)
print(f"    OK ret={ret}")

print(f"[13] Save EDB → {ModelPath}")
ret = SapModel.File.Save(ModelPath)
print(f"    OK ret={ret}")

print("[14] RunAnalysis...")
ret = SapModel.Analyze.RunAnalysis()
print(f"    OK ret={ret}")

print("[15] Setup output for LIVE...")
ret = SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
ret = SapModel.Results.Setup.SetCaseSelectedForOutput('LIVE')
print(f"    OK")

print("[16] JointDispl P2 (Ux esperado = 2.5e-4 m)...")
NumberResults=0; Obj=[]; Elm=[]; ACase=[]; StepType=[]; StepNum=[]
U1=[]; U2=[]; U3=[]; R1=[]; R2=[]; R3=[]
[NumberResults, Obj, Elm, ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3, ret] = \
    SapModel.Results.JointDispl(PointName2, 0, NumberResults, Obj, Elm,
                                 ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3)
print(f"    NumberResults={NumberResults} ret={ret}")
if NumberResults > 0:
    ux_m = U1[0]
    print(f"    Ux = {ux_m:.6e} m = {ux_m*1000:.6f} mm")
    print(f"    Esperado: 2.5e-4 m = 0.250000 mm")
    err = abs(ux_m - 2.5e-4) / 2.5e-4 * 100
    print(f"    Error: {err:.4f} %  {'[PASS]' if err < 0.5 else '[FAIL]'}")

print("[17] JointReact P1 (FX esperado = -100 kN)...")
NumberResults=0; Obj=[]; Elm=[]; ACase=[]; StepType=[]; StepNum=[]
F1=[]; F2=[]; F3=[]; M1=[]; M2=[]; M3=[]
[NumberResults, Obj, Elm, ACase, StepType, StepNum, F1, F2, F3, M1, M2, M3, ret] = \
    SapModel.Results.JointReact(PointName1, 0, NumberResults, Obj, Elm,
                                 ACase, StepType, StepNum, F1, F2, F3, M1, M2, M3)
print(f"    NumberResults={NumberResults} ret={ret}")
if NumberResults > 0:
    fx = F1[0]
    print(f"    FX = {fx:.4f} kN  (esperado -100.0000)")

print("\nDONE — ETABS queda abierta")
