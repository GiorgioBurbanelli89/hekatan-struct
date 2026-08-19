#!/usr/bin/env python3
"""
Iterate over Mindlin-Reissner Q4 plate FEM formulations to minimize Mxy error
vs SAP 2000 v24 reference: w=-6.4567 mm, Mxy esquina=-7.7089 kN·m/m

Test variants:
  V1: MITC4 + Wilson incomp bending (current baseline)
  V2: V1 + alpha contribution in stress recovery
  V3: MITC4 + 5-mode incomp (Taylor-Beresford-Wilson)
  V4: V1 + global L2 stress smoothing
  V5: V1 + averaged corner from 4 adjacent elements (interior corner)
  V6: V1 + cubic moment field via DKQ-like reconstruction
"""
import numpy as np
from numpy.linalg import solve

# ==== Caso (igual SAP 2000 v24 reference) ====
a, b, t = 6.0, 4.0, 0.10
E_kNm2, nu = 35e6, 0.15
q = 10.0
n_a, n_b = 6, 4
kappa = 5/6
G = E_kNm2 / (2*(1+nu))

n_e = n_a*n_b
n_j = (n_a+1)*(n_b+1)
a_1, b_1 = a/n_a, b/n_b
n_dof = 3
n_ke = 12
n_g = n_dof*n_j

# Reference (SAP 2000 v24 Plate-Thick MITC4)
SAP_W_CENTRO = -6.4567
SAP_MX_CENTRO = 6.4435
SAP_MY_CENTRO = 12.4305
SAP_MXY_ESQUINA = -7.7089

# D matrices
D11 = E_kNm2*t**3/(12*(1-nu**2))
D_b = D11*np.array([[1, nu, 0], [nu, 1, 0], [0, 0, (1-nu)/2]])
D_s = kappa*G*t*np.eye(2)

# Mesh + connectivity (same as .m)
x_j = np.zeros(n_j); y_j = np.zeros(n_j)
xv, yv = 0, 0
for j in range(n_j):
    x_j[j] = xv; y_j[j] = yv
    yv += b_1
    if yv > b + 1e-9:
        yv = 0; xv += a_1
e_j = np.zeros((n_e, 4), dtype=int)
for i_a in range(n_a):
    for i_b in range(n_b):
        e = i_b + n_b*i_a
        j0 = e + i_a
        e_j[e, 0] = j0
        e_j[e, 1] = j0 + n_b + 1
        e_j[e, 2] = j0 + n_b + 2
        e_j[e, 3] = j0 + 1

# Apoyos
s_j_list = []
for i in range(n_a + 1):
    s_j_list.append((n_b + 1)*(i+1) - n_b - 1)
for i in range(n_a + 1):
    s_j_list.append((n_b + 1)*(i+1) - 1)
for i in range(2, n_b + 1):
    s_j_list.append(i - 1)
for i in range(2, n_b + 1):
    s_j_list.append(n_a*(n_b + 1) + i - 1)
s_j = list(set(s_j_list))

# Shape functions
def N_def(xi, eta):
    return np.array([0.25*(1-xi)*(1-eta), 0.25*(1+xi)*(1-eta),
                     0.25*(1+xi)*(1+eta), 0.25*(1-xi)*(1+eta)])

def dN_dxi(eta):
    return np.array([-0.25*(1-eta), 0.25*(1-eta), 0.25*(1+eta), -0.25*(1+eta)])

def dN_deta(xi):
    return np.array([-0.25*(1-xi), -0.25*(1+xi), 0.25*(1+xi), 0.25*(1-xi)])

def B_bending(xi, eta):
    dNx = (2/a_1) * dN_dxi(eta)
    dNy = (2/b_1) * dN_deta(xi)
    B = np.zeros((3, 12))
    for i in range(4):
        col_tx = i*3 + 1
        col_ty = i*3 + 2
        B[0, col_tx] = -dNx[i]
        B[1, col_ty] = -dNy[i]
        B[2, col_tx] = -dNy[i]
        B[2, col_ty] = -dNx[i]
    return B

def B_bending_incomp(xi, eta):
    dN1_dx = (2/a_1) * (-2*xi)
    dN2_dy = (2/b_1) * (-2*eta)
    B = np.zeros((3, 4))
    B[0, 0] = -dN1_dx
    B[1, 3] = -dN2_dy
    B[2, 0] = 0; B[2, 1] = -dN2_dy; B[2, 2] = -dN1_dx; B[2, 3] = 0
    return B

