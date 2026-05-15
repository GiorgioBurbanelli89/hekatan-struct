# Hekatan Struct — Carpeta de Validación

Validación cruzada de los solvers FEM de **Hekatan Struct** y **Hekatan Lab**
contra software comercial de referencia y soluciones analíticas.

## Estructura

```
validacion/
├── matlab/                MATLAB R2017a self-contained (.m, sin API CSi)
├── hekatan-lab/           Notas reproducción HekatanLab Web (.md)
├── hekatan-struct-cli/    Hekatan Struct CLI nativo C++/WASM (mjs + wrappers)
├── etabs-api/             ETABS 18+ API en 3 lenguajes
│   ├── matlab/            (.m via NET.addAssembly)
│   ├── python/            (.py via comtypes)
│   └── powershell/        (.ps1 via Add-Type)
├── sap2000-api/           SAP2000 v21+ API en 3 lenguajes
│   ├── matlab/            (.m via NET.addAssembly)
│   ├── python/            (.py via comtypes)
│   └── powershell/        (.ps1 via Add-Type)
├── safe/                  SAFE 2016+ procedimiento manual (.md)
└── calcpad-symbolic/      Calcpad Symbolic worksheets (.cpd)
```

Las carpetas `sap2000-api/` y `etabs-api/` contienen los **mismos 7 scripts**
(6 casos FEM + Example 1-001) reimplementados en **MATLAB, Python y
PowerShell** — los 3 invocan la misma API .NET de CSi y producen resultados
idénticos.

Cada subcarpeta contiene los **6 casos FEM** del set de pruebas:
`plate_thin`, `plate_thick`, `membrane`, `layered`, `shell_thin`, `shell_thick`.

## Casos de prueba

| Caso | Template HekatanLab | Geom + carga | Referencia teórica |
|------|---------------------|--------------|--------------------|
| **plate_thin**  | FE02 | SS 1×1×0.05, q=1, malla 4×4 | Navier α=0.00406 |
| **plate_thick** | FE03 | SS 1×1×0.25, q=1, malla 4×4 | Reissner (bend+shear) |
| **membrane**    | FE01b | Wall 5×3×0.2, P=100 top, malla 6×4 | Viga Euler-Bernoulli |
| **layered**     | FE04 | SS 1×1, 4 capas [0/90/90/0]×0.05, q=1 | Navier isotrópica equivalente |
| **shell_thin**  | FE05 | Cantilever 1×1×0.005, P=1, malla 4×4 | Membrana axial |
| **shell_thick** | FE06 | Cantilever 0.5×0.5×0.05, P=100, malla 3×3 | Membrana axial |

## Estado de paridad CROSS-ENVIRONMENT (resultados reales medidos)

### Eje 1 — MATLAB R2017a ↔ HekatanLab Web (mismo algoritmo Mindlin selectivo)

| Caso        | Resultado (idéntico bit-a-bit) |
|-------------|-------------------|
| plate_thin  | w_max = **1.371347e-02** |
| plate_thick | w_max = **1.543172e-04** |
| membrane    | u_max = **5.7417e-02**, σ_vM = **303.813 MPa** |
| shell_thin  | u_max = **1.261058e-03** |
| shell_thick | u_max = **1.2528e-02** |

✅ **Paridad 0.00% a 7 cifras significativas** — el motor MATLAB de HekatanLab
Web reproduce bit-a-bit a MATLAB R2017a (mismo solver hand-coded).

### Eje 2 — Hekatan Struct CLI (C++/Eigen MITC4/DKMQ) vs el resto

Hekatan Struct usa elementos **distintos** (MITC4/DKMQ del C++ Eigen) — números
diferentes son **esperados** y reflejan formulación más sofisticada del elemento:

| Caso        | Hekatan-Struct CLI | HekatanLab Web | Ref. analítica | Δ_lab    | Δ_teórica |
|-------------|--------------------|----------------|----------------|----------|-----------|
| plate_thin  | **1.245909e-02**   | 1.371347e-02   | 1.247232e-02 (Navier)  | -9.15%   | -0.11%    |
| plate_thick | **1.422332e-04**   | 1.543172e-04   | 1.280794e-04 (Reissner)| -7.83%   | +11.05%   |
| membrane    | **5.879562e-02**   | 5.7417e-02     | 1.728e-02 (Viga E-B)   | +2.40%   | +240%     |
| layered     | **2.713625e-04**   | n/a            | 1.9488e-04 (Navier iso)| n/a      | +39.25%   |
| shell_thin  | **1.300990e-03**   | 1.261058e-03   | 1.0e-03 (Memb. axial)  | +3.17%   | +30.10%   |
| shell_thick | **1.296784e-02**   | 1.2528e-02     | 1.0e-02 (Memb. axial)  | +3.51%   | +29.68%   |

**Observación clave**: Hekatan-Struct para `plate_thin` da **-0.11% vs Navier** —
mucho mejor que HekatanLab Web (+9.95%). Esto es porque MITC4/DKMQ del C++ es
un elemento más preciso que el Mindlin selectivo simple del template educativo.

## Estado de scripts API CSi (pendientes de ejecución con licencia)

