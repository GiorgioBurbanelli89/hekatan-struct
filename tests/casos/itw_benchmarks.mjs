/**
 * Los CUATRO tests del paper ITW 1990 (Ibrahimbegovic, Taylor & Wilson,
 * IJNME 30:445-457), que son los tests del GDL de giro normal (drilling).
 *
 * Arbitros — cada uno tiene DOS, y ninguno es una cuenta a mano:
 *   · el valor EXACTO del propio paper (elasticidad / referencia refinada), y
 *   · ETABS 22 y SAP2000 24 corriendo la MISMA malla nudo a nudo, montada por
 *     la OAPI (`galpon-bodega-electoral/itw_etabs_oapi.py` y `itw_sap_oapi.py`).
 *     No por .e2k: ese formato va por STORIES y Cook (cada columna de nudos a
 *     una Z distinta) y el hemisferio (3D) no tienen niveles — ETABS los
 *     reinterpretaba y salian 168 nudos / 36 areas en vez de 81 / 64.
 *
 * Medido el 19-ago-2026:
 *
 * | magnitud                       | Hekatan   | ETABS 22 | SAP2000 24 | exacto |
 * |--------------------------------|-----------|----------|------------|--------|
 * | I  flecha centro               | -1.474538 | -1.500000| -1.500000  |  1.5   |
 * | I  giro extremo                | -0.561967 | -0.600000| -0.600000  |  0.6   |
 * | II flecha punta                |  0.354656 |  0.354201|  0.354201  | 0.3553 |
 * | III Cook en C=(48,52)          | 23.800197 | 23.602130| 23.602130  | 23.91  |
 * | IV hemisferio Ux bajo la carga |  0.090579 |   (*)    |  0.093751  | 0.094  |
 *
 * (*) el hemisferio en ETABS sale rigido (6e-5) montado por OAPI y no se ha
 * aclarado por que; SAP2000 con el MISMO modelo da 0.093751. Por eso el arbitro
 * del test IV es SAP.
 *
 * ⚠️ LO QUE ESTE CASO VIGILA DE VERDAD es el test I. Es un patch test de orden
 * superior: con malla regular la respuesta es EXACTA, no aproximada. ETABS y
 * SAP dan 1.500000 y 0.600000 clavados; Hekatan da -1.70 % en la flecha y
 * -6.34 % EN EL GIRO. Que el error del giro sea el triple que el de la flecha
 * es la firma de que lo que esta mal es la formulacion del drilling, no la
 * malla — refinar no lo arregla (con nx=12 sigue en -1.4935 / -0.5830).
 *
 * Los limites de abajo son los de HOY, para que se vea si algo se mueve. El de
 * la flecha y el giro del test I hay que BAJARLOS a ~0 cuando se implemente el
 * ITW; no subirlos.
 */
import { empaquetar, R } from "../lib/bundle.mjs";

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

export function correr(id) {
  const ex = examplesRegistry.find(e => e.id === id);
  if (!ex) throw new Error("no existe el ejemplo " + id);
  const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default;
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]}, springs:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const def = st.deformOutputs.val?.deformations;
  const d = []; for (let i=0;i<st.nodes.val.length;i++) d.push(Array.from(def?.get(i)||[0,0,0,0,0,0]));
  return { nodos: st.nodes.val, nElem: st.elements.val.length, d };
}
`;

/** Media de una componente sobre los nudos que caen en esas coordenadas. */
function enNudos(r, puntos, comp) {
  let s = 0;
  for (const [x, y, z] of puntos) {
    const i = r.nodos.findIndex(n =>
      Math.abs(n[0] - x) < 1e-6 && Math.abs(n[1] - y) < 1e-6 && Math.abs(n[2] - z) < 1e-6);
    if (i < 0) throw new Error(`no hay nudo en ${x},${y},${z}`);
    s += r.d[i][comp];
  }
  return s / puntos.length;
}

export const nombre = "itw-benchmarks";
export const descripcion =
  "los 4 tests del drilling (ITW 1990) contra el exacto, ETABS 22 y SAP2000 24";

export async function correr() {
  const mod = await empaquetar(FUENTE, "itw-bench");
  const filas = [];
  const mide = (que, medido, ref, limite, detalle) => {
    const err = Math.abs(Math.abs(medido) / Math.abs(ref) - 1) * 100;
    filas.push({ que, medido: err, limite, ok: err <= limite, detalle });
  };

  const I = mod.correr("itw-patch-test");
  mide("I · flecha centro vs exacto 1.5",
    enNudos(I, [[5, 0, 0], [5, 0, 1]], 2), 1.5, 2.5,
    `Hekatan ${enNudos(I, [[5,0,0],[5,0,1]], 2).toFixed(6)} — ETABS y SAP dan 1.500000 EXACTO`);
  mide("I · giro extremo vs exacto 0.6",
    enNudos(I, [[10, 0, 0], [10, 0, 1]], 4), 0.6, 8,
    `Hekatan ${enNudos(I, [[10,0,0],[10,0,1]], 4).toFixed(6)} — ETABS y SAP dan 0.600000 EXACTO`);

  const II = mod.correr("itw-cantilever");
  const uII = enNudos(II, [[48, 0, 0], [48, 0, 12]], 2);
  mide("II · flecha punta vs exacto 0.3553", uII, 0.3553, 1.5,
    `Hekatan ${uII.toFixed(6)} · ETABS/SAP 0.354201 · ${II.nElem} elementos`);

  const III = mod.correr("itw-cook");
  const uIII = enNudos(III, [[48, 0, 52]], 2);
  mide("III · Cook en C=(48,52) vs 23.91", uIII, 23.91, 2,
    `Hekatan ${uIII.toFixed(4)} · ETABS/SAP 23.602130 · ${III.nElem} elementos`);

  const IV = mod.correr("itw-hemisferio");
  const uIV = enNudos(IV, [[10, 0, 0]], 0);
  mide("IV · hemisferio Ux bajo la carga vs 0.094", uIV, 0.094, 6,
    `Hekatan ${uIV.toFixed(6)} · SAP2000 0.093751 · ${IV.nElem} elementos`);

  return filas;
}
