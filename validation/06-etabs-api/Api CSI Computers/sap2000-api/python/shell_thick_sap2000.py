"""
Shell Thick Cantilever — SAP2000 API (Python 3.8+)
FE06: 0.5x0.5x0.05, E=200000, nu=0.3, P=100 lateral en x=W, empotrado x=0, 3x3.
Esperado: HekatanLab u_max=1.2528e-2.
"""
import os
import comtypes.client as cc

APIDLLPath     = r"C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll"
ModelDirectory = r"C:\CSi_SAP2000_API_ShellThick"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "shell_thick.sdb")

E, nu, t = 200000, 0.3, 0.05
W, H, P  = 0.5, 0.5, 100
nx, ny   = 3, 3

helper    = cc.CreateObject("SAP2000v1.Helper")
SapObject = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
SapObject.ApplicationStart()
SapModel  = SapObject.SapModel
SapModel.InitializeNewModel(6)
SapModel.File.NewBlank()

SapModel.PropMaterial.SetMaterial("SHELL_MAT", 1)
SapModel.PropMaterial.SetMPIsotropic("SHELL_MAT", E, nu, 0)
SapModel.PropArea.SetShell_1("SHELL_THICK", 1, False, "SHELL_MAT", 0, t, t)

dx, dy = W/nx, H/ny
for jj in range(ny):
    for ii in range(nx):
        X = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx]
        Y = [jj*dy, jj*dy, (jj+1)*dy, (jj+1)*dy]
        SapModel.AreaObj.AddByCoord(4, X, Y, [0]*4, "", "SHELL_THICK", "", "Global")

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

u_max_sap = 0.0
for p in PointNames:
    NumRes = 0
    args = [NumRes] + [[] for _ in range(11)]
    [NumRes, _, _, _, _, _, U1, U2, U3, R1, R2, R3, _] = \
        SapModel.Results.JointDispl(p, 0, *args)
    if NumRes > 0 and abs(U1[0]) > u_max_sap:
        u_max_sap = abs(U1[0])

SapObject.ApplicationExit(False)

delta_mem = P * W / (E * H * t)
u_heklab  = 1.2528e-2

print("\n" + "═"*60)
print("  SHELL THICK (ShellType=1) — SAP2000 vs HekatanLab vs Membrana")
print("═"*60)
print(f"  {W}x{H} m, t={t} (t/a={t/W}), P={P}, malla {nx}x{ny}")
print(f"  SAP2000 API       u_max = {u_max_sap:.6e}  ({(u_max_sap/u_heklab-1)*100:+.2f}%)")
print(f"  HekatanLab Web    u_max = {u_heklab:.6e}  ---")
print(f"  Membrana axial    u_max = {delta_mem:.6e}  ({(delta_mem/u_heklab-1)*100:+.2f}%)")
print(f"\nSapResult_sthk   = {u_max_sap:.6e}")
print(f"IndResult_sthk   = {delta_mem:.6e}")
print(f"PercentDiff_sthk = {(u_max_sap/delta_mem)-1:+.4f}")
