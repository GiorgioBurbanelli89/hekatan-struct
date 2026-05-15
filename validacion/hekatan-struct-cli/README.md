# validacion/hekatan-struct-cli/ — Hekatan Struct nativo (CLI benchmark)

Esta es la entrada de **Hekatan Struct** en la matriz de validación.
A diferencia de las otras entradas que invocan software externo
(MATLAB, SAP2000, ETABS, Calcpad), Hekatan Struct se invoca a través
de su CLI nativo que llama directamente a los solvers FEM C++/WASM
(plateQ4Solve / planeQ4Solve / layeredQ4Solve).

## Ubicación del CLI

El CLI vive en la raíz del repo de Hekatan Struct:
```
hekatan-struct/
  cli_fem_benchmark.mjs        ← script principal
```

## Cómo correr

### Todos los 6 casos
```bash
cd hekatan-struct/
node cli_fem_benchmark.mjs
```

### Un caso específico
```bash
node cli_fem_benchmark.mjs plate_thin
node cli_fem_benchmark.mjs membrane
```

### Salida JSON (machine-readable)
```bash
node cli_fem_benchmark.mjs --json > results.json
```

## Casos cubiertos

| Caso          | Solver hekatan-fem          | Equivalente HekatanLab Web |
|---------------|-----------------------------|----------------------------|
| `plate_thin`  | `plateQ4Solve(theoryType=0)` Mindlin t=0.05 | FE02 |
| `plate_thick` | `plateQ4Solve(theoryType=0)` Mindlin t=0.25 | FE03 |
| `membrane`    | `planeQ4Solve` cantilever wall 5×3          | FE01b |
| `layered`     | `layeredQ4Solve` ABBD [0/90/90/0]           | FE04 |
| `shell_thin`  | `planeQ4Solve` cantilever 1×1×0.005         | FE05 (DOF in-plane) |
| `shell_thick` | `planeQ4Solve` cantilever 0.5×0.5×0.05      | FE06 (DOF in-plane) |

## Diferencias formulación esperadas vs HekatanLab Web

`plateQ4Solve` C++ usa una formulación **DKMQ/MITC4** del solver Eigen,
mientras que HekatanLab Web (FE02/FE03) usa **Mindlin selectivo simple**
(2×2 bending + 1×1 shear) hand-coded. Por eso los números pueden
**diferir ~10-20%** vs HekatanLab Web — no es bug, son elementos distintos:

- HekatanLab Web ↔ MATLAB R2017a: **paridad exacta** (mismo algoritmo)
- HekatanLab Web vs hekatan-fem C++: diferencias del elemento (esperado)
- hekatan-fem C++ ↔ SAP2000/ETABS: deberían estar muy cerca (formulaciones similares)

## Patrón de output

```
═══════════════════════════════════════════════════════════════════════════
  Hekatan Struct CLI — FEM Benchmark
═══════════════════════════════════════════════════════════════════════════
  Caso          metric    Hekatan-Struct    HekatanLab Web    Ref. Teorica       Δ_lab
  ──────────────────────────────────────────────────────────────────────────
  plate_thin    w_max     1.247e-2          1.371e-2          1.247e-2          -9.05%
  plate_thick   w_max     1.281e-4          1.543e-4          1.281e-4         -17.0%
  membrane      u_max     5.74e-2           5.74e-2           1.728e-2          0.00%
  layered       w_max     ...               n/a               ...               ...
  shell_thin    u_max     1.0e-3            1.261e-3          1.0e-3          -20.7%
  shell_thick   u_max     1.0e-2            1.252e-2          1.0e-2          -20.1%
  ──────────────────────────────────────────────────────────────────────────
```

## Integración con el resto de `validacion/`

| Carpeta                  | Cómo se invoca                            |
|--------------------------|-------------------------------------------|
| `matlab/`                | `matlab -batch "<script>"`                |
| `hekatan-lab/`           | Browser UI (`localhost:4700`)             |
| `sap2000-api/<lang>/`    | matlab/python/powershell + API CSi        |
| `etabs-api/<lang>/`      | matlab/python/powershell + API CSi        |
| `safe/`                  | Procedimiento manual GUI                  |
| `calcpad-symbolic/`      | Apertura `.cpd` en Calcpad                |
| **`hekatan-struct-cli/`**| **`node ../../cli_fem_benchmark.mjs`**    |

## Requisitos

- Node.js 18+ con soporte ES modules
- `hekatan-fem/dist/` compilado (build vía `npm run build -w hekatan-fem` en el repo)
- WASM `hekatan-fem/src/cpp/built/deform.{wasm,js}` ya versionado en git

## Workflow recomendado para validación cruzada

```bash
# 1. Hekatan Struct (CLI nativo C++/WASM)
cd hekatan-struct/
node cli_fem_benchmark.mjs --json > validacion/hekatan-struct-cli/results.json

# 2. MATLAB R2017a (self-contained)
cd validacion/matlab/
for case in plate_thin plate_thick membrane_q4 shell_thin shell_thick; do
  matlab -batch "${case}_verify" > "${case}_matlab.log" 2>&1
done

# 3. SAP2000 / ETABS API (3 lenguajes cada uno)
cd validacion/sap2000-api/python/
for case in plate_thin plate_thick membrane layered shell_thin shell_thick; do
  python "${case}_sap2000.py" > "${case}_sap.log" 2>&1
done

# 4. Consolidar tabla maestra en validacion/README.md
```

## Próximos pasos

- [ ] Compilar `hekatan-fem` y correr el CLI para capturar los números reales
- [ ] Agregar más casos (FE07 Shell+Frame, casos modales, dynamic)
- [ ] Soporte de flag `--mesh-refine N` para análisis de convergencia
- [ ] Output `--csv` para importar a Excel/Calcpad
