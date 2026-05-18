"""
Compare single Q4 element stiffness matrix with MathCAD Prime results
(CLASE 05_Placas gruesas - copia.mcdx)

MathCAD params:
  E = 2e7, nu = 0.3, d = 0.02, kappa = 5/6
  Nodes: (0,-1), (1,-1), (1,0), (0,0)  [1x1 square]
  DOF: [w, theta_x, theta_y] per node (12 DOF total)
  Bending: 2x2 Gauss, Shear: 1x1 reduced (SRI)
"""
import numpy as np

# Parameters
E = 2e7
nu = 0.3
d = 0.02
kappa = 5.0 / 6.0
G = E / (2 * (1 + nu))

# Constitutive matrices
D0 = E * d**3 / (12 * (1 - nu**2))
Db = D0 * np.array([[1, nu, 0], [nu, 1, 0], [0, 0, 0.5*(1-nu)]])
Ds0 = kappa * G * d
Ds = Ds0 * np.eye(2)

# Node coordinates (MathCAD order)
# Node 1: (0,-1), Node 2: (1,-1), Node 3: (1,0), Node 4: (0,0)
XY = np.array([[0, -1], [1, -1], [1, 0], [0, 0]], dtype=float)

XI  = np.array([-1, 1, 1, -1], dtype=float)
ETA = np.array([-1, -1, 1, 1], dtype=float)

def shape_funcs(xi, eta):
    return 0.25 * (1 + XI * xi) * (1 + ETA * eta)

def shape_derivs(xi, eta):
    """Returns 4x2: [dN/dxi, dN/deta] for each node"""
    dN_dxi  = 0.25 * XI  * (1 + ETA * eta)
    dN_deta = 0.25 * ETA * (1 + XI * xi)
    return np.column_stack([dN_dxi, dN_deta])

def jacobian(exy, dN):
    J = dN.T @ exy  # 2x2
    detJ = np.linalg.det(J)
    Jinv = np.linalg.inv(J)
    return Jinv, detJ

gp2 = 1.0 / np.sqrt(3)
GP2 = [(-gp2, -gp2, 1.0), (gp2, -gp2, 1.0), (gp2, gp2, 1.0), (-gp2, gp2, 1.0)]

# Bending B matrix
def get_Bb(exy, xi, eta):
    dN = shape_derivs(xi, eta)
    Jinv, detJ = jacobian(exy, dN)
    dNdx = dN @ Jinv.T  # physical derivatives (4x2)
    Bb = np.zeros((3, 12))
    for i in range(4):
        # DOF: [w, theta_x, theta_y] for node i → columns 3i, 3i+1, 3i+2
        Bb[0, 3*i+1] = dNdx[i, 0]   # kappa_xx = d(theta_x)/dx
        Bb[1, 3*i+2] = dNdx[i, 1]   # kappa_yy = d(theta_y)/dy
        Bb[2, 3*i+1] = dNdx[i, 1]   # kappa_xy = d(theta_x)/dy
        Bb[2, 3*i+2] = dNdx[i, 0]   #          + d(theta_y)/dx
    return Bb, detJ

# Shear B matrix (standard)
def get_Bs(exy, xi, eta):
    N = shape_funcs(xi, eta)
    dN = shape_derivs(xi, eta)
    Jinv, detJ = jacobian(exy, dN)
    dNdx = dN @ Jinv.T
    Bs = np.zeros((2, 12))
    for i in range(4):
        Bs[0, 3*i]   =  dNdx[i, 0]   # gamma_xz = dw/dx
        Bs[0, 3*i+1] = -N[i]          #          - theta_x  (note sign convention)
        Bs[1, 3*i]   =  dNdx[i, 1]   # gamma_yz = dw/dy
        Bs[1, 3*i+2] = -N[i]          #          - theta_y
    return Bs, detJ

# ===== Bending stiffness K_b: 2x2 Gauss =====
Kb = np.zeros((12, 12))
for xi, eta, wt in GP2:
    Bb, detJ = get_Bb(XY, xi, eta)
    Kb += wt * detJ * (Bb.T @ Db @ Bb)

