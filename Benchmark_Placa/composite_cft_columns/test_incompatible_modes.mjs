#!/usr/bin/env node
/**
 * test_incompatible_modes.mjs — Validación del incompatible modes Wilson 1971
 *
 * Caso clásico Cook-Malkus-Plesha §6.6: viga cantilever modelada como shell
 * Q4 in-plane. Q4 estándar sufre "shear locking parásito" en flexión pura,
 * dando ~50% de la deflexión correcta. Con modos incompatibles converge
 * a ~99% del valor analítico.
 *
 * Modelo: Wall vertical 1×10 m (en plano XZ), t=0.1, fixed en z=0,
 * carga puntual P en x al tope (z=10). Mesh 1×5 (vertical 5 elementos).
 *
 * Solución analítica beam Bernoulli: δ = P·L³/(3·E·I)
 *   I = t·b³/12 = 0.1·1³/12 = 8.333e-3 m⁴
 *   L = 10 m, P = 100 kN, E = 200e6 kN/m²
 *   δ = 100·1000/(3·200e6·8.333e-3) = 1e5/5e6 = 0.020 m = 20.0 mm
 *
 * Q4 estándar (sin incompatible): ~10-12 mm (50-60% — locking severo)
 * Q4 con Wilson 1971 incompatible: ~19-20 mm (95-99%)
 */
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const wasmPath = join(__dirname, "..", "..", "hekatan-fem", "src", "cpp", "built", "deform.wasm");
const jsPath   = join(__dirname, "..", "..", "hekatan-fem", "src", "cpp", "built", "deform.js");
const createModule = (await import(pathToFileURL(jsPath).href)).default;
const mod = await createModule({ wasmBinary: readFileSync(wasmPath) });

function allocate(arr, Ctor, heap) {
  const buf = new Ctor(arr);
  const ptr = mod._malloc(buf.length * buf.BYTES_PER_ELEMENT);
  heap.set(buf, ptr / buf.BYTES_PER_ELEMENT);
  return ptr;
}
function processInput(map) {
  const keys = map ? [...map.keys()] : [];
  const vals = map ? [...map.values()] : [];
  return {
    keysPtr: allocate(keys, Uint32Array, mod.HEAPU32),
    valuesPtr: allocate(vals, Float64Array, mod.HEAPF64),
    size: keys.length,
  };
}

// ── Setup: muro vertical en plano XZ, base en z=0 ──
// Geometría: B=1 m (ancho horizontal x), H=10 m (alto vertical z), t=0.1 m
const B = 1, H = 10, t = 0.1;
const E = 200e6, nu = 0.0;     // ν=0 simplifica beam-FEM
const G = E / 2;
const P = 100;                  // kN lateral en top
const nx = 1, nz = 5;          // mesh 1×5

const dx = B / nx, dz = H / nz;

// Nodes: grid en plano XZ
const nodes = [];
for (let k = 0; k <= nz; k++) {
  for (let i = 0; i <= nx; i++) {
    nodes.push([i * dx, 0, k * dz]);
  }
}
const nNx = nx + 1;

// Elements (Q4 in xz plane)
const shells = [];
for (let k = 0; k < nz; k++) {
  for (let i = 0; i < nx; i++) {
    const n0 = k * nNx + i;
    shells.push([n0, n0 + 1, n0 + nNx + 1, n0 + nNx]);
  }
}

// Supports: base (z=0) fija
const supports = new Map();
for (let i = 0; i <= nx; i++) {
  supports.set(i, [true, true, true, true, true, true]);
}

// Load: P en X al tope, distribuida nodalmente entre los 2 nodos del top
const loads = new Map();
const topStart = nz * nNx;
loads.set(topStart,        [P/2, 0, 0, 0, 0, 0]);
loads.set(topStart + 1,    [P/2, 0, 0, 0, 0, 0]);

// Element inputs
const elasticities = new Map();
const poissons = new Map();
const thicknesses = new Map();
const shearModuli = new Map();
for (let e = 0; e < shells.length; e++) {
  elasticities.set(e, E);
  poissons.set(e, nu);
  thicknesses.set(e, t);
  shearModuli.set(e, G);
}

// Solve via WASM
const gc = [];
const nodesPtr = allocate(nodes.flat(), Float64Array, mod.HEAPF64); gc.push(nodesPtr);
const elIdx = shells.flat();
const elPtr = allocate(elIdx, Uint32Array, mod.HEAPU32); gc.push(elPtr);
const elSizes = shells.map(e => e.length);
const elSizesPtr = allocate(elSizes, Uint32Array, mod.HEAPU32); gc.push(elSizesPtr);

const supKeys = [...supports.keys()];
const supVals = [...supports.values()].flat().map(b => b ? 1 : 0);
const supKp = allocate(supKeys, Uint32Array, mod.HEAPU32); gc.push(supKp);
const supVp = allocate(supVals, Uint8Array, mod.HEAPU8); gc.push(supVp);

