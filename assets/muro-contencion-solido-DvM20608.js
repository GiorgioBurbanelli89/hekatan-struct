import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as o } from "./theme-Co6w-pfC.js";
import { P as X } from "./tweakpane-BXg6ZhiP.js";
import { h as ee, __tla as __tla_0 } from "./h8-CWzTAggU.js";
import { g as te, d as I, e as C } from "./getViewer-CSUEDMoT.js";
import { e as ae } from "./makeDraggable-zx2br6Yh.js";
import { g as se } from "./getParameters-D98NSct8.js";
import { g as ne } from "./styles-BcI84iw5.js";
import { __tla as __tla_1 } from "./deform-BTnZUOjy.js";
import "./preload-helper-V2P8TQsQ.js";
import "./Text-2W5davkr.js";
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
  const L = (e) => Math.round(e * 1e6) / 1e6;
  function oe(e) {
    const z = e.toe + e.t + e.heel, y = e.tf + e.H, i = Math.max(1, Math.round(z / e.ms)), g = Math.max(1, Math.round(e.L / e.ms)), m = Math.max(1, Math.round(y / e.ms)), S = z / i, h = e.L / g, r = y / m, b = Math.round(e.toe / S), _ = Math.round((e.toe + e.t) / S), j = Math.round(e.tf / r), F = (a, s) => s < j || a >= b && a < _, x = /* @__PURE__ */ new Map(), O = [], p = (a, s, n) => {
      const E = `${a},${s},${n}`;
      let k = x.get(E);
      return k === void 0 && (k = O.length, x.set(E, k), O.push([
        L(a * S),
        L(s * h),
        L(n * r)
      ])), k;
    }, N = [];
    for (let a = 0; a < m; a++) for (let s = 0; s < g; s++) for (let n = 0; n < i; n++) F(n, a) && N.push([
      p(n, s, a),
      p(n + 1, s, a),
      p(n + 1, s + 1, a),
      p(n, s + 1, a),
      p(n, s, a + 1),
      p(n + 1, s, a + 1),
      p(n + 1, s + 1, a + 1),
      p(n, s + 1, a + 1)
    ]);
    const t = /* @__PURE__ */ new Map();
    for (let a = 0; a <= g; a++) for (let s = 0; s <= i; s++) {
      const n = x.get(`${s},${a},0`);
      n !== void 0 && t.set(n, [
        true,
        true,
        true
      ]);
    }
    const d = /* @__PURE__ */ new Map();
    let v = 0;
    const f = /* @__PURE__ */ new Set();
    for (let a = j; a < m; a++) for (let s = 0; s < g; s++) {
      const n = (a + 0.5) * r - e.tf, k = e.Ka * (e.gamma * (e.H - n) + e.q0) * h * r;
      v += k;
      for (const [Q, W] of [
        [
          s,
          a
        ],
        [
          s + 1,
          a
        ],
        [
          s + 1,
          a + 1
        ],
        [
          s,
          a + 1
        ]
      ]) {
        const H = x.get(`${_},${Q},${W}`);
        f.add(H);
        const $ = d.get(H) ?? [
          0,
          0,
          0
        ];
        $[0] -= k / 4, d.set(H, $);
      }
    }
    const w = Math.round(g / 2), l = x.get(`${_},${w},${m}`);
    return {
      nodes: O,
      elements: N,
      supports: t,
      loads: d,
      caraTrasera: [
        ...f
      ],
      nudoCoronacion: l,
      info: {
        nx: i,
        ny: g,
        nz: m,
        empujeTotal: v
      }
    };
  }
  const le = {
    H: 4,
    t: 0.4,
    toe: 0.6,
    heel: 1.6,
    tf: 0.4,
    L: 1,
    ms: 0.2,
    E: 25e6,
    nu: 0.2,
    Ka: 1 / 3,
    gamma: 18,
    q0: 10
  }, c = le, u = {
    H: {
      value: o.state(c.H),
      min: 1,
      max: 10,
      step: 0.2,
      label: "H alzado (m)"
    },
    t: {
      value: o.state(c.t),
      min: 0.2,
      max: 1,
      step: 0.1,
      label: "t alzado (m)"
    },
    toe: {
      value: o.state(c.toe),
      min: 0.2,
      max: 3,
      step: 0.1,
      label: "puntera (m)"
    },
    heel: {
      value: o.state(c.heel),
      min: 0.2,
      max: 5,
      step: 0.1,
      label: "tal\xF3n (m)"
    },
    tf: {
      value: o.state(c.tf),
      min: 0.2,
      max: 1,
      step: 0.1,
      label: "canto zapata (m)"
    },
    L: {
      value: o.state(c.L),
      min: 0.2,
      max: 5,
      step: 0.2,
      label: "longitud L (m)"
    },
    ms: {
      value: o.state(c.ms),
      min: 0.1,
      max: 0.5,
      step: 0.05,
      label: "malla (m)"
    },
    E: {
      value: o.state(c.E),
      min: 1e7,
      max: 4e7,
      step: 1e6,
      label: "E hormig\xF3n (kN/m\xB2)"
    },
    nu: {
      value: o.state(c.nu),
      min: 0.1,
      max: 0.3,
      step: 0.01,
      label: "\u03BD"
    },
    Ka: {
      value: o.state(c.Ka),
      min: 0.2,
      max: 0.6,
      step: 0.01,
      label: "Ka (Rankine)"
    },
    gamma: {
      value: o.state(c.gamma),
      min: 14,
      max: 22,
      step: 0.5,
      label: "\u03B3 relleno (kN/m\xB3)"
    },
    q0: {
      value: o.state(c.q0),
      min: 0,
      max: 50,
      step: 1,
      label: "sobrecarga q0 (kN/m\xB2)"
    },
    incompatible: {
      value: o.state(1),
      min: 0,
      max: 1,
      step: 1,
      label: "modos incompatibles (1 = SAP2000)"
    },
    campo: {
      value: o.state(0),
      min: 0,
      max: 2,
      step: 1,
      label: "color: 0 \u03C3xx \xB7 1 \u03C3zz \xB7 2 vonMises"
    }
  }, R = o.state([]), K = o.state([]), U = o.state({}), q = o.state({}), A = o.state({}), Z = o.state({}), G = o.state({
    N: 0,
    nElems: 0,
    nDOF: 0,
    empuje: 0,
    ux_top: 0,
    sig_min: 0,
    sig_max: 0,
    elapsed: 0
  });
  o.derive(() => {
    var _a;
    const e = {
      H: u.H.value.val,
      t: u.t.value.val,
      toe: u.toe.value.val,
      heel: u.heel.value.val,
      tf: u.tf.value.val,
      L: u.L.value.val,
      ms: u.ms.value.val,
      E: u.E.value.val,
      nu: u.nu.value.val,
      Ka: u.Ka.value.val,
      gamma: u.gamma.value.val,
      q0: u.q0.value.val
    }, z = Math.round(u.incompatible.value.val) === 1, y = Math.round(u.campo.value.val), i = oe(e), g = i.nodes.length;
    let m = null;
    try {
      m = ee({
        nodes: i.nodes,
        elements: i.elements,
        E: e.E,
        nu: e.nu,
        supports: i.supports,
        loads: i.loads,
        incompatible: z
      });
    } catch (t) {
      console.warn("muro solido H8:", (t == null ? void 0 : t.message) ?? t);
    }
    const S = i.nodes.map((t) => [
      t[0],
      t[1],
      t[2]
    ]), h = [], r = {
      elasticities: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map()
    }, b = (t, d, v, f, w) => {
      h.push([
        t,
        d,
        v,
        f
      ]);
      const l = h.length - 1;
      r.elasticities.set(l, e.E), r.poissonsRatios.set(l, e.nu), r.thicknesses.set(l, 1e-3), r.shearModuli.set(l, e.E / (2 * (1 + e.nu))), r.densities.set(l, 0), r.areas.set(l, 0), r.momentsOfInertiaZ.set(l, 0), r.momentsOfInertiaY.set(l, 0), r.torsionalConstants.set(l, 0);
    };
    i.elements.forEach((t, d) => {
      b(t[0], t[1], t[2], t[3]), b(t[4], t[5], t[6], t[7]), b(t[0], t[1], t[5], t[4]), b(t[1], t[2], t[6], t[5]), b(t[2], t[3], t[7], t[6]), b(t[3], t[0], t[4], t[7]);
    });
    const _ = {
      deformations: /* @__PURE__ */ new Map()
    };
    m && m.displacements.forEach(([t, d, v], f) => _.deformations.set(f, [
      t,
      d,
      v,
      0,
      0,
      0
    ]));
    const j = {};
    let F = 0, x = 0;
    if (m) {
      const t = /* @__PURE__ */ new Map();
      i.elements.forEach((v, f) => {
        const w = m.stressPerElement.get(f) || [], l = m.vonMisesPerElement.get(f) || [];
        let a = 0, s = 0;
        if (y === 2) for (const n of l) a += n, s++;
        else for (const n of w) a += n[y === 0 ? 0 : 2], s++;
        a = s ? a / s : 0;
        for (const n of v) {
          const E = t.get(n) ?? {
            s: 0,
            n: 0
          };
          E.s += a, E.n++, t.set(n, E);
        }
      });
      const d = /* @__PURE__ */ new Map();
      h.forEach((v, f) => {
        const w = v.map((l) => {
          const a = t.get(l);
          return a ? a.s / a.n : 0;
        });
        d.set(f, w);
        for (const l of w) l < F && (F = l), l > x && (x = l);
      }), j.vonMises = d;
    }
    const O = /* @__PURE__ */ new Map();
    i.supports.forEach((t, d) => O.set(d, [
      t[0],
      t[1],
      t[2],
      true,
      true,
      true
    ]));
    const p = /* @__PURE__ */ new Map();
    i.loads.forEach((t, d) => p.set(d, [
      t[0],
      t[1],
      t[2],
      0,
      0,
      0
    ]));
    const N = m ? ((_a = m.displacements.get(i.nudoCoronacion)) == null ? void 0 : _a[0]) ?? 0 : 0;
    G.val = {
      N: g,
      nElems: i.elements.length,
      nDOF: 3 * g,
      empuje: i.info.empujeTotal,
      ux_top: N,
      sig_min: F,
      sig_max: x,
      elapsed: (m == null ? void 0 : m.elapsedMs) ?? 0
    }, R.val = S, K.val = h, U.val = {
      supports: O,
      loads: p
    }, q.val = r, A.val = _, Z.val = j;
  });
  const V = te({
    mesh: {
      nodes: R,
      elements: K,
      nodeInputs: U,
      elementInputs: q,
      deformOutputs: A,
      analyzeOutputs: Z
    },
    settingsObj: {
      deformedShape: true,
      solidResults: "vonMises",
      shellResults: "none",
      gridSize: 6,
      deformScale: 200,
      custom3D: false,
      loads: true,
      supports: true,
      nodes: false,
      showCotas: false,
      displayScale: 0.3
    }
  }), T = document.createElement("div");
  T.style.cssText = "position:fixed;top:8px;right:8px;width:330px;max-height:90vh;overflow-y:auto;z-index:999;";
  const P = new X({
    title: "\u{1F9F1} Muro de contenci\xF3n en s\xF3lidos H8 (vs SAP2000)",
    container: T,
    expanded: true
  });
  window.__hekatanPanes = window.__hekatanPanes ?? [];
  window.__hekatanPanes.push(P);
  const M = {
    N: 0,
    nElems: 0,
    nDOF: 0,
    empuje: 0,
    ux_top: 0,
    sig_min: 0,
    sig_max: 0,
    elapsed: 0
  }, B = P.addFolder({
    title: "Malla H8"
  });
  B.addBinding(M, "N", {
    readonly: true,
    label: "Nudos",
    format: (e) => e.toFixed(0)
  });
  B.addBinding(M, "nElems", {
    readonly: true,
    label: "Hexaedros",
    format: (e) => e.toFixed(0)
  });
  B.addBinding(M, "nDOF", {
    readonly: true,
    label: "GDL",
    format: (e) => e.toFixed(0)
  });
  B.addBinding(M, "elapsed", {
    readonly: true,
    label: "solve (ms)",
    format: (e) => e.toFixed(0)
  });
  const D = P.addFolder({
    title: "Resultados"
  });
  D.addBinding(M, "empuje", {
    readonly: true,
    label: "Empuje total (kN)",
    format: (e) => e.toFixed(2)
  });
  D.addBinding(M, "ux_top", {
    readonly: true,
    label: "u_x coronaci\xF3n (m)",
    format: (e) => e.toExponential(4)
  });
  D.addBinding(M, "sig_min", {
    readonly: true,
    label: "\u03C3 min (kN/m\xB2)",
    format: (e) => e.toFixed(1)
  });
  D.addBinding(M, "sig_max", {
    readonly: true,
    label: "\u03C3 max (kN/m\xB2)",
    format: (e) => e.toFixed(1)
  });
  const Y = P.addFolder({
    title: "Unidades",
    expanded: false
  }), J = {
    stress: C.val,
    disp: I.val
  };
  Y.addBinding(J, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      kPa: "kPa",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      "tonf/m\xB2": "tonf/m\xB2"
    },
    label: "Tensi\xF3n"
  }).on("change", (e) => {
    C.val = e.value;
  });
  Y.addBinding(J, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "Desplaz."
  }).on("change", (e) => {
    I.val = e.value;
  });
  document.body.append(T);
  o.derive(() => {
    Object.assign(M, G.val), P.refresh();
  });
  document.body.append(se(u), V, ne({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct-lineal/blob/main/examples/src/muro-contencion-solido/main.ts"
  }));
  setTimeout(() => ae(), 200);
  setTimeout(() => {
    var _a;
    const e = V.__ctx;
    (e == null ? void 0 : e.camera) && (e == null ? void 0 : e.controls) && (e.camera.up.set(0, 0, 1), e.camera.position.set(7, -8, 5), e.controls.target.set(1.3, 0.5, 2.2), e.controls.update(), (_a = e.render) == null ? void 0 : _a.call(e));
  }, 800);
});
