import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as n, P as Te } from "./theme-2eEBQPmF.js";
import { M as Rt, b as Vt, c as Se, C as je } from "./Text-DyNVkyur.js";
import { a as Ne } from "./analyze-BydHtRcI.js";
import { d as Ee, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Le, a as Kt, e as Qt } from "./getViewer-DnVmZy1T.js";
import { e as Oe } from "./makeDraggable-zx2br6Yh.js";
import { g as qe } from "./getParameters-CIJBOwMB.js";
import { g as He } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const bt = 2e8, xt = 0.3, Wt = bt / (2 * (1 + xt)), Zt = 78, Ge = 25e4, De = 6e5, r = {
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
      label: "Pu (kN)"
    },
    Mu: {
      value: n.state(30),
      min: 0,
      max: 800,
      step: 5,
      label: "Mu (kN\xB7m)"
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
  }, te = n.state([]), ee = n.state([]), ae = n.state({}), oe = n.state({}), se = n.state({}), ne = n.state({}), le = n.state([]), ce = n.state({
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
  n.derive(() => {
    const a = r.B.value.val, z = r.H.value.val, gt = r.t_plate.value.val, m = r.bc.value.val, p = r.hc.value.val, _ = r.t_col.value.val, L = r.L_col.value.val, Pt = Math.round(r.nBoltsX.value.val), at = Math.round(r.nBoltsY.value.val), ot = r.sx.value.val, At = r.sy.value.val, y = r.d_bolt.value.val, st = r.L_bolt.value.val, nt = r.L_proj.value.val, lt = r.B_ped.value.val, ct = r.H_ped.value.val, rt = r.h_ped.value.val, O = r.fc.value.val, k = r.Pu.value.val, Bt = r.Mu.value.val, q = Math.round(r.nx.value.val), H = Math.round(r.ny.value.val), v = Math.round(r.nz_col.value.val), b = [], x = [], G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
    function M(t, e, o) {
      return b.push([
        t,
        e,
        o
      ]), b.length - 1;
    }
    function I(t, e, o, s, i) {
      x.push([
        t,
        e,
        o,
        s
      ]);
      const c = x.length - 1;
      G.set(c, i), D.set(c, bt), Y.set(c, xt), J.set(c, Zt), U.set(c, Wt), X.set(c, 0), R.set(c, 0), $.set(c, 0), V.set(c, 0);
    }
    function wt(t, e, o, s, i) {
      x.push([
        t,
        e
      ]);
      const c = x.length - 1;
      D.set(c, bt), Y.set(c, xt), J.set(c, Zt), U.set(c, Wt), X.set(c, o), R.set(c, s), $.set(c, s), V.set(c, i), G.set(c, 0);
    }
    const Ct = a / q, Ft = z / H, C = [];
    for (let t = 0; t <= H; t++) {
      const e = [];
      for (let o = 0; o <= q; o++) e.push(M(-a / 2 + o * Ct, -z / 2 + t * Ft, 0));
      C.push(e);
    }
    for (let t = 0; t < H; t++) for (let e = 0; e < q; e++) I(C[t][e], C[t][e + 1], C[t + 1][e + 1], C[t + 1][e], gt);
    function T(t, e) {
      let o = -1, s = 1 / 0;
      for (let i = 0; i <= H; i++) for (let c = 0; c <= q; c++) {
        const E = C[i][c], K = Math.hypot(b[E][0] - t, b[E][1] - e);
        K < s && (s = K, o = E);
      }
      return o;
    }
    const g = Math.max(2, Math.round(m / Ct)), P = Math.max(2, Math.round(p / Ft)), zt = m / g, kt = p / P, W = L / v, A = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let o = 0; o <= g; o++) {
        const s = -m / 2 + o * zt;
        t === 0 ? e.push(T(s, -p / 2)) : e.push(M(s, -p / 2, t * W));
      }
      A.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < g; e++) I(A[t][e], A[t][e + 1], A[t + 1][e + 1], A[t + 1][e], _);
    const B = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let o = 0; o <= g; o++) {
        const s = -m / 2 + o * zt;
        t === 0 ? e.push(T(s, p / 2)) : e.push(M(s, p / 2, t * W));
      }
      B.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < g; e++) I(B[t][e], B[t][e + 1], B[t + 1][e + 1], B[t + 1][e], _);
    const S = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let o = 0; o <= P; o++) {
        const s = -p / 2 + o * kt;
        t === 0 ? e.push(T(-m / 2, s)) : o === 0 ? e.push(A[t][0]) : o === P ? e.push(B[t][0]) : e.push(M(-m / 2, s, t * W));
      }
      S.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < P; e++) I(S[t][e], S[t][e + 1], S[t + 1][e + 1], S[t + 1][e], _);
    const j = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let o = 0; o <= P; o++) {
        const s = -p / 2 + o * kt;
        t === 0 ? e.push(T(m / 2, s)) : o === 0 ? e.push(A[t][g]) : o === P ? e.push(B[t][g]) : e.push(M(m / 2, s, t * W));
      }
      j.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < P; e++) I(j[t][e], j[t][e + 1], j[t + 1][e + 1], j[t + 1][e], _);
    const It = Math.PI * y * y / 4, it = Math.PI * y ** 4 / 64, Tt = 2 * it, dt = [], me = (a - 2 * ot) / Math.max(1, Pt - 1), pe = (z - 2 * At) / Math.max(1, at - 1);
    for (let t = 0; t < Pt; t++) for (let e = 0; e < at; e++) {
      const o = -a / 2 + ot + t * me, s = -z / 2 + At + e * pe;
      Math.abs(o) < m / 2 + 5e-3 && Math.abs(s) < p / 2 + 5e-3 || dt.push([
        o,
        s
      ]);
    }
    for (const [t, e] of dt) {
      const o = M(t, e, nt), s = T(t, e), i = M(t, e, -st);
      wt(o, s, It, it, Tt), wt(s, i, It, it, Tt);
    }
    const St = 4700 * Math.sqrt(O / 1e3) * 1e3, jt = 0.2, ue = St / (2 * (1 + jt)), u = 6, h = 6, f = 4, he = lt / u, fe = ct / h, ve = rt / f, l = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let o = 0; o <= h; o++) {
        const s = [];
        for (let i = 0; i <= u; i++) {
          const c = -lt / 2 + i * he, E = -ct / 2 + o * fe, K = -rt + t * ve;
          s.push(M(c, E, K));
        }
        e.push(s);
      }
      l.push(e);
    }
    function F(t, e, o, s) {
      x.push([
        t,
        e,
        o,
        s
      ]);
      const i = x.length - 1;
      G.set(i, 1e-3), D.set(i, St), Y.set(i, jt), J.set(i, 24 / 9.80665), U.set(i, ue), X.set(i, 0), R.set(i, 0), $.set(i, 0), V.set(i, 0);
    }
    for (let t = 0; t < h; t++) for (let e = 0; e < u; e++) F(l[0][t][e], l[0][t][e + 1], l[0][t + 1][e + 1], l[0][t + 1][e]);
    for (let t = 0; t < h; t++) for (let e = 0; e < u; e++) F(l[f][t][e], l[f][t][e + 1], l[f][t + 1][e + 1], l[f][t + 1][e]);
    for (let t = 0; t < f; t++) for (let e = 0; e < u; e++) F(l[t][0][e], l[t][0][e + 1], l[t + 1][0][e + 1], l[t + 1][0][e]);
    for (let t = 0; t < f; t++) for (let e = 0; e < u; e++) F(l[t][h][e], l[t][h][e + 1], l[t + 1][h][e + 1], l[t + 1][h][e]);
    for (let t = 0; t < f; t++) for (let e = 0; e < h; e++) F(l[t][e][0], l[t][e + 1][0], l[t + 1][e + 1][0], l[t + 1][e][0]);
    for (let t = 0; t < f; t++) for (let e = 0; e < h; e++) F(l[t][e][u], l[t][e + 1][u], l[t + 1][e + 1][u], l[t + 1][e][u]);
    const Nt = /* @__PURE__ */ new Map();
    b.forEach((t, e) => {
      Math.abs(t[2] - -rt) < 1e-6 && Nt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const Z = [];
    b.forEach((t, e) => {
      Math.abs(t[2] - L) < 1e-6 && Math.abs(t[0]) <= m / 2 + 1e-6 && Math.abs(t[1]) <= p / 2 + 1e-6 && Z.push(e);
    });
    const be = -k / Math.max(1, Z.length), xe = Bt / Math.max(1, Z.length), Et = /* @__PURE__ */ new Map();
    for (const t of Z) Et.set(t, [
      0,
      0,
      be,
      0,
      xe,
      0
    ]);
    const Lt = {
      supports: Nt,
      loads: Et
    }, mt = {
      elasticities: D,
      shearModuli: U,
      areas: X,
      momentsOfInertiaZ: $,
      momentsOfInertiaY: R,
      torsionalConstants: V,
      densities: J,
      poissonsRatios: Y,
      thicknesses: G
    };
    let pt = {}, ut = {};
    try {
      pt = Ee(b, x, Lt, mt), ut = Ne(b, x, mt, pt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const ht = [], _e = new Rt({
      color: 6710886,
      metalness: 0.5
    }), Me = new Rt({
      color: 11180390,
      transparent: true,
      opacity: 0.55
    }), Ot = new Vt(new Se(m - 2 * _, p - 2 * _, L), Me);
    Ot.position.set(0, 0, L / 2), ht.push(Ot);
    for (const [t, e] of dt) {
      const o = new je(y / 2, y / 2, st + nt, 12), s = new Vt(o, _e);
      s.position.set(t, e, (-st + nt) / 2), s.rotation.x = Math.PI / 2, ht.push(s);
    }
    let ft = 0;
    const qt = ut == null ? void 0 : ut.vonMises;
    qt && qt.forEach((t) => t.forEach((e) => {
      e > ft && (ft = e);
    }));
    const ye = 0.65, N = a * z, Ht = lt * ct, ge = Math.min(2, Math.sqrt(Ht / N)), Pe = Math.min(0.85 * O * N * ge, 1.7 * O * N), Gt = ye * Pe, Ae = k / Math.max(1, Gt), Dt = Math.max(0, (a - 0.95 * Math.max(m, p)) / 2), Be = k / N, Yt = Dt * Math.sqrt(2 * Math.max(0, Be) / (0.9 * Ge)), we = Yt / Math.max(1e-6, gt), Ce = Math.max(0.05, a - 2 * ot), Jt = Math.max(0, Bt / Ce - k / 2) / Math.max(1, at), Ut = 0.75 * (0.75 * Math.PI * y * y / 4) * De, Fe = Jt / Math.max(1, Ut), ze = m * p, vt = (m - 2 * _) * (p - 2 * _), Xt = ze - vt, $t = 35e4 * Xt + 0.85 * O * vt, ke = 0.75 * $t, Ie = k / Math.max(1, ke);
    ce.val = {
      vmMax: ft,
      A1: N,
      A2: Ht,
      phiPp: Gt,
      demandCapPp: Ae,
      m_cant: Dt,
      t_req: Yt,
      demandCapT: we,
      T_anchor: Jt,
      phiNn: Ut,
      demandCapAnchor: Fe,
      As: Xt,
      Ac: vt,
      Pno_composite: $t,
      demandCapPno: Ie
    }, te.val = b, ee.val = x, ae.val = Lt, oe.val = mt, se.val = pt, ne.val = ut, le.val = ht;
  });
  const re = Le({
    mesh: {
      nodes: te,
      elements: ee,
      nodeInputs: ae,
      elementInputs: oe,
      deformOutputs: se,
      analyzeOutputs: ne
    },
    objects3D: le,
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
  }), _t = document.createElement("div");
  _t.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const w = new Te({
    title: "\u{1F9EA} Placa base + col CFT",
    container: _t,
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
    demandCapAnchor: 0,
    As: 0,
    Ac: 0,
    Pno_composite: 0,
    demandCapPno: 0
  }, Q = (a) => a < 1 ? `${a.toFixed(2)} \u2713` : a < 1.2 ? `${a.toFixed(2)} \u26A0` : `${a.toFixed(2)} \u2717`, tt = w.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  tt.addBinding(d, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (a) => a.toExponential(3)
  });
  tt.addBinding(d, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (a) => a.toExponential(3)
  });
  tt.addBinding(d, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (a) => a.toFixed(0)
  });
  tt.addBinding(d, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: Q
  });
  const et = w.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  et.addBinding(d, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  et.addBinding(d, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  et.addBinding(d, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (a) => a.toFixed(0)
  });
  et.addBinding(d, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: Q
  });
  const Mt = w.addFolder({
    title: "DG-1 espesor placa"
  });
  Mt.addBinding(d, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (a) => a.toFixed(4)
  });
  Mt.addBinding(d, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (a) => (a * 1e3).toFixed(1)
  });
  Mt.addBinding(d, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: Q
  });
  const yt = w.addFolder({
    title: "ACI \xA717 anclaje"
  });
  yt.addBinding(d, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (a) => a.toFixed(1)
  });
  yt.addBinding(d, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (a) => a.toFixed(1)
  });
  yt.addBinding(d, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: Q
  });
  const Ye = w.addFolder({
    title: "FEM"
  });
  Ye.addBinding(d, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (a) => a.toExponential(3)
  });
  const ie = w.addFolder({
    title: "Unidades",
    expanded: false
  }), de = {
    stress: Qt.val,
    disp: Kt.val
  };
  ie.addBinding(de, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (a) => {
    Qt.val = a.value;
  });
  ie.addBinding(de, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (a) => {
    Kt.val = a.value;
  });
  document.body.append(_t);
  n.derive(() => {
    const a = ce.val;
    Object.assign(d, a), w.refresh();
  });
  document.body.append(qe(r), re, He({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => Oe(), 200);
  setTimeout(() => {
    var _a;
    const a = re.__ctx;
    (a == null ? void 0 : a.camera) && (a == null ? void 0 : a.controls) && (a.camera.up.set(0, 0, 1), a.camera.position.set(2, -2, 1.2), a.controls.target.set(0, 0, 0.25), a.controls.update(), (_a = a.render) == null ? void 0 : _a.call(a));
  }, 800);
});
