import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as s, P as Ae } from "./theme-2eEBQPmF.js";
import { M as rt, b as it, c as Jt, C as Be } from "./Text-DyNVkyur.js";
import { a as we } from "./analyze-BydHtRcI.js";
import { d as Ce, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Fe, a as $t, e as Rt } from "./getViewer-DnVmZy1T.js";
import { e as ze } from "./makeDraggable-zx2br6Yh.js";
import { g as Ie } from "./getParameters-CIJBOwMB.js";
import { g as Te } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const dt = 2e8, mt = 0.3, Ut = dt / (2 * (1 + mt)), Xt = 78, Ne = 25e4, Se = 6e5, l = {
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
      label: "Pu (kN)"
    },
    Mu: {
      value: s.state(30),
      min: 0,
      max: 800,
      step: 5,
      label: "Mu (kN\xB7m)"
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
  }, Vt = s.state([]), Wt = s.state([]), Zt = s.state({}), Kt = s.state({}), Qt = s.state({}), te = s.state({}), ee = s.state([]), ae = s.state({
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
    const a = l.B.value.val, A = l.H.value.val, ft = l.t_plate.value.val, i = l.bc.value.val, d = l.hc.value.val, h = l.t_col.value.val, T = l.L_col.value.val, vt = Math.round(l.nBoltsX.value.val), D = Math.round(l.nBoltsY.value.val), G = l.sx.value.val, bt = l.sy.value.val, f = l.d_bolt.value.val, N = l.L_bolt.value.val, Y = l.L_proj.value.val, xt = l.B_ped.value.val, _t = l.H_ped.value.val, Mt = l.h_ped.value.val, J = l.fc.value.val, B = l.Pu.value.val, yt = l.Mu.value.val, S = Math.round(l.nx.value.val), k = Math.round(l.ny.value.val), m = Math.round(l.nz_col.value.val), p = [], v = [], U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
    function b(t, e, o) {
      return p.push([
        t,
        e,
        o
      ]), p.length - 1;
    }
    function w(t, e, o, n, u) {
      v.push([
        t,
        e,
        o,
        n
      ]);
      const c = v.length - 1;
      U.set(c, u), X.set(c, dt), $.set(c, mt), R.set(c, Xt), V.set(c, Ut), W.set(c, 0), K.set(c, 0), Z.set(c, 0), Q.set(c, 0);
    }
    function gt(t, e, o, n, u) {
      v.push([
        t,
        e
      ]);
      const c = v.length - 1;
      X.set(c, dt), $.set(c, mt), R.set(c, Xt), V.set(c, Ut), W.set(c, o), K.set(c, n), Z.set(c, n), Q.set(c, u), U.set(c, 0);
    }
    const Pt = a / S, At = A / k, P = [];
    for (let t = 0; t <= k; t++) {
      const e = [];
      for (let o = 0; o <= S; o++) e.push(b(-a / 2 + o * Pt, -A / 2 + t * At, 0));
      P.push(e);
    }
    for (let t = 0; t < k; t++) for (let e = 0; e < S; e++) w(P[t][e], P[t][e + 1], P[t + 1][e + 1], P[t + 1][e], ft);
    function C(t, e) {
      let o = -1, n = 1 / 0;
      for (let u = 0; u <= k; u++) for (let c = 0; c <= S; c++) {
        const ct = P[u][c], Yt = Math.hypot(p[ct][0] - t, p[ct][1] - e);
        Yt < n && (n = Yt, o = ct);
      }
      return o;
    }
    const x = Math.max(2, Math.round(i / Pt)), _ = Math.max(2, Math.round(d / At)), Bt = i / x, wt = d / _, j = T / m, M = [];
    for (let t = 0; t <= m; t++) {
      const e = [];
      for (let o = 0; o <= x; o++) {
        const n = -i / 2 + o * Bt;
        t === 0 ? e.push(C(n, -d / 2)) : e.push(b(n, -d / 2, t * j));
      }
      M.push(e);
    }
    for (let t = 0; t < m; t++) for (let e = 0; e < x; e++) w(M[t][e], M[t][e + 1], M[t + 1][e + 1], M[t + 1][e], h);
    const y = [];
    for (let t = 0; t <= m; t++) {
      const e = [];
      for (let o = 0; o <= x; o++) {
        const n = -i / 2 + o * Bt;
        t === 0 ? e.push(C(n, d / 2)) : e.push(b(n, d / 2, t * j));
      }
      y.push(e);
    }
    for (let t = 0; t < m; t++) for (let e = 0; e < x; e++) w(y[t][e], y[t][e + 1], y[t + 1][e + 1], y[t + 1][e], h);
    const F = [];
    for (let t = 0; t <= m; t++) {
      const e = [];
      for (let o = 0; o <= _; o++) {
        const n = -d / 2 + o * wt;
        t === 0 ? e.push(C(-i / 2, n)) : o === 0 ? e.push(M[t][0]) : o === _ ? e.push(y[t][0]) : e.push(b(-i / 2, n, t * j));
      }
      F.push(e);
    }
    for (let t = 0; t < m; t++) for (let e = 0; e < _; e++) w(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], h);
    const z = [];
    for (let t = 0; t <= m; t++) {
      const e = [];
      for (let o = 0; o <= _; o++) {
        const n = -d / 2 + o * wt;
        t === 0 ? e.push(C(i / 2, n)) : o === 0 ? e.push(M[t][x]) : o === _ ? e.push(y[t][x]) : e.push(b(i / 2, n, t * j));
      }
      z.push(e);
    }
    for (let t = 0; t < m; t++) for (let e = 0; e < _; e++) w(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], h);
    const Ct = Math.PI * f * f / 4, tt = Math.PI * f ** 4 / 64, Ft = 2 * tt, et = [], le = (a - 2 * G) / Math.max(1, vt - 1), ce = (A - 2 * bt) / Math.max(1, D - 1);
    for (let t = 0; t < vt; t++) for (let e = 0; e < D; e++) {
      const o = -a / 2 + G + t * le, n = -A / 2 + bt + e * ce;
      Math.abs(o) < i / 2 + 5e-3 && Math.abs(n) < d / 2 + 5e-3 || et.push([
        o,
        n
      ]);
    }
    for (const [t, e] of et) {
      const o = b(t, e, Y), n = C(t, e), u = b(t, e, -N);
      gt(o, n, Ct, tt, Ft), gt(n, u, Ct, tt, Ft);
    }
    const zt = /* @__PURE__ */ new Map();
    p.forEach((t, e) => {
      Math.abs(t[2] - -N) < 1e-6 && zt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const E = [];
    p.forEach((t, e) => {
      Math.abs(t[2] - T) < 1e-6 && Math.abs(t[0]) <= i / 2 + 1e-6 && Math.abs(t[1]) <= d / 2 + 1e-6 && E.push(e);
    });
    const re = -B / Math.max(1, E.length), ie = yt / Math.max(1, E.length), It = /* @__PURE__ */ new Map();
    for (const t of E) It.set(t, [
      0,
      0,
      re,
      0,
      ie,
      0
    ]);
    const Tt = {
      supports: zt,
      loads: It
    }, at = {
      elasticities: X,
      shearModuli: V,
      areas: W,
      momentsOfInertiaZ: Z,
      momentsOfInertiaY: K,
      torsionalConstants: Q,
      densities: R,
      poissonsRatios: $,
      thicknesses: U
    };
    let ot = {}, st = {};
    try {
      ot = Ce(p, v, Tt, at), st = we(p, v, at, ot);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const L = [], de = new rt({
      color: 8947848,
      roughness: 0.9
    }), me = new rt({
      color: 6710886,
      metalness: 0.5
    }), pe = new rt({
      color: 11180390,
      transparent: true,
      opacity: 0.55
    }), Nt = new it(new Jt(i - 2 * h, d - 2 * h, T), pe);
    Nt.position.set(0, 0, T / 2), L.push(Nt);
    const St = new it(new Jt(xt, _t, Mt), de);
    St.position.set(0, 0, -Mt / 2), L.push(St);
    for (const [t, e] of et) {
      const o = new Be(f / 2, f / 2, N + Y, 12), n = new it(o, me);
      n.position.set(t, e, (-N + Y) / 2), n.rotation.x = Math.PI / 2, L.push(n);
    }
    let nt = 0;
    const kt = st == null ? void 0 : st.vonMises;
    kt && kt.forEach((t) => t.forEach((e) => {
      e > nt && (nt = e);
    }));
    const ue = 0.65, I = a * A, jt = xt * _t, he = Math.min(2, Math.sqrt(jt / I)), fe = Math.min(0.85 * J * I * he, 1.7 * J * I), Et = ue * fe, ve = B / Math.max(1, Et), Lt = Math.max(0, (a - 0.95 * Math.max(i, d)) / 2), be = B / I, Ot = Lt * Math.sqrt(2 * Math.max(0, be) / (0.9 * Ne)), xe = Ot / Math.max(1e-6, ft), _e = Math.max(0.05, a - 2 * G), Ht = Math.max(0, yt / _e - B / 2) / Math.max(1, D), qt = 0.75 * (0.75 * Math.PI * f * f / 4) * Se, Me = Ht / Math.max(1, qt), ye = i * d, lt = (i - 2 * h) * (d - 2 * h), Dt = ye - lt, Gt = 35e4 * Dt + 0.85 * J * lt, ge = 0.75 * Gt, Pe = B / Math.max(1, ge);
    ae.val = {
      vmMax: nt,
      A1: I,
      A2: jt,
      phiPp: Et,
      demandCapPp: ve,
      m_cant: Lt,
      t_req: Ot,
      demandCapT: xe,
      T_anchor: Ht,
      phiNn: qt,
      demandCapAnchor: Me,
      As: Dt,
      Ac: lt,
      Pno_composite: Gt,
      demandCapPno: Pe
    }, Vt.val = p, Wt.val = v, Zt.val = Tt, Kt.val = at, Qt.val = ot, te.val = st, ee.val = L;
  });
  const oe = Fe({
    mesh: {
      nodes: Vt,
      elements: Wt,
      nodeInputs: Zt,
      elementInputs: Kt,
      deformOutputs: Qt,
      analyzeOutputs: te
    },
    objects3D: ee,
    settingsObj: {
      deformedShape: true,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 20,
      custom3D: true,
      loads: true,
      supports: true,
      displayScale: 0.4
    }
  }), pt = document.createElement("div");
  pt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const g = new Ae({
    title: "\u{1F9EA} Placa base + col CFT",
    container: pt,
    expanded: true
  }), r = {
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
  }, O = (a) => a < 1 ? `${a.toFixed(2)} \u2713` : a < 1.2 ? `${a.toFixed(2)} \u26A0` : `${a.toFixed(2)} \u2717`, H = g.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  H.addBinding(r, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (a) => a.toExponential(3)
  });
  H.addBinding(r, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (a) => a.toExponential(3)
  });
  H.addBinding(r, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (a) => a.toFixed(0)
  });
  H.addBinding(r, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: O
  });
  const q = g.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  q.addBinding(r, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  q.addBinding(r, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  q.addBinding(r, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (a) => a.toFixed(0)
  });
  q.addBinding(r, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: O
  });
  const ut = g.addFolder({
    title: "DG-1 espesor placa"
  });
  ut.addBinding(r, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (a) => a.toFixed(4)
  });
  ut.addBinding(r, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (a) => (a * 1e3).toFixed(1)
  });
  ut.addBinding(r, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: O
  });
  const ht = g.addFolder({
    title: "ACI \xA717 anclaje"
  });
  ht.addBinding(r, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (a) => a.toFixed(1)
  });
  ht.addBinding(r, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (a) => a.toFixed(1)
  });
  ht.addBinding(r, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: O
  });
  const ke = g.addFolder({
    title: "FEM"
  });
  ke.addBinding(r, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (a) => a.toExponential(3)
  });
  const se = g.addFolder({
    title: "Unidades",
    expanded: false
  }), ne = {
    stress: Rt.val,
    disp: $t.val
  };
  se.addBinding(ne, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (a) => {
    Rt.val = a.value;
  });
  se.addBinding(ne, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (a) => {
    $t.val = a.value;
  });
  document.body.append(pt);
  s.derive(() => {
    const a = ae.val;
    Object.assign(r, a), g.refresh();
  });
  document.body.append(Ie(l), oe, Te({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => ze(), 200);
  setTimeout(() => {
    var _a;
    const a = oe.__ctx;
    (a == null ? void 0 : a.camera) && (a == null ? void 0 : a.controls) && (a.camera.up.set(0, 0, 1), a.camera.position.set(2, -2, 1.2), a.controls.target.set(0, 0, 0.25), a.controls.update(), (_a = a.render) == null ? void 0 : _a.call(a));
  }, 800);
});
