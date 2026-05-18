import { deform } from './hekatan-fem/src/deform.js';

// Single element, check all DOFs
const nodes: [number,number,number][] = [
  [0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0],
];
const elements: number[][] = [[0, 1, 2, 3]];
const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>([
  [0, [true,true,true,true,true,true]],
  [1, [true,true,true,true,true,true]],
]);
const loads = new Map<number, [number,number,number,number,number,number]>([
  [2, [5,0,0,0,0,0]], [3, [5,0,0,0,0,0]],
]);
const elementInputs: any = {
  elasticities: new Map([[0, 2e7]]),
  thicknesses: new Map([[0, 0.1]]),
  poissonsRatios: new Map([[0, 0.2]]),
};

const result = deform(nodes, elements, { supports, loads }, elementInputs);
console.log("ALL DOFs per node:");
for (const [ni, d] of result.deformations!) {
  console.log(`  N${ni}: [${d.map((v: number) => v.toExponential(4)).join(', ')}]`);
  console.log(`        [ux, uy, uz, rx, ry, rz]`);
}
console.log("\nReactions:");
for (const [ni, r] of result.reactions!) {
  console.log(`  N${ni}: [${r.map((v: number) => v.toFixed(4)).join(', ')}]`);
}

// Analytical solution for cantilever shear wall (plane stress):
// ux_top = P*h/(G*A_s) + P*h^3/(3*E*I) [shear + bending]
// P=10, h=1, E=2e7, nu=0.2, t=0.1
// G = E/(2*(1+nu)) = 8333333
// A_s = 5/6 * t * w = 5/6 * 0.1 * 1 = 0.08333
// I = t * w^3 / 12 = 0.1 * 1 / 12 = 0.008333
// ux_shear = 10 / (8333333 * 0.08333) = 1.44e-5
// ux_bending = 10 * 1 / (3 * 2e7 * 0.008333) = 2.0e-5
// ux_total ≈ 3.44e-5 (approx with beam theory)
console.log("\nAnalytical (beam theory):");
const P = 10, h = 1, E = 2e7, nu = 0.2, t = 0.1, w = 1;
const G = E / (2 * (1 + nu));
const As = 5/6 * t * w;
const I = t * w * w * w / 12;
console.log(`  ux_shear = ${(P / (G * As)).toExponential(4)}`);
console.log(`  ux_bending = ${(P * h * h * h / (3 * E * I)).toExponential(4)}`);
console.log(`  ux_total = ${(P / (G * As) + P * h**3 / (3 * E * I)).toExponential(4)}`);
