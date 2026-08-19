#!/usr/bin/env node
// CLI Hekatan — Zapata Aislada 1.5×1.5×0.30m
// Resuelve plate Q4 (Mindlin) con springs Winkler nodales (ks × A_trib)
// bajo P concentrada en el nodo central. Emite JSON con w_max, q_max, M_max
// para comparación directa contra SAFE.
//
// Uso:
//   npx tsx ./cli_zapata.mjs                       # caso default
//   npx tsx ./cli_zapata.mjs --json out.json       # exporta JSON
//   npx tsx ./cli_zapata.mjs --Lz=2 --Bz=2 --P=30  # override params

import { writeFileSync } from "fs";
import { plateQ4Solve } from "../../../hekatan-fem/src/index.ts";

// ── Parsear argumentos ──────────────────────────────────────────────
const argMap = Object.fromEntries(
  process.argv.slice(2).filter(a => a.startsWith("--")).map(a => {
    const [k, v] = a.slice(2).split("=");
    return [k, v ?? true];
  })
);
const TONF_TO_KN = 9.80665;

const params = {
  Lz: +(argMap.Lz ?? 1.50),
  Bz: +(argMap.Bz ?? 1.50),
  tz: +(argMap.tz ?? 0.30),
  E:  +(argMap.E  ?? 24855e3),      // kN/m² (24855 MPa)
  nu: +(argMap.nu ?? 0.20),
  ks: +(argMap.ks ?? 19613),        // kN/m³
  P:  +(argMap.P  ?? 20) * TONF_TO_KN,  // 20 tonf → 196.13 kN
  nx: +(argMap.nx ?? 12),
  ny: +(argMap.ny ?? 12),
};

// ── Mesh Q4: nodes 2D [x, y] ────────────────────────────────────────
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

// ── Springs Winkler nodales: dof=0 (w), k = ks × A_trib ─────────────
const springs = [];
for (let j = 0; j < nyn; ++j)
  for (let i = 0; i < nxn; ++i) {
    const onEdgeI = (i === 0 || i === nxn - 1);
    const onEdgeJ = (j === 0 || j === nyn - 1);
    const factor = onEdgeI && onEdgeJ ? 0.25 : (onEdgeI || onEdgeJ ? 0.5 : 1.0);
    const A_trib = dx * dy * factor;
    const nodeIdx = j * nxn + i;
    springs.push({ node: nodeIdx, dof: 0, k: params.ks * A_trib });  // dof 0 = w
    // Springs torsionales débiles en las 4 esquinas (1e-6 × stiffness típico)
    // → suprime modos rígidos rotacionales SIN romper la simetría del modelo.
    // Reemplaza el BC artificial βx=βy=0 que antes se ponía solo en (0,0).
    if (onEdgeI && onEdgeJ) {
      const k_theta = 1e-6 * params.ks * dx * dy;
      springs.push({ node: nodeIdx, dof: 1, k: k_theta });  // βx
      springs.push({ node: nodeIdx, dof: 2, k: k_theta });  // βy
    }
  }

// Sin BCs duros: solo springs (zapata flotante con simetría exacta)
const bcs = [];

// ── Carga puntual P en nodo central (modo zapata aislada con columna) ─
const ic = Math.floor(params.nx / 2), jc = Math.floor(params.ny / 2);
const centerNode = jc * nxn + ic;
const pointLoads = [{ node: centerNode, dof: 0, value: -params.P }];  // -Z

