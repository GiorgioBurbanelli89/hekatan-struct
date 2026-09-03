import comtypes.client, comtypes.gen.ETABSv1 as S, os, json
f = os.path.abspath("validation/modelos/plantillas/etabs/dual2.e2k")
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(S.cHelper)
o = h.GetObject("CSI.ETABS.API.ETABSObject")
if o is None: o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject"); o.ApplicationStart()
sm = o.SapModel; sm.InitializeNewModel(6); print("OpenFile", sm.File.OpenFile(f)); sm.SetPresentUnits(6)
pts = [(p, *sm.PointObj.GetCoordCartesian(p)[:3]) for p in sm.PointObj.GetNameList()[1]]
zs = sorted(set(round(t[3], 3) for t in pts)); print("cotas", zs)
sm.LoadPatterns.Add("LAT2", 3); cargas = {}
for k, z in enumerate(zs[1:], 1):
    esq = max([t for t in pts if abs(t[3] - z) < 1e-6], key=lambda t: (t[1], t[2])); F = 100.0 if k == 1 else -100.0
    sm.PointObj.SetLoadForce(esq[0], "LAT2", [F, 0, 0, 0, 0, 0]); cargas[str(z)] = [esq[1], esq[2], esq[3], F]
for fr in sm.FrameObj.GetNameList()[1]: sm.FrameObj.SetEndLengthOffset(fr, False, 0, 0, 0)
sm.File.Save(os.path.abspath("validation/modelos/plantillas/etabs/dual2_lat2.EDB")); sm.Analyze.SetRunCaseFlag("", True, True); print("run", sm.Analyze.RunAnalysis())
sm.Results.Setup.DeselectAllCasesAndCombosForOutput(); sm.Results.Setup.SetCaseSelectedForOutput("LAT2")
out = []
for p, x, y, z in pts:
    if z < 1e-6: continue
    r = sm.Results.JointDispl(p, 0, 0, [], [], [], [], [], [], [], [], [], [], [])
    if r[0]: out.append({"p": p, "x": x, "y": y, "z": z, "ux": r[6][0], "uy": r[7][0], "uz": r[8][0], "rx": r[9][0], "ry": r[10][0], "rz": r[11][0]})
json.dump({"cargas": cargas, "nudos": out}, open("validation/modelos/plantillas/etabs/dual2_lat2.json", "w"), indent=1); print("nudos", len(out))
