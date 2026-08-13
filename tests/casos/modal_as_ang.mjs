/**
 * El modal TIENE que hacer caso al angulo de eje local y a las areas de cortante.
 *
 * Este caso existe porque durante meses NO les hacia caso: `deformCpp.ts` se las
 * pasaba al C++ y `modalCpp.ts` no, asi que el estatico y el modal armaban una K
 * distinta del mismo modelo. El estatico del galpon cerraba al 0.9 % nodo a nodo
 * mientras el modal se iba al +35 % en el modo 3, y no habia forma de verlo
 * porque los dos numeros venian del "mismo" modelo.
 *
 * El arbitro es la viga en voladizo, que tiene solucion cerrada:
 *
 *     f1 = (1.875104^2 / 2pi) * sqrt(E*I / (rho*A*L^4))
 *
 * Se pone una viga a lo largo de X con TODOS los nudos impedidos en Y, asi que
 * solo puede flectar en vertical. Con la convencion CSI, el eje 2 de una barra
 * horizontal apunta hacia arriba, o sea que la flexion vertical usa I33; girando
 * la seccion 90 grados el par de ejes 2-3 rota y esa misma flexion pasa a usar
 * I22. La frecuencia tiene que cambiar en sqrt(I22/I33) — con la seccion de aqui,
 * a la MITAD. Si el motor ignora el angulo, no cambia nada, y eso es el fallo.
 *
 * Y para las areas de cortante: bajarlas ablanda la barra y BAJA la frecuencia.
 * Aqui no se comprueba un valor de Timoshenko, se comprueba que el dato LLEGUE:
 * el sintoma del fallo era que ponerlas no movia la frecuencia ni un decimal.
 */
import { modal } from "../lib/wasm.mjs";

const L = 6.0;            // m, voladizo
const N = 12;             // tramos
const E = 2.0e8;          // kPa
const NU = 0.3;
const G = E / (2 * (1 + NU));
const RHO = 7.85;         // t/m3
// Seccion con los dos ejes MUY distintos, para que el giro se note:
const A = 0.01;           // m2
const I33 = 8.0e-5;       // m4, eje fuerte (flexion vertical con ang = 0)
const I22 = 5.0e-6;       // m4, eje debil  (flexion vertical con ang = 90)
const J = 1.0e-6;

const nodes = [];
for (let i = 0; i <= N; i++) nodes.push([i * L / N, 0, 0]);
const elements = [];
for (let i = 0; i < N; i++) elements.push([i, i + 1]);

// Empotrado en el arranque; el resto SOLO puede moverse en Z y girar en Y,
// para que el unico modo posible sea la flexion vertical.
const supports = new Map();
supports.set(0, [true, true, true, true, true, true]);
for (let i = 1; i <= N; i++) supports.set(i, [true, true, false, true, false, true]);
const nodeInputs = { supports };

const cada = (v) => new Map(elements.map((_, i) => [i, v]));
const base = {
  elasticities: cada(E), shearModuli: cada(G), areas: cada(A),
  momentsOfInertiaZ: cada(I33), momentsOfInertiaY: cada(I22),
  torsionalConstants: cada(J), densities: cada(RHO),
};

/** Viga en voladizo: primer modo de flexion, con la inercia que toque. */
function analitica(I) {
  return (1.875104 ** 2 / (2 * Math.PI)) * Math.sqrt(E * I / (RHO * A * L ** 4));
}

export const nombre = "modal-as-ang";
export const descripcion =
  "El modal hace caso al angulo de eje local y a las areas de cortante (voladizo vs formula)";

export async function correr() {
  const filas = [];
  const primera = (f) => (f ?? []).find(v => v > 1e-6) ?? NaN;

  // 1) sin girar: la flexion vertical usa I33
  const f0 = primera(await modal(nodes, elements, nodeInputs, base, 4, 0));
  const t0 = analitica(I33);
  filas.push({
    que: "ang = 0 vs formula (I33)",
    medido: 100 * (f0 - t0) / t0, limite: 2.0,
    ok: Math.abs(100 * (f0 - t0) / t0) <= 2.0,
    detalle: `${f0.toFixed(4)} Hz vs ${t0.toFixed(4)}`,
  });

  // 2) girada 90 grados: la misma flexion pasa a usar I22
  const conAng = { ...base, localAngles: cada(90) };
  const f90 = primera(await modal(nodes, elements, nodeInputs, conAng, 4, 0));
  const t90 = analitica(I22);
  filas.push({
    que: "ang = 90 vs formula (I22)",
    medido: 100 * (f90 - t90) / t90, limite: 2.0,
    ok: Math.abs(100 * (f90 - t90) / t90) <= 2.0,
    detalle: `${f90.toFixed(4)} Hz vs ${t90.toFixed(4)}`,
  });

  // 3) la razon entre las dos tiene que ser sqrt(I22/I33) — esta es la que
  //    caza el fallo: si el modal ignora `ang`, sale 1.000 y no 0.250
  const razon = f90 / f0;
  const esperada = Math.sqrt(I22 / I33);
  filas.push({
    que: "razon f(90)/f(0) = sqrt(I22/I33)",
    medido: 100 * (razon - esperada) / esperada, limite: 2.0,
    ok: Math.abs(100 * (razon - esperada) / esperada) <= 2.0,
    detalle: `${razon.toFixed(4)} vs ${esperada.toFixed(4)} (si ignora ang sale 1.0)`,
  });

  // 4) las areas de cortante tienen que LLEGAR: con un alma pequena la barra se
  //    ablanda y la frecuencia baja. El fallo era que no se movia.
  const conAs = { ...base, shearAreasZ: cada(A / 50), shearAreasY: cada(A / 50) };
  const fAs = primera(await modal(nodes, elements, nodeInputs, conAs, 4, 0));
  const caida = 100 * (fAs - f0) / f0;
  filas.push({
    que: "as pequena baja la frecuencia",
    medido: caida, limite: -1.0,
    ok: caida <= -1.0,
    detalle: `${fAs.toFixed(4)} Hz vs ${f0.toFixed(4)} sin as (si las ignora, 0 %)`,
  });

  return filas;
}
