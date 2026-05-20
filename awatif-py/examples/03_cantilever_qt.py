"""Ejemplo 03 — Cantilever con interfaz Qt nativa (pyvistaqt).

App de escritorio Qt5 con:
  - QDockWidget con sliders Qt nativos (look & feel OS-nativo)
  - QtInteractor PyVista embebido (3D viewer)
  - Update en tiempo real al mover sliders

Run:
    pip install awatif-py[viewer] pyvistaqt PyQt5
    python examples/03_cantilever_qt.py
"""
import sys
from PyQt5 import QtWidgets, QtCore
from pyvistaqt import QtInteractor
import numpy as np

from awatif import deform, NodeInputs, ElementInputs, SectionShape
from awatif.viewer import (
    _frames_to_lines, _support_glyphs, _load_arrows,
    _deformed_polylines_collection,
)


# Estado del modelo
state = {"L": 4.0, "P": 10.0, "B": 0.30, "H": 0.50}
E = 200e6
NU = 0.3
G = E / (2 * (1 + NU))


def build_and_solve():
    L, P, B, H = state["L"], state["P"], state["B"], state["H"]
    nodes = [(0, 0, 0), (0, 0, L)]
    elements = [[0, 1]]
    ni = NodeInputs(supports={0: (True,)*6}, loads={1: (P, 0, 0, 0, 0, 0)})
    ei = ElementInputs(
        elasticities={0: E}, shear_moduli={0: G}, poissons_ratios={0: NU},
        areas={0: B * H},
        moments_of_inertia_z={0: H * B**3 / 12},
        moments_of_inertia_y={0: B * H**3 / 12},
        torsional_constants={0: 0.196 * min(B, H)**3 * max(B, H)},
        section_shapes={0: SectionShape(type="rect", b=B, h=H)},  # ← para render 3D box
    )
    out = deform(nodes, elements, ni, ei)
    return nodes, elements, ni, ei, out


class MainWindow(QtWidgets.QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("awatif-py — Cantilever Interactive (Qt + PyVista)")
        self.resize(1400, 900)

        # Central widget: 3D viewer
        self.plotter = QtInteractor(self)
        self.setCentralWidget(self.plotter.interactor)

        # Dock: panel de sliders
        dock = QtWidgets.QDockWidget("Parámetros", self)
        dock.setMinimumWidth(320)
        panel = QtWidgets.QWidget()
        layout = QtWidgets.QFormLayout(panel)

        self.sliders: dict[str, tuple[QtWidgets.QSlider, QtWidgets.QLabel, float, float]] = {}
        sliders_spec = [
            ("L (m)",     2.0,  8.0,  state["L"], "L"),
            ("P (kN)",    1.0,  100.0, state["P"], "P"),
            ("B sec (m)", 0.20, 0.60, state["B"], "B"),
            ("H sec (m)", 0.30, 0.90, state["H"], "H"),
        ]
        for label, minv, maxv, default, key in sliders_spec:
            s = QtWidgets.QSlider(QtCore.Qt.Horizontal)
            s.setMinimum(0); s.setMaximum(1000)
            s.setValue(int((default - minv) / (maxv - minv) * 1000))
            s.setMinimumWidth(220)
            val_label = QtWidgets.QLabel(f"{default:.3f}")
            val_label.setStyleSheet("color: #1f3a93; font-weight: bold; min-width: 60px;")
            row = QtWidgets.QWidget()
            row_layout = QtWidgets.QHBoxLayout(row)
            row_layout.setContentsMargins(0, 0, 0, 0)
            row_layout.addWidget(s); row_layout.addWidget(val_label)
            layout.addRow(label, row)
            self.sliders[key] = (s, val_label, minv, maxv)
            s.valueChanged.connect(lambda v, k=key: self._on_slider_change(k, v))

        # Results panel
        self.result_label = QtWidgets.QLabel("Esperando solver...")
        self.result_label.setStyleSheet("background: #ecf0f1; padding: 8px; font-family: monospace;")
        layout.addRow("Resultados:", self.result_label)

        dock.setWidget(panel)
        self.addDockWidget(QtCore.Qt.RightDockWidgetArea, dock)

        # Initial render
        self._actors: dict[str, "object"] = {}
        self._render_model()

    def _on_slider_change(self, key: str, slider_value: int):
        s, val_label, minv, maxv = self.sliders[key]
        v = minv + (slider_value / 1000.0) * (maxv - minv)
        state[key] = v
        val_label.setText(f"{v:.3f}")
        self._render_model()

    def _render_model(self):
        nodes, elements, ni, ei, out = build_and_solve()
        for name, a in list(self._actors.items()):
            self.plotter.remove_actor(a)
        self._actors.clear()

        # Undeformed: línea azul (no caja — sección no es necesario verla)
        und = _frames_to_lines(nodes, elements)
        if und:
            self._actors["und"] = self.plotter.add_mesh(
                und, color="#1f3a93", line_width=6,
            )

        # Soportes
        sup = _support_glyphs(nodes, ni, size=state["L"] * 0.06)
        if sup:
            self._actors["sup"] = self.plotter.add_mesh(sup, color="#c0392b")

        # Cargas (flecha verde)
        max_load = max((np.linalg.norm(L[:3]) for L in ni.loads.values()), default=1.0)
        arrow_scale = state["L"] * 0.15 / max_load if max_load > 0 else 0.1
        lds = _load_arrows(nodes, ni, scale=arrow_scale)
        if lds:
            self._actors["lds"] = self.plotter.add_mesh(lds, color="#27ae60")

        # Deformada: CURVA cúbica Hermite (no recta) — ahora se VE la flexión real
        max_d = max(
            max(abs(d[0]), abs(d[1]), abs(d[2])) for d in out.deformations.values()
        )
        scale = (state["L"] * 0.25) / max_d if max_d > 1e-9 else 1.0
        def_curve = _deformed_polylines_collection(
            nodes, elements, out, scale=scale, n_subdiv=40,
        )
        if def_curve:
            self._actors["def"] = self.plotter.add_mesh(
                def_curve, color="#c0392b", line_width=7,
            )

        # Etiquetas de nodos (P0, P1)
        try:
            label_pts = np.array(nodes)
            labels = [f"N{i}" for i in range(len(nodes))]
            self._actors["lbls"] = self.plotter.add_point_labels(
                label_pts, labels, font_size=12, point_size=8,
                point_color="black", text_color="black", shape=None,
                always_visible=True,
            )
        except Exception:
            pass

        # Update label results
        Ux = out.deformations[1][0] * 1000  # mm
        Rx = out.reactions[0][0]
        My = abs(out.reactions[0][4])
        self.result_label.setText(
            f"Ux_top = {Ux:.2f} mm\n"
            f"R_x    = {Rx:.2f} kN\n"
            f"|M_y|  = {My:.2f} kN·m\n"
            f"Scale  = {scale:.1f}×"
        )

        # Axes + reset camera 1st time
        if not hasattr(self, "_first_done"):
            self.plotter.show_grid(color="gray")
            self.plotter.add_axes(line_width=3)
            self.plotter.view_isometric()
            self._first_done = True


def main(auto_quit_ms: int = 0):
    """Launch Qt app. Si auto_quit_ms > 0, cierra automáticamente tras ese tiempo (tests)."""
    app = QtWidgets.QApplication.instance() or QtWidgets.QApplication(sys.argv)
    app.setStyle("Fusion")
    win = MainWindow()
    win.show()
    if auto_quit_ms > 0:
        QtCore.QTimer.singleShot(auto_quit_ms, app.quit)
    return app.exec_()


if __name__ == "__main__":
    sys.exit(main())
