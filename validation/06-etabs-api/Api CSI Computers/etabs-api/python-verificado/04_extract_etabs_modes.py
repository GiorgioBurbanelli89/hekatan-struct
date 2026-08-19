# -*- coding: utf-8 -*-
"""
Lee los modos del modelo abierto en ETABS (perimeter_walls.e2k) y los guarda.
ETABS debe estar corriendo con el modelo abierto.
"""
import sys, json, os, time
import comtypes.client

sys.stdout.reconfigure(encoding='utf-8')

helper = comtypes.client.CreateObject('ETABSv1.Helper')
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)

try:
    obj = helper.GetObject("CSI.ETABS.API.ETABSObject")
    if obj is None:
        raise RuntimeError("ETABS no abierto")
    SapModel = obj.SapModel
    if SapModel is None:
        raise RuntimeError("SapModel = None")
    print(f"[OK] Conectado a ETABS — modelo: {os.path.basename(SapModel.GetModelFilename())}")
except Exception as e:
    print(f"[ERROR] {e}")
    sys.exit(1)

# Correr análisis si no está corrido
SapModel.SetModelIsLocked(False)
SapModel.Analyze.SetRunCaseFlag("", False, True)
SapModel.Analyze.SetRunCaseFlag("Modal", True)
print("Corriendo análisis modal…")
SapModel.Analyze.RunAnalysis()

# Extraer períodos
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("Modal")

ret = SapModel.Results.ModalPeriod(0, [], [], [], [], [], [], [])
n = ret[0]
periods = list(ret[4]) if n > 0 else []

print(f"\n--- {os.path.basename(SapModel.GetModelFilename())} ---")
print(f"Modos: {n}")
for i, T in enumerate(periods[:8]):
    print(f"  Modo {i+1}: T = {T:.4f} s")

# Mass participation
ret2 = SapModel.Results.ModalParticipatingMassRatios(
    0, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [])
ux = list(ret2[5]) if ret2[0] > 0 else []
uy = list(ret2[6]) if ret2[0] > 0 else []
rz = list(ret2[13]) if ret2[0] > 0 else []

# Guardar
out = {"file": os.path.basename(SapModel.GetModelFilename()),
       "T": periods, "UX": ux, "UY": uy, "RZ": rz}
out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                       f"etabs_modes_{os.path.splitext(out['file'])[0]}.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2)
print(f"JSON: {out_path}")
