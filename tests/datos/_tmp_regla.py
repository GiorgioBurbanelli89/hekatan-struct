# -*- coding: utf-8 -*-
"""De donde sale cada END LENGTH OFFSET: que barra es y que la sostiene."""
import os, csv, collections, comtypes.client
import comtypes.gen.ETABSv1 as E
AQUI = os.path.dirname(os.path.abspath(__file__))
G = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "galpon-bodega-electoral"))
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
o.ApplicationStart()
sm = o.SapModel
sm.File.OpenFile(os.path.join(G, "parte_mezanine_maciza_thin.EDB"))
sm.SetPresentUnits(6)
filas = list(csv.DictReader(open(os.path.join(AQUI, "_off.csv"), encoding="utf-8-sig")))
cache = {}
def xyz(p):
    if p not in cache:
        c = sm.PointObj.GetCoordCartesian(p, 0., 0., 0.)
        cache[p] = (c[0], c[1], c[2])
    return cache[p]
# que barras llegan a cada nudo
enNudo = collections.defaultdict(list)
_, fos, _ = sm.FrameObj.GetNameList()
info = {}
for nm in fos:
    pi, pj = sm.FrameObj.GetPoints(nm, "", "")[:2]
    sec = sm.FrameObj.GetSection(nm, "", "")[0]
    info[nm] = (pi, pj, sec)
    enNudo[pi].append(nm); enNudo[pj].append(nm)
dims = {}
for sec in set(s for _, _, s in info.values()):
    p = sm.PropFrame.GetSectProps(sec, 0.,0.,0.,0.,0.,0.,0.,0.,0.)
    dims[sec] = (p[0],)   # area; el canto real va abajo
print("secciones:", sorted(dims))
por = collections.defaultdict(list)
for f in filas:
    nm = f["UniqueName"]
    if nm not in info: continue
    oi, oj = float(f["Offset I"]), float(f["Offset J"])
    if oi == 0 and oj == 0: continue
    pi, pj, sec = info[nm]
    a, b = xyz(pi), xyz(pj)
    vert = abs(a[2]-b[2]) > max(abs(a[0]-b[0]), abs(a[1]-b[1]))
    for extremo, off, nudo in (("I", oi, pi), ("J", oj, pj)):
        if off == 0: continue
        vecinas = [info[v][2] for v in enNudo[nudo] if v != nm]
        por[(round(off, 4), sec, "col" if vert else "viga")].append(tuple(sorted(set(vecinas))))
print("\noffset -> (seccion de la barra, tipo) : con que se topa")
for k in sorted(por):
    vs = collections.Counter(por[k])
    print("   %.4f  %-14s %-5s  x%d   vecinas: %s"
          % (k[0], k[1], k[2], len(por[k]), list(vs)[0] if vs else "-"))
o.ApplicationExit(False)
