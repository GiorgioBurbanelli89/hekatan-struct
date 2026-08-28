#!/usr/bin/env node
/**
 * EL GALPON, el ciclo entero:  .heks -> .e2k/.s2k -> ETABS/SAP2000 -> .e2k -> Hekatan
 *
 *   node cli/galpon_ciclo.mjs [--caso SERVICIO] [--modelo modelo_analitico.json]
 *
 * El galpon NO es un ejemplo del registry: se genera desde el DWG con
 * `galpon-bodega-electoral/a_heks.py` y vive como `.heks`. Por eso no entraba en
 * `exportar_csi.mjs` ni en `roundtrip_areas.mjs`, que van por `examplesRegistry`.
 * Y es el modelo REAL —cerchas, mezanine, rampa y cubierta de zinc, con
 * membranas y deck de verdad—, o sea justo donde hay que mirar.
 *
 * Este guion abre el hueco: lee el `.heks` por `cliModeler` (el MISMO camino que
 * la app, que es donde vive el cruce I22/I33) y lo pasa por `exportE2k` y
 * `exportS2k`. Luego:
 *
 *   python cli/roundtrip_areas_etabs.py <carpeta>     -> ETABS escribe su e2k
 *   node   cli/galpon_ciclo.mjs --volver              -> se relee y se compara
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const GALPON = join(__dirname, "..", "..", "galpon-bodega-electoral");
const BASE = join(__dirname, "..", "validation", "modelos", "galpon-ciclo");
mkdirSync(BASE, { recursive: true });

const arg = (k, d) => {
  const i = process.argv.indexOf(k);
  return i > 0 ? process.argv[i + 1] : d;
};
const CASO = arg("--caso", "SERVICIO");
const MODELO = arg("--modelo", "modelo_analitico.json");
// Por defecto el entrepiso va como DECK, o sea MEMBRANA: se queda fuera de la
// matriz y el galpon sale con CERO shells. Para probar las areas de verdad hay
// que pedirle una losa de PLACA (`--losa maciza_thin`).
const LOSA = arg("--losa", "deck");
const SOLO_VOLVER = process.argv.includes("--volver");

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
const { cliModeler } = await import("${R}/examples/src/cli-modeler/cliModeler");
const { exportE2k } = await import("${R}/examples/src/shared/e2kExporter");
const { exportS2k } = await import("${R}/examples/src/shared/s2kExporter");
const { parseE2k } = await import("${R}/examples/src/shared/e2kParser");

const st = (v) => ({ val: v });

/** Lee el .heks por cliModeler, lo resuelve y lo exporta a los dos textos CSI. */
export function desdeHeks(texto) {
  g.window.__hekatanCliScript = texto;
  const s = { nodes: st([]), elements: st([]), nodeInputs: st({}), elementInputs: st({}),
              deformOutputs: st({}), analyzeOutputs: st({}), objects3D: st([]) };
  cliModeler.build({}, s);
  const ei = s.elementInputs.val, ni = s.nodeInputs.val;
  const comun = { nodes: s.nodes.val, elements: s.elements.val,
                  nodeInputs: ni, elementInputs: ei,
                  title: "Galpon bodega electoral", units: { force: "Tonf", length: "m" } };
  let fz = 0; for (const [, v] of (ni.loads ?? [])) fz += v[2] || 0;
  const R6 = [0,0,0,0,0,0];
  for (const [, v] of (s.deformOutputs.val.reactions ?? [])) for (let i=0;i<6;i++) R6[i] += v[i] || 0;
  let uz = 0;
  for (const [, v] of (s.deformOutputs.val.deformations ?? [])) if (v[2] < uz) uz = v[2];
  const uniq = (m, f) => [...new Set([...(m ?? new Map()).values()].map(f ?? (v => v)))];
  return {
    e2k: exportE2k({ ...comun, weightMode: "manual" }),
    s2k: exportS2k({ ...comun, selfWtMult: 0 }),
    nNodos: s.nodes.val.length,
    nBarras: s.elements.val.filter(e => e.length === 2).length,
    nShells: s.elements.val.filter(e => e.length === 3 || e.length === 4).length,
    espesores: uniq(ei.thicknesses, v => +v.toFixed(6)).sort((a,b)=>a-b),
    fz, R6, uz,
  };
}

