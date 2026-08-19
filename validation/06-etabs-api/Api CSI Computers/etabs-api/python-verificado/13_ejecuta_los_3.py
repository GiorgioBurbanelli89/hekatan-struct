# -*- coding: utf-8 -*-
"""
Ejecuta análisis modal en los 3 .e2k generados (Membrane, SemiR Shell, Rigid Shell)
y compara los resultados.
"""
import os, sys, time, json
import comtypes.client

sys.stdout.reconfigure(encoding='utf-8')
OUT = os.path.dirname(os.path.abspath(__file__))

E2KS = [
    ("membrane",  "edif_membrane.e2k",        "MEMBRANE Slab + SemiRigid Diaphragm"),
    ("semirigid", "edif_semirigid_shell.e2k", "ShellThin Slab + SemiRigid Diaphragm"),
    ("rigid",     "edif_rigid_shell.e2k",     "ShellThin Slab + RIGID Diaphragm"),
]

print("Conectando a ETABS abierto…")
obj = comtypes.client.GetActiveObject("CSI.ETABS.API.ETABSObject")
SM = obj.SapModel
print(f"[OK] Modelo actual: {SM.GetModelFilename()}")

results = {}

for label, fname, desc in E2KS:
    print(f"\n{'='*72}")
    print(f"  CASO: {desc}")
    print('='*72)
    e2k_path = os.path.abspath(fname)
    print(f"  Abriendo {fname}…")
    ret = SM.File.OpenFile(e2k_path)
    print(f"  OpenFile ret={ret}")
    time.sleep(2)

    # Guardar como .edb antes de correr (ETABS lo requiere)
    edb_path = e2k_path.replace(".e2k", ".edb")
    print(f"  Guardando como .edb: {os.path.basename(edb_path)}")
    SM.File.Save(edb_path)
    time.sleep(2)

    SM.SetModelIsLocked(False)
    SM.Analyze.SetRunCaseFlag("", False, True)
    SM.Analyze.SetRunCaseFlag("Modal", True)
    SM.Analyze.CreateAnalysisModel()
    print("  Corriendo análisis…")
    ret = SM.Analyze.RunAnalysis()
    print(f"  RunAnalysis ret={ret}")
    time.sleep(3)

    # Status
    status = SM.Analyze.GetCaseStatus()
    casos = list(status[1]); estados = list(status[2])
    print(f"  Status: {dict(zip(casos, estados))}")

    # Resultados
    SM.Results.Setup.DeselectAllCasesAndCombosForOutput()
    SM.Results.Setup.SetCaseSelectedForOutput("Modal")
    ret = SM.Results.ModalPeriod(0,[],[],[],[],[],[],[])
    n = ret[0]
    T = list(ret[4]) if n > 0 else []
    print(f"\n  Modos: {n}")

    UX, UY, UZ, RZ = [], [], [], []
    if n > 0:
        ret2 = SM.Results.ModalParticipatingMassRatios(
            0,[],[],[],[],[],[],[],[],[],[],[],[],[],[],[])
        if ret2[0] > 0:
            UX = list(ret2[5]); UY = list(ret2[6])
            UZ = list(ret2[7]); RZ = list(ret2[13])
        print(f"\n  {'Modo':<5} {'T(s)':<10} {'Ux%':<8} {'Uy%':<8} {'Uz%':<8} {'Rz%':<8}")
        for i in range(min(8, n)):
            ux = UX[i]*100 if i<len(UX) else 0
            uy = UY[i]*100 if i<len(UY) else 0
            uz = UZ[i]*100 if i<len(UZ) else 0
            rz = RZ[i]*100 if i<len(RZ) else 0
            print(f"  {i+1:<5} {T[i]:<10.4f} {ux:<8.1f} {uy:<8.1f} {uz:<8.1f} {rz:<8.1f}")

    results[label] = {"label": label, "desc": desc, "T": T, "UX": UX, "UY": UY, "UZ": UZ, "RZ": RZ}

# Tabla comparativa final
print("\n" + "="*86)
print("  COMPARATIVA FINAL — Edificio 4×4 cols × 3 pisos · 3 modelados de losa")
print("="*86)
Tm = results["membrane"]["T"]
Ts = results["semirigid"]["T"]
Tr = results["rigid"]["T"]
print(f"  {'Modo':<5} {'T_Membrane':<13} {'T_SemiShell':<13} {'T_RigidShell':<14} {'Δ%(Mem-Sm)':<12} {'Δ%(Mem-Rg)':<12}")
print("  "+"-"*82)
n_modes = max(len(Tm), len(Ts), len(Tr))
for i in range(min(8, n_modes)):
    tm = Tm[i] if i < len(Tm) else 0
    ts = Ts[i] if i < len(Ts) else 0
    tr = Tr[i] if i < len(Tr) else 0
    d_ms = (tm-ts)/ts*100 if ts > 0 else 0
    d_mr = (tm-tr)/tr*100 if tr > 0 else 0
    print(f"  {i+1:<5} {tm:<13.4f} {ts:<13.4f} {tr:<14.4f} {d_ms:<+12.2f} {d_mr:<+12.2f}")

# JSON
with open(os.path.join(OUT, "comparativa_3_modelados.json"), "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)
print(f"\n  JSON: comparativa_3_modelados.json")
