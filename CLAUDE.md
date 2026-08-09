# Hekatan Struct Lineal

Fork de [awatif v2.0.0](https://github.com/madil4/awatif) extendido con análisis modal, Winkler springs nativos en C++, ejemplos parametrizados (zapatas, placas, cáscaras, pórticos, edificios) y un **workspace unificado** con Tweakpane para cargar cualquier ejemplo por selector o URL `?t=<id>`.

**Deploy público:** https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/

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

## Ejes locales de barra — convención CSI (SAP2000 / ETABS)

```
eje 1 (x) = del nudo i al nudo j
eje 2 (y) = en el plano vertical que contiene la barra, hacia ARRIBA
            (barra vertical: no hay tal plano → se toma el +X global)
eje 3 (z) = eje1 × eje2
```

Para columnas verticales (elemento a lo largo de +Z):
```
local_x = [0, 0, 1]   → global Z (eje del elemento)
local_y = [1, 0, 0]   → global X
local_z = [0, 1, 0]   → global Y
```

Esto significa:
- `momentsOfInertiaZ` = **I33** = flexión en el plano 1-2 (V2, M3). En una viga
  horizontal es la flexión VERTICAL, o sea el eje FUERTE (Iz AISC).
- `momentsOfInertiaY` = **I22** = flexión en el plano 1-3 (V3, M2), el débil.

En `beams/main.ts`:
```typescript
momentsOfInertiaY: eMap(COL_Iy, GIR_Iy),  // weak axis → I22
momentsOfInertiaZ: eMap(COL_Iz, GIR_Iz),  // strong axis → I33
```

**Antes** la tríada era otra (`y` horizontal, `z` hacia arriba) y las dos
inercias iban en el casillero contrario. Las dos convenciones son dextrógiras y
resuelven igual, pero respecto a CSI la vieja giraba 90° **en un sentido en las
vigas y en el contrario en las columnas**, así que no había un mapeo único para
leer las fuerzas de barra contra ETABS. Con la actual: `Vy`≡V2, `Vz`≡V3,
`My`≡M2, `Mz`≡M3, sin cruzar y sin cambio de signo por tipo de barra.

Queda una diferencia que **no** es de ejes y no se corrige: CSI dibuja `M2` y
`M3` los dos "positivo = sagging" en su plano, y en el plano 1-3 eso sale al
revés del momento vectorial sobre el eje 2. Al comparar contra ETABS hay que
emitir `M2` con signo cambiado. Y `analyze()` devuelve **fuerzas de extremo**
(`f = k·u`), no el diagrama: en el extremo i el diagrama es el negativo.

Las tres copias de la tríada tienen que decir lo mismo:
`hekatan-fem/src/utils/getTransformationMatrix.ts`,
`hekatan-fem/src/cpp/utils/getTransformationMatrix.cpp` (necesita recompilar
WASM) y `hekatan-fem/src/didacticSolver.ts`.

## Masa torsional: Ip vs J

La masa consistente usa `Ip = Iy + Iz` (momento polar de inercia) para DOFs torsionales, NO `J` (constante de Saint-Venant). OpenSees tiene un bug conocido donde usa J en vez de Ip — causa ~3% de error en modos torsionales.

## Suite de regresión: `npm test`

```
npm test                 # todos los casos
node tests/run.mjs paz   # solo los que lleven "paz" en el nombre
```

Sale con **código 1** si algo se pasa de su límite. Hoy: **30/30**.

```
tests/
  run.mjs              runner: descubre tests/casos/*.mjs, tabla, exit code
  lib/bundle.mjs       empaqueta TS del repo con esbuild y lo importa (cachea)
  lib/wasm.mjs         llama a _modal del WASM directo (modelo definido a mano)
  lib/heks.mjs         resuelve un .heks por cliModeler
  lib/comparar.mjs     fuerzas de barra vs ETABS (extremo→diagrama, signo de M2)
  casos/paz_6_3.mjs            6 modos × 2 caminos vs ETABS 22
  casos/mezanine_fuerzas.mjs   133 barras × 6 campos vs ETABS 22
  casos/safe_ex01_placa.mjs        flecha vs Navier analítico y vs SAFE
  casos/safe_ex04_placa_vigas.mjs  placa sobre vigas: shells y barras JUNTOS
  datos/               el .heks y el JSON de referencia
```

Un caso exporta `{ nombre, descripcion, correr() }` y `correr()` devuelve filas
`{ que, medido, limite, ok, detalle }`. **La referencia de un caso tiene que ser
otro PROGRAMA** (ETABS, SAP2000, SAFE) con el mismo modelo, la misma malla nodo
a nodo y los brazos rígidos anulados — nunca una cuenta a mano ni un número
heredado sin fuente reproducible: así fue como se coló la referencia falsa del
Paz 6.3 y estuvo meses dando por buena una regresión que no existía.

`lib/heks.mjs` va **por `cliModeler`** a propósito, no llamando al solver a
pelo: así el test cubre también el lector del `.heks` y el armado del modelo,
que es donde vive el cruce I22/I33 de la convención CSI.

Un caso puede tener **dos árbitros** y conviene: `safe_ex01_placa` compara contra
la serie de Navier (analítica) **y** contra SAFE. Ojo con la malla: los puntos
x = 60″ de la tabla del PDF **no caen en nodo** con malla uniforme 8×8 (360/8 =
45″), porque la del PDF es no uniforme con los bordes finos. Por eso contra
Navier va 12×12 y contra SAFE solo el centro.

⚠️ Pendiente: mesa-torsión (hay que re-arbitrarla barra a barra, sus picks son
|max| globales) y las zapatas Guerra contra SAFE.

## Validación del solver modal contra ETABS 22

Ejemplo de referencia: **Paz & Leigh 6.3 Space Frame** (`examples/src/beams/main.ts`).

| Solver | Archivo | Descripción |
|--------|---------|-------------|
| WASM browser | `examples/src/beams/main.ts` | Eigen C++ → emscripten → browser |
| WASM CLI | `cli_modal.mjs` | Eigen C++ → emscripten → Node.js |
| C++ nativo | `cli_modal_native.cpp` | Eigen C++ → g++ → exe standalone |
| Python/SciPy | `test_modal_comparison.py` | Reimplementación + K de OpenSees |

Modos del Example 6.3 (W24x146 columnas, W14x84 vigas, kip/in/sec):

| Modo | ETABS 22 (offsets=0) | Hekatan denso | Hekatan subespacio | dif |
|---|---|---|---|---|
| 1 | 8.8305 | 8.8358 | 8.8305 | 0.06 % / **0.00 %** |
| 2 | 14.5459 | 14.5551 | 14.5459 | 0.06 % / **0.00 %** |
| 3 | 24.2336 | 24.2228 | 24.2336 | −0.04 % / **0.00 %** |
| 4 | 25.1132 | 25.1038 | 25.1132 | −0.04 % / **0.00 %** |
| 5 | 159.6525 | 159.6530 | 159.6525 | 0.00 % |
| 6 | 159.8513 | 159.8523 | 159.8513 | 0.00 % |

El camino de **subespacio** de Hekatan sale idéntico a ETABS en los **cuatro
decimales de los seis modos**. Arbitrado con `cli/paz_etabs.py` (mismas secciones
por `SetGeneral`, misma densidad) y `cli/paz_masa_etabs.py`. Test de regresión:
`node cli/paz_check.mjs` (tolerancia 0.1 %, sale con código ≠ 0 si falla).

### ⚠️ Por qué "offsets = 0": ETABS no pesa el brazo rígido

Tal cual, ETABS da `9.0903 … 164.5541`, un **+2.88 % uniforme**. **No es el
solver**: ETABS pone brazos rígidos automáticos (`auto = SI`, RZ = 0) también
aquí — 14.20 in en el tope de cada columna, 12.35 y 6.45 en los extremos de las
vigas — y **descuenta del peso propio el tramo que cae dentro del brazo**.
Medido con `AssembledJointMass`:

| | ETABS auto | ETABS offsets=0 | Hekatan |
|---|---|---|---|
| masa nudo libre | 5.707652e−3 | — | 6.048429e−3 (−5.63 %) |
| masa nudo base | 2.840051e−3 | — | 2.840090e−3 |
| masa total | 3.419081e−2 | 3.555392e−2 | 3.555400e−2 |

Lo que descuenta son **1857.4 in³ exactos** = `2·24.7·24.7 + 2·24.7·12.9`, o sea
los offsets **de las vigas** (los de columna no los descuenta). Y √(6.048429 /
5.707652) = 1.0294, que es el +2.88 % observado. Hekatan lumpea `ρ·A·L/2` con L
de nudo a nudo (`getGlobalMassMatrix.cpp`, HRZ, igual que CSI): con offsets = 0
la masa total coincide al **0.002 %**.

Corolario: **Hekatan Struct no tiene end length offsets**, y ETABS los pone por
defecto. Cualquier comparación contra ETABS los tiene que anular
(`FrameObj.SetEndLengthOffset(nm, False, 0,0,0)`) o mide otra estructura.

⚠️ **La tabla que estaba aquí antes era falsa** (`9.6780 / 16.9874 / 26.6149 /
29.9497 / 33.9929 / 44.9332`, atribuida a "4 solvers de acuerdo"). Solo la
reproduce `cli/native/cli_modal_native.exe`, un binario del 17-may compilado de
código que **nunca se subió**: el árbol de ese mismo commit, recompilado, da
8.8412. Y sus modos 5-6 (33.99 / 44.93) no existen — ETABS también los pone a
~164 Hz. `cli/paz_check.mjs` venía fallando contra esa referencia falsa.

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
MSYS_NO_PATHCONV=1 DEPLOY_BASE=/hekatan-struct-lineal/ npm run build -w examples

# Deploy a GitHub Pages (branch gh-pages)
GIT_AUTHOR_NAME="..." GIT_AUTHOR_EMAIL="..." \
  npx gh-pages --dist website/src/examples \
    --repo https://github.com/GiorgioBurbanelli89/hekatan-struct-lineal.git \
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
hekatan-struct-lineal  https://github.com/GiorgioBurbanelli89/hekatan-struct-lineal.git  (MAIN)
  main       ← source
  gh-pages   ← bundle compilado (deploy)
```

Otra compu:
```bash
git clone https://github.com/GiorgioBurbanelli89/hekatan-struct-lineal.git
cd hekatan-struct-lineal && npm install && npm run dev:examples
```

## Gotchas

- **NO usar `tasklist` sin `| head`** — output enorme, crashea
- El WASM compilado está **versionado en git** (`hekatan-fem/src/cpp/built/deform.*`). No necesitas emsdk para desarrollo, sólo para modificar C++
- `activeExampleVersion` invalida van.derive stale al cambiar de ejemplo — NO remover
- `colorMapRanges` es por-campo (`{ pressure: [min,max] }`), no global — otros shell results mantienen auto-escala
- `deformScale` se auto-computa en cada `loadExample`/`rebuild` — el usuario puede sobreescribir desde el slider pero se pierde al siguiente rebuild
- Git-Bash de Windows convierte `/hekatan-struct-lineal/` a ruta absoluta Windows — usar `MSYS_NO_PATHCONV=1` al build
- El servidor dev corre en **localhost:4600** (no 4640 como el awatif original)
