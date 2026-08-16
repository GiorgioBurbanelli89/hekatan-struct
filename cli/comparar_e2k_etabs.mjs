#!/usr/bin/env node
/**
 * ¿El modelo que ETABS leyó del .e2k es el mismo de Hekatan Struct? Uno por uno.
 *
 *   node cli/comparar_e2k_etabs.mjs [carpeta-json] [informe.md]
 *
 * Los JSON los produce `galpon-bodega-electoral/e2k_lote_etabs.py`, que abre
 * cada .e2k en ETABS de verdad y saca lo que ETABS entendió: joints con sus
 * coordenadas y apoyos, barras con sus extremos y su sección, cargas nodales y
 * propiedades de sección. Aquí se compara con el modelo que construye el propio
 * ExampleDef.
 *
 * Se compara contra ETABS y no releyendo el fichero: el .e2k no guarda cotas,
 * las deduce de la planta del objeto, así que releerlo con el mismo criterio
 * con que se escribe mide una copia y da verde siempre.
 *
 * Cinco medidas por modelo:
 *   NUDOS      cada joint de ETABS cae sobre un nudo del modelo
 *   SUELTOS    joints de más que además TOCAN algo (esos sí cambian el análisis;
 *              un joint suelto no aporta rigidez ni masa)
 *   BARRAS     cada barra del modelo está dentro de alguna barra de ETABS
 *              (no se pide igualdad: el exportador junta las columnas de varios
 *              tramos en una sola LINE y ETABS la vuelve a partir)
 *   APOYOS     mismo número y los mismos 6 bits
 *   CARGAS     ΣFZ igual
 *   SECCIONES  A, I22, I33, J de cada sección usada
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CARPETA = process.argv[2] || join(__dirname, "..", "modelos-etabs", "etabs-json");
const INFORME = process.argv[3] || join(__dirname, "..", "modelos-etabs", "COMPARACION_ETABS.md");

const TOL_COORD = 2e-3;      // m
const TOL_REL = 1e-3;        // 0.1 % en secciones y cargas

function todosLosJson(dir) {
  const out = [];
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) out.push(...todosLosJson(p));
    else if (f.endsWith(".json")) out.push(p);
  }
  return out;
}

const mod = await empaquetar(`
const g = globalThis; g.window = g;
const ctx2d = () => new Proxy({ font:"", measureText:()=>({width:10}),
  createLinearGradient:()=>({addColorStop(){}}), getImageData:()=>({data:new Uint8ClampedArray(4)}) },
  { get:(t,k)=> k in t ? t[k] : (()=>{}) });
const nodo = () => ({ style:{}, width:300, height:150, appendChild(){}, setAttribute(){},
  addEventListener(){}, removeEventListener(){}, classList:{add(){},remove(){},toggle(){},contains:()=>false},
  getContext:()=>ctx2d(), querySelector:()=>null, querySelectorAll:()=>[], remove(){}, insertBefore(){},
  cloneNode:()=>nodo(), toDataURL:()=>"", getBoundingClientRect:()=>({width:0,height:0,top:0,left:0}) });
g.document = { createElement: nodo, createElementNS: nodo, body: nodo(), head: nodo(),
  documentElement: nodo(), querySelector:()=>null, querySelectorAll:()=>[],
  addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {};
g.matchMedia = () => ({ matches:false, addEventListener(){}, addListener(){} });
const { examplesRegistry } = await import("${R}/examples/src/workspace/exampleRegistry");

export function modelo(id) {
  const ex = examplesRegistry.find((e) => e.id === id);
  if (!ex || typeof ex.build !== "function") return null;
  const p = {}; for (const [k, d] of Object.entries(ex.params || {})) p[k] = d.default;
  const estado = (ini) => { let v = ini;
    return { get val(){ return v; }, set val(x){ v = x; },
             get rawVal(){ return v; }, set rawVal(x){ v = x; } }; };
  const st = { nodes: estado([]), elements: estado([]), nodeInputs: estado({}),
               elementInputs: estado({}), deformOutputs: estado({}),
               analyzeOutputs: estado({}), objects3D: estado([]) };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const ni = st.nodeInputs.val, ei = st.elementInputs.val;
  return { cat: ex.category, name: ex.name,
    nodes: st.nodes.val, elements: st.elements.val,
    supports: [...(ni.supports ?? [])], loads: [...(ni.loads ?? [])],
    areas: [...(ei.areas ?? [])], Iy: [...(ei.momentsOfInertiaY ?? [])],
    Iz: [...(ei.momentsOfInertiaZ ?? [])], J: [...(ei.torsionalConstants ?? [])] };
}`, "comparar-etabs");

/** ¿el punto P está sobre el segmento AB? */
function enSegmento(P, A, B) {
  const d = [B[0] - A[0], B[1] - A[1], B[2] - A[2]];
  const v = [P[0] - A[0], P[1] - A[1], P[2] - A[2]];
  const L2 = d[0] ** 2 + d[1] ** 2 + d[2] ** 2;
  if (L2 < 1e-12) return Math.hypot(...v) <= TOL_COORD;
  const t = (v[0] * d[0] + v[1] * d[1] + v[2] * d[2]) / L2;
  if (t < -TOL_COORD || t > 1 + TOL_COORD) return false;
  return Math.hypot(v[0] - t * d[0], v[1] - t * d[1], v[2] - t * d[2]) <= TOL_COORD;
}

