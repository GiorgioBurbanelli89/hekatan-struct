"""
run_opensees.py — Validación independiente con OpenSees Python del benchmark
composite_slab_frame, mismo modelo que Hekatan WASM y ETABS.

Modelo:
  Slab 4×4 m, mesh 4×4 = 16 shell, t=0.10m, E_c=25 GPa, ν=0.20
  Vigas perimetrales W360x60 acero (16 elementos)
  4 columnas pin esquina (slab z=4 → base z=0)
  Carga vertical q=5 kN/m² (consistent nodal)

OpenSees: usa elemento ShellMITC4 + elasticBeamColumn 3D.
Comparable contra: Hekatan Struct WASM (post-fix), ETABS, MATLAB.

Uso:
  python run_opensees.py areaOnly
  python run_opensees.py perimFrames
"""
import sys
import openseespy.opensees as ops

setup = sys.argv[1] if len(sys.argv) > 1 else "perimFrames"

# Geometry
Lx, Ly = 4.0, 4.0
nx, ny = 4, 4
nNx, nNy = nx + 1, ny + 1
dx, dy = Lx / nx, Ly / ny
slab_z = 4.0   # slab Level_1, base z=0

# Material
E_c, nu_c = 25e6, 0.20      # kN/m², concrete
G_c = E_c / (2 * (1 + nu_c))
E_s, G_s = 200e6, 77e6      # kN/m², steel
A_b = 7610e-6                # m²
Iy_b = 12.9e-5               # strong (m⁴)
Iz_b = 1.20e-5               # weak
J_b  = 0.31e-6
t_slab = 0.10
q_unif = 5                   # kN/m²

# OpenSees init
ops.wipe()
ops.model('basic', '-ndm', 3, '-ndf', 6)

# ── Nodes (slab) ──
node_id = 1
slab_node_ids = {}
for j in range(nNy):
    for i in range(nNx):
        x = i * dx
        y = j * dy
        z = slab_z
        ops.node(node_id, x, y, z)
        slab_node_ids[(i, j)] = node_id
        node_id += 1

# ── Add base nodes for columns if needed ──
base_node_ids = {}
if setup in ("perimFrames", "fullBuilding"):
    corners = [(0, 0), (nx, 0), (0, ny), (nx, ny)]
    for (ci, cj) in corners:
        x = ci * dx
        y = cj * dy
        ops.node(node_id, x, y, 0.0)
        ops.fix(node_id, 1, 1, 1, 0, 0, 0)   # pin
        base_node_ids[(ci, cj)] = node_id
        node_id += 1

# ── Restraints for areaOnly ──
if setup == "areaOnly":
    # SS en los 4 bordes — usar set para evitar duplicados en esquinas
    edge_nodes = set()
    for i in range(nNx):
        edge_nodes.add(slab_node_ids[(i, 0)])
        edge_nodes.add(slab_node_ids[(i, ny)])
    for j in range(nNy):
        edge_nodes.add(slab_node_ids[(0, j)])
        edge_nodes.add(slab_node_ids[(nx, j)])
    for nid in edge_nodes:
        ops.fix(nid, 1, 1, 1, 0, 0, 0)

# ── Material concrete (nDMaterial for shell) ──
mat_id = 1
ops.section('ElasticMembranePlateSection', 1, E_c, nu_c, t_slab, 0.0)

# ── Shell elements (ShellMITC4) ──
ele_id = 1
for j in range(ny):
    for i in range(nx):
        n_bl = slab_node_ids[(i, j)]
        n_br = slab_node_ids[(i + 1, j)]
        n_tr = slab_node_ids[(i + 1, j + 1)]
        n_tl = slab_node_ids[(i, j + 1)]
        ops.element('ShellMITC4', ele_id, n_bl, n_br, n_tr, n_tl, 1)
        ele_id += 1

