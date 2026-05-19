"""
SAFE API — Zapata Conectada 5×1m, 2 zapatas + viga de unión.

Modelo plate-only simplificado: losa rectangular con 2 slab properties
(ZapataExt t=0.40 en extremos, VigaConex t=0.20 en centro). NO incluye
columnas/pedestales como frames (eso requeriría cLineObj además, scope
del caso "con-frames" separado).

Replica cli_conectada.mjs. Mesh 20×4 (80 Q4). Springs Winkler en TODA
el área via SubModulus override.

Uso:
  python safe_api_conectada.py [--json=out.json] [--keep-open]
"""

import os, sys, json, time
from pathlib import Path

import clr  # type: ignore
clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import (  # type: ignore
    cHelper, Helper, cOAPI, cSapModel, cFile, cAnalyze, cDatabaseTables,
    cPropMaterial, cPropArea, cPropAreaSpring, cPointObj, cAreaObj, cLoadPatterns,
    eForce, eLength, eTemperature, eMatType, eSlabType, eShellType, eItemType,
    eLoadPatternType,
)
from System import Array, Double  # type: ignore

args = sys.argv[1:]
json_out = next((a.split("=", 1)[1] for a in args if a.startswith("--json=")), None)
keep_open = "--keep-open" in args

HERE = Path(__file__).resolve().parent
SAVE_PATH = str(HERE / "Zapata_Conectada_via_API.fdb")

P = {
    "Lz": 5.0, "Bz": 1.0,
    "t_zap": 0.40, "t_vig": 0.20,
    "Lzap": 1.0,
    "E_kNm2": 24855e3, "nu": 0.20, "rho_kNm3": 24.0,
    "ks_kNm3": 19613.0,
    "P_kN": 20 * 9.80665,
    "nx": 20, "ny": 4,
}
COLUMNS = [(P["Lzap"]/2, P["Bz"]/2), (P["Lz"] - P["Lzap"]/2, P["Bz"]/2)]

print(f"-> Zapata conectada {P['Lz']}×{P['Bz']}m: ext t={P['t_zap']} / viga t={P['t_vig']}, {len(COLUMNS)} cols P={P['P_kN']:.2f} kN")

print("-> Lanzando SAFE 20...")
helper = cHelper(Helper())
safe_obj = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
safe_obj.ApplicationStart()
sap = cSapModel(safe_obj.SapModel)
sap.InitializeNewModel()

file_api = cFile(sap.File)
file_api.NewBlank()
sap.SetPresentUnits_2(eForce.kN, eLength.m, eTemperature.C)

mat = cPropMaterial(sap.PropMaterial)
mat_name = "Conc25"
mat.SetMaterial(mat_name, eMatType.Concrete, -1, "", "")
mat.SetMPIsotropic(mat_name, P["E_kNm2"], P["nu"], 1.0e-5, 0.0)
mat.SetWeightAndMass(mat_name, 1, P["rho_kNm3"], 0.0)

parea = cPropArea(sap.PropArea)
slab_zap, slab_vig = "ZapataExt", "VigaConex"
parea.SetSlab(slab_zap, eSlabType.Mat,  eShellType.ShellThick, mat_name, P["t_zap"], -1, "", "")
parea.SetSlab(slab_vig, eSlabType.Slab, eShellType.ShellThick, mat_name, P["t_vig"], -1, "", "")
print(f"-> SetSlab {slab_zap}(t={P['t_zap']}) + {slab_vig}(t={P['t_vig']})")

psp = cPropAreaSpring(sap.PropAreaSpring)
spring_name = "AS_Winkler"
psp.SetAreaSpringProp(spring_name, 0.0, 0.0, P["ks_kNm3"], 0, 0, "", 1.0, 1.0, -1, "", "")
lpat = cLoadPatterns(sap.LoadPatterns)
lpat.Add("P_Test", eLoadPatternType.Other, 0.0, True)

