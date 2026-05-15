"""
=============================================================================
 DSE (Discrete Shear Element) — Wilson Chapter 8.6
 La formulación EXACTA que usa SAP 2000 Plate-Thick.

 Ec. 8.6 (Wilson):
   γ_ij = (1/L_ij)(u_zj - u_zi) - (sin α / 2)(θ_xi + θ_xj)
                                 + (cos α / 2)(θ_yi + θ_yj)
                                 - (2/3)·Δθ_ij

 Estrategia:
   - Bending K_b = MISMA que DKQ (Q8 Serendipity con discrete Kirchhoff)
   - Shear  K_s = contribución MITC4-tying (γ ≠ 0 en cada lado, condensado)
   - K_e   = K_b + K_s   →   DSE Wilson

 Para placas finas (t → 0): K_s domina → γ → 0 → DSE = DKQ ≡ Plate-Thin
 Para placas gruesas: K_s finita → γ ≠ 0 → DSE diverge de DKQ.
=============================================================================
"""
import sys
import numpy as np
import time

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# ── Datos ─────────────────────────────────────────────────────────────
a, b = 6.0, 4.0
t = 0.40
E = 35e6
nu = 0.15
q = 10.0
KAPPA = 5.0 / 6.0
n_a, n_b = 6, 4

# SAP referencia (t=0.40)
SAP_W = 0.1066
SAP_MX = 6.6985
SAP_MY = 13.1789
SAP_MXY = -7.6956

n_e = n_a * n_b
n_j = (n_a + 1) * (n_b + 1)
n_dof = 3
n_k = 12
a_1 = a / n_a
b_1 = b / n_b
a_h = a_1 / 2
b_h = b_1 / 2
n_g = n_dof * n_j

# Mesh
x_j = np.zeros(n_j); y_j = np.zeros(n_j)
x = y = 0.0
for j in range(n_j):
    x_j[j] = x; y_j[j] = y
    y += b_1
    if y > b + 1e-9: y = 0; x += a_1

e_j = np.zeros((n_e, 4), dtype=int)
for ia in range(n_a):
    for ib in range(n_b):
        e = ib + n_b * ia
        j0 = e + ia
        e_j[e] = [j0, j0 + n_b + 1, j0 + n_b + 2, j0 + 1]

s_j = []
for i in range(n_a + 1):
    s_j.append((n_b + 1) * i)
    s_j.append((n_b + 1) * (i + 1) - 1)
for i in range(1, n_b):
    s_j.append(i)
    s_j.append(n_a * (n_b + 1) + i)

# Constitutivas
D11 = E * t**3 / (12 * (1 - nu**2))
D_b = D11 * np.array([
    [1.0, nu, 0.0],
    [nu, 1.0, 0.0],
    [0.0, 0.0, (1 - nu) / 2],
])
G = E / (2 * (1 + nu))
D_s = KAPPA * G * t * np.eye(2)

gp = np.array([-1/np.sqrt(3), 1/np.sqrt(3)])
gw = np.array([1.0, 1.0])
c_a = 1.5 / a_1
c_b = 1.5 / b_1


