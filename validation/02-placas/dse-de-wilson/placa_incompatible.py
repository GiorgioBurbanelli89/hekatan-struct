# -*- coding: utf-8 -*-
r"""PLACA MINDLIN CON LOS 4 MODOS INCOMPATIBLES DE WILSON EN LOS GIROS.

De donde sale: Bathe & Wilson, *Numerical Methods in Finite Element Analysis*
(1976), pag. 149, ec. (4.43) — el libro de los AUTORES de SAP IV:

    u = SUM h_i u_i + a1 (1-r^2) + a2 (1-s^2)
    v = SUM h_i v_i + b1 (1-r^2) + b2 (1-s^2)

Son **CUATRO** modos incompatibles, no la burbuja (1-r^2)(1-s^2). Y cuatro es
justo lo que dice el binario de CsiGo2:

  * `0x981490`: para el tipo 7 (Shell-Thick) pone **16 GDL** = 12 + 4;
  * `0x97ba25`: acumula `SUM w*detJ*B` saltando `+0x1e0` = 12 columnas, o sea
    sobre las 4 internas -> **B-barra sobre los modos incompatibles**, que es la
    correccion de Taylor (1976) para que pasen el patch test;
  * `0x97b515`: cuadratura **ITW8 de 8 puntos**.

Aqui los 4 modos van en los GIROS (no en u,v):

    theta_x = SUM h_i tx_i + a1 (1-r^2) + a2 (1-s^2)
    theta_y = SUM h_i ty_i + b1 (1-r^2) + b2 (1-s^2)

Porque en una placa lo que tiene que enriquecerse para dar curvatura es el giro.
Y eso genera curvatura donde el DSE da cero — que es exactamente el modo `phi`
que le falta (medido: rango 1, k = 181.81).
"""
import numpy as np

_A = np.sqrt(7.0/9.0); _B = np.sqrt(7.0/15.0)
ITW8 = [(-_A, -_A, 9/49.), (_A, -_A, 9/49.), (_A, _A, 9/49.), (-_A, _A, 9/49.),
        (0., -_B, 40/49.), (_B, 0., 40/49.), (0., _B, 40/49.), (-_B, 0., 40/49.)]
G2 = 1/np.sqrt(3.0)
GAUSS = [(-G2, -G2, 1.), (G2, -G2, 1.), (G2, G2, 1.), (-G2, G2, 1.)]


def N4(r, s):
    return np.array([(1-r)*(1-s), (1+r)*(1-s), (1+r)*(1+s), (1-r)*(1+s)])/4.0


def dN4(r, s):
    return (np.array([-(1-s), (1-s), (1+s), -(1+s)])/4.0,
            np.array([-(1-r), -(1+r), (1+r), (1-r)])/4.0)


