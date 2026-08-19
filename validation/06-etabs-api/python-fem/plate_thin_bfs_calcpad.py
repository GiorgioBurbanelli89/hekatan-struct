"""
========================================================================
 Plate Thin Q4-BFS (Bogner-Fox-Schmit) — REPLICA EXACTA de Calcpad
 Track: validacion/python-fem/
========================================================================

 Elemento: Q4 conformante con 4 GDL por nodo:
   (w, theta_x = dw/dx, theta_y = dw/dy, psi = d2w/dx_dy)
 16 GDL/elemento. Shape functions Hermiticas cubicas (producto tensorial).
 Esto es EXACTAMENTE lo que usa Calcpad en su Rectangular Slab FEA.cpd.

 Caso (identico al Calcpad-oficial/Examples/Mechanics/Finite Elements/
        Rectangular Slab FEA.cpd):
   a = 6 m  (X)
   b = 4 m  (Y)
   t = 0.1 m
   E = 35000 MPa = 35e6 kN/m^2
   nu = 0.15
   q = 10 kN/m^2 uniforme descendente
   Mesh: n_a = 6, n_b = 4 (24 elementos, 35 nodos)
   BC: Simply supported los 4 bordes (w = 0)

 Resultados esperados (de PNGs Calcpad extraidos):
   w_max  = -6.63 mm  (al centro)
   |Mx|_max  = 6.32 kN*m/m
   |My|_max  = 12.74 kN*m/m
   |Mxy|_max = 8.38 kN*m/m

 Salidas:
   figs/plate_thin_bfs_mesh.png
   figs/plate_thin_bfs_deflection.png
   figs/plate_thin_bfs_moments.png
   figs/plate_thin_bfs_summary.png
========================================================================
"""
import os
import sys
import time
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy.sparse import lil_matrix
from scipy.sparse.linalg import spsolve
from scipy.interpolate import RectBivariateSpline

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# ----------------------------------------------------------------------
# PARAMETROS DEL CASO (igual que Calcpad)
# ----------------------------------------------------------------------
a, b    = 6.0, 4.0          # m
t_pl    = 0.10              # m
q_load  = 10.0              # kN/m^2  (positivo: el signo se aplica abajo)
E_mod   = 35e6              # kN/m^2  (35 GPa)
nu      = 0.15

n_a, n_b = 6, 4
n_e   = n_a * n_b
n_j   = (n_a + 1) * (n_b + 1)
a_1   = a / n_a
b_1   = b / n_b
n_dof = 4                   # w, theta_x, theta_y, psi
n_k   = n_dof * 4           # 16 DOF / elemento
n_g   = n_dof * n_j

print("=" * 72)
print("  Plate Thin Q4-BFS (Hermiticas cubicas) — Python — replica Calcpad")
print("=" * 72)
print(f"  Placa     : {a} x {b} m, t = {t_pl} m")
print(f"  Material  : E = {E_mod/1e6:.0f} GPa, nu = {nu}")
print(f"  Carga     : q = {q_load} kN/m^2 (descendente)")
print(f"  Mesh      : {n_a} x {n_b} = {n_e} elementos Q4-BFS ({n_j} nodos, {n_g} GDL)")
print(f"  BC        : Simply supported (w = 0 en 4 bordes)")
print(f"  Elemento  : Q4-BFS, 4 GDL/nodo (w, dw/dx, dw/dy, d2w/dxdy), 16 GDL/elem")
print("=" * 72)

# ----------------------------------------------------------------------
# MESH — column-major (igual que el .cpd Calcpad: y inner, x outer)
# ----------------------------------------------------------------------
x_j = np.zeros(n_j)
y_j = np.zeros(n_j)
x = 0.0
y = 0.0
for j in range(n_j):
    x_j[j] = x
    y_j[j] = y
    y += b_1
    if y > b + 1e-9:
        y = 0.0
        x += a_1

