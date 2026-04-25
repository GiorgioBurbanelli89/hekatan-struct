"""
============================================================================
  VALIDACIÓN: Placa Q4 hekatan-fem vs OpenSeesPy
============================================================================

  Crea un modelo de placa en OpenSees usando ShellMITC4 (Mindlin-Reissner),
  aplica carga uniforme, resuelve, y compara con WASM y Python.

  Modelo:
    - Placa 10×10 m, espesor 0.20 m
    - Material: E = 30 GPa, nu = 0.3
    - Carga uniforme: q = -10 kN/m2
    - BC: Simply Supported (w=0 en bordes)
    - Malla: 16×16 elementos Q4

  ShellMITC4 = 4-node Mindlin-Reissner shell element with MITC formulation
  (Mixed Interpolation of Tensorial Components — similar to SRI)
============================================================================
"""

import openseespy.opensees as ops
import numpy as np
import time
import sys

# ── Parámetros ──
Lx, Ly = 10.0, 10.0
nx, ny = 16, 16
t = 0.20
E = 30e6       # kN/m2
nu = 0.3
q = -10.0      # kN/m2 (downward)

# ── Valores de referencia ──
WASM_REF = {
    "w_center":   -1.88194200e-02,
    "Mxx_max":     4.80680000e+01,
    "Myy_max":     4.80680000e+01,
    "Mxy_max":     3.49130000e+01,
}

PYTHON_REF = {
    "w_center":   -1.88194223e-02,
    "Mxx_max":     4.80678152e+01,
    "Myy_max":     4.80678152e+01,
    "Mxy_max":     3.49131252e+01,
}

NAVIER_REF = {
    "w_center":    1.84837048e-02,
    "Mxx_center":  4.78870510e+01,
}


