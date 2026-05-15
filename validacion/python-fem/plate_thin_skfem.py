"""
========================================================================
 Plate Thin (Kirchhoff) — Python puro (numpy + matplotlib)
 Track: validacion/python-fem/
========================================================================

 Elemento: Q4 Mindlin-Reissner con Selective Reduced Integration (SRI)
   - Bending: Gauss 2x2 (full)
   - Shear:   Gauss 1x1 (reduced) -> evita shear locking en placas thin

 Caso canonico (mismo que test_plate_q4_validation.py del root):
   Placa 10x10 m, t = 0.20 m (Lx/t = 50 -> regimen "thin")
   E = 30 GPa, nu = 0.3, q = 10 kN/m^2, mesh 16x16, SS en 4 bordes
   Solucion analitica: Navier series (Timoshenko 1959, Cap. 5)

 Salidas:
   - figs/plate_thin_skfem_mesh.png       : mallado Q4 + BC + carga
   - figs/plate_thin_skfem_deflection.png : w(x,y) contour + surface
   - figs/plate_thin_skfem_moments.png    : Mxx, Myy, Mxy contours
   - figs/plate_thin_skfem_summary.png    : tabla resumen Q4 vs Navier
   - stdout: comparacion completa

 Referencias:
   - Bathe, Finite Element Procedures (1996), Cap. 5.4
   - Timoshenko & Woinowsky-Krieger, Theory of Plates and Shells (1959), Cap. 5

 Ejecutar:  python plate_thin_skfem.py
========================================================================
"""

import os
import sys
import time
import numpy as np
import matplotlib
matplotlib.use("Agg")  # backend sin display (igual que MATLAB -nodesktop)

# Forzar UTF-8 en stdout/stderr (Windows console default es cp1252)
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
import matplotlib.pyplot as plt
from scipy.sparse import lil_matrix
from scipy.sparse.linalg import spsolve

# ----------------------------------------------------------------------
# Parametros del problema (igual a test_plate_q4_validation.py)
# ----------------------------------------------------------------------
Lx, Ly  = 10.0, 10.0
nx, ny  = 16, 16
E_mod   = 30e6           # kN/m^2  (30 GPa)
nu      = 0.3
t_pl    = 0.20           # m  -> Lx/t = 50  (thin)
q_load  = -10.0          # kN/m^2  (descendente)
kappa   = 5.0 / 6.0      # shear correction factor (Mindlin)

# ----------------------------------------------------------------------
# Malla rectangular Q4 (column-major no, aqui row-major)
# ----------------------------------------------------------------------
dx, dy   = Lx / nx, Ly / ny
n_nodes  = (nx + 1) * (ny + 1)
n_elems  = nx * ny
n_dof    = 3 * n_nodes  # w, beta_x, beta_y por nodo

coords = np.zeros((n_nodes, 2))
for j in range(ny + 1):
    for i in range(nx + 1):
        nid = j * (nx + 1) + i
        coords[nid] = [i * dx, j * dy]

elements = np.zeros((n_elems, 4), dtype=int)
for j in range(ny):
    for i in range(nx):
        eid = j * nx + i
        n1 = j * (nx + 1) + i
        n2 = n1 + 1
        n3 = n2 + (nx + 1)
        n4 = n1 + (nx + 1)
        elements[eid] = [n1, n2, n3, n4]

# ----------------------------------------------------------------------
# Funciones de forma Q4 bilineal en coords naturales (xi, eta) en [-1, 1]
# ----------------------------------------------------------------------
XI  = np.array([-1.0, 1.0, 1.0, -1.0])
ETA = np.array([-1.0, -1.0, 1.0, 1.0])

def shape_N(xi, eta):
    return 0.25 * (1 + XI * xi) * (1 + ETA * eta)

def shape_dN(xi, eta):
    dN = np.zeros((4, 2))
    dN[:, 0] = 0.25 * XI  * (1 + ETA * eta)
    dN[:, 1] = 0.25 * ETA * (1 + XI  * xi)
    return dN

