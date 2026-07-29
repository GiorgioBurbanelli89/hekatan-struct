#!/usr/bin/env node
/**
 * ¿El módulo WASM sobrevive a un OOM? Corre un modelo enorme (revienta los 2 GB) y
 * DESPUÉS intenta un modelo chico. Si el chico también falla, el abort es irrecuperable:
 * en el navegador significa que TODO el workspace queda muerto hasta recargar la página.
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(__dirname, "sweep_case.mjs"), "utf8");
const cut = src.indexOf("// ────────── caso ──────────");
const tmp = join(__dirname, ".abort_lib.mjs");
writeFileSync(tmp, src.slice(0, cut) + "\nexport { buildEdificio, deform, modalAnalysis, mod };\n");
const lib = await import(pathToFileURL(tmp).href);

const base = { nWalls: 1, tWall: 0.25, tSlab: 0.20, bCol: 0.40, bBeam: 0.30, hBeam: 0.50, q: 1.0 };
const sys = { slab: true, walls: true };
const corre = (nbx, nby, nF, ms) => {
  const d = lib.buildEdificio({ ...base, nbx, nby, nFloors: nF, ms }, sys);
  const out = lib.deform(d.nodes, d.elements, d.ni, d.ei);
  return { dof: d.nodes.length * 6, n: out.deformations.size };
};

console.log("1) modelo CHICO antes del OOM (2x2x4, ms=0.75):");
try { const r = corre(2, 2, 4, 0.75); console.log("   OK — GDL", r.dof, "· deformaciones", r.n); }
catch (e) { console.log("   FALLA:", e?.message); }

console.log("2) modelo ENORME que revienta los 2 GB (6x6x8, ms=0.5):");
try { const r = corre(6, 6, 8, 0.5); console.log("   (no reventó) GDL", r.dof); }
catch (e) { console.log("   ABORT capturado:", String(e?.message || e).slice(0, 160)); }

console.log("3) MISMO modelo chico DESPUÉS del abort (¿se recupera?):");
try { const r = corre(2, 2, 4, 0.75); console.log("   SE RECUPERA — GDL", r.dof, "· deformaciones", r.n); }
catch (e) { console.log("   SIGUE MUERTO:", String(e?.message || e).slice(0, 160)); }
