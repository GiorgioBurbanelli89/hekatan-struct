#!/usr/bin/env node
// CLI Hekatan — Cimentación Edificio Real (9 zap + 12 vigas amarre)
// Replica el caso safe_api_edificio.py usando deform() (shells + frames mixtos).
// Para cada zapata: mesh 4×4 (16 Q4 por zapata × 9 = 144 Q4 total).
// Para vigas amarre: 1 frame por viga × 12 = 12 frames.
// Springs Winkler nodales en cada nodo de zapata (dof=2 = Uz).

import { writeFileSync } from "fs";
import { deform } from "../../../hekatan-fem/src/index.ts";

const argMap = Object.fromEntries(
  process.argv.slice(2).filter(a => a.startsWith("--")).map(a => {
    const [k, v] = a.slice(2).split("=");
    return [k, v ?? true];
  })
);
const TONF_TO_KN = 9.80665;

// Mismos parámetros del SAFE script
const P_GLOBAL = {
  tz: 0.30, E_kNm2: 24855e3, nu: 0.20, rho_kNm3: 24.0,
  ks_kNm3: 1030.0,       // = 105 tonf/m³
  viga_b: 0.25, viga_h: 0.40,
};

// 9 columnas con dim de zapata
const COLUMNS = [
  { id: 1, x: 0,  y: 0,  Lz: 1.3, Bz: 1.3, rol: "esquina"     },
  { id: 2, x: 5,  y: 0,  Lz: 2.2, Bz: 2.2, rol: "medio-borde" },
  { id: 3, x: 10, y: 0,  Lz: 1.3, Bz: 1.3, rol: "esquina"     },
  { id: 4, x: 0,  y: 5,  Lz: 2.2, Bz: 2.2, rol: "medio-borde" },
  { id: 5, x: 5,  y: 5,  Lz: 1.6, Bz: 1.6, rol: "centro"      },
  { id: 6, x: 10, y: 5,  Lz: 2.2, Bz: 2.2, rol: "medio-borde" },
  { id: 7, x: 0,  y: 10, Lz: 1.3, Bz: 1.3, rol: "esquina"     },
  { id: 8, x: 5,  y: 10, Lz: 2.2, Bz: 2.2, rol: "medio-borde" },
  { id: 9, x: 10, y: 10, Lz: 1.3, Bz: 1.3, rol: "esquina"     },
];

// Cargas reales en tonf, tonf·m — convertir a kN, kN·m para deform()
const LOADS_TONF = {
  1: { FZ: -0.6663, MX:  0.8439, MY: 2.2863 },
  2: { FZ: -2.1245, MX:  0.0003, MY: 2.5785 },
  3: { FZ: -3.6324, MX: -0.8442, MY: 2.2910 },
  4: { FZ: -1.1218, MX:  0.9406, MY: 1.2984 },
  5: { FZ: -2.1401, MX:  0.0003, MY: 1.4681 },
  6: { FZ: -3.1612, MX: -0.9409, MY: 1.2987 },
  7: { FZ: -1.2892, MX:  0.8433, MY: 0.3505 },
  8: { FZ: -2.1399, MX:  0.0003, MY: 0.4073 },
  9: { FZ: -2.9936, MX: -0.8436, MY: 0.3505 },
};
// 12 vigas amarre conectividad
const BEAMS = [
  [1,2],[2,3],[4,5],[5,6],[7,8],[8,9],   // horizontales (eje X)
  [1,4],[4,7],[2,5],[5,8],[3,6],[6,9],   // verticales (eje Y)
];

// ── Mesh: para cada zapata, generar grid 5×5 nodos (4×4 Q4) ─────────
// Grid local en cada zapata centrada en (col.x, col.y) con extensión Lz×Bz.
// Resolución: nLocal+1 nodos por lado, nLocal=4 elementos.
const nLocal = +(argMap.nLocal ?? 4);
const nodes = [];               // [x, y, z]
const elements = [];            // [n0, n1, n2, n3] for Q4 or [ni, nj] for frame
const zapataNodes = new Map();  // col_id → { center_idx, all_node_indices[] }

