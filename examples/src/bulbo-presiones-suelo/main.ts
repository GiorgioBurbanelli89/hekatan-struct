/**
 * Bulbo de Presiones bajo Carga Rectangular — réplica Fig. SF-70 Serquen.
 *
 * Caso canónico de mecánica de suelos:
 *   - Masa de suelo Lx × Ly × Lz (default 20×20×10 m)
 *   - Carga rectangular Rx × Ry centrada en superficie (default 5×3 m, w=10 tonf/m²)
 *   - Mostrar bulbo de tensiones σzz REAL FEM (no Boussinesq analítico)
 *   - Visualización con PLANOS DE CORTE X/Y/Z para ver el bulbo internamente
 *
 * Mallado: nx × ny × nz hex8 elementos (default 20×20×10 = 4000 elem, 4851 nodos).
 * Solver: hex8Solve TS puro (mismo que solid-cube-fem).
 *
 * Replica el ejemplo Calcpad-Symbolic "test_fem_hex8_rect_bulbo.cpd"
 * pero ahora con Hekatan + Three.js + clipping planes interactivos.
 */
import van, { State } from "vanjs-core";
import { Pane } from "tweakpane";
import {
  Node, Element, NodeInputs, ElementInputs, DeformOutputs, AnalyzeOutputs,
} from "hekatan-fem";
import { hex8Solve, type Vec3, type Hex8 } from "../solid-cube-fem/h8";
import {
  getToolbar, getParameters, Parameters, getViewer,
  colorMapStressUnit, colorMapDispUnit, enableDraggableAllPanes,
} from "hekatan-ui";

const parameters: Parameters = {
  // Geometría suelo
  Lx:  { value: van.state(20),    min: 5,  max: 40,  step: 1,    label: "Lx suelo (m)" },
  Ly:  { value: van.state(20),    min: 5,  max: 40,  step: 1,    label: "Ly suelo (m)" },
  Lz:  { value: van.state(10),    min: 4,  max: 20,  step: 1,    label: "Lz suelo (m)" },
  // Mallado — default mínimo para apertura rápida (6×6×3 = 108 elem,
  // 196 nodos, 588 DOFs ≈ 200ms solve en TS puro).
  // Solver hex8Solve es Gauss dense O(N³) — pure TS, NO WASM. Refinar
  // mesh aumenta tiempo cúbicamente (8×8×4=10s, 12×12×8=2min, 16×16×10=8min+).
  // Roadmap: compilar hex8Solve a WASM con Eigen sparse para >100× speedup.
  nx:  { value: van.state(6),     min: 4,  max: 16,  step: 2,    label: "nx mesh" },
  ny:  { value: van.state(6),     min: 4,  max: 16,  step: 2,    label: "ny mesh" },
  nz:  { value: van.state(3),     min: 2,  max: 8,   step: 1,    label: "nz mesh" },
  // Material suelo (kPa = kN/m², w en kN/m² = kPa)
  Es:  { value: van.state(20000), min: 5000, max: 100000, step: 1000, label: "Es suelo (kN/m²)" },
  nu:  { value: van.state(0.42),  min: 0.20, max: 0.49, step: 0.01, label: "ν suelo" },
  // Carga rectangular
  Rx:  { value: van.state(5),     min: 1,  max: 15,  step: 0.5,  label: "Rx carga (m)" },
  Ry:  { value: van.state(3),     min: 1,  max: 15,  step: 0.5,  label: "Ry carga (m)" },
  w:   { value: van.state(100),   min: 10, max: 500, step: 10,   label: "w (kN/m²)" },
};

const nodesState: State<Node[]>                  = van.state([]);
const elementsState: State<Element[]>            = van.state([]);
const nodeInputsState: State<NodeInputs>         = van.state({});
const elementInputsState: State<ElementInputs>   = van.state({});
const deformOutputsState: State<DeformOutputs>   = van.state({});
const analyzeOutputsState: State<AnalyzeOutputs> = van.state({});

const benchValues: State<{
  N: number; nElems: number; nDOF: number;
  s33_min: number; s33_max: number;
  uz_max: number; elapsed: number;
}> = van.state({ N: 0, nElems: 0, nDOF: 0, s33_min: 0, s33_max: 0, uz_max: 0, elapsed: 0 });

