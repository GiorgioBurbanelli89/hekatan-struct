#!/usr/bin/env node
/**
 * Simula lo que hace el USUARIO en el deploy: en UNA sola sesión (un solo módulo WASM,
 * como el navegador), ir subiendo el N° de pisos/vanos con el slider y correr el modal.
 *
 * Hipótesis: emscripten con ALLOW_MEMORY_GROWTH sólo CRECE el heap, nunca lo devuelve.
 * Cada rebuild pide un pico mayor → el heap acumulado llega al techo de 2 GB mucho antes
 * que un proceso fresco, y ahí el WASM hace abort() irrecuperable (mata TODO el workspace).
 *
 * Uso: node accum_probe.mjs [ms]     (ms de display, default 0.75)
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(__dirname, "sweep_case.mjs"), "utf8");
const cut = src.indexOf("// ────────── caso ──────────");
const tmp = join(__dirname, ".accum_lib.mjs");
writeFileSync(tmp, src.slice(0, cut) + "\nexport { buildEdificio, deform, modalAnalysis, mod };\n");
const lib = await import(pathToFileURL(tmp).href);

const MS = +(process.argv[2] || 0.75);
const MB = b => +(b / 1048576).toFixed(0);
const base = { nWalls: 1, tWall: 0.25, tSlab: 0.20, bCol: 0.40, bBeam: 0.30, hBeam: 0.50, q: 1.0 };
const sys = { slab: true, walls: true };

// Secuencia realista: el usuario sube pisos, luego vanos, sin recargar la página.
const seq = [
  [2,2,4],[2,2,5],[2,2,6],[2,2,7],[2,2,8],
  [3,3,8],[4,4,8],[5,5,8],[6,6,8],
];

console.log(`Sesión ÚNICA (como el navegador) — ms display=${MS}, modal ms=1.0`);
console.log("paso  caso     nodosDisp   GDL   heapMB_desp  heapMB_modal   tDisp  tModal   estado");
const rows = [];
let paso = 0;
for (const [nbx, nby, nF] of seq) {
  paso++;
  const tag = `${nbx}x${nby}x${nF}`;
  const row = { paso, nbx, nby, nF };
  try {
    // 1) rebuild + estático en malla de display (lo que hace mover cualquier slider)
    const p = { ...base, nbx, nby, nFloors: nF, ms: MS };
    const d1 = lib.buildEdificio(p, sys);
    row.nodes = d1.nodes.length; row.dof = d1.nodes.length * 6;
    let t = performance.now();
    lib.deform(d1.nodes, d1.elements, d1.ni, d1.ei);
    row.tDisp = +(performance.now() - t).toFixed(0);
    row.heapDisp = MB(lib.mod.HEAPU8.length);
    // 2) "Correr modal": rebuild en ms=1.0 + deform + eigen (si pasa el cap de 8000 GDL)
    const d2 = lib.buildEdificio({ ...p, ms: 1.0 }, sys);
    row.dofModal = d2.nodes.length * 6;
    t = performance.now();
    lib.deform(d2.nodes, d2.elements, d2.ni, d2.ei);
    if (row.dofModal <= 8000) {
      const eiMass = { ...d2.ei, densities: new Map([...d2.ei.densities].map(([k, v]) => [k, v / 9.80665])) };
      const out = lib.modalAnalysis(d2.nodes, d2.elements, d2.ni, eiMass, 12, 1);
      row.T1 = out.frequencies[0] > 0 ? +(1 / out.frequencies[0]).toFixed(4) : 0;
      const mp = out.massParticipation || [];
      row.sumUy = +(mp.reduce((s, r) => s + (r[1] || 0), 0) * 100).toFixed(1);
    } else row.T1 = "cap";
    row.tModal = +(performance.now() - t).toFixed(0);
    row.heapModal = MB(lib.mod.HEAPU8.length);
    row.estado = "ok";
  } catch (e) {
    row.estado = "ERROR: " + (e?.message || e);
  }
  rows.push(row);
  console.log(`${String(paso).padStart(4)}  ${tag.padEnd(8)} ${String(row.nodes ?? "-").padStart(9)} ${String(row.dof ?? "-").padStart(6)} ${String(row.heapDisp ?? "-").padStart(12)} ${String(row.heapModal ?? "-").padStart(13)} ${String(row.tDisp ?? "-").padStart(7)} ${String(row.tModal ?? "-").padStart(7)}   ${row.estado}`);
}
writeFileSync(join(__dirname, "accum_results.json"), JSON.stringify(rows, null, 1));
console.log("\nheap final:", MB(lib.mod.HEAPU8.length), "MB  (techo WASM32 = 2048 MB)");
