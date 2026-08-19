"""
Test: Q4 plate with full 2x2 shear integration (no hourglass)
vs 1x1 SRI (hourglass problem) vs OpenSees MITC4
"""
import numpy as np
from scipy import sparse
from scipy.sparse.linalg import spsolve
import openseespy.opensees as ops

# ─── Parameters ───
La, Lb = 15.6, 9.6
nx, ny = 26, 16
dx, dy = La / nx, Lb / ny
E, nu, t = 35e6, 0.2, 0.2
q = -10.0
kappa_s = 5.0 / 6.0
G = E / (2 * (1 + nu))

colX = [0, 3.6, 7.8, 12.0, 15.6]
colY = [0, 3.0, 6.6, 9.6]

DOFS = 3
nNodesX = nx + 1
nNodesY = ny + 1
nNodes = nNodesX * nNodesY
nDofs = nNodes * DOFS

node_x = np.zeros(nNodes)
node_y = np.zeros(nNodes)
for j in range(nNodesY):
    for i in range(nNodesX):
        node_x[j * nNodesX + i] = i * dx
        node_y[j * nNodesX + i] = j * dy

XI  = np.array([-1, 1, 1, -1], dtype=float)
ETA = np.array([-1, -1, 1, 1], dtype=float)

def shape_funcs(xi, eta):
    return 0.25 * (1 + XI * xi) * (1 + ETA * eta)

def shape_derivs(xi, eta):
    dN_dxi  = 0.25 * XI  * (1 + ETA * eta)
    dN_deta = 0.25 * ETA * (1 + XI * xi)
    return np.column_stack([dN_dxi, dN_deta])

gp2 = 1.0 / np.sqrt(3)
GP2 = [(-gp2, -gp2, 1.0), (gp2, -gp2, 1.0), (gp2, gp2, 1.0), (-gp2, gp2, 1.0)]

D0 = E * t**3 / (12 * (1 - nu**2))
Db = D0 * np.array([[1, nu, 0], [nu, 1, 0], [0, 0, 0.5*(1-nu)]])
Ds0 = kappa_s * G * t
Ds = Ds0 * np.eye(2)

def assemble_q4(shear_integration='2x2'):
    """Assemble K and F for Q4 plate.
    shear_integration: '2x2' (full) or '1x1' (SRI, hourglass-prone)
    """
    rows, cols, vals = [], [], []
    F = np.zeros(nDofs)

    if shear_integration == '1x1':
        GP_shear = [(0.0, 0.0, 4.0)]
    else:
        GP_shear = GP2

    for j in range(ny):
        for i in range(nx):
            n0 = j * nNodesX + i
            elem_nodes = [n0, n0+1, n0+nNodesX+1, n0+nNodesX]
            exy = np.array([[node_x[n], node_y[n]] for n in elem_nodes])

            Ke = np.zeros((12, 12))
            fe = np.zeros(12)

            # Bending: always 2x2
            for xi, eta, wt in GP2:
                dN = shape_derivs(xi, eta)
                J = dN.T @ exy; detJ = np.linalg.det(J); Jinv = np.linalg.inv(J)
                dNdx = dN @ Jinv.T

                Bb = np.zeros((3, 12))
                for ii in range(4):
                    Bb[0, 3*ii+1] = dNdx[ii, 0]
                    Bb[1, 3*ii+2] = dNdx[ii, 1]
                    Bb[2, 3*ii+1] = dNdx[ii, 1]
                    Bb[2, 3*ii+2] = dNdx[ii, 0]
                Ke += wt * detJ * (Bb.T @ Db @ Bb)

                N = shape_funcs(xi, eta)
                for ii in range(4):
                    fe[3*ii] += N[ii] * q * detJ * wt

            # Shear: variable integration
            for xi, eta, wt in GP_shear:
                N = shape_funcs(xi, eta)
                dN = shape_derivs(xi, eta)
                J = dN.T @ exy; detJ = np.linalg.det(J); Jinv = np.linalg.inv(J)
                dNdx = dN @ Jinv.T

                Bs = np.zeros((2, 12))
                for ii in range(4):
                    Bs[0, 3*ii]   =  dNdx[ii, 0]
                    Bs[0, 3*ii+1] = -N[ii]
                    Bs[1, 3*ii]   =  dNdx[ii, 1]
                    Bs[1, 3*ii+2] = -N[ii]
                Ke += wt * detJ * (Bs.T @ Ds @ Bs)

            dof_map = []
            for n in elem_nodes:
                for d in range(3):
                    dof_map.append(3 * n + d)

            for ii in range(12):
                F[dof_map[ii]] += fe[ii]
                for jj in range(12):
                    rows.append(dof_map[ii])
                    cols.append(dof_map[jj])
                    vals.append(Ke[ii, jj])

    K = sparse.coo_matrix((vals, (rows, cols)), shape=(nDofs, nDofs)).tocsc()
    return K, F

# Column BCs
col_dofs = []
col_set = set()
for cx in colX:
    for cy in colY:
        best_d, best_n = 1e10, 0
        for n in range(nNodes):
            d = np.hypot(node_x[n] - cx, node_y[n] - cy)
            if d < best_d:
                best_d = d; best_n = n
        if best_n not in col_set:
            col_set.add(best_n)
            col_dofs.append(3 * best_n)

free_dofs = sorted(set(range(nDofs)) - set(col_dofs))

