# -*- coding: utf-8 -*-
"""Tablero de puente — 3 vigas dobleT acero + losa concreto en ETABS v22+.

Hermano del sap2000_tablero_puente.py pero usando ETABS API:
  - ETABSv1.Helper (no SAP2000v1.Helper)
  - CSI.ETABS.API.ETABSObject (no SapObject)

Modos:
  0 = Naive: dobleT completa, eje al plano shell, DrillDOF default ETABS
  1 = Solar: alma + patin inferior (ala superior viene del shell)
  2 = Eccentric: dobleT + Joint Offset/Insertion Point (cardinal=8 Bottom)

USO:
  1) Abrir ETABS v22+ manualmente
  2) python etabs_tablero_puente.py [--mode 0|1|2]

Notas:
  - ETABS es building-oriented; modelamos como 1 story flat a Z=0
  - ETABS auto-crea caso MODAL; lo desactivamos con SetRunCaseFlag
  - SetSlab signature ETABS: (name, slabType=0, shellType=2 ShellThin, mat, t)
"""
import os
import sys
import time
import argparse
import comtypes.client


# === Datos modelo ===
L = 15.0; W = 6.0; T_S = 0.20; S_B = 2.0
BF = 0.20; TF = 0.015; HW = 0.55; TW = 0.010
Q_KNM2 = 15.0
E_C = 25e6;  NU_C = 0.20;  RHO_C = 24.0
E_S = 200e6; NU_S = 0.30;  RHO_S = 78.0
N_X = 20; N_Y = 12


def connect_etabs(launch_if_needed: bool = True):
    """Patron oficial ETABS — GetObject (existing) primero, luego launch.

    En ETABS el IPC suele cerrarse al lanzar nueva instancia (a diferencia
    de SAP2000). Recomendado: ABRIR ETABS manualmente antes de correr.
    """
    print("=" * 70)
    print("  CONEXION ETABS")
    print("=" * 70, flush=True)
    # FIX CRITICO (de validation/python-etabs-verificado/08_attach_existing_instance.py):
    #   En ETABS 22, helper.GetObject() retorna None aunque ETABS este abierto.
    #   comtypes.client.GetActiveObject SI funciona correctamente.
    print("[1/2] comtypes.client.GetActiveObject (no helper.GetObject) — hasta 10 intentos...", flush=True)
    for attempt in range(1, 11):
        try:
            etabs = comtypes.client.GetActiveObject("CSI.ETABS.API.ETABSObject")
            sm = etabs.SapModel
            _ = sm.GetModelIsLocked()
            print(f">>> [PATH 1] CONECTADO en intento {attempt} via GetActiveObject <<<", flush=True)
            return etabs, sm
        except Exception as e:
            print(f"       Intento {attempt}/10 fallo ({type(e).__name__}); esperando 3s...", flush=True)
            time.sleep(3)

    # Fallback: helper para CreateObjectProgID si todo falla
    helper = comtypes.client.CreateObject("ETABSv1.Helper")
    helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)

    if not launch_if_needed:
        raise RuntimeError(
            "\n" + "=" * 70 + "\n"
            "  ETABS NO esta corriendo.\n"
            "=" * 70 + "\n"
            "  Abrir ETABS v22 manualmente desde el menu inicio,\n"
            "  esperar a que cargue completamente,\n"
            "  y luego volver a correr este script.\n"
            "\n  (En ETABS, IPC se cierra si se lanza desde Python con\n"
            "   ApplicationStart, mas confiable abrirlo a mano.)\n"
            + "=" * 70
        )

    # Intento de launch (opcional, suele fallar por IPC)
    print("[2/2] Lanzando NUEVA instancia ETABS (puede fallar IPC)...", flush=True)
    etabs = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
    etabs.ApplicationStart()
    print("       Esperando 10s para arranque...", flush=True)
    time.sleep(10)
    print(">>> [PATH 2] LANZADA instancia NUEVA <<<", flush=True)
    return etabs, etabs.SapModel