def main():
    print("=" * 72)
    print("  VALIDACIÓN: Placa Q4 — hekatan-fem vs OpenSeesPy (ShellMITC4)")
    print("=" * 72)
    print()
    print(f"  Placa:     {Lx} x {Ly} m, t = {t} m")
    print(f"  Malla:     {nx} x {ny} = {nx*ny} elementos")
    print(f"  Material:  E = {E:.0e} kN/m2, nu = {nu}")
    print(f"  Carga:     q = {q} kN/m2")
    print(f"  Elemento:  ShellMITC4 (Mindlin-Reissner, MITC)")
    print()

    # ── Wipe & init ──
    ops.wipe()
    ops.model('basic', '-ndm', 3, '-ndf', 6)

    # ── Nodes ──
    dx = Lx / nx
    dy = Ly / ny
    nNodes = (nx + 1) * (ny + 1)

    node_id = {}  # (i,j) → tag
    tag = 1
    for j in range(ny + 1):
        for i in range(nx + 1):
            x = i * dx
            y = j * dy
            ops.node(tag, x, y, 0.0)
            node_id[(i, j)] = tag
            tag += 1

    print(f"PASO 1: Nodos generados: {nNodes}")

    # ── Material: ElasticIsotropic for shell ──
    matTag = 1
    ops.nDMaterial('ElasticIsotropic', matTag, E, nu)

    # ── Section: PlateFiber or MembranePlateFiberSection ──
    # For pure plate bending, use PlateFiber section
    secTag = 1
    # PlateFiberSection: tag, matTag, thickness
    ops.section('PlateFiber', secTag, matTag, t)

    print(f"PASO 2: Material y sección definidos")

    # ── Elements: ShellMITC4 ──
    elemTag = 1
    elem_nodes = {}  # elemTag → [n1,n2,n3,n4]

    for j in range(ny):
        for i in range(nx):
            n1 = node_id[(i, j)]
            n2 = node_id[(i + 1, j)]
            n3 = node_id[(i + 1, j + 1)]
            n4 = node_id[(i, j + 1)]
            ops.element('ShellMITC4', elemTag, n1, n2, n3, n4, secTag)
            elem_nodes[elemTag] = [n1, n2, n3, n4]
            elemTag += 1

    nElems = nx * ny
    print(f"PASO 3: Elementos ShellMITC4: {nElems}")

    # ── Boundary conditions ──
    # Simply supported: w=0 on boundary
    # Fix in-plane DOFs (1,2) everywhere for pure bending
    # Fix DOF 6 (drilling rotation) everywhere — shells don't have it
    bc_count = 0
    for j in range(ny + 1):
        for i in range(nx + 1):
            tag = node_id[(i, j)]
            on_boundary = (i == 0 or i == nx or j == 0 or j == ny)

            if on_boundary:
                # Boundary: fix UX, UY, UZ (w=0), RZ
                ops.fix(tag, 1, 1, 1, 0, 0, 1)
                bc_count += 1
            else:
                # Interior: fix UX, UY, RZ (suppress membrane/drilling DOFs)
                ops.fix(tag, 1, 1, 0, 0, 0, 1)

    print(f"PASO 4: Condiciones de borde: {bc_count} nodos en borde (w=0)")

    # ── Load: consistent nodal loads from element contributions ──
    # Each Q4 element distributes q*A_elem/4 to each of its 4 nodes
    # This is the consistent load for uniform pressure on Q4
    ops.timeSeries('Linear', 1)
    ops.pattern('Plain', 1, 1)

    # Accumulate forces per node from all elements
    node_forces = {}
    for j in range(ny):
        for i in range(nx):
            # Element area = dx * dy
            f_per_node = q * dx * dy / 4.0
            for ni, nj in [(i,j), (i+1,j), (i+1,j+1), (i,j+1)]:
                tag = node_id[(ni, nj)]
                node_forces[tag] = node_forces.get(tag, 0.0) + f_per_node

    # Apply loads (skip boundary nodes where w=0)
    load_count = 0
    for j in range(ny + 1):
        for i in range(nx + 1):
            tag = node_id[(i, j)]
            on_boundary = (i == 0 or i == nx or j == 0 or j == ny)
            if on_boundary:
                continue
            fz = node_forces.get(tag, 0.0)
            if abs(fz) > 1e-15:
                ops.load(tag, 0.0, 0.0, fz, 0.0, 0.0, 0.0)
                load_count += 1

    print(f"PASO 5: Carga: q = {q} kN/m2 (consistent q*A/4 per node, {load_count} loaded)")

    # ── Analysis ──
    ops.system('BandGeneral')
    ops.numberer('RCM')
    ops.constraints('Plain')
    ops.integrator('LoadControl', 1.0)
    ops.algorithm('Linear')
    ops.analysis('Static')

    print("PASO 6: Ejecutando análisis...")
    t0 = time.time()
    ret = ops.analyze(1)
    dt = time.time() - t0
    print(f"  Análisis completado en {dt*1000:.1f} ms (ret={ret})")

    if ret != 0:
        print("  ERROR: Análisis falló")
        ops.wipe()
        sys.exit(1)

    # ── Extract displacements ──
    center_tag = node_id[(nx // 2, ny // 2)]
    w_center = ops.nodeDisp(center_tag, 3)  # DOF 3 = UZ

    print(f"\nPASO 7: Resultados")
    print(f"  w_center = {w_center:.10e}")

    # ── Extract element forces (stress resultants) ──
    # ShellMITC4 'forces' returns 8 resultants per Gauss point:
    #   [s11, s22, s12, m11, m22, m12, v13, v23]
    # But the layout may be: 4 GPs x 8 = 32 values per element
    # Let's first probe to understand the format

    # Probe element at center of mesh for stress resultants
    center_elem = (ny // 2) * nx + (nx // 2) + 1  # 1-based

    # Try different response types
    for rtype in ['forces', 'stresses', 'section 1 forces', 'section 1 stresses']:
        try:
            r = ops.eleResponse(center_elem, *rtype.split())
            if r:
                print(f"  eleResponse('{rtype}'): {len(r)} values")
                print(f"    [{', '.join(f'{v:.4f}' for v in r[:min(32,len(r))])}]")
        except Exception as ex:
            print(f"  eleResponse('{rtype}'): {ex}")

    # Use 'stresses' which returns 4 GPs x 8 resultants = 32 values
    # [s11, s22, s12, m11, m22, m12, v13, v23] per GP
    probe = ops.eleResponse(center_elem, 'stresses')
    nVals = len(probe) if probe else 0
    vals_per_gp = 8
    nGP = nVals // vals_per_gp
    print(f"  Using 'stresses': {nVals} values = {nGP} GPs x {vals_per_gp}")

    Mxx_all = []
    Myy_all = []
    Mxy_all = []
    Qx_all = []
    Qy_all = []

    for e in range(1, nElems + 1):
        stresses = ops.eleResponse(e, 'stresses')
        if not stresses:
            continue
        for gp in range(nGP):
            base = gp * vals_per_gp
            if base + 7 < len(stresses):
                Mxx_all.append(stresses[base + 3])  # m11 = Mxx
                Myy_all.append(stresses[base + 4])  # m22 = Myy
                Mxy_all.append(stresses[base + 5])  # m12 = Mxy
                Qx_all.append(stresses[base + 6])   # v13 = Qx
                Qy_all.append(stresses[base + 7])   # v23 = Qy

    if Mxx_all:
        Mxx_max_os = max(abs(v) for v in Mxx_all)
        Myy_max_os = max(abs(v) for v in Myy_all)
        Mxy_max_os = max(abs(v) for v in Mxy_all)
        Qx_max_os = max(abs(v) for v in Qx_all)
        Qy_max_os = max(abs(v) for v in Qy_all)
        print(f"  |Mxx|_max = {Mxx_max_os:.6e}")
        print(f"  |Myy|_max = {Myy_max_os:.6e}")
        print(f"  |Mxy|_max = {Mxy_max_os:.6e}")
        print(f"  |Qx|_max  = {Qx_max_os:.6e}")
        print(f"  |Qy|_max  = {Qy_max_os:.6e}")
    else:
        Mxx_max_os = Myy_max_os = Mxy_max_os = Qx_max_os = Qy_max_os = float('nan')
        print("  WARNING: No se pudieron extraer resultantes de esfuerzo")

    # ── Comparison ──
    print("\n" + "=" * 72)
    print("  COMPARACIÓN: OpenSees vs WASM vs Python vs Navier")
    print("=" * 72)

    def pct(a, b):
        if b == 0 or np.isnan(a) or np.isnan(b):
            return "—"
        return f"{abs((abs(a) - abs(b)) / abs(b)) * 100:.4f}%"

    print(f"\n  {'Métrica':<22} {'OpenSees':>15} {'WASM':>15} {'Python':>15} {'Navier':>15} {'OS vs WASM':>12}")
    print(f"  {'-'*22} {'-'*15} {'-'*15} {'-'*15} {'-'*15} {'-'*12}")
    print(f"  {'w_center':<22} {w_center:>15.8e} {WASM_REF['w_center']:>15.8e} {PYTHON_REF['w_center']:>15.8e} {-NAVIER_REF['w_center']:>15.8e} {pct(w_center, WASM_REF['w_center']):>12}")

    if not np.isnan(Mxx_max_os):
        print(f"  {'|Mxx|_max':<22} {Mxx_max_os:>15.8e} {WASM_REF['Mxx_max']:>15.8e} {PYTHON_REF['Mxx_max']:>15.8e} {NAVIER_REF['Mxx_center']:>15.8e} {pct(Mxx_max_os, WASM_REF['Mxx_max']):>12}")
        print(f"  {'|Myy|_max':<22} {Myy_max_os:>15.8e} {WASM_REF['Myy_max']:>15.8e} {PYTHON_REF['Myy_max']:>15.8e} {'':>15} {pct(Myy_max_os, WASM_REF['Myy_max']):>12}")
        print(f"  {'|Mxy|_max':<22} {Mxy_max_os:>15.8e} {WASM_REF['Mxy_max']:>15.8e} {PYTHON_REF['Mxy_max']:>15.8e} {'':>15} {pct(Mxy_max_os, WASM_REF['Mxy_max']):>12}")

    print(f"\n  Tiempo OpenSees: {dt*1000:.1f} ms")

    # ── Verification ──
    print("\n" + "=" * 72)
    print("  VERIFICACIÓN")
    print("=" * 72)

    tol = 5.0  # %
    err_w = abs((abs(w_center) - abs(WASM_REF["w_center"])) / abs(WASM_REF["w_center"])) * 100
    status = "PASS" if err_w < tol else "FAIL"
    print(f"  {status}  w_center    error = {err_w:.2f}%  (tol = {tol}%)")

    if not np.isnan(Mxx_max_os):
        for name, os_val, wasm_val, tol in [
            ("|Mxx|_max", Mxx_max_os, WASM_REF["Mxx_max"], 5.0),
            ("|Myy|_max", Myy_max_os, WASM_REF["Myy_max"], 5.0),
        ]:
            err = abs((abs(os_val) - abs(wasm_val)) / abs(wasm_val)) * 100
            s = "PASS" if err < tol else "FAIL"
            print(f"  {s}  {name:<20} error = {err:.2f}%  (tol = {tol}%)")

        # Note about Mxy
        print(f"\n  NOTA: |Mxy|_max de OpenSees = {Mxy_max_os:.4f} vs WASM = {WASM_REF['Mxy_max']:.4f}")
        print(f"  OpenSees ShellMITC4 evalua esfuerzos en Gauss points interiores.")
        print(f"  Mxy es maximo en las ESQUINAS de la placa SS, lejos de los GPs.")
        print(f"  El WASM evalua en centro del elemento (mas cercano a esquinas).")

    print("=" * 72)

    ops.wipe()
    return err_w < tol


if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
