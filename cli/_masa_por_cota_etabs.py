# Masa ensamblada de ETABS por COTA, con las coordenadas de cada nudo de analisis (no por etiqueta).
import comtypes.client, comtypes.gen.ETABSv1 as S, os, sys, json
edb = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else "validation/modelos/plantillas/etabs/edb/P6_dual.EDB")
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(S.cHelper)
o = h.GetObject("CSI.ETABS.API.ETABSObject")
if o is None: o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject"); o.ApplicationStart()
sm = o.SapModel; print("OpenFile", sm.File.OpenFile(edb)); sm.SetPresentUnits(6)
sm.Analyze.SetRunCaseFlag("", True, True); print("run", sm.Analyze.RunAnalysis())
r = sm.Results.AssembledJointMass_1("", "All", 2); n = r[0]; print("nudos con masa:", n)
por = {}; nudos = []
for k in range(n):
    nm = r[1][k]; ux = r[3][k]
    c = sm.PointElm.GetCoordCartesian(nm); z = round(c[2], 3)
    por.setdefault(z, [0, 0]); por[z][0] += ux; por[z][1] += 1
    nudos.append((nm, round(c[0], 3), round(c[1], 3), z, ux))
for z in sorted(por): print("z=%6.2f  nudos %4d  masa UX %9.3f" % (z, por[z][1], por[z][0]))
print("total", sum(v[0] for v in por.values()))
# los 10 nudos con mas masa en la base
base = sorted([t for t in nudos if abs(t[3]) < 1e-6], key=lambda t: -t[4])[:10]; print("base, mas pesados:", base)
json.dump(nudos, open("validation/modelos/plantillas/etabs/P6_dual_masa_xyz.json", "w"))
