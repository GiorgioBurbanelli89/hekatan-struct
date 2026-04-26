import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as ta } from "./theme-2eEBQPmF.js";
import { M as de, C as me, b as pe } from "./Text-DyNVkyur.js";
import { a as ea } from "./analyze-BydHtRcI.js";
import { d as aa, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as oa, a as he, e as xe } from "./getViewer-DnVmZy1T.js";
import { e as sa } from "./makeDraggable-zx2br6Yh.js";
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
  const kt = 2e8, Ft = 0.3, ue = kt / (2 * (1 + Ft)), fe = 78, ca = 25e4, ra = 6e5, d = {
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
  }, be = l.state([]), ve = l.state([]), _e = l.state({}), Me = l.state({}), ye = l.state({}), ge = l.state({}), Pe = l.state([]), Ae = l.state({
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
    const o = d.B.value.val, j = d.H.value.val, Nt = d.t_plate.value.val, p = d.bc.value.val, u = d.hc.value.val, y = d.t_col.value.val, rt = d.L_col.value.val, Tt = Math.round(d.nBoltsX.value.val), it = Math.round(d.nBoltsY.value.val), dt = d.sx.value.val, St = d.sy.value.val, M = d.d_bolt.value.val, mt = d.L_bolt.value.val, K = d.L_proj.value.val, Q = d.B_ped.value.val, tt = d.H_ped.value.val, pt = d.h_ped.value.val, et = d.fc.value.val, L = d.Pu.value.val, ut = d.Mx.value.val, ft = d.My.value.val, at = Math.round(d.nx.value.val), ot = Math.round(d.ny.value.val), v = Math.round(d.nz_col.value.val), _ = [], f = [], O = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
    function g(t, e, a) {
      return _.push([
        t,
        e,
        a
      ]), _.length - 1;
    }
    function $(t, e, a, s, n) {
      f.push([
        t,
        e,
        a,
        s
      ]);
      const c = f.length - 1;
      O.set(c, n), q.set(c, kt), G.set(c, Ft), H.set(c, fe), D.set(c, ue), Y.set(c, 0), U.set(c, 0), J.set(c, 0), X.set(c, 0);
    }
    function Et(t, e, a, s, n) {
      f.push([
        t,
        e
      ]);
      const c = f.length - 1;
      q.set(c, kt), G.set(c, Ft), H.set(c, fe), D.set(c, ue), Y.set(c, a), U.set(c, s), J.set(c, s), X.set(c, n), O.set(c, 0);
    }
    const Lt = o / at, Ot = j / ot, N = [];
    for (let t = 0; t <= ot; t++) {
      const e = [];
      for (let a = 0; a <= at; a++) e.push(g(-o / 2 + a * Lt, -j / 2 + t * Ot, 0));
      N.push(e);
    }
    for (let t = 0; t < ot; t++) for (let e = 0; e < at; e++) $(N[t][e], N[t][e + 1], N[t + 1][e + 1], N[t + 1][e], Nt);
    function R(t, e) {
      let a = -1, s = 1 / 0;
      for (let n = 0; n <= ot; n++) for (let c = 0; c <= at; c++) {
        const z = N[n][c], E = Math.hypot(_[z][0] - t, _[z][1] - e);
        E < s && (s = E, a = z);
      }
      return a;
    }
    const w = Math.max(2, Math.round(p / Lt)), C = Math.max(2, Math.round(u / Ot)), qt = p / w, Gt = u / C, st = rt / v, k = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= w; a++) {
        const s = -p / 2 + a * qt;
        t === 0 ? e.push(R(s, -u / 2)) : e.push(g(s, -u / 2, t * st));
      }
      k.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < w; e++) $(k[t][e], k[t][e + 1], k[t + 1][e + 1], k[t + 1][e], y);
    const F = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= w; a++) {
        const s = -p / 2 + a * qt;
        t === 0 ? e.push(R(s, u / 2)) : e.push(g(s, u / 2, t * st));
      }
      F.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < w; e++) $(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], y);
    const V = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= C; a++) {
        const s = -u / 2 + a * Gt;
        t === 0 ? e.push(R(-p / 2, s)) : a === 0 ? e.push(k[t][0]) : a === C ? e.push(F[t][0]) : e.push(g(-p / 2, s, t * st));
      }
      V.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < C; e++) $(V[t][e], V[t][e + 1], V[t + 1][e + 1], V[t + 1][e], y);
    const Z = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= C; a++) {
        const s = -u / 2 + a * Gt;
        t === 0 ? e.push(R(p / 2, s)) : a === 0 ? e.push(k[t][w]) : a === C ? e.push(F[t][w]) : e.push(g(p / 2, s, t * st));
      }
      Z.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < C; e++) $(Z[t][e], Z[t][e + 1], Z[t + 1][e + 1], Z[t + 1][e], y);
    const Ht = Math.PI * M * M / 4, ht = Math.PI * M ** 4 / 64, Dt = 2 * ht, xt = [], ke = (o - 2 * dt) / Math.max(1, Tt - 1), Fe = (j - 2 * St) / Math.max(1, it - 1);
    for (let t = 0; t < Tt; t++) for (let e = 0; e < it; e++) {
      const a = -o / 2 + dt + t * ke, s = -j / 2 + St + e * Fe;
      Math.abs(a) < p / 2 + 5e-3 && Math.abs(s) < u / 2 + 5e-3 || xt.push([
        a,
        s
      ]);
    }
    const ze = [
      ...xt
    ], bt = 4700 * Math.sqrt(et / 1e3) * 1e3, vt = 0.2, Yt = bt / (2 * (1 + vt)), h = 10, x = 10, b = 6, Jt = Q / h, Ut = tt / x, Ie = pt / b, r = [];
    for (let t = 0; t <= b; t++) {
      const e = [];
      for (let a = 0; a <= x; a++) {
        const s = [];
        for (let n = 0; n <= h; n++) s.push(g(-Q / 2 + n * Jt, -tt / 2 + a * Ut, -pt + t * Ie));
        e.push(s);
      }
      r.push(e);
    }
    function je(t, e, a) {
      let s = -1, n = 1 / 0;
      for (let c = 0; c <= b; c++) for (let z = 0; z <= x; z++) for (let E = 0; E <= h; E++) {
        const re = r[c][z][E], Ct = _[re], ie = Math.hypot(Ct[0] - t, Ct[1] - e) + Math.abs(Ct[2] - a) * 0.5;
        ie < n && (n = ie, s = re);
      }
      return s;
    }
    function T(t, e, a, s) {
      f.push([
        t,
        e,
        a,
        s
      ]);
      const n = f.length - 1;
      O.set(n, 1e-3), q.set(n, bt), G.set(n, vt), H.set(n, 24 / 9.80665), D.set(n, Yt), Y.set(n, 0), U.set(n, 0), J.set(n, 0), X.set(n, 0);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < h; e++) T(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
    for (let t = 0; t < x; t++) for (let e = 0; e < h; e++) {
      const a = -Q / 2 + (e + 0.5) * Jt, s = -tt / 2 + (t + 0.5) * Ut;
      Math.abs(a) <= o / 2 && Math.abs(s) <= j / 2 || T(r[b][t][e], r[b][t][e + 1], r[b][t + 1][e + 1], r[b][t + 1][e]);
    }
    for (let t = 0; t < b; t++) for (let e = 0; e < h; e++) T(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]);
    for (let t = 0; t < b; t++) for (let e = 0; e < h; e++) T(r[t][x][e], r[t][x][e + 1], r[t + 1][x][e + 1], r[t + 1][x][e]);
    for (let t = 0; t < b; t++) for (let e = 0; e < x; e++) T(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]);
    for (let t = 0; t < b; t++) for (let e = 0; e < x; e++) T(r[t][e][h], r[t][e + 1][h], r[t + 1][e + 1][h], r[t + 1][e][h]);
    for (const [t, e] of ze) {
      const a = g(t, e, K), s = R(t, e), n = je(t, e, -mt);
      Et(a, s, Ht, ht, Dt), Et(s, n, Ht, ht, Dt);
    }
    const Xt = p - 2 * y, $t = u - 2 * y, P = 4, A = 4, B = v, Ne = Xt / P, Te = $t / A, Se = rt / B, i = [];
    for (let t = 0; t <= B; t++) {
      const e = [];
      for (let a = 0; a <= A; a++) {
        const s = [];
        for (let n = 0; n <= P; n++) s.push(g(-Xt / 2 + n * Ne, -$t / 2 + a * Te, t * Se));
        e.push(s);
      }
      i.push(e);
    }
    function S(t, e, a, s) {
      f.push([
        t,
        e,
        a,
        s
      ]);
      const n = f.length - 1;
      O.set(n, 1e-3), q.set(n, bt), G.set(n, vt), H.set(n, 24 / 9.80665), D.set(n, Yt), Y.set(n, 0), U.set(n, 0), J.set(n, 0), X.set(n, 0);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < P; e++) S(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]), S(i[B][t][e], i[B][t][e + 1], i[B][t + 1][e + 1], i[B][t + 1][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < P; e++) S(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]), S(i[t][A][e], i[t][A][e + 1], i[t + 1][A][e + 1], i[t + 1][A][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < A; e++) S(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]), S(i[t][e][P], i[t][e + 1][P], i[t + 1][e + 1][P], i[t + 1][e][P]);
    const Rt = /* @__PURE__ */ new Map();
    _.forEach((t, e) => {
      Math.abs(t[2] - -pt) < 1e-6 && Rt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const _t = [];
    _.forEach((t, e) => {
      Math.abs(t[2] - rt) < 1e-6 && Math.abs(t[0]) <= p / 2 + 1e-6 && Math.abs(t[1]) <= u / 2 + 1e-6 && _t.push(e);
    });
    const Mt = Math.max(1, _t.length), Ee = -L / Mt, Le = ut / Mt, Oe = ft / Mt, Vt = /* @__PURE__ */ new Map();
    for (const t of _t) Vt.set(t, [
      0,
      0,
      Ee,
      Le,
      Oe,
      0
    ]);
    const Zt = {
      supports: Rt,
      loads: Vt
    }, yt = {
      elasticities: q,
      shearModuli: D,
      areas: Y,
      momentsOfInertiaZ: J,
      momentsOfInertiaY: U,
      torsionalConstants: X,
      densities: H,
      poissonsRatios: G,
      thicknesses: O
    };
    let gt = {}, Pt = {};
    try {
      gt = aa(_, f, Zt, yt), Pt = ea(_, f, yt, gt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const At = [], qe = new de({
      color: 6710886,
      metalness: 0.5
    }), Ge = new de({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Wt = M * 0.8, Kt = M * 0.85, He = K + Wt / 2;
    for (const [t, e] of xt) {
      const a = new me(M / 2, M / 2, mt + K, 12), s = new pe(a, qe);
      s.position.set(t, e, (-mt + K) / 2), s.rotation.x = Math.PI / 2, At.push(s);
      const n = new me(Kt, Kt, Wt, 6), c = new pe(n, Ge);
      c.position.set(t, e, He), c.rotation.x = Math.PI / 2, At.push(c);
    }
    let Bt = 0;
    const Qt = Pt == null ? void 0 : Pt.vonMises;
    Qt && Qt.forEach((t) => t.forEach((e) => {
      e > Bt && (Bt = e);
    }));
    const De = 0.65, W = o * j, te = Q * tt, Ye = Math.min(2, Math.sqrt(te / W)), Je = Math.min(0.85 * et * W * Ye, 1.7 * et * W), ee = De * Je, Ue = L / Math.max(1, ee), ae = Math.max(0, (o - 0.95 * Math.max(p, u)) / 2), Xe = L / W, oe = ae * Math.sqrt(2 * Math.max(0, Xe) / (0.9 * ca)), $e = oe / Math.max(1e-6, Nt), Re = Math.max(0.05, o - 2 * dt), Ve = Math.sqrt(ut * ut + ft * ft), se = Math.max(0, Ve / Re - L / 2) / Math.max(1, it), ne = 0.75 * (0.75 * Math.PI * M * M / 4) * ra, Ze = se / Math.max(1, ne), We = p * u, wt = (p - 2 * y) * (u - 2 * y), le = We - wt, ce = 35e4 * le + 0.85 * et * wt, Ke = 0.75 * ce, Qe = L / Math.max(1, Ke);
    Ae.val = {
      vmMax: Bt,
      A1: W,
      A2: te,
      phiPp: ee,
      demandCapPp: Ue,
      m_cant: ae,
      t_req: oe,
      demandCapT: $e,
      T_anchor: se,
      phiNn: ne,
      demandCapAnchor: Ze,
      As: le,
      Ac: wt,
      Pno_composite: ce,
      demandCapPno: Qe
    }, be.val = _, ve.val = f, _e.val = Zt, Me.val = yt, ye.val = gt, ge.val = Pt, Pe.val = At;
  });
  const Be = oa({
    mesh: {
      nodes: be,
      elements: ve,
      nodeInputs: _e,
      elementInputs: Me,
      deformOutputs: ye,
      analyzeOutputs: ge
    },
    objects3D: Pe,
    settingsObj: {
      deformedShape: false,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 1,
      custom3D: true,
      loads: false,
      supports: true,
      showCotas: false,
      displayScale: 0.1
    }
  }), zt = document.createElement("div");
  zt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const I = new ta({
    title: "\u{1F9EA} Placa base + col CFT",
    container: zt,
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
  }, nt = (o) => o < 1 ? `${o.toFixed(2)} \u2713` : o < 1.2 ? `${o.toFixed(2)} \u26A0` : `${o.toFixed(2)} \u2717`, lt = I.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  lt.addBinding(m, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  lt.addBinding(m, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  lt.addBinding(m, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (o) => o.toFixed(0)
  });
  lt.addBinding(m, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: nt
  });
  const ct = I.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  ct.addBinding(m, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  ct.addBinding(m, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  ct.addBinding(m, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (o) => o.toFixed(0)
  });
  ct.addBinding(m, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: nt
  });
  const It = I.addFolder({
    title: "DG-1 espesor placa"
  });
  It.addBinding(m, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (o) => o.toFixed(4)
  });
  It.addBinding(m, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (o) => (o * 1e3).toFixed(1)
  });
  It.addBinding(m, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: nt
  });
  const jt = I.addFolder({
    title: "ACI \xA717 anclaje"
  });
  jt.addBinding(m, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (o) => o.toFixed(1)
  });
  jt.addBinding(m, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (o) => o.toFixed(1)
  });
  jt.addBinding(m, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: nt
  });
  const ia = I.addFolder({
    title: "FEM"
  });
  ia.addBinding(m, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (o) => o.toExponential(3)
  });
  const we = I.addFolder({
    title: "Unidades",
    expanded: false
  }), Ce = {
    stress: xe.val,
    disp: he.val
  };
  we.addBinding(Ce, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (o) => {
    xe.val = o.value;
  });
  we.addBinding(Ce, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (o) => {
    he.val = o.value;
  });
  document.body.append(zt);
  l.derive(() => {
    const o = Ae.val;
    Object.assign(m, o), I.refresh();
  });
  document.body.append(na(d), Be, la({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => sa(), 200);
  setTimeout(() => {
    var _a;
    const o = Be.__ctx;
    (o == null ? void 0 : o.camera) && (o == null ? void 0 : o.controls) && (o.camera.up.set(0, 0, 1), o.camera.position.set(2, -2, 1.2), o.controls.target.set(0, 0, 0.25), o.controls.update(), (_a = o.render) == null ? void 0 : _a.call(o));
  }, 800);
});
