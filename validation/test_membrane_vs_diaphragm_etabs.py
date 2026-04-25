"""
Validación: Membrane Slab vs Flexible Diaphragm vs Rigid Diaphragm en ETABS.

Este script crea 3 modelos idénticos del mismo edificio (geometría, secciones,
material, cargas) cambiando solo el modo de modelado de la losa, y compara los
períodos modales. Útil para corroborar que ETABS NO da los mismos resultados
con membrane vs diaphragm flexible (como decía el amigo).

Requisitos:
    1. ETABS v19+ instalado y abierto (con un modelo vacío)
    2. pip install pythoncom comtypes
    3. Ejecutar este script desde Python — se conecta a la instancia abierta de ETABS

Salida:
    Tabla comparativa de los primeros 10 modos en los 3 escenarios:
    - Caso A: Slab as Membrane (Shell type = Membrane, no diaphragm constraint)
    - Caso B: Slab as Shell + Flexible Diaphragm Constraint
    - Caso C: Slab as Shell + Rigid Diaphragm Constraint
"""

import sys
import comtypes.client

# ── 1. Conectar a la instancia activa de ETABS ───────────────────────────
def connect_etabs():
    try:
        EtabsHelper = comtypes.client.GetActiveObject("ETABSv1.Helper")
    except (OSError, comtypes.COMError):
        # Si no hay instancia activa, lanzar ETABS
        EtabsHelper = comtypes.client.CreateObject("ETABSv1.Helper")
        ETABS = EtabsHelper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
        ETABS.ApplicationStart()
    else:
        ETABS = EtabsHelper.GetObject("CSI.ETABS.API.ETABSObject")
    return ETABS.SapModel


# ── 2. Construir un edificio de prueba 2x2x3 ────────────────────────────
def build_test_building(SapModel, slab_mode):
    """
    slab_mode:
      - 'membrane':       Slab as Membrane element (no diaphragm)
      - 'flex_diaphragm': Slab as Shell + Flexible Diaphragm
      - 'rigid_diaphragm': Slab as Shell + Rigid Diaphragm
    """
    SapModel.InitializeNewModel()
    SapModel.File.NewBlank()
    SapModel.SetPresentUnits(8)  # 8 = kN, m, C

    # Material — Hormigón f'c = 28 MPa
    SapModel.PropMaterial.SetMaterial("CONC", 2)  # 2 = Concrete
    SapModel.PropMaterial.SetMPIsotropic("CONC", 24855_000, 0.2, 0)

    # Sección de columna 0.40x0.40
    SapModel.PropFrame.SetRectangle("COL40", "CONC", 0.40, 0.40)
    # Sección de viga 0.30x0.40
    SapModel.PropFrame.SetRectangle("VIG30x40", "CONC", 0.40, 0.30)

    # Slab — espesor según el modo
    if slab_mode == "membrane":
        SapModel.PropArea.SetSlab("LOSA", 0, 1, "CONC", 0.15)  # 1 = Membrane
    else:
        SapModel.PropArea.SetSlab("LOSA", 0, 0, "CONC", 0.15)  # 0 = Shell

    # Geometría: 2x2 vanos x 3 pisos, vano = 5m, h_piso = 3m
    Lx, Ly, h = 5.0, 5.0, 3.0
    nv = 2  # vanos por dirección
    nP = 3  # pisos
    nodes = []
    # Crear todos los nodos
    for ip in range(nP + 1):
        for iy in range(nv + 1):
            for ix in range(nv + 1):
                x = ix * Lx
                y = iy * Ly
                z = ip * h
                nodes.append((x, y, z))
                ret, name = SapModel.PointObj.AddCartesian(x, y, z, "")

    def node_name(ix, iy, ip):
        idx = ip * (nv + 1) ** 2 + iy * (nv + 1) + ix
        return SapModel.PointObj.GetNameFromLabel(str(idx + 1), str(idx + 1))[1]

    # Columnas
    for ip in range(nP):
        for iy in range(nv + 1):
            for ix in range(nv + 1):
                p1 = node_name(ix, iy, ip)
                p2 = node_name(ix, iy, ip + 1)
                SapModel.FrameObj.AddByPoint(p1, p2, "", "COL40", "")

    # Vigas (X) y vigas (Y) en cada nivel
    for ip in range(1, nP + 1):
        for iy in range(nv + 1):
            for ix in range(nv):
                p1 = node_name(ix, iy, ip)
                p2 = node_name(ix + 1, iy, ip)
                SapModel.FrameObj.AddByPoint(p1, p2, "", "VIG30x40", "")
        for iy in range(nv):
            for ix in range(nv + 1):
                p1 = node_name(ix, iy, ip)
                p2 = node_name(ix, iy + 1, ip)
                SapModel.FrameObj.AddByPoint(p1, p2, "", "VIG30x40", "")

    # Losas en cada nivel (2x2 paneles)
    for ip in range(1, nP + 1):
        for iy in range(nv):
            for ix in range(nv):
                pts = [
                    node_name(ix, iy, ip),
                    node_name(ix + 1, iy, ip),
                    node_name(ix + 1, iy + 1, ip),
                    node_name(ix, iy + 1, ip),
                ]
                SapModel.AreaObj.AddByPoint(4, pts, "", "LOSA", "")

    # Diaphragm assignments
    if slab_mode == "flex_diaphragm" or slab_mode == "rigid_diaphragm":
        diaph_type = 1 if slab_mode == "rigid_diaphragm" else 2  # 1=Rigid, 2=Semi-Rigid
        for ip in range(1, nP + 1):
            d_name = f"D{ip}"
            SapModel.Diaphragm.SetDiaphragm(d_name, diaph_type == 1)
            for iy in range(nv + 1):
                for ix in range(nv + 1):
                    p = node_name(ix, iy, ip)
                    SapModel.PointObj.SetDiaphragm(p, 3, d_name)

    # Apoyos: empotrar nodos de la base
    for iy in range(nv + 1):
        for ix in range(nv + 1):
            p = node_name(ix, iy, 0)
            SapModel.PointObj.SetRestraint(p, [True] * 6)

    # Modal Analysis Case
    SapModel.LoadCases.ModalEigen.SetNumberModes("MODAL", 12, 1)


