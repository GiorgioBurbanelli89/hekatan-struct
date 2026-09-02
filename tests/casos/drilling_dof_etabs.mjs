/**
 * DRILLING DOF: 2 muros + viga de acople, contra SAP2000 (arbitro) y ETABS (informativo).
 *
 * El drilling es el giro NORMAL a la cascara. Desde el 2-sep-2026 la membrana es
 * la de CSI extraida del binario (`drillingTypes = 12`: ITW + burbuja, Gauss 2x2,
 * proyeccion, P centro gamma = 0.4 mu, reloj 5e-5) y la celda 12x12 clava la de
 * ETABS a 1e-13 %.
 *
 * ARBITRO = SAP2000 24 con la MISMA malla (92 nudos, 64 Shell-Thick, 3 barras),
 * armado por OAPI desde el volcado de Hekatan, SIN automallado
 * (`galpon-bodega-electoral/sap_drilling.py`):
 *
 *     Ux maximo = 5.802662e-04 m      Hekatan: 5.802662e-04 (peor nudo 2.5e-12 %)
 *
 * ETABS 22 da 5.359904e-04 (-7.6 %) con los MISMOS objetos (por e2k y por OAPI,
 * `etabs_drilling_oapi.py`). No es la celda ni el drilling: los muros SIN viga
 * dan lo mismo en ETABS y Hekatan (6.016323e-04, y el giro bajo un momento
 * nodal -8.739795e-04, identicos). Es como ETABS ata la VIGA al muro: en ETABS
 * el giro del nudo sigue la cuerda del muro (R2 -1.5e-4 vs -2.25e-4) y la viga
 * lleva 3x el cortante (20.2 vs 6.56 kN). Queda registrado como dato de ETABS,
 * no como limite: ver registros/2026-09-02_binario_drilling_shellthick.md.
 */
import { empaquetar, R } from "../lib/bundle.mjs";

const SAP_UX = 5.802662e-4;     // m, SAP2000 24, misma malla, sin automallado (arbitro)
const ETABS_UX = 5.359904e-4;   // m, ETABS 22.6.0, caso Dead (informativo: ETABS ata la viga distinto)
// Limite contra SAP2000: es la misma malla y el mismo elemento, asi que solo
// cabe el redondeo. Antes (19-ago) el limite era 4 % contra ETABS con el tipo 8.
const LIMITE = 0.01;            // %

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
  const err = Math.abs(r.uxMax / SAP_UX - 1) * 100;
  const errE = (r.uxMax / ETABS_UX - 1) * 100;
  return [{
    que: "Ux de la punta contra SAP2000 (misma malla)",
    medido: err,
    limite: LIMITE,
    ok: err <= LIMITE,
    detalle: `Hekatan ${r.uxMax.toExponential(6)} m vs SAP2000 `
      + `${SAP_UX.toExponential(6)} m — ${r.nNodos} nudos, ${r.nElem} elementos`,
  }, {
    que: "…y ETABS 22 se queda a (informativo, ETABS ata la viga distinto)",
    crudo: true, medido: errE.toFixed(2) + " %", limite: "dato", ok: true,
    detalle: `ETABS ${ETABS_UX.toExponential(6)} m; muros sin viga identicos, viga con 3x cortante`,
  }];
}
