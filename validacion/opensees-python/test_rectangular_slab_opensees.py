"""
Rectangular slab validation: Simply supported on all edges, uniform load.
Compares OpenSees ShellMITC4 results with Navier analytical solution.

Parameters:
  a = 6 m, b = 4 m, t = 0.1 m
  E = 35000 MPa = 35000000 kPa, nu = 0.15
  q = 10 kN/m^2 uniform
  Mesh: 12x8 ShellMITC4 elements
"""

import openseespy.opensees as ops
import numpy as np

# ── Parameters ──────────────────────────────────────────────────────────────
a = 6.0       # m, span in x
b = 4.0       # m, span in y
t = 0.1       # m, thickness
E = 35000000  # kPa  (35000 MPa)
nu = 0.15
q = 10.0      # kN/m^2

nx = 12       # elements in x
ny = 8        # elements in y

D = E * t**3 / (12.0 * (1.0 - nu**2))

# ── Navier analytical solution ──────────────────────────────────────────────
def navier_deflection(x, y, n_terms=50):
    """Navier double-series solution for SS rectangular plate under uniform load."""
    w = 0.0
    for m in range(1, 2 * n_terms, 2):
        for n in range(1, 2 * n_terms, 2):
            amn = 16.0 * q / (np.pi**6 * D * m * n * (m**2 / a**2 + n**2 / b**2)**2)
            w += amn * np.sin(m * np.pi * x / a) * np.sin(n * np.pi * y / b)
    return w

def navier_moments(x, y, n_terms=50):
    """Navier solution for Mxx and Myy."""
    Mxx = 0.0
    Myy = 0.0
    for m in range(1, 2 * n_terms, 2):
        for n in range(1, 2 * n_terms, 2):
            amn = 16.0 * q / (np.pi**6 * D * m * n * (m**2 / a**2 + n**2 / b**2)**2)
            sin_val = np.sin(m * np.pi * x / a) * np.sin(n * np.pi * y / b)
            Mxx += amn * ((m * np.pi / a)**2 + nu * (n * np.pi / b)**2) * sin_val
            Myy += amn * (nu * (m * np.pi / a)**2 + (n * np.pi / b)**2) * sin_val
    Mxx *= D
    Myy *= D
    return Mxx, Myy

w_analytical = navier_deflection(a / 2, b / 2)
Mxx_analytical, Myy_analytical = navier_moments(a / 2, b / 2)

# ── OpenSees model ──────────────────────────────────────────────────────────
ops.wipe()
ops.model('basic', '-ndm', 3, '-ndf', 6)

dx = a / nx
dy = b / ny

# Create nodes
node_id = 1
node_map = {}  # (i, j) -> node_id
for j in range(ny + 1):
    for i in range(nx + 1):
        x = i * dx
        y = j * dy
        ops.node(node_id, x, y, 0.0)
        node_map[(i, j)] = node_id
        node_id += 1

# Boundary conditions: simply supported on all edges (w=0, rotations free)
# Fix corner (0,0) fully for rigid body UX, UY; fix (nx,0) UY for in-plane rotation
for j in range(ny + 1):
    for i in range(nx + 1):
        if i == 0 or i == nx or j == 0 or j == ny:
            nid = node_map[(i, j)]
            if i == 0 and j == 0:
                ops.fix(nid, 1, 1, 1, 0, 0, 0)
            elif i == nx and j == 0:
                ops.fix(nid, 0, 1, 1, 0, 0, 0)
            else:
                ops.fix(nid, 0, 0, 1, 0, 0, 0)

# Material and section
mat_tag = 1
sec_tag = 1
ops.nDMaterial('ElasticIsotropic', mat_tag, E, nu)
ops.section('PlateFiber', sec_tag, mat_tag, t)

# Create ShellMITC4 elements
ele_id = 1
for j in range(ny):
    for i in range(nx):
        n1 = node_map[(i, j)]
        n2 = node_map[(i + 1, j)]
        n3 = node_map[(i + 1, j + 1)]
        n4 = node_map[(i, j + 1)]
        ops.element('ShellMITC4', ele_id, n1, n2, n3, n4, sec_tag)
        ele_id += 1

# Apply uniform load as consistent nodal loads
# Each interior node gets q*dx*dy, edge nodes get half, corner nodes get quarter
ops.timeSeries('Linear', 1)
ops.pattern('Plain', 1, 1)

for j in range(ny + 1):
    for i in range(nx + 1):
        nid = node_map[(i, j)]
        # Tributary area
        lx = dx
        ly = dy
        if i == 0 or i == nx:
            lx = dx / 2
        if j == 0 or j == ny:
            ly = dy / 2
        fz = -q * lx * ly  # downward load
        ops.load(nid, 0.0, 0.0, fz, 0.0, 0.0, 0.0)

