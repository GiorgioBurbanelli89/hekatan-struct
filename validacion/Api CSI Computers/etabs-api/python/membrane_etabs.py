"""Membrane Wall — ETABS API (Python) — FE01b. SetWall + eShellType.Membrane."""
import os
import comtypes.client as cc

APIDLLPath     = r"C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll"
ModelDirectory = r"C:\CSi_ETABS_API_Membrane"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "membrane_wall.edb")

W, H, t  = 5, 3, 0.2
P, E, nu = 100, 25000, 0.2
nx, ny   = 6, 4

helper      = cc.CreateObject("ETABSv1.Helper")
ETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
ETABSObject.ApplicationStart()
SapModel    = ETABSObject.SapModel
SapModel.InitializeNewModel()
SapModel.File.NewBlank()
SapModel.SetPresentUnits(6)

SapModel.PropMaterial.SetMaterial("WALL_MAT", 2)
SapModel.PropMaterial.SetMPIsotropic("WALL_MAT", E, nu, 0)

# eWallPropType.Specified=2, eShellType.Membrane=3
SapModel.PropArea.SetWall("WALL_MEM", 2, 3, "WALL_MAT", t)

# Malla XZ
dx, dz = W/nx, H/ny
for jj in range(ny):
    for ii in range(nx):
        X = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx]
        Y = [0]*4
        Z = [jj*dz, jj*dz, (jj+1)*dz, (jj+1)*dz]
        SapModel.AreaObj.AddByCoord(4, X, Y, Z, "", "WALL_MEM", "", "Global")

NumberPoints, PointNames = 0, []
[NumberPoints, PointNames, _] = SapModel.PointObj.GetNameList(NumberPoints, PointNames)
for p in PointNames:
    [X, Y, Z, _] = SapModel.PointObj.GetCoordCartesian(p, 0, 0, 0)
    if abs(Z) < 1e-6:
        SapModel.PointObj.SetRestraint(p, [True]*6)
    else:
        SapModel.PointObj.SetRestraint(p, [False, True, False, False, False, False])

SapModel.LoadPatterns.Add("P", 8, 0, True)
P_per = P / (nx+1)
for p in PointNames:
    [X, Y, Z, _] = SapModel.PointObj.GetCoordCartesian(p, 0, 0, 0)
    if abs(Z - H) < 1e-6:
        SapModel.PointObj.SetLoadForce(p, "P", [P_per, 0, 0, 0, 0, 0], False, "Global")

SapModel.File.Save(ModelPath)
SapModel.Analyze.RunAnalysis()
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("P")

u_max = 0.0
for p in PointNames:
    [X, Y, Z, _] = SapModel.PointObj.GetCoordCartesian(p, 0, 0, 0)
    if abs(Z - H) < 1e-6:
        NumRes = 0
        args = [NumRes] + [[] for _ in range(11)]
        [NumRes, _, _, _, _, _, U1, U2, U3, R1, R2, R3, _] = SapModel.Results.JointDispl(p, 0, *args)
        if NumRes > 0 and abs(U1[0]) > u_max:
            u_max = abs(U1[0])

ETABSObject.ApplicationExit(False)

I_w        = t * W**3 / 12
delta_beam = P * H**3 / (3*E*I_w)
u_heklab   = 5.7417e-2

print("\n" + "═"*60)
print("  MEMBRANE Q4 — ETABS vs HekatanLab vs Viga")
print("═"*60)
print(f"  ETABS API       u_max = {u_max:.6e}  ({(u_max/u_heklab-1)*100:+.2f}%)")
print(f"  HekatanLab Web  u_max = {u_heklab:.6e}  ---")
print(f"  Viga Euler-B    u_max = {delta_beam:.6e}  ({(delta_beam/u_heklab-1)*100:+.2f}%)")
print(f"\nETABSResult_mem = {u_max:.6e}")
print(f"IndResult_mem   = {delta_beam:.6e}")
print(f"PercentDiff_mem = {(u_max/delta_beam)-1:+.4f}")
