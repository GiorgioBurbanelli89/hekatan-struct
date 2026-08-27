/**
 * La PROPIEDAD de la cascara en el .e2k: el tipo y los modificadores.
 *
 * Dos cosas distintas, y las dos viajan en el mismo bloque `SHELLPROP`:
 *
 *   MODELINGTYPE  "ShellThin" | "ShellThick" | "Membrane"
 *   una SEGUNDA linea con el MISMO nombre y solo los factores:
 *     SHELLPROP "Losa"  F11MOD 0.25 ... M11MOD 0.25 ... V23MOD 0.25
 *
 * El formato de la segunda linea NO esta inventado: esta copiado de un `.e2k`
 * escrito por el propio ETABS (`galpon-bodega-electoral/ref_riochico.e2k`), que
 * ademas **omite los factores que valen 1** — «LOSA DE ESCALERA» solo lleva
 * M11MOD/M22MOD/M12MOD.
 *
 * ⚠️ Los modificadores NO se exportaban. Un modelo con la losa fisurada al
 * 25 % (`shellmod`) llegaba a ETABS INTACTA y sin avisar: dos rigideces para el
 * mismo modelo, y la diferencia salia luego en los periodos sin saber de donde.
 * Encontrado el 2026-08-27 revisando las plantillas contra ETABS 22.
 */
import { empaquetar, R } from "../lib/bundle.mjs";

export const nombre = "e2k-shell-props";
export const descripcion =
  "tipo de cascara (Thin/Thick/Membrane) y modificadores viajan en el .e2k";

const cargar = () =>
  empaquetar(`export { exportE2k } from "${R}/examples/src/shared/e2kExporter";\n`, "e2kShell");

/** Una losa de 2x2 cuadrada sobre cuatro apoyos, un solo shell Q4. */
function modelo(extra = {}) {
  const nodes = [[0, 0, 3], [4, 0, 3], [4, 4, 3], [0, 4, 3]];
  const elements = [[0, 1, 2, 3]];
  const m = (v) => new Map([[0, v]]);
  return {
    nodes, elements,
    nodeInputs: {
      supports: new Map(nodes.map((_, i) => [i, [true, true, true, true, true, true]])),
      loads: new Map(),
    },
    elementInputs: {
      elasticities: m(2e7), poissonsRatios: m(0.2), shearModuli: m(8.3e6),
      densities: m(2.4), thicknesses: m(0.2), areas: m(0), ...extra,
    },
    units: { force: "Tonf", length: "m" },
  };
}

/**
 * La segunda linea SHELLPROP (la de los MOD) de una propiedad. Se ancla en que
 * EMPIEZA por un token de modificador; un `(?!PROPTYPE)` no vale, porque el
 * `\s+` de delante hace backtracking y deja pasar la linea de la propiedad.
 */
const lineaMods = (e2k, nombre) =>
  (e2k.match(new RegExp(
    `^\\s*SHELLPROP\\s+"${nombre}"\\s+((?:F11|F22|F12|M11|M22|M12|V13|V23)MOD\\b.*)$`, "m")) ?? [])[1] ?? "";
const modelingType = (e2k) =>
  (e2k.match(/SHELLPROP[^\r\n]*MODELINGTYPE\s+"([^"]+)"/) ?? [])[1] ?? "sin MODELINGTYPE";

export async function correr() {
  const { exportE2k } = await cargar();
  const filas = [];

  // ── El TIPO de cascara sale del modelo, no de un valor fijo ───────────────
  // plateFormulations: 1 = Kirchhoff MZC (Shell-Thin), 0 = Mindlin MITC4 (Thick)
  for (const [pf, esperado] of [[1, "ShellThin"], [0, "ShellThick"]]) {
    const e2k = exportE2k({ ...modelo({ plateFormulations: new Map([[0, pf]]) }),
                            title: "tipo " + pf });
    const t = modelingType(e2k);
    filas.push({
      que: `plateFormulations=${pf} exporta ${esperado}`, crudo: true,
      medido: t, limite: esperado, ok: t === esperado,
      detalle: "el tipo de cascara cambia el elemento, no es cosmetico",
    });
  }

  // ── Los MODIFICADORES ─────────────────────────────────────────────────────
  // Sin modificadores no debe salir la segunda linea: ETABS omite los que
  // valen 1, y una linea con ocho unos es ruido.
  const limpio = exportE2k({ ...modelo(), title: "sin mods" });
  filas.push({
    que: "sin modificadores no se emite la linea", crudo: true,
    medido: lineaMods(limpio, "Losa") || "ninguna", limite: "ninguna",
    ok: !lineaMods(limpio, "Losa"),
    detalle: "ETABS tambien los omite cuando valen 1",
  });

  // Direccionales: los ocho, en el orden de ETABS
  // (F11 F22 F12 M11 M22 M12 V13 V23), que es el que lee shellQ4.cpp.
  const dir = exportE2k({
    ...modelo({ shellModifiers: new Map([[0, [1, 1, 1, 0.25, 0.35, 0.45, 1, 1]]]) }),
    title: "mods direccionales",
  });
  const ld = lineaMods(dir, "Losa");
  const esperadoDir = "M11MOD 0.25 M22MOD 0.35 M12MOD 0.45";
  filas.push({
    que: "los modificadores direccionales viajan, y solo los que no son 1", crudo: true,
    medido: ld.trim(), limite: esperadoDir, ok: ld.trim() === esperadoDir,
    detalle: "orden F11 F22 F12 M11 M22 M12 V13 V23, el de ETABS",
  });

  // Escalares: membrana y flexion, el caso isotropo del mismo vector.
  const esc = exportE2k({
    ...modelo({ membraneModifiers: new Map([[0, 0.5]]),
                bendingModifiers: new Map([[0, 0.25]]) }),
    title: "mods escalares",
  });
  const le = lineaMods(esc, "Losa");
  const tieneF = /F11MOD 0\.5 F22MOD 0\.5 F12MOD 0\.5/.test(le);
  const tieneM = /M11MOD 0\.25 M22MOD 0\.25 M12MOD 0\.25/.test(le);
  filas.push({
    que: "los modificadores escalares se traducen a los ocho de ETABS", crudo: true,
    medido: le.trim() || "ninguna", limite: "F11..=0.5 y M11..=0.25",
    ok: tieneF && tieneM,
    detalle: "membraneModifiers -> F11/F22/F12, bendingModifiers -> M11/M22/M12",
  });

  // Y la linea tiene que ir DESPUES de la que define la propiedad: ETABS lee
  // el bloque en orden y una linea de modificadores sin propiedad no es nada.
  const iProp = dir.indexOf(`SHELLPROP  "Losa"  PROPTYPE`);
  const iMod = dir.indexOf(ld);
  filas.push({
    que: "la linea de modificadores va DESPUES de la de la propiedad", crudo: true,
    medido: iProp >= 0 && iMod > iProp ? "si" : "no", limite: "si",
    ok: iProp >= 0 && iMod > iProp,
    detalle: "ETABS lee el bloque en orden",
  });
  return filas;
}