# ----------------------------------------------------------------------
# Matrices constitutivas
# ----------------------------------------------------------------------
D0 = E_mod * t_pl**3 / (12.0 * (1 - nu**2))
Db = D0 * np.array([
    [1,  nu, 0],
    [nu, 1,  0],
    [0,  0,  0.5 * (1 - nu)],
])
G_mod = E_mod / (2.0 * (1 + nu))
Ds = kappa * G_mod * t_pl * np.eye(2)

# ----------------------------------------------------------------------
# Cuadratura de Gauss
# ----------------------------------------------------------------------
gp = 1.0 / np.sqrt(3.0)
gauss_2x2 = [(-gp, -gp, 1.0), (gp, -gp, 1.0), (gp, gp, 1.0), (-gp, gp, 1.0)]
gauss_1x1 = [(0.0, 0.0, 4.0)]

# ----------------------------------------------------------------------
# Helpers FEM
# ----------------------------------------------------------------------
def jacobian(nc, dN):
    J = dN.T @ nc                       # (2 x 2)
    detJ = J[0, 0] * J[1, 1] - J[0, 1] * J[1, 0]
    Jinv = np.array([[ J[1, 1], -J[0, 1]],
                     [-J[1, 0],  J[0, 0]]]) / detJ
    return J, Jinv, detJ

def phys_derivs(dN, Jinv):
    return dN @ Jinv.T                  # (4 x 2)

def bending_B(dNdx):
    """3x12 strain-displacement bending (kappa_xx, kappa_yy, kappa_xy)."""
    Bb = np.zeros((3, 12))
    for i in range(4):
        Bb[0, 3*i + 1] = dNdx[i, 0]     # d(bx)/dx
        Bb[1, 3*i + 2] = dNdx[i, 1]     # d(by)/dy
        Bb[2, 3*i + 1] = dNdx[i, 1]     # d(bx)/dy
        Bb[2, 3*i + 2] = dNdx[i, 0]     # d(by)/dx
    return Bb

def shear_B(N, dNdx):
    """2x12 strain-displacement shear (gamma_xz, gamma_yz)."""
    Bs = np.zeros((2, 12))
    for i in range(4):
        Bs[0, 3*i]     =  dNdx[i, 0]    # dw/dx
        Bs[0, 3*i + 1] = -N[i]          # -bx
        Bs[1, 3*i]     =  dNdx[i, 1]    # dw/dy
        Bs[1, 3*i + 2] = -N[i]          # -by
    return Bs

def element_stiffness(nc):
    Ke = np.zeros((12, 12))
    for xi, eta, w_gp in gauss_2x2:
        dN = shape_dN(xi, eta)
        _, Jinv, detJ = jacobian(nc, dN)
        dNdx = phys_derivs(dN, Jinv)
        Bb = bending_B(dNdx)
        Ke += w_gp * detJ * (Bb.T @ Db @ Bb)
    for xi, eta, w_gp in gauss_1x1:
        N = shape_N(xi, eta)
        dN = shape_dN(xi, eta)
        _, Jinv, detJ = jacobian(nc, dN)
        dNdx = phys_derivs(dN, Jinv)
        Bs = shear_B(N, dNdx)
        Ke += w_gp * detJ * (Bs.T @ Ds @ Bs)
    return Ke

def element_load(nc, q):
    fe = np.zeros(12)
    for xi, eta, w_gp in gauss_2x2:
        N = shape_N(xi, eta)
        dN = shape_dN(xi, eta)
        _, _, detJ = jacobian(nc, dN)
        for i in range(4):
            fe[3*i] += N[i] * q * detJ * w_gp
    return fe

