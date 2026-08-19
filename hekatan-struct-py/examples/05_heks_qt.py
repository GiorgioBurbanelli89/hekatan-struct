"""Ejemplo 05 — Abre un `.heks` REAL en ventana Qt, resuelto por el motor de Hekatan.

Es el 03 pero sin cantilever escrito a mano: lee el MISMO texto que come el
motor TS (`cliModeler.ts`) con `hekatan_struct.heks.leer_heks`, lo resuelve con
`hekatan_struct.deform` y lo dibuja.

    python examples/05_heks_qt.py                                  # galpon por defecto
    python examples/05_heks_qt.py ../examples/public/mezanine.heks
    python examples/05_heks_qt.py --shot galpon_qt.png             # PNG de la ventana y sale

⚠️ El PNG es la verificación: sin mirarlo no se sabe si dibujó.
"""
from __future__ import annotations

import argparse
import os
import sys
import time

import numpy as np
from PyQt5 import QtCore, QtWidgets
from pyvistaqt import QtInteractor

from hekatan_struct.heks import ModeloHeks, leer_heks, resolver_heks
from hekatan_struct.viewer import (
    _deformed_polylines_collection,
    _frames_to_lines,
    _load_arrows,
    _support_glyphs,
)

_AQUI = os.path.dirname(os.path.abspath(__file__))
HEKS_POR_DEFECTO = os.path.normpath(
    os.path.join(_AQUI, "..", "..", "examples", "public", "galpon_bodega.heks")
)


def resolver(ruta: str) -> tuple[ModeloHeks, object, float]:
    """Lee el `.heks` y lo resuelve. Devuelve (modelo, salida, segundos)."""
    modelo = leer_heks(ruta)
    t0 = time.perf_counter()
    salida = resolver_heks(modelo)
    return modelo, salida, time.perf_counter() - t0


def _resumen(modelo: ModeloHeks, salida, ruta: str, seg: float, escala: float) -> str:
    """Báscula primero: si ΣR no cierra con la carga, la deformada no significa nada."""
    uz = [d[2] for d in salida.deformations.values()]
    flecha = min(uz) if uz else 0.0
    n_ang = len(modelo.element_inputs.local_angles or {})
    wl = modelo.element_inputs.frame_loads or {}
    n_wl = len(wl)
    # La carga NO es solo la nodal: el galpón entra entero por `frameload`
    # (kN/m sobre la barra). Sumar solo `loads` daba Fz = 0 y un cierre del
    # 100 % con el modelo perfectamente resuelto.
    carga_z = sum(L[2] for L in modelo.node_inputs.loads.values())
    for e_idx, w in wl.items():
        i, j = modelo.elements[e_idx][:2]
        pi, pj = modelo.nodes[i], modelo.nodes[j]
        largo = float(np.linalg.norm(np.asarray(pj) - np.asarray(pi)))
        carga_z += w[2] * largo
    reac_z = sum(r[2] for r in salida.reactions.values())
    cierre = abs(carga_z + reac_z) / abs(reac_z) * 100 if reac_z else 0.0
    return (
        f"{os.path.basename(ruta)}\n"
        f"{len(modelo.nodes)} nudos · {len(modelo.elements)} barras\n"
        f"ang {n_ang} · frameload {n_wl}\n"
        f"\n"
        f"flecha Uz  = {flecha * 1000:.3f} mm\n"
        f"carga Fz   = {carga_z:.2f} kN\n"
        f"reacc. Rz  = {reac_z:.2f} kN\n"
        f"cierre     = {cierre:.4f} %\n"
        f"\n"
        f"solver     = {seg * 1000:.0f} ms\n"
        f"escala     = {escala:.0f}x"
        # Los avisos del lector van EN EL PANEL, no solo en la consola: un
        # modelo que no se monta entero da flecha 0 y báscula perfecta.
        + ("\n\n" + "\n".join("! " + e for e in modelo.errores) if modelo.errores else "")
    )


