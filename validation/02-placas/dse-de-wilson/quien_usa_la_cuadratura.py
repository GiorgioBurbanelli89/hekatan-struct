# -*- coding: utf-8 -*-
r"""QUE FUNCION USA LA CUADRATURA DE 8 PUNTOS -> esa es la rutina del shell.

Por que asi y no por el simbolo: `Go_kElemShellFCN` resulto ser un DATO, no
codigo (el export cae 352 bytes dentro de una funcion que acaba antes). Y las
constantes medidas en la celda (455.454364, c=8.315e-4) NO estan escritas en el
binario -> emergen de la formulacion. Lo unico que SI esta escrito y es
inconfundible del shell es su CUADRATURA: 9/49 y 40/49 (ec. 30 del ITW 1991).

El camino, entonces:
  1. localizar los doubles 9/49 y 40/49            -> sus RVA
  2. barrer .text buscando quien los referencia    -> RIP-relativo
  3. mapear cada referencia a su funcion con .pdata (RUNTIME_FUNCTION)

Sale una lista corta de funciones candidatas, con su rango exacto. Eso es lo
que hay que desensamblar, no el export.
"""
import struct, sys, os
import numpy as np

DLL = sys.argv[1] if len(sys.argv) > 1 else \
    r"C:\Users\j-b-j\Documents\Hekatan Calc 1.0.0\hekatan-etabs-bridge\engine_etabs19\CsiGo2.dll"
raw = open(DLL, "rb").read()


# ── PE: secciones y directorios ─────────────────────────────────────────
def pe(raw):
    e = struct.unpack_from("<I", raw, 0x3C)[0]
    assert raw[e:e+4] == b"PE\0\0"
    nsec = struct.unpack_from("<H", raw, e+6)[0]
    optsz = struct.unpack_from("<H", raw, e+20)[0]
    opt = e+24
    base = struct.unpack_from("<Q", raw, opt+24)[0]
    ndir = struct.unpack_from("<I", raw, opt+108)[0]
    dirs = [struct.unpack_from("<II", raw, opt+112+8*i) for i in range(ndir)]
    secs = []
    off = opt+optsz
    for i in range(nsec):
        n = raw[off:off+8].rstrip(b"\0").decode("latin1")
        vsz, va, rsz, rp = struct.unpack_from("<IIII", raw, off+8)
        secs.append((n, va, vsz, rp, rsz))
        off += 40
    return base, secs, dirs


BASE, SECS, DIRS = pe(raw)


def f2rva(fo):
    for n, va, vsz, rp, rsz in SECS:
        if rp <= fo < rp+rsz:
            return va + (fo - rp)
    return None


def rva2f(rva):
    for n, va, vsz, rp, rsz in SECS:
        if va <= rva < va+max(vsz, rsz):
            return rp + (rva - va)
    return None


print("%s  base=0x%x" % (os.path.basename(DLL), BASE))
print("secciones: " + ", ".join("%s@0x%x" % (n, va) for n, va, _, _, _ in SECS))

# ── 1 · los RVA de las constantes de la cuadratura ──────────────────────
OBJ = {"9/49": 9/49.0, "40/49": 40/49.0, "sqrt(7/15)": np.sqrt(7/15.0)}
rvas = {}
for etq, val in OBJ.items():
    pat = struct.pack("<d", val)
    lst = []
    i = raw.find(pat)
    while i >= 0:
        r = f2rva(i)
        if r is not None:
            lst.append(r)
        i = raw.find(pat, i+1)
    rvas[etq] = lst
    print("\n%-11s %d apariciones: %s" % (etq, len(lst),
          " ".join("0x%x" % r for r in lst[:12])))

DIANA = set()
for lst in rvas.values():
    DIANA.update(lst)

# ── 2 · .pdata: las funciones con su rango [inicio, fin) ────────────────
pd_rva, pd_sz = DIRS[3]
pf = rva2f(pd_rva)
FUN = []
for k in range(pd_sz//12):
    b, e, u = struct.unpack_from("<III", raw, pf+12*k)
    if b == 0 and e == 0:
        break
    FUN.append((b, e))
FUN.sort()
print("\n.pdata: %d funciones" % len(FUN))
ini = np.array([f[0] for f in FUN])


def funcion_de(rva):
    i = int(np.searchsorted(ini, rva, "right")) - 1
    if i >= 0 and FUN[i][0] <= rva < FUN[i][1]:
        return FUN[i]
    return None


# ── 3 · quien referencia esos RVA (RIP-relativo) ────────────────────────
tex = [s for s in SECS if s[0] == ".text"][0]
n_, tva, tvsz, trp, trsz = tex
code = raw[trp:trp+trsz]

print("escaneando .text (%.1f MB) ..." % (trsz/1e6))
# desplazamiento en cada posicion j, leido como int32 little-endian
d = np.frombuffer(code, dtype=np.uint8)
d32 = (d[0:len(d)-3].astype(np.int64) |
       (d[1:len(d)-2].astype(np.int64) << 8) |
       (d[2:len(d)-1].astype(np.int64) << 16) |
       (d[3:len(d)].astype(np.int64) << 24))
d32 = np.where(d32 >= 2**31, d32 - 2**32, d32)
pos = np.arange(len(d32), dtype=np.int64)
target = tva + pos + 4 + d32              # RVA apuntado si la instr acaba ahi

hits = {}
for D in sorted(DIANA):
    for j in np.nonzero(target == D)[0]:
        rva_ref = tva + int(j)
        f = funcion_de(rva_ref)
        if f:
            hits.setdefault(f, []).append((rva_ref, D))

print("\n%d funciones referencian la cuadratura del shell:" % len(hits))
print("  %-24s %8s   %s" % ("funcion [ini, fin)", "bytes", "referencias"))
for f in sorted(hits, key=lambda f: -len(hits[f])):
    r = hits[f]
    print("  0x%08x-0x%08x %7d   %d ref  ->  %s"
          % (f[0], f[1], f[1]-f[0], len(r),
             " ".join("0x%x" % t for _, t in r[:6])))