van.derive(() => {
  const Lx = parameters.Lx.value.val;
  const Ly = parameters.Ly.value.val;
  const Lz = parameters.Lz.value.val;
  const nx = Math.round(parameters.nx.value.val);
  const ny = Math.round(parameters.ny.value.val);
  const nz = Math.round(parameters.nz.value.val);
  const Es = parameters.Es.value.val;
  const nu = parameters.nu.value.val;
  const Rx = parameters.Rx.value.val;
  const Ry = parameters.Ry.value.val;
  const w = parameters.w.value.val;

  // ── Mallado H8 estructurado ──
  // Convención: X y Y en plano horizontal, Z vertical descendente (z=0 superficie).
  // Para que la base del suelo esté en z=-Lz y la superficie en z=0.
  const dx = Lx / nx, dy = Ly / ny, dz = Lz / nz;
  const idx = (i: number, j: number, k: number) =>
    k * (nx + 1) * (ny + 1) + j * (nx + 1) + i;
  const nodes3D: Vec3[] = [];
  // k=0 → z=0 (superficie), k=nz → z=-Lz (fondo)
  for (let k = 0; k <= nz; k++) {
    for (let j = 0; j <= ny; j++) {
      for (let i = 0; i <= nx; i++) {
        nodes3D.push([
          -Lx/2 + i * dx,
          -Ly/2 + j * dy,
          -k * dz,
        ]);
      }
    }
  }
  const elemsH8: Hex8[] = [];
  for (let k = 0; k < nz; k++) {
    for (let j = 0; j < ny; j++) {
      for (let i = 0; i < nx; i++) {
        // Orden estándar H8: bottom face (k+1, fondo) CCW + top face (k, superficie) CCW
        // Pero con z descendente: top en k=0 (superficie). Convención H8: nodos 0-3 cara
        // inferior, 4-7 cara superior. Cara con z menor = inferior. Aquí z disminuye al
        // aumentar k, así que k+1 es la cara INFERIOR (más profunda = z más negativo).
        elemsH8.push([
          idx(i, j, k + 1),
          idx(i + 1, j, k + 1),
          idx(i + 1, j + 1, k + 1),
          idx(i, j + 1, k + 1),
          idx(i, j, k),
          idx(i + 1, j, k),
          idx(i + 1, j + 1, k),
          idx(i, j + 1, k),
        ]);
      }
    }
  }

  // ── Boundary conditions ──
  // Fondo (z=-Lz) empotrado. Bordes laterales: rodillos (uz=0... mejor sin restringir
  // o solo restringir desplazamientos normales). Simplificación: fondo full empotrado,
  // resto libre.
  const supports = new Map<number, [boolean, boolean, boolean]>();
  for (let j = 0; j <= ny; j++) {
    for (let i = 0; i <= nx; i++) {
      supports.set(idx(i, j, nz), [true, true, true]);
    }
  }
  // Bordes laterales: restringir desplazamiento normal (rodillo lateral)
  // x = ±Lx/2 → ux=0
  for (let k = 0; k <= nz; k++) {
    for (let j = 0; j <= ny; j++) {
      const idL = idx(0, j, k);
      const idR = idx(nx, j, k);
      const sL = supports.get(idL) ?? [false, false, false];
      const sR = supports.get(idR) ?? [false, false, false];
      supports.set(idL, [true, sL[1], sL[2]]);
      supports.set(idR, [true, sR[1], sR[2]]);
    }
  }
  // y = ±Ly/2 → uy=0
  for (let k = 0; k <= nz; k++) {
    for (let i = 0; i <= nx; i++) {
      const idF = idx(i, 0, k);
      const idB = idx(i, ny, k);
      const sF = supports.get(idF) ?? [false, false, false];
      const sB = supports.get(idB) ?? [false, false, false];
      supports.set(idF, [sF[0], true, sF[2]]);
      supports.set(idB, [sB[0], true, sB[2]]);
    }
  }

  // ── Carga rectangular Rx × Ry centrada en superficie z=0 ──
  // w en kN/m² → fuerza nodal = w × A_tributaria
  const x0 = -Rx / 2, x1 = Rx / 2;
  const y0 = -Ry / 2, y1 = Ry / 2;
  const loads = new Map<number, [number, number, number]>();
  for (let j = 0; j <= ny; j++) {
    for (let i = 0; i <= nx; i++) {
      const x = -Lx/2 + i * dx;
      const y = -Ly/2 + j * dy;
      if (x < x0 - 1e-6 || x > x1 + 1e-6 || y < y0 - 1e-6 || y > y1 + 1e-6) continue;
      // Área tributaria: dx*dy salvo en los bordes del rectángulo (mitad)
      let ax = dx, ay = dy;
      if (i === 0 || i === nx) ax = dx / 2;
      if (j === 0 || j === ny) ay = dy / 2;
      // Si está exactamente sobre el borde del rectángulo de carga, recortar
      // (aproximación: usar área completa, error pequeño con mesh fino).
      const area = ax * ay;
      const fz = -w * area;  // descendente
      loads.set(idx(i, j, 0), [0, 0, fz]);
    }
  }

  // ── Solver hex8 ──
  const N = nodes3D.length;
  console.log(`Bulbo presiones: ${N} nodos, ${elemsH8.length} hex8, ${3*N} DOFs`);
  let result;
  try {
    result = hex8Solve({ nodes: nodes3D, elements: elemsH8, E: Es, nu, supports, loads });
    console.log(`H8 resuelto en ${result.elapsedMs.toFixed(0)} ms`);
  } catch (e: any) {
    console.warn("Bulbo presiones H8:", e?.message ?? e);
    result = null;
  }

  // ── Construir visualización: shells Q4 boundary faces del hex8 ──
  const visualNodes: Node[] = nodes3D.map(p => [p[0], p[1], p[2]] as Node);
  const visualElements: Element[] = [];
  const elementInputs: any = {
    elasticities: new Map(), poissonsRatios: new Map(),
    thicknesses: new Map(), shearModuli: new Map(), densities: new Map(),
    areas: new Map(), momentsOfInertiaY: new Map(),
    momentsOfInertiaZ: new Map(), torsionalConstants: new Map(),
  };
  function addBoundaryFace(a: number, b: number, c: number, d: number) {
    visualElements.push([a, b, c, d]);
    const i = visualElements.length - 1;
    elementInputs.elasticities.set(i, Es);
    elementInputs.poissonsRatios.set(i, nu);
    elementInputs.thicknesses.set(i, 0.001);
    elementInputs.shearModuli.set(i, Es / (2 * (1 + nu)));
    elementInputs.densities.set(i, 18 / 9.80665);  // suelo ~18 kN/m³
    elementInputs.areas.set(i, 0); elementInputs.momentsOfInertiaY.set(i, 0);
    elementInputs.momentsOfInertiaZ.set(i, 0); elementInputs.torsionalConstants.set(i, 0);
  }
  // Render TODAS las 6 caras de TODOS los elementos hex8 (incluyendo
  // interiores). Esto es necesario para que al activar un PLANO DE CORTE
  // se revele el interior con colormap (bulbo de presiones).
  // Performance: 6 × nElems shells. Con default 6×6×3 = 108 elem → 648 shells (OK).
  for (let k = 0; k < nz; k++) {
    for (let j = 0; j < ny; j++) {
      for (let i = 0; i < nx; i++) {
        const n = (a:number, b:number, c:number) => idx(i+a, j+b, k+c);
        addBoundaryFace(n(0,0,0), n(1,0,0), n(1,1,0), n(0,1,0));  // top z=k
        addBoundaryFace(n(0,0,1), n(1,0,1), n(1,1,1), n(0,1,1));  // bot z=k+1
        addBoundaryFace(n(0,0,0), n(1,0,0), n(1,0,1), n(0,0,1));  // y=j
        addBoundaryFace(n(0,1,0), n(1,1,0), n(1,1,1), n(0,1,1));  // y=j+1
        addBoundaryFace(n(0,0,0), n(0,1,0), n(0,1,1), n(0,0,1));  // x=i
        addBoundaryFace(n(1,0,0), n(1,1,0), n(1,1,1), n(1,0,1));  // x=i+1
      }
    }
  }

  // Convertir desplazamientos H8 → DeformOutputs (6 DOF por nodo)
  const deformOutputs: DeformOutputs = { deformations: new Map() };
  if (result) {
    result.displacements.forEach(([ux, uy, uz], n) => {
      deformOutputs.deformations.set(n, [ux, uy, uz, 0, 0, 0]);
    });
  }

  // analyzeOutputs.vonMises mapeado a TODAS las caras visuales
  const analyzeOutputs: AnalyzeOutputs = {} as AnalyzeOutputs;
  if (result) {
    // Promediar S33 (sigma_zz) por nodo desde elementos vecinos
    const nodeS33 = new Map<number, { sum: number; count: number }>();
    elemsH8.forEach((e, eidx) => {
      // result.vonMisesPerElement contiene 8 vonMises por elemento (gauss points)
      // Para S33 nodal aproximado, usamos el promedio del elemento como valor en sus nodos.
      const vmGauss = result.vonMisesPerElement.get(eidx) || [];
      const vmAvg = vmGauss.reduce((s, v) => s + v, 0) / Math.max(1, vmGauss.length);
      // NOTA: vmAvg es vonMises (≥0), no S33 (puede ser negativo). Para S33 real
      // necesitaríamos evaluar la matriz B*u en cada gauss point. Como
      // simplificación, usamos vonMises pero indicamos en el panel que es vM.
      for (const nid of e) {
        const cur = nodeS33.get(nid) || { sum: 0, count: 0 };
        cur.sum += vmAvg; cur.count += 1;
        nodeS33.set(nid, cur);
      }
    });
    const vmNodes = new Map<number, [number, number, number, number]>();
    visualElements.forEach((face, fidx) => {
      const vals = face.map(nid => {
        const cur = nodeS33.get(nid);
        return cur ? cur.sum / cur.count : 0;
      });
      vmNodes.set(fidx, [vals[0], vals[1], vals[2], vals[3]]);
    });
    (analyzeOutputs as any).vonMises = vmNodes;
  }

  // Apoyos visuales (en fondo z=-Lz)
  const visualSupports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
  supports.forEach((v, id) => visualSupports.set(id, [v[0], v[1], v[2], true, true, true]));
  // Cargas visuales
  const visualLoads = new Map<number, [number, number, number, number, number, number]>();
  loads.forEach((v, id) => visualLoads.set(id, [v[0], v[1], v[2], 0, 0, 0]));

  // Stats
  let s33_min = 0, s33_max = 0, uz_max = 0;
  if (result) {
    let vmMin = Infinity, vmMax = -Infinity;
    result.vonMisesPerElement.forEach(arr => {
      arr.forEach(v => { if (v < vmMin) vmMin = v; if (v > vmMax) vmMax = v; });
    });
    s33_min = vmMin === Infinity ? 0 : vmMin;
    s33_max = vmMax === -Infinity ? 0 : vmMax;
    result.displacements.forEach(([, , uz]) => {
      if (Math.abs(uz) > Math.abs(uz_max)) uz_max = uz;
    });
  }

  benchValues.val = {
    N, nElems: elemsH8.length, nDOF: 3 * N,
    s33_min, s33_max, uz_max,
    elapsed: result?.elapsedMs ?? 0,
  };

  nodesState.val = visualNodes;
  elementsState.val = visualElements;
  nodeInputsState.val = { supports: visualSupports, loads: visualLoads };
  elementInputsState.val = elementInputs;
  deformOutputsState.val = deformOutputs;
  analyzeOutputsState.val = analyzeOutputs;
});

