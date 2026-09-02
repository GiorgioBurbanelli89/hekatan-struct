# -*- coding: utf-8 -*-
r"""AJUSTE v2: el reloj de arena SIN ortogonalizar, y phi tambien en naturales.

Lo que cambia respecto a `ajuste_2x2.py`, y por que. Alli los relojes iban
ortogonalizados contra {1,x,y} (Flanagan-Belytschko), que es lo canonico: si el
vector lleva parte lineal, contamina. En un CUADRADO da igual — H=[1,-1,1,-1] ya
es ortogonal a {1,x,y}— y por eso el ajuste cerraba al 8 %. En un TRAPECIO NO da
igual, y ahi el ajuste se iba al 17-88 %.

`quien_es_el_quinto.py` lo midio: lo que sobraba tenia MAC **0.87-0.89** con el
reloj BRUTO, y ~0.0 con casi todo lo demas. O sea que CSI no ortogonaliza.
Se prueban las dos bases y se comparan los residuos, que es lo unico que decide:

  A · 4 vectores, relojes ORTOGONALIZADOS   (lo de antes)
  B · 4 vectores, relojes BRUTOS
  C · 6 vectores: A + los brutos            (por si conviven las dos cosas)
  D · 5 vectores: B + phi en NATURALES      (xi,eta en vez de x,y)
"""
import json, os
import numpy as np
from dse_wilson import K_DSE
from ajuste_2x2 import ajusta, GAL

H = np.array([1.0, -1.0, 1.0, -1.0])
NAT = np.array([(-1., -1.), (1., -1.), (1., 1.), (-1., 1.)])


def _col(w, tx, ty):
    v = np.zeros(12); v[0::3], v[1::3], v[2::3] = w, tx, ty
    return v/np.linalg.norm(v)


def base(pts, modo):
    P = np.asarray(pts, float); xc, yc = P.mean(axis=0)
    x, y = P[:, 0]-xc, P[:, 1]-yc
    Z = np.zeros(4)
    A = np.column_stack([np.ones(4), x, y])
    ho = H - A@np.linalg.lstsq(A, H, rcond=None)[0]      # ortogonalizado
    ho = ho/np.linalg.norm(ho)
    hb = H/np.linalg.norm(H)                             # bruto
    phi = _col(Z, x, y)
    phin = _col(Z, NAT[:, 0], NAT[:, 1])
    orto = [_col(ho, Z, Z), _col(Z, ho, Z), _col(Z, Z, ho)]
    brut = [_col(hb, Z, Z), _col(Z, hb, Z), _col(Z, Z, hb)]
    if modo == "A":
        return np.column_stack([phi]+orto)
    if modo == "B":
        return np.column_stack([phi]+brut)
    if modo == "C":
        return np.column_stack([phi]+orto+brut)
    if modo == "D":
        return np.column_stack([phi, phin]+brut)


def resid(K, pts, E, nu, t, modo):
    D = E*t**3/(12*(1-nu*nu))
    R = K - K_DSE(pts, E, nu, t); R = (R+R.T)/2
    V = base(pts, modo)
    # con bases casi-dependientes (C) hay que regularizar: pseudo-inversa
    n = V.shape[1]
    M = [np.outer(V[:, k], V[:, k]) for k in range(n)]
    G = np.array([[np.sum(M[i]*M[j]) for j in range(n)] for i in range(n)])
    b = np.array([np.sum(M[i]*R) for i in range(n)])
    lam = np.linalg.pinv(G, rcond=1e-10) @ b
    Rm = sum(lam[k]*M[k] for k in range(n))
    return lam/D, np.linalg.norm(R-Rm)/np.linalg.norm(R)*100


if __name__ == "__main__":
    MOD = ["A", "B", "C", "D"]
    ET = {"A": "4 orto (antes)", "B": "4 BRUTOS", "C": "6 orto+brutos", "D": "5 brutos+phi_nat"}
    kd = json.load(open(os.path.join(GAL, "celda_sap_mods.json"), encoding="utf-8"))
    v = kd["entera"]; K = np.array(v["K"], float); K = (K+K.T)/2
    print("="*90)
    print("  'fuera %' = cuanto del resto NO explica la base.  Menos es mejor.")
    print("="*90)
    print("  CUADRADO (control):  " +
          "   ".join("%s %.2f%%" % (ET[m], resid(K, v["pts"], v["E"], v["nu"], v["t"], m)[1])
                     for m in MOD))
    tr = json.load(open(os.path.join(GAL, "celda_sap_trapecios.json"), encoding="utf-8"))
    print("\n  %-6s %5s %s" % ("d", "t", " ".join("%18s" % ET[m] for m in MOD)))
    peor = {m: 0.0 for m in MOD}
    for k in sorted(tr):
        vv = tr[k]; Kk = np.array(vv["K"], float); Kk = (Kk+Kk.T)/2
        fila = []
        for m in MOD:
            _, r = resid(Kk, vv["pts"], vv["E"], vv["nu"], vv["t"], m)
            peor[m] = max(peor[m], r); fila.append("%17.2f%%" % r)
        print("  %-6.2f %5.2f %s" % (vv["d"], vv["t"], " ".join(fila)))
    print("\n  %-12s %s" % ("PEOR CASO", " ".join("%17.2f%%" % peor[m] for m in MOD)))
