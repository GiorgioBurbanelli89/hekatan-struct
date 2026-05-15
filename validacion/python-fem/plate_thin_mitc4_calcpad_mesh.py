"""
========================================================================
 Plate Thin Q4 MITC4 (Bathe-Dvorkin 1985) — Python — MISMA MALLA Calcpad
 Track: validacion/python-fem/
========================================================================

 PROPOSITO: implementar MITC4 VERDADERO (no SRI) para reproducir
 EXACTAMENTE SAP2000 ShellMITC4 con la misma malla 6×4.

 Formulacion MITC4 (Bathe Cap 5.4 / Dvorkin-Bathe 1985):
   gamma_xz(xi,eta) = (1-eta)/2 * gamma_xz_A + (1+eta)/2 * gamma_xz_C
   gamma_yz(xi,eta) = (1-xi)/2  * gamma_yz_D + (1+xi)/2  * gamma_yz_B

 Tying points en coords naturales [-1,1]:
   A = (0, -1)   gamma_xz evaluado en borde inferior, centro
   B = (1, 0)    gamma_yz evaluado en borde derecho, centro
   C = (0, 1)    gamma_xz evaluado en borde superior, centro
   D = (-1, 0)   gamma_yz evaluado en borde izquierdo, centro

 En cada tying point se calcula:
   gamma_xz_TP = dw/dx_TP - bx_TP
   gamma_yz_TP = dw/dy_TP - by_TP
 con dw/dx, bx interpolados en el tying point con shape functions del Q4.

 Resultado esperado: w_max ≈ -6.529 mm (igual que SAP ShellMITC4)
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
# PARAMETROS IDENTICOS al Calcpad
# ----------------------------------------------------------------------
Lx, Ly = 6.0, 4.0
nx, ny = 6, 4
E_mod  = 35e6
nu     = 0.15
t_pl   = 0.10
q_load = -10.0
kappa  = 5.0 / 6.0

print("=" * 72)
print("  PLATE THIN MITC4 (Bathe-Dvorkin) — Python — malla 6×4")
print("=" * 72)
print(f"  Placa: {Lx} x {Ly} m, t = {t_pl} m, E = {E_mod/1e6:.0f} GPa, nu = {nu}")
print(f"  Mesh: {nx} x {ny} Q4 MITC4 ({(nx+1)*(ny+1)} nodos)")
print("=" * 72)

dx, dy = Lx/nx, Ly/ny
n_nodes = (nx + 1) * (ny + 1)
n_elems = nx * ny
n_dof = 3 * n_nodes

coords = np.zeros((n_nodes, 2))
for j in range(ny + 1):
    for i in range(nx + 1):
        nid = j*(nx + 1) + i
        coords[nid] = [i*dx, j*dy]

elements = np.zeros((n_elems, 4), dtype=int)
for j in range(ny):
    for i in range(nx):
        eid = j*nx + i
        n1 = j*(nx + 1) + i
        n2 = n1 + 1
        n3 = n2 + (nx + 1)
        n4 = n1 + (nx + 1)
        elements[eid] = [n1, n2, n3, n4]

XI  = np.array([-1.0, 1.0, 1.0, -1.0])
ETA = np.array([-1.0, -1.0, 1.0, 1.0])

def shape_N(xi, eta):
    return 0.25 * (1 + XI*xi) * (1 + ETA*eta)

def shape_dN(xi, eta):
    """dN/dxi, dN/deta (in natural coords)"""
    dN = np.zeros((4, 2))
    dN[:, 0] = 0.25 * XI  * (1 + ETA*eta)
    dN[:, 1] = 0.25 * ETA * (1 + XI*xi)
    return dN

# Constitutive
D0 = E_mod * t_pl**3 / (12.0 * (1 - nu**2))
Db = D0 * np.array([
    [1.0, nu,  0.0],
    [nu,  1.0, 0.0],
    [0.0, 0.0, 0.5*(1-nu)],
])
G_mod = E_mod / (2*(1+nu))
Ds = kappa * G_mod * t_pl * np.eye(2)

# Gauss 2x2 para bending
gp = 1.0/np.sqrt(3)
gauss_2x2 = [(-gp, -gp, 1.0), (gp, -gp, 1.0), (gp, gp, 1.0), (-gp, gp, 1.0)]

def jacobian(nc, dN):
    J = dN.T @ nc
    detJ = J[0,0]*J[1,1] - J[0,1]*J[1,0]
    Jinv = np.array([[J[1,1], -J[0,1]], [-J[1,0], J[0,0]]]) / detJ
    return J, Jinv, detJ

def phys_derivs(dN, Jinv):
    return dN @ Jinv.T

def bending_B(dNdx):
    Bb = np.zeros((3, 12))
    for i in range(4):
        Bb[0, 3*i+1] = dNdx[i, 0]
        Bb[1, 3*i+2] = dNdx[i, 1]
        Bb[2, 3*i+1] = dNdx[i, 1]
        Bb[2, 3*i+2] = dNdx[i, 0]
    return Bb

# ----------------------------------------------------------------------
# MITC4 SHEAR B-MATRIX (Bathe-Dvorkin 1985)
#
# Tying points en coords naturales:
#   A = (0, -1)   <- gamma_xz evaluado aqui
#   B = (1, 0)    <- gamma_yz evaluado aqui
#   C = (0, 1)    <- gamma_xz evaluado aqui
#   D = (-1, 0)   <- gamma_yz evaluado aqui
#
# Interpolacion:
#   gamma_xz_natural(xi, eta) = (1/2)*(1-eta)*gamma_xz_A + (1/2)*(1+eta)*gamma_xz_C
#   gamma_yz_natural(xi, eta) = (1/2)*(1-xi)*gamma_yz_D  + (1/2)*(1+xi)*gamma_yz_B
#
# En cada tying point:
#   gamma_xz_TP = N_TP[i] * (dN/dxi at TP * w_i + 0 * bx_i + 0 * by_i)
#                NO! correcto es:
#   gamma_xz_TP = sum_i ( dNi/dxi(TP) * w_i ) - sum_i ( Ni(TP) * bx_i )
# pero las componentes naturales (gamma_xi_z, gamma_eta_z), no globales!
#
# La covariant shear strain:
#   gamma_xi_z = dw/dxi - sum( Ni * bx_i_natural )
# Convertir a cartesianas global con la Jacobian.
# ----------------------------------------------------------------------

def shear_B_mitc4(xi, eta, nc):
    """Compute MITC4 shear B (2 x 12) at natural point (xi, eta).

    Following Dvorkin-Bathe 1984: assume "covariant" shear strains
    gamma_xi_z and gamma_eta_z are computed using natural derivatives,
    then transformed to Cartesian via Jacobian.

    Tying points (in natural coords):
        A=(0,-1), B=(1,0), C=(0,1), D=(-1,0)
    """
    # Definimos los 4 tying points
    # gamma_xi_z(xi, eta) = (1-eta)/2 * gamma_xi_z_at_A + (1+eta)/2 * gamma_xi_z_at_C
    # gamma_eta_z(xi, eta) = (1-xi)/2 * gamma_eta_z_at_D + (1+xi)/2 * gamma_eta_z_at_B

    Bs = np.zeros((2, 12))  # filas: [gamma_xz_global, gamma_yz_global]

    # En cada TP calculamos las derivadas dN/dxi, dN/deta y el N
    # Para gamma_xi_z @ A=(0,-1): coef en cada DOF
    #   gamma_xi_z = dN/dxi(A) * w_i - N(A) * (dx/dxi * bx + dy/dxi * by)
    # Pero las rotaciones naturales son: bx_natural_xi = dx/dxi * bx + dy/dxi * by
    # Esto es proyeccion sobre la direccion xi.

    # Implementacion mas simple y estandar (Bathe Cap 5.4, eq 5.86 y siguientes):
    # gamma_xz_natural_at_TP = sum_i [ dNi/dxi(TP) * w_i - Ni(TP) * (Jac11(TP)*bx_i + Jac12(TP)*by_i) ]
    # Pero la convencion exacta varia segun el libro.

    # Aproximacion estable (Hughes 1987 / Bathe simplificado):
    # gamma_xi_z (en natural) = sum( dNi/dxi(TP) * w_i ) - sum( Ni(TP) * beta_xi_i )
    # donde beta_xi = J11 * bx + J12 * by (componente natural)
    #
    # Despues convertimos: gamma_x_z = Jinv11 * gamma_xi_z + Jinv12 * gamma_eta_z
    #                      gamma_y_z = Jinv21 * gamma_xi_z + Jinv22 * gamma_eta_z

    # Tying points en orden A, B, C, D
    tying_points = [
        ('A', 0.0, -1.0),   # gamma_xi_z
        ('B', 1.0,  0.0),   # gamma_eta_z
        ('C', 0.0,  1.0),   # gamma_xi_z
        ('D',-1.0,  0.0),   # gamma_eta_z
    ]

    # Compute natural shear at each TP (B vectors 1x12)
    # gamma_xi_z @ TP: contrib en cada DOF
    def gamma_xi_z_at(xi_t, eta_t):
        N = shape_N(xi_t, eta_t)
        dN = shape_dN(xi_t, eta_t)
        # Jac at this TP
        J, _, _ = jacobian(nc, dN)
        b_vec = np.zeros(12)
        for i in range(4):
            # contribucion de w_i: dN/dxi(TP) * w_i
            b_vec[3*i] = dN[i, 0]
            # contribucion de bx_i: -N_i * J[0,0]  (J[0,0] = dx/dxi)
            b_vec[3*i + 1] = -N[i] * J[0, 0]
            # contribucion de by_i: -N_i * J[0,1]  (J[0,1] = dy/dxi)
            b_vec[3*i + 2] = -N[i] * J[0, 1]
        return b_vec

    def gamma_eta_z_at(xi_t, eta_t):
        N = shape_N(xi_t, eta_t)
        dN = shape_dN(xi_t, eta_t)
        J, _, _ = jacobian(nc, dN)
        b_vec = np.zeros(12)
        for i in range(4):
            b_vec[3*i] = dN[i, 1]              # dN/deta(TP) * w_i
            b_vec[3*i + 1] = -N[i] * J[1, 0]   # -N * J[1,0] = -N * dx/deta
            b_vec[3*i + 2] = -N[i] * J[1, 1]   # -N * J[1,1] = -N * dy/deta
        return b_vec

    g_xi_A = gamma_xi_z_at(0.0, -1.0)
    g_xi_C = gamma_xi_z_at(0.0,  1.0)
    g_eta_B = gamma_eta_z_at(1.0,  0.0)
    g_eta_D = gamma_eta_z_at(-1.0, 0.0)

    # Interpolar a (xi, eta)
    g_xi_natural  = 0.5*(1-eta)*g_xi_A   + 0.5*(1+eta)*g_xi_C
    g_eta_natural = 0.5*(1-xi)*g_eta_D + 0.5*(1+xi)*g_eta_B

    # Convertir a Cartesianas usando Jinv del punto actual
    dN = shape_dN(xi, eta)
    _, Jinv, _ = jacobian(nc, dN)
    # gamma_x_z = Jinv[0,0]*g_xi + Jinv[0,1]*g_eta
    # gamma_y_z = Jinv[1,0]*g_xi + Jinv[1,1]*g_eta
    Bs[0] = Jinv[0, 0] * g_xi_natural + Jinv[0, 1] * g_eta_natural
    Bs[1] = Jinv[1, 0] * g_xi_natural + Jinv[1, 1] * g_eta_natural

    return Bs

def element_stiffness_mitc4(nc):
    Ke = np.zeros((12, 12))
    # Bending 2x2 Gauss (full integration, igual que antes)
    for xi, eta, w_gp in gauss_2x2:
        dN = shape_dN(xi, eta)
        _, Jinv, detJ = jacobian(nc, dN)
        dNdx = phys_derivs(dN, Jinv)
        Bb = bending_B(dNdx)
        Ke += w_gp * detJ * (Bb.T @ Db @ Bb)
    # SHEAR: usar 2x2 Gauss tambien (FULL integration) pero con B_s MITC4
    for xi, eta, w_gp in gauss_2x2:
        dN = shape_dN(xi, eta)
        _, _, detJ = jacobian(nc, dN)
        Bs = shear_B_mitc4(xi, eta, nc)
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

print("  Ensamblando matriz K (MITC4)...")
t0 = time.perf_counter()
K = lil_matrix((n_dof, n_dof))
F = np.zeros(n_dof)
for e in range(n_elems):
    elem = elements[e]
    nc = coords[elem]
    Ke = element_stiffness_mitc4(nc)
    fe = element_load(nc, q_load)
    dof_map = [3*ni + d for ni in elem for d in range(3)]
    for ii in range(12):
        F[dof_map[ii]] += fe[ii]
        for jj in range(12):
            K[dof_map[ii], dof_map[jj]] += Ke[ii, jj]
K = K.tocsr()
print(f"  Ensamblaje: {(time.perf_counter()-t0)*1000:.1f} ms")

# BC SS
penalty = 1e20
K_pen = K.tolil()
n_bc = 0
for i in range(n_nodes):
    x, y = coords[i]
    if x < 1e-9 or x > Lx-1e-9 or y < 1e-9 or y > Ly-1e-9:
        K_pen[3*i, 3*i] += penalty
        n_bc += 1
K_pen = K_pen.tocsr()

t0 = time.perf_counter()
u = spsolve(K_pen, F)
print(f"  Solve     : {(time.perf_counter()-t0)*1000:.1f} ms")

w_all = u[0::3]
w_max_m = float(np.min(w_all))
w_max_mm = w_max_m * 1000.0
cx, cy = Lx/2, Ly/2
center_idx = int(np.argmin(np.linalg.norm(coords - [cx, cy], axis=1)))
w_center = u[3*center_idx]
print(f"  w_max     = {w_max_m:.6e} m  ({w_max_mm:.4f} mm)")
print(f"  w_center  = {w_center*1000:.4f} mm")

# Calcular Mxy en centro de cada elemento usando B_bending
# (es exactamente igual que con SRI: la diferencia MITC esta en shear, no bending)
def element_moments(nc, d_e):
    dN = shape_dN(0.0, 0.0)
    _, Jinv, _ = jacobian(nc, dN)
    dNdx = phys_derivs(dN, Jinv)
    Bb = bending_B(dNdx)
    kappa_v = Bb @ d_e
    return Db @ kappa_v

# Promedio nodal de M
M_acc = np.zeros((n_nodes, 3))
c_acc = np.zeros(n_nodes, dtype=int)
# Tomar M en los 4 nodos del Q4 (xi,eta en {-1,+1})
node_xi  = [-1.0,  1.0,  1.0, -1.0]
node_eta = [-1.0, -1.0,  1.0,  1.0]
for e in range(n_elems):
    elem = elements[e]
    nc = coords[elem]
    d_e = np.array([u[3*ni + d] for ni in elem for d in range(3)])
    for k in range(4):
        dN = shape_dN(node_xi[k], node_eta[k])
        _, Jinv, _ = jacobian(nc, dN)
        dNdx = phys_derivs(dN, Jinv)
        Bb = bending_B(dNdx)
        kappa_v = Bb @ d_e
        M = Db @ kappa_v
        global_node = elem[k]
        M_acc[global_node] += M
        c_acc[global_node] += 1
M_nodal = M_acc / np.maximum(c_acc.reshape(-1, 1), 1)

Mx_max  = float(np.max(np.abs(M_nodal[:, 0])))
My_max  = float(np.max(np.abs(M_nodal[:, 1])))
Mxy_max = float(np.max(np.abs(M_nodal[:, 2])))
print(f"  |Mx|_max  = {Mx_max:.4f} kN*m/m")
print(f"  |My|_max  = {My_max:.4f} kN*m/m")
print(f"  |Mxy|_max = {Mxy_max:.4f} kN*m/m")

# Comparacion 5-way
print()
print("  COMPARACION FINAL — 5 formulaciones distintas con MISMA malla 6×4")
print("-" * 72)
print(f"  {'Solver':<32} {'Elemento':<24} {'w_max':>10} {'|Mxy|':>10}")
print(f"  {'-'*32} {'-'*24} {'-'*10} {'-'*10}")
print(f"  {'Calcpad (.cpd)':<32} {'Q4-BFS C1':<24} {'-6.6300':>10} {'8.38':>10}")
print(f"  {'Python BFS':<32} {'Q4-BFS C1':<24} {'-6.6353':>10} {'5.23':>10}")
print(f"  {'Julia BFS':<32} {'Q4-BFS C1':<24} {'-6.6353':>10} {'5.23':>10}")
print(f"  {'-'*32} {'-'*24} {'-'*10} {'-'*10}")
print(f"  {'SAP2000 v24 API':<32} {'MITC4 (Bathe)':<24} {'-6.5290':>10} {'6.90':>10}")
print(f"  {'Python MITC4 (este script)':<32} {'Q4 MITC4 (Bathe)':<24} {w_max_mm:>10.4f} {Mxy_max:>10.4f}")
print(f"  {'Python Mindlin SRI':<32} {'Q4 Mindlin SRI':<24} {'-6.8487':>10} {'--':>10}")
print(f"  {'-'*32} {'-'*24} {'-'*10} {'-'*10}")
print(f"  {'Navier teorico':<32} {'serie analitica':<24} {'-6.6235':>10} {'--':>10}")
print()

diff_python_mitc4_vs_sap = (abs(w_max_mm) - 6.529) / 6.529 * 100
print(f"  Diff Python MITC4 vs SAP MITC4: {diff_python_mitc4_vs_sap:+.3f}%")
print("  Si <1%, mi MITC4 reproduce SAP -> formulacion confirmada")
print("=" * 72)
