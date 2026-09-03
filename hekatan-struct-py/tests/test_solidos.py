"""Hexaedros H8 en el .heks (`hex`) resueltos por el motor de Python: el muro de
contencion (612 nudos, 330 H8) contra SAP2000 (SD con modos incompatibles:
u_x coronacion -2.621654 mm; sin modos -2.354258 mm) y contra el WASM (mismos
numeros que hex8_wasm.cpp)."""
import os

from hekatan_struct.heks import leer_heks, resolver_heks

AQUI = os.path.dirname(__file__)
HEKS = os.path.join(AQUI, "..", "..", "tests", "datos", "muro_solido.heks")
NUDO_CORONACION = 605          # 0-based (malla.ts: nudoCoronacion)
SAP_INC, SAP_NOINC = -2.621654e-3, -2.354258e-3


def pct(a, b):
    return abs(a - b) / abs(b) * 100


def _ux(texto):
    tmp = os.path.join(AQUI, "_tmp_muro.heks")
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(texto)
    try:
        m = leer_heks(tmp)
        assert m.errores == [], m.errores
        res = resolver_heks(m)
        u = res.deformations[NUDO_CORONACION] if hasattr(res, "deformations") else res["deformations"][NUDO_CORONACION]
        return u[0], m
    finally:
        os.remove(tmp)


def test_muro_solido_con_modos_incompatibles_es_sap2000():
    ux, m = _ux(open(HEKS, encoding="utf-8").read())
    assert sum(1 for e in m.elements if len(e) == 8) == 330
    assert pct(ux, SAP_INC) < 1e-5


def test_muro_solido_sin_modos_es_sap2000_sin_modos():
    ux, _ = _ux("incompatible 0\n" + open(HEKS, encoding="utf-8").read())
    assert pct(ux, SAP_NOINC) < 1e-4      # la referencia de SAP viene con 7 cifras
