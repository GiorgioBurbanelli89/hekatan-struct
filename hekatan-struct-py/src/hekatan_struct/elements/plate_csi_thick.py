# -*- coding: utf-8 -*-
r"""Placa GRUESA de CSI (el Shell-Thick de ETABS / SAP2000), en formula cerrada.

Extraida del binario (`CsiGo2.dll` v19: la B de `monta_B` medida en vivo y la
K de 22 gdl del kernel antes de condensar) y verificada a ~1e-12 % contra la K
medida en ~140 celdas (cuadrado, rectangulo, 27 trapecios, cuadrilateros
irregulares, barridos de t/nu/L y modificadores). Bitacora:
`registros/2026-09-02_binario_drilling_shellthick.md`.

Campo de GIROS con 9 funciones — 4 bilineales (nudos), 4 jerarquicas de lado
N5..N8 y la burbuja N9 = (1-xi^2)(1-eta^2) — cada una con DOS componentes
(tx, ty). Campo de w bilineal. 22 gdl: 12 nodales [w, rx, ry] x 4 + 8 de lado
+ 2 de burbuja; los 10 internos se condensan.

  curvaturas : kx = ty,x   ky = -tx,y   kxy = ty,y - tx,x
  cortante   : los 4 cortantes de LADO de Wilson (cap. 8, ec. 8.7),
                 g_k = (w_j - w_i)/L - (sa/2)(tx_i + tx_j) + (ca/2)(ty_i + ty_j)
                       - (2/3) sa tx_k + (2/3) ca ty_k        (jerarquica del lado)
               interpolados en COVARIANTES tipo MITC con la parte lineal
               SIMETRIZADA:  g_xi = A + m*eta,  g_eta = C + m*xi,  m = (b+d)/2,
               y pasados a fisico con J^-1.
  penalizacion: 1000 * (D11 + D22 + D33) * INT (tx,x + ty,y)^2 dA
               (la DIVERGENCIA del campo de giros; es lo que estabiliza el
               modo phi que el cortante simetrizado deja libre)
  cuadratura : ITW 1991 de 8 puntos (pesos 9/49 y 40/49)
  B-barra    : a las 10 columnas internas se les resta la media (pesada con
               w|J|) de sus 3 filas de curvatura
  condensacion: eliminacion de Gauss saltando los pivotes nulos (asi trata el
               kernel los modificadores a cero)

Convencion de giros: la de ETABS y la del shell de Hekatan, `rx = dw/dy`,
`ry = -dw/dx` (mano derecha). Sin `T_bend`: entra directo en `DOF_BEN`.
"""
from __future__ import annotations

import numpy as np

_A = np.sqrt(7.0 / 9.0)
_B = np.sqrt(7.0 / 15.0)
ITW8 = ((-_A, -_A), (_A, -_A), (_A, _A), (-_A, _A), (0.0, -_B), (_B, 0.0), (0.0, _B), (-_B, 0.0))
W8 = (9 / 49,) * 4 + (40 / 49,) * 4
PENAL = 1000.0          # la constante del kernel (va pegada al 5/6)
KAPPA = 5.0 / 6.0


def _n4(r, s):
    return np.array([(1 - r) * (1 - s), (1 + r) * (1 - s), (1 + r) * (1 + s), (1 - r) * (1 + s)]) / 4.0


def _dn4(r, s):
    return (np.array([-(1 - s), (1 - s), (1 + s), -(1 + s)]) / 4.0,
            np.array([-(1 - r), -(1 + r), (1 + r), (1 - r)]) / 4.0)


def _dnh(r, s):
    """N5..N8 jerarquicas: lado k va del nudo k al k+1."""
    return (np.array([-r * (1 - s), (1 - s * s) / 2.0, -r * (1 + s), -(1 - s * s) / 2.0]),
            np.array([-(1 - r * r) / 2.0, -s * (1 + r), (1 - r * r) / 2.0, -s * (1 - r)]))


def _geometria(x, y):
    ca = np.zeros(4); sa = np.zeros(4); LL = np.zeros(4)
    for k in range(4):
        j = (k + 1) % 4
        dx = x[j] - x[k]; dy = y[j] - y[k]; L = np.hypot(dx, dy)
        ca[k] = dx / L; sa[k] = dy / L; LL[k] = L
    Bl = np.zeros((4, 22))                      # cortante de cada lado, (8.7)
    for k in range(4):
        j = (k + 1) % 4
        Bl[k, 3 * j] += 1 / LL[k]; Bl[k, 3 * k] -= 1 / LL[k]
        Bl[k, 3 * k + 1] -= sa[k] / 2; Bl[k, 3 * j + 1] -= sa[k] / 2
        Bl[k, 3 * k + 2] += ca[k] / 2; Bl[k, 3 * j + 2] += ca[k] / 2
        Bl[k, 12 + 2 * k] -= 2 / 3 * sa[k]
        Bl[k, 13 + 2 * k] += 2 / 3 * ca[k]
    return ca, sa, LL, Bl


