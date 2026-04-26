import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as o, P as he } from "./theme-2eEBQPmF.js";
import { M as Ot, b as Ht, c as ve, C as fe } from "./Text-DyNVkyur.js";
import { a as be } from "./analyze-BydHtRcI.js";
import { d as xe, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Me, a as Dt, e as Gt } from "./getViewer-DnVmZy1T.js";
import { e as _e } from "./makeDraggable-zx2br6Yh.js";
import { g as ye } from "./getParameters-CIJBOwMB.js";
import { g as ge } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const st = 2e8, ot = 0.3, Et = st / (2 * (1 + ot)), qt = 78, Be = 25e4, Pe = 6e5, l = {
    B: {
      value: o.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "B placa (m)"
    },
    H: {
      value: o.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "H placa (m)"
    },
    t_plate: {
      value: o.state(0.025),
      min: 0.012,
      max: 0.06,
      step: 2e-3,
      label: "t placa (m)"
    },
    bc: {
      value: o.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "bc col (m)"
    },
    hc: {
      value: o.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "hc col (m)"
    },
    t_col: {
      value: o.state(0.012),
      min: 6e-3,
      max: 0.03,
      step: 2e-3,
      label: "t pared HSS (m)"
    },
    L_col: {
      value: o.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "L stub col (m)"
    },
    nBoltsX: {
      value: o.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en X"
    },
    nBoltsY: {
      value: o.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en Y"
    },
    sx: {
      value: o.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sx borde (m)"
    },
    sy: {
      value: o.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sy borde (m)"
    },
    d_bolt: {
      value: o.state(0.024),
      min: 0.012,
      max: 0.04,
      step: 2e-3,
      label: "\xD8 perno (m)"
    },
    L_bolt: {
      value: o.state(0.3),
      min: 0.15,
      max: 0.6,
      step: 0.02,
      label: "L embebido (m)"
    },
    L_proj: {
      value: o.state(0.05),
      min: 0.02,
      max: 0.1,
      step: 5e-3,
      label: "L proyec (m)"
    },
    B_ped: {
      value: o.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "B pedestal (m)"
    },
    H_ped: {
      value: o.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "H pedestal (m)"
    },
    h_ped: {
      value: o.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "h pedestal (m)"
    },
    fc: {
      value: o.state(28e3),
      min: 17e3,
      max: 5e4,
      step: 1e3,
      label: "f'c (kN/m\xB2)"
    },
    Pu: {
      value: o.state(300),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu (kN)"
    },
    Mu: {
      value: o.state(30),
      min: 0,
      max: 800,
      step: 5,
      label: "Mu (kN\xB7m)"
    },
    nx: {
      value: o.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh nx"
    },
    ny: {
      value: o.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh ny"
    },
    nz_col: {
      value: o.state(6),
      min: 4,
      max: 12,
      step: 2,
      label: "nz col"
    }
  }, Yt = o.state([]), Jt = o.state([]), Ut = o.state({}), Xt = o.state({}), $t = o.state({}), Rt = o.state({}), Vt = o.state([]), Wt = o.state({
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
  o.derive(() => {
    const a = l.B.value.val, B = l.H.value.val, it = l.t_plate.value.val, i = l.bc.value.val, m = l.hc.value.val, S = l.t_col.value.val, mt = l.L_col.value.val, dt = Math.round(l.nBoltsX.value.val), O = Math.round(l.nBoltsY.value.val), H = l.sx.value.val, pt = l.sy.value.val, h = l.d_bolt.value.val, F = l.L_bolt.value.val, E = l.L_proj.value.val, ut = l.B_ped.value.val, ht = l.H_ped.value.val, vt = l.h_ped.value.val, ft = l.fc.value.val, T = l.Pu.value.val, bt = l.Mu.value.val, I = Math.round(l.nx.value.val), N = Math.round(l.ny.value.val), d = Math.round(l.nz_col.value.val), p = [], v = [], q = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
    function f(t, e, s) {
      return p.push([
        t,
        e,
        s
      ]), p.length - 1;
    }
    function P(t, e, s, n, u) {
      v.push([
        t,
        e,
        s,
        n
      ]);
      const c = v.length - 1;
      q.set(c, u), D.set(c, st), G.set(c, ot), Y.set(c, qt), J.set(c, Et), U.set(c, 0), $.set(c, 0), X.set(c, 0), R.set(c, 0);
    }
    function xt(t, e, s, n, u) {
      v.push([
        t,
        e
      ]);
      const c = v.length - 1;
      D.set(c, st), G.set(c, ot), Y.set(c, qt), J.set(c, Et), U.set(c, s), $.set(c, n), X.set(c, n), R.set(c, u), q.set(c, 0);
    }
    const Mt = a / I, _t = B / N, y = [];
    for (let t = 0; t <= N; t++) {
      const e = [];
      for (let s = 0; s <= I; s++) e.push(f(-a / 2 + s * Mt, -B / 2 + t * _t, 0));
      y.push(e);
    }
    for (let t = 0; t < N; t++) for (let e = 0; e < I; e++) P(y[t][e], y[t][e + 1], y[t + 1][e + 1], y[t + 1][e], it);
    function w(t, e) {
      let s = -1, n = 1 / 0;
      for (let u = 0; u <= N; u++) for (let c = 0; c <= I; c++) {
        const at = y[u][c], Lt = Math.hypot(p[at][0] - t, p[at][1] - e);
        Lt < n && (n = Lt, s = at);
      }
      return s;
    }
    const b = Math.max(2, Math.round(i / Mt)), x = Math.max(2, Math.round(m / _t)), yt = i / b, gt = m / x, k = mt / d, M = [];
    for (let t = 0; t <= d; t++) {
      const e = [];
      for (let s = 0; s <= b; s++) {
        const n = -i / 2 + s * yt;
        t === 0 ? e.push(w(n, -m / 2)) : e.push(f(n, -m / 2, t * k));
      }
      M.push(e);
    }
    for (let t = 0; t < d; t++) for (let e = 0; e < b; e++) P(M[t][e], M[t][e + 1], M[t + 1][e + 1], M[t + 1][e], S);
    const _ = [];
    for (let t = 0; t <= d; t++) {
      const e = [];
      for (let s = 0; s <= b; s++) {
        const n = -i / 2 + s * yt;
        t === 0 ? e.push(w(n, m / 2)) : e.push(f(n, m / 2, t * k));
      }
      _.push(e);
    }
    for (let t = 0; t < d; t++) for (let e = 0; e < b; e++) P(_[t][e], _[t][e + 1], _[t + 1][e + 1], _[t + 1][e], S);
    const A = [];
    for (let t = 0; t <= d; t++) {
      const e = [];
      for (let s = 0; s <= x; s++) {
        const n = -m / 2 + s * gt;
        t === 0 ? e.push(w(-i / 2, n)) : s === 0 ? e.push(M[t][0]) : s === x ? e.push(_[t][0]) : e.push(f(-i / 2, n, t * k));
      }
      A.push(e);
    }
    for (let t = 0; t < d; t++) for (let e = 0; e < x; e++) P(A[t][e], A[t][e + 1], A[t + 1][e + 1], A[t + 1][e], S);
    const z = [];
    for (let t = 0; t <= d; t++) {
      const e = [];
      for (let s = 0; s <= x; s++) {
        const n = -m / 2 + s * gt;
        t === 0 ? e.push(w(i / 2, n)) : s === 0 ? e.push(M[t][b]) : s === x ? e.push(_[t][b]) : e.push(f(i / 2, n, t * k));
      }
      z.push(e);
    }
    for (let t = 0; t < d; t++) for (let e = 0; e < x; e++) P(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], S);
    const Bt = Math.PI * h * h / 4, V = Math.PI * h ** 4 / 64, Pt = 2 * V, W = [], te = (a - 2 * H) / Math.max(1, dt - 1), ee = (B - 2 * pt) / Math.max(1, O - 1);
    for (let t = 0; t < dt; t++) for (let e = 0; e < O; e++) {
      const s = -a / 2 + H + t * te, n = -B / 2 + pt + e * ee;
      Math.abs(s) < i / 2 + 5e-3 && Math.abs(n) < m / 2 + 5e-3 || W.push([
        s,
        n
      ]);
    }
    for (const [t, e] of W) {
      const s = f(t, e, E), n = w(t, e), u = f(t, e, -F);
      xt(s, n, Bt, V, Pt), xt(n, u, Bt, V, Pt);
    }
    const wt = /* @__PURE__ */ new Map();
    p.forEach((t, e) => {
      Math.abs(t[2] - -F) < 1e-6 && wt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const j = [];
    p.forEach((t, e) => {
      Math.abs(t[2] - mt) < 1e-6 && Math.abs(t[0]) <= i / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && j.push(e);
    });
    const ae = -T / Math.max(1, j.length), se = bt / Math.max(1, j.length), At = /* @__PURE__ */ new Map();
    for (const t of j) At.set(t, [
      0,
      0,
      ae,
      0,
      se,
      0
    ]);
    const zt = {
      supports: wt,
      loads: At
    }, Z = {
      elasticities: D,
      shearModuli: J,
      areas: U,
      momentsOfInertiaZ: X,
      momentsOfInertiaY: $,
      torsionalConstants: R,
      densities: Y,
      poissonsRatios: G,
      thicknesses: q
    };
    let K = {}, Q = {};
    try {
      K = xe(p, v, zt, Z), Q = be(p, v, Z, K);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const tt = [], oe = new Ot({
      color: 8947848,
      roughness: 0.9
    }), ne = new Ot({
      color: 6710886,
      metalness: 0.5
    }), Ct = new Ht(new ve(ut, ht, vt), oe);
    Ct.position.set(0, 0, -vt / 2), tt.push(Ct);
    for (const [t, e] of W) {
      const s = new fe(h / 2, h / 2, F + E, 12), n = new Ht(s, ne);
      n.position.set(t, e, (-F + E) / 2), n.rotation.x = Math.PI / 2, tt.push(n);
    }
    let et = 0;
    const St = Q == null ? void 0 : Q.vonMises;
    St && St.forEach((t) => t.forEach((e) => {
      e > et && (et = e);
    }));
    const le = 0.65, C = a * B, Ft = ut * ht, ce = Math.min(2, Math.sqrt(Ft / C)), re = Math.min(0.85 * ft * C * ce, 1.7 * ft * C), Tt = le * re, ie = T / Math.max(1, Tt), It = Math.max(0, (a - 0.95 * Math.max(i, m)) / 2), me = T / C, Nt = It * Math.sqrt(2 * Math.max(0, me) / (0.9 * Be)), de = Nt / Math.max(1e-6, it), pe = Math.max(0.05, a - 2 * H), kt = Math.max(0, bt / pe - T / 2) / Math.max(1, O), jt = 0.75 * (0.75 * Math.PI * h * h / 4) * Pe, ue = kt / Math.max(1, jt);
    Wt.val = {
      vmMax: et,
      A1: C,
      A2: Ft,
      phiPp: Tt,
      demandCapPp: ie,
      m_cant: It,
      t_req: Nt,
      demandCapT: de,
      T_anchor: kt,
      phiNn: jt,
      demandCapAnchor: ue
    }, Yt.val = p, Jt.val = v, Ut.val = zt, Xt.val = Z, $t.val = K, Rt.val = Q, Vt.val = tt;
  });
  const Zt = Me({
    mesh: {
      nodes: Yt,
      elements: Jt,
      nodeInputs: Ut,
      elementInputs: Xt,
      deformOutputs: $t,
      analyzeOutputs: Rt
    },
    objects3D: Vt,
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
  }), nt = document.createElement("div");
  nt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const g = new he({
    title: "\u{1F9EA} Placa base + col HSS hueca",
    container: nt,
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
    demandCapAnchor: 0
  }, lt = (a) => a < 1 ? `${a.toFixed(2)} \u2713` : a < 1.2 ? `${a.toFixed(2)} \u26A0` : `${a.toFixed(2)} \u2717`, L = g.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  L.addBinding(r, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  L.addBinding(r, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  L.addBinding(r, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (a) => a.toFixed(0)
  });
  L.addBinding(r, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: lt
  });
  const ct = g.addFolder({
    title: "DG-1 espesor placa"
  });
  ct.addBinding(r, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (a) => a.toFixed(4)
  });
  ct.addBinding(r, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (a) => (a * 1e3).toFixed(1)
  });
  ct.addBinding(r, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: lt
  });
  const rt = g.addFolder({
    title: "ACI \xA717 anclaje"
  });
  rt.addBinding(r, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (a) => a.toFixed(1)
  });
  rt.addBinding(r, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (a) => a.toFixed(1)
  });
  rt.addBinding(r, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: lt
  });
  const we = g.addFolder({
    title: "FEM"
  });
  we.addBinding(r, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (a) => a.toExponential(3)
  });
  const Kt = g.addFolder({
    title: "Unidades",
    expanded: false
  }), Qt = {
    stress: Gt.val,
    disp: Dt.val
  };
  Kt.addBinding(Qt, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (a) => {
    Gt.val = a.value;
  });
  Kt.addBinding(Qt, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (a) => {
    Dt.val = a.value;
  });
  document.body.append(nt);
  o.derive(() => {
    const a = Wt.val;
    Object.assign(r, a), g.refresh();
  });
  document.body.append(ye(l), Zt, ge({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-hueca/main.ts"
  }));
  setTimeout(() => _e(), 200);
  setTimeout(() => {
    var _a;
    const a = Zt.__ctx;
    (a == null ? void 0 : a.camera) && (a == null ? void 0 : a.controls) && (a.camera.up.set(0, 0, 1), a.camera.position.set(2, -2, 1.2), a.controls.target.set(0, 0, 0.25), a.controls.update(), (_a = a.render) == null ? void 0 : _a.call(a));
  }, 800);
});
