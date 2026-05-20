"""Ejemplo 01 — Cantilever vertical con carga lateral, view 3D estático.

Modelo: columna 0.3 × 0.5 × 4m, acero E=200 GPa, P=10 kN horizontal en top.
Calcula deform + analyze, abre la ventana 3D PyVista con deformada visible.

Run:
    python examples/01_cantilever_static.py
"""
from awatif import deform, analyze, NodeInputs, ElementInputs
from awatif.viewer import View


# ─── Geometría ──────────────────────────────────────────────────────────────
L = 4.0       # altura col
B, H = 0.3, 0.5
E = 200e6     # kN/m²
NU = 0.3
G = E / (2 * (1 + NU))
P = 10.0      # kN

nodes = [(0, 0, 0), (0, 0, L)]
elements = [[0, 1]]

# I about Local 3 (Y axis) = h × b³ / 12 = 0.001125
Iz_around_3 = H * B**3 / 12
Iy_around_2 = B * H**3 / 12
J = 0.196 * min(B, H)**3 * max(B, H)  # Saint-Venant aprox

ni = NodeInputs(
    supports={0: (True, True, True, True, True, True)},
    loads={1: (P, 0, 0, 0, 0, 0)},
)
ei = ElementInputs(
    elasticities={0: E},
    shear_moduli={0: G},
    poissons_ratios={0: NU},
    areas={0: B * H},
    moments_of_inertia_z={0: Iz_around_3},
    moments_of_inertia_y={0: Iy_around_2},
    torsional_constants={0: J},
)

# ─── Análisis ───────────────────────────────────────────────────────────────
out = deform(nodes, elements, ni, ei)
ana = analyze(nodes, elements, ei, out)

print(f"Ux top = {out.deformations[1][0]*1000:.2f} mm")
print(f"M_base = {abs(ana.bendings_z[0][0]):.2f} kN·m")
print(f"R_x    = {out.reactions[0][0]:.2f} kN")

# ─── Viewer 3D ──────────────────────────────────────────────────────────────
view = View(nodes, elements)
view.set_supports(ni).set_loads(ni).set_deformation(out, scale="auto")
view.show()
