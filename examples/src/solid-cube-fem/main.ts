/**
 * Unión columna–viga de CONCRETO modelada con elementos H8 sólidos.
 *
 * Geometría:
 *   - Columna vertical (eje Z), centrada en (0,0), de Lx_col × Ly_col × Lz
 *   - Viga horizontal (en +Y) en mitad de la columna (z = Lz/2),
 *     ancho W_beam (eje X), peralte H_beam (eje Z), longitud L_beam (eje Y)
 *
 * Apoyos:
 *   - Columna empotrada en BASE (z=0) y TOPE (z=Lz) — entrepiso típico
 *
 * Cargas:
 *   - Punto vertical -Z en el extremo libre de la viga (y = Ly_col/2 + L_beam)
 *
 * Material: concreto E=25 GPa, ν=0.20.
 *
 * Validación analítica: cantilever beam con E-B → δ_tip = P·L³/(3·E·I)
 * con I = W_beam · H_beam³ / 12 (flexión sobre eje X, plano YZ).
 *
 * H8 puro TS — ver h8.ts. NO requiere recompilar WASM.
 *
 * Mesh dedup por coordenada espacial (key=x,y,z 4 dec) para que la viga
 * comparta nodos con la columna en la cara y=Ly_col/2.
 */
import van, { State } from "vanjs-core";
import * as THREE from "three";
import { Pane } from "tweakpane";
import { hex8Solve, type Vec3, type Hex8 } from "./h8";
import {
  Node, Element, NodeInputs, ElementInputs, DeformOutputs, AnalyzeOutputs,
} from "hekatan-fem";
import { getToolbar, getParameters, Parameters, getViewer, colorMapForceUnit, colorMapDispUnit } from "hekatan-ui";

// Defaults aligned para que beam-grid coincida con column-grid (dedup limpio)
const parameters: Parameters = {
  // Columna
  Lx_col:   { value: van.state(0.40),  min: 0.20, max: 0.80, step: 0.10, label: "Lx col (m)" },
  Ly_col:   { value: van.state(0.40),  min: 0.20, max: 0.80, step: 0.10, label: "Ly col (m)" },
  Lz:       { value: van.state(3.00),  min: 1.5,  max: 6.0,  step: 0.50, label: "Altura col Lz (m)" },
  // Viga (cross section W×H, voladizo L)
  W_beam:   { value: van.state(0.20),  min: 0.10, max: 0.40, step: 0.10, label: "W viga (m, ancho)" },
  H_beam:   { value: van.state(0.50),  min: 0.25, max: 1.00, step: 0.25, label: "H viga (m, peralte)" },
  L_beam:   { value: van.state(1.50),  min: 0.50, max: 3.00, step: 0.25, label: "L viga (m, voladizo)" },
  // Mesh (col_dx, col_dz quedan determinados por Lx_col/nx_col, Lz/nz)
  nx_col:   { value: van.state(4),     min: 2,    max: 6,    step: 2,    label: "nx col" },
  ny_col:   { value: van.state(4),     min: 2,    max: 6,    step: 2,    label: "ny col" },
  nz:       { value: van.state(12),    min: 6,    max: 18,   step: 2,    label: "nz col" },
  ny_b:     { value: van.state(6),     min: 2,    max: 12,   step: 1,    label: "ny viga" },
  // Material concreto
  E:        { value: van.state(25e6),  min: 15e6, max: 40e6, step: 1e6,  label: "E concreto (kN/m²)" },
  nu:       { value: van.state(0.20),  min: 0.0,  max: 0.30, step: 0.01, label: "ν concreto" },
  // Carga: punto en extremo libre de la viga (sólo la viga; columna a 2 apoyos)
  P_tip:    { value: van.state(-30),   min: -200, max: 200,  step: 10,   label: "P tip viga (kN, vertical)" },
};

