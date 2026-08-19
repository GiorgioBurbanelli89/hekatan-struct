"""
EJERCICIO 2 - Zapata Aislada Rectangular con Acción Sísmica (Guerra MDI, pag.42-58)

Datos (libro):
  L = 4.60 m, B = 4.00 m (iteracion 2 final del libro)
  h = 0.55 m
  Columna: 1.20 x 0.60 m (rectangular)
  Material:  f'c = 280 kg/cm², gamma_c = 2.4 t/m³, nu = 0.20
  Suelo:     q_adm = 14 t/m²,  ks = 2920 t/m³
  Cargas:
     Dead:  P=91 t,  M=60 t·m  (alrededor del eje Y → variacion en X)
     Live:  P=30 t,  M=36 t·m
     Sismo: P=3 t,   M=9 t·m
  Combos:
     CARGA VERTICAL       = 1.0*D + 1.0*L
     CARGA VERTICAL SISMO = 1.0*D + 1.0*L + 1.0*S
     CARGA ULTIMA         = 1.4*D + 1.7*L
     CARGA ULTIMA SISMO   = 1.2*D + 1.0*L + 1.0*S

NOTA: excentricidad e_DL = 0.79 m > L/6 = 0.65 m → zona de despegue.
SAFE con linear Winkler permite tension; el libro pag.44 usa la formula
"triangular" σ_max = 2P/(3·B·a) donde a = L/2 - e.

Salida: ./results/ej2_zapata_rectangular_sismo.json
"""
import os, sys, json
from datetime import datetime
from pathlib import Path
import clr

clr.AddReference("System.Runtime.InteropServices")
from System.Runtime.InteropServices import Marshal  # noqa

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
MODEL_PATH        = r"C:\CSi_SAFE_API_Example\guerra_ej2.fdb"
ATTACH_TO_RUNNING = False
EXIT_ON_FINISH    = True
RESULTS_JSON      = Path(__file__).parent / "results" / "ej2_zapata_rectangular_sismo.json"
SELF_WEIGHT_MULT  = 1.0

# Geometría
L          = 4.60
B          = 4.00
H_FOOT     = 0.55
COL_X      = 1.20
COL_Y      = 0.60
FC_KGCM2   = 280
NU         = 0.20
GAMMA_C    = 2.4
KS_TM3     = 2920

# Cargas
P_DEAD, M_DEAD = 91.0, 60.0
P_LIVE, M_LIVE = 30.0, 36.0
P_SISMO, M_SISMO = 3.0, 9.0

E_KGCM2 = 14100.0 * (FC_KGCM2 ** 0.5)
E_TM2   = E_KGCM2 * 10.0
FC_TM2  = FC_KGCM2 * 10.0


# ============================================================================
# HELPERS
# ============================================================================
def connect_safe(attach=False):
    helper = cHelper(Helper())
    if attach:
        try:
            mySAFE = cOAPI(helper.GetObject("CSI.SAFE.API.ETABSObject"))
            return cSapModel(mySAFE.SapModel), helper, mySAFE, False
        except Exception:
            pass
    mySAFE = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
    mySAFE.ApplicationStart()
    return cSapModel(mySAFE.SapModel), helper, mySAFE, True


def get_table(sap, table_name):
    db = cDatabaseTables(sap.DatabaseTables)
    TableVersion = 0; FieldsKeysIncluded = []; NumberRecords = 0; TableData = []
    try:
        ret, _, TableVersion, FieldsKeysIncluded, NumberRecords, TableData = \
            db.GetTableForDisplayArray(table_name, [], "",
                                       TableVersion, FieldsKeysIncluded, NumberRecords, TableData)
    except Exception as e:
        return []
    if ret != 0 or NumberRecords == 0:
        return []
    fields = list(FieldsKeysIncluded)
    rows = []
    for i in range(NumberRecords):
        row = {}
        for j, k in enumerate(fields):
            idx = i * len(fields) + j
            row[k] = TableData[idx] if idx < len(TableData) else None
        rows.append(row)
    return rows


