"""
EJ.6 Guerra MDI (pag.113-130) — ZAPATA UNIDA CON VIGA DE AMARRE

Build SAFE 20 model via API matching exactly libro Fig.163:
  Zapata 1 (medianera 2.38x3.00m):
    Col1 50x50cm en Left=0.25 Right=2.13 Top=Bottom=1.5
    Loads: P_D=70 P_L=40 Mx=My=0
  Zapata 2 (interna 2.45x2.45m, col centrada):
    Loads: P_D=89 P_L=51 Mx=My=0
  Viga amarre: V45x95cm conectando Col1 ↔ Col2 directamente al nivel zapata
  Material: f'c=210 kg/cm²
  Suelo: ks=3820 Tonf/m³

Despues de build + run analysis:
  - Cierra API (ApplicationExit)
  - Lanza SAFE.exe detached con el .fdb → queda abierta independiente

Output: results/ej6_zapata_unida_viga_amarre.json
"""
import os, sys, json, subprocess, time
from datetime import datetime
from pathlib import Path
import clr

clr.AddReference("System.Runtime.InteropServices")
SAFE_DLL = r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll"
SAFE_EXE = r"C:\Program Files\Computers and Structures\SAFE 20\SAFE.exe"
clr.AddReference(SAFE_DLL)
from SAFEv1 import (
    cHelper, Helper, cOAPI, cSapModel, cFile, cAnalyze, cDatabaseTables,
    cPropMaterial, cPropArea, cAreaObj, cPointObj, cLoadPatterns, cCombo,
    cPropAreaSpring, cPropFrame, cFrameObj,
    eForce, eLength, eTemperature, eMatType,
    eSlabType, eShellType, eLoadPatternType, eItemType, eCNameType,
)

# ====================================================================
# CONFIG (libro Fig.163)
# ====================================================================
MODEL_PATH = r"C:\CSi_SAFE_API_Example\guerra_ej6.fdb"
RESULTS_JSON = Path(__file__).parent / "results" / "ej6_zapata_unida_viga_amarre.json"

# Z1 (medianera)
L1, B1 = 2.38, 3.00
COL1_X_LOCAL, COL1_Y_LOCAL = 0.25, 1.5   # left=0.25, top=1.5 from origin
# Z2 (interna)
L2, B2 = 2.45, 2.45
COL2_X_LOCAL, COL2_Y_LOCAL = L2/2, B2/2   # centrada
# Viga amarre
L_VIGA = 1.64                              # longitud viga entre zapatas
B_VIGA, H_VIGA = 0.45, 0.95                # seccion viga V45x95cm
# Z2 offset global
Z2_X_OFFSET = L1 + L_VIGA
Z2_Y_OFFSET = (B1 - B2) / 2                # alinear centros vertical

# Material
H_ZAPATA = 0.55
FC_KGCM2 = 210
NU = 0.20
GAMMA_C = 2.4   # tonf/m³
KS_TM3 = 3820   # tonf/m³

# Loads
P_D_C1, P_L_C1 = 70.0, 40.0
P_D_C2, P_L_C2 = 89.0, 51.0
SELF_WT = 0.0   # libro no considera peso propio

# Derived
E_TM2 = 14100.0 * (FC_KGCM2 ** 0.5) * 10.0
FC_TM2 = FC_KGCM2 * 10.0

print(f"=== EJ.6 Guerra MDI - SAFE API build ===")
print(f"  Z1: {L1}×{B1}m, Col1 LOCAL ({COL1_X_LOCAL}, {COL1_Y_LOCAL})")
print(f"  Z2: {L2}×{B2}m offset (+{Z2_X_OFFSET}, +{Z2_Y_OFFSET})")
print(f"  Col2 GLOBAL: ({Z2_X_OFFSET + COL2_X_LOCAL}, {Z2_Y_OFFSET + COL2_Y_LOCAL})")
print(f"  Viga V{B_VIGA*100:.0f}x{H_VIGA*100:.0f}cm L={L_VIGA}m")
print(f"  ks={KS_TM3}, h_zapata={H_ZAPATA}, f'c={FC_KGCM2}")


