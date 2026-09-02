/**
 * CICLO s2k CON SOLIDOS: la malla H8 del muro de contencion -> exportS2k ->
 * parseS2k -> hex8Solve, y tiene que dar lo mismo que resolver la malla directa.
 * SAP2000 leyendo ese s2k da lo mismo que Hekatan (csi_ida_vuelta.py sap,
 * 2-sep-2026). Lo que vigila: CONNECTIVITY - SOLID con el orden TENSORIAL de
 * CSI (3<->4, 7<->8), SOLID PROPERTY DEFINITIONS/ASSIGNMENTS (material e
 * InComp), y que el parser lo devuelva al orden del H8.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../lib/bundle.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
export const nombre = "ciclo-s2k-solidos";
export const descripcion = "s2k con solidos H8: exportar -> importar -> resolver da lo mismo que la malla directa";

export async function correr() {
  const mod = await empaquetar(`
    export { hex8Solve } from "${R}/examples/src/solid-cube-fem/h8";
    export { mallaMuroSolido, MURO_SOLIDO_DEFAULT } from "${R}/examples/src/muro-contencion-solido/malla";
    export { exportS2k } from "${R}/examples/src/shared/s2kExporter";
    export { parseS2k } from "${R}/examples/src/shared/s2kParser";
  `, "ciclo-s2k-solidos");
  const p = mod.MURO_SOLIDO_DEFAULT; const m = mod.mallaMuroSolido(p);
  const ei = { elasticities: new Map(), poissonsRatios: new Map(), shearModuli: new Map(), densities: new Map() };
  m.elements.forEach((_, i) => { ei.elasticities.set(i, p.E); ei.poissonsRatios.set(i, p.nu); ei.shearModuli.set(i, p.E / (2 * (1 + p.nu))); ei.densities.set(i, 0); });
  const supports = new Map(); m.supports.forEach((v, n) => supports.set(n, [v[0], v[1], v[2], true, true, true]));
  const loads = new Map(); m.loads.forEach((v, n) => loads.set(n, [v[0], v[1], v[2], 0, 0, 0]));
  const s2k = mod.exportS2k({ nodes: m.nodes, elements: m.elements, nodeInputs: { supports, loads }, elementInputs: ei, title: "muro solido", units: { force: "KN", length: "m" }, selfWtMult: 0 });
  const dir = join(AQUI, "..", "..", "..", "galpon-bodega-electoral"); try { mkdirSync(dir, { recursive: true }); } catch {}
  writeFileSync(join(dir, "muro_solido.s2k"), s2k, "utf-8");
  const filas = [];
  const nSolidos = (s2k.match(/^\s*Solid=\d+\s+Joint1=/gm) || []).length;
  filas.push({ que: "el s2k lleva CONNECTIVITY - SOLID", crudo: true, medido: String(nSolidos), limite: String(m.elements.length), ok: nSolidos === m.elements.length, detalle: "una fila por hexaedro, orden tensorial de CSI" });
  filas.push({ que: "el s2k lleva SOLID PROPERTY DEFINITIONS con InComp=Yes", crudo: true, medido: /InComp=Yes/.test(s2k) ? "si" : "no", limite: "si", ok: /InComp=Yes/.test(s2k), detalle: "los modos incompatibles, el defecto de SAP2000 y del H8" });
  const q = mod.parseS2k(s2k);
  const sol = q.elements.filter(e => e.length === 8).length;
  filas.push({ que: "parseS2k monta los hexaedros", crudo: true, medido: `${q.nodes.length} nudos / ${sol} solidos`, limite: `${m.nodes.length} / ${m.elements.length}`, ok: q.nodes.length === m.nodes.length && sol === m.elements.length, detalle: `solidIncompatible=${q.elementInputs.solidIncompatible}` });
  // resolver el importado con el H8 y carear con la malla directa
  const sup2 = new Map(); q.nodeInputs.supports.forEach((v, n) => sup2.set(n, [!!v[0], !!v[1], !!v[2]]));
  const ld2 = new Map(); q.nodeInputs.loads.forEach((v, n) => ld2.set(n, [v[0], v[1], v[2]]));
  const E2 = q.elementInputs.elasticities.get(0), nu2 = q.elementInputs.poissonsRatios.get(0);
  const r1 = mod.hex8Solve({ nodes: m.nodes, elements: m.elements, E: p.E, nu: p.nu, supports: m.supports, loads: m.loads });
  const r2 = mod.hex8Solve({ nodes: q.nodes, elements: q.elements, E: E2, nu: nu2, supports: sup2, loads: ld2, incompatible: q.elementInputs.solidIncompatible !== false });
  // los nudos del parser van por nombre (1..N): emparejar por coordenadas
  const k = (x, y, z) => `${x.toFixed(4)}|${y.toFixed(4)}|${z.toFixed(4)}`;
  const idx2 = new Map(q.nodes.map((n, i) => [k(n[0], n[1], n[2]), i]));
  let mx = 0, peor = 0, faltan = 0;
  m.nodes.forEach((n, i) => { const u = r1.displacements.get(i) ?? [0, 0, 0]; mx = Math.max(mx, Math.abs(u[0])); });
  m.nodes.forEach((n, i) => {
    const j = idx2.get(k(n[0], n[1], n[2])); if (j === undefined) { faltan++; return; }
    const a = r1.displacements.get(i) ?? [0, 0, 0], b = r2.displacements.get(j) ?? [0, 0, 0];
    for (let c = 0; c < 3; c++) peor = Math.max(peor, Math.abs(a[c] - b[c]) / mx * 100);
  });
  filas.push({ que: "resolver el s2k importado = malla directa (u nudo a nudo)", medido: peor, limite: 1e-6, ok: faltan === 0 && peor <= 1e-6,
    detalle: `${faltan} nudos sin pareja; E ${E2}, nu ${nu2}` });
  return filas;
}
