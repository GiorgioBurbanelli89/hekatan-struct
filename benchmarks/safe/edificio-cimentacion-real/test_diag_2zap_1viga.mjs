#!/usr/bin/env node
// TEST DIAG #2: 2 zapatas separadas por 5m + 1 viga amarre + solo P (sin Mx/My)
// Si las 2 zapatas dan el MISMO uz, la viga amarre transfiere bien cargas.
// Si dan distinto (cada una con su carga local), la viga no acopla.

import { deform } from "../../../hekatan-fem/src/index.ts";

const TONF_TO_KN = 9.80665;
const P_GLOBAL = {
  tz: 0.30, E: 24855e3, nu: 0.20,
  ks: 1030,                // suelo blando del edificio real
  viga_b: 0.25, viga_h: 0.40,
};

// 2 zapatas centradas en (0,0) y (5,0), 1.6×1.6m cada una
const COLS = [
  { id: 1, x: 0, y: 0, Lz: 1.6, Bz: 1.6 },
  { id: 2, x: 5, y: 0, Lz: 1.6, Bz: 1.6 },
];
const LOADS_KN = {
  1: { Fz: -1.0 * TONF_TO_KN },   // ASIMÉTRICO: P1=-1 tonf
  2: { Fz: -3.0 * TONF_TO_KN },   //             P2=-3 tonf
};

// Mesh 4×4 por zapata
const nLocal = 4;
const nodes = [];
const elements = [];
const zapataNodes = new Map();

for (const col of COLS) {
  const nn = nLocal + 1;
  const dx = col.Lz / nLocal, dy = col.Bz / nLocal;
  const x0 = col.x - col.Lz/2, y0 = col.y - col.Bz/2;
  const start = nodes.length;
  for (let j = 0; j < nn; ++j)
    for (let i = 0; i < nn; ++i)
      nodes.push([x0 + i*dx, y0 + j*dy, 0]);
  for (let j = 0; j < nLocal; ++j)
    for (let i = 0; i < nLocal; ++i) {
      const n0 = start + j*nn + i;
      elements.push([n0, n0 + 1, n0 + nn + 1, n0 + nn]);
    }
  const centerIdx = start + (nLocal/2)*nn + nLocal/2;
  zapataNodes.set(col.id, { center_idx: centerIdx, grid_start: start });
}
const beamElemStart = elements.length;
// 1 viga amarre entre centros
elements.push([zapataNodes.get(1).center_idx, zapataNodes.get(2).center_idx]);

// Springs
const springs = [];
for (const col of COLS) {
  const z = zapataNodes.get(col.id);
  const dx = col.Lz / nLocal, dy = col.Bz / nLocal;
  for (let j = 0; j <= nLocal; ++j)
    for (let i = 0; i <= nLocal; ++i) {
      const onEdgeI = (i === 0 || i === nLocal);
      const onEdgeJ = (j === 0 || j === nLocal);
      const factor = onEdgeI && onEdgeJ ? 0.25 : (onEdgeI || onEdgeJ ? 0.5 : 1.0);
      const A_trib = dx * dy * factor;
      const idx = z.grid_start + j*(nLocal+1) + i;
      springs.push({ node: idx, dof: 2, k: P_GLOBAL.ks * A_trib });
    }
}

// Cargas
const loads = new Map();
for (const col of COLS) {
  const z = zapataNodes.get(col.id);
  loads.set(z.center_idx, [0, 0, LOADS_KN[col.id].Fz, 0, 0, 0]);
}

// Inputs
const E_m = new Map(); const nu_m = new Map(); const t_m = new Map();
const A_m = new Map(); const Iz_m = new Map(); const Iy_m = new Map();
const G_m = new Map(); const J_m = new Map();
const A_v = P_GLOBAL.viga_b * P_GLOBAL.viga_h;
const Iz_v = P_GLOBAL.viga_b * P_GLOBAL.viga_h**3 / 12;
const Iy_v = P_GLOBAL.viga_h * P_GLOBAL.viga_b**3 / 12;
const G_v = P_GLOBAL.E / (2*(1+P_GLOBAL.nu));
const J_v = 0.229 * P_GLOBAL.viga_b * P_GLOBAL.viga_h**3;

for (let i = 0; i < beamElemStart; ++i) {
  E_m.set(i, P_GLOBAL.E); nu_m.set(i, P_GLOBAL.nu); t_m.set(i, P_GLOBAL.tz);
}
for (let i = beamElemStart; i < elements.length; ++i) {
  E_m.set(i, P_GLOBAL.E); nu_m.set(i, P_GLOBAL.nu);
  A_m.set(i, A_v); Iz_m.set(i, Iz_v); Iy_m.set(i, Iy_v);
  G_m.set(i, G_v); J_m.set(i, J_v);
}

const nodeInputs = { supports: new Map(), loads };
const elementInputs = {
  elasticities: E_m, poissonsRatios: nu_m, thicknesses: t_m,
  areas: A_m, momentsOfInertiaZ: Iz_m, momentsOfInertiaY: Iy_m,
  shearModuli: G_m, torsionalConstants: J_m,
};

console.log("Test diag #2: 2 zapatas (1.6×1.6×0.30) separadas 5m + 1 viga amarre");
console.log(`Cargas iguales P=-2.14 tonf c/u, ks=1030 kN/m³, mesh 4×4 cada zapata`);
console.log(`Modelo: ${nodes.length} nodos, ${beamElemStart} Q4 + ${elements.length - beamElemStart} frame`);

const r = deform(nodes, elements, nodeInputs, elementInputs, springs);
const c1 = r.deformations.get(zapataNodes.get(1).center_idx);
const c2 = r.deformations.get(zapataNodes.get(2).center_idx);
console.log(`\n→ centro zap1 (x=0): uz = ${(c1[2]*1000).toFixed(4)} mm`);
console.log(`→ centro zap2 (x=5): uz = ${(c2[2]*1000).toFixed(4)} mm`);
console.log(`→ Ratio z1/z2 = ${(c1[2]/c2[2]).toFixed(4)} (esperado 1.0 si viga conecta bien por simetría)`);
console.log(`\nEsperado teórico Winkler (1 zapata aislada, sin viga):`);
console.log(`  w = P/(A·ks) = 21.0/(2.56·1030) = ${(2.14*TONF_TO_KN/(1.6*1.6*1030)*1000).toFixed(4)} mm`);
console.log(`\nSi DIFIERE entre zap1 y zap2 con cargas iguales y simetría perfecta → la viga NO conecta correctamente.`);
