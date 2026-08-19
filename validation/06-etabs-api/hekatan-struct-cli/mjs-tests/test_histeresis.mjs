#!/usr/bin/env node
/**
 * test_histeresis.mjs — Reproduce ensayo Lopez-Ugel-Herrera
 * Pórtico: columna RC 30x30 + viga RC 25x30, carga cíclica
 * Usa cyclic_pushover WASM con fiber sections (Concrete02 + Steel02)
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const wasmPath = join(__dirname, "hekatan-fem", "src", "cpp", "built", "deform.wasm");
const jsPath = join(__dirname, "hekatan-fem", "src", "cpp", "built", "deform.js");
const createModule = (await import(pathToFileURL(jsPath).href)).default;
const mod = await createModule({ wasmBinary: readFileSync(wasmPath) });

function allocD(a){const p=mod._malloc(a.length*8);mod.HEAPF64.set(new Float64Array(a),p/8);return p;}

// ═══════════════════════════════════════════════════
// Datos del ensayo (Lopez, Ugel, Herrera 2017)
// ═══════════════════════════════════════════════════
const colH = 1.30;  // m (column height)
const beamL = 2.00;  // m (beam length each side)

// Column: 30x30 cm
const col_b = 0.30, col_h = 0.30;
const col_fpc = -300 * 100; // 300 kgf/cm2 = 30000 kN/m2 (negative for compression)
const col_epsc0 = -0.002;
const col_fpcu = col_fpc * 0.2; // residual
const col_epsU = -0.005;
const col_Ec = 2 * Math.abs(col_fpc) / Math.abs(col_epsc0);
const col_ft = Math.abs(col_fpc) * 0.1; // tensile strength ~10% of f'c
const col_Ets = col_Ec * 0.05; // tension softening

// Rebar: fy = 4200 kgf/cm2 = 420 MPa
const col_Fy = 4200 * 100; // kN/m2
const col_E = 200e6;       // kN/m2
const col_b_hard = 0.01;   // hardening ratio
const col_As = 2.0e-4;     // 2 cm2 per bar
const col_cover = 0.04;    // 4 cm cover
const col_nbar = 3;        // 3 bars per face

// Beam: 25x30 cm (same materials)
const beam_b = 0.25, beam_h = 0.30;

// Displacement history: 3 cycles of increasing amplitude
// Based on Fig. 10 of the paper: +-20mm, +-40mm, +-60mm, +-80mm
const dispHistory = [];
const amplitudes = [0.005, 0.010, 0.020, 0.030, 0.040, 0.060, 0.080]; // meters
const stepsPerCycle = 40;

for (const amp of amplitudes) {
  for (let i = 0; i <= stepsPerCycle; i++) {
    dispHistory.push(amp * Math.sin(2 * Math.PI * i / stepsPerCycle));
  }
}

console.log("=".repeat(60));
console.log("  ENSAYO LOPEZ-UGEL-HERRERA — HISTERESIS");
console.log("=".repeat(60));
console.log(`  Columna: ${col_b*100}x${col_h*100}cm, f'c=${Math.abs(col_fpc)/100} kgf/cm2`);
console.log(`  Vigas: ${beam_b*100}x${beam_h*100}cm`);
console.log(`  Acero: Fy=${col_Fy/100} kgf/cm2, As=${col_As*1e4} cm2/bar, ${col_nbar} bars/face`);
console.log(`  ${dispHistory.length} pasos, ${amplitudes.length} ciclos`);
console.log(`  Amplitudes: ${amplitudes.map(a => (a*1000).toFixed(0)+'mm').join(', ')}`);

const t0 = performance.now();

// Allocate displacement history
const pDisp = allocD(dispHistory);
const pForceOut = mod._malloc(4);
const pDispOut = mod._malloc(4);
const pNout = mod._malloc(4);

try {
  mod._cyclic_pushover(
    colH, beamL,
    // Column section
    col_b, col_h,
    col_fpc, col_epsc0, col_fpcu, col_epsU,
    col_ft, col_Ets,
    col_Fy, col_E, col_b_hard,
    col_As, col_cover, col_nbar,
    // Beam section (same RC)
    beam_b, beam_h,
    col_fpc, col_epsc0, col_fpcu, col_epsU,
    col_ft, col_Ets,
    col_Fy, col_E, col_b_hard,
    col_As * 0.7, col_cover * 0.8, col_nbar,
    // Steel column (not used)
    0, 0, 0, 0, 0,
    // Displacement history
    pDisp, dispHistory.length,
    // Output pointers
    pForceOut, pDispOut, pNout
  );

  const dt = performance.now() - t0;
  const nSteps = new Int32Array(mod.HEAPU8.buffer, pNout, 1)[0];
  const forcePtr = mod.HEAPU32[pForceOut / 4];
  const dispPtr = mod.HEAPU32[pDispOut / 4];

  const forces = Array.from(mod.HEAPF64.subarray(forcePtr / 8, forcePtr / 8 + nSteps));
  const disps = Array.from(mod.HEAPF64.subarray(dispPtr / 8, dispPtr / 8 + nSteps));

  console.log(`\n  Resuelto en ${dt.toFixed(0)} ms`);
  console.log(`  ${nSteps} pasos calculados`);

  // Stats
  const maxF = Math.max(...forces.map(Math.abs));
  const maxD = Math.max(...disps.map(Math.abs));
  console.log(`  Fuerza maxima: ${maxF.toFixed(1)} kN (exp: ~1500-2000 kgf = 15-20 kN)`);
  console.log(`  Desplazamiento maximo: ${(maxD*1000).toFixed(1)} mm`);

  // Save CSV for plotting
  let csv = "disp_mm,force_kN\n";
  for (let i = 0; i < nSteps; i++) {
    csv += `${(disps[i]*1000).toFixed(3)},${forces[i].toFixed(3)}\n`;
  }
  writeFileSync("histeresis_result.csv", csv);
  console.log(`\n  Datos guardados en histeresis_result.csv`);
  console.log(`  Graficar con: python -c "import pandas as pd; import matplotlib.pyplot as plt; d=pd.read_csv('histeresis_result.csv'); plt.plot(d.disp_mm,d.force_kN); plt.xlabel('Desp (mm)'); plt.ylabel('Fuerza (kN)'); plt.title('Histeresis'); plt.grid(); plt.show()"`);

  if (forcePtr) mod._free(forcePtr);
  if (dispPtr) mod._free(dispPtr);

} catch (e) {
  console.error("  ERROR:", e.message);
}

mod._free(pDisp);
mod._free(pForceOut);
mod._free(pDispOut);
mod._free(pNout);

console.log("\n" + "=".repeat(60));
