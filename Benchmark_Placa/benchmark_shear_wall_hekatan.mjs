#!/usr/bin/env node
/**
 * run_shear_wall_q4.mjs — Replica el ejemplo shear-wall-q4 vía el solver
 * Eigen WASM C++ de hekatan-fem. Comparable contra ETABS/SAP/OpenSees/MATLAB.
 *
 * Uso: node run_shear_wall_q4.mjs
 */
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const wasmPath = join(__dirname, "hekatan-fem", "src", "cpp", "built", "deform.wasm");
const jsPath   = join(__dirname, "hekatan-fem", "src", "cpp", "built", "deform.js");
const createModule = (await import(pathToFileURL(jsPath).href)).default;
const mod = await createModule({ wasmBinary: readFileSync(wasmPath) });

function allocate(arr, Ctor, heap) {
  const buf = new Ctor(arr);
  const ptr = mod._malloc(buf.length * buf.BYTES_PER_ELEMENT);
  heap.set(buf, ptr / buf.BYTES_PER_ELEMENT);
  return ptr;
}

function processInput(inputMap) {
  const keys   = inputMap ? Array.from(inputMap.keys())   : [];
  const values = inputMap ? Array.from(inputMap.values()) : [];
  const keysPtr   = allocate(keys,   Uint32Array,   mod.HEAPU32);
  const valuesPtr = allocate(values, Float64Array, mod.HEAPF64);
  return { keysPtr, valuesPtr, size: keys.length, gc: [keysPtr, valuesPtr] };
}

// ── Modelo shear-wall-q4 (idéntico al benchmark validado del repo) ──
const W = 5, H = 3, t = 0.2, E = 25e6, nu = 0.2, P = 100;
const G = E / (2 * (1 + nu));
const nx = 8, ny = 6, nNx = nx + 1;
const dx = W / nx, dz = H / ny;

const nodes = [];
for (let j = 0; j <= ny; j++)
  for (let i = 0; i <= nx; i++)
    nodes.push([i * dx, 0, j * dz]);

const elements = [];
for (let j = 0; j < ny; j++)
  for (let i = 0; i < nx; i++)
    elements.push([j * nNx + i, j * nNx + i + 1, (j + 1) * nNx + i + 1, (j + 1) * nNx + i]);

const supports = new Map();
for (let i = 0; i <= nx; i++) supports.set(i, [true, true, true, true, true, true]);

const loads = new Map();
const pn = P / nNx;
for (let i = 0; i <= nx; i++) loads.set(ny * nNx + i, [pn, 0, 0, 0, 0, 0]);

const elasticities  = new Map(elements.map((_, i) => [i, E]));
const poissons      = new Map(elements.map((_, i) => [i, nu]));
const thicknesses   = new Map(elements.map((_, i) => [i, t]));
const shearModuli   = new Map(elements.map((_, i) => [i, G]));
const densities     = new Map(elements.map((_, i) => [i, 24 / 9.80665]));

// ── Llamar deform con signatura idéntica a cli.mjs ──
const gc = [];
const nodesPtr = allocate(nodes.flat(), Float64Array, mod.HEAPF64); gc.push(nodesPtr);
const elementIndices = elements.flat();
const elementsPtr = allocate(elementIndices, Uint32Array, mod.HEAPU32); gc.push(elementsPtr);
const elementSizes = elements.map(e => e.length);
const elementSizesPtr = allocate(elementSizes, Uint32Array, mod.HEAPU32); gc.push(elementSizesPtr);

const supKeys = [...supports.keys()];
const supVals = [...supports.values()].flat().map(b => b ? 1 : 0);
const supKeysPtr = allocate(supKeys, Uint32Array, mod.HEAPU32); gc.push(supKeysPtr);
const supValsPtr = allocate(supVals, Uint8Array, mod.HEAPU8); gc.push(supValsPtr);

const loadKeys = [...loads.keys()];
const loadVals = [...loads.values()].flat();
const loadKeysPtr = allocate(loadKeys, Uint32Array, mod.HEAPU32); gc.push(loadKeysPtr);
const loadValsPtr = allocate(loadVals, Float64Array, mod.HEAPF64); gc.push(loadValsPtr);

const Eobj    = processInput(elasticities); gc.push(...Eobj.gc);
const Aobj    = processInput(new Map()); gc.push(...Aobj.gc);  // shells no usan A
const Izobj   = processInput(new Map()); gc.push(...Izobj.gc);
const Iyobj   = processInput(new Map()); gc.push(...Iyobj.gc);
const Gobj    = processInput(shearModuli); gc.push(...Gobj.gc);
const Jobj    = processInput(new Map()); gc.push(...Jobj.gc);
const Tobj    = processInput(thicknesses); gc.push(...Tobj.gc);
const NUobj   = processInput(poissons); gc.push(...NUobj.gc);
const EOobj   = processInput(new Map()); gc.push(...EOobj.gc);

