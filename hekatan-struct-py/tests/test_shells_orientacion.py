"""Shells: losa, deck y MURO. Y cuanto se separan Python y el TS.

Dos cosas distintas y conviene no mezclarlas:

1. **Invariancia** — la misma placa, girada en el espacio, tiene que dar la
   misma flecha. Eso no necesita ningun otro programa: es geometria. Es la
   prueba que caza el bug de "solo funciona horizontal", y es la que da por
   bueno el muro vertical.
2. **Paridad con el TS** — que ademas de correcto sea EL MISMO elemento que el
   motor. Aqui NO lo es, y el test lo deja medido en vez de callarlo.
"""
import json
import math
import subprocess
import sys
from pathlib import Path

import numpy as np
import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from hekatan_struct import ElementInputs, NodeInputs, deform  # noqa: E402
from hekatan_struct.elements.shell import shell_q4_local_axes  # noqa: E402

AQUI = Path(__file__).resolve().parent
RAIZ = AQUI.parents[1]
E, NU, T = 25e6, 0.2, 0.20        # hormigon, losa de 20 cm


def _malla(nx, ny, Lx, Ly, punto):
    """Malla nx×ny de un rectangulo Lx×Ly, colocada por `punto(u, v)`."""
    nodes, idx = [], {}
    for i in range(nx + 1):
        for j in range(ny + 1):
            idx[(i, j)] = len(nodes)
            nodes.append(tuple(punto(Lx * i / nx, Ly * j / ny)))
    elements = [[idx[(i, j)], idx[(i + 1, j)], idx[(i + 1, j + 1)], idx[(i, j + 1)]]
                for i in range(nx) for j in range(ny)]
    return nodes, elements, idx


