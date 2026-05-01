/**
 * Test: membrana-csi con Iy CORRECTA (b·h³/12) vs convención original
 * para identificar la causa real del 3.3× discrepancia vs SAP.
 */
import { deform } from "../hekatan-fem/src/index.ts";

const Lx = 5.0, Ly = 4.0, t = 0.15;
const E = 25e6, nu = 0.20, q = 8.0;
const bViga = 0.30, hViga = 0.50;
const nx = 10, ny = 8;
const rho = 2.4;
const dx = Lx / nx, dy = Ly / ny;

function buildModel(IyStrong) {
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

  const supports = new Map();
  const corners = [0, nx, topBase, topBase + nx];
  corners.forEach(c => supports.set(c, [true, true, true, false, false, false]));

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
  const I_strong = bViga * Math.pow(hViga, 3) / 12;
  const I_weak = hViga * Math.pow(bViga, 3) / 12;
  const Jv = 0.28 * bViga * Math.pow(hViga, 3);

  const thicknesses = new Map();
  const elasticities = new Map();
  const poissons = new Map();
  const areas = new Map();
  const Iz = new Map();
  const Iy = new Map();
  const J = new Map();
  const Gm = new Map();
  const densities = new Map();

  for (let i = 0; i < shellCount; i++) {
    thicknesses.set(i, t);
    elasticities.set(i, E);
    poissons.set(i, nu);
    densities.set(i, rho);
  }

  for (let i = shellCount; i < elements.length; i++) {
    elasticities.set(i, E);
    poissons.set(i, nu);
    Gm.set(i, G);
    areas.set(i, Av);
    // VARIANT: cambiar Iy según test
    if (IyStrong) {
      // CORRECTO para vigas horizontales bajo carga vertical
      Iy.set(i, I_strong);   // b·h³/12 → resists bending vertical
      Iz.set(i, I_weak);     // h·b³/12 → resists bending horizontal
    } else {
      // ORIGINAL del ejemplo membrana-csi
      Iy.set(i, I_weak);
      Iz.set(i, I_strong);
    }
    J.set(i, Jv);
    densities.set(i, rho);
  }

  const ei = {
    elasticities, poissonsRatios: poissons, shearModuli: Gm,
    areas, momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy, torsionalConstants: J,
    thicknesses, densities,
  };
  const ni = { supports, loads };

  return { nodes, elements, ni, ei };
}

console.log("============================================================");
console.log(" TEST: membrana-csi con Iy correcta vs original");
console.log("============================================================");
console.log("SAP2000 reference: δ_max = 2.4950 mm");
console.log("");

// Variante A: ORIGINAL ejemplo (Iy=weak, Iz=strong)
const A = buildModel(false);
const doutA = deform(A.nodes, A.elements, A.ni, A.ei);
let maxA = 0;
doutA.deformations.forEach((d) => { if (Math.abs(d[2]) > maxA) maxA = Math.abs(d[2]); });
const dA = maxA * 1000;
console.log(`Variante ORIGINAL (Iy=weak, Iz=strong):  δ = ${dA.toFixed(4)} mm`);

// Variante B: CORREGIDA (Iy=strong, Iz=weak)
const B = buildModel(true);
const doutB = deform(B.nodes, B.elements, B.ni, B.ei);
let maxB = 0;
doutB.deformations.forEach((d) => { if (Math.abs(d[2]) > maxB) maxB = Math.abs(d[2]); });
const dB = maxB * 1000;
console.log(`Variante CORREGIDA (Iy=strong, Iz=weak): δ = ${dB.toFixed(4)} mm`);

console.log("\n────────────────────────────────────────────────────────────");
console.log(" Comparacion:");
console.log("────────────────────────────────────────────────────────────");
console.log(`SAP2000:           ${(2.4950).toFixed(4)} mm`);
console.log(`Hekatan ORIGINAL:  ${dA.toFixed(4)} mm  diff vs SAP: ${(((dA - 2.4950) / 2.4950) * 100).toFixed(2)}%`);
console.log(`Hekatan CORREGIDA: ${dB.toFixed(4)} mm  diff vs SAP: ${(((dB - 2.4950) / 2.4950) * 100).toFixed(2)}%`);