// Springs (Winkler foundation) — vacío en este caso
const springsFlat = []; // [node0, dof0, k0, node1, dof1, k1, ...]
const springsPtr = allocate(springsFlat, Float64Array, mod.HEAPF64); gc.push(springsPtr);

const deformPtrOut  = mod._malloc(4); gc.push(deformPtrOut);
const deformSizeOut = mod._malloc(4); gc.push(deformSizeOut);
const reactPtrOut   = mod._malloc(4); gc.push(reactPtrOut);
const reactSizeOut  = mod._malloc(4); gc.push(reactSizeOut);

mod._deform(
  nodesPtr, nodes.length,
  elementsPtr, elementIndices.length,
  elementSizesPtr, elements.length,
  supKeysPtr, supValsPtr, supKeys.length,
  loadKeysPtr, loadValsPtr, loadKeys.length,
  Eobj.keysPtr, Eobj.valuesPtr, Eobj.size,
  Aobj.keysPtr, Aobj.valuesPtr, Aobj.size,
  Izobj.keysPtr, Izobj.valuesPtr, Izobj.size,
  Iyobj.keysPtr, Iyobj.valuesPtr, Iyobj.size,
  Gobj.keysPtr, Gobj.valuesPtr, Gobj.size,
  Jobj.keysPtr, Jobj.valuesPtr, Jobj.size,
  Tobj.keysPtr, Tobj.valuesPtr, Tobj.size,
  NUobj.keysPtr, NUobj.valuesPtr, NUobj.size,
  EOobj.keysPtr, EOobj.valuesPtr, EOobj.size,
  springsPtr, springsFlat.length / 3,
  deformPtrOut, deformSizeOut,
  reactPtrOut, reactSizeOut
);

const dPtr = mod.HEAPU32[deformPtrOut / 4];
const dSize = mod.HEAPU32[deformSizeOut / 4];

const deformations = new Map();
if (dSize > 0 && dPtr) {
  const flat = new Float64Array(mod.HEAPF64.buffer, dPtr, dSize);
  for (let i = 0; i < dSize; i += 7) {
    const idx = flat[i];
    deformations.set(idx, Array.from(flat.slice(i + 1, i + 7)));
  }
}

// ── Resultado ──
const topCenter = ny * nNx + Math.floor(nx / 2);
const def = deformations.get(topCenter);
const ux = def ? def[0] : 0;

console.log("=== Hekatan Struct CLI: shear-wall-q4 (Eigen WASM C++) ===");
console.log(`W=${W} m, H=${H} m, t=${t} m, E=${E} kN/m^2, nu=${nu}, P=${P} kN`);
console.log(`Mesh: ${nx}x${ny} Q4 = ${nx*ny} elementos, ${nodes.length} nodos`);
console.log("");
console.log(`Ux top center = ${ux.toExponential(4)} m  (Hekatan Struct)`);
console.log("");
console.log("--- Validación cruzada (5 vías) ---");
console.log(`  ETABS         : 4.582e-05 m  (ref)`);
console.log(`  OpenSees TCL  : 4.602e-05 m`);
console.log(`  SAP2000       : 4.629e-05 m`);
console.log(`  MATLAB R2017a : 4.646e-05 m`);
console.log(`  Hekatan Lab   : 4.646e-05 m`);
console.log(`  Hekatan Struct: ${Math.abs(ux).toExponential(3)} m  ← este run`);
console.log("");
const errs = {
  ETABS: Math.abs(Math.abs(ux) - 4.582e-5) / 4.582e-5 * 100,
  OpenSees: Math.abs(Math.abs(ux) - 4.602e-5) / 4.602e-5 * 100,
  SAP2000: Math.abs(Math.abs(ux) - 4.629e-5) / 4.629e-5 * 100,
  MATLAB: Math.abs(Math.abs(ux) - 4.646e-5) / 4.646e-5 * 100,
};
console.log(`Error vs ETABS:    ${errs.ETABS.toFixed(2)}%`);
console.log(`Error vs OpenSees: ${errs.OpenSees.toFixed(2)}%`);
console.log(`Error vs SAP2000:  ${errs.SAP2000.toFixed(2)}%`);
console.log(`Error vs MATLAB:   ${errs.MATLAB.toFixed(2)}%`);

gc.forEach(p => mod._free(p));
