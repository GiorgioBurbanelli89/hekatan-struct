# -*- coding: utf-8 -*-
"""`deck etabs` — el deck como lo entiende ETABS (4-sep-2026). Espejo de `aplicarDeckEtabs`
de cliModeler.ts, sobre el modelo por IDs que lee `heks.py` ANTES de montar los elementos.

Con la MISMA malla, ETABS y SAP2000 daban distinto en el galpon (4.5 %) y en un mezanine
(Dead 75 %). No era el elemento: ETABS conecta el pano de piso a TODO nudo que toca (edge
constraint en los inclinados, cookie-cut en la viga que cruza un piso horizontal) y lleva el
peso de la membrana a las vigas de borde por area tributaria. SAP2000 y Hekatan solo conectan
los 4 nudos y pesan en las 4 esquinas.

  1. Los panos MEMBRANA (shellmod m11 = m22 = m12 = 0) se PARTEN en las posiciones que existen
     en DOS bordes opuestos (correas partidas en los porticos, vigas que cruzan). No se
     inventan nudos: si falta alguno de la rejilla, se parte solo en la direccion con mas cortes.
  2. Su peso propio y su `areaload` van a las BARRAS DE BORDE por area tributaria (bisectrices a
     45 grados, muestreo n x n en el plano del pano) como vector nodal CONSISTENTE de Hermite
     (fuerzas + momentos). Borde sin barra: a sus dos esquinas a medias.
Medido: galpon partido ETABS 2e-5 %, mezanines Dead 0.000 %.
"""
from __future__ import annotations
import numpy as np

G = 9.80665
TOL = 1e-4


def es_membrana(sid: int, smod_dir: dict[int, list[float]]) -> bool:
    d = smod_dir.get(sid)
    return bool(d) and all(abs(v) < 1e-12 for v in d[3:6])


def muestras_tributarias(P: np.ndarray, n: int = 200):
    """Por borde k (k -> k+1): (puntos 3D del pano cuya region tributaria es ese borde, dA)."""
    P = np.asarray(P, float); c = P.mean(axis=0)
    e1 = P[1] - P[0]; nrm = np.cross(e1, P[3] - P[0]); nrm /= np.linalg.norm(nrm)
    e1 /= np.linalg.norm(e1); e2 = np.cross(nrm, e1)
    Q = np.array([[np.dot(p - c, e1), np.dot(p - c, e2)] for p in P])
    xs = Q[:, 0].min() + (Q[:, 0].max() - Q[:, 0].min()) * (np.arange(n) + 0.5) / n
    ys = Q[:, 1].min() + (Q[:, 1].max() - Q[:, 1].min()) * (np.arange(n) + 0.5) / n
    X, Y = np.meshgrid(xs, ys); pts = np.stack([X.ravel(), Y.ravel()], 1)
    sgn = np.zeros(len(pts), int)
    for i in range(4):
        a, b = Q[i], Q[(i + 1) % 4]
        cr = (b[0] - a[0]) * (pts[:, 1] - a[1]) - (b[1] - a[1]) * (pts[:, 0] - a[0])
        sgn += (cr >= 0).astype(int)
    pts = pts[(sgn == 4) | (sgn == 0)]
    dists = []
    for i in range(4):
        a, b = Q[i], Q[(i + 1) % 4]; d = b - a; L2 = float(d @ d)
        t = np.clip(((pts - a) @ d) / L2, 0, 1)
        dists.append(np.linalg.norm(pts - (a + t[:, None] * d), axis=1))
    borde = np.argmin(np.array(dists), axis=0)
    area = 0.5 * abs(np.linalg.norm(np.cross(P[2] - P[0], P[3] - P[1])))
    dA = area / len(pts) if len(pts) else 0.0
    out = []
    for k in range(4):
        sel = pts[borde == k]
        out.append((c + sel[:, :1] * e1 + sel[:, 1:2] * e2, dA))
    return out


