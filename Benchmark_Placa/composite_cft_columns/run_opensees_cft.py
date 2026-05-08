"""
run_opensees_cft.py — Validación independiente con OpenSees Python del benchmark
CFT (Concrete-Filled Tube) columns + I-beams. Replica EXACTAMENTE el modelo
numérico de Hekatan WASM (composite_cft_columns/run_matrix_cft.mjs) y permite
cotejar contra ETABS (.e2k import).

Modelo:
  Bay 4×4 m, story h=4 m, 4 columnas CFT en esquina, 4 vigas perimetrales
  W360x60 acero. Pin en base.

Sección CFT — modelada como sección TRANSFORMADA equivalente a acero:
  HSS 250×250×10 mm + concreto fill 230×230 mm
  n = E_s/E_c = 8
  A_eff = A_s + A_c/n        (transformed steel-equivalent)
  I_eff = I_s + I_c/n
  E     = E_s = 200 GPa

Setups:
  cftNoSlab     = sólo CFT + vigas; carga 4×20 kN puntuales en mid-span vigas
  cftDeckSlab   = CFT + vigas + losa shellMITC4 t=0.10 m; q=5 kN/m²

Uso:
  python run_opensees_cft.py cftNoSlab
  python run_opensees_cft.py cftDeckSlab
"""
import sys
import openseespy.opensees as ops

setup = sys.argv[1] if len(sys.argv) > 1 else "cftDeckSlab"

# ── Geometría ──
Lx, Ly = 4.0, 4.0
nx, ny = 4, 4
nNx, nNy = nx + 1, ny + 1
dx, dy = Lx / nx, Ly / ny
slab_z = 4.0
t_slab = 0.10

# ── Materiales / cargas ──
E_c, nu_c = 25e6, 0.20         # kN/m², concreto losa
E_s, nu_s = 200e6, 0.30        # kN/m², acero
G_s = E_s / (2 * (1 + nu_s))
q_unif  = 5                     # kN/m²
P_point = 20                    # kN — carga puntual (sólo cftNoSlab)

# ── W360x60 (vigas) ──
A_b  = 7610e-6
Iy_b = 12.9e-5
Iz_b = 1.20e-5
J_b  = 0.31e-6

# ── CFT — sección transformada referida a acero ──
D_out, t_HSS = 0.250, 0.010
D_in = D_out - 2*t_HSS                          # 0.230
A_steel_HSS = D_out**2 - D_in**2                # 9.60e-3
A_conc      = D_in**2                           # 5.29e-2
I_steel_HSS = (D_out**4 - D_in**4) / 12         # 9.18e-5
I_conc      = D_in**4 / 12                      # 2.33e-4
J_steel_HSS = 2 * I_steel_HSS
n_modular   = E_s / E_c                         # 8
A_cft = A_steel_HSS + A_conc / n_modular        # 1.621e-2
I_cft = I_steel_HSS + I_conc / n_modular        # 1.21e-4
J_cft = J_steel_HSS

print(f"# CFT transformed-section properties:")
print(f"#   A_cft = {A_cft:.4e} m2   I_cft = {I_cft:.4e} m4   J_cft = {J_cft:.4e} m4")

has_slab = setup == "cftDeckSlab"

# ── OpenSees init ──
ops.wipe()
ops.model('basic', '-ndm', 3, '-ndf', 6)

# Slab nodes (z = slab_z)
node_id = 1
slab = {}
for j in range(nNy):
    for i in range(nNx):
        ops.node(node_id, i*dx, j*dy, slab_z)
        slab[(i,j)] = node_id
        node_id += 1

# 4 base nodes for CFT cols
base = {}
corners = [(0,0), (nx,0), (0,ny), (nx,ny)]
for (ci, cj) in corners:
    ops.node(node_id, ci*dx, cj*dy, 0.0)
    ops.fix(node_id, 1, 1, 1, 1, 1, 1)        # FIXED: empotramiento completo
    base[(ci,cj)] = node_id
    node_id += 1

# Si NO hay slab, los 9 nodos interiores del grid (1..nx-1, 1..ny-1) quedan
# huérfanos (no los toca ningún elemento). Para evitar K singular en OpenSees
# los fijamos completamente — no participan en la mecánica del modelo.
if not has_slab:
    for j in range(1, ny):
        for i in range(1, nx):
            ops.fix(slab[(i, j)], 1, 1, 1, 1, 1, 1)

