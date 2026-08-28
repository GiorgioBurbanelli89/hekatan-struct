/**
 * LOS RELEASES DE BARRA, en el caso mas pequeno que los usa.
 *
 * Vienen de una sospecha con nombre: un modelo real de ETABS con 322 releases
 * devolvia desplazamientos de 1e15 mm, y quitando `momentReleases` bajaba once
 * ordenes de magnitud. Y el muro de largueros, con releases puestos, devolvia
 * los 36 nudos a CERO — no fallaba, no avisaba, devolvia ceros.
 *
 * Un modelo de 800 nudos no sirve para saber si eso es el solver o el modelo.
 * Esto es una VIGA. Si la viga cuadra, el problema esta en el modelo grande; si
 * no cuadra, esta aqui y no hay que seguir biseccionando nada.
 *
 * Las referencias son de resistencia de materiales, exactas, y NO dependen de
 * ningun programa:
 *
 *   biempotrada  bajo q     f = q L⁴ / (384 E I)
 *   biarticulada bajo q     f = 5 q L⁴ / (384 E I)          <- 5 veces mas
 *   voladizo     bajo P     f = P L³ / (3 E I)
 *
 * La biarticulada se consigue liberando `M3I` y `M3J`, que es exactamente lo
 * que escribe ETABS en su `RELEASE`. Que salga 5x la biempotrada es la prueba
 * de que el release SE APLICA; que salga igual, de que se ignora; y que salga
 * cero, de que la condensacion esta rota.
 */
import { empaquetar, R } from "../lib/bundle.mjs";

export const nombre = "frame-releases";
export const descripcion =
  "una viga con M3I/M3J liberados tiene que flectar 5x la biempotrada, ni 1x ni 0";

const FUENTE = `
const g = globalThis; g.window = g;
g.document = { createElement: () => ({ style:{}, getContext:()=>null }), body:{}, head:{},
  querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){} });
const { deform } = await import("${R}/hekatan-fem/src/index");

/**
 * Viga de luz L discretizada en n tramos, apoyada en los dos extremos con los
 * seis GDL coartados, carga puntual repartida a los nudos interiores.
 *
 * \`releases\` = lista de nombres a liberar en LA VIGA ENTERA: el de la cara I
 * va en el primer tramo y el de la J en el ultimo, que es lo unico correcto —
 * repetirlos en cada tramo serian rotulas internas de mas.
 */
export function viga(n, releases, opciones = {}, E = 2.1e8, I = 8.33e-6, A = 0.01, L = 6, qTot = 60) {
  const nodes = [];
  for (let i = 0; i <= n; i++) nodes.push([i * L / n, 0, 0]);
  const elements = [];
  for (let i = 0; i < n; i++) elements.push([i, i + 1]);

  const M = (v) => { const m = new Map(); for (let i = 0; i < n; i++) m.set(i, v); return m; };
  const IDX = { PI:0, V2I:1, V3I:2, TI:3, M2I:4, M3I:5,
                PJ:6, V2J:7, V3J:8, TJ:9, M2J:10, M3J:11 };
  const rel = new Map();
  // La opcion enCadaTramo repite el release en TODOS los tramos, que es lo que
  // hacia el muro de largueros. No es lo mismo que una viga biarticulada: son
  // rotulas INTERNAS, una por nudo, o sea una cadena — un mecanismo de verdad.
  const cada = !!opciones.enCadaTramo;
  if (releases.length) {
    for (let i = 0; i < n; i++) {
      const r = new Array(12).fill(false);
      let algo = false;
      for (const nom of releases) {
        const k = IDX[nom];
        if (k === undefined) continue;
        if (!cada && k < 6 && i !== 0) continue;        // la cara I solo en el primer tramo
        if (!cada && k >= 6 && i !== n - 1) continue;   // la cara J solo en el ultimo
        r[k] = true; algo = true;
      }
      if (algo) rel.set(i, r);
    }
  }

  const supports = new Map();
  // Apoyos de extremo: los seis GDL. Asi la diferencia entre biempotrada y
  // biarticulada la pone SOLO el release, que es lo que se quiere medir.
  supports.set(0, [true,true,true,true,true,true]);
  supports.set(n, [true,true,true,true,true,true]);
  // Fuera del plano y torsion, coartados en todos: es una viga plana.
  //
  // La opcion coartarGiros ademas fija RY, que es el giro EN EL QUE FLECTA. Es la
  // combinacion del muro de largueros: releases de momento y el giro del nudo
  // coartado a la vez. Si el solver flaquea ahi, es ahi.
  const gy = !!opciones.coartarGiros;
  for (let i = 1; i < n; i++) supports.set(i, [false,true,false,true,gy,true]);

  const loads = new Map();
  for (let i = 1; i < n; i++) loads.set(i, [0, 0, -qTot / (n - 1), 0, 0, 0]);

  const ei = { elasticities: M(E), shearModuli: M(E / 2.6),
    poissonsRatios: M(0.3), densities: M(0), areas: M(A),
    // Area de cortante enorme: se quiere Euler-Bernoulli puro para poder
    // comparar con la formula, sin el termino de Timoshenko.
    shearAreasY: M(A * 1e6), shearAreasZ: M(A * 1e6),
    momentsOfInertiaY: M(I), momentsOfInertiaZ: M(I), torsionalConstants: M(I),
    momentReleases: rel };

  const d = deform(nodes, elements, { supports, loads }, ei);
  let uz = 0, nDef = d?.deformations?.size ?? 0;
  for (const [, v] of (d?.deformations ?? [])) if (v[2] < uz) uz = v[2];
  return { uz, nDef, nNudos: nodes.length };
}`;