class VentanaHeks(QtWidgets.QMainWindow):
    def __init__(self, ruta: str):
        super().__init__()
        self.ruta = ruta
        self.setWindowTitle("Hekatan Struct Python — modelo .heks")
        self.resize(1400, 900)

        self.plotter = QtInteractor(self)
        self.setCentralWidget(self.plotter.interactor)

        dock = QtWidgets.QDockWidget("Modelo", self)
        dock.setMinimumWidth(320)
        dock.setMaximumWidth(400)   # sin tope, un aviso largo se come el 3D
        panel = QtWidgets.QWidget()
        layout = QtWidgets.QFormLayout(panel)

        boton = QtWidgets.QPushButton("Abrir .heks…")
        boton.clicked.connect(self._abrir)
        layout.addRow(boton)

        self.slider = QtWidgets.QSlider(QtCore.Qt.Horizontal)
        self.slider.setMinimum(0)
        self.slider.setMaximum(1000)
        self.slider.setValue(50)  # 5 % del span: con 25 % el galpon sale ilegible
        self.slider.valueChanged.connect(lambda _: self._dibujar())
        layout.addRow("Deformada", self.slider)

        self.chk_apoyos = QtWidgets.QCheckBox("apoyos")
        self.chk_apoyos.setChecked(True)
        self.chk_apoyos.stateChanged.connect(lambda _: self._dibujar())
        self.chk_cargas = QtWidgets.QCheckBox("cargas")
        self.chk_cargas.setChecked(True)
        self.chk_cargas.stateChanged.connect(lambda _: self._dibujar())
        fila = QtWidgets.QWidget()
        fila_l = QtWidgets.QHBoxLayout(fila)
        fila_l.setContentsMargins(0, 0, 0, 0)
        fila_l.addWidget(self.chk_apoyos)
        fila_l.addWidget(self.chk_cargas)
        layout.addRow("Mostrar", fila)

        self.texto = QtWidgets.QLabel("…")
        self.texto.setWordWrap(True)   # los avisos son largos y sin esto se cortan
        self.texto.setStyleSheet(
            "background: #ecf0f1; padding: 8px; font-family: Consolas, monospace;"
        )
        layout.addRow(self.texto)

        dock.setWidget(panel)
        self.addDockWidget(QtCore.Qt.RightDockWidgetArea, dock)

        self._actores: dict[str, object] = {}
        self._primera = True
        self._cargar(ruta)

    # ── datos ────────────────────────────────────────────────────────
    def _cargar(self, ruta: str):
        self.ruta = ruta
        self.modelo, self.salida, self.seg = resolver(ruta)
        if self.modelo.errores:
            print("avisos del lector:", *self.modelo.errores, sep="\n  ")
        self._primera = True
        self._dibujar()

    def _abrir(self):
        ruta, _ = QtWidgets.QFileDialog.getOpenFileName(
            self, "Abrir modelo", os.path.dirname(self.ruta), "Modelos Hekatan (*.heks)"
        )
        if ruta:
            self._cargar(ruta)

    # ── dibujo ───────────────────────────────────────────────────────
    def _dibujar(self):
        m, out = self.modelo, self.salida
        for a in list(self._actores.values()):
            self.plotter.remove_actor(a)
        self._actores.clear()

        pts = np.asarray(m.nodes, dtype=float)
        span = float(np.max(pts.max(axis=0) - pts.min(axis=0))) or 1.0

        und = _frames_to_lines(m.nodes, m.elements)
        if und:
            self._actores["und"] = self.plotter.add_mesh(und, color="#1f3a93", line_width=2)

        if self.chk_apoyos.isChecked():
            sup = _support_glyphs(m.nodes, m.node_inputs, size=span * 0.02)
            if sup:
                self._actores["sup"] = self.plotter.add_mesh(sup, color="#c0392b")

        if self.chk_cargas.isChecked():
            fmax = max(
                (float(np.linalg.norm(L[:3])) for L in m.node_inputs.loads.values()),
                default=0.0,
            )
            if fmax > 0:
                lds = _load_arrows(m.nodes, m.node_inputs, scale=span * 0.05 / fmax)
                if lds:
                    self._actores["lds"] = self.plotter.add_mesh(lds, color="#27ae60")

        # escala: el slider es el % del span que ocupa la flecha máxima
        dmax = max(
            (max(abs(d[0]), abs(d[1]), abs(d[2])) for d in out.deformations.values()),
            default=0.0,
        )
        pct = self.slider.value() / 1000.0
        escala = (pct * span) / dmax if dmax > 1e-12 else 1.0
        curva = _deformed_polylines_collection(
            m.nodes, m.elements, out, scale=escala, n_subdiv=8
        )
        if curva:
            self._actores["def"] = self.plotter.add_mesh(curva, color="#c0392b", line_width=3)

        self.texto.setText(_resumen(m, out, self.ruta, self.seg, escala))
        # Un modelo que el lector no monta entero (cáscaras, areaload) sale con
        # flecha 0 y báscula perfecta. El panel se pone rojo para que no cuele.
        self.texto.setStyleSheet(
            "background: #fdecea; color: #922b21; padding: 8px;"
            " font-family: Consolas, monospace;"
            if m.errores else
            "background: #ecf0f1; padding: 8px; font-family: Consolas, monospace;"
        )

        if self._primera:
            self.plotter.show_grid(color="gray")
            self.plotter.add_axes(line_width=3)
            self.plotter.view_isometric()
            self.plotter.reset_camera()
            self._primera = False

    def captura(self, destino: str) -> str:
        """Captura la VENTANA entera (panel + 3D), no solo el render.

        `plotter.screenshot()` sale del tamaño del widget, que sin mostrar la
        ventana son unos pocos píxeles: el PNG salía de 60x40 y no se veía nada.
        Con `grabWindow` se leen los píxeles reales de la ventana ya dibujada.
        """
        self.plotter.render()
        pantalla = QtWidgets.QApplication.primaryScreen()
        pixmap = pantalla.grabWindow(int(self.winId()))
        pixmap.save(destino)
        return destino


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description="Abre un .heks en ventana Qt")
    ap.add_argument("heks", nargs="?", default=HEKS_POR_DEFECTO)
    ap.add_argument("--shot", metavar="PNG", help="captura y sale, sin ventana")
    ap.add_argument("--auto-quit-ms", type=int, default=0, help="cierra solo (tests)")
    args = ap.parse_args(argv)

    app = QtWidgets.QApplication.instance() or QtWidgets.QApplication(sys.argv[:1])
    app.setStyle("Fusion")
    win = VentanaHeks(args.heks)
    win.show()

    if args.shot:
        # La ventana tiene que estar DIBUJADA para que grabWindow lea píxeles.
        def _disparar():
            win.captura(args.shot)
            print(f"PNG: {args.shot}")
            print(win.texto.text())
            app.quit()

        QtCore.QTimer.singleShot(1200, _disparar)
        return app.exec_()

    if args.auto_quit_ms > 0:
        QtCore.QTimer.singleShot(args.auto_quit_ms, app.quit)
    return app.exec_()


if __name__ == "__main__":
    sys.exit(main())
