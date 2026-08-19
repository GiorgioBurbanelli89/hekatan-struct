# -*- coding: utf-8 -*-
"""SAFE acepta lo que se le pide del muelle de area? Se pide y se RELEE.

El modelo del caso 6 se creo pidiendo
`SetAreaSpringProp("AS_Winkler", 0,0, 1030, 0, 0, "", 1.0, 1.0, -1, "", "")`
y lo que hay dentro es OTRA COSA: U3=100, SpringOption=1, EndLengthRatio=0.
O la llamada no surtio efecto, o SAFE la rechazo y se quedo con su default.
Aqui se distingue: se pide, se relee, y se mira el codigo de retorno (que en el
script original NO se miraba).

No guarda nada: solo pregunta.
"""
from pathlib import Path
import clr  # type: ignore

DLL = r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll"
clr.AddReference(DLL)
from SAFEv1 import (cHelper, Helper, cOAPI, cSapModel, cFile,  # type: ignore
                    cPropAreaSpring, eForce, eLength, eTemperature)
from System import Array, String  # type: ignore

AQUI = Path(__file__).resolve().parent
FDB = AQUI / "Edificio_Cimentacion_via_API.FDB"

VACIO = (0.0, 0.0, 0.0, 0, 0, "", 0.0, 0.0, 0, "", "")


def leer(ps, nm):
    g = ps.GetAreaSpringProp(nm, *VACIO)
    return {"ret": g[0], "U1": g[1], "U2": g[2], "U3": g[3],
            "NonlinearOption3": g[4], "SpringOption": g[5],
            "SoilProfile": g[6], "EndLengthRatio": g[7]}


helper = cHelper(Helper())
oapi = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
oapi.ApplicationStart()
sap = cSapModel(oapi.SapModel)
print("OpenFile ret=", cFile(sap.File).OpenFile(str(FDB)), flush=True)

# Las mismas unidades con que se creo el modelo: tonf, m, C.
print("SetPresentUnits ret=",
      sap.SetPresentUnits_2(eForce.tonf, eLength.m, eTemperature.C), flush=True)

ps = cPropAreaSpring(sap.PropAreaSpring)
r = ps.GetNameList(0, Array[String]([]))
nombres = list(r[2]) if int(r[1]) else []
print("muelles:", nombres, flush=True)

nm = nombres[0]
print("ANTES ", leer(ps, nm), flush=True)

# Lo que el modelo real quiere: ks = 105 tonf/m3, solo compresion, muelle simple.
ret = ps.SetAreaSpringProp(nm, 0.0, 0.0, 105.0, 1, 0, "", 0.0, 0.0, -1, "", "")
print("SetAreaSpringProp ret=", ret, flush=True)
print("DESPUES", leer(ps, nm), flush=True)

# Y por si SpringOption=1 (Link) es lo unico que traga:
ret = ps.SetAreaSpringProp(nm, 0.0, 0.0, 105.0, 1, 1, "", 0.0, 0.0, -1, "", "")
print("Set con SpringOption=1 ret=", ret, flush=True)
print("DESPUES", leer(ps, nm), flush=True)

oapi.ApplicationExit(False)
print("SAFE cerrado", flush=True)