# Connectivity Q4 CCW (1-indexed in MATLAB/Calcpad, here 0-indexed)
e_j = np.zeros((n_e, 4), dtype=int)
for ia in range(n_a):
    for ib in range(n_b):
        e = ib + n_b * ia
        j_corner = e + ia
        e_j[e, 0] = j_corner
        e_j[e, 1] = j_corner + n_b + 1
        e_j[e, 2] = j_corner + n_b + 2
        e_j[e, 3] = j_corner + 1

# Supported joints (4 bordes)
sj_set = set()
# Borde X=0: nodos 0, 1, ..., n_b
for j in range(n_b + 1):
    sj_set.add(j)
# Borde X=a: nodos n_a*(n_b+1) .. (n_a+1)*(n_b+1) - 1
for j in range(n_b + 1):
    sj_set.add(n_a * (n_b + 1) + j)
# Borde Y=0: nodos i*(n_b+1) for i in 0..n_a
for i in range(n_a + 1):
    sj_set.add(i * (n_b + 1))
# Borde Y=b: nodos i*(n_b+1) + n_b
for i in range(n_a + 1):
    sj_set.add(i * (n_b + 1) + n_b)
s_j = sorted(sj_set)
print(f"  Nodos en bordes: {len(s_j)}  (esperado: 2*(n_a + n_b) = {2*(n_a + n_b)})")

# ----------------------------------------------------------------------
# Constitutive matrix (Kirchhoff bending)
# ----------------------------------------------------------------------
D = E_mod * t_pl**3 / (12.0 * (1 - nu**2)) * np.array([
    [1.0, nu,  0.0],
    [nu,  1.0, 0.0],
    [0.0, 0.0, 0.5 * (1 - nu)],
])
print(f"  D (rigidez flexural) = {D[0,0]:.3f} kN*m")

# ----------------------------------------------------------------------
# Hermitian shape functions on x in [0, 1], scaled by length l.
# Definicion (igual a MATLAB Rectangular_Slab_FEA.m, basadas en Calcpad):
#   Phi_1l(x) = 1 - x^2*(3 - 2x)        valor en nodo izq, w
#   Phi_2l(x) = x*l*(1 - x*(2 - x))     dw/dx en nodo izq
#   Phi_3l(x) = x^2*(3 - 2x)            valor en nodo der, w
#   Phi_4l(x) = x^2*l*(x - 1)           dw/dx en nodo der
# ----------------------------------------------------------------------

def shape_2nd_deriv_along(xi, l):
    """Phi'' (second derivative w.r.t. x for length l)"""
    return (
        -(6.0/l**2)*(1 - 2*xi),
        -(2.0/l)*(2 - 3*xi),
         (6.0/l**2)*(1 - 2*xi),
        -(2.0/l)*(1 - 3*xi),
    )

def shape_1st_deriv_along(xi, l):
    """Phi' (first derivative w.r.t. x for length l)"""
    return (
        -6.0*(xi/l)*(1 - xi),
         1.0 - xi*(4 - 3*xi),
         6.0*(xi/l)*(1 - xi),
        -xi*(2 - 3*xi),
    )

def shape_along(xi, l):
    """Phi value"""
    return (
        1.0 - xi**2*(3 - 2*xi),
        xi*l*(1 - xi*(2 - xi)),
        xi**2*(3 - 2*xi),
        xi**2*l*(xi - 1),
    )

# ----------------------------------------------------------------------
# Gauss-Legendre 4x4 quadrature on [0, 1]
# ----------------------------------------------------------------------
gp = np.array([0.0694318442029737, 0.3300094782075719,
               0.6699905217924281, 0.9305681557970263])
gw = np.array([0.1739274225687269, 0.3260725774312731,
               0.3260725774312731, 0.1739274225687269])

