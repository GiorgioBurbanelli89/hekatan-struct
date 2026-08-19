"""
EJERCICIO 3 - Zapata Rectangular EXCENTRICIDAD GRANDE (Guerra MDI, pag. 69-72)

Mismas dimensiones que Ej.2 (L=4.60, B=4.00) pero M_live mucho mayor (96 vs 36)
y q_adm=20 (vs 14). Excentricidad e_DL=1.289m >> L/6=0.767m.

Cargas:
  Dead:  P=91 t,  M=60 t·m
  Live:  P=30 t,  M=96 t·m  (M MUCHO MAYOR vs Ej.2)
  Sismo: P=3 t,   M=9 t·m
"""
import os, sys, json
from datetime import datetime
from pathlib import Path
import clr

clr.AddReference("System.Runtime.InteropServices")
SAFE_DLL = r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll"
clr.AddReference(SAFE_DLL)
from SAFEv1 import (
    cHelper, Helper, cOAPI, cSapModel, cFile, cAnalyze, cDatabaseTables,
    cPropMaterial, cPropArea, cAreaObj, cPointObj, cLoadPatterns, cCombo,
    cPropAreaSpring,
    eForce, eLength, eTemperature, eMatType, eSlabType, eShellType,
    eLoadPatternType, eItemType, eCNameType,
)

MODEL_PATH = r"C:\CSi_SAFE_API_Example\guerra_ej3.fdb"
RESULTS_JSON = Path(__file__).parent / "results" / "ej3_zapata_rectangular_ecc_grande.json"

L, B, H_FOOT = 4.60, 4.00, 0.55
COL_X, COL_Y = 1.20, 0.60
FC_KGCM2, NU, GAMMA_C = 280, 0.20, 2.4
KS_TM3 = 4400
P_DEAD, M_DEAD   = 91.0, 60.0
P_LIVE, M_LIVE   = 30.0, 96.0   # M mucho mayor que Ej.2
P_SISMO, M_SISMO = 3.0, 9.0
SELF_WEIGHT_MULT = 1.0

E_KGCM2 = 14100.0 * (FC_KGCM2 ** 0.5)
E_TM2 = E_KGCM2 * 10.0
FC_TM2 = FC_KGCM2 * 10.0


def _try(label, fn):
    try:
        ret = fn()
        if isinstance(ret, tuple):
            print(f"  [API] {label}: ret={ret[0]}")
        else:
            print(f"  [API] {label}: ret={ret}")
        return ret
    except Exception as e:
        print(f"  [API] {label}: EXC {e}")


