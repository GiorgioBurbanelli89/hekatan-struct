# -*- coding: utf-8 -*-
"""Fuerzas internas de barra de la Mesa de Torsion (ETABS 19.1), por ELEMENTO
de analisis, para arbitrar el ejemplo `mesa-torsion` barra a barra.

    python gen_mesa_fuerzas_etabs.py <EDB> <CASO> <OUT.json>

Por que a nivel de ELEMENTO y no de OBJETO (como galpon/fuerzas_etabs.py):
Hekatan subdivide cada viga perimetral en 5 segmentos para compartir nudos con
la malla 5x5 de la losa (24 LineElm = 4 cols + 20 segmentos). ETABS hace lo
mismo por AUTOMESH + MESHATINTERSECTIONS. Si comparamos por objeto (la viga
entera esquina-a-esquina) las coordenadas de nudo NO emparejan con los 5
segmentos de Struct. Se extrae por LineElm, con las coordenadas reales de cada
sub-elemento, y asi `compararFuerzas` puede emparejar por clave de coordenadas.

Brazos rigidos a CERO (igual que Paz 6.3 y mezanine): con los automaticos ETABS
reporta en la CARA del nudo, no en el nudo, y no pesa el tramo del brazo. Struct
reporta en el nudo. Se anulan para comparar en el mismo punto.
"""
import json
import os
import sys

import comtypes.client
import comtypes.gen.ETABSv1 as E

EDB = sys.argv[1] if len(sys.argv) > 1 else "mesa_probe.EDB"
CASO = sys.argv[2] if len(sys.argv) > 2 else "Dead"
OUT = sys.argv[3] if len(sys.argv) > 3 else "mesa_torsion_dead_etabs.json"

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
o.ApplicationStart()
try:
    o.Hide()
except Exception:
    pass
sm = o.SapModel
sm.InitializeNewModel(6)          # 6 = kN_m_C
sm.File.OpenFile(os.path.abspath(EDB))
sm.SetPresentUnits(6)

# --- Brazos rigidos a CERO ---------------------------------------------------
_, fos0, _ = sm.FrameObj.GetNameList()
nulos = 0
for nm in fos0:
    eo = sm.FrameObj.GetEndLengthOffset(nm, True, 0., 0., 0.)
    if max(abs(float(eo[1])), abs(float(eo[2]))) > 1e-9:
        if sm.GetModelIsLocked():
            sm.SetModelIsLocked(False)
        sm.FrameObj.SetEndLengthOffset(nm, False, 0., 0., 0.)
        nulos += 1
print("brazos rigidos anulados: %d" % nulos, flush=True)

if not sm.GetModelIsLocked():
    sm.Analyze.RunAnalysis()
sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
sm.Results.Setup.SetCaseSelectedForOutput(CASO)
try:
    sm.Results.Setup.SetComboSelectedForOutput(CASO)
except Exception:
    pass

# --- Mapa: LineElm -> coordenadas de sus dos PointElm ------------------------
_, lelms, _ = sm.LineElm.GetNameList()
coord_de = {}
for le in lelms:
    gp = sm.LineElm.GetPoints(le, "", "")     # (p1, p2, ret)
    p1, p2 = gp[0], gp[1]
    c1 = sm.PointElm.GetCoordCartesian(p1, 0., 0., 0.)
    c2 = sm.PointElm.GetCoordCartesian(p2, 0., 0., 0.)
    coord_de[le] = ([c1[0], c1[1], c1[2]], [c2[0], c2[1], c2[2]])
print("LineElm (elementos de analisis): %d" % len(lelms), flush=True)

# --- Fuerzas por OBJETO, agrupadas por elemento de analisis ------------------
_, fos, _ = sm.FrameObj.GetNameList()
por_elm = {}   # Elm -> {sta: [(sta, P, V2, V3, T, M2, M3)]}
for nm in fos:
    r = sm.Results.FrameForce(nm, 0, 0, [], [], [], [], [], [], [], [], [], [], [], [], [])
    n = r[0]
    if not n:
        continue
    # 0 Num, 1 Obj, 2 ObjSta, 3 Elm, 4 ElmSta, 5 Case, 6 StepType, 7 StepNum,
    # 8 P, 9 V2, 10 V3, 11 T, 12 M2, 13 M3
    Elm, ElmSta = list(r[3][:n]), list(r[4][:n])
    P, V2, V3 = list(r[8][:n]), list(r[9][:n]), list(r[10][:n])
    T, M2, M3 = list(r[11][:n]), list(r[12][:n]), list(r[13][:n])
    for k in range(n):
        por_elm.setdefault(Elm[k], []).append(
            (ElmSta[k], P[k], V2[k], V3[k], T[k], M2[k], M3[k]))

out = []
for elm, filas in por_elm.items():
    if elm not in coord_de:
        continue
    a = min(filas, key=lambda f: f[0])       # extremo i (sta minima)
    b = max(filas, key=lambda f: f[0])       # extremo j (sta maxima)
    ci, cj = coord_de[elm]
    out.append({
        "i": ci, "j": cj,
        "P":  [a[1], b[1]], "V2": [a[2], b[2]], "V3": [a[3], b[3]],
        "T":  [a[4], b[4]], "M2": [a[5], b[5]], "M3": [a[6], b[6]],
        "sta": [a[0], b[0]], "off": [0., 0., 0.],
    })

print("elementos con resultados: %d   caso: %s" % (len(out), CASO))
if out:
    pico = lambda k: max(max(abs(r[k][0]), abs(r[k][1])) for r in out)
    print("  maximos |P| %.3f  |V2| %.3f  |V3| %.3f  |T| %.4f  |M2| %.3f  |M3| %.3f"
          % (pico("P"), pico("V2"), pico("V3"), pico("T"), pico("M2"), pico("M3")))
    e0 = out[0]
    print("  1er elem: i=%s j=%s  sta=%s" % (e0["i"], e0["j"], e0["sta"]))
json.dump(out, open(OUT, "w"))
print("escrito: %s" % OUT)
o.ApplicationExit(False)
