import { empaquetar, R } from "../tests/lib/bundle.mjs";
const FUENTE = `
const g = globalThis; g.window = g;
const ctx2d = () => new Proxy({ font:"", measureText:()=>({width:10}), createLinearGradient:()=>({addColorStop(){}}), getImageData:()=>({data:new Uint8ClampedArray(4)}) }, { get:(t,k)=> k in t ? t[k] : (()=>{}) });
const nodo = () => ({ style:{}, width:300, height:150, appendChild(){}, setAttribute(){}, addEventListener(){}, removeEventListener(){}, classList:{add(){},remove(){},toggle(){},contains:()=>false}, getContext:()=>ctx2d(), querySelector:()=>null, querySelectorAll:()=>[], remove(){}, insertBefore(){}, cloneNode:()=>nodo(), toDataURL:()=>"", getBoundingClientRect:()=>({width:0,height:0,top:0,left:0}) });
g.document = { createElement: nodo, createElementNS: nodo, body: nodo(), head: nodo(), documentElement: nodo(), querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} }; g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){}, addListener(){} });
const { examplesRegistry } = await import("${R}/examples/src/workspace/exampleRegistry");
export function medir(over) {
  const ex = examplesRegistry.find(e => e.id === "plantillas");
  const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default; Object.assign(p, over);
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}}, deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]}, springs:{val:[]} };
  const t0 = Date.now(); ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} }); const ms = Date.now() - t0;
  const shells = st.elements.val.filter(e => e.length === 4).length, barras = st.elements.val.filter(e => e.length === 2).length;
  let uz = 0; st.deformOutputs.val?.deformations?.forEach(u => { if (u[2] < uz) uz = u[2]; });
  return { nudos: st.nodes.val.length, gdl: 6*st.nodes.val.length, barras, shells, ms, uz_mm: +(uz*1000).toFixed(3), mem_MB: Math.round(process.memoryUsage().rss/1e6) };
}`;
const mod = await empaquetar(FUENTE, "medir-plantilla");
const casos = JSON.parse(process.argv[2]);
for (const c of casos) console.log(JSON.stringify({ ...c, ...mod.medir(c) }));
