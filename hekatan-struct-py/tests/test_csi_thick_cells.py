# -*- coding: utf-8 -*-
"""La placa gruesa de CSI (`plate_csi_thick.py`) contra la K MEDIDA de
ETABS/SAP2000 (celda a celda, `k_directa.json`): cuadrado con nu, nu=0,
rectangulo y cuadrilatero irregular. Arbitro = el programa real, no una cuenta."""
import json, os
import numpy as np
import pytest
from hekatan_struct.elements.plate_csi_thick import k_placa_csi_thick, modos_nulos
from hekatan_struct.elements.shell_q4_motor import shell_q4_motor, DOF_BEN
import hekatan_struct.elements.shell_q4_motor as M

AQUI = os.path.dirname(os.path.abspath(__file__))
KD = os.path.join(AQUI, "..", "..", "validation", "02-placas", "dse-de-wilson", "k_directa.json")


def _celdas():
    d = json.load(open(KD))
    return [(nm, c) for nm, c in d.items() if "thin" not in nm]


@pytest.mark.parametrize("nm,c", _celdas(), ids=[nm for nm, _ in _celdas()])
def test_celda_medida(nm, c):
    pts = c["pts"]
    K = k_placa_csi_thick([p[0] for p in pts], [p[1] for p in pts], c["E"], c["nu"], c["t"])
    Km = np.array(c["K"])
    assert 100 * np.linalg.norm(K - Km) / np.linalg.norm(Km) < 1e-8


def test_rango():
    assert modos_nulos([(0, 0), (1, 0), (1, 1), (0, 1)]) == 3
    assert modos_nulos([(0, 0), (1, 0), (0.8, 0.9), (0.15, 1)]) == 3


def test_motor_usa_la_placa_csi():
    """El bloque de flexion del Q4 del motor (thick) ES la placa de CSI."""
    assert M.PLACA_THICK == "csi"
    pts = [(0, 0), (1, 0), (0.8, 0.9), (0.15, 1)]
    K24 = shell_q4_motor(np.array(pts, float), 2.2e7, 0.2, 0.2)
    Kb = K24[np.ix_(DOF_BEN, DOF_BEN)]
    Kp = k_placa_csi_thick([p[0] for p in pts], [p[1] for p in pts], 2.2e7, 0.2, 0.2)
    assert np.allclose(Kb, Kp, rtol=1e-12, atol=1e-9 * np.abs(Kp).max())
