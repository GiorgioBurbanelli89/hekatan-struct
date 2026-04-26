import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as a } from "./theme-2eEBQPmF.js";
import { a as N } from "./analyze-BydHtRcI.js";
import { d as T, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as A } from "./getViewer-CARv9b4z.js";
import { g as B } from "./getParameters-CIJBOwMB.js";
import { g as V } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
import "./Text-DyNVkyur.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const o = {
    L: {
      value: a.state(6),
      min: 1,
      max: 20,
      step: 0.5,
      label: "Luz L (m)"
    },
    h: {
      value: a.state(0.5),
      min: 0.1,
      max: 2,
      step: 0.05,
      label: "Altura h (m)"
    },
    t: {
      value: a.state(0.2),
      min: 0.05,
      max: 0.6,
      step: 0.05,
      label: "Espesor t (m)"
    },
    nx: {
      value: a.state(12),
      min: 4,
      max: 30,
      step: 1,
      label: "Mesh nx"
    },
    ny: {
      value: a.state(4),
      min: 2,
      max: 12,
      step: 1,
      label: "Mesh ny"
    },
    E: {
      value: a.state(25e6),
      min: 1e7,
      max: 5e7,
      step: 1e6,
      label: "E (kN/m\xB2)"
    },
    nu: {
      value: a.state(0.2),
      min: 0,
      max: 0.49,
      step: 0.05,
      label: "\u03BD"
    },
    P: {
      value: a.state(50),
      min: 0,
      max: 500,
      step: 10,
      label: "Carga punta (kN)"
    }
  }, z = a.state([]), I = a.state([]), _ = a.state({}), k = a.state({}), L = a.state({}), O = a.state({});
  a.derive(() => {
    const p = o.L.value.val, r = o.h.value.val, x = o.t.value.val, l = Math.round(o.nx.value.val), i = Math.round(o.ny.value.val), c = o.E.value.val, f = o.nu.value.val, b = o.P.value.val, S = c / (2 * (1 + f)), P = p / l, j = r / i, m = [], n = [];
    for (let e = 0; e <= i; e++) for (let t = 0; t <= l; t++) m.push([
      t * P,
      0,
      e * j
    ]);
    const s = l + 1;
    for (let e = 0; e < i; e++) for (let t = 0; t < l; t++) n.push([
      e * s + t,
      e * s + t + 1,
      (e + 1) * s + t + 1,
      (e + 1) * s + t
    ]);
    const h = /* @__PURE__ */ new Map();
    for (let e = 0; e <= i; e++) h.set(e * s, [
      true,
      true,
      true,
      true,
      true,
      true
    ]);
    const g = Math.floor(i / 2) * s + l, y = /* @__PURE__ */ new Map();
    y.set(g, [
      0,
      0,
      -b,
      0,
      0,
      0
    ]);
    const M = {
      supports: h,
      loads: y
    }, d = {
      elasticities: new Map(n.map((e, t) => [
        t,
        c
      ])),
      poissonsRatios: new Map(n.map((e, t) => [
        t,
        f
      ])),
      thicknesses: new Map(n.map((e, t) => [
        t,
        x
      ])),
      shearModuli: new Map(n.map((e, t) => [
        t,
        S
      ])),
      densities: new Map(n.map((e, t) => [
        t,
        24 / 9.80665
      ]))
    };
    let u = {}, w = {};
    try {
      u = T(m, n, M, d), w = N(m, n, d, u);
      const e = u.deformations.get(g), t = e ? e[2] : 0, C = x * r * r * r / 12, E = b * p * p * p / (3 * c * C);
      console.log(`Viga Q4: Uz_tip=${t.toExponential(4)} | Anal\xEDtico=${E.toExponential(4)} | ratio=${(Math.abs(t) / E).toFixed(4)}`);
    } catch (e) {
      console.warn("Viga Q4 deform/analyze:", (e == null ? void 0 : e.message) ?? e);
    }
    z.val = m, I.val = n, _.val = M, k.val = d, L.val = u, O.val = w;
  });
  const v = document.createElement("div");
  v.style.cssText = "position:fixed;top:8px;right:8px;background:rgba(20,20,20,0.92);color:#ddd;font:11px/1.4 ui-monospace,Menlo,monospace;padding:10px 14px;border-radius:6px;border:1px solid #444;z-index:9999;min-width:280px;max-width:360px;";
  v.innerHTML = `
  <div style="font-weight:bold;color:#ffaa00;margin-bottom:4px;">\u{1F9EA} BENCHMARK \u2014 cantilever-beam-q4</div>
  <ul style="margin:0;padding-left:16px;">
    <li style="color:#7eff7e">\u26A0 Euler-Bernoulli \u03B4=PL\xB3/3EI \u2014 \u0394 1-3% (shear locking)</li>
    <li style="color:#aaa">\u26A0 Tensi\xF3n flexional max \u03C3=Mc/I</li>
  </ul>
  <div style="margin-top:6px;font-size:10px;color:#888;">F12 console for live \u0394%</div>
`;
  document.body.append(v);
  document.body.append(B(o), A({
    mesh: {
      nodes: z,
      elements: I,
      nodeInputs: _,
      elementInputs: k,
      deformOutputs: L,
      analyzeOutputs: O
    },
    settingsObj: {
      deformedShape: true
    }
  }), V({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/cantilever-beam-q4/main.ts"
  }));
});
