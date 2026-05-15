"""
=============================================================================
 MITC4 (Mixed Interpolation of Tensorial Components, 4-node)
 Dvorkin & Bathe 1985 — la formulación que usa SAP 2000 Plate-Thick (ShellType=2)

 Mismo caso Calcpad oficial: 6×4×0.10 m, E=35 GPa, ν=0.15, q=10 kN/m², mesh 6×4

 Esperado (SAP 2000 v24 medido vía API):
   w_max       = 6.4567 mm
   Mx centro   = 6.4435 kNm/m
   My centro   = 12.4305 kNm/m
   Mxy esquina = -7.7089 kNm/m

 Diferencia con DKQ (plate-thin): MITC4 incluye deformación por corte.
 Para placas delgadas (t/L < 1/20) la diferencia es típicamente 1-2%.
=============================================================================
"""
import numpy as np
import time

# ── Datos ────────────────────────────────────────────────────────────────
a, b = 6.0, 4.0
t = 0.10
E = 35e6
nu = 0.15
q = 10.0
KAPPA = 5.0 / 6.0       # shear correction factor (Reissner)

n_a, n_b = 6, 4
n_e = n_a * n_b
n_j = (n_a + 1) * (n_b + 1)
n_dof = 3               # w, β_x, β_y
n_k = 12
a_1 = a / n_a
b_1 = b / n_b
a_h = a_1 / 2
b_h = b_1 / 2
n_g = n_dof * n_j

# Mesh
x_j = np.zeros(n_j)
y_j = np.zeros(n_j)
x, y = 0.0, 0.0
for j in range(n_j):
    x_j[j] = x; y_j[j] = y
    y += b_1
    if y > b + 1e-9:
        y = 0; x += a_1

e_j = np.zeros((n_e, 4), dtype=int)
for ia in range(n_a):
    for ib in range(n_b):
        e = ib + n_b * ia
        j_corner = e + ia
        e_j[e] = [j_corner, j_corner + n_b + 1, j_corner + n_b + 2, j_corner + 1]

# Apoyos perimetrales
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
D_s = KAPPA * G * t * np.eye(2)     # shear D matrix (2×2)

# Cuadratura 2×2 Gauss
gp = np.array([-1/np.sqrt(3), 1/np.sqrt(3)])
gw = np.array([1.0, 1.0])


def mitc4_eval_Bb_Bs(xi, eta):
    """
    Returns:
      Bb (3 × 12): bending strain-displacement matrix
      Bs (2 × 12): shear strain-displacement matrix (MITC4 tying)
    DOF order: [w_1, βx_1, βy_1, w_2, βx_2, βy_2, w_3, βx_3, βy_3, w_4, βx_4, βy_4]
    where βx = θ_y_SAP (rotación about Y, slope ∂w/∂x in thin limit)
          βy = -θ_x_SAP (slope ∂w/∂y in thin limit)
    """
    # ── Bilinear Q4 shape functions and derivatives ──────────────────
    xi_n = np.array([-1.0, 1.0, 1.0, -1.0])
    eta_n = np.array([-1.0, -1.0, 1.0, 1.0])
    Nv = np.zeros(4); dNdx = np.zeros(4); dNdy = np.zeros(4)
    for k in range(4):
        s, t_ = xi_n[k], eta_n[k]
        Nv[k]   = 0.25 * (1 + s*xi) * (1 + t_*eta)
        dNdx[k] = 0.25 * s * (1 + t_*eta) / a_h   # ∂N/∂x = (1/a_h)·∂N/∂ξ
        dNdy[k] = 0.25 * t_ * (1 + s*xi) / b_h

    # ── Bending B (3 × 12) ───────────────────────────────────────────
    # κ_x = ∂βx/∂x, κ_y = ∂βy/∂y, 2κ_xy = ∂βx/∂y + ∂βy/∂x
    Bb = np.zeros((3, 12))
    for k in range(4):
        idx = 3 * k
        # DOF idx+1 = βx_k, idx+2 = βy_k
        Bb[0, idx+1] = dNdx[k]
        Bb[1, idx+2] = dNdy[k]
        Bb[2, idx+1] = dNdy[k]
        Bb[2, idx+2] = dNdx[k]

    # ── MITC4 SHEAR via tying ────────────────────────────────────────
    # γ_xz_A at (ξ=0, η=-1): bottom midside, between nodes 1, 2
    #   γ_xz_A = (w_2 - w_1)/(2·a_h) - 0.5·(βx_1 + βx_2)
    # γ_xz_C at (ξ=0, η=+1): top midside, between nodes 4, 3
    #   γ_xz_C = (w_3 - w_4)/(2·a_h) - 0.5·(βx_4 + βx_3)
    # γ_yz_B at (ξ=+1, η=0): right midside, between nodes 2, 3
    #   γ_yz_B = (w_3 - w_2)/(2·b_h) - 0.5·(βy_2 + βy_3)
    # γ_yz_D at (ξ=-1, η=0): left midside, between nodes 1, 4
    #   γ_yz_D = (w_4 - w_1)/(2·b_h) - 0.5·(βy_1 + βy_4)
    #
    # Interpolación bilinear:
    #   γ_xz(ξ, η) = 0.5·(1-η)·γ_xz_A + 0.5·(1+η)·γ_xz_C
    #   γ_yz(ξ, η) = 0.5·(1-ξ)·γ_yz_D + 0.5·(1+ξ)·γ_yz_B

    inv_2ah = 1.0 / (2.0 * a_h)
    inv_2bh = 1.0 / (2.0 * b_h)

    # γ_xz_A row (12 entries)
    gA = np.zeros(12)
    gA[0] = -inv_2ah; gA[1] = -0.5             # w_1, βx_1
    gA[3] =  inv_2ah; gA[4] = -0.5             # w_2, βx_2

    # γ_xz_C row
    gC = np.zeros(12)
    gC[6] =  inv_2ah; gC[7] = -0.5             # w_3, βx_3
    gC[9] = -inv_2ah; gC[10] = -0.5            # w_4, βx_4

    # γ_yz_B row
    gB = np.zeros(12)
    gB[3] = -inv_2bh; gB[5] = -0.5             # w_2, βy_2
    gB[6] =  inv_2bh; gB[8] = -0.5             # w_3, βy_3

    # γ_yz_D row
    gD = np.zeros(12)
    gD[0] = -inv_2bh; gD[2] = -0.5             # w_1, βy_1
    gD[9] =  inv_2bh; gD[11] = -0.5            # w_4, βy_4

    Bs = np.zeros((2, 12))
    Bs[0, :] = 0.5 * (1 - eta) * gA + 0.5 * (1 + eta) * gC
    Bs[1, :] = 0.5 * (1 - xi) * gD + 0.5 * (1 + xi) * gB

    return Bb, Bs, Nv


