/**
 * A que PATRON van las cargas aplicadas en el .e2k exportado.
 *
 * Iban siempre al patron de gravedad, o sea a "Dead" — que ademas lleva
 * `SELFWEIGHT 1`. Dos consecuencias, y las dos son errores de ingenieria:
 *
 *   1. El caso Dead suma el peso propio de la estructura MAS las cargas
 *      aplicadas encima. Dead es el peso de la estructura; una sobrecarga de
 *      uso no lo es.
 *   2. El caso Live sale VACIO. Comprobado abriendo el e2k en ETABS:
 *      «3-D View - Displacements (Live) [mm]» con Ux = Uy = Uz = 0.000 en
 *      todos los nudos.
 *
 * Se comprueba sobre el TEXTO del e2k, que es lo que lee ETABS: a que `LC`
 * quedan colgadas las cargas, y que el caso Live exista y apunte a su patron.
 */
import { empaquetar, R } from "../lib/bundle.mjs";

export const nombre = "e2k-patron-carga";
export const descripcion =
  "las cargas aplicadas se pueden separar del peso propio (Dead) y mandarse a Live";

const cargar = () =>
  empaquetar(`export { exportE2k } from "${R}/examples/src/shared/e2kExporter";\n`, "e2kPat");

/** Portico minimo: 4 nudos, 2 columnas y 1 viga, con carga vertical arriba. */
function modelo() {
  const nodes = [[0, 0, 0], [0, 0, 3], [5, 0, 3], [5, 0, 0]];
  const elements = [[0, 1], [1, 2], [2, 3]];
  const m = (v) => new Map(elements.map((_, i) => [i, v]));
  return {
    nodes, elements,
    nodeInputs: {
      supports: new Map([[0, [true, true, true, true, true, true]],
                         [3, [true, true, true, true, true, true]]]),
      loads: new Map([[1, [0, 0, -25, 0, 0, 0]], [2, [0, 0, -25, 0, 0, 0]]]),
    },
    elementInputs: {
      elasticities: m(2e7), areas: m(0.09), momentsOfInertiaY: m(6.75e-4),
      momentsOfInertiaZ: m(6.75e-4), torsionalConstants: m(1.1e-3),
      shearModuli: m(8.3e6), densities: m(2.4),
    },
    units: { force: "Tonf", length: "m" },
  };
}

