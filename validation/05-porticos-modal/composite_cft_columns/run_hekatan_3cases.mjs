#!/usr/bin/env node
/**
 * run_hekatan_3cases.mjs — Hekatan WASM corre 3 casos:
 *   steelOnly      — Vigas W360 acero + Columnas HSS 250×10 acero (vacías)
 *   filled         — Vigas W360 acero + Columnas CFT (Filled Steel Tube)
 *   concreteOnly   — Vigas concreto 0.30×0.60 + Columnas concreto 0.25×0.25
 *
 * Las propiedades de sección se LEEN del JSON de ETABS API para garantizar
 * coincidencia exacta de A, I, J, As. Geometría idéntica al export_e2k_3cases.mjs.
 *
 * Uso:  node run_hekatan_3cases.mjs [steelOnly|filled|concreteOnly]
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

const Lx = 4, Ly = 4;
const slabZ = 4;
const t_slab = 0.10;
const q_unif = 5;
const _meshN = parseInt(process.env.MESH || "16", 10);
const nx = _meshN, ny = _meshN;
const nNx = nx + 1, nNy = ny + 1;
const dx = Lx / nx, dy = Ly / ny;

const E_c = 25e6, nu_c = 0.20;
const G_c = E_c / (2 * (1 + nu_c));
const E_s = 200e6, nu_s = 0.30;
const G_s = E_s / (2 * (1 + nu_s));

// === Cargar propiedades de sección de ETABS API ===
const ETABS_JSON = join(__dirname, "etabs_3cases_results.json");
let etabsData = null;
if (existsSync(ETABS_JSON)) {
  etabsData = JSON.parse(readFileSync(ETABS_JSON, "utf8"));
  console.log(`[OK] Cargado etabs_3cases_results.json (${etabsData.length} casos)`);
} else {
  console.error(`[ERR] No existe ${ETABS_JSON} — corre primero etabs_run_3cases.py`);
  process.exit(1);
}

function getCaseProps(caseId) {
  const d = etabsData.find(c => c.case === caseId);
  if (!d) throw new Error(`Case ${caseId} no encontrado en etabsData`);
  if (d.error) throw new Error(`Case ${caseId} tiene error: ${d.error}`);

  // Determinar materiales (steelOnly y filled tienen vigas+col steel-base; concreteOnly todo concreto)
  const beamIsSteel = (caseId === "steelOnly" || caseId === "filled");
  const colIsSteel  = (caseId === "steelOnly");  // sólo steelOnly tiene col puramente acero (HSS hueca)
  // NOTA: filled (CFT) — la API ETABS reporta E del material "BASE" (Mat_2 acero).
  //       concreteOnly — todo Mat_1 concreto.
  const E_beam = beamIsSteel ? E_s : E_c;
  const G_beam = beamIsSteel ? G_s : G_c;
  const E_col  = (caseId === "concreteOnly") ? E_c : E_s;
  const G_col  = (caseId === "concreteOnly") ? G_c : G_s;
  return {
    Beam: d.Beam, Col: d.Col,
    E_beam, G_beam, E_col, G_col,
    etabs_max_Uz_mm: d.max_Uz_mm,
    etabs_max_joint: d.max_disp_joint,
  };
}

function buildModel(caseId) {
  const p = getCaseProps(caseId);
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
  for (let j = 0; j < ny; j++)
    for (let i = 0; i < nx; i++) {
      const n_bl = j * nNx + i;
      shells.push([n_bl, n_bl + 1, (j + 1) * nNx + i + 1, (j + 1) * nNx + i]);
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
    // EMPOTRAMIENTO COMPLETO en la base de las columnas (UX UY UZ RX RY RZ)
    supports.set(baseStart + k, [true, true, true, true, true, true]);
  }

  const loads = new Map();
  for (const sh of shells) {
    const A = dx * dy;
    const fz = -q_unif * A / 4;
    for (const n of sh) {
      const cur = loads.get(n) || [0, 0, 0, 0, 0, 0];
      cur[2] += fz;
      loads.set(n, cur);
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

  // Vigas — usar propiedades EXACTAS de ETABS (Beam.A, I33 strong, I22 weak, J)
  // Convención Hekatan: Iy=strong, Iz=weak (para columnas verticales eje Z)
  // Pero para vigas horizontales el "strong axis" depende del rotation.
  // En el modelo, las vigas perimetrales son horizontales con eje fuerte vertical (z).
  // Usamos Iy=I33 (ETABS strong = vertical bending) y Iz=I22 (weak = horizontal).
  for (let f = 0; f < nBeamFrames; f++) {
    const e = shells.length + f;
    elasticities.set(e, p.E_beam);
    shearModuli.set(e, p.G_beam);
    areas.set(e, p.Beam.A);
    Iy_map.set(e, p.Beam.I33);   // strong axis
    Iz_map.set(e, p.Beam.I22);   // weak axis
    J_map.set(e, p.Beam.J);
    shearAreasY.set(e, p.Beam.As2);
    shearAreasZ.set(e, p.Beam.As3);
  }

  // Columnas
  for (let f = nBeamFrames; f < frames.length; f++) {
    const e = shells.length + f;
    elasticities.set(e, p.E_col);
    shearModuli.set(e, p.G_col);
    areas.set(e, p.Col.A);
    Iy_map.set(e, p.Col.I33);
    Iz_map.set(e, p.Col.I22);
    J_map.set(e, p.Col.J);
    shearAreasY.set(e, p.Col.As2);
    shearAreasZ.set(e, p.Col.As3);
  }

  return {
    caseId, nodes, elements, shells, frames,
    nBeamFrames, baseStart,
    supports, loads,
    elasticities, poissons, thicknesses, shearModuli,
    areas, Iz_map, Iy_map, J_map,
    shearAreasY, shearAreasZ,
    etabs_max_Uz_mm: p.etabs_max_Uz_mm, etabs_max_joint: p.etabs_max_joint,
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

  // Find max |Uz|
  let maxUz = 0, maxNode = -1;
  for (const [n, u] of deformations) {
    if (Math.abs(u[2]) > Math.abs(maxUz)) { maxUz = u[2]; maxNode = n; }
  }
  return { maxUz, maxNode };
}

const CASES = ["steelOnly", "filled", "concreteOnly"];
const arg = process.argv[2];
const todo = arg ? [arg] : CASES;

console.log("=== Hekatan WASM 3 cases (mesh " + nx + "×" + ny + ") ===\n");
const rows = [];
for (const c of todo) {
  const model = buildModel(c);
  const { maxUz, maxNode } = solve(model);
  const hek_mm = maxUz * 1000;
  const etabs_mm = model.etabs_max_Uz_mm;
  const diff = etabs_mm !== 0 ? (hek_mm - etabs_mm) / etabs_mm * 100 : null;
  rows.push({
    case: c,
    hekatan_max_Uz_mm: hek_mm,
    etabs_max_Uz_mm: etabs_mm,
    diff_pct: diff,
  });
}

console.log(`${'Case'.padEnd(14)} | ${'Hekatan [mm]'.padStart(14)} | ${'ETABS [mm]'.padStart(14)} | ${'Diff %'.padStart(10)}`);
console.log("-".repeat(64));
for (const r of rows) {
  const dstr = r.diff_pct === null ? "N/A" : (r.diff_pct >= 0 ? "+" : "") + r.diff_pct.toFixed(3);
  console.log(`${r.case.padEnd(14)} | ${r.hekatan_max_Uz_mm.toFixed(4).padStart(14)} | ${r.etabs_max_Uz_mm.toFixed(4).padStart(14)} | ${dstr.padStart(10)}`);
}
const outPath = join(__dirname, "results_hekatan_3cases.json");
writeFileSync(outPath, JSON.stringify({ rows, mesh: nx, etabsData }, null, 2));
console.log(`\n[OK] resultados: ${outPath}`);
