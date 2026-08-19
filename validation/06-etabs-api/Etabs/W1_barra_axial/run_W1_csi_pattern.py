# -*- coding: utf-8 -*-
"""
Barra Axial 1D — patron CSI oficial (copia exacta de Example_1-001 ETABS API).
Aplicado al modelo hekatan "Barra axial (1D)":
  L=5m, A=0.01m^2, E=200 GPa, F=100 kN axial
Esperado: delta = F*L/(A*E) = 0.25 mm
"""
import os, sys
import comtypes.client

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

# --- 1. Setup --------------------------------------------------------------
AttachToInstance = False
SpecifyPath = False
ProgramPath = r'C:\Program Files\Computers and Structures\ETABS 22\ETABS.exe'

HERE = os.path.dirname(os.path.abspath(__file__))
APIPath = HERE
ModelPath = os.path.join(APIPath, 'barra_axial_csi.edb')

print(f"[1] Helper...")
helper = comtypes.client.CreateObject('ETABSv1.Helper')
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
print(f"    OK")

if AttachToInstance:
    try:
        myETABSObject = helper.GetObject("CSI.ETABS.API.ETABSObject")
    except (OSError, comtypes.COMError):
        print("No running instance.")
        sys.exit(-1)
else:
    if SpecifyPath:
        try:
            myETABSObject = helper.CreateObject(ProgramPath)
        except (OSError, comtypes.COMError):
            print("Cannot start from " + ProgramPath); sys.exit(-1)
    else:
        try:
            print(f"[2] CreateObjectProgID...")
            myETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
            print(f"    OK")
        except (OSError, comtypes.COMError):
            print("Cannot start.")
            sys.exit(-1)
    print(f"[3] ApplicationStart...")
    myETABSObject.ApplicationStart()
    print(f"    OK — esperando 10s para GUI ready...")
    import time
    time.sleep(10)

# Get SapModel
print(f"[4] SapModel...")
SapModel = myETABSObject.SapModel
print(f"    OK")

# InitializeNewModel con retry porque a veces SapModel queda en estado intermedio
print(f"[5] InitializeNewModel (con retry)...")
import time
for attempt in range(1, 11):
    try:
        SapModel.InitializeNewModel()
        print(f"    OK en intento {attempt}")
        break
    except Exception as e:
        print(f"    intento {attempt} fallo: {type(e).__name__}: {e}")
        time.sleep(2)
else:
    print(f"    FATAL: InitializeNewModel falla despues de 10 intentos")
    sys.exit(1)

# NewBlank
print(f"[6] File.NewBlank...")
ret = SapModel.File.NewBlank()
print(f"    OK ret={ret}")

# --- 2. Define material -----------------------------------------------------
print(f"[7] Material Steel S200 (E=200 GPa)...")
MATERIAL_STEEL = 1
ret = SapModel.PropMaterial.SetMaterial('S200', MATERIAL_STEEL)
# E in kN/m^2 = 200e6, nu=0.3, alpha=1.17e-5
ret = SapModel.PropMaterial.SetMPIsotropic('S200', 200e6, 0.3, 1.17e-5)
print(f"    OK ret={ret}")

# --- 3. Rectangular section 10x10 cm → A=0.01 m^2 ---------------------------
print(f"[8] Section rect 10x10 cm...")
ret = SapModel.PropFrame.SetRectangle('BAR10x10', 'S200', 0.10, 0.10)
print(f"    OK ret={ret}")

# --- 4. Switch to kN-m units (6 = kN_m_C) ----------------------------------
print(f"[9] SetPresentUnits kN_m_C...")
kN_m_C = 6
ret = SapModel.SetPresentUnits(kN_m_C)
print(f"    OK ret={ret}")

# --- 5. Add frame by coordinates -------------------------------------------
print(f"[10] AddByCoord(0,0,0)->(5,0,0)...")
FrameName1 = ' '
[FrameName1, ret] = SapModel.FrameObj.AddByCoord(
    0, 0, 0, 5, 0, 0, FrameName1, 'BAR10x10', 'BarraAxial', 'Global')