for (const col of COLUMNS) {
  const nn = nLocal + 1;
  const dx = col.Lz / nLocal, dy = col.Bz / nLocal;
  const x0 = col.x - col.Lz/2, y0 = col.y - col.Bz/2;
  const start = nodes.length;
  for (let j = 0; j < nn; ++j)
    for (let i = 0; i < nn; ++i)
      nodes.push([x0 + i*dx, y0 + j*dy, 0]);
  // Q4 elements
  const elemStart = elements.length;
  for (let j = 0; j < nLocal; ++j)
    for (let i = 0; i < nLocal; ++i) {
      const n0 = start + j*nn + i;
      elements.push([n0, n0 + 1, n0 + nn + 1, n0 + nn]);
    }
  // Center node index (asume nLocal par → centro exacto)
  const centerLocal = (nLocal/2) * nn + (nLocal/2);
  const centerIdx = start + centerLocal;
  zapataNodes.set(col.id, {
    center_idx: centerIdx,
    grid_start: start,
    grid_count: nn * nn,
    elem_start: elemStart,
    elem_count: nLocal * nLocal,
  });
}
console.log(`-> Mesh: ${nodes.length} nodos, ${elements.length} Q4 (zap), ${nLocal}×${nLocal} por zapata`);

// ── Frames de vigas amarre — conectan centros de zapatas ────────────
const beamElemStart = elements.length;
for (const [ci, cj] of BEAMS) {
  const zi = zapataNodes.get(ci);
  const zj = zapataNodes.get(cj);
  elements.push([zi.center_idx, zj.center_idx]);
}
const beamElemCount = elements.length - beamElemStart;
console.log(`-> ${beamElemCount} frames vigas amarre`);

// ── Springs Winkler en cada nodo de las zapatas ─────────────────────
const springs = [];
for (const col of COLUMNS) {
  const z = zapataNodes.get(col.id);
  const dx = col.Lz / nLocal, dy = col.Bz / nLocal;
  for (let j = 0; j <= nLocal; ++j)
    for (let i = 0; i <= nLocal; ++i) {
      const onEdgeI = (i === 0 || i === nLocal);
      const onEdgeJ = (j === 0 || j === nLocal);
      const factor = onEdgeI && onEdgeJ ? 0.25 : (onEdgeI || onEdgeJ ? 0.5 : 1.0);
      const A_trib = dx * dy * factor;
      const idx = z.grid_start + j*(nLocal+1) + i;
      springs.push({ node: idx, dof: 2, k: P_GLOBAL.ks_kNm3 * A_trib });
    }
}
console.log(`-> ${springs.length} springs Winkler nodales`);

// ── Cargas en los 9 centros (kN, kN·m) ──────────────────────────────
const loads = new Map();
for (const col of COLUMNS) {
  const z = zapataNodes.get(col.id);
  const L = LOADS_TONF[col.id];
  loads.set(z.center_idx, [
    0,                       // Fx
    0,                       // Fy
    L.FZ * TONF_TO_KN,       // Fz en kN (negativo = abajo)
    L.MX * TONF_TO_KN,       // Mx en kN·m
    L.MY * TONF_TO_KN,       // My en kN·m
    0,                       // Mz
  ]);
}

// ── Element inputs: shells (Q4) + frames (12 vigas) ─────────────────
// Shells: thickness + E + nu (para Mindlin Q4 en deform())
// Frames: A + Iz + Iy + G + J + E
const E = P_GLOBAL.E_kNm2;
const nu = P_GLOBAL.nu;
const G = E / (2 * (1 + nu));

// Frame VAmarre 0.25×0.40 (b × h):
const A_v = P_GLOBAL.viga_b * P_GLOBAL.viga_h;
const Iz_v = P_GLOBAL.viga_b * P_GLOBAL.viga_h**3 / 12;   // momento sobre eje fuerte
const Iy_v = P_GLOBAL.viga_h * P_GLOBAL.viga_b**3 / 12;   // momento sobre eje débil
const J_v  = 0.229 * P_GLOBAL.viga_b * P_GLOBAL.viga_h**3; // St-Venant aprox (b<h)

const elasticities = new Map();
const poissonsRatios = new Map();
const thicknesses = new Map();
const areas = new Map();
const momentsOfInertiaZ = new Map();
const momentsOfInertiaY = new Map();
const shearModuli = new Map();
const torsionalConstants = new Map();

// Shells (zapatas Q4)
for (let i = 0; i < beamElemStart; ++i) {
  elasticities.set(i, E);
  poissonsRatios.set(i, nu);
  thicknesses.set(i, P_GLOBAL.tz);
}
// Frames (vigas amarre)
for (let i = beamElemStart; i < elements.length; ++i) {
  elasticities.set(i, E);
  poissonsRatios.set(i, nu);
  areas.set(i, A_v);
  momentsOfInertiaZ.set(i, Iz_v);
  momentsOfInertiaY.set(i, Iy_v);
  shearModuli.set(i, G);
  torsionalConstants.set(i, J_v);
}

