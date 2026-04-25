# -*- coding: utf-8 -*-
"""
================================================================================
ETABS API — Ejemplo OFICIAL CSI (validacion contra resultados independientes)
================================================================================

Tomado del ejemplo oficial provisto por CSI:
  - Construye un portico 2D simple (3 frames: 2 columnas + 1 viga)
  - Aplica 7 patrones de carga (puntual, distribuida, local, point load)
  - Corre el analisis
  - Lee desplazamientos del nudo superior y los compara contra valores
    independientes precalculados (manuales / handbook)

Si los resultados son < 1% de diferencia, la conexion API + el solver de ETABS
estan funcionando correctamente.

Banderas:
  AttachToInstance  - True: conectar a ETABS ya abierto. False: lanzar nuevo.
  SpecifyPath       - True: usar ETABS 19 explicitamente. False: ultima version.

Requisitos: pip install comtypes
================================================================================
"""

import os
import sys
import comtypes.client

# Forzar UTF-8 en stdout (Windows cp1252 default)
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass


# ------------------------------------------------------------------------------
# CONFIGURACION
# ------------------------------------------------------------------------------
AttachToInstance = False   # True = adjuntar a ETABS abierto / False = lanzar
SpecifyPath = False        # True = usar ProgramPath / False = ultima version
ProgramPath = r"C:\Program Files\Computers and Structures\ETABS 22\ETABS.exe"

# Carpeta donde se guarda el .EDB
APIPath = os.path.join(os.path.dirname(os.path.abspath(__file__)), "modelos")
os.makedirs(APIPath, exist_ok=True)
ModelPath = os.path.join(APIPath, "API_1-001.EDB")


# ------------------------------------------------------------------------------
# 1. CREAR HELPER COM
# ------------------------------------------------------------------------------
print("=" * 70)
print("ETABS API — Ejemplo oficial CSI")
print("=" * 70)
print("\n[1] Creando helper API...")
helper = comtypes.client.CreateObject("ETABSv1.Helper")
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)

# ------------------------------------------------------------------------------
# 2. CONECTAR / LANZAR ETABS
# ------------------------------------------------------------------------------
if AttachToInstance:
    print("[2] Adjuntando a instancia ETABS abierta...")
    try:
        myETABSObject = helper.GetObject("CSI.ETABS.API.ETABSObject")
    except (OSError, comtypes.COMError):
        print("    [ERROR] No hay ETABS abierto.")
        sys.exit(-1)
else:
    if SpecifyPath:
        print(f"[2] Lanzando ETABS desde {ProgramPath}...")
        try:
            myETABSObject = helper.CreateObject(ProgramPath)
        except (OSError, comtypes.COMError):
            print(f"    [ERROR] No se pudo lanzar desde {ProgramPath}")
            sys.exit(-1)
    else:
        print("[2] Lanzando ETABS (ultima version instalada)...")
        try:
            myETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
        except (OSError, comtypes.COMError):
            print("    [ERROR] No se pudo lanzar ETABS")
            sys.exit(-1)

    # IMPORTANTE: ApplicationStart() solo si NO usamos AttachToInstance
    myETABSObject.ApplicationStart()

# ------------------------------------------------------------------------------
# 3. OBTENER SapModel
# ------------------------------------------------------------------------------
print("[3] Obteniendo SapModel...")
SapModel = myETABSObject.SapModel
SapModel.InitializeNewModel()
ret = SapModel.File.NewBlank()

# ------------------------------------------------------------------------------
# 4. MATERIAL CONCRETO (E = 3600 ksi, ν = 0.2, α = 5.5e-6)
# ------------------------------------------------------------------------------
print("[4] Definiendo material 'CONC' (concreto)...")
MATERIAL_CONCRETE = 2
ret = SapModel.PropMaterial.SetMaterial("CONC", MATERIAL_CONCRETE)
ret = SapModel.PropMaterial.SetMPIsotropic("CONC", 3600, 0.2, 0.0000055)

