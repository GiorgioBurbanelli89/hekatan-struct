# Batoz DKQ — Validación cruzada en 6 implementaciones

La formulación **Batoz-Tahar DKQ (Discrete Kirchhoff Quadrilateral, 1982)**
es la que usa **SAP 2000 Plate-Thin** internamente. Se implementó la
fórmula en 6 lenguajes/herramientas distintas para validar que produce
**exactamente** los mismos números que SAP 2000.

## Caso

| Parámetro | Valor |
|---|---|
| Placa | 6 × 4 × 0.10 m |
| Material | E = 35 GPa, ν = 0.15 |
| Carga | q = 10 kN/m² uniforme |
| BC | Simply-supported 4 bordes (hard SS) |
| Malla | 6 × 4 Q4 (35 nodos, 105 GDL) |

## Resultados — match perfecto en las 6 implementaciones

| Implementación | w_centro [mm] | Mx centro [kNm/m] | My centro [kNm/m] | Mxy esquina [kNm/m] |
|---|---|---|---|---|
| **SAP 2000 v24 (API real)** | 6.5286 | 6.2249 | 12.7592 | -7.2541 |
| **Calcpad oficial (.cpd)** | 6.529 | 6.224935 | 12.759163 | -7.254082 |
| **Calcpad-Lab (.m)** | 6.5286 | 6.2249 | 12.7592 | -7.2541 |
| **Python (numpy)** | 6.528572 | 6.224935 | 12.759163 | -7.254082 |
| **Julia (LinearAlgebra)** | 6.528572 | 6.224935 | 12.759163 | -7.254082 |
| **C++ nativo (g++)** | 6.5286 | 6.2249 | 12.7592 | -7.2541 |
| **C++ → WASM (browser)** | 6.5286 | 6.2249 | 12.7592 | -7.2541 |

Match a **4-6 decimales** en todas. La diferencia respecto a SAP 2000
(±0.0004%) es solamente por redondeo en el output de SAP API.

## Archivos del benchmark

```
hekatan-struct/validacion/
│
├── Calcpad/benchmark_platethin/
│   ├── benchmark_platethin.cpd          ← BFS original (Calcpad oficial)
│   ├── benchmark_platethin_DKQ.cpd      ← NUEVO: DKQ = SAP 2000
│   ├── benchmark_platethin_dkq.html     ← output DKQ
│   ├── calcpad_dkq_ref/                 ← 4 PNGs: w, Mx, My, Mxy (estilo SAP)
│   └── calcpad_ref/                     ← 4 PNGs del BFS clásico (referencia)
│
├── Calcpad Lab/benchmark_platethin/
│   ├── benchmark_platethin_DKQ.m        ← DKQ en Calcpad-Lab MATLAB-mode
│   └── (BFS + Melosh + reportes)
│
├── python-fem/benchmark_platethin/
│   └── batoz_dkq.py                     ← Python numpy
│
├── julia/benchmark_platethin/
│   └── batoz_dkq.jl                     ← Julia LinearAlgebra
│
├── Api CSI Computers/sap2000-api/python/benchmark_platethin/
│   └── sap2000_platethin_direct_M.py    ← SAP 2000 v24 vía COM API
│
└── wasm_plate_formulations/
    ├── src/plate_formulations.cpp       ← C++ con 4 formulaciones
    ├── built/plate_formulations.js      ← WASM 56 KB
    └── viewer.html                      ← navegador, 16 contornos
```

## Cómo correr (en orden de complejidad)

### 1. Python (más simple)
```bash
cd validacion/python-fem/benchmark_platethin
PYTHONIOENCODING=utf-8 python batoz_dkq.py
```

### 2. Julia
```bash
cd validacion/julia/benchmark_platethin
julia batoz_dkq.jl
```

### 3. Calcpad oficial (genera .html con contornos)
```bash
cd validacion/Calcpad/benchmark_platethin
"/c/Program Files/Calcpad/Cli.exe" benchmark_platethin_DKQ.cpd html -s
```

### 4. SAP 2000 v24 (requiere SAP instalado)
```bash
cd validacion/Api\ CSI\ Computers/sap2000-api/python/benchmark_platethin
python sap2000_platethin_direct_M.py
```

### 5. C++ → WASM en navegador
Abrir `wasm_plate_formulations/viewer.html` en cualquier browser.

## Por qué importa este match

El propósito del ejercicio fue demostrar que la **diferencia** entre
Calcpad-BFS (Mxy = -8.38) y SAP 2000 (Mxy = -7.25) **no es un bug** ni
malla insuficiente — es **diferencia de formulación del elemento**:

- **BFS Q4 (16 GDL):** incluye twist ψ = ∂²w/∂x∂y como DOF → captura
  correctamente el Mxy esquinero (+0.6% vs Navier analítico).

- **Batoz DKQ (12 GDL):** sin twist explícito, impone Kirchhoff en lados
  vía constraint → subestima Mxy esquinero en -13% vs analítico.

Ambos son válidos. SAP usa DKQ porque es más simple, soporta mallas
distorsionadas mejor, y se generaliza directo a Mindlin. Calcpad usa BFS
porque da máxima precisión en placas delgadas con mallas regulares.

## Comparación visual — Mxy en Calcpad oficial

Mismo software, misma malla, mismo colormap (rainbow estilo SAP):

| BFS (16 GDL) | **DKQ (12 GDL) = SAP 2000** |
|---|---|
| `calcpad_ref/calcpad_Mxy.png` | `calcpad_dkq_ref/calcpad_dkq_Mxy.png` |
| Rango ±8.38 kNm/m | Rango ±7.25 kNm/m |
| Patrón antisimétrico ±±∓∓ en esquinas | Idéntico patrón, magnitud menor |

**Conclusión:** la malla decide DÓNDE evaluamos.
El elemento decide CON QUÉ FÓRMULA. Cambiar el elemento sin tocar la
malla cambia los números. Esto es esperado, no es bug.
