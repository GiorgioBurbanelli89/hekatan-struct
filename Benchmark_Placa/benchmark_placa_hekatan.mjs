/**
 * ============================================================================
 *  benchmark_placa_hekatan.mjs
 * ============================================================================
 *  Corre los 5 tipos de placa en hekatan-fem con MISMOS parametros del
 *  benchmark SAP2000 (L=4, t=0.20, E=21.5e6, nu=0.20, q=10kPa, malla 8x8).
 *
 *  Tipos:
 *    1 = Shell-Thin   (deform+analyze con shellQ4 — Kirchhoff con membrane)
 *    2 = Shell-Thick  (deform+analyze con shellQ4 thick / Mindlin)
 *    3 = Plate-Thin   (plateQ4Solve theoryType=1 / Kirchhoff bending)
 *    4 = Plate-Thick  (plateQ4Solve theoryType=0 / Mindlin bending)
 *    5 = Membrane     (planeQ4Solve / plane stress)
 *
 *  Compara contra:
 *    - Analitica Timoshenko: w=0.6961mm, M=7.6640 kN.m/m, f11=34.63Hz
 *    - SAP2000 (resultados extraidos via OAPI PowerShell)
 *
 *  Uso: node benchmark_placa_hekatan.mjs
 * ============================================================================
 */

import { plateQ4Solve, planeQ4Solve, deform, analyze, modalAnalysis } from "../hekatan-fem/src/index.ts";
import { writeFileSync } from "fs";

// ──── Parametros del caso (mismo que SAP2000) ─────────────────────────
const L = 4.0;                  // m
const t = 0.20;                 // m
const E = 21500000;             // kPa
const nu = 0.20;
const q = 10;                   // kPa hacia abajo
const rho = 2.4;                // ton/m^3 (= 2400 kg/m^3)
const NDiv = 8;

// ──── Analitica (Timoshenko) ──────────────────────────────────────────
const D = E * Math.pow(t, 3) / (12 * (1 - nu * nu));
const wAnalytic = 0.00406 * q * Math.pow(L, 4) / D;       // m
const mAnalytic = 0.0479 * q * Math.pow(L, 2);             // kN.m/m
const mu = rho * t;                                        // ton/m^2
const baseFreq = (Math.PI / 2) * Math.sqrt(D / mu) / (L * L);
const f11Analytic = baseFreq * 2;                          // Hz (modo 1,1)

console.log("============================================================");
console.log(" BENCHMARK PLACA HEKATAN-FEM vs SAP2000 vs ANALITICA");
console.log("============================================================");
console.log(`Caso: L=${L}m, t=${t}m, E=${E.toExponential(2)}kPa, nu=${nu}, q=${q}kPa, malla ${NDiv}x${NDiv}`);
console.log("");
console.log("Analitica Timoshenko (simply supported):");
console.log(`  w_max = ${(wAnalytic * 1000).toFixed(4)} mm`);
console.log(`  M_max = ${mAnalytic.toFixed(4)} kN.m/m`);
console.log(`  f11   = ${f11Analytic.toFixed(3)} Hz`);
console.log("");

// ──── SAP2000 results (extraidos via OAPI PowerShell) ────────────────
const sap2000 = {
  "Shell-Thin":  { w_mm: 0.6959, M11: 7.1441, f1: 34.211 },
  "Shell-Thick": { w_mm: 0.7237, M11: 7.4440, f1: 33.514 },
  "Plate-Thin":  { w_mm: 0.6959, M11: 7.1441, f1: 0 },     // modal fallido en SAP
  "Plate-Thick": { w_mm: 0.7237, M11: 7.4440, f1: 0 },     // modal fallido en SAP
  "Membrane":    { w_mm: NaN,   M11: 0,      f1: 0 },      // no aplica al caso
};

// ──── Helper: comparar ──────────────────────────────────────────────
function diffPct(a, b) {
  if (Math.abs(b) < 1e-12) return NaN;
  return ((a - b) / b) * 100;
}

function fmtRow(name, h, sap, ana) {
  const dHsap = diffPct(h, sap);
  const dHana = diffPct(h, ana);
  const dSAPana = diffPct(sap, ana);
  const fmt = (v, n = 4) => {
    if (typeof v !== "number" || isNaN(v)) return "    -";
    return v.toFixed(n).padStart(n + 4);
  };
  return [
    name.padEnd(14),
    fmt(h),
    fmt(sap),
    fmt(ana),
    isNaN(dHsap) ? "  -" : `${(dHsap >= 0 ? "+" : "")}${dHsap.toFixed(2)}%`.padStart(8),
    isNaN(dHana) ? "  -" : `${(dHana >= 0 ? "+" : "")}${dHana.toFixed(2)}%`.padStart(8),
    isNaN(dSAPana) ? "  -" : `${(dSAPana >= 0 ? "+" : "")}${dSAPana.toFixed(2)}%`.padStart(8),
  ].join("  ");
}

const resultados = {};