# Concrete shell section (sólo si hasSlab)
ele_id = 1
if has_slab:
    ops.section('ElasticMembranePlateSection', 1, E_c, nu_c, t_slab, 0.0)
    for j in range(ny):
        for i in range(nx):
            n_bl = slab[(i, j)]
            n_br = slab[(i+1, j)]
            n_tr = slab[(i+1, j+1)]
            n_tl = slab[(i, j+1)]
            ops.element('ShellMITC4', ele_id, n_bl, n_br, n_tr, n_tl, 1)
            ele_id += 1

# ── Geometric transforms ──
# Horizontal beams: vecxz = [0,0,1]
ops.geomTransf('Linear', 1, 0, 0, 1)
# Vertical columns: vecxz = [1,0,0]
ops.geomTransf('Linear', 2, 1, 0, 0)

# ── Vigas perimetrales (acero W360x60) ──
# bottom edge
for i in range(nx):
    ops.element('elasticBeamColumn', ele_id, slab[(i, 0)], slab[(i+1, 0)],
                A_b, E_s, G_s, J_b, Iy_b, Iz_b, 1)
    ele_id += 1
# top edge
for i in range(nx):
    ops.element('elasticBeamColumn', ele_id, slab[(i, ny)], slab[(i+1, ny)],
                A_b, E_s, G_s, J_b, Iy_b, Iz_b, 1)
    ele_id += 1
# left edge
for j in range(ny):
    ops.element('elasticBeamColumn', ele_id, slab[(0, j)], slab[(0, j+1)],
                A_b, E_s, G_s, J_b, Iy_b, Iz_b, 1)
    ele_id += 1
# right edge
for j in range(ny):
    ops.element('elasticBeamColumn', ele_id, slab[(nx, j)], slab[(nx, j+1)],
                A_b, E_s, G_s, J_b, Iy_b, Iz_b, 1)
    ele_id += 1

# ── Columnas CFT (transformed steel-equivalent) ──
for (ci, cj) in corners:
    n_top = slab[(ci, cj)]
    n_bot = base[(ci, cj)]
    ops.element('elasticBeamColumn', ele_id, n_bot, n_top,
                A_cft, E_s, G_s, J_cft, I_cft, I_cft, 2)
    ele_id += 1

# ── Cargas ──
ops.timeSeries('Constant', 1)
ops.pattern('Plain', 1, 1)

if has_slab:
    A_elem = dx * dy
    for j in range(ny):
        for i in range(nx):
            for (di, dj) in [(0,0), (1,0), (1,1), (0,1)]:
                n = slab[(i+di, j+dj)]
                fz = -q_unif * A_elem / 4
                ops.load(n, 0, 0, fz, 0, 0, 0)
else:
    # 4 puntos de 20 kN en mid-span de cada viga perimetral
    midspans = [
        slab[(nx//2, 0)],          # bottom mid
        slab[(nx//2, ny)],         # top mid
        slab[(0, ny//2)],          # left mid
        slab[(nx, ny//2)],         # right mid
    ]
    for n in midspans:
        ops.load(n, 0, 0, -P_point, 0, 0, 0)

# ── Solve static ──
ops.system('UmfPack')
ops.numberer('RCM')
ops.constraints('Plain')
ops.integrator('LoadControl', 1.0)
ops.algorithm('Linear')
ops.analysis('Static')
ops.analyze(1)
ops.reactions()

# ── Extract KPI ──
# - cftDeckSlab → w_centro (centro de slab)
# - cftNoSlab   → w_midspan (mid-span de viga bottom: nodo (nx/2, 0))
i_c, j_c = nx // 2, ny // 2
if has_slab:
    n_kpi = slab[(i_c, j_c)]
    kpi_label = f"w_centro (nodo {n_kpi}, x={i_c*dx} y={j_c*dy} z={slab_z})"
else:
    n_kpi = slab[(nx//2, 0)]
    kpi_label = f"w_midspan_beam (nodo {n_kpi}, x={(nx//2)*dx} y=0 z={slab_z})"
disp = ops.nodeDisp(n_kpi)
w_kpi_mm = disp[2] * 1000

# ── Sum Rz ──
sum_rz = 0
for nid in base.values():
    rxn = ops.nodeReaction(nid)
    sum_rz += rxn[2]

print(f"=== OpenSees Python (CFT bench): {setup} ===")
print(f"  Modelo: {'shellMITC4 + ' if has_slab else ''}elasticBeamColumn 3D")
print(f"  {kpi_label} = {w_kpi_mm:.4f} mm")
print(f"  Sum Rz (4 esquinas) = {sum_rz:.3f} kN")

# Total load para chequeo
if has_slab:
    Q_total = q_unif * Lx * Ly
else:
    Q_total = 4 * P_point
print(f"  Total load Q = {Q_total:.3f} kN")