# ----------------------------------------------------------------------
# K_e: 16x16 element stiffness (Kirchhoff bending integration)
# B-matrix order: (kappa_x, kappa_y, 2*kappa_xy)
# DOF order per node: (w, theta_x = dw/dx, theta_y = dw/dy, psi = d2w/dxdy)
# 4 nodes per element, so 16 DOF total.
# Node ordering for Q4 BFS:
#   node 1: (xi=0, eta=0) -> (w1, theta_x1, theta_y1, psi1) cols 0..3
#   node 2: (xi=1, eta=0) -> cols 4..7
#   node 3: (xi=1, eta=1) -> cols 8..11
#   node 4: (xi=0, eta=1) -> cols 12..15
# Pero el orden de Calcpad es distinto: 'columns' = 16 GDL armados con
#   col=1..16 segun el MATLAB:
#     idx 1..4   : nodo izq inf (xi=0, eta=0)
#     idx 5..8   : nodo der inf (xi=1, eta=0)
#     idx 9..12  : nodo der sup (xi=1, eta=1)
#     idx 13..16 : nodo izq sup (xi=0, eta=1)
# ----------------------------------------------------------------------
def element_stiffness(a1, b1, D):
    Ke = np.zeros((16, 16))
    for ig in range(4):
        for jg in range(4):
            xi  = gp[ig]
            eta = gp[jg]
            wgt = gw[ig] * gw[jg]
            P1a, P2a, P3a, P4a       = shape_along(xi, a1)
            Pdd1a, Pdd2a, Pdd3a, Pdd4a = shape_2nd_deriv_along(xi, a1)
            Pd1a, Pd2a, Pd3a, Pd4a     = shape_1st_deriv_along(xi, a1)
            P1b, P2b, P3b, P4b       = shape_along(eta, b1)
            Pdd1b, Pdd2b, Pdd3b, Pdd4b = shape_2nd_deriv_along(eta, b1)
            Pd1b, Pd2b, Pd3b, Pd4b     = shape_1st_deriv_along(eta, b1)

            # kappa_x = d2w/dx2
            B1 = np.array([
                Pdd1a*P1b, Pdd2a*P1b, Pdd1a*P2b, Pdd2a*P2b,
                Pdd3a*P1b, Pdd4a*P1b, Pdd3a*P2b, Pdd4a*P2b,
                Pdd3a*P3b, Pdd4a*P3b, Pdd3a*P4b, Pdd4a*P4b,
                Pdd1a*P3b, Pdd2a*P3b, Pdd1a*P4b, Pdd2a*P4b,
            ])
            # kappa_y = d2w/dy2
            B2 = np.array([
                P1a*Pdd1b, P2a*Pdd1b, P1a*Pdd2b, P2a*Pdd2b,
                P3a*Pdd1b, P4a*Pdd1b, P3a*Pdd2b, P4a*Pdd2b,
                P3a*Pdd3b, P4a*Pdd3b, P3a*Pdd4b, P4a*Pdd4b,
                P1a*Pdd3b, P2a*Pdd3b, P1a*Pdd4b, P2a*Pdd4b,
            ])
            # 2*kappa_xy = 2*d2w/dxdy
            B3 = 2 * np.array([
                Pd1a*Pd1b, Pd2a*Pd1b, Pd1a*Pd2b, Pd2a*Pd2b,
                Pd3a*Pd1b, Pd4a*Pd1b, Pd3a*Pd2b, Pd4a*Pd2b,
                Pd3a*Pd3b, Pd4a*Pd3b, Pd3a*Pd4b, Pd4a*Pd4b,
                Pd1a*Pd3b, Pd2a*Pd3b, Pd1a*Pd4b, Pd2a*Pd4b,
            ])
            B = np.vstack([B1, B2, B3])
            Ke += (B.T @ D @ B) * (a1 * b1 * wgt)
    return Ke

