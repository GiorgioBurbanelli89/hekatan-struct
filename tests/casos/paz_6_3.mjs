/**
 * Paz & Leigh 6.3 Space Frame — modal contra ETABS 22.
 *
 * Referencia: ETABS 22 con los brazos rigidos automaticos ANULADOS, que es el
 * modelo que Hekatan resuelve (cli/paz_masa_etabs.py). Tal cual, ETABS da
 * 9.0903 ... 164.5541, un +2.88 % uniforme, y no es el solver: ETABS no pesa el
 * tramo de barra que cae dentro del brazo rigido.
 *
 * El camino de SUBESPACIO sale identico a ETABS en los cuatro decimales de los
 * seis modos; el denso, al 0.06 %.
 */
import { modal } from "../lib/wasm.mjs";

const E = 29500, nu = 0.3, G = E / (2 * (1 + nu));
const H = 180, BX = 114, BY = 240;
const RHO = 490 / 1000 / 12 ** 3 / 386.4;

const nodes = [[0, 0, 0], [0, 0, H], [0, BY, 0], [0, BY, H],
               [BX, 0, 0], [BX, 0, H], [BX, BY, 0], [BX, BY, H]];
const elements = [[0, 1], [2, 3], [4, 5], [6, 7], [1, 5], [3, 7], [1, 3], [5, 7]];
const empotrado = [1, 1, 1, 1, 1, 1].map(Boolean);
const nodeInputs = { supports: new Map([[0, empotrado], [2, empotrado], [4, empotrado], [6, empotrado]]) };
const porTipo = (col, gir) => new Map(elements.map((_, i) => [i, i < 4 ? col : gir]));
const elementInputs = {
  elasticities: porTipo(E, E), shearModuli: porTipo(G, G),
  areas: porTipo(43.0, 24.7),
  momentsOfInertiaY: porTipo(391, 225),      // I22
  momentsOfInertiaZ: porTipo(5630, 928),     // I33, el eje fuerte
  torsionalConstants: porTipo(34.8, 5.90),
  densities: new Map(elements.map((_, i) => [i, RHO])),
};

const ETABS = [8.8305, 14.5459, 24.2336, 25.1132, 159.6525, 159.8513];
const TOL = 0.1;   // %

export const nombre = "paz-6-3-modal";
export const descripcion = "Paz & Leigh 6.3 — 6 modos contra ETABS 22 (offsets = 0), kip-in";

export async function correr() {
  const filas = [];
  for (const [camino, lateral] of [["denso", 0], ["subespacio", 1]]) {
    const f = await modal(nodes, elements, nodeInputs, elementInputs, 6, lateral);
    for (let k = 0; k < ETABS.length; k++) {
      const dif = 100 * ((f[k] ?? NaN) - ETABS[k]) / ETABS[k];
      filas.push({
        que: `${camino} modo ${k + 1}`,
        medido: dif, limite: TOL, ok: Math.abs(dif) <= TOL,
        detalle: `${(f[k] ?? NaN).toFixed(4)} Hz vs ${ETABS[k].toFixed(4)}`,
      });
    }
  }
  return filas;
}
