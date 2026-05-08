# 🏆 FEM Studio — Inventario completo de herramientas

> Auditoría visual del DOM de https://giorgioburbanelli89.github.io/hekatan-struct/beams/
> Fecha: 8 may 2026 — sesión browser-driven (clicks reales en cada botón)
> Objetivo: identificar herramientas que **NO** están en el workspace y portarlas.

---

## 📊 Tabla maestra — TODAS las features de FEM Studio

| # | Categoría | Herramienta | Cómo se invoca | ¿En workspace? | Prioridad portar |
|---|-----------|-------------|----------------|---------------|------------------|
| **1** | **Generators paramétricos (32)** | | | | |
| 1.1 | | Cercha | Botón "Cercha" | ❌ | 🟢 Media |
| 1.2 | | Pórtico | Botón "Portico" | ⚠️ existe `portico-2d` | 🟢 Media |
| 1.3 | | Torre | Botón "Torre" | ⚠️ existe `tower-3d` | 🟢 Media |
| 1.4 | | Galpón | Botón "Galpon" | ⚠️ existe `galpon` | 🟢 Media |
| 1.5 | | Edificio (paramétrico avanzado con muros, secundarias, losas, braces) | Botón "Edificio" | ⚠️ ejemplo simple sin tantos params | 🔴 Alta |
| 1.6 | | Edif. Muros | Botón "Edif. Muros" | ⚠️ existe `edificio-muros` | 🟡 Baja |
| 1.7 | | Edif. Acero | Botón "Edif. Acero" | ⚠️ existe `edificio-acero-v2` | 🟡 Baja |
| 1.8 | | Acero+Diag (con diagonales/braces) | Botón "Acero+Diag" | ❌ | 🔴 Alta |
| 1.9 | | Edif. Mixto (CFT) | Botón "Edif. Mixto" | ⚠️ existe `edificio-mixto` | 🟡 Baja |
| 1.10 | | Mezanine | Botón "Mezanine" | ⚠️ existe `mezanine` | 🟡 Baja |
| 1.11 | | Barra | Botón "Barra" | ⚠️ `barra-axial` | 🟡 Baja |
| 1.12 | | Placa 3Q | Botón "Placa 3Q" | ⚠️ `triangular-plate` | 🟡 Baja |
| 1.13 | | Placa Q4 | Botón "Placa Q4" | ⚠️ `plate-q4` | 🟡 Baja |
| 1.14 | | Losa Rect (cargas WOOD-Armer) | Botón "Losa Rect" | ❌ | 🔴 Alta |
| 1.15 | | Losa Plana (sin vigas) | Botón "Losa Plana" | ❌ | 🔴 Alta |
| 1.16 | | Viga Alta (deep beam) | Botón "Viga Alta" | ❌ | 🟢 Media |
| 1.17 | | Muro Cont. (muro contención) | Botón "Muro Cont." | ❌ | 🔴 Alta |
| 1.18 | | Zapata | Botón "Zapata" | ⚠️ `zapata-aislada` | 🟡 Baja |
| 1.19 | | Placa Base | Botón "Placa Base" | ⚠️ `placa-base` | 🟡 Baja |
| 1.20 | | Col+Placa 3D | Botón "Col+Placa 3D" | ❌ | 🟢 Media |
| 1.21 | | Talud (slope SRM) | Botón "Talud" | ⚠️ `slope-stability` | 🟡 Baja |
| 1.22 | | Eiffel | Botón "Eiffel" | ❌ | 🟢 Media (icónico) |
| 1.23 | | Arco | Botón "Arco" | ⚠️ `gateway-arch` | 🟡 Baja |
| 1.24 | | Puente atirantado | Botón "Puente" | ⚠️ `cable-stayed-bridge` | 🟡 Baja |
| 1.25 | | Twist tower | Botón "Twist" | ⚠️ `twisted-tower` | 🟡 Baja |
| 1.26 | | Burj Khalifa | Botón "Burj" | ⚠️ `burj-khalifa` | 🟡 Baja |
| 1.27 | | Sydney Opera | Botón "Opera" | ⚠️ `sydney-opera` | 🟡 Baja |
| 1.28 | | Diagrid | Botón "Diagrid" | ⚠️ `diagrid` | 🟡 Baja |
| 1.29 | | Muro Q4 (shell wall) | Botón "Muro Q4" | ⚠️ `shear-wall-q4` | 🟡 Baja |
| 1.30 | | Viga Q4 (cantilever beam Q4) | Botón "Viga Q4" | ⚠️ `cantilever-beam-q4` | 🟡 Baja |
| 1.31 | | Placa XY | Botón "Placa XY" | ⚠️ `placa-cantilever-q4` | 🟡 Baja |
| 1.32 | | Pérgola | Botón "Pérgola" | ⚠️ `pergola` | 🟡 Baja |
| **2** | **View modes & cámara** | | | | |
| 2.1 | | 3D / Plan / EX / EY (vistas ortogonales) | Botones "3D Plan EX EY" | ❌ no en workspace generic | 🔴 **CRÍTICA** |
| 2.2 | | Ejes verticales A B C (elevación Y) | Botones "Eje A B C" | ❌ | 🔴 Alta |
| 2.3 | | Ejes 1 2 3 (elevación X) | Botones "Eje 1 2 3" | ❌ | 🔴 Alta |
| 2.4 | | Plantas P1 P2 P3 (vista en planta por piso) | Botones "P1 P2 P3" | ❌ | 🔴 Alta |
| 2.5 | | Pan/Zoom buttons (cubo orientación) | 8 botones flecha+zoom | ❌ workspace tiene controls Three.js solamente | 🟢 Media |
| 2.6 | | Reset vista | Botón "Reset vista" | ⚠️ existe `autoFitCamera` (al cargar ejemplo) | 🟢 Media |
| 2.7 | | Pantalla completa (fullscreen API) | Botón ⛶ | ❌ | 🟢 Media |
| **3** | **Edición selectiva** | | | | |
| 3.1 | | **Select** (selección con popup metadata) | Botón "Select" | ❌ workspace solo hover-tooltip | 🔴 **CRÍTICA** |
| 3.2 | | **Draw** (dibujo libre — addNode/addFrame con mouse) | Botón "Draw" | ❌ | 🔴 Alta |
| 3.3 | | **Inspect** (panel didáctico FEM por elemento) | Botón "Inspect" + click elemento | ❌ | 🔴 **CRÍTICA** |
| 3.4 | | Eliminar elemento (popup → "Eliminar") | Click elemento → botón "Eliminar" | ❌ | 🔴 Alta |
| 3.5 | | Hide / Isolate elementos | API interna `hiddenElements`, `isolatedElements` | ❌ | 🟢 Media |
| **4** | **Inspect del elemento — panel 3-tabs** | | | | |
| 4.1 | | Tab "Tabla": K_local 12×12 + T transform + K_global = T^T·K·T | Click Inspect en elemento | ❌ | 🔴 **CRÍTICA** |
| 4.2 | | Tab "Matemática Explicada": derivación KaTeX completa (DOFs, funciones de forma N₁/N₂, Hermite H₁..H₄, derivadas, curvatura) | Tab dentro de Inspect | ❌ | 🔴 **CRÍTICA** |
| 4.3 | | Tab "Resumen": resumen ejecutivo del elemento | Tab dentro de Inspect | ❌ | 🟢 Media |
| **5** | **I/O — Import/Export interoperabilidad** | | | | |
| 5.1 | | Import E2K (ETABS) | Dropdown 📂 I/O → Import E2K | ⚠️ existe `csi-importer` | 🔴 Alta (poner globalmente) |
| 5.2 | | Import S2K (SAP2000) | Dropdown → Import S2K | ⚠️ existe `csi-importer` | 🔴 Alta |
| 5.3 | | Import IFC (Revit/ArchiCAD) | Dropdown → Import IFC | ❌ | 🔴 **CRÍTICA** |
| 5.4 | | Export E2K (ETABS) | Dropdown → Export E2K | ⚠️ shared/`e2kExporter.ts` existe pero no integrado en cada ejemplo | 🔴 **CRÍTICA** |
| 5.5 | | Export S2K (SAP2000) | Dropdown → Export S2K | ⚠️ shared/`s2kExporter.ts` existe pero no integrado | 🔴 Alta |
| 5.6 | | Import OpenSeesPy (.py) | Dropdown → Import OpenSeesPy | ❌ | 🔴 Alta |
| 5.7 | | Export OpenSeesPy (.py) | Dropdown → Export OpenSeesPy | ❌ | 🔴 **CRÍTICA** |
| 5.8 | | Import OpenSees Tcl (.tcl) | Dropdown → Import Tcl | ❌ | 🟢 Media |
| 5.9 | | Export OpenSees Tcl (.tcl) | Dropdown → Export Tcl | ❌ | 🔴 Alta |
| **6** | **Tests / Validación canónica** | | | | |
| 6.1 | | Test 1: Cantilever (Exact) | Dropdown 🧪 Tests | ❌ | 🟢 Media |
| 6.2 | | Test 2: Portal 1-Story (ETABS) | Dropdown | ❌ | 🟢 Media |
| 6.3 | | Test 3: Portal 2-Story (ETABS) | Dropdown | ❌ | 🟢 Media |
| 6.4 | | Test 4: Wall Q4 Only (ETABS) | Dropdown | ❌ | 🟢 Media |
| 6.5 | | Test 5: Portal + Wall (ETABS) | Dropdown | ❌ | 🟢 Media |
| 6.6 | | Test 6: Wilson Cantilever Q4 (incompatible modes) | Dropdown | ❌ | 🟢 Media |
| 6.7 | | ▶ Run All Tests (suite completa) | Dropdown | ❌ | 🔴 Alta |
| **7** | **Sistema de unidades dinámico** | | | | |
| 7.1 | | Selector force unit: tonf / kN / kgf / kip / lb / N | Dropdown "tonf" | ⚠️ workspace tiene similar pero limitado | 🟢 Media |
| 7.2 | | Selector length unit: m / cm / mm / ft / in | Dropdown "m" | ⚠️ workspace tiene `units.ts` | 🟢 Media |
| 7.3 | | Botón Clear (resetea todo) | Botón "Clear" | ⚠️ existe `New` en workspace | 🟢 Media |
| 7.4 | | Preset MKS (tonf+m+kgf/cm²) | Botón "MKS" | ✅ existe en `units.ts` | OK |
| 7.5 | | Preset SI (kN+m+kPa) | Botón "SI" | ✅ existe | OK |
| 7.6 | | Preset US (kip+in+ksi) | Botón "US" | ✅ existe | OK |
| **8** | **Análisis avanzados** | | | | |
| 8.1 | | **Modal Panel completo** (frecuencias + masa participativa ASCE 7-22 §12.9.1 + animación + tabla) | Botón "Modal" | ⚠️ existe `modalPanel` simple en algunos ejemplos | 🔴 **CRÍTICA** |
| 8.2 | | Animación de modos con slider play/pause | Modal Panel con flechas | ⚠️ existe en `legacyBeams` | 🔴 Alta |
| 8.3 | | Tabla ASCE 7-22 con %MPF acumulado por dirección | Modal Panel | ❌ no en workspace generic | 🔴 **CRÍTICA** |
| 8.4 | | **Nonlinear (Steel02 material)** — Fy/E₀/b/R₀/Amp/Ciclos + curva histéresis | Botón "Nonlinear" | ❌ | 🔴 Alta |
| 8.5 | | **Pushover Cíclico** (Col b/h, f'c, Fy, H col, L viga, As bar, N barras, Drift max, N ciclos) + curva pushover | Botón "Pushover" | ❌ | 🔴 Alta |
| **9** | **Reportes** | | | | |
| 9.1 | | **Report Explained** (HTML completo paso a paso: Input Data, Coordinates, Connectivity, Sections, K_local, T, K_global, Solver, Reactions, Internal forces, Modal) | Botón "Report Explained" | ⚠️ shared/`reportExplained.ts` existe pero no expuesto en workspace | 🔴 **CRÍTICA** |
| 9.2 | | **Calculadora FEM** (editor MATLAB-like + output KaTeX, dropdown "Funciones", "Librería", templates "FEM del modelo actual") | Botón "Cálculo" | ❌ | 🔴 **CRÍTICA** |
| 9.3 | | **Solver Log** (paso a paso del solver: ensamblaje K, K·u=F, desplazamientos, fuerzas internas, tiempos en ms) | Botón "Log" | ❌ | 🔴 Alta |
| 9.4 | | **CLI** (consola programable con `cad.addNode`, `cad.addframe`, `cad.addLoad`, `cad.building`, `cad.galpon`, `cad.clear`, `cad.info`, `cad.listNodes`) | Botón "CLI" | ⚠️ existe `cli-modeler` standalone pero no en cada ejemplo | 🔴 Alta |
| **10** | **Section Manager (panel derecho)** | | | | |
| 10.1 | | Material columna: Hormigón / Acero / CFT | Dropdown | ⚠️ algunos ejemplos lo tienen | 🟢 Media |
| 10.2 | | Tipo sección: Rectangular / Circular | Dropdown | ⚠️ | 🟢 Media |
| 10.3 | | f'c slider (kgf/cm²) — calidad concreto | Slider | ⚠️ | 🟢 Media |
| 10.4 | | Material vigas independiente | Dropdown | ❌ | 🟢 Media |
| 10.5 | | **Sección por piso** (Piso 1, 2, 3 con bCol/hCol/Vigas X/Vigas Y individuales) | Folder por piso | ❌ | 🔴 Alta |
| 10.6 | | **Vigas Secundarias** (toggle, número, dirección) | Folder dedicado | ❌ | 🔴 Alta |
| 10.7 | | **Losas de Piso** (toggle, espesor, subdiv X/Y) | Folder dedicado | ❌ | 🔴 Alta |
| 10.8 | | **Muros de Corte** (espesor, subdiv V/H) | Folder dedicado | ❌ | 🔴 Alta |
| 10.9 | | **Muros dir X/Y** (placement por vano y piso) | Folder con sliders | ❌ | 🔴 Alta |
| **11** | **Parameters panel (panel derecha extrema)** | | | | |
| 11.1 | | Vanos X / Vanos Y dinámicos | Sliders | ⚠️ existe en `edificio-aporticado` | 🟢 Media |
| 11.2 | | N. Pisos | Slider | ⚠️ | 🟢 Media |
| 11.3 | | h piso | Slider | ⚠️ | 🟢 Media |
| 11.4 | | Div. Vigas / Div. Columnas (subdivisión mesh) | Sliders | ❌ | 🔴 Alta |
| 11.5 | | Lvix / Lwdx / Lviy / Lwdy (luces variables individuales) | Sliders | ❌ | 🔴 Alta |
| 11.6 | | Apoyo (Empotrado / Articulado) | Dropdown | ❌ | 🔴 Alta |
| 11.7 | | Cargas Estáticas: CM / CV / Ex sismo / Ey sismo | Sliders folder dedicado | ❌ | 🔴 **CRÍTICA** |
| 11.8 | | Folder Rangos (extiende min/max de sliders) | Folder | ❌ | 🟢 Media |
| **12** | **Settings panel (panel izquierda extrema)** | | | | |
| 12.1 | | Display scale (markers/flechas) | Slider | ✅ existe | OK |
| 12.2 | | Grid: dimensión / separación grid / separación principal | Sliders | ⚠️ workspace tiene gridSize | 🟢 Media |
| 12.3 | | Filtro por piso (Todos, Piso 1..N) | Dropdown | ❌ | 🔴 Alta |
| 12.4 | | Toggles deformations / reactions (node results) | Dropdown | ✅ existe | OK |
| 12.5 | | Frame results: normals / shearsY/Z / torsions / bendingsY/Z + variantes contour | Dropdown | ⚠️ workspace tiene básico | 🟢 Media |
| 12.6 | | Shell results: bendingXX/YY/XY, membraneXX/YY/XY, shearX/Y, vonMises, pressure, displacementX/Y/Z (13 opciones) | Dropdown | ✅ existe en getViewer | OK |
| 12.7 | | Solid results: vonMises, σxx/yy/zz, τxy/yz/xz, ux/y/z (10 opciones) | Dropdown | ⚠️ falta en workspace | 🔴 Alta |
| **13** | **UI Global** | | | | |
| 13.1 | | Toggle light/dark theme | Botón ☀️ | ⚠️ existe `theme.ts` pero no expuesto | 🔴 Alta |
| 13.2 | | Switch idioma EN/ES (i18n) | Botón EN | ⚠️ existe `i18n.ts` pero no expuesto | 🔴 Alta |
| 13.3 | | Help button (tour interactivo) | Botón ❓ | ⚠️ existe `helpTour.ts` no expuesto | 🟢 Media |
| 13.4 | | New (modelo vacío) | Botón "🗐 New" | ⚠️ existe `newBlank` ejemplo | 🟢 Media |
| 13.5 | | Export (coordenadas/datos) | Botón "📤 Export" | ❌ versión genérica | 🟢 Media |

---

## 🎯 TOP 15 herramientas que faltan en el workspace y deberían agregarse

### 🔴 CRÍTICAS (impacto máximo en valor TFM/clase)

| # | Feature | Donde vive el código | Donde portar | Trabajo estimado |
|---|---------|---------------------|--------------|------------------|
| 1 | **Inspect del elemento** (3 tabs: Tabla / Matemática Explicada KaTeX / Resumen) con `K_local`, `T`, `K_global = T^T·K·T` | `getCad3d.ts` líneas ~?, función `attachInspect` (en `shared/attachInspect.ts`) | `hekatan-ui/src/inspect/` (nuevo módulo) | 6-8 h |
| 2 | **Modal Panel completo** con tabla ASCE 7-22 + masa participativa + animación slider | `getCad3d.ts` + `shared/renderModalTable.ts` | `hekatan-ui/src/modalPanel/` | 4 h |
| 3 | **Calculadora FEM** (editor MATLAB-like + output KaTeX + templates "FEM del modelo actual") | `shared/calcEngine.ts`, `shared/calcTemplates.ts`, `shared/hekatanRenderer.ts` | `hekatan-ui/src/calcPanel/` | 8-10 h |
| 4 | **Report Explained** (derivación FEM HTML completa paso a paso) | `shared/reportExplained.ts` | `hekatan-report/src/` (nuevo paquete) o `hekatan-ui/src/report/` | 4 h |
| 5 | **View modes 3D/Plan/EX/EY + Ejes A-C/1-3 + Plantas P1-P3** (cámara ortogonal con clipping planes) | `getCad3d.ts` función `setViewMode()` | `hekatan-ui/src/viewer/viewModes.ts` | 3-4 h |
| 6 | **Cargas Estáticas folder** (CM, CV, Ex sismo, Ey sismo) — patrones de carga estilo NEC/ASCE | Sección "Cargas Estáticas" en `getCad3d.ts` | Helper en `examples/src/shared/loadPatterns.ts` | 2-3 h |
| 7 | **Solver Log** (panel pequeño con tiempos: ensamblaje, solve K·u=F, fuerzas internas en ms) | `getCad3d.ts` función `showSolverLog()` | `hekatan-ui/src/solverLog/` | 2 h |
| 8 | **Export E2K integrado** (botón "📤 Exportar" en CADA ejemplo, no solo cantilever) | `shared/e2kExporter.ts` (ya existe) | Pegarlo en `workspace/main.ts` como botón global | 2 h |
| 9 | **Export OpenSeesPy** (genera archivo `.py` con el modelo entero) | `shared/openseesIO.ts` | Botón global en workspace | 2 h |
| 10 | **Import IFC** (BIM round-trip Revit/ArchiCAD) | `shared/ifcAnalyticalParser.ts` + `Draw3DIfc.ts` | Botón global en workspace | 4 h (validación) |

### 🟢 ALTA (segundo lote)

| # | Feature | Donde portar | Trabajo |
|---|---------|--------------|---------|
| 11 | **CLI programable** `cad.addNode/addFrame/building/galpon/...` integrado en cada ejemplo | `hekatan-ui/src/cli/` | 4 h |
| 12 | **Sección por piso** (bCol, hCol, Vigas X/Y individuales) — replicar lógica `edificio` | Helper genérico `floorSections.ts` | 4 h |
| 13 | **Vigas Secundarias / Losas de Piso / Muros de Corte / Muros dir X-Y** | 4 helpers separados | 8 h |
| 14 | **Pushover cíclico + Steel02 nonlinear** (botones globales) | `hekatan-fem/src/pushover.ts` (ya hay scaffold) | 6 h |
| 15 | **Toggle theme + i18n EN/ES + Help tour** expuestos en TODOS los ejemplos | `workspace/main.ts` header global | 2 h |

---

## 📦 Plan de portado por módulo

### `hekatan-ui` (UI compartida)
```
hekatan-ui/src/
├── inspect/           ← NUEVO: panel didáctico FEM por elemento (Tabla/Math/Resumen)
├── modalPanel/        ← NUEVO: panel modal con ASCE + animación + masa participativa
├── calcPanel/         ← NUEVO: calculadora FEM MATLAB-like + KaTeX
├── solverLog/         ← NUEVO: panel pequeño con tiempos del solver
├── cli/               ← NUEVO: terminal programable cad.* expuesto globalmente
├── report/            ← NUEVO: visor de Report Explained HTML
├── viewer/
│   └── viewModes.ts   ← NUEVO: 3D/Plan/EX/EY/Ejes/Plantas con clipping
└── theme/             ← EXPONER en cada ejemplo (botón global toggle)
```

### `hekatan-fem` (solver)
```
hekatan-fem/src/
├── pushover.ts        ← NUEVO: pushover cíclico (existe scaffold incompleto)
├── nonlinearSteel02.ts ← NUEVO: Steel02 material (Menegotto-Pinto)
└── reportData.ts      ← NUEVO: extrae K_local, T, K_global de cada elemento (alimenta Inspect + Report)
```

### `hekatan-mesh` (mallado)
```
hekatan-mesh/src/
├── floorSlab.ts       ← NUEVO: genera Q4 mesh de losa rectangular con subdiv X/Y
├── shearWall.ts       ← NUEVO: muro de corte Q4 con placement por bay+axis+floor
└── secondaryBeams.ts  ← NUEVO: vigas secundarias paralelas
```

### `examples/src/workspace/main.ts` (workspace genérico)
```typescript
// Agregar al header global:
- Botón "📤 Export E2K"
- Botón "📤 Export OpenSeesPy"
- Botón "📥 Import (E2K/S2K/IFC)"
- Botón "🔍 Inspect" (toggle)
- Botón "📈 Modal" (con panel ASCE)
- Botón "🧮 Cálculo" (calculadora FEM)
- Botón "📄 Report Explained"
- Botón "📜 Log"
- Botón "💻 CLI"
- Botón "🌓 Theme"
- Botón "🌐 EN/ES"
- Botón "❓ Help"

// Agregar al panel viewer:
- Botones "3D / Plan / EX / EY"
- Botones de Ejes (A,B,C,1,2,3)
- Botones de Plantas (P1..PN)
- Filtro por piso en dropdown shellResults
```

### `hekatan-report` (NUEVO PAQUETE — reporte ingenieril)
```
hekatan-report/
├── package.json
├── src/
│   ├── reportExplained.ts    ← derivación FEM completa HTML
│   ├── elementReport.ts      ← reporte por elemento individual
│   ├── reactionsReport.ts    ← reporte de reacciones
│   ├── modalReport.ts        ← reporte modal con masa participativa
│   └── pdfExport.ts          ← imprime a PDF nativo via @media print
```

---

## 🚀 Roadmap sugerido (1 sprint = 1 día)

**Sprint 1 — Quick wins (alto impacto, bajo esfuerzo):**
1. Botón "📤 Export E2K" global en workspace (2h)
2. Botón "📤 Export OpenSeesPy" global (2h)
3. Toggle theme + i18n + Help expuestos (2h)
4. Solver Log panel (2h)
5. View modes 3D/Plan/EX/EY (4h)

**Sprint 2 — Inspect + Modal (CRÍTICOS para clase):**
6. Inspect panel completo (Tabla + Matemática KaTeX + Resumen) — 8h
7. Modal Panel ASCE + animación — 4h

**Sprint 3 — Reportes:**
8. Report Explained integrado en cada ejemplo — 4h
9. Calculadora FEM panel — 8h

**Sprint 4 — Generators avanzados:**
10. Edificio paramétrico avanzado (vigas secundarias, losas, muros) — 12h
11. CLI programable global — 4h

**Sprint 5 — Análisis no-lineales:**
12. Pushover + Steel02 nonlinear — 8h
13. Tests suite global — 4h

**Total estimado: ~70 horas** (5-7 días de trabajo concentrado)

---

## 🎓 Argumento didáctico para el TFM

> "FEM Studio integra **8 herramientas pedagógicas únicas** que NO tiene ETABS comercial:
> 1. Inspect del elemento con derivación KaTeX paso a paso
> 2. Calculadora FEM simbólica
> 3. Report Explained (derivación completa imprimible)
> 4. Solver Log con tiempos por etapa
> 5. CLI programable estilo SAP/OpenSees
> 6. Tests suite con casos canónicos
> 7. Round-trip ETABS↔OpenSees↔IFC↔Hekatan
> 8. Pushover cíclico + Steel02 nonlinear visualizable"

Esto convierte el TFM de "otro solver más" en **plataforma de enseñanza FEM open-source**.
