"""EJ.8 Guerra MDI - Losa de Cimentacion / Raft (pag.149-170)
Losa 23x21m con 16 cols (grid 4x4). f'c=240, q_adm=7, ks=1500.
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

MODEL_PATH = r"C:\CSi_SAFE_API_Example\guerra_ej8.fdb"
RESULTS_JSON = Path(__file__).parent / "results" / "ej8_losa_cimentacion.json"
L_TOT, B_TOT = 23.00, 21.00
H_FOOT = 0.80
COL_SIZE = 0.60
FC_KGCM2, NU, GAMMA_C = 240, 0.20, 2.4
KS_TM3 = 1500

# Grid 4x4 con cargas P (Dead) extraidas del libro pag.149
COL_GRID = [
    {"x":  1.00, "y": 19.40, "P": 142}, {"x":  1.00, "y": 14.90, "P": 153},
    {"x":  1.00, "y":  7.10, "P": 112}, {"x":  1.00, "y":  1.60, "P": 107},
    {"x":  7.00, "y": 19.40, "P": 201}, {"x":  7.00, "y": 14.90, "P": 219},
    {"x":  7.00, "y":  7.10, "P": 137}, {"x":  7.00, "y":  1.60, "P": 147},
    {"x": 14.50, "y": 19.40, "P": 233}, {"x": 14.50, "y": 14.90, "P": 253},
    {"x": 14.50, "y":  7.10, "P": 161}, {"x": 14.50, "y":  1.60, "P": 164},
    {"x": 21.50, "y": 19.40, "P": 161}, {"x": 21.50, "y": 14.90, "P": 219},
    {"x": 21.50, "y":  7.10, "P": 129}, {"x": 21.50, "y":  1.60, "P": 129},
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
    PA.SetSlab("MAT80", eSlabType.Mat, eShellType.ShellThick, "Conc240", H_FOOT, -1, "", "")

    AO = cAreaObj(sap.AreaObj)
    area_name = ""
    try:
        rt = AO.AddByCoord(4, [0.0, L_TOT, L_TOT, 0.0], [0.0, 0.0, B_TOT, B_TOT],
                           [0.0, 0.0, 0.0, 0.0], "", "MAT80", "FOOT", "Global")
        area_name = rt[-1] if isinstance(rt[-1], str) else "FOOT"
    except Exception:
        area_name = "FOOT"
    AO.SetProperty(area_name, "MAT80", eItemType.Objects)

    PAS = cPropAreaSpring(sap.PropAreaSpring)
    PAS.SetAreaSpringProp("SOIL_KS", 0.0, 0.0, KS_TM3, 0, 0, "", 0.0, 0.0, -1, "", "")
    AO.SetSpringAssignment(area_name, "SOIL_KS", eItemType.Objects)

    PO = cPointObj(sap.PointObj)
    LP = cLoadPatterns(sap.LoadPatterns)
    LP.Add("Dead", eLoadPatternType.Dead, 0.0, True); LP.SetSelfWTMultiplier("Dead", 0.0)

    for idx, c in enumerate(COL_GRID):
        try:
            rt = PO.AddCartesian(c["x"], c["y"], 0.0, "", f"COL{idx+1:02d}", "Global", False, 0)
            pt = rt[-1] if isinstance(rt[-1], str) else f"COL{idx+1:02d}"
        except Exception:
            pt = f"COL{idx+1:02d}"
        PO.SetLoadForce(pt, "Dead", [0.0, 0.0, -c["P"], 0.0, 0.0, 0.0], True, "Global", eItemType.Objects)

    RC = cCombo(sap.RespCombo)
    RC.Add("CARGA VERTICAL", 0)
    RC.SetCaseList("CARGA VERTICAL", eCNameType.LoadCase, "Dead", 1.0)

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
    def tf(x):
        try: return float(x)
        except: return None
    vals = [abs(tf(r.get("Pressure") or r.get("SoilPress") or r.get("SoilPressure") or r.get("P"))) for r in soil]
    vals = [v for v in vals if v is not None]
    results = {"sigma_max_tm2": round(max(vals),3) if vals else None,
               "sigma_min_tm2": round(min(vals),3) if vals else None,
               "n_rows": len(soil)}
    print(f"σ_max={results['sigma_max_tm2']}, σ_min={results['sigma_min_tm2']}")
    payload = {"_meta":{"generated_utc":datetime.utcnow().isoformat()+"Z"},
               "exercise":"Guerra Ej.8 Losa Cimentacion (Raft 23x21m, 16 cols)",
               "results_safe":results}
    RESULTS_JSON.parent.mkdir(parents=True, exist_ok=True)
    with open(RESULTS_JSON,"w",encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"OK -> {RESULTS_JSON}")
    mySAFE.ApplicationExit(False)


if __name__ == "__main__":
    main()
