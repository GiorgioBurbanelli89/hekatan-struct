/**
 * Conexión Viga–Columna CFT con DIAFRAGMA EXTERNO.
 *
 * Tipología: viga doble T (W-shape) conectada a columna CFT rectangular
 * mediante diafragma externo (anillo perimetral) que envuelve la columna
 * a la altura de los patines de la viga.
 *
 * Referencias:
 *   - CIDECT Design Guide 9 — Beam-to-column connections in HSS
 *   - Christian Cervantes (UNAM México) — investigación en conexiones
 *     viga-columna CFT con diafragma para zonas sísmicas
 *   - AISC 358-22 Chapter 12 — Through-diaphragm connections
 *
 * Componentes (todos shells Q4):
 *   - Columna CFT (HSS rectangular bc × hc, shell paredes)
 *   - Viga W (alma + patín superior + patín inferior)
 *   - Diafragmas externos: 2 placas anulares perimetrales a la columna
 *     a la altura de los patines de la viga (z_top_flange, z_bot_flange)
 *
 * Soldadura: nodos compartidos en interfaces vía dedup espacial.
 */
import van, { State } from "vanjs-core";
import { Pane } from "tweakpane";
import {
  Node, Element, NodeInputs, ElementInputs, DeformOutputs, AnalyzeOutputs,
} from "hekatan-fem";
import { analyze, deform } from "hekatan-fem";
import {
  getToolbar, getParameters, Parameters, getViewer,
  colorMapForceUnit, colorMapDispUnit, colorMapStressUnit, enableDraggableAllPanes,
} from "hekatan-ui";

const Es = 200e6, nu_s = 0.3, Gs = Es / (2 * (1 + nu_s)), rho_s = 78;

const parameters: Parameters = {
  // Columna CFT
  bc:    { value: van.state(0.40),  min: 0.25, max: 0.80, step: 0.05, label: "bc col (m)" },
  hc:    { value: van.state(0.40),  min: 0.25, max: 0.80, step: 0.05, label: "hc col (m)" },
  Lz:    { value: van.state(3.00),  min: 1.5,  max: 5.0,  step: 0.5,  label: "Lz col (m)" },
  t_col: { value: van.state(0.012), min: 0.006,max: 0.030,step: 0.002, label: "t pared col (m)" },
  // Viga W
  d_v:   { value: van.state(0.40),  min: 0.20, max: 0.70, step: 0.02, label: "d viga (m)" },
  bf_v:  { value: van.state(0.20),  min: 0.10, max: 0.40, step: 0.02, label: "bf viga (m)" },
  tf_v:  { value: van.state(0.018), min: 0.008,max: 0.040,step: 0.002, label: "tf patín (m)" },
  tw_v:  { value: van.state(0.012), min: 0.006,max: 0.025,step: 0.002, label: "tw alma (m)" },
  L_v:   { value: van.state(2.00),  min: 0.80, max: 4.00, step: 0.20, label: "L viga (m, voladizo)" },
  // Diafragma externo
  bd:    { value: van.state(0.10),  min: 0.04, max: 0.20, step: 0.02, label: "bd diafragma (m, ancho radial)" },
  td:    { value: van.state(0.020), min: 0.010,max: 0.040,step: 0.002, label: "td diafragma (m)" },
  // Mesh
  nx:    { value: van.state(4),     min: 2,    max: 8,    step: 2,    label: "nx col" },
  nz:    { value: van.state(8),     min: 4,    max: 14,   step: 2,    label: "nz col" },
  nv_x:  { value: van.state(8),     min: 4,    max: 14,   step: 2,    label: "nx viga" },
  nv_z:  { value: van.state(4),     min: 2,    max: 8,    step: 2,    label: "nz alma viga" },
  // Cargas
  P:     { value: van.state(50),    min: 0,    max: 300,  step: 10,   label: "P punta viga (kN, -Z)" },
};

const nodesState: State<Node[]>                  = van.state([]);
const elementsState: State<Element[]>            = van.state([]);
const nodeInputsState: State<NodeInputs>         = van.state({});
const elementInputsState: State<ElementInputs>   = van.state({});
const deformOutputsState: State<DeformOutputs>   = van.state({});
const analyzeOutputsState: State<AnalyzeOutputs> = van.state({});