def K_incomp(pts, E, nu, t, rule=ITW8, bbar="4col", kappa=5.0/6.0):
    """K 12x12. GDL internos: a1,a2 (en theta_x) y b1,b2 (en theta_y).

    bbar: '4col' = restar la media ponderada a las 4 columnas internas (las 3
    filas de flexion), 'no' = sin correccion, '5filas' = tambien al cortante.
    """
    x = np.array([p[0] for p in pts], float)
    y = np.array([p[1] for p in pts], float)
    D0 = E*t**3/(12*(1-nu*nu))
    Db = np.array([[D0, nu*D0, 0], [nu*D0, D0, 0], [0, 0, D0*(1-nu)/2]])
    Ds = np.eye(2)*(kappa*E*t/(2*(1+nu)))

    Bs = []; WD = []
    for (r, s, w) in rule:
        N = N4(r, s); dr, ds = dN4(r, s)
        J = np.array([[dr@x, dr@y], [ds@x, ds@y]])
        dJ = abs(np.linalg.det(J)); Ji = np.linalg.inv(J)
        gx = Ji[0, 0]*dr + Ji[0, 1]*ds
        gy = Ji[1, 0]*dr + Ji[1, 1]*ds
        # los 4 modos incompatibles (4.43): P1 = 1-r^2 , P2 = 1-s^2
        Pr = np.array([-2*r, 0.0])          # dP/dr
        Ps = np.array([0.0, -2*s])          # dP/ds
        px = Ji[0, 0]*Pr + Ji[0, 1]*Ps
        py = Ji[1, 0]*Pr + Ji[1, 1]*Ps
        Pv = np.array([1-r*r, 1-s*s])       # el VALOR (para el cortante)

        B = np.zeros((5, 16))
        for i in range(4):
            w_, tx, ty = 3*i, 3*i+1, 3*i+2
            B[0, ty] += gx[i]                       # kxx =  ty,x
            B[1, tx] -= gy[i]                       # kyy = -tx,y
            B[2, ty] += gy[i]; B[2, tx] -= gx[i]    # kxy =  ty,y - tx,x
            B[3, w_] += gx[i]; B[3, ty] += N[i]     # gxz = w,x + ty
            B[4, w_] += gy[i]; B[4, tx] -= N[i]     # gyz = w,y - tx
        for m in range(2):                          # a1,a2 -> theta_x
            B[1, 12+m] -= py[m]
            B[2, 12+m] -= px[m]
            B[4, 12+m] -= Pv[m]
        for m in range(2):                          # b1,b2 -> theta_y
            B[0, 14+m] += px[m]
            B[2, 14+m] += py[m]
            B[3, 14+m] += Pv[m]
        Bs.append(B); WD.append(w*dJ)

    if bbar != "no":
        filas = 5 if bbar == "5filas" else 3
        num = np.zeros((filas, 4)); den = 0.0
        for B, wd in zip(Bs, WD):
            num += B[:filas, 12:]*wd; den += wd
        med = num/den
        for B in Bs:
            B[:filas, 12:] -= med

    K = np.zeros((16, 16))
    for B, wd in zip(Bs, WD):
        K += B[0:3].T@Db@B[0:3]*wd + B[3:5].T@Ds@B[3:5]*wd
    K11 = K[:12, :12]; K12 = K[:12, 12:]; K22 = K[12:, 12:]
    return K11 - K12@np.linalg.solve(K22, K12.T)


if __name__ == "__main__":
    import json, os
    GAL = r"C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\galpon-bodega-electoral"
    kd = json.load(open(os.path.join(GAL, "k_directa.json"), encoding="utf-8"))
    print("  PLACA CON LOS 4 MODOS INCOMPATIBLES DE WILSON (Bathe-Wilson 4.43)")
    for nombre, v in kd.items():
        if v["tipo"] == 1:
            continue
        Ke = np.array(v["K"], float); Ke = (Ke+Ke.T)/2
        pts, E, nu, t = v["pts"], v["E"], v["nu"], v["t"]
        D = E*t**3/(12*(1-nu*nu))
        we = np.sort(np.linalg.eigvalsh(Ke))[3:]/D
        print("\n  %-14s MEDIDO                    %s"
              % (nombre, " ".join("%8.3f" % z for z in we)))
        for rn, rule in (("ITW8", ITW8), ("Gauss", GAUSS)):
            for bb in ("4col", "no", "5filas"):
                K = K_incomp(pts, E, nu, t, rule, bb)
                e = np.linalg.norm(Ke-K)/np.linalg.norm(Ke)*100
                R = (Ke-K); R = (R+R.T)/2
                w = np.sort(np.linalg.eigvalsh(R))[::-1]
                rg = int((np.abs(w) > 1e-6*max(abs(w[0]), 1e-30)).sum())
                wk = np.sort(np.linalg.eigvalsh((K+K.T)/2))[3:]/D
                print("  %-14s %-6s %-7s %8.3f%% r=%d  %s"
                      % ("", rn, bb, e, rg,
                         " ".join("%8.3f" % z for z in wk)))
