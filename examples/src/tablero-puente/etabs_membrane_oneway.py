# -*- coding: utf-8 -*-
"""TEST en ETABS v22: SetLocalAxes en shells (angle 0 vs 90).

Hermano del sap2000_membrane_oneway.py. Mismo modelo (3 vigas dobleT
paralelas a X, slab 15x6m). Compara:
  thin_default      — sin tocar local axes
  thin_local0       — SetLocalAxes(angle=0,  Local 1 = X)
  thin_local90      — SetLocalAxes(angle=90, Local 1 = Y)

REQUISITO: ETABS 22 abierto manualmente antes de correr.
"""
import os, sys, time, comtypes.client, argparse

L = 15.0; W = 6.0; T_S = 0.20; S_B = 2.0
BF = 0.20; TF = 0.015; HW = 0.55; TW = 0.010
Q_KNM2 = 15.0
N_X = 20; N_Y = 12

E_C = 25e6; NU_C = 0.20; RHO_C = 24.0
E_S = 200e6; NU_S = 0.30; RHO_S = 78.0


def connect_etabs():
    print("[..] Conectando a ETABS via GetActiveObject...", flush=True)
    for attempt in range(1, 11):
        try:
            etabs = comtypes.client.GetActiveObject("CSI.ETABS.API.ETABSObject")
            sm = etabs.SapModel
            _ = sm.GetModelIsLocked()
            print(f">>> [PATH 1] CONECTADO en intento {attempt} <<<", flush=True)
            return etabs, sm
        except Exception:
            time.sleep(2)
    print("ERROR: ETABS no esta abierto. Abrir manualmente y reintentar.", flush=True)
    sys.exit(1)


