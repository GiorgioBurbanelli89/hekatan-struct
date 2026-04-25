# -*- coding: utf-8 -*-
"""
================================================================================
ETABS 22 - Comparativa MEMBRANE+flexible vs SHELLTHIN+rigido (5 pisos x 4x4)
================================================================================

Edificio mas grande para amplificar la diferencia entre tipos de diafragma:
  - 4x4 vanos = 5x5 = 25 nudos/piso x 5 pisos = 125 nudos totales
  - Vanos: 5 m  (planta 20x20 m)
  - Altura: 3 m por piso (15 m total)
  - Columnas: 50x50 cm
  - Vigas:    30x50 cm
  - Losa:     15 cm
  - Material: f'c = 21 MPa

Corre el MISMO modelo dos veces:
  Caso A: ShellType = MEMBRANE  + sin diafragma rigido (flexible)
  Caso B: ShellType = SHELLTHIN + diafragma rigido por piso

Al final imprime una tabla T1/T2/T3 vs %diff entre los dos casos.
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
    f"04_comparativa_5pisos_{datetime.datetime.now():%Y%m%d_%H%M%S}.log")
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
# PARAMETROS GLOBALES
# ------------------------------------------------------------------------------
APIPath = os.path.join(SCRIPT_DIR, "modelos")
os.makedirs(APIPath, exist_ok=True)

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

kN_m_C = 6
SHELL_TYPE_MEMBRANE = 1
SHELL_TYPE_SHELLTHIN = 2


def nodo_id(ix, iy, iz):
    return f"N_{ix}_{iy}_{iz}"


# ------------------------------------------------------------------------------
# Construir el modelo + correr modal + leer resultados
# ------------------------------------------------------------------------------
def correr_caso(caso_nombre, shell_type, asignar_diafragma_rigido):
    """Construye el edificio + corre modal y devuelve dict con resultados."""
    log("")
    log("=" * 70)
    log(f"  CASO {caso_nombre}")
    log(f"    shell_type = {shell_type}  ({'MEMBRANE' if shell_type == 1 else 'SHELLTHIN'})")
    log(f"    diafragma_rigido = {asignar_diafragma_rigido}")
    log("=" * 70)

    # 1. helper + ETABS
    log_step(f"{caso_nombre}.1", "helper COM + Lanzar ETABS")
    helper = comtypes.client.CreateObject("ETABSv1.Helper")
    helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
    etabs_obj = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
    etabs_obj.ApplicationStart()
    log("ETABS iniciado")

    # 2. SapModel + unidades
    log_step(f"{caso_nombre}.2", "InitializeNewModel(kN_m_C) + NewBlank")
    SapModel = etabs_obj.SapModel
    SapModel.InitializeNewModel(kN_m_C)
    ret = SapModel.File.NewBlank()
    ret = SapModel.SetPresentUnits(kN_m_C)

    # 3. Material + secciones
    log_step(f"{caso_nombre}.3", "Material C21 + secciones")
    SapModel.PropMaterial.SetMaterial("C21", 2)
    SapModel.PropMaterial.SetMPIsotropic("C21", E_conc, nu, 1e-5)
    SapModel.PropFrame.SetRectangle("COL50", "C21", h_col, b_col)
    SapModel.PropFrame.SetRectangle("VIG3050", "C21", h_vig, b_vig)
    SapModel.PropArea.SetSlab("LOSA15", 0, shell_type, "C21", t_losa)

    # 4. Nudos
    log_step(f"{caso_nombre}.4", f"Nudos {(n_vanos+1)**2 * (n_pisos+1)} totales")
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

    # 5. Apoyos base
    emp = [True, True, True, True, True, True]
    for iy in range(n_vanos + 1):
        for ix in range(n_vanos + 1):
            SapModel.PointObj.SetRestraint(nodo_id(ix, iy, 0), emp)

    # 6. Columnas + vigas
    log_step(f"{caso_nombre}.5", "Columnas + vigas")
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
    log(f"Columnas: {n_cols}  |  Vigas: {n_vigs}")

    # 7. Losas
    log_step(f"{caso_nombre}.6", f"Losas (shell_type={shell_type})")
    n_areas = 0
    for iz in range(1, n_pisos + 1):
        for iy in range(n_vanos):
            for ix in range(n_vanos):
                pts = [nodo_id(ix,     iy,     iz),
                       nodo_id(ix + 1, iy,     iz),
                       nodo_id(ix + 1, iy + 1, iz),
                       nodo_id(ix,     iy + 1, iz)]
                res = SapModel.AreaObj.AddByPoint(4, pts, f"L_{ix}_{iy}_{iz}", "LOSA15")
                n_areas += 1
    log(f"Paneles: {n_areas}")

    # 8. Diafragma rigido (solo caso B)
    log_step(f"{caso_nombre}.7", "Diafragmas")
    if asignar_diafragma_rigido:
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
        log(f"Diafragmas rigidos creados: {n_pisos}")
    else:
        log("Sin diafragma rigido — flexible (membrana controla)")

    # 9. Patrones
    SapModel.LoadPatterns.Add("DEAD", 1, 1.0, True)
    SapModel.LoadPatterns.Add("LIVE", 3, 0.0, True)

    # 10. Save + Run
    edb_name = f"edificio_5p_4x4_{caso_nombre}.EDB"
    edb_path = os.path.join(APIPath, edb_name)
    log_step(f"{caso_nombre}.8", f"Guardar y correr ({edb_name})")
    SapModel.SetPresentUnits(kN_m_C)
    SapModel.File.Save(edb_path)
    log("EDB guardado, corriendo analisis...")
    SapModel.Analyze.RunAnalysis()
    log("Analisis terminado")

    # 11. Modal results
    log_step(f"{caso_nombre}.9", "Lectura modal")
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

    # Participacion
    Ux, Uy, Uz = [], [], []
    SumUx, SumUy, SumUz = [], [], []
    Rx, Ry, Rz = [], [], []
    SumRx, SumRy, SumRz = [], [], []
    nr2 = 0
    LC2, ST2, SN2, P2 = [], [], [], []
    [nr2, LC2, ST2, SN2, P2,
     Ux, Uy, Uz, SumUx, SumUy, SumUz,
     Rx, Ry, Rz, SumRx, SumRy, SumRz, ret] = \
        SapModel.Results.ModalParticipatingMassRatios(
            nr2, LC2, ST2, SN2, P2,
            Ux, Uy, Uz, SumUx, SumUy, SumUz,
            Rx, Ry, Rz, SumRx, SumRy, SumRz)

    # Imprimir resumen breve
    log(f"  Mod | T(s)    | Ux%   Uy%   Uz%   | Rx%   Ry%   Rz%   | tipo")
    for i in range(min(NumberResults, 6)):
        trasl = (Ux[i] + Uy[i] + Uz[i]) * 100
        rotac = (Rx[i] + Ry[i] + Rz[i]) * 100
        tipo = "TRASL" if trasl > rotac else "ROTAC"
        log(f"  {i+1:>3} | {Period[i]:>7.4f} | "
            f"{Ux[i]*100:>5.1f} {Uy[i]*100:>5.1f} {Uz[i]*100:>5.1f} | "
            f"{Rx[i]*100:>5.1f} {Ry[i]*100:>5.1f} {Rz[i]*100:>5.1f} | {tipo}")

    last = NumberResults - 1
    log(f"  Acumulado: SumUx={SumUx[last]*100:.2f}%  SumUy={SumUy[last]*100:.2f}%  "
        f"SumRz={SumRz[last]*100:.2f}%")

    # Cerrar ETABS (libera el COM para el siguiente caso)
    log("Cerrando ETABS...")
    try:
        etabs_obj.ApplicationExit(False)
    except Exception:
        pass
    SapModel = None
    etabs_obj = None
    time.sleep(2)

    return {
        "caso": caso_nombre,
        "shell_type": "MEMBRANE" if shell_type == 1 else "SHELLTHIN",
        "diaf_rigido": asignar_diafragma_rigido,
        "T1": Period[0], "T2": Period[1], "T3": Period[2],
        "T4": Period[3] if NumberResults > 3 else 0.0,
        "T5": Period[4] if NumberResults > 4 else 0.0,
        "T6": Period[5] if NumberResults > 5 else 0.0,
        "SumUx": SumUx[last], "SumUy": SumUy[last], "SumRz": SumRz[last],
        "Ux1": Ux[0], "Uy1": Uy[0], "Rz3": Rz[2] if NumberResults > 2 else 0.0,
        "Rx1": Rx[0], "Ry1": Ry[0],
    }


# ==============================================================================
# MAIN — corre los dos casos y compara
# ==============================================================================
log("=" * 70)
log("COMPARATIVA: MEMBRANE+flexible  vs  SHELLTHIN+rigido")
log("=" * 70)
log(f"  Edificio: {n_vanos+1}x{n_vanos+1} = {(n_vanos+1)**2} nudos x {n_pisos} pisos")
log(f"  Total nudos: {(n_vanos+1)**2 * (n_pisos+1)}")
log(f"  Planta: {n_vanos*L_vano:.0f} x {n_vanos*L_vano:.0f} m  |  Altura: {n_pisos*H_piso:.0f} m")
log(f"  Material: f'c = {fc_MPa:.0f} MPa, E = {E_MPa:.0f} MPa")
log(f"  LOG: {LOG_FILE}")

# Caso A: Membrane + flexible (sin diafragma)
res_A = correr_caso("A_MEMB_FLEX", SHELL_TYPE_MEMBRANE, False)

# Caso B: ShellThin + diafragma rigido
res_B = correr_caso("B_SHELL_RIG", SHELL_TYPE_SHELLTHIN, True)


# ==============================================================================
# COMPARATIVA
# ==============================================================================
log("")
log("=" * 70)
log("COMPARATIVA FINAL")
log("=" * 70)
log("")
log(f"  {'':<24} | {'A: Memb+Flex':>14} | {'B: Shell+Rig':>14} | {'Diff %':>10}")
log("  " + "-" * 70)

for key, label in [
    ("T1", "T1 (s)"),
    ("T2", "T2 (s)"),
    ("T3", "T3 (s) torsional"),
    ("T4", "T4 (s)"),
    ("T5", "T5 (s)"),
    ("T6", "T6 (s)"),
]:
    A = res_A[key]
    B = res_B[key]
    diff = (A - B) / B * 100 if B > 0 else 0
    log(f"  {label:<24} | {A:>14.4f} | {B:>14.4f} | {diff:>+9.2f}%")

log("")
log("  Participacion modal acumulada (al modo 12):")
log(f"  {'SumUx (trasl X)':<24} | {res_A['SumUx']*100:>13.2f}% | {res_B['SumUx']*100:>13.2f}% |")
log(f"  {'SumUy (trasl Y)':<24} | {res_A['SumUy']*100:>13.2f}% | {res_B['SumUy']*100:>13.2f}% |")
log(f"  {'SumRz (torsion)':<24} | {res_A['SumRz']*100:>13.2f}% | {res_B['SumRz']*100:>13.2f}% |")

log("")
log("  Modos 1 y 3 — desglose participacion individual:")
log(f"  {'Modo 1: Ux%':<24} | {res_A['Ux1']*100:>13.2f}% | {res_B['Ux1']*100:>13.2f}% |")
log(f"  {'Modo 1: Uy%':<24} | {res_A['Uy1']*100:>13.2f}% | {res_B['Uy1']*100:>13.2f}% |")
log(f"  {'Modo 1: Rx%':<24} | {res_A['Rx1']*100:>13.2f}% | {res_B['Rx1']*100:>13.2f}% |")
log(f"  {'Modo 1: Ry%':<24} | {res_A['Ry1']*100:>13.2f}% | {res_B['Ry1']*100:>13.2f}% |")
log(f"  {'Modo 3: Rz%':<24} | {res_A['Rz3']*100:>13.2f}% | {res_B['Rz3']*100:>13.2f}% |")

log("")
log("=" * 70)
log("INTERPRETACION:")
diff_T1 = (res_A["T1"] - res_B["T1"]) / res_B["T1"] * 100
diff_T3 = (res_A["T3"] - res_B["T3"]) / res_B["T3"] * 100
log(f"  Diferencia en T1 (traslacional): {diff_T1:+.2f}%")
log(f"  Diferencia en T3 (torsional):    {diff_T3:+.2f}%")
if abs(diff_T1) > 5:
    log(f"  -> El tipo de diafragma afecta SIGNIFICATIVAMENTE la traslacion")
else:
    log(f"  -> El edificio es tan compacto que el diafragma apenas afecta")
if abs(diff_T3) > abs(diff_T1):
    log(f"  -> Como esperado, el efecto en TORSION es mayor que en traslacion")
log("=" * 70)
_log_fh.close()
