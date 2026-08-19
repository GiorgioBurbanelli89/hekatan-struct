"""
SAFE API — Cimentación Edificio Real (9 zapatas + 12 vigas amarre).

Reconstruye desde cero el modelo extraído de
`examples/src/edificio-aporticado/sample_output/cimentacion_edificio_9zapatas_12vigas.f2k`
(generado por Hekatan via gen_f2k_sample.ts).

Geometría real:
  - Grilla 3×3 de 9 columnas en (X, Y) ∈ {0, 5, 10}m × {0, 5, 10}m
  - Zapatas con 3 dimensiones DISTINTAS según posición:
      esquinas (4 zap):   1.3 × 1.3 m  (área 1.69 m²)
      medios-bordes (4):  2.2 × 2.2 m  (área 4.84 m²)
      centro (1 zap):     1.6 × 1.6 m  (área 2.56 m²)
  - Espesor uniforme t = 0.30 m
  - 12 vigas amarre VAmarre 0.25 × 0.40 m (frames concrete rectangular)
  - 9 cargas reales (P + Mx + My) en los centros de columnas
  - Suelo Winkler ks = 105 tonf/m³ = 1030 kN/m³ (suelo blando)

Uso:
  python safe_api_edificio.py [--json=out.json] [--keep-open]
"""

import os, sys, json, time
from pathlib import Path

import clr  # type: ignore
clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import (  # type: ignore
    cHelper, Helper, cOAPI, cSapModel, cFile, cAnalyze, cDatabaseTables,
    cPropMaterial, cPropArea, cPropAreaSpring, cPointObj, cAreaObj, cFrameObj,
    cLoadPatterns, cPropFrame,
    eForce, eLength, eTemperature, eMatType, eSlabType, eShellType, eItemType,
    eLoadPatternType,
)
from System import Array, Double, Boolean  # type: ignore
import System

args = sys.argv[1:]
json_out = next((a.split("=", 1)[1] for a in args if a.startswith("--json=")), None)
keep_open = "--keep-open" in args

HERE = Path(__file__).resolve().parent
SAVE_PATH = str(HERE / "Edificio_Cimentacion_via_API.fdb")

# ────────────────────────────────────────────────────────────────────
# DATOS DEL MODELO REAL (extraídos del .f2k)
# ────────────────────────────────────────────────────────────────────
P_GLOBAL = {
    "tz": 0.30,                        # m espesor zapatas
    "E_kNm2": 24855e3,                 # 4000 psi concreto
    "nu": 0.20,
    "rho_kNm3": 24.0,
    "ks_kNm3": 1030.0,                 # = 105 tonf/m³ del modelo real
    "viga_b": 0.25, "viga_h": 0.40,    # sección viga amarre VAmarre / cadenas
    # ── V2: modelación estructural correcta ──────────────────────────
    "h_ped": 0.50,                     # m altura pedestal (de z=-h_ped a z=0)
    "ped_side": 0.40,                  # m lado pedestal cuadrado
    # Niveles:
    #   z=0     piso terminado → cadenas (vigas amarre horizontales)
    #   z=-h_ped → zapatas (placas sobre Winkler)
    # Cargas P+Mx+My aplicadas en TOPS de pedestales (z=0)
}

# 9 columnas en grilla 3×3 con sus dimensiones de zapata
# Cada zapata centrada en su columna; las dim cambian según rol:
#   esquinas (4): 1.3×1.3, medios-bordes (4): 2.2×2.2, centro (1): 1.6×1.6
COLUMNS = [
    # (col_id, X, Y, Lz, Bz, rol)
    (1, 0,  0,  1.3, 1.3, "esquina"),       # (0,0)
    (2, 5,  0,  2.2, 2.2, "medio-borde"),   # (5,0)
    (3, 10, 0,  1.3, 1.3, "esquina"),       # (10,0)
    (4, 0,  5,  2.2, 2.2, "medio-borde"),   # (0,5)
    (5, 5,  5,  1.6, 1.6, "centro"),        # (5,5)
    (6, 10, 5,  2.2, 2.2, "medio-borde"),   # (10,5)
    (7, 0,  10, 1.3, 1.3, "esquina"),       # (0,10)
    (8, 5,  10, 2.2, 2.2, "medio-borde"),   # (5,10)
    (9, 10, 10, 1.3, 1.3, "esquina"),       # (10,10)
]
# 9 cargas reales extraídas (tonf, tonf·m)
LOADS = {
    1: {"FZ": -0.6663, "MX":  0.8439, "MY": 2.2863},
    2: {"FZ": -2.1245, "MX":  0.0003, "MY": 2.5785},
    3: {"FZ": -3.6324, "MX": -0.8442, "MY": 2.2910},
    4: {"FZ": -1.1218, "MX":  0.9406, "MY": 1.2984},
    5: {"FZ": -2.1401, "MX":  0.0003, "MY": 1.4681},
    6: {"FZ": -3.1612, "MX": -0.9409, "MY": 1.2987},
    7: {"FZ": -1.2892, "MX":  0.8433, "MY": 0.3505},
    8: {"FZ": -2.1399, "MX":  0.0003, "MY": 0.4073},
    9: {"FZ": -2.9936, "MX": -0.8436, "MY": 0.3505},
}
# 12 vigas amarre — conectan columnas vecinas en grilla 3×3
BEAMS = [
    # (col_i, col_j)  — 6 horizontales (eje X) + 6 verticales (eje Y)
    (1, 2), (2, 3), (4, 5), (5, 6), (7, 8), (8, 9),  # horizontales
    (1, 4), (4, 7), (2, 5), (5, 8), (3, 6), (6, 9),  # verticales
]

