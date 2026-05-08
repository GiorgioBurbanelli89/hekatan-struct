#!/usr/bin/env node
/**
 * run_composite_wall_membrane_frame.mjs
 *
 * Muro de corte 4x4 m (Q4 membrana) en plano xz con vigas chord/collector
 * perimetrales, base empotrada y carga horizontal en el borde superior.
 * Replica composite_wall_membrane_frame.m (MATLAB) en el solver WASM Eigen.
 *
 * Notas Hekatan Struct: el Q4 con 4 nodos puede usarse como shell o membrana
 * segun los inputs del solver.  Aqui las cargas son in-plane (horizontal)
 * y el muro responde primariamente in-plane → la membrana action domina.
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

// ── Modelo muro xz, y=0 ──
const Lx = 4, Lz = 4, t_wall = 0.20;
const E_c = 25e6, nu_c = 0.20;
const G_c = E_c / (2 * (1 + nu_c));
const E_s = 200e6, G_s = 77e6;
const A_b = 7610e-6, Iy_b = 12.9e-5, Iz_b = 1.20e-5, J_b = 0.31e-6;
const F_top = 100;            // kN total horizontal hacia +x

const nx = 4, nz = 4;
const nNx = nx + 1, nNz = nz + 1;
const dx = Lx / nx, dz = Lz / nz;

// Nodos (x, 0, z)
const nodes = [];
for (let k = 0; k <= nz; k++)
  for (let i = 0; i <= nx; i++)
    nodes.push([i * dx, 0, k * dz]);
const nNodes = nodes.length;

// Q4 shells (4 nodos, plano xz)
const shells = [];
for (let k = 0; k < nz; k++) {
  for (let i = 0; i < nx; i++) {
    const n_bl = k * nNx + i;
    const n_br = n_bl + 1;
    const n_tr = (k + 1) * nNx + i + 1;
    const n_tl = (k + 1) * nNx + i;
    shells.push([n_bl, n_br, n_tr, n_tl]);
  }
}

// Frames perimetrales
const frames = [];
for (let i = 0; i < nx; i++) frames.push([i, i + 1]);                                  // bottom chord
const baseTop = nz * nNx;
for (let i = 0; i < nx; i++) frames.push([baseTop + i, baseTop + i + 1]);              // top chord
for (let k = 0; k < nz; k++) frames.push([k * nNx, (k + 1) * nNx]);                    // left col
for (let k = 0; k < nz; k++) frames.push([k * nNx + nx, (k + 1) * nNx + nx]);          // right col

const elements = [...shells, ...frames];

// Soportes: borde inferior totalmente empotrado
const supports = new Map();
for (let i = 0; i <= nx; i++) supports.set(i, [true, true, true, true, true, true]);

// Cargas: F_top distribuido en los nNx nodos del borde superior, en +x
const loads = new Map();
const F_per = F_top / nNx;
for (let i = 0; i <= nx; i++) {
  const n = nz * nNx + i;
  loads.set(n, [F_per, 0, 0, 0, 0, 0]);
}

// Inputs por elemento
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
  thicknesses.set(e, t_wall);
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

console.log("=== Hekatan Struct CLI: shear wall membrana + frames ===");
console.log(`Wall: ${Lx} x ${Lz} m, t=${t_wall} m, F_top=${F_top} kN`);
console.log(`Mesh: ${nx}x${nz}=${shells.length} Q4, ${frames.length} frames`);
console.log(`Nodos = ${nNodes}, elementos = ${elements.length}`);
console.log("");

// ── deform ──
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

const dPtr  = mod.HEAPU32[deformPtrOut / 4];
const dSize = mod.HEAPU32[deformSizeOut / 4];
const deformations = new Map();
if (dSize > 0 && dPtr) {
  const flat = new Float64Array(mod.HEAPF64.buffer, dPtr, dSize);
  for (let i = 0; i < dSize; i += 7) {
    deformations.set(flat[i], Array.from(flat.slice(i + 1, i + 7)));
  }
}
const rPtr  = mod.HEAPU32[reactPtrOut / 4];
const rSize = mod.HEAPU32[reactSizeOut / 4];
const reactions = new Map();
if (rSize > 0 && rPtr) {
  const flat = new Float64Array(mod.HEAPF64.buffer, rPtr, rSize);
  for (let i = 0; i < rSize; i += 7) {
    reactions.set(flat[i], Array.from(flat.slice(i + 1, i + 7)));
  }
}

const i_c = nx / 2;
const n_top_c = nz * nNx + i_c;
const u_top = deformations.get(n_top_c);
const ux_top_mm = u_top ? u_top[0] * 1000 : 0;

let sumRx = 0, sumRz = 0;
for (let i = 0; i <= nx; i++) {
  const r = reactions.get(i);
  if (r) { sumRx += r[0]; sumRz += r[2]; }
}

console.log(`ux top center (nodo ${n_top_c}) = ${ux_top_mm.toFixed(4)} mm`);
console.log(`Sum Rx base = ${sumRx.toFixed(3)} kN  (esperado ${(-F_top).toFixed(1)})`);
console.log(`Sum Rz base = ${sumRz.toFixed(3)} kN  (esperado 0)`);
console.log("");

console.log("=== Comparacion ===");
console.log("                     MATLAB CLI    Hekatan Struct");
console.log(`  ux_top [mm]        0.0841        ${ux_top_mm.toFixed(4)}`);
console.log(`  Sum Rx [kN]       -100.000       ${sumRx.toFixed(3)}`);

gc.forEach(p => mod._free(p));
