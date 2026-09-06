/**
 * CICLO POR FICHERO: .heks -> .e2k / .s2k (los exportadores del boton) ->
 * parseE2k / parseS2k -> el MISMO motor. Si lo que vuelve no es lo que salio,
 * el exportador o el importador se dejan algo. No abre ETABS ni SAP2000: eso
 * lo hace `galpon-bodega-electoral/csi_ida_vuelta.py` (2-sep-2026: ETABS y
 * SAP2000 leyendo estos ficheros dan -31.8676 mm, lo mismo que Hekatan).
 *
 * Lo que cazo el 2-sep-2026, todo en el mezanine (1284 nudos, 873 barras, 1175 shells):
 *   - AREALOAD FVAL en N/m2 en un fichero en N/mm2 (ETABS: losa a -21 km)
 *   - LENGTHOFFI/J en metros en un fichero en mm
 *   - parseE2k no leia POINTLOAD (entraba sin carga)
 *   - parseE2k rehacia SHAPE "General" como rectangulo (A, I, As, J mal)
 *   - parseS2k dejaba las cargas en `forces`, que el motor no lee
 *   - parseS2k no leia AS2/AS3, Shell-Thin/Thick ni los end offsets
 */
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R, cargarFem } from "../lib/bundle.mjs";
import { resolverHeks } from "../lib/heks.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
export const nombre = "ciclo-csi-ficheros";
export const descripcion = "heks -> e2k/s2k -> Hekatan: el ciclo por fichero no pierde carga, secciones ni flecha";

export async function correr() {
  const filas = [];
  // Dos modelos: el mezanine (losa maciza: cascaras + barras + cargas nodales) y
  // el galpon (frameload, `ang` en 156 barras, shellmod de membrana en el deck).
  // El galpon cazo tres fugas mas el 2-sep-2026: `ANG` sin emitir en los dos
  // parsers, los modificadores de cascara que el s2k no escribia, y la carga de
  // barra contada dos veces en el s2k (nodal repartida + FRAME LOADS).
  // Y la cimentacion real (9 zapatas + 12 vigas de amarre sobre 225 muelles nodales de
  // Winkler): hasta el 5-sep-2026 ni el e2k ni el s2k llevaban los muelles, y el modelo
  // llegaba a ETABS/SAP2000 sin apoyo.
  for (const nombreHeks of ["losas_maciza_thin.heks", "galpon_lc.heks", "cimentacion_9zapatas.heks"])
    filas.push(...await ciclo(join(AQUI, "..", "datos", nombreHeks), nombreHeks.replace(".heks", "")));
  return filas;
}

