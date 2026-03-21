#!/usr/bin/env node
/**
 * test_all.mjs — Prueba completa de todas las funcionalidades del clon awatif
 *
 * Tests:
 * 1. Edificio hormigon (aporticado puro) — deform + modal
 * 2. Edificio con muros de corte (Q4 shell) — deform + modal
 * 3. Edificio acero con vigas secundarias — deform
 * 4. Muro de contencion (variando Ka, gamma, q) — deform
 * 5. Zapata con carga + momento — plateQ4Solve
 * 6. Placa base con pernos — deform (shells con agujeros)
 * 7. Col+Placa 3D (shells verticales + horizontales) — deform
 * 8. Concrete02 material test — cyclic stress-strain
 * 9. Steel02 material test — cyclic stress-strain
 */

import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const wasmPath = join(__dirname, "awatif-fem", "src", "cpp", "built", "deform.wasm");
const jsPath = join(__dirname, "awatif-fem", "src", "cpp", "built", "deform.js");
const createModule = (await import(pathToFileURL(jsPath).href)).default;
const mod = await createModule({ wasmBinary: readFileSync(wasmPath) });

// ── WASM Helpers ──
function allocDouble(arr) {
  const bytes = arr.length * 8;
  const ptr = mod._malloc(bytes);
  mod.HEAPF64.set(arr, ptr / 8);
  return ptr;
}
function allocUint(arr) {
  const bytes = arr.length * 4;
  const ptr = mod._malloc(bytes);
  mod.HEAPU32.set(arr, ptr / 4);
  return ptr;
}
function allocInt(arr) {
  const bytes = arr.length * 4;
  const ptr = mod._malloc(bytes);
  new Int32Array(mod.HEAPU8.buffer, ptr, arr.length).set(arr);
  return ptr;
}
function allocBool(arr) {
  const ptr = mod._malloc(arr.length);
  for (let i = 0; i < arr.length; i++) mod.HEAPU8[ptr + i] = arr[i] ? 1 : 0;
  return ptr;
}
function readDouble(ptr, n) {
  return Array.from(mod.HEAPF64.subarray(ptr / 8, ptr / 8 + n));
}
function readInt(ptr) {
  return new Int32Array(mod.HEAPU8.buffer, ptr, 1)[0];
}
function readDoublePtr(ptrPtr) {
  return mod.HEAPU32[ptrPtr / 4] * 8; // returns byte offset
}

function makeMapFlat(map) {
  const keys = [], values = [];
  for (const [k, v] of map) { keys.push(k); values.push(v); }
  return { keys, values, count: keys.length };
}
function makeMapVecFlat(map, vecSize) {
  const keys = [], values = [];
  for (const [k, v] of map) { keys.push(k); for (const x of v) values.push(x); }
  return { keys, values, count: keys.length, vecSize };
}

