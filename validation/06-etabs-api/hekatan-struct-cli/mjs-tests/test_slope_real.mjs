// Real slope test using getMesh from hekatan-mesh
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

// Manually create slope mesh: trapezoid with depth
// H=6, angle=45, bTop=3, bBot=3, D=6
const H = 6, D = 6, bBot = 3, bTop = 3, angle = 45;
const slopeRun = H / Math.tan(angle * Math.PI / 180); // 6
const totalW = bBot + slopeRun + bTop; // 12
const ms = 3.0; // very coarse mesh

// Simple structured grid on the domain
const nxG = Math.ceil(totalW / ms) + 1; // 5
const nyG = Math.ceil((H + D) / ms) + 1; // 5

const nodes = [];
const nMap = new Map(); // "x,y" -> index
let nIdx = 0;

function addNode(x, y) {
  const key = `${x.toFixed(3)},${y.toFixed(3)}`;
  if (nMap.has(key)) return nMap.get(key);
  nMap.set(key, nIdx);
  nodes.push(x, y);
  return nIdx++;
}

// Create grid nodes, clipping to slope polygon
for (let j = 0; j < nyG; j++) {
  const y = -D + j * ms;
  for (let i = 0; i < nxG; i++) {
    const x = i * ms;
    // Check if inside slope polygon
    let maxY;
    if (x <= bBot) maxY = 0;
    else if (x >= bBot + slopeRun) maxY = H;
    else maxY = (x - bBot) * H / slopeRun;
    if (y <= maxY + 0.01) {
      addNode(x, y);
    }
  }
}

// Add key slope points
addNode(bBot, 0);
addNode(bBot + slopeRun, H);

console.log(`Nodes: ${nIdx}`);

// Create Delaunay-ish triangles (simple grid triangulation)
// For a proper test, just use the grid cells
const elems = [];
for (let j = 0; j < nyG - 1; j++) {
  for (let i = 0; i < nxG - 1; i++) {
    const x0 = i * ms, y0 = -D + j * ms;
    const x1 = (i+1) * ms, y1 = -D + (j+1) * ms;

    const bl = nMap.get(`${x0.toFixed(3)},${y0.toFixed(3)}`);
    const br = nMap.get(`${x1.toFixed(3)},${y0.toFixed(3)}`);
    const tl = nMap.get(`${x0.toFixed(3)},${y1.toFixed(3)}`);
    const tr = nMap.get(`${x1.toFixed(3)},${y1.toFixed(3)}`);

    if (bl !== undefined && br !== undefined && tr !== undefined) {
      elems.push(bl, br, tr);
    }
    if (bl !== undefined && tr !== undefined && tl !== undefined) {
      elems.push(bl, tr, tl);
    }
  }
}
const nElem = elems.length / 3;
console.log(`Elements: ${nElem}`);

// Supports
const supports = [];
let nSup = 0;
for (let i = 0; i < nIdx; i++) {
  const x = nodes[i*2], y = nodes[i*2+1];
  if (Math.abs(y + D) < 0.01) {
    supports.push(i, 1, 1); nSup++;
  } else if (Math.abs(x) < 0.01 || Math.abs(x - totalW) < 0.01) {
    supports.push(i, 1, 0); nSup++;
  }
}
console.log(`Supports: ${nSup}`);

const nodesPtr = allocF64(nodes);
const elemsPtr = allocU32(elems);
const supPtr = allocU32(supports);
const outPlastic = mod._slopeAllocDouble(nElem);
const outDisp = mod._slopeAllocDouble(nIdx * 2);

// SRM with c=15, phi=30, gamma=18
console.log('\nSolving SRM: c=15, phi=30, gamma=18, H=6, angle=45...');
const t0 = performance.now();
const fos = mod._slopeStabilitySolver(
  nodesPtr, nIdx,
  elemsPtr, nElem,
  50000, 0.3, 18, 15, 30, 1.0,
  supPtr, nSup,
  0, -1e10,
  outPlastic, outDisp
);
const dt = performance.now() - t0;
console.log(`FOS = ${fos} (${dt.toFixed(0)} ms)`);

let maxEps = 0, maxDisp = 0;
for (let i = 0; i < nElem; i++) maxEps = Math.max(maxEps, mod.HEAPF64[outPlastic/8+i]);
for (let i = 0; i < nIdx; i++) {
  const ux = mod.HEAPF64[outDisp/8+2*i];
  const uy = mod.HEAPF64[outDisp/8+2*i+1];
  maxDisp = Math.max(maxDisp, Math.sqrt(ux*ux+uy*uy));
}
console.log(`Max plastic strain: ${maxEps.toExponential(4)}`);
console.log(`Max displacement: ${maxDisp.toExponential(4)}`);

// Also test with c=50 (should give high FOS)
console.log('\n=== High cohesion: c=50 ===');
const fos2 = mod._slopeStabilitySolver(
  nodesPtr, nIdx, elemsPtr, nElem,
  50000, 0.3, 18, 50, 30, 1.0,
  supPtr, nSup, 0, -1e10,
  outPlastic, outDisp
);
console.log(`FOS = ${fos2}`);

mod._free(nodesPtr); mod._free(elemsPtr); mod._free(supPtr);
mod._free(outPlastic); mod._free(outDisp);