async function ciclo(heks, tag) {
  const mod = await empaquetar(`
    export { parseE2k } from "${R}/examples/src/shared/e2kParser";
    export { parseS2k } from "${R}/examples/src/shared/s2kParser";
    export { exportE2k } from "${R}/examples/src/shared/e2kExporter";
    export { exportS2k } from "${R}/examples/src/shared/s2kExporter";
  `, "ciclo-csi-ficheros");
  const fem = await cargarFem();
  const r = await resolverHeks(heks);
  let uz0 = 0; r.deformOutputs.deformations.forEach(u => { if (u[2] < uz0) uz0 = u[2]; });
  let fz0 = 0; r.nodeInputs.loads?.forEach(v => fz0 += v[2] || 0);
  const comun = { nodes: r.nodes, elements: r.elements, nodeInputs: r.nodeInputs, elementInputs: r.elementInputs, title: "ciclo", units: { force: "Tonf", length: "m" } };
  const dir = mkdtempSync(join(tmpdir(), "hkCiclo-"));
  void dir;
  const filas = [];
  const vuelta = (etiqueta0, texto, parse) => {
    const etiqueta = `${tag} · ${etiqueta0}`;
    const m = parse(texto);
    let uz = 0, fz = 0;
    m.nodeInputs.loads?.forEach(v => fz += v[2] || 0);
    const d = fem.deform(m.nodes, m.elements, m.nodeInputs, m.elementInputs, m.nodeInputs.springs);   // los muelles van aparte, como en el cliModeler
    d.deformations.forEach(u => { if (u[2] < uz) uz = u[2]; });
    const barras = m.elements.filter(e => e.length === 2).length, shells = m.elements.filter(e => e.length >= 3).length;
    const eFz = Math.abs(fz / fz0 - 1) * 100, eUz = Math.abs(uz / uz0 - 1) * 100;
    filas.push({ que: `${etiqueta}: mismos nudos/barras/cascaras`, crudo: true,
      medido: `${m.nodes.length}/${barras}/${shells}`, limite: `${r.nodes.length}/${r.elements.filter(e => e.length === 2).length}/${r.elements.filter(e => e.length === 4).length}`,
      // El e2k es un formato por PLANTAS: una columna que cruza una cota de piso
      // sin nudo en Hekatan, ETABS la parte ahi (galpon: +4 nudos, +4 tramos).
      // No cambia la estructura; por eso al e2k se le admite "mas nudos" pero
      // nunca menos, y las cascaras tienen que ser las mismas.
      ok: (/^e2k/.test(etiqueta0) ? (m.nodes.length >= r.nodes.length && barras >= r.elements.filter(e => e.length === 2).length)
                                   : (m.nodes.length === r.nodes.length && barras === r.elements.filter(e => e.length === 2).length))
          && shells === r.elements.filter(e => e.length === 4).length,
      detalle: /^e2k/.test(etiqueta0) ? "e2k: ETABS parte las columnas en cada planta; se admiten nudos de mas, nunca de menos" : "lo que el parser monta contra lo que salio del .heks" });
    // en "auto" el peso viaja como WEIGHTPERVOLUME con 6 cifras: 1e-4 %
    const limFz = /auto/.test(etiqueta0) ? 1e-4 : 1e-6;
    filas.push({ que: `${etiqueta}: carga total (ΣFz)`, medido: eFz, limite: limFz, ok: eFz <= limFz,
      detalle: `${fz.toFixed(3)} vs ${fz0.toFixed(3)} kN` });
    // 1e-3 %: el e2k redondea las coordenadas a 0.1 um y eso ya se nota en la 7a cifra.
    const kSpr = (arr) => (arr ?? []).reduce((acc, sp) => acc + sp.k, 0);
    const k0 = kSpr(r.nodeInputs.springs), k1 = kSpr(m.nodeInputs.springs);
    if (k0 > 0) {
      const eK = Math.abs(k1 / k0 - 1) * 100;
      filas.push({ que: `${etiqueta}: muelles nodales (Σk)`, medido: eK, limite: 1e-6, ok: eK <= 1e-6,
        detalle: `${k1.toFixed(4)} vs ${k0.toFixed(4)} kN/m en ${(m.nodeInputs.springs ?? []).length}/${r.nodeInputs.springs.length} muelles` });
    }
    const limUz = (tag === "galpon_lc" && /^e2k/.test(etiqueta0)) ? 0.01 : 1e-3;   // galpon por e2k: 0.0014 % (redondeo a 0.1 um + 4 nudos de planta)
    filas.push({ que: `${etiqueta}: flecha maxima`, medido: eUz, limite: limUz, ok: eUz <= limUz,
      detalle: `${(uz * 1000).toFixed(6)} vs ${(uz0 * 1000).toFixed(6)} mm` });
    return m;
  };
  // e2k manual: TODAS las cargas nodales, peso propio 0 (lo que compara solvers)
  const e2k = mod.exportE2k({ ...comun, weightMode: "manual", diaphragm: "none" });
  writeFileSync(join(dir, "m.e2k"), e2k, "utf-8");
  const m1 = vuelta("e2k -> Hekatan", e2k, mod.parseE2k);
  const e2k2 = mod.exportE2k({ nodes: m1.nodes, elements: m1.elements, nodeInputs: m1.nodeInputs, elementInputs: m1.elementInputs, title: "ciclo", units: { force: "Tonf", length: "m" }, weightMode: "manual", diaphragm: "none" });
  vuelta("e2k -> Hekatan -> e2k -> Hekatan", e2k2, mod.parseE2k);
  // e2k AUTO (el defecto del boton): ETABS pesa el mismo, con AREALOAD y
  // SELFWEIGHT 1. El parser tiene que devolver la MISMA carga que el .heks
  // (material por E y peso, peso propio con luz libre en vigas).
  const e2kA = mod.exportE2k({ ...comun, weightMode: "auto", diaphragm: "none" });
  vuelta("e2k auto -> Hekatan", e2kA, mod.parseE2k);
  const s2k = mod.exportS2k({ ...comun, selfWtMult: 0 });
  const s1 = vuelta("s2k -> Hekatan", s2k, mod.parseS2k);
  const s2k2 = mod.exportS2k({ nodes: s1.nodes, elements: s1.elements, nodeInputs: s1.nodeInputs, elementInputs: s1.elementInputs, title: "ciclo", units: { force: "Tonf", length: "m" }, selfWtMult: 0 });
  vuelta("s2k -> Hekatan -> s2k -> Hekatan", s2k2, mod.parseS2k);
  // Los offsets y la presion de area, en las unidades del fichero (mm, N/mm2)
  const off = e2k.match(/LENGTHOFFJ\s+([\d.]+)/)?.[1];
  if (tag === "losas_maciza_thin") filas.push({ que: "e2k: LENGTHOFF en mm (250, no 0.25)", crudo: true, medido: off ?? "no hay", limite: "250", ok: off === "250", detalle: "ETABS lee el e2k en N y mm siempre" });
  const fval = e2k.match(/FVAL\s+([\d.eE+-]+)/)?.[1];
  if (tag === "losas_maciza_thin") filas.push({ que: "e2k: AREALOAD FVAL en N/mm2 (0.00685, no 6850)", crudo: true, medido: fval ?? "no hay", limite: "0.00685", ok: fval === "0.00685", detalle: "6.85 kN/m2 = 0.00685 N/mm2" });
  return filas;
}
