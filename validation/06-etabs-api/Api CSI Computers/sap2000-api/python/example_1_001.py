"""
SAP2000 Example 1-001 — Portal Frame (Python translation of CSi MATLAB example)
================================================================================

Reproduce el verification problem oficial CSi: 3 frames, 7 patrones de carga,
compara contra IndResult hand-calculated.

Fuente: https://wiki.csiamerica.com/display/oapi/Example+6+%28MATLAB%29
Original MATLAB → Python con comtypes.

Uso:
    pip install comtypes
    python example_1_001.py
"""
import os
import comtypes.client as cc

# ── Configuración ──────────────────────────────────────────────
AttachToInstance = False
SpecifyPath      = False
ProgramPath      = r"C:\Program Files\Computers and Structures\SAP2000 21\SAP2000.exe"
APIDLLPath       = r"C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll"
ModelDirectory   = r"C:\CSiAPIexample"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "API_1-001.sdb")

# ── Crear SapObject ───────────────────────────────────────────
if AttachToInstance:
    SapObject = cc.GetActiveObject("CSI.SAP2000.API.SapObject")
else:
    helper = cc.CreateObject("SAP2000v1.Helper")
    if SpecifyPath:
        SapObject = helper.CreateObject(ProgramPath)
    else:
        SapObject = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
    SapObject.ApplicationStart()

SapModel = SapObject.SapModel
ret = SapModel.InitializeNewModel()
ret = SapModel.File.NewBlank()

# ── Material ──────────────────────────────────────────────────
ret = SapModel.PropMaterial.SetMaterial("CONC", 2)        # eMatType.Concrete = 2
ret = SapModel.PropMaterial.SetMPIsotropic("CONC", 3600, 0.2, 0.0000055)

# ── Sección R1 12x12 ──────────────────────────────────────────
ret = SapModel.PropFrame.SetRectangle("R1", "CONC", 12, 12)

ModValue = [1.0]*8
ModValue[0] = 1000
ModValue[1] = 0
ModValue[2] = 0
ret = SapModel.PropFrame.SetModifiers("R1", ModValue)

# ── Unidades kip-ft-F (= 5) ───────────────────────────────────
ret = SapModel.SetPresentUnits(5)

# ── Agregar 3 frames ─────────────────────────────────────────
FrameName1 = FrameName2 = FrameName3 = " "
[FrameName1, ret] = SapModel.FrameObj.AddByCoord(0, 0, 0, 0, 0, 10, FrameName1, "R1", "1", "Global")
[FrameName2, ret] = SapModel.FrameObj.AddByCoord(0, 0, 10, 8, 0, 16, FrameName2, "R1", "2", "Global")
[FrameName3, ret] = SapModel.FrameObj.AddByCoord(-4, 0, 10, 0, 0, 10, FrameName3, "R1", "3", "Global")

# ── Restraints ────────────────────────────────────────────────
PointName1 = PointName2 = " "
[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName1, PointName1, PointName2)
ret = SapModel.PointObj.SetRestraint(PointName1, [True, True, True, True, False, False])

[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName2, PointName1, PointName2)
ret = SapModel.PointObj.SetRestraint(PointName2, [True, True, False, False, False, False])

# ── Refresh view ──────────────────────────────────────────────
ret = SapModel.View.RefreshView(0, False)

# ── Load Patterns 1-7 ────────────────────────────────────────
# eLoadPatternType.Other = 8 — selfweight=1 sólo en pattern '1'
ret = SapModel.LoadPatterns.Add("1", 8, 1, True)
for i in range(2, 8):
    ret = SapModel.LoadPatterns.Add(str(i), 8, 0, True)

# Pattern 2: pt -10 en P_i de Frame3 + dist 1.8 en Frame3
[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName3, PointName1, PointName2)
ret = SapModel.PointObj.SetLoadForce(PointName1, "2", [0, 0, -10, 0, 0, 0])
ret = SapModel.FrameObj.SetLoadDistributed(FrameName3, "2", 1, 10, 0, 1, 1.8, 1.8)

# Pattern 3
[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName3, PointName1, PointName2)
ret = SapModel.PointObj.SetLoadForce(PointName2, "3", [0, 0, -17.2, 0, -54.4, 0])

# Pattern 4
ret = SapModel.FrameObj.SetLoadDistributed(FrameName2, "4", 1, 11, 0, 1, 2, 2)

# Pattern 5
ret = SapModel.FrameObj.SetLoadDistributed(FrameName1, "5", 1, 2, 0, 1, 2, 2, "Local")
ret = SapModel.FrameObj.SetLoadDistributed(FrameName2, "5", 1, 2, 0, 1, -2, -2, "Local")

# Pattern 6
ret = SapModel.FrameObj.SetLoadDistributed(FrameName1, "6", 1, 2, 0, 1, 0.9984, 0.3744, "Local")
ret = SapModel.FrameObj.SetLoadDistributed(FrameName2, "6", 1, 2, 0, 1, -0.3744, 0, "Local")

# Pattern 7
ret = SapModel.FrameObj.SetLoadPoint(FrameName2, "7", 1, 2, 0.5, -15, "Local")

# Unidades kip-in-F (= 1) y salvar
ret = SapModel.SetPresentUnits(1)
ret = SapModel.File.Save(ModelPath)
ret = SapModel.Analyze.RunAnalysis()

# ── Extraer resultados ───────────────────────────────────────
SapResult = [0.0]*7
[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName2, PointName1, PointName2)

for i in range(1, 8):
    NumRes = 0
    args = [NumRes] + [[] for _ in range(11)]
    SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
    SapModel.Results.Setup.SetCaseSelectedForOutput(str(i))
    target = PointName2 if i <= 4 else PointName1
    res = SapModel.Results.JointDispl(target, 0, *args)
    NumRes, _, _, _, _, _, U1, U2, U3, R1, R2, R3, _ = res
    SapResult[i-1] = U3[0] if i <= 4 else U1[0]

SapObject.ApplicationExit(False)

# ── IndResult (oficial CSi) ───────────────────────────────────
IndResult = [-0.02639, 0.06296, 0.06296, -0.2963, 0.3125, 0.11556, 0.00651]
PercentDiff = [SapResult[i]/IndResult[i] - 1 for i in range(7)]

print("\n" + "═"*60)
print("  SAP2000 Example 1-001 (Python)")
print("═"*60)
print(f"  Case   SapResult      IndResult      PercentDiff")
for i in range(7):
    print(f"   {i+1}   {SapResult[i]:14.6f} {IndResult[i]:14.6f} {PercentDiff[i]*100:+10.4f}%")
print(f"\n  Max |PercentDiff| = {max(abs(d) for d in PercentDiff)*100:.4f}%")
