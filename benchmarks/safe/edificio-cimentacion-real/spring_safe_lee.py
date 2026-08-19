# -*- coding: utf-8 -*-
"""Como esta definido el muelle de area en el modelo de SAFE del caso 6.

Por que hizo falta: `ps.GetAreaSpringProp(nm, 0.0,0.0,0.0, 0,0, "", 0.0)` falla
con "No method matches given arguments", y NO es por los `ref`: la firma tiene
DOCE parametros, no ocho — ademas de U1..EndLengthRatio van Period, color,
notes e iGUID. Es la trampa de siempre de la OAPI de CSI (numero y orden de
argumentos). Con los doce, la llamada normal empareja y devuelve la tupla.

La firma se saca del assembly (`cPropAreaSpring` es la INTERFAZ; el objeto
concreto es `wPropAreaSpring` y la implementa de forma explicita, asi que
`ps.GetType().GetMethod(...)` devuelve None).

Lo que CUELGA SAFE y aqui no se llama (medido 18-ago):
`cAreaObj.GetElm()` y `cDatabaseTables.GetAvailableTables()`.
"""
from pathlib import Path
import clr  # type: ignore

DLL = r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll"
clr.AddReference(DLL)
from SAFEv1 import cHelper, Helper, cOAPI, cSapModel, cFile, cPropAreaSpring  # type: ignore
from System import Array, String  # type: ignore
from System.Reflection import Assembly  # type: ignore

AQUI = Path(__file__).resolve().parent
FDB = AQUI / "Edificio_Cimentacion_via_API.FDB"

asm = Assembly.LoadFrom(DLL)
tipo_int = [t for t in asm.GetTypes() if t.Name == "cPropAreaSpring"][0]
pars = list(tipo_int.GetMethod("GetAreaSpringProp").GetParameters())

helper = cHelper(Helper())
oapi = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
oapi.ApplicationStart()
sap = cSapModel(oapi.SapModel)
print("OpenFile ret=", cFile(sap.File).OpenFile(str(FDB)), flush=True)

ps = cPropAreaSpring(sap.PropAreaSpring)
r = ps.GetNameList(0, Array[String]([]))
nombres = list(r[2]) if int(r[1]) else []
print("muelles de area definidos:", nombres, flush=True)

print("", flush=True)
print("firma (%d parametros):" % len(pars), flush=True)
for p in pars:
    print("   %-18s %s" % (p.Name, p.ParameterType.Name), flush=True)

for nm in nombres:
    g = ps.GetAreaSpringProp(nm, 0.0, 0.0, 0.0, 0, 0, "", 0.0, 0.0, 0, "", "")
    print("", flush=True)
    print("%s   (ret=%s)" % (nm, g[0]), flush=True)
    for p, v in zip(pars[1:], g[1:]):
        print("   %-18s = %r" % (p.Name, v), flush=True)

oapi.ApplicationExit(False)
print("SAFE cerrado", flush=True)
