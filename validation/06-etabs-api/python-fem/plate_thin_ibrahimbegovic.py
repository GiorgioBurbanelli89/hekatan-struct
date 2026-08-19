"""
========================================================================
 Plate Thin Q4 IBRAHIMBEGOVIC 1993 — Python — replica SAP2000 ShellMITC4
========================================================================

 Formulacion (Ibrahimbegovic 1993, Computer Methods in Applied Mech & Eng.):
   - Bending Mindlin/Reissner (igual MITC4 con tying points)
   - MODOS INCOMPATIBLES (Wilson-Ibrahimbegovic 1990) para beta_x, beta_y:
       beta_x(xi, eta) = sum N_i*bx_i + alpha_1*(1-xi^2) + alpha_2*(1-eta^2)
       beta_y(xi, eta) = sum N_i*by_i + alpha_3*(1-xi^2) + alpha_4*(1-eta^2)
   - 4 GDL internos por elemento (alpha_1..4)
   - K_e_ext = 16x16, F_e_ext = 16x1
   - CONDENSACION ESTATICA al final: K_e = K_aa - K_ab * inv(K_bb) * K_ba

 Target: matching SAP2000 ShellMITC4 (w_max = -6.529 mm, |Mxy| = 6.90 kN*m/m)
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

# Parametros del caso Calcpad
Lx, Ly = 6.0, 4.0
nx, ny = 6, 4
E_mod = 35e6
nu = 0.15
t_pl = 0.10
q_load = -10.0
kappa_sh = 5.0 / 6.0

print("=" * 72)
print("  PLATE THIN IBRAHIMBEGOVIC 1993 — Python con modos incompatibles")
print("=" * 72)
print(f"  Placa: {Lx} x {Ly} m, t = {t_pl}, E = {E_mod/1e6:.0f} GPa, nu = {nu}")
print(f"  Mesh: {nx} x {ny} Q4 con modos incompatibles (4 alpha por elemento)")
print(f"  Target: SAP2000 -6.529 mm, |Mxy| = 6.90")
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
Ds = kappa_sh * G_mod * t_pl * np.eye(2)

gp = 1.0/np.sqrt(3)
gauss_2x2 = [(-gp, -gp, 1.0), (gp, -gp, 1.0), (gp, gp, 1.0), (-gp, gp, 1.0)]

def jacobian(nc, dN):
    J = dN.T @ nc
    detJ = J[0,0]*J[1,1] - J[0,1]*J[1,0]
    Jinv = np.array([[J[1,1], -J[0,1]], [-J[1,0], J[0,0]]]) / detJ
    return J, Jinv, detJ

def phys_derivs(dN, Jinv):
    return dN @ Jinv.T

def bending_B_ext(xi, eta, dNdx, a1, b1):
    """Extended bending B-matrix (3 x 16): 12 nodal + 4 incompatible mode alphas.
    Incompatible modes:
      alpha_1 in beta_x: shape M1 = (1-xi^2)
      alpha_2 in beta_x: shape M2 = (1-eta^2)
      alpha_3 in beta_y: shape M3 = (1-xi^2)
      alpha_4 in beta_y: shape M4 = (1-eta^2)
    Derivatives in physical coords:
      dM1/dx = -2*xi * Jinv11 = -2*xi * 2/a1 = -4*xi/a1
      dM1/dy = 0
      dM2/dx = 0
      dM2/dy = -4*eta/b1
      Similar for M3, M4 (in beta_y direction).
    """
    Bb = np.zeros((3, 16))
    # Nodal contributions (12 cols)
    for i in range(4):
        Bb[0, 3*i+1] = dNdx[i, 0]   # kxx = d(bx)/dx
        Bb[1, 3*i+2] = dNdx[i, 1]   # kyy = d(by)/dy
        Bb[2, 3*i+1] = dNdx[i, 1]   # kxy: d(bx)/dy
        Bb[2, 3*i+2] = dNdx[i, 0]   # kxy: d(by)/dx
    # Incompatible mode contributions (4 cols, indices 12-15)
    # alpha_1 in beta_x with shape (1-xi^2): dM/dx = -4*xi/a1, dM/dy = 0
    Bb[0, 12] = -4.0*xi/a1   # kxx from alpha_1 (beta_x mode (1-xi^2))
    Bb[2, 12] = 0            # kxy contribs from alpha_1: dM/dy = 0
    # alpha_2 in beta_x with shape (1-eta^2): dM/dx = 0, dM/dy = -4*eta/b1
    Bb[0, 13] = 0
    Bb[2, 13] = -4.0*eta/b1  # kxy from alpha_2: d(bx)/dy
    # alpha_3 in beta_y with shape (1-xi^2): dM/dx = -4*xi/a1, dM/dy = 0
    Bb[1, 14] = 0            # kyy: d(by)/dy = 0 for (1-xi^2)
    Bb[2, 14] = -4.0*xi/a1   # kxy: d(by)/dx
    # alpha_4 in beta_y with shape (1-eta^2): dM/dx = 0, dM/dy = -4*eta/b1
    Bb[1, 15] = -4.0*eta/b1  # kyy from alpha_4
    Bb[2, 15] = 0
    return Bb

def shear_B_mitc4_ext(xi, eta, nc, a1, b1):
    """Extended MITC4 shear B-matrix (2 x 16) including incompatible mode contributions.
    The modes alpha_1, alpha_2 in beta_x affect gamma_xz = dw/dx - beta_x.
    But for MITC4 with tying points, modes are evaluated at TPs:
      TP A=(0,-1): M1(A) = 1-0 = 1, M2(A) = 1-1 = 0
      TP B=(1,0):  M1(B) = 0,       M2(B) = 1
      TP C=(0,1):  M1(C) = 1,       M2(C) = 0
      TP D=(-1,0): M1(D) = 0,       M2(D) = 1
    """
    # Reuse MITC4 nodal B (2x12) and add columns for modes
    Bs = np.zeros((2, 16))

    def gamma_xi_z_at(xi_t, eta_t):
        N = shape_N(xi_t, eta_t)
        dN = shape_dN(xi_t, eta_t)
        J, _, _ = jacobian(nc, dN)
        b = np.zeros(16)
        for i in range(4):
            b[3*i]   = dN[i, 0]
            b[3*i+1] = -N[i] * J[0, 0]
            b[3*i+2] = -N[i] * J[0, 1]
        # Incompatible mode contributions to gamma_xi_z:
        # gamma_xi_z = ... - sum N_TP * (J11 * mode_in_beta_x_at_TP + J12 * mode_in_beta_y_at_TP)
        # Pero al ser tying point evaluation, evaluamos los modos en TP:
        M1_TP = 1 - xi_t**2
        M2_TP = 1 - eta_t**2
        # Hmm pero para tying lo que importa es la rotacion beta_x al TP, not the shape
        # The mode adds to beta_x: alpha_1 * M1_TP + alpha_2 * M2_TP
        # So gamma_xi_z contribution: -J11 * (alpha_1 * M1_TP + alpha_2 * M2_TP)
        # In B-vector form: column 12 (alpha_1): -J11 * M1_TP, col 13 (alpha_2): -J11 * M2_TP
        b[12] = -J[0, 0] * M1_TP
        b[13] = -J[0, 0] * M2_TP
        b[14] = -J[0, 1] * M1_TP   # alpha_3 in beta_y, J12 component
        b[15] = -J[0, 1] * M2_TP
        return b

    def gamma_eta_z_at(xi_t, eta_t):
        N = shape_N(xi_t, eta_t)
        dN = shape_dN(xi_t, eta_t)
        J, _, _ = jacobian(nc, dN)
        b = np.zeros(16)
        for i in range(4):
            b[3*i]   = dN[i, 1]
            b[3*i+1] = -N[i] * J[1, 0]
            b[3*i+2] = -N[i] * J[1, 1]
        M1_TP = 1 - xi_t**2
        M2_TP = 1 - eta_t**2
        b[12] = -J[1, 0] * M1_TP
        b[13] = -J[1, 0] * M2_TP
        b[14] = -J[1, 1] * M1_TP
        b[15] = -J[1, 1] * M2_TP
        return b

    g_xi_A  = gamma_xi_z_at(0.0, -1.0)
    g_xi_C  = gamma_xi_z_at(0.0,  1.0)
    g_eta_B = gamma_eta_z_at(1.0,  0.0)
    g_eta_D = gamma_eta_z_at(-1.0, 0.0)

    g_xi_natural  = 0.5*(1-eta)*g_xi_A   + 0.5*(1+eta)*g_xi_C
    g_eta_natural = 0.5*(1-xi)*g_eta_D + 0.5*(1+xi)*g_eta_B

    dN = shape_dN(xi, eta)
    _, Jinv, _ = jacobian(nc, dN)
    Bs[0] = Jinv[0, 0]*g_xi_natural + Jinv[0, 1]*g_eta_natural
    Bs[1] = Jinv[1, 0]*g_xi_natural + Jinv[1, 1]*g_eta_natural
    return Bs

def element_stiffness_ibrahim(nc):
    """Compute K_e (12x12) with incompatible modes condensed out."""
    a1 = nc[1, 0] - nc[0, 0]   # element size in x
    b1 = nc[3, 1] - nc[0, 1]   # element size in y
    K_e_ext = np.zeros((16, 16))
    # Bending 2x2 Gauss
    for xi, eta, w_gp in gauss_2x2:
        dN = shape_dN(xi, eta)
        _, Jinv, detJ = jacobian(nc, dN)
        dNdx = phys_derivs(dN, Jinv)
        Bb = bending_B_ext(xi, eta, dNdx, a1, b1)
        K_e_ext += w_gp * detJ * (Bb.T @ Db @ Bb)
    # Shear MITC4 with 2x2 Gauss
    for xi, eta, w_gp in gauss_2x2:
        dN = shape_dN(xi, eta)
        _, _, detJ = jacobian(nc, dN)
        Bs = shear_B_mitc4_ext(xi, eta, nc, a1, b1)
        K_e_ext += w_gp * detJ * (Bs.T @ Ds @ Bs)
    # Static condensation: condense out alpha_1..4 (indices 12..15)
    K_aa = K_e_ext[0:12, 0:12]
    K_ab = K_e_ext[0:12, 12:16]
    K_bb = K_e_ext[12:16, 12:16]
    K_ba = K_e_ext[12:16, 0:12]
    try:
        K_e_cond = K_aa - K_ab @ np.linalg.solve(K_bb, K_ba)
    except np.linalg.LinAlgError:
        print("  WARN: K_bb singular, returning K_aa without condensation")
        K_e_cond = K_aa
    return K_e_cond

def element_load(nc, q):
    fe = np.zeros(12)
    for xi, eta, w_gp in gauss_2x2:
        N = shape_N(xi, eta)
        dN = shape_dN(xi, eta)
        _, _, detJ = jacobian(nc, dN)
        for i in range(4):
            fe[3*i] += N[i] * q * detJ * w_gp
    return fe

print("  Ensamblando Ibrahimbegovic (con modos incompatibles + condensacion)...")
t0 = time.perf_counter()
K = lil_matrix((n_dof, n_dof))
F = np.zeros(n_dof)
for e in range(n_elems):
    elem = elements[e]
    nc = coords[elem]
    Ke = element_stiffness_ibrahim(nc)
    fe = element_load(nc, q_load)
    dof_map = [3*ni + d for ni in elem for d in range(3)]
    for ii in range(12):
        F[dof_map[ii]] += fe[ii]
        for jj in range(12):
            K[dof_map[ii], dof_map[jj]] += Ke[ii, jj]
K = K.tocsr()
print(f"  Ensamblaje: {(time.perf_counter()-t0)*1000:.1f} ms")

# BC SS via penalty
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
print(f"  Solve:      {(time.perf_counter()-t0)*1000:.1f} ms")

w_all = u[0::3]
w_max_m = float(np.min(w_all))
w_max_mm = w_max_m * 1000.0
print(f"  w_max = {w_max_m:.6e} m  ({w_max_mm:.4f} mm)")
print()

# Comparacion
print("  COMPARACION FINAL")
print(f"  {'Solver':<32} {'w_max [mm]':>14}")
print(f"  {'-'*32} {'-'*14}")
print(f"  {'Calcpad BFS':<32} {'-6.6300':>14}")
print(f"  {'Python BFS':<32} {'-6.6353':>14}")
print(f"  {'SAP2000 MITC4 (target)':<32} {'-6.5290':>14}")
print(f"  {'Python MITC4 sin modos':<32} {'-6.3967':>14}")
print(f"  {'Python Ibrahimbegovic (este)':<32} {w_max_mm:>14.4f}")
print(f"  {'Navier teorico':<32} {'-6.6235':>14}")
print()
diff_vs_sap = (abs(w_max_mm) - 6.529)/6.529 * 100
print(f"  Diff vs SAP MITC4: {diff_vs_sap:+.3f}%")
if abs(diff_vs_sap) < 1:
    print("  ✓ Coincide con SAP al <1%")
elif abs(diff_vs_sap) < 3:
    print("  ~ Cerca de SAP (~3%)")
else:
    print("  ! Aun lejos de SAP — formulacion necesita refinamiento")
