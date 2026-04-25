# -*- coding: utf-8 -*-
"""
================================================================================
EJEMPLO BÁSICO - API Python ETABS (v22 o v19, autodetectado)
================================================================================

Este script:
  1. Detecta automáticamente la versión de ETABS instalada (22 → 19)
  2. Conecta vía COM (comtypes)
  3. Crea un modelo nuevo desde cero (1 marco 2D — sin depender de archivos)
  4. Define material, sección, geometría, apoyos, cargas
  5. Ejecuta el análisis estático
  6. Lee desplazamientos y reacciones
  7. Guarda el .EDB en /resultados/

Requisitos:  pip install comtypes
Ejecutar:    python ejemplo_basico_ETABS.py
================================================================================
"""

import os
import sys
import time
import comtypes.client

# Forzar UTF-8 en stdout para que los acentos y flechas Unicode funcionen
# en la consola Windows (cp1252 por defecto). Requiere Python 3.7+.
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass


# ------------------------------------------------------------------------------
# 1. AUTODETECCIÓN DE ETABS
# ------------------------------------------------------------------------------
def detectar_etabs():
    """Devuelve (version_str, ruta_exe). Prioriza ETABS 22, fallback 19."""
    candidatos = [
        ("22", r"C:\Program Files\Computers and Structures\ETABS 22\ETABS.exe"),
        ("19", r"C:\Program Files\Computers and Structures\ETABS 19\ETABS.exe"),
    ]
    for ver, ruta in candidatos:
        if os.path.exists(ruta):
            return ver, ruta
    raise RuntimeError("No se encontró ETABS 22 ni ETABS 19 instalado.")


# ------------------------------------------------------------------------------
# 2. CONEXIÓN COM
# ------------------------------------------------------------------------------
def conectar_etabs(ruta_exe):
    """Crea instancia ETABS vía helper COM. Devuelve (etabs_obj, sap_model).

    IMPORTANTE: con `helper.CreateObject(ruta)` ETABS arranca solo. NO se
    debe llamar `ApplicationStart()` después — produce el error
    "No se pudo instalar un puerto IPC" (-2146233077).
    """
    print(f"  → CreateObject helper...")
    helper = comtypes.client.CreateObject("ETABSv1.Helper")
    helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)

    print(f"  → CreateObject ETABS (esto puede tardar ~10s)...")
    etabs_obj = helper.CreateObject(ruta_exe)
    # NO llamar ApplicationStart(): CreateObject(path) ya inicia el proceso.
    print(f"  → Esperando a que la GUI esté lista (8 s)...")
    time.sleep(8)

    sap_model = etabs_obj.SapModel
    return etabs_obj, sap_model


# ------------------------------------------------------------------------------
# 3. CONSTRUCCIÓN DE UN MARCO 2D (1 vano, 2 pisos)
# ------------------------------------------------------------------------------
def construir_marco(sap):
    """
    Marco simple 2D:
       Nodos:    4 base (apoyos) + 4 piso 1 + 4 piso 2 — pero en 2D 2 columnas
       Geometría: 5 m de vano, 3 m de altura por piso (2 pisos = 6 m total)
       Material: hormigón f'c = 21 MPa
       Sección : columna 30×30 cm, viga 25×35 cm
       Carga   : carga viva uniforme 10 kN/m sobre vigas
    """
    print("\n[3] Modelo nuevo, unidades kN, m, °C…")
    sap.InitializeNewModel(6)   # 6 = kN_m_C
    sap.File.NewBlank()

    print("    → Material C21 (f'c = 21 MPa)…")
    # eMatType: 2 = concrete
    ret = sap.PropMaterial.SetMaterial("C21", 2)
    # SetMPIsotropic(name, E, nu, alpha)
    ret = sap.PropMaterial.SetMPIsotropic("C21", 2.1e7, 0.2, 1e-5)
    # Concrete strength: SetOConcrete(name, fc, IsLightweight, ...)
    ret = sap.PropMaterial.SetOConcrete_1("C21", 21000.0, False, 0, 1, 1, 0.003, 0.005, 0)

    print("    → Secciones rectangulares…")
    sap.PropFrame.SetRectangle("COL30", "C21", 0.30, 0.30)
    sap.PropFrame.SetRectangle("VIG2535", "C21", 0.35, 0.25)

    print("    → Geometría: 4 nodos, 2 columnas + 1 viga × 2 niveles…")
    L_vano = 5.0
    H = 3.0

    # Coordenadas (nombre, x, y, z)
    nodos = {
        "N1":  (0.0,    0.0, 0.0),  "N2": (L_vano, 0.0, 0.0),
        "N3":  (0.0,    0.0, H),    "N4": (L_vano, 0.0, H),
        "N5":  (0.0,    0.0, 2*H),  "N6": (L_vano, 0.0, 2*H),
    }
    for n, (x, y, z) in nodos.items():
        sap.PointObj.AddCartesian(x, y, z, "", n)

    # Apoyos empotrados en base
    restraint_emp = [True, True, True, True, True, True]
    sap.PointObj.SetRestraint("N1", restraint_emp)
    sap.PointObj.SetRestraint("N2", restraint_emp)

    # Frames (columnas)
    sap.FrameObj.AddByPoint("N1", "N3", "", "COL30", "C1")
    sap.FrameObj.AddByPoint("N3", "N5", "", "COL30", "C2")
    sap.FrameObj.AddByPoint("N2", "N4", "", "COL30", "C3")
    sap.FrameObj.AddByPoint("N4", "N6", "", "COL30", "C4")

    # Frames (vigas)
    sap.FrameObj.AddByPoint("N3", "N4", "", "VIG2535", "V1")
    sap.FrameObj.AddByPoint("N5", "N6", "", "VIG2535", "V2")

    print("    → Patrones de carga: DEAD (peso propio) + LIVE…")
    # AddLoadPattern(name, type, selfWeightMultiplier, AddLoadCase=True)
    # type 1 = DEAD,  3 = LIVE
    sap.LoadPatterns.Add("DEAD", 1, 1.0, True)
    sap.LoadPatterns.Add("LIVE", 3, 0.0, True)

    print("    → Carga distribuida 10 kN/m sobre vigas (LIVE)…")
    # SetLoadDistributed(name, pattern, type, dir, dist1, dist2, val1, val2, ...)
    # dir = 10 (gravity, global Z neg), type 1 = force/length
    for v in ("V1", "V2"):
        sap.FrameObj.SetLoadDistributed(v, "LIVE", 1, 10, 0.0, 1.0, 10.0, 10.0, "Global", True, True)


