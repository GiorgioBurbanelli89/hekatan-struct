# -*- coding: utf-8 -*-
r"""PATCH TEST de flexion: momento en la punta -> curvatura CONSTANTE.

El barrido de mallas dejo esto: en el voladizo del MacNeal-Harder 2-002, SAP2000
clava 0.0 % con seis elementos y aqui se pierde 1.3 % (Kirchhoff) o 1.9 %
(Mindlin), bajando al refinar. O sea que converge — pero desde demasiado lejos.

Para saber si eso es solo convergencia o hay algo mal, se quita la carga en la
punta y se pone un MOMENTO. Entonces el momento flector es **constante** a lo
largo de la viga, la curvatura tambien, y la flecha exacta es `M L^2/(2 E I)`.

Ese es el caso que **cualquier** elemento de placa que se precie reproduce
EXACTAMENTE, con un elemento o con mil: es el patch test de flexion, la condicion
minima para converger. Si aqui sale 0.000 %, el elemento esta sano y lo de antes
era convergencia; si sale error, hay un fallo y este es el sitio mas simple donde
mirarlo.
"""
import numpy as np
from hekatan_struct.data_model import ElementInputs, NodeInputs
from hekatan_struct.solver import deform

E, NU, T = 1.0e7, 0.3, 0.1
L, CANTO = 6.0, 0.2
I = CANTO*T**3/12


def caso(nx, ny, carga, form=None, poisson_libre=True):
    """carga: 'punta' = fuerza unidad en Y · 'momento' = momento unidad.

    `poisson_libre`: si True se sujeta Uz SOLO en un nudo del empotramiento y se
    deja libre en los demas. Es lo que hace el propio benchmark, y no es un
    detalle: *«joint 8 is not restrained in Uz to avoid imposing the unwanted
    local Poisson's effect»*. Empotrando TODO se impide la curvatura anticlastica
    y la tira pasa de rigidez de viga `EI` a rigidez de placa `EI/(1-nu^2)`, o sea
    un 9 % mas rigida con nu = 0.3 -- y entonces el patch test parece fallar
    cuando lo que falla es el montaje."""
    xs = np.linspace(0, L, nx+1); zs = np.linspace(0, CANTO, ny+1)
    nodes = np.array([(float(x), 0.0, float(z)) for z in zs for x in xs], float)
    els = []
    for j in range(ny):
        for i in range(nx):
            n0 = j*(nx+1)+i
            els.append([n0, n0+1, n0+nx+2, n0+nx+1])
    ei = ElementInputs(); ni = NodeInputs()
    for k in range(len(els)):
        ei.elasticities[k] = E; ei.poissons_ratios[k] = NU
        ei.shear_moduli[k] = E/(2*(1+NU)); ei.thicknesses[k] = T
        ei.densities[k] = 0.0
        if form is not None:
            ei.plate_formulations[k] = form
    for j in range(ny+1):
        n0 = j*(nx+1)
        libre_z = poisson_libre and j > 0
        ni.supports[n0] = (True, True, not libre_z, True, True, True)
    punta = [j*(nx+1)+nx for j in range(ny+1)]
    n = len(punta)
    for p in punta:
        if carga == "punta":
            ni.loads[p] = (0.0, 1.0/n, 0.0, 0.0, 0.0, 0.0)
        else:                       # momento unidad sobre el eje Z (gira en X-Y)
            ni.loads[p] = (0.0, 0.0, 0.0, 0.0, 0.0, 1.0/n)
    r = deform(nodes, els, ni, ei)
    u = r.deformations
    v = float(np.mean([u[p][1] for p in punta]))
    ex = 1.0*L**3/(3*E*I) if carga == "punta" else 1.0*L*L/(2*E*I)
    return v, ex


if __name__ == "__main__":
    print("="*86)
    print("  PATCH TEST — momento en la punta = curvatura CONSTANTE.")
    print("  Un elemento de placa correcto da 0.000 % con CUALQUIER malla.")
    print("="*86)
    print("  %-22s %4s %4s %12s %10s %10s"
          % ("carga / formulacion", "nx", "ny", "Hekatan", "error", "empotr. TODO"))
    for carga in ("momento", "punta"):
        for form, nom in ((None, "Mindlin"), (1, "Kirchhoff")):
            for nx, ny in ((1, 1), (2, 1), (6, 1), (6, 4), (24, 1)):
                v, ex = caso(nx, ny, carga, form, True)
                w, _ = caso(nx, ny, carga, form, False)
                print("  %-22s %4d %4d %12.6f %9.4f%% %9.4f%%"
                      % ("%s / %s" % (carga, nom), nx, ny, v,
                         (v/ex-1)*100, (w/ex-1)*100))
        print()
