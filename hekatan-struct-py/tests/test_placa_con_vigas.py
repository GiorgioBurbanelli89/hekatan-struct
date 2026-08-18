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


# ═══════════════════════════════════════════════════════════════════════════
# Lo que queda ABIERTO a malla gruesa, y de qué NO depende (2026-08-18)
# ═══════════════════════════════════════════════════════════════════════════
def _razon_limite_delgado(n, t=0.006):
    """Razón Thick/Thin con la placa casi sin espesor (t/a = 0.001).

    En el límite delgado el cortante desaparece del problema físico, así que
    Mindlin TIENE que dar lo mismo que Kirchhoff. Lo que sobre ahí no es del
    cortante: es de la interpolación de flexión.
    """
    global T
    prev, T = T, t
    try:
        return _flecha(n, True, False) / _flecha(n, True, True)
    finally:
        T = prev


def test_subir_kappa_no_dice_nada_la_atadura_ya_esta_saturada():
    """Subir κ no mueve el resultado — y eso NO significa lo que parece.

    ⚠️ Aquí hubo un razonamiento inválido: *«κ ×1000 no mueve el número, luego
    no es el cortante»*. Es falso. **Subir κ no puede decir nada cuando la
    atadura ya está saturada**: los 4 modos que el MITC4 ata ya son
    prácticamente rígidos (autovalores ~1e4·D contra ~0.5·D de los útiles), y
    hacerlos más rígidos no cambia la solución.

    Lo que sí informa es BAJAR κ, y ahí el número se mueve muchísimo
    (κ ×1e-4 → razón 1.0997 en 4×4). Pero eso tampoco es un arreglo: ablanda
    quitando la atadura.

    El diagnóstico bueno salió de instrumentar el elemento
    (`edificios-slab/thick_depuracion_dinamica.py`):

        · el MITC4 está BIEN: flexión x², y² y torsión xy dan cortante CERO
          exacto — el patch test pasa.
        · el bloque de cortante tiene rango EXACTAMENTE 4 y escala como 1/t².
        · en la solución real a 4×4 el cortante se lleva el **0.005 %** de la
          energía: no pelea contra la atadura, vive dentro de ella.
        · lo que sobra son los **4 modos que faltan**: 5 útiles contra los 9
          del MZC.

    Y a 2×2 sí hay locking de verdad: ahí el cortante se lleva el **99.95 %**.

    Este test deja clavada la invariancia para que nadie vuelva a barrer κ
    hacia arriba creyendo que mide algo.
    """
    import hekatan_struct.elements.shell_q4_motor as Q

    base = _razon_limite_delgado(4)
    assert base < 0.80, base          # el hueco está ahí, ~0.740

    k0, a0 = Q.KAPPA, Q.ALPHA_DRILL
    try:
        Q.KAPPA = 5.0 / 6.0 * 1000
        sin_cortante = _razon_limite_delgado(4)
        Q.KAPPA = k0
        Q.ALPHA_DRILL = 20.0
        sin_drilling = _razon_limite_delgado(4)
    finally:
        Q.KAPPA, Q.ALPHA_DRILL = k0, a0

    assert abs(sin_cortante - base) < 1e-3, (
        "kappa x1000 movio la razon de %.4f a %.4f: entonces SI seria el "
        "cortante y hay que revisar esta conclusion" % (base, sin_cortante))
    assert abs(sin_drilling - base) < 1e-3, (
        "alpha_drill x40 movio la razon de %.4f a %.4f" % (base, sin_drilling))


@pytest.mark.xfail(strict=False, reason=(
    "ABIERTO 2026-08-18: la flexion del Q4 de Mindlin es demasiado rigida a "
    "malla gruesa. Thick/Thin = 0.740 (4x4) y 0.919 (8x8) en el limite "
    "delgado, donde tiene que ser 1.000. No es kappa ni el drilling (ver el "
    "test de arriba): es la interpolacion de flexion, que necesita el mismo "
    "enriquecimiento por modos incompatibles que ya lleva la membrana. "
    "Contra ETABS son el 11.28 % (4x4) y el 2.68 % (8x8) del banco."))
@pytest.mark.parametrize("n", [4, 8])
def test_malla_gruesa_con_vigas_todavia_no_cierra(n):
    r = _razon_limite_delgado(n)
    assert r > 0.99, "malla %dx%d: Thick/Thin = %.4f en el limite delgado" % (
        n, n, r)
