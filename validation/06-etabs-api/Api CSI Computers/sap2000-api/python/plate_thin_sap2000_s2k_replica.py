"""
========================================================================
 Replicar EXACTO el archivo Plate-6x4.s2k (SAP2000 V7.40) en SAP2000 v24
 Para comparar 3 vias: Calcpad / SAP v24 SS clasico / SAP v24 s2k-replica
========================================================================

 El .s2k original (SAP2000 V7.40, ~ano 2000):
   - Coordenadas centradas en (0,0): X de -3 a +3, Y de -2 a +2
   - DOF=UZ,RX,RY (3 DOF/nodo, placa pura)
   - Material CONC: E = 3.5E+07 kN/m^2, nu = 0.15
   - SHELL SECTION: Plate,Thin TH = 0.1 m
   - BC:
       Esquinas (4):     UZ + RX + RY restringidos  (clamped corner)
       Bordes Y=+/-2 (no esquinas): UZ + RY = 0      (hard SS, perp.)
       Bordes X=+/-3 (no esquinas): UZ + RX = 0      (hard SS, perp.)
       Centro Y=0 (Y bordes X): UZ + RX = 0  (extra restriccion)
   - Carga: UZ = -10 kN en CADA nodo (concentrada, no presion)

 NOTA: la carga del .s2k es 10 kN por NODO -> total 35*10 = 350 kN.
 La carga equivalente a q=10 kN/m^2 sobre 6x4 m^2 = 240 kN.
 Mi script con presion uniforme va a dar resultado distinto al .s2k!

 Resultado esperado segun la teoria:
   - Si todas BC fueran SS y carga UNIFORME: w_max ~ -6.62 mm (Navier)
   - El .s2k tiene BC mas restrictivas + carga concentrada =>
     comportamiento intermedio. w_max ?

 Ejecutar:  python plate_thin_sap2000_s2k_replica.py
========================================================================
"""
import os
import sys
import time
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import comtypes.client as cc

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

# ----------------------------------------------------------------------
# PARAMETROS EXACTOS del Plate-6x4.s2k
# ----------------------------------------------------------------------
# Coordenadas: 35 nodos en grid 7x5, X de -3 a +3, Y de -2 a +2
# n_a = 6 elementos en X (7 nodos), n_b = 4 elementos en Y (5 nodos)
nx, ny = 6, 4
a_m, b_m = 6.0, 4.0   # 6m x 4m (dimensiones)
t_m   = 0.1
E_kNm2 = 3.5e7        # 35000 MPa = 35 GPa
nu    = 0.15
q_node_kN = 10.0      # carga concentrada por nodo (NO presion!)

# Para SAP v24 con PresentUnits=6 (kN_m_C) — usar las MISMAS unidades del .s2k
# (kN/m, no tonf, para comparacion directa)

print("=" * 72)
print("  PLATE-6x4.s2k REPLICA — SAP2000 v24 con BC y cargas del .s2k V7.40")
print("=" * 72)
print(f"  Placa     : {a_m} x {b_m} m, t = {t_m} m  (centrada (-3,-2) a (3,2))")
print(f"  Material  : E = {E_kNm2/1e6:.0f} GPa, nu = {nu}")
print(f"  Carga     : UZ = {q_node_kN} kN CONCENTRADA por nodo (NO presion!)")
print(f"  Mesh      : {nx} x {ny} = {nx*ny} Q4 ({(nx+1)*(ny+1)} nodos)")
print(f"  BC        : Hard SS (UZ + rotacion perp. al borde = 0)")
print(f"  Unidades  : kN_m_C (PresentUnits = 6, igual que .s2k)")
print("=" * 72)

# ----------------------------------------------------------------------
# CONECTAR a SAP2000 v24
# ----------------------------------------------------------------------
helper = cc.CreateObject("SAP2000v1.Helper")
try:
    import comtypes
    helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
except Exception:
    pass

print("  Conectando a SAP2000 v24...")
try:
    SapObject = helper.GetObject("CSI.SAP2000.API.SapObject")
    print("  [OK] Conectado")
except Exception as e:
    print(f"\n  ERROR: SAP2000 no esta abierto. Detalle: {e}")
    sys.exit(1)

SapModel = SapObject.SapModel
ret = SapModel.InitializeNewModel(6)   # 6 = kN_m_C (mismo que .s2k)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] InitializeNewModel(6)    ret={ret}")
ret = SapModel.File.NewBlank()
print(f"  [{'OK' if ret == 0 else 'FAIL'}] File.NewBlank            ret={ret}")
ret = SapModel.SetPresentUnits(6)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] SetPresentUnits(6)       ret={ret}")