// Estados Hekatan-compatibles
const nodesState: State<Node[]>                  = van.state([]);
const elementsState: State<Element[]>            = van.state([]);
const nodeInputsState: State<NodeInputs>         = van.state({});
const elementInputsState: State<ElementInputs>   = van.state({});
const deformOutputsState: State<DeformOutputs>   = van.state({});
const analyzeOutputsState: State<AnalyzeOutputs> = van.state({});
const objects3DState: State<THREE.Object3D[]>    = van.state([]);

// ── Solid Results: dropdown para elegir qué campo visualizar en las caras H8 ──
type SolidField =
  | "vonMises"
  | "sigmaXX" | "sigmaYY" | "sigmaZZ"
  | "tauXY"   | "tauYZ"   | "tauXZ"
  | "ux"      | "uy"      | "uz";
const solidResultMode: State<SolidField> = van.state("vonMises");
// Cache de campos por nodo (computado en main derive, leído en derive secundario)
const nodeFieldsState: State<Record<string, Map<number, number>>> = van.state({});
const visualElementsCache: State<Element[]> = van.state([]);

// ── Live benchmark: H8 vs Euler-Bernoulli + Timoshenko + flexib. columna ──
// IMPORTANTE: E-B asume empotramiento RÍGIDO. En col+viga real, H8 captura
// efectos 3D que E-B no contempla:
//   1) Cortante Timoshenko (L/h pequeño)
//   2) Rotación de la columna en el joint (M = P·L_beam → θ_col)
//   3) Warping 3D del joint
// El benchmark "honesto" compara H8 vs (E-B + Timoshenko + θ_col·L_beam).
const benchValues: State<{
  P: number; L_beam: number; I_beam: number;
  delta_EB: number;          // Euler-Bernoulli puro (rigid wall)
  delta_shear: number;       // corrección Timoshenko
  delta_col: number;         // rotación columna en joint
  delta_total_an: number;    // analítico mejorado = EB + shear + col
  delta_he: number;          // H8 medido
  errEBpct: number;          // % vs E-B puro (educativo)
  errTotalPct: number;       // % vs analítico mejorado (real)
  elapsed: number;
}> = van.state({
  P: 0, L_beam: 0, I_beam: 0,
  delta_EB: 0, delta_shear: 0, delta_col: 0, delta_total_an: 0,
  delta_he: 0, errEBpct: 0, errTotalPct: 0, elapsed: 0,
});

