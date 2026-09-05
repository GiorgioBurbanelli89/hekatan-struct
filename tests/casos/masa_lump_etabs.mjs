/**
 * La BÁSCULA: masa ensamblada nudo a nudo contra `AssembledJointMass` de ETABS.
 *
 * Árbitro: ETABS 22 sobre `galpon_bodega_sinoff.EDB` (599 nudos de análisis),
 * con la hipótesis de masa que el modelo trae de fábrica:
 *
 *   INCLUDEELEMENTS "Yes"  INCLUDEVERTICALMASS "No"  LUMPATSTORIES "Yes"
 *
 * ⚠️ **`_sinoff` = con los brazos rígidos ANULADOS**, que es la regla de oro de
 * este repo. Los 1028 objetos de barra del galpón traen brazo rígido
 * AUTOMÁTICO — el `.e2k` no escribe ni un `RIGIDZONE` porque es el DEFECTO de
 * ETABS, así que `grep` no lo ve; hay que preguntárselo al modelo con
 * `FrameObj.GetEndLengthOffset`. Con ellos puestos, ETABS **no pesa el tramo de
 * VIGA que cae dentro del brazo** (los de columna sí los pesa) y el modelo sale
 * 0.7628 t más liviano: un +0.545 % que parecía un error de Hekatan y no lo era.
 *
 * La referencia la vuelcan `galpon-bodega-electoral/masa_sin_offsets_etabs.py`
 * (anula los offsets y reanaliza) + `masa_nodal_etabs.py`
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
  // La referencia de ETABS (AssembledJointMass) es la de los OBJETOS de 4 nudos por pano; desde
  // el 5-sep-2026 galpon_lc.heks lleva `deck etabs` (panos partidos), asi que aqui va la copia
  // sin directiva: la bascula mide la masa por objeto, no la malla de analisis.
  const modelo = await resolverHeks(join(DATOS, "galpon_lc_4nudos.heks"));
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
  // Con los brazos rígidos anulados esto cierra a la CUARTA cifra
  // (140.755089 contra 140.755038): el límite es apretado a propósito, porque
  // aquí ya no hay hipótesis de por medio — son los mismos kilos.
  filas.push({
    que: "masa total vs ETABS", medido: difTotal, limite: 0.01,
    ok: Math.abs(difTotal) <= 0.01,
    detalle: `${tHK.toFixed(6)} t contra ${tET.toFixed(6)} t (con offsets: +0.545 %)`,
  });

  // ── 3. masa por cota de piso ──────────────────────────────────────
  for (const zp of PISOS) {
    const a = nodos.filter((r) => Math.abs(r.z - zp) <= TOL_Z)
                   .reduce((s, r) => s + r.m, 0);
    const b = et.filter((r) => Math.abs(r.z - zp) <= TOL_Z)
                .reduce((s, r) => s + r.ux, 0);
    const d = (100 * (a - b)) / b;
    // Aquí ya no se mide cuánta masa hay —eso cierra al 0.0000 %— sino DÓNDE la
    // pone la regla de LUMPATSTORIES. Lo que queda (≤ 0.30 %) es el reparto en
    // los nudos cuya vertical no llega al piso.
    filas.push({
      que: `masa en la cota z=${zp.toFixed(2)}`, medido: d, limite: 0.5,
      ok: Math.abs(d) <= 0.5,
      detalle: `${a.toFixed(4)} t contra ${b.toFixed(4)} t`,
    });
  }

  // ── 4. nudo a nudo, cruzando por coordenada ───────────────────────
  let conMasa = 0, dentro5 = 0, dentro01 = 0;
  for (const r of nodos) {
    let par = null, dmin = 0.01 * 0.01;
    for (const s of et) {
      const d = (s.x - r.x) ** 2 + (s.y - r.y) ** 2 + (s.z - r.z) ** 2;
      if (d <= dmin) { dmin = d; par = s; }
    }
    if (!par) continue;
    if (Math.max(r.m, par.ux) <= 1e-6) continue;
    conMasa++;
    const e = (100 * Math.abs(r.m - par.ux)) / Math.max(par.ux, 1e-12);
    if (e <= 5.0) dentro5++;
    if (e <= 0.1) dentro01++;
  }
  filas.push({
    que: "nudos dentro del 5 % (mas es mejor)",
    medido: (100 * dentro5) / conMasa, limite: 80.0,
    ok: (100 * dentro5) / conMasa >= 80.0,
    detalle: `${dentro5} de ${conMasa} nudos con masa (con el fallo del lump: 64.5 %)`,
  });
  // El 0.1 % es el que delata si la regla de reparto se degrada: son los nudos
  // donde Hekatan y ETABS ponen EL MISMO kilo, no uno parecido.
  filas.push({
    que: "nudos dentro del 0.1 % (mas es mejor)",
    medido: (100 * dentro01) / conMasa, limite: 70.0,
    ok: (100 * dentro01) / conMasa >= 70.0,
    detalle: `${dentro01} de ${conMasa} (con offsets en la referencia: 21.4 %)`,
  });

  return filas;
}