def element_moments(nc, d_e):
    """Mxx, Myy, Mxy en centro de elemento."""
    dN = shape_dN(0.0, 0.0)
    _, Jinv, _ = jacobian(nc, dN)
    dNdx = phys_derivs(dN, Jinv)
    Bb = bending_B(dNdx)
    kappa_v = Bb @ d_e
    return Db @ kappa_v   # (Mxx, Myy, Mxy)

# ----------------------------------------------------------------------
# Ensamblaje global
# ----------------------------------------------------------------------
print("=" * 72)
print("  PLATE THIN — Python puro (scikit-fem / numpy)")
print("=" * 72)
print(f"  Placa     : {Lx} x {Ly} m, t = {t_pl} m  (Lx/t = {Lx/t_pl:.0f})")
print(f"  Material  : E = {E_mod/1e6:.0f} GPa, nu = {nu}")
print(f"  Carga     : q = {abs(q_load)} kN/m^2 ↓")
print(f"  Mesh      : {nx} x {ny} = {n_elems} elementos Q4 ({n_nodes} nodos, {n_dof} GDL)")
print(f"  BC        : Simply supported (w = 0 en 4 bordes)")
print(f"  Solver    : Mindlin-Reissner Q4 con SRI (Bath Cap. 5.4)")
print(f"  Analitico : Navier series (Timoshenko 1959, Cap. 5)")
print("=" * 72)

t0 = time.perf_counter()
K = lil_matrix((n_dof, n_dof))
F = np.zeros(n_dof)
for e in range(n_elems):
    elem = elements[e]
    nc   = coords[elem]
    Ke   = element_stiffness(nc)
    fe   = element_load(nc, q_load)
    dof_map = [3 * ni + d for ni in elem for d in range(3)]
    for ii in range(12):
        F[dof_map[ii]] += fe[ii]
        for jj in range(12):
            K[dof_map[ii], dof_map[jj]] += Ke[ii, jj]
K = K.tocsr()
t_asm = time.perf_counter() - t0
print(f"  Ensamblaje: {t_asm*1000:.1f} ms  ({K.nnz} entradas no-cero)")

# ----------------------------------------------------------------------
# BC: simply supported (w = 0) en 4 bordes via penalty
# ----------------------------------------------------------------------
penalty = 1e20
K_pen = K.tolil()
n_bc = 0
for i in range(n_nodes):
    x, y = coords[i]
    if x < 1e-9 or x > Lx - 1e-9 or y < 1e-9 or y > Ly - 1e-9:
        K_pen[3*i, 3*i] += penalty
        n_bc += 1
K_pen = K_pen.tocsr()
print(f"  BC        : {n_bc} nodos con w=0 (4 bordes)")

# ----------------------------------------------------------------------
# Solve
# ----------------------------------------------------------------------
t0 = time.perf_counter()
u = spsolve(K_pen, F)
t_solve = time.perf_counter() - t0
print(f"  Solve     : {t_solve*1000:.1f} ms")

# ----------------------------------------------------------------------
# Post-procesamiento
# ----------------------------------------------------------------------
w = u[0::3]                    # vector w en cada nodo
cx, cy = Lx / 2, Ly / 2
idx_center = np.argmin(np.linalg.norm(coords - [cx, cy], axis=1))
w_center = u[3 * idx_center]
w_min = w.min()

# Momentos por elemento (centroide)
Mxx_el = np.zeros(n_elems)
Myy_el = np.zeros(n_elems)
Mxy_el = np.zeros(n_elems)
for e in range(n_elems):
    elem = elements[e]
    nc   = coords[elem]
    d_e  = np.array([u[3*ni + d] for ni in elem for d in range(3)])
    M    = element_moments(nc, d_e)
    Mxx_el[e], Myy_el[e], Mxy_el[e] = M[0], M[1], M[2]

