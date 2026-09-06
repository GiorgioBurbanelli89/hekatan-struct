#!/usr/bin/env node
/**
 * Exporta un ejemplo del workspace a `.f2k` (SAFE) SIN navegador, por el mismo camino que el
 * boton «Exportar F2K» cuando el ejemplo deja sus muelles en `nodeInputs.springs`:
 *
 *   node cli/f2k_desde_ejemplo.mjs <id> [<salida.f2k>] [clave=valor ...]
 *
 * Imprime lo que lleva el fichero (nudos, cascaras, barras, nudos con muelle, nudos cargados,
 * suma de FZ) para comprobar que es el MODELO y no una zapata por defecto (6-sep-2026: Guerra
 * ej1-8 y safe-bench-* salian como 1.5x1.5x0.30 sin carga desde el deploy publico).
 */
import { writeFileSync } from "node:fs";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const id = process.argv[2];
if (!id) { console.error("uso: node cli/f2k_desde_ejemplo.mjs <id> [salida.f2k] [clave=valor ...]"); process.exit(2); }
const salida = (process.argv[3] && !process.argv[3].includes("=")) ? process.argv[3] : null;

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
const { exportF2k } = await import("${R}/examples/src/shared/f2kExporter");

export function generar(id, over) {
  const ex = examplesRegistry.find((e) => e.id === id);
  if (!ex) throw new Error("no existe el ejemplo '" + id + "'");
  const p = {}; for (const [k, d] of Object.entries(ex.params || {})) p[k] = d.default;
  Object.assign(p, over || {});
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const ni = st.nodeInputs.val;
  const springs = Array.isArray(ni.springs) ? ni.springs : [];
  const cargas = ni.loadsSolver ?? ni.loads ?? new Map();
  let sumFz = 0, nCargados = 0;
  for (const f of cargas.values()) { if (f.some(v => Math.abs(v) > 1e-12)) nCargados++; sumFz += f[2]; }
  const f2k = springs.length ? exportF2k({ nodes: st.nodes.val, elements: st.elements.val, nodeInputs: ni, elementInputs: st.elementInputs.val, title: id }) : null;
  return { f2k, nNodos: st.nodes.val.length, nShells: st.elements.val.filter(e => e.length >= 3).length,
    nBarras: st.elements.val.filter(e => e.length === 2).length,
    nudosMuelle: new Set(springs.map(s => s.node)).size, sumKz: springs.filter(s => s.dof === 2).reduce((a, s) => a + s.k, 0),
    nCargados, sumFz, tieneSprings: springs.length > 0 };
}`, "f2k-desde-ejemplo");

const over = Object.fromEntries(process.argv.slice(3).filter(a => a.includes("=")).map(a => {
  const [k, v] = a.split("="); return [k, isNaN(Number(v)) ? v : Number(v)];
}));
const r = mod.generar(id, over);
const cnt = (re) => (r.f2k?.match(re) || []).length;
console.log(JSON.stringify({ id, ...r, f2k: undefined,
  f2k_puntos: cnt(/^\s*UniqueName=\S+\s+"Is Auto Point"/gm), f2k_areas: cnt(/^\s*UniqueName=\S+\s+"Property Type"=Slab/gm),
  f2k_muelles: cnt(/^\s*UniqueName=\S+\s+SpringProp=/gm), f2k_cargas: cnt(/^\s*UniqueName=\S+\s+"Load Pattern"=/gm), bytes: r.f2k?.length ?? 0 }));
if (salida && r.f2k) { writeFileSync(salida, r.f2k, "utf-8"); console.log("→", salida); }
