# -*- coding: utf-8 -*-
"""Abre la cimentacion en el programa VISIBLE, la analiza y la DEJA ABIERTA para mirarla
(Jorge, 5-sep-2026: "no has actualizado y dejado abierto en etabs y sap 2000").
    python abrir_visible.py sap|etabs|safe
Si el programa ya esta abierto se engancha a esa instancia (GetObject) y le carga el modelo nuevo."""
import os, sys, time
import comtypes.client
sys.stdout.reconfigure(encoding="utf-8")
AQUI = os.path.dirname(os.path.abspath(__file__)); prog = sys.argv[1]
if prog == "safe":
    sys.path.insert(0, os.path.join(AQUI, "..", "..", "..", "..", "csi-cli", "safe-cli", "cli"))
    import csi_cli as C
    obj, sm, _ = C.start_engine("safe", 6, True)
    try: obj.Unhide()
    except Exception: pass
    sm.InitializeNewModel(6); sm.File.NewBlank()
    C._importar_por_tablas(sm, os.path.join(AQUI, "cimentacion_9zapatas.f2k"))
    sm.File.Save(os.path.join(AQUI, "cimentacion_9zapatas_safe.FDB"))
    print("run", sm.Analyze.RunAnalysis()); sm.View.RefreshView(0, False)
    print("SAFE abierto con", sm.PointObj.Count(), "puntos,", sm.AreaObj.Count(), "areas,", sm.FrameObj.Count(), "barras")
    sys.exit(0)
if prog == "sap":
    import comtypes.gen.SAP2000v1 as S
    h = comtypes.client.CreateObject("SAP2000v1.Helper").QueryInterface(S.cHelper); pid = "CSI.SAP2000.API.SapObject"; fich = "cimentacion_9zapatas.s2k"; ext = ".sdb"; caso = "DEAD"
else:
    import comtypes.gen.ETABSv1 as S
    h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(S.cHelper); pid = "CSI.ETABS.API.ETABSObject"; fich = "cimentacion_9zapatas.e2k"; ext = ".EDB"; caso = "Dead"
o = None
try: o = h.GetObject(pid)
except Exception: o = None
if o is not None: print("enganchado a la instancia abierta")
else:
    o = h.CreateObjectProgID(pid); o.ApplicationStart(True, ""); print("instancia nueva (la que hay abierta no esta registrada en la API)")
try: o.Unhide()
except Exception: pass
sm = o.SapModel
print("OpenFile ->", sm.File.OpenFile(os.path.join(AQUI, fich)))
sm.SetPresentUnits(6)
print("Save ->", sm.File.Save(os.path.join(AQUI, "cimentacion_9zapatas_" + prog + ext)))
try: sm.Analyze.SetRunCaseFlag("MODAL" if prog == "sap" else "Modal", False)
except Exception: pass
print("run ->", sm.Analyze.RunAnalysis())
sm.Results.Setup.DeselectAllCasesAndCombosForOutput(); sm.Results.Setup.SetCaseSelectedForOutput(caso)
try: sm.View.RefreshView(0, False)
except Exception: pass
_, pe, _ = sm.PointElm.GetNameList(); uz = 0.0
for p in pe:
    r = sm.Results.JointDispl(p, 1, 0, [], [], [], [], [], [], [], [], [], [], [])
    if r[0]: uz = min(uz, float(r[8][0]))
print("%s abierto y analizado: %d nudos, Uz min %.4f mm (Hekatan -32.4791)" % (prog, len(pe), uz * 1e3))
