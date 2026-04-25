# Hekatan Struct

Fork de [awatif v2.0.0](https://github.com/madil4/awatif) extendido con análisis modal, Winkler springs nativos en C++, ejemplos parametrizados (zapatas, placas, cáscaras, pórticos, edificios) y un **workspace unificado** con Tweakpane para cargar cualquier ejemplo por selector o URL `?t=<id>`.

**Deploy público:** https://giorgioburbanelli89.github.io/hekatan-struct/workspace/

## Arquitectura del workspace

Cada ejemplo vive en su propia carpeta (`examples/src/<id>/`) con `index.html` + `main.ts` + `<name>.ts` y **exporta un `ExampleDef`** que el workspace registra en `exampleRegistry.ts`.

```
examples/src/
├── workspace/                  ← hub principal
│   ├── main.ts                 (Tweakpane unificado: selector + params + modal)
│   ├── exampleRegistry.ts      (ExampleDef interface + lista)
│   ├── runExampleStandalone.ts (runner para páginas standalone /zapata-aislada/)
│   └── units.ts                (forceUnit/dispUnit persistidos en localStorage)
├── zapata-aislada/             ← Ecuador NEC-SE-GC con selector tipo suelo
├── zapata-viga-amarre/         ← medianera + viga + centrada, Winkler 3D
├── plate-thin/, plate-thick/   ← Kirchhoff / Mindlin vía plateQ4Solve
├── membrana-pstress/           ← plane stress Q4 como muro de corte
├── shell-thin/, shell-thick/   ← Kirchhoff-Love / MITC4 vía deform+analyze
├── barra-axial/, truss-gen/    ← frames 1D
├── portico-2d/, tower-3d/, galpon/
├── edificio-aporticado/, edif-acero/, mezanine/
└── beams/                      ← Paz 6.3 (validación modal, ver abajo)
```

Todos los ejemplos son cargables desde el workspace:
- URL directa: `/workspace/?t=zapata-aislada`
- Página standalone compilada: `/zapata-aislada/`, `/edificio-aporticado/`, etc.

### Interfaz `ExampleDef` (examples/src/workspace/exampleRegistry.ts)

```ts
interface ExampleDef {
  id: string;
  name: string;
  category: string;
  params: Record<string, ParamDef>;
  build: (params, states, modalPanel?) => void;

  hasModal?: boolean;
  runModal?: (params, states, modalPanel) => void;

  onParamChange?: (changedKey, params) => void;   // soilType→q_adm, ks_factor, etc.
  computedLabels?: (params, states) => Record<string, string>;   // folder "📊 Calculados"
  inlineComputed?: Array<{ after, label, compute }>;             // ks debajo de ks_factor, etc.

  defaultShellResult?: string;        // "pressure" | "bendingXX" | ...
  availableShellResults?: string[];   // filtra dropdown Shell results
}

interface ParamDef {
  default: number;
  min?, max?, step?: number;
  label?: string;
  options?: Record<string, number>;   // dropdown numeric enum
  boolean?: boolean;                  // checkbox on/off (0/1)
  folder?: string;                    // agrupa en folder Tweakpane
}
```

### Flujo del workspace (examples/src/workspace/main.ts)

1. Usuario selecciona ejemplo → `loadExample(ex)`
2. `resetStates()` limpia objects3D, nodes, elements, inputs, outputs
3. `activeExampleVersion.v++` invalida van.derive de ejemplos previos (zapatas con springs reactivos)
4. `ex.build(params, states, modalPanel)` construye el modelo
5. Aplica `ex.defaultShellResult` al viewer y enciende loads/supports
6. `filterShellResultOptions(ex.availableShellResults)` filtra el dropdown
7. `autoScaleDeformedShape()` ajusta `deformScale` para max ≈ 25% del diagonal
8. `autoFitCamera()` reencuadra isométrica sobre el modelo
9. `buildParamsPane()` reconstruye Tweakpane con Vista / Unidades / Parámetros / Modal

## Solver FEM (hekatan-fem)

**API pública** (`hekatan-fem/src/index.ts`):
```ts
import { deform, analyze, modalAnalysis, modalAnalysisPaz,
         plateQ4Solve, didacticSolveCpp, slopeSRM } from "hekatan-fem";
```

| Función | Entrada | Salida |
|---|---|---|
| `deform` | nodes, elements, nodeInputs, elementInputs, springsList? | `DeformOutputs { deformations, reactions }` |
| `analyze` | nodes, elements, elementInputs, deformOutputs | `AnalyzeOutputs { bendingXX/YY/XY, membrane*, vonMises, pressure?, colorMapRanges? }` |
| `modalAnalysis` | nodes, elements, nodeInputs, elementInputs, nModes | `ModalOutputs { frequencies, modeShapes, massParticipation }` |
| `plateQ4Solve` | {E, nu, t, theoryType, mesh*, bcType, pressure} | `{ nodeResults[{w,bx,by}], elementResults[{Mxx,Myy,Mxy,Qx,Qy}] }` |

### Winkler springs nativos (extensión al `deform.cpp` original)

`deform()` acepta un 5º argumento opcional `springsList: Array<{node, dof, k}>`. En C++ ensambla:
```cpp
K_global.coeffRef(gdof, gdof) += k;   // gdof = 6*node + dof
```
Usado en zapata-aislada y zapata-viga-amarre para Winkler nodal (`k = ks × A_tributaria`).

### Placa Q4 con `theoryType`

```ts
plateQ4Solve({ theoryType: 0 })   // Mindlin-Reissner (FSDT, thick)
plateQ4Solve({ theoryType: 1 })   // Kirchhoff (CPT, thin)
plateQ4Solve({ theoryType: 2 })   // Plane stress (membrana)
```

Retorna `elementResults[i].Mxx/Myy/Mxy/Qx/Qy` por elemento. El ejemplo debe poblar `analyzeOutputs.bendingXX/YY/XY` (Maps con array per-nodo del Q4) para que el viewer renderice el colormap.

## Viewer (hekatan-ui)

**`getViewer({ mesh, objects3D?, settingsObj? })`** retorna `HTMLDivElement` con Tweakpane "Settings" interno. Expone `(viewerElm as any).__ctx = { scene, camera, controls, render, setActiveCamera, settings }` y `.__settings` para mutación desde fuera.

### Settings disponibles

```ts
{
  gridSize: number,          // default 20
  displayScale: number,      // markers/flechas (no afecta deformada)
  deformScale: number,       // amplificación visible de la deformada
  nodes, elements, elemColumns, elemBeams,
  nodesIndexes, elementsIndexes,
  orientations, sections, secColumns, secBeams, secFloor,
  supports, loads,
  custom3D: boolean,         // toggle objects3D (zigzag springs Winkler)
  showCotas: boolean,        // dimensiones anotadas
  deformedShape: boolean,
  nodeResults, frameResults, shellResults: string,
  solids, flipAxes
}
```

### Shell results (`settings.shellResults`)

Opciones: `none`, `bendingXX/YY/XY`, `membraneXX/YY/XY`, `shearX/Y`, `vonMises`, **`pressure`**, `displacementX/Y/Z`.

Override de rango: un ejemplo puede setear `analyzeOutputs.colorMapRanges = { pressure: [0, -q_adm] }` para fijar el rango de la barra de color sólo para ciertos campos (otros siguen auto-escala).

El viewer filtra NaN en min/max (nodos fuera del plato reciben NaN). `getColorMap` soporta rangos invertidos (vMin > vMax) para convenciones de signo negativo.

## Ejes locales (Three.js Y-up)

**CRÍTICO**: awatif usa convención Three.js (`THREE.Object3D.DEFAULT_UP = (0,0,1)` — Z-up en hekatan-struct).

Para columnas verticales (elemento a lo largo de +Z):
```
local_x = [0, 0, 1]   → global Z (eje del elemento)
local_y = [0, 1, 0]   → global Y
local_z = [-1, 0, 0]  → global -X
```

Esto significa:
- `momentsOfInertiaZ` = eje débil (Iy AISC) → controla sway en Y
- `momentsOfInertiaY` = eje fuerte (Iz AISC) → controla sway en X

En `beams/main.ts`:
```typescript
momentsOfInertiaZ: eMap(COL_Iy, GIR_Iy),  // weak axis → Iz local
momentsOfInertiaY: eMap(COL_Iz, GIR_Iz),  // strong axis → Iy local
```

## Masa torsional: Ip vs J

La masa consistente usa `Ip = Iy + Iz` (momento polar de inercia) para DOFs torsionales, NO `J` (constante de Saint-Venant). OpenSees tiene un bug conocido donde usa J en vez de Ip — causa ~3% de error en modos torsionales.

## Validación del solver modal (4 solvers, 0.00% diferencia)

Ejemplo de referencia: **Paz & Leigh 6.3 Space Frame** (`examples/src/beams/main.ts`).

| Solver | Archivo | Descripción |
|--------|---------|-------------|
| WASM browser | `examples/src/beams/main.ts` | Eigen C++ → emscripten → browser |
| WASM CLI | `cli_modal.mjs` | Eigen C++ → emscripten → Node.js |
| C++ nativo | `cli_modal_native.cpp` | Eigen C++ → g++ → exe standalone |
| Python/SciPy | `test_modal_comparison.py` | Reimplementación + K de OpenSees |

Modos del Example 6.3 (W24x146 columnas, W14x84 vigas, kip/in/sec):
```
Mode   Freq (Hz)   Dominant
  1     9.6780     Uy (99.8%)
  2    16.9874     Rz torsional
  3    26.6149     Ux (94.3%)
  4    29.9497     antisimétrico
  5    33.9929     Rz (14.2%)
  6    44.9332     Uz (26.9%)
```

## Zapata Aislada (Ecuador NEC-SE-GC)

`examples/src/zapata-aislada/zapataAislada.ts` — referencia de cómo integrar:
- Tabla `SOIL_TYPES[]` con 11 suelos (Custom + arcilla blanda/firme/dura + limo + arena suelta/media/densa + grava + roca alterada/sana) con q_adm, ks_factor (Bowles), su, φ, γ, N_SPT, E_soil
- Selector `Tipo de suelo` como `options` dropdown → `onParamChange` autopobla todas las propiedades
- Patrones de carga **D/L/S** con checkboxes `boolean` + selector de modo (Simple / Solo-D / Solo-L / Solo-S / Combinación)
- `inlineComputed`: ks calculado aparece como readonly debajo de `ks_factor`
- `computedLabels`: folder "📊 Calculados" con D flexural, k_r Biot, q_max, ratio q_max/q_adm
- `availableShellResults: ["pressure", "bendingXX", "bendingYY", "displacementZ", "vonMises"]`
- `defaultShellResult: "pressure"` con override `colorMapRanges.pressure = [0, -q_adm]`
- Resortes 3D zigzag (rojo) + base verde (anchor suelo) en `states.objects3D.val`
- `hasModal: true` + `runModal` vía `modalAnalysis(nodes, elements, ni, ei, 12)`

## Build & Deploy

```bash
# Dev local (hot reload en localhost:4600)
npm run dev:examples

# Build de producción (output en website/src/examples/)
MSYS_NO_PATHCONV=1 DEPLOY_BASE=/hekatan-struct/ npm run build -w examples

# Deploy a GitHub Pages (branch gh-pages)
GIT_AUTHOR_NAME="..." GIT_AUTHOR_EMAIL="..." \
  npx gh-pages --dist website/src/examples \
    --repo https://github.com/GiorgioBurbanelli89/hekatan-struct.git \
    --branch gh-pages --dotfiles \
    --message "..."
```

`vite.config.ts` tiene un workaround para `DEPLOY_BASE` en Git-Bash de Windows:
```ts
base: (() => {
  let b = process.env.DEPLOY_BASE || "./";
  b = b.replace(/^[A-Z]:\/Program Files\/Git/i, "");  // fix MSYS path mangling
  b = b.replace(/^\/\//, "/");
  return b || "./";
})()
```

## Compilar C++ nativo / WASM

```bash
# Nativo (validación)
g++ -O2 -std=c++17 -static-libgcc -static-libstdc++ \
  -I hekatan-fem/src/cpp/eigen -I hekatan-fem/src/cpp \
  cli_modal_native.cpp hekatan-fem/src/cpp/utils/*.cpp \
  -o cli_modal_native.exe

# WASM (requiere emsdk)
source /c/Users/j-b-j/emsdk/emsdk_env.sh
# Script de build en hekatan-fem/ — deform.cpp + utils/* → built/deform.{wasm,js}
```

## Cómo agregar un ejemplo nuevo

1. Crear `examples/src/<id>/<name>.ts` exportando `ExampleDef`
2. Crear `examples/src/<id>/main.ts`:
   ```ts
   import { <name> } from "./<name>";
   import { runExampleStandalone } from "../workspace/runExampleStandalone";
   runExampleStandalone(<name>);
   ```
3. Crear `examples/src/<id>/index.html` (wrapper mínimo)
4. Registrar en `examples/src/workspace/exampleRegistry.ts`:
   ```ts
   import { <name> } from "../<id>/<name>";
   export const examplesRegistry: ExampleDef[] = [..., <name>];
   ```
5. Agregar entry en `examples/vite.config.ts`:
   ```ts
   "<id>": "src/<id>/index.html",
   ```

## Git remotes

```
hekatan-struct  https://github.com/GiorgioBurbanelli89/hekatan-struct.git  (MAIN)
  main       ← source
  gh-pages   ← bundle compilado (deploy)
```

Otra compu:
```bash
git clone https://github.com/GiorgioBurbanelli89/hekatan-struct.git
cd hekatan-struct && npm install && npm run dev:examples
```

## Gotchas

- **NO usar `tasklist` sin `| head`** — output enorme, crashea
- El WASM compilado está **versionado en git** (`hekatan-fem/src/cpp/built/deform.*`). No necesitas emsdk para desarrollo, sólo para modificar C++
- `activeExampleVersion` invalida van.derive stale al cambiar de ejemplo — NO remover
- `colorMapRanges` es por-campo (`{ pressure: [min,max] }`), no global — otros shell results mantienen auto-escala
- `deformScale` se auto-computa en cada `loadExample`/`rebuild` — el usuario puede sobreescribir desde el slider pero se pierde al siguiente rebuild
- Git-Bash de Windows convierte `/hekatan-struct/` a ruta absoluta Windows — usar `MSYS_NO_PATHCONV=1` al build
- El servidor dev corre en **localhost:4600** (no 4640 como el awatif original)
