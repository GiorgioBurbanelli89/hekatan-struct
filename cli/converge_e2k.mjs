#!/usr/bin/env node
/**
 * .CONVERGE? La escalera de un modelo importado, trozo a trozo.
 *
 *   node cli/converge_e2k.mjs <bloque.e2k> [mas.e2k ...]
 *
 * Un modelo que devuelve 1e15 mm no esta roto «un poco»: tiene un MECANISMO, y
 * el numero no dice cual. Lo unico que lo dice es ir separando y ver en que
 * paso deja de ser creible.
 *
 * Por cada fichero se prueban las MISMAS variantes, y en este orden, porque
 * cada una quita un sospechoso:
 *
 *   crudo          tal como sale del parser
 *   cosido         + fundir nudos, nudos de cruce, partir por los que caen encima
 *   + muelles      + el balasto (POINT/LINE/AREASPRING)
 *   sin releases   quitando `momentReleases`: si aqui se arregla, son ellos
 *   solo barras    fuera las cascaras
 *   solo cascaras  fuera las barras
 *
 * El veredicto no es «resuelve»: es si la flecha es CREIBLE. Un modelo de
 * edificio con 12 m de canto no puede bajar mas de unos centimetros; 1e15 mm o
 * 13 m son un mecanismo, resuelvan o no.
 */
import { readFileSync } from "node:fs";
import { basename } from "node:path";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

/** Por encima de esto, la flecha no es un resultado: es un mecanismo. */
const CREIBLE_MM = 200;

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

/** Quita los huerfanos y renumera. Sus 6 GDL sin rigidez taparian lo demas. */
function limpiar(nodes, elements, ni, ei) {
  const usado = new Set();
  for (const el of elements) for (const n of el) usado.add(n);
  const mapa = new Map(); const N2 = [];
  nodes.forEach((n, i) => { if (usado.has(i)) { mapa.set(i, N2.length); N2.push(n); } });
  const E2 = elements.map(el => el.map(i => mapa.get(i)));
  const rm = (mm) => { if (!(mm instanceof Map)) return mm; const o = new Map();
    for (const [i, v] of mm) { const j = mapa.get(i); if (j !== undefined) o.set(j, v); } return o; };
  const ni2 = {}; for (const k of Object.keys(ni)) ni2[k] = rm(ni[k]);
  return { nodes: N2, elements: E2, ni: ni2, ei, mapa };
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
  return { ...m, elements: els, elementInputs: ei };
}

function correr(m, conMuelles, coartar) {
  // ⚠️ Coartar va SIEMPRE justo antes de resolver, no una vez al principio.
  // Quitar elementos (una familia, la cubierta, los tirantes) deja GDL sueltos
  // NUEVOS: si se coarto antes del filtro, esos pasos arrastran un mecanismo
  // que ha creado el propio filtro y el resultado no dice nada del modelo.
  if (coartar) {
    const ni = {};
    for (const [k, v] of Object.entries(m.nodeInputs))
      ni[k] = v instanceof Map ? new Map([...v].map(([a, b]) =>
        [a, Array.isArray(b) ? b.slice() : b])) : v;
    m = { ...m, nodeInputs: ni };
    coartarGdlSueltos(m);
  }
  const l = limpiar(m.nodes, m.elements, m.nodeInputs, m.elementInputs);
  let muelles = [];
  if (conMuelles) muelles = muellesDelModelo(m).muelles
    .map(s => ({ ...s, node: l.mapa.get(s.node) })).filter(s => s.node !== undefined);
  try {
    const d = deform(l.nodes, l.elements, l.ni, l.ei, muelles);
    const n = d?.deformations?.size ?? 0;
    let uz = 0, ux = 0;
    for (const [, v] of (d?.deformations ?? [])) {
      if (Math.abs(v[2]) > Math.abs(uz)) uz = v[2];
      if (Math.abs(v[0]) > Math.abs(ux)) ux = v[0];
    }
    return { nudos: l.nodes.length, elems: l.elements.length, n, uz, ux, err: "" };
  } catch (e) {
    return { nudos: l.nodes.length, elems: l.elements.length, n: 0, uz: 0, ux: 0,
             err: String(e?.message || e).slice(0, 34) };
  }
}

/**
 * Fuera los trozos que no llegan a ningun apoyo por TRASLACION. Coartar un giro
 * no ancla nada: el trozo sigue pudiendo trasladarse. Este paso no es un
 * arreglo, es un diagnostico — dice cuanto modelo se pierde por eso.
 */
