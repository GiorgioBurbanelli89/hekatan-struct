# -*- coding: utf-8 -*-
"""Bancos de CASCARA 3D — el hemisferio pinzado de MacNeal & Harder.

Por que hace falta este modulo: el banco del ITW (`benchmarks_itw.py`) es de
membrana PLANA, y el bloqueo que se persigue solo aparece cuando la cascara es
CURVA. Hasta hoy el hemisferio solo estaba montado en ETABS y en SAP2000 por la
OAPI (`galpon-bodega-electoral/itw_etabs.py`), o sea que para probar una
formulacion habia que abrir un programa. Aqui se resuelve en Python puro, por
CLI y sin graficos, que es como se puede iterar.

El modelo (Fig. 5 del ITW 1991, y MacNeal & Harder 1985)
--------------------------------------------------------
Un CUARTO de hemisferio de radio `R = 10` con un agujero de 18 grados en el
polo, `E = 68 250 000`, `nu = 0.3`, `t = 0.04`. Dos cargas puntuales `P = 1` en
el ecuador, a 90 grados una de otra y de signo contrario: una tira hacia fuera
en `x` y la otra empuja hacia dentro en `y` — de ahi lo de *pinched*.

Lo que se mide es el desplazamiento del punto de carga en la direccion de la
carga. La referencia es **0.094** (MacNeal & Harder) y **0.093** (Simo).

Por que este banco y no otro
----------------------------
Es *el* test de bloqueo de membrana. La cascara es casi inextensible, asi que
casi toda la energia va a flexion; si el elemento mete rigidez de membrana
espurea, sale mucho mas rigido de lo que toca y el desplazamiento se queda
corto. Con la formulacion del ITW **1990** (Allman + burbuja, Gauss 3x3) sale
**-37 %** en malla 8x8. El paper de **1991** mide **-0.3 %** con la misma
interpolacion pero con su regla de OCHO puntos, ec. (30).

Convenios que importan
----------------------
* La `K` se arma en el plano de cada faceta y se gira a globales con la triada
  de `elements/shell.py` — el mismo camino que `shellQ4.ts` y `shellQ4.cpp`.
* La membrana aporta `[u, v, theta_z]` locales y la placa DKQ `[w, tx, ty]`.
  En una cascara facetada NO estan acopladas dentro del elemento; se acoplan al
  girar a globales, que es justo donde el drilling empieza a pesar.
* Los apoyos se ponen por ELIMINACION, no con muelles gordos: un penalty aqui
  contamina el resultado que se quiere medir.
"""
from __future__ import annotations

import numpy as np

from .elements.membrane_itw import k_membrana_itw
from .elements.plate_dkq import k_placa_dkq
from .elements.shell import shell_q4_local_axes, shell_q4_T

# Referencias publicadas para el hemisferio pinzado
REF_MACNEAL_HARDER = 0.094
REF_SIMO = 0.093

# Tabla II del ITW 1991 (columna del cuadrilatero), para comparar malla a malla
TABLA_II_1991 = {4: 0.087528, 8: 0.093701, 12: 0.093584, 16: 0.093487}

# Los datos de la Fig. 5
E_HEMI, NU_HEMI, T_HEMI, R_HEMI, P_HEMI = 68_250_000.0, 0.3, 0.04, 10.0, 1.0
PHI_MAX = np.deg2rad(72.0)          # 90 - 18: el agujero del polo


def malla_hemisferio(n: int, R: float = R_HEMI):
    """Cuarto de hemisferio con `n x n` cascaras. Devuelve (nodos, elementos).

    `theta` recorre el cuarto (0 a 90 grados) y `phi` sube del ecuador al borde
    del agujero (0 a 72 grados). El nudo `(i, j)` es `i*(n+1) + j`.
    """
    th = np.linspace(0.0, np.pi / 2.0, n + 1)
    ph = np.linspace(0.0, PHI_MAX, n + 1)
    nodos = np.array([[R * np.cos(p) * np.cos(t), R * np.cos(p) * np.sin(t), R * np.sin(p)]
                      for t in th for p in ph])
    elems = [[i * (n + 1) + j, (i + 1) * (n + 1) + j,
              (i + 1) * (n + 1) + j + 1, i * (n + 1) + j + 1]
             for i in range(n) for j in range(n)]
    return nodos, np.array(elems, dtype=int)


