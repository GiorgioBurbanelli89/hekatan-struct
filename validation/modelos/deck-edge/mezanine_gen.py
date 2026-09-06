# -*- coding: utf-8 -*-
"""Mezanine parametrico en .heks para subirlo por escalones contra ETABS y SAP2000 (4-sep-2026):
columnas + vigas principales (X e Y) + viguetas en X cada `s` m + DECK como membrana
(t 0.065, E 24855600, rho equivalente 0.25 t/m2 / t) entre viguetas.
    python mezanine_gen.py salida_base  nx ny Lx Ly npisos h  [s=1.0] [pano=vano|continuo]
Escribe CUATRO .heks con la misma malla y un patron de carga cada uno:
  _pp   peso propio (selfweight 1)                  -> Dead de ETABS (lo calcula el)
  _scm  sobrecarga muerta 2 kN/m2 (one-way por viguetas) -> lo que ETABS no tiene
  _cv   viva 2.5 kN/m2 (one-way por viguetas)
  _ex   sismo: 10 kN por planta en +x repartido en las cabezas de columna
pano=continuo: la franja de deck entre dos viguetas es UN pano de 4 nudos que cruza todos los
vanos en X (los nudos de las vigas Y quedan sobre su borde sin pertenecerle: el caso del
EDGE CONSTRAINT de ETABS). pano=vano: la franja se parte en cada eje de columnas.
"""
import sys, math
base = sys.argv[1]; nx, ny = int(sys.argv[2]), int(sys.argv[3]); Lx, Ly = float(sys.argv[4]), float(sys.argv[5])
npisos, h = int(sys.argv[6]), float(sys.argv[7])
opt = dict(a.split("=") for a in sys.argv[8:]); s = float(opt.get("s", 1.0)); pano = opt.get("pano", "vano")
# vig=corto (defecto): las viguetas corren por el LADO CORTO del vano (regla de la losa en una
# direccion, Jorge 5-sep-2026); vig=x las deja en X como antes; vig=y las fuerza en Y. Se genera
# siempre con viguetas en X y, si toca Y, se INTERCAMBIAN x<->y al escribir (Ex sigue en +x global).
vig = opt.get("vig", "corto").lower()
SWAP = (vig == "y") or (vig == "corto" and Lx > Ly)
if SWAP: nx, ny, Lx, Ly = ny, nx, Ly, Lx
T_DECK, E_DECK, MASA_DECK = 0.065, 24855600.0, 0.25          # t/m2 (loseta + nervios), como el galpon
RHO_DECK = MASA_DECK / T_DECK
COL = "25e6 0.16 0.0021333333 0.0021333333 3e-4 0.2 2.45"       # 0.4x0.4 hormigon (E A Iy Iz J nu rho)
VIGA = "25e6 0.15 0.0011250 0.0028125 2.6e-3 0.2 2.45"          # 0.3x0.5 hormigon (Iz = eje fuerte: flexion VERTICAL en Hekatan y I33 de CSI)
VIGUETA = "2e8 0.00201 6.83e-7 8.69e-6 3.6e-8 0.3 7.85"          # IPE160 acero (A 20.1 cm2, Iz 869 cm4 vertical, Iy 68.3 cm4)
Q_SCM, Q_CV, EX = 2.0, 2.5, 10.0
nodes = {}; nid = [0]
def node(x, y, z):
    k = (round(x, 6), round(y, 6), round(z, 6))
    if k not in nodes: nid[0] += 1; nodes[k] = nid[0]
    return nodes[k]
