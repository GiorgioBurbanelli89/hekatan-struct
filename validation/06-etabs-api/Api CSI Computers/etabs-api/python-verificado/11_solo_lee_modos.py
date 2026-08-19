# -*- coding: utf-8 -*-
"""
Script SIMPLE: conecta a ETABS abierto, lee modos del modelo activo.
NO construye ni abre nada. Solo lee resultados de Modal Analysis ya ejecutado.

USO:
  1. En ETABS abierto: File → Import → ETABS Text File → seleccionar .e2k
  2. F5 (Run Analysis) — espera a que termine
  3. Correr este script: python 11_solo_lee_modos.py
"""
import os, sys, json
import comtypes.client

sys.stdout.reconfigure(encoding='utf-8')

# Conectar
obj = comtypes.client.GetActiveObject("CSI.ETABS.API.ETABSObject")
SM = obj.SapModel
filename = SM.GetModelFilename()
print(f"Modelo activo: {filename}")

# Verificar que análisis esté corrido
status = SM.Analyze.GetCaseStatus()
casos = list(status[1])
estados = list(status[2])
print(f"\nCasos: {casos}")
print(f"Estados: {estados}")
status_text = {0:"NotRun", 1:"NotStarted", 2:"NotFinished", 3:"Finished"}
for c, s in zip(casos, estados):
    print(f"  {c}: {status_text.get(s, s)}")

if all(s != 3 for s in estados):
    print("\n[!] Ningún caso terminado. Ejecuta F5 en ETABS primero.")
    sys.exit(0)

# Buscar caso modal
modal_case = None
for c in casos:
    if "odal" in str(c):
        modal_case = c
        break
if not modal_case:
    print("[!] No hay caso Modal")
    sys.exit(0)

# Leer modos
SM.Results.Setup.DeselectAllCasesAndCombosForOutput()
SM.Results.Setup.SetCaseSelectedForOutput(modal_case)
ret = SM.Results.ModalPeriod(0,[],[],[],[],[],[],[])
n = ret[0]
print(f"\nModos en {modal_case}: {n}")
if n == 0:
    print("[!] 0 modos — ¿análisis modal no corrió?")
    sys.exit(0)
T = list(ret[4])
print(f"\n{'Modo':<5} {'T(s)':<10} {'Frec(Hz)':<10}")
for i in range(min(8, n)):
    print(f"{i+1:<5} {T[i]:<10.4f} {1/T[i]:<10.4f}")

# MPF
ret2 = SM.Results.ModalParticipatingMassRatios(
    0,[],[],[],[],[],[],[],[],[],[],[],[],[],[],[])
if ret2[0] > 0:
    UX = list(ret2[5]); UY = list(ret2[6]); UZ = list(ret2[7]); RZ = list(ret2[13])
    print(f"\nMass Participation:")
    print(f"{'Modo':<5} {'T(s)':<10} {'Ux%':<8} {'Uy%':<8} {'Uz%':<8} {'Rz%':<8}")
    for i in range(min(8, ret2[0])):
        print(f"{i+1:<5} {T[i]:<10.4f} {UX[i]*100:<8.1f} {UY[i]*100:<8.1f} {UZ[i]*100:<8.1f} {RZ[i]*100:<8.1f}")

# Save JSON con nombre del archivo
out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                        f"modos_{os.path.basename(filename).replace('.','_')}.json")
out = {"file": filename, "case": modal_case, "T": T,
       "UX": UX if ret2[0]>0 else [],
       "UY": UY if ret2[0]>0 else [],
       "UZ": UZ if ret2[0]>0 else [],
       "RZ": RZ if ret2[0]>0 else []}
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2)
print(f"\nJSON: {os.path.basename(out_path)}")
