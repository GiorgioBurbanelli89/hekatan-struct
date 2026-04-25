#!/usr/bin/env node
/**
 * Compara plateQ4Solve (WASM) vs Navier analítico para Mindlin y Kirchhoff
 */
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const wasmPath = join(__dirname, "hekatan-fem", "src", "cpp", "built", "deform.wasm");
const jsPath = join(__dirname, "hekatan-fem", "src", "cpp", "built", "deform.js");
const createModule = (await import(pathToFileURL(jsPath).href)).default;
const mod = await createModule({ wasmBinary: readFileSync(wasmPath) });

function allocate(data, Ctor, heap) {
  const buf = new Ctor(data);
  const ptr = mod._malloc(buf.length * buf.BYTES_PER_ELEMENT);
  heap.set(buf, ptr / buf.BYTES_PER_ELEMENT);
  return ptr;
}

// theoryType: 0=Mindlin, 1=Kirchhoff
function plateQ4(E, nu, t, Lx, Ly, nx, ny, pressure, theoryType) {
  const gc = [];

  // No custom nodes/elements — use mesh generator
  const nodesPtr = allocate([0], Float64Array, mod.HEAPF64); gc.push(nodesPtr);
  const elementsPtr = allocate([0], Int32Array, mod.HEAPU32); gc.push(elementsPtr);
  const bcsPtr = allocate([0], Float64Array, mod.HEAPF64); gc.push(bcsPtr);
  const pointLoadsPtr = allocate([0], Float64Array, mod.HEAPF64); gc.push(pointLoadsPtr);
  const springsPtr = allocate([0], Float64Array, mod.HEAPF64); gc.push(springsPtr);

  const dispPtrOut = mod._malloc(4); gc.push(dispPtrOut);
  const dispSizeOut = mod._malloc(4); gc.push(dispSizeOut);
  const srPtrOut = mod._malloc(4); gc.push(srPtrOut);
  const srSizeOut = mod._malloc(4); gc.push(srSizeOut);

  // _plate_q4_solve(nodesPtr, numNodes, elementsPtr, numElements,
  //   E, nu, thickness, bcsPtr, numBcs, pressure,
  //   pointLoadsPtr, numPointLoads,
  //   meshLx, meshLy, meshNx, meshNy, bcType, theoryType,
  //   springsPtr, numSprings,
  //   dispPtrOut, dispSizeOut, srPtrOut, srSizeOut)
  mod._plate_q4_solve(
    nodesPtr, 0,        // no custom nodes
    elementsPtr, 0,     // no custom elements
    E, nu, t,
    bcsPtr, 0,          // no custom BCs
    pressure,
    pointLoadsPtr, 0,   // no point loads
    Lx, Ly, nx, ny,
    1,                  // bcType=1 → simply-supported
    theoryType,
    springsPtr, 0,      // no springs
    dispPtrOut, dispSizeOut,
    srPtrOut, srSizeOut
  );

  const dispDataPtr = mod.HEAPU32[dispPtrOut / 4];
  const dispSize = mod.HEAPU32[dispSizeOut / 4];
  const srDataPtr = mod.HEAPU32[srPtrOut / 4];
  const srSize = mod.HEAPU32[srSizeOut / 4];

  // Parse displacements: [nNodes, nElems, x1,y1,w1,bx1,by1, ...]
  const dispFlat = new Float64Array(mod.HEAPF64.buffer, dispDataPtr, dispSize);
  const nNodes = dispFlat[0];
  const nElems = dispFlat[1];

  let maxW = 0, centerW = 0;
  const centerX = Lx / 2, centerY = Ly / 2;
  let minDist = Infinity;

  for (let i = 0; i < nNodes; i++) {
    const base = 2 + i * 5;
    const x = dispFlat[base], y = dispFlat[base + 1], w = dispFlat[base + 2];
    if (Math.abs(w) > Math.abs(maxW)) maxW = w;
    const d = Math.abs(x - centerX) + Math.abs(y - centerY);
    if (d < minDist) { minDist = d; centerW = w; }
  }

  // Parse stress resultants: [n1,n2,n3,n4, Mxx,Myy,Mxy,Qx,Qy] × nElems
  const srFlat = new Float64Array(mod.HEAPF64.buffer, srDataPtr, srSize);
  let maxMxx = 0, maxMyy = 0;
  // Find center element
  let centerMxx = 0, centerMyy = 0;
  for (let e = 0; e < nElems; e++) {
    const base = e * 9;
    const Mxx = srFlat[base + 4], Myy = srFlat[base + 5];
    if (Math.abs(Mxx) > Math.abs(maxMxx)) maxMxx = Mxx;
    if (Math.abs(Myy) > Math.abs(maxMyy)) maxMyy = Myy;
    // Approximate center element by averaging node coordinates
    // For now just track max
  }

  gc.push(dispDataPtr, srDataPtr);
  gc.forEach(p => mod._free(p));

  return { maxW, centerW, maxMxx, maxMyy, nNodes, nElems };
}

