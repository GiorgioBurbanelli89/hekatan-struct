/**
 * Debug: convención Iy/Iz según orientación del frame (axis X vs axis Y vs axis Z)
 *
 * Verifica si momentsOfInertiaY / momentsOfInertiaZ tienen significado distinto
 * cuando el frame está orientado en X, Y, o Z.
 */
import { deform } from "../hekatan-fem/src/index.ts";

const L = 5.0, b = 0.30, h = 0.50;
const E = 25e6, nu = 0.20, rho = 2.4;
const G = E / (2 * (1 + nu));
const F = 100;
const A = b * h;
const I_strong = b * Math.pow(h, 3) / 12;   // 3.125e-3
const I_weak   = h * Math.pow(b, 3) / 12;   // 1.125e-3
const J        = 0.28 * b * Math.pow(h, 3);

const delta_strong_mm = F * Math.pow(L, 3) / (3 * E * I_strong) * 1000;
const delta_weak_mm   = F * Math.pow(L, 3) / (3 * E * I_weak) * 1000;

console.log("============================================================");
console.log(" Test: convencion Iy/Iz por orientacion del frame");
console.log("============================================================");
console.log(`Viga ${L}m, b=${b} h=${h}, F=${F}kN punta`);
console.log(`δ con I_strong (b·h³/12 = ${I_strong.toExponential(3)}): ${delta_strong_mm.toFixed(4)} mm`);
console.log(`δ con I_weak   (h·b³/12 = ${I_weak.toExponential(3)}): ${delta_weak_mm.toFixed(4)} mm`);
console.log("");

const cases = [
  { name: "Viga en X, carga -Z", n0: [0,0,0], n1: [L,0,0], loadDof: 2 },
  { name: "Viga en Y, carga -Z", n0: [0,0,0], n1: [0,L,0], loadDof: 2 },
  { name: "Viga en X, carga -Y", n0: [0,0,0], n1: [L,0,0], loadDof: 1 },
  { name: "Viga en Y, carga -X", n0: [0,0,0], n1: [0,L,0], loadDof: 0 },
];

console.log("Test                              Iy=strong/Iz=weak    Iy=weak/Iz=strong   Conclusion");
console.log("─".repeat(105));

for (const c of cases) {
  const nodes = [c.n0, c.n1];
  const elements = [[0, 1]];

  // Variant A: Iy=strong, Iz=weak
  const eiA = {
    elasticities: new Map([[0, E]]),
    poissonsRatios: new Map([[0, nu]]),
    shearModuli: new Map([[0, G]]),
    areas: new Map([[0, A]]),
    momentsOfInertiaY: new Map([[0, I_strong]]),
    momentsOfInertiaZ: new Map([[0, I_weak]]),
    torsionalConstants: new Map([[0, J]]),
    densities: new Map([[0, rho]]),
  };
  // Variant B: Iy=weak, Iz=strong
  const eiB = {
    elasticities: new Map([[0, E]]),
    poissonsRatios: new Map([[0, nu]]),
    shearModuli: new Map([[0, G]]),
    areas: new Map([[0, A]]),
    momentsOfInertiaY: new Map([[0, I_weak]]),
    momentsOfInertiaZ: new Map([[0, I_strong]]),
    torsionalConstants: new Map([[0, J]]),
    densities: new Map([[0, rho]]),
  };

  const supports = new Map([[0, [true, true, true, true, true, true]]]);
  const loadVec = [0, 0, 0, 0, 0, 0];
  loadVec[c.loadDof] = -F;
  const loads = new Map([[1, loadVec]]);

  const doutA = deform(nodes, elements, { supports, loads }, eiA);
  const doutB = deform(nodes, elements, { supports, loads }, eiB);
  const dA = Math.abs(doutA.deformations.get(1)[c.loadDof]) * 1000;
  const dB = Math.abs(doutB.deformations.get(1)[c.loadDof]) * 1000;

  const useStrongA = Math.abs(dA - delta_strong_mm) < Math.abs(dA - delta_weak_mm);
  const useStrongB = Math.abs(dB - delta_strong_mm) < Math.abs(dB - delta_weak_mm);
  const conclA = useStrongA ? `usa Iy(strong)` : `usa Iz(weak)`;
  const conclB = useStrongB ? `usa Iz(strong)` : `usa Iy(weak)`;

  console.log(c.name.padEnd(34) + dA.toFixed(2).padStart(8) + ` (${conclA})`.padEnd(15) +
              "  " + dB.toFixed(2).padStart(8) + ` (${conclB})`);
}
