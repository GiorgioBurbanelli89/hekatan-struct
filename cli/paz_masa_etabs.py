# -*- coding: utf-8 -*-
"""De donde sale el -2.85 % uniforme del Paz 6.3 contra ETABS.

El CLAUDE.md decia que era masa consistente contra agrupada, pero el motor de
HOY ya lumpea igual que CSI (getGlobalMassMatrix.cpp, HRZ, rho*A*L/2 a cada
nudo). O sea que la explicacion escrita no puede ser.

Hipotesis a medir: ETABS pone brazos rigidos AUTOMATICOS (end length offsets) y
lumpea la masa sobre la longitud LIBRE, no la de nudo a nudo. Hekatan usa la de
nudo a nudo. Con medio canto de columna descontado en cada extremo de viga son
75.2 in menos de barra -> ~5.9 % menos masa -> ~+2.9 % de frecuencia.

Este script no argumenta: LEE los offsets que puso ETABS, LEE la masa ensamblada
por nudo, y despues los anula y vuelve a correr. Si al anularlos las frecuencias
de ETABS bajan hasta las de Hekatan, la hipotesis queda probada.

    python cli/paz_masa_etabs.py
"""
import os
import sys

import comtypes.client
import comtypes.gen.ETABSv1 as E

# ── el mismo modelo de cli/paz_etabs.py, en kip-in ─────────────────────────
E_MOD = 29500.0
NU = 0.3
H, BX, BY = 180.0, 114.0, 240.0
RHO = 490.0 / 1000.0 / 12.0 ** 3 / 386.4         # kip*s2/in4
PESO = RHO * 386.4                               # kip/in3

COL = dict(A=43.0, I33=5630.0, I22=391.0, J=34.8, d=24.7, b=12.9)
GIR = dict(A=24.7, I33=928.0, I22=225.0, J=5.90, d=14.2, b=12.0)

NODOS = [(0, 0, 0), (0, 0, H), (0, BY, 0), (0, BY, H),
         (BX, 0, 0), (BX, 0, H), (BX, BY, 0), (BX, BY, H)]
BARRAS = [(0, 1, "COL"), (2, 3, "COL"), (4, 5, "COL"), (6, 7, "COL"),
          (1, 5, "GIR"), (3, 7, "GIR"), (1, 3, "GIR"), (5, 7, "GIR")]
NMODOS = 6

HEKATAN = [8.8358, 14.5551, 24.2228, 25.1038, 159.6530, 159.8523]

# Masa lumpeada por Hekatan en cada nudo libre (rho*A*L/2 sumado de las 3 barras
# que llegan: 1 columna de 180 + 1 viga de 114 + 1 viga de 240):
VOL_NUDO_HEKATAN = COL["A"] * H / 2 + GIR["A"] * BX / 2 + GIR["A"] * BY / 2
MASA_NUDO_HEKATAN = RHO * VOL_NUDO_HEKATAN
# Masa de TODO el modelo (los 8 nudos, incluidos los 4 empotrados: cada base
# lleva media columna). Es contra esto que hay que comparar el total de ETABS.
VOL_TOTAL_HEKATAN = 4 * COL["A"] * H + 2 * GIR["A"] * BX + 2 * GIR["A"] * BY
MASA_TOTAL_HEKATAN = RHO * VOL_TOTAL_HEKATAN


def frecuencias(sm):
    sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
    sm.Results.Setup.SetCaseSelectedForOutput("Modal")
    res = sm.Results.ModalPeriod(0, [], [], [], [], [], [])
    n = res[0]
    if not n:
        return []
    return list(res[5][:n])


def masa_ensamblada(sm):
    """Devuelve {nombre_nudo: (m_ux, m_uy, m_uz)} probando las dos firmas."""
    sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
    sm.Results.Setup.SetCaseSelectedForOutput("Modal")
    # Firma real (comtypes.gen ETABSv1, dispid 50):
    #   AssembledJointMass_1(MassSourceName, Name, ItemTypeElm,
    #                        NumberResults, PointElm, MassSource,
    #                        U1, U2, U3, R1, R2, R3)
    # y devuelve solo los [out]: (n, PointElm, MassSource, U1..R3).
    # ItemTypeElm = 2 (GroupElm) con el grupo "All" = todo el modelo.
    try:
        r = sm.Results.AssembledJointMass_1(
            "", "All", 2, 0, [], [], [], [], [], [], [], [])
    except Exception as exc:
        print("   (AssembledJointMass_1 fallo: %s)" % exc)
        return {}
    n = r[0]
    if not n:
        return {}
    puntos, u1, u2, u3 = r[1], r[3], r[4], r[5]
    return {puntos[k]: (u1[k], u2[k], u3[k]) for k in range(n)}


def offsets(sm, nombres):
    """Lee los brazos rigidos que ETABS puso solo."""
    out = {}
    for nm in nombres:
        try:
            r = sm.FrameObj.GetEndLengthOffset(nm, False, 0.0, 0.0, 0.0)
        except Exception as exc:
            print("   (GetEndLengthOffset fallo en %s: %s)" % (nm, exc))
            return {}
        # (AutoOffset, Length1, Length2, RZ, ret)
        out[nm] = (bool(r[0]), float(r[1]), float(r[2]), float(r[3]))
    return out


h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
o.ApplicationStart()
try:
    o.Hide()
except Exception:
    pass
sm = o.SapModel
sm.InitializeNewModel(3)
sm.File.NewBlank()
sm.Story.SetStories_2(0.0, 1, ("Tope",), (H,), (True,), ("",),
                      (False,), (0.0,), (255,))
