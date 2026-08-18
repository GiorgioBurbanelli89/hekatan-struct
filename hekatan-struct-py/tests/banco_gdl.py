# -*- coding: utf-8 -*-
"""BANCO POR GRADOS DE LIBERTAD: se sube un escalon cada vez.

La regla: no se pasa al siguiente escalon hasta que el anterior cierra por
debajo del 1 %. Y no se toca el C++ ni el WASM hasta que el escalon cierra
AQUI, en Python, donde una iteracion cuesta un segundo y no un recompilado de
WASM.

    1 GDL   axial             barra a traccion           d = PL/EA
    2 GDL   flexion           voladizo con carga punta   d = PL^3/3EI
    2 GDL   flexion+cortante  voladizo de Timoshenko     + PL/(G As)
    3 GDL   portico plano     portico biempotrado        rigidez lateral
    6 GDL   espacial          barra en torsion           phi = TL/(G J)
    n GDL   sistema           viga continua de 2 vanos   R_A, R_B y R_C

Cada arbitro es una FORMULA CERRADA de resistencia de materiales, no otro
programa ni un numero heredado: en estos casos la solucion exacta se conoce, y
si el elemento no la reproduce no hay nada que discutir.

    python tests/banco_gdl.py
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "src"))

from hekatan_struct import NodeInputs, ElementInputs, deform  # noqa: E402

TOL = 1.0          # %  — el limite pedido


def _mapas(n, **kw):
    """ElementInputs con el mismo valor en las n barras."""
    ei = ElementInputs()
    for k, v in kw.items():
        getattr(ei, k).update({i: v for i in range(n)})
    return ei


def _fmt(nombre, hek, ref, unidad=""):
    e = abs(hek - ref) / abs(ref) * 100 if ref else abs(hek) * 100
    ok = e <= TOL
    marca = "ok   " if ok else "FALLA"
    print("  %s %-34s %+.6e vs %+.6e %-4s %7.3f %%"
          % (marca, nombre, hek, ref, unidad, e))
    return ok, e


# -- 1 GDL - AXIAL ----------------------------------------------------------
def gdl1_axial():
    """Barra empotrada a traccion. d = P*L/(E*A). Un solo GDL vivo."""
    E, A, L, P = 2.0e8, 0.01, 5.0, 100.0        # kN/m2, m2, m, kN
    nodes = [[0, 0, 0], [L, 0, 0]]
    ni = NodeInputs(
        supports={0: [True] * 6, 1: [False, True, True, True, True, True]},
        loads={1: [P, 0, 0, 0, 0, 0]})
    ei = _mapas(1, elasticities=E, areas=A, shear_moduli=E / 2.4,
                moments_of_inertia_y=1e-4, moments_of_inertia_z=1e-4,
                torsional_constants=1e-4)
    r = deform(nodes, [[0, 1]], ni, ei)
    return _fmt("1 GDL - axial  d = PL/EA",
                r.deformations[1][0], P * L / (E * A), "m")


# -- 2 GDL - FLEXION --------------------------------------------------------
def gdl2_flexion():
    """Voladizo con carga en punta. d = P*L^3/(3*E*I), sin cortante.

    Se pasa un area de cortante ENORME para anular el termino de Timoshenko: si
    no, el motor —que SI lleva cortante— no tiene por que dar la formula de
    Euler-Bernoulli, y la diferencia seria del elemento, no un error.
    """
    E, I, L, P = 2.0e8, 8.333e-6, 3.0, 10.0
    nodes = [[0, 0, 0], [L, 0, 0]]
    ni = NodeInputs(supports={0: [True] * 6}, loads={1: [0, 0, -P, 0, 0, 0]})
    ei = _mapas(1, elasticities=E, areas=0.01, shear_moduli=E / 2.4,
                moments_of_inertia_y=I, moments_of_inertia_z=I,
                torsional_constants=1e-5,
                shear_areas_y=1e6, shear_areas_z=1e6)
    r = deform(nodes, [[0, 1]], ni, ei)
    return _fmt("2 GDL - flexion  d = PL3/3EI",
                r.deformations[1][2], -P * L ** 3 / (3 * E * I), "m")


def gdl2_timoshenko():
    """El mismo voladizo CON cortante: d = PL^3/3EI + P*L/(G*As).

    Es lo que distingue a Timoshenko de Euler-Bernoulli, y lo que hacia que
    Hekatan saliera sistematicamente mas rigido cuando no se pasaban las `as`.
    """
    E, I, L, P = 2.0e8, 8.333e-6, 3.0, 10.0
    G, As = E / 2.4, 0.004
    nodes = [[0, 0, 0], [L, 0, 0]]
    ni = NodeInputs(supports={0: [True] * 6}, loads={1: [0, 0, -P, 0, 0, 0]})
    ei = _mapas(1, elasticities=E, areas=0.01, shear_moduli=G,
                moments_of_inertia_y=I, moments_of_inertia_z=I,
                torsional_constants=1e-5, shear_areas_y=As, shear_areas_z=As)
    r = deform(nodes, [[0, 1]], ni, ei)
    ref = -(P * L ** 3 / (3 * E * I) + P * L / (G * As))
    return _fmt("2 GDL - Timoshenko  + PL/GAs",
                r.deformations[1][2], ref, "m")


# -- 3 GDL - PORTICO PLANO --------------------------------------------------
def gdl3_portico():
    """Portico biempotrado con carga lateral. Cuando el dintel es
    infinitamente rigido el nudo no gira y la rigidez lateral es EXACTA:
    K = 2 * 12*E*Ic/h^3, o sea d = H/K.

    Se le da al dintel una inercia 1e6 veces la de las columnas, asi que la
    formula de arriba es la solucion y no una aproximacion.
    """
    E, Ic, h, b, H = 2.0e8, 8.333e-6, 3.0, 4.0, 20.0
    nodes = [[0, 0, 0], [0, 0, h], [b, 0, h], [b, 0, 0]]
    elements = [[0, 1], [1, 2], [2, 3]]
    ni = NodeInputs(supports={0: [True] * 6, 3: [True] * 6},
                    loads={1: [H, 0, 0, 0, 0, 0]})
    ei = ElementInputs()
    for i in range(3):
        rig = (i == 1)
        ei.elasticities[i] = E
        ei.areas[i] = 1.0 if rig else 0.01
        ei.shear_moduli[i] = E / 2.4
        ei.moments_of_inertia_y[i] = Ic * (1e6 if rig else 1)
        ei.moments_of_inertia_z[i] = Ic * (1e6 if rig else 1)
        ei.torsional_constants[i] = 1e-5
        ei.shear_areas_y[i] = 1e6      # sin cortante: la formula es de flexion
        ei.shear_areas_z[i] = 1e6
    r = deform(nodes, elements, ni, ei)
    K = 2 * 12 * E * Ic / h ** 3
    return _fmt("3 GDL - portico  d = H/(2*12EI/h3)",
                r.deformations[1][0], H / K, "m")


# -- 6 GDL - ESPACIAL (TORSION) --------------------------------------------
def gdl6_torsion():
    """Barra empotrada con momento torsor: phi = T*L/(G*J).

    Es el GDL que solo aparece en 3D y el que mas veces se cuela mal: J de
    Saint-Venant frente al momento polar Ip.
    """
    E, L, T = 2.0e8, 4.0, 15.0
    G, J = E / 2.4, 2.5e-5
    nodes = [[0, 0, 0], [L, 0, 0]]
    ni = NodeInputs(supports={0: [True] * 6}, loads={1: [0, 0, 0, T, 0, 0]})
    ei = _mapas(1, elasticities=E, areas=0.01, shear_moduli=G,
                moments_of_inertia_y=1e-5, moments_of_inertia_z=1e-5,
                torsional_constants=J)
    r = deform(nodes, [[0, 1]], ni, ei)
    return _fmt("6 GDL - torsion  phi = TL/GJ",
                r.deformations[1][3], T * L / (G * J), "rad")


# -- n GDL - SISTEMA --------------------------------------------------------
def gdln_viga_continua():
    """Viga continua de DOS vanos iguales con carga puntual en el centro del
    primero. Las TRES reacciones de la tabla clasica:

        R_A = 13P/32     apoyo del vano cargado
        R_B = 11P/16     apoyo CENTRAL
        R_C = -3P/32     apoyo del otro extremo: LEVANTA

    Es el primer caso donde el resultado NO sale de una sola barra: hace falta
    que el ensamblaje y la continuidad esten bien. Y el signo de R_C es la
    comprobacion fina — un apoyo que tira hacia abajo solo aparece si la
    continuidad esta resuelta.

    ⚠️ La primera version de este caso ponia R_B = 13P/32 y daba 69 % de error.
    No fallaba el motor: 13P/32 es la reaccion del apoyo EXTREMO, no la del
    central. El motor daba 8.25 kN, que es 11P/16 exacto. Por eso el arbitro se
    escribe con las tres reacciones y con el nombre de cada una: una referencia
    mal atribuida se parece mucho a un fallo del solver.
    """
    E, I, L, P = 2.0e8, 8.333e-6, 4.0, 12.0
    nodes = [[0, 0, 0], [L / 2, 0, 0], [L, 0, 0], [1.5 * L, 0, 0], [2 * L, 0, 0]]
    elements = [[0, 1], [1, 2], [2, 3], [3, 4]]
    # Apoyo simple: sujeta el desplazamiento vertical y deja libre el giro.
    fijo = [True, True, True, True, False, True]
    ni = NodeInputs(supports={0: fijo, 2: fijo, 4: fijo},
                    loads={1: [0, 0, -P, 0, 0, 0]})
    ei = _mapas(4, elasticities=E, areas=0.01, shear_moduli=E / 2.4,
                moments_of_inertia_y=I, moments_of_inertia_z=I,
                torsional_constants=1e-5, shear_areas_y=1e6, shear_areas_z=1e6)
    r = deform(nodes, elements, ni, ei)
    oks = []
    oks.append(_fmt("n GDL - viga continua  R_A=13P/32",
                    r.reactions[0][2], 13 * P / 32, "kN"))
    oks.append(_fmt("n GDL - viga continua  R_B=11P/16",
                    r.reactions[2][2], 11 * P / 16, "kN"))
    oks.append(_fmt("n GDL - viga continua  R_C=-3P/32",
                    r.reactions[4][2], -3 * P / 32, "kN"))
    return (all(o for o, _ in oks), max(e for _, e in oks))


def main():
    print("\nBANCO POR GRADOS DE LIBERTAD - motor de Python")
    print("arbitro: formula cerrada - limite %.1f %%\n" % TOL)
    casos = [gdl1_axial, gdl2_flexion, gdl2_timoshenko,
             gdl3_portico, gdl6_torsion, gdln_viga_continua]
    res = [c() for c in casos]
    malos = [1 for ok, _ in res if not ok]
    peor = max(e for _, e in res)
    print("\n%d/%d escalones dentro del %.0f %% - peor %.3f %%"
          % (len(res) - len(malos), len(res), TOL, peor))
    return 1 if malos else 0


if __name__ == "__main__":
    raise SystemExit(main())
