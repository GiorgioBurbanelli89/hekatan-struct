# -*- coding: utf-8 -*-
"""Referencia de ETABS para la matriz de TIPOS DE LOSA del mezanine.

Lee los `.EDB` que ya dejo `a_etabs.py --analizar parte_mezanine.json --losa X`
(en `galpon-bodega-electoral/`) y vuelca TODO lo que hay que comparar, no solo
la flecha: desplazamiento de cada nudo, fuerzas de barra, fuerzas de shell,
reacciones con su centroide, periodos y participacion de masa modal.

NO construye su propio modelo a proposito. El primer intento lo hacia y salia
INESTABLE (`NUMBER OF NEGATIVE EIGENVALUES = 2` en el .LOG de ETABS, con
reacciones 0 y periodos absurdos). El mezanine del galpon ya cierra al 0.3 % en
los dos motores, asi que la matriz mide el TIPO DE LOSA y nada mas.

    python gen_losas_ref.py                 # las seis
    python gen_losas_ref.py nervada_1d      # solo esa

Escribe losas_ref_<tipo>.json al lado de este archivo.

OJO CON LOS INDICES: salen de la definicion COM del modulo generado por
comtypes, no de la ayuda. Leyendolos de memoria salian numeros PLAUSIBLES PERO
FALSOS — `F11` daba `F22` y `M11` daba la von Mises.
"""
import json
import os
import sys

import comtypes.client
import comtypes.gen.ETABSv1 as E

AQUI = os.path.dirname(os.path.abspath(__file__))
GALPON = os.path.abspath(os.path.join(
    AQUI, "..", "..", "..", "galpon-bodega-electoral"))

TIPOS = ["deck", "maciza_mem", "maciza_thin", "maciza_thick",
         "nervada_1d", "waffle_2d"]


def edb_de(tipo):
    """El .EDB del mezanine con esa losa.

    ⚠️ El `deck` tiene DOS nombres posibles y no son el mismo fichero:
    `a_etabs.py --losa deck` escribe `parte_mezanine_deck.EDB`, y aqui se leia
    `parte_mezanine.EDB` — el de cuando el deck se corria sin `--losa`. El
    29-ago eso hizo que la referencia del deck saliera IDENTICA a la de agosto y
    pareciera que ETABS no habia cambiado. Se usa el del tipo si existe."""
    con_tipo = os.path.join(GALPON, "parte_mezanine_%s.EDB" % tipo)
    if os.path.exists(con_tipo):
        return con_tipo
    return os.path.join(GALPON, "parte_mezanine.EDB")


def avisos_del_log(ruta_edb):
    """Lo que ETABS escribe en su .LOG. Es el UNICO sitio donde avisa de que la
    estructura es inestable: `RunAnalysis` devuelve 0 y el estado de los casos
    sale OK* igual. Ignorarlo costo tres corridas."""
    log = os.path.splitext(ruta_edb)[0] + ".LOG"
    if not os.path.exists(log):
        return {"log": "no hay"}
    t = open(log, encoding="latin1", errors="replace").read()
    import re
    m = re.search(r"NUMBER OF NEGATIVE EIGENVALUES\s*=\s*(\d+)", t)
    return {"autovalores_negativos": int(m.group(1)) if m else None,
            "inestable": "UNSTABLE" in t}


def seleccionar_salida(sm):
    """El caso que se compara: la COMBINACION `SERVICIO` (Dead+SDL+Live+Lroof),
    que es la que arma `a_heks.py` por defecto (`CASO=SERVICIO`).

    ⚠️ Antes se pedia el caso `GRAV`, que dejo de existir el 28-ago-2026 cuando
    las cargas se separaron en Dead / SDL / Live / Lroof. Y ETABS NO se queja:
    devuelve cero resultados con todos los casos en OK. Medido el 29-ago:

        estado: Modal=OK, Dead=OK, Live=OK, SDL=OK, Lroof=OK, ...
        ETABS  Uz max = 0.00 mm  en el nudo
        ETABS  Suma Rz = 0.0 kN

    Un caso que no existe se pide igual que uno que si, y la diferencia solo se
    ve en el resultado. Se cae a `GRAV` para poder leer los .EDB antiguos."""
    sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
    try:
        if sm.Results.Setup.SetComboSelectedForOutput("SERVICIO") == 0:
            return "SERVICIO"
    except Exception:
        pass
    sm.Results.Setup.SetCaseSelectedForOutput("GRAV")
    return "GRAV"