def B_shear_MITC4(xi, eta):
    """MITC4 tying point interpolation"""
    tying = [(0, -1), (1, 0), (0, 1), (-1, 0)]
    dirs = [1, 2, 1, 2]
    B_t = np.zeros((4, 12))
    for k in range(4):
        xi_t, eta_t = tying[k]
        Nw_t = N_def(xi_t, eta_t)
        dNx_t = (2/a_1) * dN_dxi(eta_t)
        dNy_t = (2/b_1) * dN_deta(xi_t)
        if dirs[k] == 1:
            for i in range(4):
                B_t[k, i*3 + 0] = dNx_t[i]
                B_t[k, i*3 + 1] = -Nw_t[i]
        else:
            for i in range(4):
                B_t[k, i*3 + 0] = dNy_t[i]
                B_t[k, i*3 + 2] = -Nw_t[i]
    h_A = 0.5*(1-eta); h_C = 0.5*(1+eta)
    h_D = 0.5*(1-xi);  h_B = 0.5*(1+xi)
    B = np.zeros((2, 12))
    B[0, :] = h_A*B_t[0] + h_C*B_t[2]
    B[1, :] = h_D*B_t[3] + h_B*B_t[1]
    return B

# Gauss
gp_e = 1/np.sqrt(3)
gps = [(-gp_e,-gp_e), (gp_e,-gp_e), (gp_e,gp_e), (-gp_e,gp_e)]
weights = [1]*4
dV = a_1*b_1/4

def build_Ke():
    K_uu = np.zeros((12, 12))
    K_ua = np.zeros((12, 4))
    K_aa = np.zeros((4, 4))
    for k in range(4):
        xi, eta = gps[k]
        w_g = weights[k]
        Bb_u = B_bending(xi, eta)
        Bb_a = B_bending_incomp(xi, eta)
        K_uu += Bb_u.T @ D_b @ Bb_u * dV * w_g
        K_ua += Bb_u.T @ D_b @ Bb_a * dV * w_g
        K_aa += Bb_a.T @ D_b @ Bb_a * dV * w_g
        Bs = B_shear_MITC4(xi, eta)
        K_uu += Bs.T @ D_s @ Bs * dV * w_g
    K_e = K_uu - K_ua @ solve(K_aa, K_ua.T)
    return K_e, K_uu, K_ua, K_aa

def build_Fe():
    F_e = np.zeros(12)
    for k in range(4):
        xi, eta = gps[k]
        w_g = weights[k]
        Nw = N_def(xi, eta)
        for i in range(4):
            F_e[i*3 + 0] -= q * Nw[i] * dV * w_g
    return F_e

# Assemble K, F (todos los elementos identicos)
K_e, K_uu, K_ua, K_aa = build_Ke()
F_e = build_Fe()
K = np.zeros((n_g, n_g))
F = np.zeros(n_g)
for e in range(n_e):
    for ni in range(4):
        ji = e_j[e, ni]
        for nj in range(4):
            jj = e_j[e, nj]
            for di in range(3):
                gi = 3*ji + di
                ei = 3*ni + di
                for dj in range(3):
                    gj = 3*jj + dj
                    ej = 3*nj + dj
                    K[gi, gj] += K_e[ei, ej]
        for di in range(3):
            F[3*ji + di] += F_e[3*ni + di]
# Penalty BCs (w=0)
k_s = 1e20
for js in s_j:
    K[3*js, 3*js] += k_s
Z = solve(K, F)

