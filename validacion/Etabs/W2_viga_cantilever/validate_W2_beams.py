# -*- coding: utf-8 -*-
"""
W2 Viga Cantilever — Validacion directa via API (2 materiales: Hormigon + Acero).
La viga COMPUESTA se valida aparte (espera de usuario).

Setup:
  - Viga HORIZONTAL en X, en Story1 (Z=3m) para evitar auto-restraint Base
  - Empotrada en el extremo izquierdo (X=0)
  - Peso propio: SELFWEIGHT=1 (ETABS computa gamma*V)
  - L = 3 m
  - Comparacion: w_tip (deflexion vertical en extremo libre) vs analitico

Analitico cantilever bajo q distribuido (Euler-Bernoulli + Timoshenko):
  w_tip_EB     = q*L^4 / (8*E*I)
  w_tip_shear  = q*L^2 / (2*G*As)
  w_tip_total  = w_EB + w_shear
  M_base       = q*L^2/2
  V_base       = q*L

Casos:
  1. Hormigon rect 30x60 (b=0.30, h=0.60):
       gamma_c = 23.56 kN/m3, E_c = 24.98e6 kN/m2, nu=0.2
       A = 0.18 m2, I = 5.4e-3 m4, As = 5/6*A
       q = 4.241 kN/m, w_tip_EB = 0.3184 mm
  2. Acero IPE 300:
       gamma_s = 76.97 kN/m3, E_s = 200e6 kN/m2, nu=0.3
       A = 5.381e-3 m2, I_strong = 8.356e-5 m4, As = h*tw = 0.30*0.0071
       q = 0.4141 kN/m, w_tip_EB = 0.2508 mm
"""
import os, sys, time

HERE = os.path.dirname(os.path.abspath(__file__))
LOG = os.path.join(HERE, "validate_W2_beams.log")
if os.path.exists(LOG): os.remove(LOG)
_fh = open(LOG, "w", encoding="utf-8", buffering=1)
def p(*a):
    line = " ".join(str(x) for x in a); print(line, flush=True)
    _fh.write(line + "\n"); _fh.flush()

L = 3.0  # m
H_STORY = 3.0  # m — viga a Story1 elevation para evitar Base auto-restraint

# Configuracion de casos
# (name, mat_type, gamma, E, nu, section_type, dims, As_eff)
#   section_type: "rect" → SetRectangle(name, mat, D, B)
#                 "I"    → SetISection(name, mat, T3, T2, Tw, Tf, T2b, Tfb)
#   dims = parametros de seccion en metros
CASES = [
    {
        "name": "Concrete_30x60",
        "mat_type": "Concrete",   # ETABS eMatType(2)
        "gamma": 23.56,           # kN/m3
        "E": 24.98e6,             # kN/m2
        "nu": 0.2,
        "section_type": "rect",
        "dims": {"D": 0.60, "B": 0.30},   # D=depth, B=width
        "A": 0.30 * 0.60,         # 0.18 m2
        "I": 0.30 * 0.60**3 / 12, # 5.4e-3 m4
        "As": (5/6) * 0.18,       # rectangular shear area factor 5/6
    },
    {
        "name": "Steel_IPE300",
        "mat_type": "Steel",      # ETABS eMatType(1)
        "gamma": 76.97,
        "E": 200e6,
        "nu": 0.3,
        # Cambiamos a "general" (SetGeneral) para pinning EXACTO de A, I, As —
        # SetISection hace que ETABS recalcule A, I desde geometria (incluyendo
        # fillets y interpretaciones internas) → desvío vs analítico.
        "section_type": "general",
        "dims": {"T3": 0.30, "T2": 0.15},  # solo para display
        "A": 5.381e-3,            # m2 (IPE 300 published — Arcelor catalog)
        "I": 8.356e-5,            # m4 strong axis I33 (publicado)
        "I22": 6.038e-6,          # m4 weak axis (publicado)
        "J": 2.012e-7,            # m4 torsion (publicado)
        "As": 0.30 * 0.0071,      # h*tw web area (clásico para shear)
    },
]