def _resolver(nodes, elements, idx, nx, ny, carga_dir):
    ei = ElementInputs()
    for k in range(len(elements)):
        ei.elasticities[k] = E
        ei.poissons_ratios[k] = NU
        ei.thicknesses[k] = T
    # empotrada en los cuatro bordes
    sup = {}
    for i in range(nx + 1):
        for j in range(ny + 1):
            if i in (0, nx) or j in (0, ny):
                sup[idx[(i, j)]] = (True,) * 6
    centro = idx[(nx // 2, ny // 2)]
    ni = NodeInputs(supports=sup,
                    loads={centro: tuple(carga_dir) + (0.0, 0.0, 0.0)})
    res = deform(nodes, elements, ni, ei)
    return res.deformations[centro], res


# ═══════════════════════════════════════════════════════════════════════════
# 1. Invariancia: la misma placa en tres orientaciones
# ═══════════════════════════════════════════════════════════════════════════
def test_losa_muro_y_rampa_dan_la_misma_flecha():
    """Misma placa, tres orientaciones, misma carga perpendicular → misma flecha.

    Es geometria, no formulacion: si el elemento esta bien planteado el
    resultado no puede depender de como este puesto en el espacio.

    Antes esto era imposible de pasar: la K se armaba con las X,Y GLOBALES, asi
    que el MURO (plano XZ) se proyectaba a una linea, el jacobiano salia 0 y la
    matriz, basura.
    """
    nx, ny, Lx, Ly, P = 6, 6, 6.0, 4.0, 100.0
    s2 = 1 / math.sqrt(2)
    casos = {
        # losa horizontal: normal +Z, carga en −Z
        "losa": (lambda u, v: (u, v, 0.0), (0.0, 0.0, -P)),
        # muro vertical en el plano XZ: normal −Y, carga en +Y
        "muro": (lambda u, v: (u, 0.0, v), (0.0, P, 0.0)),
        # rampa a 45°: normal en el plano YZ
        "rampa": (lambda u, v: (u, v * s2, v * s2), (0.0, P * s2, -P * s2)),
    }
    flechas = {}
    for nombre, (pt, carga) in casos.items():
        nodes, elements, idx = _malla(nx, ny, Lx, Ly, pt)
        d, _ = _resolver(nodes, elements, idx, nx, ny, carga)
        # componente de la flecha en la direccion de la carga
        u = np.array(carga[:3]) / np.linalg.norm(carga[:3])
        flechas[nombre] = float(np.dot(d[:3], u))

    ref = flechas["losa"]
    assert abs(ref) > 1e-9, "la losa no se movio: el caso no prueba nada"
    for nombre, v in flechas.items():
        assert abs(v - ref) / abs(ref) < 1e-9, (
            "%s = %.9e vs losa %.9e (dif %.2e) — el elemento depende de la "
            "orientacion" % (nombre, v, ref, abs(v - ref) / abs(ref)))


def test_muro_vertical_tiene_rigidez_en_su_plano():
    """Un muro cargado EN SU PLANO trabaja por membrana: mucho mas rigido.

    Sirve de control del test anterior: si el muro diera lo mismo cargado de
    canto que perpendicular, es que la triada local no esta separando membrana
    de flexion.
    """
    nx, ny = 6, 6
    nodes, elements, idx = _malla(nx, ny, 6.0, 4.0, lambda u, v: (u, 0.0, v))
    perp, _ = _resolver(nodes, elements, idx, nx, ny, (0.0, 100.0, 0.0))
    plano, _ = _resolver(nodes, elements, idx, nx, ny, (100.0, 0.0, 0.0))
    razon = abs(perp[1]) / abs(plano[0])
    # Medido: 38. El umbral es un orden de magnitud, no un valor calibrado —
    # lo que se comprueba es que membrana y flexion NO son la misma cosa.
    assert razon > 20, (
        "perpendicular %.3e vs en el plano %.3e (razon %.1f): el muro no "
        "distingue flexion de membrana" % (perp[1], plano[0], razon))


def test_triada_local_es_ortonormal_y_dextrogira():
    """La R del paño tiene que ser una rotacion de verdad, en cualquier plano."""
    for pt in (lambda u, v: (u, v, 0.0),
               lambda u, v: (u, 0.0, v),
               lambda u, v: (0.0, u, v),
               lambda u, v: (u, v, 0.3 * u + 0.2 * v)):
        p = np.array([pt(0, 0), pt(3, 0), pt(3, 2), pt(0, 2)], float)
        R, xy = shell_q4_local_axes(p)
        assert np.allclose(R @ R.T, np.eye(3), atol=1e-12)
        assert abs(np.linalg.det(R) - 1.0) < 1e-12
        # El area en locales tiene que ser la REAL del paño en el espacio, no
        # la proyectada: en el plano inclinado sale 6.378, no 6. Se compara
        # contra el modulo del producto vectorial de las diagonales, que es la
        # definicion, en vez de contra un 6 escrito a mano.
        x, y = xy[:, 0], xy[:, 1]
        area = 0.5 * abs((x[0] - x[2]) * (y[1] - y[3]) - (x[1] - x[3]) * (y[0] - y[2]))
        real = 0.5 * np.linalg.norm(np.cross(p[2] - p[0], p[3] - p[1]))
        assert abs(area - real) < 1e-9, (area, real)


# ═══════════════════════════════════════════════════════════════════════════
# 2. Paridad con el TS — medida, no supuesta
# ═══════════════════════════════════════════════════════════════════════════
def _oraculo(caso):
    if not (RAIZ / "node_modules" / "esbuild").exists():
        pytest.skip("faltan los node_modules de hekatan-struct")
    import tempfile
    with tempfile.TemporaryDirectory() as td:
        ent, sal = Path(td) / "c.json", Path(td) / "s.json"
        ent.write_text(json.dumps({"c": caso}), encoding="utf-8")
        r = subprocess.run(["node", str(AQUI / "oraculo_ts.mjs"), str(ent), str(sal)],
                           capture_output=True, text=True, cwd=str(RAIZ))
        if r.returncode != 0:
            pytest.skip("oraculo TS no disponible: %s" % (r.stderr or "")[:300])
        return json.loads(sal.read_text(encoding="utf-8"))["c"]


def test_shell_q4_python_es_el_del_ts():
    """El Q4 de Python ES el del motor. Antes no lo era; ahora se exige.

    Se porto `shellQ4.ts` entero a `elements/shell_q4_motor.py`, con las tres
    piezas que faltaban:
      · membrana Q6 con modos incompatibles de Wilson + condensacion estatica
        (sin ellos el paño no puede flectar en su plano: es el locking que
        hacia salir el MURO rigidisimo),
      · cortante MITC4 con los cuatro puntos de atadura, en vez de integracion
        reducida de 1 punto,
      · drilling de Hughes-Brezzi (α = 0.5), que ACOPLA θz con u,v, en vez de
        un penalty suelto en la diagonal.
    """
    nx, ny = 4, 4
    nodes, elements, idx = _malla(nx, ny, 6.0, 4.0, lambda u, v: (u, v, 0.0))
    sup = {idx[(i, j)]: [True] * 6 for i in range(nx + 1) for j in range(ny + 1)
           if i in (0, nx) or j in (0, ny)}
    centro = idx[(nx // 2, ny // 2)]
    caso = dict(nodes=[list(p) for p in nodes], elements=elements,
                supports=sup, loads={centro: [0, 0, -100, 0, 0, 0]},
                elasticities={k: E for k in range(len(elements))},
                poissonsRatios={k: NU for k in range(len(elements))},
                thicknesses={k: T for k in range(len(elements))})
    ts = _oraculo(caso)

    ei = ElementInputs()
    for k in range(len(elements)):
        ei.elasticities[k] = E
        ei.poissons_ratios[k] = NU
        ei.thicknesses[k] = T
    ni = NodeInputs(supports={k: tuple(v) for k, v in sup.items()},
                    loads={centro: (0, 0, -100, 0, 0, 0)})
    py = deform(nodes, elements, ni, ei).deformations[centro][2]
    ts_uz = ts["deformations"][str(centro)][2]

    dif = abs(py - ts_uz) / abs(ts_uz)
    print("\n  losa 4x4, flecha en el centro:  Python %.6e   TS %.6e   dif %.2e"
          % (py, ts_uz, dif))
    assert dif < 1e-10, (
        "el Q4 de Python se separo del motor: Python %.9e vs TS %.9e "
        "(dif %.2e)" % (py, ts_uz, dif))
