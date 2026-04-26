import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as Ze } from "./theme-2eEBQPmF.js";
import { M as re, C as ie, b as de } from "./Text-DyNVkyur.js";
import { a as We } from "./analyze-BydHtRcI.js";
import { d as Ke, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Qe, a as ue, e as fe } from "./getViewer-DnVmZy1T.js";
import { e as ta } from "./makeDraggable-zx2br6Yh.js";
import { g as ea } from "./getParameters-CIJBOwMB.js";
import { g as aa } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Bt = 2e8, wt = 0.3, me = Bt / (2 * (1 + wt)), pe = 78, oa = 25e4, sa = 6e5, d = {
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
  }, he = l.state([]), be = l.state([]), ve = l.state({}), xe = l.state({}), _e = l.state({}), Me = l.state({}), ye = l.state([]), ge = l.state({
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
    const o = d.B.value.val, j = d.H.value.val, zt = d.t_plate.value.val, p = d.bc.value.val, u = d.hc.value.val, y = d.t_col.value.val, it = d.L_col.value.val, It = Math.round(d.nBoltsX.value.val), dt = Math.round(d.nBoltsY.value.val), mt = d.sx.value.val, jt = d.sy.value.val, M = d.d_bolt.value.val, pt = d.L_bolt.value.val, K = d.L_proj.value.val, Q = d.B_ped.value.val, tt = d.H_ped.value.val, ut = d.h_ped.value.val, et = d.fc.value.val, L = d.Pu.value.val, Tt = d.Mu.value.val, at = Math.round(d.nx.value.val), ot = Math.round(d.ny.value.val), x = Math.round(d.nz_col.value.val), _ = [], f = [], O = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
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
      O.set(c, n), q.set(c, Bt), G.set(c, wt), H.set(c, pe), D.set(c, me), Y.set(c, 0), U.set(c, 0), J.set(c, 0), X.set(c, 0);
    }
    function St(t, e, a, s, n) {
      f.push([
        t,
        e
      ]);
      const c = f.length - 1;
      q.set(c, Bt), G.set(c, wt), H.set(c, pe), D.set(c, me), Y.set(c, a), U.set(c, s), J.set(c, s), X.set(c, n), O.set(c, 0);
    }
    const Nt = o / at, Et = j / ot, T = [];
    for (let t = 0; t <= ot; t++) {
      const e = [];
      for (let a = 0; a <= at; a++) e.push(g(-o / 2 + a * Nt, -j / 2 + t * Et, 0));
      T.push(e);
    }
    for (let t = 0; t < ot; t++) for (let e = 0; e < at; e++) $(T[t][e], T[t][e + 1], T[t + 1][e + 1], T[t + 1][e], zt);
    function R(t, e) {
      let a = -1, s = 1 / 0;
      for (let n = 0; n <= ot; n++) for (let c = 0; c <= at; c++) {
        const z = T[n][c], E = Math.hypot(_[z][0] - t, _[z][1] - e);
        E < s && (s = E, a = z);
      }
      return a;
    }
    const w = Math.max(2, Math.round(p / Nt)), C = Math.max(2, Math.round(u / Et)), Lt = p / w, Ot = u / C, st = it / x, F = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= w; a++) {
        const s = -p / 2 + a * Lt;
        t === 0 ? e.push(R(s, -u / 2)) : e.push(g(s, -u / 2, t * st));
      }
      F.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < w; e++) $(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], y);
    const k = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= w; a++) {
        const s = -p / 2 + a * Lt;
        t === 0 ? e.push(R(s, u / 2)) : e.push(g(s, u / 2, t * st));
      }
      k.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < w; e++) $(k[t][e], k[t][e + 1], k[t + 1][e + 1], k[t + 1][e], y);
    const V = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= C; a++) {
        const s = -u / 2 + a * Ot;
        t === 0 ? e.push(R(-p / 2, s)) : a === 0 ? e.push(F[t][0]) : a === C ? e.push(k[t][0]) : e.push(g(-p / 2, s, t * st));
      }
      V.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < C; e++) $(V[t][e], V[t][e + 1], V[t + 1][e + 1], V[t + 1][e], y);
    const Z = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= C; a++) {
        const s = -u / 2 + a * Ot;
        t === 0 ? e.push(R(p / 2, s)) : a === 0 ? e.push(F[t][w]) : a === C ? e.push(k[t][w]) : e.push(g(p / 2, s, t * st));
      }
      Z.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < C; e++) $(Z[t][e], Z[t][e + 1], Z[t + 1][e + 1], Z[t + 1][e], y);
    const qt = Math.PI * M * M / 4, ft = Math.PI * M ** 4 / 64, Gt = 2 * ft, ht = [], we = (o - 2 * mt) / Math.max(1, It - 1), Ce = (j - 2 * jt) / Math.max(1, dt - 1);
    for (let t = 0; t < It; t++) for (let e = 0; e < dt; e++) {
      const a = -o / 2 + mt + t * we, s = -j / 2 + jt + e * Ce;
      Math.abs(a) < p / 2 + 5e-3 && Math.abs(s) < u / 2 + 5e-3 || ht.push([
        a,
        s
      ]);
    }
    const Fe = [
      ...ht
    ], bt = 4700 * Math.sqrt(et / 1e3) * 1e3, vt = 0.2, Ht = bt / (2 * (1 + vt)), h = 6, b = 6, v = 4, Dt = Q / h, Yt = tt / b, ke = ut / v, r = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= b; a++) {
        const s = [];
        for (let n = 0; n <= h; n++) s.push(g(-Q / 2 + n * Dt, -tt / 2 + a * Yt, -ut + t * ke));
        e.push(s);
      }
      r.push(e);
    }
    function ze(t, e, a) {
      let s = -1, n = 1 / 0;
      for (let c = 0; c <= v; c++) for (let z = 0; z <= b; z++) for (let E = 0; E <= h; E++) {
        const le = r[c][z][E], At = _[le], ce = Math.hypot(At[0] - t, At[1] - e) + Math.abs(At[2] - a) * 0.5;
        ce < n && (n = ce, s = le);
      }
      return s;
    }
    function S(t, e, a, s) {
      f.push([
        t,
        e,
        a,
        s
      ]);
      const n = f.length - 1;
      O.set(n, 1e-3), q.set(n, bt), G.set(n, vt), H.set(n, 24 / 9.80665), D.set(n, Ht), Y.set(n, 0), U.set(n, 0), J.set(n, 0), X.set(n, 0);
    }
    for (let t = 0; t < b; t++) for (let e = 0; e < h; e++) S(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
    for (let t = 0; t < b; t++) for (let e = 0; e < h; e++) {
      const a = -Q / 2 + (e + 0.5) * Dt, s = -tt / 2 + (t + 0.5) * Yt;
      Math.abs(a) <= o / 2 && Math.abs(s) <= j / 2 || S(r[v][t][e], r[v][t][e + 1], r[v][t + 1][e + 1], r[v][t + 1][e]);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < h; e++) S(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]);
    for (let t = 0; t < v; t++) for (let e = 0; e < h; e++) S(r[t][b][e], r[t][b][e + 1], r[t + 1][b][e + 1], r[t + 1][b][e]);
    for (let t = 0; t < v; t++) for (let e = 0; e < b; e++) S(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]);
    for (let t = 0; t < v; t++) for (let e = 0; e < b; e++) S(r[t][e][h], r[t][e + 1][h], r[t + 1][e + 1][h], r[t + 1][e][h]);
    for (const [t, e] of Fe) {
      const a = g(t, e, K), s = R(t, e), n = ze(t, e, -pt);
      St(a, s, qt, ft, Gt), St(s, n, qt, ft, Gt);
    }
    const Jt = p - 2 * y, Ut = u - 2 * y, P = 4, A = 4, B = x, Ie = Jt / P, je = Ut / A, Te = it / B, i = [];
    for (let t = 0; t <= B; t++) {
      const e = [];
      for (let a = 0; a <= A; a++) {
        const s = [];
        for (let n = 0; n <= P; n++) s.push(g(-Jt / 2 + n * Ie, -Ut / 2 + a * je, t * Te));
        e.push(s);
      }
      i.push(e);
    }
    function N(t, e, a, s) {
      f.push([
        t,
        e,
        a,
        s
      ]);
      const n = f.length - 1;
      O.set(n, 1e-3), q.set(n, bt), G.set(n, vt), H.set(n, 24 / 9.80665), D.set(n, Ht), Y.set(n, 0), U.set(n, 0), J.set(n, 0), X.set(n, 0);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < P; e++) N(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]), N(i[B][t][e], i[B][t][e + 1], i[B][t + 1][e + 1], i[B][t + 1][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < P; e++) N(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]), N(i[t][A][e], i[t][A][e + 1], i[t + 1][A][e + 1], i[t + 1][A][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < A; e++) N(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]), N(i[t][e][P], i[t][e + 1][P], i[t + 1][e + 1][P], i[t + 1][e][P]);
    const Xt = /* @__PURE__ */ new Map();
    _.forEach((t, e) => {
      Math.abs(t[2] - -ut) < 1e-6 && Xt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const nt = [];
    _.forEach((t, e) => {
      Math.abs(t[2] - it) < 1e-6 && Math.abs(t[0]) <= p / 2 + 1e-6 && Math.abs(t[1]) <= u / 2 + 1e-6 && nt.push(e);
    });
    const Se = -L / Math.max(1, nt.length), Ne = Tt / Math.max(1, nt.length), $t = /* @__PURE__ */ new Map();
    for (const t of nt) $t.set(t, [
      0,
      0,
      Se,
      0,
      Ne,
      0
    ]);
    const Rt = {
      supports: Xt,
      loads: $t
    }, xt = {
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
    let _t = {}, Mt = {};
    try {
      _t = Ke(_, f, Rt, xt), Mt = We(_, f, xt, _t);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const yt = [], Ee = new re({
      color: 6710886,
      metalness: 0.5
    }), Le = new re({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Vt = M * 0.8, Zt = M * 0.85, Oe = K + Vt / 2;
    for (const [t, e] of ht) {
      const a = new ie(M / 2, M / 2, pt + K, 12), s = new de(a, Ee);
      s.position.set(t, e, (-pt + K) / 2), s.rotation.x = Math.PI / 2, yt.push(s);
      const n = new ie(Zt, Zt, Vt, 6), c = new de(n, Le);
      c.position.set(t, e, Oe), c.rotation.x = Math.PI / 2, yt.push(c);
    }
    let gt = 0;
    const Wt = Mt == null ? void 0 : Mt.vonMises;
    Wt && Wt.forEach((t) => t.forEach((e) => {
      e > gt && (gt = e);
    }));
    const qe = 0.65, W = o * j, Kt = Q * tt, Ge = Math.min(2, Math.sqrt(Kt / W)), He = Math.min(0.85 * et * W * Ge, 1.7 * et * W), Qt = qe * He, De = L / Math.max(1, Qt), te = Math.max(0, (o - 0.95 * Math.max(p, u)) / 2), Ye = L / W, ee = te * Math.sqrt(2 * Math.max(0, Ye) / (0.9 * oa)), Je = ee / Math.max(1e-6, zt), Ue = Math.max(0.05, o - 2 * mt), ae = Math.max(0, Tt / Ue - L / 2) / Math.max(1, dt), oe = 0.75 * (0.75 * Math.PI * M * M / 4) * sa, Xe = ae / Math.max(1, oe), $e = p * u, Pt = (p - 2 * y) * (u - 2 * y), se = $e - Pt, ne = 35e4 * se + 0.85 * et * Pt, Re = 0.75 * ne, Ve = L / Math.max(1, Re);
    ge.val = {
      vmMax: gt,
      A1: W,
      A2: Kt,
      phiPp: Qt,
      demandCapPp: De,
      m_cant: te,
      t_req: ee,
      demandCapT: Je,
      T_anchor: ae,
      phiNn: oe,
      demandCapAnchor: Xe,
      As: se,
      Ac: Pt,
      Pno_composite: ne,
      demandCapPno: Ve
    }, he.val = _, be.val = f, ve.val = Rt, xe.val = xt, _e.val = _t, Me.val = Mt, ye.val = yt;
  });
  const Pe = Qe({
    mesh: {
      nodes: he,
      elements: be,
      nodeInputs: ve,
      elementInputs: xe,
      deformOutputs: _e,
      analyzeOutputs: Me
    },
    objects3D: ye,
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
  }), Ct = document.createElement("div");
  Ct.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const I = new Ze({
    title: "\u{1F9EA} Placa base + col CFT",
    container: Ct,
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
  }, lt = (o) => o < 1 ? `${o.toFixed(2)} \u2713` : o < 1.2 ? `${o.toFixed(2)} \u26A0` : `${o.toFixed(2)} \u2717`, ct = I.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  ct.addBinding(m, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  ct.addBinding(m, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  ct.addBinding(m, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (o) => o.toFixed(0)
  });
  ct.addBinding(m, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: lt
  });
  const rt = I.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  rt.addBinding(m, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  rt.addBinding(m, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  rt.addBinding(m, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (o) => o.toFixed(0)
  });
  rt.addBinding(m, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: lt
  });
  const Ft = I.addFolder({
    title: "DG-1 espesor placa"
  });
  Ft.addBinding(m, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (o) => o.toFixed(4)
  });
  Ft.addBinding(m, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (o) => (o * 1e3).toFixed(1)
  });
  Ft.addBinding(m, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: lt
  });
  const kt = I.addFolder({
    title: "ACI \xA717 anclaje"
  });
  kt.addBinding(m, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (o) => o.toFixed(1)
  });
  kt.addBinding(m, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (o) => o.toFixed(1)
  });
  kt.addBinding(m, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: lt
  });
  const na = I.addFolder({
    title: "FEM"
  });
  na.addBinding(m, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (o) => o.toExponential(3)
  });
  const Ae = I.addFolder({
    title: "Unidades",
    expanded: false
  }), Be = {
    stress: fe.val,
    disp: ue.val
  };
  Ae.addBinding(Be, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (o) => {
    fe.val = o.value;
  });
  Ae.addBinding(Be, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (o) => {
    ue.val = o.value;
  });
  document.body.append(Ct);
  l.derive(() => {
    const o = ge.val;
    Object.assign(m, o), I.refresh();
  });
  document.body.append(ea(d), Pe, aa({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => ta(), 200);
  setTimeout(() => {
    var _a;
    const o = Pe.__ctx;
    (o == null ? void 0 : o.camera) && (o == null ? void 0 : o.controls) && (o.camera.up.set(0, 0, 1), o.camera.position.set(2, -2, 1.2), o.controls.target.set(0, 0, 0.25), o.controls.update(), (_a = o.render) == null ? void 0 : _a.call(o));
  }, 800);
});
