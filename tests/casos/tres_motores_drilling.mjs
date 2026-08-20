/**
 * Los TRES motores tienen que dar el mismo elemento, en las CINCO formulaciones.
 *
 * La cadena de trabajo es Python → C++ nativo → WASM, y cada eslabón se rompe de
 * una forma distinta:
 *
 *   Python ↔ C++    lo cubre `test_kelem_cpp_vs_python.py`, comparando la MATRIZ
 *                   término a término (que es lo que dice DÓNDE está el fallo).
 *   C++ ↔ WASM      lo cubre este caso: mismo `.cpp`, dos compiladores. Que sean
 *                   el mismo fuente no basta — emscripten puede reordenar coma
 *                   flotante, y sobre todo el `.wasm` está VERSIONADO en git, así
 *                   que es perfectamente posible tocar el `.cpp` y olvidarse de
 *                   recompilar. Ahí el WASM se queda con la formulación vieja y
 *                   NADA avisa.
 *
 * Justo eso pasó el 19-ago-2026 con `drillingTypes = 7`: el C++ ya lo tenía y el
 * WASM no, y como el defecto no había cambiado, los 165 casos seguían en verde.
 *
 * Se comparan las cinco formulaciones porque el defecto es UNA sola y las otras
 * cuatro no las toca ningún otro caso: sin esto, cualquiera de ellas puede
 * pudrirse en silencio hasta el día en que se cambie el defecto.
 *
 * Cómo se compara, ya que el WASM no expone la K del elemento: se resuelve el
 * MISMO elemento con las mismas cargas y apoyos por los dos caminos —
 * `kelem_native.exe` da la K y aquí se resuelve el sistema reducido; el WASM
 * resuelve con `deform`— y se contrastan los desplazamientos.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { empaquetar, R } from "../lib/bundle.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const EXE = join(AQUI, "..", "..", "cli", "native", "kelem_native.exe");

const E = 2.2e7, NU = 0.2, T = 0.2;
// un trapecio: geometría distorsionada, que es donde las formulaciones se separan
const PTS = [[0, 0], [2, 0], [1.5, 1], [0.25, 1]];
const TIPOS = [
  [3, "ITW 1990 (defecto)"],
  [2, "Hughes-Brezzi"],
  [7, "regla de 8 (ITW 1991)"],
  [8, "proyección (FEAP)"],
  [9, "proyección + regla de 8"],
];

/** K 24×24 del elemento, del binario nativo. */
function kNativa(tipo) {
  const args = [];
  for (const [x, y] of PTS) args.push(String(x), String(y), "0");
  args.push(String(E), String(NU), String(T), String(tipo), "0.4");
  return execFileSync(EXE, args, { encoding: "utf-8" })
    .trim().split("\n").map((l) => l.trim().split(/\s+/).map(Number));
}

/** Resuelve K·u = f eliminando los GDL sujetos (nunca con penalty: contamina). */
function resolver(K, sujetos, f) {
  const n = K.length;
  const libres = [];
  for (let i = 0; i < n; i++) if (!sujetos.has(i)) libres.push(i);
  const m = libres.length;
  const A = libres.map((i) => libres.map((j) => K[i][j]));
  const b = libres.map((i) => f[i] ?? 0);
  for (let c = 0; c < m; c++) {                       // Gauss con pivoteo parcial
    let p = c;
    for (let r = c + 1; r < m; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
    [A[c], A[p]] = [A[p], A[c]]; [b[c], b[p]] = [b[p], b[c]];
    for (let r = c + 1; r < m; r++) {
      const k = A[r][c] / A[c][c];
      if (!k) continue;
      for (let j = c; j < m; j++) A[r][j] -= k * A[c][j];
      b[r] -= k * b[c];
    }
  }
  const x = new Array(m).fill(0);
  for (let r = m - 1; r >= 0; r--) {
    let s = b[r];
    for (let j = r + 1; j < m; j++) s -= A[r][j] * x[j];
    x[r] = s / A[r][r];
  }
  const u = new Array(n).fill(0);
  libres.forEach((g, k) => { u[g] = x[k]; });
  return u;
}

export const nombre = "tres-motores-drilling";
export const descripcion =
  "C++ nativo y WASM dan el mismo elemento en las 5 formulaciones de drilling";

export async function correr() {
  if (!existsSync(EXE)) {
    return [{
      que: "kelem_native.exe compilado", medido: 1, limite: 0, ok: false,
      detalle: "falta — correr `bash cli/native/build_kelem_native.sh`",
    }];
  }
  const { deform } = await empaquetar(
    `export { deform } from "${R}/hekatan-fem/src/index";\n`, "tres-motores");

  // nudos 0 y 3 empotrados; carga unidad en el nudo 1, en x y en el giro normal
  const sujetos = new Set();
  for (const nudo of [0, 3]) for (let k = 0; k < 6; k++) sujetos.add(6 * nudo + k);
  const f = new Array(24).fill(0);
  f[6 * 1 + 0] = 1000;      // Fx en el nudo 1
  f[6 * 1 + 5] = 500;       // Mz (el drilling) en el nudo 1 — lo que se quiere medir

  const nodes = PTS.map(([x, y]) => [x, y, 0]);
  const elements = [[0, 1, 2, 3]];
  const supports = new Map([[0, [true, true, true, true, true, true]],
                            [3, [true, true, true, true, true, true]]]);
  const loads = new Map([[1, [1000, 0, 0, 0, 0, 500]]]);

  const filas = [];
  for (const [tipo, etiqueta] of TIPOS) {
    const uCpp = resolver(kNativa(tipo), sujetos, f);

    const mapa = (v) => new Map([[0, v]]);
    const d = deform(nodes, elements, { supports, loads }, {
      thicknesses: mapa(T), elasticities: mapa(E), poissonsRatios: mapa(NU),
      densities: mapa(0), drillingTypes: mapa(tipo), drillingPenaltyScales: mapa(0.4),
    });
    const w = d.deformations?.get(1);

    // el Ux y el giro normal del nudo cargado, por los dos caminos
    const pares = [[uCpp[6 * 1 + 0], w?.[0], "Ux"], [uCpp[6 * 1 + 5], w?.[5], "Rz"]];
    let peor = 0, det = [];
    for (const [a, b, nom] of pares) {
      const e = Math.abs(a) > 1e-14 ? Math.abs(b / a - 1) * 100 : Math.abs(b ?? 0);
      peor = Math.max(peor, e);
      det.push(`${nom} ${a.toExponential(4)} vs ${(b ?? NaN).toExponential(4)}`);
    }
    filas.push({
      que: `tipo ${tipo} — ${etiqueta}: C++ nativo = WASM`,
      medido: peor, limite: 1e-6, ok: peor <= 1e-6,
      detalle: det.join(" · "),
    });
  }
  return filas;
}
