# Plate Thin — SAFE 2016+

SAFE no expone API .NET pública para automatización completa.
La validación se hace manualmente o importando un `.f2k` (texto).

## Procedimiento manual

1. New Model → Blank
2. Units: **N, m, C** (consistente con HekatanLab/Navier)
3. Define → Materials → Add New:
   - Name: `PLATE_MAT`
   - Modulus E = 30000
   - Poisson ν = 0.2
   - Density 0 (deflexión gravitacional desactivada)
4. Define → Slab Properties → Add New:
   - Type: **Slab — Thin Plate**
   - Material: `PLATE_MAT`
   - Thickness: 0.05
5. Draw → Rectangular Slab: (0,0) → (1,1), property `PLATE_MAT`
6. Edit → Edit Areas → Divide → 4×4 (genera malla Q4)
7. Assign → Edge Supports → Pinned en los 4 bordes (Uz fijo, rotaciones libres)
8. Define → Load Cases → Add `Q`, dead+live = 0
9. Assign → Surface Loads → -1.0 N/m² (carga uniforme hacia abajo)
10. Run → Run Analysis
11. Display → Show Deformed Shape → leer `w_max` en el nodo central

## Valor esperado (referencia)

| Cantidad     | Valor esperado |
|--------------|----------------|
| w_max        | ≈ 1.37e-02 m   |
| α_FEM        | ≈ 0.00446      |
| Error Navier | +9.95% (4×4) o menor (mallas más finas) |

## Exportar resultados

`File → Export → Joint Displacements (.csv)` → buscar columna `Uz` en
el join (0.5, 0.5, 0).

## Notas

- SAFE usa la **misma formulación Mindlin-Reissner** que HekatanLab FE02 cuando
  se selecciona "Thin Plate" (selective integration shear).
- La paridad debería estar dentro del 1% (diferencias por solver
  Pardiso vs `inv()` y agrupamiento de carga).
