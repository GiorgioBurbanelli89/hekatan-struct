# -*- coding: utf-8 -*-
"""TEST: Membrane + OneWayLoadDist + SetLocalAxes en SAP2000.

Objetivo: probar si distribuyendo la carga 1-way con eje local 1 paralelo
a las vigas principales, el momento M_pp baja (acerca a Hekatan = 179).

3 escenarios:
  ESC 1: Shell-Thin default (referencia, da M=657)
  ESC 2: Shell-Thin + SetLocalAxes(0)  (Local 1 = X, paralelo a vigas)
  ESC 3: Plate-Thick + SetLocalAxes(0) (membrana 1-way no aplica a plate)
"""
import os, sys, time, comtypes.client, argparse

# Geometria igual al test anterior 3 vigas paralelas
L = 15.0; W = 6.0; T_S = 0.20; S_B = 2.0
BF = 0.20; TF = 0.015; HW = 0.55; TW = 0.010
Q_KNM2 = 15.0
N_X = 20; N_Y = 12

# Materiales
E_C = 25e6; NU_C = 0.20; RHO_C = 24.0
E_S = 200e6; NU_S = 0.30; RHO_S = 78.0


def connect_sap():
    helper = comtypes.client.CreateObject("SAP2000v1.Helper")
    helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
    try:
        sap = comtypes.client.GetActiveObject("CSI.SAP2000.API.SapObject")
        _ = sap.SapModel.GetModelIsLocked()
        print("[OK] Conectado a SAP existente", flush=True)
        return sap, sap.SapModel
    except Exception:
        pass
    sap = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
    sap.ApplicationStart(6, True); time.sleep(8)
    print("[OK] Lanzada nueva instancia SAP", flush=True)
    return sap, sap.SapModel


