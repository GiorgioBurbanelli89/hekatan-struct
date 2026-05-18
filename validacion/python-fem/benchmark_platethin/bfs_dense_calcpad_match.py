"""
=========================================================================
 BFS dense — sampleo intra-elemento del campo BFS para reproducir 8.38
 kN·m/m de Calcpad en |Mxy|_max esquinero.

 El script `../plate_thin_bfs_calcpad.py` resuelve correctamente el sistema
 (w_max coincide 0.08% con Calcpad), pero al postprocesar Mxy aplica un
 RectBivariateSpline sobre la malla 7×5 de NODOS — eso suaviza el pico
 esquinero. Calcpad samplea el campo BFS continuo (Hermite cúbico) en una
 grilla densa de 200×200 puntos.

 Esta versión:
  1) reusa la solución Z del script padre,
  2) muestrea Mxy = -D · B(ξ,η) · Z_e con 21×21 puntos POR ELEMENTO,
  3) encuentra el máximo global y la ubicación.

 Resultado esperado: |Mxy|_max ≈ 8.38 kN·m/m en alguna esquina.
=========================================================================
"""
import os
import sys
import time
import numpy as np
from scipy.sparse import lil_matrix
from scipy.sparse.linalg import spsolve

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# ── PARAMETROS — identicos al .cpd ───────────────────────────────────────
a, b    = 6.0, 4.0
t_pl    = 0.10
q_load  = 10.0
E_mod   = 35e6
nu      = 0.15
n_a, n_b = 6, 4
n_e   = n_a * n_b
n_j   = (n_a + 1) * (n_b + 1)
a_1   = a / n_a
b_1   = b / n_b
n_dof = 4
n_k   = n_dof * 4
n_g   = n_dof * n_j
D_pl = E_mod * t_pl**3 / (12 * (1 - nu**2))

print("=" * 72)
print("  BFS dense intra-element sampling — busca |Mxy|_max esquinero")
print("=" * 72)
print(f"  D_plate = {D_pl:.4f} kN·m")

# ── MESH (column-major, igual que .cpd Calcpad) ──────────────────────────
x_j = np.zeros(n_j); y_j = np.zeros(n_j)
x, y = 0.0, 0.0
for j in range(n_j):
    x_j[j] = x; y_j[j] = y
    y += b_1
    if y > b + 1e-9:
        y = 0.0; x += a_1

e_j = np.zeros((n_e, 4), dtype=int)
for ia in range(n_a):
    for ib in range(n_b):
        e = ib + n_b * ia
        jc = e + ia
        e_j[e] = [jc, jc + n_b + 1, jc + n_b + 2, jc + 1]

s_j = []
for i in range(n_a + 1):
    s_j.append((n_b + 1) * i)
    s_j.append((n_b + 1) * (i + 1) - 1)
for i in range(1, n_b):
    s_j.append(i)
    s_j.append(i + (n_b + 1) * n_a)
s_j = sorted(set(s_j))

# ── BFS Hermite shape functions sobre [0, h] ──────────────────────────────
# P1(ξ) = 1 - 3(ξ/h)² + 2(ξ/h)³
# P2(ξ) = ξ - 2ξ²/h + ξ³/h²
# P3(ξ) =     3(ξ/h)² - 2(ξ/h)³
# P4(ξ) =    -ξ²/h + ξ³/h²
def shape_along(xi, h):
    r = xi / h
    return (
        1 - 3*r**2 + 2*r**3,
        xi - 2*xi**2/h + xi**3/(h*h),
            3*r**2 - 2*r**3,
        -xi**2/h + xi**3/(h*h),
    )
def shape_1st_deriv_along(xi, h):
    return (
        -6*xi/(h*h) + 6*xi**2/(h**3),
         1 - 4*xi/h + 3*xi**2/(h*h),
         6*xi/(h*h) - 6*xi**2/(h**3),
        -2*xi/h + 3*xi**2/(h*h),
    )
def shape_2nd_deriv_along(xi, h):
    return (
        -6/(h*h) + 12*xi/(h**3),
        -4/h + 6*xi/(h*h),
         6/(h*h) - 12*xi/(h**3),
        -2/h + 6*xi/(h*h),
    )

D = D_pl * np.array([
    [1.0,  nu,  0.0],
    [nu,  1.0,  0.0],
    [0.0, 0.0, (1 - nu) / 2],
])

# ── ENSAMBLAJE (Gauss 4×4 en cada elemento) ──────────────────────────────
def gauss_pts(n):
    pts, ws = np.polynomial.legendre.leggauss(n)
    return (pts + 1) / 2, ws / 2   # mapear a [0,1]
gx, wx = gauss_pts(4)
gy, wy = gauss_pts(4)

