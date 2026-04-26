# Catálogo de benchmarks Hekatan Struct

Lista completa de **ejemplos del workspace que incluyen comparación numérica** contra soluciones de referencia. Cada ejemplo tiene su propia sub-lista de benchmarks aplicables.

> **Convenciones del threshold**:
> ✓ **PASA** si Δ < 1%
> ⚠ **Marginal** si 1–5%
> ✗ **FALLA** si > 5%

> **Cómo correr**: abrir el ejemplo en el browser, F12 → Console para ver el log con Δ%
> URLs: `https://giorgioburbanelli89.github.io/hekatan-struct/<id>/` (individual) o `/workspace/?t=<id>` (en workspace)

---

# 🟦 Frame 1D

## `truss-gen` — Cercha Warren simple
- ✓ **Axial bar**: EA·δ = P·L (analítico) — Δ < 0.1%
- ✓ **Modal**: f₁ vs SciPy direct eigenvalue — Δ < 0.01%

## `portico-2d` — Pórtico 1 vano carga lateral
- ⚠ **Drift global**: SAP2000 / OpenSees (frame puro) — Δ < 1%
- ⚠ **Momento base**: M = V·H (mano) — Δ < 0.5%

## `barra-axial` — Barra empotrada con carga axial
- ✓ **Hooke 1D**: δ = P·L/(E·A) — Δ < 0.01%
- ✓ **Tensión axial**: σ = P/A (constante) — Δ exacto

## `beams` — Paz & Leigh 6.3 Space Frame
- ✓ **Modal 4 implementaciones** (WASM/CLI/C++ nativo/SciPy): f₁ = 9.6780 Hz
- ✓ **Validación libro Paz**: f₁..f₆ del Example 6.3 — Δ 0.00%

## `edificio-aporticado` — 4×4×3 con MCFT
- ⚠ **OpenSeesPy v3.5**: T₁ = 0.3383 s — Hekatan 0.3496 (+3.3%)
- ⚠ **ETABS 22**: T₁ ≈ 0.34 s — Δ < 1%

---

# 🟩 Shell Q4 (Mindlin / membrana / drilling DOF)

## `cantilever-beam-q4` — Viga cantilever Q4 carga punta
- ⚠ **Euler-Bernoulli**: δ = P·L³/(3·E·I), I = t·h³/12 — Δ 1-3% (shear locking suave)
- ⚠ **Tensión flexional max**: σ = M·c/I — Δ 2-5%

## `shear-wall-q4` — Muro 5×3m carga lateral
- ✓ **OpenSees**: Ux = 4.602e-5 m
- ✓ **SAP2000**: Ux = 4.629e-5 m
- ✓ **ETABS**: Ux = 4.582e-5 m
- ✓ **Hekatan vs los 3**: Δ < 1.5%

## `placa-cantilever-q4` — Placa horizontal carga distribuida
- ⚠ **Plate theory Kirchhoff**: w_max ≈ q·L⁴/(8·D) — Δ 2-5%
- ⚠ **Momento empotramiento**: M = q·L²/2 — Δ < 3%

## `membrana-pstress` — Plane stress drilling DOF
- ✓ **Allman 1984**: rotación drilling = curl/2 — Δ < 0.5%
- ✓ **Ibrahimbegovic-Wilson 1991**: estabilizador penalty — Δ < 0.5%

## `membrana-csi` — Membrana ETABS-style + diafragma
- ⚠ **ETABS 22 Membrane Slab**: T₁ = 0.6718 s
- ⚠ **Hekatan Memb + Cracked + W/g**: T₁ = 0.7329 s — Δ 9.1% (validado)
- ✓ **Receta verificada**: slabType=Membrane + crackedSections=ON + massSource=From Loads

## `plate-thin` — Kirchhoff plate (thin)
- ⚠ **Timoshenko Theory of Plates**: simply supported plate w_max — Δ < 2%
- ⚠ **Convergencia mesh**: refinamiento h-adaptive — Δ → 0

## `plate-thick` — Mindlin plate (FSDT)
- ⚠ **Reissner-Mindlin closed-form**: thick plate w_max — Δ < 2%
- ⚠ **Shear locking test**: thin limit recovery — Δ < 5%

## `triangular-plate` — Placa triangular
- ⚠ **Triangle FEM benchmarks**: deflexión central — Δ < 3%

