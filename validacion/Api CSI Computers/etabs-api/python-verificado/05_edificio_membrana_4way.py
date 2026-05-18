# -*- coding: utf-8 -*-
"""
═════════════════════════════════════════════════════════════════════════════
 EDIFICIO CON LOSA MEMBRANA — Comparación ETABS + OpenSeesPy + Hekatan
═════════════════════════════════════════════════════════════════════════════

Modelo:
  - Edificio 3×3 vanos × 3 pisos (= 4×4 columnas en planta)
  - Vano 5m × 5m, altura 3m
  - Hormigón f'c=210 kg/cm² → E=21 GPa
  - Columnas 40×40 cm, Vigas 30×40 cm
  - Losa 0.15m tipo MEMBRANA (Shell-Membrane sin diafragma rígido)
  - Apoyos empotrados en base
  - 12 modos modales con MPF (ASCE 7-22 §12.9.1.1)

Plataformas comparadas:
  1. ETABS 22 (vía API Python comtypes)
  2. OpenSeesPy (Python directo, ShellMITC4 + nDMaterial ElasticIsotropic)
  3. Hekatan (ver workspace ?t=edificio-aporticado con slabType=Membrane)

Salida: tabla de T₁-T₆ y MPF (Ux, Uy, Rz) lado a lado.
"""
import os, sys, time, json, math
import comtypes.client
import openseespy.opensees as ops
import numpy as np

sys.stdout.reconfigure(encoding='utf-8')
OUT_DIR = os.path.dirname(os.path.abspath(__file__))

# ── Parámetros del modelo (idénticos en los 3 casos) ──────────────────────
NX, NY = 3, 3              # vanos por dirección
DX, DY = 5.0, 5.0
HP = 3.0
NP = 3
FC = 210                   # kg/cm²
LOSA_E = 0.15
COL_B, COL_H = 0.40, 0.40
VIG_B, VIG_H = 0.30, 0.40

# Material concreto
E_KGFCM2 = 15100.0 * np.sqrt(FC)         # kgf/cm²
E_NM2 = E_KGFCM2 * 9.80665e4              # N/m² (Pa)
E_KNM2 = E_NM2 / 1000                     # kN/m²
NU = 0.2
RHO_KGM3 = 2400.0                         # kg/m³
RHO_KNM3 = 24.0                           # kN/m³

print(f"E = {E_NM2/1e9:.2f} GPa = {E_KNM2:.0f} kN/m²")