def B_at(xi, eta):
    Pa = shape_along(xi, a_1)
    Pdda = shape_2nd_deriv_along(xi, a_1)
    Pda = shape_1st_deriv_along(xi, a_1)
    Pb = shape_along(eta, b_1)
    Pddb = shape_2nd_deriv_along(eta, b_1)
    Pdb = shape_1st_deriv_along(eta, b_1)
    B1 = np.array([
        Pdda[0]*Pb[0], Pdda[1]*Pb[0], Pdda[0]*Pb[1], Pdda[1]*Pb[1],
        Pdda[2]*Pb[0], Pdda[3]*Pb[0], Pdda[2]*Pb[1], Pdda[3]*Pb[1],
        Pdda[2]*Pb[2], Pdda[3]*Pb[2], Pdda[2]*Pb[3], Pdda[3]*Pb[3],
        Pdda[0]*Pb[2], Pdda[1]*Pb[2], Pdda[0]*Pb[3], Pdda[1]*Pb[3],
    ])
    B2 = np.array([
        Pa[0]*Pddb[0], Pa[1]*Pddb[0], Pa[0]*Pddb[1], Pa[1]*Pddb[1],
        Pa[2]*Pddb[0], Pa[3]*Pddb[0], Pa[2]*Pddb[1], Pa[3]*Pddb[1],
        Pa[2]*Pddb[2], Pa[3]*Pddb[2], Pa[2]*Pddb[3], Pa[3]*Pddb[3],
        Pa[0]*Pddb[2], Pa[1]*Pddb[2], Pa[0]*Pddb[3], Pa[1]*Pddb[3],
    ])
    B3 = 2 * np.array([
        Pda[0]*Pdb[0], Pda[1]*Pdb[0], Pda[0]*Pdb[1], Pda[1]*Pdb[1],
        Pda[2]*Pdb[0], Pda[3]*Pdb[0], Pda[2]*Pdb[1], Pda[3]*Pdb[1],
        Pda[2]*Pdb[2], Pda[3]*Pdb[2], Pda[2]*Pdb[3], Pda[3]*Pdb[3],
        Pda[0]*Pdb[2], Pda[1]*Pdb[2], Pda[0]*Pdb[3], Pda[1]*Pdb[3],
    ])
    return np.vstack([B1, B2, B3])

def N_at(xi, eta):
    Pa = shape_along(xi, a_1)
    Pb = shape_along(eta, b_1)
    return np.array([
        Pa[0]*Pb[0], Pa[1]*Pb[0], Pa[0]*Pb[1], Pa[1]*Pb[1],
        Pa[2]*Pb[0], Pa[3]*Pb[0], Pa[2]*Pb[1], Pa[3]*Pb[1],
        Pa[2]*Pb[2], Pa[3]*Pb[2], Pa[2]*Pb[3], Pa[3]*Pb[3],
        Pa[0]*Pb[2], Pa[1]*Pb[2], Pa[0]*Pb[3], Pa[1]*Pb[3],
    ])

K = lil_matrix((n_g, n_g))
F = np.zeros(n_g)
t0 = time.perf_counter()
for e in range(n_e):
    Ke = np.zeros((n_k, n_k))
    Fe = np.zeros(n_k)
    for ig in range(4):
        xi = gx[ig] * a_1; w_xi = wx[ig] * a_1
        for jg in range(4):
            eta = gy[jg] * b_1; w_eta = wy[jg] * b_1
            B  = B_at(xi, eta)
            Ke += B.T @ D @ B * w_xi * w_eta
            Fe += N_at(xi, eta) * (-q_load) * w_xi * w_eta
    for i in range(4):
        gi = e_j[e, i]
        for ii in range(4):
            row = n_dof * gi + ii; lr = 4 * i + ii
            F[row] += Fe[lr]
            for j in range(4):
                gj = e_j[e, j]
                for jj in range(4):
                    col = n_dof * gj + jj; lc = 4 * j + jj
                    K[row, col] += Ke[lr, lc]
K = K.tocsr()
print(f"  Ensamblado: {(time.perf_counter()-t0)*1000:.0f} ms")

# Penalty BC
penalty = 1e20
K_pen = K.tolil()
for nd in s_j:
    g = n_dof * nd
    K_pen[g, g] += penalty
