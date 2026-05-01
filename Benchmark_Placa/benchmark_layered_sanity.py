# -*- coding: utf-8 -*-
"""
Sanity check: SAP layered con 2 capas IDENTICAS deberia dar igual al
homogeneo Plate-Thick. Si no coincide → bug formulación SAP layered.
Mismo caso que sap2000_iso_test (Plate-Thick) pero como 2 capas E=30e6 c/u.
"""
import comtypes.client, json, time, os

L, t_total, E, nu, q = 4.0, 0.30, 30_000_000.0, 0.30, 10.0
NDiv = 10
out_path = os.path.join(os.path.dirname(__file__), "sap2000_layered_sanity.json")

print("=" * 70)
print(" SANITY: SAP layered 2 capas IDENTICAS (E=30e6 c/u, t=0.30 total)")
print(" Debe coincidir con SAP Plate-Thick homogeneo (w=0.149 mm, M=7.97)")
print("=" * 70)

helper = comtypes.client.CreateObject("SAP2000v1.Helper")
helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
sap = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
sap.ApplicationStart(6, True)
time.sleep(4)
m = sap.SapModel
m.InitializeNewModel(6); m.File.NewBlank()

m.PropMaterial.SetMaterial("MAT", 2)
m.PropMaterial.SetMPIsotropic("MAT", E, nu, 1e-5)

# Shell-Layered con 2 capas IGUALES
m.PropArea.SetShell_1("HOMO", 6, False, "MAT", 0, t_total, t_total)
m.PropArea.SetShellLayer(
    "HOMO", 2,
    ["L1", "L2"],
    [-t_total/4, t_total/4],
    [t_total/2, t_total/2],
    ["MAT", "MAT"],          # mismo material
    [False, False],
    [0.0, 0.0],
    [9, 9],   # mas puntos integration thru-thickness (default era 3)
)

# Mesh
nodes = {}; nid = 1
for i in range(NDiv + 1):
    for j in range(NDiv + 1):
        m.PointObj.AddCartesian(float(i*L/NDiv), float(j*L/NDiv), 0.0, str(nid))
        nodes[(i, j)] = str(nid); nid += 1
aid = 1
for i in range(NDiv):
    for j in range(NDiv):
        pts = [nodes[(i,j)], nodes[(i+1,j)], nodes[(i+1,j+1)], nodes[(i,j+1)]]
        m.AreaObj.AddByPoint(4, pts, str(aid), "HOMO"); aid += 1

# BCs SS
for (i, j), nm in nodes.items():
    if not (i==0 or i==NDiv or j==0 or j==NDiv): continue
    if i==0 and j==0: rest = [True,True,True,False,False,False]
    elif i==NDiv and j==0: rest = [False,True,True,False,False,False]
    else: rest = [False,False,True,False,False,False]
    m.PointObj.SetRestraint(nm, rest)

m.LoadPatterns.Add("Q", 8, 0, True)
ret = m.AreaObj.GetNameList()
for a in list(ret[1]):
    m.AreaObj.SetLoadUniform(a, "Q", q, 10, True, "Global")

m.File.Save(os.path.join(os.environ["TEMP"], "sanity_layered.sdb"))
m.Analyze.RunAnalysis()

m.Results.Setup.DeselectAllCasesAndCombosForOutput()
m.Results.Setup.SetCaseSelectedForOutput("Q")

res = m.Results.JointDispl("All", 2)
N = res[0]; U1, U2, U3 = res[7], res[8], res[9]
maxU, maxV, maxW = 0.0, 0.0, 0.0
for k in range(N):
    if abs(U1[k])>abs(maxU): maxU = U1[k]
    if abs(U2[k])>abs(maxV): maxV = U2[k]
    if abs(U3[k])>abs(maxW): maxW = U3[k]
res = m.Results.AreaForceShell("All", 2)
M11 = res[14]; F11 = res[7]
maxM, maxN = 0.0, 0.0
for k in range(res[0]):
    if abs(M11[k])>abs(maxM): maxM = M11[k]
    if abs(F11[k])>abs(maxN): maxN = F11[k]

print(f"\n SAP Layered (2 capas E=30e6 IDENTICAS):")
print(f"   w_max = {abs(maxW)*1000:.4f} mm")
print(f"   u_max = {abs(maxU)*1000:.6f} mm")
print(f"   v_max = {abs(maxV)*1000:.6f} mm")
print(f"   M_max = {maxM:.4f} kN.m/m")
print(f"   N_max = {maxN:.6f} kN/m")
print(f"\n SAP Plate-Thick (HOMOGENEO equivalente, sin layered):")
print(f"   w_max = 0.1486 mm  M_max = 7.97 kN.m/m  (sap2000_iso_test.json)")

with open(out_path, "w") as f:
    json.dump({"w_max_m": maxW, "u_max_m": maxU, "v_max_m": maxV,
               "M11_max_kNm_m": maxM, "N11_max_kN_m": maxN}, f, indent=2)
print(f"\n JSON: {out_path}")