# ===== Test 1: SRI (1x1 shear) — the buggy version =====
print("=" * 60)
print("SRI (1x1 shear) — hourglass-prone")
K1, F1 = assemble_q4('1x1')
u1 = np.zeros(nDofs)
u1[free_dofs] = spsolve(K1[np.ix_(free_dofs, free_dofs)], F1[free_dofs])
w1 = u1[0::3]
print(f"  pos={np.sum(w1>1e-10)}, min_w={np.min(w1):.6e}, max_w={np.max(w1):.6e}")
print(f"  Node 229 (7.80,4.80): w = {w1[229]:.6e}")

# ===== Test 2: Full 2x2 shear integration =====
print("\n" + "=" * 60)
print("Full 2x2 shear integration — no hourglass")
K2, F2 = assemble_q4('2x2')
u2 = np.zeros(nDofs)
u2[free_dofs] = spsolve(K2[np.ix_(free_dofs, free_dofs)], F2[free_dofs])
w2 = u2[0::3]
print(f"  pos={np.sum(w2>1e-10)}, min_w={np.min(w2):.6e}, max_w={np.max(w2):.6e}")
print(f"  Node 229 (7.80,4.80): w = {w2[229]:.6e}")

# ===== Test 3: OpenSees MITC4 =====
print("\n" + "=" * 60)
print("OpenSees ShellMITC4")
ops.wipe()
ops.model('basic', '-ndm', 3, '-ndf', 6)
nid = 1; nm = {}
for j in range(nNodesY):
    for i in range(nNodesX):
        ops.node(nid, i*dx, j*dy, 0.0)
        nm[(i,j)] = nid; nid += 1
ops.nDMaterial('ElasticIsotropic', 1, E, nu)
ops.section('PlateFiber', 1, 1, t)
eid = 1
for j in range(ny):
    for i in range(nx):
        ops.element('ShellMITC4', eid, nm[(i,j)], nm[(i+1,j)], nm[(i+1,j+1)], nm[(i,j+1)], 1)
        eid += 1

# Column BCs
os_col = set()
for cx in colX:
    for cy in colY:
        best_d, best_n = 1e10, None
        for (i,j), nt in nm.items():
            d = np.hypot(i*dx-cx, j*dy-cy)
            if d < best_d: best_d = d; best_n = nt
        os_col.add(best_n)
        ops.fix(best_n, 0, 0, 1, 0, 0, 0)

c1 = nm[(0,0)]; c2 = nm[(nx,0)]; c3 = nm[(0,ny)]
ops.fix(c1, 1, 1, 0, 0, 0, 0)
ops.fix(c2, 0, 1, 0, 0, 0, 0)
ops.fix(c3, 1, 0, 0, 0, 0, 0)

ops.timeSeries('Constant', 1)
ops.pattern('Plain', 1, 1)
for j in range(nNodesY):
    for i in range(nNodesX):
        fx = dx; fy = dy
        if i==0 or i==nx: fx=dx/2
        if j==0 or j==ny: fy=dy/2
        ops.load(nm[(i,j)], 0, 0, q*fx*fy, 0, 0, 0)

ops.system('BandSPD')
ops.numberer('RCM')
ops.constraints('Plain')
ops.integrator('LoadControl', 1.0)
ops.algorithm('Linear')
ops.analysis('Static')
ops.analyze(1)

w_os = np.array([ops.nodeDisp(nm[(i,j)], 3) for j in range(nNodesY) for i in range(nNodesX)])
print(f"  pos={np.sum(w_os>1e-10)}, min_w={np.min(w_os):.6e}, max_w={np.max(w_os):.6e}")
n229_ij = (13, 8)
print(f"  Node ~229 ({13*dx:.2f},{8*dy:.2f}): w = {ops.nodeDisp(nm[n229_ij], 3):.6e}")
ops.wipe()

# ===== Also check SS edge case to verify no shear locking =====
print("\n" + "=" * 60)
print("SS edges — checking shear locking with full integration")
edge_dofs = []
for j in range(nNodesY):
    for i in range(nNodesX):
        if i==0 or i==nx or j==0 or j==ny:
            edge_dofs.append(3*(j*nNodesX+i))
free_ss = sorted(set(range(nDofs)) - set(edge_dofs))
u_ss1 = np.zeros(nDofs)
u_ss1[free_ss] = spsolve(K1[np.ix_(free_ss, free_ss)], F1[free_ss])
u_ss2 = np.zeros(nDofs)
u_ss2[free_ss] = spsolve(K2[np.ix_(free_ss, free_ss)], F2[free_ss])

center = (ny//2)*nNodesX + nx//2
D = E*t**3/(12*(1-nu**2))
w_nav = sum(1/(m*n*((m**2/La**2+n**2/Lb**2)**2)) for m in range(1,20,2) for n in range(1,20,2))
w_nav *= 16*abs(q)/(np.pi**6*D)

print(f"  Navier:     w_center = {w_nav:.6e}")
print(f"  SRI (1x1):  w_center = {u_ss1[3*center]:.6e}  error = {abs((abs(u_ss1[3*center])-w_nav)/w_nav*100):.2f}%")
print(f"  Full (2x2): w_center = {u_ss2[3*center]:.6e}  error = {abs((abs(u_ss2[3*center])-w_nav)/w_nav*100):.2f}%")
