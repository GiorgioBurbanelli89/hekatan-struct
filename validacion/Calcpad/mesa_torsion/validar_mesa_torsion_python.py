# =====================================================================
#  Validacion Python del HTML Calcpad DKE — Mesa de Torsion
#  Reproduce mesa_torsion_DKE_completo.cpd/.html con el MISMO metodo:
#    - Shell-Thin DKE (Batoz DKQ = Wilson Ch8) + membrana Q4 + drilling
#    - 4 col C40x40 + 4 vigas V30x50, malla 5x5, carga Live = 0.5 tonf/m2
#    - Mapeo bending Batoz [w,bx,by] -> [uz,rx,ry] con T (FIX -46%)
#    - Reporte M2 en la CARA del soporte (z=3.5): offset = hV (CARDINALPT 8)
#
#  Objetivo: confirmar que M2 de columna (en la cara) queda < 5% vs ETABS.
# =====================================================================
import numpy as np
import scipy.sparse as sp
import scipy.sparse.linalg as spla
import sys
if hasattr(sys.stdout, "reconfigure"): sys.stdout.reconfigure(encoding="utf-8")

# === Datos e2k (identicos al .cpd) ===
Lx = Ly = 6.0; H = 4.0; t = 0.10
bC = hC = 0.40; bV = 0.30; hV = 0.50
E = 2534564 * 9.80665; nu = 0.20; G = E/(2*(1+nu))
GRAV = 9.80665
N = 5; nPS = N+1; dx = Lx/N; dy = Ly/N

def stv(b, h):                                    # Saint-Venant J (lado corto al cubo)
    a, s = max(b, h), min(b, h); r = s/a
    return (1/3)*(1 - 0.21*r*(1 - r**4/12))*a*s**3

AC = bC*hC; IyC = bC*hC**3/12; IzC = hC*bC**3/12; JC = stv(bC, hC)
AV = bV*hV; IyV = bV*hV**3/12; IzV = hV*bV**3/12; JV = stv(bV, hV)

nBase = 4; nFloor = nPS**2; nJ = nBase + nFloor; nDof = 6*nJ
def ix(i, j): return nBase + j*nPS + i

# === DKQ K bending 12x12 (Batoz, Wilson eq 8.21) ===
a_h, b_h = dx/2, dy/2
c_a, c_b = 1.5/dx, 1.5/dy

def q8_derivs(xi, eta):
    xi_q8  = [-1, 1, 1, -1, 0, 1, 0, -1]
    eta_q8 = [-1, -1, 1, 1, -1, 0, 1, 0]
    dNdx = np.zeros(8); dNde = np.zeros(8)
    for k in range(4):
        s, q = xi_q8[k], eta_q8[k]
        dNdx[k] = 0.25*s*(1 + q*eta)*(2*s*xi + q*eta)
        dNde[k] = 0.25*q*(1 + s*xi)*(s*xi + 2*q*eta)
    dNdx[4] = -xi*(1 - eta);     dNde[4] = -0.5*(1 - xi**2)
    dNdx[5] = 0.5*(1 - eta**2);  dNde[5] = -eta*(1 + xi)
    dNdx[6] = -xi*(1 + eta);     dNde[6] = 0.5*(1 - xi**2)
    dNdx[7] = -0.5*(1 - eta**2); dNde[7] = -eta*(1 - xi)
    return dNdx, dNde

