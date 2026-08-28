#!/usr/bin/env node
/**
 * EL MISMO EDIFICIO, DOS VECES: con cimentacion y sin ella.
 *
 *   node cli/riochico_dos_modelos.mjs <modelo.e2k> [cotaDeCorte]
 *
 * ## Por que los dos
 *
 * El modelo real trae su cimentacion sobre balasto, y ese balasto es SOLO
 * VERTICAL: las dos propiedades que el fichero asigna -RESORTE EN VIGAS y BALASTO V- no dan nada en horizontal, y las siete que lo darian estan
 * definidas y sin asignar. Comprobado en el EDB con la OAPI, y ETABS lo dice
 * en su log: «THE STRUCTURE IS UNSTABLE OR ILL-CONDITIONED».
 *
 * Asi que el modelo CON cimentacion es el que hay, y no se sostiene en
 * horizontal. El modelo SIN cimentacion es el que un calculista montaria para
 * analizar la superestructura: se corta por la cota de arranque de los pilares
 * y ahi se EMPOTRA. Ese si tiene que dar numeros.
 *
 * Los dos salen del MISMO e2k, con la misma malla y las mismas cargas: lo
 * unico que cambia es la cimentacion. Cualquier diferencia es de eso, y de nada
 * mas — que es la unica forma de que la comparacion signifique algo.
 *
 * ## Que se mide
 *
 *   nudos, barras, cascaras     que el corte no se lleve mas de lo que debe
 *   trozos sin apoyo            si queda algo colgando
 *   resuelve / no               y con que flecha
 *   SumaRz vs la carga          el equilibrio: si no cierra, sobran o faltan
 *                               apoyos, y el resultado no vale aunque salga
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

function clonarNodeInputs(ni) {
  const o = {};
  for (const [k, v] of Object.entries(ni))
    o[k] = v instanceof Map
      ? new Map([...v].map(([a, b]) => [a, Array.isArray(b) ? b.slice() : b]))
      : v;
  return o;
}

/** Se queda con los elementos que pasan el filtro, reindexando elementInputs. */
function filtrar(m, quedarse) {
  const idx = [];
  const els = m.elements.filter((el, i) => { if (quedarse(el, i)) { idx.push(i); return true; } });
  const ei = {};
  for (const [k, v] of Object.entries(m.elementInputs)) {
    if (!(v instanceof Map)) { ei[k] = v; continue; }
    const o = new Map(); idx.forEach((viejo, j) => { if (v.has(viejo)) o.set(j, v.get(viejo)); });
    ei[k] = o;
  }
  return { ...m, elements: els, elementInputs: ei, nodeInputs: clonarNodeInputs(m.nodeInputs) };
}

/** Cuantos trozos no llegan a un apoyo POR TRASLACION (los giros no anclan). */
function flotantes(m, muelles) {
  const ady = new Map();
  const une = (a, b) => { if (!ady.has(a)) ady.set(a, []); ady.get(a).push(b); };
  for (const el of m.elements) for (const a of el) for (const b of el) if (a !== b) une(a, b);
  const usado = new Set(); for (const el of m.elements) for (const n of el) usado.add(n);
  const anclado = new Set();
  for (const [k, v] of (m.nodeInputs.supports ?? new Map()))
    if (v[0] || v[1] || v[2]) anclado.add(k);
  for (const s of muelles) if (s.dof < 3) anclado.add(s.node);
  const visto = new Set(); let n = 0, nudos = 0;
  for (const s of usado) {
    if (visto.has(s)) continue;
    const pila = [s], c = []; visto.add(s);
    while (pila.length) { const v = pila.pop(); c.push(v);
      for (const w of ady.get(v) ?? []) if (!visto.has(w)) { visto.add(w); pila.push(w); } }
    if (!c.some(x => anclado.has(x))) { n++; nudos += c.length; }
  }
  return { trozos: n, nudos, fuera: null };
}

