#!/usr/bin/env node
/**
 * ============================================================================
 *  Hekatan Struct CLI — FEM Benchmark
 * ============================================================================
 *
 *  Corre los 6 casos FEM del set de validacion contra los solvers nativos
 *  de hekatan-fem (Eigen/WASM, plateQ4Solve / planeQ4Solve / layeredQ4Solve)
 *  y emite resultados en formato comparable contra MATLAB / SAP2000 / ETABS.
 *
 *  Casos:
 *    1. plate_thin   (Mindlin t/a=0.05, q=1, SS, malla 4x4)
 *    2. plate_thick  (Mindlin t/a=0.25, q=1, SS, malla 4x4)
 *    3. membrane     (Cantilever wall 5x3, P=100, malla 6x4)
 *    4. layered      ([0/90/90/0] iso x 0.05, q=1, SS, malla 4x4)
 *    5. shell_thin   (Cantilever plano 1x1x0.005, P=1, malla 4x4)
 *    6. shell_thick  (Cantilever plano 0.5x0.5x0.05, P=100, malla 3x3)
 *
 *  Usage:
 *    node cli_fem_benchmark.mjs                  # todos los casos
 *    node cli_fem_benchmark.mjs plate_thin       # un caso especifico
 *    node cli_fem_benchmark.mjs --json           # salida machine-readable
 *
 *  Salida tipo:
 *    plate_thin    w_max = 1.371347e-02   alpha = 0.00446   diff Navier  +9.95%
 *
 * ============================================================================
 */

// IMPORTANT: este CLI usa --experimental-strip-types de Node 22.6+ para importar
// directo del .ts. Tambien se puede correr precompilando hekatan-fem a dist/.
// Si tu Node no tiene strip-types, ejecuta antes:
//   cd hekatan-fem && npx tsc --outDir dist
// y cambia el import a "./hekatan-fem/dist/index.js"
import { plateQ4Solve, planeQ4Solve, layeredQ4Solve } from "./hekatan-fem/src/index.ts";

// ─── Valores de referencia HekatanLab Web ────────────────────────────────
const HEKATAN_LAB = {
  plate_thin:  { metric: "w_max", value: 1.371347e-2, params: { W: 1.0, t: 0.05, q: 1, mesh: "4x4" } },
  plate_thick: { metric: "w_max", value: 1.543172e-4, params: { W: 1.0, t: 0.25, q: 1, mesh: "4x4" } },
  membrane:    { metric: "u_max", value: 5.7417e-2,   params: { W: 5,   H: 3,   t: 0.2,   P: 100, mesh: "6x4" } },
  layered:     { metric: "w_max", value: null,        params: { W: 1.0, t: 0.2, q: 1, mesh: "4x4", layers: "[0/90/90/0]" } },
  shell_thin:  { metric: "u_max", value: 1.261058e-3, params: { W: 1.0, t: 0.005, P: 1, mesh: "4x4" } },
  shell_thick: { metric: "u_max", value: 1.2528e-2,   params: { W: 0.5, t: 0.05,  P: 100, mesh: "3x3" } },
};

// ─── Referencias analiticas ──────────────────────────────────────────────
function navierPlate(W, t, q, E, nu) {
  const D = (E * t ** 3) / (12 * (1 - nu * nu));
  return 0.00406 * q * W ** 4 / D;
}
function reissnerPlate(W, t, q, E, nu, kappa = 5 / 6) {
  const D = (E * t ** 3) / (12 * (1 - nu * nu));
  const G = E / (2 * (1 + nu));
  return 0.00406 * q * W ** 4 / D + 0.0737 * q * W * W / (kappa * G * t);
}
function vigaCantilever(P, H, E, t, W) {
  const I = (t * W ** 3) / 12;
  return P * H ** 3 / (3 * E * I);
}

// ─── Runners por caso ────────────────────────────────────────────────────

async function runPlateThin() {
  const W = 1.0, t = 0.05, E = 30000, nu = 0.2, q = 1.0, nx = 4, ny = 4;
  const out = plateQ4Solve({
    E, nu, thickness: t,
    theoryType: 0,                   // Mindlin
    meshLx: W, meshLy: W,
    meshNx: nx, meshNy: ny,
    bcType: "simply-supported",
    pressure: -q,                    // -q = hacia abajo
  });
  return {
    case: "plate_thin",
    metric: "w_max",
    value: Math.abs(out.maxW),
    refTheoretical: navierPlate(W, t, q, E, nu),
    refTheoreticalName: "Navier",
  };
}