# ── Element K_e ──────────────────────────────────────────────────────────
K_e = np.zeros((12, 12))
F_e = np.zeros(12)
for ig in range(2):
    for jg in range(2):
        xi, eta, wgt = gp[ig], gp[jg], gw[ig] * gw[jg]
        Bb, Bs, Nv = mitc4_eval_Bb_Bs(xi, eta)
        jac = a_h * b_h * wgt
        # bending
        K_e += Bb.T @ D_b @ Bb * jac
        # shear (MITC4 — sin under-integration porque ya está estabilizado)
        K_e += Bs.T @ D_s @ Bs * jac
        # consistent load (bilineal en w-DOFs)
        for k in range(4):
            F_e[3*k] += Nv[k] * q * jac

# ── Ensamblaje ───────────────────────────────────────────────────────────
t0 = time.perf_counter()
K = np.zeros((n_g, n_g))
F = np.zeros(n_g)
for e in range(n_e):
    gdl = np.zeros(12, dtype=int)
    for i in range(4):
        gi = e_j[e, i]
        for ii in range(n_dof):
            gdl[n_dof * i + ii] = n_dof * gi + ii
    K[np.ix_(gdl, gdl)] += K_e
    F[gdl] += F_e

# ── BC penalty (igual SAP 2000) ──────────────────────────────────────────
# Misma convención que DKQ: βx → ∂w/∂x → restringido en bordes y=const
#                          βy → ∂w/∂y → restringido en bordes x=const
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

# w por nodo
w_nodo_mm = Z[::3] * 1000
j_centro = (n_a // 2) * (n_b + 1) + (n_b // 2)
w_centro = w_nodo_mm[j_centro]

# Momentos: 2×2 Gauss + extrapolación bilineal a corners (estilo SAP)
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
            gdl[n_dof * i + ii] = n_dof * gi + ii
    Ze = Z[gdl]
    Mg = np.zeros((3, 4))
    g_idx = 0
    for jg in range(2):
        for ig in range(2):
            xi, eta = gp[ig], gp[jg]
            Bb, _, _ = mitc4_eval_Bb_Bs(xi, eta)
            kappa = Bb @ Ze
            M = -D_b @ kappa
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

# Reporte
SAP_W = 6.4567
SAP_MX = 6.4435
SAP_MY = 12.4305
SAP_MXY = -7.7089

print("=" * 70)
print("  MITC4 (Dvorkin-Bathe 1985) — Python (validacion vs SAP 2000 Plate-Thick)")
print("=" * 70)
print(f"  Caso         : 6 × 4 × 0.10 m, E=35 GPa, ν=0.15, q=10 kN/m²")
print(f"  Malla        : {n_a} × {n_b} ({n_j} nodos, {n_g} GDL)")
print(f"  Tiempo solve : {t_solve:.2f} ms")
print(f"  {'-'*64}")
print(f"  {'Métrica':<14} {'Python MITC4':>15} {'SAP 2000':>14} {'Δ %':>10}")
print(f"  {'w_centro':<14} {w_centro:>15.6f} {SAP_W:>14.6f} {(abs(w_centro)-SAP_W)/SAP_W*100:>+9.4f}%")
print(f"  {'Mx centro':<14} {Mx_centro:>15.6f} {SAP_MX:>14.6f} {(Mx_centro-SAP_MX)/SAP_MX*100:>+9.4f}%")
print(f"  {'My centro':<14} {My_centro:>15.6f} {SAP_MY:>14.6f} {(My_centro-SAP_MY)/SAP_MY*100:>+9.4f}%")
print(f"  {'Mxy esquina':<14} {Mxy_esquina:>15.6f} {SAP_MXY:>14.6f} {(abs(Mxy_esquina)-abs(SAP_MXY))/abs(SAP_MXY)*100:>+9.4f}%")
print("=" * 70)
