/**
 * ORACULO WASM: el mismo formato de casos que `oraculo_ts.mjs`, pero por el
 * `index.ts` de hekatan-fem, que es el que usa el modulo **WASM compilado del
 * C++** — o sea, el motor que da los numeros del PRODUCTO.
 *
 * Hacen falta los dos porque NO dicen lo mismo: `shellQ4.ts` mete los modos
 * incompatibles de Wilson solo en la membrana y `shellQ4.cpp` tambien en la
 * flexion. En una losa 4x4 con carga puntual eso son 1.8 %.
 *
 *   node oraculo_wasm.mjs casos.json salida.json
 */
import { writeFileSync, readFileSync, mkdtempSync, copyFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const AQUI = dirname(fileURLToPath(import.meta.url));
const RAIZ = join(AQUI, "..", "..");             // .../hekatan-struct
const R = RAIZ.replace(/\\/g, "/");

const { build } = await import(
  pathToFileURL(join(RAIZ, "node_modules/esbuild/lib/main.js")).href
);
const dir = mkdtempSync(join(tmpdir(), "oraculoWASM-"));
writeFileSync(
  join(dir, "entry.ts"),
  `export { deform, analyze } from "${R}/hekatan-fem/src/index";
`,
  "utf-8"
);
// El modulo de emscripten busca el .wasm JUNTO a si mismo: sin esta copia,
// `deformCpp` revienta con ENOENT y el oraculo se salta en silencio.
const wasm = join(RAIZ, "hekatan-fem/src/cpp/built/deform.wasm");
if (!existsSync(wasm)) { console.error("falta " + wasm + " - compilar el WASM"); process.exit(2); }
copyFileSync(wasm, join(dir, "deform.wasm"));
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
                   "rigidOffsets", "insertionPoints"]) {
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
console.log(`oraculo WASM: ${Object.keys(salida).length} casos -> ${process.argv[3]}`);
