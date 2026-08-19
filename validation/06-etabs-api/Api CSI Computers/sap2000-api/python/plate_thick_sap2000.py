"""
Plate Thick — SAP2000 API verification (Python 3.8+)
Reproduce FE03: SS Mindlin t=0.25, q=1, malla 4x4.
Esperado: HekatanLab w_max=1.543172e-4, Reissner w_total=1.280794e-4.
"""
import os
import comtypes.client as cc

APIDLLPath     = r"C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll"
ModelDirectory = r"C:\CSi_SAP2000_API_PlateThick"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "plate_thick.sdb")

# Inputs FE03
W_m, H_m, t_m = 1.0, 1.0, 0.25
E_m, nu_m, q  = 30000, 0.2, 1.0
nx, ny        = 4, 4

helper    = cc.CreateObject("SAP2000v1.Helper")
SapObject = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
SapObject.ApplicationStart()
SapModel  = SapObject.SapModel
SapModel.InitializeNewModel(6)
SapModel.File.NewBlank()

# Material
SapModel.PropMaterial.SetMaterial("PLATE_MAT", 2)
SapModel.PropMaterial.SetMPIsotropic("PLATE_MAT", E_m, nu_m, 0)

# Sección Plate-Thick (ShellType=3)
SapModel.PropArea.SetShell_1("PLATE_THICK", 3, False, "PLATE_MAT", 0, t_m, t_m)

# Malla
dx, dy = W_m/nx, H_m/ny
for jj in range(ny):
    for ii in range(nx):
        X = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx]
        Y = [jj*dy, jj*dy, (jj+1)*dy, (jj+1)*dy]
        Z = [0]*4
        SapModel.AreaObj.AddByCoord(4, X, Y, Z, "", "PLATE_THICK", "", "Global")

# BCs SS
NumberPoints, PointNames = 0, []
[NumberPoints, PointNames, _] = SapModel.PointObj.GetNameList(NumberPoints, PointNames)
for p in PointNames:
    [X, Y, Z, _] = SapModel.PointObj.GetCoordCartesian(p, 0, 0, 0)
    if abs(X)<1e-6 or abs(X-W_m)<1e-6 or abs(Y)<1e-6 or abs(Y-H_m)<1e-6:
        SapModel.PointObj.SetRestraint(p, [False, False, True, False, False, False])

# Carga
SapModel.LoadPatterns.Add("Q", 8, 0, True)
NumberAreas, AreaNames = 0, []
[NumberAreas, AreaNames, _] = SapModel.AreaObj.GetNameList(NumberAreas, AreaNames)
for a in AreaNames:
    SapModel.AreaObj.SetLoadUniform(a, "Q", -q, 10, True, "Global")

# Análisis
SapModel.File.Save(ModelPath)
SapModel.Analyze.RunAnalysis()

# Resultados
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("Q")

w_max_sap = 0.0
for p in PointNames:
    NumRes = 0
    args = [NumRes] + [[] for _ in range(11)]
    [NumRes, _, _, _, _, _, U1, U2, U3, R1, R2, R3, _] = \
        SapModel.Results.JointDispl(p, 0, *args)
    if NumRes > 0 and abs(U3[0]) > w_max_sap:
        w_max_sap = abs(U3[0])

SapObject.ApplicationExit(False)

# Comparación
D_ref   = E_m * t_m**3 / (12*(1 - nu_m**2))
G_m     = E_m / (2*(1+nu_m))
w_bend  = 0.00406 * q * W_m**4 / D_ref
w_shear = 0.0737 * q * W_m**2 / (5/6 * G_m * t_m)
w_reiss = w_bend + w_shear
w_heklab = 1.543172e-4

print("\n" + "═"*60)
print("  PLATE THICK (ShellType=3) — SAP2000 vs HekatanLab vs Reissner")
print("═"*60)
print(f"  Geometría: {W_m}x{H_m}, t={t_m}, q={q}, malla {nx}x{ny}")
print(f"  {'-'*58}")
print(f"  {'SAP2000 API':<18}{w_max_sap:<20.6e}{(w_max_sap/w_heklab - 1)*100:+.2f}%")
print(f"  {'HekatanLab Web':<18}{w_heklab:<20.6e}---")
print(f"  {'Reissner teórica':<18}{w_reiss:<20.6e}{(w_reiss/w_heklab - 1)*100:+.2f}%")
print(f"\nSapResult_thick   = {w_max_sap:.6e}")
print(f"IndResult_thick   = {w_reiss:.6e} (Reissner)")
print(f"PercentDiff_thick = {(w_max_sap/w_reiss)-1:+.4f}")
