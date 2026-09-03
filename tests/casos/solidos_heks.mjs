/**
 * SOLIDOS EN EL .heks: `hex ID n1..n8 [E nu rho]` + `incompatible 0/1`.
 * El muro de contencion en H8 (612 nudos, 330 hexaedros, malla.ts) escrito como
 * .heks tiene que dar por cliModeler LO MISMO que hex8Solve directo y que
 * SAP2000 (SD con modos incompatibles: u_x coronacion -2.621654 mm, medido el
 * 2-sep-2026), y el s2k que sale de ese modelo lleva los 330 solidos.
 */
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../lib/bundle.mjs";
import { resolverHeks } from "../lib/heks.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
export const nombre = "solidos-heks";
export const descripcion = "hexaedros H8 en el .heks: cliModeler = hex8Solve directo = SAP2000, y el s2k con solidos";
const pct = (a, b) => Math.abs(a - b) / Math.abs(b) * 100;
const SAP_UX = -2.621654e-3;       // SAP2000 24, SD, modos incompatibles (muro_solido_sap_inc.json)
const SAP_UX_NOINC = -2.354258e-3;

export async function correr() {
  const mod = await empaquetar(`
    export { hex8Solve } from "${R}/examples/src/solid-cube-fem/h8";
    export { mallaMuroSolido, MURO_SOLIDO_DEFAULT } from "${R}/examples/src/muro-contencion-solido/malla";
    export { exportS2k } from "${R}/examples/src/shared/s2kExporter";
  `, "solidos-heks");
  const filas = [];
  const m = await resolverHeks(join(AQUI, "..", "datos", "muro_solido.heks"));
  const nH = m.elements.filter(e => e.length === 8).length;
  filas.push({ que: "el .heks monta los 330 hexaedros", crudo: true, medido: `${m.nodes.length} nudos / ${nH} hex`, limite: "612 / 330", ok: m.nodes.length === 612 && nH === 330, detalle: "comando hex" });
  const p = mod.MURO_SOLIDO_DEFAULT, mm = mod.mallaMuroSolido(p);
  const nc = mm.nudoCoronacion;
  const uxH = m.deformOutputs.deformations.get(nc)?.[0] ?? NaN;
  const r = mod.hex8Solve({ nodes: mm.nodes, elements: mm.elements, E: p.E, nu: p.nu, supports: mm.supports, loads: mm.loads, incompatible: true });
  const uxD = r.displacements.get(nc)[0];
  filas.push({ que: "cliModeler (hex) = hex8Solve directo, u_x coronacion", medido: pct(uxH, uxD), limite: 1e-9, ok: pct(uxH, uxD) <= 1e-9, detalle: `${uxH.toExponential(7)} vs ${uxD.toExponential(7)} m` });
  filas.push({ que: "u_x coronacion vs SAP2000 (SD, modos incompatibles)", medido: pct(uxH, SAP_UX), limite: 1e-5, ok: pct(uxH, SAP_UX) <= 1e-5, detalle: `${uxH.toExponential(7)} vs ${SAP_UX.toExponential(7)} m` });
  // sin modos incompatibles
  const { readFileSync, writeFileSync, unlinkSync } = await import("node:fs");
  const txt = readFileSync(join(AQUI, "..", "datos", "muro_solido.heks"), "utf-8");
  const tmp = join(AQUI, "..", "datos", "_muro_solido_noinc.heks");
  writeFileSync(tmp, "incompatible 0\n" + txt, "utf-8");
  let uxN = NaN; try { const m2 = await resolverHeks(tmp); uxN = m2.deformOutputs.deformations.get(nc)?.[0] ?? NaN; } finally { try { unlinkSync(tmp); } catch {} }
  filas.push({ que: "`incompatible 0`: H8 clasico = SAP2000 sin modos", medido: pct(uxN, SAP_UX_NOINC), limite: 1e-4, ok: pct(uxN, SAP_UX_NOINC) <= 1e-4, detalle: `${uxN.toExponential(7)} vs ${SAP_UX_NOINC.toExponential(7)} m` });
  // s2k con solidos desde el modelo del .heks
  const s2k = mod.exportS2k({ nodes: m.nodes, elements: m.elements, nodeInputs: m.nodeInputs, elementInputs: m.elementInputs, title: "muro solido heks", units: { force: "KN", length: "m" }, selfWtMult: 0 });
  const nSol = (s2k.match(/^\s*Solid=\d+\s+Joint1=/gm) || []).length;
  filas.push({ que: "el s2k del modelo .heks lleva los 330 solidos con InComp=Yes", crudo: true, medido: `${nSol} solidos, ${/InComp=Yes/.test(s2k) ? "InComp=Yes" : "sin InComp"}`, limite: "330 solidos, InComp=Yes", ok: nSol === 330 && /InComp=Yes/.test(s2k), detalle: "CONNECTIVITY - SOLID + SOLID PROPERTY DEFINITIONS" });
  return filas;
}