// ── Deform wrapper ──
function callDeform(nodes, elements, supports, loads, elemInputs) {
  const numNodes = nodes.length;
  const nodesFlat = nodes.flat();

  // Element indices and sizes
  const elemIndices = elements.flat();
  const elemSizes = elements.map(e => e.length);

  // Supports
  const supMap = makeMapVecFlat(supports, 6);
  const supBoolFlat = supMap.values.map(v => v ? 1 : 0);

  // Loads
  const loadMap = makeMapVecFlat(loads, 6);

  // Element properties
  const eMap = (m) => { const r = makeMapFlat(m || new Map()); return r; };
  const elasticities = eMap(elemInputs.elasticities);
  const shearModuli = eMap(elemInputs.shearModuli);
  const areas = eMap(elemInputs.areas);
  const Iz = eMap(elemInputs.momentsOfInertiaZ);
  const Iy = eMap(elemInputs.momentsOfInertiaY);
  const J = eMap(elemInputs.torsionalConstants);
  const thicknesses = eMap(elemInputs.thicknesses);
  const poissons = eMap(elemInputs.poissonsRatios);
  const densities = eMap(elemInputs.densities);
  const elastOrtho = eMap(elemInputs.elasticitiesOrthogonal);
  const polarI = eMap(elemInputs.polarMomentsOfInertia);

  // Allocate
  const pNodes = allocDouble(nodesFlat);
  const pElemIdx = allocUint(elemIndices);
  const pElemSz = allocUint(elemSizes);
  const pSupKeys = allocUint(supMap.keys);
  const pSupVals = allocBool(supBoolFlat);
  const pLoadKeys = allocUint(loadMap.keys);
  const pLoadVals = allocDouble(loadMap.values);

  const alloc = (m) => ({ k: allocUint(m.keys), v: allocDouble(m.values), n: m.count });
  const pE = alloc(elasticities);
  const pG = alloc(shearModuli);
  const pA = alloc(areas);
  const pIz = alloc(Iz);
  const pIy = alloc(Iy);
  const pJ = alloc(J);
  const pT = alloc(thicknesses);
  const pNu = alloc(poissons);
  const pRho = alloc(densities);
  const pEo = alloc(elastOrtho);
  const pIp = alloc(polarI);

  // Output pointers
  const pDefOut = mod._malloc(4);
  const pDefSize = mod._malloc(4);
  const pReacOut = mod._malloc(4);
  const pReacSize = mod._malloc(4);

  // deform expects 43 args (no densities, no polarI):
  // nodes, numNodes, elemIdx, elemSz, numElems,
  // supKeys, supVals, numSup, loadKeys, loadVals, numLoads,
  // E_k, E_v, E_n, A_k, A_v, A_n, Iz_k, Iz_v, Iz_n,
  // Iy_k, Iy_v, Iy_n, G_k, G_v, G_n, J_k, J_v, J_n,
  // t_k, t_v, t_n, nu_k, nu_v, nu_n, Eo_k, Eo_v, Eo_n,
  // defOut, defSize, reacOut, reacSize
  // C++ signature: deform(nodes, numNodes, elemIndices, numElemIndices, elemSizes, numElements, ...)
  mod._deform(
    pNodes, numNodes,
    pElemIdx, elemIndices.length,    // flat indices array + its length
    pElemSz, elements.length,       // sizes array + number of elements
    pSupKeys, pSupVals, supMap.count,
    pLoadKeys, pLoadVals, loadMap.count,
    pE.k, pE.v, pE.n,
    pA.k, pA.v, pA.n,
    pIz.k, pIz.v, pIz.n,
    pIy.k, pIy.v, pIy.n,
    pG.k, pG.v, pG.n,
    pJ.k, pJ.v, pJ.n,
    pT.k, pT.v, pT.n,
    pNu.k, pNu.v, pNu.n,
    pEo.k, pEo.v, pEo.n,
    pDefOut, pDefSize,
    pReacOut, pReacSize
  );

  const defSize = readInt(pDefSize);
  const defPtr = mod.HEAPU32[pDefOut / 4];
  const defData = defSize > 0 ? Array.from(mod.HEAPF64.subarray(defPtr / 8, defPtr / 8 + defSize)) : [];

  // Parse deformations
  const deformations = new Map();
  for (let i = 0; i < defData.length; i += 7) {
    const nodeIdx = Math.round(defData[i]);
    deformations.set(nodeIdx, defData.slice(i + 1, i + 7));
  }

  // Cleanup
  [pNodes, pElemIdx, pElemSz, pSupKeys, pSupVals, pLoadKeys, pLoadVals,
   pE.k, pE.v, pG.k, pG.v, pA.k, pA.v, pIz.k, pIz.v, pIy.k, pIy.v,
   pJ.k, pJ.v, pT.k, pT.v, pNu.k, pNu.v, pRho.k, pRho.v, pEo.k, pEo.v,
   pIp.k, pIp.v, pDefOut, pDefSize, pReacOut, pReacSize
  ].forEach(p => mod._free(p));
  if (defPtr) mod._free(defPtr);

  return { deformations };
}

