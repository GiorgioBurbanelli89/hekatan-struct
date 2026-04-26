import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as c, P as ra } from "./theme-2eEBQPmF.js";
import { M as k, b as j, c as be, C as Tt, f as da, g as ma } from "./Text-BajK4Ymq.js";
import { a as pa } from "./analyze-BydHtRcI.js";
import { d as ua, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as ha, a as Me, e as _e } from "./getViewer-CZ5JMuv5.js";
import { e as fa } from "./makeDraggable-zx2br6Yh.js";
import { g as ba } from "./getParameters-CIJBOwMB.js";
import { g as xa } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const zt = 2e8, Nt = 0.3, xe = zt / (2 * (1 + Nt)), ve = 78, va = 25e4, Ma = 6e5, r = {
    B: {
      value: c.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "B placa (m)"
    },
    H: {
      value: c.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "H placa (m)"
    },
    t_plate: {
      value: c.state(0.025),
      min: 0.012,
      max: 0.06,
      step: 2e-3,
      label: "t placa (m)"
    },
    bc: {
      value: c.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "bc col (m)"
    },
    hc: {
      value: c.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "hc col (m)"
    },
    t_col: {
      value: c.state(0.012),
      min: 6e-3,
      max: 0.03,
      step: 2e-3,
      label: "t pared HSS (m)"
    },
    L_col: {
      value: c.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "L stub col (m)"
    },
    nBoltsX: {
      value: c.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en X"
    },
    nBoltsY: {
      value: c.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en Y"
    },
    sx: {
      value: c.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sx borde (m)"
    },
    sy: {
      value: c.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sy borde (m)"
    },
    d_bolt: {
      value: c.state(0.024),
      min: 0.012,
      max: 0.04,
      step: 2e-3,
      label: "\xD8 perno (m)"
    },
    L_bolt: {
      value: c.state(0.3),
      min: 0.15,
      max: 0.6,
      step: 0.02,
      label: "L embebido (m)"
    },
    L_proj: {
      value: c.state(0.05),
      min: 0.02,
      max: 0.1,
      step: 5e-3,
      label: "L proyec (m)"
    },
    B_ped: {
      value: c.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "B pedestal (m)"
    },
    H_ped: {
      value: c.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "H pedestal (m)"
    },
    h_ped: {
      value: c.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "h pedestal (m)"
    },
    fc: {
      value: c.state(28e3),
      min: 17e3,
      max: 5e4,
      step: 1e3,
      label: "f'c (kN/m\xB2)"
    },
    Pu: {
      value: c.state(300),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu axial (kN)"
    },
    Mx: {
      value: c.state(20),
      min: 0,
      max: 500,
      step: 5,
      label: "Mx (kN\xB7m)"
    },
    My: {
      value: c.state(30),
      min: 0,
      max: 500,
      step: 5,
      label: "My (kN\xB7m)"
    },
    nx: {
      value: c.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh nx"
    },
    ny: {
      value: c.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh ny"
    },
    nz_col: {
      value: c.state(6),
      min: 4,
      max: 12,
      step: 2,
      label: "nz col"
    }
  }, ye = c.state([]), Pe = c.state([]), ge = c.state({}), we = c.state({}), Be = c.state({}), Ae = c.state({}), Ie = c.state([]), Ce = c.state({
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
  c.derive(() => {
    const o = r.B.value.val, g = r.H.value.val, w = r.t_plate.value.val, d = r.bc.value.val, m = r.hc.value.val, h = r.t_col.value.val, B = r.L_col.value.val, Et = Math.round(r.nBoltsX.value.val), ut = Math.round(r.nBoltsY.value.val), ht = r.sx.value.val, Lt = r.sy.value.val, M = r.d_bolt.value.val, Y = r.L_bolt.value.val, R = r.L_proj.value.val, $ = r.B_ped.value.val, V = r.H_ped.value.val, ft = r.h_ped.value.val, X = r.fc.value.val, E = r.Pu.value.val, bt = r.Mx.value.val, xt = r.My.value.val, L = Math.round(r.nx.value.val), O = Math.round(r.ny.value.val), _ = Math.round(r.nz_col.value.val), f = [], y = [], Z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map();
    function P(t, e, a) {
      return f.push([
        t,
        e,
        a
      ]), f.length - 1;
    }
    function q(t, e, a, s, l) {
      y.push([
        t,
        e,
        a,
        s
      ]);
      const n = y.length - 1;
      Z.set(n, l), W.set(n, zt), K.set(n, Nt), Q.set(n, ve), tt.set(n, xe), et.set(n, 0), ot.set(n, 0), at.set(n, 0), st.set(n, 0);
    }
    function Ot(t, e, a, s, l) {
      y.push([
        t,
        e
      ]);
      const n = y.length - 1;
      W.set(n, zt), K.set(n, Nt), Q.set(n, ve), tt.set(n, xe), et.set(n, a), ot.set(n, s), at.set(n, s), st.set(n, l), Z.set(n, 0);
    }
    const qt = o / L, Gt = g / O, A = [];
    for (let t = 0; t <= O; t++) {
      const e = [];
      for (let a = 0; a <= L; a++) e.push(P(-o / 2 + a * qt, -g / 2 + t * Gt, 0));
      A.push(e);
    }
    for (let t = 0; t < O; t++) for (let e = 0; e < L; e++) q(A[t][e], A[t][e + 1], A[t + 1][e + 1], A[t + 1][e], w);
    function G(t, e) {
      let a = -1, s = 1 / 0;
      for (let l = 0; l <= O; l++) for (let n = 0; n <= L; n++) {
        const u = A[l][n], U = Math.hypot(f[u][0] - t, f[u][1] - e);
        U < s && (s = U, a = u);
      }
      return a;
    }
    const I = Math.max(2, Math.round(d / qt)), C = Math.max(2, Math.round(m / Gt)), Ht = d / I, Dt = m / C, nt = B / _, F = [];
    for (let t = 0; t <= _; t++) {
      const e = [];
      for (let a = 0; a <= I; a++) {
        const s = -d / 2 + a * Ht;
        t === 0 ? e.push(G(s, -m / 2)) : e.push(P(s, -m / 2, t * nt));
      }
      F.push(e);
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < I; e++) q(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], h);
    const T = [];
    for (let t = 0; t <= _; t++) {
      const e = [];
      for (let a = 0; a <= I; a++) {
        const s = -d / 2 + a * Ht;
        t === 0 ? e.push(G(s, m / 2)) : e.push(P(s, m / 2, t * nt));
      }
      T.push(e);
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < I; e++) q(T[t][e], T[t][e + 1], T[t + 1][e + 1], T[t + 1][e], h);
    const H = [];
    for (let t = 0; t <= _; t++) {
      const e = [];
      for (let a = 0; a <= C; a++) {
        const s = -m / 2 + a * Dt;
        t === 0 ? e.push(G(-d / 2, s)) : a === 0 ? e.push(F[t][0]) : a === C ? e.push(T[t][0]) : e.push(P(-d / 2, s, t * nt));
      }
      H.push(e);
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < C; e++) q(H[t][e], H[t][e + 1], H[t + 1][e + 1], H[t + 1][e], h);
    const D = [];
    for (let t = 0; t <= _; t++) {
      const e = [];
      for (let a = 0; a <= C; a++) {
        const s = -m / 2 + a * Dt;
        t === 0 ? e.push(G(d / 2, s)) : a === 0 ? e.push(F[t][I]) : a === C ? e.push(T[t][I]) : e.push(P(d / 2, s, t * nt));
      }
      D.push(e);
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < C; e++) q(D[t][e], D[t][e + 1], D[t + 1][e + 1], D[t + 1][e], h);
    const Jt = Math.PI * M * M / 4, vt = Math.PI * M ** 4 / 64, Ut = 2 * vt, lt = [], Ne = (o - 2 * ht) / Math.max(1, Et - 1), Se = (g - 2 * Lt) / Math.max(1, ut - 1);
    for (let t = 0; t < Et; t++) for (let e = 0; e < ut; e++) {
      const a = -o / 2 + ht + t * Ne, s = -g / 2 + Lt + e * Se;
      Math.abs(a) < d / 2 + 5e-3 && Math.abs(s) < m / 2 + 5e-3 || lt.push([
        a,
        s
      ]);
    }
    const ke = [
      ...lt
    ], Yt = 4700 * Math.sqrt(X / 1e3) * 1e3, Rt = 0.2, je = Yt / (2 * (1 + Rt)), x = 10, v = 10, b = 6, $t = $ / x, Vt = V / v, Ee = ft / b, Xt = [];
    for (let t = 0; t <= O; t++) for (let e = 0; e <= L; e++) {
      const a = A[t][e];
      Xt.push({
        id: a,
        x: f[a][0],
        y: f[a][1]
      });
    }
    const i = [];
    for (let t = 0; t <= b; t++) {
      const e = [];
      for (let a = 0; a <= v; a++) {
        const s = [];
        for (let l = 0; l <= x; l++) {
          const n = -$ / 2 + l * $t, u = -V / 2 + a * Vt, U = -ft + t * Ee, ca = t === b, ia = Math.abs(n) <= o / 2 + 1e-6 && Math.abs(u) <= g / 2 + 1e-6;
          let It;
          if (ca && ia) {
            let Ct = -1, he = 1 / 0;
            for (const Ft of Xt) {
              const fe = Math.hypot(Ft.x - n, Ft.y - u);
              fe < he && (he = fe, Ct = Ft.id);
            }
            It = Ct >= 0 ? Ct : P(n, u, U);
          } else It = P(n, u, U);
          s.push(It);
        }
        e.push(s);
      }
      i.push(e);
    }
    function S(t, e, a, s) {
      y.push([
        t,
        e,
        a,
        s
      ]);
      const l = y.length - 1;
      Z.set(l, 1e-3), W.set(l, Yt), K.set(l, Rt), Q.set(l, 24 / 9.80665), tt.set(l, je), et.set(l, 0), ot.set(l, 0), at.set(l, 0), st.set(l, 0);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < x; e++) S(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]);
    for (let t = 0; t < v; t++) for (let e = 0; e < x; e++) {
      const a = -$ / 2 + (e + 0.5) * $t, s = -V / 2 + (t + 0.5) * Vt;
      Math.abs(a) <= o / 2 && Math.abs(s) <= g / 2 || S(i[b][t][e], i[b][t][e + 1], i[b][t + 1][e + 1], i[b][t + 1][e]);
    }
    for (let t = 0; t < b; t++) for (let e = 0; e < x; e++) S(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]);
    for (let t = 0; t < b; t++) for (let e = 0; e < x; e++) S(i[t][v][e], i[t][v][e + 1], i[t + 1][v][e + 1], i[t + 1][v][e]);
    for (let t = 0; t < b; t++) for (let e = 0; e < v; e++) S(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]);
    for (let t = 0; t < b; t++) for (let e = 0; e < v; e++) S(i[t][e][x], i[t][e + 1][x], i[t + 1][e + 1][x], i[t + 1][e][x]);
    for (const [t, e] of ke) {
      const a = P(t, e, R), s = G(t, e), l = P(t, e, -Y);
      Ot(a, s, Jt, vt, Ut), Ot(s, l, Jt, vt, Ut);
    }
    const Zt = /* @__PURE__ */ new Map();
    f.forEach((t, e) => {
      const a = Math.abs(t[2] - -Y) < 1e-6 && lt.some(([l, n]) => Math.abs(t[0] - l) < 1e-6 && Math.abs(t[1] - n) < 1e-6), s = Math.abs(t[2] - -ft) < 1e-6;
      (a || s) && Zt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const Mt = [];
    f.forEach((t, e) => {
      Math.abs(t[2] - B) < 1e-6 && Math.abs(t[0]) <= d / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && Mt.push(e);
    });
    const _t = Math.max(1, Mt.length), Le = -E / _t, Oe = bt / _t, qe = xt / _t, Wt = /* @__PURE__ */ new Map();
    for (const t of Mt) Wt.set(t, [
      0,
      0,
      Le,
      Oe,
      qe,
      0
    ]);
    const Kt = {
      supports: Zt,
      loads: Wt
    }, yt = {
      elasticities: W,
      shearModuli: tt,
      areas: et,
      momentsOfInertiaZ: at,
      momentsOfInertiaY: ot,
      torsionalConstants: st,
      densities: Q,
      poissonsRatios: K,
      thicknesses: Z
    };
    let Pt = {}, gt = {};
    try {
      Pt = ua(f, y, Kt, yt), gt = pa(f, y, yt, Pt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const z = [], Ge = new k({
      color: 10526880,
      metalness: 0.7,
      roughness: 0.4
    }), Qt = new j(new be(o, g, w), Ge);
    Qt.position.set(0, 0, w / 2), z.push(Qt);
    const He = new k({
      color: 7368816,
      metalness: 0.6
    }), De = Math.min(0.2, B * 0.4), Je = Math.min(0.1, (o - d) / 2 * 0.7), wt = h;
    function ct(t, e, a, s) {
      const l = new da();
      l.moveTo(0, 0), l.lineTo(Je, 0), l.lineTo(0, De), l.closePath();
      const n = new ma(l, {
        depth: wt,
        bevelEnabled: false
      }), u = new j(n, He);
      u.position.set(t - a * wt / 2, e - s * wt / 2, w), Math.abs(a) > 0.5 ? u.rotation.set(Math.PI / 2, a > 0 ? 0 : Math.PI, 0) : u.rotation.set(Math.PI / 2, -Math.PI / 2, s > 0 ? -Math.PI / 2 : Math.PI / 2), z.push(u);
    }
    ct(0, m / 2, 0, 1), ct(0, -m / 2, 0, -1), ct(d / 2, 0, 1, 0), ct(-d / 2, 0, -1, 0);
    const Ue = new k({
      color: 8930338,
      roughness: 0.6
    }), te = 0.012, ee = 0.025, it = d / 2 - h - ee, rt = m / 2 - h - ee;
    for (const [t, e] of [
      [
        it,
        rt
      ],
      [
        -it,
        rt
      ],
      [
        it,
        -rt
      ],
      [
        -it,
        -rt
      ]
    ]) {
      const a = new j(new Tt(te / 2, te / 2, B, 8), Ue);
      a.position.set(t, e, B / 2 + w), a.rotation.x = Math.PI / 2, z.push(a);
    }
    const Ye = new k({
      color: 12888184,
      transparent: true,
      opacity: 0.45
    }), ae = new j(new be(d - 2 * h, m - 2 * h, B - 5e-3), Ye);
    ae.position.set(0, 0, B / 2 + w), z.push(ae);
    const Re = new k({
      color: 6710886,
      metalness: 0.5
    }), $e = new k({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), oe = M * 0.8, se = M * 0.85, Ve = R + oe / 2;
    for (const [t, e] of lt) {
      const a = new Tt(M / 2, M / 2, Y + R, 12), s = new j(a, Re);
      s.position.set(t, e, (-Y + R) / 2), s.rotation.x = Math.PI / 2, z.push(s);
      const l = new Tt(se, se, oe, 6), n = new j(l, $e);
      n.position.set(t, e, Ve), n.rotation.x = Math.PI / 2, z.push(n);
    }
    let Bt = 0;
    const ne = gt == null ? void 0 : gt.vonMises;
    ne && ne.forEach((t) => t.forEach((e) => {
      e > Bt && (Bt = e);
    }));
    const Xe = 0.65, J = o * g, le = $ * V, Ze = Math.min(2, Math.sqrt(le / J)), We = Math.min(0.85 * X * J * Ze, 1.7 * X * J), ce = Xe * We, Ke = E / Math.max(1, ce), ie = Math.max(0, (o - 0.95 * Math.max(d, m)) / 2), Qe = E / J, re = ie * Math.sqrt(2 * Math.max(0, Qe) / (0.9 * va)), ta = re / Math.max(1e-6, w), ea = Math.max(0.05, o - 2 * ht), aa = Math.sqrt(bt * bt + xt * xt), de = Math.max(0, aa / ea - E / 2) / Math.max(1, ut), me = 0.75 * (0.75 * Math.PI * M * M / 4) * Ma, oa = de / Math.max(1, me), sa = d * m, At = (d - 2 * h) * (m - 2 * h), pe = sa - At, ue = 35e4 * pe + 0.85 * X * At, na = 0.75 * ue, la = E / Math.max(1, na);
    Ce.val = {
      vmMax: Bt,
      A1: J,
      A2: le,
      phiPp: ce,
      demandCapPp: Ke,
      m_cant: ie,
      t_req: re,
      demandCapT: ta,
      T_anchor: de,
      phiNn: me,
      demandCapAnchor: oa,
      As: pe,
      Ac: At,
      Pno_composite: ue,
      demandCapPno: la
    }, ye.val = f, Pe.val = y, ge.val = Kt, we.val = yt, Be.val = Pt, Ae.val = gt, Ie.val = z;
  });
  const Fe = ha({
    mesh: {
      nodes: ye,
      elements: Pe,
      nodeInputs: ge,
      elementInputs: we,
      deformOutputs: Be,
      analyzeOutputs: Ae
    },
    objects3D: Ie,
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
  }), St = document.createElement("div");
  St.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const N = new ra({
    title: "\u{1F9EA} Placa base + col CFT",
    container: St,
    expanded: true
  }), p = {
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
  }, dt = (o) => o < 1 ? `${o.toFixed(2)} \u2713` : o < 1.2 ? `${o.toFixed(2)} \u26A0` : `${o.toFixed(2)} \u2717`, mt = N.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  mt.addBinding(p, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  mt.addBinding(p, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  mt.addBinding(p, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (o) => o.toFixed(0)
  });
  mt.addBinding(p, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: dt
  });
  const pt = N.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  pt.addBinding(p, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  pt.addBinding(p, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  pt.addBinding(p, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (o) => o.toFixed(0)
  });
  pt.addBinding(p, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: dt
  });
  const kt = N.addFolder({
    title: "DG-1 espesor placa"
  });
  kt.addBinding(p, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (o) => o.toFixed(4)
  });
  kt.addBinding(p, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (o) => (o * 1e3).toFixed(1)
  });
  kt.addBinding(p, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: dt
  });
  const jt = N.addFolder({
    title: "ACI \xA717 anclaje"
  });
  jt.addBinding(p, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (o) => o.toFixed(1)
  });
  jt.addBinding(p, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (o) => o.toFixed(1)
  });
  jt.addBinding(p, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: dt
  });
  const _a = N.addFolder({
    title: "FEM"
  });
  _a.addBinding(p, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (o) => o.toExponential(3)
  });
  const Te = N.addFolder({
    title: "Unidades",
    expanded: false
  }), ze = {
    stress: _e.val,
    disp: Me.val
  };
  Te.addBinding(ze, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (o) => {
    _e.val = o.value;
  });
  Te.addBinding(ze, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (o) => {
    Me.val = o.value;
  });
  document.body.append(St);
  c.derive(() => {
    const o = Ce.val;
    Object.assign(p, o), N.refresh();
  });
  document.body.append(ba(r), Fe, xa({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => fa(), 200);
  setTimeout(() => {
    var _a2;
    const o = Fe.__ctx;
    (o == null ? void 0 : o.camera) && (o == null ? void 0 : o.controls) && (o.camera.up.set(0, 0, 1), o.camera.position.set(2, -2, 1.2), o.controls.target.set(0, 0, 0.25), o.controls.update(), (_a2 = o.render) == null ? void 0 : _a2.call(o));
  }, 800);
});
