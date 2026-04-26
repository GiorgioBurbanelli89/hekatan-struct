/**
 * Cubo sólido FEM 3D — primer ejemplo con elementos H8 (8-node hexahedral).
 *
 * Implementación pura TypeScript inline (ver h8.ts) — NO requiere recompilar
 * WASM. Sirve para validar el solver Hekatan H8 contra:
 *   - CalculiX (.inp generado para validación cruzada)
 *   - Code Aster (.comm)
 *   - FEniCS (Python, requiere WSL)
 *   - SAP2000 (CSI)
 *   - Calcpad CLI (cálculo de esfuerzos en sólidos)
 *
 * Caso canónico: cubo cantilever empotrado en x=0, carga distribuida en x=L.
 * Solución analítica simple para validación: σ_axial = F/A.
 *
 * Mesh estructurado: nx × ny × nz elementos H8.
 *
 * Performance:
 *   - 4×4×4 = 64 elementos, 125 nodos, 375 DOF → <500 ms
 *   - 8×8×8 = 512 elementos, 729 nodos, 2187 DOF → 5-15 s
 *   - >10×10×10 → no recomendado en TS puro (compilar WASM)
 */
import van, { State } from "vanjs-core";
import * as THREE from "three";
import { hex8Solve, type Vec3, type Hex8 } from "./h8";
import {
  Node, Element, NodeInputs, ElementInputs, DeformOutputs, AnalyzeOutputs,
} from "hekatan-fem";
import { getToolbar, getParameters, Parameters, getViewer } from "hekatan-ui";

// Convención COLUMNA: eje largo = Z (vertical), Lx × Ly = base cuadrada, Lz = altura
const parameters: Parameters = {
  Lx:       { value: van.state(0.50),  min: 0.25, max: 2.0,  step: 0.05, label: "Lx (m, ancho)" },
  Ly:       { value: van.state(0.50),  min: 0.25, max: 2.0,  step: 0.05, label: "Ly (m, profundidad)" },
  Lz:       { value: van.state(2.00),  min: 0.5,  max: 5.0,  step: 0.25, label: "Lz (m, altura COLUMNA)" },
  nx:       { value: van.state(3),     min: 2,    max: 8,    step: 1,    label: "Mesh nx" },
  ny:       { value: van.state(3),     min: 2,    max: 8,    step: 1,    label: "Mesh ny" },
  nz:       { value: van.state(6),     min: 2,    max: 12,   step: 1,    label: "Mesh nz (vertical)" },
  E:        { value: van.state(200e6), min: 25e6, max: 220e6, step: 5e6, label: "E (kN/m²)" },
  nu:       { value: van.state(0.30),  min: 0.0,  max: 0.49, step: 0.01, label: "ν (Poisson)" },
  P_top:    { value: van.state(-50),   min: -500, max: 0,    step: 10,   label: "Carga top (kN, vertical)" },
};

// Estados Hekatan-compatibles (solo para visualizar — el solver real es h8.ts)
const nodesState: State<Node[]>                  = van.state([]);
const elementsState: State<Element[]>            = van.state([]);
const nodeInputsState: State<NodeInputs>         = van.state({});
const elementInputsState: State<ElementInputs>   = van.state({});
const deformOutputsState: State<DeformOutputs>   = van.state({});
const analyzeOutputsState: State<AnalyzeOutputs> = van.state({});
const objects3DState: State<THREE.Object3D[]>    = van.state([]);

