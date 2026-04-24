# Hekatan Struct

**Structural FEM analysis platform that runs entirely in the browser.** No installation, no server — C++/Eigen solver compiled to WebAssembly, Three.js 3D visualization, reactive UI with VanJS + Tweakpane.

Hekatan Struct started as a fork of [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) by Mohamed Adil (thanks for the original UI framework and viewer, ~10% of the current codebase). Everything else — modal analysis, Winkler springs, native Q4 plane-stress solver, unified Tweakpane workspace, 25+ parametric examples, reactive unit system, modal animation, foundation workflows, CSI membrane, draggable panes, and more — was added for this project.

🌐 **Live:** [https://giorgioburbanelli89.github.io/hekatan-struct/workspace/](https://giorgioburbanelli89.github.io/hekatan-struct/workspace/)

Jump directly to any example with `?t=<id>`, e.g.:
- [`/workspace/?t=plane`](https://giorgioburbanelli89.github.io/hekatan-struct/workspace/?t=plane) — Plane Q4 cantilever wall (plane stress)
- [`/workspace/?t=zapata-aislada`](https://giorgioburbanelli89.github.io/hekatan-struct/workspace/?t=zapata-aislada) — Isolated footing with Winkler springs
- [`/workspace/?t=edificio-aporticado`](https://giorgioburbanelli89.github.io/hekatan-struct/workspace/?t=edificio-aporticado) — Parametric concrete moment frame building

## What Hekatan Struct adds on top of Awatif

| Feature | Awatif v2.0.0 | Hekatan Struct |
|---------|:---:|:---:|
| Modal analysis (eigenvalue) | ❌ | ✅ Eigen C++/WASM, mass participation, validated 0.00% vs OpenSees/SciPy |
| Modal animation (live mode shapes) | ❌ | ✅ Shared helper — works in EVERY example with `hasModal: true` |
| Winkler springs (native C++) | ❌ | ✅ `deform()` extended with `springsList: {node, dof, k}[]`, assembled into K |
| Plane Q4 plane-stress solver | ❌ | ✅ Pure-TS `planeQ4Solve`: 2 DOFs/node, 2×2 Gauss, LU dense, stress recovery |
| Wilson incompatible modes (Q4 bending) | ❌ | ✅ Taylor-Beresford-Wilson 1976; reduces cantilever error ~10% → <2% |
| Rigid diaphragm (ASCE 7-22 §12.3.1) | ❌ | ✅ Master-slave rigid links helper (`shared/rigidDiaphragm.ts`) |
| Bathe composite time integration (α-dissipative) | ❌ | ✅ TS scaffold `batheStep()` + `newmarkStep()` for ASCE 7-22 §16 RHA |
| ETABS-style slab discretization (25-50 cm per bay) | ❌ | ✅ `etabsDiscretize2D()` — each bay meshed to target size, like ETABS default |
| Materials helper (Hormigón/Acero/CFT × Rect/Circ/W/HSS) | ❌ | ✅ `materials.ts` w/ ACI 318-22 Ec=15100√f'c, AISC/A992 steel, composite |
| Mindlin-Reissner plates | ❌ | ✅ MITC4 shear tying via `plateQ4Solve(theoryType: 0)` |
| Kirchhoff thin plates | ❌ | ✅ `plateQ4Solve(theoryType: 1)` |
| CSI Shell-Membrane formulation | ❌ | ✅ Membrane Q4 with drilling DOF (`membrana-csi` example) |
| Timoshenko beams | ❌ Euler-Bernoulli only | ✅ φ = 12EI/GA_sL² |
| Shell Q4 incompatible modes | ❌ | ✅ Wilson + drilling DOF |
| Nonlinear pushover | ❌ | ✅ Newton-Raphson |
| Rigid end offsets | ❌ | ✅ R^T·K·R |
| Moment releases | ❌ | ✅ Static condensation |
| **Unified Tweakpane workspace** | ❌ | ✅ Hub at `?t=<id>` loads any example; draggable + position persisted |
| **Reactive unit system** | ❌ | ✅ kN/tonf/kip × mm/cm/m/in; sliders + colormap legend + values cascade |
| **Dynamic slider ranges** | ❌ | ✅ Folder "📏 Rangos": user can extend min/max of load sliders in-session |
| Import E2K (ETABS) | ❌ | ✅ |
| Import S2K (SAP2000) | ❌ | ✅ |
| Import IFC (Revit/ArchiCAD) | ❌ | ✅ web-ifc WASM |
| Export E2K / S2K | ❌ | ✅ |
| Export OpenSees (Py/Tcl) | ❌ | ✅ |
| Didactic FEM solver | ❌ | ✅ K_local, T, K_global per element |
| Calc panel (math.js + KaTeX) | ❌ | ✅ MATLAB-like with symbolic math |
| Parametric building generator | Basic | ✅ Per-axis spans, per-floor heights, overhangs, shear walls, braces |
| Foundation examples (zapatas) | ❌ | ✅ Isolated, strap-beam, validation vs hand calc |
| ETABS-style releases UI | ❌ | ✅ 6 DOFs × 2 ends + springs |
| Section assignment dialog | ❌ | ✅ Rect, circular, I-shape, HSS, CFT |
| Mobile responsive | ❌ | ✅ Hamburger menu |
| Validated vs ETABS 22.6 | ❌ | ✅ Frames 1.0000, Shells 0.99-1.003 |

## Workspace architecture

```
examples/src/
├── workspace/                  ← unified hub (Tweakpane-based)
│   ├── main.ts                 Selector + params + modal + units + ranges
│   ├── exampleRegistry.ts      ExampleDef interface + list of all 25+ examples
│   ├── runExampleStandalone.ts Runner for individual pages /<id>/
│   ├── units.ts                Reactive forceUnit/dispUnit (localStorage)
│   └── exampleVersion.ts       Version counter (invalidates stale van.derive)
├── shared/
│   ├── animateMode.ts          Modal mode-shape animator (reusable)
│   ├── renderModalTable.ts     Modal frequencies table
│   └── ...
└── <example-id>/               each example self-contained
    ├── <name>.ts               exports ExampleDef
    ├── main.ts                 runExampleStandalone(<def>)
    └── index.html
```

Every example exports an `ExampleDef` with:
```ts
{ id, name, category, params, build,
  hasModal?, runModal?, onParamChange?, computedLabels?, inlineComputed?,
  defaultShellResult?, availableShellResults? }
```

`ParamDef` supports:
- Standard sliders (`min`, `max`, `step`, `default`)
- Dropdowns (`options: {label: value}`)
- Checkboxes (`boolean: true`)
- **Typed units** (`unitType: "force" | "moment" | "disp"`) — auto-convert + label suffix
- **Dynamic ranges** (`rangeAdjustable: true`) — folder "📏 Rangos" lets user extend min/max

## Architecture

```
┌──────────────────────────────────────────────────────┐
│                    Browser                            │
│                                                      │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐ │
│  │  awatif-ui  │  │  awatif-fem  │  │   examples  │ │
│  │  Three.js   │  │  C++/WASM    │  │  Workspace  │ │
│  │  VanJS      │  │  Eigen 3.4   │  │  Tweakpane  │ │
│  │  Tweakpane  │  │  SparseLU    │  │  25+ demos  │ │
│  └──────┬──────┘  └──────┬───────┘  └──────┬──────┘ │
│         │    signals       │                 │        │
│         └─────────────────┼─────────────────┘        │
│                           │                          │
│                    ┌──────┴───────┐                   │
│                    │  deform.wasm │ ~350 KB           │
│                    │  (Eigen C++) │                   │
│                    └──────────────┘                   │
└──────────────────────────────────────────────────────┘
```

### Packages

| Package | Description |
|---------|-------------|
| `awatif-fem` | FEM solver: `deform()`, `analyze()`, `modalAnalysis()`, `plateQ4Solve()`, `planeQ4Solve()`, C++/WASM bindings |
| `awatif-ui` | UI: `getViewer()` (Three.js + colormap + legend), `getToolbar()`; exports reactive `colorMapForceUnit`, `colorMapDispUnit` |
| `examples` | Unified workspace + 25+ self-contained examples + `getCad3d.ts` legacy FEM Studio (being phased out) |

### C++ Solver (awatif-fem/src/cpp/)

| File | Description |
|------|-------------|
| `deform.cpp` | Static analysis entry point; supports Winkler springs via 5th arg |
| `modal.cpp` | Eigenvalue analysis (K·φ = ω²·M·φ) |
| `didactic.cpp` | Didactic solver — returns all intermediate steps |
| `nonlinear.cpp` | Newton-Raphson nonlinear static |
| `cyclic_pushover.cpp` | Cyclic pushover analysis |
| `utils/getLocalStiffnessMatrix.cpp` | K_local 12×12 (Timoshenko) + Q4 shell |
| `utils/getTransformationMatrix.cpp` | T matrix (3D rotation) |
| `utils/getGlobalStiffnessMatrix.cpp` | Assembly with rigid offsets + releases |
| `utils/shellQ4.cpp` | Shell Q4: membrane (Wilson incompatible modes) + Mindlin plate + drilling DOF |
| `plate_q4/kirchhoff_q4.cpp` | Dedicated Mindlin / Kirchhoff plate solver |

### Pure-TS solvers (no WASM)

| File | Description |
|------|-------------|
| `awatif-fem/src/planeQ4.ts` | Q4 plane-stress element (`planeQ4Solve`): 2 DOFs/node, 2×2 Gauss, LU dense with partial pivoting, stress recovery (σxx, σyy, τxy, von Mises, principal) |

### Import/Export

| Format | Import | Export | Software |
|--------|:---:|:---:|----------|
| E2K | ✅ | ✅ | ETABS |
| S2K | ✅ | ✅ | SAP2000 |
| IFC | ✅ | — | Revit, ArchiCAD |
| OpenSeesPy | ✅ | ✅ | OpenSees |
| OpenSees Tcl | ✅ | ✅ | OpenSees |

## Getting Started

```bash
git clone https://github.com/GiorgioBurbanelli89/hekatan-struct.git
cd hekatan-struct
npm install
npm run dev:examples    # opens localhost:4600 (workspace auto-opens)
```

### Compile C++ → WASM (only needed if modifying C++)

```bash
# Install emsdk (one time)
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk && ./emsdk install latest && ./emsdk activate latest
source ./emsdk_env.sh

# Compile solver
cd awatif-fem/src/cpp
em++ -O2 -Ieigen -I. \
  didactic.cpp utils/*.cpp \
  -sEXPORTED_FUNCTIONS=[_didactic_solve,_malloc,_free] \
  -sALLOW_MEMORY_GROWTH=1 -sMODULARIZE=1 -sEXPORT_ES6=1 \
  --no-entry -o built/deform.js
```

> The compiled `.wasm` and `.js` are **versioned in git** — you only need emsdk to modify C++ code.

### Deploy to GitHub Pages

```bash
# Build (MSYS_NO_PATHCONV prevents git-bash from mangling the deploy base)
MSYS_NO_PATHCONV=1 DEPLOY_BASE=/hekatan-struct/ npm run build -w examples

# Push the compiled bundle to gh-pages branch
npx gh-pages --dist website/src/examples \
  --repo https://github.com/GiorgioBurbanelli89/hekatan-struct.git \
  --branch gh-pages --dotfiles \
  --message "<commit message>"
```

## Validation

Solver validated against ETABS 22.6 via Python API (comtypes), plus Paz & Leigh Example 6.3 vs four solvers (browser-WASM, CLI-WASM, native C++, Python/SciPy — all 0.00% difference):

| Test | awatif/ETABS Ratio |
|------|:---:|
| Cantilever Timoshenko | 1.0000 |
| Portal frame | 1.0000 |
| 3D Space frame | 1.0000 |
| Shell Q4 membrane | 0.99–1.003 |
| Shell Q4 plate bending | 0.99–1.01 |
| Modal analysis (6 modes) | 1.0000 |
| Plane Q4 cantilever (flex+shear) | 1.10 FEM/teórico (expected for Q4 without incompatible modes) |

## Stack

| Technology | Purpose |
|-----------|---------|
| **C++ / Eigen 3.4** | FEM solver (SparseLU, eigenvalues) |
| **Emscripten** | C++ → WebAssembly compiler |
| **Three.js** | 3D rendering (WebGL) |
| **VanJS** | Reactive state management (1.5 KB) |
| **Tweakpane** | Unified UI — *single source of truth, no custom panels* |
| **math.js** | Matrix operations in calc panel |
| **KaTeX** | LaTeX equation rendering |
| **nerdamer** | Symbolic math (derivatives, integrals) |
| **web-ifc** | IFC geometry parser (WASM) |
| **Vite** | Build tool / dev server |

## Author

**Jorge Burbano** — Structural Engineer, Ecuador
- LinkedIn: [jorge-burbano-213741138](https://www.linkedin.com/in/jorge-burbano-213741138/)
- Also creator of [Hekatan Calc](https://github.com/GiorgioBurbanelli89) — math/engineering desktop app (.NET/WPF)

## Credits

- [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) by Mohamed Adil — original UI framework and viewer (~10% of the current codebase; thank you!)
- [Eigen 3.4](https://eigen.tuxfamily.org/) — C++ linear algebra
- [web-ifc](https://github.com/ThatOpen/engine_web-ifc) — IFC parser by That Open Company
- Dr. Roberto Aguiar — Timoshenko beam formulation and parametric building methodology
- Edward Wilson — Shell element formulation (incompatible modes, drilling DOF)

## License

MIT (inherited from awatif). See [LICENSE](LICENSE) for details.
