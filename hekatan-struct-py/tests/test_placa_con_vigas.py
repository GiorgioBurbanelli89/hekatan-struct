"""Los giros de la placa tienen que ser los MISMOS que los de la viga.

Este es el test que faltaba y que dejó pasar el bug durante todo el port.

Una placa de Mindlin (con cortante) tiene que salir SIEMPRE igual o mas
flexible que una de Kirchhoff: el cortante solo puede ablandar. Es
termodinamica del elemento, no una preferencia.

Pero `shellQ4.ts` —y por tanto el port— escribe la flexion con las PENDIENTES
(βx = ∂w/∂x, βy = ∂w/∂y) y las mete tal cual en las casillas de Rx y Ry, que
son GIROS ALREDEDOR de los ejes:

    Rx = ∂w/∂y = βy        Ry = −∂w/∂x = −βx

o sea cruzados y con un signo. **Dentro de una placa aislada no se nota**: es
un cambio de base y todos sus elementos lo comparten. Por eso una placa sola
casa contra ETABS y contra Navier. En cuanto una VIGA comparte nudo con la
losa, los giros dejan de significar lo mismo y la union sale rigida.

Medido antes del arreglo, razon Thick/Thin en el centro:

    solo placa      0.94 → 1.00 → 1.02   (converge, correcto)
    placa + vigas   0.53 → 0.63 → 0.65   (se queda ahi: NO converge)
    portico 3D      0.42 → 0.49 → 0.51

Un test de placa sola nunca lo habria visto. Hace falta la viga.
"""
import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

import hekatan_struct.solver as S                                  # noqa: E402
from hekatan_struct import ElementInputs, NodeInputs, deform       # noqa: E402

LX, LY, Z = 6.0, 4.0, 3.0
E_M, NU, T = 25e6, 0.2, 0.20
VIG_B, VIG_H = 0.30, 0.50
P = 100.0


def _modelo(n, con_vigas, con_columnas=False):
    nodos, idx = [], {}

    def nudo(x, y, z):
        k = (round(x, 6), round(y, 6), round(z, 6))
        if k not in idx:
            idx[k] = len(nodos)
            nodos.append(k)
        return idx[k]

    xs = [LX * i / n for i in range(n + 1)]
    ys = [LY * j / n for j in range(n + 1)]
    for x in xs:
        for y in ys:
            nudo(x, y, Z)
    shells = [[nudo(xs[i], ys[j], Z), nudo(xs[i + 1], ys[j], Z),
               nudo(xs[i + 1], ys[j + 1], Z), nudo(xs[i], ys[j + 1], Z)]
              for i in range(n) for j in range(n)]
    barras, apoyos = [], {}
    if con_vigas:
        for i in range(n):
            for y in (0.0, LY):
                barras.append([nudo(xs[i], y, Z), nudo(xs[i + 1], y, Z)])
        for j in range(n):
            for x in (0.0, LX):
                barras.append([nudo(x, ys[j], Z), nudo(x, ys[j + 1], Z)])
        for (x, y) in ((0.0, 0.0), (LX, 0.0), (LX, LY), (0.0, LY)):
            if con_columnas:
                barras.append([nudo(x, y, 0.0), nudo(x, y, Z)])
                apoyos[nudo(x, y, 0.0)] = (True,) * 6
            else:
                apoyos[nudo(x, y, Z)] = (True,) * 6
    else:
        for x in xs:
            for y in ys:
                if x in (0.0, LX) or y in (0.0, LY):
                    apoyos[nudo(x, y, Z)] = (True, True, True, False, False, False)

    A = VIG_B * VIG_H
    I33 = VIG_B * VIG_H ** 3 / 12
    I22 = VIG_H * VIG_B ** 3 / 12
    ei = ElementInputs()
    for k in range(len(barras)):
        ei.elasticities[k] = E_M
        ei.shear_moduli[k] = E_M / (2 * (1 + NU))
        ei.poissons_ratios[k] = NU
        ei.areas[k] = A
        ei.moments_of_inertia_y[k] = I22
        ei.moments_of_inertia_z[k] = I33
        ei.torsional_constants[k] = 1e-3
    for m in range(len(shells)):
        k = len(barras) + m
        ei.elasticities[k] = E_M
        ei.poissons_ratios[k] = NU
        ei.thicknesses[k] = T
    centro = nudo(LX / 2, LY / 2, Z)
    ni = NodeInputs(supports=apoyos, loads={centro: (0, 0, -P, 0, 0, 0)})
    return nodos, barras + shells, ni, ei, centro


def _flecha(n, con_vigas, kirchhoff, con_columnas=False):
    S.USE_KIRCHHOFF_MZC = kirchhoff
    S.USE_Q4_MOTOR = not kirchhoff
    try:
        nodos, elems, ni, ei, c = _modelo(n, con_vigas, con_columnas)
        return deform(nodos, elems, ni, ei).deformations[c][2]
    finally:
        S.USE_KIRCHHOFF_MZC = False
        S.USE_Q4_MOTOR = True


@pytest.mark.parametrize("n", [8, 12])
@pytest.mark.parametrize("con_vigas,con_columnas,caso", [
    (False, False, "solo placa"),
    (True, False, "placa + vigas (2D)"),
    (True, True, "portico 3D + losa"),
])
def test_mindlin_no_puede_ser_mas_rigido_que_kirchhoff(n, con_vigas,
                                                       con_columnas, caso):
    """Thick/Thin ≥ 1 − tolerancia de malla. Con el bug daba 0.42-0.65."""
    thin = _flecha(n, con_vigas, True, con_columnas)
    thick = _flecha(n, con_vigas, False, con_columnas)
    razon = thick / thin
    assert razon > 0.97, (
        "%s malla %dx%d: Thick/Thin = %.4f. El cortante NO puede endurecer; "
        "esto es el cruce de giros βx/βy contra Rx/Ry (Thin %.5e, Thick %.5e)"
        % (caso, n, n, razon, thin, thick))


def test_converge_al_refinar_con_vigas():
    """Al refinar, Mindlin y Kirchhoff tienen que juntarse. Con el bug se
    quedaban clavados en 0.63-0.65 por mucho que se refinara."""
    razones = []
    for n in (4, 8, 12):
        razones.append(_flecha(n, True, False) / _flecha(n, True, True))
    assert razones[0] < razones[1] < razones[2], razones
    assert razones[-1] > 0.99, (
        "con vigas, malla 12x12: Thick/Thin = %.4f, no converge" % razones[-1])
