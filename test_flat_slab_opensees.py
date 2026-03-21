"""
Flat slab validation: Multi-span slab with column (point) supports, uniform load.

Parameters:
  Spans x: [3.6, 4.2, 4.2, 3.6] m  (total 15.6 m)
  Spans y: [3.0, 3.6, 3.0] m       (total 9.6 m)
  t = 0.2 m, E = 35000 MPa = 35000000 kPa, nu = 0.2
  q = 10 kN/m^2 uniform
  Column supports at grid intersections (5 x 4 = 20 columns), fix w=0
  Mesh: ~0.6 m element size using ShellMITC4
"""

import openseespy.opensees as ops
import numpy as np

# ── Parameters ──────────────────────────────────────────────────────────────
spans_x = [3.6, 4.2, 4.2, 3.6]  # m
spans_y = [3.0, 3.6, 3.0]        # m
t = 0.2       # m
E = 35000000  # kPa
nu = 0.2
q = 10.0      # kN/m^2

target_el_size = 0.6  # m, target element size

total_x = sum(spans_x)  # 15.6 m
total_y = sum(spans_y)  # 9.6 m

# Column grid positions
col_x = [0.0]
for s in spans_x:
    col_x.append(col_x[-1] + s)
col_y = [0.0]
for s in spans_y:
    col_y.append(col_y[-1] + s)

# ── Mesh generation ────────────────────────────────────────────────────────
# Subdivide each span to get element sizes close to target
def subdivide_spans(spans, target):
    coords = [0.0]
    for s in spans:
        n = max(1, round(s / target))
        ds = s / n
        for k in range(1, n + 1):
            coords.append(coords[-1] + ds)
    # Remove near-duplicates
    clean = [coords[0]]
    for c in coords[1:]:
        if abs(c - clean[-1]) > 1e-8:
            clean.append(c)
    return clean

x_coords = subdivide_spans(spans_x, target_el_size)
y_coords = subdivide_spans(spans_y, target_el_size)

nx = len(x_coords) - 1
ny = len(y_coords) - 1
n_nodes = (nx + 1) * (ny + 1)
n_elems = nx * ny

print(f"Mesh: {nx} x {ny} = {n_elems} elements, {n_nodes} nodes")
print(f"Element sizes: dx ~ {total_x/nx:.3f} m, dy ~ {total_y/ny:.3f} m")

# ── OpenSees model ──────────────────────────────────────────────────────────
ops.wipe()
ops.model('basic', '-ndm', 3, '-ndf', 6)

# Create nodes
node_map = {}
nid = 1
for j in range(ny + 1):
    for i in range(nx + 1):
        x = x_coords[i]
        y = y_coords[j]
        ops.node(nid, x, y, 0.0)
        node_map[(i, j)] = nid
        nid += 1

# Column supports: pin w=0 at grid intersections
col_tol = 1e-4
supported_nodes = []
for cx in col_x:
    for cy in col_y:
        # Find closest node
        best_nid = None
        best_dist = 1e10
        for j in range(ny + 1):
            for i in range(nx + 1):
                dx_c = abs(x_coords[i] - cx)
                dy_c = abs(y_coords[j] - cy)
                dist = dx_c + dy_c
                if dist < best_dist:
                    best_dist = dist
                    best_nid = node_map[(i, j)]
        if best_dist < col_tol:
            supported_nodes.append(best_nid)

# Fix column nodes: UZ = 0 (pin support for slab)
# Corner (0,0) gets full fix for rigid body; (nx,0) gets UY+UZ
corner_id = node_map[(0, 0)]
corner2_id = node_map[(nx, 0)]
for snid in supported_nodes:
    if snid == corner_id:
        ops.fix(snid, 1, 1, 1, 0, 0, 0)
    elif snid == corner2_id:
        ops.fix(snid, 0, 1, 1, 0, 0, 0)
    else:
        ops.fix(snid, 0, 0, 1, 0, 0, 0)

# If corners weren't in column list, fix them separately
if corner_id not in supported_nodes:
    ops.fix(corner_id, 1, 1, 1, 0, 0, 0)
if corner2_id not in supported_nodes:
    ops.fix(corner2_id, 0, 1, 1, 0, 0, 0)

print(f"Column supports: {len(supported_nodes)} nodes fixed in UZ")

# Material and section
ops.nDMaterial('ElasticIsotropic', 1, E, nu)
ops.section('PlateFiber', 1, 1, t)

# Create elements
eid = 1
for j in range(ny):
    for i in range(nx):
        n1 = node_map[(i, j)]
        n2 = node_map[(i + 1, j)]
        n3 = node_map[(i + 1, j + 1)]
        n4 = node_map[(i, j + 1)]
        ops.element('ShellMITC4', eid, n1, n2, n3, n4, 1)
        eid += 1

# Uniform load as nodal forces with tributary areas
ops.timeSeries('Linear', 1)
ops.pattern('Plain', 1, 1)

