/**
 * LA CUBIERTA CON SU CARGA: .le entrega el zinc su carga a las CORREAS?
 *
 * El hermano del caso `membrana-live`, y por el mismo motivo de Jorge: con la
 * carga muerta no se ve el aporte de la lamina —el programa ya pone fuerzas en
 * las correas por su cuenta— y con una carga externa si. Aqui la carga externa
 * es `Lroof` (0.70 kN/m2 sobre la cubierta), que es la que este modelo tiene.
 *
 * El zinc es una MEMBRANA PURA: 0.8 mm de espesor equivalente y `M = 0` en los
 * modificadores, asi que no aporta flexion — solo reparte. Si el reparto se
 * rompe, las correas dejan de recibir y no lo dice nadie.
 *
 * ⚠️ OJO A QUE CAMPO SE MIRA. En el entrepiso el reparto se ve en V2/M3; aqui
 * NO, porque el eje local de una correa inclinada es otro: la flexion de la
 * correa cae en **V3 y M2**, y son esos los que miden el reparto. Los demas
 * campos tienen picos minusculos (V2 4.13, M3 5.21, T 0.48 kN·m) y su % engana:
 * un error absoluto insignificante sale como un tanto por ciento grande.
 *
 * Referencia: `datos/cubierta_lroof_etabs.json`, del caso `Lroof` de
 * `parte_galpon_vacio.EDB`, con `fuerzas_etabs.py <EDB> Lroof <json>`.
 *
 * ⏳ El AXIL (P, 9.67 %) es el que queda abierto: es el de las cerchas y las
 * diagonales, y depende de como trabaja la membrana de ala — el mismo campo que
 * mas se movio en `mezanine-fuerzas` al cambiar el drilling. No es el reparto:
 * el reparto son V3 y M2, que cierran al 0.14 % y al 0.61 %.
 */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFileSync } from "node:fs";
import { resolverHeks, fuerzasDeBarra } from "../lib/heks.mjs";
import { compararFuerzas, CAMPOS } from "../lib/comparar.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const DATOS = join(AQUI, "..", "datos");

// [err medio, err max] admitidos, en % del pico de ETABS. Lo MEDIDO el
// 29-ago-2026 con margen. V3 y M2 apretados: son los que miden el reparto.
const LIMITES = {
  P:  [11.00, 200.00],
  V2: [ 6.00, 100.00],
  V3: [ 0.40,   5.00],
  T:  [ 2.50,  60.00],
  M2: [ 1.00,  30.00],
  M3: [ 3.50,  75.00],
};

export const nombre = "cubierta-lroof";
export const descripcion =
  "el zinc con la carga de cubierta: 395 barras contra ETABS (el reparto a las correas)";

export async function correr() {
  const modelo = await resolverHeks(join(DATOS, "cubierta_lroof.heks"));
  const struct = fuerzasDeBarra(modelo);
  const etabs = JSON.parse(readFileSync(join(DATOS, "cubierta_lroof_etabs.json"), "utf-8"));
  const r = compararFuerzas(struct, etabs);

  const filas = [{
    que: "barras emparejadas",
    medido: r.emparejadas, limite: 395, ok: r.emparejadas === 395,
    detalle: `${r.emparejadas} de ${r.nStruct} (Hekatan) y ${r.nEtabs} (ETABS)`,
    crudo: true,
  }];
  for (const campo of CAMPOS) {
    const c = r.campos[campo];
    const [limMedio, limMax] = LIMITES[campo];
    const mide = campo === "V3" || campo === "M2" ? " (mide el REPARTO)" : "";
    filas.push({
      que: `${campo} err medio${mide}`, medido: c.medio, limite: limMedio,
      ok: c.medio <= limMedio, detalle: `pico ETABS ${c.pico.toFixed(3)}`,
    });
    filas.push({
      que: `${campo} err maximo`, medido: c.max, limite: limMax,
      ok: c.max <= limMax, detalle: `pico ETABS ${c.pico.toFixed(3)}`,
    });
  }
  return filas;
}
