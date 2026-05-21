"""
Validación FEM Python — Guerra Ej.6 ZAPATA UNIDA CON VIGA DE AMARRE
(pag.113-130 del libro Guerra MDI)

Geometria:
  - Zapata 1 (medianera): 2.38m × 3.00m, columna 50×50cm en (0.25, 1.50)
    Carga: P_col1 = 70 + 40 = 110 tonf
  - Viga amarre: 1.64m × 0.45m × 0.95m (b×h)
    Solo flexion, NO apoya en suelo (ks=0)
  - Zapata 2 (interna): 2.45m × 2.45m, columna 50×50cm en (6.22, 1.50)
    Carga: P_col2 = 89 + 51 = 140 tonf
  - Bbox total: 6.47m × 3.00m
  - L entre ejes columnas = 5.00m

Material: f'c=210, gamma_c=2.4, nu=0.20, h_zapata=0.55m
Suelo: ks=3820 t/m^3, q_adm=19 t/m^2

Implementacion:
  - Mindlin Q4 con shear FULL integration (2x2)
  - Mesh COMPLETA del bbox (estabilizacion rotacional global)
  - ks aplica SOLO sobre zapatas (no viga, no corners empty)
  - Self-weight: zapatas h=0.55, viga h_beam=0.95 (mas alta)
  - Load distribuido sobre huella de columna 0.50x0.50
"""
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from scipy.sparse import lil_matrix
from scipy.sparse.linalg import spsolve

# ============================================================================
# INPUTS
# ============================================================================
B = 3.00              # ancho total bbox (Y)
L1 = 2.38             # ancho Z1 medianera (X)
L_VIGA = 1.64         # largo viga amarre (X)
L2 = 2.45             # ancho Z2 interna (X)
L_TOT = L1 + L_VIGA + L2  # 6.47 m
B1 = 3.00             # Y Z1
B2 = 2.45             # Y Z2
B_VIGA = 0.45         # ancho viga (Y)
H_ZAPATA = 0.55       # espesor zapatas
H_VIGA = 0.95         # altura viga amarre
COL_SIZE = 0.50
COL1_X, COL1_Y = 0.25, B/2
COL2_X, COL2_Y = L_TOT - 0.25, B/2

KS_TM3 = 3820         # tonf/m^3
FC_KGCM2 = 210
GAMMA_C = 2.4         # tonf/m^3
NU = 0.20

P_COL1 = 110.0        # tonf (D+L = 70+40)
P_COL2 = 140.0        # tonf (D+L = 89+51)

E = 14100 * np.sqrt(FC_KGCM2) * 10   # tonf/m^2

# Mesh
nx, ny = 32, 16
nxn, nyn = nx + 1, ny + 1
dx_e, dy_e = L_TOT / nx, B / ny
N_nodes = nxn * nyn
N_dof = 3 * N_nodes

print(f"=== Inputs Ej.6 ===")
print(f"  Bbox: {L_TOT} x {B} m, Mesh {nx}x{ny} = {nx*ny} elementos")
print(f"  Z1 medianera: 0..{L1} x 0..{B1}")
print(f"  Viga amarre: {L1}..{L1+L_VIGA} x {(B-B_VIGA)/2}..{(B+B_VIGA)/2}")
print(f"  Z2 interna:  {L1+L_VIGA}..{L_TOT} x {(B-B2)/2}..{(B+B2)/2}")
print(f"  Cols: Col1@({COL1_X},{COL1_Y})=P{P_COL1}t, Col2@({COL2_X},{COL2_Y})=P{P_COL2}t")
print(f"  ks={KS_TM3} t/m3, h_zapata={H_ZAPATA}m")
print()

# ============================================================================
# Geometry helpers
# ============================================================================
def in_z1(x, y):
    return (0 <= x <= L1 + 1e-6 and (B-B1)/2 - 1e-6 <= y <= (B+B1)/2 + 1e-6)

def in_z2(x, y):
    return (L1+L_VIGA - 1e-6 <= x <= L_TOT + 1e-6 and (B-B2)/2 - 1e-6 <= y <= (B+B2)/2 + 1e-6)

def in_viga(x, y):
    return (L1 - 1e-6 <= x <= L1+L_VIGA + 1e-6 and (B-B_VIGA)/2 - 1e-6 <= y <= (B+B_VIGA)/2 + 1e-6)

def in_footing(x, y):
    """En zapata Z1 o Z2 (excluyendo viga, que no toca suelo)."""
    return (in_z1(x, y) or in_z2(x, y)) and not in_viga(x, y)

def is_active(x, y):
    """Cell activa (visible): Z1 o Z2 o viga."""
    return in_z1(x, y) or in_z2(x, y) or in_viga(x, y)

