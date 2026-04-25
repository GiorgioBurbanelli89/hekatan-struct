# -*- coding: utf-8 -*-
"""
================================================================================
ETABS 22 - Edificio con losas SHELL-THIN + DIAFRAGMA RIGIDO (modal)
================================================================================

Mismo edificio que el script 02 (3x3 nudos x 2 pisos, vanos 5 m, H 3 m,
columnas 40x40, vigas 30x40, losa 15 cm, f'c = 21 MPa) pero esta vez:

  - Losas: ShellThin (Kirchhoff, con rigidez fuera de plano completa)
  - Diafragma RIGIDO asignado a cada piso

Sirve para comparar contra el script 02 (Membrane + flexible) y cuantificar
cuanto bajan los periodos al rigidizar el diafragma + cuanto baja la
participacion rotacional Rx/Ry parasita que aparece con membrane sola.

Salida: igual al script 02 (T1, T2, T3, participacion modal % traslacional
y rotacional, criterio NEC-SE-DS / ASCE 7-22).
================================================================================
"""

import os
import sys
import time
import datetime
import comtypes.client

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass


# ------------------------------------------------------------------------------
# LOGGING
# ------------------------------------------------------------------------------
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
LOG_DIR = os.path.join(SCRIPT_DIR, "logs")
os.makedirs(LOG_DIR, exist_ok=True)
LOG_FILE = os.path.join(LOG_DIR,
    f"03_edificio_shellthin_{datetime.datetime.now():%Y%m%d_%H%M%S}.log")
_log_fh = open(LOG_FILE, "w", encoding="utf-8")
_t0 = time.time()


def log(msg, level="INFO"):
    elapsed = time.time() - _t0
    ts = datetime.datetime.now().strftime("%H:%M:%S")
    line = f"[{ts} | +{elapsed:6.1f}s | {level:>4}] {msg}"
    print(line, flush=True)
    _log_fh.write(line + "\n")
    _log_fh.flush()


def log_step(n, descripcion):
    log("")
    log("-" * 60)
    log(f"PASO {n} — {descripcion}")
    log("-" * 60)


# ------------------------------------------------------------------------------
# CONFIG
# ------------------------------------------------------------------------------
APIPath = os.path.join(SCRIPT_DIR, "modelos")
os.makedirs(APIPath, exist_ok=True)
ModelPath = os.path.join(APIPath, "edificio_shellthin_rigido.EDB")

# Geometria
L_vano = 5.0
n_vanos = 2
H_piso = 3.0
n_pisos = 2

# Materiales
fc_MPa = 21.0
fc = fc_MPa * 1000.0
E_MPa = 4700.0 * (fc_MPa) ** 0.5
E_conc = E_MPa * 1000.0
nu = 0.2

# Secciones
b_col, h_col = 0.40, 0.40
b_vig, h_vig = 0.30, 0.40
t_losa = 0.15

log("=" * 60)
log("ETABS 22 - Edificio SHELLTHIN + DIAFRAGMA RIGIDO")
log("=" * 60)
log(f"  {n_vanos+1}x{n_vanos+1} = {(n_vanos+1)**2} nudos/piso x {n_pisos} pisos")
log(f"  Vano = {L_vano} m  |  H piso = {H_piso} m")
log(f"  Columnas {b_col*100:.0f}x{h_col*100:.0f} | Vigas {b_vig*100:.0f}x{h_vig*100:.0f} | Losa {t_losa*100:.0f} cm")
log(f"  Material: f'c = {fc_MPa:.0f} MPa  E = {E_MPa:.0f} MPa")
log(f"  LOG ACTIVO: {LOG_FILE}")


# ------------------------------------------------------------------------------
# 1. HELPER COM
# ------------------------------------------------------------------------------
log_step(1, "Crear helper COM")
helper = comtypes.client.CreateObject("ETABSv1.Helper")
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
log("Helper OK")

log_step(2, "Lanzar ETABS")
myETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
myETABSObject.ApplicationStart()
log("ETABS iniciado")

log_step(3, "InitializeNewModel(kN_m_C) + NewBlank")
SapModel = myETABSObject.SapModel
kN_m_C = 6
SapModel.InitializeNewModel(kN_m_C)
ret = SapModel.File.NewBlank()
ret = SapModel.SetPresentUnits(kN_m_C)
log(f"SapModel listo en kN_m_C")


