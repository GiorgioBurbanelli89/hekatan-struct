"""Lector de `.heks` — el MISMO texto que come el motor TS (`cliModeler.ts`).

Por qué un lector y no un builder en Python: el árbitro tiene que resolver el
modelo que resuelve el motor, letra por letra. Si el modelo se vuelve a escribir
a mano en Python, lo que se compara son dos modelos parecidos, no dos motores.

    from hekatan_struct.heks import leer_heks, resolver_heks
    modelo = leer_heks("galpon_bodega.heks")
    res = resolver_heks(modelo)

Comandos soportados (los que usa el galpón):
    node ID X Y Z
    frame ID nI nJ E A I22 I33 J nu rho [D B]   (# NOMBRE al final, opcional)
    support ID fixed|pinned|uxuyuz...
    load ID FX FY FZ MX MY MZ
    frameload ID WX WY WZ        (kN/m, ejes GLOBALES)
    ang ID grados                (local axis angle CSI)
    as  ID As2 As3               (áreas de cortante, m2)
    release ID <12 bits> | pin fix
    shell ID n1 n2 n3 n4 t E [q] [rho]      (cáscara Q4; q = carga de superficie)
    areaload ID q                (kN/m2 sobre la cáscara, + hacia +z)
    shellmod ID mem bend | ID F11 F22 F12 M11 M22 M12 V13 V23
    shellang ID grados           (se guarda; el solver NO lo usa, ni éste ni el TS)
    areaobj ID n1 n2 n3 n4 desde hasta      (agrupa celdas; solo trazabilidad)
    solve / reset                (se ignoran: aquí se resuelve al llamar)

⚠️ El orden de los tokens de `frame` NO es el que sugiere el nombre: el 6º es
I22 (plano 1-3, V3/M2) y el 7º es I33 (plano 1-2, V2/M3 — el del CANTO). Es como
lo lee `cliModeler.ts`; cambiarlo aquí cruzaría las inercias.

⚠️ Lo que el lector NO monta queda CONTADO en `ModeloHeks.ignorados` y avisa
por `errores`. Un modelo que no se lee entero da flecha 0 y báscula perfecta
(0 = 0): el silencio se leería como "se leyó bien".
"""
from __future__ import annotations

import math
from dataclasses import dataclass, field

from .data_model import ElementInputs, NodeInputs
from .solver import analyze, deform


@dataclass
class ModeloHeks:
    nodes: list[tuple[float, float, float]] = field(default_factory=list)
    elements: list[list[int]] = field(default_factory=list)
    node_inputs: NodeInputs = field(default_factory=NodeInputs)
    element_inputs: ElementInputs = field(default_factory=ElementInputs)
    # trazabilidad: ID del .heks <-> índice interno
    node_id: list[int] = field(default_factory=list)
    frame_id: list[int] = field(default_factory=list)
    frame_sec: list[str] = field(default_factory=list)
    shell_id: list[int] = field(default_factory=list)
    # índice interno de cada cáscara dentro de `elements`
    shell_idx: dict[int, int] = field(default_factory=dict)
    errores: list[str] = field(default_factory=list)
    # comandos que el lector NO monta (hoy: `spring`, `mass`, `diaph`, y
    # cualquiera que se añada al .heks). Antes se saltaban en silencio: el
    # mezanine, que carga por `areaload` sobre 90 cáscaras, salía con 0 nudos
    # cargados, flecha 0.000 mm y un cierre de báscula perfecto — porque 0 = 0.
    # Un modelo que no se lee entero tiene que DECIRLO.
    ignorados: dict[str, int] = field(default_factory=dict)


def _support_flags(spec: str) -> tuple[bool, bool, bool, bool, bool, bool]:
    s = spec.strip().lower().replace(" ", "")
    if s in ("fixed", "empotrado", "fix"):
        return (True,) * 6
    if s in ("pinned", "articulado", "pin"):
        return (True, True, True, False, False, False)
    if s in ("free", "libre", ""):
        return (False,) * 6
    if set(s) <= {"0", "1"} and len(s) == 6:
        return tuple(c == "1" for c in s)  # type: ignore[return-value]
    keys = ("ux", "uy", "uz", "rx", "ry", "rz")
    return tuple(k in s for k in keys)  # type: ignore[return-value]


