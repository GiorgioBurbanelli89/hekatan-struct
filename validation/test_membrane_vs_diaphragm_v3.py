# -*- coding: utf-8 -*-
"""
Comparación Membrane vs Diaphragm Flexible vs Rigid Diaphragm — ETABS 22 API.
Sigue el patrón EXACTO del ejemplo oficial CSI (AttachToInstance=False, lanza
nueva instancia, construye modelo, corre, lee resultados, cierra).

Edificio 3×3 vanos × 3 pisos, hormigón f'c=210 kg/cm², losa 0.15m, cols 40×40,
vigas 30×40. Mismo modelo en los 3 casos, solo cambia la losa:
  - membrane:        SetSlab(ShellType=3, Membrane)
  - flex_diaphragm:  SetSlab(ShellType=1, Shell-Thin) + SetDiaphragm(SemiRigid=True)
  - rigid_diaphragm: SetSlab(ShellType=1, Shell-Thin) + SetDiaphragm(SemiRigid=False)
"""
import os, sys, time, json
import comtypes.client
import numpy as np

# Force UTF-8 stdout (Python 3.7+)
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

# ── Parámetros del modelo (mismos para los 3 casos) ──────────────────────
N_VANOS_X = 2     # 2 vanos = 3 columnas
N_VANOS_Y = 2     # 2 vanos = 3 columnas
DX = 5.0          # m (vano)
DY = 5.0          # m
H_PISO = 3.0      # m
N_PISOS = 3
FC_KGCM2 = 210
LOSA_E = 0.15
COL_B, COL_H = 0.40, 0.40
VIG_B, VIG_H = 0.30, 0.40

# Material: f'c=210 → E ≈ 218820 kgf/cm² ≈ 21459 MPa (ACI 318-22 §19.2.2)
E_KGFCM2 = 15100.0 * np.sqrt(FC_KGCM2)
E_TONFM2 = E_KGFCM2 * 10                  # 1 kgf/cm² = 10 tonf/m²
NU = 0.2
RHO_TONFM3 = 2.4                          # 2400 kgf/m³ → 2.4 tonf/m³

OUT_DIR = os.path.dirname(os.path.abspath(__file__))


# ── Conexión ETABS según ejemplo oficial CSI ─────────────────────────────
def launch_etabs():
    helper = comtypes.client.CreateObject('ETABSv1.Helper')
    helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
    try:
        myETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
    except (OSError, comtypes.COMError) as e:
        print(f"[ERROR] CreateObjectProgID falló: {e}")
        sys.exit(-1)
    myETABSObject.ApplicationStart()
    print("[OK] ETABS lanzado")
    SapModel = myETABSObject.SapModel
    return myETABSObject, SapModel


