# -*- coding: utf-8 -*-
"""
═════════════════════════════════════════════════════════════════════════════
 Conecta a ETABS YA ABIERTO (AttachToInstance=True) y construye 2 modelos:
   CASO A: Edificio + Slab MEMBRANE
   CASO B: Edificio + Slab Shell-Thin + Diaphragm Semi-Rigid

 SOLUCIÓN al SentinelLM Error #18: ETABS pierde licencia cuando se lanza por
 ApplicationStart(). Workaround: el usuario abre ETABS manualmente, este
 script ATTACH a esa instancia (no la lanza). Es el patrón oficial CSI con
 AttachToInstance=True.

 USO:
   1. Abre ETABS 22 manualmente (con licencia activa)
   2. python 08_attach_existing_instance.py
═════════════════════════════════════════════════════════════════════════════
"""
import os, sys, time, json, math
import comtypes.client

sys.stdout.reconfigure(encoding='utf-8')

# ── Parámetros del modelo ────────────────────────────────────────────────
NX, NY = 3, 3
DX, DY = 5.0, 5.0
HP = 3.0
NP = 3
LOSA_E = 0.15
COL_B, COL_H = 0.40, 0.40
VIG_B, VIG_H = 0.30, 0.40
E_KNM2 = 21458891.0
NU = 0.2
RHO_KNM3 = 24.0

OUT_DIR = os.path.dirname(os.path.abspath(__file__))


# ═══════════════════════════════════════════════════════════════════════════
# CONEXIÓN: AttachToInstance=True (patrón oficial CSI)
# ═══════════════════════════════════════════════════════════════════════════
AttachToInstance = True

print("="*72)
print("  Conectando a ETABS 22 ya abierto (AttachToInstance=True)")
print("="*72)

if AttachToInstance:
    # Conexión que FUNCIONA: GetActiveObject del ROT (Running Object Table)
    # En ETABS 22, helper.GetObject() retorna None aunque ETABS esté abierto.
    # comtypes.client.GetActiveObject sí funciona correctamente.
    try:
        myETABSObject = comtypes.client.GetActiveObject("CSI.ETABS.API.ETABSObject")
        print("  [OK] Conectado a ETABS existente via GetActiveObject")
    except Exception as e:
        print(f"[ERROR] GetActiveObject falló: {e}")
        print("  → Asegurate que ETABS 22 esté abierto manualmente")
        sys.exit(-1)
else:
    try:
        myETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
        myETABSObject.ApplicationStart()
    except Exception as e:
        print(f"[ERROR] {e}")
        sys.exit(-1)

SapModel = myETABSObject.SapModel
if SapModel is None:
    print("[ERROR] SapModel = None")
    sys.exit(-1)
print("  [OK] SapModel obtenido")


