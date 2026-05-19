#!/usr/bin/env node
// CLI Hekatan — Zapata Conectada 5×1m, 2 zapatas + viga de unión
// Losa continua rectangular con ESPESOR VARIABLE por zona:
//   - x ∈ [0, 1.0]   m → zapata izq, t_zap = 0.40 m
//   - x ∈ [1.0, 4.0] m → viga conexión, t_vig = 0.20 m
//   - x ∈ [4.0, 5.0] m → zapata der, t_zap = 0.40 m
// 2 columnas centradas en cada zapata: (0.5, 0.5) y (4.5, 0.5), P=20 tonf c/u.
// La viga delgada (0.20m) tiene rigidez mucho menor que las zapatas (0.40m³ vs
// 0.20m³ = 8× factor) → conecta las zapatas elásticamente, permite rotación
// relativa pequeña.

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
  Lz: +(argMap.Lz ?? 5.0),               // m total (eje de columnas)
  Bz: +(argMap.Bz ?? 1.0),               // m ancho (constante)
  t_zap: +(argMap.t_zap ?? 0.40),        // m espesor zapatas extremas
  t_vig: +(argMap.t_vig ?? 0.20),        // m espesor viga central
  Lzap: +(argMap.Lzap ?? 1.0),           // m longitud cada zapata (en eje x)
  E:  +(argMap.E  ?? 24855e3),
  nu: +(argMap.nu ?? 0.20),
  ks: +(argMap.ks ?? 19613),
  P:  +(argMap.P  ?? 20) * TONF_TO_KN,
  nx: +(argMap.nx ?? 20),                // 20 elementos en X (dx=0.25m)
  ny: +(argMap.ny ?? 4),                 // 4 elementos en Y (dy=0.25m)
};

const nxn = params.nx + 1, nyn = params.ny + 1;
const dx = params.Lz / params.nx, dy = params.Bz / params.ny;
const nodes = [];
for (let j = 0; j < nyn; ++j)
  for (let i = 0; i < nxn; ++i)
    nodes.push([i * dx, j * dy]);

// Elementos + thicknesses por zona x
const elements = [];
const thicknesses = [];
for (let j = 0; j < params.ny; ++j)
  for (let i = 0; i < params.nx; ++i) {
    const n0 = j * nxn + i;
    elements.push([n0, n0 + 1, n0 + nxn + 1, n0 + nxn]);
    const xCenter = (i + 0.5) * dx;  // centro x del elemento
    const isZapata = xCenter < params.Lzap || xCenter > (params.Lz - params.Lzap);
    thicknesses.push(isZapata ? params.t_zap : params.t_vig);
  }

// ── Springs Winkler nodales ─────────────────────────────────────────
// IMPORTANTE: ks aplicado en TODA el área (extender springs solo bajo zapatas
// sería más realista pero requiere conocer dónde está la viga "elevada").
// Aquí toda la losa contacta el suelo → springs en todos los nodos.
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

// ── 2 columnas centradas en cada zapata ─────────────────────────────
const findNode = (xT, yT) => {
  let best = { idx: -1, dist: Infinity };
  for (let k = 0; k < nodes.length; k++) {
    const dx0 = nodes[k][0] - xT, dy0 = nodes[k][1] - yT;
    const d = dx0*dx0 + dy0*dy0;
    if (d < best.dist) best = { idx: k, dist: d };
  }
  return best.idx;
};
const columns = [
  { x: params.Lzap / 2,             y: params.Bz / 2, P_kN: params.P },
  { x: params.Lz - params.Lzap / 2, y: params.Bz / 2, P_kN: params.P },
];
const pointLoads = columns.map(c => ({
  node: findNode(c.x, c.y),
  dof: 0,
  value: -c.P_kN,
}));

