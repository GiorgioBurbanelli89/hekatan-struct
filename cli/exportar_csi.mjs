#!/usr/bin/env node
/**
 * Exporta un ejemplo del workspace a los TEXTOS de CSI, sin navegador:
 * `.e2k` (ETABS) y `.s2k` (SAP2000).
 *
 *   node cli/exportar_csi.mjs <id> <salida-sin-extension> [clave=valor ...]
 *
 * Construye el ExampleDef con sus parametros por defecto y llama al MISMO
 * `exportE2k` que usa el boton de la interfaz — no una copia. Sirve para
 * llevarselo a ETABS y arbitrar de verdad:
 *
 *   python ../galpon-bodega-electoral/e2k_vs_etabs_coords.py <e2k> coords.json
 *   python ../galpon-bodega-electoral/e2k_vs_etabs_modelo.py <e2k> modelo.json
 *
 * `weightMode: "manual"` va a proposito: pone SELFWEIGHT 0 y emite las cargas
 * como POINTLOAD. Sin eso ETABS usa su peso propio y DROPEA las cargas
 * impuestas, y se compararian dos cosas distintas.
 */
import { writeFileSync } from "node:fs";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const id = process.argv[2];
const salida = process.argv[3];
if (!id || !salida) {
  console.error("uso: node cli/exportar_csi.mjs <id-del-ejemplo> <salida-sin-extension> [clave=valor ...]");
  process.exit(2);
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
const { exportS2k } = await import("${R}/examples/src/shared/s2kExporter");

export function generar(id, over) {
  const ex = examplesRegistry.find((e) => e.id === id);
  if (!ex) throw new Error("no existe el ejemplo '" + id + "'");
  if (typeof ex.build !== "function") throw new Error("'" + id + "' es legacy standalone: no tiene build()");
  const p = {}; for (const [k, d] of Object.entries(ex.params || {})) p[k] = d.default;
  Object.assign(p, over || {});
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const comun = { nodes: st.nodes.val, elements: st.elements.val,
    nodeInputs: st.nodeInputs.val, elementInputs: st.elementInputs.val,
    title: ex.name, units: { force: "Tonf", length: "m" } };
  // weightMode:"manual" y selfWtMult:0 a proposito (sin backticks: esto vive
  // DENTRO de un template literal y un backtick lo cierra): el peso propio no es
  // parte de estos ensayos, y si el motor de CSI lo mete por su cuenta se
  // comparan dos cargas distintas.
  const e2k = exportE2k({ ...comun, weightMode: "manual" });
  // cftas=general en la linea de comandos: columnas CFT como seccion General en el
  // .s2k (por defecto Section Designer, como el boton de la interfaz). Sin backticks aqui.
  const cftAs = process.argv.some(a => a.toLowerCase() === "cftas=general") ? "general" : "sd";
  const s2k = exportS2k({ ...comun, selfWtMult: 0, cftAs });
  return { e2k, s2k, nNodos: st.nodes.val.length, nElem: st.elements.val.length };
}`, "exportar-e2k");

// overrides opcionales:  node cli/exportar_e2k.mjs plantillas out.e2k tipo=6 tmuro=0.25
const over = Object.fromEntries(process.argv.slice(4).map(a => {
  const [k, v] = a.split("="); return [k, isNaN(Number(v)) ? v : Number(v)];
}));
const { e2k, s2k, nNodos, nElem } = mod.generar(id, over);
const base = salida.replace(/\.(e2k|s2k)$/i, "");
writeFileSync(base + ".e2k", e2k, "utf-8");
writeFileSync(base + ".s2k", s2k, "utf-8");
console.log(`${id}: ${nNodos} nudos · ${nElem} elementos → ${base}.e2k  +  ${base}.s2k`);
