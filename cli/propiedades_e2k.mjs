#!/usr/bin/env node
/**
 * .Hay propiedades ENVENENADAS en un .e2k importado?
 *
 *   node cli/propiedades_e2k.mjs <fichero.e2k>
 *
 * Quitar rigidez nunca puede arreglar una matriz singular. Asi que si un modelo
 * no resuelve ni coartando todos los GDL sueltos ni quitando los trozos que no
 * llegan a un apoyo, lo que queda es que ALGUNA propiedad esta mal: un NaN, un
 * infinito, un area cero o una inercia negativa. Un solo elemento asi tumba la
 * factorizacion entera, y el solver solo dice «Matrix decomposition failed».
 *
 * Se miran TODOS los mapas de `elementInputs`, no una lista escrita a mano: si
 * manana hay un campo nuevo, entra solo.
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

/** Los campos que TIENEN que ser positivos para que la barra tenga rigidez. */
const IMPRESCINDIBLES = ["elasticities", "areas", "momentsOfInertiaY",
                         "momentsOfInertiaZ", "torsionalConstants"];

export function mirar(t) {
  const m = parseE2k(t);
  coserModelo(m);
  const ei = m.elementInputs;
  const malos = [];      // NaN / Inf / negativo
  const ceros = new Map();
  const faltan = new Map();

  for (const [campo, mapa] of Object.entries(ei)) {
    if (!(mapa instanceof Map)) continue;
    for (const [i, v] of mapa) {
      const lista = Array.isArray(v) ? v : (typeof v === "number" ? [v] : []);
      for (const x of lista) {
        if (typeof x !== "number") continue;
        if (!Number.isFinite(x))
          malos.push({ campo, i, valor: String(x), nombre: m.elementNames?.[i] });
        else if (x < 0 && campo !== "localAngles")
          malos.push({ campo, i, valor: x, nombre: m.elementNames?.[i] });
      }
    }
  }

  // Barras a las que les falta algo imprescindible, o lo tienen a cero.
  m.elements.forEach((el, i) => {
    if (el.length !== 2) return;
    for (const c of IMPRESCINDIBLES) {
      const v = ei[c] instanceof Map ? ei[c].get(i) : undefined;
      if (v === undefined) faltan.set(c, (faltan.get(c) || 0) + 1);
      else if (!(v > 0)) ceros.set(c, (ceros.get(c) || 0) + 1);
    }
  });

  // Y las cascaras: espesor y modulo.
  let shellSinT = 0, shellSinE = 0;
  m.elements.forEach((el, i) => {
    if (el.length < 3) return;
    const t2 = ei.thicknesses instanceof Map ? ei.thicknesses.get(i) : undefined;
    const e2 = ei.elasticities instanceof Map ? ei.elasticities.get(i) : undefined;
    if (!(t2 > 0)) shellSinT++;
    if (!(e2 > 0)) shellSinE++;
  });

  // Barras de longitud cero: su matriz local no existe.
  let cortas = 0;
  const N = m.nodes;
  m.elements.forEach((el) => {
    if (el.length !== 2) return;
    const a = N[el[0]], b = N[el[1]];
    if (!a || !b) return;
    if (Math.hypot(b[0]-a[0], b[1]-a[1], b[2]-a[2]) < 1e-9) cortas++;
  });

  // Cuales son las barras sin propiedades, por su SECCION del .e2k: si todas
  // comparten seccion, el fallo esta en como se lee esa seccion.
  const porSeccion = new Map();
  m.elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const A = ei.areas instanceof Map ? ei.areas.get(i) : undefined;
    if (A > 0) return;
    const sec = m.elementSections?.get?.(i) ?? "(sin seccion)";
    porSeccion.set(sec, (porSeccion.get(sec) || 0) + 1);
  });

  // El RANGO de rigideces. Si va de 1e-6 a 1e12, la factorizacion se cae por
  // condicionamiento aunque no falte rigidez en ningun sitio: la diferencia
  // entre el termino mas grande y el mas chico se come los digitos del double.
  const ks = [];
  const detalle = [];
  m.elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const a = N[el[0]], b = N[el[1]];
    if (!a || !b) return;
    const L = Math.hypot(b[0]-a[0], b[1]-a[1], b[2]-a[2]);
    const E = ei.elasticities?.get(i), A = ei.areas?.get(i);
    const I = Math.min(ei.momentsOfInertiaY?.get(i) ?? Infinity,
                       ei.momentsOfInertiaZ?.get(i) ?? Infinity);
    if (!(E > 0 && A > 0 && L > 0)) return;
    ks.push(E * A / L);
    if (I > 0 && Number.isFinite(I)) ks.push(12 * E * I / L**3);
    detalle.push({ i, nombre: m.elementNames?.[i], L,
                   ka: E*A/L, kf: (I>0 && Number.isFinite(I)) ? 12*E*I/L**3 : 0 });
  });
  ks.sort((x,y)=>x-y);
  detalle.sort((x,y)=> Math.min(x.ka, x.kf||Infinity) - Math.min(y.ka, y.kf||Infinity));
  const cond = { min: ks[0], max: ks[ks.length-1],
    ordenes: ks.length ? Math.log10(ks[ks.length-1]/ks[0]) : 0,
    masFlojas: detalle.slice(0,5).map(d => ({ nombre: d.nombre, L: +d.L.toFixed(4),
      ka: d.ka.toExponential(2), kf: d.kf ? d.kf.toExponential(2) : "0" })) };

  return { cond,
           nBarras: m.elements.filter(e => e.length === 2).length,
           nShells: m.elements.filter(e => e.length > 2).length,
           malos: malos.slice(0, 12), nMalos: malos.length,
           ceros: [...ceros], faltan: [...faltan],
           shellSinT, shellSinE, cortas, porSeccion: [...porSeccion].slice(0, 10) };
}`, "propiedades");

for (const f of process.argv.slice(2)) {
  const r = mod.mirar(readFileSync(f, "utf-8"));
  console.log(`\n── ${basename(f)} ${"─".repeat(46)}`);
  console.log(`  ${r.nBarras} barras · ${r.nShells} cascaras`);
  console.log(`  valores NaN / Inf / negativos ..... ${r.nMalos}`);
  for (const x of r.malos)
    console.log(`     ${String(x.nombre ?? x.i).padEnd(16)} ${x.campo} = ${x.valor}`);
  console.log(`  barras con un imprescindible a CERO: ` +
    (r.ceros.length ? r.ceros.map(([k, v]) => `${v} ${k}`).join(" · ") : "ninguna"));
  console.log(`  barras a las que FALTA el campo ...: ` +
    (r.faltan.length ? r.faltan.map(([k, v]) => `${v} ${k}`).join(" · ") : "ninguna"));
  console.log(`  cascaras sin espesor / sin E ......: ${r.shellSinT} / ${r.shellSinE}`);
  console.log(`  barras de longitud CERO ...........: ${r.cortas}`);
  console.log(`  RIGIDECES: de ${r.cond.min?.toExponential(3)} a ${r.cond.max?.toExponential(3)} kN/m ` +
    `= ${r.cond.ordenes.toFixed(1)} ordenes de magnitud` +
    (r.cond.ordenes > 12 ? "   <- la factorizacion se cae por esto" : ""));
  for (const d of r.cond.masFlojas)
    console.log(`     la mas floja: ${String(d.nombre).padEnd(14)} L=${d.L} m  ` +
      `EA/L=${d.ka}  12EI/L3=${d.kf}`);
  if (r.porSeccion.length) {
    console.log(`  las barras sin area, por SECCION del .e2k:`);
    for (const [s, n] of r.porSeccion) console.log(`     ${String(n).padStart(5)}  ${s}`);
  }
}
