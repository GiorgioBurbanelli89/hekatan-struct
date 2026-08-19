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
  ks_kNm3: 1030.0,           // = 105 tonf/m³
  viga_b: 0.25, viga_h: 0.40, // cadenas
  // V2: modelación correcta
  h_ped: 0.50,                // altura pedestal
  ped_side: 0.40,             // sección cuadrada pedestal
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
// V2 modelación correcta:
//   zapatas (shells) en z=-h_ped
//   pedestales (frames verticales) de z=-h_ped a z=0
//   cadenas (frames horizontales) en z=0 entre TOPS de pedestales
const z_zap = -P_GLOBAL.h_ped;
const nLocal = +(argMap.nLocal ?? 4);
const nodes = [];               // [x, y, z]
const elements = [];            // [n0, n1, n2, n3] Q4 o [ni, nj] frame
const zapataNodes = new Map();  // col_id → { center_idx, top_idx, grid_start }

for (const col of COLUMNS) {
  const nn = nLocal + 1;
  const dx = col.Lz / nLocal, dy = col.Bz / nLocal;
  const x0 = col.x - col.Lz/2, y0 = col.y - col.Bz/2;
  const start = nodes.length;
  for (let j = 0; j < nn; ++j)
    for (let i = 0; i < nn; ++i)
      nodes.push([x0 + i*dx, y0 + j*dy, z_zap]);   // zapata en z=-h_ped
  const elemStart = elements.length;
  for (let j = 0; j < nLocal; ++j)
    for (let i = 0; i < nLocal; ++i) {
      const n0 = start + j*nn + i;
      elements.push([n0, n0 + 1, n0 + nn + 1, n0 + nn]);
    }
  const centerLocal = (nLocal/2) * nn + (nLocal/2);
  const centerIdx = start + centerLocal;
  // TOP node (z=0) — destino del pedestal y origen de cadenas
  const topIdx = nodes.length;
  nodes.push([col.x, col.y, 0]);
  zapataNodes.set(col.id, {
    center_idx: centerIdx,
    top_idx: topIdx,
    grid_start: start,
    grid_count: nn * nn,
    elem_start: elemStart,
    elem_count: nLocal * nLocal,
  });
}
console.log(`-> Mesh: ${nodes.length} nodos, ${elements.length} Q4 (zap), ${nLocal}×${nLocal} por zapata + 9 nodos TOP en z=0`);

// ── 9 pedestales verticales (frame: zapata_center → top) ────────────
const pedElemStart = elements.length;
for (const col of COLUMNS) {
  const z = zapataNodes.get(col.id);
  elements.push([z.center_idx, z.top_idx]);
}
const pedElemCount = elements.length - pedElemStart;
console.log(`-> ${pedElemCount} pedestales verticales (h=${P_GLOBAL.h_ped}m)`);

// ── 12 cadenas horizontales (frame en z=0 entre TOPS) ───────────────
const beamElemStart = elements.length;
for (const [ci, cj] of BEAMS) {
  const zi = zapataNodes.get(ci);
  const zj = zapataNodes.get(cj);
  elements.push([zi.top_idx, zj.top_idx]);
}
const beamElemCount = elements.length - beamElemStart;
console.log(`-> ${beamElemCount} cadenas horizontales en z=0`);

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

// ── Cargas en los 9 TOPS de pedestales (z=0) en kN, kN·m ────────────
const loads = new Map();
for (const col of COLUMNS) {
  const z = zapataNodes.get(col.id);
  const L = LOADS_TONF[col.id];
  loads.set(z.top_idx, [
    0,
    0,
    L.FZ * TONF_TO_KN,
    L.MX * TONF_TO_KN,
    L.MY * TONF_TO_KN,
    0,
  ]);
}

