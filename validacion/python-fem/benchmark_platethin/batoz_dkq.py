"""
=============================================================================
 Batoz DKQ - implementación Python para validar la fórmula antes de portarla
 a Calcpad oficial.

 Caso: placa 6 × 4 × 0.10 m, E = 35 GPa, ν = 0.15, q = 10 kN/m², mesh 6×4
 BC: simply-supported 4 bordes (hard SS, igual SAP 2000)

 Resultado esperado (= SAP 2000 v24 medido vía API):
   w_centro    = 6.5286 mm
   Mx centro   = 6.2249 kNm/m
   My centro   = 12.7592 kNm/m
   Mxy esquina = -7.2541 kNm/m
=============================================================================
"""
import numpy as np
import time

# ── DATOS ────────────────────────────────────────────────────────────────
a, b = 6.0, 4.0
t = 0.10
E = 35e6          # kN/m²
nu = 0.15
q = 10.0          # kN/m²

n_a, n_b = 6, 4
n_e = n_a * n_b
n_j = (n_a + 1) * (n_b + 1)
n_dof = 3
n_k = n_dof * 4   # 12
a_1 = a / n_a
b_1 = b / n_b
n_g = n_dof * n_j

# ── MESH ─────────────────────────────────────────────────────────────────
x_j = np.zeros(n_j)
y_j = np.zeros(n_j)
x, y = 0.0, 0.0
for j in range(n_j):
    x_j[j] = x
    y_j[j] = y
    y += b_1
    if y > b + 1e-9:
        y = 0.0
        x += a_1

e_j = np.zeros((n_e, 4), dtype=int)
for ia in range(n_a):
    for ib in range(n_b):
        e = ib + n_b * ia
        j_corner = e + ia
        e_j[e] = [j_corner, j_corner + n_b + 1, j_corner + n_b + 2, j_corner + 1]

# ── Nodos apoyados (4 bordes) ────────────────────────────────────────────
s_j = []
for i in range(n_a + 1):
    s_j.append((n_b + 1) * i)               # y=0
    s_j.append((n_b + 1) * (i + 1) - 1)     # y=b
for i in range(1, n_b):
    s_j.append(i)                            # x=0 (interior)
    s_j.append(n_a * (n_b + 1) + i)          # x=a (interior)

# ── Constitutiva D (3x3) ─────────────────────────────────────────────────
D11 = E * t**3 / (12 * (1 - nu**2))
D = D11 * np.array([
    [1.0, nu, 0.0],
    [nu, 1.0, 0.0],
    [0.0, 0.0, (1 - nu) / 2],
])

# ── Cuadratura 2×2 Gauss ─────────────────────────────────────────────────
gp = np.array([-1/np.sqrt(3), 1/np.sqrt(3)])
gw = np.array([1.0, 1.0])

a_h = a_1 / 2
b_h = b_1 / 2
c_a = 1.5 / a_1
c_b = 1.5 / b_1