export async function correr() {
  const { viga } = await empaquetar(FUENTE, "frame-releases");
  const filas = [];
  const rel = (a, b) => (Math.abs(b) > 1e-14 ? Math.abs(a - b) / Math.abs(b) * 100 : Math.abs(a) * 100);

  // La carga se aplica en nudos, no repartida, asi que la flecha no es
  // exactamente la de la formula: con 8 tramos la diferencia es de decimas. Lo
  // que NO cambia es la RAZON entre las dos, que es 5 exacto.
  const n = 8;
  const emp = viga(n, []);
  const art = viga(n, ["M3I", "M3J"]);

  filas.push({ que: "biempotrada · resuelve y flecta", crudo: true,
    medido: (emp.uz * 1000).toFixed(4) + " mm", limite: "< 0", ok: emp.uz < 0,
    detalle: `${emp.nDef}/${emp.nNudos} nudos con desplazamiento` });

  filas.push({ que: "biarticulada · resuelve y flecta (NO cero)", crudo: true,
    medido: (art.uz * 1000).toFixed(4) + " mm", limite: "< 0", ok: art.uz < 0,
    detalle: art.uz === 0
      ? "CERO: la condensacion del release deja el sistema sin resolver y no avisa"
      : `${art.nDef}/${art.nNudos} nudos con desplazamiento` });

  const razon = emp.uz !== 0 ? art.uz / emp.uz : 0;
  filas.push({ que: "la biarticulada flecta 5x la biempotrada",
    medido: +rel(razon, 5).toFixed(3), limite: 3,
    ok: rel(razon, 5) < 3,
    detalle: `razon = ${razon.toFixed(4)} — si sale 1 el release SE IGNORA; ` +
             `si sale 0 la condensacion esta rota` });

  // Y con la torsion liberada en UNA cara: la barra se queda sin rigidez
  // torsional en las DOS, pero la flexion no tiene que cambiar nada.
  const tors = viga(n, ["TI"]);
  filas.push({ que: "liberar TI no toca la flexion", medido: +rel(tors.uz, emp.uz).toFixed(3),
    limite: 0.01, ok: rel(tors.uz, emp.uz) < 0.01,
    detalle: `${(tors.uz * 1000).toFixed(4)} mm vs ${(emp.uz * 1000).toFixed(4)} de la biempotrada` });

  // El juego COMPLETO que trae el modelo real: `TI M2I M2J M3I M3J`.
  const real = viga(n, ["TI", "M2I", "M2J", "M3I", "M3J"]);
  filas.push({ que: "el juego del modelo real (TI M2I M2J M3I M3J) resuelve", crudo: true,
    medido: (real.uz * 1000).toFixed(4) + " mm", limite: "< 0", ok: real.uz < 0,
    detalle: "es el RELEASE literal de las vigas secundarias del edificio importado" });

  // ── La combinacion del MURO DE LARGUEROS ──
  //
  // Alli las barras llevaban los momentos liberados en las dos caras Y todos
  // los giros de los nudos coartados, y `deform` devolvia los 36 nudos a CERO.
  // Se reproduce aqui: si con el giro coartado la viga deja de flectar, eso es
  // el fallo, y esta en el solver. Si sigue flectando, el fallo estaba en como
  // se monto aquel modelo y no aqui.
  const conGiro = viga(n, ["M3I", "M3J"], { coartarGiros: true });
  filas.push({ que: "release + el giro del nudo COARTADO: sigue flectando", crudo: true,
    medido: (conGiro.uz * 1000).toFixed(4) + " mm", limite: "< 0", ok: conGiro.uz < 0,
    detalle: conGiro.uz === 0
      ? "CERO: coartar el giro donde hay un release deja el sistema sin resolver"
      : "coartar RY no impide flectar en Z porque la viga tiene sus rotulas" });

  // Y el caso de verdad del muro: los momentos liberados en CADA tramo, no solo
  // en las caras de la viga entera. Eso son rotulas internas — un MECANISMO— y
  // el programa tiene que decirlo, no devolver ceros en silencio.
  // ── El caso EXACTO del muro: rotulas en CADA tramo ──
  //
  // Repetir el release en todos los tramos no es una viga biarticulada: es una
  // cadena de barras unidas por rotulas, o sea un MECANISMO. Lo correcto es que
  // no resuelva, o que avise. Devolver ceros en silencio es lo peor de los tres
  // — parece un resultado.
  const cadena = viga(n, ["M3I", "M3J"], { enCadaTramo: true });
  // ⚠️ PENDIENTE, y con el motivo medido. Hoy devuelve los 9 nudos a CERO.
  //
  // Y no es que resuelva mal: `getZerosIndices` de `deform.cpp` ELIMINA los GDL
  // sin rigidez y les pone 0, que es lo mismo que hace ETABS. Con rotulas en
  // cada tramo la cadena no tiene rigidez vertical, asi que TODOS los Uz son
  // mecanismo, todos se eliminan, y con ellos se va la carga. El resultado es
  // correcto para el sistema que queda; lo que falta es que lo DIGA.
  //
  // Mientras `deform` no devuelva cuantos GDL elimino, el aviso lo da
  // `buscarMecanismos` (`e2kMecanismos.ts`), que lo ve por geometria antes de
  // resolver. El limite de este caso es «que no empeore»: si algun dia esto
  // deja de dar ceros hay que venir aqui y contar por que.
  filas.push({ que: "rotulas en CADA tramo = mecanismo [PENDIENTE, ver cabecera]",
    crudo: true,
    medido: cadena.uz === 0 ? "0 (los GDL se eliminan)" : (cadena.uz * 1000).toFixed(4) + " mm",
    limite: "0 (los GDL se eliminan)", ok: cadena.nDef > 0 && cadena.uz === 0,
    detalle: `${cadena.nDef}/${cadena.nNudos} nudos a cero — el solver los elimina ` +
             `y con ellos la carga, sin decirlo. El aviso lo da buscarMecanismos.` });

  return filas;
}