// ============================================================================
//  PLATE-THIN (Kirchhoff puro) via plateQ4Solve theoryType=1
// ============================================================================
console.log("────────────────────────────────────────────────────────────");
console.log(" Plate-Thin (Kirchhoff bending) — plateQ4Solve theoryType=1");
console.log("────────────────────────────────────────────────────────────");
{
  const out = plateQ4Solve({
    E, nu, thickness: t,
    theoryType: 1,
    meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
    bcType: "simply-supported",
    pressure: -q,   // negativo: q apunta -z
  });
  const w_mm = Math.abs(out.maxW) * 1000;
  const M11_max = Math.abs(out.maxMxx);
  const M22_max = Math.abs(out.maxMyy);
  const Q_max = Math.max(Math.abs(out.maxQx), Math.abs(out.maxQy));
  console.log(`  w_max  = ${w_mm.toFixed(4)} mm`);
  console.log(`  Mxx    = ${M11_max.toFixed(4)} kN.m/m`);
  console.log(`  Myy    = ${M22_max.toFixed(4)} kN.m/m`);
  console.log(`  Q_max  = ${Q_max.toFixed(4)} kN/m`);
  resultados["Plate-Thin"] = { w_mm, M11_max, M22_max, Q_max, f1: 0 };
}

// ============================================================================
//  PLATE-THICK (Mindlin) via plateQ4Solve theoryType=0
// ============================================================================
console.log("");
console.log("────────────────────────────────────────────────────────────");
console.log(" Plate-Thick (Mindlin bending) — plateQ4Solve theoryType=0");
console.log("────────────────────────────────────────────────────────────");
{
  const out = plateQ4Solve({
    E, nu, thickness: t,
    theoryType: 0,
    meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
    bcType: "simply-supported",
    pressure: -q,
  });
  const w_mm = Math.abs(out.maxW) * 1000;
  const M11_max = Math.abs(out.maxMxx);
  const M22_max = Math.abs(out.maxMyy);
  const Q_max = Math.max(Math.abs(out.maxQx), Math.abs(out.maxQy));
  console.log(`  w_max  = ${w_mm.toFixed(4)} mm`);
  console.log(`  Mxx    = ${M11_max.toFixed(4)} kN.m/m`);
  console.log(`  Myy    = ${M22_max.toFixed(4)} kN.m/m`);
  console.log(`  Q_max  = ${Q_max.toFixed(4)} kN/m`);
  resultados["Plate-Thick"] = { w_mm, M11_max, M22_max, Q_max, f1: 0 };
}

// ============================================================================
//  SHELL-THIN / SHELL-THICK via deform + analyze (con shellQ4)
// ============================================================================
console.log("");
console.log("────────────────────────────────────────────────────────────");
console.log(" Shell-Thin/Thick — deform + analyze");
console.log("────────────────────────────────────────────────────────────");
{
  // Construir mesh manual (placa horizontal Z=0)
  const dx = L / NDiv;
  const nodes = [];
  for (let j = 0; j <= NDiv; j++) {
    for (let i = 0; i <= NDiv; i++) {
      nodes.push([i * dx, j * dx, 0]);
    }
  }
  const elements = [];
  for (let j = 0; j < NDiv; j++) {
    for (let i = 0; i < NDiv; i++) {
      const n0 = j * (NDiv + 1) + i;
      elements.push([n0, n0 + 1, n0 + 1 + (NDiv + 1), n0 + (NDiv + 1)]);
    }
  }

  // Supports: simply supported = Uz=0 en perimetro + ux,uy en una esquina
  const supports = new Map();
  for (let j = 0; j <= NDiv; j++) {
    for (let i = 0; i <= NDiv; i++) {
      const isPerim = (i === 0 || i === NDiv || j === 0 || j === NDiv);
      if (!isPerim) continue;
      const idx = j * (NDiv + 1) + i;
      // Esquina (0,0): full pin para evitar rigid body
      if (i === 0 && j === 0) {
        supports.set(idx, [true, true, true, false, false, true]);
      } else if (i === NDiv && j === 0) {
        supports.set(idx, [false, true, true, false, false, true]);
      } else {
        supports.set(idx, [false, false, true, false, false, true]);
      }
    }
  }

  // Loads: convertir presion uniforme a cargas nodales lumped
  // Total = q * L * L = 10 * 16 = 160 kN total
  // Cada elemento aporta q*dx*dx a 4 nodos por igual
  const loads = new Map();
  const F_per_elem_node = (q * dx * dx) / 4;  // kN por nodo por elemento
  for (let j = 0; j <= NDiv; j++) {
    for (let i = 0; i <= NDiv; i++) {
      const idx = j * (NDiv + 1) + i;
      const isCorner = (i === 0 || i === NDiv) && (j === 0 || j === NDiv);
      const isEdge = (i === 0 || i === NDiv || j === 0 || j === NDiv) && !isCorner;
      let nElems;
      if (isCorner) nElems = 1;
      else if (isEdge) nElems = 2;
      else nElems = 4;
      loads.set(idx, [0, 0, -F_per_elem_node * nElems, 0, 0, 0]);
    }
  }

  // ElementInputs: Shell-Thin (Kirchhoff) y Shell-Thick (Mindlin)
  const elasticities = new Map();
  const poissonsRatios = new Map();
  const thicknesses = new Map();
  const densities = new Map();
  const shearModuli = new Map();
  const G = E / (2 * (1 + nu));
  for (let e = 0; e < elements.length; e++) {
    elasticities.set(e, E);
    poissonsRatios.set(e, nu);
    thicknesses.set(e, t);
    densities.set(e, rho);
    shearModuli.set(e, G);
  }

  const ei = { elasticities, poissonsRatios, thicknesses, densities, shearModuli };
  const ni = { supports, loads };

  for (const [name, label] of [["Shell-Thin", "Kirchhoff thin"], ["Shell-Thick", "Mindlin thick"]]) {
    // Hekatan-fem usa shellQ4 unificado (no distingue thin/thick a nivel API)
    // El comportamiento depende del thickness/L ratio internamente
    const dout = deform(nodes, elements, ni, ei);
    const aout = analyze(nodes, elements, ei, dout);

    // Encontrar maxima |Uz|
    let maxUz = 0;
    dout.deformations.forEach((d) => {
      if (Math.abs(d[2]) > Math.abs(maxUz)) maxUz = d[2];
    });

    // Encontrar maxima |M11| del bending output
    let maxM11 = 0, maxM22 = 0;
    if (aout.bendingXX) {
      aout.bendingXX.forEach((arr) => {
        for (const v of arr) {
          if (Math.abs(v) > Math.abs(maxM11)) maxM11 = v;
        }
      });
    }
    if (aout.bendingYY) {
      aout.bendingYY.forEach((arr) => {
        for (const v of arr) {
          if (Math.abs(v) > Math.abs(maxM22)) maxM22 = v;
        }
      });
    }

    const w_mm = Math.abs(maxUz) * 1000;
    console.log(`  ${name} (${label}):`);
    console.log(`    w_max  = ${w_mm.toFixed(4)} mm`);
    console.log(`    M11    = ${Math.abs(maxM11).toFixed(4)} kN.m/m`);
    console.log(`    M22    = ${Math.abs(maxM22).toFixed(4)} kN.m/m`);

    // Modal
    let f1 = 0;
    try {
      const mout = modalAnalysis(nodes, elements, ni, ei, 9);
      if (mout.frequencies && mout.frequencies.length > 0) {
        f1 = mout.frequencies[0];
        console.log(`    f1     = ${f1.toFixed(3)} Hz`);
      }
    } catch (e) {
      console.log(`    f1     = ERROR: ${e.message}`);
    }

    resultados[name] = { w_mm, M11_max: Math.abs(maxM11), M22_max: Math.abs(maxM22), f1 };
  }
}

