import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as De } from "./theme-2eEBQPmF.js";
import { M as Ye, C as Je, b as Ue } from "./Text-DyNVkyur.js";
import { a as Xe } from "./analyze-BydHtRcI.js";
import { d as $e, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Re, a as le, e as ce } from "./getViewer-DnVmZy1T.js";
import { e as Ve } from "./makeDraggable-zx2br6Yh.js";
import { g as We } from "./getParameters-CIJBOwMB.js";
import { g as Ze } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const gt = 2e8, Bt = 0.3, se = gt / (2 * (1 + Bt)), ne = 78, Ke = 25e4, Qe = 6e5, d = {
    B: {
      value: l.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "B placa (m)"
    },
    H: {
      value: l.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "H placa (m)"
    },
    t_plate: {
      value: l.state(0.025),
      min: 0.012,
      max: 0.06,
      step: 2e-3,
      label: "t placa (m)"
    },
    bc: {
      value: l.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "bc col (m)"
    },
    hc: {
      value: l.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "hc col (m)"
    },
    t_col: {
      value: l.state(0.012),
      min: 6e-3,
      max: 0.03,
      step: 2e-3,
      label: "t pared HSS (m)"
    },
    L_col: {
      value: l.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "L stub col (m)"
    },
    nBoltsX: {
      value: l.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en X"
    },
    nBoltsY: {
      value: l.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en Y"
    },
    sx: {
      value: l.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sx borde (m)"
    },
    sy: {
      value: l.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sy borde (m)"
    },
    d_bolt: {
      value: l.state(0.024),
      min: 0.012,
      max: 0.04,
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
    L_proj: {
      value: l.state(0.05),
      min: 0.02,
      max: 0.1,
      step: 5e-3,
      label: "L proyec (m)"
    },
    B_ped: {
      value: l.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "B pedestal (m)"
    },
    H_ped: {
      value: l.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "H pedestal (m)"
    },
    h_ped: {
      value: l.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "h pedestal (m)"
    },
    fc: {
      value: l.state(28e3),
      min: 17e3,
      max: 5e4,
      step: 1e3,
      label: "f'c (kN/m\xB2)"
    },
    Pu: {
      value: l.state(300),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu (kN)"
    },
    Mu: {
      value: l.state(30),
      min: 0,
      max: 800,
      step: 5,
      label: "Mu (kN\xB7m)"
    },
    nx: {
      value: l.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh nx"
    },
    ny: {
      value: l.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh ny"
    },
    nz_col: {
      value: l.state(6),
      min: 4,
      max: 12,
      step: 2,
      label: "nz col"
    }
  }, re = l.state([]), ie = l.state([]), de = l.state({}), me = l.state({}), pe = l.state({}), ue = l.state({}), fe = l.state([]), he = l.state({
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
    demandCapAnchor: 0,
    As: 0,
    Ac: 0,
    Pno_composite: 0,
    demandCapPno: 0
  });
  l.derive(() => {
    const o = d.B.value.val, w = d.H.value.val, zt = d.t_plate.value.val, p = d.bc.value.val, u = d.hc.value.val, P = d.t_col.value.val, dt = d.L_col.value.val, Ft = Math.round(d.nBoltsX.value.val), mt = Math.round(d.nBoltsY.value.val), pt = d.sx.value.val, kt = d.sy.value.val, C = d.d_bolt.value.val, tt = d.L_bolt.value.val, ut = d.L_proj.value.val, et = d.B_ped.value.val, at = d.H_ped.value.val, ft = d.h_ped.value.val, ot = d.fc.value.val, L = d.Pu.value.val, It = d.Mu.value.val, O = Math.round(d.nx.value.val), q = Math.round(d.ny.value.val), x = Math.round(d.nz_col.value.val), f = [], h = [], H = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
    function y(t, e, a) {
      return f.push([
        t,
        e,
        a
      ]), f.length - 1;
    }
    function V(t, e, a, s, n) {
      h.push([
        t,
        e,
        a,
        s
      ]);
      const c = h.length - 1;
      H.set(c, n), G.set(c, gt), D.set(c, Bt), Y.set(c, ne), J.set(c, se), U.set(c, 0), $.set(c, 0), X.set(c, 0), R.set(c, 0);
    }
    function jt(t, e, a, s, n) {
      h.push([
        t,
        e
      ]);
      const c = h.length - 1;
      G.set(c, gt), D.set(c, Bt), Y.set(c, ne), J.set(c, se), U.set(c, a), $.set(c, s), X.set(c, s), R.set(c, n), H.set(c, 0);
    }
    const Tt = o / O, St = w / q, z = [];
    for (let t = 0; t <= q; t++) {
      const e = [];
      for (let a = 0; a <= O; a++) e.push(y(-o / 2 + a * Tt, -w / 2 + t * St, 0));
      z.push(e);
    }
    for (let t = 0; t < q; t++) for (let e = 0; e < O; e++) V(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], zt);
    function W(t, e) {
      let a = -1, s = 1 / 0;
      for (let n = 0; n <= q; n++) for (let c = 0; c <= O; c++) {
        const M = z[n][c], T = Math.hypot(f[M][0] - t, f[M][1] - e);
        T < s && (s = T, a = M);
      }
      return a;
    }
    const F = Math.max(2, Math.round(p / Tt)), k = Math.max(2, Math.round(u / St)), Nt = p / F, Et = u / k, st = dt / x, I = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= F; a++) {
        const s = -p / 2 + a * Nt;
        t === 0 ? e.push(W(s, -u / 2)) : e.push(y(s, -u / 2, t * st));
      }
      I.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < F; e++) V(I[t][e], I[t][e + 1], I[t + 1][e + 1], I[t + 1][e], P);
    const j = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= F; a++) {
        const s = -p / 2 + a * Nt;
        t === 0 ? e.push(W(s, u / 2)) : e.push(y(s, u / 2, t * st));
      }
      j.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < F; e++) V(j[t][e], j[t][e + 1], j[t + 1][e + 1], j[t + 1][e], P);
    const Z = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= k; a++) {
        const s = -u / 2 + a * Et;
        t === 0 ? e.push(W(-p / 2, s)) : a === 0 ? e.push(I[t][0]) : a === k ? e.push(j[t][0]) : e.push(y(-p / 2, s, t * st));
      }
      Z.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < k; e++) V(Z[t][e], Z[t][e + 1], Z[t + 1][e + 1], Z[t + 1][e], P);
    const K = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= k; a++) {
        const s = -u / 2 + a * Et;
        t === 0 ? e.push(W(p / 2, s)) : a === 0 ? e.push(I[t][F]) : a === k ? e.push(j[t][F]) : e.push(y(p / 2, s, t * st));
      }
      K.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < k; e++) V(K[t][e], K[t][e + 1], K[t + 1][e + 1], K[t + 1][e], P);
    const Lt = Math.PI * C * C / 4, ht = Math.PI * C ** 4 / 64, Ot = 2 * ht, nt = [], _e = (o - 2 * pt) / Math.max(1, Ft - 1), Me = (w - 2 * kt) / Math.max(1, mt - 1);
    for (let t = 0; t < Ft; t++) for (let e = 0; e < mt; e++) {
      const a = -o / 2 + pt + t * _e, s = -w / 2 + kt + e * Me;
      Math.abs(a) < p / 2 + 5e-3 && Math.abs(s) < u / 2 + 5e-3 || nt.push([
        a,
        s
      ]);
    }
    for (const [t, e] of nt) {
      const a = y(t, e, ut), s = W(t, e), n = y(t, e, -tt);
      jt(a, s, Lt, ht, Ot), jt(s, n, Lt, ht, Ot);
    }
    const bt = 4700 * Math.sqrt(ot / 1e3) * 1e3, xt = 0.2, qt = bt / (2 * (1 + xt)), v = 6, _ = 6, b = 4, Ht = et / v, Gt = at / _, ye = ft / b, Dt = [];
    for (let t = 0; t <= q; t++) for (let e = 0; e <= O; e++) {
      const a = z[t][e];
      Dt.push({
        id: a,
        x: f[a][0],
        y: f[a][1]
      });
    }
    function Pe(t, e, a, s) {
      if (s) {
        let n = -1, c = 1 / 0;
        for (const M of Dt) {
          const T = Math.hypot(M.x - t, M.y - e);
          T < c && (c = T, n = M.id);
        }
        if (n >= 0) return n;
      }
      return y(t, e, a);
    }
    const r = [];
    for (let t = 0; t <= b; t++) {
      const e = [];
      for (let a = 0; a <= _; a++) {
        const s = [];
        for (let n = 0; n <= v; n++) {
          const c = -et / 2 + n * Ht, M = -at / 2 + a * Gt, T = -ft + t * ye, He = t === b, Ge = Math.abs(c) <= o / 2 + 1e-6 && Math.abs(M) <= w / 2 + 1e-6;
          s.push(Pe(c, M, T, He && Ge));
        }
        e.push(s);
      }
      r.push(e);
    }
    function N(t, e, a, s) {
      h.push([
        t,
        e,
        a,
        s
      ]);
      const n = h.length - 1;
      H.set(n, 1e-3), G.set(n, bt), D.set(n, xt), Y.set(n, 24 / 9.80665), J.set(n, qt), U.set(n, 0), $.set(n, 0), X.set(n, 0), R.set(n, 0);
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < v; e++) N(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
    for (let t = 0; t < _; t++) for (let e = 0; e < v; e++) {
      const a = -et / 2 + (e + 0.5) * Ht, s = -at / 2 + (t + 0.5) * Gt;
      Math.abs(a) <= o / 2 && Math.abs(s) <= w / 2 || N(r[b][t][e], r[b][t][e + 1], r[b][t + 1][e + 1], r[b][t + 1][e]);
    }
    for (let t = 0; t < b; t++) for (let e = 0; e < v; e++) N(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]);
    for (let t = 0; t < b; t++) for (let e = 0; e < v; e++) N(r[t][_][e], r[t][_][e + 1], r[t + 1][_][e + 1], r[t + 1][_][e]);
    for (let t = 0; t < b; t++) for (let e = 0; e < _; e++) N(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]);
    for (let t = 0; t < b; t++) for (let e = 0; e < _; e++) N(r[t][e][v], r[t][e + 1][v], r[t + 1][e + 1][v], r[t + 1][e][v]);
    const Yt = p - 2 * P, Jt = u - 2 * P, g = 4, B = 4, A = x, ge = Yt / g, Be = Jt / B, Ae = dt / A, i = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let a = 0; a <= B; a++) {
        const s = [];
        for (let n = 0; n <= g; n++) s.push(y(-Yt / 2 + n * ge, -Jt / 2 + a * Be, t * Ae));
        e.push(s);
      }
      i.push(e);
    }
    function E(t, e, a, s) {
      h.push([
        t,
        e,
        a,
        s
      ]);
      const n = h.length - 1;
      H.set(n, 1e-3), G.set(n, bt), D.set(n, xt), Y.set(n, 24 / 9.80665), J.set(n, qt), U.set(n, 0), $.set(n, 0), X.set(n, 0), R.set(n, 0);
    }
    for (let t = 0; t < B; t++) for (let e = 0; e < g; e++) E(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]), E(i[A][t][e], i[A][t][e + 1], i[A][t + 1][e + 1], i[A][t + 1][e]);
    for (let t = 0; t < A; t++) for (let e = 0; e < g; e++) E(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]), E(i[t][B][e], i[t][B][e + 1], i[t + 1][B][e + 1], i[t + 1][B][e]);
    for (let t = 0; t < A; t++) for (let e = 0; e < B; e++) E(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]), E(i[t][e][g], i[t][e + 1][g], i[t + 1][e + 1][g], i[t + 1][e][g]);
    const Ut = /* @__PURE__ */ new Map();
    f.forEach((t, e) => {
      const a = Math.abs(t[2] - -tt) < 1e-6 && nt.some(([n, c]) => Math.abs(t[0] - n) < 1e-6 && Math.abs(t[1] - c) < 1e-6), s = Math.abs(t[2] - -ft) < 1e-6;
      (a || s) && Ut.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const lt = [];
    f.forEach((t, e) => {
      Math.abs(t[2] - dt) < 1e-6 && Math.abs(t[0]) <= p / 2 + 1e-6 && Math.abs(t[1]) <= u / 2 + 1e-6 && lt.push(e);
    });
    const we = -L / Math.max(1, lt.length), Ce = It / Math.max(1, lt.length), Xt = /* @__PURE__ */ new Map();
    for (const t of lt) Xt.set(t, [
      0,
      0,
      we,
      0,
      Ce,
      0
    ]);
    const $t = {
      supports: Ut,
      loads: Xt
    }, vt = {
      elasticities: G,
      shearModuli: J,
      areas: U,
      momentsOfInertiaZ: X,
      momentsOfInertiaY: $,
      torsionalConstants: R,
      densities: Y,
      poissonsRatios: D,
      thicknesses: H
    };
    let _t = {}, Mt = {};
    try {
      _t = $e(f, h, $t, vt), Mt = Xe(f, h, vt, _t);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const Rt = [], ze = new Ye({
      color: 6710886,
      metalness: 0.5
    });
    for (const [t, e] of nt) {
      const a = new Je(C / 2, C / 2, tt + ut, 12), s = new Ue(a, ze);
      s.position.set(t, e, (-tt + ut) / 2), s.rotation.x = Math.PI / 2, Rt.push(s);
    }
    let yt = 0;
    const Vt = Mt == null ? void 0 : Mt.vonMises;
    Vt && Vt.forEach((t) => t.forEach((e) => {
      e > yt && (yt = e);
    }));
    const Fe = 0.65, Q = o * w, Wt = et * at, ke = Math.min(2, Math.sqrt(Wt / Q)), Ie = Math.min(0.85 * ot * Q * ke, 1.7 * ot * Q), Zt = Fe * Ie, je = L / Math.max(1, Zt), Kt = Math.max(0, (o - 0.95 * Math.max(p, u)) / 2), Te = L / Q, Qt = Kt * Math.sqrt(2 * Math.max(0, Te) / (0.9 * Ke)), Se = Qt / Math.max(1e-6, zt), Ne = Math.max(0.05, o - 2 * pt), te = Math.max(0, It / Ne - L / 2) / Math.max(1, mt), ee = 0.75 * (0.75 * Math.PI * C * C / 4) * Qe, Ee = te / Math.max(1, ee), Le = p * u, Pt = (p - 2 * P) * (u - 2 * P), ae = Le - Pt, oe = 35e4 * ae + 0.85 * ot * Pt, Oe = 0.75 * oe, qe = L / Math.max(1, Oe);
    he.val = {
      vmMax: yt,
      A1: Q,
      A2: Wt,
      phiPp: Zt,
      demandCapPp: je,
      m_cant: Kt,
      t_req: Qt,
      demandCapT: Se,
      T_anchor: te,
      phiNn: ee,
      demandCapAnchor: Ee,
      As: ae,
      Ac: Pt,
      Pno_composite: oe,
      demandCapPno: qe
    }, re.val = f, ie.val = h, de.val = $t, me.val = vt, pe.val = _t, ue.val = Mt, fe.val = Rt;
  });
  const be = Re({
    mesh: {
      nodes: re,
      elements: ie,
      nodeInputs: de,
      elementInputs: me,
      deformOutputs: pe,
      analyzeOutputs: ue
    },
    objects3D: fe,
    settingsObj: {
      deformedShape: true,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 20,
      custom3D: true,
      loads: true,
      supports: false,
      displayScale: 0.2
    }
  }), At = document.createElement("div");
  At.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const S = new De({
    title: "\u{1F9EA} Placa base + col CFT",
    container: At,
    expanded: true
  }), m = {
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
    demandCapAnchor: 0,
    As: 0,
    Ac: 0,
    Pno_composite: 0,
    demandCapPno: 0
  }, ct = (o) => o < 1 ? `${o.toFixed(2)} \u2713` : o < 1.2 ? `${o.toFixed(2)} \u26A0` : `${o.toFixed(2)} \u2717`, rt = S.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  rt.addBinding(m, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  rt.addBinding(m, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  rt.addBinding(m, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (o) => o.toFixed(0)
  });
  rt.addBinding(m, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: ct
  });
  const it = S.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  it.addBinding(m, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  it.addBinding(m, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  it.addBinding(m, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (o) => o.toFixed(0)
  });
  it.addBinding(m, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: ct
  });
  const wt = S.addFolder({
    title: "DG-1 espesor placa"
  });
  wt.addBinding(m, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (o) => o.toFixed(4)
  });
  wt.addBinding(m, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (o) => (o * 1e3).toFixed(1)
  });
  wt.addBinding(m, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: ct
  });
  const Ct = S.addFolder({
    title: "ACI \xA717 anclaje"
  });
  Ct.addBinding(m, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (o) => o.toFixed(1)
  });
  Ct.addBinding(m, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (o) => o.toFixed(1)
  });
  Ct.addBinding(m, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: ct
  });
  const ta = S.addFolder({
    title: "FEM"
  });
  ta.addBinding(m, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (o) => o.toExponential(3)
  });
  const xe = S.addFolder({
    title: "Unidades",
    expanded: false
  }), ve = {
    stress: ce.val,
    disp: le.val
  };
  xe.addBinding(ve, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (o) => {
    ce.val = o.value;
  });
  xe.addBinding(ve, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (o) => {
    le.val = o.value;
  });
  document.body.append(At);
  l.derive(() => {
    const o = he.val;
    Object.assign(m, o), S.refresh();
  });
  document.body.append(We(d), be, Ze({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => Ve(), 200);
  setTimeout(() => {
    var _a;
    const o = be.__ctx;
    (o == null ? void 0 : o.camera) && (o == null ? void 0 : o.controls) && (o.camera.up.set(0, 0, 1), o.camera.position.set(2, -2, 1.2), o.controls.target.set(0, 0, 0.25), o.controls.update(), (_a = o.render) == null ? void 0 : _a.call(o));
  }, 800);
});