def element_load_vector(a1, b1, q):
    fe = np.zeros(16)
    for ig in range(4):
        for jg in range(4):
            xi  = gp[ig]
            eta = gp[jg]
            wgt = gw[ig] * gw[jg]
            P1a, P2a, P3a, P4a = shape_along(xi, a1)
            P1b, P2b, P3b, P4b = shape_along(eta, b1)
            Nshape = np.array([
                P1a*P1b, P2a*P1b, P1a*P2b, P2a*P2b,
                P3a*P1b, P4a*P1b, P3a*P2b, P4a*P2b,
                P3a*P3b, P4a*P3b, P3a*P4b, P4a*P4b,
                P1a*P3b, P2a*P3b, P1a*P4b, P2a*P4b,
            ])
            fe += q * Nshape * (a1 * b1 * wgt)
    return fe

# ----------------------------------------------------------------------
# Assembly global
# ----------------------------------------------------------------------
print("  Ensamblando matriz global...")
t0 = time.perf_counter()

Ke = element_stiffness(a_1, b_1, D)
fe = element_load_vector(a_1, b_1, -q_load)  # carga descendente (-q)

K = lil_matrix((n_g, n_g))
F = np.zeros(n_g)

for e in range(n_e):
    # DOF map: for each local node i (0..3), DOFs are global = n_dof*(e_j[e,i]) + (0..3)
    for i in range(4):
        gi = e_j[e, i]
        for ii in range(4):
            row_glob = n_dof * gi + ii
            row_loc  = 4 * i + ii
            F[row_glob] += fe[row_loc]
            for j in range(4):
                gj = e_j[e, j]
                for jj in range(4):
                    col_glob = n_dof * gj + jj
                    col_loc  = 4 * j + jj
                    K[row_glob, col_glob] += Ke[row_loc, col_loc]

K = K.tocsr()
t_asm = time.perf_counter() - t0
print(f"  Ensamblaje: {t_asm*1000:.1f} ms")

# ----------------------------------------------------------------------
# BC: Simply supported (w=0 en bordes) via penalty
# ----------------------------------------------------------------------
penalty = 1e20
K_pen = K.tolil()
for nd in s_j:
    g = n_dof * nd     # DOF w (= dof index 0 del nodo)
    K_pen[g, g] += penalty
K_pen = K_pen.tocsr()

# ----------------------------------------------------------------------
# Solve K*Z = F
# ----------------------------------------------------------------------
t0 = time.perf_counter()
Z = spsolve(K_pen, F)
t_solve = time.perf_counter() - t0
print(f"  Solve     : {t_solve*1000:.1f} ms")

# ----------------------------------------------------------------------
# Post-process: w at center
# ----------------------------------------------------------------------
# Center: x = a/2, y = b/2
n_center_i = n_a // 2
n_center_j = n_b // 2
n_center   = n_center_i * (n_b + 1) + n_center_j
w_center_m = Z[n_dof * n_center]    # w DOF of center node
print(f"  w_center  = {w_center_m:.6e} m  ({w_center_m*1000:.4f} mm)")

# Maximum w (most negative)
w_all = Z[0::n_dof]
w_max_m = float(w_all.min())
w_max_mm = w_max_m * 1000.0
print(f"  w_max     = {w_max_m:.6e} m  ({w_max_mm:.4f} mm)")

# ----------------------------------------------------------------------
# Bending moments at nodes (avg between neighboring elements, like Calcpad)
# ----------------------------------------------------------------------
# Compute M = -D * B * Z_e at each of the 4 nodes of each element,
# then average per global node across elements.
M_acc = np.zeros((n_j, 3))    # accum (Mx, My, Mxy) por nodo
c_acc = np.zeros(n_j, dtype=int)

# Coordenadas naturales de los 4 nodos del Q4 (en xi,eta in [0,1])
NODE_XI  = [0.0, 1.0, 1.0, 0.0]
NODE_ETA = [0.0, 0.0, 1.0, 1.0]

