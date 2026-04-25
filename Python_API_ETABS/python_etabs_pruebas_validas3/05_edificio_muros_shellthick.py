# -*- coding: utf-8 -*-
"""
================================================================================
ETABS 22 - Edificio con MUROS DE CORTE Shell-Thick (modal)
================================================================================

Mismo edificio del script 04 (5 pisos x 4x4 vanos, planta 20x20 m) pero con
DOS MUROS DE CORTE en perimetro Y, modelados como areas Shell-Thick:

  - Muros: 25 cm de espesor, en y=0 y y=20 m, ancho del vano completo (ix=2)
    de cada piso (4 paneles por muro x 5 pisos x 2 muros = 40 paneles).
  - Asignados a piers P1 y P2 (para diseno y reporte de fuerzas).
  - Shell type = SHELL-THICK (Mindlin, con corte transversal real, recomendado
    para muros segun manuales CSI).
  - Diafragma rigido por piso (combina con membrana de losa shell-thin).

Comparativa esperada vs script 04:
  - T1 / T2 fuertemente ASIMETRICOS: el muro en Y baja T_Y mucho mas que T_X.
  - Edificio mucho mas rigido: T1 reducido ~2-3x respecto a solo frames.
  - El modo torsional puede subir o bajar dependiendo de la simetria de los muros.

Salida: T1...T6 + participacion modal + criterio NEC-SE-DS.
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


SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
LOG_DIR = os.path.join(SCRIPT_DIR, "logs")
os.makedirs(LOG_DIR, exist_ok=True)
LOG_FILE = os.path.join(LOG_DIR,
    f"05_muros_shellthick_{datetime.datetime.now():%Y%m%d_%H%M%S}.log")
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
ModelPath = os.path.join(APIPath, "edificio_5p_4x4_muros_shellthick.EDB")

L_vano = 5.0
n_vanos = 4
H_piso = 3.0
n_pisos = 5

fc_MPa = 21.0
E_MPa = 4700.0 * (fc_MPa) ** 0.5
E_conc = E_MPa * 1000.0
nu = 0.2

b_col, h_col = 0.50, 0.50
b_vig, h_vig = 0.30, 0.50
t_losa = 0.15
t_muro = 0.25  # 25 cm de muro

kN_m_C = 6
SHELL_TYPE_MEMBRANE = 1
SHELL_TYPE_SHELLTHIN = 2
SHELL_TYPE_SHELLTHICK = 3

log("=" * 70)
log("ETABS 22 - Edificio con MUROS DE CORTE Shell-Thick")
log("=" * 70)
log(f"  {n_vanos+1}x{n_vanos+1} = {(n_vanos+1)**2} nudos x {n_pisos} pisos")
log(f"  Planta: {n_vanos*L_vano:.0f} x {n_vanos*L_vano:.0f} m  |  Altura: {n_pisos*H_piso:.0f} m")
log(f"  f'c = {fc_MPa:.0f} MPa, E = {E_MPa:.0f} MPa")
log(f"  Muros: 2 muros perimetrales en Y (vano central 2-3),")
log(f"         espesor = {t_muro*100:.0f} cm, Shell-Thick, asignados a piers P1/P2")
log(f"  LOG: {LOG_FILE}")


# ------------------------------------------------------------------------------
# 1. ETABS
# ------------------------------------------------------------------------------
log_step(1, "Helper + Lanzar ETABS")
helper = comtypes.client.CreateObject("ETABSv1.Helper")
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
etabs_obj = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
etabs_obj.ApplicationStart()
SapModel = etabs_obj.SapModel
SapModel.InitializeNewModel(kN_m_C)
SapModel.File.NewBlank()
SapModel.SetPresentUnits(kN_m_C)
log("ETABS iniciado en kN_m_C")


# ------------------------------------------------------------------------------
# 2. MATERIAL Y PROPIEDADES DE AREA
# ------------------------------------------------------------------------------
log_step(2, "Material C21 + secciones COL50/VIG3050 + LOSA15 (ShellThin) + MURO25 (ShellThick)")
SapModel.PropMaterial.SetMaterial("C21", 2)
SapModel.PropMaterial.SetMPIsotropic("C21", E_conc, nu, 1e-5)

SapModel.PropFrame.SetRectangle("COL50", "C21", h_col, b_col)
SapModel.PropFrame.SetRectangle("VIG3050", "C21", h_vig, b_vig)

# Losa 15 cm Shell-Thin
SapModel.PropArea.SetSlab("LOSA15", 0, SHELL_TYPE_SHELLTHIN, "C21", t_losa)
log(f"Losa LOSA15 = SHELL-THIN ({t_losa*100:.0f} cm)")

# Muro 25 cm Shell-Thick — usar SetWall en vez de SetSlab
# SetWall(name, wallPropType, shellType, matProp, thickness)
#   wallPropType: 1 = Specified
WALL_TYPE_SPECIFIED = 1
try:
    SapModel.PropArea.SetWall("MURO25", WALL_TYPE_SPECIFIED,
                              SHELL_TYPE_SHELLTHICK, "C21", t_muro)
    log(f"Muro MURO25 = SHELL-THICK ({t_muro*100:.0f} cm)")
except Exception as e:
    log(f"[WARN] SetWall fallo: {e}. Usando SetSlab como fallback", "WARN")
    SapModel.PropArea.SetSlab("MURO25", 0, SHELL_TYPE_SHELLTHICK, "C21", t_muro)


# ------------------------------------------------------------------------------
# 3. NUDOS Y APOYOS
# ------------------------------------------------------------------------------
log_step(3, f"Nudos {(n_vanos+1)**2 * (n_pisos+1)}")
def nodo_id(ix, iy, iz):
    return f"N_{ix}_{iy}_{iz}"

n_nodos = 0
for iz in range(n_pisos + 1):
    z = iz * H_piso
    for iy in range(n_vanos + 1):
        for ix in range(n_vanos + 1):
            x = ix * L_vano
            y = iy * L_vano
            SapModel.PointObj.AddCartesian(x, y, z, "", nodo_id(ix, iy, iz))
            n_nodos += 1
log(f"Nudos: {n_nodos}")

emp = [True, True, True, True, True, True]
for iy in range(n_vanos + 1):
    for ix in range(n_vanos + 1):
        SapModel.PointObj.SetRestraint(nodo_id(ix, iy, 0), emp)


# ------------------------------------------------------------------------------
# 4. COLUMNAS Y VIGAS
# ------------------------------------------------------------------------------
log_step(4, "Columnas + vigas")
n_cols = 0
for iz in range(n_pisos):
    for iy in range(n_vanos + 1):
        for ix in range(n_vanos + 1):
            SapModel.FrameObj.AddByPoint(
                nodo_id(ix, iy, iz), nodo_id(ix, iy, iz + 1),
                "", "COL50", f"C_{ix}_{iy}_{iz}")
            n_cols += 1
n_vigs = 0
for iz in range(1, n_pisos + 1):
    for iy in range(n_vanos + 1):
        for ix in range(n_vanos):
            SapModel.FrameObj.AddByPoint(
                nodo_id(ix, iy, iz), nodo_id(ix + 1, iy, iz),
                "", "VIG3050", f"VX_{ix}_{iy}_{iz}")
            n_vigs += 1
    for iy in range(n_vanos):
        for ix in range(n_vanos + 1):
            SapModel.FrameObj.AddByPoint(
                nodo_id(ix, iy, iz), nodo_id(ix, iy + 1, iz),
                "", "VIG3050", f"VY_{ix}_{iy}_{iz}")
            n_vigs += 1
log(f"Columnas: {n_cols}, Vigas: {n_vigs}")


# ------------------------------------------------------------------------------
# 5. LOSAS SHELL-THIN
# ------------------------------------------------------------------------------
log_step(5, "Losas Shell-Thin")
n_areas = 0
for iz in range(1, n_pisos + 1):
    for iy in range(n_vanos):
        for ix in range(n_vanos):
            pts = [nodo_id(ix,     iy,     iz),
                   nodo_id(ix + 1, iy,     iz),
                   nodo_id(ix + 1, iy + 1, iz),
                   nodo_id(ix,     iy + 1, iz)]
            SapModel.AreaObj.AddByPoint(4, pts, f"L_{ix}_{iy}_{iz}", "LOSA15")
            n_areas += 1
log(f"Paneles losa: {n_areas}")


# ------------------------------------------------------------------------------
# 6. MUROS DE CORTE — Shell-Thick verticales en Y=0 y Y=20m
# ------------------------------------------------------------------------------
log_step(6, "Muros de corte Shell-Thick (P1 en y=0, P2 en y=20m)")
# Cada muro ocupa el vano central iy=0 ix=2..3 (un vano de ancho 5m)
# A lo alto de cada piso. Tendremos 1 panel por piso por muro.
# Pier P1: muro en y=0  entre los nudos x=10 (ix=2) y x=15 (ix=3)
# Pier P2: muro en y=20 entre los nudos x=10 (ix=2) y x=15 (ix=3)
muros_config = [
    ("P1", 2, 3, 0,         0),         # ix1, ix2, iy_inicial, iy_final
    ("P2", 2, 3, n_vanos, n_vanos),
]

n_muros_panels = 0
for pier_name, ix1, ix2, iy_lo, iy_hi in muros_config:
    for iz in range(n_pisos):
        # Cuatro nudos del panel: dos abajo (iz) y dos arriba (iz+1)
        n1 = nodo_id(ix1, iy_lo, iz)        # abajo izq
        n2 = nodo_id(ix2, iy_lo, iz)        # abajo der
        n3 = nodo_id(ix2, iy_hi, iz + 1)    # arriba der
        n4 = nodo_id(ix1, iy_hi, iz + 1)    # arriba izq
        pts = [n1, n2, n3, n4]
        wall_name = f"M_{pier_name}_{iz+1}"
        res = SapModel.AreaObj.AddByPoint(4, pts, wall_name, "MURO25")
        n_muros_panels += 1
        # Asignar pier label
        try:
            SapModel.AreaObj.SetPier(wall_name, pier_name)
        except Exception as e:
            log(f"  [WARN] no se pudo asignar pier '{pier_name}' a {wall_name}: {e}", "WARN")
log(f"Paneles de muro creados: {n_muros_panels}  (en piers P1, P2)")


# ------------------------------------------------------------------------------
# 7. DIAFRAGMA RIGIDO POR PISO
# ------------------------------------------------------------------------------
log_step(7, "Diafragmas rigidos por piso")
for iz in range(1, n_pisos + 1):
    diaf = f"D_PISO{iz}"
    try:
        SapModel.Diaphragm.SetDiaphragm(diaf, True)
    except Exception:
        continue
    for iy in range(n_vanos + 1):
        for ix in range(n_vanos + 1):
            try:
                SapModel.PointObj.SetDiaphragm(
                    nodo_id(ix, iy, iz), 3, diaf)
            except Exception:
                pass
log(f"Diafragmas rigidos: {n_pisos}")


# ------------------------------------------------------------------------------
# 8. PATRONES + GUARDAR + CORRER
# ------------------------------------------------------------------------------
log_step(8, "Patrones + Save + Run")
SapModel.LoadPatterns.Add("DEAD", 1, 1.0, True)
SapModel.LoadPatterns.Add("LIVE", 3, 0.0, True)
SapModel.SetPresentUnits(kN_m_C)
SapModel.File.Save(ModelPath)
log("EDB guardado, corriendo...")
SapModel.Analyze.RunAnalysis()
log("Analisis terminado")


# ------------------------------------------------------------------------------
# 9. RESULTADOS MODALES
# ------------------------------------------------------------------------------
log_step(9, "Periodos + participacion")
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("Modal")

# Periodos
NumberResults = 0
LoadCase, StepType, StepNum = [], [], []
Period, Frequency, CircFreq, EigenValue = [], [], [], []
[NumberResults, LoadCase, StepType, StepNum, Period, Frequency,
 CircFreq, EigenValue, ret] = SapModel.Results.ModalPeriod(
    NumberResults, LoadCase, StepType, StepNum, Period, Frequency,
    CircFreq, EigenValue)

log(f"Modos: {NumberResults}")
log(f"  {'Modo':>4} | {'T (s)':>10} | {'f (Hz)':>10}")
log("  " + "-" * 35)
for i in range(min(NumberResults, 6)):
    log(f"  {i+1:>4} | {Period[i]:>10.4f} | {Frequency[i]:>10.4f}")

# Participacion
nr2 = 0
LC2, ST2, SN2, P2 = [], [], [], []
Ux, Uy, Uz = [], [], []
SumUx, SumUy, SumUz = [], [], []
Rx, Ry, Rz = [], [], []
SumRx, SumRy, SumRz = [], [], []
[nr2, LC2, ST2, SN2, P2,
 Ux, Uy, Uz, SumUx, SumUy, SumUz,
 Rx, Ry, Rz, SumRx, SumRy, SumRz, ret] = \
    SapModel.Results.ModalParticipatingMassRatios(
        nr2, LC2, ST2, SN2, P2,
        Ux, Uy, Uz, SumUx, SumUy, SumUz,
        Rx, Ry, Rz, SumRx, SumRy, SumRz)

log("")
log(f"  {'M':>3} | {'T(s)':>7} | {'Ux':>5} {'Uy':>5} {'Uz':>5} | {'Rx':>5} {'Ry':>5} {'Rz':>5} | tipo dom")
log("  " + "-" * 75)
for i in range(min(nr2, 12)):
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
        f"{Ux[i]*100:>5.1f} {Uy[i]*100:>5.1f} {Uz[i]*100:>5.1f} | "
        f"{Rx[i]*100:>5.1f} {Ry[i]*100:>5.1f} {Rz[i]*100:>5.1f} | {tipo} {','.join(dom)}")

last = nr2 - 1
log("")
log(f"  Acumulado: SumUx = {SumUx[last]*100:.2f}%  SumUy = {SumUy[last]*100:.2f}%  "
    f"SumRz = {SumRz[last]*100:.2f}%")


# ------------------------------------------------------------------------------
# 10. RESUMEN
# ------------------------------------------------------------------------------
log("")
log("=" * 70)
log("RESUMEN — Edificio con muros Shell-Thick (P1, P2 en Y)")
log("=" * 70)
log(f"  T1 = {Period[0]:.4f} s")
log(f"  T2 = {Period[1]:.4f} s")
log(f"  T3 = {Period[2]:.4f} s")
log(f"  EDB:  {ModelPath}")
log("")
log("  Comparacion con script 04 (sin muros, ShellThin+rigido):")
log(f"    T1 sin muros: 0.4142 s   con muros: {Period[0]:.4f} s   "
    f"ratio = {Period[0]/0.4142*100:.1f}%")
log(f"    T2 sin muros: 0.4142 s   con muros: {Period[1]:.4f} s   "
    f"ratio = {Period[1]/0.4142*100:.1f}%")
log(f"    T3 sin muros: 0.3370 s   con muros: {Period[2]:.4f} s   "
    f"ratio = {Period[2]/0.3370*100:.1f}%")
log("=" * 70)
_log_fh.close()
