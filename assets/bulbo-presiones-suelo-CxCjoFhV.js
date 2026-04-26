import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as ve } from "./theme-2eEBQPmF.js";
import { h as he } from "./h8-DskvmQwL.js";
import { g as xe, a as G, e as q } from "./getViewer-D9XT9ebo.js";
import { e as ge } from "./makeDraggable-zx2br6Yh.js";
import { g as be } from "./getParameters-CIJBOwMB.js";
import { g as we } from "./styles-Cjdl64P4.js";
import "./Text-DyNVkyur.js";
const r = { Lx: { value: l.state(20), min: 5, max: 40, step: 1, label: "Lx suelo (m)" }, Ly: { value: l.state(20), min: 5, max: 40, step: 1, label: "Ly suelo (m)" }, Lz: { value: l.state(10), min: 4, max: 20, step: 1, label: "Lz suelo (m)" }, nx: { value: l.state(8), min: 4, max: 24, step: 2, label: "nx mesh" }, ny: { value: l.state(8), min: 4, max: 24, step: 2, label: "ny mesh" }, nz: { value: l.state(4), min: 2, max: 16, step: 2, label: "nz mesh" }, Es: { value: l.state(2e4), min: 5e3, max: 1e5, step: 1e3, label: "Es suelo (kN/m\xB2)" }, nu: { value: l.state(0.42), min: 0.2, max: 0.49, step: 0.01, label: "\u03BD suelo" }, Rx: { value: l.state(5), min: 1, max: 15, step: 0.5, label: "Rx carga (m)" }, Ry: { value: l.state(3), min: 1, max: 15, step: 0.5, label: "Ry carga (m)" }, w: { value: l.state(100), min: 10, max: 500, step: 10, label: "w (kN/m\xB2)" } }, J = l.state([]), K = l.state([]), Q = l.state({}), W = l.state({}), ee = l.state({}), te = l.state({}), ae = l.state({ N: 0, nElems: 0, nDOF: 0, s33_min: 0, s33_max: 0, uz_max: 0, elapsed: 0 });
l.derive(() => {
  const n = r.Lx.value.val, F = r.Ly.value.val, le = r.Lz.value.val, c = Math.round(r.nx.value.val), f = Math.round(r.ny.value.val), b = Math.round(r.nz.value.val), S = r.Es.value.val, R = r.nu.value.val, A = r.Rx.value.val, D = r.Ry.value.val, ie = r.w.value.val, k = n / c, E = F / f, re = le / b, i = (e, t, s) => s * (c + 1) * (f + 1) + t * (c + 1) + e, B = [];
  for (let e = 0; e <= b; e++) for (let t = 0; t <= f; t++) for (let s = 0; s <= c; s++) B.push([-n / 2 + s * k, -F / 2 + t * E, -e * re]);
  const M = [];
  for (let e = 0; e < b; e++) for (let t = 0; t < f; t++) for (let s = 0; s < c; s++) M.push([i(s, t, e + 1), i(s + 1, t, e + 1), i(s + 1, t + 1, e + 1), i(s, t + 1, e + 1), i(s, t, e), i(s + 1, t, e), i(s + 1, t + 1, e), i(s, t + 1, e)]);
  const p = /* @__PURE__ */ new Map();
  for (let e = 0; e <= f; e++) for (let t = 0; t <= c; t++) p.set(i(t, e, b), [true, true, true]);
  for (let e = 0; e <= b; e++) for (let t = 0; t <= f; t++) {
    const s = i(0, t, e), a = i(c, t, e), o = p.get(s) ?? [false, false, false], d = p.get(a) ?? [false, false, false];
    p.set(s, [true, o[1], o[2]]), p.set(a, [true, d[1], d[2]]);
  }
  for (let e = 0; e <= b; e++) for (let t = 0; t <= c; t++) {
    const s = i(t, 0, e), a = i(t, f, e), o = p.get(s) ?? [false, false, false], d = p.get(a) ?? [false, false, false];
    p.set(s, [o[0], true, o[2]]), p.set(a, [d[0], true, d[2]]);
  }
  const de = -A / 2, me = A / 2, ce = -D / 2, pe = D / 2, I = /* @__PURE__ */ new Map();
  for (let e = 0; e <= f; e++) for (let t = 0; t <= c; t++) {
    const s = -n / 2 + t * k, a = -F / 2 + e * E;
    if (s < de - 1e-6 || s > me + 1e-6 || a < ce - 1e-6 || a > pe + 1e-6) continue;
    let o = k, d = E;
    (t === 0 || t === c) && (o = k / 2), (e === 0 || e === f) && (d = E / 2);
    const m = o * d, w = -ie * m;
    I.set(i(t, e, 0), [0, 0, w]);
  }
  const z = B.length;
  console.log(`Bulbo presiones: ${z} nodos, ${M.length} hex8, ${3 * z} DOFs`);
  let u;
  try {
    u = he({ nodes: B, elements: M, E: S, nu: R, supports: p, loads: I }), console.log(`H8 resuelto en ${u.elapsedMs.toFixed(0)} ms`);
  } catch (e) {
    console.warn("Bulbo presiones H8:", (e == null ? void 0 : e.message) ?? e), u = null;
  }
  const ue = B.map((e) => [e[0], e[1], e[2]]), C = [], v = { elasticities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map() };
  function fe(e, t, s, a) {
    C.push([e, t, s, a]);
    const o = C.length - 1;
    v.elasticities.set(o, S), v.poissonsRatios.set(o, R), v.thicknesses.set(o, 1e-3), v.shearModuli.set(o, S / (2 * (1 + R))), v.densities.set(o, 18 / 9.80665), v.areas.set(o, 0), v.momentsOfInertiaY.set(o, 0), v.momentsOfInertiaZ.set(o, 0), v.torsionalConstants.set(o, 0);
  }
  const L = /* @__PURE__ */ new Map();
  function y(e) {
    const t = [...e].sort((s, a) => s - a).join(",");
    L.has(t) ? L.delete(t) : L.set(t, e);
  }
  for (let e = 0; e < b; e++) for (let t = 0; t < f; t++) for (let s = 0; s < c; s++) {
    const a = (o, d, m) => i(s + o, t + d, e + m);
    y([a(0, 0, 0), a(1, 0, 0), a(1, 1, 0), a(0, 1, 0)]), y([a(0, 0, 1), a(1, 0, 1), a(1, 1, 1), a(0, 1, 1)]), y([a(0, 0, 0), a(1, 0, 0), a(1, 0, 1), a(0, 0, 1)]), y([a(0, 1, 0), a(1, 1, 0), a(1, 1, 1), a(0, 1, 1)]), y([a(0, 0, 0), a(0, 1, 0), a(0, 1, 1), a(0, 0, 1)]), y([a(1, 0, 0), a(1, 1, 0), a(1, 1, 1), a(1, 0, 1)]);
  }
  L.forEach((e) => fe(...e));
  const Y = { deformations: /* @__PURE__ */ new Map() };
  u && u.displacements.forEach(([e, t, s], a) => {
    Y.deformations.set(a, [e, t, s, 0, 0, 0]);
  });
  const Z = {};
  if (u) {
    const e = /* @__PURE__ */ new Map();
    M.forEach((s, a) => {
      const o = u.vonMisesPerElement.get(a) || [], d = o.reduce((m, w) => m + w, 0) / Math.max(1, o.length);
      for (const m of s) {
        const w = e.get(m) || { sum: 0, count: 0 };
        w.sum += d, w.count += 1, e.set(m, w);
      }
    });
    const t = /* @__PURE__ */ new Map();
    C.forEach((s, a) => {
      const o = s.map((d) => {
        const m = e.get(d);
        return m ? m.sum / m.count : 0;
      });
      t.set(a, [o[0], o[1], o[2], o[3]]);
    }), Z.vonMises = t;
  }
  const X = /* @__PURE__ */ new Map();
  p.forEach((e, t) => X.set(t, [e[0], e[1], e[2], true, true, true]));
  const T = /* @__PURE__ */ new Map();
  I.forEach((e, t) => T.set(t, [e[0], e[1], e[2], 0, 0, 0]));
  let V = 0, H = 0, N = 0;
  if (u) {
    let e = 1 / 0, t = -1 / 0;
    u.vonMisesPerElement.forEach((s) => {
      s.forEach((a) => {
        a < e && (e = a), a > t && (t = a);
      });
    }), V = e === 1 / 0 ? 0 : e, H = t === -1 / 0 ? 0 : t, u.displacements.forEach(([, , s]) => {
      Math.abs(s) > Math.abs(N) && (N = s);
    });
  }
  ae.val = { N: z, nElems: M.length, nDOF: 3 * z, s33_min: V, s33_max: H, uz_max: N, elapsed: (u == null ? void 0 : u.elapsedMs) ?? 0 }, J.val = ue, K.val = C, Q.val = { supports: X, loads: T }, W.val = v, ee.val = Y, te.val = Z;
});
const se = xe({ mesh: { nodes: J, elements: K, nodeInputs: Q, elementInputs: W, deformOutputs: ee, analyzeOutputs: te }, settingsObj: { deformedShape: false, shellResults: "vonMises", gridSize: 25, deformScale: 100, custom3D: false, loads: true, supports: true, showCotas: false, displayScale: 0.5 } }), P = document.createElement("div");
P.style.cssText = "position:fixed;top:8px;right:8px;width:320px;max-height:90vh;overflow-y:auto;z-index:9999;";
const _ = new ve({ title: "\u{1F30D} Bulbo de Presiones (Serquen SF-70)", container: P, expanded: true }), g = { N: 0, nElems: 0, nDOF: 0, s33_min: 0, s33_max: 0, uz_max: 0, elapsed: 0 }, O = _.addFolder({ title: "Estad\xEDsticas malla H8" });
O.addBinding(g, "N", { readonly: true, label: "Nodos", format: (n) => n.toFixed(0) });
O.addBinding(g, "nElems", { readonly: true, label: "Elementos hex8", format: (n) => n.toFixed(0) });
O.addBinding(g, "nDOF", { readonly: true, label: "DOFs", format: (n) => n.toFixed(0) });
O.addBinding(g, "elapsed", { readonly: true, label: "solve (ms)", format: (n) => n.toFixed(0) });
const j = _.addFolder({ title: "Resultados (vonMises proxy de S33)" });
j.addBinding(g, "s33_min", { readonly: true, label: "vM min (kN/m\xB2)", format: (n) => n.toExponential(3) });
j.addBinding(g, "s33_max", { readonly: true, label: "vM max (kN/m\xB2)", format: (n) => n.toExponential(3) });
j.addBinding(g, "uz_max", { readonly: true, label: "u_z max (m)", format: (n) => n.toExponential(3) });
const h = _.addFolder({ title: "\u2702\uFE0F Planos de corte X/Y/Z", expanded: true }), x = window.__hekatanClip, U = r.Lx.value.rawVal, $ = r.Ly.value.rawVal, ye = r.Lz.value.rawVal;
h.addBinding(x, "enableX", { label: "Cortar X" }).on("change", () => window.__hekatanClipApply());
h.addBinding(x, "posX", { min: -U / 2, max: U / 2, step: 0.1, label: "  pos X (m)" }).on("change", () => window.__hekatanClipApply());
h.addBinding(x, "invertX", { label: "  invertir X" }).on("change", () => window.__hekatanClipApply());
h.addBinding(x, "enableY", { label: "Cortar Y" }).on("change", () => window.__hekatanClipApply());
h.addBinding(x, "posY", { min: -$ / 2, max: $ / 2, step: 0.1, label: "  pos Y (m)" }).on("change", () => window.__hekatanClipApply());
h.addBinding(x, "invertY", { label: "  invertir Y" }).on("change", () => window.__hekatanClipApply());
h.addBinding(x, "enableZ", { label: "Cortar Z" }).on("change", () => window.__hekatanClipApply());
h.addBinding(x, "posZ", { min: -ye, max: 0, step: 0.1, label: "  pos Z (m)" }).on("change", () => window.__hekatanClipApply());
h.addBinding(x, "invertZ", { label: "  invertir Z" }).on("change", () => window.__hekatanClipApply());
const ne = _.addFolder({ title: "Unidades", expanded: false }), oe = { stress: q.val, disp: G.val };
ne.addBinding(oe, "stress", { options: { "kN/m\xB2": "kN/m\xB2", kPa: "kPa", MPa: "MPa", "kgf/cm\xB2": "kgf/cm\xB2", "tonf/m\xB2": "tonf/m\xB2", ksi: "ksi", psi: "psi" }, label: "Tensi\xF3n" }).on("change", (n) => {
  q.val = n.value;
});
ne.addBinding(oe, "disp", { options: { m: "m", cm: "cm", mm: "mm", \u00B5m: "\xB5m" }, label: "Desplaz." }).on("change", (n) => {
  G.val = n.value;
});
document.body.append(P);
l.derive(() => {
  Object.assign(g, ae.val), _.refresh();
});
document.body.append(be(r), se, we({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/bulbo-presiones-suelo/main.ts" }));
setTimeout(() => ge(), 200);
setTimeout(() => {
  var _a;
  const n = se.__ctx;
  (n == null ? void 0 : n.camera) && (n == null ? void 0 : n.controls) && (n.camera.up.set(0, 0, 1), n.camera.position.set(20, -25, 18), n.controls.target.set(0, 0, -5), n.controls.update(), (_a = n.render) == null ? void 0 : _a.call(n));
}, 800);
