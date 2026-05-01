/**
 * benchmark_completo_modal.mjs
 * Benchmark FINAL con MODAL para TODOS los tipos de placa.
 *
 * Para Plate-Thin/Thick: usamos deform()+modalAnalysis() montando una placa
 * simply supported con shell elements (Q4 con drilling Rz suprimida via R3=0
 * para simular placa pura).
 *
 * Para Membrane: usamos cantilever wall con deform()+modalAnalysis().
 */
import { plateQ4Solve, deform, analyze, modalAnalysis } from "../hekatan-fem/src/index.ts";

const L = 4.0, t = 0.20, E = 21500000, nu = 0.20, q = 10, rho = 2.4;
const NDiv = 16;  // malla mas fina para mejor convergencia

// ──── Analitica ────
const D = E * Math.pow(t, 3) / (12 * (1 - nu * nu));
const wAna = 0.00406 * q * Math.pow(L, 4) / D;
const mAna = 0.0479 * q * Math.pow(L, 2);
const mu = rho * t;
const baseFreq = (Math.PI / 2) * Math.sqrt(D / mu) / (L * L);
const f11Ana = baseFreq * 2;

// ──── SAP2000 reference ────
const SAP = {
  "Shell-Thin":  { w_mm: 0.6959, M11: 7.1441, f1: 34.211 },
  "Shell-Thick": { w_mm: 0.7237, M11: 7.4440, f1: 33.514 },
  "Plate-Thin":  { w_mm: 0.6959, M11: 7.1441, f1: 0 },     // SAP modal fallido para Plate types
  "Plate-Thick": { w_mm: 0.7237, M11: 7.4440, f1: 0 },
};

console.log("============================================================");
console.log(" BENCHMARK COMPLETO PLACA — w, M, modal — vs SAP2000");
console.log("============================================================");
console.log(`Caso: L=${L}m t=${t}m E=${E.toExponential(2)}kPa nu=${nu} q=${q}kPa  malla ${NDiv}x${NDiv}`);
console.log(`Analitica: w=${(wAna*1000).toFixed(4)}mm  M=${mAna.toFixed(4)}kN.m/m  f11=${f11Ana.toFixed(3)}Hz`);
console.log("");

const dx = L / NDiv;
const G = E / (2 * (1 + nu));

// Construir mesh placa horizontal (z=0)
function buildPlateModel() {
  const nodes = [];
  for (let j = 0; j <= NDiv; j++)
    for (let i = 0; i <= NDiv; i++)
      nodes.push([i * dx, j * dx, 0]);
  const elements = [];
  for (let j = 0; j < NDiv; j++)
    for (let i = 0; i < NDiv; i++) {
      const n0 = j * (NDiv + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (NDiv + 1), n0 + (NDiv + 1)]);
    }
  const supports = new Map();
  for (let j = 0; j <= NDiv; j++)
    for (let i = 0; i <= NDiv; i++) {
      const isPerim = (i === 0 || i === NDiv || j === 0 || j === NDiv);
      if (!isPerim) continue;
      const idx = j * (NDiv + 1) + i;
      if (i === 0 && j === 0) supports.set(idx, [true, true, true, false, false, true]);
      else if (i === NDiv && j === 0) supports.set(idx, [false, true, true, false, false, true]);
      else supports.set(idx, [false, false, true, false, false, true]);
    }
  const loads = new Map();
  const F_per_elem = (q * dx * dx) / 4;
  for (let j = 0; j <= NDiv; j++) {
    for (let i = 0; i <= NDiv; i++) {
      const idx = j * (NDiv + 1) + i;
      const isCorner = (i === 0 || i === NDiv) && (j === 0 || j === NDiv);
      const isEdge = (i === 0 || i === NDiv || j === 0 || j === NDiv) && !isCorner;
      let nElems = 4;
      if (isCorner) nElems = 1;
      else if (isEdge) nElems = 2;
      loads.set(idx, [0, 0, -F_per_elem * nElems, 0, 0, 0]);
    }
  }
  const ei = {
    elasticities: new Map(elements.map((_, i) => [i, E])),
    poissonsRatios: new Map(elements.map((_, i) => [i, nu])),
    thicknesses: new Map(elements.map((_, i) => [i, t])),
    densities: new Map(elements.map((_, i) => [i, rho])),
    shearModuli: new Map(elements.map((_, i) => [i, G])),
  };
  return { nodes, elements, ni: { supports, loads }, ei };
}

