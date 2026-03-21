import createModule from "./cpp/built/deform.js";

// @ts-ignore
const mod = await createModule();

export type SlopeInput = {
  nodes: [number, number][];       // 2D nodes [x, y]
  elements: [number, number, number][]; // triangles [n0, n1, n2]
  E: number;
  nu: number;
  gamma: number;                   // unit weight (kN/m³)
  c: number;                       // cohesion (kPa)
  phi: number;                     // friction angle (degrees)
  thickness?: number;              // default 1.0 (plane strain)
  supports: { node: number; fixX: boolean; fixY: boolean }[];
  surcharge?: number;              // surcharge on top surface (kPa)
  surfaceYThreshold?: number;      // y threshold for surcharge application
};

export type SlopeOutput = {
  fos: number;
  plasticStrain: number[];         // per element equivalent plastic strain
  displacements: [number, number][]; // per node [ux, uy]
};

export function slopeSRM(input: SlopeInput): SlopeOutput {
  const {
    nodes, elements, E, nu, gamma, c, phi,
    thickness = 1.0, supports,
    surcharge = 0, surfaceYThreshold = -1e10
  } = input;

  const gc: number[] = [];

  // Nodes flat: [x0, y0, x1, y1, ...]
  const nodesFlat = nodes.flat();
  const nodesFlatPtr = allocF64(nodesFlat);
  gc.push(nodesFlatPtr);

  // Elements flat: [n0, n1, n2, n0, n1, n2, ...]
  const elemsFlat = elements.flat();
  const elemsFlatPtr = allocI32(elemsFlat);
  gc.push(elemsFlatPtr);

  // Supports flat: [nodeIdx, fixX, fixY, ...]
  const supFlat: number[] = [];
  for (const s of supports) {
    supFlat.push(s.node, s.fixX ? 1 : 0, s.fixY ? 1 : 0);
  }
  const supFlatPtr = allocI32(supFlat);
  gc.push(supFlatPtr);

  // Output arrays (pre-allocated)
  const nElem = elements.length;
  const nNodes = nodes.length;
  const outPlasticPtr = mod._slopeAllocDouble(nElem);
  gc.push(outPlasticPtr);
  const outDispPtr = mod._slopeAllocDouble(nNodes * 2);
  gc.push(outDispPtr);

  // Call solver
  const fos = mod._slopeStabilitySolver(
    nodesFlatPtr, nNodes,
    elemsFlatPtr, nElem,
    E, nu, gamma, c, phi, thickness,
    supFlatPtr, supports.length,
    surcharge, surfaceYThreshold,
    outPlasticPtr, outDispPtr
  );

  // Read outputs
  const plasticStrain: number[] = [];
  for (let i = 0; i < nElem; i++) {
    plasticStrain.push(mod.HEAPF64[outPlasticPtr / 8 + i]);
  }

  const displacements: [number, number][] = [];
  for (let i = 0; i < nNodes; i++) {
    displacements.push([
      mod.HEAPF64[outDispPtr / 8 + 2 * i],
      mod.HEAPF64[outDispPtr / 8 + 2 * i + 1]
    ]);
  }

  // Free memory
  gc.forEach((ptr) => mod._free(ptr));

  return { fos, plasticStrain, displacements };
}

// ── Helpers ──
function allocF64(data: number[]): number {
  const buf = new Float64Array(data);
  const ptr = mod._malloc(buf.length * buf.BYTES_PER_ELEMENT);
  mod.HEAPF64.set(buf, ptr / 8);
  return ptr;
}

function allocI32(data: number[]): number {
  const buf = new Uint32Array(data);
  const ptr = mod._malloc(buf.length * buf.BYTES_PER_ELEMENT);
  mod.HEAPU32.set(buf, ptr / 4);
  return ptr;
}
