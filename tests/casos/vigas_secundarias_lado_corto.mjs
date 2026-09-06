/**
 * LA REGLA DE LA LOSA EN UNA DIRECCION: la viga secundaria corre por el LADO CORTO
 * del vano (Jorge, 5-sep-2026: "las vigas secundarias son en el lado corto, cumple
 * la regla de losa en 1 direccion, arregla eso").
 *
 * Hasta ese dia `edificioAporticado` ponia TODAS las secundarias en una direccion
 * ("X" por defecto): con vanos de 6 x 5 salian de 6 m y la losa apoyada en ellas
 * trabajaba en el sentido LARGO. Ahora `vSecDir = Auto` decide vano a vano:
 * la secundaria mide el lado corto y la losa salva la luz corta entre ellas.
 *
 * Se mide sobre el modelo construido (no sobre un dibujo): las secundarias son
 * las barras horizontales que NO estan sobre un eje de columnas, y se comprueba
 * su longitud y su direccion en cada vano, incluidos vanos DESIGUALES (8 x 5 y
 * 4 x 5 en el mismo edificio: uno pide Y y el otro X).
 */
import { empaquetar, R } from "../lib/bundle.mjs";

export const nombre = "vigas-secundarias-lado-corto";
export const descripcion = "las vigas secundarias corren por el lado corto de cada vano (regla de la losa en una direccion)";