/** Lineas POINTLOAD con su patron (`LC "..."`). */
const patronesDeCarga = (e2k) =>
  (e2k.match(/^\s*POINTLOAD\s.*$/gm) ?? [])
    .map((l) => (l.match(/LC\s+"([^"]+)"/) ?? [])[1])
    .filter(Boolean);

export async function correr() {
  const { exportE2k } = await cargar();
  const filas = [];

  // ── Por defecto: como siempre, todo a Dead ────────────────────────────────
  // En modo "auto" la carga vertical se OMITE a proposito: se da por hecho que
  // es el peso propio y ETABS ya lo mete por `SELFWEIGHT 1`. Lo que se
  // comprueba es que ese comportamiento NO haya cambiado.
  const porDefecto = exportE2k({ ...modelo(), title: "patron por defecto" });
  const pd = patronesDeCarga(porDefecto);
  filas.push({
    que: "en auto + Dead la FZ se sigue omitiendo (la pone SELFWEIGHT)", crudo: true,
    medido: pd.length ? [...new Set(pd)].join(",") : "ninguna",
    limite: "ninguna", ok: pd.length === 0,
    detalle: "no se cambia lo ya exportado y validado contra ETABS",
  });
  // Y en modo manual, a Dead, salen como siempre.
  const manual = exportE2k({ ...modelo(), title: "manual", weightMode: "manual" });
  const pm = patronesDeCarga(manual);
  filas.push({
    que: "en manual + Dead las cargas van a Dead", crudo: true,
    medido: pm.length ? [...new Set(pm)].join(",") : "ninguna",
    limite: "Dead", ok: pm.length > 0 && pm.every((p) => p === "Dead"),
    detalle: `${pm.length} POINTLOAD`,
  });

  // ── Mandadas a Live ───────────────────────────────────────────────────────
  const aLive = exportE2k({ ...modelo(), title: "a live", loadPatternDestino: "Live" });
  const pl = patronesDeCarga(aLive);
  filas.push({
    que: "con loadPatternDestino las cargas van a Live", crudo: true,
    medido: pl.length ? [...new Set(pl)].join(",") : "sin POINTLOAD",
    limite: "Live", ok: pl.length > 0 && pl.every((p) => p === "Live"),
    detalle: `${pl.length} POINTLOAD colgadas del patron Live`,
  });

  // El caso Live tiene que existir Y apuntar a su patron, o ETABS lo resuelve
  // vacio igual: un patron cargado sin caso que lo use no mueve nada.
  const casoLive = /LOADCASE\s+"Live"\s+LOADPAT\s+"Live"/i.test(aLive);
  filas.push({
    que: "existe el caso Live y usa el patron Live", crudo: true,
    medido: casoLive ? "si" : "no", limite: "si", ok: casoLive,
    detalle: "sin el caso, el patron cargado no lo resuelve nadie",
  });

  // Y Dead tiene que seguir llevando el peso propio: es lo que ES Dead.
  const swDead = /LOADPATTERN\s+"Dead"\s+TYPE\s+"Dead"\s+SELFWEIGHT\s+1/i.test(aLive);
  filas.push({
    que: "Dead conserva el peso propio (SELFWEIGHT 1)", crudo: true,
    medido: swDead ? "si" : "no", limite: "si", ok: swDead,
    detalle: "Dead es el peso de la estructura, no la sobrecarga",
  });

  // ── El PESO PROPIO va SOLO en Dead ────────────────────────────────────────
  // Aunque el modelo pida lo contrario. Un Live con SELFWEIGHT 1 mete el peso
  // de la estructura otra vez y, combinado con Dead, lo cuenta dos veces.
  const forzado = exportE2k({
    ...modelo(), title: "live con peso propio pedido",
    loadPatterns: [{ name: "Dead", type: "Dead", selfWeightMultiplier: 1 },
                   { name: "Live", type: "Live", selfWeightMultiplier: 1 }],
  });
  const swLive = (forzado.match(/LOADPATTERN\s+"Live"[^\r\n]*SELFWEIGHT\s+([\d.]+)/i) ?? [])[1];
  filas.push({
    que: "un Live que pide SELFWEIGHT 1 se exporta con 0", crudo: true,
    medido: swLive ?? "sin patron Live", limite: "0", ok: swLive === "0",
    detalle: "el peso propio es de la estructura: solo va en Dead",
  });
  // Y sigue siendo OPCIONAL en Dead.
  const sinPeso = exportE2k({
    ...modelo(), title: "dead sin peso propio",
    loadPatterns: [{ name: "Dead", type: "Dead", selfWeightMultiplier: 0 }],
  });
  const swDead0 = (sinPeso.match(/LOADPATTERN\s+"Dead"[^\r\n]*SELFWEIGHT\s+([\d.]+)/i) ?? [])[1];
  filas.push({
    que: "en Dead el peso propio se puede apagar", crudo: true,
    medido: swDead0 ?? "sin patron Dead", limite: "0", ok: swDead0 === "0",
    detalle: "opcional, pero es el UNICO sitio donde puede estar",
  });

  // Las cargas NO pueden quedar en los dos sitios a la vez.
  filas.push({
    que: "no quedan cargas duplicadas en Dead", crudo: true,
    medido: pl.filter((p) => p === "Dead").length, limite: 0,
    ok: !pl.some((p) => p === "Dead"),
    detalle: "si estuvieran en los dos, Dead contaria la sobrecarga dos veces",
  });
  return filas;
}