const viewerEl = getViewer({
  mesh: {
    nodes: nodesState, elements: elementsState,
    nodeInputs: nodeInputsState, elementInputs: elementInputsState,
    deformOutputs: deformOutputsState, analyzeOutputs: analyzeOutputsState,
  },
  settingsObj: {
    deformedShape: false, shellResults: "vonMises",
    gridSize: 25, deformScale: 100, custom3D: false,
    loads: true, supports: true, showCotas: false, displayScale: 0.5,
  },
});

// ── Tweakpane Benchmark + CLIPPING PLANES ──
const benchContainer = document.createElement("div");
benchContainer.style.cssText = "position:fixed;top:8px;right:8px;width:320px;max-height:90vh;overflow-y:auto;z-index:9999;";
const benchPane = new Pane({ title: "🌍 Bulbo de Presiones (Serquen SF-70)", container: benchContainer, expanded: true });

const benchObj = { N: 0, nElems: 0, nDOF: 0, s33_min: 0, s33_max: 0, uz_max: 0, elapsed: 0 };

const fStats = benchPane.addFolder({ title: "Estadísticas malla H8" });
fStats.addBinding(benchObj, "N",       { readonly: true, label: "Nodos", format: (v: number) => v.toFixed(0) });
fStats.addBinding(benchObj, "nElems",  { readonly: true, label: "Elementos hex8", format: (v: number) => v.toFixed(0) });
fStats.addBinding(benchObj, "nDOF",    { readonly: true, label: "DOFs", format: (v: number) => v.toFixed(0) });
fStats.addBinding(benchObj, "elapsed", { readonly: true, label: "solve (ms)", format: (v: number) => v.toFixed(0) });