def dke_B(xi, eta):
    dNdx, dNde = q8_derivs(xi, eta)
    dHx_dxi = np.zeros(12); dHx_deta = np.zeros(12)
    dHy_dxi = np.zeros(12); dHy_deta = np.zeros(12)
    for i, vals in enumerate([
        (-c_a*dNdx[4], dNdx[0]-0.25*dNdx[4]+0.5*dNdx[7], 0),
        ( c_a*dNdx[4], dNdx[1]-0.25*dNdx[4]+0.5*dNdx[5], 0),
        ( c_a*dNdx[6], dNdx[2]+0.5*dNdx[5]-0.25*dNdx[6], 0),
        (-c_a*dNdx[6], dNdx[3]-0.25*dNdx[6]+0.5*dNdx[7], 0)]):
        dHx_dxi[3*i:3*i+3] = vals
    for i, vals in enumerate([
        (-c_a*dNde[4], dNde[0]-0.25*dNde[4]+0.5*dNde[7], 0),
        ( c_a*dNde[4], dNde[1]-0.25*dNde[4]+0.5*dNde[5], 0),
        ( c_a*dNde[6], dNde[2]+0.5*dNde[5]-0.25*dNde[6], 0),
        (-c_a*dNde[6], dNde[3]-0.25*dNde[6]+0.5*dNde[7], 0)]):
        dHx_deta[3*i:3*i+3] = vals
    for i, vals in enumerate([
        (-c_b*dNdx[7], 0, dNdx[0]+0.5*dNdx[4]-0.25*dNdx[7]),
        (-c_b*dNdx[5], 0, dNdx[1]+0.5*dNdx[4]-0.25*dNdx[5]),
        ( c_b*dNdx[5], 0, dNdx[2]-0.25*dNdx[5]+0.5*dNdx[6]),
        ( c_b*dNdx[7], 0, dNdx[3]+0.5*dNdx[6]-0.25*dNdx[7])]):
        dHy_dxi[3*i:3*i+3] = vals
    for i, vals in enumerate([
        (-c_b*dNde[7], 0, dNde[0]+0.5*dNde[4]-0.25*dNde[7]),
        (-c_b*dNde[5], 0, dNde[1]+0.5*dNde[4]-0.25*dNde[5]),
        ( c_b*dNde[5], 0, dNde[2]-0.25*dNde[5]+0.5*dNde[6]),
        ( c_b*dNde[7], 0, dNde[3]+0.5*dNde[6]-0.25*dNde[7])]):
        dHy_deta[3*i:3*i+3] = vals
    B = np.zeros((3, 12))
    B[0] = dHx_dxi / a_h
    B[1] = dHy_deta / b_h
    B[2] = dHx_deta / b_h + dHy_dxi / a_h
    return B

D_mat = E*t**3/(12*(1-nu**2)) * np.array([[1, nu, 0], [nu, 1, 0], [0, 0, (1-nu)/2]])
gp = [-1/np.sqrt(3), 1/np.sqrt(3)]

K_dke = np.zeros((12, 12))
for xi in gp:
    for eta in gp:
        B = dke_B(xi, eta)
        K_dke += B.T @ D_mat @ B * a_h * b_h

# Membrana Q4 bilineal
Em = E*t/(1-nu**2) * np.array([[1, nu, 0], [nu, 1, 0], [0, 0, (1-nu)/2]])
K_mem = np.zeros((8, 8))
for xi in gp:
    for eta in gp:
        Bm = np.zeros((3, 8))
        dN = [[-0.25*(1-eta)/a_h, 0.25*(1-eta)/a_h, 0.25*(1+eta)/a_h, -0.25*(1+eta)/a_h],
              [-0.25*(1-xi)/b_h, -0.25*(1+xi)/b_h, 0.25*(1+xi)/b_h, 0.25*(1-xi)/b_h]]
        for i in range(4):
            Bm[0, 2*i] = dN[0][i]; Bm[1, 2*i+1] = dN[1][i]
            Bm[2, 2*i] = dN[1][i]; Bm[2, 2*i+1] = dN[0][i]
        K_mem += Bm.T @ Em @ Bm * a_h * b_h

# Mapeo bending Batoz [w,bx,by] -> shell [uz,rx,ry]:  bx=dw/dx=-ry, by=dw/dy=+rx
Tn = np.array([[1, 0, 0], [0, 0, 1], [0, -1, 0]], dtype=float)
Tb = np.zeros((12, 12))
for n in range(4): Tb[3*n:3*n+3, 3*n:3*n+3] = Tn
K_dke = Tb.T @ K_dke @ Tb

# Shell 24x24 (membrana + DKE + drilling identico al .cpd: mean(|diag Kmem|)*1e-6)
K_shell = np.zeros((24, 24))
mem_idx  = [0, 1, 6, 7, 12, 13, 18, 19]
bend_idx = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22]
for i in range(8):
    for j in range(8): K_shell[mem_idx[i], mem_idx[j]] = K_mem[i, j]
for i in range(12):
    for j in range(12): K_shell[bend_idx[i], bend_idx[j]] += K_dke[i, j]
