/**
 * Placa Base anclada con Columna H (W-shape) — estilo IDEA StatiCa CBFEM.
 *
 * Componentes modelados:
 *   - Placa base (shell Q4 horizontal)
 *   - Columna H (3 piezas shell: patín frontal, patín trasero, alma)
 *   - 4 pernos de anclaje (frame elements verticales) con apoyos empotrados
 *     en su extremo inferior (representan el embebimiento al pedestal)
 *
 * Cargas: axial compresión Pu (kN) + momento Mu (kN·m) aplicados en el top
 * de la columna stub.
 *
 * Patrón awatif v2: todo en main.ts (parámetros + geometría + viewer).
 *
 * Referencias normativas:
 *   - AISC 360-22 §J8 (column base plates)
 *   - ACI 318-22 §17 (anchor bolt design)
 *   - IDEA StatiCa CBFEM methodology (visual reference)
 */
import van, { State } from "vanjs-core";
import {
  Node, Element, NodeInputs, ElementInputs, DeformOutputs, AnalyzeOutputs,
} from "hekatan-fem";
import { analyze, deform } from "hekatan-fem";
import { getToolbar, getParameters, Parameters, getViewer } from "hekatan-ui";

// Material acero (kN/m², kN/m³)
const Es = 200e6;
const nu_s = 0.3;
const Gs = Es / (2 * (1 + nu_s));
const rho_s = 78;

const parameters: Parameters = {
  // ── Placa base ──
  B:        { value: van.state(0.50),  min: 0.25, max: 1.20, step: 0.02, label: "B placa (m, eje X)" },
  H:        { value: van.state(0.50),  min: 0.25, max: 1.20, step: 0.02, label: "H placa (m, eje Y)" },
  t_plate:  { value: van.state(0.025), min: 0.012, max: 0.060, step: 0.002, label: "Espesor placa (m)" },
  // ── Columna H (W-shape) ──
  d_col:    { value: van.state(0.30),  min: 0.18, max: 0.50, step: 0.02, label: "d columna (m)" },
  bf_col:   { value: van.state(0.25),  min: 0.15, max: 0.40, step: 0.01, label: "bf columna (m)" },
  tf_col:   { value: van.state(0.022), min: 0.012, max: 0.040, step: 0.002, label: "tf patín (m)" },
  tw_col:   { value: van.state(0.014), min: 0.008, max: 0.025, step: 0.001, label: "tw alma (m)" },
  L_col:    { value: van.state(0.50),  min: 0.30, max: 1.50, step: 0.05, label: "L stub columna (m)" },
  // ── Pernos de anclaje (4 en esquinas) ──
  d_bolt:   { value: van.state(0.024), min: 0.012, max: 0.050, step: 0.002, label: "Ø perno (m)" },
  L_bolt:   { value: van.state(0.30),  min: 0.15, max: 0.60, step: 0.02, label: "L embebido (m)" },
  edge:     { value: van.state(0.07),  min: 0.03, max: 0.20, step: 0.01, label: "Dist al borde (m)" },
  // ── Cargas (defaults moderados — la placa de 25mm con Fy=250 MPa apenas plastifica con Pu=300 kN, Mu=30 kN·m) ──
  Pu:       { value: van.state(300),   min: 0,    max: 5000, step: 25,   label: "Pu compresión (kN)" },
  Mu:       { value: van.state(30),    min: 0,    max: 800,  step: 5,    label: "Mu momento (kN·m)" },
  // ── Malla ──
  nx:       { value: van.state(12),    min: 6,    max: 24,   step: 2,    label: "Mesh nx (placa)" },
  ny:       { value: van.state(12),    min: 6,    max: 24,   step: 2,    label: "Mesh ny (placa)" },
};

const nodesState: State<Node[]>                  = van.state([]);
const elementsState: State<Element[]>            = van.state([]);
const nodeInputsState: State<NodeInputs>         = van.state({});
const elementInputsState: State<ElementInputs>   = van.state({});
const deformOutputsState: State<DeformOutputs>   = van.state({});
const analyzeOutputsState: State<AnalyzeOutputs> = van.state({});

