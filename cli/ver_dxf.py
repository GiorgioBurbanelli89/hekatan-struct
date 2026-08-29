# -*- coding: utf-8 -*-
"""
Dibuja un DXF a PNG, por capas, PARA MIRARLO.

    python cli/ver_dxf.py <fichero.dxf> <salida.png> [capas] [vista]

    capas  lista separada por comas; por defecto TODAS
           ej: EJES,SUELTOS   -> el modelo apagado y solo lo que falla
    vista  xy (planta) | xz (alzado) | yz  — por defecto xy
           EJE:B      -> el CORTE por el eje B: solo lo que esta en ese plano,
                         visto de frente. Es el portico del eje, con sus
                         columnas, y ahi se ve donde falta la union.

Por que un lector propio y no una libreria: el DXF lo escribe
`e2kDiagnosticoDxf.ts` y es R12 ASCII con cuatro entidades (LINE, CIRCLE,
TEXT). Leerlas son treinta lineas, y asi esto comprueba de paso que el fichero
esta bien escrito — que es justo lo que hay que verificar. Con una libreria
podria pasar que ella lo arregle al vuelo y el visor del usuario no.
"""
import sys
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

# Los indices de color de AutoCAD que usa el generador.
ACI = {1: "#ff2020", 2: "#ffff00", 3: "#00c000", 4: "#00cccc", 5: "#4060ff",
       8: "#808080", 30: "#ff9000", 251: "#c8c8c8"}


def leer(ruta: Path):
    """Los pares (codigo, valor) del DXF, y de ahi las entidades."""
    txt = ruta.read_text(encoding="latin1").splitlines()
    pares = [(int(txt[i].strip()), txt[i + 1]) for i in range(0, len(txt) - 1, 2)
             if txt[i].strip().lstrip("-").isdigit()]
    ents, cur = [], None
    for cod, val in pares:
        if cod == 0:
            if cur:
                ents.append(cur)
            cur = {"tipo": val.strip()} if val.strip() in ("LINE", "CIRCLE", "TEXT") else None
        elif cur is not None:
            if cod == 8:
                cur["capa"] = val.strip()
            elif cod == 62:
                cur["color"] = int(val)
            elif cod == 1:
                cur["texto"] = val
            elif cod in (10, 20, 30, 11, 21, 31, 40):
                try:
                    cur[cod] = float(val)
                except ValueError:
                    pass
    if cur:
        ents.append(cur)
    return ents


def main() -> int:
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    dxf, png = Path(sys.argv[1]), Path(sys.argv[2])
    capas = set(sys.argv[3].split(",")) if len(sys.argv) > 3 and sys.argv[3] else None
    vista = (sys.argv[4] if len(sys.argv) > 4 else "xy").lower()
    # ── El corte por EJE ──
    #
    corte = None
    if vista.startswith("eje:"):
        etiqueta = sys.argv[4].split(":", 1)[1]
        ents0 = leer(dxf)
        # El eje es la LINEA de la capa EJES cuya etiqueta esta al lado. Se
        # busca por el TEXT, que es lo que el usuario lee en el plano.
        rot = [e for e in ents0 if e.get("capa") == "EJES" and e["tipo"] == "TEXT"
               and e.get("texto", "").strip() == etiqueta]
        if not rot:
            print("no encuentro el eje " + etiqueta + ". Los que hay: " +
                  ", ".join(sorted({e.get("texto", "").strip() for e in ents0
                                    if e.get("capa") == "EJES" and e["tipo"] == "TEXT"})))
            return 2
        t = rot[0]
        # .Es un eje en X (linea vertical en planta) o en Y?
        lineas = [e for e in ents0 if e.get("capa") == "EJES" and e["tipo"] == "LINE"]
        cerca = min(lineas, key=lambda e: min(abs(e.get(10, 1e9) - t[10]),
                                              abs(e.get(20, 1e9) - t[20])))
        esX = abs(cerca.get(10, 0) - cerca.get(11, 0)) < 1e-6
        corte = (10 if esX else 20, cerca.get(10 if esX else 20, 0.0))
        # Visto de frente: si el eje es X (x = cte), el portico se ve en Y-Z.
        vista = "yz" if esX else "xz"

    ejeA, ejeB = {"xy": (10, 20), "xz": (10, 30), "yz": (20, 30)}[vista]
    dA, dB = {"xy": (11, 21), "xz": (11, 31), "yz": (21, 31)}[vista]

    ents = leer(dxf)
    if corte:
        cod, val = corte
        cod2 = cod + 1                      # 10->11, 20->21
        TOL = 0.35                          # medio ancho de pilar
        def enElEje(e):
            if e["tipo"] == "LINE":
                return abs(e.get(cod, 1e9) - val) < TOL and abs(e.get(cod2, 1e9) - val) < TOL
            return abs(e.get(cod, 1e9) - val) < TOL
        # Los EJES y las PLANTAS se dejan siempre: son la referencia del plano.
        ents = [e for e in ents if e.get("capa") in ("EJES", "PLANTAS") or enElEje(e)]
    fig, ax = plt.subplots(figsize=(16, 11), dpi=110)
    fig.patch.set_facecolor("#101014")
    ax.set_facecolor("#101014")

    cuenta = {}
    for e in ents:
        c = e.get("capa", "?")
        if capas and c not in capas:
            continue
        col = ACI.get(e.get("color", 8), "#aaaaaa")
        # Lo que falla se dibuja MAS GRUESO: si sale igual que el modelo, no se
        # ve, y el sentido de esto es que se vea.
        gordo = c in ("SUELTOS", "MECANISMO")
        lw = 2.2 if gordo else (0.9 if c == "EJES" else 0.45)
        z = 5 if gordo else 1
        if e["tipo"] == "LINE" and ejeA in e and dA in e:
            ax.plot([e[ejeA], e[dA]], [e[ejeB], e[dB]], color=col, lw=lw, zorder=z)
        elif e["tipo"] == "CIRCLE" and ejeA in e:
            ax.add_patch(plt.Circle((e[ejeA], e[ejeB]), e.get(40, 0.1),
                                    fill=False, color=col, lw=1.0, zorder=z))
        elif e["tipo"] == "TEXT" and ejeA in e:
            ax.text(e[ejeA], e[ejeB], e.get("texto", ""), color=col,
                    fontsize=7, zorder=6)
        cuenta[c] = cuenta.get(c, 0) + 1

    ax.set_aspect("equal")
    ax.tick_params(colors="#888888", labelsize=7)
    for s in ax.spines.values():
        s.set_color("#333333")
    titulo = f"{dxf.name}  ·  vista {vista.upper()}  ·  " + \
             " · ".join(f"{k} {v}" for k, v in sorted(cuenta.items()))
    ax.set_title(titulo, color="#dddddd", fontsize=9)
    png.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(png, facecolor=fig.get_facecolor(), bbox_inches="tight")
    print(f"{sum(cuenta.values())} entidades dibujadas: " +
          " · ".join(f"{k} {v}" for k, v in sorted(cuenta.items())))
    print(f"-> {png}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