for e in range(n_e):
    # Extract Z_e for this element (16 values)
    Z_e = np.zeros(16)
    for i in range(4):
        gi = e_j[e, i]
        for ii in range(4):
            Z_e[4*i + ii] = Z[n_dof*gi + ii]

    for k in range(4):
        xi  = NODE_XI[k]
        eta = NODE_ETA[k]
        P1a, P2a, P3a, P4a       = shape_along(xi, a_1)
        Pdd1a, Pdd2a, Pdd3a, Pdd4a = shape_2nd_deriv_along(xi, a_1)
        Pd1a, Pd2a, Pd3a, Pd4a     = shape_1st_deriv_along(xi, a_1)
        P1b, P2b, P3b, P4b       = shape_along(eta, b_1)
        Pdd1b, Pdd2b, Pdd3b, Pdd4b = shape_2nd_deriv_along(eta, b_1)
        Pd1b, Pd2b, Pd3b, Pd4b     = shape_1st_deriv_along(eta, b_1)

        B1 = np.array([
            Pdd1a*P1b, Pdd2a*P1b, Pdd1a*P2b, Pdd2a*P2b,
            Pdd3a*P1b, Pdd4a*P1b, Pdd3a*P2b, Pdd4a*P2b,
            Pdd3a*P3b, Pdd4a*P3b, Pdd3a*P4b, Pdd4a*P4b,
            Pdd1a*P3b, Pdd2a*P3b, Pdd1a*P4b, Pdd2a*P4b,
        ])
        B2 = np.array([
            P1a*Pdd1b, P2a*Pdd1b, P1a*Pdd2b, P2a*Pdd2b,
            P3a*Pdd1b, P4a*Pdd1b, P3a*Pdd2b, P4a*Pdd2b,
            P3a*Pdd3b, P4a*Pdd3b, P3a*Pdd4b, P4a*Pdd4b,
            P1a*Pdd3b, P2a*Pdd3b, P1a*Pdd4b, P2a*Pdd4b,
        ])
        B3 = 2 * np.array([
            Pd1a*Pd1b, Pd2a*Pd1b, Pd1a*Pd2b, Pd2a*Pd2b,
            Pd3a*Pd1b, Pd4a*Pd1b, Pd3a*Pd2b, Pd4a*Pd2b,
            Pd3a*Pd3b, Pd4a*Pd3b, Pd3a*Pd4b, Pd4a*Pd4b,
            Pd1a*Pd3b, Pd2a*Pd3b, Pd1a*Pd4b, Pd2a*Pd4b,
        ])
        B = np.vstack([B1, B2, B3])
        M_node = -D @ B @ Z_e   # (3,)
        global_node = e_j[e, k]
        M_acc[global_node, :] += M_node
        c_acc[global_node] += 1

# Average por nodo
M_nodal = np.zeros((n_j, 3))
for nd in range(n_j):
    if c_acc[nd] > 0:
        M_nodal[nd] = M_acc[nd] / c_acc[nd]

# Max magnitudes nodales (discretos)
Mx_max_disc  = float(np.max(np.abs(M_nodal[:, 0])))
My_max_disc  = float(np.max(np.abs(M_nodal[:, 1])))
Mxy_max_disc = float(np.max(np.abs(M_nodal[:, 2])))

# ----------------------------------------------------------------------
# SPLINES BICUBICAS (igual que Calcpad: M_xy(x;y) = spline(...))
# Construyo splines sobre los grids nodales y evaluo en grilla densa
# para encontrar picos esquineros de Mxy.
# ----------------------------------------------------------------------
Mx_arr_grid  = np.zeros((n_a + 1, n_b + 1))
My_arr_grid  = np.zeros((n_a + 1, n_b + 1))
Mxy_arr_grid = np.zeros((n_a + 1, n_b + 1))
x_axis = np.zeros(n_a + 1)
y_axis = np.zeros(n_b + 1)
for i in range(n_a + 1):
    x_axis[i] = i * a_1
for j in range(n_b + 1):
    y_axis[j] = j * b_1
