import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as n, P as ye } from "./theme-2eEBQPmF.js";
import { M as ge, C as Pe, b as Be } from "./Text-DyNVkyur.js";
import { a as we } from "./analyze-BydHtRcI.js";
import { d as ze, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Ae, a as Ut, e as Xt } from "./getViewer-DnVmZy1T.js";
import { e as Ce } from "./makeDraggable-zx2br6Yh.js";
import { g as Se } from "./getParameters-CIJBOwMB.js";
import { g as Fe } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const mt = 2e8, pt = 0.3, Yt = mt / (2 * (1 + pt)), Jt = 78, Te = 25e4, ke = 6e5, c = {
    B: {
      value: n.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "B placa (m)"
    },
    H: {
      value: n.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "H placa (m)"
    },
    t_plate: {
      value: n.state(0.025),
      min: 0.012,
      max: 0.06,
      step: 2e-3,
      label: "t placa (m)"
    },
    bc: {
      value: n.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "bc col (m)"
    },
    hc: {
      value: n.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "hc col (m)"
    },
    t_col: {
      value: n.state(0.012),
      min: 6e-3,
      max: 0.03,
      step: 2e-3,
      label: "t pared HSS (m)"
    },
    L_col: {
      value: n.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "L stub col (m)"
    },
    nBoltsX: {
      value: n.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en X"
    },
    nBoltsY: {
      value: n.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en Y"
    },
    sx: {
      value: n.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sx borde (m)"
    },
    sy: {
      value: n.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sy borde (m)"
    },
    d_bolt: {
      value: n.state(0.024),
      min: 0.012,
      max: 0.04,
      step: 2e-3,
      label: "\xD8 perno (m)"
    },
    L_bolt: {
      value: n.state(0.3),
      min: 0.15,
      max: 0.6,
      step: 0.02,
      label: "L embebido (m)"
    },
    L_proj: {
      value: n.state(0.05),
      min: 0.02,
      max: 0.1,
      step: 5e-3,
      label: "L proyec (m)"
    },
    B_ped: {
      value: n.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "B pedestal (m)"
    },
    H_ped: {
      value: n.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "H pedestal (m)"
    },
    h_ped: {
      value: n.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "h pedestal (m)"
    },
    fc: {
      value: n.state(28e3),
      min: 17e3,
      max: 5e4,
      step: 1e3,
      label: "f'c (kN/m\xB2)"
    },
    Pu: {
      value: n.state(300),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu (kN)"
    },
    Mu: {
      value: n.state(30),
      min: 0,
      max: 800,
      step: 5,
      label: "Mu (kN\xB7m)"
    },
    nx: {
      value: n.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh nx"
    },
    ny: {
      value: n.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh ny"
    },
    nz_col: {
      value: n.state(6),
      min: 4,
      max: 12,
      step: 2,
      label: "nz col"
    }
  }, $t = n.state([]), Rt = n.state([]), Vt = n.state({}), Wt = n.state({}), Zt = n.state({}), Kt = n.state({}), Qt = n.state([]), te = n.state({
    vmMax: 0,
    A1: 0,
    A2: 0,
    phiPp: 0,
    demandCapPp: 0,
    m_cant: 0,
    t_req: 0,
    demandCapT: 0,
    T_anchor: 0,
    phiNn: 0,
    demandCapAnchor: 0
  });
  n.derive(() => {
    const s = c.B.value.val, C = c.H.value.val, bt = c.t_plate.value.val, m = c.bc.value.val, p = c.hc.value.val, N = c.t_col.value.val, xt = c.L_col.value.val, Mt = Math.round(c.nBoltsX.value.val), W = Math.round(c.nBoltsY.value.val), Z = c.sx.value.val, _t = c.sy.value.val, _ = c.d_bolt.value.val, K = c.L_bolt.value.val, Q = c.L_proj.value.val, tt = c.B_ped.value.val, et = c.H_ped.value.val, at = c.h_ped.value.val, st = c.fc.value.val, j = c.Pu.value.val, yt = c.Mu.value.val, L = Math.round(c.nx.value.val), O = Math.round(c.ny.value.val), u = Math.round(c.nz_col.value.val), h = [], f = [], E = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
    function v(t, e, a) {
      return h.push([
        t,
        e,
        a
      ]), h.length - 1;
    }
    function S(t, e, a, o, r) {
      f.push([
        t,
        e,
        a,
        o
      ]);
      const i = f.length - 1;
      E.set(i, r), H.set(i, mt), q.set(i, pt), G.set(i, Jt), D.set(i, Yt), Y.set(i, 0), U.set(i, 0), J.set(i, 0), X.set(i, 0);
    }
    function gt(t, e, a, o, r) {
      f.push([
        t,
        e
      ]);
      const i = f.length - 1;
      H.set(i, mt), q.set(i, pt), G.set(i, Jt), D.set(i, Yt), Y.set(i, a), U.set(i, o), J.set(i, o), X.set(i, r), E.set(i, 0);
    }
    const Pt = s / L, Bt = C / O, w = [];
    for (let t = 0; t <= O; t++) {
      const e = [];
      for (let a = 0; a <= L; a++) e.push(v(-s / 2 + a * Pt, -C / 2 + t * Bt, 0));
      w.push(e);
    }
    for (let t = 0; t < O; t++) for (let e = 0; e < L; e++) S(w[t][e], w[t][e + 1], w[t + 1][e + 1], w[t + 1][e], bt);
    function F(t, e) {
      let a = -1, o = 1 / 0;
      for (let r = 0; r <= O; r++) for (let i = 0; i <= L; i++) {
        const dt = w[r][i], Dt = Math.hypot(h[dt][0] - t, h[dt][1] - e);
        Dt < o && (o = Dt, a = dt);
      }
      return a;
    }
    const y = Math.max(2, Math.round(m / Pt)), g = Math.max(2, Math.round(p / Bt)), wt = m / y, zt = p / g, $ = xt / u, P = [];
    for (let t = 0; t <= u; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -m / 2 + a * wt;
        t === 0 ? e.push(F(o, -p / 2)) : e.push(v(o, -p / 2, t * $));
      }
      P.push(e);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < y; e++) S(P[t][e], P[t][e + 1], P[t + 1][e + 1], P[t + 1][e], N);
    const B = [];
    for (let t = 0; t <= u; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -m / 2 + a * wt;
        t === 0 ? e.push(F(o, p / 2)) : e.push(v(o, p / 2, t * $));
      }
      B.push(e);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < y; e++) S(B[t][e], B[t][e + 1], B[t + 1][e + 1], B[t + 1][e], N);
    const T = [];
    for (let t = 0; t <= u; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -p / 2 + a * zt;
        t === 0 ? e.push(F(-m / 2, o)) : a === 0 ? e.push(P[t][0]) : a === g ? e.push(B[t][0]) : e.push(v(-m / 2, o, t * $));
      }
      T.push(e);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < g; e++) S(T[t][e], T[t][e + 1], T[t + 1][e + 1], T[t + 1][e], N);
    const k = [];
    for (let t = 0; t <= u; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -p / 2 + a * zt;
        t === 0 ? e.push(F(m / 2, o)) : a === 0 ? e.push(P[t][y]) : a === g ? e.push(B[t][y]) : e.push(v(m / 2, o, t * $));
      }
      k.push(e);
    }
    for (let t = 0; t < u; t++) for (let e = 0; e < g; e++) S(k[t][e], k[t][e + 1], k[t + 1][e + 1], k[t + 1][e], N);
    const At = Math.PI * _ * _ / 4, ot = Math.PI * _ ** 4 / 64, Ct = 2 * ot, nt = [], oe = (s - 2 * Z) / Math.max(1, Mt - 1), ne = (C - 2 * _t) / Math.max(1, W - 1);
    for (let t = 0; t < Mt; t++) for (let e = 0; e < W; e++) {
      const a = -s / 2 + Z + t * oe, o = -C / 2 + _t + e * ne;
      Math.abs(a) < m / 2 + 5e-3 && Math.abs(o) < p / 2 + 5e-3 || nt.push([
        a,
        o
      ]);
    }
    for (const [t, e] of nt) {
      const a = v(t, e, Q), o = F(t, e), r = v(t, e, -K);
      gt(a, o, At, ot, Ct), gt(o, r, At, ot, Ct);
    }
    const St = 4700 * Math.sqrt(st / 1e3) * 1e3, Ft = 0.2, le = St / (2 * (1 + Ft)), b = 6, x = 6, M = 4, ce = tt / b, re = et / x, ie = at / M, l = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let a = 0; a <= x; a++) {
        const o = [];
        for (let r = 0; r <= b; r++) o.push(v(-tt / 2 + r * ce, -et / 2 + a * re, -at + t * ie));
        e.push(o);
      }
      l.push(e);
    }
    function z(t, e, a, o) {
      f.push([
        t,
        e,
        a,
        o
      ]);
      const r = f.length - 1;
      E.set(r, 1e-3), H.set(r, St), q.set(r, Ft), G.set(r, 24 / 9.80665), D.set(r, le), Y.set(r, 0), U.set(r, 0), J.set(r, 0), X.set(r, 0);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < b; e++) z(l[0][t][e], l[0][t][e + 1], l[0][t + 1][e + 1], l[0][t + 1][e]), z(l[M][t][e], l[M][t][e + 1], l[M][t + 1][e + 1], l[M][t + 1][e]);
    for (let t = 0; t < M; t++) for (let e = 0; e < b; e++) z(l[t][0][e], l[t][0][e + 1], l[t + 1][0][e + 1], l[t + 1][0][e]), z(l[t][x][e], l[t][x][e + 1], l[t + 1][x][e + 1], l[t + 1][x][e]);
    for (let t = 0; t < M; t++) for (let e = 0; e < x; e++) z(l[t][e][0], l[t][e + 1][0], l[t + 1][e + 1][0], l[t + 1][e][0]), z(l[t][e][b], l[t][e + 1][b], l[t + 1][e + 1][b], l[t + 1][e][b]);
    const Tt = /* @__PURE__ */ new Map();
    h.forEach((t, e) => {
      Math.abs(t[2] - -at) < 1e-6 && Tt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const R = [];
    h.forEach((t, e) => {
      Math.abs(t[2] - xt) < 1e-6 && Math.abs(t[0]) <= m / 2 + 1e-6 && Math.abs(t[1]) <= p / 2 + 1e-6 && R.push(e);
    });
    const de = -j / Math.max(1, R.length), me = yt / Math.max(1, R.length), kt = /* @__PURE__ */ new Map();
    for (const t of R) kt.set(t, [
      0,
      0,
      de,
      0,
      me,
      0
    ]);
    const It = {
      supports: Tt,
      loads: kt
    }, lt = {
      elasticities: H,
      shearModuli: D,
      areas: Y,
      momentsOfInertiaZ: J,
      momentsOfInertiaY: U,
      torsionalConstants: X,
      densities: G,
      poissonsRatios: q,
      thicknesses: E
    };
    let ct = {}, rt = {};
    try {
      ct = ze(h, f, It, lt), rt = we(h, f, lt, ct);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const Nt = [], pe = new ge({
      color: 6710886,
      metalness: 0.5
    });
    for (const [t, e] of nt) {
      const a = new Pe(_ / 2, _ / 2, K + Q, 12), o = new Be(a, pe);
      o.position.set(t, e, (-K + Q) / 2), o.rotation.x = Math.PI / 2, Nt.push(o);
    }
    let it = 0;
    const jt = rt == null ? void 0 : rt.vonMises;
    jt && jt.forEach((t) => t.forEach((e) => {
      e > it && (it = e);
    }));
    const ue = 0.65, I = s * C, Lt = tt * et, he = Math.min(2, Math.sqrt(Lt / I)), fe = Math.min(0.85 * st * I * he, 1.7 * st * I), Ot = ue * fe, ve = j / Math.max(1, Ot), Et = Math.max(0, (s - 0.95 * Math.max(m, p)) / 2), be = j / I, Ht = Et * Math.sqrt(2 * Math.max(0, be) / (0.9 * Te)), xe = Ht / Math.max(1e-6, bt), Me = Math.max(0.05, s - 2 * Z), qt = Math.max(0, yt / Me - j / 2) / Math.max(1, W), Gt = 0.75 * (0.75 * Math.PI * _ * _ / 4) * ke, _e = qt / Math.max(1, Gt);
    te.val = {
      vmMax: it,
      A1: I,
      A2: Lt,
      phiPp: Ot,
      demandCapPp: ve,
      m_cant: Et,
      t_req: Ht,
      demandCapT: xe,
      T_anchor: qt,
      phiNn: Gt,
      demandCapAnchor: _e
    }, $t.val = h, Rt.val = f, Vt.val = It, Wt.val = lt, Zt.val = ct, Kt.val = rt, Qt.val = Nt;
  });
  const ee = Ae({
    mesh: {
      nodes: $t,
      elements: Rt,
      nodeInputs: Vt,
      elementInputs: Wt,
      deformOutputs: Zt,
      analyzeOutputs: Kt
    },
    objects3D: Qt,
    settingsObj: {
      deformedShape: true,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 20,
      custom3D: true,
      loads: true,
      supports: true,
      displayScale: 0.4
    }
  }), ut = document.createElement("div");
  ut.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const A = new ye({
    title: "\u{1F9EA} Placa base + col HSS hueca",
    container: ut,
    expanded: true
  }), d = {
    vmMax: 0,
    A1: 0,
    A2: 0,
    phiPp: 0,
    demandCapPp: 0,
    m_cant: 0,
    t_req: 0,
    demandCapT: 0,
    T_anchor: 0,
    phiNn: 0,
    demandCapAnchor: 0
  }, ht = (s) => s < 1 ? `${s.toFixed(2)} \u2713` : s < 1.2 ? `${s.toFixed(2)} \u26A0` : `${s.toFixed(2)} \u2717`, V = A.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  V.addBinding(d, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  V.addBinding(d, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  V.addBinding(d, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (s) => s.toFixed(0)
  });
  V.addBinding(d, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: ht
  });
  const ft = A.addFolder({
    title: "DG-1 espesor placa"
  });
  ft.addBinding(d, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (s) => s.toFixed(4)
  });
  ft.addBinding(d, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (s) => (s * 1e3).toFixed(1)
  });
  ft.addBinding(d, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: ht
  });
  const vt = A.addFolder({
    title: "ACI \xA717 anclaje"
  });
  vt.addBinding(d, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (s) => s.toFixed(1)
  });
  vt.addBinding(d, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (s) => s.toFixed(1)
  });
  vt.addBinding(d, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: ht
  });
  const Ie = A.addFolder({
    title: "FEM"
  });
  Ie.addBinding(d, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (s) => s.toExponential(3)
  });
  const ae = A.addFolder({
    title: "Unidades",
    expanded: false
  }), se = {
    stress: Xt.val,
    disp: Ut.val
  };
  ae.addBinding(se, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (s) => {
    Xt.val = s.value;
  });
  ae.addBinding(se, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (s) => {
    Ut.val = s.value;
  });
  document.body.append(ut);
  n.derive(() => {
    const s = te.val;
    Object.assign(d, s), A.refresh();
  });
  document.body.append(Se(c), ee, Fe({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-hueca/main.ts"
  }));
  setTimeout(() => Ce(), 200);
  setTimeout(() => {
    var _a;
    const s = ee.__ctx;
    (s == null ? void 0 : s.camera) && (s == null ? void 0 : s.controls) && (s.camera.up.set(0, 0, 1), s.camera.position.set(2, -2, 1.2), s.controls.target.set(0, 0, 0.25), s.controls.update(), (_a = s.render) == null ? void 0 : _a.call(s));
  }, 800);
});
