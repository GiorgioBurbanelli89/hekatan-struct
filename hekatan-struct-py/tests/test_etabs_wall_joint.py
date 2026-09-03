# -*- coding: utf-8 -*-
"""La union viga-muro de ETABS (`etabsjoint 1`), medida el 2-sep-2026.

ETABS 22 ata el giro drilling de un nudo de MURO donde entra una barra al giro
de la arista horizontal: c*(w_h - w_n - theta*(x_h - x_n))^2, c = E*t*(H/L)^3/32.
Sin la ley Hekatan = SAP2000 (5.802662e-4); con la ley Hekatan = ETABS
(5.359904e-4) en el drilling-dof (2 muros 2x4 + viga de acople, 92 nudos).
Arbitros: SAP2000 24 y ETABS 22 por OAPI, misma malla (galpon-bodega-electoral/
sap_drilling.py, etabs_drilling_oapi.py, ley_etabs.py)."""
from pathlib import Path

import pytest

from hekatan_struct.heks import leer_heks, resolver_heks

DATOS = Path(__file__).resolve().parents[2] / "tests" / "datos"
HEKS = DATOS / "drilling_dof_muros.heks"
SAP2000_UX = 5.802662e-4
ETABS_UX = 5.359904e-4


def _ux_max(texto):
    p = HEKS.parent / "_tmp_etabsjoint.heks"
    p.write_text(texto, encoding="utf-8")
    try:
        m = leer_heks(str(p))
        r = resolver_heks(m)
    finally:
        p.unlink(missing_ok=True)
    return max((d[0] for d in r.deformations.values()), key=abs), m


@pytest.mark.skipif(not HEKS.exists(), reason="falta drilling_dof_muros.heks")
def test_sin_ley_es_sap2000():
    # la union va ENCENDIDA por defecto desde el 3-sep-2026: el modo SAP2000 se pide con `etabsjoint 0`
    ux, m = _ux_max("etabsjoint 0\n" + HEKS.read_text(encoding="utf-8"))
    assert not m.element_inputs.etabs_wall_joint
    assert abs(ux / SAP2000_UX - 1) < 1e-6


@pytest.mark.skipif(not HEKS.exists(), reason="falta drilling_dof_muros.heks")
def test_con_ley_es_etabs():
    ux, m = _ux_max("etabsjoint 1\n" + HEKS.read_text(encoding="utf-8"))
    assert m.element_inputs.etabs_wall_joint
    assert abs(ux / ETABS_UX - 1) < 1e-6