# Compute analytical for each case
def analytical(c):
    G = c["E"] / (2 * (1 + c["nu"]))
    q = c["gamma"] * c["A"]
    w_EB    = q * L**4 / (8 * c["E"] * c["I"])
    w_shear = q * L**2 / (2 * G * c["As"])
    w_total = w_EB + w_shear
    M_base = q * L**2 / 2
    V_base = q * L
    return {
        "q_kN_m": q, "W_kN": q*L, "G_kNm2": G,
        "w_EB_mm": w_EB * 1000,
        "w_shear_mm": w_shear * 1000,
        "w_total_mm": w_total * 1000,
        "M_base_kNm": M_base, "V_base_kN": V_base,
    }

p("="*70)
p("  W2 VIGA CANTILEVER — Setup analitico")
p("="*70)
for c in CASES:
    a = analytical(c)
    p(f"\n  {c['name']}:")
    p(f"    A = {c['A']*1e4:.2f} cm2,  I = {c['I']*1e8:.2f} cm4")
    p(f"    q = gamma*A = {a['q_kN_m']:.4f} kN/m,  W = q*L = {a['W_kN']:.4f} kN")
    p(f"    w_tip_EB     = {a['w_EB_mm']:.5f} mm")
    p(f"    w_tip_shear  = {a['w_shear_mm']:.5f} mm")
    p(f"    w_tip_total  = {a['w_total_mm']:.5f} mm")
    p(f"    M_base = {a['M_base_kNm']:.3f} kN.m,  V_base = {a['V_base_kN']:.3f} kN")

from pythonnet import load; load("coreclr")
import clr
DLL = r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll"
clr.AddReference(DLL)
from ETABSv1 import (Helper, cHelper, cOAPI, cSapModel, cFile,
                     cPropMaterial, cPropFrame, cFrameObj, cPointObj,
                     cAnalyze, cAnalysisResults, cAnalysisResultsSetup,
                     eUnits, eMatType, eItemTypeElm)
import System

