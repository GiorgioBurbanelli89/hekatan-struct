#!/usr/bin/env node
/**
 * COSE un .e2k importado y dice si despues resuelve.
 *
 *   node cli/coser_e2k.mjs <fichero.e2k> [mas.e2k ...]
 *
 * ETABS malla al analizar (`AUTOMESH` / `MESHATINTERSECTIONS` en cada linea del
 * fichero); leer el .e2k literalmente da un modelo que se ve entero y no
 * resuelve. Esto aplica `coserModelo` y ensena el antes y el despues.
 */
import { readFileSync } from "node:fs";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const mod = await empaquetar(`
const g = globalThis; g.window = g;
g.document = { createElement: () => ({ style:{}, getContext:()=>null }), body:{}, head:{},
  querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){} });
const { parseE2k } = await import("${R}/examples/src/shared/e2kParser");
const { coserModelo } = await import("${R}/examples/src/shared/e2kCoser");
const { muellesDelModelo } = await import("${R}/examples/src/shared/e2kMuelles");
const { deform } = await import("${R}/hekatan-fem/src/index");

function resolver(m, conMuelles) {
  // Fuera los huerfanos: 6 GDL sin rigidez cada uno hacen singular la matriz y
  // taparian lo que se quiere ver.
  const usado = new Set();
  for (const el of m.elements) for (const n of el) usado.add(n);
  const mapa = new Map(); const nodes = [];
  m.nodes.forEach((n, i) => { if (usado.has(i)) { mapa.set(i, nodes.length); nodes.push(n); } });
  const elements = m.elements.map(el => el.map(i => mapa.get(i)));
  const rm = (mm) => { if (!(mm instanceof Map)) return mm; const o = new Map();
    for (const [i, v] of mm) { const j = mapa.get(i); if (j !== undefined) o.set(j, v); } return o; };
  const ni = { ...m.nodeInputs, supports: rm(m.nodeInputs.supports), loads: rm(m.nodeInputs.loads) };
  // Los muelles se calculan sobre la geometria FINAL y luego se renumeran, que
  // es el mismo orden que sigue el ejemplo real.
  let muelles = [], infM = null;
  if (conMuelles) {
    const r = muellesDelModelo(m);
    infM = r.informe;
    muelles = r.muelles.map(s => ({ ...s, node: mapa.get(s.node) }))
                       .filter(s => s.node !== undefined);
  }
  try {
    const d = deform(nodes, elements, ni, m.elementInputs, muelles);
    const nDef = d?.deformations?.size ?? 0;
    let uz = 0;
    for (const [, v] of (d?.deformations ?? [])) if (v[2] < uz) uz = v[2];
    return { nudos: nodes.length, elems: elements.length, nDef, uz, err: "",
             nMuelles: muelles.length, infM };
  } catch (e) {
    return { nudos: nodes.length, elems: elements.length, nDef: 0, uz: 0,
             err: String(e?.message || e).slice(0, 46), nMuelles: muelles.length, infM };
  }
}

/** Los trozos que SIGUEN sin llegar a un apoyo, con su pinta. */
function quedan(m) {
  const ady = new Map();
  const une = (a,b) => { if(!ady.has(a)) ady.set(a,[]); ady.get(a).push(b); };
  for (const el of m.elements) for (const a of el) for (const b of el) if (a!==b) une(a,b);
  const usado = new Set(); for (const el of m.elements) for (const n of el) usado.add(n);
  // Un nudo con MUELLE tambien esta sujeto: contar solo los apoyos daba 38
  // trozos donde de verdad hay menos: la cimentacion la sostiene el terreno.
  const apoyo = new Set([...(m.nodeInputs.supports ?? new Map())].map(([k])=>k));
  for (const s of muellesDelModelo(m).muelles) apoyo.add(s.node);
  const visto = new Set(); const flot = [];
  for (const s of usado) { if (visto.has(s)) continue;
    const pila=[s], c=[]; visto.add(s);
    while(pila.length){ const v=pila.pop(); c.push(v);
      for (const w of ady.get(v)??[]) if(!visto.has(w)){visto.add(w);pila.push(w);} }
    if (!c.some(n=>apoyo.has(n))) flot.push(c); }
  const enFlot = new Set(flot.flat());
  const tipos = new Map(); 
  m.elements.forEach((el,i)=>{ if(!el.some(n=>enFlot.has(n))) return;
    const t = el.length===2 ? (m.elementTypes?.[i] ?? "frame") : "area";
    tipos.set(t,(tipos.get(t)||0)+1); });
  const cotas = new Map();
  for (const n of enFlot) { const z=m.nodes[n][2].toFixed(2); cotas.set(z,(cotas.get(z)||0)+1); }
  const tam = new Map(); for (const c of flot) tam.set(c.length,(tam.get(c.length)||0)+1);
  return { n: flot.length, nudos: enFlot.size,
    tam: [...tam].sort((a,b)=>b[1]-a[1]),
    cotas: [...cotas].sort((a,b)=>b[1]-a[1]).slice(0,6),
    tipos: [...tipos],
    muestra: flot.slice(0,6).map(c=>c.map(n=>m.nodeNames?.[n]??n).join(",")) };
}

/**
 * El mismo modelo cosido pero SIN los trozos que no llegan a un apoyo. Si asi
 * resuelve, todo lo que queda es ese problema; si tampoco, hay otra cosa y hay
 * que buscarla aparte. Es la unica forma de saberlo sin adivinar.
 */
function sinFlotantes(m) {
  const ady = new Map();
  const une=(a,b)=>{ if(!ady.has(a)) ady.set(a,[]); ady.get(a).push(b); };
  for (const el of m.elements) for (const a of el) for (const b of el) if(a!==b) une(a,b);
  const usado = new Set(); for (const el of m.elements) for (const n of el) usado.add(n);
  const anclado = new Set([...(m.nodeInputs.supports ?? new Map())].map(([k])=>k));
  // Un nudo con MUELLE tambien esta sujeto: es lo que sostiene la cimentacion.
  for (const s of muellesDelModelo(m).muelles) anclado.add(s.node);
  const visto = new Set(); const fuera = new Set();
  for (const s of usado) { if (visto.has(s)) continue;
    const pila=[s], c=[]; visto.add(s);
    while(pila.length){ const v=pila.pop(); c.push(v);
      for (const w of ady.get(v)??[]) if(!visto.has(w)){visto.add(w);pila.push(w);} }
    if (!c.some(n=>anclado.has(n))) for (const n of c) fuera.add(n); }
  const keep = [];
  m.elements.forEach((el,i)=>{ if(!el.some(n=>fuera.has(n))) keep.push(i); });
  const ei = {};
  for (const [k,v] of Object.entries(m.elementInputs)) {
    if (!(v instanceof Map)) { ei[k]=v; continue; }
    const o=new Map(); keep.forEach((viejo,j)=>{ if(v.has(viejo)) o.set(j, v.get(viejo)); });
    ei[k]=o;
  }
  return { ...m, elements: keep.map(i=>m.elements[i]), elementInputs: ei,
           quitados: fuera.size };
}

export function probar(t) {
  const antes = resolver(parseE2k(t), false);
  const m = parseE2k(t);
  const inf = coserModelo(m);
  const despues = resolver(m, true);
  const podado = sinFlotantes(m);
  const limpio = resolver(podado, true);
  limpio.quitados = podado.quitados;
  // .Y si los RELEASES son el mecanismo? Una viga con TI liberada y nada que
  // le sujete el giro en el otro extremo es un GDL libre: resuelve, pero con
  // desplazamientos de 1e15. Quitarlos no arregla nada — DICE si son eso.
  const sinRel = { ...podado, elementInputs: { ...podado.elementInputs, momentReleases: new Map() } };
  const sr = resolver(sinRel, true);
  return { inf, antes, despues, limpio, sinRel: sr, restan: quedan(m) };
}`, "coser-cli");

