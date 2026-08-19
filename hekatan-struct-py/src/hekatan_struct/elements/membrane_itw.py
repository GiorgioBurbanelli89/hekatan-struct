# -*- coding: utf-8 -*-
"""Membrana cuadrilatera con GDL de giro normal (drilling) — ITW 1990.

Ibrahimbegovic, Taylor & Wilson, *A robust quadrilateral membrane finite element
with drilling degrees of freedom*, Int. J. Numer. Methods Eng. **30**, 445-457.

De donde sale este codigo: NO esta reescrito de memoria. Es la traduccion linea
a linea del `.cpd` de Jorge `Muro_Acople_ITW.cpd`, que a su vez implementa la
formulacion D-type del paper. Se guarda aqui para que quede el original en un
sitio ejecutable: el `.cpd` necesita Hekatan Calc y ahora mismo `Hekatan.Cli` no
compila (el repo esta a medio renombrar y `Hekatan.Common` todavia usa el
namespace `Calcpad`, que ya no existe).

Que hace distinto a un Q4 con una penalizacion pegada encima
-----------------------------------------------------------
El giro entra en el CAMPO DE DESPLAZAMIENTOS, no en un termino aparte::

    (19)  u = SUM N_I u_I + SUM NS_I (l_JK/8)(psi_K - psi_J) n_JK + NB9 du9

o sea: interpolacion de Allman por los lados, mas UNA burbuja jerarquica
`NB9 = (1-r^2)(1-s^2)` por direccion que se condensa estaticamente.

La rigidez son dos piezas::

    (33)  K = INT [B G]^T C [B G] dOmega     con Gauss 3x3
    (38)  P = gamma INT {b;g}<b;g> dOmega    con UN SOLO PUNTO (el centro)
    (39)  [K + P] a = f

Integrar K completo y sumarle P de un punto es lo que quita los modos de energia
nula. **No vale ahorrar en la integracion**: con Gauss 2x2 el elemento sale con
CUATRO modos nulos en vez de tres (un mecanismo), medido con
`modos_nulos()` de este mismo modulo.

Sobre gamma
-----------
El paper usa `gamma = mu` y avisa de que la formulacion es *insensible* a ese
valor en varios ordenes de magnitud (su Tabla V: de `gamma/mu = 0.001` a `1000`
cambia la quinta cifra). Aqui el defecto es `0.4*mu` porque es lo que se MIDIO
de ETABS reconstruyendo su matriz de membrana 12x12 entera por flexibilidad
(`galpon-bodega-electoral/celda_membrana12.py`): ajustando gamma por minimos
cuadrados sale **0.400 exacto** en las 10 geometrias medidas.

Verificado (`tests/test_itw_1990.py`):
  * patch test de orden superior -> flecha **1.500000** y giro **0.600000**,
    los valores EXACTOS, igual que ETABS 22 y SAP2000 24;
  * Cook 16x16 -> **23.912** contra la referencia refinada 23.91;
  * cantilever corto 16x4 -> **0.3543**, el mismo numero de la Tabla II.
"""
from __future__ import annotations

import numpy as np

# Nudos en (-1,-1), (1,-1), (1,1), (-1,1): sentido ANTIHORARIO.
# El sentido importa: los coeficientes de lado de Allman llevan la normal
# exterior dentro, y con los nudos al reves salen con el signo cambiado.
R_N = np.array([-1.0, 1.0, 1.0, -1.0])
S_N = np.array([-1.0, -1.0, 1.0, 1.0])

_G3 = np.array([-np.sqrt(3.0 / 5.0), 0.0, np.sqrt(3.0 / 5.0)])
_W3 = np.array([5.0 / 9.0, 8.0 / 9.0, 5.0 / 9.0])
_G2 = np.array([-1.0 / np.sqrt(3.0), 1.0 / np.sqrt(3.0)])
_W2 = np.array([1.0, 1.0])

# El nudo siguiente y el anterior en el ciclo (lados I->I+1 e I-1->I).
_SIG = np.array([1, 2, 3, 0])
_ANT = np.array([3, 0, 1, 2])


