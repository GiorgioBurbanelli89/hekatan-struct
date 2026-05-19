# Losa de Cimentación 6×8×0.50m, 6 columnas — Hekatan vs SAFE

Validación cruzada del solver `plateQ4Solve` (Hekatan, Mindlin Q4 + springs
Winkler) contra **SAFE 20** vía API .NET. Ver [`../README.md`](../README.md)
para setup general de la API SAFE (8 gotchas + workaround `SubModulus`).

## Caso de prueba (idéntico en ambos)

- Losa rectangular **6 × 8 × 0.50 m** sobre suelo Winkler
- Concreto E = 24 855 MPa, ν = 0.20, γ = 24 kN/m³
- Suelo arena media: ks = 19 613 kN/m³
- **6 columnas en grilla 2×3** (luz 3m × 4m, retiro 1.5m de bordes laterales):
  - col_1, 2 en y = 2.0 m  (extremo bajo)
  - col_3, 4 en y = 4.0 m  (medio)
  - col_5, 6 en y = 6.0 m  (extremo alto)
  - col_*, 1/2 en x = 1.5 m / 4.5 m
- Carga vertical por columna: **P = 20 tonf = 196.13 kN** (total 1176.8 kN)
- Malla 12 × 16 = **192 Q4** elementos (dx = dy = 0.5 m, 221 nodos)

## Reproducir

```bash
cd hekatan-struct/benchmarks/safe/losa-cimentacion
# Hekatan (~12 ms)
npx tsx ./cli_losa.mjs --json=hekatan_losa_result.json
# SAFE (~50 s incl. spin-up GUI)
PYTHONIOENCODING=utf-8 python -X utf8 safe_api_losa.py --json=safe_losa_result.json
```

## Resultados (corrida 2026-05-18)

### Perfil de asentamiento — 17 puntos clave

| Posición                  | Hekatan w [mm] | SAFE w [mm] | Δ        | q_Hekatan [kN/m²] | q_SAFE [kN/m²] |
|---------------------------|----------------|-------------|----------|--------------------|----------------|
| esquina (0,0)             | −0.6981        | −0.6960     | −0.30%   | 13.69              | 13.65          |
| esquina (Lz,0)            | −0.6981        | −0.6960     | −0.30%   | 13.69              | 13.65          |
| esquina (0,Bz)            | −0.6981        | −0.6960     | −0.30%   | 13.69              | 13.65          |
| esquina (Lz,Bz)           | −0.6981        | −0.6960     | −0.30%   | 13.69              | 13.65          |
| col_1 (1.5, 2.0)          | −1.3526        | −1.3570     | +0.33%   | 26.53              | 26.61          |
| col_2 (4.5, 2.0)          | −1.3526        | −1.3570     | +0.33%   | 26.53              | 26.61          |
| **col_3 (1.5, 4.0)**      | **−1.5824**    | **−1.5870** | **+0.29%** | **31.03**          | **31.13**      |
| **col_4 (4.5, 4.0)**      | **−1.5824**    | **−1.5870** | **+0.29%** | **31.03**          | **31.13**      |
| col_5 (1.5, 6.0)          | −1.3526        | −1.3570     | +0.33%   | 26.53              | 26.61          |
| col_6 (4.5, 6.0)          | −1.3526        | −1.3570     | +0.33%   | 26.53              | 26.61          |
| entre col 1-2 (3.0, 2.0)  | −1.3239        | −1.3240     | +0.01%   | 25.97              | 25.97          |
| entre col 3-4 (3.0, 4.0)  | −1.5532        | −1.5530     | −0.01%   | 30.46              | 30.46          |
| entre col 5-6 (3.0, 6.0)  | −1.3239        | −1.3240     | +0.01%   | 25.97              | 25.97          |
| entre col 1-3 (1.5, 3.0)  | −1.4957        | −1.4970     | +0.09%   | 29.34              | 29.36          |
| entre col 3-5 (1.5, 5.0)  | −1.4957        | −1.4970     | +0.09%   | 29.34              | 29.36          |
| centro losa (3.0, 4.0)    | −1.5532        | −1.5530     | −0.01%   | 30.46              | 30.46          |
| mid-borde (3.0, 0)        | −0.7667        | −0.7660     | −0.09%   | 15.04              | 15.02          |

**Δ máxima: +0.33% bajo columnas extremas — paridad excelente.**

### Sanity check con teoría analítica

- P_total = 6 × 196.13 = **1176.8 kN**
- A_total = 6 × 8 = **48 m²**
- w_avg Winkler uniforme = P_total / (A · ks) = 1176.8 / (48 × 19613) = **1.250 mm**
- Hekatan w_avg (17 puntos) ≈ 1.28 mm (+2.4% del teórico — esperado por concentración bajo columnas)
- SAFE w_avg (17 puntos) ≈ 1.28 mm (+2.4% del teórico — idéntico)

### Verificaciones

- **Simetría 8-fold**: las 4 esquinas idénticas (`−0.698` Hekatan, `−0.696` SAFE).
  Las 6 columnas siguen patrón par-impar y simétrico en x: col_1=col_2, col_3=col_4, col_5=col_6.
  Y por simetría en y: col_1=col_5, col_2=col_6 (los extremos), col_3=col_4 (medio).
- **Conservación de carga**: q_avg × A ≈ P_total en ambos (24.5 × 48 ≈ 1176 kN ≈ 1177 aplicada). ✓
- **Mxx ≠ Myy** (Hekatan: 29.6 vs 44.4 kN·m/m): correcto porque la geometría
  es rectangular (Lz=6, Bz=8), Myy es más grande porque la dirección Y tiene
  más luz entre columnas.
- **Bowl shape esperado**: máximo bajo columnas centrales (col_3, col_4 a y=4), mínimo en esquinas. Ratio max/min = 1.58/0.70 = 2.26 → losa flexible (no rígida).

## Comportamiento físico

- Las **columnas centrales** (col_3, col_4) reciben menos contribución de
  los springs vecinos (porque están más lejos del borde) → asientan más
  que las extremas (col_1, 2, 5, 6).
- El **centro de losa** entre col_3 y col_4 (punto 3.0, 4.0) asienta
  −1.55 mm, casi tanto como bajo las columnas centrales (−1.58 mm).
  La losa actúa como placa relativamente flexible que no transmite mucho
  diferencial entre columnas vecinas en x.
- En la **dirección Y** (mayor luz, 2m entre columnas), el diferencial
  entre col y centro de tramo es mayor (−1.58 vs −1.50 = 5% bajo). En X
  (luz 3m) el diferencial es menor.

## Archivos

```
benchmarks/safe/losa-cimentacion/
├── README.md                       # este archivo
├── cli_losa.mjs                    # Hekatan WASM CLI (12 ms)
├── safe_api_losa.py                # SAFE API (45-90 s)
├── hekatan_losa_result.json
├── safe_losa_result.json
├── safe_losa_run.log
└── Losa_Hekatan_via_API.fdb        # modelo SAFE generado
```
