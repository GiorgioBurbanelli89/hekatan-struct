import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as n, P as Le } from "./theme-2eEBQPmF.js";
import { M as Kt, C as Qt, b as te } from "./Text-DyNVkyur.js";
import { a as Oe } from "./analyze-BydHtRcI.js";
import { d as qe, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Ee, a as se, e as oe } from "./getViewer-DnVmZy1T.js";
import { e as He } from "./makeDraggable-zx2br6Yh.js";
import { g as Ge } from "./getParameters-CIJBOwMB.js";
import { g as De } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const xt = 2e8, bt = 0.3, ee = xt / (2 * (1 + bt)), ae = 78, Ye = 25e4, Je = 6e5, i = {
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
      label: "Pu axial (kN)"
    },
    Mx: {
      value: n.state(20),
      min: 0,
      max: 500,
      step: 5,
      label: "Mx (kN\xB7m)"
    },
    My: {
      value: n.state(30),
      min: 0,
      max: 500,
      step: 5,
      label: "My (kN\xB7m)"
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
  }, ne = n.state([]), le = n.state([]), ce = n.state({}), re = n.state({}), ie = n.state({}), de = n.state({}), me = n.state([]), pe = n.state({
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
    const s = i.B.value.val, z = i.H.value.val, Pt = i.t_plate.value.val, m = i.bc.value.val, p = i.hc.value.val, L = i.t_col.value.val, wt = i.L_col.value.val, Bt = Math.round(i.nBoltsX.value.val), tt = Math.round(i.nBoltsY.value.val), et = i.sx.value.val, zt = i.sy.value.val, h = i.d_bolt.value.val, at = i.L_bolt.value.val, O = i.L_proj.value.val, q = i.B_ped.value.val, E = i.H_ped.value.val, st = i.h_ped.value.val, ot = i.fc.value.val, H = i.Pu.value.val, nt = i.Mx.value.val, lt = i.My.value.val, G = Math.round(i.nx.value.val), D = Math.round(i.ny.value.val), f = Math.round(i.nz_col.value.val), u = [], v = [], Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
    function _(t, e, a) {
      return u.push([
        t,
        e,
        a
      ]), u.length - 1;
    }
    function k(t, e, a, o, c) {
      v.push([
        t,
        e,
        a,
        o
      ]);
      const l = v.length - 1;
      Y.set(l, c), J.set(l, xt), U.set(l, bt), X.set(l, ae), $.set(l, ee), R.set(l, 0), Z.set(l, 0), V.set(l, 0), W.set(l, 0);
    }
    function At(t, e, a, o, c) {
      v.push([
        t,
        e
      ]);
      const l = v.length - 1;
      J.set(l, xt), U.set(l, bt), X.set(l, ae), $.set(l, ee), R.set(l, a), Z.set(l, o), V.set(l, o), W.set(l, c), Y.set(l, 0);
    }
    const Ct = s / G, Nt = z / D, A = [];
    for (let t = 0; t <= D; t++) {
      const e = [];
      for (let a = 0; a <= G; a++) e.push(_(-s / 2 + a * Ct, -z / 2 + t * Nt, 0));
      A.push(e);
    }
    for (let t = 0; t < D; t++) for (let e = 0; e < G; e++) k(A[t][e], A[t][e + 1], A[t + 1][e + 1], A[t + 1][e], Pt);
    function I(t, e) {
      let a = -1, o = 1 / 0;
      for (let c = 0; c <= D; c++) for (let l = 0; l <= G; l++) {
        const B = A[c][l], N = Math.hypot(u[B][0] - t, u[B][1] - e);
        N < o && (o = N, a = B);
      }
      return a;
    }
    const y = Math.max(2, Math.round(m / Ct)), g = Math.max(2, Math.round(p / Nt)), St = m / y, kt = p / g, K = wt / f, P = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -m / 2 + a * St;
        t === 0 ? e.push(I(o, -p / 2)) : e.push(_(o, -p / 2, t * K));
      }
      P.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < y; e++) k(P[t][e], P[t][e + 1], P[t + 1][e + 1], P[t + 1][e], L);
    const w = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= y; a++) {
        const o = -m / 2 + a * St;
        t === 0 ? e.push(I(o, p / 2)) : e.push(_(o, p / 2, t * K));
      }
      w.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < y; e++) k(w[t][e], w[t][e + 1], w[t + 1][e + 1], w[t + 1][e], L);
    const T = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -p / 2 + a * kt;
        t === 0 ? e.push(I(-m / 2, o)) : a === 0 ? e.push(P[t][0]) : a === g ? e.push(w[t][0]) : e.push(_(-m / 2, o, t * K));
      }
      T.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < g; e++) k(T[t][e], T[t][e + 1], T[t + 1][e + 1], T[t + 1][e], L);
    const F = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= g; a++) {
        const o = -p / 2 + a * kt;
        t === 0 ? e.push(I(m / 2, o)) : a === 0 ? e.push(P[t][y]) : a === g ? e.push(w[t][y]) : e.push(_(m / 2, o, t * K));
      }
      F.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < g; e++) k(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], L);
    const It = Math.PI * h * h / 4, ct = Math.PI * h ** 4 / 64, Tt = 2 * ct, rt = [], ve = (s - 2 * et) / Math.max(1, Bt - 1), xe = (z - 2 * zt) / Math.max(1, tt - 1);
    for (let t = 0; t < Bt; t++) for (let e = 0; e < tt; e++) {
      const a = -s / 2 + et + t * ve, o = -z / 2 + zt + e * xe;
      Math.abs(a) < m / 2 + 5e-3 && Math.abs(o) < p / 2 + 5e-3 || rt.push([
        a,
        o
      ]);
    }
    const Ft = 4700 * Math.sqrt(ot / 1e3) * 1e3, jt = 0.2, be = Ft / (2 * (1 + jt)), x = 10, b = 10, M = 6, Lt = q / x, Ot = E / b, Me = st / M, r = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let a = 0; a <= b; a++) {
        const o = [];
        for (let c = 0; c <= x; c++) o.push(_(-q / 2 + c * Lt, -E / 2 + a * Ot, -st + t * Me));
        e.push(o);
      }
      r.push(e);
    }
    function _e(t, e, a) {
      let o = -1, c = 1 / 0;
      for (let l = 0; l <= M; l++) for (let B = 0; B <= b; B++) for (let N = 0; N <= x; N++) {
        const Zt = r[l][B][N], vt = u[Zt], Wt = Math.hypot(vt[0] - t, vt[1] - e) + Math.abs(vt[2] - a) * 0.5;
        Wt < c && (c = Wt, o = Zt);
      }
      return o;
    }
    for (const [t, e] of rt) {
      const a = _(t, e, O), o = I(t, e), c = _e(t, e, -at);
      At(a, o, It, ct, Tt), At(o, c, It, ct, Tt);
    }
    function C(t, e, a, o) {
      v.push([
        t,
        e,
        a,
        o
      ]);
      const c = v.length - 1;
      Y.set(c, 1e-3), J.set(c, Ft), U.set(c, jt), X.set(c, 24 / 9.80665), $.set(c, be), R.set(c, 0), Z.set(c, 0), V.set(c, 0), W.set(c, 0);
    }
    for (let t = 0; t < b; t++) for (let e = 0; e < x; e++) {
      C(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
      const a = -q / 2 + (e + 0.5) * Lt, o = -E / 2 + (t + 0.5) * Ot;
      Math.abs(a) <= s / 2 && Math.abs(o) <= z / 2 || C(r[M][t][e], r[M][t][e + 1], r[M][t + 1][e + 1], r[M][t + 1][e]);
    }
    for (let t = 0; t < M; t++) for (let e = 0; e < x; e++) C(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]), C(r[t][b][e], r[t][b][e + 1], r[t + 1][b][e + 1], r[t + 1][b][e]);
    for (let t = 0; t < M; t++) for (let e = 0; e < b; e++) C(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]), C(r[t][e][x], r[t][e + 1][x], r[t + 1][e + 1][x], r[t + 1][e][x]);
    const qt = /* @__PURE__ */ new Map();
    u.forEach((t, e) => {
      Math.abs(t[2] - -st) < 1e-6 && qt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const it = [];
    u.forEach((t, e) => {
      Math.abs(t[2] - wt) < 1e-6 && Math.abs(t[0]) <= m / 2 + 1e-6 && Math.abs(t[1]) <= p / 2 + 1e-6 && it.push(e);
    });
    const dt = Math.max(1, it.length), ye = -H / dt, ge = nt / dt, Pe = lt / dt, Et = /* @__PURE__ */ new Map();
    for (const t of it) Et.set(t, [
      0,
      0,
      ye,
      ge,
      Pe,
      0
    ]);
    const Ht = {
      supports: qt,
      loads: Et
    }, mt = {
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
    let pt = {}, ut = {};
    try {
      pt = qe(u, v, Ht, mt), ut = Oe(u, v, mt, pt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const ht = [], we = new Kt({
      color: 6710886,
      metalness: 0.5
    }), Be = new Kt({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Gt = h * 0.8, Dt = h * 0.85, ze = O + Gt / 2;
    for (const [t, e] of rt) {
      const a = new Qt(h / 2, h / 2, at + O, 12), o = new te(a, we);
      o.position.set(t, e, (-at + O) / 2), o.rotation.x = Math.PI / 2, ht.push(o);
      const c = new Qt(Dt, Dt, Gt, 6), l = new te(c, Be);
      l.position.set(t, e, ze), l.rotation.x = Math.PI / 2, ht.push(l);
    }
    let ft = 0;
    const Yt = ut == null ? void 0 : ut.vonMises;
    Yt && Yt.forEach((t) => t.forEach((e) => {
      e > ft && (ft = e);
    }));
    const Ae = 0.65, j = s * z, Jt = q * E, Ce = Math.min(2, Math.sqrt(Jt / j)), Ne = Math.min(0.85 * ot * j * Ce, 1.7 * ot * j), Ut = Ae * Ne, Se = H / Math.max(1, Ut), Xt = Math.max(0, (s - 0.95 * Math.max(m, p)) / 2), ke = H / j, $t = Xt * Math.sqrt(2 * Math.max(0, ke) / (0.9 * Ye)), Ie = $t / Math.max(1e-6, Pt), Te = Math.max(0.05, s - 2 * et), Fe = Math.sqrt(nt * nt + lt * lt), Rt = Math.max(0, Fe / Te - H / 2) / Math.max(1, tt), Vt = 0.75 * (0.75 * Math.PI * h * h / 4) * Je, je = Rt / Math.max(1, Vt);
    pe.val = {
      vmMax: ft,
      A1: j,
      A2: Jt,
      phiPp: Ut,
      demandCapPp: Se,
      m_cant: Xt,
      t_req: $t,
      demandCapT: Ie,
      T_anchor: Rt,
      phiNn: Vt,
      demandCapAnchor: je
    }, ne.val = u, le.val = v, ce.val = Ht, re.val = mt, ie.val = pt, de.val = ut, me.val = ht;
  });
  const ue = Ee({
    mesh: {
      nodes: ne,
      elements: le,
      nodeInputs: ce,
      elementInputs: re,
      deformOutputs: ie,
      analyzeOutputs: de
    },
    objects3D: me,
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
  }), Mt = document.createElement("div");
  Mt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const S = new Le({
    title: "\u{1F9EA} Placa base + col HSS hueca",
    container: Mt,
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
  }, _t = (s) => s < 1 ? `${s.toFixed(2)} \u2713` : s < 1.2 ? `${s.toFixed(2)} \u26A0` : `${s.toFixed(2)} \u2717`, Q = S.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  Q.addBinding(d, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  Q.addBinding(d, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  Q.addBinding(d, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (s) => s.toFixed(0)
  });
  Q.addBinding(d, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: _t
  });
  const yt = S.addFolder({
    title: "DG-1 espesor placa"
  });
  yt.addBinding(d, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (s) => s.toFixed(4)
  });
  yt.addBinding(d, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (s) => (s * 1e3).toFixed(1)
  });
  yt.addBinding(d, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: _t
  });
  const gt = S.addFolder({
    title: "ACI \xA717 anclaje"
  });
  gt.addBinding(d, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (s) => s.toFixed(1)
  });
  gt.addBinding(d, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (s) => s.toFixed(1)
  });
  gt.addBinding(d, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: _t
  });
  const Ue = S.addFolder({
    title: "FEM"
  });
  Ue.addBinding(d, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (s) => s.toExponential(3)
  });
  const he = S.addFolder({
    title: "Unidades",
    expanded: false
  }), fe = {
    stress: oe.val,
    disp: se.val
  };
  he.addBinding(fe, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (s) => {
    oe.val = s.value;
  });
  he.addBinding(fe, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (s) => {
    se.val = s.value;
  });
  document.body.append(Mt);
  n.derive(() => {
    const s = pe.val;
    Object.assign(d, s), S.refresh();
  });
  document.body.append(Ge(i), ue, De({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-hueca/main.ts"
  }));
  setTimeout(() => He(), 200);
  setTimeout(() => {
    var _a;
    const s = ue.__ctx;
    (s == null ? void 0 : s.camera) && (s == null ? void 0 : s.controls) && (s.camera.up.set(0, 0, 1), s.camera.position.set(2, -2, 1.2), s.controls.target.set(0, 0, 0.25), s.controls.update(), (_a = s.render) == null ? void 0 : _a.call(s));
  }, 800);
});
