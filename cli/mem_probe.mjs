#!/usr/bin/env node
/**
 * Sonda de MEMORIA WASM: cuánto heap consume _deform / _modal según el tamaño del modelo.
 * Objetivo: encontrar el umbral de GDL en que el módulo WASM revienta el límite de 2 GB
 * (Cannot enlarge memory) y ABORTA de forma irrecuperable (sin exception catching).
 *
 * Uso: node mem_probe.mjs <nbx> <nby> <nF> <ms> <fase>
 *      fase = display | modal
 * Imprime JSON con heap antes/después.
 */
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(__dirname, "sweep_case.mjs"), "utf8");
// reutiliza buildEdificio del sweep_case sin re-ejecutar su sección de "caso"
const cut = src.indexOf("// ────────── caso ──────────");
const modSrc = src.slice(0, cut) + "\nexport { buildEdificio, deform, modalAnalysis, mod };\n";
const { writeFileSync } = await import("fs");
const tmp = join(__dirname, ".mem_probe_lib.mjs");
writeFileSync(tmp, modSrc);
const lib = await import(pathToFileURL(tmp).href);

const [nbxA, nbyA, nFA, msA, fase] = process.argv.slice(2);
const p = { nbx: +nbxA, nby: +nbyA, nFloors: +nFA, ms: +msA,
  nWalls: 1, tWall: 0.25, tSlab: 0.20, bCol: 0.40, bBeam: 0.30, hBeam: 0.50, q: 1.0 };
const MB = b => +(b / 1048576).toFixed(0);
const R = { nbx: p.nbx, nby: p.nby, nF: p.nFloors, ms: p.ms, fase };

const d = lib.buildEdificio(p, { slab: true, walls: true });
R.nodes = d.nodes.length; R.dof = d.nodes.length * 6; R.elems = d.elements.length;
R.shells = d.kinds.filter(k => k === "slab" || k === "wall").length;
R.heap_antes_MB = MB(lib.mod.HEAPU8.length);
const t0 = performance.now();
if (fase === "modal") {
  const eiMass = { ...d.ei, densities: new Map([...d.ei.densities].map(([k, v]) => [k, v / 9.80665])) };
  const out = lib.modalAnalysis(d.nodes, d.elements, d.ni, eiMass, 12, 1);
  R.nFreq = out.frequencies.length;
  R.T1 = out.frequencies[0] > 0 ? +(1 / out.frequencies[0]).toFixed(4) : 0;
} else {
  const out = lib.deform(d.nodes, d.elements, d.ni, d.ei);
  R.nDef = out.deformations.size;
}
R.ms_elapsed = +(performance.now() - t0).toFixed(0);
R.heap_pico_MB = MB(lib.mod.HEAPU8.length);
R.ok = true;
console.log(JSON.stringify(R));
