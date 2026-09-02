# -*- coding: utf-8 -*-
r"""¿El -1.9 % de flexion CONVERGE, o es un bug?  La prueba que los separa.

`test_macneal_2002.py` destapo que en flexion FUERA del plano SAP2000 clava 0.0 %
en las tres mallas y Hekatan pierde 1.4-2.6 %, tambien en la malla RECTANGULAR —
o sea que no es el trapecio, es otra cosa.

Dos explicaciones posibles, y dan firmas distintas:

  (a) CONVERGENCIA. El elemento esta bien pero converge mas despacio que el de
      CSI. Entonces al refinar la malla el error TIENE que irse a cero.
  (b) BUG o rigidez de mas. Entonces el error se queda clavado por mucho que se
      refine, o baja hasta un suelo que no es cero.

La viga es un voladizo de 6" con seccion 0.2" (canto) x 0.1" (espesor) y carga
unidad en la punta fuera del plano; la flecha exacta por teoria de vigas es
`P L^3 / (3 E I)` = 0.4321, con I = 0.2*0.1^3/12.

⚠️ Ojo con la relacion de forma: la malla del benchmark es 6x1, o sea celdas de
1.0 x 0.2 — **relacion 5:1**. Se barre por separado el numero de divisiones a lo
LARGO y a lo ALTO para ver si lo que duele es el refinado o la forma de la celda.
"""
import numpy as np
from hekatan_struct.data_model import ElementInputs, NodeInputs
from hekatan_struct.solver import deform

E, NU, T = 1.0e7, 0.3, 0.1
L, CANTO = 6.0, 0.2
EXACTO = 1.0*L**3/(3*E*(CANTO*T**3/12))          # 0.4321


def viga(nx, ny):
    """malla nx x ny del voladizo, en el plano X-Z."""
    xs = np.linspace(0, L, nx+1)
    zs = np.linspace(0, CANTO, ny+1)
    nodes = [(float(x), 0.0, float(z)) for z in zs for x in xs]
    els = []
    for j in range(ny):
        for i in range(nx):
            n0 = j*(nx+1)+i
            els.append([n0, n0+1, n0+nx+2, n0+nx+1])
    return np.array(nodes, float), els, nx, ny


def flecha(nx, ny, form=None):
    """form: None = defecto (Mindlin/thick) · 1 = Kirchhoff (thin)"""
    nodes, els, nx, ny = viga(nx, ny)
    ei = ElementInputs(); ni = NodeInputs()
    for k in range(len(els)):
        ei.elasticities[k] = E; ei.poissons_ratios[k] = NU
        ei.shear_moduli[k] = E/(2*(1+NU)); ei.thicknesses[k] = T
        ei.densities[k] = 0.0
        if form is not None:
            ei.plate_formulations[k] = form
    emp = [j*(nx+1) for j in range(ny+1)]          # x = 0, toda la altura
    for n in emp:
        ni.supports[n] = (True, True, True, True, True, True)
    punta = [j*(nx+1)+nx for j in range(ny+1)]     # x = L
    for n in punta:
        ni.loads[n] = (0.0, 1.0/len(punta), 0.0, 0.0, 0.0, 0.0)
    r = deform(nodes, els, ni, ei)
    u = r.deformations
    return float(np.mean([u[n][1] for n in punta]))


if __name__ == "__main__":
    print("="*80)
    print("  Flecha en la punta / exacta (%.6f).  Voladizo 6\" x 0.2\", carga fuera del plano" % EXACTO)
    print("  Si el error se va a CERO al refinar -> converge. Si se clava -> hay algo mas.")
    print("="*80)
    NX = [6, 12, 24, 48, 96]
    NY = [1, 2, 4]
    print("  %6s %s" % ("nx", " ".join("%14s" % ("ny=%d" % n) for n in NY)))
    for nx in NX:
        fila = []
        for ny in NY:
            try:
                v = flecha(nx, ny)
                fila.append("%13.4f%%" % ((v/EXACTO-1)*100))
            except Exception as ex:
                fila.append("%14s" % ("err "+str(ex)[:8]))
        print("  %6d %s" % (nx, " ".join(fila)))
    print("\n  (la malla del benchmark 2-002 es nx=6, ny=1 — celdas de 1.0 x 0.2, forma 5:1)")
