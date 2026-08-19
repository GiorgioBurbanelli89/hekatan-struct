# -*- coding: utf-8 -*-
"""Placa DKQ — Discrete Kirchhoff Quadrilateral (Batoz & Ben Tahar, 1982).

*"Evaluation of a new quadrilateral thin plate bending element"*,
Int. J. Numer. Methods Eng. **18**, 1655-1677.

Por que esta: es **la placa que usa el paper ITW 1990** para armar la cascara
(seccion 4: *"The membrane presented herein is combined with a DKQ plate
element"*). Hekatan tenia DKE en `shell_thin` y MITC4 en `shell_q4`, y con
ninguna de las dos el hemisferio pinzado sale: -44.1 % con DKE y -37.4 % con
MITC4. Si el banco es el del paper, la placa tiene que ser la del paper.

Como funciona, en corto
-----------------------
No se interpola `w` y se deriva. Se interpolan las ROTACIONES `beta_x`, `beta_y`
con las 8 funciones serendipity (4 esquinas + 4 medios de lado) y despues se
imponen las condiciones de Kirchhoff **de forma discreta**:

  * en los 4 medios de lado, la deformacion de cortante en la direccion del lado
    es cero  ->  beta_s = dw/ds;
  * `beta_n` varia linealmente por el lado.

Con eso los 4 GDL de medio-lado se eliminan y queda una B de flexion 3x12 en
funcion de `w, theta_x, theta_y` de las esquinas. No hay bloqueo por cortante
porque el cortante no existe: es Kirchhoff puro.

Convencion de GDL: `[w, theta_x, theta_y]` por nudo, con
`theta_x = dw/dy` y `theta_y = -dw/dx`, que es la del resto del motor.

Validado contra la serie de Navier (placa cuadrada simplemente apoyada, carga
uniforme, w_c = 0.00406 q a^4 / D):

    2x2  -6.64 %      4x4  -0.35 %      8x8  +0.00 %      16x16  +0.05 %

y con 3 modos de energia nula (cuadrado y trapecio), que son los que tocan.

⚠️ **Lo que NO arregla.** Se implemento para el test IV del ITW (hemisferio
pinzado), porque el paper combina su membrana con DKQ y aqui bloqueaba. Medido
el 19-ago-2026, ITW + DKQ contra ITW + MITC4:

    ITW + DKQ     4x4 -85.3 %   8x8 -34.1 %   16x16 -3.8 %
    ITW + MITC4   4x4 -89.8 %   8x8 -37.4 %   16x16 -4.2 %

O sea: practicamente lo mismo. **El bloqueo no viene de la placa, viene de la
membrana** — de los terminos de Allman, que en una cascara facetada meten
deformacion de membrana esporea a partir de unos theta_z que ahi no son un giro
libre sino el giro global del nudo. Con Hughes-Brezzi no pasa porque alli el
theta_z no entra en el campo de desplazamientos.

Tampoco vale integrar SELECTIVAMENTE las columnas del drilling a 2x2 dejando el
resto a 3x3: separando la B por columnas se pierden los terminos CRUZADOS
u-theta, y el patch test se cae a 0.4209 en vez de 1.5.
"""
from __future__ import annotations

import numpy as np

_GP2 = 1.0 / np.sqrt(3.0)
_G2 = [(-_GP2, -_GP2), (_GP2, -_GP2), (_GP2, _GP2), (-_GP2, _GP2)]


def _serendipity8(xi: float, eta: float):
    """N y derivadas naturales de las 8 funciones (4 esquinas + 4 medios)."""
    xn = np.array([-1.0, 1.0, 1.0, -1.0])
    en = np.array([-1.0, -1.0, 1.0, 1.0])
    N = np.zeros(8)
    dNx = np.zeros(8)     # dN/dxi
    dNe = np.zeros(8)     # dN/deta
    for i in range(4):    # esquinas
        N[i] = 0.25 * (1 + xn[i] * xi) * (1 + en[i] * eta) * (xn[i] * xi + en[i] * eta - 1)
        dNx[i] = 0.25 * xn[i] * (1 + en[i] * eta) * (2 * xn[i] * xi + en[i] * eta)
        dNe[i] = 0.25 * en[i] * (1 + xn[i] * xi) * (xn[i] * xi + 2 * en[i] * eta)
    # medios de lado: 5 = (1-2), 6 = (2-3), 7 = (3-4), 8 = (4-1)
    N[4] = 0.5 * (1 - xi ** 2) * (1 - eta);  dNx[4] = -xi * (1 - eta);      dNe[4] = -0.5 * (1 - xi ** 2)
    N[5] = 0.5 * (1 + xi) * (1 - eta ** 2);  dNx[5] = 0.5 * (1 - eta ** 2); dNe[5] = -eta * (1 + xi)
    N[6] = 0.5 * (1 - xi ** 2) * (1 + eta);  dNx[6] = -xi * (1 + eta);      dNe[6] = 0.5 * (1 - xi ** 2)
    N[7] = 0.5 * (1 - xi) * (1 - eta ** 2);  dNx[7] = -0.5 * (1 - eta ** 2); dNe[7] = -eta * (1 - xi)
    return N, dNx, dNe


