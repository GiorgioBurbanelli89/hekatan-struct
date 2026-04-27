# -*- coding: utf-8 -*-
"""Tablero de puente — 3 vigas dobleT acero + losa concreto en SAP2000.

Sigue el patron OFICIAL CSI documentado por Computers and Structures:
- helper = SAP2000v1.Helper + QueryInterface(cHelper)
- helper.GetObject (attach) o helper.CreateObjectProgID (new instance)
- ApplicationStart() (sin args)
- InitializeNewModel() / File.NewBlank()
- LoadPatterns.Add explicitamente
- File.Save antes de RunAnalysis

Modos:
  0 = Naive: dobleT completa sin offset
  1 = Solar: alma + patin inferior (sin offset)
  2 = Eccentric: dobleT + Insertion Point Bottom Center (cardinal=8)
"""
import os
import sys
import comtypes.client
import time
import argparse


# === Datos modelo (mismos que Hekatan tablero-puente) ===
L = 15.0; W = 6.0; T_S = 0.20; S_B = 2.0
BF = 0.20; TF = 0.015; HW = 0.55; TW = 0.010
Q_KNM2 = 15.0
E_C = 25e6;   NU_C = 0.20;  RHO_C = 24.0
E_S = 200e6;  NU_S = 0.30;  RHO_S = 78.0
N_X = 20; N_Y = 12

# === Flags ===
AttachToInstance = False  # False = lanzar nueva, True = conectar existente
SpecifyPath = False
LTYPE_OTHER = 8

APIPath = os.path.expanduser(r"~\Documents\HekatanSapTest")
if not os.path.exists(APIPath):
    os.makedirs(APIPath, exist_ok=True)


def connect_sap():
    """Patron oficial CSI: helper + GetObject o CreateObjectProgID."""
    print("=" * 70)
    print("  CONEXION SAP2000")
    print("=" * 70, flush=True)

    helper = comtypes.client.CreateObject('SAP2000v1.Helper')
    helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
    print("[OK] Helper creado", flush=True)

    if AttachToInstance:
        print("[..] AttachToInstance=True -> intentando GetObject...", flush=True)
        try:
            sap_obj = helper.GetObject("CSI.SAP2000.API.SapObject")
            print(">>> [PATH 1] CONECTADO a instancia ACTIVA <<<", flush=True)
        except (OSError, comtypes.COMError):
            print("ERROR: no hay instancia activa. Cambia AttachToInstance=False.", flush=True)
            sys.exit(-1)
    else:
        print("[..] AttachToInstance=False -> lanzando nueva instancia...", flush=True)
        try:
            sap_obj = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
        except (OSError, comtypes.COMError):
            print("ERROR: no se pudo crear SapObject", flush=True)
            sys.exit(-1)
        # CRITICAL: ApplicationStart(units=6, visible=True) y wait 8s
        # Sin esto, MainForm se desecha antes de que el script pueda usarlo.
        ret = sap_obj.ApplicationStart(6, True)
        if ret != 0:
            print(f"ERROR: ApplicationStart retorno {ret}", flush=True)
            sys.exit(-1)
        print("[..] Esperando 8s para que SAP termine de cargar...", flush=True)
        time.sleep(8)
        print(">>> [PATH 2] LANZADA instancia NUEVA <<<", flush=True)

    return sap_obj, sap_obj.SapModel


