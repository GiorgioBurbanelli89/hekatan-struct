"""
Abre SAFE 20 con guerra_ej1.fdb cargado, FUERZA unidades a tonf-m,
corre el analisis, guarda el archivo. Despues queda en bucle input()
para que la app siga viva y puedas ver el Soil Pressure Diagram.

Uso:
  python abrir_safe_ej1.py
  (presiona Enter en la consola cuando quieras cerrar SAFE)
"""
import sys
from pathlib import Path
import clr

clr.AddReference("System.Runtime.InteropServices")
clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import (
    cHelper, Helper, cOAPI, cSapModel, cFile, cAnalyze,
    eForce, eLength, eTemperature,
)

MODEL_PATH = r"C:\CSi_SAFE_API_Example\guerra_ej1.fdb"

if not Path(MODEL_PATH).exists():
    print(f"ERROR: {MODEL_PATH} no existe.")
    print("       Correr primero ej1_zapata_cuadrada.py para construirlo.")
    sys.exit(1)

# 1) Arrancar SAFE via API (registra COM moniker, queda atacheable)
helper = cHelper(Helper())
mySAFE = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
mySAFE.ApplicationStart()
sap = cSapModel(mySAFE.SapModel)
print("SAFE 20 abierto.")

# 2) FUERZA unidades tonf-m ANTES de cargar el modelo
ret = sap.SetPresentUnits_2(eForce.tonf, eLength.m, eTemperature.C)
print(f"SetPresentUnits_2(tonf, m, C): ret={ret}")

# 3) Cargar modelo
File = cFile(sap.File)
File.OpenFile(MODEL_PATH)
print(f"Modelo cargado: {MODEL_PATH}")

# 4) Forzar units OTRA VEZ por las dudas (OpenFile puede resetearlas a default US)
ret = sap.SetPresentUnits_2(eForce.tonf, eLength.m, eTemperature.C)
print(f"SetPresentUnits_2(tonf, m, C) post-load: ret={ret}")

# 5) Confirmar units actuales
fU = eForce.NotApplicable; lU = eLength.NotApplicable; tU = eTemperature.NotApplicable
ret, fU, lU, tU = sap.GetPresentUnits_2(fU, lU, tU)
print(f"Units confirmadas: Force={fU}, Length={lU}, Temp={tU}")

# 6) Correr analisis
Analyze = cAnalyze(sap.Analyze)
print("Corriendo analysis...")
ret = Analyze.RunAnalysis()
print(f"RunAnalysis: ret={ret}")

# 7) Guardar (units persistiran en el .fdb)
ret = File.Save(MODEL_PATH)
print(f"File.Save: ret={ret}")

print()
print("=" * 70)
print("SAFE QUEDA ABIERTO. Para ver el Soil Pressure Diagram:")
print("  1) Display > Show Forces/Stresses > Slabs")
print("  2) O Display > Show Soil Pressures")
print("  3) Combo 'CARGA VERTICAL' (1.0D + 1.0L)")
print("  4) Esperado: sigma_max ~ 13.16 t/m^2 (libro p.36)")
print("=" * 70)
print()
print("Mantengo Python vivo asi SAFE no se cierra.")
print("Presiona Enter (en esta consola) para cerrar SAFE y terminar.")
try:
    input()
except (EOFError, KeyboardInterrupt):
    pass
print("Cerrando SAFE...")
try:
    mySAFE.ApplicationExit(False)
except Exception:
    pass
