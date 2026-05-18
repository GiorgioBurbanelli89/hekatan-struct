# -*- coding: utf-8 -*-
"""Abre ETABS con el template de viga COMPUESTA cantilever (sin peso propio)
para que el usuario diseñe la sección compuesta interactivamente.

ETABS queda abierto — NO se llama ApplicationExit.
"""
import os, time
HERE = os.path.dirname(os.path.abspath(__file__))
E2K = os.path.join(HERE, "W2_viga_compuesta_template.e2k")

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

EDB = os.path.join(HERE, "W2_viga_compuesta_template.EDB")
sap.SetModelIsLocked(False)
ret = File.Save(EDB)
print(f"    Save EDB ret={ret}  ({EDB})")

print("\n[3] ETABS abierto.")
print("    Define → Section Property → Modify Comp_Section → diseñá la sección compuesta.")
print("    Peso propio DESACTIVADO (SELFWEIGHT=0 en Dead pattern).")
print("    Cuando termines, dejá ETABS abierto y avisame para validar.")
print("\nDONE — script termina pero ETABS queda corriendo.")