const input = {
  E: params.E,
  nu: params.nu,
  thickness: params.t_zap,        // global default (ignored when thicknesses[] given)
  thicknesses,                    // per-elemento override
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

// ── 11 sample points: bajo c/columna + bordes zapatas + medio viga + esquinas
const samplePoints = [
  { label: "esquina (0,0)",            x: 0,                        y: 0           },
  { label: "esquina (Lz,0)",           x: params.Lz,                y: 0           },
  { label: "esquina (0,Bz)",           x: 0,                        y: params.Bz   },
  { label: "esquina (Lz,Bz)",          x: params.Lz,                y: params.Bz   },
  { label: "col_izq (0.5, Bz/2)",      x: params.Lzap / 2,          y: params.Bz/2 },
  { label: "col_der (4.5, Bz/2)",      x: params.Lz - params.Lzap/2, y: params.Bz/2 },
  { label: "borde zap-viga izq (1, Bz/2)", x: params.Lzap,          y: params.Bz/2 },
  { label: "borde zap-viga der (4, Bz/2)", x: params.Lz - params.Lzap, y: params.Bz/2 },
  { label: "centro viga (2.5, Bz/2)",  x: params.Lz / 2,            y: params.Bz/2 },
  { label: "1/4 viga (1.75, Bz/2)",    x: 1.75,                     y: params.Bz/2 },
  { label: "3/4 viga (3.25, Bz/2)",    x: 3.25,                     y: params.Bz/2 },
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
  solver: "Hekatan plateQ4Solve (Mindlin Q4 + Winkler springs + thicknesses[])",
  case: "Zapata Conectada 5×1m, 2 zapatas (t=0.40) + viga (t=0.20)",
  params,
  columns,
  mesh: { nxn, nyn, totalNodes: nodes.length, totalElements: elements.length },
  thicknesses_zonas: {
    zapatas_count: thicknesses.filter(t => t === params.t_zap).length,
    viga_count:    thicknesses.filter(t => t === params.t_vig).length,
  },
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
    samples_11pts: samples,
  },
};

if (typeof argMap.json === "string") {
  writeFileSync(argMap.json, JSON.stringify(out, null, 2), "utf8");
  console.log(`JSON escrito en ${argMap.json}`);
}

console.log("\n══════════════════════════════════════════════════════════");
console.log("  Hekatan plateQ4Solve — Zapata Conectada 5×1m");
console.log("══════════════════════════════════════════════════════════");
console.log(`  Geometría: ${params.Lz} × ${params.Bz} m (zapatas ${params.t_zap}m / viga ${params.t_vig}m)`);
console.log(`  Mesh:      ${params.nx} × ${params.ny} (${nodes.length} nodos, ${elements.length} Q4)`);
console.log(`  Material:  E=${params.E/1e3} MPa  ν=${params.nu}`);
console.log(`  Suelo ks:  ${params.ks} kN/m³`);
console.log(`  Cargas:    ${columns.length} cols × ${(params.P/TONF_TO_KN).toFixed(1)} tonf = ${P_total_kN.toFixed(2)} kN total`);
console.log(`  w_teo:     ${w_avg_teo_mm.toFixed(4)} mm (Winkler uniforme)`);
console.log("──────────────────────────────────────────────────────────");
console.log(`  w_max:     ${(w_max*1000).toFixed(4)} mm  (nodo ${w_max_node.idx})`);
console.log(`  q_max:     ${q_max_kNm2.toFixed(2)} kN/m² = ${q_max_tonfm2.toFixed(3)} tonf/m²`);
console.log(`  Mxx_max:   ${result.maxMxx.toFixed(3)} kN·m/m`);
console.log(`  Myy_max:   ${result.maxMyy.toFixed(3)} kN·m/m`);
console.log(`  Runtime:   ${(t1-t0).toFixed(1)} ms`);
console.log("──────────────────────────────────────────────────────────");
console.log(`  ${samples.length} puntos clave (w en mm, q = ks·|w| en kN/m²):`);
console.log("  " + "label".padEnd(34) + "w_mm".padStart(10) + "q_kNm2".padStart(12));
for (const s of samples)
  console.log("  " + s.label.padEnd(34) + s.w_mm.toFixed(4).padStart(10) + s.q_kNm2.toFixed(2).padStart(12));
console.log("══════════════════════════════════════════════════════════");
