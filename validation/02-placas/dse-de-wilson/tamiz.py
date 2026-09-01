# -*- coding: utf-8 -*-
r"""EL TAMIZ: descartar de grueso a fino hasta aislar lo que falta.

La idea: la K de la celda es  K = SUM_puntos w*detJ * B^T D B. Si se APAGA todo
D menos un termino (los modificadores de SAP2000: m11, m22, m12, v13, v23),
queda

    K_M11 = INT D11 * b1^T b1 dA

o sea una matriz de RANGO BAJO que solo lleva informacion de UNA fila de B (la
de kappa_xx) evaluada en los puntos de integracion. Comparar eso ya no es
comparar "el elemento": es comparar una fila de B.

El tamiz, de grueso a fino:

  nivel 1  RANGO de cada pieza       -> cuantos terminos independientes tiene
                                        esa fila de B (¿8 puntos? ¿4?)
  nivel 2  ESPECTRO de cada pieza    -> los valores, con la escala fuera
  nivel 3  SUBESPACIO (MAC)          -> si el rango cuadra, ¿son los mismos
                                        movimientos?

Lo que pase el tamiz en un nivel se descarta como culpable y se baja al
siguiente. Datos: `flex12_piezas*.json` (medidos de ETABS con modificadores).
"""
import json, os
import numpy as np
from dse_wilson import K_DSE
from dsq_batoz import K_DSQ
from etabs_binario import K_etabs_placa, ITW8, GAUSS

GAL = r"C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\galpon-bodega-electoral"


def rec(v):
    """K 12x12 a partir de la flexibilidad medida (9 libres + 3 sujetos)."""
    pts = v["pts"]
    lib = [tuple(x) for x in v["libres"]]
    suj = [tuple(x) for x in v["sujetos"]]
    Kff = np.linalg.inv(np.array(v["F"]))
    R = np.zeros((12, 3))
    for n, (x, y) in enumerate(pts):
        R[3*n, 0] = 1.0; R[3*n, 1] = x; R[3*n+2, 1] = -1.0
        R[3*n, 2] = y;   R[3*n+1, 2] = 1.0
    fi = [3*n+k for (n, k) in lib]; ri = [3*n+k for (n, k) in suj]
    Ri = np.linalg.inv(R[ri]); Kfr = -Kff@R[fi]@Ri; Krr = -Kfr.T@R[fi]@Ri
    K = np.zeros((12, 12))
    K[np.ix_(fi, fi)] = Kff; K[np.ix_(fi, ri)] = Kfr
    K[np.ix_(ri, fi)] = Kfr.T; K[np.ix_(ri, ri)] = Krr
    return (K+K.T)/2


def espectro(K, D):
    w = np.sort(np.linalg.eigvalsh((K+K.T)/2))[::-1]/D
    return w


def rango(w, tol=1e-7):
    return int((np.abs(w) > tol*max(abs(w[0]), 1e-30)).sum())


# ── nuestras variantes, con solo un termino de D activo ─────────────────
def K_var(nombre, pts, E, nu, t, pieza):
    """pieza: 'M11','M22','M12','V13','TOD'. Se apaga D con una mascara."""
    if nombre.startswith("bin"):
        rule = ITW8 if "itw" in nombre else GAUSS
        bbar = "bbar" in nombre
        return K_binario_pieza(pts, E, nu, t, pieza, rule, bbar)
    K = {"DSE": lambda: K_DSE(pts, E, nu, t),
         "DSQ": lambda: K_DSQ(pts, E, nu, t, "DSQ"),
         "DKQ": lambda: K_DSQ(pts, E, nu, t, "DKQ")}[nombre]()
    return K if pieza == "TOD" else None       # esos no exponen D por piezas


