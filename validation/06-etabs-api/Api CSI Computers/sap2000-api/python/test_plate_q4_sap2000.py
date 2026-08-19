# -*- coding: utf-8 -*-
"""
Placa Q4 hekatan-fem WASM vs SAP2000 v24
========================================
Basado en 02_zapata_plate_comparison.py (ejemplo funcional)

  Placa 10x10 m, t=0.20 m, E=30 GPa, nu=0.3
  Carga uniforme q=-10 kN/m2, Simply Supported
  Malla 16x16 elementos Q4
"""

import math
import sys
import os
import time

# ── Datos ──
a, b = 10.0, 10.0
t = 0.20
E = 30e6       # kN/m2
nu = 0.3
q = -10.0      # kN/m2
nx, ny = 16, 16

D0 = E * t**3 / (12 * (1 - nu**2))

# ── Referencia WASM ──
WASM = {
    "w":   -1.88194200e-02,
    "Mxx":  4.80680000e+01,
    "Myy":  4.80680000e+01,
    "Mxy":  3.49130000e+01,
}

# ── Navier (uniforme, SS) ──
w_nav = 0
Mx_nav = 0
for m in range(1, 100, 2):
    for n in range(1, 100, 2):
        am = (m * math.pi / a)**2 + (n * math.pi / b)**2
        qmn = 16 * abs(q) / (math.pi**2 * m * n)
        wmn = qmn / (D0 * am**2)
        w_nav += wmn * math.sin(m*math.pi/2) * math.sin(n*math.pi/2)
        Mx_nav += -D0*((m*math.pi/a)**2 + nu*(n*math.pi/b)**2) * wmn * math.sin(m*math.pi/2) * math.sin(n*math.pi/2)

print(f"Placa {a}x{b}m, t={t}m, E={E:.0e}, nu={nu}, q={q}")
print(f"D0 = {D0:.2f}")
print(f"Navier: w_centro = {w_nav*1000:.4f} mm, Mxx = {abs(Mx_nav):.4f}")
print()

# ── SAP2000 ──
print("="*70)
print("SAP2000 v24 - Plate-Thick (Mindlin)")
print("="*70)