// ── PESO PROPIO (opcional: --sw) ────────────────────────────────────
// Sin esto la comparacion contra SAFE no significa nada: SAFE lo aplica —lo
// dice la suma de sus reacciones, 55.01 tonf contra 19.27 de carga— aunque el
// script pida `lpat.Add("Dead", ..., 0.0, True)`. Comparar con y sin peso
// propio es comparar dos estructuras distintas.
//
//   peso zapatas    rho * t * A_tributaria   en cada nudo del pano
//   peso vigas      rho * A * L / 2          a cada extremo
//   peso pedestal   rho * A * h / 2          idem
// `--sw` = todo el peso propio. `--sw=zap` = solo el de las zapatas, para
// poder AISLAR de donde viene la diferencia: el peso de una viga de 5 m son
// 1.2 tonf, y a una zapata de esquina —donde llegan dos— le caen 1.2 tonf de
// vigas contra 0.67 de carga aplicada. Si el reparto de ese peso no es el
// mismo que el de SAFE, la esquina se lleva todo el error.
const CON_SW = !!argMap.sw;
const SW_SOLO_ZAPATAS = String(argMap.sw) === "zap";
if (CON_SW) {
  const rho = P_GLOBAL.rho_kNm3;
  // Areas calculadas aqui: `A_p` y `A_v` se declaran mas abajo y esto correria
  // en su zona muerta.
  const areaPed = P_GLOBAL.ped_side * P_GLOBAL.ped_side;
  const areaVig = P_GLOBAL.viga_b * P_GLOBAL.viga_h;
  const suma = (idx, fz) => {
    const cur = loads.get(idx) ?? [0, 0, 0, 0, 0, 0];
    cur[2] += fz;
    loads.set(idx, cur);
  };
  let wZap = 0, wVig = 0, wPed = 0;
  // Zapatas: mismo reparto por area tributaria que los muelles Winkler.
  for (const col of COLUMNS) {
    const z = zapataNodes.get(col.id);
    // `nLocal` es global (numero de divisiones por lado de zapata).
    const dx = col.Lz / nLocal, dy = col.Bz / nLocal;
    for (let j = 0; j <= nLocal; ++j)
      for (let i = 0; i <= nLocal; ++i) {
        const onI = (i === 0 || i === nLocal), onJ = (j === 0 || j === nLocal);
        const f = onI && onJ ? 0.25 : (onI || onJ ? 0.5 : 1.0);
        const P = rho * P_GLOBAL.tz * dx * dy * f;
        suma(z.grid_start + j * (nLocal + 1) + i, -P);
        wZap += P;
      }
  }
  // Pedestales y vigas: la mitad del peso a cada nudo extremo.
  for (const col of COLUMNS) {
    if (SW_SOLO_ZAPATAS) break;
    const z = zapataNodes.get(col.id);
    const P = rho * areaPed * P_GLOBAL.h_ped;
    suma(z.center_idx, -P / 2); suma(z.top_idx, -P / 2);
    wPed += P;
  }
  for (const [ia, ib] of (SW_SOLO_ZAPATAS ? [] : BEAMS)) {
    const za = zapataNodes.get(ia), zb = zapataNodes.get(ib);
    const ca = COLUMNS.find(c => c.id === ia), cb = COLUMNS.find(c => c.id === ib);
    const L = Math.hypot(cb.x - ca.x, cb.y - ca.y);
    const P = rho * areaVig * L;
    suma(za.top_idx, -P / 2); suma(zb.top_idx, -P / 2);
    wVig += P;
  }
  const t = 1 / TONF_TO_KN;
  console.log(`-> PESO PROPIO aplicado: zapatas ${(wZap*t).toFixed(2)} + ` +
              `vigas ${(wVig*t).toFixed(2)} + pedestales ${(wPed*t).toFixed(2)} = ` +
              `${((wZap+wVig+wPed)*t).toFixed(2)} tonf`);
}

// ── Element inputs: shells (Q4) + frames (12 vigas) ─────────────────
// Shells: thickness + E + nu (para Mindlin Q4 en deform())
// Frames: A + Iz + Iy + G + J + E
const E = P_GLOBAL.E_kNm2;
const nu = P_GLOBAL.nu;
const G = E / (2 * (1 + nu));

// Cadena VAmarre 0.25×0.40 (b × h):
const A_v = P_GLOBAL.viga_b * P_GLOBAL.viga_h;
const Iz_v = P_GLOBAL.viga_b * P_GLOBAL.viga_h**3 / 12;
const Iy_v = P_GLOBAL.viga_h * P_GLOBAL.viga_b**3 / 12;
const J_v  = 0.229 * P_GLOBAL.viga_b * P_GLOBAL.viga_h**3;

// Pedestal 0.40×0.40 (cuadrado):
const ps = P_GLOBAL.ped_side;
const A_p = ps * ps;
const I_p = ps**4 / 12;
const J_p = 0.141 * ps**4;   // Saint-Venant rectangular cuadrado

const elasticities = new Map();
const poissonsRatios = new Map();
const thicknesses = new Map();
const areas = new Map();
const momentsOfInertiaZ = new Map();
const momentsOfInertiaY = new Map();
const shearModuli = new Map();
const torsionalConstants = new Map();

