/**
 * ============================================================================
 *  TypeScript WASM Wrapper for Mindlin-Reissner Q4 Plate Solver
 * ============================================================================
 *
 *  Usage:
 *    import { plateQ4Solve } from "awatif-fem";
 *
 *    // Option A: auto-generate rectangular mesh
 *    const result = plateQ4Solve({
 *      E: 30e6,          // Young's modulus (kN/m² or psi)
 *      nu: 0.3,          // Poisson's ratio
 *      thickness: 0.2,   // plate thickness (m or in)
 *      meshLx: 10,       // plate width
 *      meshLy: 10,       // plate height
 *      meshNx: 16,       // elements in x
 *      meshNy: 16,       // elements in y
 *      bcType: "simply-supported",  // or "clamped"
 *      pressure: -10,    // uniform load (force/area, +z = up)
 *    });
 *
 *    // Option B: provide custom mesh
 *    const result = plateQ4Solve({
 *      E: 30e6, nu: 0.3, thickness: 0.2,
 *      nodes: [[0,0], [1,0], [1,1], [0,1]],
 *      elements: [[0,1,2,3]],
 *      bcs: [{node: 0, dof: 0, value: 0}, ...],
 *      pressure: -10,
 *    });
 *
 *  Returns:
 *    { nodes, elements, displacements, stressResultants, maxW, maxMxx, ... }
 */

import createModule from "./cpp/built/deform.js";

// @ts-ignore, load wasm
const mod = await createModule();

// ── Public Types ──────────────────────────────────────────────────────

export interface PlateQ4Input {
  // Material (required)
  E: number;
  nu: number;
  thickness: number;

  // Plate theory: 0=Mindlin (thick), 1=Kirchhoff (thin), 2=Membrane
  theoryType?: number;

  // Option A: auto-generate rectangular mesh
  meshLx?: number;
  meshLy?: number;
  meshNx?: number;
  meshNy?: number;
  bcType?: "none" | "simply-supported" | "clamped";

  // Option B: custom mesh
  nodes?: [number, number][];       // [x, y] per node
  elements?: [number, number, number, number][];  // 4 node indices per element

  // Boundary conditions (when bcType = "none" or custom mesh)
  bcs?: Array<{ node: number; dof: number; value: number }>;

  // Loading
  pressure?: number;               // uniform load (force/area, + = up)
  pointLoads?: Array<{ node: number; dof: number; value: number }>;

  // Spring supports: elastic foundation / partial restraints
  springs?: Array<{ node: number; dof: number; k: number }>;

  // Per-element thickness (layered zones: zapata + viga + pedestal)
  // If provided and length == elements.length, overrides global `thickness`.
  thicknesses?: number[];
}

export interface PlateQ4NodeResult {
  x: number;
  y: number;
  w: number;      // transverse displacement
  bx: number;     // rotation βx
  by: number;     // rotation βy
}

export interface PlateQ4ElementResult {
  nodes: [number, number, number, number];
  Mxx: number;    // bending moment per unit length
  Myy: number;
  Mxy: number;    // twisting moment
  Qx: number;     // transverse shear
  Qy: number;
}

export interface PlateQ4Output {
  nodeResults: PlateQ4NodeResult[];
  elementResults: PlateQ4ElementResult[];
  // Summary
  maxW: number;       // max absolute transverse displacement
  maxMxx: number;     // max absolute Mxx
  maxMyy: number;
  maxMxy: number;
  maxQx: number;
  maxQy: number;
  centerW?: number;   // displacement at center node (for rectangular plates)
}

// ── Allocator (same pattern as deformCpp.ts) ─────────────────────────

type TypedArrayConstructor =
  | Int8ArrayConstructor
  | Uint8ArrayConstructor
  | Uint8ClampedArrayConstructor
  | Int16ArrayConstructor
  | Uint16ArrayConstructor
  | Int32ArrayConstructor
  | Uint32ArrayConstructor
  | Float32ArrayConstructor
  | Float64ArrayConstructor;

function allocate<T extends TypedArrayConstructor>(
  data: number[],
  TypedArrayCtor: T,
  heapTypedArray: InstanceType<T>
): number {
  const buffer = new TypedArrayCtor(data);
  const pointer = mod._malloc(buffer.length * buffer.BYTES_PER_ELEMENT);
  heapTypedArray.set(buffer, pointer / buffer.BYTES_PER_ELEMENT);
  return pointer;
}

