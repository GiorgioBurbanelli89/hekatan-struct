#!/usr/bin/env node
/**
 * EL CICLO CERRADO de las AREAS:  Hekatan -> .e2k -> ETABS -> .e2k -> Hekatan
 *
 *   node cli/roundtrip_areas.mjs              # TODOS los ejemplos con area
 *   node cli/roundtrip_areas.mjs plantillas   # solo unos cuantos, por id
 *
 * Tres modelos y dos preguntas:
 *
 *   A = el modelo de Hekatan
 *   B = lo que ETABS entendio del `.e2k` de A   (lo mide `plantillas_etabs.py`)
 *   C = lo que Hekatan entiende del `.e2k` que ETABS escribe de vuelta
 *
 *   .A == B?   ya medido aparte: geometria 8/8, estatico 0.000 %
 *   .A == C?   ES ESTO, y es otra pregunta: exportar bien no implica leer bien.
 *
 * Se barren TODOS los ejemplos del registry que tengan area, no una muestra:
 * una losa se declara de muchas maneras (Q4, triangulo, muro PANEL, deck,
 * membrana, con modificadores, girada) y basta UNA que no sobreviva para que el
 * ciclo tenga un agujero. Un area que se pierde al reimportar no da error: da un
 * modelo mas flojo, y eso se ve en la flecha, no en un mensaje.
 *
 * Se mira lo que define un area y no una barra: cuantas hay, su ESPESOR y el
 * tipo de cascara (Thin/Thick/Membrane).
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = join(__dirname, "..", "validation", "modelos", "roundtrip");
mkdirSync(BASE, { recursive: true });

const PEDIDOS = process.argv.slice(2);

const mod = await empaquetar(`
const g = globalThis; g.window = g;
const ctx2d = () => new Proxy({ font:"", measureText:()=>({width:10}),
  createLinearGradient:()=>({addColorStop(){}}), getImageData:()=>({data:new Uint8ClampedArray(4)}) },
  { get:(t,k)=> k in t ? t[k] : (()=>{}) });
const nodo = () => ({ style:{}, width:300, height:150, appendChild(){}, setAttribute(){},
  addEventListener(){}, removeEventListener(){}, classList:{add(){},remove(){},toggle(){},contains:()=>false},
  getContext:()=>ctx2d(), querySelector:()=>null, querySelectorAll:()=>[], remove(){}, insertBefore(){},
  cloneNode:()=>nodo(), toDataURL:()=>"", getBoundingClientRect:()=>({width:0,height:0,top:0,left:0}) });
g.document = { createElement: nodo, createElementNS: nodo, body: nodo(), head: nodo(),
  documentElement: nodo(), querySelector:()=>null, querySelectorAll:()=>[],
  addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {};
g.matchMedia = () => ({ matches:false, addEventListener(){}, addListener(){} });
const { examplesRegistry } = await import("${R}/examples/src/workspace/exampleRegistry");
const { exportE2k } = await import("${R}/examples/src/shared/e2kExporter");
const { parseE2k } = await import("${R}/examples/src/shared/e2kParser");

const estado = (ini) => { let v = ini;
  return { get val(){ return v; }, set val(x){ v = x; },
           get rawVal(){ return v; }, set rawVal(x){ v = x; } }; };

export function ids() {
  return examplesRegistry.filter(e => typeof e.build === "function").map(e => e.id);
}

/** A: el modelo de Hekatan, y su .e2k. Devuelve null si no lleva areas. */
export function original(id) {
  const ex = examplesRegistry.find((e) => e.id === id);
  if (!ex || typeof ex.build !== "function") return null;
  const p = {}; for (const [k, d] of Object.entries(ex.params || {})) p[k] = d.default;
  p.__soloModelo = true;
  const st = { nodes: estado([]), elements: estado([]), nodeInputs: estado({}),
               elementInputs: estado({}), deformOutputs: estado({}),
               analyzeOutputs: estado({}), objects3D: estado([]) };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const ei = st.elementInputs.val;
  const shells = st.elements.val.filter(e => e.length === 3 || e.length === 4);
  if (!shells.length) return null;
  const uniq = (m, f) => [...new Set([...(m ?? new Map()).values()].map(f ?? (v => v)))];
  return {
    id, nombre: ex.name,
    e2k: exportE2k({ nodes: st.nodes.val, elements: st.elements.val,
                     nodeInputs: st.nodeInputs.val, elementInputs: ei,
                     title: ex.name, units: { force: "Tonf", length: "m" },
                     weightMode: "manual" }),
    nNodos: st.nodes.val.length,
    nBarras: st.elements.val.filter(e => e.length === 2).length,
    nShells: shells.length,
    nTri: shells.filter(e => e.length === 3).length,
    espesores: uniq(ei.thicknesses, v => +v.toFixed(6)).sort((a,b)=>a-b),
    plateForm: uniq(ei.plateFormulations).sort(),
  };
}

