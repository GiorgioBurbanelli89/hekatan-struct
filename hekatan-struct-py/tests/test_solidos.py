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


def test_mixto_solido_muro_columna_vs_sap2000():
    """H8 + Q4 + barras en la misma K: 30 nudos vs SAP2000 24 (OAPI, mismos nudos,
    3-sep-2026). El WASM da lo mismo que Python a 8e-12 %."""
    import json
    f = os.path.join(AQUI, "..", "..", "tests", "datos", "mixto_solido_muro_columna.heks")
    sap = json.load(open(os.path.join(AQUI, "..", "..", "tests", "datos", "mixto_solido_muro_columna_sap.json")))["u"]
    m = leer_heks(f)
    assert m.errores == []
    r = resolver_heks(m)
    d = r.deformations
    umax = max(abs(v) for u in d.values() for v in u[:3])
    peor = max(abs(d[i][c] - sap[str(i + 1)][c]) / umax * 100 for i in d for c in range(3))
    assert peor < 0.02, peor
    rx = sum(v[0] for v in r.reactions.values())
    assert abs(rx + 10) < 1e-8


def test_mixto_modal_masa_h8():
    """La masa del H8 (rho*V/8 por nudo) en el modal: los 6 periodos de referencia
    (3-sep-2026; el WASM los da a 3e-7 %)."""
    import json
    from hekatan_struct.solver import modal_analysis
    f = os.path.join(AQUI, "..", "..", "tests", "datos", "mixto_solido_muro_columna.heks")
    ref = json.load(open(os.path.join(AQUI, "..", "..", "tests", "datos", "mixto_solido_muro_columna_modal_py.json")))["T"]
    m = leer_heks(f)
    r = modal_analysis(m.nodes, m.elements, m.node_inputs, m.element_inputs, 6)
    T = [1 / fr for fr in r.frequencies[:6]]
    assert max(abs(a / b - 1) for a, b in zip(T, ref)) < 1e-9