def dkq_eval_B(xi, eta):
    """
    Batoz DKQ B matrix (3 × 12) at natural coords (xi, eta) ∈ [-1, +1].
    DOF order: [w_1, βx_1, βy_1, w_2, βx_2, βy_2, w_3, βx_3, βy_3, w_4, βx_4, βy_4]
    """
    # ── Q8 Serendipity shape functions and derivatives ────────────────
    # Corner nodes 1..4 at (-1,-1), (+1,-1), (+1,+1), (-1,+1)
    xi_q8 = np.array([-1, 1, 1, -1,  0, 1, 0, -1])
    eta_q8 = np.array([-1, -1, 1, 1, -1, 0, 1, 0])

    N = np.zeros(8)
    dNdxi = np.zeros(8)
    dNdeta = np.zeros(8)
    for k in range(4):
        s, t_ = xi_q8[k], eta_q8[k]
        N[k] = 0.25 * (1 + s*xi) * (1 + t_*eta) * (s*xi + t_*eta - 1)
        dNdxi[k]  = 0.25 * s * (1 + t_*eta) * (2*s*xi + t_*eta)
        dNdeta[k] = 0.25 * t_ * (1 + s*xi) * (s*xi + 2*t_*eta)
    # Midside 5: (0, -1)
    N[4] = 0.5 * (1 - xi**2) * (1 - eta)
    dNdxi[4]  = -xi * (1 - eta)
    dNdeta[4] = -0.5 * (1 - xi**2)
    # Midside 6: (+1, 0)
    N[5] = 0.5 * (1 + xi) * (1 - eta**2)
    dNdxi[5]  = 0.5 * (1 - eta**2)
    dNdeta[5] = -eta * (1 + xi)
    # Midside 7: (0, +1)
    N[6] = 0.5 * (1 - xi**2) * (1 + eta)
    dNdxi[6]  = -xi * (1 + eta)
    dNdeta[6] = 0.5 * (1 - xi**2)
    # Midside 8: (-1, 0)
    N[7] = 0.5 * (1 - xi) * (1 - eta**2)
    dNdxi[7]  = -0.5 * (1 - eta**2)
    dNdeta[7] = -eta * (1 - xi)

    # ── Kirchhoff discrete: substituir midside DOFs en función de corner DOFs
    #   βx_5 = c_a*(w_2 - w_1) - 0.25*(βx_1 + βx_2)
    #   βy_5 = 0.5*(βy_1 + βy_2)
    #   βx_6 = 0.5*(βx_2 + βx_3)
    #   βy_6 = c_b*(w_3 - w_2) - 0.25*(βy_2 + βy_3)
    #   βx_7 = c_a*(w_3 - w_4) - 0.25*(βx_3 + βx_4)
    #   βy_7 = 0.5*(βy_3 + βy_4)
    #   βx_8 = 0.5*(βx_4 + βx_1)
    #   βy_8 = c_b*(w_4 - w_1) - 0.25*(βy_1 + βy_4)
    #
    # dHx/dξ = Σ N_k βx_k derivada, dHx/dη análogo. Igual Hy.
    dHx_dxi = np.zeros(12)
    dHx_deta = np.zeros(12)
    dHy_dxi = np.zeros(12)
    dHy_deta = np.zeros(12)

    # w_1 (DOF 0)
    dHx_dxi[0]  = -c_a * dNdxi[4]
    dHx_deta[0] = -c_a * dNdeta[4]
    dHy_dxi[0]  = -c_b * dNdxi[7]
    dHy_deta[0] = -c_b * dNdeta[7]
    # βx_1 (DOF 1)
    dHx_dxi[1]  = dNdxi[0]  - 0.25 * dNdxi[4]  + 0.5 * dNdxi[7]
    dHx_deta[1] = dNdeta[0] - 0.25 * dNdeta[4] + 0.5 * dNdeta[7]
    # βy_1 (DOF 2)
    dHy_dxi[2]  = dNdxi[0]  + 0.5 * dNdxi[4]  - 0.25 * dNdxi[7]
    dHy_deta[2] = dNdeta[0] + 0.5 * dNdeta[4] - 0.25 * dNdeta[7]
    # w_2 (DOF 3)
    dHx_dxi[3]  = c_a * dNdxi[4]
    dHx_deta[3] = c_a * dNdeta[4]
    dHy_dxi[3]  = -c_b * dNdxi[5]
    dHy_deta[3] = -c_b * dNdeta[5]
    # βx_2 (DOF 4)
    dHx_dxi[4]  = dNdxi[1]  - 0.25 * dNdxi[4]  + 0.5 * dNdxi[5]
    dHx_deta[4] = dNdeta[1] - 0.25 * dNdeta[4] + 0.5 * dNdeta[5]
    # βy_2 (DOF 5)
    dHy_dxi[5]  = dNdxi[1]  + 0.5 * dNdxi[4]  - 0.25 * dNdxi[5]
    dHy_deta[5] = dNdeta[1] + 0.5 * dNdeta[4] - 0.25 * dNdeta[5]
    # w_3 (DOF 6)
    dHx_dxi[6]  = c_a * dNdxi[6]
    dHx_deta[6] = c_a * dNdeta[6]
    dHy_dxi[6]  = c_b * dNdxi[5]
    dHy_deta[6] = c_b * dNdeta[5]
    # βx_3 (DOF 7)
    dHx_dxi[7]  = dNdxi[2]  + 0.5 * dNdxi[5]  - 0.25 * dNdxi[6]
    dHx_deta[7] = dNdeta[2] + 0.5 * dNdeta[5] - 0.25 * dNdeta[6]
    # βy_3 (DOF 8)
    dHy_dxi[8]  = dNdxi[2]  - 0.25 * dNdxi[5]  + 0.5 * dNdxi[6]
    dHy_deta[8] = dNdeta[2] - 0.25 * dNdeta[5] + 0.5 * dNdeta[6]
    # w_4 (DOF 9)
    dHx_dxi[9]  = -c_a * dNdxi[6]
    dHx_deta[9] = -c_a * dNdeta[6]
    dHy_dxi[9]  = c_b * dNdxi[7]
    dHy_deta[9] = c_b * dNdeta[7]
    # βx_4 (DOF 10)
    dHx_dxi[10]  = dNdxi[3]  - 0.25 * dNdxi[6]  + 0.5 * dNdxi[7]
    dHx_deta[10] = dNdeta[3] - 0.25 * dNdeta[6] + 0.5 * dNdeta[7]
    # βy_4 (DOF 11)
    dHy_dxi[11]  = dNdxi[3]  + 0.5 * dNdxi[6]  - 0.25 * dNdxi[7]
    dHy_deta[11] = dNdeta[3] + 0.5 * dNdeta[6] - 0.25 * dNdeta[7]

    B = np.zeros((3, 12))
    B[0, :] = dHx_dxi / a_h
    B[1, :] = dHy_deta / b_h
    B[2, :] = dHx_deta / b_h + dHy_dxi / a_h
    return B


