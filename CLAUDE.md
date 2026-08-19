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

### Ángulo de eje local (`ang`) y áreas de cortante (`as`)

Dos cosas que el motor **no tenía** y que hacían imposible reproducir un modelo
de ETABS nudo a nudo, por mucho que las secciones coincidieran:

```
ang <frameID> <grados>          # local axis angle de CSI, giro sobre el eje 1
as  <frameID> <As2> <As3>       # áreas de cortante en m2 (As2→V2, As3→V3)
```

`localAngles` y `shearAreasY/Z` viajan en `elementInputs` hasta el C++
(`getTransformationMatrixFrame` gira el par eje2/eje3; `getLocalStiffnessMatrix`
ya usaba las As). Las **tres** copias de la tríada tienen que girar igual:
`getTransformationMatrix.ts`, `getTransformationMatrix.cpp` (recompilar WASM) y
`didacticSolver.ts`.

Por qué importa, medido en el galpón (1120 barras, misma malla de ETABS):

| | dentro del 1 % nodal | p95 | flecha máx |
|---|---|---|---|
| sin `ang` ni `as` | 16.4 % | 22.5 % | 13.6 % |
| con `ang` | 27.2 % | 7.9 % | 0.42 % |
| con `ang` + `as` | **49.9 %** | 4.6 % | 0.89 % |

- Una C 200×50 girada 90° pasa de I = 6.20e6 a 0.53e6 mm⁴: **once veces más
  floja**. El galpón lleva 471 barras a 90° (cordones en C y diagonales 2L).
- Sin `as`, Hekatan supone `5/6·A`. En una VA-250 el alma son 1170 mm² y
  `5/6·A` son 2442: el doble. Por eso salía **sistemáticamente más rígido**,
  siempre en el mismo sentido — la firma de un término de cortante que falta.

⚠️ `ang` **ya no es alias de `shellang`**. Lo fue; al añadirse para barras, el
`case` de shell quedó inalcanzable. El ángulo de cáscara es `shellang`.

## Masa torsional: Ip vs J

La masa consistente usa `Ip = Iy + Iz` (momento polar de inercia) para DOFs torsionales, NO `J` (constante de Saint-Venant). OpenSees tiene un bug conocido donde usa J en vez de Ip — causa ~3% de error en modos torsionales.

⚠️ Pero el modal **no pasa por ahí**: `getGlobalMassMatrix.cpp` es masa LUMPED
(la de CSI), con la masa rotacional a `1e-9·m`. `getLocalMassMatrix.cpp` (la
consistente, la del `Ip`) hoy no la usa el modal. O sea que `Ip` vs `J` no puede
explicar ninguna diferencia de masa contra ETABS.

## Pesar el modelo: `assembled_joint_mass`

La M se arma en `ensamblarMasa()` (`modal.cpp`), fuera de `modal()`, con los tres
pasos de ETABS en su orden: **2a** fuente de masa (`INCLUDEELEMENTS` + masa
nodal) · **2b** solo lateral (`INCLUDEVERTICALMASS "No"`) · **2c**
`LUMPATSTORIES`. El diafragma no entra ahí: eso es una restricción, no masa.

La misma función se expone como `assembled_joint_mass()`, que es la tabla
`AssembledJointMass` de ETABS y **no resuelve nada, solo pesa**:

```bash
# C++ nativo — el TERCER argumento activa el modo báscula
node cli/native/dump_modal_input.mjs modelo.heks e.bin 12 "1,1,1"  # lateral,lump,inclElem
cli/native/modal_native.exe e.bin nada.json masa.csv               # nudo,x,y,z,mUx..mRz
```

Desde JS: `masaEnsamblada()` en `tests/lib/wasm.mjs`. Test de regresión:
`node tests/run.mjs masa` (caso `masa_lump_etabs`, árbitro ETABS 22 sobre el
galpón). **No** rehacer la cuenta en JavaScript para "comprobar": eso mide una
copia, y así se estuvo mirando meses una masa que no era la del solver.

## El motor de Python (`hekatan-struct-py`) — el árbitro rápido

Mismo solver de barras que el TS/C++, en Python puro. **No es una maqueta: el
2026-08-17 reproduce el galpón (378 nudos, 723 barras) al `0.000 %` en los 378
nudos.** Sirve para iterar sin recompilar WASM: se cambia una línea y se vuelve
a medir en menos de un segundo.

```python
from hekatan_struct.heks import leer_heks, resolver_heks
m = leer_heks("galpon_bodega.heks")     # el MISMO texto que come cliModeler.ts
res = resolver_heks(m)
```

Lee el `.heks` a propósito, en vez de rearmar el modelo en Python: si no, lo
que se compara son dos modelos parecidos, no dos motores.

Lo que tiene, y que hasta el 17-ago **no** tenía (era Euler-Bernoulli pelado):

| | dónde |
|---|---|
| cortante de Timoshenko con `as` (5/6·A por defecto, como ETABS) | `elements/frame.py` |
| `ang` — local axis angle de CSI | `frame_local_axes_csi(..., angle_deg)` |
| `frameload` → fuerzas **y momentos** de empotramiento | `frame_fixed_end_loads` |
| end releases por condensación estática | `frame_releases_condense` |
| apoyos por **eliminación**, no penalty | `deform()` |
| camino disperso (CSR) a partir de 3000 GDL | `deform(..., sparse=True)` |

