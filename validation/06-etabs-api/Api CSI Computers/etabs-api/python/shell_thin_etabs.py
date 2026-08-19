"""Shell Thin Cantilever — ETABS API (Python) — FE05."""
import os
import comtypes.client as cc

APIDLLPath     = r"C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll"
ModelDirectory = r"C:\CSi_ETABS_API_ShellThin"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "shell_thin.edb")

E, nu, t = 200000, 0.3, 0.005
W, H, P  = 1.0, 1.0, 1.0
nx, ny   = 4, 4

helper      = cc.CreateObject("ETABSv1.Helper")
ETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
ETABSObject.ApplicationStart()
SapModel    = ETABSObject.SapModel
SapModel.InitializeNewModel()
SapModel.File.NewBlank()
SapModel.SetPresentUnits(6)

SapModel.PropMaterial.SetMaterial("SHELL_MAT", 1)
SapModel.PropMaterial.SetMPIsotropic("SHELL_MAT", E, nu, 0)
SapModel.PropArea.SetSlab("SHELL_THIN", 1, 1, "SHELL_MAT", t)  # eShellType.ShellThin=1

dx, dy = W/nx, H/ny
for jj in range(ny):
    for ii in range(nx):
        X = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx]
        Y = [jj*dy, jj*dy, (jj+1)*dy, (jj+1)*dy]
        SapModel.AreaObj.AddByCoord(4, X, Y, [0]*4, "", "SHELL_THIN", "", "Global")

NumberPoints, PointNames = 0, []
[NumberPoints, PointNames, _] = SapModel.PointObj.GetNameList(NumberPoints, PointNames)
for p in PointNames:
    [X, Y, Z, _] = SapModel.PointObj.GetCoordCartesian(p, 0, 0, 0)
    if abs(X) < 1e-6:
        SapModel.PointObj.SetRestraint(p, [True]*6)

SapModel.LoadPatterns.Add("P", 8, 0, True)
P_per = P / (ny+1)
for p in PointNames:
    [X, Y, Z, _] = SapModel.PointObj.GetCoordCartesian(p, 0, 0, 0)
    if abs(X - W) < 1e-6:
        SapModel.PointObj.SetLoadForce(p, "P", [P_per, 0, 0, 0, 0, 0], False, "Global")

SapModel.File.Save(ModelPath)
SapModel.Analyze.RunAnalysis()
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("P")

u_max = 0.0
for p in PointNames:
    NumRes = 0
    args = [NumRes] + [[] for _ in range(11)]
    [NumRes, _, _, _, _, _, U1, U2, U3, R1, R2, R3, _] = SapModel.Results.JointDispl(p, 0, *args)
    if NumRes > 0 and abs(U1[0]) > u_max:
        u_max = abs(U1[0])

ETABSObject.ApplicationExit(False)

delta_mem = P * W / (E * H * t)
u_heklab  = 1.261058e-3

print("\n" + "═"*60)
print("  SHELL THIN (eShellType.ShellThin) — ETABS vs HekatanLab vs Membrana")
print("═"*60)
print(f"  ETABS API       u_max = {u_max:.6e}  ({(u_max/u_heklab-1)*100:+.2f}%)")
print(f"  HekatanLab Web  u_max = {u_heklab:.6e}  ---")
print(f"  Membrana axial  u_max = {delta_mem:.6e}  ({(delta_mem/u_heklab-1)*100:+.2f}%)")
print(f"\nETABSResult_st = {u_max:.6e}")
print(f"IndResult_st   = {delta_mem:.6e}")
print(f"PercentDiff_st = {(u_max/delta_mem)-1:+.4f}")
