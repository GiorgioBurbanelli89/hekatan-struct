# -*- coding: utf-8 -*-
r"""LAS PRUEBAS DE FISICA: cual de los elementos sirve para PRODUCCION.

Distinto del `campeonato.py`: alli se compara contra la celda de CSI (¿quien se
parece mas a ETABS?). Aqui se compara contra la REALIDAD — que es lo que decide
si un elemento se puede usar, y es lo que exige la norma.

Cuatro pruebas, y cada una descarta por un motivo distinto:

  1. RANGO          3 modos nulos exactos. Menos = el elemento no se sostiene;
                    mas = tiene mecanismos (se deforma sin gastar energia).
  2. PATCH TEST     malla IRREGULAR de MacNeal-Harder (el 2-001 de SAP2000):
                    se impone un campo de curvatura constante y el residuo tiene
                    que ser CERO. Si no, el elemento no converge en malla real.
  3. BLOQUEO        barrido t/L de 1/10 a 1/10000 sobre una placa apoyada. La
                    flecha adimensional tiene que ESTABILIZARSE; si se desploma,
                    hay shear locking.
  4. FLECHA         placa cuadrada apoyada con carga uniforme, contra la serie
                    de NAVIER (solucion analitica exacta). Es el numero que ve
                    un calculista.
"""
import numpy as np
from dse_wilson import K_DSE
from dsq_batoz import K_DSQ
from min4_mystran import K_MIN4
from etabs_binario import K_etabs_placa, ITW8

ELEM = [
    ("DKQ  (Batoz-Tahar)", lambda p, E, nu, t: K_DSQ(p, E, nu, t, "DKQ")),
    ("DSE  (Wilson/PQ3)",  lambda p, E, nu, t: K_DSE(p, E, nu, t)),
    ("DSQ  (Batoz-Lardeur)", lambda p, E, nu, t: K_DSQ(p, E, nu, t, "DSQ")),
    ("DKMQ (Katili)",      lambda p, E, nu, t: K_DSQ(p, E, nu, t, "DKMQ")),
    ("MIN4 (MYSTRAN/T-H)", lambda p, E, nu, t: K_MIN4(p, E, nu, t)),
    ("BIN  (burbuja)",     lambda p, E, nu, t: K_etabs_placa(p, E, nu, t, ITW8)),
]


# ── 1 · rango ───────────────────────────────────────────────────────────
def rango_nulos(f, pts, E, nu, t):
    K = f(pts, E, nu, t)
    w = np.sort(np.abs(np.linalg.eigvalsh((K+K.T)/2)))
    return int((w < 1e-9*w[-1]).sum())


# ── malla y ensamblaje (para 3 y 4) ─────────────────────────────────────
def malla(L, N):
    nod = [(i*L/N, j*L/N) for j in range(N+1) for i in range(N+1)]
    ele = []
    for j in range(N):
        for i in range(N):
            n0 = j*(N+1)+i
            ele.append([n0, n0+1, n0+N+2, n0+N+1])
    return np.array(nod), ele


def resolver(f, L, N, E, nu, t, q):
    """Placa cuadrada apoyada (w=0 en el borde), carga uniforme q. Devuelve w
    en el centro."""
    nod, ele = malla(L, N)
    nn = len(nod); K = np.zeros((3*nn, 3*nn)); F = np.zeros(3*nn)
    for e in ele:
        pts = [tuple(nod[i]) for i in e]
        Ke = f(pts, E, nu, t)
        gdl = [3*i+k for i in e for k in range(3)]
        K[np.ix_(gdl, gdl)] += Ke
        A = abs((nod[e[2]][0]-nod[e[0]][0])*(nod[e[2]][1]-nod[e[0]][1]))
        for i in e:
            F[3*i] += q*A/4.0
    # apoyo simple: w=0 en el contorno (giros libres)
    fijos = []
    for i, (x, y) in enumerate(nod):
        if min(x, y) < 1e-9 or max(x, y) > L-1e-9:
            fijos.append(3*i)
    libres = [i for i in range(3*nn) if i not in set(fijos)]
    u = np.zeros(3*nn)
    u[libres] = np.linalg.solve(K[np.ix_(libres, libres)], F[libres])
    c = np.argmin([abs(x-L/2)+abs(y-L/2) for x, y in nod])
    return u[3*c]


def navier(L, E, nu, t, q, n=60):
    """Serie de Navier: placa cuadrada simplemente apoyada, carga uniforme."""
    D = E*t**3/(12*(1-nu*nu)); s = 0.0
    for m in range(1, n, 2):
        for k in range(1, n, 2):
            s += np.sin(m*np.pi/2)*np.sin(k*np.pi/2) / \
                 (m*k*((m/L)**2+(k/L)**2)**2)
    return 16*q/(np.pi**6*D)*s


