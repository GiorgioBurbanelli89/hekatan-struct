"""
========================================================================
 Plate Thin (Kirchhoff/Mindlin) — OpenSeesPy track
 Track: validacion/opensees-python/
========================================================================

 Modelo: ShellMITC4 (OpenSees) — Mindlin-Reissner con MITC4
   En regimen thin (Lx/t = 50) MITC4 converge a Kirchhoff naturalmente.

 Caso canonico (igual a validacion/python-fem/ y test_plate_q4_validation.py):
   Placa 10x10 m, t = 0.20 m, E = 30 GPa, nu = 0.3,
   q = 10 kN/m^2 uniforme, mesh 16x16 Q4, SS en 4 bordes.

 Solucion analitica de referencia: Navier series (Timoshenko 1959, Cap. 5)

 Salidas:
   - figs/plate_thin_ops_mesh.png        : mallado + nodos restringidos
   - figs/plate_thin_ops_deflection.png  : deflexion w(x,y)
   - figs/plate_thin_ops_moments.png     : Mxx, Myy, Mxy contour
   - figs/plate_thin_ops_summary.png     : tabla resumen vs Navier
   - stdout: resultados + comparacion vs Navier y vs Hekatan-fem

 Referencias:
   - Bathe (1996), Cap. 5.4 (MITC4)
   - Zienkiewicz & Taylor, The FE Method Vol. 2 (2000), Cap. 5 (shells)
   - Timoshenko & Woinowsky-Krieger (1959), Cap. 5 (Navier exacto)
   - OpenSees ShellMITC4 doc: https://openseespydoc.readthedocs.io/

 Ejecutar:  python plate_thin_ops.py
========================================================================
"""

import os
import sys
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import openseespy.opensees as ops

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

# ----------------------------------------------------------------------
# Parametros (identicos a plate_thin_skfem.py y test_plate_q4_validation.py)
# ----------------------------------------------------------------------
Lx, Ly = 10.0, 10.0
nx, ny = 16, 16
E_mod  = 30e6           # kN/m^2
nu     = 0.3
t_pl   = 0.20           # m
q_load = 10.0           # kN/m^2  (magnitud — el signo lo aplica OpenSees con load -1)
rho    = 2.4            # kN·s^2/m^4 → mass dummy (no se usa en static)

# ----------------------------------------------------------------------
# OpenSees model setup (3 DOF en X,Y,Z, 6 DOF totales con rotaciones)
# OpenSees usa 6 DOF/nodo para shell.
# ----------------------------------------------------------------------
ops.wipe()
ops.model("basic", "-ndm", 3, "-ndf", 6)

# Material elastico isotropo (ElasticIsotropic 3D)
# Sintaxis: nDMaterial("ElasticIsotropic", matTag, E, nu, rho)
mat_tag = 1
ops.nDMaterial("ElasticIsotropic", mat_tag, E_mod, nu, rho)

# Seccion plate fiber (PlateFiberMaterial) — para ShellMITC4
# Sintaxis: nDMaterial("PlateFiber", secTag, matTag3D)
plate_mat_tag = 2
ops.nDMaterial("PlateFiber", plate_mat_tag, mat_tag)

# Seccion ElasticMembranePlateSection (mas simple, no necesita fibras)
# Sintaxis: section("ElasticMembranePlateSection", secTag, E, nu, thickness, rho)
sec_tag = 1
ops.section("ElasticMembranePlateSection", sec_tag, E_mod, nu, t_pl, rho)

# ----------------------------------------------------------------------
# Geometria: nodos 16x16
# ----------------------------------------------------------------------
dx, dy = Lx / nx, Ly / ny
n_nodes = (nx + 1) * (ny + 1)
n_elems = nx * ny

coords = []
node_tags = []
tag = 1
node_id_map = {}   # (i, j) -> tag
for j in range(ny + 1):
    for i in range(nx + 1):
        x = i * dx
        y = j * dy
        ops.node(tag, x, y, 0.0)
        node_id_map[(i, j)] = tag
        coords.append([x, y])
        node_tags.append(tag)
        tag += 1
coords = np.array(coords)