# ============================================================================
# Mesh nodes
# ============================================================================
nodes = np.array([[i*dx_e, j*dy_e] for j in range(nyn) for i in range(nxn)])
elements = []
for j in range(ny):
    for i in range(nx):
        n0 = j*nxn + i
        elements.append([n0, n0+1, n0+nxn+1, n0+nxn])
elements = np.array(elements)
N_el = len(elements)

# ============================================================================
# Mindlin Q4 stiffness (full 2x2 integration)
# ============================================================================
D = E * H_ZAPATA**3 / (12 * (1 - NU**2))
Db = D * np.array([[1, NU, 0], [NU, 1, 0], [0, 0, (1-NU)/2]])
G_mod = E / (2*(1+NU))
kappa = 5/6
Ds = kappa * G_mod * H_ZAPATA

def shape_q4(xi, eta):
    N = 0.25 * np.array([(1-xi)*(1-eta), (1+xi)*(1-eta), (1+xi)*(1+eta), (1-xi)*(1+eta)])
    dN_dxi  = 0.25 * np.array([-(1-eta),  (1-eta),  (1+eta), -(1+eta)])
    dN_deta = 0.25 * np.array([-(1-xi),  -(1+xi),   (1+xi),   (1-xi)])
    return N, dN_dxi, dN_deta

def element_stiffness(el_nodes):
    xy = nodes[el_nodes]
    Ke = np.zeros((12, 12))
    gauss2 = [(-1/np.sqrt(3), 1.0), (1/np.sqrt(3), 1.0)]
    # Bending + Shear, ambos full 2x2
    for xi_g, w_xi in gauss2:
        for eta_g, w_eta in gauss2:
            N, dN_dxi, dN_deta = shape_q4(xi_g, eta_g)
            J = np.array([[dN_dxi @ xy[:,0], dN_dxi @ xy[:,1]],
                          [dN_deta @ xy[:,0], dN_deta @ xy[:,1]]])
            detJ = np.linalg.det(J)
            Jinv = np.linalg.inv(J)
            dN_dx = Jinv[0,0]*dN_dxi + Jinv[0,1]*dN_deta
            dN_dy = Jinv[1,0]*dN_dxi + Jinv[1,1]*dN_deta
            # Bending B-matrix
            Bb = np.zeros((3, 12))
            for k in range(4):
                Bb[0, 3*k+1] = dN_dx[k]
                Bb[1, 3*k+2] = dN_dy[k]
                Bb[2, 3*k+1] = dN_dy[k]
                Bb[2, 3*k+2] = dN_dx[k]
            Ke += Bb.T @ Db @ Bb * detJ * w_xi * w_eta
            # Shear B-matrix
            Bs = np.zeros((2, 12))
            for k in range(4):
                Bs[0, 3*k+0] = dN_dx[k]
                Bs[0, 3*k+1] = -N[k]
                Bs[1, 3*k+0] = dN_dy[k]
                Bs[1, 3*k+2] = -N[k]
            Ke += Bs.T @ (Ds * np.eye(2)) @ Bs * detJ * w_xi * w_eta
    return Ke

# ============================================================================
# Assembly
# ============================================================================
print("=== Assembly ===")
K = lil_matrix((N_dof, N_dof))
F = np.zeros(N_dof)

# Tributary area
A_trib_arr = np.zeros(N_nodes)
for j in range(nyn):
    for i in range(nxn):
        eI = (i == 0 or i == nxn-1)
        eJ = (j == 0 or j == nyn-1)
        factor = 0.25 if eI and eJ else (0.5 if eI or eJ else 1.0)
        A_trib_arr[j*nxn + i] = dx_e * dy_e * factor

# Element stiffness (all elements - mesh completa para estabilidad)
for el in elements:
    Ke = element_stiffness(el)
    glb = np.array([3*el[k]+d for k in range(4) for d in range(3)])
    for i_lcl in range(12):
        for j_lcl in range(12):
            K[glb[i_lcl], glb[j_lcl]] += Ke[i_lcl, j_lcl]

# Winkler springs: SOLO en zapatas Z1 y Z2
# Stabilization rotational small en TODOS los nodos
k_theta_stab = 0.0001 * KS_TM3 * dx_e * dy_e
for n in range(N_nodes):
    x, y = nodes[n]
    if in_footing(x, y):
        K[3*n, 3*n] += KS_TM3 * A_trib_arr[n]
    # rot stabilization en todos los nodos
    K[3*n+1, 3*n+1] += k_theta_stab
    K[3*n+2, 3*n+2] += k_theta_stab
    # tiny w-stab en nodos fuera de footing para evitar matriz singular
    if not in_footing(x, y):
        K[3*n, 3*n] += 0.001 * KS_TM3 * A_trib_arr[n]

# Loads
sw_zapata = GAMMA_C * H_ZAPATA   # t/m^2
sw_viga = GAMMA_C * H_VIGA       # t/m^2 (viga es mas alta)

