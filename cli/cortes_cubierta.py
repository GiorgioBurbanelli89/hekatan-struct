# -*- coding: utf-8 -*-
"""
TODOS los cortes en elevacion, en los DOS sentidos, en una lamina.

    python cli/cortes_cubierta.py <fichero.dxf> <salida.png> [zmin] [zmax] [exag]

Un corte suelto ensena un portico. La lamina ensena si el problema es de UN
sitio o de TODOS — y eso cambia el diagnostico: si falla en un eje, es un error
de dibujo; si falla en los diez, es como esta montada la cubierta.

Los ejes salen del propio DXF (capa EJES, con su etiqueta), asi que son los del
proyectista: se habla de «el eje B» y se sabe de que se habla.

Cada corte se dibuja MIRANDO DE FRENTE a su eje:
  · eje en X (x = cte, vertical en planta)  ->  se ve el plano Y-Z
  · eje en Y (y = cte)                       ->  se ve el plano X-Z

Y `zmin` recorta a la cubierta: con el edificio entero, los 2 m de cubierta se
quedan en una franja de tres pixeles.

`exag` estira la vertical (por defecto 4). Una cubierta de 2 m de canto sobre
20 m de ancho, a escala 1:1, es una raya: la pendiente y los desencuentros de
15 cm no se ven. Estirando se ven — y el titulo lo dice, para que nadie mida
angulos ahi.
"""
import sys
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

sys.path.insert(0, str(Path(__file__).parent))
from ver_dxf import ACI, leer            # noqa: E402  (mismo lector, un solo sitio)

TOL = 0.35          # medio ancho de pilar: lo que se considera «en el eje»


def ejes_del_dxf(ents):
    """Los ejes con etiqueta: (nombre, esX, coordenada), ordenados."""
    textos = [e for e in ents if e.get("capa") == "EJES" and e["tipo"] == "TEXT"]
    lineas = [e for e in ents if e.get("capa") == "EJES" and e["tipo"] == "LINE"]
    out = []
    for t in textos:
        nombre = t.get("texto", "").strip()
        if not nombre or nombre == "-":
            continue
        cerca = min(lineas, key=lambda e: min(abs(e.get(10, 1e9) - t[10]),
                                              abs(e.get(20, 1e9) - t[20])))
        esX = abs(cerca.get(10, 0) - cerca.get(11, 0)) < 1e-6
        out.append((nombre, esX, cerca.get(10 if esX else 20, 0.0)))
    # Sin repetidos, y los de X primero
    vistos, limpio = set(), []
    for o in sorted(out, key=lambda x: (not x[1], x[2])):
        if o[0] in vistos:
            continue
        vistos.add(o[0])
        limpio.append(o)
    return limpio


def dibujar(ax, ents, esX, val, zmin, zmax):
    cod = 10 if esX else 20
    cod2 = cod + 1
    # De frente al eje: si el eje es x = cte, el portico se ve en Y-Z.
    a, b = (20, 30) if esX else (10, 30)
    da, db = (21, 31) if esX else (11, 31)

    def enEje(e):
        if e["tipo"] == "LINE":
            return abs(e.get(cod, 1e9) - val) < TOL and abs(e.get(cod2, 1e9) - val) < TOL
        return abs(e.get(cod, 1e9) - val) < TOL

    def enZ(e):
        z = [e.get(30), e.get(31)]
        z = [v for v in z if v is not None]
        return not z or any(zmin <= v <= zmax for v in z)

    n = 0
    for e in ents:
        c = e.get("capa", "?")
        if c == "PLANTAS":
            # Las plantas son la referencia: se dejan siempre, pero solo las
            # que caen en la ventana de cotas.
            if e["tipo"] == "LINE" and not (zmin <= e.get(30, -1e9) <= zmax):
                continue
            if e["tipo"] == "TEXT" and not (zmin <= e.get(30, -1e9) <= zmax):
                continue
        elif not (enEje(e) and enZ(e)):
            continue
        if c == "EJES":
            continue                      # en elevacion el eje es el propio corte
        col = ACI.get(e.get("color", 8), "#aaaaaa")
        gordo = c in ("SUELTOS", "MECANISMO", "CASI_UNIDAS")
        lw = 1.6 if gordo else 0.55
        z = 5 if gordo else 1
        if e["tipo"] == "LINE" and a in e and da in e:
            ax.plot([e[a], e[da]], [e[b], e[db]], color=col, lw=lw, zorder=z)
            n += 1
        elif e["tipo"] == "CIRCLE" and a in e:
            ax.add_patch(plt.Circle((e[a], e[b]), e.get(40, 0.1), fill=False,
                                    color=col, lw=0.8, zorder=z))
            n += 1
        elif e["tipo"] == "TEXT" and a in e and c == "CASI_UNIDAS":
            ax.text(e[a], e[b], e.get("texto", ""), color=col, fontsize=5, zorder=6)
    return n


def main() -> int:
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    dxf, png = Path(sys.argv[1]), Path(sys.argv[2])
    zmin = float(sys.argv[3]) if len(sys.argv) > 3 else 10.5
    zmax = float(sys.argv[4]) if len(sys.argv) > 4 else 1e9
    exag = float(sys.argv[5]) if len(sys.argv) > 5 else 4.0

    ents = leer(dxf)
    ejes = ejes_del_dxf(ents)
    if not ejes:
        print("el DXF no trae ejes con etiqueta")
        return 2

    enX = [e for e in ejes if e[1]]
    enY = [e for e in ejes if not e[1]]
    filas = 2
    cols = max(len(enX), len(enY), 1)
    fig, axs = plt.subplots(filas, cols, figsize=(4.0 * cols, 7.5), dpi=125,
                            squeeze=False)
    fig.patch.set_facecolor("#101014")

    for fila, grupo, titulo in ((0, enX, "eje"), (1, enY, "eje")):
        for k in range(cols):
            ax = axs[fila][k]
            ax.set_facecolor("#101014")
            ax.set_xticks([]); ax.set_yticks([])
            for s in ax.spines.values():
                s.set_color("#2a2a2a")
            if k >= len(grupo):
                ax.axis("off")
                continue
            nombre, esX, val = grupo[k]
            n = dibujar(ax, ents, esX, val, zmin, zmax)
            # Vertical estirada: si no, la cubierta es una raya.
            #
            # OJO al sentido: en matplotlib `set_aspect(a)` es el alto que ocupa
            # una unidad de Y frente a una de X. Para ESTIRAR la vertical va el
            # numero mayor que 1 — con `1/exag` se aplasta, que es justo lo
            # contrario de lo que hace falta aqui.
            ax.set_aspect(exag)
            ax.set_ylim(zmin - 0.15, (zmax if zmax < 1e8 else ax.get_ylim()[1]) + 0.15)
            ax.set_title(f"{titulo} {nombre}   ({n})", color="#dddddd", fontsize=8)

    fig.suptitle(f"{dxf.name} — cortes en elevacion, los dos sentidos · "
                 f"z de {zmin} a {zmax if zmax < 1e8 else 'arriba'} m · "
                 f"VERTICAL x{exag:g} (no medir angulos)",
                 color="#eeeeee", fontsize=11)
    fig.tight_layout(rect=[0, 0, 1, 0.96])
    png.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(png, facecolor=fig.get_facecolor())
    print(f"{len(enX)} ejes en X · {len(enY)} en Y")
    print(f"-> {png}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
