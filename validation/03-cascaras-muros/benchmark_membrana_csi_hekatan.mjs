/**
 * Benchmark hekatan-fem `membrana-csi` con MISMOS parametros del SAP2000.
 * Replica exactamente el ejemplo del workspace.
 */
import { deform, analyze, modalAnalysis } from "../hekatan-fem/src/index.ts";

// Parametros (mismos que ejemplo workspace defaults + SAP test)
const Lx = 5.0, Ly = 4.0, t = 0.15;
const E = 25e6, nu = 0.20, q = 8.0;
const bViga = 0.30, hViga = 0.50;
const nx = 10, ny = 8;
const rho_c = 2.4;  // ton/m^3 (consistente con SAP)

const dx = Lx / nx, dy = Ly / ny;

// Construir mesh
const nodes = [];
for (let j = 0; j <= ny; j++)
  for (let i = 0; i <= nx; i++)
    nodes.push([i * dx, j * dy, 0]);

// Shell Q4 elements
const elements = [];
for (let j = 0; j < ny; j++)
  for (let i = 0; i < nx; i++) {
    const n0 = j * (nx + 1) + i;
    elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
  }
const shellCount = elements.length;

// 4 vigas perimetrales
const topBase = ny * (nx + 1);
for (let i = 0; i < nx; i++) elements.push([i, i + 1]);                                    // Sur
for (let i = 0; i < nx; i++) elements.push([topBase + i, topBase + i + 1]);                // Norte
for (let j = 0; j < ny; j++) elements.push([j * (nx + 1), (j + 1) * (nx + 1)]);            // Oeste
for (let j = 0; j < ny; j++) elements.push([j * (nx + 1) + nx, (j + 1) * (nx + 1) + nx]);  // Este

// 4 apoyos esquinas
const supports = new Map();
const corners = [0, nx, topBase, topBase + nx];
corners.forEach(c => supports.set(c, [true, true, true, false, false, false]));

// CSI Apportionment by area (q × A_trib por nodo)
const loads = new Map();
for (let j = 0; j <= ny; j++)
  for (let i = 0; i <= nx; i++) {
    const idx = j * (nx + 1) + i;
    const cornerNode = (i === 0 || i === nx) && (j === 0 || j === ny);
    const edgeNode = (i === 0 || i === nx || j === 0 || j === ny);
    const factor = cornerNode ? 0.25 : edgeNode ? 0.5 : 1.0;
    const Fz = -q * dx * dy * factor;
    loads.set(idx, [0, 0, Fz, 0, 0, 0]);
  }

// Element inputs
const G_c = E / (2 * (1 + nu));
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
  densities.set(i, rho_c);
}

const Av = bViga * hViga;
const Izv = bViga * Math.pow(hViga, 3) / 12;
const Iyv = hViga * Math.pow(bViga, 3) / 12;
const Jv = 0.28 * bViga * Math.pow(hViga, 3);
for (let i = shellCount; i < elements.length; i++) {
  elasticities.set(i, E);
  poissons.set(i, nu);
  Gm.set(i, G_c);
  areas.set(i, Av);
  Iz.set(i, Izv);
  Iy.set(i, Iyv);
  J.set(i, Jv);
  densities.set(i, rho_c);
}

const ei = {
  elasticities, poissonsRatios: poissons, shearModuli: Gm,
  areas, momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy, torsionalConstants: J,
  thicknesses, densities,
};
const ni = { supports, loads };

console.log("============================================================");
console.log(" BENCHMARK MEMBRANA CSI (losa+vigas+modal) - HEKATAN-FEM");
console.log("============================================================");
console.log(`Lx=${Lx} Ly=${Ly} t=${t} E=${E.toExponential(2)} q=${q} kN/m²  malla ${nx}x${ny}`);

// Static
const dout = deform(nodes, elements, ni, ei);
let maxUz = 0;
dout.deformations.forEach((d) => { if (Math.abs(d[2]) > Math.abs(maxUz)) maxUz = d[2]; });
const delta_max_mm = Math.abs(maxUz) * 1000;
console.log(`\nStatic: δ_max = ${delta_max_mm.toFixed(4)} mm`);

// Modal
const mout = modalAnalysis(nodes, elements, ni, ei, 12);
console.log(`\nModal: ${mout.frequencies.length} modos`);
const modes = [];
for (let i = 0; i < Math.min(6, mout.frequencies.length); i++) {
  const f = mout.frequencies[i];
  const T = f > 0 ? 1/f : 0;
  console.log(`  Mode ${i+1}: T=${T.toFixed(4)}s  f=${f.toFixed(3)} Hz`);
  modes.push({ mode: i+1, period_s: T, freq_Hz: f });
}

// Comparacion con SAP2000 (valores extraidos del run anterior)
const SAP = {
  delta_max_mm: 2.4950,
  modes: [
    { mode: 1, freq_Hz: 16.400 },
    { mode: 2, freq_Hz: 28.318 },
    { mode: 3, freq_Hz: 33.848 },
    { mode: 4, freq_Hz: 36.469 },
    { mode: 5, freq_Hz: 55.702 },
    { mode: 6, freq_Hz: 68.226 },
  ],
};

console.log("\n============================================================");
console.log(" COMPARACION HEKATAN vs SAP2000 (Shell-Thin)");
console.log("============================================================");

const dD = ((delta_max_mm - SAP.delta_max_mm) / SAP.delta_max_mm) * 100;
console.log(`δ_max:  Hekatan ${delta_max_mm.toFixed(4)}  SAP ${SAP.delta_max_mm.toFixed(4)}  diff ${dD.toFixed(2)}%  ${Math.abs(dD) < 5 ? '✅' : '⚠'}`);

console.log("\nModos:");
console.log("Mode    Hekatan[Hz]   SAP[Hz]    Diff");
console.log("─".repeat(50));
for (let i = 0; i < Math.min(6, modes.length, SAP.modes.length); i++) {
  const f_h = modes[i].freq_Hz;
  const f_s = SAP.modes[i].freq_Hz;
  const dF = ((f_h - f_s) / f_s) * 100;
  const status = Math.abs(dF) < 5 ? '✅' : Math.abs(dF) < 10 ? '⚠' : '❌';
  console.log(`${(i+1).toString().padEnd(7)} ${f_h.toFixed(3).padStart(8)}      ${f_s.toFixed(3).padStart(8)}    ${dF >= 0 ? '+' : ''}${dF.toFixed(2)}%  ${status}`);
}