def k_cascara_24(nodos4: np.ndarray, E: float, nu: float, t: float, **kw) -> np.ndarray:
    """K 24x24 en GLOBALES de una faceta: membrana ITW + placa DKQ.

    Orden de GDL: `[ux, uy, uz, rx, ry, rz]` por nudo, el del resto del motor.
    """
    R, xy = shell_q4_local_axes(nodos4)
    pts = [tuple(p) for p in xy]

    Km = k_membrana_itw(pts, E, nu, t, **kw)     # [u, v, tz] por nudo
    Kb = k_placa_dkq(pts, E, nu, t)              # [w, tx, ty] por nudo

    K = np.zeros((24, 24))
    im = [6 * i + k for i in range(4) for k in (0, 1, 5)]
    ib = [6 * i + k for i in range(4) for k in (2, 3, 4)]
    K[np.ix_(im, im)] += Km
    K[np.ix_(ib, ib)] += Kb

    T = shell_q4_T(R)                            # global -> local
    return T.T @ K @ T


def hemisferio_pinzado(n: int = 8, **kw):
    """Resuelve el hemisferio y devuelve el desplazamiento del punto de carga.

    `**kw` va tal cual a `k_membrana_itw`: asi se cambia de formulacion sin
    tocar el modelo (`regla="itw8"`, `n_gauss=2`, `w_alpha=...`, `gamma_fac=...`).
    """
    nodos, elems = malla_hemisferio(n)
    ngdl = 6 * len(nodos)
    K = np.zeros((ngdl, ngdl))
    for e in elems:
        Ke = k_cascara_24(nodos[e], E_HEMI, NU_HEMI, T_HEMI, **kw)
        g = [6 * q + k for q in e for k in range(6)]
        K[np.ix_(g, g)] += Ke

    # ── apoyos ────────────────────────────────────────────────────────────
    # Simetria en los dos planos de corte. En el plano y=0 (theta=0) el solido
    # no puede salir del plano ni girar en torno a los ejes contenidos en el:
    #   uy = rx = rz = 0.  En el plano x=0 (theta=90):  ux = ry = rz = 0.
    fijos = set()
    for j in range(n + 1):
        n0 = 0 * (n + 1) + j                    # theta = 0   -> plano xz
        nL = n * (n + 1) + j                    # theta = 90  -> plano yz
        fijos.update({6 * n0 + 1, 6 * n0 + 3, 6 * n0 + 5})
        fijos.update({6 * nL + 0, 6 * nL + 4, 6 * nL + 5})
    # Las dos simetrias dejan suelto un movimiento de solido rigido: la
    # traslacion en z. Se ata en UN punto (el del ecuador en theta=0), que es lo
    # que hace la referencia; atar mas seria cambiar el problema.
    fijos.add(6 * 0 + 2)

    # ── cargas: P hacia +x en (R,0,0) y P hacia -y en (0,R,0) ─────────────
    F = np.zeros(ngdl)
    nA = 0 * (n + 1) + 0                        # theta=0,  phi=0  -> (R, 0, 0)
    nB = n * (n + 1) + 0                        # theta=90, phi=0  -> (0, R, 0)
    F[6 * nA + 0] = +P_HEMI
    F[6 * nB + 1] = -P_HEMI

    libres = np.array(sorted(set(range(ngdl)) - fijos))
    U = np.zeros(ngdl)
    U[libres] = np.linalg.solve(K[np.ix_(libres, libres)], F[libres])
    # el desplazamiento del punto de carga EN LA DIRECCION de la carga
    return U[6 * nA + 0]


def tabla_hemisferio(mallas=(4, 8, 12, 16), **kw):
    """[(n, valor, % contra 0.094, valor del paper 1991)] para una formulacion."""
    out = []
    for n in mallas:
        v = hemisferio_pinzado(n, **kw)
        out.append((n, v, (v / REF_MACNEAL_HARDER - 1.0) * 100.0, TABLA_II_1991.get(n)))
    return out
