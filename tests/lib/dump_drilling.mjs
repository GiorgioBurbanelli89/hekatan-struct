import { empaquetar, R } from "./bundle.mjs";
import { writeFileSync } from "node:fs";
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
g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){}, addListener(){} });
const { examplesRegistry } = await import("${R}/examples/src/workspace/exampleRegistry");
export function correr(id, dt) {
  const ex = examplesRegistry.find(e => e.id === id);
  const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default;
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]}, springs:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const def = st.deformOutputs.val?.deformations;
  const out = [];
  for (let i = 0; i < st.nodes.val.length; i++) out.push({ i, xyz: st.nodes.val[i], u: def?.get(i) ?? null });
  const ao = st.analyzeOutputs.val; const fr = {}; for (const k of ["normal","shearZ","shearY","bendingY","bendingZ"]) { const m = ao?.[k]; if (m) fr[k] = [64,65,66].map(i => m.get(i) ?? null); }
  return { nudos: out, elements: st.elements.val, frames: fr };
}`;
const mod = await empaquetar(FUENTE, "dump-drilling");
const r = mod.correr("drilling-dof");
writeFileSync(process.argv[2], JSON.stringify({ nudos: r.nudos, elements: r.elements, frames: r.frames }));
console.log("nudos", r.nudos.length);
