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
    solve / reset                (se ignoran: aquí se resuelve al llamar)

⚠️ El orden de los tokens de `frame` NO es el que sugiere el nombre: el 6º es
I22 (plano 1-3, V3/M2) y el 7º es I33 (plano 1-2, V2/M3 — el del CANTO). Es como
lo lee `cliModeler.ts`; cambiarlo aquí cruzaría las inercias.
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
    errores: list[str] = field(default_factory=list)


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
    errores: list[str] = []

    with open(ruta, encoding="utf-8", errors="replace") as fh:
        for linea in fh:
            t = linea.split()
            if not t or t[0].startswith("#"):
                continue
            cmd = t[0].lower()
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
                elif cmd in ("solve", "reset", "shelltype", "spring",
                             "shell", "areaload", "shellang", "mass", "diaph"):
                    continue
            except (IndexError, ValueError) as e:
                errores.append(f"{linea.strip()!r}: {e}")

    m = ModeloHeks(errores=errores)
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

    for nid, flags in sup.items():
        if nid in idx_de:
            ni.supports[idx_de[nid]] = flags
    for nid, v in cargas.items():
        if nid in idx_de:
            ni.loads[idx_de[nid]] = tuple(v)  # type: ignore[assignment]

    huerfanas = set(fl) - {f["id"] for f in frames}
    if huerfanas:
        m.errores.append(f"frameload sin barra: {sorted(huerfanas)[:10]}")
    return m


def resolver_heks(m: ModeloHeks):
    """`deform` sobre un modelo ya leído."""
    return deform(m.nodes, m.elements, m.node_inputs, m.element_inputs)


def esfuerzos_heks(m: ModeloHeks, res):
    """`analyze` sobre un modelo ya leído."""
    return analyze(m.nodes, m.elements, m.element_inputs, res)
