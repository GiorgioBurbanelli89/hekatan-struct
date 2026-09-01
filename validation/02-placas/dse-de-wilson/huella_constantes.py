# -*- coding: utf-8 -*-
r"""LA HUELLA DE CONSTANTES DE CADA FUNCION -> cual de las hermanas es cual.

Contexto: buscando quien usa la cuadratura del shell (9/49, 40/49) salieron
CUATRO funciones contiguas de ~50 KB. Una de ellas es la que ya se desensamblo
(FUN_180973630) y NO reproduce la celda medida (103 % de error). Asi que la
buena es otra de las hermanas.

Como distinguirlas sin desensamblar: cada formulacion deja una HUELLA de
constantes. kappa=5/6 solo la usa la que integra cortante; el 2/3 solo la que
lleva giros de lado; 1/12 la flexion... Se listan todos los doubles que cada
funcion referencia (RIP-relativo a .rdata) y se comparan.
"""
import struct, sys, os
from collections import Counter
import numpy as np

DLL = r"C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\hekatan-etabs-bridge\engine_etabs19\CsiGo2.dll"
raw = open(DLL, "rb").read()


def pe(raw):
    e = struct.unpack_from("<I", raw, 0x3C)[0]
    nsec = struct.unpack_from("<H", raw, e+6)[0]
    optsz = struct.unpack_from("<H", raw, e+20)[0]
    opt = e+24
    secs = []
    off = opt+optsz
    for i in range(nsec):
        n = raw[off:off+8].rstrip(b"\0").decode("latin1")
        vsz, va, rsz, rp = struct.unpack_from("<IIII", raw, off+8)
        secs.append((n, va, vsz, rp, rsz)); off += 40
    return secs


SECS = pe(raw)


def rva2f(rva):
    for n, va, vsz, rp, rsz in SECS:
        if va <= rva < va+max(vsz, rsz):
            return rp + (rva - va)
    return None


def en_datos(rva):
    for n, va, vsz, rp, rsz in SECS:
        if n in (".rdata", ".data") and va <= rva < va+vsz:
            return True
    return False


CAND = [(0x0094ee50, 0x0095b570), (0x0095b570, 0x00967740),
        (0x00967740, 0x00973630), (0x00973630, 0x0097f8c0),
        (0x0092c2a0, 0x00937130)]

# nombres de constantes que interesan, para etiquetar
CONOCIDAS = {
    9/49.: "9/49 ITW8esq", 40/49.: "40/49 ITW8lado",
    np.sqrt(7/15.): "sqrt(7/15) B", np.sqrt(7/9.): "sqrt(7/9) A",
    7/9.: "7/9", 7/15.: "7/15",
    1/np.sqrt(3.): "1/sqrt3 Gauss", 5/6.: "5/6 KAPPA", 2/3.: "2/3",
    1/12.: "1/12", 1/3.: "1/3", 1/6.: "1/6", 0.25: "1/4", 0.5: "1/2",
    1/24.: "1/24", 4/3.: "4/3", 3/2.: "3/2", 5/12.: "5/12",
    np.sqrt(0.6): "sqrt(0.6) Gauss3", 5/9.: "5/9 G3", 8/9.: "8/9 G3",
}

print("  funcion                bytes   constantes double que referencia")
print("  " + "-"*100)
for (b, e) in CAND:
    fo = rva2f(b); fe = rva2f(e)
    code = raw[fo:fe]
    vals = Counter()
    d = np.frombuffer(code, dtype=np.uint8)
    if len(d) < 8:
        continue
    d32 = (d[0:len(d)-3].astype(np.int64) | (d[1:len(d)-2].astype(np.int64) << 8)
           | (d[2:len(d)-1].astype(np.int64) << 16)
           | (d[3:len(d)].astype(np.int64) << 24))
    d32 = np.where(d32 >= 2**31, d32-2**32, d32)
    tgt = b + np.arange(len(d32)) + 4 + d32
    for t in np.unique(tgt):
        t = int(t)
        if not en_datos(t):
            continue
        f = rva2f(t)
        if f is None or f+8 > len(raw):
            continue
        v = struct.unpack_from("<d", raw, f)[0]
        if v == 0 or not np.isfinite(v) or abs(v) > 1e6 or abs(v) < 1e-12:
            continue
        vals[round(v, 12)] += 1
    etq = []
    for v, n in vals.most_common(40):
        nom = None
        for k, s in CONOCIDAS.items():
            if abs(v-k) < 1e-12:
                nom = s; break
        etq.append(nom if nom else "%.6g" % v)
    print("  0x%08x-0x%08x %6d   %s" % (b, e, e-b, ", ".join(etq[:22])))
