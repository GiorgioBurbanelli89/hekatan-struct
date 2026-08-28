/**
 * Los TROZOS que no llegan a ningun apoyo.
 *
 * Un modelo importado puede verse entero y no resolver: si un trozo no llega a
 * ningun apoyo, sus 6 GDL por nudo no los sujeta nadie, la K sale singular y
 * `deform` devuelve cero desplazamientos. La geometria NO lo delata.
 *
 * Se mide sobre los bloques del modelo grande de ETABS, cortados por planta
 * (`cli/trocear_e2k.py`), que es donde se vio: la planta baja sola resuelve y
 * al anadir la siguiente deja de hacerlo. La cuenta de trozos flotantes es lo
 * que convierte «no resuelve» en «faltan estos 110 nudos por sujetar».
 *
 * La referencia aqui NO es otro programa a proposito: no se compara un numero
 * fisico, se comprueba que el diagnostico distingue los dos casos.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../lib/bundle.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, "..", "..", "validation", "modelos", "bloques");

export const nombre = "e2k-piezas-flotantes";
export const descripcion =
  "trozos importados que no llegan a ningun apoyo: el aviso los tiene que contar";

export async function correr() {
  if (!existsSync(join(DIR, "hasta1_N020m_A.e2k")))
    return [{ que: "los bloques del modelo grande no estan en el disco", crudo: true,
      medido: "sin datos", limite: "sin datos", ok: true,
      detalle: "se generan con cli/trocear_e2k.py; el caso se salta" }];

  const mod = await empaquetar(`
    const g = globalThis; g.window = g;
    g.document = { createElement: () => ({ style:{}, getContext:()=>null }), body:{}, head:{},
      querySelector:()=>null, querySelectorAll:()=>[], addEventListener(){}, getElementById:()=>null };
    g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
    g.addEventListener = () => {}; g.matchMedia = () => ({ matches:false, addEventListener(){} });
    const { parseE2k } = await import("${R}/examples/src/shared/e2kParser");
    const { deform } = await import("${R}/hekatan-fem/src/index");
    export function mirar(t) {
      const m = parseE2k(t);
      const usado = new Set(); for (const el of m.elements) for (const n of el) usado.add(n);
      const mapa = new Map(); const nodes = [];
      m.nodes.forEach((n, i) => { if (usado.has(i)) { mapa.set(i, nodes.length); nodes.push(n); } });
      const elements = m.elements.map(el => el.map(i => mapa.get(i)));
      const remap = (mm) => { if (!(mm instanceof Map)) return mm;
        const o = new Map(); for (const [i, v] of mm) { const j = mapa.get(i); if (j !== undefined) o.set(j, v); } return o; };
      const ni = { ...m.nodeInputs, supports: remap(m.nodeInputs.supports), loads: remap(m.nodeInputs.loads) };
      let resuelve = false;
      try { resuelve = (deform(nodes, elements, ni, m.elementInputs)?.deformations?.size ?? 0) > 0; } catch {}
      return { flot: m.info.nPiezasFlotantes ?? -1, nudos: m.info.nNudosFlotantes ?? -1, resuelve };
    }`, "flotantes");

  const filas = [];
  const b1 = mod.mirar(readFileSync(join(DIR, "hasta1_N020m_A.e2k"), "utf-8"));
  const b2 = mod.mirar(readFileSync(join(DIR, "hasta2_N365m_A.e2k"), "utf-8"));

  filas.push({ que: "la planta baja sola: ningun trozo flota", crudo: true,
    medido: b1.flot, limite: 0, ok: b1.flot === 0,
    detalle: `${b1.flot} trozos — y por eso resuelve` });
  filas.push({ que: "  ...y resuelve", crudo: true,
    medido: b1.resuelve ? "si" : "no", limite: "si", ok: b1.resuelve,
    detalle: "un modelo sin trozos sueltos tiene la K definida positiva" });
  filas.push({ que: "al anadir la planta siguiente aparecen trozos sueltos", crudo: true,
    medido: b2.flot, limite: "> 0", ok: b2.flot > 0,
    detalle: `${b2.flot} trozos, ${b2.nudos} nudos sin llegar a un apoyo` });
  filas.push({ que: "  ...y por eso NO resuelve (el aviso explica el fallo)", crudo: true,
    medido: b2.resuelve ? "si" : "no", limite: "no", ok: !b2.resuelve,
    detalle: "en ETABS los sujetan links / muelles de pilote / diafragmas, que aun no se importan" });
  return filas;
}
