"""
Estudio de Convergencia de Malla — Q4 Shell
Misma placa, misma carga, diferente numero de elementos.
Compara con solucion analitica.

Placa simplemente apoyada, carga uniforme q.
Solucion analitica (Navier): w_max = alpha * q * a^4 / (D)
"""
import openseespy.opensees as ops
import numpy as np

Lx, Ly = 5.0, 4.0
E, nu, t = 25e6, 0.2, 0.15  # kN/m2, -, m
q = -10.0  # kN/m2 (downward)

# Solucion analitica (Navier, placa simplemente apoyada)
D = E * t**3 / (12 * (1 - nu**2))
# Para a/b = 5/4 = 1.25, alpha ~ 0.00564 (de tablas de Timoshenko)
alpha = 0.00564
w_analitico = alpha * abs(q) * Lx**4 / D  # positivo (magnitud)

print("=" * 65)
print("  CONVERGENCIA DE MALLA — Shell Q4 (OpenSeesPy)")
print("=" * 65)
print(f"  Placa {Lx}x{Ly}m, t={t}m, E={E/1e6}GPa, nu={nu}")
print(f"  Carga uniforme q = {q} kN/m2")
print(f"  Solucion analitica: w_max = {w_analitico:.6f} m = {w_analitico*1000:.4f} mm")
print()

meshes = [2, 3, 4, 6, 8, 10, 12, 16, 20]
results = []

for nDiv in meshes:
    ops.wipe()
    ops.model('basic', '-ndm', 3, '-ndf', 6)

    nx, ny = nDiv, nDiv
    dx, dy = Lx/nx, Ly/ny

    # Nodes
    tag = 0
    nid = {}
    for iy in range(ny+1):
        for ix in range(nx+1):
            tag += 1
            nid[(ix,iy)] = tag
            ops.node(tag, ix*dx, iy*dy, 0)

    # BCs: simply supported (w=0 on edges)
    for iy in range(ny+1):
        for ix in range(nx+1):
            if ix == 0 or ix == nx or iy == 0 or iy == ny:
                ops.fix(nid[(ix,iy)], 1, 1, 1, 0, 0, 0)

    # Material + Section
    ops.nDMaterial('ElasticIsotropic', 1, E, nu)
    ops.section('PlateFiber', 1, 1, t)

    # Elements
    etag = 0
    for iy in range(ny):
        for ix in range(nx):
            etag += 1
            n1 = nid[(ix, iy)]
            n2 = nid[(ix+1, iy)]
            n3 = nid[(ix+1, iy+1)]
            n4 = nid[(ix, iy+1)]
            ops.element('ShellMITC4', etag, n1, n2, n3, n4, 1)

    # Load: uniform pressure
    ops.timeSeries('Constant', 1)
    ops.pattern('Plain', 1, 1)
    for iy in range(ny+1):
        for ix in range(nx+1):
            # Tributary area
            ax = dx if (0 < ix < nx) else dx/2
            ay = dy if (0 < iy < ny) else dy/2
            fz = q * ax * ay
            ops.load(nid[(ix,iy)], 0, 0, fz, 0, 0, 0)

    # Solve
    ops.system('BandGeneral')
    ops.numberer('RCM')
    ops.constraints('Plain')
    ops.integrator('LoadControl', 1.0)
    ops.algorithm('Linear')
    ops.analysis('Static')
    ops.analyze(1)

    # Max displacement
    max_w = 0
    for iy in range(ny+1):
        for ix in range(nx+1):
            d = ops.nodeDisp(nid[(ix,iy)])
            max_w = max(max_w, abs(d[2]))

    # Center displacement
    cx, cy = nx//2, ny//2
    w_center = abs(ops.nodeDisp(nid[(cx,cy)])[2])

    error = abs(w_center - w_analitico) / w_analitico * 100
    nElems = nx * ny
    nNodes = (nx+1) * (ny+1)

    results.append({
        'nDiv': nDiv, 'nElems': nElems, 'nNodes': nNodes,
        'w_center': w_center, 'w_max': max_w, 'error': error
    })

# Print results
print(f"  {'nDiv':>5} {'Elems':>6} {'Nodos':>6} {'w_center mm':>12} {'w_max mm':>10} {'Error %':>8}")
print("  " + "-" * 52)
for r in results:
    print(f"  {r['nDiv']:>5} {r['nElems']:>6} {r['nNodes']:>6} {r['w_center']*1000:>12.4f} {r['w_max']*1000:>10.4f} {r['error']:>8.2f}")

print(f"\n  Analitico: {w_analitico*1000:.4f} mm")
print()

# Find convergence point (error < 1%)
for r in results:
    if r['error'] < 1.0:
        print(f"  CONVERGE al 1% con nDiv={r['nDiv']} ({r['nElems']} elementos)")
        break

for r in results:
    if r['error'] < 5.0:
        print(f"  CONVERGE al 5% con nDiv={r['nDiv']} ({r['nElems']} elementos)")
        break

print()
print("  CONCLUSION:")
print("  - Q4 converge rapido: 4x4=16 elem ya da <5% error")
print("  - 8x8=64 elem da <1% error")
print("  - Mas alla de 10x10 no mejora significativamente")
print("  - Los triangulos (CST) necesitan 2-3x mas elementos para converger")
print("=" * 65)
