# -*- coding: utf-8 -*-
"""El PESO PROPIO de los panos membrana (shellmod m11=m22=m12=0) de un .heks pasa a las barras de
sus bordes por AREA TRIBUTARIA (bisectrices a 45 grados), como ETABS con los pisos membrana/deck.
El pano se queda con rigidez pero con rho 0.
    python deck_a_lineas.py entrada.heks salida.heks [--uniforme]
Por defecto EXACTO: la carga que recibe cada barra de borde es la funcion real (trapecio: rampa
en las esquinas, meseta en el centro) y se convierte en el vector nodal CONSISTENTE de Hermite
(fuerzas + momentos) que se escribe como `load` nodal. Con --uniforme se reparte como carga de
linea uniforme equivalente (`frameload`), que es lo que daba 0.04-0.2 % contra ETABS."""
import sys, numpy as np
from deck_tributaria import muestras
G = 9.80665
src = open(sys.argv[1], encoding="utf-8").read().splitlines()
UNIF = "--uniforme" in sys.argv
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
lineas = {}; nodal = {}; total = 0.0; sin_barra = 0.0
def acum(n, v):
    a = nodal.get(n, np.zeros(6)); nodal[n] = a + v
for sid, t in shells.items():
    m = mods.get(sid)
    if not m or any(abs(v) > 1e-12 for v in m[3:6]): continue
    rho = float(t[9]) if len(t) > 9 else 2.45; th = float(t[6]); q = rho * th * G * sw
    if q == 0: continue
    P = np.array([nodes[int(x)] for x in t[2:6]])
    for k, (pts3d, dA) in enumerate(muestras(P)):        # puntos del pano asignados al borde k
        W = q * dA * len(pts3d); total += W
        a, b = P[k], P[(k + 1) % 4]; fids = barras_en(a, b)
        if not fids: sin_barra += W; continue
        if UNIF:
            Ltot = sum(np.linalg.norm(nodes[frames[f][1]] - nodes[frames[f][0]]) for f in fids)
            for f in fids: lineas[f] = lineas.get(f, 0.0) + W / Ltot
            continue
        # EXACTO: cada punto de muestra es una carga dP = q*dA en la proyeccion sobre el borde;
        # va a la barra del borde que la contiene, con las funciones de Hermite de esa barra.
        d = b - a; Lb = np.linalg.norm(d); d /= Lb
        s = (pts3d - a) @ d                                  # posicion a lo largo del borde
        for f in fids:
            i, j = frames[f]; pi, pj = nodes[i], nodes[j]
            si, sj = np.dot(pi - a, d), np.dot(pj - a, d)
            lo, hi = min(si, sj), max(si, sj)
            sel = (s >= lo - 1e-9) & (s < hi + 1e-9) if hi >= Lb - 1e-6 else (s >= lo - 1e-9) & (s < hi - 1e-9)
            if not sel.any(): continue
            L = hi - lo; x = s[sel] - (si if si < sj else sj)
            if si > sj: x = L - x                            # medido desde el nudo i de la barra
            xi = x / L; dP = q * dA
            N1 = 1 - 3 * xi**2 + 2 * xi**3; N2 = L * (xi - 2 * xi**2 + xi**3)
            N3 = 3 * xi**2 - 2 * xi**3;     N4 = L * (-xi**2 + xi**3)
            tv = (pj - pi) / L; w = np.array([0.0, 0.0, -1.0]); txw = np.cross(tv, w)
            acum(i, np.concatenate([w * dP * N1.sum(), txw * dP * N2.sum()]))
            acum(j, np.concatenate([w * dP * N3.sum(), txw * dP * N4.sum()]))
out = []
for l in src:
    t = l.split()
    if t and t[0] in ("shell", "plate", "s") and int(t[1]) in shells:
        m = mods.get(int(t[1]))
        if m and not any(abs(v) > 1e-12 for v in m[3:6]):
            t = t[:8] + [t[8] if len(t) > 8 else "0", "0"]; l = " ".join(t)
    if t and t[0] == "load" and int(t[1]) in nodal:
        acum(int(t[1]), np.array([float(v) for v in t[2:8]] + [0.0] * (6 - len(t[2:8])))); continue
    if t and t[0] == "solve":
        for f, w in lineas.items(): out.append("frameload %d 0 0 %.6f" % (f, -w))
        for n, v in sorted(nodal.items()): out.append("load %d %s" % (n, " ".join("%.8g" % x for x in v)))
    out.append(l)
open(sys.argv[2], "w", encoding="utf-8").write("\n".join(out) + "\n")
print("%s -> %s: peso de membranas %.3f kN (%s) a %d barras / %d nudos; %.3f kN sin barra en el borde" % (sys.argv[1], sys.argv[2], total, "uniforme" if UNIF else "exacto Hermite", len(lineas), len(nodal), sin_barra))
