# -*- coding: utf-8 -*-
"""
ETABS validation de "Barra axial 1D" — construye el modelo via API
(sin E2K file) y compara contra solucion analitica Hooke 1D.

Modelo (mismos defaults que hekatan):
  L = 5 m,  A = 0.01 m^2 (10x10 cm),  E = 200 GPa,  F = 100 kN
  Restraint nodo 1: fixed.  Load nodo 2: FX = +100 kN

Esperado:  delta = F*L/(A*E) = 0.25 mm,  reaccion = -100 kN
"""
import os, sys, time, json
import comtypes.client

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

HERE = os.path.dirname(os.path.abspath(__file__))
EDB = os.path.join(HERE, "W1_barra_axial_via_api.EDB")
LOG = os.path.join(HERE, "W1_barra_axial_via_api_log.txt")
RESULTS = os.path.join(HERE, "W1_barra_axial_via_api_results.json")
ETABS_EXE = r"C:\Program Files\Computers and Structures\ETABS 22\ETABS.exe"

def log(msg):
    print(msg, flush=True)
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(msg + "\n")

def conectar():
    log("[1] Conectar ETABS...")
    helper = comtypes.client.CreateObject("ETABSv1.Helper")
    helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
    log("    [..] Intentando GetObject (instancia existente)...")
    try:
        obj = helper.GetObject("CSI.ETABS.API.ETABSObject")
        if obj is None: raise RuntimeError("None")
        log("    [OK] Conectado a instancia existente")
    except Exception as e:
        log(f"    [..] GetObject fallo ({e}), lanzando ETABS via CreateObject...")
        obj = helper.CreateObject(ETABS_EXE)
        time.sleep(15)
        log("    [OK] ETABS lanzado")
    return obj.SapModel

def construir_barra_axial(sap):
    log("\n[2] Inicializar modelo nuevo (units kN, m, C)...")
    sap.InitializeNewModel(6)  # 6 = kN_m_C
    sap.File.NewBlank()
    log("    [OK] InitializeNewModel + NewBlank")

    log("\n[3] Definir material Steel S200 (E=200 GPa, nu=0.3)...")
    # eMatType 1 = Steel
    sap.PropMaterial.SetMaterial("S200", 1)
    sap.PropMaterial.SetMPIsotropic("S200", 200000000.0, 0.3, 1.17e-5)
    log("    [OK] S200 definido")

    log("\n[4] Definir seccion rectangular 10x10 cm (A=0.01 m^2)...")
    sap.PropFrame.SetRectangle("BAR10x10", "S200", 0.10, 0.10)
    log("    [OK] BAR10x10 definida")

    log("\n[5] Crear frame por coordenadas (nodos auto-creados)...")
    # AddByCoord(x1, y1, z1, x2, y2, z2, Name, PropName, UserName, CSys)
    pnt1_name = [""]; pnt2_name = [""]
    name = [""]
    ret = sap.FrameObj.AddByCoord(0.0, 0.0, 0.0, 5.0, 0.0, 0.0, name, "BAR10x10", "BarraAxial", "Global")
    log(f"    [OK] AddByCoord ret = {ret}")

    log("\n[6] Identificar nodos por coordenadas...")
    # GetNameList para puntos
    NumPts = 0; PtNames = []
    nl = sap.PointObj.GetNameList(NumPts, PtNames)
    pt_list = list(nl[1])
    log(f"    Puntos creados: {pt_list}")

    # Identificar nodo en (0,0,0) y (5,0,0)
    pt_at_origin = None; pt_at_end = None
    for p in pt_list:
        x = 0.0; y = 0.0; z = 0.0
        coords = sap.PointObj.GetCoordCartesian(p, x, y, z)
        # coords[1..3] = x, y, z
        px = coords[1]; py = coords[2]; pz = coords[3]
        log(f"    {p}: ({px:.3f}, {py:.3f}, {pz:.3f})")
        if abs(px) < 1e-6:
            pt_at_origin = p
        elif abs(px - 5.0) < 1e-6:
            pt_at_end = p
    log(f"    Origin (apoyo): {pt_at_origin}   End (carga): {pt_at_end}")

    log("\n[7] Restraint en apoyo (UX UY UZ RX RY RZ)...")
    restraint = (True, True, True, True, True, True)
    ret = sap.PointObj.SetRestraint(pt_at_origin, restraint)
    log(f"    [OK] SetRestraint ret = {ret}")

    log("\n[8] LoadPattern LIVE (sin SW) + Carga axial 100 kN en end...")
    sap.LoadPatterns.Add("LIVE", 3, 0.0, True)
    # SetLoadForce(name, pattern, value=[FX,FY,FZ,MX,MY,MZ], Replace, CSys, ItemType)
    val = (100.0, 0.0, 0.0, 0.0, 0.0, 0.0)
    ret = sap.PointObj.SetLoadForce(pt_at_end, "LIVE", val, True, "Global", 0)
    log(f"    [OK] SetLoadForce ret = {ret}")

    return pt_at_origin, pt_at_end