# ═══════════════════════════════════════════════════════════════════════════
# 1) ETABS 22 (vía API Python)
# ═══════════════════════════════════════════════════════════════════════════
def run_etabs():
    print("\n" + "="*72)
    print("  CASO 1 — ETABS 22 (Membrane Slab, sin diaphragm)")
    print("="*72)
    try:
        # Patrón EXACTO del ejemplo CSI oficial — sin GetObject primero
        helper = comtypes.client.CreateObject('ETABSv1.Helper')
        helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
        print("  [INFO] Creando instancia ETABS…")
        obj = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
        print("  [INFO] ApplicationStart…")
        obj.ApplicationStart()
        # Sleep suficiente para que ETABS termine de cargar splash y librerías
        time.sleep(8)
        SapModel = obj.SapModel
        if SapModel is None:
            raise RuntimeError("SapModel sigue None tras ApplicationStart()")
        print("  [OK] ETABS conectado")

        SapModel.InitializeNewModel()
        SapModel.File.NewBlank()
        SapModel.SetPresentUnits(6)  # tonf, m

        # Material
        SapModel.PropMaterial.SetMaterial("CONC", 2)
        SapModel.PropMaterial.SetMPIsotropic("CONC", E_KNM2/9.81, NU, 1e-5)
        SapModel.PropMaterial.SetWeightAndMass("CONC", 1, RHO_KNM3/9.81)

        # Secciones
        SapModel.PropFrame.SetRectangle("COL", "CONC", COL_H, COL_B)
        SapModel.PropFrame.SetRectangle("VIG", "CONC", VIG_H, VIG_B)
        # Slab MEMBRANE (ShellType=3)
        SapModel.PropArea.SetSlab("LOSA", 0, 3, "CONC", LOSA_E)

        # Diaphragm Semi-Rigid (no rigid, preserva rigidez membrana real)
        SapModel.Diaphragm.SetDiaphragm("D1", True)

        # Puntos
        pts = {}
        pid = 0
        for ip in range(NP+1):
            for iy in range(NY+1):
                for ix in range(NX+1):
                    x, y, z = ix*DX, iy*DY, ip*HP
                    ret = SapModel.PointObj.AddCartesian(x, y, z, "", f"P{pid}")
                    pts[(ix,iy,ip)] = ret[0] if isinstance(ret, tuple) else f"P{pid}"
                    pid += 1
        # Frames
        for ip in range(NP):
            for iy in range(NY+1):
                for ix in range(NX+1):
                    SapModel.FrameObj.AddByPoint(pts[(ix,iy,ip)], pts[(ix,iy,ip+1)],
                                                  "", "COL", f"C{ip}_{ix}_{iy}")
        for ip in range(1, NP+1):
            for iy in range(NY+1):
                for ix in range(NX):
                    SapModel.FrameObj.AddByPoint(pts[(ix,iy,ip)], pts[(ix+1,iy,ip)],
                                                  "", "VIG", f"VX{ip}_{ix}_{iy}")
            for iy in range(NY):
                for ix in range(NX+1):
                    SapModel.FrameObj.AddByPoint(pts[(ix,iy,ip)], pts[(ix,iy+1,ip)],
                                                  "", "VIG", f"VY{ip}_{ix}_{iy}")
        # Losas
        for ip in range(1, NP+1):
            for iy in range(NY):
                for ix in range(NX):
                    SapModel.AreaObj.AddByPoint(4,
                        [pts[(ix,iy,ip)], pts[(ix+1,iy,ip)],
                         pts[(ix+1,iy+1,ip)], pts[(ix,iy+1,ip)]],
                        "", "LOSA", f"L{ip}_{ix}_{iy}")
        # Diaphragm assignment
        for ip in range(1, NP+1):
            for iy in range(NY+1):
                for ix in range(NX+1):
                    SapModel.PointObj.SetDiaphragm(pts[(ix,iy,ip)], 3, "D1")
        # Restraints
        for iy in range(NY+1):
            for ix in range(NX+1):
                SapModel.PointObj.SetRestraint(pts[(ix,iy,0)], [True]*6)

        SapModel.View.RefreshView(0, False)
        save = os.path.join(OUT_DIR, "edificio_membrana.edb")
        SapModel.File.Save(save)
        SapModel.Analyze.SetRunCaseFlag("", False, True)
        SapModel.Analyze.SetRunCaseFlag("Modal", True)
        SapModel.Analyze.CreateAnalysisModel()
        print("  Corriendo modal…")
        SapModel.Analyze.RunAnalysis()

        SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
        SapModel.Results.Setup.SetCaseSelectedForOutput("Modal")
        ret = SapModel.Results.ModalPeriod(0,[],[],[],[],[],[],[])
        T = list(ret[4]) if ret[0] > 0 else []
        ret2 = SapModel.Results.ModalParticipatingMassRatios(
            0,[],[],[],[],[],[],[],[],[],[],[],[],[],[],[])
        UX = list(ret2[5]) if ret2[0]>0 else []
        UY = list(ret2[6]) if ret2[0]>0 else []
        RZ = list(ret2[13]) if ret2[0]>0 else []
        return {"T": T, "UX": UX, "UY": UY, "RZ": RZ}
    except Exception as e:
        print(f"  [ERROR] {e}")
        return {"T": [], "UX": [], "UY": [], "RZ": [], "error": str(e)}