# ------------------------------------------------------------------------------
# 5. SECCION RECTANGULAR 12x12 in
# ------------------------------------------------------------------------------
print("[5] Seccion 'R1' (12 x 12 in)...")
ret = SapModel.PropFrame.SetRectangle("R1", "CONC", 12, 12)
ModValue = [1000, 0, 0, 1, 1, 1, 1, 1]   # I22 modificado x1000 (rigidiza columnas)
ret = SapModel.PropFrame.SetModifiers("R1", ModValue)

# ------------------------------------------------------------------------------
# 6. UNIDADES kip-ft
# ------------------------------------------------------------------------------
kip_ft_F = 4
ret = SapModel.SetPresentUnits(kip_ft_F)

# ------------------------------------------------------------------------------
# 7. GEOMETRIA (3 frames)
# ------------------------------------------------------------------------------
print("[6] Geometria: 3 frames...")
FrameName1 = " "
FrameName2 = " "
FrameName3 = " "
[FrameName1, ret] = SapModel.FrameObj.AddByCoord(0, 0, 0,  0, 0, 10, FrameName1, "R1", "1", "Global")
[FrameName2, ret] = SapModel.FrameObj.AddByCoord(0, 0, 10, 8, 0, 16, FrameName2, "R1", "2", "Global")
[FrameName3, ret] = SapModel.FrameObj.AddByCoord(-4, 0, 10, 0, 0, 10, FrameName3, "R1", "3", "Global")

# ------------------------------------------------------------------------------
# 8. APOYOS (base empotrada, top con restraint en U1/U2)
# ------------------------------------------------------------------------------
PointName1 = " "
PointName2 = " "
Restraint = [True, True, True, True, False, False]
[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName1, PointName1, PointName2)
ret = SapModel.PointObj.SetRestraint(PointName1, Restraint)

Restraint = [True, True, False, False, False, False]
[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName2, PointName1, PointName2)
ret = SapModel.PointObj.SetRestraint(PointName2, Restraint)

ret = SapModel.View.RefreshView(0, False)

# ------------------------------------------------------------------------------
# 9. PATRONES DE CARGA (7 patrones)
# ------------------------------------------------------------------------------
print("[7] Patrones de carga (1..7)...")
LTYPE_OTHER = 8
ret = SapModel.LoadPatterns.Add("1", LTYPE_OTHER, 1, True)   # peso propio
ret = SapModel.LoadPatterns.Add("2", LTYPE_OTHER, 0, True)
ret = SapModel.LoadPatterns.Add("3", LTYPE_OTHER, 0, True)
ret = SapModel.LoadPatterns.Add("4", LTYPE_OTHER, 0, True)
ret = SapModel.LoadPatterns.Add("5", LTYPE_OTHER, 0, True)
ret = SapModel.LoadPatterns.Add("6", LTYPE_OTHER, 0, True)
ret = SapModel.LoadPatterns.Add("7", LTYPE_OTHER, 0, True)

# Cargas — exactamente como el ejemplo oficial
[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName3, PointName1, PointName2)
PointLoadValue = [0, 0, -10, 0, 0, 0]
ret = SapModel.PointObj.SetLoadForce(PointName1, "2", PointLoadValue)
ret = SapModel.FrameObj.SetLoadDistributed(FrameName3, "2", 1, 10, 0, 1, 1.8, 1.8)

[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName3, PointName1, PointName2)
PointLoadValue = [0, 0, -17.2, 0, -54.4, 0]
ret = SapModel.PointObj.SetLoadForce(PointName2, "3", PointLoadValue)

ret = SapModel.FrameObj.SetLoadDistributed(FrameName2, "4", 1, 11, 0, 1, 2, 2)
ret = SapModel.FrameObj.SetLoadDistributed(FrameName1, "5", 1, 2, 0, 1, 2, 2, "Local")
ret = SapModel.FrameObj.SetLoadDistributed(FrameName2, "5", 1, 2, 0, 1, -2, -2, "Local")
ret = SapModel.FrameObj.SetLoadDistributed(FrameName1, "6", 1, 2, 0, 1, 0.9984, 0.3744, "Local")
ret = SapModel.FrameObj.SetLoadDistributed(FrameName2, "6", 1, 2, 0, 1, -0.3744, 0, "Local")
ret = SapModel.FrameObj.SetLoadPoint(FrameName2, "7", 1, 2, 0.5, -15, "Local")