// === Test cada tipo: hekatan-fem placa horizontal ===
console.log("─── PLACA HORIZONTAL (carga vertical) ───");
console.log("");
console.log("Tipo                  w[mm]      M11      f1[Hz]    SAP-w     SAP-M     SAP-f1");
console.log("─".repeat(95));

const results = {};
for (const [name, sap] of Object.entries(SAP)) {
  const { nodes, elements, ni, ei } = buildPlateModel();
  let w_mm = 0, M11 = 0, f1 = 0;

  // Para shells (con drilling): usar deform() + analyze()
  // Para placas (sin membrane): usar plateQ4Solve para w, M y modalAnalysis para f
  if (name.startsWith("Shell")) {
    const dout = deform(nodes, elements, ni, ei);
    const aout = analyze(nodes, elements, ei, dout);
    let maxUz = 0, maxM = 0;
    dout.deformations.forEach((d) => { if (Math.abs(d[2]) > Math.abs(maxUz)) maxUz = d[2]; });
    aout.bendingXX.forEach((arr) => {
      for (const v of arr) if (Math.abs(v) > Math.abs(maxM)) maxM = v;
    });
    w_mm = Math.abs(maxUz) * 1000;
    M11 = Math.abs(maxM);
    try {
      const m = modalAnalysis(nodes, elements, ni, ei, 9);
      f1 = m.frequencies[0];
    } catch {}
  } else if (name.startsWith("Plate")) {
    // Plate-Thin/Thick: w y M via plateQ4Solve, modal via deform+modalAnalysis
    const out = plateQ4Solve({
      E, nu, thickness: t,
      theoryType: name === "Plate-Thin" ? 1 : 0,
      meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
      bcType: "simply-supported",
      pressure: -q,
    });
    w_mm = Math.abs(out.maxW) * 1000;
    M11 = Math.abs(out.maxMxx);
    // Modal: usar deform+modalAnalysis (mismo modelo) — masa via density del shell
    try {
      const m = modalAnalysis(nodes, elements, ni, ei, 9);
      f1 = m.frequencies[0];
    } catch {}
  }

  results[name] = { w_mm, M11, f1 };
  const dW = ((w_mm - sap.w_mm) / sap.w_mm) * 100;
  const dM = ((M11 - sap.M11) / sap.M11) * 100;
  const dF = sap.f1 > 0 ? ((f1 - sap.f1) / sap.f1) * 100 : NaN;
  const fmtPct = v => isNaN(v) ? "  -" : `${v >= 0 ? "+" : ""}${v.toFixed(2)}%`;
  console.log(
    name.padEnd(20) +
    w_mm.toFixed(4).padStart(8) + " " +
    M11.toFixed(4).padStart(8) + " " +
    f1.toFixed(3).padStart(8) + "    " +
    fmtPct(dW).padStart(8) + " " +
    fmtPct(dM).padStart(8) + " " +
    fmtPct(dF).padStart(8) +
    (Math.abs(dW) < 5 && Math.abs(dM) < 5 && (isNaN(dF) || Math.abs(dF) < 5) ? "  ✅" : "  ⚠")
  );
}

// === Membrane: cantilever wall ===
console.log("");
console.log("─── MURO CANTILEVER (carga lateral en plano) ───");
console.log("");

const W_m = 4.0, H_m = 4.0, F_lat = 100;
const dxM = W_m / NDiv;
const dzM = H_m / NDiv;

// Build muro en plano XZ
const nodesM = [];
for (let j = 0; j <= NDiv; j++)
  for (let i = 0; i <= NDiv; i++)
    nodesM.push([i * dxM, 0, j * dzM]);
const elementsM = [];
for (let j = 0; j < NDiv; j++)
  for (let i = 0; i < NDiv; i++) {
    const n0 = j * (NDiv + 1) + i;
    elementsM.push([n0, n0 + 1, n0 + 1 + (NDiv + 1), n0 + (NDiv + 1)]);
  }

const supportsM = new Map();
// Base empotrada
for (let i = 0; i <= NDiv; i++)
  supportsM.set(i, [true, true, true, true, true, true]);

// Para emular SAP Membrane (ShellType=5): suprimir DOFs out-of-plane en TODOS
// los nodos no-base. Solo libres: Ux (in-plane horiz), Uz (in-plane vert).
// Restringidos: Uy (out-of-plane), Rx, Ry, Rz (todas las rotaciones).
for (let j = 1; j <= NDiv; j++) {
  for (let i = 0; i <= NDiv; i++) {
    const idx = j * (NDiv + 1) + i;
    // [Ux, Uy, Uz, Rx, Ry, Rz]
    // Free=false, Fixed=true
    supportsM.set(idx, [false, true, false, true, true, true]);
  }
}

