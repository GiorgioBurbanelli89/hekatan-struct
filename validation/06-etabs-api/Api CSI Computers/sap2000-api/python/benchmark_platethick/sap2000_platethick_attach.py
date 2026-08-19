"""
Plate-Thick SAP 2000 v24 — AttachToInstance (NO cierra SAP).

Conecta a SAP 2000 YA ABIERTO. Configura un modelo nuevo, corre análisis,
extrae M directos. NO cierra SAP al terminar — para iteración rápida.

Caso: a=6, b=4, t=0.40 m (placa gruesa, t/b=1/10), E=35 GPa, ν=0.15, q=10
ShellType=4 → Plate-Thick (NO Shell-Thick).

USO:
  1. Abrir SAP 2000 v24 manualmente (doble click)
  2. Ejecutar:  python sap2000_platethick_attach.py
  3. SAP queda abierto al terminar.
"""
import os, sys, time
import numpy as np
import comtypes.client as cc

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# ── PARÁMETROS DEL CASO ──────────────────────────────────────────────────
a_m, b_m = 6.0, 4.0
t_m = 0.40                # 40 cm — placa gruesa
E_kNm2 = 35e6
nu = 0.15
q_kNm2 = 10.0
n_a, n_b = 6, 4
KN_TO_TONF = 1.0 / 9.80665
TONF_TO_KN = 9.80665
E_mod = E_kNm2 * KN_TO_TONF
q_load = q_kNm2 * KN_TO_TONF

print("=" * 72)
print("  SAP 2000 v24 — Plate-Thick (DSE Wilson) — t = 40 cm")
print("=" * 72)
print(f"  Caso     : {a_m} × {b_m} × {t_m} m  (t/b = {t_m/b_m:.3f} = 1/{b_m/t_m:.0f})")
print(f"  Material : E = {E_kNm2/1e6:.0f} GPa, ν = {nu}")
print(f"  Carga    : q = {q_kNm2} kN/m²")
print(f"  Malla    : {n_a} × {n_b}")
print(f"  ShellType: 4 (Plate-Thick — NO Shell-Thick)")
print("=" * 72)

# ── AttachToInstance — conecta al SAP ya abierto ─────────────────────────
print("\n  Conectando a SAP 2000 v24 abierto (GetActiveObject)...")
SapObject = None
# Método 1: GetActiveObject (estándar Windows COM)
try:
    SapObject = cc.GetActiveObject("CSI.SAP2000.API.SapObject")
    print("  [OK] Conectado vía cc.GetActiveObject")
except Exception as e:
    print(f"  [..] GetActiveObject falló: {e}")
    # Método 2: helper.GetObject (SAP-específico)
    try:
        helper = cc.CreateObject("SAP2000v1.Helper")
        import comtypes
        try:
            helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
        except Exception:
            pass
        SapObject = helper.GetObject("CSI.SAP2000.API.SapObject")
        if SapObject is not None:
            print("  [OK] Conectado vía helper.GetObject")
    except Exception as e2:
        print(f"  [..] helper.GetObject también falló: {e2}")

if SapObject is None:
    print(f"  [..] Ninguna instancia conectable encontrada — lanzo SAP por API")
    print(f"       (la instancia API queda en ROT para los próximos scripts)")
    SAP2000_EXE = r"C:\Program Files\Computers and Structures\SAP2000 24\SAP2000.exe"
    helper = cc.CreateObject("SAP2000v1.Helper")
    try:
        import comtypes
        helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
    except Exception:
        pass
    SapObject = helper.CreateObject(SAP2000_EXE)
    ret_start = SapObject.ApplicationStart(2, True, "")
    print(f"  [{'OK' if ret_start == 0 else 'FAIL'}] ApplicationStart ret={ret_start}")
    time.sleep(2)

SapModel = SapObject.SapModel

# Crear modelo nuevo dentro de la instancia abierta
ret = SapModel.InitializeNewModel(12)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] InitializeNewModel(12) ret={ret}")
ret = SapModel.File.NewBlank()
print(f"  [{'OK' if ret == 0 else 'FAIL'}] File.NewBlank          ret={ret}")
SapModel.SetPresentUnits(12)

# Material + sección Plate-Thick
SapModel.PropMaterial.SetMaterial("PLATE_MAT", 2)
SapModel.PropMaterial.SetMPIsotropic("PLATE_MAT", E_mod, nu, 0.0)

# ShellType: 1=Shell-Thin, 2=Shell-Thick, 3=Plate-Thin, 4=Plate-Thick, 5=Membrane
ret = SapModel.PropArea.SetShell_1("PLATE_THICK", 4, False, "PLATE_MAT", 0.0, t_m, t_m)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] SetShell_1(ShellType=4 PLATE-THICK)  ret={ret}")

