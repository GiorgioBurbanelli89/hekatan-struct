# Validacion Julia (Ferrite.jl) — Hekatan Struct

Track de validación cruzada de los **6 benchmarks shell** de Hekatan Struct contra **Ferrite.jl** (FEM en Julia).

## Por qué Julia + Ferrite.jl

- **Sintaxis** casi idéntica a MATLAB → portar formulaciones es directo.
- **Performance** competitiva con C++ vía JIT (LLVM).
- **Ferrite.jl** es el ecosistema FEM Julia más maduro (Q4, Q8, Tri, Tet, Hex, MITC).
- Permite **benchmark honesto** contra Hekatan WASM, OpenSees y SAP2000/ETABS sin pelearle a la cadena de C++.

## Patrón render-and-read

Cada script:
1. Corre el FEM
2. Guarda PNG en `figs/<benchmark>_<solver>.png` con Plots.jl
3. Imprime metricas (w_center, |Mxx|_max, error vs Navier)
4. Claude lee el PNG con la tool Read para verificar visualmente

Misma técnica que el CLI MATLAB headless. No requiere navegador ni viewer interactivo.

## Estructura

```
julia/
├── README.md              ← este archivo
├── Project.toml           ← Ferrite + Plots + LinearAlgebra
├── run_all.jl             ← runner común para los 6 benchmarks
├── plate_thin_ferrite.jl  ← 1) Plate Thin (Kirchhoff)
├── plate_thick_ferrite.jl ← 2) Plate Thick (Mindlin-Reissner)
├── membrane_ferrite.jl    ← 3) Membrana (Plane Stress)
├── shell_thin_ferrite.jl  ← 4) Shell Thin (Kirchhoff-Love)
├── shell_thick_ferrite.jl ← 5) Shell Thick (MITC4)
├── layered_ferrite.jl     ← 6) Layered (ABBD multi-capa)
└── figs/                  ← PNGs generados (versionados)
```

## Setup

```bash
# Primera vez
julia --project=. -e 'using Pkg; Pkg.instantiate()'

# Correr todos los benchmarks
julia --project=. run_all.jl

# Correr uno
julia --project=. plate_thin_ferrite.jl
```

La primera ejecución toma ~2 min (precompilación JIT). Después corre en segundos.

## Caso canónico (mismo que test_plate_q4_validation.py)

| Parámetro | Valor |
|---|---|
| Placa | 10×10 m |
| Espesor t | 0.20 m (Lx/t = 50, "thin") |
| E | 30 GPa |
| ν | 0.3 |
| q | 10 kN/m² ↓ |
| Mesh | 16×16 Q4 |
| BC | Simply supported (w=0 en bordes) |

Para `plate_thick` se cambia t → 1.0 m (Lx/t = 10). El resto se mantiene.

## Referencias

- **Bathe** — *Finite Element Procedures* (1996), Cap. 5.4 (MITC4)
- **Timoshenko & Woinowsky-Krieger** — *Theory of Plates and Shells* (1959), Cap. 5 (solución Navier)
- **Reddy** — *Theory and Analysis of Elastic Plates and Shells* (2007) [PDF en `../../Pdf/`]
- **MacNeal & Harder** — *A proposed standard set of problems to test finite element accuracy* (1985) — pinched cylinder, hemispherical shell
- **Ferrite.jl docs** — https://ferrite-fem.github.io/Ferrite.jl/stable/