# ----------------------------------------------------------------------
# Restricciones simply supported (w = 0 en bordes)
# Para placa con flexion: restringir UZ + rotaciones para evitar inestabilidad in-plane.
# OpenSees DOF order: UX UY UZ RX RY RZ (mask 1=fixed, 0=free)
# Simply supported: UZ=0 en bordes. Para evitar modo rigido in-plane, fijo UX+UY en 1 esquina.
# ----------------------------------------------------------------------
n_bc = 0
corner_00 = node_id_map[(0, 0)]
corner_n0 = node_id_map[(nx, 0)]
for (i, j), tag in node_id_map.items():
    on_edge = (i == 0 or i == nx or j == 0 or j == ny)
    if not on_edge:
        continue
    # BC de placa: w=0 en bordes (UZ fijo, rotaciones libres)
    # Esquinas especiales: agregar UX/UY para impedir traslacion in-plane (modo rigido)
    if tag == corner_00:
        ops.fix(tag, 1, 1, 1, 0, 0, 0)   # UX, UY, UZ
    elif tag == corner_n0:
        ops.fix(tag, 0, 1, 1, 0, 0, 0)   # UY, UZ (UX libre)
    else:
        ops.fix(tag, 0, 0, 1, 0, 0, 0)   # solo UZ
    n_bc += 1

# ----------------------------------------------------------------------
# Elementos ShellMITC4
# Sintaxis: element("ShellMITC4", eleTag, n1, n2, n3, n4, secTag)
# ----------------------------------------------------------------------
elem_tag = 1
element_conn = []
for j in range(ny):
    for i in range(nx):
        n1 = node_id_map[(i, j)]
        n2 = node_id_map[(i+1, j)]
        n3 = node_id_map[(i+1, j+1)]
        n4 = node_id_map[(i, j+1)]
        ops.element("ShellMITC4", elem_tag, n1, n2, n3, n4, sec_tag)
        element_conn.append([n1, n2, n3, n4])
        elem_tag += 1

# ----------------------------------------------------------------------
# Carga: presion uniforme aplicada como fuerzas nodales equivalentes
# Para shell Q4 con carga uniforme q, la fuerza nodal = q * A_trib_factor
# A_trib_factor: esquina = dx*dy/4, borde = dx*dy/2, interior = dx*dy
# ----------------------------------------------------------------------
ops.timeSeries("Linear", 1)
ops.pattern("Plain", 1, 1)
for (i, j), tag in node_id_map.items():
    is_corner = (i in (0, nx)) and (j in (0, ny))
    is_edge   = (i in (0, nx)) or (j in (0, ny))
    if is_corner:
        factor = 0.25
    elif is_edge:
        factor = 0.5
    else:
        factor = 1.0
    Fz = -q_load * dx * dy * factor   # descendente
    ops.load(tag, 0.0, 0.0, Fz, 0.0, 0.0, 0.0)

# ----------------------------------------------------------------------
# Analisis estatico
# ----------------------------------------------------------------------
print("=" * 72)
print("  PLATE THIN — OpenSeesPy (ShellMITC4)")
print("=" * 72)
print(f"  Placa     : {Lx} x {Ly} m, t = {t_pl} m  (Lx/t = {Lx/t_pl:.0f})")
print(f"  Material  : E = {E_mod/1e6:.0f} GPa, nu = {nu}")
print(f"  Carga     : q = {q_load} kN/m^2 ↓")
print(f"  Mesh      : {nx} x {ny} = {n_elems} elementos ShellMITC4 ({n_nodes} nodos)")
print(f"  BC        : Simply supported (w=0 en 4 bordes + corner restraints UX/UY)")
print("=" * 72)

ops.system("BandGeneral")
ops.numberer("RCM")
ops.constraints("Plain")
ops.integrator("LoadControl", 1.0)
ops.algorithm("Linear")
ops.analysis("Static")

import time
t0 = time.perf_counter()
ok = ops.analyze(1)
t_solve = time.perf_counter() - t0
print(f"  Analize() retornó: {ok}  (0 = OK)")
print(f"  Tiempo de solve  : {t_solve*1000:.1f} ms")

# ----------------------------------------------------------------------
# Extraer deflexiones
# ----------------------------------------------------------------------
w_arr = np.zeros(n_nodes)
for k, (i, j) in enumerate([k for k in node_id_map]):
    pass