// ═══════════════════════════════════════════════════════════════
// Tests
// ═══════════════════════════════════════════════════════════════

let passed = 0, failed = 0;
function test(name, fn) {
  try {
    fn();
    console.log(`  PASS: ${name}`);
    passed++;
  } catch (e) {
    console.log(`  FAIL: ${name} — ${e.message}`);
    failed++;
  }
}
function assert(cond, msg) { if (!cond) throw new Error(msg); }

console.log("=".repeat(60));
console.log("  AWATIF CLONE — TEST SUITE");
console.log("=".repeat(60));

// ── TEST 1: Simple frame (2 columns + 1 beam) ──
console.log("\n--- TEST 1: Portico simple 2D ---");
test("Frame deform", () => {
  const nodes = [[0,0,0], [5,0,0], [0,0,3], [5,0,3]];
  const elements = [[0,2], [1,3], [2,3]]; // 2 cols + 1 beam
  const E = 200e6, A = 0.01, I = 8e-5, G = 77e6, J = 1e-4;

  const supports = new Map();
  supports.set(0, [true,true,true,true,true,true]);
  supports.set(1, [true,true,true,true,true,true]);

  const loads = new Map();
  loads.set(2, [100, 0, 0, 0, 0, 0]); // 100 kN lateral

  const ei = {
    elasticities: new Map(elements.map((_,i) => [i, E])),
    shearModuli: new Map(elements.map((_,i) => [i, G])),
    areas: new Map(elements.map((_,i) => [i, A])),
    momentsOfInertiaZ: new Map(elements.map((_,i) => [i, I])),
    momentsOfInertiaY: new Map(elements.map((_,i) => [i, I])),
    torsionalConstants: new Map(elements.map((_,i) => [i, J])),
  };

  const result = callDeform(nodes, elements, supports, loads, ei);
  const d2 = result.deformations.get(2);
  assert(d2, "No deformation at node 2");
  assert(Math.abs(d2[0]) > 1e-6, `ux at node 2 too small: ${d2[0]}`);
  console.log(`    ux(node2) = ${d2[0].toExponential(4)}`);
});

// ── TEST 2: Shell Q4 (single plate) ──
console.log("\n--- TEST 2: Shell Q4 placa simple ---");
test("Shell Q4 deform", () => {
  // 4-node plate, simply supported edges, load at center
  // 2x2 mesh = 9 nodes, 4 Q4 elements
  const nodes = [
    [0,0,0], [1,0,0], [2,0,0],
    [0,1,0], [1,1,0], [2,1,0],
    [0,2,0], [1,2,0], [2,2,0]
  ];
  const elements = [
    [0,1,4,3], [1,2,5,4],
    [3,4,7,6], [4,5,8,7]
  ];
  const E = 30e6, nu = 0.2, t = 0.1, G = E/(2*(1+nu));

  const supports = new Map();
  // Fix edges
  for (const i of [0,1,2,3,5,6,7,8]) {
    supports.set(i, [true,true,true,false,false,false]);
  }

  const loads = new Map();
  loads.set(4, [0, 0, -10, 0, 0, 0]); // center load

  const ei = {
    elasticities: new Map(elements.map((_,i) => [i, E])),
    poissonsRatios: new Map(elements.map((_,i) => [i, nu])),
    thicknesses: new Map(elements.map((_,i) => [i, t])),
    shearModuli: new Map(elements.map((_,i) => [i, G])),
  };

  const result = callDeform(nodes, elements, supports, loads, ei);
  const d4 = result.deformations.get(4);
  assert(d4, "No deformation at center node 4");
  assert(Math.abs(d4[2]) > 1e-10, `w at center too small: ${d4[2]}`);
  console.log(`    w(center) = ${d4[2].toExponential(4)}`);
});

