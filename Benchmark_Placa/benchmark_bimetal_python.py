# -*- coding: utf-8 -*-
"""
SAP2000 - Bimetalico (2 capas, E distinto)
==========================================
Replica el caso del preset "Bimetálico" del layered-shell de Hekatan.
Usa la API Python (comtypes) que SI funciona — el OAPI PowerShell tiene
bug en SetShellLayer_1 (silenciosamente ignora la config layered).

Caso:
  L = 4 m (cuadrada)
  t_total = 0.30 m (= 2 * 0.15)
  Capa 1 (z<0): E1 = 30e6 kPa
  Capa 2 (z>0): E2 = 15e6 kPa
  nu = 0.30, q = 10 kN/m^2, mesh 10x10, simply supported

Output: JSON con w_max, u/v_max, M11/M22/M12, N11/N22 → comparacion vs
Hekatan layeredQ4Solve.
"""
import comtypes.client
import json
import time
import os

# ── Parametros del caso (mismo que el preset Bimetalico de Hekatan) ──
L = 4.0
t_total = 0.30
t1_frac = 0.5
E1_kPa = 30_000_000.0
E2_kPa = 15_000_000.0
nu = 0.30
q = 10.0           # kN/m^2 (downward)
NDiv = 10
out_path = os.path.join(os.path.dirname(__file__), "sap2000_bimetal_python.json")

print("=" * 78)
print(" SAP2000 BIMETAL via Python OAPI (Shell-Layered tipo 6)")
print("=" * 78)
print(f" L={L}m  t={t_total}m  E1={E1_kPa:.0e}kPa  E2={E2_kPa:.0e}kPa")
print(f" nu={nu}  q={q}kN/m²  mesh={NDiv}x{NDiv}")

# ── Conexion ──
print("\n>>> Conectando a SAP2000...")
try:
    mySapObject = comtypes.client.GetActiveObject("CSI.SAP2000.API.SapObject")
    SapModel = mySapObject.SapModel
    print("    Reusando instancia activa")
    was_running = True
except Exception:
    print("    Iniciando nueva instancia...")
    helper = comtypes.client.CreateObject("SAP2000v1.Helper")
    helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
    mySapObject = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
    mySapObject.ApplicationStart(6, True)  # 6 = kN-m, visible=True
    time.sleep(4)
    SapModel = mySapObject.SapModel
    was_running = False

# ── Modelo blank ──
SapModel.InitializeNewModel(6)
SapModel.File.NewBlank()

# ── Materiales (2 distintos: MatE1, MatE2) ──
SapModel.PropMaterial.SetMaterial("MatE1", 2)  # 2 = Concrete
SapModel.PropMaterial.SetMPIsotropic("MatE1", E1_kPa, nu, 1e-5)
SapModel.PropMaterial.SetMaterial("MatE2", 2)
SapModel.PropMaterial.SetMPIsotropic("MatE2", E2_kPa, nu, 1e-5)
print("\n>>> 2 materiales creados: MatE1, MatE2")

# ── Seccion Shell-Layered (tipo 6) ──
sec = "BIMETAL"
SapModel.PropArea.SetShell_1(sec, 6, False, "MatE1", 0, t_total, t_total)

# Configurar capas: cada capa con su propio material
t1 = t_total * t1_frac
t2 = t_total * (1 - t1_frac)
n_layers = 2

# Para SetShellLayer las posiciones se miden desde mid-plane:
# Capa 1 va de -t/2 a -t/2+t1, midplane a -t/2 + t1/2
# Capa 2 va de -t/2+t1 a +t/2,  midplane a -t/2 + t1 + t2/2
dist_1 = -t_total / 2 + t1 / 2
dist_2 = -t_total / 2 + t1 + t2 / 2

# SetShellLayer(Name, NumLayers, LayerName, Dist, Thickness, MatProp, Nonlinear, MatAng, NumIntegrationPts)
# Firma del stub comtypes (CSiAPIv1) — 9 args.
ret = SapModel.PropArea.SetShellLayer(
    sec,
    n_layers,
    ["L1_inf", "L2_sup"],          # LayerName
    [dist_1, dist_2],              # Dist (desde mid-plane)
    [t1, t2],                      # Thickness
    ["MatE1", "MatE2"],            # MatProp por capa
    [False, False],                # Nonlinear (linear analysis)
    [0.0, 0.0],                    # MatAng
    [3, 3],                        # NumIntegrationPts
)
print(f"    SetShellLayer ret = {ret}")
print(f"    Capa 1 (inf): dist={dist_1:.4f}m  t={t1:.3f}m  mat=MatE1 (E={E1_kPa:.0e})")
print(f"    Capa 2 (sup): dist={dist_2:.4f}m  t={t2:.3f}m  mat=MatE2 (E={E2_kPa:.0e})")

