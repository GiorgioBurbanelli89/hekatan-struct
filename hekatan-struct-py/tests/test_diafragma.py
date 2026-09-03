"""Diafragma rigido (`diaph ID grupo`) en el estatico de Python = el de deform.cpp:
portico de 1 planta con 10 kN en una esquina (tests/datos/portico_diaf.heks).
Los numeros del TS (tests/casos/diafragma_rigido.mjs, 3-sep-2026):
    ux = 2.7030e-4 (nudos 5 y 6), 9.1797e-5 (7 y 8);  rz = 3.570e-5 en los cuatro."""
import os

from hekatan_struct.heks import leer_heks, resolver_heks

AQUI = os.path.dirname(__file__)
HEKS = os.path.join(AQUI, "..", "..", "tests", "datos", "portico_diaf.heks")


def test_diafragma_rigido_como_el_wasm():
    m = leer_heks(HEKS)
    assert m.errores == []
    assert m.node_inputs.diaphragms == {4: 1, 5: 1, 6: 1, 7: 1}
    r = resolver_heks(m)
    d = r.deformations if hasattr(r, "deformations") else r["deformations"]
    ux = [d[n][0] for n in (4, 5, 6, 7)]
    rz = [d[n][5] for n in (4, 5, 6, 7)]
    assert abs(ux[0] / 2.703040e-4 - 1) < 1e-5 and abs(ux[1] / 2.703040e-4 - 1) < 1e-5
    assert abs(ux[2] / 9.179684e-5 - 1) < 1e-5 and abs(ux[3] / 9.179684e-5 - 1) < 1e-5
    assert max(rz) - min(rz) < 1e-12 * max(abs(x) for x in rz)       # rz iguales: solido rigido en planta
    assert abs(rz[0] / 3.570143e-5 - 1) < 1e-5
    # cinematica rigida: ux_i - ux_j = -(y_i - y_j) rz
    assert abs((ux[0] - ux[3]) - 5 * rz[0]) < 1e-12
    # equilibrio
    rx = sum(v[0] for v in r.reactions.values())
    assert abs(rx + 10) < 1e-9
