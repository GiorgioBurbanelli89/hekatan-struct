"""
Wrapper que LANZA SAP2000 v24 en modo automatizado y ejecuta el mismo
analisis que plate_thin_sap2000_calcpad_case.py (caso Calcpad oficial:
6x4 m, t=0.10 m, E=35 GPa, nu=0.15, q=10 kN/m^2, mesh 6x4 Q4, SS).

Hace lo mismo que el original pero usa StartNewInstance + ApplicationStart,
de modo que no requiere tener SAP2000 abierto previamente.
"""
import os, sys, time
import numpy as np
import comtypes.client as cc

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# Datos del caso (igual al .cpd oficial)
a_m, b_m = 6.0, 4.0
t_m = 0.10
E_kNm2 = 35e6
nu = 0.15
q_kNm2 = 10.0
n_a, n_b = 6, 4
KN_TO_TONF = 1.0 / 9.80665
E_mod = E_kNm2 * KN_TO_TONF
q_load = q_kNm2 * KN_TO_TONF

D_flex = E_kNm2 * t_m**3 / (12.0 * (1 - nu**2))
w_navier_mm = 0.00772 * q_kNm2 * b_m**4 / D_flex * 1000.0

print("=" * 72)
print("  PLATE-THIN SAP2000 v24 API - Caso Calcpad oficial (headless)")
print("=" * 72)
print(f"  a x b = {a_m} x {b_m} m, t = {t_m} m, E = {E_kNm2/1e6:.0f} GPa, nu = {nu}")
print(f"  q = {q_kNm2} kN/m2, mesh = {n_a} x {n_b}")
print(f"  Navier (alpha=0.00772): w_max = {w_navier_mm:.3f} mm")
print("=" * 72)

# Lanzar SAP2000 programaticamente
print("\n  Iniciando SAP2000 v24...")
helper = cc.CreateObject("SAP2000v1.Helper")
try:
    import comtypes
    helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
except Exception:
    pass

# CreateObject = nueva instancia (no AttachToInstance)
SAP2000_EXE = r"C:\Program Files\Computers and Structures\SAP2000 24\SAP2000.exe"
try:
    SapObject = helper.CreateObject(SAP2000_EXE)
except Exception as e:
    print(f"  CreateObject(path) fallo: {e}")
    print("  Intentando CreateObjectProgID...")
    try:
        SapObject = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
    except Exception as e2:
        print(f"  CreateObjectProgID tambien fallo: {e2}")
        sys.exit(1)

# Arrancar en modo visible+pause=False (la GUI aparece pero no bloquea)
# Para realmente headless: usar False para visible (pero algunas versiones requieren GUI)
ret = SapObject.ApplicationStart(2, True, "")  # 2 = N (no unidades), True = visible
print(f"  [{'OK' if ret == 0 else 'FAIL'}] ApplicationStart  ret={ret}")
time.sleep(2)

SapModel = SapObject.SapModel
ret = SapModel.InitializeNewModel(12)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] InitializeNewModel(12)  ret={ret}")
ret = SapModel.File.NewBlank()
print(f"  [{'OK' if ret == 0 else 'FAIL'}] File.NewBlank          ret={ret}")
ret = SapModel.SetPresentUnits(12)

# Material + seccion Plate-Thin
ret = SapModel.PropMaterial.SetMaterial("PLATE_MAT", 2)
ret = SapModel.PropMaterial.SetMPIsotropic("PLATE_MAT", E_mod, nu, 0.0)
# ShellType=3 = Plate-Thin (Kirchhoff)
ret = SapModel.PropArea.SetShell_1("PLATE_THIN", 3, False, "PLATE_MAT", 0.0, t_m, t_m)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] SetShell_1(ShellType=3 PlateThin)  ret={ret}")

# Mallado 6x4
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

print(f"  Elementos creados: {len(elem_names)}")

