"""
EJERCICIO 1 — Zapata Aislada Cuadrada (Guerra MDI, pag. 17-42)

Datos:
  B = L = 3.45 m  (modelo SAFE; manual usa 3.30 m + recubrimiento 0.075 m)
  h = 0.45 m      (espesor; el libro itera 0.45 -> 0.55 m por punzonamiento)
  Columna: 0.45 x 0.45 m (centrada)
  Material:  f'c = 280 kg/cm² → E ≈ 14100·√f'c = 235938 kg/cm² ≈ 23.13 GPa
             γ_c = 2.4 t/m³, ν = 0.20
  Suelo: q_adm = 14 t/m², ks = 2920 t/m³ (Tabla 1 del libro)
  Cargas (sobre la columna):
     Dead: P=91 t, M=12 t·m
     Live: P=30 t, M=5 t·m
  Combos:
     CARGA VERTICAL = 1.0·D + 1.0·L   (Service - Normal)
     CARGA ULTIMA   = 1.4·D + 1.7·L   (Strength)

USO:
  1) Cerrar SAFE si está abierto.
  2) (Opción A) Tener un modelo manual previo ej1.fdb (armado siguiendo
     pag. 29-38 del libro). Setear MODEL_PATH abajo y dejar BUILD_FROM_API=False.
     (Opción B) Si BUILD_FROM_API=True, el script intenta construirlo via
     API. Esta ruta requiere ajustes según la versión exacta de SAFE 20
     (los nombres de método pueden variar).
  3) python ej1_zapata_cuadrada.py
  4) Output: ./results/ej1_zapata_cuadrada.json

El JSON se consume desde el ejemplo hekatan-struct:
  examples/src/guerra-ej1-zapata-cuadrada/safe-reference.json
"""
import os, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from _common import (connect_safe, set_units_tonf_m, get_table, dump_results_json,
                     cFile, cAnalyze, cSapModel)

# ════════════════════════════════════════════════════════════════════════════
# CONFIG — editar antes de correr
# ════════════════════════════════════════════════════════════════════════════
MODEL_PATH        = r"C:\CSi_SAFE_API_Example\guerra_ej1.fdb"
BUILD_FROM_API    = False  # True = intentar armar desde cero (experimental)
ATTACH_TO_RUNNING = False
EXIT_ON_FINISH    = True
RESULTS_JSON      = Path(__file__).parent / "results" / "ej1_zapata_cuadrada.json"

# Geometría / cargas / suelo (datos del libro pag. 17, 31)
B = 3.45            # m (lado de la zapata en SAFE)
H_FOOTING = 0.45    # m (espesor inicial; iterar a 0.55 si falla punzonamiento)
COL_SIZE = 0.45     # m (lado de columna cuadrada)
FC_KGCM2 = 280      # kg/cm²
KS_TM3 = 2920       # t/m³ (coef. balasto, Tabla 1 para q_adm=14 t/m²)
P_DEAD, M_DEAD = 91.0, 12.0    # t, t·m
P_LIVE, M_LIVE = 30.0, 5.0     # t, t·m


