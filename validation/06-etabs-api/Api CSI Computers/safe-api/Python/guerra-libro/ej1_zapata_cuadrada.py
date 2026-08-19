"""
EJERCICIO 1 — Zapata Aislada Cuadrada (Guerra MDI, pag. 17-42)

Datos:
  B = L = 3.45 m
  h = 0.45 m
  Columna: 0.45 x 0.45 m (centrada)
  Material:  f'c = 280 kg/cm^2 -> E = 14100*sqrt(f'c) = 235938 kg/cm^2 ~ 23.13 GPa
             gamma_c = 2.4 t/m^3, nu = 0.20
  Suelo:     q_adm = 14 t/m^2, ks = 2920 t/m^3
  Cargas (sobre columna):
     Dead: P=91 t, M=12 t.m
     Live: P=30 t, M=5 t.m
  Combos:
     CARGA VERTICAL = 1.0*D + 1.0*L   (servicio)
     CARGA ULTIMA   = 1.4*D + 1.7*L   (ultimo)

MODOS:
  BUILD_FROM_API = True   -> arma el modelo desde cero via SAFE API (default)
  BUILD_FROM_API = False  -> abre un .fdb pre-armado en MODEL_PATH

Salida: ./results/ej1_zapata_cuadrada.json
        El JSON se consume desde el ejemplo hekatan-struct:
          examples/src/guerra-ej1-zapata-cuadrada/safe-reference.json

Uso:
  python ej1_zapata_cuadrada.py
"""
import os, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from _common import (connect_safe, set_units_tonf_m, get_table, dump_results_json,
                     cFile, cAnalyze, cSapModel)
import clr  # noqa: F401
# Re-importar simbolos SAFE directamente para acceder a clases adicionales que
# _common no re-exporta explicitamente (cPropMaterial, eMatType, etc.).
from SAFEv1 import (  # noqa: F401
    cPropMaterial, cPropArea, cAreaObj, cPointObj, cLoadPatterns, cCombo,
    cPropAreaSpring, eMatType, eForce, eLength, eTemperature,
    eSlabType, eShellType, eLoadPatternType, eItemType, eCNameType,
)

# ============================================================================
# CONFIG
# ============================================================================
MODEL_PATH        = r"C:\CSi_SAFE_API_Example\guerra_ej1.fdb"
BUILD_FROM_API    = True   # True = arma todo el modelo via API (default)
ATTACH_TO_RUNNING = False
EXIT_ON_FINISH    = True
RESULTS_JSON      = Path(__file__).parent / "results" / "ej1_zapata_cuadrada.json"

# ---- Geometria / cargas / suelo (datos del libro pag. 17, 31) --------------
B          = 3.45       # m (lado de la zapata)
H_FOOTING  = 0.45       # m (espesor; el libro itera a 0.55 si falla punzonamiento)
COL_SIZE   = 0.45       # m
FC_KGCM2   = 280        # kg/cm^2
NU         = 0.20
GAMMA_C    = 2.4        # tonf/m^3
KS_TM3     = 2920       # tonf/m^3 (coef. balasto)
P_DEAD, M_DEAD = 91.0, 12.0    # tonf, tonf.m
P_LIVE, M_LIVE = 30.0, 5.0

# E del concreto (ACI: E = 14100*sqrt(f'c) con f'c en kg/cm^2)
E_KGCM2  = 14100.0 * (FC_KGCM2 ** 0.5)         # ~ 235938 kg/cm^2
E_TM2    = E_KGCM2 * 10.0                       # 1 kgf/cm^2 = 10 tonf/m^2 -> ~ 2,359,000 tonf/m^2
FC_TM2   = FC_KGCM2 * 10.0                      # f'c en tonf/m^2 para SetOConcrete


# ============================================================================
# CONSTRUCCION VIA API
# ============================================================================
def _try(label, fn):
    """Wrapper que loggea ret y no aborta si una llamada falla; util para
    metodos cuya firma puede variar entre versiones de SAFE 20."""
    try:
        ret = fn()
        # Algunas APIs devuelven int, otras tuple (ret, out1, out2, ...)
        if isinstance(ret, tuple):
            print(f"  [API] {label}: ret={ret[0]}  (out={ret[1:]})")
            return ret
        print(f"  [API] {label}: ret={ret}")
        return ret
    except Exception as e:
        print(f"  [API] {label}: EXCEPTION -> {e}")
        return None


