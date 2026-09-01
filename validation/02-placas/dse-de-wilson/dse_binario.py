# -*- coding: utf-8 -*-
r"""EL DSE, pero con lo que DICE EL BINARIO en las dos cosas que no coincidian.

Leido de `CsiGo2.dll`, funcion `0x97f8c0` (la que monta B) y `0x973630`:

  1. **16 GDL** = 12 nodales + 4 Delta_psi de lado. El switch por tipo en
     `0x981490` pone `ecx = 0x10` (16) para los tipos 1 y 7, y **carga -2/3**
     para el tipo 7. Eso es el DSE tal cual.  -> ya coincidia.

  2. **CUADRATURA: ITW8 de 8 puntos**, no Gauss 2x2. La tabla se escribe entera
     en `0x97b515` (pesos 9/49 y 40/49, A=sqrt(7/9), B=sqrt(7/15)).
     `dse_wilson.py` integra con 2x2.                       <-- DIFERENCIA 1

  3. **B-barra sobre las CINCO filas**, no solo las 3 de flexion. El bucle de
     `0x97ba25` acumula desde `+0x1e0` = 60 doubles = 12 columnas x 5 filas:
     salta las 12 columnas nodales y toma las 4 internas **enteras**, con sus
     5 componentes. `dse_wilson.py` corrige solo `b12` (3x4). <-- DIFERENCIA 2

Se prueban las cuatro combinaciones para ver cual es.
"""
import numpy as np

G2 = 1/np.sqrt(3)
GAUSS = [(-G2, -G2, 1.0), (G2, -G2, 1.0), (G2, G2, 1.0), (-G2, G2, 1.0)]
_A = np.sqrt(7.0/9.0); _B = np.sqrt(7.0/15.0)
ITW8 = [(-_A, -_A, 9/49.), (_A, -_A, 9/49.), (_A, _A, 9/49.), (-_A, _A, 9/49.),
        (0., -_B, 40/49.), (_B, 0., 40/49.), (0., _B, 40/49.), (-_B, 0., 40/49.)]


def N4(r, s):
    return np.array([(1-r)*(1-s), (1+r)*(1-s), (1+r)*(1+s), (1-r)*(1+s)])/4.0


def dN4(r, s):
    return (np.array([-(1-s), (1-s), (1+s), -(1+s)])/4.0,
            np.array([-(1-r), -(1+r), (1+r), (1-r)])/4.0)


def dNh(r, s):
    return (np.array([-2*r*(1-s)/2.0, (1-s*s)/2.0, -2*r*(1+s)/2.0, -(1-s*s)/2.0]),
            np.array([-(1-r*r)/2.0, -2*s*(1+r)/2.0, (1-r*r)/2.0, -2*s*(1-r)/2.0]))


