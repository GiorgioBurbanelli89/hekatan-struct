/**
 * SOLIDOS MEZCLADOS con barras y cascaras en la MISMA K (deform.cpp con H8 desde el
 * 3-sep-2026). Pedestal de hormigon 1x1x1 m en 8 hexaedros, un muro Q4 Shell-Thin
 * apoyado en su cara superior, una columna de acero desde el centro y una viga que
 * une la columna con la coronacion del muro; 10 kN + 50 kN en la columna, 5 kN en el
 * muro. Arbitro: SAP2000 24 por OAPI con los MISMOS nudos (solidos con modos
 * incompatibles, shell Thin, barras General con As = 5/6 A), medido el 3-sep-2026:
 * `galpon-bodega-electoral/sap_mixto_heks.py` -> tests/datos/mixto_solido_muro_columna_sap.json.
 * Hekatan (WASM) = Python a 8e-12 %; contra SAP2000 el peor nudo es 1e-12 % del maximo.
 * (El 0.0065 % que se midio primero era un BUG del script de SAP: reutilizaba un nombre de
 * propiedad de solido que no existia y SAP ponia su hormigon por defecto, E = 24.86e6.)
 */
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { resolverHeks } from "../lib/heks.mjs";
import { modal } from "../lib/wasm.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
export const nombre = "solidos-mixtos";
export const descripcion = "H8 + Q4 + barras en una sola K (deform): 30 nudos vs SAP2000 con los mismos nudos";

