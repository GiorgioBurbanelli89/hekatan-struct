import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l } from "./theme-2eEBQPmF.js";
import { a as Pt } from "./analyze-BydHtRcI.js";
import { d as St, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Ot } from "./getViewer-CARv9b4z.js";
import { g as Lt } from "./getParameters-CIJBOwMB.js";
import { g as Nt } from "./styles-Cjdl64P4.js";
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
  const D = 2e8, V = 0.3, nt = D / (2 * (1 + V)), lt = 78, c = {
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
      value: l.state(300),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu compresi\xF3n (kN)"
    },
    Mu: {
      value: l.state(30),
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
  }, ct = l.state([]), ut = l.state([]), rt = l.state({}), it = l.state({}), mt = l.state({}), pt = l.state({});
  l.derive(() => {
    const u = c.B.value.val, b = c.H.value.val, W = c.t_plate.value.val, N = c.d_col.value.val, w = c.bf_col.value.val, z = c.tf_col.value.val, ft = c.tw_col.value.val, k = c.L_col.value.val, j = c.d_bolt.value.val, vt = c.L_bolt.value.val, m = c.edge.value.val, X = c.Pu.value.val, Z = c.Mu.value.val, I = Math.round(c.nx.value.val), P = Math.round(c.ny.value.val), v = [], p = [], B = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
    function y(t, e, o) {
      return v.push([
        t,
        e,
        o
      ]), v.length - 1;
    }
    function S(t, e, o, s, a) {
      p.push([
        t,
        e,
        o,
        s
      ]);
      const n = p.length - 1;
      B.set(n, a), G.set(n, D), H.set(n, V), $.set(n, lt), C.set(n, 0), E.set(n, 0), F.set(n, 0), T.set(n, 0), A.set(n, nt);
    }
    function bt(t, e, o, s, a) {
      p.push([
        t,
        e
      ]);
      const n = p.length - 1;
      G.set(n, D), A.set(n, nt), H.set(n, V), $.set(n, lt), C.set(n, o), E.set(n, s), F.set(n, s), T.set(n, a), B.set(n, 0);
    }
    const ht = u / I, xt = b / P, h = [];
    for (let t = 0; t <= P; t++) {
      const e = [], o = -b / 2 + t * xt;
      for (let s = 0; s <= I; s++) {
        const a = -u / 2 + s * ht;
        e.push(y(a, o, 0));
      }
      h.push(e);
    }
    for (let t = 0; t < P; t++) for (let e = 0; e < I; e++) S(h[t][e], h[t][e + 1], h[t + 1][e + 1], h[t + 1][e], W);
    function O(t, e) {
      let o = -1, s = 1 / 0;
      for (let a = 0; a <= P; a++) for (let n = 0; n <= I; n++) {
        const ot = h[a][n], [zt, It, kt] = v[ot], at = Math.hypot(zt - t, It - e);
        at < s && (s = at, o = ot);
      }
      return o;
    }
    const r = 6, i = 4, M = 3, q = i / 2, J = +N / 2 - z / 2, L = -N / 2 + z / 2, d = [];
    for (let t = 0; t <= r; t++) {
      const e = t / r * k + 0, o = [];
      for (let s = 0; s <= i; s++) {
        const a = -w / 2 + s * w / i;
        t === 0 ? o.push(O(J, a)) : o.push(y(J, a, e));
      }
      d.push(o);
    }
    for (let t = 0; t < r; t++) for (let e = 0; e < i; e++) S(d[t][e], d[t][e + 1], d[t + 1][e + 1], d[t + 1][e], z);
    const f = [];
    for (let t = 0; t <= r; t++) {
      const e = t / r * k, o = [];
      for (let s = 0; s <= i; s++) {
        const a = -w / 2 + s * w / i;
        t === 0 ? o.push(O(L, a)) : o.push(y(L, a, e));
      }
      f.push(o);
    }
    for (let t = 0; t < r; t++) for (let e = 0; e < i; e++) S(f[t][e], f[t][e + 1], f[t + 1][e + 1], f[t + 1][e], z);
    const x = [];
    for (let t = 0; t <= r; t++) {
      const e = t / r * k, o = [];
      for (let s = 0; s <= M; s++) {
        const a = L + s * (J - L) / M;
        s === 0 ? o.push(f[t][q]) : s === M ? o.push(d[t][q]) : t === 0 ? o.push(O(a, 0)) : o.push(y(a, 0, e));
      }
      x.push(o);
    }
    for (let t = 0; t < r; t++) for (let e = 0; e < M; e++) S(x[t][e], x[t][e + 1], x[t + 1][e + 1], x[t + 1][e], ft);
    const _t = Math.PI * j * j / 4, K = Math.PI * Math.pow(j, 4) / 64, yt = 2 * K, Mt = [
      [
        -u / 2 + m,
        -b / 2 + m
      ],
      [
        +u / 2 - m,
        -b / 2 + m
      ],
      [
        +u / 2 - m,
        +b / 2 - m
      ],
      [
        -u / 2 + m,
        +b / 2 - m
      ]
    ], Q = [];
    for (const [t, e] of Mt) {
      const o = O(t, e), s = y(t, e, -vt);
      Q.push(s), bt(o, s, _t, K, yt);
    }
    const U = /* @__PURE__ */ new Map(), gt = [
      true,
      true,
      true,
      true,
      true,
      true
    ];
    for (const t of Q) U.set(t, gt);
    const g = [];
    for (let t = 0; t <= i; t++) g.push(d[r][t]);
    for (let t = 0; t <= i; t++) g.push(f[r][t]);
    for (let t = 1; t < M; t++) g.push(x[r][t]);
    const _ = /* @__PURE__ */ new Map(), wt = -X / g.length;
    for (const t of g) _.set(t, [
      0,
      0,
      wt,
      0,
      0,
      0
    ]);
    const tt = Z / N / (i + 1);
    for (let t = 0; t <= i; t++) {
      const e = d[r][t], o = f[r][t], s = _.get(e) || [
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
        s[2] + tt,
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
        a[2] - tt,
        a[3],
        a[4],
        a[5]
      ]);
    }
    const et = {
      supports: U,
      loads: _
    }, R = {
      elasticities: G,
      shearModuli: A,
      areas: C,
      momentsOfInertiaZ: F,
      momentsOfInertiaY: E,
      torsionalConstants: T,
      densities: $,
      poissonsRatios: H,
      thicknesses: B
    };
    let Y = {}, st = {};
    try {
      Y = St(v, p, et, R), st = Pt(v, p, R, Y), console.log(`Placa base H: ${v.length} nodos, ${p.length} elementos | Pu=${X}kN, Mu=${Z}kN\xB7m | t_plate=${(W * 1e3).toFixed(0)}mm`);
    } catch (t) {
      console.warn("Placa base deform/analyze:", (t == null ? void 0 : t.message) ?? t);
    }
    ct.val = v, ut.val = p, rt.val = et, it.val = R, mt.val = Y, pt.val = st;
  });
  const dt = Ot({
    mesh: {
      nodes: ct,
      elements: ut,
      nodeInputs: rt,
      elementInputs: it,
      deformOutputs: mt,
      analyzeOutputs: pt
    },
    settingsObj: {
      deformedShape: true,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 20
    }
  });
  document.body.append(Lt(c), dt, Nt({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-h/main.ts"
  }));
  setTimeout(() => {
    var _a;
    const u = dt.__ctx;
    (u == null ? void 0 : u.camera) && (u == null ? void 0 : u.controls) && (u.camera.up.set(0, 0, 1), u.camera.position.set(2, -2, 1.2), u.controls.target.set(0, 0, 0.25), u.controls.update(), (_a = u.render) == null ? void 0 : _a.call(u));
  }, 800);
});