print(f"-> Cimentación edificio real: 9 zapatas (3 dims) + 12 vigas amarre")
print(f"   Suelo ks={P_GLOBAL['ks_kNm3']:.0f} kN/m³, espesor {P_GLOBAL['tz']}m")
print(f"   Cargas: FZ totales = {sum(l['FZ'] for l in LOADS.values()):.2f} tonf")

# ────────────────────────────────────────────────────────────────────
# 1. Lanzar SAFE + configurar
# ────────────────────────────────────────────────────────────────────
print("-> Lanzando SAFE 20...")
helper = cHelper(Helper())
safe_obj = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
safe_obj.ApplicationStart()
sap = cSapModel(safe_obj.SapModel)
sap.InitializeNewModel()

file_api = cFile(sap.File)
file_api.NewBlank()
# Unidades tonf, m, C (matchea el .f2k original con CurrUnits="tonf, m, C")
sap.SetPresentUnits_2(eForce.tonf, eLength.m, eTemperature.C)
print(f"   Units: tonf, m, C")

# ────────────────────────────────────────────────────────────────────
# 2. Material concreto 4000 psi
# ────────────────────────────────────────────────────────────────────
mat = cPropMaterial(sap.PropMaterial)
mat_name = "4000Psi"
mat.SetMaterial(mat_name, eMatType.Concrete, -1, "", "")
# E en tonf/m² (no kN/m²): 24855 MPa = 24855e3 kN/m² = 24855e3/9.80665 tonf/m² = 2.534e6 tonf/m²
E_tonfm2 = P_GLOBAL["E_kNm2"] / 9.80665
mat.SetMPIsotropic(mat_name, E_tonfm2, P_GLOBAL["nu"], 1.0e-5, 0.0)
rho_tonfm3 = P_GLOBAL["rho_kNm3"] / 9.80665   # ≈ 2.447 tonf/m³
mat.SetWeightAndMass(mat_name, 1, rho_tonfm3, 0.0)
print(f"-> Material {mat_name}: E={E_tonfm2:.0f} tonf/m², γ={rho_tonfm3:.3f} tonf/m³")

# ────────────────────────────────────────────────────────────────────
# 3. Slab property "Footing" (compartida por las 9 zapatas)
# ────────────────────────────────────────────────────────────────────
parea = cPropArea(sap.PropArea)
slab_name = "Footing"
parea.SetSlab(slab_name, eSlabType.Footing, eShellType.ShellThick,
              mat_name, P_GLOBAL["tz"], -1, "", "")
print(f"-> SetSlab({slab_name}) Footing/ShellThick t={P_GLOBAL['tz']}m")

# ────────────────────────────────────────────────────────────────────
# 4. Frame properties: Cadena (VAmarre 0.25×0.40) + Pedestal (0.40×0.40)
# ────────────────────────────────────────────────────────────────────
pframe = cPropFrame(sap.PropFrame)
frame_cadena = "VAmarre_0.250x0.400"
pframe.SetRectangle(frame_cadena, mat_name, P_GLOBAL["viga_h"], P_GLOBAL["viga_b"], -1, "", "")
frame_pedestal = "Pedestal_0.400x0.400"
pframe.SetRectangle(frame_pedestal, mat_name, P_GLOBAL["ped_side"], P_GLOBAL["ped_side"], -1, "", "")
print(f"-> Frame props: {frame_cadena} (cadenas) + {frame_pedestal} (pedestales)")

