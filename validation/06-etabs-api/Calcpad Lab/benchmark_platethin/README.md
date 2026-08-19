# Benchmark Plate-Thin — Calcpad-Lab

Validación cruzada del ejemplo oficial **Rectangular Slab FEA** de Calcpad
contra SAP 2000 v24 (via API real), MATLAB R2017a, y solución analítica Navier.

## Caso de estudio

| Parámetro | Valor |
|---|---|
| Geometría | 6 × 4 × 0.1 m |
| Material | E = 35 GPa, ν = 0.15 |
| Carga | q = 10 kN/m² uniforme |
| BC | Simply-supported 4 bordes (hard SS) |
| Malla | 6 × 4 Q4 (35 nodos, 24 elementos) |

## Tres formulaciones implementadas en Calcpad-Lab

| Script | Elemento | GDLs/nodo | Continuidad | Referencia |
|---|---|---|---|---|
| `benchmark_platethin_BFS.m` | **Bogner-Fox-Schmit Q4** | 4 (w, βx, βy, ψ) | C¹ conforming | Bogner, Fox, Schmit 1965 |
| `benchmark_platethin_DKQ.m` | **Batoz-Tahar DKQ** = **SAP 2000 Plate-Thin** | 3 (w, βx, βy) | C⁰ + discrete Kirchhoff | Batoz & Tahar IJNME 1982 |
| `benchmark_platethin_Melosh.m` | **Melosh ACM** | 3 (w, ∂w/∂x, ∂w/∂y) | C⁰ non-conforming | Melosh 1963 |

## Resultados — match Calcpad-Lab DKQ ≡ SAP 2000 a 4 decimales

| Variable | Analítico Navier | BFS Q4 | **DKQ (Calcpad-Lab)** | **SAP 2000 v24 (API)** | Δ DKQ vs SAP |
|---|---|---|---|---|---|
| w_centro [mm] | 6.623 | 6.629 | **6.5286** | **6.5286** | **0.00%** |
| Mx centro [kNm/m] | 6.231 | 6.275 | **6.2249** | **6.2249** | **0.00%** |
| My centro [kNm/m] | 12.315 | 12.744 | **12.7592** | **12.7592** | **0.00%** |
| Mxy esquina [kNm/m] | 8.329 | 8.378 | **-7.2541** | **-7.2541** | **0.00%** |
| Tiempo solve | — | 0.05 s | 0.05 s | **5.63 s** | — |

**Calcpad-Lab DKQ reproduce SAP 2000 v24 exactamente, y es 112× más rápido.**

## Diferencia entre formulaciones — análisis para tu TFM

- **BFS Q4 (Calcpad-Lab default):** ψ=∂²w/∂x∂y como 4ª DOF/nodo → captura Mxy
  en esquinas casi exacto (+0.6% vs analítico). Recomendado para diseño de
  **armadura de torsión en esquinas SS**.

- **Batoz DKQ (= SAP 2000):** 3 DOFs/nodo (sin twist explícito). Mxy esquina
  subestimado **-12.9%** vs analítico. Es la formulación más usada en software
  comercial pero **subestima la reacción de Kirchhoff en esquinas** (F = 2·Mxy).

- **Melosh ACM:** 3 DOFs/nodo, non-conforming. Mxy esquina +2.4%. Útil como
  referencia histórica (1963), pero menos preciso que BFS y menos robusto que
  DKQ para mallas distorsionadas.

## Cómo correr

### Calcpad-Lab (las 3 formulaciones)
```bash
"Calcpad-Lab/Symbolic.Cli/bin/Debug/net10.0/CalcpadLabCli.exe" \
   "validacion/Calcpad Lab/benchmark_platethin/benchmark_platethin_DKQ.m" html -s --pure
```

### Calcpad oficial (referencia)
```bash
"/c/Program Files/Calcpad/Cli.exe" \
   "validacion/Calcpad/benchmark_platethin/benchmark_platethin.cpd" html -s
```

### SAP 2000 v24 (vía API, headless)
```bash
python "validacion/Api CSI Computers/sap2000-api/python/benchmark_platethin/sap2000_platethin_direct_M.py"
```

### MATLAB R2017a (mismo .m)
```bash
"/c/Program Files/MATLAB/R2017a/bin/matlab.exe" -nodesktop -nosplash -wait \
   -r "run('validacion/Calcpad Lab/benchmark_platethin/benchmark_platethin_DKQ.m')"
```

## Ficheros

```
validacion/
├── Calcpad/benchmark_platethin/
│   ├── benchmark_platethin.cpd          ← Calcpad original (Rectangular Slab FEA.cpd)
│   ├── benchmark_platethin.html         ← Output Calcpad oficial (referencia visual)
│   ├── benchmark_platethin_reference.pdf
│   └── calcpad_ref/                     ← PNGs extraídos (w, Mx, My, Mxy)
│
├── Calcpad Lab/benchmark_platethin/
│   ├── benchmark_platethin_BFS.m        ← BFS Q4 (16 DOF/elem)
│   ├── benchmark_platethin_DKQ.m        ← Batoz DKQ = SAP 2000 (12 DOF/elem)
│   ├── benchmark_platethin_Melosh.m     ← Melosh ACM non-conforming
│   ├── benchmark_platethin_*.html       ← Outputs Calcpad-Lab (3 versiones)
│   └── README.md                        ← este archivo
│
└── Api CSI Computers/sap2000-api/python/benchmark_platethin/
    ├── sap2000_platethin_calcpad_case.py  ← reconstruye M desde rotaciones
    └── sap2000_platethin_direct_M.py      ← extrae M directo (AreaForceShell) — usar este
```
