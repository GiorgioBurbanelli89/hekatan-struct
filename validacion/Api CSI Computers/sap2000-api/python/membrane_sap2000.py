"""
Membrane Q4 Cantilever Wall — SAP2000 API (Python 3.8+)
Reproduce FE01b: muro 5x3x0.2, P=100 lateral en top, empotrado base.
Esperado: HekatanLab u_max=5.7417e-2.
"""
import os
import comtypes.client as cc

APIDLLPath     = r"C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll"
ModelDirectory = r"C:\CSi_SAP2000_API_Membrane"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "membrane_wall.sdb")

# Inputs FE01b
W, H, t  = 5, 3, 0.2
P        = 100
E, nu    = 25000, 0.2
nx, ny   = 6, 4

helper    = cc.CreateObject("SAP2000v1.Helper")
SapObject = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
SapObject.ApplicationStart()
SapModel  = SapObject.SapModel
SapModel.InitializeNewModel(6)
SapModel.File.NewBlank()

SapModel.PropMaterial.SetMaterial("WALL_MAT", 2)
SapModel.PropMaterial.SetMPIsotropic("WALL_MAT", E, nu, 0)
SapModel.PropArea.SetShell_1("MEMBRANE", 4, False, "WALL_MAT", 0, t, t)

# Malla en plano XZ (Y=0)
dx, dz = W/nx, H/ny
for jj in range(ny):
    for ii in range(nx):
        X = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx]
        Y = [0]*4
        Z = [jj*dz, jj*dz, (jj+1)*dz, (jj+1)*dz]
        SapModel.AreaObj.AddByCoord(4, X, Y, Z, "", "MEMBRANE", "", "Global")

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

u_max_sap = 0.0
for p in PointNames:
    [X, Y, Z, _] = SapModel.PointObj.GetCoordCartesian(p, 0, 0, 0)
    if abs(Z - H) < 1e-6:
        NumRes = 0
        args = [NumRes] + [[] for _ in range(11)]
        [NumRes, _, _, _, _, _, U1, U2, U3, R1, R2, R3, _] = \
            SapModel.Results.JointDispl(p, 0, *args)
        if NumRes > 0 and abs(U1[0]) > u_max_sap:
            u_max_sap = abs(U1[0])

SapObject.ApplicationExit(False)

I_w        = t * W**3 / 12
delta_beam = P * H**3 / (3*E*I_w)
u_heklab   = 5.7417e-2

print("\n" + "═"*60)
print("  MEMBRANE Q4 Cantilever — SAP2000 vs HekatanLab vs Viga")
print("═"*60)
print(f"  {W}x{H} m, t={t}, P={P}, malla {nx}x{ny}, ShellType=4")
print(f"  {'-'*58}")
print(f"  {'SAP2000 API':<18}{u_max_sap:<20.6e}{(u_max_sap/u_heklab - 1)*100:+.2f}%")
print(f"  {'HekatanLab Web':<18}{u_heklab:<20.6e}---")
print(f"  {'Viga Euler-B':<18}{delta_beam:<20.6e}{(delta_beam/u_heklab - 1)*100:+.2f}%")
print(f"\nSapResult_mem   = {u_max_sap:.6e}")
print(f"IndResult_mem   = {delta_beam:.6e} (viga)")
print(f"PercentDiff_mem = {(u_max_sap/delta_beam)-1:+.4f}")