def build_model(sm, mode: int):
    """Construye tablero siguiendo el patron CSI estandar."""
    print(f"\n--- BUILD MODO {mode} ---", flush=True)

    # 1. Init y units
    sm.InitializeNewModel()
    sm.File.NewBlank()
    sm.SetPresentUnits(6)  # kN, m, C
    print("[OK] Modelo inicializado kN-m-C", flush=True)

    # 2. Materiales (oficial: SetMaterial + SetMPIsotropic)
    sm.PropMaterial.SetMaterial("CONC24", 2)  # 2=CONCRETE
    sm.PropMaterial.SetMPIsotropic("CONC24", E_C, NU_C, 1e-5)
    sm.PropMaterial.SetWeightAndMass("CONC24", 1, RHO_C)

    sm.PropMaterial.SetMaterial("ACERO_A36", 1)  # 1=STEEL
    sm.PropMaterial.SetMPIsotropic("ACERO_A36", E_S, NU_S, 1.2e-5)
    sm.PropMaterial.SetWeightAndMass("ACERO_A36", 1, RHO_S)
    print("[OK] Materiales: CONC24 + ACERO_A36", flush=True)

    # 3. Seccion viga I (oficial: PropFrame.SetISection)
    if mode == 1:
        sm.PropFrame.SetISection(
            "VIGA_SOLAR", "ACERO_A36",
            HW + 2*TF, 0.001, 0.001, TW, BF, TF,
        )
        section = "VIGA_SOLAR"
    else:
        sm.PropFrame.SetISection(
            "VIGA_FULL", "ACERO_A36",
            HW + 2*TF, BF, TF, TW, BF, TF,
        )
        section = "VIGA_FULL"
    print(f"[OK] Seccion viga: {section}", flush=True)

    # 4. Shell losa via SetShell_1 (no SetSlab — esa signature varia)
    # SetShell_1(name, shellType=1=ShellThin, isThickened=False, mat, angle=0, t_membrane, t_bending)
    sm.PropArea.SetShell_1("LOSA20", 1, False, "CONC24", 0.0, T_S, T_S)
    print("[OK] Shell LOSA20 (ShellThin, t=0.20 m)", flush=True)

    # 5. Geometria
    dx = L / N_X
    dy = W / N_Y
    y_beams = [W/2 - S_B, W/2, W/2 + S_B]
    ys = [j * dy for j in range(N_Y + 1)]
    beam_rows = []
    for yB in y_beams:
        best_j, dmin = 0, 1e9
        for j in range(N_Y + 1):
            d = abs(ys[j] - yB)
            if d < dmin: dmin, best_j = d, j
        ys[best_j] = yB
        beam_rows.append(best_j)

    # 5a. Nodos via PointObj.AddCartesian (asignamos nombres explicitos 1, 2, 3, ...)
    print(f"[..] Creando {(N_X+1)*(N_Y+1)} nodos...", flush=True)
    point_names = []
    nid = 1
    for j in range(N_Y + 1):
        row = []
        for i in range(N_X + 1):
            name = str(nid)
            sm.PointObj.AddCartesian(float(i*dx), float(ys[j]), 0.0, name)
            row.append(name)
            nid += 1
        point_names.append(row)
    print(f"[OK] {sm.PointObj.Count()} nodos", flush=True)

    # 5b. Areas via AreaObj.AddByPoint
    print(f"[..] Creando {N_X*N_Y} shells...", flush=True)
    aid = 1
    for j in range(N_Y):
        for i in range(N_X):
            pts = [point_names[j][i], point_names[j][i+1],
                   point_names[j+1][i+1], point_names[j+1][i]]
            sm.AreaObj.AddByPoint(4, pts, str(aid), "LOSA20")
            aid += 1
    print(f"[OK] {sm.AreaObj.Count()} areas", flush=True)

    # 5c. Frames via AddByPoint (mas confiable cuando los puntos ya existen)
    print(f"[..] Creando {3*N_X} frames vigas...", flush=True)
    beam_frame_names = [[], [], []]
    for k, j_beam in enumerate(beam_rows):
        for i in range(N_X):
            p1 = point_names[j_beam][i]
            p2 = point_names[j_beam][i+1]
            fname = f"B{k}_{i}"
            ret = sm.FrameObj.AddByPoint(p1, p2, fname, section)
            actual = ret[0] if isinstance(ret, tuple) else fname
            beam_frame_names[k].append(actual)
    print(f"[OK] {sm.FrameObj.Count()} frames", flush=True)

    # 6. Insertion Point para mode 2
    if mode == 2:
        print("[..] Aplicando Insertion Point cardinal=8 Bottom Center...", flush=True)
        for names in beam_frame_names:
            for fname in names:
                sm.FrameObj.SetInsertionPoint(
                    fname, 8, False, True,
                    [0.0]*3, [0.0]*3, "Local",
                )
        print("[OK] Insertion Point aplicado", flush=True)

    # 7. Apoyos: pin-roller en extremos de cada viga
    for j_beam in beam_rows:
        sm.PointObj.SetRestraint(point_names[j_beam][0],
                                  [True, True, True, False, False, False])
        sm.PointObj.SetRestraint(point_names[j_beam][N_X],
                                  [False, True, True, False, False, False])
    print("[OK] Apoyos pin-roller", flush=True)

    # 8. Load pattern DEAD (segun oficial, Add explicito)
    # DEAD ya existe por defecto; SetSelfWTMultiplier para sin peso propio
    sm.LoadPatterns.SetSelfWTMultiplier("DEAD", 0)
    print("[OK] DEAD self-weight = 0", flush=True)

    # 9. Carga uniforme en losa
    # FIX BUG: Dir=Gravity con valor NEGATIVO aplica la carga HACIA ARRIBA
    # (porque Gravity ya es -Z). Para que vaya hacia abajo, valor POSITIVO.
    # Confirmado en .s2k: F3=-244 (apoyo empuja down) = carga real era UP.
    print(f"[..] Aplicando q={Q_KNM2} kN/m2 hacia ABAJO (Dir=Gravity, val=+{Q_KNM2})...", flush=True)
    aid = 1
    n_loaded = 0
    for j in range(N_Y):
        for i in range(N_X):
            try:
                sm.AreaObj.SetLoadUniform(str(aid), "DEAD", Q_KNM2, 10, True, "Global")
                n_loaded += 1
            except Exception:
                pass
            aid += 1
    print(f"[OK] {n_loaded} shells cargados", flush=True)

    return point_names, beam_frame_names, beam_rows


