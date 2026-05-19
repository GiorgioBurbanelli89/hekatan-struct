# Cimentación Edificio Real — Hekatan vs SAFE (en investigación)

Reconstrucción 100% desde cero via API del modelo extraído de
`examples/src/edificio-aporticado/sample_output/cimentacion_edificio_9zapatas_12vigas.f2k`
(generado por Hekatan workspace).

## Caso de prueba (modelo REAL del edificio del usuario)

- Grilla **3 × 3 columnas** en (X, Y) ∈ {0, 5, 10} m × {0, 5, 10} m (luz 5 m × 5 m)
- 9 zapatas con **3 dimensiones distintas**:
  - 4 esquinas: **1.3 × 1.3 m** (1.69 m²)
  - 4 medios-bordes: **2.2 × 2.2 m** (4.84 m²)
  - 1 centro: **1.6 × 1.6 m** (2.56 m²)
- Espesor uniforme **t = 0.30 m**, concreto 4000 psi (E = 24 855 MPa)
- **12 vigas amarre** `VAmarre_0.250 × 0.400 m` (frames concrete rectangular)
  - 6 horizontales (eje X) + 6 verticales (eje Y) en grilla 3×3
- **9 cargas reales** P + Mx + My en los centros de columnas (unidades tonf, m)
- **Suelo Winkler** ks = **105 tonf/m³ = 1030 kN/m³** (suelo blando)

## Reproducir

```bash
cd hekatan-struct/benchmarks/safe/edificio-cimentacion-real
npx tsx ./cli_edificio.mjs --json=hekatan_edificio_result.json
PYTHONIOENCODING=utf-8 python -X utf8 safe_api_edificio.py --json=safe_edificio_result.json
```

## Resultados (corrida 2026-05-18)

### ⚠️ Paridad NO alcanzada — gap 34-90%

| Col | Rol | Pos | FZ tonf | MY tonf·m | **Hekatan uz [mm]** | **SAFE uz [mm]** | **Δ** |
|---|---|---|---|---|---|---|---|
| 1 | esquina | (0, 0) | −0.67 | 2.29 | **−1.19** | −11.57 | **−89.7%** |
| 2 | medio-borde | (5, 0) | −2.12 | 2.58 | **−5.44** | −17.71 | **−69.3%** |
| 3 | esquina | (10, 0) | −3.63 | 2.29 | **−17.82** | −27.12 | **−34.3%** |
| 4 | medio-borde | (0, 5) | −1.12 | 1.30 | **−1.63** | −13.43 | **−87.9%** |
| 5 | centro | (5, 5) | −2.14 | 1.47 | **−5.56** | −19.58 | **−71.6%** |
| 6 | medio-borde | (10, 5) | −3.16 | 1.30 | **−9.29** | −22.02 | **−57.8%** |
| 7 | esquina | (0, 10) | −1.29 | 0.35 | **−3.91** | −14.55 | **−73.1%** |
| 8 | medio-borde | (5, 10) | −2.14 | 0.41 | **−5.45** | −17.72 | **−69.2%** |
| 9 | esquina | (10, 10) | −2.99 | 0.35 | **−15.05** | −24.12 | **−37.6%** |

**Hekatan sub-predice el asentamiento en TODAS las columnas.** El gap no es por
sesgo constante (varía 34-90%) ni por mesh refinement (un test con 8×8 daría
quizás 5% mejor, no cerrar 90%). Es un problema de **modelado estructural**.

## Análisis de la discrepancia

Los 5 casos previos del framework (zapata aislada, losa, combinada, conectada,
viga) tienen paridad **<0.33%** usando `plateQ4Solve`. Este caso 6 usa
`deform()` (general FEM con shells + frames mixtos) para poder conectar las 9
zapatas con las 12 vigas amarre. La hipótesis principal:

### Hipótesis 1: Formulación Q4 distinta entre `plateQ4Solve` y `deform()`

- `plateQ4Solve` implementa Mindlin/Reissner Q4 con integración selectiva
  (validado <0.33% vs SAFE Shell-Thick en casos 1-5).
- `deform()` puede usar Q4 con formulación más simple (Kirchhoff puro, sin
  shear deformation) o con DOFs distintos (6 DOFs/nodo en lugar de 3).
- El gap +37.8% del caso 1 con `eShellType.ShellThin` (Kirchhoff) vs corregido
  a `ShellThick` (Mindlin) sugiere que en `deform()` también puede estar
  usando Kirchhoff por default.

### Hipótesis 2: Conexión shell-frame mal acoplada

- Los nodos centrales de cada zapata son COMPARTIDOS entre Q4 shells (zapata)
  y frames (vigas amarre).
- Los shells tienen DOFs locales {w, βx, βy}; los frames {ux, uy, uz, rx, ry, rz}.
- Si `deform()` no acopla correctamente βx/βy del shell con ry/rx del frame,
  los momentos de las vigas no se transfieren a la zapata adecuadamente.

### Hipótesis 3: Springs Winkler aplicados a DOF distinto

- En `plateQ4Solve` springs son en dof=0 (w, primer DOF del shell).
- En `deform()` springs son en dof=2 (uz, tercer DOF del nodo 6-DOF).
- Si la enumeración cambia, las springs pueden estar en un DOF rígido en vez
  del flexible → comportamiento "más rígido" = menor asentamiento. **Esta
  hipótesis es la más probable dado el patrón observado.**

## Próximos pasos (investigación)

- [ ] Probar Hekatan SIN las 12 vigas amarre (solo 9 zapatas independientes).
      Si Hekatan vs SAFE matchea ahora → problema es el acoplamiento shell-frame.
- [ ] Probar Hekatan con mesh 12×12 por zapata (no 4×4) — descartar problema
      de resolución de mesh.
- [ ] Verificar la convención de DOF en `deform()` vs `plateQ4Solve` para
      springs (dof=0 vs dof=2).
- [ ] Comparar contra solución analítica simple: 1 zapata aislada con
      `deform()` debería matchear el caso 1 (`plateQ4Solve`) ± un epsilon.

## Estado actual

✅ Script SAFE (`safe_api_edificio.py`) funciona end-to-end, reconstruye
modelo desde cero, aplica SubModulus override, corre análisis en ~12s.
Resultados consistentes y físicamente razonables.

✅ Script Hekatan (`cli_edificio.mjs`) funciona end-to-end via `deform()`,
construye 144 Q4 + 12 frames + 225 springs en ~28 ms. Ejecuta sin errores.

⚠️ **Paridad solver pendiente de investigación**. Los números difieren
significativamente; la metodología del framework SÍ es válida (los 5 casos
anteriores prueban paridad <0.33%), pero este caso requiere debug del
solver `deform()` para shells + frames mixtos con springs Winkler.

## Archivos

```
benchmarks/safe/edificio-cimentacion-real/
├── README.md                        # este archivo (estado: investigación)
├── cli_edificio.mjs                 # Hekatan deform() (shells + frames)
├── safe_api_edificio.py             # SAFE API (9 zap + 12 vigas + cargas reales)
├── hekatan_edificio_result.json
├── safe_edificio_result.json
├── safe_edificio_run.log
└── Edificio_Cimentacion_via_API.fdb # modelo SAFE generado
```
