# Plate Thick — HekatanLab Web (FE03)

## Cómo reproducir

1. `npm run dev` en `hekatanlab-web/`
2. Abrir `http://localhost:4700/hekatanlab-web/`
3. Botón **📐 MATLAB** → seleccionar plantilla **"FE03 — Placa gruesa Q4 (Mindlin-Reissner)"**
4. Auto-run

## Resultados publicados (malla 4×4)

```
Placa SS Mindlin GRUESA: 1.00x1.00, t=0.250 (t/a=0.25)
w_max placa Mindlin gruesa = 1.543172e-04
w_bend (Navier)       = 9.977856e-05
w_shear (Reissner)    = 2.830080e-05
w_total Reissner      = 1.280794e-04
alpha_FEM (effective) = 0.00628
Error vs Reissner: +20.49%
```

## Paridad

| Comparable con   | Diferencia |
|------------------|------------|
| MATLAB R2017a    | 0.00% (idéntico a 7 sig.fig.) |
| Reissner teórico | +20.5% (esperado, malla 4×4) |

## Notas

- Formulación: Mindlin-Reissner con integración selectiva (2×2 bending + 1×1 shear)
- Para t/a=0.25 el shear contribuye ~22% del w_max total
- Script standalone equivalente: `../matlab/plate_thick_verify.m`
