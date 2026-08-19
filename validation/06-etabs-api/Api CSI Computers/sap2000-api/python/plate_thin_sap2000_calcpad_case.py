"""
========================================================================
 SAP2000 v24 API - Caso identico al Calcpad "Rectangular Slab FEA.cpd"
 Para comparacion cruzada Calcpad / Python BFS / SAP2000 / Navier
========================================================================

 Datos (igual que Calcpad-Lab/Examples/Mechanics/Finite Elements/Rectangular Slab FEA.cpd):
   a = 6 m  (X), b = 4 m  (Y)  -- RECTANGULAR a/b = 1.5
   t = 0.10 m
   E = 35 GPa = 35000 MPa = 35e3 N/mm^2
   nu = 0.15
   q = 10 kN/m^2
   Mesh: n_a = 6, n_b = 4 -> 24 elementos, 35 nodos
   BC: Simply supported (UZ=0 en los 4 bordes)

 Unidades del modelo (PresentUnits = 12 = Ton_m_C):
   E (tonf/m^2) = 35e6 kN/m^2 / 9.80665 ≈ 3.57e6 tonf/m^2
                 (mas simple: usar E directamente si es coherente)
   Para mantener equivalencia con Calcpad (que usa unidades kN/m), se podria
   usar PresentUnits=6 (kN_m_C). Pero el usuario pidio Ton_m_C, asi que
   convertimos.

 Solucion analitica Navier (Timoshenko Tabla 8, a/b = 1.5):
   alpha = 0.00772
   D = E*t^3 / (12*(1 - nu^2))
   w_max = alpha * q * b^4 / D   (b = lado corto)

 Ejecutar:  python plate_thin_sap2000_calcpad_case.py
            (con SAP2000 v24 abierto previamente)
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
# CASO CALCPAD (UNIDADES kN, m del original)
# ----------------------------------------------------------------------
a_m, b_m   = 6.0, 4.0            # m
t_m        = 0.10                # m
E_kNm2     = 35000e3             # 35 GPa = 35e3 MPa = 35e6 kN/m^2
nu         = 0.15
q_kNm2     = 10.0                # kN/m^2
n_a, n_b   = 6, 4                # mesh

# Para SAP2000 con PresentUnits=12 (Ton_m_C):
# 1 tonf metrico = 1000 kgf = 9806.65 N = 9.80665 kN
# E [tonf/m^2] = E [kN/m^2] / 9.80665
# q [tonf/m^2] = q [kN/m^2] / 9.80665
KN_TO_TONF = 1.0 / 9.80665
E_mod   = E_kNm2 * KN_TO_TONF    # tonf/m^2
q_load  = q_kNm2 * KN_TO_TONF    # tonf/m^2

# Referencia analitica Navier (a/b = 1.5 -> alpha = 0.00772)
D_flex = E_kNm2 * t_m**3 / (12.0 * (1 - nu**2))   # kN*m
w_navier_m = 0.00772 * q_kNm2 * b_m**4 / D_flex   # m
w_navier_mm = w_navier_m * 1000.0

print("=" * 72)
print("  RECTANGULAR SLAB FEA — Caso Calcpad reproducido en SAP2000 v24")
print("=" * 72)
print(f"  Placa     : {a_m} x {b_m} m  (a/b = {a_m/b_m:.2f})")
print(f"  Espesor   : {t_m} m  (b/t = {b_m/t_m:.0f})")
print(f"  Material  : E = {E_kNm2/1e6:.0f} GPa  (= {E_mod:.0f} tonf/m^2)")
print(f"             nu = {nu}")
print(f"  Carga     : q = {q_kNm2} kN/m^2  (= {q_load:.4f} tonf/m^2)")
print(f"  Mesh      : {n_a} x {n_b} = {n_a*n_b} Q4 ({(n_a+1)*(n_b+1)} nodos)")
print(f"  BC        : Simply supported (UZ=0 en 4 bordes)")
print(f"  Unidades  : Ton_m_C (PresentUnits = 12)")
print(f"  Navier    : alpha = 0.00772 (a/b=1.5)  ->  w_max = {w_navier_mm:.3f} mm")
print("=" * 72)

# ----------------------------------------------------------------------
# CONECTAR a SAP2000 (AttachToInstance)
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
    print(f"\n  ERROR: SAP2000 no esta abierto. Abrilo manualmente.")
    print(f"  Detalle: {e}")
    sys.exit(1)

SapModel = SapObject.SapModel

ret = SapModel.InitializeNewModel(12)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] InitializeNewModel(12)   ret={ret}")
ret = SapModel.File.NewBlank()
print(f"  [{'OK' if ret == 0 else 'FAIL'}] File.NewBlank            ret={ret}")
ret = SapModel.SetPresentUnits(12)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] SetPresentUnits(12)      ret={ret}")
present = SapModel.GetPresentUnits()
print(f"  PresentUnits = {present}  (12 = Ton_m_C)")

# ----------------------------------------------------------------------
# MATERIAL + SECCION
# ----------------------------------------------------------------------
ret = SapModel.PropMaterial.SetMaterial("PLATE_MAT", 2)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] SetMaterial              ret={ret}")
ret = SapModel.PropMaterial.SetMPIsotropic("PLATE_MAT", E_mod, nu, 0.0)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] SetMPIsotropic           ret={ret}")
# ShellType=1 (Shell-Thin completo)
ret = SapModel.PropArea.SetShell_1("PLATE_THIN", 3, False, "PLATE_MAT", 0.0, t_m, t_m)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] SetShell_1 ShellType=3 (Plate-Thin)  ret={ret}")

# ----------------------------------------------------------------------
# MALLA n_a x n_b Q4 — Simply Supported
# ----------------------------------------------------------------------
dx, dy = a_m / n_a, b_m / n_b
elem_names = []
for jj in range(n_b):
    for ii in range(n_a):
        X = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx]
        Y = [jj*dy, jj*dy, (jj+1)*dy, (jj+1)*dy]
        Z = [0.0, 0.0, 0.0, 0.0]
        Name = ""
        res = SapModel.AreaObj.AddByCoord(4, X, Y, Z, Name, "PLATE_THIN", "", "Global")
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
print(f"  Areas creadas: {len(elem_names)}  (esperado: {n_a*n_b})")

# ----------------------------------------------------------------------
# BC: SIMPLY SUPPORTED (UZ=0 en bordes)
# Tipo de soporte del caso Calcpad (los s_j son los joints soportados)
# ----------------------------------------------------------------------
NumberPoints, PointNames = 0, []
[NumberPoints, PointNames, ret] = SapModel.PointObj.GetNameList(NumberPoints, PointNames)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] PointObj.GetNameList     ret={ret}  N_points={NumberPoints}")

bc_count = 0
point_coords = {}
for pName in PointNames:
    [X, Y, Z, ret] = SapModel.PointObj.GetCoordCartesian(pName, 0.0, 0.0, 0.0)
    point_coords[pName] = (X, Y)
    on_bd = (abs(X) < 1e-6 or abs(X - a_m) < 1e-6 or
             abs(Y) < 1e-6 or abs(Y - b_m) < 1e-6)
    if on_bd:
        # Simply supported: solo UZ (= 0), rotaciones libres.
        # Para estabilidad in-plane, fijo UX, UY en 1 esquina.
        is_corner_00 = abs(X) < 1e-6 and abs(Y) < 1e-6
        is_corner_a0 = abs(X - a_m) < 1e-6 and abs(Y) < 1e-6
        if is_corner_00:
            ret = SapModel.PointObj.SetRestraint(pName, [True, True, True, False, False, False])
        elif is_corner_a0:
            ret = SapModel.PointObj.SetRestraint(pName, [False, True, True, False, False, False])
        else:
            ret = SapModel.PointObj.SetRestraint(pName, [False, False, True, False, False, False])
        bc_count += 1
print(f"  Nodos restringidos (SS): {bc_count}")

# ----------------------------------------------------------------------
# CARGA: q descendente
# ----------------------------------------------------------------------
ret = SapModel.LoadPatterns.Add("Q", 8, 0, True)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] LoadPatterns.Add('Q')    ret={ret}")
NumberAreas, AreaNames = 0, []
[NumberAreas, AreaNames, ret] = SapModel.AreaObj.GetNameList(NumberAreas, AreaNames)
fail_count = 0
for aName in AreaNames:
    # Dir=10 (gravity), valor POSITIVO va abajo, Replace=False, ItemType=0
    ret = SapModel.AreaObj.SetLoadUniform(aName, "Q", q_load, 10, False, "Global", 0)
    if ret != 0:
        fail_count += 1
print(f"  [{'OK' if fail_count == 0 else 'FAIL'}] SetLoadUniform x{len(AreaNames)} fails={fail_count}")

# ----------------------------------------------------------------------
# ANALIZAR
# ----------------------------------------------------------------------
ModelDirectory = r"C:\CSi_SAP2000_API_PlateThin_Calcpad"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "plate_thin_calcpad.sdb")
ret = SapModel.File.Save(ModelPath)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] File.Save                ret={ret}")
t0 = time.perf_counter()
ret = SapModel.Analyze.RunAnalysis()
t_analysis = time.perf_counter() - t0
print(f"  [{'OK' if ret == 0 else 'FAIL'}] Analyze.RunAnalysis      ret={ret}  ({t_analysis*1000:.0f} ms)")

ret = SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
ret = SapModel.Results.Setup.SetCaseSelectedForOutput("Q")
print(f"  [{'OK' if ret == 0 else 'FAIL'}] SetCaseSelectedForOutput ret={ret}")

# ----------------------------------------------------------------------
# EXTRAER DESPLAZAMIENTOS + ROTACIONES
# ----------------------------------------------------------------------
w_dict = {}
rx_dict = {}; ry_dict = {}
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
    else:
        w_dict[pName] = rx_dict[pName] = ry_dict[pName] = 0.0

w_arr = np.array([w_dict[p] for p in PointNames])
idx_max = int(np.argmax(np.abs(w_arr)))
w_max_m_tonf  = float(w_arr[idx_max])    # en unidades del modelo (m)
# w en SAP esta en m. Para comparar con Calcpad (kN units), no necesito convertir:
# el desplazamiento es geometrico, mismo en cualquier unidad.
w_max_m  = w_max_m_tonf
w_max_mm = w_max_m * 1000.0
print(f"  w (max magnitud)    = {w_max_m:.6e} m  ({w_max_mm:.3f} mm)")

# ----------------------------------------------------------------------
# MOMENTOS — calculados en los 4 NODOS de cada elemento (no solo centroide)
# y promediados por nodo global entre elementos vecinos (igual que Calcpad).
# Esto captura los gradientes cerca de bordes que el centroide pierde.
# ----------------------------------------------------------------------
D_b_tonf = E_mod * t_m**3 / (12.0 * (1.0 - nu**2)) * np.array([
    [1.0,  nu,  0.0],
    [nu,   1.0, 0.0],
    [0.0,  0.0, 0.5*(1.0 - nu)],
])

def shape_dN(xi, eta):
    XI  = np.array([-1.0, 1.0, 1.0, -1.0])
    ETA = np.array([-1.0, -1.0, 1.0, 1.0])
    dN = np.zeros((4, 2))
    dN[:, 0] = 0.25 * XI  * (1.0 + ETA * eta)
    dN[:, 1] = 0.25 * ETA * (1.0 + XI  * xi)
    return dN

# Acumuladores por NODO global (no por elemento)
nodal_Mxx = {p: 0.0 for p in PointNames}
nodal_Myy = {p: 0.0 for p in PointNames}
nodal_Mxy = {p: 0.0 for p in PointNames}
nodal_cnt = {p: 0   for p in PointNames}

# Coordenadas naturales de los 4 nodos del Q4: (xi, eta) en {-1, +1}
node_xi  = [-1.0,  1.0,  1.0, -1.0]
node_eta = [-1.0, -1.0,  1.0,  1.0]

# Tambien guardo Mxx/Myy/Mxy por centroide (para grids de plot)
Mxx_e, Myy_e, Mxy_e = [], [], []
elem_centroids = []
elem_nodes = []

for aName in elem_names:
    NumberPts = 0; Points = []
    [NumberPts, Points, ret] = SapModel.AreaObj.GetPoints(aName, NumberPts, Points)
    pts = list(Points)
    elem_nodes.append(pts)
    nc = np.array([[point_coords[p][0], point_coords[p][1]] for p in pts])
    bx_n = np.array([-ry_dict[p] for p in pts])
    by_n = np.array([ rx_dict[p] for p in pts])

    # M en CADA NODO del elemento (xi,eta natural)
    for k in range(4):
        dN = shape_dN(node_xi[k], node_eta[k])
        J = dN.T @ nc
        detJ = J[0,0]*J[1,1] - J[0,1]*J[1,0]
        Jinv = np.array([[J[1,1], -J[0,1]], [-J[1,0], J[0,0]]]) / detJ
        dNdx = dN @ Jinv.T
        kxx = float(np.sum(dNdx[:, 0] * bx_n))
        kyy = float(np.sum(dNdx[:, 1] * by_n))
        kxy = float(np.sum(dNdx[:, 1] * bx_n) + np.sum(dNdx[:, 0] * by_n))
        M = D_b_tonf @ np.array([kxx, kyy, kxy])
        # Convertir a kN*m/m para comparar con Calcpad
        Mxx_kN = M[0] * 9.80665
        Myy_kN = M[1] * 9.80665
        Mxy_kN = M[2] * 9.80665
        # Acumular en el nodo global k-th del elemento
        global_node = pts[k]
        nodal_Mxx[global_node] += Mxx_kN
        nodal_Myy[global_node] += Myy_kN
        nodal_Mxy[global_node] += Mxy_kN
        nodal_cnt[global_node] += 1

    # Centroide del elemento para plots de contour
    dN = shape_dN(0.0, 0.0)
    J = dN.T @ nc
    detJ = J[0,0]*J[1,1] - J[0,1]*J[1,0]
    Jinv = np.array([[J[1,1], -J[0,1]], [-J[1,0], J[0,0]]]) / detJ
    dNdx = dN @ Jinv.T
    kxx = float(np.sum(dNdx[:, 0] * bx_n))
    kyy = float(np.sum(dNdx[:, 1] * by_n))
    kxy = float(np.sum(dNdx[:, 1] * bx_n) + np.sum(dNdx[:, 0] * by_n))
    M = D_b_tonf @ np.array([kxx, kyy, kxy])
    Mxx_e.append(M[0] * 9.80665)
    Myy_e.append(M[1] * 9.80665)
    Mxy_e.append(M[2] * 9.80665)
    cx = np.mean(nc[:, 0])
    cy = np.mean(nc[:, 1])
    elem_centroids.append((cx, cy))

# Promediar por nodo
Mxx_node = {p: nodal_Mxx[p]/nodal_cnt[p] if nodal_cnt[p] > 0 else 0.0 for p in PointNames}
Myy_node = {p: nodal_Myy[p]/nodal_cnt[p] if nodal_cnt[p] > 0 else 0.0 for p in PointNames}
Mxy_node = {p: nodal_Mxy[p]/nodal_cnt[p] if nodal_cnt[p] > 0 else 0.0 for p in PointNames}

# Arrays para plot
Mxx_e = np.array(Mxx_e)
Myy_e = np.array(Myy_e)
Mxy_e = np.array(Mxy_e)
elem_centroids = np.array(elem_centroids)

# Maximos a nivel NODAL (los que coinciden con Calcpad)
Mxx_n_arr = np.array([Mxx_node[p] for p in PointNames])
Myy_n_arr = np.array([Myy_node[p] for p in PointNames])
Mxy_n_arr = np.array([Mxy_node[p] for p in PointNames])

print(f"  --- Momentos en NODOS (igual que Calcpad: promedio entre elementos vecinos) ---")
print(f"  |Mxx|_max nodal     = {np.max(np.abs(Mxx_n_arr)):.4f} kN*m/m  (Calcpad: 6.32)")
print(f"  |Myy|_max nodal     = {np.max(np.abs(Myy_n_arr)):.4f} kN*m/m  (Calcpad: 12.74)")
print(f"  |Mxy|_max nodal     = {np.max(np.abs(Mxy_n_arr)):.4f} kN*m/m  (Calcpad: 8.38)")
print(f"  --- Momentos en CENTROIDE (subestima por gradientes en bordes) ---")
print(f"  |Mxx|_max centroide = {np.max(np.abs(Mxx_e)):.4f} kN*m/m")
print(f"  |Myy|_max centroide = {np.max(np.abs(Myy_e)):.4f} kN*m/m")
print(f"  |Mxy|_max centroide = {np.max(np.abs(Mxy_e)):.4f} kN*m/m")

# ----------------------------------------------------------------------
# COMPARACION
# ----------------------------------------------------------------------
err_w = (abs(w_max_m) - w_navier_m) / w_navier_m * 100.0

print()
print("  COMPARACION (BC = Simply Supported)")
print("-" * 72)
print(f"  {'Source':<30} {'w_max [m]':>14} {'w_max [mm]':>13} {'diff %':>10}")
print(f"  {'-'*30} {'-'*14} {'-'*13} {'-'*10}")
print(f"  {'SAP2000 v24 API':<30} {abs(w_max_m):>14.6e} {abs(w_max_mm):>13.3f} {'':>10}")
print(f"  {'Navier (alpha=0.00772)':<30} {w_navier_m:>14.6e} {w_navier_mm:>13.3f} {err_w:>+9.2f}")
print(f"  {'Calcpad (Rectangular Slab FEA.cpd)':<30} {'-':>14} {'(ver html)':>13}")

# ----------------------------------------------------------------------
# RENDERIZADO PNGs
# ----------------------------------------------------------------------
out_dir = "figs"
os.makedirs(out_dir, exist_ok=True)
sap_cmap = matplotlib.colors.LinearSegmentedColormap.from_list("sap2000", [
    "#0000FF", "#0080FF", "#00FFFF", "#00FF80", "#00FF00",
    "#80FF00", "#FFFF00", "#FF8000", "#FF0000",
])

# Sort para grid
coords_arr = np.array([point_coords[p] for p in PointNames])
sort_idx = np.lexsort((coords_arr[:, 0], coords_arr[:, 1]))
coords_sorted = coords_arr[sort_idx]
w_sorted = w_arr[sort_idx]
W_grid = w_sorted.reshape((n_b + 1, n_a + 1)) * 1000.0
X_grid = coords_sorted[:, 0].reshape((n_b + 1, n_a + 1))
Y_grid = coords_sorted[:, 1].reshape((n_b + 1, n_a + 1))

# Fig 1: mesh
fig, ax = plt.subplots(figsize=(9, 6))
for k in range(len(elem_names)):
    jj = k // n_a; ii = k % n_a
    xs = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx, ii*dx]
    ys = [jj*dy, jj*dy, (jj+1)*dy, (jj+1)*dy, jj*dy]
    ax.plot(xs, ys, "b-", lw=0.8)
ax.plot(coords_arr[:, 0], coords_arr[:, 1], "ko", ms=4)
for p, (x, y) in point_coords.items():
    if abs(x) < 1e-6 or abs(x - a_m) < 1e-6 or abs(y) < 1e-6 or abs(y - b_m) < 1e-6:
        ax.plot(x, y, "rs", ms=8, mfc="r")
ax.set_aspect("equal")
ax.set_xlabel("x [m]"); ax.set_ylabel("y [m]")
ax.set_title(f"Mallado SAP2000 — caso Calcpad — {n_a}x{n_b} = {len(elem_names)} Q4 ({(n_a+1)*(n_b+1)} nodos)\n"
             f"rojo = Simply Supported (UZ=0)")
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_calcpad_mesh.png", dpi=140)
plt.close()

# Fig 2: deflexion
fig = plt.figure(figsize=(14, 6))
ax1 = fig.add_subplot(121, projection="3d")
ax1.plot_surface(X_grid, Y_grid, W_grid, cmap=sap_cmap, edgecolor="k", lw=0.3)
ax1.set_xlabel("x [m]"); ax1.set_ylabel("y [m]"); ax1.set_zlabel("w [mm]")
ax1.set_title("Deflexion w(x,y) — SAP2000")
ax2 = fig.add_subplot(122)
cf = ax2.contourf(X_grid, Y_grid, W_grid, levels=15, cmap=sap_cmap)
ax2.set_aspect("equal")
ax2.set_xlabel("x [m]"); ax2.set_ylabel("y [m]")
ax2.set_title(f"Contour w  |  w_max = {w_max_mm:.3f} mm  |  Navier = {w_navier_mm:.3f} mm",
              fontsize=10)
plt.colorbar(cf, ax=ax2, label="w [mm]")
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_calcpad_deflection.png", dpi=140)
plt.close()

# Fig 3: momentos
fig, axs = plt.subplots(1, 3, figsize=(18, 5))
Mxx_grid = Mxx_e.reshape((n_b, n_a))
Myy_grid = Myy_e.reshape((n_b, n_a))
Mxy_grid = Mxy_e.reshape((n_b, n_a))
EX_c = elem_centroids[:, 0].reshape((n_b, n_a))
EY_c = elem_centroids[:, 1].reshape((n_b, n_a))
for ax, M, name in [(axs[0], Mxx_grid, "Mx"),
                     (axs[1], Myy_grid, "My"),
                     (axs[2], Mxy_grid, "Mxy")]:
    cf = ax.contourf(EX_c, EY_c, M, levels=15, cmap=sap_cmap)
    ax.set_aspect("equal")
    ax.set_xlabel("x [m]"); ax.set_ylabel("y [m]")
    ax.set_title(f"{name}  |  |{name}|max = {np.max(np.abs(M)):.3f} kN·m/m")
    plt.colorbar(cf, ax=ax, label="kN·m/m")
fig.suptitle("Momentos flectores SAP2000 — caso Calcpad", fontsize=11)
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_calcpad_moments.png", dpi=140)
plt.close()

# Fig 4: summary
fig, ax = plt.subplots(figsize=(12, 5))
ax.axis("off")
table_data = [
    ["Caso",                     "Rectangular Slab FEA (Calcpad)"],
    ["Placa",                    f"{a_m} × {b_m} m  (a/b = {a_m/b_m:.2f})"],
    ["Espesor",                  f"{t_m} m"],
    ["Material",                 f"E = {E_kNm2/1e6:.0f} GPa, ν = {nu}"],
    ["Carga",                    f"q = {q_kNm2} kN/m² ↓"],
    ["Mesh",                     f"{n_a} × {n_b} = {len(elem_names)} Q4 ({(n_a+1)*(n_b+1)} nodos)"],
    ["BC",                       "Simply supported 4 bordes"],
    ["", ""],
    ["w_max SAP2000",            f"{w_max_mm:.4f} mm  ({w_max_m:.6e} m)"],
    ["w_max Navier (alpha=0.00772)", f"{w_navier_mm:.4f} mm  ({w_navier_m:.6e} m)"],
    ["Diff SAP vs Navier",       f"{err_w:+.3f} %"],
    ["",                         ""],
    ["|Mx|_max",                 f"{np.max(np.abs(Mxx_e)):.4f} kN·m/m"],
    ["|My|_max",                 f"{np.max(np.abs(Myy_e)):.4f} kN·m/m"],
    ["|Mxy|_max",                f"{np.max(np.abs(Mxy_e)):.4f} kN·m/m"],
]
table = ax.table(cellText=table_data, colLabels=["Parametro", "Valor"],
                 loc="center", cellLoc="left", colWidths=[0.4, 0.5])
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1, 1.6)
ax.set_title("Rectangular Slab FEA — SAP2000 v24 (mismo caso que Calcpad)", fontsize=12, pad=20)
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_calcpad_summary.png", dpi=140)
plt.close()

print()
print("  PNGs generados:")
for f in ["mesh", "deflection", "moments", "summary"]:
    print(f"    figs/plate_thin_calcpad_{f}.png")
print()
print("  SAP2000 sigue abierto. Modelo: plate_thin_calcpad")
print("=" * 72)