const nodeInputs = { supports: new Map(), loads };
const elementInputs = {
  elasticities, poissonsRatios, thicknesses,
  areas, momentsOfInertiaZ, momentsOfInertiaY,
  shearModuli, torsionalConstants,
};

// ── Resolver ────────────────────────────────────────────────────────
console.log("-> Running deform() ...");
const t0 = performance.now();
const result = deform(nodes, elements, nodeInputs, elementInputs, springs);
const t1 = performance.now();
console.log(`   deform() OK in ${(t1-t0).toFixed(1)} ms`);

// ── Extract uz en los 9 centros ─────────────────────────────────────
const samples_9cols = [];
for (const col of COLUMNS) {
  const z = zapataNodes.get(col.id);
  const def = result.deformations.get(z.center_idx);
  if (!def) continue;
  const [ux, uy, uz, rx, ry, rz] = def;
  samples_9cols.push({
    col_id: col.id, rol: col.rol,
    x: col.x, y: col.y, Lz: col.Lz, Bz: col.Bz,
    FZ_tonf: LOADS_TONF[col.id].FZ,
    MX_tonfm: LOADS_TONF[col.id].MX,
    MY_tonfm: LOADS_TONF[col.id].MY,
    ux_mm: +(ux * 1000).toFixed(4),
    uy_mm: +(uy * 1000).toFixed(4),
    uz_mm: +(uz * 1000).toFixed(4),
    q_tonfm2: +(P_GLOBAL.ks_kNm3 * Math.abs(uz) / TONF_TO_KN).toFixed(3),
  });
}

const P_total_tonf = Object.values(LOADS_TONF).reduce((s, l) => s + l.FZ, 0);
const A_total = COLUMNS.reduce((s, c) => s + c.Lz * c.Bz, 0);
const w_avg_teo_mm = Math.abs(P_total_tonf) / (A_total * 105) * 1000;

const out = {
  solver: "Hekatan deform() (shells + frames mixtos)",
  case: "Cimentación Edificio Real (9 zap + 12 vigas amarre)",
  params: P_GLOBAL,
  columns: COLUMNS,
  loads_tonf: LOADS_TONF,
  beams: BEAMS,
  mesh: {
    nLocal_per_zapata: nLocal,
    total_nodes: nodes.length,
    total_q4: beamElemStart,
    total_frames: beamElemCount,
  },
  theory: {
    P_total_tonf,
    A_total_m2: A_total,
    w_avg_winkler_teo_mm: +w_avg_teo_mm.toFixed(4),
  },
  results: {
    runtime_ms: +(t1 - t0).toFixed(1),
    samples_9cols,
  },
};

if (typeof argMap.json === "string") {
  writeFileSync(argMap.json, JSON.stringify(out, null, 2), "utf8");
  console.log(`JSON escrito en ${argMap.json}`);
}

console.log("\n" + "═".repeat(78));
console.log("  Hekatan deform() — Cimentación Edificio Real (9 zap + 12 vigas)");
console.log("═".repeat(78));
console.log(`  P_total: ${P_total_tonf.toFixed(2)} tonf | A_total: ${A_total.toFixed(1)} m² | w_teo: ${w_avg_teo_mm.toFixed(3)} mm`);
console.log(`  Runtime: ${(t1-t0).toFixed(1)} ms`);
console.log("─".repeat(78));
console.log(`  ${"col".padStart(3)} ${"rol".padEnd(13)} ${"pos".padEnd(10)} ${"dim".padEnd(10)} ${"FZ".padStart(7)} ${"MY".padStart(6)} ${"uz_mm".padStart(9)} ${"q_tonfm2".padStart(9)}`);
for (const s of samples_9cols) {
  const pos = `(${s.x.toString().padStart(2)},${s.y.toString().padStart(2)})`;
  const dim = `${s.Lz}×${s.Bz}`;
  console.log(`  ${s.col_id.toString().padStart(3)} ${s.rol.padEnd(13)} ${pos.padEnd(10)} ${dim.padEnd(10)} ${s.FZ_tonf.toFixed(2).padStart(7)} ${s.MY_tonfm.toFixed(2).padStart(6)} ${s.uz_mm.toFixed(3).padStart(8)} ${s.q_tonfm2.toFixed(2).padStart(9)}`);
}
console.log("═".repeat(78));