def correr_y_leer(sap, pt_origin, pt_end):
    log("\n[9] Guardar EDB y correr analisis...")
    sap.File.Save(EDB)
    sap.Analyze.RunAnalysis()
    time.sleep(1)
    log("    [OK] Analisis terminado")

    log("\n[10] Seleccionar caso LIVE para output...")
    sap.Results.Setup.DeselectAllCasesAndCombosForOutput()
    sap.Results.Setup.SetCaseSelectedForOutput("LIVE")

    log("\n[11] Desplazamientos...")
    disp = {}
    for p in (pt_origin, pt_end):
        rl = sap.Results.JointDispl(p, 0, 0, [], [], [], [], [], [], [], [], [], [], [])
        if rl and rl[0] > 0:
            disp[p] = {
                "Ux_mm": rl[6][0] * 1000,
                "Uy_mm": rl[7][0] * 1000,
                "Uz_mm": rl[8][0] * 1000,
            }
            log(f"    {p}: Ux={disp[p]['Ux_mm']:.5f} mm  Uy={disp[p]['Uy_mm']:.5f} mm  Uz={disp[p]['Uz_mm']:.5f} mm")

    log("\n[12] Reacciones...")
    react = {}
    for p in (pt_origin, pt_end):
        rl = sap.Results.JointReact(p, 0, 0, [], [], [], [], [], [], [], [], [], [], [])
        if rl and rl[0] > 0:
            react[p] = {
                "FX_kN": rl[6][0],
                "FY_kN": rl[7][0],
                "FZ_kN": rl[8][0],
            }
            log(f"    {p}: FX={react[p]['FX_kN']:.4f} kN  FY={react[p]['FY_kN']:.4f} kN  FZ={react[p]['FZ_kN']:.4f} kN")

    return disp, react

def validar(disp, react, pt_origin, pt_end):
    log("\n" + "=" * 70)
    log("  VALIDACION analitica Hooke 1D")
    log("=" * 70)
    L = 5.0; A = 0.01; E = 200e6; F = 100.0
    delta_teo_mm = F * L / (A * E) * 1000
    react_teo_kN = -F
    log(f"  delta teorico (delta = F*L/(A*E))    : {delta_teo_mm:.5f} mm")
    log(f"  reaccion teorica en apoyo (FX)       : {react_teo_kN:.4f} kN")
    log("")
    if pt_end in disp:
        u_etabs = disp[pt_end]["Ux_mm"]
        err = abs(u_etabs - delta_teo_mm)
        rel = err / abs(delta_teo_mm) * 100
        log(f"  Ux ETABS en end {pt_end}              : {u_etabs:.5f} mm")
        log(f"  error absoluto                       : {err:.6f} mm")
        log(f"  error relativo                       : {rel:.4f} %")
        log(f"  {'[PASS]' if rel < 0.1 else '[FAIL]'} delta")
    if pt_origin in react:
        r_etabs = react[pt_origin]["FX_kN"]
        log(f"  Reaccion FX ETABS en apoyo {pt_origin}: {r_etabs:.4f} kN")
        log(f"  {'[PASS]' if abs(r_etabs - react_teo_kN) < 0.1 else '[FAIL]'} reaccion")

    return {
        "model": "Barra axial 1D (via API, sin E2K)",
        "params": {"L_m": L, "A_m2": A, "E_kNm2": E, "F_kN": F},
        "expected": {"delta_mm": delta_teo_mm, "reaction_kN": react_teo_kN},
        "displacements": disp,
        "reactions": react,
    }

def main():
    if os.path.exists(LOG):
        os.remove(LOG)
    log("=" * 70)
    log("  BARRA AXIAL 1D — via ETABS API directo")
    log("=" * 70)

    sap = conectar()
    pt_o, pt_e = construir_barra_axial(sap)
    disp, react = correr_y_leer(sap, pt_o, pt_e)
    results = validar(disp, react, pt_o, pt_e)

    with open(RESULTS, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    log(f"\n[OK] JSON: {RESULTS}")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        log(f"\n[FATAL] {type(e).__name__}: {e}")
        import traceback
        log(traceback.format_exc())
        sys.exit(1)