for n in range(N_nodes):
    x, y = nodes[n]
    if in_footing(x, y):
        F[3*n] -= sw_zapata * A_trib_arr[n]
    elif in_viga(x, y) and not in_footing(x, y):
        # Solo viga (sin contar zona compartida con Z1/Z2)
        F[3*n] -= sw_viga * A_trib_arr[n]

# Column loads distribuidas sobre huella
def find_col_nodes(cx, cy, csize):
    r = []
    for n in range(N_nodes):
        x, y = nodes[n]
        if abs(x-cx) <= csize/2 + 1e-6 and abs(y-cy) <= csize/2 + 1e-6:
            r.append(n)
    return r

col1_nodes = find_col_nodes(COL1_X, COL1_Y, COL_SIZE)
col2_nodes = find_col_nodes(COL2_X, COL2_Y, COL_SIZE)
print(f"  Col1 nodos: {len(col1_nodes)}, Col2 nodos: {len(col2_nodes)}")
if col1_nodes:
    for n in col1_nodes:
        F[3*n] -= P_COL1 / len(col1_nodes)
if col2_nodes:
    for n in col2_nodes:
        F[3*n] -= P_COL2 / len(col2_nodes)

# Solve
print("Solving...")
K_csr = K.tocsr()
u = spsolve(K_csr, F)
w = u[0::3]
print(f"  Uz centro Z1: {w[col1_nodes[len(col1_nodes)//2] if col1_nodes else 0]*1000:.3f} mm")
print(f"  Uz centro Z2: {w[col2_nodes[len(col2_nodes)//2] if col2_nodes else 0]*1000:.3f} mm")
print(f"  Uz max abs: {abs(w).max()*1000:.3f} mm")

# ============================================================================
# Pressure (only on footings)
# ============================================================================
sigma = np.zeros(N_nodes)  # tonf/m^2
for n in range(N_nodes):
    x, y = nodes[n]
    if in_footing(x, y):
        sigma[n] = -KS_TM3 * w[n]  # positivo = compresion
    else:
        sigma[n] = np.nan  # gris en viz

valid = ~np.isnan(sigma)
print(f"  σ range (footings): [{np.nanmin(sigma):.3f}, {np.nanmax(sigma):.3f}] t/m²")
print(f"  σ_max libro Fig.181: 24.179 t/m² (col lindero Z1)")

# ============================================================================
# Plot estilo SAFE Fig.180
# ============================================================================
fig, ax = plt.subplots(figsize=(14, 6))

X = nodes[:,0].reshape(nyn, nxn)
Y = nodes[:,1].reshape(nyn, nxn)
S = sigma.reshape(nyn, nxn)

# Plot con NaN como gris (mascara)
S_masked = np.ma.array(S, mask=np.isnan(S))
levels = np.linspace(np.nanmin(sigma), np.nanmax(sigma), 14)
cmap = plt.cm.jet
cmap.set_bad('lightgray', alpha=0.5)
cf = ax.contourf(X, Y, S_masked, levels=levels, cmap=cmap)
ax.contour(X, Y, S_masked, levels=levels, colors='black', linewidths=0.3, alpha=0.4)
cb = plt.colorbar(cf, ax=ax, label='σ (tonf/m²)')

# Outlines
ax.add_patch(Rectangle((0, (B-B1)/2), L1, B1, fill=False, edgecolor='yellow', linewidth=2, label='Zapata 1'))
ax.add_patch(Rectangle((L1+L_VIGA, (B-B2)/2), L2, B2, fill=False, edgecolor='yellow', linewidth=2, label='Zapata 2'))
ax.add_patch(Rectangle((L1, (B-B_VIGA)/2), L_VIGA, B_VIGA, fill=False, edgecolor='orange', linewidth=2, label='Viga amarre'))

# Columnas
ax.plot(COL1_X, COL1_Y, 'wo', markersize=10, markeredgecolor='black', label=f'Col1 P={P_COL1}t')
ax.plot(COL2_X, COL2_Y, 'wo', markersize=10, markeredgecolor='black', label=f'Col2 P={P_COL2}t')

ax.set_title(f'Hekatan Python FEM Ej.6 - Zapata Unida con Viga Amarre\n'
             f'σ_max = {np.nanmax(sigma):.3f} t/m² (libro Fig.181: 24.179)')
ax.set_xlabel('X (m)'); ax.set_ylabel('Y (m)')
ax.set_aspect('equal')
ax.set_xlim(-0.3, L_TOT + 0.3)
ax.set_ylim(-0.3, B + 0.3)
ax.legend(loc='upper center', bbox_to_anchor=(0.5, -0.08), ncol=5, fontsize=8)
ax.grid(True, alpha=0.2)

plt.tight_layout()
out_path = r'C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\hekatan-struct\validacion\Api CSI Computers\safe-api\guerra_ej6_python_fem.png'
plt.savefig(out_path, dpi=120, bbox_inches='tight')
print(f"\nPNG guardada: {out_path}")
plt.close()
