import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as s, P as ra } from "./theme-2eEBQPmF.js";
import { L as ia, M as X, b as R, c as fe, C as kt, V as da, B as ma, a as pa } from "./Text-DyNVkyur.js";
import { a as ua } from "./analyze-BydHtRcI.js";
import { d as ha, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as fa, a as ve, e as Me } from "./getViewer-DnVmZy1T.js";
import { e as xa } from "./makeDraggable-zx2br6Yh.js";
import { g as ba } from "./getParameters-CIJBOwMB.js";
import { g as va } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const It = 2e8, St = 0.3, xe = It / (2 * (1 + St)), be = 78, Ma = 25e4, _a = 6e5, i = {
    B: {
      value: s.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "B placa (m)"
    },
    H: {
      value: s.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "H placa (m)"
    },
    t_plate: {
      value: s.state(0.025),
      min: 0.012,
      max: 0.06,
      step: 2e-3,
      label: "t placa (m)"
    },
    bc: {
      value: s.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "bc col (m)"
    },
    hc: {
      value: s.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "hc col (m)"
    },
    t_col: {
      value: s.state(0.012),
      min: 6e-3,
      max: 0.03,
      step: 2e-3,
      label: "t pared HSS (m)"
    },
    L_col: {
      value: s.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "L stub col (m)"
    },
    nBoltsX: {
      value: s.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en X"
    },
    nBoltsY: {
      value: s.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en Y"
    },
    sx: {
      value: s.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sx borde (m)"
    },
    sy: {
      value: s.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sy borde (m)"
    },
    d_bolt: {
      value: s.state(0.024),
      min: 0.012,
      max: 0.04,
      step: 2e-3,
      label: "\xD8 perno (m)"
    },
    L_bolt: {
      value: s.state(0.3),
      min: 0.15,
      max: 0.6,
      step: 0.02,
      label: "L embebido (m)"
    },
    L_proj: {
      value: s.state(0.05),
      min: 0.02,
      max: 0.1,
      step: 5e-3,
      label: "L proyec (m)"
    },
    B_ped: {
      value: s.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "B pedestal (m)"
    },
    H_ped: {
      value: s.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "H pedestal (m)"
    },
    h_ped: {
      value: s.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "h pedestal (m)"
    },
    fc: {
      value: s.state(28e3),
      min: 17e3,
      max: 5e4,
      step: 1e3,
      label: "f'c (kN/m\xB2)"
    },
    Pu: {
      value: s.state(300),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu axial (kN)"
    },
    Mx: {
      value: s.state(20),
      min: 0,
      max: 500,
      step: 5,
      label: "Mx (kN\xB7m)"
    },
    My: {
      value: s.state(30),
      min: 0,
      max: 500,
      step: 5,
      label: "My (kN\xB7m)"
    },
    nx: {
      value: s.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh nx"
    },
    ny: {
      value: s.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh ny"
    },
    nz_col: {
      value: s.state(6),
      min: 4,
      max: 12,
      step: 2,
      label: "nz col"
    }
  }, _e = s.state([]), ye = s.state([]), ge = s.state({}), Pe = s.state({}), we = s.state({}), Be = s.state({}), Ae = s.state([]), Ce = s.state({
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
  s.derive(() => {
    const o = i.B.value.val, x = i.H.value.val, S = i.t_plate.value.val, d = i.bc.value.val, m = i.hc.value.val, h = i.t_col.value.val, N = i.L_col.value.val, Et = Math.round(i.nBoltsX.value.val), ft = Math.round(i.nBoltsY.value.val), xt = i.sx.value.val, Ot = i.sy.value.val, y = i.d_bolt.value.val, $ = i.L_bolt.value.val, Z = i.L_proj.value.val, K = i.B_ped.value.val, Q = i.H_ped.value.val, bt = i.h_ped.value.val, W = i.fc.value.val, H = i.Pu.value.val, vt = i.Mx.value.val, Mt = i.My.value.val, G = Math.round(i.nx.value.val), D = Math.round(i.ny.value.val), g = Math.round(i.nz_col.value.val), u = 0.04, f = [], P = [], tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
    function A(t, e, a) {
      return f.push([
        t,
        e,
        a
      ]), f.length - 1;
    }
    function T(t, e, a, n, c) {
      P.push([
        t,
        e,
        a,
        n
      ]);
      const l = P.length - 1;
      tt.set(l, c), et.set(l, It), at.set(l, St), ot.set(l, be), nt.set(l, xe), st.set(l, 0), ct.set(l, 0), lt.set(l, 0), rt.set(l, 0);
    }
    function qt(t, e, a, n, c) {
      P.push([
        t,
        e
      ]);
      const l = P.length - 1;
      et.set(l, It), at.set(l, St), ot.set(l, be), nt.set(l, xe), st.set(l, a), ct.set(l, n), lt.set(l, n), rt.set(l, c), tt.set(l, 0);
    }
    const Ht = o / G, Gt = x / D, z = [];
    for (let t = 0; t <= D; t++) {
      const e = [];
      for (let a = 0; a <= G; a++) e.push(A(-o / 2 + a * Ht, -x / 2 + t * Gt, u));
      z.push(e);
    }
    for (let t = 0; t < D; t++) for (let e = 0; e < G; e++) T(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], S);
    function j(t, e) {
      let a = -1, n = 1 / 0;
      for (let c = 0; c <= D; c++) for (let l = 0; l <= G; l++) {
        const _ = z[c][l], q = Math.hypot(f[_][0] - t, f[_][1] - e);
        q < n && (n = q, a = _);
      }
      return a;
    }
    const w = Math.max(2, Math.round(d / Ht)), B = Math.max(2, Math.round(m / Gt)), Dt = d / w, Yt = m / B, Y = N / g, C = [];
    for (let t = 0; t <= g; t++) {
      const e = [];
      for (let a = 0; a <= w; a++) {
        const n = -d / 2 + a * Dt;
        t === 0 ? e.push(j(n, -m / 2)) : e.push(A(n, -m / 2, u + t * Y));
      }
      C.push(e);
    }
    for (let t = 0; t < g; t++) for (let e = 0; e < w; e++) T(C[t][e], C[t][e + 1], C[t + 1][e + 1], C[t + 1][e], h);
    const F = [];
    for (let t = 0; t <= g; t++) {
      const e = [];
      for (let a = 0; a <= w; a++) {
        const n = -d / 2 + a * Dt;
        t === 0 ? e.push(j(n, m / 2)) : e.push(A(n, m / 2, u + t * Y));
      }
      F.push(e);
    }
    for (let t = 0; t < g; t++) for (let e = 0; e < w; e++) T(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], h);
    const L = [];
    for (let t = 0; t <= g; t++) {
      const e = [];
      for (let a = 0; a <= B; a++) {
        const n = -m / 2 + a * Yt;
        t === 0 ? e.push(j(-d / 2, n)) : a === 0 ? e.push(C[t][0]) : a === B ? e.push(F[t][0]) : e.push(A(-d / 2, n, u + t * Y));
      }
      L.push(e);
    }
    for (let t = 0; t < g; t++) for (let e = 0; e < B; e++) T(L[t][e], L[t][e + 1], L[t + 1][e + 1], L[t + 1][e], h);
    const E = [];
    for (let t = 0; t <= g; t++) {
      const e = [];
      for (let a = 0; a <= B; a++) {
        const n = -m / 2 + a * Yt;
        t === 0 ? e.push(j(d / 2, n)) : a === 0 ? e.push(C[t][w]) : a === B ? e.push(F[t][w]) : e.push(A(d / 2, n, u + t * Y));
      }
      E.push(e);
    }
    for (let t = 0; t < g; t++) for (let e = 0; e < B; e++) T(E[t][e], E[t][e + 1], E[t + 1][e + 1], E[t + 1][e], h);
    const ke = Math.min(0.2, N * 0.4), Jt = Math.min(0.1, (o - d) / 2 * 0.7), Ie = Math.max(1, Math.round(ke / Y));
    function it(t, e, a, n) {
      const [c, l] = t, [_, q] = e, Nt = a[0][n], zt = j(c + _ * Jt, l + q * Jt), he = a[Math.min(Ie, a.length - 1)][n];
      T(Nt, zt, he, he, h);
    }
    it([
      0,
      m / 2
    ], [
      0,
      1
    ], F, Math.round(w / 2)), it([
      0,
      -m / 2
    ], [
      0,
      -1
    ], C, Math.round(w / 2)), it([
      d / 2,
      0
    ], [
      1,
      0
    ], E, Math.round(B / 2)), it([
      -d / 2,
      0
    ], [
      -1,
      0
    ], L, Math.round(B / 2));
    const Ut = Math.PI * y * y / 4, _t = Math.PI * y ** 4 / 64, Vt = 2 * _t, J = [], Se = (o - 2 * xt) / Math.max(1, Et - 1), Te = (x - 2 * Ot) / Math.max(1, ft - 1);
    for (let t = 0; t < Et; t++) for (let e = 0; e < ft; e++) {
      const a = -o / 2 + xt + t * Se, n = -x / 2 + Ot + e * Te;
      Math.abs(a) < d / 2 + 5e-3 && Math.abs(n) < m / 2 + 5e-3 || J.push([
        a,
        n
      ]);
    }
    const je = [
      ...J
    ], Xt = 4700 * Math.sqrt(W / 1e3) * 1e3, Rt = 0.2, Le = Xt / (2 * (1 + Rt)), b = 10, v = 10, M = 6, yt = K / b, $t = Q / v, Ee = bt / M, Oe = [];
    for (let t = 0; t <= D; t++) for (let e = 0; e <= G; e++) {
      const a = z[t][e];
      Oe.push({
        id: a,
        x: f[a][0],
        y: f[a][1]
      });
    }
    const r = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let a = 0; a <= v; a++) {
        const n = [];
        for (let c = 0; c <= b; c++) n.push(A(-K / 2 + c * yt, -Q / 2 + a * $t, -bt + t * Ee));
        e.push(n);
      }
      r.push(e);
    }
    function O(t, e, a, n) {
      P.push([
        t,
        e,
        a,
        n
      ]);
      const c = P.length - 1;
      tt.set(c, 1e-3), et.set(c, Xt), at.set(c, Rt), ot.set(c, 24 / 9.80665), nt.set(c, Le), st.set(c, 0), ct.set(c, 0), lt.set(c, 0), rt.set(c, 0);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < b; e++) O(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
    function qe(t, e) {
      for (const [a, n] of J) if (Math.hypot(t - a, e - n) < yt * 0.6) return true;
      return false;
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < b; e++) {
      const a = -K / 2 + (e + 0.5) * yt, n = -Q / 2 + (t + 0.5) * $t;
      qe(a, n) || O(r[M][t][e], r[M][t][e + 1], r[M][t + 1][e + 1], r[M][t + 1][e]);
    }
    for (let t = 0; t < M; t++) for (let e = 0; e < b; e++) O(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]);
    for (let t = 0; t < M; t++) for (let e = 0; e < b; e++) O(r[t][v][e], r[t][v][e + 1], r[t + 1][v][e + 1], r[t + 1][v][e]);
    for (let t = 0; t < M; t++) for (let e = 0; e < v; e++) O(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]);
    for (let t = 0; t < M; t++) for (let e = 0; e < v; e++) O(r[t][e][b], r[t][e + 1][b], r[t + 1][e + 1][b], r[t + 1][e][b]);
    for (const [t, e] of je) {
      const a = A(t, e, u + Z), n = j(t, e), c = A(t, e, u - $);
      qt(a, n, Ut, _t, Vt), qt(n, c, Ut, _t, Vt);
    }
    const Zt = /* @__PURE__ */ new Map();
    f.forEach((t, e) => {
      const a = Math.abs(t[2] - (u - $)) < 1e-6 && J.some(([c, l]) => Math.abs(t[0] - c) < 1e-6 && Math.abs(t[1] - l) < 1e-6), n = Math.abs(t[2] - -bt) < 1e-6;
      (a || n) && Zt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const gt = [];
    f.forEach((t, e) => {
      Math.abs(t[2] - (u + N)) < 1e-6 && Math.abs(t[0]) <= d / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && gt.push(e);
    });
    const Pt = Math.max(1, gt.length), He = -H / Pt, Ge = vt / Pt, De = Mt / Pt, Kt = /* @__PURE__ */ new Map();
    for (const t of gt) Kt.set(t, [
      0,
      0,
      He,
      Ge,
      De,
      0
    ]);
    const Qt = {
      supports: Zt,
      loads: Kt
    }, wt = {
      elasticities: et,
      shearModuli: nt,
      areas: st,
      momentsOfInertiaZ: lt,
      momentsOfInertiaY: ct,
      torsionalConstants: rt,
      densities: ot,
      poissonsRatios: at,
      thicknesses: tt
    };
    let Bt = {}, At = {};
    try {
      Bt = ha(f, P, Qt, wt), At = ua(f, P, wt, Bt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const k = [], Ye = new ia({
      color: 16755200
    });
    function U(t, e) {
      const n = [];
      for (let _ = 0; _ <= 5 * 2; _++) {
        const q = _ / 10, Nt = u * (1 - q), zt = _ % 2 === 0 ? 0 : 8e-3;
        n.push(new da(t + zt, e, Nt));
      }
      const c = new ma().setFromPoints(n), l = new pa(c, Ye);
      k.push(l);
    }
    U(o / 2 - 0.04, x / 2 - 0.04), U(-o / 2 + 0.04, x / 2 - 0.04), U(o / 2 - 0.04, -x / 2 + 0.04), U(-o / 2 + 0.04, -x / 2 + 0.04), U(0, 0);
    const Je = new X({
      color: 12105912,
      metalness: 0.7,
      roughness: 0.4,
      transparent: true,
      opacity: 0.45
    }), Wt = new R(new fe(o, x, S), Je);
    Wt.position.set(0, 0, u + S / 2), k.push(Wt);
    const Ue = new X({
      color: 8930338,
      roughness: 0.6
    }), te = 0.012, ee = 0.025, dt = d / 2 - h - ee, mt = m / 2 - h - ee;
    for (const [t, e] of [
      [
        dt,
        mt
      ],
      [
        -dt,
        mt
      ],
      [
        dt,
        -mt
      ],
      [
        -dt,
        -mt
      ]
    ]) {
      const a = new R(new kt(te / 2, te / 2, N, 8), Ue);
      a.position.set(t, e, u + N / 2 + S), a.rotation.x = Math.PI / 2, k.push(a);
    }
    const Ve = new X({
      color: 12888184,
      transparent: true,
      opacity: 0.45
    }), ae = new R(new fe(d - 2 * h, m - 2 * h, N - 5e-3), Ve);
    ae.position.set(0, 0, u + N / 2 + S), k.push(ae);
    const Xe = new X({
      color: 6710886,
      metalness: 0.5
    }), Re = new X({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), oe = y * 0.8, ne = y * 0.85, $e = u + Z + oe / 2;
    for (const [t, e] of J) {
      const a = new kt(y / 2, y / 2, $ + Z, 12), n = new R(a, Xe);
      n.position.set(t, e, u + (-$ + Z) / 2), n.rotation.x = Math.PI / 2, k.push(n);
      const c = new kt(ne, ne, oe, 6), l = new R(c, Re);
      l.position.set(t, e, $e), l.rotation.x = Math.PI / 2, k.push(l);
    }
    let Ct = 0;
    const se = At == null ? void 0 : At.vonMises;
    se && se.forEach((t) => t.forEach((e) => {
      e > Ct && (Ct = e);
    }));
    const Ze = 0.65, V = o * x, le = K * Q, Ke = Math.min(2, Math.sqrt(le / V)), Qe = Math.min(0.85 * W * V * Ke, 1.7 * W * V), ce = Ze * Qe, We = H / Math.max(1, ce), re = Math.max(0, (o - 0.95 * Math.max(d, m)) / 2), ta = H / V, ie = re * Math.sqrt(2 * Math.max(0, ta) / (0.9 * Ma)), ea = ie / Math.max(1e-6, S), aa = Math.max(0.05, o - 2 * xt), oa = Math.sqrt(vt * vt + Mt * Mt), de = Math.max(0, oa / aa - H / 2) / Math.max(1, ft), me = 0.75 * (0.75 * Math.PI * y * y / 4) * _a, na = de / Math.max(1, me), sa = d * m, Ft = (d - 2 * h) * (m - 2 * h), pe = sa - Ft, ue = 35e4 * pe + 0.85 * W * Ft, la = 0.75 * ue, ca = H / Math.max(1, la);
    Ce.val = {
      vmMax: Ct,
      A1: V,
      A2: le,
      phiPp: ce,
      demandCapPp: We,
      m_cant: re,
      t_req: ie,
      demandCapT: ea,
      T_anchor: de,
      phiNn: me,
      demandCapAnchor: na,
      As: pe,
      Ac: Ft,
      Pno_composite: ue,
      demandCapPno: ca
    }, _e.val = f, ye.val = P, ge.val = Qt, Pe.val = wt, we.val = Bt, Be.val = At, Ae.val = k;
  });
  const Fe = fa({
    mesh: {
      nodes: _e,
      elements: ye,
      nodeInputs: ge,
      elementInputs: Pe,
      deformOutputs: we,
      analyzeOutputs: Be
    },
    objects3D: Ae,
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
  }), Tt = document.createElement("div");
  Tt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const I = new ra({
    title: "\u{1F9EA} Placa base + col CFT",
    container: Tt,
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
  }, pt = (o) => o < 1 ? `${o.toFixed(2)} \u2713` : o < 1.2 ? `${o.toFixed(2)} \u26A0` : `${o.toFixed(2)} \u2717`, ut = I.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  ut.addBinding(p, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  ut.addBinding(p, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  ut.addBinding(p, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (o) => o.toFixed(0)
  });
  ut.addBinding(p, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: pt
  });
  const ht = I.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  ht.addBinding(p, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  ht.addBinding(p, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  ht.addBinding(p, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (o) => o.toFixed(0)
  });
  ht.addBinding(p, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: pt
  });
  const jt = I.addFolder({
    title: "DG-1 espesor placa"
  });
  jt.addBinding(p, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (o) => o.toFixed(4)
  });
  jt.addBinding(p, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (o) => (o * 1e3).toFixed(1)
  });
  jt.addBinding(p, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: pt
  });
  const Lt = I.addFolder({
    title: "ACI \xA717 anclaje"
  });
  Lt.addBinding(p, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (o) => o.toFixed(1)
  });
  Lt.addBinding(p, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (o) => o.toFixed(1)
  });
  Lt.addBinding(p, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: pt
  });
  const ya = I.addFolder({
    title: "FEM"
  });
  ya.addBinding(p, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (o) => o.toExponential(3)
  });
  const Ne = I.addFolder({
    title: "Unidades",
    expanded: false
  }), ze = {
    stress: Me.val,
    disp: ve.val
  };
  Ne.addBinding(ze, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (o) => {
    Me.val = o.value;
  });
  Ne.addBinding(ze, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (o) => {
    ve.val = o.value;
  });
  document.body.append(Tt);
  s.derive(() => {
    const o = Ce.val;
    Object.assign(p, o), I.refresh();
  });
  document.body.append(ba(i), Fe, va({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => xa(), 200);
  setTimeout(() => {
    var _a2;
    const o = Fe.__ctx;
    (o == null ? void 0 : o.camera) && (o == null ? void 0 : o.controls) && (o.camera.up.set(0, 0, 1), o.camera.position.set(2, -2, 1.2), o.controls.target.set(0, 0, 0.25), o.controls.update(), (_a2 = o.render) == null ? void 0 : _a2.call(o));
  }, 800);
});