// Navier analytical
const PI = Math.PI;
function navier(a, b, t, q, E, nu, kappa, nTerms, mindlin) {
  const D = E * t ** 3 / (12 * (1 - nu ** 2));
  const G = E / (2 * (1 + nu));
  let w = 0, Mx = 0, My = 0;
  for (let m = 1; m <= nTerms; m += 2) {
    for (let n = 1; n <= nTerms; n += 2) {
      const q_mn = 16 * q / (m * n * PI ** 2);
      const alpha = (m * PI / a) ** 2 + (n * PI / b) ** 2;
      const w_k = q_mn / (D * alpha ** 2);
      const w_s = mindlin ? q_mn / (kappa * G * t * alpha) : 0;
      w += (w_k + w_s);
      Mx += D * ((m * PI / a) ** 2 * w_k + nu * (n * PI / b) ** 2 * w_k);
      My += D * ((n * PI / b) ** 2 * w_k + nu * (m * PI / a) ** 2 * w_k);
    }
  }
  return { w, Mx, My, D };
}

console.log("=".repeat(72));
console.log("  COMPARACION: plateQ4Solve WASM vs Navier Analítico");
console.log("  Ref: Reddy (2007), Timoshenko (1959)");
console.log("=".repeat(72));

const cases = [
  { name: "Delgada 6×4 (Calcpad)", a: 6, b: 4, t: 0.1, q: -10, E: 35e6, nu: 0.15, nx: 12, ny: 8 },
  { name: "Delgada 6×4 (malla fina)", a: 6, b: 4, t: 0.1, q: -10, E: 35e6, nu: 0.15, nx: 24, ny: 16 },
  { name: "Moderada 4×4 (t/b=0.1)", a: 4, b: 4, t: 0.4, q: -10, E: 30e6, nu: 0.2, nx: 16, ny: 16 },
  { name: "Gruesa 4×4 (t/b=0.25)", a: 4, b: 4, t: 1.0, q: -10, E: 30e6, nu: 0.2, nx: 16, ny: 16 },
];

for (const c of cases) {
  console.log("\n" + "-".repeat(72));
  console.log(`  ${c.name}`);
  console.log(`  a=${c.a}, b=${c.b}, t=${c.t}, q=${Math.abs(c.q)}, E=${c.E/1e6}MPa, ν=${c.nu}, t/b=${(c.t/c.b).toFixed(3)}`);
  console.log(`  Malla: ${c.nx}×${c.ny} = ${c.nx * c.ny} elem`);
  console.log("-".repeat(72));

  const kappa = 5 / 6;
  const nav_k = navier(c.a, c.b, c.t, Math.abs(c.q), c.E, c.nu, kappa, 99, false);
  const nav_m = navier(c.a, c.b, c.t, Math.abs(c.q), c.E, c.nu, kappa, 99, true);

  let wasm_k, wasm_m;
  try { wasm_k = plateQ4(c.E, c.nu, c.t, c.a, c.b, c.nx, c.ny, c.q, 1); } catch (e) { console.log("  WASM Kirchhoff ERROR:", e.message); wasm_k = null; }
  try { wasm_m = plateQ4(c.E, c.nu, c.t, c.a, c.b, c.nx, c.ny, c.q, 0); } catch (e) { console.log("  WASM Mindlin ERROR:", e.message); wasm_m = null; }

  console.log(`\n  ${"".padStart(22)}  ${"Navier".padStart(12)}  ${"WASM Q4".padStart(12)}  ${"Error".padStart(8)}`);
  console.log("  " + "-".repeat(58));

  if (wasm_k) {
    const errK = ((Math.abs(wasm_k.centerW) - nav_k.w) / nav_k.w * 100);
    console.log(`  ${"w_Kirchhoff (mm)".padStart(22)}  ${(nav_k.w * 1000).toFixed(4).padStart(12)}  ${(Math.abs(wasm_k.centerW) * 1000).toFixed(4).padStart(12)}  ${errK.toFixed(2).padStart(7)}%`);
  }
  if (wasm_m) {
    const errM = ((Math.abs(wasm_m.centerW) - nav_m.w) / nav_m.w * 100);
    console.log(`  ${"w_Mindlin (mm)".padStart(22)}  ${(nav_m.w * 1000).toFixed(4).padStart(12)}  ${(Math.abs(wasm_m.centerW) * 1000).toFixed(4).padStart(12)}  ${errM.toFixed(2).padStart(7)}%`);
  }

  // Show Mindlin vs Kirchhoff difference
  const mindlin_effect = ((nav_m.w - nav_k.w) / nav_k.w * 100);
  console.log(`  ${"Δ Mindlin/Kirchhoff".padStart(22)}  ${mindlin_effect.toFixed(2).padStart(12)}%`);
  console.log(`  ${"Mx centro".padStart(22)}  ${nav_k.Mx.toFixed(4).padStart(12)}  ${wasm_k ? wasm_k.maxMxx.toFixed(4).padStart(12) : "N/A".padStart(12)}`);
  console.log(`  ${"My centro".padStart(22)}  ${nav_k.My.toFixed(4).padStart(12)}  ${wasm_k ? wasm_k.maxMyy.toFixed(4).padStart(12) : "N/A".padStart(12)}`);
}