/** Los NUDOS de los trozos que no llegan a un apoyo. Para poder podarlos. */
function nudosFlotantes(m, muelles) {
  const ady = new Map();
  const une = (a, b) => { if (!ady.has(a)) ady.set(a, []); ady.get(a).push(b); };
  for (const el of m.elements) for (const a of el) for (const b of el) if (a !== b) une(a, b);
  const usado = new Set(); for (const el of m.elements) for (const n of el) usado.add(n);
  const anclado = new Set();
  for (const [k, v] of (m.nodeInputs.supports ?? new Map()))
    if (v[0] || v[1] || v[2]) anclado.add(k);
  for (const s of muelles) if (s.dof < 3) anclado.add(s.node);
  const visto = new Set(); const fuera = new Set();
  for (const s of usado) {
    if (visto.has(s)) continue;
    const pila = [s], c = []; visto.add(s);
    while (pila.length) { const v = pila.pop(); c.push(v);
      for (const w of ady.get(v) ?? []) if (!visto.has(w)) { visto.add(w); pila.push(w); } }
    if (!c.some(x => anclado.has(x))) for (const x of c) fuera.add(x);
  }
  return fuera;
}

/** El mismo modelo sin los trozos que no llegan a ningun apoyo. */
function podar(m) {
  const fuera = nudosFlotantes(m, muellesDelModelo(m).muelles);
  return { m: filtrar(m, (el) => !el.some(n => fuera.has(n))), quitados: fuera.size };
}

function resolver(m, conMuelles) {
  const muelles0 = conMuelles ? muellesDelModelo(m).muelles : [];
  const fl = flotantes(m, muelles0);
  coartarGdlSueltos(m);

  const usado = new Set();
  for (const el of m.elements) for (const n of el) usado.add(n);
  const mapa = new Map(); const N = [];
  m.nodes.forEach((n, i) => { if (usado.has(i)) { mapa.set(i, N.length); N.push(n); } });
  const E = m.elements.map(el => el.map(i => mapa.get(i)));
  const rm = (mm) => { if (!(mm instanceof Map)) return mm; const o = new Map();
    for (const [i, v] of mm) { const j = mapa.get(i); if (j !== undefined) o.set(j, v); } return o; };
  const ni = {}; for (const k of Object.keys(m.nodeInputs)) ni[k] = rm(m.nodeInputs[k]);
  const muelles = muelles0.map(s => ({ ...s, node: mapa.get(s.node) }))
                          .filter(s => s.node !== undefined);

  // La carga que se aplica y la que hay que recuperar en las reacciones.
  let cargaZ = 0;
  for (const [, v] of (ni.loads ?? new Map())) cargaZ += v[2];

  let r;
  try {
    const d = deform(N, E, ni, m.elementInputs, muelles);
    const nDef = d?.deformations?.size ?? 0;
    let uz = 0, ux = 0, uy = 0;
    for (const [, v] of (d?.deformations ?? [])) {
      if (Math.abs(v[2]) > Math.abs(uz)) uz = v[2];
      if (Math.abs(v[0]) > Math.abs(ux)) ux = v[0];
      if (Math.abs(v[1]) > Math.abs(uy)) uy = v[1];
    }
    let rz = 0;
    for (const [, v] of (d?.reactions ?? [])) rz += v[2];
    // Y la que va por los MUELLES, que deform no devuelve: F = k*u en cada uno.
    // Sin esto el equilibrio de un modelo sobre Winkler no cierra nunca y
    // parece que falta carga, cuando lo que falta es contar el terreno. Es el
    // mismo motivo por el que las zapatas estan exentas en salud_ejemplos.
    let rzMuelles = 0;
    for (const sp of muelles) {
      if (sp.dof !== 2) continue;
      const u = d?.deformations?.get(sp.node);
      if (u) rzMuelles += -sp.k * u[2];
    }
    r = { nDef, uz, ux, uy, rz, rzMuelles, err: "" };
  } catch (e) {
    r = { nDef: 0, uz: 0, ux: 0, uy: 0, rz: 0, rzMuelles: 0, err: String(e?.message || e).slice(0, 40) };
  }

  return { nudos: N.length,
    barras: E.filter(e => e.length === 2).length,
    shells: E.filter(e => e.length > 2).length,
    apoyos: (ni.supports ? [...ni.supports].filter(([, v]) => v[0] || v[1] || v[2]).length : 0),
    muelles: muelles.length, flotantes: fl, cargaZ, ...r };
}

