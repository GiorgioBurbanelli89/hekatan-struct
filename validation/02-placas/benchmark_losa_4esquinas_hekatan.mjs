/**
 * Test aislado: losa SIN vigas, 4 apoyos esquinas, hekatan-fem
 * Mismos parametros que el SAP equivalente (Shell-Thin)
 */
import { deform, modalAnalysis } from "../hekatan-fem/src/index.ts";

const Lx = 5.0, Ly = 4.0, t = 0.15;
const E = 25e6, nu = 0.20, q = 8.0;
const nx = 10, ny = 8;
const rho = 2.4;
const dx = Lx / nx, dy = Ly / ny;

// SAP results (extraidos del run anterior, Shell-Thin sin vigas)
const SAP = {
  delta_max_mm: 12.3652,
  modes: [
    { mode: 1, freq_Hz: 7.647 },
    { mode: 2, freq_Hz: 17.460 },
    { mode: 3, freq_Hz: 19.403 },
    { mode: 4, freq_Hz: 23.555 },
    { mode: 5, freq_Hz: 42.938 },
    { mode: 6, freq_Hz: 48.135 },
  ],
};

console.log("============================================================");
console.log(" BENCHMARK LOSA 4-ESQUINAS - HEKATAN-FEM");
console.log("============================================================");
console.log(`Lx=${Lx} Ly=${Ly} t=${t} E=${E.toExponential(2)} q=${q}  malla ${nx}x${ny}`);
console.log("Sin vigas, solo 4 apoyos esquinas (test aislado)");

// Build mesh
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

// 4 esquinas simply supported
const supports = new Map();
const corners = [0, nx, ny * (nx + 1), ny * (nx + 1) + nx];
corners.forEach(c => supports.set(c, [true, true, true, false, false, false]));

// Cargas nodales (apportionment by area)
const loads = new Map();
for (let j = 0; j <= ny; j++)
  for (let i = 0; i <= nx; i++) {
    const idx = j * (nx + 1) + i;
    const isCorner = (i === 0 || i === nx) && (j === 0 || j === ny);
    const isEdge = (i === 0 || i === nx || j === 0 || j === ny) && !isCorner;
    const factor = isCorner ? 0.25 : isEdge ? 0.5 : 1.0;
    const Fz = -q * dx * dy * factor;
    loads.set(idx, [0, 0, Fz, 0, 0, 0]);
  }

// Material props (sin frames)
const G = E / (2 * (1 + nu));
const ei = {
  elasticities: new Map(elements.map((_, i) => [i, E])),
  poissonsRatios: new Map(elements.map((_, i) => [i, nu])),
  thicknesses: new Map(elements.map((_, i) => [i, t])),
  densities: new Map(elements.map((_, i) => [i, rho])),
  shearModuli: new Map(elements.map((_, i) => [i, G])),
};
const ni = { supports, loads };

console.log(`\n${nodes.length} nodos, ${elements.length} shells (sin frames)`);

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
  modes.push({ mode: i + 1, freq_Hz: f });
}
modes.forEach(m => console.log(`  Mode ${m.mode}: f=${m.freq_Hz.toFixed(3)} Hz`));

// Comparacion
console.log("\n============================================================");
console.log(" COMPARACION HEKATAN vs SAP2000 (Shell-Thin SIN vigas)");
console.log("============================================================");
const dD = ((delta_max_mm - SAP.delta_max_mm) / SAP.delta_max_mm) * 100;
console.log(`δ_max:  Hekatan ${delta_max_mm.toFixed(4)}  SAP ${SAP.delta_max_mm.toFixed(4)}  diff ${dD.toFixed(2)}%  ${Math.abs(dD) < 5 ? '✅' : Math.abs(dD) < 15 ? '⚠' : '❌'}`);

console.log("\nModos:");
console.log("Mode    Hekatan[Hz]   SAP[Hz]    Diff");
console.log("─".repeat(50));
for (let i = 0; i < Math.min(6, modes.length, SAP.modes.length); i++) {
  const f_h = modes[i].freq_Hz;
  const f_s = SAP.modes[i].freq_Hz;
  const dF = ((f_h - f_s) / f_s) * 100;
  const status = Math.abs(dF) < 5 ? '✅' : Math.abs(dF) < 15 ? '⚠' : '❌';
  console.log(`${(i+1).toString().padEnd(7)} ${f_h.toFixed(3).padStart(8)}      ${f_s.toFixed(3).padStart(8)}    ${dF >= 0 ? '+' : ''}${dF.toFixed(2)}%  ${status}`);
}