def leer_heks(ruta: str) -> ModeloHeks:
    """Parsea un `.heks` y devuelve el modelo listo para `deform`."""
    nodos: dict[int, tuple[float, float, float]] = {}
    frames: list[dict] = []
    sup: dict[int, tuple] = {}
    cargas: dict[int, list[float]] = {}
    fl: dict[int, tuple[float, float, float]] = {}
    angs: dict[int, float] = {}
    ashear: dict[int, tuple[float, float]] = {}
    rels: dict[int, list[bool]] = {}
    shells: list[dict] = []
    q_area: dict[int, float] = {}          # carga de superficie por shell ID
    smod: dict[int, tuple[float, float]] = {}      # shellmod escalar
    smod_dir: dict[int, list[float]] = {}          # shellmod direccional (8)
    sang: dict[int, float] = {}
    stipo: dict[int, int] = {}             # shelltype: 1 = thin, 0 = thick
    errores: list[str] = []
    ignorados: dict[str, int] = {}

    with open(ruta, encoding="utf-8", errors="replace") as fh:
        for linea in fh:
            t = linea.split()
            if not t or t[0].startswith("#"):
                continue
            cmd = t[0].lower()
            # Comentario INLINE. `cliModeler.ts` no lo quita: cada `parseFloat`
            # de un token opcional le sale NaN y el `isFinite` lo descarta. Aqui
            # se corta la linea, que da lo mismo y no revienta — sin esto, un
            # `shell ... 2.17e7   # SHELL-LOSA` tiraba ValueError y las 1175
            # cascaras de losas_maciza se quedaban FUERA del modelo.
            # `frame` se queda con la linea entera: de ahi saca el nombre de la
            # seccion, que necesita el exportador.
            if cmd not in ("frame", "beam", "column", "f") and "#" in t:
                t = t[:t.index("#")]
            try:
                if cmd == "node" or cmd == "n":
                    nodos[int(t[1])] = (float(t[2]), float(t[3]), float(t[4]))
                elif cmd in ("frame", "beam", "column", "f"):
                    i_com = t.index("#") if "#" in t else len(t)
                    sec = t[i_com + 1] if i_com + 1 < len(t) else ""
                    tk = t[:i_com]

                    def opt(k):
                        return float(tk[k]) if len(tk) > k else None

                    A = float(tk[5]) if len(tk) > 5 else 0.16
                    I22 = float(tk[6]) if len(tk) > 6 else 0.001
                    I33 = opt(7)
                    J = opt(8)
                    frames.append(dict(
                        id=int(tk[1]), nI=int(tk[2]), nJ=int(tk[3]),
                        E=float(tk[4]) if len(tk) > 4 else 25e6,
                        A=A, I22=I22,
                        I33=I33 if I33 is not None else I22,
                        J=J if J is not None else 0.14 * (math.sqrt(A) ** 4),
                        nu=opt(9) if opt(9) is not None else 0.2,
                        rho=opt(10) if opt(10) is not None else 2.45,
                        sec=sec,
                    ))
                elif cmd in ("support", "fix"):
                    sup[int(t[1])] = _support_flags(" ".join(t[2:]))
                elif cmd == "load":
                    v = [float(x) for x in t[2:8]]
                    v += [0.0] * (6 - len(v))
                    a = cargas.setdefault(int(t[1]), [0.0] * 6)
                    for k in range(6):
                        a[k] += v[k]
                elif cmd == "frameload":
                    fl[int(t[1])] = (float(t[2]), float(t[3]), float(t[4]))
                elif cmd == "ang":
                    angs[int(t[1])] = float(t[2])
                elif cmd == "as":
                    ashear[int(t[1])] = (float(t[2]), float(t[3]))
                elif cmd == "release":
                    if len(t) >= 3 and set("".join(t[2:])) <= {"0", "1"}:
                        bits = "".join(t[2:])
                        rels[int(t[1])] = [c == "1" for c in bits]
                    else:  # forma corta: pin / fix por extremo
                        pal = [x.lower() for x in t[2:4]]
                        r = [False] * 12
                        if len(pal) > 0 and pal[0] == "pin":
                            r[4] = r[5] = True
                        if len(pal) > 1 and pal[1] == "pin":
                            r[10] = r[11] = True
                        rels[int(t[1])] = r
                elif cmd in ("shell", "plate", "s"):
                    # shell ID n1 n2 n3 n4 t E [q] [rho]
                    sid = int(t[1])
                    pts = [int(t[2]), int(t[3]), int(t[4]), int(t[5])]
                    esp = float(t[6]) if len(t) > 6 else 0.20
                    Esh = float(t[7]) if len(t) > 7 else 25e6
                    # token 8: carga de superficie del propio shell.
                    # token 9: densidad — el DECK colaborante pesa menos que
                    # una losa maciza del mismo canto (loseta + nervios).
                    if len(t) > 8:
                        qv = float(t[8])
                        if qv != 0:
                            q_area[sid] = qv
                    rho_sh = float(t[9]) if len(t) > 9 else 2.45
                    shells.append(dict(id=sid, pts=pts, t=esp, E=Esh, rho=rho_sh))
                elif cmd in ("areaload", "qarea"):
                    q_area[int(t[1])] = float(t[2])
                elif cmd == "shellmod":
                    sid = int(t[1])
                    vals = [float(v) for v in t[2:]]
                    if len(vals) >= 8:
                        smod_dir[sid] = vals[:8]
                    elif len(vals) >= 2:
                        smod[sid] = (vals[0], vals[1])
                elif cmd == "shellang":
                    sang[int(t[1])] = float(t[2])
                elif cmd in ("shelltype", "plateform"):
                    q = t[2].lower() if len(t) > 2 else ""
                    if q in ("thin", "delgada", "kirchhoff", "1"):
                        stipo[int(t[1])] = 1
                    elif q in ("thick", "gruesa", "mindlin", "0"):
                        stipo[int(t[1])] = 0
                    else:
                        errores.append(f"shelltype {t[1]}: se esperaba thin o thick")
                elif cmd == "areaobj":
                    continue        # agrupa celdas para el exportador, no da rigidez
                elif cmd in ("solve", "reset"):
                    continue        # no aportan modelo: no son un hueco
                else:
                    # shell, areaload, shellang, shellmod, spring, mass, diaph…
                    # y cualquier comando futuro: se cuentan, no se callan.
                    ignorados[cmd] = ignorados.get(cmd, 0) + 1
            except (IndexError, ValueError) as e:
                errores.append(f"{linea.strip()!r}: {e}")

    m = ModeloHeks(errores=errores, ignorados=ignorados)
    ids = sorted(nodos)                       # mismo orden que cliModeler.ts
    idx_de = {nid: k for k, nid in enumerate(ids)}
    m.node_id = ids
    m.nodes = [nodos[i] for i in ids]

    ei, ni = m.element_inputs, m.node_inputs
    for f in frames:
        if f["nI"] not in idx_de or f["nJ"] not in idx_de:
            m.errores.append(f"frame {f['id']}: nodo inexistente")
            continue
        k = len(m.elements)
        m.elements.append([idx_de[f["nI"]], idx_de[f["nJ"]]])
        m.frame_id.append(f["id"])
        m.frame_sec.append(f["sec"])
        nu = f["nu"]
        ei.elasticities[k] = f["E"]
        ei.shear_moduli[k] = f["E"] / (2 * (1 + nu))
        ei.poissons_ratios[k] = nu
        ei.areas[k] = f["A"]
        ei.moments_of_inertia_y[k] = f["I22"]    # token 6 -> I22 (plano 1-3)
        ei.moments_of_inertia_z[k] = f["I33"]    # token 7 -> I33 (plano 1-2)
        ei.torsional_constants[k] = f["J"]
        ei.densities[k] = f["rho"]
        if f["id"] in angs:
            ei.local_angles[k] = angs[f["id"]]
        if f["id"] in ashear:
            As2, As3 = ashear[f["id"]]
            ei.shear_areas_z[k] = As2   # As2 -> V2, va con I33 (=moments_z)
            ei.shear_areas_y[k] = As3   # As3 -> V3, va con I22 (=moments_y)
        if f["id"] in rels:
            ei.moment_releases[k] = rels[f["id"]]
        if f["id"] in fl:
            ei.frame_loads[k] = fl[f["id"]]

    # ── CÁSCARAS ────────────────────────────────────────────────────────
    # Van DESPUÉS de las barras, como en `cliModeler.ts`: el índice interno de
    # un elemento es su posición en `elements`, y si el orden no es el mismo
    # los dos motores no están numerando lo mismo.
    for sh in shells:
        if any(p not in idx_de for p in sh["pts"]):
            m.errores.append(f"shell {sh['id']}: algún nodo inexistente")
            continue
        k = len(m.elements)
        m.elements.append([idx_de[p] for p in sh["pts"]])
        m.shell_id.append(sh["id"])
        m.shell_idx[sh["id"]] = k
        ei.elasticities[k] = sh["E"]
        ei.shear_moduli[k] = sh["E"] / (2 * 1.2)   # nu = 0.2, como cliModeler
        ei.poissons_ratios[k] = 0.2
        ei.thicknesses[k] = sh["t"]
        ei.densities[k] = sh["rho"]
        if sh["id"] in smod_dir:
            d = smod_dir[sh["id"]]
            ei.shell_modifiers[k] = d
            # Y ADEMÁS el par escalar equivalente, que es lo único que mira el
            # modal: si aquí no se pone, el estático arma el deck con flexión 0
            # y el modal con flexión 1 — dos rigideces para el MISMO modelo.
            ei.membrane_modifiers[k] = (d[0] + d[1]) / 2
            ei.bending_modifiers[k] = (d[3] + d[4]) / 2
        elif sh["id"] in smod:
            ei.membrane_modifiers[k] = smod[sh["id"]][0]
            ei.bending_modifiers[k] = smod[sh["id"]][1]
        if sh["id"] in sang:
            ei.shell_angles[k] = sang[sh["id"]]

    for nid, flags in sup.items():
        if nid in idx_de:
            ni.supports[idx_de[nid]] = flags
    for nid, v in cargas.items():
        if nid in idx_de:
            ni.loads[idx_de[nid]] = tuple(v)  # type: ignore[assignment]

    # ── CARGA DE SUPERFICIE -> vector de fuerzas nodales CONSISTENTE ────────
    # Una carga de área entra al FEM por un único camino: f_i = ∫ N_i·q·dA. No
    # hay otro, así que calcularlo aquí da lo MISMO que hacerlo dentro del
    # kernel: es la definición, no un atajo. Port de `cliModeler.ts`.
    #
    # Se integra con Gauss 2x2 y el jacobiano REAL (el módulo del producto
    # vectorial de las tangentes, que vale para un paño en cualquier plano, no
    # solo horizontal). En un rectángulo sale q·A/4 en cada nudo; en un
    # cuadrilátero deformado NO, y ahí está la diferencia con repartir el área
    # entre cuatro.
    g2 = 1.0 / math.sqrt(3.0)
    gauss = ((-g2, -g2), (g2, -g2), (g2, g2), (-g2, g2))
    for sh in shells:
        q = q_area.get(sh["id"])
        if not q:
            continue
        if any(p not in idx_de for p in sh["pts"]):
            continue                       # ya avisado al montar la cáscara
        idx4 = [idx_de[p] for p in sh["pts"]]
        P = [m.nodes[i] for i in idx4]
        f = [0.0, 0.0, 0.0, 0.0]
        for xi, eta in gauss:
            N = (0.25 * (1 - xi) * (1 - eta), 0.25 * (1 + xi) * (1 - eta),
                 0.25 * (1 + xi) * (1 + eta), 0.25 * (1 - xi) * (1 + eta))
            dNx = (-0.25 * (1 - eta), 0.25 * (1 - eta),
                   0.25 * (1 + eta), -0.25 * (1 + eta))
            dNe = (-0.25 * (1 - xi), -0.25 * (1 + xi),
                   0.25 * (1 + xi), 0.25 * (1 - xi))
            a = [sum(dNx[i] * P[i][c] for i in range(4)) for c in range(3)]
            b = [sum(dNe[i] * P[i][c] for i in range(4)) for c in range(3)]
            cr = (a[1] * b[2] - a[2] * b[1],
                  a[2] * b[0] - a[0] * b[2],
                  a[0] * b[1] - a[1] * b[0])
            detJ = math.sqrt(cr[0] ** 2 + cr[1] ** 2 + cr[2] ** 2)  # dA real
            for i in range(4):
                f[i] += N[i] * q * detJ
        for i, k in enumerate(idx4):
            prev = list(ni.loads.get(k, (0.0,) * 6))
            prev[2] += f[i]                                        # Fz
            ni.loads[k] = tuple(prev)  # type: ignore[assignment]

    huerfanas_q = set(q_area) - {sh["id"] for sh in shells}
    if huerfanas_q:
        m.errores.append(f"areaload sin cáscara: {sorted(huerfanas_q)[:10]}")
    if stipo:
        # `shelltype` existe en el .heks y en el motor TS/C++ (plateFormulations
        # -> Kirchhoff Shell-Thin), pero el shell de Python es Mindlin/MITC4 y
        # no tiene ese camino. Callarlo sería dar por buena otra teoría.
        m.errores.append(
            f"shelltype declarado en {len(stipo)} cáscaras y NO aplicado: "
            "el shell de Python es Mindlin (Thick)"
        )

    huerfanas = set(fl) - {f["id"] for f in frames}
    if huerfanas:
        m.errores.append(f"frameload sin barra: {sorted(huerfanas)[:10]}")
    if ignorados:
        detalle = ", ".join(f"{k}x{v}" for k, v in sorted(ignorados.items()))
        m.errores.append(f"comandos NO montados: {detalle}")
    if not ni.loads and not ei.frame_loads:
        m.errores.append("modelo SIN carga: la deformada va a salir 0")
    return m


def resolver_heks(m: ModeloHeks):
    """`deform` sobre un modelo ya leído."""
    return deform(m.nodes, m.elements, m.node_inputs, m.element_inputs)


def esfuerzos_heks(m: ModeloHeks, res):
    """`analyze` sobre un modelo ya leído."""
    return analyze(m.nodes, m.elements, m.element_inputs, res)
