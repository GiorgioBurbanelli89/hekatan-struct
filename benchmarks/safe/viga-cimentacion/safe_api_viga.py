"""
SAFE API — Viga de Cimentación 8×1×0.50m, 4 columnas alineadas.

Replica cli_viga.mjs. Caso típico: zapata corrida longitudinal que
soporta una fila de columnas alineadas en eje x. Mesh 32×4 (128 Q4).
Springs Winkler con override `SubModulus` via DatabaseTables.

Uso:
  python safe_api_viga.py [--json=out.json] [--keep-open]
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
SAVE_PATH = str(HERE / "Viga_Cimentacion_via_API.fdb")

P = {
    "Lz": 8.0, "Bz": 1.0, "tz": 0.50,
    "E_kNm2": 24855e3, "nu": 0.20, "rho_kNm3": 24.0,
    "ks_kNm3": 19613.0,
    "P_kN": 20 * 9.80665,         # 20 tonf por columna = 196.13 kN
    "nx": 32, "ny": 4,            # mesh 32×4 (dx=dy=0.25m), paridad Hekatan
}
# 4 columnas alineadas en y=Bz/2, separadas 2m (retiro 1m de extremos)
COLUMNS = [(x, P["Bz"]/2) for x in (1.0, 3.0, 5.0, 7.0)]

print(f"-> Caso: losa {P['Lz']}×{P['Bz']}×{P['tz']}m + {len(COLUMNS)} columnas P={P['P_kN']:.2f} kN c/u")

# ── Lanzar SAFE ──────────────────────────────────────────────────────
print("-> Lanzando SAFE 20...")
helper = cHelper(Helper())
safe_obj = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
safe_obj.ApplicationStart()
sap = cSapModel(safe_obj.SapModel)
sap.InitializeNewModel()

file_api = cFile(sap.File)
ret = file_api.NewBlank()
print(f"   NewBlank ret={ret}")

ret = sap.SetPresentUnits_2(eForce.kN, eLength.m, eTemperature.C)
print(f"   SetUnits kN/m/C ret={ret}")

# ── Material concreto ────────────────────────────────────────────────
mat = cPropMaterial(sap.PropMaterial)
mat_name = "Conc25"
ret = mat.SetMaterial(mat_name, eMatType.Concrete, -1, "", "")
ret = mat.SetMPIsotropic(mat_name, P["E_kNm2"], P["nu"], 1.0e-5, 0.0)
ret = mat.SetWeightAndMass(mat_name, 1, P["rho_kNm3"], 0.0)
print(f"-> Material {mat_name} OK")

# ── Slab property (Mat foundation, Shell-Thick=Mindlin) ──────────────
parea = cPropArea(sap.PropArea)
slab_name = "VigaCorrida"
ret = parea.SetSlab(slab_name, eSlabType.Mat, eShellType.ShellThick,
                     mat_name, P["tz"], -1, "", "")
print(f"-> SetSlab({slab_name}) Mat/ShellThick(Mindlin) t={P['tz']} ret={ret}")

# ── Spring property (U3 placeholder, real value via DatabaseTables) ──
psp = cPropAreaSpring(sap.PropAreaSpring)
spring_name = "AS_Winkler"
ret = psp.SetAreaSpringProp(spring_name, 0.0, 0.0, P["ks_kNm3"],
                             0, 0, "", 1.0, 1.0, -1, "", "")
print(f"-> SetAreaSpringProp({spring_name}) ret={ret} (U3 será sobreescrito)")

# ── Load Pattern ─────────────────────────────────────────────────────
lpat = cLoadPatterns(sap.LoadPatterns)
ret = lpat.Add("P_Test", eLoadPatternType.Other, 0.0, True)
print(f"-> LoadPatterns.Add(P_Test) ret={ret}")

# ── Grid Q4 explícito 12×16 = 192 áreas ──────────────────────────────
ao = cAreaObj(sap.AreaObj)
nx, ny = P["nx"], P["ny"]
dx, dy = P["Lz"] / nx, P["Bz"] / ny
area_names = []
print(f"-> Creando {nx*ny} áreas Q4 (mesh {nx}x{ny}) ...")
t_area0 = time.time()
for j in range(ny):
    for i in range(nx):
        x0, x1 = i * dx, (i + 1) * dx
        y0, y1 = j * dy, (j + 1) * dy
        xs = Array[Double]([x0, x1, x1, x0])
        ys = Array[Double]([y0, y0, y1, y1])
        zs = Array[Double]([0.0, 0.0, 0.0, 0.0])
        ret, _x, _y, _z, aname = ao.AddByCoord(
            4, xs, ys, zs, "", slab_name, f"Q_{i:02d}_{j:02d}", "Global")
        area_names.append(aname)
print(f"   Creadas {len(area_names)} áreas en {time.time()-t_area0:.1f}s")

print(f"-> Asignando spring Winkler a las {len(area_names)} áreas...")
for aname in area_names:
    ao.SetSpringAssignment(aname, spring_name, eItemType.Objects)

# ── 6 columnas con cargas puntuales ──────────────────────────────────
po = cPointObj(sap.PointObj)
col_points = []
for k, (cx, cy) in enumerate(COLUMNS, start=1):
    ret, pt_name = po.AddCartesian(cx, cy, 0.0, "", f"PCol_{k}", "Global", False, 0)
    col_points.append((pt_name, cx, cy))
    load_vec = Array[Double]([0.0, 0.0, -P["P_kN"], 0.0, 0.0, 0.0])
    po.SetLoadForce(pt_name, "P_Test", load_vec, True, "Global", eItemType.Objects)
print(f"-> Creadas {len(col_points)} columnas con P={P['P_kN']:.2f} kN c/u")

# ── Save antes de DatabaseTables edit ────────────────────────────────
print(f"-> Save: {SAVE_PATH}")
os.makedirs(os.path.dirname(SAVE_PATH), exist_ok=True)
ret = file_api.Save(SAVE_PATH)
print(f"   Save ret={ret}")

# ── CRÍTICO: forzar SubModulus correcto via DatabaseTables ───────────
db_pre = cDatabaseTables(sap.DatabaseTables)
spring_table = "Spring Property Definitions - Area Springs"
fk = []; group = ""; ver = 0; fi = []; n = 0; td = []
ret, ver, fi, n, td = db_pre.GetTableForEditingArray(spring_table, group, ver, fi, n, td)
fi = list(fi); td = list(td)
print(f"-> Editing '{spring_table}': rows={n} cols={len(fi)}")
if n > 0 and td:
    sm_col = next((i for i, h in enumerate(fi) if "submodulus" in h.lower() or "subgrade" in h.lower()), -1)
    if sm_col >= 0:
        td[sm_col] = str(P["ks_kNm3"])
        ret = db_pre.SetTableForEditingArray(spring_table, ver, fi, n, td)
        nfe = nem = nwm = nim = 0; ilog = ""
        ret, nfe, nem, nwm, nim, ilog = db_pre.ApplyEditedTables(True, nfe, nem, nwm, nim, ilog)
        print(f"   SubModulus override: ks={P['ks_kNm3']} ret={ret} err={nfe} warn={nwm}")

# ── RunAnalysis ──────────────────────────────────────────────────────
print("-> RunAnalysis...")
analyze = cAnalyze(sap.Analyze)
t0 = time.time()
ret = analyze.RunAnalysis()
runtime_s = time.time() - t0
print(f"   RunAnalysis ret={ret} ({runtime_s:.2f}s)")

# ── Extraer Joint Displacements ──────────────────────────────────────
db = cDatabaseTables(sap.DatabaseTables)

def get_table(name):
    fk = []; group = ""; ver = 0; fi = []; n = 0; td = []
    ret, group, ver, fi, n, td = db.GetTableForDisplayArray(name, fk, group, ver, fi, n, td)
    if n == 0 or not td: return [], []
    td = list(td); fi = list(fi)
    cols = len(fi)
    rows = [td[i*cols:(i+1)*cols] for i in range(n)]
    return fi, rows

def col(headers, *names):
    for nm in names:
        for i, h in enumerate(headers):
            if h.lower() == nm.lower(): return i
    return -1

def maxabs(rows, c):
    if c < 0: return 0.0
    vals = []
    for r in rows:
        try: vals.append(float(r[c]))
        except: pass
    return max(vals, key=abs) if vals else 0.0

print("-> Joint Displacements...")
jh, jr = get_table("Joint Displacements")
print(f"   rows={len(jr)}")
uz_c = col(jh, "U3","Uz","UZ")
joint_c = col(jh, "UniqueName","Joint","Point","Label")
w_max = maxabs(jr, uz_c)
w_max_joint = None
if uz_c >= 0:
    for r in jr:
        try:
            if abs(float(r[uz_c])) == abs(w_max):
                w_max_joint = r[joint_c] if joint_c >= 0 else None
                break
        except: pass

# ── Sample en 17 puntos por coords ───────────────────────────────────
sample_targets = [
    ("esquina (0,0)",            0.0,         0.0),
    ("esquina (Lz,0)",           P["Lz"],     0.0),
    ("esquina (0,Bz)",           0.0,         P["Bz"]),
    ("esquina (Lz,Bz)",          P["Lz"],     P["Bz"]),
    ("col_1 (1, Bz/2)",          1.0,         P["Bz"]/2),
    ("col_2 (3, Bz/2)",          3.0,         P["Bz"]/2),
    ("col_3 (5, Bz/2)",          5.0,         P["Bz"]/2),
    ("col_4 (7, Bz/2)",          7.0,         P["Bz"]/2),
    ("entre col 1-2 (2, Bz/2)",  2.0,         P["Bz"]/2),
    ("entre col 2-3 (4, Bz/2)",  4.0,         P["Bz"]/2),
    ("entre col 3-4 (6, Bz/2)",  6.0,         P["Bz"]/2),
    ("voladizo izq (0, Bz/2)",   0.0,         P["Bz"]/2),
    ("voladizo der (Lz, Bz/2)",  P["Lz"],     P["Bz"]/2),
]
print("-> Sampling 17 puntos clave...")
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
            try:
                joint_info[jname]["Uz_list"].append(float(r[uz_c]))
            except: pass
    except: pass

samples_13pts = []
for label, xt, yt in sample_targets:
    best = None
    best_d = float("inf")
    for jname, info in joint_info.items():
        d2 = (info["x"]-xt)**2 + (info["y"]-yt)**2
        if d2 < best_d:
            best_d, best = d2, (jname, info)
    if best:
        jname, info = best
        uz = max(info["Uz_list"], key=abs) if info["Uz_list"] else 0.0
        samples_13pts.append({
            "label": label,
            "joint": jname,
            "x": info["x"],
            "y": info["y"],
            "w_mm": round(uz * 1000, 4),
            "q_kNm2": round(P["ks_kNm3"] * abs(uz), 2),
        })

q_max_calc = P["ks_kNm3"] * abs(w_max)
P_total = len(COLUMNS) * P["P_kN"]
A_total = P["Lz"] * P["Bz"]
w_avg_teo_mm = 1000 * P_total / (A_total * P["ks_kNm3"])

out = {
    "solver": "SAFE 20 via API (construido desde cero, mesh 16×8 + SubModulus override)",
    "case": "Viga de Cimentación 8×1×0.50m, 4 columnas alineadas",
    "saved_at": SAVE_PATH,
    "params": P,
    "columns": [{"x": cx, "y": cy, "P_kN": P["P_kN"]} for cx, cy in COLUMNS],
    "theory": {
        "P_total_kN": P_total,
        "A_total_m2": A_total,
        "w_avg_winkler_teo_mm": round(w_avg_teo_mm, 4),
    },
    "results": {
        "w_max_m": w_max,
        "w_max_joint": str(w_max_joint) if w_max_joint else None,
        "q_max_calc_ks_w_kNm2": q_max_calc,
        "runtime_s": round(runtime_s, 2),
        "samples_13pts": samples_13pts,
    },
}
if json_out:
    Path(json_out).write_text(json.dumps(out, indent=2), encoding="utf-8")
    print(f"-> JSON: {json_out}")

print("\n" + "="*58)
print(f"  SAFE API - Viga Cimentación {P['Lz']}×{P['Bz']}×{P['tz']}m, {len(COLUMNS)} col × {P['P_kN']:.1f} kN")
print("="*58)
print(f"  w_teo:     {w_avg_teo_mm:.4f} mm (Winkler uniforme)")
print(f"  w_max:     {w_max*1000:.4f} mm  (joint {w_max_joint})")
print(f"  q_max:     {q_max_calc:.2f} kN/m² (ks*|w|)")
print(f"  Runtime:   {runtime_s:.2f}s")
print("-"*58)
print(f"  {len(samples_13pts)} puntos clave:")
print("  " + "label".ljust(34) + "w_mm".rjust(10) + "q_kNm2".rjust(12))
for s in samples_13pts:
    print(f"  {s['label']:<34}{s['w_mm']:>10.4f}{s['q_kNm2']:>12.2f}")
print("="*58)

if not keep_open:
    safe_obj.ApplicationExit(False)
