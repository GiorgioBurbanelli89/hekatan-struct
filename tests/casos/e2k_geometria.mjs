/**
 * E2K: ¿la geometria que EXPORTA Hekatan es la del modelo?
 *
 * El .e2k no guarda las coordenadas de un nudo. Guarda un POINT con (x, y) y un
 * descenso opcional, y la cota sale de la PLANTA del objeto que lo usa. O sea
 * que el exportador puede escribir un fichero perfectamente valido que describa
 * OTRA estructura, y no se nota hasta abrirlo en ETABS.
 *
 * Paso lo que pasa: el exportador ponia el MISMO punto de planta en los dos
 * extremos de cada COLUMN/BRACE (`LINE "C1" COLUMN "1" "1" 1`), que es lo
 * correcto para una columna vertical de edificio y es una MENTIRA para una
 * barra inclinada — ETABS le da al extremo de abajo la x,y del de arriba. En el
 * galpon (nave con arco) eso tumbaba 42 de las 102 barras. Arbitrado abriendo
 * los dos ficheros en ETABS 19.1 y leyendo `PointObj.GetCoordCartesian`:
 *
 *     antes:    60 de 102 barras bien · 90 joints (35 inventados)
 *     despues: 102 de 102 barras bien · 56 joints (1 suelto)
 *
 * Aqui la comprobacion se hace SIN ETABS, releyendo el e2k con la regla del
 * formato para que la suite corra en cualquier maquina. La regla no es una
 * suposicion: se decidio puntuando las cuatro combinaciones posibles contra los
 * nudos de un modelo real de ETABS y salio 1258 de 1258 extremos de barra sobre
 * un nudo (ver `galpon-bodega-electoral/e2k_a_dwg.py`):
 *
 *   1. El tercer numero del POINT es un DESCENSO bajo la cota de su planta.
 *   2. En una LINE, el punto que esta EN la planta del objeto es el SEGUNDO;
 *      el PRIMERO baja tantas plantas como diga el ultimo entero.
 *
 * Deliberadamente NO se usa `parseE2k` del propio repo: leer con el mismo
 * criterio con que se escribe mide una copia y da verde siempre.
 *
 * El arbitro de verdad, cuando haya ETABS a mano:
 *   python galpon-bodega-electoral/e2k_vs_etabs_coords.py <e2k> <salida.json>
 */
import { empaquetar, R } from "../lib/bundle.mjs";

/**
 * Umbral = lo YA MEDIDO, no un numero redondo. Si baja, algo se rompio; si
 * sube, hay que subir el umbral y decir por que.
 */
const CASOS = [
  { id: "galpon",        nota: "nave con arco: el caso que destapo el fallo" },
  { id: "mezanine",      nota: "edificio regular, siempre estuvo bien" },
  { id: "portico-2d",    nota: "portico plano" },
  { id: "test-m-dual",   nota: "edificio dual con muros" },
  { id: "tower-3d",      nota: "torre con diagonales" },
  { id: "galpon-bodega", nota: "la nave real, 960 barras" },
];

/**
 * Dos medidas, porque una sola miente:
 *
 *  A) EXTREMOS: cada extremo de cada LINE del e2k tiene que caer sobre un nudo
 *     del modelo. Si el exportador se inventa una cota (o vuelve vertical una
 *     barra inclinada), aqui salta.
 *  B) COBERTURA: cada barra del modelo tiene que estar DENTRO de alguna LINE
 *     del e2k. No se pide igualdad barra a barra a proposito: el exportador
 *     junta una columna de 4 tramos en UNA sola LINE con `MINNUMSTA`, y ETABS
 *     la vuelve a partir sola. Exigir igualdad daba 89 % en el galpon real
 *     castigando algo que esta bien.
 *
 * Las dos a la vez cierran la puerta: si una LINE fuera de mas o de menos, o
 * apuntara a otro sitio, una de las dos cae.
 */
