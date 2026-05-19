# Viga de Cimentación 8×1×0.50m, 4 columnas alineadas — Hekatan vs SAFE

Validación cruzada `plateQ4Solve` (Hekatan) vs **SAFE 20** via API .NET.
Ver [`../README.md`](../README.md) para setup general.

## Caso de prueba

Viga corrida longitudinal que soporta 4 columnas alineadas en eje x:

```
        col_1   col_2   col_3   col_4
          ↓       ↓       ↓       ↓
  ┌───────●───────●───────●───────●───────┐  Bz=1m
  │                                       │
  └───────────────────────────────────────┘
  0      1       3       5       7      8 [m]
  ←──────────── Lz = 8 m ────────────────→
```

- **Lz × Bz = 8.0 × 1.0 m, t = 0.50 m**
- Concreto E = 24 855 MPa, ν = 0.20, γ = 24 kN/m³
- Suelo arena media: ks = 19 613 kN/m³
- **4 columnas alineadas** en y = 0.5 m (línea media), x = 1.0, 3.0, 5.0, 7.0 m
  (separación uniforme 2 m, retiro 1 m de extremos)
- P = **20 tonf** = 196.13 kN por columna (total 784.5 kN)
- Malla 32 × 4 = **128 Q4** (dx = dy = 0.25 m, 165 nodos)

**Aplicación típica**: línea de columnas de un edificio (e.g., medianera o
muro perimetral), soportada por una zapata corrida en lugar de zapatas
aisladas independientes. Reduce excentricidades y permite redistribución
longitudinal de cargas.

## Reproducir

```bash
cd hekatan-struct/benchmarks/safe/viga-cimentacion
npx tsx ./cli_viga.mjs --json=hekatan_viga_result.json
PYTHONIOENCODING=utf-8 python -X utf8 safe_api_viga.py --json=safe_viga_result.json
```

## Resultados (corrida 2026-05-18) — paridad <0.01%

| Posición                          | Hekatan w [mm] | SAFE w [mm] | Δ        |
|-----------------------------------|----------------|-------------|----------|
| esquina (0,0)                     | −4.7754        | −4.7750     | −0.01%   |
| esquina (Lz,0)                    | −4.7754        | −4.7750     | −0.01%   |
| esquina (0,Bz)                    | −4.7754        | −4.7750     | −0.01%   |
| esquina (Lz,Bz)                   | −4.7754        | −4.7750     | −0.01%   |
| col_1 (1, Bz/2) [extremo]         | −4.9644        | −4.9650     | +0.01%   |
| **col_2 (3, Bz/2) [interior]**    | **−5.1093**    | **−5.1100** | **+0.01%** |
| **col_3 (5, Bz/2) [interior]**    | **−5.1093**    | **−5.1100** | **+0.01%** |
| col_4 (7, Bz/2) [extremo]         | −4.9644        | −4.9650     | +0.01%   |
| entre col 1-2 (2, Bz/2)           | −5.0195        | −5.0190     | −0.01%   |
| entre col 2-3 (4, Bz/2) [centro]  | −5.0856        | −5.0850     | −0.01%   |
| entre col 3-4 (6, Bz/2)           | −5.0195        | −5.0190     | −0.01%   |
| voladizo izq (0, Bz/2)            | −4.7755        | −4.7750     | −0.01%   |
| voladizo der (Lz, Bz/2)           | −4.7755        | −4.7750     | −0.01%   |

**Δ máxima: ±0.01% en TODOS los 13 puntos.** Paridad casi-perfecta.

### Sanity check teórico

- P_total = 4 × 196.13 = **784.53 kN**
- A_total = 8 × 1 = 8 m²
- w_avg Winkler = P_tot / (A·ks) = 784.53 / (8 × 19613) = **5.000 mm**
- Hekatan w_avg (13 puntos) ≈ 4.96 mm (−0.8% del teórico) ✓
- SAFE w_avg (13 puntos) ≈ 4.96 mm (−0.8% del teórico) ✓

El −0.8% sobre el teórico uniforme es por el "bowl shape" del perfil
(columnas centrales hunden más que extremos), pero la conservación de
carga global se mantiene.

## Análisis físico

### Distribución de asentamientos

| Posición longitudinal | w [mm] | Comportamiento |
|---|---|---|
| Esquinas/voladizos | −4.78 | menos asentamiento (sin carga directa cercana) |
| Bajo col extremas (1, 4) | −4.96 | intermedio (solo recibe contribución de 1 vecina) |
| Bajo col interior (2, 3) | −5.11 | máximo (recibe contribución de 2 vecinas) |
| Entre cols (2-3, centro) | −5.09 | casi igual a las interiores (perfil aplanado) |

### Mxx_max = 41.1 kN·m/m (en dirección longitudinal)

El momento flector máximo se desarrolla bajo las columnas interiores
donde la concentración de carga es mayor. La viga corrida trabaja como
una viga continua sobre apoyos elásticos (springs Winkler) con cargas
puntuales equiespaciadas.

### Perfil de presión sobre suelo

`q = ks·|w|` da la presión que la zapata transmite al suelo:
- En esquinas: 93.7 kN/m²
- Bajo col interiores: 100.2 kN/m² (pico)
- Centro entre cols: 99.7 kN/m²

Ratio q_max/q_min = 100.2/93.7 = 1.07 → distribución casi uniforme.
La viga corrida está actuando casi-rígidamente respecto a la columna de
suelo de abajo (λ Boussinesq pequeño).

## Comparación con casos previos

| Caso | Lz × Bz × t | Ncols | w_max/w_teo | Rigidez relativa |
|------|---|---|---|---|
| zapata aislada (caso 1) | 1.5 × 1.5 × 0.30 | 1 | 4.54/4.44 = 1.02 | media |
| zapata combinada (caso 3) | 4 × 2 × 0.40 | 2 | 3.85/3.75 = 1.03 | media-alta |
| **viga cimentación (este)** | **8 × 1 × 0.50** | **4** | **5.11/5.00 = 1.02** | **alta (cuasi-rígida)** |
| zapata conectada (caso 4) | 5 × 1 × 0.40/0.20 | 2 | 8.90/4.00 = 2.23 | **BAJA (rotación)** |

La viga corrida con t=0.50m sobre 8m largo se comporta como cuasi-rígida
(ratio w/w_teo ≈ 1.02), lo cual es el comportamiento deseado: distribución
casi uniforme de presiones, sin levantamientos ni concentraciones
peligrosas.

## Archivos

```
benchmarks/safe/viga-cimentacion/
├── README.md
├── cli_viga.mjs                    # Hekatan WASM CLI (7 ms)
├── safe_api_viga.py                # SAFE API (~22 s solver)
├── hekatan_viga_result.json
├── safe_viga_result.json
├── safe_viga_run.log
└── Viga_Cimentacion_via_API.fdb
```