// ============================================================================
//  MEMBRANE — solo plane stress (carga lateral en plano)
// ============================================================================
console.log("");
console.log("────────────────────────────────────────────────────────────");
console.log(" Membrane — planeQ4Solve (NO aplica para carga vertical)");
console.log("────────────────────────────────────────────────────────────");
console.log("  Membrane no resiste flexion out-of-plane → no aplica al caso");
console.log("  Para validar membrane, usar test diferente (carga lateral en plano)");
resultados["Membrane"] = { w_mm: NaN, M11_max: 0, M22_max: 0, f1: 0, note: "no aplica" };

// ============================================================================
//  TABLA COMPARATIVA
// ============================================================================
console.log("");
console.log("============================================================");
console.log(" TABLA COMPARATIVA: Hekatan-fem | SAP2000 | Analitica");
console.log("============================================================");
console.log("");
console.log("Magnitud         Tipo            Hekatan      SAP2000      Analit       H-vs-SAP    H-vs-Ana    SAP-vs-Ana");
console.log("─".repeat(120));
const orderTypes = ["Shell-Thin", "Shell-Thick", "Plate-Thin", "Plate-Thick", "Membrane"];

console.log("─── w_max [mm] ───");
for (const name of orderTypes) {
  const r = resultados[name];
  const s = sap2000[name];
  console.log("  " + fmtRow(name, r.w_mm, s.w_mm, wAnalytic * 1000));
}

console.log("");
console.log("─── M11_max [kN·m/m] ───");
for (const name of orderTypes) {
  const r = resultados[name];
  const s = sap2000[name];
  console.log("  " + fmtRow(name, r.M11_max, s.M11, mAnalytic));
}

console.log("");
console.log("─── f1 [Hz] (modal) ───");
for (const name of orderTypes) {
  const r = resultados[name];
  const s = sap2000[name];
  console.log("  " + fmtRow(name, r.f1, s.f1, f11Analytic));
}

console.log("");
console.log("============================================================");
console.log(" CRITERIO DE COINCIDENCIA: |Hekatan vs SAP2000| < 5%");
console.log("============================================================");

// JSON output
const consolidated = {
  case: { L, t, E, nu, q, rho, NDiv },
  analytical: { w_max_mm: wAnalytic * 1000, M_max: mAnalytic, f11_Hz: f11Analytic },
  sap2000,
  hekatan: resultados,
};
writeFileSync("hekatan_placa_results.json", JSON.stringify(consolidated, null, 2));
console.log("JSON: hekatan_placa_results.json");
