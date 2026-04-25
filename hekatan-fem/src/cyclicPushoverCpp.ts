/**
 * cyclicPushoverCpp.ts — TypeScript wrapper for cyclic pushover WASM solver
 *
 * Solves a 2D portal frame with fiber sections under cyclic displacement.
 * Returns force-displacement hysteresis curve.
 */

import createModule from "./cpp/built/deform.js";

let mod: any = null;

async function ensureModule() {
  if (!mod) {
    mod = await createModule();
  }
  return mod;
}

function allocDouble(m: any, arr: number[]): number {
  const bytes = arr.length * 8;
  const ptr = m._malloc(bytes);
  m.HEAPF64.set(new Float64Array(arr), ptr / 8);
  return ptr;
}

export interface CyclicPushoverInput {
  // Frame geometry
  colHeight: number;    // column height (m)
  beamLength: number;   // beam length (m)

  // Column RC section
  col: {
    b: number; h: number;           // section dims (m)
    fpc: number;                     // concrete f'c (kN/m2, negative)
    epsc0?: number;                  // strain at f'c (default -0.002)
    fpcu?: number;                   // residual stress (default fpc*0.2)
    epsU?: number;                   // ultimate strain (default -0.005)
    ft?: number;                     // tensile strength (default 0.1*|fpc|)
    Ets?: number;                    // tension softening (default 0.1*Ec)
    Fy_rebar: number;               // rebar yield (kN/m2)
    E_rebar: number;                // rebar E (kN/m2)
    b_rebar?: number;               // hardening ratio (default 0.01)
    rebar_area: number;             // area of 1 bar (m2)
    cover: number;                  // concrete cover (m)
    n_rebar: number;                // bars per face
  };

  // Beam RC section (same format)
  beam: {
    b: number; h: number;
    fpc: number;
    epsc0?: number; fpcu?: number; epsU?: number;
    ft?: number; Ets?: number;
    Fy_rebar: number; E_rebar: number; b_rebar?: number;
    rebar_area: number; cover: number; n_rebar: number;
  };

  // Steel column (optional — if provided, uses steel instead of RC for columns)
  steelCol?: {
    Fy: number; E: number; b: number;
    A: number; I: number;
  };

  // Displacement history (array of target displacements at control node)
  dispHistory: number[];
}

export interface CyclicPushoverOutput {
  displacements: number[];  // control DOF displacement per step
  forces: number[];         // reaction force per step
  nSteps: number;
}

export async function cyclicPushover(input: CyclicPushoverInput): Promise<CyclicPushoverOutput> {
  const m = await ensureModule();

  const { col, beam, steelCol, dispHistory } = input;
  const Ec_col = 2 * Math.abs(col.fpc) / (col.epsc0 ?? 0.002);
  const Ec_beam = 2 * Math.abs(beam.fpc) / (beam.epsc0 ?? 0.002);

  // Allocate displacement history
  const pDisp = allocDouble(m, dispHistory);

  // Output pointers
  const pForceOut = m._malloc(4);
  const pDispOut = m._malloc(4);
  const pNout = m._malloc(4);

  m._cyclic_pushover(
    // Frame geometry
    input.colHeight, input.beamLength,
    // Column section
    col.b, col.h,
    col.fpc, col.epsc0 ?? -0.002, col.fpcu ?? col.fpc * 0.2, col.epsU ?? -0.005,
    col.ft ?? Math.abs(col.fpc) * 0.1, col.Ets ?? Ec_col * 0.1,
    col.Fy_rebar, col.E_rebar, col.b_rebar ?? 0.01,
    col.rebar_area, col.cover, col.n_rebar,
    // Beam section
    beam.b, beam.h,
    beam.fpc, beam.epsc0 ?? -0.002, beam.fpcu ?? beam.fpc * 0.2, beam.epsU ?? -0.005,
    beam.ft ?? Math.abs(beam.fpc) * 0.1, beam.Ets ?? Ec_beam * 0.1,
    beam.Fy_rebar, beam.E_rebar, beam.b_rebar ?? 0.01,
    beam.rebar_area, beam.cover, beam.n_rebar,
    // Steel column (0 = not used)
    steelCol?.Fy ?? 0, steelCol?.E ?? 0, steelCol?.b ?? 0,
    steelCol?.A ?? 0, steelCol?.I ?? 0,
    // Displacement history
    pDisp, dispHistory.length,
    // Outputs
    pForceOut, pDispOut, pNout
  );

  const nSteps = new Int32Array(m.HEAPU8.buffer, pNout, 1)[0];
  const forcePtr = m.HEAPU32[pForceOut / 4];
  const dispPtr = m.HEAPU32[pDispOut / 4];

  const forces: number[] = Array.from(m.HEAPF64.subarray(forcePtr / 8, forcePtr / 8 + nSteps)) as number[];
  const displacements: number[] = Array.from(m.HEAPF64.subarray(dispPtr / 8, dispPtr / 8 + nSteps)) as number[];

  // Cleanup
  m._free(pDisp);
  if (forcePtr) m._free(forcePtr);
  if (dispPtr) m._free(dispPtr);
  m._free(pForceOut);
  m._free(pDispOut);
  m._free(pNout);

  return { displacements, forces, nSteps };
}

/**
 * Test Concrete02 material: returns stress for each strain in history
 */
export async function concrete02Test(
  fpc: number, epsc0: number, fpcu: number, epsU: number,
  ft: number, Ets: number,
  strainHistory: number[]
): Promise<number[]> {
  const m = await ensureModule();
  const pStrains = allocDouble(m, strainHistory);
  const pStressOut = m._malloc(4);
  const pNout = m._malloc(4);

  m._concrete02_test(fpc, epsc0, fpcu, epsU, ft, Ets, pStrains, strainHistory.length, pStressOut, pNout);

  const n = new Int32Array(m.HEAPU8.buffer, pNout, 1)[0];
  const stressPtr = m.HEAPU32[pStressOut / 4];
  const stresses: number[] = Array.from(m.HEAPF64.subarray(stressPtr / 8, stressPtr / 8 + n)) as number[];

  m._free(pStrains);
  if (stressPtr) m._free(stressPtr);
  m._free(pStressOut);
  m._free(pNout);

  return stresses;
}
