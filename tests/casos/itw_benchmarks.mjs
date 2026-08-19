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
 * Medido el 19-ago-2026, ANTES y DESPUES de implementar el ITW en el motor:
 *
 * | magnitud               | antes (HB) | ahora (ITW) | ETABS 22 | SAP2000 24 | exacto |
 * |------------------------|------------|-------------|----------|------------|--------|
 * | I  flecha centro       | -1.474538  | -1.500000   | -1.500000| -1.500000  |  1.5   |
 * | I  giro extremo        | -0.561967  | -0.600000   | -0.600000| -0.600000  |  0.6   |
 * | II flecha punta        |  0.354656  |  0.354853   |  0.354201|  0.354201  | 0.3553 |
 * | III Cook en C=(48,52)  | 23.800197  | 23.680000   | 23.602130| 23.602130  | 23.91  |
 * | IV hemisferio 8x8      |  0.090579  |  0.058845   |   (*)    |  0.093751  | 0.094  |
 * | IV hemisferio 16x16    |     —      |  0.090070   |   (*)    |     —      | 0.094  |
 *
 * (*) el hemisferio en ETABS sale rigido (6e-5) montado por OAPI y no se ha
 * aclarado por que; SAP2000 con el MISMO modelo da 0.093751. Por eso el arbitro
 * del test IV es SAP.
 *
 * ⚠️ EL QUE MANDA ES EL TEST I. Es un patch test de orden superior: con malla
 * regular la respuesta es EXACTA, no aproximada. Antes Hekatan daba -1.70 % en
 * la flecha y -6.34 % EN EL GIRO — el error del giro casi cuadruplicaba al de
 * la flecha, que es la firma de que lo mal formulado era el drilling y no la
 * malla (refinando a nx=12 seguia en -1.4935 / -0.5830, o sea que NO convergia
 * al exacto). Con el ITW sale 1.500000 y 0.600000, igual que ETABS y SAP.
 *
 * Estos limites NO se suben. Los del test I estan en 2.5 % y 8 % porque son los
 * de cuando el caso se escribio; hoy se cumplen con 0.000 %.
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

export function correr(id, over) {
  const ex = examplesRegistry.find(e => e.id === id);
  if (!ex) throw new Error("no existe el ejemplo " + id);
  const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default;
  Object.assign(p, over || {});
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

  // ⚠️ El hemisferio BLOQUEA en malla gruesa con el ITW. No es un fallo: es el
  // bloqueo de membrana del que avisa el propio paper (seccion 4, "to avoid the
  // membrane locking..."), y se distingue de un bug porque CONVERGE al refinar:
  //     4x4 -89.8 %   8x8 -37.4 %   12x12 -11.1 %   16x16 -4.2 %
  // Por eso este test mide las dos cosas: el valor en 8x8 (que hoy es malo y
  // queda escrito tal cual) y que en 16x16 ya cierre. Si alguna vez se
  // implementa la receta del paper (modificacion de Taylor + regla de 8 puntos)
  // el limite del 8x8 hay que BAJARLO, no subirlo.
  const IV = mod.correr("itw-hemisferio");
  const uIV = enNudos(IV, [[10, 0, 0]], 0);
  mide("IV · hemisferio 8x8 (bloqueo conocido)", uIV, 0.094, 40,
    `Hekatan ${uIV.toFixed(6)} · SAP2000 0.093751 — bloqueo de membrana, ver la nota`);
  const IVf = mod.correr("itw-hemisferio", { n: 16 });
  const uIVf = enNudos(IVf, [[10, 0, 0]], 0);
  mide("IV · hemisferio 16x16: que CONVERJA", uIVf, 0.094, 6,
    `Hekatan ${uIVf.toFixed(6)} · referencia 0.094 — si esto se rompe, ya no es bloqueo`);

  return filas;
}