def main():
    sap, helper, mySAFE, started = connect_safe(attach=ATTACH_TO_RUNNING)

    if BUILD_FROM_API:
        sap.InitializeNewModel()
        File = cFile(sap.File)
        File.NewBlank()
        set_units_tonf_m(sap)
        # TODO: armar areas + soil springs + col loads via API.
        # Patrón general:
        #   PropArea = cPropArea(sap.PropArea); PropArea.SetSlab(...)
        #   AreaObj = cAreaObj(sap.AreaObj); AreaObj.AddByCoord(...)
        #   PointObj.SetLoadForce(...)
        #   LoadPatterns.Add('Dead', 1, 1), LoadPatterns.Add('Live', 0, 2)
        #   RespCombo.Add('CARGA VERTICAL', ...), RespCombo.Add('CARGA ULTIMA', ...)
        File.Save(MODEL_PATH)
        print(f"Modelo construido y guardado en {MODEL_PATH}")
    else:
        if not Path(MODEL_PATH).exists():
            print(f"FATAL: no encuentro {MODEL_PATH}")
            print("       Armá el modelo manualmente siguiendo pag. 29-38 del libro y guardalo ahí,")
            print("       o seteá BUILD_FROM_API=True (requiere implementar el TODO en el script).")
            sys.exit(1)
        File = cFile(sap.File)
        File.OpenFile(MODEL_PATH)
        print(f"Modelo abierto: {MODEL_PATH}")

    set_units_tonf_m(sap)

    Analyze = cAnalyze(sap.Analyze)
    print("Corriendo analysis...")
    Analyze.RunAnalysis()
    print("Analysis OK")

    # ── Lectura de tablas clave ─────────────────────────────────────────────
    # SAFE produce tablas estandarizadas; las que nos importan para validar Hekatan:
    #   "Soil Pressures"            -> σ por cada nodo (combo CARGA VERTICAL)
    #   "Joint Displacements"       -> Uz central
    #   "Slab Element Forces - Aci" -> M11, M22 por elemento
    #   "Slab Forces"               -> alternativa
    #
    # Algunas versiones de SAFE tienen nombres ligeramente distintos. Loggeo
    # todas las tablas disponibles para que el usuario pueda inspeccionar.
    db = sap.DatabaseTables
    NumberTables = 0; TableKey = []; TableName = []; ImportType = []; IsEmpty = []
    try:
        ret, NumberTables, TableKey, TableName, ImportType, IsEmpty = \
            db.GetAllTables(NumberTables, TableKey, TableName, ImportType, IsEmpty)
        print(f"\nTablas disponibles ({NumberTables}):")
        for k, n in zip(list(TableKey)[:60], list(TableName)[:60]):
            print(f"  - {k}  ::  {n}")
    except Exception as e:
        print(f"  WARN al listar tablas: {e}")

    # Extraer
    soil_rows = get_table(sap, "Soil Pressures")
    disp_rows = get_table(sap, "Joint Displacements")
    slab_rows = get_table(sap, "Slab Element Forces - Aci")
    if not slab_rows:
        slab_rows = get_table(sap, "Slab Forces")

    # ── Reducción a escalares clave para comparar con Hekatan ───────────────
    def to_float(x):
        try:    return float(x)
        except: return None

    # Soil pressures: filter combo "CARGA VERTICAL" si existe
    soil_serv = [r for r in soil_rows
                 if (r.get("OutputCase", "") or r.get("Combo", "")).upper().startswith("CARGA VERT")] \
                 or soil_rows
    sigma_vals = [to_float(r.get("Pressure") or r.get("Soil Pressure") or r.get("SoilPress"))
                  for r in soil_serv]
    sigma_vals = [v for v in sigma_vals if v is not None]
    sigma_max = max(sigma_vals) if sigma_vals else None
    sigma_min = min(sigma_vals) if sigma_vals else None

    # Joint displacements: U3 (Uz) central
    uz_vals = [to_float(r.get("U3") or r.get("Uz")) for r in disp_rows]
    uz_vals = [v for v in uz_vals if v is not None]
    uz_max_abs = max(uz_vals, key=abs) if uz_vals else None

    payload = {
        "exercise": "Guerra MDI Ej.1 — Zapata Aislada Cuadrada",
        "model_path": MODEL_PATH,
        "inputs": {
            "B_m": B, "L_m": B, "h_m": H_FOOTING, "col_size_m": COL_SIZE,
            "fc_kgcm2": FC_KGCM2, "ks_tm3": KS_TM3,
            "P_dead_tonf": P_DEAD, "M_dead_tonfm": M_DEAD,
            "P_live_tonf": P_LIVE, "M_live_tonfm": M_LIVE,
        },
        "results_safe": {
            "sigma_max_servicio_tm2": sigma_max,
            "sigma_min_servicio_tm2": sigma_min,
            "uz_max_abs_m": uz_max_abs,
            "n_soil_rows": len(soil_rows),
            "n_disp_rows": len(disp_rows),
            "n_slab_rows": len(slab_rows),
        },
        "reference_book": {
            # Valores reportados por el libro corriendo SAFE (pag. 36)
            "sigma_max_servicio_tm2": 13.163,
            "sigma_max_manual_tm2": 13.94,
            "page": 36,
        },
    }
    dump_results_json(RESULTS_JSON, payload, source_meta={"safe_version": "20"})

    if started and EXIT_ON_FINISH:
        mySAFE.ApplicationExit(False)
        print("SAFE cerrado.")


if __name__ == "__main__":
    main()
