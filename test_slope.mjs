// Quick test of slope SRM solver via WASM
import createModule from './awatif-fem/src/cpp/built/deform.js';

const mod = await createModule();

console.log('WASM loaded');
console.log('slopeStabilitySolver:', typeof mod._slopeStabilitySolver);
console.log('slopeAllocDouble:', typeof mod._slopeAllocDouble);

// Tiny mesh: 4 nodes, 2 triangles (1x1 square)
const nodes = [0,0, 1,0, 1,1, 0,1]; // flat [x,y]
const elems = [0,1,2, 0,2,3];       // flat [n0,n1,n2]
const supports = [0,1,1, 1,1,1];    // nodes 0,1 fixed XY

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
const outPlastic = mod._slopeAllocDouble(2);
const outDisp = mod._slopeAllocDouble(8);

console.log('Calling solver...');
const t0 = performance.now();

const fos = mod._slopeStabilitySolver(
  nodesPtr, 4,      // 4 nodes
  elemsPtr, 2,      // 2 elements
  50000, 0.3, 18, 15, 30, 1.0,  // E, nu, gamma, c, phi, thickness
  supPtr, 2,        // 2 supports
  0, -1e10,         // qs, surfaceYThreshold
  outPlastic, outDisp
);

const t1 = performance.now();
console.log(`FOS = ${fos} (${(t1-t0).toFixed(1)} ms)`);

// Read outputs
console.log('Plastic strain:', mod.HEAPF64[outPlastic/8], mod.HEAPF64[outPlastic/8+1]);
console.log('Displacements:',
  mod.HEAPF64[outDisp/8], mod.HEAPF64[outDisp/8+1],
  mod.HEAPF64[outDisp/8+2], mod.HEAPF64[outDisp/8+3],
  mod.HEAPF64[outDisp/8+4], mod.HEAPF64[outDisp/8+5],
  mod.HEAPF64[outDisp/8+6], mod.HEAPF64[outDisp/8+7]
);

mod._free(nodesPtr);
mod._free(elemsPtr);
mod._free(supPtr);
mod._free(outPlastic);
mod._free(outDisp);
