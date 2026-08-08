#!/usr/bin/env node
/**
 * Validación del cambio SparseLU → SimplicialLDLT en deform.cpp.
 *
 * Compara el WASM NUEVO contra el ANTERIOR (deform.wasm.bak) sobre los mismos modelos:
 *   - desplazamientos nodales: deben ser IGUALES salvo redondeo (mismo sistema, otra
 *     factorización). Se reporta la diferencia relativa máxima.
 *   - memoria y tiempo: es lo que se quiere mejorar.
 * Y re-corre el modal para verificar que los periodos siguen coincidiendo con ETABS 22.
 *
 * Uso: node validar_ldlt.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BUILT = join(__dirname, "hekatan-fem", "src", "cpp", "built");

// Genera un módulo de harness apuntando a un deform.js concreto (nuevo o .bak)
function libSrc(jsRel) {
  const src = readFileSync(join(__dirname, "sweep_case.mjs"), "utf8");
  const cut = src.indexOf("// ────────── caso ──────────");
  let head = src.slice(0, cut);
  head = head.replace(/const jsPath = .*?;\n/s, `const jsPath = ${JSON.stringify(jsRel)};\n`);
  head = head.replace(/const wasmPath = .*?;\n/s, `const wasmPath = ${JSON.stringify(jsRel.replace(/\.js$/, ".wasm"))};\n`);
  return head + "\nexport { buildEdificio, deform, modalAnalysis, mod };\n";
}

async function cargar(tag, jsPath) {
  const f = join(__dirname, `.val_${tag}.mjs`);
  writeFileSync(f, libSrc(jsPath));
  return import(pathToFileURL(f).href + `?v=${tag}`);
}

const base = { nWalls: 1, tWall: 0.25, tSlab: 0.20, bCol: 0.40, bBeam: 0.30, hBeam: 0.50, q: 1.0 };
const sys = { slab: true, walls: true };
const CASOS = [[2,2,4,0.75],[3,3,4,0.75],[4,4,8,0.75],[6,6,8,0.75]];
const MB = b => Math.round(b / 1048576);

// El WASM viejo y el nuevo NO pueden convivir en el mismo proceso sin ensuciar la
// medición de memoria (el heap sólo crece), así que se corre uno por invocación.
const CUAL = process.argv[2] || "nuevo";
const jsPath = CUAL === "viejo" ? join(BUILT, "deform.js.bak") : join(BUILT, "deform.js");
if (!existsSync(jsPath)) { console.error("no existe", jsPath); process.exit(1); }
// el .bak es un .js con otro nombre → copiarlo a un nombre importable
let usar = jsPath;
if (CUAL === "viejo") {
  usar = join(BUILT, "deform_viejo.js");
  writeFileSync(usar, readFileSync(jsPath, "utf8").replace(/deform\.wasm/g, "deform_viejo.wasm"));
  writeFileSync(join(BUILT, "deform_viejo.wasm"), readFileSync(join(BUILT, "deform.wasm.bak")));
}

const lib = await cargar(CUAL, usar);
const out = { cual: CUAL, casos: [] };
console.log(`WASM: ${CUAL}`);
console.log("caso        GDL   heapMB   tDeform   tModal      T1     SumUy   |u|max");
console.log("-".repeat(78));
for (const [nbx, nby, nF, ms] of CASOS) {
  const r = { tag: `${nbx}x${nby}x${nF}` };
  try {
    const d = lib.buildEdificio({ ...base, nbx, nby, nFloors: nF, ms }, sys);
    r.dof = d.nodes.length * 6;
    let t = performance.now();
    const def = lib.deform(d.nodes, d.elements, d.ni, d.ei);
    r.tDeform = Math.round(performance.now() - t);
    r.heap = MB(lib.mod.HEAPU8.length);
    // firma numérica: desplazamiento máximo + suma, para comparar entre WASMs
    let umax = 0, usum = 0;
    for (const v of def.deformations.values()) {
      for (const c of v) { const a = Math.abs(c); if (a > umax) umax = a; usum += c; }
    }
    r.umax = umax; r.usum = usum; r.nDef = def.deformations.size;
    // modal en malla 1.0 (la del método 3)
    const dm = lib.buildEdificio({ ...base, nbx, nby, nFloors: nF, ms: 1.0 }, sys);
    const eiMass = { ...dm.ei, densities: new Map([...dm.ei.densities].map(([k, v]) => [k, v / 9.80665])) };
    t = performance.now();
    const mo = lib.modalAnalysis(dm.nodes, dm.elements, dm.ni, eiMass, 24, 1);
    r.tModal = Math.round(performance.now() - t);
    r.T = mo.frequencies.slice(0, 3).map(f => f > 0 ? +(1 / f).toFixed(5) : 0);
    const mp = mo.massParticipation || [];
    r.sumUy = +(mp.reduce((s, x) => s + (x[1] || 0), 0) * 100).toFixed(2);
    r.heapFinal = MB(lib.mod.HEAPU8.length);
  } catch (e) { r.error = String(e?.message || e).slice(0, 140); }
  out.casos.push(r);
  console.log(`${r.tag.padEnd(9)} ${String(r.dof ?? "-").padStart(6)} ${String(r.heapFinal ?? r.heap ?? "-").padStart(7)} ${String(r.tDeform ?? "-").padStart(8)} ${String(r.tModal ?? "-").padStart(8)} ${String(r.T?.[0] ?? "-").padStart(8)} ${String(r.sumUy ?? "-").padStart(7)} ${r.umax != null ? r.umax.toExponential(6) : (r.error || "-")}`);
}
writeFileSync(join(__dirname, `validar_ldlt_${CUAL}.json`), JSON.stringify(out, null, 1));
console.log(`\n→ cli/validar_ldlt_${CUAL}.json`);
