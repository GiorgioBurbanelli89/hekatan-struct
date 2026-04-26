import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as n, P as ke } from "./theme-2eEBQPmF.js";
import { M as Zt, C as Wt, b as Kt } from "./Text-DyNVkyur.js";
import { a as Fe } from "./analyze-BydHtRcI.js";
import { d as Ne, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as je, a as ee, e as ae } from "./getViewer-DnVmZy1T.js";
import { e as Le } from "./makeDraggable-zx2br6Yh.js";
import { g as Oe } from "./getParameters-CIJBOwMB.js";
import { g as Ee } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ht = 2e8, ft = 0.3, Qt = ht / (2 * (1 + ft)), te = 78, He = 25e4, qe = 6e5, i = {
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
  }, se = n.state([]), oe = n.state([]), ne = n.state({}), le = n.state({}), ce = n.state({}), re = n.state({}), ie = n.state([]), de = n.state({
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
    const s = i.B.value.val, z = i.H.value.val, _t = i.t_plate.value.val, m = i.bc.value.val, p = i.hc.value.val, L = i.t_col.value.val, yt = i.L_col.value.val, gt = Math.round(i.nBoltsX.value.val), et = Math.round(i.nBoltsY.value.val), at = i.sx.value.val, Pt = i.sy.value.val, h = i.d_bolt.value.val, st = i.L_bolt.value.val, O = i.L_proj.value.val, E = i.B_ped.value.val, H = i.H_ped.value.val, ot = i.h_ped.value.val, nt = i.fc.value.val, q = i.Pu.value.val, wt = i.Mu.value.val, G = Math.round(i.nx.value.val), D = Math.round(i.ny.value.val), f = Math.round(i.nz_col.value.val), u = [], v = [], Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
    function _(t, e, a) {
      return u.push([
        t,
        e,
        a
      ]), u.length - 1;
    }
    function T(t, e, a, o, c) {
      v.push([
        t,
        e,
        a,
        o
      ]);
      const l = v.length - 1;
      Y.set(l, c), J.set(l, ht), U.set(l, ft), X.set(l, te), $.set(l, Qt), R.set(l, 0), Z.set(l, 0), V.set(l, 0), W.set(l, 0);
    }
    function Bt(t, e, a, o, c) {
      v.push([
        t,
        e
      ]);
      const l = v.length - 1;
      J.set(l, ht), U.set(l, ft), X.set(l, te), $.set(l, Qt), R.set(l, a), Z.set(l, o), V.set(l, o), W.set(l, c), Y.set(l, 0);
    }
    const zt = s / G, At = z / D, A = [];
    for (let t = 0; t <= D; t++) {
      const e = [];
      for (let a = 0; a <= G; a++) e.push(_(-s / 2 + a * zt, -z / 2 + t * At, 0));
      A.push(e);
    }
    for (let t = 0; t < D; t++) for (let e = 0; e < G; e++) T(A[t][e], A[t][e + 1], A[t + 1][e + 1], A[t + 1][e], _t);
    function k(t, e) {
      let a = -1, o = 1 / 0;
      for (let c = 0; c <= D; c++) for (let l = 0; l <= G; l++) {
        const B = A[c][l], S = Math.hypot(u[B][0] - t, u[B][1] - e);
        S < o && (o = S, a = B);
      }
      return a;
    }
    const y = Math.max(2, Math.round(m / zt)), g = Math.max(2, Math.round(p / At)), Ct = m / y, St = p / g, K = yt / f, P = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -m / 2 + a * Ct;
        t === 0 ? e.push(k(o, -p / 2)) : e.push(_(o, -p / 2, t * K));
      }
      P.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < y; e++) T(P[t][e], P[t][e + 1], P[t + 1][e + 1], P[t + 1][e], L);
    const w = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -m / 2 + a * Ct;
        t === 0 ? e.push(k(o, p / 2)) : e.push(_(o, p / 2, t * K));
      }
      w.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < y; e++) T(w[t][e], w[t][e + 1], w[t + 1][e + 1], w[t + 1][e], L);
    const F = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -p / 2 + a * St;
        t === 0 ? e.push(k(-m / 2, o)) : a === 0 ? e.push(P[t][0]) : a === g ? e.push(w[t][0]) : e.push(_(-m / 2, o, t * K));
      }
      F.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < g; e++) T(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], L);
    const N = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -p / 2 + a * St;
        t === 0 ? e.push(k(m / 2, o)) : a === 0 ? e.push(P[t][y]) : a === g ? e.push(w[t][y]) : e.push(_(m / 2, o, t * K));
      }
      N.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < g; e++) T(N[t][e], N[t][e + 1], N[t + 1][e + 1], N[t + 1][e], L);
    const It = Math.PI * h * h / 4, lt = Math.PI * h ** 4 / 64, Tt = 2 * lt, ct = [], he = (s - 2 * at) / Math.max(1, gt - 1), fe = (z - 2 * Pt) / Math.max(1, et - 1);
    for (let t = 0; t < gt; t++) for (let e = 0; e < et; e++) {
      const a = -s / 2 + at + t * he, o = -z / 2 + Pt + e * fe;
      Math.abs(a) < m / 2 + 5e-3 && Math.abs(o) < p / 2 + 5e-3 || ct.push([
        a,
        o
      ]);
    }
    const kt = 4700 * Math.sqrt(nt / 1e3) * 1e3, Ft = 0.2, ve = kt / (2 * (1 + Ft)), b = 6, x = 6, M = 4, Nt = E / b, jt = H / x, be = ot / M, r = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let a = 0; a <= x; a++) {
        const o = [];
        for (let c = 0; c <= b; c++) o.push(_(-E / 2 + c * Nt, -H / 2 + a * jt, -ot + t * be));
        e.push(o);
      }
      r.push(e);
    }
    function xe(t, e, a) {
      let o = -1, c = 1 / 0;
      for (let l = 0; l <= M; l++) for (let B = 0; B <= x; B++) for (let S = 0; S <= b; S++) {
        const Rt = r[l][B][S], ut = u[Rt], Vt = Math.hypot(ut[0] - t, ut[1] - e) + Math.abs(ut[2] - a) * 0.5;
        Vt < c && (c = Vt, o = Rt);
      }
      return o;
    }
    for (const [t, e] of ct) {
      const a = _(t, e, O), o = k(t, e), c = xe(t, e, -st);
      Bt(a, o, It, lt, Tt), Bt(o, c, It, lt, Tt);
    }
    function C(t, e, a, o) {
      v.push([
        t,
        e,
        a,
        o
      ]);
      const c = v.length - 1;
      Y.set(c, 1e-3), J.set(c, kt), U.set(c, Ft), X.set(c, 24 / 9.80665), $.set(c, ve), R.set(c, 0), Z.set(c, 0), V.set(c, 0), W.set(c, 0);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < b; e++) {
      C(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
      const a = -E / 2 + (e + 0.5) * Nt, o = -H / 2 + (t + 0.5) * jt;
      Math.abs(a) <= s / 2 && Math.abs(o) <= z / 2 || C(r[M][t][e], r[M][t][e + 1], r[M][t + 1][e + 1], r[M][t + 1][e]);
    }
    for (let t = 0; t < M; t++) for (let e = 0; e < b; e++) C(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]), C(r[t][x][e], r[t][x][e + 1], r[t + 1][x][e + 1], r[t + 1][x][e]);
    for (let t = 0; t < M; t++) for (let e = 0; e < x; e++) C(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]), C(r[t][e][b], r[t][e + 1][b], r[t + 1][e + 1][b], r[t + 1][e][b]);
    const Lt = /* @__PURE__ */ new Map();
    u.forEach((t, e) => {
      Math.abs(t[2] - -ot) < 1e-6 && Lt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const Q = [];
    u.forEach((t, e) => {
      Math.abs(t[2] - yt) < 1e-6 && Math.abs(t[0]) <= m / 2 + 1e-6 && Math.abs(t[1]) <= p / 2 + 1e-6 && Q.push(e);
    });
    const Me = -q / Math.max(1, Q.length), _e = wt / Math.max(1, Q.length), Ot = /* @__PURE__ */ new Map();
    for (const t of Q) Ot.set(t, [
      0,
      0,
      Me,
      0,
      _e,
      0
    ]);
    const Et = {
      supports: Lt,
      loads: Ot
    }, rt = {
      elasticities: J,
      shearModuli: $,
      areas: R,
      momentsOfInertiaZ: V,
      momentsOfInertiaY: Z,
      torsionalConstants: W,
      densities: X,
      poissonsRatios: U,
      thicknesses: Y
    };
    let it = {}, dt = {};
    try {
      it = Ne(u, v, Et, rt), dt = Fe(u, v, rt, it);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const mt = [], ye = new Zt({
      color: 6710886,
      metalness: 0.5
    }), ge = new Zt({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Ht = h * 0.8, qt = h * 0.85, Pe = O + Ht / 2;
    for (const [t, e] of ct) {
      const a = new Wt(h / 2, h / 2, st + O, 12), o = new Kt(a, ye);
      o.position.set(t, e, (-st + O) / 2), o.rotation.x = Math.PI / 2, mt.push(o);
      const c = new Wt(qt, qt, Ht, 6), l = new Kt(c, ge);
      l.position.set(t, e, Pe), l.rotation.x = Math.PI / 2, mt.push(l);
    }
    let pt = 0;
    const Gt = dt == null ? void 0 : dt.vonMises;
    Gt && Gt.forEach((t) => t.forEach((e) => {
      e > pt && (pt = e);
    }));
    const we = 0.65, j = s * z, Dt = E * H, Be = Math.min(2, Math.sqrt(Dt / j)), ze = Math.min(0.85 * nt * j * Be, 1.7 * nt * j), Yt = we * ze, Ae = q / Math.max(1, Yt), Jt = Math.max(0, (s - 0.95 * Math.max(m, p)) / 2), Ce = q / j, Ut = Jt * Math.sqrt(2 * Math.max(0, Ce) / (0.9 * He)), Se = Ut / Math.max(1e-6, _t), Ie = Math.max(0.05, s - 2 * at), Xt = Math.max(0, wt / Ie - q / 2) / Math.max(1, et), $t = 0.75 * (0.75 * Math.PI * h * h / 4) * qe, Te = Xt / Math.max(1, $t);
    de.val = {
      vmMax: pt,
      A1: j,
      A2: Dt,
      phiPp: Yt,
      demandCapPp: Ae,
      m_cant: Jt,
      t_req: Ut,
      demandCapT: Se,
      T_anchor: Xt,
      phiNn: $t,
      demandCapAnchor: Te
    }, se.val = u, oe.val = v, ne.val = Et, le.val = rt, ce.val = it, re.val = dt, ie.val = mt;
  });
  const me = je({
    mesh: {
      nodes: se,
      elements: oe,
      nodeInputs: ne,
      elementInputs: le,
      deformOutputs: ce,
      analyzeOutputs: re
    },
    objects3D: ie,
    settingsObj: {
      deformedShape: false,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 5,
      custom3D: true,
      loads: false,
      supports: true,
      showCotas: false,
      displayScale: 0.1
    }
  }), vt = document.createElement("div");
  vt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const I = new ke({
    title: "\u{1F9EA} Placa base + col HSS hueca",
    container: vt,
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
  }, bt = (s) => s < 1 ? `${s.toFixed(2)} \u2713` : s < 1.2 ? `${s.toFixed(2)} \u26A0` : `${s.toFixed(2)} \u2717`, tt = I.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  tt.addBinding(d, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  tt.addBinding(d, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  tt.addBinding(d, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (s) => s.toFixed(0)
  });
  tt.addBinding(d, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: bt
  });
  const xt = I.addFolder({
    title: "DG-1 espesor placa"
  });
  xt.addBinding(d, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (s) => s.toFixed(4)
  });
  xt.addBinding(d, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (s) => (s * 1e3).toFixed(1)
  });
  xt.addBinding(d, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: bt
  });
  const Mt = I.addFolder({
    title: "ACI \xA717 anclaje"
  });
  Mt.addBinding(d, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (s) => s.toFixed(1)
  });
  Mt.addBinding(d, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (s) => s.toFixed(1)
  });
  Mt.addBinding(d, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: bt
  });
  const Ge = I.addFolder({
    title: "FEM"
  });
  Ge.addBinding(d, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (s) => s.toExponential(3)
  });
  const pe = I.addFolder({
    title: "Unidades",
    expanded: false
  }), ue = {
    stress: ae.val,
    disp: ee.val
  };
  pe.addBinding(ue, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (s) => {
    ae.val = s.value;
  });
  pe.addBinding(ue, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (s) => {
    ee.val = s.value;
  });
  document.body.append(vt);
  n.derive(() => {
    const s = de.val;
    Object.assign(d, s), I.refresh();
  });
  document.body.append(Oe(i), me, Ee({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-hueca/main.ts"
  }));
  setTimeout(() => Le(), 200);
  setTimeout(() => {
    var _a;
    const s = me.__ctx;
    (s == null ? void 0 : s.camera) && (s == null ? void 0 : s.controls) && (s.camera.up.set(0, 0, 1), s.camera.position.set(2, -2, 1.2), s.controls.target.set(0, 0, 0.25), s.controls.update(), (_a = s.render) == null ? void 0 : _a.call(s));
  }, 800);
});