# ────────────────────────────────────────────────────────────────────
# 5. Spring property (placeholder, real ks via DatabaseTables)
# ────────────────────────────────────────────────────────────────────
psp = cPropAreaSpring(sap.PropAreaSpring)
spring_name = "AS_Winkler"
psp.SetAreaSpringProp(spring_name, 0.0, 0.0, P_GLOBAL["ks_kNm3"], 0, 0, "", 1.0, 1.0, -1, "", "")

# ────────────────────────────────────────────────────────────────────
# 6. Load Pattern Dead
# ────────────────────────────────────────────────────────────────────
lpat = cLoadPatterns(sap.LoadPatterns)
lpat.Add("Dead", eLoadPatternType.Dead, 0.0, True)   # SW=0 para matchear modelo extraído
print(f"-> LoadPattern Dead added")

# ────────────────────────────────────────────────────────────────────
# 7. Crear 9 zapatas EN z=0 (Floor level — SAFE las renderiza aquí).
#    Pedestales suben de z=0 a z=+h_ped (TOP = nivel piso terminado).
# ────────────────────────────────────────────────────────────────────
ao = cAreaObj(sap.AreaObj)
z_zap = 0.0                    # zapatas en Floor level (SAFE las espera aquí)
z_top = P_GLOBAL["h_ped"]      # TOPs +h_ped arriba (z=+0.5m, nivel piso terminado)
zapata_names = {}
for cid, X, Y, Lz, Bz, rol in COLUMNS:
    x0, x1 = X - Lz/2, X + Lz/2
    y0, y1 = Y - Bz/2, Y + Bz/2
    xs = Array[Double]([x0, x1, x1, x0])
    ys = Array[Double]([y0, y0, y1, y1])
    zs = Array[Double]([z_zap, z_zap, z_zap, z_zap])
    ret, _x, _y, _z, aname = ao.AddByCoord(
        4, xs, ys, zs, "", slab_name, f"Zap_{cid}_{rol}", "Global")
    zapata_names[cid] = aname
    ao.SetSpringAssignment(aname, spring_name, eItemType.Objects)
print(f"-> 9 zapatas en z={z_zap}m (Floor level, SAFE-friendly)")

# ────────────────────────────────────────────────────────────────────
# 8. Crear joints en 2 niveles: TOP (z=0) + BASE (z=-h_ped)
#    Pedestales conectan BASE→TOP. Cargas P+Mx+My en TOPS.
# ────────────────────────────────────────────────────────────────────
po = cPointObj(sap.PointObj)
joint_top = {}    # joint en z=0 (TOP del pedestal, donde van las cargas)
joint_base = {}   # joint en z=-h_ped (BASE del pedestal, sobre la zapata)
for cid, X, Y, Lz, Bz, rol in COLUMNS:
    # TOP en z_top (=+0.5m, piso terminado, donde van las cargas)
    ret, top_name = po.AddCartesian(X, Y, z_top, "", f"PTop_{cid}", "Global", False, 0)
    joint_top[cid] = top_name
    # BASE en z_zap (=0, centro de la zapata, donde merge con mesh)
    ret, base_name = po.AddCartesian(X, Y, z_zap, "", f"PBase_{cid}", "Global", False, 0)
    joint_base[cid] = base_name
    # SetSpecialPoint(True) → fuerza inclusión en el mesh de la zapata
    # (auto-mesh respeta special points como nodos obligatorios)
    po.SetSpecialPoint(base_name, True, eItemType.Objects)
    # Cargas en TOP
    ld = LOADS[cid]
    load_vec = Array[Double]([0.0, 0.0, ld["FZ"], ld["MX"], ld["MY"], 0.0])
    po.SetLoadForce(top_name, "Dead", load_vec, True, "Global", eItemType.Objects)
print(f"-> 9 joint TOPs (z=0) con cargas + 9 joint BASEs (z={z_zap}) marcados SpecialPoint")

# CRÍTICO: SubModulus solo da rigidez vertical (Uz). La estructura completa
# tiene 3 modos rígidos horizontales (Ux, Uy, Rz) sin restricción → matriz
# singular → análisis devuelve uz=0. Fix: empotrar Ux, Uy, Rz en el joint
# base de la zapata centro (col_id=5). NO afecta Uz/Rx/Ry de los demás.
center_base = joint_base[5]
# Restraint vector [Ux, Uy, Uz, Rx, Ry, Rz] (True = empotrado)
restraint = Array[System.Boolean]([True, True, False, False, False, True])
po.SetRestraint(center_base, restraint, eItemType.Objects)
print(f"-> SetRestraint({center_base}) Ux/Uy/Rz = TRUE (suprime modos rígidos horizontales)")

