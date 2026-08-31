/**
 * COMPARAR CASCARAS CONTRA ETABS — bien.
 *
 * Lo que se aprendio el 30-ago-2026 midiendo, y que este script aplica:
 *
 *  1. **Validar el emparejado ANTES de nada.** Se correlaciona `uz`, que es
 *     global y no depende de ejes locales. Si R² no sale ≈ 1, lo que falla es
 *     el emparejado y el resto de numeros no significan nada.
 *
 *  2. **No comparar M11/M22/F11 crudos.** Son componentes en los EJES LOCALES
 *     de cada elemento; el promedio por nudo mezcla orientaciones, y en cada
 *     programa de forma distinta. Medido: M11 daba R² = 0.2158 mientras el
 *     desplazamiento en esos MISMOS nudos daba R² = 1.0000. Se comparan
 *     **invariantes** (traza, principales, radio de Mohr), que no cambian al
 *     girar el eje: la traza de M sube a R² = 0.7804 y la de F a 0.8898.
 *
 *  3. **Dar el error ABSOLUTO junto al %.** El % va sobre el pico de cada
 *     campo, asi que dos errores iguales parecen uno el doble del otro: M11
 *     salia 11.5 % y M22 20.5 % con el MISMO error absoluto (7.27 vs 7.00),
 *     solo porque el pico de M22 es la mitad.
 *
 *  4. **Dar la pendiente k y el R².** Un k negativo con R² alto no es "converge
 *     mal": es el signo cambiado.
 *
 *     node cli/comparar_cascaras.mjs [tipo ...]
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { resolverHeks } from "../tests/lib/heks.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const DATOS = join(AQUI, "..", "tests", "datos");
const TIPOS = process.argv.slice(2).length ? process.argv.slice(2)
  : ["deck", "maciza_mem", "maciza_thin", "maciza_thick", "nervada_1d", "waffle_2d"];

const k3 = (p) => [p[0], p[1], p[2]].map((v) => Math.round(v * 1000)).join("|");
const MAP = { M11: "bendingXX", M22: "bendingYY", M12: "bendingXY",
              F11: "membraneXX", F22: "membraneYY", F12: "membraneXY",
              V13: "tranverseShearX", V23: "tranverseShearY" };

/** regresion por el origen: y = k*x */
function reg(pares) {
  let sxy = 0, sxx = 0, syy = 0, sabs = 0, pico = 0, n = 0;
  for (const [x, y] of pares) {
    sxy += x * y; sxx += x * x; syy += y * y;
    sabs += Math.abs(y - x); pico = Math.max(pico, Math.abs(x)); n++;
  }
  if (!n || sxx < 1e-15) return null;
  return { k: sxy / sxx, r2: (sxy * sxy) / (sxx * syy),
           abs: sabs / n, pct: pico > 1e-12 ? (sabs / n) / pico * 100 : null, n };
}
const inv = (o, p) => {
  const a = o[p + "11"], b = o[p + "22"], c = o[p + "12"];
  const med = (a + b) / 2, R = Math.hypot((a - b) / 2, c);
  return { traza: a + b, max: med + R, min: med - R, mohr: R };
};

