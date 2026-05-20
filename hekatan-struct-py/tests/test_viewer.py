"""Test viewer headless — verifica que View() abre, renderiza y screenshot funciona.

NO requiere display gráfico (off-screen rendering vía PyVista/VTK).
"""
import os
import pytest

pv = pytest.importorskip("pyvista")
pv.OFF_SCREEN = True

from awatif import deform, NodeInputs, ElementInputs
from awatif.viewer import View


def test_view_creates_and_renders(tmp_path):
    """Crea viewer con cantilever, screenshot a PNG. Validate file exists."""
    nodes = [(0, 0, 0), (0, 0, 4)]
    elements = [[0, 1]]
    ni = NodeInputs(
        supports={0: (True, True, True, True, True, True)},
        loads={1: (10, 0, 0, 0, 0, 0)},
    )
    ei = ElementInputs(
        elasticities={0: 200e6}, shear_moduli={0: 76.92e6},
        poissons_ratios={0: 0.3}, areas={0: 0.15},
        moments_of_inertia_z={0: 0.001125}, moments_of_inertia_y={0: 0.003125},
        torsional_constants={0: 0.000391},
    )
    out = deform(nodes, elements, ni, ei)

    view = View(nodes, elements)
    view.set_supports(ni).set_loads(ni).set_deformation(out, scale="auto")
    path = str(tmp_path / "test_viewer.png")
    view.screenshot(path)
    view.close()
    assert os.path.exists(path), f"Screenshot no se generó en {path}"
    assert os.path.getsize(path) > 1000, "Screenshot vacío"


def test_view_with_shell():
    """Viewer con mix frame + shell — no debe crashear."""
    nodes = [
        (0, 0, 0), (6, 0, 0), (6, 6, 0), (0, 6, 0),
        (0, 0, 4), (6, 0, 4), (6, 6, 4), (0, 6, 4),
    ]
    elements = [
        [0, 4], [1, 5], [2, 6], [3, 7],  # cols
        [4, 5, 6, 7],                     # shell roof
    ]
    ni = NodeInputs(
        supports={0: (True,)*6, 1: (True,)*6, 2: (True,)*6, 3: (True,)*6},
    )
    view = View(nodes, elements)
    view.set_supports(ni)
    assert view._mesh_actors.get("frames") is not None
    assert view._mesh_actors.get("shells") is not None
    view.close()
