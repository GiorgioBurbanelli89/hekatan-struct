# -*- coding: utf-8 -*-
"""Lee, de una instancia de SAP2000 o ETABS YA ABIERTA y analizada, cuánta
carga le ha llegado a cada barra.

    python leer_viguetas.py sap|etabs caso salida.json

Se engancha a la instancia viva (`GetObject`), así que hay que haber corrido
antes el driver con `--abierto`.

Lo que mide, y por qué:

  · **M3 máximo** de cada barra. Una vigueta que NO recibe carga de vano tiene
    momento nulo (o el de su peso propio); una que la recibe, no.
  · **w = (V2_i − V2_j)/L**. En una barra sin carga de vano el cortante es
    CONSTANTE; si varía, hay carga repartida encima, y su valor es la carga por
    metro. Es la forma de ver la transferencia sin salir del programa.
"""
import sys, json
import comtypes.client

PROG, CASO, OUT = sys.argv[1], sys.argv[2], sys.argv[3]

if PROG == "sap":
    import comtypes.gen.SAP2000v1 as S
    h = comtypes.client.CreateObject("SAP2000v1.Helper").QueryInterface(S.cHelper)
    o = h.GetObject("CSI.SAP2000.API.SapObject")
else:
    import comtypes.gen.ETABSv1 as S
    h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(S.cHelper)
    o = h.GetObject("CSI.ETABS.API.ETABSObject")
sm = o.SapModel

sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
sm.Results.Setup.SetCaseSelectedForOutput(CASO)

nombres = sm.FrameObj.GetNameList()[1]
filas = {}
for nm in nombres:
    r = sm.Results.FrameForce(nm, 0)
    # r = (NumberResults, Obj, ObjSta, Elm, ElmSta, LoadCase, StepType, StepNum,
    #      P, V2, V3, T, M2, M3, ret)
    n = r[0]
    if not n:
        continue
    sta, V2, M3 = list(r[2]), list(r[9]), list(r[13])
    L = max(sta) if sta else 0.0
    # w = (V2_i - V2_j)/L : constante => sin carga de vano
    w = (V2[0] - V2[-1]) / L if L > 1e-9 else 0.0
    filas[nm] = {"L": round(L, 4),
                 "M3max": round(max(abs(v) for v in M3), 4),
                 "V2i": round(V2[0], 4), "V2j": round(V2[-1], 4),
                 "w": round(w, 4)}

json.dump({"prog": PROG, "caso": CASO, "barras": filas}, open(OUT, "w"), indent=1)
print("%s · %d barras leidas -> %s" % (PROG, len(filas), OUT))
for nm in sorted(filas, key=lambda x: (len(x), x)):
    f = filas[nm]
    print("  %-6s L=%5.2f  M3max=%9.4f  w=%8.4f" % (nm, f["L"], f["M3max"], f["w"]))
