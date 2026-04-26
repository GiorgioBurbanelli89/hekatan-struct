import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l } from "./theme-2eEBQPmF.js";
import { a as jt } from "./analyze-BydHtRcI.js";
import { d as Ct, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Gt } from "./getViewer-CARv9b4z.js";
import { g as Ht } from "./getParameters-CIJBOwMB.js";
import { g as $t } from "./styles-Cjdl64P4.js";
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
  const J = 2e8, R = 0.3, mt = J / (2 * (1 + R)), pt = 78, c = {
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
    sx: {
      value: l.state(0.07),
      min: 0.03,
      max: 0.25,
      step: 0.01,
      label: "sx \u2014 dist borde X (m)"
    },
    sy: {
      value: l.state(0.07),
      min: 0.03,
      max: 0.25,
      step: 0.01,
      label: "sy \u2014 dist borde Y (m)"
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
  }, dt = l.state([]), ft = l.state([]), vt = l.state({}), bt = l.state({}), ht = l.state({}), xt = l.state({});
  l.derive(() => {
    const i = c.B.value.val, w = c.H.value.val, V = c.t_plate.value.val, g = c.d_col.value.val, x = c.bf_col.value.val, z = c.tf_col.value.val, Mt = c.tw_col.value.val, L = c.L_col.value.val, N = c.d_bolt.value.val, _t = c.L_bolt.value.val, W = c.sx.value.val, Z = c.sy.value.val, q = Math.max(2, Math.round(c.nBoltsX.value.val)), D = Math.max(2, Math.round(c.nBoltsY.value.val)), K = c.Pu.value.val, Q = c.Mu.value.val, I = Math.round(c.nx.value.val), P = Math.round(c.ny.value.val), f = [], m = [], Y = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
    function y(t, e, o) {
      return f.push([
        t,
        e,
        o
      ]), f.length - 1;
    }
    function B(t, e, o, s, a) {
      m.push([
        t,
        e,
        o,
        s
      ]);
      const n = m.length - 1;
      Y.set(n, a), k.set(n, J), X.set(n, R), j.set(n, pt), C.set(n, 0), H.set(n, 0), G.set(n, 0), $.set(n, 0), F.set(n, mt);
    }
    function wt(t, e, o, s, a) {
      m.push([
        t,
        e
      ]);
      const n = m.length - 1;
      k.set(n, J), F.set(n, mt), X.set(n, R), j.set(n, pt), C.set(n, o), H.set(n, s), G.set(n, s), $.set(n, a), Y.set(n, 0);
    }
    const gt = i / I, zt = w / P, v = [];
    for (let t = 0; t <= P; t++) {
      const e = [], o = -w / 2 + t * zt;
      for (let s = 0; s <= I; s++) {
        const a = -i / 2 + s * gt;
        e.push(y(a, o, 0));
      }
      v.push(e);
    }
    for (let t = 0; t < P; t++) for (let e = 0; e < I; e++) B(v[t][e], v[t][e + 1], v[t + 1][e + 1], v[t + 1][e], V);
    function S(t, e) {
      let o = -1, s = 1 / 0;
      for (let a = 0; a <= P; a++) for (let n = 0; n <= I; n++) {
        const it = v[a][n], [kt, Xt, Ft] = f[it], rt = Math.hypot(kt - t, Xt - e);
        rt < s && (s = rt, o = it);
      }
      return o;
    }
    const u = 6, r = 4, M = 3, U = r / 2, E = +g / 2 - z / 2, O = -g / 2 + z / 2, p = [];
    for (let t = 0; t <= u; t++) {
      const e = t / u * L + 0, o = [];
      for (let s = 0; s <= r; s++) {
        const a = -x / 2 + s * x / r;
        t === 0 ? o.push(S(E, a)) : o.push(y(E, a, e));
      }
      p.push(o);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < r; e++) B(p[t][e], p[t][e + 1], p[t + 1][e + 1], p[t + 1][e], z);
    const d = [];
    for (let t = 0; t <= u; t++) {
      const e = t / u * L, o = [];
      for (let s = 0; s <= r; s++) {
        const a = -x / 2 + s * x / r;
        t === 0 ? o.push(S(O, a)) : o.push(y(O, a, e));
      }
      d.push(o);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < r; e++) B(d[t][e], d[t][e + 1], d[t + 1][e + 1], d[t + 1][e], z);
    const b = [];
    for (let t = 0; t <= u; t++) {
      const e = t / u * L, o = [];
      for (let s = 0; s <= M; s++) {
        const a = O + s * (E - O) / M;
        s === 0 ? o.push(d[t][U]) : s === M ? o.push(p[t][U]) : t === 0 ? o.push(S(a, 0)) : o.push(y(a, 0, e));
      }
      b.push(o);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < M; e++) B(b[t][e], b[t][e + 1], b[t + 1][e + 1], b[t + 1][e], Mt);
    const It = Math.PI * N * N / 4, tt = Math.PI * Math.pow(N, 4) / 64, Pt = 2 * tt, et = -i / 2 + W, Bt = +i / 2 - W, st = -w / 2 + Z, St = +w / 2 - Z, Ot = (Bt - et) / (q - 1), Lt = (St - st) / (D - 1), ot = [];
    for (let t = 0; t < q; t++) {
      const e = et + t * Ot;
      for (let o = 0; o < D; o++) {
        const s = st + o * Lt, a = Math.abs(e) < g / 2 + 5e-3, n = Math.abs(s) < x / 2 + 5e-3;
        a && n || ot.push([
          e,
          s
        ]);
      }
    }
    const at = [];
    for (const [t, e] of ot) {
      const o = S(t, e), s = y(t, e, -_t);
      at.push(s), wt(o, s, It, tt, Pt);
    }
    const nt = /* @__PURE__ */ new Map(), Nt = [
      true,
      true,
      true,
      true,
      true,
      true
    ];
    for (const t of at) nt.set(t, Nt);
    const _ = [];
    for (let t = 0; t <= r; t++) _.push(p[u][t]);
    for (let t = 0; t <= r; t++) _.push(d[u][t]);
    for (let t = 1; t < M; t++) _.push(b[u][t]);
    const h = /* @__PURE__ */ new Map(), Yt = -K / _.length;
    for (const t of _) h.set(t, [
      0,
      0,
      Yt,
      0,
      0,
      0
    ]);
    const lt = Q / g / (r + 1);
    for (let t = 0; t <= r; t++) {
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
        s[2] + lt,
        s[3],
        s[4],
        s[5]
      ]);
      const a = h.get(o) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      h.set(o, [
        a[0],
        a[1],
        a[2] - lt,
        a[3],
        a[4],
        a[5]
      ]);
    }
    const ct = {
      supports: nt,
      loads: h
    }, T = {
      elasticities: k,
      shearModuli: F,
      areas: C,
      momentsOfInertiaZ: G,
      momentsOfInertiaY: H,
      torsionalConstants: $,
      densities: j,
      poissonsRatios: X,
      thicknesses: Y
    };
    let A = {}, ut = {};
    try {
      A = Ct(f, m, ct, T), ut = jt(f, m, T, A), console.log(`Placa base H: ${f.length} nodos, ${m.length} elementos | Pu=${K}kN, Mu=${Q}kN\xB7m | t_plate=${(V * 1e3).toFixed(0)}mm`);
    } catch (t) {
      console.warn("Placa base deform/analyze:", (t == null ? void 0 : t.message) ?? t);
    }
    dt.val = f, ft.val = m, vt.val = ct, bt.val = T, ht.val = A, xt.val = ut;
  });
  const yt = Gt({
    mesh: {
      nodes: dt,
      elements: ft,
      nodeInputs: vt,
      elementInputs: bt,
      deformOutputs: ht,
      analyzeOutputs: xt
    },
    settingsObj: {
      deformedShape: true,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 20
    }
  });
  document.body.append(Ht(c), yt, $t({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-h/main.ts"
  }));
  setTimeout(() => {
    var _a;
    const i = yt.__ctx;
    (i == null ? void 0 : i.camera) && (i == null ? void 0 : i.controls) && (i.camera.up.set(0, 0, 1), i.camera.position.set(2, -2, 1.2), i.controls.target.set(0, 0, 0.25), i.controls.update(), (_a = i.render) == null ? void 0 : _a.call(i));
  }, 800);
});
