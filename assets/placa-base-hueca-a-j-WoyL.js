import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as Re } from "./theme-2eEBQPmF.js";
import { M as zt, b as Ct, c as Ze, L as Ke, C as de, V as Qe, B as We, a as ta } from "./Text-DyNVkyur.js";
import { a as ea } from "./analyze-BydHtRcI.js";
import { d as aa, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as sa, a as ue, e as he } from "./getViewer-DnVmZy1T.js";
import { e as oa } from "./makeDraggable-zx2br6Yh.js";
import { g as na } from "./getParameters-CIJBOwMB.js";
import { g as la } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Nt = 2e8, At = 0.3, me = Nt / (2 * (1 + At)), pe = 78, ca = 25e4, ra = 6e5, i = {
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
      label: "Pu axial (kN)"
    },
    Mx: {
      value: l.state(20),
      min: 0,
      max: 500,
      step: 5,
      label: "Mx (kN\xB7m)"
    },
    My: {
      value: l.state(30),
      min: 0,
      max: 500,
      step: 5,
      label: "My (kN\xB7m)"
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
  }, fe = l.state([]), xe = l.state([]), be = l.state({}), ve = l.state({}), Me = l.state({}), _e = l.state({}), ye = l.state([]), ge = l.state({
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
  l.derive(() => {
    const s = i.B.value.val, u = i.H.value.val, U = i.t_plate.value.val, d = i.bc.value.val, m = i.hc.value.val, O = i.t_col.value.val, it = i.L_col.value.val, Tt = Math.round(i.nBoltsX.value.val), dt = Math.round(i.nBoltsY.value.val), mt = i.sx.value.val, jt = i.sy.value.val, b = i.d_bolt.value.val, V = i.L_bolt.value.val, X = i.L_proj.value.val, $ = i.B_ped.value.val, R = i.H_ped.value.val, pt = i.h_ped.value.val, ut = i.fc.value.val, Z = i.Pu.value.val, ht = i.Mx.value.val, ft = i.My.value.val, q = Math.round(i.nx.value.val), E = Math.round(i.ny.value.val), v = Math.round(i.nz_col.value.val), p = 0.04, x = [], M = [], K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map();
    function _(t, e, a) {
      return x.push([
        t,
        e,
        a
      ]), x.length - 1;
    }
    function S(t, e, a, o, c) {
      M.push([
        t,
        e,
        a,
        o
      ]);
      const n = M.length - 1;
      K.set(n, c), Q.set(n, Nt), W.set(n, At), tt.set(n, pe), et.set(n, me), at.set(n, 0), ot.set(n, 0), st.set(n, 0), nt.set(n, 0);
    }
    function Lt(t, e, a, o, c) {
      M.push([
        t,
        e
      ]);
      const n = M.length - 1;
      Q.set(n, Nt), W.set(n, At), tt.set(n, pe), et.set(n, me), at.set(n, a), ot.set(n, o), st.set(n, o), nt.set(n, c), K.set(n, 0);
    }
    const Ot = s / q, qt = u / E, A = [];
    for (let t = 0; t <= E; t++) {
      const e = [];
      for (let a = 0; a <= q; a++) e.push(_(-s / 2 + a * Ot, -u / 2 + t * qt, p));
      A.push(e);
    }
    for (let t = 0; t < E; t++) for (let e = 0; e < q; e++) S(A[t][e], A[t][e + 1], A[t + 1][e + 1], A[t + 1][e], U);
    function k(t, e) {
      let a = -1, o = 1 / 0;
      for (let c = 0; c <= E; c++) for (let n = 0; n <= q; n++) {
        const h = A[c][n], B = Math.hypot(x[h][0] - t, x[h][1] - e);
        B < o && (o = B, a = h);
      }
      return a;
    }
    const y = Math.max(2, Math.round(d / Ot)), g = Math.max(2, Math.round(m / qt)), Et = d / y, Ht = m / g, H = it / v, P = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -d / 2 + a * Et;
        t === 0 ? e.push(k(o, -m / 2)) : e.push(_(o, -m / 2, p + t * H));
      }
      P.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < y; e++) S(P[t][e], P[t][e + 1], P[t + 1][e + 1], P[t + 1][e], O);
    const z = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -d / 2 + a * Et;
        t === 0 ? e.push(k(o, m / 2)) : e.push(_(o, m / 2, p + t * H));
      }
      z.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < y; e++) S(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], O);
    const F = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -m / 2 + a * Ht;
        t === 0 ? e.push(k(-d / 2, o)) : a === 0 ? e.push(P[t][0]) : a === g ? e.push(z[t][0]) : e.push(_(-d / 2, o, p + t * H));
      }
      F.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < g; e++) S(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], O);
    const I = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -m / 2 + a * Ht;
        t === 0 ? e.push(k(d / 2, o)) : a === 0 ? e.push(P[t][y]) : a === g ? e.push(z[t][y]) : e.push(_(d / 2, o, p + t * H));
      }
      I.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < g; e++) S(I[t][e], I[t][e + 1], I[t + 1][e + 1], I[t + 1][e], O);
    const ze = Math.min(0.2, it * 0.4), Gt = Math.min(0.1, (s - d) / 2 * 0.7), Ce = Math.max(1, Math.round(ze / H));
    function lt(t, e, a, o) {
      const [c, n] = t, [h, B] = e, J = a[0][o], wt = k(c + h * Gt, n + B * Gt), j = a[Math.min(Ce, a.length - 1)][o];
      S(J, wt, j, j, O);
    }
    lt([
      0,
      m / 2
    ], [
      0,
      1
    ], z, Math.round(y / 2)), lt([
      0,
      -m / 2
    ], [
      0,
      -1
    ], P, Math.round(y / 2)), lt([
      d / 2,
      0
    ], [
      1,
      0
    ], I, Math.round(g / 2)), lt([
      -d / 2,
      0
    ], [
      -1,
      0
    ], F, Math.round(g / 2));
    const Dt = Math.PI * b * b / 4, xt = Math.PI * b ** 4 / 64, Yt = 2 * xt, ct = [], Ne = (s - 2 * mt) / Math.max(1, Tt - 1), Ae = (u - 2 * jt) / Math.max(1, dt - 1);
    for (let t = 0; t < Tt; t++) for (let e = 0; e < dt; e++) {
      const a = -s / 2 + mt + t * Ne, o = -u / 2 + jt + e * Ae;
      Math.abs(a) < d / 2 + 5e-3 && Math.abs(o) < m / 2 + 5e-3 || ct.push([
        a,
        o
      ]);
    }
    const Jt = 4700 * Math.sqrt(ut / 1e3) * 1e3, Ut = 0.2, Se = Jt / (2 * (1 + Ut)), C = 10, N = 10, w = 6, Vt = $ / C, Xt = R / N, ke = pt / w, $t = [];
    for (let t = 0; t <= E; t++) for (let e = 0; e <= q; e++) {
      const a = A[t][e];
      $t.push({
        id: a,
        x: x[a][0],
        y: x[a][1]
      });
    }
    const r = [];
    for (let t = 0; t <= w; t++) {
      const e = [];
      for (let a = 0; a <= N; a++) {
        const o = [];
        for (let c = 0; c <= C; c++) {
          const n = -$ / 2 + c * Vt, h = -R / 2 + a * Xt, B = -pt + t * ke, J = t === w, wt = Math.abs(n) <= s / 2 + 1e-6 && Math.abs(h) <= u / 2 + 1e-6;
          let j;
          if (J && wt) {
            let Bt = -1, re = 1 / 0;
            for (const Pt of $t) {
              const ie = Math.hypot(Pt.x - n, Pt.y - h);
              ie < re && (re = ie, Bt = Pt.id);
            }
            j = Bt >= 0 ? Bt : _(n, h, B);
          } else j = _(n, h, B);
          o.push(j);
        }
        e.push(o);
      }
      r.push(e);
    }
    for (const [t, e] of ct) {
      const a = _(t, e, p + X), o = k(t, e), c = _(t, e, p - V);
      Lt(a, o, Dt, xt, Yt), Lt(o, c, Dt, xt, Yt);
    }
    function T(t, e, a, o) {
      M.push([
        t,
        e,
        a,
        o
      ]);
      const c = M.length - 1;
      K.set(c, 1e-3), Q.set(c, Jt), W.set(c, Ut), tt.set(c, 24 / 9.80665), et.set(c, Se), at.set(c, 0), ot.set(c, 0), st.set(c, 0), nt.set(c, 0);
    }
    for (let t = 0; t < N; t++) for (let e = 0; e < C; e++) {
      T(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
      const a = -$ / 2 + (e + 0.5) * Vt, o = -R / 2 + (t + 0.5) * Xt;
      Math.abs(a) <= s / 2 && Math.abs(o) <= u / 2 || T(r[w][t][e], r[w][t][e + 1], r[w][t + 1][e + 1], r[w][t + 1][e]);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < C; e++) T(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]), T(r[t][N][e], r[t][N][e + 1], r[t + 1][N][e + 1], r[t + 1][N][e]);
    for (let t = 0; t < w; t++) for (let e = 0; e < N; e++) T(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]), T(r[t][e][C], r[t][e + 1][C], r[t + 1][e + 1][C], r[t + 1][e][C]);
    const Rt = /* @__PURE__ */ new Map();
    x.forEach((t, e) => {
      const a = Math.abs(t[2] - (p - V)) < 1e-6 && ct.some(([c, n]) => Math.abs(t[0] - c) < 1e-6 && Math.abs(t[1] - n) < 1e-6), o = Math.abs(t[2] - -pt) < 1e-6;
      (a || o) && Rt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const bt = [];
    x.forEach((t, e) => {
      Math.abs(t[2] - (p + it)) < 1e-6 && Math.abs(t[0]) <= d / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && bt.push(e);
    });
    const vt = Math.max(1, bt.length), Fe = -Z / vt, Ie = ht / vt, Te = ft / vt, Zt = /* @__PURE__ */ new Map();
    for (const t of bt) Zt.set(t, [
      0,
      0,
      Fe,
      Ie,
      Te,
      0
    ]);
    const Kt = {
      supports: Rt,
      loads: Zt
    }, Mt = {
      elasticities: Q,
      shearModuli: et,
      areas: at,
      momentsOfInertiaZ: st,
      momentsOfInertiaY: ot,
      torsionalConstants: nt,
      densities: tt,
      poissonsRatios: W,
      thicknesses: K
    };
    let _t = {}, yt = {};
    try {
      _t = aa(x, M, Kt, Mt), yt = ea(x, M, Mt, _t);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const G = [], je = new zt({
      color: 12105912,
      metalness: 0.7,
      roughness: 0.4,
      transparent: true,
      opacity: 0.45
    }), Qt = new Ct(new Ze(s, u, U), je);
    Qt.position.set(0, 0, p + U / 2);
    const Le = new Ke({
      color: 16755200
    });
    function D(t, e) {
      const o = [];
      for (let n = 0; n <= 5 * 2; n++) {
        const h = n / 10, B = p * (1 - h), J = n % 2 === 0 ? 0 : 8e-3;
        o.push(new Qe(t + J, e, B));
      }
      const c = new We().setFromPoints(o);
      G.push(new ta(c, Le));
    }
    D(s / 2 - 0.04, u / 2 - 0.04), D(-s / 2 + 0.04, u / 2 - 0.04), D(s / 2 - 0.04, -u / 2 + 0.04), D(-s / 2 + 0.04, -u / 2 + 0.04), D(0, 0), G.push(Qt);
    const Oe = new zt({
      color: 6710886,
      metalness: 0.5
    }), qe = new zt({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Wt = b * 0.8, te = b * 0.85, Ee = p + X + Wt / 2;
    for (const [t, e] of ct) {
      const a = new de(b / 2, b / 2, V + X, 12), o = new Ct(a, Oe);
      o.position.set(t, e, p + (-V + X) / 2), o.rotation.x = Math.PI / 2, G.push(o);
      const c = new de(te, te, Wt, 6), n = new Ct(c, qe);
      n.position.set(t, e, Ee), n.rotation.x = Math.PI / 2, G.push(n);
    }
    let gt = 0;
    const ee = yt == null ? void 0 : yt.vonMises;
    ee && ee.forEach((t) => t.forEach((e) => {
      e > gt && (gt = e);
    }));
    const He = 0.65, Y = s * u, ae = $ * R, Ge = Math.min(2, Math.sqrt(ae / Y)), De = Math.min(0.85 * ut * Y * Ge, 1.7 * ut * Y), se = He * De, Ye = Z / Math.max(1, se), oe = Math.max(0, (s - 0.95 * Math.max(d, m)) / 2), Je = Z / Y, ne = oe * Math.sqrt(2 * Math.max(0, Je) / (0.9 * ca)), Ue = ne / Math.max(1e-6, U), Ve = Math.max(0.05, s - 2 * mt), Xe = Math.sqrt(ht * ht + ft * ft), le = Math.max(0, Xe / Ve - Z / 2) / Math.max(1, dt), ce = 0.75 * (0.75 * Math.PI * b * b / 4) * ra, $e = le / Math.max(1, ce);
    ge.val = {
      vmMax: gt,
      A1: Y,
      A2: ae,
      phiPp: se,
      demandCapPp: Ye,
      m_cant: oe,
      t_req: ne,
      demandCapT: Ue,
      T_anchor: le,
      phiNn: ce,
      demandCapAnchor: $e
    }, fe.val = x, xe.val = M, be.val = Kt, ve.val = Mt, Me.val = _t, _e.val = yt, ye.val = G;
  });
  const we = sa({
    mesh: {
      nodes: fe,
      elements: xe,
      nodeInputs: be,
      elementInputs: ve,
      deformOutputs: Me,
      analyzeOutputs: _e
    },
    objects3D: ye,
    settingsObj: {
      deformedShape: false,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 1,
      custom3D: true,
      loads: false,
      supports: false,
      showCotas: false,
      displayScale: 0.1
    }
  }), St = document.createElement("div");
  St.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const L = new Re({
    title: "\u{1F9EA} Placa base + col HSS hueca",
    container: St,
    expanded: true
  }), f = {
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
  }, kt = (s) => s < 1 ? `${s.toFixed(2)} \u2713` : s < 1.2 ? `${s.toFixed(2)} \u26A0` : `${s.toFixed(2)} \u2717`, rt = L.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  rt.addBinding(f, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  rt.addBinding(f, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  rt.addBinding(f, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (s) => s.toFixed(0)
  });
  rt.addBinding(f, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: kt
  });
  const Ft = L.addFolder({
    title: "DG-1 espesor placa"
  });
  Ft.addBinding(f, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (s) => s.toFixed(4)
  });
  Ft.addBinding(f, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (s) => (s * 1e3).toFixed(1)
  });
  Ft.addBinding(f, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: kt
  });
  const It = L.addFolder({
    title: "ACI \xA717 anclaje"
  });
  It.addBinding(f, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (s) => s.toFixed(1)
  });
  It.addBinding(f, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (s) => s.toFixed(1)
  });
  It.addBinding(f, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: kt
  });
  const ia = L.addFolder({
    title: "FEM"
  });
  ia.addBinding(f, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (s) => s.toExponential(3)
  });
  const Be = L.addFolder({
    title: "Unidades",
    expanded: false
  }), Pe = {
    stress: he.val,
    disp: ue.val
  };
  Be.addBinding(Pe, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (s) => {
    he.val = s.value;
  });
  Be.addBinding(Pe, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (s) => {
    ue.val = s.value;
  });
  document.body.append(St);
  l.derive(() => {
    const s = ge.val;
    Object.assign(f, s), L.refresh();
  });
  document.body.append(na(i), we, la({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-hueca/main.ts"
  }));
  setTimeout(() => oa(), 200);
  setTimeout(() => {
    var _a;
    const s = we.__ctx;
    (s == null ? void 0 : s.camera) && (s == null ? void 0 : s.controls) && (s.camera.up.set(0, 0, 1), s.camera.position.set(2, -2, 1.2), s.controls.target.set(0, 0, 0.25), s.controls.update(), (_a = s.render) == null ? void 0 : _a.call(s));
  }, 800);
});