def build_model(sm, mode: int):
    """Construye el tablero en ETABS."""
    print(f"\n--- BUILD MODO {mode} en ETABS ---", flush=True)

    # Reset + units
    sm.InitializeNewModel(6)  # kN, m, C
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
    print("[OK] Materiales: CONC24 + ACERO_A36", flush=True)

    # Seccion viga I
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

    # Shell losa via PropArea.SetSlab — ETABS:
    #   SetSlab(Name, SlabType=0=Slab, ShellType, Material, Thickness)
    #   ShellType: 1=ShellThin, 2=ShellThick, 3=Membrane
    # USAMOS 1 = ShellThin (Kirchhoff, sin transverse shear)
    sm.PropArea.SetSlab("LOSA20", 0, 1, "CONC24", T_S)
    print("[OK] Shell LOSA20 (ShellThin t=0.20)", flush=True)

    # Geometria
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

    # Areas via AddByCoord (mas confiable en ETABS — pasa coords directas)
    print(f"[..] Creando {N_X*N_Y} shells via AddByCoord...", flush=True)
    n_areas = 0
    for j in range(N_Y):
        for i in range(N_X):
            x = [i*dx, (i+1)*dx, (i+1)*dx, i*dx]
            y = [ys[j], ys[j], ys[j+1], ys[j+1]]
            z = [0.0, 0.0, 0.0, 0.0]
            sm.AreaObj.AddByCoord(4, x, y, z, "", "LOSA20")
            n_areas += 1
    print(f"[OK] {sm.AreaObj.Count()} areas", flush=True)

    # Frames (3 vigas) via AddByCoord
    print(f"[..] Creando {3*N_X} frames vigas via AddByCoord...", flush=True)
    for k, j_beam in enumerate(beam_rows):
        for i in range(N_X):
            sm.FrameObj.AddByCoord(
                float(i*dx), float(ys[j_beam]), 0.0,
                float((i+1)*dx), float(ys[j_beam]), 0.0,
                "", section, "", "Global",
            )
    print(f"[OK] {sm.FrameObj.Count()} frames", flush=True)

    # MODE 2: Insertion Point Bottom Center (cardinal=8) en TODOS los frames
    if mode == 2:
        print("[..] Aplicando InsertionPoint cardinal=8 a frames...", flush=True)
        ret = sm.FrameObj.GetNameList()
        n = ret[0]; names = ret[1]
        for fname in names:
            sm.FrameObj.SetInsertionPoint(
                fname, 8, False, True,
                [0.0]*3, [0.0]*3, "Local",
            )
        print(f"[OK] InsertionPoint en {n} frames", flush=True)

    # FIX CRITICO: ETABS aplica Pin AUTOMATICAMENTE a todos los joints en z=0
    # (porque caen en story "Base"). Hay que UNRESTRAINT todos primero.
    print("[..] Limpiando auto-restraints de Base story (273 joints)...", flush=True)
    ret = sm.PointObj.GetAllPoints()
    n_pts = ret[0]; names = ret[1]; px = ret[2]; py = ret[3]; pz = ret[4]
    for i in range(n_pts):
        sm.PointObj.SetRestraint(names[i], [False, False, False, False, False, False])
    print(f"[OK] Auto-restraint removido de {n_pts} joints", flush=True)

    # Apoyos correctos: pin-roller en extremos viga
    print("[..] Aplicando 6 apoyos pin-roller en extremos viga...", flush=True)
    apoyos = []
    for i in range(n_pts):
        if abs(pz[i]) > 1e-3: continue
        is_left  = abs(px[i]) < 1e-3
        is_right = abs(px[i] - L) < 1e-3
        if not (is_left or is_right): continue
        match_y = False
        for jb in beam_rows:
            if abs(py[i] - ys[jb]) < 1e-3:
                match_y = True; break
        if not match_y: continue
        dof = [True, True, True, False, False, False] if is_left else [False, True, True, False, False, False]
        sm.PointObj.SetRestraint(names[i], dof)
        apoyos.append((names[i], px[i], py[i], dof))
    # Verificar — ETABS devuelve list/tuple, ambos OK
    n_real = 0
    for jname, _, _, _ in apoyos:
        try:
            ret_get = sm.PointObj.GetRestraint(jname, [False]*6)
            dof_tup = ret_get[0]
            if any(dof_tup):
                n_real += 1
        except Exception as e:
            print(f"  [warn] GetRestraint({jname}): {e}", flush=True)
    print(f"[OK] Apoyos: {len(apoyos)} aplicados, {n_real} confirmados", flush=True)

    # Load pattern DEAD (con SW=0)
    sm.LoadPatterns.SetSelfWTMultiplier("Dead", 0)
    print("[OK] DEAD self-weight = 0", flush=True)

    # Carga uniforme en todas las areas — value POSITIVO con Dir=Gravity (10) = abajo
    print(f"[..] Aplicando q={Q_KNM2} kN/m2 hacia ABAJO...", flush=True)
    ret = sm.AreaObj.GetNameList()
    n_a = ret[0]; a_names = ret[1]
    for a in a_names:
        sm.AreaObj.SetLoadUniform(a, "Dead", Q_KNM2, 10, True, "Global", 0)
    print(f"[OK] {n_a} shells cargados", flush=True)

    return beam_rows


