# -*- coding: utf-8 -*-
"""
Saca de ETABS los MUELLES que de verdad tiene el modelo.

    python cli/muelles_etabs.py "ruta\\al\\modelo.EDB" salida.json

Por que hace falta: el `.e2k` del edificio real declara siete propiedades
`POINTSPRING` —«BALASTO H X-X», «BALASTO H Y-Y», los tres «SPRINK», los dos
«RESORTE SOTANO»— y **no asigna ninguna**. Las dos unicas que asigna, `BALASTO
V` y `RESORTE EN VIGAS`, son las dos SOLO VERTICALES. Con eso la cimentacion no
tiene nada que la sujete en horizontal, y de ahi sale el mecanismo.

Quedan dos posibilidades y solo el `.EDB` las separa:

  (a) el modelo REALMENTE no tiene muelles horizontales — y entonces tambien es
      inestable en ETABS, y el aviso hay que darselo al proyectista;
  (b) SI los tiene y el exportador a `.e2k` no los escribe — y entonces el
      `.e2k` no basta para reproducir el modelo, que es un limite del formato y
      hay que decirlo.

Esto lo pregunta a la OAPI, que es la unica que ve lo que hay dentro del EDB.

ATENCION: abre ETABS. Tarda, y se ve en pantalla.
"""
import json
import os
import sys

import comtypes.client


