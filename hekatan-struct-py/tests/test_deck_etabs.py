# -*- coding: utf-8 -*-
"""`deck etabs` (deck_etabs.py): reparto tributario y partido de panos, contra valores cerrados.

  - Rectangulo a x b, dos direcciones (bisectrices): bordes largos q*b/2*(a - b/2), cortos q*b^2/4.
  - Un sentido (`oneway`): los dos bordes de apoyo reciben q*a*b/2 cada uno y los otros dos nada.
  - Un .heks con una franja de 12 m que cruza una viga en x = 6 se parte en 2 sub-panos sin
    inventar nudos, y su peso va a las barras de borde (el peso total no cambia).
"""
import os, tempfile
import numpy as np
import pytest

from hekatan_struct.deck_etabs import muestras_tributarias
from hekatan_struct.heks import leer_heks


def _cargas(P, span=None):
    return [dA * len(pts) for pts, dA in muestras_tributarias(np.array(P, float), 200, span)]


def test_rectangulo_dos_direcciones():
    a, b = 12.0, 1.0
    P = [[0, 0, 0], [a, 0, 0], [a, b, 0], [0, b, 0]]
    W = _cargas(P)
    esp_largo, esp_corto = b / 2 * (a - b / 2), b * b / 4
    assert abs(W[0] - esp_largo) < 0.01 * esp_largo and abs(W[2] - esp_largo) < 0.01 * esp_largo
    assert abs(W[1] - esp_corto) < 0.05 * esp_corto and abs(W[3] - esp_corto) < 0.05 * esp_corto
    assert abs(sum(W) - a * b) < 1e-9


def test_rectangulo_un_sentido():
    a, b = 6.0, 1.0
    P = [[0, 0, 0], [a, 0, 0], [a, b, 0], [0, b, 0]]
    W = _cargas(P, span=np.array([0.0, 1.0, 0.0]))       # vano en Y: apoya en los bordes largos (y = 0, y = b)
    assert abs(W[0] - a * b / 2) < 1e-9 and abs(W[2] - a * b / 2) < 1e-9
    assert W[1] == 0 and W[3] == 0
    W = _cargas(P, span=np.array([1.0, 0.0, 0.0]))       # vano en X: apoya en los cortos
    assert abs(W[1] - a * b / 2) < 1e-9 and abs(W[3] - a * b / 2) < 1e-9


HEKS = """
node 1 0 0 0
node 2 6 0 0
node 3 12 0 0
node 4 0 1 0
node 5 6 1 0
node 6 12 1 0
support 1 fixed
support 2 fixed
support 3 fixed
support 4 fixed
support 5 fixed
support 6 fixed
frame 1 1 2 25e6 0.15 0.001125 0.0028125 2.6e-3 0.2 2.45
frame 2 2 3 25e6 0.15 0.001125 0.0028125 2.6e-3 0.2 2.45
frame 3 4 5 25e6 0.15 0.001125 0.0028125 2.6e-3 0.2 2.45
frame 4 5 6 25e6 0.15 0.001125 0.0028125 2.6e-3 0.2 2.45
frame 5 2 5 25e6 0.15 0.001125 0.0028125 2.6e-3 0.2 2.45
shell 1 1 3 6 4 0.065 24855600 0 3.84615
shellmod 1 1 1 1 0 0 0 1 1
selfweight 1
{directiva}
solve
"""


def _leer(directiva):
    fd, ruta = tempfile.mkstemp(suffix=".heks"); os.close(fd)
    with open(ruta, "w", encoding="utf-8") as fh:
        fh.write(HEKS.format(directiva=directiva))
    try:
        return leer_heks(ruta)
    finally:
        os.remove(ruta)


def test_heks_parte_y_reparte():
    sin = _leer("")
    con = _leer("deck etabs")
    n_sh = lambda m: sum(1 for e in m.elements if len(e) == 4)
    assert n_sh(sin) == 1 and n_sh(con) == 2            # cortada en la viga de x = 6
    assert len(con.nodes) == len(sin.nodes) == 6         # sin nudos nuevos
    peso = lambda m: -sum(v[2] for v in m.node_inputs.loads.values())
    assert abs(peso(sin) - peso(con)) < 1e-9             # el peso total no cambia
    # sin directiva el pano pesa en sus 4 esquinas: el nudo 2 (x = 6, solo barras) no recibe deck;
    # con directiva las vigas de borde (1-2, 2-3) se lo llevan y el nudo 2 si recibe
    i2 = sin.node_id.index(2)
    W_pano = 0.065 * 3.84615 * 9.80665 * 12.0
    assert sin.node_inputs.loads[i2][2] > con.node_inputs.loads[i2][2]
    assert con.node_inputs.loads[i2][2] < -W_pano / 4     # mas de un cuarto del pano cae en x = 6 (mitad del borde largo x 2)
