# SAP2000: dual de 1 planta (s2k de la plantilla) + diafragma rigido en TODOS los nudos del techo + 100 kN en X en la esquina.
import comtypes.client, comtypes.gen.SAP2000v1 as S, os, json
f = os.path.abspath("validation/modelos/plantillas/etabs/dual1.s2k")
h = comtypes.client.CreateObject("SAP2000v1.Helper").QueryInterface(S.cHelper)
o = h.CreateObjectProgID("CSI.SAP2000.API.SapObject"); o.ApplicationStart(); sm = o.SapModel
sm.InitializeNewModel(6); print("OpenFile", sm.File.OpenFile(f)); sm.SetPresentUnits(6)
pts = sm.PointObj.GetNameList()[1]; todos = []
for p in pts:
    c = sm.PointObj.GetCoordCartesian(p); todos.append((p, c[0], c[1], c[2]))
zmax = max(t[3] for t in todos); techo = [t for t in todos if abs(t[3] - zmax) < 1e-6]
esq = max(techo, key=lambda t: (t[1], t[2])); print("techo z", zmax, "nudos", len(techo), "esquina", esq)
print("diafragma", sm.ConstraintDef.SetDiaphragm("D1", 3))     # eje Z
n = 0
for p, x, y, z in techo:
    if sm.PointObj.SetConstraint(p, "D1", 0, True) == 0: n += 1
print("nudos atados:", n)
sm.LoadPatterns.Add("LAT", 3); print("carga", sm.PointObj.SetLoadForce(esq[0], "LAT", [100.0, 0, 0, 0, 0, 0]))
sm.File.Save(os.path.abspath("validation/modelos/plantillas/etabs/dual1_lat_sap.sdb")); sm.Analyze.SetRunCaseFlag("", True, True); print("run", sm.Analyze.RunAnalysis())
sm.Results.Setup.DeselectAllCasesAndCombosForOutput(); sm.Results.Setup.SetCaseSelectedForOutput("LAT")
out = []
for p, x, y, z in techo:
    r = sm.Results.JointDispl(p, 0, 0, [], [], [], [], [], [], [], [], [], [], [])
    if r[0]: out.append({"p": p, "x": x, "y": y, "z": z, "ux": r[6][0], "uy": r[7][0], "uz": r[8][0], "rz": r[11][0]})
ux = [d["ux"] for d in out]; e = [d for d in out if d["p"] == esq[0]][0]
print("SAP ux esquina %.5e  (ETABS 3.24329e-5 ; Hekatan diaf=1 2.81840e-5, diaf=3 3.56806e-5)" % e["ux"])
json.dump({"esquina": esq, "techo": out}, open("validation/modelos/plantillas/etabs/dual1_lat_sap.json", "w"), indent=1)
