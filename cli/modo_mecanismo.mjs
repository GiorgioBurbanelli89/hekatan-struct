#!/usr/bin/env node
/**
 * EL MODO del mecanismo, cuando ya no es de un nudo.
 *
 *   node cli/modo_mecanismo.mjs <fichero.e2k>
 *
 * Cuando el analisis nudo a nudo (`cli/mecanismos_e2k.mjs`) dice que todo esta
 * sujeto y la matriz SIGUE saliendo singular, el mecanismo es GLOBAL: varios
 * nudos moviendose juntos, cada uno con rigidez en las tres direcciones pero el
 * conjunto no. Un anillo de barras biarticuladas es el ejemplo de libro.
 *
 * Eso no se ve nudo a nudo. Se ve asi:
 *
 *   1. Se anade un muelle DIMINUTO en los seis GDL de todos los nudos
 *      (k = 1e-8 x la rigidez tipica). Con eso la matriz deja de ser singular
 *      y se puede resolver — es la regularizacion de Tikhonov de toda la vida.
 *   2. Se carga con un vector CUALQUIERA y se resuelve.
 *   3. Los GDL del mecanismo salen con desplazamientos enormes, porque lo unico
 *      que se opone es ese muelle de 1e-8. Los demas salen normales.
 *
 * Ordenando por desplazamiento, los primeros SON el mecanismo. Y con el nudo en
 * la mano se mira que barras lo tocan, que es lo que hay que arreglar.
 *
 * ⚠️ Esto es para DIAGNOSTICAR. El muelle de regularizacion no se queda en el
 * modelo: cambiaria los resultados y ademas taparia el problema, que es
 * exactamente lo que no se quiere.
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
const { muellesDelModelo } = await import("${R}/examples/src/shared/e2kMuelles");
const { coartarGdlSueltos } = await import("${R}/examples/src/shared/e2kMecanismos");
const { deform } = await import("${R}/hekatan-fem/src/index");

/**
 * Iterativo: saca el modo, aparta sus nudos, vuelve a medir. Sigue hasta que el
 * modelo resuelve SIN regularizar — y entonces la lista de lo apartado es la
 * lista completa de mecanismos, no el primero que aparece.
 */
export function todosLosModos(t, factor, maxVueltas) {
  const m = parseE2k(t);
  coserModelo(m);
  const vueltas = [];
  const fuera = new Set();
  for (let v = 0; v < maxVueltas; v++) {
    const sub = filtrarFuera(m, fuera);
    coartarGdlSueltos(sub);
    const sinReg = resolverSub(sub, 0);
    if (sinReg.n > 0) {
      vueltas.push({ vuelta: v, resuelve: true, uz: sinReg.uz,
                     nElems: sub.elements.length, quitados: fuera.size });
      break;
    }
    const r = resolverSub(sub, factor);
    if (!r.n) { vueltas.push({ vuelta: v, err: r.err ?? "no resuelve ni regularizado" }); break; }
    const corte = r.mediana * 100;
    const modo = r.filas.filter(f => f.m > corte);
    if (!modo.length) { vueltas.push({ vuelta: v, err: "sin salto: el mecanismo no se destaca" }); break; }
    for (const f of modo) fuera.add(f.orig);
    vueltas.push({ vuelta: v, resuelve: false, nElems: sub.elements.length,
      enElModo: modo.length, quitados: fuera.size,
      salto: r.filas[0].m / r.mediana,
      donde: resumirZ(m, modo.map(f => f.orig)),
      muestra: modo.slice(0, 4).map(f => ({ nombre: m.nodeNames?.[f.orig], p: m.nodes[f.orig] })) });
  }
  return vueltas;
}

function resumirZ(m, nudos) {
  const c = new Map();
  for (const n of nudos) { const z = m.nodes[n][2].toFixed(2); c.set(z, (c.get(z)||0)+1); }
  return [...c].sort((a,b)=>b[1]-a[1]).slice(0,4);
}

