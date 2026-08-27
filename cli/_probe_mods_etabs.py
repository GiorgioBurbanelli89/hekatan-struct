# -*- coding: utf-8 -*-
u"""¿ETABS LEE los modificadores de cascara del .e2k? (no si los escribimos: si
los entiende). Abre `_mods.e2k` y pregunta por la OAPI que quedo dentro.

    python cli/_probe_mods_etabs.py

Esperado, tal cual se escribieron:
    F11 0.7  F22 0.8  F12 0.9  M11 0.25  M22 0.35  M12 0.45  V13 0.6  V23 0.5
"""
import os
import comtypes.client
import comtypes.gen.ETABSv1 as E

AQUI = os.path.dirname(os.path.abspath(__file__))
src = os.path.abspath(os.path.join(AQUI, "..", "validation", "modelos", "plantillas", "_mods.e2k"))
edb = os.path.abspath(os.path.join(AQUI, "..", "validation", "modelos", "plantillas", "_mods.EDB"))
ESPERADO = [0.7, 0.8, 0.9, 0.25, 0.35, 0.45, 0.6, 0.5]
NOMBRES = ["F11", "F22", "F12", "M11", "M22", "M12", "V13", "V23", "masa", "peso"]

h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
o.ApplicationStart()
sm = o.SapModel
sm.InitializeNewModel(6)
if sm.File.OpenFile(src) != 0:
    raise SystemExit("no abrio " + src)
sm.SetPresentUnits(6)
sm.File.Save(edb)

fallos = 0
for nm in sm.PropArea.GetNameList(0, [])[1]:
    try:
        r = sm.PropArea.GetSlab(nm, 0, 0, "", 0., 0)
        tipo = "Slab slabType=%s shellType=%s t=%s" % (r[0], r[1], r[3]) if r[-1] == 0 else "?"
    except Exception:
        tipo = "?"
    print("%s: %s" % (nm, tipo))
    mods = list(sm.PropArea.GetModifiers(nm, [])[0])
    for i, v in enumerate(mods):
        esp = ESPERADO[i] if i < len(ESPERADO) else 1.0
        marca = "  OK" if abs(v - esp) < 1e-9 else "  <- esperaba %s" % esp
        if abs(v - esp) >= 1e-9:
            fallos += 1
        print("   %-5s %-8s%s" % (NOMBRES[i], v, marca))

print("\n%d desviaciones" % fallos)
o.ApplicationExit(False)