# ── Nudos (IDs numericos, SAP-friendly) ──
print("\n>>> Creando nudos...")
nudos = {}
nid = 1
for i in range(NDiv + 1):
    for j in range(NDiv + 1):
        x = i * L / NDiv
        y = j * L / NDiv
        nm = str(nid)
        SapModel.PointObj.AddCartesian(float(x), float(y), 0.0, nm)
        nudos[(i, j)] = nm
        nid += 1
print(f"    {len(nudos)} nudos")

# ── Areas Q4 ──
aid = 1
print(f">>> Creando {NDiv*NDiv} elementos Q4...")
for i in range(NDiv):
    for j in range(NDiv):
        pts = [nudos[(i, j)], nudos[(i+1, j)], nudos[(i+1, j+1)], nudos[(i, j+1)]]
        nm = str(aid)
        SapModel.AreaObj.AddByPoint(4, pts, nm, sec)
        aid += 1
print(f"    {aid-1} areas")

# ── BCs simply supported ──
print(">>> Restraints simply supported...")
for (i, j), nm in nudos.items():
    is_perim = (i == 0 or i == NDiv or j == 0 or j == NDiv)
    if not is_perim:
        continue
    if i == 0 and j == 0:
        rest = [True, True, True, False, False, False]
    elif i == NDiv and j == 0:
        rest = [False, True, True, False, False, False]
    else:
        rest = [False, False, True, False, False, False]
    SapModel.PointObj.SetRestraint(nm, rest)

# ── Carga ──
print(">>> Carga uniforme...")
SapModel.LoadPatterns.Add("Q", 8, 0, True)  # 8 = Other
ret = SapModel.AreaObj.GetNameList()
all_areas = list(ret[1])
for a in all_areas:
    SapModel.AreaObj.SetLoadUniform(a, "Q", q, 10, True, "Global")  # 10 = Gravity

# ── Save + Run ──
sdb = os.path.join(os.environ["TEMP"], "bench_bimetal_python.sdb")
if os.path.exists(sdb):
    os.remove(sdb)
SapModel.File.Save(sdb)

print("\n>>> Run analysis...")
t0 = time.time()
ret = SapModel.Analyze.RunAnalysis()
dt = time.time() - t0
print(f"    RunAnalysis ret={ret} en {dt:.1f}s")

# ── Resultados ──
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("Q")

# Joint displacements
res = SapModel.Results.JointDispl("All", 2)
N = res[0]
joints = res[1]
U1 = res[7]; U2 = res[8]; U3 = res[9]

max_uz, max_u, max_v = 0.0, 0.0, 0.0
for k in range(N):
    if abs(U3[k]) > abs(max_uz): max_uz = U3[k]
    if abs(U1[k]) > abs(max_u): max_u = U1[k]
    if abs(U2[k]) > abs(max_v): max_v = U2[k]

# Area force shell
res = SapModel.Results.AreaForceShell("All", 2)
N_a = res[0]
F11 = res[7]; F22 = res[8]; F12 = res[9]
M11 = res[14]; M22 = res[15]; M12 = res[16]
max_M11, max_M22, max_N11 = 0.0, 0.0, 0.0
for k in range(N_a):
    if abs(M11[k]) > abs(max_M11): max_M11 = M11[k]
    if abs(M22[k]) > abs(max_M22): max_M22 = M22[k]
    if abs(F11[k]) > abs(max_N11): max_N11 = F11[k]

print("\n" + "=" * 78)
print(" RESULTADOS BIMETAL — SAP2000 Shell-Layered (Python OAPI)")
print("=" * 78)
print(f" w_max  = {abs(max_uz)*1000:.4f} mm")
print(f" u_max  = {abs(max_u)*1000:.6f} mm  (membrane displacement)")
print(f" v_max  = {abs(max_v)*1000:.6f} mm")
print(f" M11_max = {max_M11:.4f} kN·m/m")
print(f" M22_max = {max_M22:.4f} kN·m/m")
print(f" N11_max = {max_N11:.4f} kN/m  (debe ser != 0 si hay coupling)")

out = {
    "program": "SAP2000 Shell-Layered (Python OAPI)",
    "case": {
        "L_m": L, "t_total_m": t_total, "t1_frac": t1_frac,
        "E1_kPa": E1_kPa, "E2_kPa": E2_kPa, "nu": nu,
        "q_kPa": q, "mesh": f"{NDiv}x{NDiv}",
    },
    "sap2000": {
        "w_max_m": max_uz, "u_max_m": max_u, "v_max_m": max_v,
        "M11_max_kNm_m": max_M11, "M22_max_kNm_m": max_M22,
        "N11_max_kN_m": max_N11,
        "runtime_s": dt,
    },
}
with open(out_path, "w") as f:
    json.dump(out, f, indent=2)
print(f"\nJSON: {out_path}")
print("\n>>> SAP2000 permanece abierto (cierra manualmente si quieres)")
