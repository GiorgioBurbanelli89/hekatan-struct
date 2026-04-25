import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as a } from "./theme-2eEBQPmF.js";
import { a as C } from "./analyze-BydHtRcI.js";
import { d as N, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as V } from "./getViewer-CARv9b4z.js";
import { g as $ } from "./getParameters-CIJBOwMB.js";
import { g as A } from "./styles-Cjdl64P4.js";
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
  const n = {
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
  }, z = a.state([]), _ = a.state([]), E = a.state({}), I = a.state({}), O = a.state({}), S = a.state({});
  a.derive(() => {
    const p = n.L.value.val, u = n.h.value.val, d = n.t.value.val, l = Math.round(n.nx.value.val), m = Math.round(n.ny.value.val), c = n.E.value.val, f = n.nu.value.val, h = n.P.value.val, L = c / (2 * (1 + f)), j = p / l, k = u / m, r = [], s = [];
    for (let t = 0; t <= m; t++) for (let e = 0; e <= l; e++) r.push([
      e * j,
      0,
      t * k
    ]);
    const o = l + 1;
    for (let t = 0; t < m; t++) for (let e = 0; e < l; e++) s.push([
      t * o + e,
      t * o + e + 1,
      (t + 1) * o + e + 1,
      (t + 1) * o + e
    ]);
    const b = /* @__PURE__ */ new Map();
    for (let t = 0; t <= m; t++) b.set(t * o, [
      true,
      true,
      true,
      true,
      true,
      true
    ]);
    const x = Math.floor(m / 2) * o + l, g = /* @__PURE__ */ new Map();
    g.set(x, [
      0,
      0,
      -h,
      0,
      0,
      0
    ]);
    const M = {
      supports: b,
      loads: g
    }, v = {
      elasticities: new Map(s.map((t, e) => [
        e,
        c
      ])),
      poissonsRatios: new Map(s.map((t, e) => [
        e,
        f
      ])),
      thicknesses: new Map(s.map((t, e) => [
        e,
        d
      ])),
      shearModuli: new Map(s.map((t, e) => [
        e,
        L
      ])),
      densities: new Map(s.map((t, e) => [
        e,
        24 / 9.80665
      ]))
    };
    let i = {}, y = {};
    try {
      i = N(r, s, M, v), y = C(r, s, v, i);
      const t = i.deformations.get(x), e = t ? t[2] : 0, P = d * u * u * u / 12, w = h * p * p * p / (3 * c * P);
      console.log(`Viga Q4: Uz_tip=${e.toExponential(4)} | Anal\xEDtico=${w.toExponential(4)} | ratio=${(Math.abs(e) / w).toFixed(4)}`);
    } catch (t) {
      console.warn("Viga Q4 deform/analyze:", (t == null ? void 0 : t.message) ?? t);
    }
    z.val = r, _.val = s, E.val = M, I.val = v, O.val = i, S.val = y;
  });
  document.body.append($(n), V({
    mesh: {
      nodes: z,
      elements: _,
      nodeInputs: E,
      elementInputs: I,
      deformOutputs: O,
      analyzeOutputs: S
    },
    settingsObj: {
      deformedShape: true
    }
  }), A({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/cantilever-beam-q4/main.ts"
  }));
});
