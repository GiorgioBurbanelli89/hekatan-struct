#!/usr/bin/env node
/**
 * BISECAR un .e2k que no resuelve, ANADIENDO en vez de quitando.
 *
 *   node cli/bisecar_e2k.mjs <fichero.e2k>
 *
 * Cuando el analisis nudo a nudo (`cli/mecanismos_e2k.mjs`) ya no encuentra
 * nada y el modelo sigue sin resolver, lo que queda es un mecanismo GLOBAL:
 * varios nudos moviendose juntos. Eso no lo ve ningun analisis local.
 *
 * La forma de acorralarlo es al reves de lo que parece: NO se quitan elementos
 * —quitar puede CREAR mecanismos nuevos y entonces no se sabe si el que falla
 * es el que quitaste o el que dejaste—, se AÑADEN sobre algo que ya resuelve.
 * El primer grupo que rompe es el que lo trae.
 *
 * Los grupos son por familia y planta, que es como esta hecho el edificio:
 * primero las cascaras, luego las columnas de abajo arriba, luego las vigas.
 *
 * En cada paso se coartan los GDL que no sujeta nadie, para que lo que se mida
 * sea el mecanismo global y no el ruido local que ya se sabe tratar.
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

function subModelo(m, idx) {
  const els = idx.map(i => m.elements[i]);
  const ei = {};
  for (const [k, v] of Object.entries(m.elementInputs)) {
    if (!(v instanceof Map)) { ei[k] = v; continue; }
    const o = new Map(); idx.forEach((viejo, j) => { if (v.has(viejo)) o.set(j, v.get(viejo)); });
    ei[k] = o;
  }
  // Los apoyos y las cargas se copian: coartar en un paso no puede ensuciar el
  // siguiente, o la escalera medira su propia historia.
  const ni = {};
  for (const [k, v] of Object.entries(m.nodeInputs))
    ni[k] = v instanceof Map ? new Map([...v].map(([a, b]) =>
      [a, Array.isArray(b) ? b.slice() : b])) : v;
  return { ...m, elements: els, elementInputs: ei, nodeInputs: ni };
}

function resolver(m) {
  const usado = new Set();
  for (const el of m.elements) for (const n of el) usado.add(n);
  const mapa = new Map(); const N2 = [];
  m.nodes.forEach((n, i) => { if (usado.has(i)) { mapa.set(i, N2.length); N2.push(n); } });
  const E2 = m.elements.map(el => el.map(i => mapa.get(i)));
  const rm = (mm) => { if (!(mm instanceof Map)) return mm; const o = new Map();
    for (const [i, v] of mm) { const j = mapa.get(i); if (j !== undefined) o.set(j, v); } return o; };
  const ni = {}; for (const k of Object.keys(m.nodeInputs)) ni[k] = rm(m.nodeInputs[k]);
  const muelles = muellesDelModelo(m).muelles
    .map(s => ({ ...s, node: mapa.get(s.node) })).filter(s => s.node !== undefined);
  try {
    const d = deform(N2, E2, ni, m.elementInputs, muelles);
    const n = d?.deformations?.size ?? 0;
    let uz = 0;
    for (const [, v] of (d?.deformations ?? [])) if (Math.abs(v[2]) > Math.abs(uz)) uz = v[2];
    return { nudos: N2.length, n, uz, err: "" };
  } catch (e) {
    return { nudos: N2.length, n: 0, uz: 0, err: String(e?.message || e).slice(0, 30) };
  }
}

export function bisecar(t) {
  const m = parseE2k(t);
  // SIN los nudos de cruce: hacen falta las DOS barras que se cruzan, y en un
  // subconjunto donde solo hay una el nudo queda colgando. La biseccion
  // acusaria a esa barra de un mecanismo que ha creado ella misma.
  coserModelo(m, undefined, { sinCruces: true });

  // Grupos: primero las cascaras, luego COLUMN/BRACE por planta, luego BEAM.
  const planta = (i) => m.elementStories?.[i] ?? "?";
  const grupos = new Map();
  m.elements.forEach((el, i) => {
    const tipo = el.length > 2 ? "0 cascaras"
      : (m.elementTypes?.[i] === "BEAM" ? "2 vigas " : "1 pilares");
    const k = tipo + " " + (el.length > 2 ? "" : planta(i));
    if (!grupos.has(k)) grupos.set(k, []);
    grupos.get(k).push(i);
  });
  const claves = [...grupos.keys()].sort();

  const salida = [];
  const acum = [];
  for (const k of claves) {
    acum.push(...grupos.get(k));
    const sub = subModelo(m, acum.slice());
    const inf = coartarGdlSueltos(sub);
    const r = resolver(sub);
    salida.push({ grupo: k, nGrupo: grupos.get(k).length, nAcum: acum.length,
                  coartados: inf.coartados, sueltosT: inf.sueltosTraslacion,
                  sueltosG: inf.sueltosGiro, ...r });
  }
  // ── Y DENTRO del primer grupo que rompe: biseccion binaria ──
  //
  // El grupo entero dice «aqui esta»; la biseccion dice CUAL. Se parte el grupo
  // en dos y se prueba con la primera mitad sobre lo que ya resolvia; si rompe,
  // esta ahi; si no, esta en la otra. En log2(n) pasos queda un elemento.
  const iRompe = salida.findIndex((x) => !x.n);
  const detalle = [];
  if (iRompe > 0) {
    const base = [];
    for (let k = 0; k < iRompe; k++) base.push(...grupos.get(claves[k]));
    let cand = grupos.get(claves[iRompe]).slice();
    while (cand.length > 1) {
      const mitad = cand.slice(0, Math.ceil(cand.length / 2));
      const sub = subModelo(m, base.concat(mitad));
      coartarGdlSueltos(sub);
      const r = resolver(sub);
      detalle.push({ n: mitad.length, resuelve: !!r.n });
      cand = r.n ? cand.slice(mitad.length) : mitad;
    }
    const i = cand[0];
    detalle.push({ culpable: i, nombre: m.elementNames?.[i],
      tipo: m.elementTypes?.[i], planta: m.elementStories?.[i],
      nudos: m.elements[i].map((n) => m.nodeNames?.[n] ?? n),
      release: m.elementInputs.momentReleases?.get(i) });
  }
  return { salida, detalle };
}`, "bisecar");

for (const f of process.argv.slice(2)) {
  console.log(`\n── ${basename(f)} ${"─".repeat(52)}`);
  console.log("grupo que se anade         +elems  total  nudos  coartados  .resuelve?   Uz [mm]");
  console.log("-".repeat(92));
  const { salida, detalle } = mod.bisecar(readFileSync(f, "utf-8"));
  for (const r of salida) {
    console.log(
      r.grupo.padEnd(26) + String(r.nGrupo).padStart(7) + String(r.nAcum).padStart(7) +
      String(r.nudos).padStart(7) + String(r.coartados).padStart(11) + "   " +
      (r.n ? "si" : "NO").padEnd(11) +
      (r.n ? (r.uz * 1000).toExponential(3) : (r.err || "-")));
  }
  if (detalle?.length) {
    const fin = detalle[detalle.length - 1];
    console.log(`
  biseccion dentro del grupo que rompe (${detalle.length - 1} pasos):`);
    if (fin.culpable !== undefined) {
      console.log(`    EL PRIMERO QUE ROMPE: elemento ${fin.culpable} «${fin.nombre}» ` +
        `${fin.tipo} en ${fin.planta}`);
      console.log(`      nudos:   ${fin.nudos.join("  ->  ")}`);
      console.log(`      release: ${fin.release
        ? fin.release.map((v, k) => v ? ["PI","V2I","V3I","TI","M2I","M3I",
            "PJ","V2J","V3J","TJ","M2J","M3J"][k] : "").filter(Boolean).join(" ")
        : "(ninguno)"}`);
    }
  }
}
