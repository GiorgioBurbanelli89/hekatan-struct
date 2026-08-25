"""El peso propio con end length offsets: la VIGA por su luz libre, la columna no.

`SelfWtOpt = Auto` en ETABS = el programa decide, y lo que decide está medido:

* pórtico mínimo (`galpon-bodega-electoral/test_offsets_masa.py`, 2026-08-15):
  viga 6.00 m con offsets de 0.20 → razón **0.933333 = 5.60/6.00**;
  columna 3.00 m con offset de 0.25 arriba → razón **1.000000**.
* galpón real, sección `2L-40-CAJON`, que sale en las tres familias:
  `w = 0.04531` kN/m como Beam contra `0.04741` como Column y como Brace.
* el corte Beam/Brace está en **20.00°** exactos (`_umbral_angulo_exacto.py`).
"""
import numpy as np
import pytest

from hekatan_struct import NodeInputs, ElementInputs, apply_selfweight
from hekatan_struct.elements.frame import (
    frame_design_orientation_csi, frame_self_weight_length,
)

LUZ, ALT = 6.00, 3.00
COL_B, VIG_H = 0.40, 0.50
RHO = 7.849            # t/m³ (ρ·g ≈ 78 kN/m³)


def test_umbral_beam_brace_20_grados():
    """19.75° → Beam, 20.00° → Brace. Medido en ETABS, no heredado."""
    for ang, esperado in ((0.0, "Beam"), (10.0, "Beam"), (19.75, "Beam"),
                          (20.0, "Brace"), (39.5, "Brace")):
        dz = 10.0 * np.tan(np.radians(ang))
        assert frame_design_orientation_csi((0, 0, 0), (10.0, 0, dz)) == esperado, ang
    assert frame_design_orientation_csi((0, 0, 0), (0, 0, 3.0)) == "Column"


def test_longitud_de_peso_viga_y_columna():
    o = COL_B / 2                      # brazo automático = media dimensión del apoyo
    L_viga = frame_self_weight_length((0, 0, ALT), (LUZ, 0, ALT), o, o)
    assert L_viga == pytest.approx(LUZ - COL_B)          # 5.60
    assert L_viga / LUZ == pytest.approx(0.933333, abs=1e-6)

    L_col = frame_self_weight_length((0, 0, 0), (0, 0, ALT), 0.0, VIG_H / 2)
    assert L_col == pytest.approx(ALT)                   # la columna NO descuenta
    # y una diagonal a 39.5° tampoco
    L_bra = frame_self_weight_length((0, 0, 0), (10.0, 0, 8.25), 0.3, 0.3)
    assert L_bra == pytest.approx(np.hypot(10.0, 8.25))


def test_selfweight_descuenta_solo_en_la_viga():
    nodes = [(0, 0, 0), (0, 0, ALT), (LUZ, 0, ALT), (LUZ, 0, 0)]
    elements = [[0, 1], [1, 2], [3, 2]]          # columna, VIGA, columna
    A = 0.15
    ei = ElementInputs(
        areas={k: A for k in range(3)},
        densities={k: RHO for k in range(3)},
        end_offsets={0: (0.0, VIG_H / 2, 0.0),
                     1: (COL_B / 2, COL_B / 2, 0.0),
                     2: (0.0, VIG_H / 2, 0.0)},
    )
    ni = NodeInputs()
    apply_selfweight(nodes, elements, ei, ni)
    W = -sum(v[2] for v in ni.loads.values())
    g = 9.80665
    W_esperado = A * RHO * g * (ALT + (LUZ - COL_B) + ALT)
    assert W == pytest.approx(W_esperado, rel=1e-12)

    # sin offsets pesa de más: exactamente el tramo de la viga
    ni2 = NodeInputs()
    apply_selfweight(nodes, elements, ElementInputs(
        areas=ei.areas, densities=ei.densities), ni2)
    W2 = -sum(v[2] for v in ni2.loads.values())
    assert W2 - W == pytest.approx(A * RHO * g * COL_B, rel=1e-12)