# ── Frames if perimFrames or fullBuilding ──
if setup in ("perimFrames", "fullBuilding"):
    # Geometric transformation for 3D beams
    # vecxz = vector in local x-z plane (defines local y orientation)
    # For horizontal beams along x: local-x=+x, vecxz=[0,0,1] → local-y=+y, local-z=+z
    # For horizontal beams along y: local-x=+y, vecxz=[0,0,1] → local-y=-x, local-z=+z
    # For vertical columns: local-x=+z, vecxz=[1,0,0] → local-y=+y, local-z=-x
    ops.geomTransf('Linear', 1, 0, 0, 1)   # transf for horizontal beams (vecxz=z up)
    ops.geomTransf('Linear', 2, 1, 0, 0)   # transf for vertical columns (vecxz=x)

    # Bottom edge (y=0)
    for i in range(nx):
        n1 = slab_node_ids[(i, 0)]
        n2 = slab_node_ids[(i + 1, 0)]
        ops.element('elasticBeamColumn', ele_id, n1, n2, A_b, E_s, G_s, J_b, Iy_b, Iz_b, 1)
        ele_id += 1
    # Top edge (y=Ly)
    for i in range(nx):
        n1 = slab_node_ids[(i, ny)]
        n2 = slab_node_ids[(i + 1, ny)]
        ops.element('elasticBeamColumn', ele_id, n1, n2, A_b, E_s, G_s, J_b, Iy_b, Iz_b, 1)
        ele_id += 1
    # Left edge (x=0)
    for j in range(ny):
        n1 = slab_node_ids[(0, j)]
        n2 = slab_node_ids[(0, j + 1)]
        ops.element('elasticBeamColumn', ele_id, n1, n2, A_b, E_s, G_s, J_b, Iy_b, Iz_b, 1)
        ele_id += 1
    # Right edge (x=Lx)
    for j in range(ny):
        n1 = slab_node_ids[(nx, j)]
        n2 = slab_node_ids[(nx, j + 1)]
        ops.element('elasticBeamColumn', ele_id, n1, n2, A_b, E_s, G_s, J_b, Iy_b, Iz_b, 1)
        ele_id += 1
    # 4 columnas en esquinas
    for (ci, cj) in [(0, 0), (nx, 0), (0, ny), (nx, ny)]:
        n_top = slab_node_ids[(ci, cj)]
        n_bot = base_node_ids[(ci, cj)]
        ops.element('elasticBeamColumn', ele_id, n_bot, n_top, A_b, E_s, G_s, J_b, Iy_b, Iz_b, 2)
        ele_id += 1

# ── Loads ──
ops.timeSeries('Constant', 1)
ops.pattern('Plain', 1, 1)

# Distribute q nodally as q*A/4 to each shell corner
A_elem = dx * dy
for j in range(ny):
    for i in range(nx):
        for (di, dj) in [(0, 0), (1, 0), (1, 1), (0, 1)]:
            n = slab_node_ids[(i + di, j + dj)]
            fz = -q_unif * A_elem / 4
            ops.load(n, 0, 0, fz, 0, 0, 0)

# ── Solve static ──
ops.system('UmfPack')
ops.numberer('RCM')
ops.constraints('Plain')
ops.integrator('LoadControl', 1.0)
ops.algorithm('Linear')
ops.analysis('Static')
ops.analyze(1)
ops.reactions()   # OpenSees no calcula reacciones por defecto

# ── Extract w_centro (center of slab, z displacement) ──
i_c, j_c = nx // 2, ny // 2
n_center = slab_node_ids[(i_c, j_c)]
disp = ops.nodeDisp(n_center)
w_center_mm = disp[2] * 1000

print(f"=== OpenSees Python: {setup} ===")
print(f"  Modelo: shellMITC4 + elasticBeamColumn 3D")
print(f"  w_centro (nodo {n_center}, x={i_c*dx} y={j_c*dy} z={slab_z}) = {w_center_mm:.4f} mm")

# Reactions sum
if setup in ("perimFrames", "fullBuilding"):
    sum_rz = 0
    for nid in base_node_ids.values():
        rxn = ops.nodeReaction(nid)
        sum_rz += rxn[2]
    print(f"  Sum Rz (4 esquinas) = {sum_rz:.3f} kN")
elif setup == "areaOnly":
    # Sum reactions on edges
    sum_rz = 0
    for i in range(nNx):
        rxn = ops.nodeReaction(slab_node_ids[(i, 0)])
        sum_rz += rxn[2]
        rxn = ops.nodeReaction(slab_node_ids[(i, ny)])
        sum_rz += rxn[2]
    for j in range(1, ny):
        rxn = ops.nodeReaction(slab_node_ids[(0, j)])
        sum_rz += rxn[2]
        rxn = ops.nodeReaction(slab_node_ids[(nx, j)])
        sum_rz += rxn[2]
    print(f"  Sum Rz (bordes SS) = {sum_rz:.3f} kN")

print(f"  Total load Q = {q_unif * Lx * Ly:.3f} kN")
