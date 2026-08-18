"""Shell Q4 del MOTOR — port fiel de `hekatan-fem/src/utils/shellQ4.ts`.

Tres piezas, y las tres importan. El Q4 "de libro" que habia en `shell.py` se
queda corto en las tres, y por eso salia demasiado rigido:

1. **Membrana con modos incompatibles de Wilson (Q6)** + condensacion estatica.
   Un Q4 bilineal puro sufre *shear locking en membrana*: cuando el paño
   flecta en su propio plano —que es lo que hace un MURO— sale rigidisimo,
   porque los cuatro nudos no pueden describir una curvatura. Los dos modos
   burbuja lo curan. Es la diferencia mas grande de las tres.

2. **Cortante MITC4** (Dvorkin-Bathe) en vez de integracion reducida. El
   cortante se interpola desde cuatro puntos de atadura en los bordes:
       γxz  desde A(0,−1) y C(0,+1),  interpolando con η
       γyz  desde B(−1,0) y D(+1,0),  interpolando con ξ
   La reducida tambien evita el locking, pero no da el mismo numero ni tiene
   el mismo rango de validez.

3. **Drilling de Hughes-Brezzi** (α = 0.5), que ACOPLA θz con u y v en vez de
   ser un muelle suelto en la diagonal.

Orden de GDL: [u, v, w, θx, θy, θz] × 4 nudos = 24.
"""
import numpy as np

# Parametros de la formulacion. Se dejan como variables de modulo para poder
# BARRERLOS contra ETABS: el binario no dice que valores usa, asi que se
# identifican midiendo (ver edificios-slab/calibrar_shell.py).
KAPPA = 5.0 / 6.0      # factor de correccion de cortante de Mindlin
ALPHA_DRILL = 0.5      # Hughes-Brezzi (1989)

GP = 1.0 / np.sqrt(3.0)
GAUSS = [(-GP, -GP), (GP, -GP), (GP, GP), (-GP, GP)]

# Reparto de los tres bloques dentro de los 24 GDL
DOF_MEM = [0, 1, 6, 7, 12, 13, 18, 19]                       # u, v
DOF_BEN = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22]        # w, θx, θy
DOF_DRI = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23]        # u, v, θz


def _formas(xi, eta):
    N = 0.25 * np.array([(1 - xi) * (1 - eta), (1 + xi) * (1 - eta),
                         (1 + xi) * (1 + eta), (1 - xi) * (1 + eta)])
    dxi = 0.25 * np.array([-(1 - eta), (1 - eta), (1 + eta), -(1 + eta)])
    det = 0.25 * np.array([-(1 - xi), -(1 + xi), (1 + xi), (1 - xi)])
    return N, dxi, det


def _jac(dxi, det, x, y):
    J11 = float(dxi @ x); J12 = float(dxi @ y)
    J21 = float(det @ x); J22 = float(det @ y)
    dJ = J11 * J22 - J12 * J21
    inv = 1.0 / dJ
    dNdx = inv * (J22 * dxi - J12 * det)
    dNdy = inv * (-J21 * dxi + J11 * det)
    return dNdx, dNdy, dJ, (J11, J12, J21, J22)


