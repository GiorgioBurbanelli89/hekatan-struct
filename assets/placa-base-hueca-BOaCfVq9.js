import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as Ze } from "./theme-2eEBQPmF.js";
import { M as At, b as Ct, c as Ke, L as Qe, C as de, V as We, B as ta, a as ea } from "./Text-BajK4Ymq.js";
import { a as aa } from "./analyze-BydHtRcI.js";
import { d as sa, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as oa, a as ue, e as he } from "./getViewer-CZ5JMuv5.js";
import { e as na } from "./makeDraggable-zx2br6Yh.js";
import { g as la } from "./getParameters-CIJBOwMB.js";
import { g as ca } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Nt = 2e8, St = 0.3, me = Nt / (2 * (1 + St)), pe = 78, ra = 25e4, ia = 6e5, i = {
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
    const s = i.B.value.val, f = i.H.value.val, V = i.t_plate.value.val, d = i.bc.value.val, m = i.hc.value.val, O = i.t_col.value.val, it = i.L_col.value.val, jt = Math.round(i.nBoltsX.value.val), dt = Math.round(i.nBoltsY.value.val), mt = i.sx.value.val, Lt = i.sy.value.val, b = i.d_bolt.value.val, X = i.L_bolt.value.val, $ = i.L_proj.value.val, R = i.B_ped.value.val, Z = i.H_ped.value.val, pt = i.h_ped.value.val, ut = i.fc.value.val, K = i.Pu.value.val, ht = i.Mx.value.val, ft = i.My.value.val, q = Math.round(i.nx.value.val), E = Math.round(i.ny.value.val), v = Math.round(i.nz_col.value.val), p = 0.04, x = [], M = [], Q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map();
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
      Q.set(n, c), W.set(n, Nt), tt.set(n, St), et.set(n, pe), at.set(n, me), st.set(n, 0), nt.set(n, 0), ot.set(n, 0), lt.set(n, 0);
    }
    function Ot(t, e, a, o, c) {
      M.push([
        t,
        e
      ]);
      const n = M.length - 1;
      W.set(n, Nt), tt.set(n, St), et.set(n, pe), at.set(n, me), st.set(n, a), nt.set(n, o), ot.set(n, o), lt.set(n, c), Q.set(n, 0);
    }
    const qt = s / q, Et = f / E, N = [];
    for (let t = 0; t <= E; t++) {
      const e = [];
      for (let a = 0; a <= q; a++) e.push(_(-s / 2 + a * qt, -f / 2 + t * Et, p));
      N.push(e);
    }
    for (let t = 0; t < E; t++) for (let e = 0; e < q; e++) S(N[t][e], N[t][e + 1], N[t + 1][e + 1], N[t + 1][e], V);
    function k(t, e) {
      let a = -1, o = 1 / 0;
      for (let c = 0; c <= E; c++) for (let n = 0; n <= q; n++) {
        const u = N[c][n], w = Math.hypot(x[u][0] - t, x[u][1] - e);
        w < o && (o = w, a = u);
      }
      return a;
    }
    const y = Math.max(2, Math.round(d / qt)), g = Math.max(2, Math.round(m / Et)), Ht = d / y, Gt = m / g, H = it / v, P = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -d / 2 + a * Ht;
        t === 0 ? e.push(k(o, -m / 2)) : e.push(_(o, -m / 2, p + t * H));
      }
      P.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < y; e++) S(P[t][e], P[t][e + 1], P[t + 1][e + 1], P[t + 1][e], O);
    const z = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -d / 2 + a * Ht;
        t === 0 ? e.push(k(o, m / 2)) : e.push(_(o, m / 2, p + t * H));
      }
      z.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < y; e++) S(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], O);
    const F = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -m / 2 + a * Gt;
        t === 0 ? e.push(k(-d / 2, o)) : a === 0 ? e.push(P[t][0]) : a === g ? e.push(z[t][0]) : e.push(_(-d / 2, o, p + t * H));
      }
      F.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < g; e++) S(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], O);
    const I = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -m / 2 + a * Gt;
        t === 0 ? e.push(k(d / 2, o)) : a === 0 ? e.push(P[t][y]) : a === g ? e.push(z[t][y]) : e.push(_(d / 2, o, p + t * H));
      }
      I.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < g; e++) S(I[t][e], I[t][e + 1], I[t + 1][e + 1], I[t + 1][e], O);
    const ze = Math.min(0.2, it * 0.4), Dt = Math.min(0.1, (s - d) / 2 * 0.7), Ae = Math.max(1, Math.round(ze / H));
    function ct(t, e, a, o) {
      const [c, n] = t, [u, w] = e, U = a[0][o], wt = k(c + u * Dt, n + w * Dt), j = a[Math.min(Ae, a.length - 1)][o];
      S(U, wt, j, j, O);
    }
    ct([
      0,
      m / 2
    ], [
      0,
      1
    ], z, Math.round(y / 2)), ct([
      0,
      -m / 2
    ], [
      0,
      -1
    ], P, Math.round(y / 2)), ct([
      d / 2,
      0
    ], [
      1,
      0
    ], I, Math.round(g / 2)), ct([
      -d / 2,
      0
    ], [
      -1,
      0
    ], F, Math.round(g / 2));
    const Yt = Math.PI * b * b / 4, xt = Math.PI * b ** 4 / 64, Jt = 2 * xt, G = [], Ce = (s - 2 * mt) / Math.max(1, jt - 1), Ne = (f - 2 * Lt) / Math.max(1, dt - 1);
    for (let t = 0; t < jt; t++) for (let e = 0; e < dt; e++) {
      const a = -s / 2 + mt + t * Ce, o = -f / 2 + Lt + e * Ne;
      Math.abs(a) < d / 2 + 5e-3 && Math.abs(o) < m / 2 + 5e-3 || G.push([
        a,
        o
      ]);
    }
    const Ut = 4700 * Math.sqrt(ut / 1e3) * 1e3, Vt = 0.2, Se = Ut / (2 * (1 + Vt)), A = 10, C = 10, B = 6, bt = R / A, Xt = Z / C, ke = pt / B, $t = [];
    for (let t = 0; t <= E; t++) for (let e = 0; e <= q; e++) {
      const a = N[t][e];
      $t.push({
        id: a,
        x: x[a][0],
        y: x[a][1]
      });
    }
    const r = [];
    for (let t = 0; t <= B; t++) {
      const e = [];
      for (let a = 0; a <= C; a++) {
        const o = [];
        for (let c = 0; c <= A; c++) {
          const n = -R / 2 + c * bt, u = -Z / 2 + a * Xt, w = -pt + t * ke, U = t === B, wt = Math.abs(n) <= s / 2 + 1e-6 && Math.abs(u) <= f / 2 + 1e-6;
          let j;
          if (U && wt) {
            let Pt = -1, re = 1 / 0;
            for (const zt of $t) {
              const ie = Math.hypot(zt.x - n, zt.y - u);
              ie < re && (re = ie, Pt = zt.id);
            }
            j = Pt >= 0 ? Pt : _(n, u, w);
          } else j = _(n, u, w);
          o.push(j);
        }
        e.push(o);
      }
      r.push(e);
    }
    for (const [t, e] of G) {
      const a = _(t, e, p + $), o = k(t, e), c = _(t, e, p - X);
      Ot(a, o, Yt, xt, Jt), Ot(o, c, Yt, xt, Jt);
    }
    function T(t, e, a, o) {
      M.push([
        t,
        e,
        a,
        o
      ]);
      const c = M.length - 1;
      Q.set(c, 1e-3), W.set(c, Ut), tt.set(c, Vt), et.set(c, 24 / 9.80665), at.set(c, Se), st.set(c, 0), nt.set(c, 0), ot.set(c, 0), lt.set(c, 0);
    }
    function Fe(t, e) {
      for (const [a, o] of G) if (Math.hypot(t - a, e - o) < bt * 0.6) return true;
      return false;
    }
    for (let t = 0; t < C; t++) for (let e = 0; e < A; e++) {
      T(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
      const a = -R / 2 + (e + 0.5) * bt, o = -Z / 2 + (t + 0.5) * Xt;
      Fe(a, o) || T(r[B][t][e], r[B][t][e + 1], r[B][t + 1][e + 1], r[B][t + 1][e]);
    }
    for (let t = 0; t < B; t++) for (let e = 0; e < A; e++) T(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]), T(r[t][C][e], r[t][C][e + 1], r[t + 1][C][e + 1], r[t + 1][C][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < C; e++) T(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]), T(r[t][e][A], r[t][e + 1][A], r[t + 1][e + 1][A], r[t + 1][e][A]);
    const Rt = /* @__PURE__ */ new Map();
    x.forEach((t, e) => {
      const a = Math.abs(t[2] - (p - X)) < 1e-6 && G.some(([c, n]) => Math.abs(t[0] - c) < 1e-6 && Math.abs(t[1] - n) < 1e-6), o = Math.abs(t[2] - -pt) < 1e-6;
      (a || o) && Rt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const vt = [];
    x.forEach((t, e) => {
      Math.abs(t[2] - (p + it)) < 1e-6 && Math.abs(t[0]) <= d / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && vt.push(e);
    });
    const Mt = Math.max(1, vt.length), Ie = -K / Mt, Te = ht / Mt, je = ft / Mt, Zt = /* @__PURE__ */ new Map();
    for (const t of vt) Zt.set(t, [
      0,
      0,
      Ie,
      Te,
      je,
      0
    ]);
    const Kt = {
      supports: Rt,
      loads: Zt
    }, _t = {
      elasticities: W,
      shearModuli: at,
      areas: st,
      momentsOfInertiaZ: ot,
      momentsOfInertiaY: nt,
      torsionalConstants: lt,
      densities: et,
      poissonsRatios: tt,
      thicknesses: Q
    };
    let yt = {}, gt = {};
    try {
      yt = sa(x, M, Kt, _t), gt = aa(x, M, _t, yt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const D = [], Le = new At({
      color: 12105912,
      metalness: 0.7,
      roughness: 0.4,
      transparent: true,
      opacity: 0.45
    }), Qt = new Ct(new Ke(s, f, V), Le);
    Qt.position.set(0, 0, p + V / 2);
    const Oe = new Qe({
      color: 16755200
    });
    function Y(t, e) {
      const o = [];
      for (let n = 0; n <= 5 * 2; n++) {
        const u = n / 10, w = p * (1 - u), U = n % 2 === 0 ? 0 : 8e-3;
        o.push(new We(t + U, e, w));
      }
      const c = new ta().setFromPoints(o);
      D.push(new ea(c, Oe));
    }
    Y(s / 2 - 0.04, f / 2 - 0.04), Y(-s / 2 + 0.04, f / 2 - 0.04), Y(s / 2 - 0.04, -f / 2 + 0.04), Y(-s / 2 + 0.04, -f / 2 + 0.04), Y(0, 0), D.push(Qt);
    const qe = new At({
      color: 6710886,
      metalness: 0.5
    }), Ee = new At({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Wt = b * 0.8, te = b * 0.85, He = p + $ + Wt / 2;
    for (const [t, e] of G) {
      const a = new de(b / 2, b / 2, X + $, 12), o = new Ct(a, qe);
      o.position.set(t, e, p + (-X + $) / 2), o.rotation.x = Math.PI / 2, D.push(o);
      const c = new de(te, te, Wt, 6), n = new Ct(c, Ee);
      n.position.set(t, e, He), n.rotation.x = Math.PI / 2, D.push(n);
    }
    let Bt = 0;
    const ee = gt == null ? void 0 : gt.vonMises;
    ee && ee.forEach((t) => t.forEach((e) => {
      e > Bt && (Bt = e);
    }));
    const Ge = 0.65, J = s * f, ae = R * Z, De = Math.min(2, Math.sqrt(ae / J)), Ye = Math.min(0.85 * ut * J * De, 1.7 * ut * J), se = Ge * Ye, Je = K / Math.max(1, se), oe = Math.max(0, (s - 0.95 * Math.max(d, m)) / 2), Ue = K / J, ne = oe * Math.sqrt(2 * Math.max(0, Ue) / (0.9 * ra)), Ve = ne / Math.max(1e-6, V), Xe = Math.max(0.05, s - 2 * mt), $e = Math.sqrt(ht * ht + ft * ft), le = Math.max(0, $e / Xe - K / 2) / Math.max(1, dt), ce = 0.75 * (0.75 * Math.PI * b * b / 4) * ia, Re = le / Math.max(1, ce);
    ge.val = {
      vmMax: Bt,
      A1: J,
      A2: ae,
      phiPp: se,
      demandCapPp: Je,
      m_cant: oe,
      t_req: ne,
      demandCapT: Ve,
      T_anchor: le,
      phiNn: ce,
      demandCapAnchor: Re
    }, fe.val = x, xe.val = M, be.val = Kt, ve.val = _t, Me.val = yt, _e.val = gt, ye.val = D;
  });
  const Be = oa({
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
      loads: true,
      supports: false,
      showCotas: false,
      displayScale: 0.15
    }
  }), kt = document.createElement("div");
  kt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const L = new Ze({
    title: "\u{1F9EA} Placa base + col HSS hueca",
    container: kt,
    expanded: true
  }), h = {
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
  }, Ft = (s) => s < 1 ? `${s.toFixed(2)} \u2713` : s < 1.2 ? `${s.toFixed(2)} \u26A0` : `${s.toFixed(2)} \u2717`, rt = L.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  rt.addBinding(h, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  rt.addBinding(h, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  rt.addBinding(h, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (s) => s.toFixed(0)
  });
  rt.addBinding(h, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: Ft
  });
  const It = L.addFolder({
    title: "DG-1 espesor placa"
  });
  It.addBinding(h, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (s) => s.toFixed(4)
  });
  It.addBinding(h, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (s) => (s * 1e3).toFixed(1)
  });
  It.addBinding(h, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: Ft
  });
  const Tt = L.addFolder({
    title: "ACI \xA717 anclaje"
  });
  Tt.addBinding(h, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (s) => s.toFixed(1)
  });
  Tt.addBinding(h, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (s) => s.toFixed(1)
  });
  Tt.addBinding(h, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: Ft
  });
  const da = L.addFolder({
    title: "FEM"
  });
  da.addBinding(h, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (s) => s.toExponential(3)
  });
  const we = L.addFolder({
    title: "Unidades",
    expanded: false
  }), Pe = {
    stress: he.val,
    disp: ue.val
  };
  we.addBinding(Pe, "stress", {
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
  we.addBinding(Pe, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (s) => {
    ue.val = s.value;
  });
  document.body.append(kt);
  l.derive(() => {
    const s = ge.val;
    Object.assign(h, s), L.refresh();
  });
  document.body.append(la(i), Be, ca({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-hueca/main.ts"
  }));
  setTimeout(() => na(), 200);
  setTimeout(() => {
    var _a;
    const s = Be.__ctx;
    (s == null ? void 0 : s.camera) && (s == null ? void 0 : s.controls) && (s.camera.up.set(0, 0, 1), s.camera.position.set(2, -2, 1.2), s.controls.target.set(0, 0, 0.25), s.controls.update(), (_a = s.render) == null ? void 0 : _a.call(s));
  }, 800);
});
