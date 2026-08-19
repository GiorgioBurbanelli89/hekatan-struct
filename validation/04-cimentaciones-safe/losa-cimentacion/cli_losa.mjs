#!/usr/bin/env node
// CLI Hekatan — Losa de Cimentación 6×8×0.50m, 6 columnas grilla 2×3
// Resuelve plate Q4 (Mindlin) con springs Winkler nodales bajo 6 cargas
// puntuales (columnas) y emite JSON con w_max, q_max, M_max + sample
// points en columnas, entre columnas, esquinas y centro.
//
// Uso:
//   npx tsx ./cli_losa.mjs                     # caso default
//   npx tsx ./cli_losa.mjs --json out.json     # exporta JSON
//   npx tsx ./cli_losa.mjs --nx=24 --ny=32     # mesh refinado

import { writeFileSync } from "fs";
import { plateQ4Solve } from "../../../hekatan-fem/src/index.ts";

const argMap = Object.fromEntries(
  process.argv.slice(2).filter(a => a.startsWith("--")).map(a => {
    const [k, v] = a.slice(2).split("=");
    return [k, v ?? true];
  })
);
const TONF_TO_KN = 9.80665;

const params = {
  Lz: +(argMap.Lz ?? 6.0),               // m (dirección x)
  Bz: +(argMap.Bz ?? 8.0),               // m (dirección y)
  tz: +(argMap.tz ?? 0.50),              // m
  E:  +(argMap.E  ?? 24855e3),           // kN/m²
  nu: +(argMap.nu ?? 0.20),
  ks: +(argMap.ks ?? 19613),             // kN/m³ (arena media)
  P:  +(argMap.P  ?? 20) * TONF_TO_KN,   // 20 tonf por columna
  nx: +(argMap.nx ?? 12),                // 12 elementos en X (dx=0.5m)
  ny: +(argMap.ny ?? 16),                // 16 elementos en Y (dy=0.5m)
};

// ── Mesh Q4 ─────────────────────────────────────────────────────────
const nxn = params.nx + 1, nyn = params.ny + 1;
const dx = params.Lz / params.nx, dy = params.Bz / params.ny;
const nodes = [];
for (let j = 0; j < nyn; ++j)
  for (let i = 0; i < nxn; ++i)
    nodes.push([i * dx, j * dy]);

const elements = [];
for (let j = 0; j < params.ny; ++j)
  for (let i = 0; i < params.nx; ++i) {
    const n0 = j * nxn + i;
    elements.push([n0, n0 + 1, n0 + nxn + 1, n0 + nxn]);
  }

// ── Springs Winkler + torsionales débiles en esquinas ───────────────
const springs = [];
for (let j = 0; j < nyn; ++j)
  for (let i = 0; i < nxn; ++i) {
    const onEdgeI = (i === 0 || i === nxn - 1);
    const onEdgeJ = (j === 0 || j === nyn - 1);
    const factor = onEdgeI && onEdgeJ ? 0.25 : (onEdgeI || onEdgeJ ? 0.5 : 1.0);
    const A_trib = dx * dy * factor;
    const nodeIdx = j * nxn + i;
    springs.push({ node: nodeIdx, dof: 0, k: params.ks * A_trib });
    if (onEdgeI && onEdgeJ) {
      const k_theta = 1e-6 * params.ks * dx * dy;
      springs.push({ node: nodeIdx, dof: 1, k: k_theta });
      springs.push({ node: nodeIdx, dof: 2, k: k_theta });
    }
  }
const bcs = [];

// ── 6 columnas en grilla 2×3 (luz 3m × 4m, simétrico) ───────────────
// Lz=6m → columnas en x = 1.5, 4.5  (luz 3m, retiro 1.5m de bordes)
// Bz=8m → columnas en y = 2.0, 4.0, 6.0  (luz 2m, retiro 2m de bordes)
const colXs = [1.5, 4.5];
const colYs = [2.0, 4.0, 6.0];
const columns = [];
for (const cx of colXs) for (const cy of colYs)
  columns.push({ x: cx, y: cy, P_kN: params.P });

const findNode = (xT, yT) => {
  let best = { idx: -1, dist: Infinity };
  for (let k = 0; k < nodes.length; k++) {
    const dx0 = nodes[k][0] - xT, dy0 = nodes[k][1] - yT;
    const d = dx0*dx0 + dy0*dy0;
    if (d < best.dist) best = { idx: k, dist: d };
  }
  return best.idx;
};

const pointLoads = columns.map(c => ({
  node: findNode(c.x, c.y),
  dof: 0,
  value: -c.P_kN,
}));

const input = {
  E: params.E,
  nu: params.nu,
  thickness: params.tz,
  theoryType: 0,
  bcType: "none",
  nodes,
  elements,
  bcs,
  pointLoads,
  springs,
};

const t0 = performance.now();
const result = plateQ4Solve(input);
const t1 = performance.now();

const w_max = result.maxW;
const w_max_node = result.nodeResults.reduce((acc, r, i) =>
  Math.abs(r.w) > Math.abs(acc.w) ? { w: r.w, idx: i } : acc, { w: 0, idx: -1 }
);
const q_max_kNm2 = params.ks * Math.abs(w_max);
const q_max_tonfm2 = q_max_kNm2 / TONF_TO_KN;

