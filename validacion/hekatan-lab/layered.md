# Layered Plate — HekatanLab Web (FE04)

## Cómo reproducir

1. Modo **📐 MATLAB**
2. Seleccionar **"FE04 — Placa Laminada (composite ABD)"**

## Notas técnicas

El template FE04 actualmente **computa las matrices ABD** del laminado
[0°/90°/90°/0°] cross-ply (4 capas × 0.05 m de material isotrópico
E=30000, ν=0.2) pero NO resuelve un problema completo con malla.

## Resultado simbólico (matrices ABD)

```
Capa  z_top    z_bot    ángulo
 1    -0.10   -0.05      0°
 2    -0.05    0.00     90°
 3     0.00    0.05     90°
 4     0.05    0.10      0°

D_iso = E*t_total³ / (12*(1-ν²))
      = 30000 * 0.2³ / (12*0.96)
      = 20.83333 (mismo D que placa monolítica isotrópica equivalente)
```

## Paridad

Como las 4 capas son del MISMO material isotrópico, el laminado
[0/90/90/0] colapsa a una placa isotrópica equivalente con t=0.2 m.

Para validar numéricamente:
- Correr FE02 con `t=0.2` en lugar de `t=0.05` → reproduce el caso layered
- Comparar con `layered_etabs.m` o `layered_sap2000.m` que sí usan
  `SetSlabLayer` con ángulos por capa
