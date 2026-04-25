# -*- coding: utf-8 -*-
"""
================================================================================
ETABS 22 - Edificio con UN SOLO muro modelado como MEMBRANE
================================================================================

Variante minima respecto al script 05:
  - Igual edificio 5 pisos x 4x4 vanos
  - UN solo muro (en y=0, ix=2..3, todos los pisos)
  - Modelado como SHELL-TYPE = MEMBRANE (no Shell-Thick)

Sirve para mostrar:
  1. Que un muro de membrana SOLO aporta rigidez en su plano (corte) — no
     resiste momento fuera del plano. Util como "muro divisorio" o como
     test de comportamiento puro de cortante.
  2. La diferencia de periodo respecto al script 05 (mismo muro pero
     Shell-Thick) cuantifica cuanto aporta la rigidez fuera-de-plano.

Asignamos el muro al pier "P1".

Comparativa esperada vs script 05:
  - T2 (modo X, controlado por el muro): el muro membrana es ~equivalente
    al shell-thick para corte en plano, asi que T2 deberia ser parecido.
  - T3 (torsion): puede subir un poco (membrana sola tiene menos rigidez
    rotacional alrededor del eje vertical).
  - T1 (modo Y, perpendicular al muro): casi sin cambio.
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
    f"06_un_muro_membrana_{datetime.datetime.now():%Y%m%d_%H%M%S}.log")
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
APIPath = os.path.join(SCRIPT_DIR, "modelos")
os.makedirs(APIPath, exist_ok=True)
ModelPath = os.path.join(APIPath, "edificio_5p_4x4_un_muro_membrana.EDB")

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
t_muro = 0.25

kN_m_C = 6
SHELL_TYPE_MEMBRANE = 1
SHELL_TYPE_SHELLTHIN = 2

log("=" * 70)
log("ETABS 22 - Edificio con UN solo MURO MEMBRANE")
log("=" * 70)
log(f"  {n_vanos+1}x{n_vanos+1} = {(n_vanos+1)**2} nudos x {n_pisos} pisos")
log(f"  Muro: 1 solo, en y=0, ix=2..3, espesor {t_muro*100:.0f} cm, MEMBRANE")
log(f"  Pier: P1 (todos los paneles del muro)")
log(f"  LOG: {LOG_FILE}")


# 1. ETABS
log_step(1, "Helper + Lanzar ETABS")
helper = comtypes.client.CreateObject("ETABSv1.Helper")
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
etabs_obj = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
etabs_obj.ApplicationStart()
SapModel = etabs_obj.SapModel
SapModel.InitializeNewModel(kN_m_C)
SapModel.File.NewBlank()
SapModel.SetPresentUnits(kN_m_C)
log("ETABS iniciado")


# 2. Material y secciones
log_step(2, "Material + secciones + LOSA15 ShellThin + MURO25_MEM Membrane")
SapModel.PropMaterial.SetMaterial("C21", 2)
SapModel.PropMaterial.SetMPIsotropic("C21", E_conc, nu, 1e-5)
SapModel.PropFrame.SetRectangle("COL50", "C21", h_col, b_col)
SapModel.PropFrame.SetRectangle("VIG3050", "C21", h_vig, b_vig)
SapModel.PropArea.SetSlab("LOSA15", 0, SHELL_TYPE_SHELLTHIN, "C21", t_losa)
log("Losa LOSA15 = SHELL-THIN")

# Muro como MEMBRANE — usar SetWall con shellType = 1 (membrane)
WALL_TYPE_SPECIFIED = 1
try:
    SapModel.PropArea.SetWall("MURO25_MEM", WALL_TYPE_SPECIFIED,
                              SHELL_TYPE_MEMBRANE, "C21", t_muro)
    log("Muro MURO25_MEM = MEMBRANE (sin out-of-plane)")
except Exception as e:
    log(f"[WARN] SetWall fallo: {e}, fallback a SetSlab", "WARN")
    SapModel.PropArea.SetSlab("MURO25_MEM", 0, SHELL_TYPE_MEMBRANE, "C21", t_muro)


# 3. Nudos + apoyos
log_step(3, "Nudos + apoyos")
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


# 4. Columnas + vigas
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


# 5. Losas
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


# 6. UN SOLO MURO — membrana en y=0, ix=2..3, todos los pisos
log_step(6, "UN MURO MEMBRANE (y=0, ix=2..3, pier P1)")
n_muros = 0
for iz in range(n_pisos):
    n1 = nodo_id(2, 0, iz)
    n2 = nodo_id(3, 0, iz)
    n3 = nodo_id(3, 0, iz + 1)
    n4 = nodo_id(2, 0, iz + 1)
    pts = [n1, n2, n3, n4]
    wall_name = f"M_P1_{iz+1}"
    SapModel.AreaObj.AddByPoint(4, pts, wall_name, "MURO25_MEM")
    try:
        SapModel.AreaObj.SetPier(wall_name, "P1")
    except Exception as e:
        log(f"  [WARN] pier '{wall_name}': {e}", "WARN")
    n_muros += 1
log(f"Paneles de muro creados: {n_muros}  (todos en pier P1)")


# 7. Diafragma rigido
log_step(7, "Diafragmas rigidos")
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
log(f"Diafragmas: {n_pisos}")


# 8. Patrones + Save + Run
log_step(8, "Patrones + Save + Run")
SapModel.LoadPatterns.Add("DEAD", 1, 1.0, True)
SapModel.LoadPatterns.Add("LIVE", 3, 0.0, True)
SapModel.SetPresentUnits(kN_m_C)
SapModel.File.Save(ModelPath)
log("EDB guardado, corriendo...")
SapModel.Analyze.RunAnalysis()
log("Analisis terminado")


# 9. Resultados modales
log_step(9, "Modal")
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("Modal")

NumberResults = 0
LoadCase, StepType, StepNum = [], [], []
Period, Frequency, CircFreq, EigenValue = [], [], [], []
[NumberResults, LoadCase, StepType, StepNum, Period, Frequency,
 CircFreq, EigenValue, ret] = SapModel.Results.ModalPeriod(
    NumberResults, LoadCase, StepType, StepNum, Period, Frequency,
    CircFreq, EigenValue)

log(f"Modos: {NumberResults}")
log(f"  Modo |  T (s)   |  f (Hz)")
log("  " + "-" * 30)
for i in range(min(NumberResults, 6)):
    log(f"  {i+1:>4} | {Period[i]:>8.4f} | {Frequency[i]:>8.4f}")

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
log(f"  M | T(s)    | Ux    Uy    Uz  | Rx    Ry    Rz  | tipo dom")
log("  " + "-" * 70)
for i in range(min(nr2, 12)):
    trasl = (Ux[i] + Uy[i] + Uz[i]) * 100
    rotac = (Rx[i] + Ry[i] + Rz[i]) * 100
    tipo = "TRASL" if trasl > rotac else "ROTAC"
    dom = []
    if Ux[i] > 0.10: dom.append("Ux")
    if Uy[i] > 0.10: dom.append("Uy")
    if Rx[i] > 0.10: dom.append("Rx")
    if Ry[i] > 0.10: dom.append("Ry")
    if Rz[i] > 0.10: dom.append("Rz")
    log(f"  {i+1:>2} | {Period[i]:>7.4f} | "
        f"{Ux[i]*100:>5.1f} {Uy[i]*100:>5.1f} {Uz[i]*100:>5.1f}  | "
        f"{Rx[i]*100:>5.1f} {Ry[i]*100:>5.1f} {Rz[i]*100:>5.1f}  | {tipo} {','.join(dom)}")

last = nr2 - 1
log("")
log(f"  Acumulado: SumUx = {SumUx[last]*100:.2f}%  SumUy = {SumUy[last]*100:.2f}%  "
    f"SumRz = {SumRz[last]*100:.2f}%")


# 10. Resumen + comparativa
log("")
log("=" * 70)
log("RESUMEN — Edificio con UN solo MURO MEMBRANE (y=0, pier P1)")
log("=" * 70)
log(f"  T1 = {Period[0]:.4f} s")
log(f"  T2 = {Period[1]:.4f} s")
log(f"  T3 = {Period[2]:.4f} s")
log(f"  EDB:  {ModelPath}")
log("")
log("  Comparacion:")
log(f"    Sin muros (04 ShellThin+rigido):  T1=0.4142  T2=0.4142  T3=0.3370")
log(f"    2 muros Shell-Thick (script 05):  T1=0.4134  T2=0.1861  T3=0.1505")
log(f"    1 muro Membrane     (este, 06):   T1={Period[0]:.4f}  T2={Period[1]:.4f}  T3={Period[2]:.4f}")
log("")
log("  Diferencia 1-muro Membrane vs 2-muros Shell-Thick:")
log(f"    T1  ({Period[0]:.4f} vs 0.4134)  ratio = {Period[0]/0.4134*100:.1f}%")
log(f"    T2  ({Period[1]:.4f} vs 0.1861)  ratio = {Period[1]/0.1861*100:.1f}%")
log(f"    T3  ({Period[2]:.4f} vs 0.1505)  ratio = {Period[2]/0.1505*100:.1f}%")
log("=" * 70)
_log_fh.close()
