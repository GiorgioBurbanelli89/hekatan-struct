"""Plate Thick — ETABS API (Python) — FE03 SS Mindlin t=0.25, q=1, 4x4."""
import os
import comtypes.client as cc

APIDLLPath     = r"C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll"
ModelDirectory = r"C:\CSi_ETABS_API_PlateThick"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "plate_thick.edb")

W_m, H_m, t_m = 1.0, 1.0, 0.25
E_m, nu_m, q  = 30000, 0.2, 1.0
nx, ny        = 4, 4

helper      = cc.CreateObject("ETABSv1.Helper")
ETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
ETABSObject.ApplicationStart()
SapModel    = ETABSObject.SapModel
SapModel.InitializeNewModel()
SapModel.File.NewBlank()
SapModel.SetPresentUnits(6)

SapModel.PropMaterial.SetMaterial("PLATE_MAT", 2)
SapModel.PropMaterial.SetMPIsotropic("PLATE_MAT", E_m, nu_m, 0)

# eShellType.ShellThick = 2
SapModel.PropArea.SetSlab("PLATE_THICK", 1, 2, "PLATE_MAT", t_m)

dx, dy = W_m/nx, H_m/ny
for jj in range(ny):
    for ii in range(nx):
        X = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx]
        Y = [jj*dy, jj*dy, (jj+1)*dy, (jj+1)*dy]
        SapModel.AreaObj.AddByCoord(4, X, Y, [0]*4, "", "PLATE_THICK", "", "Global")

NumberPoints, PointNames = 0, []
[NumberPoints, PointNames, _] = SapModel.PointObj.GetNameList(NumberPoints, PointNames)
for p in PointNames:
    [X, Y, Z, _] = SapModel.PointObj.GetCoordCartesian(p, 0, 0, 0)
    if abs(X)<1e-6 or abs(X-W_m)<1e-6 or abs(Y)<1e-6 or abs(Y-H_m)<1e-6:
        SapModel.PointObj.SetRestraint(p, [False, False, True, False, False, False])

SapModel.LoadPatterns.Add("Q", 8, 0, True)
NumberAreas, AreaNames = 0, []
[NumberAreas, AreaNames, _] = SapModel.AreaObj.GetNameList(NumberAreas, AreaNames)
for a in AreaNames:
    SapModel.AreaObj.SetLoadUniform(a, "Q", -q, 10, True, "Global")

SapModel.File.Save(ModelPath)
SapModel.Analyze.RunAnalysis()
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("Q")

w_max = 0.0
for p in PointNames:
    NumRes = 0
    args = [NumRes] + [[] for _ in range(11)]
    [NumRes, _, _, _, _, _, U1, U2, U3, R1, R2, R3, _] = SapModel.Results.JointDispl(p, 0, *args)
    if NumRes > 0 and abs(U3[0]) > w_max:
        w_max = abs(U3[0])

ETABSObject.ApplicationExit(False)

D_ref    = E_m * t_m**3 / (12*(1-nu_m**2))
G_m      = E_m / (2*(1+nu_m))
w_bend   = 0.00406 * q * W_m**4 / D_ref
w_shear  = 0.0737 * q * W_m**2 / (5/6 * G_m * t_m)
w_reiss  = w_bend + w_shear
w_heklab = 1.543172e-4

print("\n" + "═"*60)
print("  PLATE THICK (eShellType.ShellThick) — ETABS vs HekatanLab vs Reissner")
print("═"*60)
print(f"  ETABS API         w_max = {w_max:.6e}  ({(w_max/w_heklab-1)*100:+.2f}%)")
print(f"  HekatanLab Web    w_max = {w_heklab:.6e}  ---")
print(f"  Reissner teórica  w_max = {w_reiss:.6e}  ({(w_reiss/w_heklab-1)*100:+.2f}%)")
print(f"\nETABSResult_thick = {w_max:.6e}")
print(f"IndResult_thick   = {w_reiss:.6e}")
print(f"PercentDiff_thick = {(w_max/w_reiss)-1:+.4f}")
