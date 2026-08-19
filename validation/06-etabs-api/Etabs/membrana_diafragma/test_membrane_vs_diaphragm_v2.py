# -*- coding: utf-8 -*-
"""
Comparación Membrane vs Diaphragm Flexible vs Rigid Diaphragm — ETABS 22 API.

Construye 3 modelos IDÉNTICOS de un edificio 2x2x3 y solo cambia el modelado
de la losa para cada caso. Extrae los modos modales y compara los resultados.

Basado en el patrón de modal_gad_riochico_v2.py del usuario.
Salida: tabla comparativa de T1/T2/T3 + JSON con todos los resultados.
"""
import os, sys, time, json
import comtypes.client
import numpy as np

# ── Parámetros del modelo (mismos para los 3 casos) ──────────────────────
n_col_x = 3       # 3 cols en X
n_col_y = 3       # 3 cols en Y
dx = 5.0          # vano X
dy = 5.0          # vano Y
h_piso = 3.0      # altura
n_pisos = 3       # pisos
fc_kgcm2 = 210
losa_e = 0.15
col_b = 0.40
col_h = 0.40
viga_b = 0.30
viga_h = 0.40

E = 15100.0 * np.sqrt(fc_kgcm2)              # kgf/cm²
E_kN_m2 = E * 0.098066 * 1000                 # kN/m²
nu = 0.2
rho = 24.0  # kN/m³

# ── Conexión ETABS ──────────────────────────────────────────────────────
def conectar_etabs():
    """Conexión robusta: si GetObject() retorna NoneType o no SapModel, usa CreateObjectProgID."""
    helper = comtypes.client.CreateObject('ETABSv1.Helper')
    helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
    obj = None
    # Intento 1: ETABS abierto
    try:
        obj = helper.GetObject("CSI.ETABS.API.ETABSObject")
        if obj is None:
            raise RuntimeError("GetObject returned None")
        sm = obj.SapModel
        if sm is None:
            raise RuntimeError("SapModel is None — ETABS no inicializó modelo")
        print("[OK] Conectado a ETABS existente")
        return sm
    except Exception as e1:
        print(f"[INFO] No hay ETABS listo ({e1}). Lanzando nuevo…")
        # Intento 2: lanzar ETABS
        obj = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
        obj.ApplicationStart()
        time.sleep(5)
        sm = obj.SapModel
        if sm is None:
            raise RuntimeError("SapModel sigue siendo None tras ApplicationStart")
        print("[OK] ETABS lanzado y conectado")
        return sm


# ── Construcción del modelo ─────────────────────────────────────────────
def build_model(SapModel, slab_mode):
    """slab_mode: 'membrane', 'flex_diaphragm', 'rigid_diaphragm'"""
    SapModel.InitializeNewModel(8)  # 8 = N, m, C
    SapModel.File.NewBlank()
    # Material
    SapModel.PropMaterial.SetMaterial("CONC", 2)  # 2 = Concrete
    SapModel.PropMaterial.SetMPIsotropic("CONC", E_kN_m2, nu, 0)
    SapModel.PropMaterial.SetWeightAndMass("CONC", 1, rho)  # 1 = SetWeight
    # Secciones
    SapModel.PropFrame.SetRectangle("COL", "CONC", col_h, col_b)
    SapModel.PropFrame.SetRectangle("VIG", "CONC", viga_h, viga_b)
    # Slab
    if slab_mode == "membrane":
        SapModel.PropArea.SetSlab("LOSA", 0, 3, "CONC", losa_e)  # 3 = Membrane
    else:
        SapModel.PropArea.SetSlab("LOSA", 0, 1, "CONC", losa_e)  # 1 = Shell-Thin
    # Diaphragm
    if slab_mode == "rigid_diaphragm":
        SapModel.Diaphragm.SetDiaphragm("D1", False)  # rigid
    elif slab_mode == "flex_diaphragm":
        SapModel.Diaphragm.SetDiaphragm("D1", True)   # semi-rigid
    # Crear puntos
    pts = {}
    pid = 0
    for ip in range(n_pisos + 1):
        for iy in range(n_col_y):
            for ix in range(n_col_x):
                x, y, z = ix * dx, iy * dy, ip * h_piso
                name = f"P{pid}"
                ret = SapModel.PointObj.AddCartesian(x, y, z, name)
                pts[(ix, iy, ip)] = name
                pid += 1
    # Columnas
    for ip in range(n_pisos):
        for iy in range(n_col_y):
            for ix in range(n_col_x):
                p1 = pts[(ix, iy, ip)]
                p2 = pts[(ix, iy, ip + 1)]
                SapModel.FrameObj.AddByPoint(p1, p2, "", "COL")
    # Vigas
    for ip in range(1, n_pisos + 1):
        for iy in range(n_col_y):
            for ix in range(n_col_x - 1):
                SapModel.FrameObj.AddByPoint(pts[(ix, iy, ip)], pts[(ix + 1, iy, ip)], "", "VIG")
        for iy in range(n_col_y - 1):
            for ix in range(n_col_x):
                SapModel.FrameObj.AddByPoint(pts[(ix, iy, ip)], pts[(ix, iy + 1, ip)], "", "VIG")
    # Losas
    for ip in range(1, n_pisos + 1):
        for iy in range(n_col_y - 1):
            for ix in range(n_col_x - 1):
                ps = [pts[(ix, iy, ip)], pts[(ix + 1, iy, ip)],
                      pts[(ix + 1, iy + 1, ip)], pts[(ix, iy + 1, ip)]]
                SapModel.AreaObj.AddByPoint(4, ps, "", "LOSA")
    # Diaphragm assignment a los puntos del piso
    if slab_mode in ("flex_diaphragm", "rigid_diaphragm"):
        for ip in range(1, n_pisos + 1):
            for iy in range(n_col_y):
                for ix in range(n_col_x):
                    SapModel.PointObj.SetDiaphragm(pts[(ix, iy, ip)], 3, "D1")
    # Apoyos
    for iy in range(n_col_y):
        for ix in range(n_col_x):
            SapModel.PointObj.SetRestraint(pts[(ix, iy, 0)], [True] * 6)
    # Mass source = peso propio
    SapModel.PropMaterial.SetMassSource(1, [1.0])  # autoseismic — no aplica acá
    # Caso modal
    SapModel.LoadCases.ModalEigen.SetNumberModes("MODAL", 12, 1)


