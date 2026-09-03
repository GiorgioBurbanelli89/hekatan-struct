# ETABS: el dual SIN diafragma rigido (y sin LUMPATSTORIES): ¿se mueven los modos 5-8 hacia Hekatan?
import comtypes.client, comtypes.gen.ETABSv1 as S, os, json
edb = os.path.abspath("validation/modelos/plantillas/etabs/edb/P6_dual.EDB")
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(S.cHelper)
o = h.GetObject("CSI.ETABS.API.ETABSObject")
if o is None: o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject"); o.ApplicationStart()
sm = o.SapModel; print("OpenFile", sm.File.OpenFile(edb)); sm.SetPresentUnits(6); sm.SetModelIsLocked(False)
def periodos(tag):
    sm.Analyze.SetRunCaseFlag("", True, True); sm.Analyze.RunAnalysis()
    sm.Results.Setup.DeselectAllCasesAndCombosForOutput(); sm.Results.Setup.SetCaseSelectedForOutput("Modal")
    r = sm.Results.ModalPeriod(0, [], [], [], [], [], []); T = list(r[4][:8]) if r[0] else []
    print(tag, " ".join("%.4f" % t for t in T)); return T
out = {"con_diaf": periodos("CON diafragma (como esta):")}
sm.SetModelIsLocked(False)
areas = sm.AreaObj.GetNameList()[1]; n = 0
for a in areas:
    if sm.AreaObj.SetDiaphragm(a, "None") == 0: n += 1
pts = sm.PointObj.GetNameList()[1]; m = 0
for p in pts:
    try:
        if sm.PointObj.SetDiaphragm(p, 1, "") == 0: m += 1     # 1 = eDiaphragmOption.Disconnect
    except Exception: pass
print("areas sin diafragma:", n, "/", len(areas), " puntos desconectados:", m)
out["sin_diaf"] = periodos("SIN diafragma:")
sm.SetModelIsLocked(False)
try:
    r = sm.PropMaterial.GetMassSource_1() if hasattr(sm.PropMaterial, "GetMassSource_1") else None
    print("SetMassSource sin lump:", sm.PropMaterial.SetMassSource_1(True, False, False, False, True, False, 0, [], []) if hasattr(sm.PropMaterial, "SetMassSource_1") else "n/a")
except Exception as e: print("mass source:", str(e)[:100])
out["sin_diaf_sin_lump"] = periodos("SIN diafragma, sin LUMPATSTORIES:")
json.dump(out, open("validation/modelos/plantillas/etabs/P6_dual_sin_diaf.json", "w"), indent=1)
print("Hekatan sin diafragma: 0.6804 0.2152 0.1813 0.1600 0.1196 0.0825 0.0552 0.0488")
