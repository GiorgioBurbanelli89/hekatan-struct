import { empaquetar, R } from "../tests/lib/bundle.mjs";
const FUENTE = `
const g = globalThis; g.window = g;
const ctx2d = () => new Proxy({ font:"", measureText:()=>({width:10}), createLinearGradient:()=>({addColorStop(){}}), getImageData:()=>({data:new Uint8ClampedArray(4)}) }, { get:(t,k)=> k in t ? t[k] : (()=>{}) });
const nodo = () => ({ style:{}, width:300, height:150, appendChild(){}, setAttribute(){}, addEventListener(){}, removeEventListener(){}, classList:{add(){},remove(){},toggle(){},contains:()=>false}, getContext:()=>ctx2d(), querySelector:()=>null, querySelectorAll:()=>[], remove(){}, insertBefore(){}, cloneNode:()=>nodo(), toDataURL:()=>"", getBoundingClientRect:()=>({width:0,height:0,top:0,left:0}) });
g.document = { createElement: nodo, createElementNS: nodo, body: nodo(), head: nodo(), documentElement: nodo(), querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} }; g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){}, addListener(){} });
const { examplesRegistry } = await import("${R}/examples/src/workspace/exampleRegistry");
export function medir(id, over) {
  const ex = examplesRegistry.find(e => e.id === id);
  const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default; Object.assign(p, over);
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}}, deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]}, springs:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const nodes = st.nodes.val, els = st.elements.val, ao = st.analyzeOutputs.val || {};
  const esVertical = (e) => { const z = e.map(n => nodes[n][2]); return Math.max(...z) - Math.min(...z) > 1e-6 && e.length === 4 && (() => { const p = e.map(n => nodes[n]); const a = [p[1][0]-p[0][0], p[1][1]-p[0][1], p[1][2]-p[0][2]], b = [p[3][0]-p[0][0], p[3][1]-p[0][1], p[3][2]-p[0][2]]; const nz = a[0]*b[1]-a[1]*b[0]; const n = Math.hypot(a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], nz); return Math.abs(nz)/n < 1e-6; })(); };
  const muros = [], losas = [];
  els.forEach((e, i) => { if (e.length === 4) (esVertical(e) ? muros : losas).push(i); });
  const campos = ["bendingXX","bendingYY","bendingXY","membraneXX","membraneYY","membraneXY","shearX","shearY","vonMises"];
  const res = { id, muros: muros.length, losas: losas.length, campos: {} };
  for (const c of campos) {
    const m = ao[c]; if (!m || !(m instanceof Map)) { res.campos[c] = "no existe"; continue; }
    const stat = (idx) => { let n = 0, nan = 0, mx = 0; for (const i of idx) { const v = m.get(i); if (!v) continue; n++; for (const x of v) { if (!Number.isFinite(x)) nan++; else mx = Math.max(mx, Math.abs(x)); } } return { con: n, de: idx.length, nan, max: +mx.toPrecision(4) }; };
    res.campos[c] = { muros: stat(muros), losas: stat(losas) };
  }
  return res;
}`;
const mod = await empaquetar(FUENTE, "muros-colormap");
console.log(JSON.stringify(mod.medir("plantillas", { tipo: 6 }), null, 1));
