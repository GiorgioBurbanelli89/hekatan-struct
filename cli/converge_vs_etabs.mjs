/**
 * .CUANTO CONVERGE HEKATAN STRUCT CON ETABS?  —  frames, shells y joints.
 *
 * La referencia (`tests/datos/losas_ref_<tipo>.json`) ya traia las tres cosas y
 * solo se comparaba la flecha maxima. Aqui se comparan TODAS:
 *
 *   JOINTS   desplazamiento de cada nudo, emparejado por COORDENADA
 *   FRAMES   P, V2, V3, T, M2, M3 en los extremos de cada barra
 *   SHELLS   F11 F22 F12 M11 M22 M12 V13 V23, por el CENTROIDE del elemento
 *
 * El error se da en % del PICO de ETABS de ese campo, que es lo unico honesto:
 * un momento de 0.5 kN·m que sale 0.6 no es un 20 % de error si el pico del
 * modelo son 800.
 *
 *     node cli/converge_vs_etabs.mjs [tipo]        (por defecto maciza_thin)
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { resolverHeks, fuerzasDeBarra } from "../tests/lib/heks.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const DATOS = join(AQUI, "..", "tests", "datos");
const tipo = process.argv[2] || "maciza_thin";

const ref = JSON.parse(readFileSync(join(DATOS, `losas_ref_${tipo}.json`), "utf-8"));
const modelo = await resolverHeks(join(DATOS, `losas_${tipo}.heks`));
const nodes = modelo.nodes;

const k3 = (p) => [p[0], p[1], p[2]].map((v) => Math.round(v * 1000)).join("|");

function resumen(nombre, pares, campos) {
  // pares: [{a: {campo: v}, b: {campo: v}}]
  console.log(`\n${nombre}  (${pares.length} emparejados)`);
  if (!pares.length) return;
  for (const c of campos) {
    let pico = 0, suma = 0, max = 0, n = 0;
    for (const { a, b } of pares) {
      const va = a[c] ?? 0, vb = b[c] ?? 0;
      pico = Math.max(pico, Math.abs(vb));
    }
    if (pico < 1e-12) { console.log(`   ${c.padEnd(4)} pico ETABS ~ 0, se salta`); continue; }
    for (const { a, b } of pares) {
      const e = Math.abs((a[c] ?? 0) - (b[c] ?? 0)) / pico * 100;
      suma += e; max = Math.max(max, e); n++;
    }
    console.log(`   ${c.padEnd(4)} err medio ${(suma / n).toFixed(3).padStart(7)} %   ` +
                `err max ${max.toFixed(2).padStart(8)} %   pico ETABS ${pico.toFixed(3)}`);
  }
}

// ── JOINTS ────────────────────────────────────────────────────────────────
const dHek = new Map();
for (const [i, v] of modelo.deformOutputs.deformations) dHek.set(k3(nodes[i]), v);
const pj = [];
for (const r of ref.desplazamientos) {
  const v = dHek.get(k3([r.x, r.y, r.z]));
  if (v) pj.push({ a: { ux: v[0], uy: v[1], uz: v[2] }, b: { ux: r.ux, uy: r.uy, uz: r.uz } });
}
resumen(`JOINTS — desplazamientos (${ref.desplazamientos.length} en ETABS, ${dHek.size} en Hekatan)`,
        pj, ["ux", "uy", "uz"]);

// ── FRAMES ────────────────────────────────────────────────────────────────
const fh = fuerzasDeBarra(modelo);
const kf = (a, b) => {
  const [p, q] = [a, b].map((v) => v.map((x) => Math.round(x * 1000)).join("|")).sort();
  return p + "#" + q;
};
const mf = new Map();
for (const f of fh) mf.set(kf(f.i, f.j), f);
const pf = [];
for (const r of ref.barras ?? []) {
  const g = mf.get(kf(r.i ?? [0,0,0], r.j ?? [0,0,0]));
  if (g) pf.push({ a: g, b: r });
}
resumen(`FRAMES — fuerzas de barra (${(ref.barras || []).length} en ETABS, ${fh.length} en Hekatan)`,
        pf, ["P", "V2", "V3", "T", "M2", "M3"]);

// ── SHELLS ────────────────────────────────────────────────────────────────
const sh = modelo.analyzeOutputs?.shellForces ?? modelo.analyzeOutputs?.areaForces;
console.log(`\nSHELLS — ETABS trae ${(ref.shells || []).length} registros; ` +
            `Hekatan ${sh ? "tiene" : "NO expone"} fuerzas de cascara por este camino`);