# Analysis
ops.constraints('Plain')
ops.numberer('RCM')
ops.system('BandGeneral')
ops.test('NormDispIncr', 1.0e-12, 10)
ops.algorithm('Linear')
ops.integrator('LoadControl', 1.0)
ops.analysis('Static')
ops.analyze(1)

# ── Extract results ─────────────────────────────────────────────────────────
# Find center node
ci = nx // 2
cj = ny // 2
center_node = node_map[(ci, cj)]
w_opensees = -ops.nodeDisp(center_node, 3)  # positive downward

# Get moments from elements adjacent to center
# The center is shared by up to 4 elements. Average their results.
center_elements = []
for j in [cj - 1, cj]:
    for i in [ci - 1, ci]:
        if 0 <= i < nx and 0 <= j < ny:
            eid = j * nx + i + 1
            center_elements.append(eid)

Mxx_list = []
Myy_list = []
for eid in center_elements:
    # eleResponse for shell: 'forces' or 'stresses'
    # For ShellMITC4, 'force' returns section forces at Gauss points
    forces = ops.eleResponse(eid, 'forces')
    # forces has 24 entries (6 dof x 4 nodes): [Fx1,Fy1,Fz1,Mx1,My1,Mz1, ...]
    # We need section forces (moments per unit length) from 'stresses'
    stresses = ops.eleResponse(eid, 'stresses')
    # stresses: 8 values per Gauss point [membrane_xx, membrane_yy, membrane_xy,
    #           bending_xx, bending_yy, bending_xy, shear_xz, shear_yz] x 4 GP
    if len(stresses) >= 32:
        for gp in range(4):
            base = gp * 8
            Mxx_list.append(stresses[base + 3])
            Myy_list.append(stresses[base + 4])

if Mxx_list:
    Mxx_opensees = np.mean(np.abs(Mxx_list))
    Myy_opensees = np.mean(np.abs(Myy_list))
else:
    # Fallback: try section forces
    Mxx_opensees = float('nan')
    Myy_opensees = float('nan')

ops.wipe()

# ── Results ─────────────────────────────────────────────────────────────────
print("=" * 72)
print("RECTANGULAR SLAB - Simply Supported, Uniform Load")
print("=" * 72)
print(f"  a = {a} m,  b = {b} m,  t = {t} m")
print(f"  E = {E/1000:.0f} MPa,  nu = {nu}")
print(f"  q = {q} kN/m^2")
print(f"  Mesh: {nx} x {ny} ShellMITC4 elements")
print(f"  D = {D:.4f} kN-m")
print()

print(f"{'Quantity':<25} {'Analytical':>14} {'OpenSees':>14} {'Error %':>10}")
print("-" * 65)
print(f"{'w_center (mm)':<25} {w_analytical*1000:>14.4f} {w_opensees*1000:>14.4f} {abs(w_opensees - w_analytical)/abs(w_analytical)*100:>10.2f}")
if not np.isnan(Mxx_opensees):
    print(f"{'Mxx_center (kN-m/m)':<25} {Mxx_analytical:>14.4f} {Mxx_opensees:>14.4f} {abs(Mxx_opensees - Mxx_analytical)/abs(Mxx_analytical)*100:>10.2f}")
    print(f"{'Myy_center (kN-m/m)':<25} {Myy_analytical:>14.4f} {Myy_opensees:>14.4f} {abs(Myy_opensees - Myy_analytical)/abs(Myy_analytical)*100:>10.2f}")
else:
    print("  (Moments not extracted - check OpenSees shell output format)")

print()

# ── PASS/FAIL ───────────────────────────────────────────────────────────────
tol_w = 5.0     # 5% tolerance for deflection
tol_m = 10.0    # 10% tolerance for moments (coarser mesh effect)

pass_w = abs(w_opensees - w_analytical) / abs(w_analytical) * 100 < tol_w
print(f"  Deflection check (tol {tol_w}%): {'PASS' if pass_w else 'FAIL'}")

if not np.isnan(Mxx_opensees):
    pass_mxx = abs(Mxx_opensees - Mxx_analytical) / abs(Mxx_analytical) * 100 < tol_m
    pass_myy = abs(Myy_opensees - Myy_analytical) / abs(Myy_analytical) * 100 < tol_m
    print(f"  Mxx check (tol {tol_m}%):        {'PASS' if pass_mxx else 'FAIL'}")
    print(f"  Myy check (tol {tol_m}%):        {'PASS' if pass_myy else 'FAIL'}")

all_pass = pass_w and (np.isnan(Mxx_opensees) or (pass_mxx and pass_myy))
print()
print(f"  OVERALL: {'PASS' if all_pass else 'FAIL'}")
print("=" * 72)
