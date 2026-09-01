# -*- coding: utf-8 -*-
r"""LAS CONSTANTES MEDIDAS, BUSCADAS LITERALMENTE EN EL BINARIO.

La idea, y por que es barata: de la celda de SAP2000 se midieron numeros que NO
dependen de E, ni de L, ni de t  ->  son constantes ADIMENSIONALES del codigo:

    lambda_phi / D = 455.454364 = 363.636 + 181.818*(1-nu)/2
    c             = 8.315040e-4   (la condensacion incompleta del modo de w)

Si de verdad son constantes duras, tienen que estar ESCRITAS en el .dll como
doubles de 8 bytes. Buscarlas es un grep, no un desensamblado. Y si aparecen,
la funcion que las referencia ES la rutina del shell — que es justo lo que no
se encuentra por el simbolo (Go_kElemShellFCN resulto ser un dato, no codigo).

Se buscan tambien las que YA se sabe que usa (cuadratura ITW8) como CONTROL:
si esas aparecen, el metodo funciona; si no aparecen, es que el binario las
calcula en vez de guardarlas y la ausencia de las otras no prueba nada.
"""
import struct, sys, os
import numpy as np

DLL = sys.argv[1] if len(sys.argv) > 1 else \
    r"C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\hekatan-etabs-bridge\engine_etabs19\CsiGo2.dll"

BUSCAR = [
    # --- control: las que YA se leyeron del binario ---
    ("CONTROL 1/sqrt(3)   Gauss 2x2", 1/np.sqrt(3.0)),
    ("CONTROL 9/49        ITW8 esq.", 9/49.0),
    ("CONTROL 40/49       ITW8 lado", 40/49.0),
    ("CONTROL sqrt(7/9)   ITW8 A",    np.sqrt(7/9.0)),
    ("CONTROL sqrt(7/15)  ITW8 B",    np.sqrt(7/15.0)),
    ("CONTROL 5/6         kappa",     5/6.0),
    ("CONTROL 2/3         el 2/3",    2/3.0),
    # --- las MEDIDAS en la celda, que es lo que se busca ---
    ("MEDIDA  455.454364  lambda_phi/D", 455.454364),
    ("MEDIDA  363.6363..  = 4000/11",    4000/11.0),
    ("MEDIDA  181.8181..  = 2000/11",    2000/11.0),
    ("MEDIDA  91.818      pendiente nu", 91.818),
    ("MEDIDA  8.315040e-4 c (cond.inc)", 8.315040e-4),
    ("MEDIDA  10/3        techo K11",    10/3.0),
    ("MEDIDA  3.0         el 3 del hg",  3.0),
    ("MEDIDA  455.4544/12 por si /12",   455.454364/12),
]

raw = open(DLL, "rb").read()
print("%s   %.1f MB\n" % (os.path.basename(DLL), len(raw)/1e6))
print("  %-34s %-22s  %s" % ("constante", "valor", "offsets donde aparece"))
print("  " + "-"*88)
for etq, val in BUSCAR:
    pat = struct.pack("<d", val)
    off = []
    i = raw.find(pat)
    while i >= 0 and len(off) < 8:
        off.append(i)
        i = raw.find(pat, i+1)
    # tolerancia: tambien se prueba el valor redondeado a 6 cifras
    print("  %-34s %-22.10g  %s" % (etq, val,
          (" ".join("0x%08x" % o for o in off) if off else "-- no esta --")))
