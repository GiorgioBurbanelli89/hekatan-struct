"""
ETABS Example 1-001 — Portal Frame (Python translation, comtypes)
Reproduce el verification problem oficial CSi vía ETABS API.
"""
import os
import comtypes.client as cc

APIDLLPath     = r"C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll"
ModelDirectory = r"C:\CSi_ETABS_API_Example"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "API_1-001.edb")

helper      = cc.CreateObject("ETABSv1.Helper")
ETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
ETABSObject.ApplicationStart()
SapModel    = ETABSObject.SapModel
SapModel.InitializeNewModel()
SapModel.File.NewBlank()

SapModel.PropMaterial.SetMaterial("CONC", 2)
SapModel.PropMaterial.SetMPIsotropic("CONC", 3600, 0.2, 0.0000055)
SapModel.PropFrame.SetRectangle("R1", "CONC", 12, 12)

ModValue = [1000, 0, 0, 1, 1, 1, 1, 1]
SapModel.PropFrame.SetModifiers("R1", ModValue)

# Unidades kip-ft-F = 5
SapModel.SetPresentUnits(5)

# Frames
FrameName1 = FrameName2 = FrameName3 = " "
[FrameName1, _] = SapModel.FrameObj.AddByCoord(0,0,0, 0,0,10, FrameName1, "R1", "1", "Global")
[FrameName2, _] = SapModel.FrameObj.AddByCoord(0,0,10, 8,0,16, FrameName2, "R1", "2", "Global")
[FrameName3, _] = SapModel.FrameObj.AddByCoord(-4,0,10, 0,0,10, FrameName3, "R1", "3", "Global")

# Restraints
PointName1 = PointName2 = " "
[PointName1, PointName2, _] = SapModel.FrameObj.GetPoints(FrameName1, PointName1, PointName2)
SapModel.PointObj.SetRestraint(PointName1, [True, True, True, True, False, False])
[PointName1, PointName2, _] = SapModel.FrameObj.GetPoints(FrameName2, PointName1, PointName2)
SapModel.PointObj.SetRestraint(PointName2, [True, True, False, False, False, False])

SapModel.View.RefreshView(0, False)

# 7 Load Patterns
SapModel.LoadPatterns.Add("1", 8, 1, True)
for i in range(2, 8):
    SapModel.LoadPatterns.Add(str(i), 8, 0, True)

# LP 2
[PointName1, PointName2, _] = SapModel.FrameObj.GetPoints(FrameName3, PointName1, PointName2)
SapModel.PointObj.SetLoadForce(PointName1, "2", [0, 0, -10, 0, 0, 0])
SapModel.FrameObj.SetLoadDistributed(FrameName3, "2", 1, 10, 0, 1, 1.8, 1.8)

# LP 3
[PointName1, PointName2, _] = SapModel.FrameObj.GetPoints(FrameName3, PointName1, PointName2)
SapModel.PointObj.SetLoadForce(PointName2, "3", [0, 0, -17.2, 0, -54.4, 0])

# LP 4-7
SapModel.FrameObj.SetLoadDistributed(FrameName2, "4", 1, 11, 0, 1, 2, 2)
SapModel.FrameObj.SetLoadDistributed(FrameName1, "5", 1, 2, 0, 1, 2, 2, "Local")
SapModel.FrameObj.SetLoadDistributed(FrameName2, "5", 1, 2, 0, 1, -2, -2, "Local")
SapModel.FrameObj.SetLoadDistributed(FrameName1, "6", 1, 2, 0, 1, 0.9984, 0.3744, "Local")
SapModel.FrameObj.SetLoadDistributed(FrameName2, "6", 1, 2, 0, 1, -0.3744, 0, "Local")
SapModel.FrameObj.SetLoadPoint(FrameName2, "7", 1, 2, 0.5, -15, "Local")

# Unidades kip-in-F = 1
SapModel.SetPresentUnits(1)
SapModel.File.Save(ModelPath)
SapModel.Analyze.RunAnalysis()

# Resultados
ETABSResult = [0.0]*7
[PointName1, PointName2, _] = SapModel.FrameObj.GetPoints(FrameName2, PointName1, PointName2)

for i in range(1, 8):
    NumRes = 0
    args = [NumRes] + [[] for _ in range(11)]
    SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
    SapModel.Results.Setup.SetCaseSelectedForOutput(str(i))
    target = PointName2 if i <= 4 else PointName1
    res = SapModel.Results.JointDispl(target, 0, *args)
    NumRes, _, _, _, _, _, U1, U2, U3, R1, R2, R3, _ = res
    ETABSResult[i-1] = U3[0] if i <= 4 else U1[0]

ETABSObject.ApplicationExit(False)

IndResult = [-0.02639, 0.06296, 0.06296, -0.2963, 0.3125, 0.11556, 0.00651]
PercentDiff = [ETABSResult[i]/IndResult[i] - 1 for i in range(7)]

print("\n" + "═"*60)
print("  ETABS Example 1-001 (Python)")
print("═"*60)
print(f"  Case   ETABSResult    IndResult      PercentDiff")
for i in range(7):
    print(f"   {i+1}   {ETABSResult[i]:14.6f} {IndResult[i]:14.6f} {PercentDiff[i]*100:+10.4f}%")
print(f"\n  Max |PercentDiff| = {max(abs(d) for d in PercentDiff)*100:.4f}%")
