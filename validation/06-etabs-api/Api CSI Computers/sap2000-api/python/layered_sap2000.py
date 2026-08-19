"""
Layered Plate [0/90/90/0] — SAP2000 API (Python 3.8+)
FE04: 4 capas iso × 0.05 m = 0.2 m total, q=1 SS 1x1, malla 4x4.
"""
import os
import comtypes.client as cc

APIDLLPath     = r"C:\Program Files\Computers and Structures\SAP2000 21\SAP2000v1.dll"
ModelDirectory = r"C:\CSi_SAP2000_API_Layered"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "plate_layered.sdb")

W_m, H_m       = 1.0, 1.0
E_m, nu_m, q   = 30000, 0.2, 1.0
nx, ny         = 4, 4
nLayers        = 4
layerThick     = 0.05
layerAngles    = [0, 90, 90, 0]
tTotal         = nLayers * layerThick
layerDistance  = []
zEdge          = -tTotal/2
for k in range(nLayers):
    layerDistance.append(zEdge + layerThick/2)
    zEdge += layerThick

helper    = cc.CreateObject("SAP2000v1.Helper")
SapObject = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
SapObject.ApplicationStart()
SapModel  = SapObject.SapModel
SapModel.InitializeNewModel(6)
SapModel.File.NewBlank()

SapModel.PropMaterial.SetMaterial("LAYER_MAT", 2)
SapModel.PropMaterial.SetMPIsotropic("LAYER_MAT", E_m, nu_m, 0)

# Crear sección, luego sobrescribir con SetShellLayer_1
SapModel.PropArea.SetShell_1("PLATE_LAYERED", 1, False, "LAYER_MAT", 0, tTotal, tTotal)

# Definir capas
LayerName    = [f"L{k+1}" for k in range(nLayers)]
NumIntegPts  = [3] * nLayers
MatPropArr   = ["LAYER_MAT"] * nLayers
MatAngleArr  = layerAngles
MyType       = [1] * nLayers       # 1=full shell
ThickArr     = [layerThick] * nLayers
Dist         = layerDistance
S11Type = S22Type = S12Type = [1] * nLayers   # linear isotropic

SapModel.PropArea.SetShellLayer_1("PLATE_LAYERED", nLayers, LayerName,
    Dist, ThickArr, MyType, NumIntegPts, MatPropArr, MatAngleArr,
    S11Type, S22Type, S12Type)

# Malla
dx, dy = W_m/nx, H_m/ny
for jj in range(ny):
    for ii in range(nx):
        X = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx]
        Y = [jj*dy, jj*dy, (jj+1)*dy, (jj+1)*dy]
        SapModel.AreaObj.AddByCoord(4, X, Y, [0]*4, "", "PLATE_LAYERED", "", "Global")

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

w_max_sap = 0.0
for p in PointNames:
    NumRes = 0
    args = [NumRes] + [[] for _ in range(11)]
    [NumRes, _, _, _, _, _, U1, U2, U3, R1, R2, R3, _] = \
        SapModel.Results.JointDispl(p, 0, *args)
    if NumRes > 0 and abs(U3[0]) > w_max_sap:
        w_max_sap = abs(U3[0])

SapObject.ApplicationExit(False)

D_ref    = E_m * tTotal**3 / (12*(1-nu_m**2))
w_navier = 0.00406 * q * W_m**4 / D_ref

print("\n" + "═"*60)
print("  LAYERED [0/90/90/0] — SAP2000 vs Navier isotrópica")
print("═"*60)
print(f"  {W_m}x{H_m}, t_total={tTotal} (4 capas × {layerThick})")
print(f"  Ángulos: {layerAngles}")
print(f"  SAP2000 API       w_max = {w_max_sap:.6e}")
print(f"  Navier isotrópica w_max = {w_navier:.6e}")
print(f"  Diff = {(w_max_sap/w_navier-1)*100:+.2f}%")
print(f"\nSapResult_lay   = {w_max_sap:.6e}")
print(f"IndResult_lay   = {w_navier:.6e}")
print(f"PercentDiff_lay = {(w_max_sap/w_navier)-1:+.4f}")