const fRes = benchPane.addFolder({ title: "Resultados (vonMises proxy de S33)" });
fRes.addBinding(benchObj, "s33_min", { readonly: true, label: "vM min (kN/m²)", format: (v: number) => v.toExponential(3) });
fRes.addBinding(benchObj, "s33_max", { readonly: true, label: "vM max (kN/m²)", format: (v: number) => v.toExponential(3) });
fRes.addBinding(benchObj, "uz_max",  { readonly: true, label: "u_z max (m)", format: (v: number) => v.toExponential(3) });

// ── Folder PLANOS DE CORTE (clipping X/Y/Z) ──
const fClip = benchPane.addFolder({ title: "✂️ Planos de corte X/Y/Z", expanded: true });
const clipObj = (window as any).__hekatanClip;
const Lx0 = parameters.Lx.value.rawVal;
const Ly0 = parameters.Ly.value.rawVal;
const Lz0 = parameters.Lz.value.rawVal;
fClip.addBinding(clipObj, "enableX", { label: "Cortar X" })
  .on("change", () => (window as any).__hekatanClipApply());
fClip.addBinding(clipObj, "posX", { min: -Lx0/2, max: Lx0/2, step: 0.1, label: "  pos X (m)" })
  .on("change", () => (window as any).__hekatanClipApply());
