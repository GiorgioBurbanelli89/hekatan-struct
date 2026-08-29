# -*- coding: utf-8 -*-
"""Longitud de los FRAME ELM (modelo de analisis) contra los FRAME OBJ, y los
end length offsets. ETABS pesa 1.214 kN menos de lo que da A x L x gamma."""
import os, collections, comtypes.client
import comtypes.gen.ETABSv1 as E
G = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                 "..", "..", "..", "galpon-bodega-electoral"))
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
o.ApplicationStart()
sm = o.SapModel
sm.File.OpenFile(os.path.join(G, "parte_mezanine_maciza_thin.EDB"))
sm.SetPresentUnits(6)
cache = {}
def xyz(p, elm):
    k = (p, elm)
    if k not in cache:
        c = (sm.PointElm if elm else sm.PointObj).GetCoordCartesian(p, 0., 0., 0.)
        cache[k] = (c[0], c[1], c[2])
    return cache[k]
def L(a, b):
    return sum((a[k]-b[k])**2 for k in range(3)) ** 0.5

_, fos, _ = sm.FrameObj.GetNameList()
areas, gam = {}, {}
por_obj = collections.defaultdict(float)
offs = 0.0
for nm in fos:
    sec = sm.FrameObj.GetSection(nm, "", "")[0]
    if sec not in areas:
        areas[sec] = sm.PropFrame.GetSectProps(sec, 0.,0.,0.,0.,0.,0.,0.,0.,0.)[0]
        mat = sm.PropFrame.GetMaterial(sec, "")[0]
        gam[sec] = sm.PropMaterial.GetWeightAndMass(mat, 0., 0.)[0]
    pi, pj = sm.FrameObj.GetPoints(nm, "", "")[:2]
    por_obj[sec] += L(xyz(pi, False), xyz(pj, False))
    try:
        e = sm.FrameObj.GetEndLengthOffset(nm, True, 0., 0., 0.)
        offs += (e[1] or 0.0) + (e[2] or 0.0)
    except Exception:
        pass

_, fes, _ = sm.FrameElm.GetNameList()
por_elm = collections.defaultdict(float)
for nm in fes:
    r = sm.FrameElm.GetPoints(nm, "", "")
    pi, pj = r[0], r[1]
    sec = sm.FrameElm.GetSection(nm, "", "")[0]
    por_elm[sec] += L(xyz(pi, True), xyz(pj, True))

print("seccion          L objetos    L elementos    A          gamma      W obj      W elm")
wo = we = 0.0
for sec in sorted(set(list(por_obj) + list(por_elm))):
    a, g = areas.get(sec, 0), gam.get(sec, 0)
    w1, w2 = por_obj[sec]*a*g, por_elm[sec]*a*g
    wo += w1; we += w2
    print("  %-14s %9.3f     %9.3f    %.7f  %8.4f  %8.3f  %8.3f"
          % (sec, por_obj[sec], por_elm[sec], a, g, w1, w2))
print("  TOTAL          %9.3f     %9.3f                        %8.3f  %8.3f" %
      (sum(por_obj.values()), sum(por_elm.values()), wo, we))
print("  suma de end length offsets: %.4f m" % offs)
o.ApplicationExit(False)
