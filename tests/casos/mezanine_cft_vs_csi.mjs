/**
 * MEZANINE CON COLUMNA CFT contra SAP2000 24 (s2k: Section Designer y seccion General) y
 * ETABS 22 (e2k: Filled Steel Tube), 3-sep-2026. Los ficheros salen de
 * `node cli/exportar_csi.mjs mezanine … matCol=2 [cftas=general]` y los JSON de
 * `cli/plantillas_sap2000.py` / `cli/plantillas_etabs.py` (validation/modelos/mezanine-cft).
 * Se casan los nudos por COORDENADAS y se compara contra el maximo del modelo.
 *   General = Hekatan 0.0000 % · SD 0.0095 % (SAP recalcula A, I, As, J de las formas) ·
 *   ETABS 0.0008 %. Antes de coser la losa a las vigas SECUNDARIAS y de escribir el
 *   diafragma en el .s2k esto daba 1 % / 0.38 %.
 */
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../lib/bundle.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const V = join(AQUI, "..", "..", "validation", "modelos", "mezanine-cft");
export const nombre = "mezanine-cft-vs-csi";
export const descripcion = "mezanine con columna CFT: SAP2000 (SD y General) y ETABS (Filled Steel Tube), nudo a nudo";

const FUENTE = `
const g = globalThis; g.window = g;
const ctx2d = () => new Proxy({ font:"", measureText:()=>({width:10}), createLinearGradient:()=>({addColorStop(){}}), getImageData:()=>({data:new Uint8ClampedArray(4)}) }, { get:(t,k)=> k in t ? t[k] : (()=>{}) });
const nodo = () => ({ style:{}, width:300, height:150, appendChild(){}, setAttribute(){}, addEventListener(){}, removeEventListener(){}, classList:{add(){},remove(){},toggle(){},contains:()=>false}, getContext:()=>ctx2d(), querySelector:()=>null, querySelectorAll:()=>[], remove(){}, insertBefore(){}, cloneNode:()=>nodo(), toDataURL:()=>"", getBoundingClientRect:()=>({width:0,height:0,top:0,left:0}) });
g.document = { createElement: nodo, createElementNS: nodo, body: nodo(), head: nodo(), documentElement: nodo(), querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} }; g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){}, addListener(){} });
const { examplesRegistry } = await import("${R}/examples/src/workspace/exampleRegistry");
export function construir(id, over) {
  const ex = examplesRegistry.find(e => e.id === id);
  const p = {}; for (const [k, d] of Object.entries(ex.params || {})) p[k] = d.default; Object.assign(p, over);
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}}, deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]}, springs:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  return { nodes: st.nodes.val, elements: st.elements.val, U: st.deformOutputs.val?.deformations, ei: st.elementInputs.val };
}`;

function comparar(H, J) {
  const k4 = (x, y, z) => [x, y, z].map(v => (Math.round(v * 1e4) / 1e4).toFixed(4)).join(",");
  const porCoord = new Map(); for (const p of J.puntos || []) porCoord.set(k4(p.x, p.y, p.z), String(p.n));
  const dispE = J.disp_nudos || {};
  let umax = 0; for (const [, u] of H.U) umax = Math.max(umax, ...u.slice(0, 3).map(Math.abs));
  let peor = 0, n = 0, dentro = 0, sinPareja = 0;
  for (let i = 0; i < H.nodes.length; i++) {
    const e = dispE[porCoord.get(k4(...H.nodes[i]))]; if (!e) { sinPareja++; continue; }
    const uh = H.U.get(i);
    for (let c = 0; c < 3; c++) { const d = Math.abs(uh[c] - e[c]) / umax * 100; n++; if (d <= 0.01) dentro++; if (d > peor) peor = d; }
  }
  return { peor, n, dentro, sinPareja, umax };
}

export async function correr() {
  const mod = await empaquetar(FUENTE, "mezanine-cft-vs-csi");
  const H = mod.construir("mezanine", { matCol: 2 });
  const filas = [];
  const shp = H.ei.sectionShapes?.get?.([...(H.ei.sectionShapes?.keys?.() ?? [])][0]);
  filas.push({ que: "el mezanine con matCol=2 lleva columnas CFT (sectionShapes) y diafragma", crudo: true, medido: `${shp?.type ?? "sin shape"} ${shp?.b ?? ""}x${shp?.h ?? ""} t=${shp?.tw ?? ""}`, limite: "CFT", ok: shp?.type === "CFT" });
  // ETABS deja un nudo sin pareja (el maestro del diafragma comparte nombre con un punto);
  // SAP2000 los devuelve todos.
  for (const [f, lim, que, huecos] of [["sap2000/mez_general.json", 0.001, "SAP2000, seccion General (las propiedades de Hekatan tal cual)", 0], ["sap2000/mez_sd.json", 0.02, "SAP2000, Section Designer (SAP recalcula A, I, As, J de tubo + relleno)", 0], ["etabs/mez_sd.json", 0.01, "ETABS 22, Filled Steel Tube por e2k", 1]]) {
    const J = JSON.parse(readFileSync(join(V, f), "utf-8"));
    const r = comparar(H, J);
    filas.push({ que: `${que}: peor nudo (% del maximo)`, medido: r.peor, limite: lim, ok: r.peor <= lim && r.sinPareja <= huecos, detalle: `${r.dentro}/${r.n} componentes dentro del 0.01 %; ${r.sinPareja} nudos sin pareja; u_max ${r.umax.toExponential(4)} m` });
  }
  return filas;
}