van.derive(() => {
  const Lx_col = parameters.Lx_col.value.val;
  const Ly_col = parameters.Ly_col.value.val;
  const Lz = parameters.Lz.value.val;
  const W_beam = parameters.W_beam.value.val;
  const H_beam = parameters.H_beam.value.val;
  const L_beam = parameters.L_beam.value.val;
  const nx_col = Math.round(parameters.nx_col.value.val);
  const ny_col = Math.round(parameters.ny_col.value.val);
  const nz = Math.round(parameters.nz.value.val);
  const ny_b = Math.round(parameters.ny_b.value.val);
  const E = parameters.E.value.val;
  const nu = parameters.nu.value.val;
  const P_tip = parameters.P_tip.value.val;

  // ── 1. Mesh H8 con dedup por coordenada (para que viga comparte nodos con col) ──
  const nodes3D: Vec3[] = [];
  const nodeMap = new Map<string, number>();
  const elemsH8: Hex8[] = [];
  const KEY_DEC = 4;
  function getOrAddNode(x: number, y: number, z: number): number {
    const key = `${x.toFixed(KEY_DEC)},${y.toFixed(KEY_DEC)},${z.toFixed(KEY_DEC)}`;
    let id = nodeMap.get(key);
    if (id === undefined) {
      nodes3D.push([x, y, z]);
      id = nodes3D.length - 1;
      nodeMap.set(key, id);
    }
    return id;
  }
  function addBox(
    x0: number, y0: number, z0: number,
    x1: number, y1: number, z1: number,
    nxx: number, nyy: number, nzz: number,
  ) {
    const dx = (x1 - x0) / nxx;
    const dy = (y1 - y0) / nyy;
    const dz = (z1 - z0) / nzz;
    for (let k = 0; k < nzz; k++) {
      for (let j = 0; j < nyy; j++) {
        for (let i = 0; i < nxx; i++) {
          elemsH8.push([
            getOrAddNode(x0 + i * dx,       y0 + j * dy,       z0 + k * dz),
            getOrAddNode(x0 + (i + 1) * dx, y0 + j * dy,       z0 + k * dz),
            getOrAddNode(x0 + (i + 1) * dx, y0 + (j + 1) * dy, z0 + k * dz),
            getOrAddNode(x0 + i * dx,       y0 + (j + 1) * dy, z0 + k * dz),
            getOrAddNode(x0 + i * dx,       y0 + j * dy,       z0 + (k + 1) * dz),
            getOrAddNode(x0 + (i + 1) * dx, y0 + j * dy,       z0 + (k + 1) * dz),
            getOrAddNode(x0 + (i + 1) * dx, y0 + (j + 1) * dy, z0 + (k + 1) * dz),
            getOrAddNode(x0 + i * dx,       y0 + (j + 1) * dy, z0 + (k + 1) * dz),
          ]);
        }
      }
    }
  }

  // Snap viga a grid de columna para dedup limpio
  const col_dx = Lx_col / nx_col;
  const col_dz = Lz / nz;
  // # de celdas viga en x y z (al menos 2 para tener bending decente)
  let nx_b = Math.max(2, Math.round(W_beam / col_dx));
  // misma paridad que nx_col para que beam-x quede centrado y aligned
  if (((nx_col - nx_b) & 1) !== 0) nx_b = Math.max(2, nx_b - 1);
  let nz_b = Math.max(2, Math.round(H_beam / col_dz));
  // beam height debe ser múltiplo par de col_dz para centrado en z=Lz/2
  if ((nz_b & 1) !== 0) nz_b = Math.max(2, nz_b - 1);
  const W_b_snap = nx_b * col_dx;
  const H_b_snap = nz_b * col_dz;
  // z_mid_col: nodo central de la columna (k = nz/2)
  const k_mid = Math.round(nz / 2);
  const z_mid = k_mid * col_dz;
  const z_b_bot = z_mid - H_b_snap / 2;
  const z_b_top = z_mid + H_b_snap / 2;

  // Columna centrada en (0,0): x∈[-Lx/2, Lx/2], y∈[-Ly/2, Ly/2]
  const x_col_0 = -Lx_col / 2, x_col_1 = Lx_col / 2;
  const y_col_0 = -Ly_col / 2, y_col_1 = Ly_col / 2;
  addBox(x_col_0, y_col_0, 0, x_col_1, y_col_1, Lz, nx_col, ny_col, nz);

  // Viga: x∈[-W/2, W/2], y∈[Ly_col/2, Ly_col/2 + L_beam], z∈[z_b_bot, z_b_top]
  const x_b_0 = -W_b_snap / 2, x_b_1 = W_b_snap / 2;
  const y_b_0 = y_col_1,        y_b_1 = y_col_1 + L_beam;
  addBox(x_b_0, y_b_0, z_b_bot, x_b_1, y_b_1, z_b_top, nx_b, ny_b, nz_b);

  // ── 2. BCs: empotrar BASE (z=0) y TOPE (z=Lz) de la columna ──
  const supports = new Map<number, [boolean, boolean, boolean]>();
  // Iterar todos los nodos y marcar los de z=0 y z=Lz que pertenecen a columna
  nodes3D.forEach((p, id) => {
    const inCol = (p[0] >= x_col_0 - 1e-6 && p[0] <= x_col_1 + 1e-6 &&
                   p[1] >= y_col_0 - 1e-6 && p[1] <= y_col_1 + 1e-6);
    if (inCol && (Math.abs(p[2]) < 1e-6 || Math.abs(p[2] - Lz) < 1e-6)) {
      supports.set(id, [true, true, true]);
    }
  });

  // ── 3. Carga puntual -Z en el extremo libre de la viga (y = y_b_1) ──
  // Distribuir P_tip en los nodos del extremo de la viga
  const tipNodes: number[] = [];
  nodes3D.forEach((p, id) => {
    const onBeamTip =
      Math.abs(p[1] - y_b_1) < 1e-6 &&
      p[0] >= x_b_0 - 1e-6 && p[0] <= x_b_1 + 1e-6 &&
      p[2] >= z_b_bot - 1e-6 && p[2] <= z_b_top + 1e-6;
    if (onBeamTip) tipNodes.push(id);
  });
  const loads = new Map<number, [number, number, number]>();
  const fz_tip = tipNodes.length > 0 ? P_tip / tipNodes.length : 0;
  for (const id of tipNodes) loads.set(id, [0, 0, fz_tip]);

  // ── 4. Solve H8 ──
  const N = nodes3D.length;
  console.log(`Col+Viga H8: ${N} nodos × 3 DOF = ${3 * N} DOFs, ${elemsH8.length} elementos`);
  let result;
  let solverError: string | null = null;
  try {
    result = hex8Solve({ nodes: nodes3D, elements: elemsH8, E, nu, supports, loads });
    console.log(`H8 resuelto en ${result.elapsedMs.toFixed(0)} ms`);
  } catch (e: any) {
    solverError = e?.message ?? String(e);
    console.warn("H8 solver:", solverError);
    result = null;
  }

  // ── 5. Visualización: caras boundary de TODOS los elementos H8 ──
  // Para cada elemento, agregamos sus 6 caras Q4. Las caras interiores se
  // duplican y deberían anularse, pero como simplificación dibujamos todas
  // (el viewer las renderiza igual; las internas quedan ocultas tras las externas).
  const visualNodes: Node[] = nodes3D.map((p) => [p[0], p[1], p[2]] as Node);
  const visualElements: Element[] = [];
  const elementInputs: any = {
    elasticities: new Map(), poissonsRatios: new Map(),
    thicknesses: new Map(), shearModuli: new Map(), densities: new Map(),
    areas: new Map(), momentsOfInertiaY: new Map(),
    momentsOfInertiaZ: new Map(), torsionalConstants: new Map(),
  };
  // Detección de caras boundary: cuento cuántas veces aparece cada cara;
  // si aparece 1 vez = boundary, si 2 = interior.
  const faceCount = new Map<string, { face: [number, number, number, number]; count: number }>();
  function faceKey(nids: number[]): string {
    return [...nids].sort((a, b) => a - b).join(",");
  }
  function addFace(a: number, b: number, c: number, d: number) {
    const key = faceKey([a, b, c, d]);
    const cur = faceCount.get(key);
    if (cur) cur.count += 1;
    else faceCount.set(key, { face: [a, b, c, d], count: 1 });
  }
  for (const el of elemsH8) {
    const [n0, n1, n2, n3, n4, n5, n6, n7] = el;
    addFace(n0, n1, n2, n3); // bottom (k=0)
    addFace(n4, n5, n6, n7); // top    (k=1)
    addFace(n0, n1, n5, n4); // front  (j=0)
    addFace(n3, n2, n6, n7); // back   (j=1)
    addFace(n0, n3, n7, n4); // left   (i=0)
    addFace(n1, n2, n6, n5); // right  (i=1)
  }
  function pushBoundaryFace(face: [number, number, number, number]) {
    visualElements.push(face);
    const i = visualElements.length - 1;
    elementInputs.elasticities.set(i, E);
    elementInputs.poissonsRatios.set(i, nu);
    elementInputs.thicknesses.set(i, 0.001);
    elementInputs.shearModuli.set(i, E / (2 * (1 + nu)));
    elementInputs.densities.set(i, 24 / 9.80665);  // concreto
    elementInputs.areas.set(i, 0);
    elementInputs.momentsOfInertiaY.set(i, 0);
    elementInputs.momentsOfInertiaZ.set(i, 0);
    elementInputs.torsionalConstants.set(i, 0);
  }
  for (const { face, count } of faceCount.values()) {
    if (count === 1) pushBoundaryFace(face);
  }

  // Convertir desplazamientos H8 → DeformOutputs (6 DOF: ux, uy, uz, rx, ry, rz)
  const deformOutputs: DeformOutputs = { deformations: new Map() };
  if (result) {
    result.displacements.forEach(([ux, uy, uz], n) => {
      deformOutputs.deformations.set(n, [ux, uy, uz, 0, 0, 0]);
    });
  }

  // ── Compute ALL field values per node (vonMises, σ_xx..τ_xz, ux,uy,uz) ──
  // Promedio simple por nodo desde elementos vecinos (todos los Gauss).
  const nodeFields: Record<string, Map<number, number>> = {
    vonMises: new Map(), sigmaXX: new Map(), sigmaYY: new Map(), sigmaZZ: new Map(),
    tauXY: new Map(), tauYZ: new Map(), tauXZ: new Map(),
    ux: new Map(), uy: new Map(), uz: new Map(),
  };
  if (result) {
    const sums: Record<string, Map<number, { sum: number; count: number }>> = {
      vonMises: new Map(), sigmaXX: new Map(), sigmaYY: new Map(), sigmaZZ: new Map(),
      tauXY: new Map(), tauYZ: new Map(), tauXZ: new Map(),
    };
    elemsH8.forEach((e, eidx) => {
      const vmList = result.vonMisesPerElement.get(eidx) || [];
      const sigList = result.stressPerElement.get(eidx) || [];
      // promedios sobre los 8 puntos Gauss
      const vmAvg = vmList.reduce((s, v) => s + v, 0) / Math.max(1, vmList.length);
      const sigAvg = [0, 0, 0, 0, 0, 0];
      for (const s of sigList) {
        for (let k = 0; k < 6; k++) sigAvg[k] += s[k];
      }
      for (let k = 0; k < 6; k++) sigAvg[k] /= Math.max(1, sigList.length);
      const fieldVals: Record<string, number> = {
        vonMises: vmAvg,
        sigmaXX: sigAvg[0], sigmaYY: sigAvg[1], sigmaZZ: sigAvg[2],
        tauXY: sigAvg[3], tauYZ: sigAvg[4], tauXZ: sigAvg[5],
      };
      for (const nid of e) {
        for (const k of Object.keys(sums)) {
          const cur = sums[k].get(nid) || { sum: 0, count: 0 };
          cur.sum += fieldVals[k]; cur.count += 1;
          sums[k].set(nid, cur);
        }
      }
    });
    for (const k of Object.keys(sums)) {
      sums[k].forEach((v, nid) => {
        nodeFields[k].set(nid, v.sum / Math.max(1, v.count));
      });
    }
    // Desplazamientos directos por nodo
    result.displacements.forEach(([ux, uy, uz], nid) => {
      nodeFields.ux.set(nid, ux);
      nodeFields.uy.set(nid, uy);
      nodeFields.uz.set(nid, uz);
    });
  }
  // Cachear para que el derive secundario reaccione al dropdown solidResultMode
  nodeFieldsState.val = nodeFields;
  visualElementsCache.val = visualElements;

  // Apoyos visuales
  const visualSupports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
  supports.forEach((_, id) => visualSupports.set(id, [true, true, true, true, true, true]));
  // Cargas visuales (en tipNodes)
  const visualLoads = new Map<number, [number, number, number, number, number, number]>();
  for (const id of tipNodes) visualLoads.set(id, [0, 0, fz_tip, 0, 0, 0]);

  if (result) {
    let maxUz = 0, tipUzAvg = 0;
    for (const id of tipNodes) {
      const u = result.displacements.get(id);
      if (u) {
        tipUzAvg += u[2];
        if (Math.abs(u[2]) > Math.abs(maxUz)) maxUz = u[2];
      }
    }
    tipUzAvg /= Math.max(1, tipNodes.length);

    // ── BENCHMARK físicamente correcto: H8 vs (E-B + Timoshenko + col flex) ──
    // E-B puro es lower bound: asume pared rígida e ignora cortante.
    // El modelo H8 captura:
    //   (a) Flexión pura: δ_EB = P·L³/(3·E·I_beam)
    //   (b) Cortante Timoshenko: δ_shear = P·L/(κ·G·A_beam), κ=5/6 rect.
    //   (c) Rotación columna en joint: θ_col = M·Lz/(16·E·I_col) (col fixed-fixed
    //       con M aplicado en mitad), δ_col = θ_col · L_beam.
    const I_beam = (W_b_snap * H_b_snap * H_b_snap * H_b_snap) / 12;
    const A_beam = W_b_snap * H_b_snap;
    const G = E / (2 * (1 + nu));
    const kappa = 5 / 6;  // shear correction factor para sección rectangular
    const delta_EB = (P_tip * L_beam * L_beam * L_beam) / (3 * E * I_beam);
    const delta_shear = (P_tip * L_beam) / (kappa * G * A_beam);
    // Columna fixed-fixed con M = P·L_beam aplicado en midspan:
    //   θ_midspan = M · Lz / (16 · E · I_col)
    const I_col = (Lx_col * Ly_col * Ly_col * Ly_col) / 12;  // bending about X axis
    const M_joint = P_tip * L_beam;
    const theta_col = (M_joint * Lz) / (16 * E * I_col);
    const delta_col = theta_col * L_beam;
    const delta_total_an = delta_EB + delta_shear + delta_col;

    const errEBpct = Math.abs(tipUzAvg - delta_EB) / Math.abs(delta_EB || 1) * 100;
    const errTotalPct = Math.abs(tipUzAvg - delta_total_an) / Math.abs(delta_total_an || 1) * 100;

    console.log("  ─── BENCHMARK col+viga H8 ───");
    console.log(`  δ E-B puro (rigid wall) = ${delta_EB.toExponential(4)} m`);
    console.log(`  δ + Timoshenko shear   = ${(delta_EB + delta_shear).toExponential(4)} m`);
    console.log(`  δ + col flex (joint)   = ${delta_total_an.toExponential(4)} m`);
    console.log(`  δ Hekatan H8 (medido)  = ${tipUzAvg.toExponential(4)} m`);
    console.log(`  Δ vs E-B puro = ${errEBpct.toFixed(2)}% (esperado 20-40% extra)`);
    console.log(`  Δ vs total analítico = ${errTotalPct.toFixed(2)}% (esperado <15%)`);

    benchValues.val = {
      P: P_tip, L_beam, I_beam,
      delta_EB, delta_shear, delta_col, delta_total_an,
      delta_he: tipUzAvg,
      errEBpct, errTotalPct,
      elapsed: result.elapsedMs,
    };
    void maxUz;
  }
  if (solverError) console.error("Solver H8 falló:", solverError);

  nodesState.val = visualNodes;
  elementsState.val = visualElements;
  nodeInputsState.val = { supports: visualSupports, loads: visualLoads };
  elementInputsState.val = elementInputs;
  deformOutputsState.val = deformOutputs;
  // analyzeOutputsState lo setea el derive secundario abajo según solidResultMode
});

