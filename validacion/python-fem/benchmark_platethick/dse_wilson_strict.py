"""
Wilson DSE estricto — 16 DOFs iniciales:
  12 corner: [w_i, βx_i, βy_i] for i=1..4
   4 midside Δθ_k for k=5..8

Bending: Q8 Serendipity en β. Midside βs_k = 0.5(βs_I + βs_J) + Δθ_k.
  Midside βn_k = 0.5(βn_I + βn_J) (interp lineal normal).
Shear: γ_k = (1/L_k)(w_J - w_I) - 0.5(βs_I + βs_J) - (2/3)Δθ_k  (Wilson Eq 8.6)
  γ_xz(ξ,η) = 0.5(1-η)γ_5 + 0.5(1+η)γ_7
  γ_yz(ξ,η) = 0.5(1+ξ)γ_6 + 0.5(1-ξ)γ_8

Condensa Δθ estáticamente → 12×12 final.
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

n_e = n_a*n_b; n_j = (n_a+1)*(n_b+1)
n_dof = 3; a_1 = a/n_a; b_1 = b/n_b
a_h = a_1/2; b_h = b_1/2; n_g = n_dof*n_j

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
    s_j.append((n_b+1)*i); s_j.append((n_b+1)*(i+1)-1)
for i in range(1, n_b):
    s_j.append(i); s_j.append(n_a*(n_b+1)+i)

D11 = E*t**3/(12*(1-nu**2))
D_b = D11 * np.array([[1.0, nu, 0.0], [nu, 1.0, 0.0], [0.0, 0.0, (1-nu)/2]])
G = E/(2*(1+nu))
D_s = KAPPA*G*t*np.eye(2)

gp = np.array([-1/np.sqrt(3), 1/np.sqrt(3)])
gw = np.array([1.0, 1.0])


def Q8_basis(xi, eta):
    """Q8 Serendipity shape functions and derivatives at (ξ,η)."""
    xi_q8 = np.array([-1.0, 1.0, 1.0, -1.0,  0.0, 1.0, 0.0, -1.0])
    eta_q8 = np.array([-1.0, -1.0, 1.0, 1.0, -1.0, 0.0, 1.0, 0.0])
    N = np.zeros(8); dNdxi = np.zeros(8); dNdeta = np.zeros(8)
    for k in range(4):
        s, t_ = xi_q8[k], eta_q8[k]
        N[k] = 0.25*(1+s*xi)*(1+t_*eta)*(s*xi + t_*eta - 1)
        dNdxi[k] = 0.25*s*(1+t_*eta)*(2*s*xi + t_*eta)
        dNdeta[k] = 0.25*t_*(1+s*xi)*(s*xi + 2*t_*eta)
    N[4] = 0.5*(1-xi**2)*(1-eta); dNdxi[4] = -xi*(1-eta); dNdeta[4] = -0.5*(1-xi**2)
    N[5] = 0.5*(1+xi)*(1-eta**2); dNdxi[5] = 0.5*(1-eta**2); dNdeta[5] = -eta*(1+xi)
    N[6] = 0.5*(1-xi**2)*(1+eta); dNdxi[6] = -xi*(1+eta); dNdeta[6] = 0.5*(1-xi**2)
    N[7] = 0.5*(1-xi)*(1-eta**2); dNdxi[7] = -0.5*(1-eta**2); dNdeta[7] = -eta*(1-xi)
    return N, dNdxi, dNdeta


# ── Compute bending B_b (3 × 16) and shear B_s (2 × 16) ──────────────
# DOF order (16): [w_1, βx_1, βy_1, w_2, βx_2, βy_2, w_3, βx_3, βy_3, w_4, βx_4, βy_4,
#                  Δθ_5, Δθ_6, Δθ_7, Δθ_8]
#
# Midside rotations (each side has tangent = main direction of side):
#   Side 5 (bottom, tangent=X): β_x_5 = 0.5(β_x_1 + β_x_2) + Δθ_5
#                              β_y_5 = 0.5(β_y_1 + β_y_2)
#   Side 6 (right, tangent=Y):  β_y_6 = 0.5(β_y_2 + β_y_3) + Δθ_6
#                              β_x_6 = 0.5(β_x_2 + β_x_3)
#   Side 7 (top, tangent=-X):  β_x_7 = 0.5(β_x_3 + β_x_4) - Δθ_7  [tangent is -X]
#                              β_y_7 = 0.5(β_y_3 + β_y_4)
#   Side 8 (left, tangent=-Y): β_y_8 = 0.5(β_y_4 + β_y_1) - Δθ_8  [tangent is -Y]
#                              β_x_8 = 0.5(β_x_4 + β_x_1)


def build_Bb_Bs_DSE(xi, eta):
    N, dNdxi, dNdeta = Q8_basis(xi, eta)
    dNdx = dNdxi / a_h
    dNdy = dNdeta / b_h

    # β_x(ξ,η) = Σ N_k · β_x_k. β_x_k depends on corner DOFs + Δθ_k
    # Encoded as 16-vector contribution to β_x:
    # coeff[i] = ∂β_x / ∂(DOF i)
    # For each k=1..8, β_x_k contributions to DOFs:
    #   k=1: β_x_1 (DOF 1)
    #   k=2: β_x_2 (DOF 4)
    #   k=3: β_x_3 (DOF 7)
    #   k=4: β_x_4 (DOF 10)
    #   k=5: β_x_5 = 0.5·β_x_1 + 0.5·β_x_2 + Δθ_5 (DOFs 1, 4, 12)
    #   k=6: β_x_6 = 0.5·β_x_2 + 0.5·β_x_3 (DOFs 4, 7)
    #   k=7: β_x_7 = 0.5·β_x_3 + 0.5·β_x_4 - Δθ_7 (DOFs 7, 10, 14)
    #   k=8: β_x_8 = 0.5·β_x_4 + 0.5·β_x_1 (DOFs 10, 1)
    # ∂β_x/∂x = Σ_k dNdx[k]·β_x_k → expand each β_x_k
    # Total: 16-vector dBetax_dx
    # Indices in 16-DOF: [w_1=0, βx_1=1, βy_1=2, w_2=3, βx_2=4, βy_2=5,
    #                     w_3=6, βx_3=7, βy_3=8, w_4=9, βx_4=10, βy_4=11,
    #                     Δθ_5=12, Δθ_6=13, Δθ_7=14, Δθ_8=15]
    dBx_dx = np.zeros(16); dBx_dy = np.zeros(16)
    dBy_dx = np.zeros(16); dBy_dy = np.zeros(16)

    # k=1 (corner 1, β_x_1 at DOF 1, β_y_1 at DOF 2)
    dBx_dx[1] += dNdx[0]; dBx_dy[1] += dNdy[0]
    dBy_dx[2] += dNdx[0]; dBy_dy[2] += dNdy[0]
    # k=2 (corner 2, DOFs 4, 5)
    dBx_dx[4] += dNdx[1]; dBx_dy[4] += dNdy[1]
    dBy_dx[5] += dNdx[1]; dBy_dy[5] += dNdy[1]
    # k=3 (DOFs 7, 8)
    dBx_dx[7] += dNdx[2]; dBx_dy[7] += dNdy[2]
    dBy_dx[8] += dNdx[2]; dBy_dy[8] += dNdy[2]
    # k=4 (DOFs 10, 11)
    dBx_dx[10] += dNdx[3]; dBx_dy[10] += dNdy[3]
    dBy_dx[11] += dNdx[3]; dBy_dy[11] += dNdy[3]
    # k=5 (β_x_5 = 0.5·βx_1 + 0.5·βx_2 + Δθ_5; β_y_5 = 0.5·βy_1 + 0.5·βy_2)
    dBx_dx[1]  += 0.5*dNdx[4]; dBx_dy[1]  += 0.5*dNdy[4]
    dBx_dx[4]  += 0.5*dNdx[4]; dBx_dy[4]  += 0.5*dNdy[4]
    dBx_dx[12] += 1.0*dNdx[4]; dBx_dy[12] += 1.0*dNdy[4]
    dBy_dx[2]  += 0.5*dNdx[4]; dBy_dy[2]  += 0.5*dNdy[4]
    dBy_dx[5]  += 0.5*dNdx[4]; dBy_dy[5]  += 0.5*dNdy[4]
    # k=6 (β_x_6 = 0.5·βx_2 + 0.5·βx_3; β_y_6 = 0.5·βy_2 + 0.5·βy_3 + Δθ_6)
    dBx_dx[4]  += 0.5*dNdx[5]; dBx_dy[4]  += 0.5*dNdy[5]
    dBx_dx[7]  += 0.5*dNdx[5]; dBx_dy[7]  += 0.5*dNdy[5]
    dBy_dx[5]  += 0.5*dNdx[5]; dBy_dy[5]  += 0.5*dNdy[5]
    dBy_dx[8]  += 0.5*dNdx[5]; dBy_dy[8]  += 0.5*dNdy[5]
    dBy_dx[13] += 1.0*dNdx[5]; dBy_dy[13] += 1.0*dNdy[5]
    # k=7 (β_x_7 = 0.5·βx_3 + 0.5·βx_4 - Δθ_7; β_y_7 = 0.5·βy_3 + 0.5·βy_4)
    dBx_dx[7]  += 0.5*dNdx[6]; dBx_dy[7]  += 0.5*dNdy[6]
    dBx_dx[10] += 0.5*dNdx[6]; dBx_dy[10] += 0.5*dNdy[6]
    dBx_dx[14] -= 1.0*dNdx[6]; dBx_dy[14] -= 1.0*dNdy[6]
    dBy_dx[8]  += 0.5*dNdx[6]; dBy_dy[8]  += 0.5*dNdy[6]
    dBy_dx[11] += 0.5*dNdx[6]; dBy_dy[11] += 0.5*dNdy[6]
    # k=8 (β_x_8 = 0.5·βx_4 + 0.5·βx_1; β_y_8 = 0.5·βy_4 + 0.5·βy_1 - Δθ_8)
    dBx_dx[10] += 0.5*dNdx[7]; dBx_dy[10] += 0.5*dNdy[7]
    dBx_dx[1]  += 0.5*dNdx[7]; dBx_dy[1]  += 0.5*dNdy[7]
    dBy_dx[11] += 0.5*dNdx[7]; dBy_dy[11] += 0.5*dNdy[7]
    dBy_dx[2]  += 0.5*dNdx[7]; dBy_dy[2]  += 0.5*dNdy[7]
    dBy_dx[15] -= 1.0*dNdx[7]; dBy_dy[15] -= 1.0*dNdy[7]

    # Bending B (3 × 16): κx = ∂βx/∂x, κy = ∂βy/∂y, 2κxy = ∂βx/∂y + ∂βy/∂x
    Bb = np.zeros((3, 16))
    Bb[0, :] = dBx_dx
    Bb[1, :] = dBy_dy
    Bb[2, :] = dBx_dy + dBy_dx

    # Shear γ_k (constant on each side, from Wilson Eq 8.6):
    # Side 5 (tangent X, L=a_1): γ_5 = γ_xz_avg = (1/a_1)(w_2 - w_1) - 0.5(βx_1 + βx_2) - (2/3)·Δθ_5
    # Side 7 (tangent -X, L=a_1): γ_7 = γ_xz_avg (with sign for tangent)
    #   Tangent direction is -X, βs = -βx. Eq 8.6 with i=3, j=4: γ_7_tangential =
    #     (1/L)(w_4 - w_3) - 0.5(βs_3 + βs_4) - (2/3)·Δθ_7
    #   βs_3 = -βx_3, βs_4 = -βx_4
    #   γ_7_tangential = (1/a_1)(w_4 - w_3) + 0.5(βx_3 + βx_4) - (2/3)·Δθ_7
    #   But γ_xz (in global frame) along this side = -γ_7_tangential (since tangent is -X):
    #   γ_xz_7_global = (1/a_1)(w_3 - w_4) - 0.5(βx_3 + βx_4) + (2/3)·Δθ_7
    # Side 6 (tangent Y, L=b_1): γ_6 = γ_yz_avg = (1/b_1)(w_3 - w_2) - 0.5(βy_2 + βy_3) - (2/3)·Δθ_6
    # Side 8 (tangent -Y, L=b_1): γ_8_global = (1/b_1)(w_1 - w_4) - 0.5(βy_4 + βy_1) + (2/3)·Δθ_8
    #   Actually similar to side 7: γ_yz_8_global = (1/b_1)(w_4 - w_1) is wrong direction.
    #   Let me redo carefully:
    #   For side 8 (from corner 4 to corner 1, tangent = -Y direction):
    #     γ_8_tangential = (1/b_1)(w_1 - w_4) - 0.5(βs_4 + βs_1) - (2/3)·Δθ_8
    #     βs = -βy (since tangent is -Y), so βs_4 = -βy_4, βs_1 = -βy_1
    #     γ_8_tangential = (1/b_1)(w_1 - w_4) + 0.5(βy_4 + βy_1) - (2/3)·Δθ_8
    #     γ_yz_8_global = -γ_8_tangential = (1/b_1)(w_4 - w_1) - 0.5(βy_4 + βy_1) + (2/3)·Δθ_8

    g5 = np.zeros(16)  # γ_xz at side 5 (y=-1), as function of 16 DOFs
    g5[0] = -1/a_1  # w_1
    g5[3] = +1/a_1  # w_2
    g5[1] = -0.5    # βx_1
    g5[4] = -0.5    # βx_2
    g5[12] = -2/3   # Δθ_5

    g6 = np.zeros(16)  # γ_yz at side 6 (x=+1)
    g6[3] = -1/b_1  # w_2
    g6[6] = +1/b_1  # w_3
    g6[5] = -0.5    # βy_2
    g6[8] = -0.5    # βy_3
    g6[13] = -2/3   # Δθ_6

    g7 = np.zeros(16)  # γ_xz at side 7 (y=+1), with global sign
    g7[6] = +1/a_1  # w_3
    g7[9] = -1/a_1  # w_4
    g7[7] = -0.5    # βx_3
    g7[10] = -0.5   # βx_4
    g7[14] = +2/3   # Δθ_7

    g8 = np.zeros(16)  # γ_yz at side 8 (x=-1), with global sign
    g8[9] = +1/b_1  # w_4
    g8[0] = -1/b_1  # w_1
    g8[11] = -0.5   # βy_4
    g8[2] = -0.5    # βy_1
    g8[15] = +2/3   # Δθ_8

    # Bilinear interpolation:
    Bs = np.zeros((2, 16))
    Bs[0, :] = 0.5*(1 - eta)*g5 + 0.5*(1 + eta)*g7
    Bs[1, :] = 0.5*(1 - xi)*g8  + 0.5*(1 + xi)*g6

    return Bb, Bs


# Element K_e (16×16)
K_e_full = np.zeros((16, 16))
F_e_full = np.zeros(16)
for ig in range(2):
    for jg in range(2):
        xi, eta = gp[ig], gp[jg]
        wgt = gw[ig]*gw[jg]
        Bb, Bs = build_Bb_Bs_DSE(xi, eta)
        jac = a_h*b_h*wgt
        K_e_full += Bb.T @ D_b @ Bb * jac
        K_e_full += Bs.T @ D_s @ Bs * jac
        # Load: q at w-DOFs via Q4 bilinear N (not Q8)
        xi_n = np.array([-1, 1, 1, -1])
        eta_n = np.array([-1, -1, 1, 1])
        for k in range(4):
            Nk = 0.25*(1 + xi_n[k]*xi)*(1 + eta_n[k]*eta)
            F_e_full[3*k] += Nk*q*jac

# Static condensation
K_aa = K_e_full[:12, :12]
K_ab = K_e_full[:12, 12:]
K_ba = K_e_full[12:, :12]
K_bb = K_e_full[12:, 12:]
F_a = F_e_full[:12]
F_b = F_e_full[12:]

K_bb_inv = np.linalg.inv(K_bb)
K_e = K_aa - K_ab @ K_bb_inv @ K_ba
F_e = F_a - K_ab @ K_bb_inv @ F_b

# Global assembly
t0 = time.perf_counter()
K = np.zeros((n_g, n_g)); F = np.zeros(n_g)
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

# Moments — recover Δθ per element
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
    Ze_a = Z[gdl]
    Ze_b = K_bb_inv @ (F_b - K_ba @ Ze_a)
    Ze_full = np.concatenate([Ze_a, Ze_b])
    Mg = np.zeros((3, 4))
    g_idx = 0
    for jg in range(2):
        for ig in range(2):
            xi, eta = gp[ig], gp[jg]
            Bb, _ = build_Bb_Bs_DSE(xi, eta)
            M = -D_b @ (Bb @ Ze_full)
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
print("  Wilson DSE estricto (16 DOFs, 4 Δθ midside) — Python vs SAP")
print("=" * 70)
print(f"  Caso         : 6×4×{t:.2f} m")
print(f"  Tiempo solve : {t_solve:.2f} ms")
print(f"  {'-'*64}")
print(f"  {'Métrica':<14} {'Python DSE':>15} {'SAP P-Thick':>14} {'Δ %':>10}")
print(f"  {'w_centro':<14} {w_centro:>15.6f} {SAP_W:>14.6f} {(abs(w_centro)-SAP_W)/SAP_W*100:>+9.4f}%")
print(f"  {'Mx centro':<14} {Mx_c_val:>15.6f} {SAP_MX:>14.6f} {(Mx_c_val-SAP_MX)/SAP_MX*100:>+9.4f}%")
print(f"  {'My centro':<14} {My_c_val:>15.6f} {SAP_MY:>14.6f} {(My_c_val-SAP_MY)/SAP_MY*100:>+9.4f}%")
print(f"  {'Mxy esquina':<14} {Mxy_e_val:>15.6f} {SAP_MXY:>14.6f} {(abs(Mxy_e_val)-abs(SAP_MXY))/abs(SAP_MXY)*100:>+9.4f}%")
print("=" * 70)
