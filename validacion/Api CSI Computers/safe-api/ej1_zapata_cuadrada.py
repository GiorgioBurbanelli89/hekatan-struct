"""
EJERCICIO 1 - Zapata Aislada Cuadrada (Guerra MDI, pag. 17-42)

Script SELF-CONTAINED: arma el modelo SAFE 20 desde cero via API (pythonnet),
corre el analisis, extrae σ_max/σ_min y Uz del combo CARGA VERTICAL, y dumpea
results/ej1_zapata_cuadrada.json.

Datos:
  B = L = 3.45 m, h = 0.45 m, columna 0.45x0.45 m centrada
  f'c = 280 kg/cm^2  ->  E = 14100*sqrt(f'c) = 235938 kg/cm^2 (~ 23.13 GPa)
  gamma_c = 2.4 t/m^3, nu = 0.20
  Suelo: q_adm = 14 t/m^2, ks = 2920 t/m^3 (Winkler)
  Cargas en columna (servicio):
     Dead: P=91 t, M=12 t.m
     Live: P=30 t, M=5  t.m
  Combos:
     CARGA VERTICAL = 1.0*D + 1.0*L
     CARGA ULTIMA   = 1.4*D + 1.7*L

REQUISITOS:
  - SAFE 20 instalado (C:\\Program Files\\Computers and Structures\\SAFE 20\\)
  - Python 3.10+ con pythonnet:  pip install pythonnet

USO:
  python ej1_zapata_cuadrada.py
"""
import os, sys, json
from datetime import datetime
from pathlib import Path
import clr

# ============================================================================
# IMPORTS SAFE API (pythonnet -> .NET via SAFEv1.dll)
# ============================================================================
clr.AddReference("System.Runtime.InteropServices")
from System.Runtime.InteropServices import Marshal  # noqa: F401

SAFE_DLL = r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll"
clr.AddReference(SAFE_DLL)
from SAFEv1 import (  # noqa: F401
    cHelper, Helper, cOAPI, cSapModel, cFile, cAnalyze, cDatabaseTables,
    cPropMaterial, cPropArea, cAreaObj, cPointObj, cLoadPatterns, cCombo,
    cPropAreaSpring,
    eForce, eLength, eTemperature, eMatType, eSlabType, eShellType,
    eLoadPatternType, eItemType, eCNameType,
)


# ============================================================================
# CONFIG
# ============================================================================
MODEL_PATH        = r"C:\CSi_SAFE_API_Example\guerra_ej1.fdb"
ATTACH_TO_RUNNING = False
EXIT_ON_FINISH    = True
RESULTS_JSON      = Path(__file__).parent / "results" / "ej1_zapata_cuadrada.json"

# Multiplicador de peso propio para el load pattern Dead.
#   0.0  -> NO incluye peso propio (matchea Hekatan-struct).
#   1.0  -> incluye peso propio (default tipico SAFE). Esperado:
#           Δσ ≈ h·γ_c = 0.45·2.4 = 1.08 t/m² extra uniforme.
SELF_WEIGHT_MULT  = 1.0   # 1.0 = incluye peso propio (match libro p.36 SAFE)
                          # 0.0 = sin peso propio (sigma_max ≈ 11.86)
                          # Diff = h·γ_c = 0.45·2.4 = 1.08 t/m² (verificado).

# ---- Geometria / cargas / suelo (datos del libro pag. 17, 31) --------------
B          = 3.45       # m (lado de la zapata)
H_FOOTING  = 0.45       # m (espesor)
COL_SIZE   = 0.45       # m (lado columna)
FC_KGCM2   = 280        # kg/cm^2
NU         = 0.20
GAMMA_C    = 2.4        # tonf/m^3
KS_TM3     = 2920       # tonf/m^3 (coef. balasto)
P_DEAD, M_DEAD = 91.0, 12.0    # tonf, tonf.m
P_LIVE, M_LIVE = 30.0, 5.0

