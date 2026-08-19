# -*- coding: utf-8 -*-
"""Los cuatro tests del paper ITW 1990, traducidos de los `.cpd` de Jorge.

Originales: `Test_II_Cantilever_didactico.cpd`, `Test_III_Cook_didactico.cpd`,
`Test_IV_Hemisferio_didactico.cpd` y `Muro_Acople_ITW.cpd`. Se guardan aqui en
Python porque el `.cpd` necesita Hekatan Calc y `Hekatan.Cli` hoy no compila.

Las convenciones de los `.cpd` NO son cosmeticas — son justo lo que hacia falta
para reproducir el paper y las tenia mal antes de leerlos:

  * el borde empotrado sujeta `u_x`, `u_z` **y el giro theta_y** (el drilling);
  * la carga de borde se reparte **trapezoidal** (medio peso en los dos nudos de
    los extremos), no parabolica;
  * la flecha de Cook se lee en el nudo mas cercano a **z = 52**, el CENTRO del
    borde cargado — no en la esquina. Calibrado con el Q4 puro, que en ese punto
    da 11.8026 / 18.2885 / 22.0779 / 23.4303 contra el clasico 11.85 / 18.30 /
    22.08 / 23.43.

Ejes como en ETABS/SAP: X a lo ancho, Z en altura, Y normal al plano. Por eso
los GDL por nudo son `(u_x, u_z, theta_y)`.

    python -m hekatan_struct.benchmarks_itw
"""
from __future__ import annotations

import numpy as np

from .elements.membrane_itw import k_membrana_itw

# Valores de referencia del paper (Tablas I-IV) y de la literatura.
REF = {
    "patch_flecha": 1.5,        # exacto: M L^2/(8EI)
    "patch_giro": 0.6,          # exacto: M L/(2EI)
    "cantilever": 0.3553,       # Timoshenko-Goodier, Fig. 4
    "cook": 23.91,              # referencia refinada, punto C = (48,52)
    "hemisferio": 0.094,        # MacNeal-Harder
}


def malla_bilineal(esquinas, na: int, nb: int):
    """Malla na x nb sobre el cuadrilatero de 4 esquinas, mapeo bilineal."""
    (x1, y1), (x2, y2), (x3, y3), (x4, y4) = esquinas
    nodos, idx = [], {}
    for j in range(nb + 1):
        for i in range(na + 1):
            a, b = i / na, j / nb
            N = ((1 - a) * (1 - b), a * (1 - b), a * b, (1 - a) * b)
            idx[(i, j)] = len(nodos)
            nodos.append((N[0] * x1 + N[1] * x2 + N[2] * x3 + N[3] * x4,
                          N[0] * y1 + N[1] * y2 + N[2] * y3 + N[3] * y4))
    elems = [[idx[(i, j)], idx[(i + 1, j)], idx[(i + 1, j + 1)], idx[(i, j + 1)]]
             for j in range(nb) for i in range(na)]
    return np.array(nodos), elems, idx


def resolver(nodos, elems, E, nu, t, sujetos, cargas, **kw):
    """Ensambla, aplica apoyos por ELIMINACION y resuelve. 3 GDL por nudo."""
    n = 3 * len(nodos)
    K = np.zeros((n, n))
    for e in elems:
        Ke = k_membrana_itw([tuple(nodos[q]) for q in e], E, nu, t, **kw)
        g = [3 * q + k for q in e for k in range(3)]
        K[np.ix_(g, g)] += Ke
    F = np.zeros(n)
    for (nd, k), v in cargas.items():
        F[3 * nd + k] += v
    libres = [i for i in range(n) if i not in sujetos]
    U = np.zeros(n)
    U[libres] = np.linalg.solve(K[np.ix_(libres, libres)], F[libres])
    return U


def _pesos_trapecio(coord):
    """Reparto trapezoidal a lo largo de un borde: medio peso en los extremos."""
    w = np.zeros(len(coord))
    for j in range(len(coord) - 1):
        d = coord[j + 1] - coord[j]
        w[j] += d / 2.0
        w[j + 1] += d / 2.0
    return w


# ── TEST I — patch test de orden superior (Fig. 3 / Tabla I) ────────────────
def test_i_patch(nx: int = 6, **kw):
    """Viga a flexion pura. Con malla regular la respuesta es EXACTA: 1.5 y 0.6.

    Apoyos MINIMOS a proposito (nudo inferior izquierdo en u,v; inferior derecho
    en v): asi el test mide el elemento y no las condiciones de contorno.
    El momento unidad se aplica como PAR DE FUERZAS P = 1 arriba y abajo.
    """
    L, H, E, nu, t, P = 10.0, 1.0, 100.0, 0.0, 1.0, 1.0
    nod, el, idx = malla_bilineal([(0, 0), (L, 0), (L, H), (0, H)], nx, 1)
    li, ri = idx[(0, 0)], idx[(nx, 0)]
    suj = {3 * li, 3 * li + 1, 3 * ri + 1}
    car = {(idx[(0, 1)], 0): +P, (idx[(0, 0)], 0): -P,
           (idx[(nx, 1)], 0): -P, (idx[(nx, 0)], 0): +P}
    U = resolver(nod, el, E, nu, t, suj, car, **kw)
    m = nx // 2
    flecha = 0.5 * (U[3 * idx[(m, 0)] + 1] + U[3 * idx[(m, 1)] + 1])
    giro = 0.5 * (U[3 * idx[(nx, 0)] + 2] + U[3 * idx[(nx, 1)] + 2])
    return abs(flecha), abs(giro)


