/**
 * Test: solver Q4 Mindlin Layered
 *
 * Tests:
 *   1. Sanity: 2 capas iguales == 1 capa homogenea (debe coincidir EXACTO)
 *   2. CLT 0/90/0 isotropico == 1 capa homogenea (matriz Q invariante)
 *   3. Comparar contra plateQ4Solve homogeneo (validacion cruzada)
 *   4. Layered con capas asimetricas (B != 0): nuevo behavior
 */
import { layeredQ4Solve } from "../hekatan-fem/src/layeredQ4.ts";
import { plateQ4Solve } from "../hekatan-fem/src/index.ts";

const L = 4.0, t = 0.20, E = 21500000, nu = 0.20, q = 10, rho = 2.4;
const NDiv = 8;

console.log("============================================================");
console.log(" TEST Q4 LAYERED — Validacion contra homogeneo");
console.log("============================================================");
console.log(`Caso: L=${L}m  t=${t}m  E=${E.toExponential(2)}kPa  nu=${nu}  q=${q}kPa  malla ${NDiv}x${NDiv}`);
console.log("");

// ──── Test 1: Layered 1 capa homogenea ────
console.log("──── Test 1: Layered 1 capa (referencia) ────");
const t0 = Date.now();
const r1 = layeredQ4Solve({
  layers: [{ E, nu, thickness: t, density: rho }],
  meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
  bcType: "simply-supported",
  pressure: -q,  // -q = downward
});
console.log(`  Solve time: ${((Date.now() - t0) / 1000).toFixed(2)}s`);
console.log(`  w_max = ${(Math.abs(r1.maxW)*1000).toFixed(4)} mm`);
console.log(`  M11_max = ${Math.abs(r1.maxMxx).toFixed(4)} kN.m/m`);
console.log(`  M22_max = ${Math.abs(r1.maxMyy).toFixed(4)} kN.m/m`);

// Reference: plateQ4Solve theoryType=0 (Mindlin)
console.log("\n──── Referencia: plateQ4Solve Mindlin homogeneo ────");
const ref = plateQ4Solve({
  E, nu, thickness: t,
  theoryType: 0,
  meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
  bcType: "simply-supported",
  pressure: -q,
});
console.log(`  w_max = ${(Math.abs(ref.maxW)*1000).toFixed(4)} mm`);
console.log(`  M11_max = ${Math.abs(ref.maxMxx).toFixed(4)} kN.m/m`);
console.log("");
const dW1 = ((Math.abs(r1.maxW) - Math.abs(ref.maxW)) / Math.abs(ref.maxW)) * 100;
const dM1 = ((Math.abs(r1.maxMxx) - Math.abs(ref.maxMxx)) / Math.abs(ref.maxMxx)) * 100;
console.log(`  Diff vs ref:  w = ${dW1.toFixed(4)}%   M = ${dM1.toFixed(4)}%`);
console.log(`  ${Math.abs(dW1) < 5 && Math.abs(dM1) < 5 ? "✅ PASS" : "❌ FAIL"}`);

// ──── Test 2: 2 capas iguales ────
console.log("");
console.log("──── Test 2: 2 capas iguales (sanity) ────");
const r2 = layeredQ4Solve({
  layers: [
    { E, nu, thickness: t / 2, density: rho },
    { E, nu, thickness: t / 2, density: rho },
  ],
  meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
  bcType: "simply-supported",
  pressure: -q,
});
console.log(`  w_max = ${(Math.abs(r2.maxW)*1000).toFixed(4)} mm`);
console.log(`  M11_max = ${Math.abs(r2.maxMxx).toFixed(4)} kN.m/m`);
const dW2 = ((Math.abs(r2.maxW) - Math.abs(r1.maxW)) / Math.abs(r1.maxW)) * 100;
const dM2 = ((Math.abs(r2.maxMxx) - Math.abs(r1.maxMxx)) / Math.abs(r1.maxMxx)) * 100;
console.log(`  Diff vs Test 1:  w = ${dW2.toFixed(4)}%   M = ${dM2.toFixed(4)}%`);
console.log(`  ${Math.abs(dW2) < 0.001 && Math.abs(dM2) < 0.001 ? "✅ EXACT (debe ser 0%)" : "⚠ NOT EXACT"}`);

