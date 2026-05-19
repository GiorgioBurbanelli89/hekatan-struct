#!/usr/bin/env node
// TEST DIAGNÓSTICO: zapata aislada caso 1 (paridad 0.03% con plateQ4Solve)
// pero esta vez via deform() — ver si deform() Q4 da resultados similares
// a plateQ4Solve. Si NO, el problema del caso 6 es la formulación Q4 en
// deform(), no el acoplamiento shell-frame.

import { deform } from "../../../hekatan-fem/src/index.ts";

const TONF_TO_KN = 9.80665;
const P = {
  Lz: 1.5, Bz: 1.5, tz: 0.30,
  E: 24855e3, nu: 0.20,
  ks: 19613,
  P: 20 * TONF_TO_KN,        // 196.13 kN
  nx: 12, ny: 12,
};

// Mesh 12×12 Q4 (matchea caso 1)
const nxn = P.nx + 1, nyn = P.ny + 1;
const dx = P.Lz / P.nx, dy = P.Bz / P.ny;
const nodes = [];
for (let j = 0; j < nyn; ++j)
  for (let i = 0; i < nxn; ++i)
    nodes.push([i * dx, j * dy, 0]);   // 3D nodes for deform()

const elements = [];
for (let j = 0; j < P.ny; ++j)
  for (let i = 0; i < P.nx; ++i) {
    const n0 = j * nxn + i;
    elements.push([n0, n0 + 1, n0 + nxn + 1, n0 + nxn]);
  }

// Springs Winkler. plateQ4Solve usa dof=0 (w), deform() debería usar dof=2 (uz)
// Probaré primero dof=2 (convención global 6-DOF)
const springs = [];
for (let j = 0; j < nyn; ++j)
  for (let i = 0; i < nxn; ++i) {
    const onEdgeI = (i === 0 || i === nxn - 1);
    const onEdgeJ = (j === 0 || j === nyn - 1);
    const factor = onEdgeI && onEdgeJ ? 0.25 : (onEdgeI || onEdgeJ ? 0.5 : 1.0);
    const A_trib = dx * dy * factor;
    springs.push({ node: j * nxn + i, dof: 2, k: P.ks * A_trib });   // dof 2 = uz global
  }

// Carga puntual en centro
const ic = Math.floor(P.nx / 2), jc = Math.floor(P.ny / 2);
const centerNode = jc * nxn + ic;
const loads = new Map();
loads.set(centerNode, [0, 0, -P.P, 0, 0, 0]);   // -Z

// Inputs
const E_map = new Map(); const nu_map = new Map(); const t_map = new Map();
for (let i = 0; i < elements.length; ++i) {
  E_map.set(i, P.E);
  nu_map.set(i, P.nu);
  t_map.set(i, P.tz);
}

const nodeInputs = { supports: new Map(), loads };
const elementInputs = {
  elasticities: E_map,
  poissonsRatios: nu_map,
  thicknesses: t_map,
};

console.log(`Test diagnóstico: zapata 1.5×1.5×0.30, P=20tonf, ks=19613, mesh 12×12 (paridad caso 1)`);
console.log(`Modelo: ${nodes.length} nodos, ${elements.length} Q4, ${springs.length} springs`);
console.log(`Springs dof=2 (uz global, 6-DOF convención de deform())`);
console.log(`Esperado: w_max ≈ -4.54 mm (con plateQ4Solve daba -4.54, paridad SAFE 0.03%)`);

const t0 = performance.now();
const r = deform(nodes, elements, nodeInputs, elementInputs, springs);
const t1 = performance.now();

const def = r.deformations.get(centerNode);
const w_max = def[2];
console.log(`\n→ deform() result: w_centro = ${(w_max*1000).toFixed(4)} mm  (${(t1-t0).toFixed(1)} ms)`);

// Sample 4 esquinas
const cornerNodes = [0, P.nx, P.ny*nxn, P.ny*nxn + P.nx];
const cornerNames = ["(0,0)", "(Lz,0)", "(0,Bz)", "(Lz,Bz)"];
console.log(`\n4 esquinas:`);
for (let i = 0; i < 4; ++i) {
  const d = r.deformations.get(cornerNodes[i]);
  console.log(`  ${cornerNames[i]}: w = ${(d[2]*1000).toFixed(4)} mm`);
}

console.log(`\nComparación esperada (caso 1 con plateQ4Solve):`);
console.log(`  centro: -4.5356 mm`);
console.log(`  esquinas (4 todas): -4.3849 mm`);
console.log(`  SAFE: centro -4.5370, esquinas -4.3840 (paridad 0.03%)`);
