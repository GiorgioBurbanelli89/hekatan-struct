// Mide en headless (sin navegador) lo que el viewer pintaria: muros vs losas, rangos, NaN, nudos colgados.
//   node cli/_medir_muros.mjs edificio-dual edificio-con-muros
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
  const t0 = Date.now();
  let err = null; try { ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} }); } catch (e) { err = String(e).slice(0, 160); }
  const ms = Date.now() - t0;
  const nodes = st.nodes.val, els = st.elements.val, ao = st.analyzeOutputs.val || {}, dof = st.deformOutputs.val || {};
  const esVertical = (e) => { if (e.length !== 4) return false; const p = e.map(n => nodes[n]); const a = [p[1][0]-p[0][0], p[1][1]-p[0][1], p[1][2]-p[0][2]], b = [p[3][0]-p[0][0], p[3][1]-p[0][1], p[3][2]-p[0][2]]; const nz = a[0]*b[1]-a[1]*b[0]; const n = Math.hypot(a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], nz); return Math.abs(nz)/n < 1e-6; };
  const muros = [], losas = [], barras = [];
  els.forEach((e, i) => { if (e.length === 4) (esVertical(e) ? muros : losas).push(i); else if (e.length === 2) barras.push(i); });
  // nudos tocados por barra / por cascara
  const conBarra = new Set(), conCasc = new Set(); for (const i of barras) for (const n of els[i]) conBarra.add(n); for (const i of [...muros, ...losas]) for (const n of els[i]) conCasc.add(n);
  // nudo de cascara que esta SOBRE una barra (colineal) y NO es extremo de ninguna: no esta cosido
  const sinCoser = []; 
  for (const n of conCasc) { if (conBarra.has(n)) continue; const P = nodes[n]; let sobre = false;
    for (const i of barras) { const [a,b] = els[i]; const A = nodes[a], B = nodes[b]; const d=[B[0]-A[0],B[1]-A[1],B[2]-A[2]], v=[P[0]-A[0],P[1]-A[1],P[2]-A[2]]; const L2=d[0]**2+d[1]**2+d[2]**2; const t=(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/L2; if (t<1e-6||t>1-1e-6) continue; if (Math.hypot(v[0]-t*d[0],v[1]-t*d[1],v[2]-t*d[2])<1e-6){sobre=true;break;} }
    if (sobre) sinCoser.push(n); }
  const dfm = dof.deformations; let nan = 0, uzmin = 0; if (dfm) for (const [n, u] of dfm) { if (u.some(x => !Number.isFinite(x))) nan++; else uzmin = Math.min(uzmin, u[2]); }
  const res = { id, err, ms, claves: Object.keys(ao).slice(0,6), ndef: dof.deformations ? dof.deformations.size : -1, nudos: nodes.length, barras: barras.length, muros: muros.length, losas: losas.length, sinCoser: sinCoser.length, nan, uzmin_mm: +(uzmin*1000).toFixed(3), campos: {} };
  for (const c of ["membraneXX","membraneYY","bendingXX","vonMises"]) {
    const m = ao[c]; if (!(m instanceof Map)) { res.campos[c] = "no existe"; continue; }
    const st2 = (idx) => { let mn = Infinity, mx = -Infinity; for (const i of idx) { const v = m.get(i); if (!v) continue; for (const x of v) { if (Number.isFinite(x)) { mn = Math.min(mn, x); mx = Math.max(mx, x); } } } return [+mn.toPrecision(4), +mx.toPrecision(4)]; };
    res.campos[c] = { muros: st2(muros), losas: st2(losas) };
  }
  return res;
}`;
const mod = await empaquetar(FUENTE, "medir-muros");
for (const id of process.argv.slice(2)) console.log(JSON.stringify(mod.medir(id)));
