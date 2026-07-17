# Benchmark CSI ↔ Hekatan-Fem — guía maestra

Hekatan-struct incluye **3 carpetas PowerShell** para extraer resultados
de los productos CSI vía OAPI sin necesidad de Python ni GUI manual.

```
hekatan-struct-lineal/
├── Etabs Powershell/         ← .EDB / .e2k → JSON
├── Sap2000 Powershell/       ← .sdb / .s2k → JSON
└── Safe Powershell/          ← .FDB / .f2k → JSON
```

Todas las carpetas siguen el mismo patrón:
- `<programa>_extract.ps1` — script CLI principal
- `extraer_<programa>.bat` — drag-and-drop launcher
- `README.md` — guía específica

## ⭐ La idea clave: importar texto + extraer

Los 3 launchers aceptan **2 formatos**:

| CSI | Binario | Texto (auto-import + auto-F5) |
|---|---|---|
| ETABS | `.EDB` | `.e2k` ⭐ |
| SAP2000 | `.sdb` | `.s2k` ⭐ |
| SAFE | `.FDB` | `.f2k` ⭐ |

**Esto cierra el ciclo con hekatan-struct-lineal**:

```
hekatan-struct-lineal/examples/    →  exporta .e2k / .s2k / .f2k
                                       ↓
hekatan-struct-lineal/<X> Powershell/  →  importa, analiza, extrae JSON
                                       ↓
hekatan-struct-lineal/examples/    ←  comparador: hekatan-fem vs CSI
```

## Workflow tipo: 5 pasos

### Para edificios (ETABS)

```
1. En hekatan-struct-lineal workspace:
   - Cargar ejemplo "edificio-aporticado" (o cualquier otro edificio)
   - Click "📤 Exportar E2K"
   → genera modelo.e2k

2. Drag-and-drop modelo.e2k sobre extraer_etabs.bat
   → ETABS arranca, importa, corre F5 automaticamente
   → genera modelo_results.json (~30-60 segundos)

3. En hekatan-struct-lineal workspace:
   - Click "📊 Cargar resultados ETABS"
   - Subir modelo_results.json

4. Click "🆚 Comparar hekatan-fem vs ETABS"
   → tabla con diff numerico nodo-por-nodo

5. Resultado:
   - Modal periods: T1=0.59s vs T1=0.61s → 3.4% diff
   - Drift max: 0.0023 vs 0.0024 → 4.4% diff
   - Reaction max: 458 kN vs 462 kN → 0.9% diff
```

### Para cimentaciones (SAFE)

```
1. Hekatan-struct: edificio con modoCimentacion=true
2. Click "📤 Exportar F2K cimentación COMPLETA"
3. Drag-and-drop sobre extraer_safe.bat
4. Comparador automatico:
   - Pressure (Winkler) hekatan vs SAFE
   - M11/M22 zapata hekatan vs SAFE
   - Vigas amarre P,V,M
```

### Para validación FEA (SAP2000)

```
1. Hekatan-struct: cualquier ejemplo (placa, shell, frame)
2. Click "📤 Exportar S2K"
3. Drag-and-drop sobre extraer_sap2000.bat
4. Comparador: usar SAP como ground truth
```

## Acceso programático sin GUI

Para automatizar pipelines (CI, batch processing, etc.):

```powershell
# Procesar 100 modelos en lote
Get-ChildItem "C:\proyectos\*.e2k" | ForEach-Object {
    & ".\Etabs Powershell\etabs_extract.ps1" `
      -ModelPath $_.FullName `
      -OutPath ($_.FullName -replace "\.e2k$", ".json")
}
```

## Tabla comparativa: qué extrae cada producto

| Resultado | ETABS | SAP2000 | SAFE |
|---|---|---|---|
| Joint coordinates | ✅ | ✅ | ✅ |
| Joint reactions | ✅ | ✅ | ✅ |
| Joint displacements | ✅ | ✅ | ✅ |
| Frame forces (P,V,T,M) | ✅ | ✅ | ✅ |
| **Area force shell** (M11/M22) | parcial | ✅ | ✅ ⭐ |
| **Soil pressure** (Winkler) | 🟡 solo con AreaSpring | 🟡 solo con AreaSpring | ✅ ⭐⭐ nativo |
| Modal periods + MPR | ✅ | ✅ | ✅ |
| Base reactions | ✅ | ✅ | ✅ |
| **Story drifts** (NEC) | ✅ ⭐ | ❌ | ❌ |
| Story forces | ✅ | ❌ | ❌ |
| Solid 3D forces | ❌ | ✅ | ❌ |
| Link element forces | parcial | ✅ | ❌ |
| Design output (steel/concrete) | ✅ | ✅ | ✅ |

## ⚠ Aclaración crítica sobre Soil Pressure

| Programa | Cómo funciona la presión de contacto |
|---|---|
| **SAFE** | Nativo. El modelo tiene "Soil Subgrade Modulus" como propiedad de la área. Pressure aparece automáticamente. |
| **SAP2000** | Solo si **asignaste manualmente AreaSpring** (Surface Springs) a las áreas. Sin spring, devuelve 0. |
| **ETABS** | Igual que SAP2000 — requiere AreaSpring asignado. ETABS no es ideal para cimentaciones. |

**Implicación práctica**: si tu workflow es validar `pressure` (ej. zapata
hekatan-fem vs CSI), usá **SAFE** como ground truth. SAP2000/ETABS con
AreaSpring también funciona pero hay que asignarlo manualmente o vía OAPI.

Hekatan-struct, cuando exporta `.f2k` para SAFE, ya incluye `SOIL PROPERTIES`
con el `ks` de Bowles — por eso el round-trip hekatan ↔ SAFE da pressure
inmediato.

## ⚠ Consideraciones de RAM

Los 3 productos requieren RAM significativa:

| Programa | RAM idle | RAM en análisis | Recomendado |
|---|---|---|---|
| SAFE | ~400 MB | 1–4 GB | 8 GB libre |
| SAP2000 | ~600 MB | 2–6 GB | 8 GB libre |
| ETABS | ~800 MB | 2–8 GB | 16 GB libre |

Si la RAM está apretada:
- Cerrá navegadores (Chrome consume mucho)
- Cerrá otras instancias del mismo programa
- Los scripts matan procesos colgados al inicio (`Stop-Process`)
- Si OOM: esperá 1 min, reintentá

## Nota sobre ProgIDs

| Programa | ProgID Helper | Object name |
|---|---|---|
| ETABS | `ETABSv1.Helper` | `CSI.ETABS.API.ETABSObject` |
| SAP2000 | `SAP2000v1.Helper` | `CSI.SAP2000.API.SapObject` |
| SAFE | `SAFEv1.Helper` | `CSI.SAFE.API.ETABSObject` ⚠ |

⚠ SAFE usa `ETABSObject` en su ProgID por legacy de CSI — no es typo.

## Próximo paso

Implementar parser TS en hekatan-struct-lineal browser
(`examples/src/shared/csiResultsLoader.ts`) que cargue cualquiera de los 3
JSONs y compare contra `deformOutputs` / `analyzeOutputs` de hekatan-fem.