sm.PropMaterial.SetMaterial("ACERO", 1)
sm.PropMaterial.SetMPIsotropic("ACERO", E_MOD, NU, 6.5e-6)
sm.PropMaterial.SetWeightAndMass("ACERO", 1, PESO)
sm.PropMaterial.SetWeightAndMass("ACERO", 2, RHO)
for nombre, s in (("COL", COL), ("GIR", GIR)):
    sm.PropFrame.SetGeneral(
        nombre, "ACERO", s["d"], s["b"], s["A"],
        s["A"] * 5 / 6, s["A"] * 5 / 6, s["J"], s["I22"], s["I33"],
        2 * s["I33"] / s["d"], 2 * s["I22"] / s["b"],
        2 * s["I33"] / s["d"], 2 * s["I22"] / s["b"],
        (s["I33"] / s["A"]) ** 0.5, (s["I22"] / s["A"]) ** 0.5)
for i, j, sec in BARRAS:
    p, q = NODOS[i], NODOS[j]
    sm.FrameObj.AddByCoord(p[0], p[1], p[2], q[0], q[1], q[2], "", sec)
_, puntos, _ = sm.PointObj.GetNameList()
for nm in puntos:
    x, y, z, _ = sm.PointObj.GetCoordCartesian(nm, 0., 0., 0.)
    if abs(z) < 1e-6:
        sm.PointObj.SetRestraint(nm, [True] * 6)
try:
    sm.PropMaterial.SetMassSource(1)
except Exception:
    pass
sm.LoadCases.ModalEigen.SetCase("Modal")
sm.LoadCases.ModalEigen.SetNumberModes("Modal", NMODOS, 1)

edb = os.path.abspath(os.path.join(os.path.dirname(__file__), "paz_masa.EDB"))
if os.path.exists(edb):
    os.remove(edb)
sm.File.Save(edb)

_, barras, _ = sm.FrameObj.GetNameList()
barras = list(barras)

# ── corrida 1: tal cual, con los brazos rigidos que ETABS pone solo ─────────
sm.Analyze.RunAnalysis()
f_auto = frecuencias(sm)
m_auto = masa_ensamblada(sm)

print("\n== brazos rigidos que puso ETABS solo ==")
off = offsets(sm, barras)
suma_off = 0.0
for nm in barras:
    if nm in off:
        a, l1, l2, rz = off[nm]
        suma_off += l1 + l2
        print("  %-6s auto=%s  L1=%7.3f  L2=%7.3f  RZ=%.2f" % (nm, a, l1, l2, rz))
print("  suma de todos los offsets: %.3f in" % suma_off)

print("\n== masa ensamblada por nudo (kip*s2/in) ==")
print("  Hekatan lumpea en cada nudo libre: %.6e  (volumen %.1f in3)"
      % (MASA_NUDO_HEKATAN, VOL_NUDO_HEKATAN))
tot = 0.0
for nm, (a, b, c) in sorted(m_auto.items()):
    tot += a
    print("  nudo %-6s Ux=%.6e  Uy=%.6e  Uz=%.6e   vs Hekatan: %+7.2f %%"
          % (nm, a, b, c, 100 * (a - MASA_NUDO_HEKATAN) / MASA_NUDO_HEKATAN))
if tot:
    print("  total ETABS (Ux) = %.6e   total Hekatan = %.6e   dif %+.3f %%"
          % (tot, MASA_TOTAL_HEKATAN,
             100 * (tot - MASA_TOTAL_HEKATAN) / MASA_TOTAL_HEKATAN))
    print("  volumen que ETABS NO pesa: %.1f in3  (offsets de VIGA:"
          " 2*%.1f*%.2f + 2*%.1f*%.2f = %.1f)"
          % ((MASA_TOTAL_HEKATAN - tot) / RHO,
             GIR["A"], COL["d"], GIR["A"], COL["b"],
             2 * GIR["A"] * COL["d"] + 2 * GIR["A"] * COL["b"]))
else:
    print("  (sin masa leida)")

# ── corrida 2: con los brazos rigidos ANULADOS ─────────────────────────────
sm.SetModelIsLocked(False)
for nm in barras:
    sm.FrameObj.SetEndLengthOffset(nm, False, 0.0, 0.0, 0.0)
sm.Analyze.RunAnalysis()
f_cero = frecuencias(sm)
m_cero = masa_ensamblada(sm)

if m_cero:
    tot0 = sum(v[0] for v in m_cero.values())
    print("\n== masa ensamblada con offsets a CERO ==")
    print("  total ETABS (Ux) = %.6e   total Hekatan = %.6e   dif %+.3f %%"
          % (tot0, MASA_TOTAL_HEKATAN,
             100 * (tot0 - MASA_TOTAL_HEKATAN) / MASA_TOTAL_HEKATAN))

print("\nmodo  ETABS auto   ETABS off=0   Hekatan     dif auto    dif off=0")
for k in range(NMODOS):
    fa = f_auto[k] if k < len(f_auto) else float("nan")
    fc = f_cero[k] if k < len(f_cero) else float("nan")
    hk = HEKATAN[k]
    print("%3d %11.4f %13.4f %10.4f %9.2f %% %9.2f %%"
          % (k + 1, fa, fc, hk, 100 * (hk - fa) / fa, 100 * (hk - fc) / fc))

sm.File.Save(edb)
o.ApplicationExit(False)
