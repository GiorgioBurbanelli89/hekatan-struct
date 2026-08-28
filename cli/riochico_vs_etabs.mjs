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

// ⚠️ No todos los joints de ETABS son parte de la estructura. En este modelo,
// 55 de los 787 no los toca NI un frame NI un area: son puntos que el
// proyectista dibujo y de los que luego borro el elemento. ETABS los guarda; no
// aportan nada al analisis, y dos de ellos ni siquiera estan en el `.e2k` (el
// fichero tiene 605 POINT). Por eso la cifra que vale no es «785 de 787» sino
// cuantos de los que TIENEN elemento se recuperan.
const conElemento = new Set();
for (const e of etabs.frames ?? []) { conElemento.add(String(e.node_i)); conElemento.add(String(e.node_j)); }
for (const e of etabs.areas ?? []) for (const n of (e.nodes ?? [])) conElemento.add(String(n));

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
  const faltanUtiles = faltan.filter((o) => conElemento.has(o.n));
  const nUtiles = oraculo.filter((o) => conElemento.has(o.n)).length;
  console.log(`  de los que ETABS USA  ${String(nUtiles - faltanUtiles.length).padStart(5)} de ${nUtiles}` +
    `   (${(100 * (nUtiles - faltanUtiles.length) / nUtiles).toFixed(2)} %)   <- la cifra que vale`);
  console.log(`  faltan         ${String(faltan.length).padStart(5)}   ` +
    `(${faltanUtiles.length} con elemento · ${faltan.length - faltanUtiles.length} huerfanos de ETABS)`);
  console.log(`  sobran         ${String(sobran.length).padStart(5)}`);
  if (faltan.length) {
    console.log(`  ejemplos que faltan (joint de ETABS -> x y z):`);
    for (const o of faltan.slice(0, 40))
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
