# Shell Thin Cantilever — HekatanLab Web (FE05)

## Cómo reproducir

1. Modo **📐 MATLAB**
2. Seleccionar **"FE05 — Shell Thin (Membrana + Kirchhoff)"**

## Resultados publicados (malla 4×4)

```
Shell thin cantilever u_max = 1.261058e-03
Estimacion membrana pura  = 1.000000e-03
Ratio FEM/Membrana axial  = 1.261
```

## Paridad

| Comparable con   | Diferencia |
|------------------|------------|
| MATLAB R2017a    | 0.00% (idéntico bit-a-bit) |
| Membrana axial   | +26.1% (FEM captura modos extra de bending in-plane) |

## Notas

- 5 DOFs/nodo (u, v, w, θ_x, θ_y) = 20 DOFs/elemento
- Membrana + bending: 2×2 Gauss; Shear: 1×1 reducida (anti-locking)
- t=0.005 (t/a = 0.005) — muy delgado, comportamiento casi membrana
- Script standalone: `../matlab/shell_thin_verify.m`
