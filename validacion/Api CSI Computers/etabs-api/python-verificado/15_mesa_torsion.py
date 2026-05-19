# -*- coding: utf-8 -*-
"""
═════════════════════════════════════════════════════════════════════════════
 Mesa de Torsión — Evaluación vía ETABS 19 Python API (comtypes)

 Modelo de Gabriela/Seproinca (e2k 2020 → reabierto en ETABS 19.1):
   1 piso 6×6m × 4m alto, 4 cols C40×40 concreto pinned-base (UX UY UZ),
   4 vigas V30×50 perimetrales, losa 10cm ShellThin, diafragma rígido D1,
   carga area SCP=1 + Live=0.5 tonf/m², modal Eigen 12 modos.

 USO:
   1. Abrí ETABS 22 manualmente (instancia con licencia activa)
   2. python 15_mesa_torsion.py

 SOLUCIÓN al SentinelLM Error #18: ETABS pierde licencia cuando se lanza por
 ApplicationStart(). Workaround: attach via GetActiveObject del ROT.
═════════════════════════════════════════════════════════════════════════════
"""
import os, sys, json, time
import comtypes.client

sys.stdout.reconfigure(encoding='utf-8')
HERE = os.path.dirname(os.path.abspath(__file__))
E2K = os.path.join(HERE, "mesa_torsion.e2k")

print("="*72)
print("  Mesa de Torsión — Evaluación ETABS API")
print("="*72)

try:
    obj = comtypes.client.GetActiveObject("CSI.ETABS.API.ETABSObject")
    print("  [OK] Conectado a ETABS via GetActiveObject")
except Exception as e:
    print(f"  [ERROR] GetActiveObject falló: {e}")
    print("  → Abrí ETABS 22 manualmente antes de correr este script")
    sys.exit(-1)

SM = obj.SapModel

# ─── Abrir el modelo ─────────────────────────────────────────────────────
print(f"\n  Abriendo {os.path.basename(E2K)}…")
ret = SM.File.OpenFile(E2K)
print(f"  OpenFile ret={ret}")
time.sleep(2)

# Si el archivo no se reconoce como .e2k por extensión, importar text
if ret != 0:
    print("  [WARN] OpenFile retornó != 0 — fallback a InitializeNewModel + e2k import")
    SM.InitializeNewModel(6)  # tonf, m, C
    # No hay API directa para importar e2k texto. Hay que copiar al EDB y abrir EDB.

# ─── Confirmar unidades ─────────────────────────────────────────────────
units = SM.GetPresentUnits()
unit_names = {1:"lb-in-F", 2:"lb-ft-F", 3:"kip-in-F", 4:"kip-ft-F",
              5:"kN-mm-C", 6:"kN-m-C", 7:"kgf-mm-C", 8:"kgf-m-C",
              9:"N-mm-C", 10:"N-m-C", 11:"tonf-mm-C", 12:"tonf-m-C",
              13:"kN-cm-C", 14:"kgf-cm-C", 15:"N-cm-C", 16:"tonf-cm-C"}
print(f"  Unidades activas: {unit_names.get(units, units)}")

# ─── Geometría: puntos, columnas, vigas, losa ───────────────────────────
print("\n  Inventario del modelo:")
n_points = SM.PointObj.Count()
n_frames = SM.FrameObj.Count()
n_areas = SM.AreaObj.Count()
print(f"    Points: {n_points}    Frames: {n_frames}    Areas: {n_areas}")

# Lista de stories
ret_st = SM.Story.GetStories()
n_stories = ret_st[0]
print(f"    Stories: {n_stories}")
for i in range(n_stories):
    print(f"      - {ret_st[1][i]}  elev={ret_st[2][i]:.3f} m")

# ─── Análisis ────────────────────────────────────────────────────────────
print("\n  Desbloqueando + activando todos los casos…")
SM.SetModelIsLocked(False)
SM.Analyze.SetRunCaseFlag("", True, True)  # all=True, True
print("  Corriendo análisis…")
SM.Analyze.RunAnalysis()
print("  [OK] Análisis completado")

# ─── Modal results ───────────────────────────────────────────────────────
SM.Results.Setup.DeselectAllCasesAndCombosForOutput()
SM.Results.Setup.SetCaseSelectedForOutput("Modal")

ret = SM.Results.ModalPeriod(0, [], [], [], [], [], [], [])
n = ret[0]
T = list(ret[4]) if n > 0 else []
print(f"\n  Periodos modales ({n} modos):")
print(f"  {'Modo':<5} {'T(s)':<10} {'f(Hz)':<10} {'ω(rad/s)':<10}")
for i in range(n):
    f = 1 / T[i] if T[i] > 0 else 0
    w = 2 * 3.14159265 * f
    print(f"  {i+1:<5} {T[i]:<10.5f} {f:<10.4f} {w:<10.4f}")

