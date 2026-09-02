# -*- coding: utf-8 -*-
r"""SHELL-THICK DE ETABS/SAP2000 (SAPFire, CsiGo2.dll v19) — formulacion COMPLETA,
extraida del binario (monta_B en vivo + marco del kernel antes de condensar) y
verificada a 1e-12 % contra la K medida en cuadrado, rectangulo, trapecio y
cuadrilatero general. Ver registros/2026-09-02_binario_drilling_shellthick.md.

Campo de GIROS con 9 funciones: 4 bilineales (nudos) + 4 jerarquicas de lado
N5..N8 + burbuja N9=(1-xi^2)(1-eta^2); cada una con DOS componentes (tx, ty).
Campo de w: bilineal (4 nudos).
Grados de libertad (22): 12 nodales [w,tx,ty]x4 + 8 de lado (tx_k, ty_k) + 2 burbuja.

B (5 filas): kx=ty,x  ky=-tx,y  kxy=ty,y-tx,x ; cortante COVARIANTE tipo MITC
desde los 4 cortantes de LADO de Wilson (8.7), con las jerarquicas entrando con
2/3 (integral de N_lado sobre el lado) en vez de 1/2, y la parte lineal
SIMETRIZADA: g_xi = A + m*eta, g_eta = C + m*xi, m=(b+d)/2 ; fisico = J^-1 g.
v (1 fila): DIVERGENCIA del campo de giros  tx,x + ty,y.

K22 = SUM_p w_p |J_p| [ B'DB + 1000*(D11+D22+D33) v v' ]   (regla ITW de 8 puntos)
      B-barra: a las 10 columnas internas se les resta la media (pesada con w|J|)
      de sus 3 filas de curvatura.
K12 = condensacion estatica de los 10 internos.
Shell-THIN de CSI = DKQ (ya cerrado aparte).
"""
import numpy as np
from dse_wilson import N4, dN4, dNh

A_ = np.sqrt(7 / 9); B_ = np.sqrt(7 / 15)
ITW8 = [(-A_, -A_), (A_, -A_), (A_, A_), (-A_, A_), (0, -B_), (B_, 0), (0, B_), (-B_, 0)]
W8 = [9 / 49] * 4 + [40 / 49] * 4
PENAL = 1000.0


def geometria(pts):
    x = np.array([p[0] for p in pts], float); y = np.array([p[1] for p in pts], float)
    ca = np.zeros(4); sa = np.zeros(4); LL = np.zeros(4)
    for k in range(4):
        j = (k + 1) % 4; dx = x[j] - x[k]; dy = y[j] - y[k]; L = np.hypot(dx, dy)
        ca[k] = dx / L; sa[k] = dy / L; LL[k] = L
    Bl = np.zeros((4, 22))                         # cortante de lado, Wilson (8.7)
    for k in range(4):
        j = (k + 1) % 4
        Bl[k, 3 * j] += 1 / LL[k]; Bl[k, 3 * k] -= 1 / LL[k]        # (w_j - w_i)/L
        Bl[k, 3 * k + 1] -= sa[k] / 2; Bl[k, 3 * j + 1] -= sa[k] / 2  # -(sa/2)(tx_i+tx_j)
        Bl[k, 3 * k + 2] += ca[k] / 2; Bl[k, 3 * j + 2] += ca[k] / 2  # +(ca/2)(ty_i+ty_j)
        Bl[k, 12 + 2 * k] -= 2 / 3 * sa[k]                            # jerarquica: -sa*(2/3)*tx_k
        Bl[k, 13 + 2 * k] += 2 / 3 * ca[k]                            #             +ca*(2/3)*ty_k
    return x, y, ca, sa, LL, Bl