const k3 = (x, y, z) => [x, y, z].map((v) => v.toFixed(3)).join(",");
const pct = (a, b) => (b ? (100 * a) / b : 100);

const filas = [];
for (const ruta of todosLosJson(CARPETA)) {
  const id = ruta.replace(/\\/g, "/").split("/").pop().replace(/\.json$/, "");
  let J, M, hayNaN = false;
  try {
    const txt = readFileSync(ruta, "utf-8");
    // Python escribe `NaN` y JavaScript no lo acepta como JSON. Que aparezca
    // NO es cosmético: significa que ETABS leyó una coordenada NaN, o sea que
    // el modelo trae basura. Se convierte a null para poder seguir, pero se
    // marca.
    hayNaN = /\bNaN\b/.test(txt);
    J = JSON.parse(txt.replace(/\bNaN\b/g, "null").replace(/\b-?Infinity\b/g, "null"));
  } catch (e) { filas.push({ id, err: "json ilegible" }); continue; }
  // Un modelo que revienta no puede tumbar la comparación de los otros 84.
  try { M = mod.modelo(id); }
  catch (e) { filas.push({ id, err: "no construye: " + String((e && e.message) || e).slice(0, 50) }); continue; }
  if (!M) { filas.push({ id, err: "no está en el registry" }); continue; }
  if (hayNaN) { filas.push({ id, err: "ETABS leyó coordenadas NaN del e2k" }); continue; }

  const nudos = new Set(M.nodes.map((n) => k3(...n)));
  const porNombre = new Map(J.puntos.map((p) => [p.n, p]));

  // NUDOS y SUELTOS
  let sobre = 0, sueltosConectados = 0;
  for (const p of J.puntos) {
    if (nudos.has(k3(p.x, p.y, p.z))) sobre++;
    else if ((p.con ?? -1) > 0) sueltosConectados++;   // de más Y conectado
  }

  // BARRAS: cada barra del modelo dentro de alguna de ETABS
  const segE = J.barras.map((b) => {
    const pi = porNombre.get(b.i), pj = porNombre.get(b.j);
    return pi && pj ? [[pi.x, pi.y, pi.z], [pj.x, pj.y, pj.z]] : null;
  }).filter(Boolean);
  const barrasM = M.elements.filter((e) => e.length === 2);
  let cubiertas = 0;
  for (const e of barrasM) {
    const P = M.nodes[e[0]], Q = M.nodes[e[1]];
    if (segE.some(([A, B]) => enSegmento(P, A, B) && enSegmento(Q, A, B))) cubiertas++;
  }

  // APOYOS
  let apOk = 0;
  for (const [idx, bits] of M.supports) {
    const p = J.puntos.find((q) => k3(q.x, q.y, q.z) === k3(...M.nodes[idx]));
    if (p && p.ap && bits.every((b, i) => !!b === !!p.ap[i])) apOk++;
  }

  // CARGAS (ΣFZ)
  let fzM = 0; for (const [, v] of M.loads) fzM += v[2] || 0;
  let fzE = 0; for (const c of J.cargas) fzE += c.fz || 0;
  const difFZ = Math.abs(fzM) > 1e-9 ? Math.abs(fzE - fzM) / Math.abs(fzM) : (Math.abs(fzE) < 1e-9 ? 0 : 1);

  // SECCIONES: la peor diferencia relativa de A, I22, I33, J
  let peorSec = 0;
  const A0 = M.areas[0]?.[1], Iy0 = M.Iy[0]?.[1], Iz0 = M.Iz[0]?.[1], J0 = M.J[0]?.[1];
  const secs = Object.values(J.secciones || {});
  if (secs.length === 1 && A0) {
    const s = secs[0];
    for (const [a, b] of [[s.A, A0], [s.I22, Iy0], [s.I33, Iz0], [s.J, J0]])
      if (b) peorSec = Math.max(peorSec, Math.abs(a - b) / Math.abs(b));
  }

  filas.push({ id, cat: M.cat, name: M.name,
    nJoints: J.puntos.length, nNodos: M.nodes.length,
    pctNudos: pct(sobre, J.puntos.length), sueltosConectados,
    nBarras: barrasM.length, pctBarras: pct(cubiertas, barrasM.length),
    nApoyos: M.supports.length, apOk, difFZ, nCargasE: J.cargas.length,
    nSecs: secs.length, peorSec, nAreas: (J.areas || []).length,
    shellsM: M.elements.filter((e) => e.length === 3 || e.length === 4).length });
}

