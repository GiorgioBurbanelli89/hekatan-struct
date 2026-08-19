# -*- coding: utf-8 -*-
"""
═════════════════════════════════════════════════════════════════════════════
 Edificio Membrana + Diafragma Semi-Rígido — patrón EXACTO CSI ejemplo oficial
═════════════════════════════════════════════════════════════════════════════

Sigue el patrón del ejemplo oficial CSI: AttachToInstance=False,
CreateObjectProgID, ApplicationStart UNA SOLA VEZ, modelos en serie.

Construye DOS modelos consecutivos en la misma instancia ETABS:
  CASO A: Slab MODELINGTYPE = "Membrane" (sin diaphragm rígido)
  CASO B: Slab MODELINGTYPE = "ShellThin" + Diaphragm SemiRigid

Compara modal de ambos.
"""
import os, sys, time, json, math
import comtypes.client

sys.stdout.reconfigure(encoding='utf-8')

# ── Parámetros del modelo ────────────────────────────────────────────────
NX, NY = 3, 3              # vanos
DX, DY = 5.0, 5.0          # m
HP = 3.0                    # m altura piso
NP = 3                      # pisos
LOSA_E = 0.15
COL_B, COL_H = 0.40, 0.40
VIG_B, VIG_H = 0.30, 0.40
E_KNM2 = 21458891.0         # f'c=210 → E≈21.5 GPa
NU = 0.2
RHO_KNM3 = 24.0

OUT_DIR = os.path.dirname(os.path.abspath(__file__))


def build_model(SapModel, slab_type):
    """slab_type: 'membrane' (ShellType=3) o 'semi_rigid' (ShellType=1 + Diaphragm)"""
    print(f"\n--- Construyendo CASO: {slab_type} ---")

    # PATRÓN CSI: InitializeNewModel + NewBlank
    ret = SapModel.InitializeNewModel()
    print(f"  InitializeNewModel ret={ret}")
    ret = SapModel.File.NewBlank()
    print(f"  NewBlank ret={ret}")

    # Unidades: 6 = tonf, m, C
    SapModel.SetPresentUnits(6)

    # Material concreto
    SapModel.PropMaterial.SetMaterial("CONC", 2)
    # E in tonf/m² = E_kN/m² / 9.81 (peso → masa)
    E_TONFM2 = E_KNM2 / 9.81
    SapModel.PropMaterial.SetMPIsotropic("CONC", E_TONFM2, NU, 1e-5)
    SapModel.PropMaterial.SetWeightAndMass("CONC", 1, RHO_KNM3 / 9.81)

    # Frame sections
    SapModel.PropFrame.SetRectangle("COL", "CONC", COL_H, COL_B)
    SapModel.PropFrame.SetRectangle("VIG", "CONC", VIG_H, VIG_B)

    # Slab según tipo
    if slab_type == "membrane":
        # ShellType: 3 = Membrane only
        SapModel.PropArea.SetSlab("LOSA", 0, 3, "CONC", LOSA_E)
        print("  Slab: ShellType=3 (Membrane)")
    else:  # semi_rigid
        # ShellType: 1 = ShellThin (full shell)
        SapModel.PropArea.SetSlab("LOSA", 0, 1, "CONC", LOSA_E)
        print("  Slab: ShellType=1 (ShellThin)")

    # Diaphragm
    if slab_type == "semi_rigid":
        SapModel.Diaphragm.SetDiaphragm("D1", True)  # SemiRigid=True
        print("  Diaphragm D1: Semi-Rigid")

    # Construcción geométrica
    pts = {}
    pid = 0
    for ip in range(NP+1):
        for iy in range(NY+1):
            for ix in range(NX+1):
                x, y, z = ix*DX, iy*DY, ip*HP
                ret = SapModel.PointObj.AddCartesian(x, y, z, "", f"P{pid}")
                pts[(ix,iy,ip)] = ret[0] if isinstance(ret, tuple) else f"P{pid}"
                pid += 1
    print(f"  Puntos: {pid}")

    # Columnas
    n_col = 0
    for ip in range(NP):
        for iy in range(NY+1):
            for ix in range(NX+1):
                SapModel.FrameObj.AddByPoint(
                    pts[(ix,iy,ip)], pts[(ix,iy,ip+1)],
                    "", "COL", f"C{ip}_{ix}_{iy}")
                n_col += 1
    print(f"  Columnas: {n_col}")

    # Vigas
    n_vig = 0
    for ip in range(1, NP+1):
        for iy in range(NY+1):
            for ix in range(NX):
                SapModel.FrameObj.AddByPoint(
                    pts[(ix,iy,ip)], pts[(ix+1,iy,ip)],
                    "", "VIG", f"VX{ip}_{ix}_{iy}")
                n_vig += 1
        for iy in range(NY):
            for ix in range(NX+1):
                SapModel.FrameObj.AddByPoint(
                    pts[(ix,iy,ip)], pts[(ix,iy+1,ip)],
                    "", "VIG", f"VY{ip}_{ix}_{iy}")
                n_vig += 1
    print(f"  Vigas: {n_vig}")

    # Losas
    n_los = 0
    for ip in range(1, NP+1):
        for iy in range(NY):
            for ix in range(NX):
                SapModel.AreaObj.AddByPoint(4,
                    [pts[(ix,iy,ip)], pts[(ix+1,iy,ip)],
                     pts[(ix+1,iy+1,ip)], pts[(ix,iy+1,ip)]],
                    "", "LOSA", f"L{ip}_{ix}_{iy}")
                n_los += 1
    print(f"  Losas: {n_los}")

    # Diaphragm assignment (solo para semi_rigid)
    if slab_type == "semi_rigid":
        for ip in range(1, NP+1):
            for iy in range(NY+1):
                for ix in range(NX+1):
                    SapModel.PointObj.SetDiaphragm(pts[(ix,iy,ip)], 3, "D1")

    # Restraints
    for iy in range(NY+1):
        for ix in range(NX+1):
            SapModel.PointObj.SetRestraint(pts[(ix,iy,0)], [True]*6)
    print("  Restraints aplicados en base")

    # Refresh
    SapModel.View.RefreshView(0, False)

    # Guardar EDB
    save_path = os.path.join(OUT_DIR, f"edif_{slab_type}.edb")
    SapModel.File.Save(save_path)
    print(f"  Guardado: {os.path.basename(save_path)}")

    # Run analysis
    SapModel.SetModelIsLocked(False)
    SapModel.Analyze.SetRunCaseFlag("", False, True)
    SapModel.Analyze.SetRunCaseFlag("Modal", True)
    print("  Corriendo análisis…")
    SapModel.Analyze.RunAnalysis()
    print("  Análisis OK")

    # Leer resultados modales
    SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
    SapModel.Results.Setup.SetCaseSelectedForOutput("Modal")

    ret = SapModel.Results.ModalPeriod(0,[],[],[],[],[],[],[])
    T = list(ret[4]) if ret[0] > 0 else []
    ret2 = SapModel.Results.ModalParticipatingMassRatios(
        0,[],[],[],[],[],[],[],[],[],[],[],[],[],[],[])
    UX = list(ret2[5]) if ret2[0]>0 else []
    UY = list(ret2[6]) if ret2[0]>0 else []
    RZ = list(ret2[13]) if ret2[0]>0 else []

    print(f"\n  RESULTADOS — {slab_type.upper()}")
    print(f"  {'Modo':<5} {'T(s)':<10} {'Ux%':<8} {'Uy%':<8} {'Rz%':<8}")
    for i in range(min(8, len(T))):
        ux = UX[i]*100 if i<len(UX) else 0
        uy = UY[i]*100 if i<len(UY) else 0
        rz = RZ[i]*100 if i<len(RZ) else 0
        print(f"  {i+1:<5} {T[i]:<10.4f} {ux:<8.1f} {uy:<8.1f} {rz:<8.1f}")

    return {"label": slab_type, "T": T, "UX": UX, "UY": UY, "RZ": RZ}


