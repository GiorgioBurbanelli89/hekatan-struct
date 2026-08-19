# -*- coding: utf-8 -*-
"""
Verifica QUÉ TIPO DE MODO da OpenSees para la formulación actual del ejemplo
Hekatan TS. Es probable que los primeros modos sean verticales/torsión del slab
y los lateral aparezcan en posiciones 4-6.

Usa MPF (mass participation factors) para identificar dominante.
"""
import math
import sys
import openseespy.opensees as ops

sys.stdout.reconfigure(encoding="utf-8")

# Mismas constantes que iterate_mesa_torsion.py
G = 9.80665
LX, LY, H = 6.0, 6.0, 4.0
B_COL, H_COL = 0.40, 0.40
B_BEAM, H_BEAM = 0.30, 0.50
T_SLAB = 0.10
E = 2.534564e7 * G
NU = 0.20
RHO = 2.40277

NMESH = 5

ops.wipe()
ops.model("basic", "-ndm", 3, "-ndf", 6)
ops.nDMaterial("ElasticIsotropic", 1, E, NU, RHO)
ops.section("ElasticMembranePlateSection", 1, E, NU, T_SLAB, RHO)

ops.node(1, 0, 0, 0); ops.node(2, LX, 0, 0)
ops.node(3, LX, LY, 0); ops.node(4, 0, LY, 0)
dx, dy = LX / NMESH, LY / NMESH
def tg(i, j): return 100 + j * (NMESH + 1) + i
for j in range(NMESH + 1):
    for i in range(NMESH + 1):
        ops.node(tg(i, j), i * dx, j * dy, H)

# Pinned base
for n in [1, 2, 3, 4]:
    ops.fix(n, 1, 1, 1, 0, 0, 0)

ops.geomTransf("Linear", 1, 0, 1, 0)
ops.geomTransf("Linear", 2, 0, 0, 1)

def rect_props(b, h):
    A = b * h
    Iz = b * h**3 / 12; Iy = h * b**3 / 12
    a, bb = max(b, h)/2, min(b, h)/2
    J = a * bb**3 * (16/3 - 3.36 * (bb/a) * (1 - (bb/a)**4 / 12))
    return A, Iy, Iz, J

Ac, Iyc, Izc, Jc = rect_props(B_COL, H_COL)
Av, Iyv, Izv, Jv = rect_props(B_BEAM, H_BEAM)
GMOD = E / (2 * (1 + NU))

# Cols
eleTag = 1
for nI, nJ in [(1, tg(0, 0)), (2, tg(NMESH, 0)), (3, tg(NMESH, NMESH)), (4, tg(0, NMESH))]:
    ops.element("elasticBeamColumn", eleTag, nI, nJ, Ac, E, GMOD, Jc, Iyc, Izc, 1, "-mass", Ac * RHO)
    eleTag += 1

# Beams perim
for i in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(i, 0), tg(i+1, 0), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1
for j in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(NMESH, j), tg(NMESH, j+1), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1
for i in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(i, NMESH), tg(i+1, NMESH), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1
for j in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(0, j), tg(0, j+1), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1

# Shells losa
for j in range(NMESH):
    for i in range(NMESH):
        ops.element("ShellMITC4", eleTag, tg(i, j), tg(i+1, j), tg(i+1, j+1), tg(i, j+1), 1)
        eleTag += 1

# Eigen
eigs = ops.eigen("-fullGenLapack", 12)
ws = [math.sqrt(max(e, 1e-12)) for e in eigs]

# MPF — manual: φᵀ M r / φᵀ M φ donde r es vector de influencia
# Para cada modo y dirección, leemos el modo shape y computamos
print(f"\n{'Modo':<5} {'T(s)':<10} {'f(Hz)':<10}  Tipo (inferido manualmente)")
print(f"{'-'*60}")
for i, e in enumerate(eigs):
    w = ws[i]
    T = 2 * math.pi / w
    f = w / (2 * math.pi)

    # Leer el modo shape en un nodo del centro del piso
    center_node = tg(NMESH // 2, NMESH // 2)
    try:
        ux = ops.nodeEigenvector(center_node, i + 1, 1)
        uy = ops.nodeEigenvector(center_node, i + 1, 2)
        uz = ops.nodeEigenvector(center_node, i + 1, 3)
        # Y en un nodo de esquina
        corner = tg(0, 0)
        cux = ops.nodeEigenvector(corner, i + 1, 1)
        cuy = ops.nodeEigenvector(corner, i + 1, 2)
        cuz = ops.nodeEigenvector(corner, i + 1, 3)
        # Dominant DOF en el centro
        mags = [abs(ux), abs(uy), abs(uz)]
        dom = ["Ux", "Uy", "Uz"][mags.index(max(mags))]

        # Si centro tiene Uz≈0 pero esquinas Uz≠0 → torsión (anti-simétrico)
        # Si centro Uz != 0 y esquinas igual → vertical pumping
        if abs(uz) > max(abs(ux), abs(uy)):
            # Test torsion vs vertical: corner Uz signs
            corner_uz_se = ops.nodeEigenvector(tg(NMESH, 0), i + 1, 3)
            corner_uz_ne = ops.nodeEigenvector(tg(NMESH, NMESH), i + 1, 3)
            if abs(cuz - corner_uz_ne) < 1e-9 and abs(corner_uz_se - corner_uz_ne) < 1e-9:
                tipo = "Vertical (slab pumping)"
            else:
                tipo = "Slab local (bending modal)"
        elif abs(ux) > 5 * abs(uy):
            tipo = "Lateral Ux"
        elif abs(uy) > 5 * abs(ux):
            tipo = "Lateral Uy"
        elif abs(ux) > 0.001 and abs(uy) > 0.001 and abs(ux - uy) < 0.01 * abs(ux):
            # Test torsion en center vs corner
            # Si todos corners Ux son distintos signo → torsion
            cux_se = ops.nodeEigenvector(tg(NMESH, 0), i + 1, 1)
            cux_ne = ops.nodeEigenvector(tg(NMESH, NMESH), i + 1, 1)
            cux_nw = ops.nodeEigenvector(tg(0, NMESH), i + 1, 1)
            if (cux > 0) != (cux_se > 0):
                tipo = "Torsión Rz"
            else:
                tipo = "Lateral combinado X+Y"
        else:
            tipo = f"Mixto (max={dom})"

        print(f"{i+1:<5} {T:<10.5f} {f:<10.4f}  {tipo:<30} Center=(ux={ux:+.3e}, uy={uy:+.3e}, uz={uz:+.3e})")
    except Exception as ex:
        print(f"{i+1:<5} {T:<10.5f} {f:<10.4f}  [ERR {ex}]")
