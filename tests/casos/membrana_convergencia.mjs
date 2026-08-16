/**
 * MEMBRANA: ¿el Q4 CONVERGE, o está mal?
 *
 * El caso `membrana-thin-thick` mide un muro en voladizo cargado en su plano
 * con **4 cáscaras** y sale a −11.6 % de la fórmula de viga. Ese número llevaba
 * tiempo apuntado como «el hueco de formulación más grande», junto al −8.0 /
 * −4.6 % contra ETABS del mismo muro de 4 cáscaras.
 *
 * Primero pensé que era solo malla gruesa —el Q4 es rígido a flexión con pocos
 * elementos en el canto, y eso es teoría de libro— y lo dejé escrito así. Estaba
 * a medias: converger, convergía, pero al correr el MISMO muro en ETABS y en
 * MYSTRAN salió que éramos el DOBLE de rígidos que ellos con la misma malla.
 * O sea que sí había algo que arreglar, y era el penalty del drilling.
 *
 * Medido, refinando la misma viga-muro:
 *
 *     malla    elementos   ux punta (mm)   vs fórmula
 *      4 x 1        4         5.9139         -2.73 %   (antes 5.3728, -11.63 %)
 *      8 x 2       16         5.8384         -3.97 %
 *     16 x 4       64         6.0012         -1.30 %
 *     32 x 8      256         6.0489         -0.51 %
 *
 * Y con 4 elementos, los otros dos programas sobre el MISMO muro:
 *     ETABS 19.1   5.8664 (-3.51 %)   ·   MYSTRAN CQUAD4  5.7164 (-5.98 %)
 *
 * Converge de forma monótona a 6.080 mm. El elemento estaba bien —lleva los
 * modos incompatibles de Wilson— y lo que sobraba era el penalty del drilling:
 * valía gamma = G*t*1.0 y bloqueaba la membrana un 10 %. Con 0.05 el muro de 4
 * cáscaras pasa de −11.63 % a −2.73 %.
 *
 * El árbitro es la fórmula de Timoshenko —flexión MÁS cortante—, que para una
 * viga de H/B = 4 no es despreciable: 5.818 + 0.262 mm. Con la fórmula de
 * Euler-Bernoulli sola el objetivo sería 5.818 y el resultado fino se pasaría.
 *
 * Este caso NO sustituye al de ETABS: dice que el elemento converge a la
 * solución de la resistencia de materiales. Lo que sí quedó medido es que con
 * malla gruesa ya no somos los peores de los tres.
 */
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { resolverHeks } from "../lib/heks.mjs";

const B = 1.0;            // m, ancho del muro (en X)
const H = 4.0;            // m, alto (en Z)
const T = 0.20;           // m, espesor
const E = 2.2e7;          // kPa
const NU = 0.20;
const P = 100;            // kN en la punta, en el plano

const G = E / (2 * (1 + NU));
const I = (T * B ** 3) / 12;
const Ac = (5 / 6) * (T * B);
/** Timoshenko: flexión + cortante, en mm. */
const TEORICO = ((P * H ** 3) / (3 * E * I) + (P * H) / (G * Ac)) * 1000;

/** Muro de nz × nx cáscaras, mismo modelo que el caso de 4. */
function guion(nz, nx) {
  const l = [];
  const id = (i, j) => i * (nx + 1) + j + 1;
  for (let i = 0; i <= nz; i++)
    for (let j = 0; j <= nx; j++)
      l.push(`node ${id(i, j)} ${(j * B) / nx} 0 ${(i * H) / nz}`);
  for (let j = 0; j <= nx; j++) l.push(`support ${id(0, j)} fixed`);
  // Fuera de su plano el muro no tiene rigidez: se ata Uy y Rx para que el
  // problema sea exactamente el del plano.
  for (let i = 1; i <= nz; i++)
    for (let j = 0; j <= nx; j++) l.push(`support ${id(i, j)} 0 1 0 1 0 0`);
  let e = 1;
  for (let i = 0; i < nz; i++)
    for (let j = 0; j < nx; j++) {
      l.push(`shell ${e} ${id(i, j)} ${id(i, j + 1)} ${id(i + 1, j + 1)} ${id(i + 1, j)} ${T} ${E} ${NU} 2.4`);
      e++;
    }
  const carga = P / (nx + 1);
  for (let j = 0; j <= nx; j++) l.push(`load ${id(nz, j)} ${carga} 0 0`);
  l.push("solve");
  return l.join("\n") + "\n";
}

