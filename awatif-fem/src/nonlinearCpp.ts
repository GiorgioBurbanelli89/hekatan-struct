/**
 * TypeScript wrapper for nonlinear dynamic analysis (WASM)
 * Calls nonlinear_dynamic() and steel02_test() from nonlinear.cpp
 */

import createModule from "./cpp/built/deform.js";

let wasmModule: any = null;

async function getModule() {
  if (!wasmModule) {
    wasmModule = await createModule();
  }
  return wasmModule;
}

export interface BRBElement {
  nodeI: number;
  nodeJ: number;
  A: number;     // cross-sectional area (m²)
  Fy: number;    // yield stress (kN/m² or consistent units)
  E0: number;    // initial stiffness
  b: number;     // hardening ratio (0.01-0.05)
  R0: number;    // transition parameter (default 15)
}

export interface NonlinearInput {
  nodes: [number, number, number][];
  frameElements: [number, number][];
  frameProps: { E: number; G: number; A: number; Iz: number; Iy: number; J: number; rho: number }[];
  brbElements: BRBElement[];
  fixedDOFs: number[];
  groundAcceleration: number[];  // acceleration time history
  dt: number;                    // time step (seconds)
  direction: 0 | 1 | 2;         // 0=X, 1=Y, 2=Z
  dampingAlpha?: number;         // Rayleigh mass proportional (default 0.05)
  dampingBeta?: number;          // Rayleigh stiffness proportional (default 0.005)
}

export interface NonlinearOutput {
  nSteps: number;
  nFreeDOF: number;
  nBRBs: number;
  displacements: Float64Array;   // [nSteps × nFreeDOF]
  brbForces: Float64Array;       // [nSteps × nBRBs]
  brbStrains: Float64Array;      // [nSteps × nBRBs]
}

/**
 * Run nonlinear dynamic analysis with BRB elements
 */