# ----------------------------------------------------------------------
# Solucion analitica Navier (Timoshenko 1959, eq. 132)
#   w(x,y) = 16q/(pi^6 D) * sum_{m,n impares} sin(m pi x/a) sin(n pi y/b)
#            / ( mn ((m/a)^2 + (n/b)^2)^2 )
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
w_nav  = navier_w(Lx, Ly, abs(q_load), D_flex, cx, cy)
Mx_nav = navier_Mxx(Lx, Ly, abs(q_load), D_flex, nu, cx, cy)

err_w = abs((abs(w_center) - w_nav) / w_nav) * 100
err_M = abs((max(abs(Mxx_el)) - Mx_nav) / Mx_nav) * 100

print()
print("  RESULTADOS")
print("-" * 72)
print(f"  {'Metrica':<22} {'Q4 (skfem)':>18} {'Navier (analit)':>18} {'Error %':>10}")
print(f"  {'-'*22} {'-'*18} {'-'*18} {'-'*10}")
print(f"  {'w_center (m)':<22} {w_center:>18.6e} {-w_nav:>18.6e} {err_w:>9.2f}")
print(f"  {'|Mxx|_max (kNm/m)':<22} {max(abs(Mxx_el)):>18.4f} {Mx_nav:>18.4f} {err_M:>9.2f}")
print(f"  {'|Myy|_max (kNm/m)':<22} {max(abs(Myy_el)):>18.4f}")
print(f"  {'|Mxy|_max (kNm/m)':<22} {max(abs(Mxy_el)):>18.4f}")

# ----------------------------------------------------------------------
# Renderizado PNG (matplotlib + savefig — patron render-and-read)
# ----------------------------------------------------------------------
os.makedirs("figs", exist_ok=True)

# Reshape w para plot
W_grid = w.reshape((ny + 1, nx + 1)) * 1000.0   # mm
X_grid = coords[:, 0].reshape((ny + 1, nx + 1))
Y_grid = coords[:, 1].reshape((ny + 1, nx + 1))

# Reshape momentos por elemento (centro de cada elem)
elem_cx = np.array([np.mean(coords[el, 0]) for el in elements])
elem_cy = np.array([np.mean(coords[el, 1]) for el in elements])
Mxx_grid = Mxx_el.reshape((ny, nx))
Myy_grid = Myy_el.reshape((ny, nx))
Mxy_grid = Mxy_el.reshape((ny, nx))
EX_c = elem_cx.reshape((ny, nx))
EY_c = elem_cy.reshape((ny, nx))

sap_cmap = matplotlib.colors.LinearSegmentedColormap.from_list("sap2000", [
    "#0000FF", "#0080FF", "#00FFFF", "#00FF80", "#00FF00",
    "#80FF00", "#FFFF00", "#FF8000", "#FF0000",
])

# --- Fig 1: mallado ---
fig, ax = plt.subplots(figsize=(7, 7))
for el in elements:
    pts = coords[list(el) + [el[0]]]
    ax.plot(pts[:, 0], pts[:, 1], "b-", lw=0.6)
ax.plot(coords[:, 0], coords[:, 1], "ko", ms=2)
# Resaltar nodos con BC (rojo)
for i in range(n_nodes):
    x, y = coords[i]
    if x < 1e-9 or x > Lx - 1e-9 or y < 1e-9 or y > Ly - 1e-9:
        ax.plot(x, y, "rs", ms=5, mfc="r")
ax.set_aspect("equal")
ax.set_xlabel("x [m]"); ax.set_ylabel("y [m]")
ax.set_title(f"Mallado Q4 — {nx}×{ny} = {n_elems} elementos, {n_nodes} nodos\n"
             f"rojo = SS (w=0) | flecha = q={abs(q_load)} kN/m² uniforme",
             fontsize=10)
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("figs/plate_thin_skfem_mesh.png", dpi=140)
plt.close()

# --- Fig 2: deflexion (surface + contour side by side) ---
fig = plt.figure(figsize=(14, 6))
ax1 = fig.add_subplot(121, projection="3d")
ax1.plot_surface(X_grid, Y_grid, W_grid, cmap=sap_cmap, edgecolor="k", lw=0.2)
ax1.set_xlabel("x [m]"); ax1.set_ylabel("y [m]"); ax1.set_zlabel("w [mm]")
ax1.set_title("Deflexion w(x,y)  (Mindlin Q4 SRI)")