for i in range(n_a + 1):
    for j in range(n_b + 1):
        nd = i * (n_b + 1) + j
        Mx_arr_grid[i, j]  = M_nodal[nd, 0]
        My_arr_grid[i, j]  = M_nodal[nd, 1]
        Mxy_arr_grid[i, j] = M_nodal[nd, 2]

# RectBivariateSpline orden cubico (kx=ky=3) — igual que Calcpad spline()
spl_Mx  = RectBivariateSpline(x_axis, y_axis, Mx_arr_grid,  kx=3, ky=3)
spl_My  = RectBivariateSpline(x_axis, y_axis, My_arr_grid,  kx=3, ky=3)
spl_Mxy = RectBivariateSpline(x_axis, y_axis, Mxy_arr_grid, kx=3, ky=3)

# Evaluar en grilla densa (200x200)
x_dense = np.linspace(0, a, 200)
y_dense = np.linspace(0, b, 200)
Mx_dense  = spl_Mx (x_dense, y_dense)
My_dense  = spl_My (x_dense, y_dense)
Mxy_dense = spl_Mxy(x_dense, y_dense)

Mx_max  = float(np.max(np.abs(Mx_dense)))
My_max  = float(np.max(np.abs(My_dense)))
Mxy_max = float(np.max(np.abs(Mxy_dense)))
print()
print(f"  --- Valores NODALES discretos ---")
print(f"  |Mx|_max_nodal  = {Mx_max_disc:.4f} kN*m/m")
print(f"  |My|_max_nodal  = {My_max_disc:.4f} kN*m/m")
print(f"  |Mxy|_max_nodal = {Mxy_max_disc:.4f} kN*m/m")
print(f"  --- Valores con SPLINE BICUBICA en grid 200x200 (igual que Calcpad) ---")
print(f"  |Mx|_max_spline  = {Mx_max:.4f} kN*m/m   (Calcpad: 6.32)")
print(f"  |My|_max_spline  = {My_max:.4f} kN*m/m   (Calcpad: 12.74)")
print(f"  |Mxy|_max_spline = {Mxy_max:.4f} kN*m/m   (Calcpad: 8.38)")

# Mx, My, Mxy en el centro de la placa (a/2, b/2)
Mx_center  = M_nodal[n_center, 0]
My_center  = M_nodal[n_center, 1]
Mxy_center = M_nodal[n_center, 2]
print(f"  Mx_center  = {Mx_center:.4f} kN*m/m")
print(f"  My_center  = {My_center:.4f} kN*m/m")
print(f"  Mxy_center = {Mxy_center:.4f} kN*m/m")

# ----------------------------------------------------------------------
# Solucion analitica Navier (Timoshenko Tabla 8, a/b = 1.5)
# alpha = 0.00772 -> w_max = alpha * q * b^4 / D
# ----------------------------------------------------------------------
D_b = E_mod * t_pl**3 / (12.0 * (1 - nu**2))
w_navier_m = -0.00772 * q_load * b**4 / D_b
w_navier_mm = w_navier_m * 1000.0

# Calcpad reference (extracted from PNG)
ref_calcpad_w_mm   = -6.63
ref_calcpad_Mx     = 6.32
ref_calcpad_My     = 12.74
ref_calcpad_Mxy    = 8.38