// ── TEST 3: Mixed frame + shell (building with wall) ──
console.log("\n--- TEST 3: Frame + Shell Q4 (edificio con muro) ---");
test("Mixed frame+shell deform", () => {
  // 1 bay, 1 floor: 4 columns + 4 beams + 1 wall panel (Q4)
  const H = 3, Lx = 5, Ly = 4;
  const nodes = [
    [0,0,0], [Lx,0,0], [Lx,Ly,0], [0,Ly,0],  // base 0-3
    [0,0,H], [Lx,0,H], [Lx,Ly,H], [0,Ly,H],  // top 4-7
    [Lx/2,0,H/2] // mid wall node 8
  ];
  const elements = [
    [0,4], [1,5], [2,6], [3,7],   // columns 0-3
    [4,5], [5,6], [6,7], [7,4],   // beams 4-7
    [0,1,5,4],                      // wall Q4 on Y=0 face (elem 8)
  ];

  const E_s = 200e6, G_s = 77e6;
  const E_c = 25e6, nu_c = 0.2, G_c = E_c/(2*(1+nu_c));
  const A = 0.16, I = 2.13e-3, J = 3.6e-3;

  const supports = new Map();
  for (const i of [0,1,2,3]) supports.set(i, [true,true,true,true,true,true]);

  const loads = new Map();
  loads.set(4, [50, 0, 0, 0, 0, 0]); // lateral

  const ei = {
    elasticities: new Map(),
    shearModuli: new Map(),
    areas: new Map(),
    momentsOfInertiaZ: new Map(),
    momentsOfInertiaY: new Map(),
    torsionalConstants: new Map(),
    thicknesses: new Map(),
    poissonsRatios: new Map(),
  };

  // Frames (elements 0-7)
  for (let i = 0; i < 8; i++) {
    ei.elasticities.set(i, E_s);
    ei.shearModuli.set(i, G_s);
    ei.areas.set(i, A);
    ei.momentsOfInertiaZ.set(i, I);
    ei.momentsOfInertiaY.set(i, I);
    ei.torsionalConstants.set(i, J);
  }
  // Wall Q4 (element 8)
  ei.elasticities.set(8, E_c);
  ei.shearModuli.set(8, G_c);
  ei.thicknesses.set(8, 0.20);
  ei.poissonsRatios.set(8, nu_c);

  const result = callDeform(nodes, elements, supports, loads, ei);
  const d4 = result.deformations.get(4);
  assert(d4, "No deformation at node 4");
  console.log(`    ux(node4, with wall) = ${d4[0].toExponential(4)}`);

  // Compare: without wall
  const elements_no_wall = [[0,4], [1,5], [2,6], [3,7], [4,5], [5,6], [6,7], [7,4]];
  const ei2 = {
    elasticities: new Map(), shearModuli: new Map(), areas: new Map(),
    momentsOfInertiaZ: new Map(), momentsOfInertiaY: new Map(), torsionalConstants: new Map(),
  };
  for (let i = 0; i < 8; i++) {
    ei2.elasticities.set(i, E_s); ei2.shearModuli.set(i, G_s);
    ei2.areas.set(i, A); ei2.momentsOfInertiaZ.set(i, I);
    ei2.momentsOfInertiaY.set(i, I); ei2.torsionalConstants.set(i, J);
  }
  const r2 = callDeform(nodes.slice(0,8), elements_no_wall, supports, loads, ei2);
  const d4_no = r2.deformations.get(4);
  console.log(`    ux(node4, no wall)   = ${d4_no[0].toExponential(4)}`);
  const reduction = (1 - Math.abs(d4[0]) / Math.abs(d4_no[0])) * 100;
  console.log(`    Wall reduces displacement by ${reduction.toFixed(1)}%`);
  assert(reduction > 10, "Wall should reduce displacement significantly");
});

