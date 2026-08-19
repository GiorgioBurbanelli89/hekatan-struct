# -*- coding: utf-8 -*-
"""
ETABS API runner para validar hekatan-struct "Barra axial (1D)" vs ETABS.

Modelo:
  L = 5 m, A = 0.01 m^2, E = 200 GPa, F = 100 kN axial en X
  Restraint: nodo 1 (fully fixed UX UY UZ RX RY RZ)
  Load: 100 kN FX en nodo 2

Esperado:
  delta = F*L / (A*E) = 100*5 / (0.01 * 200e6) = 2.5e-4 m = 0.25 mm
  Reaction = -100 kN FX en nodo 1
"""
import os, sys, time, json
import comtypes.client

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

HERE = os.path.dirname(os.path.abspath(__file__))
E2K = os.path.join(HERE, "W1_barra_axial.e2k")
EDB = os.path.join(HERE, "W1_barra_axial.EDB")
RESULTS_JSON = os.path.join(HERE, "W1_barra_axial_results.json")
LOG = os.path.join(HERE, "W1_barra_axial_log.txt")
ETABS_EXE = r"C:\Program Files\Computers and Structures\ETABS 22\ETABS.exe"

def log(msg):
    print(msg, flush=True)
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(msg + "\n")

def connect():
    log("[1] Conectando a ETABS...")
    helper = comtypes.client.CreateObject("ETABSv1.Helper")
    helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
    obj = None
    try:
        obj = helper.GetObject("CSI.ETABS.API.ETABSObject")
        if obj is None: raise RuntimeError("None")
        log("    [OK] Conectado a instancia existente")
    except Exception:
        log("    [..] Lanzando ETABS 22 con CreateObject(ETABS_EXE) + ApplicationStart...")
        try:
            obj = helper.CreateObject(ETABS_EXE)
            obj.ApplicationStart(); time.sleep(5)
            log("    [OK] ETABS lanzado (via path)")
        except Exception as e1:
            log(f"    [WARN] CreateObject(path) fallo: {e1}")
            log("    [..] Fallback: CreateObjectProgID ...")
            obj = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
            obj.ApplicationStart(); time.sleep(5)
            log("    [OK] ETABS lanzado (via ProgID)")
    return obj.SapModel

