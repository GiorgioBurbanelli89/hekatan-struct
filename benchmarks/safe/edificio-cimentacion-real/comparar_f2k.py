# -*- coding: utf-8 -*-
"""Compara el .f2k que EXPORTA Hekatan con el modelo que Hekatan CALCULA.

La pregunta no es si Hekatan se parece a SAFE: es si el archivo que Hekatan
manda a SAFE describe la misma estructura que Hekatan resuelve por dentro. Si
no, la comparacion contra SAFE mide dos modelos distintos y el error que salga
no significa nada.

Es el mismo metodo que `cli/comparar_e2k_etabs.mjs` para ETABS, aplicado al
.f2k de SAFE.

    python comparar_f2k.py
"""
import json
import re
import sys
from pathlib import Path

AQUI = Path(__file__).resolve().parent
F2K = (AQUI / ".." / ".." / ".." / "examples" / "src" / "edificio-aporticado"
       / "sample_output" / "cimentacion_edificio_9zapatas_12vigas.f2k").resolve()

TONF = 1.0          # el f2k ya viene en tonf-m


def tablas(texto):
    """{nombre de tabla: [ {clave: valor}, ... ]}."""
    out, actual = {}, None
    for linea in texto.splitlines():
        m = re.match(r'^TABLE:\s+"(.+)"', linea)
        if m:
            actual = m.group(1)
            out[actual] = []
            continue
        if actual is None or not linea.strip():
            continue
        # Se rearma a mano en vez de con dict(): la clave y el valor pueden
        # venir entrecomillados o no, asi que el findall devuelve cuatro
        # grupos por campo y solo dos traen texto.
        d = {}
        for k1, k2, v1, v2 in re.findall(
                r'(?:"([^"]+)"|([A-Za-z][\w]*))=(?:"([^"]*)"|([^\s]+))', linea):
            d[(k1 or k2).strip()] = v1 if v1 != "" else v2
        if d:
            out[actual].append(d)
    return out


def num(x, d=0.0):
    try:
        return float(x)
    except (TypeError, ValueError):
        return d


def main():
    if not F2K.exists():
        print("no esta el f2k:", F2K)
        return 1
    T = tablas(F2K.read_text(encoding="utf-8", errors="replace"))
    print("\nf2k que exporta Hekatan:", F2K.name)
    print("=" * 74)

    filas = []

    # ── 1. PESO PROPIO ──────────────────────────────────────────────────────
    pats = T.get("LOAD PATTERN DEFINITIONS", [])
    sw = {p.get("Name"): num(p.get("Self Weight Multiplier")) for p in pats}
    swDead = sw.get("Dead", 0.0)
    print("\n1. PESO PROPIO")
    print("   patrones en el f2k:", ", ".join(
        "%s (SW=%g)" % (k, v) for k, v in sw.items()) or "ninguno")
    print("   -> el f2k PIDE peso propio" if swDead else
          "   -> el f2k NO pide peso propio")
    filas.append(("f2k pide SelfWeight", swDead))

    # ── 2. CARGAS APLICADAS ─────────────────────────────────────────────────
    jl = T.get("JOINT LOADS ASSIGNMENTS - FORCE", [])
    fz = sum(num(r.get("FZ")) for r in jl)
    print("\n2. CARGAS DE NUDO")
    print("   %d cargas · suma FZ = %.3f tonf" % (len(jl), fz))
    filas.append(("cargas de nudo", len(jl)))

    # ── 3. ELEMENTOS ────────────────────────────────────────────────────────
    vigas = T.get("BEAM OBJECT CONNECTIVITY", [])
    areas = T.get("FLOOR OBJECT CONNECTIVITY", [])
    ptos = T.get("POINT OBJECT CONNECTIVITY", [])
    # Un pedestal seria una barra VERTICAL: mismos X,Y y distinta Z.
    xyz = {p.get("UniqueName") or p.get("Unique Name"):
           (num(p.get("X")), num(p.get("Y")), num(p.get("Z"))) for p in ptos}
    verticales = 0
    for v in vigas:
        a = xyz.get(v.get("UniquePtI")), xyz.get(v.get("UniquePtJ"))
        if a[0] and a[1] and abs(a[0][0] - a[1][0]) < 1e-9 \
                and abs(a[0][1] - a[1][1]) < 1e-9 and abs(a[0][2] - a[1][2]) > 1e-9:
            verticales += 1
    print("\n3. ELEMENTOS")
    print("   %d puntos · %d areas (zapatas) · %d barras, de ellas %d verticales"
          % (len(ptos), len(areas), len(vigas), verticales))
    print("   -> NO hay pedestales en el f2k" if verticales == 0 else
          "   -> %d pedestales" % verticales)
    filas.append(("barras verticales (pedestales)", verticales))

    # ── 4. MUELLES DE SUELO ─────────────────────────────────────────────────
    sp = T.get("SPRING PROPERTY DEFINITIONS - AREA SPRINGS", [])
    asg = T.get("AREA ASSIGNMENTS - AREA SPRINGS", [])
    print("\n4. SUELO")
    for r in sp:
        print("   %s" % " ".join("%s=%s" % kv for kv in r.items()))
    print("   asignado a %d areas" % len(asg))

    # ── 5. LO QUE CALCULA EL RUNNER ─────────────────────────────────────────
    print("\n" + "=" * 74)
    print("modelo que RESUELVE cli_edificio.mjs (leido de su codigo):")
    print("   9 zapatas malladas 4x4  ->  144 Q4")
    print("   12 vigas de amarre")
    print("   9 PEDESTALES verticales de 0.50 m   <-- no estan en el f2k")
    print("   peso propio: solo con --sw           <-- el f2k lo pide siempre")

    print("\n" + "=" * 74)
    print("DIFERENCIAS entre lo que Hekatan EXPORTA y lo que Hekatan CALCULA:")
    print()
    print("  a) PESO PROPIO. El f2k declara `Self Weight Multiplier=1`, o sea")
    print("     que SAFE lo aplica al abrirlo. El solver de Hekatan no lo")
    print("     aplicaba: por eso SAFE daba 2.85x la reaccion y parecia que")
    print("     Hekatan sub-predecia. Con `--sw` el error medio cae de 67 % a")
    print("     6.8 %.")
    print()
    print("  b) PEDESTALES. El f2k NO los lleva: las vigas arrancan de los")
    print("     mismos puntos donde se aplican las cargas. El runner monta 9")
    print("     pedestales de 0.50 m, que ademas pesan 1.73 tonf.")
    print()
    print("  Mientras las dos cosas no se igualen, el error contra SAFE no")
    print("  mide el solver: mide la diferencia entre dos modelos.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
