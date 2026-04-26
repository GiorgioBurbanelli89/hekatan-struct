import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as n, P as we } from "./theme-2eEBQPmF.js";
import { M as ze, C as Ae, b as Ce } from "./Text-DyNVkyur.js";
import { a as Se } from "./analyze-BydHtRcI.js";
import { d as Te, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Fe, a as Rt, e as Vt } from "./getViewer-DnVmZy1T.js";
import { e as Ie } from "./makeDraggable-zx2br6Yh.js";
import { g as Ne } from "./getParameters-CIJBOwMB.js";
import { g as je } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const pt = 2e8, ut = 0.3, Xt = pt / (2 * (1 + ut)), $t = 78, ke = 25e4, Le = 6e5, i = {
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
  }, Wt = n.state([]), Zt = n.state([]), Kt = n.state({}), Qt = n.state({}), te = n.state({}), ee = n.state({}), ae = n.state([]), se = n.state({
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
    const s = i.B.value.val, y = i.H.value.val, xt = i.t_plate.value.val, m = i.bc.value.val, p = i.hc.value.val, E = i.t_col.value.val, Mt = i.L_col.value.val, _t = Math.round(i.nBoltsX.value.val), at = Math.round(i.nBoltsY.value.val), st = i.sx.value.val, yt = i.sy.value.val, g = i.d_bolt.value.val, H = i.L_bolt.value.val, ot = i.L_proj.value.val, q = i.B_ped.value.val, G = i.H_ped.value.val, nt = i.h_ped.value.val, lt = i.fc.value.val, D = i.Pu.value.val, gt = i.Mu.value.val, F = Math.round(i.nx.value.val), I = Math.round(i.ny.value.val), f = Math.round(i.nz_col.value.val), u = [], b = [], Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
    function x(t, e, a) {
      return u.push([
        t,
        e,
        a
      ]), u.length - 1;
    }
    function N(t, e, a, o, c) {
      b.push([
        t,
        e,
        a,
        o
      ]);
      const l = b.length - 1;
      Y.set(l, c), J.set(l, pt), U.set(l, ut), X.set(l, $t), $.set(l, Xt), R.set(l, 0), W.set(l, 0), V.set(l, 0), Z.set(l, 0);
    }
    function Pt(t, e, a, o, c) {
      b.push([
        t,
        e
      ]);
      const l = b.length - 1;
      J.set(l, pt), U.set(l, ut), X.set(l, $t), $.set(l, Xt), R.set(l, a), W.set(l, o), V.set(l, o), Z.set(l, c), Y.set(l, 0);
    }
    const Bt = s / F, wt = y / I, P = [];
    for (let t = 0; t <= I; t++) {
      const e = [];
      for (let a = 0; a <= F; a++) e.push(x(-s / 2 + a * Bt, -y / 2 + t * wt, 0));
      P.push(e);
    }
    for (let t = 0; t < I; t++) for (let e = 0; e < F; e++) N(P[t][e], P[t][e + 1], P[t + 1][e + 1], P[t + 1][e], xt);
    function j(t, e) {
      let a = -1, o = 1 / 0;
      for (let c = 0; c <= I; c++) for (let l = 0; l <= F; l++) {
        const h = P[c][l], C = Math.hypot(u[h][0] - t, u[h][1] - e);
        C < o && (o = C, a = h);
      }
      return a;
    }
    const B = Math.max(2, Math.round(m / Bt)), w = Math.max(2, Math.round(p / wt)), zt = m / B, At = p / w, K = Mt / f, z = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= B; a++) {
        const o = -m / 2 + a * zt;
        t === 0 ? e.push(j(o, -p / 2)) : e.push(x(o, -p / 2, t * K));
      }
      z.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < B; e++) N(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], E);
    const A = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= B; a++) {
        const o = -m / 2 + a * zt;
        t === 0 ? e.push(j(o, p / 2)) : e.push(x(o, p / 2, t * K));
      }
      A.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < B; e++) N(A[t][e], A[t][e + 1], A[t + 1][e + 1], A[t + 1][e], E);
    const k = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= w; a++) {
        const o = -p / 2 + a * At;
        t === 0 ? e.push(j(-m / 2, o)) : a === 0 ? e.push(z[t][0]) : a === w ? e.push(A[t][0]) : e.push(x(-m / 2, o, t * K));
      }
      k.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < w; e++) N(k[t][e], k[t][e + 1], k[t + 1][e + 1], k[t + 1][e], E);
    const L = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= w; a++) {
        const o = -p / 2 + a * At;
        t === 0 ? e.push(j(m / 2, o)) : a === 0 ? e.push(z[t][B]) : a === w ? e.push(A[t][B]) : e.push(x(m / 2, o, t * K));
      }
      L.push(e);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < w; e++) N(L[t][e], L[t][e + 1], L[t + 1][e + 1], L[t + 1][e], E);
    const Ct = Math.PI * g * g / 4, ct = Math.PI * g ** 4 / 64, St = 2 * ct, Q = [], ce = (s - 2 * st) / Math.max(1, _t - 1), re = (y - 2 * yt) / Math.max(1, at - 1);
    for (let t = 0; t < _t; t++) for (let e = 0; e < at; e++) {
      const a = -s / 2 + st + t * ce, o = -y / 2 + yt + e * re;
      Math.abs(a) < m / 2 + 5e-3 && Math.abs(o) < p / 2 + 5e-3 || Q.push([
        a,
        o
      ]);
    }
    for (const [t, e] of Q) {
      const a = x(t, e, ot), o = j(t, e), c = x(t, e, -H);
      Pt(a, o, Ct, ct, St), Pt(o, c, Ct, ct, St);
    }
    const Tt = 4700 * Math.sqrt(lt / 1e3) * 1e3, Ft = 0.2, ie = Tt / (2 * (1 + Ft)), M = 6, _ = 6, v = 4, It = q / M, Nt = G / _, de = nt / v, jt = [];
    for (let t = 0; t <= I; t++) for (let e = 0; e <= F; e++) {
      const a = P[t][e];
      jt.push({
        id: a,
        x: u[a][0],
        y: u[a][1]
      });
    }
    function me(t, e, a, o) {
      if (o) {
        let c = -1, l = 1 / 0;
        for (const h of jt) {
          const C = Math.hypot(h.x - t, h.y - e);
          C < l && (l = C, c = h.id);
        }
        if (c >= 0) return c;
      }
      return x(t, e, a);
    }
    const r = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= _; a++) {
        const o = [];
        for (let c = 0; c <= M; c++) {
          const l = -q / 2 + c * It, h = -G / 2 + a * Nt, C = -nt + t * de, Pe = t === v, Be = Math.abs(l) <= s / 2 + 1e-6 && Math.abs(h) <= y / 2 + 1e-6;
          o.push(me(l, h, C, Pe && Be));
        }
        e.push(o);
      }
      r.push(e);
    }
    function S(t, e, a, o) {
      b.push([
        t,
        e,
        a,
        o
      ]);
      const c = b.length - 1;
      Y.set(c, 1e-3), J.set(c, Tt), U.set(c, Ft), X.set(c, 24 / 9.80665), $.set(c, ie), R.set(c, 0), W.set(c, 0), V.set(c, 0), Z.set(c, 0);
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < M; e++) {
      S(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
      const a = -q / 2 + (e + 0.5) * It, o = -G / 2 + (t + 0.5) * Nt;
      Math.abs(a) <= s / 2 && Math.abs(o) <= y / 2 || S(r[v][t][e], r[v][t][e + 1], r[v][t + 1][e + 1], r[v][t + 1][e]);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < M; e++) S(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]), S(r[t][_][e], r[t][_][e + 1], r[t + 1][_][e + 1], r[t + 1][_][e]);
    for (let t = 0; t < v; t++) for (let e = 0; e < _; e++) S(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]), S(r[t][e][M], r[t][e + 1][M], r[t + 1][e + 1][M], r[t + 1][e][M]);
    const kt = /* @__PURE__ */ new Map();
    u.forEach((t, e) => {
      const a = Math.abs(t[2] - -H) < 1e-6 && Q.some(([c, l]) => Math.abs(t[0] - c) < 1e-6 && Math.abs(t[1] - l) < 1e-6), o = Math.abs(t[2] - -nt) < 1e-6;
      (a || o) && kt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const tt = [];
    u.forEach((t, e) => {
      Math.abs(t[2] - Mt) < 1e-6 && Math.abs(t[0]) <= m / 2 + 1e-6 && Math.abs(t[1]) <= p / 2 + 1e-6 && tt.push(e);
    });
    const pe = -D / Math.max(1, tt.length), ue = gt / Math.max(1, tt.length), Lt = /* @__PURE__ */ new Map();
    for (const t of tt) Lt.set(t, [
      0,
      0,
      pe,
      0,
      ue,
      0
    ]);
    const Ot = {
      supports: kt,
      loads: Lt
    }, rt = {
      elasticities: J,
      shearModuli: $,
      areas: R,
      momentsOfInertiaZ: V,
      momentsOfInertiaY: W,
      torsionalConstants: Z,
      densities: X,
      poissonsRatios: U,
      thicknesses: Y
    };
    let it = {}, dt = {};
    try {
      it = Te(u, b, Ot, rt), dt = Se(u, b, rt, it);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const Et = [], he = new ze({
      color: 6710886,
      metalness: 0.5
    });
    for (const [t, e] of Q) {
      const a = new Ae(g / 2, g / 2, H + ot, 12), o = new Ce(a, he);
      o.position.set(t, e, (-H + ot) / 2), o.rotation.x = Math.PI / 2, Et.push(o);
    }
    let mt = 0;
    const Ht = dt == null ? void 0 : dt.vonMises;
    Ht && Ht.forEach((t) => t.forEach((e) => {
      e > mt && (mt = e);
    }));
    const fe = 0.65, O = s * y, qt = q * G, be = Math.min(2, Math.sqrt(qt / O)), ve = Math.min(0.85 * lt * O * be, 1.7 * lt * O), Gt = fe * ve, xe = D / Math.max(1, Gt), Dt = Math.max(0, (s - 0.95 * Math.max(m, p)) / 2), Me = D / O, Yt = Dt * Math.sqrt(2 * Math.max(0, Me) / (0.9 * ke)), _e = Yt / Math.max(1e-6, xt), ye = Math.max(0.05, s - 2 * st), Jt = Math.max(0, gt / ye - D / 2) / Math.max(1, at), Ut = 0.75 * (0.75 * Math.PI * g * g / 4) * Le, ge = Jt / Math.max(1, Ut);
    se.val = {
      vmMax: mt,
      A1: O,
      A2: qt,
      phiPp: Gt,
      demandCapPp: xe,
      m_cant: Dt,
      t_req: Yt,
      demandCapT: _e,
      T_anchor: Jt,
      phiNn: Ut,
      demandCapAnchor: ge
    }, Wt.val = u, Zt.val = b, Kt.val = Ot, Qt.val = rt, te.val = it, ee.val = dt, ae.val = Et;
  });
  const oe = Fe({
    mesh: {
      nodes: Wt,
      elements: Zt,
      nodeInputs: Kt,
      elementInputs: Qt,
      deformOutputs: te,
      analyzeOutputs: ee
    },
    objects3D: ae,
    settingsObj: {
      deformedShape: true,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 20,
      custom3D: true,
      loads: true,
      supports: false,
      displayScale: 0.2
    }
  }), ht = document.createElement("div");
  ht.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const T = new we({
    title: "\u{1F9EA} Placa base + col HSS hueca",
    container: ht,
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
  }, ft = (s) => s < 1 ? `${s.toFixed(2)} \u2713` : s < 1.2 ? `${s.toFixed(2)} \u26A0` : `${s.toFixed(2)} \u2717`, et = T.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  et.addBinding(d, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  et.addBinding(d, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  et.addBinding(d, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (s) => s.toFixed(0)
  });
  et.addBinding(d, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: ft
  });
  const bt = T.addFolder({
    title: "DG-1 espesor placa"
  });
  bt.addBinding(d, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (s) => s.toFixed(4)
  });
  bt.addBinding(d, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (s) => (s * 1e3).toFixed(1)
  });
  bt.addBinding(d, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: ft
  });
  const vt = T.addFolder({
    title: "ACI \xA717 anclaje"
  });
  vt.addBinding(d, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (s) => s.toFixed(1)
  });
  vt.addBinding(d, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (s) => s.toFixed(1)
  });
  vt.addBinding(d, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: ft
  });
  const Oe = T.addFolder({
    title: "FEM"
  });
  Oe.addBinding(d, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (s) => s.toExponential(3)
  });
  const ne = T.addFolder({
    title: "Unidades",
    expanded: false
  }), le = {
    stress: Vt.val,
    disp: Rt.val
  };
  ne.addBinding(le, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (s) => {
    Vt.val = s.value;
  });
  ne.addBinding(le, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (s) => {
    Rt.val = s.value;
  });
  document.body.append(ht);
  n.derive(() => {
    const s = se.val;
    Object.assign(d, s), T.refresh();
  });
  document.body.append(Ne(i), oe, je({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-hueca/main.ts"
  }));
  setTimeout(() => Ie(), 200);
  setTimeout(() => {
    var _a;
    const s = oe.__ctx;
    (s == null ? void 0 : s.camera) && (s == null ? void 0 : s.controls) && (s.camera.up.set(0, 0, 1), s.camera.position.set(2, -2, 1.2), s.controls.target.set(0, 0, 0.25), s.controls.update(), (_a = s.render) == null ? void 0 : _a.call(s));
  }, 800);
});
