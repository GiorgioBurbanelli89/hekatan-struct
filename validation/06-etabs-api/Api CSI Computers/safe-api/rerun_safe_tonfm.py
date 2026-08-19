"""
Conecta a SAFE 20 (que ya está abierto) y FUERZA unidades a tonf-m,
luego corre el análisis y guarda el modelo. Para que la GUI muestre
unidades consistentes con el libro.
"""
import clr
clr.AddReference("System.Runtime.InteropServices")
clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import (
    cHelper, Helper, cOAPI, cSapModel, cFile, cAnalyze,
    eForce, eLength, eTemperature,
)

helper = cHelper(Helper())
try:
    mySAFE = cOAPI(helper.GetObject("CSI.SAFE.API.ETABSObject"))
except Exception as e:
    print(f"FATAL: no hay instancia de SAFE corriendo. {e}")
    print("       Correr primero abrir_safe_ej1.py")
    import sys; sys.exit(1)

sap = cSapModel(mySAFE.SapModel)
print("Conectado a SAFE.")

# 1) Forzar units presentes
ret = sap.SetPresentUnits_2(eForce.tonf, eLength.m, eTemperature.C)
print(f"SetPresentUnits_2(tonf, m, C): ret={ret}")

# 2) Read back para confirmar
fU = eForce.NotApplicable
lU = eLength.NotApplicable
tU = eTemperature.NotApplicable
ret, fU, lU, tU = sap.GetPresentUnits_2(fU, lU, tU)
print(f"Confirmado: Force={fU}, Length={lU}, Temp={tU}")

# 3) Run analysis (puede skip si ya esta corrido)
Analyze = cAnalyze(sap.Analyze)
print("Corriendo analysis...")
ret = Analyze.RunAnalysis()
print(f"RunAnalysis: ret={ret}")

# 4) Save (asi las units persisten para futuras aperturas)
File = cFile(sap.File)
ret = File.Save(r"C:\CSi_SAFE_API_Example\guerra_ej1.fdb")
print(f"File.Save: ret={ret}")

print()
print("Listo. La GUI ahora deberia mostrar tonf-m en el status bar.")
print("Para refrescar: clickear cualquier herramienta de la toolbar,")
print("o ir a 'Define > Units > tonf, m, C'.")