function sinFlotantes(m) {
  const ady = new Map();
  const une = (a,b) => { if(!ady.has(a)) ady.set(a,[]); ady.get(a).push(b); };
  for (const el of m.elements) for (const a of el) for (const b of el) if (a!==b) une(a,b);
  const usado = new Set(); for (const el of m.elements) for (const n of el) usado.add(n);
  const anclado = new Set();
  for (const [k,v] of (m.nodeInputs.supports ?? new Map()))
    if (v[0] || v[1] || v[2]) anclado.add(k);
  for (const s of muellesDelModelo(m).muelles) if (s.dof < 3) anclado.add(s.node);
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
  return { m: { ...m, elements: keep.map(i=>m.elements[i]), elementInputs: ei },
           quitados: fuera.size };
}

export function escalera(texto) {
  const out = [];
  out.push(["crudo", correr(parseE2k(texto), false)]);

  const m = parseE2k(texto);
  coserModelo(m);
  out.push(["cosido", correr(m, false)]);
  out.push(["+ muelles", correr(m, true)]);

  // Coartar lo que no sujeta nadie: es lo que hace el solver, pero con una
  // tolerancia RELATIVA en vez de la absoluta de 1e-12 que se le cuela.
  const infG = coartarGdlSueltos(m);
  out.push([("+ gdl sueltos (" + infG.coartados + ")"), correr(m, true)]);

  const sf = sinFlotantes(m);
  out.push([("sin flotantes (-" + sf.quitados + ")"), correr(sf.m, true, true)]);

  // Los BRAZOS RIGIDOS. Al partir una barra, cada trozo hereda el brazo de la
  // barra ENTERA: si el brazo es mas largo que el trozo, la longitud efectiva
  // sale negativa y la matriz local es basura.
  const sinRZ = { ...m, elementInputs: { ...m.elementInputs, rigidOffsets: new Map() } };
  out.push(["sin brazos rigidos", correr(sinRZ, true, true)]);

  const sinRel = { ...m, elementInputs: { ...m.elementInputs, momentReleases: new Map() } };
  out.push(["sin releases", correr(sinRel, true, true)]);

  // Los TIRANTES: barras finisimas, biarticuladas y solo-traccion
  // (LIMITCOMPRESSION 0 en el .e2k). Su rigidez a flexion es de 1e-2 kN/m
  // frente a los 1e10 de una columna: once ordenes de diferencia. Y una malla
  // de tirantes biarticulados forma mecanismos con facilidad.
  const flojas = new Set();
  m.elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const A = m.elementInputs.areas?.get(i);
    if (A !== undefined && A < 2e-4) flojas.add(i);   // menos de 2 cm2
  });
  out.push([("sin tirantes (-" + flojas.size + ")"),
            correr(filtrar(m, (el, i) => !flojas.has(i)), true, true)]);

  // SIN LA CUBIERTA. El modo del mecanismo (cli/modo_mecanismo.mjs) sale todo
  // en N+13.00m: una parrilla de correas con los momentos liberados y sin un
  // area ni un diafragma que la ate. Si quitandola el resto da flechas
  // creibles, queda demostrado que el problema es la cubierta y no el lector.
  const zTope = Math.max(...m.nodes.map(n => n[2])) - 0.5;
  out.push(["sin la cubierta",
    correr(filtrar(m, (el) => !el.some(n => m.nodes[n][2] > zTope)), true, true)]);

  out.push(["solo barras", correr(filtrar(m, (el) => el.length === 2), true, true)]);
  out.push(["solo cascaras", correr(filtrar(m, (el) => el.length > 2), true, true)]);
  out.push(["barras sin releases", correr(filtrar(sinRel, (el) => el.length === 2), true, true)]);
  return out;
}`, "converge");

console.log("fichero              variante              nudos  elems  .resuelve?      Uz [mm]        Ux [mm]   veredicto");
console.log("-".repeat(118));
for (const f of process.argv.slice(2)) {
  const filas = mod.escalera(readFileSync(f, "utf-8"));
  let primera = true;
  for (const [nombre, r] of filas) {
    const mm = r.uz * 1000, mx = r.ux * 1000;
    const creible = r.n > 0 && Math.abs(mm) < CREIBLE_MM && Math.abs(mx) < CREIBLE_MM;
    console.log(
      (primera ? basename(f).slice(0, 20) : "").padEnd(21) +
      nombre.padEnd(22) + String(r.nudos).padStart(6) + String(r.elems).padStart(7) + "   " +
      (r.n ? "si" : "NO").padEnd(14) +
      (r.n ? mm.toExponential(3).padStart(12) : (r.err || "-").padStart(12)) +
      (r.n ? mx.toExponential(3).padStart(15) : "".padStart(15)) + "   " +
      (r.n ? (creible ? "creible" : "MECANISMO") : "no resuelve"));
    primera = false;
  }
  console.log();
}
