# composite_cft_columns — Benchmark CFT (Concrete-Filled Tube)

Validación cruzada **5-way** + análisis **Bernoulli vs Timoshenko** de
columnas CFT + vigas I, con/sin losa deck.

## TL;DR — el "residual 6.5%" era teoría de viga, no un bug

| Setup | Hekatan **Timoshenko** | Hekatan **Bernoulli** | OpenSees | PyNite | Julia (Bern/Timo) | **ETABS (Timo)** |
|---|---:|---:|---:|---:|---:|---:|
| **cftNoSlab**    | **-0.6465** | **-0.6047** ✓ | -0.6047 ✓ | -0.6047 ✓ | -0.6047 / -0.6465 ✓ | **-0.6461 (0.06%)** ✓ |
| **cftDeckSlab**  | **-2.8770** | **-2.8720** ✓ | -2.8720 ✓ | -2.9118 | -2.8806 / -2.8954 | **-3.0074 (4.5%)** |

(unidades: mm. ✓ = match BIT-EXACT entre solvers que usan la misma teoría)

**Conclusión**: Hekatan WASM usa **frame3D Timoshenko con As=5/6·A** por default
(ver `getLocalStiffnessMatrix.cpp:170-193`). OpenSees `elasticBeamColumn`,
PyNite y mi Julia self-contained usan **Bernoulli puro**. La diferencia 6.5%
en cftNoSlab es **exactamente el efecto de φ ≈ 0.04** sobre la W360x60.

## Quick start

```bash
# 1) Hekatan WASM — ambas teorías de viga
                              node run_matrix_cft.mjs   # Timoshenko (default Hekatan)
BEAM_THEORY=bernoulli         node run_matrix_cft.mjs   # Bernoulli (G·1e8 trick)
TRANSFORM_MODE=concrete       node run_matrix_cft.mjs   # transformación a hormigón (mismo resultado)

# 2) OpenSees Python (Bernoulli puro, default)
python run_opensees_cft.py cftDeckSlab
python run_opensees_cft.py cftNoSlab

# 3) PyNite (Bernoulli puro, default)
pip install PyNiteFEA
python run_pynite_cft.py cftDeckSlab
python run_pynite_cft.py cftNoSlab

# 4) Julia FEM self-contained — ambas teorías
                              julia run_julia_cft.jl cftDeckSlab    # Bernoulli (default)
BEAM_THEORY=timoshenko        julia run_julia_cft.jl cftDeckSlab    # Timoshenko 5/6·A
                              julia run_julia_cft.jl cftNoSlab
BEAM_THEORY=timoshenko        julia run_julia_cft.jl cftNoSlab

# 5) ETABS — generar .e2k y correr automáticamente via PowerShell OAPI
node export_e2k_cft.mjs

# Correr ETABS (sin GUI) y extraer JSON con todos los resultados:
powershell -ExecutionPolicy Bypass -File ../../../"Etabs Powershell"/etabs_extract.ps1 \
  -ModelPath etabs/composite_cft_cftDeckSlab.e2k \
  -OutPath etabs/cftDeckSlab_results.json
powershell -ExecutionPolicy Bypass -File ../../../"Etabs Powershell"/etabs_extract.ps1 \
  -ModelPath etabs/composite_cft_cftNoSlab.e2k \
  -OutPath etabs/cftNoSlab_results.json

# 6) Tweakpane (browser, dropdown vivo Bernoulli/Timoshenko + Steel/Concrete)
npm run dev:examples
# http://localhost:4600/workspace/?t=benchmark-cft
```

## Resumen 7-way (cross-theoría)

```
cftNoSlab (sólo frames, 4×20 kN puntuales mid-span):
  Bernoulli:  Hekatan=-0.6047  OpenSees=-0.6047  PyNite=-0.6047  Julia=-0.6047  ✓ 4/4 BIT-EXACT
  Timoshenko: Hekatan=-0.6465                                     Julia=-0.6465  ✓ 2/2 BIT-EXACT

cftDeckSlab (con losa, q=5 kN/m²):
  Bernoulli:  Hekatan=-2.8720  OpenSees=-2.8720  PyNite=-2.9118  Julia=-2.8806  (spread 1.4%)
  Timoshenko: Hekatan=-2.8770                                     Julia=-2.8954  (spread 0.6%)
```

ETABS también usa Timoshenko default → al importar el .e2k debería matchear
con Hekatan Timoshenko (-0.6465 cftNoSlab, -2.8770 cftDeckSlab).

Ver `VALIDATION_CFT.md` para análisis completo + lista de validadores
alternativos a OpenSees (PyNite, CalculiX, Code_Aster, FEAP, JuliaFEM).
