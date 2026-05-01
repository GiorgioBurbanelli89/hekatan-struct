# Safe PowerShell — Extracción de resultados SAFE sin Python

CLI para SAFE (cimentaciones: zapatas, vigas amarre, losas raft, slabs Winkler).

## ⭐ Acepta DOS formatos

| Extensión | Tipo | Comportamiento |
|---|---|---|
| `.FDB` | Binario | Si ya está analizado, extrae directo |
| `.f2k` | **Texto** | **Auto-importa + auto-corre F5 + extrae** ⭐ |

Hekatan-struct exporta `.f2k` para zapatas y cimentaciones — esto cierra el ciclo.

## Archivos

```
Safe Powershell/
├── README.md
├── safe_extract.ps1     ← script CLI principal
└── extraer_safe.bat     ← drag-and-drop launcher
```

## Quickstart

### Drag-and-drop
```
Doble click extraer_safe.bat → arrastra .FDB o .f2k → Enter
```

### Comando directo
```powershell
powershell -ExecutionPolicy Bypass `
  -File ".\safe_extract.ps1" `
  -ModelPath "C:\zapatas\zapata_aislada.f2k" `
  -OutPath "C:\zapatas\zapata_aislada.json"
```

## ⭐ Resultados específicos de SAFE (no en ETABS/SAP)

SAFE está optimizado para **interacción suelo-estructura via Winkler**. El script
extrae cosas que solo SAFE da bien:

### 1. Soil Pressure (presión de contacto)
La razón de existir de SAFE. Pressure por nodo de cada zapata/losa en kPa.
Comparable vs el `pressure` de hekatan-fem (que también la calcula via
`q = -k·w` donde `k = ks·A_trib`).

### 2. M11 / M22 / M12 (momentos de placa)
Los momentos por unidad de ancho que se usan para diseñar refuerzo top/bot
de zapatas y losas. Equivalente a `bendingXX` / `bendingYY` / `bendingXY`
de hekatan-fem.

### 3. V13 / V23 (cortantes Mindlin)
Cortantes transversales fuera de plano para verificar punzonamiento.

### 4. Frame forces (vigas de amarre)
Si modelaste vigas de amarre entre zapatas, te da P, V2, V3, M2, M3 por estación.

## Diferencias SAFE vs ETABS/SAP

1. **ProgID raro**: aunque dice "SAFE", el ProgID es:
   ```
   SAFEv1.Helper → CSI.SAFE.API.ETABSObject
                                  ^^^^^^^^^^^^
                       (legacy de CSI — usa "ETABSObject" tambien aqui)
   ```

2. **No hay Story-level**: igual que SAP2000, SAFE no es building-specific.
   No tiene drifts ni story forces.

3. **Sí tiene response spectrum** y modal — útiles para zapatas grandes con
   cargas dinámicas.

4. **Winkler nativo**: si el `.f2k` define `SOIL SUPPORTS` con `ks`, SAFE los
   convierte automáticamente a springs nodales. Hekatan-struct hace lo mismo
   manualmente con `springsList` en `deform.cpp`.

## Workflow integrado con hekatan-struct

```
1. Hekatan-struct: zapata-aislada o edificio con cimentación
2. Click "📤 Exportar F2K cimentación COMPLETA"
   → genera cimentacion.f2k

3. Drag-and-drop cimentacion.f2k sobre extraer_safe.bat
   → SAFE importa, F5, genera cimentacion.json

4. Comparador automatico:
   - Pressure ETABS vs hekatan-fem
   - M11/M22 SAFE vs bendingXX/YY hekatan
   - Reacciones de springs Winkler
```

## Tiempos típicos en cimentación

| Modelo | Análisis | Total con extracción |
|---|---|---|
| Zapata aislada (4×4 elements) | <1 s | ~15 s |
| 9 zapatas + vigas amarre | ~3 s | ~25 s |
| Losa raft 100 m² | ~5 s | ~30 s |
| Edificio completo: 25 zapatas + vigas | ~10 s | ~40 s |

## Troubleshooting

### "ProgID 'SAFEv1.Helper' no encontrado"
SAFE no está instalado o no se registró el COM. Como administrador:
```cmd
"C:\Program Files\Computers and Structures\SAFE 20\SAFE.exe" /regserver
```

### "OpenFile retorno 1" con .f2k generado por hekatan-struct
SAFE puede ser estricto con tablas obligatorias. Verificá que tu `.f2k` tenga:
- `MATERIAL PROPERTIES`
- `FRAME SECTIONS` (si tienes vigas amarre)
- `AREA SECTIONS` (con `Type = SLAB` para losas, `Type = MAT` para raft)
- `POINT COORDINATES`
- `SOIL PROPERTIES` con `ks`
- `LOAD PATTERNS` y `LOAD CASES`

Hekatan-struct genera todo esto en `f2kCimentacionCompleta.ts`. Si SAFE
rechaza, abrí el `.f2k` manualmente para ver el error preciso.