def _k_membrana(x, y, E, nu, t):
    """Q6: 8 GDL externos + 4 modos incompatibles, condensados."""
    f = E * t / (1 - nu * nu)
    K = np.zeros((12, 12))
    _, d0xi, d0et = _formas(0.0, 0.0)
    _, _, dJ0, (J011, J012, J021, J022) = _jac(d0xi, d0et, x, y)
    inv0 = 1.0 / dJ0

    for xi, eta in GAUSS:
        _, dxi, det = _formas(xi, eta)
        dNdx, dNdy, dJ, _ = _jac(dxi, det, x, y)
        # Los modos burbuja se derivan con el jacobiano del CENTRO — la
        # correccion de Wilson. Con el jacobiano del punto de Gauss el
        # elemento deja de pasar el patch test en mallas distorsionadas.
        dM1dx = inv0 * J022 * (-2 * xi)
        dM1dy = inv0 * (-J021) * (-2 * xi)
        dM2dx = inv0 * (-J012) * (-2 * eta)
        dM2dy = inv0 * J011 * (-2 * eta)

        B = np.zeros((3, 12))
        for i in range(4):
            B[0, 2 * i] = dNdx[i]
            B[1, 2 * i + 1] = dNdy[i]
            B[2, 2 * i] = dNdy[i]
            B[2, 2 * i + 1] = dNdx[i]
        B[0, 8:12] = [dM1dx, 0.0, dM2dx, 0.0]
        B[1, 8:12] = [0.0, dM1dy, 0.0, dM2dy]
        B[2, 8:12] = [dM1dy, dM1dx, dM2dy, dM2dx]

        D = f * np.array([[1.0, nu, 0.0], [nu, 1.0, 0.0],
                          [0.0, 0.0, (1 - nu) / 2]])
        K += B.T @ D @ B * abs(dJ)

    Kee, Kei = K[:8, :8], K[:8, 8:]
    Kie, Kii = K[8:, :8], K[8:, 8:]
    try:
        return Kee - Kei @ np.linalg.inv(Kii) @ Kie
    except np.linalg.LinAlgError:
        return Kee


def _k_flexion(x, y, E, nu, t, kappa=None):
    """Mindlin + MITC4. GDL por nudo: [w, θx, θy]."""
    D0 = E * t ** 3 / (12 * (1 - nu * nu))
    Db = D0 * np.array([[1.0, nu, 0.0], [nu, 1.0, 0.0],
                        [0.0, 0.0, (1 - nu) / 2]])
    k_ = KAPPA if kappa is None else kappa
    Gs = k_ * E / (2 * (1 + nu)) * t
    K = np.zeros((12, 12))

    # B del cortante en los 4 puntos de atadura: A(0,-1) C(0,1) B(-1,0) D(1,0)
    Bs_ty = []
    for xi_t, eta_t in ((0.0, -1.0), (0.0, 1.0), (-1.0, 0.0), (1.0, 0.0)):
        N, dxi, det = _formas(xi_t, eta_t)
        dNdx, dNdy, _, _ = _jac(dxi, det, x, y)
        Bs = np.zeros((2, 12))
        for i in range(4):
            Bs[0, 3 * i] = dNdx[i]
            Bs[0, 3 * i + 1] = -N[i]
            Bs[1, 3 * i] = dNdy[i]
            Bs[1, 3 * i + 2] = -N[i]
        Bs_ty.append(Bs)

    for xi, eta in GAUSS:
        N, dxi, det = _formas(xi, eta)
        dNdx, dNdy, dJ, _ = _jac(dxi, det, x, y)
        Bb = np.zeros((3, 12))
        for i in range(4):
            Bb[0, 3 * i + 1] = dNdx[i]
            Bb[1, 3 * i + 2] = dNdy[i]
            Bb[2, 3 * i + 1] = dNdy[i]
            Bb[2, 3 * i + 2] = dNdx[i]
        K += Bb.T @ Db @ Bb * abs(dJ)

        wA, wC = 0.5 * (1 - eta), 0.5 * (1 + eta)
        wB, wD = 0.5 * (1 - xi), 0.5 * (1 + xi)
        Bm = np.zeros((2, 12))
        Bm[0] = wA * Bs_ty[0][0] + wC * Bs_ty[1][0]      # γxz desde A y C
        Bm[1] = wB * Bs_ty[2][1] + wD * Bs_ty[3][1]      # γyz desde B y D
        K += Gs * (np.outer(Bm[0], Bm[0]) + np.outer(Bm[1], Bm[1])) * abs(dJ)
    return K


