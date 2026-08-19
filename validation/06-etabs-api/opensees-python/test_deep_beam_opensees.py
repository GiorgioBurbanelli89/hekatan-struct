"""
Deep beam validation: Plane stress with partial load and elastic supports.

Parameters:
  l = 4 m, h = 2 m, t = 0.1 m
  E = 20000 MPa = 20000000 kPa, nu = 0.2
  Partial load: q = 100 kN/m over center 0.8 m (x = 1.6 to x = 2.4), top edge
  Elastic supports: k_s = 50000000 kN/m^2 at bottom edge for x <= 0.4 and x >= 3.6
  Mesh: 20 x 10 quad (plane stress) elements
"""

import openseespy.opensees as ops
import numpy as np

# ── Parameters ──────────────────────────────────────────────────────────────
L = 4.0            # m, length
H = 2.0            # m, height
t = 0.1            # m, thickness
E = 20000000       # kPa (20000 MPa)
nu = 0.2
q_load = 100.0     # kN/m, line load on top edge
x_load_start = 1.6 # m
x_load_end = 2.4   # m

k_s = 50000000.0   # kN/m^2, elastic support stiffness per unit area
x_support_left = 0.4   # support for x <= 0.4
x_support_right = 3.6  # support for x >= 3.6

nx = 20
ny = 10

dx = L / nx
dy = H / ny

# ── OpenSees model ──────────────────────────────────────────────────────────
ops.wipe()
ops.model('basic', '-ndm', 2, '-ndf', 2)

# Create nodes: (i,j) -> node, x = i*dx, y = j*dy
node_map = {}
nid = 1
for j in range(ny + 1):
    for i in range(nx + 1):
        x = i * dx
        y = j * dy
        ops.node(nid, x, y)
        node_map[(i, j)] = nid
        nid += 1

n_nodes = (nx + 1) * (ny + 1)

# Fix UX at left edge bottom corner to prevent horizontal rigid body motion
ops.fix(node_map[(0, 0)], 1, 0)
# Fix UX at right edge bottom corner as well for symmetry stability
ops.fix(node_map[(nx, 0)], 1, 0)

# Elastic supports at bottom edge (j=0) for x <= 0.4 and x >= 3.6
# Model as springs using zeroLength elements connected to fixed nodes
# Spring stiffness per node = k_s * tributary_length * t
spring_tag = 1
fixed_node_id = n_nodes + 1
spring_nodes = []

for i in range(nx + 1):
    x = i * dx
    if x <= x_support_left + 1e-8 or x >= x_support_right - 1e-8:
        bot_node = node_map[(i, 0)]
        # Tributary length
        if i == 0:
            trib = dx / 2
        elif i == nx:
            trib = dx / 2
        else:
            trib = dx

        k_node = k_s * trib * t  # kN/m

        # Create fixed node at same location
        x_pos = i * dx
        ops.node(fixed_node_id, x_pos, 0.0)
        ops.fix(fixed_node_id, 1, 1)

        # ZeroLength spring in UY direction
        ops.uniaxialMaterial('Elastic', spring_tag, k_node)
        ops.element('zeroLength', 10000 + spring_tag, fixed_node_id, bot_node,
                     '-mat', spring_tag, '-dir', 2)
        spring_nodes.append((i, bot_node, k_node))
        fixed_node_id += 1
        spring_tag += 1

print(f"Elastic springs: {len(spring_nodes)} nodes with springs at bottom edge")

# Material: plane stress
ops.nDMaterial('ElasticIsotropic', 100, E, nu)

# Create quad elements (plane stress)
eid = 1
for j in range(ny):
    for i in range(nx):
        n1 = node_map[(i, j)]
        n2 = node_map[(i + 1, j)]
        n3 = node_map[(i + 1, j + 1)]
        n4 = node_map[(i, j + 1)]
        # quad element: 'PlaneStress' or 'PlaneStrain'
        ops.element('quad', eid, n1, n2, n3, n4, t, 'PlaneStress', 100)
        eid += 1

n_elems = nx * ny

# Apply partial load on top edge (j = ny)
# Load q = 100 kN/m distributed over x = 1.6 to x = 2.4
ops.timeSeries('Linear', 1)
ops.pattern('Plain', 1, 1)

for i in range(nx + 1):
    x = i * dx
    if x >= x_load_start - 1e-8 and x <= x_load_end + 1e-8:
        top_node = node_map[(i, ny)]
        # Tributary length
        if abs(x - x_load_start) < 1e-8 or abs(x - x_load_end) < 1e-8:
            trib = dx / 2
        else:
            trib = dx
        fy = -q_load * trib  # downward
        ops.load(top_node, 0.0, fy)

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
# Max vertical displacement
max_uy = 0.0
max_uy_node = -1
max_uy_x = 0.0
max_uy_y = 0.0

for j in range(ny + 1):
    for i in range(nx + 1):
        nid_r = node_map[(i, j)]
        uy = ops.nodeDisp(nid_r, 2)
        if abs(uy) > abs(max_uy):
            max_uy = uy
            max_uy_node = nid_r
            max_uy_x = i * dx
            max_uy_y = j * dy

# Top edge center deflection (under load)
ci = nx // 2
top_center_node = node_map[(ci, ny)]
uy_top_center = ops.nodeDisp(top_center_node, 2)

# Bottom edge center deflection
bot_center_node = node_map[(ci, 0)]
uy_bot_center = ops.nodeDisp(bot_center_node, 2)