# ===== Shear stiffness K_s: 1x1 reduced =====
Ks = np.zeros((12, 12))
Bs0, detJ0 = get_Bs(XY, 0.0, 0.0)
Ks = 2.0 * 2.0 * detJ0 * (Bs0.T @ Ds @ Bs0)

# ===== Total =====
Kt = Kb + Ks

# ===== MathCAD results =====
# K_b from result-id="33" (raw, not scaled)
Kb_mc_flat = [
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 6.5934065934065975, 2.3809523809523818, 0, -4.029304029304031, -0.18315018315018305, 0, -3.2967032967032992, -2.3809523809523827, 0, 0.73260073260073277, 0.18315018315018236,
0, 2.3809523809523818, 6.5934065934065975, 0, 0.18315018315018342, 0.73260073260073333, 0, -2.3809523809523823, -3.2967032967032988, 0, -0.18315018315018405, -4.0293040293040328,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, -4.029304029304031, 0.18315018315018342, 0, 6.5934065934065966, -2.3809523809523823, 0, 0.73260073260073411, -0.18315018315018305, 0, -3.2967032967032988, 2.3809523809523827,
0, -0.183150183150183, 0.73260073260073333, 0, -2.3809523809523823, 6.5934065934065966, 0, 0.18315018315018328, -4.029304029304031, 0, 2.3809523809523827, -3.2967032967032996,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, -3.2967032967032996, -2.3809523809523823, 0, 0.73260073260073411, 0.18315018315018328, 0, 6.5934065934065984, 2.3809523809523823, 0, -4.02930402930403, -0.18315018315018272,
0, -2.3809523809523827, -3.2967032967032992, 0, -0.183150183150183, -4.0293040293040319, 0, 2.3809523809523823, 6.5934065934065984, 0, 0.18315018315018372, 0.73260073260073466,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0.73260073260073277, -0.1831501831501843, 0, -3.2967032967032988, 2.3809523809523827, 0, -4.029304029304031, 0.18315018315018372, 0, 6.5934065934065966, -2.3809523809523814,
0, 0.18315018315018231, -4.0293040293040328, 0, 2.3809523809523827, -3.2967032967032996, 0, -0.18315018315018261, 0.73260073260073455, 0, -2.3809523809523814, 6.5934065934065984,
]
Kb_mc = np.array(Kb_mc_flat).reshape(12, 12)

# K_s from result-id="34" — NOTE: MathCAD displays "10^3" scale
# The values stored are already multiplied by 10^3, so actual K_s = values / 1000?
# Wait, let's check: Ds0 = kappa * G * d = (5/6)*7692307.69*0.02 = 128205.13
# For 1x1 element at center, K_s diagonal for w should be ~4*detJ*(Ds0)*(dNdx^2)
# detJ for 1x1 square = 0.25, so K_s_ww ~ 4*0.25*128205 * 0.25 = 32051
# The MathCAD K_s[0,0] = 64102.564... which is about 64103
# If NOT scaled: 64103 makes sense since 2 directions contribute
# Let me check: full K_s_ww for node 1: Bs[0,0]=dN1dx at center, Bs[1,0]=dN1dy at center
# At center (0,0): N1=0.25, dN1/dxi=-0.25, dN1/deta=-0.25
# J = dN.T @ XY, for this element...
# Let me just check if K_s from MathCAD matches our computation WITHOUT 10^3 scaling