const benchValues: State<{
  M_joint: number; A_d: number; sigma_d_an: number;
  vmMax: number; ratio: number;
}> = van.state({ M_joint: 0, A_d: 0, sigma_d_an: 0, vmMax: 0, ratio: 0 });

van.derive(() => {
  const bc = parameters.bc.value.val;
  const hc = parameters.hc.value.val;
  const Lz = parameters.Lz.value.val;
  const t_col = parameters.t_col.value.val;
  const d_v = parameters.d_v.value.val;
  const bf_v = parameters.bf_v.value.val;
  const tf_v = parameters.tf_v.value.val;
  const tw_v = parameters.tw_v.value.val;
  const L_v = parameters.L_v.value.val;
  const bd = parameters.bd.value.val;
  const td = parameters.td.value.val;
  const nx = Math.round(parameters.nx.value.val);
  const nz = Math.round(parameters.nz.value.val);
  const nv_x = Math.round(parameters.nv_x.value.val);
  const nv_z = Math.round(parameters.nv_z.value.val);
  const P = parameters.P.value.val;

  // ── Geometría ──
  // Columna en eje Z, base z=0, top z=Lz, sección bc(X) × hc(Y), centrada en (0,0)
  // Viga horizontal en +Y, conectada a la cara y=hc/2 de la columna a media altura z=Lz/2
  // Viga: alma vertical (ancho 0 en X, peralte d_v en Z), patín sup z=z_mid+d_v/2, inf z=z_mid-d_v/2
  // Diafragmas: 2 placas anulares en z_top_flange y z_bot_flange, anchas bd hacia afuera

  const z_mid = Lz / 2;
  const z_top_flange = z_mid + d_v / 2;
  const z_bot_flange = z_mid - d_v / 2;

  const nodes: Node[] = [];
  const nodeMap = new Map<string, number>();
  const elements: Element[] = [];
  const elasticities = new Map<number, number>();
  const poissonsRatios = new Map<number, number>();
  const densities = new Map<number, number>();
  const shearModuli = new Map<number, number>();
  const thicknesses = new Map<number, number>();
  const dummyA = new Map<number, number>();
  const dummyIz = new Map<number, number>();
  const dummyIy = new Map<number, number>();
  const dummyJ = new Map<number, number>();
  const KEY_DEC = 5;
  function addNode(x: number, y: number, z: number): number {
    const key = `${x.toFixed(KEY_DEC)},${y.toFixed(KEY_DEC)},${z.toFixed(KEY_DEC)}`;
    let id = nodeMap.get(key);
    if (id === undefined) {
      nodes.push([x, y, z]);
      id = nodes.length - 1;
      nodeMap.set(key, id);
    }
    return id;
  }
  function addShell(n0: number, n1: number, n2: number, n3: number, t: number) {
    elements.push([n0, n1, n2, n3]);
    const i = elements.length - 1;
    thicknesses.set(i, t);
    elasticities.set(i, Es);
    poissonsRatios.set(i, nu_s);
    densities.set(i, rho_s);
    shearModuli.set(i, Gs);
    dummyA.set(i, 0); dummyIz.set(i, 0); dummyIy.set(i, 0); dummyJ.set(i, 0);
  }

  // Z grid de la columna que incluye z_bot_flange, z_mid, z_top_flange como nodos
  // Para asegurar nodos en estas alturas críticas: construir z-list con ellos
  const zList: number[] = [];
  const zSet = new Set<string>();
  const addZ = (z: number) => { const k = z.toFixed(5); if (!zSet.has(k)) { zSet.add(k); zList.push(z); } };
  for (let k = 0; k <= nz; k++) addZ(k * Lz / nz);
  addZ(z_bot_flange);
  addZ(z_mid);
  addZ(z_top_flange);
  zList.sort((a, b) => a - b);

  // ── Columna HSS: 4 paredes verticales en x=±bc/2, y=±hc/2 ──
  // Cara y=+hc/2 (frontal, donde se conecta viga)
  const dx_col = bc / nx;
  const dy_col = hc / nx;
  const buildWall = (
    fixedAxis: "x" | "y", fixedVal: number,
    varAxis: "x" | "y", varDelta: number, varN: number,
    t: number,
  ) => {
    const grid: number[][] = [];
    for (let iz = 0; iz < zList.length; iz++) {
      const row: number[] = [];
      for (let iv = 0; iv <= varN; iv++) {
        const v = -((varN * varDelta) / 2) + iv * varDelta;
        const x = fixedAxis === "x" ? fixedVal : v;
        const y = fixedAxis === "y" ? fixedVal : v;
        row.push(addNode(x, y, zList[iz]));
      }
      grid.push(row);
    }
    for (let iz = 0; iz < zList.length - 1; iz++) {
      for (let iv = 0; iv < varN; iv++) {
        addShell(grid[iz][iv], grid[iz][iv+1], grid[iz+1][iv+1], grid[iz+1][iv], t);
      }
    }
    return grid;
  };
  buildWall("y", -hc / 2, "x", dx_col, nx, t_col);
  const wallFront = buildWall("y", hc / 2, "x", dx_col, nx, t_col);
  buildWall("x", -bc / 2, "y", dy_col, nx, t_col);
  buildWall("x", bc / 2, "y", dy_col, nx, t_col);

  // ── DIAFRAGMAS: 2 placas anulares en z_bot_flange y z_top_flange ──
  // Cada diafragma es un anillo rectangular: outer = (bc+2bd) × (hc+2bd), inner = bc × hc
  // Modelo simple: 4 rectángulos perimetrales (uno por lado de la columna)
  function buildDiaphragm(z: number) {
    // 4 rectángulos planos en z=const, alrededor de la columna
    // Lado +Y (frontal): de y=hc/2 a y=hc/2+bd, x=-bc/2-bd a x=bc/2+bd
    const outerHalfX = bc / 2 + bd;
    const outerHalfY = hc / 2 + bd;
    const meshD = 2;  // 2 subdivisiones radiales (interior↔exterior)
    // Simplificación: anillo en 4 rectángulos (lados N/S/E/W del tubo)
    // Lado +Y
    const yIn = hc / 2, yOut = outerHalfY;
    for (let iy = 0; iy < meshD; iy++) {
      const y0 = yIn + (iy / meshD) * (yOut - yIn);
      const y1 = yIn + ((iy + 1) / meshD) * (yOut - yIn);
      for (let ix = 0; ix < nx + 2; ix++) {
        const x0 = -outerHalfX + (ix / (nx + 2)) * (2 * outerHalfX);
        const x1 = -outerHalfX + ((ix + 1) / (nx + 2)) * (2 * outerHalfX);
        addShell(addNode(x0, y0, z), addNode(x1, y0, z), addNode(x1, y1, z), addNode(x0, y1, z), td);
      }
    }
    // Lado -Y (espejo)
    for (let iy = 0; iy < meshD; iy++) {
      const y0 = -yIn - (iy / meshD) * (yOut - yIn);
      const y1 = -yIn - ((iy + 1) / meshD) * (yOut - yIn);
      for (let ix = 0; ix < nx + 2; ix++) {
        const x0 = -outerHalfX + (ix / (nx + 2)) * (2 * outerHalfX);
        const x1 = -outerHalfX + ((ix + 1) / (nx + 2)) * (2 * outerHalfX);
        addShell(addNode(x0, y0, z), addNode(x1, y0, z), addNode(x1, y1, z), addNode(x0, y1, z), td);
      }
    }
    // Lado +X
    const xIn = bc / 2;
    for (let ix = 0; ix < meshD; ix++) {
      const x0 = xIn + (ix / meshD) * bd;
      const x1 = xIn + ((ix + 1) / meshD) * bd;
      for (let iy = 0; iy < nx; iy++) {
        const y0 = -hc / 2 + (iy / nx) * hc;
        const y1 = -hc / 2 + ((iy + 1) / nx) * hc;
        addShell(addNode(x0, y0, z), addNode(x1, y0, z), addNode(x1, y1, z), addNode(x0, y1, z), td);
      }
    }
    // Lado -X
    for (let ix = 0; ix < meshD; ix++) {
      const x0 = -xIn - (ix / meshD) * bd;
      const x1 = -xIn - ((ix + 1) / meshD) * bd;
      for (let iy = 0; iy < nx; iy++) {
        const y0 = -hc / 2 + (iy / nx) * hc;
        const y1 = -hc / 2 + ((iy + 1) / nx) * hc;
        addShell(addNode(x0, y0, z), addNode(x1, y0, z), addNode(x1, y1, z), addNode(x0, y1, z), td);
      }
    }
  }
  buildDiaphragm(z_bot_flange);
  buildDiaphragm(z_top_flange);

  // ── VIGA W: alma vertical + 2 patines horizontales ──
  // Viga en plano X=0 (alma centrada), extensión en +Y desde y=hc/2 hasta y=hc/2+L_v
  // Encuentra el índice z más cercano a z_top_flange y z_bot_flange en la malla del alma
  const dy_v = L_v / nv_x;
  const dz_v_alma = d_v / nv_z;

  // Alma (plano X=0)
  const almaGrid: number[][] = [];
  for (let iz = 0; iz <= nv_z; iz++) {
    const row: number[] = [];
    const z = z_bot_flange + iz * dz_v_alma;
    for (let iy = 0; iy <= nv_x; iy++) {
      const y = hc / 2 + iy * dy_v;
      row.push(addNode(0, y, z));
    }
    almaGrid.push(row);
  }
  for (let iz = 0; iz < nv_z; iz++) {
    for (let iy = 0; iy < nv_x; iy++) {
      addShell(almaGrid[iz][iy], almaGrid[iz][iy+1], almaGrid[iz+1][iy+1], almaGrid[iz+1][iy], tw_v);
    }
  }

  // Patín superior (plano Z=z_top_flange)
  const buildFlange = (z: number) => {
    // mesh bf_v (X) × L_v (Y), ny pares para nodo central en X=0
    const nx_f = 4;  // par
    const dx_f = bf_v / nx_f;
    const grid: number[][] = [];
    for (let iy = 0; iy <= nv_x; iy++) {
      const row: number[] = [];
      const y = hc / 2 + iy * dy_v;
      for (let ix = 0; ix <= nx_f; ix++) {
        const x = -bf_v / 2 + ix * dx_f;
        // Si x=0, reusar nodo del alma
        if (Math.abs(x) < 1e-7) {
          // Encuentra fila del alma en este Z
          if (Math.abs(z - z_top_flange) < 1e-6) row.push(almaGrid[nv_z][iy]);
          else if (Math.abs(z - z_bot_flange) < 1e-6) row.push(almaGrid[0][iy]);
          else row.push(addNode(0, y, z));
        } else {
          row.push(addNode(x, y, z));
        }
      }
      grid.push(row);
    }
    for (let iy = 0; iy < nv_x; iy++) {
      for (let ix = 0; ix < nx_f; ix++) {
        addShell(grid[iy][ix], grid[iy][ix+1], grid[iy+1][ix+1], grid[iy+1][ix], tf_v);
      }
    }
  };
  buildFlange(z_top_flange);
  buildFlange(z_bot_flange);

  void wallFront;

  // ── BCs: empotrar columna en base z=0 y top z=Lz ──
  const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
  nodes.forEach((p, id) => {
    const onCol = Math.abs(p[0]) <= bc / 2 + 1e-6 && Math.abs(p[1]) <= hc / 2 + 1e-6;
    if (onCol && (Math.abs(p[2]) < 1e-6 || Math.abs(p[2] - Lz) < 1e-6)) {
      supports.set(id, [true, true, true, true, true, true]);
    }
  });

  // ── Carga: P en la punta de la viga (y = hc/2 + L_v) ──
  const tipNodes: number[] = [];
  nodes.forEach((p, id) => {
    if (Math.abs(p[1] - (hc / 2 + L_v)) < 1e-6 &&
        Math.abs(p[0]) <= bf_v / 2 + 1e-6 &&
        p[2] >= z_bot_flange - 1e-6 && p[2] <= z_top_flange + 1e-6) tipNodes.push(id);
  });
  const fz = -P / Math.max(1, tipNodes.length);
  const loads = new Map<number, [number, number, number, number, number, number]>();
  for (const id of tipNodes) loads.set(id, [0, 0, fz, 0, 0, 0]);

  const nodeInputs: NodeInputs = { supports, loads };
  const elementInputs: ElementInputs = {
    elasticities, poissonsRatios, densities, shearModuli, thicknesses,
    areas: dummyA, momentsOfInertiaY: dummyIy, momentsOfInertiaZ: dummyIz, torsionalConstants: dummyJ,
  };

  let deformOutputs: DeformOutputs = {} as DeformOutputs;
  let analyzeOutputs: AnalyzeOutputs = {} as AnalyzeOutputs;
  try {
    deformOutputs = deform(nodes, elements, nodeInputs, elementInputs);
    analyzeOutputs = analyze(nodes, elements, elementInputs, deformOutputs);
    console.log(`Conexión diafragma: ${nodes.length} nodos, ${elements.length} shells`);
  } catch (e: any) {
    console.warn("Conexión diafragma:", e?.message ?? e);
  }

  // ── BENCHMARK CIDECT/Cervantes: tensión en diafragma ──
  // Momento en la junta = P · L_v
  const M_joint = P * L_v;
  // Fuerza en cada patín (par): F_flange = M / d_v
  const F_flange = M_joint / d_v;
  // Área efectiva del diafragma: longitud perimetral × espesor td
  // Aproximación CIDECT: área anular ≈ 2·(bc+hc)·td
  const A_d = 2 * (bc + hc) * td;
  const sigma_d_an = F_flange / A_d;

  // σ vM max medido
  let vmMax = 0;
  const vmMap = (analyzeOutputs as any)?.vonMises as Map<number, number[]> | undefined;
  if (vmMap) vmMap.forEach((arr) => arr.forEach((v) => { if (v > vmMax) vmMax = v; }));
  const ratio = vmMax / Math.max(1, sigma_d_an);

  benchValues.val = { M_joint, A_d, sigma_d_an, vmMax, ratio };

  nodesState.val = nodes;
  elementsState.val = elements;
  nodeInputsState.val = nodeInputs;
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
    deformedShape: true, shellResults: "vonMises",
    gridSize: 4, deformScale: 100,
    loads: true, supports: true, displayScale: 0.4,
  },
});

