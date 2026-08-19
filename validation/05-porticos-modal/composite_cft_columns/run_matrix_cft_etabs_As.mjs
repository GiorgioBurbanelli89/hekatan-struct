#!/usr/bin/env node
/**
 * run_matrix_cft_etabs_As.mjs — Variante donde las columnas CFT usan el As
 * específico que ETABS calcula para SHAPE "Filled Steel Tube":
 *
 *   ETABS via API: As2 = As3 = 1.138396e-2 m²  (vs Hekatan default 5/6·A_cft = 1.351e-2)
 *
 * Hipótesis: el ~1.6% de gap residual viene del shear area, no de la formulación
 * shell. Si Hekatan usa As_etabs en lugar de 5/6·A_cft, debería match exacto.
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

const Lx = 4, Ly = 4;
const slabZ = 4;
const t_slab = 0.10;
const q_unif = 5;
const _meshN = parseInt(process.env.MESH || "4", 10);
const nx = _meshN, ny = _meshN;
const nNx = nx + 1, nNy = ny + 1;
const dx = Lx / nx, dy = Ly / ny;

const E_c = 25e6, nu_c = 0.20;
const G_c = E_c / (2 * (1 + nu_c));
const E_s = 200e6, nu_s = 0.30;
const G_s = E_s / (2 * (1 + nu_s));

// W360X60 propiedades — leer de ETABS API si USE_ETABS_BEAM=yes
const useEtabsBeam = (process.env.USE_ETABS_BEAM || "no").toLowerCase() === "yes";
let A_b, Iy_b, Iz_b, J_b;
if (useEtabsBeam) {
  // Valores extraídos de ETABS API (kN, m)
  A_b  = 7.886000e-03;   // ETABS Area
  Iy_b = 1.748099e-04;   // ETABS I33 (strong axis ≡ Iy local Hekatan)
  Iz_b = 1.813900e-05;   // ETABS I22 (weak axis ≡ Iz local Hekatan)
  J_b  = 3.551833e-07;   // ETABS J
} else {
  A_b  = 7610e-6;
  Iy_b = 12.9e-5;
  Iz_b = 1.20e-5;
  J_b  = 0.31e-6;
}

const D_out = 0.250, t_HSS = 0.010;
const D_in  = D_out - 2 * t_HSS;
const A_steel_HSS = D_out*D_out - D_in*D_in;
const A_conc      = D_in*D_in;
const I_steel_HSS = (D_out**4 - D_in**4) / 12;
const I_conc      = D_in**4 / 12;
const J_steel_HSS = 2 * I_steel_HSS;
const n_modular   = E_s / E_c;

const A_cft = A_steel_HSS + A_conc / n_modular;
const I_cft = I_steel_HSS + I_conc / n_modular;
const J_cft = J_steel_HSS;
const E_col = E_s;
const G_col_use = E_col / 2.6;

// === ETABS-specific values from API extraction ===
const As_ETABS = 1.138396e-2;   // ETABS API CFT_HSS250x10 As2 = As3
const J_ETABS = 0.0;            // ETABS reports J=0 for Filled Steel Tube!
const As_HEK_default = 5/6 * A_cft;  // = 1.351e-2

// Configuración del experimento via env vars
const useEtabsAs = (process.env.USE_ETABS_AS || "yes").toLowerCase() !== "no";
const useEtabsJ  = (process.env.USE_ETABS_J  || "no").toLowerCase() === "yes";

const As_use = useEtabsAs ? As_ETABS : As_HEK_default;
const J_use  = useEtabsJ  ? J_ETABS  : J_cft;

console.log(`# Variante: USE_ETABS_AS=${useEtabsAs ? "yes" : "no"}, USE_ETABS_J=${useEtabsJ ? "yes" : "no"}, USE_ETABS_BEAM=${useEtabsBeam ? "yes" : "no"}`);
console.log(`# W360X60 (${useEtabsBeam ? "ETABS API" : "Hekatan default"}):`);
console.log(`#   A=${A_b.toExponential(4)}  Iy(strong)=${Iy_b.toExponential(4)}  Iz(weak)=${Iz_b.toExponential(4)}  J=${J_b.toExponential(4)}`);
console.log(`# CFT columns (transformed steel-equivalent):`);
console.log(`#   A_cft = ${A_cft.toExponential(4)} m²   I_cft = ${I_cft.toExponential(4)} m⁴`);
console.log(`#   J     = ${J_use.toExponential(4)} m⁴ (${useEtabsJ ? "ETABS=0" : "Hekatan=2·I_steel"})`);
console.log(`#   As    = ${As_use.toExponential(4)} m² (${useEtabsAs ? "ETABS Filled Tube" : "Hekatan 5/6·A"})`);
console.log(`#   E_col = ${E_col.toExponential(4)} kN/m²   G_col = ${G_col_use.toExponential(4)} kN/m²`);
console.log("");

function buildModel(setup) {
  const hasSlab = setup === "cftDeckSlab";
  const nodes = [];
  for (let j = 0; j <= ny; j++)
    for (let i = 0; i <= nx; i++)
      nodes.push([i * dx, j * dy, slabZ]);
  const baseStart = nodes.length;
  nodes.push([0, 0, 0]);
  nodes.push([nx*dx, 0, 0]);
  nodes.push([0, ny*dy, 0]);
  nodes.push([nx*dx, ny*dy, 0]);

  const shells = [];
  if (hasSlab) {
    for (let j = 0; j < ny; j++)
      for (let i = 0; i < nx; i++) {
        const n_bl = j * nNx + i;
        shells.push([n_bl, n_bl + 1, (j + 1) * nNx + i + 1, (j + 1) * nNx + i]);
      }
  }

  const frames = [];
  for (let i = 0; i < nx; i++) frames.push([i, i + 1]);
  const baseTop = ny * nNx;
  for (let i = 0; i < nx; i++) frames.push([baseTop + i, baseTop + i + 1]);
  for (let j = 0; j < ny; j++) frames.push([j * nNx, (j + 1) * nNx]);
  for (let j = 0; j < ny; j++) frames.push([j * nNx + nx, (j + 1) * nNx + nx]);
  const nBeamFrames = frames.length;

  const cornerSlab = [0, nx, ny * nNx, ny * nNx + nx];
  for (let k = 0; k < 4; k++) frames.push([baseStart + k, cornerSlab[k]]);

  const elements = [...shells, ...frames];

  const supports = new Map();
  for (let k = 0; k < 4; k++) {
    // FIXED: empotramiento completo (UX UY UZ RX RY RZ)
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

  const loads = new Map();
  if (hasSlab) {
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
    const midNodes = [
      Math.floor(nx/2),
      ny * nNx + Math.floor(nx/2),
      Math.floor(ny/2) * nNx,
      Math.floor(ny/2) * nNx + nx,
    ];
    for (const n of midNodes) {
      loads.set(n, [0, 0, -20, 0, 0, 0]);
    }
  }

  const elasticities = new Map();
  const poissons = new Map();
  const thicknesses = new Map();
  const shearModuli = new Map();
  const areas = new Map();
  const Iz_map = new Map();
  const Iy_map = new Map();
  const J_map = new Map();
  const shearAreasY = new Map();
  const shearAreasZ = new Map();

  for (let e = 0; e < shells.length; e++) {
    elasticities.set(e, E_c);
    poissons.set(e, nu_c);
    thicknesses.set(e, t_slab);
    shearModuli.set(e, G_c);
  }
  for (let f = 0; f < nBeamFrames; f++) {
    const e = shells.length + f;
    elasticities.set(e, E_s);
    shearModuli.set(e, G_s);
    areas.set(e, A_b);
    Iz_map.set(e, Iz_b);
    Iy_map.set(e, Iy_b);
    J_map.set(e, J_b);
  }
  for (let f = nBeamFrames; f < frames.length; f++) {
    const e = shells.length + f;
    elasticities.set(e, E_col);
    shearModuli.set(e, G_col_use);
    areas.set(e, A_cft);
    Iz_map.set(e, I_cft);
    Iy_map.set(e, I_cft);
    J_map.set(e, J_use);
    // CRITICAL: pasar As específico ETABS
    shearAreasY.set(e, As_use);
    shearAreasZ.set(e, As_use);
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
  const ASYo = processInput(shearAreasY); gc.push(ASYo.keysPtr, ASYo.valuesPtr);
  const ASZo = processInput(shearAreasZ); gc.push(ASZo.keysPtr, ASZo.valuesPtr);

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

function extractKPI(model, deformations, reactions) {
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

const SETUPS = ["cftNoSlab", "cftDeckSlab"];
console.log("=== Hekatan WASM con As_ETABS (matriz 2 setups) ===");
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
console.log("");
console.log("=== Comparación con ETABS (joint 13 via API) ===");
// ETABS API real (base EMPOTRADA, todos los DOF restringidos en columnas)
const ETABS_API = -2.9031;  // mm  (cftDeckSlab con base FIXED, joint 13)
const cftDeck = rows.find(r => r.setup === "cftDeckSlab");
if (cftDeck) {
  const diff = (cftDeck.w_kpi_mm - ETABS_API) / ETABS_API * 100;
  console.log(`  Hekatan (As=${useEtabsAs ? 'ETABS' : '5/6'}, J=${useEtabsJ ? 'ETABS=0' : 'Hek'}) = ${cftDeck.w_kpi_mm.toFixed(4)} mm`);
  console.log(`  ETABS via API real                            = ${ETABS_API.toFixed(4)} mm`);
  console.log(`  Diff                                          = ${diff > 0 ? '+' : ''}${diff.toFixed(2)} %`);
}

const outPath = join(__dirname, `results_hekatan_etabsAs_${useEtabsAs ? 'on' : 'off'}_J${useEtabsJ ? 'on' : 'off'}.json`);
writeFileSync(outPath, JSON.stringify({ rows, etabs_api: ETABS_API, useEtabsAs, useEtabsJ }, null, 2));
console.log(`\n[OK] resultados: ${outPath}`);
