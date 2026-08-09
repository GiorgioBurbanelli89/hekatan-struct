# -*- coding: utf-8 -*-
"""Referencia ETABS de mesa-torsion para ARBITRAR EL SOLVER: mismas entradas.

    python gen_mesa_solver_ref.py <EDB> <CASO> <OUT.json> [nodiaph=1]

A diferencia del peso propio (que ETABS reparte distribuido y Hekatan lumpea a
nudos), el caso SCP es una carga de AREA UNIFORME sobre la losa. Para carga
uniforme el reparto por area tributaria de Hekatan (esquina 0.25 / borde 0.5 /
centro 1.0) coincide NUDO A NUDO con la carga consistente Q4 de ETABS, asi que
el vector de cargas es identico en los dos programas.

Queda una sola diferencia de modelo: ETABS pone un DIAFRAGMA RIGIDO en la losa;
Hekatan usa cascara flexible. Con nodiaph=1 se DESCONECTA el diafragma en ETABS
para que los dos resuelvan el mismo sistema. Asi la comparacion barra a barra
mide el SOLVER, no las decisiones de modelado.

Brazos rigidos a CERO (igual que el resto de la suite).
"""
import json
import os
import sys

import comtypes.client
import comtypes.gen.ETABSv1 as E

EDB = sys.argv[1] if len(sys.argv) > 1 else "mesa_probe.EDB"
CASO = sys.argv[2] if len(sys.argv) > 2 else "SCP"
OUT = sys.argv[3] if len(sys.argv) > 3 else "mesa_torsion_scp_etabs.json"
NODIAPH = (sys.argv[4] if len(sys.argv) > 4 else "1") == "1"

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
sm.InitializeNewModel(6)          # kN_m_C
sm.File.OpenFile(os.path.abspath(EDB))
sm.SetPresentUnits(6)

if sm.GetModelIsLocked():
    sm.SetModelIsLocked(False)

# --- Brazos rigidos a CERO ---------------------------------------------------
_, fos0, _ = sm.FrameObj.GetNameList()
nulos = 0
for nm in fos0:
    eo = sm.FrameObj.GetEndLengthOffset(nm, True, 0., 0., 0.)
    if max(abs(float(eo[1])), abs(float(eo[2]))) > 1e-9:
        sm.FrameObj.SetEndLengthOffset(nm, False, 0., 0., 0.)
        nulos += 1
print("brazos rigidos anulados: %d" % nulos, flush=True)

# --- Desconectar el DIAFRAGMA (opcional) ------------------------------------
if NODIAPH:
    desc = 0
    _, pts, _ = sm.PointObj.GetNameList()
    for pn in pts:
        try:
            sm.PointObj.SetDiaphragm(pn, 1, "")     # 1 = Disconnect
            desc += 1
        except Exception:
            pass
    _, ars, _ = sm.AreaObj.GetNameList()
    for an in ars:
        try:
            sm.AreaObj.SetDiaphragm(an, "")
        except Exception:
            pass
    print("diafragma desconectado en %d puntos + %d areas" % (desc, len(ars)), flush=True)

sm.Analyze.RunAnalysis()
sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
sm.Results.Setup.SetCaseSelectedForOutput(CASO)
try:
    sm.Results.Setup.SetComboSelectedForOutput(CASO)
except Exception:
    pass

# --- Mapa LineElm -> coords --------------------------------------------------
_, lelms, _ = sm.LineElm.GetNameList()
coord_de = {}
for le in lelms:
    gp = sm.LineElm.GetPoints(le, "", "")
    c1 = sm.PointElm.GetCoordCartesian(gp[0], 0., 0., 0.)
    c2 = sm.PointElm.GetCoordCartesian(gp[1], 0., 0., 0.)
    coord_de[le] = ([c1[0], c1[1], c1[2]], [c2[0], c2[1], c2[2]])
print("LineElm: %d   caso: %s   nodiaph: %s" % (len(lelms), CASO, NODIAPH), flush=True)

# --- Fuerzas por elemento de analisis ---------------------------------------
_, fos, _ = sm.FrameObj.GetNameList()
por_elm = {}
for nm in fos:
    r = sm.Results.FrameForce(nm, 0, 0, [], [], [], [], [], [], [], [], [], [], [], [], [])
    n = r[0]
    if not n:
        continue
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
    a = min(filas, key=lambda f: f[0])
    b = max(filas, key=lambda f: f[0])
    ci, cj = coord_de[elm]
    out.append({
        "i": ci, "j": cj,
        "P":  [a[1], b[1]], "V2": [a[2], b[2]], "V3": [a[3], b[3]],
        "T":  [a[4], b[4]], "M2": [a[5], b[5]], "M3": [a[6], b[6]],
        "sta": [a[0], b[0]], "off": [0., 0., 0.],
    })
print("elementos con resultados: %d" % len(out))
if out:
    pico = lambda k: max(max(abs(r[k][0]), abs(r[k][1])) for r in out)
    print("  maximos |P| %.3f  |V2| %.3f  |V3| %.3f  |T| %.4f  |M2| %.3f  |M3| %.3f"
          % (pico("P"), pico("V2"), pico("V3"), pico("T"), pico("M2"), pico("M3")))
json.dump(out, open(OUT, "w"))
print("escrito: %s" % OUT)
o.ApplicationExit(False)
