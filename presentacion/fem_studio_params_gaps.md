# 🛠 Gaps de parametrización — FEM Studio vs Workspace

> Análisis exhaustivo: para cada generador de FEM Studio, comparar params del Tweakpane con el ejemplo equivalente del workspace.
> Objetivo: agregar params faltantes a cada ejemplo del workspace (no solo `beams/`).

---

## 📊 Mapa de generadores FEM Studio → ejemplos workspace

| FEM Studio button | Workspace equivalent | Estado |
|---|---|---|
| Cercha | `truss-gen` o `advanced-truss` | 🟡 Parcial |
| Pórtico | `portico-2d` | 🟡 Parcial |
| Torre | `tower-3d` | 🟡 Parcial |
| Galpón | `galpon` | 🟡 Parcial |
| **Edificio** | `edificio-aporticado` | 🟢 Casi completo (faltan vigas sec, losas, muros) |
| Edif. Muros | `edificio-muros` | 🟡 |
| Edif. Acero | `edificio-acero-v2` | 🟡 |
| Acero+Diag | (nuevo) | ❌ |
| Edif. Mixto | `edificio-mixto` | 🟡 |
| Mezanine | `mezanine` | 🟡 |
| Barra | `barra-axial` | 🟢 OK |
| Placa 3Q | `triangular-plate` | 🟢 |
| Placa Q4 | `plate-q4` / `plate-thin` / `plate-thick` | 🟢 |
| Losa Rect | (nuevo) | ❌ |
| Losa Plana | (nuevo) | ❌ |
| Viga Alta | (nuevo deep beam) | ❌ |
| Muro Cont. | (nuevo) | ❌ |
| Zapata | `zapata-aislada` | 🟢 |
| Placa Base | `placa-base` | 🟢 |
| Col+Placa 3D | (nuevo) | ❌ |
| Talud | `slope-stability` | 🟢 |
| Eiffel | (nuevo, icónico) | ❌ |
| Arco | `gateway-arch` | 🟢 |
| Puente | `cable-stayed-bridge` | 🟢 |
| Twist/Burj/Opera/Diagrid/Pérgola | iconos existentes | 🟢 |
| Muro Q4 | `shear-wall-q4` | 🟢 |
| Viga Q4 | `cantilever-beam-q4` | 🟢 |
| Placa XY | `placa-cantilever-q4` | 🟢 |

---

## 🏢 Edificio — gap analysis detallado

### ✅ Ya implementado en `edificio-aporticado.ts`
- ✅ Vanos X / Vanos Y (1-6, regen)
- ✅ N. Pisos (1-8, regen)
- ✅ Luz X / Y uniforme + por vano (svX_1, svY_1 dinámicos)
- ✅ h piso uniforme + por piso (hP_1..hP_N dinámico)
- ✅ Voladizos Lvix/Lvdx/Lviy/Lvdy
- ✅ Material columna/viga (Hormigón / Acero W)
- ✅ Forma columna (Rectangular / Circular)
- ✅ f'c, fy
- ✅ b/h columna global + por piso (colB_pN, colH_pN dinámico)
- ✅ b/h viga global + por piso
- ✅ Apoyo (Empotrado/Articulado/Rótula)
- ✅ Cargas: CM, CV, Ex, Ey
- ✅ 14 combos ASCE 7
- ✅ Cimentación COMPLETA (q_adm, ks, Hf, t_zapata, subdiv, tipo override)

### 🆕 AGREGADOS HOY (params nuevos al pane)
- ✅ **Mesh: Div. Vigas / Div. Columnas** (subdivisión estructural)
- ✅ **Vigas Secundarias**: Activar, Dirección X/Y, Cantidad/vano, b sec, h sec
- ✅ **Losas de Piso**: Activar, Espesor, Subdiv X/Y
- ✅ **Muros de Corte**: Activar (No/Perim/Centro X/Centro Y/Doble), Espesor, Subdiv V/H

### 🚧 PENDIENTE — implementar lógica build()
Los params ya aparecen en el Tweakpane pero la generación del mesh debe agregarse en `build()`:
- Generar Q4 mesh para losas en cada piso
- Generar Q4 mesh para muros de corte según placement
- Generar frame elements adicionales para vigas secundarias
- Aplicar `nDivBeam` / `nDivCol` para subdividir frames con nodos intermedios

---

## 🏗 Pórtico 2D — gap

### Ya implementado (`portico-2d.ts`)
- nVanos, nPisos, h_piso, span
- Materiales col/viga, f'c, fy
- Cargas CM, CV, sismo lateral

### Gap vs FEM Studio
- ❌ Voladizos Lvix/Lvdx
- ❌ Vigas secundarias (no aplica 2D pero podría tener subdivisión vertical)
- ❌ Mesh subdivision (Div. Vigas)
- ❌ Combinaciones ASCE
- ❌ Cargas distribuidas en vigas (q kN/m)

