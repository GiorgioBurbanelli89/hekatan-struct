# -*- coding: utf-8 -*-
u"""Parte un `.e2k` en BLOQUES por plantas, para saber DONDE se rompe.

    python cli/trocear_e2k.py <modelo.e2k> <carpeta-salida>

Idea de Jorge, y es la buena: un modelo real de 786 nudos que no resuelve no se
arregla mirandolo entero. Se corta por plantas, se prueba **un piso solo**,
luego dos, luego tres… y el bloque en el que deja de resolver es el que tiene el
problema. Cada bloque queda guardado como un `.e2k` valido que se puede abrir en
ETABS igual que el original.

Se generan dos series:

  `solo_<planta>`   una sola planta, empotrada por abajo
  `hasta_<planta>`  desde la primera hasta esa, acumulando

La primera dice si cada trozo se sostiene por si mismo. La segunda dice en que
union se rompe: si `hasta_3` va bien y `hasta_4` no, el problema esta en la
cuarta o en como engancha con la de abajo.

⚠️ A cada bloque se le EMPOTRA la planta de abajo. Sin eso flota y el fallo
seria del corte, no del modelo — se estaria midiendo el troceo.
"""
import os
import re
import sys

ENTRADA = sys.argv[1] if len(sys.argv) > 1 else "examples/src/estructura-mixta/modelo.e2k"
SALIDA = sys.argv[2] if len(sys.argv) > 2 else "validation/modelos/bloques"
os.makedirs(SALIDA, exist_ok=True)

texto = open(ENTRADA, encoding="utf-8").read()
lineas = texto.split("\n")

# ── las plantas, de arriba abajo como vienen en el fichero ──
plantas = []
for l in lineas:
    m = re.match(r'\s*STORY\s+"([^"]+)"\s+(?:HEIGHT|ELEV)', l)
    if m:
        plantas.append(m.group(1))
print("plantas (de arriba abajo): %s" % plantas)
# De abajo arriba, que es como se construye un edificio.
orden = list(reversed(plantas))          # Base, N+0.20, ... , N+13.00

# Los bloques cuyo contenido se filtra por planta. El resto de secciones
# (materiales, secciones, coordenadas, conectividades) se copia ENTERA: sobra
# geometria, pero un punto que no usa nadie no cambia el analisis y quitarlo a
# mano es donde se cuelan los errores.
POR_PLANTA = {"POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS",
              "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS"}


def bloque(mantener, nombre, empotrar):
    u"""Escribe un .e2k con solo las plantas de `mantener`, empotrando `empotrar`."""
    fuera, seccion = [], ""
    puntos_base = set()
    for l in lineas:
        t = l.strip()
        if t.startswith("$ "):
            seccion = t[2:].strip()
            fuera.append(l)
            continue
        if not t:
            fuera.append(l)
            continue
        if seccion == "STORIES - IN SEQUENCE FROM TOP":
            m = re.match(r'\s*STORY\s+"([^"]+)"', t)
            if m and m.group(1) not in mantener:
                continue
            # La planta mas baja del bloque pasa a ser la base: lleva ELEV, no
            # HEIGHT, o ETABS la cuelga de una planta que ya no existe.
            if m and m.group(1) == empotrar and "HEIGHT" in t:
                fuera.append('  STORY "%s"  ELEV 0 ' % empotrar)
                continue
        if seccion in POR_PLANTA:
            m = re.search(r'"[^"]+"\s+"([^"]+)"', t)
            if m and m.group(1) not in mantener:
                continue
            if m and m.group(1) == empotrar and seccion == "POINT ASSIGNS":
                pm = re.match(r'\s*POINTASSIGN\s+"([^"]+)"', t)
                if pm:
                    puntos_base.add(pm.group(1))
        fuera.append(l)

    # Empotrar TODOS los puntos de la planta base del bloque. Se anaden al final
    # de POINT ASSIGNS: un punto que no exista en esa planta lo ignora ETABS.
    todos = set(re.findall(r'^\s*POINT\s+"([^"]+)"', texto, re.M))
    extra = ['  POINTASSIGN  "%s"  "%s"  RESTRAINT "UX UY UZ RX RY RZ"  ' % (p, empotrar)
             for p in sorted(todos)]
    out = []
    for l in fuera:
        out.append(l)
        if l.strip().startswith("$ POINT ASSIGNS"):
            out.extend(extra)
    ruta = os.path.join(SALIDA, nombre + "_A.e2k")
    open(ruta, "w", encoding="utf-8").write("\n".join(out))
    return ruta


limpio = lambda s: re.sub(r"[^A-Za-z0-9]+", "", s)

print()
for i, p in enumerate(orden):
    if i == 0:
        continue                       # la Base sola no es un piso
    # un piso solo, con su planta de abajo como apoyo
    r = bloque({orden[i - 1], p}, "solo%d_%s" % (i, limpio(p)), orden[i - 1])
    print("  %-22s %6.0f KB" % (os.path.basename(r), os.path.getsize(r) / 1024))
    # y acumulando desde abajo
    r = bloque(set(orden[: i + 1]), "hasta%d_%s" % (i, limpio(p)), orden[0])
    print("  %-22s %6.0f KB" % (os.path.basename(r), os.path.getsize(r) / 1024))

print("\n-> %s" % SALIDA)