def _coef_lados(x: np.ndarray, y: np.ndarray):
    """a, b, c, d, e de cada lado (Batoz ec. 20). Indices 4..7 = lados 5..8."""
    a = np.zeros(8); b = np.zeros(8); c = np.zeros(8)
    d = np.zeros(8); e = np.zeros(8)
    for k in range(4):
        i, j = k, (k + 1) % 4
        xij = x[i] - x[j]
        yij = y[i] - y[j]
        l2 = xij * xij + yij * yij
        m = 4 + k
        a[m] = -xij / l2
        b[m] = 0.75 * xij * yij / l2
        c[m] = (0.25 * xij * xij - 0.5 * yij * yij) / l2
        d[m] = -yij / l2
        e[m] = (0.25 * yij * yij - 0.5 * xij * xij) / l2
    return a, b, c, d, e


def _HxHy(N, a, b, c, d, e):
    """Los vectores Hx, Hy de 12 componentes (Batoz ecs. 22-23)."""
    Hx = np.zeros(12); Hy = np.zeros(12)
    for i in range(4):
        k = 4 + i                      # lado que empieza en i  (i -> i+1)
        p = 4 + ((i + 3) % 4)          # lado que termina en i  (i-1 -> i)
        Hx[3 * i]     = 1.5 * (a[k] * N[k] - a[p] * N[p])
        Hx[3 * i + 1] = b[k] * N[k] + b[p] * N[p]
        Hx[3 * i + 2] = N[i] - c[k] * N[k] - c[p] * N[p]
        Hy[3 * i]     = 1.5 * (d[k] * N[k] - d[p] * N[p])
        Hy[3 * i + 1] = -N[i] + e[k] * N[k] + e[p] * N[p]
        Hy[3 * i + 2] = -b[k] * N[k] - b[p] * N[p]
    return Hx, Hy


def k_placa_dkq(pts, E: float, nu: float, t: float) -> np.ndarray:
    """Rigidez 12x12 de flexion. GDL `[w, theta_x, theta_y]` por nudo.

    Gauss 2x2 es EXACTO aqui: la B del DKQ es lineal en xi, eta.
    """
    x = np.asarray([p[0] for p in pts], float)
    y = np.asarray([p[1] for p in pts], float)
    D0 = E * t ** 3 / (12.0 * (1.0 - nu ** 2))
    Db = D0 * np.array([[1.0, nu, 0.0], [nu, 1.0, 0.0], [0.0, 0.0, (1.0 - nu) / 2.0]])
    a, b, c, d, e = _coef_lados(x, y)

    K = np.zeros((12, 12))
    for (xi, eta) in _G2:
        N, dNx, dNe = _serendipity8(xi, eta)
        # Jacobiano con las 4 esquinas (el mapeo es bilineal)
        dr = 0.25 * np.array([-(1 - eta), (1 - eta), (1 + eta), -(1 + eta)])
        ds = 0.25 * np.array([-(1 - xi), -(1 + xi), (1 + xi), (1 - xi)])
        J11, J12 = dr @ x, dr @ y
        J21, J22 = ds @ x, ds @ y
        dJ = J11 * J22 - J12 * J21
        Ji = np.array([[J22, -J12], [-J21, J11]]) / dJ

        # Hx, Hy y sus derivadas: se derivan las N y se propaga
        Hx_r, Hy_r = _HxHy(dNx, a, b, c, d, e)
        Hx_s, Hy_s = _HxHy(dNe, a, b, c, d, e)
        Hx_x = Ji[0, 0] * Hx_r + Ji[0, 1] * Hx_s
        Hx_y = Ji[1, 0] * Hx_r + Ji[1, 1] * Hx_s
        Hy_x = Ji[0, 0] * Hy_r + Ji[0, 1] * Hy_s
        Hy_y = Ji[1, 0] * Hy_r + Ji[1, 1] * Hy_s

        B = np.vstack([Hx_x, Hy_y, Hx_y + Hy_x])
        K += abs(dJ) * (B.T @ Db @ B)
    return K


def modos_nulos(pts, E: float = 1.0, nu: float = 0.3, t: float = 0.1,
                tol: float = 1e-9) -> int:
    """Tienen que ser 3: w constante y los dos giros de solido rigido."""
    K = k_placa_dkq(pts, E, nu, t)
    w = np.sort(np.abs(np.linalg.eigvalsh(K)))
    return int((w < tol * w.max()).sum())
