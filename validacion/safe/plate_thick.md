# Plate Thick — SAFE 2016+

SAFE no expone API .NET pública. Validación manual o vía `.f2k`.

## Procedimiento manual

1. **New Model → Blank**, unidades **N, m, C**
2. **Define → Materials**: añadir `PLATE_MAT` con E=30000, ν=0.2, γ=0
3. **Define → Slab Properties**: añadir slab tipo **Thick Plate**, t=0.25
4. **Draw → Rectangular Slab**: (0,0) → (1,1), property `PLATE_MAT`
5. **Edit → Edit Areas → Divide**: 4×4 (genera 16 elementos Q4)
6. **Assign → Edge Supports → Pinned** en los 4 bordes (Uz fijo)
7. **Define → Load Cases**: añadir `Q`, dead+live = 0
8. **Assign → Surface Loads**: aplicar **-1.0 N/m²** uniforme
9. **Run → Run Analysis**
10. **Display → Show Deformed Shape**, leer `Uz` en (0.5, 0.5, 0)

## Valor esperado (referencia)

| Cantidad     | Valor esperado |
|--------------|----------------|
| w_max        | ≈ 1.5e-04 m    |
| Reissner    | 1.28e-04 m     |
| HekatanLab   | 1.543172e-04 m |

## Notas

- SAFE distingue `Thin Plate` (Kirchhoff) y `Thick Plate` (Mindlin). Para t/a=0.25
  el `Thick Plate` es estrictamente correcto.
- La diferencia entre SAFE y HekatanLab puede ser de ~5-10% por el algoritmo de
  elemento usado (SAFE usa MITC4 / DKMQ vs el Mindlin selectivo simple del template).
