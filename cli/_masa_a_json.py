# -*- coding: utf-8 -*-
u"""Anade la BASCULA (AssembledJointMass) a los .json ya escritos, abriendo los
.EDB que dejo `plantillas_etabs.py`. Existe para no repetir el lote entero de
ETABS por un campo que faltaba: los .EDB ya estan resueltos."""
import json, os, sys, time
import comtypes.client
import comtypes.gen.ETABSv1 as E
AQUI = os.path.dirname(os.path.abspath(__file__))
BASE = os.path.join(AQUI, "..", "validation", "modelos", "plantillas", "etabs")
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject"); o.ApplicationStart(); sm = o.SapModel
for f in sorted(x for x in os.listdir(BASE) if x.endswith(".json")):
    jsn = os.path.join(BASE, f)
    edb = os.path.join(BASE, "edb", f[:-5] + ".EDB")
    if not os.path.exists(edb):
        print("sin EDB:", f); continue
    t = time.time()
    D = json.load(open(jsn, encoding="utf-8"))
    sm.File.OpenFile(edb); sm.SetPresentUnits(6)
    sm.Analyze.RunAnalysis()
    r = sm.Results.AssembledJointMass_1("", "All", 2)
    n = r[0]
    D["masa"] = {str(r[1][k]): [r[3][k], r[4][k], r[5][k]] for k in range(n)}
    D["masa_total"] = [sum(r[3][:n]), sum(r[4][:n]), sum(r[5][:n])]
    D.pop("masa_error", None)
    json.dump(D, open(jsn, "w", encoding="utf-8"))
    print("%-26s %5d nudos con masa, total U1=%.3f t   %.1f s" %
          (f[:-5], n, D["masa_total"][0], time.time() - t))
    sys.stdout.flush()
o.ApplicationExit(False)
