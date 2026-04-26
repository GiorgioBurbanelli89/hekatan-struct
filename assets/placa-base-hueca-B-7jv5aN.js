import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as De } from "./theme-2eEBQPmF.js";
import { M as _t, b as yt, c as Ye, C as oe } from "./Text-BajK4Ymq.js";
import { a as Je } from "./analyze-BydHtRcI.js";
import { d as Ue, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Xe, a as ce, e as re } from "./getViewer-CZ5JMuv5.js";
import { e as $e } from "./makeDraggable-zx2br6Yh.js";
import { g as Re } from "./getParameters-CIJBOwMB.js";
import { g as Ve } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const gt = 2e8, wt = 0.3, ne = gt / (2 * (1 + wt)), le = 78, Ze = 25e4, We = 6e5, i = {
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
  }, ie = l.state([]), de = l.state([]), me = l.state({}), pe = l.state({}), ue = l.state({}), he = l.state({}), fe = l.state([]), xe = l.state({
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
    const s = i.B.value.val, M = i.H.value.val, q = i.t_plate.value.val, m = i.bc.value.val, p = i.hc.value.val, E = i.t_col.value.val, Ct = i.L_col.value.val, Nt = Math.round(i.nBoltsX.value.val), ot = Math.round(i.nBoltsY.value.val), nt = i.sx.value.val, St = i.sy.value.val, h = i.d_bolt.value.val, H = i.L_bolt.value.val, G = i.L_proj.value.val, D = i.B_ped.value.val, Y = i.H_ped.value.val, lt = i.h_ped.value.val, ct = i.fc.value.val, J = i.Pu.value.val, rt = i.Mx.value.val, it = i.My.value.val, S = Math.round(i.nx.value.val), I = Math.round(i.ny.value.val), f = Math.round(i.nz_col.value.val), u = [], x = [], U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
    function b(t, e, a) {
      return u.push([
        t,
        e,
        a
      ]), u.length - 1;
    }
    function T(t, e, a, o, c) {
      x.push([
        t,
        e,
        a,
        o
      ]);
      const n = x.length - 1;
      U.set(n, c), X.set(n, gt), $.set(n, wt), R.set(n, le), V.set(n, ne), Z.set(n, 0), K.set(n, 0), W.set(n, 0), Q.set(n, 0);
    }
    function It(t, e, a, o, c) {
      x.push([
        t,
        e
      ]);
      const n = x.length - 1;
      X.set(n, gt), $.set(n, wt), R.set(n, le), V.set(n, ne), Z.set(n, a), K.set(n, o), W.set(n, o), Q.set(n, c), U.set(n, 0);
    }
    const Tt = s / S, kt = M / I, w = [];
    for (let t = 0; t <= I; t++) {
      const e = [];
      for (let a = 0; a <= S; a++) e.push(b(-s / 2 + a * Tt, -M / 2 + t * kt, 0));
      w.push(e);
    }
    for (let t = 0; t < I; t++) for (let e = 0; e < S; e++) T(w[t][e], w[t][e + 1], w[t + 1][e + 1], w[t + 1][e], q);
    function k(t, e) {
      let a = -1, o = 1 / 0;
      for (let c = 0; c <= I; c++) for (let n = 0; n <= S; n++) {
        const g = w[c][n], O = Math.hypot(u[g][0] - t, u[g][1] - e);
        O < o && (o = O, a = g);
      }
      return a;
    }
    const P = Math.max(2, Math.round(m / Tt)), B = Math.max(2, Math.round(p / kt)), Ft = m / P, jt = p / B, tt = Ct / f, z = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= P; a++) {
        const o = -m / 2 + a * Ft;
        t === 0 ? e.push(k(o, -p / 2)) : e.push(b(o, -p / 2, t * tt));
      }
      z.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < P; e++) T(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], E);
    const A = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= P; a++) {
        const o = -m / 2 + a * Ft;
        t === 0 ? e.push(k(o, p / 2)) : e.push(b(o, p / 2, t * tt));
      }
      A.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < P; e++) T(A[t][e], A[t][e + 1], A[t + 1][e + 1], A[t + 1][e], E);
    const F = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= B; a++) {
        const o = -p / 2 + a * jt;
        t === 0 ? e.push(k(-m / 2, o)) : a === 0 ? e.push(z[t][0]) : a === B ? e.push(A[t][0]) : e.push(b(-m / 2, o, t * tt));
      }
      F.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < B; e++) T(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], E);
    const j = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= B; a++) {
        const o = -p / 2 + a * jt;
        t === 0 ? e.push(k(m / 2, o)) : a === 0 ? e.push(z[t][P]) : a === B ? e.push(A[t][P]) : e.push(b(m / 2, o, t * tt));
      }
      j.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < B; e++) T(j[t][e], j[t][e + 1], j[t + 1][e + 1], j[t + 1][e], E);
    const Lt = Math.PI * h * h / 4, dt = Math.PI * h ** 4 / 64, Ot = 2 * dt, et = [], _e = (s - 2 * nt) / Math.max(1, Nt - 1), ye = (M - 2 * St) / Math.max(1, ot - 1);
    for (let t = 0; t < Nt; t++) for (let e = 0; e < ot; e++) {
      const a = -s / 2 + nt + t * _e, o = -M / 2 + St + e * ye;
      Math.abs(a) < m / 2 + 5e-3 && Math.abs(o) < p / 2 + 5e-3 || et.push([
        a,
        o
      ]);
    }
    const qt = 4700 * Math.sqrt(ct / 1e3) * 1e3, Et = 0.2, ge = qt / (2 * (1 + Et)), _ = 10, y = 10, v = 6, Ht = D / _, Gt = Y / y, we = lt / v, Dt = [];
    for (let t = 0; t <= I; t++) for (let e = 0; e <= S; e++) {
      const a = w[t][e];
      Dt.push({
        id: a,
        x: u[a][0],
        y: u[a][1]
      });
    }
    const r = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = [];
        for (let c = 0; c <= _; c++) {
          const n = -D / 2 + c * Ht, g = -Y / 2 + a * Gt, O = -lt + t * we, He = t === v, Ge = Math.abs(n) <= s / 2 + 1e-6 && Math.abs(g) <= M / 2 + 1e-6;
          let bt;
          if (He && Ge) {
            let vt = -1, ae = 1 / 0;
            for (const Mt of Dt) {
              const se = Math.hypot(Mt.x - n, Mt.y - g);
              se < ae && (ae = se, vt = Mt.id);
            }
            bt = vt >= 0 ? vt : b(n, g, O);
          } else bt = b(n, g, O);
          o.push(bt);
        }
        e.push(o);
      }
      r.push(e);
    }
    for (const [t, e] of et) {
      const a = b(t, e, G), o = k(t, e), c = b(t, e, -H);
      It(a, o, Lt, dt, Ot), It(o, c, Lt, dt, Ot);
    }
    function C(t, e, a, o) {
      x.push([
        t,
        e,
        a,
        o
      ]);
      const c = x.length - 1;
      U.set(c, 1e-3), X.set(c, qt), $.set(c, Et), R.set(c, 24 / 9.80665), V.set(c, ge), Z.set(c, 0), K.set(c, 0), W.set(c, 0), Q.set(c, 0);
    }
    for (let t = 0; t < y; t++) for (let e = 0; e < _; e++) {
      C(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
      const a = -D / 2 + (e + 0.5) * Ht, o = -Y / 2 + (t + 0.5) * Gt;
      Math.abs(a) <= s / 2 && Math.abs(o) <= M / 2 || C(r[v][t][e], r[v][t][e + 1], r[v][t + 1][e + 1], r[v][t + 1][e]);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < _; e++) C(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]), C(r[t][y][e], r[t][y][e + 1], r[t + 1][y][e + 1], r[t + 1][y][e]);
    for (let t = 0; t < v; t++) for (let e = 0; e < y; e++) C(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]), C(r[t][e][_], r[t][e + 1][_], r[t + 1][e + 1][_], r[t + 1][e][_]);
    const Yt = /* @__PURE__ */ new Map();
    u.forEach((t, e) => {
      const a = Math.abs(t[2] - -H) < 1e-6 && et.some(([c, n]) => Math.abs(t[0] - c) < 1e-6 && Math.abs(t[1] - n) < 1e-6), o = Math.abs(t[2] - -lt) < 1e-6;
      (a || o) && Yt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const mt = [];
    u.forEach((t, e) => {
      Math.abs(t[2] - Ct) < 1e-6 && Math.abs(t[0]) <= m / 2 + 1e-6 && Math.abs(t[1]) <= p / 2 + 1e-6 && mt.push(e);
    });
    const pt = Math.max(1, mt.length), Pe = -J / pt, Be = rt / pt, ze = it / pt, Jt = /* @__PURE__ */ new Map();
    for (const t of mt) Jt.set(t, [
      0,
      0,
      Pe,
      Be,
      ze,
      0
    ]);
    const Ut = {
      supports: Yt,
      loads: Jt
    }, ut = {
      elasticities: X,
      shearModuli: V,
      areas: Z,
      momentsOfInertiaZ: W,
      momentsOfInertiaY: K,
      torsionalConstants: Q,
      densities: R,
      poissonsRatios: $,
      thicknesses: U
    };
    let ht = {}, ft = {};
    try {
      ht = Ue(u, x, Ut, ut), ft = Je(u, x, ut, ht);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const at = [], Ae = new _t({
      color: 10526880,
      metalness: 0.7,
      roughness: 0.4
    }), Xt = new yt(new Ye(s, M, q), Ae);
    Xt.position.set(0, 0, q / 2), at.push(Xt);
    const Ce = new _t({
      color: 6710886,
      metalness: 0.5
    }), Ne = new _t({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), $t = h * 0.8, Rt = h * 0.85, Se = G + $t / 2;
    for (const [t, e] of et) {
      const a = new oe(h / 2, h / 2, H + G, 12), o = new yt(a, Ce);
      o.position.set(t, e, (-H + G) / 2), o.rotation.x = Math.PI / 2, at.push(o);
      const c = new oe(Rt, Rt, $t, 6), n = new yt(c, Ne);
      n.position.set(t, e, Se), n.rotation.x = Math.PI / 2, at.push(n);
    }
    let xt = 0;
    const Vt = ft == null ? void 0 : ft.vonMises;
    Vt && Vt.forEach((t) => t.forEach((e) => {
      e > xt && (xt = e);
    }));
    const Ie = 0.65, L = s * M, Zt = D * Y, Te = Math.min(2, Math.sqrt(Zt / L)), ke = Math.min(0.85 * ct * L * Te, 1.7 * ct * L), Wt = Ie * ke, Fe = J / Math.max(1, Wt), Kt = Math.max(0, (s - 0.95 * Math.max(m, p)) / 2), je = J / L, Qt = Kt * Math.sqrt(2 * Math.max(0, je) / (0.9 * Ze)), Le = Qt / Math.max(1e-6, q), Oe = Math.max(0.05, s - 2 * nt), qe = Math.sqrt(rt * rt + it * it), te = Math.max(0, qe / Oe - J / 2) / Math.max(1, ot), ee = 0.75 * (0.75 * Math.PI * h * h / 4) * We, Ee = te / Math.max(1, ee);
    xe.val = {
      vmMax: xt,
      A1: L,
      A2: Zt,
      phiPp: Wt,
      demandCapPp: Fe,
      m_cant: Kt,
      t_req: Qt,
      demandCapT: Le,
      T_anchor: te,
      phiNn: ee,
      demandCapAnchor: Ee
    }, ie.val = u, de.val = x, me.val = Ut, pe.val = ut, ue.val = ht, he.val = ft, fe.val = at;
  });
  const be = Xe({
    mesh: {
      nodes: ie,
      elements: de,
      nodeInputs: me,
      elementInputs: pe,
      deformOutputs: ue,
      analyzeOutputs: he
    },
    objects3D: fe,
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
  }), Pt = document.createElement("div");
  Pt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const N = new De({
    title: "\u{1F9EA} Placa base + col HSS hueca",
    container: Pt,
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
  }, Bt = (s) => s < 1 ? `${s.toFixed(2)} \u2713` : s < 1.2 ? `${s.toFixed(2)} \u26A0` : `${s.toFixed(2)} \u2717`, st = N.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  st.addBinding(d, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  st.addBinding(d, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  st.addBinding(d, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (s) => s.toFixed(0)
  });
  st.addBinding(d, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: Bt
  });
  const zt = N.addFolder({
    title: "DG-1 espesor placa"
  });
  zt.addBinding(d, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (s) => s.toFixed(4)
  });
  zt.addBinding(d, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (s) => (s * 1e3).toFixed(1)
  });
  zt.addBinding(d, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: Bt
  });
  const At = N.addFolder({
    title: "ACI \xA717 anclaje"
  });
  At.addBinding(d, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (s) => s.toFixed(1)
  });
  At.addBinding(d, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (s) => s.toFixed(1)
  });
  At.addBinding(d, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: Bt
  });
  const Ke = N.addFolder({
    title: "FEM"
  });
  Ke.addBinding(d, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (s) => s.toExponential(3)
  });
  const ve = N.addFolder({
    title: "Unidades",
    expanded: false
  }), Me = {
    stress: re.val,
    disp: ce.val
  };
  ve.addBinding(Me, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (s) => {
    re.val = s.value;
  });
  ve.addBinding(Me, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (s) => {
    ce.val = s.value;
  });
  document.body.append(Pt);
  l.derive(() => {
    const s = xe.val;
    Object.assign(d, s), N.refresh();
  });
  document.body.append(Re(i), be, Ve({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-hueca/main.ts"
  }));
  setTimeout(() => $e(), 200);
  setTimeout(() => {
    var _a;
    const s = be.__ctx;
    (s == null ? void 0 : s.camera) && (s == null ? void 0 : s.controls) && (s.camera.up.set(0, 0, 1), s.camera.position.set(2, -2, 1.2), s.controls.target.set(0, 0, 0.25), s.controls.update(), (_a = s.render) == null ? void 0 : _a.call(s));
  }, 800);
});
