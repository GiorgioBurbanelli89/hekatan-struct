# -*- coding: utf-8 -*-
r"""EL DSQ DE BATOZ-LARDEUR (1990), tal como lo escribe Katili et al. 2018.

    registros/papers_shell_csi/1_s2_0_S0045794917317078_main/  (§3 DKQ, §5 DSQ)
    Computers and Structures 204 (2018) 48-64

POR QUE ESTA AQUI: el DSQ es el HERMANO del DSE de Wilson (= el PQ3 de
Ibrahimbegovic, = el Shell-Thick de CSI). Comparten:

  * los mismos 4 giros de lado incompatibles  Delta_beta_s  (k=5..8),
  * el MISMO 2/3 de la ecuacion de lado  -> Katili (31)/(66) = Wilson (8.7)
                                            = Ibrahimbegovic (A.6),
  * la misma condensacion estatica de esos 4,
  * la misma integracion 2x2.

DONDE SE SEPARAN, y por eso se prueba: el PQ3/DSE COLOCA el cortante en los
lados; el DSQ lo saca de las ECUACIONES DE EQUILIBRIO de la placa, ec. (58a):

    {gamma} = (Db/Ds) [Hb_barra] {d2 beta}          (61)

Es otra manera de cerrar el mismo hueco. En trapecios el DSE se va (medido) y
el DSQ es el unico de la familia con resultados publicados en malla distorsionada
(Katili fig. 12-13). De ahi la prueba.

CONVENCION DE GIROS. El paper usa beta (giro de la normal); CSI/ETABS usa
theta_x, theta_y. Igualando la ecuacion de lado de los dos textos sale:

    beta_x = +theta_y        beta_y = -theta_x

o sea  u_paper = T u_csi  por nodo, con T = [[1,0,0],[0,0,1],[0,-1,0]],
y por tanto  K_csi = T^T K_paper T.  Los GDL de salida van como los mide el
repo: [w1,tx1,ty1, w2,tx2,ty2, w3,..., w4,...].
"""
import numpy as np

G2 = 1.0/np.sqrt(3.0)
GP = [(-G2, -G2), (G2, -G2), (G2, G2), (-G2, G2)]      # 2x2 Gauss, peso 1
# lado k=5..8 va del nudo i al j (tabla de la fig. 4 del paper)
LADOS = [(0, 1), (1, 2), (2, 3), (3, 0)]
# los puntos medios donde el DSQ COLOCA el cortante, ec. (68)-(69)
MID = [(0.0, -1.0), (1.0, 0.0), (0.0, 1.0), (-1.0, 0.0)]


# ── Tabla 1: bilineales N1..N4 y cuadraticas incompletas P5..P8 ──────────
def N4(r, s):
    return np.array([(1-r)*(1-s), (1+r)*(1-s), (1+r)*(1+s), (1-r)*(1+s)])/4.0


def dN4(r, s):
    return (np.array([-(1-s), (1-s), (1+s), -(1+s)])/4.0,
            np.array([-(1-r), -(1+r), (1+r), (1-r)])/4.0)


def P4(r, s):
    return np.array([(1-r*r)*(1-s), (1+r)*(1-s*s),
                     (1-r*r)*(1+s), (1-r)*(1-s*s)])/2.0


def dP4(r, s):
    return (np.array([-2*r*(1-s), (1-s*s), -2*r*(1+s), -(1-s*s)])/2.0,
            np.array([-(1-r*r), -2*s*(1+r), (1-r*r), -2*s*(1-r)])/2.0)


def geom(pts):
    """Cosenos directores C_k, S_k y longitudes L_k de los 4 lados (fig. 5)."""
    x = np.array([p[0] for p in pts], float)
    y = np.array([p[1] for p in pts], float)
    C = np.zeros(4); S = np.zeros(4); L = np.zeros(4)
    for k, (i, j) in enumerate(LADOS):
        dx = x[j]-x[i]; dy = y[j]-y[i]; L[k] = np.hypot(dx, dy)
        C[k] = dx/L[k]; S[k] = dy/L[k]
    return x, y, C, S, L


def jac(x, y, r, s):
    dr, ds = dN4(r, s)
    J = np.array([[dr @ x, dr @ y], [ds @ x, ds @ y]])
    return np.linalg.inv(J), np.linalg.det(J)


