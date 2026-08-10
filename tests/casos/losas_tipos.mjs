/**
 * Matriz de TIPOS DE LOSA — el mismo mezanine, seis maneras de declarar el area.
 *
 * Arbitro: ETABS 22, con el MISMO modelo y la misma malla. Las referencias las
 * vuelca `tests/datos/gen_losas_ref.py` leyendo los .EDB que deja
 * `galpon-bodega-electoral/a_etabs.py --analizar parte_mezanine.json --losa X`.
 * Lo que varia entre corridas es SOLO la propiedad del entrepiso: misma
 * geometria, mismas secciones, mismas cargas, mismos apoyos. Asi el test mide
 * el tipo de losa y nada mas.
 *
 * Que vigila cada tipo:
 *   deck / maciza_mem   la losa es MEMBRANA: se queda fuera de la matriz y
 *                       entrega su carga a las vigas por `frameload`.
 *   maciza_thin/thick   la losa entra como CASCARA y lleva ella su carga.
 *   nervada_1d          ortotropa en UNA direccion. Es el caso dificil: los
 *                       nervios van en el EJE LOCAL del pano, y los panos de
 *                       este entrepiso no tienen todos el mismo angulo.
 *   waffle_2d           ortotropa en DOS. Al ser simetrica no nota la
 *                       orientacion — por eso cerraba cuando la nervada no, y
 *                       ese contraste fue el que destapo el error.
 *
 * Ojo con QUE maximo se compara: la referencia lee TODA la malla de analisis
 * (`PointElm`), no solo los nudos dibujados. Con los nudos dibujados la nervada
 * parecia estar al 3.5 % y en realidad esta al 0.6 %.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { resolverHeks } from "../lib/heks.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const DATOS = join(AQUI, "..", "datos");
const GALPON = join(AQUI, "..", "..", "..", "galpon-bodega-electoral");

export const nombre = "losas-tipos";
export const descripcion =
  "Matriz de tipos de losa (deck / maciza mem-thin-thick / nervada / waffle) vs ETABS 22";

// Limite por tipo, en %. Todos por debajo del 5 % que pidio Jorge; se aprieta
// donde ya se sabe que cierra mejor, para que una regresion salte antes.
const TIPOS = [
  { id: "deck",         lim: 1.5 },
  { id: "maciza_mem",   lim: 1.5 },
  { id: "maciza_thin",  lim: 2.0 },
  { id: "maciza_thick", lim: 2.0 },
  { id: "nervada_1d",   lim: 2.0 },
  { id: "waffle_2d",    lim: 5.0 },
];

/** Genera el .heks de esa variante con a_heks.py y lo resuelve. */
async function correrStruct(tipo) {
  const heks = join(DATOS, `losas_${tipo}.heks`);
  execFileSync("python", ["a_heks.py", "parte_mezanine.json", heks,
                          "--losa", tipo],
               { cwd: GALPON, stdio: "pipe" });
  const r = await resolverHeks(heks);
  const def = r.deformOutputs?.deformations;
  if (!def || (def.size ?? 0) === 0) throw new Error(`${tipo}: sin deformaciones`);
  let uzMin = 0, sumRz = 0;
  def.forEach((d) => { if (d[2] < uzMin) uzMin = d[2]; });
  for (const [, v] of r.deformOutputs.reactions ?? []) sumRz += v[2] || 0;
  return { uzMin, sumRz };
}

export async function correr() {
  const filas = [];
  for (const { id, lim } of TIPOS) {
    const ref = join(DATOS, `losas_ref_${id}.json`);
    if (!existsSync(ref)) {
      filas.push({ que: `${id}: falta la referencia`, crudo: true,
                   medido: "no existe", limite: "existe", ok: false,
                   detalle: `correr tests/datos/gen_losas_ref.py ${id}` });
      continue;
    }
    const R = JSON.parse(readFileSync(ref, "utf-8"));

    // El .LOG de ETABS es el UNICO sitio donde avisa de inestabilidad:
    // RunAnalysis devuelve 0 y los casos salen OK* igual. Si la referencia
    // salio de un modelo inestable, NO sirve de arbitro.
    if (R.log?.inestable) {
      filas.push({ que: `${id}: referencia INESTABLE`, crudo: true,
                   medido: `${R.log.autovalores_negativos} autovalores < 0`,
                   limite: "0", ok: false,
                   detalle: "rehacer el .EDB antes de comparar" });
      continue;
    }

    const uzRef = Math.min(...R.desplazamientos.map((d) => d.uz));
    const { uzMin, sumRz } = await correrStruct(id);

    const dif = Math.abs((uzMin - uzRef) / uzRef) * 100;
    filas.push({
      que: `${id} — flecha maxima`,
      medido: dif, limite: lim, ok: dif <= lim,
      detalle: `${(uzMin * 1000).toFixed(3)} mm vs ${(uzRef * 1000).toFixed(3)} de ETABS`,
    });

    // La carga TIENE que ser la misma: si no, la flecha no compara solvers,
    // compara cuanta carga se perdio por el camino.
    const dRz = Math.abs((sumRz - R.base.FZ) / R.base.FZ) * 100;
    filas.push({
      que: `${id} — carga total`,
      medido: dRz, limite: 0.5, ok: dRz <= 0.5,
      detalle: `ΣRz ${sumRz.toFixed(2)} vs ${R.base.FZ.toFixed(2)} kN`,
    });
  }

  // La fisica del conjunto: cada tipo mas rigido que el anterior. Es lo que
  // caza un cruce de modificadores aunque cada uno pase su limite por separado.
  const uz = {};
  for (const { id } of TIPOS) {
    const ref = join(DATOS, `losas_ref_${id}.json`);
    if (existsSync(ref)) {
      const R = JSON.parse(readFileSync(ref, "utf-8"));
      uz[id] = Math.abs(Math.min(...R.desplazamientos.map((d) => d.uz)));
    }
  }
  const orden = ["deck", "maciza_thin", "nervada_1d", "waffle_2d"];
  const creciente = orden.every((k, i) =>
    i === 0 || !(uz[k] && uz[orden[i - 1]]) || uz[k] < uz[orden[i - 1]]);
  filas.push({
    que: "orden de rigidez: membrana > maciza > nervada > waffle",
    crudo: true, medido: creciente ? "se cumple" : "ROTO",
    limite: "se cumple", ok: creciente,
    detalle: orden.map((k) => `${k} ${(uz[k] * 1000).toFixed(1)}mm`).join(" > "),
  });
  return filas;
}