/** C: lo que Hekatan entiende de un .e2k */
export function releer(texto) {
  const m = parseE2k(texto);
  const shells = m.elements.filter(e => e.length === 3 || e.length === 4);
  const uniq = (mm, f) => [...new Set([...(mm ?? new Map()).values()].map(f ?? (v => v)))];
  return {
    nNodos: m.nodes.length,
    nBarras: m.elements.filter(e => e.length === 2).length,
    nShells: shells.length,
    nAreasLeidas: m.info.nAreas,
    nAreasMontadas: m.info.nAreasMontadas ?? 0,
    espesores: uniq(m.elementInputs?.thicknesses, v => +v.toFixed(6)).sort((a,b)=>a-b),
    plateForm: uniq(m.elementInputs?.plateFormulations).sort(),
  };
}`, "roundtrip-areas");

const CANDIDATOS = PEDIDOS.length ? PEDIDOS : mod.ids();
const modelos = [];
for (const id of CANDIDATOS) {
  let A = null;
  try { A = mod.original(id); } catch { A = null; }
  if (A) modelos.push(A);
}

const f = (v) => JSON.stringify(v);
console.log("PASO 1 - .lee Hekatan sus PROPIAS areas al releer el .e2k que acaba de escribir?");
console.log(modelos.length + " ejemplos con area, de " + CANDIDATOS.length + " del registry\n");
console.log("ejemplo                        shells A   vistas  montadas   espesor A / C");
console.log("-".repeat(96));

let roto = 0;
const malosP1 = [];
for (const A of modelos) {
  writeFileSync(join(BASE, A.id + "_A.e2k"), A.e2k, "utf-8");
  let C;
  try { C = mod.releer(A.e2k); }
  catch (e) {
    console.log(A.id.padEnd(30) + " PARSER: " + String(e && e.message || e).slice(0, 50));
    roto++; malosP1.push(A.id); continue;
  }
  const ok = C.nShells === A.nShells && f(A.espesores) === f(C.espesores);
  if (!ok) { roto++; malosP1.push(A.id); }
  console.log(A.id.padEnd(30) + String(A.nShells).padStart(8) + String(C.nAreasLeidas).padStart(8) +
    String(C.nAreasMontadas).padStart(9) + "   " +
    (f(A.espesores) + " / " + f(C.espesores)).padEnd(30) + (ok ? "OK" : "<--"));
}

// ── PASO 2: el .e2k que ETABS escribe de vuelta ──────────────────────────
// Lo produce `cli/roundtrip_areas_etabs.py`. Si no esta, se hace solo el paso 1.
const conVuelta = modelos.filter(A => existsSync(join(BASE, A.id + "_B.e2k")));
if (conVuelta.length) {
  console.log("\n\nPASO 2 - EL CICLO CERRADO:  Hekatan -> .e2k -> ETABS -> .e2k -> Hekatan");
  console.log("A = el modelo original, C = el que vuelve despues de pasar por ETABS\n");
  console.log("ejemplo                      nudos A/C     barras A/C    shells A/C    espesor A / C          forma");
  console.log("-".repeat(108));
  let malos = 0;
  for (const A of conVuelta) {
    const C = mod.releer(readFileSync(join(BASE, A.id + "_B.e2k"), "utf-8"));
    const ok = C.nShells === A.nShells && f(A.espesores) === f(C.espesores);
    if (!ok) malos++;
    console.log(A.id.padEnd(28) + (A.nNodos + "/" + C.nNodos).padStart(12) +
      (A.nBarras + "/" + C.nBarras).padStart(13) + (A.nShells + "/" + C.nShells).padStart(13) + "  " +
      (f(A.espesores) + " / " + f(C.espesores)).padEnd(22) + " " +
      (f(A.plateForm) + "/" + f(C.plateForm)).padEnd(9) + (ok ? "OK" : "<--"));
  }
  console.log(malos
    ? "\n" + malos + " de " + conVuelta.length + " NO sobreviven el ciclo completo."
    : "\nLas AREAS de los " + conVuelta.length + " sobreviven el ciclo entero: salen de Hekatan, pasan por ETABS y vuelven iguales.");
} else {
  console.log("\nsin la vuelta de ETABS: corre  python cli/roundtrip_areas_etabs.py");
}

if (roto) {
  console.log("\n" + roto + " de " + modelos.length + " no releen sus propias areas: " + malosP1.join(", "));
  process.exitCode = 1;
} else {
  console.log("\nLos " + modelos.length + " releen sus propias areas.");
}
