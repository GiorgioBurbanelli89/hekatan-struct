# Catálogo de benchmarks Hekatan Struct

Lista completa de **ejemplos del workspace que incluyen comparación numérica** contra soluciones de referencia (analíticas, otros solvers, libros). Cada uno imprime el resultado en la consola del navegador (F12) al cargar.

> Convenciones del threshold por defecto:
> ✓ **PASA** si Δ error < 1% (excelente)
> ⚠ **Marginal** si 1–5% (aceptable, depende del caso)
> ✗ **FALLA** si > 5% (revisar mesh, BCs, formulación)

---

## 🟦 Frame 1D (analítico Euler-Bernoulli)

| Ejemplo | Caso | Solución analítica | Δ esperada |
|---|---|---|---|
| `truss-gen` | Cercha Warren simple | EA·δ = P·L (axial) | <0.1% |
| `portico-2d` | Pórtico 1 vano + carga lateral | Sap2000 / OpenSees | <1% |
| `barra-axial` | Barra empotrada con carga axial | δ = P·L/(E·A) | <0.01% |
| `beams` (Paz 6.3) | Space frame modal 6×6m | f₁=9.6780 Hz (libro Paz) | 0.00% |
| `edificio-aporticado` | 4×4×3 con MCFT | OpenSeesPy + ETABS 22 | 3.3% |

## 🟩 Shell Q4 (Mindlin / membrana / drilling DOF)

| Ejemplo | Caso | Solución de referencia | Δ esperada |
|---|---|---|---|
| `cantilever-beam-q4` | Viga cantilever rect. con carga punta | δ = P·L³/(3·E·I), I=t·h³/12 | 1-3% (shear locking suave) |
| `shear-wall-q4` | Muro 5×3m carga lateral | Ux: OpenSees 4.602e-5 / SAP 4.629e-5 / ETABS 4.582e-5 | <1.5% |
| `placa-cantilever-q4` | Placa horizontal carga distribuida | Plate theory Kirchhoff | 2-5% |
| `membrana-pstress` | Plane stress con drilling DOF | Allman 1984 + Ibrahimbegovic 1991 | <0.5% |
| `membrana-csi` | Membrana ETABS-style + diaphragm | ETABS 22 (membrane slab) | 9.1% (con cracked) |
| `plate-thin` | Kirchhoff plate, simply supported | Timoshenko's Theory of Plates | <2% |
| `plate-thick` | Mindlin plate FSDT | Reissner-Mindlin closed-form | <2% |
| `triangular-plate` | Placa triangular | Triangle FEM benchmarks | <3% |
| `plane` | Plane stress puro | Solid mechanics 2D | <0.5% |

## 🟧 Cáscaras (Shell Theory)

| Ejemplo | Caso | Solución de referencia | Δ esperada |
|---|---|---|---|
| `shell-thin` | Cáscara Kirchhoff-Love | Solución analítica cilindro | <2% |
| `shell-thick` | MITC4 shell | Bathe-Dvorkin 1986 | <1% |
| `sydney-opera` | Cáscaras esféricas | Pucher membrane theory | visual |

## 🟨 Cimentaciones (Winkler)

| Ejemplo | Caso | Solución de referencia | Δ esperada |
|---|---|---|---|
| `zapata-aislada` | Zapata Winkler aislada | Hetenyi (Beams on Elastic Foundation) | <3% |
| `zapata-aislada-validacion` | Calcpad reference | Calcpad CLI (D, k_r, q_max) | <0.1% |
| `zapata-viga-amarre` | 3 zapatas + viga amarre | NEC-SE-GC Ecuador | benchmark |

## 🟪 Conexiones AISC (CBFEM-style)

