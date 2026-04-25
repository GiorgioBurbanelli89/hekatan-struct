import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as a } from "./theme-2eEBQPmF.js";
import { a as H } from "./analyze-BydHtRcI.js";
import { d as N, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as W } from "./getViewer-CARv9b4z.js";
import { g as j } from "./getParameters-CIJBOwMB.js";
import { g as B } from "./styles-Cjdl64P4.js";
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
    W: {
      value: a.state(5),
      min: 1,
      max: 15,
      step: 0.5,
      label: "Ancho W (m)"
    },
    H: {
      value: a.state(3),
      min: 1,
      max: 12,
      step: 0.5,
      label: "Altura H (m)"
    },
    t: {
      value: a.state(0.2),
      min: 0.05,
      max: 0.6,
      step: 0.05,
      label: "Espesor t (m)"
    },
    nx: {
      value: a.state(8),
      min: 2,
      max: 24,
      step: 1,
      label: "Mesh nx"
    },
    ny: {
      value: a.state(6),
      min: 2,
      max: 24,
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
      label: "\u03BD (Poisson)"
    },
    P: {
      value: a.state(100),
      min: 0,
      max: 1e3,
      step: 10,
      label: "Carga lateral total (kN)"
    }
  }, b = a.state([]), M = a.state([]), g = a.state({}), y = a.state({}), w = a.state({}), S = a.state({});
  a.derive(() => {
    const O = n.W.value.val, E = n.H.value.val, z = n.t.value.val, o = Math.round(n.nx.value.val), m = Math.round(n.ny.value.val), i = n.E.value.val, v = n.nu.value.val, I = n.P.value.val, P = i / (2 * (1 + v)), _ = O / o, k = E / m, r = [], s = [];
    for (let t = 0; t <= m; t++) for (let e = 0; e <= o; e++) r.push([
      e * _,
      0,
      t * k
    ]);
    const l = o + 1;
    for (let t = 0; t < m; t++) for (let e = 0; e < o; e++) s.push([
      t * l + e,
      t * l + e + 1,
      (t + 1) * l + e + 1,
      (t + 1) * l + e
    ]);
    const d = /* @__PURE__ */ new Map();
    for (let t = 0; t <= o; t++) d.set(t, [
      true,
      true,
      true,
      true,
      true,
      true
    ]);
    const u = [];
    for (let t = 0; t <= o; t++) u.push(m * l + t);
    const A = I / u.length, f = /* @__PURE__ */ new Map();
    for (const t of u) f.set(t, [
      A,
      0,
      0,
      0,
      0,
      0
    ]);
    const h = {
      supports: d,
      loads: f
    }, c = {
      elasticities: new Map(s.map((t, e) => [
        e,
        i
      ])),
      poissonsRatios: new Map(s.map((t, e) => [
        e,
        v
      ])),
      thicknesses: new Map(s.map((t, e) => [
        e,
        z
      ])),
      shearModuli: new Map(s.map((t, e) => [
        e,
        P
      ])),
      densities: new Map(s.map((t, e) => [
        e,
        24 / 9.80665
      ]))
    };
    let p = {}, x = {};
    try {
      p = N(r, s, h, c), x = H(r, s, c, p);
      const t = m * l + Math.floor(o / 2), e = p.deformations.get(t), C = e ? e[0] : 0;
      console.log(`Muro Q4: Ux=${C.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
    } catch (t) {
      console.warn("Muro Q4 deform/analyze:", (t == null ? void 0 : t.message) ?? t);
    }
    b.val = r, M.val = s, g.val = h, y.val = c, w.val = p, S.val = x;
  });
  document.body.append(j(n), W({
    mesh: {
      nodes: b,
      elements: M,
      nodeInputs: g,
      elementInputs: y,
      deformOutputs: w,
      analyzeOutputs: S
    },
    settingsObj: {
      deformedShape: true
    }
  }), B({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/shear-wall-q4/main.ts"
  }));
});