# posiciones de viguetas en y (cada s, sin pisar los ejes de columna)
ejesY = [j * Ly for j in range(ny + 1)]; ejesX = [i * Lx for i in range(nx + 1)]
ys = sorted(set(round(v, 6) for v in ejesY + [y for j in range(ny) for y in [ejesY[j] + k * s for k in range(1, int(math.ceil(Ly / s - 1e-9)))] if y < ejesY[j + 1] - 1e-6]))
frames = []; shells = []; ang = {}
def frame(a, b, sec): frames.append((a, b, sec)); return len(frames)
tops = {}
for p in range(npisos + 1):
    z = p * h
    if p > 0:
        for i, x in enumerate(ejesX):
            for j, y in enumerate(ejesY): frame(node(x, y, z - h), node(x, y, z), COL)
        for j, y in enumerate(ejesY):   # vigas principales en X, un elemento por vano
            for i in range(nx): frame(node(ejesX[i], y, z), node(ejesX[i + 1], y, z), VIGA)
        for i, x in enumerate(ejesX):   # vigas principales en Y, partidas en cada vigueta
            for a, b in zip(ys[:-1], ys[1:]): frame(node(x, a, z), node(x, b, z), VIGA)
        for y in ys:                    # viguetas en X (solo en las y que no son eje)
            if y in [round(v, 6) for v in ejesY]: continue
            for i in range(nx): frame(node(ejesX[i], y, z), node(ejesX[i + 1], y, z), VIGUETA)
        for a, b in zip(ys[:-1], ys[1:]):   # deck entre viguetas
            if pano == "continuo": shells.append((node(0, a, z), node(nx * Lx, a, z), node(nx * Lx, b, z), node(0, b, z)))
            else:
                for i in range(nx): shells.append((node(ejesX[i], a, z), node(ejesX[i + 1], a, z), node(ejesX[i + 1], b, z), node(ejesX[i], b, z)))
        tops[p] = [node(x, y, z) for x in ejesX for y in ejesY]
def escribir(suf, selfw, q, ex):
    L = ["# mezanine %dx%d vanos, %d pisos, Lx %.2f Ly %.2f h %.2f, viguetas en %s cada %.2f, pano=%s, patron %s" % (((ny, nx, npisos, Ly, Lx) if SWAP else (nx, ny, npisos, Lx, Ly)) + (h, "Y (lado corto)" if SWAP else "X", s, pano, suf))]
    for (x, y, z), i in sorted(nodes.items(), key=lambda kv: kv[1]): L.append("node %d %g %g %g" % ((i, y, x, z) if SWAP else (i, x, y, z)))
    for (x, y, z), i in nodes.items():
        if z == 0: L.append("support %d fixed" % i)
    for k, (a, b, sec) in enumerate(frames, 1): L.append("frame %d %d %d %s" % (k, a, b, sec))
    for k, q4 in enumerate(shells, 1):
        L.append("shell %d %d %d %d %d %g %g 0 %g" % ((k,) + q4 + (T_DECK, E_DECK, RHO_DECK)))
        L.append("shellmod %d 1 1 1 0 0 0 1 1" % k)
    if selfw: L.append("selfweight 1")
    if q:   # one-way por viguetas y vigas X: ancho tributario s (bordes s/2)
        inv = {i: xyz for xyz, i in nodes.items()}
        for k, (a, b, sec) in enumerate(frames, 1):
            (xa, ya, za), (xb, yb, zb) = inv[a], inv[b]
            if za != zb or za == 0 or abs(ya - yb) > 1e-9: continue    # solo barras horizontales en X
            y = ya; i0 = ys.index(round(y, 6)); w = 0.0
            if i0 > 0: w += (ys[i0] - ys[i0 - 1]) / 2
            if i0 < len(ys) - 1: w += (ys[i0 + 1] - ys[i0]) / 2
            L.append("frameload %d 0 0 %g" % (k, -q * w))
    if ex:
        for p in range(1, npisos + 1):
            for i in tops[p]: L.append(("load %d 0 %g 0" if SWAP else "load %d %g 0 0") % (i, ex / len(tops[p])))   # Ex en +x GLOBAL tambien con el intercambio
    L.append("solve"); open(base + "_" + suf + ".heks", "w").write("\n".join(L) + "\n")
escribir("pp", True, 0, 0); escribir("scm", False, Q_SCM, 0); escribir("cv", False, Q_CV, 0); escribir("ex", False, 0, EX)
print("%s: %d nudos, %d barras, %d panos (%s); viguetas en %s, posiciones: %s" % (base, len(nodes), len(frames), len(shells), pano, "Y (lado corto)" if SWAP else "X", ys))