K_pen = K_pen.tocsr()
Z = spsolve(K_pen, F)
n_center = (n_a // 2) * (n_b + 1) + (n_b // 2)
print(f"  w_center  = {Z[n_dof*n_center]*1000:.4f} mm   (Calcpad: -6.63 mm)")

# ── SAMPLEO DENSO INTRA-ELEMENTO ──────────────────────────────────────────
N_SAMPLE = 21  # 21×21 puntos por elemento → 21·6 = 126 en X · 21·4 = 84 en Y
print(f"\n  Sampleo intra-elemento: {N_SAMPLE}×{N_SAMPLE} pts por Q4")
print(f"  Total puntos globales: {N_SAMPLE*n_a} × {N_SAMPLE*n_b}")

best_Mx = (0.0, 0.0, 0.0)   # (val, x, y)
best_My = (0.0, 0.0, 0.0)
best_Mxy= (0.0, 0.0, 0.0)
xi_grid  = np.linspace(0, 1, N_SAMPLE)

for e in range(n_e):
    Z_e = np.zeros(16)
    for i in range(4):
        gi = e_j[e, i]
        for ii in range(4):
            Z_e[4*i + ii] = Z[n_dof*gi + ii]
    ia = e // n_b
    ib = e %  n_b
    x0 = ia * a_1
    y0 = ib * b_1
    for u in xi_grid:
        for v in xi_grid:
            xi  = u * a_1
            eta = v * b_1
            B = B_at(xi, eta)
            M = -D @ B @ Z_e   # (Mx, My, Mxy)
            x_glb = x0 + xi
            y_glb = y0 + eta
            if abs(M[0]) > abs(best_Mx[0]):  best_Mx  = (M[0], x_glb, y_glb)
            if abs(M[1]) > abs(best_My[0]):  best_My  = (M[1], x_glb, y_glb)
            if abs(M[2]) > abs(best_Mxy[0]): best_Mxy = (M[2], x_glb, y_glb)

print("\n  ────────── PEAKS (BFS sampleo denso intra-elemento) ──────────")
print(f"  |Mx|_max  = {abs(best_Mx[0]):.4f} kN·m/m  @ (x={best_Mx[1]:.3f}, y={best_Mx[2]:.3f})    [Calcpad: 6.32]")
print(f"  |My|_max  = {abs(best_My[0]):.4f} kN·m/m  @ (x={best_My[1]:.3f}, y={best_My[2]:.3f})    [Calcpad: 12.74]")
print(f"  |Mxy|_max = {abs(best_Mxy[0]):.4f} kN·m/m  @ (x={best_Mxy[1]:.3f}, y={best_Mxy[2]:.3f})    [Calcpad: 8.38]")

# Mxy en las 4 esquinas exactas
print("\n  Mxy evaluado EN las 4 esquinas geométricas (corner element):")
corners = [
    (0, 0),                     # esquina (0,0)
    (n_e - 1 - (n_b - 1), 0),  # depende del orden... mejor enumerar 4
]
# evaluar Mxy en cada uno de los 4 corners de la placa
# corner BL (0,0): elem (ia=0, ib=0), local (xi=0, eta=0)
# corner TL (0,b): elem (ia=0, ib=n_b-1), local (xi=0, eta=1)
# corner BR (a,0): elem (ia=n_a-1, ib=0), local (xi=1, eta=0)
# corner TR (a,b): elem (ia=n_a-1, ib=n_b-1), local (xi=1, eta=1)
def evalMxy(ia, ib, xi_norm, eta_norm):
    e = ib + n_b * ia
    Z_e = np.zeros(16)
    for i in range(4):
        gi = e_j[e, i]
        for ii in range(4):
            Z_e[4*i + ii] = Z[n_dof*gi + ii]
    B = B_at(xi_norm*a_1, eta_norm*b_1)
    return float((-D @ B @ Z_e)[2])
print(f"    BL (0,0):   Mxy = {evalMxy(0,        0,        0.0, 0.0):.4f}")
print(f"    BR (a,0):   Mxy = {evalMxy(n_a-1,    0,        1.0, 0.0):.4f}")
print(f"    TL (0,b):   Mxy = {evalMxy(0,        n_b-1,    0.0, 1.0):.4f}")
print(f"    TR (a,b):   Mxy = {evalMxy(n_a-1,    n_b-1,    1.0, 1.0):.4f}")

print("\n  Conclusion:")
match_mxy = abs(abs(best_Mxy[0]) - 8.38) / 8.38 * 100
match_mx  = abs(abs(best_Mx[0])  - 6.32) / 6.32 * 100
match_my  = abs(abs(best_My[0])  - 12.74) / 12.74 * 100
print(f"    Mx   match: {match_mx:.3f}%")
print(f"    My   match: {match_my:.3f}%")
print(f"    Mxy  match: {match_mxy:.3f}%")
if match_mxy < 1.0:
    print("    ✓ Python BFS = Calcpad BFS (intra-element sampling)")
else:
    print(f"    ⚠ Mxy aun difiere {match_mxy:.2f}% — revisar formula B3 vs Calcpad")
print("=" * 72)