/**
 * Aparta los MODOS de mecanismo hasta que el modelo resuelva sin regularizar.
 * Ver cli/modo_mecanismo.mjs: se pone un muelle de 1e-8 x la rigidez tipica en
 * todos los GDL, se carga y lo que se mueve 1e5 veces la mediana ES el modo.
 */
function apartarModos(m0, conMuelles, maxVueltas) {
  let m = m0, fuera = new Set(), vueltas = 0, quitados = 0;
  for (let v = 0; v < maxVueltas; v++) {
    const r0 = resolverReg(m, conMuelles, 0);
    if (r0.n > 0 && Math.abs(r0.uz) < 1) return { m, vueltas, quitados, ok: true, uz: r0.uz };
    const r = resolverReg(m, conMuelles, 1e-8);
    if (!r.n) return { m, vueltas, quitados, ok: false, err: r.err || "no resuelve" };
    const corte = r.mediana * 100;
    const modo = r.filas.filter(f => f.m > corte);
    if (!modo.length) return { m, vueltas, quitados, ok: false, err: "sin salto" };
    for (const f of modo) fuera.add(f.orig);
    quitados = fuera.size;
    vueltas = v + 1;
    m = filtrar(m, (el) => !el.some(n => fuera.has(n)));
  }
  return { m, vueltas, quitados, ok: false, err: "no converge" };
}

function resolverReg(m, conMuelles, factor) {
  const usado = new Set();
  for (const el of m.elements) for (const n of el) usado.add(n);
  const mapa = new Map(); const N = [];
  m.nodes.forEach((n, i) => { if (usado.has(i)) { mapa.set(i, N.length); N.push(n); } });
  const E = m.elements.map(el => el.map(i => mapa.get(i)));
  const rm = (mm) => { if (!(mm instanceof Map)) return mm; const o = new Map();
    for (const [i, v] of mm) { const j = mapa.get(i); if (j !== undefined) o.set(j, v); } return o; };
  const ni = {}; for (const k of Object.keys(m.nodeInputs)) ni[k] = rm(m.nodeInputs[k]);
  const muelles = (conMuelles ? muellesDelModelo(m).muelles : [])
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
  const filas = []; let uz = 0;
  for (const [n, v] of (d?.deformations ?? [])) {
    const t2 = Math.hypot(v[0],v[1],v[2]), g2 = Math.hypot(v[3],v[4],v[5]);
    filas.push({ orig: inv.get(n), m: Math.max(t2,g2) });
    if (Math.abs(v[2]) > Math.abs(uz)) uz = v[2];
  }
  filas.sort((a,b)=>b.m-a.m);
  return { n: d?.deformations?.size ?? 0, uz, filas,
           mediana: filas.length ? filas[Math.floor(filas.length/2)].m : 0 };
}