export async function correr() {
  const mod = await empaquetar(`
const g = globalThis; g.window = g;
const ctx2d = () => new Proxy({ font:"", measureText:()=>({width:10}), createLinearGradient:()=>({addColorStop(){}}), getImageData:()=>({data:new Uint8ClampedArray(4)}) }, { get:(t,k)=> k in t ? t[k] : (()=>{}) });
const nodo = () => ({ style:{}, width:300, height:150, appendChild(){}, setAttribute(){}, addEventListener(){}, removeEventListener(){}, classList:{add(){},remove(){},toggle(){},contains:()=>false}, getContext:()=>ctx2d(), querySelector:()=>null, querySelectorAll:()=>[], remove(){}, insertBefore(){}, cloneNode:()=>nodo(), toDataURL:()=>"", getBoundingClientRect:()=>({width:0,height:0,top:0,left:0}) });
g.document = { createElement: nodo, createElementNS: nodo, body: nodo(), head: nodo(), documentElement: nodo(), querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} }; g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){}, addListener(){} });
const { examplesRegistry } = await import("${R}/examples/src/workspace/exampleRegistry");
export function construir(id, over) {
  const ex = examplesRegistry.find(e => e.id === id); if (!ex) throw new Error("no existe " + id);
  const p = {}; for (const [k, d] of Object.entries(ex.params || {})) p[k] = d.default; Object.assign(p, over);
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}}, deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]}, springs:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  return { nodes: st.nodes.val, elements: st.elements.val, p };
}`, "vigas-secundarias");

  /** Las secundarias: barras horizontales cuyos dos nudos NO caen sobre un eje de columnas. */
  const secundarias = (m, ejesX, ejesY) => {
    const enEje = (v, ejes) => ejes.some(e => Math.abs(e - v) < 1e-6);
    const out = [];
    for (const el of m.elements) {
      if (el.length !== 2) continue;
      const a = m.nodes[el[0]], b = m.nodes[el[1]];
      if (Math.abs(a[2] - b[2]) > 1e-9 || a[2] < 1e-9) continue;            // horizontal y en un piso
      const dir = Math.abs(b[0] - a[0]) > 1e-9 ? "x" : "y";
      // principal = corre en X sobre un eje Y (y = eje), o corre en Y sobre un eje X (x = eje)
      if (dir === "x" ? enEje(a[1], ejesY) : enEje(a[0], ejesX)) continue;
      out.push({ dir, L: Math.hypot(b[0] - a[0], b[1] - a[1]), xm: (a[0] + b[0]) / 2, ym: (a[1] + b[1]) / 2 });
    }
    return out;
  };
  const filas = [];
  const fila = (que, medido, limite, ok, detalle) => filas.push({ que, crudo: true, medido, limite, ok, detalle });

  // 1. vanos 6 x 5 (el mezanine): el lado corto es Y -> secundarias en Y de 5 m
  {
    const m = mod.construir("edificio-aporticado", { nVanosX: 3, nVanosY: 2, nPisos: 1, spanX: 6, spanY: 5, vSecOn: 1, nVSec: 3, nSubViga: 1, slabOn: 0 });
    const s = secundarias(m, [0, 6, 12, 18], [0, 5, 10]);
    fila("6 x 5: numero de secundarias", s.length, 3 * 2 * 3, s.length === 18, "3 por vano x 6 vanos");
    fila("6 x 5: todas en Y (lado corto)", s.filter(v => v.dir === "y").length, s.length, s.every(v => v.dir === "y"), "antes salian en X, de 6 m");
    fila("6 x 5: longitud 5 m", s.length ? Math.max(...s.map(v => v.L)) : 0, 5, s.every(v => Math.abs(v.L - 5) < 1e-9), "la secundaria mide el lado corto");
  }
  // 2. vanos 4 x 7: el lado corto es X
  {
    const m = mod.construir("edificio-aporticado", { nVanosX: 2, nVanosY: 2, nPisos: 1, spanX: 4, spanY: 7, vSecOn: 1, nVSec: 2, nSubViga: 1, slabOn: 0 });
    const s = secundarias(m, [0, 4, 8], [0, 7, 14]);
    fila("4 x 7: todas en X de 4 m", s.filter(v => v.dir === "x" && Math.abs(v.L - 4) < 1e-9).length, s.length, s.length === 8 && s.every(v => v.dir === "x" && Math.abs(v.L - 4) < 1e-9), "2 por vano x 4 vanos");
  }
  // 3. vanos DESIGUALES en el mismo edificio: 8 x 5 pide Y, 4 x 5 pide X
  {
    const m = mod.construir("edificio-aporticado", { nVanosX: 2, nVanosY: 1, nPisos: 1, spanX: 4, svX_1: 8, svX_2: 4, spanY: 5, vSecOn: 1, nVSec: 2, nSubViga: 1, slabOn: 0 });
    const s = secundarias(m, [0, 8, 12], [0, 5]);
    const v1 = s.filter(v => v.xm < 8), v2 = s.filter(v => v.xm > 8);
    fila("8 x 5: secundarias en Y de 5 m", v1.filter(v => v.dir === "y" && Math.abs(v.L - 5) < 1e-9).length, 2, v1.length === 2 && v1.every(v => v.dir === "y" && Math.abs(v.L - 5) < 1e-9), "el vano largo pide Y");
    fila("4 x 5 (mismo edificio): secundarias en X de 4 m", v2.filter(v => v.dir === "x" && Math.abs(v.L - 4) < 1e-9).length, 2, v2.length === 2 && v2.every(v => v.dir === "x" && Math.abs(v.L - 4) < 1e-9), "el vano corto en X pide X: cada vano decide solo");
  }
  // 4. el manual sigue mandando: "X" fuerza X aunque sea el lado largo
  {
    const m = mod.construir("edificio-aporticado", { nVanosX: 1, nVanosY: 1, nPisos: 1, spanX: 6, spanY: 5, vSecOn: 1, nVSec: 2, nSubViga: 1, slabOn: 0, vSecDir: 0 });
    const s = secundarias(m, [0, 6], [0, 5]);
    fila("vSecDir = X manual: en X de 6 m", s.filter(v => v.dir === "x" && Math.abs(v.L - 6) < 1e-9).length, 2, s.length === 2 && s.every(v => v.dir === "x"), "la opcion manual no se pierde");
  }
  // 5. el mezanine del registry (6 x 5) hereda el Auto
  {
    const m = mod.construir("mezanine", { slabOn: 0, nSubViga: 1 });
    const s = secundarias(m, [0, 6, 12, 18], [0, 5, 10]);
    fila("mezanine: secundarias en Y de 5 m", s.filter(v => v.dir === "y" && Math.abs(v.L - 5) < 1e-9).length, s.length, s.length > 0 && s.every(v => v.dir === "y"), `${s.length} secundarias`);
  }
  return filas;
}
