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
                                 "..", "..", "galpon-bodega-electoral"))
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

# ⚠️ En ETABS la carga NO se asigna a los frames: va sobre el AREA (medido,
# `AreaObj.GetLoadUniform` da Live en los 3 panos y `FrameObj.GetLoadDistributed`
# no da nada) y la reparte el mallado. En Hekatan va como `frameload` a las
# vigas. Asi que no se pueden comparar las ASIGNACIONES: se compara el
# RESULTADO, o sea el cortante que entra en cada barra.
sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
sm.Results.Setup.SetCaseSelectedForOutput("Live")
por = collections.defaultdict(lambda: [0, 0.0])
tot = 0.0
_, fos, _ = sm.FrameObj.GetNameList()
for nm in fos:
    r = sm.Results.FrameForce(nm, 0, 0, *([[]] * 13))
    if not r[0]:
        continue
    sec = sm.FrameObj.GetSection(nm, "", "")[0]
    pi, pj = sm.FrameObj.GetPoints(nm, "", "")[:2]
    a, b = xyz(pi), xyz(pj)
    d = "en X" if abs(a[0]-b[0]) > abs(a[1]-b[1]) else "en Y"
    if abs(a[2]-b[2]) > max(abs(a[0]-b[0]), abs(a[1]-b[1])):
        d = "columna"
    V = [abs(float(v)) for v in r[9]]          # V2 a lo largo
    carga = max(V) + min(V) if len(V) > 1 else 0.0   # lo que entra en la barra
    por[(sec, d)][0] += 1
    por[(sec, d)][1] += carga
    tot += carga
print("ETABS — cortante V2 que entra en cada familia, caso LIVE:")
for k, (n, W) in sorted(por.items(), key=lambda x: -x[1][1]):
    print("   %-8s %-8s %3d barras   V = %8.2f kN" % (k[0], k[1], n, W))
print("   TOTAL = %.2f kN   (la viva es 6.00 x 326.728 = %.2f kN)" % (tot, 6.0*326.728))
o.ApplicationExit(False)