async function runPlateThick() {
  const W = 1.0, t = 0.25, E = 30000, nu = 0.2, q = 1.0, nx = 4, ny = 4;
  const out = plateQ4Solve({
    E, nu, thickness: t,
    theoryType: 0,
    meshLx: W, meshLy: W,
    meshNx: nx, meshNy: ny,
    bcType: "simply-supported",
    pressure: -q,
  });
  return {
    case: "plate_thick",
    metric: "w_max",
    value: Math.abs(out.maxW),
    refTheoretical: reissnerPlate(W, t, q, E, nu),
    refTheoreticalName: "Reissner",
  };
}

async function runMembrane() {
  // Muro cantilever 5x3, empotrado en base, P=100 lateral en top
  const W = 5, H = 3, t = 0.2, E = 25000, nu = 0.2, P = 100, nx = 6, ny = 4;
  const dx = W / nx, dy = H / ny;

  // Mesh manual para tener control de los nodos (base empotrada, top cargado)
  const nodes = [];
  const njx = nx + 1, njy = ny + 1;
  for (let j = 0; j < njy; j++)
    for (let i = 0; i < njx; i++)
      nodes.push([i * dx, j * dy]);

  const elements = [];
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      const bl = j * njx + i;
      elements.push([bl, bl + 1, bl + njx + 1, bl + njx]);
    }
  }

  // BCs: base (y=0) totalmente empotrada
  const bcs = [];
  for (let i = 0; i < njx; i++) {
    bcs.push({ node: i, dof: 0, value: 0 });
    bcs.push({ node: i, dof: 1, value: 0 });
  }

  // Carga: P/(nx+1) en cada nodo del top (Fx)
  const Ppn = P / njx;
  const pointLoads = [];
  for (let i = 0; i < njx; i++) {
    const topNode = ny * njx + i;
    pointLoads.push({ node: topNode, fx: Ppn, fy: 0 });
  }

  const out = planeQ4Solve({ E, nu, thickness: t, nodes, elements, bcs, pointLoads });

  return {
    case: "membrane",
    metric: "u_max",
    value: out.maxUx,
    refTheoretical: vigaCantilever(P, H, E, t, W),
    refTheoreticalName: "Viga Euler-B",
  };
}

async function runLayered() {
  // [0/90/90/0] iso, 4 capas x 0.05 m, E=30000, nu=0.2, q=1, SS, malla 4x4
  const W = 1.0, q = 1.0, nx = 4, ny = 4;
  const E = 30000, nu = 0.2, tLayer = 0.05;
  const angles = [0, 90, 90, 0];
  const layers = angles.map(a => ({
    E, nu, thickness: tLayer, angle: (a * Math.PI) / 180,
  }));

  const out = layeredQ4Solve({
    layers,
    meshLx: W, meshLy: W,
    meshNx: nx, meshNy: ny,
    bcType: "simply-supported",
    pressure: -q,
  });

  return {
    case: "layered",
    metric: "w_max",
    value: Math.abs(out.maxW),
    refTheoretical: navierPlate(W, 4 * tLayer, q, E, nu),  // iso equivalente
    refTheoreticalName: "Navier iso",
  };
}

async function runShellThin() {
  // Cantilever shell delgado, carga lateral in-plane (membrane domina)
  const W = 1.0, H = 1.0, t = 0.005, E = 200000, nu = 0.3, P = 1.0, nx = 4, ny = 4;
  const dx = W / nx, dy = H / ny;

  const nodes = [];
  const njx = nx + 1, njy = ny + 1;
  for (let j = 0; j < njy; j++)
    for (let i = 0; i < njx; i++)
      nodes.push([i * dx, j * dy]);

  const elements = [];
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      const bl = j * njx + i;
      elements.push([bl, bl + 1, bl + njx + 1, bl + njx]);
    }
  }

  // BC empotramiento en x=0
  const bcs = [];
  for (let j = 0; j < njy; j++) {
    const n = j * njx;
    bcs.push({ node: n, dof: 0, value: 0 });
    bcs.push({ node: n, dof: 1, value: 0 });
  }
  // Carga P en x=W, distribuida en (ny+1) nodos
  const Ppn = P / njy;
  const pointLoads = [];
  for (let j = 0; j < njy; j++) {
    const rightNode = j * njx + nx;
    pointLoads.push({ node: rightNode, fx: Ppn, fy: 0 });
  }

  const out = planeQ4Solve({ E, nu, thickness: t, nodes, elements, bcs, pointLoads });

  // Ref: membrana axial P*L/(E*A)
  const refAxial = (P * W) / (E * H * t);
  return {
    case: "shell_thin",
    metric: "u_max",
    value: out.maxUx,
    refTheoretical: refAxial,
    refTheoreticalName: "Membrana axial",
  };
}