try:
    import comtypes.client

    # Conectar o iniciar (patron de 02_zapata)
    try:
        mySapObject = comtypes.client.GetActiveObject("CSI.SAP2000.API.SapObject")
        SapModel = mySapObject.SapModel
        _ = SapModel.GetModelIsLocked()
        print("  Conectado a SAP2000 existente")
    except:
        print("  Iniciando SAP2000...")
        helper = comtypes.client.CreateObject('SAP2000v1.Helper')
        helper = helper.QueryInterface(comtypes.gen.SAP2000v1.cHelper)
        mySapObject = helper.CreateObjectProgID("CSI.SAP2000.API.SapObject")
        mySapObject.ApplicationStart(6, True)  # kN-m
        time.sleep(8)
        SapModel = mySapObject.SapModel
        print("  SAP2000 iniciado")

    # Modelo nuevo
    SapModel.InitializeNewModel(6)  # kN, m
    SapModel.File.NewBlank()

    # Material
    MATNAME = "PLACA_MAT"
    SapModel.PropMaterial.SetMaterial(MATNAME, 1)  # 1 = Steel (isotropic)
    SapModel.PropMaterial.SetMPIsotropic(MATNAME, E, nu, 0.0)

    # Shell: Plate-Thick (tipo 4 = Mindlin)
    SHELLNAME = "PLATE_Q4"
    SapModel.PropArea.SetShell_1(SHELLNAME, 4, False, MATNAME, 0, t, t)
    print(f"  Shell: Plate-Thick, t={t}m")

    # Nodos
    dx = a / nx
    dy = b / ny
    node_map = {}
    for j in range(ny + 1):
        for i in range(nx + 1):
            x = i * dx
            y = j * dy
            nid = str(j * (nx + 1) + i + 1)
            SapModel.PointObj.AddCartesian(float(x), float(y), 0.0, nid)
            node_map[(i, j)] = nid

    # Areas quad
    elem_names = []
    for j in range(ny):
        for i in range(nx):
            p = [node_map[(i,j)], node_map[(i+1,j)],
                 node_map[(i+1,j+1)], node_map[(i,j+1)]]
            aname = str(j * nx + i + 1)
            SapModel.AreaObj.AddByPoint(4, p, aname, SHELLNAME)
            elem_names.append(aname)

    print(f"  {SapModel.PointObj.Count()} nodos, {SapModel.AreaObj.Count()} areas")

    # Apoyos: UZ=0 en bordes (SS)
    n_apoyos = 0
    for j in range(ny + 1):
        for i in range(nx + 1):
            en_borde = (i == 0 or i == nx or j == 0 or j == ny)
            if en_borde:
                SapModel.PointObj.SetRestraint(
                    node_map[(i, j)],
                    [False, False, True, False, False, False]  # Solo UZ=0
                )
                n_apoyos += 1
    print(f"  {n_apoyos} nodos apoyados (UZ=0 en bordes)")

    # Peso propio = 0
    SapModel.LoadPatterns.SetSelfWTMultiplier("DEAD", 0)

    # Carga uniforme en todas las areas
    for aname in elem_names:
        SapModel.AreaObj.SetLoadUniform(aname, "DEAD", float(q), 6, True)
    print(f"  Carga uniforme q={q} kN/m2")

    # Guardar y analizar
    temp_path = os.path.join(os.environ.get('TEMP', r'C:\Temp'), 'plate_q4_test.sdb')
    SapModel.File.Save(temp_path)

    try:
        SapModel.Analyze.SetRunCaseFlag("MODAL", False)
    except:
        pass

    print("  Analizando...")
    t0 = time.time()
    ret = SapModel.Analyze.RunAnalysis()
    dt = time.time() - t0
    time.sleep(2)
    print(f"  Analisis completado en {dt:.1f} s (ret={ret})")

    w_sap = None
    Mxx_sap = None
    Myy_sap = None
    Mxy_sap = None

    if ret == 0:
        SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
        SapModel.Results.Setup.SetCaseSelectedForOutput("DEAD")

        # Desplazamiento central
        nudo_centro = node_map[(nx//2, ny//2)]
        result = SapModel.Results.JointDispl(nudo_centro, 0)
        if result[0] > 0:
            w_sap = result[8][0]  # U3
            print(f"\n  w_centro = {w_sap*1000:.4f} mm = {w_sap:.8e} m")

        # Momentos: usar AreaForceShell (como en 02_zapata)
        M11_all, M22_all, M12_all = [], [], []
        for aname in elem_names:
            result = SapModel.Results.AreaForceShell(aname, 0)
            if result[0] > 0:
                M11_all.extend(result[14])  # M11 = Mxx
                M22_all.extend(result[15])  # M22 = Myy
                M12_all.extend(result[16])  # M12 = Mxy

        if M11_all:
            Mxx_sap = max(abs(v) for v in M11_all)
            Myy_sap = max(abs(v) for v in M22_all)
            Mxy_sap = max(abs(v) for v in M12_all)
            print(f"  |Mxx|_max = {Mxx_sap:.6e}")
            print(f"  |Myy|_max = {Myy_sap:.6e}")
            print(f"  |Mxy|_max = {Mxy_sap:.6e}")

            # Centro: promediar 4 elementos centrales
            areas_centro = []
            for j in [ny//2 - 1, ny//2]:
                for i in [nx//2 - 1, nx//2]:
                    areas_centro.append(str(j * nx + i + 1))
            M11c, M22c = [], []
            for ac in areas_centro:
                r = SapModel.Results.AreaForceShell(ac, 0)
                if r[0] > 0:
                    M11c.extend(r[14])
                    M22c.extend(r[15])
            if M11c:
                print(f"  Mxx_centro (avg) = {sum(M11c)/len(M11c):.4f}")
                print(f"  Myy_centro (avg) = {sum(M22c)/len(M22c):.4f}")

    else:
        print(f"  ERROR: RunAnalysis retorno {ret}")

    # ── Comparacion ──
    print("\n" + "="*70)
    print("COMPARACION: SAP2000 vs WASM vs Navier")
    print("="*70)

    def pct(a_val, b_val):
        if b_val == 0: return "---"
        return f"{abs((abs(a_val)-abs(b_val))/abs(b_val))*100:.2f}%"

    print(f"\n  {'Metrica':<20} {'SAP2000':>15} {'WASM':>15} {'Navier':>15} {'SAP vs WASM':>12}")
    print(f"  {'-'*20} {'-'*15} {'-'*15} {'-'*15} {'-'*12}")
    if w_sap is not None:
        print(f"  {'w_center':<20} {w_sap:>15.8e} {WASM['w']:>15.8e} {-w_nav:>15.8e} {pct(w_sap, WASM['w']):>12}")
    if Mxx_sap is not None:
        print(f"  {'|Mxx|_max':<20} {Mxx_sap:>15.8e} {WASM['Mxx']:>15.8e} {abs(Mx_nav):>15.8e} {pct(Mxx_sap, WASM['Mxx']):>12}")
    if Myy_sap is not None:
        print(f"  {'|Myy|_max':<20} {Myy_sap:>15.8e} {WASM['Myy']:>15.8e} {'':>15} {pct(Myy_sap, WASM['Myy']):>12}")
    if Mxy_sap is not None:
        print(f"  {'|Mxy|_max':<20} {Mxy_sap:>15.8e} {WASM['Mxy']:>15.8e} {'':>15} {pct(Mxy_sap, WASM['Mxy']):>12}")

    # Verificacion
    print("\n" + "="*70)
    print("VERIFICACION")
    print("="*70)
    all_pass = True
    if w_sap is not None:
        err = abs((abs(w_sap)-abs(WASM['w']))/abs(WASM['w']))*100
        s = "PASS" if err < 5 else "FAIL"
        if s == "FAIL": all_pass = False
        print(f"  {s}  w_center    error = {err:.2f}%")
    if Mxx_sap is not None:
        err = abs((Mxx_sap-WASM['Mxx'])/WASM['Mxx'])*100
        s = "PASS" if err < 5 else "FAIL"
        if s == "FAIL": all_pass = False
        print(f"  {s}  |Mxx|_max   error = {err:.2f}%")
    if Myy_sap is not None:
        err = abs((Myy_sap-WASM['Myy'])/WASM['Myy'])*100
        s = "PASS" if err < 5 else "FAIL"
        if s == "FAIL": all_pass = False
        print(f"  {s}  |Myy|_max   error = {err:.2f}%")
    if Mxy_sap is not None:
        err = abs((Mxy_sap-WASM['Mxy'])/WASM['Mxy'])*100
        s = "PASS" if err < 10 else "FAIL"
        if s == "FAIL": all_pass = False
        print(f"  {s}  |Mxy|_max   error = {err:.2f}%")

    if all_pass:
        print("\n  TODOS LOS TESTS PASAN")
    print("="*70)

    # Guardar modelo final
    save_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "plate_q4_sap2000.sdb")
    SapModel.File.Save(save_path)
    print(f"\n  Modelo guardado: {save_path}")
    print("  SAP2000 queda abierto para inspeccion.")

except Exception as ex:
    print(f"  ERROR: {ex}")
    import traceback
    traceback.print_exc()