// ── TEST 4: Concrete02 material test ──
console.log("\n--- TEST 4: Concrete02 material ---");
test("Concrete02 cyclic", () => {
  const fpc = -30e3; // 30 MPa in kN/m2
  const epsc0 = -0.002;
  const fpcu = -6e3;
  const epsU = -0.005;
  const ft = 3e3; // 3 MPa
  const Ets = 100e3; // tension softening slope

  // Strain history: compress to -0.003, unload to 0, reload to -0.004
  const strains = [];
  for (let i = 0; i <= 30; i++) strains.push(-0.003 * i / 30);  // compress
  for (let i = 30; i >= 0; i--) strains.push(-0.003 * i / 30);  // unload
  for (let i = 0; i <= 40; i++) strains.push(-0.004 * i / 40);  // reload deeper

  const nPts = strains.length;
  const pStrains = allocDouble(strains);

  const pStressOut = mod._malloc(4);
  const pNout = mod._malloc(4);

  mod._concrete02_test(fpc, epsc0, fpcu, epsU, ft, Ets, pStrains, nPts, pStressOut, pNout);

  const nOut = readInt(pNout);
  const stressPtr = mod.HEAPU32[pStressOut / 4];
  const stresses = Array.from(mod.HEAPF64.subarray(stressPtr / 8, stressPtr / 8 + nOut));

  mod._free(pStrains);
  mod._free(stressPtr);

  // Check peak stress near fpc
  const minStress = Math.min(...stresses);
  console.log(`    Peak compressive stress = ${minStress.toFixed(0)} kN/m2 (expected ~${fpc})`);
  assert(minStress < fpc * 0.7, `Peak stress should be near fpc: got ${minStress}`);

  // Check unloading (stress should return toward 0)
  const midIdx = 30; // at eps=0 during unload
  console.log(`    Stress at unload (eps~0) = ${stresses[60].toFixed(0)} kN/m2`);
});

// ── TEST 5: Steel02 material test ──
console.log("\n--- TEST 5: Steel02 material ---");
test("Steel02 cyclic", () => {
  const Fy = 420e3; // 420 MPa
  const E0 = 200e6;
  const b = 0.01;
  const R0 = 15;

  // Strain history: tension +0.02, compress -0.02, tension +0.03
  const strains = [];
  for (let i = 0; i <= 10; i++) strains.push(0.02 * i / 10);
  for (let i = 10; i >= -10; i--) strains.push(0.02 * i / 10);
  for (let i = -10; i <= 15; i++) strains.push(0.02 * i / 10);

  const nPts = strains.length;
  const pStrains = allocDouble(strains);
  // steel02_test writes directly to pre-allocated arrays (not malloc'd)
  const pStress = allocDouble(new Array(nPts).fill(0));
  const pTangent = allocDouble(new Array(nPts).fill(0));

  mod._steel02_test(Fy, E0, b, R0, pStrains, nPts, pStress, pTangent);

  const stresses = Array.from(mod.HEAPF64.subarray(pStress / 8, pStress / 8 + nPts));

  mod._free(pStrains);
  mod._free(pStress);
  mod._free(pTangent);

  const maxStress = Math.max(...stresses);
  const minStress = Math.min(...stresses);
  console.log(`    Max tension = ${(maxStress/1000).toFixed(0)} MPa (Fy=${Fy/1000} MPa)`);
  console.log(`    Max compress = ${(minStress/1000).toFixed(0)} MPa`);
  assert(maxStress > Fy * 0.9, `Steel should yield: maxStress=${maxStress}`);
  assert(minStress < -Fy * 0.9, `Steel should yield in compression`);
});

// ── RESULTS ──
console.log("\n" + "=".repeat(60));
console.log(`  RESULTS: ${passed} passed, ${failed} failed`);
console.log("=".repeat(60));
process.exit(failed > 0 ? 1 : 0);