# ────────────────────────────────────────────────────────────────────
# 9. Crear 9 pedestales verticales (BASE → TOP) usando AddByPoint
#    para COMPARTIR joints ya creados con AddCartesian arriba.
# ────────────────────────────────────────────────────────────────────
fo = cFrameObj(sap.FrameObj)
pedestal_names = []
for cid, X, Y, Lz, Bz, rol in COLUMNS:
    ret, name = fo.AddByPoint(joint_base[cid], joint_top[cid], "",
                                frame_pedestal, f"Ped_{cid}")
    pedestal_names.append(name)
print(f"-> {len(pedestal_names)} pedestales verticales (h={P_GLOBAL['h_ped']}m) compartiendo joint_base/joint_top")

# ────────────────────────────────────────────────────────────────────
# 10. Crear 12 cadenas horizontales en z=0 (entre TOPS) — AddByPoint
# ────────────────────────────────────────────────────────────────────
cadena_names = []
for (ci, cj) in BEAMS:
    ret, name = fo.AddByPoint(joint_top[ci], joint_top[cj], "",
                                frame_cadena, f"Cad_{ci}-{cj}")
    cadena_names.append(name)
print(f"-> {len(cadena_names)} cadenas horizontales en z=0 (joint_top compartidos)")

# ────────────────────────────────────────────────────────────────────
# 10. Save .fdb + DatabaseTables override SubModulus + RunAnalysis
# ────────────────────────────────────────────────────────────────────
print(f"-> Save: {SAVE_PATH}")
os.makedirs(os.path.dirname(SAVE_PATH), exist_ok=True)
file_api.Save(SAVE_PATH)

# Override SubModulus al valor del modelo real (105 tonf/m³)
db_pre = cDatabaseTables(sap.DatabaseTables)
spring_table = "Spring Property Definitions - Area Springs"
fk = []; group = ""; ver = 0; fi = []; n = 0; td = []
ret, ver, fi, n, td = db_pre.GetTableForEditingArray(spring_table, group, ver, fi, n, td)
fi = list(fi); td = list(td)
if n > 0:
    sm_col = next((i for i, h in enumerate(fi) if "submodulus" in h.lower()), -1)
    if sm_col >= 0:
        # En current units tonf, m → SubModulus en tonf/m³
        td[sm_col] = "105.0"
        db_pre.SetTableForEditingArray(spring_table, ver, fi, n, td)
        nfe = nem = nwm = nim = 0; ilog = ""
        db_pre.ApplyEditedTables(True, nfe, nem, nwm, nim, ilog)
        print(f"-> SubModulus override: 105 tonf/m³")

# ────────────────────────────────────────────────────────────────────
# Forzar IncludeInMesh=Yes en los 9 joint_base via DatabaseTables
# (SetSpecialPoint solo controla visual; el mesh integration está en
# tabla "Joint Assignments - Floor Meshing Option")
# ────────────────────────────────────────────────────────────────────
mesh_table = "Joint Assignments - Floor Meshing Option"
fk = []; group = ""; ver = 0; fi = []; n = 0; td = []
ret, ver, fi, n, td = db_pre.GetTableForEditingArray(mesh_table, group, ver, fi, n, td)
fi = list(fi); td = list(td)
print(f"-> Editing '{mesh_table}': existing rows={n}, headers={fi}")

# Agregar 9 filas para joint_base (uno por zapata)
cols = len(fi)
name_col = next((i for i, h in enumerate(fi) if "name" in h.lower()), 0)
inc_col = next((i for i, h in enumerate(fi) if "include" in h.lower() or "mesh" in h.lower()), 1)
new_rows = []
for cid in joint_base:
    row = [""] * cols
    row[name_col] = joint_base[cid]
    row[inc_col] = "Yes"
    new_rows.extend(row)

new_td = td + new_rows
new_n = n + len(joint_base)
ret = db_pre.SetTableForEditingArray(mesh_table, ver, fi, new_n, new_td)
print(f"   SetTableForEditingArray ret={ret} (added {len(joint_base)} joints)")
nfe = nem = nwm = nim = 0; ilog = ""
ret, nfe, nem, nwm, nim, ilog = db_pre.ApplyEditedTables(True, nfe, nem, nwm, nim, ilog)
print(f"   ApplyEditedTables ret={ret} err={nfe} warn={nwm} info={nim}")

