"""EJ.6 Guerra MDI - Zapata unida con viga de amarre (pag.113-130)
2 zapatas separadas conectadas por viga. Cols 50x50, P1=110t, P2=140t. f'c=290.
SIMPLIFICACION: modelado como un area combinada larga (5.5x3.15m) con 2 cols.
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

MODEL_PATH = r"C:\CSi_SAFE_API_Example\guerra_ej6.fdb"
RESULTS_JSON = Path(__file__).parent / "results" / "ej6_zapata_unida_viga_amarre.json"
L, B = 5.50, 3.15
H_FOOT = 0.50
COL_X1, COL_X2 = 0.25, 5.25
COL_SIZE = 0.50
FC_KGCM2, NU, GAMMA_C = 290, 0.20, 2.4
KS_TM3 = 3800
P_COL1 = 110.0
P_COL2 = 140.0
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
    Mat.SetMaterial("Conc290", eMatType.Concrete)
    Mat.SetMPIsotropic("Conc290", E_TM2, NU, 1.0e-5)
    Mat.SetWeightAndMass("Conc290", 1, GAMMA_C)
    Mat.SetOConcrete("Conc290", FC_TM2, False, 0.0, 1, 1, 0.002, 0.005, 0.0)

    PA = cPropArea(sap.PropArea)
    PA.SetSlab("MAT50", eSlabType.Mat, eShellType.ShellThick, "Conc290", H_FOOT, -1, "", "")

    AO = cAreaObj(sap.AreaObj)
    area_name = ""
    try:
        rt = AO.AddByCoord(4, [0.0, L, L, 0.0], [0.0, 0.0, B, B], [0.0, 0.0, 0.0, 0.0], "", "MAT50", "FOOT", "Global")
        area_name = rt[-1] if isinstance(rt[-1], str) else "FOOT"
    except Exception:
        area_name = "FOOT"
    AO.SetProperty(area_name, "MAT50", eItemType.Objects)

    PAS = cPropAreaSpring(sap.PropAreaSpring)
    PAS.SetAreaSpringProp("SOIL_KS", 0.0, 0.0, KS_TM3, 0, 0, "", 0.0, 0.0, -1, "", "")
    AO.SetSpringAssignment(area_name, "SOIL_KS", eItemType.Objects)

    PO = cPointObj(sap.PointObj)
    pts = []
    for label, cx in [("COL1", COL_X1), ("COL2", COL_X2)]:
        try:
            rt = PO.AddCartesian(cx, B/2, 0.0, "", label, "Global", False, 0)
            pts.append(rt[-1] if isinstance(rt[-1], str) else label)
        except Exception:
            pts.append(label)

    LP = cLoadPatterns(sap.LoadPatterns)
    LP.Add("Dead", eLoadPatternType.Dead, 0.0, True)
    LP.SetSelfWTMultiplier("Dead", 0.0)
    PO.SetLoadForce(pts[0], "Dead", [0.0, 0.0, -P_COL1, 0.0, 0.0, 0.0], True, "Global", eItemType.Objects)
    PO.SetLoadForce(pts[1], "Dead", [0.0, 0.0, -P_COL2, 0.0, 0.0, 0.0], True, "Global", eItemType.Objects)

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
               "sigma_min_tm2": round(min(vals),3) if vals else None}
    print(f"σ_max={results['sigma_max_tm2']}")
    payload = {"_meta":{"generated_utc":datetime.utcnow().isoformat()+"Z"},
               "exercise":"Guerra Ej.6 Zapata Unida Viga Amarre",
               "results_safe":results}
    RESULTS_JSON.parent.mkdir(parents=True, exist_ok=True)
    with open(RESULTS_JSON, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"OK -> {RESULTS_JSON}")
    mySAFE.ApplicationExit(False)


if __name__ == "__main__":
    main()
