#!/usr/bin/env python3
"""
Saca del BINARIO de ETABS la gramatica entera del .e2k.

    python cli/extraer_gramatica_e2k.py [ruta\\a\\ETABS.dll] > docs/E2K_GRAMATICA.md

Por que esto y no ir mirando ficheros: un .e2k concreto solo ensena lo que ese
modelo usa. Leyendo la tabla del binario se ve TODO lo que ETABS sabe escribir y
leer — que bloques hay, que palabras admite cada uno y en que orden—, o sea que
se sabe de antemano que es posible y que no. Es la diferencia entre adivinar el
formato y tenerlo.

Como esta guardada: `ETABS.dll` lleva las cadenas en **UTF-16LE**, seguidas, en
el orden en que se escriben al fichero. Cada bloque empieza por una cadena
`$ NOMBRE DEL BLOQUE` y detras van sus palabras clave. Se localiza el ancla
`STORIES - IN SEQUENCE FROM TOP`, se recorta una ventana amplia alrededor y se
leen todas las cadenas imprimibles en orden.

⚠️ Es una VOLCADO, no una interpretacion. El orden es el del binario; que una
palabra salga detras de un bloque no demuestra que pertenezca a ese bloque, solo
que esta cerca. Para lo que hace falta —saber que `REFERENCEPLANE` existe y
donde vive, o que `MESHATINTERSECTIONS` es una palabra de LINEASSIGN— sobra, y
cualquier duda se cierra abriendo un .e2k que la use.
"""
import re
import sys
from pathlib import Path

POR_DEFECTO = r"C:\Program Files\Computers and Structures\ETABS 22\ETABS.dll"
ANCLA = "STORIES - IN SEQUENCE FROM TOP"
VENTANA = 400_000


def cadenas_utf16(datos: bytes, ini: int, fin: int):
    """Todas las cadenas UTF-16LE imprimibles de una ventana, en orden."""
    trozo = datos[ini:fin]
    for m in re.finditer(rb"(?:[\x20-\x7e]\x00){2,}", trozo):
        yield ini + m.start(), m.group().decode("utf-16-le")


def main() -> int:
    ruta = Path(sys.argv[1] if len(sys.argv) > 1 else POR_DEFECTO)
    if not ruta.exists():
        print(f"no encuentro {ruta}", file=sys.stderr)
        return 2
    datos = ruta.read_bytes()

    m = re.search(ANCLA.encode("utf-16-le"), datos)
    if not m:
        print("no encuentro el ancla: .es este el ETABS.dll?", file=sys.stderr)
        return 2

    cads = list(cadenas_utf16(datos, max(0, m.start() - VENTANA),
                              min(len(datos), m.start() + VENTANA)))
    # El primer y el ultimo `$ ` acotan la tabla.
    idx = [i for i, (_, s) in enumerate(cads) if s.startswith("$ ")]
    if not idx:
        print("no hay bloques `$ ` en la ventana", file=sys.stderr)
        return 2

    print(f"# La gramatica del `.e2k`, sacada de `{ruta.name}`")
    print()
    print("Volcado de la tabla de cadenas del binario de ETABS (UTF-16LE), en el")
    print("orden en que estan. Cada `##` es un bloque `$ ...` del fichero y debajo")
    print("van sus palabras. Generado por `cli/extraer_gramatica_e2k.py`.")
    print()
    print("> Es un VOLCADO, no una interpretacion: que una palabra salga bajo un")
    print("> bloque significa que esta ahi al lado en el binario, no que sea suya.")
    print()

    bloque = None
    palabras: list[str] = []

    def cerrar():
        if bloque is None:
            return
        print(f"## {bloque}")
        print()
        # se limpian los espacios de relleno con los que ETABS las escribe
        vistas, limpias = set(), []
        for p in palabras:
            q = p.strip()
            if q and q not in vistas:
                vistas.add(q)
                limpias.append(q)
        for i in range(0, len(limpias), 6):
            print("    " + "  ".join(w.ljust(18) for w in limpias[i:i + 6]).rstrip())
        print()

    for _, s in cads[idx[0]:idx[-1] + 1]:
        if s.startswith("$ "):
            cerrar()
            bloque = s.strip()
            palabras = []
        else:
            palabras.append(s)
    cerrar()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
