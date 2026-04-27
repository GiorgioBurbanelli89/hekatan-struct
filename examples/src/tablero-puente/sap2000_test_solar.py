"""
SAP2000 OAPI — Tablero de puente (3 vigas dobleT acero + losa concreto).

Reproduce el modelo de tablero-puente Hekatan en SAP2000 vía API Python para
validar los 3 modos de vinculación viga-losa que recomienda Gustavo Solar.

REQUISITOS:
  - Windows con SAP2000 v23+ instalado
  - Python 3.8+
  - pip install comtypes pywin32

USO:
  python sap2000_test_solar.py [--mode 0|1|2] [--show]

  --mode 0 = Naive (doble-T completa, eje al plano medio del shell)
  --mode 1 = Solar (alma + patín inferior, ala superior viene del shell)
  --mode 2 = Eccentric (Insertion Point Bottom Center, offset rigid link)
  --show   = abre SAP visible (sino corre headless)

  Sin --mode: corre los 3 modos secuencialmente y compara resultados.

OUTPUT esperado (debe coincidir con Hekatan tablero-puente):
  Mode 0: M ≈ 179 kN·m, δ ≈ 25 mm
  Mode 1: M ≈ 168 kN·m, δ ≈ 32 mm
  Mode 2: M ≈ 336 kN·m, δ ≈ 15 mm
"""

import os
import sys
import argparse
import comtypes.client


# ── Parámetros del modelo (mismos que Hekatan tablero-puente) ──────────────
L = 15.0      # m, luz
W = 6.0       # m, ancho
T_S = 0.20    # m, espesor losa
S_B = 2.0     # m, spacing entre vigas
BF = 0.20     # m, ancho patín
TF = 0.015    # m, espesor patín
HW = 0.55     # m, altura alma
TW = 0.010    # m, espesor alma
Q_KNM2 = 15.0  # kN/m², carga distribuida en losa

# Materiales
E_C_KN_M2  = 25e6     # concreto (kN/m²)
NU_C       = 0.20
RHO_C      = 24.0     # kN/m³

E_S_KN_M2  = 200e6    # acero (kN/m²)
NU_S       = 0.30
RHO_S      = 78.0     # kN/m³ (7.85 t/m³)

# Mesh
N_X = 20  # divisiones longitudinales de la losa
N_Y = 12


def attach_sap2000(visible: bool = False):
    """Conecta a una instancia de SAP2000 ya abierta, o lanza una nueva."""
    helper = comtypes.client.CreateObject("SAP2000v1.Helper")
    helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
    try:
        # Intentar conectar a una instancia ya abierta
        sap_obj = helper.GetObject("CSI.SAP2000.API.SapObject")
    except Exception:
        # Lanzar nueva instancia
        sap_path = r"C:\Program Files\Computers and Structures\SAP2000 23\SAP2000.exe"
        if not os.path.exists(sap_path):
            # Probar otras versiones comunes
            for v in [25, 24, 22, 21]:
                p = rf"C:\Program Files\Computers and Structures\SAP2000 {v}\SAP2000.exe"
                if os.path.exists(p):
                    sap_path = p; break
        sap_obj = helper.CreateObject(sap_path)
    sap_obj.ApplicationStart()
    sap_obj.SapModel.InitializeNewModel()
    sap_obj.SapModel.File.NewBlank()
    if visible:
        sap_obj.Hide()  # ya esta visible por default
    return sap_obj, sap_obj.SapModel


def setup_units_and_materials(sap_model):
    """Setea unidades kN, m, C y define materiales concreto + acero."""
    # Units: 6 = kN, m, C
    sap_model.SetPresentUnits(6)

    # Concreto (tipo 2 = CONCRETE, segun cMatType)
    sap_model.PropMaterial.SetMaterial("CONC24", 2)  # nombre, tipo
    sap_model.PropMaterial.SetMPIsotropic("CONC24", E_C_KN_M2, NU_C, 1e-5)
    sap_model.PropMaterial.SetWeightAndMass("CONC24", 1, RHO_C)  # 1=Weight per volume

    # Acero (tipo 1 = STEEL)
    sap_model.PropMaterial.SetMaterial("ACERO_A36", 1)
    sap_model.PropMaterial.SetMPIsotropic("ACERO_A36", E_S_KN_M2, NU_S, 1.2e-5)
    sap_model.PropMaterial.SetWeightAndMass("ACERO_A36", 1, RHO_S)


