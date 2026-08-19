/**
 * Mesa de Torsión — fuerzas internas de las 24 barras contra ETABS 19.1.
 *
 * Es un test de SOLVER: las dos entradas son idénticas a propósito, para que lo
 * único que se mida sea cómo resuelve cada programa, no decisiones de modelado.
 *
 *  · CASO SCP (carga de área uniforme 1 tonf/m² sobre la losa, peso propio OFF).
 *    Para carga uniforme el reparto por área tributaria de Hekatan (esquina
 *    0.25 / borde 0.5 / centro 1.0) coincide NUDO A NUDO con la carga
 *    consistente Q4 de ETABS: el vector de cargas es el mismo. El peso propio NO
 *    sirve para esto — ETABS lo aplica distribuido y Hekatan lo lumpea a nudos,
 *    así que el axil de columna sale constante (el promedio) contra el lineal de
 *    ETABS; es diferencia de MODELO, no de solver.
 *  · Brazos rígidos anulados en los dos lados (igual que Paz 6.3 y mezanine).
 *  · Diafragma DESCONECTADO en ETABS. Bajo carga vertical simétrica no se activa
 *    (SCP con y sin diafragma da resultados idénticos), pero se quita para que
 *    los dos resuelvan el mismo sistema sin ambigüedad.
 *
 * La referencia `datos/mesa_torsion_scp_etabs.json` la genera
 * `datos/gen_mesa_solver_ref.py` sobre `hekatan-csi-debug/v19scratch/mesa_t19.EDB`,
 * a nivel de ELEMENTO de análisis (24 LineElm), para que las coordenadas de nudo
 * emparejen con los 5 segmentos en que Hekatan subdivide cada viga.
 *
 * Este caso cazó el bug del cruce [[reference_struct_ejes_locales_csi]] I22/I33
 * que había quedado vivo en `mesaTorsion.ts`: las vigas tenían la inercia FUERTE
 * en I22, así que flexionaban en gravedad 2.78× más flojas, su M3 salía ~0.70×
 * el de ETABS y el de las columnas ~1.33×. Con la inercia en su casilla, todo
 * cierra < 1 % salvo la torsión (J Saint-Venant vs ETABS, ~4 %).
 */
/**
 * ⚠️ LA TORSIÓN (T) NO ES LA J — hipótesis descartada el 19-ago-2026.
 *
 * T es el único campo que se sale (2.1 % medio, 3.7 % máx) mientras los demás
 * cierran por debajo del 0.8 %. La bitácora lo venía atribuyendo desde agosto a
 * «J de Saint-Venant vs ETABS», o sea a que cada uno usara una J distinta.
 *
 * Medido preguntándoselo a ETABS (`PropFrame.GetSectProps` sobre secciones
 * rectangulares) y comparándolo con la J de Roark que usa Hekatan:
 *
 *     sección       J de ETABS    J de Roark    ETABS/Roark
 *     0.30 x 0.50   0.00282175    0.00281737      1.0016
 *     0.40 x 0.40   0.00360667    0.00360533      1.0004
 *     0.25 x 0.80   0.00335130    0.00334701      1.0013
 *     0.20 x 1.00   0.00233407    0.00233071      1.0014
 *
 * Coinciden al 0.1 %. Con esa diferencia no salen 3.7 puntos: **la J no es la
 * causa** y hay que buscar en otro sitio (reparto de la torsión entre barras,
 * o cómo la cáscara le entrega el giro a la viga).
 */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFileSync } from "node:fs";
import { empaquetar, R } from "../lib/bundle.mjs";
import { fuerzasDeBarra } from "../lib/heks.mjs";
import { compararFuerzas, CAMPOS } from "../lib/comparar.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const DATOS = join(AQUI, "..", "datos");

// campo: [err medio máximo admitido, err máximo admitido]  (% del pico de ETABS)
// Medido el 2026-08-09; un swap I22/I33 los dispara a 24-33 %, así que sirven de
// regresión. V3 y M2 son ~cero por simetría (pico chico), su límite es holgado.
const LIMITES = {
  P:  [0.25, 0.50],
  V2: [0.60, 1.20],
  V3: [0.70, 1.30],
  T:  [3.20, 4.50],
  M2: [0.40, 1.30],
  M3: [0.70, 1.30],
};

export const nombre = "mesa-torsion-fuerzas";
export const descripcion = "Mesa de torsión, 24 barras × 6 campos contra ETABS 19.1 (SCP, mismas cargas, sin diafragma)";

async function construirStruct() {
  const { mesaTorsion } = await empaquetar(
    `export { mesaTorsion } from "${R}/examples/src/mesa-torsion/mesaTorsion";\n`, "mesaTorsion");
  const p = {};
  for (const [k, def] of Object.entries(mesaTorsion.params)) p[k] = def.default;
  p.activeCase = 2;      // SCP
  p.rigidOffsets = 0;    // brazos anulados como en la referencia
  const st = (v) => ({ val: v });
  const states = {
    nodes: st([]), elements: st([]), nodeInputs: st({}), elementInputs: st({}),
    deformOutputs: st({}), analyzeOutputs: st({}), objects3D: st([]),
  };
  mesaTorsion.build(p, states);
  return fuerzasDeBarra({
    nodes: states.nodes.val,
    elements: states.elements.val,
    analyzeOutputs: states.analyzeOutputs.val,
  });
}

export async function correr() {
  const struct = await construirStruct();
  const etabs = JSON.parse(readFileSync(join(DATOS, "mesa_torsion_scp_etabs.json"), "utf-8"));
  const r = compararFuerzas(struct, etabs);

  const filas = [{
    que: "barras emparejadas",
    medido: r.emparejadas, limite: 24, ok: r.emparejadas === 24,
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
