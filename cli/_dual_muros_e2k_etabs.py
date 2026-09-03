# ETABS: probar claves de e2k para MALLAR los muros del dual (4 x 1 por panel) y leer periodos.
import comtypes.client, comtypes.gen.ETABSv1 as S, os, json, re
src = open("validation/modelos/plantillas/csi/P6_dual.e2k", encoding="utf-8", errors="ignore").read()
cands = {
  "A_autorect": ' OBJMESHTYPE "AUTORECTMESH"  MESHHORIZ 4  MESHVERT 1',
  "B_n1xn2": ' OBJMESHTYPE "MESHN1XN2"  MESHFLOORN1 4  MESHFLOORN2 1',
  "C_n1xn2_hv": ' MESHTYPE "MESHN1XN2"  MESHHORIZ 4  MESHVERT 1',
}
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(S.cHelper)
o = h.GetObject("CSI.ETABS.API.ETABSObject")
if o is None: o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject"); o.ApplicationStart()
sm = o.SapModel; out = {}
for tag, extra in cands.items():
    txt = re.sub(r'(AREAASSIGN\s+"[^"]+"\s+"[^"]+"\s+SECTION\s+"Muro"[^\n]*?)(\s*\n)', lambda m: m.group(1) + extra + m.group(2), src)
    f = os.path.abspath(f"validation/modelos/plantillas/etabs/P6_dual_mm_{tag}.e2k"); open(f, "w", encoding="utf-8").write(txt)
    sm.InitializeNewModel(6); rc = sm.File.OpenFile(f); sm.SetPresentUnits(6)
    sm.File.Save(os.path.abspath(f"validation/modelos/plantillas/etabs/P6_dual_mm_{tag}.EDB"))
    run = sm.Analyze.RunAnalysis()
    npe = sm.PointElm.Count()
    sm.Results.Setup.DeselectAllCasesAndCombosForOutput(); sm.Results.Setup.SetCaseSelectedForOutput("Modal")
    r = sm.Results.ModalPeriod(0, [], [], [], [], [], []); T = list(r[4][:12]) if r[0] else []
    out[tag] = {"open": rc, "run": run, "nudos_analisis": npe, "T": T}
    print(tag, "open", rc, "run", run, "nudos analisis", npe, "T:", " ".join("%.4f" % t for t in T))
print("sin mallar (1049 nudos): 0.6822 0.2135 0.1828 0.1626 0.1167 0.0796 0.0521 0.0458 0.0384 0.0357 0.0334 0.0307")
json.dump(out, open("validation/modelos/plantillas/etabs/P6_dual_muros_mallados.json", "w"), indent=1)
