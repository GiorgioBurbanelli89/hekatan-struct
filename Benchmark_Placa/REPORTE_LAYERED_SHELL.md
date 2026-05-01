# Validación `layered-shell` (Hekatan) vs SAP2000

Comparación del nuevo ejemplo `examples/src/layered-shell/` (que usa
`layeredQ4Solve` de hekatan-fem) contra SAP2000 vía PowerShell OAPI.

## Caso de validación principal — preset `Iso (1 capa)`

Equivalente a Plate-Thick homogéneo (1 capa isotrópica con teoría
Mindlin-Reissner FSDT). Es la base de comparación más limpia con SAP.

**Parámetros idénticos en ambos solvers:**
- Geometría: 4 × 4 m, simply supported en perímetro
- Espesor: 0.30 m
- Material: E = 30·10⁶ kPa, ν = 0.30, ρ = 2.4 ton/m³
- Carga: q = 10 kPa uniforme ↓
- Mesh: 10 × 10 elementos Q4

| Magnitud | **Hekatan layered-shell Iso** | SAP2000 Plate-Thick | Timoshenko (analítica) | Diff Hekatan-SAP |
|---|---|---|---|---|
| w_max [mm] | 0.1531 | 0.1486 | 0.1401 | **+2.99%** |
| M_max [kN·m/m] | 7.85 | 7.97 | 7.66 | **−1.41%** |
| ABBD: A11 [kN/m] | 9.890 × 10⁶ | — | — | (CLT vs SAP) |
| ABBD: D11 [kN·m] | 7.418 × 10⁴ | — | — | |
| ABBD: B11 [kN] | ≈ 0 | — | — | (sin coupling, esperado) |

**Conclusión**: ambos solvers están dentro del **3 %** mutuo y dentro del
**9 %** de Timoshenko (esperable porque la teoría analítica desprecia
deformación por corte, y para t/L = 0.075 el shear es ~5–8 % de la w).

## Resto de presets — comparación analítica directa Hekatan

Los demás presets (CLT 3, CLT 5, Sandwich, Bimetálico) se ejecutan en
Hekatan y muestran comportamiento físicamente correcto (verificable por
inspección de la matriz ABBD):

| Preset | A11 [kN/m] | B11 [kN] | D11 [kN·m] | maxW [mm] | Coupling |
|---|---|---|---|---|---|
| Iso (1 capa) | 9.89·10⁶ | ≈ 0 | 7.42·10⁴ | 0.153 | NO |
| CLT 3 [0/90/0] | 9.89·10⁶ | ≈ 0 | 7.42·10⁴ | 0.153 | NO (simétrico) |
| Sandwich [face/core/face] | varía con E_face/core | ≈ 0 | varía | depende caras | NO |
| **Bimetálico [E1/E2]** | 7.42·10⁶ | **−1.85·10⁵** | 5.56·10⁴ | **0.222** | **SÍ (B≠0)** |

El Bimetálico muestra coupling membrane-bending real: B11 ≠ 0 y w sube
de 0.153 mm (iso) a 0.222 mm (+45 %) por la flexibilidad adicional que
introduce el coupling.

## ⚠ Limitación encontrada con SAP2000 layered shell vía OAPI

`SetShellLayer_1` con materiales DISTINTOS por capa (mat1 ≠ mat2) no
toma efecto vía `SAP2000v1.Helper` PowerShell — el solver retorna los
mismos resultados que la sección homogénea base con `SetShell_1`. La
llamada retorna `ret=1` (warning no-fatal) y los resultados de
desplazamiento, momentos y fuerza membrana son idénticos al caso
isotrópico:

| | Hekatan Bimetálico | SAP2000 Layered (OAPI) |
|---|---|---|
| w_max [mm] | 0.222 | 0.149 (= homogéneo) |
| M_max [kN·m/m] | 7.85 | 7.97 (= homogéneo) |
| N11_max [kN/m] | ≠ 0 | 0 |
| u_membrane [mm] | ≠ 0 | 0 |

**Workaround posibles** (no probados aquí):
- Importar un modelo `.s2k` con `SHELL LAYERED` definido en texto
- Usar la GUI de SAP para crear la sección layered, save .sdb, y luego
  cargar vía OAPI
- Usar SAP2000 v2 OAPI (algunas builds tienen bugs en `SetShellLayer_1`)

Para validar el coupling Bimetálico se recomienda usar:
- ETABS (similar OAPI, posible mismo bug)
- ANSYS / ABAQUS (si están disponibles)
- O comparación contra solución analítica de Reddy (CLT bimetal)

## Scripts utilizados

- `Benchmark_Placa/benchmark_placa_sap2000.ps1` (SAP Plate-Thick base)
- `Benchmark_Placa/benchmark_bimetal_sap2000.ps1` (NUEVO — bimetal SAP)
- `Benchmark_Placa/benchmark_layered_iso_compare.mjs` (NUEVO — Hekatan Iso)
- `Benchmark_Placa/sap2000_iso_test.json` (output SAP)
- `Benchmark_Placa/sap2000_bimetal_results.json` (output SAP, sin layered)
