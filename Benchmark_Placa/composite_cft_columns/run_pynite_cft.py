"""
run_pynite_cft.py — Validador independiente con PyNite (Pynite).

PyNite (Pynite) es un solver FEM puro Python (lineal-elástico) con frame
elements + plate (rectangular Mindlin). Validado contra ETABS, SAP2000,
RISA y soluciones analíticas (Roark, Timoshenko). Alternativa muy práctica
a OpenSees: instalación sin compilación, no requiere wrappers compilados.

Instalación:
    pip install PyNiteFEA

Documentación: https://github.com/JWock82/Pynite

Modelo idéntico a run_matrix_cft.mjs / run_opensees_cft.py:
  Bay 4×4 m, h=4 m, 4 columnas CFT esquinas + vigas perimetrales W360x60.
  CFT modelado como sección transformada (steel-equivalent, n=8).

Uso:
    python run_pynite_cft.py cftNoSlab
    python run_pynite_cft.py cftDeckSlab
"""
import sys

try:
    from Pynite import FEModel3D
except ImportError:
    print("ERROR: PyNite no instalado. Instalar con:  pip install PyNiteFEA")
    sys.exit(1)

setup = sys.argv[1] if len(sys.argv) > 1 else "cftDeckSlab"
has_slab = setup == "cftDeckSlab"

# ── Geometria ──
Lx, Ly = 4.0, 4.0
nx, ny = 4, 4
nNx, nNy = nx + 1, ny + 1
dx, dy = Lx / nx, Ly / ny
slab_z = 4.0
t_slab = 0.10

# ── Materiales / cargas (kN, m) ──
E_c, nu_c = 25e6, 0.20
E_s, nu_s = 200e6, 0.30
G_s = E_s / (2 * (1 + nu_s))
G_c = E_c / (2 * (1 + nu_c))
rho_s = 78.5      # kN/m3
rho_c = 24.0
q_unif  = 5
P_point = 20

# Beam W360x60
A_b  = 7610e-6
Iy_b = 12.9e-5
Iz_b = 1.20e-5
J_b  = 0.31e-6

# CFT transformed steel-equivalent
D_out, t_HSS = 0.250, 0.010
D_in = D_out - 2*t_HSS
A_s_HSS = D_out**2 - D_in**2
A_c_fill = D_in**2
I_s_HSS = (D_out**4 - D_in**4) / 12
I_c_fill = D_in**4 / 12
J_s_HSS = 2 * I_s_HSS
n_modular = E_s / E_c
A_cft = A_s_HSS + A_c_fill / n_modular
I_cft = I_s_HSS + I_c_fill / n_modular
J_cft = J_s_HSS

print(f"# CFT transformed-section (steel-equivalent):")
print(f"#   A_cft = {A_cft:.4e} m2   I_cft = {I_cft:.4e} m4   J_cft = {J_cft:.4e} m4")

# ── Modelo PyNite ──
m = FEModel3D()

# Materials
m.add_material("Concrete", E_c, G_c, nu_c, rho_c)
m.add_material("Steel",    E_s, G_s, nu_s, rho_s)

# Frame sections (PyNite: A, Iy, Iz, J)
m.add_section("W360X60", A_b, Iy_b, Iz_b, J_b)
m.add_section("CFT",     A_cft, I_cft, I_cft, J_cft)

# Slab nodes (5×5 grid en z = slab_z)
slab_nodes = {}
for j in range(nNy):
    for i in range(nNx):
        name = f"N{i}_{j}"
        m.add_node(name, i*dx, j*dy, slab_z)
        slab_nodes[(i, j)] = name

# 4 base nodes + FIXED (empotramiento completo)
base_nodes = {}
corners = [(0,0), (nx,0), (0,ny), (nx,ny)]
for (ci, cj) in corners:
    name = f"B{ci}_{cj}"
    m.add_node(name, ci*dx, cj*dy, 0.0)
    # FIXED: UX UY UZ RX RY RZ
    m.def_support(name, True, True, True, True, True, True)
    base_nodes[(ci,cj)] = name