def puntos_itw8(w_alpha: float = 0.99):
    """La regla de OCHO puntos del ITW **1991**, ec. (30). Devuelve [(r, s, w)].

    Ibrahimbegovic & Wilson, *A unified formulation for triangular and
    quadrilateral flat shell finite elements with six nodal degrees of freedom*,
    Comm. Appl. Num. Meth. **7**, 1-9 (1991). Extraido en
    `registros/itw_1991/ITW_1991.md`.

    Cuatro puntos en `(+-alpha, +-alpha)` con peso `W_alpha` y cuatro en
    `(+-beta, 0)` y `(0, +-beta)` con peso `W_beta`::

        W_a + W_b = 1
        alpha = 1/(9 W_a)^(1/4)
        beta  = ((2/3 - 2 W_a alpha^2) / W_b)^(1/2)

    Por que existe, en palabras del paper: *«For W_alpha close to 1, the
    eight-point rule has a similar effect of sampling optimal stress points as
    the 2x2 Gaussian quadrature **but does not produce a rank-deficient
    matrix**»*. O sea: da el efecto de 2x2 (que es lo que desbloquea la cascara
    curva) SIN dejar el elemento con cuatro modos de energia nula, que es
    exactamente donde encallo la via del 2x2 puro.

    Y esta es la regla que usa CSI: con `W_alpha = 1` sale
    `alpha = 9^(-1/4) = 0.5773502691896258`, los mismos 16 digitos de la
    constante que `CsiGo2.dll` carga ocho veces. Ese numero NO era un punto de
    Gauss 2x2 — era esta alpha.

    Las dos condiciones se comprueban solas: la regla integra exacto `1`
    (suma de pesos = 4 = area del cuadrado patron), `r^2` y `r^2 s^2`.
    """
    if not 0.0 < w_alpha <= 1.0:
        raise ValueError("W_alpha tiene que estar en (0, 1]")
    wb = 1.0 - w_alpha
    al = 1.0 / (9.0 * w_alpha) ** 0.25
    pts = [(sr * al, ss * al, w_alpha) for sr in (-1, 1) for ss in (-1, 1)]
    if wb > 0.0:
        be = ((2.0 / 3.0 - 2.0 * w_alpha * al * al) / wb) ** 0.5
        pts += [(-be, 0.0, wb), (be, 0.0, wb), (0.0, -be, wb), (0.0, be, wb)]
    return pts


def _puntos(regla: str, n_gauss: int, w_alpha: float):
    """[(r, s, w)] de la regla pedida, y si el CENTRO es punto de integracion."""
    if regla == "itw8":
        return puntos_itw8(w_alpha), False
    gp, gw = (_G2, _W2) if n_gauss == 2 else (_G3, _W3)
    pts = [(gp[i], gp[j], gw[i] * gw[j])
           for i in range(n_gauss) for j in range(n_gauss)]
    return pts, n_gauss == 3


def _constitutiva(E: float, nu: float, t: float, mod_dir=None) -> np.ndarray:
    """D de tension plana, con el ESPESOR dentro (como en el .cpd).

    `mod_dir` son los modificadores DIRECCIONALES de CSI (F11, F22, F12, ...).
    Van sobre la constitutiva, que es donde los aplica ETABS, no sobre la K ya
    ensamblada: multiplicar la K entera es todo-o-nada y asi no se puede dejar
    rigido en 11 y blando en 22, que es lo que hace a un deck ser deck. El
    termino cruzado va con la media geometrica para que D siga siendo simetrica
    y semidefinida positiva.
    """
    D = E * t / (1.0 - nu ** 2) * np.array([[1.0, nu, 0.0],
                                            [nu, 1.0, 0.0],
                                            [0.0, 0.0, (1.0 - nu) / 2.0]])
    if mod_dir is not None:
        f11, f22, f12 = float(mod_dir[0]), float(mod_dir[1]), float(mod_dir[2])
        D[0, 0] *= f11
        D[1, 1] *= f22
        D[2, 2] *= f12
        c = np.sqrt(max(0.0, f11 * f22))
        D[0, 1] *= c
        D[1, 0] *= c
    return D