// ── Derive secundario: mapea (nodeFields × solidResultMode) → analyzeOutputs ──
// Reactivo a:
//   - cambio de modo (dropdown Tweakpane "Solid results")
//   - cambio de geometría (parámetros) → recalcula nodeFields
// También override de la unidad del colorbar para que diga "m" en
// desplazamientos y "kN/m²" en tensiones (el canal interno es vonMises).
// (Lógica de unidades ahora vive dentro de getViewer.ts — detecta solidResults)
van.derive(() => {
  const fields = nodeFieldsState.val;
  const ve = visualElementsCache.val;
  const mode = solidResultMode.val;
  const fieldMap = fields[mode];
  if (!fieldMap || fieldMap.size === 0 || ve.length === 0) {
    analyzeOutputsState.val = {} as AnalyzeOutputs;
    return;
  }
  const out = new Map<number, [number, number, number, number]>();
  ve.forEach((face, fidx) => {
    const v0 = fieldMap.get(face[0]) ?? 0;
    const v1 = fieldMap.get(face[1]) ?? 0;
    const v2 = fieldMap.get(face[2]) ?? 0;
    const v3 = fieldMap.get(face[3]) ?? 0;
    out.set(fidx, [v0, v1, v2, v3]);
  });
  // El viewer lee analyzeOutputs.vonMises cuando shellResults="vonMises".
  // Reusamos esa key para todos los modos (el dropdown nuestro es el oficial).
  // El viewer detecta solidResults != "none" y usa unidades correctas:
  //   stress → kN/m², displacement → m (ver getViewer.ts).
  analyzeOutputsState.val = { vonMises: out } as any as AnalyzeOutputs;
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
    // Este ejemplo es 100% H8 sólidos — NO hay shells reales.
    // Shell results queda en "none"; el dropdown "Solid results" maneja todo.
    shellResults: "none",
    solidResults: "vonMises",
    gridSize: 4,
    deformScale: 100,
    loads: true,
    supports: true,
    displayScale: 0.4,
  },
});

