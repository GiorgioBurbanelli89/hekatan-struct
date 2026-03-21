"""
Comparacion: Edificio 1 piso con losa Q4 subdividida
OpenSeesPy: frames + ShellMITC4 con nodos compartidos
Verifica que los nodos de borde de la losa coinciden con los del frame
"""
import openseespy.opensees as ops
import numpy as np

Lx, Ly, H = 5.0, 4.0, 3.0
Es, Gs = 200e6, 77e6
Ec, nu_c = 25e6, 0.2
rho_s, rho_c = 7.85, 2.45
col_A, col_I, col_J = 0.16, 2.13e-3, 3.6e-3
beam_A, beam_I, beam_J = 0.12, 1.6e-3, 2.0e-3
t_slab = 0.15
nSubBeam = 3  # beam subdivision = slab subdivision

ops.wipe()
ops.model('basic', '-ndm', 3, '-ndf', 6)

# Nodes: base (4) + top grid (with beam subdivisions)
tag = 0

# Base nodes (4 corners)
base_nid = {}
for iy in range(2):
    for ix in range(2):
        tag += 1
        base_nid[(ix,iy)] = tag
        ops.node(tag, ix*Lx, iy*Ly, 0)
        ops.fix(tag, 1,1,1,1,1,1)

# Top nodes: full grid including beam subdivisions
# For 1 bay X with nSubBeam=3: nodes at x=0, 1.67, 3.33, 5
# For 1 bay Y with nSubBeam=3: nodes at y=0, 1.33, 2.67, 4
top_nid = {}
nX = nSubBeam + 1  # nodes per direction = subdivisions + 1
nY = nSubBeam + 1

for iy in range(nY):
    for ix in range(nX):
        tag += 1
        x = ix * Lx / nSubBeam
        y = iy * Ly / nSubBeam
        top_nid[(ix,iy)] = tag
        ops.node(tag, x, y, H)

print(f"Nodes: {tag} ({4} base + {nX*nY} top)")

# Transforms
ops.geomTransf('Linear', 1, -1,0,0)
ops.geomTransf('Linear', 2, 0,0,1)
ops.geomTransf('Linear', 3, 0,0,1)

etag = 0

# Columns (4 corners)
for iy in range(2):
    for ix in range(2):
        etag += 1
        ops.element('elasticBeamColumn', etag,
                     base_nid[(ix,iy)],
                     top_nid[(ix*nSubBeam, iy*nSubBeam)],
                     col_A, Es, Gs, col_J, col_I, col_I, 1)

# Beams X (subdivided along each edge)
for iy_edge in [0, nSubBeam]:  # bottom and top edge
    for ix in range(nSubBeam):
        etag += 1
        ops.element('elasticBeamColumn', etag,
                     top_nid[(ix, iy_edge)], top_nid[(ix+1, iy_edge)],
                     beam_A, Es, Gs, beam_J, beam_I, beam_I, 2)

# Beams Y
for ix_edge in [0, nSubBeam]:
    for iy in range(nSubBeam):
        etag += 1
        ops.element('elasticBeamColumn', etag,
                     top_nid[(ix_edge, iy)], top_nid[(ix_edge, iy+1)],
                     beam_A, Es, Gs, beam_J, beam_I, beam_I, 3)

# Slab: nSubBeam x nSubBeam Q4 elements (SHARED nodes with beams!)
ops.nDMaterial('ElasticIsotropic', 1, Ec, nu_c, rho_c)
ops.section('PlateFiber', 1, 1, t_slab)

for iy in range(nSubBeam):
    for ix in range(nSubBeam):
        n1 = top_nid[(ix, iy)]
        n2 = top_nid[(ix+1, iy)]
        n3 = top_nid[(ix+1, iy+1)]
        n4 = top_nid[(ix, iy+1)]
        etag += 1
        ops.element('ShellMITC4', etag, n1, n2, n3, n4, 1)

print(f"Elements: {etag} (4 col + {nSubBeam*4} beams + {nSubBeam**2} shells)")
print(f"Slab nodes are SHARED with beam subdivision nodes")

# Loads
ops.timeSeries('Constant', 1)
ops.pattern('Plain', 1, 1)

g = 9.81
# Gravity on all top nodes
for iy in range(nY):
    for ix in range(nX):
        n = top_nid[(ix,iy)]
        ops.load(n, 0, 0, -10, 0, 0, 0)  # uniform gravity

# Lateral on corner
ops.load(top_nid[(0,0)], 20, 0, 0, 0, 0, 0)

ops.system('BandGeneral')
ops.numberer('RCM')
ops.constraints('Plain')
ops.integrator('LoadControl', 1.0)
ops.algorithm('Linear')
ops.analysis('Static')
ops.analyze(1)

print(f"\n{'='*55}")
print(f"  OpenSees: Edificio + Losa Q4 (nSubBeam={nSubBeam})")
print(f"{'='*55}")

# Corner nodes
corners = [(0,0), (nSubBeam,0), (nSubBeam,nSubBeam), (0,nSubBeam)]
for (ix,iy) in corners:
    n = top_nid[(ix,iy)]
    d = ops.nodeDisp(n)
    print(f"  Corner ({ix},{iy}) node {n}: ux={d[0]*1000:.4f}mm uz={d[2]*1000:.4f}mm")

# Interior nodes (slab-only, not on beam edges)
print(f"\n  Interior slab nodes:")
for iy in range(1, nSubBeam):
    for ix in range(1, nSubBeam):
        n = top_nid[(ix,iy)]
        d = ops.nodeDisp(n)
        print(f"  Interior ({ix},{iy}) node {n}: ux={d[0]*1000:.4f}mm uz={d[2]*1000:.4f}mm")

# Check: ALL nodes should move DOWN (uz < 0)
all_down = True
for iy in range(nY):
    for ix in range(nX):
        n = top_nid[(ix,iy)]
        d = ops.nodeDisp(n)
        if d[2] > 1e-10:
            print(f"  WARNING: node ({ix},{iy}) moves UP: uz={d[2]*1000:.4f}mm")
            all_down = False

print(f"\n  All nodes move DOWN: {'YES' if all_down else 'NO'}")
print(f"{'='*55}")
