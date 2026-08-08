#!/usr/bin/env node
// Regresion: frame Paz 6.3, contra ETABS 22 con el MISMO modelo.
//
// Referencia REAL (cli/paz_masa_etabs.py, ETABS con los brazos rigidos
// automaticos ANULADOS, que es el modelo que Hekatan resuelve):
//   ETABS off=0  8.8305  14.5459  24.2336  25.1132  159.6525  159.8513
//   Hekatan      igual al 0.06 % por el camino denso, e IDENTICO a 4 decimales
//                por el de subespacio.
//
// Con los brazos rigidos que ETABS pone SOLO da 9.0903 ... 164.5541, un +2.88 %
// uniforme, y no es el solver: ETABS no pesa el tramo de barra que cae dentro
// del brazo rigido. Medido con AssembledJointMass: descuenta 1857.4 in3, que es
// exactamente 2*24.7*24.7 + 2*24.7*12.9, los offsets de las VIGAS (los de
// columna no los descuenta). Masa total ETABS off=0 = 3.555392e-2 contra
// 3.555400e-2 de Hekatan: 0.002 %.
//
// La vieja "ref nativa" (9.6780 ... 33.9929 44.9332) es FALSA: solo la da un
// .exe del 17-may compilado de codigo que nunca se subio, y sus modos 5-6 no
// existen. No perseguirla.
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const createModule = (await import(pathToFileURL(join(__dirname, "..", "hekatan-fem/src/cpp/built/deform.js")).href)).default;
const mod = await createModule({ wasmBinary: readFileSync(join(__dirname, "..", "hekatan-fem/src/cpp/built/deform.wasm")) });
function alloc(d, C, h) { const b = new C(d); const p = mod._malloc(b.length * b.BYTES_PER_ELEMENT); h.set(b, p / b.BYTES_PER_ELEMENT); return p; }
function modal(nodes, elements, ni, ei, numModes, lat) {
  const gc = [];
  const nP = alloc(nodes.flat(), Float64Array, mod.HEAPF64); gc.push(nP);
  const eI = elements.flat(); const eP = alloc(eI, Uint32Array, mod.HEAPU32); gc.push(eP);
  const eS = alloc(elements.map(e => e.length), Uint32Array, mod.HEAPU32); gc.push(eS);
  const sK = ni.supports ? [...ni.supports.keys()] : []; const sV = ni.supports ? [...ni.supports.values()].flat().map(b => b ? 1 : 0) : [];
  const sKp = alloc(sK, Uint32Array, mod.HEAPU32); gc.push(sKp); const sVp = alloc(sV, Uint8Array, mod.HEAPU8); gc.push(sVp);
  const P = m => { const k = m ? [...m.keys()] : [], v = m ? [...m.values()] : []; const kp = alloc(k, Uint32Array, mod.HEAPU32); gc.push(kp); const vp = alloc(v, Float64Array, mod.HEAPF64); gc.push(vp); return { kp, vp, size: k.length }; };
  const el = P(ei.elasticities), ar = P(ei.areas), mz = P(ei.momentsOfInertiaZ), my = P(ei.momentsOfInertiaY), sh = P(ei.shearModuli), to = P(ei.torsionalConstants), de = P(ei.densities), th = P(), po = P(), mm = P(), bm = P();
  const pfKp = alloc([], Uint32Array, mod.HEAPU32); gc.push(pfKp); const pfVp = alloc([], Uint32Array, mod.HEAPU32); gc.push(pfVp);
  const O = () => { const p = mod._malloc(4); gc.push(p); return p; };
  const fo = O(), nfo = O(), moo = O(), mro = O(), mco = O(), mao = O(), maro = O(), maco = O();
  mod._modal(nP, nodes.length, eP, eI.length, eS, elements.length, sKp, sVp, sK.length,
    el.kp, el.vp, el.size, ar.kp, ar.vp, ar.size, mz.kp, mz.vp, mz.size, my.kp, my.vp, my.size,
    sh.kp, sh.vp, sh.size, to.kp, to.vp, to.size, de.kp, de.vp, de.size,
    th.kp, th.vp, th.size, po.kp, po.vp, po.size, mm.kp, mm.vp, mm.size, bm.kp, bm.vp, bm.size,
    pfKp, pfVp, 0, numModes, lat, fo, nfo, moo, mro, mco, mao, maro, maco);
  const fp = mod.HEAPU32[fo / 4], nf = mod.HEAPU32[nfo / 4];
  let f = []; if (nf > 0 && fp) { f = Array.from(new Float64Array(mod.HEAPF64.buffer, fp, nf)); gc.push(fp); }
  gc.forEach(p => mod._free(p)); return f;
}
const E = 29500, nu = 0.3, G = E / (2 * (1 + nu)), H = 180, BX = 114, BY = 240, RHO = 490 / 1000 / (12 ** 3) / 386.4;
const nodes = [[0, 0, 0], [0, 0, H], [0, BY, 0], [0, BY, H], [BX, 0, 0], [BX, 0, H], [BX, BY, 0], [BX, BY, H]];
const elements = [[0, 1], [2, 3], [4, 5], [6, 7], [1, 5], [3, 7], [1, 3], [5, 7]];
const ni = { supports: new Map([[0, [1, 1, 1, 1, 1, 1].map(Boolean)], [2, [1, 1, 1, 1, 1, 1].map(Boolean)], [4, [1, 1, 1, 1, 1, 1].map(Boolean)], [6, [1, 1, 1, 1, 1, 1].map(Boolean)]]) };
const eM = (c, g) => new Map(elements.map((_, i) => [i, i < 4 ? c : g]));
const ei = { elasticities: eM(E, E), shearModuli: eM(G, G), areas: eM(43.0, 24.7), momentsOfInertiaY: eM(391, 225), momentsOfInertiaZ: eM(5630, 928), torsionalConstants: eM(34.8, 5.90), densities: new Map(elements.map((_, i) => [i, RHO])) };
// ETABS 22 con los brazos rigidos anulados = el mismo modelo que resuelve Hekatan
const ETABS = [8.8305, 14.5459, 24.2336, 25.1132, 159.6525, 159.8513];
const TOL = 0.1;   // %

const f0 = modal(nodes, elements, ni, ei, 6, 0);
const f1 = modal(nodes, elements, ni, ei, 6, 1);
console.log("Paz 6.3  DENSO (lat=0)      — f(Hz):", f0.map(x => x.toFixed(4)).join("  "));
console.log("Paz 6.3  SUBESPACIO (lat=1) — f(Hz):", f1.map(x => x.toFixed(4)).join("  "));
console.log("ETABS 22 (offsets = 0)      — f(Hz):", ETABS.map(x => x.toFixed(4)).join("  "));

let malos = 0;
for (const [nombre, f] of [["denso", f0], ["subespacio", f1]]) {
  for (let k = 0; k < ETABS.length; k++) {
    const d = 100 * (f[k] - ETABS[k]) / ETABS[k];
    if (!(Math.abs(d) <= TOL)) { console.log(`  FALLA ${nombre} modo ${k + 1}: ${f[k]?.toFixed(4)} vs ${ETABS[k]} (${d.toFixed(3)} %)`); malos++; }
  }
}
console.log(malos ? `\nFALLA: ${malos} modos fuera de ${TOL} %` : `\nOK: los 12 modos (denso y subespacio) dentro de ${TOL} % de ETABS`);
process.exit(malos ? 1 : 0);