# ═══════════════════════════════════════════════════════════════════════════
# MAIN — patrón CSI oficial
# ═══════════════════════════════════════════════════════════════════════════
print("="*72)
print("  Lanzando ETABS 22 (patrón CSI ejemplo oficial)")
print("="*72)

helper = comtypes.client.CreateObject('ETABSv1.Helper')
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)

try:
    myETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
except (OSError, comtypes.COMError) as e:
    print(f"[ERROR] CreateObjectProgID falló: {e}")
    sys.exit(-1)

myETABSObject.ApplicationStart()
print("  [OK] ApplicationStart completado, esperando 8s para inicialización…")
time.sleep(8)

SapModel = myETABSObject.SapModel
if SapModel is None:
    print("[ERROR] SapModel sigue siendo None")
    sys.exit(-1)
print("  [OK] SapModel obtenido")

# Construir y correr CASO A: Membrane
results = {}
try:
    results["membrane"] = build_model(SapModel, "membrane")
except Exception as e:
    import traceback
    traceback.print_exc()
    print(f"[ERROR Membrane] {e}")
    results["membrane"] = None

# Construir y correr CASO B: Semi-Rigid (en MISMA instancia)
try:
    results["semi_rigid"] = build_model(SapModel, "semi_rigid")
except Exception as e:
    import traceback
    traceback.print_exc()
    print(f"[ERROR Semi-Rigid] {e}")
    results["semi_rigid"] = None

# Cerrar ETABS
print("\nCerrando ETABS…")
try:
    myETABSObject.ApplicationExit(False)
except Exception:
    pass

# ── Comparativa final ────────────────────────────────────────────────────
print("\n" + "="*72)
print("  TABLA COMPARATIVA — Edificio 4×4 cols × 3 pisos")
print("="*72)
Tm = results["membrane"]["T"] if results.get("membrane") else []
Ts = results["semi_rigid"]["T"] if results.get("semi_rigid") else []
print(f"  {'Modo':<5} {'T_Memb (s)':<13} {'T_SemiR (s)':<13} {'Δ%':<10}")
print("  " + "-"*60)
for i in range(min(8, max(len(Tm), len(Ts)))):
    tm = Tm[i] if i < len(Tm) else 0
    ts = Ts[i] if i < len(Ts) else 0
    d = (tm-ts)/ts*100 if ts > 0 else 0
    tm_s = f"{tm:.4f}" if tm else "—"
    ts_s = f"{ts:.4f}" if ts else "—"
    print(f"  {i+1:<5} {tm_s:<13} {ts_s:<13} {d:<+10.2f}")

# Save JSON
out_path = os.path.join(OUT_DIR, "membrana_vs_semirigido.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)
print(f"\n  JSON: {out_path}")