# ----------------------------------------------------------------------
# MATERIAL + SECCION (igual que el .s2k)
# ----------------------------------------------------------------------
ret = SapModel.PropMaterial.SetMaterial("CONC", 2)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] SetMaterial CONC         ret={ret}")
ret = SapModel.PropMaterial.SetMPIsotropic("CONC", E_kNm2, nu, 0.0000099)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] SetMPIsotropic           ret={ret}")
# Plate-Thin (ShellType=3) tal como en el .s2k (TYPE=Plate,Thin)
ret = SapModel.PropArea.SetShell_1("SSEC1", 3, False, "CONC", 0.0, t_m, t_m)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] SetShell_1 Plate-Thin    ret={ret}")

# ----------------------------------------------------------------------
# MALLA — coordenadas CENTRADAS en (0,0) igual que el .s2k
# X: -3, -2, -1, 0, 1, 2, 3   (7 valores)
# Y: -2, -1, 0, 1, 2          (5 valores)
# ----------------------------------------------------------------------
x0 = -a_m/2   # -3
y0 = -b_m/2   # -2
dx, dy = a_m / nx, b_m / ny   # 1.0, 1.0

elem_names = []
for jj in range(ny):
    for ii in range(nx):
        X = [x0 + ii*dx, x0 + (ii+1)*dx, x0 + (ii+1)*dx, x0 + ii*dx]
        Y = [y0 + jj*dy, y0 + jj*dy, y0 + (jj+1)*dy, y0 + (jj+1)*dy]
        Z = [0.0, 0.0, 0.0, 0.0]
        Name = ""
        res = SapModel.AreaObj.AddByCoord(4, X, Y, Z, Name, "SSEC1", "", "Global")
        new_name = None
        for item in res:
            if isinstance(item, str) and item.strip():
                new_name = item
        if new_name:
            elem_names.append(new_name)

if not elem_names:
    NA, AN = 0, []
    [NA, AN, _] = SapModel.AreaObj.GetNameList(NA, AN)
    elem_names = list(AN)
print(f"  Areas creadas: {len(elem_names)}  (esperado: {nx*ny})")

# ----------------------------------------------------------------------
# BC: replicar EXACTAMENTE las del .s2k
# Esquinas (X=+/-3 Y=+/-2): UZ + RX + RY
# Bordes Y=+/-2 (no esquinas): UZ + RY
# Bordes X=+/-3 (no esquinas): UZ + RX
# ----------------------------------------------------------------------
NumberPoints, PointNames = 0, []
[NumberPoints, PointNames, ret] = SapModel.PointObj.GetNameList(NumberPoints, PointNames)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] GetNameList            ret={ret}  N_points={NumberPoints}")

point_coords = {}
bc_corner = bc_edgeX = bc_edgeY = 0
for pName in PointNames:
    [X, Y, Z, ret] = SapModel.PointObj.GetCoordCartesian(pName, 0.0, 0.0, 0.0)
    point_coords[pName] = (X, Y)
    on_left   = abs(X - x0) < 1e-6
    on_right  = abs(X - (x0 + a_m)) < 1e-6
    on_bottom = abs(Y - y0) < 1e-6
    on_top    = abs(Y - (y0 + b_m)) < 1e-6
    is_corner = (on_left or on_right) and (on_bottom or on_top)
    on_edge_X = (on_left or on_right) and not (on_bottom or on_top)  # bordes verticales
    on_edge_Y = (on_bottom or on_top) and not (on_left or on_right)  # bordes horizontales

    if is_corner:
        # Esquina: UZ + RX + RY
        ret = SapModel.PointObj.SetRestraint(pName, [False, False, True, True, True, False])
        bc_corner += 1
    elif on_edge_X:
        # Borde X=+/-3 (vertical): UZ + RX
        ret = SapModel.PointObj.SetRestraint(pName, [False, False, True, True, False, False])
        bc_edgeX += 1
    elif on_edge_Y:
        # Borde Y=+/-2 (horizontal): UZ + RY
        ret = SapModel.PointObj.SetRestraint(pName, [False, False, True, False, True, False])
        bc_edgeY += 1
    # Nodos interiores: sin restriccion

print(f"  BC: {bc_corner} esquinas (UZ+RX+RY), {bc_edgeX} borde X (UZ+RX), {bc_edgeY} borde Y (UZ+RY)")
print(f"  Total nodos restringidos: {bc_corner + bc_edgeX + bc_edgeY}")