# Center node
center_joint = (n_a//2)*(n_b + 1) + (n_b//2)
w_centro_mm = Z[3*center_joint + 0] * 1000

# ============================================
# RECOVERY VARIANTS
# ============================================
print(f"\n{'='*70}")
print(f"  SAP target: w={SAP_W_CENTRO}, Mxy esquina={SAP_MXY_ESQUINA}")
print(f"  Calcpad w_centro = {w_centro_mm:.4f} mm  (delta {(w_centro_mm-SAP_W_CENTRO)/SAP_W_CENTRO*100:+.2f}%)")
print(f"{'='*70}\n")

sq3 = np.sqrt(3)
E_extrap = np.array([
    [1+sq3/2,   -0.5,    1-sq3/2,   -0.5  ],
    [-0.5,    1+sq3/2,  -0.5,    1-sq3/2],
    [1-sq3/2,  -0.5,    1+sq3/2,  -0.5  ],
    [-0.5,    1-sq3/2,  -0.5,    1+sq3/2]
])

def recover_M(use_alpha=False, recovery="gauss_extrap_corners"):
    """Recover Mxy at corner (0,0) — node 0 by mesh construction."""
    Mxx_n = np.zeros(n_j); Myy_n = np.zeros(n_j); Mxy_n = np.zeros(n_j)
    count = np.zeros(n_j)
    for e in range(n_e):
        Z_e = np.zeros(12)
        for i in range(4):
            for k in range(3):
                Z_e[i*3 + k] = Z[3*e_j[e, i] + k]
        alpha_e = np.zeros(4)
        if use_alpha:
            alpha_e = -solve(K_aa, K_ua.T @ Z_e)
        M_gp = np.zeros((3, 4))
        for k in range(4):
            xi, eta = gps[k]
            Bb = B_bending(xi, eta)
            if use_alpha:
                Bba = B_bending_incomp(xi, eta)
                M_gp[:, k] = D_b @ (Bb @ Z_e + Bba @ alpha_e)
            else:
                M_gp[:, k] = D_b @ Bb @ Z_e
        if recovery == "gauss_extrap_corners":
            M_corner = M_gp @ E_extrap.T
        elif recovery == "direct_corners":
            M_corner = np.zeros((3, 4))
            corners = [(-1,-1), (1,-1), (1,1), (-1,1)]
            for k, (cx, cy) in enumerate(corners):
                Bb_c = B_bending(cx, cy)
                if use_alpha:
                    Bba_c = B_bending_incomp(cx, cy)
                    M_corner[:, k] = D_b @ (Bb_c @ Z_e + Bba_c @ alpha_e)
                else:
                    M_corner[:, k] = D_b @ Bb_c @ Z_e
        elif recovery == "center_to_corner":
            # Bilinear extrap from center (xi=0,eta=0) to corners — overshoot
            Bb_c = B_bending(0, 0)
            M_center = D_b @ Bb_c @ Z_e
            M_corner = np.tile(M_center.reshape(3,1), 4)
        for i in range(4):
            gnode = e_j[e, i]
            Mxx_n[gnode] += M_corner[0, i]
            Myy_n[gnode] += M_corner[1, i]
            Mxy_n[gnode] += M_corner[2, i]
            count[gnode] += 1
    for j in range(n_j):
        if count[j] > 0:
            Mxx_n[j] /= count[j]; Myy_n[j] /= count[j]; Mxy_n[j] /= count[j]
    # node 0 = corner (0,0)
    return Mxx_n[center_joint], Myy_n[center_joint], Mxy_n[0]

variants = [
    ("V1: MITC4+Incomp, Gauss extrap, B_u only",    False, "gauss_extrap_corners"),
    ("V2: + alpha in stress recovery",               True,  "gauss_extrap_corners"),
    ("V3: B_u direct at corners",                    False, "direct_corners"),
    ("V4: + alpha direct at corners",                True,  "direct_corners"),
    ("V5: Center value extrap",                      False, "center_to_corner"),
    ("V6: + alpha center extrap",                    True,  "center_to_corner"),
]

import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
print(f"{'Variante':<55} | {'Mx_c':>8} | {'My_c':>9} | {'Mxy_esq':>9} | {'d Mxy':>7}")
print("-"*100)
for name, use_a, rec in variants:
    Mx_c, My_c, Mxy_e = recover_M(use_alpha=use_a, recovery=rec)
    delta = (abs(Mxy_e) - abs(SAP_MXY_ESQUINA)) / abs(SAP_MXY_ESQUINA) * 100
    marker = "✅" if abs(delta) < 5 else ("⚠️" if abs(delta) < 15 else "❌")
    print(f"{name:<55} | {Mx_c:>8.4f} | {My_c:>9.4f} | {Mxy_e:>9.4f} | {delta:>+6.2f}% {marker}")

print(f"\nSAP reference: Mx_c={SAP_MX_CENTRO}, My_c={SAP_MY_CENTRO}, Mxy_esq={SAP_MXY_ESQUINA}")
