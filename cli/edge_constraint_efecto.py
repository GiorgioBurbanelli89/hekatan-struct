# -*- coding: utf-8 -*-
"""CUANTO PESA EL «EDGE CONSTRAINT» DE ETABS.

ETABS lo trae en True y SAP2000 en False (medido con `defaults_csi.py`). Ata los
nudos del BORDE de un area a lo que tenga al lado cuando las mallas no casan.
Hekatan no lo tiene: cose la malla (cookie cut) y los nudos coinciden.

La pregunta no es si existe, es si CAMBIA EL RESULTADO en este modelo. Se mide:
mismo .EDB, se apaga el edge constraint, se reanaliza y se compara.

    python edge_constraint_efecto.py [tipo]
"""
import os, sys, comtypes.client
import comtypes.gen.ETABSv1 as E

tipo = sys.argv[1] if len(sys.argv) > 1 else "maciza_thin"
G = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                 "..", "..", "galpon-bodega-electoral"))
EDB = os.path.join(G, "parte_mezanine_%s.EDB" % tipo)

h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
o.ApplicationStart()
sm = o.SapModel


def correr(etiqueta):
    sm.Analyze.SetRunCaseFlag("", False, True)
    for c in ("Dead", "SDL", "Live", "Lroof"):
        try: sm.Analyze.SetRunCaseFlag(c, True, False)
        except Exception: pass
    sm.Analyze.RunAnalysis()
    sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
    if sm.Results.Setup.SetComboSelectedForOutput("SERVICIO") != 0:
        sm.Results.Setup.SetCaseSelectedForOutput("Dead")
    _, pes, _ = sm.PointElm.GetNameList()
    rz = 0.0
    uz = 0.0
    for p in pes:
        r = sm.Results.JointReact(p, 1, 0, [], [], [], [], [], [], [], [], [], [], [])
        if r[-1] == 0 and r[0]:
            rz += sum(r[8])
        d = sm.Results.JointDispl(p, 1, 0, [], [], [], [], [], [], [], [], [], [], [])
        if d[-1] == 0 and d[0]:
            uz = min(uz, min(d[8]))
    print("   %-22s  SumaRz %10.3f kN   Uz %9.3f mm" % (etiqueta, rz, uz * 1000))
    return rz, uz


print("modelo:", os.path.basename(EDB))
sm.File.OpenFile(EDB)
sm.SetPresentUnits(6)
_, aos, _ = sm.AreaObj.GetNameList()
con = sum(1 for nm in aos if sm.AreaObj.GetEdgeConstraint(nm, False)[0])
print("   areas: %d   con edge constraint: %d" % (len(aos), con))
rz1, uz1 = correr("CON edge constraint")

sm.SetModelIsLocked(False)
n = 0
for nm in aos:
    if sm.AreaObj.SetEdgeConstraint(nm, False) == 0:
        n += 1
print("   apagado en %d areas" % n)
rz2, uz2 = correr("SIN edge constraint")

print("\n   diferencia:  carga %.4f %%   flecha %.4f %%"
      % (abs(rz2 / rz1 - 1) * 100 if rz1 else 0,
         abs(uz2 / uz1 - 1) * 100 if uz1 else 0))
o.ApplicationExit(False)
