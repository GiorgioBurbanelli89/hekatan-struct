/**
 * El MISMO modelo del e2k, empujado con la MISMA carga que ETABS, en el motor
 * de Hekatan. Mide RIGIDEZ sola: sin masa, sin modos, sin mass source.
 *   node cli/e2k_estatico_hekatan.mjs model_from_e2k.json
 */
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const wasmPath = join(__dirname, "..", "hekatan-fem", "src", "cpp", "built", "deform.wasm");
const jsPath = join(__dirname, "..", "hekatan-fem", "src", "cpp", "built", "deform.js");
const mod = await (await import(pathToFileURL(jsPath).href)).default({ wasmBinary: readFileSync(wasmPath) });

const alloc = (d, C, h) => { const b = new C(d); const p = mod._malloc(b.length * b.BYTES_PER_ELEMENT); h.set(b, p / b.BYTES_PER_ELEMENT); return p; };
const P = (gc, m) => { const k = m ? [...m.keys()] : [], v = m ? [...m.values()] : [];
  const kp = alloc(k, Uint32Array, mod.HEAPU32), vp = alloc(v, Float64Array, mod.HEAPF64); gc.push(kp, vp); return { kp, vp, size: k.length }; };
const Pi = (gc, m) => { const k = m ? [...m.keys()] : [], v = m ? [...m.values()] : [];
  const kp = alloc(k, Uint32Array, mod.HEAPU32), vp = alloc(v, Uint32Array, mod.HEAPU32); gc.push(kp, vp); return { kp, vp, size: k.length }; };

function deform(nodes, elements, ni, ei, opt = {}) {
  const gc = [];
  const nP = alloc(nodes.flat(), Float64Array, mod.HEAPF64); gc.push(nP);
  const eI = elements.flat();
  const eP = alloc(eI, Uint32Array, mod.HEAPU32); gc.push(eP);
  const eS = alloc(elements.map(e => e.length), Uint32Array, mod.HEAPU32); gc.push(eS);
  const sK = [...ni.supports.keys()], sV = [...ni.supports.values()].flat().map(b => b ? 1 : 0);
  const sKp = alloc(sK, Uint32Array, mod.HEAPU32), sVp = alloc(sV, Uint8Array, mod.HEAPU8); gc.push(sKp, sVp);
  const lK = [...ni.loads.keys()], lV = [...ni.loads.values()].flat();
  const lKp = alloc(lK, Uint32Array, mod.HEAPU32), lVp = alloc(lV, Float64Array, mod.HEAPF64); gc.push(lKp, lVp);
  const el = P(gc, ei.elasticities), ar = P(gc, ei.areas), mz = P(gc, ei.momentsOfInertiaZ),
    my = P(gc, ei.momentsOfInertiaY), sh = P(gc, ei.shearModuli), to = P(gc, ei.torsionalConstants),
    th = P(gc, ei.thicknesses), po = P(gc, ei.poissonsRatios), eo = P(gc, undefined),
    sy = P(gc, ei.shearAreasY), sz = P(gc, ei.shearAreasZ);
  const spr = alloc([0], Float64Array, mod.HEAPF64); gc.push(spr);
  const pf = Pi(gc, opt.plateForm), dt = Pi(gc, opt.drillType), ds = P(gc, opt.drillScale);
  const mm = P(gc, undefined), bm = P(gc, undefined), dm = P(gc, undefined);
  const la = P(gc, undefined), rel = P(gc, undefined);
  const O = () => { const p = mod._malloc(4); gc.push(p); return p; };
  const dPo = O(), dSo = O(), rPo = O(), rSo = O();
  // firma ACTUAL de deformCpp.ts (ojo: hay tres sitios que la arman a mano y
  // desincronizarla revienta con "memory access out of bounds")
  mod._deform(nP, nodes.length, eP, eI.length, eS, elements.length,
    sKp, sVp, sK.length, lKp, lVp, lK.length,
    el.kp, el.vp, el.size, ar.kp, ar.vp, ar.size, mz.kp, mz.vp, mz.size, my.kp, my.vp, my.size,
    sh.kp, sh.vp, sh.size, to.kp, to.vp, to.size, th.kp, th.vp, th.size, po.kp, po.vp, po.size,
    eo.kp, eo.vp, eo.size, sy.kp, sy.vp, sy.size, sz.kp, sz.vp, sz.size,
    spr, 0,
    pf.kp, pf.vp, pf.size, dt.kp, dt.vp, dt.size, ds.kp, ds.vp, ds.size,
    mm.kp, mm.vp, mm.size, bm.kp, bm.vp, bm.size, dm.kp, dm.vp, dm.size,
    la.kp, la.vp, la.size, rel.kp, rel.vp, rel.size,
    1 /* etabsjoint: por defecto como ETABS */, alloc([], Uint32Array, mod.HEAPU32), alloc([], Float64Array, mod.HEAPF64), 0 /* diafragma: ninguno */,
    dPo, dSo, rPo, rSo);
  const dPtr = mod.HEAPU32[dPo / 4], dSz = mod.HEAPU32[dSo / 4];
  const d = new Map();
  if (dPtr && dSz) { const f = new Float64Array(mod.HEAPF64.buffer, dPtr, dSz);
    for (let i = 0; i < dSz; i += 7) d.set(f[i], Array.from(f.slice(i + 1, i + 7))); gc.push(dPtr); }
  gc.forEach(p => mod._free(p));
  return d;
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
const dir = (process.argv[3] ?? "x").toLowerCase();       // x | y
const F = 100 / m.colTop.length;
const loads = new Map(m.colTop.map(i => [i, dir === "y" ? [0, F, 0, 0, 0, 0] : [F, 0, 0, 0, 0, 0]]));
const c = dir === "y" ? 1 : 0;
const shells = m.kinds.map((k, e) => [k, e]).filter(([k]) => k === "losa" || k === "muro").map(([, e]) => e);
const muros  = m.kinds.map((k, e) => [k, e]).filter(([k]) => k === "muro").map(([, e]) => e);
const casos = [
  ["default = Mindlin MITC4 (Shell-Thick)", {}],
  ["drilling 0 (penalty 1e6)",           { drillType: new Map(shells.map(e => [e, 0])) }],
  ["drilling 1 (PyNite weak)",           { drillType: new Map(shells.map(e => [e, 1])) }],
  ["drilling 2, escala 0.01 en muros",   { drillScale: new Map(muros.map(e => [e, 0.01])) }],
  ["Kirchhoff MZC (pf=1) en los muros",  { plateForm: new Map(muros.map(e => [e, 1])) }],
  ["Kirchhoff MZC (pf=1) en todo",       { plateForm: new Map(shells.map(e => [e, 1])) }],
];
console.log("PUSH" + dir.toUpperCase() + " 100 kN en el techo, sin diafragma");
for (const [nom, opt] of casos) {
  const d = deform(m.nodes, m.elements, { supports, loads }, ei, opt);
  let u = 0;
  d.forEach(v => { if (Math.abs(v[c]) > Math.abs(u)) u = v[c]; });
  console.log("  " + nom.padEnd(36) + u.toExponential(6) + " m");
}
