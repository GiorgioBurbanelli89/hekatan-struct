import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as $e } from "./theme-2eEBQPmF.js";
import { L as Re, M as ce, C as re, b as ie, V as Ze, B as Ke, a as Qe } from "./Text-DyNVkyur.js";
import { a as We } from "./analyze-BydHtRcI.js";
import { d as ta, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as ea, a as pe, e as ue } from "./getViewer-DnVmZy1T.js";
import { e as aa } from "./makeDraggable-zx2br6Yh.js";
import { g as sa } from "./getParameters-CIJBOwMB.js";
import { g as oa } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const zt = 2e8, At = 0.3, de = zt / (2 * (1 + At)), me = 78, na = 25e4, la = 6e5, i = {
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
  }, he = l.state([]), fe = l.state([]), xe = l.state({}), be = l.state({}), ve = l.state({}), Me = l.state({}), _e = l.state([]), ye = l.state({
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
    const s = i.B.value.val, x = i.H.value.val, Ft = i.t_plate.value.val, d = i.bc.value.val, m = i.hc.value.val, O = i.t_col.value.val, rt = i.L_col.value.val, It = Math.round(i.nBoltsX.value.val), it = Math.round(i.nBoltsY.value.val), dt = i.sx.value.val, Tt = i.sy.value.val, b = i.d_bolt.value.val, U = i.L_bolt.value.val, V = i.L_proj.value.val, X = i.B_ped.value.val, $ = i.H_ped.value.val, mt = i.h_ped.value.val, pt = i.fc.value.val, R = i.Pu.value.val, ut = i.Mx.value.val, ht = i.My.value.val, q = Math.round(i.nx.value.val), E = Math.round(i.ny.value.val), v = Math.round(i.nz_col.value.val), p = 0.04, f = [], M = [], Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map();
    function _(t, e, a) {
      return f.push([
        t,
        e,
        a
      ]), f.length - 1;
    }
    function S(t, e, a, o, c) {
      M.push([
        t,
        e,
        a,
        o
      ]);
      const n = M.length - 1;
      Z.set(n, c), K.set(n, zt), Q.set(n, At), W.set(n, me), tt.set(n, de), et.set(n, 0), st.set(n, 0), at.set(n, 0), ot.set(n, 0);
    }
    function jt(t, e, a, o, c) {
      M.push([
        t,
        e
      ]);
      const n = M.length - 1;
      K.set(n, zt), Q.set(n, At), W.set(n, me), tt.set(n, de), et.set(n, a), st.set(n, o), at.set(n, o), ot.set(n, c), Z.set(n, 0);
    }
    const Lt = s / q, Ot = x / E, N = [];
    for (let t = 0; t <= E; t++) {
      const e = [];
      for (let a = 0; a <= q; a++) e.push(_(-s / 2 + a * Lt, -x / 2 + t * Ot, p));
      N.push(e);
    }
    for (let t = 0; t < E; t++) for (let e = 0; e < q; e++) S(N[t][e], N[t][e + 1], N[t + 1][e + 1], N[t + 1][e], Ft);
    function k(t, e) {
      let a = -1, o = 1 / 0;
      for (let c = 0; c <= E; c++) for (let n = 0; n <= q; n++) {
        const u = N[c][n], P = Math.hypot(f[u][0] - t, f[u][1] - e);
        P < o && (o = P, a = u);
      }
      return a;
    }
    const y = Math.max(2, Math.round(d / Lt)), g = Math.max(2, Math.round(m / Ot)), qt = d / y, Et = m / g, H = rt / v, w = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -d / 2 + a * qt;
        t === 0 ? e.push(k(o, -m / 2)) : e.push(_(o, -m / 2, p + t * H));
      }
      w.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < y; e++) S(w[t][e], w[t][e + 1], w[t + 1][e + 1], w[t + 1][e], O);
    const z = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -d / 2 + a * qt;
        t === 0 ? e.push(k(o, m / 2)) : e.push(_(o, m / 2, p + t * H));
      }
      z.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < y; e++) S(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], O);
    const F = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -m / 2 + a * Et;
        t === 0 ? e.push(k(-d / 2, o)) : a === 0 ? e.push(w[t][0]) : a === g ? e.push(z[t][0]) : e.push(_(-d / 2, o, p + t * H));
      }
      F.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < g; e++) S(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], O);
    const I = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -m / 2 + a * Et;
        t === 0 ? e.push(k(d / 2, o)) : a === 0 ? e.push(w[t][y]) : a === g ? e.push(z[t][y]) : e.push(_(d / 2, o, p + t * H));
      }
      I.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < g; e++) S(I[t][e], I[t][e + 1], I[t + 1][e + 1], I[t + 1][e], O);
    const we = Math.min(0.2, rt * 0.4), Ht = Math.min(0.1, (s - d) / 2 * 0.7), ze = Math.max(1, Math.round(we / H));
    function nt(t, e, a, o) {
      const [c, n] = t, [u, P] = e, J = a[0][o], Bt = k(c + u * Ht, n + P * Ht), j = a[Math.min(ze, a.length - 1)][o];
      S(J, Bt, j, j, O);
    }
    nt([
      0,
      m / 2
    ], [
      0,
      1
    ], z, Math.round(y / 2)), nt([
      0,
      -m / 2
    ], [
      0,
      -1
    ], w, Math.round(y / 2)), nt([
      d / 2,
      0
    ], [
      1,
      0
    ], I, Math.round(g / 2)), nt([
      -d / 2,
      0
    ], [
      -1,
      0
    ], F, Math.round(g / 2));
    const Gt = Math.PI * b * b / 4, ft = Math.PI * b ** 4 / 64, Dt = 2 * ft, G = [], Ae = (s - 2 * dt) / Math.max(1, It - 1), Ce = (x - 2 * Tt) / Math.max(1, it - 1);
    for (let t = 0; t < It; t++) for (let e = 0; e < it; e++) {
      const a = -s / 2 + dt + t * Ae, o = -x / 2 + Tt + e * Ce;
      Math.abs(a) < d / 2 + 5e-3 && Math.abs(o) < m / 2 + 5e-3 || G.push([
        a,
        o
      ]);
    }
    const Yt = 4700 * Math.sqrt(pt / 1e3) * 1e3, Jt = 0.2, Ne = Yt / (2 * (1 + Jt)), A = 10, C = 10, B = 6, xt = X / A, Ut = $ / C, Se = mt / B, Vt = [];
    for (let t = 0; t <= E; t++) for (let e = 0; e <= q; e++) {
      const a = N[t][e];
      Vt.push({
        id: a,
        x: f[a][0],
        y: f[a][1]
      });
    }
    const r = [];
    for (let t = 0; t <= B; t++) {
      const e = [];
      for (let a = 0; a <= C; a++) {
        const o = [];
        for (let c = 0; c <= A; c++) {
          const n = -X / 2 + c * xt, u = -$ / 2 + a * Ut, P = -mt + t * Se, J = t === B, Bt = Math.abs(n) <= s / 2 + 1e-6 && Math.abs(u) <= x / 2 + 1e-6;
          let j;
          if (J && Bt) {
            let Pt = -1, ne = 1 / 0;
            for (const wt of Vt) {
              const le = Math.hypot(wt.x - n, wt.y - u);
              le < ne && (ne = le, Pt = wt.id);
            }
            j = Pt >= 0 ? Pt : _(n, u, P);
          } else j = _(n, u, P);
          o.push(j);
        }
        e.push(o);
      }
      r.push(e);
    }
    for (const [t, e] of G) {
      const a = _(t, e, p + V), o = k(t, e), c = _(t, e, p - U);
      jt(a, o, Gt, ft, Dt), jt(o, c, Gt, ft, Dt);
    }
    function T(t, e, a, o) {
      M.push([
        t,
        e,
        a,
        o
      ]);
      const c = M.length - 1;
      Z.set(c, 1e-3), K.set(c, Yt), Q.set(c, Jt), W.set(c, 24 / 9.80665), tt.set(c, Ne), et.set(c, 0), st.set(c, 0), at.set(c, 0), ot.set(c, 0);
    }
    function ke(t, e) {
      for (const [a, o] of G) if (Math.hypot(t - a, e - o) < xt * 0.6) return true;
      return false;
    }
    for (let t = 0; t < C; t++) for (let e = 0; e < A; e++) {
      T(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
      const a = -X / 2 + (e + 0.5) * xt, o = -$ / 2 + (t + 0.5) * Ut;
      ke(a, o) || T(r[B][t][e], r[B][t][e + 1], r[B][t + 1][e + 1], r[B][t + 1][e]);
    }
    for (let t = 0; t < B; t++) for (let e = 0; e < A; e++) T(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]), T(r[t][C][e], r[t][C][e + 1], r[t + 1][C][e + 1], r[t + 1][C][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < C; e++) T(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]), T(r[t][e][A], r[t][e + 1][A], r[t + 1][e + 1][A], r[t + 1][e][A]);
    const Xt = /* @__PURE__ */ new Map();
    f.forEach((t, e) => {
      const a = Math.abs(t[2] - (p - U)) < 1e-6 && G.some(([c, n]) => Math.abs(t[0] - c) < 1e-6 && Math.abs(t[1] - n) < 1e-6), o = Math.abs(t[2] - -mt) < 1e-6;
      (a || o) && Xt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const bt = [];
    f.forEach((t, e) => {
      Math.abs(t[2] - (p + rt)) < 1e-6 && Math.abs(t[0]) <= d / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && bt.push(e);
    });
    const vt = Math.max(1, bt.length), Fe = -R / vt, Ie = ut / vt, Te = ht / vt, $t = /* @__PURE__ */ new Map();
    for (const t of bt) $t.set(t, [
      0,
      0,
      Fe,
      Ie,
      Te,
      0
    ]);
    const Rt = {
      supports: Xt,
      loads: $t
    }, Mt = {
      elasticities: K,
      shearModuli: tt,
      areas: et,
      momentsOfInertiaZ: at,
      momentsOfInertiaY: st,
      torsionalConstants: ot,
      densities: W,
      poissonsRatios: Q,
      thicknesses: Z
    };
    let _t = {}, yt = {};
    try {
      _t = ta(f, M, Rt, Mt), yt = We(f, M, Mt, _t);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const lt = [], je = new Re({
      color: 16755200
    });
    function D(t, e) {
      const o = [];
      for (let n = 0; n <= 5 * 2; n++) {
        const u = n / 10, P = p * (1 - u), J = n % 2 === 0 ? 0 : 8e-3;
        o.push(new Ze(t + J, e, P));
      }
      const c = new Ke().setFromPoints(o);
      lt.push(new Qe(c, je));
    }
    D(s / 2 - 0.04, x / 2 - 0.04), D(-s / 2 + 0.04, x / 2 - 0.04), D(s / 2 - 0.04, -x / 2 + 0.04), D(-s / 2 + 0.04, -x / 2 + 0.04), D(0, 0);
    const Le = new ce({
      color: 6710886,
      metalness: 0.5
    }), Oe = new ce({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Zt = b * 0.8, Kt = b * 0.85, qe = p + V + Zt / 2;
    for (const [t, e] of G) {
      const a = new re(b / 2, b / 2, U + V, 12), o = new ie(a, Le);
      o.position.set(t, e, p + (-U + V) / 2), o.rotation.x = Math.PI / 2, lt.push(o);
      const c = new re(Kt, Kt, Zt, 6), n = new ie(c, Oe);
      n.position.set(t, e, qe), n.rotation.x = Math.PI / 2, lt.push(n);
    }
    let gt = 0;
    const Qt = yt == null ? void 0 : yt.vonMises;
    Qt && Qt.forEach((t) => t.forEach((e) => {
      e > gt && (gt = e);
    }));
    const Ee = 0.65, Y = s * x, Wt = X * $, He = Math.min(2, Math.sqrt(Wt / Y)), Ge = Math.min(0.85 * pt * Y * He, 1.7 * pt * Y), te = Ee * Ge, De = R / Math.max(1, te), ee = Math.max(0, (s - 0.95 * Math.max(d, m)) / 2), Ye = R / Y, ae = ee * Math.sqrt(2 * Math.max(0, Ye) / (0.9 * na)), Je = ae / Math.max(1e-6, Ft), Ue = Math.max(0.05, s - 2 * dt), Ve = Math.sqrt(ut * ut + ht * ht), se = Math.max(0, Ve / Ue - R / 2) / Math.max(1, it), oe = 0.75 * (0.75 * Math.PI * b * b / 4) * la, Xe = se / Math.max(1, oe);
    ye.val = {
      vmMax: gt,
      A1: Y,
      A2: Wt,
      phiPp: te,
      demandCapPp: De,
      m_cant: ee,
      t_req: ae,
      demandCapT: Je,
      T_anchor: se,
      phiNn: oe,
      demandCapAnchor: Xe
    }, he.val = f, fe.val = M, xe.val = Rt, be.val = Mt, ve.val = _t, Me.val = yt, _e.val = lt;
  });
  const ge = ea({
    mesh: {
      nodes: he,
      elements: fe,
      nodeInputs: xe,
      elementInputs: be,
      deformOutputs: ve,
      analyzeOutputs: Me
    },
    objects3D: _e,
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
  }), Ct = document.createElement("div");
  Ct.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const L = new $e({
    title: "\u{1F9EA} Placa base + col HSS hueca",
    container: Ct,
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
  }, Nt = (s) => s < 1 ? `${s.toFixed(2)} \u2713` : s < 1.2 ? `${s.toFixed(2)} \u26A0` : `${s.toFixed(2)} \u2717`, ct = L.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  ct.addBinding(h, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  ct.addBinding(h, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  ct.addBinding(h, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (s) => s.toFixed(0)
  });
  ct.addBinding(h, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: Nt
  });
  const St = L.addFolder({
    title: "DG-1 espesor placa"
  });
  St.addBinding(h, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (s) => s.toFixed(4)
  });
  St.addBinding(h, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (s) => (s * 1e3).toFixed(1)
  });
  St.addBinding(h, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: Nt
  });
  const kt = L.addFolder({
    title: "ACI \xA717 anclaje"
  });
  kt.addBinding(h, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (s) => s.toFixed(1)
  });
  kt.addBinding(h, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (s) => s.toFixed(1)
  });
  kt.addBinding(h, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: Nt
  });
  const ca = L.addFolder({
    title: "FEM"
  });
  ca.addBinding(h, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (s) => s.toExponential(3)
  });
  const Be = L.addFolder({
    title: "Unidades",
    expanded: false
  }), Pe = {
    stress: ue.val,
    disp: pe.val
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
    ue.val = s.value;
  });
  Be.addBinding(Pe, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (s) => {
    pe.val = s.value;
  });
  document.body.append(Ct);
  l.derive(() => {
    const s = ye.val;
    Object.assign(h, s), L.refresh();
  });
  document.body.append(sa(i), ge, oa({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-hueca/main.ts"
  }));
  setTimeout(() => aa(), 200);
  setTimeout(() => {
    var _a;
    const s = ge.__ctx;
    (s == null ? void 0 : s.camera) && (s == null ? void 0 : s.controls) && (s.camera.up.set(0, 0, 1), s.camera.position.set(2, -2, 1.2), s.controls.target.set(0, 0, 0.25), s.controls.update(), (_a = s.render) == null ? void 0 : _a.call(s));
  }, 800);
});
