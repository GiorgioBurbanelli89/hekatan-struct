"""
MITC4 (Mixed Interpolation of Tensorial Components) Q4 plate element
Eliminates both shear locking AND hourglass modes

Approach: "tie" shear strains at edge midpoints
  γ_xz: evaluated at A=(0,-1) and C=(0,+1), interpolated in η
  γ_yz: evaluated at B=(-1,0) and D=(+1,0), interpolated in ξ
Then integrate with 2×2 Gauss
"""
import numpy as np
from scipy import sparse
from scipy.sparse.linalg import spsolve

# ─── Parameters ───
La, Lb = 15.6, 9.6
nx, ny = 26, 16
dx, dy = La / nx, Lb / ny
E, nu, t = 35e6, 0.2, 0.2
q = -10.0
kappa_s = 5.0 / 6.0
G = E / (2 * (1 + nu))

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

def get_Jinv_detJ(exy, dN):
    J = dN.T @ exy
    detJ = np.linalg.det(J)
    Jinv = np.linalg.inv(J)
    return Jinv, detJ

gp2 = 1.0 / np.sqrt(3)
GP2 = [(-gp2, -gp2, 1.0), (gp2, -gp2, 1.0), (gp2, gp2, 1.0), (-gp2, gp2, 1.0)]

D0 = E * t**3 / (12 * (1 - nu**2))
Db = D0 * np.array([[1, nu, 0], [nu, 1, 0], [0, 0, 0.5*(1-nu)]])
Ds0 = kappa_s * G * t
Ds = Ds0 * np.eye(2)

def compute_Bs_at(exy, xi, eta):
    """Standard Bs at a specific point"""
    N = shape_funcs(xi, eta)
    dN = shape_derivs(xi, eta)
    Jinv, detJ = get_Jinv_detJ(exy, dN)
    dNdx = dN @ Jinv.T
    Bs = np.zeros((2, 12))
    for i in range(4):
        Bs[0, 3*i]   =  dNdx[i, 0]  # γxz = dw/dx
        Bs[0, 3*i+1] = -N[i]         #     - βx
        Bs[1, 3*i]   =  dNdx[i, 1]  # γyz = dw/dy
        Bs[1, 3*i+2] = -N[i]         #     - βy
    return Bs, detJ

def compute_Bs_mitc4(exy, xi, eta):
    """MITC4 shear B-matrix using assumed natural strain approach

    Tying points:
      A = (0, -1), C = (0, +1)  → γ_xz sampled here, interpolated in η
      B = (-1, 0), D = (+1, 0)  → γ_yz sampled here, interpolated in ξ
    """
    # Compute standard Bs at tying points
    Bs_A, _ = compute_Bs_at(exy, 0.0, -1.0)  # A = (0, -1)
    Bs_C, _ = compute_Bs_at(exy, 0.0, +1.0)  # C = (0, +1)
    Bs_B, _ = compute_Bs_at(exy, -1.0, 0.0)  # B = (-1, 0)
    Bs_D, _ = compute_Bs_at(exy, +1.0, 0.0)  # D = (+1, 0)

    # Interpolate:
    # γ_xz(ξ,η) = ½(1-η)·γ_xz^A + ½(1+η)·γ_xz^C
    # γ_yz(ξ,η) = ½(1-ξ)·γ_yz^B + ½(1+ξ)·γ_yz^D
    Bs = np.zeros((2, 12))
    Bs[0, :] = 0.5 * (1 - eta) * Bs_A[0, :] + 0.5 * (1 + eta) * Bs_C[0, :]  # γ_xz
    Bs[1, :] = 0.5 * (1 - xi)  * Bs_B[1, :] + 0.5 * (1 + xi)  * Bs_D[1, :]  # γ_yz

    return Bs