def K_binario_pieza(pts, E, nu, t, pieza, rule, bbar):
    """El de 15 GDL, con la constitutiva enmascarada."""
    import etabs_binario as eb
    x = np.array([p[0] for p in pts], float); y = np.array([p[1] for p in pts], float)
    c = E/(1-nu*nu)
    Cb = np.array([[c, nu*c, 0], [nu*c, c, 0], [0, 0, E/(2*(1+nu))]])
    Cs = np.eye(2)*(E/(2*(1+nu)))
    M = {"M11": np.diag([1, 0, 0]), "M22": np.diag([0, 1, 0]),
         "M12": np.diag([0, 0, 1]), "TOD": np.eye(3), "V13": np.zeros((3, 3))}[pieza]
    Ms = np.diag([1, 0]) if pieza == "V13" else (np.eye(2) if pieza == "TOD" else np.zeros((2, 2)))
    Cb = M@Cb@M; Cs = Ms@Cs@Ms
    ndof = 15; Bs = []; WD = []
    for r, s, w in rule:
        N, Nr, Ns, Nb, Nbr, Nbs = eb.formas(r, s)
        J = np.array([[Nr@x, Nr@y], [Ns@x, Ns@y]]); dJ = np.linalg.det(J)
        Ji = np.linalg.inv(J)
        gx = Ji[0, 0]*Nr+Ji[0, 1]*Ns; gy = Ji[1, 0]*Nr+Ji[1, 1]*Ns
        bx = Ji[0, 0]*Nbr+Ji[0, 1]*Nbs; by = Ji[1, 0]*Nbr+Ji[1, 1]*Nbs
        Bg = np.zeros((5, ndof))
        for i in range(4):
            w_, tx, ty = 3*i, 3*i+1, 3*i+2
            Bg[0, ty] += gx[i]; Bg[1, tx] -= gy[i]
            Bg[2, ty] += gy[i]; Bg[2, tx] -= gx[i]
            Bg[3, w_] += gx[i]; Bg[3, ty] += N[i]
            Bg[4, w_] += gy[i]; Bg[4, tx] -= N[i]
        Bg[0, 14] += bx; Bg[1, 13] -= by
        Bg[2, 14] += by; Bg[2, 13] -= bx
        Bg[3, 12] += bx; Bg[3, 14] += Nb
        Bg[4, 12] += by; Bg[4, 13] -= Nb
        Bs.append(Bg); WD.append(w*abs(dJ))
    if bbar:
        num = np.zeros((3, 3)); den = 0.0
        for Bg, wd in zip(Bs, WD):
            num += Bg[0:3, 12:15]*wd; den += wd
        Bm = num/den
        for Bg in Bs:
            Bg[0:3, 12:15] -= Bm
    K = np.zeros((ndof, ndof))
    for Bg, wd in zip(Bs, WD):
        K += Bg[0:3].T@(Cb*(t**3/12.0)*wd)@Bg[0:3] + Bg[3:5].T@(Cs*(5/6.*t)*wd)@Bg[3:5]
    K11 = K[:12, :12]; K12 = K[:12, 12:]; K22 = K[12:, 12:]
    if abs(np.linalg.det(K22)) < 1e-30:
        return K11
    return K11-K12@np.linalg.solve(K22, K12.T)


d = json.load(open(os.path.join(GAL, "flex12_piezas_thick.json"), encoding="utf-8"))
PIEZAS = [("thickM11", "M11"), ("thickM22", "M22"), ("thickM12", "M12"),
          ("thickV13", "V13")]

# ⚠️ los modificadores SUBEN el termino a 2, no lo apagan. La pieza limpia es
#    la DIFERENCIA contra la base (factor 2-1 = 1, o sea la pieza tal cual):
#        dK_M11 = K(sube_m11=2) - K(base) = INT D11 b1^T b1 dA
base = rec(d["thickTOD"])
v0 = d["thickTOD"]
E, nu, t, pts = v0["E"], v0["nu"], v0["t"], v0["pts"]
D = E*t**3/(12*(1-nu*nu))

print("=" * 100)
print("  NIVEL 1 · RANGO de cada pieza  =  K(modificador a 2) - K(base)")
print("  Si K fuese lineal en el modificador, esa resta ES  INT D_ii b_i^T b_i dA")
print("=" * 100)
print("  %-6s %-24s %6s   %s" % ("pieza", "quien", "rango", "espectro/D (los 6 mayores)"))
for clave, pz in PIEZAS:
    if clave not in d:
        continue
    dK = rec(d[clave]) - base
    w = espectro(dK, D)
    print("\n  %-6s %-24s %6d   %s" % (pz, "ETABS (medido)", rango(w),
          " ".join("%9.4f" % z for z in w[:8])))
    for nm in ("bin_itw_bbar", "bin_itw", "bin_gauss"):
        rule = ITW8 if "itw" in nm else GAUSS
        bb = "bbar" in nm
        Kx = K_binario_pieza(pts, E, nu, t, pz, rule, bb)
        wx = espectro(Kx, D)
        print("  %-6s %-24s %6d   %s" % ("", nm, rango(wx),
              " ".join("%9.4f" % z for z in wx[:8])))

print("\n" + "=" * 100)
print("  ¿SUMAN las piezas?  K(base) contra  SUM de las piezas")
print("=" * 100)
suma = sum(rec(d[c])-base for c, _ in PIEZAS if c in d)
wb = espectro(base, D); ws = espectro(suma, D)
print("  base      rango %d  %s" % (rango(wb), " ".join("%9.4f" % z for z in wb[:7])))
print("  suma pzs  rango %d  %s" % (rango(ws), " ".join("%9.4f" % z for z in ws[:7])))
print("  ||base - suma|| / ||base|| = %.3f %%"
      % (np.linalg.norm(base-suma)/np.linalg.norm(base)*100))


