#!/usr/bin/env node
/**
 * LOS APOYOS del .e2k importado, contra los que tiene ETABS.
 *
 *   node cli/apoyos_vs_etabs.mjs <modelo.e2k> <modelo_etabs.json>
 *
 * Un apoyo de MENOS deja un mecanismo; uno de MAS hace el modelo mas rigido y
 * se come reacciones que deberian ir a otro sitio. Las dos cosas se ven aqui y
 * en ningun otro lado: el numero de apoyos no aparece en ningun resultado.
 *
 * Se comparan por COORDENADA, no por nombre: los nombres de joint de ETABS y
 * las claves `punto@planta` del .e2k no tienen por que coincidir.
 */
import { readFileSync } from "node:fs";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const [fE2k, fJson] = process.argv.slice(2);
if (!fE2k || !fJson) {
  console.error("uso: node cli/apoyos_vs_etabs.mjs <modelo.e2k> <modelo_etabs.json>");
  process.exit(2);
}

const mod = await empaquetar(`
const g = globalThis; g.window = g;
g.document = { createElement: () => ({ style:{}, getContext:()=>null }), body:{}, head:{},
  querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){} });
const { parseE2k } = await import("${R}/examples/src/shared/e2kParser");
export function leer(t) {
  const m = parseE2k(t);
  const usado = new Set();
  for (const el of m.elements) for (const n of el) usado.add(n);
  const out = [];
  for (const [n, v] of (m.nodeInputs.supports ?? new Map()))
    out.push({ p: m.nodes[n], v, nombre: m.nodeNames?.[n], conElemento: usado.has(n) });
  return out;
}`, "apoyos-vs");

const etabs = JSON.parse(readFileSync(fJson, "utf-8"));
const TOL = 1e-3;
const clave = (p) => `${Math.round(p[0] / TOL)}|${Math.round(p[1] / TOL)}|${Math.round(p[2] / TOL)}`;

const suyos = Object.entries(etabs.apoyos).map(([n, v]) => {
  const q = etabs.nodos[n];
  return { n, p: [q.x, q.y, q.z], v };
});
const mios = mod.leer(readFileSync(fE2k, "utf-8"));

const setSuyos = new Map(suyos.map((a) => [clave(a.p), a]));
const setMios = new Map(mios.map((a) => [clave(a.p), a]));

const faltan = suyos.filter((a) => !setMios.has(clave(a.p)));
const sobran = mios.filter((a) => !setSuyos.has(clave(a.p)));
const sobranUtiles = sobran.filter((a) => a.conElemento);

console.log(`apoyos en ETABS ......... ${suyos.length}`);
console.log(`apoyos en Hekatan ....... ${mios.length}   (${mios.filter(a=>a.conElemento).length} sobre un nudo con elemento)`);
console.log(`  coinciden ............. ${suyos.length - faltan.length} de ${suyos.length}`);
console.log(`  FALTAN (mecanismo) .... ${faltan.length}`);
console.log(`  SOBRAN (mas rigido) ... ${sobran.length}   de ellos ${sobranUtiles.length} sobre un nudo con elemento`);

// Y los GDL: un apoyo puede estar en el sitio y coartar otra cosa.
let distintos = 0;
for (const a of suyos) {
  const b = setMios.get(clave(a.p));
  if (!b) continue;
  for (let i = 0; i < 6; i++) if (!!a.v[i] !== !!b.v[i]) { distintos++; break; }
}
console.log(`  en el sitio pero con OTROS GDL: ${distintos}`);

if (faltan.length) {
  console.log(`\n  los que FALTAN (x y z · gdl de ETABS):`);
  for (const a of faltan.slice(0, 10))
    console.log(`    ${a.n.padEnd(6)} ${a.p.map((v) => v.toFixed(3).padStart(9)).join(" ")}  ` +
      a.v.map((x, i) => x ? ["UX","UY","UZ","RX","RY","RZ"][i] : "").filter(Boolean).join(" "));
}
if (sobranUtiles.length) {
  console.log(`\n  los que SOBRAN sobre un nudo con elemento (x y z):`);
  for (const a of sobranUtiles.slice(0, 10))
    console.log(`    ${String(a.nombre).padEnd(18)} ${a.p.map((v) => v.toFixed(3).padStart(9)).join(" ")}  ` +
      a.v.map((x, i) => x ? ["UX","UY","UZ","RX","RY","RZ"][i] : "").filter(Boolean).join(" "));
}