def Bv_punto(geo, r, s):
    x, y, ca, sa, LL, Bl = geo
    N = N4(r, s); dx4, ds4 = dN4(r, s); dxh, dsh = dNh(r, s)
    J = np.array([[dx4 @ x, dx4 @ y], [ds4 @ x, ds4 @ y]]); Ji = np.linalg.inv(J); dJ = np.linalg.det(J)
    gx = Ji[0, 0] * dx4 + Ji[0, 1] * ds4; gy = Ji[1, 0] * dx4 + Ji[1, 1] * ds4
    hx = Ji[0, 0] * dxh + Ji[0, 1] * dsh; hy = Ji[1, 0] * dxh + Ji[1, 1] * dsh
    d9 = np.array([-2 * r * (1 - s * s), -2 * s * (1 - r * r)]); g9 = Ji @ d9
    B = np.zeros((5, 22)); v = np.zeros(22)

    def giro(col, a, b, fx, fy):          # theta = (a*f, b*f), (fx,fy) = grad f
        B[0, col] += b * fx; B[1, col] -= a * fy; B[2, col] += b * fy - a * fx
        v[col] += a * fx + b * fy         # divergencia
    for i in range(4):
        giro(3 * i + 1, 1, 0, gx[i], gy[i]); giro(3 * i + 2, 0, 1, gx[i], gy[i])
    for k in range(4):
        giro(12 + 2 * k, 1, 0, hx[k], hy[k])    # tx del lado k (N_{5+k})
        giro(13 + 2 * k, 0, 1, hx[k], hy[k])    # ty del lado k
    giro(20, 1, 0, g9[0], g9[1]); giro(21, 0, 1, g9[0], g9[1])
    # cortante covariante simetrizado desde los lados
    gb = Bl[0] * LL[0] / 2; gt = -Bl[2] * LL[2] / 2; gR = Bl[1] * LL[1] / 2; gL = -Bl[3] * LL[3] / 2
    A0 = (gb + gt) / 2; b = (gt - gb) / 2; C0 = (gL + gR) / 2; d = (gR - gL) / 2; m = (b + d) / 2
    B[3:5] = np.linalg.solve(J, np.vstack([A0 + m * s, C0 + m * r]))
    return B, v, dJ


def K_etabs_thick(pts, E, nu, t, condensar=True, penal=PENAL):
    D0 = E * t ** 3 / (12 * (1 - nu * nu))
    Db = np.array([[D0, nu * D0, 0], [nu * D0, D0, 0], [0, 0, D0 * (1 - nu) / 2]])
    Ds = np.eye(2) * (5 * E * t / (12 * (1 + nu)))
    D = np.zeros((5, 5)); D[:3, :3] = Db; D[3:, 3:] = Ds
    Dsum = np.trace(Db)
    geo = geometria(pts)
    Bs = []; vs = []; ws = []
    for (r, s), w in zip(ITW8, W8):
        B, v, dJ = Bv_punto(geo, r, s); Bs.append(B); vs.append(v); ws.append(w * abs(dJ))
    m = sum(B[:3, 12:] * w for B, w in zip(Bs, ws)) / sum(ws)
    for B in Bs:
        B[:3, 12:] -= m
    K = sum((B.T @ D @ B + penal * Dsum * np.outer(v, v)) * w for B, v, w in zip(Bs, vs, ws))
    if not condensar:
        return K
    K11 = K[:12, :12]; K12 = K[:12, 12:]; K22 = K[12:, 12:]
    return K11 - K12 @ np.linalg.solve(K22, K12.T)


if __name__ == "__main__":
    import json
    d = json.load(open("k_directa.json"))
    for nm, c in d.items():
        if "thin" in nm:
            continue
        Km = np.array(c["K"]); pts = c["pts"]; E = c["E"]; nu = c["nu"]; t = c["t"]
        K = K_etabs_thick(pts, E, nu, t)
        D0 = E * t ** 3 / (12 * (1 - nu * nu))
        err = 100 * np.linalg.norm(K - Km) / np.linalg.norm(Km)
        w = np.sort(np.linalg.eigvalsh(K))[::-1] / D0; wm = np.sort(np.linalg.eigvalsh(Km))[::-1] / D0
        peor = np.abs(K - Km).max() / np.abs(Km).max() * 100
        print(f"{nm:15s} pts={pts} nu={nu} t={t}:  |dK|/|K| = {err:.3e} %   peor entrada {peor:.3e} %")
        print("    eig/D  formula:", np.round(w[:5], 4), "\n    eig/D  medido :", np.round(wm[:5], 4))