def define_sections(sap_model, mode: int):
    """Define la sección de la viga según el modo (Solar)."""
    if mode == 1:
        # Mode Solar: solo alma + patín inferior
        # Construimos una sección "T" invertida (el alma sube, sin ala superior)
        # SAP soporta seccion T (PropFrame.SetTee). Pero como queremos el patín
        # ABAJO, usamos rotation en el insertion point. Por simplicidad usamos
        # un I asimétrico con bf_top muy pequeño (~0.001 m).
        sap_model.PropFrame.SetISection(
            "VIGA_SOLAR", "ACERO_A36",
            HW + 2 * TF,   # h (depth total)
            0.001, 0.001,  # bf_top, tf_top  (casi nulo = sin ala superior)
            TW,            # tw (web)
            BF, TF,        # bf_bot, tf_bot
        )
    elif mode == 2:
        # Mode Eccentric: doble-T completa, offset via insertion point
        sap_model.PropFrame.SetISection(
            "VIGA_FULL", "ACERO_A36",
            HW + 2 * TF, BF, TF, TW, BF, TF,
        )
    else:
        # Mode 0 Naive: doble-T completa, eje en plano medio (sin offset)
        sap_model.PropFrame.SetISection(
            "VIGA_FULL", "ACERO_A36",
            HW + 2 * TF, BF, TF, TW, BF, TF,
        )

    # Slab shell (concrete)
    sap_model.PropArea.SetSlab(
        "LOSA20", 0, 1, "CONC24", T_S,  # type=Slab, modeling=ShellThin
    )


def build_model(sap_model, mode: int):
    """Construye geometría: losa shell + 3 vigas frame + apoyos + carga."""
    dx = L / N_X
    dy = W / N_Y

    # ── NODOS ─────────────────────────────────────────────────────────────
    # Grid (N_X+1) × (N_Y+1) en plano XY, z=0 = plano medio del shell
    point_names: list[list[str]] = []
    y_beams = [W/2 - S_B, W/2, W/2 + S_B]
    # Asegurar que la malla pase por las y de las vigas
    ys = [j * dy for j in range(N_Y + 1)]
    beam_rows: list[int] = []
    for yB in y_beams:
        best_j, dmin = 0, 1e9
        for j in range(N_Y + 1):
            d = abs(ys[j] - yB)
            if d < dmin:
                dmin, best_j = d, j
        ys[best_j] = yB
        beam_rows.append(best_j)

    for j in range(N_Y + 1):
        row: list[str] = []
        for i in range(N_X + 1):
            name = ""
            ret = sap_model.PointObj.AddCartesian(i * dx, ys[j], 0.0, name)
            # AddCartesian retorna (assigned_name, status) en algunas versiones
            row.append(ret[0] if isinstance(ret, tuple) else f"P{i}_{j}")
        point_names.append(row)

    # ── LOSA SHELL ────────────────────────────────────────────────────────
    for j in range(N_Y):
        for i in range(N_X):
            pts = [
                point_names[j][i],
                point_names[j][i+1],
                point_names[j+1][i+1],
                point_names[j+1][i],
            ]
            sap_model.AreaObj.AddByPoint(4, pts, "", "LOSA20")

    # ── VIGAS FRAME (3 longitudinales) ────────────────────────────────────
    section = "VIGA_SOLAR" if mode == 1 else "VIGA_FULL"
    beam_frame_names: list[list[str]] = [[] for _ in range(3)]
    for k, j_beam in enumerate(beam_rows):
        for i in range(N_X):
            p1 = point_names[j_beam][i]
            p2 = point_names[j_beam][i + 1]
            ret = sap_model.FrameObj.AddByPoint(p1, p2, "", section)
            fname = ret[0] if isinstance(ret, tuple) else f"B{k}_{i}"
            beam_frame_names[k].append(fname)
            # MODE 2 ECCENTRIC: insertion point Bottom Center con cardenal 8
            # (= cardinal 8 = Bottom Center). SAP aplica offset al centroide
            # automaticamente.
            if mode == 2:
                # SetInsertionPoint(name, cardinal_pt, mirror2, stiff_transform,
                #                    offset1[3], offset2[3], cSys)
                cardinal = 8  # Bottom Center
                sap_model.FrameObj.SetInsertionPoint(
                    fname, cardinal, False, True,
                    [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], "Local",
                )

    # ── APOYOS (pin-roller en extremos de cada viga) ─────────────────────
    for j_beam in beam_rows:
        # Extremo izquierdo (i=0): pin (Ux, Uy, Uz restringidos)
        sap_model.PointObj.SetRestraint(point_names[j_beam][0],
                                         [True, True, True, False, False, False])
        # Extremo derecho (i=N_X): roller (Uy, Uz; Ux libre para dilatación)
        sap_model.PointObj.SetRestraint(point_names[j_beam][N_X],
                                         [False, True, True, False, False, False])

    # ── CARGA: presión uniforme q_kn_m2 sobre TODA la losa ───────────────
    # Crear load pattern "DEAD" (auto si no existe) y asignar carga al area
    # type=8 = Pressure (load uniform)
    # Loop por todos los area objs para cargarlos
    for j in range(N_Y):
        for i in range(N_X):
            area_name = f"{1 + j * N_X + i}"  # SAP nombra 1, 2, 3, ...
            try:
                sap_model.AreaObj.SetLoadUniform(
                    area_name, "DEAD",
                    -Q_KNM2,       # value (negativo = -Z)
                    10,            # direction: 10 = Gravity (-Z global)
                    True, "Global",
                )
            except Exception:
                pass  # algunos areas pueden tener nombres diferentes

    return point_names, beam_frame_names, beam_rows


