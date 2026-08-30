# -*- coding: utf-8 -*-
"""Que le pone SAFE a las vigas de cimentacion, y como lo escribe en el .f2k.

Se le abre un .f2k de Hekatan (con zapatas Y vigas de amarre) y se le pregunta a
SAFE, igual que se hizo con SAP2000: los defaults no se adivinan.
"""
import os, sys, comtypes.client
AQUI = os.path.dirname(os.path.abspath(__file__))
F2K = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
    AQUI, "..", "examples", "src", "edificio-aporticado", "sample_output",
    "cimentacion_edificio_9zapatas_12vigas.f2k")
CSV = os.path.join(AQUI, "_safe_off.csv")
for mod in ("SAFEv1", "CSiAPIv1", "ETABSv1"):
    try:
        g = __import__("comtypes.gen." + mod, fromlist=["*"])
        h = comtypes.client.CreateObject(mod + ".Helper").QueryInterface(getattr(g, "cHelper"))
        break
    except Exception:
        pass
o = h.CreateObjectProgID("CSI.SAFE.API.ETABSObject")
o.ApplicationStart()
sm = o.SapModel
print("abriendo:", os.path.basename(F2K))
# ⚠️ `OpenFile` es para .FDB: con un .f2k devuelve 0 (exito) y deja el modelo
# VACIO — 0 frames, 0 areas, 0 points. El .f2k es TEXTO y se IMPORTA.
hecho = None
for met in ("ImportF2K", "OpenFile"):
    try:
        r = getattr(sm.File, met)(os.path.abspath(F2K))
        n = len(sm.AreaObj.GetNameList()[1]) + len(sm.PointObj.GetNameList()[1])
        print("  %-12s -> %s   objetos leidos: %d" % (met, r, n))
        if n:
            hecho = met
            break
    except Exception as ex:
        print("  %-12s -> %s" % (met, str(ex)[:70]))
print("  importado con:", hecho)
sm.SetPresentUnits(6)
# ⚠️ En SAFE las vigas de cimentacion NO son `FrameObj`: el .f2k las escribe en
# «BEAM OBJECT CONNECTIVITY», asi que hay que preguntar por el objeto que toca.
for obj in ("FrameObj", "BeamObj", "AreaObj", "PointObj", "LineObj", "TendonObj"):
    try:
        n = len(getattr(sm, obj).GetNameList()[1])
        print("  %-10s %d" % (obj, n))
    except Exception as ex:
        print("  %-10s -> %s" % (obj, str(ex)[:60]))
try:
    _, frs, _ = sm.FrameObj.GetNameList()
    for nm in list(frs)[:4]:
        e = sm.FrameObj.GetEndLengthOffset(nm, True, 0., 0., 0.)
        print("    %-10s auto=%s  offI=%.4f offJ=%.4f rz=%.3f" % (nm, bool(e[0]), e[1], e[2], e[3]))
except Exception as ex:
    print("  frames:", str(ex)[:90])
try:
    tabs = [str(x) for x in sm.DatabaseTables.GetAvailableTables()[1]]
    cand = [t for t in tabs if "offset" in t.lower()]
    print("  tablas con offset:", cand[:4])
    for t in cand[:2]:
        sm.DatabaseTables.GetTableForDisplayCSVFile(t, [], "All", 0, CSV)
        for l in open(CSV, encoding="utf-8", errors="replace").read().strip().splitlines()[:4]:
            print("     " + l)
except Exception as ex:
    print("  tablas:", str(ex)[:90])
o.ApplicationExit(False)
