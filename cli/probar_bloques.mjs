#!/usr/bin/env node
/**
 * Prueba los BLOQUES que deja `cli/trocear_e2k.py`: .monta, se sostiene, resuelve?
 *
 *   node cli/probar_bloques.mjs [carpeta]
 *
 * El bloque en el que deja de resolver es el que tiene el problema. Se miran
 * tres cosas por bloque, en este orden, porque cada una explica la siguiente:
 *
 *   MONTA     nudos, barras y areas que salen del fichero
 *   COSIDO    nudos que tocan UN solo elemento, o ninguno — los sospechosos
 *   RESUELVE  si `deform` devuelve desplazamientos, y la flecha
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CARPETA = process.argv[2] || join(__dirname, "..", "validation", "modelos", "bloques");
if (!existsSync(CARPETA)) { console.error("no existe " + CARPETA); process.exit(2); }

const mod = await empaquetar(`
const g = globalThis; g.window = g;
g.document = { createElement: () => ({ style:{}, getContext:()=>null }), body:{}, head:{},
  querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){} });
const { parseE2k } = await import("${R}/examples/src/shared/e2kParser");
const { deform } = await import("${R}/hekatan-fem/src/index");

export function probar(texto) {
  const m = parseE2k(texto);
  // Fuera los huerfanos: 6 GDL sin rigidez cada uno hacen singular la matriz y
  // taparian lo que se quiere ver.
  const usado = new Set();
  for (const el of m.elements) for (const n of el) usado.add(n);
  const huerfanos = m.nodes.length - usado.size;
  const mapa = new Map();
  const nodes = [];
  m.nodes.forEach((n, i) => { if (usado.has(i)) { mapa.set(i, nodes.length); nodes.push(n); } });
  const elements = m.elements.map(el => el.map(i => mapa.get(i)));
  const remap = (mm) => { if (!(mm instanceof Map)) return mm;
    const o = new Map(); for (const [i, v] of mm) { const j = mapa.get(i); if (j !== undefined) o.set(j, v); } return o; };
  const ni = { ...m.nodeInputs, supports: remap(m.nodeInputs.supports), loads: remap(m.nodeInputs.loads) };

  const grado = new Map();
  for (const el of elements) for (const n of el) grado.set(n, (grado.get(n) || 0) + 1);
  const soloUno = [...grado.values()].filter(v => v === 1).length;

  let resuelve = false, uz = 0, nDef = 0, err = "";
  try {
    const d = deform(nodes, elements, ni, m.elementInputs);
    nDef = d?.deformations?.size ?? 0;
    resuelve = nDef > 0;
    for (const [, v] of (d?.deformations ?? [])) if (v[2] < uz) uz = v[2];
  } catch (e) { err = String(e?.message || e).slice(0, 40); }

  return { nNodos: nodes.length, huerfanos,
    nBarras: elements.filter(e => e.length === 2).length,
    nShells: elements.filter(e => e.length === 3 || e.length === 4).length,
    areasVistas: m.info.nAreas, areasMontadas: m.info.nAreasMontadas ?? 0,
    apoyos: ni.supports ? ni.supports.size : 0,
    soloUno, resuelve, nDef, uz, err };
}`, "probar-bloques");

const ficheros = readdirSync(CARPETA).filter(f => f.endsWith("_A.e2k")).sort();
console.log("bloque                  nudos  huerf  barras  shells  areas   apoyos  cuelgan  .resuelve?   Uz [mm]");
console.log("-".repeat(112));
for (const f of ficheros) {
  const r = mod.probar(readFileSync(join(CARPETA, f), "utf-8"));
  console.log(
    basename(f, "_A.e2k").padEnd(22) +
    String(r.nNodos).padStart(7) + String(r.huerfanos).padStart(7) +
    String(r.nBarras).padStart(8) + String(r.nShells).padStart(8) +
    (r.areasMontadas + "/" + r.areasVistas).padStart(9) +
    String(r.apoyos).padStart(8) + String(r.soloUno).padStart(9) + "   " +
    (r.resuelve ? "SI" : "NO").padEnd(11) +
    (r.resuelve ? (r.uz * 1000).toFixed(3) : (r.err || "0 desplazamientos")));
}
