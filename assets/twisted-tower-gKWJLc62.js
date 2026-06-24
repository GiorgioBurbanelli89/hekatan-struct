import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as r } from "./theme-N6TOO4-G.js";
import { a as T } from "./analyze-CWooBpVN.js";
import { d as H, __tla as __tla_0 } from "./didacticCpp-C0Qfkfmr.js";
import { g as k } from "./getViewer-DBvt0Rru.js";
import { g as A } from "./getParameters-DHsPbgw3.js";
import { g as G } from "./styles-C91QLG29.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
import { __tla as __tla_1 } from "./deform-yikvckPF.js";
import "./preload-helper-DrUBW0xl.js";
import "./Text-RdOEoJ2D.js";
import "./tweakpane-BXg6ZhiP.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const _ = 2e8, z = 0.3, j = _ / (2 * (1 + z)), B = 78, p = {
    nFloors: {
      value: r.state(12),
      min: 4,
      max: 30,
      step: 1,
      label: "Pisos"
    },
    H_floor: {
      value: r.state(3.5),
      min: 2,
      max: 6,
      step: 0.5,
      label: "Altura piso (m)"
    },
    R: {
      value: r.state(5),
      min: 2,
      max: 15,
      step: 0.5,
      label: "Radio anillo (m)"
    },
    nCols: {
      value: r.state(6),
      min: 4,
      max: 12,
      step: 1,
      label: "Columnas / piso"
    },
    twistPerFloor: {
      value: r.state(5),
      min: 0,
      max: 20,
      step: 1,
      label: "Twist por piso (\xB0)"
    },
    windFactor: {
      value: r.state(10),
      min: 0,
      max: 50,
      step: 2,
      label: "Carga viento top (kN)"
    }
  }, I = r.state([]), F = r.state([]), O = r.state({}), x = r.state({}), C = r.state({}), S = r.state({});
  r.derive(() => {
    const l = Math.round(p.nFloors.value.val), v = p.H_floor.value.val, w = p.R.value.val, a = Math.round(p.nCols.value.val), y = p.twistPerFloor.value.val, P = p.windFactor.value.val, i = [], s = [];
    for (let t = 0; t <= l; t++) {
      const e = t * v, o = t * y * Math.PI / 180;
      for (let n = 0; n < a; n++) {
        const g = o + 2 * Math.PI * n / a;
        i.push([
          w * Math.cos(g),
          w * Math.sin(g),
          e
        ]);
      }
    }
    for (let t = 0; t <= l; t++) {
      const e = t * a;
      for (let o = 0; o < a; o++) s.push([
        e + o,
        e + (o + 1) % a
      ]);
      if (t < l) {
        const o = (t + 1) * a;
        for (let n = 0; n < a; n++) s.push([
          e + n,
          o + n
        ]), s.push([
          e + n,
          o + (n + 1) % a
        ]);
      }
    }
    const m = (l + 1) * a;
    for (let t = 0; t <= l; t++) {
      i.push([
        0,
        0,
        t * v
      ]);
      const e = t * a;
      for (let o = 0; o < a; o++) s.push([
        m + t,
        e + o
      ]);
    }
    for (let t = 0; t < l; t++) s.push([
      m + t,
      m + t + 1
    ]);
    const u = /* @__PURE__ */ new Map();
    for (let t = 0; t < a; t++) u.set(t, [
      true,
      true,
      true,
      true,
      true,
      true
    ]);
    u.set(m, [
      true,
      true,
      true,
      true,
      true,
      true
    ]);
    const h = /* @__PURE__ */ new Map();
    for (let t = 1; t <= l; t++) {
      const e = P * t / l, o = t * a;
      for (let n = 0; n < a; n++) h.set(o + n, [
        e,
        0,
        -5,
        0,
        0,
        0
      ]);
    }
    const M = {
      supports: u,
      loads: h
    }, R = 8e-3, c = 1e-5, d = {
      elasticities: new Map(s.map((t, e) => [
        e,
        _
      ])),
      shearModuli: new Map(s.map((t, e) => [
        e,
        j
      ])),
      areas: new Map(s.map((t, e) => [
        e,
        R
      ])),
      momentsOfInertiaZ: new Map(s.map((t, e) => [
        e,
        c
      ])),
      momentsOfInertiaY: new Map(s.map((t, e) => [
        e,
        c
      ])),
      torsionalConstants: new Map(s.map((t, e) => [
        e,
        2 * c
      ])),
      densities: new Map(s.map((t, e) => [
        e,
        B
      ])),
      poissonsRatios: new Map(s.map((t, e) => [
        e,
        z
      ]))
    };
    let f = {}, b = {};
    try {
      f = H(i, s, M, d), b = T(i, s, d, f);
    } catch (t) {
      console.warn("Twisted Tower deform/analyze:", (t == null ? void 0 : t.message) ?? t);
    }
    I.val = i, F.val = s, O.val = M, x.val = d, C.val = f, S.val = b;
  });
  document.body.append(A(p), k({
    mesh: {
      nodes: I,
      elements: F,
      nodeInputs: O,
      elementInputs: x,
      deformOutputs: C,
      analyzeOutputs: S
    },
    settingsObj: {
      deformedShape: true
    }
  }), G({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/twisted-tower/main.ts"
  }));
});