// ── Wire dropdown Tweakpane "Solid results" → estado local + activar render ──
// Internamente el render de las caras Q4 boundary usa el canal shellResults:
// "vonMises". Cuando el usuario elige cualquier campo sólido ≠ none, activamos
// shellResults="vonMises" automáticamente para que el viewer pinte las caras.
setTimeout(() => {
  const settings = (viewerEl as any).__settings;
  if (settings?.solidResults) {
    solidResultMode.val = (settings.solidResults.val !== "none"
      ? settings.solidResults.val
      : "vonMises") as SolidField;
    // Si el dropdown arranca "none", forzar shellResults="none" también
    if (settings.solidResults.val === "none") settings.shellResults.val = "none";
    else settings.shellResults.val = "vonMises";

    van.derive(() => {
      const v = settings.solidResults.val as string;
      if (v === "none") {
        settings.shellResults.val = "none";  // apaga rendering
      } else {
        settings.shellResults.val = "vonMises";  // activa rendering vía canal Q4
        const mode = v as SolidField;
        if (mode !== solidResultMode.val) solidResultMode.val = mode;
      }
    });
  }
}, 100);

// ── Panel BENCHMARK con TWEAKPANE (consistente con Settings, scrolleable) ──
const benchContainer = document.createElement("div");
benchContainer.style.cssText = `
  position: fixed; top: 8px; right: 8px;
  width: 280px; max-height: 85vh; overflow-y: auto;
  z-index: 9999;
`;
const benchPane = new Pane({
  title: "🧪 Benchmark — col+viga H8",
  container: benchContainer,
  expanded: true,
});
// Objeto reactivo que Tweakpane refresca con .refresh() cuando cambia
const benchObj = {
  delta_EB: 0, delta_shear: 0, delta_col: 0, delta_total_an: 0,
  delta_he: 0,
  errTotalPct: 0, errEBpct: 0, status: "—",
  I_beam: 0, L_beam: 0, P: 0, elapsed: 0,
};
const fmtSci = (v: number) => v.toExponential(3);
const fmtPct = (v: number) => v.toFixed(2);
const fmtFix = (v: number) => v.toFixed(2);

