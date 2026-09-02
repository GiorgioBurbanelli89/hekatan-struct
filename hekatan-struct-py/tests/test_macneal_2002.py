# -*- coding: utf-8 -*-
r"""MacNeal-Harder 2-002 — la viga recta, y la MALLA TRAPEZOIDAL.

Es el benchmark estandar de la industria para la distorsion de malla:
MacNeal, R.H. & Harder, R.L. (1985), *A proposed standard set of problems to test
finite element accuracy*, Finite Elements in Analysis and Design 1:3-20. CSI lo
usa —no NAFEMS— para verificar su cascara, y publica sus propios numeros en
`SAP2000 24/Manuals/Verification/Analysis/Shells/Problem 2-002.pdf`.

Voladizo de 6" modelado con cascaras, canto 0.2" (Z), espesor 0.1" (Y), carga
unidad en la punta. Tres mallas de 6x1, las tres del paper:

    A  rectangulos          tramos 1.0 arriba y abajo
    B  TRAPECIOS            arriba 0.9 1.2 0.8 1.2 0.8 1.1 · abajo 1.1 0.8 1.2 0.8 1.2 0.9
    C  paralelogramos       arriba 1.1 1 1 1 1 0.9        · abajo 0.9 1 1 1 1 1.1

Lo que hace este caso interesante, y por lo que se monta: **SAP2000 se estrella en
la malla B**. Sus propios numeros publicados, contra la solucion independiente:

    caso                        A        B(trapecio)   C(paralelogramo)
    1 axial                     0 %       0 %           0 %
    2 cortante EN el plano     -1 %     -79 %         -26 %
    3 cortante FUERA del plano  0 %       0 %           0 %

O sea que el problema del trapecio **es de MEMBRANA, no de flexion de placa** — la
fila 3, que es flexion pura, no se entera. Y `thin` y `thick` dan lo mismo, que es
justo lo que cabe esperar si el que falla es el termino que comparten.

⚠️ Se monta por la API de bajo nivel y no por `.heks` a proposito: el lector de
`.heks` fija **nu = 0.2** en las cascaras («como cliModeler», heks.py:307) y este
benchmark pide **nu = 0.3**. Es una limitacion real del formato, anotada aqui.
"""
import numpy as np
import pytest
from hekatan_struct.data_model import ElementInputs, NodeInputs
# SupportFlags y NodeLoad son ALIAS de tuple[...] de 6, no dataclasses
from hekatan_struct.solver import deform

E, NU, T = 1.0e7, 0.3, 0.1
CANTO = 0.2
# tramos de cada fila, tal como los da la figura del PDF (pag. 2)
MALLAS = {
    "A rectangulo":   ([1.0]*6, [1.0]*6),
    "B TRAPECIO":     ([0.9, 1.2, 0.8, 1.2, 0.8, 1.1], [1.1, 0.8, 1.2, 0.8, 1.2, 0.9]),
    "C paralelogramo": ([1.1, 1.0, 1.0, 1.0, 1.0, 0.9], [0.9, 1.0, 1.0, 1.0, 1.0, 1.1]),
}
# solucion INDEPENDIENTE del PDF (teoria de vigas, Cook & Young pag. 244)
INDEP = {"axial": 3.0e-5, "en_plano": 0.1081, "fuera_plano": 0.4321}
# lo que publica SAP2000 (thin), para saber a que se parece cada cosa
SAP = {"axial": {"A rectangulo": 3e-5, "B TRAPECIO": 3e-5, "C paralelogramo": 3e-5},
       "en_plano": {"A rectangulo": 0.1072, "B TRAPECIO": 0.0227, "C paralelogramo": 0.0804},
       "fuera_plano": {"A rectangulo": 0.4320, "B TRAPECIO": 0.4322, "C paralelogramo": 0.4322}}


def construir(tramos_arriba, tramos_abajo):
    """la viga en el plano X-Z; fila de abajo z=0, fila de arriba z=CANTO."""
    xa = np.concatenate([[0.0], np.cumsum(tramos_arriba)])
    xb = np.concatenate([[0.0], np.cumsum(tramos_abajo)])
    nodes = [(float(x), 0.0, 0.0) for x in xb] + \
            [(float(x), 0.0, CANTO) for x in xa]
    els = [[i, i+1, i+8, i+7] for i in range(6)]      # abajo-i, abajo-i+1, arriba, arriba
    return np.array(nodes, float), els


