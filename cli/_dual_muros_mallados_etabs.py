# ETABS: el dual con los MUROS MALLADOS como en Hekatan (4 x 1 por panel): ¿se acercan los modos 7-8 al Hekatan con diafragma?
import comtypes.client, comtypes.gen.ETABSv1 as S, os, json
edb = os.path.abspath("validation/modelos/plantillas/etabs/edb/P6_dual.EDB")
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(S.cHelper)
o = h.GetObject("CSI.ETABS.API.ETABSObject")
if o is None: o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject"); o.ApplicationStart()
sm = o.SapModel; print("OpenFile", sm.File.OpenFile(edb)); sm.SetPresentUnits(6); sm.SetModelIsLocked(False)
areas = sm.AreaObj.GetNameList()[1]; muros = []
for a in areas:
    sec = sm.AreaObj.GetProperty(a)[0]
    if "muro" in str(sec).lower() or "wall" in str(sec).lower(): muros.append(a)
print("muros:", len(muros), "de", len(areas), "secciones:", sorted(set(sm.AreaObj.GetProperty(a)[0] for a in areas)))
n = 0
for a in muros:
    r = sm.AreaObj.SetAutoMesh(a, 1, 4, 1, 0, 0, False, False, False, 0, 0, False, False, False, False, "", False, 0, 0)
    if r == 0: n += 1
print("mallados 4x1:", n)
sm.File.Save(os.path.abspath("validation/modelos/plantillas/etabs/P6_dual_muros_mallados.EDB"))
sm.Analyze.SetRunCaseFlag("", True, True); print("run", sm.Analyze.RunAnalysis())
sm.Results.Setup.DeselectAllCasesAndCombosForOutput(); sm.Results.Setup.SetCaseSelectedForOutput("Modal")
r = sm.Results.ModalPeriod(0, [], [], [], [], [], []); T = list(r[4][:12]); print("MUROS MALLADOS:", " ".join("%.4f" % t for t in T))
print("antes (sin mallar): 0.6822 0.2135 0.1828 0.1626 0.1167 0.0796 0.0521 0.0458 0.0384 0.0357 0.0334 0.0307")
print("Hekatan diaf=1:     0.6803 0.2150 0.1777 0.1571 0.1192 0.0818 0.0437 0.0392 0.0223 0.0201 0.0166 0.0149")
print("Hekatan diaf=0:     0.6804 0.2152 0.1813 0.1600 0.1196 0.0825 0.0552 0.0488 0.0410 0.0375 0.0362 0.0327")
json.dump({"T": T}, open("validation/modelos/plantillas/etabs/P6_dual_muros_mallados.json", "w"))
