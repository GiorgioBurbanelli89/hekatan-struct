# -*- coding: utf-8 -*-
"""Abre el modelo en SAFE y le pide SU PROPIO .f2k, para comparar los dos.

Es lo que cerró el `.e2k` contra ETABS (del 58.8 % de barras exactas al 100 %):
no discutir sobre los resultados, sino poner los dos ARCHIVOS uno al lado del
otro. Lo que SAFE escribe es lo que SAFE entendió.

    python exportar_f2k_safe.py                # abre el .f2k de Hekatan
    python exportar_f2k_safe.py --fdb          # abre el .FDB ya guardado
"""
import sys
from pathlib import Path

import clr  # type: ignore

clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import cHelper, Helper, cOAPI, cSapModel, cFile  # type: ignore

AQUI = Path(__file__).resolve().parent
F2K_HEK = (AQUI / ".." / ".." / ".." / "examples" / "src" / "edificio-aporticado"
           / "sample_output" / "cimentacion_edificio_9zapatas_12vigas.f2k").resolve()
FDB = AQUI / "Edificio_Cimentacion_via_API.FDB"
SALIDA = AQUI / "safe_devuelto.f2k"

usar_fdb = "--fdb" in sys.argv
origen = FDB if usar_fdb else F2K_HEK
if not origen.exists():
    print("no esta el origen:", origen)
    sys.exit(1)

print("abriendo SAFE ...")
helper = cHelper(Helper())
oapi = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
oapi.ApplicationStart()
sap = cSapModel(oapi.SapModel)
f = cFile(sap.File)

print("abriendo   %s" % origen.name)
ret = f.OpenFile(str(origen))
print("  OpenFile ret=%s" % ret)

# El .f2k que escribe el propio SAFE: es lo que SAFE ENTENDIO del modelo.
print("exportando %s" % SALIDA.name)
ret = f.Save(str(AQUI / "_tmp_safe_export.FDB"))
print("  Save ret=%s" % ret)
try:
    ret = sap.File.ExportToSAFEFile(str(SALIDA))    # SAFE 20
    print("  ExportToSAFEFile ret=%s" % ret)
except Exception as e:                              # noqa: BLE001
    print("  ExportToSAFEFile no disponible: %s" % e)
    # Alternativa: guardar como .f2k directamente por extension.
    ret = f.Save(str(SALIDA))
    print("  Save(.f2k) ret=%s" % ret)

oapi.ApplicationExit(False)
print("hecho ->", SALIDA if SALIDA.exists() else "NO se escribio")
