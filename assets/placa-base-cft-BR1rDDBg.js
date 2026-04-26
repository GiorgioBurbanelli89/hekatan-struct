import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as Qe } from "./theme-2eEBQPmF.js";
import { M as nt, b as lt, c as re, C as de } from "./Text-DyNVkyur.js";
import { a as ta } from "./analyze-BydHtRcI.js";
import { d as ea, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as aa, a as ue, e as he } from "./getViewer-DnVmZy1T.js";
import { e as oa } from "./makeDraggable-zx2br6Yh.js";
import { g as sa } from "./getParameters-CIJBOwMB.js";
import { g as na } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const At = 2e8, Ct = 0.3, me = At / (2 * (1 + Ct)), pe = 78, la = 25e4, ca = 6e5, r = {
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
  }, fe = l.state([]), be = l.state([]), xe = l.state({}), ve = l.state({}), Me = l.state({}), _e = l.state({}), ye = l.state([]), Pe = l.state({
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
    const o = r.B.value.val, y = r.H.value.val, H = r.t_plate.value.val, m = r.bc.value.val, p = r.hc.value.val, P = r.t_col.value.val, D = r.L_col.value.val, Nt = Math.round(r.nBoltsX.value.val), dt = Math.round(r.nBoltsY.value.val), mt = r.sx.value.val, kt = r.sy.value.val, x = r.d_bolt.value.val, Y = r.L_bolt.value.val, J = r.L_proj.value.val, U = r.B_ped.value.val, X = r.H_ped.value.val, pt = r.h_ped.value.val, $ = r.fc.value.val, N = r.Pu.value.val, ut = r.Mx.value.val, ht = r.My.value.val, k = Math.round(r.nx.value.val), T = Math.round(r.ny.value.val), v = Math.round(r.nz_col.value.val), u = [], M = [], R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map();
    function _(t, e, a) {
      return u.push([
        t,
        e,
        a
      ]), u.length - 1;
    }
    function j(t, e, a, s, c) {
      M.push([
        t,
        e,
        a,
        s
      ]);
      const n = M.length - 1;
      R.set(n, c), V.set(n, At), Z.set(n, Ct), W.set(n, pe), K.set(n, me), Q.set(n, 0), et.set(n, 0), tt.set(n, 0), at.set(n, 0);
    }
    function Tt(t, e, a, s, c) {
      M.push([
        t,
        e
      ]);
      const n = M.length - 1;
      V.set(n, At), Z.set(n, Ct), W.set(n, pe), K.set(n, me), Q.set(n, a), et.set(n, s), tt.set(n, s), at.set(n, c), R.set(n, 0);
    }
    const jt = o / k, St = y / T, B = [];
    for (let t = 0; t <= T; t++) {
      const e = [];
      for (let a = 0; a <= k; a++) e.push(_(-o / 2 + a * jt, -y / 2 + t * St, 0));
      B.push(e);
    }
    for (let t = 0; t < T; t++) for (let e = 0; e < k; e++) j(B[t][e], B[t][e + 1], B[t + 1][e + 1], B[t + 1][e], H);
    function S(t, e) {
      let a = -1, s = 1 / 0;
      for (let c = 0; c <= T; c++) for (let n = 0; n <= k; n++) {
        const g = B[c][n], G = Math.hypot(u[g][0] - t, u[g][1] - e);
        G < s && (s = G, a = g);
      }
      return a;
    }
    const w = Math.max(2, Math.round(m / jt)), A = Math.max(2, Math.round(p / St)), Et = m / w, Lt = p / A, ot = D / v, C = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= w; a++) {
        const s = -m / 2 + a * Et;
        t === 0 ? e.push(S(s, -p / 2)) : e.push(_(s, -p / 2, t * ot));
      }
      C.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < w; e++) j(C[t][e], C[t][e + 1], C[t + 1][e + 1], C[t + 1][e], P);
    const F = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= w; a++) {
        const s = -m / 2 + a * Et;
        t === 0 ? e.push(S(s, p / 2)) : e.push(_(s, p / 2, t * ot));
      }
      F.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < w; e++) j(F[t][e], F[t][e + 1], F[t + 1][e + 1], F[t + 1][e], P);
    const E = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= A; a++) {
        const s = -p / 2 + a * Lt;
        t === 0 ? e.push(S(-m / 2, s)) : a === 0 ? e.push(C[t][0]) : a === A ? e.push(F[t][0]) : e.push(_(-m / 2, s, t * ot));
      }
      E.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < A; e++) j(E[t][e], E[t][e + 1], E[t + 1][e + 1], E[t + 1][e], P);
    const L = [];
    for (let t = 0; t <= v; t++) {
      const e = [];
      for (let a = 0; a <= A; a++) {
        const s = -p / 2 + a * Lt;
        t === 0 ? e.push(S(m / 2, s)) : a === 0 ? e.push(C[t][w]) : a === A ? e.push(F[t][w]) : e.push(_(m / 2, s, t * ot));
      }
      L.push(e);
    }
    for (let t = 0; t < v; t++) for (let e = 0; e < A; e++) j(L[t][e], L[t][e + 1], L[t + 1][e + 1], L[t + 1][e], P);
    const Ot = Math.PI * x * x / 4, ft = Math.PI * x ** 4 / 64, qt = 2 * ft, st = [], Ae = (o - 2 * mt) / Math.max(1, Nt - 1), Ce = (y - 2 * kt) / Math.max(1, dt - 1);
    for (let t = 0; t < Nt; t++) for (let e = 0; e < dt; e++) {
      const a = -o / 2 + mt + t * Ae, s = -y / 2 + kt + e * Ce;
      Math.abs(a) < m / 2 + 5e-3 && Math.abs(s) < p / 2 + 5e-3 || st.push([
        a,
        s
      ]);
    }
    const Fe = [
      ...st
    ], Gt = 4700 * Math.sqrt($ / 1e3) * 1e3, Ht = 0.2, Ie = Gt / (2 * (1 + Ht)), f = 10, b = 10, h = 6, Dt = U / f, Yt = X / b, ze = pt / h, Jt = [];
    for (let t = 0; t <= T; t++) for (let e = 0; e <= k; e++) {
      const a = B[t][e];
      Jt.push({
        id: a,
        x: u[a][0],
        y: u[a][1]
      });
    }
    const i = [];
    for (let t = 0; t <= h; t++) {
      const e = [];
      for (let a = 0; a <= b; a++) {
        const s = [];
        for (let c = 0; c <= f; c++) {
          const n = -U / 2 + c * Dt, g = -X / 2 + a * Yt, G = -pt + t * ze, We = t === h, Ke = Math.abs(n) <= o / 2 + 1e-6 && Math.abs(g) <= y / 2 + 1e-6;
          let gt;
          if (We && Ke) {
            let Bt = -1, ce = 1 / 0;
            for (const wt of Jt) {
              const ie = Math.hypot(wt.x - n, wt.y - g);
              ie < ce && (ce = ie, Bt = wt.id);
            }
            gt = Bt >= 0 ? Bt : _(n, g, G);
          } else gt = _(n, g, G);
          s.push(gt);
        }
        e.push(s);
      }
      i.push(e);
    }
    function z(t, e, a, s) {
      M.push([
        t,
        e,
        a,
        s
      ]);
      const c = M.length - 1;
      R.set(c, 1e-3), V.set(c, Gt), Z.set(c, Ht), W.set(c, 24 / 9.80665), K.set(c, Ie), Q.set(c, 0), et.set(c, 0), tt.set(c, 0), at.set(c, 0);
    }
    for (let t = 0; t < b; t++) for (let e = 0; e < f; e++) z(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]);
    for (let t = 0; t < b; t++) for (let e = 0; e < f; e++) {
      const a = -U / 2 + (e + 0.5) * Dt, s = -X / 2 + (t + 0.5) * Yt;
      Math.abs(a) <= o / 2 && Math.abs(s) <= y / 2 || z(i[h][t][e], i[h][t][e + 1], i[h][t + 1][e + 1], i[h][t + 1][e]);
    }
    for (let t = 0; t < h; t++) for (let e = 0; e < f; e++) z(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]);
    for (let t = 0; t < h; t++) for (let e = 0; e < f; e++) z(i[t][b][e], i[t][b][e + 1], i[t + 1][b][e + 1], i[t + 1][b][e]);
    for (let t = 0; t < h; t++) for (let e = 0; e < b; e++) z(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]);
    for (let t = 0; t < h; t++) for (let e = 0; e < b; e++) z(i[t][e][f], i[t][e + 1][f], i[t + 1][e + 1][f], i[t + 1][e][f]);
    for (const [t, e] of Fe) {
      const a = _(t, e, J), s = S(t, e), c = _(t, e, -Y);
      Tt(a, s, Ot, ft, qt), Tt(s, c, Ot, ft, qt);
    }
    const Ut = /* @__PURE__ */ new Map();
    u.forEach((t, e) => {
      const a = Math.abs(t[2] - -Y) < 1e-6 && st.some(([c, n]) => Math.abs(t[0] - c) < 1e-6 && Math.abs(t[1] - n) < 1e-6), s = Math.abs(t[2] - -pt) < 1e-6;
      (a || s) && Ut.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const bt = [];
    u.forEach((t, e) => {
      Math.abs(t[2] - D) < 1e-6 && Math.abs(t[0]) <= m / 2 + 1e-6 && Math.abs(t[1]) <= p / 2 + 1e-6 && bt.push(e);
    });
    const xt = Math.max(1, bt.length), Ne = -N / xt, ke = ut / xt, Te = ht / xt, Xt = /* @__PURE__ */ new Map();
    for (const t of bt) Xt.set(t, [
      0,
      0,
      Ne,
      ke,
      Te,
      0
    ]);
    const $t = {
      supports: Ut,
      loads: Xt
    }, vt = {
      elasticities: V,
      shearModuli: K,
      areas: Q,
      momentsOfInertiaZ: tt,
      momentsOfInertiaY: et,
      torsionalConstants: at,
      densities: W,
      poissonsRatios: Z,
      thicknesses: R
    };
    let Mt = {}, _t = {};
    try {
      Mt = ea(u, M, $t, vt), _t = ta(u, M, vt, Mt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const O = [], je = new nt({
      color: 10526880,
      metalness: 0.7,
      roughness: 0.4
    }), Rt = new lt(new re(o, y, H), je);
    Rt.position.set(0, 0, H / 2), O.push(Rt);
    const Se = new nt({
      color: 12888184,
      transparent: true,
      opacity: 0.5
    }), Vt = new lt(new re(m - 2 * P, p - 2 * P, D - 5e-3), Se);
    Vt.position.set(0, 0, D / 2), O.push(Vt);
    const Ee = new nt({
      color: 6710886,
      metalness: 0.5
    }), Le = new nt({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Zt = x * 0.8, Wt = x * 0.85, Oe = J + Zt / 2;
    for (const [t, e] of st) {
      const a = new de(x / 2, x / 2, Y + J, 12), s = new lt(a, Ee);
      s.position.set(t, e, (-Y + J) / 2), s.rotation.x = Math.PI / 2, O.push(s);
      const c = new de(Wt, Wt, Zt, 6), n = new lt(c, Le);
      n.position.set(t, e, Oe), n.rotation.x = Math.PI / 2, O.push(n);
    }
    let yt = 0;
    const Kt = _t == null ? void 0 : _t.vonMises;
    Kt && Kt.forEach((t) => t.forEach((e) => {
      e > yt && (yt = e);
    }));
    const qe = 0.65, q = o * y, Qt = U * X, Ge = Math.min(2, Math.sqrt(Qt / q)), He = Math.min(0.85 * $ * q * Ge, 1.7 * $ * q), te = qe * He, De = N / Math.max(1, te), ee = Math.max(0, (o - 0.95 * Math.max(m, p)) / 2), Ye = N / q, ae = ee * Math.sqrt(2 * Math.max(0, Ye) / (0.9 * la)), Je = ae / Math.max(1e-6, H), Ue = Math.max(0.05, o - 2 * mt), Xe = Math.sqrt(ut * ut + ht * ht), oe = Math.max(0, Xe / Ue - N / 2) / Math.max(1, dt), se = 0.75 * (0.75 * Math.PI * x * x / 4) * ca, $e = oe / Math.max(1, se), Re = m * p, Pt = (m - 2 * P) * (p - 2 * P), ne = Re - Pt, le = 35e4 * ne + 0.85 * $ * Pt, Ve = 0.75 * le, Ze = N / Math.max(1, Ve);
    Pe.val = {
      vmMax: yt,
      A1: q,
      A2: Qt,
      phiPp: te,
      demandCapPp: De,
      m_cant: ee,
      t_req: ae,
      demandCapT: Je,
      T_anchor: oe,
      phiNn: se,
      demandCapAnchor: $e,
      As: ne,
      Ac: Pt,
      Pno_composite: le,
      demandCapPno: Ze
    }, fe.val = u, be.val = M, xe.val = $t, ve.val = vt, Me.val = Mt, _e.val = _t, ye.val = O;
  });
  const ge = aa({
    mesh: {
      nodes: fe,
      elements: be,
      nodeInputs: xe,
      elementInputs: ve,
      deformOutputs: Me,
      analyzeOutputs: _e
    },
    objects3D: ye,
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
  }), Ft = document.createElement("div");
  Ft.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const I = new Qe({
    title: "\u{1F9EA} Placa base + col CFT",
    container: Ft,
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
  }, ct = (o) => o < 1 ? `${o.toFixed(2)} \u2713` : o < 1.2 ? `${o.toFixed(2)} \u26A0` : `${o.toFixed(2)} \u2717`, it = I.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  it.addBinding(d, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  it.addBinding(d, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  it.addBinding(d, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (o) => o.toFixed(0)
  });
  it.addBinding(d, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: ct
  });
  const rt = I.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  rt.addBinding(d, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  rt.addBinding(d, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  rt.addBinding(d, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (o) => o.toFixed(0)
  });
  rt.addBinding(d, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: ct
  });
  const It = I.addFolder({
    title: "DG-1 espesor placa"
  });
  It.addBinding(d, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (o) => o.toFixed(4)
  });
  It.addBinding(d, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (o) => (o * 1e3).toFixed(1)
  });
  It.addBinding(d, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: ct
  });
  const zt = I.addFolder({
    title: "ACI \xA717 anclaje"
  });
  zt.addBinding(d, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (o) => o.toFixed(1)
  });
  zt.addBinding(d, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (o) => o.toFixed(1)
  });
  zt.addBinding(d, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: ct
  });
  const ia = I.addFolder({
    title: "FEM"
  });
  ia.addBinding(d, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (o) => o.toExponential(3)
  });
  const Be = I.addFolder({
    title: "Unidades",
    expanded: false
  }), we = {
    stress: he.val,
    disp: ue.val
  };
  Be.addBinding(we, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (o) => {
    he.val = o.value;
  });
  Be.addBinding(we, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (o) => {
    ue.val = o.value;
  });
  document.body.append(Ft);
  l.derive(() => {
    const o = Pe.val;
    Object.assign(d, o), I.refresh();
  });
  document.body.append(sa(r), ge, na({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => oa(), 200);
  setTimeout(() => {
    var _a;
    const o = ge.__ctx;
    (o == null ? void 0 : o.camera) && (o == null ? void 0 : o.controls) && (o.camera.up.set(0, 0, 1), o.camera.position.set(2, -2, 1.2), o.controls.target.set(0, 0, 0.25), o.controls.update(), (_a = o.render) == null ? void 0 : _a.call(o));
  }, 800);
});
