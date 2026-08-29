#!/usr/bin/env node
/**
 * .Hay barras ANORMALMENTE LARGAS? Eso es una union mal hecha.
 *
 *   node cli/barras_largas.mjs <modelo.e2k> [cotaDesde]
 *
 * Una correa de cubierta de 20 m donde la luz es de 6 no es una correa: es una
 * barra que une dos puntos que no deberia. Sale de que el nudo intermedio no
 * existe, o de que se resolvio al nudo equivocado.
 *
 * Y NO se ve en ningun numero del analisis: el modelo resuelve igual, solo que
 * mas flojo. Se ve en el dibujo — de ahi que el error lo cazara Jorge mirando
 * el plano— o midiendolo asi.
 *
 * Se compara cada barra con la MEDIANA de su familia (viga / pilar / diagonal):
 * un umbral fijo no vale, porque una viga de 8 m es normal y un pilar de 8 no.
 */
import { readFileSync } from "node:fs";
import { basename } from "node:path";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const mod = await empaquetar(`
const g = globalThis; g.window = g;
g.document = { createElement: () => ({ style:{}, getContext:()=>null }), body:{}, head:{},
  querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){} });
const { parseE2k } = await import("${R}/examples/src/shared/e2kParser");
const { coserModelo } = await import("${R}/examples/src/shared/e2kCoser");

export function mirar(t, cota) {
  const crudo = parseE2k(t);
  const m = parseE2k(t);
  coserModelo(m);

  const analizar = (mm, etiqueta) => {
    const N = mm.nodes;
    const porTipo = new Map();
    mm.elements.forEach((el, i) => {
      if (el.length !== 2) return;
      const a = N[el[0]], b = N[el[1]];
      if (!a || !b) return;
      if (Math.max(a[2], b[2]) < cota) return;
      const L = Math.hypot(b[0]-a[0], b[1]-a[1], b[2]-a[2]);
      const tipo = mm.elementTypes?.[i] ?? "?";
      if (!porTipo.has(tipo)) porTipo.set(tipo, []);
      porTipo.get(tipo).push({ i, L, nombre: mm.elementNames?.[i],
        a: N[el[0]], b: N[el[1]],
        na: mm.nodeNames?.[el[0]], nb: mm.nodeNames?.[el[1]] });
    });
    const salida = [];
    for (const [tipo, lista] of porTipo) {
      const Ls = lista.map(x => x.L).sort((p, q) => p - q);
      const med = Ls[Math.floor(Ls.length / 2)];
      // Mas de 3 veces la mediana de su familia: sospechosa.
      const raras = lista.filter(x => x.L > med * 3).sort((p, q) => q.L - p.L);
      salida.push({ tipo, n: lista.length, mediana: med, max: Ls[Ls.length-1],
                    raras: raras.slice(0, 8), nRaras: raras.length });
    }
    return { etiqueta, tipos: salida };
  };

  return { crudo: analizar(crudo, "tal cual"), cosido: analizar(m, "cosido") };
}`, "barras-largas");

const f = process.argv[2];
const cota = process.argv[3] !== undefined ? +process.argv[3] : -1e9;
if (!f) { console.error("uso: node cli/barras_largas.mjs <modelo.e2k> [cotaDesde]"); process.exit(2); }

const r = mod.mirar(readFileSync(f, "utf-8"), cota);
console.log(`\n── ${basename(f)} · barras con al menos un nudo por encima de z = ${cota} ──`);
for (const paso of [r.crudo, r.cosido]) {
  console.log(`\n  ${paso.etiqueta}:`);
  for (const t of paso.tipos) {
    console.log(`    ${String(t.tipo).padEnd(8)} ${String(t.n).padStart(5)} barras · ` +
      `mediana ${t.mediana.toFixed(2)} m · maxima ${t.max.toFixed(2)} m · ` +
      `${t.nRaras} de mas de 3x la mediana`);
    for (const x of t.raras)
      console.log(`        ${String(x.nombre).padEnd(12)} ${x.L.toFixed(2)} m   ` +
        `${String(x.na).padEnd(16)} -> ${String(x.nb).padEnd(16)} ` +
        `(${x.a.map(v=>v.toFixed(2)).join(",")}) -> (${x.b.map(v=>v.toFixed(2)).join(",")})`);
  }
}
