#!/usr/bin/env node
/**
 * CICLO fichero CSI -> Hekatan -> fichero CSI -> Hekatan. Si lo que sale es lo
 * que entro, el importador y el exportador no pierden nada.
 *
 *   node cli/ciclo_csi.mjs modelo.e2k|modelo.s2k [referencia_dump.json]
 *
 * Mide, en cada vuelta: nudos, barras, cascaras, apoyos, sum Fz, espesores,
 * secciones, y la FLECHA (Uz min) resolviendo con el motor. Con el dump del
 * .heks original (tests/lib/dump_heks.mjs) compara tambien contra el origen.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { empaquetar, R, cargarFem } from "../tests/lib/bundle.mjs";
const [, , fich, refJson] = process.argv;
const esS2k = /\.s2k$/i.test(fich);
const mod = await empaquetar(`
  export { parseE2k } from "${R}/examples/src/shared/e2kParser";
  export { parseS2k } from "${R}/examples/src/shared/s2kParser";
  export { exportE2k } from "${R}/examples/src/shared/e2kExporter";
  export { exportS2k } from "${R}/examples/src/shared/s2kExporter";
`, "ciclo-csi");
const fem = await cargarFem();
const parse = (t) => esS2k ? mod.parseS2k(t) : mod.parseE2k(t);
const exportar = (m) => {
  const comun = { nodes: m.nodes, elements: m.elements, nodeInputs: m.nodeInputs, elementInputs: m.elementInputs, title: "ciclo", units: { force: "Tonf", length: "m" } };
  return esS2k ? mod.exportS2k({ ...comun, selfWtMult: 0 }) : mod.exportE2k({ ...comun, weightMode: "manual", diaphragm: "none" });
};
const medir = (m, etiqueta) => {
  const barras = m.elements.filter(e => e.length === 2).length, shells = m.elements.filter(e => e.length >= 3).length;
  let sumFz = 0; m.nodeInputs.loads?.forEach(v => sumFz += v[2] || 0);
  const nSup = m.nodeInputs.supports?.size ?? 0;
  const th = [...new Set([...(m.elementInputs.thicknesses ?? new Map()).values()].map(v => +v.toFixed(4)))].sort();
  const secs = new Set([...(m.elementInputs.areas ?? new Map()).entries()].map(([i, A]) => `${A.toExponential(4)}/${(m.elementInputs.momentsOfInertiaZ?.get(i) ?? 0).toExponential(3)}`));
  let uzMin = 0, sumRz = 0;
  try {
    const d = fem.deform(m.nodes, m.elements, m.nodeInputs, m.elementInputs);
    d.deformations.forEach(u => { if (u[2] < uzMin) uzMin = u[2]; });
    d.reactions?.forEach(r => sumRz += r[2] || 0);
  } catch (e) { uzMin = NaN; }
  const r = { etiqueta, nudos: m.nodes.length, barras, shells, apoyos: nSup, sumFz: +sumFz.toFixed(3), sumRz: +sumRz.toFixed(3), espesores: th, secciones: secs.size, uzMin_mm: +(uzMin * 1000).toFixed(4) };
  console.log(JSON.stringify(r)); return r;
};
const m1 = parse(readFileSync(fich, "utf-8")); const r1 = medir(m1, "vuelta 1: " + fich);
const f2 = fich.replace(/\.(e2k|s2k)$/i, "_ciclo.$1"); writeFileSync(f2, exportar(m1), "utf-8");
const m2 = parse(readFileSync(f2, "utf-8")); const r2 = medir(m2, "vuelta 2: " + f2);
if (refJson) {
  const H = JSON.parse(readFileSync(refJson, "utf-8")); let uz = 0, sFz = 0, sRz = 0;
  for (const v of Object.values(H.deformations)) if (v[2] < uz) uz = v[2];
  for (const v of Object.values(H.nodeInputs.loads)) sFz += v[2] || 0; for (const v of Object.values(H.reactions)) sRz += v[2] || 0;
  console.log(JSON.stringify({ etiqueta: "origen .heks", nudos: H.nodes.length, barras: H.elements.filter(e => e.length === 2).length, shells: H.elements.filter(e => e.length === 4).length, apoyos: Object.keys(H.nodeInputs.supports).length, sumFz: +sFz.toFixed(3), sumRz: +sRz.toFixed(3), uzMin_mm: +(uz * 1000).toFixed(4) }));
}
const dif = Object.keys(r1).filter(k => k !== "etiqueta" && JSON.stringify(r1[k]) !== JSON.stringify(r2[k]));
console.log(dif.length ? "CAMBIA entre vueltas: " + dif.join(", ") : "vuelta 1 = vuelta 2: el ciclo no pierde nada");