# ══════════════════════════════════════════════════════════════════════════
#  NIVEL 1b · lo mismo con el DSE y el DKQ/DSQ, y el CONTROL sobre el thin
# ══════════════════════════════════════════════════════════════════════════
MODS = {"M11": [2, 1, 1, 1, 1], "M22": [1, 2, 1, 1, 1], "M12": [1, 1, 2, 1, 1],
        "V13": [1, 1, 1, 2, 2], "M1122": [2, 2, 1, 1, 1]}


def pieza_nuestra(fun, pts, E, nu, t, pz, **kw):
    return fun(pts, E, nu, t, mods=MODS[pz], **kw) - fun(pts, E, nu, t, **kw)


print("\n" + "=" * 100)
print("  NIVEL 1b · el DSE y el DKQ/DSQ en el mismo tamiz")
print("=" * 100)
for clave, pz in PIEZAS:
    if clave not in d:
        continue
    w = espectro(rec(d[clave])-base, D)
    print("\n  %-6s %-24s %6d   %s" % (pz, "ETABS (medido)", rango(w),
          " ".join("%9.4f" % z for z in w[:8])))
    for nm, f, kw in (("DSE (Wilson/PQ3)", K_DSE, {}),
                      ("DSQ (Batoz)", K_DSQ, {"modo": "DSQ"}),
                      ("DKQ", K_DSQ, {"modo": "DKQ"})):
        wx = espectro(pieza_nuestra(f, pts, E, nu, t, pz, **kw), D)
        print("  %-6s %-24s %6d   %s" % ("", nm, rango(wx),
              " ".join("%9.4f" % z for z in wx[:8])))

# ── CONTROL: sobre el THIN, donde el DKQ ya clava la matriz entera ────────
dt = json.load(open(os.path.join(GAL, "flex12_piezas.json"), encoding="utf-8"))
if "piezaTOD" in dt:
    b2 = rec(dt["piezaTOD"]); v2 = dt["piezaTOD"]
    E2, nu2, t2, pts2 = v2["E"], v2["nu"], v2["t"], v2["pts"]
    D2 = E2*t2**3/(12*(1-nu2*nu2))
    print("\n" + "=" * 100)
    print("  CONTROL sobre el THIN (ahi el DKQ reproduce la matriz entera al 0.000000 %)")
    print("  Si el tamiz es fiable, DKQ y ETABS tienen que coincidir pieza a pieza.")
    print("=" * 100)
    for clave, pz in (("piezaM11", "M11"), ("piezaM22", "M22"), ("piezaM12", "M12")):
        if clave not in dt:
            continue
        dKe = rec(dt[clave])-b2
        dKn = pieza_nuestra(K_DSQ, pts2, E2, nu2, t2, pz, modo="DKQ")
        we = espectro(dKe, D2); wn = espectro(dKn, D2)
        print("\n  %-6s ETABS  rango %d  %s" % (pz, rango(we),
              " ".join("%9.4f" % z for z in we[:8])))
        print("  %-6s DKQ    rango %d  %s" % ("", rango(wn),
              " ".join("%9.4f" % z for z in wn[:8])))
        print("  %-6s ||dif||/||ETABS|| = %.4f %%" % ("",
              np.linalg.norm(dKe-dKn)/np.linalg.norm(dKe)*100))


# ══════════════════════════════════════════════════════════════════════════
#  NIVEL 3 · ¿el modo que SOBRA es el MISMO vector en las 4 piezas?
#  Si lo es, no es un termino de B: es UNA rigidez anadida, repartida en D.
# ══════════════════════════════════════════════════════════════════════════
print("\n" + "=" * 100)
print("  NIVEL 3 · el autovector del modo grande de cada pieza, comparado (MAC)")
print("=" * 100)
V = {}
for clave, pz in PIEZAS:
    if clave not in d:
        continue
    dK = rec(d[clave]) - base
    w, v = np.linalg.eigh((dK+dK.T)/2)
    V[pz] = (w[-1]/D, v[:, -1])
ks = list(V)
print("  %-6s %10s   %s" % ("pieza", "lambda/D", "  ".join("%-8s" % k for k in ks)))
for a in ks:
    fila = []
    for b_ in ks:
        va, vb = V[a][1], V[b_][1]
        fila.append((va@vb)**2/((va@va)*(vb@vb)))
    print("  %-6s %10.4f   %s" % (a, V[a][0], "  ".join("%-8.4f" % z for z in fila)))

# y contra el modo phi de la base
wb, vb_ = np.linalg.eigh(base)
phi = vb_[:, -1]
print("\n  MAC de cada uno contra el modo phi de la celda entera (lambda/D = %.4f):"
      % (wb[-1]/D))
for a in ks:
    va = V[a][1]
    print("     %-6s  MAC = %.6f" % (a, (va@phi)**2/((va@va)*(phi@phi))))
print("\n  suma de los cuatro lambda/D: %.4f    (phi de la celda = %.4f)"
      % (sum(V[k][0] for k in ks), wb[-1]/D))