def dkq_eval_B_bending(xi, eta):
    """B-bending para DKQ (igual que la versión exitosa de plate-thin)."""
    xi_q8 = np.array([-1.0, 1.0, 1.0, -1.0,  0.0, 1.0, 0.0, -1.0])
    eta_q8 = np.array([-1.0, -1.0, 1.0, 1.0, -1.0, 0.0, 1.0, 0.0])
    dNdxi = np.zeros(8)
    dNdeta = np.zeros(8)
    for k in range(4):
        s, t_ = xi_q8[k], eta_q8[k]
        dNdxi[k]  = 0.25 * s * (1 + t_*eta) * (2*s*xi + t_*eta)
        dNdeta[k] = 0.25 * t_ * (1 + s*xi) * (s*xi + 2*t_*eta)
    dNdxi[4] = -xi * (1 - eta);            dNdeta[4] = -0.5 * (1 - xi**2)
    dNdxi[5] = 0.5 * (1 - eta**2);         dNdeta[5] = -eta * (1 + xi)
    dNdxi[6] = -xi * (1 + eta);            dNdeta[6] = 0.5 * (1 - xi**2)
    dNdxi[7] = -0.5 * (1 - eta**2);        dNdeta[7] = -eta * (1 - xi)

    dHx_dxi = np.zeros(12); dHx_deta = np.zeros(12)
    dHy_dxi = np.zeros(12); dHy_deta = np.zeros(12)
    # (Same substitution as DKQ plate-thin)
    dHx_dxi[0]  = -c_a*dNdxi[4];   dHx_deta[0] = -c_a*dNdeta[4]
    dHy_dxi[0]  = -c_b*dNdxi[7];   dHy_deta[0] = -c_b*dNdeta[7]
    dHx_dxi[1]  = dNdxi[0]  - 0.25*dNdxi[4]  + 0.5*dNdxi[7]
    dHx_deta[1] = dNdeta[0] - 0.25*dNdeta[4] + 0.5*dNdeta[7]
    dHy_dxi[2]  = dNdxi[0]  + 0.5*dNdxi[4]  - 0.25*dNdxi[7]
    dHy_deta[2] = dNdeta[0] + 0.5*dNdeta[4] - 0.25*dNdeta[7]
    dHx_dxi[3]  = c_a*dNdxi[4];    dHx_deta[3] = c_a*dNdeta[4]
    dHy_dxi[3]  = -c_b*dNdxi[5];   dHy_deta[3] = -c_b*dNdeta[5]
    dHx_dxi[4]  = dNdxi[1]  - 0.25*dNdxi[4]  + 0.5*dNdxi[5]
    dHx_deta[4] = dNdeta[1] - 0.25*dNdeta[4] + 0.5*dNdeta[5]
    dHy_dxi[5]  = dNdxi[1]  + 0.5*dNdxi[4]  - 0.25*dNdxi[5]
    dHy_deta[5] = dNdeta[1] + 0.5*dNdeta[4] - 0.25*dNdeta[5]
    dHx_dxi[6]  = c_a*dNdxi[6];    dHx_deta[6] = c_a*dNdeta[6]
    dHy_dxi[6]  = c_b*dNdxi[5];    dHy_deta[6] = c_b*dNdeta[5]
    dHx_dxi[7]  = dNdxi[2]  + 0.5*dNdxi[5]  - 0.25*dNdxi[6]
    dHx_deta[7] = dNdeta[2] + 0.5*dNdeta[5] - 0.25*dNdeta[6]
    dHy_dxi[8]  = dNdxi[2]  - 0.25*dNdxi[5]  + 0.5*dNdxi[6]
    dHy_deta[8] = dNdeta[2] - 0.25*dNdeta[5] + 0.5*dNdeta[6]
    dHx_dxi[9]  = -c_a*dNdxi[6];   dHx_deta[9] = -c_a*dNdeta[6]
    dHy_dxi[9]  = c_b*dNdxi[7];    dHy_deta[9] = c_b*dNdeta[7]
    dHx_dxi[10]  = dNdxi[3]  - 0.25*dNdxi[6]  + 0.5*dNdxi[7]
    dHx_deta[10] = dNdeta[3] - 0.25*dNdeta[6] + 0.5*dNdeta[7]
    dHy_dxi[11]  = dNdxi[3]  + 0.5*dNdxi[6]  - 0.25*dNdxi[7]
    dHy_deta[11] = dNdeta[3] + 0.5*dNdeta[6] - 0.25*dNdeta[7]
    B = np.zeros((3, 12))
    B[0, :] = dHx_dxi  / a_h
    B[1, :] = dHy_deta / b_h
    B[2, :] = dHx_deta / b_h + dHy_dxi / a_h
    return B


def mitc4_eval_Bs(xi, eta):
    """Shear B via MITC4 tying (β_x = ∂w/∂x in thin limit)."""
    inv_2ah = 1.0 / (2.0 * a_h)
    inv_2bh = 1.0 / (2.0 * b_h)
    gA = np.zeros(12); gA[0] = -inv_2ah; gA[1] = -0.5; gA[3] =  inv_2ah; gA[4] = -0.5
    gC = np.zeros(12); gC[6] =  inv_2ah; gC[7] = -0.5; gC[9] = -inv_2ah; gC[10] = -0.5
    gB = np.zeros(12); gB[3] = -inv_2bh; gB[5] = -0.5; gB[6] =  inv_2bh; gB[8] = -0.5
    gD = np.zeros(12); gD[0] = -inv_2bh; gD[2] = -0.5; gD[9] =  inv_2bh; gD[11] = -0.5
    Bs = np.zeros((2, 12))
    Bs[0, :] = 0.5 * (1 - eta) * gA + 0.5 * (1 + eta) * gC
    Bs[1, :] = 0.5 * (1 - xi) * gD + 0.5 * (1 + xi) * gB
    return Bs


# Bilinear N for load distribution (DKQ uses Q4 bilinear for w consistency)
def bilinear_N(xi, eta):
    xi_n = np.array([-1, 1, 1, -1])
    eta_n = np.array([-1, -1, 1, 1])
    return 0.25 * (1 + xi_n*xi) * (1 + eta_n*eta)


# ── Element K_e ──────────────────────────────────────────────────────
K_e = np.zeros((12, 12))
F_e = np.zeros(12)
for ig in range(2):
    for jg in range(2):
        xi, eta = gp[ig], gp[jg]
        wgt = gw[ig] * gw[jg]
        Bb = dkq_eval_B_bending(xi, eta)
        Bs = mitc4_eval_Bs(xi, eta)
        jac = a_h * b_h * wgt
        K_e += Bb.T @ D_b @ Bb * jac
        K_e += Bs.T @ D_s @ Bs * jac
        Nv = bilinear_N(xi, eta)
        for k in range(4):
            F_e[3*k] += Nv[k] * q * jac

