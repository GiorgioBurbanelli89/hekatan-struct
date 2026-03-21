// Debug test: check NR convergence step by step
import createModule from './awatif-fem/src/cpp/built/deform.js';
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

// 4 nodes, 2 triangles, c=15, phi=30
const nodes = [0,0, 3,0, 0,3, 3,3];
const elems = [0,1,3, 0,3,2];
const supports = [0,1,1, 1,1,1];

const nodesPtr = allocF64(nodes);
const elemsPtr = allocU32(elems);
const supPtr = allocU32(supports);
const outPlastic = mod._slopeAllocDouble(2);
const outDisp = mod._slopeAllocDouble(8);

// Test: c=15, phi=30, gamma=18
// This is a 3x3 square with gravity only
// Weight = gamma * area * thickness = 18 * 4.5 * 1 = 81 kN
// Distributed: 81/3 = 27 kN per node
// Sigma_yy ≈ -gamma * y = -18 * 1.5 = -27 kPa (average)
// p ≈ -27 * (1+nu)/(1) ... this should be well within MC envelope
// MC: q - p*sinφ - c*cosφ = 0
// For hydrostatic compression: q=0, p=-27
// f = 0 - (-27)*0.5 - 15*0.866 = 13.5 - 12.99 = 0.5 > 0 !!
// So even under self-weight the MC criterion is violated!
// This means sinPhi * |p| > c * cosPhi for this geometry

console.log('MC check at center:');
const gamma = 18, H = 3, nu = 0.3;
const sigma_yy = -gamma * H / 2; // -27
const sigma_xx = sigma_yy * nu / (1 - nu); // -11.57
const p = (sigma_xx + sigma_yy) / 2; // -19.28
const qx = (sigma_xx - sigma_yy) / 2; // 7.71
const q = Math.abs(qx);
const sinPhi = Math.sin(30 * Math.PI / 180);
const cosPhi = Math.cos(30 * Math.PI / 180);
const f = q - p * sinPhi - 15 * cosPhi;
console.log(`sigma_xx=${sigma_xx.toFixed(2)}, sigma_yy=${sigma_yy.toFixed(2)}`);
console.log(`p=${p.toFixed(2)}, q=${q.toFixed(2)}`);
console.log(`f = ${q.toFixed(2)} - (${p.toFixed(2)})*${sinPhi.toFixed(3)} - 15*${cosPhi.toFixed(3)} = ${f.toFixed(3)}`);
console.log(`f > 0 means plastic yielding`);

// Test with larger c to ensure elastic
console.log('\n=== c=50 (should be elastic, FOS high) ===');
let fos = mod._slopeStabilitySolver(
  nodesPtr, 4, elemsPtr, 2,
  50000, 0.3, 18, 50, 30, 1.0,
  supPtr, 2, 0, -1e10,
  outPlastic, outDisp
);
console.log(`FOS = ${fos}`);
console.log(`plastic: ${mod.HEAPF64[outPlastic/8]}, ${mod.HEAPF64[outPlastic/8+1]}`);

// Now test with c=15
console.log('\n=== c=15, phi=30 ===');
fos = mod._slopeStabilitySolver(
  nodesPtr, 4, elemsPtr, 2,
  50000, 0.3, 18, 15, 30, 1.0,
  supPtr, 2, 0, -1e10,
  outPlastic, outDisp
);
console.log(`FOS = ${fos}`);

mod._free(nodesPtr); mod._free(elemsPtr); mod._free(supPtr);
mod._free(outPlastic); mod._free(outDisp);
