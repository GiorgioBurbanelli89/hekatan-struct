/**
 * El MISMO modelo del e2k, en el motor de Hekatan (el WASM que usa la UI).
 *   node cli/e2k_modal_hekatan.mjs model_from_e2k.json
 *
 * ⚠️ Wrapper PROPIO de `_modal` a proposito: el de `tests/lib/wasm.mjs` manda
 * `th = P()` y `po = P()` —espesores y Poisson VACIOS—, que le vale para los
 * modelos de barras de sus tests pero deja las cascaras sin espesor. Con este
 * modelo (5280 quads) eso daba T1 = 0.4241 s en vez de 0.71.
 */
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const wasmPath = join(__dirname, "..", "hekatan-fem", "src", "cpp", "built", "deform.wasm");
const jsPath = join(__dirname, "..", "hekatan-fem", "src", "cpp", "built", "deform.js");
const mod = await (await import(pathToFileURL(jsPath).href)).default({ wasmBinary: readFileSync(wasmPath) });

const alloc = (d, C, h) => { const b = new C(d); const p = mod._malloc(b.length * b.BYTES_PER_ELEMENT); h.set(b, p / b.BYTES_PER_ELEMENT); return p; };

function modal(nodes, elements, ni, ei, numModes, lateral, lump = 0, diaphragms = null, plateForm = null) {
  const gc = [];
  const nP = alloc(nodes.flat(), Float64Array, mod.HEAPF64); gc.push(nP);
  const eI = elements.flat();
  const eP = alloc(eI, Uint32Array, mod.HEAPU32); gc.push(eP);
  const eS = alloc(elements.map(e => e.length), Uint32Array, mod.HEAPU32); gc.push(eS);
  const sK = [...ni.supports.keys()], sV = [...ni.supports.values()].flat().map(b => b ? 1 : 0);
  const sKp = alloc(sK, Uint32Array, mod.HEAPU32), sVp = alloc(sV, Uint8Array, mod.HEAPU8); gc.push(sKp, sVp);
  const P = (m) => { const k = m ? [...m.keys()] : [], v = m ? [...m.values()] : [];
    const kp = alloc(k, Uint32Array, mod.HEAPU32), vp = alloc(v, Float64Array, mod.HEAPF64); gc.push(kp, vp); return { kp, vp, size: k.length }; };
  const PI = (m) => { const k = m ? [...m.keys()] : [], v = m ? [...m.values()] : [];
    const kp = alloc(k, Uint32Array, mod.HEAPU32), vp = alloc(v, Uint32Array, mod.HEAPU32); gc.push(kp, vp); return { kp, vp, size: k.length }; };
  const el = P(ei.elasticities), ar = P(ei.areas), mz = P(ei.momentsOfInertiaZ),
        my = P(ei.momentsOfInertiaY), sh = P(ei.shearModuli), to = P(ei.torsionalConstants),
        de = P(ei.densities), th = P(ei.thicknesses), po = P(ei.poissonsRatios),
        mm = P(), bm = P(), dt = PI(), ds = P(),
        sy = P(ei.shearAreasY), sz = P(ei.shearAreasZ), la = P(), rel = P(),
        nm = P(), dia = P(diaphragms);
  const pfK = plateForm ? [...plateForm.keys()] : [], pfV = plateForm ? [...plateForm.values()] : [];
  const pfKp = alloc(pfK, Uint32Array, mod.HEAPU32), pfVp = alloc(pfV, Uint32Array, mod.HEAPU32); gc.push(pfKp, pfVp);
  const relVp = alloc([], Uint8Array, mod.HEAPU8); gc.push(relVp);
  const O = () => { const p = mod._malloc(4); gc.push(p); return p; };
  const fo = O(), nfo = O(), moo = O(), mro = O(), mco = O(), mao = O(), maro = O(), maco = O();
  mod._modal(nP, nodes.length, eP, eI.length, eS, elements.length, sKp, sVp, sK.length,
    el.kp, el.vp, el.size, ar.kp, ar.vp, ar.size, mz.kp, mz.vp, mz.size, my.kp, my.vp, my.size,
    sh.kp, sh.vp, sh.size, to.kp, to.vp, to.size, de.kp, de.vp, de.size,
    th.kp, th.vp, th.size, po.kp, po.vp, po.size, mm.kp, mm.vp, mm.size, bm.kp, bm.vp, bm.size,
    pfKp, pfVp, pfK.length, dt.kp, dt.vp, dt.size, ds.kp, ds.vp, ds.size,
    sy.kp, sy.vp, sy.size, sz.kp, sz.vp, sz.size, la.kp, la.vp, la.size,
    rel.kp, relVp, 0,
    nm.kp, nm.vp, nm.size, 1 /* includeElements */,
    dia.kp, dia.vp, dia.size,
    alloc([0], Float64Array, mod.HEAPF64), 0,
    numModes, lateral, lump,
    fo, nfo, moo, mro, mco, mao, maro, maco);
  const fp = mod.HEAPU32[fo / 4], nf = mod.HEAPU32[nfo / 4];
  const mp = mod.HEAPU32[mao / 4], mr = mod.HEAPU32[maro / 4], mc = mod.HEAPU32[maco / 4];
  let f = [], part = [];
  if (nf > 0 && fp) { f = Array.from(new Float64Array(mod.HEAPF64.buffer, fp, nf)); gc.push(fp); }
  if (mr > 0 && mc > 0 && mp) { const a = new Float64Array(mod.HEAPF64.buffer, mp, mr * mc);
    for (let i = 0; i < mr; i++) part.push(Array.from(a.slice(i * mc, (i + 1) * mc))); gc.push(mp); }
  gc.forEach(p => mod._free(p));
  return { f, part };
}