van.derive(() => {
  const Lx = parameters.Lx.value.val;
  const Ly = parameters.Ly.value.val;
  const Lz = parameters.Lz.value.val;
  const nx = Math.round(parameters.nx.value.val);
  const ny = Math.round(parameters.ny.value.val);
  const nz = Math.round(parameters.nz.value.val);
  const E = parameters.E.value.val;
  const nu = parameters.nu.value.val;
  const P_top = parameters.P_top.value.val;

  // ── 1. MESH H8 estructurado ──
  // Generar nodos en grid (nx+1)(ny+1)(nz+1)
  const dx = Lx / nx, dy = Ly / ny, dz = Lz / nz;
  const idx = (i: number, j: number, k: number) =>
    i * (ny + 1) * (nz + 1) + j * (nz + 1) + k;
  const nodes3D: Vec3[] = [];
  for (let i = 0; i <= nx; i++) {
    for (let j = 0; j <= ny; j++) {
      for (let k = 0; k <= nz; k++) {
        nodes3D.push([i * dx, j * dy, k * dz]);
      }
    }
  }
  // Conectividad H8 (orden estándar: bottom face CCW + top face CCW)
  const elemsH8: Hex8[] = [];
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      for (let k = 0; k < nz; k++) {
        elemsH8.push([
          idx(i, j, k),
          idx(i + 1, j, k),
          idx(i + 1, j + 1, k),
          idx(i, j + 1, k),
          idx(i, j, k + 1),
          idx(i + 1, j, k + 1),
          idx(i + 1, j + 1, k + 1),
          idx(i, j + 1, k + 1),
        ]);
      }
    }
  }

  // ── 2. BCs: empotrar la BASE de la columna (z=0) ──
  // Z = elevación (vertical), X-Y = plano horizontal del suelo
  const supports = new Map<number, [boolean, boolean, boolean]>();
  for (let i = 0; i <= nx; i++) {
    for (let j = 0; j <= ny; j++) {
      supports.set(idx(i, j, 0), [true, true, true]);
    }
  }

  // Carga axial vertical en la cara TOP de la columna (z=Lz)
  const topNodes: number[] = [];
  for (let i = 0; i <= nx; i++) {
    for (let j = 0; j <= ny; j++) topNodes.push(idx(i, j, nz));
  }
  const loads = new Map<number, [number, number, number]>();
  const fz = P_top / topNodes.length;
  for (const id of topNodes) loads.set(id, [0, 0, fz]);

  // ── 3. SOLVE H8 ──
  const N = nodes3D.length;
  const NDOF = 3 * N;
  console.log(`Cubo H8: ${N} nodos × 3 DOF = ${NDOF} DOFs, ${elemsH8.length} elementos`);

  let result;
  let solverError: string | null = null;
  try {
    result = hex8Solve({
      nodes: nodes3D,
      elements: elemsH8,
      E, nu,
      supports,
      loads,
    });
    console.log(`H8 resuelto en ${result.elapsedMs.toFixed(0)} ms`);
  } catch (e: any) {
    solverError = e?.message ?? String(e);
    console.warn("H8 solver:", solverError);
    result = null;
  }

  // ── 4. Construir visualización (shells de las caras del cubo) ──
  // Cada elemento H8 contribuye 6 caras (Q4) a la malla visual.
  // Pero como muchas caras son interiores y se anulan, solo dibujamos las
  // exteriores (boundary). Es lo que IDEA StatiCa muestra al usuario.
  const visualNodes: Node[] = nodes3D.map((p) => [p[0], p[1], p[2]] as Node);
  const visualElements: Element[] = [];
  const elementInputs: any = {
    elasticities: new Map(),
    poissonsRatios: new Map(),
    thicknesses: new Map(),
    shearModuli: new Map(),
    densities: new Map(),
    areas: new Map(),
    momentsOfInertiaY: new Map(),
    momentsOfInertiaZ: new Map(),
    torsionalConstants: new Map(),
  };
  // Boundary faces detection: una cara es boundary si pertenece a un elemento donde i=0 o i=nx (etc.)
  function addBoundaryFace(a: number, b: number, c: number, d: number) {
    visualElements.push([a, b, c, d]);
    const i = visualElements.length - 1;
    elementInputs.elasticities.set(i, E);
    elementInputs.poissonsRatios.set(i, nu);
    elementInputs.thicknesses.set(i, 0.001);  // shell decorativo
    elementInputs.shearModuli.set(i, E / (2 * (1 + nu)));
    elementInputs.densities.set(i, 78);
    elementInputs.areas.set(i, 0);
    elementInputs.momentsOfInertiaY.set(i, 0);
    elementInputs.momentsOfInertiaZ.set(i, 0);
    elementInputs.torsionalConstants.set(i, 0);
  }
  // Caras exteriores
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      // Cara z=0 (bottom)
      addBoundaryFace(idx(i, j, 0), idx(i + 1, j, 0), idx(i + 1, j + 1, 0), idx(i, j + 1, 0));
      // Cara z=Lz (top)
      addBoundaryFace(idx(i, j, nz), idx(i + 1, j, nz), idx(i + 1, j + 1, nz), idx(i, j + 1, nz));
    }
  }
  for (let i = 0; i < nx; i++) {
    for (let k = 0; k < nz; k++) {
      // Cara y=0 (front)
      addBoundaryFace(idx(i, 0, k), idx(i + 1, 0, k), idx(i + 1, 0, k + 1), idx(i, 0, k + 1));
      // Cara y=Ly (back)
      addBoundaryFace(idx(i, ny, k), idx(i + 1, ny, k), idx(i + 1, ny, k + 1), idx(i, ny, k + 1));
    }
  }
  for (let j = 0; j < ny; j++) {
    for (let k = 0; k < nz; k++) {
      // Cara x=0 (empotramiento)
      addBoundaryFace(idx(0, j, k), idx(0, j + 1, k), idx(0, j + 1, k + 1), idx(0, j, k + 1));
      // Cara x=Lx (carga)
      addBoundaryFace(idx(nx, j, k), idx(nx, j + 1, k), idx(nx, j + 1, k + 1), idx(nx, j, k + 1));
    }
  }

  // Convertir desplazamientos H8 → DeformOutputs Hekatan-style (6 DOF: ux, uy, uz, rx, ry, rz)
  const deformOutputs: DeformOutputs = { deformations: new Map() };
  if (result) {
    result.displacements.forEach(([ux, uy, uz], n) => {
      deformOutputs.deformations.set(n, [ux, uy, uz, 0, 0, 0]);
    });
  }

  // analyzeOutputs: usar shellResults membraneXX para mostrar von Mises
  // Pero las caras exteriores no se mapean directamente a elementos H8...
  // Como simplificación, asignar a cada cara visual el vonMises promedio del
  // elemento H8 al que pertenece.
  const analyzeOutputs: AnalyzeOutputs = {} as AnalyzeOutputs;
  if (result) {
    const vonMisesNodes = new Map<number, [number, number, number, number]>();
    // Promediar vonMises por nodo desde elementos vecinos
    const nodeVm = new Map<number, { sum: number; count: number }>();
    elemsH8.forEach((e, eidx) => {
      const vmGauss = result.vonMisesPerElement.get(eidx) || [];
      const vmAvg = vmGauss.reduce((s, v) => s + v, 0) / Math.max(1, vmGauss.length);
      for (const nid of e) {
        const cur = nodeVm.get(nid) || { sum: 0, count: 0 };
        cur.sum += vmAvg; cur.count += 1;
        nodeVm.set(nid, cur);
      }
    });
    // Para cada cara visual Q4, el array de 4 valores es el vm en cada nodo
    visualElements.forEach((face, fidx) => {
      const vals = face.map((nid) => {
        const cur = nodeVm.get(nid);
        return cur ? cur.sum / cur.count : 0;
      });
      vonMisesNodes.set(fidx, [vals[0], vals[1], vals[2], vals[3]]);
    });
    (analyzeOutputs as any).vonMises = vonMisesNodes;
  }

  // Apoyos visuales (rojos en base z=0)
  const visualSupports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
  for (let i = 0; i <= nx; i++) {
    for (let j = 0; j <= ny; j++) {
      visualSupports.set(idx(i, j, 0), [true, true, true, true, true, true]);
    }
  }
  // Cargas visuales (en top z=Lz)
  const visualLoads = new Map<number, [number, number, number, number, number, number]>();
  for (const id of topNodes) visualLoads.set(id, [0, 0, fz, 0, 0, 0]);

  console.log(
    `Solid cube H8: ${N} nodos, ${elemsH8.length} hexa, ${visualElements.length} faces visibles`
  );
  if (result && result.elapsedMs) {
    let maxUz = 0;
    result.displacements.forEach(([, , uz]) => { if (Math.abs(uz) > Math.abs(maxUz)) maxUz = uz; });
    console.log(`  ε max vm = ${
      Math.max(...Array.from(result.vonMisesPerElement.values()).flat()).toFixed(0)
    } kN/m² | uz_tip ≈ ${maxUz.toExponential(3)} m | solve ${result.elapsedMs.toFixed(0)}ms`);
  }
  if (solverError) {
    console.error("Solver H8 falló:", solverError);
  }

  nodesState.val = visualNodes;
  elementsState.val = visualElements;
  nodeInputsState.val = { supports: visualSupports, loads: visualLoads };
  elementInputsState.val = elementInputs;
  deformOutputsState.val = deformOutputs;
  analyzeOutputsState.val = analyzeOutputs;
});

const viewerEl = getViewer({
  mesh: {
    nodes: nodesState,
    elements: elementsState,
    nodeInputs: nodeInputsState,
    elementInputs: elementInputsState,
    deformOutputs: deformOutputsState,
    analyzeOutputs: analyzeOutputsState,
  },
  objects3D: objects3DState,
  settingsObj: {
    deformedShape: true,
    shellResults: "vonMises",
    gridSize: 4,
    deformScale: 200,
  },
});

document.body.append(
  getParameters(parameters),
  viewerEl,
  getToolbar({
    sourceCode:
      "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/solid-cube-fem/main.ts",
  }),
);

setTimeout(() => {
  const ctx = (viewerEl as any).__ctx;
  if (ctx?.camera && ctx?.controls) {
    ctx.camera.up.set(0, 0, 1);
    // Vista isométrica de columna vertical (Lz=2m altura, Lx=Ly=0.5m base)
    ctx.camera.position.set(3, -3, 2);
    ctx.controls.target.set(0.25, 0.25, 1.0);  // centro de la columna
    ctx.controls.update();
    ctx.render?.();
  }
}, 800);
