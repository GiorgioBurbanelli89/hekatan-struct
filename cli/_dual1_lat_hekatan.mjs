// Hekatan: dual de 1 planta (plantilla tipo 6, pisos 1) con 100 kN en X en la misma esquina que ETABS, con diafragma 0/1/2/3.
//   node cli/_dual1_lat_hekatan.mjs  → compara con validation/modelos/plantillas/etabs/dual1_lat.json
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
const mod = await empaquetar(FUENTE, "dual1-lat"); const { deform } = await cargarFem();
const E = JSON.parse(readFileSync("validation/modelos/plantillas/etabs/dual1_lat.json", "utf8"));
const key = (x, y) => `${x.toFixed(3)},${y.toFixed(3)}`; const eMap = new Map(E.techo.map(d => [key(d.x, d.y), d]));
for (const diaf of [0, 1, 2, 3]) {
  const m = mod.modelo({ tipo: 6, pisos: 1, diafragma: diaf });
  const zmax = Math.max(...m.nodes.map(n => n[2]));
  const esq = m.nodes.map((n, i) => [i, n]).filter(([, n]) => Math.abs(n[2] - zmax) < 1e-6).sort((a, b) => (b[1][0] - a[1][0]) || (b[1][1] - a[1][1]))[0];
  const loads = new Map([[esq[0], [100, 0, 0, 0, 0, 0]]]);
  const r = deform(m.nodes, m.elements, { ...m.ni, loads }, m.ei);
  let n = 0, peor = 0, sum = 0, uxE = 0, uxH = 0;
  m.nodes.forEach((nd, i) => { if (Math.abs(nd[2] - zmax) > 1e-6) return; const e = eMap.get(key(nd[0], nd[1])); if (!e) return; const u = r.deformations.get(i); n++; const d = Math.abs(u[0] - e.ux); sum += d; if (d > peor) peor = d; if (i === esq[0]) { uxE = e.ux; uxH = u[0]; } });
  const mx = Math.max(...E.techo.map(d => Math.abs(d.ux)));
  console.log(`diaf=${diaf}: esquina ux Hek ${uxH.toExponential(5)} vs ETABS ${uxE.toExponential(5)} (${((uxH / uxE - 1) * 100).toFixed(2)} %); ${n} nudos casados, peor ${(peor / mx * 100).toFixed(3)} % del max, media ${(sum / n / mx * 100).toFixed(3)} %`);
}
console.log("ETABS T:", E.T.map(t => t.toFixed(4)).join(" "));
