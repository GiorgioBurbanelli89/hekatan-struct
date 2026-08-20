# -*- coding: utf-8 -*-
"""Las herramientas de medida del banco: comparar una formulación contra ETABS.

Todo lo de aquí opera sobre **matrices**, nunca sobre desplazamientos. Un
desplazamiento es la matriz ya mezclada con apoyos y cargas: si sale mal, no dice
DÓNDE. La matriz sí, y por bloques dice incluso qué parte de la formulación falla
— fue así como se vio que `K_uu` coincidía al 0.00 % mientras `K_uθ` se iba al
328 %, que es el diagnóstico que desatascó el drilling.
"""
from __future__ import annotations

import json
import os
import subprocess
import sys

import numpy as np

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
REF = os.path.join(RAIZ, "galpon-bodega-electoral")
sys.path.insert(0, os.path.join(RAIZ, "hekatan-struct", "hekatan-struct-py", "src"))

# GDL dentro de la 12x12: [u,v,tz] por nudo
UU = [3 * i + k for i in range(4) for k in (0, 1)]
TT = [3 * i + 2 for i in range(4)]
# el mismo bloque dentro de la 24x24 que escupe el CLI de C++
GDL24 = [6 * i + k for i in range(4) for k in (0, 1, 5)]

HG = np.array([1.0, -1.0, 1.0, -1.0])       # el modo de reloj de arena


def casos():
    """[(nombre, pts, E, nu, t, K_de_ETABS)] — las 10 geometrías medidas."""
    D = json.load(open(os.path.join(REF, "memb12.json"), encoding="utf-8"))
    out = []
    for k, v in D.items():
        K = np.load(os.path.join(REF, "K12_%s.npy" % k))
        out.append((k, [tuple(p) for p in v["pts"]], v["E"], v["nu"], v["t"], K))
    return out


def k_nuestra(pts, E, nu, t, **kw):
    from hekatan_struct.elements.membrane_itw import k_membrana_itw
    return k_membrana_itw(pts, E, nu, t, **kw)


def rel(A, B):
    """‖A−B‖ / ‖B‖ en %, o NaN si B es nulo."""
    n = np.linalg.norm(B)
    return np.linalg.norm(A - B) / n * 100.0 if n > 1e-12 else float("nan")


def bloques(K):
    """(K_uu, K_uθ, K_θθ) — separar la matriz por lo que significa cada parte."""
    return K[np.ix_(UU, UU)], K[np.ix_(UU, TT)], K[np.ix_(TT, TT)]


def comparar(**kw):
    """[(nombre, d_uu, d_uθ, d_θθ, d_total)] de una formulación contra ETABS."""
    filas = []
    for nom, pts, E, nu, t, Ke in casos():
        Kn = k_nuestra(pts, E, nu, t, **kw)
        d = [rel(a, b) for a, b in zip(bloques(Kn), bloques(Ke))]
        filas.append((nom, d[0], d[1], d[2], rel(Kn, Ke)))
    return filas


def residuo(pts, E, nu, t, Ke, **kw):
    """El sobrante simetrizado, sus autovalores relativos y sus autovectores.

    Mirar el AUTOVECTOR dominante de lo que sobra es lo que identificó el término
    de drilling de ETABS: salió `θ_nodal − θ_sólido_rígido`, o sea el rango uno
    de Wilson, con `k₀ = 0.4·G` exacto.
    """
    R = Ke - k_nuestra(pts, E, nu, t, **kw)
    R = 0.5 * (R + R.T)
    w, V = np.linalg.eigh(R)
    o = np.argsort(np.abs(w))[::-1]
    return R, np.abs(w[o]) / max(np.abs(w[o[0]]), 1e-300), V[:, o]


def describe_modo(vec):
    """Un autovector, leído como ingeniero: qué hacen u, v y θ."""
    v = vec / max(np.abs(vec).max(), 1e-300)
    u, vv, th = v[0::3], v[1::3], v[2::3]
    peso = np.linalg.norm(th) / max(np.linalg.norm(v), 1e-300)
    def pinta(x):
        return "[" + " ".join("%+5.2f" % q for q in x) + "]"
    return "u %s  v %s  θ %s   (%.0f %% en los giros)" % (
        pinta(u), pinta(vv), pinta(th), peso * 100)


def base_hourglass():
    """Los tres modos de reloj de arena: en u, en v y en θ."""
    B = []
    for c in (0, 1, 2):
        x = np.zeros(12)
        for i in range(4):
            x[3 * i + c] = HG[i]
        B.append(x)
    return B