const benchContainer = document.createElement("div");
benchContainer.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
const benchPane = new Pane({ title: "🧪 Conexión diafragma (CIDECT)", container: benchContainer, expanded: true });
const benchObj = { M_joint: 0, A_d: 0, sigma_d_an: 0, vmMax: 0, ratio: 0 };
const fmtSci = (v: number) => v.toExponential(3);

const fAn = benchPane.addFolder({ title: "Demanda (CIDECT/Cervantes)" });
fAn.addBinding(benchObj, "M_joint",     { readonly: true, label: "M en junta (kN·m)", format: fmtSci });
fAn.addBinding(benchObj, "A_d",         { readonly: true, label: "A diafragma (m²)", format: fmtSci });
fAn.addBinding(benchObj, "sigma_d_an",  { readonly: true, label: "σ analítico (kN/m²)", format: fmtSci });

const fH = benchPane.addFolder({ title: "Hekatan (medido)" });
fH.addBinding(benchObj, "vmMax",        { readonly: true, label: "σ vM max (kN/m²)", format: fmtSci });
fH.addBinding(benchObj, "ratio",        { readonly: true, label: "ratio Hek/Anal", format: (v: number) => v.toFixed(2) });

const fU = benchPane.addFolder({ title: "Unidades", expanded: false });
const unitsObj = { stress: colorMapStressUnit.val, disp: colorMapDispUnit.val };
fU.addBinding(unitsObj, "stress", { options: { "kN/m²":"kN/m²","MPa":"MPa","kgf/cm²":"kgf/cm²","ksi":"ksi" }, label: "σ" })
  .on("change", (e: any) => { colorMapStressUnit.val = e.value; });
fU.addBinding(unitsObj, "disp", { options: { m:"m",cm:"cm",mm:"mm" }, label: "u" })
  .on("change", (e: any) => { colorMapDispUnit.val = e.value; });

document.body.append(benchContainer);

van.derive(() => {
  const v = benchValues.val;
  Object.assign(benchObj, v);
  benchPane.refresh();
});

document.body.append(
  getParameters(parameters), viewerEl,
  getToolbar({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/conexion-diafragma-cft/main.ts" }),
);

setTimeout(() => enableDraggableAllPanes(), 200);
setTimeout(() => {
  const ctx = (viewerEl as any).__ctx;
  if (ctx?.camera && ctx?.controls) {
    ctx.camera.up.set(0, 0, 1);
    ctx.camera.position.set(2.5, 3.5, 2.5);
    ctx.controls.target.set(0, 1.0, 1.5);
    ctx.controls.update();
    ctx.render?.();
  }
}, 800);
