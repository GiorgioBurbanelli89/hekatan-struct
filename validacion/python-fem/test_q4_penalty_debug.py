"""
Debug: Q4 Mindlin plate with penalty vs elimination BCs
Test if penalty method causes wrong results with few constraints
"""
import numpy as np
from scipy import sparse
from scipy.sparse.linalg import spsolve

# Parameters
La, Lb = 15.6, 9.6
nx, ny = 26, 16
dx, dy = La / nx, Lb / ny
E, nu, t = 35e6, 0.2, 0.2
q = -10.0  # downward
kappa_s = 5.0 / 6.0
G = E / (2 * (1 + nu))

# Column positions
colX = [0, 3.6, 7.8, 12.0, 15.6]
colY = [0, 3.0, 6.6, 9.6]

# DOFs per node
DOFS = 3  # w, bx, by

# Generate nodes
nNodesX = nx + 1
nNodesY = ny + 1
nNodes = nNodesX * nNodesY
nDofs = nNodes * DOFS

print(f"Mesh: {nx}×{ny} elements, {nNodes} nodes, {nDofs} DOFs")

# Node coordinates
node_x = np.zeros(nNodes)
node_y = np.zeros(nNodes)
for j in range(nNodesY):
    for i in range(nNodesX):
        idx = j * nNodesX + i
        node_x[idx] = i * dx
        node_y[idx] = j * dy

# Shape functions and derivatives
XI  = np.array([-1, 1, 1, -1], dtype=float)
ETA = np.array([-1, -1, 1, 1], dtype=float)

def shape_funcs(xi, eta):
    return 0.25 * (1 + XI * xi) * (1 + ETA * eta)

def shape_derivs(xi, eta):
    dN_dxi  = 0.25 * XI  * (1 + ETA * eta)
    dN_deta = 0.25 * ETA * (1 + XI * xi)
    return np.column_stack([dN_dxi, dN_deta])

def jacobian(enodes_xy, dN):
    # J = dN^T @ [x, y]
    J = dN.T @ enodes_xy  # 2x2
    detJ = np.linalg.det(J)
    Jinv = np.linalg.inv(J)
    return J, Jinv, detJ

# Gauss points
gp2 = 1.0 / np.sqrt(3)
GP2 = [(-gp2, -gp2, 1.0), (gp2, -gp2, 1.0), (gp2, gp2, 1.0), (-gp2, gp2, 1.0)]
GP1 = [(0.0, 0.0, 4.0)]

# Constitutive matrices
D0 = E * t**3 / (12 * (1 - nu**2))
Db = D0 * np.array([[1, nu, 0], [nu, 1, 0], [0, 0, 0.5*(1-nu)]])
Ds0 = kappa_s * G * t
Ds = Ds0 * np.eye(2)

# Assemble K and F
print("Assembling...")
rows, cols, vals = [], [], []
F = np.zeros(nDofs)

for j in range(ny):
    for i in range(nx):
        n0 = j * nNodesX + i
        elem_nodes = [n0, n0+1, n0+nNodesX+1, n0+nNodesX]
        enodes_xy = np.array([[node_x[n], node_y[n]] for n in elem_nodes])

        Ke = np.zeros((12, 12))
        fe = np.zeros(12)

        # Bending: 2x2 Gauss
        for xi, eta, wt in GP2:
            dN = shape_derivs(xi, eta)
            _, Jinv, detJ = jacobian(enodes_xy, dN)
            dNdx = dN @ Jinv.T  # 4x2

            Bb = np.zeros((3, 12))
            for ii in range(4):
                Bb[0, 3*ii+1] = dNdx[ii, 0]  # kxx = dbx/dx
                Bb[1, 3*ii+2] = dNdx[ii, 1]  # kyy = dby/dy
                Bb[2, 3*ii+1] = dNdx[ii, 1]  # kxy = dbx/dy
                Bb[2, 3*ii+2] = dNdx[ii, 0]  #     + dby/dx

            Ke += wt * detJ * (Bb.T @ Db @ Bb)

            # Load vector
            N = shape_funcs(xi, eta)
            for ii in range(4):
                fe[3*ii] += N[ii] * q * detJ * wt

        # Shear: 1x1 Gauss
        for xi, eta, wt in GP1:
            N = shape_funcs(xi, eta)
            dN = shape_derivs(xi, eta)
            _, Jinv, detJ = jacobian(enodes_xy, dN)
            dNdx = dN @ Jinv.T

            Bs = np.zeros((2, 12))
            for ii in range(4):
                Bs[0, 3*ii]   =  dNdx[ii, 0]  # gxz = dw/dx
                Bs[0, 3*ii+1] = -N[ii]         #     - bx
                Bs[1, 3*ii]   =  dNdx[ii, 1]  # gyz = dw/dy
                Bs[1, 3*ii+2] = -N[ii]         #     - by

            Ke += wt * detJ * (Bs.T @ Ds @ Bs)

        # DOF map
        dof_map = []
        for n in elem_nodes:
            for d in range(3):
                dof_map.append(3 * n + d)

        # Scatter
        for ii in range(12):
            F[dof_map[ii]] += fe[ii]
            for jj in range(12):
                rows.append(dof_map[ii])
                cols.append(dof_map[jj])
                vals.append(Ke[ii, jj])