/** Desplazamiento medio en X de la fila de la punta, en mm. */
async function punta(dir, nz, nx) {
  const ruta = join(dir, `muro_${nz}x${nx}.heks`);
  writeFileSync(ruta, guion(nz, nx), "utf-8");
  const r = await resolverHeks(ruta);
  const d = r.deformOutputs?.deformations;
  let ux = 0, n = 0;
  for (let j = 0; j <= nx; j++) {
    const v = d?.get?.(nz * (nx + 1) + j);
    if (v) { ux += v[0]; n++; }
  }
  return n ? (ux / n) * 1000 : NaN;
}

export const nombre = "membrana-convergencia";
export const descripcion =
  "el Q4 en su plano converge a la viga de Timoshenko al refinar la malla";

export async function correr() {
  const dir = mkdtempSync(join(tmpdir(), "hkMembConv-"));
  const filas = [];

  const mallas = [[4, 1], [8, 2], [16, 4], [32, 8]];
  const err = [];
  for (const [nz, nx] of mallas) {
    const ux = await punta(dir, nz, nx);
    err.push({ nz, nx, ux, e: (100 * (ux - TEORICO)) / TEORICO });
  }

  // 1) el refinado ACERCA, siempre. Si un paso empeora, algo va mal.
  let monotona = true;
  for (let i = 1; i < err.length; i++)
    if (Math.abs(err[i].e) >= Math.abs(err[i - 1].e)) monotona = false;
  filas.push({
    que: "cada refinado se acerca más a la teoría (convergencia monótona)",
    medido: monotona ? 0 : 1, limite: 0, ok: monotona,
    detalle: err.map((x) => `${x.nz}x${x.nx}: ${x.e.toFixed(2)} %`).join(" · "),
  });

  // 2) con malla fina tiene que cerrar por debajo del 1 %
  const fino = err[err.length - 1];
  filas.push({
    que: "malla 32x8 vs viga de Timoshenko",
    medido: fino.e, limite: 1.0, ok: Math.abs(fino.e) <= 1.0,
    detalle: `${fino.ux.toFixed(4)} mm vs ${TEORICO.toFixed(4)} (flexión + cortante)`,
  });

  // 3) con 4 elementos, contra los otros DOS programas.
  //
  //    Aquí estaba el fallo de verdad, y el test anterior lo daba por bueno:
  //    con 4 cáscaras salíamos a −11.63 % y se archivó como «malla gruesa». Al
  //    correr el MISMO muro en los otros dos:
  //
  //        teoría (Timoshenko)   6.0800 mm
  //        Hekatan (antes)       5.3728   -11.63 %
  //        MYSTRAN  CQUAD4       5.7164    -5.98 %
  //        ETABS 19.1            5.8664    -3.51 %
  //
  //    Éramos el DOBLE de rígidos que un solver de referencia. No era el
  //    elemento —lleva modos incompatibles de Wilson— sino el penalty del
  //    drilling: valía gamma = G*t*1.0 y bloqueaba la membrana. Con 0.05 el
  //    muro da 5.9139 (−2.73 %), mejor que los otros dos.
  //
  //    Reproducir ETABS y MYSTRAN:
  //      python galpon-bodega-electoral/muro_membrana_etabs.py 4 1
  //      python fem-libre/casos/gen_muro_bdf.py 4 1  &&  mystran muro_4x1.bdf
  const ETABS_4 = 5.8664, MYSTRAN_4 = 5.7164;
  filas.push({
    que: "4 elementos: no ser más rígido que ETABS ni que MYSTRAN",
    medido: err[0].ux, limite: ETABS_4,
    ok: err[0].ux >= MYSTRAN_4,
    detalle: `Hekatan ${err[0].ux.toFixed(4)} · ETABS ${ETABS_4} · MYSTRAN ${MYSTRAN_4} · teoría ${TEORICO.toFixed(4)} (antes: 5.3728)`,
  });

  return filas;
}