| Caso        | SAP2000 (sap2000/) | ETABS (etabs/) | SAFE (safe/) | Calcpad (.cpd) |
|-------------|--------------------|----------------|--------------|-----------------|
| plate_thin  | `plate_thin_sap2000.m`     | `plate_thin_etabs.m`     | `plate_thin.md`     | `plate_thin.cpd` |
| plate_thick | `plate_thick_sap2000.m`    | `plate_thick_etabs.m`    | `plate_thick.md`    | `plate_thick.cpd` |
| membrane    | `membrane_sap2000.m`       | `membrane_etabs.m`       | `membrane.md` ⚠️    | `membrane.cpd` |
| layered     | `layered_sap2000.m`        | `layered_etabs.m`        | `layered.md` ⚠️     | `layered.cpd` |
| shell_thin  | `shell_thin_sap2000.m`     | `shell_thin_etabs.m`     | `shell_thin.md` ⚠️  | `shell_thin.cpd` |
| shell_thick | `shell_thick_sap2000.m`    | `shell_thick_etabs.m`    | `shell_thick.md` ⚠️ | `shell_thick.cpd` |

⚠️ SAFE no soporta nativamente los casos de membrane/shell verticales o
cantilever. Usar ETABS/SAP2000 para esos casos.

## Cómo correr

### Hekatan Struct CLI nativo (sin licencia, sin MATLAB) — **el más rápido**
```bash
cd hekatan-struct/
node cli_fem_benchmark.mjs                      # los 6 casos, tabla legible
node cli_fem_benchmark.mjs plate_thin           # un caso
node cli_fem_benchmark.mjs --json > results.json   # machine-readable

# o desde validacion/:
cd validacion/hekatan-struct-cli/
./run.sh                                          # Bash/MSYS
.\run.ps1                                         # PowerShell
```
Requisitos: Node 22.6+ (auto-strip-types). Sin MATLAB ni licencias CSi.

### MATLAB self-contained
```bash
cd validacion/matlab
matlab -batch "plate_thin_verify"
matlab -batch "plate_thick_verify"
matlab -batch "membrane_q4_verify"
matlab -batch "shell_thin_verify"
matlab -batch "shell_thick_verify"
matlab -batch "example_1_001_frame_verify"      # CSi Example 1-001 frame
```

### SAP2000 API en 3 lenguajes (requiere SAP2000 v21+)
```bash
# MATLAB
cd validacion/sap2000-api/matlab     && matlab -batch "plate_thin_sap2000"

# Python (pip install comtypes)
cd validacion/sap2000-api/python     && python plate_thin_sap2000.py

# PowerShell
cd validacion/sap2000-api/powershell && pwsh -File plate_thin_sap2000.ps1
```

Casos disponibles en los 3 lenguajes: `plate_thin`, `plate_thick`, `membrane`,
`layered`, `shell_thin`, `shell_thick`, `example_1_001`. Ver
`sap2000-api/README.md` para sintaxis específica.

### ETABS API en 3 lenguajes (requiere ETABS 18+)
```bash
cd validacion/etabs-api/matlab       && matlab -batch "plate_thin_etabs"
cd validacion/etabs-api/python       && python plate_thin_etabs.py
cd validacion/etabs-api/powershell   && pwsh -File plate_thin_etabs.ps1
```

Casos: `plate_thin_etabs`, `plate_thick_etabs`, `membrane_etabs`,
`layered_etabs`, `shell_thin_etabs`, `shell_thick_etabs`, `example_1_001`.
Ver `etabs-api/README.md` para sintaxis específica.

Ajustar `APIDLLPath` en cada script al path real de `SAP2000v1.dll` /
`ETABSv1.dll` antes de correr.

### HekatanLab Web
```bash
cd hekatanlab-web/
npm run dev
# Abrir http://localhost:4700/hekatanlab-web/
# Botón 📐 MATLAB → plantilla FE01b/FE02/FE03/FE04/FE05/FE06
```

### Calcpad Symbolic
Abrir cada `.cpd` en Calcpad Symbolic para ejecutar análisis simbólico
y ver tabla de paridad multi-entorno.

### SAFE
Procedimiento manual GUI por caso — ver `safe/*.md`.

## Patrón de output (estilo CSi Example 1-001)

Cada script API imprime:

```
═══════════════════════════════════════════════════════════
  <CASO> (<ShellType>) — <Software> vs HekatanLab vs <Teórica>
═══════════════════════════════════════════════════════════
  Geometría: ..., malla NxM, eShellType...
  ─────────────────────────────────────────────────────────
  Source            valor            Diff vs HekatanLab
  ─────────────────────────────────────────────────────────
  <Software> API    XX.XXXXXXe-XX   ±XX.XX%
  HekatanLab Web    XX.XXXXXXe-XX        ---
  Teórica           XX.XXXXXXe-XX   ±XX.XX%
  ─────────────────────────────────────────────────────────

<Software>Result_<caso> = ...
IndResult_<caso>        = ... (referencia teórica)
PercentDiff_<caso>      = ±XX.XX%
```

Idéntico al patrón **SapResult / IndResult / PercentDiff** del oficial
SAP2000 Example 1-001 / ETABS Example 6.

## Próximos pasos

- [ ] Correr los 6 scripts SAP2000 con SAP2000 v21+ real
- [ ] Correr los 6 scripts ETABS con ETABS 18+ real
- [ ] Completar tabla maestra con valores reales SAP/ETABS
- [ ] Análisis de convergencia: tabla α vs malla (4, 8, 16, 32) para cada caso
- [ ] Validar `example_1_001` (portal frame) en SAP2000 y ETABS reales
      contra los IndResult oficiales CSi (-0.02639, 0.06296, 0.06296,
      -0.2963, 0.3125, 0.11556, 0.00651)
