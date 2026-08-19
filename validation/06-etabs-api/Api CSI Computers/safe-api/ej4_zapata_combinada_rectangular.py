"""
EJERCICIO 4 - Zapata Combinada Rectangular (Guerra MDI, pag.74-90)

Datos:
  L = 7.50 m, B = 2.50 m (iter final), h = 0.50 m
  2 Columnas 0.45x0.45 cm en x=1.00m y x=6.50m (distancia entre ejes = 5.50m)
  Col 1: P_D=90, M_D=7, P_L=23, M_L=3 (tonf, tonf·m)
  Col 2: P_D=100, M_D=14, P_L=30, M_L=4
  f'c=240, q_adm=18, ks=3640
"""
import sys, json
from datetime import datetime
from pathlib import Path
import clr
clr.AddReference("System.Runtime.InteropServices")
clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import (
    cHelper, Helper, cOAPI, cSapModel, cFile, cAnalyze, cDatabaseTables,
    cPropMaterial, cPropArea, cAreaObj, cPointObj, cLoadPatterns, cCombo,
    cPropAreaSpring,
    eForce, eLength, eTemperature, eMatType, eSlabType, eShellType,
    eLoadPatternType, eItemType, eCNameType,
)

MODEL_PATH = r"C:\CSi_SAFE_API_Example\guerra_ej4.fdb"
RESULTS_JSON = Path(__file__).parent / "results" / "ej4_zapata_combinada_rectangular.json"
L, B, H_FOOT = 7.50, 2.50, 0.50
COL_X1, COL_X2 = 1.00, 6.50
COL_SIZE = 0.45
FC_KGCM2, NU, GAMMA_C = 240, 0.20, 2.4
KS_TM3 = 3640
P_D_C1, M_D_C1 = 90.0, 7.0
P_L_C1, M_L_C1 = 23.0, 3.0
P_D_C2, M_D_C2 = 100.0, 14.0
P_L_C2, M_L_C2 = 30.0, 4.0
SELF_WEIGHT_MULT = 0.0  # Libro pag.74: "sin tomar en cuenta el peso propio"

E_TM2 = 14100.0 * (FC_KGCM2 ** 0.5) * 10.0
FC_TM2 = FC_KGCM2 * 10.0


