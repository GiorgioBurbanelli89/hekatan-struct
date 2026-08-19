"""
Plate-Thin SAP2000 v24 - extrae M11/M22/M12 DIRECTAMENTE del API
(no reconstruido desde rotaciones nodales).

Usa SapModel.Results.AreaForceShell que devuelve los M en cada
joint de cada elemento area, exactamente como SAP los calcula
internamente (2x2 Gauss + extrapolacion a nodos).
"""
import os, sys, time
import numpy as np
import comtypes.client as cc

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

a_m, b_m = 6.0, 4.0
t_m = 0.10
E_kNm2 = 35e6
nu = 0.15
q_kNm2 = 10.0
n_a, n_b = 6, 4
KN_TO_TONF = 1.0 / 9.80665
TONF_TO_KN = 9.80665
E_mod = E_kNm2 * KN_TO_TONF
q_load = q_kNm2 * KN_TO_TONF

print("=" * 72)
print("  SAP2000 v24 — Plate Thin — M11/M22/M12 DIRECTO via AreaForceShell")
print("=" * 72)

helper = cc.CreateObject("SAP2000v1.Helper")
try:
    import comtypes
    helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
except Exception:
    pass

SAP2000_EXE = r"C:\Program Files\Computers and Structures\SAP2000 24\SAP2000.exe"
SapObject = helper.CreateObject(SAP2000_EXE)
ret = SapObject.ApplicationStart(2, True, "")
print(f"  ApplicationStart ret={ret}")
time.sleep(2)

SapModel = SapObject.SapModel
SapModel.InitializeNewModel(12)
SapModel.File.NewBlank()
SapModel.SetPresentUnits(12)

SapModel.PropMaterial.SetMaterial("PLATE_MAT", 2)
SapModel.PropMaterial.SetMPIsotropic("PLATE_MAT", E_mod, nu, 0.0)
SapModel.PropArea.SetShell_1("PLATE_THIN", 3, False, "PLATE_MAT", 0.0, t_m, t_m)

dx, dy = a_m / n_a, b_m / n_b
elem_names = []
for jj in range(n_b):
    for ii in range(n_a):
        X = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx]
        Y = [jj*dy, jj*dy, (jj+1)*dy, (jj+1)*dy]
        Z = [0.0]*4
        res = SapModel.AreaObj.AddByCoord(4, X, Y, Z, "", "PLATE_THIN", "", "Global")
        for item in res:
            if isinstance(item, str) and item.strip():
                elem_names.append(item)

if not elem_names:
    NA, AN = 0, []
    [NA, AN, _] = SapModel.AreaObj.GetNameList(NA, AN)
    elem_names = list(AN)

NumberPoints, PointNames = 0, []
[NumberPoints, PointNames, ret] = SapModel.PointObj.GetNameList(NumberPoints, PointNames)
point_coords = {}
for pName in PointNames:
    [X, Y, Z, ret] = SapModel.PointObj.GetCoordCartesian(pName, 0.0, 0.0, 0.0)
    point_coords[pName] = (X, Y)
    on_x = (abs(X) < 1e-6 or abs(X - a_m) < 1e-6)
    on_y = (abs(Y) < 1e-6 or abs(Y - b_m) < 1e-6)
    if on_x and on_y:
        SapModel.PointObj.SetRestraint(pName, [False, False, True, True, True, False])
    elif on_x:
        SapModel.PointObj.SetRestraint(pName, [False, False, True, True, False, False])
    elif on_y:
        SapModel.PointObj.SetRestraint(pName, [False, False, True, False, True, False])

SapModel.PointObj.SetRestraint(PointNames[0], [True, True, True, True, True, False])

SapModel.LoadPatterns.Add("Q", 8, 0, True)
NumberAreas, AreaNames = 0, []
[NumberAreas, AreaNames, ret] = SapModel.AreaObj.GetNameList(NumberAreas, AreaNames)
for aName in AreaNames:
    SapModel.AreaObj.SetLoadUniform(aName, "Q", q_load, 10, False, "Global", 0)

ModelDirectory = r"C:\CSi_SAP2000_PlateThin_Direct"
os.makedirs(ModelDirectory, exist_ok=True)
SapModel.File.Save(os.path.join(ModelDirectory, "plate_thin_direct.sdb"))
t0 = time.perf_counter()
SapModel.Analyze.RunAnalysis()
t_analysis = time.perf_counter() - t0
print(f"  RunAnalysis  ({t_analysis*1000:.0f} ms)")

SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("Q")

