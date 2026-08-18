# -*- coding: utf-8 -*-
"""Como esta definido el muelle de area en el modelo de SAFE, y como mallo."""
from pathlib import Path
import clr  # type: ignore
clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import (cHelper, Helper, cOAPI, cSapModel, cFile,  # type: ignore
                    cPropAreaSpring, cAreaObj)
from System import Array, String, Double, Int32  # type: ignore

AQUI = Path(__file__).resolve().parent
FDB = AQUI / "Edificio_Cimentacion_via_API.FDB"
helper = cHelper(Helper())
oapi = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
oapi.ApplicationStart()
sap = cSapModel(oapi.SapModel)
print("OpenFile ret=", cFile(sap.File).OpenFile(str(FDB)))

ps = cPropAreaSpring(sap.PropAreaSpring)
r = ps.GetNameList(0, Array[String]([]))
nombres = list(r[2]) if int(r[1]) else []
print("\nmuelles de area definidos:", nombres)
for nm in nombres:
    g = ps.GetAreaSpringProp(nm, 0.0, 0.0, 0.0, 0, 0, "", 0.0)
    print("  %s:" % nm)
    print("     U1=%s  U2=%s  U3=%s" % (g[1], g[2], g[3]))
    print("     NonlinearOption3=%s   SpringOption=%s" % (g[4], g[5]))
    print("     SoilProfile=%r   EndLengthRatio=%s" % (g[6], g[7]))

ao = cAreaObj(sap.AreaObj)
r = ao.GetNameList(0, Array[String]([]))
areas = list(r[2]) if int(r[1]) else []
print("\nobjetos de area: %d" % len(areas))
tot = 0
for nm in areas[:12]:
    e = ao.GetElm(nm, 0, Array[String]([]))
    n = int(e[1]); tot += n
    print("   %-10s -> %d elementos de analisis" % (nm, n))
print("   (los %d primeros suman %d elementos)" % (min(12, len(areas)), tot))
oapi.ApplicationExit(False)