export async function correr() {
  const f = join(AQUI, "..", "datos", "mixto_solido_muro_columna.heks");
  const sap = JSON.parse(readFileSync(join(AQUI, "..", "datos", "mixto_solido_muro_columna_sap.json"), "utf-8"));
  const m = await resolverHeks(f);
  const filas = [];
  const nH = m.elements.filter(e => e.length === 8).length, nS = m.elements.filter(e => e.length === 4).length, nB = m.elements.filter(e => e.length === 2).length;
  filas.push({ que: "el .heks monta 8 hexaedros + 1 cascara + 2 barras y resuelve sin avisos", crudo: true, medido: `${nH}/${nS}/${nB}, errores ${JSON.stringify(m.errors ?? [])}`, limite: "8/1/2, []", ok: nH === 8 && nS === 1 && nB === 2 && !(m.errors?.length) });
  const U = m.deformOutputs.deformations;
  let umax = 0; for (const [, u] of U) umax = Math.max(umax, ...u.slice(0, 3).map(Math.abs));
  let peor = 0, peorNudo = -1, dentro = 0, n = 0;
  for (const [i, u] of U) {
    const s = sap.u[String(i + 1)]; if (!s) continue;
    for (let c = 0; c < 3; c++) { const d = Math.abs(u[c] - s[c]) / umax * 100; n++; if (d <= 1e-6) dentro++; if (d > peor) { peor = d; peorNudo = i + 1; } }
  }
  filas.push({ que: "desplazamientos vs SAP2000, peor nudo (% del maximo)", medido: peor, limite: 1e-6, ok: peor <= 1e-6, detalle: `nudo ${peorNudo}; ${dentro}/${n} componentes dentro del 1e-6 %; u_max ${umax.toExponential(4)} m` });
  const u28 = U.get(27), s28 = sap.u["28"];
  filas.push({ que: "cabeza de la columna (28): ux, uy vs SAP2000", medido: Math.max(Math.abs(u28[0] / s28[0] - 1), Math.abs(u28[1] / s28[1] - 1)) * 100, limite: 1e-6, ok: Math.abs(u28[0] / s28[0] - 1) * 100 <= 1e-6 && Math.abs(u28[1] / s28[1] - 1) * 100 <= 1e-6, detalle: `ux ${u28[0].toExponential(6)} vs ${s28[0].toExponential(6)} · uy ${u28[1].toExponential(6)} vs ${s28[1].toExponential(6)}` });
  const R = m.deformOutputs.reactions; const sum = [0, 0, 0];
  for (const [, r] of R) for (let c = 0; c < 3; c++) sum[c] += r[c];
  const eq = Math.max(Math.abs(sum[0] + 10), Math.abs(sum[1] + 5), Math.abs(sum[2] - 50));
  filas.push({ que: "equilibrio: suma de reacciones = -(10, 5, -50) kN", medido: eq, limite: 1e-8, ok: eq <= 1e-8, detalle: `[${sum.map(v => v.toFixed(9)).join(", ")}]` });
  // Modal con la masa del H8 (rho*V/8 por nudo): el WASM tiene que dar lo mismo que el
  // Python (tests/datos/mixto_solido_muro_columna_modal_py.json, 3-sep-2026: 3e-7 %).
  const Tpy = JSON.parse(readFileSync(join(AQUI, "..", "datos", "mixto_solido_muro_columna_modal_py.json"), "utf-8")).T;
  const fr = await modal(m.nodes, m.elements, m.nodeInputs, m.elementInputs, 6, false);
  const Tw = fr.map(f => 1 / f);
  const peorT = Math.max(...Tpy.map((t, i) => Math.abs(Tw[i] / t - 1) * 100));
  filas.push({ que: "modal (6 modos) WASM = Python con la masa del H8", medido: peorT, limite: 1e-5, ok: peorT <= 1e-5, detalle: `T1 ${Tw[0]?.toFixed(6)} s (Python ${Tpy[0].toFixed(6)})` });
  // ...y contra SAP2000 (MODAL, 6 modos, masa de los elementos: rho por volumen), 3-sep-2026
  if (Array.isArray(sap.T) && sap.T.length >= 6) {
    const peorS = Math.max(...sap.T.slice(0, 6).map((t, i) => Math.abs(Tw[i] / t - 1) * 100));
    filas.push({ que: "modal (6 modos) vs SAP2000, peor periodo", medido: peorS, limite: 1e-6, ok: peorS <= 1e-6, detalle: `T1 ${Tw[0]?.toFixed(6)} vs ${sap.T[0].toFixed(6)} s · T6 ${Tw[5]?.toFixed(6)} vs ${sap.T[5].toFixed(6)}` });
  }
  // Tensiones de los solidos mezclados: existen para los 8 hexaedros (8 Gauss x 6) y la
  // recuperacion es la MISMA que hex8Solve — sobre el muro de solidos, hex8Stress con
  // los desplazamientos de hex8Solve reproduce su stressPerElement.
  const a = m.analyzeOutputs ?? {};
  const nSt = a.solidStress instanceof Map ? a.solidStress.size : 0;
  const vmMax = a.solidVonMises instanceof Map ? Math.max(...[...a.solidVonMises.values()].flat()) : NaN;
  filas.push({ que: "tensiones de los 8 solidos mezclados (solidStress / solidVonMises)", crudo: true, medido: `${nSt} elementos, vm max ${vmMax.toExponential(3)} kPa`, limite: "8 elementos", ok: nSt === 8 && isFinite(vmMax) && vmMax > 0 });
  const { empaquetar, R: RAIZ } = await import("../lib/bundle.mjs");
  const mod = await empaquetar(`
    export { hex8Solve, hex8Stress } from "${RAIZ}/examples/src/solid-cube-fem/h8";
    export { mallaMuroSolido, MURO_SOLIDO_DEFAULT } from "${RAIZ}/examples/src/muro-contencion-solido/malla";
  `, "solidos-mixtos-stress");
  const p = mod.MURO_SOLIDO_DEFAULT, mm = mod.mallaMuroSolido(p);
  const r = mod.hex8Solve({ nodes: mm.nodes, elements: mm.elements, E: p.E, nu: p.nu, supports: mm.supports, loads: mm.loads, incompatible: true });
  let peorS = 0;
  for (const [i, el] of mm.elements.entries()) {
    const u = el.flatMap(n => r.displacements.get(n));
    const st = mod.hex8Stress(el.map(n => mm.nodes[n]), p.E, p.nu, u, true);
    const ref = r.stressPerElement.get(i);
    const esc = Math.max(...ref.flat().map(Math.abs));
    for (let g = 0; g < 8; g++) for (let c = 0; c < 6; c++) peorS = Math.max(peorS, Math.abs(st.stress[g][c] - ref[g][c]) / esc * 100);
  }
  filas.push({ que: "hex8Stress = stressPerElement de hex8Solve (muro de 330 H8, 8 Gauss x 6)", medido: peorS, limite: 1e-9, ok: peorS <= 1e-9, detalle: `peor ${peorS.toExponential(2)} % del maximo del elemento` });
  return filas;
}
