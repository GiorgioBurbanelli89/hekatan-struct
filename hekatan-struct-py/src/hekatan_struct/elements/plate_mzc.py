"""MZC Plate Bending Element (Melosh-Zienkiewicz-Cheung / ACM).

Kirchhoff plate bending — 4 nodos × 3 DOFs = 12 DOFs.
Equivalente a ETABS Shell-Thin para slabs delgados (t/L → 0).

DOFs per nodo: (w, θx, θy) donde:
  w  = Uz (deflección transversal)
  θx = Rx (rotación alrededor de X) = ∂w/∂y
  θy = Ry (rotación alrededor de Y) = -∂w/∂x

NO tiene shear DOFs (Kirchhoff = no shear deformation) → libre de shear locking.
Es non-conforming (no C¹ continuo en bordes) pero pasa el patch test y converge.

Limitación: válido SOLO para elementos rectangulares alineados con XY.
Para shells generales se requiere isoparametric mapping (Batoz DKQ).

Ref: Reddy "Theory and Analysis of Elastic Plates and Shells" §5.4
"""
from __future__ import annotations
import numpy as np


def mzc_plate_stiffness(coords_xy: np.ndarray, E: float, nu: float, t: float) -> np.ndarray:
    """MZC plate bending stiffness 12×12 para Q4 rectangular alineado con XY.

    Args:
        coords_xy: (4, 2) coords XY de los 4 nodos en orden CCW
        E, nu, t: material y espesor

    Returns:
        K (12, 12) en orden de DOFs: [w1, θx1, θy1, w2, θx2, θy2, w3, θx3, θy3, w4, θx4, θy4]
    """
    # Centro y semi-dimensiones (asume rectangular)
    xs = coords_xy[:, 0]
    ys = coords_xy[:, 1]
    a = (xs.max() - xs.min()) / 2  # semi-ancho X
    b = (ys.max() - ys.min()) / 2  # semi-ancho Y

    # Matriz constitutiva D (flexión)
    D_factor = E * t**3 / (12 * (1 - nu**2))
    D = D_factor * np.array([
        [1, nu, 0],
        [nu, 1, 0],
        [0, 0, (1 - nu) / 2],
    ])

    # Nodos en coords naturales (CCW: -- + - + + - +)
    xi_n  = np.array([-1, 1, 1, -1])
    eta_n = np.array([-1, -1, 1, 1])

    # Gauss 3x3 (overkill pero correcto para integral cúbica × cúbica = 6º orden)
    gp = np.array([-np.sqrt(3/5), 0, np.sqrt(3/5)])
    gw = np.array([5/9, 8/9, 5/9])

    K = np.zeros((12, 12))

    for ix in range(3):
        for iy in range(3):
            xi, eta = gp[ix], gp[iy]
            w_int = gw[ix] * gw[iy]

            # Construir B matrix (3, 12)
            # Para cada nodo i, 3 columnas en B → 3 DOFs (w_i, θx_i, θy_i)
            B = np.zeros((3, 12))
            for i in range(4):
                xi_i, eta_i = xi_n[i], eta_n[i]
                xi_ii = xi_i * xi
                eta_ii = eta_i * eta

                # H_i^1 = (1/8)(1+ξ_iξ)(1+η_iη)(2 + ξ_iξ + η_iη - ξ² - η²)
                # ∂²H_i^1/∂x² = (1/a²) ∂²H_i^1/∂ξ²
                # ∂²(H_i^1)/∂ξ² = derivada segunda en ξ
                # H_i^1 = (1/8)(1+ξ_iξ)(1+η_iη)(2 + ξ_iξ + η_iη - ξ² - η²)
                # = (1/8)(1+ξ_iξ)(1+η_iη)(2 + ξ_iξ + η_iη - ξ² - η²)
                # Expansión: term1 = (1+ξ_iξ)(1+η_iη), term2 = (2 + ξ_iξ + η_iη - ξ² - η²)
                term1 = (1 + xi_ii) * (1 + eta_ii)
                # ∂/∂ξ:
                #   ∂(term1)/∂ξ = ξ_i (1+η_iη)
                #   ∂(term2)/∂ξ = ξ_i - 2ξ
                # ∂²/∂ξ²:
                #   ∂²(term1)/∂ξ² = 0
                #   ∂²(term2)/∂ξ² = -2
                # Producto: ∂²(t1*t2)/∂ξ² = t1*∂²t2/∂ξ² + 2*∂t1/∂ξ*∂t2/∂ξ + ∂²t1/∂ξ²*t2
                t2 = (2 + xi_ii + eta_ii - xi**2 - eta**2)
                dt1_dxi = xi_i * (1 + eta_ii)
                dt2_dxi = xi_i - 2*xi
                d2t1_dxi2 = 0
                d2t2_dxi2 = -2
                d2H1_dxi2 = (1/8) * (term1 * d2t2_dxi2 + 2 * dt1_dxi * dt2_dxi + d2t1_dxi2 * t2)

                # ∂²H_i^1/∂η² similar por simetría:
                dt1_deta = eta_i * (1 + xi_ii)
                dt2_deta = eta_i - 2*eta
                d2H1_deta2 = (1/8) * (term1 * (-2) + 2 * dt1_deta * dt2_deta + 0 * t2)

                # ∂²H_i^1/∂ξ∂η:
                #   ∂²(t1*t2)/∂ξ∂η = ∂²t1/∂ξ∂η * t2 + ∂t1/∂ξ * ∂t2/∂η + ∂t1/∂η * ∂t2/∂ξ + t1 * ∂²t2/∂ξ∂η
                d2t1_dxideta = xi_i * eta_i
                d2t2_dxideta = 0
                d2H1_dxideta = (1/8) * (d2t1_dxideta * t2 + dt1_dxi * dt2_deta
                                         + dt1_deta * dt2_dxi + term1 * d2t2_dxideta)

                # H_i^2 = (b/8) η_i (1+ξ_iξ) (1+η_iη)² (η_iη - 1)   ← coefficient para θx_i
                # ∂²H_i^2/∂x² = (1/a²) ∂²H_i^2/∂ξ²
                # Expansión: (b/8) * η_i * (1+ξ_iξ) * (1+η_iη)² * (η_iη - 1)
                # En ξ: solo (1+ξ_iξ) depende de ξ → primera der = ξ_i, segunda der = 0
                d2H2_dxi2 = 0  # H2 es lineal en ξ
                # En η: (1+η_iη)² (η_iη - 1) = (1+η_iη)² η_iη - (1+η_iη)² = polinomio cúbico en η
                # Sea u = η_i η → (1+u)²(u-1) = u + u² + ... → derivamos:
                # (1+u)²(u-1) = (1+u)²u - (1+u)² = ...
                # d/dη [(1+η_iη)²(η_iη-1)] = 2η_i(1+η_iη)(η_iη-1) + (1+η_iη)²*η_i
                # = η_i (1+η_iη) [2(η_iη-1) + (1+η_iη)] = η_i (1+η_iη)(3η_iη - 1)
                # d²/dη² = η_i * [η_i(3η_iη-1) + (1+η_iη)*3η_i] = η_i² * [(3η_iη-1) + 3(1+η_iη)] = η_i² (6η_iη + 2)
                # d²H2_dη² = (b/8) * η_i * (1+ξ_iξ) * η_i² (6η_iη + 2)
                #          = (b/8) * η_i³ * (1+ξ_iξ) * (6η_iη + 2)
                # Como η_i = ±1, η_i³ = η_i. Y 6η_iη + 2 = 2(3η_iη + 1).
                d2H2_deta2 = (b/8) * eta_i * (1 + xi_ii) * 2 * (3 * eta_ii + 1) * eta_i**2

                # ∂²H_i^2/∂ξ∂η:
                # d/dξ [H_i^2] = (b/8) η_i ξ_i (1+η_iη)²(η_iη - 1)
                # d²/dξdη [H_i^2] = (b/8) η_i ξ_i * d/dη [(1+η_iη)²(η_iη-1)]
                #               = (b/8) η_i ξ_i * η_i(1+η_iη)(3η_iη-1)
                #               = (b/8) ξ_i η_i² (1+η_iη)(3η_iη-1)
                d2H2_dxideta = (b/8) * xi_i * eta_i**2 * (1 + eta_ii) * (3 * eta_ii - 1)

                # H_i^3 = -(a/8) ξ_i (1+ξ_iξ)² (ξ_iξ - 1) (1+η_iη)   ← coefficient para θy_i
                # Por simetría con H_i^2 (cambiar roles de ξ↔η, a↔b, signo):
                d2H3_dxi2 = -(a/8) * xi_i * (1 + eta_ii) * 2 * (3 * xi_ii + 1) * xi_i**2
                d2H3_deta2 = 0
                d2H3_dxideta = -(a/8) * eta_i * xi_i**2 * (1 + xi_ii) * (3 * xi_ii - 1)

                # Convertir a derivadas en x, y:
                # ∂²/∂x² = (1/a²) ∂²/∂ξ²,  ∂²/∂y² = (1/b²) ∂²/∂η²,  ∂²/∂x∂y = (1/(ab)) ∂²/∂ξ∂η
                # Curvaturas: κ_x = -∂²w/∂x²,  κ_y = -∂²w/∂y²,  2κ_xy = -2∂²w/∂x∂y
                col_w = 3*i + 0
                col_tx = 3*i + 1
                col_ty = 3*i + 2

                B[0, col_w]  = -d2H1_dxi2 / a**2     # κ_x para w_i
                B[1, col_w]  = -d2H1_deta2 / b**2    # κ_y para w_i
                B[2, col_w]  = -2 * d2H1_dxideta / (a * b)

                B[0, col_tx] = -d2H2_dxi2 / a**2
                B[1, col_tx] = -d2H2_deta2 / b**2
                B[2, col_tx] = -2 * d2H2_dxideta / (a * b)

                B[0, col_ty] = -d2H3_dxi2 / a**2
                B[1, col_ty] = -d2H3_deta2 / b**2
                B[2, col_ty] = -2 * d2H3_dxideta / (a * b)

            # detJ = a * b (rectangular constante)
            detJ = a * b
            K += w_int * B.T @ D @ B * detJ

    return K


def mzc_to_shell_q4_24(K_plate_12: np.ndarray) -> np.ndarray:
    """Mapea K_plate (12×12 con DOFs [w, θx, θy] × 4 nodos) a Shell Q4 24×24
    con DOFs [Ux, Uy, Uz, Rx, Ry, Rz] × 4 nodos.

    Mapping: w → Uz (idx 2), θx → Rx (idx 3), θy → Ry (idx 4).
    Las membrana (Ux, Uy) y drilling (Rz) no se tocan.
    """
    K = np.zeros((24, 24))
    bend_idx = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22]  # Uz, Rx, Ry de cada nodo
    for i in range(12):
        for j in range(12):
            K[bend_idx[i], bend_idx[j]] = K_plate_12[i, j]
    return K