def K_DSE_bin(pts, E, nu, t, rule=ITW8, bbar="5filas", thin=False):
    """bbar: '3filas' (como Wilson 8.17), '5filas' (como el binario), 'no'."""
    x = np.array([p[0] for p in pts], float)
    y = np.array([p[1] for p in pts], float)
    ca = np.zeros(4); sa = np.zeros(4); LL = np.zeros(4)
    for k in range(4):
        j = (k+1) % 4
        dx = x[j]-x[k]; dy = y[j]-y[k]; L = np.hypot(dx, dy)
        ca[k] = dx/L; sa[k] = dy/L; LL[k] = L
    D0 = E*t**3/(12*(1-nu*nu))
    Db = np.array([[D0, nu*D0, 0], [nu*D0, D0, 0], [0, 0, D0*(1-nu)/2]])
    Ds = np.eye(2)*(5*E*t/(12*(1+nu)))

    # (8.7) el cortante a lo largo de cada lado
    Bl = np.zeros((4, 16))
    for k in range(4):
        j = (k+1) % 4
        Bl[k, 3*j+0] += 1.0/LL[k]; Bl[k, 3*k+0] -= 1.0/LL[k]
        Bl[k, 3*k+1] -= sa[k]/2.0; Bl[k, 3*j+1] -= sa[k]/2.0
        Bl[k, 3*k+2] += ca[k]/2.0; Bl[k, 3*j+2] += ca[k]/2.0
        Bl[k, 12+k] -= 2.0/3.0
    # (8.9) cortantes nodales
    Bn = np.zeros((4, 2, 16))
    for i in range(4):
        kij = i; kki = (i-1) % 4
        det = ca[kij]*sa[kki]-ca[kki]*sa[kij]
        M = np.array([[sa[kki], -ca[kki]], [-sa[kij], ca[kij]]])/det
        Bn[i] = M @ np.vstack([Bl[kij], Bl[kki]])

    # ── pasada 1: la B de cada punto y la media PONDERADA de sus columnas
    #    internas — el binario acumula SUM w*detJ*B y divide por SUM w*detJ
    Bs_pt = []; WD = []
    for (r, s, w) in rule:
        N = N4(r, s); dx4, ds4 = dN4(r, s); dxh, dsh = dNh(r, s)
        J = np.array([[dx4@x, dx4@y], [ds4@x, ds4@y]]); dJ = abs(np.linalg.det(J))
        Ji = np.linalg.inv(J)
        gx = Ji[0, 0]*dx4+Ji[0, 1]*ds4; gy = Ji[1, 0]*dx4+Ji[1, 1]*ds4
        hx = Ji[0, 0]*dxh+Ji[0, 1]*dsh; hy = Ji[1, 0]*dxh+Ji[1, 1]*dsh
        B = np.zeros((5, 16))
        for i in range(4):
            B[0, 3*i+2] += gx[i]
            B[1, 3*i+1] -= gy[i]
            B[2, 3*i+2] += gy[i]; B[2, 3*i+1] -= gx[i]
        for k in range(4):
            B[0, 12+k] += (-ca[k])*hx[k]
            B[1, 12+k] -= (sa[k])*hy[k]
            B[2, 12+k] += (-ca[k])*hy[k]-(sa[k])*hx[k]
        if not thin:
            Bsh = np.zeros((2, 16))
            for i in range(4):
                Bsh += N[i]*Bn[i]
            B[3:5] = Bsh
        Bs_pt.append(B); WD.append(w*dJ)

    if bbar != "no":
        filas = 3 if bbar == "3filas" else 5
        num = np.zeros((filas, 4)); den = 0.0
        for B, wd in zip(Bs_pt, WD):
            num += B[:filas, 12:]*wd; den += wd
        med = num/den
        for B in Bs_pt:
            B[:filas, 12:] -= med

    K = np.zeros((16, 16))
    for B, wd in zip(Bs_pt, WD):
        K += B[0:3].T@Db@B[0:3]*wd
        if not thin:
            K += B[3:5].T@Ds@B[3:5]*wd

    if thin:
        T = np.zeros((16, 12)); T[:12, :12] = np.eye(12)
        for k in range(4):
            j = (k+1) % 4
            T[12+k, 3*j+0] += 1.5/LL[k]; T[12+k, 3*k+0] -= 1.5/LL[k]
            T[12+k, 3*k+1] -= 0.75*sa[k]; T[12+k, 3*j+1] -= 0.75*sa[k]
            T[12+k, 3*k+2] += 0.75*ca[k]; T[12+k, 3*j+2] += 0.75*ca[k]
        return T.T@K@T
    K11 = K[:12, :12]; K12 = K[:12, 12:]; K22 = K[12:, 12:]
    return K11-K12@np.linalg.solve(K22, K12.T)


if __name__ == "__main__":
    import json, os
    GAL = r"C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\galpon-bodega-electoral"
    kd = json.load(open(os.path.join(GAL, "k_directa.json"), encoding="utf-8"))
    print("  LAS 4 COMBINACIONES (cuadratura x B-barra) CONTRA LA CELDA MEDIDA")
    print("  %-14s %-9s %-8s %10s %6s   %s"
          % ("caso", "cuadr.", "B-barra", "||dK||%", "rango", "autovalores/D"))
    for nombre, v in kd.items():
        Ke = np.array(v["K"], float); Ke = (Ke+Ke.T)/2
        pts, E, nu, t = v["pts"], v["E"], v["nu"], v["t"]
        thin = (v["tipo"] == 1)
        D = E*t**3/(12*(1-nu*nu))
        we = np.sort(np.linalg.eigvalsh(Ke))[3:]/D
        print("\n  %-14s %-9s %-8s %10s %6s   %s"
              % (nombre, "MEDIDO", "", "", "",
                 " ".join("%8.3f" % z for z in we)))
        for rn, rule in (("ITW8", ITW8), ("Gauss", GAUSS)):
            for bb in ("5filas", "3filas", "no"):
                K = K_DSE_bin(pts, E, nu, t, rule, bb, thin)
                e = np.linalg.norm(Ke-K)/np.linalg.norm(Ke)*100
                R = (Ke-K); R = (R+R.T)/2
                w = np.sort(np.linalg.eigvalsh(R))[::-1]
                rg = int((np.abs(w) > 1e-6*max(abs(w[0]), 1e-30)).sum())
                wk = np.sort(np.linalg.eigvalsh((K+K.T)/2))[3:]/D
                print("  %-14s %-9s %-8s %9.4f%% %6d   %s"
                      % ("", rn, bb, e, rg, " ".join("%8.3f" % z for z in wk)))
