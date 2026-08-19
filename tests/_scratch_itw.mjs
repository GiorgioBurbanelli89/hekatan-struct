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

export function correr(id, over) {
  const ex = examplesRegistry.find(e => e.id === id);
  if (!ex) throw new Error("no existe " + id);
  const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default;
  Object.assign(p, over||{});
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]}, springs:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const def = st.deformOutputs.val?.deformations;
  const d = []; for (let i=0;i<st.nodes.val.length;i++) d.push(Array.from(def?.get(i)||[0,0,0,0,0,0]));
  return { nodos: st.nodes.val, elems: st.elements.val.length, d };
}
`;
const m = await empaquetar(FUENTE, "itw");
const F = (v) => v.toFixed(6);

console.log("\n=== ITW I  patch test (exacto: flecha 1.5, giro 0.6) ===");
for (const nx of [2,4,6,12]) {
  const r = m.correr("itw-patch-test", { nx });
  const g = (x,z)=> r.nodos.findIndex(n=>Math.abs(n[0]-x)<1e-9 && Math.abs(n[2]-z)<1e-9);
  const fl = 0.5*(r.d[g(5,0)][2] + r.d[g(5,1)][2]);
  const gi = 0.5*(r.d[g(10,0)][4] + r.d[g(10,1)][4]);
  console.log(`  nx=${nx}  flecha=${F(fl)}   giro=${F(gi)}`);
}
console.log("\n=== ITW II cantilever (exacto 0.3553 · paper 4x1=0.3445 8x2=0.3504 16x4=0.3543) ===");
for (const [nx,ny] of [[4,1],[8,2],[16,4]]) {
  const r = m.correr("itw-cantilever", { nx, ny });
  const g = (x,z)=> r.nodos.findIndex(n=>Math.abs(n[0]-x)<1e-9 && Math.abs(n[2]-z)<1e-9);
  const uz = 0.5*(r.d[g(48,0)][2] + r.d[g(48,12)][2]);
  console.log(`  ${nx}x${ny}  flecha=${F(uz)}`);
}
console.log("\n=== ITW III Cook (referencia 23.91 en C=(48,52)) ===");
for (const n of [2,4,8,16]) {
  const r = m.correr("itw-cook", { n });
  const g = (x,z)=> r.nodos.findIndex(nd=>Math.abs(nd[0]-x)<1e-6 && Math.abs(nd[2]-z)<1e-6);
  console.log(`  ${n}x${n}  C=${r.d[g(48,52)][2].toFixed(4)}   esquina=${r.d[g(48,60)][2].toFixed(4)}`);
}
console.log("\n=== ITW IV hemisferio (referencia 0.094) ===");
for (const n of [4,8,12]) {
  const r = m.correr("itw-hemisferio", { n });
  console.log(`  ${n}x${n}  ux bajo carga = ${F(r.d[r.nodos.findIndex(nd=>Math.abs(nd[2])<1e-9 && Math.abs(nd[1])<1e-9)][0])}`);
}