K = sparse.coo_matrix((vals, (rows, cols)), shape=(nDofs, nDofs)).tocsc()
print(f"K assembled: {K.nnz} non-zeros")

# Find column nodes
col_dofs = []
col_nodes_set = set()
for cx in colX:
    for cy in colY:
        best_d, best_n = 1e10, 0
        for n in range(nNodes):
            d = np.hypot(node_x[n] - cx, node_y[n] - cy)
            if d < best_d:
                best_d = d
                best_n = n
        if best_n not in col_nodes_set:
            col_nodes_set.add(best_n)
            col_dofs.append(3 * best_n)  # w DOF

print(f"Column support DOFs: {len(col_dofs)}")

# ======= METHOD 1: Penalty (same as C++ solver) =======
print("\n=== METHOD 1: Penalty (k=1e20) ===")
K_pen = K.copy()
F_pen = F.copy()
penalty = 1e20
for gdof in col_dofs:
    K_pen[gdof, gdof] += penalty
    F_pen[gdof] += penalty * 0.0

u_pen = spsolve(K_pen, F_pen)
w_pen = u_pen[0::3]  # extract w DOFs
pos_pen = np.sum(w_pen > 1e-10)
print(f"  Positive w: {pos_pen}, min_w={np.min(w_pen):.6e}, max_w={np.max(w_pen):.6e}")
# Check node 229
n229 = 229
print(f"  Node 229 ({node_x[n229]:.2f}, {node_y[n229]:.2f}): w = {w_pen[n229]:.6e}")

# ======= METHOD 2: Direct elimination =======
print("\n=== METHOD 2: Direct elimination ===")
all_dofs = set(range(nDofs))
fixed_dofs = set(col_dofs)
free_dofs = sorted(all_dofs - fixed_dofs)

K_dense_free = K[np.ix_(free_dofs, free_dofs)]
F_free = F[free_dofs]

u_free = spsolve(K_dense_free, F_free)

u_elim = np.zeros(nDofs)
for i, dof in enumerate(free_dofs):
    u_elim[dof] = u_free[i]

w_elim = u_elim[0::3]
pos_elim = np.sum(w_elim > 1e-10)
print(f"  Positive w: {pos_elim}, min_w={np.min(w_elim):.6e}, max_w={np.max(w_elim):.6e}")
print(f"  Node 229 ({node_x[n229]:.2f}, {node_y[n229]:.2f}): w = {w_elim[n229]:.6e}")

# ======= METHOD 3: Moderate penalty =======
print("\n=== METHOD 3: Penalty (k=1e10) ===")
K_mod = K.copy()
F_mod = F.copy()
for gdof in col_dofs:
    K_mod[gdof, gdof] += 1e10
    F_mod[gdof] += 1e10 * 0.0

u_mod = spsolve(K_mod, F_mod)
w_mod = u_mod[0::3]
pos_mod = np.sum(w_mod > 1e-10)
print(f"  Positive w: {pos_mod}, min_w={np.min(w_mod):.6e}, max_w={np.max(w_mod):.6e}")
print(f"  Node 229 ({node_x[n229]:.2f}, {node_y[n229]:.2f}): w = {w_mod[n229]:.6e}")

# Compare with OpenSees reference
print("\n=== OpenSees reference ===")
print(f"  Node 229 (7.80, 4.80): w = -3.339766e-04")
print(f"  min_w = -5.962990e-04, all w <= 0")

# Condition number estimate
print("\n=== Condition check ===")
diag_K = K.diagonal()
print(f"  K diagonal: min={np.min(np.abs(diag_K)):.4e}, max={np.max(np.abs(diag_K)):.4e}")
print(f"  Ratio max/min: {np.max(np.abs(diag_K))/np.min(np.abs(diag_K[diag_K != 0])):.4e}")