/** Lo que Hekatan entiende de un .e2k */
export function releer(texto) {
  const m = parseE2k(texto);
  const uniq = (mm, f) => [...new Set([...(mm ?? new Map()).values()].map(f ?? (v => v)))];
  return {
    nNodos: m.nodes.length,
    nBarras: m.elements.filter(e => e.length === 2).length,
    nShells: m.elements.filter(e => e.length === 3 || e.length === 4).length,
    nAreasLeidas: m.info.nAreas,
    nAreasMontadas: m.info.nAreasMontadas ?? 0,
    espesores: uniq(m.elementInputs?.thicknesses, v => +v.toFixed(6)).sort((a,b)=>a-b),
    zMin: Math.min(...m.nodes.map(n => n[2])),
    zMax: Math.max(...m.nodes.map(n => n[2])),
  };
}`, "galpon-ciclo");

const f = (v) => JSON.stringify(v);
const heks = join(BASE, "galpon_" + CASO + "_" + LOSA + ".heks");

if (!SOLO_VOLVER) {
  // 1) el .heks, generado como siempre desde el json del DWG
  execFileSync("python", ["a_heks.py", MODELO, heks, "--losa", LOSA], {
    cwd: GALPON, stdio: "pipe", env: { ...process.env, CASO },
  });
  console.log("1) .heks generado desde " + MODELO + "  (CASO=" + CASO + ", losa " + LOSA + ")");
}

const A = mod.desdeHeks(readFileSync(heks, "utf-8"));
writeFileSync(join(BASE, "galpon_" + LOSA + "_A.e2k"), A.e2k, "utf-8");
writeFileSync(join(BASE, "galpon_" + LOSA + "_A.s2k"), A.s2k, "utf-8");
console.log("2) el modelo de Hekatan:");
console.log("   " + A.nNodos + " nudos · " + A.nBarras + " barras · " + A.nShells + " shells");
console.log("   espesores " + f(A.espesores));
console.log("   SumFz aplicado " + A.fz.toFixed(2) + " kN   ·   SumRz " + A.R6[2].toFixed(2) +
            " kN   ·   Uz " + (A.uz * 1000).toFixed(3) + " mm");
console.log("   -> galpon_" + LOSA + "_A.e2k  +  .s2k");

// 3) .lo relee Hekatan? (sin pasar por ETABS todavia)
const C0 = mod.releer(A.e2k);
const ok0 = C0.nShells === A.nShells && f(C0.espesores) === f(A.espesores);
console.log("\n3) releyendo NUESTRO propio .e2k:");
console.log("   nudos " + A.nNodos + "/" + C0.nNodos + "  barras " + A.nBarras + "/" + C0.nBarras +
            "  shells " + A.nShells + "/" + C0.nShells +
            "  areas vistas/montadas " + C0.nAreasLeidas + "/" + C0.nAreasMontadas);
console.log("   espesores " + f(A.espesores) + " / " + f(C0.espesores) + "   " + (ok0 ? "OK" : "<-- SE PIERDEN"));
console.log("   cotas Z: " + C0.zMin.toFixed(3) + " .. " + C0.zMax.toFixed(3) + " m");

// 4) la vuelta por ETABS, si ya esta
// `roundtrip_areas_etabs.py` quita el sufijo "_A" y anade "_B": galpon_X_A.e2k -> galpon_X_B.e2k
const vuelta = join(BASE, "galpon_" + LOSA + "_B.e2k");
if (existsSync(vuelta)) {
  const C = mod.releer(readFileSync(vuelta, "utf-8"));
  const ok = C.nShells === A.nShells && f(C.espesores) === f(A.espesores);
  console.log("\n4) EL CICLO CERRADO (el .e2k que ETABS escribe de vuelta):");
  console.log("   nudos " + A.nNodos + "/" + C.nNodos + "  barras " + A.nBarras + "/" + C.nBarras +
              "  shells " + A.nShells + "/" + C.nShells);
  console.log("   espesores " + f(A.espesores) + " / " + f(C.espesores) + "   " + (ok ? "OK" : "<--"));
  console.log("   cotas Z: " + C.zMin.toFixed(3) + " .. " + C.zMax.toFixed(3) + " m");
} else {
  console.log("\n4) falta la vuelta. Corre:");
  console.log("   python cli/roundtrip_areas_etabs.py " + BASE);
}