const m = JSON.parse(readFileSync(process.argv[2], "utf8"));
const M = () => new Map();
const ei = { elasticities: M(), poissonsRatios: M(), shearModuli: M(), densities: M(), areas: M(),
             momentsOfInertiaY: M(), momentsOfInertiaZ: M(), torsionalConstants: M(),
             thicknesses: M(), shearAreasY: M(), shearAreasZ: M() };
m.kinds.forEach((k, e) => {
  ei.elasticities.set(e, m.E); ei.poissonsRatios.set(e, m.NU); ei.shearModuli.set(e, m.G); ei.densities.set(e, m.RHO);
  if (k === "losa" || k === "muro") { ei.thicknesses.set(e, k === "muro" ? m.tmuro : m.tlosa); return; }
  const s = m.SEC[k[1]];
  ei.areas.set(e, s.A); ei.momentsOfInertiaZ.set(e, s.Iz); ei.momentsOfInertiaY.set(e, s.Iy);
  ei.torsionalConstants.set(e, s.J); ei.shearAreasY.set(e, s.As); ei.shearAreasZ.set(e, s.As);
});
const supports = new Map(Object.entries(m.supports).map(([k, v]) => [Number(k), v.map(Boolean)]));
const ni = { supports, loads: new Map() };
const muros = m.kinds.map((k, e) => [k, e]).filter(([k]) => k === "muro").map(([, e]) => e);
const ET = [0.6916, 0.2183, 0.1918, 0.1692];
for (const [nom, pf] of [["Hekatan tal cual = Mindlin MITC4 en TODA cascara (el defecto)", null],
                         ["Hekatan con Kirchhoff MZC (pf=1) en los muros", new Map(muros.map(e => [e, 1]))]]) {
  const r = modal(m.nodes, m.elements, ni, ei, 12, 1, 0, null, pf);
  console.log("");
  console.log(nom);
  console.log("  modo    T[s]     vs ETABS     Ux%     Uy%     Rz%");
  r.f.slice(0, 4).forEach((v, i) => {
    const T = 1 / v, p = r.part[i] ?? [];
    console.log("   " + (i + 1) + "    " + T.toFixed(4).padStart(7) + "   " +
      (100 * (T - ET[i]) / ET[i]).toFixed(2).padStart(7) + " %   " +
      ((p[0] ?? 0) * 100).toFixed(1).padStart(5) + "   " + ((p[1] ?? 0) * 100).toFixed(1).padStart(5) +
      "   " + ((p[5] ?? 0) * 100).toFixed(1).padStart(5));
  });
}