def _Bv_punto(x, y, LL, Bl, r, s):
    dx4, ds4 = _dn4(r, s); dxh, dsh = _dnh(r, s)
    J = np.array([[dx4 @ x, dx4 @ y], [ds4 @ x, ds4 @ y]])
    Ji = np.linalg.inv(J); dJ = np.linalg.det(J)
    gx = Ji[0, 0] * dx4 + Ji[0, 1] * ds4; gy = Ji[1, 0] * dx4 + Ji[1, 1] * ds4
    hx = Ji[0, 0] * dxh + Ji[0, 1] * dsh; hy = Ji[1, 0] * dxh + Ji[1, 1] * dsh
    g9 = Ji @ np.array([-2 * r * (1 - s * s), -2 * s * (1 - r * r)])
    B = np.zeros((5, 22)); v = np.zeros(22)

    def giro(col, a, b, fx, fy):              # theta = (a f, b f); (fx, fy) = grad f
        B[0, col] += b * fx
        B[1, col] -= a * fy
        B[2, col] += b * fy - a * fx
        v[col] += a * fx + b * fy             # divergencia
    for i in range(4):
        giro(3 * i + 1, 1, 0, gx[i], gy[i])
        giro(3 * i + 2, 0, 1, gx[i], gy[i])
    for k in range(4):
        giro(12 + 2 * k, 1, 0, hx[k], hy[k])
        giro(13 + 2 * k, 0, 1, hx[k], hy[k])
    giro(20, 1, 0, g9[0], g9[1])
    giro(21, 0, 1, g9[0], g9[1])
    gb = Bl[0] * LL[0] / 2; gt = -Bl[2] * LL[2] / 2
    gR = Bl[1] * LL[1] / 2; gL = -Bl[3] * LL[3] / 2
    A0 = (gb + gt) / 2; b = (gt - gb) / 2; C0 = (gL + gR) / 2; d = (gR - gL) / 2
    m = (b + d) / 2
    B[3:5] = np.linalg.solve(J, np.vstack([A0 + m * s, C0 + m * r]))
    return B, v, abs(dJ)


def _condensar_saltando(K, n_ret):
    """Gauss sobre los gdl internos; un pivote nulo se salta (como el kernel)."""
    K = K.copy(); n = K.shape[0]; esc = np.abs(K).max()
    if esc == 0:
        return K[:n_ret, :n_ret]
    for i in range(n_ret, n):
        p = K[i, i]
        if abs(p) <= 1e-14 * esc:
            continue
        fila = K[i, :].copy()
        col = K[:, i].copy()
        K -= np.outer(col, fila) / p
        K[i, :] = 0.0; K[:, i] = 0.0
    return K[:n_ret, :n_ret]


def k_placa_csi_thick(x, y, E, nu, t, mod=None, penal=PENAL):
    """K 12x12 de la placa gruesa de CSI. GDL por nudo `[w, rx, ry]`.

    `x`, `y`: los 4 nudos EN EL PLANO del pano (cualquier cuadrilatero).
    `mod`: los 8 modificadores de CSI (usa M11, M22, M12, V13, V23 = 3..7).
    """
    x = np.asarray(x, float); y = np.asarray(y, float)
    if E <= 0 or t <= 0:
        return np.zeros((12, 12))
    D0 = E * t ** 3 / (12.0 * (1.0 - nu * nu))
    Db = D0 * np.array([[1.0, nu, 0.0], [nu, 1.0, 0.0], [0.0, 0.0, (1.0 - nu) / 2.0]])
    Ds = np.eye(2) * (KAPPA * E * t / (2.0 * (1.0 + nu)))
    if mod is not None:
        sb = np.sqrt(np.maximum(0.0, np.asarray(mod[3:6], float)))
        ss = np.sqrt(np.maximum(0.0, np.asarray(mod[6:8], float)))
        Db = np.diag(sb) @ Db @ np.diag(sb)
        Ds = np.diag(ss) @ Ds @ np.diag(ss)
    D = np.zeros((5, 5)); D[:3, :3] = Db; D[3:, 3:] = Ds
    Dsum = np.trace(Db)
    ca, sa, LL, Bl = _geometria(x, y)
    Bs = []; vs = []; ws = []
    for (r, s), w in zip(ITW8, W8):
        B, v, dJ = _Bv_punto(x, y, LL, Bl, r, s)
        Bs.append(B); vs.append(v); ws.append(w * dJ)
    media = sum(B[:3, 12:] * w for B, w in zip(Bs, ws)) / sum(ws)
    for B in Bs:
        B[:3, 12:] -= media
    K22 = sum((B.T @ D @ B + penal * Dsum * np.outer(v, v)) * w for B, v, w in zip(Bs, vs, ws))
    return _condensar_saltando(K22, 12)


def modos_nulos(pts, E=1.0, nu=0.3, t=0.1):
    x = [p[0] for p in pts]; y = [p[1] for p in pts]
    w = np.abs(np.linalg.eigvalsh(k_placa_csi_thick(x, y, E, nu, t)))
    return int((w < 1e-9 * w.max()).sum())
