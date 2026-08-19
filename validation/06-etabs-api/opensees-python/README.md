# Validacion OpenSees Python — Hekatan Struct

Track de validación cruzada de los **6 benchmarks shell** de Hekatan Struct contra **OpenSeesPy**.

## Por qué OpenSees

- **Estándar académico** abierto (UC Berkeley). Resultados aceptados en literatura.
- **Validado** contra códigos comerciales en cientos de papers.
- Elementos shell: `ShellMITC4` (Mindlin-Reissner, 4 nodos), `ShellNLDKGQ` (Kirchhoff con large displ), `ShellDKGT` (Triangle DKT).
- Sin licencia, sin dongle, corre en cualquier máquina con Python.

## Patrón render-and-read

Igual que en MATLAB/Julia: cada script corre el FEM en OpenSees, extrae resultados, plotea con matplotlib y guarda PNG. Claude lee el PNG.

## Estructura

```
opensees-python/
├── README.md               ← este archivo
├── requirements.txt        ← openseespy + numpy + matplotlib
├── run_all.py              ← runner común
├── plate_thin_ops.py       ← 1) Plate Thin → ShellMITC4 (t/L→0)
├── plate_thick_ops.py      ← 2) Plate Thick → ShellMITC4 (t/L→1/5)
├── membrane_ops.py         ← 3) Membrana → quad PlaneStress
├── shell_thin_ops.py       ← 4) Shell Thin → ShellNLDKGQ
├── shell_thick_ops.py      ← 5) Shell Thick → ShellMITC4
├── layered_ops.py          ← 6) Layered → LayeredShell
└── figs/                   ← PNGs generados
```

## Setup

```bash
pip install -r requirements.txt
python run_all.py
```

OpenSeesPy ya está instalado en este sistema. Solo `pip install matplotlib numpy` si no están.

## Mapeo Hekatan → OpenSees

| Hekatan Struct | OpenSees element | Notas |
|---|---|---|
| `plateQ4Solve(theoryType=1)` (Kirchhoff) | `ShellMITC4` con t pequeño | OpenSees no tiene Kirchhoff puro — MITC4 converge a Kirchhoff cuando t/L→0 |
| `plateQ4Solve(theoryType=0)` (Mindlin) | `ShellMITC4` | Mapeo directo |
| `plateQ4Solve(theoryType=2)` (Plane Stress) | `quad` con `PlaneStress` material | Membrana pura |
| `ShellNLDKGQ` (Kirchhoff-Love) | `ShellNLDKGQ` | Soporta large displacement (no usamos aquí) |
| `LayeredShell` | `ShellMITC4` + `LayeredShellSection` | Sección multi-capa con ABBD |

## Caso canónico

Mismo que en `validacion/julia/` y en `test_plate_q4_validation.py`:

- Placa 10×10 m, t=0.20 m, E=30 GPa, ν=0.3, q=10 kN/m², 16×16 Q4, SS en 4 bordes.

## Referencias

- **OpenSees docs** — https://opensees.berkeley.edu/wiki/index.php/Main_Page
- **OpenSeesPy** — https://openseespydoc.readthedocs.io/
- **Bathe** — *Finite Element Procedures* (1996), Cap. 5.4 (MITC4)
- **Hughes, T.J.R.** — *The Finite Element Method* (1987), Cap. 5