def build_and_run(sm, scenario: str):
    """scenario: 'thin_default' | 'thin_local0' | 'thick_local0'"""
    print(f"\n{'='*70}\n  Escenario: {scenario}\n{'='*70}", flush=True)

    sm.InitializeNewModel(6); sm.File.NewBlank(); sm.SetPresentUnits(6)

    # Materiales
    sm.PropMaterial.SetMaterial("CONC24", 2)
    sm.PropMaterial.SetMPIsotropic("CONC24", E_C, NU_C, 1e-5)
    sm.PropMaterial.SetWeightAndMass("CONC24", 1, RHO_C)
    sm.PropMaterial.SetMaterial("ACERO_A36", 1)
    sm.PropMaterial.SetMPIsotropic("ACERO_A36", E_S, NU_S, 1.2e-5)
    sm.PropMaterial.SetWeightAndMass("ACERO_A36", 1, RHO_S)

    sm.PropFrame.SetISection("VIGA_FULL", "ACERO_A36",
        HW + 2*TF, BF, TF, TW, BF, TF)

    # Shell type segun escenario
    if scenario == "thick_local0":
        # Plate-Thick (Mindlin) — incluye transverse shear
        sm.PropArea.SetShell_1("LOSA20", 2, False, "CONC24", 0.0, T_S, T_S)
        print("[OK] Shell-Thick", flush=True)
    else:
        # Shell-Thin (Kirchhoff)
        sm.PropArea.SetShell_1("LOSA20", 1, False, "CONC24", 0.0, T_S, T_S)
        print("[OK] Shell-Thin", flush=True)

    # Geometria
    dx = L / N_X; dy = W / N_Y
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

    point_names = []
    nid = 1
    for j in range(N_Y + 1):
        row = []
        for i in range(N_X + 1):
            sm.PointObj.AddCartesian(float(i*dx), float(ys[j]), 0.0, str(nid))
            row.append(str(nid)); nid += 1
        point_names.append(row)

    # Areas (orden de nodos CCW define Local 1 default = arista 1->2)
    aid = 1
    area_names = []
    for j in range(N_Y):
        for i in range(N_X):
            pts = [point_names[j][i], point_names[j][i+1],
                   point_names[j+1][i+1], point_names[j+1][i]]
            sm.AreaObj.AddByPoint(4, pts, str(aid), "LOSA20")
            area_names.append(str(aid))
            aid += 1
    print(f"[OK] {sm.AreaObj.Count()} shells creadas", flush=True)

    # ── SET LOCAL AXES segun escenario ──
    # SetLocalAxes(name, angle_deg) — rotacion alrededor del normal (Local 3)
    # angle=0  → Local 1 paralelo a primer edge (= X aqui)  → carga viaja a Y → toca vigas en X
    # angle=90 → Local 1 perpendicular (= Y)                → carga viaja a X → toca vigas en Y
    if scenario == "thin_local0":
        angle = 0.0
        print(f"[..] SetLocalAxes(angle={angle} deg) — Local 1 = X", flush=True)
    elif scenario == "thin_local90":
        angle = 90.0
        print(f"[..] SetLocalAxes(angle={angle} deg) — Local 1 = Y", flush=True)
    elif scenario == "thick_local0":
        angle = 0.0
        print(f"[..] Shell-Thick + SetLocalAxes(angle={angle} deg)", flush=True)
    else:
        angle = None

    if angle is not None:
        for an in area_names:
            try: sm.AreaObj.SetLocalAxes(an, float(angle))
            except Exception as e: print(f"  [warn] SetLocalAxes({an}): {e}"); break
        print(f"[OK] Local axes seteados a {angle} deg en {len(area_names)} shells", flush=True)

    # Frames vigas
    for jb in beam_rows:
        for i in range(N_X):
            sm.FrameObj.AddByPoint(point_names[jb][i], point_names[jb][i+1], "", "VIGA_FULL", "")

    # Apoyos
    for jb in beam_rows:
        sm.PointObj.SetRestraint(point_names[jb][0],  [True, True, True, False, False, False])
        sm.PointObj.SetRestraint(point_names[jb][N_X], [False, True, True, False, False, False])

    # Carga
    sm.LoadPatterns.SetSelfWTMultiplier("DEAD", 0)
    for ai in range(1, N_X*N_Y + 1):
        try: sm.AreaObj.SetLoadUniform(str(ai), "DEAD", Q_KNM2, 10, True, "Global")
        except: pass

    # Save + Run
    try: sm.Analyze.SetRunCaseFlag("MODAL", False)
    except: pass
    sdb = os.path.expanduser(rf"~\Documents\HekatanSapTest\test_{scenario}.sdb")
    os.makedirs(os.path.dirname(sdb), exist_ok=True)
    sm.File.Save(sdb)
    print(f"[..] RunAnalysis...", flush=True)
    ret = sm.Analyze.RunAnalysis()
    print(f"[OK] ret={ret}", flush=True); time.sleep(2)

    # Resultados viga central
    sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
    sm.Results.Setup.SetCaseSelectedForOutput("DEAD")
    M_max, V_max = 0.0, 0.0
    for fid in range(N_X + 1, 2*N_X + 1):
        try:
            ff = sm.Results.FrameForce(str(fid), 0)
            if ff[0] > 0:
                for k in range(ff[0]):
                    M = abs(ff[13][k]); V = abs(ff[9][k])
                    if M > M_max: M_max = M
                    if V > V_max: V_max = V
        except: pass

    j_mid = beam_rows[1]; i_mid = N_X // 2
    p_mid = point_names[j_mid][i_mid]
    disp = sm.Results.JointDispl(p_mid, 0)
    delta_mm = abs(disp[8][0] * 1000.0) if disp[0] > 0 else 0.0

    return M_max, V_max, delta_mm


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--esc", type=str, default="all",
                        choices=["all", "thin_default", "thin_local0", "thin_local90", "thick_local0"])
    args = parser.parse_args()

    sap, sm = connect_sap()
    escenarios = ["thin_default", "thin_local0", "thin_local90", "thick_local0"] if args.esc == "all" else [args.esc]
    results = {}
    for esc in escenarios:
        try:
            M, V, d = build_and_run(sm, esc)
            results[esc] = (M, V, d)
        except Exception as e:
            print(f"  [ERROR {esc}] {e}", flush=True)

    print(f"\n{'='*70}\n  COMPARACION FINAL\n{'='*70}")
    print(f"  {'Escenario':<25} {'M_max':>10} {'V_max':>10} {'delta':>10}")
    for esc, (M, V, d) in results.items():
        print(f"  {esc:<25} {M:>10.1f} {V:>10.1f} {d:>10.2f}")
    print(f"\n  Hekatan Mode 0 referencia:    179.2     263.3      25.58")


if __name__ == "__main__":
    main()
