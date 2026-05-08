#!/usr/bin/env node
/**
 * run_matrix_cft.mjs — Benchmark CFT (Concrete-Filled Tube) columns + I-beams.
 *
 * Modelo:
 *   Bay 4×4 m, story h=4 m, 4 columnas CFT en esquina, 4 vigas perimetrales
 *   W360x60 acero. Pin en base (z=0).
 *
 * CFT (Concrete-Filled Tube) — modelado como sección TRANSFORMADA referida a
 * acero (single-material elastic frame element):
 *   Steel HSS 250×250×10 mm + concreto fill 230×230 mm
 *   n = E_s/E_c = 200/25 = 8
 *   A_eff_steel = A_s + A_c/n        ≡ rigidez axial total / E_s
 *   I_eff_steel = I_s + I_c/n        ≡ rigidez flexión total / E_s
 *   J_eff       = J_s (sólo acero da torsión efectiva → conservador)
 *   E = E_s = 200 GPa (sección "como si fuera puramente acero")
 *
 * Setups:
 *   cftNoSlab     = sólo CFT + vigas, carga puntual 20 kN en midspan de cada viga
 *                   (total Q = 80 kN, equivalente al q*A del bench losa)
 *   cftDeckSlab   = CFT + vigas + losa deck shellMITC4 (t=0.10 m, q=5 kN/m²)
 *
 * Uso:
 *   node run_matrix_cft.mjs                     → corre las 2 celdas
 *   node run_matrix_cft.mjs <setup>             → corre una celda con detalle
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const wasmPath = join(__dirname, "..", "..", "hekatan-fem", "src", "cpp", "built", "deform.wasm");
const jsPath   = join(__dirname, "..", "..", "hekatan-fem", "src", "cpp", "built", "deform.js");
const createModule = (await import(pathToFileURL(jsPath).href)).default;
const mod = await createModule({ wasmBinary: readFileSync(wasmPath) });

function allocate(arr, Ctor, heap) {
  const buf = new Ctor(arr);
  const ptr = mod._malloc(buf.length * buf.BYTES_PER_ELEMENT);
  heap.set(buf, ptr / buf.BYTES_PER_ELEMENT);
  return ptr;
}
function processInput(map) {
  const keys = map ? [...map.keys()] : [];
  const vals = map ? [...map.values()] : [];
  return {
    keysPtr: allocate(keys, Uint32Array, mod.HEAPU32),
    valuesPtr: allocate(vals, Float64Array, mod.HEAPF64),
    size: keys.length,
  };
}

// ────────────────────────────────────────────────────────────────────────────
// CONSTANTES
// ────────────────────────────────────────────────────────────────────────────
const Lx = 4, Ly = 4;
const slabZ = 4;        // story height
const t_slab = 0.10;
const q_unif = 5;       // kN/m² — sólo en deckSlab
const P_point = 20;     // kN — sólo en noSlab (4 puntos × 20 = 80 kN total)
// Mesh refinement: usable from CLI with MESH=NxN env var
const _meshN = parseInt(process.env.MESH || "4", 10);
const nx = _meshN, ny = _meshN;
const nNx = nx + 1, nNy = ny + 1;
const dx = Lx / nx, dy = Ly / ny;

// Concrete (slab)
const E_c = 25e6, nu_c = 0.20;       // kN/m²
const G_c = E_c / (2 * (1 + nu_c));

// Steel (beams + steel of CFT)
const E_s = 200e6, nu_s = 0.30;
const G_s = E_s / (2 * (1 + nu_s));

// Beam W360x60
const A_b = 7610e-6;
const Iy_b = 12.9e-5;
const Iz_b = 1.20e-5;
const J_b  = 0.31e-6;

// CFT — propiedades de SECCIÓN TRANSFORMADA. Soporta dos modos equivalentes:
//   "steel"    → A = A_s + A_c/n,    I = I_s + I_c/n,    E = E_s
//   "concrete" → A = n·A_s + A_c,    I = n·I_s + I_c,    E = E_c
// Ambas dan el mismo resultado físico: E_s·A_s + E_c·A_c (rigidez axial total).
const transformMode = (process.env.TRANSFORM_MODE || "steel").toLowerCase();

// Beam theory: Hekatan WASM usa Timoshenko por default con As = 5/6·A.
// Sistema de property modifiers (estilo ETABS):
//   shearAreasY/Z = 0 (no pasado)  → Timoshenko default 5/6·A
//   shearAreasY/Z = -1 (sentinel)  → Bernoulli puro (phi = 0)
//   shearAreasY/Z = valor explícito → Timoshenko con ese valor
const beamTheory = (process.env.BEAM_THEORY || "timoshenko").toLowerCase();
const AS_BERNOULLI_SENTINEL = -1;

const D_out = 0.250, t_HSS = 0.010;
const D_in  = D_out - 2 * t_HSS;
const A_steel_HSS = D_out*D_out - D_in*D_in;
const A_conc      = D_in*D_in;
const I_steel_HSS = (D_out**4 - D_in**4) / 12;
const I_conc      = D_in**4 / 12;
const J_steel_HSS = 2 * I_steel_HSS;
const n_modular   = E_s / E_c;

let A_cft, I_cft, J_cft, E_col;
if (transformMode === "concrete") {
  A_cft = n_modular * A_steel_HSS + A_conc;
  I_cft = n_modular * I_steel_HSS + I_conc;
  J_cft = n_modular * J_steel_HSS;
  E_col = E_c;
} else {
  A_cft = A_steel_HSS + A_conc / n_modular;
  I_cft = I_steel_HSS + I_conc / n_modular;
  J_cft = J_steel_HSS;
  E_col = E_s;
}
const G_col_use = E_col / 2.6;

console.log(`# CFT transformed-section (${transformMode}-equivalent):`);
console.log(`#   A_cft = ${A_cft.toExponential(4)} m²   I_cft = ${I_cft.toExponential(4)} m⁴   J_cft = ${J_cft.toExponential(4)} m⁴`);
console.log(`#   E_col = ${E_col.toExponential(4)} kN/m²   E·A = ${(E_col*A_cft).toFixed(0)}   E·I = ${(E_col*I_cft).toFixed(0)}`);
console.log(`# Beam theory: ${beamTheory}${beamTheory === "bernoulli" ? " (shearAreasY/Z = -1 sentinel → phi = 0)" : " (As = 5/6·A default Hekatan)"}`);

// ────────────────────────────────────────────────────────────────────────────
// MODEL BUILDER
// ────────────────────────────────────────────────────────────────────────────
function buildModel(setup) {
  const hasSlab = setup === "cftDeckSlab";

  // Mantenemos la grid 5×5 para conservar IDs estables, pero los nodos
  // interiores (sin shell que los conecte) los pinneamos completamente
  // cuando no hay slab — evita conditioning issues / posibles modos rígidos.
  const nodes = [];
  for (let j = 0; j <= ny; j++)
    for (let i = 0; i <= nx; i++)
      nodes.push([i * dx, j * dy, slabZ]);

  // 4 base nodes for CFT columns
  const baseStart = nodes.length;
  nodes.push([0, 0, 0]);
  nodes.push([nx*dx, 0, 0]);
  nodes.push([0, ny*dy, 0]);
  nodes.push([nx*dx, ny*dy, 0]);

  // Shell elements (sólo si hasSlab)
  const shells = [];
  if (hasSlab) {
    for (let j = 0; j < ny; j++)
      for (let i = 0; i < nx; i++) {
        const n_bl = j * nNx + i;
        shells.push([n_bl, n_bl + 1, (j + 1) * nNx + i + 1, (j + 1) * nNx + i]);
      }
  }

  // Frames: 4 vigas perimetrales + 4 columnas CFT
  // Vigas perimetrales: cada borde lleva nx=4 elementos
  const frames = [];
  // bottom edge (y=0): nodos 0..nx
  for (let i = 0; i < nx; i++) frames.push([i, i + 1]);
  // top edge (y=Ly)
  const baseTop = ny * nNx;
  for (let i = 0; i < nx; i++) frames.push([baseTop + i, baseTop + i + 1]);
  // left edge (x=0)
  for (let j = 0; j < ny; j++) frames.push([j * nNx, (j + 1) * nNx]);
  // right edge (x=Lx)
  for (let j = 0; j < ny; j++) frames.push([j * nNx + nx, (j + 1) * nNx + nx]);

  const nBeamFrames = frames.length;          // 16

  // 4 columnas CFT (base → slab corner)
  const cornerSlab = [0, nx, ny * nNx, ny * nNx + nx];
  for (let k = 0; k < 4; k++) frames.push([baseStart + k, cornerSlab[k]]);

  const elements = [...shells, ...frames];

  // Soportes: EMPOTRAMIENTO COMPLETO en 4 nodos base (UX UY UZ RX RY RZ)
  // + (si no hay slab) fijar nodos interiores huérfanos.
  const supports = new Map();
  for (let k = 0; k < 4; k++) {
    // FIXED: todas las traslaciones y rotaciones restringidas
    supports.set(baseStart + k, [true, true, true, true, true, true]);
  }
  if (!hasSlab) {
    for (let j = 1; j < ny; j++) {
      for (let i = 1; i < nx; i++) {
        const n = j * nNx + i;
        supports.set(n, [true, true, true, true, true, true]);
      }
    }
  }

  // Cargas
  const loads = new Map();
  if (hasSlab) {
    // q distribuido nodalmente q*A/4 en cada esquina de cada shell
    for (const sh of shells) {
      const A = dx * dy;
      const fz = -q_unif * A / 4;
      for (const n of sh) {
        const cur = loads.get(n) || [0, 0, 0, 0, 0, 0];
        cur[2] += fz;
        loads.set(n, cur);
      }
    }
  } else {
    // 4 puntos de 20 kN en mid-span de cada viga perimetral
    // bottom edge midspan: nodo (nx/2, 0) = índice nx/2
    // top edge midspan: nodo (nx/2, ny) = índice ny*nNx + nx/2
    // left edge midspan: nodo (0, ny/2) = índice (ny/2)*nNx
    // right edge midspan: nodo (nx, ny/2) = índice (ny/2)*nNx + nx
    const midNodes = [
      Math.floor(nx/2),
      ny * nNx + Math.floor(nx/2),
      Math.floor(ny/2) * nNx,
      Math.floor(ny/2) * nNx + nx,
    ];
    for (const n of midNodes) {
      loads.set(n, [0, 0, -P_point, 0, 0, 0]);
    }
  }

  // Inputs por elemento
  const elasticities = new Map();
  const poissons = new Map();
  const thicknesses = new Map();
  const shearModuli = new Map();
  const areas = new Map();
  const Iz_map = new Map();
  const Iy_map = new Map();
  const J_map = new Map();

  // shells (concreto)
  for (let e = 0; e < shells.length; e++) {
    elasticities.set(e, E_c);
    poissons.set(e, nu_c);
    thicknesses.set(e, t_slab);
    shearModuli.set(e, G_c);
  }
  // Maps adicionales para shear areas (Timoshenko vs Bernoulli)
  const shearAreasY = new Map();
  const shearAreasZ = new Map();
  // beams (acero W360x60). Para Bernoulli: As = -1 sentinel
  for (let f = 0; f < nBeamFrames; f++) {
    const e = shells.length + f;
    elasticities.set(e, E_s);
    shearModuli.set(e, G_s);
    areas.set(e, A_b);
    Iz_map.set(e, Iz_b);
    Iy_map.set(e, Iy_b);
    J_map.set(e, J_b);
    if (beamTheory === "bernoulli") {
      shearAreasY.set(e, AS_BERNOULLI_SENTINEL);
      shearAreasZ.set(e, AS_BERNOULLI_SENTINEL);
    }
  }
  // columnas CFT (transformed: ver transformMode arriba)
  for (let f = nBeamFrames; f < frames.length; f++) {
    const e = shells.length + f;
    elasticities.set(e, E_col);
    shearModuli.set(e, G_col_use);
    areas.set(e, A_cft);
    Iz_map.set(e, I_cft);
    Iy_map.set(e, I_cft);
    J_map.set(e, J_cft);
    if (beamTheory === "bernoulli") {
      shearAreasY.set(e, AS_BERNOULLI_SENTINEL);
      shearAreasZ.set(e, AS_BERNOULLI_SENTINEL);
    }
  }

  return {
    setup, nodes, elements, shells, frames,
    nBeamFrames, baseStart,
    supports, loads,
    elasticities, poissons, thicknesses, shearModuli,
    areas, Iz_map, Iy_map, J_map,
    shearAreasY, shearAreasZ,
  };
}

// ────────────────────────────────────────────────────────────────────────────
// SOLVER CALL
// ────────────────────────────────────────────────────────────────────────────
function solve(model) {
  const { nodes, elements, supports, loads,
    elasticities, poissons, thicknesses, shearModuli,
    areas, Iz_map, Iy_map, J_map, shearAreasY, shearAreasZ } = model;

  const gc = [];
  const nodesPtr = allocate(nodes.flat(), Float64Array, mod.HEAPF64); gc.push(nodesPtr);
  const elIdx = elements.flat();
  const elPtr = allocate(elIdx, Uint32Array, mod.HEAPU32); gc.push(elPtr);
  const elSizes = elements.map(e => e.length);
  const elSizesPtr = allocate(elSizes, Uint32Array, mod.HEAPU32); gc.push(elSizesPtr);

  const supKeys = [...supports.keys()];
  const supVals = [...supports.values()].flat().map(b => b ? 1 : 0);
  const supKp = allocate(supKeys, Uint32Array, mod.HEAPU32); gc.push(supKp);
  const supVp = allocate(supVals, Uint8Array, mod.HEAPU8); gc.push(supVp);

  const loadKeys = [...loads.keys()];
  const loadVals = [...loads.values()].flat();
  const lkp = allocate(loadKeys, Uint32Array, mod.HEAPU32); gc.push(lkp);
  const lvp = allocate(loadVals, Float64Array, mod.HEAPF64); gc.push(lvp);

  const Eo  = processInput(elasticities); gc.push(Eo.keysPtr,  Eo.valuesPtr);
  const Ao  = processInput(areas);        gc.push(Ao.keysPtr,  Ao.valuesPtr);
  const Iyo = processInput(Iy_map);       gc.push(Iyo.keysPtr, Iyo.valuesPtr);
  const Izo = processInput(Iz_map);       gc.push(Izo.keysPtr, Izo.valuesPtr);
  const Go  = processInput(shearModuli);  gc.push(Go.keysPtr,  Go.valuesPtr);
  const Jo  = processInput(J_map);        gc.push(Jo.keysPtr,  Jo.valuesPtr);
  const To  = processInput(thicknesses);  gc.push(To.keysPtr,  To.valuesPtr);
  const NUo = processInput(poissons);     gc.push(NUo.keysPtr, NUo.valuesPtr);
  const EOo = processInput(new Map());    gc.push(EOo.keysPtr, EOo.valuesPtr);
  const ASYo = processInput(shearAreasY || new Map()); gc.push(ASYo.keysPtr, ASYo.valuesPtr);
  const ASZo = processInput(shearAreasZ || new Map()); gc.push(ASZo.keysPtr, ASZo.valuesPtr);

  const springsPtr = allocate([], Float64Array, mod.HEAPF64); gc.push(springsPtr);

  const dPo = mod._malloc(4); gc.push(dPo);
  const dSo = mod._malloc(4); gc.push(dSo);
  const rPo = mod._malloc(4); gc.push(rPo);
  const rSo = mod._malloc(4); gc.push(rSo);

  mod._deform(
    nodesPtr, nodes.length, elPtr, elIdx.length, elSizesPtr, elements.length,
    supKp, supVp, supKeys.length, lkp, lvp, loadKeys.length,
    Eo.keysPtr, Eo.valuesPtr, Eo.size, Ao.keysPtr, Ao.valuesPtr, Ao.size,
    Izo.keysPtr, Izo.valuesPtr, Izo.size, Iyo.keysPtr, Iyo.valuesPtr, Iyo.size,
    Go.keysPtr, Go.valuesPtr, Go.size, Jo.keysPtr, Jo.valuesPtr, Jo.size,
    To.keysPtr, To.valuesPtr, To.size, NUo.keysPtr, NUo.valuesPtr, NUo.size,
    EOo.keysPtr, EOo.valuesPtr, EOo.size,
    ASYo.keysPtr, ASYo.valuesPtr, ASYo.size,
    ASZo.keysPtr, ASZo.valuesPtr, ASZo.size,
    springsPtr, 0, dPo, dSo, rPo, rSo
  );

  const dPtr = mod.HEAPU32[dPo / 4], dSize = mod.HEAPU32[dSo / 4];
  const rPtr = mod.HEAPU32[rPo / 4], rSize = mod.HEAPU32[rSo / 4];

  const deformations = new Map();
  if (dSize > 0 && dPtr) {
    const flat = new Float64Array(mod.HEAPF64.buffer, dPtr, dSize);
    for (let i = 0; i < dSize; i += 7) deformations.set(flat[i], [...flat.slice(i + 1, i + 7)]);
  }
  const reactions = new Map();
  if (rSize > 0 && rPtr) {
    const flat = new Float64Array(mod.HEAPF64.buffer, rPtr, rSize);
    for (let i = 0; i < rSize; i += 7) reactions.set(flat[i], [...flat.slice(i + 1, i + 7)]);
  }

  gc.forEach(p => mod._free(p));
  return { deformations, reactions };
}

// ────────────────────────────────────────────────────────────────────────────
// KPI
// ────────────────────────────────────────────────────────────────────────────
function extractKPI(model, deformations, reactions) {
  // KPI:
  //  cftDeckSlab → w en centro de losa (nodo (nx/2, ny/2))
  //  cftNoSlab   → w en midspan de viga bottom (nodo (nx/2, 0))
  const i_c = nx / 2, j_c = ny / 2;
  const n_kpi = (model.setup === "cftDeckSlab")
    ? (j_c * nNx + i_c)
    : Math.floor(nx / 2);
  const u = deformations.get(n_kpi) || [0,0,0,0,0,0];
  let sumRz = 0;
  for (let k = 0; k < 4; k++) {
    const r = reactions.get(model.baseStart + k);
    if (r) sumRz += r[2];
  }
  return {
    kpi_node: n_kpi,
    kpi_label: model.setup === "cftDeckSlab" ? "w_centro" : "w_midspan_beam",
    w_kpi_mm: u[2] * 1000,
    sum_Rz_kN: sumRz,
  };
}

function runCell(setup) {
  const model = buildModel(setup);
  const { deformations, reactions } = solve(model);
  const k = extractKPI(model, deformations, reactions);
  return {
    setup,
    nodes: model.nodes.length,
    shells: model.shells.length,
    frames: model.frames.length,
    ...k,
  };
}

// ────────────────────────────────────────────────────────────────────────────
// MAIN
// ────────────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const SETUPS = ["cftNoSlab", "cftDeckSlab"];

if (args.length >= 1) {
  const r = runCell(args[0]);
  console.log(`=== Hekatan WASM (CFT bench): ${args[0]} ===`);
  console.log(`  nodes=${r.nodes}, shells=${r.shells}, frames=${r.frames}`);
  console.log(`  ${r.kpi_label} (nodo ${r.kpi_node}) = ${r.w_kpi_mm.toFixed(4)} mm`);
  console.log(`  Sum Rz   = ${r.sum_Rz_kN.toFixed(3)} kN`);
} else {
  console.log("=== Hekatan WASM (CFT bench): matriz 2 setups ===");
  console.log("");
  const rows = [];
  for (const s of SETUPS) rows.push(runCell(s));
  console.log("setup        | nodes | shells | frames | KPI label        | KPI [mm]   | Sum Rz [kN]");
  console.log("-------------|-------|--------|--------|------------------|------------|-----------");
  for (const r of rows) {
    console.log(
      `${r.setup.padEnd(12)} | ${String(r.nodes).padStart(5)} | ${String(r.shells).padStart(6)} | ${String(r.frames).padStart(6)} | ${r.kpi_label.padEnd(16)} | ${r.w_kpi_mm.toFixed(4).padStart(10)} | ${r.sum_Rz_kN.toFixed(3).padStart(9)}`
    );
  }
  const outPath = join(__dirname, "results_hekatan.json");
  writeFileSync(outPath, JSON.stringify(rows, null, 2));
  console.log("");
  console.log(`[OK] resultados: ${outPath}`);
}
