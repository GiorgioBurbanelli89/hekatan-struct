/**
 * El banco SANO de Thick contra Thin: placa simplemente apoyada, carga uniforme.
 *
 * ⚠️ POR QUÉ EXISTE, y sustituye a un banco que estaba mal.
 *
 * Desde agosto se juzgaba el Shell-Thick con una **celda de un elemento**: nudos
 * 0 y 1 empotrados, 2 y 3 con `w` sujeto y los giros libres, y se medía la
 * flexibilidad al girar. La idea era buena —con `w` sujeto, girar es cortante
 * puro— pero el montaje **no es válido para Kirchhoff**: ahí `θ = −∂w/∂x` no es
 * un grado de libertad independiente, así que sujetar `w` y soltar `θ` significa
 * cosas distintas en cada teoría. No se comparaban dos elementos: se comparaban
 * dos problemas.
 *
 * Y lo cantaba el propio resultado, sin necesidad de saber nada más:
 *
 *     ETABS 22 · Thin   RX = 6.2702e-05
 *     ETABS 22 · Thick  RX = 2.1267e-05     Thick/Thin = 0.34
 *
 * **Imposible.** Una placa de Mindlin sale siempre igual o más flexible que una
 * de Kirchhoff, porque el cortante solo puede ablandar: la razón tiene que ser
 * ≥ 1. Y salía 0.34 **en ETABS**, no en nosotros — o sea que el banco estaba mal
 * para todos. De ahí salieron conclusiones que hubo que retirar.
 *
 * ## Este banco
 *
 * Placa cuadrada **simplemente apoyada** con **carga uniforme**, y se mide la
 * flecha del centro. Es el canónico por tres razones:
 *
 * 1. las dos teorías miden **lo mismo** — una flecha, no un giro con `w` atado;
 * 2. hay **solución analítica** (Navier, `w = 0.00406 q L⁴/D`), así que no hace
 *    falta otro programa para saber si el Thin está bien;
 * 3. tiene un **límite conocido**: cuando `t/L → 0` el cortante deja de contar y
 *    Mindlin tiene que converger a Kirchhoff.
 *
 * ## Lo que sale (malla 8×8, medido 19-ago-2026)
 *
 * | t/L | Thin | Thick | Navier | Thick/Thin |
 * |---|---|---|---|---|
 * | 0.001 | 2.1253e+2 | 2.1216e+2 | 2.1260e+2 | 0.9983 |
 * | 0.010 | 2.1253e-1 | 2.1244e-1 | 2.1260e-1 | 0.9996 |
 * | 0.050 | 1.7002e-3 | 1.7495e-3 | 1.7008e-3 | 1.0290 |
 * | 0.100 | 2.1253e-4 | 2.3514e-4 | 2.1260e-4 | 1.1064 |
 * | 0.200 | 2.6566e-5 | 3.5512e-5 | 2.6575e-5 | 1.3368 |
 *
 * Las tres cosas que había que ver:
 * - **el Thin clava a Navier** en los cinco espesores (≤ 0.04 %);
 * - **Thick ≥ Thin**, y la razón **crece con el espesor** — el cortante ablanda
 *   más cuanto más gruesa es la placa, que es justo lo que tiene que pasar;
 * - **Thick → Thin** al adelgazar (1.3368 → 0.9983).
 *
 * El 0.17 % que baja de 1 en `t/L = 0.001` es bloqueo residual del MITC4 en una
 * placa mil veces más ancha que gruesa. Por eso el límite es 0.5 % y no 0.
 *
 * **Conclusión: nuestro Shell-Thick se comporta como debe.** El 2.627 % del
 * escalón B contra ETABS no sale de la formulación de la placa — hay que
 * buscarlo en otro sitio.
 */
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { empaquetar, R } from "../lib/bundle.mjs";

const L = 10, E = 2.2e7, NU = 0.2, Q = 10, N = 8;
// t/L y el limite de Thick/Thin en cada uno
const CASOS = [
  { tL: 0.001, min: 0.995, max: 1.005 },
  { tL: 0.010, min: 0.995, max: 1.010 },
  { tL: 0.050, min: 1.000, max: 1.060 },
  { tL: 0.100, min: 1.050, max: 1.160 },
  { tL: 0.200, min: 1.250, max: 1.420 },
];

export const nombre = "placa-thick-thin-sano";
export const descripcion =
  "Thick >= Thin y ambos contra Navier: el banco que la celda de un elemento no era";

export async function correr() {
  const { deform } = await empaquetar(
    `export { deform } from "${R}/hekatan-fem/src/index";\n`, "thickthin");

  function flecha(t, pf) {
    const nodes = [], idx = new Map();
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
      idx.set(`${i},${j}`, nodes.length); nodes.push([i * L / N, j * L / N, 0]);
    }
    const elements = [];
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++)
      elements.push([idx.get(`${i},${j}`), idx.get(`${i + 1},${j}`),
                     idx.get(`${i + 1},${j + 1}`), idx.get(`${i},${j + 1}`)]);
    const supports = new Map(), loads = new Map();
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
      const borde = i === 0 || j === 0 || i === N || j === N;
      // simplemente apoyada: solo `w` atado en el borde. Las traslaciones en el
      // plano y el drilling se sujetan en TODOS los nudos porque esto es una
      // placa: si se dejan libres, la membrana queda sin sujetar y el sistema
      // es singular — y el fallo aparecería como un NaN, no como un aviso.
      supports.set(idx.get(`${i},${j}`), [true, true, borde, false, false, true]);
    }
    const A = (L / N) * (L / N);
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++)
      for (const [a, b] of [[i, j], [i + 1, j], [i + 1, j + 1], [i, j + 1]]) {
        const nd = idx.get(`${a},${b}`);
        const f = loads.get(nd) || [0, 0, 0, 0, 0, 0];
        f[2] -= Q * A / 4;              // carga uniforme repartida a los 4 nudos
        loads.set(nd, f);
      }
    const m = (v) => { const M = new Map(); elements.forEach((_, k) => M.set(k, v)); return M; };
    const d = deform(nodes, elements, { supports, loads },
      { thicknesses: m(t), elasticities: m(E), poissonsRatios: m(NU),
        densities: m(0), plateFormulations: m(pf) });
    return Math.abs(d.deformations?.get(idx.get(`${N / 2},${N / 2}`))?.[2] ?? NaN);
  }

  const filas = [];
  for (const { tL, min, max } of CASOS) {
    const t = tL * L;
    const D = E * t ** 3 / (12 * (1 - NU ** 2));
    const navier = 0.00406 * Q * L ** 4 / D;
    const wThin = flecha(t, 1), wThick = flecha(t, 0);
    const razon = wThick / wThin;

    filas.push({
      que: `t/L = ${tL} · Thin contra Navier`,
      medido: Math.abs(wThin / navier - 1) * 100, limite: 0.5,
      ok: Math.abs(wThin / navier - 1) * 100 <= 0.5,
      detalle: `${wThin.toExponential(4)} vs ${navier.toExponential(4)}`,
    });
    filas.push({
      // El limite de ARRIBA importa tanto como el de abajo: si Thick se dispara
      // es que el cortante ablanda de mas, y eso tambien es un error.
      que: `t/L = ${tL} · Thick/Thin en [${min}, ${max}]`,
      medido: razon, limite: max, ok: razon >= min && razon <= max,
      detalle: `${razon.toFixed(4)} — el cortante solo puede ABLANDAR, `
             + `asi que por debajo de 1 no hay nada que discutir`,
      crudo: true,
    });
  }
  return filas;
}
