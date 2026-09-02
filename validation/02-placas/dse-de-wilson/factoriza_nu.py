# -*- coding: utf-8 -*-
r"""FACTORIZAR por cada nu, sin imponer nada.

El barrido `t x nu` esta validado: su control (nu = 0) devuelve A = 4500.9001,
B = 1202.6400 y R2 = 1.0000000, o sea exactamente lo medido antes por otra via.

Pero fijando `phi_k = 2/(kappa(1-nu)) s^2` de antemano, con nu != 0 la regresion se
va a `A` y `B` NEGATIVOS. Eso no es que el dato sea malo: es que se le esta
imponiendo al ajuste una de las dos raices, y si esa raiz no es la que el dato
quiere, la otra se deforma para compensar hasta salirse de sentido.

Asi que se hace lo que funciono a nu = 0: ajustar el polinomio COMPLETO

    D/lambda_hg * (4/L^2+0.5)/4.5  =  c0 + c1 s^2 + c2 s^4       (lineal, 3 incognitas)

y FACTORIZARLO. Sus dos raices salen del dato, no de una hipotesis. Luego se
compara la menor contra `2/(kappa(1-nu))`, que es el phi_k de Katili: si coincide
en los cuatro nu, el termino de cortante de CSI es el de Katili tambien fuera de
nu = 0, y la otra raiz es la constante propia de CSI.
"""
import json, os
import numpy as np
from ajusta_A_B_nu import lam4, GAL, KAPPA
from escala_rot import corrige

d = json.load(open(os.path.join(GAL, "celda_sap_t_nu.json"), encoding="utf-8"))
por = {}
for k in sorted(d):
    v = d[k]
    K, _, _ = corrige(np.array(v["K"], float), v["pts"]); K = (K+K.T)/2
    lam, r, L = lam4(K, v["pts"], v["E"], v["nu"], v["t"])
    por.setdefault(v["nu"], []).append((v["t"], lam[1], L, lam[0], lam[2]))

print("="*100)
print("  Ajuste  D/lambda * fac = c0 + c1 s^2 + c2 s^4,  y sus DOS raices")
print("  (la raiz pequeña deberia ser phi_k de Katili = 2/(kappa(1-nu)))")
print("="*100)
print("  %6s %12s %12s %12s %10s %12s %10s"
      % ("nu", "1/c0 = A", "raiz grande", "raiz phi", "Katili", "peor error", "razon"))
tab = []
for nu in sorted(por):
    g = sorted(por[nu])
    t = np.array([x[0] for x in g]); y0 = np.array([x[1] for x in g]); L = g[0][2]
    s2 = (t/L)**2
    fac = (4.0/L**2 + 0.5)/4.5
    y = fac/y0
    X = np.column_stack([np.ones(len(t)), s2, s2**2])
    c, *_ = np.linalg.lstsq(X, y, rcond=None)
    A = 1.0/c[0]
    # 1 + (c1/c0) s^2 + (c2/c0) s^4 = (1 + r1 s^2)(1 + r2 s^2)
    p, q = c[1]/c[0], c[2]/c[0]
    disc = p*p - 4*q
    r1 = (p + np.sqrt(disc))/2; r2 = (p - np.sqrt(disc))/2
    kat = 2.0/(KAPPA*(1-nu))
    pred = A/((1+r1*s2)*(1+r2*s2)) / fac
    err = np.abs(pred/y0 - 1).max()*100
    tab.append((nu, A, r1, r2, kat))
    print("  %6.2f %12.4f %12.4f %12.4f %10.4f %11.5f%% %10.6f"
          % (nu, A, r1, r2, kat, err, r2/kat))

print("\n" + "="*100)
print("  ¿Se puede leer A(nu) y B(nu)?  (B = la raiz grande)")
print("="*100)
print("  %6s %12s %12s %12s %12s %12s"
      % ("nu", "A", "A/A(0)", "1-nu", "B", "B/B(0)"))
A0 = tab[0][1]; B0 = tab[0][2]
for nu, A, r1, r2, kat in tab:
    print("  %6.2f %12.4f %12.6f %12.6f %12.4f %12.6f"
          % (nu, A, A/A0, 1-nu, r1, r1/B0))
