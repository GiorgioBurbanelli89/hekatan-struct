/**
 * Los esfuerzos de una barra con carga EN EL VANO son `f = k*u + f_empotramiento`.
 *
 * Este caso existe porque `analyze()` hacia solo `k*u`. La carga repartida
 * entraba al sistema como fuerzas nodales equivalentes —eso siempre estuvo
 * bien, y por eso los DESPLAZAMIENTOS salian exactos contra ETABS— pero al
 * recuperar el esfuerzo de la barra faltaba el termino del vano entero.
 *
 * Lo caza el peldano 1 de la escalera de validacion (portico de hormigon
 * regular, 64 nudos, misma malla que ETABS). En una viga de 5 m con 20 kN/m:
 *
 *     V:  Hekatan 3.71   ETABS 53.71   faltaban los wL/2   = 50
 *     M:  Hekatan 15.06  ETABS 45.17   faltaban los wL²/12 = 41.67
 *
 * y —esta es la firma del fallo— N, V3 y M2 cuadraban al cuarto decimal,
 * porque esos NO tienen carga en su plano.
 *
 * El arbitro es la viga biempotrada, que tiene solucion cerrada:
 *
 *     M en el apoyo = w*L²/12       V en el apoyo = w*L/2
 *     M en el centro = w*L²/24
 *
 * Se comprueba ademas que la barra ESTA EN EQUILIBRIO: la suma de los cortantes
 * de los dos extremos tiene que dar la carga total w*L. Sin el termino de
 * empotramiento salia cero, que es justo lo que hace que el fallo pase
 * desapercibido — los dos extremos son iguales y opuestos, y parece coherente.
 */
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { resolverHeks, fuerzasDeBarra } from "../lib/heks.mjs";

const L = 6.0;            // m, un solo vano
const E = 2.0e8;          // kPa
const A = 0.2;            // m2 (esbelta: el cortante no ensucia la teoria)
const I = 1.0e-4;         // m4
const W = -30.0;          // kN/m hacia abajo, en globales

export const nombre = "empotramiento-vano";
export const descripcion =
  "Una barra con carga repartida: los esfuerzos llevan el termino de empotramiento";

export async function correr() {
  const dir = mkdtempSync(join(tmpdir(), "hkVano-"));
  const ruta = join(dir, "viga.heks");
  writeFileSync(ruta, [
    "node 1 0 0 0",
    `node 2 ${L} 0 0`,
    "support 1 fixed",
    "support 2 fixed",
    `frame 1 1 2 ${E} ${A} ${I} ${I} 1e-6 0.3 2.4`,
    `frameload 1 0 0 ${W}`,
    "solve",
  ].join("\n") + "\n", "utf-8");

  const r = await resolverHeks(ruta);
  const barras = fuerzasDeBarra(r);
  const filas = [];
  if (!barras.length) {
    return [{ que: "la barra devolvio esfuerzos", medido: 1e9, limite: 0,
              ok: false, detalle: "analyze() no dio nada" }];
  }
  const b = barras[0];
  const teoM = Math.abs(W) * L * L / 12;
  const teoV = Math.abs(W) * L / 2;

  // 1) momento de empotramiento en el extremo i
  const mI = Math.abs(b.Mz?.[0] ?? 0);
  filas.push({
    que: "M en el apoyo = wL^2/12",
    medido: (100 * (mI - teoM)) / teoM, limite: 1.0,
    ok: Math.abs((100 * (mI - teoM)) / teoM) <= 1.0,
    detalle: `${mI.toFixed(3)} vs ${teoM.toFixed(3)} kN.m (sin el termino salia 0)`,
  });

  // 2) y en el j, que por simetria es el mismo
  const mJ = Math.abs(b.Mz?.[1] ?? 0);
  filas.push({
    que: "M en el otro apoyo = wL^2/12",
    medido: (100 * (mJ - teoM)) / teoM, limite: 1.0,
    ok: Math.abs((100 * (mJ - teoM)) / teoM) <= 1.0,
    detalle: `${mJ.toFixed(3)} vs ${teoM.toFixed(3)} kN.m`,
  });

  // 3) cortante en el apoyo = wL/2
  const vI = Math.abs(b.Vy?.[0] ?? 0);
  filas.push({
    que: "V en el apoyo = wL/2",
    medido: (100 * (vI - teoV)) / teoV, limite: 1.0,
    ok: Math.abs((100 * (vI - teoV)) / teoV) <= 1.0,
    detalle: `${vI.toFixed(3)} vs ${teoV.toFixed(3)} kN`,
  });

  // 4) LA QUE DECIDE: la barra tiene que estar en EQUILIBRIO. La suma de los
  //    cortantes de los dos extremos es la carga total del vano. Va con SUMA y
  //    no con resta porque los dos extremos se miden sobre el MISMO eje local:
  //    con carga de vano salen los dos del mismo signo. Sin el termino de
  //    empotramiento salen iguales y opuestos, la suma da CERO, y ahi esta lo
  //    que hacia que el fallo pasara desapercibido — parecia coherente.
  const suma = Math.abs((b.Vy?.[0] ?? 0) + (b.Vy?.[1] ?? 0));
  const total = Math.abs(W) * L;
  filas.push({
    que: "equilibrio: V_i + V_j = wL",
    medido: (100 * (suma - total)) / total, limite: 1.0,
    ok: Math.abs((100 * (suma - total)) / total) <= 1.0,
    detalle: `${suma.toFixed(3)} vs ${total.toFixed(3)} kN (sin el termino: 0)`,
  });

  return filas;
}
