# Hekatan Struct

**Structural FEM analysis platform that runs entirely in the browser.** No installation, no server — C++/Eigen solver compiled to WebAssembly, Three.js 3D visualization, reactive UI with VanJS.

Based on [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) by Mohamed Adil.

🌐 **Live:** [giorgioburbanelli89.github.io/awatif-workspace/workspace/](https://giorgioburbanelli89.github.io/awatif-workspace/workspace/)

## What's Different from Awatif

| Feature | Awatif v2.0.0 | Hekatan Struct |
|---------|:---:|:---:|
| Timoshenko beams | ❌ Euler-Bernoulli only | ✅ φ = 12EI/GA_sL² |
| Shell Q4 incompatible modes | ❌ | ✅ Wilson + drilling DOF |
| Mindlin-Reissner plates | ❌ | ✅ MITC4 shear tying |
| Modal analysis | ❌ | ✅ Eigen C++/WASM |
| Nonlinear pushover | ❌ | ✅ Newton-Raphson |
| Rigid end offsets | ❌ | ✅ R^T·K·R |
| Moment releases | ❌ | ✅ Static condensation |
| Import E2K (ETABS) | ❌ | ✅ |
| Import S2K (SAP2000) | ❌ | ✅ |
| Import IFC (Revit/ArchiCAD) | ❌ | ✅ web-ifc WASM |
| Export E2K / S2K | ❌ | ✅ |
| Export OpenSees (Py/Tcl) | ❌ | ✅ |
| Didactic FEM solver | ❌ | ✅ K_local, T, K_global per element |
| Calc panel (math.js + KaTeX) | ❌ | ✅ MATLAB-like with symbolic math |
| Parametric building generator | Basic | ✅ Per-axis spans, per-floor heights, overhangs |
| ETABS-style releases UI | ❌ | ✅ 6 DOFs × 2 ends + springs |
| Section assignment dialog | ❌ | ✅ Rect, circular, I-shape, HSS, CFT |
| Mobile responsive | ❌ | ✅ Hamburger menu |
| Validated vs ETABS 22.6 | ❌ | ✅ Frames 1.0000, Shells 0.99-1.003 |

## Architecture

```
┌──────────────────────────────────────────────────────┐
│                    Browser                            │
│                                                      │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐ │
│  │  awatif-ui   │  │  awatif-fem   │  │  examples   │ │
│  │  (Three.js)  │  │  (C++/WASM)  │  │  (getCad3d) │ │
│  │  VanJS       │  │  Eigen 3.4   │  │  FEM Studio │ │
│  │  Tweakpane   │  │  SparseLU    │  │  Calc Panel │ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬──────┘ │
│         │    signals       │                 │        │
│         └─────────────────┼─────────────────┘        │
│                           │                          │
│                    ┌──────┴───────┐                   │
│                    │  deform.wasm │ 334 KB            │
│                    │  (Eigen C++) │                   │
│                    └──────────────┘                   │
└──────────────────────────────────────────────────────┘
```

### Packages

| Package | Description |
|---------|-------------|
| `awatif-fem` | FEM solver: `deform()`, `modal()`, `analyze()`, C++/WASM bindings |
| `awatif-ui` | UI: `getViewer()` (Three.js), `getParameters()` (Tweakpane), `getToolbar()` |
| `examples` | All examples + `getCad3d.ts` (FEM Studio with 25+ parametric models) |

### C++ Solver (awatif-fem/src/cpp/)

| File | Description |
|------|-------------|
| `deform.cpp` | Static analysis entry point |
| `modal.cpp` | Eigenvalue analysis (K·φ = ω²·M·φ) |
| `didactic.cpp` | Didactic solver — returns all intermediate steps |
| `nonlinear.cpp` | Newton-Raphson nonlinear static |
| `cyclic_pushover.cpp` | Cyclic pushover analysis |
| `utils/getLocalStiffnessMatrix.cpp` | K_local 12×12 (Timoshenko) + Q4 shell |
| `utils/getTransformationMatrix.cpp` | T matrix (3D rotation) |
| `utils/getGlobalStiffnessMatrix.cpp` | Assembly with rigid offsets + releases |
| `utils/shellQ4.cpp` | Shell Q4: membrane (incompatible modes) + Mindlin plate + drilling DOF |

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
git clone https://github.com/GiorgioBurbanelli89/awatif-workspace.git
cd awatif-workspace
npm install
cd examples && npm install
npm run dev    # opens localhost:4600
```

### Compile WASM (requires emsdk)

```bash
# Install emsdk (one time)
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk && ./emsdk install latest && ./emsdk activate latest

# Compile solver
cd awatif-fem/src/cpp
em++ -O2 -Ieigen -I. \
  didactic.cpp utils/*.cpp \
  -sEXPORTED_FUNCTIONS=[_didactic_solve,_malloc,_free] \
  -sALLOW_MEMORY_GROWTH=1 -sMODULARIZE=1 -sEXPORT_ES6=1 \
  --no-entry -o built/deform.js
```

### Deploy to GitHub Pages

```bash
cd examples
DEPLOY_BASE="/awatif-workspace/" npx vite build --emptyOutDir
# Copy build output to deploy-gh-pages/ and push to gh-pages branch
```

## Validation

Solver validated against ETABS 22.6 via Python API (comtypes):

| Test | awatif/ETABS Ratio |
|------|:---:|
| Cantilever Timoshenko | 1.0000 |
| Portal frame | 1.0000 |
| 3D Space frame | 1.0000 |
| Shell Q4 membrane | 0.99–1.003 |
| Shell Q4 plate bending | 0.99–1.01 |
| Modal analysis (6 modes) | 1.0000 |

## Stack

| Technology | Purpose |
|-----------|---------|
| **C++ / Eigen 3.4** | FEM solver (SparseLU, eigenvalues) |
| **Emscripten** | C++ → WebAssembly compiler |
| **Three.js** | 3D rendering (WebGL) |
| **VanJS** | Reactive state management (1.5 KB) |
| **Tweakpane** | Parameter sliders UI |
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

- [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) by Mohamed Adil — original UI framework and viewer
- [Eigen 3.4](https://eigen.tuxfamily.org/) — C++ linear algebra
- [web-ifc](https://github.com/ThatOpen/engine_web-ifc) — IFC parser by That Open Company
- Dr. Roberto Aguiar — Timoshenko beam formulation and parametric building methodology
- Edward Wilson — Shell element formulation (incompatible modes, drilling DOF)

## License

Based on awatif (MIT License). See [LICENSE](LICENSE) for details.