// Shells (zapatas Q4): índices [0, pedElemStart)
for (let i = 0; i < pedElemStart; ++i) {
  elasticities.set(i, E);
  poissonsRatios.set(i, nu);
  thicknesses.set(i, P_GLOBAL.tz);
}
// Pedestales (9 frames verticales): índices [pedElemStart, beamElemStart)
for (let i = pedElemStart; i < beamElemStart; ++i) {
  elasticities.set(i, E);
  poissonsRatios.set(i, nu);
  areas.set(i, A_p);
  momentsOfInertiaZ.set(i, I_p);
  momentsOfInertiaY.set(i, I_p);
  shearModuli.set(i, G);
  torsionalConstants.set(i, J_p);
}
// Cadenas horizontales (12 frames): índices [beamElemStart, elements.length)
for (let i = beamElemStart; i < elements.length; ++i) {
  elasticities.set(i, E);
  poissonsRatios.set(i, nu);
  areas.set(i, A_v);
  momentsOfInertiaZ.set(i, Iz_v);
  momentsOfInertiaY.set(i, Iy_v);
  shearModuli.set(i, G);
  torsionalConstants.set(i, J_v);
}

// ── EL APOYO EN EL PLANO, como SAFE ───────────────────────────────────────
// Los muelles Winkler solo sujetan en Uz (`dof: 2`), asi que la cimentacion
// entera es un MECANISMO en Ux, Uy y Rz: nada impide que se traslade o gire en
// planta. Y las cargas traen MX y MY, que acoplan con esos grados.
//
// SAFE lo resuelve con UN apoyo: preguntado nudo a nudo con
// `PointObj.GetRestraint` (restraints_safe.py), su modelo tiene un unico punto
// restringido —`PBase_5`, el del centro, en (5, 5, 0)— con el patron
// `Ux Uy - - - Rz`. Solo el plano; el vertical lo deja al suelo.
//
// Los «82 WITH RESTRAINTS» del .LOG no son apoyos del usuario: son los nudos
// internos del mallado y los anclajes de los 144 elementos LINK con los que
// SAFE implementa un muelle de area.
const supports = new Map();
if (!argMap["sin-apoyo-plano"]) {
  const centro = COLUMNS.find(c => c.x === 5 && c.y === 5) ?? COLUMNS[4];
  const zc = zapataNodes.get(centro.id);
  //            Ux    Uy    Uz     Rx     Ry     Rz
  supports.set(zc.top_idx, [true, true, false, false, false, true]);
}
const nodeInputs = { supports, loads };
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

// ── Extract uz en BASE (zapata sobre springs) y TOP (donde aplican cargas)
const samples_9cols = [];
for (const col of COLUMNS) {
  const z = zapataNodes.get(col.id);
  const defBase = result.deformations.get(z.center_idx);
  const defTop = result.deformations.get(z.top_idx);
  if (!defBase || !defTop) continue;
  samples_9cols.push({
    col_id: col.id, rol: col.rol,
    x: col.x, y: col.y, Lz: col.Lz, Bz: col.Bz,
    FZ_tonf: LOADS_TONF[col.id].FZ,
    MX_tonfm: LOADS_TONF[col.id].MX,
    MY_tonfm: LOADS_TONF[col.id].MY,
    ux_top_mm:  +(defTop[0] * 1000).toFixed(4),
    uy_top_mm:  +(defTop[1] * 1000).toFixed(4),
    uz_top_mm:  +(defTop[2] * 1000).toFixed(4),
    uz_base_mm: +(defBase[2] * 1000).toFixed(4),
    q_tonfm2:   +(P_GLOBAL.ks_kNm3 * Math.abs(defBase[2]) / TONF_TO_KN).toFixed(3),
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
console.log(`  ${"col".padStart(3)} ${"rol".padEnd(13)} ${"pos".padEnd(10)} ${"dim".padEnd(10)} ${"FZ".padStart(7)} ${"MY".padStart(6)} ${"uz_base".padStart(9)} ${"uz_top".padStart(9)} ${"q_tonfm2".padStart(9)}`);
for (const s of samples_9cols) {
  const pos = `(${s.x.toString().padStart(2)},${s.y.toString().padStart(2)})`;
  const dim = `${s.Lz}×${s.Bz}`;
  console.log(`  ${s.col_id.toString().padStart(3)} ${s.rol.padEnd(13)} ${pos.padEnd(10)} ${dim.padEnd(10)} ${s.FZ_tonf.toFixed(2).padStart(7)} ${s.MY_tonfm.toFixed(2).padStart(6)} ${s.uz_base_mm.toFixed(3).padStart(8)} ${s.uz_top_mm.toFixed(3).padStart(8)} ${s.q_tonfm2.toFixed(2).padStart(9)}`);
}
console.log("═".repeat(78));