if __name__ == "__main__":
    E, nu = 1e7, 0.3
    L, q = 1.0, 1.0
    cuad = [(0, 0), (1, 0), (1, 1), (0, 1)]
    trap = [(0, 0), (1, 0), (0.8, 1), (0.2, 1)]

    print("="*94)
    print("  1 · RANGO — tienen que ser 3 modos nulos (ni mas ni menos)")
    print("="*94)
    print("  %-22s %10s %10s" % ("elemento", "cuadrado", "trapecio"))
    for nm, f in ELEM:
        try:
            a = rango_nulos(f, cuad, E, nu, 0.1)
            b = rango_nulos(f, trap, E, nu, 0.1)
            print("  %-22s %10s %10s   %s"
                  % (nm, a, b, "OK" if a == b == 3 else "<<< MAL"))
        except Exception as ex:
            print("  %-22s  ERROR %s" % (nm, str(ex)[:40]))

    print("\n" + "="*94)
    print("  3 · BLOQUEO — flecha central x D/(q L^4), malla 8x8, al adelgazar")
    print("     tiene que ESTABILIZARSE en ~0.004062 (Navier). Si se desploma, bloquea.")
    print("="*94)
    ts = [L/10, L/100, L/1000, L/10000]
    print("  %-22s %s" % ("elemento", " ".join("%12s" % ("L/%d" % (L/z)) for z in ts)))
    for nm, f in ELEM:
        fila = []
        for t in ts:
            try:
                w = resolver(f, L, 8, E, nu, t, q)
                D = E*t**3/(12*(1-nu*nu))
                fila.append("%12.6f" % (w*D/(q*L**4)))
            except Exception:
                fila.append("%12s" % "error")
        print("  %-22s %s" % (nm, " ".join(fila)))
    print("\n  Navier (exacto)        %12.6f" % (navier(L, E, nu, 0.1, q)*E*0.1**3/(12*(1-nu*nu))/(q*L**4)))

    print("\n" + "="*94)
    print("  4 · CONVERGENCIA — flecha central vs Navier, t = L/100 (placa fina)")
    print("="*94)
    t = L/100
    wex = navier(L, E, nu, t, q)
    print("  %-22s %s" % ("elemento", " ".join("%11s" % ("%dx%d" % (n, n))
                                               for n in (2, 4, 8, 16))))
    for nm, f in ELEM:
        fila = []
        for N in (2, 4, 8, 16):
            try:
                w = resolver(f, L, N, E, nu, t, q)
                fila.append("%10.3f%%" % ((w/wex-1)*100))
            except Exception:
                fila.append("%11s" % "error")
        print("  %-22s %s" % (nm, " ".join(fila)))


# ══════════════════════════════════════════════════════════════════════════
#  5 · MALLA DISTORSIONADA — ¿cuanto importa de verdad el trapecio?
#  La malla de la fig. 12 de Katili 2018: los nudos interiores se desplazan y
#  todos los elementos quedan en trapecio/romboide. Es la prueba que separa
#  «el elemento falla en la celda» de «el calculo sale mal».
# ══════════════════════════════════════════════════════════════════════════
def malla_dist(L, N, d):
    """igual que `malla` pero moviendo los nudos interiores: d=0 -> regular."""
    nod = []
    for j in range(N+1):
        for i in range(N+1):
            x, y = i*L/N, j*L/N
            if 0 < i < N and 0 < j < N:
                x += d*(L/N)*(1 if (i+j) % 2 == 0 else -1)
                y += d*(L/N)*(1 if (i*j) % 2 == 0 else -1)
            nod.append((x, y))
    ele = []
    for j in range(N):
        for i in range(N):
            n0 = j*(N+1)+i
            ele.append([n0, n0+1, n0+N+2, n0+N+1])
    return np.array(nod), ele


def resolver_dist(f, L, N, E, nu, t, q, d):
    nod, ele = malla_dist(L, N, d)
    nn = len(nod); K = np.zeros((3*nn, 3*nn)); F = np.zeros(3*nn)
    for e in ele:
        pts = [tuple(nod[i]) for i in e]
        Ke = f(pts, E, nu, t)
        gdl = [3*i+k for i in e for k in range(3)]
        K[np.ix_(gdl, gdl)] += Ke
        P = np.asarray(pts, float)
        d1, d2 = P[2]-P[0], P[3]-P[1]        # area por las DIAGONALES
        A = 0.5*abs(d1[0]*d2[1] - d1[1]*d2[0])   # np.cross 2D no existe en NumPy 2
        for i in e:
            F[3*i] += q*A/4.0
    fijos = [3*i for i, (x, y) in enumerate(nod)
             if min(x, y) < 1e-9 or max(x, y) > L-1e-9]
    libres = [i for i in range(3*nn) if i not in set(fijos)]
    u = np.zeros(3*nn)
    u[libres] = np.linalg.solve(K[np.ix_(libres, libres)], F[libres])
    c = np.argmin([abs(x-L/2)+abs(y-L/2) for x, y in nod])
    return u[3*c]


if __name__ != "__main__":
    pass