drill = np.sum(np.abs(np.diag(K_mem)))/8 * 1e-6     # = .cpd: drill*10^-6/8
for i in [5, 11, 17, 23]: K_shell[i, i] += drill

# === Beam/column K (Euler-Bernoulli 3D) ===
def beam_K(L, A, Iy, Iz, J):
    K = np.zeros((12, 12))
    K[0, 0] = K[6, 6] = E*A/L; K[0, 6] = K[6, 0] = -E*A/L
    K[3, 3] = K[9, 9] = G*J/L; K[3, 9] = K[9, 3] = -G*J/L
    c = 12*E*Iy/L**3; d = 6*E*Iy/L**2; e4 = 4*E*Iy/L; f = 2*E*Iy/L
    K[2, 2] = K[8, 8] = c; K[2, 4] = K[4, 2] = d; K[2, 8] = K[8, 2] = -c; K[2, 10] = K[10, 2] = d
    K[4, 4] = K[10, 10] = e4; K[4, 8] = K[8, 4] = -d; K[4, 10] = K[10, 4] = f; K[8, 10] = K[10, 8] = -d
    c2 = 12*E*Iz/L**3; d2 = 6*E*Iz/L**2; e2 = 4*E*Iz/L; f2 = 2*E*Iz/L
    K[1, 1] = K[7, 7] = c2; K[1, 5] = K[5, 1] = -d2; K[1, 7] = K[7, 1] = -c2; K[1, 11] = K[11, 1] = -d2
    K[5, 5] = K[11, 11] = e2; K[5, 7] = K[7, 5] = d2; K[5, 11] = K[11, 5] = f2; K[7, 11] = K[11, 7] = d2
    return K

T_col = np.zeros((12, 12))
for blk in range(4):
    T_col[blk*3, blk*3+2] = 1; T_col[blk*3+1, blk*3] = 1; T_col[blk*3+2, blk*3+1] = 1
Kc_local = beam_K(H, AC, IyC, IzC, JC)
Kc = T_col.T @ Kc_local @ T_col          # offset NO aplicado en K (PZENDOFFSETSRIGID No)
IOFF_COL = hV                            # 0.50 m = peralte viga completo (CARDINALPT 8)

Kvx = beam_K(dx, AV, IyV, IzV, JV)
T_by = np.zeros((12, 12))
for blk in range(4):
    T_by[blk*3, blk*3+1] = 1; T_by[blk*3+1, blk*3] = -1; T_by[blk*3+2, blk*3+2] = 1
Kvy = T_by.T @ beam_K(dx, AV, IyV, IzV, JV) @ T_by

# === Ensamblaje ===
rows, cols, data = [], [], []
def add_ke(ke, dofs):
    for li in range(len(dofs)):
        for lj in range(len(dofs)):
            if abs(ke[li, lj]) > 1e-18:
                rows.append(dofs[li]); cols.append(dofs[lj]); data.append(ke[li, lj])

for j in range(N):
    for i in range(N):
        ns = [ix(i, j), ix(i+1, j), ix(i+1, j+1), ix(i, j+1)]
        dofs = []
        for n in ns: dofs.extend([n*6+d for d in range(6)])
        add_ke(K_shell, dofs)

for nI, nJ in [(0, ix(0, 0)), (1, ix(N, 0)), (2, ix(N, N)), (3, ix(0, N))]:
    dofs = [nI*6+d for d in range(6)] + [nJ*6+d for d in range(6)]
    add_ke(Kc, dofs)

beam_segs = []
for i in range(N): beam_segs.append((ix(i, 0), ix(i+1, 0), 'x'))
for j in range(N): beam_segs.append((ix(N, j), ix(N, j+1), 'y'))
for i in range(N): beam_segs.append((ix(i, N), ix(i+1, N), 'x'))
for j in range(N): beam_segs.append((ix(0, j), ix(0, j+1), 'y'))
for nI, nJ, bdir in beam_segs:
    Kb = Kvx if bdir == 'x' else Kvy
    dofs = [nI*6+d for d in range(6)] + [nJ*6+d for d in range(6)]
    add_ke(Kb, dofs)