print()
print("  COMPARACION CRUZADA")
print("-" * 72)
print(f"  {'Modelo':<24} {'w_max [mm]':>12} {'|Mx|max':>10} {'|My|max':>10} {'|Mxy|max':>10}")
print(f"  {'-'*24} {'-'*12} {'-'*10} {'-'*10} {'-'*10}")
print(f"  {'Python BFS (este)':<24} {w_max_mm:>12.4f} {Mx_max:>10.4f} {My_max:>10.4f} {Mxy_max:>10.4f}")
print(f"  {'Calcpad PNG ref':<24} {ref_calcpad_w_mm:>12.4f} {ref_calcpad_Mx:>10.4f} {ref_calcpad_My:>10.4f} {ref_calcpad_Mxy:>10.4f}")
diff_w = (abs(w_max_mm) - abs(ref_calcpad_w_mm)) / abs(ref_calcpad_w_mm) * 100
diff_Mx  = (Mx_max  - ref_calcpad_Mx) / ref_calcpad_Mx * 100
diff_My  = (My_max  - ref_calcpad_My) / ref_calcpad_My * 100
diff_Mxy = (Mxy_max - ref_calcpad_Mxy) / ref_calcpad_Mxy * 100
print(f"  {'Diff vs Calcpad %':<24} {diff_w:>11.3f}% {diff_Mx:>9.3f}% {diff_My:>9.3f}% {diff_Mxy:>9.3f}%")
print(f"  {'Navier teorico':<24} {w_navier_mm:>12.4f}")
print(f"  {'Diff Python vs Navier':<24} {(abs(w_max_mm)-abs(w_navier_mm))/abs(w_navier_mm)*100:>11.3f}%")

# ----------------------------------------------------------------------
# Generar PNGs matplotlib
# ----------------------------------------------------------------------
out_dir = "figs"
os.makedirs(out_dir, exist_ok=True)
sap_cmap = matplotlib.colors.LinearSegmentedColormap.from_list("sap2000", [
    "#0000FF", "#0080FF", "#00FFFF", "#00FF80", "#00FF00",
    "#80FF00", "#FFFF00", "#FF8000", "#FF0000",
])

# Reshape to grids (column-major: x outer, y inner)
W_grid  = np.zeros((n_b + 1, n_a + 1))
Mx_grid = np.zeros((n_b + 1, n_a + 1))
My_grid = np.zeros((n_b + 1, n_a + 1))
Mxy_grid = np.zeros((n_b + 1, n_a + 1))
X_grid  = np.zeros((n_b + 1, n_a + 1))
Y_grid  = np.zeros((n_b + 1, n_a + 1))
for i in range(n_a + 1):
    for j in range(n_b + 1):
        nd = i * (n_b + 1) + j
        X_grid[j, i] = x_j[nd]
        Y_grid[j, i] = y_j[nd]
        W_grid[j, i] = Z[n_dof * nd] * 1000.0   # mm
        Mx_grid[j, i]  = M_nodal[nd, 0]
        My_grid[j, i]  = M_nodal[nd, 1]
        Mxy_grid[j, i] = M_nodal[nd, 2]

# Fig 1: mesh
fig, ax = plt.subplots(figsize=(9, 6))
for e in range(n_e):
    xs = [x_j[e_j[e, i]] for i in [0, 1, 2, 3, 0]]
    ys = [y_j[e_j[e, i]] for i in [0, 1, 2, 3, 0]]
    ax.plot(xs, ys, "b-", lw=0.8)
ax.plot(x_j, y_j, "ko", ms=4)
for nd in s_j:
    ax.plot(x_j[nd], y_j[nd], "rs", ms=8)
ax.set_aspect("equal")
ax.set_xlabel("x [m]"); ax.set_ylabel("y [m]")
ax.set_title(f"Mallado Q4-BFS (Hermiticas cubicas) — {n_a}x{n_b} = {n_e} elementos, {n_j} nodos\n"
             f"rojo = SS (w=0)")
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_bfs_mesh.png", dpi=140)
plt.close()

# Fig 2: deflexion 3D + contour
fig = plt.figure(figsize=(14, 6))
ax1 = fig.add_subplot(121, projection="3d")
ax1.plot_surface(X_grid, Y_grid, W_grid, cmap=sap_cmap, edgecolor="k", lw=0.3)
ax1.set_xlabel("x [m]"); ax1.set_ylabel("y [m]"); ax1.set_zlabel("w [mm]")
ax1.set_title("Deflexion w(x,y) — Q4-BFS Hermiticas")

