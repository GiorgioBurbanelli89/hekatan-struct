# Sap2000 PowerShell — Extracción de resultados SAP2000 sin Python

CLI nativo de Windows que conecta a SAP2000 vía OAPI y exporta resultados a JSON.

## ⭐ Acepta DOS formatos

| Extensión | Tipo | Comportamiento |
|---|---|---|
| `.sdb` | Binario | Si ya está analizado, extrae directo |
| `.s2k` | **Texto** | **Auto-importa + auto-corre F5 + extrae** ⭐ |

## Archivos

```
Sap2000 Powershell/
├── README.md
├── sap2000_extract.ps1     ← script CLI principal
└── extraer_sap2000.bat     ← drag-and-drop launcher
```

## Quickstart

### Drag-and-drop
```
Doble click extraer_sap2000.bat → arrastra .sdb o .s2k → Enter
```

### Comando directo
```powershell
powershell -ExecutionPolicy Bypass `
  -File ".\sap2000_extract.ps1" `
  -ModelPath "C:\modelos\portico.s2k" `
  -OutPath "C:\modelos\portico.json"
```

## ⚠ Diferencias clave SAP2000 vs ETABS

1. **`ApplicationStart`** requiere 3 args en SAP2000:
   ```powershell
   $SapObject.ApplicationStart(6, $false, "")
   #                            ^   ^      ^
   #                            |   |      └── filename (vacio = no abrir)
   #                            |   └── visible (false = invisible)
   #                            └── eUnits (6 = kN_m_C)
   ```
   En ETABS es `$ETABSObject.ApplicationStart()` sin args.

2. **ProgID distinto**: `SAP2000v1.Helper` → `CSI.SAP2000.API.SapObject`
   (en ETABS: `ETABSv1.Helper` → `CSI.ETABS.API.ETABSObject`)

3. **No hay Story-level**: SAP2000 es FEA general, no building-specific.
   El script omite `StoryDrifts` que sí existe en ETABS.

4. **Soporta solids y links**: SAP2000 maneja Solid3D y Link elements
   (NLLink, GapLink, etc.) — el script reporta su conteo.

## RAM y tiempos

SAP2000 generalmente arranca **más rápido que ETABS** (~15-30 s) porque tiene
menos UI/diseño structural-specific. Pero análisis no-lineales o time-history
pueden tardar minutos.

## Qué extrae

| Tabla | SAP2000 | ETABS | SAFE |
|---|---|---|---|
| Joint coordinates | ✅ | ✅ | ✅ |
| Joint reactions | ✅ | ✅ | ✅ |
| Joint displacements | ✅ | ✅ | ✅ |
| Frame forces | ✅ | ✅ | ✅ |
| **Area force shell** (M11/M22/V13/V23) | ✅ ⭐ | parcial | ✅ ⭐ |
| Modal periods + MPR | ✅ | ✅ | ✅ |
| Base reactions | ✅ | ✅ | ✅ |
| **Solids forces** | ✅ ⭐ | ❌ | ❌ |
| Story drifts | ❌ | ✅ ⭐ | ❌ |
| **Soil pressure** (Winkler) | 🟡 solo con AreaSpring | 🟡 solo con AreaSpring | ✅ ⭐ nativo |

### Nota sobre Soil Pressure en SAP2000

En SAP2000 (igual que en ETABS) la presión de contacto **NO existe por defecto**.
Hay **DOS tipos de spring** y solo uno muestra pressure:

| Tipo de Spring | Unidades | Asignación SAP | Output SAP | ¿Pressure? |
|---|---|---|---|---|
| **Joint Spring** (Point/Nodal) | `K` [kN/m] | `Assign → Joint → Springs` | `Spring Forces` (kN) | ❌ NO |
| **Area Spring** (Surface/Winkler) | `ks` [kN/m³] | `Assign → Area → Springs → Surface Springs` | `Soil Pressure` (kPa) | ✅ SÍ |

**Joint Spring** = resorte discreto en un nodo. Devuelve reacción (kN), no presión.

**Area Spring** = bedding continuo Winkler. Devuelve presión (kN/m² = kPa).

#### Conversión matemática (son equivalentes)

```
K_joint [kN/m] = ks [kN/m³] × A_tributaria [m²]
```

Ejemplo: zapata 2×2 mallada 4×4 → A_trib_interior = 0.25 m², ks=1030 kN/m³:
```
K_joint = 1030 × 0.25 = 257.5 kN/m
```

Aplicar `K=257.5 kN/m` (Joint Spring) o `ks=1030 kN/m³` (Area Spring) da
**desplazamientos idénticos**, pero el output es distinto:

- Joint Spring: `R = K·u = 257.5 × 0.0008 = 0.206 kN` (reacción puntual)
- Area Spring: `q = ks·w = 1030 × 0.0008 = 0.824 kPa` (presión distribuida)

Y `0.206 kN / 0.25 m² = 0.824 kPa` ✅ son matemáticamente equivalentes.

#### Hekatan-fem usa Joint Springs

El solver `deform.cpp` de hekatan-fem usa Joint Springs (discretos nodales):

```cpp
springsList.push_back({ node, dof: 2, k: kvz });
//                                       ^^^
//                                       kvz = ks * A_trib (pre-calculado en TS)
```

Para mostrar `pressure` en el viewer, hekatan-struct hace post-process:
```ts
pressure_kPa = -reaction_kN_z / A_trib_m2
```

**Esto es EXACTAMENTE lo que hace SAFE internamente** — el solver SAPFIRE
mallea el Area Spring en Joint Springs equivalentes, y para display divide
las reacciones por área tributaria.

#### Cómo asignar Area Spring en SAP2000 GUI

```
1. Select áreas (zapata o losa)
2. Assign → Area → Springs → Surface Springs
3. Spring Stiffness per Unit Area: <ks en kN/m³>
4. Direction: Z (resiste solo compresión típicamente)
5. OK
```

#### Cómo asignarlo via OAPI

```powershell
# En PowerShell antes de RunAnalysis:
$SapModel.AreaObj.SetSpring(
    "1",         # area name
    1030,        # ks_kN_m3
    3,           # SpringDOF (3 = local 3-axis = vertical)
    $false,      # OutwardNormal
    "Global",    # CSys
    "Default",   # SimpleSpringType
    [ref] $ret
)
```

Sin Area Spring, `Results.AreaJointForceShell` devuelve **0 filas** (no error).
El script lo detecta y reporta:

```
[INFO] 0 soil pressures — el modelo NO tiene AreaSpring asignado
```

**Si necesitás presión de contacto Winkler "out of the box"**, usá SAFE.

## Workflow integrado

```
1. Hekatan-struct exporta .s2k via boton "Exportar S2K"
        ↓
2. Drag-and-drop sobre extraer_sap2000.bat
        ↓
3. SAP2000 abre, importa, F5, JSON listo
        ↓
4. Hekatan-struct compara contra hekatan-fem
```

## Troubleshooting

### "ApplicationStart - sobrecarga con 0 argumentos no encontrada"
Es porque el script usa la firma vieja. Verificá que `sap2000_extract.ps1`
llama: `$SapObject.ApplicationStart(6, $false, "")` con 3 args.

### SAP2000 no se cierra
```powershell
Get-Process SAP2000* | Stop-Process -Force
```

### "OpenFile retorno 1" con .s2k
El `.s2k` está mal formateado. Abrilo manualmente en SAP2000 primero para
verificar que importa OK; el GUI da mensajes de error más detallados.
