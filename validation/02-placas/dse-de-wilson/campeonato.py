# -*- coding: utf-8 -*-
r"""CAMPEONATO: todas las formulaciones contra la celda medida de ETABS/SAP2000.

Compiten los cuatro de la familia (los que tienen giros de lado condensados,
que es lo que HACE el binario) mas el de la burbuja que se habia leido del
binario, y el DKQ como control:

    DKQ    Batoz-Tahar 1982        = el Shell-THIN de CSI (control, cierra 0.000000 %)
    DSE    Wilson cap.8 / PQ3      = el candidato historico
    DSQ    Batoz-Lardeur 1990      = cortante por EQUILIBRIO
    DKMQ   Katili 1993             = cortante colocado + factor phi_k
    BIN    15 GDL con burbuja      = lo que se habia leido del binario

Tres medidas, y cada una dice algo distinto:
  * ||dK||/||K||     el error de la matriz entera (144 numeros)
  * rango del resto  cuantos modos hay que explicar (menos = mejor punto de partida)
  * modos con MAC>0.9 y error<1 %   cuantos ya estan BIEN
"""
import json, os
import numpy as np
from dse_wilson import K_DSE
from dsq_batoz import K_DSQ
from etabs_binario import K_etabs_placa, ITW8
from min4_mystran import K_MIN4
from ops_elem import K_placa_ops

GAL = r"C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\galpon-bodega-electoral"


def modos(K, D):
    w, V = np.linalg.eigh((K+K.T)/2)
    o = np.argsort(w)
    return w[o][3:]/D, V[:, o][:, 3:]


def puntua(Ke, Kx, D):
    err = np.linalg.norm(Ke-Kx)/np.linalg.norm(Ke)*100
    R = (Ke-Kx); R = (R+R.T)/2
    w = np.sort(np.linalg.eigvalsh(R))[::-1]
    rango = int((np.abs(w) > 1e-6*max(abs(w[0]), 1e-30)).sum())
    neg = w[-1]/w[0] if w[0] > 0 else float("nan")
    we, Ve = modos(Ke, D); wx, Vx = modos(Kx, D)
    ok = 0
    for i in range(len(we)):
        mac = [(Ve[:, i] @ Vx[:, j])**2/((Ve[:, i] @ Ve[:, i])*(Vx[:, j] @ Vx[:, j]))
               for j in range(len(wx))]
        j = int(np.argmax(mac))
        if mac[j] > 0.9 and abs(wx[j]-we[i])/abs(we[i]) < 0.01:
            ok += 1
    return err, rango, neg, ok


ELEM = [
    ("DKQ  (Batoz-Tahar)", lambda p, E, nu, t: K_DSQ(p, E, nu, t, "DKQ")),
    ("DSE  (Wilson/PQ3)",  lambda p, E, nu, t: K_DSE(p, E, nu, t)),
    ("DSQ  (Batoz-Lardeur)", lambda p, E, nu, t: K_DSQ(p, E, nu, t, "DSQ")),
    ("DKMQ (Katili)",      lambda p, E, nu, t: K_DSQ(p, E, nu, t, "DKMQ")),
    ("MIN4 (MYSTRAN/T-H)", lambda p, E, nu, t: K_MIN4(p, E, nu, t)),
    ("OPS  ShellMITC4",    lambda p, E, nu, t: K_placa_ops(p, E, nu, t, "ShellMITC4")),
    ("OPS  ShellDKGQ",     lambda p, E, nu, t: K_placa_ops(p, E, nu, t, "ShellDKGQ")),
    ("BIN  (burbuja 15gdl)", lambda p, E, nu, t: K_etabs_placa(p, E, nu, t, ITW8)),
]

kd = json.load(open(os.path.join(GAL, "k_directa.json"), encoding="utf-8"))
print("="*96)
print("  CADA FORMULACION CONTRA LA CELDA MEDIDA")
print("  ok = modos que ya estan bien (MAC>0.9 y error<1%) de 9")
print("="*96)
tot = {}
for nombre, v in kd.items():
    Ke = np.array(v["K"], float); Ke = (Ke+Ke.T)/2
    pts, E, nu, t = v["pts"], v["E"], v["nu"], v["t"]
    D = E*t**3/(12*(1-nu*nu))
    print("\n  %-14s  %s" % (nombre, "THIN" if v["tipo"] == 1 else "thick"))
    print("     %-22s %10s %7s %11s %5s" %
          ("elemento", "||dK||%", "rango", "neg/max", "ok/9"))
    for etq, f in ELEM:
        try:
            Kx = f(pts, E, nu, t)
            e, r, ng, ok = puntua(Ke, Kx, D)
            print("     %-22s %9.4f%% %7d %11.1e %5d" % (etq, e, r, ng, ok))
            tot.setdefault(etq, []).append((e, r, ok))
        except Exception as ex:
            print("     %-22s  ERROR %s" % (etq, str(ex)[:40]))

print("\n" + "="*96)
print("  RESUMEN sobre los 4 casos THICK (el thin lo gana el DKQ por definicion)")
print("="*96)
print("  %-22s %12s %8s %8s" % ("elemento", "||dK|| medio", "rango", "ok/36"))
for etq, _ in ELEM:
    v = [z for z in tot.get(etq, [])]
    if not v:
        continue
    thick = v[:1]+v[2:]           # fuera k_thin_cuad (el 2o caso)
    print("  %-22s %11.4f%% %8.1f %8d"
          % (etq, np.mean([z[0] for z in thick]),
             np.mean([z[1] for z in thick]), sum(z[2] for z in thick)))