# Mejor iterar el dict en orden de tags
w_grid = np.zeros((ny + 1, nx + 1))
for (i, j), tag in node_id_map.items():
    uz = ops.nodeDisp(tag, 3)   # DOF 3 = UZ
    w_grid[j, i] = uz

w_center = w_grid[ny // 2, nx // 2]
w_min = w_grid.min()

# ----------------------------------------------------------------------
# Extraer momentos: ShellMITC4.eleResponse('stresses') no funciona consistente
# en OpenSeesPy 3.x — los devuelve vacios. Calculo M = D * B * d_e manualmente
# en cada centroide (igual que validacion/python-fem/plate_thin_skfem.py).
# ----------------------------------------------------------------------
D_b = E_mod * t_pl**3 / (12.0 * (1.0 - nu**2)) * np.array([
    [1.0, nu,  0.0],
    [nu,  1.0, 0.0],
    [0.0, 0.0, 0.5 * (1.0 - nu)],
])

def shape_dN(xi, eta):
    XI  = np.array([-1.0, 1.0, 1.0, -1.0])
    ETA = np.array([-1.0, -1.0, 1.0, 1.0])
    dN = np.zeros((4, 2))
    dN[:, 0] = 0.25 * XI  * (1.0 + ETA * eta)
    dN[:, 1] = 0.25 * ETA * (1.0 + XI  * xi)
    return dN

# Para Mindlin: M_xx = -D * d(beta_x)/dx, etc.
# OpenSees DOF order shell: UX UY UZ RX RY RZ
# Rotaciones: para shell con conv. derecha, beta_x = -RY, beta_y = RX (kinematic)
# Asi kappa_xx = d(beta_x)/dx = -d(RY)/dx
n_e = len(element_conn)
Mxx_e = np.zeros(n_e)
Myy_e = np.zeros(n_e)
Mxy_e = np.zeros(n_e)

for e_idx, conn in enumerate(element_conn):
    nc = coords[[t - 1 for t in conn]]
    # Rotaciones en cada nodo (RX, RY)
    # En convención plate, beta_x = -RY (positivo si placa rota alrededor de Y), beta_y = RX
    bx = np.array([-ops.nodeDisp(t, 5) for t in conn])  # -RY
    by = np.array([ ops.nodeDisp(t, 4) for t in conn])  # +RX
    # Jacobiano en xi=eta=0
    dN = shape_dN(0.0, 0.0)
    J = dN.T @ nc[:, :2]
    detJ = J[0,0]*J[1,1] - J[0,1]*J[1,0]
    Jinv = np.array([[J[1,1], -J[0,1]], [-J[1,0], J[0,0]]]) / detJ
    dNdx = dN @ Jinv.T
    # Curvaturas en el centroide
    kxx = np.sum(dNdx[:, 0] * bx)
    kyy = np.sum(dNdx[:, 1] * by)
    kxy = np.sum(dNdx[:, 1] * bx) + np.sum(dNdx[:, 0] * by)
    kappa = np.array([kxx, kyy, kxy])
    M = D_b @ kappa
    Mxx_e[e_idx], Myy_e[e_idx], Mxy_e[e_idx] = M[0], M[1], M[2]

# ----------------------------------------------------------------------
# Solucion analitica Navier (Timoshenko 1959)
# ----------------------------------------------------------------------
def navier_w(a, b, q_val, D_flex, x, y, n_terms=49):
    w_sum = 0.0
    for m in range(1, n_terms + 1, 2):
        for n in range(1, n_terms + 1, 2):
            amn = (m * np.pi / a)**2 + (n * np.pi / b)**2
            qmn = 16.0 * q_val / (np.pi**2 * m * n)
            w_sum += qmn / (D_flex * amn**2) * np.sin(m*np.pi*x/a) * np.sin(n*np.pi*y/b)
    return w_sum

def navier_Mxx(a, b, q_val, D_flex, nu_v, x, y, n_terms=49):
    Mx = 0.0
    for m in range(1, n_terms + 1, 2):
        for n in range(1, n_terms + 1, 2):
            am = m * np.pi / a
            an = n * np.pi / b
            amn = am**2 + an**2
            qmn = 16.0 * q_val / (np.pi**2 * m * n)
            w_mn = qmn / (D_flex * amn**2)
            Mx += D_flex * (am**2 + nu_v * an**2) * w_mn * np.sin(m*np.pi*x/a) * np.sin(n*np.pi*y/b)
    return Mx

D_flex = E_mod * t_pl**3 / (12.0 * (1 - nu**2))
cx, cy = Lx / 2.0, Ly / 2.0
w_nav  = navier_w(Lx, Ly, q_load, D_flex, cx, cy)
Mx_nav = navier_Mxx(Lx, Ly, q_load, D_flex, nu, cx, cy)

err_w = abs((abs(w_center) - w_nav) / w_nav) * 100.0
err_M = abs((max(abs(Mxx_e)) - Mx_nav) / Mx_nav) * 100.0

# Hekatan-fem WASM (valor de referencia hardcoded en test_plate_q4_validation.py)
wasm_ref = -1.881942e-2

print()
print("  RESULTADOS")
print("-" * 72)
print(f"  {'Metrica':<24} {'OpenSees':>16} {'Navier':>16} {'Hekatan WASM':>16} {'Err vs Nav':>10}")
print(f"  {'-'*24} {'-'*16} {'-'*16} {'-'*16} {'-'*10}")
print(f"  {'w_center (m)':<24} {w_center:>16.6e} {-w_nav:>16.6e} {wasm_ref:>16.6e} {err_w:>9.2f}%")
print(f"  {'|Mxx|_max (kNm/m)':<24} {max(abs(Mxx_e)):>16.4f} {Mx_nav:>16.4f} {'47.887':>16} {err_M:>9.2f}%")
print(f"  {'|Myy|_max (kNm/m)':<24} {max(abs(Myy_e)):>16.4f}")
print(f"  {'|Mxy|_max (kNm/m)':<24} {max(abs(Mxy_e)):>16.4f}")

# ----------------------------------------------------------------------
# Renderizado PNGs
# ----------------------------------------------------------------------
os.makedirs("figs", exist_ok=True)
sap_cmap = matplotlib.colors.LinearSegmentedColormap.from_list("sap2000", [
    "#0000FF", "#0080FF", "#00FFFF", "#00FF80", "#00FF00",
    "#80FF00", "#FFFF00", "#FF8000", "#FF0000",
])

# Fig 1: mallado
fig, ax = plt.subplots(figsize=(7, 7))
for conn in element_conn:
    pts_idx = [c - 1 for c in conn]
    pts = coords[pts_idx + [pts_idx[0]]]
    ax.plot(pts[:, 0], pts[:, 1], "b-", lw=0.6)
ax.plot(coords[:, 0], coords[:, 1], "ko", ms=2)
for (i, j), tag in node_id_map.items():
    if i == 0 or i == nx or j == 0 or j == ny:
        ax.plot(coords[tag-1, 0], coords[tag-1, 1], "rs", ms=5)
ax.set_aspect("equal")
ax.set_xlabel("x [m]"); ax.set_ylabel("y [m]")
ax.set_title(f"Mallado ShellMITC4 — {nx}×{ny} = {n_elems} elementos, {n_nodes} nodos\n"
             f"rojo = SS (UZ=0)")
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("figs/plate_thin_ops_mesh.png", dpi=140)
plt.close()

# Fig 2: deflexion
X_grid = np.linspace(0, Lx, nx + 1)
Y_grid = np.linspace(0, Ly, ny + 1)
XG, YG = np.meshgrid(X_grid, Y_grid)
W_mm = w_grid * 1000.0

fig = plt.figure(figsize=(14, 6))
ax1 = fig.add_subplot(121, projection="3d")
ax1.plot_surface(XG, YG, W_mm, cmap=sap_cmap, edgecolor="k", lw=0.2)
ax1.set_xlabel("x [m]"); ax1.set_ylabel("y [m]"); ax1.set_zlabel("w [mm]")
ax1.set_title("Deflexion w(x,y) — ShellMITC4")
ax2 = fig.add_subplot(122)
cf = ax2.contourf(XG, YG, W_mm, levels=20, cmap=sap_cmap)
ax2.set_aspect("equal")
ax2.set_xlabel("x [m]"); ax2.set_ylabel("y [m]")
ax2.set_title(f"Contour w  |  w_center = {w_center*1000:.3f} mm  |  Navier = {-w_nav*1000:.3f} mm  |  err = {err_w:.2f}%")
plt.colorbar(cf, ax=ax2, label="w [mm]")
plt.tight_layout()
plt.savefig("figs/plate_thin_ops_deflection.png", dpi=140)
plt.close()

# Fig 3: momentos contour
EX_c = np.array([np.mean(coords[[c-1 for c in conn], 0]) for conn in element_conn]).reshape((ny, nx))
EY_c = np.array([np.mean(coords[[c-1 for c in conn], 1]) for conn in element_conn]).reshape((ny, nx))
Mxx_grid = Mxx_e.reshape((ny, nx))
Myy_grid = Myy_e.reshape((ny, nx))
Mxy_grid = Mxy_e.reshape((ny, nx))

fig, axs = plt.subplots(1, 3, figsize=(18, 5.5))
for ax, M, name in [(axs[0], Mxx_grid, "Mxx"),
                     (axs[1], Myy_grid, "Myy"),
                     (axs[2], Mxy_grid, "Mxy")]:
    cf = ax.contourf(EX_c, EY_c, M, levels=20, cmap=sap_cmap)
    ax.set_aspect("equal")
    ax.set_xlabel("x [m]"); ax.set_ylabel("y [m]")
    ax.set_title(f"{name}  |  |{name}|max = {np.max(np.abs(M)):.3f} kN·m/m")
    plt.colorbar(cf, ax=ax, label="kN·m/m")
fig.suptitle(f"Momentos OpenSees ShellMITC4 — Mxx Navier = {Mx_nav:.3f}, err = {err_M:.2f}%", fontsize=11)
plt.tight_layout()
plt.savefig("figs/plate_thin_ops_moments.png", dpi=140)
plt.close()

# Fig 4: tabla resumen
fig, ax = plt.subplots(figsize=(11, 5))
ax.axis("off")
table_data = [
    ["Solver", "OpenSeesPy ShellMITC4"],
    ["Placa", f"{Lx}×{Ly} m"],
    ["Espesor", f"{t_pl} m  (Lx/t = {Lx/t_pl:.0f}, thin)"],
    ["Material", f"E = {E_mod/1e6:.0f} GPa, ν = {nu}"],
    ["Carga", f"q = {q_load} kN/m² ↓"],
    ["Mesh", f"{nx}×{ny} = {n_elems} elementos ({n_nodes} nodos)"],
    ["BC", "Simply supported 4 bordes (UZ=0 + esquinas UX/UY)"],
    ["", ""],
    ["w_center (OpenSees)", f"{w_center*1000:.4f} mm"],
    ["w_center (Navier exacto)", f"{-w_nav*1000:.4f} mm"],
    ["w_center (Hekatan WASM)", f"{wasm_ref*1000:.4f} mm"],
    ["Error vs Navier", f"{err_w:.3f} %"],
    ["", ""],
    ["|Mxx|_max (OpenSees)", f"{max(abs(Mxx_e)):.3f} kN·m/m"],
    ["Mxx_center (Navier)", f"{Mx_nav:.3f} kN·m/m"],
    ["Error vs Navier", f"{err_M:.3f} %"],
]
table = ax.table(cellText=table_data, colLabels=["Parametro", "Valor"],
                 loc="center", cellLoc="left", colWidths=[0.4, 0.45])
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1, 1.6)
ax.set_title("Plate Thin (OpenSees ShellMITC4) — Validacion cruzada", fontsize=12, pad=20)
plt.tight_layout()
plt.savefig("figs/plate_thin_ops_summary.png", dpi=140)
plt.close()

print()
print("  PNGs generados:")
print(f"    figs/plate_thin_ops_mesh.png")
print(f"    figs/plate_thin_ops_deflection.png")
print(f"    figs/plate_thin_ops_moments.png")
print(f"    figs/plate_thin_ops_summary.png")
print("=" * 72)
