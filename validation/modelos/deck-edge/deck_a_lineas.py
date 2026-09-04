# -*- coding: utf-8 -*-
"""El PESO PROPIO de los panos membrana (shellmod m11=m22=m12=0) de un .heks pasa a CARGAS DE
LINEA sobre las barras de sus bordes, por area tributaria (como ETABS con los pisos membrana /
deck). El pano se queda con rigidez pero con rho 0. Asi Hekatan (y SAP2000, que pesa el pano en
sus 4 esquinas) cargan las viguetas como ETABS y el Dead se puede comparar.
    python deck_a_lineas.py entrada.heks salida.heks
"""
import sys, numpy as np
from deck_tributaria import tributaria
G = 9.80665
src = open(sys.argv[1], encoding="utf-8").read().splitlines()
nodes = {}; frames = {}; shells = {}; mods = {}; sw = 0.0
for l in src:
    t = l.split()
    if not t: continue
    if t[0] == "node": nodes[int(t[1])] = np.array(list(map(float, t[2:5])))
    elif t[0] == "frame": frames[int(t[1])] = (int(t[2]), int(t[3]))
    elif t[0] in ("shell", "plate", "s"): shells[int(t[1])] = t
    elif t[0] == "shellmod" and len(t) >= 10: mods[int(t[1])] = [float(v) for v in t[2:10]]
    elif t[0] in ("selfweight", "peso", "sw"): sw = float(t[1]) if len(t) > 1 else 1.0
TOL = 1e-4
def barras_en(a, b):
    d = b - a; L = np.linalg.norm(d); d = d / L; out = []
    for fid, (i, j) in frames.items():
        ok = True
        for p in (nodes[i], nodes[j]):
            v = p - a; s = np.dot(v, d)
            if s < -TOL or s > L + TOL or np.linalg.norm(v - s * d) > TOL: ok = False; break
        if ok: out.append(fid)
    return out
nuevas = {}; total = 0.0; sin_barra = 0.0
for sid, t in shells.items():
    m = mods.get(sid)
    if not m or any(abs(v) > 1e-12 for v in m[3:6]): continue
    rho = float(t[9]) if len(t) > 9 else 2.45; th = float(t[6]); q = rho * th * G * sw
    if q == 0: continue
    P = np.array([nodes[int(x)] for x in t[2:6]])
    for k, (W, L) in enumerate(tributaria(P, q)):
        a, b = P[k], P[(k + 1) % 4]; fids = barras_en(a, b); total += W
        if not fids: sin_barra += W; continue
        Ltot = sum(np.linalg.norm(nodes[frames[f][1]] - nodes[frames[f][0]]) for f in fids)
        for f in fids: nuevas[f] = nuevas.get(f, 0.0) + W / Ltot
out = []
for l in src:
    t = l.split()
    if t and t[0] in ("shell", "plate", "s") and int(t[1]) in shells:
        m = mods.get(int(t[1]))
        if m and not any(abs(v) > 1e-12 for v in m[3:6]):
            t = t[:8] + [t[8] if len(t) > 8 else "0", "0"]      # rho 0: el pano ya no pesa
            l = " ".join(t)
    if t and t[0] == "solve":
        for f, w in nuevas.items(): out.append("frameload %d 0 0 %.6f" % (f, -w))
    out.append(l)
open(sys.argv[2], "w", encoding="utf-8").write("\n".join(out) + "\n")
print("%s -> %s: peso de membranas %.3f kN a %d barras (%.3f kN sin barra en el borde)" % (sys.argv[1], sys.argv[2], total, len(nuevas), sin_barra))