# ── Construcción del modelo ─────────────────────────────────────────────
def build_and_run(SapModel, slab_mode):
    print(f"\n=== {slab_mode.upper()} ===")
    # Inicializar modelo
    SapModel.InitializeNewModel()
    SapModel.File.NewBlank()
    SapModel.SetPresentUnits(6)  # 6 = tonf, m, C

    # Material concreto
    MATERIAL_CONCRETE = 2
    SapModel.PropMaterial.SetMaterial("CONC", MATERIAL_CONCRETE)
    SapModel.PropMaterial.SetMPIsotropic("CONC", E_TONFM2, NU, 1e-5)
    SapModel.PropMaterial.SetWeightAndMass("CONC", 1, RHO_TONFM3)

    # Secciones frame
    SapModel.PropFrame.SetRectangle("COL", "CONC", COL_H, COL_B)
    SapModel.PropFrame.SetRectangle("VIG", "CONC", VIG_H, VIG_B)

    # Sección losa: ShellType varía según slab_mode
    # SlabType: 0=Slab
    # ShellType: 1=ShellThin, 2=ShellThick, 3=Membrane, 4=Plate
    if slab_mode == "membrane":
        shell_type = 3
    else:
        shell_type = 1
    SapModel.PropArea.SetSlab("LOSA", 0, shell_type, "CONC", LOSA_E)

    # Diafragma — TODOS los casos llevan diaphragm asignado para estabilizar
    # el modal. Sin diaphragm, los modos rígidos in-plane causan errores.
    if slab_mode == "rigid_diaphragm":
        SapModel.Diaphragm.SetDiaphragm("D1", False)  # Rigid
    else:
        # membrane y flex_diaphragm: Semi-Rigid (preserva rigidez real del shell/membrane)
        SapModel.Diaphragm.SetDiaphragm("D1", True)   # Semi-Rigid

    # Crear puntos
    pts = {}
    pid = 0
    for ip in range(N_PISOS + 1):
        for iy in range(N_VANOS_Y + 1):
            for ix in range(N_VANOS_X + 1):
                x, y, z = ix * DX, iy * DY, ip * H_PISO
                name = f"P{pid}"
                placeholder = ""
                ret = SapModel.PointObj.AddCartesian(x, y, z, placeholder, name)
                # ret es tupla; el primer elemento es el nombre devuelto
                actual_name = ret[0] if isinstance(ret, tuple) else name
                pts[(ix, iy, ip)] = actual_name
                pid += 1

    # Columnas
    for ip in range(N_PISOS):
        for iy in range(N_VANOS_Y + 1):
            for ix in range(N_VANOS_X + 1):
                p1 = pts[(ix, iy, ip)]
                p2 = pts[(ix, iy, ip + 1)]
                SapModel.FrameObj.AddByPoint(p1, p2, "", "COL", f"C{ip}_{ix}_{iy}")

    # Vigas X
    for ip in range(1, N_PISOS + 1):
        for iy in range(N_VANOS_Y + 1):
            for ix in range(N_VANOS_X):
                SapModel.FrameObj.AddByPoint(pts[(ix, iy, ip)], pts[(ix + 1, iy, ip)], "", "VIG", f"VX{ip}_{ix}_{iy}")
        # Vigas Y
        for iy in range(N_VANOS_Y):
            for ix in range(N_VANOS_X + 1):
                SapModel.FrameObj.AddByPoint(pts[(ix, iy, ip)], pts[(ix, iy + 1, ip)], "", "VIG", f"VY{ip}_{ix}_{iy}")

    # Losas (paneles)
    for ip in range(1, N_PISOS + 1):
        for iy in range(N_VANOS_Y):
            for ix in range(N_VANOS_X):
                ps = [pts[(ix, iy, ip)], pts[(ix + 1, iy, ip)],
                      pts[(ix + 1, iy + 1, ip)], pts[(ix, iy + 1, ip)]]
                SapModel.AreaObj.AddByPoint(4, ps, "", "LOSA", f"LO{ip}_{ix}_{iy}")

    # Diaphragm assignment a los puntos del piso (todos los casos)
    for ip in range(1, N_PISOS + 1):
        for iy in range(N_VANOS_Y + 1):
            for ix in range(N_VANOS_X + 1):
                SapModel.PointObj.SetDiaphragm(pts[(ix, iy, ip)], 3, "D1")

    # Restricciones en la base
    Restraint = [True] * 6
    for iy in range(N_VANOS_Y + 1):
        for ix in range(N_VANOS_X + 1):
            SapModel.PointObj.SetRestraint(pts[(ix, iy, 0)], Restraint)

    # Refresh ANTES de configurar análisis (importante en ETABS 22)
    SapModel.View.RefreshView(0, False)

    # Caso modal — usar el caso "Modal" que ETABS crea por default
    # (en ETABS 22 SetCase a veces falla con access violation, así que skip)
    try:
        SapModel.LoadCases.ModalEigen.SetNumberModes("Modal", 12, 1)
    except Exception as e:
        print(f"  [WARN] No se pudo cambiar nModes ({e}), uso default")

    # Save
    save_path = os.path.join(OUT_DIR, f"val_{slab_mode}.edb")
    SapModel.File.Save(save_path)

    # Crear modelo de análisis y correr
    SapModel.Analyze.SetRunCaseFlag("", False, True)
    SapModel.Analyze.SetRunCaseFlag("Modal", True)
    SapModel.Analyze.CreateAnalysisModel()
    print(f"  Corriendo análisis…")
    SapModel.Analyze.RunAnalysis()

    # Leer resultados modales
    SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
    SapModel.Results.Setup.SetCaseSelectedForOutput("Modal")

    # Períodos
    NumberResults = 0
    LoadCase = []; StepType = []; StepNum = []
    Period = []; Frequency = []; CircFreq = []; EigenValue = []
    ret = SapModel.Results.ModalPeriod(NumberResults, LoadCase, StepType, StepNum,
                                        Period, Frequency, CircFreq, EigenValue)
    n = ret[0]
    periods = list(ret[4]) if n > 0 else []

    # Masas participantes
    UX = []; UY = []; UZ = []
    SumUX = []; SumUY = []; SumUZ = []
    RX = []; RY = []; RZ = []
    SumRX = []; SumRY = []; SumRZ = []
    NumberResults = 0
    LoadCase = []; StepType = []; StepNum = []
    ret2 = SapModel.Results.ModalParticipatingMassRatios(
        NumberResults, LoadCase, StepType, StepNum,
        UX, UY, UZ, SumUX, SumUY, SumUZ,
        RX, RY, RZ, SumRX, SumRY, SumRZ)
    if ret2[0] > 0:
        ux = list(ret2[5]); uy = list(ret2[6]); uz = list(ret2[7])
        rx = list(ret2[11]); ry = list(ret2[12]); rz = list(ret2[13])
    else:
        ux = uy = uz = rx = ry = rz = []

    return {
        "label": slab_mode,
        "T": periods,
        "UX": ux, "UY": uy, "UZ": uz, "RX": rx, "RY": ry, "RZ": rz,
    }