export function dos(t, cota) {
  const base = parseE2k(t);
  coserModelo(base);

  // ── A · CON cimentacion, tal como viene ──
  const A0 = { ...base, nodeInputs: clonarNodeInputs(base.nodeInputs) };
  const podA = podar(A0);
  const A = resolver({ ...base, nodeInputs: clonarNodeInputs(base.nodeInputs) }, true);
  const Ap = resolver(podA.m, true);
  Ap.quitados = podA.quitados;

  // ── B · SIN cimentacion: se corta por la cota y ahi se EMPOTRA ──
  //
  // Se quita todo elemento que tenga ALGUN nudo por debajo de la cota. Con eso
  // desaparecen las vigas de cimentacion, la losa de fondo y el tramo enterrado
  // de los pilares. Los nudos que quedan justo en la cota son los que ahora
  // arrancan la estructura: se empotran, que es lo que hace un calculista
  // cuando no quiere modelar el terreno.
  const sinCim = filtrar(base, (el) => !el.some(n => base.nodes[n][2] < cota - 1e-6));
  const usadoB = new Set();
  for (const el of sinCim.elements) for (const n of el) usadoB.add(n);
  const sup = sinCim.nodeInputs.supports ?? new Map();
  let empotrados = 0;
  for (const n of usadoB) {
    if (base.nodes[n][2] > cota + 1e-6) continue;      // solo los de la cota
    sup.set(n, [true, true, true, true, true, true]);
    empotrados++;
  }
  sinCim.nodeInputs.supports = sup;
  // Sin cimentacion no hay balasto: los muelles se van con ella.
  const B0 = { ...sinCim,
    elementInputs: { ...sinCim.elementInputs, springNames: new Map() },
    nodeInputs: { ...sinCim.nodeInputs, springNames: new Map() } };
  const podB = podar(B0);
  const B = resolver({ ...B0, nodeInputs: clonarNodeInputs(B0.nodeInputs) }, true);
  const Bp = resolver(podB.m, true);
  Bp.quitados = podB.quitados;
  B.empotrados = empotrados;
  Bp.empotrados = empotrados;

  // Y el ultimo escalon: apartar los modos hasta que resuelva de verdad.
  const ma = apartarModos(podA.m, true, 8);
  const mb = apartarModos(podB.m, false, 8);
  const Af = resolver(ma.m, true); Af.quitados = ma.quitados; Af.vueltas = ma.vueltas;
  const Bf = resolver(mb.m, false); Bf.quitados = mb.quitados; Bf.vueltas = mb.vueltas;
  Bf.empotrados = empotrados;

  return { A, Ap, B, Bp, Af, Bf, cota };
}`, "dos-modelos");

const f = process.argv[2];
const cota = process.argv[3] !== undefined ? +process.argv[3] : 0.0;
if (!f) { console.error("uso: node cli/riochico_dos_modelos.mjs <modelo.e2k> [cotaDeCorte]"); process.exit(2); }

const { A, Ap, B, Bp, Af, Bf } = mod.dos(readFileSync(f, "utf-8"), cota);
console.log(`\n── ${basename(f)} · corte en z = ${cota.toFixed(2)} m ${"─".repeat(24)}`);
const fila = (t, r) =>
  t.padEnd(22) + String(r.nudos).padStart(6) + String(r.barras).padStart(8) +
  String(r.shells).padStart(8) + String(r.apoyos).padStart(8) + String(r.muelles).padStart(9) +
  (r.flotantes.trozos + "/" + r.flotantes.nudos).padStart(10) + "   " +
  (r.nDef ? "si" : "NO").padEnd(6) +
  (r.nDef ? (r.uz * 1000).toFixed(2).padStart(11) : (r.err || "-").padStart(11));
console.log("modelo                 nudos  barras  shells  apoyos  muelles  flot t/n   .res?   Uz [mm]");
console.log("-".repeat(100));
console.log(fila("A · CON cimentacion", A));
console.log(fila("A · podado", Ap) + `   (-${Ap.quitados} nudos de trozos sueltos)`);
console.log(fila("B · SIN cimentacion", B) + `   (${B.empotrados} nudos empotrados)`);
console.log(fila("B · podado", Bp) + `   (-${Bp.quitados} nudos de trozos sueltos)`);
console.log(fila("A · sin mecanismos", Af) + `   (-${Af.quitados} nudos mas, ${Af.vueltas} vueltas)`);
console.log(fila("B · sin mecanismos", Bf) + `   (-${Bf.quitados} nudos mas, ${Bf.vueltas} vueltas)`);

console.log(`\n  equilibrio (SumaRz debe recuperar la carga aplicada):`);
for (const [t, r] of [["A ", A], ["Ap", Ap], ["Af", Af], ["B ", B], ["Bp", Bp], ["Bf", Bf]]) {
  if (!r.nDef) { console.log(`    ${t}: no resuelve`); continue; }
  const total = r.rz + (r.rzMuelles || 0);
  const dif = Math.abs(total + r.cargaZ);
  const esc = Math.max(Math.abs(total), Math.abs(r.cargaZ), 1e-9);
  console.log(`    ${t}: carga ${r.cargaZ.toFixed(1)} kN · apoyos ${r.rz.toFixed(1)} + ` +
    `muelles ${(r.rzMuelles || 0).toFixed(1)} = ${total.toFixed(1)} kN · ` +
    `dif ${(100 * dif / esc).toFixed(2)} %` + (100 * dif / esc < 1 ? "  cierra" : "  NO CIERRA"));
  console.log(`       |Ux| ${(r.ux * 1000).toFixed(2)} mm · |Uy| ${(r.uy * 1000).toFixed(2)} mm · ` +
    `|Uz| ${(r.uz * 1000).toFixed(2)} mm`);
}
