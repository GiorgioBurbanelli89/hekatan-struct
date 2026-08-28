#!/usr/bin/env node
/**
 * .Lee Hekatan un `.e2k` ESCRITO POR ETABS, de un modelo real y ajeno?
 *
 *   node cli/importar_e2k_real.mjs <fichero.e2k|.$et> [...]
 *
 * Los otros guiones cierran el ciclo sobre modelos que salieron de Hekatan: el
 * fichero lo escribe el mismo exportador, asi que el parser se enfrenta a un
 * dialecto conocido. Esto es la prueba dura — un `.e2k` que ETABS escribio de un
 * modelo que Hekatan nunca vio, con lo que ETABS pone y como lo pone.
 *
 * No hay "resultado esperado" contra el que medir: lo que se comprueba es que
 * NADA se caiga por el camino y que la geometria sea la del fichero —
 * `AREA` leidas contra areas montadas, `LINE` contra barras, y las cotas y los
 * espesores en metros, no en las unidades crudas del fichero.
 */
import { readFileSync, existsSync } from "node:fs";
import { basename } from "node:path";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const FICHEROS = process.argv.slice(2);
if (!FICHEROS.length) {
  console.error("uso: node cli/importar_e2k_real.mjs <fichero.e2k> [...]");
  process.exit(2);
}

const mod = await empaquetar(
  `export { parseE2k } from "${R}/examples/src/shared/e2kParser";\n`, "importar-real");

console.log("fichero                                  UNITS      POINT/LINE/AREA   nudos  barras  shells  areas montadas");
console.log("-".repeat(118));

let malos = 0;
for (const f of FICHEROS) {
  if (!existsSync(f)) { console.log(basename(f).padEnd(40) + " NO EXISTE"); malos++; continue; }
  const texto = readFileSync(f, "utf-8");
  // Lo que hay en el TEXTO, contado a mano: es la vara contra la que se mide.
  const nP = (texto.match(/^\s*POINT\s+"/gm) ?? []).length;
  const nL = (texto.match(/^\s*LINE\s+"/gm) ?? []).length;
  const nA = (texto.match(/^\s*AREA\s+"/gm) ?? []).length;
  let m;
  try { m = mod.parseE2k(texto); }
  catch (e) { console.log(basename(f).padEnd(40) + " PARSER: " + String(e?.message || e).slice(0, 60)); malos++; continue; }
  const shells = m.elements.filter(e => e.length === 3 || e.length === 4).length;
  const barras = m.elements.filter(e => e.length === 2).length;
  const mont = m.info.nAreasMontadas ?? 0;
  const zs = m.nodes.map(n => n[2]);
  const th = [...new Set([...(m.elementInputs?.thicknesses ?? new Map()).values()]
    .map(v => +v.toFixed(4)))].sort((a, b) => a - b);
  const ok = nA === 0 || mont === nA;
  if (!ok) malos++;
  console.log(basename(f).slice(0, 39).padEnd(40) +
    (m.units.force + "/" + m.units.length).padEnd(11) +
    (nP + "/" + nL + "/" + nA).padStart(15) + "  " +
    String(m.nodes.length).padStart(6) + String(barras).padStart(8) +
    String(shells).padStart(8) + "   " + (mont + " de " + nA) + (ok ? "  OK" : "  <--"));
  console.log("    cotas Z: " + Math.min(...zs).toFixed(3) + " .. " + Math.max(...zs).toFixed(3) +
    " m   ·   espesores " + JSON.stringify(th) + " m");
}
if (malos) process.exitCode = 1;
