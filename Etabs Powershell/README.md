# Etabs PowerShell — Extracción de resultados ETABS sin Python

CLI nativo de Windows que conecta a ETABS vía OAPI (COM) y exporta todos los
resultados a un único `.json`. **Cero instalaciones**: PowerShell + ETABS.

## ⭐ Acepta DOS formatos de entrada

| Extensión | Tipo | Comportamiento |
|---|---|---|
| `.EDB` | Binario | Si ya está analizado, extrae directo |
| `.e2k` | **Texto** | **Auto-importa + auto-corre F5 + extrae** ⭐ |

Esto significa que podés generar un `.e2k` desde hekatan-struct (o cualquier
fuente) y obtener resultados de ETABS **sin abrir el GUI**.

## Archivos

```
Etabs Powershell/
├── README.md                            ← esta guía
├── etabs_extract.ps1                    ← script CLI principal
├── extraer_etabs.bat                    ← drag-and-drop launcher
├── correr_aqui.ps1                      ← copialo a la carpeta del modelo
├── batch_extraer.ps1                    ← procesa MUCHOS archivos
└── V01_RIOCHICO_results_sample.json     ← ejemplo real (40.8 MB)
```

## Quickstart

### Drag-and-drop
```
Doble click extraer_etabs.bat → arrastra .EDB o .e2k → Enter
```

### Comando directo
```powershell
# .EDB ya analizado
powershell -ExecutionPolicy Bypass -File ".\etabs_extract.ps1" `
  -ModelPath "C:\modelos\edificio.EDB" -OutPath "edificio.json"

# .e2k texto — corre F5 automaticamente
powershell -ExecutionPolicy Bypass -File ".\etabs_extract.ps1" `
  -ModelPath "C:\modelos\edificio.e2k" -OutPath "edificio.json"
```

## ⚠ RAM y tiempos

| RAM libre | Startup ETABS | Análisis | Total |
|---|---|---|---|
| <2 GB | 60–90 s | depende | ❌ riesgo OOM |
| 4 GB | 30–45 s | normal | ~1 min modelo medio |
| 8+ GB | 15–25 s | normal | <30 s modelo medio |

Cerrá Chrome/otras instancias antes para liberar RAM.

## Qué extrae

| Tabla | Cantidad típica |
|---|---|
| Joint coordinates | 100–10 000 nodos |
| Joint reactions ⭐ | 1 000–50 000 filas |
| Joint displacements ⭐ | 1 000–50 000 filas |
| Modal periods + frequencies | 12 modos típico |
| Modal participation ratios (NEC ≥ 90%) | 12 modos |
| Base reactions totales | 20–100 |
| Story drifts (NEC ≤ 2%) | 50–1 000 |
| Frame forces | 1 000–500 000 (samplea 1 000) |

## Workflow integrado con hekatan-struct

```
1. Hekatan-struct exporta .e2k (boton "Exportar E2K")
        ↓
2. Drag-and-drop el .e2k sobre extraer_etabs.bat
        ↓
3. ETABS abre, importa, F5, JSON listo
        ↓
4. Hekatan-struct: "Cargar resultados ETABS" → comparador
```

## Ver tambien

- `..\Sap2000 Powershell\` — para `.sdb` / `.s2k`
- `..\Safe Powershell\`   — para `.FDB` / `.f2k` (cimentaciones)
- `..\BENCHMARK_GUIDE.md` — workflow integrado de los 3 productos

## Lecciones técnicas

1. `LoadCases.GetNameList(ref n, ref names, type)` requiere `type` — sin él retorna 0.
2. `SetCaseSelectedForOutput(name, $true)` requiere 2 args (no aplica default en COM).
3. `Results.JointReact("All", 2, ...)` = ItemTypeElm GroupElm + grupo "All" (capitalización).
4. `OpenFile()` auto-detecta formato por extensión (.EDB binario / .e2k texto).
5. `ApplicationStart()` sin args en ETABS (vs SAP2000 que requiere 3).
