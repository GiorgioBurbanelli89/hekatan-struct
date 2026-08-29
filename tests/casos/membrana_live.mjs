/**
 * LA MEMBRANA CON CARGA VIVA: .le entrega su carga a las vigas secundarias?
 *
 * El metodo es de Jorge (29-ago-2026), y la clave es CON QUE CARGA se mide:
 *
 *   «para medir el comportamiento de una membrana en ETABS hay que usar los
 *   ejes locales y SOLO la carga viva. En la muerta no se puede: el programa ya
 *   coloca fuerzas en las vigas secundarias por su cuenta y no se ve el aporte
 *   de la losa. En cambio con una carga LIVE externa sobre toda la membrana se
 *   ve si aporta o no a las secundarias.»
 *
 * Y hay una segunda razon para separarla, que salio al montar esto: los dos
 * programas ni siquiera aplican la carga por el mismo sitio. En ETABS va sobre
 * el AREA (`AreaObj.GetLoadUniform` da Live en los 3 panos y
 * `FrameObj.GetLoadDistributed` no da NADA) y la reparte el mallado; en Hekatan
 * el deck no entra a la matriz y entrega su carga como `frameload` a las vigas
 * que lo sostienen. Comparar las ASIGNACIONES no vale: hay que comparar el
 * RESULTADO, barra a barra.
 *
 * El reparto de Hekatan no pierde nada por el camino: la membrana entrega
 * 1960.37 kN, que son 6.00 kN/m2 x 326.728 m2 EXACTOS, y el 86 % va a las
 * viguetas (VA-200), que es lo que tiene que pasar en un deck de un sentido.
 *
 * Referencia: `datos/membrana_live_etabs.json`, del caso `Live` de
 * `parte_mezanine_deck.EDB`, sacada con
 * `galpon-bodega-electoral/fuerzas_etabs.py <EDB> Live <json>`.
 *
 * Lo que mide cada campo:
 *   V2 y M3   el REPARTO — lo que la losa le entrega a cada viga. Es lo que
 *             este caso vigila, y cierra al 0.22 % y al 0.24 %.
 *   P         el axil, que depende de como trabaja la membrana de ala (ver
 *             `mezanine-fuerzas`: es el campo que movio el ITW 1990).
 *   T         torsion, con un pico de 2.12 kN·m: el % engana porque el
 *             denominador es minusculo.
 */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFileSync } from "node:fs";
import { resolverHeks, fuerzasDeBarra } from "../lib/heks.mjs";
import { compararFuerzas, CAMPOS } from "../lib/comparar.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const DATOS = join(AQUI, "..", "datos");

// [err medio, err max] admitidos, en % del pico de ETABS. Lo MEDIDO el
// 29-ago-2026, con margen: 0.221/3.790 (V2) y 0.240/3.034 (M3).
const LIMITES = {
  P:  [3.00, 14.00],
  V2: [0.50,  5.00],
  V3: [3.00, 14.00],
  T:  [2.00, 45.00],
  M2: [1.20,  9.00],
  M3: [0.50,  4.00],
};

export const nombre = "membrana-live";
export const descripcion =
  "el deck con carga VIVA: 247 barras x 6 campos contra ETABS (el reparto a las secundarias)";

export async function correr() {
  const modelo = await resolverHeks(join(DATOS, "membrana_live.heks"));
  const struct = fuerzasDeBarra(modelo);
  const etabs = JSON.parse(readFileSync(join(DATOS, "membrana_live_etabs.json"), "utf-8"));
  const r = compararFuerzas(struct, etabs);

  const filas = [{
    que: "barras emparejadas",
    medido: r.emparejadas, limite: 247, ok: r.emparejadas === 247,
    detalle: `${r.emparejadas} de ${r.nStruct} (Hekatan) y ${r.nEtabs} (ETABS)`,
    crudo: true,
  }];
  for (const campo of CAMPOS) {
    const c = r.campos[campo];
    const [limMedio, limMax] = LIMITES[campo];
    filas.push({
      que: `${campo} err medio`, medido: c.medio, limite: limMedio,
      ok: c.medio <= limMedio, detalle: `pico ETABS ${c.pico.toFixed(3)}`,
    });
    filas.push({
      que: `${campo} err maximo`, medido: c.max, limite: limMax,
      ok: c.max <= limMax,
      detalle: c.peor
        ? `la peor: ${(c.peor.sec ?? c.peor.seccion ?? "barra")} en ` +
          `(${(c.peor.i ?? []).map?.((v) => (+v).toFixed(2)).join(", ") ?? "?"})`
        : "",
    });
  }
  return filas;
}
