# -*- coding: utf-8 -*-
"""Unifica las CATEGORIAS de los ejemplos del workspace.

Estaban desordenadas: tres nombres para lo mismo (`Placas`, `Plates`,
`Placas Q4`), las barras repartidas en tres cajones (`Frames 1D`, `Columnas`,
`Estructuras varias`), los `Icónicos` duplicados con `Estructuras emblemáticas`,
y las utilidades (`Modelar`, `Importar`, `Archivo nuevo`, `test`) mezcladas con
los ejemplos de verdad.

Solo toca el texto de `category:` y el 3er argumento de `legacy(...)`. NO toca
ningun calculo, ni ids, ni rutas: los enlaces `/id/...` y los standalone siguen
igual porque dependen del ID del ejemplo, no de su categoria.

    python ordenar_categorias.py          # muestra que haria
    python ordenar_categorias.py --aplicar
"""
import os
import re
import sys

RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                    "examples", "src")

MAPA = {
    # --- losas y cascaras: tres nombres para lo mismo
    "Placas":                   "🧱 Losas y cáscaras",
    "Plates":                   "🧱 Losas y cáscaras",
    "Placas Q4":                "🧱 Losas y cáscaras",
    # --- barras: tres cajones para lo mismo
    "Frames 1D":                "🏗 Pórticos y barras",
    "Columnas":                 "🏗 Pórticos y barras",
    "Estructuras varias":       "🏗 Pórticos y barras",
    "Legacy · Frames":          "🏗 Pórticos y barras",
    # --- el resto, con el mismo estilo (emoji + nombre en español)
    "Edificios":                "🏢 Edificios",
    "🧱 Construcción":          "🏢 Edificios",
    "Cimentaciones":            "🧰 Cimentaciones",
    "Conexiones":               "🔩 Conexiones",
    "Icónicos":                 "🗽 Icónicos",
    "Estructuras emblemáticas": "🗽 Icónicos",
    # --- utilidades: no son ejemplos de calculo
    "Modelar":                  "🧪 Utilidades",
    "Importar":                 "🧪 Utilidades",
    "Archivo nuevo":            "🧪 Utilidades",
    "test":                     "🧪 Utilidades",
    "Legacy · Editores":        "🧪 Utilidades",
    # --- los demos viejos, agrupados y reconocibles
    "Legacy · Visualización":   "🗄 Legacy · Visualización",
    "Legacy · FEM básico":      "🗄 Legacy · FEM básico",
    "Demos FEM Q4":             "🗄 Legacy · FEM Q4",
}


def main(aplicar=False):
    # Se casa la cadena ENTRE COMILLAS para no pisar texto suelto: "test" o
    # "Columnas" aparecen en mil sitios que no son categorias.
    pats = [(re.compile(r'(category:\s*")%s(")' % re.escape(v)), v, n)
            for v, n in MAPA.items()]
    pats += [(re.compile(r'(legacy\([^)]*?,\s*")%s(")' % re.escape(v), re.S), v, n)
             for v, n in MAPA.items()]

    tot = {}
    tocados = 0
    for base, _, files in os.walk(RAIZ):
        for f in files:
            if not f.endswith(".ts"):
                continue
            ruta = os.path.join(base, f)
            txt = open(ruta, encoding="utf-8").read()
            orig = txt
            for pat, viejo, nuevo in pats:
                txt, n = pat.subn(lambda m: m.group(1) + nuevo + m.group(2), txt)
                if n:
                    tot[(viejo, nuevo)] = tot.get((viejo, nuevo), 0) + n
            if txt != orig:
                tocados += 1
                if aplicar:
                    open(ruta, "w", encoding="utf-8").write(txt)

    print("%s %d archivos" % ("Reescritos" if aplicar else "Se tocarian", tocados))
    for (v, n), c in sorted(tot.items(), key=lambda t: -t[1]):
        print("   %-28s -> %-26s %3d" % (v, n, c))
    if not aplicar:
        print("\n(nada escrito; usar --aplicar)")


if __name__ == "__main__":
    main("--aplicar" in sys.argv)