---

## 🗼 Torre — gap

### Ya implementado (`tower-3d.ts`)
- Altura total, # pisos, nDiagonales, sección uniforme

### Gap vs FEM Studio
- ❌ Sección por nivel (perfilado para optimización)
- ❌ Tipo de torre (celosía / shear / mixta)
- ❌ Cargas de viento por panel
- ❌ Cargas en el tope (antena)
- ❌ Apoyo de cimentación (4 zapatas independientes)

---

## 🏟 Galpón — gap

### Ya implementado (`galpon.ts`)
- Luz, longitud, altura, # marcos

### Gap vs FEM Studio
- ❌ Tipo de cubierta (a 1 agua, 2 aguas, arco)
- ❌ Pendiente cubierta (%)
- ❌ Correas longitudinales (toggle + cantidad)
- ❌ Diagonales (toggle por bay)
- ❌ Cubierta como Q4 (chapa metálica) — actualmente solo frames
- ❌ Cargas: peso propio + nieve + viento

---

## 🌐 Cercha — gap

### Ya implementado (`truss-gen.ts`)
- Luz, altura, # paneles
- Tipo (Howe / Pratt / Warren)

### Gap vs FEM Studio
- ❌ Cargas distribuidas en cordón superior (peso cubierta)
- ❌ Cargas concentradas en nudos
- ❌ Sección variable (cordones vs diagonales)
- ❌ Toggle: 2D plana o 3D (cubierta entre 2 cerchas)

---

## 📐 Mesh subdivision (Div. Vigas / Div. Columnas)

**FEM Studio**: cada generador tiene `nSubBeam`, `nSubCol` que subdivide los frames en N segmentos.

**Workspace**: actualmente solo algunos ejemplos lo tienen (`tower-3d`, `cantilever-beam-q4`). Se debería agregar a:
- ✅ edificio-aporticado (agregado hoy)
- ⏳ portico-2d
- ⏳ tower-3d (verificar si ya está)
- ⏳ galpon
- ⏳ truss-gen
- ⏳ frames cantilevers (steel/concrete/CFT) — ya tienen `nSegments`

---

## 🚀 Plan de portado por sprints

### Sprint A (Edificios) — el caso más complejo y útil
1. ✅ Agregar params Vigas Sec / Losas / Muros / Mesh al `edificio-aporticado.ts`
2. ⏳ Implementar lógica generation en `build()` para los 4 nuevos folders
3. ⏳ Aplicar mismo set a `edificio-muros`, `edificio-acero-v2`, `edificio-mixto`, `mezanine`

### Sprint B (Frames 1D) — pórtico, torre, galpón, cercha
1. Agregar voladizos a `portico-2d`
2. Agregar combos ASCE a `portico-2d`, `tower-3d`, `galpon`
3. Agregar Mesh subdivision a todos
4. Agregar cargas distribuidas (kN/m) a `portico-2d`, `galpon`, `truss-gen`

### Sprint C (Generadores nuevos)
1. **Losa Rect** (placa de losa cuadrada simple, Mindlin/Kirchhoff)
2. **Losa Plana** (sin vigas, solo losa con columnas)
3. **Viga Alta** (deep beam, h/L > 0.4)
4. **Muro Cont.** (muro de contención con empuje)
5. **Col+Placa 3D** (placa base con columna y pernos)
6. **Acero+Diag** (edificio acero con diagonales arriostradas)
7. **Eiffel** (estructura icónica para demos)

---

## ⚠️ Importante — el workspace ya supera FEM Studio en

- Combinaciones ASCE 7 (14 combos en edificio-aporticado vs 0 en FEM Studio default)
- Cimentación SAFE F2K (zapatas individualizadas, override de tipo)
- Round-trip e2k completo en cantilevers nuevos
- Benchmarks Paz 4.1, 6.1, 7.1, 8.1, 9.3, 10.7, 11.1, 12.1, 13.1
- Triple validación analítica (Hekatan vs ETABS API vs analítico) en cada cantilever

---

## ✅ Cambios aplicados HOY

1. **Toolbar HTML eliminada** del workspace (top-center)
2. **Folder Tweakpane "🛠 Herramientas FEM"** agregado al pane principal:
   - 🔍 Inspect (siempre visible)
   - 📈 Modal+ ASCE 7-22 (solo si `currentExample.hasModal`)
   - 📜 Solver Log + tiempos
   - 🧮 Calculadora FEM (KaTeX)
   - 💻 CLI cad.* (terminal)
   - 📄 Report Explained (HTML/PDF)
   - ▶ Calcular (forzar re-build)
3. **Params nuevos en edificio-aporticado**:
   - Mesh: Div. Vigas, Div. Columnas
   - Vigas Secundarias (activar, dir, cant, b, h)
   - Losas de Piso (activar, espesor, subdiv X/Y)
   - Muros de Corte (activar 5 modos, espesor, subdiv V/H)