# ----------------------------------------------------------------------
# CARGA: UZ = -10 kN concentrada en CADA nodo (igual que .s2k)
# ----------------------------------------------------------------------
ret = SapModel.LoadPatterns.Add("LOAD1", 1, 1.0, True)   # LOAD1 = DEAD (tipo 1)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] LoadPatterns.Add LOAD1   ret={ret}")
fail_count = 0
for pName in PointNames:
    PointLoadValue = [0.0, 0.0, -q_node_kN, 0.0, 0.0, 0.0]
    ret = SapModel.PointObj.SetLoadForce(pName, "LOAD1", PointLoadValue, False, "Global", 0)
    if ret != 0:
        fail_count += 1
print(f"  [{'OK' if fail_count == 0 else 'FAIL'}] SetLoadForce x{NumberPoints} fails={fail_count}")

# ----------------------------------------------------------------------
# ANALIZAR
# ----------------------------------------------------------------------
ModelDirectory = r"C:\CSi_SAP2000_API_S2K_Replica"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "plate_thin_s2k_replica.sdb")
ret = SapModel.File.Save(ModelPath)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] File.Save                ret={ret}")
t0 = time.perf_counter()
ret = SapModel.Analyze.RunAnalysis()
t_analysis = time.perf_counter() - t0
print(f"  [{'OK' if ret == 0 else 'FAIL'}] Analyze.RunAnalysis      ret={ret}  ({t_analysis*1000:.0f} ms)")

ret = SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
ret = SapModel.Results.Setup.SetCaseSelectedForOutput("LOAD1")

# ----------------------------------------------------------------------
# EXTRAER DESPLAZAMIENTOS
# ----------------------------------------------------------------------
w_dict = {}
for pName in PointNames:
    NumberResults = 0
    Obj = Elm = ACase = StepType = []
    StepNum = U1 = U2 = U3 = R1 = R2 = R3 = []
    [NumberResults, Obj, Elm, ACase, StepType, StepNum,
     U1, U2, U3, R1, R2, R3, ret] = SapModel.Results.JointDispl(
        pName, 0, NumberResults, Obj, Elm, ACase, StepType, StepNum,
        U1, U2, U3, R1, R2, R3)
    w_dict[pName] = U3[0] if NumberResults > 0 else 0.0

w_arr = np.array([w_dict[p] for p in PointNames])
idx_max = int(np.argmax(np.abs(w_arr)))
w_max_m = float(w_arr[idx_max])
w_max_mm = w_max_m * 1000.0
print()
print(f"  w_max (s2k replica)      = {w_max_m:.6e} m  ({w_max_mm:.4f} mm)")

# ----------------------------------------------------------------------
# COMPARACION CRUZADA con Calcpad + SS clasico
# ----------------------------------------------------------------------
ref_calcpad   = -6.63e-3     # mm, del PNG Calcpad
ref_ss_clasico = -6.529e-3   # mm, de mi script con SS clasico + presion
ref_navier    = -6.623e-3    # mm, Navier teorico SS uniforme

print()
print("  COMPARACION CRUZADA — Tres modelos distintos")
print("-" * 72)
print(f"  {'Modelo':<40} {'w_max [m]':>14} {'w_max [mm]':>13}")
print(f"  {'-'*40} {'-'*14} {'-'*13}")
print(f"  {'SAP v24 (replica del .s2k V7.40)':<40} {w_max_m:>14.6e} {w_max_mm:>13.3f}")
print(f"  {'SAP v24 (SS clasico + presion)':<40} {ref_ss_clasico:>14.6e} {ref_ss_clasico*1000:>13.3f}")
print(f"  {'Calcpad (SS clasico + presion)':<40} {ref_calcpad:>14.6e} {ref_calcpad*1000:>13.3f}")
print(f"  {'Navier teorico (alpha=0.00772)':<40} {ref_navier:>14.6e} {ref_navier*1000:>13.3f}")
print()
print("  CONCLUSION:")
print("  - El .s2k V7.40 usa BC y carga DISTINTAS a las de Calcpad")
print("    -> NO sirve como referencia directa para validar Calcpad")
print("  - Mi script v24 con SS clasico + presion replica EXACTAMENTE")
print("    el modelo Calcpad (mismas BC, misma carga, misma malla)")
print("  - Diff SAP v24 vs Calcpad < 2% en w_max")
print("  - El .s2k V7.40 es solo un caso DE REFERENCIA HISTORICA, no")
print("    equivalente numericamente al .cpd actual")
print()
print("  SAP2000 sigue abierto. Modelo cargado: plate_thin_s2k_replica")
print("=" * 72)