# ── (26)-(27): las curvaturas ───────────────────────────────────────────
def B_flexion(x, y, C, S, r, s):
    j, dJ = jac(x, y, r, s)
    dr, ds = dN4(r, s); pr, ps = dP4(r, s)
    Nx = j[0, 0]*dr + j[0, 1]*ds;  Ny = j[1, 0]*dr + j[1, 1]*ds
    Px = j[0, 0]*pr + j[0, 1]*ps;  Py = j[1, 0]*pr + j[1, 1]*ps
    Bb = np.zeros((3, 12))                                   # (26)
    for i in range(4):
        Bb[0, 3*i+1] = Nx[i]
        Bb[1, 3*i+2] = Ny[i]
        Bb[2, 3*i+1] = Ny[i]; Bb[2, 3*i+2] = Nx[i]
    Bd = np.zeros((3, 4))                                    # (27)
    for k in range(4):
        Bd[0, k] = Px[k]*C[k]
        Bd[1, k] = Py[k]*S[k]
        Bd[2, k] = Py[k]*C[k] + Px[k]*S[k]
    return Bb, Bd, dJ


# ── (34): [Au], la parte "compatible" de la ecuacion de lado ────────────
def A_u(C, S, L):
    Au = np.zeros((4, 12))
    for k, (i, j) in enumerate(LADOS):
        Au[k, 3*i+0] = -1.0/L[k];  Au[k, 3*j+0] = 1.0/L[k]
        Au[k, 3*i+1] = C[k]/2.0;   Au[k, 3*i+2] = S[k]/2.0
        Au[k, 3*j+1] = C[k]/2.0;   Au[k, 3*j+2] = S[k]/2.0
    return Au


# ── (61)-(64): el cortante del DSQ por EQUILIBRIO ───────────────────────
def T_beta():
    """(63) las 2as derivadas NATURALES de la parte bilineal de beta.
    Filas: {bx,xixi ; bx,etaeta ; bx,xieta ; by,xixi ; by,etaeta ; by,xieta}."""
    T = np.zeros((6, 12))
    mix = np.array([1.0, -1.0, 1.0, -1.0])/4.0      # Ni,xieta
    for i in range(4):
        T[2, 3*i+1] = mix[i]
        T[5, 3*i+2] = mix[i]
    return T


def T_dbeta(C, S, r, s):
    """(64) idem para la parte jerarquica P_k."""
    Pxx = -np.array([(1-s), 0.0, (1+s), 0.0])
    Pyy = -np.array([0.0, (1+r), 0.0, (1-r)])
    Pxy = np.array([r, -s, -r, s])
    T = np.zeros((6, 4))
    T[0] = Pxx*C; T[1] = Pyy*C; T[2] = Pxy*C
    T[3] = Pxx*S; T[4] = Pyy*S; T[5] = Pxy*S
    return T


def T_j(j):
    """(62) 2as derivadas naturales -> cartesianas, para bx y by."""
    j11, j12 = j[0, 0], j[0, 1]
    j21, j22 = j[1, 0], j[1, 1]
    t = np.array([[j11*j11, j12*j12, 2*j11*j12],
                  [j21*j21, j22*j22, 2*j21*j22],
                  [j11*j21, j12*j22, j11*j22 + j12*j21]])
    T = np.zeros((6, 6)); T[:3, :3] = t; T[3:, 3:] = t
    return T


def Hb_barra(nu, Db, Ds):
    """(61). Ojo: el factor Db/Ds ya va DENTRO, no se vuelve a dividir."""
    return (Db/Ds)*np.array(
        [[1.0, (1-nu)/2, 0.0, 0.0, 0.0, (1+nu)/2],
         [0.0, 0.0, (1+nu)/2, (1-nu)/2, 1.0, 0.0]])


def B_cortante(x, y, C, S, nu, Db, Ds, r, s):
    """(59)-(60): {gamma} = [Bsb]{un} + [Bsd]{Dbeta}."""
    j, _ = jac(x, y, r, s)
    H = Hb_barra(nu, Db, Ds) @ T_j(j)
    return H @ T_beta(), H @ T_dbeta(C, S, r, s)




# ── DKMQ (Katili 1993), ecs. (72)-(83) del mismo paper ──────────────────
def phi_k(nu, t, L, kappa=5.0/6.0):
    """(74)  phi_k = Db/Ds * 12/L^2 = 2/(kappa(1-nu)) * (h/L)^2.

    Es el numero que hace de INTERRUPTOR: phi->0 (placa fina) deja el DKMQ en
    DKQ; phi grande (elemento mas chico que el canto) lo lleva a MITC4."""
    return 2.0/(kappa*(1-nu)) * (t/np.asarray(L, float))**2


def N_gamma(r, s):
    """(42)-(47): interpolacion del cortante tipo MITC, 2x4.
    lados 5(eta=-1) y 7(eta=+1) dan gamma_xi ; 6(xi=+1) y 8(xi=-1) gamma_eta."""
    return np.array([[(1-s)/2, 0.0, (1+s)/2, 0.0],
                     [0.0, (1+r)/2, 0.0, (1-r)/2]])


