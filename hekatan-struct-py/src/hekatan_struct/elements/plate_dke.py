"""DKE — Discrete Kirchhoff Element (Batoz & Tahar 1982 = Wilson cap. 8).

Es la flexión del **Shell-Thin** de Hekatan, y el equivalente al Shell-Thin de
ETABS/SAFE. Port fiel de `getBendingK_DKE` (`hekatan-fem/src/cpp/utils/
shellThin.cpp`), que a su vez viene de `validacion/dke-python/mesa_dke.py`.

Kirchhoff quiere decir **sin deformación por cortante transversal**: no hay
`γxz` ni `γyz`, así que no hay shear locking cuando `t/L → 0`. El Mindlin/MITC4
de `shell_q4_motor.py` sí lo tiene y es el Shell-Thick.

Funciones de forma Q8 serendípito. GDL naturales por nudo `[w, bx, by]` con
`bx = ∂w/∂x`, `by = ∂w/∂y`; al final se giran a los del shell `[w, rx, ry]`.

⚠️ **El `T_bend` es la mitad del elemento.** Hekatan fija la convención de giros
con el MZC (`θx = ∂w/∂y`, `θy = −∂w/∂x`), que es el signo OPUESTO al del `.m`
original. Sin girar, los GDL quedan cruzados y mesa-torsión salía a −41 %.

⚠️ `V13MOD`/`V23MOD` (los modificadores del cortante transversal) NO se aplican
aquí, y no es un olvido: el DKE es Kirchhoff, no tiene cortante que modificar.
En ETABS pasa lo mismo — a un Shell-Thin esos dos no le hacen nada.
"""
import math

import numpy as np

# Gauss 2x2, pesos 1
_G = 1.0 / math.sqrt(3.0)
_GAUSS = (-_G, _G)

# T_bend por nudo: [w, bx, by] -> [w, rx, ry]
_TB = np.array([[1.0, 0.0, 0.0],
                [0.0, 0.0, -1.0],
                [0.0, 1.0, 0.0]])


def _dNq_dxi(x, y):
    return (
        (1 - y) * (2 * x + y) / 4, (1 - y) * (2 * x - y) / 4,
        (1 + y) * (2 * x + y) / 4, (1 + y) * (2 * x - y) / 4,
        -x * (1 - y), (1 - y * y) / 2, -x * (1 + y), -(1 - y * y) / 2,
    )


def _dNq_deta(x, y):
    return (
        (1 - x) * (x + 2 * y) / 4, (1 + x) * (-x + 2 * y) / 4,
        (1 + x) * (x + 2 * y) / 4, (1 - x) * (-x + 2 * y) / 4,
        -(1 - x * x) / 2, -y * (1 + x), (1 - x * x) / 2, -y * (1 - x),
    )


def _hx(j, dN, c_a):
    """Componente x del giro discreto para el GDL j (1..12)."""
    if j == 1:
        return -c_a * dN[4]
    if j == 2:
        return dN[0] - 0.25 * dN[4] + 0.5 * dN[7]
    if j == 4:
        return c_a * dN[4]
    if j == 5:
        return dN[1] - 0.25 * dN[4] + 0.5 * dN[5]
    if j == 7:
        return c_a * dN[6]
    if j == 8:
        return dN[2] + 0.5 * dN[5] - 0.25 * dN[6]
    if j == 10:
        return -c_a * dN[6]
    if j == 11:
        return dN[3] - 0.25 * dN[6] + 0.5 * dN[7]
    return 0.0            # j = 3, 6, 9, 12


def _hy(j, dN, c_b):
    if j == 1:
        return -c_b * dN[7]
    if j == 3:
        return dN[0] + 0.5 * dN[4] - 0.25 * dN[7]
    if j == 4:
        return -c_b * dN[5]
    if j == 6:
        return dN[1] + 0.5 * dN[4] - 0.25 * dN[5]
    if j == 7:
        return c_b * dN[5]
    if j == 9:
        return dN[2] - 0.25 * dN[5] + 0.5 * dN[6]
    if j == 10:
        return c_b * dN[7]
    if j == 12:
        return dN[3] + 0.5 * dN[6] - 0.25 * dN[7]
    return 0.0            # j = 2, 5, 8, 11


def dke_plate_stiffness(x, y, E, nu, t, mod=None):
    """K 12x12 de flexión DKE. GDL por nudo: `[w, rx, ry]`.

    `x`, `y`: coordenadas de los 4 nudos EN EL PLANO del paño.
    `mod`: los 8 modificadores de CSI; de ellos usa M11, M22, M12 (3, 4, 5).

    ⚠️ El DKE asume el Q4 **rectangular**: `a` y `b` se toman de la caja
    envolvente, igual que el C++. Para un Q4 distorsionado el elemento correcto
    es el Mindlin de `shell_q4_motor.py`.
    """
    x = np.asarray(x, float)
    y = np.asarray(y, float)
    dx = float(x.max() - x.min())
    dy = float(y.max() - y.min())
    if dx <= 0 or dy <= 0:
        return np.zeros((12, 12))
    a_h, b_h = dx / 2.0, dy / 2.0
    c_a, c_b = 1.5 / dx, 1.5 / dy

    Df = E * t ** 3 / (12.0 * (1.0 - nu * nu))
    D = Df * np.array([[1.0, nu, 0.0], [nu, 1.0, 0.0],
                       [0.0, 0.0, (1.0 - nu) / 2.0]])
    if mod is not None:
        m11, m22, m12 = mod[3], mod[4], mod[5]
        c = math.sqrt(max(0.0, m11 * m22))
        D[0, 0] *= m11
        D[1, 1] *= m22
        D[2, 2] *= m12
        D[0, 1] *= c
        D[1, 0] *= c

    K = np.zeros((12, 12))
    for xi in _GAUSS:
        for eta in _GAUSS:
            dNx = _dNq_dxi(xi, eta)
            dNe = _dNq_deta(xi, eta)
            B = np.zeros((3, 12))
            for k in range(1, 13):
                B[0, k - 1] = _hx(k, dNx, c_a) / a_h
                B[1, k - 1] = _hy(k, dNe, c_b) / b_h
                B[2, k - 1] = _hx(k, dNe, c_a) / b_h + _hy(k, dNx, c_b) / a_h
            K += B.T @ D @ B * a_h * b_h        # pesos de Gauss = 1

    Tf = np.zeros((12, 12))
    for n in range(4):
        Tf[3 * n:3 * n + 3, 3 * n:3 * n + 3] = _TB
    return Tf.T @ K @ Tf
