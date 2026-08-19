/**
 * benchmark_muro_cantilever_hekatan.mjs
 * Muro cantilever (XZ plane, base empotrada, F lateral en top)
 * Mismos params que SAP2000: W=4 H=4 t=0.20 E=21.5e6 nu=0.20 F=100kN, malla 8x8
 */
import { deform, analyze, planeQ4Solve } from "../hekatan-fem/src/index.ts";

// Params
const W = 4.0, H = 4.0, t = 0.20;
const E = 21500000;
const nu = 0.20;
const F = 100;
const NDiv = 8;
const dx = W / NDiv;
const dz = H / NDiv;
const rho = 2.4;

// ── Analitica ─────────────────────────────────────────────────────────
const I_sec = t * Math.pow(W, 3) / 12;
const A_sec = t * W;
const G = E / (2 * (1 + nu));
const delta_flex = F * Math.pow(H, 3) / (3 * E * I_sec);
const delta_shear = 1.2 * F * H / (G * A_sec);
const delta_total = delta_flex + delta_shear;

console.log("============================================================");
console.log(" BENCHMARK MURO CANTILEVER — HEKATAN-FEM vs SAP2000");
console.log("============================================================");
console.log(`Caso: W=${W}m H=${H}m t=${t}m E=${E.toExponential(2)}kPa nu=${nu} F=${F}kN`);
console.log(`Malla: ${NDiv}x${NDiv}, base empotrada, F lateral distribuido en top`);
console.log("");
console.log("Analitica (cantilever beam con shear):");
console.log(`  delta_flex  = ${(delta_flex*1000).toFixed(4)} mm`);
console.log(`  delta_shear = ${(delta_shear*1000).toFixed(4)} mm`);
console.log(`  delta_total = ${(delta_total*1000).toFixed(4)} mm`);
console.log("");

// SAP2000 results (extraidos via OAPI)
const SAP_DELTA_MM = 0.1528;

// ──── Test A: Hekatan-fem deform()+shellQ4 (membrane via plane stress) ──
console.log("───────────────────────────────────────────────────────────");
console.log(" Test A: Hekatan deform()+shellQ4 (Q4 con drilling Rz)");
console.log("───────────────────────────────────────────────────────────");

// Construir muro en plano XZ (Y=0)
const nodes = [];
for (let j = 0; j <= NDiv; j++) {
  for (let i = 0; i <= NDiv; i++) {
    nodes.push([i * dx, 0, j * dz]);
  }
}

const elements = [];
for (let j = 0; j < NDiv; j++) {
  for (let i = 0; i < NDiv; i++) {
    const n0 = j * (NDiv + 1) + i;
    elements.push([n0, n0 + 1, n0 + 1 + (NDiv + 1), n0 + (NDiv + 1)]);
  }
}

// Base empotrada (j=0)
const supports = new Map();
for (let i = 0; i <= NDiv; i++) {
  supports.set(i, [true, true, true, true, true, true]);
}

// Cargas en top (j=NDiv): F distribuido en X
const loads = new Map();
const F_per_node = F / NDiv;
const F_corner = F_per_node * 0.5;
const topBase = NDiv * (NDiv + 1);
for (let i = 0; i <= NDiv; i++) {
  const isCorner = (i === 0 || i === NDiv);
  const Fx = isCorner ? F_corner : F_per_node;
  loads.set(topBase + i, [Fx, 0, 0, 0, 0, 0]);
}

// Element inputs
const thicknesses = new Map();
const elasticities = new Map();
const poissonsRatios = new Map();
const densities = new Map();
const G_map = new Map();
elements.forEach((_, i) => {
  thicknesses.set(i, t);
  elasticities.set(i, E);
  poissonsRatios.set(i, nu);
  densities.set(i, rho);
  G_map.set(i, G);
});

const ei = { thicknesses, elasticities, poissonsRatios, densities, shearModuli: G_map };
const ni = { supports, loads };

const deformOut = deform(nodes, elements, ni, ei);
const analyzeOut = analyze(nodes, elements, ei, deformOut);

// Extraer delta_top en el centro del top (i=NDiv/2, j=NDiv)
const topMidIdx = topBase + Math.floor(NDiv / 2);
const u_fem_center = deformOut.deformations.get(topMidIdx)[0];
console.log(`  delta_top center  = ${(u_fem_center*1000).toFixed(4)} mm  (nodo ${topMidIdx})`);

