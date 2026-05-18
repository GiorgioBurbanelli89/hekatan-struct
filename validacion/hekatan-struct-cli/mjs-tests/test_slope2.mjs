// Realistic slope test: ~100 elements
import createModule from './hekatan-fem/src/cpp/built/deform.js';

const mod = await createModule();

// Generate a simple slope mesh manually
// Domain: 12m wide, 12m tall (6m slope + 6m depth)
// meshSize ~2.0 → about 36 triangles
const W = 12, H = 6, D = 6;
const ms = 2.0;
const nx = Math.ceil(W / ms) + 1;
const ny = Math.ceil((H + D) / ms) + 1;

// Grid nodes
const nodes = [];
for (let j = 0; j < ny; j++) {
  for (let i = 0; i < nx; i++) {
    nodes.push(i * ms, -D + j * ms);
  }
}
const nNodes = nodes.length / 2;

// Triangles from grid
const elems = [];
for (let j = 0; j < ny - 1; j++) {
  for (let i = 0; i < nx - 1; i++) {
    const bl = j * nx + i;
    const br = bl + 1;
    const tl = bl + nx;
    const tr = tl + 1;
    elems.push(bl, br, tr);
    elems.push(bl, tr, tl);
  }
}
const nElem = elems.length / 3;

// Supports: bottom fixed, sides roller
const supports = [];
for (let i = 0; i < nx; i++) {
  supports.push(i, 1, 1); // bottom row: fixed XY
}
for (let j = 1; j < ny; j++) {
  supports.push(j * nx, 1, 0);     // left side: roller X
  supports.push(j * nx + nx - 1, 1, 0); // right side: roller X
}
const nSup = supports.length / 3;

console.log(`Mesh: ${nNodes} nodes, ${nElem} elements, ${nSup} supports`);

// Allocate
function allocF64(data) {
  const buf = new Float64Array(data);
  const ptr = mod._malloc(buf.length * 8);
  mod.HEAPF64.set(buf, ptr / 8);
  return ptr;
}
function allocU32(data) {
  const buf = new Uint32Array(data);
  const ptr = mod._malloc(buf.length * 4);
  mod.HEAPU32.set(buf, ptr / 4);
  return ptr;
}

const nodesPtr = allocF64(nodes);
const elemsPtr = allocU32(elems);
const supPtr = allocU32(supports);
const outPlastic = mod._slopeAllocDouble(nElem);
const outDisp = mod._slopeAllocDouble(nNodes * 2);

console.log('Calling solver...');
const t0 = performance.now();

const fos = mod._slopeStabilitySolver(
  nodesPtr, nNodes,
  elemsPtr, nElem,
  50000, 0.3, 18, 15, 30, 1.0,
  supPtr, nSup,
  0, -1e10,
  outPlastic, outDisp
);

const t1 = performance.now();
console.log(`FOS = ${fos} (${(t1-t0).toFixed(0)} ms)`);

// Find max plastic strain
let maxEps = 0;
for (let i = 0; i < nElem; i++) {
  maxEps = Math.max(maxEps, mod.HEAPF64[outPlastic/8 + i]);
}
console.log(`Max plastic strain: ${maxEps.toExponential(4)}`);

mod._free(nodesPtr); mod._free(elemsPtr); mod._free(supPtr);
mod._free(outPlastic); mod._free(outDisp);