# ------------------------------------------------------------------------------
# 2. MATERIAL Y SECCIONES
# ------------------------------------------------------------------------------
log_step(4, "Material C21 + secciones COL40 / VIG3040 / LOSA15 (ShellThin)")
MATERIAL_CONCRETE = 2
ret = SapModel.PropMaterial.SetMaterial("C21", MATERIAL_CONCRETE)
ret = SapModel.PropMaterial.SetMPIsotropic("C21", E_conc, nu, 1e-5)
log(f"Material C21 OK (E = {E_conc:.0f} kN/m^2)")

ret = SapModel.PropFrame.SetRectangle("COL40", "C21", h_col, b_col)
ret = SapModel.PropFrame.SetRectangle("VIG3040", "C21", h_vig, b_vig)
log("Secciones frame OK")

# DIFERENCIA CLAVE vs script 02:
#   ShellType:  1 = Membrane    (script 02)
#               2 = ShellThin   (este script — Kirchhoff con out-of-plane)
SLAB_TYPE_SLAB = 0
SHELL_TYPE_SHELLTHIN = 2
ret = SapModel.PropArea.SetSlab("LOSA15", SLAB_TYPE_SLAB,
                                SHELL_TYPE_SHELLTHIN, "C21", t_losa)
log("Losa LOSA15 = SHELL-THIN (Kirchhoff, con out-of-plane) OK")


# ------------------------------------------------------------------------------
# 3. NUDOS
# ------------------------------------------------------------------------------
log_step(5, f"Generar nudos {(n_vanos+1)**2 * (n_pisos+1)} totales")
def nodo_id(ix, iy, iz):
    return f"N_{ix}_{iy}_{iz}"

n_nodos = 0
for iz in range(n_pisos + 1):
    z = iz * H_piso
    for iy in range(n_vanos + 1):
        for ix in range(n_vanos + 1):
            x = ix * L_vano
            y = iy * L_vano
            ret = SapModel.PointObj.AddCartesian(x, y, z, "", nodo_id(ix, iy, iz))
            n_nodos += 1
log(f"Nudos creados: {n_nodos}")

log_step(6, "Apoyos empotrados en base")
emp = [True, True, True, True, True, True]
for iy in range(n_vanos + 1):
    for ix in range(n_vanos + 1):
        ret = SapModel.PointObj.SetRestraint(nodo_id(ix, iy, 0), emp)
log("Apoyos OK")


# ------------------------------------------------------------------------------
# 4. COLUMNAS Y VIGAS
# ------------------------------------------------------------------------------
log_step(7, "Columnas")
n_cols = 0
for iz in range(n_pisos):
    for iy in range(n_vanos + 1):
        for ix in range(n_vanos + 1):
            n_inf = nodo_id(ix, iy, iz)
            n_sup = nodo_id(ix, iy, iz + 1)
            ret = SapModel.FrameObj.AddByPoint(n_inf, n_sup, "", "COL40",
                                               f"C_{ix}_{iy}_{iz}")
            n_cols += 1
log(f"Columnas: {n_cols}")

log_step(8, "Vigas X y Y")
n_vigs = 0
for iz in range(1, n_pisos + 1):
    for iy in range(n_vanos + 1):
        for ix in range(n_vanos):
            n1 = nodo_id(ix, iy, iz)
            n2 = nodo_id(ix + 1, iy, iz)
            ret = SapModel.FrameObj.AddByPoint(n1, n2, "", "VIG3040",
                                               f"VX_{ix}_{iy}_{iz}")
            n_vigs += 1
    for iy in range(n_vanos):
        for ix in range(n_vanos + 1):
            n1 = nodo_id(ix, iy, iz)
            n2 = nodo_id(ix, iy + 1, iz)
            ret = SapModel.FrameObj.AddByPoint(n1, n2, "", "VIG3040",
                                               f"VY_{ix}_{iy}_{iz}")
            n_vigs += 1
log(f"Vigas: {n_vigs}")


# ------------------------------------------------------------------------------
# 5. LOSAS SHELL-THIN
# ------------------------------------------------------------------------------
log_step(9, "Losas Shell-Thin (1 area por panel)")
# Guardar nombres de area por piso para asignar diafragma despues
areas_por_piso = {iz: [] for iz in range(1, n_pisos + 1)}
n_areas = 0
for iz in range(1, n_pisos + 1):
    for iy in range(n_vanos):
        for ix in range(n_vanos):
            pts = [
                nodo_id(ix,     iy,     iz),
                nodo_id(ix + 1, iy,     iz),
                nodo_id(ix + 1, iy + 1, iz),
                nodo_id(ix,     iy + 1, iz),
            ]
            area_name = f"L_{ix}_{iy}_{iz}"
            res = SapModel.AreaObj.AddByPoint(4, pts, area_name, "LOSA15")
            ret = res[-1] if isinstance(res, tuple) else res
            areas_por_piso[iz].append(area_name)
            n_areas += 1
