"""
Helpers comunes para los scripts SAFE API de los ejercicios del libro
"Cimentaciones Sismo Resistentes utilizando SAFE" — Ing. Marcelo Guerra Avendaño MDI.

Patron de uso:
    from _common import connect_safe, get_table, dump_results_json
    sap, helper, mySAFE, started = connect_safe()
    File = cFile(sap.File); File.OpenFile(r"C:\path\ej1.fdb")
    sap.Analyze.RunAnalysis()
    data = get_table(sap, "Soil Pressures")
    dump_results_json("ej1.json", {...})
"""
import os, sys, json, clr
from datetime import datetime
from pathlib import Path

clr.AddReference("System.Runtime.InteropServices")
from System.Runtime.InteropServices import Marshal  # noqa
clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
from SAFEv1 import *  # noqa: F401,F403  (cHelper, cOAPI, cSapModel, cFile, eForce, eLength, ...)


def connect_safe(attach=False):
    """Arranca SAFE 20 o se attachea a una instancia abierta.
    Returns: (SapModel, helper, mySAFEObject, started_new) — `started_new` = True si arrancamos
    el proceso (entonces conviene ApplicationExit al final).
    """
    helper = cHelper(Helper())
    if attach:
        try:
            mySAFE = cOAPI(helper.GetObject("CSI.SAFE.API.ETABSObject"))
            return cSapModel(mySAFE.SapModel), helper, mySAFE, False
        except Exception as e:
            print(f"No hay instancia de SAFE corriendo ({e}). Iniciando una nueva...")
    try:
        mySAFE = cOAPI(helper.CreateObjectProgID("CSI.SAFE.API.ETABSObject"))
        mySAFE.ApplicationStart()
        return cSapModel(mySAFE.SapModel), helper, mySAFE, True
    except Exception as e:
        print(f"FATAL: no se pudo iniciar SAFE 20: {e}")
        sys.exit(1)


def set_units_tonf_m(sap):
    """Setea unidades a tonf, m, C. (forceUnit=6, lengthUnit=6, tempUnit=2)."""
    sap.SetPresentUnits_2(eForce.tonf, eLength.m, eTemperature.C)


def get_table(sap, table_name, group=""):
    """Lee una tabla de SAFE como lista de dicts (uno por record).
    Retorna [] si la tabla no existe o está vacía.
    """
    db = cDatabaseTables(sap.DatabaseTables)
    TableVersion = 0
    FieldsKeysIncluded = []
    NumberRecords = 0
    TableData = []
    FieldKeyList = []
    try:
        ret, _, TableVersion, FieldsKeysIncluded, NumberRecords, TableData = \
            db.GetTableForDisplayArray(table_name, FieldKeyList, group,
                                       TableVersion, FieldsKeysIncluded, NumberRecords, TableData)
    except Exception as e:
        print(f"  WARN: GetTableForDisplayArray('{table_name}') falló: {e}")
        return []
    if ret != 0 or NumberRecords == 0:
        return []
    fields = list(FieldsKeysIncluded)
    ncols = len(fields)
    rows = []
    for i in range(NumberRecords):
        row = {}
        for j, k in enumerate(fields):
            idx = i * ncols + j
            row[k] = TableData[idx] if idx < len(TableData) else None
        rows.append(row)
    return rows


def dump_results_json(out_path, payload, source_meta=None):
    """Escribe results JSON con header standard (fecha, fuente, version SAFE)."""
    Path(out_path).parent.mkdir(parents=True, exist_ok=True)
    header = {
        "_meta": {
            "generated_utc": datetime.utcnow().isoformat() + "Z",
            "tool": "SAFE 20 via Python API (CSI.SAFE.API.ETABSObject)",
            "script": Path(sys.argv[0]).name,
            **(source_meta or {}),
        },
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump({**header, **payload}, f, indent=2, ensure_ascii=False)
    print(f"OK -> {out_path}  ({Path(out_path).stat().st_size/1024:.1f} KB)")
