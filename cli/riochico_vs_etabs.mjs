#!/usr/bin/env node
/**
 * El modelo real importado, NUDO A NUDO contra ETABS.
 *
 *   node cli/riochico_vs_etabs.mjs <modelo.e2k> <modelo_etabs.json>
 *
 * El JSON lo saca la OAPI de ETABS (`Api Etabs/extraer_modelo_riochico.py`) y
 * trae los joints con su x,y,z en kN-m. Es el arbitro: no vale mirar si el
 * dibujo "se ve bien" ni si el solver devuelve algo — vale si los nudos estan
 * donde ETABS dice que estan.
 *
 * Se mide en los dos sentidos, que no es lo mismo:
 *   · joints de ETABS que Hekatan NO tiene  -> falta geometria
 *   · nudos de Hekatan que ETABS no tiene   -> sobra (o esta descolocada)
 */
import { readFileSync } from "node:fs";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const [fE2k, fJson] = process.argv.slice(2);
if (!fE2k || !fJson) {
  console.error("uso: node cli/riochico_vs_etabs.mjs <modelo.e2k> <modelo_etabs.json>");
  process.exit(2);
}

const mod = await empaquetar(`
const g = globalThis; g.window = g;
g.document = { createElement: () => ({ style:{}, getContext:()=>null }), body:{}, head:{},
  querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){} });
const { parseE2k } = await import("${R}/examples/src/shared/e2kParser");
const { coserModelo } = await import("${R}/examples/src/shared/e2kCoser");
export function leer(t, coser) {
  const m = parseE2k(t);
  const inf = coser ? coserModelo(m) : null;
  return { nodes: m.nodes, nBarras: m.elements.filter(e => e.length === 2).length,
           nAreas: m.elements.filter(e => e.length > 2).length, inf };
}`, "vs-etabs");

const etabs = JSON.parse(readFileSync(fJson, "utf-8"));
const oraculo = Object.entries(etabs.nodos).map(([n, v]) => ({ n, p: [v.x, v.y, v.z] }));

const TOL = 1e-3;
function comparar(titulo, nodes) {
  const clave = (p) => `${Math.round(p[0] / TOL)}|${Math.round(p[1] / TOL)}|${Math.round(p[2] / TOL)}`;
  const mios = new Set(nodes.map(clave));
  const suyos = new Set(oraculo.map((o) => clave(o.p)));
  const faltan = oraculo.filter((o) => !mios.has(clave(o.p)));
  const sobran = nodes.filter((p) => !suyos.has(clave(p)));
  // De los que faltan, .a que distancia esta el nudo mas cercano de Hekatan?
  // Si es cero-coma-algo, es una cota mal leida; si son metros, falta el nudo.
  let peor = 0, cerca = 0;
  for (const o of faltan.slice(0, 400)) {
    let d = Infinity;
    for (const p of nodes) {
      const e = Math.hypot(p[0] - o.p[0], p[1] - o.p[1], p[2] - o.p[2]);
      if (e < d) d = e;
    }
    if (d < 0.5) cerca++;
    if (d > peor && d < 1e9) peor = d;
  }
  console.log(`\n── ${titulo} ${"─".repeat(46 - titulo.length)}`);
  console.log(`  nudos          Hekatan ${String(nodes.length).padStart(5)}   ETABS ${String(oraculo.length).padStart(5)}`);
  console.log(`  COINCIDEN      ${String(oraculo.length - faltan.length).padStart(5)} de ${oraculo.length}` +
    `   (${(100 * (oraculo.length - faltan.length) / oraculo.length).toFixed(1)} %)`);
  console.log(`  faltan         ${String(faltan.length).padStart(5)}   de ellos ${cerca} tienen un nudo a menos de 0.5 m`);
  console.log(`  sobran         ${String(sobran.length).padStart(5)}`);
  if (faltan.length) {
    console.log(`  ejemplos que faltan (joint de ETABS -> x y z):`);
    for (const o of faltan.slice(0, 6))
      console.log(`    ${o.n.padEnd(6)} ${o.p.map((v) => v.toFixed(3).padStart(8)).join(" ")}`);
  }
  return { faltan: faltan.length, sobran: sobran.length };
}

const t = readFileSync(fE2k, "utf-8");
const crudo = mod.leer(t, false);
comparar("tal cual lo lee el parser", crudo.nodes);
const cosido = mod.leer(t, true);
comparar("cosido (fundido + cruces + partido)", cosido.nodes);
console.log(`\n  ETABS: ${etabs.frames ? Object.keys(etabs.frames).length : "?"} frames · ` +
  `${etabs.areas ? Object.keys(etabs.areas).length : "?"} areas`);
console.log(`  Hekatan cosido: ${cosido.nBarras} barras · ${cosido.nAreas} areas`);
