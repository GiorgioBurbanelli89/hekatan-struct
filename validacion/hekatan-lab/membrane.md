# Membrane Q4 Cantilever Wall — HekatanLab Web (FE01b)

## Cómo reproducir

1. Modo **📐 MATLAB**
2. Seleccionar **"FE01b — Cantilever Wall Q4 (con contorno)"**

## Resultados publicados (malla 6×4)

```
Muro 5.0x3.0 m, t=0.20, P=100, malla 6x4
u_max = 5.7417e-02 m en nodo 35
sigma_xx range: [-79.787, 79.787] MPa
sigma_vM  max : 303.813 MPa

Deflexion teorica viga: 1.7280e-02 m
Ratio FEM/Viga: 3.323 (>1 por corte, esperado en muro stocky)
```

## Paridad

| Comparable con   | Diferencia |
|------------------|------------|
| MATLAB R2017a    | 0.00% (idéntico bit-a-bit) |
| Viga Euler-B     | +232% (FEM captura corte, esperado para H/W=0.6) |

## Visualizaciones generadas (6 figuras + 6 contornos sobre malla)

`u_x`, `u_y`, `σ_xx`, `σ_yy`, `τ_xy`, `σ_vM` — todos con paleta SAP2000

## Script standalone

`../matlab/membrane_q4_verify.m`
