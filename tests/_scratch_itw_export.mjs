import { writeFileSync, mkdirSync } from "node:fs";
import { empaquetar, R } from "./lib/bundle.mjs";
const FUENTE = `
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

export function exportar(id, over, titulo) {
  const ex = examplesRegistry.find(e => e.id === id);
  const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default;
  Object.assign(p, over||{});
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]}, springs:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const arg = { nodes: st.nodes.val, elements: st.elements.val,
                nodeInputs: st.nodeInputs.val, elementInputs: st.elementInputs.val,
                title: titulo, units: { force: "KN", length: "M" } };
  const def = st.deformOutputs.val?.deformations;
  const d = []; for (let i=0;i<st.nodes.val.length;i++) d.push(Array.from(def?.get(i)||[0,0,0,0,0,0]));
  const ei = st.elementInputs.val, ni = st.nodeInputs.val;
  return { e2k: exportE2k({ ...arg, diaphragm: "none", weightMode: "manual" }),
           s2k: exportS2k({ ...arg, selfWtMult: 0 }),
           nodos: st.nodes.val, nElem: st.elements.val.length, d,
           // modelo crudo, para reconstruirlo en ETABS por la OAPI (sin e2k:
           // el e2k va por STORIES y Cook / el hemisferio no tienen niveles)
           modelo: {
             nodes: st.nodes.val,
             elements: st.elements.val,
             supports: [...(ni.supports||new Map())].map(([k,v])=>[k,v]),
             loads: [...(ni.loads||new Map())].map(([k,v])=>[k,v]),
             t: [...(ei.thicknesses||new Map())][0]?.[1],
             E: [...(ei.elasticities||new Map())][0]?.[1],
             nu: [...(ei.poissonsRatios||new Map())][0]?.[1],
           } };
}
`;
const m = await empaquetar(FUENTE, "itw-export");
const DIR = process.argv[2] || "modelos-etabs/e2k/9-itw";
mkdirSync(DIR, { recursive: true });
const CASOS = [
  ["itw-patch-test", { nx: 6 },            "ITW I patch test viga flexion pura"],
  ["itw-cantilever", { nx: 16, ny: 4 },    "ITW II cantilever corto"],
  ["itw-cook",       { n: 8 },             "ITW III membrana de Cook"],
  ["itw-hemisferio", { n: 8 },             "ITW IV hemisferio pinzado 18 grados"],
];
const res = {};
for (const [id, over, tit] of CASOS) {
  const r = m.exportar(id, over, tit);
  writeFileSync(`${DIR}/${id}.e2k`, r.e2k, "utf8");
  writeFileSync(`${DIR}/${id}.s2k`, r.s2k, "utf8");
  res[id] = { nodos: r.nodos, d: r.d, modelo: r.modelo };
  console.log(`${id}: ${r.nodos.length} nudos, ${r.nElem} elem  ->  ${id}.e2k / .s2k`);
}
writeFileSync(`${DIR}/hekatan_ref.json`, JSON.stringify(res), "utf8");
console.log("escrito hekatan_ref.json con los desplazamientos de Hekatan");
