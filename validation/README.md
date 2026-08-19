# Validación FEM — Hekatan Struct Lineal

Todo lo que valida el solver, en **un solo sitio**. Antes estaba repartido en
cuatro carpetas con nombres distintos (`validacion/`, `benchmarks/`,
`Benchmark_Placa/`, `modelos-etabs/`), una de ellas escondida del repo público.

**La regla de esta carpeta:** la referencia de un caso tiene que ser **otro
programa** (ETABS, SAP2000, SAFE) corriendo **el mismo modelo con la misma malla
nudo a nudo**, o una **solución exacta** publicada. Nunca una cuenta a mano ni un
número heredado sin fuente reproducible.

## Cómo está ordenado

```
validation/
├── 01-membrana-drilling/     el giro normal — ITW 1990, los 4 tests del paper
│   ├── e2k/  s2k/            los modelos, un fichero por test
│   ├── python/               el elemento y los tests en Python
│   ├── lab/                  los mismos en Hekatan Lab (MATLAB)
│   ├── cpd/                  los originales en Calcpad
│   └── paper/                las ecuaciones en LaTeX + figuras y tablas
├── 02-placas/                placas: Navier, SAFE, thin/thick
├── 03-cascaras-muros/        cáscaras, membranas, muros, layered
├── 04-cimentaciones-safe/    las 6 cimentaciones contra SAFE (f2k)
├── 05-porticos-modal/        pórticos, modal, composite
├── 06-etabs-api/             scripts de la OAPI de ETABS/SAFE que generan las referencias
└── modelos/                  e2k / s2k / f2k por familia + los JSON de referencia
```

## 01 · Membrana con drilling — ITW 1990

Ibrahimbegović, Taylor & Wilson, *A robust quadrilateral membrane finite element
with drilling degrees of freedom*, IJNME **30**, 445-457.

| test | qué mide | referencia | Hekatan | ETABS 22 | SAP2000 24 |
|---|---|---|---|---|---|
| **1** patch test, flecha | flexión pura, **respuesta exacta** | 1.5 | **1.500000** | 1.500000 | 1.500000 |
| **1** patch test, **giro** | el drilling | 0.6 | **0.600000** | 0.600000 | 0.600000 |
| **2** cantilever corto | cortante | 0.3553 | 0.354853 | 0.354201 | 0.354201 |
| **3** Cook en C(48,52) | distorsión de malla | 23.91 | 23.6800 | 23.602130 | 23.602130 |
| **4** hemisferio 8×8 | cáscara curva | 0.094 | 0.058845 ⚠ | (ver nota) | 0.092327 |
| **4** hemisferio 16×16 | (converge) | 0.094 | 0.090072 | — | — |

El test 1 es un **patch test de orden superior**: con malla regular la respuesta
es exacta, no aproximada. Es el que separa una formulación buena de una
aproximada — antes del ITW, Hekatan daba −1.70 % en la flecha y **−6.34 % en el
giro**, y no convergía al exacto por mucho que se refinara.

⚠ El hemisferio **bloquea en malla gruesa** y converge al refinar (4×4 −89.8 %,
8×8 −37.4 %, 12×12 −11.1 %, 16×16 −4.2 %). Es el *membrane locking* del que
avisa el propio paper. **No es la placa**: con la DKQ del paper sale igual que
con MITC4. Para una cúpula en malla gruesa, hoy conviene `drillingTypes = 2`.

Nota ETABS: el hemisferio montado por OAPI sale rígido y no se ha aclarado por
qué; con el mismo modelo SAP da 0.092327, así que el árbitro del test 4 es SAP.

### Los mismos números en tres motores

| | C++/WASM | TypeScript | Python | Hekatan Lab |
|---|---|---|---|---|
| test 1 flecha / giro | 1.500000 / 0.600000 | 1.500000 / 0.600000 | 1.500000 / 0.600000 | 1.500000 / 0.600000 |
| test 2 | 0.354853 | 0.354853 | 0.354853 | 0.354853 |
| test 3 | 23.6800 | 23.6800 | 23.6800 | 23.6800 |
| modos de energía nula | 3 | 3 | 3 | 3 |

## Los exportadores: e2k · s2k · f2k

Lo que se le pide a un exportador es que **el modelo exportado dé lo mismo en el
otro programa** que montado a mano. Medido:

| caso | ETABS OAPI | ETABS ← `.e2k` | SAP OAPI | SAP ← `.s2k` |
|---|---|---|---|---|
| patch test | 1.500000 | **1.500000** | 1.500000 | **1.500000** |
| cantilever | 0.354201 | **0.354201** | 0.354201 | **0.354201** |
| Cook | 24.38235 | **24.38235** | 24.38235 | **24.38235** |
| hemisferio | (rígido) | ✗ 200 nudos | 0.092327 | **0.092327** |

Tres bugs silenciosos que lo impedían, todos encontrados **preguntándole a ETABS
y a SAP cómo escriben ellos** (`06-etabs-api/`), no adivinando:

1. El `.s2k` salía **sin ninguna carga nodal** — leía `nodeInputs.forces`, campo
   que no existe (es `loads`). SAP abría el modelo, resolvía y daba todo cero.
2. **Poisson fijo** (0.2 / 0.3) en los dos, ignorando el del modelo.
3. **Tipo de cáscara fijo**, y en el `.s2k` sin el guion que usa SAP
   (`Shell-Thin`, no `ShellThin`).

Y los **niveles**: el `.e2k` va por *stories*. Para una malla que no es un
edificio, ETABS escribe un `POINT` por nudo con su **descenso** y todo colgando
de una planta, y el `AREA PANEL` con los **cuatro puntos distintos**. Hekatan
hacía una planta por cota y paneles de dos puntos: Cook entraba con 168 nudos y
36 áreas en vez de 81 y 64. Corregido.

**Abierto:** el hemisferio por `.e2k` (cáscara 3D, 200 nudos en vez de 81). Por
`.s2k` entra perfecto.

## Regresión automática

Lo de aquí es la validación *documental*, con su fuente y su fecha. La que corre
en cada cambio está en `tests/casos/` y se lanza con `npm test`:

```bash
npm test                       # todos
node tests/run.mjs itw         # los 4 del drilling
node tests/run.mjs export      # la fidelidad de los exportadores
```