Guiado por **SAP IV** (`SAP-IV-estudio/`, el último eslabón con fuente abierta
del linaje que acaba en SAPFire): `beam.for` para el término de cortante
(`φ = 12EI/(G·As·L²)`, que con As→∞ degenera exacto en Euler-Bernoulli),
`bound.for`+`sesol.for` para numerar con 0 los GDL restringidos, `addstf.for`
para el ensamble.

⚠️ **Trampa del `.heks`**: el 6º token de `frame` es **I22** (plano 1-3) y el 7º
es **I33** (plano 1-2, el del canto), aunque el comentario los llame `Iz Iy`. Y
en `as ID As2 As3`, **As2 va con I33**. Cambiarlo cruza las inercias.

**Cáscaras (19-ago):** `heks.py` monta ya `shell`, `areaload` (vector nodal
consistente `∫N_i·q·dA`, Gauss 2x2 con jacobiano real), `shellmod` escalar y
direccional y `shellang`. Medido contra el **WASM** por `cliModeler`: **10
modelos al 0.0000 %**, hasta 1175 cáscaras / 1289 nudos
(`hekatan-struct-py/tests/test_heks_shells.py`). Fuera todavía: `shelltype
thin`, `spring`, `mass`, `diaph` — se cuentan en `ModeloHeks.ignorados` y
avisan, no se callan.

⚠️ **`shellQ4.ts` y `shellQ4.cpp` NO coinciden en la flexión de placa**: los
modos incompatibles de Wilson están solo en la membrana del `.ts` y también en
la flexión del `.cpp`. Manda el `.cpp`, que es el que se compila a WASM y da los
números del producto (`index.ts` exporta `deformCpp`). Vale 1.8 % en una losa
4x4. Arbitrado con Navier, que no es ninguno de los dos: en malla gruesa el que
lleva los modos está 3 veces más cerca, y al refinar convergen. En Python es
`BENDING_MODOS_INCOMPATIBLES` (True = el C++), con un test de paridad contra
CADA motor — el del C++ por `tests/oraculo_wasm.mjs`.

⚠️ Un GDL **sin rigidez ninguna** (diagonal y columna a cero) hay que sacarlo
del sistema y dejarlo en 0: es el `getZerosIndices` de `deform.cpp`. Con él
dentro no falla ese GDL, falla el modelo entero — `galpon_lc.heks` daba NaN en
los 609 nudos por 9 GDL huérfanos de 3 nudos que solo tocan zinc sin flexión.

⚠️ `awatif-py/` es OTRO paquete (el fork original). Los tests que hacen
`from awatif import ...` **no** prueban este motor; los de éste importan
`hekatan_struct`. `pytest tests` → **69 pasan**, 1 skip, 2 xfail.

## Suite de regresión: `npm test`

```
npm test                 # todos los casos
node tests/run.mjs paz   # solo los que lleven "paz" en el nombre
```

Sale con **código 1** si algo se pasa de su límite. Hoy: **102/102**.

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
  casos/mesa_torsion_fuerzas.mjs   24 barras vs ETABS 19.1 (SCP, mismas cargas)
  casos/masa_lump_etabs.mjs        la BASCULA: masa nudo a nudo vs AssembledJointMass
  datos/               el .heks y el JSON de referencia
  datos/gen_mesa_solver_ref.py     genera la referencia ETABS de mesa-torsión
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

mesa-torsión ya está arbitrada barra a barra (2026-08-09): el caso SCP (misma
carga nodal, sin diafragma, offsets=0) cierra < 1 % salvo torsión (~4 %, J
Saint-Venant vs ETABS). Por el camino cazó un cruce I22/I33 vivo en
`mesaTorsion.ts`: las vigas tenían la inercia FUERTE en I22, flexionaban en
gravedad 2.78× más flojas, y su M3 salía 0.70× / las columnas 1.33× el de ETABS.

⚠️ Pendiente: las zapatas Guerra contra SAFE.

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

### Cómo COMPROBAR que el deploy lleva el arreglo

Que `gh-pages` diga «Published» no prueba nada. Tres pasos, y el 2 es el que
vale:

```bash
# 1. la página carga y no revienta (mira el PNG, no solo el JSON)
node cli/check_deploy.mjs          # → cli/shots/deploy_publico.png, pageerror: 0

# 2. el chunk de PRODUCCION es el mismo binario que el build local
curl -s https://giorgioburbanelli89.github.io/hekatan-struct-lineal/assets/e2kExporter-<hash>.js -o /tmp/e2k.js
cmp /tmp/e2k.js website/src/examples/assets/e2kExporter-<hash>.js   # tiene que ser IDENTICO

# 3. y subir tambien main, que es OTRA cosa que el deploy
git push hekatan-struct main
```

⚠️ **`gh-pages` NO sube `main`.** El 2026-08-18 `main` llevaba **35 commits sin
subir** mientras el deploy iba al día: el sitio público estaba nuevo y el código
de GitHub viejo.

⚠️ **`raw.githubusercontent.com` cachea ~5 min**, así que después de un push
devuelve el README viejo y parece que no subió. Para comprobar de verdad:
`curl -s https://api.github.com/repos/GiorgioBurbanelli89/hekatan-struct-lineal/commits/main`
y comparar el SHA con `git log -1`.

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
