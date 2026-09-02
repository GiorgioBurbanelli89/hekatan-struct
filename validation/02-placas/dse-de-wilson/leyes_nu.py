# -*- coding: utf-8 -*-
r"""LAS LEYES EN nu, leidas del barrido t x nu (24 celdas, error 0.00000 %).

Factorizando el polinomio POR CADA nu, sin imponer nada, salen tres numeros por nu:

    nu      A          raiz grande (B)   raiz pequeña (phi)
    0.00    4500.9001  1202.6400         2.4000
    0.15    4365.7651  1372.8989         3.2471
    0.30    4230.6301  1616.1258         4.4571
    0.45    4095.4952  1992.0219         6.3273

y la raiz pequeña partida por el phi_k de Katili da EXACTAMENTE 1.000, 1.150,
1.300, 1.450, o sea `(1 + nu)`. Aqui se cierran las tres leyes probando formas
candidatas contra el dato, y se dice cual cierra y cual no.

⚠️ Esto CORRIGE lo que se dijo antes. A nu = 0 la raiz vale 2.400 y coincide con el
phi_k de Katili, y de ahi se concluyo que era «el phi de Katili exacto». Con el
barrido en nu se ve que coinciden SOLO en nu = 0: la ley lleva un (1+nu) de mas.
"""
import numpy as np

KAPPA = 5.0/6.0
NU = np.array([0.00, 0.15, 0.30, 0.45])
A = np.array([4500.9001, 4365.7651, 4230.6301, 4095.4952])
B = np.array([1202.6400, 1372.8989, 1616.1258, 1992.0219])
PHI = np.array([2.4000, 3.2471, 4.4571, 6.3273])


def prueba(nom, y, cand):
    e = np.abs(cand/y - 1).max()*100
    ok = "  <<< CIERRA" if e < 0.01 else ""
    print("  %-34s peor error %9.5f %%%s" % (nom, e, ok))
    return e


print("="*78)
print("  1 · phi(nu)   — la raiz pequeña")
print("="*78)
prueba("2/(kappa(1-nu))          [Katili]", PHI, 2/(KAPPA*(1-NU)))
prueba("2(1+nu)/(kappa(1-nu))", PHI, 2*(1+NU)/(KAPPA*(1-NU)))
prueba("2.4(1+nu)/(1-nu)", PHI, 2.4*(1+NU)/(1-NU))
prueba("2.4/(1-nu)^2", PHI, 2.4/(1-NU)**2)

print("\n" + "="*78)
print("  2 · A(nu)")
print("="*78)
c = np.polyfit(NU, A, 1)
print("  regresion lineal:  A = %.4f %+.4f nu   (R2 = %.9f)"
      % (c[1], c[0], 1-np.sum((np.polyval(c, NU)-A)**2)/np.sum((A-A.mean())**2)))
prueba("4500.9 - 900.9 nu", A, 4500.9 - 900.9*NU)
prueba("4500.9 (1 - 0.2 nu)", A, 4500.9*(1-0.2*NU))
prueba("4500.9 (1-nu)", A, 4500.9*(1-NU))

print("\n" + "="*78)
print("  3 · B(nu)   — la raiz grande")
print("="*78)
for nom, cand in (("B0/(1-nu)", B[0]/(1-NU)),
                  ("B0(1+nu)/(1-nu)", B[0]*(1+NU)/(1-NU)),
                  ("B0/(1-nu)^2", B[0]/(1-NU)**2),
                  ("B0/(1-nu^2)", B[0]/(1-NU**2)),
                  ("(1202.64 - 237.83 nu)/(1-nu)", (1202.64-237.83*NU)/(1-NU)),
                  ("A(nu) * 0.267199 / (1-nu)", A*(B[0]/A[0])/(1-NU)),
                  ("A(nu)*B0/A0*(1+nu)/(1-nu)", A*(B[0]/A[0])*(1+NU)/(1-NU))):
    prueba(nom, B, cand)
print("\n  B(1-nu) por nu:  %s" % "  ".join("%.4f" % x for x in B*(1-NU)))
cB = np.polyfit(NU, B*(1-NU), 1)
print("  -> regresion:  B(1-nu) = %.4f %+.4f nu   (R2 = %.9f)"
      % (cB[1], cB[0], 1-np.sum((np.polyval(cB, NU)-B*(1-NU))**2)/np.sum((B*(1-NU)-np.mean(B*(1-NU)))**2)))
