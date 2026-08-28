#!/usr/bin/env node
/**
 * .Cuanto vale el DIAFRAGMA que el e2k mete por su cuenta?
 *
 *   node cli/_probe_diafragma.mjs
 *
 * El exportador asigna `DIAPH "D1"` al nudo SUPERIOR de cada cadena de
 * columnas (`chains.forEach` → `topNodeIdx`), o sea **solo a la ultima
 * planta**: un edificio de 4 pisos sale con diafragma rigido en la cubierta y
 * las otras tres sueltas. Y las plantillas de Hekatan NO tienen diafragma.
 *
 * Esto escribe los 8 `.e2k` DOS veces —con y sin— en carpetas hermanas, para
 * medir en ETABS lo que vale. Sin tocar el exportador todavia.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = join(__dirname, "..", "validation", "modelos", "plantillas");

const mod = await empaquetar(`
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

export function generar(tipo, diaphragm) {
  const ex = examplesRegistry.find((e) => e.id === "plantillas");
  const p = {}; for (const [k, d] of Object.entries(ex.params || {})) p[k] = d.default;
  p.tipo = tipo; p.__soloModelo = true;
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const ni = st.nodeInputs.val;
  return { e2k: exportE2k({ nodes: st.nodes.val, elements: st.elements.val,
             nodeInputs: ni, elementInputs: st.elementInputs.val,
             title: ex.name, units: { force: "Tonf", length: "m" },
             weightMode: "manual", diaphragm }),
           // .trae el MODELO algun diafragma? Es la pregunta de fondo: el e2k
           // solo deberia escribir lo que el modelo dice.
           tieneDiafragmas: !!(ni.diaphragms && ni.diaphragms.size) };
}`, "probe-diafragma");

const TIPOS = [[0, "portico-2d"], [1, "portico-3d"], [2, "portico-losa"], [3, "solo-rejilla"],
               [4, "losa-plana"], [5, "losa-vigas-borde"], [6, "dual"], [7, "arriostrado"]];

for (const modo of ["auto", "none"]) {
  const dir = join(BASE, "csi-diaf-" + modo);
  mkdirSync(dir, { recursive: true });
  for (const [t, nombre] of TIPOS) {
    const { e2k, tieneDiafragmas } = mod.generar(t, modo);
    writeFileSync(join(dir, `P${t}_${nombre}.e2k`), e2k, "utf-8");
    if (modo === "auto") {
      const nD1 = (e2k.match(/DIAPH "D1"/g) ?? []).length;
      const niveles = new Set((e2k.match(/POINTASSIGN\s+"[^"]+"\s+"([^"]+)"\s+DIAPH "D1"/g) ?? [])
        .map((l) => (l.match(/"([^"]+)"\s+DIAPH/) ?? [])[1]));
      console.log(`  ${t} ${nombre.padEnd(18)} el MODELO trae diafragmas: ${tieneDiafragmas ? "SI" : "NO"} ` +
        ` ·  el e2k escribe ${String(nD1).padStart(3)} DIAPH "D1" en los niveles [${[...niveles].join(", ")}]`);
    }
  }
}
console.log(`\n-> ${join(BASE, "csi-diaf-auto")}  y  csi-diaf-none`);