def dump_json(out_path, payload):
    Path(out_path).parent.mkdir(parents=True, exist_ok=True)
    header = {
        "_meta": {
            "generated_utc": datetime.utcnow().isoformat() + "Z",
            "tool": "SAFE 20 via Python API",
            "script": Path(sys.argv[0]).name,
            "safe_version": "20",
        },
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump({**header, **payload}, f, indent=2, ensure_ascii=False)
    print(f"OK -> {out_path}")


def _try(label, fn):
    try:
        ret = fn()
        if isinstance(ret, tuple):
            print(f"  [API] {label}: ret={ret[0]}")
        else:
            print(f"  [API] {label}: ret={ret}")
        return ret
    except Exception as e:
        print(f"  [API] {label}: EXCEPTION {e}")
        return None


# ============================================================================
# BUILD MODEL
# ============================================================================
def build(sap):
    print(">>> BUILD Ej.2 zapata rectangular sismo")
    File = cFile(sap.File)
    _try("NewBlank", lambda: File.NewBlank())
    sap.SetPresentUnits_2(eForce.tonf, eLength.m, eTemperature.C)

    # Material
    Mat = cPropMaterial(sap.PropMaterial)
    MAT = "Conc280"
    _try(f"SetMaterial({MAT})", lambda: Mat.SetMaterial(MAT, eMatType.Concrete))
    _try("SetMPIsotropic", lambda: Mat.SetMPIsotropic(MAT, E_TM2, NU, 1.0e-5))
    _try("SetWeightAndMass", lambda: Mat.SetWeightAndMass(MAT, 1, GAMMA_C))
    _try("SetOConcrete", lambda: Mat.SetOConcrete(MAT, FC_TM2, False, 0.0, 1, 1, 0.002, 0.005, 0.0))

    # Slab MAT55
    PA = cPropArea(sap.PropArea)
    SLAB = "MAT55"
    _try("SetSlab Mat ShellThick",
         lambda: PA.SetSlab(SLAB, eSlabType.Mat, eShellType.ShellThick, MAT, H_FOOT, -1, "", ""))

    # Area rectangular L x B
    AO = cAreaObj(sap.AreaObj)
    xs = [0.0, L, L, 0.0]; ys = [0.0, 0.0, B, B]; zs = [0.0, 0.0, 0.0, 0.0]
    area_name = ""
    try:
        ret_tuple = AO.AddByCoord(4, xs, ys, zs, area_name, SLAB, "FOOT", "Global")
        area_name = ret_tuple[-1] if isinstance(ret_tuple[-1], str) else "FOOT"
        print(f"  [API] AddByCoord: area={area_name}")
    except Exception as e:
        print(f"  [API] AddByCoord EXC: {e}")
        area_name = "FOOT"
    _try("SetProperty", lambda: AO.SetProperty(area_name, SLAB, eItemType.Objects))

    # Suelo Winkler ks
    try:
        PAS = cPropAreaSpring(sap.PropAreaSpring)
        PAS.SetAreaSpringProp("SOIL_KS", 0.0, 0.0, KS_TM3, 0, 0, "", 0.0, 0.0, -1, "", "")
        AO.SetSpringAssignment(area_name, "SOIL_KS", eItemType.Objects)
        print(f"  [API] PropAreaSpring SOIL_KS=2920")
    except Exception as e:
        print(f"  [API] Spring fail: {e}")

    # Punto central de columna
    PO = cPointObj(sap.PointObj)
    pt_name = ""
    try:
        ret_tuple = PO.AddCartesian(L/2, B/2, 0.0, pt_name, "COL_CTR", "Global", False, 0)
        pt_name = ret_tuple[-1] if isinstance(ret_tuple[-1], str) else "COL_CTR"
        print(f"  [API] AddCartesian COL_CTR")
    except Exception as e:
        print(f"  [API] AddCartesian EXC: {e}")
        pt_name = "COL_CTR"

    # Load patterns: Dead (selfWt=1), Live, Sismo
    LP = cLoadPatterns(sap.LoadPatterns)
    _try("Add(Dead)", lambda: LP.Add("Dead", eLoadPatternType.Dead, SELF_WEIGHT_MULT, True))
    _try("SetSelfWT(Dead)", lambda: LP.SetSelfWTMultiplier("Dead", SELF_WEIGHT_MULT))
    _try("Add(Live)", lambda: LP.Add("Live", eLoadPatternType.Live, 0.0, True))
    _try("SetSelfWT(Live)", lambda: LP.SetSelfWTMultiplier("Live", 0.0))
    _try("Add(Sismo)", lambda: LP.Add("Sismo", eLoadPatternType.Quake, 0.0, True))
    _try("SetSelfWT(Sismo)", lambda: LP.SetSelfWTMultiplier("Sismo", 0.0))

    # Cargas: My (around Y → variacion en X)
    for name, p_val, m_val in [("Dead", P_DEAD, M_DEAD), ("Live", P_LIVE, M_LIVE), ("Sismo", P_SISMO, M_SISMO)]:
        vals = [0.0, 0.0, -p_val, 0.0, m_val, 0.0]
        _try(f"SetLoadForce({name}, P={p_val}, M={m_val})",
             lambda v=vals, n=name: PO.SetLoadForce(pt_name, n, v, True, "Global", eItemType.Objects))

    # Combos
    RC = cCombo(sap.RespCombo)
    for combo_name, items in [
        ("CARGA VERTICAL",       [("Dead", 1.0), ("Live", 1.0)]),
        ("CARGA VERTICAL SISMO", [("Dead", 1.0), ("Live", 1.0), ("Sismo", 1.0)]),
        ("CARGA ULTIMA",         [("Dead", 1.4), ("Live", 1.7)]),
        ("CARGA ULTIMA SISMO",   [("Dead", 1.2), ("Live", 1.0), ("Sismo", 1.0)]),
    ]:
        _try(f"Combo.Add({combo_name})", lambda c=combo_name: RC.Add(c, 0))
        for case_name, sf in items:
            _try(f"  {combo_name} <- {sf}*{case_name}",
                 lambda c=combo_name, cn=case_name, s=sf: RC.SetCaseList(c, eCNameType.LoadCase, cn, s))

    # Mesh 16x16 via Analysis Options table
    try:
        db = cDatabaseTables(sap.DatabaseTables)
        tname = "Analysis Options - Automatic Mesh Settings for Floors"
        Tver = 0; FKI = []; nR = 0; TData = []
        ret, Tver, FKI, nR, TData = db.GetTableForEditingArray(tname, "", Tver, FKI, nR, TData)
        new_data = list(TData)
        if len(new_data) >= 4:
            new_data[3] = f"{L/16:.6f}"
        ret = db.SetTableForEditingArray(tname, Tver, FKI, max(nR, 1), new_data)
        nFatal=0; nErr=0; nWarn=0; nInfo=0; impLog=""
        ret, nFatal, nErr, nWarn, nInfo, impLog = db.ApplyEditedTables(True, nFatal, nErr, nWarn, nInfo, impLog)
        print(f"  [TBL] Mesh size = L/16 = {L/16:.5f} m, err={nErr}")
    except Exception as e:
        print(f"  [TBL] WARN: {e}")

    Path(MODEL_PATH).parent.mkdir(parents=True, exist_ok=True)
    _try(f"File.Save({MODEL_PATH})", lambda: File.Save(MODEL_PATH))
    print(">>> Modelo OK")
    return area_name, pt_name


# ============================================================================
# MAIN
# ============================================================================
def main():
    sap, helper, mySAFE, started = connect_safe(ATTACH_TO_RUNNING)
    sap.InitializeNewModel()
    build(sap)

    Analyze = cAnalyze(sap.Analyze)
    print("\nCorriendo analysis...")
    ret = Analyze.RunAnalysis()
    print(f"RunAnalysis: ret={ret}")

    # Extract: para cada combo, sigma_max y sigma_min
    soil_rows = (get_table(sap, "Soil Pressures")
                 or get_table(sap, "Slab Bearing Pressures")
                 or get_table(sap, "Soil Bearing Pressures"))
    disp_rows = get_table(sap, "Joint Displacements")

    def to_float(x):
        try: return float(x)
        except: return None

    def get_combo(r):
        return (r.get("OutputCase") or r.get("Combo") or r.get("Load Case/Combo") or "").upper()

    results = {}
    for combo_label, combo_key in [
        ("servicio_DL",  "CARGA VERTICAL"),
        ("servicio_DLS", "CARGA VERTICAL SISMO"),
        ("ultimo_DL",    "CARGA ULTIMA"),
        ("ultimo_DLS",   "CARGA ULTIMA SISMO"),
    ]:
        rows_c = [r for r in soil_rows if get_combo(r).startswith(combo_key)]
        vals = [to_float(r.get("Pressure") or r.get("SoilPress") or r.get("SoilPressure") or r.get("P"))
                for r in rows_c]
        vals = [abs(v) for v in vals if v is not None]
        results[combo_label] = {
            "sigma_max_tm2": max(vals) if vals else None,
            "sigma_min_tm2": min(vals) if vals else None,
            "n_rows": len(rows_c),
        }
        print(f"  {combo_label} ({combo_key}): σ_max={results[combo_label]['sigma_max_tm2']}, σ_min={results[combo_label]['sigma_min_tm2']}")

    payload = {
        "exercise": "Guerra MDI Ej.2 - Zapata Rectangular Sismo",
        "build_method": "BUILD_FROM_API",
        "model_path": MODEL_PATH,
        "inputs": {
            "L_m": L, "B_m": B, "h_m": H_FOOT,
            "col_x_m": COL_X, "col_y_m": COL_Y,
            "fc_kgcm2": FC_KGCM2, "ks_tm3": KS_TM3,
            "P_dead_tonf": P_DEAD, "M_dead_tonfm": M_DEAD,
            "P_live_tonf": P_LIVE, "M_live_tonfm": M_LIVE,
            "P_sismo_tonf": P_SISMO, "M_sismo_tonfm": M_SISMO,
        },
        "results_safe": results,
        "manual_libro": {
            "P_DL_tonf": 121.0, "M_DL_tonfm": 96.0,
            "P_DLS_tonf": 124.0, "M_DLS_tonfm": 105.0,
            "e_DL_m": 0.79, "e_DLS_m": 0.84, "L_sobre_6_m": 0.65,
            "iter1_sigma_max_tm2": 21.07,
        },
    }
    dump_json(RESULTS_JSON, payload)

    if started and EXIT_ON_FINISH:
        mySAFE.ApplicationExit(False)


if __name__ == "__main__":
    main()