const LIMITE_EXTREMOS = 100;   // %
const LIMITE_COBERTURA = 100;  // %

const FUENTE = `
const g = globalThis; g.window = g;
const ctx2d = () => new Proxy({ font:"", measureText:()=>({width:10}),
  createLinearGradient:()=>({addColorStop(){}}), getImageData:()=>({data:new Uint8ClampedArray(4)}) },
  { get:(t,k)=> k in t ? t[k] : (()=>{}) });
const nodo = () => ({ style:{}, width:300, height:150, appendChild(){}, setAttribute(){},
  addEventListener(){}, removeEventListener(){}, classList:{add(){},remove(){},toggle(){},contains:()=>false},
  getContext:()=>ctx2d(), querySelector:()=>null, querySelectorAll:()=>[], remove(){}, insertBefore(){},
  cloneNode:()=>nodo(), toDataURL:()=>"", getBoundingClientRect:()=>({width:0,height:0,top:0,left:0}) });
g.document = { createElement: nodo, createElementNS: nodo, body: nodo(), head: nodo(),
  documentElement: nodo(), querySelector:()=>null, querySelectorAll:()=>[],
  addEventListener(){}, getElementById:()=>null };
g.localStorage = { getItem:()=>null, setItem(){}, removeItem(){} };
g.addEventListener = () => {};
g.matchMedia = () => ({ matches:false, addEventListener(){}, addListener(){} });
const { examplesRegistry } = await import("${R}/examples/src/workspace/exampleRegistry");
const { exportE2k } = await import("${R}/examples/src/shared/e2kExporter");

export function generar(id) {
  const ex = examplesRegistry.find(e => e.id === id);
  if (!ex) throw new Error("no existe el ejemplo " + id);
  const p = {}; for (const [k,d] of Object.entries(ex.params||{})) p[k] = d.default;
  const st = { nodes:{val:[]}, elements:{val:[]}, nodeInputs:{val:{}}, elementInputs:{val:{}},
               deformOutputs:{val:{}}, analyzeOutputs:{val:{}}, objects3D:{val:[]} };
  ex.build(p, st, { render(){}, clear(){}, show(){}, hide(){} });
  const e2k = exportE2k({ nodes: st.nodes.val, elements: st.elements.val,
    nodeInputs: st.nodeInputs.val, elementInputs: st.elementInputs.val,
    title: id, units: { force: "Tonf", length: "m" }, weightMode: "manual" });
  return { e2k, nodes: st.nodes.val, elements: st.elements.val };
}`;

/** Relee el e2k con la regla del formato y devuelve los extremos de cada barra. */
function leerE2k(txt) {
  const L = txt.split(/\r?\n/);

  const stories = [];
  for (const l of L) {
    let m = l.match(/^\s*STORY\s+"([^"]+)"\s+HEIGHT\s+([\d.eE+-]+)/);
    if (m) { stories.push({ n: m[1], h: +m[2] }); continue; }
    m = l.match(/^\s*STORY\s+"([^"]+)"\s+ELEV\s+([\d.eE+-]+)/);
    if (m) stories.push({ n: m[1], elev: +m[2] });
  }
  stories.reverse();                       // el bloque va de arriba abajo
  const zStory = new Map();
  const orden = [];
  let z = 0;
  for (const s of stories) {
    z = s.elev != null ? s.elev : z + s.h;
    zStory.set(s.n, z);
    orden.push(s.n);
  }

  const P = new Map();
  for (const l of L) {
    const m = l.match(/^\s*POINT\s+"([^"]+)"\s+([\d.eE+-]+)\s+([\d.eE+-]+)\s*([\d.eE+-]+)?/);
    if (m) P.set(m[1], { x: +m[2], y: +m[3], dz: m[4] ? +m[4] : 0 });
  }

  const LN = new Map();
  for (const l of L) {
    const m = l.match(/^\s*LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
    if (m) LN.set(m[1], { p1: m[3], p2: m[4], salto: +m[5] });
  }
  for (const l of L) {
    const m = l.match(/^\s*LINEASSIGN\s+"([^"]+)"\s+"([^"]+)"/);
    if (m && LN.has(m[1])) LN.get(m[1]).story = m[2];
  }

  const zde = (pid, st) => zStory.get(st) - (P.get(pid)?.dz ?? 0);
  const barras = [];
  for (const [, b] of LN) {
    const i = orden.indexOf(b.story);
    if (i < 0 || !P.has(b.p1) || !P.has(b.p2)) continue;
    const abajo = orden[Math.max(0, i - b.salto)];
    const a = P.get(b.p1), c = P.get(b.p2);
    barras.push([[a.x, a.y, zde(b.p1, abajo)], [c.x, c.y, zde(b.p2, b.story)]]);
  }
  return barras;
}