def main() -> int:
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    edb = os.path.abspath(sys.argv[1])
    salida = os.path.abspath(sys.argv[2])
    if not os.path.exists(edb):
        print("no encuentro " + edb)
        return 2

    print("abriendo ETABS...", flush=True)
    helper = comtypes.client.CreateObject("ETABSv1.Helper")
    helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)
    # OJO: cuando no hay instancia abierta, GetObject DEVUELVE None en vez de
    # lanzar. Con un `try/except` solo, el fallo aparece tres lineas mas abajo
    # como «'NoneType' no tiene SapModel», que no dice nada.
    etabs = None
    try:
        etabs = helper.GetObject("CSI.ETABS.API.ETABSObject")
    except Exception:
        etabs = None
    if etabs is None:
        etabs = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
        etabs.ApplicationStart()
        print("  ETABS arrancado", flush=True)
    else:
        print("  (habia una instancia abierta, se usa esa)", flush=True)

    sap = etabs.SapModel
    print("abriendo " + os.path.basename(edb) + " ...", flush=True)
    sap.File.OpenFile(edb)
    sap.SetPresentUnits(6)          # kN, m, C

    ret = sap.PointObj.GetAllPoints()
    nombres = list(ret[1])
    xs, ys, zs = list(ret[2]), list(ret[3]), list(ret[4])
    print("  " + str(len(nombres)) + " joints", flush=True)

    puntos = {}
    conMuelle = 0
    porGdl = [0] * 6
    asignadas = {}

    for i, n in enumerate(nombres):
        fila = {"x": round(xs[i], 6), "y": round(ys[i], 6), "z": round(zs[i], 6)}

        # El muelle ASIGNADO por propiedad con nombre.
        try:
            r = sap.PointObj.GetSpringAssignment(n)
            nombreProp = r[0] if isinstance(r, (list, tuple)) else r
            if nombreProp:
                fila["springProp"] = str(nombreProp)
        except Exception:
            pass

        # Y el muelle EFECTIVO: las seis rigideces que de verdad entran en la K,
        # vengan de una propiedad con nombre o puestas a mano en el joint.
        try:
            r = sap.PointObj.GetSpring(n)
            k = None
            for cand in r:
                if hasattr(cand, "__len__") and not isinstance(cand, str) and len(cand) >= 6:
                    k = [float(v) for v in cand[:6]]
                    break
            if k and any(abs(v) > 0 for v in k):
                fila["k"] = [round(v, 6) for v in k]
                conMuelle += 1
                for g in range(6):
                    if abs(k[g]) > 0:
                        porGdl[g] += 1
        except Exception:
            pass

        # Restricciones, para poder cruzarlas con las del .e2k.
        try:
            r = sap.PointObj.GetRestraint(n)
            v = None
            for cand in r:
                if hasattr(cand, "__len__") and not isinstance(cand, str) and len(cand) >= 6:
                    v = [bool(x) for x in cand[:6]]
                    break
            if v and any(v):
                fila["restraint"] = v
        except Exception:
            pass

        if len(fila) > 3:
            puntos[str(n)] = fila
        p = fila.get("springProp")
        if p:
            asignadas[p] = asignadas.get(p, 0) + 1

    # Las propiedades de muelle DEFINIDAS, con sus rigideces.
    definidas = {}
    try:
        r = sap.PropPointSpring.GetNameList()
        for nm in list(r[1]):
            try:
                d = sap.PropPointSpring.GetPointSpringProp(nm)
                vals = None
                for cand in d:
                    if hasattr(cand, "__len__") and not isinstance(cand, str) and len(cand) >= 6:
                        vals = [round(float(v), 6) for v in cand[:6]]
                        break
                definidas[str(nm)] = vals
            except Exception:
                definidas[str(nm)] = None
    except Exception as e:
        print("  (no pude listar PropPointSpring: " + str(e) + ")", flush=True)

    # Los muelles de LINEA y de AREA, que son los que este modelo si usa.
    lineas, areas = {}, {}
    try:
        r = sap.FrameObj.GetNameList()
        for nm in list(r[1]):
            try:
                d = sap.FrameObj.GetSpringAssignment(nm)
                v = d[0] if isinstance(d, (list, tuple)) else d
                if v:
                    lineas[str(v)] = lineas.get(str(v), 0) + 1
            except Exception:
                pass
    except Exception:
        pass
    try:
        r = sap.AreaObj.GetNameList()
        for nm in list(r[1]):
            try:
                d = sap.AreaObj.GetSpringAssignment(nm)
                v = d[0] if isinstance(d, (list, tuple)) else d
                if v:
                    areas[str(v)] = areas.get(str(v), 0) + 1
            except Exception:
                pass
    except Exception:
        pass
    print("muelles de LINEA asignados: " + str(lineas if lineas else "NINGUNO"), flush=True)
    print("muelles de AREA  asignados: " + str(areas if areas else "NINGUNO"), flush=True)

    # ── Y EL ARBITRO: que ETABS lo resuelva ──
    #
    # Si sale con avisos de inestabilidad, queda demostrado que el mecanismo es
    # del MODELO. Si sale limpio y con desplazamientos creibles, es que ETABS lo
    # sujeta con algo que este lector aun no importa, y hay que buscarlo.
    corrida = {}
    try:
        print("", flush=True)
        print("corriendo el analisis en ETABS (esto tarda)...", flush=True)
        sap.Analyze.RunAnalysis()
        sap.SetPresentUnits(6)
        sap.Results.Setup.DeselectAllCasesAndCombosForOutput()
        casos = list(sap.LoadCases.GetNameList()[1])
        elegido = None
        for c in casos:
            if str(c).upper().startswith(("DEAD", "MUERT", "CM", "D")):
                elegido = str(c); break
        elegido = elegido or (str(casos[0]) if casos else None)
        if elegido:
            sap.Results.Setup.SetCaseSelectedForOutput(elegido)
            sap.PointObj.GetNameList()
            res = sap.Results.JointDispl("", 2)   # 2 = todos los objetos
            n = res[0]
            uz = list(res[7]) if n else []
            ux = list(res[5]) if n else []
            uy = list(res[6]) if n else []
            def mayor(v):
                return max((abs(x) for x in v), default=0.0)
            corrida = {"caso": elegido, "nResultados": int(n),
                       "uxMax": mayor(ux), "uyMax": mayor(uy), "uzMax": mayor(uz)}
            print("  caso " + elegido + ": " + str(n) + " resultados", flush=True)
            print("  |Ux| max = " + ("%.4f" % (corrida["uxMax"] * 1000)) + " mm", flush=True)
            print("  |Uy| max = " + ("%.4f" % (corrida["uyMax"] * 1000)) + " mm", flush=True)
            print("  |Uz| max = " + ("%.4f" % (corrida["uzMax"] * 1000)) + " mm", flush=True)
    except Exception as e:
        corrida = {"err": str(e)[:200]}
        print("  el analisis no cerro: " + str(e)[:200], flush=True)

    GDL = ["UX", "UY", "UZ", "RX", "RY", "RZ"]
    print("")
    print("joints con MUELLE efectivo ... " + str(conMuelle))
    print("   por GDL: " + " . ".join(GDL[g] + " " + str(porGdl[g]) for g in range(6)))
    print("propiedades ASIGNADAS: " + str(asignadas if asignadas else "NINGUNA"))
    print("propiedades DEFINIDAS: " + str(list(definidas.keys())))
    print("")
    if porGdl[0] == 0 and porGdl[1] == 0:
        print(">>> ETABS TAMPOCO tiene muelles horizontales: el modelo es")
        print("    inestable en horizontal tambien alli. No es del lector.")
    else:
        print(">>> ETABS SI tiene muelles horizontales y el .e2k no los escribe:")
        print("    el .e2k NO basta para reproducir este modelo.")

    with open(salida, "w", encoding="utf-8") as f:
        json.dump({"puntos": puntos, "definidas": definidas,
                   "lineas": lineas, "areas": areas, "corrida": corrida,
                   "resumen": {"conMuelle": conMuelle, "porGdl": porGdl,
                               "asignadas": asignadas}}, f, indent=1)
    print("")
    print("-> " + salida)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
