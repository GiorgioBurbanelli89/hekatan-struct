/**
 * Mezanine del galpon — fuerzas INTERNAS de 133 barras contra ETABS 22.
 *
 * `datos/mezanine_em_grav.heks` no es un modelo cualquiera: lleva la malla de
 * ANALISIS extraida del propio ETABS (18 areas, no las 90 celdas fijas que
 * traia Struct) y la carga de gravedad. Sin esas dos cosas los errores se van
 * al 10 % y parece una regresion del solver sin serlo.
 *
 * La referencia `datos/mezanine_fuerzas_etabs.json` sale de
 * galpon-bodega-electoral/fuerzas_etabs.py, con los brazos rigidos anulados
 * (`FrameObj.SetEndLengthOffset(nm, False, 0,0,0)`): con los automaticos ETABS
 * reporta en otra estacion y ademas no pesa el tramo del brazo.
 *
 * Los limites de abajo son lo MEDIDO el 2026-08-08 con un margen del ~20 %. Lo
 * que queda en V2 (1.7 %) es reparto de la accion de membrana del deck, no
 * solver: los momentos, que dependen de la rigidez y no del reparto, cierran al
 * 0.01-0.16 %.
 */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFileSync } from "node:fs";
import { resolverHeks, fuerzasDeBarra } from "../lib/heks.mjs";
import { compararFuerzas, CAMPOS } from "../lib/comparar.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const DATOS = join(AQUI, "..", "datos");

// campo: [err medio maximo admitido, err max admitido]   (% del pico de ETABS)
const LIMITES = {
  P:  [0.40, 1.40],
  V2: [2.10, 3.10],
  V3: [0.05, 0.55],
  T:  [0.55, 3.20],
  M2: [0.05, 0.55],
  M3: [0.20, 0.60],
};

export const nombre = "mezanine-fuerzas";
export const descripcion = "Mezanine, 133 barras x 6 campos contra ETABS 22 (malla de ETABS, gravedad)";

export async function correr() {
  const modelo = await resolverHeks(join(DATOS, "mezanine_em_grav.heks"));
  const struct = fuerzasDeBarra(modelo);
  const etabs = JSON.parse(readFileSync(join(DATOS, "mezanine_fuerzas_etabs.json"), "utf-8"));
  const r = compararFuerzas(struct, etabs);

  const filas = [{
    que: "barras emparejadas",
    medido: r.emparejadas, limite: 133, ok: r.emparejadas === 133,
    detalle: `${r.emparejadas} de ${r.nStruct} (Struct) y ${r.nEtabs} (ETABS)`,
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
      que: `${campo} err max`, medido: c.max, limite: limMax,
      ok: c.max <= limMax,
      detalle: c.peor ? `peor: struct ${c.peor.struct.toFixed(4)} vs etabs ${c.peor.etabs.toFixed(4)}` : "",
    });
  }
  return filas;
}