// ── Main Solver ──────────────────────────────────────────────────────

export function plateQ4Solve(input: PlateQ4Input): PlateQ4Output {
  const gc: number[] = []; // garbage collector

  // ── Nodes ──
  let nodesFlat: number[] = [];
  let numNodes = 0;
  if (input.nodes && input.nodes.length > 0) {
    numNodes = input.nodes.length;
    nodesFlat = input.nodes.flat();
  }
  const nodesPtr = allocate(
    nodesFlat.length > 0 ? nodesFlat : [0],
    Float64Array,
    mod.HEAPF64
  );
  gc.push(nodesPtr);

  // ── Elements ──
  let elementsFlat: number[] = [];
  let numElements = 0;
  if (input.elements && input.elements.length > 0) {
    numElements = input.elements.length;
    elementsFlat = input.elements.flat();
  }
  const elementsPtr = allocate(
    elementsFlat.length > 0 ? elementsFlat : [0],
    Int32Array,
    mod.HEAPU32
  );
  gc.push(elementsPtr);

  // ── BCs ──
  let bcsFlat: number[] = [];
  let numBcs = 0;
  if (input.bcs && input.bcs.length > 0) {
    numBcs = input.bcs.length;
    bcsFlat = input.bcs.flatMap((bc) => [bc.node, bc.dof, bc.value]);
  }
  const bcsPtr = allocate(
    bcsFlat.length > 0 ? bcsFlat : [0],
    Float64Array,
    mod.HEAPF64
  );
  gc.push(bcsPtr);

  // ── Point loads ──
  let pointLoadsFlat: number[] = [];
  let numPointLoads = 0;
  if (input.pointLoads && input.pointLoads.length > 0) {
    numPointLoads = input.pointLoads.length;
    pointLoadsFlat = input.pointLoads.flatMap((pl) => [
      pl.node,
      pl.dof,
      pl.value,
    ]);
  }
  const pointLoadsPtr = allocate(
    pointLoadsFlat.length > 0 ? pointLoadsFlat : [0],
    Float64Array,
    mod.HEAPF64
  );
  gc.push(pointLoadsPtr);

  // ── Mesh generation params ──
  const meshLx = input.meshLx ?? 0;
  const meshLy = input.meshLy ?? 0;
  const meshNx = input.meshNx ?? 0;
  const meshNy = input.meshNy ?? 0;
  const bcTypeMap: Record<string, number> = {
    none: 0,
    "simply-supported": 1,
    clamped: 2,
  };
  const bcType = bcTypeMap[input.bcType ?? "none"] ?? 0;

  // ── Theory type ──
  const theoryType = input.theoryType ?? 0; // 0=Mindlin, 1=Kirchhoff, 2=Membrane

  // ── Springs ──
  let springsFlat: number[] = [];
  let numSprings = 0;
  if (input.springs && input.springs.length > 0) {
    numSprings = input.springs.length;
    springsFlat = input.springs.flatMap((sp) => [sp.node, sp.dof, sp.k]);
  }
  const springsPtr = allocate(
    springsFlat.length > 0 ? springsFlat : [0],
    Float64Array,
    mod.HEAPF64
  );
  gc.push(springsPtr);

  // ── Per-element thicknesses (layered) ──
  let thicknessesFlat: number[] = [];
  let numThicknesses = 0;
  if (input.thicknesses && input.thicknesses.length > 0) {
    numThicknesses = input.thicknesses.length;
    thicknessesFlat = input.thicknesses.slice();
  }
  const thicknessesPtr = allocate(
    thicknessesFlat.length > 0 ? thicknessesFlat : [0],
    Float64Array,
    mod.HEAPF64
  );
  gc.push(thicknessesPtr);

  // ── Output pointers (C++ writes addresses here) ──
  const dispPtrOut = mod._malloc(4);
  gc.push(dispPtrOut);
  const dispSizeOut = mod._malloc(4);
  gc.push(dispSizeOut);
  const srPtrOut = mod._malloc(4);
  gc.push(srPtrOut);
  const srSizeOut = mod._malloc(4);
  gc.push(srSizeOut);

  // ── Call C++ ──
  mod._plate_q4_solve(
    nodesPtr,
    numNodes,
    elementsPtr,
    numElements,
    input.E,
    input.nu,
    input.thickness,
    bcsPtr,
    numBcs,
    input.pressure ?? 0,
    pointLoadsPtr,
    numPointLoads,
    meshLx,
    meshLy,
    meshNx,
    meshNy,
    bcType,
    theoryType,
    springsPtr,
    numSprings,
    thicknessesPtr,
    numThicknesses,
    dispPtrOut,
    dispSizeOut,
    srPtrOut,
    srSizeOut
  );

  // ── Read output pointers ──
  const dispDataPtr = mod.HEAPU32[dispPtrOut / 4];
  const dispSize = mod.HEAPU32[dispSizeOut / 4];
  const srDataPtr = mod.HEAPU32[srPtrOut / 4];
  const srSize = mod.HEAPU32[srSizeOut / 4];

  // ── Parse displacements ──
  // Format: [nNodes, nElems, x1,y1,w1,bx1,by1, x2,y2,w2,bx2,by2, ...]
  const dispFlat = new Float64Array(mod.HEAPF64.buffer, dispDataPtr, dispSize);

  const nNodesOut = dispFlat[0];
  const nElemsOut = dispFlat[1];

  const nodeResults: PlateQ4NodeResult[] = [];
  let maxW = 0;

  for (let i = 0; i < nNodesOut; i++) {
    const base = 2 + i * 5;
    const nr: PlateQ4NodeResult = {
      x: dispFlat[base],
      y: dispFlat[base + 1],
      w: dispFlat[base + 2],
      bx: dispFlat[base + 3],
      by: dispFlat[base + 4],
    };
    nodeResults.push(nr);
    if (Math.abs(nr.w) > Math.abs(maxW)) maxW = nr.w;
  }

  // ── Parse stress resultants ──
  // Format: [n1,n2,n3,n4, Mxx,Myy,Mxy,Qx,Qy, ...] 9 per element
  const srFlat = new Float64Array(mod.HEAPF64.buffer, srDataPtr, srSize);

  const elementResults: PlateQ4ElementResult[] = [];
  let maxMxx = 0,
    maxMyy = 0,
    maxMxy = 0,
    maxQx = 0,
    maxQy = 0;

  for (let e = 0; e < nElemsOut; e++) {
    const base = e * 9;
    const er: PlateQ4ElementResult = {
      nodes: [srFlat[base], srFlat[base + 1], srFlat[base + 2], srFlat[base + 3]],
      Mxx: srFlat[base + 4],
      Myy: srFlat[base + 5],
      Mxy: srFlat[base + 6],
      Qx: srFlat[base + 7],
      Qy: srFlat[base + 8],
    };
    elementResults.push(er);
    if (Math.abs(er.Mxx) > Math.abs(maxMxx)) maxMxx = er.Mxx;
    if (Math.abs(er.Myy) > Math.abs(maxMyy)) maxMyy = er.Myy;
    if (Math.abs(er.Mxy) > Math.abs(maxMxy)) maxMxy = er.Mxy;
    if (Math.abs(er.Qx) > Math.abs(maxQx)) maxQx = er.Qx;
    if (Math.abs(er.Qy) > Math.abs(maxQy)) maxQy = er.Qy;
  }

  // Find center node displacement (for rectangular mesh)
  let centerW: number | undefined;
  if (meshLx > 0 && meshLy > 0) {
    const cx = meshLx / 2;
    const cy = meshLy / 2;
    let minDist = Infinity;
    for (const nr of nodeResults) {
      const dist = Math.hypot(nr.x - cx, nr.y - cy);
      if (dist < minDist) {
        minDist = dist;
        centerW = nr.w;
      }
    }
  }

  // ── Free memory ──
  if (dispDataPtr) gc.push(dispDataPtr);
  if (srDataPtr) gc.push(srDataPtr);
  gc.forEach((ptr) => mod._free(ptr));

  return {
    nodeResults,
    elementResults,
    maxW,
    maxMxx,
    maxMyy,
    maxMxy,
    maxQx,
    maxQy,
    centerW,
  };
}