function filtrarFuera(m, fuera) {
  const idx = [];
  const els = m.elements.filter((el, i) => {
    if (el.some(n => fuera.has(n))) return false;
    idx.push(i); return true;
  });
  const ei = {};
  for (const [k, v] of Object.entries(m.elementInputs)) {
    if (!(v instanceof Map)) { ei[k] = v; continue; }
    const o = new Map(); idx.forEach((viejo, j) => { if (v.has(viejo)) o.set(j, v.get(viejo)); });
    ei[k] = o;
  }
  const ni = {};
  for (const [k, v] of Object.entries(m.nodeInputs))
    ni[k] = v instanceof Map ? new Map([...v].map(([a,b]) => [a, Array.isArray(b)?b.slice():b])) : v;
  return { ...m, elements: els, elementInputs: ei, nodeInputs: ni };
}

function resolverSub(m, factor) {
  const usado = new Set();
  for (const el of m.elements) for (const n of el) usado.add(n);
  const mapa = new Map(); const N = [];
  m.nodes.forEach((n, i) => { if (usado.has(i)) { mapa.set(i, N.length); N.push(n); } });
  const E = m.elements.map(el => el.map(i => mapa.get(i)));
  const rm = (mm) => { if (!(mm instanceof Map)) return mm; const o = new Map();
    for (const [i, v] of mm) { const j = mapa.get(i); if (j !== undefined) o.set(j, v); } return o; };
  const ni = {}; for (const k of Object.keys(m.nodeInputs)) ni[k] = rm(m.nodeInputs[k]);
  const muelles = muellesDelModelo(m).muelles
    .map(s => ({ ...s, node: mapa.get(s.node) })).filter(s => s.node !== undefined);
  if (factor > 0) {
    const ks = [];
    m.elements.forEach((el, i) => {
      if (el.length !== 2) return;
      const a = m.nodes[el[0]], b = m.nodes[el[1]];
      const L = Math.hypot(b[0]-a[0], b[1]-a[1], b[2]-a[2]);
      const Ee = m.elementInputs.elasticities?.get(i), A = m.elementInputs.areas?.get(i);
      if (Ee > 0 && A > 0 && L > 0) ks.push(Ee * A / L);
    });
    ks.sort((x,y)=>x-y);
    const kReg = (ks[Math.floor(ks.length/2)] || 1e6) * factor;
    for (let n = 0; n < N.length; n++) for (let d = 0; d < 6; d++)
      muelles.push({ node: n, dof: d, k: kReg });
  }
  const loads = new Map(ni.loads ?? []);
  for (let n = 0; n < N.length; n++) {
    const v = loads.get(n) ?? [0,0,0,0,0,0];
    loads.set(n, [v[0]+1, v[1]+1, v[2]-10, v[3], v[4], v[5]]);
  }
  let d;
  try { d = deform(N, E, { ...ni, loads }, m.elementInputs, muelles); }
  catch (e) { return { n: 0, err: String(e?.message||e).slice(0,40) }; }
  const inv = new Map(); mapa.forEach((j,i)=>inv.set(j,i));
  const filas = [];
  let uz = 0;
  for (const [n, v] of (d?.deformations ?? [])) {
    const t2 = Math.hypot(v[0],v[1],v[2]), g2 = Math.hypot(v[3],v[4],v[5]);
    filas.push({ orig: inv.get(n), m: Math.max(t2,g2) });
    if (Math.abs(v[2]) > Math.abs(uz)) uz = v[2];
  }
  filas.sort((a,b)=>b.m-a.m);
  return { n: d?.deformations?.size ?? 0, uz, filas,
           mediana: filas.length ? filas[Math.floor(filas.length/2)].m : 0 };
}

