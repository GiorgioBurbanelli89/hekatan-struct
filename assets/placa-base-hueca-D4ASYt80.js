import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as Ge } from "./theme-2eEBQPmF.js";
import { M as se, C as oe, b as ne } from "./Text-DyNVkyur.js";
import { a as De } from "./analyze-BydHtRcI.js";
import { d as Ye, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Je, a as ie, e as re } from "./getViewer-DnVmZy1T.js";
import { e as Ue } from "./makeDraggable-zx2br6Yh.js";
import { g as Xe } from "./getParameters-CIJBOwMB.js";
import { g as $e } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const yt = 2e8, gt = 0.3, le = yt / (2 * (1 + gt)), ce = 78, Re = 25e4, Ve = 6e5, r = {
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
  }, de = l.state([]), pe = l.state([]), me = l.state({}), ue = l.state({}), he = l.state({}), fe = l.state({}), ve = l.state([]), xe = l.state({
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
    const s = r.B.value.val, P = r.H.value.val, At = r.t_plate.value.val, u = r.bc.value.val, h = r.hc.value.val, H = r.t_col.value.val, Ct = r.L_col.value.val, Nt = Math.round(r.nBoltsX.value.val), st = Math.round(r.nBoltsY.value.val), ot = r.sx.value.val, It = r.sy.value.val, v = r.d_bolt.value.val, nt = r.L_bolt.value.val, G = r.L_proj.value.val, D = r.B_ped.value.val, Y = r.H_ped.value.val, lt = r.h_ped.value.val, ct = r.fc.value.val, J = r.Pu.value.val, it = r.Mx.value.val, rt = r.My.value.val, T = Math.round(r.nx.value.val), k = Math.round(r.ny.value.val), x = Math.round(r.nz_col.value.val), d = [], b = [], U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
    function g(t, e, a) {
      return d.push([
        t,
        e,
        a
      ]), d.length - 1;
    }
    function j(t, e, a, o, c) {
      b.push([
        t,
        e,
        a,
        o
      ]);
      const n = b.length - 1;
      U.set(n, c), X.set(n, yt), $.set(n, gt), R.set(n, ce), V.set(n, le), Z.set(n, 0), K.set(n, 0), W.set(n, 0), Q.set(n, 0);
    }
    function St(t, e, a, o, c) {
      b.push([
        t,
        e
      ]);
      const n = b.length - 1;
      X.set(n, yt), $.set(n, gt), R.set(n, ce), V.set(n, le), Z.set(n, a), K.set(n, o), W.set(n, o), Q.set(n, c), U.set(n, 0);
    }
    const Tt = s / T, kt = P / k, w = [];
    for (let t = 0; t <= k; t++) {
      const e = [];
      for (let a = 0; a <= T; a++) e.push(g(-s / 2 + a * Tt, -P / 2 + t * kt, 0));
      w.push(e);
    }
    for (let t = 0; t < k; t++) for (let e = 0; e < T; e++) j(w[t][e], w[t][e + 1], w[t + 1][e + 1], w[t + 1][e], At);
    function F(t, e) {
      let a = -1, o = 1 / 0;
      for (let c = 0; c <= k; c++) for (let n = 0; n <= T; n++) {
        const p = w[c][n], y = Math.hypot(d[p][0] - t, d[p][1] - e);
        y < o && (o = y, a = p);
      }
      return a;
    }
    const B = Math.max(2, Math.round(u / Tt)), z = Math.max(2, Math.round(h / kt)), jt = u / B, Ft = h / z, tt = Ct / x, A = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= B; a++) {
        const o = -u / 2 + a * jt;
        t === 0 ? e.push(F(o, -h / 2)) : e.push(g(o, -h / 2, t * tt));
      }
      A.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < B; e++) j(A[t][e], A[t][e + 1], A[t + 1][e + 1], A[t + 1][e], H);
    const C = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= B; a++) {
        const o = -u / 2 + a * jt;
        t === 0 ? e.push(F(o, h / 2)) : e.push(g(o, h / 2, t * tt));
      }
      C.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < B; e++) j(C[t][e], C[t][e + 1], C[t + 1][e + 1], C[t + 1][e], H);
    const L = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= z; a++) {
        const o = -h / 2 + a * Ft;
        t === 0 ? e.push(F(-u / 2, o)) : a === 0 ? e.push(A[t][0]) : a === z ? e.push(C[t][0]) : e.push(g(-u / 2, o, t * tt));
      }
      L.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < z; e++) j(L[t][e], L[t][e + 1], L[t + 1][e + 1], L[t + 1][e], H);
    const O = [];
    for (let t = 0; t <= x; t++) {
      const e = [];
      for (let a = 0; a <= z; a++) {
        const o = -h / 2 + a * Ft;
        t === 0 ? e.push(F(u / 2, o)) : a === 0 ? e.push(A[t][B]) : a === z ? e.push(C[t][B]) : e.push(g(u / 2, o, t * tt));
      }
      O.push(e);
    }
    for (let t = 0; t < x; t++) for (let e = 0; e < z; e++) j(O[t][e], O[t][e + 1], O[t + 1][e + 1], O[t + 1][e], H);
    const Lt = Math.PI * v * v / 4, dt = Math.PI * v ** 4 / 64, Ot = 2 * dt, pt = [], ye = (s - 2 * ot) / Math.max(1, Nt - 1), ge = (P - 2 * It) / Math.max(1, st - 1);
    for (let t = 0; t < Nt; t++) for (let e = 0; e < st; e++) {
      const a = -s / 2 + ot + t * ye, o = -P / 2 + It + e * ge;
      Math.abs(a) < u / 2 + 5e-3 && Math.abs(o) < h / 2 + 5e-3 || pt.push([
        a,
        o
      ]);
    }
    const qt = 4700 * Math.sqrt(ct / 1e3) * 1e3, Et = 0.2, Pe = qt / (2 * (1 + Et)), M = 10, _ = 10, f = 6, Ht = D / M, Gt = Y / _, we = lt / f, Dt = [];
    for (let t = 0; t <= k; t++) for (let e = 0; e <= T; e++) {
      const a = w[t][e];
      Dt.push({
        id: a,
        x: d[a][0],
        y: d[a][1]
      });
    }
    const i = [];
    for (let t = 0; t <= f; t++) {
      const e = [];
      for (let a = 0; a <= _; a++) {
        const o = [];
        for (let c = 0; c <= M; c++) {
          const n = -D / 2 + c * Ht, p = -Y / 2 + a * Gt, y = -lt + t * we, et = t === f, E = Math.abs(n) <= s / 2 + 1e-6 && Math.abs(p) <= P / 2 + 1e-6;
          let I;
          if (et && E) {
            let Mt = -1, ee = 1 / 0;
            for (const _t of Dt) {
              const ae = Math.hypot(_t.x - n, _t.y - p);
              ae < ee && (ee = ae, Mt = _t.id);
            }
            I = Mt >= 0 ? Mt : g(n, p, y);
          } else I = g(n, p, y);
          o.push(I);
        }
        e.push(o);
      }
      i.push(e);
    }
    function Be(t, e, a) {
      let o = -1, c = 1 / 0;
      for (let n = 0; n <= f; n++) for (let p = 0; p <= _; p++) for (let y = 0; y <= M; y++) {
        const et = i[n][p][y], E = d[et], I = Math.hypot(E[0] - t, E[1] - e) + Math.abs(E[2] - a) * 0.5;
        I < c && (c = I, o = et);
      }
      return o;
    }
    for (const [t, e] of pt) {
      const a = g(t, e, G), o = F(t, e), c = Be(t, e, -nt);
      St(a, o, Lt, dt, Ot), St(o, c, Lt, dt, Ot);
    }
    function N(t, e, a, o) {
      b.push([
        t,
        e,
        a,
        o
      ]);
      const c = b.length - 1;
      U.set(c, 1e-3), X.set(c, qt), $.set(c, Et), R.set(c, 24 / 9.80665), V.set(c, Pe), Z.set(c, 0), K.set(c, 0), W.set(c, 0), Q.set(c, 0);
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < M; e++) {
      N(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]);
      const a = -D / 2 + (e + 0.5) * Ht, o = -Y / 2 + (t + 0.5) * Gt;
      Math.abs(a) <= s / 2 && Math.abs(o) <= P / 2 || N(i[f][t][e], i[f][t][e + 1], i[f][t + 1][e + 1], i[f][t + 1][e]);
    }
    for (let t = 0; t < f; t++) for (let e = 0; e < M; e++) N(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]), N(i[t][_][e], i[t][_][e + 1], i[t + 1][_][e + 1], i[t + 1][_][e]);
    for (let t = 0; t < f; t++) for (let e = 0; e < _; e++) N(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]), N(i[t][e][M], i[t][e + 1][M], i[t + 1][e + 1][M], i[t + 1][e][M]);
    const Yt = /* @__PURE__ */ new Map();
    d.forEach((t, e) => {
      Math.abs(t[2] - -lt) < 1e-6 && Yt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const mt = [];
    d.forEach((t, e) => {
      Math.abs(t[2] - Ct) < 1e-6 && Math.abs(t[0]) <= u / 2 + 1e-6 && Math.abs(t[1]) <= h / 2 + 1e-6 && mt.push(e);
    });
    const ut = Math.max(1, mt.length), ze = -J / ut, Ae = it / ut, Ce = rt / ut, Jt = /* @__PURE__ */ new Map();
    for (const t of mt) Jt.set(t, [
      0,
      0,
      ze,
      Ae,
      Ce,
      0
    ]);
    const Ut = {
      supports: Yt,
      loads: Jt
    }, ht = {
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
    let ft = {}, vt = {};
    try {
      ft = Ye(d, b, Ut, ht), vt = De(d, b, ht, ft);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const xt = [], Ne = new se({
      color: 6710886,
      metalness: 0.5
    }), Ie = new se({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Xt = v * 0.8, $t = v * 0.85, Se = G + Xt / 2;
    for (const [t, e] of pt) {
      const a = new oe(v / 2, v / 2, nt + G, 12), o = new ne(a, Ne);
      o.position.set(t, e, (-nt + G) / 2), o.rotation.x = Math.PI / 2, xt.push(o);
      const c = new oe($t, $t, Xt, 6), n = new ne(c, Ie);
      n.position.set(t, e, Se), n.rotation.x = Math.PI / 2, xt.push(n);
    }
    let bt = 0;
    const Rt = vt == null ? void 0 : vt.vonMises;
    Rt && Rt.forEach((t) => t.forEach((e) => {
      e > bt && (bt = e);
    }));
    const Te = 0.65, q = s * P, Vt = D * Y, ke = Math.min(2, Math.sqrt(Vt / q)), je = Math.min(0.85 * ct * q * ke, 1.7 * ct * q), Zt = Te * je, Fe = J / Math.max(1, Zt), Wt = Math.max(0, (s - 0.95 * Math.max(u, h)) / 2), Le = J / q, Kt = Wt * Math.sqrt(2 * Math.max(0, Le) / (0.9 * Re)), Oe = Kt / Math.max(1e-6, At), qe = Math.max(0.05, s - 2 * ot), Ee = Math.sqrt(it * it + rt * rt), Qt = Math.max(0, Ee / qe - J / 2) / Math.max(1, st), te = 0.75 * (0.75 * Math.PI * v * v / 4) * Ve, He = Qt / Math.max(1, te);
    xe.val = {
      vmMax: bt,
      A1: q,
      A2: Vt,
      phiPp: Zt,
      demandCapPp: Fe,
      m_cant: Wt,
      t_req: Kt,
      demandCapT: Oe,
      T_anchor: Qt,
      phiNn: te,
      demandCapAnchor: He
    }, de.val = d, pe.val = b, me.val = Ut, ue.val = ht, he.val = ft, fe.val = vt, ve.val = xt;
  });
  const be = Je({
    mesh: {
      nodes: de,
      elements: pe,
      nodeInputs: me,
      elementInputs: ue,
      deformOutputs: he,
      analyzeOutputs: fe
    },
    objects3D: ve,
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
  const S = new Ge({
    title: "\u{1F9EA} Placa base + col HSS hueca",
    container: Pt,
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
    demandCapAnchor: 0
  }, wt = (s) => s < 1 ? `${s.toFixed(2)} \u2713` : s < 1.2 ? `${s.toFixed(2)} \u26A0` : `${s.toFixed(2)} \u2717`, at = S.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  at.addBinding(m, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  at.addBinding(m, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  at.addBinding(m, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (s) => s.toFixed(0)
  });
  at.addBinding(m, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: wt
  });
  const Bt = S.addFolder({
    title: "DG-1 espesor placa"
  });
  Bt.addBinding(m, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (s) => s.toFixed(4)
  });
  Bt.addBinding(m, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (s) => (s * 1e3).toFixed(1)
  });
  Bt.addBinding(m, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: wt
  });
  const zt = S.addFolder({
    title: "ACI \xA717 anclaje"
  });
  zt.addBinding(m, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (s) => s.toFixed(1)
  });
  zt.addBinding(m, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (s) => s.toFixed(1)
  });
  zt.addBinding(m, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: wt
  });
  const Ze = S.addFolder({
    title: "FEM"
  });
  Ze.addBinding(m, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (s) => s.toExponential(3)
  });
  const Me = S.addFolder({
    title: "Unidades",
    expanded: false
  }), _e = {
    stress: re.val,
    disp: ie.val
  };
  Me.addBinding(_e, "stress", {
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
  Me.addBinding(_e, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (s) => {
    ie.val = s.value;
  });
  document.body.append(Pt);
  l.derive(() => {
    const s = xe.val;
    Object.assign(m, s), S.refresh();
  });
  document.body.append(Xe(r), be, $e({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-hueca/main.ts"
  }));
  setTimeout(() => Ue(), 200);
  setTimeout(() => {
    var _a;
    const s = be.__ctx;
    (s == null ? void 0 : s.camera) && (s == null ? void 0 : s.controls) && (s.camera.up.set(0, 0, 1), s.camera.position.set(2, -2, 1.2), s.controls.target.set(0, 0, 0.25), s.controls.update(), (_a = s.render) == null ? void 0 : _a.call(s));
  }, 800);
});