def build_and_run(sm, scenario):
    print(f"\n{'='*70}\n  Escenario: {scenario}\n{'='*70}", flush=True)
    sm.InitializeNewModel(6); sm.File.NewBlank(); sm.SetPresentUnits(6)

    sm.PropMaterial.SetMaterial("CONC24", 2)
    sm.PropMaterial.SetMPIsotropic("CONC24", E_C, NU_C, 1e-5)
    sm.PropMaterial.SetWeightAndMass("CONC24", 1, RHO_C)
    sm.PropMaterial.SetMaterial("ACERO_A36", 1)
    sm.PropMaterial.SetMPIsotropic("ACERO_A36", E_S, NU_S, 1.2e-5)
    sm.PropMaterial.SetWeightAndMass("ACERO_A36", 1, RHO_S)

    sm.PropFrame.SetISection("VIGA_FULL", "ACERO_A36",
        HW + 2*TF, BF, TF, TW, BF, TF)
    # Shell-Thin: shellType=1 en ETABS
    sm.PropArea.SetSlab("LOSA20", 0, 1, "CONC24", T_S)
    print("[OK] Materiales + secciones", flush=True)

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

    # Areas via AddByCoord
    for j in range(N_Y):
        for i in range(N_X):
            x = [i*dx, (i+1)*dx, (i+1)*dx, i*dx]
            y = [ys[j], ys[j], ys[j+1], ys[j+1]]
            z = [0.0, 0.0, 0.0, 0.0]
            sm.AreaObj.AddByCoord(4, x, y, z, "", "LOSA20")

    # SET LOCAL AXES segun escenario — los nombres ETABS son F1, F2, ...
    if scenario in ("thin_local0", "thin_local90"):
        angle = 0.0 if scenario == "thin_local0" else 90.0
        print(f"[..] SetLocalAxes(angle={angle}) en {N_X*N_Y} shells (F1..F{N_X*N_Y})...", flush=True)
        n_set = 0
        for ai in range(1, N_X*N_Y + 1):
            for prefix in ["", "F", "A"]:
                name = f"{prefix}{ai}"
                try:
                    sm.AreaObj.SetLocalAxes(name, float(angle))
                    n_set += 1
                    break
                except Exception:
                    continue
        print(f"[OK] {n_set} shells con angle={angle} deg", flush=True)

    # Frames vigas
    for jb in beam_rows:
        for i in range(N_X):
            sm.FrameObj.AddByCoord(
                float(i*dx), float(ys[jb]), 0.0,
                float((i+1)*dx), float(ys[jb]), 0.0,
                "", "VIGA_FULL", "", "Global")

    # Limpiar Base auto-restraint y aplicar 6 apoyos correctos
    ret = sm.PointObj.GetAllPoints()
    n_pts = ret[0]; names = ret[1]; px = ret[2]; py = ret[3]; pz = ret[4]
    for i in range(n_pts):
        sm.PointObj.SetRestraint(names[i], [False]*6)
    n_apoyos = 0
    for i in range(n_pts):
        if abs(pz[i]) > 1e-3: continue
        is_left  = abs(px[i]) < 1e-3
        is_right = abs(px[i] - L) < 1e-3
        if not (is_left or is_right): continue
        match_y = any(abs(py[i] - ys[jb]) < 1e-3 for jb in beam_rows)
        if not match_y: continue
        dof = [True, True, True, False, False, False] if is_left else [False, True, True, False, False, False]
        sm.PointObj.SetRestraint(names[i], dof)
        n_apoyos += 1
    print(f"[OK] {n_apoyos} apoyos pin-roller", flush=True)

    # Carga
    sm.LoadPatterns.SetSelfWTMultiplier("Dead", 0)
    for ai in range(1, N_X*N_Y + 1):
        for prefix in ["", "F", "A"]:
            name = f"{prefix}{ai}"
            try:
                sm.AreaObj.SetLoadUniform(name, "Dead", Q_KNM2, 10, True, "Global", 0)
                break
            except Exception:
                continue
    print(f"[OK] Carga {Q_KNM2} kN/m2 aplicada", flush=True)

    # Save + Run
    sdb = os.path.expanduser(rf"~\Documents\HekatanSapTest\etabs_{scenario}.edb")
    os.makedirs(os.path.dirname(sdb), exist_ok=True)
    sm.File.Save(sdb)
    print(f"[..] RunAnalysis...", flush=True)
    ret = sm.Analyze.RunAnalysis()
    print(f"[OK] ret={ret}", flush=True); time.sleep(2)

    # Resultados viga central — frames B21..B40
    sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
    sm.Results.Setup.SetCaseSelectedForOutput("Dead")
    M_max, V_max = 0.0, 0.0
    for fid in range(N_X + 1, 2*N_X + 1):
        for prefix in ["B", ""]:
            name = f"{prefix}{fid}"
            try:
                ff = sm.Results.FrameForce(name, 0)
                if ff[0] > 0:
                    for k in range(ff[0]):
                        M = abs(ff[13][k]); V = abs(ff[9][k])
                        if M > M_max: M_max = M
                        if V > V_max: V_max = V
                    break
            except Exception:
                continue
    return M_max, V_max


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--esc", type=str, default="all",
                        choices=["all", "thin_default", "thin_local0", "thin_local90"])
    args = parser.parse_args()

    etabs, sm = connect_etabs()
    escs = ["thin_default", "thin_local0", "thin_local90"] if args.esc == "all" else [args.esc]
    results = {}
    for e in escs:
        try:
            M, V = build_and_run(sm, e)
            results[e] = (M, V)
        except Exception as ex:
            print(f"  [ERROR {e}] {ex}", flush=True)

    print(f"\n{'='*70}\n  COMPARACION ETABS\n{'='*70}")
    print(f"  {'Escenario':<25} {'M_max':>10} {'V_max':>10}")
    for e, (M, V) in results.items():
        print(f"  {e:<25} {M:>10.1f} {V:>10.1f}")
    print(f"\n  Hekatan Mode 0:               179.2     263.3")
    print(f"  SAP2000 (todos esc):          657.5     129.7")


if __name__ == "__main__":
    main()