def run_and_extract(SapModel, label):
    SapModel.SetModelIsLocked(False)
    SapModel.Analyze.SetRunCaseFlag("", False, True)
    SapModel.Analyze.SetRunCaseFlag("MODAL", True)
    print(f"  Corriendo MODAL para {label}…")
    SapModel.Analyze.RunAnalysis()
    SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
    SapModel.Results.Setup.SetCaseSelectedForOutput("MODAL")
    # Períodos
    ret = SapModel.Results.ModalPeriod(0, [], [], [], [], [], [], [])
    n = ret[0]
    periods = list(ret[4]) if n > 0 else []
    # Masas participantes
    ret2 = SapModel.Results.ModalParticipatingMassRatios(
        0, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [])
    n2 = ret2[0]
    if n2 > 0:
        ux = list(ret2[5]); uy = list(ret2[6]); uz = list(ret2[7])
        rz = list(ret2[13])
    else:
        ux, uy, uz, rz = [], [], [], []
    return {
        "label": label,
        "T": periods,
        "UX": ux, "UY": uy, "UZ": uz, "RZ": rz,
    }


# ── Main ────────────────────────────────────────────────────────────────
def main():
    SapModel = conectar_etabs()
    cases = ["membrane", "flex_diaphragm", "rigid_diaphragm"]
    results = {}
    for c in cases:
        print(f"\n=== Construyendo modelo: {c} ===")
        build_model(SapModel, c)
        time.sleep(0.5)
        out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), f"val_{c}.edb")
        SapModel.File.Save(out_path)
        results[c] = run_and_extract(SapModel, c)

    # Tabla comparativa
    print("\n" + "=" * 78)
    print("  COMPARATIVA — Edificio 2x2 vanos × 3 pisos · Modelo idéntico, sólo cambia LOSA")
    print("=" * 78)
    hdr = f"{'Modo':<5}  {'T_M (s)':<10} {'T_FD (s)':<10} {'T_RD (s)':<10}  {'Δ%(M-FD)':<10} {'Δ%(M-RD)':<10}"
    print(hdr)
    print("-" * 78)
    Tm, Tf, Tr = results["membrane"]["T"], results["flex_diaphragm"]["T"], results["rigid_diaphragm"]["T"]
    n_modes = min(len(Tm), len(Tf), len(Tr), 6)
    for i in range(n_modes):
        d_mfd = (Tm[i] - Tf[i]) / Tf[i] * 100 if Tf[i] > 0 else 0
        d_mrd = (Tm[i] - Tr[i]) / Tr[i] * 100 if Tr[i] > 0 else 0
        print(f"{i+1:<5}  {Tm[i]:<10.4f} {Tf[i]:<10.4f} {Tr[i]:<10.4f}  {d_mfd:<+10.2f} {d_mrd:<+10.2f}")

    # Identificar primer modo torsional (Rz dominante)
    print("\n  Primer modo torsional (Rz > 50%):")
    for c in cases:
        r = results[c]
        for i, rz_v in enumerate(r["RZ"]):
            if rz_v > 0.50:
                print(f"    {c:<20s}: modo {i+1}, T = {r['T'][i]:.4f} s, Rz = {rz_v*100:.1f}%")
                break
        else:
            print(f"    {c:<20s}: ningún modo con Rz > 50% en los primeros 12")

    # JSON
    out_json = os.path.join(os.path.dirname(os.path.abspath(__file__)), "comparativa_membrane_diaphragm.json")
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\n  JSON guardado: {out_json}")

    print("\n" + "=" * 78)
    print("  CONCLUSIÓN: si |Δ%(M-FD)| > 5% en algún modo (especialmente T₃ torsional),")
    print("  se confirma que MEMBRANE ≠ FLEXIBLE DIAPHRAGM (lo que decía tu amigo).")
    print("=" * 78)


if __name__ == "__main__":
    main()