K = sp.csr_matrix((data, (rows, cols)), shape=(nDof, nDof)); K.sum_duplicates()

# BCs pinned (base: ux,uy,uz fijos)
fixed = [n*6+d for n in range(4) for d in range(3)]
free = sorted(set(range(nDof)) - set(fixed))

# Carga Live = 0.5 tonf/m2 (tributaria 0.25/0.5/1.0)
F = np.zeros(nDof)
q_total = 0.5*GRAV
for j in range(nPS):
    for i in range(nPS):
        c = (i in [0, N]) and (j in [0, N]); e = (i in [0, N]) or (j in [0, N])
        fac = 0.25 if c else (0.5 if e else 1.0)
        F[ix(i, j)*6+2] -= q_total*dx*dy*fac

u = np.zeros(nDof)
u[free] = spla.spsolve(K[np.ix_(free, free)], F[free])

# Fuerzas col 1 (esquina SO). K SIN offset -> momento en el NUDO (z=4.0)
nI, nJ = 0, ix(0, 0)
u_col = np.zeros(12); u_col[:6] = u[nI*6:nI*6+6]; u_col[6:] = u[nJ*6:nJ*6+6]
f_local = Kc_local @ (T_col @ u_col)
P  = abs(f_local[0])/GRAV
M2_nudo = abs(f_local[10])/GRAV               # momento en el NUDO (z=4.0)
V_col   = M2_nudo/H                           # base pinned -> V = M_nudo/H
# Reporte en CARA (= ETABS, station 3.5): M_face = M_nudo - V*ioff = M_nudo*(H-ioff)/H
M2_cara = M2_nudo*(H - IOFF_COL)/H
wmax = min(u[ix(i, j)*6+2] for j in range(nPS) for i in range(nPS))*1000

# === Referencias ===
# ETABS real (Resultados Frames.e2k, C1 Live, station 3.5 / nudo 4.0)
ETABS = {"P": 4.50, "M2_nudo": 2.434, "M2_cara": 2.13, "w": None}
# Calcpad DKE (mesa_torsion_dke_completo.html, corregido 2026-06-02)
CALCPAD = {"P": 4.500, "M2_nudo": 2.476358, "M2_cara": 2.166813, "w": -6.423742}

def d(h, e): return (h - e)/e*100 if e else float('nan')

print("="*74)
print("  Validacion Python del HTML Calcpad DKE — Mesa de Torsion (Live)")
print("  Shell-Thin DKE Batoz + frames | malla 5x5 | reporte en cara z=3.5")
print("="*74)
hdr = f"  {'Magnitud':<18}{'Python':>11}{'Calcpad':>11}{'ETABS':>10}{'Py vs ETABS':>14}"
print(hdr); print("  " + "-"*70)
print(f"  {'P col (tonf)':<18}{P:>11.4f}{CALCPAD['P']:>11.4f}{ETABS['P']:>10.4f}{d(P,ETABS['P']):>+13.1f}%")
print(f"  {'w_max (mm)':<18}{wmax:>11.4f}{CALCPAD['w']:>11.4f}{'—':>10}{'—':>14}")
print(f"  {'M2 nudo (z=4.0)':<18}{M2_nudo:>11.4f}{CALCPAD['M2_nudo']:>11.4f}{ETABS['M2_nudo']:>10.4f}{d(M2_nudo,ETABS['M2_nudo']):>+13.1f}%")
print(f"  {'M2 cara (z=3.5)':<18}{M2_cara:>11.4f}{CALCPAD['M2_cara']:>11.4f}{ETABS['M2_cara']:>10.4f}{d(M2_cara,ETABS['M2_cara']):>+13.1f}%")
print("="*74)

diff_cara = d(M2_cara, ETABS["M2_cara"])
diff_vs_cpd = d(M2_cara, CALCPAD["M2_cara"])
ok = abs(diff_cara) < 5.0
print(f"  M2 cara: Python {diff_cara:+.2f}% vs ETABS  |  {diff_vs_cpd:+.2f}% vs Calcpad")
print(f"  GATE M2 < 5% vs ETABS: {'PASS ✓' if ok else 'FAIL ✗'}  ({abs(diff_cara):.2f}% < 5%)")
print("="*74)
sys.exit(0 if ok else 1)