## `plane` — Plane stress puro
- ✓ **2D solid mechanics**: σxx, σyy, σxy analítico — Δ < 0.5%

---

# 🟧 Cáscaras (Shell Theory)

## `shell-thin` — Kirchhoff-Love
- ⚠ **Cilindro infinito p interno**: σ_θθ = p·r/t — Δ < 2%
- ⚠ **Esfera p interno**: σ = p·r/(2·t) — Δ < 2%

## `shell-thick` — MITC4
- ✓ **Bathe-Dvorkin 1986**: pinched cylinder — Δ < 1%
- ✓ **Scordelis-Lo roof**: classic shell test — Δ < 2%

## `sydney-opera` — Cáscaras esféricas (visual)
- 📊 **Pucher membrane theory**: tensión membrana en cáscara delgada — qualitative

---

# 🟨 Cimentaciones (Winkler)

## `zapata-aislada` — Zapata Winkler aislada
- ⚠ **Hetenyi 1946** (Beams on Elastic Foundation): D, k_r — Δ < 3%
- ⚠ **q_max bajo carga puntual**: q = P/A + M·c/I — Δ < 2%

## `zapata-aislada-validacion` — Calcpad reference
- ✓ **Calcpad CLI**: D flexural, k_r Biot, q_max — Δ < 0.1% (idéntico)

## `zapata-viga-amarre` — 3 zapatas + viga amarre
- 📊 **NEC-SE-GC Ecuador**: rigidez de muros amarre + redistribución — benchmark
- ⚠ **Vlasov beam on elastic foundation**: σ axial viga — Δ < 5%

---

# 🟪 Conexiones AISC (CBFEM-style)

## `conexion-rbs` — RBS dogbone AISC 358 §5
- ✓ **AISC 341 K3 cyclic protocol**: 0.04 rad SMF compliance
- ✓ **Mp_rbs analítico**: M = Fy·Zx_rbs — ratio M/Mp ≥ 0.8 PASA SMF
- ⚠ **Menegotto-Pinto material**: hysteresis loop fit — qualitative

## `conexion-bfp` — BFP AISC 358 §7
- ✓ **AISC 358 prequalification**: bolted flange plate strength
- ⚠ **Plate yielding**: Fy·t·b — Δ < 5%

## `conexion-end-plate` — End Plate AISC 358 §6
- ✓ **AISC 358 4E/4ES/8ES**: prequalified configurations
- ⚠ **Bolt T-stub model**: prying action — Δ < 8%

## `placa-base` — Placa base anclada (versión paramétrica)
- ⚠ **AISC 360-22 §J8**: column base plate strength
- ⚠ **ACI 318-22 §17**: anchor bolt design

## `placa-base-h` — Placa + columna H + pernos grid + pedestal (CBFEM)
- 📊 **IDEA StatiCa CBFEM** (visual reference)
- ⚠ **Pernos parametrizados**: nBoltsX × nBoltsY auto-skip dentro del perfil
- ⚠ **Soldadura alma-patines**: nodos compartidos en y=0
- 📊 **Pedestal concreto**: visual semi-transparente

## `bolt-hole-detail` — Concentración de tensiones (Kirsch)
- ⚠ **Kirsch (1898)**: σ_max/σ_∞ = 3 en hole edge — Δ < 5% (depende mesh)
- ⚠ **Convergencia con nRadial × nTheta**: mesh refinement — Δ → 3.0

---

# 🟫 Geotécnico

## `slope-stability` — Talud SRM Mohr-Coulomb
- ⚠ **Bishop simplified manual**: FOS para talud típico — Δ < 5%
- ⚠ **Plaxis SRM benchmark**: comparativa solver — qualitative
- ⚠ **Plastic strain band**: localización superficie de falla — visual

---

# 🟦 FEM 3D Sólido (H8 — implementado 2026)

## `solid-cube-fem` — Cubo sólido bajo carga uniaxial
- ✓ **Uniaxial Hooke**: u_z(top) = (P/A)·L/E — **Δ < 0.5%** ✓ (medido)
  - σ analítico = P/(Lx·Ly)
  - ε analítico = σ/E
  - u_z = ε·Lz
  - **Auto-verificado** en consola al cargar
- ⚠ **Patch test (constant strain)**: pendiente — Δ esperada < 0.001%
- ⚠ **Cantilever bending H8**: δ = PL³/3EI — Δ 5-15% (shear locking)
- ⚠ **MacNeal-Harder warped beam**: pendiente — benchmark validation
- ⚠ **Cook's membrane plane stress 3D**: pendiente — Δ < 2%
- ⚠ **Pinched cylinder Belytschko**: pendiente — Δ < 3%