// ── 17 sample points: 4 esquinas + 6 bajo columnas + 6 entre col + centro
const samplePoints = [
  // Esquinas
  { label: "esquina (0,0)",          x: 0,         y: 0         },
  { label: "esquina (Lz,0)",         x: params.Lz, y: 0         },
  { label: "esquina (0,Bz)",         x: 0,         y: params.Bz },
  { label: "esquina (Lz,Bz)",        x: params.Lz, y: params.Bz },
  // Bajo c/columna (6)
  { label: "col_1 (1.5, 2.0)",       x: 1.5, y: 2.0 },
  { label: "col_2 (4.5, 2.0)",       x: 4.5, y: 2.0 },
  { label: "col_3 (1.5, 4.0)",       x: 1.5, y: 4.0 },
  { label: "col_4 (4.5, 4.0)",       x: 4.5, y: 4.0 },
  { label: "col_5 (1.5, 6.0)",       x: 1.5, y: 6.0 },
  { label: "col_6 (4.5, 6.0)",       x: 4.5, y: 6.0 },
  // Entre columnas (puntos medios entre vecinas)
  { label: "entre col 1-2 (3.0, 2.0)", x: 3.0, y: 2.0 },
  { label: "entre col 3-4 (3.0, 4.0)", x: 3.0, y: 4.0 },
  { label: "entre col 5-6 (3.0, 6.0)", x: 3.0, y: 6.0 },
  { label: "entre col 1-3 (1.5, 3.0)", x: 1.5, y: 3.0 },
  { label: "entre col 3-5 (1.5, 5.0)", x: 1.5, y: 5.0 },
  // Centro losa
  { label: "centro losa (3.0, 4.0)",   x: 3.0, y: 4.0 },
  // Mid-edge centros
  { label: "mid-borde (3.0, 0)",       x: 3.0, y: 0   },
];
const samples = samplePoints.map(p => {
  const idx = findNode(p.x, p.y);
  const r = result.nodeResults[idx];
  return {
    label: p.label,
    node_idx: idx,
    x: nodes[idx][0],
    y: nodes[idx][1],
    w_mm: +(r.w * 1000).toFixed(4),
    q_kNm2: +(params.ks * Math.abs(r.w)).toFixed(2),
  };
});

const P_total_kN = columns.reduce((s, c) => s + c.P_kN, 0);
const A_total = params.Lz * params.Bz;
const w_avg_teo_mm = 1000 * P_total_kN / (A_total * params.ks);

const out = {
  solver: "Hekatan plateQ4Solve (Mindlin Q4 + Winkler springs)",
  case: "Losa de Cimentación 6×8×0.50m, 6 columnas grilla 2×3",
  params,
  columns,
  mesh: { nxn, nyn, totalNodes: nodes.length, totalElements: elements.length },
  theory: {
    P_total_kN,
    A_total_m2: A_total,
    w_avg_winkler_teo_mm: +w_avg_teo_mm.toFixed(4),
  },
  results: {
    w_max_m: w_max,
    w_max_node: w_max_node.idx,
    Mxx_max_kNm_per_m: result.maxMxx,
    Myy_max_kNm_per_m: result.maxMyy,
    Mxy_max_kNm_per_m: result.maxMxy,
    Qx_max_kN_per_m: result.maxQx,
    Qy_max_kN_per_m: result.maxQy,
    q_max_kN_m2: q_max_kNm2,
    q_max_tonf_m2: q_max_tonfm2,
    runtime_ms: +(t1 - t0).toFixed(1),
    samples_17pts: samples,
  },
};

if (typeof argMap.json === "string") {
  writeFileSync(argMap.json, JSON.stringify(out, null, 2), "utf8");
  console.log(`JSON escrito en ${argMap.json}`);
}

console.log("\n══════════════════════════════════════════════════════════");
console.log("  Hekatan plateQ4Solve — Losa de Cimentación 6×8×0.50m");
console.log("══════════════════════════════════════════════════════════");
console.log(`  Geometría: ${params.Lz} × ${params.Bz} × ${params.tz} m`);
console.log(`  Mesh:      ${params.nx} × ${params.ny} (${nodes.length} nodos, ${elements.length} Q4)`);
console.log(`  Material:  E=${params.E/1e3} MPa  ν=${params.nu}`);
console.log(`  Suelo ks:  ${params.ks} kN/m³`);
console.log(`  Cargas:    ${columns.length} columnas × ${(params.P/TONF_TO_KN).toFixed(1)} tonf = ${P_total_kN.toFixed(2)} kN total`);
console.log(`  w_teo:     ${w_avg_teo_mm.toFixed(4)} mm (Winkler uniforme: P_tot/(A·ks))`);
console.log("──────────────────────────────────────────────────────────");
console.log(`  w_max:     ${(w_max*1000).toFixed(4)} mm  (nodo ${w_max_node.idx})`);
console.log(`  q_max:     ${q_max_kNm2.toFixed(2)} kN/m² = ${q_max_tonfm2.toFixed(3)} tonf/m²`);
console.log(`  Mxx_max:   ${result.maxMxx.toFixed(3)} kN·m/m`);
console.log(`  Myy_max:   ${result.maxMyy.toFixed(3)} kN·m/m`);
console.log(`  Mxy_max:   ${result.maxMxy.toFixed(3)} kN·m/m`);
console.log(`  Qx_max:    ${result.maxQx.toFixed(3)} kN/m`);
console.log(`  Qy_max:    ${result.maxQy.toFixed(3)} kN/m`);
console.log(`  Runtime:   ${(t1-t0).toFixed(1)} ms`);
console.log("──────────────────────────────────────────────────────────");
console.log("  17 puntos clave (w en mm, q = ks·|w| en kN/m²):");
console.log("  " + "label".padEnd(34) + "w_mm".padStart(10) + "q_kNm2".padStart(12));
for (const s of samples)
  console.log("  " + s.label.padEnd(34) + s.w_mm.toFixed(4).padStart(10) + s.q_kNm2.toFixed(2).padStart(12));
console.log("══════════════════════════════════════════════════════════");