def _lados(X4: np.ndarray, Y4: np.ndarray):
    """(l_JK/8)*n_JK del lado I->I+1, con n = (dy, -dx)/l.

    O sea `(l/8)*n1 = dy/8` y `(l/8)*n2 = -dx/8`, que son los `cx`, `cy` del
    `.cpd` y los `l cos(alpha)` / `l sin(alpha)` de la ec. (20) del paper.
    """
    cx = (Y4[_SIG] - Y4) / 8.0
    cy = -(X4[_SIG] - X4) / 8.0
    return cx, cy


def _jacobiano(rr: float, ss: float, X4: np.ndarray, Y4: np.ndarray):
    dr = 0.25 * R_N * (1.0 + S_N * ss)
    ds = 0.25 * S_N * (1.0 + R_N * rr)
    J11, J12 = dr @ X4, dr @ Y4
    J21, J22 = ds @ X4, ds @ Y4
    dJ = J11 * J22 - J12 * J21
    Ji = np.array([[J22, -J12], [-J21, J11]]) / dJ
    return dr, ds, Ji, dJ


def _serendipity(rr: float, ss: float):
    """Derivadas naturales de NS_5..NS_8, ecs. (22)-(23), con el 1/2 dentro."""
    nsr = 0.5 * np.array([-2.0 * rr * (1.0 - ss),
                          1.0 - ss ** 2,
                          -2.0 * rr * (1.0 + ss),
                          -(1.0 - ss ** 2)])
    nss = 0.5 * np.array([-(1.0 - rr ** 2),
                          -2.0 * ss * (1.0 + rr),
                          1.0 - rr ** 2,
                          -2.0 * ss * (1.0 - rr)])
    return nsr, nss