export const nombre = "e2k-geometria";
export const descripcion =
  "el e2k que exporta Hekatan describe el MISMO modelo (arbitrado en ETABS 19.1)";

const TOL = 2e-3;   // m

/** ¿El punto P cae sobre el segmento AB (colineal y entre los extremos)? */
function enSegmento(P, A, B) {
  const d = [B[0] - A[0], B[1] - A[1], B[2] - A[2]];
  const v = [P[0] - A[0], P[1] - A[1], P[2] - A[2]];
  const L2 = d[0] * d[0] + d[1] * d[1] + d[2] * d[2];
  if (L2 < 1e-12) return Math.hypot(...v) <= TOL;
  const t = (v[0] * d[0] + v[1] * d[1] + v[2] * d[2]) / L2;
  if (t < -TOL || t > 1 + TOL) return false;
  const dist = Math.hypot(v[0] - t * d[0], v[1] - t * d[1], v[2] - t * d[2]);
  return dist <= TOL;
}

export async function correr() {
  const mod = await empaquetar(FUENTE, "e2k-geometria");
  const filas = [];
  const k = (p) => p.map((v) => v.toFixed(3)).join(",");

  for (const caso of CASOS) {
    let pExtremos = 0, pCobertura = 0, det1 = "", det2 = "";
    try {
      const { e2k, nodes, elements } = mod.generar(caso.id);
      const nudos = new Set(nodes.map((n) => k(n)));
      const leidas = leerE2k(e2k);

      // A) extremos sobre un nudo del modelo
      let extOk = 0;
      for (const [A, B] of leidas) {
        if (nudos.has(k(A))) extOk++;
        if (nudos.has(k(B))) extOk++;
      }
      pExtremos = leidas.length ? (100 * extOk) / (2 * leidas.length) : 0;
      det1 = `${extOk}/${2 * leidas.length} extremos · ${caso.nota}`;

      // B) cada barra del modelo, dentro de alguna LINE
      const barras = elements.filter((e) => e.length === 2);
      let cubOk = 0;
      for (const e of barras) {
        const P = nodes[e[0]], Q = nodes[e[1]];
        if (leidas.some(([A, B]) => enSegmento(P, A, B) && enSegmento(Q, A, B))) cubOk++;
      }
      pCobertura = barras.length ? (100 * cubOk) / barras.length : 0;
      det2 = `${cubOk}/${barras.length} barras del modelo dentro de una LINE`;
    } catch (e) {
      det1 = det2 = "no se pudo generar: " + String((e && e.message) || e).slice(0, 60);
    }
    filas.push({
      que: `e2k ${caso.id}: extremos de LINE sobre un nudo`,
      medido: pExtremos, limite: LIMITE_EXTREMOS,
      ok: pExtremos >= LIMITE_EXTREMOS, detalle: det1,
    });
    filas.push({
      que: `e2k ${caso.id}: barras del modelo cubiertas`,
      medido: pCobertura, limite: LIMITE_COBERTURA,
      ok: pCobertura >= LIMITE_COBERTURA, detalle: det2,
    });
  }
  return filas;
}