# E del concreto (ACI: E = 14100*sqrt(f'c) con f'c en kg/cm^2)
E_KGCM2  = 14100.0 * (FC_KGCM2 ** 0.5)        # ~ 235938 kg/cm^2
E_TM2    = E_KGCM2 * 10.0                      # 1 kgf/cm^2 = 10 tonf/m^2
FC_TM2   = FC_KGCM2 * 10.0


# ============================================================================
# HELPERS
# ============================================================================
def connect_safe(attach=False):
    """Arranca SAFE 20 o se attachea a una instancia abierta.
    Returns: (SapModel, helper, mySAFEObject, started_new)."""
    helper = cHelper(Helper())
    if attach:
        try:
            mySAFE = cOAPI(helper.GetObject("CSI.SAFE.API.ETABSObject"))
            return cSapModel(mySAFE.SapModel), helper, mySAFE, False
        except Exception as e:
            print(f"No hay instancia de SAFE corriendo ({e}). Iniciando una nueva...")
    try:
        mySAFE = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
        mySAFE.ApplicationStart()
        return cSapModel(mySAFE.SapModel), helper, mySAFE, True
    except Exception as e:
        print(f"FATAL: no se pudo iniciar SAFE 20: {e}")
        sys.exit(1)


def set_units_tonf_m(sap):
    """Setea unidades a tonf, m, C."""
    sap.SetPresentUnits_2(eForce.tonf, eLength.m, eTemperature.C)


def get_table(sap, table_name, group=""):
    """Lee tabla SAFE como lista de dicts. Retorna [] si vacia o no existe."""
    db = cDatabaseTables(sap.DatabaseTables)
    TableVersion = 0
    FieldsKeysIncluded = []
    NumberRecords = 0
    TableData = []
    FieldKeyList = []
    try:
        ret, _, TableVersion, FieldsKeysIncluded, NumberRecords, TableData = \
            db.GetTableForDisplayArray(table_name, FieldKeyList, group,
                                       TableVersion, FieldsKeysIncluded, NumberRecords, TableData)
    except Exception as e:
        print(f"  WARN: GetTableForDisplayArray('{table_name}') fallo: {e}")
        return []
    if ret != 0 or NumberRecords == 0:
        return []
    fields = list(FieldsKeysIncluded)
    ncols = len(fields)
    rows = []
    for i in range(NumberRecords):
        row = {}
        for j, k in enumerate(fields):
            idx = i * ncols + j
            row[k] = TableData[idx] if idx < len(TableData) else None
        rows.append(row)
    return rows


