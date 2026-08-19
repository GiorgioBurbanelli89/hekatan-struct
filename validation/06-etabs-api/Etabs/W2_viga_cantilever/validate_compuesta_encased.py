# -*- coding: utf-8 -*-
"""
Valida W2 Viga Axial COMPUESTA (SRC Encased) cantilever en ETABS.

Modelo (W2_viga_compuesta_template.EDB editado por el usuario):
  - Viga horizontal L=3 m en story Base
  - POINT 1 empotrado | POINT 2 libre
  - Sección "VCompuesta": Concrete Encasement Rectangle
      Outer: 0.9 (D) × 0.6 (B) m  → A_total = 0.54 m²
      Embedded: I steel 30×15×10.7×7.1 mm  → A_s ≈ 0.00519 m²
      A_concrete = 0.54 - 0.00519 ≈ 0.5348 m²
  - Materiales: Steel_A572Gr50 (E=200 GPa) + Conc_25MPa (E=24.98 GPa)
  - n = E_s/E_c = 200/24.98 = 8.007

Script:
  1. Conectar a la instancia ETABS abierta
  2. Aplicar POINTLOAD Fx=100 kN en POINT 2, pattern "Live"
  3. Save + RunAnalysis
  4. Leer Ux en POINT 2 (case "Live")
  5. Comparar contra analítico transformed-section steel-eq:
       u_x = P·L / (E_s · A_eq)
       A_eq = A_s + A_c/n
"""
import os, time
HERE = os.path.dirname(os.path.abspath(__file__))
LOG = os.path.join(HERE, "validate_compuesta_encased.log")
if os.path.exists(LOG): os.remove(LOG)
_fh = open(LOG, "w", encoding="utf-8", buffering=1)
def p(*a):
    line = " ".join(str(x) for x in a); print(line, flush=True)
    _fh.write(line + "\n"); _fh.flush()

from pythonnet import load; load("coreclr")
import clr
DLL = r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll"
clr.AddReference(DLL)
from ETABSv1 import (Helper, cHelper, cOAPI, cSapModel, cFile,
                     cPointObj, cAnalyze, cAnalysisResults,
                     cAnalysisResultsSetup, eUnits, eItemTypeElm)
import System

# Conectar a instancia abierta (NO ApplicationStart)
p("[1] Conectando a ETABS abierto...")
helper = cHelper(Helper())
try:
    ETABS = cOAPI(helper.GetObject("CSI.ETABS.API.ETABSObject"))
    p("    OK - attached a instancia existente")
except Exception as ex:
    p(f"    FAIL: {ex}")
    p("    Iniciando nueva instancia...")
    ETABS = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
    ETABS.ApplicationStart()
    time.sleep(5)
    # Open the EDB que el user editó
    EDB = os.path.join(HERE, "W2_viga_compuesta_template.EDB")
    sap_tmp = cSapModel(ETABS.SapModel)
    File_tmp = cFile(sap_tmp.File)
    File_tmp.OpenFile(EDB)

sap = cSapModel(ETABS.SapModel)
sap.SetPresentUnits(eUnits(6))   # kN_m_C
sap.SetModelIsLocked(False)

# Limpiar cargas previas en POINT "2" pattern Live, luego aplicar 100 kN con Replace=True
p("\n[2] Limpiando + aplicando POINTLOAD Fx=100 kN en POINT '2', pattern 'Live' (Replace=True)...")
PointObj = cPointObj(sap.PointObj)
# DeleteLoadForce primero
try:
    PointObj.DeleteLoadForce("2", "Live")
    p("    DeleteLoadForce previa OK")
except Exception as ex:
    p(f"    DeleteLoadForce: {ex}")
PointLoadValue = System.Array[float]([100.0, 0.0, 0.0, 0.0, 0.0, 0.0])
# 4to arg = Replace=True → substituye en vez de acumular
ret = PointObj.SetLoadForce("2", "Live", PointLoadValue, True)
p(f"    SetLoadForce ret={ret}")

# Save + Analyze
EDB_OUT = os.path.join(HERE, "W2_viga_compuesta_validado.EDB")
File = cFile(sap.File)
ret = File.Save(EDB_OUT); p(f"\n[3] Save ret={ret} → {EDB_OUT}")
Analyze = cAnalyze(sap.Analyze)
ret = Analyze.RunAnalysis(); p(f"    RunAnalysis ret={ret}")

# Leer Ux en POINT 2 case "Live"
p("\n[4] Leyendo Ux en POINT 2 (case Live)...")
Results = cAnalysisResults(sap.Results)
Setup = cAnalysisResultsSetup(Results.Setup)
Setup.DeselectAllCasesAndCombosForOutput()
ret = Setup.SetCaseSelectedForOutput("Live")
p(f"    SetCaseSelectedForOutput('Live') ret={ret}")

NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
U1=[]; U2=[]; U3=[]; R1=[]; R2=[]; R3=[]
[ret, NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3] = \
    Results.JointDispl("2", eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3)
etabs_ux_mm = U1[0]*1000 if NR > 0 else float('nan')
p(f"    JointDispl POINT 2 case Live: NR={NR}")
if NR > 0:
    p(f"    Ux={U1[0]*1000:.5f} mm  Uy={U2[0]*1000:.5e}  Uz={U3[0]*1000:.5e}")

# Reacción base
NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
F1=[]; F2=[]; F3=[]; M1=[]; M2=[]; M3=[]
[ret, NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3] = \
    Results.JointReact("1", eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3)
if NR > 0:
    p(f"    Reacción base POINT 1: Fx={F1[0]:.4f} kN (esperado -100)")

# Analítico transformed section
p("\n[5] ANALÍTICO (transformed-section steel-equivalent):")
L = 3.0
E_s = 200e6
E_c = 24.98e6
n = E_s / E_c
A_outer = 0.9 * 0.6
# Steel I embebido: dims D=0.30 B=0.15 TF=0.0107 TW=0.0071
D, B, TF, TW = 0.30, 0.15, 0.0107, 0.0071
A_s = 2*B*TF + (D - 2*TF)*TW
A_c = A_outer - A_s
A_eq = A_s + A_c/n
u_ana = 100 * L / (E_s * A_eq) * 1000  # mm
p(f"    A_outer (0.9×0.6) = {A_outer:.4f} m²")
p(f"    A_steel (IPE)     = {A_s*1e4:.2f} cm² ({A_s:.5f} m²)")
p(f"    A_concrete neto   = {A_c*1e4:.2f} cm² ({A_c:.5f} m²)")
p(f"    n = E_s/E_c       = {n:.3f}")
p(f"    A_eq (steel-eq)   = {A_eq*1e4:.2f} cm² ({A_eq:.5f} m²)")
p(f"    u_x = P·L/(E_s·A_eq) = {u_ana:.5f} mm")

# Comparación
if not (etabs_ux_mm != etabs_ux_mm):  # not NaN
    diff = (etabs_ux_mm - u_ana) / u_ana * 100
    p(f"\n[6] COMPARACIÓN:")
    p(f"    ETABS    Ux = {etabs_ux_mm:.5f} mm")
    p(f"    Analítico Ux = {u_ana:.5f} mm")
    p(f"    Δ = {diff:+.3f} %  {'[PASS]' if abs(diff)<2 else '[FAIL]'}")

p("\nDONE — ETABS queda abierto.")
