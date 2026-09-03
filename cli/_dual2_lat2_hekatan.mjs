// Hekatan dual 2 plantas con las cargas de dual2_lat2.json: careo nudo a nudo por CLASE de nudo (muro / columna / losa) y por planta.
import { readFileSync } from "node:fs";
import { empaquetar, R, cargarFem } from "../tests/lib/bundle.mjs";
const FUENTE = `
const g = globalThis; g.window = g;
const ctx2d = () => new Proxy({ font:"", measureText:()=>({width:10}), createLinearGradient:()=>({addColorStop(){}}), getImageData:()=>({data:new Uint8ClampedArray(4)}) }, { get:(t,k)=> k in t ? t[k] : (()=>{}) });
const nodo = () => ({ style:{}, width:300, height:150, appendChild(){}, setAttribute(){}, addEventListener(){}, removeEventListener(){}, classList:{add(){},remove(){},toggle(){},contains:()=>false}, getContext:()=>ctx2d(), querySelector:()=>null, querySelectorAll:()=>[], remove(){}, insertBefore(){}, cloneNode:()=>nodo(), toDataURL:()=>"", getBoundingClientRect:()=>({width:0,height:0,top:0,left:0}) });
g.document = { createElement: nodo, createElementNS: nodo, body: nodo(), head: nodo(), documentElement: nodo(), querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} }; g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){}, addListener(){} });
const { examplesRegistry } = await import("${R}/examples/src/workspace/exampleRegistry");
export function modelo(over) {
  const ex = examplesRegistry.find(e => e.id === "plantillas");
  const p = {}; for (const [k, d] of Object.entries(ex.params || {})) p[k] = d.default; Object.assign(p, over);
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}}, deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  return { nodes: st.nodes.val, elements: st.elements.val, ei: st.elementInputs.val, ni: st.nodeInputs.val };
}`;
const mod = await empaquetar(FUENTE, "dual2-lat2"); const { deform } = await cargarFem();
const E = JSON.parse(readFileSync("validation/modelos/plantillas/etabs/dual2_lat2.json", "utf8"));
const key = (x, y, z) => `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`; const eMap = new Map(E.nudos.map(d => [key(d.x, d.y, d.z), d]));
const mx = Math.max(...E.nudos.map(d => Math.abs(d.ux)));
const over = Object.fromEntries(process.argv.slice(2).map(a => a.split("=")).map(([k, v]) => [k, Number(v)]));
const m = mod.modelo({ tipo: 6, pisos: 2, diafragma: 1, ...over });
const loads = new Map();
for (const [, [x, y, zz, F]] of Object.entries(E.cargas)) { const i = m.nodes.findIndex(n => key(n[0], n[1], n[2]) === key(x, y, zz)); loads.set(i, [F, 0, 0, 0, 0, 0]); }
const r = deform(m.nodes, m.elements, { ...m.ni, loads }, m.ei);
const muro = new Set(), col = new Set();
m.elements.forEach(e => { if (e.length === 4) { const z = e.map(n => m.nodes[n][2]); if (Math.max(...z) - Math.min(...z) > 1e-6) e.forEach(n => muro.add(n)); } else if (e.length === 2) { if (Math.abs(m.nodes[e[0]][2] - m.nodes[e[1]][2]) > 1e-6) e.forEach(n => col.add(n)); } });
const cls = i => muro.has(i) ? (col.has(i) ? "muro+col" : "muro") : (col.has(i) ? "columna" : "losa");
const stats = {};
m.nodes.forEach((nd, i) => { const e = eMap.get(key(nd[0], nd[1], nd[2])); if (!e) return; const u = r.deformations.get(i); const k = `${nd[2].toFixed(1)} ${cls(i)}`; stats[k] = stats[k] || { n: 0, peor: 0, sum: 0, ej: null }; const d = Math.abs(u[0] - e.ux); stats[k].n++; stats[k].sum += d; if (d > stats[k].peor) { stats[k].peor = d; stats[k].ej = `(${nd[0]},${nd[1]}) Hek ${u[0].toExponential(3)} ETABS ${e.ux.toExponential(3)} uz ${u[2].toExponential(2)}/${e.uz.toExponential(2)} ry ${u[4].toExponential(2)}/${e.ry.toExponential(2)}`; } });
for (const [k, s] of Object.entries(stats).sort()) console.log(k.padEnd(14), "n", String(s.n).padStart(4), "peor", (s.peor / mx * 100).toFixed(2).padStart(6), "% media", (s.sum / s.n / mx * 100).toFixed(2).padStart(6), "%  ", s.ej);
