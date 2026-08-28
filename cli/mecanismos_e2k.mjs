#!/usr/bin/env node
/**
 * DONDE esta el mecanismo de un .e2k importado.
 *
 *   node cli/mecanismos_e2k.mjs <fichero.e2k> [mas...]
 *
 * El solver solo dice «Matrix decomposition failed». Esto dice QUE nudo, en QUE
 * direccion y por culpa de QUE, buscandolo por geometria (ver `e2kMecanismos`).
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
const { buscarMecanismos, coartarGdlSueltos } = await import("${R}/examples/src/shared/e2kMecanismos");

export function mirar(t) {
  const crudo = buscarMecanismos(parseE2k(t));
  const m = parseE2k(t);
  coserModelo(m);
  const cosido = buscarMecanismos(m);
  // Y DESPUES de coartar: lo que quede ahi ya no es un nudo suelto, es un
  // mecanismo GLOBAL — varios nudos moviendose juntos—, que un analisis nudo a
  // nudo no puede ver.
  const infC = coartarGdlSueltos(m);
  const tras = buscarMecanismos(m);
  // .A que ELEMENTOS tocan los nudos sueltos? Eso es lo que hay que arreglar.
  const sueltos = new Set(cosido.lista.map(x => x.nudo));
  const porTipo = new Map();
  m.elements.forEach((el, i) => {
    if (!el.some(n => sueltos.has(n))) return;
    const r = m.elementInputs.momentReleases?.get(i);
    const clave = el.length > 2 ? "cascara"
      : (r ? "barra con releases" : "barra sin releases");
    porTipo.set(clave, (porTipo.get(clave) || 0) + 1);
  });
  // Y los GDL sueltos, por tipo.
  const cuenta = [0,0,0,0,0,0];
  for (const x of cosido.lista) for (const k of x.libres) cuenta[k]++;
  // Los que quedan DESPUES de coartar: esos son los de verdad. Y si son
  // oblicuos, hay que ver que barras tocan, porque los supports van por ejes
  // globales y no se pueden coartar sin cambiar el resultado.
  const quedan = tras.lista.map(x => {
    const toca = [];
    m.elements.forEach((el, i) => {
      if (!el.includes(x.nudo)) return;
      const r = m.elementInputs.momentReleases?.get(i);
      toca.push({ nombre: m.elementNames?.[i], tipo: el.length > 2 ? "AREA" : m.elementTypes?.[i],
        rel: r ? r.map((v,k)=> v ? ["PI","V2I","V3I","TI","M2I","M3I","PJ","V2J","V3J","TJ","M2J","M3J"][k] : "").filter(Boolean).join(" ") : "" });
    });
    return { ...x, coord: m.nodes[x.nudo], toca };
  });
  return { crudo, cosido, tras, coartados: infC.coartados, oblicuos: infC.oblicuos,
           quedan, porTipo: [...porTipo], cuenta, muestra: cosido.lista.slice(0, 10) };
}`, "mecanismos");

const GDL = ["UX", "UY", "UZ", "RX", "RY", "RZ"];
for (const f of process.argv.slice(2)) {
  const r = mod.mirar(readFileSync(f, "utf-8"));
  console.log(`\n── ${basename(f)} ${"─".repeat(46)}`);
  const linea = (n, i) => `  ${n.padEnd(10)} ${String(i.nudos).padStart(5)} nudos · ` +
    `${String(i.sueltosTraslacion).padStart(4)} con TRASLACION suelta · ` +
    `${String(i.sueltosGiro).padStart(4)} con GIRO suelto · ` +
    `${i.barrasSoloAxil} tramos solo-axil`;
  console.log(linea("crudo", r.crudo));
  console.log(linea("cosido", r.cosido));
  console.log(linea("coartado", r.tras) + `   (${r.coartados} GDL coartados, ${r.oblicuos} oblicuos)`);
  console.log(`  GDL sueltos por tipo: ` +
    r.cuenta.map((v, k) => `${GDL[k]} ${v}`).join(" · "));
  if (r.porTipo.length)
    console.log(`  elementos que tocan esos nudos: ` +
      r.porTipo.map(([k, v]) => `${v} ${k}`).join(" · "));
  for (const x of r.muestra)
    console.log(`    ${String(x.nombre).padEnd(24)} libres: ${x.libres.map(k => GDL[k]).join(" ")}`);
  if (r.quedan?.length) {
    console.log(`
  LO QUE QUEDA tras coartar (${r.quedan.length}) — esto es lo que rompe:`);
    for (const x of r.quedan.slice(0, 6)) {
      console.log(`    ${String(x.nombre).padEnd(22)} (${x.coord.map(v=>v.toFixed(3)).join(", ")})  ` +
        `rangoT=${x.rangoT} rangoG=${x.rangoG}` + (x.oblicuo ? "  OBLICUO" : "") +
        `  libres: ${x.libres.map(k => GDL[k]).join(" ") || "(ninguno por eje)"}`);
      for (const t of x.toca)
        console.log(`        toca ${String(t.nombre).padEnd(12)} ${String(t.tipo).padEnd(8)} ${t.rel}`);
    }
  }
}
