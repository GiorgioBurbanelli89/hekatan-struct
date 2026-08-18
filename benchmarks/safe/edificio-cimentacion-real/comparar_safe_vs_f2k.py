# -*- coding: utf-8 -*-
"""Qué ENTENDIÓ SAFE del .f2k que le manda Hekatan.

SAFE 20 no expone un "exportar a .f2k" por la API (`cFile` no tiene
`ExportToSAFEFile`, y `Save` con extension .f2k devuelve 0 y no escribe nada).
Pero hay algo mejor que el archivo: **las tablas del modelo ya cargado**, que
es literalmente lo que SAFE entendio. Se leen con `cDatabaseTables` y se
comparan con las del .f2k de Hekatan.

Es el mismo metodo que cerro el .e2k contra ETABS: no discutir sobre los
resultados, sino poner los dos modelos uno al lado del otro.

    python comparar_safe_vs_f2k.py
"""
import re
import sys
from pathlib import Path

import clr  # type: ignore

clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import cHelper, Helper, cOAPI, cSapModel, cFile, cDatabaseTables  # type: ignore
from System import Array, String, Int32  # type: ignore

AQUI = Path(__file__).resolve().parent
F2K_HEK = (AQUI / ".." / ".." / ".." / "examples" / "src" / "edificio-aporticado"
           / "sample_output" / "cimentacion_edificio_9zapatas_12vigas.f2k").resolve()

# Las tablas que deciden si los dos modelos son el mismo.
TABLAS = [
    "Load Pattern Definitions",
    "Joint Loads - Force",
    "Beam Object Connectivity",
    "Area Assignments - Area Springs",
    "Spring Property Definitions - Area Springs",
    "Point Object Connectivity",
]


def del_f2k():
    """Lee el .f2k de Hekatan y devuelve {tabla en minusculas: [filas]}."""
    out, actual = {}, None
    for linea in F2K_HEK.read_text(encoding="utf-8", errors="replace").splitlines():
        m = re.match(r'^TABLE:\s+"(.+)"', linea)
        if m:
            actual = m.group(1).lower()
            out[actual] = []
            continue
        if actual is None or not linea.strip():
            continue
        d = {}
        for k1, k2, v1, v2 in re.findall(
                r'(?:"([^"]+)"|([A-Za-z][\w]*))=(?:"([^"]*)"|([^\s]+))', linea):
            d[(k1 or k2).strip()] = v1 if v1 != "" else v2
        if d:
            out[actual].append(d)
    return out


def de_safe(db, nombre):
    """Una tabla del modelo YA CARGADO en SAFE -> [ {campo: valor}, ... ]."""
    campos = Array[String]([""])
    try:
        r = db.GetTableForDisplayArray(nombre, campos, "All", 0,
                                       Array[String]([]), 0, Array[String]([]))
    except Exception as e:                       # noqa: BLE001
        return None, "no se pudo leer: %s" % str(e)[:70]
    # r = (ret, TableVersion, FieldsKeysIncluded, NumberRecords, TableData)
    ret = r[0] if isinstance(r, tuple) else r
    try:
        claves = list(r[2]); n = int(r[3]); datos = list(r[4])
    except Exception:                            # noqa: BLE001
        return None, "sin datos (ret=%s)" % ret
    if not claves or n == 0:
        return [], None
    nc = len(claves)
    filas = [dict(zip(claves, datos[i * nc:(i + 1) * nc])) for i in range(n)]
    return filas, None


def main():
    print("abriendo SAFE y cargando el .f2k de Hekatan ...")
    helper = cHelper(Helper())
    oapi = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
    oapi.ApplicationStart()
    sap = cSapModel(oapi.SapModel)
    ret = cFile(sap.File).OpenFile(str(F2K_HEK))
    print("  OpenFile ret=%s\n" % ret)
    db = cDatabaseTables(sap.DatabaseTables)

    hek = del_f2k()
    print("%-42s %8s %8s" % ("TABLA", "f2k", "SAFE"))
    print("=" * 62)
    for t in TABLAS:
        filas, err = de_safe(db, t)
        nh = len(hek.get(t.lower(), []))
        ns = "-" if filas is None else len(filas)
        print("%-42s %8d %8s%s" % (t, nh, ns, "   <- " + err if err else ""))
        # El peso propio es EL dato: se enseña entero.
        if filas and t == "Load Pattern Definitions":
            for f in filas:
                print("      SAFE: %s" % {k: v for k, v in f.items()
                                          if "Self" in k or "Name" in k or "Type" in k})
            for f in hek.get(t.lower(), []):
                print("      f2k : %s" % {k: v for k, v in f.items()
                                          if "Self" in k or "Name" in k or "Type" in k})
    oapi.ApplicationExit(False)
    return 0


if __name__ == "__main__":
    sys.exit(main())