# ── TEST II — cantilever corto (Fig. 4 / Tabla II) ──────────────────────────
def test_ii_cantilever(nx: int = 16, ny: int = 4, **kw):
    """l=48, h=12, E=30000, nu=0.25, V=40, t=1. Exacto 0.3553."""
    L, H, E, nu, t, V = 48.0, 12.0, 30000.0, 0.25, 1.0, 40.0
    nod, el, idx = malla_bilineal([(0, 0), (L, 0), (L, H), (0, H)], nx, ny)
    suj = set()
    for j in range(ny + 1):                       # empotrado: u, v Y el drilling
        q = idx[(0, j)]
        suj.update({3 * q, 3 * q + 1, 3 * q + 2})
    zs = np.array([nod[idx[(nx, j)]][1] for j in range(ny + 1)])
    w = _pesos_trapecio(zs)
    w = w / w.sum() * V
    car = {(idx[(nx, j)], 1): w[j] for j in range(ny + 1)}
    U = resolver(nod, el, E, nu, t, suj, car, **kw)
    return abs(0.5 * (U[3 * idx[(nx, 0)] + 1] + U[3 * idx[(nx, ny)] + 1]))


# ── TEST III — membrana de Cook (Fig. 5 / Tabla III) ────────────────────────
def test_iii_cook(n: int = 8, **kw):
    """Trapecio (0,0)-(48,44)-(48,60)-(0,44), E=1, nu=1/3, t=1, V=1.

    Se lee en C = (48,52), el centro del borde cargado. Referencia 23.91.
    """
    E, nu, t, V = 1.0, 1.0 / 3.0, 1.0, 1.0
    nod, el, idx = malla_bilineal([(0, 0), (48, 44), (48, 60), (0, 44)], n, n)
    suj = set()
    for j in range(n + 1):
        q = idx[(0, j)]
        suj.update({3 * q, 3 * q + 1, 3 * q + 2})
    zs = np.array([nod[idx[(n, j)]][1] for j in range(n + 1)])
    w = _pesos_trapecio(zs)
    w = w / w.sum() * V
    car = {(idx[(n, j)], 1): w[j] for j in range(n + 1)}
    U = resolver(nod, el, E, nu, t, suj, car, **kw)
    # el nudo mas cercano a z = 52, igual que hace el .cpd
    j = min(range(n + 1), key=lambda k: abs(nod[idx[(n, k)]][1] - 52.0))
    return U[3 * idx[(n, j)] + 1]


def convergencia():
    """La tabla que hay que mirar: si converge, el elemento esta bien."""
    return {
        "patch (exacto 1.5 / 0.6)": [test_i_patch(k) for k in (2, 4, 6, 12)],
        "cantilever (exacto 0.3553)": [test_ii_cantilever(a, b)
                                       for a, b in ((4, 1), (8, 2), (16, 4))],
        "cook en C (ref 23.91)": [test_iii_cook(k) for k in (2, 4, 8, 16)],
    }


if __name__ == "__main__":                     # pragma: no cover
    print("TEST I  patch test de orden superior (exacto: flecha 1.5, giro 0.6)")
    for k in (2, 4, 6, 12):
        f, g = test_i_patch(k)
        print("   nx=%-3d flecha=%.6f  giro=%.6f" % (k, f, g))
    print("TEST II cantilever corto (exacto 0.3553 / paper 16x4 = 0.3543)")
    for a, b in ((4, 1), (8, 2), (16, 4)):
        print("   %2dx%-2d  %.6f" % (a, b, test_ii_cantilever(a, b)))
    print("TEST III Cook en C=(48,52) (referencia refinada 23.91)")
    for k in (2, 4, 8, 16):
        print("   %2dx%-2d  %.4f" % (k, k, test_iii_cook(k)))
    from .elements.membrane_itw import modos_nulos
    print("modos de energia nula del elemento (tienen que ser 3):")
    for ng in (3, 2):
        k = modos_nulos([(0, 0), (1, 0), (1, 1), (0, 1)], n_gauss=ng)
        print("   Gauss %dx%d -> %d %s" % (ng, ng, k, "OK" if k == 3 else "MECANISMO"))
