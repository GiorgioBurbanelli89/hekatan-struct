# -*- coding: utf-8 -*-
"""
================================================================================
ETABS 22 - Edificio con losas MEMBRANE + diafragma FLEXIBLE (modal)
================================================================================

Edificio 2 vanos x 2 vanos x 2 pisos:
  - Vanos:    5 m
  - Altura:   3 m por piso
  - Columnas: 40 x 40 cm  (concreto f'c = 21 MPa)
  - Vigas:    30 x 40 cm
  - Losas:    15 cm  -- Shell type = MEMBRANE  (sin rigidez fuera de plano)
  - Diafragma: NO se asigna diafragma rigido -> el comportamiento queda
              gobernado por la rigidez en el plano de la losa membrana
              (equivalente a "Semi-Rigid" / flexible en terminologia CSI).

Comparativa esperada (vs el mismo modelo con shell thin/rigido):
  - Periodos T1, T2 algo MAS LARGOS (mas flexible) cuando se usa Membrane
  - Tercer modo (torsion) mas afectado todavia -- diferencias del orden
    de +5% a +12% reportadas en literatura de validacion CSI.

Salida: imprime T1, T2, T3, frecuencias y participacion modal.
Guarda: edificio_membrane_flex.EDB en /modelos/.
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
# LOGGING — escribe a stdout Y a un archivo .log con timestamp + flush
# ------------------------------------------------------------------------------
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
LOG_DIR = os.path.join(SCRIPT_DIR, "logs")
os.makedirs(LOG_DIR, exist_ok=True)
LOG_FILE = os.path.join(LOG_DIR,
    f"02_edificio_membrana_{datetime.datetime.now():%Y%m%d_%H%M%S}.log")
_log_fh = open(LOG_FILE, "w", encoding="utf-8")
_t0 = time.time()


def log(msg, level="INFO"):
    """Escribe a stdout + log file con timestamp relativo y flush inmediato."""
    elapsed = time.time() - _t0
    ts = datetime.datetime.now().strftime("%H:%M:%S")
    line = f"[{ts} | +{elapsed:6.1f}s | {level:>4}] {msg}"
    print(line, flush=True)
    _log_fh.write(line + "\n")
    _log_fh.flush()


def log_step(n, descripcion):
    """Marca el inicio de una etapa numerada (mas visible en el log)."""
    log("")
    log("-" * 60)
    log(f"PASO {n} — {descripcion}")
    log("-" * 60)


# ------------------------------------------------------------------------------
# CONFIGURACION
# ------------------------------------------------------------------------------
APIPath = os.path.join(SCRIPT_DIR, "modelos")
os.makedirs(APIPath, exist_ok=True)
ModelPath = os.path.join(APIPath, "edificio_membrane_flex.EDB")

# Geometria
L_vano = 5.0          # m (vano X = vano Y)
n_vanos = 2           # 2x2 = 9 nudos por piso
H_piso = 3.0          # m
n_pisos = 2

# Materiales
fc_MPa = 21.0                                  # f'c = 21 MPa
fc = fc_MPa * 1000.0                            # kN/m^2
E_MPa = 4700.0 * (fc_MPa) ** 0.5                # ACI 318:  E = 4700·sqrt(f'c)  [MPa]
E_conc = E_MPa * 1000.0                         # kN/m^2  (~21.5 millones)
nu = 0.2

# Secciones
b_col, h_col = 0.40, 0.40
b_vig, h_vig = 0.30, 0.40
t_losa = 0.15

log("=" * 60)
log("ETABS 22 - Edificio MEMBRANE + diafragma FLEXIBLE")
log("=" * 60)
log(f"  {n_vanos+1}x{n_vanos+1} = {(n_vanos+1)**2} nudos/piso x {n_pisos} pisos")
log(f"  Vano = {L_vano} m  |  H piso = {H_piso} m")
log(f"  Columnas {b_col*100:.0f}x{h_col*100:.0f} | Vigas {b_vig*100:.0f}x{h_vig*100:.0f} | Losa {t_losa*100:.0f} cm")
log(f"  Material: f'c = {fc/1000:.0f} MPa  E = {E_conc/1000:.0f} MPa")
log(f"  LOG ACTIVO: {LOG_FILE}")


# ------------------------------------------------------------------------------
# 1. LANZAR ETABS
# ------------------------------------------------------------------------------
log_step(1, "Crear helper COM")
helper = comtypes.client.CreateObject("ETABSv1.Helper")
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
log("Helper OK")

log_step(2, "Lanzar ETABS (CreateObjectProgID + ApplicationStart)")
log("CreateObjectProgID...")
myETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
log("ApplicationStart() ... esto puede tardar ~10-15s")
myETABSObject.ApplicationStart()
log("ETABS iniciado")

log_step(3, "Inicializar SapModel + NewBlank + unidades kN/m/C")
SapModel = myETABSObject.SapModel
# CRITICO: pasar el codigo de unidades a InitializeNewModel.
# Sin argumento, ETABS arranca en kip_in_F por default y el .EDB
# guarda esa preferencia, asi que la GUI abre el modelo en pies/pulgadas
# aunque la geometria este creada con valores en metros.
#   1 = lb_in_F   2 = lb_ft_F   3 = kip_in_F   4 = kip_ft_F
#   5 = kN_mm_C   6 = kN_m_C    7 = kgf_mm_C   8 = kgf_m_C
#   9 = N_mm_C   10 = N_m_C    11 = Ton_mm_C  12 = Ton_m_C
kN_m_C = 6
SapModel.InitializeNewModel(kN_m_C)
ret = SapModel.File.NewBlank()
ret = SapModel.SetPresentUnits(kN_m_C)
# Tambien fijar las unidades como las "Display Units" del modelo para
# que cuando el usuario abra el .EDB en la GUI vea m / kN / C
try:
    SapModel.SetPresentUnits(kN_m_C)
except Exception:
    pass
log(f"SapModel listo en kN_m_C (codigo {kN_m_C})")


# ------------------------------------------------------------------------------
# 2. MATERIAL Y SECCIONES
# ------------------------------------------------------------------------------
log_step(4, "Material C21 + secciones COL40 / VIG3040 / LOSA15 (membrane)")
MATERIAL_CONCRETE = 2
ret = SapModel.PropMaterial.SetMaterial("C21", MATERIAL_CONCRETE)
ret = SapModel.PropMaterial.SetMPIsotropic("C21", E_conc, nu, 1e-5)
log(f"Material C21 OK (E = {E_conc:.0f} kN/m^2)")

ret = SapModel.PropFrame.SetRectangle("COL40", "C21", h_col, b_col)
ret = SapModel.PropFrame.SetRectangle("VIG3040", "C21", h_vig, b_vig)
log("Secciones frame OK")

SLAB_TYPE_SLAB = 0
SHELL_TYPE_MEMBRANE = 1
ret = SapModel.PropArea.SetSlab("LOSA15", SLAB_TYPE_SLAB,
                                SHELL_TYPE_MEMBRANE, "C21", t_losa)
log("Losa LOSA15 = MEMBRANE (sin out-of-plane) OK")


# ------------------------------------------------------------------------------
# 3. NUDOS DE LA MALLA
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

log_step(6, f"Apoyos empotrados en base ({(n_vanos+1)**2} nudos)")
emp = [True, True, True, True, True, True]
for iy in range(n_vanos + 1):
    for ix in range(n_vanos + 1):
        ret = SapModel.PointObj.SetRestraint(nodo_id(ix, iy, 0), emp)
log("Apoyos OK")


# ------------------------------------------------------------------------------
# 4. COLUMNAS Y VIGAS
# ------------------------------------------------------------------------------
log_step(7, "Columnas (frame elements)")
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

log_step(8, "Vigas X y Y por nivel")
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
# 5. LOSAS (MEMBRANE)
# ------------------------------------------------------------------------------
log_step(9, "Losas Membrane (1 area por panel)")
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
            # AreaObj.AddByPoint(NumberPoints, Point[ref], Name[ref], PropName[, UserName, CSys])
            # comtypes devuelve una tupla de longitud variable. Tomamos solo
            # el ultimo valor (ret) defensivamente — si hay >=2 elementos OK,
            # si hay 1 lo tratamos como ret directo.
            res = SapModel.AreaObj.AddByPoint(4, pts, area_name, "LOSA15")
            ret = res[-1] if isinstance(res, tuple) else res
            n_areas += 1
log(f"Paneles MEMBRANE: {n_areas}")


# ------------------------------------------------------------------------------
# 6. DIAFRAGMA FLEXIBLE
# ------------------------------------------------------------------------------
log_step(10, "Diafragma: NO se asigna rigido -> queda flexible (membrana controla)")


# ------------------------------------------------------------------------------
# 7. PATRONES DE CARGA + MASS SOURCE
# ------------------------------------------------------------------------------
log_step(11, "Patrones DEAD/LIVE + Mass Source")
ret = SapModel.LoadPatterns.Add("DEAD", 1, 1.0, True)
ret = SapModel.LoadPatterns.Add("LIVE", 3, 0.0, True)
log("Patrones OK")

# Mass Source: el default de ETABS toma masa del peso propio cuando DEAD
# tiene self-weight = 1.0 (que es nuestro caso). La API SetMassSource_1
# tiene firmas distintas entre v19 / v22 y a veces el SafeArray de strings
# falla en comtypes (TypeError: object of type 'int' has no len()). Hacemos
# best-effort: si falla, seguimos con el default que es correcto.
mass_set = False
for path_attempt in [
    lambda: SapModel.SourceMass.SetMassSource_1(
        "MsSrc1", True, True, True, 1, ["DEAD"], [1.0]),
    lambda: SapModel.PropMaterial.SetMassSource_1(
        "MsSrc1", True, True, True, 1, ["DEAD"], [1.0]),
    lambda: SapModel.SourceMass.SetMassSource(
        True, True, True, 1, ["DEAD"], [1.0]),
]:
    try:
        ret = path_attempt()
        mass_set = True
        log("Mass Source = 1.0 DEAD")
        break
    except Exception as e:
        continue
if not mass_set:
    log("Mass Source: usando default ETABS (masa del peso propio)", "WARN")


# ------------------------------------------------------------------------------
# 8. CASO MODAL — 12 modos
# ------------------------------------------------------------------------------
log_step(12, "Caso modal eigen (12 modos)")
N_MODES = 12
try:
    ret = SapModel.LoadCases.ModalEigen.SetNumberModes("Modal", N_MODES, 1)
    log(f"N_MODES = {N_MODES}")
except Exception as e:
    log(f"No se pudo setear N_MODES: {e}", "WARN")


# ------------------------------------------------------------------------------
# 9. GUARDAR Y CORRER
# ------------------------------------------------------------------------------
log_step(13, f"Guardar EDB: {os.path.basename(ModelPath)}")
# Forzar las unidades de display a kN-m-C JUSTO ANTES de Save.
# Asi el archivo persiste con esa preferencia y al abrir manualmente
# en la GUI se ve en metros (no en ft).
ret = SapModel.SetPresentUnits(kN_m_C)
ret = SapModel.File.Save(ModelPath)
log(f"EDB guardado en unidades kN-m-C: {ModelPath}")

log_step(14, "RunAnalysis (esto puede tardar 10-30 s)")
ret = SapModel.Analyze.RunAnalysis()
log("Analisis terminado")


# ------------------------------------------------------------------------------
# 10. LEER MODOS
# ------------------------------------------------------------------------------
log_step(15, "Leer periodos modales")
ret = SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
ret = SapModel.Results.Setup.SetCaseSelectedForOutput("Modal")

# ModalPeriod(NumberResults, LoadCase, StepType, StepNum, Period, Frequency,
#             CircFreq, EigenValue)
NumberResults = 0
LoadCase = []
StepType = []
StepNum = []
Period = []
Frequency = []
CircFreq = []
EigenValue = []

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
# 11. PARTICIPACION MODAL DE MASA
# ------------------------------------------------------------------------------
log_step(16, "Participacion modal de masa")
NumberResults = 0
LoadCase = []
StepType = []
StepNum = []
Period = []
Ux = []; Uy = []; Uz = []
SumUx = []; SumUy = []; SumUz = []
Rx = []; Ry = []; Rz = []
SumRx = []; SumRy = []; SumRz = []

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
    # Clasificar el modo: TRASL si Trasl > Rotac, ROTAC al reves
    tipo = "TRASL" if trasl > rotac else "ROTAC"
    # Etiqueta de direccion dominante (>10%)
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

# --- Resumen acumulado al final de los modos extraidos -------------------
last = NumberResults - 1
log("")
log("  Acumulado al modo final (% de masa total capturada):")
log(f"    Traslacional   Ux  = {SumUx[last]*100:6.2f}%   "
    f"Uy = {SumUy[last]*100:6.2f}%   Uz = {SumUz[last]*100:6.2f}%")
log(f"    Rotacional     Rx  = {SumRx[last]*100:6.2f}%   "
    f"Ry = {SumRy[last]*100:6.2f}%   Rz = {SumRz[last]*100:6.2f}%")
log(f"    TOTAL traslac. SumU= {(SumUx[last]+SumUy[last]+SumUz[last])*100:6.2f}%   "
    f"(suma Ux+Uy+Uz)")
log(f"    TOTAL rotac.   SumR= {(SumRx[last]+SumRy[last]+SumRz[last])*100:6.2f}%   "
    f"(suma Rx+Ry+Rz)")

# Conteo de modos por tipo
n_trasl = sum(1 for i in range(NumberResults)
              if (Ux[i] + Uy[i] + Uz[i]) > (Rx[i] + Ry[i] + Rz[i]))
n_rotac = NumberResults - n_trasl
log(f"    Conteo:  {n_trasl} modos TRASL  +  {n_rotac} modos ROTAC  "
    f"(de {NumberResults} totales)")

# Verificacion contra criterio NEC/ASCE 7-22 (>= 90% por direccion)
log("")
log("  Criterio NEC-SE-DS / ASCE 7-22  §12.9  (>= 90% por direccion):")
checks = [
    ("Ux", SumUx[last] * 100),
    ("Uy", SumUy[last] * 100),
    ("Rz", SumRz[last] * 100),
]
for name, val in checks:
    status = "OK" if val >= 90.0 else "FALTA"
    log(f"    Sum{name} = {val:6.2f}%   [{status}]")


# ------------------------------------------------------------------------------
# 12. RESUMEN
# ------------------------------------------------------------------------------
log("")
log("=" * 60)
log("RESUMEN — Edificio MEMBRANE + diafragma flexible")
log("=" * 60)
T1 = Period[0] if NumberResults >= 1 else 0
T2 = Period[1] if NumberResults >= 2 else 0
T3 = Period[2] if NumberResults >= 3 else 0
log(f"  T1 = {T1:.4f} s   (modo dominante traslacional)")
log(f"  T2 = {T2:.4f} s   (modo ortogonal)")
log(f"  T3 = {T3:.4f} s   (modo torsional / acoplado)")
log(f"  EDB:  {ModelPath}")
log(f"  LOG:  {LOG_FILE}")
log("ETABS queda abierto. Cerrar manualmente.")
log("=" * 60)
_log_fh.close()
