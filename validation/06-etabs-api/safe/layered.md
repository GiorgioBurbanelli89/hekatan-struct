# Layered Plate — SAFE 2016+

SAFE 2016 **no soporta nativamente** secciones layered shell con ángulos
por capa. Sólo soporta slab homogéneas con un material por capa (sin
rotación de fibras).

## Aproximación SAFE

Para el caso isotrópico (todas las capas del mismo material) es
equivalente a una slab monolítica con el espesor total. Procedimiento:

1. **New Model → Blank**, unidades **N, m, C**
2. **Material** `LAYER_MAT`: E=30000, ν=0.2
3. **Slab Property** tipo **Thin Plate**, t=0.20 (=4 capas × 0.05)
4. **Draw → Rectangular Slab**: 1×1 m
5. **Divide** 4×4
6. **Edge Supports → Pinned** en los 4 bordes
7. **Load**: q = 1 N/m² uniforme
8. **Run Analysis** y leer `Uz` central

## Valor esperado

| Entorno              | w_max [m]                |
|----------------------|--------------------------|
| Navier isotrópica    | α·q·a⁴/D, α=0.00406      |
| SAFE (placa equiv.)  | similar a HekatanLab FE02 con t=0.2 |

## Para validación real de laminados

Usa **ETABS** (`layered_etabs.m`) o **SAP2000** (`layered_sap2000.m`) que
sí soportan `SetSlabLayer` / `SetShellLayer_1` con ángulos por capa.

Para verificación experimental (real composite con fibra-matriz), software
especializado como **Abaqus** o **NASTRAN** con elementos shell-composite
y leyes constitutivas ortotrópicas.
