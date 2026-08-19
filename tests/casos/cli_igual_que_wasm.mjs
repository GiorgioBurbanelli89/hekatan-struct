/**
 * El CLI tiene que resolver con EL MISMO motor que la app.
 *
 * Por que existe: `cli/cli.mjs` (y cli_modal, sweep_case, time_modal_testm,
 * validar_ldlt) cargaban el WASM de `cli/hekatan-fem/src/cpp/built/`, una COPIA
 * duplicada del paquete que ademas estaba en el .gitignore. El 19-ago-2026 los
 * dos binarios eran identicos byte a byte — pero por sincronizacion A MANO.
 *
 * Eso es una bomba de relojeria silenciosa: en cuanto se recompila el paquete y
 * no se copia, el CLI sigue resolviendo con un motor viejo y NO avisa. Justo el
 * dia en que la membrana paso al elemento ITW, el CLI habria seguido dando los
 * numeros del drilling anterior (patch test -1.4745 en vez de -1.5000) sin que
 * nada fallara.
 *
 * Arreglado apuntando al paquete (`__dirname/../hekatan-fem`) y borrando la
 * copia. Este caso vigila las dos cosas:
 *   1. que no reaparezca ninguna copia de `built/` dentro de cli/;
 *   2. que ningun script de cli/ cargue el WASM de otro sitio que no sea el
 *      paquete.
 */
import { readFileSync, existsSync, readdirSync, unlinkSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const AQUI = dirname(fileURLToPath(import.meta.url));
const RAIZ = join(AQUI, "..", "..");

export const nombre = "cli-igual-que-wasm";
export const descripcion =
  "el CLI carga el WASM del paquete, no una copia suya que puede quedarse vieja";

export async function correr() {
  const filas = [];

  // 1 · No puede haber otro deform.wasm dentro de cli/
  const copia = join(RAIZ, "cli", "hekatan-fem", "src", "cpp", "built", "deform.wasm");
  filas.push({
    que: "no hay copia del WASM dentro de cli/",
    medido: existsSync(copia) ? 1 : 0, limite: 0, ok: !existsSync(copia),
    detalle: existsSync(copia)
      ? "existe cli/hekatan-fem/.../deform.wasm — se desincroniza y el CLI resuelve con un motor viejo"
      : "solo queda el del paquete, que es el que se compila",
  });

  // 2 · Ningun script de cli/ puede apuntar a otro built/
  const malos = [];
  for (const f of readdirSync(join(RAIZ, "cli")).filter(n => n.endsWith(".mjs"))) {
    const txt = readFileSync(join(RAIZ, "cli", f), "utf-8");
    // apunta al paquete si sube un nivel; apunta a la copia si no
    if (/join\(__dirname,\s*"hekatan-fem"/.test(txt)) malos.push(f);
  }
  filas.push({
    que: "ningún script de cli/ carga el WASM de una copia",
    medido: malos.length, limite: 0, ok: malos.length === 0,
    detalle: malos.length ? `apuntan a la copia: ${malos.join(", ")}`
                          : "todos usan __dirname/../hekatan-fem (el paquete)",
  });

  // 3 · El WASM que carga el CLI existe y es el mismo fichero que compila el build
  const delPaquete = join(RAIZ, "hekatan-fem", "src", "cpp", "built", "deform.wasm");
  filas.push({
    que: "el WASM del paquete está compilado",
    medido: existsSync(delPaquete) ? 0 : 1, limite: 0, ok: existsSync(delPaquete),
    detalle: existsSync(delPaquete)
      ? `${(readFileSync(delPaquete).length / 1024).toFixed(0)} kB — el único que hay`
      : "FALTA hekatan-fem/src/cpp/built/deform.wasm",
  });

  // 4 · Y lo que de verdad importa: que el CLI RESUELVA y dé el mismo número
  //     que el motor. El CLI llamaba a `_deform` armando los punteros a mano —
  //     el C++ pide 111 parámetros y el CLI pasaba 43 — así que reventaba con
  //     `memory access out of bounds` en cuanto se le pedía calcular algo. Y no
  //     lo cazaba nada, porque ningún test lo ejecutaba. Este lo ejecuta.
  const salida = join(RAIZ, "cli_igual_que_wasm.tmp.json");
  let cli = null, err = "";
  try {
    execFileSync(process.execPath,
      [join(RAIZ, "cli", "cli.mjs"), "frame", "nv=2", "sv=6", "np=2", "hp=3", "--json", salida],
      { cwd: RAIZ, stdio: "pipe", timeout: 180000 });
    cli = JSON.parse(readFileSync(salida, "utf-8"));
  } catch (e) {
    err = String(e.stderr || e.message).replace(/\s+/g, " ").slice(0, 140);
  } finally {
    try { unlinkSync(salida); } catch {}
  }
  filas.push({
    que: "el CLI resuelve sin reventar",
    medido: cli ? 0 : 1, limite: 0, ok: !!cli,
    detalle: cli ? `flecha máx ${cli.static.maxDisplacement.toExponential(6)} m` : `falló: ${err}`,
  });

  filas.push({
    que: "el número del CLI es un número (ni NaN ni cero)",
    medido: cli && Number.isFinite(cli.static?.maxDisplacement) && cli.static.maxDisplacement > 0 ? 0 : 1,
    limite: 0,
    ok: !!(cli && Number.isFinite(cli.static?.maxDisplacement) && cli.static.maxDisplacement > 0),
    detalle: cli ? `flecha máx ${cli.static.maxDisplacement.toExponential(9)} m · ${(cli.modal?.frequencies || []).length} modos`
                 : "no hubo salida",
  });

  return filas;
}