def _try(label, fn):
    try:
        ret = fn()
        if isinstance(ret, tuple): print(f"  {label}: ret={ret[0]}")
        else: print(f"  {label}: ret={ret}")
        return ret
    except Exception as e:
        print(f"  {label}: EXC {e}")


def build_and_run():
    helper = cHelper(Helper())
    mySAFE = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
    mySAFE.ApplicationStart()
    sap = cSapModel(mySAFE.SapModel)
    sap.InitializeNewModel()
    File = cFile(sap.File); File.NewBlank()
    sap.SetPresentUnits_2(eForce.tonf, eLength.m, eTemperature.C)

    # --- Material ---
    Mat = cPropMaterial(sap.PropMaterial)
    _try("SetMaterial Conc210", lambda: Mat.SetMaterial("Conc210", eMatType.Concrete))
    _try("SetMPIsotropic", lambda: Mat.SetMPIsotropic("Conc210", E_TM2, NU, 1.0e-5))
    _try("SetWeight", lambda: Mat.SetWeightAndMass("Conc210", 1, GAMMA_C))
    _try("SetOConcrete", lambda: Mat.SetOConcrete("Conc210", FC_TM2, False, 0.0, 1, 1, 0.002, 0.005, 0.0))

    # --- Slab ShellThick h=0.55 ---
    PA = cPropArea(sap.PropArea)
    _try("SetSlab MAT55", lambda: PA.SetSlab("MAT55", eSlabType.Mat, eShellType.ShellThick, "Conc210", H_ZAPATA, -1, "", ""))

    # --- Z1 area ---
    AO = cAreaObj(sap.AreaObj)
    z1_name = ""
    xs1 = [0.0, L1, L1, 0.0]
    ys1 = [0.0, 0.0, B1, B1]
    zs1 = [0.0, 0.0, 0.0, 0.0]
    try:
        rt = AO.AddByCoord(4, xs1, ys1, zs1, z1_name, "MAT55", "Z1_MEDIANERA", "Global")
        z1_name = rt[-1] if isinstance(rt[-1], str) else "Z1_MEDIANERA"
        print(f"  AreaObj Z1: {z1_name}")
    except Exception as e:
        print(f"  Z1 EXC: {e}")
        z1_name = "Z1_MEDIANERA"
    _try("SetProperty Z1", lambda: AO.SetProperty(z1_name, "MAT55", eItemType.Objects))

    # --- Z2 area (offset) ---
    z2_name = ""
    xs2 = [Z2_X_OFFSET, Z2_X_OFFSET + L2, Z2_X_OFFSET + L2, Z2_X_OFFSET]
    ys2 = [Z2_Y_OFFSET, Z2_Y_OFFSET, Z2_Y_OFFSET + B2, Z2_Y_OFFSET + B2]
    zs2 = [0.0, 0.0, 0.0, 0.0]
    try:
        rt = AO.AddByCoord(4, xs2, ys2, zs2, z2_name, "MAT55", "Z2_INTERNA", "Global")
        z2_name = rt[-1] if isinstance(rt[-1], str) else "Z2_INTERNA"
        print(f"  AreaObj Z2: {z2_name}")
    except Exception as e:
        print(f"  Z2 EXC: {e}")
        z2_name = "Z2_INTERNA"
    _try("SetProperty Z2", lambda: AO.SetProperty(z2_name, "MAT55", eItemType.Objects))

    # --- Winkler springs en ambas zapatas ---
    PAS = cPropAreaSpring(sap.PropAreaSpring)
    _try("PropAreaSpring SOIL_KS",
         lambda: PAS.SetAreaSpringProp("SOIL_KS", 0.0, 0.0, KS_TM3, 0, 0, "", 0.0, 0.0, -1, "", ""))
    _try("SetSpring Z1", lambda: AO.SetSpringAssignment(z1_name, "SOIL_KS", eItemType.Objects))
    _try("SetSpring Z2", lambda: AO.SetSpringAssignment(z2_name, "SOIL_KS", eItemType.Objects))

    # --- Viga amarre V45x95 ---
    PF = cPropFrame(sap.PropFrame)
    _try("PropFrame V45X95 (B,H rect)",
         lambda: PF.SetRectangle("V45X95", "Conc210", H_VIGA, B_VIGA, -1, "", ""))

    # --- Cols como puntos GLOBALES ---
    PO = cPointObj(sap.PointObj)
    col1_x_global = COL1_X_LOCAL
    col1_y_global = COL1_Y_LOCAL
    col2_x_global = Z2_X_OFFSET + COL2_X_LOCAL
    col2_y_global = Z2_Y_OFFSET + COL2_Y_LOCAL

    col1_pt = ""
    try:
        rt = PO.AddCartesian(col1_x_global, col1_y_global, 0.0, col1_pt, "COL1", "Global", False, 0)
        col1_pt = rt[-1] if isinstance(rt[-1], str) else "COL1"
    except Exception:
        col1_pt = "COL1"
    col2_pt = ""
    try:
        rt = PO.AddCartesian(col2_x_global, col2_y_global, 0.0, col2_pt, "COL2", "Global", False, 0)
        col2_pt = rt[-1] if isinstance(rt[-1], str) else "COL2"
    except Exception:
        col2_pt = "COL2"
    print(f"  Pts: {col1_pt}=({col1_x_global},{col1_y_global}) {col2_pt}=({col2_x_global},{col2_y_global})")

    # --- Viga amarre como frame entre los 2 puntos ---
    FO = cFrameObj(sap.FrameObj)
    viga_name = ""
    try:
        rt = FO.AddByPoint(col1_pt, col2_pt, viga_name, "V45X95", "VIGA_AMARRE")
        viga_name = rt[-2] if isinstance(rt[-2], str) else "VIGA_AMARRE"
        print(f"  FrameObj viga: {viga_name}")
    except Exception as e:
        print(f"  Viga EXC: {e}")
        viga_name = "VIGA_AMARRE"

    # --- Load patterns Dead, Live (SELF_WT=0 segun libro) ---
    LP = cLoadPatterns(sap.LoadPatterns)
    _try("Add Dead", lambda: LP.Add("Dead", eLoadPatternType.Dead, SELF_WT, True))
    _try("SetSelfWT Dead 0", lambda: LP.SetSelfWTMultiplier("Dead", SELF_WT))
    _try("Add Live", lambda: LP.Add("Live", eLoadPatternType.Live, 0.0, True))

    # --- Loads en cols (Mx=My=0 segun libro Fig.163) ---
    _try(f"Force Col1 Dead P={P_D_C1}",
         lambda: PO.SetLoadForce(col1_pt, "Dead", [0.0, 0.0, -P_D_C1, 0.0, 0.0, 0.0], True, "Global", eItemType.Objects))
    _try(f"Force Col1 Live P={P_L_C1}",
         lambda: PO.SetLoadForce(col1_pt, "Live", [0.0, 0.0, -P_L_C1, 0.0, 0.0, 0.0], True, "Global", eItemType.Objects))
    _try(f"Force Col2 Dead P={P_D_C2}",
         lambda: PO.SetLoadForce(col2_pt, "Dead", [0.0, 0.0, -P_D_C2, 0.0, 0.0, 0.0], True, "Global", eItemType.Objects))
    _try(f"Force Col2 Live P={P_L_C2}",
         lambda: PO.SetLoadForce(col2_pt, "Live", [0.0, 0.0, -P_L_C2, 0.0, 0.0, 0.0], True, "Global", eItemType.Objects))

    # --- Combos ---
    RC = cCombo(sap.RespCombo)
    for cname, items in [
        ("CARGA VERTICAL", [("Dead", 1.0), ("Live", 1.0)]),
        ("CARGA ULTIMA",   [("Dead", 1.4), ("Live", 1.7)]),
    ]:
        _try(f"Combo.Add({cname})", lambda c=cname: RC.Add(c, 0))
        for case, sf in items:
            _try(f"  {cname} <- {sf}*{case}",
                 lambda c=cname, cn=case, s=sf: RC.SetCaseList(c, eCNameType.LoadCase, cn, s))

    # --- Mesh refinement ---
    try:
        db = cDatabaseTables(sap.DatabaseTables)
        tname = "Analysis Options - Automatic Mesh Settings for Floors"
        Tv = 0; FKI = []; nR = 0; Td = []
        ret, Tv, FKI, nR, Td = db.GetTableForEditingArray(tname, "", Tv, FKI, nR, Td)
        new = list(Td)
        if len(new) >= 4: new[3] = "0.2"   # mesh 0.2m
        db.SetTableForEditingArray(tname, Tv, FKI, max(nR, 1), new)
        db.ApplyEditedTables(True, 0, 0, 0, 0, "")
        print(f"  Mesh = 0.2m")
    except Exception as e:
        print(f"  Mesh warn: {e}")

    # --- Save + Run ---
    Path(MODEL_PATH).parent.mkdir(parents=True, exist_ok=True)
    _try(f"File.Save", lambda: File.Save(MODEL_PATH))
    Analyze = cAnalyze(sap.Analyze)
    print("\nCorriendo analysis...")
    ret = Analyze.RunAnalysis()
    print(f"RunAnalysis: ret={ret}")

    # --- Extract Soil Pressures ---
    def get_table(tname):
        Tv = 0; FKI = []; nR = 0; Td = []
        try:
            ret, _, Tv, FKI, nR, Td = db.GetTableForDisplayArray(tname, [], "", Tv, FKI, nR, Td)
        except Exception:
            return []
        if ret != 0 or nR == 0: return []
        f = list(FKI); return [{f[j]: Td[i*len(f)+j] for j in range(len(f))} for i in range(nR)]
    soil = get_table("Soil Pressures") or get_table("Slab Bearing Pressures")
    def combo_of(r): return (r.get("OutputCase") or r.get("Combo") or "").upper()
    def tf(x):
        try: return float(x)
        except: return None
    results = {}
    for label, key in [("servicio","CARGA VERTICAL"),("ultimo","CARGA ULTIMA")]:
        rows = [r for r in soil if combo_of(r).startswith(key)]
        vals = [abs(tf(r.get("Pressure") or r.get("SoilPress") or r.get("SoilPressure") or r.get("P"))) for r in rows]
        vals = [v for v in vals if v is not None]
        results[label] = {
            "sigma_max_tm2": round(max(vals), 3) if vals else None,
            "sigma_min_tm2": round(min(vals), 3) if vals else None,
            "n_rows": len(rows),
        }
        print(f"  {label}: σ_max={results[label]['sigma_max_tm2']}, σ_min={results[label]['sigma_min_tm2']}")

    # --- Dump JSON ---
    payload = {
        "_meta": {"generated_utc": datetime.utcnow().isoformat()+"Z"},
        "exercise": "Guerra Ej.6 - Zapata Unida con Viga Amarre",
        "model_path": MODEL_PATH,
        "inputs": {
            "Z1_L": L1, "Z1_B": B1, "Col1_pos": [col1_x_global, col1_y_global],
            "Z2_L": L2, "Z2_B": B2, "Col2_pos": [col2_x_global, col2_y_global],
            "L_viga": L_VIGA, "Bxh_viga": [B_VIGA, H_VIGA],
            "h_zapata": H_ZAPATA, "fc_kgcm2": FC_KGCM2, "ks_tm3": KS_TM3,
            "P_D_C1": P_D_C1, "P_L_C1": P_L_C1,
            "P_D_C2": P_D_C2, "P_L_C2": P_L_C2,
        },
        "results_safe": results,
        "manual_libro": {
            "sigma_max_zapata1_tm2": 26.179,
            "sigma_min_zapata1_tm2": 15.386,
            "sigma_zapata2_avg_tm2": 16.734,
            "_note": "Libro Fig.180 pag.119",
        },
    }
    RESULTS_JSON.parent.mkdir(parents=True, exist_ok=True)
    with open(RESULTS_JSON, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"OK -> {RESULTS_JSON}")

    # Cerrar conexion API (NO la app SAFE)
    try: mySAFE.ApplicationExit(False)
    except Exception: pass


if __name__ == "__main__":
    build_and_run()
    # Lanzar SAFE.exe detached con el .fdb cargado, queda abierto
    print(f"\n=== Lanzando SAFE.exe detached con {MODEL_PATH} ===")
    DETACHED_PROCESS = 0x00000008
    subprocess.Popen([SAFE_EXE, MODEL_PATH], creationflags=DETACHED_PROCESS, close_fds=True)
    print("SAFE arrancado. Display > Soil Pressures para ver Ej.6.")
