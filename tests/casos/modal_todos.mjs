/**
 * EL MODAL DE TODOS LOS EJEMPLOS: ¿responde, y con frecuencias FÍSICAS?
 *
 * No basta con que `runModal` no reviente. Al medirlo salieron cinco rotos de
 * 54, y ninguno daba error:
 *
 *   zapata-aislada        f1 = 1.6e-5 Hz  y f2 = 1.9e+10   (basura)
 *   zapata-viga-amarre    f1 = 2.4e-6 Hz
 *   guerra-ej6            f1 = 7.6e+14 Hz
 *   edificio-ladera       no rellenaba el panel
 *   membrana-csi          idem
 *
 * Las tres zapatas, por lo mismo: `modalCpp` acepta los RESORTES Winkler
 * -y hasta lo avisa en un comentario- pero los ejemplos no se los pasaban. El
 * estático sí los recibía, así que el modelo parecía bueno hasta que pedías el
 * modal: la zapata FLOTABA en el aire y salían modos de sólido rígido.
 *
 * Los otros dos eran de interfaz: `edificio-ladera` escribía el resultado en la
 * consola y nunca llamaba a `modalPanel.render` (además de morir en un
 * `states.modalOutputs` que no existe), y `membrana-csi` cargaba `modalAnalysis`
 * con un `import()` asíncrono que resolvía después de volver.
 *
 * El criterio es FÍSICO, no "que devuelva algo": una estructura civil vibra
 * entre 0.05 Hz (un puente colgante) y ~2000 Hz (una pieza pequeña y rígida).
 * 0.0000 Hz es un mecanismo y 7.6e14 Hz es una matriz mal condicionada.
 */
import { empaquetar, R } from "../lib/bundle.mjs";

const F_MIN = 0.05, F_MAX = 2000;

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
  documentElement: nodo(), querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){}, addListener(){} });
const { examplesRegistry } = await import("${R}/examples/src/workspace/exampleRegistry");
export function barrer() {
  const out = [];
  for (const ex of examplesRegistry) {
    if (!ex.hasModal) continue;
    const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default;
    const estado = (ini) => { let v = ini;
      return { get val(){return v}, set val(x){v=x}, get rawVal(){return v}, set rawVal(x){v=x} }; };
    const st = { nodes: estado([]), elements: estado([]), nodeInputs: estado({}),
                 elementInputs: estado({}), deformOutputs: estado({}),
                 analyzeOutputs: estado({}), objects3D: estado([]) };
    let f = null, err = null;
    const panel = { render(o){ if (o && o.frequencies) f = Array.from(o.frequencies); },
                    clear(){}, show(){}, hide(){} };
    try {
      if (typeof ex.build !== "function") { out.push({ id: ex.id, cat: ex.category, err: "legacy sin build" }); continue; }
      ex.build(p, st, panel);
      f = null;
      if (typeof ex.runModal === "function") ex.runModal(p, st, panel);
      else err = "hasModal pero sin runModal";
    } catch (e) { err = String((e && e.message)||e).slice(0, 45); }
    out.push({ id: ex.id, cat: ex.category, err, f: f ? f.slice(0, 3) : null,
               n: f ? f.length : 0 });
  }
  return out;
}`;

export const nombre = "modal-todos";
export const descripcion =
  "los 54 ejemplos con modal responden y con frecuencias fisicamente posibles";

export async function correr() {
  const mod = await empaquetar(FUENTE, "modal-todos-caso");
  const F = mod.barrer();
  const malos = [], sinPanel = [];
  for (const x of F) {
    if (!x.f || !x.f.length) { sinPanel.push(`${x.id}${x.err ? " (" + x.err + ")" : ""}`); continue; }
    if (!x.f.every((v) => Number.isFinite(v) && v >= F_MIN && v <= F_MAX))
      malos.push(`${x.id}: ${x.f.map((v) => v.toExponential(2)).join(" ")}`);
  }
  return [
    { que: "todos los ejemplos con hasModal rellenan el panel",
      medido: sinPanel.length, limite: 0, ok: sinPanel.length === 0,
      detalle: sinPanel.length ? sinPanel.slice(0, 5).join(" · ") : `${F.length} ejemplos` },
    { que: `frecuencias dentro de lo fisicamente posible (${F_MIN}-${F_MAX} Hz)`,
      medido: malos.length, limite: 0, ok: malos.length === 0,
      detalle: malos.length ? malos.slice(0, 4).join(" · ")
        : `${F.filter((x) => x.f && x.f.length).length} modales sanos` },
  ];
}
