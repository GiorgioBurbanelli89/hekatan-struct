/**
 * DRILLING DOF contra ETABS: 2 muros + viga de acople.
 *
 * El drilling es el giro NORMAL a la cascara. En una membrana Q4 no existe
 * como grado real: se le pone una rigidez artificial para quitar el modo de
 * energia nula (Wilson, cap. 9, ec. 9.11-9.14). Cuanta ponerle no lo dice
 * ninguna ecuacion — Wilson lo llama literalmente el valor que "la experiencia
 * resolviendo muchos problemas indica que es efectivo".
 *
 * Este modelo estaba construido a proposito para medirlo (2 machones de muro
 * unidos por una viga de acople: el momento de la viga entra al muro POR el
 * giro en el plano) pero nunca se habia cerrado contra nada. Aqui se cierra.
 *
 * Referencia: ETABS 22.6.0, importando el .e2k que exporta el propio Hekatan
 * (`galpon-bodega-electoral/drilling_etabs.py`), 92 nudos, caso Dead:
 *
 *     Ux maximo = 5.359904e-04 m
 *
 * ⚠️ El .e2k tiene que ser el NUEVO (N-MM, SHAPE "General", momentos en N*mm).
 * Con el viejo ETABS leia otra estructura y el numero no significaba nada.
 *
 * El limite es HOLGADO (15 %) a proposito: hoy sale +11.5 % y no se sabe aun
 * cual de las tres formulaciones de drilling del repo es la buena
 * (Hughes-Brezzi 0.05 en C++/Python, Allman en el .cpd simbolico, y el rango
 * uno de Wilson que es el que MIDE ETABS). Lo que vigila este caso es que
 * nadie mueva esa rigidez sin darse cuenta.
 */
import { empaquetar, R } from "../lib/bundle.mjs";

const ETABS_UX = 5.359904e-4;   // m, ETABS 22.6.0, caso Dead
// Bajado de 15 % a 4 % el 19-ago-2026, al pasar el defecto al `drillingTypes = 8`
// (la proyeccion del drilling). Hoy sale 3.086 %.
//
// El limite estaba HOLGADO a proposito mientras no se sabia como bajar el error
// (venia de +11.46 % con Hughes-Brezzi y +5.45 % con el ITW 1990). Ahora que se
// sabe, dejarlo en 15 % seria peor que no tenerlo: una regresion al 10 % pasaria
// en verde. Un limite solo vigila si esta cerca de lo medido.
const LIMITE = 4;               // %

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
const { exportE2k } = await import("${R}/examples/src/shared/e2kExporter");

export function correrEjemplo(id) {
  const ex = examplesRegistry.find(e => e.id === id);
  if (!ex) throw new Error("no existe el ejemplo " + id);
  const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default;
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]}, springs:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const def = st.deformOutputs.val?.deformations;
  let uxMax = 0;
  for (let i = 0; i < st.nodes.val.length; i++) {
    const d = def?.get(i); if (!d) continue;
    if (Math.abs(d[0]) > Math.abs(uxMax)) uxMax = d[0];
  }
  return { uxMax, nNodos: st.nodes.val.length, nElem: st.elements.val.length };
}
`;

export const nombre = "drilling-dof-etabs";
export const descripcion =
  "el giro normal de la membrana, contra ETABS: 2 muros + viga de acople";

export async function correr() {
  const mod = await empaquetar(FUENTE, "drilling-dof");
  const r = mod.correrEjemplo("drilling-dof");
  const err = Math.abs(r.uxMax / ETABS_UX - 1) * 100;
  return [{
    que: "Ux de la punta contra ETABS 22",
    medido: err,
    limite: LIMITE,
    ok: err <= LIMITE,
    detalle: `Hekatan ${r.uxMax.toExponential(6)} m vs ETABS `
      + `${ETABS_UX.toExponential(6)} m — ${r.nNodos} nudos, ${r.nElem} elementos`,
  }];
}
