# -*- coding: utf-8 -*-
"""
Script SIMPLE: solo conecta a ETABS abierto y construye 1 modelo MEMBRANE.
Para iterar: cambiar SLAB_MODE arriba y volver a correr.
"""
import os, sys, time, json
import comtypes.client

sys.stdout.reconfigure(encoding='utf-8')

SLAB_MODE = "membrane"   # "membrane" | "semi_rigid"

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

# Conectar
print("Conectando…")
obj = comtypes.client.GetActiveObject("CSI.ETABS.API.ETABSObject")
SapModel = obj.SapModel
print(f"[OK] Conectado. Filename actual: {SapModel.GetModelFilename()}")

# Inicializar — pasar el unitcode directo a InitializeNewModel
# Códigos: 1=lb_in_F, 2=lb_ft_F, 3=kip_in_F, 4=kip_ft_F, 5=kN_mm_C, 6=kN_m_C,
#          7=kgf_mm_C, 8=kgf_m_C, 9=N_mm_C, 10=N_m_C, 11=Ton_mm_C, 12=Ton_m_C
print("InitializeNewModel(6=kN_m_C)…")
ret = SapModel.InitializeNewModel(6)
print(f"  ret={ret}")
print("NewBlank…")
ret = SapModel.File.NewBlank()
print(f"  ret={ret}")

# Material — unidades kN-m-C (no convertir)
print("Material…")
SapModel.PropMaterial.SetMaterial("CONC", 2)
SapModel.PropMaterial.SetMPIsotropic("CONC", E_KNM2, NU, 1e-5)
SapModel.PropMaterial.SetWeightAndMass("CONC", 1, RHO_KNM3)

# Secciones
print("Secciones…")
SapModel.PropFrame.SetRectangle("COL", "CONC", COL_H, COL_B)
SapModel.PropFrame.SetRectangle("VIG", "CONC", VIG_H, VIG_B)

# Slab
shell_type = 3 if SLAB_MODE == "membrane" else 1
SapModel.PropArea.SetSlab("LOSA", 0, shell_type, "CONC", LOSA_E)
print(f"Slab ShellType={shell_type}")

if SLAB_MODE == "semi_rigid":
    SapModel.Diaphragm.SetDiaphragm("D1", True)

# Geometría
print("Construyendo geometría…")
pts = {}
pid = 0
for ip in range(NP+1):
    for iy in range(NY+1):
        for ix in range(NX+1):
            ret = SapModel.PointObj.AddCartesian(ix*DX, iy*DY, ip*HP, "", f"P{pid}")
            pts[(ix,iy,ip)] = ret[0] if isinstance(ret, tuple) else f"P{pid}"
            pid += 1
print(f"  Puntos: {pid}")

# Frames
n_col = 0
for ip in range(NP):
    for iy in range(NY+1):
        for ix in range(NX+1):
            SapModel.FrameObj.AddByPoint(pts[(ix,iy,ip)], pts[(ix,iy,ip+1)],
                                          "", "COL", f"C{ip}_{ix}_{iy}")
            n_col += 1
n_vig = 0
for ip in range(1, NP+1):
    for iy in range(NY+1):
        for ix in range(NX):
            SapModel.FrameObj.AddByPoint(pts[(ix,iy,ip)], pts[(ix+1,iy,ip)],
                                          "", "VIG", f"VX{ip}_{ix}_{iy}")
            n_vig += 1
    for iy in range(NY):
        for ix in range(NX+1):
            SapModel.FrameObj.AddByPoint(pts[(ix,iy,ip)], pts[(ix,iy+1,ip)],
                                          "", "VIG", f"VY{ip}_{ix}_{iy}")
            n_vig += 1
print(f"  Cols: {n_col}, Vigas: {n_vig}")

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

# Diaphragm assignment
if SLAB_MODE == "semi_rigid":
    for ip in range(1, NP+1):
        for iy in range(NY+1):
            for ix in range(NX+1):
                SapModel.PointObj.SetDiaphragm(pts[(ix,iy,ip)], 3, "D1")

# Restraints
for iy in range(NY+1):
    for ix in range(NX+1):
        SapModel.PointObj.SetRestraint(pts[(ix,iy,0)], [True]*6)

SapModel.View.RefreshView(0, False)

# Save
save = os.path.join(OUT_DIR, f"edif_{SLAB_MODE}.edb")
SapModel.File.Save(save)
print(f"Guardado: {os.path.basename(save)}")

# Run
print("Corriendo análisis…")
SapModel.SetModelIsLocked(False)
SapModel.Analyze.SetRunCaseFlag("", False, True)
SapModel.Analyze.SetRunCaseFlag("Modal", True)
ret = SapModel.Analyze.RunAnalysis()
print(f"  RunAnalysis ret={ret}")

# Verificar status
status = SapModel.Analyze.GetCaseStatus()
print(f"Status: {list(status[1])} → {list(status[2])}")

# Resultados
SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
SapModel.Results.Setup.SetCaseSelectedForOutput("Modal")
ret = SapModel.Results.ModalPeriod(0,[],[],[],[],[],[],[])
n = ret[0]
T = list(ret[4]) if n > 0 else []
print(f"\n--- {SLAB_MODE.upper()} — {n} modos ---")
for i in range(min(8, len(T))):
    print(f"  Modo {i+1}: T = {T[i]:.4f} s")

# Mass participation
ret2 = SapModel.Results.ModalParticipatingMassRatios(
    0,[],[],[],[],[],[],[],[],[],[],[],[],[],[],[])
if ret2[0] > 0:
    print(f"\n  {'Modo':<5} {'T(s)':<10} {'Ux%':<8} {'Uy%':<8} {'Rz%':<8}")
    for i in range(min(8, ret2[0])):
        print(f"  {i+1:<5} {T[i]:<10.4f} {ret2[5][i]*100:<8.1f} {ret2[6][i]*100:<8.1f} {ret2[13][i]*100:<8.1f}")

# Save
out_path = os.path.join(OUT_DIR, f"results_{SLAB_MODE}.json")
out_data = {"label": SLAB_MODE, "T": T,
            "UX": list(ret2[5]) if ret2[0]>0 else [],
            "UY": list(ret2[6]) if ret2[0]>0 else [],
            "RZ": list(ret2[13]) if ret2[0]>0 else []}
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out_data, f, indent=2)
print(f"\nJSON: {os.path.basename(out_path)}")
print("Done. ETABS sigue abierto.")
