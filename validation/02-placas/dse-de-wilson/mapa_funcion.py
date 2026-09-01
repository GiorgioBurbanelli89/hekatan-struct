# -*- coding: utf-8 -*-
r"""MAPA de una funcion del binario: llamadas, bucles y constantes.

No vuelca 50 KB de ensamblador (15000 instrucciones no caben ni se leen). Saca
la ESTRUCTURA, que es lo que hace falta para encontrar el elemento:

  * CALL   -> a quien llama y cuantas veces (las de dentro del bucle de puntos
              de Gauss son las candidatas a 'formas' y 'jacobiano')
  * bucles -> saltos hacia atras, con su rango
  * doubles-> cada instruccion que lee una constante, con su VALOR

    python mapa_funcion.py 0x973630            mapa
    python mapa_funcion.py 0x973630 --asm 0x9756a0 60    60 instr desde ahi
"""
import struct, sys
from collections import Counter, defaultdict
import numpy as np
from capstone import Cs, CS_ARCH_X86, CS_MODE_64

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
            return rp+(r-va)
    return None


def es_datos(r):
    for n, va, vsz, rp, rsz in SECS:
        if n in (".rdata", ".data") and va <= r < va+vsz:
            return True
    return False


# .pdata -> rango de cada funcion
pf = rva2f(DIRS[3][0])
FUN = []
for k in range(DIRS[3][1]//12):
    b, en, u = struct.unpack_from("<III", raw, pf+12*k)
    if b == 0 and en == 0:
        break
    FUN.append((b, en))
FUN.sort()
INI = np.array([f[0] for f in FUN])


def rango(rva):
    i = int(np.searchsorted(INI, rva, "right"))-1
    return FUN[i] if i >= 0 and FUN[i][0] <= rva < FUN[i][1] else None


CONOC = {9/49.: "9/49", 40/49.: "40/49", np.sqrt(7/15.): "sqrt(7/15)",
         np.sqrt(7/9.): "sqrt(7/9)", 7/9.: "7/9", 7/15.: "7/15",
         1/np.sqrt(3.): "1/sqrt3", 5/6.: "5/6 KAPPA", 2/3.: "2/3",
         1/12.: "1/12", 1/3.: "1/3", 1/6.: "1/6", 1/24.: "1/24"}


def leer_double(rva):
    f = rva2f(rva)
    if f is None or f+8 > len(raw):
        return None
    v = struct.unpack_from("<d", raw, f)[0]
    return v if np.isfinite(v) else None


def etiqueta(v):
    for k, s in CONOC.items():
        if abs(v-k) < 1e-12:
            return s
    return "%.10g" % v


md = Cs(CS_ARCH_X86, CS_MODE_64)
md.detail = True

arg = sys.argv[1] if len(sys.argv) > 1 else "0x973630"
B = int(arg, 16)
r = rango(B)
assert r, "0x%x no cae en ninguna funcion de .pdata" % B
b, en = r
code = raw[rva2f(b):rva2f(en)]

if "--asm" in sys.argv:
    i = sys.argv.index("--asm")
    desde = int(sys.argv[i+1], 16)
    n = int(sys.argv[i+2]) if len(sys.argv) > i+2 else 40
    k = 0
    for ins in md.disasm(code, 0x180000000+b):
        rva = ins.address-0x180000000
        if rva < desde:
            continue
        com = ""
        for op in ins.operands:
            if op.type == 3 and op.mem.base == 0x29:      # RIP-relativo
                t = rva+ins.size+op.mem.disp
                if es_datos(t):
                    v = leer_double(t)
                    if v is not None:
                        com = "   ; [0x%x] = %s" % (t, etiqueta(v))
        print("  0x%08x  %-8s %-40s%s" % (rva, ins.mnemonic, ins.op_str, com))
        k += 1
        if k >= n:
            break
    sys.exit()

print("funcion 0x%08x - 0x%08x  (%d bytes)" % (b, en, en-b))
calls = Counter(); consts = defaultdict(list); back = []
mnem = Counter()
n = 0
for ins in md.disasm(code, 0x180000000+b):
    n += 1
    rva = ins.address-0x180000000
    mnem[ins.mnemonic] += 1
    if ins.mnemonic == "call" and ins.operands and ins.operands[0].type == 2:
        calls[ins.operands[0].imm-0x180000000] += 1
    if ins.mnemonic.startswith("j") and ins.operands and ins.operands[0].type == 2:
        d = ins.operands[0].imm-0x180000000
        if b <= d < rva:
            back.append((rva, d))
    for op in ins.operands:
        if op.type == 3 and op.mem.base == 0x29:
            t = rva+ins.size+op.mem.disp
            if es_datos(t):
                v = leer_double(t)
                if v is not None and v != 0 and abs(v) < 1e6 and abs(v) > 1e-12:
                    consts[etiqueta(v)].append(rva)

print("%d instrucciones · %d saltos hacia atras (bucles)" % (n, len(back)))
print("\nmnemonicos de coma flotante:")
print("   " + "  ".join("%s=%d" % (m, c) for m, c in mnem.most_common()
                        if m in ("mulsd", "addsd", "subsd", "divsd", "movsd",
                                 "sqrtsd", "mulpd", "addpd", "xorpd", "comisd")))
print("\nllamadas (destino x veces):")
for d, c in calls.most_common(14):
    rr = rango(d)
    print("   0x%08x  x%-3d  %s" % (d, c,
          ("funcion 0x%x-0x%x (%d B)" % (rr[0], rr[1], rr[1]-rr[0])) if rr else "?"))

print("\nconstantes usadas (valor -> donde):")
for k in sorted(consts, key=lambda k: -len(consts[k]))[:18]:
    v = consts[k]
    print("   %-14s x%-3d  %s" % (k, len(v),
          " ".join("0x%x" % z for z in v[:6])))

print("\nbucles (salto atras -> destino), los 12 mas grandes:")
for rva, d in sorted(back, key=lambda t: -(t[0]-t[1]))[:12]:
    print("   0x%08x -> 0x%08x   cuerpo %d bytes" % (rva, d, rva-d))
