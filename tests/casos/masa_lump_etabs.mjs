/**
 * La BÁSCULA: masa ensamblada nudo a nudo contra `AssembledJointMass` de ETABS.
 *
 * Árbitro: ETABS 22 sobre `galpon_bodega.EDB` (599 nudos de análisis), con la
 * hipótesis de masa que el modelo trae de fábrica:
 *
 *   INCLUDEELEMENTS "Yes"  INCLUDEVERTICALMASS "No"  LUMPATSTORIES "Yes"
 *
 * La referencia la vuelca `galpon-bodega-electoral/masa_nodal_etabs.py`
 * (`Results.AssembledJointMass_1`, grupo "ALL", ItemTypeElm = 2).
 *
 * Por qué existe este caso: hasta el 2026-08-15 la masa se comprobaba solo por
 * sus consecuencias —las frecuencias— y así se coló un defecto que las tablas de
 * periodos disimulaban. La regla de LUMPATSTORIES manda la masa de cada nudo al
 * nudo de piso de SU VERTICAL, y cuando esa vertical no llegaba al piso la
 * dejaba **donde estaba**: 2.4249 t del galpón (el 1.7 % del modelo) repartidas
 * en 40 cotas intermedias donde ETABS tiene CERO. El modo 3 salía +4.77 %.
 *
 * Lo que se vigila, en orden de dureza:
 *   1. NINGUNA masa fuera de las cotas de piso. No es una tolerancia: ETABS
 *      tiene exactamente 0.0000 t fuera de sus cuatro cotas, medido.
 *   2. La masa total, contra la de ETABS.
 *   3. La masa POR COTA de piso.
 *   4. Cuántos nudos caen dentro del 5 % nudo a nudo.
 *
 * Se llama a `assembled_joint_mass` del WASM, que usa la MISMA `ensamblarMasa()`
 * de `modal.cpp` que arma la M del problema de valores propios — no una copia
 * de la cuenta en JavaScript.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { resolverHeks } from "../lib/heks.mjs";
import { masaEnsamblada } from "../lib/wasm.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const DATOS = join(AQUI, "..", "datos");

export const nombre = "masa-lump-etabs";
export const descripcion =
  "Masa ensamblada nudo a nudo (LUMPATSTORIES + solo lateral) vs AssembledJointMass de ETABS 22";

/** Las cotas de piso de ETABS en este modelo, medidas con AssembledJointMass. */
const PISOS = [0.0, 3.0, 4.0, 8.0];
const TOL_Z = 0.05;   // m — la misma con la que el motor agrupa cotas

const enPiso = (z) => PISOS.some((zp) => Math.abs(z - zp) <= TOL_Z);

export async function correr() {
  const filas = [];
  const modelo = await resolverHeks(join(DATOS, "galpon_lc.heks"));
  const et = JSON.parse(readFileSync(join(DATOS, "galpon_masa_etabs.json"), "utf-8"));

  const masa = await masaEnsamblada(modelo.nodes, modelo.elements, modelo.elementInputs,
                                    { lateral: 1, lump: 1, incluyeElementos: 1 });

  const nodos = modelo.nodes.map((n, i) => ({ x: n[0], y: n[1], z: n[2], m: masa[i] }));

  // ── 1. nada de masa fuera de una cota de piso ──────────────────────
  const fuera = nodos.filter((r) => r.m > 1e-9 && !enPiso(r.z));
  const mFuera = fuera.reduce((s, r) => s + r.m, 0);
  filas.push({
    que: "masa fuera de cota de piso",
    medido: mFuera, limite: 1e-6, ok: mFuera <= 1e-6,
    detalle: `${mFuera.toFixed(4)} t en ${fuera.length} nudos (ETABS: 0.0000 t; con el fallo: 2.4249 t en 70)`,
  });

  // ── 2. masa total ─────────────────────────────────────────────────
  const tHK = nodos.reduce((s, r) => s + r.m, 0);
  const tET = et.reduce((s, r) => s + r.ux, 0);
  const difTotal = (100 * (tHK - tET)) / tET;
  filas.push({
    que: "masa total vs ETABS", medido: difTotal, limite: 1.0,
    ok: Math.abs(difTotal) <= 1.0,
    detalle: `${tHK.toFixed(4)} t contra ${tET.toFixed(4)} t`,
  });

  // ── 3. masa por cota de piso ──────────────────────────────────────
  for (const zp of PISOS) {
    const a = nodos.filter((r) => Math.abs(r.z - zp) <= TOL_Z)
                   .reduce((s, r) => s + r.m, 0);
    const b = et.filter((r) => Math.abs(r.z - zp) <= TOL_Z)
                .reduce((s, r) => s + r.ux, 0);
    const d = (100 * (a - b)) / b;
    // El entrepiso (z=4) carga el deck nervado, que ETABS pesa por la geometria
    // del nervio y Hekatan como rho*t*A liso: ahi se afloja a 2 %.
    const lim = Math.abs(zp - 4.0) < 0.01 ? 2.0 : 1.5;
    filas.push({
      que: `masa en la cota z=${zp.toFixed(2)}`, medido: d, limite: lim,
      ok: Math.abs(d) <= lim,
      detalle: `${a.toFixed(4)} t contra ${b.toFixed(4)} t`,
    });
  }

  // ── 4. nudo a nudo, cruzando por coordenada ───────────────────────
  let conMasa = 0, dentro = 0;
  for (const r of nodos) {
    let par = null, dmin = 0.01 * 0.01;
    for (const s of et) {
      const d = (s.x - r.x) ** 2 + (s.y - r.y) ** 2 + (s.z - r.z) ** 2;
      if (d <= dmin) { dmin = d; par = s; }
    }
    if (!par) continue;
    if (Math.max(r.m, par.ux) <= 1e-6) continue;
    conMasa++;
    if ((100 * Math.abs(r.m - par.ux)) / Math.max(par.ux, 1e-12) <= 5.0) dentro++;
  }
  const pct = (100 * dentro) / conMasa;
  filas.push({
    que: "nudos dentro del 5 % (mas es mejor)", medido: pct, limite: 75.0,
    ok: pct >= 75.0,
    detalle: `${dentro} de ${conMasa} nudos con masa (con el fallo: 64.5 %)`,
  });

  return filas;
}
