#!/usr/bin/env node
/**
 * Exporta a .e2k un ejemplo del workspace, sin navegador.
 *
 *   node cli/exportar_e2k.mjs <id> <salida.e2k>
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
  console.error("uso: node cli/exportar_e2k.mjs <id-del-ejemplo> <salida.e2k>");
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

export function generar(id) {
  const ex = examplesRegistry.find((e) => e.id === id);
  if (!ex) throw new Error("no existe el ejemplo '" + id + "'");
  if (typeof ex.build !== "function") throw new Error("'" + id + "' es legacy standalone: no tiene build()");
  const p = {}; for (const [k, d] of Object.entries(ex.params || {})) p[k] = d.default;
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const e2k = exportE2k({ nodes: st.nodes.val, elements: st.elements.val,
    nodeInputs: st.nodeInputs.val, elementInputs: st.elementInputs.val,
    title: ex.name, units: { force: "Tonf", length: "m" }, weightMode: "manual" });
  return { e2k, nNodos: st.nodes.val.length, nElem: st.elements.val.length };
}`, "exportar-e2k");

const { e2k, nNodos, nElem } = mod.generar(id);
writeFileSync(salida, e2k, "utf-8");
console.log(`${id}: ${nNodos} nudos · ${nElem} elementos → ${salida}`);
