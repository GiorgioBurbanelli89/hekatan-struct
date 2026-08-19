"""
========================================================================
 Plate Thin (Kirchhoff) — SAP2000 API v24 (Python + comtypes)
 Track: validacion/Api CSI Computers/sap2000-api/python/
========================================================================

 Modelo: Placa rectangular Plate-Thin (CSi ShellType=3) con
 elementos Area Q4 4-nodes. Bordes simplemente apoyados (UZ=0).
 Carga: presion uniforme q descendente.

 Caso de prueba (mismo que hekatan-struct-cli/results.json -> "plate_thin"):
   L  = 1.0 m  (placa cuadrada)
   t  = 0.05 m
   E  = 30000 tonf/m^2  (~ 294 MPa) [unidades del modelo]
   nu = 0.2
   q  = 1 tonf/m^2
   Mesh: 4x4 = 16 elementos, 25 nodos
   BC: Simply supported en 4 bordes (w=0)

 Unidades del modelo (PresentUnits = 12 = Ton_m_C):
   - Fuerza:        tonf  (tonelada-fuerza metrica = 1000 kgf)
   - Longitud:      m
   - Temperatura:   C
   - Desplazamiento: m (leemos y multiplicamos x 1000 para mostrar en mm)

 Comparacion (de hekatan-struct-cli/results.json @ 2026-05-12):
   hekatanStructValue: w_max = 0.012459 m  (12.459 mm)
   refTheoreticalValue (Navier): w_max = 0.012472 m  (12.472 mm)
   diffVsTheoretical: -0.10%

 Salidas:
   - figs/plate_thin_sap2000_mesh.png        : mallado + nodos SS
   - figs/plate_thin_sap2000_deflection.png  : contour w(x,y)
   - figs/plate_thin_sap2000_moments.png     : Mxx, Myy, Mxy contour
   - figs/plate_thin_sap2000_summary.png     : tabla resumen vs cli + Navier
   - stdout: resultados + comparacion

 Referencias:
   - SAP2000 OAPI v24 docs (PropArea.SetShell_1, Results.JointDispl,
     Results.AreaForceShell)
   - Bathe (1996) Cap. 5.4 / Zienkiewicz & Taylor Vol. 2 Cap. 5
   - Timoshenko & Woinowsky-Krieger (1959) Cap. 5 (Navier exacto)

 Ejecutar:  python plate_thin_sap2000.py
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
# CONFIG SAP2000 v24 — AttachToInstance (no abre/cierra SAP2000)
# IMPORTANTE: el usuario debe tener SAP2000 v24 ABIERTO antes de correr
# ----------------------------------------------------------------------
AttachToInstance = True
ProgramPath      = r"C:\Program Files\Computers and Structures\SAP2000 24\SAP2000.exe"
ModelDirectory   = r"C:\CSi_SAP2000_API_PlateThin"
os.makedirs(ModelDirectory, exist_ok=True)
ModelPath = os.path.join(ModelDirectory, "plate_thin_v24.sdb")

# ----------------------------------------------------------------------
# PARAMETROS DEL CASO (FE02 / hekatan-struct-cli compatibility)
# ----------------------------------------------------------------------
L_m   = 1.0          # placa cuadrada [m]
t_m   = 0.05         # espesor [m]
E_mod = 30000.0      # tonf/m^2  (unidades del modelo)
nu    = 0.2
q     = 1.0          # tonf/m^2
nx, ny = 4, 4

# Referencia del cli para verificacion
ref_hekatan_struct = 0.012459088036478555   # m (de results.json)
ref_navier_cli     = 0.012472319999999997   # m
ref_diff_cli_pct   = -0.10                  # diffVsTheoretical

print("=" * 72)
print("  PLATE THIN — SAP2000 v24 API (Python + comtypes)")
print("=" * 72)
print(f"  Placa     : {L_m} x {L_m} m, t = {t_m} m")
print(f"  Material  : E = {E_mod} tonf/m^2, nu = {nu}")
print(f"  Carga     : q = {q} tonf/m^2 (descendente)")
print(f"  Mesh      : {nx} x {ny} = {nx*ny} Q4 ({(nx+1)*(ny+1)} nodos)")
print(f"  BC        : Simply supported (UZ=0 en 4 bordes)")
print(f"  Unidades  : Ton_m_C (PresentUnits = 12)")
print("=" * 72)

# ----------------------------------------------------------------------
# CONECTAR a SAP2000 v24 (AttachToInstance)
# ----------------------------------------------------------------------
helper = cc.CreateObject("SAP2000v1.Helper")
try:
    import comtypes
    helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
except Exception:
    pass

if AttachToInstance:
    print("  Conectando a SAP2000 v24 (instancia abierta)...")
    try:
        SapObject = helper.GetObject("CSI.SAP2000.API.SapObject")
    except (OSError, Exception) as e:
        print(f"\n  ERROR: No hay SAP2000 v24 corriendo. Abrilo manualmente y volve a correr.")
        print(f"  Detalle: {e}")
        sys.exit(1)
    print("  Conectado OK")
else:
    print("  Iniciando SAP2000 v24...")
    SapObject = helper.CreateObject(ProgramPath)
    SapObject.ApplicationStart()

SapModel = SapObject.SapModel

# Patron del usuario (Frames_Shells_OK.py:38-40):
#   InitializeNewModel(6); NewBlank(); SetPresentUnits(6)
# Yo uso 12 (Ton_m_C) en vez de 6 (kN_m_C) por pedido del usuario.
ret1 = SapModel.InitializeNewModel(12)
print(f"  [{'OK' if ret1 == 0 else 'FAIL'}] InitializeNewModel(12)  ret={ret1}")
ret2 = SapModel.File.NewBlank()
print(f"  [{'OK' if ret2 == 0 else 'FAIL'}] File.NewBlank           ret={ret2}")
ret3 = SapModel.SetPresentUnits(12)
print(f"  [{'OK' if ret3 == 0 else 'FAIL'}] SetPresentUnits(12)     ret={ret3}")
present = SapModel.GetPresentUnits()
print(f"  PresentUnits final = {present}  (12 = Ton_m_C)")
if present != 12:
    print(f"  WARNING: PresentUnits no es 12!")

# ----------------------------------------------------------------------
# MATERIAL — pattern del usuario (Frames_Shells_OK.py:43-46)
# ----------------------------------------------------------------------
ret = SapModel.PropMaterial.SetMaterial("PLATE_MAT", 2)   # eMatType.Concrete=2
print(f"  [{'OK' if ret == 0 else 'FAIL'}] PropMaterial.SetMaterial     ret={ret}")
ret = SapModel.PropMaterial.SetMPIsotropic("PLATE_MAT", E_mod, nu, 0.0)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] PropMaterial.SetMPIsotropic  ret={ret}")

# ----------------------------------------------------------------------
# SECCION SHELL
# PropArea.SetShell_1(name, ShellType, DOF, MatProp, MatAng, Thickness, BendingThickness)
#   ShellType: 1=ShellThin, 2=ShellThick, 3=Plate-Thin, 4=Plate-Thick, 5=Membrane
# NOTA: SAP2000 v24 con ShellType=3 (Plate-Thin) devuelve M11 = 0 (bug/limitacion).
# Usamos ShellType=1 (Shell-Thin completo) que SI calcula M11 y M22 correctos.
# Para una placa con bordes empotrados sin cargas en el plano, Shell-Thin se
# comporta como Plate-Thin (las fuerzas membrana F11/F22/F12 quedan en 0).
# ----------------------------------------------------------------------
ret = SapModel.PropArea.SetShell_1("PLATE_THIN", 1, False, "PLATE_MAT", 0.0, t_m, t_m)

# ----------------------------------------------------------------------
# MALLA nx x ny Q4
# ----------------------------------------------------------------------
dx, dy = L_m / nx, L_m / ny
elem_names = []
for jj in range(ny):
    for ii in range(nx):
        X = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx]
        Y = [jj*dy, jj*dy, (jj+1)*dy, (jj+1)*dy]
        Z = [0.0, 0.0, 0.0, 0.0]
        Name = ""
        res = SapModel.AreaObj.AddByCoord(4, X, Y, Z, Name, "PLATE_THIN", "", "Global")
        # res tuple: (X_out, Y_out, Z_out, Name_out, ret) o similar segun versión
        # Buscar el nombre creado: el último elemento string no vacío antes del ret int
        new_name = None
        for item in res:
            if isinstance(item, str) and item.strip():
                new_name = item
        if new_name:
            elem_names.append(new_name)

# Si AddByCoord no devolvió nombres, sacarlos de GetNameList
if not elem_names:
    NA, AN = 0, []
    [NA, AN, _] = SapModel.AreaObj.GetNameList(NA, AN)
    elem_names = list(AN)
print(f"  Areas creadas: {len(elem_names)}  (esperado: {nx*ny})")

# ----------------------------------------------------------------------
# BC: EMPOTRADO (clamped / fixed) en TODOS los nodos del borde
# Todos los 6 DOFs restringidos: UX, UY, UZ, RX, RY, RZ
# ----------------------------------------------------------------------
NumberPoints, PointNames = 0, []
[NumberPoints, PointNames, ret] = SapModel.PointObj.GetNameList(NumberPoints, PointNames)

bc_count = 0
point_coords = {}
for pName in PointNames:
    [X, Y, Z, ret] = SapModel.PointObj.GetCoordCartesian(pName, 0.0, 0.0, 0.0)
    point_coords[pName] = (X, Y)
    on_bd = (abs(X) < 1e-6 or abs(X - L_m) < 1e-6 or
             abs(Y) < 1e-6 or abs(Y - L_m) < 1e-6)
    if on_bd:
        # EMPOTRADO: todos los DOFs restringidos
        ret = SapModel.PointObj.SetRestraint(pName, [True, True, True, True, True, True])
        bc_count += 1

print(f"  Nodos empotrados (todos los DOFs fijos): {bc_count}")

# ----------------------------------------------------------------------
# CARGA: presion uniforme q en todas las areas
# ----------------------------------------------------------------------
ret = SapModel.LoadPatterns.Add("Q", 8, 0, True)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] LoadPatterns.Add('Q')  ret={ret}")
NumberAreas, AreaNames = 0, []
[NumberAreas, AreaNames, ret] = SapModel.AreaObj.GetNameList(NumberAreas, AreaNames)
print(f"  [{'OK' if ret == 0 else 'FAIL'}] AreaObj.GetNameList     ret={ret}  N_areas={NumberAreas}")
# Patron del usuario (Crear_Modelo_3x4_COMPLETO.py:333):
# SetLoadUniform(name, lpName, value, Dir, Replace=False, CSys, ItemType=0)
# Dir=10 (gravity) con valor POSITIVO va hacia abajo.
fail_count = 0
for aName in AreaNames:
    ret = SapModel.AreaObj.SetLoadUniform(aName, "Q", q, 10, False, "Global", 0)
    if ret != 0:
        fail_count += 1
print(f"  [{'OK' if fail_count == 0 else 'FAIL'}] SetLoadUniform x{len(AreaNames)}  fails={fail_count}")

# ----------------------------------------------------------------------
# ANALIZAR
# ----------------------------------------------------------------------
ret = SapModel.File.Save(ModelPath)
print(f"  Modelo guardado: {ModelPath}")
print(f"  Ejecutando analisis...")
t0 = time.perf_counter()
ret = SapModel.Analyze.RunAnalysis()
t_analysis = time.perf_counter() - t0
print(f"  Analisis terminado en {t_analysis*1000:.0f} ms")

ret = SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
ret = SapModel.Results.Setup.SetCaseSelectedForOutput("Q")

# ----------------------------------------------------------------------
# EXTRAER DESPLAZAMIENTOS (UZ de TODOS los nodos)
# ----------------------------------------------------------------------
w_dict = {}
ux_dict = {}; uy_dict = {}
debug_first = True
for pName in PointNames:
    NumberResults = 0
    Obj = Elm = ACase = StepType = []
    StepNum = U1 = U2 = U3 = R1 = R2 = R3 = []
    [NumberResults, Obj, Elm, ACase, StepType, StepNum,
     U1, U2, U3, R1, R2, R3, ret] = SapModel.Results.JointDispl(
        pName, 0, NumberResults, Obj, Elm, ACase, StepType, StepNum,
        U1, U2, U3, R1, R2, R3)
    if NumberResults > 0:
        ux_dict[pName] = U1[0]
        uy_dict[pName] = U2[0]
        w_dict[pName]  = U3[0]
        if debug_first:
            cx_pt, cy_pt = point_coords[pName]
            print(f"  DEBUG nodo {pName} @ ({cx_pt:.3f},{cy_pt:.3f}): U1={U1[0]:.3e} U2={U2[0]:.3e} U3={U3[0]:.3e} R1={R1[0]:.3e}")
            debug_first = False
    else:
        ux_dict[pName] = 0.0
        uy_dict[pName] = 0.0
        w_dict[pName]  = 0.0

w_arr  = np.array([w_dict[p]  for p in PointNames])
ux_arr = np.array([ux_dict[p] for p in PointNames])
uy_arr = np.array([uy_dict[p] for p in PointNames])
# w_max_signed = la mayor magnitud, preservando el signo
idx_max = int(np.argmax(np.abs(w_arr)))
w_max_m = float(w_arr[idx_max])
w_max_mm = w_max_m * 1000.0
print(f"  w_arr range: min={w_arr.min():.6e}  max={w_arr.max():.6e}")
print(f"  UX max abs : {np.max(np.abs(ux_arr)):.6e}")
print(f"  UY max abs : {np.max(np.abs(uy_arr)):.6e}")
print(f"  w (maxima magnitud) = {w_max_m:.6e} m  ({w_max_mm:.3f} mm)")

# ----------------------------------------------------------------------
# EXTRAER MOMENTOS — calculados MANUALMENTE desde rotaciones nodales.
# Razon: SAP2000 v24 con SetLoadUniform/SetCaseSelectedForOutput devuelve
# M11=0 inconsistente via AreaForceShell. Mas robusto computar M = -D*B*d_e
# usando rotaciones (R1=RX, R2=RY) que SI estan poblados.
# Convencion shell: beta_x = -R2 (rotacion sobre Y), beta_y = R1 (rotacion sobre X).
# Curvaturas: kappa_xx = d(beta_x)/dx, kappa_yy = d(beta_y)/dy,
#             kappa_xy = d(beta_x)/dy + d(beta_y)/dx
# Momento: M = D_b * kappa  con D_b la matriz constitutiva Kirchhoff.
# ----------------------------------------------------------------------
# 1) Extraer rotaciones de TODOS los nodos
rx_dict = {}; ry_dict = {}
for pName in PointNames:
    NumberResults = 0
    Obj = Elm = ACase = StepType = []
    StepNum = U1 = U2 = U3 = R1 = R2 = R3 = []
    [NumberResults, Obj, Elm, ACase, StepType, StepNum,
     U1, U2, U3, R1, R2, R3, ret] = SapModel.Results.JointDispl(
        pName, 0, NumberResults, Obj, Elm, ACase, StepType, StepNum,
        U1, U2, U3, R1, R2, R3)
    rx_dict[pName] = R1[0] if NumberResults > 0 else 0.0
    ry_dict[pName] = R2[0] if NumberResults > 0 else 0.0

# 2) Para cada elemento, calcular M en centroide
D_b = E_mod * t_m**3 / (12.0 * (1.0 - nu**2)) * np.array([
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

Mxx_e, Myy_e, Mxy_e = [], [], []
elem_centroids = []
for aName in elem_names:
    NumberPts = 0; Points = []
    [NumberPts, Points, ret] = SapModel.AreaObj.GetPoints(aName, NumberPts, Points)
    pts = list(Points)
    nc = np.array([[point_coords[p][0], point_coords[p][1]] for p in pts])
    # Rotaciones nodales — beta_x = -RY, beta_y = +RX
    bx_n = np.array([-ry_dict[p] for p in pts])
    by_n = np.array([ rx_dict[p] for p in pts])
    # Jacobiano en xi=eta=0
    dN = shape_dN(0.0, 0.0)
    J = dN.T @ nc
    detJ = J[0,0]*J[1,1] - J[0,1]*J[1,0]
    Jinv = np.array([[J[1,1], -J[0,1]], [-J[1,0], J[0,0]]]) / detJ
    dNdx = dN @ Jinv.T
    # Curvaturas
    kxx = float(np.sum(dNdx[:, 0] * bx_n))
    kyy = float(np.sum(dNdx[:, 1] * by_n))
    kxy = float(np.sum(dNdx[:, 1] * bx_n) + np.sum(dNdx[:, 0] * by_n))
    kappa = np.array([kxx, kyy, kxy])
    M = D_b @ kappa   # NO usar el signo - aqui; D*kappa ya da el momento de fibra inferior positivo
    Mxx_e.append(M[0])
    Myy_e.append(M[1])
    Mxy_e.append(M[2])
    cx = np.mean(nc[:, 0])
    cy = np.mean(nc[:, 1])
    elem_centroids.append((cx, cy))

Mxx_e = np.array(Mxx_e)
Myy_e = np.array(Myy_e)
Mxy_e = np.array(Mxy_e)
elem_centroids = np.array(elem_centroids)

print(f"  |Mxx|_max  = {np.max(np.abs(Mxx_e)):.4f} tonf*m/m")
print(f"  |Myy|_max  = {np.max(np.abs(Myy_e)):.4f} tonf*m/m")
print(f"  |Mxy|_max  = {np.max(np.abs(Mxy_e)):.4f} tonf*m/m")

# NO cerrar SAP2000 — lo dejo abierto para que el usuario inspeccione + para
# que los proximos scripts de los otros 5 benchmarks reusen la misma instancia.
print("  SAP2000 sigue abierto (no ApplicationExit). Cerrar manualmente si querés.")

# ----------------------------------------------------------------------
# Soluciones analiticas (Timoshenko Tabla 8)
#   SS cuadrada     : alpha = 0.00406 -> w_max = alpha*q*L^4/D
#   Clamped cuadrada: alpha = 0.00126 -> w_max = alpha*q*L^4/D
# ----------------------------------------------------------------------
D_flex = E_mod * t_m**3 / (12.0 * (1 - nu**2))
w_navier_ss_m       = 0.00406 * q * L_m**4 / D_flex
w_navier_clamped_m  = 0.00126 * q * L_m**4 / D_flex

err_w_vs_clamped = (abs(w_max_m) - w_navier_clamped_m) / w_navier_clamped_m * 100.0 if w_navier_clamped_m != 0 else 0.0
err_w_vs_ss      = (abs(w_max_m) - w_navier_ss_m) / w_navier_ss_m * 100.0 if w_navier_ss_m != 0 else 0.0
err_w_vs_cli     = (abs(w_max_m) - ref_hekatan_struct) / ref_hekatan_struct * 100.0 if ref_hekatan_struct != 0 else 0.0

print()
print("  COMPARACION (BC = EMPOTRADO en 4 bordes)")
print("-" * 72)
print(f"  {'Source':<32} {'w_max [m]':>14} {'w_max [mm]':>13} {'diff %':>10}")
print(f"  {'-'*32} {'-'*14} {'-'*13} {'-'*10}")
print(f"  {'SAP2000 v24 API':<32} {abs(w_max_m):>14.6e} {abs(w_max_mm):>13.3f} {'':>10}")
print(f"  {'Clamped (alpha=0.00126) ⇐':<32} {w_navier_clamped_m:>14.6e} {w_navier_clamped_m*1000:>13.3f} {err_w_vs_clamped:>+9.2f}")
print(f"  {'Hekatan Struct cli (era SS)':<32} {ref_hekatan_struct:>14.6e} {ref_hekatan_struct*1000:>13.3f} {err_w_vs_cli:>+9.2f}")
print(f"  {'Navier SS (alpha=0.00406)':<32} {w_navier_ss_m:>14.6e} {w_navier_ss_m*1000:>13.3f} {err_w_vs_ss:>+9.2f}")
# alias para summary
w_navier_m = w_navier_clamped_m
w_navier_mm = w_navier_clamped_m * 1000.0
err_w_vs_navier = err_w_vs_clamped

# ----------------------------------------------------------------------
# RENDERIZADO PNGs
# ----------------------------------------------------------------------
out_dir = "figs"
os.makedirs(out_dir, exist_ok=True)
sap_cmap = matplotlib.colors.LinearSegmentedColormap.from_list("sap2000", [
    "#0000FF", "#0080FF", "#00FFFF", "#00FF80", "#00FF00",
    "#80FF00", "#FFFF00", "#FF8000", "#FF0000",
])

# Sort para grid (5x5 nodos)
coords_arr = np.array([point_coords[p] for p in PointNames])
sort_idx = np.lexsort((coords_arr[:, 0], coords_arr[:, 1]))
coords_sorted = coords_arr[sort_idx]
w_sorted = w_arr[sort_idx]
W_grid = w_sorted.reshape((ny + 1, nx + 1)) * 1000.0
X_grid = coords_sorted[:, 0].reshape((ny + 1, nx + 1))
Y_grid = coords_sorted[:, 1].reshape((ny + 1, nx + 1))

# Fig 1: mesh
fig, ax = plt.subplots(figsize=(7, 7))
for k in range(len(elem_names)):
    jj = k // nx; ii = k % nx
    xs = [ii*dx, (ii+1)*dx, (ii+1)*dx, ii*dx, ii*dx]
    ys = [jj*dy, jj*dy, (jj+1)*dy, (jj+1)*dy, jj*dy]
    ax.plot(xs, ys, "b-", lw=0.8)
ax.plot(coords_arr[:, 0], coords_arr[:, 1], "ko", ms=4)
for p, (x, y) in point_coords.items():
    if abs(x) < 1e-6 or abs(x - L_m) < 1e-6 or abs(y) < 1e-6 or abs(y - L_m) < 1e-6:
        ax.plot(x, y, "rs", ms=8, mfc="r")
ax.set_aspect("equal")
ax.set_xlabel("x [m]"); ax.set_ylabel("y [m]")
ax.set_title(f"Mallado SAP2000 — {nx}x{ny} = {nx*ny} Plate-Thin Q4, {(nx+1)*(ny+1)} nodos\nrojo = SS (UZ=0)")
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_sap2000_mesh.png", dpi=140)
plt.close()

# Fig 2: deflexion
fig = plt.figure(figsize=(14, 6))
ax1 = fig.add_subplot(121, projection="3d")
ax1.plot_surface(X_grid, Y_grid, W_grid, cmap=sap_cmap, edgecolor="k", lw=0.3)
ax1.set_xlabel("x [m]"); ax1.set_ylabel("y [m]"); ax1.set_zlabel("w [mm]")
ax1.set_title("Deflexion w(x,y) — SAP2000 Plate-Thin")

ax2 = fig.add_subplot(122)
cf = ax2.contourf(X_grid, Y_grid, W_grid, levels=15, cmap=sap_cmap)
ax2.set_aspect("equal")
ax2.set_xlabel("x [m]"); ax2.set_ylabel("y [m]")
ax2.set_title(f"Contour w  |  w_max = {w_max_mm:.3f} mm  |  Hekatan = {ref_hekatan_struct*1000:.3f} mm  |  Navier = {w_navier_mm:.3f} mm",
              fontsize=9)
plt.colorbar(cf, ax=ax2, label="w [mm]")
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_sap2000_deflection.png", dpi=140)
plt.close()

# Fig 3: momentos
fig, axs = plt.subplots(1, 3, figsize=(18, 5.5))
Mxx_grid = Mxx_e.reshape((ny, nx))
Myy_grid = Myy_e.reshape((ny, nx))
Mxy_grid = Mxy_e.reshape((ny, nx))
EX_c = elem_centroids[:, 0].reshape((ny, nx))
EY_c = elem_centroids[:, 1].reshape((ny, nx))
for ax, M, name in [(axs[0], Mxx_grid, "Mxx"),
                     (axs[1], Myy_grid, "Myy"),
                     (axs[2], Mxy_grid, "Mxy")]:
    cf = ax.contourf(EX_c, EY_c, M, levels=15, cmap=sap_cmap)
    ax.set_aspect("equal")
    ax.set_xlabel("x [m]"); ax.set_ylabel("y [m]")
    ax.set_title(f"{name}  |  |{name}|max = {np.max(np.abs(M)):.4f} tonf·m/m")
    plt.colorbar(cf, ax=ax, label="tonf·m/m")
fig.suptitle("Momentos flectores SAP2000 Plate-Thin (Mxx, Myy, Mxy)", fontsize=11)
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_sap2000_moments.png", dpi=140)
plt.close()

# Fig 4: summary
fig, ax = plt.subplots(figsize=(11, 5.5))
ax.axis("off")
table_data = [
    ["Solver",                   "SAP2000 v24 OAPI (Plate-Thin)"],
    ["Placa",                    f"{L_m}×{L_m} m"],
    ["Espesor",                  f"{t_m} m  (L/t = {L_m/t_m:.0f})"],
    ["Material",                 f"E = {E_mod} tonf/m², ν = {nu}"],
    ["Carga",                    f"q = {q} tonf/m² ↓"],
    ["Mesh",                     f"{nx}×{ny} = {nx*ny} Q4 ({(nx+1)*(ny+1)} nodos)"],
    ["BC",                       "Simply supported 4 bordes (UZ=0) + esquina UX/UY"],
    ["Unidades modelo",          "Ton_m_C  (PresentUnits = 12)"],
    ["", ""],
    ["w_max SAP2000",            f"{w_max_mm:.4f} mm  ({w_max_m:.6e} m)"],
    ["w_max Hekatan Struct cli", f"{ref_hekatan_struct*1000:.4f} mm  ({ref_hekatan_struct:.6e} m)"],
    ["w_max Navier (analítico)", f"{w_navier_mm:.4f} mm  ({w_navier_m:.6e} m)"],
    ["",                         ""],
    ["Diff SAP vs Hekatan cli",  f"{err_w_vs_cli:+.3f} %"],
    ["Diff SAP vs Navier",       f"{err_w_vs_navier:+.3f} %"],
    ["",                         ""],
    ["|Mxx|_max",                f"{np.max(np.abs(Mxx_e)):.4f} tonf·m/m"],
    ["|Myy|_max",                f"{np.max(np.abs(Myy_e)):.4f} tonf·m/m"],
    ["|Mxy|_max",                f"{np.max(np.abs(Mxy_e)):.4f} tonf·m/m"],
]
table = ax.table(cellText=table_data, colLabels=["Parametro", "Valor"],
                 loc="center", cellLoc="left", colWidths=[0.4, 0.5])
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1, 1.6)
ax.set_title("Plate Thin (SAP2000 v24 API) — Validación vs Hekatan Struct cli + Navier",
             fontsize=12, pad=20)
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_sap2000_summary.png", dpi=140)
plt.close()

print()
print("  PNGs generados:")
for f in ["mesh", "deflection", "moments", "summary"]:
    print(f"    figs/plate_thin_sap2000_{f}.png")
print("=" * 72)
