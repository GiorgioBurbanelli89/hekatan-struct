# -*- coding: utf-8 -*-
"""SAP2000 Plate-Thick (Mindlin) vs Calcpad mindlin_completo.

Modelo identico al .cpd:
  Plate 6 x 4 x 0.4 m (lambda=15, slenderness moderada)
  E = 35 GPa, nu = 0.15
  q = 10 kN/m^2 uniforme
  Simply supported (perimetro: w=0, theta libres)
  6x4 = 24 elementos Q4

Calcpad analytical:
  w_Kirchhoff = 275.54 mm
  w_Mindlin   = 284.41 mm  (+3.22% por shear)
"""
import os, sys, time, comtypes.client

# Modelo Calcpad
A = 6.0; B = 4.0; T = 0.4; Q = 10.0  # kN/m2
E_KNM2 = 35e6; NU = 0.15
N_X = 6; N_Y = 4


def connect_sap():
    helper = comtypes.client.CreateObject("SAP2000v1.Helper")
    helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
    try:
        sap = comtypes.client.GetActiveObject("CSI.SAP2000.API.SapObject")
        _ = sap.SapModel.GetModelIsLocked()
        print("[OK] Conectado SAP existente", flush=True)
        return sap, sap.SapModel
    except: pass
    sap = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
    sap.ApplicationStart(6, True); time.sleep(8)
    return sap, sap.SapModel


def main():
    sap, sm = connect_sap()
    sm.InitializeNewModel(6); sm.File.NewBlank(); sm.SetPresentUnits(6)

    # Material
    sm.PropMaterial.SetMaterial("MAT35", 2)  # concrete-like
    sm.PropMaterial.SetMPIsotropic("MAT35", E_KNM2, NU, 1e-5)
    sm.PropMaterial.SetWeightAndMass("MAT35", 1, 0)  # peso 0 (no SW)

    # SAP shell types: 1=ShellThin, 2=ShellThick, 3=Membrane, 4=PlateThin, 5=PlateThick
    # Usamos 2 = ShellThick (Mindlin completo, full-shell con DOFs Uz+Rx+Ry+Ux+Uy)
    sm.PropArea.SetShell_1("PLATE_M", 2, False, "MAT35", 0.0, T, T)
    print(f"[OK] PlateThick: t={T}, E={E_KNM2}, nu={NU}", flush=True)

    # Mesh
    dx = A / N_X; dy = B / N_Y
    point_names = []
    nid = 1
    for j in range(N_Y + 1):
        row = []
        for i in range(N_X + 1):
            sm.PointObj.AddCartesian(float(i*dx), float(j*dy), 0.0, str(nid))
            row.append(str(nid)); nid += 1
        point_names.append(row)
    aid = 1
    for j in range(N_Y):
        for i in range(N_X):
            pts = [point_names[j][i], point_names[j][i+1],
                   point_names[j+1][i+1], point_names[j+1][i]]
            sm.AreaObj.AddByPoint(4, pts, str(aid), "PLATE_M")
            aid += 1
    print(f"[OK] {sm.PointObj.Count()} joints, {sm.AreaObj.Count()} elementos Q4", flush=True)

    # Apoyos perimetro: simply supported = w=0 (Uz), theta libres
    # En Plate solo hay Uz, Rx, Ry (no Ux, Uy). Pin = solo Uz fijo, rotaciones libres.
    n_apoyos = 0
    for j in range(N_Y + 1):
        for i in range(N_X + 1):
            x = i * dx; y = j * dy
            on_perim = (i == 0 or i == N_X or j == 0 or j == N_Y)
            if on_perim:
                # Uz fijo, Ux Uy fijos para estabilidad, rotaciones libres
                sm.PointObj.SetRestraint(point_names[j][i],
                    [True, True, True, False, False, False])
                n_apoyos += 1
    print(f"[OK] {n_apoyos} apoyos perimetro (simply supported)", flush=True)

    # Carga uniforme
    sm.LoadPatterns.SetSelfWTMultiplier("DEAD", 0)
    for ai in range(1, N_X*N_Y + 1):
        sm.AreaObj.SetLoadUniform(str(ai), "DEAD", Q, 10, True, "Global")
    print(f"[OK] q={Q} kN/m2 aplicada", flush=True)

    # Save + Run
    try: sm.Analyze.SetRunCaseFlag("MODAL", False)
    except: pass
    sdb = os.path.expanduser(rf"~\Documents\HekatanSapTest\plate_thick.sdb")
    os.makedirs(os.path.dirname(sdb), exist_ok=True)
    sm.File.Save(sdb)
    print(f"[..] RunAnalysis...", flush=True)
    ret = sm.Analyze.RunAnalysis()
    print(f"[OK] ret={ret}", flush=True); time.sleep(2)

    # Deflexion central (joint en x=A/2, y=B/2)
    sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
    sm.Results.Setup.SetCaseSelectedForOutput("DEAD")
    j_mid = N_Y // 2; i_mid = N_X // 2
    p_center = point_names[j_mid][i_mid]
    disp = sm.Results.JointDispl(p_center, 0)
    Uz_m = disp[8][0] if disp[0] > 0 else 0
    delta_mm = abs(Uz_m * 1000.0)

    # Buscar tambien max abs Uz en toda la placa
    max_delta = 0
    for jj in range(N_Y + 1):
        for ii in range(N_X + 1):
            disp_n = sm.Results.JointDispl(point_names[jj][ii], 0)
            if disp_n[0] > 0:
                v = abs(disp_n[8][0]) * 1000
                if v > max_delta: max_delta = v

    print(f"\n{'='*70}\n  RESULTADOS Plate-Thick (Mindlin) SAP2000\n{'='*70}")
    print(f"  Deflexion CENTRO  (x=A/2, y=B/2):  {delta_mm:>8.2f} mm")
    print(f"  Deflexion MAXIMA  (cualquier nodo): {max_delta:>8.2f} mm")
    print(f"\n  Calcpad referencia (analitico Timoshenko):")
    print(f"    Kirchhoff:  275.54 mm")
    print(f"    Mindlin:    284.41 mm  (+3.22%)")


if __name__ == "__main__":
    main()
