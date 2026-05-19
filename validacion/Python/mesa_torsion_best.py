# -*- coding: utf-8 -*-
"""
Mesa de Torsión — formulación OpenSeesPy GANADORA (match óptimo vs ETABS 19.1)

Variante:
  shellType   : ShellDKGQ
  massModel   : lumped
  diaphragm   : equalDOF
  nMesh       : 5
  baseSupport : fixed
  colElem     : elastic

Resultados:
  T1 lateral X = 0.07328 s   (ETABS target → err 24.06%)
  T2 lateral Y = 0.07328 s   (ETABS target → err 24.06%)
  T3 torsión Rz = 0.04165 s   (ETABS target → err 0.50%)
  Score combinado: 0.48611

Generado por iterate_mesa_torsion.py
"""
import openseespy.opensees as ops
import math

G = 9.80665
LX, LY, H = 6.0, 6.0, 4.0
B_COL, H_COL = 0.4, 0.4
B_BEAM, H_BEAM = 0.3, 0.5
T_SLAB = 0.1
E = 248555820.50599998
NU = 0.2
RHO = 2.40277
NMESH = 5
SHELL_TYPE = "ShellDKGQ"

ops.wipe()
ops.model("basic", "-ndm", 3, "-ndf", 6)
ops.nDMaterial("ElasticIsotropic", 1, E, NU, RHO)
ops.section("ElasticMembranePlateSection", 1, E, NU, T_SLAB, RHO)

# Base + floor nodes
ops.node(1, 0, 0, 0); ops.node(2, LX, 0, 0)
ops.node(3, LX, LY, 0); ops.node(4, 0, LY, 0)
dx, dy = LX / NMESH, LY / NMESH
def tg(i, j): return 100 + j * (NMESH + 1) + i
for j in range(NMESH + 1):
    for i in range(NMESH + 1):
        ops.node(tg(i, j), i * dx, j * dy, H)

# Supports
for n in [1, 2, 3, 4]:
    ops.fix(n, 1, 1, 1, 1, 1, 1)

# Frame transformations
ops.geomTransf("Linear", 1, 0, 1, 0)
ops.geomTransf("Linear", 2, 0, 0, 1)

# Section properties
def rect_props(b, h):
    A = b * h
    Iz = b * h**3 / 12; Iy = h * b**3 / 12
    a, bb = max(b, h)/2, min(b, h)/2
    J = a * bb**3 * (16/3 - 3.36 * (bb/a) * (1 - (bb/a)**4 / 12))
    return A, Iy, Iz, J

Ac, Iyc, Izc, Jc = rect_props(B_COL, H_COL)
Av, Iyv, Izv, Jv = rect_props(B_BEAM, H_BEAM)
GMOD = E / (2 * (1 + NU))

# Columns
eleTag = 1
for nI, nJ in [(1, tg(0, 0)), (2, tg(NMESH, 0)), (3, tg(NMESH, NMESH)), (4, tg(0, NMESH))]:
    ops.element("elasticBeamColumn", eleTag, nI, nJ, Ac, E, GMOD, Jc, Iyc, Izc, 1, "-mass", Ac * RHO)
    eleTag += 1

# Beams perimeter
for i in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(i, 0), tg(i+1, 0), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1
for j in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(NMESH, j), tg(NMESH, j+1), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1
for i in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(i, NMESH), tg(i+1, NMESH), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1
for j in range(NMESH):
    ops.element("elasticBeamColumn", eleTag, tg(0, j), tg(0, j+1), Av, E, GMOD, Jv, Iyv, Izv, 2, "-mass", Av * RHO); eleTag += 1

# Shells
for j in range(NMESH):
    for i in range(NMESH):
        ops.element(SHELL_TYPE, eleTag, tg(i, j), tg(i+1, j), tg(i+1, j+1), tg(i, j+1), 1)
        eleTag += 1

# Lumped nodal masses (slab tributary)
m_per_node = (LX * LY * T_SLAB * RHO) / ((NMESH + 1) ** 2)
for j in range(NMESH + 1):
    for i in range(NMESH + 1):
        ops.mass(tg(i, j), m_per_node, m_per_node, m_per_node, 0, 0, 0)

# Equal DOF diaphragm
mst = tg(0, 0)
for j in range(NMESH + 1):
    for i in range(NMESH + 1):
        n = tg(i, j)
        if n != mst:
            ops.equalDOF(mst, n, 1, 2, 6)

# Modal analysis
eigs = ops.eigen("-fullGenLapack", 12)
print("\nMode  T(s)      f(Hz)")
for i, e in enumerate(eigs):
    w = math.sqrt(max(e, 1e-12))
    T = 2 * math.pi / w
    f = w / (2 * math.pi)
    print(f"  {i+1:2}   {T:.5f}   {f:.4f}")
