/**
 * Que el .e2k y el .s2k que exporta Hekatan lleven lo que dice el MODELO.
 *
 * Por que existe este caso: los dos exportadores tenían escritas a mano cosas
 * que en realidad son del modelo, y ninguna daba error — el fichero abría, el
 * programa resolvía, y salía un número parecido pero distinto.
 *
 *   1. `.s2k` sin NINGUNA carga nodal. La tabla `JOINT LOADS - FORCE` leía
 *      `nodeInputs.forces`, campo que NO EXISTE en el modelo de datos (es
 *      `loads`), así que el `if` nunca entraba. SAP abría el modelo, lo
 *      resolvía y daba TODO CERO sin protestar. No se había visto porque el
 *      galpón, con el que se validó el exportador, carga por `frameload`.
 *
 *   2. Poisson FIJO en los dos: 0.3 acero / 0.2 hormigón en el `.e2k` y 0.2 por
 *      defecto en el `.s2k` (que además lo deducía de `shearModuli`, un mapa
 *      que llenan las BARRAS y no las cáscaras). Con un modelo de ν = 0, ETABS
 *      y SAP daban 1.491651 donde el mismo modelo montado por la OAPI da
 *      1.500000 EXACTO. Ese 0.5 % parecía del exportador de geometría o del
 *      tipo de cáscara; era el material.
 *
 *   3. Tipo de cáscara FIJO: `MODELINGTYPE "ShellThick"` en el `.e2k` y
 *      `Type=ShellThin` (además SIN el guion que usa SAP) en el `.s2k`, sin
 *      mirar si el paño era membrana o cáscara.
 *
 * Cómo se supo qué escribir: NO adivinando. Se le pidió a ETABS y a SAP que
 * exportaran su PROPIO fichero de cada tipo y se leyó
 * (`galpon-bodega-electoral/tipos_cascara_export.py`):
 *
 *     ETABS  MODELINGTYPE "ShellThin" | "ShellThick" | "Membrane"
 *     SAP    Type=Shell-Thin | Shell-Thick | Membrane      (con guion)
 *
 * Medido después del arreglo, mismo modelo por los dos caminos:
 *
 *   | caso          | ETABS OAPI | ETABS ← .e2k | SAP OAPI  | SAP ← .s2k |
 *   |---------------|------------|--------------|-----------|------------|
 *   | patch test    |  1.500000  |   1.500000   | 1.500000  |  1.500000  |
 *   | cantilever    |  0.354201  |   0.354201   | 0.354201  |  0.354201  |
 *   | Cook          | 24.38235   |  ✗ stories   | 24.38235  | 24.38235   |
 *
 * ⚠️ Cook y el hemisferio NO entran por `.e2k`: ese formato se organiza por
 * STORIES y esos modelos no tienen niveles (cada columna de nudos a una Z
 * distinta / geometría 3D). ETABS los reinterpreta y salen 168 nudos y 36 áreas
 * en vez de 81 y 64. Es una limitación del FORMATO, no del exportador — por
 * `.s2k` entran los cuatro. Para ETABS, esos modelos van por la OAPI.
 *
 * Este caso no necesita ETABS ni SAP: lee el texto que sale del exportador.
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
const { exportE2k } = await import("${R}/examples/src/shared/e2kExporter");
const { exportS2k } = await import("${R}/examples/src/shared/s2kExporter");

export function exportar(id) {
  const ex = examplesRegistry.find(e => e.id === id);
  const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default;
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]}, springs:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const arg = { nodes: st.nodes.val, elements: st.elements.val,
                nodeInputs: st.nodeInputs.val, elementInputs: st.elementInputs.val,
                units: { force: "KN", length: "M" } };
  const nCargas = [...(st.nodeInputs.val.loads || new Map())]
    .filter(([, v]) => v.some(x => Math.abs(x) > 1e-12)).length;
  return { e2k: exportE2k({ ...arg, diaphragm: "none", weightMode: "manual" }),
           s2k: exportS2k({ ...arg, selfWtMult: 0 }), nCargas };
}
`;

export const nombre = "export-fidelidad";
export const descripcion =
  "el .e2k y el .s2k llevan el material, el tipo de cáscara y las cargas del MODELO";

export async function correr() {
  const mod = await empaquetar(FUENTE, "export-fid");
  const filas = [];
  const bien = (que, ok, detalle) =>
    filas.push({ que, medido: ok ? 0 : 1, limite: 0, ok, detalle });

  // El patch test tiene nu = 0 y es MEMBRANA: los tres datos a la vez.
  const I = mod.exportar("itw-patch-test");

  bien("e2k · el Poisson es el del modelo (ν = 0), no el 0.2 de siempre",
    /SYMTYPE "Isotropic"\s+E\s+\S+\s+U\s+0(\s|$)/.test(I.e2k),
    (I.e2k.split("\n").find(l => l.includes("SYMTYPE")) || "(no hay MATERIAL)").trim());

  bien("s2k · el Poisson es el del modelo (ν = 0)",
    /U12=0(\s|$)/.test(I.s2k),
    (I.s2k.split("\n").find(l => l.includes("U12=")) || "(no hay material)").trim());

  bien("e2k · el tipo de cáscara es el del modelo (Membrane)",
    /MODELINGTYPE "Membrane"/.test(I.e2k),
    (I.e2k.split("\n").find(l => l.includes("MODELINGTYPE")) || "(no hay SHELLPROP)").trim());

  bien("s2k · el tipo con la sintaxis de SAP (Membrane, y Shell-Thin CON guion)",
    /Type=Membrane/.test(I.s2k) && !/Type=ShellThin/.test(I.s2k),
    (I.s2k.split("\n").find(l => l.includes("AreaType=Shell")) || "(no hay sección)").trim());

  const nS2k = (I.s2k.match(/^\s+Joint=\d+\s+LoadPat=/gm) || []).length;
  bien("s2k · las cargas nodales VIAJAN (el bug del campo `forces`)",
    nS2k === I.nCargas && nS2k > 0,
    `${nS2k} cargas en el .s2k contra ${I.nCargas} del modelo`);

  // El hemisferio es cáscara de verdad: tiene que salir como cáscara, no membrana.
  const IV = mod.exportar("itw-hemisferio");
  bien("s2k · una cáscara sale como cáscara, no como membrana",
    /Type=Shell-Thick/.test(IV.s2k),
    (IV.s2k.split("\n").find(l => l.includes("AreaType=Shell")) || "(no hay sección)").trim());

  return filas;
}