def main():
    helper = cHelper(Helper())
    mySAFE = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
    mySAFE.ApplicationStart()
    sap = cSapModel(mySAFE.SapModel)
    sap.InitializeNewModel()
    File = cFile(sap.File)
    _try("NewBlank", lambda: File.NewBlank())
    sap.SetPresentUnits_2(eForce.tonf, eLength.m, eTemperature.C)

    Mat = cPropMaterial(sap.PropMaterial)
    _try("SetMaterial", lambda: Mat.SetMaterial("Conc280", eMatType.Concrete))
    _try("SetMPIsotropic", lambda: Mat.SetMPIsotropic("Conc280", E_TM2, NU, 1.0e-5))
    _try("SetWeightAndMass", lambda: Mat.SetWeightAndMass("Conc280", 1, GAMMA_C))
    _try("SetOConcrete", lambda: Mat.SetOConcrete("Conc280", FC_TM2, False, 0.0, 1, 1, 0.002, 0.005, 0.0))

    PA = cPropArea(sap.PropArea)
    _try("SetSlab", lambda: PA.SetSlab("MAT55", eSlabType.Mat, eShellType.ShellThick, "Conc280", H_FOOT, -1, "", ""))

    AO = cAreaObj(sap.AreaObj)
    area_name = ""
    try:
        ret_tuple = AO.AddByCoord(4, [0.0, L, L, 0.0], [0.0, 0.0, B, B], [0.0, 0.0, 0.0, 0.0], area_name, "MAT55", "FOOT", "Global")
        area_name = ret_tuple[-1] if isinstance(ret_tuple[-1], str) else "FOOT"
    except Exception:
        area_name = "FOOT"
    _try("SetProperty", lambda: AO.SetProperty(area_name, "MAT55", eItemType.Objects))

    PAS = cPropAreaSpring(sap.PropAreaSpring)
    PAS.SetAreaSpringProp("SOIL_KS", 0.0, 0.0, KS_TM3, 0, 0, "", 0.0, 0.0, -1, "", "")
    AO.SetSpringAssignment(area_name, "SOIL_KS", eItemType.Objects)

    PO = cPointObj(sap.PointObj)
    pt_name = ""
    try:
        ret_tuple = PO.AddCartesian(L/2, B/2, 0.0, pt_name, "COL_CTR", "Global", False, 0)
        pt_name = ret_tuple[-1] if isinstance(ret_tuple[-1], str) else "COL_CTR"
    except Exception:
        pt_name = "COL_CTR"

    LP = cLoadPatterns(sap.LoadPatterns)
    _try("Add Dead", lambda: LP.Add("Dead", eLoadPatternType.Dead, SELF_WEIGHT_MULT, True))
    _try("SetSelfWT Dead", lambda: LP.SetSelfWTMultiplier("Dead", SELF_WEIGHT_MULT))
    _try("Add Live", lambda: LP.Add("Live", eLoadPatternType.Live, 0.0, True))
    _try("SetSelfWT Live", lambda: LP.SetSelfWTMultiplier("Live", 0.0))
    _try("Add Sismo", lambda: LP.Add("Sismo", eLoadPatternType.Quake, 0.0, True))
    _try("SetSelfWT Sismo", lambda: LP.SetSelfWTMultiplier("Sismo", 0.0))

    for name, p_val, m_val in [("Dead", P_DEAD, M_DEAD), ("Live", P_LIVE, M_LIVE), ("Sismo", P_SISMO, M_SISMO)]:
        vals = [0.0, 0.0, -p_val, 0.0, m_val, 0.0]
        _try(f"SetLoadForce({name})",
             lambda v=vals, n=name: PO.SetLoadForce(pt_name, n, v, True, "Global", eItemType.Objects))

    RC = cCombo(sap.RespCombo)
    for combo_name, items in [
        ("CARGA VERTICAL",       [("Dead", 1.0), ("Live", 1.0)]),
        ("CARGA VERTICAL SISMO", [("Dead", 1.0), ("Live", 1.0), ("Sismo", 1.0)]),
        ("CARGA ULTIMA",         [("Dead", 1.4), ("Live", 1.7)]),
        ("CARGA ULTIMA SISMO",   [("Dead", 1.2), ("Live", 1.0), ("Sismo", 1.0)]),
    ]:
        _try(f"Combo.Add({combo_name})", lambda c=combo_name: RC.Add(c, 0))
        for case, sf in items:
            _try(f"  {combo_name} <- {sf}*{case}",
                 lambda c=combo_name, cn=case, s=sf: RC.SetCaseList(c, eCNameType.LoadCase, cn, s))

    # Mesh L/16
    try:
        db = cDatabaseTables(sap.DatabaseTables)
        tname = "Analysis Options - Automatic Mesh Settings for Floors"
        Tver = 0; FKI = []; nR = 0; TData = []
        ret, Tver, FKI, nR, TData = db.GetTableForEditingArray(tname, "", Tver, FKI, nR, TData)
        new_data = list(TData)
        if len(new_data) >= 4:
            new_data[3] = f"{L/16:.6f}"
        db.SetTableForEditingArray(tname, Tver, FKI, max(nR, 1), new_data)
        db.ApplyEditedTables(True, 0, 0, 0, 0, "")
        print(f"  Mesh = L/16 = {L/16:.5f} m")
    except Exception as e:
        print(f"  Mesh warn: {e}")

    Path(MODEL_PATH).parent.mkdir(parents=True, exist_ok=True)
    File.Save(MODEL_PATH)
    print(f"\nCorriendo analysis...")
    Analyze = cAnalyze(sap.Analyze)
    ret = Analyze.RunAnalysis()
    print(f"RunAnalysis: ret={ret}")

    db = cDatabaseTables(sap.DatabaseTables)
    def get_table(tname):
        Tv = 0; FKI = []; nR = 0; Td = []
        try:
            ret, _, Tv, FKI, nR, Td = db.GetTableForDisplayArray(tname, [], "", Tv, FKI, nR, Td)
        except Exception:
            return []
        if ret != 0 or nR == 0: return []
        f = list(FKI); rows = []
        for i in range(nR):
            row = {f[j]: Td[i*len(f)+j] for j in range(len(f))}
            rows.append(row)
        return rows

    soil_rows = (get_table("Soil Pressures") or get_table("Slab Bearing Pressures")
                 or get_table("Soil Bearing Pressures"))

    def get_combo_name(r):
        return (r.get("OutputCase") or r.get("Combo") or r.get("Load Case/Combo") or "").upper()
    def to_float(x):
        try: return float(x)
        except: return None

    results = {}
    for label, key in [("servicio_DL","CARGA VERTICAL"),("servicio_DLS","CARGA VERTICAL SISMO"),
                       ("ultimo_DL","CARGA ULTIMA"),("ultimo_DLS","CARGA ULTIMA SISMO")]:
        rows_c = [r for r in soil_rows if get_combo_name(r).startswith(key)]
        vals = [to_float(r.get("Pressure") or r.get("SoilPress") or r.get("SoilPressure") or r.get("P"))
                for r in rows_c]
        vals = [abs(v) for v in vals if v is not None]
        results[label] = {
            "sigma_max_tm2": round(max(vals), 3) if vals else None,
            "sigma_min_tm2": round(min(vals), 3) if vals else None,
            "n_rows": len(rows_c),
        }
        print(f"  {label} ({key}): σ_max={results[label]['sigma_max_tm2']}, σ_min={results[label]['sigma_min_tm2']}")

    payload = {
        "_meta": {"generated_utc": datetime.utcnow().isoformat()+"Z", "tool": "SAFE 20 API"},
        "exercise": "Guerra Ej.3 - Zapata Rectangular EXCENTRICIDAD GRANDE",
        "model_path": MODEL_PATH,
        "inputs": {"L_m": L, "B_m": B, "h_m": H_FOOT, "col_x_m": COL_X, "col_y_m": COL_Y,
                   "fc_kgcm2": FC_KGCM2, "ks_tm3": KS_TM3,
                   "P_dead_tonf": P_DEAD, "M_dead_tonfm": M_DEAD,
                   "P_live_tonf": P_LIVE, "M_live_tonfm": M_LIVE,
                   "P_sismo_tonf": P_SISMO, "M_sismo_tonfm": M_SISMO},
        "results_safe": results,
        "manual_libro": {"e_DL_m": 1.289, "e_DLS_m": 1.331, "L_sobre_6_m": 0.767},
    }
    RESULTS_JSON.parent.mkdir(parents=True, exist_ok=True)
    with open(RESULTS_JSON, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"OK -> {RESULTS_JSON}")
    mySAFE.ApplicationExit(False)


if __name__ == "__main__":
    main()