# ── Main ────────────────────────────────────────────────────────────────
def main():
    etabs, SapModel = launch_etabs()
    cases = ["membrane", "flex_diaphragm", "rigid_diaphragm"]
    results = {}
    try:
        for c in cases:
            results[c] = build_and_run(SapModel, c)
    finally:
        # Cerrar ETABS limpiamente
        time.sleep(1)
        etabs.ApplicationExit(False)

    # Tabla comparativa
    print("\n" + "=" * 90)
    print(f"  COMPARATIVA — Edificio {N_VANOS_X}×{N_VANOS_Y} vanos × {N_PISOS} pisos · misma malla, distinta LOSA")
    print("=" * 90)
    hdr = f"{'Modo':<5} {'T_M (s)':<10} {'T_FD (s)':<10} {'T_RD (s)':<10} {'D%(M-FD)':<10} {'D%(M-RD)':<10} {'Tipo (M)':<12}"
    print(hdr)
    print("-" * 90)
    Tm, Tf, Tr = results["membrane"]["T"], results["flex_diaphragm"]["T"], results["rigid_diaphragm"]["T"]
    n_modes = min(len(Tm), len(Tf), len(Tr), 8)
    for i in range(n_modes):
        d_mfd = (Tm[i] - Tf[i]) / Tf[i] * 100 if Tf[i] > 1e-9 else 0
        d_mrd = (Tm[i] - Tr[i]) / Tr[i] * 100 if Tr[i] > 1e-9 else 0
        mp = max([(results["membrane"]["UX"][i], "Ux"),
                  (results["membrane"]["UY"][i], "Uy"),
                  (results["membrane"]["UZ"][i], "Uz"),
                  (results["membrane"]["RZ"][i], "Rz")], key=lambda x: x[0])
        tipo = f"{mp[1]} ({mp[0]*100:.0f}%)" if mp[0] > 0.05 else "—"
        print(f"{i+1:<5} {Tm[i]:<10.4f} {Tf[i]:<10.4f} {Tr[i]:<10.4f} {d_mfd:<+10.2f} {d_mrd:<+10.2f} {tipo:<12}")

    # JSON
    out_json = os.path.join(OUT_DIR, "comparativa_membrane_diaphragm.json")
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\n  JSON guardado: {out_json}")

    # Conclusión sobre el modo torsional
    print("\n  Diferencia en T₃ (modo torsional, generalmente):")
    if n_modes >= 3:
        d_t3_mfd = abs((Tm[2] - Tf[2]) / Tf[2] * 100) if Tf[2] > 1e-9 else 0
        if d_t3_mfd > 5:
            print(f"  ✓ CONFIRMADO: |D%(M-FD)| en T₃ = {d_t3_mfd:.2f}% > 5%")
            print(f"     Tu amigo tiene razón: Membrane ≠ Flexible Diaphragm en torsión.")
        else:
            print(f"  D%(M-FD) en T₃ = {d_t3_mfd:.2f}% < 5%, casi iguales en torsión.")


if __name__ == "__main__":
    main()
