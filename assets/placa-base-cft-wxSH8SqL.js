import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as c, P as na } from "./theme-2eEBQPmF.js";
import { M as he, C as xe, b as be } from "./Text-DyNVkyur.js";
import { a as la } from "./analyze-BydHtRcI.js";
import { d as ca, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as ia, a as Me, e as ye } from "./getViewer-DnVmZy1T.js";
import { e as ra } from "./makeDraggable-zx2br6Yh.js";
import { g as da } from "./getParameters-CIJBOwMB.js";
import { g as pa } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const jt = 2e8, Nt = 0.3, ve = jt / (2 * (1 + Nt)), _e = 78, ma = 25e4, ua = 6e5, d = {
    B: {
      value: c.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "B placa (m)"
    },
    H: {
      value: c.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "H placa (m)"
    },
    t_plate: {
      value: c.state(0.025),
      min: 0.012,
      max: 0.06,
      step: 2e-3,
      label: "t placa (m)"
    },
    bc: {
      value: c.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "bc col (m)"
    },
    hc: {
      value: c.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "hc col (m)"
    },
    t_col: {
      value: c.state(0.012),
      min: 6e-3,
      max: 0.03,
      step: 2e-3,
      label: "t pared HSS (m)"
    },
    L_col: {
      value: c.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "L stub col (m)"
    },
    nBoltsX: {
      value: c.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en X"
    },
    nBoltsY: {
      value: c.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en Y"
    },
    sx: {
      value: c.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sx borde (m)"
    },
    sy: {
      value: c.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sy borde (m)"
    },
    d_bolt: {
      value: c.state(0.024),
      min: 0.012,
      max: 0.04,
      step: 2e-3,
      label: "\xD8 perno (m)"
    },
    L_bolt: {
      value: c.state(0.3),
      min: 0.15,
      max: 0.6,
      step: 0.02,
      label: "L embebido (m)"
    },
    L_proj: {
      value: c.state(0.05),
      min: 0.02,
      max: 0.1,
      step: 5e-3,
      label: "L proyec (m)"
    },
    B_ped: {
      value: c.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "B pedestal (m)"
    },
    H_ped: {
      value: c.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "H pedestal (m)"
    },
    h_ped: {
      value: c.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "h pedestal (m)"
    },
    fc: {
      value: c.state(28e3),
      min: 17e3,
      max: 5e4,
      step: 1e3,
      label: "f'c (kN/m\xB2)"
    },
    Pu: {
      value: c.state(300),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu axial (kN)"
    },
    Mx: {
      value: c.state(20),
      min: 0,
      max: 500,
      step: 5,
      label: "Mx (kN\xB7m)"
    },
    My: {
      value: c.state(30),
      min: 0,
      max: 500,
      step: 5,
      label: "My (kN\xB7m)"
    },
    nx: {
      value: c.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh nx"
    },
    ny: {
      value: c.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh ny"
    },
    nz_col: {
      value: c.state(6),
      min: 4,
      max: 12,
      step: 2,
      label: "nz col"
    }
  }, Pe = c.state([]), ge = c.state([]), Ae = c.state({}), Be = c.state({}), we = c.state({}), Ce = c.state({}), ke = c.state([]), ze = c.state({
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
  c.derive(() => {
    const o = d.B.value.val, k = d.H.value.val, Lt = d.t_plate.value.val, m = d.bc.value.val, u = d.hc.value.val, A = d.t_col.value.val, pt = d.L_col.value.val, Ot = Math.round(d.nBoltsX.value.val), mt = Math.round(d.nBoltsY.value.val), ut = d.sx.value.val, qt = d.sy.value.val, y = d.d_bolt.value.val, ft = d.L_bolt.value.val, at = d.L_proj.value.val, ot = d.B_ped.value.val, st = d.H_ped.value.val, ht = d.h_ped.value.val, nt = d.fc.value.val, O = d.Pu.value.val, xt = d.Mx.value.val, bt = d.My.value.val, q = Math.round(d.nx.value.val), G = Math.round(d.ny.value.val), M = Math.round(d.nz_col.value.val), f = [], b = [], H = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
    function P(t, e, a) {
      return f.push([
        t,
        e,
        a
      ]), f.length - 1;
    }
    function Z(t, e, a, s, n) {
      b.push([
        t,
        e,
        a,
        s
      ]);
      const l = b.length - 1;
      H.set(l, n), D.set(l, jt), Y.set(l, Nt), J.set(l, _e), U.set(l, ve), X.set(l, 0), R.set(l, 0), $.set(l, 0), V.set(l, 0);
    }
    function Gt(t, e, a, s, n) {
      b.push([
        t,
        e
      ]);
      const l = b.length - 1;
      D.set(l, jt), Y.set(l, Nt), J.set(l, _e), U.set(l, ve), X.set(l, a), R.set(l, s), $.set(l, s), V.set(l, n), H.set(l, 0);
    }
    const Ht = o / q, Dt = k / G, z = [];
    for (let t = 0; t <= G; t++) {
      const e = [];
      for (let a = 0; a <= q; a++) e.push(P(-o / 2 + a * Ht, -k / 2 + t * Dt, 0));
      z.push(e);
    }
    for (let t = 0; t < G; t++) for (let e = 0; e < q; e++) Z(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], Lt);
    function W(t, e) {
      let a = -1, s = 1 / 0;
      for (let n = 0; n <= G; n++) for (let l = 0; l <= q; l++) {
        const x = z[n][l], g = Math.hypot(f[x][0] - t, f[x][1] - e);
        g < s && (s = g, a = x);
      }
      return a;
    }
    const F = Math.max(2, Math.round(m / Ht)), I = Math.max(2, Math.round(u / Dt)), Yt = m / F, Jt = u / I, lt = pt / M, j = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let a = 0; a <= F; a++) {
        const s = -m / 2 + a * Yt;
        t === 0 ? e.push(W(s, -u / 2)) : e.push(P(s, -u / 2, t * lt));
      }
      j.push(e);
    }
    for (let t = 0; t < M; t++) for (let e = 0; e < F; e++) Z(j[t][e], j[t][e + 1], j[t + 1][e + 1], j[t + 1][e], A);
    const N = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let a = 0; a <= F; a++) {
        const s = -m / 2 + a * Yt;
        t === 0 ? e.push(W(s, u / 2)) : e.push(P(s, u / 2, t * lt));
      }
      N.push(e);
    }
    for (let t = 0; t < M; t++) for (let e = 0; e < F; e++) Z(N[t][e], N[t][e + 1], N[t + 1][e + 1], N[t + 1][e], A);
    const K = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let a = 0; a <= I; a++) {
        const s = -u / 2 + a * Jt;
        t === 0 ? e.push(W(-m / 2, s)) : a === 0 ? e.push(j[t][0]) : a === I ? e.push(N[t][0]) : e.push(P(-m / 2, s, t * lt));
      }
      K.push(e);
    }
    for (let t = 0; t < M; t++) for (let e = 0; e < I; e++) Z(K[t][e], K[t][e + 1], K[t + 1][e + 1], K[t + 1][e], A);
    const Q = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let a = 0; a <= I; a++) {
        const s = -u / 2 + a * Jt;
        t === 0 ? e.push(W(m / 2, s)) : a === 0 ? e.push(j[t][F]) : a === I ? e.push(N[t][F]) : e.push(P(m / 2, s, t * lt));
      }
      Q.push(e);
    }
    for (let t = 0; t < M; t++) for (let e = 0; e < I; e++) Z(Q[t][e], Q[t][e + 1], Q[t + 1][e + 1], Q[t + 1][e], A);
    const Ut = Math.PI * y * y / 4, vt = Math.PI * y ** 4 / 64, Xt = 2 * vt, _t = [], Ne = (o - 2 * ut) / Math.max(1, Ot - 1), Te = (k - 2 * qt) / Math.max(1, mt - 1);
    for (let t = 0; t < Ot; t++) for (let e = 0; e < mt; e++) {
      const a = -o / 2 + ut + t * Ne, s = -k / 2 + qt + e * Te;
      Math.abs(a) < m / 2 + 5e-3 && Math.abs(s) < u / 2 + 5e-3 || _t.push([
        a,
        s
      ]);
    }
    const Se = [
      ..._t
    ], Mt = 4700 * Math.sqrt(nt / 1e3) * 1e3, yt = 0.2, $t = Mt / (2 * (1 + yt)), v = 10, _ = 10, h = 6, Rt = ot / v, Vt = st / _, Ee = ht / h, Zt = [];
    for (let t = 0; t <= G; t++) for (let e = 0; e <= q; e++) {
      const a = z[t][e];
      Zt.push({
        id: a,
        x: f[a][0],
        y: f[a][1]
      });
    }
    const i = [];
    for (let t = 0; t <= h; t++) {
      const e = [];
      for (let a = 0; a <= _; a++) {
        const s = [];
        for (let n = 0; n <= v; n++) {
          const l = -ot / 2 + n * Rt, x = -st / 2 + a * Vt, g = -ht + t * Ee, ct = t === h, et = Math.abs(l) <= o / 2 + 1e-6 && Math.abs(x) <= k / 2 + 1e-6;
          let L;
          if (ct && et) {
            let Ft = -1, ue = 1 / 0;
            for (const It of Zt) {
              const fe = Math.hypot(It.x - l, It.y - x);
              fe < ue && (ue = fe, Ft = It.id);
            }
            L = Ft >= 0 ? Ft : P(l, x, g);
          } else L = P(l, x, g);
          s.push(L);
        }
        e.push(s);
      }
      i.push(e);
    }
    function Le(t, e, a) {
      let s = -1, n = 1 / 0;
      for (let l = 0; l <= h; l++) for (let x = 0; x <= _; x++) for (let g = 0; g <= v; g++) {
        const ct = i[l][x][g], et = f[ct], L = Math.hypot(et[0] - t, et[1] - e) + Math.abs(et[2] - a) * 0.5;
        L < n && (n = L, s = ct);
      }
      return s;
    }
    function S(t, e, a, s) {
      b.push([
        t,
        e,
        a,
        s
      ]);
      const n = b.length - 1;
      H.set(n, 1e-3), D.set(n, Mt), Y.set(n, yt), J.set(n, 24 / 9.80665), U.set(n, $t), X.set(n, 0), R.set(n, 0), $.set(n, 0), V.set(n, 0);
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < v; e++) S(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]);
    for (let t = 0; t < _; t++) for (let e = 0; e < v; e++) {
      const a = -ot / 2 + (e + 0.5) * Rt, s = -st / 2 + (t + 0.5) * Vt;
      Math.abs(a) <= o / 2 && Math.abs(s) <= k / 2 || S(i[h][t][e], i[h][t][e + 1], i[h][t + 1][e + 1], i[h][t + 1][e]);
    }
    for (let t = 0; t < h; t++) for (let e = 0; e < v; e++) S(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]);
    for (let t = 0; t < h; t++) for (let e = 0; e < v; e++) S(i[t][_][e], i[t][_][e + 1], i[t + 1][_][e + 1], i[t + 1][_][e]);
    for (let t = 0; t < h; t++) for (let e = 0; e < _; e++) S(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]);
    for (let t = 0; t < h; t++) for (let e = 0; e < _; e++) S(i[t][e][v], i[t][e + 1][v], i[t + 1][e + 1][v], i[t + 1][e][v]);
    for (const [t, e] of Se) {
      const a = P(t, e, at), s = W(t, e), n = Le(t, e, -ft);
      Gt(a, s, Ut, vt, Xt), Gt(s, n, Ut, vt, Xt);
    }
    const Wt = m - 2 * A, Kt = u - 2 * A, B = 4, w = 4, C = M, Oe = Wt / B, qe = Kt / w, Ge = pt / C, r = [];
    for (let t = 0; t <= C; t++) {
      const e = [];
      for (let a = 0; a <= w; a++) {
        const s = [];
        for (let n = 0; n <= B; n++) s.push(P(-Wt / 2 + n * Oe, -Kt / 2 + a * qe, t * Ge));
        e.push(s);
      }
      r.push(e);
    }
    function E(t, e, a, s) {
      b.push([
        t,
        e,
        a,
        s
      ]);
      const n = b.length - 1;
      H.set(n, 1e-3), D.set(n, Mt), Y.set(n, yt), J.set(n, 24 / 9.80665), U.set(n, $t), X.set(n, 0), R.set(n, 0), $.set(n, 0), V.set(n, 0);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < B; e++) E(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]), E(r[C][t][e], r[C][t][e + 1], r[C][t + 1][e + 1], r[C][t + 1][e]);
    for (let t = 0; t < C; t++) for (let e = 0; e < B; e++) E(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]), E(r[t][w][e], r[t][w][e + 1], r[t + 1][w][e + 1], r[t + 1][w][e]);
    for (let t = 0; t < C; t++) for (let e = 0; e < w; e++) E(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]), E(r[t][e][B], r[t][e + 1][B], r[t + 1][e + 1][B], r[t + 1][e][B]);
    const Qt = /* @__PURE__ */ new Map();
    f.forEach((t, e) => {
      Math.abs(t[2] - -ht) < 1e-6 && Qt.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const Pt = [];
    f.forEach((t, e) => {
      Math.abs(t[2] - pt) < 1e-6 && Math.abs(t[0]) <= m / 2 + 1e-6 && Math.abs(t[1]) <= u / 2 + 1e-6 && Pt.push(e);
    });
    const gt = Math.max(1, Pt.length), He = -O / gt, De = xt / gt, Ye = bt / gt, te = /* @__PURE__ */ new Map();
    for (const t of Pt) te.set(t, [
      0,
      0,
      He,
      De,
      Ye,
      0
    ]);
    const ee = {
      supports: Qt,
      loads: te
    }, At = {
      elasticities: D,
      shearModuli: U,
      areas: X,
      momentsOfInertiaZ: $,
      momentsOfInertiaY: R,
      torsionalConstants: V,
      densities: J,
      poissonsRatios: Y,
      thicknesses: H
    };
    let Bt = {}, wt = {};
    try {
      Bt = ca(f, b, ee, At), wt = la(f, b, At, Bt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const Ct = [], Je = new he({
      color: 6710886,
      metalness: 0.5
    }), Ue = new he({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), ae = y * 0.8, oe = y * 0.85, Xe = at + ae / 2;
    for (const [t, e] of _t) {
      const a = new xe(y / 2, y / 2, ft + at, 12), s = new be(a, Je);
      s.position.set(t, e, (-ft + at) / 2), s.rotation.x = Math.PI / 2, Ct.push(s);
      const n = new xe(oe, oe, ae, 6), l = new be(n, Ue);
      l.position.set(t, e, Xe), l.rotation.x = Math.PI / 2, Ct.push(l);
    }
    let kt = 0;
    const se = wt == null ? void 0 : wt.vonMises;
    se && se.forEach((t) => t.forEach((e) => {
      e > kt && (kt = e);
    }));
    const $e = 0.65, tt = o * k, ne = ot * st, Re = Math.min(2, Math.sqrt(ne / tt)), Ve = Math.min(0.85 * nt * tt * Re, 1.7 * nt * tt), le = $e * Ve, Ze = O / Math.max(1, le), ce = Math.max(0, (o - 0.95 * Math.max(m, u)) / 2), We = O / tt, ie = ce * Math.sqrt(2 * Math.max(0, We) / (0.9 * ma)), Ke = ie / Math.max(1e-6, Lt), Qe = Math.max(0.05, o - 2 * ut), ta = Math.sqrt(xt * xt + bt * bt), re = Math.max(0, ta / Qe - O / 2) / Math.max(1, mt), de = 0.75 * (0.75 * Math.PI * y * y / 4) * ua, ea = re / Math.max(1, de), aa = m * u, zt = (m - 2 * A) * (u - 2 * A), pe = aa - zt, me = 35e4 * pe + 0.85 * nt * zt, oa = 0.75 * me, sa = O / Math.max(1, oa);
    ze.val = {
      vmMax: kt,
      A1: tt,
      A2: ne,
      phiPp: le,
      demandCapPp: Ze,
      m_cant: ce,
      t_req: ie,
      demandCapT: Ke,
      T_anchor: re,
      phiNn: de,
      demandCapAnchor: ea,
      As: pe,
      Ac: zt,
      Pno_composite: me,
      demandCapPno: sa
    }, Pe.val = f, ge.val = b, Ae.val = ee, Be.val = At, we.val = Bt, Ce.val = wt, ke.val = Ct;
  });
  const Fe = ia({
    mesh: {
      nodes: Pe,
      elements: ge,
      nodeInputs: Ae,
      elementInputs: Be,
      deformOutputs: we,
      analyzeOutputs: Ce
    },
    objects3D: ke,
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
  }), Tt = document.createElement("div");
  Tt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const T = new na({
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
  }, it = (o) => o < 1 ? `${o.toFixed(2)} \u2713` : o < 1.2 ? `${o.toFixed(2)} \u26A0` : `${o.toFixed(2)} \u2717`, rt = T.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  rt.addBinding(p, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  rt.addBinding(p, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  rt.addBinding(p, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (o) => o.toFixed(0)
  });
  rt.addBinding(p, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: it
  });
  const dt = T.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  dt.addBinding(p, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  dt.addBinding(p, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  dt.addBinding(p, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (o) => o.toFixed(0)
  });
  dt.addBinding(p, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: it
  });
  const St = T.addFolder({
    title: "DG-1 espesor placa"
  });
  St.addBinding(p, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (o) => o.toFixed(4)
  });
  St.addBinding(p, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (o) => (o * 1e3).toFixed(1)
  });
  St.addBinding(p, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: it
  });
  const Et = T.addFolder({
    title: "ACI \xA717 anclaje"
  });
  Et.addBinding(p, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (o) => o.toFixed(1)
  });
  Et.addBinding(p, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (o) => o.toFixed(1)
  });
  Et.addBinding(p, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: it
  });
  const fa = T.addFolder({
    title: "FEM"
  });
  fa.addBinding(p, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (o) => o.toExponential(3)
  });
  const Ie = T.addFolder({
    title: "Unidades",
    expanded: false
  }), je = {
    stress: ye.val,
    disp: Me.val
  };
  Ie.addBinding(je, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (o) => {
    ye.val = o.value;
  });
  Ie.addBinding(je, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (o) => {
    Me.val = o.value;
  });
  document.body.append(Tt);
  c.derive(() => {
    const o = ze.val;
    Object.assign(p, o), T.refresh();
  });
  document.body.append(da(d), Fe, pa({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => ra(), 200);
  setTimeout(() => {
    var _a;
    const o = Fe.__ctx;
    (o == null ? void 0 : o.camera) && (o == null ? void 0 : o.controls) && (o.camera.up.set(0, 0, 1), o.camera.position.set(2, -2, 1.2), o.controls.target.set(0, 0, 0.25), o.controls.update(), (_a = o.render) == null ? void 0 : _a.call(o));
  }, 800);
});