export function modo(t, factor) {
  const m = parseE2k(t);
  coserModelo(m);
  coartarGdlSueltos(m);

  const usado = new Set();
  for (const el of m.elements) for (const n of el) usado.add(n);
  const mapa = new Map(); const N = [];
  m.nodes.forEach((n, i) => { if (usado.has(i)) { mapa.set(i, N.length); N.push(n); } });
  const E = m.elements.map(el => el.map(i => mapa.get(i)));
  const rm = (mm) => { if (!(mm instanceof Map)) return mm; const o = new Map();
    for (const [i, v] of mm) { const j = mapa.get(i); if (j !== undefined) o.set(j, v); } return o; };
  const ni = {}; for (const k of Object.keys(m.nodeInputs)) ni[k] = rm(m.nodeInputs[k]);

  // La rigidez TIPICA: la mediana de EA/L. El muelle va muchos ordenes por
  // debajo, para que solo se note donde no hay nada mas.
  const ks = [];
  m.elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const a = m.nodes[el[0]], b = m.nodes[el[1]];
    const L = Math.hypot(b[0]-a[0], b[1]-a[1], b[2]-a[2]);
    const Ee = m.elementInputs.elasticities?.get(i), A = m.elementInputs.areas?.get(i);
    if (Ee > 0 && A > 0 && L > 0) ks.push(Ee * A / L);
  });
  ks.sort((x, y) => x - y);
  const kTip = ks[Math.floor(ks.length / 2)] || 1e6;
  const kReg = kTip * factor;

  const muelles = muellesDelModelo(m).muelles
    .map(s => ({ ...s, node: mapa.get(s.node) })).filter(s => s.node !== undefined);
  for (let n = 0; n < N.length; n++)
    for (let d = 0; d < 6; d++) muelles.push({ node: n, dof: d, k: kReg });

  // Una carga cualquiera, la misma siempre: peso propio hacia abajo en todos.
  const loads = new Map(ni.loads ?? []);
  for (let n = 0; n < N.length; n++) {
    const v = loads.get(n) ?? [0, 0, 0, 0, 0, 0];
    loads.set(n, [v[0] + 1, v[1] + 1, v[2] - 10, v[3], v[4], v[5]]);
  }

  let d;
  try { d = deform(N, E, { ...ni, loads }, m.elementInputs, muelles); }
  catch (e) { return { err: String(e?.message || e).slice(0, 60), kTip, kReg }; }

  const filas = [];
  for (const [n, v] of (d?.deformations ?? [])) {
    const t2 = Math.hypot(v[0], v[1], v[2]);
    const g2 = Math.hypot(v[3], v[4], v[5]);
    filas.push({ n, t: t2, g: g2, m: Math.max(t2, g2) });
  }
  filas.sort((a, b) => b.m - a.m);

  const inv = new Map(); mapa.forEach((j, i) => inv.set(j, i));
  const top = filas.slice(0, 12).map(f => {
    const orig = inv.get(f.n);
    const toca = [];
    m.elements.forEach((el, i) => {
      if (!el.includes(orig)) return;
      const r = m.elementInputs.momentReleases?.get(i);
      toca.push((m.elementNames?.[i] ?? i) + (r ? " [rel]" : ""));
    });
    return { nombre: m.nodeNames?.[orig] ?? orig, p: m.nodes[orig],
             t: f.t, g: f.g, toca };
  });
  const mediana = filas.length ? filas[Math.floor(filas.length / 2)].m : 0;
  return { nNudos: N.length, kTip, kReg, mediana, top,
           salto: mediana > 0 ? filas[0].m / mediana : Infinity };
}`, "modo-mecanismo");

for (const f of process.argv.slice(2)) {
  const t = readFileSync(f, "utf-8");
  console.log("");
  console.log("== " + basename(f) + " -- TODOS los mecanismos, uno a uno " + "-".repeat(12));
  console.log("vuelta  elems  nudos del modo  quitados  salto        donde estan (z: nudos)");
  console.log("-".repeat(96));
  for (const v of mod.todosLosModos(t, 1e-8, 12)) {
    if (v.err) { console.log("  " + String(v.vuelta).padStart(4) + "  " + v.err); break; }
    if (v.resuelve) {
      console.log("  " + String(v.vuelta).padStart(4) + "  " + String(v.nElems).padStart(5) +
        "  RESUELVE SIN REGULARIZAR  ·  " + v.quitados + " nudos apartados  ·  Uz = " +
        (v.uz * 1000).toFixed(2) + " mm");
      break;
    }
    console.log("  " + String(v.vuelta).padStart(4) + "  " + String(v.nElems).padStart(5) +
      "  " + String(v.enElModo).padStart(14) + "  " + String(v.quitados).padStart(8) + "  " +
      v.salto.toExponential(2).padStart(9) + "    " +
      v.donde.map(([z, n]) => "z=" + z + ": " + n).join("  "));
    for (const x of v.muestra)
      console.log("          " + String(x.nombre).padEnd(20) +
        " (" + x.p.map(q => q.toFixed(2)).join(", ") + ")");
  }
}
