# Estado de la comparacion DKE vs ETABS -- Mesa Torsion

> ACTUALIZADO 2026-06-02: el offset es el PERALTE COMPLETO de viga (0.50 m, por
> `CARDINALPT 8`), NO 0.25. Y NO se aplica en K (`PZENDOFFSETSRIGID No` = rigid
> factor 0): el "+15%" se corrige SOLO reportando en la cara (z=3.5). El Calcpad
> DKE (`mesa_torsion_DKE_completo.cpd`) ya esta corregido → M2 cara **+1.7%**.

## Resumen

El +15% en M2 columna NO es bug. 4 solvers independientes coinciden.
La diferencia se explica por el punto de reporte de ETABS: la columna se reporta
en la CARA del soporte (z=3.5, a 0.50 m del nudo por CARDINALPT 8), no en el NUDO.

NO hace falta tocar K (rigid factor 0). Reportando en la cara, el match es +1.1-1.7%.
Ver `validacion/REGISTRO_M2_COLUMNAS.md` §0 para la documentacion completa.

## Resultados M2 col (hekatan-fem-py MZC, 5 casos)

| Caso | A: Sin off | B: Off K | C: Off K+cara | ETABS | dC% |
|---|---|---|---|---|---|
| Dead | 1.816 | 1.611 | 1.510 | 1.57 | -3.8% |
| Live | 2.453 | 2.232 | 2.092 | 2.13 | -1.8% |
| SCP | 4.906 | 4.463 | 4.184 | 4.26 | -1.8% |
| UDCon1 | 9.411 | 8.504 | 7.972 | 8.16 | -2.3% |
| UDCon2 | 11.991 | 10.859 | 10.181 | 10.40 | -2.1% |

ETABS real cae entre Modo B (+3-5%) y Modo C (-2-4%).

## Calcpad DKE (del HTML renderizado, CORREGIDO 2026-06-02)

La implementacion Calcpad DKE (mesa_torsion_DKE_completo.cpd) da:
- P = 4.500 (0.00% vs ETABS 4.50)
- M2 joint (nudo z=4.0) = 2.4764 (+1.74% vs ETABS nudo 2.434)
- M2 cara (z=3.5)       = 2.1668 (+1.73% vs ETABS cara 2.13)

Correccion aplicada: `ioff_col = h_v = 0.50` (peralte viga completo por CARDINALPT 8)
y `K_cg_off = K_cg` (offset NO aplicado en K, rigid factor 0). Antes daba +7.7%
porque usaba 0.25 m. No necesita beam offsets.

## Scripts relevantes

| Script | Descripcion |
|---|---|
| `hekatan-fem-py/benchmarks/mesa_torsion_completa.py` | 3 modos x 5 cargas (MZC + offsets) |
| `validacion/python-fem/mesa_torsion_endoffsets.py` | Script original con 3 modos |
| `validacion/REGISTRO_M2_COLUMNAS.md` | Documentacion completa de la investigacion |
| `validacion/PROMPT_INVESTIGAR_15_PORCIENTO.md` | Prompt con contexto del DKE + mapeo |