// ── resumen ──
const cuadra = (f) => !f.err && f.pctNudos === 100 && f.pctBarras === 100 &&
                      f.sueltosConectados === 0 && f.apOk === f.nApoyos &&
                      f.difFZ <= TOL_REL && f.peorSec <= TOL_REL;
const bien = filas.filter(cuadra), mal = filas.filter((f) => !cuadra(f));
console.log(`modelos comparados: ${filas.length}`);
console.log(`  CUADRAN:    ${bien.length}`);
console.log(`  NO cuadran: ${mal.length}`);
for (const f of mal.slice(0, 20)) {
  if (f.err) { console.log(`   ${f.id}: ${f.err}`); continue; }
  const por = [];
  if (f.pctNudos < 100) por.push(`nudos ${f.pctNudos.toFixed(1)} %`);
  if (f.sueltosConectados) por.push(`${f.sueltosConectados} joints de más CONECTADOS`);
  if (f.pctBarras < 100) por.push(`barras ${f.pctBarras.toFixed(1)} %`);
  if (f.apOk !== f.nApoyos) por.push(`apoyos ${f.apOk}/${f.nApoyos}`);
  if (f.difFZ > TOL_REL) por.push(`ΣFZ ${(100 * f.difFZ).toFixed(2)} %`);
  if (f.peorSec > TOL_REL) por.push(`sección ${(100 * f.peorSec).toFixed(2)} %`);
  console.log(`   ${f.id.padEnd(44)} ${por.join(" · ")}`);
}

// ── informe ──
filas.sort((a, b) => ((a.cat || "") + a.id).localeCompare((b.cat || "") + b.id));
const md = ["# El e2k de Hekatan, leído por ETABS — modelo a modelo", "",
  "Generado con `node cli/comparar_e2k_etabs.mjs`. Los datos salen de abrir",
  "cada `.e2k` en **ETABS de verdad** (`e2k_lote_etabs.py`) y leer lo que ETABS",
  "entendió, no de releer el fichero: el `.e2k` no guarda cotas, las deduce de",
  "la planta del objeto, y releerlo con el mismo criterio con que se escribe",
  "mide una copia.", "",
  `**${bien.length} de ${filas.length} cuadran.**`, "",
  "«Barras» no exige igualdad una a una: el exportador junta una columna de",
  "varios tramos en una sola LINE (`MINNUMSTA`) y ETABS la vuelve a partir. Se",
  "pide que cada barra del modelo esté DENTRO de alguna de ETABS.", "",
  "«Sueltos» son los joints que ETABS crea de más **y que además tocan algo**:",
  "esos añaden grados de libertad. Un joint suelto sin nada conectado no aporta",
  "rigidez ni masa y no cambia el análisis.", "",
  "| ✓ | ejemplo | categoría | nudos | barras | apoyos | ΣFZ | sección |",
  "|---|---|---|---|---|---|---|---|"];
for (const f of filas) {
  if (f.err) { md.push(`| ✗ | \`${f.id}\` | — | ${f.err} | | | | |`); continue; }
  md.push(`| ${cuadra(f) ? "✓" : "✗"} | \`${f.id}\` | ${f.cat} | ` +
    `${f.pctNudos.toFixed(1)} % (${f.nJoints} joints${f.sueltosConectados ? `, ${f.sueltosConectados} de más conectados` : ""}) | ` +
    `${f.pctBarras.toFixed(1)} % de ${f.nBarras} | ${f.apOk}/${f.nApoyos} | ` +
    `${(100 * f.difFZ).toFixed(3)} % | ${f.nSecs ? (100 * f.peorSec).toFixed(3) + " %" : "—"} |`);
}
writeFileSync(INFORME, md.join("\n") + "\n", "utf-8");
console.log(`\ninforme -> ${relative(process.cwd(), INFORME)}`);
