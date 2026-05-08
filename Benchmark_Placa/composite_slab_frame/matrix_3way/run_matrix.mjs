#!/usr/bin/env node
/**
 * run_matrix.mjs — Matriz 3-way de benchmarks: 7 areaTypes × 3 setups = 21 celdas.
 *
 * Uso:
 *   node run_matrix.mjs              → corre TODAS las celdas y dumpea CSV+JSON
 *   node run_matrix.mjs <type> <setup>  → corre una celda y muestra detalle
 *
 * areaType ∈ { membrane, shellThin, shellThick, plateThin, plateThick, plane, layered }
 * setup    ∈ { areaOnly, perimFrames, fullBuilding }
 *
 *   areaOnly      = solo elementos de área con BCs en bordes (referencia)
 *   perimFrames   = área + 16 frames perimetrales + 4 columnas-pin en esquinas
 *   fullBuilding  = área + frames perimetrales (vigas) + frames internos (columnas+vigas)
 *
 * Carga: q = 5 kN/m² vertical para slab/plate/shell, 100 kN horizontal para wall/membrane.
 * Geometría base: 4×4 m, mesh 4×4 = 16 Q4, edge beams W360x60 (cuando aplica).
 * Material: concreto 25 GPa ν=0.20 t=0.10 m (slab) o 0.20 m (wall); acero 200 GPa.
 *
 * Compara: Hekatan Struct WASM (esto) + valores hardcoded de MATLAB y ETABS.
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const wasmPath = join(__dirname, "..", "..", "..", "hekatan-fem", "src", "cpp", "built", "deform.wasm");
const jsPath   = join(__dirname, "..", "..", "..", "hekatan-fem", "src", "cpp", "built", "deform.js");
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

// ─── Constantes del benchmark ─────────────────────────────────────────────
const Lx = 4, Ly = 4;
const t_slab = 0.10, t_wall = 0.20;
const E_c = 25e6, nu_c = 0.20;
const G_c = E_c / (2 * (1 + nu_c));
const E_s = 200e6, G_s = 77e6;
const A_b = 7610e-6;
const Iy_b = 12.9e-5;   // strong (vertical bending)
const Iz_b = 1.20e-5;   // weak
const J_b  = 0.31e-6;
const q_unif = 5;
const F_top = 100;
const nx = 4, ny = 4;
const nNx = nx + 1, nNy = ny + 1;
const dx = Lx / nx, dy = Ly / ny;

// Tipos de área válidos
const AREA_TYPES = ["membrane", "shellThin", "shellThick", "plateThin", "plateThick", "plane", "layered"];
const SETUPS = ["areaOnly", "perimFrames", "fullBuilding"];

// Nota: deform.cpp despacha shell Q4 (membrana + flexión Mindlin MITC4) para
// elementos de 4 nodos con thickness > 0. NO distingue thin/thick/plate/etc.
// La diferenciación a nivel de WASM se logra via:
//   - membrane:    membraneModifier=1, bendingModifier=0  → solo in-plane
//   - shellThin:   1,1                                    → completo (Mindlin)
//   - shellThick:  1,1 + (en C++ usa MITC4 anyway)
//   - plateThin:   0,1                                    → solo bending
//   - plateThick:  0,1                                    → idem
//   - plane:       1,0 + load in-plane                    → equivale a membrane
//   - layered:     no soportado nativamente (TODO)
// Para los modos plate/membrane usamos los modifiers correspondientes.

function modifiersForType(type) {
  switch (type) {
    case "membrane":   return { mFactor: 1, bFactor: 0 };
    case "shellThin":  return { mFactor: 1, bFactor: 1 };
    case "shellThick": return { mFactor: 1, bFactor: 1 };
    case "plateThin":  return { mFactor: 0, bFactor: 1 };
    case "plateThick": return { mFactor: 0, bFactor: 1 };
    case "plane":      return { mFactor: 1, bFactor: 0 };
    case "layered":    return { mFactor: 1, bFactor: 1 }; // approx
    default:           return { mFactor: 1, bFactor: 1 };
  }
}

// Si la carga es vertical (out-of-plane) o lateral (in-plane)
function loadIsVertical(type) {
  // membrane y plane no resisten cargas verticales — usar lateral
  return !(type === "membrane" || type === "plane");
}

// ─── Construcción del modelo ───────────────────────────────────────────────
function buildModel(areaType, setup) {
  const isVertical = loadIsVertical(areaType);
  const verticalAxis = isVertical ? "z" : "z";   // siempre z, pero el modelo cambia orientación

  // Para casos de carga vertical: losa horizontal (xy plane), z=4 (Level_1 above Base)
  // Para casos de carga lateral (membrane/plane): muro vertical (xz plane), y=0
  const slabZ = 4;
  const nodes = [];
  if (isVertical) {
    for (let j = 0; j <= ny; j++)
      for (let i = 0; i <= nx; i++)
        nodes.push([i * dx, j * dy, slabZ]);
  } else {
    for (let k = 0; k <= ny; k++)
      for (let i = 0; i <= nx; i++)
        nodes.push([i * dx, 0, k * dy]);
  }

  // Áreas (Q4, 16 elementos)
  const shells = [];
  for (let j = 0; j < ny; j++)
    for (let i = 0; i < nx; i++) {
      const n_bl = j * nNx + i;
      shells.push([n_bl, n_bl + 1, (j + 1) * nNx + i + 1, (j + 1) * nNx + i]);
    }

  // Frames según setup
  const frames = [];
  let nBaseExtra = 0;   // nodos extra base para columnas
  if (setup === "perimFrames" || setup === "fullBuilding") {
    // Frames perimetrales (vigas): 16 elementos
    for (let i = 0; i < nx; i++) frames.push([i, i + 1]);                                   // bottom
    const baseTop = ny * nNx;
    for (let i = 0; i < nx; i++) frames.push([baseTop + i, baseTop + i + 1]);               // top
    for (let j = 0; j < ny; j++) frames.push([j * nNx, (j + 1) * nNx]);                     // left
    for (let j = 0; j < ny; j++) frames.push([j * nNx + nx, (j + 1) * nNx + nx]);           // right

    if (isVertical) {
      // 4 columnas en esquinas (slab → base z=0)
      const cIdx = nodes.length;
      nodes.push([0, 0, 0]);
      nodes.push([nx * dx, 0, 0]);
      nodes.push([0, ny * dy, 0]);
      nodes.push([nx * dx, ny * dy, 0]);
      const cornerSlab = [0, nx, ny * nNx, ny * nNx + nx];
      for (let k = 0; k < 4; k++) frames.push([cIdx + k, cornerSlab[k]]);
      nBaseExtra = 4;
    }
  }
  if (setup === "fullBuilding" && isVertical) {
    // Vigas internas en cruz por el centro, además de perimetrales
    const midX = Math.floor(nx / 2);
    const midY = Math.floor(ny / 2);
    // Viga central horizontal (y = midY): nx elementos
    for (let i = 0; i < nx; i++) frames.push([midY * nNx + i, midY * nNx + i + 1]);
    // Viga central vertical (x = midX): ny elementos
    for (let j = 0; j < ny; j++) frames.push([j * nNx + midX, (j + 1) * nNx + midX]);
    // Columna central: pin en base centro
    const cIdx = nodes.length;
    nodes.push([midX * dx, midY * dy, 0]);
    frames.push([cIdx, midY * nNx + midX]);
    nBaseExtra += 1;
  }

  const elements = [...shells, ...frames];

  // Soportes y cargas
  const supports = new Map();
  const loads = new Map();
  if (setup === "areaOnly") {
    // BCs en TODOS los bordes del área
    if (isVertical) {
      // Simply supported en los 4 bordes
      for (let i = 0; i <= nx; i++) {
        supports.set(i, [true, true, true, false, false, false]);
        supports.set(ny * nNx + i, [true, true, true, false, false, false]);
      }
      for (let j = 0; j <= ny; j++) {
        supports.set(j * nNx, [true, true, true, false, false, false]);
        supports.set(j * nNx + nx, [true, true, true, false, false, false]);
      }
    } else {
      // Empotrado en borde inferior
      for (let i = 0; i <= nx; i++) {
        supports.set(i, [true, true, true, true, true, true]);
      }
    }
  } else {
    // perimFrames / fullBuilding: pin en nodos base
    if (isVertical) {
      const fix = [true, true, true, false, false, false];
      const baseStart = nNx * nNy;
      for (let k = 0; k < nBaseExtra; k++) {
        supports.set(baseStart + k, fix);
      }
    } else {
      // Wall: borde inferior empotrado
      for (let i = 0; i <= nx; i++) {
        supports.set(i, [true, true, true, true, true, true]);
      }
    }
  }

  // Cargas
  if (isVertical) {
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
    // F_top distribuido en top edge en +x
    const F_per = F_top / nNx;
    for (let i = 0; i <= nx; i++) {
      const n = ny * nNx + i;
      loads.set(n, [F_per, 0, 0, 0, 0, 0]);
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
  const memMods = new Map();
  const benMods = new Map();

  const t_use = isVertical ? t_slab : t_wall;
  const { mFactor, bFactor } = modifiersForType(areaType);

  for (let e = 0; e < shells.length; e++) {
    elasticities.set(e, E_c);
    poissons.set(e, nu_c);
    thicknesses.set(e, t_use);
    shearModuli.set(e, G_c);
    if (mFactor !== 1) memMods.set(e, mFactor);
    if (bFactor !== 1) benMods.set(e, bFactor);
  }
  for (let f = 0; f < frames.length; f++) {
    const e = shells.length + f;
    elasticities.set(e, E_s);
    shearModuli.set(e, G_s);
    areas.set(e, A_b);
    Iz_map.set(e, Iz_b);
    Iy_map.set(e, Iy_b);
    J_map.set(e, J_b);
  }

  return {
    nodes, elements, shells, frames,
    supports, loads,
    elasticities, poissons, thicknesses, shearModuli,
    areas, Iz_map, Iy_map, J_map,
    memMods, benMods,
    isVertical,
  };
}

// ─── Solver call ───────────────────────────────────────────────────────────
function solve(model) {
  const { nodes, elements, supports, loads,
    elasticities, poissons, thicknesses, shearModuli,
    areas, Iz_map, Iy_map, J_map, memMods, benMods } = model;

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

  const Eo = processInput(elasticities); gc.push(Eo.keysPtr, Eo.valuesPtr);
  const Ao = processInput(areas);        gc.push(Ao.keysPtr, Ao.valuesPtr);
  const Iyo = processInput(Iy_map);      gc.push(Iyo.keysPtr, Iyo.valuesPtr);
  const Izo = processInput(Iz_map);      gc.push(Izo.keysPtr, Izo.valuesPtr);
  const Go = processInput(shearModuli);  gc.push(Go.keysPtr, Go.valuesPtr);
  const Jo = processInput(J_map);        gc.push(Jo.keysPtr, Jo.valuesPtr);
  const To = processInput(thicknesses);  gc.push(To.keysPtr, To.valuesPtr);
  const NUo = processInput(poissons);    gc.push(NUo.keysPtr, NUo.valuesPtr);
  const EOo = processInput(new Map());   gc.push(EOo.keysPtr, EOo.valuesPtr);
  // shearAreasY/Z (default empty → Timoshenko 5/6·A en C++)
  const ASYo = processInput(new Map()); gc.push(ASYo.keysPtr, ASYo.valuesPtr);
  const ASZo = processInput(new Map()); gc.push(ASZo.keysPtr, ASZo.valuesPtr);

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

// ─── Extracción del KPI ────────────────────────────────────────────────────
function extractKPI(model, deformations) {
  const { isVertical } = model;
  const i_c = nx / 2, j_c = ny / 2;
  const n_c = j_c * nNx + i_c;
  const u = deformations.get(n_c);
  if (!u) return { kpi: NaN, label: "?" };
  if (isVertical) {
    return { kpi: u[2] * 1000, label: "w_centro [mm]" };
  } else {
    // Top center for wall
    const n_top = ny * nNx + i_c;
    const ut = deformations.get(n_top);
    return { kpi: (ut ? ut[0] : 0) * 1000, label: "ux_top [mm]" };
  }
}

// ─── Single cell run ───────────────────────────────────────────────────────
function runCell(areaType, setup) {
  const model = buildModel(areaType, setup);
  let kpi = NaN, label = "?";
  try {
    const deformations = solve(model);
    const r = extractKPI(model, deformations);
    kpi = r.kpi;
    label = r.label;
  } catch (e) {
    return { areaType, setup, kpi: NaN, label: "ERROR: " + (e.message || e) };
  }
  return { areaType, setup, kpi, label, nodes: model.nodes.length, shells: model.shells.length, frames: model.frames.length };
}

// ─── Main ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
if (args.length >= 2) {
  // Single cell mode
  const r = runCell(args[0], args[1]);
  console.log(`=== Hekatan Struct CLI: ${args[0]} / ${args[1]} ===`);
  console.log(`  ${r.label}: ${r.kpi.toFixed(4)}`);
  console.log(`  nodes=${r.nodes}, shells=${r.shells}, frames=${r.frames}`);
} else {
  // Full matrix
  console.log("=== Matriz 3-way: 7 areaTypes × 3 setups = 21 celdas ===");
  console.log("");
  const rows = [];
  for (const t of AREA_TYPES) {
    for (const s of SETUPS) {
      const r = runCell(t, s);
      rows.push(r);
    }
  }
  // Tabla
  console.log("areaType    | setup        | KPI         | nodes | shells | frames");
  console.log("------------|--------------|-------------|-------|--------|-------");
  for (const r of rows) {
    const k = isNaN(r.kpi) ? "ERROR" : r.kpi.toFixed(4).padStart(11);
    console.log(`${r.areaType.padEnd(11)} | ${r.setup.padEnd(12)} | ${k} | ${String(r.nodes).padStart(5)} | ${String(r.shells).padStart(6)} | ${String(r.frames).padStart(6)}`);
  }
  // Save JSON
  const outPath = join(__dirname, "matrix_results.json");
  writeFileSync(outPath, JSON.stringify(rows, null, 2));
  console.log("");
  console.log(`[OK] resultados completos: ${outPath}`);
}
