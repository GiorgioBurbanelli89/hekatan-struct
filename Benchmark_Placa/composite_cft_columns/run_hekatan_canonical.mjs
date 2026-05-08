#!/usr/bin/env node
/**
 * Hekatan WASM corre 3 casos canónicos:
 *   1) cantileverColumn   — Columna vertical empotrada base, P=10kN lateral en tope
 *   2) clampedClampedBeam — Viga horizontal doblemente empotrada, P=10kN en centro
 *   3) cantileverBeam     — Viga horizontal empotrada-libre, P=10kN en extremo libre
 *
 * Compara con ETABS (etabs_canonical_results.json) y solución analítica
 * Timoshenko (analytical_canonical.json).
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
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

const L = 4.0;
const P = 10.0;
const E_s = 200e6, nu_s = 0.3;
const G_s = E_s / (2 * (1 + nu_s));

// W360X60 propiedades de ETABS (mismo que e2k)
const A_w360  = 7.886e-3;
const I33_w360 = 1.748e-4;
const I22_w360 = 1.814e-5;
const J_w360  = 3.55e-7;
const As_w360 = 2.79e-3;

function buildCase(caseId) {
  // Common: 3 nodos para clampedClampedBeam, 2 para los otros
  let nodes, frames, supports, loads, kpiNode, kpiDof;

  if (caseId === "cantileverColumn") {
    // Columna vertical: nodo 0 en (0,0,0) base empotrada, nodo 1 en (0,0,L) tope con P horizontal
    nodes = [[0, 0, 0], [0, 0, L]];
    frames = [[0, 1]];
    supports = new Map();
    supports.set(0, [true, true, true, true, true, true]);
    loads = new Map();
    loads.set(1, [P, 0, 0, 0, 0, 0]);  // P en X (lateral)
    kpiNode = 1; kpiDof = 0;  // Ux en tope
  } else if (caseId === "clampedClampedBeam") {
    // Viga horizontal en X: nodo 0 (0,0,0) empotrado, nodo 2 (L,0,0) empotrado, nodo 1 (L/2,0,0) libre con P en -Z
    nodes = [[0, 0, 0], [L/2, 0, 0], [L, 0, 0]];
    frames = [[0, 1], [1, 2]];
    supports = new Map();
    supports.set(0, [true, true, true, true, true, true]);
    supports.set(2, [true, true, true, true, true, true]);
    loads = new Map();
    loads.set(1, [0, 0, -P, 0, 0, 0]);  // P en -Z
    kpiNode = 1; kpiDof = 2;  // Uz en centro
  } else {
    // cantileverBeam: nodo 0 empotrado, nodo 1 libre con P en -Z
    nodes = [[0, 0, 0], [L, 0, 0]];
    frames = [[0, 1]];
    supports = new Map();
    supports.set(0, [true, true, true, true, true, true]);
    loads = new Map();
    loads.set(1, [0, 0, -P, 0, 0, 0]);
    kpiNode = 1; kpiDof = 2;
  }

  const elements = frames;
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

  for (let e = 0; e < frames.length; e++) {
    elasticities.set(e, E_s);
    poissons.set(e, nu_s);
    shearModuli.set(e, G_s);
    areas.set(e, A_w360);
    Iy_map.set(e, I33_w360);  // strong axis (vertical bending para vigas; bending lateral para columna)
    Iz_map.set(e, I22_w360);  // weak axis
    J_map.set(e, J_w360);
    shearAreasY.set(e, As_w360);
    shearAreasZ.set(e, As_w360);
  }

  return {
    caseId, nodes, elements, frames, supports, loads,
    elasticities, poissons, thicknesses, shearModuli,
    areas, Iz_map, Iy_map, J_map, shearAreasY, shearAreasZ,
    kpiNode, kpiDof,
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
  const deformations = new Map();
  if (dSize > 0 && dPtr) {
    const flat = new Float64Array(mod.HEAPF64.buffer, dPtr, dSize);
    for (let i = 0; i < dSize; i += 7) deformations.set(flat[i], [...flat.slice(i + 1, i + 7)]);
  }
  gc.forEach(p => mod._free(p));

  return deformations;
}

const analytical = JSON.parse(readFileSync(join(__dirname, "analytical_canonical.json"), "utf8"));
const etabsPath = join(__dirname, "etabs_canonical_results.json");
const etabsData = existsSync(etabsPath) ? JSON.parse(readFileSync(etabsPath, "utf8")) : null;

const CASES = ["cantileverColumn", "clampedClampedBeam", "cantileverBeam"];

console.log("=== Hekatan WASM canonical (Timoshenko, As_etabs) ===\n");
const rows = [];

for (const c of CASES) {
  const m = buildCase(c);
  const def = solve(m);
  const u = def.get(m.kpiNode) || [0,0,0,0,0,0];
  const hek_mm = u[m.kpiDof] * 1000;

  let analytic_mm;
  if (c === "clampedClampedBeam") analytic_mm = -analytical.clamped.total;  // δ negativa porque P es -Z
  else if (c === "cantileverColumn") analytic_mm = analytical.cantilever.total;  // Ux positivo
  else analytic_mm = -analytical.cantilever.total;  // cantileverBeam δ negativa

  let etabs_mm = null;
  if (etabsData) {
    const e = etabsData.find(r => r.case === c);
    if (e && !e.error) etabs_mm = e.kpi_mm;
  }

  const dHEAvsAnalytic = analytic_mm !== 0 ? (hek_mm - analytic_mm)/analytic_mm*100 : null;
  const dETABSvsAnalytic = (etabs_mm !== null && analytic_mm !== 0) ? (etabs_mm - analytic_mm)/analytic_mm*100 : null;
  const dHEAvsETABS = (etabs_mm !== null && etabs_mm !== 0) ? (hek_mm - etabs_mm)/etabs_mm*100 : null;

  rows.push({ case: c, hek_mm, analytic_mm, etabs_mm, dHEAvsAnalytic, dETABSvsAnalytic, dHEAvsETABS });
}

console.log(`${'Case'.padEnd(22)} | ${'Hekatan'.padStart(10)} | ${'Analítico'.padStart(10)} | ${'ETABS'.padStart(10)} | ${'H vs A %'.padStart(9)} | ${'E vs A %'.padStart(9)} | ${'H vs E %'.padStart(9)}`);
console.log("-".repeat(110));
for (const r of rows) {
  const fmtPct = (v) => v === null ? "N/A".padStart(9) : ((v >= 0 ? "+" : "") + v.toFixed(3)).padStart(9);
  const fmtMm  = (v) => v === null ? "N/A".padStart(10) : v.toFixed(4).padStart(10);
  console.log(`${r.case.padEnd(22)} | ${fmtMm(r.hek_mm)} | ${fmtMm(r.analytic_mm)} | ${fmtMm(r.etabs_mm)} | ${fmtPct(r.dHEAvsAnalytic)} | ${fmtPct(r.dETABSvsAnalytic)} | ${fmtPct(r.dHEAvsETABS)}`);
}

writeFileSync(join(__dirname, "results_hekatan_canonical.json"), JSON.stringify({ rows, analytical, etabs: etabsData }, null, 2));
console.log(`\n[OK] results_hekatan_canonical.json`);