const fAn = benchPane.addFolder({ title: "Analítico (E-B + Timoshenko + col flex)" });
fAn.addBinding(benchObj, "delta_EB",       { readonly: true, label: "δ E-B (m)",        format: fmtSci });
fAn.addBinding(benchObj, "delta_shear",    { readonly: true, label: "δ Timoshenko (m)", format: fmtSci });
fAn.addBinding(benchObj, "delta_col",      { readonly: true, label: "δ col joint (m)",  format: fmtSci });
fAn.addBinding(benchObj, "delta_total_an", { readonly: true, label: "δ TOTAL (m)",      format: fmtSci });

const fH = benchPane.addFolder({ title: "Hekatan H8 (medido)" });
fH.addBinding(benchObj, "delta_he",    { readonly: true, label: "δ tip (m)",      format: fmtSci });
fH.addBinding(benchObj, "errTotalPct", { readonly: true, label: "Δ vs total (%)", format: fmtPct });
fH.addBinding(benchObj, "errEBpct",    { readonly: true, label: "Δ vs E-B (%)",   format: fmtPct });
fH.addBinding(benchObj, "status",      { readonly: true, label: "Status" });

const fP = benchPane.addFolder({ title: "Parámetros / runtime", expanded: false });
fP.addBinding(benchObj, "I_beam",  { readonly: true, label: "I_beam (m⁴)", format: fmtSci });
fP.addBinding(benchObj, "L_beam",  { readonly: true, label: "L_beam (m)",  format: fmtFix });
fP.addBinding(benchObj, "P",       { readonly: true, label: "P tip (kN)",  format: fmtFix });
fP.addBinding(benchObj, "elapsed", { readonly: true, label: "Solve (ms)",  format: (v: number) => v.toFixed(0) });

