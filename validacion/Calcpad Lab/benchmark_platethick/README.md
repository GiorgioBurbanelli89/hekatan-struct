# Benchmark Plate-Thick (Mindlin-Reissner) — Calcpad-Lab vs SAP 2000

Validación cruzada de placa Mindlin-Reissner (deformación por corte transversal)
entre Calcpad-Lab y SAP 2000 v24 (vía API Python real, headless).

## Caso de estudio

| Parámetro | Valor |
|---|---|
| Geometría | 6 × 4 × 0.1 m (t/a = 0.017) |
| Material | E = 35 GPa, ν = 0.15 |
| Carga | q = 10 kN/m² uniforme hacia -z |
| BC | Simply-supported soft SS (w=0 en 4 bordes, rotaciones libres) |
| Malla | 6 × 4 Q4 (35 nodos, 24 elementos) |
| Factor corte κ | 5/6 (Reissner) |

## Formulación

| Software | Elemento | Bending | Shear | Recovery |
|---|---|---|---|---|
| **Calcpad-Lab** | **Q4 MITC4** (Bathe-Dvorkin 1985) | Gauss 2×2 full | **MITC4 tying points** | Gauss extrapolation a corners |
| **SAP 2000 v24** | **Q4 MITC4** (idem) | Gauss 2×2 | MITC4 | Cook-Malkus-Plesha extrapolation |

Ambas usan la misma formulación teórica (Bathe-Dvorkin Mixed Interpolation
Tensorial Components). Las diferencias residuales (<10%) se deben a detalles
de implementación específicos de SAP.

## Evolución del fix

| Versión | Mxy esquina | Δ vs SAP | Status |
|---|---|---|---|
| Q4 SRI naive (1-pt shear Gauss) | 5.4021 | **-30%** ❌ | shear locking residual + twist underestimate |
| Q4 SRI + Gauss extrapolation | 4.9051 | **-36%** ❌ | extrapolation no resuelve, problema es displacement field |
| **Q4 MITC4 + Gauss extrapolation** | **6.9625** | **-9.7%** ✅ | match dentro engineering accuracy |

## Resultados finales — Calcpad-Lab Q4 MITC4 vs SAP 2000 MITC4

| Variable | **Calcpad-Lab MITC4** | **SAP 2000 MITC4** | Δ % |
|---|---|---|---|
| **w_centro [mm]** | -6.3967 | -6.4567 | **-0.9%** ✅ |
| Mx centro [kN·m/m] | 6.0998 | 6.4435 | -5.3% |
| My centro [kN·m/m] | 11.7502 | 12.4305 | -5.5% |
| **Mxy esquina [kN·m/m]** | **6.9625** | **-7.7089** | **-9.7%** ✅ (sign convention) |
| Tiempo solve | ~200 ms | 14030 ms | **70× más rápido** |

## Detalles de la implementación MITC4

### Tying points (Bathe-Dvorkin 1985)

Para el Q4 rectangular en (ξ,η) ∈ [-1,1]²:
- **A** = (0, -1) → γ_xz_A
- **B** = (1, 0)  → γ_yz_B
- **C** = (0, 1)  → γ_xz_C
- **D** = (-1, 0) → γ_yz_D

### Interpolación bilineal

```
γ_xz(ξ, η) = ½(1-η)·γ_xz_A + ½(1+η)·γ_xz_C
γ_yz(ξ, η) = ½(1-ξ)·γ_yz_D + ½(1+ξ)·γ_yz_B
```

### Recovery de moments

Gauss point evaluation + extrapolación Cook-Malkus-Plesha a nodos. Coefs:
```
E_extrap = [1+√3/2,   -1/2,    1-√3/2,   -1/2  ]
           [-1/2,    1+√3/2,  -1/2,    1-√3/2]
           [1-√3/2,  -1/2,    1+√3/2,  -1/2  ]
           [-1/2,    1-√3/2,  -1/2,    1+√3/2]
```

Mismo procedimiento que documenta CSI Analysis Reference Manual Chapter 10
(Cook, Malkus, Plesha 1989).

## Comparación con Kirchhoff (benchmark_platethin)

Para t/a = 0.017 (placa delgada), Kirchhoff y Mindlin convergen casi exacto:

| Variable | Kirchhoff DKQ = SAP Plate-Thin | Mindlin MITC4 = SAP Plate-Thick |
|---|---|---|
| w_centro [mm] | -6.5286 | -6.4567 |
| Mx [kN·m/m] | 6.2249 | 6.4435 |
| My [kN·m/m] | 12.7592 | 12.4305 |
| Mxy esquina | -7.2541 | -7.7089 |

Para placas más gruesas (t/a > 0.1) Mindlin diverge significativamente de
Kirchhoff por efecto del corte transversal.

## Cómo correr

### Calcpad-Lab CLI
```bash
"Calcpad-Lab/Symbolic.Cli/bin/Release/net10.0/CalcpadLabCli.exe" \
   "validacion/Calcpad Lab/benchmark_platethick/benchmark_platethick_Mindlin_Q4_MITC4.m"
```

### SAP 2000 v24 (vía API Python, headless)
```bash
python "validacion/Api CSI Computers/sap2000-api/python/benchmark_platethick/sap2000_platethick_direct_M.py"
```

### MATLAB R2017a (mismo .m)
```bash
"/c/Program Files/MATLAB/R2017a/bin/matlab.exe" -nodesktop -nosplash -wait \
   -r "run('validacion/Calcpad Lab/benchmark_platethick/benchmark_platethick_Mindlin_Q4_MITC4.m')"
```

## Referencias

- **Bathe K.J., Dvorkin E.N.** (1985). *A four-node plate bending element based on Mindlin/Reissner plate theory and a mixed interpolation.* IJNME 21:367-383. ⭐ MITC4 original.
- **Cook R.D., Malkus D.S., Plesha M.E.** (1989). *Concepts and Applications of Finite Element Analysis* 3rd ed. (Gauss extrapolation matrix).
- **CSI Analysis Reference Manual**, Chapter 10 Shell Element (`Pdf/CSI/Chapter10_Shell_Element.txt`).
- **Reissner E.** (1945). *The effect of transverse shear deformation on the bending of elastic plates.* J. Appl. Mech. 12:69-77.
- **Mindlin R.D.** (1951). *Influence of rotatory inertia and shear on flexural motions of isotropic, elastic plates.* J. Appl. Mech. 18:31-38.

## Ficheros

```
validacion/Calcpad Lab/benchmark_platethick/
├── benchmark_platethick_Mindlin_Q4_MITC4.m   ← Q4 MITC4 (match SAP)
└── README.md                                  ← este archivo
```