def resolver(malla, caso):
    nodes, els = construir(*MALLAS[malla])
    ei = ElementInputs(); ni = NodeInputs()
    for k in range(len(els)):
        ei.elasticities[k] = E
        ei.poissons_ratios[k] = NU
        ei.shear_moduli[k] = E/(2*(1+NU))
        ei.thicknesses[k] = T
        ei.densities[k] = 0.0
    # Empotramiento, EXACTAMENTE como lo define el PDF (pag. 1):
    #   «joint 1 is restrained in the Ux, Uy, Uz and Rz degrees of freedom and
    #    joint 8 is restrained in the Ux, Uy and Rz»
    # O sea: Rx y Ry quedan LIBRES en los dos, y Uz libre en el de arriba. No es
    # un detalle. Con los seis grados sujetos se impide la curvatura ANTICLASTICA
    # junto al apoyo y la tira pasa de rigidez de viga a rigidez de placa
    # (EI -> EI/(1-nu^2), un 9 % mas rigida con nu = 0.3), y la flexion fuera del
    # plano sale un 1.9 % corta sin que el elemento tenga nada malo: con nu = 0
    # el patch test de curvatura constante da 0.0000 % con UN solo elemento.
    ni.supports[0] = (True, True, True, False, False, True)   # Ux Uy Uz . . Rz
    ni.supports[7] = (True, True, False, False, False, True)  # Ux Uy .  . . Rz
    d = {"axial": (0.5, 0, 0), "en_plano": (0, 0, 0.5), "fuera_plano": (0, 0.5, 0)}[caso]
    for n in (6, 13):                                  # los dos nudos de la punta
        ni.loads[n] = (d[0], d[1], d[2], 0.0, 0.0, 0.0)
    r = deform(nodes, els, ni, ei)
    u = r.deformations                     # dict {nudo: (ux,uy,uz,rx,ry,rz)}
    comp = {"axial": 0, "fuera_plano": 1, "en_plano": 2}[caso]
    return 0.5*(float(u[6][comp]) + float(u[13][comp]))   # media, como el PDF


def tabla():
    filas = []
    for caso in ("axial", "en_plano", "fuera_plano"):
        for malla in MALLAS:
            try:
                v = resolver(malla, caso)
            except Exception as ex:
                filas.append((caso, malla, float("nan"), str(ex)[:40])); continue
            filas.append((caso, malla, v, ""))
    return filas


if __name__ == "__main__":
    print("="*92)
    print("  MacNeal-Harder 2-002 — voladizo con cascaras.  E=1e7  nu=0.3  t=0.1")
    print("="*92)
    print("  %-13s %-17s %12s %12s %9s %12s %9s"
          % ("caso", "malla", "Hekatan", "independiente", "dif", "SAP2000", "dif SAP"))
    for caso, malla, v, err in tabla():
        if err:
            print("  %-13s %-17s   ERROR %s" % (caso, malla, err)); continue
        ind = INDEP[caso]; sp = SAP[caso][malla]
        print("  %-13s %-17s %12.6f %12.6f %8.1f%% %12.6f %8.1f%%"
              % (caso, malla, v, ind, (v/ind-1)*100, sp, (sp/ind-1)*100))


# ── tests de REGRESION ────────────────────────────────────────────────────
# No se comprueba "pasar el benchmark": en la malla B nadie lo pasa, SAP2000
# incluido (-79 %). Se comprueba (a) lo que SI tiene que salir exacto, y (b) que
# lo que hoy esta flojo no empeore sin que nos enteremos.
@pytest.mark.parametrize("malla", list(MALLAS))
def test_axial_exacto(malla):
    """El axial no depende de la forma del elemento: 0 % en las tres mallas."""
    v = resolver(malla, "axial")
    assert abs(v/INDEP["axial"] - 1) < 0.01


@pytest.mark.parametrize("malla", list(MALLAS))
def test_flexion_fuera_del_plano(malla):
    """Flexion pura. SAP2000 clava 0.0 % en las tres; aqui se pierde 0.7-1.6 %.

    Ese resto NO es un defecto del elemento: con nu = 0 el patch test de curvatura
    constante da **0.0000 % con UN solo elemento** en las dos formulaciones
    (`patch_flexion.py`). Lo que queda es la curvatura ANTICLASTICA que el apoyo
    impide localmente, y que se diluye al refinar. La mitad del error que habia
    antes (1.4-2.6 %) era del montaje: sujetaba Rx y Ry, que el PDF deja libres."""
    v = resolver(malla, "fuera_plano")
    assert abs(v/INDEP["fuera_plano"] - 1) < 0.020


def test_trapecio_se_hunde_como_en_sap2000():
    """La membrana en malla trapezoidal se hunde -84.7 %; SAP2000 publica -79 %.
    No es un fallo que arreglar aqui: es el comportamiento conocido y documentado
    del cuadrilatero de 4 nudos, y CSI recomienda EVITAR trapecios donde el
    cortante en el plano importe. Se fija para que no se degrade mas."""
    v = resolver("B TRAPECIO", "en_plano")
    e = v/INDEP["en_plano"] - 1
    assert -0.90 < e < -0.70, "esperado en el entorno del -79 % de SAP2000"