def A_gamma(L):
    """De cortante TANGENCIAL del lado a covariante natural: xi recorre 2
    unidades a lo largo de L_k, y los lados 7 y 8 van en sentido -xi/-eta."""
    return np.diag([L[0]/2, L[1]/2, -L[2]/2, -L[3]/2])


# ── el elemento ─────────────────────────────────────────────────────────
def K_paper(pts, E, nu, t, modo="DSQ", kappa=5.0/6.0, mods=None):
    """K 12x12 en GDL del paper (w, beta_x, beta_y). modo: 'DSQ' o 'DKQ'.

    `mods` = [m11, m22, m12, v13, v23] como los modificadores de SAP2000
    (1 = sin tocar). Sirve para el TAMIZ: subiendo uno solo a 2 y restando la
    base se aisla el termino de D, igual que se midio en ETABS.
    """
    x, y, C, S, L = geom(pts)
    Db = E*t**3/(12*(1-nu*nu))
    Ds = kappa*E*t/(2*(1+nu))
    Hb = Db*np.array([[1, nu, 0], [nu, 1, 0], [0, 0, (1-nu)/2]], float)
    Hs = Ds*np.eye(2)
    if mods is not None:
        m = np.sqrt(np.asarray(mods, float))       # CSI escala K, no D: sqrt en B
        Hb = np.diag(m[:3]) @ Hb @ np.diag(m[:3])
        Hs = np.diag(m[3:5]) @ Hs @ np.diag(m[3:5])
    Au = A_u(C, S, L)

    if modo == "DKQ":                                   # (32)-(33)
        Ad = -(2.0/3.0)*np.eye(4)
        Auu = Au
    elif modo == "DKMQ":                                # (78)-(80)
        ph = phi_k(nu, t, L, kappa)
        Ad = -(2.0/3.0)*np.diag(1.0+ph)
        Auu = Au
    else:                                               # (68)-(69)
        Md = np.zeros((4, 4)); Mu = np.zeros((4, 12))
        for k, (r, s) in enumerate(MID):
            Bsb, Bsd = B_cortante(x, y, C, S, nu, Db, Ds, r, s)
            cs = np.array([C[k], S[k]])
            Md[k] = cs @ Bsd
            Mu[k] = cs @ Bsb
        Ad = -(2.0/3.0)*np.eye(4) + Md
        Auu = Au - Mu
    W = np.linalg.solve(Ad, Auu)                        # (67)/(32)

    K = np.zeros((12, 12))
    for (r, s) in GP:
        Bb, Bd, dJ = B_flexion(x, y, C, S, r, s)
        B = Bb + Bd @ W                                 # (35)/(70)
        K += B.T @ Hb @ B * dJ
        if modo == "DKMQ":                              # (77)-(83)
            ph = phi_k(nu, t, L, kappa)
            Aphi_D = np.diag(ph/(1.0+ph))               # (83) = A_phi A_Delta^-1
            j, _ = jac(x, y, r, s)
            Bs = j @ N_gamma(r, s) @ A_gamma(L) @ Aphi_D @ Au
            K += Bs.T @ Hs @ Bs * dJ
        if modo == "DSQ":                               # (71)
            Bsb, Bsd = B_cortante(x, y, C, S, nu, Db, Ds, r, s)
            Bs = Bsb + Bsd @ W
            K += Bs.T @ Hs @ Bs * dJ
    return (K + K.T)/2


# giros del paper -> giros de CSI:  beta_x = +ty , beta_y = -tx
_T1 = np.array([[1.0, 0.0, 0.0], [0.0, 0.0, 1.0], [0.0, -1.0, 0.0]])
_T = np.zeros((12, 12))
for _i in range(4):
    _T[3*_i:3*_i+3, 3*_i:3*_i+3] = _T1


def K_DSQ(pts, E, nu, t, modo="DSQ", kappa=5.0/6.0, mods=None):
    """K 12x12 en GDL de CSI: [w, theta_x, theta_y] por nudo."""
    return _T.T @ K_paper(pts, E, nu, t, modo, kappa, mods) @ _T


if __name__ == "__main__":
    np.set_printoptions(precision=4, suppress=True, linewidth=200)
    pts = [(0, 0), (1, 0), (1, 1), (0, 1)]
    E, nu, t = 2.2e7, 0.2, 0.1
    D = E*t**3/(12*(1-nu*nu))
    for modo in ("DKQ", "DSQ"):
        K = K_DSQ(pts, E, nu, t, modo)
        w = np.sort(np.linalg.eigvalsh(K))
        print("%s  nulos=%d  autovalores/D: %s"
              % (modo, int((np.abs(w) < 1e-6*abs(w[-1])).sum()),
                 " ".join("%9.4f" % z for z in w[3:]/D)))
