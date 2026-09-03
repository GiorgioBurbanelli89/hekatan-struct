# -*- coding: utf-8 -*-
r"""¿QUIEN AGUANTA la malla trapezoidal?  Incluido el elemento de OpenSees.

La pregunta practica: cuando la malla sale torcida —losas de borde no paralelo,
rampas, huecos de escalera, transiciones de malla— ¿que elemento se usa? Y ¿que
hacen los otros programas?

Aqui se mide, no se opina. Se coge una placa cuadrada apoyada con carga uniforme,
cuya solucion EXACTA se conoce (serie de Navier), se malla 8x8 y se van moviendo
los nudos interiores: `d = 0` son cuadrados perfectos, `d = 0.3` son trapecios
feos. El error de la flecha central dice quien aguanta.

Entran los cinco que ya estaban y ademas **los dos de OpenSees corriendo de
verdad** (`ops_elem.py` arranca OpenSees y le saca la K del elemento), que es lo
que usa el mundo OpenSees/STKO:

    ShellMITC4    Dvorkin-Bathe 1984 — el estandar contra la distorsion
    ShellDKGQ     Kirchhoff discreto (el DKQ de Batoz)
"""
import numpy as np
import pruebas_fisicas as PF
from dse_wilson import K_DSE
from dsq_batoz import K_DSQ
from min4_mystran import K_MIN4

E, nu, L, q = 1e7, 0.3, 1.0, 1.0
t = L/100
DS = (0.0, 0.1, 0.2, 0.3)

ELE = [("DKQ  (=Shell-Thin CSI)", lambda p, E_, n_, t_: K_DSQ(p, E_, n_, t_, "DKQ")),
       ("DSQ  (Batoz-Lardeur)",   lambda p, E_, n_, t_: K_DSQ(p, E_, n_, t_, "DSQ")),
       ("DKMQ (el de Hekatan)",   lambda p, E_, n_, t_: K_DSQ(p, E_, n_, t_, "DKMQ")),
       ("MIN4 (MYSTRAN)",         K_MIN4),
       ("DSE  (=Shell-Thick CSI)", K_DSE)]

try:
    from ops_elem import K_placa_ops
    ELE += [("ShellMITC4 (OpenSees)", lambda p, E_, n_, t_: K_placa_ops(p, E_, n_, t_, "ShellMITC4")),
            ("ShellDKGQ (OpenSees)",  lambda p, E_, n_, t_: K_placa_ops(p, E_, n_, t_, "ShellDKGQ"))]
except Exception as ex:
    print("  (OpenSees no disponible: %s)" % str(ex)[:60])

if __name__ == "__main__":
    wex = PF.navier(L, E, nu, t, q)
    print("="*84)
    print("  ERROR DE FLECHA vs la solucion EXACTA (Navier), malla 8x8 que se TUERCE")
    print("  d = cuanto se mueve cada nudo interior.  0 = cuadrados · 0.3 = trapecios feos")
    print("="*84)
    print("  %-24s %s" % ("elemento", " ".join("%11s" % ("d=%.1f" % d) for d in DS)))
    for nm, f in ELE:
        fila = []
        for d in DS:
            try:
                w = PF.resolver_dist(f, L, 8, E, nu, t, q, d)
                fila.append("%10.3f%%" % ((w/wex-1)*100))
            except Exception as ex:
                fila.append("%11s" % ("err:"+str(ex)[:5]))
        print("  %-24s %s" % (nm, " ".join(fila)))
    print("\n  (negativo = mas rigido de la cuenta; positivo = mas flexible)")
