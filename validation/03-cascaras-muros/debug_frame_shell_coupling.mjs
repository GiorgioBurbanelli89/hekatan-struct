/**
 * Debug específico: verificar Iy/Iz convention para vigas horizontales en
 * hekatan-fem, comparando contra SAP2000.
 *
 * Test: viga simple cantilever horizontal, sin shell. Carga vertical en punta.
 * Si Hekatan == SAP, la convención Iy/Iz es correcta.
 * Si difiere por factor 2-3×, hay problema de convención.
 */
import { deform, modalAnalysis } from "../hekatan-fem/src/index.ts";

// Viga horizontal cantilever 5 m, sección 0.30 × 0.50 (h vertical = 0.50)
const L = 5.0, b = 0.30, h = 0.50;
const E = 25e6, nu = 0.20, rho = 2.4;
const G = E / (2 * (1 + nu));
const F = 100;  // kN punta

// Sección
const A = b * h;
const I_strong = b * Math.pow(h, 3) / 12;   // 3.125e-3, resists vertical bending
const I_weak   = h * Math.pow(b, 3) / 12;   // 1.125e-3, resists horizontal bending
const J        = 0.28 * b * Math.pow(h, 3); // 0.0105 (formula del ejemplo)

console.log("=== Test convención I para viga horizontal cantilever ===");
console.log(`Viga: L=${L} b=${b} h=${h}, F=${F}kN punta vertical`);
console.log(`I_strong (b·h³/12) = ${I_strong.toExponential(3)} m⁴ — esperado para bending vertical`);
console.log(`I_weak   (h·b³/12) = ${I_weak.toExponential(3)} m⁴`);
console.log(`J        = ${J.toExponential(3)} m⁴`);

// Analítica cantilever Euler-Bernoulli
const delta_correcto = F * Math.pow(L, 3) / (3 * E * I_strong);
const delta_si_weak  = F * Math.pow(L, 3) / (3 * E * I_weak);
console.log(`\nAnalítica:`);
console.log(`  δ con I_strong: ${(delta_correcto * 1000).toFixed(4)} mm  (esperado correcto)`);
console.log(`  δ con I_weak:   ${(delta_si_weak * 1000).toFixed(4)} mm  (si convención mal)`);

// 2 nodos: empotrado (0) - punta (1)
const nodes = [[0, 0, 0], [L, 0, 0]];
const elements = [[0, 1]];

// Ensayos: probar 4 combinaciones para entender qué convención usa hekatan
const tests = [
  { name: "Iy=strong, Iz=weak (caso 1)", Iy: I_strong, Iz: I_weak },
  { name: "Iy=weak,   Iz=strong (caso 2)", Iy: I_weak, Iz: I_strong },
  { name: "Iy=Iz=strong (caso 3)", Iy: I_strong, Iz: I_strong },
  { name: "Iy=Iz=weak   (caso 4)", Iy: I_weak, Iz: I_weak },
];

console.log(`\n──── Ensayos hekatan deform() ────`);
for (const test of tests) {
  const ei = {
    elasticities: new Map([[0, E]]),
    poissonsRatios: new Map([[0, nu]]),
    shearModuli: new Map([[0, G]]),
    areas: new Map([[0, A]]),
    momentsOfInertiaY: new Map([[0, test.Iy]]),
    momentsOfInertiaZ: new Map([[0, test.Iz]]),
    torsionalConstants: new Map([[0, J]]),
    densities: new Map([[0, rho]]),
  };
  const supports = new Map([[0, [true, true, true, true, true, true]]]);  // empotrado nodo 0
  const loads = new Map([[1, [0, 0, -F, 0, 0, 0]]]);  // F vertical hacia abajo en punta

  const dout = deform(nodes, elements, { supports, loads }, ei);
  const d_punta = dout.deformations.get(1);
  const delta_z = Math.abs(d_punta[2]) * 1000;
  const ratio_strong = delta_z / (delta_correcto * 1000);
  const ratio_weak = delta_z / (delta_si_weak * 1000);
  console.log(`  ${test.name}: δ=${delta_z.toFixed(4)}mm  ratio vs strong=${ratio_strong.toFixed(3)}  vs weak=${ratio_weak.toFixed(3)}`);
}

console.log(`\n──── Caso del membrana-csi (Iz=strong, Iy=weak) ────`);
console.log(`Si esto da δ pequeña con bending vertical, la convención de hekatan`);
console.log(`para vigas horizontales usa Iz para vertical bending (no Iy).`);
console.log(`Comparar con expected = ${(delta_correcto * 1000).toFixed(4)} mm`);