def run_analysis(sap_model, save_path: str):
    """Guarda y corre análisis estático."""
    sap_model.File.Save(save_path)
    sap_model.Analyze.SetRunCaseFlag("DEAD", True)
    sap_model.Analyze.RunAnalysis()


def extract_results(sap_model, beam_frame_names, point_names, beam_rows):
    """Extrae M_max, V_max y deflección midspan de la viga central."""
    # Configurar load case Output: solo DEAD
    sap_model.Results.Setup.DeselectAllCasesAndCombosForOutput()
    sap_model.Results.Setup.SetCaseSelectedForOutput("DEAD")

    central = beam_frame_names[1]  # viga del medio (3 vigas: 0, 1, 2)
    M_max, V_max = 0.0, 0.0
    for fname in central:
        # FrameForce: NumberResults, Obj, ObjSta, Elm, ElmSta, LoadCase, StepType, StepNum,
        #             P, V2, V3, T, M2, M3
        ret = sap_model.Results.FrameForce(fname, 0)
        # Returns: [NumberResults, Obj, ObjSta, Elm, ElmSta, LoadCase, StepType,
        #           StepNum, P, V2, V3, T, M2, M3, ret_status]
        n = ret[0]
        for i in range(n):
            M = abs(ret[13][i])  # M3 (about local 3 axis = mayor flexion)
            V = abs(ret[9][i])   # V2
            if M > M_max: M_max = M
            if V > V_max: V_max = V

    # Deflección midspan en viga central
    j_central = beam_rows[1]
    p_mid = point_names[j_central][N_X // 2]
    ret = sap_model.Results.JointDispl(p_mid, 0)
    # Returns: [NumberResults, Obj, Elm, LoadCase, StepType, StepNum,
    #          U1, U2, U3, R1, R2, R3, status]
    Uz = ret[8][0]  # U3 = vertical
    delta_mm = abs(Uz * 1000.0)

    return M_max, V_max, delta_mm


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--mode", type=int, default=None, choices=[0, 1, 2])
    parser.add_argument("--show", action="store_true")
    parser.add_argument("--out", type=str, default=os.path.expanduser("~/Documents"))
    args = parser.parse_args()

    modes_to_run = [args.mode] if args.mode is not None else [0, 1, 2]
    mode_names = {
        0: "Naive (full T, sin offset)",
        1: "Solar (alma+patin inf)",
        2: "Eccentric (Insertion Point Bottom)",
    }

    results = {}
    for mode in modes_to_run:
        print(f"\n{'='*70}\n  MODO {mode}: {mode_names[mode]}\n{'='*70}")
        sap_obj, sap_model = attach_sap2000(visible=args.show)
        try:
            setup_units_and_materials(sap_model)
            define_sections(sap_model, mode)
            point_names, beam_frame_names, beam_rows = build_model(sap_model, mode)
            sdb_path = os.path.join(args.out, f"tablero_puente_mode{mode}.sdb")
            run_analysis(sap_model, sdb_path)
            M, V, delta = extract_results(sap_model, beam_frame_names, point_names, beam_rows)
            results[mode] = (M, V, delta)
            print(f"  M_max  = {M:>8.1f} kN.m")
            print(f"  V_max  = {V:>8.1f} kN")
            print(f"  delta  = {delta:>8.2f} mm")
            print(f"  Modelo guardado en: {sdb_path}")
        finally:
            if not args.show:
                sap_obj.ApplicationExit(False)

    # Comparación final
    if len(results) > 1:
        print(f"\n{'='*70}\n  COMPARACION SAP2000 vs Hekatan tablero-puente\n{'='*70}")
        print(f"  {'Modo':<35} {'M_sap':>10} {'V_sap':>10} {'delta_sap':>12}")
        ref_hekatan = {
            0: (179.2, 263.3, 25.58),
            1: (167.6, 273.3, 31.56),
            2: (336.4, 233.7, 15.32),
        }
        for mode, (M, V, d) in results.items():
            print(f"  {mode_names[mode]:<35} {M:>10.1f} {V:>10.1f} {d:>12.2f}")
            Mh, Vh, dh = ref_hekatan[mode]
            err_M = (M - Mh) / Mh * 100 if Mh else 0
            err_d = (d - dh) / dh * 100 if dh else 0
            print(f"    {' '*33} Hekatan: M={Mh:.1f} dif={err_M:+.1f}%, "
                  f"d={dh:.2f} dif={err_d:+.1f}%")


if __name__ == "__main__":
    main()
