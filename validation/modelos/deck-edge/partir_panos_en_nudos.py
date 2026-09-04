# -*- coding: utf-8 -*-
"""Parte cada `shell` de un .heks en los NUDOS INTERMEDIOS que caen sobre sus bordes sin ser
nudos del pano (correas partidas en los porticos, viguetas que rematan en el borde...).
Es lo que ETABS hace por su cuenta con el EDGE CONSTRAINT (encendido por defecto): cose esos
nudos al borde del pano. SAP2000 y Hekatan no lo hacen: un pano de 4 nudos solo toca 4 nudos.
Con el pano partido los tres programas ven la MISMA conexion.
    python partir_panos_en_nudos.py entrada.heks salida.heks
Los puntos de la rejilla que no existen se crean (bilineal). Los sub-panos heredan t, E, rho,
shellmod, shelltype, shellang; `areaload` se reparte por area.
"""
import sys, numpy as np
src = open(sys.argv[1], encoding="utf-8").read().splitlines()
nodes = {}; order = []
for l in src:
    t = l.split()
    if t and t[0] == "node": nodes[int(t[1])] = np.array(list(map(float, t[2:5]))); order.append(int(t[1]))
N = {i: nodes[i] for i in order}; ids = list(N.keys()); P = np.array([N[i] for i in ids])
shells = {}; extra = {}   # id -> tokens ; id -> lineas asociadas (shellmod, shelltype, shellang, areaload)
for l in src:
    t = l.split()
    if not t: continue
    if t[0] in ("shell", "plate", "s"): shells[int(t[1])] = t
    elif t[0] in ("shellmod", "shelltype", "plateform", "shellang", "areaload", "qarea"): extra.setdefault(int(t[1]), []).append(t)
TOL = 1e-4
def sobre_borde(a, b, excl):
    L = np.linalg.norm(b - a); d = (b - a) / L; v = P - a; s = v @ d
    perp = np.linalg.norm(v - np.outer(s, d), axis=1)
    m = (s > 1e-6) & (s < L - 1e-6) & (perp < TOL)
    return sorted((s[j] / L) for j in np.where(m)[0] if ids[j] not in excl)
nuevo_id = max(ids) + 1; nuevos = []; salida_shells = []; nsplit = 0
def nudo_en(p):
    global nuevo_id
    d = np.linalg.norm(P - p, axis=1); j = int(np.argmin(d))
    if d[j] < TOL: return ids[j]
    for (i2, q) in nuevos:
        if np.linalg.norm(q - p) < TOL: return i2
    nuevos.append((nuevo_id, p.copy())); nuevo_id += 1; return nuevo_id - 1
sid_next = max(shells) + 1
for sid, t in sorted(shells.items()):
    q = [int(x) for x in t[2:6]]; p = [N[i] for i in q]
    s0 = sobre_borde(p[0], p[1], q); s2 = [1 - v for v in sobre_borde(p[2], p[3], q)]
    t1 = sobre_borde(p[1], p[2], q); t3 = [1 - v for v in sobre_borde(p[3], p[0], q)]
    def union(a, b):
        u = sorted(set(round(v, 6) for v in a + b)); out = []
        for v in u:
            if not out or v - out[-1] > 1e-5: out.append(v)
        return out
    # Solo se parte en las posiciones que existen en LOS DOS bordes opuestos (franjas entre
    # viguetas/correas). Un nudo que cae en un solo borde no genera una linea de nudos nuevos
    # flotando en la membrana (sin rigidez fuera del plano se disparan: 1.16 m en el galpon).
    def comunes(a, b):
        out = []
        for v in a:
            if any(abs(v - w) < 1e-5 for w in b) and not any(abs(v - u) < 1e-5 for u in out): out.append(round(v, 6))
        return sorted(out)
    if "--todos" in sys.argv: S = [0.0] + union(s0, s2) + [1.0]; T = [0.0] + union(t1, t3) + [1.0]
    else: S = [0.0] + comunes(s0, s2) + [1.0]; T = [0.0] + comunes(t1, t3) + [1.0]
    if len(S) == 2 and len(T) == 2: salida_shells.append((sid, q, t, 1.0)); continue
    nsplit += 1
    def bil(s, tt):
        return (1 - s) * (1 - tt) * p[0] + s * (1 - tt) * p[1] + s * tt * p[2] + (1 - s) * tt * p[3]
    G = [[nudo_en(bil(s, tt)) for s in S] for tt in T]
    Atot = (len(S) - 1) * (len(T) - 1); primero = True
    for a in range(len(T) - 1):
        for b in range(len(S) - 1):
            quad = [G[a][b], G[a][b + 1], G[a + 1][b + 1], G[a + 1][b]]
            frac = (S[b + 1] - S[b]) * (T[a + 1] - T[a])
            nid = sid if primero else sid_next
            if not primero: sid_next += 1
            primero = False
            salida_shells.append((nid, quad, t, frac))
out = []
for l in src:
    t = l.split()
    if t and t[0] in ("shell", "plate", "s", "shellmod", "shelltype", "plateform", "shellang", "areaload", "qarea"): continue
    if t and t[0] == "solve": break
    out.append(l)
for (i2, q) in nuevos: out.append("node %d %.6f %.6f %.6f" % (i2, q[0], q[1], q[2]))
for nid, quad, t, frac in salida_shells:
    out.append(" ".join(["shell", str(nid)] + [str(v) for v in quad] + t[6:]))
    for ex in extra.get(int(t[1]), []):
        if ex[0] in ("areaload", "qarea"): out.append("%s %d %s" % (ex[0], nid, ex[2]))   # q por m2: igual en cada sub-pano
        else: out.append(" ".join([ex[0], str(nid)] + ex[2:]))
out.append("solve")
open(sys.argv[2], "w", encoding="utf-8").write("\n".join(out) + "\n")
print("%s: %d panos, %d partidos -> %d sub-panos, %d nudos nuevos -> %s" % (sys.argv[1], len(shells), nsplit, len(salida_shells), len(nuevos), sys.argv[2]))