# Si no hay slab, fijar nodos interiores huérfanos (igual que en OpenSees)
if not has_slab:
    for j in range(1, ny):
        for i in range(1, nx):
            m.def_support(slab_nodes[(i, j)], True, True, True, True, True, True)

# Vigas perimetrales W360x60
beam_id = 0
def add_beam(n1, n2):
    global beam_id
    beam_id += 1
    m.add_member(f"BM{beam_id}", n1, n2, "Steel", "W360X60")
# bottom
for i in range(nx): add_beam(slab_nodes[(i,0)], slab_nodes[(i+1,0)])
# top
for i in range(nx): add_beam(slab_nodes[(i,ny)], slab_nodes[(i+1,ny)])
# left
for j in range(ny): add_beam(slab_nodes[(0,j)], slab_nodes[(0,j+1)])
# right
for j in range(ny): add_beam(slab_nodes[(nx,j)], slab_nodes[(nx,j+1)])

# 4 columnas CFT
for (ci, cj) in corners:
    beam_id += 1
    m.add_member(f"COL{beam_id}", base_nodes[(ci,cj)], slab_nodes[(ci,cj)], "Steel", "CFT")

# Plates (sólo si has_slab) — PyNite usa Plate3D rectangular Mindlin
if has_slab:
    # add_plate args: name, i, j, m, n, t, material
    plate_id = 0
    for j in range(ny):
        for i in range(nx):
            plate_id += 1
            m.add_plate(
                f"P{plate_id}",
                slab_nodes[(i,   j  )],
                slab_nodes[(i+1, j  )],
                slab_nodes[(i+1, j+1)],
                slab_nodes[(i,   j+1)],
                t_slab,
                "Concrete",
            )

# Load case
m.add_load_combo("Dead", {"Dead": 1.0})

# Cargas
if has_slab:
    # Distribuir q nodalmente q*A/4
    A_elem = dx * dy
    for j in range(ny):
        for i in range(nx):
            for (di, dj) in [(0,0),(1,0),(1,1),(0,1)]:
                fz = -q_unif * A_elem / 4
                m.add_node_load(slab_nodes[(i+di, j+dj)], "FZ", fz, case="Dead")
else:
    midspans = [
        slab_nodes[(nx//2, 0)],
        slab_nodes[(nx//2, ny)],
        slab_nodes[(0, ny//2)],
        slab_nodes[(nx, ny//2)],
    ]
    for n in midspans:
        m.add_node_load(n, "FZ", -P_point, case="Dead")

# ── Solve ──
m.analyze(check_statics=False, log=False)

# ── Extract KPI ──
i_c, j_c = nx//2, ny//2
if has_slab:
    n_kpi_name = slab_nodes[(i_c, j_c)]
    kpi_label = f"w_centro (nodo {n_kpi_name}, x={i_c*dx} y={j_c*dy} z={slab_z})"
else:
    n_kpi_name = slab_nodes[(nx//2, 0)]
    kpi_label = f"w_midspan_beam (nodo {n_kpi_name}, x={(nx//2)*dx} y=0 z={slab_z})"
DZ = m.nodes[n_kpi_name].DZ["Dead"]
w_kpi_mm = DZ * 1000

# Reactions sum
sum_rz = 0
for nid in base_nodes.values():
    rz = m.nodes[nid].RxnFZ["Dead"]
    sum_rz += rz

print(f"=== PyNite (CFT bench): {setup} ===")
print(f"  Modelo: PyNite Plate3D Mindlin + frame3D")
print(f"  {kpi_label} = {w_kpi_mm:.4f} mm")
print(f"  Sum Rz (4 esquinas) = {sum_rz:.3f} kN")

# Total load
Q_total = q_unif * Lx * Ly if has_slab else 4 * P_point
print(f"  Total load Q = {Q_total:.3f} kN")
