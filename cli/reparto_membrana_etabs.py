# -*- coding: utf-8 -*-
"""QUE LE ENTREGA LA MEMBRANA A CADA VIGA, con carga VIVA.

El metodo es de Jorge: el peso propio NO sirve para medir esto, porque ETABS ya
pone fuerzas en las vigas secundarias por su cuenta y tapan el aporte de la
losa. Con una carga LIVE uniforme sobre toda la membrana si se ve — y el EJE
LOCAL del pano decide a QUIEN se la entrega.

Se lee lo que ETABS genero con `SetLoadUniformToFrame`, o sea las cargas
distribuidas del patron Live sobre cada frame, y se suma por familia.
"""
import os, collections, comtypes.client
import comtypes.gen.ETABSv1 as E
G = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                 "..", "..", "..", "galpon-bodega-electoral"))
h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
o.ApplicationStart()
sm = o.SapModel
sm.File.OpenFile(os.path.join(G, "parte_mezanine_deck.EDB"))
sm.SetPresentUnits(6)

cache = {}
def xyz(p):
    if p not in cache:
        c = sm.PointObj.GetCoordCartesian(p, 0., 0., 0.)
        cache[p] = (c[0], c[1], c[2])
    return cache[p]

por = collections.defaultdict(lambda: [0, 0.0])
tot = 0.0
_, fos, _ = sm.FrameObj.GetNameList()
for nm in fos:
    r = sm.FrameObj.GetLoadDistributed(nm, 0, [], [], [], [], [], [], [], [], [], [], [], 0)
    n = r[0]
    if not n: continue
    sec = sm.FrameObj.GetSection(nm, "", "")[0]
    pi, pj = sm.FrameObj.GetPoints(nm, "", "")[:2]
    a, b = xyz(pi), xyz(pj)
    L = sum((a[k]-b[k])**2 for k in range(3)) ** 0.5
    d = "en X" if abs(a[0]-b[0]) > abs(a[1]-b[1]) else "en Y"
    pats, d1, d2, v1, v2 = r[2], r[8], r[9], r[10], r[11]
    for k in range(n):
        if str(pats[k]).strip().lower() != "live":
            continue
        # tramo cargado y valor medio (kN/m) -> kN
        tramo = abs((d2[k] - d1[k]))
        w = (abs(v1[k]) + abs(v2[k])) / 2.0
        carga = w * tramo
        por[(sec, d)][0] += 1
        por[(sec, d)][1] += carga
        tot += carga
print("ETABS — lo que la membrana (deck) entrega a cada familia, patron Live:")
for k, (n, W) in sorted(por.items(), key=lambda x: -x[1][1]):
    print("   %-8s %-6s %3d tramos   carga = %8.2f kN" % (k[0], k[1], n, W))
print("   TOTAL entregado = %.2f kN" % tot)
o.ApplicationExit(False)
