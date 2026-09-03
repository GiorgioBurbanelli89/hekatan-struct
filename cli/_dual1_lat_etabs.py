# ETABS: dual de 1 planta (e2k de la plantilla) + 100 kN en X en un nudo de esquina del techo. Desplazamientos de TODOS los nudos del techo.
import comtypes.client, comtypes.gen.ETABSv1 as S, os, json
f = os.path.abspath("validation/modelos/plantillas/etabs/dual1.e2k")
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(S.cHelper)
o = h.GetObject("CSI.ETABS.API.ETABSObject")
if o is None: o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject"); o.ApplicationStart()
sm = o.SapModel; sm.InitializeNewModel(6); print("OpenFile", sm.File.OpenFile(f)); sm.SetPresentUnits(6)
pts = sm.PointObj.GetNameList()[1]; techo = []
for p in pts:
    c = sm.PointObj.GetCoordCartesian(p); techo.append((p, c[0], c[1], c[2]))
zmax = max(t[3] for t in techo); techo = [t for t in techo if abs(t[3] - zmax) < 1e-6]
esq = max(techo, key=lambda t: (t[1], t[2])); print("techo z", zmax, "nudos", len(techo), "esquina", esq)
sm.LoadPatterns.Add("LAT", 3); print("carga", sm.PointObj.SetLoadForce(esq[0], "LAT", [100.0, 0, 0, 0, 0, 0]))
for fr in sm.FrameObj.GetNameList()[1]: sm.FrameObj.SetEndLengthOffset(fr, False, 0, 0, 0)
sm.File.Save(os.path.abspath("validation/modelos/plantillas/etabs/dual1_lat.EDB")); sm.Analyze.SetRunCaseFlag("", True, True); print("run", sm.Analyze.RunAnalysis())
sm.Results.Setup.DeselectAllCasesAndCombosForOutput(); sm.Results.Setup.SetCaseSelectedForOutput("LAT")
out = []
for p, x, y, z in techo:
    r = sm.Results.JointDispl(p, 0, 0, [], [], [], [], [], [], [], [], [], [], [])
    if r[0]: out.append({"p": p, "x": x, "y": y, "z": z, "ux": r[6][0], "uy": r[7][0], "uz": r[8][0], "rz": r[11][0]})
sm.Results.Setup.DeselectAllCasesAndCombosForOutput(); sm.Results.Setup.SetCaseSelectedForOutput("Modal")
r = sm.Results.ModalPeriod(0, [], [], [], [], [], []); T = list(r[4][:8]) if r[0] else []
print("T:", " ".join("%.4f" % t for t in T)); ux = [d["ux"] for d in out]; print("ux techo: min %.4e max %.4e" % (min(ux), max(ux)))
json.dump({"esquina": esq, "techo": out, "T": T}, open("validation/modelos/plantillas/etabs/dual1_lat.json", "w"), indent=1)
