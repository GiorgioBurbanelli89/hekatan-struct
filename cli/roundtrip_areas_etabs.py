# -*- coding: utf-8 -*-
u"""LA VUELTA del ciclo: el `.e2k` de Hekatan entra en ETABS y ETABS escribe el
suyo de vuelta.

    python cli/roundtrip_areas_etabs.py

Lee   validation/modelos/roundtrip/P*_A.e2k   (los escribe roundtrip_areas.mjs)
Deja  validation/modelos/roundtrip/P*_B.e2k   (los escribe ETABS)
      + un .json con lo que ETABS entendio de las AREAS

Asi el ciclo queda cerrado y se puede preguntar lo unico que importa:
**.el modelo que vuelve es el que salio?**

`File.ExportFile(out, 1)` (1 = eFileTypeIO_TextFile) escribe a partir del modelo
GUARDADO, no del que esta en memoria: sin el `File.Save` previo devuelve != 0 o
sale vacio (documentado en etabs-cli/README).
"""
import json
import os
import sys
import time

import comtypes.client
import comtypes.gen.ETABSv1 as E

AQUI = os.path.dirname(os.path.abspath(__file__))
BASE = os.path.abspath(os.path.join(AQUI, "..", "validation", "modelos", "roundtrip"))
EDB = os.path.join(BASE, "edb")
os.makedirs(EDB, exist_ok=True)

trabajos = sorted(f for f in os.listdir(BASE) if f.endswith("_A.e2k"))
if not trabajos:
    raise SystemExit("no hay *_A.e2k en " + BASE + " — corre antes cli/roundtrip_areas.mjs")
print("%d modelos" % len(trabajos))
sys.stdout.flush()

h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
o.ApplicationStart()
sm = o.SapModel

for i, f in enumerate(trabajos, 1):
    base = f[:-6]                     # sin el "_A.e2k"
    src = os.path.join(BASE, f)
    edb = os.path.join(EDB, base + ".EDB")
    out = os.path.join(BASE, base + "_B.e2k")
    jsn = os.path.join(BASE, base + "_B.json")
    t0 = time.time()
    estado = "ok"
    try:
        sm.InitializeNewModel(6)                    # 6 = kN_m_C
        if sm.File.OpenFile(src) != 0:
            estado = "FALLA abrir"
        else:
            sm.SetPresentUnits(6)
            if sm.File.Save(edb) != 0:
                estado = "aviso: no guardo el EDB"

            # ── lo que ETABS entendio de las AREAS ──
            puntos = {}
            for nm in sm.PointObj.GetNameList(0, [])[1]:
                x, y, z, ret = sm.PointObj.GetCoordCartesian(nm, 0., 0., 0.)
                if ret == 0:
                    puntos[nm] = [x, y, z]
            areas = []
            for nm in sm.AreaObj.GetNameList(0, [])[1]:
                r = sm.AreaObj.GetPoints(nm, 0, [])
                pts = list(r[1]) if r[0] else []
                try:
                    sec = sm.AreaObj.GetProperty(nm, "")[0]
                except Exception:
                    sec = ""
                areas.append({"n": nm, "pts": pts, "sec": sec})
            props = {}
            for nm in sm.PropArea.GetNameList(0, [])[1]:
                d = {"n": nm}
                try:
                    r = sm.PropArea.GetSlab(nm, 0, 0, "", 0., 0)
                    if r[-1] == 0:
                        d.update({"clase": "Slab", "shellType": r[1], "t": r[3]})
                except Exception:
                    pass
                if "clase" not in d:
                    try:
                        r = sm.PropArea.GetWall(nm, 0, 0, "", 0., 0)
                        if r[-1] == 0:
                            d.update({"clase": "Wall", "shellType": r[1], "t": r[3]})
                    except Exception:
                        pass
                try:
                    d["mods"] = list(sm.PropArea.GetModifiers(nm, [])[0])
                except Exception:
                    pass
                props[nm] = d
            json.dump({"puntos": puntos, "areas": areas, "props": props},
                      open(jsn, "w", encoding="utf-8"))

            # ── y que ETABS escriba SU e2k ──
            ret = sm.File.ExportFile(out, 1)        # 1 = eFileTypeIO_TextFile
            if ret != 0 or not os.path.exists(out) or os.path.getsize(out) == 0:
                # Respaldo universal: al guardar, ETABS deja SIEMPRE un `.$et`
                # al lado, que es el mismo texto e2k byte a byte.
                et = os.path.splitext(edb)[0] + ".$et"
                if os.path.exists(et):
                    import shutil
                    shutil.copyfile(et, out)
                    estado = "ok (via .$et)"
                else:
                    estado = "ExportFile=%d y sin .$et" % ret
    except Exception as ex:
        estado = "EXCEPCION " + str(ex)[:60]

    n = len(areas) if estado.startswith("ok") else 0
    print("%d/%d  %-26s %-18s %4d areas   %5.1f s"
          % (i, len(trabajos), base, estado, n, time.time() - t0))
    sys.stdout.flush()

print("\n-> " + BASE)
o.ApplicationExit(False)
