import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l } from "./theme-2eEBQPmF.js";
import { a as jt } from "./analyze-BydHtRcI.js";
import { d as Ct, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Gt } from "./getViewer-CARv9b4z.js";
import { g as Xt } from "./getParameters-CIJBOwMB.js";
import { g as Ht } from "./styles-Cjdl64P4.js";
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
  const R = 2e8, D = 0.3, it = R / (2 * (1 + D)), mt = 78, c = {
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
    nBoltsX: {
      value: l.state(2),
      min: 2,
      max: 6,
      step: 1,
      label: "Pernos en X (filas)"
    },
    nBoltsY: {
      value: l.state(2),
      min: 2,
      max: 6,
      step: 1,
      label: "Pernos en Y (columnas)"
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
  }, pt = l.state([]), dt = l.state([]), ft = l.state({}), vt = l.state({}), bt = l.state({}), ht = l.state({});
  l.derive(() => {
    const r = c.B.value.val, g = c.H.value.val, V = c.t_plate.value.val, w = c.d_col.value.val, x = c.bf_col.value.val, z = c.tf_col.value.val, Mt = c.tw_col.value.val, N = c.L_col.value.val, k = c.d_bolt.value.val, _t = c.L_bolt.value.val, I = c.edge.value.val, W = Math.max(2, Math.round(c.nBoltsX.value.val)), Z = Math.max(2, Math.round(c.nBoltsY.value.val)), q = c.Pu.value.val, K = c.Mu.value.val, P = Math.round(c.nx.value.val), B = Math.round(c.ny.value.val), f = [], m = [], Y = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
    function M(t, e, o) {
      return f.push([
        t,
        e,
        o
      ]), f.length - 1;
    }
    function S(t, e, o, s, n) {
      m.push([
        t,
        e,
        o,
        s
      ]);
      const a = m.length - 1;
      Y.set(a, n), j.set(a, R), C.set(a, D), G.set(a, mt), X.set(a, 0), $.set(a, 0), H.set(a, 0), F.set(a, 0), E.set(a, it);
    }
    function yt(t, e, o, s, n) {
      m.push([
        t,
        e
      ]);
      const a = m.length - 1;
      j.set(a, R), E.set(a, it), C.set(a, D), G.set(a, mt), X.set(a, o), $.set(a, s), H.set(a, s), F.set(a, n), Y.set(a, 0);
    }
    const gt = r / P, wt = g / B, v = [];
    for (let t = 0; t <= B; t++) {
      const e = [], o = -g / 2 + t * wt;
      for (let s = 0; s <= P; s++) {
        const n = -r / 2 + s * gt;
        e.push(M(n, o, 0));
      }
      v.push(e);
    }
    for (let t = 0; t < B; t++) for (let e = 0; e < P; e++) S(v[t][e], v[t][e + 1], v[t + 1][e + 1], v[t + 1][e], V);
    function O(t, e) {
      let o = -1, s = 1 / 0;
      for (let n = 0; n <= B; n++) for (let a = 0; a <= P; a++) {
        const ut = v[n][a], [kt, Yt, $t] = f[ut], rt = Math.hypot(kt - t, Yt - e);
        rt < s && (s = rt, o = ut);
      }
      return o;
    }
    const u = 6, i = 4, _ = 3, Q = i / 2, T = +w / 2 - z / 2, L = -w / 2 + z / 2, p = [];
    for (let t = 0; t <= u; t++) {
      const e = t / u * N + 0, o = [];
      for (let s = 0; s <= i; s++) {
        const n = -x / 2 + s * x / i;
        t === 0 ? o.push(O(T, n)) : o.push(M(T, n, e));
      }
      p.push(o);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < i; e++) S(p[t][e], p[t][e + 1], p[t + 1][e + 1], p[t + 1][e], z);
    const d = [];
    for (let t = 0; t <= u; t++) {
      const e = t / u * N, o = [];
      for (let s = 0; s <= i; s++) {
        const n = -x / 2 + s * x / i;
        t === 0 ? o.push(O(L, n)) : o.push(M(L, n, e));
      }
      d.push(o);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < i; e++) S(d[t][e], d[t][e + 1], d[t + 1][e + 1], d[t + 1][e], z);
    const b = [];
    for (let t = 0; t <= u; t++) {
      const e = t / u * N, o = [];
      for (let s = 0; s <= _; s++) {
        const n = L + s * (T - L) / _;
        s === 0 ? o.push(d[t][Q]) : s === _ ? o.push(p[t][Q]) : t === 0 ? o.push(O(n, 0)) : o.push(M(n, 0, e));
      }
      b.push(o);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < _; e++) S(b[t][e], b[t][e + 1], b[t + 1][e + 1], b[t + 1][e], Mt);
    const zt = Math.PI * k * k / 4, U = Math.PI * Math.pow(k, 4) / 64, It = 2 * U, tt = -r / 2 + I, Pt = +r / 2 - I, et = -g / 2 + I, Bt = +g / 2 - I, St = (Pt - tt) / (W - 1), Ot = (Bt - et) / (Z - 1), st = [];
    for (let t = 0; t < W; t++) {
      const e = tt + t * St;
      for (let o = 0; o < Z; o++) {
        const s = et + o * Ot, n = Math.abs(e) < w / 2 + 5e-3, a = Math.abs(s) < x / 2 + 5e-3;
        n && a || st.push([
          e,
          s
        ]);
      }
    }
    const ot = [];
    for (const [t, e] of st) {
      const o = O(t, e), s = M(t, e, -_t);
      ot.push(s), yt(o, s, zt, U, It);
    }
    const nt = /* @__PURE__ */ new Map(), Lt = [
      true,
      true,
      true,
      true,
      true,
      true
    ];
    for (const t of ot) nt.set(t, Lt);
    const y = [];
    for (let t = 0; t <= i; t++) y.push(p[u][t]);
    for (let t = 0; t <= i; t++) y.push(d[u][t]);
    for (let t = 1; t < _; t++) y.push(b[u][t]);
    const h = /* @__PURE__ */ new Map(), Nt = -q / y.length;
    for (const t of y) h.set(t, [
      0,
      0,
      Nt,
      0,
      0,
      0
    ]);
    const at = K / w / (i + 1);
    for (let t = 0; t <= i; t++) {
      const e = p[u][t], o = d[u][t], s = h.get(e) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      h.set(e, [
        s[0],
        s[1],
        s[2] + at,
        s[3],
        s[4],
        s[5]
      ]);
      const n = h.get(o) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      h.set(o, [
        n[0],
        n[1],
        n[2] - at,
        n[3],
        n[4],
        n[5]
      ]);
    }
    const lt = {
      supports: nt,
      loads: h
    }, A = {
      elasticities: j,
      shearModuli: E,
      areas: X,
      momentsOfInertiaZ: H,
      momentsOfInertiaY: $,
      torsionalConstants: F,
      densities: G,
      poissonsRatios: C,
      thicknesses: Y
    };
    let J = {}, ct = {};
    try {
      J = Ct(f, m, lt, A), ct = jt(f, m, A, J), console.log(`Placa base H: ${f.length} nodos, ${m.length} elementos | Pu=${q}kN, Mu=${K}kN\xB7m | t_plate=${(V * 1e3).toFixed(0)}mm`);
    } catch (t) {
      console.warn("Placa base deform/analyze:", (t == null ? void 0 : t.message) ?? t);
    }
    pt.val = f, dt.val = m, ft.val = lt, vt.val = A, bt.val = J, ht.val = ct;
  });
  const xt = Gt({
    mesh: {
      nodes: pt,
      elements: dt,
      nodeInputs: ft,
      elementInputs: vt,
      deformOutputs: bt,
      analyzeOutputs: ht
    },
    settingsObj: {
      deformedShape: true,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 20
    }
  });
  document.body.append(Xt(c), xt, Ht({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-h/main.ts"
  }));
  setTimeout(() => {
    var _a;
    const r = xt.__ctx;
    (r == null ? void 0 : r.camera) && (r == null ? void 0 : r.controls) && (r.camera.up.set(0, 0, 1), r.camera.position.set(2, -2, 1.2), r.controls.target.set(0, 0, 0.25), r.controls.update(), (_a = r.render) == null ? void 0 : _a.call(r));
  }, 800);
});
