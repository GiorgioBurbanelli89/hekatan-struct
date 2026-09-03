/**
 * EL GALPON REAL contra SAP2000 24 con la MISMA malla y las MISMAS cargas nodales, por OAPI
 * (`galpon-bodega-electoral/csi_desde_dump.py sap`, 3-sep-2026): 609 nudos, 1140 barras
 * (156 con `ang`, As de Timoshenko), 116 shells de deck (membrana: shellmod 1 1 1 0 0 0 1 1).
 * Referencia: tests/datos/galpon_lc_sap_oapi.json. Medido: 1824/1827 componentes dentro del
 * 0.01 % del maximo; los 3 que sobran son nudos que SOLO tocan deck (sin rigidez fuera del
 * plano: Hekatan los saca del sistema y los deja a 0, SAP les da un valor pequeno).
 */
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { resolverHeks } from "../lib/heks.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
export const nombre = "galpon-vs-sap2000-oapi";
export const descripcion = "el galpon entero (barras con ang + deck membrana) vs SAP2000 por OAPI, misma malla y cargas";

export async function correr() {
  const S = JSON.parse(readFileSync(join(AQUI, "..", "datos", "galpon_lc_sap_oapi.json"), "utf-8"));
  const m = await resolverHeks(join(AQUI, "..", "datos", "galpon_lc.heks"));
  const U = m.deformOutputs.deformations;
  const enBarra = new Set(), enShell = new Set();
  for (const el of m.elements) for (const n of el) (el.length === 2 ? enBarra : enShell).add(n);
  let umax = 0; for (const [, u] of U) umax = Math.max(umax, ...u.slice(0, 3).map(Math.abs));
  let peorBarra = 0, peorTodo = 0, dentro = 0, n = 0, huerfanos = 0;
  for (const s of S.nudos) {
    const u = U.get(s.i); if (!u) continue;
    const soloDeck = enShell.has(s.i) && !enBarra.has(s.i);
    let esHuerfano = false;
    for (let c = 0; c < 3; c++) {
      // componente SIN rigidez en Hekatan (getZerosIndices la deja a 0 exacto): el deck
      // no tiene rigidez fuera de su plano y ese gdl no esta definido
      if (soloDeck && u[c] === 0) { esHuerfano = true; continue; }
      const d = Math.abs(u[c] - s.u[c]) / umax * 100; n++;
      if (d <= 0.01) dentro++;
      if (d > peorTodo) peorTodo = d;
      if (enBarra.has(s.i) && d > peorBarra) peorBarra = d;
    }
    if (esHuerfano) huerfanos++;
  }
  let sumRz = 0; for (const [, r] of m.deformOutputs.reactions) sumRz += r[2];
  return [
    { que: "nudos de BARRA vs SAP2000 (misma malla, OAPI), peor % del maximo", medido: peorBarra, limite: 0.01, ok: peorBarra <= 0.01, detalle: `u_max ${umax.toExponential(4)} m; ${S.nudos.length} nudos` },
    { que: "todos los nudos con rigidez, peor % del maximo", medido: peorTodo, limite: 0.01, ok: peorTodo <= 0.01, detalle: `${dentro}/${n} componentes dentro del 0.01 %; ${huerfanos} nudos huerfanos del deck excluidos (Hekatan = 0)` },
    { que: "suma de reacciones Rz = SAP2000", medido: Math.abs(sumRz / S.sumRz - 1) * 100, limite: 1e-6, ok: Math.abs(sumRz / S.sumRz - 1) * 100 <= 1e-6, detalle: `${sumRz.toFixed(3)} vs ${S.sumRz.toFixed(3)} kN` },
  ];
}
