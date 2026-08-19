"""Layered Plate — ETABS API (Python) — FE04 [0/90/90/0] iso × 0.05."""
import os
import comtypes.client as cc

APIDLLPath     = r"C:\Program Files\Computers and Structures\ETABS 18\ETABSv1.dll"
ModelDirectory = r"C:\CSi_ETABS_API_Layered"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "plate_layered.edb")

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

helper      = cc.CreateObject("ETABSv1.Helper")
ETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
ETABSObject.ApplicationStart()
SapModel    = ETABSObject.SapModel
SapModel.InitializeNewModel()
SapModel.File.NewBlank()
SapModel.SetPresentUnits(6)

SapModel.PropMaterial.SetMaterial("LAYER_MAT", 2)
SapModel.PropMaterial.SetMPIsotropic("LAYER_MAT", E_m, nu_m, 0)

# Sección Slab — eShellType.ShellLayered (suele ser 4 o 6, depende versión ETABS)
SapModel.PropArea.SetSlab("PLATE_LAYERED", 1, 4, "LAYER_MAT", tTotal)

# Definir capas con SetSlabLayer
SapModel.PropArea.SetSlabLayer("PLATE_LAYERED", nLayers,
    [f"L{k+1}" for k in range(nLayers)],
    layerDistance,
    [layerThick]*nLayers,
    [3]*nLayers,
    ["LAYER_MAT"]*nLayers,
    layerAngles,
    [1]*nLayers, [1]*nLayers, [1]*nLayers)

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

w_max = 0.0
for p in PointNames:
    NumRes = 0
    args = [NumRes] + [[] for _ in range(11)]
    [NumRes, _, _, _, _, _, U1, U2, U3, R1, R2, R3, _] = SapModel.Results.JointDispl(p, 0, *args)
    if NumRes > 0 and abs(U3[0]) > w_max:
        w_max = abs(U3[0])

ETABSObject.ApplicationExit(False)

D_ref    = E_m * tTotal**3 / (12*(1-nu_m**2))
w_navier = 0.00406 * q * W_m**4 / D_ref

print("\n" + "═"*60)
print("  LAYERED [0/90/90/0] — ETABS vs Navier isotrópica")
print("═"*60)
print(f"  ETABS API       w_max = {w_max:.6e}")
print(f"  Navier iso      w_max = {w_navier:.6e}")
print(f"  Diff = {(w_max/w_navier-1)*100:+.2f}%")
print(f"\nETABSResult_lay  = {w_max:.6e}")
print(f"IndResult_lay    = {w_navier:.6e}")
print(f"PercentDiff_lay  = {(w_max/w_navier)-1:+.4f}")
