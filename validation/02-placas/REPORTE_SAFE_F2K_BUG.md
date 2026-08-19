# Bug SAFE OAPI: `File.OpenFile` no parsea .f2k vía COM

## Resumen

SAFE 20.3.0 vía OAPI (PowerShell o Python comtypes) **no importa** archivos
`.f2k` (formato texto) cuando se llama `SapModel.File.OpenFile(path.f2k)`.
El método retorna ret=0 (éxito), pero el modelo queda VACÍO.

## Evidencia (sesión 2026-05-02)

```
[2] Abriendo F2K via OpenFile...
    OpenFile ret=0
    Post-OpenFile:  0 joints,  0 areas    ← MODELO VACÍO
    Materials: 0 ()
    Area Sections: 0 ()
    Load Patterns: 2 (Dead, Live)         ← solo defaults
    Load Cases:    0 ()
[5] RunAnalysis ret=0 en 5.3 s              ← corre pero sin modelo
    JointDispl: Num=0                        ← sin resultados
```

Probado con:
- `Zapata_Hekatan_1777645102733.f2k` (generado por hekatan-struct-lineal, 6.2 KB)
- `cimentacion_edificio_9_zapatas.f2k` (F2K de SAFE GUI, 310 lineas) — MISMO RESULTADO

Confirma que el bug está en el OAPI, no en nuestro F2K.

## Métodos OAPI probados

| Método | Resultado |
|---|---|
| `File.OpenFile(path.f2k)` | ret=0 pero modelo vacío |
| `File.ImportFile(path, type, mode)` | NoSuchMethod en `wFile` (no existe) |
| `File.NewBlank()` + `OpenFile` | igual que solo OpenFile |
| `InitializeNewModel(6)` + `OpenFile` | igual |
| `Save(.FDB)` post-OpenFile | guarda FDB vacío (0 joints) |

## Soluciones posibles

### A. Manual + OAPI (recomendado por simplicidad)
1. Abrir el `.f2k` en SAFE GUI manualmente
2. Save As → `.FDB` 
3. Usar OAPI con el `.FDB` resultante (que sí abre OK)

### B. cDatabase.SetTableForEditingArray (programático)
Cargar cada tabla via:
```
SapModel.DatabaseTables.SetTableForEditingArray(TableKey, NumRecords, FieldsKeysIncluded, ...)
```
Luego `ApplyEditedTables(...)`. Hay que parsear el .f2k tabla por tabla y
mapear a las claves de DatabaseTables. Complejo (>500 líneas de código).

### C. Avoid OAPI: usar SAFE GUI vía command line
```powershell
& "C:\Program Files\...\SAFE.exe" "/import" "modelo.f2k" "/saveas" "modelo.FDB"
```
No documentado por CSI, prueba caso a caso.

### D. Migrar a SAP2000 OAPI (que SÍ soporta .s2k)
SAP2000 OAPI sí parsea `.s2k` correctamente vía `OpenFile`. Para validar
cimentaciones podemos usar SAP2000 con `.s2k` (que incluye AreaSpring si se
configura) en lugar de SAFE.

## Conclusión

**Recomendación**: Para validación SAFE programática, usar **opción A** (export
manual + reuse del .FDB). Para automatización completa, **opción D** (migrar a
SAP2000). El esfuerzo de implementar opción B no se justifica para
validación esporádica.

El script `safe_debug_zapata.ps1` queda en el repo como herramienta de
diagnóstico/verificación de futuros parches del API SAFE.

## Referencias

- CSI Knowledge Base: [Import ETABS into SAFE FAQ](https://web.wiki.csiamerica.com/wiki/spaces/safe/pages/1802798/Import+ETABS+into+SAFE+FAQ)
- SAFE API documentation: confirmar con `safe.chm` (ayuda local) — el método
  documentado para F2K es vía Database Tables, no OpenFile.