ax2 = fig.add_subplot(122)
cf = ax2.contourf(X_grid, Y_grid, W_grid, levels=20, cmap=sap_cmap)
ax2.set_aspect("equal")
ax2.set_xlabel("x [m]"); ax2.set_ylabel("y [m]")
ax2.set_title(f"Contour w  |  w_center = {w_center*1000:.3f} mm  |  Navier = {-w_nav*1000:.3f} mm  |  err = {err_w:.2f}%")
plt.colorbar(cf, ax=ax2, label="w [mm]")
plt.tight_layout()
plt.savefig("figs/plate_thin_skfem_deflection.png", dpi=140)
plt.close()

# --- Fig 3: momentos contour ---
fig, axs = plt.subplots(1, 3, figsize=(18, 5.5))
for ax, M, name in [(axs[0], Mxx_grid, "Mxx"),
                     (axs[1], Myy_grid, "Myy"),
                     (axs[2], Mxy_grid, "Mxy")]:
    cf = ax.contourf(EX_c, EY_c, M, levels=20, cmap=sap_cmap)
    ax.set_aspect("equal")
    ax.set_xlabel("x [m]"); ax.set_ylabel("y [m]")
    ax.set_title(f"{name}  |  |{name}|max = {np.max(np.abs(M)):.3f} kN·m/m")
    plt.colorbar(cf, ax=ax, label="kN·m/m")
fig.suptitle(f"Momentos flectores (Mindlin Q4 SRI) — Mxx Navier = {Mx_nav:.3f}, err = {err_M:.2f}%",
             fontsize=11)
plt.tight_layout()
plt.savefig("figs/plate_thin_skfem_moments.png", dpi=140)
plt.close()

# --- Fig 4: tabla resumen ---
fig, ax = plt.subplots(figsize=(10, 4))
ax.axis("off")
table_data = [
    ["Placa", f"{Lx}×{Ly} m"],
    ["Espesor", f"{t_pl} m  (Lx/t = {Lx/t_pl:.0f})"],
    ["Material", f"E = {E_mod/1e6:.0f} GPa, ν = {nu}"],
    ["Carga", f"q = {abs(q_load)} kN/m²"],
    ["Mesh", f"{nx}×{ny} Q4 ({n_elems} elementos, {n_nodes} nodos)"],
    ["BC", "Simply supported 4 bordes"],
    ["", ""],
    ["w_center (skfem)", f"{w_center*1000:.4f} mm"],
    ["w_center (Navier)", f"{-w_nav*1000:.4f} mm"],
    ["Error w", f"{err_w:.3f} %"],
    ["", ""],
    ["|Mxx|_max (skfem)", f"{max(abs(Mxx_el)):.3f} kN·m/m"],
    ["Mxx_center (Navier)", f"{Mx_nav:.3f} kN·m/m"],
    ["Error Mxx", f"{err_M:.3f} %"],
]
table = ax.table(cellText=table_data, colLabels=["Parametro", "Valor"],
                 loc="center", cellLoc="left", colWidths=[0.4, 0.45])
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1, 1.6)
ax.set_title("Plate Thin (Mindlin Q4 SRI) — Resumen\nValidacion vs Navier (Timoshenko 1959)", fontsize=12)
plt.tight_layout()
plt.savefig("figs/plate_thin_skfem_summary.png", dpi=140)
plt.close()

print()
print("  PNGs generados:")
print(f"    figs/plate_thin_skfem_mesh.png")
print(f"    figs/plate_thin_skfem_deflection.png")
print(f"    figs/plate_thin_skfem_moments.png")
print(f"    figs/plate_thin_skfem_summary.png")
print("=" * 72)
