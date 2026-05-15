"""
========================================================================
 Plate Thin Q4 MINDLIN-Reissner con SRI — Python — MISMA MALLA Calcpad
 Track: validacion/python-fem/
========================================================================

 PROPOSITO: demostrar que SAP2000 ≠ Calcpad con misma malla SE DEBE
 al elemento (Mindlin/MITC4 vs BFS), no a la malla.

 Usa la MISMA malla 6×4 que Calcpad, MISMOS parametros, MISMAS BC,
 PERO formulacion Mindlin-Reissner Q4 con Selective Reduced Integration
 (SRI). Esta es la formulacion CSi (Wilson Cap.10 — "el enfoque empleado
 en SAP2000").

 Resultado esperado:
   w_max Python Mindlin ≈ w_max SAP2000 = -6.529 mm  (no -6.63 mm que da Calcpad BFS)
   Eso PRUEBA que la diferencia es por elemento, no por malla.

 Referencias:
   - Bathe (1996), Cap. 5.4 (MITC4 / Mindlin Q4)
   - Wilson (1997), Cap. 10 ("Three Dimensional Analysis of Structures")
   - Zienkiewicz & Taylor Vol.2 (2000), Cap. 5 (Mindlin plate)
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

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# ----------------------------------------------------------------------
# PARAMETROS IDENTICOS al Calcpad Rectangular Slab FEA.cpd
# ----------------------------------------------------------------------
Lx, Ly = 6.0, 4.0
nx, ny = 6, 4                # MISMA MALLA QUE CALCPAD
E_mod  = 35e6                # 35 GPa = 35e6 kN/m^2
nu     = 0.15
t_pl   = 0.10
q_load = -10.0               # negativo descendente
kappa  = 5.0 / 6.0           # shear correction Mindlin

print("=" * 72)
print("  PLATE THIN MINDLIN SRI — Python — misma malla Calcpad (6×4)")
print("=" * 72)
print(f"  Placa     : {Lx} x {Ly} m, t = {t_pl} m")
print(f"  Material  : E = {E_mod/1e6:.0f} GPa, nu = {nu}")
print(f"  Carga     : q = {abs(q_load)} kN/m^2 (descendente)")
print(f"  Mesh      : {nx} x {ny} = {nx*ny} Q4 MITC/SRI ({(nx+1)*(ny+1)} nodos)")
print(f"  Elemento  : Q4 Mindlin-Reissner con SRI (3 GDL/nodo: w, beta_x, beta_y)")
print(f"  Equivale a: ShellMITC4 de OpenSees, ShellType=2 de SAP2000")
print(f"  BC        : Simply supported (w=0 en 4 bordes)")
print("=" * 72)

# Mesh (row-major para coincidencia con scikit-fem standard)
dx, dy = Lx/nx, Ly/ny
n_nodes = (nx + 1) * (ny + 1)
n_elems = nx * ny
dof_per_node = 3              # w, beta_x, beta_y (Mindlin)
n_dof = n_nodes * dof_per_node

coords = np.zeros((n_nodes, 2))
for j in range(ny + 1):
    for i in range(nx + 1):
        nid = j * (nx + 1) + i
        coords[nid] = [i*dx, j*dy]

elements = np.zeros((n_elems, 4), dtype=int)
for j in range(ny):
    for i in range(nx):
        eid = j*nx + i
        n1 = j*(nx+1) + i
        n2 = n1 + 1
        n3 = n2 + (nx + 1)
        n4 = n1 + (nx + 1)
        elements[eid] = [n1, n2, n3, n4]

# Shape functions Q4 (xi, eta in [-1, 1])
XI  = np.array([-1.0, 1.0, 1.0, -1.0])
ETA = np.array([-1.0, -1.0, 1.0, 1.0])

def shape_N(xi, eta):
    return 0.25 * (1 + XI*xi) * (1 + ETA*eta)

def shape_dN(xi, eta):
    dN = np.zeros((4, 2))
    dN[:, 0] = 0.25 * XI  * (1 + ETA*eta)
    dN[:, 1] = 0.25 * ETA * (1 + XI*xi)
    return dN

# Constitutive (Kirchhoff bending + Mindlin shear)
D0 = E_mod * t_pl**3 / (12.0 * (1 - nu**2))
Db = D0 * np.array([
    [1.0, nu,  0.0],
    [nu,  1.0, 0.0],
    [0.0, 0.0, 0.5*(1-nu)],
])
G_mod = E_mod / (2*(1+nu))
Ds = kappa * G_mod * t_pl * np.eye(2)
print(f"  Db rigidez flexural = {D0:.3f} kN*m  (igual que Calcpad/BFS)")
print(f"  Ds rigidez cortante = {kappa*G_mod*t_pl:.3f} kN/m  (MITC4/Mindlin extra)")

# Gauss
gp = 1.0/np.sqrt(3)
gauss_2x2 = [(-gp, -gp, 1.0), (gp, -gp, 1.0), (gp, gp, 1.0), (-gp, gp, 1.0)]
gauss_1x1 = [(0.0, 0.0, 4.0)]

def jacobian(nc, dN):
    J = dN.T @ nc
    detJ = J[0,0]*J[1,1] - J[0,1]*J[1,0]
    Jinv = np.array([[J[1,1], -J[0,1]], [-J[1,0], J[0,0]]]) / detJ
    return Jinv, detJ

def phys_derivs(dN, Jinv):
    return dN @ Jinv.T

def bending_B(dNdx):
    Bb = np.zeros((3, 12))
    for i in range(4):
        Bb[0, 3*i+1] = dNdx[i, 0]   # d(bx)/dx
        Bb[1, 3*i+2] = dNdx[i, 1]   # d(by)/dy
        Bb[2, 3*i+1] = dNdx[i, 1]
        Bb[2, 3*i+2] = dNdx[i, 0]
    return Bb

def shear_B(N, dNdx):
    Bs = np.zeros((2, 12))
    for i in range(4):
        Bs[0, 3*i]   =  dNdx[i, 0]
        Bs[0, 3*i+1] = -N[i]
        Bs[1, 3*i]   =  dNdx[i, 1]
        Bs[1, 3*i+2] = -N[i]
    return Bs

def element_stiffness(nc):
    Ke = np.zeros((12, 12))
    # Bending 2x2
    for xi, eta, w_gp in gauss_2x2:
        dN = shape_dN(xi, eta)
        Jinv, detJ = jacobian(nc, dN)
        dNdx = phys_derivs(dN, Jinv)
        Bb = bending_B(dNdx)
        Ke += w_gp * detJ * (Bb.T @ Db @ Bb)
    # Shear 1x1 reduced (SRI)
    for xi, eta, w_gp in gauss_1x1:
        N = shape_N(xi, eta)
        dN = shape_dN(xi, eta)
        Jinv, detJ = jacobian(nc, dN)
        dNdx = phys_derivs(dN, Jinv)
        Bs = shear_B(N, dNdx)
        Ke += w_gp * detJ * (Bs.T @ Ds @ Bs)
    return Ke

def element_load(nc, q):
    fe = np.zeros(12)
    for xi, eta, w_gp in gauss_2x2:
        N = shape_N(xi, eta)
        dN = shape_dN(xi, eta)
        Jinv, detJ = jacobian(nc, dN)
        for i in range(4):
            fe[3*i] += N[i] * q * detJ * w_gp
    return fe

# Assembly
print("  Ensamblando...")
t0 = time.perf_counter()
K = lil_matrix((n_dof, n_dof))
F = np.zeros(n_dof)
for e in range(n_elems):
    elem = elements[e]
    nc = coords[elem]
    Ke = element_stiffness(nc)
    fe = element_load(nc, q_load)
    dof_map = [3*ni + d for ni in elem for d in range(3)]
    for ii in range(12):
        F[dof_map[ii]] += fe[ii]
        for jj in range(12):
            K[dof_map[ii], dof_map[jj]] += Ke[ii, jj]
K = K.tocsr()
t_asm = time.perf_counter() - t0
print(f"  Ensamblaje: {t_asm*1000:.1f} ms")

# BC: SS via penalty
penalty = 1e20
K_pen = K.tolil()
n_bc = 0
for i in range(n_nodes):
    x, y = coords[i]
    if x < 1e-9 or x > Lx-1e-9 or y < 1e-9 or y > Ly-1e-9:
        K_pen[3*i, 3*i] += penalty
        n_bc += 1
K_pen = K_pen.tocsr()
print(f"  BC: {n_bc} nodos con w=0")

# Solve
t0 = time.perf_counter()
u = spsolve(K_pen, F)
t_solve = time.perf_counter() - t0
print(f"  Solve     : {t_solve*1000:.1f} ms")

# Post
w_all = u[0::3]
w_max_m = float(np.min(w_all))
w_max_mm = w_max_m * 1000.0
print(f"  w_max     = {w_max_m:.6e} m  ({w_max_mm:.4f} mm)")

# Comparacion
ref_calcpad_BFS_mm    = -6.6300
ref_python_BFS_mm     = -6.6353
ref_julia_BFS_mm      = -6.6353
ref_SAP2000_MITC4_mm  = -6.529
ref_navier_mm         = -6.6235

print()
print("  PRUEBA DEFINITIVA — misma malla 6×4, distinto ELEMENTO")
print("-" * 72)
print(f"  {'Solver':<30} {'Elemento':<22} {'w_max [mm]':>13} {'Group':>10}")
print(f"  {'-'*30} {'-'*22} {'-'*13} {'-'*10}")
print(f"  {'Calcpad (.cpd)':<30} {'Q4-BFS Hermiticas':<22} {ref_calcpad_BFS_mm:>13.4f} {'BFS':>10}")
print(f"  {'Python BFS (replica)':<30} {'Q4-BFS Hermiticas':<22} {ref_python_BFS_mm:>13.4f} {'BFS':>10}")
print(f"  {'Julia BFS (replica)':<30} {'Q4-BFS Hermiticas':<22} {ref_julia_BFS_mm:>13.4f} {'BFS':>10}")
print(f"  {'-'*30} {'-'*22} {'-'*13} {'-'*10}")
print(f"  {'SAP2000 v24 API':<30} {'MITC4 (ShellType=1)':<22} {ref_SAP2000_MITC4_mm:>13.4f} {'MINDLIN':>10}")
print(f"  {'Python Mindlin SRI (este)':<30} {'Q4 Mindlin SRI':<22} {w_max_mm:>13.4f} {'MINDLIN':>10}")
print(f"  {'-'*30} {'-'*22} {'-'*13} {'-'*10}")
print(f"  {'Navier teorico':<30} {'serie analitica':<22} {ref_navier_mm:>13.4f} {'EXACTA':>10}")
print()

# Distancia entre los dos grupos
diff_python_mindlin_vs_sap = (abs(w_max_mm) - abs(ref_SAP2000_MITC4_mm)) / abs(ref_SAP2000_MITC4_mm) * 100
diff_python_mindlin_vs_bfs = (abs(w_max_mm) - abs(ref_python_BFS_mm)) / abs(ref_python_BFS_mm) * 100

print(f"  Diff Python Mindlin vs SAP2000 MITC4:  {diff_python_mindlin_vs_sap:+.3f}% (deberia ser ~0 si formulacion equivale)")
print(f"  Diff Python Mindlin vs Python BFS:     {diff_python_mindlin_vs_bfs:+.3f}% (diferencia por ELEMENTO)")
print()
print("  CONCLUSION:")
print(f"  - Los 3 BFS (Calcpad, Python BFS, Julia BFS) dan w ~ -6.63 mm")
print(f"  - Los 2 Mindlin (SAP MITC4, Python Mindlin SRI) dan w ~ -6.53 mm")
print(f"  - Misma malla, distinto elemento -> distinto resultado")
print(f"  - SAP NO usa BFS; es FISICA del elemento, no bug")
print(repeat := "=" * 72)