def volcar(sm, tipo):
    out = {"tipo": tipo, "unidades": {"fuerza": "kN", "long": "m"}}
    out["caso"] = seleccionar_salida(sm)

    # ── desplazamiento de CADA nudo ──
    _, pes, _ = sm.PointElm.GetNameList()
    des = []
    for p in pes:
        x, y, z, _ = sm.PointElm.GetCoordCartesian(p, 0., 0., 0.)
        r = sm.Results.JointDispl(p, 1, 0, [], [], [], [], [], [], [], [],
                                  [], [], [])
        if not r[0]:
            continue
        des.append({"x": x, "y": y, "z": z, "ux": float(r[6][0]),
                    "uy": float(r[7][0]), "uz": float(r[8][0])})
    out["desplazamientos"] = des

    # ── fuerzas de BARRA ──
    # 0 N · 1 Obj · 2 ObjSta · 3 Elm · 4 ElmSta · 5 LoadCase · 6 StepType
    # 7 StepNum · 8 P · 9 V2 · 10 V3 · 11 T · 12 M2 · 13 M3
    _, frames, _ = sm.FrameObj.GetNameList()
    fr = []
    for nm in frames:
        # Name, ItemTypeElm, NumberResults + 13 arrays (Obj..M3). Con 14 da
        # "call takes exactly 17 arguments (18 given)".
        r = sm.Results.FrameForce(nm, 0, 0, *([[]] * 13))
        if not r[0]:
            continue
        for k in range(r[0]):
            fr.append({"barra": nm, "x": float(r[2][k]), "P": float(r[8][k]),
                       "V2": float(r[9][k]), "V3": float(r[10][k]),
                       "T": float(r[11][k]), "M2": float(r[12][k]),
                       "M3": float(r[13][k])})
    out["barras"] = fr

    # ── fuerzas de SHELL ──
    # 7 F11 · 8 F22 · 9 F12 · 13 FVM · 14 M11 · 15 M22 · 16 M12 · 20 V13 · 21 V23
    _, areas, _ = sm.AreaObj.GetNameList()
    sh = []
    for nm in areas:
        try:
            r = sm.Results.AreaForceShell(nm, 0, 0, *([[]] * 23))
        except Exception as ex:
            out["shell_error"] = "%s: %s" % (type(ex).__name__, ex)
            break
        if not r[0]:
            continue
        for k in range(r[0]):
            sh.append({"area": nm, "F11": float(r[7][k]), "F22": float(r[8][k]),
                       "F12": float(r[9][k]), "M11": float(r[14][k]),
                       "M22": float(r[15][k]), "M12": float(r[16][k]),
                       "V13": float(r[20][k]), "V23": float(r[21][k])})
    out["shells"] = sh

    # ── reacciones y su centroide (sirve de centro de masa de la carga) ──
    reac, sx, sy, s = [], 0.0, 0.0, 0.0
    for p in pes:
        rr = sm.PointElm.GetRestraint(p, [])
        f = [bool(v) for v in (list(rr[0]) if rr and rr[0] is not None else [])]
        if not any(f):
            continue
        x, y, z, _ = sm.PointElm.GetCoordCartesian(p, 0., 0., 0.)
        q = sm.Results.JointReact(p, 1, 0, [], [], [], [], [], [], [], [],
                                  [], [], [])
        if not q[0]:
            continue
        fz = float(q[8][0])
        reac.append({"x": x, "y": y, "FX": float(q[6][0]),
                     "FY": float(q[7][0]), "FZ": fz})
        sx += x * fz
        sy += y * fz
        s += fz
    out["reacciones"] = reac
    out["base"] = {"FZ": s,
                   "x_centroide": sx / s if abs(s) > 1e-9 else None,
                   "y_centroide": sy / s if abs(s) > 1e-9 else None}

    # ── MODAL ──
    sm.Results.Setup.DeselectAllCasesAndCombosForOutput()
    try:
        sm.Results.Setup.SetCaseSelectedForOutput("MODAL")
        p = sm.Results.ModalPeriod(0, [], [], [], [], [], [], [])
        out["modos"] = [{"n": k + 1, "T": float(p[4][k]), "f": float(p[5][k])}
                        for k in range(p[0])]
        m = sm.Results.ModalParticipatingMassRatios(0, *([[]] * 16))
        out["masa_modal"] = [
            {"n": k + 1, "T": float(m[4][k]),
             "UX": float(m[5][k]), "UY": float(m[6][k]), "UZ": float(m[7][k]),
             "SumUX": float(m[8][k]), "SumUY": float(m[9][k]),
             "RZ": float(m[13][k])} for k in range(m[0])]
    except Exception as ex:
        out["modal_error"] = "%s: %s" % (type(ex).__name__, ex)
    return out


def main(quiere):
    h = comtypes.client.CreateObject("ETABSv1.Helper").QueryInterface(E.cHelper)
    o = h.CreateObjectProgID("CSI.ETABS.API.ETABSObject")
    o.ApplicationStart()
    try:
        o.Hide()
    except Exception:
        pass
    sm = o.SapModel
    try:
        for t in quiere:
            edb = edb_de(t)
            print("\n=== %s" % t, flush=True)
            if not os.path.exists(edb):
                print("   !! falta %s — correr antes a_etabs.py --losa %s"
                      % (os.path.basename(edb), t))
                continue
            sm.InitializeNewModel(6)
            sm.File.OpenFile(edb)
            sm.SetPresentUnits(6)
            if not sm.GetModelIsLocked():
                sm.Analyze.RunAnalysis()
            av = avisos_del_log(edb)
            if av.get("inestable"):
                print("   !! el .LOG dice INESTABLE (%s autovalores negativos)"
                      % av.get("autovalores_negativos"))
            d = volcar(sm, t)
            d["log"] = av
            uz = min((q["uz"] for q in d["desplazamientos"]), default=0.0)
            ruta = os.path.join(AQUI, "losas_ref_%s.json" % t)
            json.dump(d, open(ruta, "w", encoding="utf-8"), indent=1)
            print("   Uz max %8.3f mm · %d nudos · %d barras · %d shells · "
                  "%d modos · FZ %.2f kN"
                  % (uz * 1000, len(d["desplazamientos"]), len(d["barras"]),
                     len(d["shells"]), len(d.get("modos", [])),
                     d["base"]["FZ"]), flush=True)
            for k in ("shell_error", "modal_error"):
                if k in d:
                    print("   !!", k, d[k])
    finally:
        o.ApplicationExit(False)


if __name__ == "__main__":
    main([a for a in sys.argv[1:] if not a.startswith("-")] or TIPOS)