export async function nonlinearDynamic(input: NonlinearInput): Promise<NonlinearOutput> {
  const mod = await getModule();
  const { _malloc, _free, HEAPF64, HEAPU32, _nonlinear_dynamic } = mod;

  const nNodes = input.nodes.length;
  const nFrames = input.frameElements.length;
  const nBRBs = input.brbElements.length;
  const nFixed = input.fixedDOFs.length;
  const nSteps = input.groundAcceleration.length;

  // Allocate and fill node coordinates
  const nodePtr = _malloc(nNodes * 3 * 8);
  const nodeArr = new Float64Array(mod.HEAPF64.buffer, nodePtr, nNodes * 3);
  for (let i = 0; i < nNodes; i++) {
    nodeArr[i * 3] = input.nodes[i][0];
    nodeArr[i * 3 + 1] = input.nodes[i][1];
    nodeArr[i * 3 + 2] = input.nodes[i][2];
  }

  // Frame elements
  const frameElemPtr = _malloc(nFrames * 2 * 4);
  const frameElemArr = new Int32Array(mod.HEAPU32.buffer, frameElemPtr, nFrames * 2);
  for (let i = 0; i < nFrames; i++) {
    frameElemArr[i * 2] = input.frameElements[i][0];
    frameElemArr[i * 2 + 1] = input.frameElements[i][1];
  }

  // Frame properties: [E, G, A, Iz, Iy, J, rho] per element
  const framePropPtr = _malloc(nFrames * 7 * 8);
  const framePropArr = new Float64Array(mod.HEAPF64.buffer, framePropPtr, nFrames * 7);
  for (let i = 0; i < nFrames; i++) {
    const p = input.frameProps[i];
    framePropArr[i * 7] = p.E;
    framePropArr[i * 7 + 1] = p.G;
    framePropArr[i * 7 + 2] = p.A;
    framePropArr[i * 7 + 3] = p.Iz;
    framePropArr[i * 7 + 4] = p.Iy;
    framePropArr[i * 7 + 5] = p.J;
    framePropArr[i * 7 + 6] = p.rho;
  }

  // BRB elements
  const brbElemPtr = _malloc(nBRBs * 2 * 4);
  const brbElemArr = new Int32Array(mod.HEAPU32.buffer, brbElemPtr, nBRBs * 2);
  for (let i = 0; i < nBRBs; i++) {
    brbElemArr[i * 2] = input.brbElements[i].nodeI;
    brbElemArr[i * 2 + 1] = input.brbElements[i].nodeJ;
  }

  // BRB properties: [A, Fy, E0, b, R0]
  const brbPropPtr = _malloc(nBRBs * 5 * 8);
  const brbPropArr = new Float64Array(mod.HEAPF64.buffer, brbPropPtr, nBRBs * 5);
  for (let i = 0; i < nBRBs; i++) {
    const brb = input.brbElements[i];
    brbPropArr[i * 5] = brb.A;
    brbPropArr[i * 5 + 1] = brb.Fy;
    brbPropArr[i * 5 + 2] = brb.E0;
    brbPropArr[i * 5 + 3] = brb.b;
    brbPropArr[i * 5 + 4] = brb.R0;
  }

  // Fixed DOFs
  const fixedPtr = _malloc(nFixed * 4);
  const fixedArr = new Int32Array(mod.HEAPU32.buffer, fixedPtr, nFixed);
  for (let i = 0; i < nFixed; i++) fixedArr[i] = input.fixedDOFs[i];

  // Ground acceleration
  const accPtr = _malloc(nSteps * 8);
  const accArr = new Float64Array(mod.HEAPF64.buffer, accPtr, nSteps);
  for (let i = 0; i < nSteps; i++) accArr[i] = input.groundAcceleration[i];

  // Output pointers
  const outDispPtr = _malloc(8); // double**
  const outForcePtr = _malloc(8);
  const outStrainPtr = _malloc(8);
  const outSizePtr = _malloc(3 * 4); // int[3]

  // Call WASM function
  _nonlinear_dynamic(
    nodePtr, nNodes,
    frameElemPtr, nFrames, framePropPtr,
    brbElemPtr, nBRBs, brbPropPtr,
    fixedPtr, nFixed,
    accPtr, nSteps, input.dt, input.direction,
    input.dampingAlpha ?? 0.05, input.dampingBeta ?? 0.005,
    outDispPtr, outForcePtr, outStrainPtr, outSizePtr
  );

  // Read output sizes
  const sizeArr = new Int32Array(mod.HEAPU32.buffer, outSizePtr, 3);
  const outNSteps = sizeArr[0];
  const outNFree = sizeArr[1];
  const outNBRBs = sizeArr[2];

  // Read output arrays
  const dispDataPtr = new Uint32Array(mod.HEAPU32.buffer, outDispPtr, 2)[0]; // pointer to double array
  const forceDataPtr = new Uint32Array(mod.HEAPU32.buffer, outForcePtr, 2)[0];
  const strainDataPtr = new Uint32Array(mod.HEAPU32.buffer, outStrainPtr, 2)[0];

  const displacements = new Float64Array(mod.HEAPF64.buffer, dispDataPtr, outNSteps * outNFree).slice();
  const brbForces = new Float64Array(mod.HEAPF64.buffer, forceDataPtr, outNSteps * outNBRBs).slice();
  const brbStrains = new Float64Array(mod.HEAPF64.buffer, strainDataPtr, outNSteps * outNBRBs).slice();

  // Free WASM memory
  _free(nodePtr); _free(frameElemPtr); _free(framePropPtr);
  _free(brbElemPtr); _free(brbPropPtr); _free(fixedPtr); _free(accPtr);
  _free(dispDataPtr); _free(forceDataPtr); _free(strainDataPtr);
  _free(outDispPtr); _free(outForcePtr); _free(outStrainPtr); _free(outSizePtr);

  return { nSteps: outNSteps, nFreeDOF: outNFree, nBRBs: outNBRBs, displacements, brbForces, brbStrains };
}

/**
 * Test Steel02 material with cyclic strain history
 * Returns stress-strain pairs for hysteresis plotting
 */
export async function steel02Test(
  Fy: number, E0: number, b: number, R0: number,
  strainHistory: number[]
): Promise<{ stress: Float64Array; tangent: Float64Array }> {
  const mod = await getModule();
  const { _malloc, _free, HEAPF64, _steel02_test } = mod;

  const n = strainHistory.length;
  const strainPtr = _malloc(n * 8);
  const stressPtr = _malloc(n * 8);
  const tangentPtr = _malloc(n * 8);

  const strainArr = new Float64Array(mod.HEAPF64.buffer, strainPtr, n);
  for (let i = 0; i < n; i++) strainArr[i] = strainHistory[i];

  _steel02_test(Fy, E0, b, R0, strainPtr, n, stressPtr, tangentPtr);

  const stress = new Float64Array(mod.HEAPF64.buffer, stressPtr, n).slice();
  const tangent = new Float64Array(mod.HEAPF64.buffer, tangentPtr, n).slice();

  _free(strainPtr); _free(stressPtr); _free(tangentPtr);

  return { stress, tangent };
}