// ── Folder Unidades: cambia unidades del color map (force kN/tonf/kip, disp m/mm/cm) ──
const fUnits = benchPane.addFolder({ title: "Unidades color map", expanded: true });
const unitsObj = { force: colorMapForceUnit.val, disp: colorMapDispUnit.val };
fUnits.addBinding(unitsObj, "force", {
  options: { kN: "kN", tonf: "tonf", kip: "kip" },
  label: "Fuerza/tensión",
}).on("change", (e) => { colorMapForceUnit.val = e.value as any; });
fUnits.addBinding(unitsObj, "disp", {
  options: { m: "m", cm: "cm", mm: "mm", "µm": "µm" },
  label: "Desplazamiento",
}).on("change", (e) => { colorMapDispUnit.val = e.value as any; });

const fNotes = benchPane.addFolder({ title: "Pendientes", expanded: false });
const notesEl = document.createElement("div");
notesEl.style.cssText = "font:10.5px ui-monospace,monospace;color:#aaa;padding:6px 8px;line-height:1.5;";
notesEl.textContent =
  "· Patch test (constant strain)\n" +
  "· MacNeal-Harder warped beam\n" +
  "· Cook's membrane / Pinched cylinder\n" +
  "· vs CalculiX, Code Aster, FEniCS, SAP2000";
