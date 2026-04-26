import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l } from "./theme-2eEBQPmF.js";
import { a as zt } from "./analyze-BydHtRcI.js";
import { d as It, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Pt } from "./getViewer-CARv9b4z.js";
import { g as Ot } from "./getParameters-CIJBOwMB.js";
import { g as Lt } from "./styles-Cjdl64P4.js";
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
  const D = 2e8, V = 0.3, at = D / (2 * (1 + V)), nt = 78, c = {
    B: {
      value: l.state(0.5),
      min: 0.25,
      max: 1.2,
      step: 0.02,
      label: "B placa (m, eje X)"
    },
    H: {
      value: l.state(0.5),
      min: 0.25,
      max: 1.2,
      step: 0.02,
      label: "H placa (m, eje Y)"
    },
    t_plate: {
      value: l.state(0.025),
      min: 0.012,
      max: 0.06,
      step: 2e-3,
      label: "Espesor placa (m)"
    },
    d_col: {
      value: l.state(0.3),
      min: 0.18,
      max: 0.5,
      step: 0.02,
      label: "d columna (m)"
    },
    bf_col: {
      value: l.state(0.25),
      min: 0.15,
      max: 0.4,
      step: 0.01,
      label: "bf columna (m)"
    },
    tf_col: {
      value: l.state(0.022),
      min: 0.012,
      max: 0.04,
      step: 2e-3,
      label: "tf pat\xEDn (m)"
    },
    tw_col: {
      value: l.state(0.014),
      min: 8e-3,
      max: 0.025,
      step: 1e-3,
      label: "tw alma (m)"
    },
    L_col: {
      value: l.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "L stub columna (m)"
    },
    d_bolt: {
      value: l.state(0.024),
      min: 0.012,
      max: 0.05,
      step: 2e-3,
      label: "\xD8 perno (m)"
    },
    L_bolt: {
      value: l.state(0.3),
      min: 0.15,
      max: 0.6,
      step: 0.02,
      label: "L embebido (m)"
    },
    edge: {
      value: l.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "Dist al borde (m)"
    },
    Pu: {
      value: l.state(800),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu compresi\xF3n (kN)"
    },
    Mu: {
      value: l.state(80),
      min: 0,
      max: 800,
      step: 5,
      label: "Mu momento (kN\xB7m)"
    },
    nx: {
      value: l.state(12),
      min: 6,
      max: 24,
      step: 2,
      label: "Mesh nx (placa)"
    },
    ny: {
      value: l.state(12),
      min: 6,
      max: 24,
      step: 2,
      label: "Mesh ny (placa)"
    }
  }, lt = l.state([]), ct = l.state([]), ut = l.state({}), rt = l.state({}), mt = l.state({}), pt = l.state({});
  l.derive(() => {
    const v = c.B.value.val, b = c.H.value.val, W = c.t_plate.value.val, S = c.d_col.value.val, g = c.bf_col.value.val, w = c.tf_col.value.val, it = c.tw_col.value.val, k = c.L_col.value.val, j = c.d_bolt.value.val, dt = c.L_bolt.value.val, m = c.edge.value.val, X = c.Pu.value.val, Z = c.Mu.value.val, z = Math.round(c.nx.value.val), I = Math.round(c.ny.value.val), i = [], p = [], B = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map();
    function y(t, e, o) {
      return i.push([
        t,
        e,
        o
      ]), i.length - 1;
    }
    function P(t, e, o, s, a) {
      p.push([
        t,
        e,
        o,
        s
      ]);
      const n = p.length - 1;
      B.set(n, a), G.set(n, D), H.set(n, V), $.set(n, nt), C.set(n, 0), A.set(n, 0), F.set(n, 0), E.set(n, 0), J.set(n, at);
    }
    function ft(t, e, o, s, a) {
      p.push([
        t,
        e
      ]);
      const n = p.length - 1;
      G.set(n, D), J.set(n, at), H.set(n, V), $.set(n, nt), C.set(n, o), A.set(n, s), F.set(n, s), E.set(n, a), B.set(n, 0);
    }
    const vt = v / z, bt = b / I, h = [];
    for (let t = 0; t <= I; t++) {
      const e = [], o = -b / 2 + t * bt;
      for (let s = 0; s <= z; s++) {
        const a = -v / 2 + s * vt;
        e.push(y(a, o, 0));
      }
      h.push(e);
    }
    for (let t = 0; t < I; t++) for (let e = 0; e < z; e++) P(h[t][e], h[t][e + 1], h[t + 1][e + 1], h[t + 1][e], W);
    function O(t, e) {
      let o = -1, s = 1 / 0;
      for (let a = 0; a <= I; a++) for (let n = 0; n <= z; n++) {
        const st = h[a][n], [gt, wt, Nt] = i[st], ot = Math.hypot(gt - t, wt - e);
        ot < s && (s = ot, o = st);
      }
      return o;
    }
    const u = 6, r = 4, L = 3, R = +S / 2 - w / 2, N = -S / 2 + w / 2, d = [];
    for (let t = 0; t <= u; t++) {
      const e = t / u * k + 0, o = [];
      for (let s = 0; s <= r; s++) {
        const a = -g / 2 + s * g / r;
        t === 0 ? o.push(O(R, a)) : o.push(y(R, a, e));
      }
      d.push(o);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < r; e++) P(d[t][e], d[t][e + 1], d[t + 1][e + 1], d[t + 1][e], w);
    const f = [];
    for (let t = 0; t <= u; t++) {
      const e = t / u * k, o = [];
      for (let s = 0; s <= r; s++) {
        const a = -g / 2 + s * g / r;
        t === 0 ? o.push(O(N, a)) : o.push(y(N, a, e));
      }
      f.push(o);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < r; e++) P(f[t][e], f[t][e + 1], f[t + 1][e + 1], f[t + 1][e], w);
    const x = [];
    for (let t = 0; t <= u; t++) {
      const e = t / u * k, o = [];
      for (let s = 0; s <= L; s++) {
        const a = N + s * (R - N) / L;
        t === 0 ? o.push(O(a, 0)) : o.push(y(a, 0, e));
      }
      x.push(o);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < L; e++) P(x[t][e], x[t][e + 1], x[t + 1][e + 1], x[t + 1][e], it);
    const ht = Math.PI * j * j / 4, q = Math.PI * Math.pow(j, 4) / 64, xt = 2 * q, _t = [
      [
        -v / 2 + m,
        -b / 2 + m
      ],
      [
        +v / 2 - m,
        -b / 2 + m
      ],
      [
        +v / 2 - m,
        +b / 2 - m
      ],
      [
        -v / 2 + m,
        +b / 2 - m
      ]
    ], K = [];
    for (const [t, e] of _t) {
      const o = O(t, e), s = y(t, e, -dt);
      K.push(s), ft(o, s, ht, q, xt);
    }
    const Q = /* @__PURE__ */ new Map(), yt = [
      true,
      true,
      true,
      true,
      true,
      true
    ];
    for (const t of K) Q.set(t, yt);
    const M = [];
    for (let t = 0; t <= r; t++) M.push(d[u][t]);
    for (let t = 0; t <= r; t++) M.push(f[u][t]);
    for (let t = 1; t < L; t++) M.push(x[u][t]);
    const _ = /* @__PURE__ */ new Map(), Mt = -X / M.length;
    for (const t of M) _.set(t, [
      0,
      0,
      Mt,
      0,
      0,
      0
    ]);
    const U = Z / S / (r + 1);
    for (let t = 0; t <= r; t++) {
      const e = d[u][t], o = f[u][t], s = _.get(e) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      _.set(e, [
        s[0],
        s[1],
        s[2] + U,
        s[3],
        s[4],
        s[5]
      ]);
      const a = _.get(o) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      _.set(o, [
        a[0],
        a[1],
        a[2] - U,
        a[3],
        a[4],
        a[5]
      ]);
    }
    const tt = {
      supports: Q,
      loads: _
    }, T = {
      elasticities: G,
      shearModuli: J,
      areas: C,
      momentsOfInertiaZ: F,
      momentsOfInertiaY: A,
      torsionalConstants: E,
      densities: $,
      poissonsRatios: H,
      thicknesses: B
    };
    let Y = {}, et = {};
    try {
      Y = It(i, p, tt, T), et = zt(i, p, T, Y), console.log(`Placa base H: ${i.length} nodos, ${p.length} elementos | Pu=${X}kN, Mu=${Z}kN\xB7m | t_plate=${(W * 1e3).toFixed(0)}mm`);
    } catch (t) {
      console.warn("Placa base deform/analyze:", (t == null ? void 0 : t.message) ?? t);
    }
    lt.val = i, ct.val = p, ut.val = tt, rt.val = T, mt.val = Y, pt.val = et;
  });
  document.body.append(Ot(c), Pt({
    mesh: {
      nodes: lt,
      elements: ct,
      nodeInputs: ut,
      elementInputs: rt,
      deformOutputs: mt,
      analyzeOutputs: pt
    },
    settingsObj: {
      deformedShape: true,
      shellResults: "vonMises"
    }
  }), Lt({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-h/main.ts"
  }));
});
