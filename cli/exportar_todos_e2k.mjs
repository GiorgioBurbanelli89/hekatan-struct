#!/usr/bin/env node
/**
 * Exporta a .e2k TODOS los ejemplos del workspace, ordenados en carpetas con
 * el mismo arbol de categorias que usa el selector.
 *
 *   node cli/exportar_todos_e2k.mjs [carpeta-destino]
 *
 * Por defecto escribe en `validation/modelos/e2k/`. Las carpetas van sin emojis y
 * en minusculas (`1-frames/1-gdl-axial/galpon.e2k`): el arbol se mantiene, pero
 * un nombre de carpeta con emoji da guerra en Windows, en git y al copiarlo a
 * otra maquina.
 *
 * Solo los .e2k, que son TEXTO: se ve el diff y es el formato de intercambio
 * que documenta CSI. Los .edb son binarios, pesan y no se pueden diferenciar,
 * asi que su carpeta va ignorada en git (ver validation/modelos/edb/LEEME.md).
 *
 * Los ejemplos `legacy` del upstream no tienen `build()` y no se pueden
 * exportar: se listan al final para que quede dicho, no callado.
 */
import { mkdirSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DESTINO = process.argv[2] || join(__dirname, "..", "validation/modelos", "e2k");

/** "2️⃣ Shells · 🧰 Cimentaciones" -> ["2-shells", "cimentaciones"] */
function carpetasDe(cat) {
  return (cat || "sin-categoria").split(" · ").map((seg) =>
    seg.normalize("NFD")
       .replace(/[\u0300-\u036f]/g, "")            // tildes
       .replace(/[^\x20-\x7E]/g, "")               // emojis y demas
       .trim()
       .toLowerCase()
       .replace(/\s+/g, "-")
       .replace(/[^a-z0-9-]/g, "")
       .replace(/^-+|-+$/g, "") || "otros");
}

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

export function lista() {
  return examplesRegistry.map((e) => ({ id: e.id, name: e.name, cat: e.category,
    tiene: typeof e.build === "function", bench: !!e.benchmark }));
}
export function generar(id) {
  const ex = examplesRegistry.find((e) => e.id === id);
  const p = {}; for (const [k, d] of Object.entries(ex.params || {})) p[k] = d.default;
  // Los states son de VanJS y algunos ejemplos leen .rawVal (el valor sin
  // suscribirse) en vez de .val: las zapatas Winkler hacen
  // states.deformOutputs.rawVal.deformations, y con un shim que solo tenia
  // .val reventaban con "Cannot read properties of undefined". Los dos nombres
  // tienen que ver el MISMO valor.
  // (Sin acentos graves aqui dentro: esto vive en un template literal y un
  //  acento grave lo cierra — costo un SyntaxError.)
  const estado = (ini) => {
    let v = ini;
    return { get val() { return v; }, set val(x) { v = x; },
             get rawVal() { return v; }, set rawVal(x) { v = x; } };
  };
  const st = { nodes: estado([]), elements: estado([]), nodeInputs: estado({}),
               elementInputs: estado({}), deformOutputs: estado({}),
               analyzeOutputs: estado({}), objects3D: estado([]) };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const nodes = st.nodes.val || [], elements = st.elements.val || [];
  if (!nodes.length || !elements.length) return null;      // lienzo vacio, utilidades
  const e2k = exportE2k({ nodes, elements,
    nodeInputs: st.nodeInputs.val, elementInputs: st.elementInputs.val,
    title: ex.name, units: { force: "Tonf", length: "m" }, weightMode: "manual" });
  return { e2k, nNodos: nodes.length, nElem: elements.length };
}`, "exportar-todos");

if (existsSync(DESTINO)) rmSync(DESTINO, { recursive: true, force: true });
mkdirSync(DESTINO, { recursive: true });

const escritos = [], vacios = [], fallados = [], sinBuild = [];
const indice = [];

for (const ex of mod.lista()) {
  if (!ex.tiene) { sinBuild.push(ex); continue; }
  let r = null;
  try { r = mod.generar(ex.id); }
  catch (e) { fallados.push([ex.id, String((e && e.message) || e).slice(0, 60)]); continue; }
  if (!r) { vacios.push(ex.id); continue; }
  const partes = carpetasDe(ex.cat);
  const carpeta = join(DESTINO, ...partes);
  mkdirSync(carpeta, { recursive: true });
  const ruta = join(carpeta, `${ex.id}.e2k`);
  writeFileSync(ruta, r.e2k, "utf-8");
  escritos.push(ex.id);
  indice.push({ cat: ex.cat, partes, id: ex.id, name: ex.name,
                nNodos: r.nNodos, nElem: r.nElem, bench: ex.bench });
}

// ── indice legible dentro de la carpeta ──
indice.sort((a, b) => (a.cat + a.id).localeCompare(b.cat + b.id));
const md = ["# Modelos .e2k de los ejemplos de Hekatan Struct Lineal", "",
  "Generado con `node cli/exportar_todos_e2k.mjs` — **no editar a mano**.",
  "Mismo árbol que el selector del workspace. Cada fichero sale del mismo",
  "`exportE2k` que usa el botón de la interfaz, con `weightMode: \"manual\"`",
  "(SELFWEIGHT 0 y las cargas como POINTLOAD) para que ETABS no meta su propio",
  "peso propio y se comparen dos cosas distintas.", "",
  `**${escritos.length} modelos.**`, "",
  "| categoría | ejemplo | nudos | elementos | fichero |", "|---|---|---|---|---|"];
for (const i of indice)
  md.push(`| ${i.cat} | ${i.bench ? "🏁 " : ""}${i.name} | ${i.nNodos} | ${i.nElem} | \`${i.partes.join("/")}/${i.id}.e2k\` |`);
if (sinBuild.length) {
  md.push("", "## Sin exportar", "",
    "Los ejemplos heredados del upstream abren una página aparte y no tienen",
    "`build()`, así que no hay modelo que exportar:", "");
  for (const e of sinBuild) md.push(`- \`${e.id}\` — ${e.name}`);
}
if (vacios.length) md.push("", "Sin elementos (utilidades y lienzos vacíos): " +
  vacios.map((v) => `\`${v}\``).join(", "));
if (fallados.length) {
  md.push("", "## No se pudieron construir", "");
  for (const [id, err] of fallados) md.push(`- \`${id}\` — ${err}`);
}
writeFileSync(join(DESTINO, "INDICE.md"), md.join("\n") + "\n", "utf-8");

console.log(`escritos   ${escritos.length}`);
console.log(`sin build  ${sinBuild.length}  (legacy standalone)`);
console.log(`vacios     ${vacios.length}  (utilidades)`);
console.log(`fallados   ${fallados.length}`);
for (const [id, err] of fallados.slice(0, 8)) console.log(`   ${id}: ${err}`);
console.log(`\n-> ${DESTINO}`);