// ──── Test 3: CLT 0/90/0 isotropico ────
console.log("");
console.log("──── Test 3: CLT 0/90/0 isotropico (debe = homogeneo) ────");
const r3 = layeredQ4Solve({
  layers: [
    { E, nu, thickness: t / 3, density: rho, angle: 0 },
    { E, nu, thickness: t / 3, density: rho, angle: Math.PI / 2 },
    { E, nu, thickness: t / 3, density: rho, angle: 0 },
  ],
  meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
  bcType: "simply-supported",
  pressure: -q,
});
console.log(`  w_max = ${(Math.abs(r3.maxW)*1000).toFixed(4)} mm`);
console.log(`  M11_max = ${Math.abs(r3.maxMxx).toFixed(4)} kN.m/m`);
const dW3 = ((Math.abs(r3.maxW) - Math.abs(r1.maxW)) / Math.abs(r1.maxW)) * 100;
const dM3 = ((Math.abs(r3.maxMxx) - Math.abs(r1.maxMxx)) / Math.abs(r1.maxMxx)) * 100;
console.log(`  Diff vs Test 1:  w = ${dW3.toFixed(4)}%   M = ${dM3.toFixed(4)}%`);
console.log(`  ${Math.abs(dW3) < 0.01 && Math.abs(dM3) < 0.01 ? "✅ EXACT" : "⚠"}`);

// ──── Test 4: Capas asimetricas (B != 0) ────
console.log("");
console.log("──── Test 4: Asimetrico (capa blanda + rigida) — B != 0 ────");
const r4 = layeredQ4Solve({
  layers: [
    { E: E * 0.5, nu, thickness: t / 2, density: rho, angle: 0 },
    { E: E * 1.5, nu, thickness: t / 2, density: rho, angle: 0 },
  ],
  meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
  bcType: "simply-supported",
  pressure: -q,
});
console.log(`  w_max = ${(Math.abs(r4.maxW)*1000).toFixed(4)} mm`);
console.log(`  M11_max = ${Math.abs(r4.maxMxx).toFixed(4)} kN.m/m`);
console.log(`  Coupling B_11 = ${r4.abbd.B[0][0].toExponential(3)} kN`);
console.log(`  (esperamos respuesta DIFERENTE al homogeneo por coupling)`);

// ──── Test 5: CLT 0/90/0 con material ortotropico (ESTE es CLT real) ────
// Note: nuestro solver isotropico-only, pero podemos simular ortotropia con angles
// Ortotropia equivalente: capas con E1 != E2 en sentidos distintos
console.log("");
console.log("──── Test 5: CLT con E reducido en capa central ────");
const r5 = layeredQ4Solve({
  layers: [
    { E, nu, thickness: t / 3, density: rho, angle: 0 },
    { E: E * 0.5, nu, thickness: t / 3, density: rho, angle: 0 },  // capa central blanda
    { E, nu, thickness: t / 3, density: rho, angle: 0 },
  ],
  meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
  bcType: "simply-supported",
  pressure: -q,
});
console.log(`  w_max = ${(Math.abs(r5.maxW)*1000).toFixed(4)} mm`);
console.log(`  M11_max = ${Math.abs(r5.maxMxx).toFixed(4)} kN.m/m`);
console.log(`  D_11_efectivo = ${r5.abbd.D[0][0].toExponential(3)} kN.m`);
console.log(`  D_11_homogeneo = ${r1.abbd.D[0][0].toExponential(3)} kN.m`);
const Dr = r5.abbd.D[0][0] / r1.abbd.D[0][0];
console.log(`  Ratio D = ${Dr.toFixed(4)} (esperamos < 1 por capa central blanda)`);

console.log("");
console.log("============================================================");
console.log(" RESUMEN");
console.log("============================================================");
console.log(`Test 1 (1 capa vs plateQ4):       w ${dW1.toFixed(2)}%  M ${dM1.toFixed(2)}%`);
console.log(`Test 2 (2 capas iguales sanity):  w ${dW2.toFixed(4)}%  M ${dM2.toFixed(4)}%`);
console.log(`Test 3 (CLT 0/90/0 isotropico):   w ${dW3.toFixed(4)}%  M ${dM3.toFixed(4)}%`);
console.log(`Test 4 (asimetrico B!=0):          w_max=${(Math.abs(r4.maxW)*1000).toFixed(4)} mm  (con coupling)`);
console.log(`Test 5 (capa central blanda):      w_max=${(Math.abs(r5.maxW)*1000).toFixed(4)} mm  (D reducido)`);
