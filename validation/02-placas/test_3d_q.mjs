/**
 * Test: Hekatan layered con stressMode "plane-strain" (modo SAP Type=6).
 * Reemplaza el flag globalThis por el param `stressMode` formal de la API.
 */
import { layeredQ4Solve } from "../hekatan-fem/src/index.ts";

const L = 4.0, t = 0.30, q = 10, NDiv = 10;

console.log("=" + "=".repeat(75));
console.log(" Hekatan layered: comparacion plane-stress vs plane-strain");
console.log("=" + "=".repeat(75));

for (const mode of ["plane-stress", "plane-strain"]) {
  console.log(`\n=== Modo: ${mode} ===`);

  const isoOut = layeredQ4Solve({
    layers: [{ E: 30e6, nu: 0.30, thickness: t, angle: 0, density: 2.4 }],
    meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
    bcType: "simply-supported",
    pressure: -q,
    stressMode: mode,
  });
  const wIso = Math.abs(isoOut.maxW) * 1000;
  const mIso = Math.max(Math.abs(isoOut.maxMxx), Math.abs(isoOut.maxMyy));

  const bmOut = layeredQ4Solve({
    layers: [
      { E: 30e6, nu: 0.30, thickness: t/2, angle: 0, density: 2.4 },
      { E: 15e6, nu: 0.30, thickness: t/2, angle: 0, density: 2.4 },
    ],
    meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
    bcType: "simply-supported",
    pressure: -q,
    stressMode: mode,
  });
  const wBm = Math.abs(bmOut.maxW) * 1000;
  const mBm = Math.max(Math.abs(bmOut.maxMxx), Math.abs(bmOut.maxMyy));

  console.log(`  iso     w=${wIso.toFixed(4)} mm  M=${mIso.toFixed(4)}`);
  console.log(`  bimetal w=${wBm.toFixed(4)} mm  M=${mBm.toFixed(4)}`);
  console.log(`  ratio bimetal/iso = ${(wBm/wIso).toFixed(3)}x`);
}

console.log(`\n--- Referencias ---`);
console.log(`  SAP Plate-Thick (Type=4) iso:   w=0.149 mm  M=7.97`);
console.log(`  SAP Shell-Layered (Type=6) iso: w=0.118 mm  M=7.72  (2 capas iguales)`);
console.log(`  SAP Shell-Layered (Type=6) bim: w=0.172 mm  M=7.71`);
