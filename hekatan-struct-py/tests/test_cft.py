"""Columna CFT (tubo de acero relleno) contra SAP2000 (Section Designer) y ETABS
(Filled Steel Tube), medidos por OAPI el 2-sep-2026 (kN, m):

    SAP2000-SD  ux = 2.0092648e-3   uz = -7.0093458e-5   As2 0.015443  J 3.8019e-4
    ETABS-FST   ux = 2.0093370e-3   uz = -7.0093458e-5   As2 0.015399  J 3.7951e-4

y contra el motor TS (cadSections.cftSectionEc): mismos numeros a 1e-9.
"""
import os

import pytest

from hekatan_struct.cft import cft_props
from hekatan_struct.heks import leer_heks, resolver_heks

AQUI = os.path.dirname(__file__)
HEKS = os.path.join(AQUI, "..", "..", "tests", "datos", "cft_columna.heks")

SAP_SD = {"ux": 2.0092648299443946e-3, "uz": -7.009345794392525e-5, "A": 0.0214, "I33": 2.2681333333333335e-4,
          "As2": 0.01544280234219385, "J": 3.801876505367077e-4}
ETABS_FST = {"ux": 2.0093369728673978e-3, "As2": 0.015398813503213931, "J": 3.795127361886323e-4}
TS = {"A": 0.0214, "I33": 2.268133333e-4, "As2": 0.01536463101, "J": 3.79355940e-4, "ux": 2.009393318e-3}


def pct(a, b):
    return abs(a - b) / abs(b) * 100


def test_propiedades_cft_como_csi():
    c = cft_props(0.3, 0.3, 0.01, 2e8, 0.3, 2.5e7, 0.2)
    assert pct(c["A"], SAP_SD["A"]) < 1e-9
    assert pct(c["I33"], SAP_SD["I33"]) < 1e-9
    assert pct(c["As2"], SAP_SD["As2"]) < 1.0          # Timoshenko: 0.5 % (los dos CSI se separan 0.3 %)
    assert pct(c["J"], SAP_SD["J"]) < 1.0              # Saint-Venant: 0.2 %
    assert pct(c["J"], ETABS_FST["J"]) < 0.5
    # y es el MISMO numero que el TS
    assert pct(c["As2"], TS["As2"]) < 1e-6
    assert pct(c["J"], TS["J"]) < 1e-6


def test_columna_cft_vs_sap2000_y_etabs():
    m = leer_heks(HEKS)
    assert m.errores == []
    res = resolver_heks(m)
    u = res.deformations[1] if hasattr(res, "deformations") else res["deformations"][1]
    assert pct(u[0], SAP_SD["ux"]) < 0.3
    assert pct(u[0], ETABS_FST["ux"]) < 0.3
    assert pct(u[2], SAP_SD["uz"]) < 1e-4
    assert pct(u[0], TS["ux"]) < 1e-5