# BC: Simply supported con conditions identicas al .s2k de Calcpad
# corner (x=0||a) AND (y=0||b): w + R1 + R2 todas restringidas
# edge x=0/a (interior): w + R1 (theta about X)
# edge y=0/b (interior): w + R2 (theta about Y)
NumberPoints, PointNames = 0, []
[NumberPoints, PointNames, ret] = SapModel.PointObj.GetNameList(NumberPoints, PointNames)
point_coords = {}
bc_count = 0
for pName in PointNames:
    [X, Y, Z, ret] = SapModel.PointObj.GetCoordCartesian(pName, 0.0, 0.0, 0.0)
    point_coords[pName] = (X, Y)
    on_x = (abs(X) < 1e-6 or abs(X - a_m) < 1e-6)
    on_y = (abs(Y) < 1e-6 or abs(Y - b_m) < 1e-6)
    if on_x and on_y:
        # corner: w + R1 + R2 (= identico al .s2k de Calcpad)
        ret = SapModel.PointObj.SetRestraint(pName, [False, False, True, True, True, False])
        bc_count += 1
    elif on_x:
        # edge x=const: w + R1 (theta about X = -dw/dy)
        ret = SapModel.PointObj.SetRestraint(pName, [False, False, True, True, False, False])
        bc_count += 1
    elif on_y:
        # edge y=const: w + R2 (theta about Y = +dw/dx)
        ret = SapModel.PointObj.SetRestraint(pName, [False, False, True, False, True, False])
        bc_count += 1

# fijar UX,UY en un punto cualquiera para estabilidad in-plane
ret = SapModel.PointObj.SetRestraint(PointNames[0], [True, True, True, True, True, False])
print(f"  Nodos restringidos: {bc_count} (BC SS exact match al s2k de Calcpad)")

# Carga
ret = SapModel.LoadPatterns.Add("Q", 8, 0, True)
NumberAreas, AreaNames = 0, []
[NumberAreas, AreaNames, ret] = SapModel.AreaObj.GetNameList(NumberAreas, AreaNames)
for aName in AreaNames:
    ret = SapModel.AreaObj.SetLoadUniform(aName, "Q", q_load, 10, False, "Global", 0)

# Run
ModelDirectory = r"C:\CSi_SAP2000_PlateThin_Calcpad_Run"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "plate_thin_calcpad_run.sdb")
ret = SapModel.File.Save(ModelPath)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] File.Save  ret={ret}")
t0 = time.perf_counter()
ret = SapModel.Analyze.RunAnalysis()
t_analysis = time.perf_counter() - t0
print(f"  [{'OK' if ret == 0 else 'FAIL'}] RunAnalysis  ret={ret}  ({t_analysis*1000:.0f} ms)")

# Resultados
ret = SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
ret = SapModel.Results.Setup.SetCaseSelectedForOutput("Q")

# Desplazamientos
w_dict = {}; rx_dict = {}; ry_dict = {}
for pName in PointNames:
    NumberResults = 0
    Obj = Elm = ACase = StepType = []
    StepNum = U1 = U2 = U3 = R1 = R2 = R3 = []
    [NumberResults, Obj, Elm, ACase, StepType, StepNum,
     U1, U2, U3, R1, R2, R3, ret] = SapModel.Results.JointDispl(
        pName, 0, NumberResults, Obj, Elm, ACase, StepType, StepNum,
        U1, U2, U3, R1, R2, R3)
    if NumberResults > 0:
        w_dict[pName]  = U3[0]
        rx_dict[pName] = R1[0]
        ry_dict[pName] = R2[0]

w_arr = np.array([w_dict[p] for p in PointNames])
w_max_mm = float(np.max(np.abs(w_arr))) * 1000.0
print(f"  w_max = {w_max_mm:.4f} mm")

# Momentos nodales (igual que Calcpad: promedio en nodos)
D_b = E_kNm2 * t_m**3 / (12.0 * (1.0 - nu**2)) * np.array([
    [1.0, nu, 0.0],
    [nu, 1.0, 0.0],
    [0.0, 0.0, 0.5*(1.0 - nu)],
])
def shape_dN(xi, eta):
    XI = np.array([-1.0, 1.0, 1.0, -1.0])
    ETA = np.array([-1.0, -1.0, 1.0, 1.0])
    dN = np.zeros((4, 2))
    dN[:, 0] = 0.25 * XI * (1.0 + ETA * eta)
    dN[:, 1] = 0.25 * ETA * (1.0 + XI * xi)
    return dN