def run_and_extract(sm, beam_rows):
    """Save, RunAnalysis (solo DEAD, sin MODAL), extract M, V, delta."""
    # Disable MODAL
    try: sm.Analyze.SetRunCaseFlag("Modal", False)
    except Exception: pass
    try: sm.Analyze.SetRunCaseFlag("MODAL", False)
    except Exception: pass

    # Save
    sdb = os.path.expanduser(rf"~\Documents\HekatanSapTest\tablero_puente_etabs.edb")
    os.makedirs(os.path.dirname(sdb), exist_ok=True)
    ret_save = sm.File.Save(sdb)
    print(f"[OK] Save: ret={ret_save}", flush=True)

    # Run
    print("[..] RunAnalysis...", flush=True)
    ret = sm.Analyze.RunAnalysis()
    print(f"[OK] RunAnalysis ret={ret}", flush=True)
    time.sleep(2)

    # Setup output — listar casos ANTES de seleccionar (ETABS puede usar nombre distinto)
    try:
        cases = sm.LoadCases.GetNameList()
        n_cases = cases[0]; case_names = cases[1]
        print(f"[..] Load cases disponibles: {[case_names[i] for i in range(n_cases)]}", flush=True)
    except Exception as e:
        print(f"  [warn] GetNameList LoadCases: {e}", flush=True)

    sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
    # Probar varios nombres comunes
    for case_name in ["Dead", "Dead", "dead"]:
        try:
            ret = sm.Results.Setup.SetCaseSelectedForOutput(case_name)
            print(f"[OK] Case '{case_name}' seleccionado (ret={ret})", flush=True)
            break
        except Exception:
            continue

    # ETABS asigna nombres "1", "2", ..., "60" secuencialmente al usar AddByCoord.
    # Las 3 vigas centrales: 1-20 (Y=1), 21-40 (Y=3), 41-60 (Y=5).
    # Saltamos GetNameList (causa access violation) y usamos IDs directos.
    M_max, V_max = 0.0, 0.0
    n_central = 0
    for fid in range(N_X + 1, 2 * N_X + 1):  # 21-40 = viga central
        try:
            ff = sm.Results.FrameForce(str(fid), 0)
            if ff[0] > 0:
                n_central += 1
                for k in range(ff[0]):
                    M = abs(ff[13][k]); V = abs(ff[9][k])
                    if M > M_max: M_max = M
                    if V > V_max: V_max = V
        except Exception as e:
            print(f"  [warn] Frame {fid}: {e}", flush=True)
    print(f"[..] Frames viga central leidos: {n_central}", flush=True)

    # Deflexion midspan viga central — buscar joint por GetCoordCartesian
    # El joint del medio de la viga central esta en x=L/2, y=W/2.
    # ETABS asigna joints secuencialmente al crear areas — buscar entre los IDs.
    delta_mm = 0.0
    L_mid = L / 2
    yc = W / 2
    # Probar IDs 1-300 (sabemos hay 273 nodos)
    for jid in range(1, 350):
        try:
            cc = sm.PointObj.GetCoordCartesian(str(jid), 0.0, 0.0, 0.0)
            if isinstance(cc, tuple):
                # cc puede ser (x, y, z, ret) o variaciones
                x = cc[0] if len(cc) >= 1 else 0
                y = cc[1] if len(cc) >= 2 else 0
                z = cc[2] if len(cc) >= 3 else 0
                if abs(z) < 1e-3 and abs(x - L_mid) < 0.01 and abs(y - yc) < 0.01:
                    disp = sm.Results.JointDispl(str(jid), 0)
                    if disp[0] > 0:
                        delta_mm = abs(disp[8][0] * 1000)
                        print(f"[..] Midspan joint={jid} (x={x:.2f}, y={y:.2f}) Uz={disp[8][0]:.6f} m", flush=True)
                    break
        except Exception:
            continue

    return M_max, V_max, delta_mm


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--mode", type=int, default=0, choices=[0, 1, 2])
    args = parser.parse_args()

    # launch_if_needed=False obliga a que ETABS este abierto antes
    # (en ETABS, lanzar via Python tiende a fallar IPC).
    etabs, sm = connect_etabs(launch_if_needed=False)

    print(f"\n{'='*70}\n  MODO {args.mode}\n{'='*70}", flush=True)
    beam_rows = build_model(sm, args.mode)
    M, V, d = run_and_extract(sm, beam_rows)

    ref_hekatan = {0: (179.2, 263.3, 25.58), 1: (167.6, 273.3, 31.56), 2: (336.4, 233.7, 15.32)}
    ref_sap     = {0: (657.5, 129.7, 125.45), 1: (None, None, None),   2: (None, None, None)}
    Mh, Vh, dh = ref_hekatan[args.mode]
    print(f"\n  ====== RESULTADOS MODO {args.mode} (ETABS) ======")
    print(f"  M_max  ETABS={M:>8.1f} kN.m   Hekatan={Mh:>8.1f}   dif Hek={(M-Mh)/Mh*100 if Mh else 0:+.1f}%")
    print(f"  V_max  ETABS={V:>8.1f} kN     Hekatan={Vh:>8.1f}   dif Hek={(V-Vh)/Vh*100 if Vh else 0:+.1f}%")
    print(f"  delta  ETABS={d:>8.2f} mm     Hekatan={dh:>8.2f}   dif Hek={(d-dh)/dh*100 if dh else 0:+.1f}%")
    if ref_sap[args.mode][0] is not None:
        Ms, Vs, ds = ref_sap[args.mode]
        print(f"\n  vs SAP2000 (Modo {args.mode}): M={Ms} V={Vs} d={ds}")


if __name__ == "__main__":
    main()
