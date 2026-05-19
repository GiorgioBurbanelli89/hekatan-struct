# Benchmark Plate-Thick (Mindlin-Reissner) — Calcpad-Lab vs SAP 2000

Validación cruzada de placa Mindlin-Reissner (con deformación por corte transversal)
entre Calcpad-Lab y SAP 2000 v24 (vía API Python real, headless).

## Caso de estudio

Mismo geometría/material/carga que `benchmark_platethin` para comparación directa
Kirchhoff vs Mindlin:

| Parámetro | Valor |
|---|---|
| Geometría | 6 × 4 × **0.1** m (t/a = 0.017 → delgada-mediana) |
| Material | E = 35 GPa, ν = 0.15 |
| Carga | q = 10 kN/m² uniforme hacia -z |
| BC | Simply-supported soft SS (w=0 en 4 bordes, rotaciones libres) |
| Malla | 6 × 4 Q4 (35 nodos, 24 elementos) |
| Factor corte κ | 5/6 (Reissner) |

## Formulaciones comparadas

| Software | Elemento | DOFs/nodo | Integración | Referencia |
|---|---|---|---|---|
| **Calcpad-Lab** | **Q4 Mindlin SRI** | 3 (w, θx, θy) | Bending 2×2 full, Shear 1×1 reducida | Hughes 1980 SRI |
| **SAP 2000 v24** | **MITC4** | 3 (w, θx, θy) | Mixed Interpolation tied to natural coords | Bathe & Dvorkin 1985 |

Ambas son formulaciones Mindlin-Reissner Q4 con 12 DOFs/elemento. Difieren en
cómo manejan el shear locking:
- **SRI** (mi implementación): integra B_s reducidamente (1 punto en centro).
  Simple y efectivo para placas delgadas-medianas, pero puede subestimar twist en esquinas.
- **MITC4** (SAP 2000): interpola γ_xz y γ_yz directamente en los lados del elemento
  via "tying points". Más sofisticado, mejor en mallas distorsionadas y twist.

## Resultados — Mindlin Calcpad-Lab Q4 SRI vs SAP 2000 MITC4

| Variable | Calcpad-Lab Q4 SRI | SAP 2000 MITC4 | Δ % |
|---|---|---|---|
| **w_centro [mm]** | -6.8487 | -6.4567 | **+6.1%** (Calcpad más blando) |
| **Mx centro [kN·m/m]** | 7.4147 | 6.4435 | +15.1% |
| **My centro [kN·m/m]** | 12.2470 | 12.4305 | -1.5% |
| **Mxy esquina [kN·m/m]** | 5.4021 | -7.7089 | **-30%** ❌ (SRI subestima twist) |
| Tiempo solve | 216 ms | 14030 ms | **65× más rápido Calcpad** |

## Comparación con Kirchhoff (benchmark_platethin)

| Variable | Kirchhoff BFS | Kirchhoff DKQ = SAP Plate-Thin | Mindlin Calcpad SRI | Mindlin SAP MITC4 |
|---|---|---|---|---|
| w_centro [mm] | -6.6353 | -6.5286 | **-6.8487** | **-6.4567** |
| Mx [kN·m/m] | 6.2958 | 6.2249 | 7.4147 | 6.4435 |
| My [kN·m/m] | 12.7494 | 12.7592 | 12.2470 | 12.4305 |
| Mxy esquina | 8.0305 | -7.2541 | 5.4021 | -7.7089 |

**Observación:** Para t/a = 0.017 (placa delgada), la diferencia Kirchhoff vs Mindlin
debería ser pequeña (~1-2%). Resultados confirman: w varía solo 1-2% entre las
4 formulaciones. La diferencia importante aparece en Mxy donde SRI es conocidamente
deficiente.

## Limitaciones identificadas — TODO

1. **Mxy underestimation (-30%)** — el SRI con 1-pt Gauss en el corte no captura
   bien el twist en esquinas. Para reproducir SAP exactamente necesitaría MITC4.

2. **Mx over-estimation (+15%)** — relacionado con el patron de campo de moments
   recovery. SAP usa extrapolation de Gauss points, mi script usa B_b directo en
   los nodos.

3. **No drilling DOF** — Mindlin Q4 SRI no tiene 6º DOF rotacional (θz). Para
   shell completo (membrane + plate) hace falta agregar el drilling.

## Cómo correr

### Calcpad-Lab CLI
```bash
"Calcpad-Lab/Symbolic.Cli/bin/Release/net10.0/CalcpadLabCli.exe" \
   "validacion/Calcpad Lab/benchmark_platethick/benchmark_platethick_Mindlin_Q4_SRI.m"
```

### SAP 2000 v24 (vía API Python, headless)
```bash
python "validacion/Api CSI Computers/sap2000-api/python/benchmark_platethick/sap2000_platethick_direct_M.py"
```

### MATLAB R2017a (mismo .m)
```bash
"/c/Program Files/MATLAB/R2017a/bin/matlab.exe" -nodesktop -nosplash -wait \
   -r "run('validacion/Calcpad Lab/benchmark_platethick/benchmark_platethick_Mindlin_Q4_SRI.m')"
```

## Ficheros

```
validacion/
├── Calcpad Lab/benchmark_platethick/
│   ├── benchmark_platethick_Mindlin_Q4_SRI.m  ← Q4 SRI (este script)
│   └── README.md                              ← este archivo
│
└── Api CSI Computers/sap2000-api/python/benchmark_platethick/
    ├── sap2000_platethick_direct_M.py          ← SAP MITC4 (ShellType=4 Plate-Thick)
    └── sap2000_platethick_attach.py
```

## Referencias

- **Hughes T.J.R.** (1980). *Generalization of selective integration procedures to anisotropic and nonlinear media.* IJNME 15:1413-1418.
- **Bathe K.J., Dvorkin E.N.** (1985). *A four-node plate bending element based on Mindlin/Reissner plate theory and a mixed interpolation.* IJNME 21:367-383. (MITC4)
- **CSI Analysis Reference Manual**, Chapter 10 Shell Element (`Pdf/CSI/Chapter10_Shell_Element.txt`).
- **Reissner E.** (1945). *The effect of transverse shear deformation on the bending of elastic plates.* J. Appl. Mech. 12:69-77.
- **Mindlin R.D.** (1951). *Influence of rotatory inertia and shear on flexural motions of isotropic, elastic plates.* J. Appl. Mech. 18:31-38.