def main():
    # Limpiar log
    if os.path.exists(LOG):
        os.remove(LOG)

    log("=" * 70)
    log("  BARRA AXIAL 1D — validacion hekatan vs ETABS")
    log("=" * 70)
    log(f"  E2K   : {E2K}")
    log(f"  EDB   : {EDB}")
    log(f"  Log   : {LOG}")
    log("")

    if not os.path.exists(E2K):
        log(f"[FATAL] E2K no existe: {E2K}")
        sys.exit(1)

    SapModel = connect()

    log("\n[2] Abriendo E2K...")
    SapModel.SetPresentUnits(6)  # 6 = kN_m_C
    ret = SapModel.File.OpenFile(E2K)
    log(f"    OpenFile ret = {ret}")
    SapModel.SetPresentUnits(6)
    SapModel.SetModelIsLocked(False)

    log("\n[3] Guardando como EDB...")
    ret = SapModel.File.Save(EDB)
    log(f"    Save ret = {ret}")
    ret = SapModel.File.OpenFile(EDB)
    log(f"    OpenFile EDB ret = {ret}")
    SapModel.SetPresentUnits(6)
    SapModel.SetModelIsLocked(False)

    log("\n[4] Run analysis...")
    ret = SapModel.Analyze.RunAnalysis()
    log(f"    RunAnalysis ret = {ret}")

    log("\n[5] Resultados — joint displacements")
    SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
    SapModel.Results.Setup.SetCaseSelectedForOutput("Live")

    NumberNames = 0; MyName = []
    nl = SapModel.PointObj.GetNameList(NumberNames, MyName)
    joints = list(nl[1])
    log(f"    Joints en modelo: {joints}")

    disp_out = {}
    for j in joints:
        NR=0; Obj=[]; Elm=[]; ACase=[]; ST=[]; SN=[]
        U1=[]; U2=[]; U3=[]; R1=[]; R2=[]; R3=[]
        rl = SapModel.Results.JointDispl(j, 0, NR, Obj, Elm, ACase, ST, SN, U1, U2, U3, R1, R2, R3)
        if rl[0] > 0:
            disp_out[j] = {
                "Ux_mm": rl[6][0] * 1000,
                "Uy_mm": rl[7][0] * 1000,
                "Uz_mm": rl[8][0] * 1000,
                "Rx": rl[9][0], "Ry": rl[10][0], "Rz": rl[11][0],
            }
            log(f"    joint {j}: Ux={disp_out[j]['Ux_mm']:.5f} mm  Uy={disp_out[j]['Uy_mm']:.5f} mm  Uz={disp_out[j]['Uz_mm']:.5f} mm")

    log("\n[6] Resultados — reacciones en apoyo")
    react_out = {}
    for j in joints:
        NR=0; Obj=[]; Elm=[]; ACase=[]; ST=[]; SN=[]
        F1=[]; F2=[]; F3=[]; M1=[]; M2=[]; M3=[]
        rl = SapModel.Results.JointReact(j, 0, NR, Obj, Elm, ACase, ST, SN, F1, F2, F3, M1, M2, M3)
        if rl[0] > 0:
            react_out[j] = {
                "FX_kN": rl[6][0],
                "FY_kN": rl[7][0],
                "FZ_kN": rl[8][0],
                "MX": rl[9][0], "MY": rl[10][0], "MZ": rl[11][0],
            }
            log(f"    joint {j}: FX={react_out[j]['FX_kN']:.4f} kN  FY={react_out[j]['FY_kN']:.4f} kN  FZ={react_out[j]['FZ_kN']:.4f} kN")

    log("\n" + "=" * 70)
    log("  VALIDACION")
    log("=" * 70)
    # Esperado: nodo 2 con Ux = +F*L/(A*E)
    L_m = 5.0; A_m2 = 0.01; E_kNm2 = 200e6; F_kN = 100.0
    delta_teo_m = F_kN * L_m / (A_m2 * E_kNm2)
    delta_teo_mm = delta_teo_m * 1000
    react_teo_kN = -F_kN
    log(f"  delta analitico (Hooke) en nodo 2 : {delta_teo_mm:.5f} mm  (Ux)")
    log(f"  reaccion analitica en nodo 1      : {react_teo_kN:.4f} kN   (FX)")
    log("")
    if "2" in disp_out:
        delta_etabs = disp_out["2"]["Ux_mm"]
        err = abs(delta_etabs - delta_teo_mm)
        rel = err / abs(delta_teo_mm) * 100 if delta_teo_mm else 0
        log(f"  delta ETABS en nodo 2             : {delta_etabs:.5f} mm")
        log(f"  error absoluto                    : {err:.6f} mm")
        log(f"  error relativo                    : {rel:.4f} %")
    if "1" in react_out:
        rx_etabs = react_out["1"]["FX_kN"]
        log(f"  reaccion ETABS en nodo 1          : {rx_etabs:.4f} kN")

    results = {
        "model": "Barra axial 1D",
        "params": {"L_m": L_m, "A_m2": A_m2, "E_kNm2": E_kNm2, "F_kN": F_kN},
        "expected": {"delta_mm": delta_teo_mm, "reaction_kN": react_teo_kN},
        "displacements": disp_out,
        "reactions": react_out,
    }
    with open(RESULTS_JSON, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    log(f"\n[OK] Resultados guardados en: {RESULTS_JSON}")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        log(f"\n[FATAL] {type(e).__name__}: {e}")
        import traceback
        log(traceback.format_exc())
        sys.exit(1)