ao = cAreaObj(sap.AreaObj)
nx, ny = P["nx"], P["ny"]
dx, dy = P["Lz"] / nx, P["Bz"] / ny
area_names = []
n_zap = n_vig = 0
print(f"-> Creando {nx*ny} áreas Q4 con slab variable según x...")
for j in range(ny):
    for i in range(nx):
        x0, x1 = i * dx, (i + 1) * dx
        y0, y1 = j * dy, (j + 1) * dy
        xs = Array[Double]([x0, x1, x1, x0])
        ys = Array[Double]([y0, y0, y1, y1])
        zs = Array[Double]([0.0, 0.0, 0.0, 0.0])
        x_center = (i + 0.5) * dx
        is_zapata = x_center < P["Lzap"] or x_center > (P["Lz"] - P["Lzap"])
        slab = slab_zap if is_zapata else slab_vig
        if is_zapata: n_zap += 1
        else: n_vig += 1
        ret, _x, _y, _z, aname = ao.AddByCoord(4, xs, ys, zs, "", slab, f"Q_{i:02d}_{j:02d}", "Global")
        area_names.append(aname)
print(f"   {len(area_names)} áreas creadas ({n_zap} zapatas + {n_vig} viga)")

for aname in area_names:
    ao.SetSpringAssignment(aname, spring_name, eItemType.Objects)

po = cPointObj(sap.PointObj)
col_points = []
for k, (cx, cy) in enumerate(COLUMNS, start=1):
    ret, pt_name = po.AddCartesian(cx, cy, 0.0, "", f"PCol_{k}", "Global", False, 0)
    col_points.append((pt_name, cx, cy))
    load_vec = Array[Double]([0.0, 0.0, -P["P_kN"], 0.0, 0.0, 0.0])
    po.SetLoadForce(pt_name, "P_Test", load_vec, True, "Global", eItemType.Objects)
print(f"-> {len(col_points)} columnas creadas")

print(f"-> Save: {SAVE_PATH}")
os.makedirs(os.path.dirname(SAVE_PATH), exist_ok=True)
file_api.Save(SAVE_PATH)

db_pre = cDatabaseTables(sap.DatabaseTables)
spring_table = "Spring Property Definitions - Area Springs"
fk = []; group = ""; ver = 0; fi = []; n = 0; td = []
ret, ver, fi, n, td = db_pre.GetTableForEditingArray(spring_table, group, ver, fi, n, td)
fi = list(fi); td = list(td)
if n > 0:
    sm_col = next((i for i, h in enumerate(fi) if "submodulus" in h.lower()), -1)
    if sm_col >= 0:
        td[sm_col] = str(P["ks_kNm3"])
        db_pre.SetTableForEditingArray(spring_table, ver, fi, n, td)
        nfe = nem = nwm = nim = 0; ilog = ""
        db_pre.ApplyEditedTables(True, nfe, nem, nwm, nim, ilog)
        print(f"-> SubModulus override: ks={P['ks_kNm3']}")

print("-> RunAnalysis...")
analyze = cAnalyze(sap.Analyze)
t0 = time.time()
ret = analyze.RunAnalysis()
runtime_s = time.time() - t0
print(f"   RunAnalysis ret={ret} ({runtime_s:.2f}s)")

db = cDatabaseTables(sap.DatabaseTables)
def get_table(name):
    fk = []; group = ""; ver = 0; fi = []; n = 0; td = []
    ret, group, ver, fi, n, td = db.GetTableForDisplayArray(name, fk, group, ver, fi, n, td)
    if n == 0 or not td: return [], []
    td = list(td); fi = list(fi); cols = len(fi)
    return fi, [td[i*cols:(i+1)*cols] for i in range(n)]

def col(headers, *names):
    for nm in names:
        for i, h in enumerate(headers):
            if h.lower() == nm.lower(): return i
    return -1

def maxabs(rows, c):
    if c < 0: return 0.0
    vals = [float(r[c]) for r in rows if (lambda v:
        v.replace('-','').replace('.','').replace('e','').replace('+','').isdigit() if v else False
        )(str(r[c]))]
    return max(vals, key=abs) if vals else 0.0

jh, jr = get_table("Joint Displacements")
uz_c = col(jh, "U3","Uz","UZ")
joint_c = col(jh, "UniqueName","Joint","Point","Label")
w_max = 0.0; w_max_joint = None
for r in jr:
    try:
        v = float(r[uz_c])
        if abs(v) > abs(w_max):
            w_max = v; w_max_joint = r[joint_c] if joint_c >= 0 else None
    except: pass

