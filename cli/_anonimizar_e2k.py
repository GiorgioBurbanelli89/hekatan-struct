# -*- coding: utf-8 -*-
u"""Prepara un `.e2k` real para publicarlo como EJEMPLO: le quita los datos del
proyecto y los bloques que el modelo no necesita.

    python cli/_anonimizar_e2k.py <entrada.e2k> <salida.e2k> "<titulo>"

Dos cosas, y las dos importan:

1. ANONIMIZAR. Un `.e2k` de un encargo lleva el nombre del cliente en el titulo,
   en `PROJECT INFORMATION` y en la ruta de la primera linea, y a veces en los
   nombres de las secciones. Un ejemplo publico no puede llevar nada de eso.

2. RECORTAR. Mas de la mitad del fichero son bloques de DISENO
   (`STEEL DESIGN OVERWRITES`, `COMPOSITE DESIGN ...`), combinaciones y el
   `LOG`: el modelo no los necesita y solo engordan el bundle. Se conservan los
   bloques que definen la ESTRUCTURA, que son los que lee `parseE2k`.
"""
import os
import re
import sys

ENTRADA, SALIDA = sys.argv[1], sys.argv[2]
TITULO = sys.argv[3] if len(sys.argv) > 3 else "Estructura mixta"

# Los bloques que definen el modelo. El orden del fichero se respeta; esto solo
# dice cuales se copian.
CONSERVAR = {
    "PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS",
    "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS",
    "FRAME SECTIONS", "NONPRISMATIC SECTIONS", "CONCRETE SECTIONS",
    "SECTION DESIGNER SECTIONS", "SLAB PROPERTIES", "DECK PROPERTIES",
    "WALL PROPERTIES", "LINK PROPERTIES", "POINT SPRING PROPERTIES",
    "LINE SPRING PROPERTIES", "AREA SPRING PROPERTIES",
    "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES",
    "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS",
    "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS",
    "SHELL UNIFORM LOAD SETS", "SHELL OBJECT LOADS",
    "ANALYSIS OPTIONS", "MASS SOURCE", "LOAD CASES",
}

lineas = open(ENTRADA, encoding="utf-8", errors="replace").read().split("\n")
salida, seccion, copiando = [], "", False
quitadas = {}
for l in lineas:
    t = l.strip()
    if t.startswith("$ "):
        seccion = t[2:].strip()
        copiando = seccion in CONSERVAR
        if not copiando:
            quitadas[seccion] = 0
        else:
            salida.append(l)
        continue
    if t.startswith("$"):
        continue                      # la cabecera con la ruta del fichero
    if copiando:
        salida.append(l)
    elif seccion:
        quitadas[seccion] = quitadas.get(seccion, 0) + 1

txt = "\n".join(salida)

# ── anonimizar ──
# El titulo y cualquier rastro del encargo. `TITLE1/TITLE2` es lo que se ve en
# el visor, y el resto son nombres que se cuelan en secciones y materiales.
txt = re.sub(r'TITLE1\s+"[^"]*"', 'TITLE1  "%s"' % TITULO, txt)
txt = re.sub(r'TITLE2\s+"[^"]*"', 'TITLE2  "%s"' % TITULO, txt)
for pat in [r"RIOCHICO", r"RIO\s*CHICO", r"GAD\s*\w*", r"CIMENTAC\w*"]:
    txt = re.sub(pat, "", txt, flags=re.I)

cab = ('$ Estructura mixta — modelo real anonimizado, solo los bloques del MODELO\n'
       '$ Hormigon + acero laminado + conformado en frio + CFT + MADERA\n')
open(SALIDA, "w", encoding="utf-8").write(cab + txt)

a, b = os.path.getsize(ENTRADA), os.path.getsize(SALIDA)
print("%s -> %s" % (os.path.basename(ENTRADA), os.path.basename(SALIDA)))
print("  %.0f KB -> %.0f KB  (%.0f %% menos)" % (a / 1024, b / 1024, 100 * (1 - b / a)))
print("  bloques quitados: %s" % ", ".join(sorted(quitadas)))
# Comprobacion: que no quede ni un rastro del encargo.
resto = [p for p in ["riochico", "rio chico", "gad "] if p in txt.lower()]
print("  rastros del encargo: %s" % (resto if resto else "ninguno"))