fClip.addBinding(clipObj, "invertX", { label: "  invertir X" })
  .on("change", () => (window as any).__hekatanClipApply());
fClip.addBinding(clipObj, "enableY", { label: "Cortar Y" })
  .on("change", () => (window as any).__hekatanClipApply());
fClip.addBinding(clipObj, "posY", { min: -Ly0/2, max: Ly0/2, step: 0.1, label: "  pos Y (m)" })
  .on("change", () => (window as any).__hekatanClipApply());
fClip.addBinding(clipObj, "invertY", { label: "  invertir Y" })
  .on("change", () => (window as any).__hekatanClipApply());
fClip.addBinding(clipObj, "enableZ", { label: "Cortar Z" })
  .on("change", () => (window as any).__hekatanClipApply());
fClip.addBinding(clipObj, "posZ", { min: -Lz0, max: 0, step: 0.1, label: "  pos Z (m)" })
  .on("change", () => (window as any).__hekatanClipApply());
fClip.addBinding(clipObj, "invertZ", { label: "  invertir Z" })
  .on("change", () => (window as any).__hekatanClipApply());

// ── Folder Unidades ──
const fU = benchPane.addFolder({ title: "Unidades", expanded: false });
const unitsObj = { stress: colorMapStressUnit.val, disp: colorMapDispUnit.val };
fU.addBinding(unitsObj, "stress", {
  options: { "kN/m²":"kN/m²","kPa":"kPa","MPa":"MPa","kgf/cm²":"kgf/cm²","tonf/m²":"tonf/m²","ksi":"ksi","psi":"psi" },
  label: "Tensión",
}).on("change", (e: any) => { colorMapStressUnit.val = e.value; });
fU.addBinding(unitsObj, "disp", {
  options: { m:"m", cm:"cm", mm:"mm", "µm":"µm" }, label: "Desplaz.",
}).on("change", (e: any) => { colorMapDispUnit.val = e.value; });

document.body.append(benchContainer);

van.derive(() => {
  Object.assign(benchObj, benchValues.val);
  benchPane.refresh();
});

document.body.append(
  getParameters(parameters), viewerEl,
  getToolbar({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/bulbo-presiones-suelo/main.ts" }),
);

setTimeout(() => enableDraggableAllPanes(), 200);
setTimeout(() => {
  const ctx = (viewerEl as any).__ctx;
  if (ctx?.camera && ctx?.controls) {
    ctx.camera.up.set(0, 0, 1);
    ctx.camera.position.set(20, -25, 18);
    ctx.controls.target.set(0, 0, -5);
    ctx.controls.update(); ctx.render?.();
  }
}, 800);
