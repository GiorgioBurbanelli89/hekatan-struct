"""EJ.7 NEW Guerra MDI - Viga de Cimentacion (pag.135-148)
L=17.20m, B=1.50m. 4 cols 60x60cm en x=0.30, 5.30, 11.30, 16.90.
f'c=240, q_adm=18, ks=3640.
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
    cPropAreaSpring, eForce, eLength, eTemperature, eMatType,
    eSlabType, eShellType, eLoadPatternType, eItemType, eCNameType,
)

MODEL_PATH = r"C:\CSi_SAFE_API_Example\guerra_ej7.fdb"
RESULTS_JSON = Path(__file__).parent / "results" / "ej7_viga_cimentacion_new.json"
L, B, H_FOOT = 17.20, 1.50, 0.85
COL_SIZE = 0.60
FC_KGCM2, NU, GAMMA_C = 240, 0.20, 2.4
KS_TM3 = 3640
COLS = [
    {"x":  0.30, "P_D": 90.0,  "M_D":  3.0, "P_L": 37.5, "M_L":  1.50},
    {"x":  5.30, "P_D": 130.0, "M_D":  4.0, "P_L": 57.5, "M_L":  2.75},
    {"x": 11.30, "P_D": 145.0, "M_D": -6.0, "P_L": 65.0, "M_L": -3.0},
    {"x": 16.90, "P_D": 95.0,  "M_D": -3.0, "P_L": 33.0, "M_L": -1.50},
]
E_TM2 = 14100.0 * (FC_KGCM2 ** 0.5) * 10.0
FC_TM2 = FC_KGCM2 * 10.0


def main():
    helper = cHelper(Helper())
    mySAFE = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
    mySAFE.ApplicationStart()
    sap = cSapModel(mySAFE.SapModel)
    sap.InitializeNewModel()
    cFile(sap.File).NewBlank()
    sap.SetPresentUnits_2(eForce.tonf, eLength.m, eTemperature.C)

    Mat = cPropMaterial(sap.PropMaterial)
    Mat.SetMaterial("Conc240", eMatType.Concrete)
    Mat.SetMPIsotropic("Conc240", E_TM2, NU, 1.0e-5)
    Mat.SetWeightAndMass("Conc240", 1, GAMMA_C)
    Mat.SetOConcrete("Conc240", FC_TM2, False, 0.0, 1, 1, 0.002, 0.005, 0.0)

    PA = cPropArea(sap.PropArea)
    PA.SetSlab("MAT85", eSlabType.Mat, eShellType.ShellThick, "Conc240", H_FOOT, -1, "", "")

    AO = cAreaObj(sap.AreaObj)
    area_name = ""
    try:
        rt = AO.AddByCoord(4, [0.0, L, L, 0.0], [0.0, 0.0, B, B], [0.0, 0.0, 0.0, 0.0], "", "MAT85", "FOOT", "Global")
        area_name = rt[-1] if isinstance(rt[-1], str) else "FOOT"
    except Exception:
        area_name = "FOOT"
    AO.SetProperty(area_name, "MAT85", eItemType.Objects)

    PAS = cPropAreaSpring(sap.PropAreaSpring)
    PAS.SetAreaSpringProp("SOIL_KS", 0.0, 0.0, KS_TM3, 0, 0, "", 0.0, 0.0, -1, "", "")
    AO.SetSpringAssignment(area_name, "SOIL_KS", eItemType.Objects)

    PO = cPointObj(sap.PointObj)
    LP = cLoadPatterns(sap.LoadPatterns)
    LP.Add("Dead", eLoadPatternType.Dead, 0.0, True); LP.SetSelfWTMultiplier("Dead", 0.0)
    LP.Add("Live", eLoadPatternType.Live, 0.0, True); LP.SetSelfWTMultiplier("Live", 0.0)

    for idx, c in enumerate(COLS):
        pt = ""
        try:
            rt = PO.AddCartesian(c["x"], B/2, 0.0, "", f"COL{idx+1}", "Global", False, 0)
            pt = rt[-1] if isinstance(rt[-1], str) else f"COL{idx+1}"
        except Exception:
            pt = f"COL{idx+1}"
        PO.SetLoadForce(pt, "Dead", [0.0, 0.0, -c["P_D"], 0.0, c["M_D"], 0.0], True, "Global", eItemType.Objects)
        PO.SetLoadForce(pt, "Live", [0.0, 0.0, -c["P_L"], 0.0, c["M_L"], 0.0], True, "Global", eItemType.Objects)

    RC = cCombo(sap.RespCombo)
    for cname, items in [("CARGA VERTICAL",[("Dead",1.0),("Live",1.0)]),
                         ("CARGA ULTIMA",[("Dead",1.4),("Live",1.7)])]:
        RC.Add(cname, 0)
        for c, sf in items:
            RC.SetCaseList(cname, eCNameType.LoadCase, c, sf)

    Path(MODEL_PATH).parent.mkdir(parents=True, exist_ok=True)
    cFile(sap.File).Save(MODEL_PATH)
    Analyze = cAnalyze(sap.Analyze)
    print("Corriendo analysis...")
    ret = Analyze.RunAnalysis()
    print(f"RunAnalysis: ret={ret}")

    db = cDatabaseTables(sap.DatabaseTables)
    def gt(t):
        Tv = 0; FKI = []; nR = 0; Td = []
        try: ret, _, Tv, FKI, nR, Td = db.GetTableForDisplayArray(t, [], "", Tv, FKI, nR, Td)
        except: return []
        if ret != 0 or nR == 0: return []
        f = list(FKI); return [{f[j]: Td[i*len(f)+j] for j in range(len(f))} for i in range(nR)]
    soil = gt("Soil Pressures") or gt("Slab Bearing Pressures")
    def comboof(r): return (r.get("OutputCase") or r.get("Combo") or "").upper()
    def tf(x):
        try: return float(x)
        except: return None
    results = {}
    for label, key in [("servicio","CARGA VERTICAL"),("ultimo","CARGA ULTIMA")]:
        rows = [r for r in soil if comboof(r).startswith(key)]
        vals = [abs(tf(r.get("Pressure") or r.get("SoilPress") or r.get("SoilPressure") or r.get("P"))) for r in rows]
        vals = [v for v in vals if v is not None]
        results[label] = {"sigma_max_tm2": round(max(vals),3) if vals else None,
                          "sigma_min_tm2": round(min(vals),3) if vals else None}
        print(f"  {label}: σ_max={results[label]['sigma_max_tm2']}")
    payload = {"_meta":{"generated_utc":datetime.utcnow().isoformat()+"Z"},
               "exercise":"Guerra Ej.7 NEW Viga Cim L=17.20","results_safe":results}
    RESULTS_JSON.parent.mkdir(parents=True, exist_ok=True)
    with open(RESULTS_JSON,"w",encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"OK -> {RESULTS_JSON}")
    mySAFE.ApplicationExit(False)


if __name__ == "__main__":
    main()
