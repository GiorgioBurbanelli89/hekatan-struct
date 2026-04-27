# -*- coding: utf-8 -*-
"""Tablero con VIGAS PRINCIPALES (longitudinales) + SECUNDARIAS (transversales).

Modelo:
  Lx = 15 m, Ly = 8 m, t_losa = 0.20 m
  3 vigas PRINCIPALES a Y = 1, 4, 7 m (separadas 3 m, longitud 15 m, paralelas X)
  4 vigas SECUNDARIAS intermedias a X = 3, 6, 9, 12 m (longitud 8 m, paralelas Y)
                                                       (transversales que conectan las pp)
  Apoyos pin-roller: SOLO en extremos de las 3 vigas principales (X=0 y X=15)
  Carga: q = 15 kN/m2 sobre toda la losa

Comparar resultados:
  SAP2000 (Mode 0) — sin offset, ambas secciones doble-T completas
  Hekatan: a comparar despues
"""
import os, sys, time, comtypes.client

# ── Geometria ──
Lx = 15.0; Ly = 8.0; T_S = 0.20
Y_PRINC = [1.0, 4.0, 7.0]      # 3 vigas principales (Y)
X_SEC   = [3.0, 6.0, 9.0, 12.0] # 4 vigas secundarias (X)

# Secciones
BF_P = 0.20; TF_P = 0.020; HW_P = 0.55; TW_P = 0.012   # Viga principal grande
BF_S = 0.15; TF_S = 0.012; HW_S = 0.30; TW_S = 0.008   # Viga secundaria mas chica

# Mesh shells
N_X = 30; N_Y = 16
Q_KNM2 = 15.0

# Materiales
E_C = 25e6; NU_C = 0.20; RHO_C = 24.0
E_S = 200e6; NU_S = 0.30; RHO_S = 78.0


def connect_sap():
    helper = comtypes.client.CreateObject("SAP2000v1.Helper")
    helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
    print("[OK] Helper SAP", flush=True)
    try:
        sap = comtypes.client.GetActiveObject("CSI.SAP2000.API.SapObject")
        _ = sap.SapModel.GetModelIsLocked()
        print(">>> [PATH 1] CONECTADO a instancia ACTIVA <<<", flush=True)
        return sap, sap.SapModel
    except Exception:
        pass
    print("[..] Lanzando nueva instancia SAP2000...", flush=True)
    sap = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
    ret = sap.ApplicationStart(6, True)
    if ret != 0:
        print(f"ERROR ApplicationStart {ret}", flush=True); sys.exit(1)
    time.sleep(8)
    print(">>> [PATH 2] LANZADA instancia NUEVA <<<", flush=True)
    return sap, sap.SapModel


