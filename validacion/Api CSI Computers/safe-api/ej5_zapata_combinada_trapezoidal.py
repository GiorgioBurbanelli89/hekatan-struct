"""
EJERCICIO 5 - Zapata Combinada Trapezoidal (Guerra MDI, pag.93-112)

L=5m, B1=3.75m (col1) → B2=1.60m (col2). h=1.15m.
Cols 50×50cm en x=0.25 (col1) y x=4.75 (col2).
Col 1: P_D=108, M_D=-4.3, P_L=45, M_L=-2
Col 2: P_D=78, M_D=3.2, P_L=36, M_L=2.4
f'c=210, q_adm=20, ks=2920.

NOTA: SAFE-API model arma rectangulo bbox B1×L. Geometria trapezoidal real
requeriría AddByCoord con 4 vertices del trapecio. Simplificacion para validar.
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

MODEL_PATH = r"C:\CSi_SAFE_API_Example\guerra_ej5.fdb"
RESULTS_JSON = Path(__file__).parent / "results" / "ej5_zapata_combinada_trapezoidal.json"
L, B1, B2 = 5.00, 3.75, 1.60
H_FOOT = 1.15
COL_X1, COL_X2 = 0.25, 4.75
COL_SIZE = 0.50
FC_KGCM2, NU, GAMMA_C = 210, 0.20, 2.4
KS_TM3 = 2920
P_D_C1, M_D_C1 = 108.0, -4.3
P_L_C1, M_L_C1 = 45.0, -2.0
P_D_C2, M_D_C2 = 78.0, 3.2
P_L_C2, M_L_C2 = 36.0, 2.4
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
    Mat.SetMaterial("Conc210", eMatType.Concrete)
    Mat.SetMPIsotropic("Conc210", E_TM2, NU, 1.0e-5)
    Mat.SetWeightAndMass("Conc210", 1, GAMMA_C)
    Mat.SetOConcrete("Conc210", FC_TM2, False, 0.0, 1, 1, 0.002, 0.005, 0.0)

    PA = cPropArea(sap.PropArea)
    PA.SetSlab("MAT115", eSlabType.Mat, eShellType.ShellThick, "Conc210", H_FOOT, -1, "", "")

    # Trapecio real: 4 vertices [0, -B1/2], [L, -B2/2], [L, B2/2], [0, B1/2]
    AO = cAreaObj(sap.AreaObj)
    cy = max(B1, B2) / 2
    xs = [0.0, L, L, 0.0]
    ys = [cy - B1/2, cy - B2/2, cy + B2/2, cy + B1/2]
    zs = [0.0, 0.0, 0.0, 0.0]
    area_name = ""
    try:
        rt = AO.AddByCoord(4, xs, ys, zs, area_name, "MAT115", "FOOT", "Global")
        area_name = rt[-1] if isinstance(rt[-1], str) else "FOOT"
    except Exception:
        area_name = "FOOT"
    AO.SetProperty(area_name, "MAT115", eItemType.Objects)

    PAS = cPropAreaSpring(sap.PropAreaSpring)
    PAS.SetAreaSpringProp("SOIL_KS", 0.0, 0.0, KS_TM3, 0, 0, "", 0.0, 0.0, -1, "", "")
    AO.SetSpringAssignment(area_name, "SOIL_KS", eItemType.Objects)

    PO = cPointObj(sap.PointObj)
    pt_names = []
    for label, cx in [("COL1", COL_X1), ("COL2", COL_X2)]:
        try:
            rt = PO.AddCartesian(cx, cy, 0.0, "", label, "Global", False, 0)
            pt_names.append(rt[-1] if isinstance(rt[-1], str) else label)
        except Exception:
            pt_names.append(label)

    LP = cLoadPatterns(sap.LoadPatterns)
    LP.Add("Dead", eLoadPatternType.Dead, 0.0, True)
    LP.SetSelfWTMultiplier("Dead", 0.0)
    LP.Add("Live", eLoadPatternType.Live, 0.0, True)
    LP.SetSelfWTMultiplier("Live", 0.0)
    for pt, P_D, M_D, P_L, M_L in [(pt_names[0], P_D_C1, M_D_C1, P_L_C1, M_L_C1),
                                    (pt_names[1], P_D_C2, M_D_C2, P_L_C2, M_L_C2)]:
        PO.SetLoadForce(pt, "Dead", [0.0, 0.0, -P_D, 0.0, M_D, 0.0], True, "Global", eItemType.Objects)
        PO.SetLoadForce(pt, "Live", [0.0, 0.0, -P_L, 0.0, M_L, 0.0], True, "Global", eItemType.Objects)

    RC = cCombo(sap.RespCombo)
    for cname, items in [("CARGA VERTICAL",[("Dead",1.0),("Live",1.0)]),
                         ("CARGA ULTIMA",[("Dead",1.4),("Live",1.7)])]:
        RC.Add(cname, 0)
        for c, sf in items:
            RC.SetCaseList(cname, eCNameType.LoadCase, c, sf)

    Path(MODEL_PATH).parent.mkdir(parents=True, exist_ok=True)
    File.Save(MODEL_PATH)
    Analyze = cAnalyze(sap.Analyze)
    print("\nCorriendo analysis...")
    ret = Analyze.RunAnalysis()
    print(f"RunAnalysis: ret={ret}")

    db = cDatabaseTables(sap.DatabaseTables)
    def gt(t):
        Tv = 0; FKI = []; nR = 0; Td = []
        try:
            ret, _, Tv, FKI, nR, Td = db.GetTableForDisplayArray(t, [], "", Tv, FKI, nR, Td)
        except Exception: return []
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
               "exercise":"Guerra Ej.5 Trapezoidal","model_path":MODEL_PATH,
               "inputs":{"L":L,"B1":B1,"B2":B2,"h":H_FOOT},
               "results_safe":results}
    RESULTS_JSON.parent.mkdir(parents=True, exist_ok=True)
    with open(RESULTS_JSON,"w",encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"OK -> {RESULTS_JSON}")
    mySAFE.ApplicationExit(False)


if __name__ == "__main__":
    main()
