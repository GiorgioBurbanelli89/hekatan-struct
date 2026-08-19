/**
 * El motor del repo, para los scripts de `cli/`.
 *
 * Por que existe: el CLI llamaba a `_deform` del WASM **a mano**, armando los
 * punteros uno por uno. Esa firma ha ido creciendo (áreas de cortante, muelles
 * de Winkler, formulación de placa, tipo de drilling, modificadores de
 * propiedad, releases...) y el CLI se quedó parado:
 *
 *     `_deform` en C++ pide   111 parámetros
 *     el CLI pasaba            43
 *
 * Resultado: `RuntimeError: memory access out of bounds` en cuanto se le pedía
 * resolver cualquier cosa. El CLI llevaba roto sin que nada lo dijera, porque
 * ningún test lo ejecutaba.
 *
 * El arreglo no es volver a contar los 111 punteros —eso se rompe otra vez a la
 * próxima— sino entrar por LA MISMA PUERTA que la app: `deform` de
 * `hekatan-fem`, que es quien sabe rellenar esa firma y se actualiza con ella.
 * Se empaqueta el TypeScript con esbuild al vuelo, igual que hace
 * `tests/lib/bundle.mjs`.
 */
import { writeFileSync, mkdtempSync, copyFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const AQUI = dirname(fileURLToPath(import.meta.url));
export const RAIZ = join(AQUI, "..", "..");

let cache = null;

/** `{ deform, analyze, modalAnalysis, ... }` — el paquete entero. */
export async function motor() {
  if (cache) return cache;
  const { build } = await import(
    pathToFileURL(join(RAIZ, "node_modules/esbuild/lib/main.js")).href);
  const dir = mkdtempSync(join(tmpdir(), "hkCli-"));
  const R = RAIZ.replace(/\\/g, "/");
  writeFileSync(join(dir, "entry.ts"), `export * from "${R}/hekatan-fem/src/index";\n`, "utf-8");
  // el módulo de emscripten busca el .wasm junto a sí mismo
  const wasm = join(RAIZ, "hekatan-fem/src/cpp/built/deform.wasm");
  if (!existsSync(wasm)) throw new Error("falta " + wasm + " — compilar el WASM primero");
  copyFileSync(wasm, join(dir, "deform.wasm"));
  const outfile = join(dir, "bundle.mjs");
  await build({ entryPoints: [join(dir, "entry.ts")], bundle: true, format: "esm",
                platform: "node", outfile, logLevel: "error" });
  cache = await import(pathToFileURL(outfile).href);
  return cache;
}
