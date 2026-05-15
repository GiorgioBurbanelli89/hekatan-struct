"""
DSE Wilson — MITC4 + incompatible modes (Wilson Q6) en rotaciones.
Agrega 4 DOFs internos: α_x_1, α_x_2 (en β_x), α_y_1, α_y_2 (en β_y).
Condensa estáticamente → 12×12 K_e final.

β_x(ξ,η) = β_x_bilinear + (1-ξ²)·α_x_1 + (1-η²)·α_x_2
β_y(ξ,η) = β_y_bilinear + (1-ξ²)·α_y_1 + (1-η²)·α_y_2

Las contribuciones a las curvaturas:
  ∂β_x/∂x adicional = -2ξ·α_x_1 / a_h
  ∂β_x/∂y adicional = -2η·α_x_2 / b_h
  ∂β_y/∂x adicional = -2ξ·α_y_1 / a_h
  ∂β_y/∂y adicional = -2η·α_y_2 / b_h

Las burbujas NO contribuyen a γ (∂(1-ξ²)/∂ξ = -2ξ que es cero en ξ=0
midside, donde se hace tying MITC4) — esto preserva la propiedad anti-locking.
"""
import sys, time
import numpy as np

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

a, b = 6.0, 4.0
t = 0.40
E = 35e6; nu = 0.15; q = 10.0
KAPPA = 5.0/6.0
n_a, n_b = 6, 4

SAP_W = 0.1066
SAP_MX = 6.6985
SAP_MY = 13.1789
SAP_MXY = -7.6956

n_e = n_a * n_b
n_j = (n_a + 1) * (n_b + 1)
n_dof = 3
n_k = 12
a_1 = a/n_a; b_1 = b/n_b
a_h = a_1/2; b_h = b_1/2
n_g = n_dof*n_j

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
        e = ib + n_b*ia
        j0 = e + ia
        e_j[e] = [j0, j0+n_b+1, j0+n_b+2, j0+1]

s_j = []
for i in range(n_a+1):
    s_j.append((n_b+1)*i)
    s_j.append((n_b+1)*(i+1)-1)
for i in range(1, n_b):
    s_j.append(i)
    s_j.append(n_a*(n_b+1)+i)

D11 = E*t**3/(12*(1-nu**2))
D_b = D11 * np.array([[1.0, nu, 0.0],
                       [nu, 1.0, 0.0],
                       [0.0, 0.0, (1-nu)/2]])
G = E/(2*(1+nu))
D_s = KAPPA*G*t*np.eye(2)

gp = np.array([-1/np.sqrt(3), 1/np.sqrt(3)])
gw = np.array([1.0, 1.0])


def build_Bb_Bs_Q6(xi, eta):
    """
    Build B_bending (3 × 16) and B_shear (2 × 16) for MITC4 + Q6 incomp.
    DOFs (16): [w_1, βx_1, βy_1, ..., w_4, βx_4, βy_4, αx_1, αx_2, αy_1, αy_2]
    """
    xi_n = np.array([-1.0, 1.0, 1.0, -1.0])
    eta_n = np.array([-1.0, -1.0, 1.0, 1.0])
    Nv = np.zeros(4); dNdx = np.zeros(4); dNdy = np.zeros(4)
    for k in range(4):
        s, t_ = xi_n[k], eta_n[k]
        Nv[k] = 0.25*(1+s*xi)*(1+t_*eta)
        dNdx[k] = 0.25*s*(1+t_*eta)/a_h
        dNdy[k] = 0.25*t_*(1+s*xi)/b_h

    Bb = np.zeros((3, 16))
    for k in range(4):
        idx = 3*k
        Bb[0, idx+1] = dNdx[k]
        Bb[1, idx+2] = dNdy[k]
        Bb[2, idx+1] = dNdy[k]
        Bb[2, idx+2] = dNdx[k]
    # Incompatible bubble contributions to bending:
    # ∂[(1-ξ²)]/∂x = -2ξ/a_h
    # ∂[(1-η²)]/∂y = -2η/b_h
    # ∂[(1-ξ²)]/∂y = 0  ;  ∂[(1-η²)]/∂x = 0
    # DOF 12 = α_x_1 (mode 1-ξ² on β_x):
    #   κ_x = ∂β_x/∂x = -2ξ/a_h
    Bb[0, 12] = -2*xi / a_h
    # DOF 13 = α_x_2 (mode 1-η² on β_x):
    #   κ_x = ∂β_x/∂x = 0, but ∂β_x/∂y = -2η/b_h contributes to κ_xy
    Bb[2, 13] = -2*eta / b_h
    # DOF 14 = α_y_1 (mode 1-ξ² on β_y):
    #   κ_y = ∂β_y/∂y = 0, but ∂β_y/∂x = -2ξ/a_h contributes to κ_xy
    Bb[2, 14] = -2*xi / a_h
    # DOF 15 = α_y_2 (mode 1-η² on β_y):
    #   κ_y = ∂β_y/∂y = -2η/b_h
    Bb[1, 15] = -2*eta / b_h

    # SHEAR via MITC4 tying — same as standard, NOT affected by bubbles
    # (bubbles vanish at tying midpoints ξ=0 or η=0, so don't contribute to γ_xz_A, etc.)
    inv_2ah = 1.0/(2.0*a_h); inv_2bh = 1.0/(2.0*b_h)
    gA = np.zeros(16); gA[0] = -inv_2ah; gA[1] = -0.5; gA[3] = inv_2ah; gA[4] = -0.5
    gC = np.zeros(16); gC[6] = inv_2ah; gC[7] = -0.5; gC[9] = -inv_2ah; gC[10] = -0.5
    gB = np.zeros(16); gB[3] = -inv_2bh; gB[5] = -0.5; gB[6] = inv_2bh; gB[8] = -0.5
    gD = np.zeros(16); gD[0] = -inv_2bh; gD[2] = -0.5; gD[9] = inv_2bh; gD[11] = -0.5
    Bs = np.zeros((2, 16))
    Bs[0, :] = 0.5*(1-eta)*gA + 0.5*(1+eta)*gC
    Bs[1, :] = 0.5*(1-xi)*gD + 0.5*(1+xi)*gB

    return Bb, Bs, Nv


