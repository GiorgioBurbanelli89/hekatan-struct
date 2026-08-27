#!/usr/bin/env node
/**
 * Genera un `.e2k` de UNA losa con modificadores conocidos, para comprobar en
 * ETABS de verdad que los lee (`_probe_mods_etabs.py`). El test de texto dice
 * que la linea se escribe; esto dice que ETABS la ENTIENDE, que es otra cosa.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../tests/lib/bundle.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const salida = process.argv[2] || join(__dirname, "..", "validation/modelos/plantillas", "_mods.e2k");

const mod = await empaquetar(`
export { exportE2k } from "${R}/examples/src/shared/e2kExporter";
`, "probe-mods");

const nodes = [[0, 0, 3], [4, 0, 3], [4, 4, 3], [0, 4, 3]];
const elements = [[0, 1, 2, 3]];
const m = (v) => new Map([[0, v]]);
const e2k = mod.exportE2k({
  nodes, elements,
  nodeInputs: {
    supports: new Map(nodes.map((_, i) => [i, [true, true, true, true, true, true]])),
    loads: new Map(),
  },
  elementInputs: {
    elasticities: m(2e7), poissonsRatios: m(0.2), shearModuli: m(8.3e6),
    densities: m(2.4), thicknesses: m(0.2), areas: m(0),
    plateFormulations: m(1),
    // F11 F22 F12 M11 M22 M12 V13 V23 — los de ETABS, en su orden
    shellModifiers: new Map([[0, [0.7, 0.8, 0.9, 0.25, 0.35, 0.45, 0.6, 0.5]]]),
  },
  title: "losa con modificadores", units: { force: "Tonf", length: "m" },
  weightMode: "manual",
});
writeFileSync(salida, e2k, "utf-8");
console.log("-> " + salida);
console.log((e2k.match(/^\s*SHELLPROP.*$/gm) ?? []).join("\n"));