log(f"Paneles SHELL-THIN: {n_areas}")


# ------------------------------------------------------------------------------
# 6. DIAFRAGMA RIGIDO POR PISO
# ------------------------------------------------------------------------------
log_step(10, "Asignar DIAFRAGMA RIGIDO a cada piso")
# Definir diafragmas por nombre. SetDiaphragm(name, IsRigid)
n_diafs = 0
for iz in range(1, n_pisos + 1):
    diaf_name = f"D_PISO{iz}"
    try:
        # 1 = rigido. Algunas versiones tienen otro signature.
        ret = SapModel.Diaphragm.SetDiaphragm(diaf_name, True)
        log(f"  Diafragma '{diaf_name}' definido (rigido=True)")
    except Exception as e:
        log(f"  [WARN] No se pudo crear diafragma {diaf_name}: {e}", "WARN")
        continue

    # Asignar el diafragma a TODOS los nudos del piso iz
    n_pts_asignados = 0
    for iy in range(n_vanos + 1):
        for ix in range(n_vanos + 1):
            try:
                # SetDiaphragm(Name, DiaphragmOption[, DiaphragmName])
                # DiaphragmOption: 1 = Disconnect, 2 = FromShellObject,
                # 3 = DefinedDiaphragm
                ret = SapModel.PointObj.SetDiaphragm(
                    nodo_id(ix, iy, iz), 3, diaf_name)
                n_pts_asignados += 1
            except Exception:
                pass
    log(f"  Nudos asignados a {diaf_name}: {n_pts_asignados}")
    n_diafs += 1
log(f"Diafragmas rigidos creados: {n_diafs}")


# ------------------------------------------------------------------------------
# 7. PATRONES DE CARGA
# ------------------------------------------------------------------------------
log_step(11, "Patrones DEAD/LIVE + Mass Source")
ret = SapModel.LoadPatterns.Add("DEAD", 1, 1.0, True)
ret = SapModel.LoadPatterns.Add("LIVE", 3, 0.0, True)
log("Patrones OK")

# Mass Source default ya toma el peso propio
log("Mass Source: usando default ETABS (peso propio del DEAD)", "WARN")


# ------------------------------------------------------------------------------
# 8. GUARDAR Y CORRER
# ------------------------------------------------------------------------------
log_step(12, f"Guardar EDB: {os.path.basename(ModelPath)}")
ret = SapModel.SetPresentUnits(kN_m_C)
ret = SapModel.File.Save(ModelPath)
log("EDB guardado en kN-m-C")

log_step(13, "RunAnalysis")
ret = SapModel.Analyze.RunAnalysis()
log("Analisis terminado")


# ------------------------------------------------------------------------------
# 9. LEER MODOS
# ------------------------------------------------------------------------------
log_step(14, "Periodos modales")
ret = SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
ret = SapModel.Results.Setup.SetCaseSelectedForOutput("Modal")

NumberResults = 0
LoadCase, StepType, StepNum = [], [], []
Period, Frequency, CircFreq, EigenValue = [], [], [], []
[NumberResults, LoadCase, StepType, StepNum, Period, Frequency,
 CircFreq, EigenValue, ret] = SapModel.Results.ModalPeriod(
    NumberResults, LoadCase, StepType, StepNum, Period, Frequency,
    CircFreq, EigenValue)

log(f"NumberResults = {NumberResults}")
log(f"  {'Modo':>4} | {'T (s)':>10} | {'f (Hz)':>10} | {'omega (rad/s)':>14}")
log("  " + "-" * 50)
for i in range(min(NumberResults, 6)):
    log(f"  {i+1:>4} | {Period[i]:>10.4f} | {Frequency[i]:>10.4f} | {CircFreq[i]:>14.4f}")


# ------------------------------------------------------------------------------
# 10. PARTICIPACION MODAL DE MASA
# ------------------------------------------------------------------------------
log_step(15, "Participacion modal de masa (T+R desglosado)")
NumberResults = 0
LoadCase, StepType, StepNum, Period = [], [], [], []
Ux, Uy, Uz = [], [], []
SumUx, SumUy, SumUz = [], [], []
Rx, Ry, Rz = [], [], []
SumRx, SumRy, SumRz = [], [], []