for (const f of process.argv.slice(2)) {
  const { inf, antes, despues, limpio, sinRel, restan } = mod.probar(readFileSync(f, "utf-8"));
  console.log(`\n── ${f.split(/[\\/]/).pop()} ${"─".repeat(40)}`);
  console.log(`  nudos fundidos ....... ${inf.nudosFundidos}`);
  console.log(`  barras partidas ...... ${inf.barrasPartidas}  (+${inf.trozosNuevos} trozos)`);
  console.log(`  nudos de cruce ....... ${inf.nudosDeCruce}  (MESHATINTERSECTIONS)`);
  console.log(`  cruces sin tocar ..... ${inf.crucesSinNudo}   (sin el flag: se cuentan y se dejan)`);
  console.log(`  trozos sin apoyo ..... ${inf.piezasFlotantesAntes} -> ${inf.piezasFlotantesDespues}`);
  const fila = (t, r) => `  ${t.padEnd(10)} ${String(r.nudos).padStart(5)} nudos ` +
    `${String(r.elems).padStart(5)} elems  ` +
    (r.nDef ? `RESUELVE (${r.nDef} nudos)  Uz min ${(r.uz * 1000).toFixed(2)} mm`
            : `no resuelve  ${r.err}`);
  console.log(fila("ANTES", antes));
  console.log(fila("COSIDO", despues));
  console.log(fila("SIN SUELTOS", limpio) + `   (${limpio.quitados} nudos fuera)`);
  console.log(fila("  y sin releases", sinRel));
  if (despues.infM)
    console.log(`  muelles .............. ${despues.nMuelles} en ${despues.infM.nudosConMuelle} nudos ` +
      `(${despues.infM.dePunto} de punto · ${despues.infM.deLinea} de linea · ${despues.infM.deArea} de area)` +
      (despues.infM.sinDefinicion.length ? `  SIN DEFINIR: ${despues.infM.sinDefinicion.join(", ")}` : ""));
  const q = restan;
  if (q.n) {
    console.log(`
  los ${q.n} trozos que SIGUEN sueltos (${q.nudos} nudos):`);
    console.log(`    tamanos [nudos, cuantos] ${JSON.stringify(q.tam)}`);
    console.log(`    cotas z [m, nudos]       ${JSON.stringify(q.cotas)}`);
    console.log(`    elementos                ${JSON.stringify(q.tipos)}`);
    for (const s of q.muestra) console.log(`    · ${s}`);
  }
}
