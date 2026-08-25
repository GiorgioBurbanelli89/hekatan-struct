/**
 * ORACULO: corre el TS puro de hekatan-fem (deform + analyze, SIN WASM) sobre
 * los casos de un JSON y escribe los resultados en otro JSON.
 *
 * Para que: el motor de Python dice reproducir al de TS. "Dice" no vale. Esto
 * hace que los dos resuelvan EXACTAMENTE el mismo caso y deja los numeros en
 * disco para que pytest los compare. Si el port esta mal, sale aqui.
 *
 * Se empaqueta `deform.ts`/`analyze.ts` a proposito, NO `index.ts`: index
 * arrastra el modulo WASM y el objetivo es medir la formulacion en TypeScript,
 * que es la que se porto.
 *
 *   node oraculo_ts.mjs casos.json salida.json
 */
import { writeFileSync, readFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const AQUI = dirname(fileURLToPath(import.meta.url));
const RAIZ = join(AQUI, "..", "..");             // .../hekatan-struct
const R = RAIZ.replace(/\\/g, "/");

const { build } = await import(
  pathToFileURL(join(RAIZ, "node_modules/esbuild/lib/main.js")).href
);
const dir = mkdtempSync(join(tmpdir(), "oraculoTS-"));
writeFileSync(
  join(dir, "entry.ts"),
  `export { deform } from "${R}/hekatan-fem/src/deform";\n` +
  `export { analyze } from "${R}/hekatan-fem/src/analyze";\n`,
  "utf-8"
);
const outfile = join(dir, "bundle.mjs");
await build({ entryPoints: [join(dir, "entry.ts")], bundle: true, format: "esm",
              platform: "node", outfile, logLevel: "error" });
const { deform, analyze } = await import(pathToFileURL(outfile).href);

const mapa = (o) => {
  const m = new Map();
  if (o) for (const [k, v] of Object.entries(o)) m.set(Number(k), v);
  return m;
};

const casos = JSON.parse(readFileSync(process.argv[2], "utf-8"));
const salida = {};

for (const [nombre, c] of Object.entries(casos)) {
  const nodeInputs = { supports: mapa(c.supports), loads: mapa(c.loads) };
  const elementInputs = {};
  for (const k of ["elasticities", "shearModuli", "areas", "momentsOfInertiaZ",
                   "momentsOfInertiaY", "torsionalConstants", "poissonsRatios",
                   "densities", "shearAreasY", "shearAreasZ", "localAngles",
                   "thicknesses", "momentReleases", "partialFixitySprings",
                   "rigidOffsets", "endOffsets", "insertionPoints"]) {
    if (c[k]) elementInputs[k] = mapa(c[k]);
  }
  const out = deform(c.nodes, c.elements, nodeInputs, elementInputs);
  const d = {}, r = {};
  for (const [i, v] of out.deformations) d[i] = v;
  for (const [i, v] of out.reactions) r[i] = v;

  const res = { deformations: d, reactions: r };
  if (c.analyze) {
    const a = analyze(c.nodes, c.elements, elementInputs, out);
    for (const campo of ["normals", "shearsY", "shearsZ", "torsions",
                         "bendingsY", "bendingsZ"]) {
      if (a?.[campo]) {
        const o = {};
        for (const [i, v] of a[campo]) o[i] = v;
        res[campo] = o;
      }
    }
  }
  salida[nombre] = res;
}

writeFileSync(process.argv[3], JSON.stringify(salida, null, 1), "utf-8");
console.log(`oraculo TS: ${Object.keys(salida).length} casos -> ${process.argv[3]}`);
