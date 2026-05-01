/**
 * Test alternativo: losa con vigas + simply supported en TODOS los bordes
 * (no solo 4 esquinas). Más realista físicamente.
 */
import { deform, modalAnalysis } from "../hekatan-fem/src/index.ts";

const Lx = 5.0, Ly = 4.0, t = 0.15;
const E = 25e6, nu = 0.20, q = 8.0;
const bViga = 0.30, hViga = 0.50;
const nx = 10, ny = 8;
const rho = 2.4;
const dx = Lx / nx, dy = Ly / ny;

const nodes = [];
for (let j = 0; j <= ny; j++)
  for (let i = 0; i <= nx; i++)
    nodes.push([i * dx, j * dy, 0]);

const elements = [];
for (let j = 0; j < ny; j++)
  for (let i = 0; i < nx; i++) {
    const n0 = j * (nx + 1) + i;
    elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
  }
const shellCount = elements.length;

const topBase = ny * (nx + 1);
for (let i = 0; i < nx; i++) elements.push([i, i + 1]);
for (let i = 0; i < nx; i++) elements.push([topBase + i, topBase + i + 1]);
for (let j = 0; j < ny; j++) elements.push([j * (nx + 1), (j + 1) * (nx + 1)]);
for (let j = 0; j < ny; j++) elements.push([j * (nx + 1) + nx, (j + 1) * (nx + 1) + nx]);

// SIMPLY SUPPORTED: TODOS los bordes Uz=0, esquinas con Ux/Uy también
const supports = new Map();
for (let j = 0; j <= ny; j++) {
  for (let i = 0; i <= nx; i++) {
    const isPerim = (i === 0 || i === nx || j === 0 || j === ny);
    if (!isPerim) continue;
    const idx = j * (nx + 1) + i;
    if (i === 0 && j === 0) supports.set(idx, [true, true, true, false, false, false]);
    else if (i === nx && j === 0) supports.set(idx, [false, true, true, false, false, false]);
    else supports.set(idx, [false, false, true, false, false, false]);
  }
}

const loads = new Map();
for (let j = 0; j <= ny; j++)
  for (let i = 0; i <= nx; i++) {
    const idx = j * (nx + 1) + i;
    const isCorner = (i === 0 || i === nx) && (j === 0 || j === ny);
    const isEdge = (i === 0 || i === nx || j === 0 || j === ny) && !isCorner;
    const factor = isCorner ? 0.25 : isEdge ? 0.5 : 1.0;
    loads.set(idx, [0, 0, -q * dx * dy * factor, 0, 0, 0]);
  }

const G = E / (2 * (1 + nu));
const Av = bViga * hViga;
const Iy_strong = bViga * Math.pow(hViga, 3) / 12;
const Iz_weak = hViga * Math.pow(bViga, 3) / 12;
const Jv = 0.21 * 0.30 * Math.pow(0.50, 3); // formula correcta

const ei = {
  elasticities: new Map(elements.map((_, i) => [i, E])),
  poissonsRatios: new Map(elements.map((_, i) => [i, nu])),
  shearModuli: new Map(elements.map((_, i) => [i, G])),
  thicknesses: new Map(),
  densities: new Map(elements.map((_, i) => [i, rho])),
  areas: new Map(),
  momentsOfInertiaY: new Map(),
  momentsOfInertiaZ: new Map(),
  torsionalConstants: new Map(),
};
for (let i = 0; i < shellCount; i++) ei.thicknesses.set(i, t);
for (let i = shellCount; i < elements.length; i++) {
  ei.areas.set(i, Av);
  ei.momentsOfInertiaY.set(i, Iy_strong);
  ei.momentsOfInertiaZ.set(i, Iz_weak);
  ei.torsionalConstants.set(i, Jv);
}

const ni = { supports, loads };
const dout = deform(nodes, elements, ni, ei);
let maxUz = 0;
dout.deformations.forEach((d) => { if (Math.abs(d[2]) > Math.abs(maxUz)) maxUz = d[2]; });
const delta_max_mm = Math.abs(maxUz) * 1000;

const mout = modalAnalysis(nodes, elements, ni, ei, 6);

console.log("============================================================");
console.log(" TEST: losa + vigas, simply supported en TODOS los bordes");
console.log("============================================================");
console.log(`δ_max = ${delta_max_mm.toFixed(4)} mm`);
console.log("\nModos:");
mout.frequencies.slice(0, 6).forEach((f, i) => {
  console.log(`  Mode ${i+1}: f=${f.toFixed(3)} Hz`);
});
