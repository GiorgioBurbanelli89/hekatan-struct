/**
 * Las UNIDADES del .s2k: el fichero tiene que decir lo que de verdad escribe.
 *
 * `units.force` solo ponia la etiqueta `CurrUnits` del bloque PROGRAM CONTROL.
 * No convertia NADA: ni las cargas, ni el modulo, ni las densidades — todos los
 * valores salen del modelo, que trabaja en **kN y m**. Con `units: {force:
 * "Tonf"}` (lo que pasa `exportar_csi.mjs`) el fichero se contradecia a si
 * mismo, y SAP2000 hacia lo correcto con el: leerlo como toneladas.
 *
 * Medido el 2026-08-27 con las 8 plantillas (`cli/plantillas_sap2000.py`):
 * modelo de 6480 kN, `.s2k` con `SumF3 = -6480` bajo `CurrUnits="Tonf, m, C"`,
 * y SAP2000 devolvia **6480 x 9.80665 = 63547.09 kN** de reaccion.
 *
 * ⚠️ Y las FLECHAS salian BIEN, que es lo que lo hacia invisible: `E1` viaja
 * con el mismo desajuste, en `u = F/K` el factor se cancela y los
 * desplazamientos cerraban a 4 decimales con Hekatan. Solo se iban las FUERZAS.
 *
 * Con la etiqueta arreglada, SAP2000 cierra al **0.000 %** en las 8 plantillas,
 * en reaccion Y en flecha.
 */
import { empaquetar, R } from "../lib/bundle.mjs";

export const nombre = "s2k-unidades";
export const descripcion =
  "el .s2k declara las unidades en las que de verdad escribe (kN, m)";

const cargar = () =>
  empaquetar(`export { exportS2k } from "${R}/examples/src/shared/s2kExporter";\n`, "s2kUnits");

/** Portico minimo con una carga vertical conocida. */
function modelo() {
  const nodes = [[0, 0, 0], [0, 0, 3], [5, 0, 3], [5, 0, 0]];
  const elements = [[0, 1], [1, 2], [2, 3]];
  const m = (v) => new Map(elements.map((_, i) => [i, v]));
  return {
    nodes, elements,
    nodeInputs: {
      supports: new Map([[0, [true, true, true, true, true, true]],
                         [3, [true, true, true, true, true, true]]]),
      loads: new Map([[1, [0, 0, -25, 0, 0, 0]], [2, [0, 0, -25, 0, 0, 0]]]),
    },
    elementInputs: {
      elasticities: m(2e7), areas: m(0.09), momentsOfInertiaY: m(6.75e-4),
      momentsOfInertiaZ: m(6.75e-4), torsionalConstants: m(1.1e-3),
      shearModuli: m(8.3e6), densities: m(2.4),
    },
  };
}

const currUnits = (s2k) => (s2k.match(/CurrUnits="([^"]+)"/) ?? [])[1] ?? "sin CurrUnits";
const sumaF3 = (s2k) =>
  (s2k.match(/F3=(-?[\d.eE+]+)/g) ?? [])
    .reduce((a, t) => a + Number(t.slice(3)), 0);

export async function correr() {
  const { exportS2k } = await cargar();
  const filas = [];

  // Se pida lo que se pida, el fichero dice kN·m: es lo que escribe.
  for (const [etiqueta, u] of [["sin units", undefined],
                               ["units Tonf", { force: "Tonf", length: "m" }],
                               ["units KN", { force: "KN", length: "m" }]]) {
    const s2k = exportS2k({ ...modelo(), title: "u", units: u });
    const cu = currUnits(s2k);
    filas.push({
      que: `${etiqueta}: CurrUnits dice lo que se escribe`, crudo: true,
      medido: cu, limite: "KN, m, C", ok: cu === "KN, m, C",
      detalle: "el exportador NO convierte: el modelo va en kN y m",
    });
  }

  // Y el VALOR escrito es el del modelo, sin escalar. Es la otra mitad: una
  // etiqueta correcta con el numero convertido tambien seria coherente, pero
  // entonces habria que convertir TODAS las magnitudes (E, densidad, momento).
  const s2k = exportS2k({ ...modelo(), title: "carga", units: { force: "Tonf", length: "m" } });
  const fz = sumaF3(s2k);
  filas.push({
    que: "la carga se escribe en kN, sin escalar", crudo: true,
    medido: fz.toFixed(3), limite: "-50.000", ok: Math.abs(fz + 50) < 1e-6,
    detalle: "2 nudos x -25 kN. Si saliera -5.098 estaria convertido a tonf",
  });

  // El modulo tiene que ir en la MISMA unidad que la carga, o SAP lee dos
  // escalas distintas y las flechas dejan de cerrar.
  const e1 = Number((s2k.match(/E1=([\d.eE+-]+)/) ?? [])[1]);
  filas.push({
    que: "el modulo va en la misma unidad que la carga (kN/m2)", crudo: true,
    medido: String(e1), limite: "20000000", ok: Math.abs(e1 - 2e7) / 2e7 < 1e-9,
    detalle: "si carga y modulo no comparten unidad, u = F/K sale mal",
  });
  return filas;
}