Ks_mc_flat = [
64.102564102565239, 16.02564102564131, 16.02564102564131, 0, 16.02564102564131, 16.02564102564131, -64.102564102565239, 16.02564102564131, 16.02564102564131, 0, 16.02564102564131, 16.02564102564131,
16.02564102564131, 8.0128205128206549, 0, -16.02564102564131, 8.0128205128206549, 0, -16.02564102564131, 8.0128205128206549, 0, 16.02564102564131, 8.0128205128206549, 0,
16.02564102564131, 0, 8.0128205128206549, 16.02564102564131, 0, 8.0128205128206549, -16.02564102564131, 0, 8.0128205128206549, -16.02564102564131, 0, 8.0128205128206549,
0, -16.02564102564131, 16.02564102564131, 64.102564102565239, -16.02564102564131, 16.02564102564131, 0, -16.02564102564131, 16.02564102564131, -64.102564102565239, -16.02564102564131, 16.02564102564131,
16.02564102564131, 8.0128205128206549, 0, -16.02564102564131, 8.0128205128206549, 0, -16.02564102564131, 8.0128205128206549, 0, 16.02564102564131, 8.0128205128206549, 0,
16.02564102564131, 0, 8.0128205128206549, 16.02564102564131, 0, 8.0128205128206549, -16.02564102564131, 0, 8.0128205128206549, -16.02564102564131, 0, 8.0128205128206549,
-64.102564102565239, -16.02564102564131, -16.02564102564131, 0, -16.02564102564131, -16.02564102564131, 64.102564102565239, -16.02564102564131, -16.02564102564131, 0, -16.02564102564131, -16.02564102564131,
16.02564102564131, 8.0128205128206549, 0, -16.02564102564131, 8.0128205128206549, 0, -16.02564102564131, 8.0128205128206549, 0, 16.02564102564131, 8.0128205128206549, 0,
16.02564102564131, 0, 8.0128205128206549, 16.02564102564131, 0, 8.0128205128206549, -16.02564102564131, 0, 8.0128205128206549, -16.02564102564131, 0, 8.0128205128206549,
0, 16.02564102564131, -16.02564102564131, -64.102564102565239, 16.02564102564131, -16.02564102564131, 0, 16.02564102564131, -16.02564102564131, 64.102564102565239, 16.02564102564131, -16.02564102564131,
16.02564102564131, 8.0128205128206549, 0, -16.02564102564131, 8.0128205128206549, 0, -16.02564102564131, 8.0128205128206549, 0, 16.02564102564131, 8.0128205128206549, 0,
16.02564102564131, 0, 8.0128205128206549, 16.02564102564131, 0, 8.0128205128206549, -16.02564102564131, 0, 8.0128205128206549, -16.02564102564131, 0, 8.0128205128206549,
]
Ks_mc = np.array(Ks_mc_flat).reshape(12, 12)

# K_T from result-id="35" — also displayed with 10^3 scale
Kt_mc_flat = [
64.102564102565239, 16.02564102564131, 16.02564102564131, 0, 16.02564102564131, 16.02564102564131, -64.102564102565239, 16.02564102564131, 16.02564102564131, 0, 16.02564102564131, 16.02564102564131,
16.02564102564131, 8.0194139194140615, 0.002380952380952382, -16.02564102564131, 8.0087912087913526, -0.00018315018315018304, -16.02564102564131, 8.0095238095239516, -0.0023809523809523829, 16.02564102564131, 8.0135531135532556, 0.00018315018315018236,
16.02564102564131, 0.002380952380952382, 8.0194139194140615, 16.02564102564131, 0.00018315018315018342, 8.0135531135532556, -16.02564102564131, -0.0023809523809523825, 8.0095238095239516, -16.02564102564131, -0.00018315018315018404, 8.0087912087913526,
0, -16.02564102564131, 16.02564102564131, 64.102564102565239, -16.02564102564131, 16.02564102564131, 0, -16.02564102564131, 16.02564102564131, -64.102564102565239, -16.02564102564131, 16.02564102564131,
16.02564102564131, 8.0087912087913526, 0.00018315018315018342, -16.02564102564131, 8.0194139194140615, -0.0023809523809523825, -16.02564102564131, 8.0135531135532556, -0.00018315018315018304, 16.02564102564131, 8.0095238095239516, 0.0023809523809523829,
16.02564102564131, -0.000183150183150183, 8.0135531135532556, 16.02564102564131, -0.0023809523809523825, 8.0194139194140615, -16.02564102564131, 0.00018315018315018329, 8.0087912087913526, -16.02564102564131, 0.0023809523809523829, 8.0095238095239516,
-64.102564102565239, -16.02564102564131, -16.02564102564131, 0, -16.02564102564131, -16.02564102564131, 64.102564102565239, -16.02564102564131, -16.02564102564131, 0, -16.02564102564131, -16.02564102564131,
16.02564102564131, 8.0095238095239516, -0.0023809523809523825, -16.02564102564131, 8.0135531135532556, 0.00018315018315018329, -16.02564102564131, 8.0194139194140632, 0.0023809523809523825, 16.02564102564131, 8.0087912087913526, -0.00018315018315018272,
16.02564102564131, -0.0023809523809523829, 8.0095238095239516, 16.02564102564131, -0.000183150183150183, 8.0087912087913526, -16.02564102564131, 0.0023809523809523825, 8.0194139194140632, -16.02564102564131, 0.00018315018315018372, 8.0135531135532556,
0, 16.02564102564131, -16.02564102564131, -64.102564102565239, 16.02564102564131, -16.02564102564131, 0, 16.02564102564131, -16.02564102564131, 64.102564102565239, 16.02564102564131, -16.02564102564131,
16.02564102564131, 8.0135531135532556, -0.00018315018315018432, -16.02564102564131, 8.0095238095239516, 0.0023809523809523829, -16.02564102564131, 8.0087912087913526, 0.00018315018315018372, 16.02564102564131, 8.0194139194140615, -0.0023809523809523812,
16.02564102564131, 0.00018315018315018231, 8.0087912087913526, 16.02564102564131, 0.0023809523809523829, 8.0095238095239516, -16.02564102564131, -0.00018315018315018261, 8.0135531135532556, -16.02564102564131, -0.0023809523809523812, 8.0194139194140632,
]
Kt_mc = np.array(Kt_mc_flat).reshape(12, 12)

