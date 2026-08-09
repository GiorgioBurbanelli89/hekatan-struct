/**
 * SAFE Verification Example 4 — placa sobre vigas elasticas.
 *
 * Ref: SAFE 20 \ Manuals \ Verification \ Analysis \ Example 04.pdf
 *      (Timoshenko-Woinowsky 1959 + ACI 318-95 DDM)
 *
 * Misma placa del Ej.1 (360" x 240" x 8", E = 3000 ksi, q = 100 psf), pero los
 * bordes Y = 0 y Y = b se apoyan en VIGAS elasticas con flexion vertical y sin
 * torsion, con rigidez relativa lambda = E*Ib/(a*D) = 4.
 *
 * Es el unico caso de la suite donde shells y barras trabajan JUNTOS, asi que
 * es el que vigila el acople: si la inercia de la viga entrara por el casillero
 * equivocado (I22 en vez de I33, [[ejes CSI]]), la placa se apoyaria en una viga
 * con otra rigidez y estos tres numeros se moverian.
 *
 * Se corre el ExampleDef entero, no el solver a pelo, para que el test cubra
 * tambien como el ejemplo arma el modelo.
 */
import { empaquetar, R } from "../lib/bundle.mjs";

const IN = 0.0254;

// Tabla 4-1 del PDF, en X = 180" (centro en X). Flechas en pulgadas.
const PUNTOS = [
  { id: "P1 centro",   x: 180 * IN, y: 120 * IN, teorico: 0.18572, safe8: 0.1848 },
  { id: "P2 cuadrante", x: 180 * IN, y: 60 * IN, teorico: 0.15349, safe8: 0.1523 },
  { id: "P3 sobre viga", x: 180 * IN, y: 0,      teorico: 0.07365, safe8: 0.0722 },
];

const TOL_TEORICO = 4.0;   // %  — el propio SAFE 8x8 se va a -2.0 % en P3
const TOL_SAFE    = 3.0;   // %  — contra SAFE, misma malla 8x8

export const nombre = "safe-ex04-placa-vigas";
export const descripcion = "SAFE Ej.4 — placa sobre vigas elasticas (lambda=4), flecha vs teorico y vs SAFE 8x8";

export async function correr() {
  const { benchmarkSafeEx04PlateBeams: ej } = await empaquetar(
    `export { benchmarkSafeEx04PlateBeams } from "${R}/examples/src/benchmark-safe-ex04-plate-beams/benchmarkSafeEx04PlateBeams";\n`,
    "safeEx04");

  const p = Object.fromEntries(Object.entries(ej.params).map(([k, v]) => [k, v.default]));
  const st = (v) => ({ val: v });
  const states = { nodes: st([]), elements: st([]), nodeInputs: st({}), elementInputs: st({}),
                   deformOutputs: st({}), analyzeOutputs: st({}), objects3D: st([]) };
  ej.build(p, states);        // defaults: lambda = 4, malla 8x8

  const nodes = states.nodes.val;
  const defs = states.deformOutputs.val?.deformations;
  if (!defs) return [{ que: "deform", medido: 0, limite: 0, ok: false, detalle: "el ejemplo no dejo deformaciones" }];

  const flecha = (x, y) => {
    let mejor = -1, d2 = Infinity;
    nodes.forEach((n, i) => {
      const d = (n[0] - x) ** 2 + (n[1] - y) ** 2;
      if (d < d2) { d2 = d; mejor = i; }
    });
    if (Math.sqrt(d2) > 1e-6) return null;
    const v = defs.get ? defs.get(mejor) : defs[mejor];
    return v ? Math.abs(v[2]) / IN : null;        // w en m -> in
  };

  const filas = [];
  for (const pt of PUNTOS) {
    const w = flecha(pt.x, pt.y);
    if (w == null) {
      filas.push({ que: `${pt.id} en la malla`, medido: 0, limite: 0, ok: false,
                   detalle: "el punto de la tabla no cae en un nodo de la 8x8" });
      continue;
    }
    const dT = 100 * (w - pt.teorico) / pt.teorico;
    filas.push({ que: `${pt.id} vs teorico`, medido: dT, limite: TOL_TEORICO,
                 ok: Math.abs(dT) <= TOL_TEORICO,
                 detalle: `${w.toFixed(5)} in vs ${pt.teorico.toFixed(5)}` });
    const dS = 100 * (w - pt.safe8) / pt.safe8;
    filas.push({ que: `${pt.id} vs SAFE 8x8`, medido: dS, limite: TOL_SAFE,
                 ok: Math.abs(dS) <= TOL_SAFE,
                 detalle: `${w.toFixed(5)} in vs ${pt.safe8.toFixed(4)}` });
  }
  return filas;
}