def build_model_from_api(sap):
    print("\n>>> BUILD_FROM_API: armando modelo Ej.1 desde cero")

    File = cFile(sap.File)
    _try("File.NewBlank", lambda: File.NewBlank())

    # Units tonf, m, C
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
    # f'c para diseño (opcional, no afecta análisis lineal pero llena tablas)
    _try("SetOConcrete(f'c)",
         lambda: Mat.SetOConcrete(MAT, FC_TM2, False, 0.0, 1, 1, 0.002, 0.005, 0.0))

    # ---- 2) Slab section MAT45 (Mat foundation, Shell-Thin) ----------------
    PA = cPropArea(sap.PropArea)
    SLAB = "MAT45"
    # SetSlab(name, slabType, shellType, matProp, thickness, color, notes, GUID)
    #  slabType:  0=Slab, 1=Drop, 2=Stiff, 3=Ribbed, 4=Waffle, 5=Mat
    #  shellType: 1=Shell-Thin, 2=Shell-Thick, 3=Plate-Thin, 4=Plate-Thick, 5=Membrane
    _try("PropArea.SetSlab(MAT45, Mat, ShellThin, h=0.45)",
         lambda: PA.SetSlab(SLAB, eSlabType.Mat, eShellType.ShellThin, MAT, H_FOOTING, -1, "", ""))

    # ---- 3) Area object: rectangulo 3.45x3.45 a z=0 ------------------------
    AO = cAreaObj(sap.AreaObj)
    xs = [0.0, B,   B,   0.0]
    ys = [0.0, 0.0, B,   B]
    zs = [0.0, 0.0, 0.0, 0.0]
    # AddByCoord(numberPoints, x[], y[], z[], name, propName, userName, csys)
    area_name = ""
    try:
        ret_tuple = AO.AddByCoord(4, xs, ys, zs, area_name, SLAB, "FOOT", "Global")
        if isinstance(ret_tuple, tuple):
            ret, area_name = ret_tuple[0], ret_tuple[-1] if isinstance(ret_tuple[-1], str) else "FOOT"
        else:
            ret = ret_tuple
            area_name = "FOOT"
        print(f"  [API] AreaObj.AddByCoord: ret={ret}, area_name={area_name}")
    except Exception as e:
        print(f"  [API] AreaObj.AddByCoord EXCEPTION -> {e}")
        area_name = "FOOT"

    # Asegurar asignacion de seccion (por si la firma de AddByCoord la ignoro)
    _try("AreaObj.SetProperty(MAT45)",
         lambda: AO.SetProperty(area_name, SLAB, eItemType.Objects))

    # ---- 4) Suelo Winkler ks (subgrade modulus) ----------------------------
    # SAFE 20: definir PropAreaSpring con stiffness vertical (U3) = ks, luego asignarlo.
    # SetAreaSpringProp(Name, U1, U2, U3, NonlinearOption3, SpringOption, SoilProfile,
    #                   EndLengthRatio, Period, color, notes, iGUID)
    #   U1, U2, U3: stiffness en cada DOF translacional. U3 = ks (vertical normal)
    #   NonlinearOption3: 0=Linear, 1=Compression Only, 2=Tension Only. 0 = matchea Hekatan lineal.
    #   SpringOption: 0=User-defined, 1=Soil Profile
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
        # AddCartesian(x, y, z, name, userName, csys, mergeOff, mergeNumber)
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
    LP = cLoadPatterns(sap.LoadPatterns)
    # Add(name, MyType, SelfWtMultiplier, AddLoadCase)
    # MyType: 1=Dead, 3=Live
    _try("LoadPatterns.Add(Dead)",
         lambda: LP.Add("Dead", eLoadPatternType.Dead, 0.0, True))  # selfWtMult=0 para matchear Hekatan
    _try("LoadPatterns.Add(Live)",
         lambda: LP.Add("Live", eLoadPatternType.Live, 0.0, True))

    # ---- 7) Cargas concentradas en el punto columna ------------------------
    # PointObj.SetLoadForce(name, loadPat, value[6]={Fx,Fy,Fz,Mx,My,Mz}, replace, csys, itemType)
    # Hekatan aplica M sobre theta_y -> momento alrededor del eje Y => My
    # Fz negativo = gravedad
    vals_dead = [0.0, 0.0, -P_DEAD, 0.0, M_DEAD, 0.0]
    vals_live = [0.0, 0.0, -P_LIVE, 0.0, M_LIVE, 0.0]
    _try(f"SetLoadForce(Dead, Fz={-P_DEAD}, My={M_DEAD})",
         lambda: PO.SetLoadForce(pt_name, "Dead", vals_dead, True, "Global", eItemType.Objects))
    _try(f"SetLoadForce(Live, Fz={-P_LIVE}, My={M_LIVE})",
         lambda: PO.SetLoadForce(pt_name, "Live", vals_live, True, "Global", eItemType.Objects))

    # ---- 8) Combos servicio y ultimo ---------------------------------------
    RC = cCombo(sap.RespCombo)
    # Add(name, comboType): 0=Linear Add, 1=Envelope, 2=Absolute Add, 3=SRSS, 4=Range Add
    _try("RespCombo.Add(CARGA VERTICAL, Linear Add)",
         lambda: RC.Add("CARGA VERTICAL", 0))
    # SetCaseList(comboName, CNameType, CName, SF). CNameType: LoadCase=0, LoadCombo=1
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

    if BUILD_FROM_API:
        sap.InitializeNewModel()
        build_model_from_api(sap)
    else:
        if not Path(MODEL_PATH).exists():
            print(f"FATAL: no encuentro {MODEL_PATH}")
            print("       Arma el modelo manualmente (libro pag. 29-38) o seteá BUILD_FROM_API=True.")
            sys.exit(1)
        File = cFile(sap.File)
        File.OpenFile(MODEL_PATH)
        print(f"Modelo abierto: {MODEL_PATH}")
        set_units_tonf_m(sap)

    # ---- Run analysis -------------------------------------------------------
    Analyze = cAnalyze(sap.Analyze)
    print("\nCorriendo analisis...")
    ret = Analyze.RunAnalysis()
    print(f"RunAnalysis: ret={ret}")

    # ---- Listar tablas disponibles para diagnostico ------------------------
    db = sap.DatabaseTables
    try:
        NumberTables = 0; TableKey = []; TableName = []; ImportType = []; IsEmpty = []
        ret, NumberTables, TableKey, TableName, ImportType, IsEmpty = \
            db.GetAllTables(NumberTables, TableKey, TableName, ImportType, IsEmpty)
        print(f"\nTablas disponibles ({NumberTables}):")
        for k, n in zip(list(TableKey)[:80], list(TableName)[:80]):
            print(f"  - {k}  ::  {n}")
    except Exception as e:
        print(f"WARN al listar tablas: {e}")

    # ---- Extraer tablas clave (probamos varios nombres) --------------------
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
    # SAFE devuelve soil pressure NEGATIVA en compresion. Reportamos como valor
    # absoluto (convencion ingenieril: presion de contacto siempre positiva en compresion).
    sigma_abs = [abs(v) for v in sigma_vals]
    sigma_max = max(sigma_abs) if sigma_abs else None    # mas compresiva
    sigma_min = min(sigma_abs) if sigma_abs else None    # menos compresiva

    disp_serv = [r for r in disp_rows if get_combo(r).upper().startswith("CARGA VERT")] or disp_rows
    uz_vals = [to_float(r.get("U3") or r.get("Uz")) for r in disp_serv]
    uz_vals = [v for v in uz_vals if v is not None]
    uz_max_abs = max(uz_vals, key=abs) if uz_vals else None

    payload = {
        "exercise": "Guerra MDI Ej.1 - Zapata Aislada Cuadrada",
        "build_method": "BUILD_FROM_API" if BUILD_FROM_API else "OpenFile",
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