# ── 3. Correr análisis y leer modos ─────────────────────────────────────
def run_modal_and_read(SapModel):
    SapModel.Analyze.RunAnalysis()
    SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()
    SapModel.Results.Setup.SetCaseSelectedForOutput("MODAL")
    res = SapModel.Results.ModalPeriod()
    # res = (numResults, loadCase[], stepType[], stepNum[], period[], freq[],
    #        circFreq[], eigenVal[], ...)
    periods = list(res[4])  # períodos
    freqs = list(res[5])
    return list(zip(range(1, len(periods) + 1), periods, freqs))


# ── 4. Comparar tres escenarios ─────────────────────────────────────────
def main():
    print("Conectando a ETABS…")
    SapModel = connect_etabs()
    cases = ["membrane", "flex_diaphragm", "rigid_diaphragm"]
    results = {}
    for case in cases:
        print(f"\n=== Construyendo modelo: {case} ===")
        build_test_building(SapModel, case)
        SapModel.File.Save(f"validation_{case}.edb")
        print("Corriendo modal…")
        results[case] = run_modal_and_read(SapModel)

    # Tabla comparativa
    print("\n" + "=" * 70)
    print("RESULTADOS — Períodos de los 12 primeros modos (s)")
    print("=" * 70)
    print(f"{'Modo':<6} {'Membrane':<14} {'Flex Diaphragm':<18} {'Rigid Diaphragm':<18} {'Δ%(M-FD)':<12}")
    print("-" * 70)
    for i in range(12):
        T_m = results["membrane"][i][1]
        T_fd = results["flex_diaphragm"][i][1]
        T_rd = results["rigid_diaphragm"][i][1]
        delta = ((T_m - T_fd) / T_fd) * 100 if T_fd > 0 else 0
        print(f"{i + 1:<6} {T_m:<14.4f} {T_fd:<18.4f} {T_rd:<18.4f} {delta:+.2f}%")

    print("\nConclusión:")
    print("Si |Δ%(M-FD)| > 5%, Membrane ≠ Flexible Diaphragm — confirma que dan")
    print("resultados diferentes (lo que decía tu amigo).")


if __name__ == "__main__":
    main()
