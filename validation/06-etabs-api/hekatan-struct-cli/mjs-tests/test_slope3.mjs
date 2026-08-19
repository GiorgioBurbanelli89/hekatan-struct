// Test: simple 4-node square with known answer
import createModule from './hekatan-fem/src/cpp/built/deform.js';
const mod = await createModule();

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

// Simple slope: 5-node, 4-triangle
// Right triangle 3m wide, 3m high
//    2-----3
//    |    /|
//    |   / |
//    |  /  |
//    | /   |
//    |/    |
//    0-----1
// Slope face from node 1 to node 3 (but that's a rectangle)
// Let's do a real slope: trapezoid
// 0=(0,0), 1=(6,0), 2=(6,3), 3=(3,3), 4=(0,0) -- wait
// Simple: embed the slope in a box
// Just test with large c (should give high FOS)
const nodes = [0,0, 3,0, 0,3, 3,3]; // 4 nodes
const elems = [0,1,3, 0,3,2]; // 2 triangles
const supports = [0,1,1, 1,1,1]; // fix bottom

const nodesPtr = allocF64(nodes);
const elemsPtr = allocU32(elems);
const supPtr = allocU32(supports);
const outPlastic = mod._slopeAllocDouble(2);
const outDisp = mod._slopeAllocDouble(8);

// Case 1: large cohesion, should converge easily
console.log('\n=== Case 1: c=100, phi=30, gamma=18 ===');
let fos = mod._slopeStabilitySolver(
  nodesPtr, 4, elemsPtr, 2,
  50000, 0.3, 18, 100, 30, 1.0,  // large c
  supPtr, 2,
  0, -1e10,
  outPlastic, outDisp
);
console.log(`FOS = ${fos}`);
console.log(`u2 = (${mod.HEAPF64[outDisp/8+4]}, ${mod.HEAPF64[outDisp/8+5]})`);
console.log(`u3 = (${mod.HEAPF64[outDisp/8+6]}, ${mod.HEAPF64[outDisp/8+7]})`);

// Case 2: small cohesion
console.log('\n=== Case 2: c=5, phi=20, gamma=18 ===');
fos = mod._slopeStabilitySolver(
  nodesPtr, 4, elemsPtr, 2,
  50000, 0.3, 18, 5, 20, 1.0,
  supPtr, 2,
  0, -1e10,
  outPlastic, outDisp
);
console.log(`FOS = ${fos}`);
console.log(`u2 = (${mod.HEAPF64[outDisp/8+4]}, ${mod.HEAPF64[outDisp/8+5]})`);

mod._free(nodesPtr); mod._free(elemsPtr); mod._free(supPtr);
mod._free(outPlastic); mod._free(outDisp);