print("-> RunAnalysis...")
analyze = cAnalyze(sap.Analyze)
t0 = time.time()
ret = analyze.RunAnalysis()
runtime_s = time.time() - t0
print(f"   RunAnalysis ret={ret} ({runtime_s:.2f}s)")

# ────────────────────────────────────────────────────────────────────
# 11. Extraer resultados — desplazamientos en 9 centros de columna
# ────────────────────────────────────────────────────────────────────
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

jh, jr = get_table("Joint Displacements")
print(f"-> Joint Displacements: {len(jr)} rows")
uz_c = col(jh, "U3","Uz","UZ")
ux_c = col(jh, "U1","Ux","UX")
uy_c = col(jh, "U2","Uy","UY")
joint_c = col(jh, "UniqueName","Joint","Point","Label")

samples_9cols = []
po2 = cPointObj(sap.PointObj)
for cid, X, Y, Lz, Bz, rol in COLUMNS:
    # Extraer uz tanto en BASE (zapata, sobre Winkler) como en TOP (pedestal)
    base_name = joint_base[cid]
    top_name = joint_top[cid]
    uz_base = uz_top = ux = uy = 0.0
    for r in jr:
        jn = str(r[joint_c])
        if jn == base_name:
            try: uz_base = float(r[uz_c])
            except: pass
        elif jn == top_name:
            try:
                uz_top = float(r[uz_c]); ux = float(r[ux_c]); uy = float(r[uy_c])
            except: pass
    samples_9cols.append({
        "col_id": cid, "rol": rol,
        "x": X, "y": Y, "Lz": Lz, "Bz": Bz,
        "FZ_tonf": LOADS[cid]["FZ"],
        "MX_tonfm": LOADS[cid]["MX"], "MY_tonfm": LOADS[cid]["MY"],
        "ux_top_mm": round(ux * 1000, 4),
        "uy_top_mm": round(uy * 1000, 4),
        "uz_top_mm": round(uz_top * 1000, 4),
        "uz_base_mm": round(uz_base * 1000, 4),
        "q_tonfm2": round(P_GLOBAL["ks_kNm3"] * abs(uz_base) / 9.80665, 3),
    })

P_total_tonf = sum(l["FZ"] for l in LOADS.values())
A_total = sum(Lz*Bz for _, _, _, Lz, Bz, _ in COLUMNS)
w_avg_teo_mm = abs(P_total_tonf) / (A_total * 105) * 1000   # P/(A·ks) en mm

out = {
    "solver": "SAFE 20 via API (9 zap + 12 vigas + 9 cargas reales del edificio)",
    "case": "Cimentación Edificio Real (9 zapatas + 12 vigas amarre)",
    "saved_at": SAVE_PATH,
    "params": P_GLOBAL,
    "columns": [{"id": c[0], "x": c[1], "y": c[2], "Lz": c[3], "Bz": c[4], "rol": c[5]} for c in COLUMNS],
    "loads": LOADS,
    "beams_connectivity": BEAMS,
    "theory": {
        "P_total_tonf": P_total_tonf,
        "A_total_m2": A_total,
        "w_avg_winkler_teo_mm": round(w_avg_teo_mm, 4),
    },
    "results": {
        "runtime_s": round(runtime_s, 2),
        "samples_9cols": samples_9cols,
    },
}
if json_out:
    Path(json_out).write_text(json.dumps(out, indent=2), encoding="utf-8")
    print(f"-> JSON: {json_out}")

print("\n" + "="*78)
print(f"  SAFE API - Cimentación Edificio Real (9 zap + 12 vigas)")
print("="*78)
print(f"  P_total: {P_total_tonf:.2f} tonf | A_total: {A_total:.1f} m² | w_teo: {w_avg_teo_mm:.3f} mm")
print(f"  Runtime: {runtime_s:.2f}s")
print("-"*78)
print(f"  {'col':>3} {'rol':<13} {'pos':<10} {'dim':<10} {'FZ':>7} {'MY':>6} {'uz_base':>9} {'uz_top':>9} {'q_tonfm2':>9}")
for s in samples_9cols:
    print(f"  {s['col_id']:>3} {s['rol']:<13} ({s['x']:>2},{s['y']:>2})    {s['Lz']:.1f}×{s['Bz']:.1f}    {s['FZ_tonf']:>+6.2f} {s['MY_tonfm']:>+5.2f} {s['uz_base_mm']:>+8.3f} {s['uz_top_mm']:>+8.3f} {s['q_tonfm2']:>9.2f}")
print("="*78)

if not keep_open:
    safe_obj.ApplicationExit(False)