# Mass participation
ret2 = SM.Results.ModalParticipatingMassRatios(
    0, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [])
UX = list(ret2[5]) if ret2[0] > 0 else []
UY = list(ret2[6]) if ret2[0] > 0 else []
UZ = list(ret2[7]) if ret2[0] > 0 else []
RX = list(ret2[11]) if ret2[0] > 0 else []
RY = list(ret2[12]) if ret2[0] > 0 else []
RZ = list(ret2[13]) if ret2[0] > 0 else []
SumUX = list(ret2[8]) if ret2[0] > 0 else []
SumUY = list(ret2[9]) if ret2[0] > 0 else []
SumRZ = list(ret2[14]) if ret2[0] > 0 else []

print(f"\n  Mass Participation Factors (%):")
print(f"  {'Modo':<5} {'T(s)':<10} {'Ux%':<8} {'Uy%':<8} {'Rz%':<8} {'ΣUx':<8} {'ΣUy':<8} {'ΣRz':<8}  Tipo")
for i in range(min(n, 12)):
    ux = UX[i] * 100
    uy = UY[i] * 100
    rz = RZ[i] * 100
    sux = SumUX[i] * 100
    suy = SumUY[i] * 100
    srz = SumRZ[i] * 100
    # Clasificar dominante
    if ux > 50:
        tipo = "Trasl-X"
    elif uy > 50:
        tipo = "Trasl-Y"
    elif rz > 50:
        tipo = "Torsión Rz"
    elif rx + ry > 50 if i < len(RX) and i < len(RY) else False:
        tipo = "Rocking RxRy"
    else:
        tipo = "Mixto"
    print(f"  {i+1:<5} {T[i]:<10.5f} {ux:<8.2f} {uy:<8.2f} {rz:<8.2f} {sux:<8.1f} {suy:<8.1f} {srz:<8.1f}  {tipo}")

# ─── Desplazamientos del Diafragma (centroides por story) ───────────────
print(f"\n  Desplazamientos en Story 1 — Modos translacionales/torsionales:")
# Note: diaphragm center of mass se obtiene via DiaphragmCenterOfMass
ret_d = SM.AreaObj.GetDiaphragm("F1")
print(f"    F1 diaphragm: {ret_d}")

# ─── Selfweight masses (chequeo) ─────────────────────────────────────────
SM.Results.Setup.DeselectAllCasesAndCombosForOutput()
try:
    SM.Results.Setup.SetCaseSelectedForOutput("Dead")
    ret_b = SM.Results.BaseReact()
    print(f"\n  Base reactions caso Dead (selfweight):")
    print(f"    Fx={ret_b[1][0]:.2f}  Fy={ret_b[2][0]:.2f}  Fz={ret_b[3][0]:.2f} tonf")
    print(f"    Mx={ret_b[4][0]:.2f}  My={ret_b[5][0]:.2f}  Mz={ret_b[6][0]:.2f} tonf·m")
except Exception as e:
    print(f"    [WARN] Base reactions Dead: {e}")

try:
    SM.Results.Setup.DeselectAllCasesAndCombosForOutput()
    SM.Results.Setup.SetCaseSelectedForOutput("SCP")
    ret_b = SM.Results.BaseReact()
    print(f"\n  Base reactions caso SCP (1 tonf/m² sobre losa 6×6):")
    print(f"    Fx={ret_b[1][0]:.2f}  Fy={ret_b[2][0]:.2f}  Fz={ret_b[3][0]:.2f} tonf  (esperado ≈ 36 tonf)")
except Exception as e:
    print(f"    [WARN] Base reactions SCP: {e}")

# ─── Save results JSON ──────────────────────────────────────────────────
out_path = os.path.join(HERE, "mesa_torsion_etabs_results.json")
out = {
    "model": "Mesa torsión (e2k 2020, ETABS 19.1)",
    "geometry": {"Lx_m": 6.0, "Ly_m": 6.0, "H_m": 4.0,
                 "cols": "C40x40 concrete 4000Psi", "beams": "V30x50",
                 "slab": "10cm ShellThin", "diaphragm": "Rigid D1",
                 "base_restraint": "UX UY UZ (pinned, rotations free)"},
    "nModes": n,
    "periods_s": T,
    "frequencies_Hz": [1/t if t > 0 else 0 for t in T],
    "MPF_pct": {
        "UX": [u*100 for u in UX],
        "UY": [u*100 for u in UY],
        "UZ": [u*100 for u in UZ],
        "RX": [u*100 for u in RX],
        "RY": [u*100 for u in RY],
        "RZ": [u*100 for u in RZ],
        "SumUX": [u*100 for u in SumUX],
        "SumUY": [u*100 for u in SumUY],
        "SumRZ": [u*100 for u in SumRZ],
    },
}
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2)
print(f"\n  JSON guardado: {os.path.basename(out_path)}")
print("\n  ETABS sigue abierto — cerralo manualmente cuando termines.")