# w
w_dict = {}
for pName in PointNames:
    NumberResults = 0
    Obj = Elm = ACase = StepType = []
    StepNum = U1 = U2 = U3 = R1 = R2 = R3 = []
    [NumberResults, Obj, Elm, ACase, StepType, StepNum,
     U1, U2, U3, R1, R2, R3, ret] = SapModel.Results.JointDispl(
        pName, 0, NumberResults, Obj, Elm, ACase, StepType, StepNum,
        U1, U2, U3, R1, R2, R3)
    if NumberResults > 0:
        w_dict[pName] = U3[0]

w_max_mm = max(abs(w) for w in w_dict.values()) * 1000.0

# M11/M22/M12 directos via AreaForceShell (en cada joint de cada elemento)
# La firma exacta varia entre versiones. Tries v2 then fallback v1.
# Devuelve: NumberResults, Obj, Elm, PointElm, LoadCase, StepType, StepNum,
#           F11, F22, F12, FMax, FMin, FAngle, FVM, M11, M22, M12, MMax, MMin, MAngle, V13, V23, VMax, VAngle

# Acumular Mxy por nodo
nodal_M11 = {p: [] for p in PointNames}
nodal_M22 = {p: [] for p in PointNames}
nodal_M12 = {p: [] for p in PointNames}

for aName in elem_names:
    try:
        NumberResults = 0
        Obj = Elm = PointElm = LoadCase = StepType = []
        StepNum = []
        F11 = F22 = F12 = FMax = FMin = FAngle = FVM = []
        M11 = M22 = M12 = MMax = MMin = MAngle = []
        V13 = V23 = VMax = VAngle = []
        [NumberResults, Obj, Elm, PointElm, LoadCase, StepType, StepNum,
         F11, F22, F12, FMax, FMin, FAngle, FVM,
         M11, M22, M12, MMax, MMin, MAngle,
         V13, V23, VMax, VAngle, ret] = SapModel.Results.AreaForceShell(
             aName, 0, NumberResults, Obj, Elm, PointElm, LoadCase, StepType, StepNum,
             F11, F22, F12, FMax, FMin, FAngle, FVM,
             M11, M22, M12, MMax, MMin, MAngle,
             V13, V23, VMax, VAngle)
        if ret == 0 and NumberResults > 0:
            # SAP devuelve M en tonf*m/m. Convertir a kN*m/m.
            for k in range(NumberResults):
                p = PointElm[k]
                if p in nodal_M11:
                    nodal_M11[p].append(M11[k] * TONF_TO_KN)
                    nodal_M22[p].append(M22[k] * TONF_TO_KN)
                    nodal_M12[p].append(M12[k] * TONF_TO_KN)
    except Exception as e:
        print(f"  AreaForceShell fallo para {aName}: {e}")

# Promediar por nodo
def avg(xs):
    if len(xs) == 0:
        return float('nan')
    return sum(xs) / len(xs)

Mxx_avg = {p: avg(nodal_M11[p]) for p in PointNames}
Myy_avg = {p: avg(nodal_M22[p]) for p in PointNames}
Mxy_avg = {p: avg(nodal_M12[p]) for p in PointNames}

# Centro y esquina
j_centro = None; j_esquina = None
for p, (X, Y) in point_coords.items():
    if abs(X - a_m/2) < 1e-6 and abs(Y - b_m/2) < 1e-6:
        j_centro = p
    if abs(X) < 1e-6 and abs(Y) < 1e-6:
        j_esquina = p

print()
print("==" * 36)
print("  SAP 2000 v24 — Plate Thin — M directo (AreaForceShell)")
print("==" * 36)
print(f"  w_max         = {w_max_mm:.4f} mm  (PDF Calcpad: 6.529)")
if j_centro:
    print(f"  Mx centro     = {Mxx_avg[j_centro]:.4f} kN*m/m  (PDF: 6.22)")
    print(f"  My centro     = {Myy_avg[j_centro]:.4f} kN*m/m  (PDF: 12.76)")
if j_esquina:
    print(f"  Mxy esquina   = {Mxy_avg[j_esquina]:.4f} kN*m/m  (PDF: -7.25)")
print(f"  |Mx|_max nodal  = {max(abs(Mxx_avg[p]) for p in PointNames):.4f} kN*m/m")
print(f"  |My|_max nodal  = {max(abs(Myy_avg[p]) for p in PointNames):.4f} kN*m/m")
print(f"  |Mxy|_max nodal = {max(abs(Mxy_avg[p]) for p in PointNames):.4f} kN*m/m")
print(f"  Tiempo SAP    = {t_analysis*1000:.0f} ms")
print("==" * 36)

try:
    SapObject.ApplicationExit(False)
    print("  SAP2000 cerrado.")
except Exception:
    pass
