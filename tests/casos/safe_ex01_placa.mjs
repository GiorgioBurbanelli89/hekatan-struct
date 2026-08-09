/**
 * SAFE Verification Example 1 — placa rectangular simplemente apoyada.
 *
 * Ref: SAFE 20 \ Manuals \ Verification \ Analysis \ Example 01.pdf
 *      (Timoshenko-Woinowsky 1959, serie doble de Navier)
 *
 * a x b x t = 360" x 240" x 8", E = 3000 ksi, nu = 0.3, q = 100 psf, los 4
 * bordes simplemente apoyados. Es el mismo modelo del ejemplo
 * `benchmark-safe-ex01-plate`, pero aqui se llama directo a `plateQ4Solve`:
 * lo que se vigila es el MOTOR de placas.
 *
 * Doble arbitro, que es lo bueno de este caso: la serie de Navier (analitica) y
 * SAFE 8x8.
 *
 * Dos cosas MEDIDAS, no supuestas, que fijan como se compara:
 *
 * - Con malla UNIFORME 8x8 los puntos de x = 60" NO caen en ningun nodo
 *   (360"/8 = 45"). El PDF los tiene porque su malla es no uniforme, con los
 *   bordes finos. Por eso contra Navier se usa 12x12, que si contiene los
 *   cuatro (360/12 = 30", 240/12 = 20").
 * - Contra SAFE 8x8 solo se comprueba el CENTRO, que es el unico punto de la
 *   tabla que cae en nodo con malla uniforme.
 */
import { cargarFem } from "../lib/bundle.mjs";

const IN = 0.0254, FT = 0.3048, PSF_KPA = 4.7880e-2, KSI_KPA = 6.89476e3;
const Lx = 30 * FT, Ly = 20 * FT, t = 8 * IN;
const E = 3000 * KSI_KPA, nu = 0.3, q = 100 * PSF_KPA;

// Tabla 1-1 del PDF, en pulgadas. Navier es la solucion analitica.
const PUNTOS = [
  { id: "P1 (60,60)",   x: 60 * IN,  y: 60 * IN,  navier: 0.0492961, safe8: 0.0492 },
  { id: "P2 (60,120)",  x: 60 * IN,  y: 120 * IN, navier: 0.0684443, safe8: null },
  { id: "P3 (180,60)",  x: 180 * IN, y: 60 * IN,  navier: 0.0906034, safe8: null },
  { id: "P4 centro",    x: 180 * IN, y: 120 * IN, navier: 0.1265195, safe8: 0.1270 },
];

const TOL_NAVIER = 3.0;   // %  — malla 8x8 uniforme contra la serie analitica
const TOL_SAFE   = 3.0;   // %  — SAFE usa malla no uniforme; no se exige mas

export const nombre = "safe-ex01-placa";
export const descripcion = "SAFE Ej.1 — placa SS: flecha en 4 puntos vs Navier (12x12) y en el centro vs SAFE (8x8)";

const resolver = async (n) => {
  const { plateQ4Solve } = await cargarFem();
  return plateQ4Solve({
    E, nu, thickness: t, theoryType: 1,            // 1 = thin (Kirchhoff)
    meshLx: Lx, meshLy: Ly, meshNx: n, meshNy: n,
    bcType: "simply-supported", pressure: -q,
  });
};

/** Flecha en (x, y), en pulgadas. null si el punto no cae en un nodo. */
function flecha(out, x, y) {
  let mejor = null, d2 = Infinity;
  for (const n of out.nodeResults) {
    const d = (n.x - x) ** 2 + (n.y - y) ** 2;
    if (d < d2) { d2 = d; mejor = n; }
  }
  if (Math.sqrt(d2) > 1e-6) return null;
  return Math.abs(mejor.w) / IN;                   // m -> in
}

export async function correr() {
  const filas = [];

  const out12 = await resolver(12);
  for (const p of PUNTOS) {
    const w = flecha(out12, p.x, p.y);
    if (w == null) {
      filas.push({ que: `${p.id} en la malla`, medido: 0, limite: 0, ok: false,
                   detalle: "el punto de la tabla no cae en un nodo de la 12x12" });
      continue;
    }
    const d = 100 * (w - p.navier) / p.navier;
    filas.push({ que: `${p.id} vs Navier`, medido: d, limite: TOL_NAVIER,
                 ok: Math.abs(d) <= TOL_NAVIER,
                 detalle: `${w.toFixed(5)} in vs ${p.navier.toFixed(5)} (malla 12x12)` });
  }

  const out8 = await resolver(8);
  const centro = PUNTOS.find(p => p.safe8 != null && p.id === "P4 centro");
  const w8 = flecha(out8, centro.x, centro.y);
  const d8 = 100 * (w8 - centro.safe8) / centro.safe8;
  filas.push({ que: "centro vs SAFE 8x8", medido: d8, limite: TOL_SAFE,
               ok: Math.abs(d8) <= TOL_SAFE,
               detalle: `${w8.toFixed(5)} in vs ${centro.safe8.toFixed(4)}` });

  return filas;
}