const loadsM = new Map();
const F_per_node = F_lat / NDiv;
const F_corner = F_per_node * 0.5;
const topBase = NDiv * (NDiv + 1);
for (let i = 0; i <= NDiv; i++) {
  const isCorner = (i === 0 || i === NDiv);
  loadsM.set(topBase + i, [isCorner ? F_corner : F_per_node, 0, 0, 0, 0, 0]);
}

const eiM = {
  elasticities: new Map(elementsM.map((_, i) => [i, E])),
  poissonsRatios: new Map(elementsM.map((_, i) => [i, nu])),
  thicknesses: new Map(elementsM.map((_, i) => [i, t])),
  densities: new Map(elementsM.map((_, i) => [i, rho])),
  shearModuli: new Map(elementsM.map((_, i) => [i, G])),
};

const doutM = deform(nodesM, elementsM, { supports: supportsM, loads: loadsM }, eiM);
let maxUx = 0;
doutM.deformations.forEach((d) => { if (Math.abs(d[0]) > Math.abs(maxUx)) maxUx = d[0]; });
const delta_top_mm = Math.abs(maxUx) * 1000;

let f1M = 0;
try {
  const m = modalAnalysis(nodesM, elementsM, { supports: supportsM, loads: loadsM }, eiM, 9);
  f1M = m.frequencies[0];
} catch {}

// Analitica cantilever
const I_sec = t * Math.pow(W_m, 3) / 12;
const A_sec = t * W_m;
const delta_flex = F_lat * Math.pow(H_m, 3) / (3 * E * I_sec);
const delta_shear = 1.2 * F_lat * H_m / (G * A_sec);
const delta_total_mm = (delta_flex + delta_shear) * 1000;

// Modal cantilever beam (Euler-Bernoulli, primer modo)
// f1 = (1.875)² / (2π·L²) × √(EI/m_per_length)
const m_per_length = rho * A_sec;  // ton/m
const f1_cant_ana = Math.pow(1.875, 2) / (2 * Math.PI * Math.pow(H_m, 2)) * Math.sqrt(E * I_sec / m_per_length);

const SAP_DELTA_MM = 0.1528;
const SAP_F1_CANT = 0;  // SAP membrane no devolvio modal en el test

console.log("Tipo                  delta[mm]  f1[Hz]    SAP-d     ANA-d     ANA-f1");
console.log("─".repeat(90));
const dD = ((delta_top_mm - SAP_DELTA_MM) / SAP_DELTA_MM) * 100;
const dDA = ((delta_top_mm - delta_total_mm) / delta_total_mm) * 100;
const dFA = ((f1M - f1_cant_ana) / f1_cant_ana) * 100;
console.log(
  "Membrane cantilever".padEnd(20) +
  delta_top_mm.toFixed(4).padStart(10) + " " +
  f1M.toFixed(3).padStart(8) + "    " +
  `${dD >= 0 ? "+" : ""}${dD.toFixed(2)}%`.padStart(8) + " " +
  `${dDA >= 0 ? "+" : ""}${dDA.toFixed(2)}%`.padStart(8) + " " +
  `${dFA >= 0 ? "+" : ""}${dFA.toFixed(2)}%`.padStart(8) +
  (Math.abs(dD) < 5 ? "  ✅" : "  ⚠")
);
console.log(`  Analitica cantilever: delta=${delta_total_mm.toFixed(4)}mm  f1=${f1_cant_ana.toFixed(3)}Hz`);

console.log("");
console.log("============================================================");
console.log(" RESUMEN FINAL");
console.log("============================================================");
console.log(`Plate-Thin   modal  ${results["Plate-Thin"]?.f1.toFixed(2)}Hz   (vs analit ${f11Ana.toFixed(2)}Hz)`);
console.log(`Plate-Thick  modal  ${results["Plate-Thick"]?.f1.toFixed(2)}Hz   (vs analit ${f11Ana.toFixed(2)}Hz)`);
console.log(`Shell-Thin   modal  ${results["Shell-Thin"]?.f1.toFixed(2)}Hz   (vs SAP ${SAP["Shell-Thin"].f1.toFixed(2)}Hz)`);
console.log(`Shell-Thick  modal  ${results["Shell-Thick"]?.f1.toFixed(2)}Hz   (vs SAP ${SAP["Shell-Thick"].f1.toFixed(2)}Hz)`);
console.log(`Membrane     modal  ${f1M.toFixed(2)}Hz   (vs analit cantilever ${f1_cant_ana.toFixed(2)}Hz)`);