def aplicar_deck_etabs(nodos: dict, frames: list[dict], shells: list[dict], smod_dir: dict,
                       smod: dict, q_area: dict, sang: dict, stipo: dict, cargas: dict,
                       sw_mult: float) -> set[int]:
    """Modifica `shells` (los parte), `cargas` (id -> [6], acumula) y `q_area` (quita las de
    las membranas ya repartidas). Devuelve los IDs de shell cuyo peso ya fue a las barras
    (el peso propio de esos elementos NO debe volver a aplicarse)."""
    P = {i: np.asarray(p, float) for i, p in nodos.items()}
    ids = list(P.keys()); coords = np.array([P[i] for i in ids]) if ids else np.zeros((0, 3))

    def sobre_borde(a, b, excl):
        d = b - a; L = np.linalg.norm(d); t = d / L
        v = coords - a; s = v @ t
        perp = np.linalg.norm(v - np.outer(s, t), axis=1)
        m = (s > 1e-6) & (s < L - 1e-6) & (perp < TOL)
        return sorted(float(s[j] / L) for j in np.where(m)[0] if ids[j] not in excl)

    def comunes(a, b):
        out = []
        for v in a:
            if any(abs(v - w) < 1e-5 for w in b) and not any(abs(v - u) < 1e-5 for u in out):
                out.append(v)
        return out

    def nudo_en(p):
        if not len(coords): return None
        d = np.linalg.norm(coords - p, axis=1); j = int(np.argmin(d))
        return ids[j] if d[j] < TOL else None

    # ── 1) partir ──
    next_id = max([s["id"] for s in shells], default=0) + 1
    nuevos = []
    for s in shells:
        if not es_membrana(s["id"], smod_dir) or len(s["pts"]) != 4 or any(p not in P for p in s["pts"]):
            nuevos.append(s); continue
        p = [P[i] for i in s["pts"]]
        s0 = sobre_borde(p[0], p[1], s["pts"]); s2 = [1 - v for v in sobre_borde(p[2], p[3], s["pts"])]
        t1 = sobre_borde(p[1], p[2], s["pts"]); t3 = [1 - v for v in sobre_borde(p[3], p[0], s["pts"])]
        S = [0.0] + comunes(s0, s2) + [1.0]; T = [0.0] + comunes(t1, t3) + [1.0]
        if len(S) == 2 and len(T) == 2:
            nuevos.append(s); continue
        bil = lambda u, v: (1 - u) * (1 - v) * p[0] + u * (1 - v) * p[1] + u * v * p[2] + (1 - u) * v * p[3]
        Gr = [[nudo_en(bil(u, v)) for u in S] for v in T]
        if any(x is None for f in Gr for x in f):
            if len(S) >= len(T): T = [0.0, 1.0]
            else: S = [0.0, 1.0]
            Gr = [[nudo_en(bil(u, v)) for u in S] for v in T]
            if any(x is None for f in Gr for x in f):
                nuevos.append(s); continue
        primero = True
        for a in range(len(T) - 1):
            for b in range(len(S) - 1):
                q = [Gr[a][b], Gr[a][b + 1], Gr[a + 1][b + 1], Gr[a + 1][b]]
                sid = s["id"] if primero else next_id
                if not primero:
                    next_id += 1
                    if s["id"] in smod_dir: smod_dir[sid] = list(smod_dir[s["id"]])
                    if s["id"] in smod: smod[sid] = smod[s["id"]]
                    if s["id"] in q_area: q_area[sid] = q_area[s["id"]]
                    if s["id"] in sang: sang[sid] = sang[s["id"]]
                    if s["id"] in stipo: stipo[sid] = stipo[s["id"]]
                primero = False
                nuevos.append(dict(s, id=sid, pts=q))
    shells[:] = nuevos

    # ── 2) peso propio y areaload -> barras de borde (tributario, Hermite) ──
    def acum(nid, v):
        a = cargas.get(nid, [0.0] * 6)
        cargas[nid] = [a[k] + v[k] for k in range(6)]

    def barras_en(a, b):
        d = b - a; L = np.linalg.norm(d); t = d / L; out = []
        for f in frames:
            ok = True
            for nid in (f["nI"], f["nJ"]):
                if nid not in P: ok = False; break
                v = P[nid] - a; s = float(v @ t)
                if s < -TOL or s > L + TOL or np.linalg.norm(v - s * t) > TOL: ok = False; break
            if ok: out.append(f)
        return out

    tribut: set[int] = set()
    for s in shells:
        if not es_membrana(s["id"], smod_dir) or len(s["pts"]) != 4: continue
        qsw = s.get("rho", 2.45) * s["t"] * G * sw_mult if sw_mult else 0.0
        qa = q_area.get(s["id"], 0.0)
        qz = -qsw + qa
        if abs(qz) < 1e-15: continue
        p = [P[i] for i in s["pts"]]
        for k, (pts, dA) in enumerate(muestras_tributarias(np.array(p))):
            if not len(pts): continue
            a, b = p[k], p[(k + 1) % 4]
            fr = barras_en(a, b)
            if not fr:
                W = qz * dA * len(pts)
                acum(s["pts"][k], [0, 0, W / 2, 0, 0, 0]); acum(s["pts"][(k + 1) % 4], [0, 0, W / 2, 0, 0, 0])
                continue
            d = b - a; Lb = np.linalg.norm(d); tb = d / Lb
            sv = (pts - a) @ tb
            for f in fr:
                pi, pj = P[f["nI"]], P[f["nJ"]]
                si, sj = float((pi - a) @ tb), float((pj - a) @ tb)
                lo, hi = min(si, sj), max(si, sj); L = hi - lo
                if L < 1e-9: continue
                ultimo = hi >= Lb - 1e-6
                sel = (sv >= lo - 1e-9) & ((sv <= hi + 1e-9) if ultimo else (sv < hi - 1e-9))
                if not sel.any(): continue
                x = sv[sel] - lo
                if si > sj: x = L - x
                xi = x / L
                F1 = float((1 - 3 * xi**2 + 2 * xi**3).sum()); M1 = float((L * (xi - 2 * xi**2 + xi**3)).sum())
                F3 = float((3 * xi**2 - 2 * xi**3).sum());     M4 = float((L * (-xi**2 + xi**3)).sum())
                tv = (pj - pi) / L; txw = np.cross(tv, np.array([0.0, 0.0, 1.0]))
                dP = qz * dA
                acum(f["nI"], [0, 0, dP * F1, txw[0] * dP * M1, txw[1] * dP * M1, txw[2] * dP * M1])
                acum(f["nJ"], [0, 0, dP * F3, txw[0] * dP * M4, txw[1] * dP * M4, txw[2] * dP * M4])
        tribut.add(s["id"])
        q_area.pop(s["id"], None)
    return tribut