van.derive(() => {
  const B = parameters.B.value.val;
  const H = parameters.H.value.val;
  const t_plate = parameters.t_plate.value.val;
  const d_col = parameters.d_col.value.val;
  const bf_col = parameters.bf_col.value.val;
  const tf_col = parameters.tf_col.value.val;
  const tw_col = parameters.tw_col.value.val;
  const L_col = parameters.L_col.value.val;
  const d_bolt = parameters.d_bolt.value.val;
  const L_bolt = parameters.L_bolt.value.val;
  const edge = parameters.edge.value.val;
  const Pu = parameters.Pu.value.val;
  const Mu = parameters.Mu.value.val;
  const nx = Math.round(parameters.nx.value.val);
  const ny = Math.round(parameters.ny.value.val);

  const nodes: Node[] = [];
  const elements: Element[] = [];
  const thicknesses = new Map<number, number>();
  const elasticities = new Map<number, number>();
  const poissonsRatios = new Map<number, number>();
  const densities = new Map<number, number>();
  const areas = new Map<number, number>();
  const Iz = new Map<number, number>();
  const Iy = new Map<number, number>();
  const J = new Map<number, number>();
  const shearModuli = new Map<number, number>();

  function addNode(x: number, y: number, z: number): number {
    nodes.push([x, y, z]);
    return nodes.length - 1;
  }
  function addShell(n0: number, n1: number, n2: number, n3: number, t: number) {
    elements.push([n0, n1, n2, n3]);
    const i = elements.length - 1;
    thicknesses.set(i, t);
    elasticities.set(i, Es);
    poissonsRatios.set(i, nu_s);
    densities.set(i, rho_s);
    areas.set(i, 0);
    Iy.set(i, 0); Iz.set(i, 0); J.set(i, 0);
    shearModuli.set(i, Gs);
  }
  function addFrame(n0: number, n1: number, A: number, I: number, Jt: number) {
    elements.push([n0, n1]);
    const i = elements.length - 1;
    elasticities.set(i, Es);
    shearModuli.set(i, Gs);
    poissonsRatios.set(i, nu_s);
    densities.set(i, rho_s);
    areas.set(i, A);
    Iy.set(i, I); Iz.set(i, I); J.set(i, Jt);
    thicknesses.set(i, 0);
  }

  // ── 1. PLACA BASE (Q4 mesh nx × ny) ──
  // Centrada en (0, 0, 0), plano XY, espesor t_plate
  const dx = B / nx, dy = H / ny;
  const plateGrid: number[][] = [];
  for (let j = 0; j <= ny; j++) {
    const row: number[] = [];
    const y = -H / 2 + j * dy;
    for (let i = 0; i <= nx; i++) {
      const x = -B / 2 + i * dx;
      row.push(addNode(x, y, 0));
    }
    plateGrid.push(row);
  }
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      addShell(
        plateGrid[j][i], plateGrid[j][i + 1],
        plateGrid[j + 1][i + 1], plateGrid[j + 1][i],
        t_plate,
      );
    }
  }

  // Helper: encontrar nodo del grid de placa más cercano a (x, y)
  function snapToPlate(x: number, y: number): number {
    let best = -1;
    let dmin = Infinity;
    for (let j = 0; j <= ny; j++) {
      for (let i = 0; i <= nx; i++) {
        const idx = plateGrid[j][i];
        const [nx_, ny_, nz_] = nodes[idx];
        const d = Math.hypot(nx_ - x, ny_ - y);
        if (d < dmin) { dmin = d; best = idx; }
      }
    }
    return best;
  }

  // ── 2. COLUMNA H (3 piezas shell SOLDADAS) ──
  // Patín frontal en x=+d_col/2, patín trasero en x=-d_col/2, alma en plano XZ con y=0
  // CLAVE: el alma comparte nodos con los patines en su punto medio (y=0)
  // → simula la soldadura física entre alma y patines.
  // nyFlange debe ser PAR para tener un nodo exacto en y=0 (middle).
  const nzCol = 6;
  const nyFlange = 4;          // par → middle iy = nyFlange/2 = 2
  const nxWeb = 3;
  const flangeMidIy = nyFlange / 2;

  const xF = +d_col / 2 - tf_col / 2;
  const xB = -d_col / 2 + tf_col / 2;

  // Patín frontal grid (z, y)
  const frontGrid: number[][] = [];
  for (let iz = 0; iz <= nzCol; iz++) {
    const z = (iz / nzCol) * L_col + 0; // desde top placa hacia arriba
    const row: number[] = [];
    for (let iy = 0; iy <= nyFlange; iy++) {
      const y = -bf_col / 2 + (iy * bf_col) / nyFlange;
      // Nivel z=0: snap al grid de la placa
      if (iz === 0) {
        row.push(snapToPlate(xF, y));
      } else {
        row.push(addNode(xF, y, z));
      }
    }
    frontGrid.push(row);
  }
  for (let iz = 0; iz < nzCol; iz++) {
    for (let iy = 0; iy < nyFlange; iy++) {
      addShell(
        frontGrid[iz][iy], frontGrid[iz][iy + 1],
        frontGrid[iz + 1][iy + 1], frontGrid[iz + 1][iy],
        tf_col,
      );
    }
  }

  // Patín trasero
  const backGrid: number[][] = [];
  for (let iz = 0; iz <= nzCol; iz++) {
    const z = (iz / nzCol) * L_col;
    const row: number[] = [];
    for (let iy = 0; iy <= nyFlange; iy++) {
      const y = -bf_col / 2 + (iy * bf_col) / nyFlange;
      if (iz === 0) {
        row.push(snapToPlate(xB, y));
      } else {
        row.push(addNode(xB, y, z));
      }
    }
    backGrid.push(row);
  }
  for (let iz = 0; iz < nzCol; iz++) {
    for (let iy = 0; iy < nyFlange; iy++) {
      addShell(
        backGrid[iz][iy], backGrid[iz][iy + 1],
        backGrid[iz + 1][iy + 1], backGrid[iz + 1][iy],
        tf_col,
      );
    }
  }

  // Alma (plano XZ con y=0, espesor tw_col)
  // SOLDADURA: el alma comparte nodos con los patines en y=0 (su línea media)
  //   - ix=0      → mismo nodo que back flange en iy=flangeMidIy
  //   - ix=nxWeb  → mismo nodo que front flange en iy=flangeMidIy
  // Esto crea continuidad estructural simulando la soldadura física.
  const webGrid: number[][] = [];
  for (let iz = 0; iz <= nzCol; iz++) {
    const z = (iz / nzCol) * L_col;
    const row: number[] = [];
    for (let ix = 0; ix <= nxWeb; ix++) {
      const x = xB + (ix * (xF - xB)) / nxWeb;
      if (ix === 0) {
        // SOLDADURA con patín trasero (compartir nodo middle)
        row.push(backGrid[iz][flangeMidIy]);
      } else if (ix === nxWeb) {
        // SOLDADURA con patín frontal (compartir nodo middle)
        row.push(frontGrid[iz][flangeMidIy]);
      } else if (iz === 0) {
        row.push(snapToPlate(x, 0));
      } else {
        row.push(addNode(x, 0, z));
      }
    }
    webGrid.push(row);
  }
  for (let iz = 0; iz < nzCol; iz++) {
    for (let ix = 0; ix < nxWeb; ix++) {
      addShell(
        webGrid[iz][ix], webGrid[iz][ix + 1],
        webGrid[iz + 1][ix + 1], webGrid[iz + 1][ix],
        tw_col,
      );
    }
  }

  // ── 3. PERNOS DE ANCLAJE (4 en esquinas) ──
  // Empotrados en el extremo inferior (z = -L_bolt, simulan el embebido)
  const A_bolt = Math.PI * d_bolt * d_bolt / 4;
  const I_bolt = Math.PI * Math.pow(d_bolt, 4) / 64;
  const J_bolt = 2 * I_bolt;

  const boltPositions: [number, number][] = [
    [-B / 2 + edge, -H / 2 + edge],   // SW
    [+B / 2 - edge, -H / 2 + edge],   // SE
    [+B / 2 - edge, +H / 2 - edge],   // NE
    [-B / 2 + edge, +H / 2 - edge],   // NW
  ];

  const boltAnchorIds: number[] = [];   // nodos al fondo (z=-L_bolt) — se empotran
  const boltTopIds: number[] = [];      // nodos en la placa (z=0)

  for (const [bx, by] of boltPositions) {
    const topNode = snapToPlate(bx, by);
    const anchorNode = addNode(bx, by, -L_bolt);
    boltTopIds.push(topNode);
    boltAnchorIds.push(anchorNode);
    addFrame(topNode, anchorNode, A_bolt, I_bolt, J_bolt);
  }

  // ── 4. APOYOS ──
  // Empotramiento en los 4 nodos al fondo de los pernos
  const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
  const fix6: [boolean, boolean, boolean, boolean, boolean, boolean] = [true, true, true, true, true, true];
  for (const id of boltAnchorIds) supports.set(id, fix6);

  // ── 5. CARGAS ──
  // Pu (compresión) + Mu (momento) aplicadas en el top de la columna
  // Distribuir Pu entre los 12 nodos del top de la columna (4 patin front, 4 patin back, 4 web)
  const topNodes: number[] = [];
  for (let iy = 0; iy <= nyFlange; iy++) topNodes.push(frontGrid[nzCol][iy]);
  for (let iy = 0; iy <= nyFlange; iy++) topNodes.push(backGrid[nzCol][iy]);
  for (let ix = 1; ix < nxWeb; ix++) topNodes.push(webGrid[nzCol][ix]);

  const loads = new Map<number, [number, number, number, number, number, number]>();
  const fz = -Pu / topNodes.length;
  for (const id of topNodes) {
    loads.set(id, [0, 0, fz, 0, 0, 0]);
  }
  // Mu: aplicar como par de fuerzas axiales en patines (M = ΔP × d_col)
  const dP = Mu / d_col / (nyFlange + 1);
  for (let iy = 0; iy <= nyFlange; iy++) {
    const fId = frontGrid[nzCol][iy];
    const bId = backGrid[nzCol][iy];
    const cur1 = loads.get(fId) || [0, 0, 0, 0, 0, 0];
    loads.set(fId, [cur1[0], cur1[1], cur1[2] + dP, cur1[3], cur1[4], cur1[5]]);
    const cur2 = loads.get(bId) || [0, 0, 0, 0, 0, 0];
    loads.set(bId, [cur2[0], cur2[1], cur2[2] - dP, cur2[3], cur2[4], cur2[5]]);
  }

  const nodeInputs: NodeInputs = { supports, loads };
  const elementInputs: ElementInputs = {
    elasticities, shearModuli, areas,
    momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy, torsionalConstants: J,
    densities, poissonsRatios, thicknesses,
  };

  let deformOutputs: DeformOutputs = {} as DeformOutputs;
  let analyzeOutputs: AnalyzeOutputs = {} as AnalyzeOutputs;
  try {
    deformOutputs = deform(nodes, elements, nodeInputs, elementInputs);
    analyzeOutputs = analyze(nodes, elements, elementInputs, deformOutputs);
    console.log(
      `Placa base H: ${nodes.length} nodos, ${elements.length} elementos | ` +
      `Pu=${Pu}kN, Mu=${Mu}kN·m | t_plate=${(t_plate * 1000).toFixed(0)}mm`,
    );
  } catch (e: any) {
    console.warn("Placa base deform/analyze:", e?.message ?? e);
  }

  nodesState.val = nodes;
  elementsState.val = elements;
  nodeInputsState.val = nodeInputs;
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
  settingsObj: {
    deformedShape: true,
    shellResults: "vonMises",
    gridSize: 1,           // grid 1m (modelo de ~0.5m)
    deformScale: 20,       // escalar deformada para visibilidad (sin distorsionar)
  },
});

document.body.append(
  getParameters(parameters),
  viewerEl,
  getToolbar({
    sourceCode:
      "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-h/main.ts",
  }),
);

// ── Auto-fit camera al modelo (modelo es ~0.5m, default camera está lejos) ──
setTimeout(() => {
  const ctx = (viewerEl as any).__ctx;
  if (ctx?.camera && ctx?.controls) {
    ctx.camera.up.set(0, 0, 1);
    ctx.camera.position.set(2.0, -2.0, 1.2);
    ctx.controls.target.set(0, 0, 0.25);
    ctx.controls.update();
    ctx.render?.();
  }
}, 800);
