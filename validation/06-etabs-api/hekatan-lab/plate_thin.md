# Plate Thin — HekatanLab Web

## Cómo reproducir

1. Abrir `http://localhost:4700/hekatanlab-web/`
2. Activar botón **📐 MATLAB** (modo MATLAB estricto)
3. Seleccionar plantilla **"FE02 — Placa delgada Q4 (Kirchhoff/DKQ)"** del dropdown
4. El template se auto-ejecuta

## Resultados publicados (HekatanLab Web v1.0.0, malla 4×4)

```
Placa SS Mindlin (thin-style): 1.00x1.00, t=0.050, q=1.0
w_max placa SS = 1.371347e-02
w_Navier (alpha=0.00406): 1.247232e-02
alpha_FEM = 0.00446 (vs 0.00406)
Error vs Navier: +9.95%
```

## Paridad

| Comparable con   | Diferencia |
|------------------|------------|
| MATLAB R2017a    | 0.00% (idéntico bit-a-bit a 7 sig.fig.)  |
| Navier analítica | +9.95% (esperado para malla 4×4)         |

## Notas técnicas

- El template usa formulación **Mindlin-Reissner con integración selectiva**
  (2×2 bending + 1×1 shear), no Kirchhoff puro. Es lo que hace SAP2000/ETABS.
- El nombre "Kirchhoff/DKQ" del template es histórico — la implementación
  actual es Mindlin que colapsa a Kirchhoff cuando t/L→0 (sin shear locking).
- Para mejor convergencia a Navier, usar malla 8×8 o 16×16.

## Origen del template

`hekatanlab-web/src/templates.ts:629` — entrada `FE02 — Placa delgada Q4 (Kirchhoff/DKQ)`.

Script equivalente standalone: `../matlab/plate_thin_verify.m`.