# ===== Check if MathCAD values are scaled by 10^3 =====
# K_T = K_b + K_s. If K_s and K_T are scaled by 1e3:
# K_T_actual = K_T_displayed * 1e-3 → we'd expect K_b entries ~7 vs K_s entries ~64000
# But K_b[1,1] = 6.59 and K_s[1,1] = 8.01 (displayed)...
# If K_s is in units of 10^3, then K_s_actual[1,1] = 8012.8...
# That's way bigger than K_b[1,1] = 6.59
# Let's check: K_T_displayed[1,1] = 8.0194... If NOT scaled: K_b[1,1]+K_s[1,1] = 6.5934+8.0128 = 14.606
# But K_T[1,1] = 8.0194 ≠ 14.606. So K_T must be scaled differently.
# If K_T = (K_b + K_s*1000) * 10^-3: (6.5934 + 8012.8)/1000 = 8.019... ✓ That matches!
# So: K_s displayed = K_s_actual * 10^-3, K_T displayed = K_T_actual * 10^-3

print("=" * 60)
print("Checking MathCAD scaling...")
# K_s and K_T are displayed as *10^3, meaning the real values are 1000x the displayed
Ks_mc_actual = Ks_mc * 1000.0  # actual shear stiffness
Kt_mc_actual = Kt_mc * 1000.0  # actual total stiffness

# Verify: K_T_actual should equal K_b + K_s_actual
Kt_check = Kb_mc + Ks_mc_actual
err_Kt = np.max(np.abs(Kt_mc_actual - Kt_check))
print(f"  K_T = K_b + K_s check: max diff = {err_Kt:.6e}")

# ===== Compare with Python computation =====
print("\n" + "=" * 60)
print("K_b comparison (Python vs MathCAD)")
err_Kb = np.max(np.abs(Kb - Kb_mc))
rel_Kb = err_Kb / np.max(np.abs(Kb_mc[Kb_mc != 0])) * 100 if np.any(Kb_mc != 0) else 0
print(f"  Max abs diff: {err_Kb:.6e}")
print(f"  Max rel diff: {rel_Kb:.6f}%")

print("\nK_b Python [1:3, 1:3]:")
print(Kb[1:3, 1:3])
print("K_b MathCAD [1:3, 1:3]:")
print(Kb_mc[1:3, 1:3])

print("\n" + "=" * 60)
print("K_s comparison (Python vs MathCAD)")
err_Ks = np.max(np.abs(Ks - Ks_mc_actual))
rel_Ks = err_Ks / np.max(np.abs(Ks_mc_actual)) * 100
print(f"  Max abs diff: {err_Ks:.6e}")
print(f"  Max rel diff: {rel_Ks:.6f}%")