# Ensamblaje
t0 = time.perf_counter()
K = np.zeros((n_g, n_g))
F = np.zeros(n_g)
for e in range(n_e):
    gdl = np.zeros(12, dtype=int)
    for i in range(4):
        gi = e_j[e, i]
        for ii in range(n_dof):
            gdl[n_dof*i + ii] = n_dof*gi + ii
    K[np.ix_(gdl, gdl)] += K_e
    F[gdl] += F_e

# BC penalty (igual SAP s2k)
k_s = 1e20
for j_n in s_j:
    g = n_dof * j_n
    K[g, g] += k_s
    is_x = (x_j[j_n] < 1e-9) or (x_j[j_n] > a - 1e-9)
    is_y = (y_j[j_n] < 1e-9) or (y_j[j_n] > b - 1e-9)
    if is_x and is_y:
        K[g+1, g+1] += k_s
        K[g+2, g+2] += k_s
    elif is_x:
        K[g+2, g+2] += k_s
    elif is_y:
        K[g+1, g+1] += k_s

Z = np.linalg.solve(K, F)
t_solve = (time.perf_counter() - t0) * 1000

w_nodo_mm = Z[::3] * 1000
j_centro = (n_a // 2) * (n_b + 1) + (n_b // 2)
w_centro = w_nodo_mm[j_centro]

# Moments recovery (2×2 Gauss + extrapolation bilineal — igual DKQ)
sqrt3 = np.sqrt(3.0)
M_j = np.zeros((3, n_j))
c_j = np.zeros(n_j, dtype=int)
xi_corner = np.array([-1, 1, 1, -1])
eta_corner = np.array([-1, -1, 1, 1])
xi_gauss = np.array([-1, 1, -1, 1])
eta_gauss = np.array([-1, -1, 1, 1])

for e in range(n_e):
    gdl = np.zeros(12, dtype=int)
    for i in range(4):
        gi = e_j[e, i]
        for ii in range(n_dof):
            gdl[n_dof*i + ii] = n_dof*gi + ii
    Ze = Z[gdl]
    Mg = np.zeros((3, 4))
    g_idx = 0
    for jg in range(2):
        for ig in range(2):
            xi, eta = gp[ig], gp[jg]
            Bb = dkq_eval_B_bending(xi, eta)
            M = -D_b @ (Bb @ Ze)
            Mg[:, g_idx] = M
            g_idx += 1
    for c in range(4):
        xc, ec = xi_corner[c], eta_corner[c]
        Mxx_c = Myy_c = Mxy_c = 0.0
        for k in range(4):
            Nk = 0.25 * (1 + xi_gauss[k]*sqrt3*xc) * (1 + eta_gauss[k]*sqrt3*ec)
            Mxx_c += Nk * Mg[0, k]
            Myy_c += Nk * Mg[1, k]
            Mxy_c += Nk * Mg[2, k]
        j_nod = e_j[e, c]
        M_j[0, j_nod] += Mxx_c
        M_j[1, j_nod] += Myy_c
        M_j[2, j_nod] += Mxy_c
        c_j[j_nod] += 1

for j in range(n_j):
    if c_j[j] > 0:
        M_j[:, j] /= c_j[j]

Mx_centro = M_j[0, j_centro]
My_centro = M_j[1, j_centro]
Mxy_esquina = M_j[2, 0]

print("=" * 70)
print("  DSE Wilson (DKQ bending + MITC4 shear) — Python vs SAP 2000")
print("=" * 70)
print(f"  Caso         : 6×4×{t:.2f} m, E=35 GPa, ν=0.15, q=10 kN/m²")
print(f"  Tiempo solve : {t_solve:.2f} ms")
print(f"  {'-'*64}")
print(f"  {'Métrica':<14} {'Python DSE':>15} {'SAP P-Thick':>14} {'Δ %':>10}")
print(f"  {'w_centro':<14} {w_centro:>15.6f} {SAP_W:>14.6f} {(abs(w_centro)-SAP_W)/SAP_W*100:>+9.4f}%")
print(f"  {'Mx centro':<14} {Mx_centro:>15.6f} {SAP_MX:>14.6f} {(Mx_centro-SAP_MX)/SAP_MX*100:>+9.4f}%")
print(f"  {'My centro':<14} {My_centro:>15.6f} {SAP_MY:>14.6f} {(My_centro-SAP_MY)/SAP_MY*100:>+9.4f}%")
print(f"  {'Mxy esquina':<14} {Mxy_esquina:>15.6f} {SAP_MXY:>14.6f} {(abs(Mxy_esquina)-abs(SAP_MXY))/abs(SAP_MXY)*100:>+9.4f}%")
print("=" * 70)
