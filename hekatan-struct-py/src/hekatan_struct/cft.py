"""Columna CFT (tubo de acero relleno de hormigón) con las propiedades que usan
SAP2000 (Section Designer) y ETABS (Filled Steel Tube), medidas el 2-sep-2026 en
el CFT 300x300x10 con n = Ec/Es = 0.125 (galpon-bodega-electoral/sap_cft*.py,
etabs_cft_todo.py):

    A  = As + n·Ac                 (transformada al acero, exacta en los dos)
    I  = Is + n·Ic                 (idem)
    As = I² / ∫ Q(y)²/w(y) dy      (Timoshenko sobre la sección transformada:
                                    SAP 0.015443, ETABS 0.015399, esto 0.015365)
    J  = Saint-Venant del compuesto (Prandtl con G a trozos: SAP 3.802e-4,
                                    ETABS 3.795e-4, esto 3.794e-4)

Ni 5/6·A (0.01783) ni 2·t·h + n·5/6·Ac (0.01417) dan el As de CSI, y el Bredt
del tubo solo (2.44e-4) tampoco es su J. Es el espejo de `cadSections.ts`
(cftSectionEc): mismos números a 1e-12.
"""
from __future__ import annotations

import math
from functools import lru_cache

import numpy as np


def area_cortante_timoshenko(tramos, n_div: int = 4000) -> float:
    """tramos: [(y0, y1, w)] bandas horizontales de ancho w (ya transformado)."""
    y_min = min(t[0] for t in tramos)
    y_max = max(t[1] for t in tramos)
    dy = (y_max - y_min) / n_div
    yc = y_min + (np.arange(n_div) + 0.5) * dy
    w = np.zeros(n_div)
    for y0, y1, ww in tramos:
        w[(yc >= y0) & (yc < y1)] = ww
    A = (w * dy).sum()
    yg = (w * yc * dy).sum() / A if A > 0 else 0.0
    I = (w * (yc - yg) ** 2 * dy).sum()
    # Q(y): momento estático de lo que queda por encima, acumulado de arriba abajo
    q = np.cumsum((w * (yc - yg) * dy)[::-1])[::-1]
    mask = w > 0
    den = (q[mask] ** 2 / w[mask] * dy).sum()
    return I * I / den if den > 0 else 0.0


def _prandtl(b: float, h: float, t: float, g: float, mx: int, my: int) -> float:
    """div((1/G) grad φ) = -2, φ = 0 en el borde, J = 2 ∫ φ dA (G_pared = 1)."""
    from scipy.sparse import coo_matrix
    from scipy.sparse.linalg import spsolve

    hx, hy = b / mx, h / my
    xs = (np.arange(mx) + 0.5) * hx - b / 2
    ys = (np.arange(my) + 0.5) * hy - h / 2
    X, Y = np.meshgrid(xs, ys, indexing="ij")
    nucleo = (np.abs(X) < b / 2 - t) & (np.abs(Y) < h / 2 - t)
    inv = np.where(nucleo, 1.0 / g, 1.0)
    idx = np.arange(mx * my).reshape(mx, my)
    rows, cols, vals = [], [], []
    diag = np.zeros((mx, my))

    def cara(a, c):
        return 2 * a * c / (a + c)

    for di, dj, hh in ((1, 0, hx), (-1, 0, hx), (0, 1, hy), (0, -1, hy)):
        I2 = np.clip(np.arange(mx)[:, None] + di, 0, mx - 1)
        J2 = np.clip(np.arange(my)[None, :] + dj, 0, my - 1)
        dentro = ((np.arange(mx)[:, None] + di >= 0) & (np.arange(mx)[:, None] + di < mx)
                  & (np.arange(my)[None, :] + dj >= 0) & (np.arange(my)[None, :] + dj < my))
        c = np.where(dentro, cara(inv, inv[I2, J2]), inv) / (hh * hh)
        diag += c
        rows.append(idx[dentro]); cols.append(idx[I2, J2][dentro]); vals.append(-c[dentro])
    rows.append(idx.ravel()); cols.append(idx.ravel()); vals.append(diag.ravel())
    A = coo_matrix((np.concatenate(vals), (np.concatenate(rows), np.concatenate(cols))),
                   shape=(mx * my, mx * my)).tocsr()
    phi = spsolve(A, np.full(mx * my, 2.0))
    return 2.0 * phi.sum() * hx * hy


@lru_cache(maxsize=64)
def torsion_compuesta_rect(b: float, h: float, t: float, g: float) -> float:
    """J de Saint-Venant de un rectángulo b×h con núcleo (b-2t)×(h-2t) de otro
    material (g = G_núcleo/G_pared). Diferencias finitas con la pared en un número
    ENTERO de celdas (t/k por celda, k = 2 y 4) y extrapolación de Richardson de
    primer orden (el salto de material en las caras deja el error en O(h))."""
    kb = max(2, round(b / t))
    kh = max(2, round(h / t))
    k1 = 2 if 4 * max(kb, kh) <= 160 else 1
    J1 = _prandtl(b, h, t, g, k1 * kb, k1 * kh)
    J2 = _prandtl(b, h, t, g, 2 * k1 * kb, 2 * k1 * kh)
    return 2 * J2 - J1


def cft_props(b: float, h: float, t: float, Es: float, nuS: float, Ec: float, nuC: float) -> dict:
    """A, I22, I33, J, As2, As3 del CFT (unidades coherentes, p. ej. m y kN/m²)."""
    n = Ec / Es
    bi, hi = b - 2 * t, h - 2 * t
    A_s = b * h - bi * hi
    A_c = bi * hi
    I33 = (b * h ** 3 - bi * hi ** 3) / 12 + n * (bi * hi ** 3) / 12     # canto h (plano 1-2)
    I22 = (h * b ** 3 - hi * bi ** 3) / 12 + n * (hi * bi ** 3) / 12
    Gs, Gc = Es / (2 * (1 + nuS)), Ec / (2 * (1 + nuC))
    As2 = area_cortante_timoshenko([(-h / 2, -hi / 2, b), (-hi / 2, hi / 2, 2 * t + n * bi), (hi / 2, h / 2, b)])
    As3 = area_cortante_timoshenko([(-b / 2, -bi / 2, h), (-bi / 2, bi / 2, 2 * t + n * hi), (bi / 2, b / 2, h)])
    J = torsion_compuesta_rect(b, h, t, Gc / Gs)
    return {"A": A_s + n * A_c, "I33": I33, "I22": I22, "J": J, "As2": As2, "As3": As3, "n": n,
            "A_s": A_s, "A_c": A_c}