def _k_drilling(x, y, G, t, alpha=0.5):
    """Hughes-Brezzi: θz contra el giro de cuerpo rigido del campo u,v."""
    K = np.zeros((12, 12))
    for xi, eta in GAUSS:
        N, dxi, det = _formas(xi, eta)
        dNdx, dNdy, dJ, _ = _jac(dxi, det, x, y)
        Bd = np.zeros(12)
        for i in range(4):
            Bd[3 * i] = 0.5 * dNdy[i]
            Bd[3 * i + 1] = -0.5 * dNdx[i]
            Bd[3 * i + 2] = N[i]
        K += (alpha * G * t * abs(dJ)) * np.outer(Bd, Bd)
    return K


# De los giros de PLACA a los giros del NUDO. `_k_flexion` está escrita con las
# PENDIENTES, que es como viene de shellQ4.ts:
#     βx = ∂w/∂x      βy = ∂w/∂y
# pero los GDL 4 y 5 de un nudo son GIROS ALREDEDOR de los ejes:
#     Rx = ∂w/∂y = βy          Ry = −∂w/∂x = −βx
# o sea (w, βx, βy) = T · (w, Rx, Ry) con T = [[1,0,0],[0,0,−1],[0,1,0]].
#
# ⚠️ El motor TS NO hace este cambio: mete βx en la casilla de Rx y βy en la de
# Ry. Dentro de una placa aislada no se nota —todos sus elementos comparten el
# mismo convenio y es un simple cambio de base— pero en cuanto una VIGA
# comparte nudo con la losa, los giros dejan de significar lo mismo y la union
# sale rigida. Medido: con vigas, la placa Thick salia mas rigida que la Thin
# (razon 0.53) cuando fisicamente el cortante solo puede ABLANDAR, y no
# convergia al refinar. Ver `test_placa_con_vigas.py`.
_T_GIROS = np.array([[1.0, 0.0, 0.0],
                     [0.0, 0.0, -1.0],
                     [0.0, 1.0, 0.0]])
_T_BEN = np.zeros((12, 12))
for _n in range(4):
    _T_BEN[3 * _n:3 * _n + 3, 3 * _n:3 * _n + 3] = _T_GIROS


def shell_q4_motor(coords_xy, E, nu, t, *, alpha_drilling=None,
                   giros_del_ts=False, solo_membrana=False):
    """K local 24×24 del Q4 del motor. `coords_xy` = (4,2) EN EL PLANO del paño.

    `giros_del_ts=True` reproduce el convenio de giros de `shellQ4.ts` tal cual
    (sin el cambio de base). Solo sirve para comprobar la paridad con el TS en
    modelos SIN barras; para calcular de verdad va en False.

    `solo_membrana=True` es el ShellType **Membrane** de ETABS: el paño trabaja
    SOLO en su plano y no tiene NADA de rigidez a flexion. Sin esto, una losa
    declarada membrana le sujeta el giro a la cabeza de las columnas y el
    portico sale mas rigido de lo que es. Medido en el escalon C: con flexion
    daba 7.09 % contra ETABS en TODOS los nudos por igual — la firma de una
    rigidez de mas repartida por toda la planta, no de un elemento mal
    integrado.
    """
    K = np.zeros((24, 24))
    if E == 0 or t == 0:
        return K
    p = np.asarray(coords_xy, float)
    x, y = p[:, 0].copy(), p[:, 1].copy()
    G = E / (2 * (1 + nu))

    al = ALPHA_DRILL if alpha_drilling is None else alpha_drilling
    K[np.ix_(DOF_MEM, DOF_MEM)] += _k_membrana(x, y, E, nu, t)
    if not solo_membrana:
        k_ben = _k_flexion(x, y, E, nu, t)
        if not giros_del_ts:
            k_ben = _T_BEN.T @ k_ben @ _T_BEN
        K[np.ix_(DOF_BEN, DOF_BEN)] += k_ben
    K[np.ix_(DOF_DRI, DOF_DRI)] += _k_drilling(x, y, G, t, al)
    return K
