#!/usr/bin/env node
/**
 * Vuelca la malla del muro de contencion en solidos (la misma de la pagina) y
 * los resultados de Hekatan (H8 clasico y con modos incompatibles) para armar
 * el mismo modelo en SAP2000 por OAPI (galpon-bodega-electoral/sap_h8_modelo.py).
 *   node cli/muro_solido_dump.mjs salida.json [ms]
 */
import { writeFileSync } from "node:fs";
import { empaquetar, R } from "../tests/lib/bundle.mjs";
const salida = process.argv[2]; const ms = process.argv[3] ? Number(process.argv[3]) : undefined;
const mod = await empaquetar(`
  export { hex8Solve } from "${R}/examples/src/solid-cube-fem/h8";
  export { mallaMuroSolido, MURO_SOLIDO_DEFAULT } from "${R}/examples/src/muro-contencion-solido/malla";
`, "muro-solido-dump");
const p = { ...mod.MURO_SOLIDO_DEFAULT, ...(ms ? { ms } : {}) };
const m = mod.mallaMuroSolido(p);
const res = {};
for (const inc of [false, true]) {
  const r = mod.hex8Solve({ nodes: m.nodes, elements: m.elements, E: p.E, nu: p.nu, supports: m.supports, loads: m.loads, incompatible: inc });
  res[inc ? "inc" : "noinc"] = m.nodes.map((_, n) => r.displacements.get(n) ?? [0, 0, 0]);
  console.log(`Hekatan H8 ${inc ? "Wilson-Taylor" : "clasico"}: ${m.nodes.length} nudos, ${m.elements.length} hexaedros, ux coronacion ${(r.displacements.get(m.nudoCoronacion)?.[0] ?? 0).toExponential(6)} m, ${r.elapsedMs.toFixed(0)} ms`);
}
writeFileSync(salida, JSON.stringify({ params: p, nodes: m.nodes, elements: m.elements, supports: [...m.supports], loads: [...m.loads], nudoCoronacion: m.nudoCoronacion, empujeTotal: m.info.empujeTotal, hekatan: res }));
console.log(`empuje total ${m.info.empujeTotal.toFixed(3)} kN -> ${salida}`);