// Max Ux en el top
let u_fem_max = 0;
for (let i = 0; i <= NDiv; i++) {
  const idx = topBase + i;
  const ux = deformOut.deformations.get(idx)[0];
  if (Math.abs(ux) > Math.abs(u_fem_max)) u_fem_max = ux;
}
console.log(`  delta_top max     = ${(u_fem_max*1000).toFixed(4)} mm`);

// Von Mises max
let vm_max = 0;
analyzeOut.vonMises?.forEach((arr) => {
  for (const v of arr) if (Math.abs(v) > vm_max) vm_max = Math.abs(v);
});
console.log(`  von Mises max     = ${vm_max.toFixed(2)} kN/m²`);

const u_hekatan_mm = u_fem_center * 1000;

// ──── Test B: planeQ4Solve (plane stress puro) ───────────────────────
console.log("");
console.log("───────────────────────────────────────────────────────────");
console.log(" Test B: Hekatan planeQ4Solve (plane stress puro)");
console.log("───────────────────────────────────────────────────────────");

try {
  // planeQ4Solve trabaja en 2D (XY). Mapeo: X→X, Z→Y para usarlo como muro
  const nodesPlane = [];
  for (let j = 0; j <= NDiv; j++) {
    for (let i = 0; i <= NDiv; i++) {
      nodesPlane.push([i * dx, j * dz]);
    }
  }
  const elementsPlane = [];
  for (let j = 0; j < NDiv; j++) {
    for (let i = 0; i < NDiv; i++) {
      const n0 = j * (NDiv + 1) + i;
      elementsPlane.push([n0, n0 + 1, n0 + 1 + (NDiv + 1), n0 + (NDiv + 1)]);
    }
  }

  // BCs en plane stress: 2 DOFs (Ux, Uy)
  const bcs = [];
  for (let i = 0; i <= NDiv; i++) {
    bcs.push({ node: i, dof: 0, value: 0 });
    bcs.push({ node: i, dof: 1, value: 0 });
  }

  // Cargas en top (j=NDiv): F en dof 0 (X)
  const pointLoads = [];
  const topBaseP = NDiv * (NDiv + 1);
  for (let i = 0; i <= NDiv; i++) {
    const isCorner = (i === 0 || i === NDiv);
    pointLoads.push({ node: topBaseP + i, dof: 0, value: isCorner ? F_corner : F_per_node });
  }

  const out = planeQ4Solve({
    E, nu, thickness: t,
    nodes: nodesPlane, elements: elementsPlane,
    bcs, pointLoads,
  });

  const u_plane_top = Math.abs(out.nodeResults[topBaseP + Math.floor(NDiv/2)].u);
  console.log(`  delta_top center  = ${(u_plane_top*1000).toFixed(4)} mm`);
  console.log(`  maxU              = ${(out.maxU*1000).toFixed(4)} mm`);
} catch (e) {
  console.log(`  planeQ4Solve ERROR: ${e.message}`);
}

// ──── Comparacion final ─────────────────────────────────────────────
console.log("");
console.log("============================================================");
console.log(" COMPARACION FINAL");
console.log("============================================================");
const diffSAP = ((u_hekatan_mm - SAP_DELTA_MM) / SAP_DELTA_MM) * 100;
const diffAna = ((u_hekatan_mm - delta_total*1000) / (delta_total*1000)) * 100;
const sapDiffAna = ((SAP_DELTA_MM - delta_total*1000) / (delta_total*1000)) * 100;
console.log(`                          delta_top [mm]    diff vs Analit`);
console.log(`Hekatan shell (mem+drill) ${u_hekatan_mm.toFixed(4).padStart(10)}      ${diffAna.toFixed(2).padStart(7)}%`);
console.log(`SAP2000 Membrane          ${SAP_DELTA_MM.toFixed(4).padStart(10)}      ${sapDiffAna.toFixed(2).padStart(7)}%`);
console.log(`Analitica (flex+shear)    ${(delta_total*1000).toFixed(4).padStart(10)}      ${" 0.00%".padStart(7)}`);
console.log("");
console.log(`Hekatan vs SAP2000:       ${diffSAP.toFixed(2)}%`);
console.log("");
console.log(`Criterio: |Hekatan vs SAP| < 5% = ${Math.abs(diffSAP) < 5 ? "✅ PASS" : "❌ FAIL"}`);