def main():
    sap, sm = connect_sap()
    sm.InitializeNewModel(6)
    sm.File.NewBlank()
    sm.SetPresentUnits(6)
    print("[OK] Modelo init kN-m-C", flush=True)

    # Materiales
    sm.PropMaterial.SetMaterial("CONC24", 2)
    sm.PropMaterial.SetMPIsotropic("CONC24", E_C, NU_C, 1e-5)
    sm.PropMaterial.SetWeightAndMass("CONC24", 1, RHO_C)

    sm.PropMaterial.SetMaterial("ACERO_A36", 1)
    sm.PropMaterial.SetMPIsotropic("ACERO_A36", E_S, NU_S, 1.2e-5)
    sm.PropMaterial.SetWeightAndMass("ACERO_A36", 1, RHO_S)

    # Secciones I — 2 distintas
    sm.PropFrame.SetISection("VIGA_PP", "ACERO_A36",
        HW_P + 2*TF_P, BF_P, TF_P, TW_P, BF_P, TF_P)
    sm.PropFrame.SetISection("VIGA_SEC", "ACERO_A36",
        HW_S + 2*TF_S, BF_S, TF_S, TW_S, BF_S, TF_S)
    sm.PropArea.SetShell_1("LOSA20", 1, False, "CONC24", 0.0, T_S, T_S)
    print("[OK] Materiales + secciones (VIGA_PP, VIGA_SEC, LOSA20)", flush=True)

    # Mesh: incluir Y de vigas principales y X de vigas secundarias en la grilla
    dx = Lx / N_X
    dy = Ly / N_Y
    xs = sorted(set(round(i * dx, 4) for i in range(N_X + 1)) | set(X_SEC))
    ys = sorted(set(round(j * dy, 4) for j in range(N_Y + 1)) | set(Y_PRINC))
    NX_eff = len(xs) - 1
    NY_eff = len(ys) - 1

    # Nodos
    print(f"[..] Creando {(NX_eff+1)*(NY_eff+1)} nodos...", flush=True)
    point_names = []
    nid = 1
    for j, y in enumerate(ys):
        row = []
        for i, x in enumerate(xs):
            sm.PointObj.AddCartesian(float(x), float(y), 0.0, str(nid))
            row.append(str(nid))
            nid += 1
        point_names.append(row)
    print(f"[OK] {sm.PointObj.Count()} nodos", flush=True)

    # Areas
    print(f"[..] Creando {NX_eff*NY_eff} shells...", flush=True)
    aid = 1
    for j in range(NY_eff):
        for i in range(NX_eff):
            pts = [point_names[j][i], point_names[j][i+1],
                   point_names[j+1][i+1], point_names[j+1][i]]
            sm.AreaObj.AddByPoint(4, pts, str(aid), "LOSA20")
            aid += 1
    print(f"[OK] {sm.AreaObj.Count()} areas", flush=True)

    # Vigas PRINCIPALES (longitudinales, paralelas X)
    print(f"[..] Creando {len(Y_PRINC)} vigas principales (X-direction)...", flush=True)
    pp_frames = []
    for yp in Y_PRINC:
        # Encontrar fila correspondiente
        j_row = ys.index(yp)
        for i in range(NX_eff):
            pi = point_names[j_row][i]; pj = point_names[j_row][i+1]
            ret = sm.FrameObj.AddByPoint(pi, pj, "", "VIGA_PP", "")
            pp_frames.append(ret[0] if isinstance(ret, tuple) else "")
    print(f"[OK] {len(pp_frames)} segmentos de vigas principales", flush=True)

    # Vigas SECUNDARIAS (transversales, paralelas Y)
    print(f"[..] Creando {len(X_SEC)} vigas secundarias (Y-direction)...", flush=True)
    sec_frames = []
    for xs_pos in X_SEC:
        i_col = xs.index(xs_pos)
        for j in range(NY_eff):
            pi = point_names[j][i_col]; pj = point_names[j+1][i_col]
            ret = sm.FrameObj.AddByPoint(pi, pj, "", "VIGA_SEC", "")
            sec_frames.append(ret[0] if isinstance(ret, tuple) else "")
    print(f"[OK] {len(sec_frames)} segmentos de vigas secundarias", flush=True)
    print(f"[OK] Total frames: {sm.FrameObj.Count()}", flush=True)

    # Apoyos: pin-roller en extremos de vigas PRINCIPALES (no secundarias)
    print("[..] Aplicando apoyos pin-roller en extremos vigas principales...", flush=True)
    for yp in Y_PRINC:
        j_row = ys.index(yp)
        sm.PointObj.SetRestraint(point_names[j_row][0],
            [True, True, True, False, False, False])  # pin x=0
        sm.PointObj.SetRestraint(point_names[j_row][NX_eff],
            [False, True, True, False, False, False])  # roller x=Lx
    print(f"[OK] {len(Y_PRINC)*2} apoyos", flush=True)

    # Carga uniforme +15 (Dir=Gravity = down)
    sm.LoadPatterns.SetSelfWTMultiplier("DEAD", 0)
    print(f"[..] Aplicando q={Q_KNM2} kN/m2 sobre todas las shells...", flush=True)
    for ai in range(1, NX_eff*NY_eff + 1):
        try:
            sm.AreaObj.SetLoadUniform(str(ai), "DEAD", Q_KNM2, 10, True, "Global")
        except Exception:
            pass
    print(f"[OK] Carga aplicada", flush=True)

    # Save + Run
    try: sm.Analyze.SetRunCaseFlag("MODAL", False)
    except: pass
    sdb = os.path.expanduser(rf"~\Documents\HekatanSapTest\tablero_pp_sec.sdb")
    os.makedirs(os.path.dirname(sdb), exist_ok=True)
    sm.File.Save(sdb)
    print(f"[OK] Save: {sdb}", flush=True)
    print("[..] RunAnalysis...", flush=True)
    ret = sm.Analyze.RunAnalysis()
    print(f"[OK] RunAnalysis ret={ret}", flush=True)
    time.sleep(2)

    # Resultados
    sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
    sm.Results.Setup.SetCaseSelectedForOutput("DEAD")

    # M_max y V_max en viga PRINCIPAL CENTRAL (Y=4, segunda viga)
    M_pp_max, V_pp_max = 0.0, 0.0
    n_pp_per_beam = NX_eff
    for fid in range(n_pp_per_beam + 1, 2*n_pp_per_beam + 1):
        try:
            ff = sm.Results.FrameForce(str(fid), 0)
            if ff[0] > 0:
                for k in range(ff[0]):
                    M = abs(ff[13][k]); V = abs(ff[9][k])
                    if M > M_pp_max: M_pp_max = M
                    if V > V_pp_max: V_pp_max = V
        except: pass

    # M_max en viga SECUNDARIA central (X=6 segunda secundaria)
    M_sec_max, V_sec_max = 0.0, 0.0
    n_pp_total = len(Y_PRINC) * NX_eff
    n_sec_per_beam = NY_eff
    sec_central_start = n_pp_total + n_sec_per_beam + 1  # 2da secundaria
    for fid in range(sec_central_start, sec_central_start + n_sec_per_beam):
        try:
            ff = sm.Results.FrameForce(str(fid), 0)
            if ff[0] > 0:
                for k in range(ff[0]):
                    M = abs(ff[13][k]); V = abs(ff[9][k])
                    if M > M_sec_max: M_sec_max = M
                    if V > V_sec_max: V_sec_max = V
        except: pass

    # Deflexion midspan viga principal central
    j_mid = ys.index(4.0)  # Y central
    i_mid = NX_eff // 2
    p_mid = point_names[j_mid][i_mid]
    disp = sm.Results.JointDispl(p_mid, 0)
    delta_mm = abs(disp[8][0] * 1000.0) if disp[0] > 0 else 0.0

    print(f"\n{'='*70}\n  RESULTADOS — Tablero con vigas PP + SEC\n{'='*70}")
    print(f"  Viga PRINCIPAL central (Y=4):  M_max={M_pp_max:>8.1f} kN.m,  V={V_pp_max:>7.1f} kN")
    print(f"  Viga SECUNDARIA central (X=6): M_max={M_sec_max:>8.1f} kN.m,  V={V_sec_max:>7.1f} kN")
    print(f"  Deflexion midspan principal:    delta={delta_mm:>7.2f} mm")
    print(f"\n  Carga total = {Q_KNM2} x {Lx*Ly} = {Q_KNM2*Lx*Ly:.0f} kN")


if __name__ == "__main__":
    main()