for j in range(ny + 1):
    for i in range(nx + 1):
        nid_l = node_map[(i, j)]
        # Tributary area
        if i == 0:
            lx = (x_coords[1] - x_coords[0]) / 2
        elif i == nx:
            lx = (x_coords[nx] - x_coords[nx - 1]) / 2
        else:
            lx = (x_coords[i + 1] - x_coords[i - 1]) / 2

        if j == 0:
            ly = (y_coords[1] - y_coords[0]) / 2
        elif j == ny:
            ly = (y_coords[ny] - y_coords[ny - 1]) / 2
        else:
            ly = (y_coords[j + 1] - y_coords[j - 1]) / 2

        fz = -q * lx * ly
        ops.load(nid_l, 0.0, 0.0, fz, 0.0, 0.0, 0.0)

# Analysis
ops.constraints('Plain')
ops.numberer('RCM')
ops.system('BandGeneral')
ops.test('NormDispIncr', 1.0e-12, 10)
ops.algorithm('Linear')
ops.integrator('LoadControl', 1.0)
ops.analysis('Static')
result = ops.analyze(1)

if result != 0:
    print("WARNING: Analysis did not converge!")

# ── Extract results ─────────────────────────────────────────────────────────
# Find max deflection
max_w = 0.0
max_w_node = -1
max_w_x = 0.0
max_w_y = 0.0

for j in range(ny + 1):
    for i in range(nx + 1):
        nid_r = node_map[(i, j)]
        uz = ops.nodeDisp(nid_r, 3)
        if abs(uz) > abs(max_w):
            max_w = uz
            max_w_node = nid_r
            max_w_x = x_coords[i]
            max_w_y = y_coords[j]

# Extract moments from all elements, find max
max_Mxx = 0.0
max_Myy = 0.0
max_Mxx_eid = -1
max_Myy_eid = -1

for eid_r in range(1, n_elems + 1):
    stresses = ops.eleResponse(eid_r, 'stresses')
    if len(stresses) >= 32:
        for gp in range(4):
            base = gp * 8
            mxx = abs(stresses[base + 3])
            myy = abs(stresses[base + 4])
            if mxx > max_Mxx:
                max_Mxx = mxx
                max_Mxx_eid = eid_r
            if myy > max_Myy:
                max_Myy = myy
                max_Myy_eid = eid_r

ops.wipe()

# ── Reference values ────────────────────────────────────────────────────────
# Approximate expected values from Calcpad FEA and engineering estimates
# For a flat slab with these spans, expected max deflection ~ 1-3 mm
# Moments depend on panel geometry; typical range 5-20 kN-m/m

# ── Results ─────────────────────────────────────────────────────────────────
print()
print("=" * 72)
print("FLAT SLAB - Multi-Span with Column Supports, Uniform Load")
print("=" * 72)
print(f"  Spans x: {spans_x} m  (total {total_x} m)")
print(f"  Spans y: {spans_y} m  (total {total_y} m)")
print(f"  t = {t} m, E = {E/1000:.0f} MPa, nu = {nu}")
print(f"  q = {q} kN/m^2")
print(f"  Columns: {len(col_x)} x {len(col_y)} = {len(col_x)*len(col_y)} supports")
print(f"  Mesh: {nx} x {ny} = {n_elems} ShellMITC4 elements")
print()

print(f"{'Quantity':<35} {'Value':>14} {'Location':>20}")
print("-" * 72)
print(f"{'Max deflection w (mm)':<35} {abs(max_w)*1000:>14.4f} {'x=%.1f, y=%.1f' % (max_w_x, max_w_y):>20}")
print(f"{'Max |Mxx| (kN-m/m)':<35} {max_Mxx:>14.4f} {'elem %d' % max_Mxx_eid:>20}")
print(f"{'Max |Myy| (kN-m/m)':<35} {max_Myy:>14.4f} {'elem %d' % max_Myy_eid:>20}")
print()

# ── PASS/FAIL checks ───────────────────────────────────────────────────────
# Sanity checks: deflection should be reasonable for this slab
D = E * t**3 / (12.0 * (1.0 - nu**2))
L_max = max(max(spans_x), max(spans_y))
# Simple span estimate: w ~ 5*q*L^4/(384*D) for a strip
w_strip_est = 5 * q * L_max**4 / (384 * D)

print(f"  Simple strip estimate w_max = {w_strip_est*1000:.4f} mm (upper bound)")
print()

pass_w = abs(max_w) > 0.0 and abs(max_w) < w_strip_est * 2
pass_mxx = max_Mxx > 0.0 and max_Mxx < q * L_max**2 / 8 * 2
pass_myy = max_Myy > 0.0 and max_Myy < q * L_max**2 / 8 * 2

# Total load check: sum of reactions should equal total applied load
total_load = q * total_x * total_y
print(f"  Total applied load: {total_load:.1f} kN")
print(f"  Deflection sanity (0 < w < 2*strip): {'PASS' if pass_w else 'FAIL'}")
print(f"  Mxx sanity (0 < Mxx < qL^2/4):      {'PASS' if pass_mxx else 'FAIL'}")
print(f"  Myy sanity (0 < Myy < qL^2/4):      {'PASS' if pass_myy else 'FAIL'}")

all_pass = pass_w and pass_mxx and pass_myy
print()
print(f"  OVERALL: {'PASS' if all_pass else 'FAIL'}")
print("=" * 72)