async function runShellThick() {
  // Cantilever shell grueso (mismo patron que shell_thin, parametros distintos)
  const W = 0.5, H = 0.5, t = 0.05, E = 200000, nu = 0.3, P = 100, nx = 3, ny = 3;
  const dx = W / nx, dy = H / ny;

  const nodes = [];
  const njx = nx + 1, njy = ny + 1;
  for (let j = 0; j < njy; j++)
    for (let i = 0; i < njx; i++)
      nodes.push([i * dx, j * dy]);

  const elements = [];
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      const bl = j * njx + i;
      elements.push([bl, bl + 1, bl + njx + 1, bl + njx]);
    }
  }

  const bcs = [];
  for (let j = 0; j < njy; j++) {
    const n = j * njx;
    bcs.push({ node: n, dof: 0, value: 0 });
    bcs.push({ node: n, dof: 1, value: 0 });
  }
  const Ppn = P / njy;
  const pointLoads = [];
  for (let j = 0; j < njy; j++) {
    const rightNode = j * njx + nx;
    pointLoads.push({ node: rightNode, fx: Ppn, fy: 0 });
  }

  const out = planeQ4Solve({ E, nu, thickness: t, nodes, elements, bcs, pointLoads });

  const refAxial = (P * W) / (E * H * t);
  return {
    case: "shell_thick",
    metric: "u_max",
    value: out.maxUx,
    refTheoretical: refAxial,
    refTheoreticalName: "Membrana axial",
  };
}

const RUNNERS = {
  plate_thin:  runPlateThin,
  plate_thick: runPlateThick,
  membrane:    runMembrane,
  layered:     runLayered,
  shell_thin:  runShellThin,
  shell_thick: runShellThick,
};

// ─── Formato de salida ───────────────────────────────────────────────────

function fmt(num, sig = 6) {
  if (num === null || num === undefined) return "n/a";
  return num.toExponential(sig);
}

function pct(ratio) {
  return ((ratio - 1) * 100).toFixed(2) + "%";
}

function printTable(results) {
  console.log("");
  console.log("═".repeat(78));
  console.log("  Hekatan Struct CLI — FEM Benchmark");
  console.log("═".repeat(78));
  console.log(
    "  Caso          " +
    "metric    Hekatan-Struct    HekatanLab Web    Ref. Teorica       Δ_lab"
  );
  console.log("  " + "─".repeat(74));

  for (const r of results) {
    const lab = HEKATAN_LAB[r.case].value;
    const labDiff = lab !== null ? pct(r.value / lab) : "n/a";
    const refDiff = r.refTheoretical ? pct(r.value / r.refTheoretical) : "n/a";
    console.log(
      `  ${r.case.padEnd(13)} ${r.metric.padEnd(8)} ` +
      `${fmt(r.value).padEnd(17)} ` +
      `${fmt(lab).padEnd(17)} ` +
      `${fmt(r.refTheoretical).padEnd(15)} ${labDiff.padStart(8)}`
    );
  }

  console.log("  " + "─".repeat(74));
  console.log("");
  console.log("  Referencias teoricas: Navier (plate), Reissner (plate thick),");
  console.log("  Viga Euler-Bernoulli (membrane), Membrana axial (shells in-plane).");
  console.log("");
}

function printJson(results) {
  const payload = {
    timestamp: new Date().toISOString(),
    cases: results.map(r => {
      const lab = HEKATAN_LAB[r.case].value;
      return {
        case: r.case,
        metric: r.metric,
        hekatanStructValue: r.value,
        hekatanLabValue: lab,
        refTheoreticalValue: r.refTheoretical,
        refTheoreticalName: r.refTheoreticalName,
        diffVsHekatanLab: lab !== null ? r.value / lab - 1 : null,
        diffVsTheoretical: r.refTheoretical ? r.value / r.refTheoretical - 1 : null,
      };
    }),
  };
  console.log(JSON.stringify(payload, null, 2));
}

// ─── Main ────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const wantsJson = args.includes("--json");
  const caseFilter = args.filter(a => !a.startsWith("--"));

  const casesToRun = caseFilter.length > 0
    ? caseFilter.filter(c => RUNNERS[c])
    : Object.keys(RUNNERS);

  if (casesToRun.length === 0) {
    console.error("Casos validos:", Object.keys(RUNNERS).join(", "));
    process.exit(1);
  }

  const results = [];
  for (const caseName of casesToRun) {
    try {
      const r = await RUNNERS[caseName]();
      results.push(r);
    } catch (err) {
      console.error(`Error en ${caseName}: ${err.message}`);
      results.push({ case: caseName, metric: "error", value: null, refTheoretical: null });
    }
  }

  if (wantsJson) printJson(results);
  else printTable(results);
}

main().catch(err => {
  console.error("Fatal:", err);
  process.exit(1);
});
