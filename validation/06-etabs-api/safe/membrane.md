# Membrane Q4 (Cantilever Wall) — SAFE 2016+

⚠️ **SAFE no es la herramienta apropiada para este caso**: SAFE está
diseñado para losas horizontales (slab on grade, post-tensioned slabs,
foundations). Muros cantilever verticales con carga in-plane se modelan
mejor en ETABS o SAP2000.

## Alternativa en SAFE (aproximación)

Si necesitas usar SAFE de todos modos:

1. **New Model → Blank**, unidades **N, m, C**
2. Modelar la losa "acostada" en plano XY (rotar mentalmente):
   - Geometría 5×3 m, t=0.2
3. **Material**: E=25000 MPa, ν=0.2
4. **Slab Property** tipo **Membrane** (sólo rigidez in-plane, sin bending)
5. **Edge Support → Pinned** en uno de los bordes 5 m (= base del muro)
6. **Load**: en el borde opuesto (= top), aplicar carga distribuida
   equivalente a P/W = 100/5 = 20 N/m (lateral)
7. Como en SAFE las cargas son perpendiculares a la losa, esta aproximación
   NO captura la respuesta in-plane real

## Recomendación

Para validar el caso membrane, **usar ETABS** (`membrane_etabs.m`) o
**SAP2000** (`membrane_sap2000.m`), que sí soportan walls con
`eShellType.Membrane` correctamente.

## Valor esperado en ETABS/SAP2000

| Entorno         | u_max [m]      |
|-----------------|----------------|
| HekatanLab Web  | 5.7417e-02     |
| Viga Euler-B    | 1.7280e-02     |
| ETABS/SAP2000   | esperado ≈ 5.5–6.0e-02 |