def build_and_run(slab_type):
    """Construye modelo, corre modal, retorna períodos + MPF."""
    print(f"\n--- CASO: {slab_type} ---")

    SapModel.InitializeNewModel()
    SapModel.File.NewBlank()
    SapModel.SetPresentUnits(6)  # tonf, m, C

    # Material concreto
    SapModel.PropMaterial.SetMaterial("CONC", 2)
    E_TONFM2 = E_KNM2 / 9.81
    SapModel.PropMaterial.SetMPIsotropic("CONC", E_TONFM2, NU, 1e-5)
    SapModel.PropMaterial.SetWeightAndMass("CONC", 1, RHO_KNM3 / 9.81)

    # Frame sections
    SapModel.PropFrame.SetRectangle("COL", "CONC", COL_H, COL_B)
    SapModel.PropFrame.SetRectangle("VIG", "CONC", VIG_H, VIG_B)

    # Slab
    if slab_type == "membrane":
        SapModel.PropArea.SetSlab("LOSA", 0, 3, "CONC", LOSA_E)  # 3=Membrane
        print("  Slab MODELINGTYPE=Membrane (ShellType=3)")
    else:
        SapModel.PropArea.SetSlab("LOSA", 0, 1, "CONC", LOSA_E)  # 1=ShellThin
        print("  Slab MODELINGTYPE=ShellThin (ShellType=1)")

    # Diaphragm
    if slab_type == "semi_rigid":
        SapModel.Diaphragm.SetDiaphragm("D1", True)  # Semi-Rigid
        print("  Diaphragm D1: Semi-Rigid")

    # Geometría
    pts = {}
    pid = 0
    for ip in range(NP+1):
        for iy in range(NY+1):
            for ix in range(NX+1):
                ret = SapModel.PointObj.AddCartesian(
                    ix*DX, iy*DY, ip*HP, "", f"P{pid}")
                pts[(ix,iy,ip)] = ret[0] if isinstance(ret, tuple) else f"P{pid}"
                pid += 1
    # Columnas
    for ip in range(NP):
        for iy in range(NY+1):
            for ix in range(NX+1):
                SapModel.FrameObj.AddByPoint(
                    pts[(ix,iy,ip)], pts[(ix,iy,ip+1)],
                    "", "COL", f"C{ip}_{ix}_{iy}")
    # Vigas X+Y
    for ip in range(1, NP+1):
        for iy in range(NY+1):
            for ix in range(NX):
                SapModel.FrameObj.AddByPoint(
                    pts[(ix,iy,ip)], pts[(ix+1,iy,ip)],
                    "", "VIG", f"VX{ip}_{ix}_{iy}")
        for iy in range(NY):
            for ix in range(NX+1):
                SapModel.FrameObj.AddByPoint(
                    pts[(ix,iy,ip)], pts[(ix,iy+1,ip)],
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
    if slab_type == "semi_rigid":
        for ip in range(1, NP+1):
            for iy in range(NY+1):
                for ix in range(NX+1):
                    SapModel.PointObj.SetDiaphragm(pts[(ix,iy,ip)], 3, "D1")
    # Restraints
    for iy in range(NY+1):
        for ix in range(NX+1):
            SapModel.PointObj.SetRestraint(pts[(ix,iy,0)], [True]*6)

    SapModel.View.RefreshView(0, False)
    save_path = os.path.join(OUT_DIR, f"edif_{slab_type}.edb")
    SapModel.File.Save(save_path)
    print(f"  Guardado: {os.path.basename(save_path)}")

    # Run analysis
    SapModel.SetModelIsLocked(False)
    SapModel.Analyze.SetRunCaseFlag("", False, True)
    SapModel.Analyze.SetRunCaseFlag("Modal", True)
    print("  Corriendo análisis…")
    SapModel.Analyze.RunAnalysis()
    print("  ✓ Análisis completado")

    # Resultados
    SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
    SapModel.Results.Setup.SetCaseSelectedForOutput("Modal")
    ret = SapModel.Results.ModalPeriod(0,[],[],[],[],[],[],[])
    T = list(ret[4]) if ret[0] > 0 else []
    ret2 = SapModel.Results.ModalParticipatingMassRatios(
        0,[],[],[],[],[],[],[],[],[],[],[],[],[],[],[])
    UX = list(ret2[5]) if ret2[0]>0 else []
    UY = list(ret2[6]) if ret2[0]>0 else []
    RZ = list(ret2[13]) if ret2[0]>0 else []

    print(f"\n  Resultados {slab_type.upper()}:")
    print(f"  {'Modo':<5} {'T(s)':<10} {'Ux%':<8} {'Uy%':<8} {'Rz%':<8}")
    for i in range(min(8, len(T))):
        ux = UX[i]*100 if i<len(UX) else 0
        uy = UY[i]*100 if i<len(UY) else 0
        rz = RZ[i]*100 if i<len(RZ) else 0
        print(f"  {i+1:<5} {T[i]:<10.4f} {ux:<8.1f} {uy:<8.1f} {rz:<8.1f}")

    return {"label": slab_type, "T": T, "UX": UX, "UY": UY, "RZ": RZ}


# ═══════════════════════════════════════════════════════════════════════════
# MAIN: 2 modelos consecutivos en la MISMA instancia ETABS
# ═══════════════════════════════════════════════════════════════════════════
results = {}

try:
    results["membrane"] = build_and_run("membrane")
except Exception as e:
    import traceback; traceback.print_exc()
    print(f"[ERROR Membrane] {e}")
    results["membrane"] = None

try:
    results["semi_rigid"] = build_and_run("semi_rigid")
except Exception as e:
    import traceback; traceback.print_exc()
    print(f"[ERROR Semi-Rigid] {e}")
    results["semi_rigid"] = None

# NO cerramos ETABS — el usuario lo gestiona manualmente

# Tabla comparativa
print("\n" + "="*72)
print("  COMPARATIVA Membrane vs Semi-Rigid (mismo edificio)")
print("="*72)
Tm = results["membrane"]["T"] if results.get("membrane") else []
Ts = results["semi_rigid"]["T"] if results.get("semi_rigid") else []
print(f"  {'Modo':<5} {'T_Memb (s)':<13} {'T_SemiR (s)':<13} {'Δ%':<10}")
print("  " + "-"*55)
for i in range(min(8, max(len(Tm), len(Ts)))):
    tm = Tm[i] if i < len(Tm) else 0
    ts = Ts[i] if i < len(Ts) else 0
    d = (tm-ts)/ts*100 if ts > 0 else 0
    tm_s = f"{tm:.4f}" if tm else "—"
    ts_s = f"{ts:.4f}" if ts else "—"
    print(f"  {i+1:<5} {tm_s:<13} {ts_s:<13} {d:<+10.2f}")

# JSON
out_path = os.path.join(OUT_DIR, "membrana_vs_semirigido_FINAL.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)
print(f"\n  JSON: {out_path}")
print("\n  ETABS sigue abierto — cerralo manualmente cuando termines")