notesEl.style.whiteSpace = "pre-line";
fNotes.element.appendChild(notesEl);

document.body.append(benchContainer);

// Update reactivo: copia benchValues → benchObj y refresca Tweakpane
van.derive(() => {
  const v = benchValues.val;
  benchObj.delta_EB = v.delta_EB;
  benchObj.delta_shear = v.delta_shear;
  benchObj.delta_col = v.delta_col;
  benchObj.delta_total_an = v.delta_total_an;
  benchObj.delta_he = v.delta_he;
  benchObj.errTotalPct = v.errTotalPct;
  benchObj.errEBpct = v.errEBpct;
  benchObj.status = v.errTotalPct < 5 ? "✓ PASA (<5%)"
                  : v.errTotalPct < 15 ? "⚠ ACEPTABLE (5-15%)"
                  : "✗ revisar (>15%)";
  benchObj.I_beam = v.I_beam;
  benchObj.L_beam = v.L_beam;
  benchObj.P = v.P;
  benchObj.elapsed = v.elapsed;
  benchPane.refresh();
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
    // Vista isométrica: columna 3m + viga 1.5m en +Y
    ctx.camera.position.set(3.5, 3.5, 2.5);
    ctx.controls.target.set(0, 1.0, 1.5);  // centro col+viga aproximado
    ctx.controls.update();
    ctx.render?.();
  }
}, 800);