# Malla 6×4
dx, dy = a_m / n_a, b_m / n_b
elem_names = []
for jj in range(n_b):
    for ii in range(n_a):
        X = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx]
        Y = [jj*dy, jj*dy, (jj+1)*dy, (jj+1)*dy]
        Z = [0.0]*4
        res = SapModel.AreaObj.AddByCoord(4, X, Y, Z, "", "PLATE_THICK", "", "Global")
        for item in res:
            if isinstance(item, str) and item.strip():
                elem_names.append(item)

if not elem_names:
    NA, AN = 0, []
    [NA, AN, _] = SapModel.AreaObj.GetNameList(NA, AN)
    elem_names = list(AN)
print(f"  Elementos creados: {len(elem_names)}")

# BC hard SS (igual al .s2k oficial Plate-Thin)
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
        SapModel.PointObj.SetRestraint(pName, [False, False, True, True, True, False])
        bc_count += 1
    elif on_x:
        SapModel.PointObj.SetRestraint(pName, [False, False, True, True, False, False])
        bc_count += 1
    elif on_y:
        SapModel.PointObj.SetRestraint(pName, [False, False, True, False, True, False])
        bc_count += 1

# Pin in-plane en un punto para estabilidad
SapModel.PointObj.SetRestraint(PointNames[0], [True, True, True, True, True, False])
print(f"  BC SS aplicado en {bc_count} nodos")

# Carga
SapModel.LoadPatterns.Add("Q", 8, 0, True)
NumberAreas, AreaNames = 0, []
[NumberAreas, AreaNames, ret] = SapModel.AreaObj.GetNameList(NumberAreas, AreaNames)
for aName in AreaNames:
    SapModel.AreaObj.SetLoadUniform(aName, "Q", q_load, 10, False, "Global", 0)

# Save + Run
ModelDirectory = r"C:\CSi_SAP2000_PlateThick_t40"
os.makedirs(ModelDirectory, exist_ok=True)
SapModel.File.Save(os.path.join(ModelDirectory, "plate_thick_t40.sdb"))
t0 = time.perf_counter()
SapModel.Analyze.RunAnalysis()
t_analysis = time.perf_counter() - t0
print(f"  RunAnalysis  ({t_analysis*1000:.0f} ms)")

SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("Q")

# w por nodo
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

# M directos via AreaForceShell
nodal_M11 = {p: [] for p in PointNames}
nodal_M22 = {p: [] for p in PointNames}
nodal_M12 = {p: [] for p in PointNames}

for aName in elem_names:
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
        for k in range(NumberResults):
            p = PointElm[k]
            if p in nodal_M11:
                nodal_M11[p].append(M11[k] * TONF_TO_KN)
                nodal_M22[p].append(M22[k] * TONF_TO_KN)
                nodal_M12[p].append(M12[k] * TONF_TO_KN)

def avg(xs):
    return sum(xs) / len(xs) if xs else float('nan')

Mxx_avg = {p: avg(nodal_M11[p]) for p in PointNames}
Myy_avg = {p: avg(nodal_M22[p]) for p in PointNames}
Mxy_avg = {p: avg(nodal_M12[p]) for p in PointNames}

j_centro = None; j_esquina = None
for p, (X, Y) in point_coords.items():
    if abs(X - a_m/2) < 1e-6 and abs(Y - b_m/2) < 1e-6:
        j_centro = p
    if abs(X) < 1e-6 and abs(Y) < 1e-6:
        j_esquina = p

print()
print("=" * 72)
print(f"  SAP 2000 v24 — Plate-Thick (DSE Wilson) — t = {t_m*1000:.0f} mm")
print("=" * 72)
print(f"  w_max         = {w_max_mm:.4f} mm")
if j_centro:
    print(f"  Mx centro     = {Mxx_avg[j_centro]:.4f} kN*m/m")
    print(f"  My centro     = {Myy_avg[j_centro]:.4f} kN*m/m")
if j_esquina:
    print(f"  Mxy esquina   = {Mxy_avg[j_esquina]:.4f} kN*m/m")
print(f"  |Mx|_max  = {max(abs(Mxx_avg[p]) for p in PointNames):.4f} kN*m/m")
print(f"  |My|_max  = {max(abs(Myy_avg[p]) for p in PointNames):.4f} kN*m/m")
print(f"  |Mxy|_max = {max(abs(Mxy_avg[p]) for p in PointNames):.4f} kN*m/m")
print(f"  Tiempo solve  = {t_analysis*1000:.0f} ms")
print("=" * 72)
print()
print(f"  REFERENCIA t=0.10 (thin):")
print(f"    Plate-Thin DKQ  : w=6.5286, Mx=6.2249, My=12.7592, Mxy=-7.2541")
print(f"    Plate-Thick DSE : w=6.4567, Mx=6.4435, My=12.4305, Mxy=-7.7089")
print()
print(f"  SAP 2000 queda abierto. Modelo guardado en:")
print(f"    {ModelDirectory}\\plate_thick_t40.sdb")
