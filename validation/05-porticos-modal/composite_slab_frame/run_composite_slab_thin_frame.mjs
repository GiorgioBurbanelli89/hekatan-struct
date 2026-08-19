#!/usr/bin/env node
/**
 * run_composite_slab_thin_frame.mjs
 *
 * Replica el benchmark composite_slab_thin_frame.m (MATLAB) con el solver
 * Eigen WASM C++ de hekatan-fem.
 *
 * Modelo:
 *   - Losa cuadrada 4 x 4 m, t = 0.10 m (concreto E=25000 MPa, nu=0.20)
 *   - Mesh 4x4 = 16 Q4 shell-thin
 *   - 16 frames perimetrales (4 por lado), W360x60 acero E=200000 MPa
 *   - 4 columnas-pin en esquinas (uz=ux=uy=0, rotaciones libres)
 *   - Carga uniforme q = 5 kN/m^2 hacia abajo, distribuida nodalmente
 *
 * Comparable contra MATLAB CLI y ETABS.
 */
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const wasmPath = join(__dirname, "..", "hekatan-fem", "src", "cpp", "built", "deform.wasm");
const jsPath   = join(__dirname, "..", "hekatan-fem", "src", "cpp", "built", "deform.js");
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
  const keysPtr   = allocate(keys,   Uint32Array,  mod.HEAPU32);
  const valuesPtr = allocate(values, Float64Array, mod.HEAPF64);
  return { keysPtr, valuesPtr, size: keys.length, gc: [keysPtr, valuesPtr] };
}

// ── Modelo ──
const Lx = 4, Ly = 4, t_slab = 0.10;
const E_c = 25e6, nu_c = 0.20;
const G_c = E_c / (2 * (1 + nu_c));
const E_s = 200e6, G_s = 77e6;
// W360x60
const A_b = 7610e-6;
const Iy_b = 12.9e-5;   // strong axis (vertical bending)
const Iz_b = 1.20e-5;   // weak axis
const J_b = 0.31e-6;
const q_unif = 5;       // kN/m^2

const nx = 4, ny = 4;
const nNx = nx + 1, nNy = ny + 1;
const dx = Lx / nx, dy = Ly / ny;

// Nodos (z=0 plano losa)
const nodes = [];
for (let j = 0; j <= ny; j++)
  for (let i = 0; i <= nx; i++)
    nodes.push([i * dx, j * dy, 0]);

const nNodes = nodes.length;

// Q4 shells (4 nodos CCW)
const shells = [];
for (let j = 0; j < ny; j++) {
  for (let i = 0; i < nx; i++) {
    const n_bl = j * nNx + i;
    const n_br = n_bl + 1;
    const n_tr = (j + 1) * nNx + i + 1;
    const n_tl = (j + 1) * nNx + i;
    shells.push([n_bl, n_br, n_tr, n_tl]);
  }
}

// Frames perimetrales (2 nodos)
const frames = [];
// Bottom (y=0)
for (let i = 0; i < nx; i++) frames.push([i, i + 1]);
// Top (y=Ly)
const baseTop = ny * nNx;
for (let i = 0; i < nx; i++) frames.push([baseTop + i, baseTop + i + 1]);
// Left (x=0)
for (let j = 0; j < ny; j++) frames.push([j * nNx, (j + 1) * nNx]);
// Right (x=Lx)
for (let j = 0; j < ny; j++) frames.push([j * nNx + nx, (j + 1) * nNx + nx]);

// Concatena: shells primero, despues frames (igual que MATLAB)
const elements = [...shells, ...frames];

// Soportes: 4 esquinas pinned (ux=uy=uz=0; rotaciones libres)
const c1 = 0;
const c2 = nx;
const c3 = ny * nNx;
const c4 = ny * nNx + nx;
const supports = new Map();
const fixUVW = [true, true, true, false, false, false];
supports.set(c1, fixUVW);
supports.set(c2, fixUVW);
supports.set(c3, fixUVW);
supports.set(c4, fixUVW);

// Cargas: distribuir q*A/4 a cada nodo de cada shell (Fz = -q*A/4)
const loads = new Map();
for (const sh of shells) {
  const A = dx * dy;
  const fz = -q_unif * A / 4;
  for (const n of sh) {
    const cur = loads.get(n) || [0, 0, 0, 0, 0, 0];
    cur[2] += fz;
    loads.set(n, cur);
  }
}

// Inputs por elemento (Map: id_elemento → valor)
const elasticities = new Map();
const poissons     = new Map();
const thicknesses  = new Map();
const shearModuli  = new Map();
const areas        = new Map();
const Iz_map       = new Map();
const Iy_map       = new Map();
const J_map        = new Map();

