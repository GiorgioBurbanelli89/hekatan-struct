# -*- coding: utf-8 -*-
"""ESTA TODO CONECTADO? El criterio es de Jorge (29-ago-2026):

  «revisa que todos los frames esten en su nivel, y asi mismo en la rampa.
   Guiate de los frames que son las vigas de borde metalicas que van subiendo o
   bajando: solo los puntos que esten sobre esas lineas deben considerarse en
   las vigas secundarias. Si un punto no esta alli, ya sabes que no esta
   conectado.»

Tres comprobaciones, y ninguna necesita otro programa:

  1. NIVELES     una barra de piso tiene sus dos extremos a la misma cota. Las
                 que no: columnas (verticales) y las de cubierta/rampa, que
                 llevan pendiente a proposito.
  2. BORDES      en la rampa, TODO extremo de vigueta cae sobre una viga de
                 borde. Si no cae, ese punto no esta conectado.
  3. TROZOS      ninguna parte del modelo se queda sin llegar a un apoyo, y
                 ningun nudo toca un solo elemento.

    python chequeo_conexion.py [carpeta con los parte_*.json]

Asi se cazaron los tres fallos de `partir_modelo.py` que dejaban el mezanine
inestable: las viguetas de la rampa yendose al entrepiso, las COL-CFT que nacen
sobre la rampa quedandose sin base, y el mezanine sin empotrar donde se apoya
en ella.
"""
import json
import os
import sys
import collections

TOL = 2e-3


def sobre_alguna(p, tramos, tol=TOL):
    for a, b in tramos:
        d = [b[k] - a[k] for k in range(3)]
        L = sum(x * x for x in d) ** 0.5
        if L < 1e-9:
            continue
        u = [x / L for x in d]
        w = [p[k] - a[k] for k in range(3)]
        t = sum(w[k] * u[k] for k in range(3))
        if -tol <= t <= L + tol and \
           sum((w[k] - t * u[k]) ** 2 for k in range(3)) ** 0.5 <= tol:
            return True
    return False


def revisar(f):
    d = json.load(open(f, encoding="utf-8"))
    nod, barras = d["nodos"], d["barras"]
    apoyos = set(d.get("apoyos", []))
    print("\n%s   %d nudos  %d barras  %d apoyos"
          % (os.path.basename(f), len(nod), len(barras), len(apoyos)))
    fallos = 0

    # 1 · NIVELES
    niveles, inclinadas = collections.Counter(), []
    for b in barras:
        i, j = nod[b["i"]], nod[b["j"]]
        cap = b.get("capa", "?")
        if cap == "ANALITICO-COL":
            continue
        if abs(i[2] - j[2]) < 1e-6:
            niveles[round(i[2], 3)] += 1
        else:
            inclinadas.append(cap)
    print("   niveles: %s" % dict(sorted(niveles.items())))
    if inclinadas:
        print("   con pendiente (rampa / cubierta): %s"
              % dict(collections.Counter(inclinadas)))

    # 2 · BORDES: los extremos de las secundarias, sobre las vigas de borde
    bordes = [(nod[b["i"]], nod[b["j"]]) for b in barras
              if b.get("capa") == "ANALITICO-VIGA"
              and abs(nod[b["i"]][2] - nod[b["j"]][2]) > 1e-9]
    if bordes:
        sec = [b for b in barras if b.get("capa") == "ANALITICO-VIGUETA"
               and (abs(nod[b["i"]][2] - 0.0) > 1e-6 or True)]
        fuera = [nod[b[k]] for b in sec for k in ("i", "j")
                 if abs(nod[b["i"]][2] - nod[b["j"]][2]) < 1e-6
                 and not sobre_alguna(nod[b[k]], bordes)
                 and min(nod[b["i"]][2], nod[b["j"]][2]) < max(p[2] for t in bordes for p in t) + TOL]
        print("   vigas de borde con pendiente: %d tramos   secundarias: %d"
              % (len(bordes), len(sec)))
        if fuera:
            print("   OJO: %d extremos de vigueta FUERA de las vigas de borde:" % len(fuera))
            for p in fuera[:6]:
                print("        (%.3f, %.3f, %.3f)" % tuple(p))
            fallos += len(fuera)
        else:
            print("   OK: todos los extremos de vigueta caen sobre una viga de borde")

    # 3 · TROZOS sin apoyo y nudos con un solo elemento
    els = [[b["i"], b["j"]] for b in barras]
    ind = {}
    for k, p in enumerate(nod):
        ind[(round(p[0], 4), round(p[1], 4), round(p[2], 4))] = k
    for a in d.get("areas", []):
        e = [ind.get((round(q[0], 4), round(q[1], 4), round(q[2], 4))) for q in a["puntos"]]
        if all(v is not None for v in e):
            els.append(e)
    ady = collections.defaultdict(set)
    for e in els:
        for x in e:
            for y in e:
                if x != y:
                    ady[x].add(y)
    vis, comps = set(), []
    for n in range(len(nod)):
        if n in vis:
            continue
        pila, c = [n], []
        vis.add(n)
        while pila:
            x = pila.pop()
            c.append(x)
            for y in ady.get(x, ()):
                if y not in vis:
                    vis.add(y)
                    pila.append(y)
        comps.append(c)
    sinap = [c for c in comps if not (set(c) & apoyos)]
    cnt = collections.Counter()
    for e in els:
        for x in set(e):
            cnt[x] += 1
    solos = [n for n in range(len(nod)) if cnt[n] == 1 and n not in apoyos]
    print("   componentes: %d   sin apoyo: %d   nudos con UN elemento: %d"
          % (len(comps), len(sinap), len(solos)))
    for c in sorted(sinap, key=len, reverse=True)[:3]:
        xs = [nod[i][0] for i in c]; ys = [nod[i][1] for i in c]; zs = [nod[i][2] for i in c]
        print("      trozo de %d nudos: x %.2f..%.2f y %.2f..%.2f z %.2f..%.2f"
              % (len(c), min(xs), max(xs), min(ys), max(ys), min(zs), max(zs)))
    for n in solos[:5]:
        print("      nudo con 1 solo elemento: (%.3f, %.3f, %.3f)" % tuple(nod[n]))
    fallos += len(sinap) + len(solos)
    return fallos


def main():
    base = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
        os.path.dirname(os.path.abspath(__file__)), "..", "..", "galpon-bodega-electoral")
    total = 0
    for n in ("parte_mezanine.json", "parte_rampa.json", "parte_galpon_vacio.json"):
        f = os.path.join(base, n)
        if os.path.exists(f):
            total += revisar(f)
    print("\n%s" % ("TODO CONECTADO" if total == 0 else "%d PROBLEMAS DE CONEXION" % total))
    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main())