for (const tipo of TIPOS) {
  const fref = join(DATOS, `losas_ref_${tipo}.json`);
  const fheks = join(DATOS, `losas_${tipo}.heks`);
  if (!existsSync(fref) || !existsSync(fheks)) {
    console.log(`\n### ${tipo}: faltan datos, se salta`); continue;
  }
  const ref = JSON.parse(readFileSync(fref, "utf-8"));
  const m = await resolverHeks(fheks);
  const nodes = m.nodes, els = m.elements || [], a = m.analyzeOutputs || {};

  // ── 1. VALIDAR el emparejado con uz ─────────────────────────────────────
  const def = m.deformOutputs?.deformations;
  const uzH = new Map();
  nodes.forEach((p, i) => { const d = def?.get?.(i); if (d) uzH.set(k3(p), d[2]); });
  const parUz = [];
  for (const r of ref.desplazamientos || []) {
    const H = uzH.get(k3([r.x, r.y, r.z]));
    if (H !== undefined && r.uz != null) parUz.push([r.uz, H]);
  }
  const vUz = reg(parUz);
  console.log(`\n${"=".repeat(74)}\n### ${tipo}`);
  if (!vUz) { console.log("   sin desplazamientos que emparejar — no se sigue"); continue; }
  // 0.995 basta: por debajo el emparejado ya no vale. deck y maciza_mem
  // rondan 0.9978 porque son MEMBRANA (la losa no toma flexion) y tienen
  // la mitad de nudos.
  const ok = vUz.r2 > 0.995;
  console.log(`  emparejado (uz):  ${vUz.n} nudos   k = ${vUz.k.toFixed(4)}   R2 = ${vUz.r2.toFixed(4)}` +
              `   ${ok ? "OK" : "<-- NO VALE, el resto no significa nada"}`);
  if (!ok) continue;

  // ── 2. acumular por nudo ────────────────────────────────────────────────
  const acH = new Map();
  els.forEach((e, i) => { if (e.length !== 4) return;
    e.forEach((n, esq) => { const k = k3(nodes[n]);
      let o = acH.get(k); if (!o) { o = { n: 0 }; for (const c of Object.keys(MAP)) o[c] = 0; acH.set(k, o); }
      o.n++;
      for (const [ce, ch] of Object.entries(MAP)) { const v = a[ch]?.get?.(i);
        o[ce] += Array.isArray(v) ? (v[esq] ?? 0) : (v ?? 0); } }); });
  const acE = new Map();
  for (const r of ref.shells || []) { if (r.cx == null) continue;
    const k = k3([r.cx, r.cy, r.cz]); let o = acE.get(k);
    if (!o) { o = { n: 0 }; for (const c of Object.keys(MAP)) o[c] = 0; acE.set(k, o); }
    o.n++; for (const c of Object.keys(MAP)) o[c] += r[c] ?? 0; }
  const ps = [];
  for (const [k, e] of acE) { const h = acH.get(k); if (!h) continue;
    const A = {}, B = {};
    for (const c of Object.keys(MAP)) { A[c] = h[c] / h.n; B[c] = e[c] / e.n; }
    ps.push({ hk: A, et: B }); }
  if (!ps.length) { console.log("  sin cascaras emparejadas"); continue; }

  const fila = (nom, f) => {
    const v = reg(ps.map((p) => [f(p.et), f(p.hk)]));
    if (!v) { console.log(`  ${nom.padEnd(22)}  —`); return; }
    const nota = v.r2 > 0.9 && Math.abs(v.k - 1) < 0.1 ? "" :
                 v.k < 0 && v.r2 > 0.5 ? "SIGNO CAMBIADO" :
                 v.r2 < 0.5 ? "no correlaciona" : "";
    console.log(`  ${nom.padEnd(22)} k=${v.k.toFixed(3).padStart(7)}  R2=${v.r2.toFixed(3)}` +
                `  err ${v.abs.toFixed(2).padStart(7)} (${(v.pct ?? 0).toFixed(1).padStart(5)} %)  ${nota}`);
  };
  console.log(`  ${ps.length} nudos de cascara\n  -- componentes en EJE LOCAL (informativo, NO concluyente) --`);
  for (const c of ["M11", "M22", "F11", "F22"]) fila(c, (o) => o[c]);
  console.log(`  -- INVARIANTES (lo que vale) --`);
  fila("M traza", (o) => inv(o, "M").traza);
  fila("M principal max", (o) => inv(o, "M").max);
  fila("M radio de Mohr", (o) => inv(o, "M").mohr);
  fila("F traza", (o) => inv(o, "F").traza);
  fila("F principal max", (o) => inv(o, "F").max);
}