def k_membrana_itw(pts, E: float, nu: float, t: float,
                   gamma_fac: float = 0.4, n_gauss: int = 3,
                   con_burbuja: bool = True, con_penal: bool = True,
                   mod_dir=None, regla: str = "gauss",
                   w_alpha: float = 0.99) -> np.ndarray:
    """Rigidez 12x12 del elemento, GDL `[u0,v0,tz0, u1,v1,tz1, ...]`.

    `pts` son los cuatro `(x, y)` EN EL PLANO DEL ELEMENTO, antihorarios.
    `gamma_fac` es `gamma/mu`; el defecto 0.4 es lo medido de ETABS.

    `regla` elige QUE PAPER se integra:

    * `"gauss"` (defecto) — Gauss `n_gauss` x `n_gauss`, el **ITW 1990**.
    * `"itw8"` — la regla de ocho puntos del **ITW 1991**, ec. (30), que es la
      que cita el manual de CSI. `w_alpha` es su unico parametro; el paper solo
      dice *«close to 1»*. Ver `puntos_itw8`.
    """
    X4 = np.asarray([p[0] for p in pts], float)
    Y4 = np.asarray([p[1] for p in pts], float)
    D = _constitutiva(E, nu, t, mod_dir)
    cx, cy = _lados(X4, Y4)

    cuadratura, hay_centro = _puntos(regla, n_gauss, w_alpha)
    n = 14 if con_burbuja else 12
    K = np.zeros((n, n))
    centro = {}

    for rr, ss, ww in cuadratura:
        dr, ds, Ji, dJ = _jacobiano(rr, ss, X4, Y4)
        NN = 0.25 * (1.0 + R_N * rr) * (1.0 + S_N * ss)
        dNx = Ji[0, 0] * dr + Ji[0, 1] * ds
        dNy = Ji[1, 0] * dr + Ji[1, 1] * ds

        nsr, nss = _serendipity(rr, ss)
        NSx = Ji[0, 0] * nsr + Ji[0, 1] * nss
        NSy = Ji[1, 0] * nsr + Ji[1, 1] * nss

        # G_I, ec. (28): cada nudo entra en SUS DOS lados con signo opuesto
        # (en uno es psi_J y en el otro psi_K).
        gt1 = NSx[_ANT] * cx[_ANT] - NSx * cx
        gt2 = NSy[_ANT] * cx[_ANT] - NSy * cx
        gt3 = NSx[_ANT] * cy[_ANT] - NSx * cy
        gt4 = NSy[_ANT] * cy[_ANT] - NSy * cy

        B = np.zeros((3, n))
        for i in range(4):
            B[0, 3 * i] = dNx[i]
            B[1, 3 * i + 1] = dNy[i]
            B[2, 3 * i] = dNy[i]
            B[2, 3 * i + 1] = dNx[i]
            B[0, 3 * i + 2] = gt1[i]
            B[1, 3 * i + 2] = gt4[i]
            B[2, 3 * i + 2] = gt2[i] + gt3[i]
        if con_burbuja:
            nbr = -2.0 * rr * (1.0 - ss ** 2)     # NB9 = (1-r^2)(1-s^2)
            nbs = -2.0 * ss * (1.0 - rr ** 2)
            dNBx = Ji[0, 0] * nbr + Ji[0, 1] * nbs
            dNBy = Ji[1, 0] * nbr + Ji[1, 1] * nbs
            B[0, 12] = dNBx; B[2, 12] = dNBy
            B[1, 13] = dNBy; B[2, 13] = dNBx

        K += ww * abs(dJ) * (B.T @ D @ B)

        if hay_centro and rr == 0.0 and ss == 0.0:
            centro = dict(dNx=dNx, dNy=dNy, gt2=gt2, gt3=gt3, NN=NN, dJ=abs(dJ),
                          dNBx=(dNBx if con_burbuja else 0.0),
                          dNBy=(dNBy if con_burbuja else 0.0))

    if con_penal:
        if not centro:                    # con 2x2 el centro no es punto de Gauss
            dr, ds, Ji, dJ = _jacobiano(0.0, 0.0, X4, Y4)
            nsr, nss = _serendipity(0.0, 0.0)
            NSx = Ji[0, 0] * nsr + Ji[0, 1] * nss
            NSy = Ji[1, 0] * nsr + Ji[1, 1] * nss
            centro = dict(dNx=Ji[0, 0] * dr + Ji[0, 1] * ds,
                          dNy=Ji[1, 0] * dr + Ji[1, 1] * ds,
                          gt2=NSy[_ANT] * cx[_ANT] - NSy * cx,
                          gt3=NSx[_ANT] * cy[_ANT] - NSx * cy,
                          NN=0.25 * np.ones(4), dJ=abs(dJ),
                          dNBx=0.0, dNBy=0.0)   # dNB/dr = dNB/ds = 0 en el centro
        g = centro
        # res = <b ; g> de las ecs. (31)-(32)
        res = np.zeros(n)
        for i in range(4):
            res[3 * i] = -0.5 * g["dNy"][i]
            res[3 * i + 1] = 0.5 * g["dNx"][i]
            res[3 * i + 2] = 0.5 * (g["gt3"][i] - g["gt2"][i]) - g["NN"][i]
        if con_burbuja:
            res[12] = -0.5 * g["dNBy"]
            res[13] = 0.5 * g["dNBx"]
        mu = E / (2.0 * (1.0 + nu))
        # Omega = 4*dJ0 (el area); la ec. (38) se integra con UN punto.
        K = K + (gamma_fac * mu) * t * 4.0 * g["dJ"] * np.outer(res, res)

    if not con_burbuja:
        return K
    Kuu, Kab, Kbb = K[:12, :12], K[:12, 12:], K[12:, 12:]
    return Kuu - Kab @ np.linalg.solve(Kbb, Kab.T)


def modos_nulos(pts, E: float = 1.0, nu: float = 0.2, t: float = 1.0,
                tol: float = 1e-9, **kw) -> int:
    """Cuantos modos de energia nula tiene el elemento. Tienen que ser 3.

    Sirve para no repetir el error de 'ahorrar' integracion: con Gauss 2x2 el
    hemisferio pinzado mejoraba mucho (de -37 % a -5 %) y parecia la solucion,
    pero es que el elemento se habia quedado con CUATRO modos nulos — un
    mecanismo. El paper ya lo dice: integrando K completo y sumando P de un
    punto *the spurious zero energy modes are prevented*.
    """
    K = k_membrana_itw(pts, E, nu, t, **kw)
    w = np.sort(np.abs(np.linalg.eigvalsh(K)))
    return int((w < tol * w.max()).sum())