// ── Resolver Mindlin Q4 con springs + carga puntual ─────────────────
const input = {
  E: params.E,
  nu: params.nu,
  thickness: params.tz,
  theoryType: 0,          // 0 = Mindlin (thick)
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

// ── Extraer resultados ──────────────────────────────────────────────
const w_max = result.maxW;
const w_max_node = result.nodeResults.reduce((acc, r, i) =>
  Math.abs(r.w) > Math.abs(acc.w) ? { w: r.w, idx: i } : acc, { w: 0, idx: -1 }
);

// q_max: presión soporte = ks × |w| nodal (kN/m²)
const q_max_kNm2 = params.ks * Math.abs(w_max);
const q_max_tonfm2 = q_max_kNm2 / TONF_TO_KN;

// ── 9 puntos clave: centro, 4 esquinas, 4 medios-lados ──────────────
// Encontrar nodo por coords (x, y) más cercano
const findNode = (xT, yT) => {
  let best = { idx: -1, dist: Infinity };
  for (let k = 0; k < nodes.length; k++) {
    const dx = nodes[k][0] - xT, dy = nodes[k][1] - yT;
    const d = dx*dx + dy*dy;
    if (d < best.dist) best = { idx: k, dist: d };
  }
  return best.idx;
};
const samplePoints = [
  { label: "esquina (0,0)",          x: 0,           y: 0           },
  { label: "esquina (Lz,0)",         x: params.Lz,   y: 0           },
  { label: "esquina (0,Bz)",         x: 0,           y: params.Bz   },
  { label: "esquina (Lz,Bz)",        x: params.Lz,   y: params.Bz   },
  { label: "medio-borde (Lz/2,0)",   x: params.Lz/2, y: 0           },
  { label: "medio-borde (Lz,Bz/2)",  x: params.Lz,   y: params.Bz/2 },
  { label: "medio-borde (Lz/2,Bz)",  x: params.Lz/2, y: params.Bz   },
  { label: "medio-borde (0,Bz/2)",   x: 0,           y: params.Bz/2 },
  { label: "centro (Lz/2,Bz/2)",     x: params.Lz/2, y: params.Bz/2 },
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

// ── JSON ─────────────────────────────────────────────────────────────
const out = {
  solver: "Hekatan plateQ4Solve (Mindlin Q4 + Winkler springs)",
  params,
  mesh: { nxn, nyn, totalNodes: nodes.length, totalElements: elements.length, centerNode },
  results: {
    w_max_m: w_max,
    w_max_node: w_max_node.idx,
    w_center_m: result.centerW ?? null,
    Mxx_max_kNm_per_m: result.maxMxx,
    Myy_max_kNm_per_m: result.maxMyy,
    Mxy_max_kNm_per_m: result.maxMxy,
    Qx_max_kN_per_m: result.maxQx,
    Qy_max_kN_per_m: result.maxQy,
    q_max_kN_m2: q_max_kNm2,
    q_max_tonf_m2: q_max_tonfm2,
    runtime_ms: +(t1 - t0).toFixed(1),
    samples_9pts: samples,
  },
};

if (typeof argMap.json === "string") {
  writeFileSync(argMap.json, JSON.stringify(out, null, 2), "utf8");
  console.log(`JSON escrito en ${argMap.json}`);
}

console.log("\n══════════════════════════════════════════════════");
console.log("  Hekatan plateQ4Solve — Zapata Aislada");
console.log("══════════════════════════════════════════════════");
console.log(`  Geometría: ${params.Lz} × ${params.Bz} × ${params.tz} m`);
console.log(`  Mesh:      ${params.nx} × ${params.ny} (${nodes.length} nodos, ${elements.length} Q4)`);
console.log(`  Material:  E=${params.E/1e3} MPa  ν=${params.nu}`);
console.log(`  Suelo ks:  ${params.ks} kN/m³`);
console.log(`  Carga P:   ${(params.P/TONF_TO_KN).toFixed(2)} tonf (= ${params.P.toFixed(2)} kN) en nodo central #${centerNode}`);
console.log("──────────────────────────────────────────────────");
console.log(`  w_max:     ${(w_max*1000).toFixed(4)} mm  (nodo ${w_max_node.idx})`);
console.log(`  q_max:     ${q_max_kNm2.toFixed(2)} kN/m² = ${q_max_tonfm2.toFixed(3)} tonf/m²`);
console.log(`  Mxx_max:   ${result.maxMxx.toFixed(3)} kN·m/m`);
console.log(`  Myy_max:   ${result.maxMyy.toFixed(3)} kN·m/m`);
console.log(`  Mxy_max:   ${result.maxMxy.toFixed(3)} kN·m/m`);
console.log(`  Qx_max:    ${result.maxQx.toFixed(3)} kN/m`);
console.log(`  Qy_max:    ${result.maxQy.toFixed(3)} kN/m`);
console.log(`  Runtime:   ${(t1-t0).toFixed(1)} ms`);
console.log("──────────────────────────────────────────────────");
console.log("  9 puntos clave (w en mm, q = ks·|w| en kN/m²):");
console.log("  " + "label".padEnd(28) + "w_mm".padStart(10) + "q_kNm2".padStart(12));
for (const s of samples)
  console.log("  " + s.label.padEnd(28) + s.w_mm.toFixed(4).padStart(10) + s.q_kNm2.toFixed(2).padStart(12));
console.log("══════════════════════════════════════════════════");
