# -*- coding: utf-8 -*-
r"""EL DATASET DE REFERENCIA del Shell-Thick de ETABS — la matriz ORIGINAL.

No para copiarla: para **estudiarla** y entender en qué se diferencia de la
nuestra. Se mide con el metodo DIRECTO (idea de Jorge), que no tiene supuestos:

    se sujetan los 12 GDL, se impone un desplazamiento UNITARIO en uno solo
    (los otros once a cero), y las REACCIONES son la COLUMNA de K:

        K u = R   con u = e_j   ->   R = K[:, j]

Doce casos de carga por modelo. Sin invertir, sin reconstruir solidos rigidos.
Validado al 0.0000 % contra la reconstruccion por flexibilidad.

Se barren tres cosas por separado, que es lo que permite AISLAR:
  · GEOMETRIA  -> como entra el jacobiano
  · nu         -> la constitutiva
  · ESPESOR    -> separa flexion (t^3) de cortante (t)
y ademas THIN de cada caso, para tener la pareja.

    python -u celda_dataset_thick.py > _dataset.log 2>&1

⚠️ ETABS se cae a media corrida (RPC 0x800706BE): se guarda DESPUES DE CADA CASO
y al relanzar sigue donde iba.
"""
import json, os
import comtypes.client
import comtypes.gen.ETABSv1 as E

CUAD  = [(0,0),(1,0),(1,1),(0,1)]
R05   = [(0,0),(1,0),(1,0.5),(0,0.5)]
R025  = [(0,0),(1,0),(1,0.25),(0,0.25)]
PARAL = [(0,0),(0.8,0),(1.0,0.9),(0.2,0.9)]
TRAPE = [(0,0),(1.0,0),(0.8,0.9),(0.15,1.0)]
IRREG = [(0,0),(0.9,0.1),(1.1,0.95),(0.05,0.8)]

CASOS = []
# 1 · GEOMETRIA (nu=0, t=0.20) — thick y thin de cada una
for nom,pts in (("cuad",CUAD),("rect05",R05),("rect025",R025),
                ("paral",PARAL),("trape",TRAPE),("irreg",IRREG)):
    CASOS.append(("g_%s_thick"%nom, pts, 0.20, 0.00, 2))
    CASOS.append(("g_%s_thin"%nom,  pts, 0.20, 0.00, 1))
# 2 · NU (cuadrado, t=0.20)
for nu in (0.10,0.20,0.30,0.45):
    CASOS.append(("n_%02d_thick"%int(nu*100), CUAD, 0.20, nu, 2))
# 3 · ESPESOR (cuadrado, nu=0)
for t in (0.02,0.05,0.10,0.40):
    CASOS.append(("t_%03d_thick"%int(t*100), CUAD, t, 0.00, 2))
    CASOS.append(("t_%03d_thin"%int(t*100),  CUAD, t, 0.00, 1))

E_C = 2.2e7
SAL = "dataset_thick.json"
OAPI = {0: 2, 1: 3, 2: 4}      # w->U3, theta_x->R1, theta_y->R2

h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject"); o.ApplicationStart()
sm = o.SapModel
res = json.load(open(SAL, encoding="utf-8")) if os.path.exists(SAL) else {}

for nombre, pts, T, NU, TIPO in CASOS:
    if nombre in res:
        print("=== %s (ya estaba)" % nombre, flush=True); continue
    print("=== %s  t=%.2f nu=%.2f %s" % (nombre,T,NU,"thin" if TIPO==1 else "thick"),
          flush=True)
    sm.InitializeNewModel(6)
    sm.File.NewGridOnly(1, 3.0, 3.0, 2, 2, 1.0, 1.0)
    sm.SetPresentUnits(6)
    sm.PropMaterial.SetMaterial("CONC", 2)
    sm.PropMaterial.SetMPIsotropic("CONC", E_C, NU, 1e-5)
    sm.PropMaterial.SetWeightAndMass("CONC", 1, 0.0)
    sm.PropMaterial.SetWeightAndMass("CONC", 2, 0.0)
    sm.PropArea.SetSlab("LOSA", 0, TIPO, "CONC", T)
    pt = [sm.PointObj.AddCartesian(x, y, 0.0, "", "Global")[0] for (x,y) in pts]
    sm.AreaObj.AddByPoint(4, list(pt), "", "LOSA")
    for p in pt: sm.PointObj.SetRestraint(p, [True]*6)
    for n in range(4):
        for k in range(3):
            lp = "D%d%d" % (n,k)
            sm.LoadPatterns.Add(lp, 8, 0.0, True)
            v = [0.0]*6; v[OAPI[k]] = 1.0
            sm.PointObj.SetLoadDispl(pt[n], lp, v, True, "Global")
    sm.Analyze.SetRunCaseFlag("", True, False)
    sm.File.Save(os.path.abspath("_ds.EDB"))
    sm.Analyze.RunAnalysis()
    K = [[0.0]*12 for _ in range(12)]
    for n in range(4):
        for k in range(3):
            col = 3*n+k
            sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
            sm.Results.Setup.SetCaseSelectedForOutput("D%d%d" % (n,k))
            for m in range(4):
                jr = sm.Results.JointReact(pt[m], 0)
                for q in range(jr[0]):
                    K[3*m+0][col] += jr[8][q]
                    K[3*m+1][col] += jr[9][q]
                    K[3*m+2][col] += jr[10][q]
    s = max(abs(sum(K[3*m+0][c] for m in range(4))) for c in range(12))
    print("   equilibrio: max|sum F3 por columna| = %.2e" % s, flush=True)
    res[nombre] = {"pts": pts, "t": T, "nu": NU, "tipo": TIPO, "E": E_C, "K": K}
    json.dump(res, open(SAL,"w",encoding="utf-8"), indent=1)
print("\n%d casos en %s" % (len(res), SAL))
o.ApplicationExit(False)