p("\n" + "="*70)
p("  ETABS API conexion")
p("="*70)
helper = cHelper(Helper())
ETABS = cOAPI(helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject"))
ETABS.ApplicationStart(); time.sleep(5)
p("  ApplicationStart OK")

results = []
for c in CASES:
    p(f"\n{'='*70}")
    p(f"  CASE: {c['name']}")
    p(f"{'='*70}")
    a = analytical(c)

    sap = cSapModel(ETABS.SapModel)
    p(f"  Pre-InitializeNewModel...")
    ret = sap.InitializeNewModel(eUnits(6))  # kN_m_C
    p(f"  InitializeNewModel ret={ret}")
    time.sleep(2)
    File = cFile(sap.File)
    ret = File.NewBlank(); p(f"  NewBlank ret={ret}")
    time.sleep(1)

    # Material
    matName = f"MAT_{c['name']}"
    PropMaterial = cPropMaterial(sap.PropMaterial)
    matEnum = eMatType(1) if c["mat_type"] == "Steel" else eMatType(2)
    ret = PropMaterial.SetMaterial(matName, matEnum)
    ret = PropMaterial.SetMPIsotropic(matName, c["E"], c["nu"], 1.17e-5 if c["mat_type"]=="Steel" else 1.0e-5)
    ret = PropMaterial.SetWeightAndMass(matName, 1, c["gamma"])  # 1 = weight per unit volume
    p(f"  Material: {matName}  gamma={c['gamma']}  E={c['E']/1e6:.2f} GPa")

    # Section
    secName = f"SEC_{c['name']}"
    PropFrame = cPropFrame(sap.PropFrame)
    if c["section_type"] == "rect":
        d = c["dims"]
        ret = PropFrame.SetRectangle(secName, matName, d["D"], d["B"])
        p(f"  Section RECT: D={d['D']*100} cm, B={d['B']*100} cm")
    elif c["section_type"] == "I":
        d = c["dims"]
        ret = PropFrame.SetISection(secName, matName,
                                     d["T3"], d["T2"], d["Tw"], d["Tf"],
                                     d["T2b"], d["Tfb"])
        p(f"  Section I: T3={d['T3']} T2={d['T2']} Tw={d['Tw']} Tf={d['Tf']}")
    elif c["section_type"] == "general":
        # SetGeneral: pin EXACTAMENTE A, I, J, As — ETABS no recalcula.
        # Signature: SetGeneral(name, mat, T3, T2, A, As2, As3, J, I22, I33,
        #                       S22, S33, Z22, Z33, R22, R33)
        # T3, T2 = outer dims solo para display (no afectan FEM)
        d = c["dims"]
        A_v   = c["A"];     I22_v = c["I22"]; I33_v = c["I"]
        As2_v = c["As"];    As3_v = c.get("As3", As2_v)
        J_v   = c.get("J", I22_v + I33_v)
        # S, Z, R: derivar valores razonables (no afectan análisis lineal)
        S22 = I22_v / (d.get("T2", 0.15)/2)
        S33 = I33_v / (d.get("T3", 0.30)/2)
        Z22 = S22; Z33 = S33
        R22 = (I22_v / A_v) ** 0.5
        R33 = (I33_v / A_v) ** 0.5
        ret = PropFrame.SetGeneral(secName, matName,
                                    d.get("T3", 0.30), d.get("T2", 0.15),
                                    A_v, As2_v, As3_v, J_v, I22_v, I33_v,
                                    S22, S33, Z22, Z33, R22, R33)
        p(f"  Section GENERAL: A={A_v:.5e}  I33={I33_v:.5e}  As2={As2_v:.5e}")
    p(f"    Set<Section> ret={ret}")

    # Frame horizontal a story 1: de (0,0,H_STORY) a (L,0,H_STORY)
    FrameObj = cFrameObj(sap.FrameObj)
    FrameName = " "
    [ret, FrameName] = FrameObj.AddByCoord(0.0, 0.0, H_STORY,
                                            L,   0.0, H_STORY,
                                            FrameName, secName, "VIGA", "Global")
    p(f"  Frame horizontal Z={H_STORY}m  ret={ret}  name={FrameName!r}")

    # Identificar nodos por X
    PointObj = cPointObj(sap.PointObj)
    NR=0; Names=[]
    [ret, NR, Names] = PointObj.GetNameList(NR, Names)
    points = list(Names)
    start_pt = end_pt = None
    for pt in points:
        X=0.0; Y=0.0; Z=0.0
        [ret, X, Y, Z] = PointObj.GetCoordCartesian(pt, X, Y, Z)
        p(f"    pt={pt!r}  ({X:.3f}, {Y:.3f}, {Z:.3f})")
        if abs(X) < 1e-6 and abs(Z - H_STORY) < 1e-6: start_pt = pt
        if abs(X - L) < 1e-6 and abs(Z - H_STORY) < 1e-6: end_pt = pt
    p(f"  Start (empotrada) = {start_pt!r}   End (libre) = {end_pt!r}")

    # Restraint: empotramiento total en start
    Rest = System.Array[bool]([True]*6)
    ret = PointObj.SetRestraint(start_pt, Rest)
    p(f"  SetRestraint(start) ret={ret}")

    # Save + Analyze (Dead pattern existe por default con SELFWEIGHT=1)
    EDB = os.path.join(HERE, f"W2_{c['name']}.EDB")
    ret = File.Save(EDB); p(f"  Save ret={ret}")
    Analyze = cAnalyze(sap.Analyze)
    ret = Analyze.RunAnalysis(); p(f"  RunAnalysis ret={ret}")

    # Resultados
    Results = cAnalysisResults(sap.Results)
    Setup = cAnalysisResultsSetup(Results.Setup)
    Setup.DeselectAllCasesAndCombosForOutput()
    Setup.SetCaseSelectedForOutput("Dead")

    # Tip displacement (end_pt)
    NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
    U1=[]; U2=[]; U3=[]; R1=[]; R2=[]; R3=[]
    [ret, NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3] = \
        Results.JointDispl(end_pt, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, U1, U2, U3, R1, R2, R3)
    etabs_uz_tip_mm = U3[0]*1000 if NR > 0 else float('nan')
    etabs_ry_tip = R2[0] if NR > 0 else float('nan')

    # Base reaction (start_pt)
    NR=0; Obj=[]; Elm=[]; AC=[]; ST=[]; SN=[]
    F1=[]; F2=[]; F3=[]; M1=[]; M2=[]; M3=[]
    [ret, NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3] = \
        Results.JointReact(start_pt, eItemTypeElm(0), NR, Obj, Elm, AC, ST, SN, F1, F2, F3, M1, M2, M3)
    etabs_fz_base = F3[0] if NR > 0 else float('nan')
    etabs_my_base = M2[0] if NR > 0 else float('nan')

    diff_EB   = (etabs_uz_tip_mm - (-a["w_EB_mm"]))    / abs(a["w_EB_mm"])    * 100 if abs(a["w_EB_mm"]) > 1e-9 else 0
    diff_tot  = (etabs_uz_tip_mm - (-a["w_total_mm"])) / abs(a["w_total_mm"]) * 100 if abs(a["w_total_mm"]) > 1e-9 else 0

    p(f"\n  RESULTADO {c['name']}:")
    p(f"    Analitico EB         : {-a['w_EB_mm']:.5f} mm")
    p(f"    Analitico Timoshenko : {-a['w_total_mm']:.5f} mm  (EB + shear)")
    p(f"    ETABS Uz_tip         : {etabs_uz_tip_mm:.5f} mm")
    p(f"    Δ vs EB        : {diff_EB:+.3f}%")
    p(f"    Δ vs Timoshenko: {diff_tot:+.3f}%  {'[PASS]' if abs(diff_tot) < 2 else '[FAIL]'}")
    p(f"    Reacciones base: Fz={etabs_fz_base:+.4f} kN (esperado {a['V_base_kN']:.4f}),  My={etabs_my_base:+.4f} kNm (esperado {-a['M_base_kNm']:.4f})")

    results.append({
        "case": c["name"], "ana_EB_mm": -a["w_EB_mm"], "ana_tim_mm": -a["w_total_mm"],
        "etabs_mm": etabs_uz_tip_mm, "diff_EB": diff_EB, "diff_tim": diff_tot,
        "etabs_fz": etabs_fz_base, "ana_V": a["V_base_kN"],
        "etabs_my": etabs_my_base, "ana_M": -a["M_base_kNm"],
    })

p(f"\n{'='*70}")
p("  RESUMEN FINAL W2")
p(f"{'='*70}")
p(f"  {'Caso':22s} {'Ana_EB':>12s} {'Ana_Tim':>12s} {'ETABS':>12s} {'ΔEB%':>9s} {'ΔTim%':>9s}")
for r in results:
    p(f"  {r['case']:22s} {r['ana_EB_mm']:12.5f} {r['ana_tim_mm']:12.5f} {r['etabs_mm']:12.5f} {r['diff_EB']:+9.3f} {r['diff_tim']:+9.3f}")
p(f"\n  Reacciones base:")
for r in results:
    p(f"    {r['case']:22s} Fz: ETABS={r['etabs_fz']:+.4f} ana={r['ana_V']:+.4f}  |  My: ETABS={r['etabs_my']:+.4f} ana={r['ana_M']:+.4f}")

# Cerrar ETABS limpio para no dejar instancia zombie
try:
    ETABS.ApplicationExit(False)
    p("\n  ETABS cerrado.")
except Exception as ex:
    p(f"\n  ETABS exit error (ignored): {ex}")
p("\nDONE")