def assemble_mitc4():
    rows, cols, vals = [], [], []
    F = np.zeros(nDofs)

    for j in range(ny):
        for i in range(nx):
            n0 = j * nNodesX + i
            elem_nodes = [n0, n0+1, n0+nNodesX+1, n0+nNodesX]
            exy = np.array([[node_x[n], node_y[n]] for n in elem_nodes])

            Ke = np.zeros((12, 12))
            fe = np.zeros(12)

            for xi, eta, wt in GP2:
                dN = shape_derivs(xi, eta)
                Jinv, detJ = get_Jinv_detJ(exy, dN)
                dNdx = dN @ Jinv.T

                # Bending: standard 2×2
                Bb = np.zeros((3, 12))
                for ii in range(4):
                    Bb[0, 3*ii+1] = dNdx[ii, 0]
                    Bb[1, 3*ii+2] = dNdx[ii, 1]
                    Bb[2, 3*ii+1] = dNdx[ii, 1]
                    Bb[2, 3*ii+2] = dNdx[ii, 0]
                Ke += wt * detJ * (Bb.T @ Db @ Bb)

                # Shear: MITC4 assumed strain
                Bs = compute_Bs_mitc4(exy, xi, eta)
                Ke += wt * detJ * (Bs.T @ Ds @ Bs)

                # Load
                N = shape_funcs(xi, eta)
                for ii in range(4):
                    fe[3*ii] += N[ii] * q * detJ * wt

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

# Column positions
colX = [0, 3.6, 7.8, 12.0, 15.6]
colY = [0, 3.0, 6.6, 9.6]

# Column BCs
col_dofs = []
col_set = set()
for cx in colX:
    for cy in colY:
        best_d, best_n = 1e10, 0
        for n in range(nNodes):
            d = np.hypot(node_x[n] - cx, node_y[n] - cy)
            if d < best_d: best_d = d; best_n = n
        if best_n not in col_set:
            col_set.add(best_n)
            col_dofs.append(3 * best_n)

free_dofs = sorted(set(range(nDofs)) - set(col_dofs))

# ===== TEST: MITC4 with column supports =====
print("=" * 60)
print("MITC4 Q4 — column supports (flat slab)")
K_m, F_m = assemble_mitc4()
u_m = np.zeros(nDofs)
u_m[free_dofs] = spsolve(K_m[np.ix_(free_dofs, free_dofs)], F_m[free_dofs])
w_m = u_m[0::3]
print(f"  pos={np.sum(w_m>1e-10)}, min_w={np.min(w_m):.6e}, max_w={np.max(w_m):.6e}")
print(f"  Node 229 (7.80,4.80): w = {w_m[229]:.6e}")

# ===== TEST: MITC4 with SS edges (check no locking) =====
print("\n" + "=" * 60)
print("MITC4 Q4 — SS edges (check locking)")
edge_dofs = []
for j in range(nNodesY):
    for i in range(nNodesX):
        if i==0 or i==nx or j==0 or j==ny:
            edge_dofs.append(3*(j*nNodesX+i))
free_ss = sorted(set(range(nDofs)) - set(edge_dofs))
u_ss = np.zeros(nDofs)
u_ss[free_ss] = spsolve(K_m[np.ix_(free_ss, free_ss)], F_m[free_ss])

center = (ny//2)*nNodesX + nx//2
D = E*t**3/(12*(1-nu**2))
w_nav = sum(1/(m*n*((m**2/La**2+n**2/Lb**2)**2)) for m in range(1,20,2) for n in range(1,20,2))
w_nav *= 16*abs(q)/(np.pi**6*D)

print(f"  Navier:  w_center = {w_nav:.6e}")
print(f"  MITC4:   w_center = {u_ss[3*center]:.6e}  error = {abs((abs(u_ss[3*center])-w_nav)/w_nav*100):.2f}%")

print("\n" + "=" * 60)
print("REFERENCE: OpenSees MITC4")
print(f"  Flat slab: min_w=-5.963e-04, Node 229 w=-3.340e-04")
print(f"  SS edges:  Navier w_center = {w_nav:.6e}")
