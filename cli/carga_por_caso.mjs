#!/usr/bin/env node
/**
 * .LLEGA la carga de area a la estructura? Caso por caso y tipo de losa por
 * tipo de losa.
 *
 *   node cli/carga_por_caso.mjs [tipo ...]
 *
 * ## Por que no vale mirar solo DEAD
 *
 * DEAD es el peso propio, y **lo calcula cada programa por su cuenta**: ahi se
 * compara justo lo ambiguo (que pesa un deck, que pesa una nervada). `SDL` y
 * `LIVE` son cargas IMPUESTAS —enlucido, contrapiso, instalaciones, la viva de
 * almacenamiento— identicas en los dos programas y en el fichero. Con ellas la
 * cuenta es cerrada:
 *
 *     SumRz  ==  q x area,  exacto
 *
 * Si no cierra, la carga se perdio por el camino, y eso es un fallo de REPARTO,
 * no de solver. Es el test que de verdad prueba una MEMBRANA: el deck tiene que
 * entregar su carga a las vigas secundarias y el zinc de la cubierta a las
 * correas C. Una membrana que no transmite no se nota en la flecha (sale mas
 * rigida, que parece "mejor"), se nota en la reaccion.
 *
 * El area no se supone: se mide de los POLIGONOS del json, que es la fuente.
 *
 * ## Lo que este test SI prueba y lo que NO
 *
 * SI: que no se pierda carga por el camino. `a_heks.py` avisa si una carga
 * repartida no encuentra barra («se perderian»), y ademas normaliza lo que
 * reparte para que sume lo que toca — asi que en las MEMBRANAS el 0.00 % esta
 * garantizado por construccion salvo que algo se caiga del todo.
 *
 * NO: a QUE barra va cada trozo. Que el total cuadre no dice que el deck
 * cargue las vigas secundarias que le tocan ni el zinc las correas C que le
 * tocan. Eso solo lo dice comparar las FUERZAS DE BARRA contra ETABS, caso a
 * caso — y para eso hace falta regenerar la referencia con `a_etabs.py`, que
 * ya no revienta ahora que los json traen las claves SDL.
 */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { resolverHeks } from "../tests/lib/heks.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const GALPON = join(AQUI, "..", "..", "galpon-bodega-electoral");
const TMP = join(AQUI, "..", "validation", "modelos", "plantillas");

const args = process.argv.slice(2).filter((a, i, v) => a !== "--modelo" && v[i - 1] !== "--modelo");
const TIPOS = args.length ? args : ["deck", "maciza_mem", "maciza_thin", "nervada_1d"];
// Solo los casos SIN peso propio: son los unicos donde `q x area` es una
// cuenta cerrada. DEAD se deja fuera a proposito.
const CASOS = ["SDL", "LIVE", "LROOF"];

/** Carga de cada caso, leida del mismo json que usa el generador. */
// El modelo se elige con --modelo. `parte_mezanine.json` es SOLO el entrepiso:
// no tiene cubierta, asi que LROOF sale 0 y no prueba nada de las correas C.
// Para eso hay que ir al galpon vacio (12 panos de zinc) o al modelo completo.
const iM = process.argv.indexOf("--modelo");
const MODELO = iM > 0 ? process.argv[iM + 1] : "parte_mezanine.json";
const DOC = JSON.parse(readFileSync(join(GALPON, MODELO), "utf-8"));
const C = DOC.cargas;
const Q = {
  SDL:   { ent: C.SDL_entrepiso, cub: C.SDL_cubierta },
  LIVE:  { ent: C.L_entrepiso,   cub: 0 },
  LROOF: { ent: 0,               cub: C.L_cubierta },
};

/**
 * Area de cada capa, medida de los POLIGONOS del json.
 *
 * ⚠️ NO de los Q4 del `.heks`. Una capa que va como MEMBRANA no entra a la
 * matriz y no tiene ni un Q4 que medir: la cubierta salia con area CERO, el
 * esperado de LROOF salia 0.00 y el modelo parecia "perder el -68 %" cuando lo
 * que estaba mal era la vara de medir.
 */
function areasDelJson(doc) {
  const tri = (a, b, c) => {
    const u = [0, 1, 2].map(i => b[i] - a[i]), v = [0, 1, 2].map(i => c[i] - a[i]);
    return 0.5 * Math.hypot(u[1]*v[2]-u[2]*v[1], u[2]*v[0]-u[0]*v[2], u[0]*v[1]-u[1]*v[0]);
  };
  const out = {};
  for (const a of doc.areas ?? []) {
    const q = (a.puntos ?? []).slice(0, 4);
    if (q.length < 3) continue;
    out[a.capa] = (out[a.capa] ?? 0) + tri(q[0], q[1], q[2]) +
                  (q.length === 4 ? tri(q[0], q[2], q[3]) : 0);
  }
  return out;
}

console.log("Modelo: %s", MODELO);
console.log("Cargas del json:  SDL ent %s / cub %s   ·   LIVE ent %s   ·   LROOF cub %s  [kN/m2]",
  C.SDL_entrepiso, C.SDL_cubierta, C.L_entrepiso, C.L_cubierta);
console.log("\ntipo           caso    SumRz [kN]   esperado    dif       .transmite?");
console.log("-".repeat(78));

const filas = [];
for (const tipo of TIPOS) {
  for (const caso of CASOS) {
    const heks = join(TMP, `_carga_${tipo}_${caso}.heks`);
    execFileSync("python", ["a_heks.py", MODELO, heks, "--losa", tipo],
                 { cwd: GALPON, stdio: "pipe", env: { ...process.env, CASO: caso } });
    const r = await resolverHeks(heks);
    let rz = 0;
    for (const [, v] of (r.deformOutputs?.reactions ?? [])) rz += v[2] || 0;
    filas.push({ tipo, caso, rz });
  }
}
const AREA = areasDelJson(DOC);
const aEnt = (AREA["SHELL-LOSA"] ?? 0) + (AREA["SHELL-RAMPA"] ?? 0);
const aCub = AREA["SHELL-CUBIERTA"] ?? 0;
console.log("Areas del json:   entrepiso+rampa " + aEnt.toFixed(1) +
            " m2   ·   cubierta " + aCub.toFixed(1) + " m2");
for (const f of filas) {
  const esp = Q[f.caso].ent * aEnt + Q[f.caso].cub * aCub;
  const dif = esp ? 100 * Math.abs(f.rz - esp) / esp : 0;
  console.log(`${f.tipo.padEnd(14)} ${f.caso.padEnd(6)} ${f.rz.toFixed(2).padStart(10)} ` +
    `${esp.toFixed(2).padStart(11)} ${(dif.toFixed(2) + " %").padStart(8)}   ` +
    (dif < 0.5 ? "si" : dif > 99 ? "NO LLEGA NADA" : `se pierde el ${(100 - 100 * f.rz / esp).toFixed(1)} %`));
}
