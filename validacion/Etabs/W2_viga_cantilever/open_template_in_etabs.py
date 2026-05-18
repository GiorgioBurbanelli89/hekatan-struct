# -*- coding: utf-8 -*-
"""Abre ETABS con el template de viga compuesta cantilever para que el
usuario edite secciones (I custom + slab) interactivamente.

ETABS queda abierto — NO se llama ApplicationExit.
"""
import os, time
HERE = os.path.dirname(os.path.abspath(__file__))
E2K = os.path.join(HERE, "W2_viga_composite_template.e2k")

print(f"E2K = {E2K}")
print(f"exists = {os.path.exists(E2K)}  size = {os.path.getsize(E2K)} bytes")

from pythonnet import load; load("coreclr")
import clr
DLL = r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll"
clr.AddReference(DLL)
from ETABSv1 import Helper, cHelper, cOAPI, cSapModel, cFile, eUnits

print("\n[1] Iniciando ETABS...")
helper = cHelper(Helper())
ETABS = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
ETABS.ApplicationStart()
print("    ApplicationStart enviado, esperando 5s...")
time.sleep(5)

print("[2] Cargando E2K...")
sap = cSapModel(ETABS.SapModel)
sap.SetPresentUnits(eUnits(6))  # kN_m_C
File = cFile(sap.File)
ret = File.OpenFile(E2K)
print(f"    OpenFile ret={ret}")

# Save a EDB para que ETABS lo deje abierto editable
EDB = os.path.join(HERE, "W2_viga_composite_template.EDB")
sap.SetModelIsLocked(False)
ret = File.Save(EDB)
print(f"    Save EDB ret={ret}  ({EDB})")

print("\n[3] ETABS abierto y listo para editar.")
print("    Modifica la sección, agrega la losa colaborante, o lo que quieras.")
print("    Cuando termines, dejá ETABS abierto y avisame para validar.")
print("\nDONE — script termina pero ETABS queda corriendo.")