def ajustar_hourglass(R):
    """Ajusta R con los 6 productos de los modos de reloj de arena.

    Devuelve ({nombre: coef}, R_restante). Los coeficientes dicen mucho: si
    crecen con ν y son NEGATIVOS, no es una estabilización añadida (esa sería
    positiva y constante) sino integración reducida del término volumétrico.
    """
    hs = base_hourglass()
    nom = ["u", "v", "t"]
    M, et = [], []
    for i in range(3):
        for j in range(i, 3):
            M.append(0.5 * (np.outer(hs[i], hs[j]) + np.outer(hs[j], hs[i])))
            et.append(nom[i] + nom[j])
    A = np.array([m.ravel() for m in M]).T
    c, *_ = np.linalg.lstsq(A, R.ravel(), rcond=None)
    return dict(zip(et, c)), R - sum(x * m for x, m in zip(c, M))


def triada_cpp(pts):
    """La tríada local tal como la define `getLocalStiffnessMatrixShellQ4`.

    ⚠️ El eje X local del C++ es la **media de dos lados**, no un lado:

        localX = (p1 − p0) + (p2 − p3)

    En un cuadrado, un rectángulo, un paralelogramo o un trapecio con los lados
    de arriba y de abajo paralelos, esos dos vectores **son paralelos** y la
    media apunta igual que `p1 − p0`. En un cuadrilátero **general** no, y ahí
    los ejes del C++ y los globales se separan (3.47° en el caso de `memb12`).
    """
    P = np.array([(x, y, 0.0) for x, y in pts])
    lx = (P[1] - P[0]) + (P[2] - P[3]); lx /= np.linalg.norm(lx)
    lz = np.cross(P[2] - P[0], P[3] - P[1]); lz /= np.linalg.norm(lz)
    ly = np.cross(lz, lx); ly /= np.linalg.norm(ly)
    lx = np.cross(ly, lz); lx /= np.linalg.norm(lx)
    return lx, ly


def rot12(cos_a, sin_a):
    """Gira los GDL `[u, v, θz]` de los 4 nudos. El giro normal no rota."""
    T = np.zeros((12, 12))
    for i in range(4):
        T[3 * i:3 * i + 2, 3 * i:3 * i + 2] = [[cos_a, -sin_a], [sin_a, cos_a]]
        T[3 * i + 2, 3 * i + 2] = 1.0
    return T


def k_del_cpp(pts, E, nu, t, tipo, gamma=0.4, en_globales=True):
    """La 12x12 de `kelem_native.exe`, **girada a ejes globales** por defecto.

    Si esto y `k_nuestra` no coinciden a 1e-10, o son dos elementos distintos o
    se están comparando en ejes distintos.

    ⚠️ Y lo segundo ya pasó, el 19-ago-2026, en el estreno de este banco: el C++
    devuelve la K en **sus** ejes locales y aquí se comparaba contra la de Python
    en **globales**. Con cuadrado, rectángulo, paralelogramo y trapecio de lados
    paralelos los dos sistemas coinciden, así que la comparación funcionaba por
    casualidad; con un cuadrilátero general cantó un **5.4 %** que no existía.

    Se comprobó además que la formulación **es invariante** a los ejes locales
    (`3.8e-16` girando una en la otra), o sea que el elemento está sano y el
    fallo era de la comparación. Por eso `en_globales=True` es el defecto: hace
    imposible repetir el error.
    """
    exe = os.path.join(RAIZ, "hekatan-struct", "cli", "native", "kelem_native.exe")
    if not os.path.exists(exe):
        raise FileNotFoundError("falta %s — `bash cli/native/build_kelem_native.sh`" % exe)
    args = [exe]
    for (x, y) in pts:
        args += [str(x), str(y), "0"]
    args += [str(E), str(nu), str(t), str(tipo), str(gamma)]
    r = subprocess.run(args, capture_output=True, text=True, timeout=120)
    if r.returncode:
        raise RuntimeError(r.stderr[:300])
    K24 = np.array([[float(v) for v in l.split()] for l in r.stdout.strip().splitlines()])
    K = K24[np.ix_(GDL24, GDL24)]
    if en_globales:
        lx, _ = triada_cpp(pts)
        T = rot12(lx[0], lx[1])          # local -> global
        K = T @ K @ T.T
    return K


def modos_nulos(K, tol=1e-9):
    """Cuántos modos de energía nula. Tienen que ser 3; con 4 es un mecanismo."""
    w = np.sort(np.abs(np.linalg.eigvalsh(K)))
    return int((w < tol * w.max()).sum())
