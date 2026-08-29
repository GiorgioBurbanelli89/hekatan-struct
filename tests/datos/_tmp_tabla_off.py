# -*- coding: utf-8 -*-
"""Los END LENGTH OFFSETS que ETABS CALCULA (auto), leidos de su tabla."""
import os, comtypes.client
import comtypes.gen.ETABSv1 as E
G = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                 "..", "..", "..", "galpon-bodega-electoral"))
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
o.ApplicationStart()
sm = o.SapModel
sm.File.OpenFile(os.path.join(G, "parte_mezanine_maciza_thin.EDB"))
sm.SetPresentUnits(6)
try:
    r = sm.DatabaseTables.GetAvailableTables()
    nombres = [str(x) for x in r[1]]
    cand = [n for n in nombres if "offset" in n.lower() or "End Length" in n]
    print("tablas con 'offset': %s" % cand[:8])
except Exception as ex:
    print("GetAvailableTables:", str(ex)[:120]); cand = []
T = "Frame Assignments - End Length Offsets"
CSV = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_off.csv")
for intento, args in enumerate((
        (T, [], "All", 0, CSV),
        (T, [], "All", CSV),
        (T, [], "All", 1, CSV))):
    try:
        r = sm.DatabaseTables.GetTableForDisplayCSVFile(*args)
        print("CSV OK con %d args -> %s" % (len(args), r))
        break
    except Exception as ex:
        print("  %d args: %s" % (len(args), str(ex)[:90]))
o.ApplicationExit(False)
