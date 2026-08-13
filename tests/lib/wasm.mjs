/**
 * Acceso directo al motor C++ compilado a WASM, sin navegador.
 *
 * Es el camino corto: se llama a `_modal` del modulo de emscripten con los
 * arrays ya en el heap. Sirve para los casos que definen el modelo a mano
 * (Paz 6.3). Los que parten de un .heks van por lib/heks.mjs.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const AQUI = dirname(fileURLToPath(import.meta.url));
export const RAIZ = join(AQUI, "..", "..");

let mod = null;

export async function cargarWasm() {
  if (mod) return mod;
  const built = join(RAIZ, "hekatan-fem/src/cpp/built");
  const crear = (await import(pathToFileURL(join(built, "deform.js")).href)).default;
  mod = await crear({ wasmBinary: readFileSync(join(built, "deform.wasm")) });
  return mod;
}

function alloc(datos, Tipo, heap) {
  const b = new Tipo(datos);
  const p = mod._malloc(b.length * b.BYTES_PER_ELEMENT);
  heap.set(b, p / b.BYTES_PER_ELEMENT);
  return p;
}

/**
 * Analisis modal. `lateral = 1` usa el camino de subespacio (el que ETABS
 * reproduce al cuarto decimal); `lateral = 0`, el denso.
 */
export async function modal(nodes, elements, nodeInputs, elementInputs, numModes, lateral) {
  await cargarWasm();
  const gc = [];
  const nP = alloc(nodes.flat(), Float64Array, mod.HEAPF64); gc.push(nP);
  const eI = elements.flat();
  const eP = alloc(eI, Uint32Array, mod.HEAPU32); gc.push(eP);
  const eS = alloc(elements.map(e => e.length), Uint32Array, mod.HEAPU32); gc.push(eS);

  const sup = nodeInputs.supports;
  const sK = sup ? [...sup.keys()] : [];
  const sV = sup ? [...sup.values()].flat().map(b => (b ? 1 : 0)) : [];
  const sKp = alloc(sK, Uint32Array, mod.HEAPU32); gc.push(sKp);
  const sVp = alloc(sV, Uint8Array, mod.HEAPU8); gc.push(sVp);

  const P = (m) => {
    const k = m ? [...m.keys()] : [];
    const v = m ? [...m.values()] : [];
    const kp = alloc(k, Uint32Array, mod.HEAPU32); gc.push(kp);
    const vp = alloc(v, Float64Array, mod.HEAPF64); gc.push(vp);
    return { kp, vp, size: k.length };
  };
  const ei = elementInputs;
  const el = P(ei.elasticities), ar = P(ei.areas), mz = P(ei.momentsOfInertiaZ),
        my = P(ei.momentsOfInertiaY), sh = P(ei.shearModuli), to = P(ei.torsionalConstants),
        de = P(ei.densities), th = P(), po = P(), mm = P(), bm = P();
  const pfKp = alloc([], Uint32Array, mod.HEAPU32); gc.push(pfKp);
  const pfVp = alloc([], Uint32Array, mod.HEAPU32); gc.push(pfVp);

  const O = () => { const p = mod._malloc(4); gc.push(p); return p; };
  const fo = O(), nfo = O(), moo = O(), mro = O(), mco = O(), mao = O(), maro = O(), maco = O();

  // Areas de cortante (As2/As3) y angulo de eje local: vacios aqui, pero TIENEN
  // que ir, porque _modal los pide. Esta llamada lleva la lista de argumentos a
  // mano y por eso se desincroniza cada vez que el C++ cambia: cuando se anadio
  // `lumpStories` no se actualizo, asi que el puntero `fo` se estaba leyendo
  // como si fuera ese entero y todo lo de detras iba corrido. El sintoma fue
  // "memory access out of bounds" en paz-6-3-modal.
  const sy = P(ei.shearAreasY), sz = P(ei.shearAreasZ), la = P(ei.localAngles);
  const nm = P(nodeInputs.masses);
  const dia = P(nodeInputs.diaphragms);   // diafragma rigido por nudo   // masa nodal (t), la que no sale del peso propio

  mod._modal(nP, nodes.length, eP, eI.length, eS, elements.length, sKp, sVp, sK.length,
    el.kp, el.vp, el.size, ar.kp, ar.vp, ar.size, mz.kp, mz.vp, mz.size, my.kp, my.vp, my.size,
    sh.kp, sh.vp, sh.size, to.kp, to.vp, to.size, de.kp, de.vp, de.size,
    th.kp, th.vp, th.size, po.kp, po.vp, po.size, mm.kp, mm.vp, mm.size, bm.kp, bm.vp, bm.size,
    pfKp, pfVp, 0,
    sy.kp, sy.vp, sy.size, sz.kp, sz.vp, sz.size, la.kp, la.vp, la.size,
    nm.kp, nm.vp, nm.size, 1 /* includeElements */,
    dia.kp, dia.vp, dia.size,
    numModes, lateral, 0 /* lumpStories */,
    fo, nfo, moo, mro, mco, mao, maro, maco);

  const fp = mod.HEAPU32[fo / 4], nf = mod.HEAPU32[nfo / 4];
  let f = [];
  if (nf > 0 && fp) { f = Array.from(new Float64Array(mod.HEAPF64.buffer, fp, nf)); gc.push(fp); }
  gc.forEach(p => mod._free(p));
  return f;
}
