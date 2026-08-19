# -*- coding: utf-8 -*-
"""Qué pone SAFE en los 3 parámetros del muelle de área que el f2k NO escribe.

`GetAreaSpringProp(Name, U1, U2, U3, NonlinearOption3, SpringOption, SoilProfile,
EndLengthRatio)` — los tres ultimos no salen del f2k de Hekatan, asi que SAFE
los rellena por defecto. Si el defecto es benigno, el 6.8 % que queda NO es
esto y hay que dejar de mirarlo.
"""
import os, sys
import comtypes.client
sys.stdout.reconfigure(encoding="utf-8")

FDB = os.path.abspath(sys.argv[1] if len(sys.argv) > 1
                      else "Edificio_Cimentacion_via_API.FDB")
h = comtypes.client.CreateObject("CSI.SAFE.API.ETABSObject")
h.ApplicationStart()
sm = h.SapModel
print("abriendo", FDB)
print("  OpenFile ->", sm.File.OpenFile(FDB))
ret = sm.PropAreaSpring.GetNameList()
print("  muelles de area:", ret)
nombres = list(ret[1]) if len(ret) > 1 else []
for nm in nombres:
    try:
        r = sm.PropAreaSpring.GetAreaSpringProp(nm)
        print("\n  %s ->" % nm)
        for i, v in enumerate(r):
            print("     [%d] %r" % (i, v))
    except Exception as e:
        print("  %s ERROR %s" % (nm, str(e)[:90]))
h.ApplicationExit(False)