print(f"    OK name={FrameName1!r} ret={ret}")

# Get endpoints
PointName1 = ' '; PointName2 = ' '
[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName1, PointName1, PointName2)
print(f"    Pts: P1={PointName1!r} P2={PointName2!r}")

# --- 6. Restraints ----------------------------------------------------------
print(f"[11] Restraint P1 (fixed)...")
Restraint = [True, True, True, True, True, True]
ret = SapModel.PointObj.SetRestraint(PointName1, Restraint)
print(f"    OK ret={ret}")

# --- 7. Load pattern + load -------------------------------------------------
print(f"[12] LoadPattern 'LIVE' (Live, SW=0)...")
LTYPE_LIVE = 3
ret = SapModel.LoadPatterns.Add('LIVE', LTYPE_LIVE, 0, True)
print(f"    OK ret={ret}")

print(f"[13] Point load FX=+100 kN at P2...")
PointLoadValue = [100.0, 0, 0, 0, 0, 0]
ret = SapModel.PointObj.SetLoadForce(PointName2, 'LIVE', PointLoadValue)
print(f"    OK ret={ret}")

# --- 8. Save + Run ---------------------------------------------------------
print(f"[14] Save EDB...")
ret = SapModel.File.Save(ModelPath)
print(f"    OK ret={ret} path={ModelPath}")

print(f"[15] RunAnalysis...")
ret = SapModel.Analyze.RunAnalysis()
print(f"    OK ret={ret}")

# --- 9. Read results --------------------------------------------------------
print(f"[16] Setup output for LIVE...")
ret = SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
ret = SapModel.Results.Setup.SetCaseSelectedForOutput('LIVE')
print(f"    OK")

print(f"[17] Joint displacements P2 (esperado Ux ~ 2.5e-4 m)...")
NumberResults=0; Obj=[]; Elm=[]; ACase=[]; StepType=[]; StepNum=[]
U1=[]; U2=[]; U3=[]; R1=[]; R2=[]; R3=[]
ObjectElm = 0
[NumberResults, Obj, Elm, ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3, ret] = \
    SapModel.Results.JointDispl(PointName2, ObjectElm, NumberResults, Obj, Elm,
                                 ACase, StepType, StepNum, U1, U2, U3, R1, R2, R3)
print(f"    NumberResults={NumberResults}  ret={ret}")
if NumberResults > 0:
    ux_m = U1[0]
    print(f"    Ux = {ux_m:.6e} m = {ux_m*1000:.6f} mm")
    print(f"    Esperado: 2.5e-4 m = 0.250000 mm")
    err = abs(ux_m - 2.5e-4)
    print(f"    Error abs: {err:.2e} m   ({err/2.5e-4*100:.3f}%)")

print(f"[18] Joint reactions P1 (esperado FX ~ -100 kN)...")
NumberResults=0; Obj=[]; Elm=[]; ACase=[]; StepType=[]; StepNum=[]
F1=[]; F2=[]; F3=[]; M1=[]; M2=[]; M3=[]
[NumberResults, Obj, Elm, ACase, StepType, StepNum, F1, F2, F3, M1, M2, M3, ret] = \
    SapModel.Results.JointReact(PointName1, ObjectElm, NumberResults, Obj, Elm,
                                 ACase, StepType, StepNum, F1, F2, F3, M1, M2, M3)
print(f"    NumberResults={NumberResults}  ret={ret}")
if NumberResults > 0:
    fx_kN = F1[0]
    print(f"    FX reaccion = {fx_kN:.4f} kN")
    print(f"    Esperado: -100.0000 kN")

# --- 10. Close --------------------------------------------------------------
print(f"[19] ApplicationExit...")
ret = myETABSObject.ApplicationExit(False)
SapModel = None
myETABSObject = None
print(f"    OK")
print(f"\nDONE")