print("\nK_s Python [0:3, 0:3]:")
print(Ks[0:3, 0:3])
print("K_s MathCAD_actual [0:3, 0:3]:")
print(Ks_mc_actual[0:3, 0:3])

print("\n" + "=" * 60)
print("K_T comparison (Python vs MathCAD)")
Kt_py = Kb + Ks
err_Kt2 = np.max(np.abs(Kt_py - Kt_mc_actual))
rel_Kt2 = err_Kt2 / np.max(np.abs(Kt_mc_actual)) * 100
print(f"  Max abs diff: {err_Kt2:.6e}")
print(f"  Max rel diff: {rel_Kt2:.6f}%")

# ===== Print full matrices for visual comparison =====
print("\n" + "=" * 60)
print("K_b (Python):")
np.set_printoptions(precision=4, linewidth=200, suppress=True)
print(Kb)
print("\nK_b (MathCAD):")
print(Kb_mc)

print("\n" + "=" * 60)
print("SIGN CONVENTION CHECK")
print("MathCAD B_s:")
print("  gamma_xz = dw/dx - theta_x  (our convention)")
print("  gamma_yz = dw/dy - theta_y")
print("  -> B_s[0, 3i+1] = -N_i (theta_x term)")
print("  -> B_s[1, 3i+2] = -N_i (theta_y term)")
print("This matches our Python code. OK")

# ===== Also compare with MITC4 for reference =====
print("\n" + "=" * 60)
print("NOTE: MathCAD uses SRI (1x1 shear), NOT MITC4")
print("Our C++ WASM now uses MITC4. For a rectangular element,")
print("MITC4 and SRI give the SAME K_s for regular meshes.")
print("Let's verify...")

def shearBat(exy, xi, eta):
    N = shape_funcs(xi, eta)
    dN = shape_derivs(xi, eta)
    Jinv, detJ = jacobian(exy, dN)
    dNdx = dN @ Jinv.T
    Bs = np.zeros((2, 12))
    for i in range(4):
        Bs[0, 3*i]   =  dNdx[i, 0]
        Bs[0, 3*i+1] = -N[i]
        Bs[1, 3*i]   =  dNdx[i, 1]
        Bs[1, 3*i+2] = -N[i]
    return Bs

def shearBmitc4(exy, xi, eta):
    Bs_A = shearBat(exy, 0.0, -1.0)
    Bs_C = shearBat(exy, 0.0, +1.0)
    Bs_B = shearBat(exy, -1.0, 0.0)
    Bs_D = shearBat(exy, +1.0, 0.0)
    Bs = np.zeros((2, 12))
    Bs[0, :] = 0.5*(1-eta)*Bs_A[0, :] + 0.5*(1+eta)*Bs_C[0, :]
    Bs[1, :] = 0.5*(1-xi)*Bs_B[1, :] + 0.5*(1+xi)*Bs_D[1, :]
    return Bs

Ks_mitc4 = np.zeros((12, 12))
for xi, eta, wt in GP2:
    dN = shape_derivs(xi, eta)
    Jinv, detJ = jacobian(XY, dN)
    Bs = shearBmitc4(XY, xi, eta)
    Ks_mitc4 += wt * detJ * (Bs.T @ Ds @ Bs)

err_mitc4_sri = np.max(np.abs(Ks_mitc4 - Ks))
print(f"  MITC4 vs SRI K_s max diff: {err_mitc4_sri:.6e}")
if err_mitc4_sri < 1e-6:
    print("  -> IDENTICAL for rectangular elements OK")
else:
    print(f"  -> DIFFERENT! (relative: {err_mitc4_sri/np.max(np.abs(Ks))*100:.4f}%)")
    print("  This is expected: MITC4 uses 4 tying points, SRI uses 1 center point")
    print("  Both eliminate shear locking, but MITC4 also eliminates hourglass modes")
    print("\nK_s MITC4 diagonal:")
    print(np.diag(Ks_mitc4))
    print("K_s SRI diagonal:")
    print(np.diag(Ks))
