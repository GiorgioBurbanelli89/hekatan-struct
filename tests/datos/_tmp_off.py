# -*- coding: utf-8 -*-
"""Los END LENGTH OFFSETS que ETABS calcula solo. Con `auto = True` la API
devuelve 0 en las longitudes, asi que hay que ir al modelo de ANALISIS."""
import os, collections, comtypes.client
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
    _, fes, _ = sm.FrameElm.GetNameList()
    print("FrameElm: %d" % len(fes))
    hist = collections.Counter()
    ej = []
    for nm in fes:
        try:
            r = sm.FrameElm.GetEndLengthOffset(nm, 0., 0., 0.)
            oi, oj, rz = r[0], r[1], r[2]
        except Exception as ex:
            print("  GetEndLengthOffset(FrameElm):", str(ex)[:80]); break
        hist[(round(oi, 4), round(oj, 4), round(rz, 3))] += 1
        if (oi or oj) and len(ej) < 8:
            sec = sm.FrameElm.GetSection(nm, "", "")[0]
            ej.append((nm, sec, oi, oj, rz))
    print("\nhistograma (offI, offJ, rz) -> cuantas:")
    for k, v in sorted(hist.items(), key=lambda x: -x[1])[:12]:
        print("   %-28s %d" % (str(k), v))
    print("\nejemplos con offset:")
    for nm, sec, oi, oj, rz in ej:
        print("   %-10s %-14s offI=%.4f offJ=%.4f rz=%.3f" % (nm, sec, oi, oj, rz))
except Exception as ex:
    print("ERROR:", ex)
o.ApplicationExit(False)
