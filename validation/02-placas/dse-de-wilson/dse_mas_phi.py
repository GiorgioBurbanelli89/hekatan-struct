# -*- coding: utf-8 -*-
r"""LA PRUEBA: al DSE se le SUMA el termino medido, y se mira si arregla la fisica.

Sabemos del termino que le falta al DSE, todo MEDIDO (no supuesto):

  * el MODO: giros que se abren desde el centroide
        phi:  theta_x = x - xc ,  theta_y = y - yc ,  w = 0
    (MAC 1.000000 contra el modo real de la celda de ETABS)
  * el VALOR:  lambda_phi / D = k (2 + (1-nu)/2)   con  k = 181.81
    constante en 5 decadas de tamano (L = 0.5 .. 10) y 18 espesores
    (t = 0.001 .. 0.4), lineal en nu a 4 cifras.

Asi que se puede CONSTRUIR y sumar:

        K = K_DSE  +  lambda_phi * (phi_normalizado) (phi_normalizado)^T

Y entonces la pregunta que decide todo:

  ¿ese termino ARREGLA la convergencia del DSE?

El DSE converge por ARRIBA (+4.06 % a 8x8 contra Navier): le sobra flexibilidad.
Si al sumarle esta rigidez cae a ~0 %, queda demostrado que **ese es el termino
que anade CSI** — aunque todavia no sepamos su formula general para cualquier
forma. Y si no mejora, estamos persiguiendo lo que no es.
"""
import numpy as np
from dse_wilson import K_DSE

K_PHI = 181.81          # medido: lambda_phi/D = k*(2 + (1-nu)/2)


def vec_phi(pts):
    """El modo: giros que se abren desde el CENTROIDE (hay que centrar)."""
    P = np.asarray(pts, float)
    xc, yc = P.mean(axis=0)
    v = np.zeros(12)
    for i, (x, y) in enumerate(pts):
        v[3*i+1] = x-xc; v[3*i+2] = y-yc
    n = np.linalg.norm(v)
    return v/n if n > 0 else v


def K_DSE_phi(pts, E, nu, t, k=K_PHI):
    K = K_DSE(pts, E, nu, t)
    D = E*t**3/(12*(1-nu*nu))
    p = vec_phi(pts)
    lam = k*(2.0 + (1.0-nu)/2.0)*D
    return K + lam*np.outer(p, p)


if __name__ == "__main__":
    import json, os
    from dsq_batoz import K_DSQ
    import pruebas_fisicas as PF

    GAL = r"C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\galpon-bodega-electoral"
    E, nu, L, q = 1e7, 0.3, 1.0, 1.0

    print("="*92)
    print("  A · ¿sigue siendo un elemento valido?  (3 modos nulos)")
    print("="*92)
    for nm, pts in (("cuadrado", [(0, 0), (1, 0), (1, 1), (0, 1)]),
                    ("trapecio", [(0, 0), (1, 0), (0.8, 1), (0.2, 1)])):
        K = K_DSE_phi(pts, E, nu, 0.1)
        w = np.sort(np.abs(np.linalg.eigvalsh((K+K.T)/2)))
        print("  %-10s nulos = %d   %s" % (nm, int((w < 1e-9*w[-1]).sum()),
              "OK" if int((w < 1e-9*w[-1]).sum()) == 3 else "<<< MAL"))

    print("\n" + "="*92)
    print("  B · CONTRA LA CELDA DE ETABS  (antes el DSE fallaba ~99 %)")
    print("="*92)
    kd = json.load(open(os.path.join(GAL, "k_directa.json"), encoding="utf-8"))
    print("  %-15s %12s %12s   %s" % ("caso", "DSE", "DSE + phi", "autovalores/D"))
    for nombre, v in kd.items():
        if v["tipo"] == 1:
            continue
        Ke = np.array(v["K"], float); Ke = (Ke+Ke.T)/2
        pts, E2, nu2, t2 = v["pts"], v["E"], v["nu"], v["t"]
        D = E2*t2**3/(12*(1-nu2*nu2))
        a = np.linalg.norm(Ke-K_DSE(pts, E2, nu2, t2))/np.linalg.norm(Ke)*100
        Kp = K_DSE_phi(pts, E2, nu2, t2)
        b = np.linalg.norm(Ke-Kp)/np.linalg.norm(Ke)*100
        wm = np.sort(np.linalg.eigvalsh(Ke))[3:]/D
        wp = np.sort(np.linalg.eigvalsh((Kp+Kp.T)/2))[3:]/D
        print("  %-15s %11.3f%% %11.3f%%" % (nombre, a, b))
        print("      medido : %s" % " ".join("%8.3f" % z for z in wm))
        print("      DSE+phi: %s" % " ".join("%8.3f" % z for z in wp))

    print("\n" + "="*92)
    print("  C · ⭐ LA PRUEBA: convergencia vs Navier (exacto), t = L/100")
    print("     el DSE converge POR ARRIBA (+4 %). ¿lo arregla el termino?")
    print("="*92)
    t = L/100
    wex = PF.navier(L, E, nu, t, q)
    ELE = [("DSE  solo", lambda p, E_, nu_, t_: K_DSE(p, E_, nu_, t_)),
           ("DSE + phi", K_DSE_phi),
           ("DKMQ (referencia)", lambda p, E_, nu_, t_: K_DSQ(p, E_, nu_, t_, "DKMQ"))]
    print("  %-20s %s" % ("elemento", " ".join("%11s" % ("%dx%d" % (n, n))
                                               for n in (2, 4, 8, 16))))
    for nm, f in ELE:
        fila = []
        for N in (2, 4, 8, 16):
            try:
                w = PF.resolver(f, L, N, E, nu, t, q)
                fila.append("%10.3f%%" % ((w/wex-1)*100))
            except Exception as ex:
                fila.append("%11s" % "error")
        print("  %-20s %s" % (nm, " ".join(fila)))