def run_and_extract(sm, beam_frame_names, point_names, beam_rows):
    """Save, RunAnalysis, extract M3/V2/U3 viga central."""
    # MODAL off
    try: sm.Analyze.SetRunCaseFlag("MODAL", False)
    except Exception: pass

    sdb = os.path.join(APIPath, "tablero_puente_sap.sdb")
    ret_save = sm.File.Save(sdb)
    print(f"[OK] Save: ret={ret_save}, path={sdb}", flush=True)

    print("[..] RunAnalysis...", flush=True)
    ret = sm.Analyze.RunAnalysis()
    print(f"[OK] RunAnalysis ret={ret}", flush=True)
    time.sleep(2)

    sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
    sm.Results.Setup.SetCaseSelectedForOutput("DEAD")

    # FIX BUG: SAP renombra frames a "1", "2", ..., NO respeta los nombres
    # custom "B0_0" etc. Confirmed via .s2k:
    #   Frame=1 hasta Frame=60 (3 vigas x 20 segmentos)
    # Viga central = frames 21-40 (segunda viga creada).
    M_max, V_max = 0.0, 0.0
    for fid in range(N_X + 1, 2 * N_X + 1):  # 21-40
        ret = sm.Results.FrameForce(str(fid), 0)
        if ret[0] > 0:
            for i in range(ret[0]):
                M = abs(ret[13][i]); V = abs(ret[9][i])
                if M > M_max: M_max = M
                if V > V_max: V_max = V

    p_mid = point_names[beam_rows[1]][N_X // 2]
    ret = sm.Results.JointDispl(p_mid, 0)
    delta_mm = abs(ret[8][0] * 1000.0) if ret[0] > 0 else 0.0

    return M_max, V_max, delta_mm


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--mode", type=int, default=0, choices=[0, 1, 2])
    args = parser.parse_args()

    sap_obj, sm = connect_sap()
    ver = sm.GetVersion()
    print(f"Version: {ver}", flush=True)

    print(f"\n{'='*70}\n  MODO {args.mode}\n{'='*70}", flush=True)
    point_names, beam_frame_names, beam_rows = build_model(sm, args.mode)
    M, V, d = run_and_extract(sm, beam_frame_names, point_names, beam_rows)

    ref_hekatan = {0: (179.2, 263.3, 25.58), 1: (167.6, 273.3, 31.56), 2: (336.4, 233.7, 15.32)}
    Mh, Vh, dh = ref_hekatan[args.mode]
    print(f"\n  ====== RESULTADOS MODO {args.mode} ======")
    print(f"  M_max  SAP={M:>8.1f} kN.m   Hekatan={Mh:>8.1f}   dif={(M-Mh)/Mh*100 if Mh else 0:+.1f}%")
    print(f"  V_max  SAP={V:>8.1f} kN     Hekatan={Vh:>8.1f}   dif={(V-Vh)/Vh*100 if Vh else 0:+.1f}%")
    print(f"  delta  SAP={d:>8.2f} mm     Hekatan={dh:>8.2f}   dif={(d-dh)/dh*100 if dh else 0:+.1f}%")


if __name__ == "__main__":
    main()