def dump_results_json(out_path, payload, source_meta=None):
    """Escribe results JSON con header standard."""
    Path(out_path).parent.mkdir(parents=True, exist_ok=True)
    header = {
        "_meta": {
            "generated_utc": datetime.utcnow().isoformat() + "Z",
            "tool": "SAFE 20 via Python API (CSI.SAFE.API.ETABSObject)",
            "script": Path(sys.argv[0]).name,
            **(source_meta or {}),
        },
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump({**header, **payload}, f, indent=2, ensure_ascii=False)
    print(f"OK -> {out_path}  ({Path(out_path).stat().st_size/1024:.1f} KB)")


def _try(label, fn):
    """Wrapper que loggea ret. No aborta si falla; util para metodos con
    firmas que pueden variar entre versiones de SAFE 20."""
    try:
        ret = fn()
        if isinstance(ret, tuple):
            print(f"  [API] {label}: ret={ret[0]}  (out={ret[1:]})")
            return ret
        print(f"  [API] {label}: ret={ret}")
        return ret
    except Exception as e:
        print(f"  [API] {label}: EXCEPTION -> {e}")
        return None


# ============================================================================
# CONSTRUCCION DEL MODELO VIA API
# ============================================================================
def build_model_from_api(sap):
    print("\n>>> BUILD_FROM_API: armando modelo Ej.1 desde cero")

    File = cFile(sap.File)
    _try("File.NewBlank", lambda: File.NewBlank())

    set_units_tonf_m(sap)
    print("  Units: tonf, m, C")

    # ---- 1) Material concreto Conc280 --------------------------------------
    Mat = cPropMaterial(sap.PropMaterial)
    MAT = "Conc280"
    _try(f"PropMaterial.SetMaterial({MAT}, Concrete)",
         lambda: Mat.SetMaterial(MAT, eMatType.Concrete))
    _try("SetMPIsotropic",
         lambda: Mat.SetMPIsotropic(MAT, E_TM2, NU, 1.0e-5))
    _try("SetWeightAndMass(weight=gamma_c)",
         lambda: Mat.SetWeightAndMass(MAT, 1, GAMMA_C))
    _try("SetOConcrete(f'c)",
         lambda: Mat.SetOConcrete(MAT, FC_TM2, False, 0.0, 1, 1, 0.002, 0.005, 0.0))

    # ---- 2) Slab section MAT45 (Mat foundation, Shell-Thin) ----------------
    PA = cPropArea(sap.PropArea)
    SLAB = "MAT45"
    _try("PropArea.SetSlab(MAT45, Mat, ShellThick, h=0.45)",
         lambda: PA.SetSlab(SLAB, eSlabType.Mat, eShellType.ShellThick, MAT, H_FOOTING, -1, "", ""))

    # ---- 3) Area object: rectangulo 3.45x3.45 a z=0 ------------------------
    AO = cAreaObj(sap.AreaObj)
    xs = [0.0, B,   B,   0.0]
    ys = [0.0, 0.0, B,   B]
    zs = [0.0, 0.0, 0.0, 0.0]
    area_name = ""
    try:
        ret_tuple = AO.AddByCoord(4, xs, ys, zs, area_name, SLAB, "FOOT", "Global")
        if isinstance(ret_tuple, tuple):
            ret = ret_tuple[0]
            area_name = ret_tuple[-1] if isinstance(ret_tuple[-1], str) else "FOOT"
        else:
            ret = ret_tuple
            area_name = "FOOT"
        print(f"  [API] AreaObj.AddByCoord: ret={ret}, area_name={area_name}")
    except Exception as e:
        print(f"  [API] AreaObj.AddByCoord EXCEPTION -> {e}")
        area_name = "FOOT"

    _try("AreaObj.SetProperty(MAT45)",
         lambda: AO.SetProperty(area_name, SLAB, eItemType.Objects))

    # ---- 4) Suelo Winkler ks (subgrade modulus) ----------------------------
    # SetAreaSpringProp(Name, U1, U2, U3, NonlinearOption3, SpringOption, SoilProfile,
    #                   EndLengthRatio, Period, color, notes, iGUID)
    #   U3 = ks (vertical normal). NonlinearOption3=0 (Linear), SpringOption=0 (UserDef).
    try:
        PAS = cPropAreaSpring(sap.PropAreaSpring)
        ret = PAS.SetAreaSpringProp("SOIL_KS", 0.0, 0.0, KS_TM3, 0, 0, "", 0.0, 0.0, -1, "", "")
        print(f"  [API] PropAreaSpring.SetAreaSpringProp(SOIL_KS, U3=ks={KS_TM3}): ret={ret}")
        ret = AO.SetSpringAssignment(area_name, "SOIL_KS", eItemType.Objects)
        print(f"  [API] AreaObj.SetSpringAssignment(SOIL_KS): ret={ret}")
    except Exception as e:
        print(f"  [API] PropAreaSpring fail: {e}")

    # ---- 5) Punto de la columna (centro del area) --------------------------
    PO = cPointObj(sap.PointObj)
    pt_name = ""
    try:
        ret_tuple = PO.AddCartesian(B/2, B/2, 0.0, pt_name, "COL_CTR", "Global", False, 0)
        if isinstance(ret_tuple, tuple):
            ret = ret_tuple[0]
            pt_name = ret_tuple[-1] if isinstance(ret_tuple[-1], str) else "COL_CTR"
        else:
            ret = ret_tuple
            pt_name = "COL_CTR"
        print(f"  [API] PointObj.AddCartesian(B/2,B/2,0): ret={ret}, pt_name={pt_name}")
    except Exception as e:
        print(f"  [API] AddCartesian EXCEPTION -> {e}")
        pt_name = "COL_CTR"

    # ---- 6) Load patterns Dead, Live ---------------------------------------
    # NOTA: SAFE NewBlank crea "Dead" por default con SelfWtMult=1.0. LP.Add
    # con un name existente retorna ret=1 SIN modificarlo. Hay que forzar
    # con SetSelfWTMultiplier() despues.
    LP = cLoadPatterns(sap.LoadPatterns)
    _try(f"LoadPatterns.Add(Dead, selfWt={SELF_WEIGHT_MULT})",
         lambda: LP.Add("Dead", eLoadPatternType.Dead, SELF_WEIGHT_MULT, True))
    _try(f"LoadPatterns.SetSelfWTMultiplier(Dead, {SELF_WEIGHT_MULT})",
         lambda: LP.SetSelfWTMultiplier("Dead", SELF_WEIGHT_MULT))
    _try("LoadPatterns.Add(Live)",
         lambda: LP.Add("Live", eLoadPatternType.Live, 0.0, True))
    _try("LoadPatterns.SetSelfWTMultiplier(Live, 0)",
         lambda: LP.SetSelfWTMultiplier("Live", 0.0))
    # Read-back para confirmar
    try:
        ret, mDead = LP.GetSelfWTMultiplier("Dead", 0.0)
        ret, mLive = LP.GetSelfWTMultiplier("Live", 0.0)
        print(f"  [API] Confirmado: Dead.selfWt={mDead}, Live.selfWt={mLive}")
    except Exception as e:
        print(f"  [API] GetSelfWTMultiplier read-back fail: {e}")

    # ---- 7) Cargas concentradas en el punto columna ------------------------
    # SetLoadForce(name, loadPat, value[6]={Fx,Fy,Fz,Mx,My,Mz}, replace, csys, itemType)
    # M sobre theta_y -> momento alrededor del eje Y => My
    # Fz negativo = gravedad
    vals_dead = [0.0, 0.0, -P_DEAD, 0.0, M_DEAD, 0.0]
    vals_live = [0.0, 0.0, -P_LIVE, 0.0, M_LIVE, 0.0]
    _try(f"SetLoadForce(Dead, Fz={-P_DEAD}, My={M_DEAD})",
         lambda: PO.SetLoadForce(pt_name, "Dead", vals_dead, True, "Global", eItemType.Objects))
    _try(f"SetLoadForce(Live, Fz={-P_LIVE}, My={M_LIVE})",
         lambda: PO.SetLoadForce(pt_name, "Live", vals_live, True, "Global", eItemType.Objects))

    # ---- 8) Combos servicio y ultimo ---------------------------------------
    RC = cCombo(sap.RespCombo)
    _try("RespCombo.Add(CARGA VERTICAL, Linear Add)",
         lambda: RC.Add("CARGA VERTICAL", 0))
    _try("CARGA VERTICAL <- 1.0*Dead",
         lambda: RC.SetCaseList("CARGA VERTICAL", eCNameType.LoadCase, "Dead", 1.0))
    _try("CARGA VERTICAL <- 1.0*Live",
         lambda: RC.SetCaseList("CARGA VERTICAL", eCNameType.LoadCase, "Live", 1.0))
    _try("RespCombo.Add(CARGA ULTIMA, Linear Add)",
         lambda: RC.Add("CARGA ULTIMA", 0))
    _try("CARGA ULTIMA <- 1.4*Dead",
         lambda: RC.SetCaseList("CARGA ULTIMA", eCNameType.LoadCase, "Dead", 1.4))
    _try("CARGA ULTIMA <- 1.7*Live",
         lambda: RC.SetCaseList("CARGA ULTIMA", eCNameType.LoadCase, "Live", 1.7))

    # ---- 9) Save ------------------------------------------------------------
    Path(MODEL_PATH).parent.mkdir(parents=True, exist_ok=True)
    _try(f"File.Save({MODEL_PATH})", lambda: File.Save(MODEL_PATH))
    print(">>> Modelo construido OK")
    return area_name, pt_name


# ============================================================================
# MAIN
# ============================================================================
def main():
    sap, helper, mySAFE, started = connect_safe(attach=ATTACH_TO_RUNNING)

    sap.InitializeNewModel()
    build_model_from_api(sap)

    # ---- Run analysis -------------------------------------------------------
    Analyze = cAnalyze(sap.Analyze)
    print("\nCorriendo analisis...")
    ret = Analyze.RunAnalysis()
    print(f"RunAnalysis: ret={ret}")

    # ---- Extraer tablas clave ----------------------------------------------
    soil_rows = (get_table(sap, "Soil Pressures")
                 or get_table(sap, "Slab Bearing Pressures")
                 or get_table(sap, "Soil Bearing Pressures")
                 or get_table(sap, "Area Soil Pressures"))
    disp_rows = get_table(sap, "Joint Displacements")
    slab_rows = (get_table(sap, "Slab Element Forces - Aci")
                 or get_table(sap, "Slab Forces"))

    # ---- Reduccion a escalares ---------------------------------------------
    def to_float(x):
        try:    return float(x)
        except: return None

    def get_combo(r):
        return (r.get("OutputCase") or r.get("Combo") or
                r.get("Load Case/Combo") or r.get("LoadCase") or "")

    soil_serv = [r for r in soil_rows if get_combo(r).upper().startswith("CARGA VERT")] or soil_rows
    sigma_vals = [to_float(r.get("Pressure") or r.get("Soil Pressure")
                           or r.get("SoilPress") or r.get("P") or r.get("SoilPressure"))
                  for r in soil_serv]
    sigma_vals = [v for v in sigma_vals if v is not None]
    # SAFE devuelve soil pressure NEGATIVA en compresion. Reportamos magnitudes.
    sigma_abs = [abs(v) for v in sigma_vals]
    sigma_max = max(sigma_abs) if sigma_abs else None    # mas compresiva
    sigma_min = min(sigma_abs) if sigma_abs else None    # menos compresiva

    disp_serv = [r for r in disp_rows if get_combo(r).upper().startswith("CARGA VERT")] or disp_rows
    uz_vals = [to_float(r.get("U3") or r.get("Uz")) for r in disp_serv]
    uz_vals = [v for v in uz_vals if v is not None]
    uz_max_abs = max(uz_vals, key=abs) if uz_vals else None

    payload = {
        "exercise": "Guerra MDI Ej.1 - Zapata Aislada Cuadrada",
        "build_method": "BUILD_FROM_API",
        "model_path": MODEL_PATH,
        "inputs": {
            "B_m": B, "L_m": B, "h_m": H_FOOTING, "col_size_m": COL_SIZE,
            "fc_kgcm2": FC_KGCM2, "E_tm2": round(E_TM2, 1),
            "nu": NU, "gamma_c_tm3": GAMMA_C,
            "ks_tm3": KS_TM3,
            "P_dead_tonf": P_DEAD, "M_dead_tonfm": M_DEAD,
            "P_live_tonf": P_LIVE, "M_live_tonfm": M_LIVE,
            "combo_servicio": "1.0*Dead + 1.0*Live",
            "combo_ultimo":   "1.4*Dead + 1.7*Live",
        },
        "results_safe": {
            "sigma_max_servicio_tm2": sigma_max,
            "sigma_min_servicio_tm2": sigma_min,
            "uz_max_abs_m": uz_max_abs,
            "n_soil_rows": len(soil_rows),
            "n_disp_rows": len(disp_rows),
            "n_slab_rows": len(slab_rows),
        },
        "manual_libro_pag_19": {
            "sigma_max_tm2": 13.94,
            "sigma_min_tm2": 8.28,
        },
        "safe_libro_pag_36": {
            "sigma_max_servicio_tm2": 13.163,
        },
    }
    dump_results_json(RESULTS_JSON, payload, source_meta={"safe_version": "20"})

    if started and EXIT_ON_FINISH:
        try:
            mySAFE.ApplicationExit(False)
            print("SAFE cerrado.")
        except Exception as e:
            print(f"WARN al cerrar SAFE: {e}")


if __name__ == "__main__":
    main()
