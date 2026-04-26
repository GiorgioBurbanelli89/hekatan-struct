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
import { hex8Solve, type Vec3, type Hex8 } from "./h8";
import {
  Node, Element, NodeInputs, ElementInputs, DeformOutputs, AnalyzeOutputs,
} from "hekatan-fem";
import { getToolbar, getParameters, Parameters, getViewer } from "hekatan-ui";

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

// ── Live benchmark: H8 vs Euler-Bernoulli cantilever beam ──
const benchValues: State<{
  P: number; L_beam: number; I_beam: number;
  delta_an: number; delta_he: number;
  errPct: number; elapsed: number;
}> = van.state({ P: 0, L_beam: 0, I_beam: 0, delta_an: 0, delta_he: 0, errPct: 0, elapsed: 0 });

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

  // analyzeOutputs.vonMises promediado por nodo desde elementos vecinos
  const analyzeOutputs: AnalyzeOutputs = {} as AnalyzeOutputs;
  if (result) {
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
    const vonMisesNodes = new Map<number, [number, number, number, number]>();
    visualElements.forEach((face, fidx) => {
      const vals = face.map((nid) => {
        const cur = nodeVm.get(nid);
        return cur ? cur.sum / cur.count : 0;
      });
      vonMisesNodes.set(fidx, [vals[0], vals[1], vals[2], vals[3]]);
    });
    (analyzeOutputs as any).vonMises = vonMisesNodes;
  }

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

    // ── BENCHMARK: cantilever beam Euler-Bernoulli ──
    // Viga cantilever empotrada en columna (asumiendo columna mucho más rígida),
    // con peralte H_beam, ancho W_beam, voladizo L_beam, carga vertical P en tip:
    //   I_y = W_beam · H_beam³ / 12   (flexión sobre eje X, plano YZ)
    //   δ_tip = P · L_beam³ / (3 · E · I_y)
    const I_beam = (W_b_snap * H_b_snap * H_b_snap * H_b_snap) / 12;
    const delta_an = (P_tip * L_beam * L_beam * L_beam) / (3 * E * I_beam);
    const errPct = Math.abs(tipUzAvg - delta_an) / Math.abs(delta_an || 1) * 100;

    console.log("  ─── BENCHMARK cantilever beam (Euler-Bernoulli) ───");
    console.log(`  L_beam=${L_beam.toFixed(2)} m, W=${W_b_snap.toFixed(3)} × H=${H_b_snap.toFixed(3)}`);
    console.log(`  I_beam = W·H³/12 = ${I_beam.toExponential(3)} m⁴`);
    console.log(`  δ analítico = P·L³/(3·E·I) = ${delta_an.toExponential(4)} m`);
    console.log(`  δ Hekatan H8 (uz tip avg) = ${tipUzAvg.toExponential(4)} m`);
    console.log(`  Δ = ${errPct.toFixed(2)}%  ${errPct < 1 ? "✓" : errPct < 10 ? "⚠" : "✗"}`);

    benchValues.val = {
      P: P_tip, L_beam, I_beam,
      delta_an, delta_he: tipUzAvg,
      errPct, elapsed: result.elapsedMs,
    };
    void maxUz;
  }
  if (solverError) console.error("Solver H8 falló:", solverError);

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
    deformScale: 100,
    loads: true,         // mostrar flechas de carga en TODOS los nodos del tip de viga
    supports: true,      // mostrar empotramientos en base y tope de columna
    displayScale: 0.4,
  },
});

// ── Panel BENCHMARK con valores numéricos LIVE (Hekatan H8 vs Euler-Bernoulli) ──
const benchmarkPanel = document.createElement("div");
benchmarkPanel.style.cssText = `
  position: fixed; top: 8px; right: 8px;
  background: rgba(20,20,20,0.94); color: #ddd;
  font: 11px/1.4 ui-monospace, Menlo, monospace;
  padding: 10px 14px; border-radius: 6px;
  border: 1px solid #444;
  z-index: 9999; min-width: 340px; max-width: 420px;
`;
van.derive(() => {
  const v = benchValues.val;
  // "ERROR ACEPTABLE" = label de tolerancia 1-10% (no es un software).
  const status = v.errPct < 1 ? '<span style="color:#7eff7e">✓ PASA (Δ&lt;1%)</span>'
               : v.errPct < 10 ? '<span style="color:#ffcc00">⚠ ERROR ACEPTABLE (1-10%, shear deformation H8)</span>'
               : '<span style="color:#ff5555">✗ FALLA (Δ&gt;10%)</span>';
  benchmarkPanel.innerHTML = `
    <div style="font-weight:bold;color:#ffaa00;margin-bottom:6px;">
      🧪 BENCHMARK — col+viga H8 (concreto)
    </div>
    <table style="border-collapse:collapse;width:100%;">
      <tr style="color:#999;border-bottom:1px solid #444;">
        <td style="padding:2px 6px 2px 0;">Magnitud</td>
        <td style="padding:2px 6px;text-align:right;">Euler-Bern.</td>
        <td style="padding:2px 0;text-align:right;">Hekatan H8</td>
      </tr>
      <tr><td style="padding:1px 6px 1px 0;">δ tip viga (m)</td>
          <td style="text-align:right;padding:1px 6px;">${v.delta_an.toExponential(3)}</td>
          <td style="text-align:right;padding:1px 0;">${v.delta_he.toExponential(3)}</td></tr>
      <tr><td style="padding:1px 6px 1px 0;">I = W·H³/12 (m⁴)</td>
          <td colspan="2" style="text-align:right;padding:1px 0;">${v.I_beam.toExponential(3)}</td></tr>
      <tr><td style="padding:1px 6px 1px 0;">L_beam (m)</td>
          <td colspan="2" style="text-align:right;padding:1px 0;">${v.L_beam.toFixed(2)}</td></tr>
      <tr><td style="padding:1px 6px 1px 0;">P tip (kN)</td>
          <td colspan="2" style="text-align:right;padding:1px 0;">${v.P.toFixed(1)}</td></tr>
    </table>
    <div style="margin-top:6px;padding-top:4px;border-top:1px solid #444;">
      <div>Δ error = <b>${v.errPct.toFixed(2)}%</b> ${status}</div>
      <div style="color:#888;font-size:10px;">Solver H8 puro TS · ${v.elapsed.toFixed(0)} ms</div>
    </div>
    <div style="margin-top:6px;color:#999;font-size:10px;">
      <div style="font-weight:bold;color:#aaa;">Más benchmarks (pendientes):</div>
      <div>· Patch test (constant strain reproducción)</div>
      <div>· MacNeal-Harder warped beam</div>
      <div>· Cook's membrane / Pinched cylinder</div>
      <div>· vs CalculiX, Code Aster, FEniCS, SAP2000</div>
    </div>
  `;
});
document.body.append(benchmarkPanel);

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