for (let e = 0; e < shells.length; e++) {
  elasticities.set(e, E_c);
  poissons.set(e, nu_c);
  thicknesses.set(e, t_slab);
  shearModuli.set(e, G_c);
}
for (let f = 0; f < frames.length; f++) {
  const e = shells.length + f;
  elasticities.set(e, E_s);
  shearModuli.set(e, G_s);
  areas.set(e, A_b);
  Iz_map.set(e, Iz_b);
  Iy_map.set(e, Iy_b);
  J_map.set(e, J_b);
}

console.log("=== Hekatan Struct CLI: composite slab thin + frames ===");
console.log(`Slab: ${Lx}x${Ly} m, t=${t_slab} m, q=${q_unif} kN/m^2`);
console.log(`Mesh: ${nx}x${ny}=${shells.length} Q4 thin, ${frames.length} frames`);
console.log(`Nodos = ${nNodes}, elementos = ${elements.length}`);
console.log(`Esquinas pin (0-indexed): ${c1}, ${c2}, ${c3}, ${c4}`);
console.log("");

// ── Llamar deform ──
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

const Eobj  = processInput(elasticities); gc.push(...Eobj.gc);
const Aobj  = processInput(areas);        gc.push(...Aobj.gc);
const Izobj = processInput(Iz_map);       gc.push(...Izobj.gc);
const Iyobj = processInput(Iy_map);       gc.push(...Iyobj.gc);
const Gobj  = processInput(shearModuli);  gc.push(...Gobj.gc);
const Jobj  = processInput(J_map);        gc.push(...Jobj.gc);
const Tobj  = processInput(thicknesses);  gc.push(...Tobj.gc);
const NUobj = processInput(poissons);     gc.push(...NUobj.gc);
const EOobj = processInput(new Map());    gc.push(...EOobj.gc);

const springsFlat = [];
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

// Leer deformaciones
const dPtr  = mod.HEAPU32[deformPtrOut / 4];
const dSize = mod.HEAPU32[deformSizeOut / 4];
const deformations = new Map();
if (dSize > 0 && dPtr) {
  const flat = new Float64Array(mod.HEAPF64.buffer, dPtr, dSize);
  for (let i = 0; i < dSize; i += 7) {
    const idx = flat[i];
    deformations.set(idx, Array.from(flat.slice(i + 1, i + 7)));
  }
}

// Leer reacciones
const rPtr  = mod.HEAPU32[reactPtrOut / 4];
const rSize = mod.HEAPU32[reactSizeOut / 4];
const reactions = new Map();
if (rSize > 0 && rPtr) {
  const flat = new Float64Array(mod.HEAPF64.buffer, rPtr, rSize);
  for (let i = 0; i < rSize; i += 7) {
    const idx = flat[i];
    reactions.set(idx, Array.from(flat.slice(i + 1, i + 7)));
  }
}

// ── Resultados ──
const i_c = nx / 2;
const j_c = ny / 2;
const n_c = j_c * nNx + i_c;

const u_c = deformations.get(n_c);
const w_center_mm = u_c ? u_c[2] * 1000 : 0;

console.log("--- Desplazamientos ---");
console.log(`w_centro = ${w_center_mm.toFixed(4)} mm  (nodo ${n_c})`);
console.log("");

// Reacciones en esquinas
const cornerNodes = [c1, c2, c3, c4];
console.log("--- Reacciones verticales en esquinas ---");
let sumR = 0;
for (const cn of cornerNodes) {
  const r = reactions.get(cn);
  if (r) {
    console.log(`  Nodo ${cn}: Rz = ${r[2].toFixed(3)} kN`);
    sumR += r[2];
  } else {
    console.log(`  Nodo ${cn}: (no reaction returned)`);
  }
}
const Q_total = q_unif * Lx * Ly;
console.log(`  Suma Rz       = ${sumR.toFixed(3)} kN`);
console.log(`  Carga total Q*A = ${Q_total.toFixed(3)} kN`);
console.log(`  Error eq      = ${(Math.abs(sumR - Q_total) / Q_total * 100).toFixed(2)} %`);
console.log("");

// Tabla resumen para comparar con MATLAB CLI y ETABS
console.log("=== Resumen Hekatan Struct CLI ===");
console.log(`  w_centro       = ${w_center_mm.toFixed(4)} mm`);
console.log(`  Sum Rz         = ${sumR.toFixed(3)} kN`);
console.log("");
console.log("--- Comparacion ---");
console.log("                      MATLAB CLI      Hekatan Struct");
console.log(`  w_centro [mm]       -2.3714        ${w_center_mm.toFixed(4)}`);
console.log(`  Sum Rz [kN]         80.000         ${sumR.toFixed(3)}`);

gc.forEach(p => mod._free(p));