# ------------------------------------------------------------------------------
# 4. ANÁLISIS Y LECTURA DE RESULTADOS
# ------------------------------------------------------------------------------
def correr_analisis(sap, edb_path):
    print("\n[4] Guardando .EDB y corriendo análisis…")
    os.makedirs(os.path.dirname(edb_path), exist_ok=True)
    sap.File.Save(edb_path)
    sap.Analyze.RunAnalysis()
    time.sleep(1)
    print("    [OK] Análisis terminado")


def leer_resultados(sap):
    print("\n[5] Resultados (caso LIVE):")
    sap.Results.Setup.DeselectAllCasesAndCombosForOutput()
    sap.Results.Setup.SetCaseSelectedForOutput("LIVE")

    # --- Desplazamientos en N5 (esquina sup. izq.) y N6 (esquina sup. der.) ---
    for punto in ("N5", "N6"):
        zeros = []
        # Firma:  (Name, ItemTypeElm, NumberResults, Obj, Elm, LoadCase,
        #          StepType, StepNum, U1, U2, U3, R1, R2, R3, ret)
        result = sap.Results.JointDispl(punto, 0, 0, [], [], [], [], [],
                                        [], [], [], [], [], [])
        if result and result[0] > 0:
            U1, U3 = result[8][0], result[10][0]
            print(f"    {punto}:  Ux = {U1*1000:8.3f} mm   Uz = {U3*1000:8.3f} mm")
        else:
            print(f"    {punto}:  sin resultados")

    # --- Reacciones en la base (N1 + N2) ---
    print("    Reacciones base (suma N1+N2):")
    fx_total = fy_total = fz_total = 0.0
    for punto in ("N1", "N2"):
        result = sap.Results.JointReact(punto, 0, 0, [], [], [], [], [],
                                        [], [], [], [], [], [])
        if result and result[0] > 0:
            fx_total += result[8][0]
            fy_total += result[9][0]
            fz_total += result[10][0]
    print(f"      ΣFx = {fx_total:8.2f} kN")
    print(f"      ΣFy = {fy_total:8.2f} kN")
    print(f"      ΣFz = {fz_total:8.2f} kN  (debe ≈ -10 kN/m × 5 m × 2 vigas = -100 kN)")


# ------------------------------------------------------------------------------
# MAIN
# ------------------------------------------------------------------------------
def main():
    print("=" * 70)
    print("EJEMPLO BÁSICO — API Python ETABS")
    print("=" * 70)

    print("\n[1] Detectando versión instalada…")
    ver, ruta = detectar_etabs()
    print(f"    [OK] ETABS {ver}  → {ruta}")

    print("\n[2] Conectando vía COM…")
    etabs_obj, sap = conectar_etabs(ruta)
    print(f"    [OK] SapModel obtenido")

    construir_marco(sap)

    edb_path = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        "resultados",
        f"marco_2D_ejemplo_v{ver}.EDB",
    )
    correr_analisis(sap, edb_path)
    leer_resultados(sap)

    print("\n" + "=" * 70)
    print(f"COMPLETADO — modelo guardado en: {edb_path}")
    print("ETABS queda abierto para inspección manual.")
    print("=" * 70)


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"\n[ERROR] {type(e).__name__}: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