[NumberResults, LoadCase, StepType, StepNum, Period,
 Ux, Uy, Uz, SumUx, SumUy, SumUz,
 Rx, Ry, Rz, SumRx, SumRy, SumRz, ret] = \
    SapModel.Results.ModalParticipatingMassRatios(
        NumberResults, LoadCase, StepType, StepNum, Period,
        Ux, Uy, Uz, SumUx, SumUy, SumUz,
        Rx, Ry, Rz, SumRx, SumRy, SumRz)

log("  Por modo — participacion individual (%)")
log(f"  {'M':>3} | {'T(s)':>7} | {'Ux':>6} {'Uy':>6} {'Uz':>6} | {'Rx':>6} {'Ry':>6} {'Rz':>6} | "
    f"{'Trasl':>6} {'Rotac':>6} | dominante")
log("  " + "-" * 90)
for i in range(min(NumberResults, 12)):
    trasl = (Ux[i] + Uy[i] + Uz[i]) * 100
    rotac = (Rx[i] + Ry[i] + Rz[i]) * 100
    tipo = "TRASL" if trasl > rotac else "ROTAC"
    dom = []
    if Ux[i] > 0.10: dom.append("Ux")
    if Uy[i] > 0.10: dom.append("Uy")
    if Uz[i] > 0.10: dom.append("Uz")
    if Rx[i] > 0.10: dom.append("Rx")
    if Ry[i] > 0.10: dom.append("Ry")
    if Rz[i] > 0.10: dom.append("Rz")
    log(f"  {i+1:>3} | {Period[i]:>7.4f} | "
        f"{Ux[i]*100:>6.2f} {Uy[i]*100:>6.2f} {Uz[i]*100:>6.2f} | "
        f"{Rx[i]*100:>6.2f} {Ry[i]*100:>6.2f} {Rz[i]*100:>6.2f} | "
        f"{trasl:>6.2f} {rotac:>6.2f} | {tipo} {','.join(dom)}")

last = NumberResults - 1
log("")
log("  Acumulado al modo final (% de masa total capturada):")
log(f"    Traslacional   Ux  = {SumUx[last]*100:6.2f}%   "
    f"Uy = {SumUy[last]*100:6.2f}%   Uz = {SumUz[last]*100:6.2f}%")
log(f"    Rotacional     Rx  = {SumRx[last]*100:6.2f}%   "
    f"Ry = {SumRy[last]*100:6.2f}%   Rz = {SumRz[last]*100:6.2f}%")

n_trasl = sum(1 for i in range(NumberResults)
              if (Ux[i] + Uy[i] + Uz[i]) > (Rx[i] + Ry[i] + Rz[i]))
n_rotac = NumberResults - n_trasl
log(f"    Conteo:  {n_trasl} modos TRASL  +  {n_rotac} modos ROTAC  "
    f"(de {NumberResults} totales)")

log("")
log("  Criterio NEC-SE-DS / ASCE 7-22  §12.9  (>= 90% por direccion):")
for name, val in [("Ux", SumUx[last]*100), ("Uy", SumUy[last]*100), ("Rz", SumRz[last]*100)]:
    status = "OK" if val >= 90.0 else "FALTA"
    log(f"    Sum{name} = {val:6.2f}%   [{status}]")


# ------------------------------------------------------------------------------
# 11. RESUMEN
# ------------------------------------------------------------------------------
log("")
log("=" * 60)
log("RESUMEN — Edificio SHELLTHIN + DIAFRAGMA RIGIDO")
log("=" * 60)
T1 = Period[0] if NumberResults >= 1 else 0
T2 = Period[1] if NumberResults >= 2 else 0
T3 = Period[2] if NumberResults >= 3 else 0
log(f"  T1 = {T1:.4f} s")
log(f"  T2 = {T2:.4f} s")
log(f"  T3 = {T3:.4f} s")
log(f"  EDB:  {ModelPath}")
log(f"  LOG:  {LOG_FILE}")

# Comparativa contra el script 02 (si existe el log)
log("")
log("  COMPARATIVA esperada contra script 02 (Membrane + flexible):")
log("    - T1, T2 algo MAS CORTOS (mas rigido) con shell + diafragma rigido")
log("    - Rx, Ry parasitas casi cero (las absorbe el diafragma rigido)")
log("    - SumUx/Uy alcanzan 100% en menos modos")
log("=" * 60)
_log_fh.close()
