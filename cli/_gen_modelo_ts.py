# -*- coding: utf-8 -*-
u"""Convierte el `.e2k` anonimizado en el modulo `modelo.ts` que importa el
ejemplo `estructura-mixta`.

Va como MODULO y no como `modelo.e2k?raw` a proposito: `?raw` es de Vite, y el
mismo fuente se empaqueta tambien con **esbuild** (`tests/lib/bundle.mjs`, que
es por donde lo ven los tests y los CLI). Con `?raw`, esbuild corta con
«No loader is configured for ".e2k" files» y el ejemplo se cae justo fuera del
navegador, que es donde se comprueba.
"""
import sys

ENT = sys.argv[1] if len(sys.argv) > 1 else "examples/src/estructura-mixta/modelo.e2k"
SAL = sys.argv[2] if len(sys.argv) > 2 else "examples/src/estructura-mixta/modelo.ts"

txt = open(ENT, encoding="utf-8").read()
# Un template literal de JS: la barra invertida, el backtick y `${`.
esc = txt.replace(chr(92), chr(92) * 2)
esc = esc.replace(chr(96), chr(92) + chr(96))
esc = esc.replace("${", chr(92) + "${")

cab = '''/**
 * El modelo de `estructura-mixta`, en texto.
 *
 * Lo genera `python cli/_gen_modelo_ts.py`, que a su vez parte del `.e2k` que
 * anonimiza `cli/_anonimizar_e2k.py`. NO editar a mano.
 */
export const modeloE2k = ''' + chr(96)

open(SAL, "w", encoding="utf-8").write(cab + esc + chr(96) + ";\n")
print("%s -> %s  (%d caracteres)" % (ENT, SAL, len(esc)))
