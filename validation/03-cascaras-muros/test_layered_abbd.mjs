/**
 * Test: ABBD matrices del Layered Shell
 *
 * Casos:
 *   1. 1 capa homogenea — ABBD = [E·t, 0, E·t³/12, ...] como referencia
 *   2. 2 capas iguales del mismo material — debe igualar caso 1
 *   3. CLT 0/90/0 (3 capas con angulos distintos)
 *   4. Capas asimetricas (B != 0)
 */
import { computeABBD, printABBD } from "../hekatan-fem/src/layeredShell.ts";

const E = 21500000;   // kPa
const nu = 0.20;
const t_total = 0.20;
const rho = 2.4;

console.log("============================================================");
console.log(" TEST ABBD — Classical Laminate Theory");
console.log("============================================================");

// ──── Caso 1: 1 capa homogenea ────
console.log("\n──── Caso 1: 1 capa homogenea (referencia) ────");
const c1 = computeABBD([
  { E, nu, thickness: t_total, density: rho }
]);
console.log(printABBD(c1));

// Valores esperados:
// A_11 = E/(1-nu²) * t = 21.5e6 / 0.96 * 0.20 = 4,479,167 kN/m
// D_11 = E/(1-nu²) * t³/12 = 21.5e6 / 0.96 * 0.008/12 = 14,930.5 kN·m
// B = 0 (capa centrada)
const A11_expected = E / (1 - nu * nu) * t_total;
const D11_expected = E / (1 - nu * nu) * Math.pow(t_total, 3) / 12;
console.log(`Expected A_11 = ${A11_expected.toExponential(3)}`);
console.log(`Expected D_11 = ${D11_expected.toExponential(3)}`);
console.log(`Got      A_11 = ${c1.A[0][0].toExponential(3)}  diff: ${((c1.A[0][0]-A11_expected)/A11_expected*100).toFixed(4)}%`);
console.log(`Got      D_11 = ${c1.D[0][0].toExponential(3)}  diff: ${((c1.D[0][0]-D11_expected)/D11_expected*100).toFixed(4)}%`);

// ──── Caso 2: 2 capas iguales del mismo material ────
console.log("\n──── Caso 2: 2 capas iguales (debe igualar caso 1) ────");
const c2 = computeABBD([
  { E, nu, thickness: t_total / 2, density: rho },
  { E, nu, thickness: t_total / 2, density: rho },
]);
console.log(printABBD(c2));
console.log(`A_11 ratio (caso2/caso1) = ${(c2.A[0][0]/c1.A[0][0]).toFixed(6)}  (esperado 1.000000)`);
console.log(`D_11 ratio (caso2/caso1) = ${(c2.D[0][0]/c1.D[0][0]).toFixed(6)}  (esperado 1.000000)`);

// ──── Caso 3: CLT 0/90/0 (cross-ply laminado) ────
console.log("\n──── Caso 3: CLT 0/90/0 (cross-ply, mismo E) ────");
const c3 = computeABBD([
  { E, nu, thickness: t_total / 3, density: rho, angle: 0 },
  { E, nu, thickness: t_total / 3, density: rho, angle: Math.PI / 2 },
  { E, nu, thickness: t_total / 3, density: rho, angle: 0 },
]);
console.log(printABBD(c3));
console.log("Para isotropico con angulos 0/90/0: las matrices A,D deben ser iguales");
console.log("a las del caso homogeneo (porque rotar isotropico = isotropico)");
console.log(`A_11 vs caso 1 = ${(c3.A[0][0]/c1.A[0][0]).toFixed(6)}`);
console.log(`D_11 vs caso 1 = ${(c3.D[0][0]/c1.D[0][0]).toFixed(6)}`);

// ──── Caso 4: Asimetrico (B != 0) ────
console.log("\n──── Caso 4: Asimetrico (capa abajo + capa arriba con E distintos) ────");
const c4 = computeABBD([
  { E: E * 0.5, nu, thickness: t_total / 2, density: rho },        // capa blanda abajo
  { E: E * 1.5, nu, thickness: t_total / 2, density: rho },        // capa rigida arriba
]);
console.log(printABBD(c4));
console.log("B != 0 esperado porque las capas son ASIMETRICAS en stiffness");
console.log(`B_11 = ${c4.B[0][0].toExponential(3)} (debe ser != 0)`);

// ──── Caso 5: Material ortotropico con CLT real (composite) ────
console.log("\n──── Caso 5: Composite CFRP — 0/45/-45/90/-45/45/0 (quasi-isotropic) ────");
// CFRP tipico: E1 >> E2 (fibras en direccion 1)
const E1 = 130e6, E2 = 8e6, nu12 = 0.28;
// Usamos isotropico equivalente para simplificar el test
const E_eff = (E1 + E2) / 2;
const c5 = computeABBD([
  { E: E_eff, nu: nu12, thickness: 0.001, angle: 0 },
  { E: E_eff, nu: nu12, thickness: 0.001, angle: Math.PI / 4 },
  { E: E_eff, nu: nu12, thickness: 0.001, angle: -Math.PI / 4 },
  { E: E_eff, nu: nu12, thickness: 0.001, angle: Math.PI / 2 },
  { E: E_eff, nu: nu12, thickness: 0.001, angle: -Math.PI / 4 },
  { E: E_eff, nu: nu12, thickness: 0.001, angle: Math.PI / 4 },
  { E: E_eff, nu: nu12, thickness: 0.001, angle: 0 },
]);
console.log(printABBD(c5));
console.log("Composite quasi-isotropic: B=0 (simetrico), A diagonal dominante");