def _try(label, fn):
    try:
        ret = fn()
        if isinstance(ret, tuple): print(f"  {label}: ret={ret[0]}")
        else: print(f"  {label}: ret={ret}")
        return ret
    except Exception as e:
        print(f"  {label}: EXC {e}")


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
    _try("Material", lambda: Mat.SetMaterial("Conc240", eMatType.Concrete))
    _try("MPIso", lambda: Mat.SetMPIsotropic("Conc240", E_TM2, NU, 1.0e-5))
    _try("Weight", lambda: Mat.SetWeightAndMass("Conc240", 1, GAMMA_C))
    _try("OConcrete", lambda: Mat.SetOConcrete("Conc240", FC_TM2, False, 0.0, 1, 1, 0.002, 0.005, 0.0))

    PA = cPropArea(sap.PropArea)
    _try("Slab", lambda: PA.SetSlab("MAT50", eSlabType.Mat, eShellType.ShellThick, "Conc240", H_FOOT, -1, "", ""))

    AO = cAreaObj(sap.AreaObj)
    area_name = ""
    try:
        rt = AO.AddByCoord(4, [0.0, L, L, 0.0], [0.0, 0.0, B, B], [0.0, 0.0, 0.0, 0.0], area_name, "MAT50", "FOOT", "Global")
        area_name = rt[-1] if isinstance(rt[-1], str) else "FOOT"
    except Exception:
        area_name = "FOOT"
    _try("SetProperty", lambda: AO.SetProperty(area_name, "MAT50", eItemType.Objects))

    PAS = cPropAreaSpring(sap.PropAreaSpring)
    PAS.SetAreaSpringProp("SOIL_KS", 0.0, 0.0, KS_TM3, 0, 0, "", 0.0, 0.0, -1, "", "")
    AO.SetSpringAssignment(area_name, "SOIL_KS", eItemType.Objects)

    PO = cPointObj(sap.PointObj)
    # 2 puntos columna
    pt_names = []
    for label, (cx, cy) in [("COL1", (COL_X1, B/2)), ("COL2", (COL_X2, B/2))]:
        pt_name = ""
        try:
            rt = PO.AddCartesian(cx, cy, 0.0, pt_name, label, "Global", False, 0)
            pt_name = rt[-1] if isinstance(rt[-1], str) else label
        except Exception:
            pt_name = label
        pt_names.append(pt_name)

    LP = cLoadPatterns(sap.LoadPatterns)
    _try("AddDead", lambda: LP.Add("Dead", eLoadPatternType.Dead, SELF_WEIGHT_MULT, True))
    _try("SetSW Dead", lambda: LP.SetSelfWTMultiplier("Dead", SELF_WEIGHT_MULT))
    _try("AddLive", lambda: LP.Add("Live", eLoadPatternType.Live, 0.0, True))
    _try("SetSW Live", lambda: LP.SetSelfWTMultiplier("Live", 0.0))

    # Cargas COL1
    for name, p_val, m_val in [("Dead", P_D_C1, M_D_C1), ("Live", P_L_C1, M_L_C1)]:
        vals = [0.0, 0.0, -p_val, 0.0, m_val, 0.0]
        _try(f"  COL1 SetLoadForce({name})",
             lambda v=vals, n=name: PO.SetLoadForce(pt_names[0], n, v, True, "Global", eItemType.Objects))
    # Cargas COL2
    for name, p_val, m_val in [("Dead", P_D_C2, M_D_C2), ("Live", P_L_C2, M_L_C2)]:
        vals = [0.0, 0.0, -p_val, 0.0, m_val, 0.0]
        _try(f"  COL2 SetLoadForce({name})",
             lambda v=vals, n=name: PO.SetLoadForce(pt_names[1], n, v, True, "Global", eItemType.Objects))

    RC = cCombo(sap.RespCombo)
    for cname, items in [
        ("CARGA VERTICAL", [("Dead", 1.0), ("Live", 1.0)]),
        ("CARGA ULTIMA",   [("Dead", 1.4), ("Live", 1.7)]),
    ]:
        _try(f"Add({cname})", lambda c=cname: RC.Add(c, 0))
        for case, sf in items:
            _try(f"  {cname} <- {sf}*{case}",
                 lambda c=cname, cn=case, s=sf: RC.SetCaseList(c, eCNameType.LoadCase, cn, s))

    # Mesh
    try:
        db = cDatabaseTables(sap.DatabaseTables)
        tname = "Analysis Options - Automatic Mesh Settings for Floors"
        Tv = 0; FKI = []; nR = 0; Td = []
        ret, Tv, FKI, nR, Td = db.GetTableForEditingArray(tname, "", Tv, FKI, nR, Td)
        new = list(Td)
        if len(new) >= 4: new[3] = f"{B/8:.6f}"  # mesh ~B/8 fine
        db.SetTableForEditingArray(tname, Tv, FKI, max(nR, 1), new)
        db.ApplyEditedTables(True, 0, 0, 0, 0, "")
        print(f"  Mesh = B/8 = {B/8:.4f} m")
    except Exception as e:
        print(f"  Mesh warn: {e}")

    Path(MODEL_PATH).parent.mkdir(parents=True, exist_ok=True)
    File.Save(MODEL_PATH)
    Analyze = cAnalyze(sap.Analyze)
    print("\nCorriendo analysis...")
    ret = Analyze.RunAnalysis()
    print(f"RunAnalysis: ret={ret}")

    def get_table(tname):
        db = cDatabaseTables(sap.DatabaseTables)
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

    soil_rows = (get_table("Soil Pressures") or get_table("Slab Bearing Pressures"))
    def get_combo(r): return (r.get("OutputCase") or r.get("Combo") or r.get("Load Case/Combo") or "").upper()
    def to_float(x):
        try: return float(x)
        except: return None

    results = {}
    for label, key in [("servicio","CARGA VERTICAL"), ("ultimo","CARGA ULTIMA")]:
        rows_c = [r for r in soil_rows if get_combo(r).startswith(key)]
        vals = [to_float(r.get("Pressure") or r.get("SoilPress") or r.get("SoilPressure") or r.get("P")) for r in rows_c]
        vals = [abs(v) for v in vals if v is not None]
        results[label] = {
            "sigma_max_tm2": round(max(vals), 3) if vals else None,
            "sigma_min_tm2": round(min(vals), 3) if vals else None,
            "n_rows": len(rows_c),
        }
        print(f"  {label} ({key}): σ_max={results[label]['sigma_max_tm2']}, σ_min={results[label]['sigma_min_tm2']}")

    payload = {
        "_meta": {"generated_utc": datetime.utcnow().isoformat()+"Z"},
        "exercise": "Guerra Ej.4 - Zapata Combinada Rectangular",
        "model_path": MODEL_PATH,
        "inputs": {"L_m": L, "B_m": B, "h_m": H_FOOT, "col_size_m": COL_SIZE,
                   "col1_x_m": COL_X1, "col2_x_m": COL_X2,
                   "fc_kgcm2": FC_KGCM2, "ks_tm3": KS_TM3,
                   "P_D_C1_tonf": P_D_C1, "M_D_C1_tonfm": M_D_C1,
                   "P_L_C1_tonf": P_L_C1, "M_L_C1_tonfm": M_L_C1,
                   "P_D_C2_tonf": P_D_C2, "M_D_C2_tonfm": M_D_C2,
                   "P_L_C2_tonf": P_L_C2, "M_L_C2_tonfm": M_L_C2},
        "results_safe": results,
        "manual_libro": {"sigma_max_servicio_tm2": 16.018, "sigma_min_servicio_tm2": 9.901},
    }
    RESULTS_JSON.parent.mkdir(parents=True, exist_ok=True)
    with open(RESULTS_JSON, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"OK -> {RESULTS_JSON}")
    mySAFE.ApplicationExit(False)


if __name__ == "__main__":
    main()