nodal_Mxx = {p: 0.0 for p in PointNames}
nodal_Myy = {p: 0.0 for p in PointNames}
nodal_Mxy = {p: 0.0 for p in PointNames}
nodal_cnt = {p: 0   for p in PointNames}
node_xi  = [-1.0,  1.0,  1.0, -1.0]
node_eta = [-1.0, -1.0,  1.0,  1.0]

for aName in elem_names:
    NumberPts = 0; Points = []
    [NumberPts, Points, ret] = SapModel.AreaObj.GetPoints(aName, NumberPts, Points)
    pts = list(Points)
    nc = np.array([[point_coords[p][0], point_coords[p][1]] for p in pts])
    bx_n = np.array([-ry_dict[p] for p in pts])
    by_n = np.array([ rx_dict[p] for p in pts])
    for k in range(4):
        dN = shape_dN(node_xi[k], node_eta[k])
        J = dN.T @ nc
        detJ = J[0,0]*J[1,1] - J[0,1]*J[1,0]
        Jinv = np.array([[J[1,1], -J[0,1]], [-J[1,0], J[0,0]]]) / detJ
        dNdx = dN @ Jinv.T
        kxx = float(np.sum(dNdx[:, 0] * bx_n))
        kyy = float(np.sum(dNdx[:, 1] * by_n))
        kxy = float(np.sum(dNdx[:, 1] * bx_n) + np.sum(dNdx[:, 0] * by_n))
        M = D_b @ np.array([kxx, kyy, kxy])
        gn = pts[k]
        nodal_Mxx[gn] += M[0]
        nodal_Myy[gn] += M[1]
        nodal_Mxy[gn] += M[2]
        nodal_cnt[gn] += 1

for p in PointNames:
    if nodal_cnt[p] > 0:
        nodal_Mxx[p] /= nodal_cnt[p]
        nodal_Myy[p] /= nodal_cnt[p]
        nodal_Mxy[p] /= nodal_cnt[p]

# Identificar nodo central y esquina
j_centro = None
j_esquina = None
for p, (X, Y) in point_coords.items():
    if abs(X - a_m/2) < 1e-6 and abs(Y - b_m/2) < 1e-6:
        j_centro = p
    if abs(X) < 1e-6 and abs(Y) < 1e-6:
        j_esquina = p

print()
print("==" * 36)
print("  RESULTADOS SAP 2000 v24 — PLATE THIN — caso Calcpad")
print("==" * 36)
print(f"  w_max         = {w_max_mm:.4f} mm")
if j_centro:
    print(f"  Mx centro     = {nodal_Mxx[j_centro]:.4f} kN*m/m")
    print(f"  My centro     = {nodal_Myy[j_centro]:.4f} kN*m/m")
if j_esquina:
    print(f"  Mxy esquina   = {nodal_Mxy[j_esquina]:.4f} kN*m/m")
print(f"  |Mx|_max nodal  = {max(abs(nodal_Mxx[p]) for p in PointNames):.4f} kN*m/m")
print(f"  |My|_max nodal  = {max(abs(nodal_Myy[p]) for p in PointNames):.4f} kN*m/m")
print(f"  |Mxy|_max nodal = {max(abs(nodal_Mxy[p]) for p in PointNames):.4f} kN*m/m")
print(f"  Tiempo solve  = {t_analysis*1000:.0f} ms")
print("==" * 36)
print()
print("  REFERENCIA Calcpad-Lab (BFS Q4):  w=6.629 mm, Mx=6.275, My=12.744, Mxy=-8.378")
print("  REFERENCIA PDF Calcpad (SAP):     w=6.529 mm, Mx=6.22,  My=12.76,  Mxy=-7.25")
print()

# Cerrar SAP2000
try:
    SapObject.ApplicationExit(False)
    print("  SAP2000 cerrado.")
except Exception:
    pass