const loadKeys = [...loads.keys()];
const loadVals = [...loads.values()].flat();
const lkp = allocate(loadKeys, Uint32Array, mod.HEAPU32); gc.push(lkp);
const lvp = allocate(loadVals, Float64Array, mod.HEAPF64); gc.push(lvp);

const Eo  = processInput(elasticities); gc.push(Eo.keysPtr,  Eo.valuesPtr);
const Ao  = processInput(new Map());    gc.push(Ao.keysPtr,  Ao.valuesPtr);
const Iyo = processInput(new Map());    gc.push(Iyo.keysPtr, Iyo.valuesPtr);
const Izo = processInput(new Map());    gc.push(Izo.keysPtr, Izo.valuesPtr);
const Go  = processInput(shearModuli);  gc.push(Go.keysPtr,  Go.valuesPtr);
const Jo  = processInput(new Map());    gc.push(Jo.keysPtr,  Jo.valuesPtr);
const To  = processInput(thicknesses);  gc.push(To.keysPtr,  To.valuesPtr);
const NUo = processInput(poissons);     gc.push(NUo.keysPtr, NUo.valuesPtr);
const EOo = processInput(new Map());    gc.push(EOo.keysPtr, EOo.valuesPtr);
const ASYo = processInput(new Map());   gc.push(ASYo.keysPtr, ASYo.valuesPtr);
const ASZo = processInput(new Map());   gc.push(ASZo.keysPtr, ASZo.valuesPtr);
const springsPtr = allocate([], Float64Array, mod.HEAPF64); gc.push(springsPtr);
const dPo = mod._malloc(4); gc.push(dPo);
const dSo = mod._malloc(4); gc.push(dSo);
const rPo = mod._malloc(4); gc.push(rPo);
const rSo = mod._malloc(4); gc.push(rSo);

mod._deform(
  nodesPtr, nodes.length, elPtr, elIdx.length, elSizesPtr, shells.length,
  supKp, supVp, supKeys.length, lkp, lvp, loadKeys.length,
  Eo.keysPtr, Eo.valuesPtr, Eo.size, Ao.keysPtr, Ao.valuesPtr, Ao.size,
  Izo.keysPtr, Izo.valuesPtr, Izo.size, Iyo.keysPtr, Iyo.valuesPtr, Iyo.size,
  Go.keysPtr, Go.valuesPtr, Go.size, Jo.keysPtr, Jo.valuesPtr, Jo.size,
  To.keysPtr, To.valuesPtr, To.size, NUo.keysPtr, NUo.valuesPtr, NUo.size,
  EOo.keysPtr, EOo.valuesPtr, EOo.size,
  ASYo.keysPtr, ASYo.valuesPtr, ASYo.size,
  ASZo.keysPtr, ASZo.valuesPtr, ASZo.size,
  springsPtr, 0, dPo, dSo, rPo, rSo
);

const dPtr = mod.HEAPU32[dPo / 4], dSize = mod.HEAPU32[dSo / 4];
const deformations = new Map();
if (dSize > 0 && dPtr) {
  const flat = new Float64Array(mod.HEAPF64.buffer, dPtr, dSize);
  for (let i = 0; i < dSize; i += 7) deformations.set(flat[i], [...flat.slice(i + 1, i + 7)]);
}

// Top-tip displacement in X (lateral)
const uTopL = deformations.get(topStart);
const uTopR = deformations.get(topStart + 1);
const u_tip = ((uTopL[0] || 0) + (uTopR[0] || 0)) / 2 * 1000;  // mm

// Analytical: cantilever beam Bernoulli, δ = PL³/(3EI)
const I = t * B * B * B / 12;
const delta_analytical = P * H * H * H / (3 * E * I) * 1000;

console.log(`# Cook 1989 §6.6 — Cantilever wall in-plane bending (membrana)`);
console.log(`# Wall vertical: B=${B}m, H=${H}m, t=${t}m, mesh ${nx}×${nz}`);
console.log(`# E=${E/1e6} GPa, ν=${nu}, P=${P} kN @ top`);
console.log(``);
console.log(`Analítica beam Bernoulli: δ_tip = PL³/(3EI) = ${delta_analytical.toFixed(4)} mm`);
console.log(`Hekatan Q4 (membrana):    δ_tip =                ${u_tip.toFixed(4)} mm`);
console.log(`Eficiencia: ${(u_tip/delta_analytical*100).toFixed(2)}% del analítico`);
console.log(``);
console.log(`Esperado:`);
console.log(`  Q4 estándar (sin Wilson):       ~50-60% (shear locking parásito)`);
console.log(`  Q4 con Wilson 1971 incompatible: ~95-99% (sin locking)`);

gc.forEach(p => mod._free(p));
