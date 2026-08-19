# -*- coding: utf-8 -*-
"""Qué son los 82 nudos CON APOYO que declara el LOG de SAFE.

El `.LOG` del análisis dice `WITH RESTRAINTS = 82` mientras Hekatan no pone ni
uno (solo muelles). Si esos apoyos sujetan la cimentación, los dos modelos no
tienen el mismo suelo y comparar asentamientos no significa nada.

Se pregunta nudo a nudo con `PointObj.GetRestraint`, que es una llamada simple:
`GetAvailableTables` cuelga el proceso de SAFE y hubo que matarlo.

    python restraints_safe.py
"""
import sys
from collections import Counter
from pathlib import Path

import clr  # type: ignore

clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import cHelper, Helper, cOAPI, cSapModel, cFile, cPointObj  # type: ignore
from System import Array, String, Boolean, Double  # type: ignore

AQUI = Path(__file__).resolve().parent
FDB = AQUI / "Edificio_Cimentacion_via_API.FDB"
F2K = (AQUI / ".." / ".." / ".." / "examples" / "src" / "edificio-aporticado"
       / "sample_output" / "cimentacion_edificio_9zapatas_12vigas.f2k").resolve()

origen = FDB if FDB.exists() else F2K
print("abriendo SAFE con %s ..." % origen.name)

helper = cHelper(Helper())
oapi = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
oapi.ApplicationStart()
sap = cSapModel(oapi.SapModel)
print("  OpenFile ret=%s" % cFile(sap.File).OpenFile(str(origen)))

po = cPointObj(sap.PointObj)
r = po.GetNameList(0, Array[String]([]))
n = int(r[1]); nombres = list(r[2])
print("  %d puntos en el modelo\n" % n)

patrones = Counter()
con_apoyo = []
for nm in nombres:
    try:
        rr = po.GetRestraint(nm, Array[Boolean]([False] * 6))
        val = list(rr[1])
    except Exception:                       # noqa: BLE001
        continue
    if any(val):
        clave = "".join("1" if v else "0" for v in val)
        patrones[clave] += 1
        if len(con_apoyo) < 6:
            xyz = po.GetCoordCartesian(nm, 0.0, 0.0, 0.0)
            con_apoyo.append((nm, clave, tuple(round(float(x), 3) for x in xyz[1:4])))

print("nudos CON APOYO: %d de %d" % (sum(patrones.values()), n))
print()
print("  patron (Ux Uy Uz Rx Ry Rz)   cuantos")
for k, v in patrones.most_common():
    print("  %-28s %d" % (" ".join(k), v))
print()
print("  ejemplos (nombre, patron, x y z):")
for nm, k, xyz in con_apoyo:
    print("    %-8s %s   %s" % (nm, k, xyz))

oapi.ApplicationExit(False)
