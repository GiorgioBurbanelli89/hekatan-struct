# -*- coding: utf-8 -*-
r"""PONERLE NOMBRE A LAS 4 HERMANAS: que export Go_* cae dentro de cada una.

Las 4 funciones contiguas de ~50 KB (0x94ee50, 0x95b570, 0x967740, 0x973630)
usan todas la cuadratura del shell y tienen la MISMA huella de constantes
(9/49, 40/49, kappa=5/6, 1/12...). Son la misma familia. La pregunta es cual
es cual: quad/tri, thin/thick, membrana/placa...

La tabla de exports del PE da los RVA de los 525 simbolos Go_*. Se mira cual
cae DENTRO del rango de cada hermana (o justo antes, que fue el caso de
Go_kElemShellFCN: apuntaba 352 bytes dentro de una funcion ya terminada).
"""
import struct, bisect
import numpy as np

DLL = r"C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\hekatan-etabs-bridge\engine_etabs19\CsiGo2.dll"
raw = open(DLL, "rb").read()

e = struct.unpack_from("<I", raw, 0x3C)[0]
nsec = struct.unpack_from("<H", raw, e+6)[0]
optsz = struct.unpack_from("<H", raw, e+20)[0]
opt = e+24
ndir = struct.unpack_from("<I", raw, opt+108)[0]
DIRS = [struct.unpack_from("<II", raw, opt+112+8*i) for i in range(ndir)]
SECS = []
off = opt+optsz
for i in range(nsec):
    n = raw[off:off+8].rstrip(b"\0").decode("latin1")
    vsz, va, rsz, rp = struct.unpack_from("<IIII", raw, off+8)
    SECS.append((n, va, vsz, rp, rsz)); off += 40


def rva2f(r):
    for n, va, vsz, rp, rsz in SECS:
        if va <= r < va+max(vsz, rsz):
            return rp + (r-va)
    return None


# ── tabla de exports ────────────────────────────────────────────────────
edir = rva2f(DIRS[0][0])
nfun, nnam = struct.unpack_from("<II", raw, edir+20)
afun, anam, aord = struct.unpack_from("<III", raw, edir+28)
fo_f, fo_n, fo_o = rva2f(afun), rva2f(anam), rva2f(aord)
EXP = []
for i in range(nnam):
    nrva = struct.unpack_from("<I", raw, fo_n+4*i)[0]
    o = struct.unpack_from("<H", raw, fo_o+2*i)[0]
    frva = struct.unpack_from("<I", raw, fo_f+4*o)[0]
    p = rva2f(nrva)
    nm = raw[p:raw.index(b"\0", p)].decode("latin1")
    EXP.append((frva, nm))
EXP.sort()
print("exports: %d" % len(EXP))

CAND = [(0x0092c2a0, 0x00937130), (0x0094ee50, 0x0095b570),
        (0x0095b570, 0x00967740), (0x00967740, 0x00973630),
        (0x00973630, 0x0097f8c0)]

rv = [x[0] for x in EXP]
for (b, e_) in CAND:
    i = bisect.bisect_left(rv, b)
    j = bisect.bisect_right(rv, e_)
    dentro = EXP[i:j]
    print("\n0x%08x-0x%08x  (%d bytes)" % (b, e_, e_-b))
    if dentro:
        for r, nm in dentro:
            print("      DENTRO  0x%08x  %s  (+%d del inicio)" % (r, nm, r-b))
    else:
        print("      -- ningun export dentro --")
    # el export inmediatamente anterior y posterior, por contexto
    if i > 0:
        print("      antes:  0x%08x  %s" % EXP[i-1])
    if j < len(EXP):
        print("      despues:0x%08x  %s" % EXP[j])
