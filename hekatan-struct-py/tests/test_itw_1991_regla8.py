# -*- coding: utf-8 -*-
"""La regla de OCHO puntos del ITW 1991 — ec. (30).

Por que importa este archivo: durante dias se leyo el `1/sqrt(3)` que carga
`CsiGo2.dll` como «SAPFire integra a Gauss 2x2». Era falso. Es la `alpha` de la
regla de ocho puntos de la ec. (30) del paper de **1991** (el que cita el manual
de CSI), evaluada con `W_alpha` cerca de 1. Los dos numeros coinciden porque

    alpha(W_alpha = 1) = 1/(9*1)^(1/4) = 9^(-1/4) = 1/sqrt(3)

y por eso la lectura equivocada encajaba con la evidencia. Estos tests fijan la
diferencia para que no se vuelva a confundir:

  * la regla es una CUADRATURA de verdad (integra exacto 1, r^2 y r^2 s^2);
  * con ella el elemento tiene TRES modos nulos, y con 2x2 de verdad tiene
    CUATRO — que es justo lo que el paper promete: *«has a similar effect […] as
    the 2x2 Gaussian quadrature but does not produce a rank-deficient matrix»*;
  * el patch test de orden superior sigue saliendo EXACTO.

Extraccion del paper: `registros/itw_1991/ITW_1991.md`.
"""
import numpy as np
import pytest

from hekatan_struct.benchmarks_itw import test_i_patch
from hekatan_struct.elements.membrane_itw import modos_nulos, puntos_itw8

# Lo que `CsiGo2.dll` carga ocho veces en la zona del shell.
CONSTANTE_DEL_BINARIO = 0.5773502691896258

GEOMETRIAS = [
    ("cuadrado", [(0, 0), (1, 0), (1, 1), (0, 1)]),
    ("rectangulo", [(0, 0), (2, 0), (2, 0.5), (0, 0.5)]),
    ("trapecio", [(0, 0), (2, 0), (1.5, 1), (0.25, 1)]),
    ("paralelogramo", [(0, 0), (1, 0), (1.4, 0.9), (0.4, 0.9)]),
]

ITW8 = dict(regla="itw8", con_burbuja=False)


@pytest.mark.parametrize("w_alpha", [1.0, 0.999, 0.99, 0.95, 0.9])
def test_la_regla_integra_lo_que_dice_integrar(w_alpha):
    """Suma de pesos = area, y exacta en `r^2` y `r^2 s^2`.

    Las dos formulas de la ec. (30) salen precisamente de imponer estas dos
    ultimas condiciones, asi que si fallan es que la formula esta mal escrita.
    """
    P = puntos_itw8(w_alpha)
    assert len(P) == (4 if w_alpha == 1.0 else 8)
    assert sum(w for _, _, w in P) == pytest.approx(4.0, abs=1e-12)
    assert sum(w * r * r for r, _, w in P) == pytest.approx(4.0 / 3.0, abs=1e-12)
    assert sum(w * r * r * s * s for r, s, w in P) == pytest.approx(4.0 / 9.0, abs=1e-12)
    # simetrica: los impares se van
    assert sum(w * r for r, _, w in P) == pytest.approx(0.0, abs=1e-12)
    assert sum(w * r ** 3 * s for r, s, w in P) == pytest.approx(0.0, abs=1e-12)


def test_el_1_sobre_raiz_3_del_binario_es_la_alpha_de_la_ec_30():
    """`alpha(W_alpha = 1)` es, al ultimo bit, la constante del binario de CSI.

    Es la razon de que durante dias se creyera que SAPFire integraba a 2x2.
    """
    alpha = puntos_itw8(1.0)[0][0]
    assert abs(alpha) == CONSTANTE_DEL_BINARIO
    # y `beta` desaparece: con W_beta = 0 los cuatro puntos extra no existen
    assert len(puntos_itw8(1.0)) == 4


@pytest.mark.parametrize("nombre,pts", GEOMETRIAS)
def test_ocho_puntos_da_tres_modos_nulos_y_dos_por_dos_da_cuatro(nombre, pts):
    """La promesa del paper, medida: mismo efecto que 2x2 pero sin perder rango."""
    assert modos_nulos(pts, n_gauss=2) == 4, f"{nombre}: 2x2 deberia ser mecanismo"
    for wa in (0.999, 0.99, 0.95):
        n = modos_nulos(pts, w_alpha=wa, **ITW8)
        assert n == 3, f"{nombre}: con W_alpha={wa} salen {n} modos nulos, no 3"


@pytest.mark.parametrize("w_alpha", [0.999, 0.99, 0.95])
def test_el_patch_test_sigue_exacto_con_la_regla_de_ocho_puntos(w_alpha):
    """*«Both the triangular and the quadrilateral shell elements pass the patch test»*.

    Flexion pura: la respuesta no es aproximada, es 1.5 y 0.6 exactos. Un
    elemento que no los da esta mal formulado, y refinar la malla no lo arregla.
    """
    flecha, giro = test_i_patch(6, w_alpha=w_alpha, **ITW8)
    assert flecha == pytest.approx(1.5, rel=1e-9)
    assert giro == pytest.approx(0.6, rel=1e-9)


def test_el_resultado_no_depende_de_w_alpha():
    """El paper dice «close to 1» y no fija el valor. Aqui se ve por que: da igual.

    Importa porque `W_alpha` fue el candidato inmediato a explicar el 16 % que
    separa nuestra matriz de la 12x12 medida de ETABS. No puede serlo: mover
    `W_alpha` de 0.95 a 0.999 no cambia el resultado ni en la sexta cifra, asi
    que la diferencia esta en otro sitio.
    """
    vals = [test_i_patch(6, w_alpha=wa, **ITW8) for wa in (0.95, 0.99, 0.999)]
    for f, g in vals[1:]:
        assert f == pytest.approx(vals[0][0], rel=1e-10)
        assert g == pytest.approx(vals[0][1], rel=1e-10)


def test_la_regla_de_gauss_no_cambio():
    """El defecto sigue siendo el ITW 1990; esto no es una migracion silenciosa."""
    for nombre, pts in GEOMETRIAS:
        assert modos_nulos(pts) == 3, nombre
    flecha, giro = test_i_patch(6)
    assert flecha == pytest.approx(1.5, rel=1e-9)
    assert giro == pytest.approx(0.6, rel=1e-9)


def test_w_alpha_fuera_de_rango_falla_en_vez_de_dar_numeros_raros():
    for malo in (0.0, -0.1, 1.5):
        with pytest.raises(ValueError):
            puntos_itw8(malo)
