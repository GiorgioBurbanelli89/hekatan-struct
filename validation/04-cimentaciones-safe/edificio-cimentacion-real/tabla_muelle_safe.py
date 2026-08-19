# -*- coding: utf-8 -*-
"""Los NOMBRES DE COLUMNA de la tabla del muelle de area, tal como los llama SAFE.

Para que: el `.f2k` es un volcado de tablas, asi que las columnas de la tabla
son los campos que hay que escribir. Hekatan hoy escribe solo
`"Subgrade Modulus"` y `"Nonlinear Option"`, y la OAPI dice que un muelle de
area tiene tambien SpringOption, SoilProfile y EndLengthRatio.

Ojo con lo que cuelga SAFE (medido, 18-ago):
  - `GetAvailableTables()`   cuelga  -> aqui se pide la tabla POR NOMBRE
  - `cAreaObj.GetElm()`      cuelga  -> no se llama

Y los metodos van por reflexion sobre la INTERFAZ: el objeto concreto es
`wDatabaseTables` y la implementa de forma explicita, asi que
`obj.GetType().GetMethod(...)` devuelve None.
"""
from pathlib import Path
import clr  # type: ignore

DLL = r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll"
clr.AddReference(DLL)
from SAFEv1 import cHelper, Helper, cOAPI, cSapModel, cFile, cDatabaseTables  # type: ignore
from System import Array, String, Object, Activator  # type: ignore
from System.Reflection import Assembly  # type: ignore

AQUI = Path(__file__).resolve().parent
FDB = AQUI / "Edificio_Cimentacion_via_API.FDB"

CANDIDATAS = [
    "Spring Property Definitions - Area Springs",
    "SPRING PROPERTY DEFINITIONS - AREA SPRINGS",
    "Area Spring Property Definitions",
]

asm = Assembly.LoadFrom(DLL)
tipo = [t for t in asm.GetTypes() if t.Name == "cDatabaseTables"][0]


def firma(nombre):
    m = tipo.GetMethod(nombre)
    if m is None:
        return None, []
    return m, list(m.GetParameters())


def vacio(t):
    if t.IsByRef:
        t = t.GetElementType()
    if t.FullName == "System.String":
        return ""
    if t.IsArray:
        return Array.CreateInstance(t.GetElementType(), 0)
    return Activator.CreateInstance(t)


helper = cHelper(Helper())
oapi = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
oapi.ApplicationStart()
sap = cSapModel(oapi.SapModel)
print("OpenFile ret=", cFile(sap.File).OpenFile(str(FDB)), flush=True)
db = cDatabaseTables(sap.DatabaseTables)

mi, pars = firma("GetTableForDisplayArray")
print("\nGetTableForDisplayArray(%s)"
      % ", ".join("%s %s" % (p.ParameterType.Name, p.Name) for p in pars), flush=True)

for clave in CANDIDATAS:
    args = Array[Object]([clave] + [vacio(p.ParameterType) for p in pars[1:]])
    try:
        ret = mi.Invoke(db, args)
    except Exception as e:  # noqa: BLE001
        print("\n%-50s EXCEPCION %s" % (clave, str(e)[:80]), flush=True)
        continue
    print("\n%-50s ret=%s" % (clave, ret), flush=True)
    if int(ret) != 0:
        continue
    for p, v in zip(pars, args):
        if p.ParameterType.IsByRef and p.ParameterType.GetElementType().IsArray:
            lst = list(v) if v is not None else []
            print("   %-20s (%d) %s" % (p.Name, len(lst), lst[:40]), flush=True)
        else:
            print("   %-20s = %r" % (p.Name, v), flush=True)
    break

oapi.ApplicationExit(False)
print("\nSAFE cerrado", flush=True)
