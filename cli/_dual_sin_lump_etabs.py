# ETABS: el dual con LUMPATSTORIES "No" (por e2k): periodos y masa por cota. ¿Sigue el nudo 1 con 258 t?
import comtypes.client, comtypes.gen.ETABSv1 as S, os, json, re
src = "validation/modelos/plantillas/csi/P6_dual.e2k"; txt = open(src, encoding="utf-8", errors="ignore").read()
txt2 = txt.replace('LUMPATSTORIES "Yes"', 'LUMPATSTORIES "No"'); assert txt2 != txt
dst = os.path.abspath("validation/modelos/plantillas/etabs/P6_dual_sinlump.e2k"); open(dst, "w", encoding="utf-8").write(txt2)
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(S.cHelper)
o = h.GetObject("CSI.ETABS.API.ETABSObject")
if o is None: o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject"); o.ApplicationStart()
sm = o.SapModel; sm.InitializeNewModel(6); print("OpenFile", sm.File.OpenFile(dst)); sm.SetPresentUnits(6)
sm.File.Save(os.path.abspath("validation/modelos/plantillas/etabs/P6_dual_sinlump.EDB"))
sm.Analyze.SetRunCaseFlag("", True, True); print("run", sm.Analyze.RunAnalysis())
sm.Results.Setup.DeselectAllCasesAndCombosForOutput(); sm.Results.Setup.SetCaseSelectedForOutput("Modal")
r = sm.Results.ModalPeriod(0, [], [], [], [], [], []); print("SIN LUMP:", " ".join("%.4f" % t for t in r[4][:8]))
r = sm.Results.AssembledJointMass_1("", "All", 2); n = r[0]; por = {}; top = []
for k in range(n):
    nm = r[1][k]; ux = r[3][k]; c = sm.PointElm.GetCoordCartesian(nm); z = round(c[2], 3)
    por[z] = por.get(z, 0) + ux; top.append((ux, nm, round(c[0], 2), round(c[1], 2), z))
for z in sorted(por): print("z=%6.2f masa %9.3f" % (z, por[z]))
print("top 5:", sorted(top, reverse=True)[:5])
print("CON lump (antes): 0.6822 0.2135 0.1828 0.1626 0.1167 0.0796 0.0521 0.0458 | Hekatan 0.6804 0.2152 0.1813 0.1600 0.1196 0.0825 0.0552 0.0488")
