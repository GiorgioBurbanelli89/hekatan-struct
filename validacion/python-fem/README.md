# Validacion Python puro — Hekatan Struct

Track de validación cruzada de los **6 benchmarks shell** de Hekatan Struct usando **Python puro** (numpy/scipy + scikit-fem) sin solver externo.

## Por qué Python puro

- **Cero dependencias externas comerciales**. Reproducible en cualquier máquina.
- **Auditable**: cada paso del FEM está escrito en Python — vos podés ver Bb, Bs, Ke, K, F línea por línea.
- **Compara contra Hekatan-fem** que es C++/WASM, contra OpenSees que es C++ nativo, y contra Julia/Ferrite que es JIT. Si los 4 coinciden, el cálculo es robusto.
- **scikit-fem** ofrece mallas, ensamblado sparse, y un assembler genérico — más limpio que escribir el ensamblado a mano.

## Patrón render-and-read

Igual que MATLAB/Julia/OpenSees: matplotlib + savefig → PNG → Claude lo lee.

## Estructura

```
python-fem/
├── README.md             ← este archivo
├── requirements.txt      ← scikit-fem + numpy + scipy + matplotlib
├── run_all.py            ← runner común
├── plate_thin_skfem.py   ← 1) Plate Thin (Q4 Kirchhoff vía DKQ o BFS)
├── plate_thick_skfem.py  ← 2) Plate Thick (Q4 Mindlin con SRI, espejo de test_plate_q4_validation.py)
├── membrane_skfem.py     ← 3) Membrana (Q4 plane stress)
├── shell_thin_skfem.py   ← 4) Shell Thin (membrane + Kirchhoff plate, drilling DOF)
├── shell_thick_skfem.py  ← 5) Shell Thick (MITC4 a mano)
├── layered_skfem.py      ← 6) Layered (ABBD multi-capa)
└── figs/                 ← PNGs generados
```

## Filosofía: "Reimplementación clara para entender"

Como el `test_plate_q4_validation.py` que ya existe en el root, estos scripts están **escritos para enseñar**:

- Cada paso (B-matrix, Ke, ensamblaje, BC, solve, post-proceso) en un bloque separado con print explicativo.
- Comparación contra solución analítica de Navier en cada caso aplicable.
- Validación contra **valores hardcoded** de Hekatan WASM para detección de regresiones.

Esto es lo que vos podés mostrar en el TFM como "FEM construido desde cero, no caja negra".

## Setup

```bash
pip install -r requirements.txt
python run_all.py
```

scikit-fem es ~10 MB, sin dependencias pesadas. Numpy + scipy + matplotlib ya están en este sistema.

## Caso canónico

Mismo que `validacion/julia/`, `validacion/opensees-python/`, `test_plate_q4_validation.py`:

- Placa 10×10 m, t=0.20 m, E=30 GPa, ν=0.3, q=10 kN/m², 16×16 Q4, SS en 4 bordes.

## Referencias

- **scikit-fem docs** — https://scikit-fem.readthedocs.io/
- **Bathe** — *Finite Element Procedures* (1996), Cap. 5.4
- **Timoshenko & Woinowsky-Krieger** — *Theory of Plates and Shells* (1959)
- **Reddy** — *Theory and Analysis of Elastic Plates and Shells* (2007) [PDF en `../../Pdf/`]
- **Cook, Malkus, Plesha, Witt** — *Concepts and Applications of FEM* (2001) — referencia didáctica clásica