sample_targets = [
    ("esquina (0,0)",                  0.0,                     0.0),
    ("esquina (Lz,0)",                 P["Lz"],                 0.0),
    ("esquina (0,Bz)",                 0.0,                     P["Bz"]),
    ("esquina (Lz,Bz)",                P["Lz"],                 P["Bz"]),
    ("col_izq (0.5, Bz/2)",            P["Lzap"]/2,             P["Bz"]/2),
    ("col_der (4.5, Bz/2)",            P["Lz"]-P["Lzap"]/2,     P["Bz"]/2),
    ("borde zap-viga izq (1, Bz/2)",   P["Lzap"],               P["Bz"]/2),
    ("borde zap-viga der (4, Bz/2)",   P["Lz"]-P["Lzap"],       P["Bz"]/2),
    ("centro viga (2.5, Bz/2)",        P["Lz"]/2,               P["Bz"]/2),
    ("1/4 viga (1.75, Bz/2)",          1.75,                    P["Bz"]/2),
    ("3/4 viga (3.25, Bz/2)",          3.25,                    P["Bz"]/2),
]
po2 = cPointObj(sap.PointObj)
joint_info = {}
for r in jr:
    try:
        jname = str(r[joint_c]) if joint_c >= 0 else None
        if jname and jname not in joint_info:
            ret_t = po2.GetCoordCartesian(jname, 0.0, 0.0, 0.0, "Global")
            rret, jx, jy, jz = ret_t
            if rret == 0:
                joint_info[jname] = {"x": jx, "y": jy, "Uz_list": []}
        if jname in joint_info:
            try: joint_info[jname]["Uz_list"].append(float(r[uz_c]))
            except: pass
    except: pass

samples_11pts = []
for label, xt, yt in sample_targets:
    best, best_d = None, float("inf")
    for jname, info in joint_info.items():
        d2 = (info["x"]-xt)**2 + (info["y"]-yt)**2
        if d2 < best_d: best_d, best = d2, (jname, info)
    if best:
        jname, info = best
        uz = max(info["Uz_list"], key=abs) if info["Uz_list"] else 0.0
        samples_11pts.append({
            "label": label, "joint": jname, "x": info["x"], "y": info["y"],
            "w_mm": round(uz * 1000, 4),
            "q_kNm2": round(P["ks_kNm3"] * abs(uz), 2),
        })

q_max_calc = P["ks_kNm3"] * abs(w_max)
P_total = len(COLUMNS) * P["P_kN"]
A_total = P["Lz"] * P["Bz"]
w_avg_teo_mm = 1000 * P_total / (A_total * P["ks_kNm3"])

out = {
    "solver": "SAFE 20 via API (mesh 20×4 + 2 slab properties + SubModulus override)",
    "case": "Zapata Conectada 5×1m, 2 zapatas (t=0.40) + viga (t=0.20)",
    "saved_at": SAVE_PATH,
    "params": P,
    "columns": [{"x": cx, "y": cy, "P_kN": P["P_kN"]} for cx, cy in COLUMNS],
    "theory": {"P_total_kN": P_total, "A_total_m2": A_total, "w_avg_winkler_teo_mm": round(w_avg_teo_mm, 4)},
    "results": {
        "w_max_m": w_max, "w_max_joint": str(w_max_joint) if w_max_joint else None,
        "q_max_calc_ks_w_kNm2": q_max_calc, "runtime_s": round(runtime_s, 2),
        "samples_11pts": samples_11pts,
    },
}
if json_out:
    Path(json_out).write_text(json.dumps(out, indent=2), encoding="utf-8")
    print(f"-> JSON: {json_out}")

print("\n" + "="*58)
print(f"  SAFE API - Zapata Conectada (zap t={P['t_zap']}, vig t={P['t_vig']})")
print("="*58)
print(f"  w_teo:     {w_avg_teo_mm:.4f} mm | w_max: {w_max*1000:.4f} mm ({w_max_joint})")
print(f"  Runtime:   {runtime_s:.2f}s")
print("-"*58)
print(f"  {len(samples_11pts)} puntos clave:")
print("  " + "label".ljust(34) + "w_mm".rjust(10) + "q_kNm2".rjust(12))
for s in samples_11pts:
    print(f"  {s['label']:<34}{s['w_mm']:>10.4f}{s['q_kNm2']:>12.2f}")
print("="*58)

if not keep_open: safe_obj.ApplicationExit(False)