ax2 = fig.add_subplot(122)
cf = ax2.contourf(X_grid, Y_grid, W_grid, levels=20, cmap=sap_cmap)
ax2.set_aspect("equal")
ax2.set_xlabel("x [m]"); ax2.set_ylabel("y [m]")
ax2.set_title(f"Contour w | w_max = {w_max_mm:.3f} mm | Calcpad = {ref_calcpad_w_mm} mm | diff = {diff_w:.2f}%",
              fontsize=9)
plt.colorbar(cf, ax=ax2, label="w [mm]")
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_bfs_deflection.png", dpi=140)
plt.close()

# Fig 3: momentos
fig, axs = plt.subplots(1, 3, figsize=(18, 5.5))
for ax, M, name, ref in [(axs[0], Mx_grid, "Mx", ref_calcpad_Mx),
                          (axs[1], My_grid, "My", ref_calcpad_My),
                          (axs[2], Mxy_grid, "Mxy", ref_calcpad_Mxy)]:
    cf = ax.contourf(X_grid, Y_grid, M, levels=20, cmap=sap_cmap)
    ax.set_aspect("equal")
    ax.set_xlabel("x [m]"); ax.set_ylabel("y [m]")
    M_abs_max = float(np.max(np.abs(M)))
    ax.set_title(f"{name}  |  |{name}|max = {M_abs_max:.3f}  (Calcpad: {ref})", fontsize=10)
    plt.colorbar(cf, ax=ax, label="kN·m/m")
fig.suptitle("Momentos Q4-BFS — promedio entre elementos vecinos (replica Calcpad)",
             fontsize=11)
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_bfs_moments.png", dpi=140)
plt.close()

# Fig 4: summary table
fig, ax = plt.subplots(figsize=(12, 5.5))
ax.axis("off")
table_data = [
    ["Solver",                "Python Q4-BFS Hermiticas (replica Calcpad)"],
    ["Placa",                 f"{a} × {b} m  (a/b = {a/b:.2f})"],
    ["Espesor",               f"{t_pl} m"],
    ["Material",              f"E = {E_mod/1e6:.0f} GPa, ν = {nu}"],
    ["Carga",                 f"q = {q_load} kN/m² ↓"],
    ["Mesh",                  f"{n_a} × {n_b} = {n_e} Q4-BFS ({n_j} nodos, {n_g} GDL)"],
    ["BC",                    "Simply supported 4 bordes"],
    ["Cuadratura",            "Gauss-Legendre 4×4 (full integration)"],
    ["", ""],
    ["w_max Python BFS",      f"{w_max_mm:.4f} mm"],
    ["w_max Calcpad PNG",     f"{ref_calcpad_w_mm:.4f} mm"],
    ["Diff w",                f"{diff_w:+.3f} %"],
    ["", ""],
    ["|Mx|_max Python",       f"{Mx_max:.4f} kN·m/m  (Calcpad: {ref_calcpad_Mx})  diff {diff_Mx:+.2f}%"],
    ["|My|_max Python",       f"{My_max:.4f} kN·m/m  (Calcpad: {ref_calcpad_My})  diff {diff_My:+.2f}%"],
    ["|Mxy|_max Python",      f"{Mxy_max:.4f} kN·m/m  (Calcpad: {ref_calcpad_Mxy})  diff {diff_Mxy:+.2f}%"],
]
table = ax.table(cellText=table_data, colLabels=["Parametro", "Valor"],
                 loc="center", cellLoc="left", colWidths=[0.35, 0.6])
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1, 1.6)
ax.set_title("Plate Thin Q4-BFS — Replica EXACTA de Calcpad Rectangular Slab FEA",
             fontsize=12, pad=20)
plt.tight_layout()
plt.savefig(f"{out_dir}/plate_thin_bfs_summary.png", dpi=140)
plt.close()

print()
print("  PNGs generados:")
for f in ["mesh", "deflection", "moments", "summary"]:
    print(f"    figs/plate_thin_bfs_{f}.png")
print("=" * 72)
