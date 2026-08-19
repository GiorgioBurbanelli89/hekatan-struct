# -*- coding: utf-8 -*-
"""La matriz del elemento en C++ NATIVO contra la de Python, término a término.

Por qué esta comparación y no otra: un desplazamiento es la matriz ya resuelta y
mezclada con apoyos y cargas. Si sale mal, no dice DÓNDE. La matriz sí.

Y por qué el binario NATIVO (g++) y no el WASM: porque compila en dos segundos,
se depura con gdb, y de paso comprueba que emscripten no mete nada de su
cosecha. Es el ciclo de trabajo que se usa aquí:

    Python (iterar rápido)  →  .cpp  →  g++  →  esta comparación  →  emcc  →  suite

Si este test falla, el C++ y el Python han dejado de ser el mismo elemento, y
cualquier conclusión sacada en Python deja de valer para el producto.

Se salta solo si el .exe no está compilado:

    bash cli/native/build_kelem_native.sh
"""
import os
import subprocess

import numpy as np
import pytest

from hekatan_struct.elements.membrane_itw import k_membrana_itw

AQUI = os.path.dirname(os.path.abspath(__file__))
EXE = os.path.abspath(os.path.join(AQUI, "..", "..", "cli", "native", "kelem_native.exe"))

# GDL u, v, theta_z de cada nudo dentro de la K 24x24 del shell
GDL_MEMBRANA = [6 * i + k for i in range(4) for k in (0, 1, 5)]

GEOMETRIAS = [
    ("cuadrado", [(0, 0), (1, 0), (1, 1), (0, 1)]),
    ("rectangulo", [(0, 0), (2, 0), (2, 0.5), (0, 0.5)]),
    ("paralelogramo", [(0, 0), (1, 0), (1.4, 0.9), (0.4, 0.9)]),
    ("trapecio", [(0, 0), (2, 0), (1.5, 1), (0.25, 1)]),
]


def _k_nativa(pts, E, nu, t, tipo_drill=3, gamma=0.4):
    args = [EXE]
    for (x, y) in pts:
        args += [str(x), str(y), "0"]
    args += [str(E), str(nu), str(t), str(tipo_drill), str(gamma)]
    salida = subprocess.run(args, capture_output=True, text=True, timeout=120)
    if salida.returncode != 0:
        raise RuntimeError(salida.stderr[:200])
    return np.array([[float(v) for v in ln.split()]
                     for ln in salida.stdout.strip().splitlines()])


@pytest.mark.skipif(not os.path.exists(EXE),
                    reason="falta cli/native/kelem_native.exe (bash cli/native/build_kelem_native.sh)")
@pytest.mark.parametrize("nombre,pts", GEOMETRIAS)
def test_membrana_cpp_nativo_igual_que_python(nombre, pts):
    """El bloque [u, v, theta_z] tiene que coincidir hasta el ruido de coma flotante."""
    E, nu, t = 2.2e7, 0.2, 0.20
    Kc = _k_nativa(pts, E, nu, t)[np.ix_(GDL_MEMBRANA, GDL_MEMBRANA)]
    Kp = k_membrana_itw(pts, E, nu, t, gamma_fac=0.4)
    rel = np.linalg.norm(Kc - Kp) / np.linalg.norm(Kp)
    assert rel < 1e-10, f"{nombre}: C++ y Python difieren {rel*100:.3e} %"


@pytest.mark.skipif(not os.path.exists(EXE), reason="falta kelem_native.exe")
def test_la_matriz_nativa_es_simetrica_y_sin_energia_en_solido_rigido():
    """Comprobaciones que no dependen de Python: valen por sí solas."""
    pts = [(0, 0), (2, 0), (1.5, 1), (0.25, 1)]
    K = _k_nativa(pts, 2.2e7, 0.2, 0.20)
    assert K.shape == (24, 24)
    assert np.allclose(K, K.T, rtol=0, atol=1e-6 * np.abs(K).max())
    # traslación en x y en y del bloque de membrana: energía nula
    R = np.zeros((24, 2))
    for i in range(4):
        R[6 * i + 0, 0] = 1.0
        R[6 * i + 1, 1] = 1.0
    assert np.linalg.norm(K @ R) < 1e-6 * np.linalg.norm(K)


@pytest.mark.skipif(not os.path.exists(EXE), reason="falta kelem_native.exe")
def test_el_tipo_de_drilling_del_cli_manda():
    """Cambiar `tipoDrilling` tiene que cambiar la matriz.

    Si no cambiara, el CLI estaría ignorando el argumento y las iteraciones que
    se hicieran con él no medirían nada — que es justo la clase de fallo
    silencioso que hay que impedir.
    """
    pts = [(0, 0), (1, 0), (1, 1), (0, 1)]
    itw = _k_nativa(pts, 2.2e7, 0.2, 0.20, tipo_drill=3)
    hb = _k_nativa(pts, 2.2e7, 0.2, 0.20, tipo_drill=2)
    assert np.linalg.norm(itw - hb) > 1e-6 * np.linalg.norm(itw)