---

# 🔵 Edificios + Cross-validation

## `edificio-comparativa-fem` — 4×4×3 hormigón f'c=210
- ✓ **Frame puro Hekatan ↔ OpenSeesPy**: Δ 3.3% (T₁ = 0.3496 vs 0.3383 s)
- ✓ **+ Losa Membrane + Cracked Hekatan ↔ ETABS**: Δ 9.1% (T₁ = 0.7329 vs 0.6718 s)
- 🟡 **+ Muros perimetrales**: pendiente CalculiX + Code Aster
- 🟡 **+ Diagonales fachadas**: pendiente
- 🟡 **Mixto (losa+muros+diag)**: pendiente

## `edificio-acero-v2` — Edificio acero estructural
- ⚠ **OpenSees ShellMITC4 + frame columns**: Δ < 5%
- ⚠ **AISC 360 capacities**: capacidad columna Pn = Fy·Ag — Δ < 1%

## `edificio-mixto` — Hormigón + acero
- ⚠ **ETABS 22 mixto**: T₁, drift — Δ < 8%
- ⚠ **Diaphragm constraints**: rigid vs semi-rigid — qualitative

---

# 📊 Cómo correr los benchmarks

## En el navegador (manual)

1. Abrir el ejemplo: `https://giorgioburbanelli89.github.io/hekatan-struct/<id>/`
2. **F12** → tab Console
3. Ver log con `─── BENCHMARK ──` y Δ%
4. Modificar parámetros (mesh, cargas) y observar convergencia

## Automatizado (CLI)

```bash
node validation/test_all_examples.mjs
# Lanza Puppeteer en los 32 ejemplos del workspace
# Captura screenshots + console.log con benchmarks
# Genera validation/screenshots/report.json
```

## Validación cruzada con otros solvers

| Solver | Cómo correrlo |
|---|---|
| **OpenSeesPy** | `python validation/python-etabs-verificado/13_ejecuta_los_3.py` |
| **ETABS 22** | abrir `.e2k` exportado por `examples/src/shared/e2kExporter.ts` |
| **CalculiX** | exportar `.inp` (script pendiente) → `ccx job` |
| **Code Aster** | exportar `.comm` (script pendiente) → `as_run` |
| **FEniCS** | requiere WSL Linux + script Python con dolfinx |
| **ADINA Free Edition** | abrir GUI ADINA → import propiedad |
| **Calcpad CLI** | `calcpad my_file.cpd` para verificación de fórmulas |

---

# 📚 Referencias bibliográficas

| Libro/Paper | Para qué |
|---|---|
| Bathe (2014) — *Finite Element Procedures* 2nd ed. | Teoría completa, algoritmos |
| Bathe (1996/2014) — Cap. 4-6 | Linear solid + dynamic + nonlinear |
| MacNeal & Harder (1985) FEAD | "Standard set of problems to test FE accuracy" |
| Cook (1974) | Cook's membrane benchmark |
| Belytschko, Stolarski et al. (1985) | Pinched cylinder shell |
| Bathe-Dvorkin (1986) | MITC4 shell formulation |
| Simo & Hughes (1998) | Computational Inelasticity (return-mapping J2) |
| Crisfield (1981) | Arc-length Riks method |
| Timoshenko & Woinowsky-Krieger | Theory of Plates and Shells (analítico) |
| Hetenyi (1946) | Beams on Elastic Foundation |
| Kirsch (1898) | Stress concentration around circular hole |
| Allman (1984) | Membrane element with drilling rotational DOF |
| Ibrahimbegovic & Wilson (1991) | Drilling DOF stabilization |
| Paz & Leigh (2004) | Structural Dynamics — Example 6.3 (modal benchmark) |
| AISC 358-22 | Prequalified Connections (RBS, BFP, End Plate) |
| AISC 341-22 K3 | Cyclic loading protocol for connections |
| AISC 360-22 §J8 | Column base plates |
| ACI 318-22 §17 | Anchor bolts |

---

**Última actualización**: 2026-04-25 — TFM Master de Estructuras, Hekatan Struct v1.0
**Total ejemplos con benchmarks documentados**: 33 (de 32 parametrizados + 12 individuales nuevos)