# Extract membrane forces (stresses) from elements
# For quad elements, 'stresses' returns [sigma_xx, sigma_yy, sigma_xy] at Gauss points
max_Nx = 0.0  # membrane force = stress * thickness
max_Ny = 0.0
max_Nxy = 0.0

# Stresses at mid-height elements (around j = ny//2)
mid_j = ny // 2
mid_stresses = []

for eid_r in range(1, n_elems + 1):
    stresses = ops.eleResponse(eid_r, 'stresses')
    # quad returns stresses at 4 Gauss points: [sxx1,syy1,sxy1, sxx2,syy2,sxy2, ...]
    if len(stresses) >= 12:
        for gp in range(4):
            base = gp * 3
            sxx = stresses[base]
            syy = stresses[base + 1]
            sxy = stresses[base + 2]
            Nx = abs(sxx * t)
            Ny = abs(syy * t)
            Nxy = abs(sxy * t)
            if Nx > max_Nx:
                max_Nx = Nx
            if Ny > max_Ny:
                max_Ny = Ny
            if Nxy > max_Nxy:
                max_Nxy = Nxy

    # Collect stresses at mid-height for reporting
    j_elem = (eid_r - 1) // nx
    i_elem = (eid_r - 1) % nx
    if j_elem == mid_j:
        if len(stresses) >= 12:
            avg_sxx = np.mean([stresses[gp * 3] for gp in range(4)])
            avg_syy = np.mean([stresses[gp * 3 + 1] for gp in range(4)])
            mid_stresses.append((i_elem * dx + dx / 2, avg_sxx, avg_syy))

# Sum of spring reactions (should equal total applied load)
total_applied = q_load * (x_load_end - x_load_start)
total_reaction = 0.0
for (i_s, bot_nid, k_n) in spring_nodes:
    uy_s = ops.nodeDisp(bot_nid, 2)
    reaction = -k_n * uy_s  # upward positive
    total_reaction += reaction

ops.wipe()

# ── Results ─────────────────────────────────────────────────────────────────
print()
print("=" * 72)
print("DEEP BEAM - Partial Load with Elastic Supports (Plane Stress)")
print("=" * 72)
print(f"  L = {L} m, H = {H} m, t = {t} m")
print(f"  E = {E/1000:.0f} MPa, nu = {nu}")
print(f"  Load: q = {q_load} kN/m over x = [{x_load_start}, {x_load_end}] m (top edge)")
print(f"  Elastic supports: k_s = {k_s/1e6:.0f} MN/m^2 at bottom x<={x_support_left} and x>={x_support_right}")
print(f"  Mesh: {nx} x {ny} = {n_elems} quad elements")
print()

print(f"{'Quantity':<40} {'Value':>14} {'Location':>18}")
print("-" * 72)
print(f"{'Max |UY| (mm)':<40} {abs(max_uy)*1000:>14.6f} {'x=%.1f, y=%.1f' % (max_uy_x, max_uy_y):>18}")
print(f"{'UY at top center (mm)':<40} {abs(uy_top_center)*1000:>14.6f} {'x=%.1f, y=%.1f' % (ci*dx, H):>18}")
print(f"{'UY at bottom center (mm)':<40} {abs(uy_bot_center)*1000:>14.6f} {'x=%.1f, y=%.1f' % (ci*dx, 0):>18}")
print(f"{'Max |Nx| (kN/m)':<40} {max_Nx:>14.4f}")
print(f"{'Max |Ny| (kN/m)':<40} {max_Ny:>14.4f}")
print(f"{'Max |Nxy| (kN/m)':<40} {max_Nxy:>14.4f}")
print()

print(f"  Total applied load:   {total_applied:.1f} kN")
print(f"  Sum of reactions:     {total_reaction:.4f} kN")
eq_error = abs(total_reaction - total_applied) / total_applied * 100
print(f"  Equilibrium error:    {eq_error:.4f} %")
print()

# Mid-height stress distribution
if mid_stresses:
    print("  Stress distribution at mid-height (y = H/2):")
    print(f"  {'x (m)':>8} {'sigma_xx (kPa)':>16} {'sigma_yy (kPa)':>16}")
    print("  " + "-" * 44)
    for (xm, sxx, syy) in mid_stresses:
        print(f"  {xm:>8.2f} {sxx:>16.2f} {syy:>16.2f}")
    print()

# ── PASS/FAIL checks ───────────────────────────────────────────────────────
pass_eq = eq_error < 1.0  # equilibrium within 1%
pass_disp = abs(max_uy) > 0.0  # non-zero displacement
pass_sym_disp = abs(max_uy_x - L / 2) < dx * 1.5  # max displacement near center
pass_Ny = max_Ny > 0.0  # non-zero vertical membrane force

print(f"  Equilibrium check (< 1%):     {'PASS' if pass_eq else 'FAIL'}")
print(f"  Non-zero displacement:        {'PASS' if pass_disp else 'FAIL'}")
print(f"  Max disp near center:         {'PASS' if pass_sym_disp else 'FAIL'}")
print(f"  Non-zero Ny:                  {'PASS' if pass_Ny else 'FAIL'}")

all_pass = pass_eq and pass_disp and pass_sym_disp and pass_Ny
print()
print(f"  OVERALL: {'PASS' if all_pass else 'FAIL'}")
print("=" * 72)