# ═══════════════════════════════════════════════════════════════════════════
# 2) OpenSeesPy
# ═══════════════════════════════════════════════════════════════════════════
def run_opensees():
    print("\n" + "="*72)
    print("  CASO 2 — OpenSeesPy (ShellMITC4 + Frame + ElasticIsotropic)")
    print("="*72)
    ops.wipe()
    ops.model('basic', '-ndm', 3, '-ndf', 6)

    # Crear nodos (cuadrícula 4×4 cols × 4 niveles)
    node_id = 1
    nmap = {}  # (ix, iy, ip) → id
    for ip in range(NP+1):
        for iy in range(NY+1):
            for ix in range(NX+1):
                ops.node(node_id, ix*DX, iy*DY, ip*HP)
                nmap[(ix,iy,ip)] = node_id
                node_id += 1

    # Restraints
    for iy in range(NY+1):
        for ix in range(NX+1):
            ops.fix(nmap[(ix,iy,0)], 1,1,1,1,1,1)

    # Material para shell membrana
    ops.nDMaterial('ElasticIsotropic', 1, E_NM2/1e3, NU, RHO_KGM3/1e3)  # kN, m
    ops.section('PlateFiber', 1, 1, LOSA_E)

    # Geometric transforms
    ops.geomTransf('Linear', 1, 0, 1, 0)  # cols
    ops.geomTransf('Linear', 2, 0, 0, 1)  # vigas

    # Properties frames
    A_col = COL_B*COL_H
    Iz_col = COL_B*COL_H**3/12
    Iy_col = COL_H*COL_B**3/12
    J_col = (Iy_col + Iz_col) * 0.7  # aprox St-Venant
    G = E_NM2/(2*(1+NU))/1e3

    A_vig = VIG_B*VIG_H
    Iz_vig = VIG_B*VIG_H**3/12
    Iy_vig = VIG_H*VIG_B**3/12
    J_vig = (Iy_vig + Iz_vig) * 0.7

    rho_col_lin = RHO_KGM3/1e3 * A_col   # kN/m / g_factor
    rho_vig_lin = RHO_KGM3/1e3 * A_vig

    # Columnas
    el_id = 1
    for ip in range(NP):
        for iy in range(NY+1):
            for ix in range(NX+1):
                ni = nmap[(ix,iy,ip)]
                nj = nmap[(ix,iy,ip+1)]
                ops.element('elasticBeamColumn', el_id, ni, nj,
                           A_col, E_NM2/1e3, G, J_col, Iy_col, Iz_col, 1,
                           '-mass', rho_col_lin)
                el_id += 1
    # Vigas X
    for ip in range(1, NP+1):
        for iy in range(NY+1):
            for ix in range(NX):
                ni = nmap[(ix,iy,ip)]; nj = nmap[(ix+1,iy,ip)]
                ops.element('elasticBeamColumn', el_id, ni, nj,
                           A_vig, E_NM2/1e3, G, J_vig, Iy_vig, Iz_vig, 2,
                           '-mass', rho_vig_lin)
                el_id += 1
    # Vigas Y
    for ip in range(1, NP+1):
        for iy in range(NY):
            for ix in range(NX+1):
                ni = nmap[(ix,iy,ip)]; nj = nmap[(ix,iy+1,ip)]
                ops.element('elasticBeamColumn', el_id, ni, nj,
                           A_vig, E_NM2/1e3, G, J_vig, Iy_vig, Iz_vig, 2,
                           '-mass', rho_vig_lin)
                el_id += 1
    # Losas (ShellMITC4 funciona como membrane + plate)
    for ip in range(1, NP+1):
        for iy in range(NY):
            for ix in range(NX):
                n1 = nmap[(ix,iy,ip)]
                n2 = nmap[(ix+1,iy,ip)]
                n3 = nmap[(ix+1,iy+1,ip)]
                n4 = nmap[(ix,iy+1,ip)]
                ops.element('ShellMITC4', el_id, n1, n2, n3, n4, 1)
                el_id += 1

    # Modal
    try:
        eig = ops.eigen('-fullGenLapack', 12)
    except Exception as e:
        print(f"  [ERROR eigen] {e}")
        return {"T": [], "UX": [], "UY": [], "RZ": []}
    T = []
    for ev in eig:
        if ev > 1e-12:
            T.append(2*math.pi/math.sqrt(ev))
        else:
            T.append(float('inf'))
    return {"T": T, "UX": [], "UY": [], "RZ": []}


# ═══════════════════════════════════════════════════════════════════════════
# Main
# ═══════════════════════════════════════════════════════════════════════════
def main():
    results = {}
    results["etabs"] = run_etabs()
    results["opensees"] = run_opensees()

    # Tabla
    print("\n" + "=" * 80)
    print("  COMPARATIVA — Edificio 4×4 cols × 3 pisos · LOSA MEMBRANA")
    print("=" * 80)
    print(f"  {'Modo':<5} {'ETABS T':<12} {'OpenSees T':<12} {'Δ%(O-E)':<10}")
    print("  " + "-" * 60)
    Te = results["etabs"]["T"]
    To = results["opensees"]["T"]
    n = max(len(Te), len(To))
    for i in range(min(n, 8)):
        te = Te[i] if i < len(Te) else 0
        to = To[i] if i < len(To) else 0
        d = (to-te)/te*100 if te > 0 else 0
        te_s = f"{te:.4f}" if te else "—"
        to_s = f"{to:.4f}" if to and to != float('inf') else "—"
        print(f"  {i+1:<5} {te_s:<12} {to_s:<12} {d:<+10.2f}")

    print("\n  Para Hekatan: abre")
    print("    https://giorgioburbanelli89.github.io/hekatan-struct/workspace/?t=edificio-aporticado")
    print("    Configurá: nVanosX=3, nVanosY=3, nPisos=3, vano=5m, h_piso=3m")
    print("    Avanzado → Tipo losa = Membrane only")
    print("    Correr Modal → comparar T₁, T₂, T₃ con esta tabla")

    out_path = os.path.join(OUT_DIR, "comparacion_4way_edificio_membrana.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
    print(f"\n  JSON: {out_path}")


if __name__ == "__main__":
    main()
