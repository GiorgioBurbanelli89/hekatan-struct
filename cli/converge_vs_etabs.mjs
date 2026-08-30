/**
 * .CUANTO CONVERGE HEKATAN STRUCT CON ETABS?  —  joints, frames y shells.
 *
 * La referencia (`tests/datos/losas_ref_<tipo>.json`) ya traia las tres cosas y
 * solo se comparaba la flecha maxima. Aqui se comparan TODAS:
 *
 *   JOINTS   desplazamiento de cada nudo, emparejado por COORDENADA
 *   FRAMES   P, V2, V3, T, M2, M3 (del json de `fuerzas_etabs.py`, que guarda
 *            las barras por los dos extremos; el de losas las guarda por NOMBRE
 *            y los dos programas numeran distinto)
 *   SHELLS   F11 F22 F12 M11 M22 M12 V13 V23, por el CENTROIDE del elemento.
 *            Hekatan las llama bendingXX/YY/XY y membraneXX/YY/XY.
 *
 * El error va en % del PICO de ETABS de ese campo, que es lo unico honesto: un
 * momento de 0.5 kN·m que sale 0.6 no es un 20 % de error si el pico son 800.
 *
 *     node cli/converge_vs_etabs.mjs [tipo]        (por defecto maciza_thin)
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { resolverHeks, fuerzasDeBarra } from "../tests/lib/heks.mjs";
import { compararFuerzas, CAMPOS } from "../tests/lib/comparar.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const DATOS = join(AQUI, "..", "tests", "datos");
const tipo = process.argv[2] || "maciza_thin";

const ref = JSON.parse(readFileSync(join(DATOS, `losas_ref_${tipo}.json`), "utf-8"));
const modelo = await resolverHeks(join(DATOS, `losas_${tipo}.heks`));
const nodes = modelo.nodes;
const k3 = (p) => [p[0], p[1], p[2]].map((v) => Math.round(v * 1000)).join("|");

function resumen(nombre, pares, campos) {
  console.log("\n" + nombre + "  (" + pares.length + " emparejados)");
  if (!pares.length) return;
  for (const c of campos) {
    let pico = 0, suma = 0, max = 0, n = 0;
    for (const { b } of pares) pico = Math.max(pico, Math.abs(b[c] ?? 0));
    if (pico < 1e-12) { console.log("   " + c.padEnd(4) + " pico ETABS ~ 0, se salta"); continue; }
    for (const { a, b } of pares) {
      const e = Math.abs((a[c] ?? 0) - (b[c] ?? 0)) / pico * 100;
      suma += e; max = Math.max(max, e); n++;
    }
    console.log("   " + c.padEnd(4) +
      " err medio " + (suma / n).toFixed(3).padStart(7) + " %   " +
      " err max " + max.toFixed(2).padStart(8) + " %   pico ETABS " + pico.toFixed(3));
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
resumen("JOINTS — desplazamientos (" + ref.desplazamientos.length + " en ETABS, " +
        dHek.size + " en Hekatan)", pj, ["ux", "uy", "uz"]);

// ── FRAMES ────────────────────────────────────────────────────────────────
try {
  const fref = JSON.parse(readFileSync(join(DATOS, "membrana_live_etabs.json"), "utf-8"));
  const mLive = await resolverHeks(join(DATOS, "membrana_live.heks"));
  const cf = compararFuerzas(fuerzasDeBarra(mLive), fref);
  console.log("\nFRAMES — fuerzas de barra, caso Live (" + cf.emparejadas +
              " emparejadas de " + cf.nStruct + " Hekatan / " + cf.nEtabs + " ETABS)");
  for (const c of CAMPOS) {
    const x = cf.campos[c];
    console.log("   " + c.padEnd(4) +
      " err medio " + x.medio.toFixed(3).padStart(7) + " %   " +
      " err max " + x.max.toFixed(2).padStart(8) + " %   pico ETABS " + x.pico.toFixed(3));
  }
} catch (e) { console.log("\nFRAMES: " + e.message); }

// ── SHELLS ────────────────────────────────────────────────────────────────
// NUDO A NUDO, que es como los dan los dos: `AreaForceShell` devuelve un
// registro por NUDO de cada elemento (el nudo va en `PointElm`), y Hekatan da
// un array de 4, uno por esquina. Varios elementos comparten cada nudo, asi que
// se promedia en los dos lados — el «joint averaged» de toda la vida.
{
  const a = modelo.analyzeOutputs || {};
  const els = modelo.elements || [];
  const MAP = { M11: "bendingXX", M22: "bendingYY", M12: "bendingXY",
                F11: "membraneXX", F22: "membraneYY", F12: "membraneXY",
                V13: "tranverseShearX", V23: "tranverseShearY" };
  // Hekatan: acumular por NUDO
  const acH = new Map();
  els.forEach((e, i) => {
    if (e.length !== 4) return;
    e.forEach((n, esq) => {
      const k = k3(nodes[n]);
      let o = acH.get(k);
      if (!o) { o = { n: 0 }; for (const c of Object.keys(MAP)) o[c] = 0; acH.set(k, o); }
      o.n++;
      for (const [ce, ch] of Object.entries(MAP)) {
        const v = a[ch]?.get?.(i);
        o[ce] += Array.isArray(v) ? (v[esq] ?? 0) : (v ?? 0);
      }
    });
  });
  // ETABS: acumular por NUDO
  const acE = new Map();
  for (const r of ref.shells || []) {
    if (r.cx === null || r.cx === undefined) continue;
    const k = k3([r.cx, r.cy, r.cz]);
    let o = acE.get(k);
    if (!o) { o = { n: 0 }; for (const c of Object.keys(MAP)) o[c] = 0; acE.set(k, o); }
    o.n++;
    for (const c of Object.keys(MAP)) o[c] += r[c] ?? 0;
  }
  const ps = [];
  for (const [k, e] of acE) {
    const h = acH.get(k);
    if (!h) continue;
    const A = {}, B = {};
    for (const c of Object.keys(MAP)) { A[c] = h[c] / h.n; B[c] = e[c] / e.n; }
    ps.push({ a: A, b: B });
  }
  resumen("SHELLS — fuerzas de cascara NUDO A NUDO (" + acE.size + " nudos en ETABS, " +
          acH.size + " en Hekatan)", ps,
          ["F11", "F22", "F12", "M11", "M22", "M12", "V13", "V23"]);
}