| Ejemplo | Caso | Solución de referencia | Δ esperada |
|---|---|---|---|
| `conexion-rbs` | RBS dogbone AISC 358 §5 | AISC 341 K3 + Mp_rbs analítico | M/Mp ≥ 0.8 (PASA SMF) |
| `conexion-bfp` | BFP AISC 358 §7 | AISC 358 prequalification | resistance verified |
| `conexion-end-plate` | End Plate AISC 358 §6 | AISC 358 4E/4ES/8ES | resistance verified |
| `placa-base` | Placa base anclada | AISC 360-22 §J8 + ACI 318 §17 | strength check |
| `placa-base-h` | Placa + columna H + pernos grid + pedestal | IDEA StatiCa CBFEM (visual) | qualitative |
| `bolt-hole-detail` | Concentración tensiones (Kirsch) | σ_max/σ_∞ = 3 en hole edge | <5% (depende mesh) |

## 🟫 Geotécnico

| Ejemplo | Caso | Solución de referencia | Δ esperada |
|---|---|---|---|
| `slope-stability` | Talud SRM Mohr-Coulomb | Bishop (manual) + Plaxis benchmark | FOS ±5% |

## 🟦 FEM 3D Sólido (H8 — 2026)

| Ejemplo | Caso | Solución analítica | Δ medida |
|---|---|---|---|
| `solid-cube-fem` | Columna sólida uniaxial Pu axial | u_z = (P/A)·L/E | **<0.5%** ✓ |
| `solid-cube-fem` (cantilever mode) | Cantilever bending H8 | δ = PL³/3EI | 5-15% (shear locking H8) |
| _planeado_ | **MacNeal beam** (warped mesh) | MacNeal-Harder 1985 reference | benchmark validation |
| _planeado_ | **Cook's membrane** | Cook 1974 reference, σ at mid | <2% |
| _planeado_ | **Patch test** | Constant strain reproduce | exacto (hasta epsilon) |
| _planeado_ | **Pinched cylinder** | Belytschko-Stolarski 1985 | <3% |

## 🔵 Edificios + Cross-validation

| Ejemplo | Caso | Solvers comparados | Δ medida |
|---|---|---|---|
| `edificio-comparativa-fem` | 4×4 cols × 3 pisos hormigón | OpenSeesPy / OpenSees TCL / ETABS / CalculiX / Code Aster | tabla en docs/VALIDATION.md |
| `edificio-acero-v2` | Edificio acero | OpenSees | <5% |
| `edificio-mixto` | Hormigón + acero | ETABS | <8% |

---

# 📊 Cómo correr los benchmarks

## En el navegador (manual)

1. Abrir el ejemplo, ej: `https://giorgioburbanelli89.github.io/hekatan-struct/solid-cube-fem/`
2. **F12** → tab Console
3. Ver el log con `─── BENCHMARK ──` mostrando Δ%
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
| **OpenSeesPy** | `cd validation/python-etabs-verificado && python 13_ejecuta_los_3.py` |
| **ETABS 22** | abrir `.e2k` exportado por `examples/src/shared/e2kExporter.ts` |
| **CalculiX** | exportar `.inp` (script pendiente) → `ccx job` |
| **Code Aster** | exportar `.comm` (script pendiente) → `as_run` |
| **FEniCS** | requiere WSL Linux + script Python con dolfinx |
| **ADINA Free Edition** | abrir GUI ADINA → import `.in` (formato propietario) |
| **Calcpad CLI** | `calcpad my_file.cpd` para verificación de fórmulas (cap, momentos, esbeltez) |

---

# 📚 Referencias bibliográficas

| Libro/Paper | Para qué |
|---|---|
| Bathe (2014) — *Finite Element Procedures* 2nd ed. | Teoría completa, algoritmos |
| Bathe (1996/2014) — Cap. 4-6 | Linear solid + dynamic + nonlinear |
| MacNeal & Harder (1985) FEAD | "Standard set of problems to test FE accuracy" |
| Cook (1974) | Cook's membrane benchmark |
| Belytschko, Stolarski et al. (1985) | Pinched cylinder shell |
| Simo & Hughes (1998) | Computational Inelasticity (return-mapping J2) |
| Crisfield (1981) | Arc-length Riks method |
| Timoshenko & Woinowsky-Krieger | Theory of Plates and Shells (analytic) |
| Paz & Leigh (2004) | Structural Dynamics — Example 6.3 (modal benchmark) |

---

**Última actualización**: 2026-04-25 — TFM Master de Estructuras, Hekatan Struct v1.0