# ── Element K_e (igual para todos por mesh rectangular regular) ──────────
K_e = np.zeros((12, 12))
for ig in range(2):
    for jg in range(2):
        xi, eta, wgt = gp[ig], gp[jg], gw[ig] * gw[jg]
        B = dkq_eval_B(xi, eta)
        K_e += B.T @ D @ B * (a_h * b_h * wgt)

# F_e consistente Q4 bilineal: q*a_1*b_1/4 en cada DOF de w
F_e = np.zeros(12)
F_e[0] = F_e[3] = F_e[6] = F_e[9] = q * a_1 * b_1 / 4

# ── Ensamblaje global ────────────────────────────────────────────────────
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

# ── BC (penalty, igual SAP 2000 s2k) ─────────────────────────────────────
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

# ── Solve ────────────────────────────────────────────────────────────────
Z = np.linalg.solve(K, F)
t_solve = (time.perf_counter() - t0) * 1000

# ── Postproceso w por nodo ───────────────────────────────────────────────
w_nodo = Z[::3]
w_nodo_mm = w_nodo * 1000
j_centro = (n_a // 2) * (n_b + 1) + (n_b // 2)
w_centro = w_nodo_mm[j_centro]

# ── Momentos: 2×2 Gauss + extrapolación bilineal a corners (SAP-style) ───
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
    # Evaluar M en cada Gauss point (orden: (1,1), (2,1), (1,2), (2,2))
    Mg = np.zeros((3, 4))
    g_idx = 0
    for jg in range(2):
        for ig in range(2):
            xi, eta = gp[ig], gp[jg]
            B = dkq_eval_B(xi, eta)
            kappa = B @ Ze
            M = -D @ kappa
            Mg[:, g_idx] = M
            g_idx += 1
    # Extrapolación bilineal Gauss → corners (factor √3)
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

# ── Reporte ──────────────────────────────────────────────────────────────
SAP_W = 6.5286
SAP_MX = 6.2249
SAP_MY = 12.7592
SAP_MXY = -7.2541

print("=" * 70)
print("  Batoz DKQ — Python implementation (validacion vs SAP 2000)")
print("=" * 70)
print(f"  Malla         : {n_a} × {n_b} ({n_j} nodos, {n_g} GDL)")
print(f"  Tiempo solve  : {t_solve:.2f} ms")
print(f"  ──────────────────────────────────────────────────────────────")
print(f"  {'Métrica':<14} {'Python':>14} {'SAP 2000':>14} {'Δ %':>10}")
print(f"  {'w_centro':<14} {w_centro:>14.6f} {SAP_W:>14.6f} {(abs(w_centro)-SAP_W)/SAP_W*100:>+9.4f}%")
print(f"  {'Mx centro':<14} {Mx_centro:>14.6f} {SAP_MX:>14.6f} {(Mx_centro-SAP_MX)/SAP_MX*100:>+9.4f}%")
print(f"  {'My centro':<14} {My_centro:>14.6f} {SAP_MY:>14.6f} {(My_centro-SAP_MY)/SAP_MY*100:>+9.4f}%")
print(f"  {'Mxy esquina':<14} {Mxy_esquina:>14.6f} {SAP_MXY:>14.6f} {(abs(Mxy_esquina)-abs(SAP_MXY))/abs(SAP_MXY)*100:>+9.4f}%")
print("=" * 70)
