# Awatif Clone — Modal Analysis

## Qué es esto
Clon de [awatif v2.0.0](https://github.com/madil4/awatif) con **análisis modal** agregado por el usuario.
El awatif original solo tenía análisis estático (deform + analyze). El usuario implementó eigenvalue analysis completo usando Eigen C++/WASM.

## Arquitectura del solver modal

### Código C++ (Eigen)
- `awatif-fem/src/cpp/modal.cpp` — Entry point WASM: ensambla K, M, resuelve K*φ = ω²*M*φ
- `awatif-fem/src/cpp/utils/getLocalStiffnessMatrix.cpp` — K local 12x12 Euler-Bernoulli
- `awatif-fem/src/cpp/utils/getLocalMassMatrix.cpp` — M local consistente con Ip/A para torsión
- `awatif-fem/src/cpp/utils/getTransformationMatrix.cpp` — Matriz de transformación 3D
- `awatif-fem/src/cpp/utils/getGlobalStiffnessMatrix.cpp` — Ensamblaje global K (sparse)
- `awatif-fem/src/cpp/utils/getGlobalMassMatrix.cpp` — Ensamblaje global M (sparse)
- `awatif-fem/src/cpp/utils/feHelpers.cpp` — BCs, reducción, parsing
- `awatif-fem/src/cpp/data-model.h` — Tipos: Node, Element, ElementInputs, NodeInputs, ModalOutputs
- Eigen 3.4.0 headers en `awatif-fem/src/cpp/eigen/`
- WASM compilado: `awatif-fem/src/cpp/built/deform.wasm` + `deform.js`

### TypeScript wrapper
- `awatif-fem/src/modalCpp.ts` — Wrapper TS que llama al WASM modal()

### Ejemplo principal
- `examples/src/beams/main.ts` — Example 6.3 Space Frame (Paz & Leigh, Dynamics of Structures)
  - 8 nodos (4 base fijos + 4 top), 8 elementos (4 columnas + 4 vigas), SIN diagonales
  - Unidades: kip, in, sec
  - Columnas W24x146, Vigas W14x84

## Ejes locales (Three.js Y-up)

**CRÍTICO**: awatif usa convención Three.js (Y-up), no Z-up ingenieril.

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

La masa consistente usa `Ip = Iy + Iz` (momento polar de inercia) para DOFs torsionales, NO `J` (constante de Saint-Venant). Esto es cinéticamente correcto. OpenSees tiene un bug conocido donde usa J en vez de Ip — causa ~3% de error en modos torsionales.

## Validación (4 solvers, 0.00% de diferencia)

| Solver | Archivo | Descripción |
|--------|---------|-------------|
| WASM (browser) | `examples/src/beams/main.ts` | Eigen C++ → emscripten → browser |
| WASM (CLI) | `cli_modal.mjs` | Eigen C++ → emscripten → Node.js |
| C++ nativo | `cli_modal_native.cpp` | Eigen C++ → g++ → exe standalone |
| Python/SciPy | `test_modal_comparison.py` | Reimplementación + K de OpenSees |

Resultados Example 6.3 (6 modos):
```
Mode   Freq (Hz)   Dominant direction
  1     9.6780     Uy (99.8%)
  2    16.9874     Rz (torsional)
  3    26.6149     Ux (94.3%)
  4    29.9497     (antisimétrico)
  5    33.9929     Rz (14.2%)
  6    44.9332     Uz (26.9%)
```

## Compilar C++ nativo

```bash
g++ -O2 -std=c++17 -static-libgcc -static-libstdc++ \
  -I awatif-fem/src/cpp/eigen -I awatif-fem/src/cpp \
  cli_modal_native.cpp \
  awatif-fem/src/cpp/utils/feHelpers.cpp \
  awatif-fem/src/cpp/utils/getLocalStiffnessMatrix.cpp \
  awatif-fem/src/cpp/utils/getLocalMassMatrix.cpp \
  awatif-fem/src/cpp/utils/getTransformationMatrix.cpp \
  awatif-fem/src/cpp/utils/getGlobalStiffnessMatrix.cpp \
  awatif-fem/src/cpp/utils/getGlobalMassMatrix.cpp \
  -o cli_modal_native.exe
```

## Compilar WASM (requiere emsdk)

```bash
source ../emsdk/emsdk_env.sh
# Ver script de build existente en awatif-fem/
```

## Test de comparación

```bash
# Solo OpenSees + SciPy
python test_modal_comparison.py

# Comparar con valores de awatif
node cli_modal.mjs
# Copiar frecuencias de la salida y:
python test_modal_comparison.py --awatif 9.6780 16.9874 26.6149 29.9497 33.9929 44.9332
```

## Para OpenSees: mapping de ejes

Si usas OpenSees para validar, el vecxz debe coincidir con awatif:
```python
# Columnas verticales: vecxz=(-1,0,0) → local_y=Y, local_z=-X (match awatif)
ops.geomTransf('Linear', 1, -1.0, 0.0, 0.0)
# Vigas horizontales: vecxz=(0,0,1) → estándar
ops.geomTransf('Linear', 2, 0.0, 0.0, 1.0)
# Iy_os = COL_Iz (strong), Iz_os = COL_Iy (weak)
```

## Gotchas
- **NO usar `tasklist` sin `| head`** en Claude Code — output enorme, crashea
- Con 16 GB RAM, no abrir Edge+Chrome+VSCode+Node simultáneamente
- El servidor dev de awatif (vite) corre en `localhost:4640`
