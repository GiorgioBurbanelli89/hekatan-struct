#!/usr/bin/env node
/**
 * El modal de una PLANTILLA, headless, con el mismo motor que la interfaz.
 *
 *   node cli/plantilla_modal.mjs [tipo] [clave=valor ...]
 *   node cli/plantilla_modal.mjs 6 formMuro=0        # muro Shell-Thick
 *
 * Sirve para arbitrar contra ETABS sin abrir el navegador: se construye el
 * ExampleDef igual que `exportar_e2k.mjs` y se corre `_modal` con TODOS los
 * datos, espesores y `plateFormulations` incluidos.
 */
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const tipo = process.argv[2] !== undefined ? Number(process.argv[2]) : 6;
const over = Object.fromEntries(process.argv.slice(3).map(a => { const [k, v] = a.split("="); return [k, Number(v)]; }));

const mod0 = await empaquetar(`
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
export function armar(tipo, over) {
  const ex = examplesRegistry.find(e => e.id === "plantillas");
  const p = {}; for (const [k, d] of Object.entries(ex.params || {})) p[k] = d.default;
  p.tipo = tipo; Object.assign(p, over);
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const M = m => m ? [...m.entries()] : [];
  const ei = st.elementInputs.val;
  return { nodes: st.nodes.val, elements: st.elements.val,
    supports: M(st.nodeInputs.val.supports),
    ei: Object.fromEntries(Object.entries(ei).map(([k, v]) => [k, M(v)])), params: p };
}`, "plantilla-modal");

const d = mod0.armar(tipo, over);
const __dirname = dirname(fileURLToPath(import.meta.url));
const wasmPath = join(__dirname, "..", "hekatan-fem", "src", "cpp", "built", "deform.wasm");
const jsPath = join(__dirname, "..", "hekatan-fem", "src", "cpp", "built", "deform.js");
const mod = await (await import(pathToFileURL(jsPath).href)).default({ wasmBinary: readFileSync(wasmPath) });
const alloc = (a, C, h) => { const b = new C(a); const p = mod._malloc(b.length * b.BYTES_PER_ELEMENT); h.set(b, p / b.BYTES_PER_ELEMENT); return p; };
const gc = [];
const P = (e) => { const k = (e || []).map(x => x[0]), v = (e || []).map(x => x[1]);
  const kp = alloc(k, Uint32Array, mod.HEAPU32), vp = alloc(v, Float64Array, mod.HEAPF64); gc.push(kp, vp); return { kp, vp, size: k.length }; };
const PI = (e) => { const k = (e || []).map(x => x[0]), v = (e || []).map(x => x[1]);
  const kp = alloc(k, Uint32Array, mod.HEAPU32), vp = alloc(v, Uint32Array, mod.HEAPU32); gc.push(kp, vp); return { kp, vp, size: k.length }; };
const nodes = d.nodes, elements = d.elements, ei = d.ei;
const nP = alloc(nodes.flat(), Float64Array, mod.HEAPF64); gc.push(nP);
const eI = elements.flat();
const eP = alloc(eI, Uint32Array, mod.HEAPU32), eS = alloc(elements.map(e => e.length), Uint32Array, mod.HEAPU32); gc.push(eP, eS);
const sK = d.supports.map(x => x[0]), sV = d.supports.flatMap(x => x[1].map(b => b ? 1 : 0));
const sKp = alloc(sK, Uint32Array, mod.HEAPU32), sVp = alloc(sV, Uint8Array, mod.HEAPU8); gc.push(sKp, sVp);
const el = P(ei.elasticities), ar = P(ei.areas), mz = P(ei.momentsOfInertiaZ), my = P(ei.momentsOfInertiaY),
  sh = P(ei.shearModuli), to = P(ei.torsionalConstants), de = P(ei.densities), th = P(ei.thicknesses),
  po = P(ei.poissonsRatios), mm = P(), bm = P(), pf = PI(ei.plateFormulations), dt = PI(), ds = P(),
  sy = P(ei.shearAreasY), sz = P(ei.shearAreasZ), la = P(), rel = P(), nm = P(), dia = P();
const relVp = alloc([], Uint8Array, mod.HEAPU8); gc.push(relVp);
const O = () => { const p = mod._malloc(4); gc.push(p); return p; };
const fo = O(), nfo = O(), moo = O(), mro = O(), mco = O(), mao = O(), maro = O(), maco = O();
mod._modal(nP, nodes.length, eP, eI.length, eS, elements.length, sKp, sVp, sK.length,
  el.kp, el.vp, el.size, ar.kp, ar.vp, ar.size, mz.kp, mz.vp, mz.size, my.kp, my.vp, my.size,
  sh.kp, sh.vp, sh.size, to.kp, to.vp, to.size, de.kp, de.vp, de.size,
  th.kp, th.vp, th.size, po.kp, po.vp, po.size, mm.kp, mm.vp, mm.size, bm.kp, bm.vp, bm.size,
  pf.kp, pf.vp, pf.size, dt.kp, dt.vp, dt.size, ds.kp, ds.vp, ds.size,
  sy.kp, sy.vp, sy.size, sz.kp, sz.vp, sz.size, la.kp, la.vp, la.size,
  rel.kp, relVp, 0, nm.kp, nm.vp, nm.size, 1, dia.kp, dia.vp, dia.size,
  alloc([0], Float64Array, mod.HEAPF64), 0, 12, 1, 0,
  fo, nfo, moo, mro, mco, mao, maro, maco);
const fp = mod.HEAPU32[fo / 4], nf = mod.HEAPU32[nfo / 4];
const mp = mod.HEAPU32[mao / 4], mr = mod.HEAPU32[maro / 4], mc = mod.HEAPU32[maco / 4];
const f = nf > 0 && fp ? Array.from(new Float64Array(mod.HEAPF64.buffer, fp, nf)) : [];
const part = [];
if (mr > 0 && mc > 0 && mp) { const a = new Float64Array(mod.HEAPF64.buffer, mp, mr * mc);
  for (let i = 0; i < mr; i++) part.push(Array.from(a.slice(i * mc, (i + 1) * mc))); }
console.log("plantilla tipo=" + tipo + "  formLosa=" + d.params.formLosa + "  formMuro=" + d.params.formMuro +
  "   (" + nodes.length + " nudos, " + elements.length + " elementos)");
console.log(" modo    T[s]      Ux%     Uy%     Rz%");
f.slice(0, 6).forEach((v, i) => { const p = part[i] ?? [];
  console.log("  " + String(i + 1).padStart(2) + "  " + (1 / v).toFixed(4).padStart(8) +
    "  " + ((p[0] ?? 0) * 100).toFixed(1).padStart(6) + "  " + ((p[1] ?? 0) * 100).toFixed(1).padStart(6) +
    "  " + ((p[5] ?? 0) * 100).toFixed(1).padStart(6)); });
