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
const { deform } = await import("${R}/hekatan-fem/src/index");

export function barrer(escalas) {
  const ex = examplesRegistry.find(e => e.id === "drilling-dof");
  const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default;
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]}, springs:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const nodes = st.nodes.val, elements = st.elements.val;
  const ei = st.elementInputs.val, ni = st.nodeInputs.val;
  const shells = [];
  for (let e = 0; e < elements.length; e++) if (elements[e].length === 4) shells.push(e);
  const out = [];
  for (const s of escalas) {
    const m = new Map(); for (const e of shells) m.set(e, s);
    const ei2 = { ...ei, drillingPenaltyScales: m };
    const d = deform(nodes, elements, ni, ei2);
    let ux = 0;
    for (let i = 0; i < nodes.length; i++) {
      const v = d.deformations?.get(i); if (!v) continue;
      if (Math.abs(v[0]) > Math.abs(ux)) ux = v[0];
    }
    out.push({ s, ux });
  }
  return { out, nShell: shells.length, nElem: elements.length };
}
`;
const mod = await empaquetar(FUENTE, "drill-sweep");
const ETABS = 5.359904e-4;
const escalas = [1e-4, 1e-3, 5e-3, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1.0, 5.0, 50.0];
const r = mod.barrer(escalas);
console.log(`shells=${r.nShell} de ${r.nElem} elementos.  ETABS Ux=${ETABS.toExponential(6)}`);
for (const { s, ux } of r.out)
  console.log(`  scale=${String(s).padStart(7)}   Ux=${ux.toExponential(6)}   err=${((ux/ETABS-1)*100).toFixed(3)} %`);