# Element K_e (16×16), then static condense to 12×12
K_e_full = np.zeros((16, 16))
F_e_full = np.zeros(16)
for ig in range(2):
    for jg in range(2):
        xi, eta = gp[ig], gp[jg]
        wgt = gw[ig]*gw[jg]
        Bb, Bs, Nv = build_Bb_Bs_Q6(xi, eta)
        jac = a_h*b_h*wgt
        K_e_full += Bb.T @ D_b @ Bb * jac
        K_e_full += Bs.T @ D_s @ Bs * jac
        for k in range(4):
            F_e_full[3*k] += Nv[k]*q*jac

# Static condensation: K = [K_aa K_ab; K_ba K_bb]
# a = main 12 DOFs (indices 0..11)
# b = bubble 4 DOFs (indices 12..15)
K_aa = K_e_full[:12, :12]
K_ab = K_e_full[:12, 12:]
K_ba = K_e_full[12:, :12]
K_bb = K_e_full[12:, 12:]
F_a = F_e_full[:12]
F_b = F_e_full[12:]

# K_red = K_aa - K_ab · K_bb^{-1} · K_ba
K_bb_inv = np.linalg.inv(K_bb)
K_e = K_aa - K_ab @ K_bb_inv @ K_ba
F_e = F_a - K_ab @ K_bb_inv @ F_b

# Assemble global
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

# BC
k_s = 1e20
for j_n in s_j:
    g = n_dof*j_n
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
t_solve = (time.perf_counter() - t0)*1000

w_nodo_mm = Z[::3]*1000
j_centro = (n_a//2)*(n_b+1) + (n_b//2)
w_centro = w_nodo_mm[j_centro]

# Moments — need to recover bubble DOFs per element + use full B
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
    Ze_main = Z[gdl]
    # Recover bubble DOFs: K_bb·u_b = F_b - K_ba·u_a → u_b = K_bb^{-1}·(F_b - K_ba·u_a)
    Ze_bubble = K_bb_inv @ (F_b - K_ba @ Ze_main)
    Ze_full = np.concatenate([Ze_main, Ze_bubble])
    Mg = np.zeros((3, 4))
    g_idx = 0
    for jg in range(2):
        for ig in range(2):
            xi, eta = gp[ig], gp[jg]
            Bb, _, _ = build_Bb_Bs_Q6(xi, eta)
            kappa = Bb @ Ze_full
            M = -D_b @ kappa
            Mg[:, g_idx] = M
            g_idx += 1
    for c in range(4):
        xc, ec = xi_corner[c], eta_corner[c]
        Mxx_c = Myy_c = Mxy_c = 0.0
        for k in range(4):
            Nk = 0.25*(1 + xi_gauss[k]*sqrt3*xc)*(1 + eta_gauss[k]*sqrt3*ec)
            Mxx_c += Nk*Mg[0, k]
            Myy_c += Nk*Mg[1, k]
            Mxy_c += Nk*Mg[2, k]
        j_nod = e_j[e, c]
        M_j[0, j_nod] += Mxx_c
        M_j[1, j_nod] += Myy_c
        M_j[2, j_nod] += Mxy_c
        c_j[j_nod] += 1

for j in range(n_j):
    if c_j[j] > 0:
        M_j[:, j] /= c_j[j]

Mx_c_val = M_j[0, j_centro]
My_c_val = M_j[1, j_centro]
Mxy_e_val = M_j[2, 0]

print("=" * 70)
print("  DSE Wilson Q6 (MITC4 + incompatible bending modes) — vs SAP 2000")
print("=" * 70)
print(f"  Caso         : 6×4×{t:.2f} m")
print(f"  Tiempo solve : {t_solve:.2f} ms")
print(f"  {'-'*64}")
print(f"  {'Métrica':<14} {'Python Q6':>15} {'SAP P-Thick':>14} {'Δ %':>10}")
print(f"  {'w_centro':<14} {w_centro:>15.6f} {SAP_W:>14.6f} {(abs(w_centro)-SAP_W)/SAP_W*100:>+9.4f}%")
print(f"  {'Mx centro':<14} {Mx_c_val:>15.6f} {SAP_MX:>14.6f} {(Mx_c_val-SAP_MX)/SAP_MX*100:>+9.4f}%")
print(f"  {'My centro':<14} {My_c_val:>15.6f} {SAP_MY:>14.6f} {(My_c_val-SAP_MY)/SAP_MY*100:>+9.4f}%")
print(f"  {'Mxy esquina':<14} {Mxy_e_val:>15.6f} {SAP_MXY:>14.6f} {(abs(Mxy_e_val)-abs(SAP_MXY))/abs(SAP_MXY)*100:>+9.4f}%")
print("=" * 70)