# ------------------------------------------------------------------------------
# 10. UNIDADES kip-in para resultados
# ------------------------------------------------------------------------------
kip_in_F = 3
ret = SapModel.SetPresentUnits(kip_in_F)

# ------------------------------------------------------------------------------
# 11. GUARDAR Y CORRER
# ------------------------------------------------------------------------------
print(f"[8] Guardando {os.path.basename(ModelPath)} y corriendo analisis...")
ret = SapModel.File.Save(ModelPath)
ret = SapModel.Analyze.RunAnalysis()

# ------------------------------------------------------------------------------
# 12. LEER DESPLAZAMIENTOS DE LOS 7 CASOS
# ------------------------------------------------------------------------------
print("[9] Leyendo desplazamientos del nudo superior...")
ProgramResult = [0, 0, 0, 0, 0, 0, 0]
[PointName1, PointName2, ret] = SapModel.FrameObj.GetPoints(FrameName2, PointName1, PointName2)

for i in range(0, 7):
    NumberResults = 0
    Obj, Elm, ACase, StepType, StepNum = [], [], [], [], []
    U1, U2, U3, R1, R2, R3 = [], [], [], [], [], []
    ObjectElm = 0
    ret = SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
    ret = SapModel.Results.Setup.SetCaseSelectedForOutput(str(i + 1))
    if i <= 3:
        [NumberResults, Obj, Elm, ACase, StepType, StepNum,
         U1, U2, U3, R1, R2, R3, ret] = SapModel.Results.JointDispl(
            PointName2, ObjectElm, NumberResults, Obj, Elm, ACase,
            StepType, StepNum, U1, U2, U3, R1, R2, R3)
        ProgramResult[i] = U3[0]
    else:
        [NumberResults, Obj, Elm, ACase, StepType, StepNum,
         U1, U2, U3, R1, R2, R3, ret] = SapModel.Results.JointDispl(
            PointName1, ObjectElm, NumberResults, Obj, Elm, ACase,
            StepType, StepNum, U1, U2, U3, R1, R2, R3)
        ProgramResult[i] = U1[0]

# ------------------------------------------------------------------------------
# 13. CERRAR ETABS
# ------------------------------------------------------------------------------
print("[10] Cerrando ETABS...")
ret = myETABSObject.ApplicationExit(False)
SapModel = None
myETABSObject = None

# ------------------------------------------------------------------------------
# 14. COMPARAR vs RESULTADOS INDEPENDIENTES (handbook)
# ------------------------------------------------------------------------------
IndResult = [-0.02639, 0.06296, 0.06296, -0.2963, 0.3125, 0.11556, 0.00651]
PercentDiff = [(ProgramResult[i] / IndResult[i]) - 1 for i in range(0, 7)]

print("\n" + "=" * 70)
print("VALIDACION  —  ETABS vs Independiente")
print("=" * 70)
print(f"{'Caso':>6} | {'ETABS (in)':>14} | {'Indep (in)':>14} | {'Diff %':>10}")
print("-" * 60)
for i in range(0, 7):
    diff_pct = PercentDiff[i] * 100
    flag = "OK" if abs(diff_pct) < 1.0 else "WARN"
    print(f"{i + 1:>6} | {ProgramResult[i]:>14.6f} | {IndResult[i]:>14.6f} | {diff_pct:>9.4f}%  [{flag}]")

print("=" * 70)
max_diff = max(abs(d) * 100 for d in PercentDiff)
if max_diff < 1.0:
    print(f"[OK] Maxima diferencia = {max_diff:.4f}% < 1%  -->  API ETABS funciona correctamente")
else:
    print(f"[WARN] Maxima diferencia = {max_diff:.4f}%  -->  revisar version o secciones")
print("=" * 70)
