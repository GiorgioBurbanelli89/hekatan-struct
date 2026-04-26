import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as c, P as Lo } from "./theme-2eEBQPmF.js";
import { L as qo, M as _t, D as Go, f as Oo, P as Ho, g as Do, b as yt, C as Zt, V as $o, B as Yo, a as Jo } from "./Text-BajK4Ymq.js";
import { a as Uo } from "./analyze-BydHtRcI.js";
import { d as Vo, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Xo, a as $e, e as Ye } from "./getViewer-CZ5JMuv5.js";
import { e as Ro } from "./makeDraggable-zx2br6Yh.js";
import { g as Zo } from "./getParameters-CIJBOwMB.js";
import { g as Ko } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Kt = 2e8, Qt = 0.3, He = Kt / (2 * (1 + Qt)), De = 78, Qo = 25e4, Wo = 6e5, r = {
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
    d_hole: {
      value: c.state(0.2),
      min: 0.1,
      max: 0.4,
      step: 0.02,
      label: "\xD8 orificio placa (m)"
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
  }, Je = c.state([]), Ue = c.state([]), Ve = c.state({}), Xe = c.state({}), Re = c.state({}), Ze = c.state({}), Ke = c.state([]), Qe = c.state({
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
    const n = r.B.value.val, x = r.H.value.val, V = r.t_plate.value.val, d = r.bc.value.val, m = r.hc.value.val, M = r.t_col.value.val, D = r.L_col.value.val, oe = Math.round(r.nBoltsX.value.val), wt = Math.round(r.nBoltsY.value.val), Tt = r.sx.value.val, ae = r.sy.value.val, F = r.d_bolt.value.val, pt = r.L_bolt.value.val, mt = r.L_proj.value.val, At = r.d_hole.value.val / 2, ut = r.B_ped.value.val, ht = r.H_ped.value.val, Ct = r.h_ped.value.val, X = r.fc.value.val, R = r.Pu.value.val, Nt = r.Mx.value.val, zt = r.My.value.val, Z = Math.round(r.nx.value.val), K = Math.round(r.ny.value.val), T = Math.round(r.nz_col.value.val), f = 0.04, b = [], _ = [], Q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map();
    function S(t, e, o) {
      return b.push([
        t,
        e,
        o
      ]), b.length - 1;
    }
    function $(t, e, o, a, s) {
      _.push([
        t,
        e,
        o,
        a
      ]);
      const l = _.length - 1;
      Q.set(l, s), W.set(l, Kt), tt.set(l, Qt), et.set(l, De), ot.set(l, He), at.set(l, 0), st.set(l, 0), nt.set(l, 0), lt.set(l, 0);
    }
    function ne(t, e, o, a, s) {
      _.push([
        t,
        e
      ]);
      const l = _.length - 1;
      W.set(l, Kt), tt.set(l, Qt), et.set(l, De), ot.set(l, He), at.set(l, o), st.set(l, a), nt.set(l, a), lt.set(l, s), Q.set(l, 0);
    }
    const Ft = n / Z, St = x / K, E = [];
    for (let t = 0; t <= K; t++) {
      const e = [];
      for (let o = 0; o <= Z; o++) e.push(S(-n / 2 + o * Ft, -x / 2 + t * St, f));
      E.push(e);
    }
    for (let t = 0; t < K; t++) for (let e = 0; e < Z; e++) {
      const o = -n / 2 + (e + 0.5) * Ft, a = -x / 2 + (t + 0.5) * St;
      Math.hypot(o, a) < At || $(E[t][e], E[t][e + 1], E[t + 1][e + 1], E[t + 1][e], V);
    }
    function L(t, e) {
      let o = -1, a = 1 / 0;
      for (let s = 0; s <= K; s++) for (let l = 0; l <= Z; l++) {
        const u = E[s][l], w = Math.hypot(b[u][0] - t, b[u][1] - e);
        w < a && (a = w, o = u);
      }
      return o;
    }
    const A = Math.max(2, Math.round(d / Ft)), C = Math.max(2, Math.round(m / St)), ft = d / A, xt = m / C, ct = D / T, j = [];
    for (let t = 0; t <= T; t++) {
      const e = [];
      for (let o = 0; o <= A; o++) {
        const a = -d / 2 + o * ft;
        t === 0 ? e.push(L(a, -m / 2)) : e.push(S(a, -m / 2, f + t * ct));
      }
      j.push(e);
    }
    for (let t = 0; t < T; t++) for (let e = 0; e < A; e++) $(j[t][e], j[t][e + 1], j[t + 1][e + 1], j[t + 1][e], M);
    const k = [];
    for (let t = 0; t <= T; t++) {
      const e = [];
      for (let o = 0; o <= A; o++) {
        const a = -d / 2 + o * ft;
        t === 0 ? e.push(L(a, m / 2)) : e.push(S(a, m / 2, f + t * ct));
      }
      k.push(e);
    }
    for (let t = 0; t < T; t++) for (let e = 0; e < A; e++) $(k[t][e], k[t][e + 1], k[t + 1][e + 1], k[t + 1][e], M);
    const q = [];
    for (let t = 0; t <= T; t++) {
      const e = [];
      for (let o = 0; o <= C; o++) {
        const a = -m / 2 + o * xt;
        t === 0 ? e.push(L(-d / 2, a)) : o === 0 ? e.push(j[t][0]) : o === C ? e.push(k[t][0]) : e.push(S(-d / 2, a, f + t * ct));
      }
      q.push(e);
    }
    for (let t = 0; t < T; t++) for (let e = 0; e < C; e++) $(q[t][e], q[t][e + 1], q[t + 1][e + 1], q[t + 1][e], M);
    const G = [];
    for (let t = 0; t <= T; t++) {
      const e = [];
      for (let o = 0; o <= C; o++) {
        const a = -m / 2 + o * xt;
        t === 0 ? e.push(L(d / 2, a)) : o === 0 ? e.push(j[t][A]) : o === C ? e.push(k[t][A]) : e.push(S(d / 2, a, f + t * ct));
      }
      G.push(e);
    }
    for (let t = 0; t < T; t++) for (let e = 0; e < C; e++) $(G[t][e], G[t][e + 1], G[t + 1][e + 1], G[t + 1][e], M);
    const se = 4700 * Math.sqrt(X / 1e3) * 1e3, le = 0.2, oo = se / (2 * (1 + le)), jt = d - 2 * M, kt = m - 2 * M, N = 4, z = 4, bt = T, It = jt / N, ce = kt / z, ao = D / bt, ie = (t, e) => Math.hypot(t, e) < At + It * 0.5, p = [];
    for (let t = 0; t <= bt; t++) {
      const e = [];
      for (let o = 0; o <= z; o++) {
        const a = [];
        for (let s = 0; s <= N; s++) {
          const l = -jt / 2 + s * It, u = -kt / 2 + o * ce, w = f + V + t * ao;
          t === 0 && !ie(l, u) ? a.push(L(l, u)) : a.push(S(l, u, w));
        }
        e.push(a);
      }
      p.push(e);
    }
    function y(t, e, o, a) {
      _.push([
        t,
        e,
        o,
        a
      ]);
      const s = _.length - 1;
      Q.set(s, 1e-3), W.set(s, se), tt.set(s, le), et.set(s, 24 / 9.80665), ot.set(s, oo), at.set(s, 0), st.set(s, 0), nt.set(s, 0), lt.set(s, 0);
    }
    for (let t = 0; t < z; t++) for (let e = 0; e < N; e++) y(p[0][t][e], p[0][t][e + 1], p[0][t + 1][e + 1], p[0][t + 1][e]);
    for (let t = 0; t < bt; t++) for (let e = 0; e < N; e++) y(p[t][0][e], p[t][0][e + 1], p[t + 1][0][e + 1], p[t + 1][0][e]), y(p[t][z][e], p[t][z][e + 1], p[t + 1][z][e + 1], p[t + 1][z][e]);
    for (let t = 0; t < bt; t++) for (let e = 0; e < z; e++) y(p[t][e][0], p[t][e + 1][0], p[t + 1][e + 1][0], p[t + 1][e][0]), y(p[t][e][N], p[t][e + 1][N], p[t + 1][e + 1][N], p[t + 1][e][N]);
    const no = Math.min(0.2, D * 0.4), re = Math.min(0.1, (n - d) / 2 * 0.7), so = Math.max(1, Math.round(no / ct));
    function I(t, e, o, a) {
      const [s, l] = t, [u, w] = e, U = o[0][a], Rt = L(s + u * re, l + w * re), Oe = o[Math.min(so, o.length - 1)][a];
      $(U, Rt, Oe, Oe, M);
    }
    const de = Math.max(1, Math.round(A * 0.25)), pe = Math.max(1, Math.round(C * 0.25)), Et = Math.round(A / 2) - de, Lt = Math.round(A / 2) + de, qt = Math.round(C / 2) - pe, Gt = Math.round(C / 2) + pe, me = -d / 2 + Et * ft, ue = -d / 2 + Lt * ft;
    I([
      me,
      m / 2
    ], [
      0,
      1
    ], k, Et), I([
      ue,
      m / 2
    ], [
      0,
      1
    ], k, Lt), I([
      me,
      -m / 2
    ], [
      0,
      -1
    ], j, Et), I([
      ue,
      -m / 2
    ], [
      0,
      -1
    ], j, Lt);
    const he = -m / 2 + qt * xt, fe = -m / 2 + Gt * xt;
    I([
      d / 2,
      he
    ], [
      1,
      0
    ], G, qt), I([
      d / 2,
      fe
    ], [
      1,
      0
    ], G, Gt), I([
      -d / 2,
      he
    ], [
      -1,
      0
    ], q, qt), I([
      -d / 2,
      fe
    ], [
      -1,
      0
    ], q, Gt);
    const xe = Math.PI * F * F / 4, Ot = Math.PI * F ** 4 / 64, be = 2 * Ot, it = [], lo = (n - 2 * Tt) / Math.max(1, oe - 1), co = (x - 2 * ae) / Math.max(1, wt - 1);
    for (let t = 0; t < oe; t++) for (let e = 0; e < wt; e++) {
      const o = -n / 2 + Tt + t * lo, a = -x / 2 + ae + e * co;
      Math.abs(o) < d / 2 + 5e-3 && Math.abs(a) < m / 2 + 5e-3 || it.push([
        o,
        a
      ]);
    }
    const io = [
      ...it
    ], ve = 4700 * Math.sqrt(X / 1e3) * 1e3, Me = 0.2, ro = ve / (2 * (1 + Me)), g = 10, B = 10, P = 6, Ht = ut / g, _e = ht / B, po = Ct / P, mo = [];
    for (let t = 0; t <= K; t++) for (let e = 0; e <= Z; e++) {
      const o = E[t][e];
      mo.push({
        id: o,
        x: b[o][0],
        y: b[o][1]
      });
    }
    const i = [];
    for (let t = 0; t <= P; t++) {
      const e = [];
      for (let o = 0; o <= B; o++) {
        const a = [];
        for (let s = 0; s <= g; s++) a.push(S(-ut / 2 + s * Ht, -ht / 2 + o * _e, -Ct + t * po));
        e.push(a);
      }
      i.push(e);
    }
    function Y(t, e, o, a) {
      _.push([
        t,
        e,
        o,
        a
      ]);
      const s = _.length - 1;
      Q.set(s, 1e-3), W.set(s, ve), tt.set(s, Me), et.set(s, 24 / 9.80665), ot.set(s, ro), at.set(s, 0), st.set(s, 0), nt.set(s, 0), lt.set(s, 0);
    }
    for (let t = 0; t < B; t++) for (let e = 0; e < g; e++) Y(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]);
    function uo(t, e) {
      for (const [o, a] of it) if (Math.hypot(t - o, e - a) < Ht * 0.6) return true;
      return false;
    }
    for (let t = 0; t < B; t++) for (let e = 0; e < g; e++) {
      const o = -ut / 2 + (e + 0.5) * Ht, a = -ht / 2 + (t + 0.5) * _e;
      uo(o, a) || Y(i[P][t][e], i[P][t][e + 1], i[P][t + 1][e + 1], i[P][t + 1][e]);
    }
    for (let t = 0; t < P; t++) for (let e = 0; e < g; e++) Y(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]);
    for (let t = 0; t < P; t++) for (let e = 0; e < g; e++) Y(i[t][B][e], i[t][B][e + 1], i[t + 1][B][e + 1], i[t + 1][B][e]);
    for (let t = 0; t < P; t++) for (let e = 0; e < B; e++) Y(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]);
    for (let t = 0; t < P; t++) for (let e = 0; e < B; e++) Y(i[t][e][g], i[t][e + 1][g], i[t + 1][e + 1][g], i[t + 1][e][g]);
    function ho(t, e) {
      let o = -1, a = 1 / 0;
      for (let s = 0; s <= B; s++) for (let l = 0; l <= g; l++) {
        const u = i[P][s][l], w = b[u], U = Math.hypot(w[0] - t, w[1] - e);
        U < a && (a = U, o = u);
      }
      return o;
    }
    const ye = /* @__PURE__ */ new Map();
    for (let t = 0; t <= z; t++) for (let e = 0; e <= N; e++) {
      const o = -jt / 2 + e * It, a = -kt / 2 + t * ce;
      ie(o, a) && ye.set(`${e},${t}`, {
        idTop: p[0][t][e],
        idBot: ho(o, a),
        x: o,
        y: a
      });
    }
    const v = (t, e) => ye.get(`${t},${e}`) ?? null;
    for (let t = 0; t < z; t++) for (let e = 0; e < N; e++) {
      const o = v(e, t), a = v(e + 1, t), s = v(e, t + 1), l = v(e + 1, t + 1);
      !o || !a || !s || !l || (y(o.idTop, a.idTop, l.idTop, s.idTop), y(o.idBot, a.idBot, l.idBot, s.idBot), (!v(e - 1, t) || !v(e - 1, t + 1)) && y(o.idBot, o.idTop, s.idTop, s.idBot), (!v(e + 2, t) || !v(e + 2, t + 1)) && y(a.idBot, l.idBot, l.idTop, a.idTop), (!v(e, t - 1) || !v(e + 1, t - 1)) && y(o.idBot, a.idBot, a.idTop, o.idTop), (!v(e, t + 2) || !v(e + 1, t + 2)) && y(s.idBot, s.idTop, l.idTop, l.idBot));
    }
    for (const [t, e] of io) {
      const o = S(t, e, f + mt), a = L(t, e), s = S(t, e, f - pt);
      ne(o, a, xe, Ot, be), ne(a, s, xe, Ot, be);
    }
    const ge = /* @__PURE__ */ new Map();
    b.forEach((t, e) => {
      const o = Math.abs(t[2] - (f - pt)) < 1e-6 && it.some(([s, l]) => Math.abs(t[0] - s) < 1e-6 && Math.abs(t[1] - l) < 1e-6), a = Math.abs(t[2] - -Ct) < 1e-6;
      (o || a) && ge.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const Dt = [];
    b.forEach((t, e) => {
      Math.abs(t[2] - (f + D)) < 1e-6 && Math.abs(t[0]) <= d / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && Dt.push(e);
    });
    const $t = Math.max(1, Dt.length), fo = -R / $t, xo = Nt / $t, bo = zt / $t, Be = /* @__PURE__ */ new Map();
    for (const t of Dt) Be.set(t, [
      0,
      0,
      fo,
      xo,
      bo,
      0
    ]);
    const Pe = {
      supports: ge,
      loads: Be
    }, Yt = {
      elasticities: W,
      shearModuli: ot,
      areas: at,
      momentsOfInertiaZ: nt,
      momentsOfInertiaY: st,
      torsionalConstants: lt,
      densities: et,
      poissonsRatios: tt,
      thicknesses: Q
    };
    let Jt = {}, Ut = {};
    try {
      Jt = Vo(b, _, Pe, Yt), Ut = Uo(b, _, Yt, Jt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const J = [], vo = new qo({
      color: 16755200
    });
    function rt(t, e) {
      const a = [];
      for (let u = 0; u <= 5 * 2; u++) {
        const w = u / 10, U = f * (1 - w), Rt = u % 2 === 0 ? 0 : 8e-3;
        a.push(new $o(t + Rt, e, U));
      }
      const s = new Yo().setFromPoints(a), l = new Jo(s, vo);
      J.push(l);
    }
    rt(n / 2 - 0.04, x / 2 - 0.04), rt(-n / 2 + 0.04, x / 2 - 0.04), rt(n / 2 - 0.04, -x / 2 + 0.04), rt(-n / 2 + 0.04, -x / 2 + 0.04), rt(0, 0);
    const Mo = new _t({
      color: 12105912,
      metalness: 0.7,
      roughness: 0.4,
      transparent: true,
      opacity: 0.55,
      side: Go
    }), O = new Oo();
    O.moveTo(-n / 2, -x / 2), O.lineTo(n / 2, -x / 2), O.lineTo(n / 2, x / 2), O.lineTo(-n / 2, x / 2), O.closePath();
    const we = new Ho();
    we.absarc(0, 0, At, 0, Math.PI * 2, true), O.holes.push(we);
    const _o = new Do(O, {
      depth: V,
      bevelEnabled: false
    }), Te = new yt(_o, Mo);
    Te.position.set(0, 0, f), J.push(Te);
    const yo = new _t({
      color: 8930338,
      roughness: 0.6
    }), Ae = 0.012, Ce = 0.025, vt = d / 2 - M - Ce, Mt = m / 2 - M - Ce;
    for (const [t, e] of [
      [
        vt,
        Mt
      ],
      [
        -vt,
        Mt
      ],
      [
        vt,
        -Mt
      ],
      [
        -vt,
        -Mt
      ]
    ]) {
      const o = new yt(new Zt(Ae / 2, Ae / 2, D, 8), yo);
      o.position.set(t, e, f + D / 2 + V), o.rotation.x = Math.PI / 2, J.push(o);
    }
    const go = new _t({
      color: 6710886,
      metalness: 0.5
    }), Bo = new _t({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Ne = F * 0.8, ze = F * 0.85, Po = f + mt + Ne / 2;
    for (const [t, e] of it) {
      const o = new Zt(F / 2, F / 2, pt + mt, 12), a = new yt(o, go);
      a.position.set(t, e, f + (-pt + mt) / 2), a.rotation.x = Math.PI / 2, J.push(a);
      const s = new Zt(ze, ze, Ne, 6), l = new yt(s, Bo);
      l.position.set(t, e, Po), l.rotation.x = Math.PI / 2, J.push(l);
    }
    let Vt = 0;
    const Fe = Ut == null ? void 0 : Ut.vonMises;
    Fe && Fe.forEach((t) => t.forEach((e) => {
      e > Vt && (Vt = e);
    }));
    const wo = 0.65, dt = n * x, Se = ut * ht, To = Math.min(2, Math.sqrt(Se / dt)), Ao = Math.min(0.85 * X * dt * To, 1.7 * X * dt), je = wo * Ao, Co = R / Math.max(1, je), ke = Math.max(0, (n - 0.95 * Math.max(d, m)) / 2), No = R / dt, Ie = ke * Math.sqrt(2 * Math.max(0, No) / (0.9 * Qo)), zo = Ie / Math.max(1e-6, V), Fo = Math.max(0.05, n - 2 * Tt), So = Math.sqrt(Nt * Nt + zt * zt), Ee = Math.max(0, So / Fo - R / 2) / Math.max(1, wt), Le = 0.75 * (0.75 * Math.PI * F * F / 4) * Wo, jo = Ee / Math.max(1, Le), ko = d * m, Xt = (d - 2 * M) * (m - 2 * M), qe = ko - Xt, Ge = 35e4 * qe + 0.85 * X * Xt, Io = 0.75 * Ge, Eo = R / Math.max(1, Io);
    Qe.val = {
      vmMax: Vt,
      A1: dt,
      A2: Se,
      phiPp: je,
      demandCapPp: Co,
      m_cant: ke,
      t_req: Ie,
      demandCapT: zo,
      T_anchor: Ee,
      phiNn: Le,
      demandCapAnchor: jo,
      As: qe,
      Ac: Xt,
      Pno_composite: Ge,
      demandCapPno: Eo
    }, Je.val = b, Ue.val = _, Ve.val = Pe, Xe.val = Yt, Re.val = Jt, Ze.val = Ut, Ke.val = J;
  });
  const We = Xo({
    mesh: {
      nodes: Je,
      elements: Ue,
      nodeInputs: Ve,
      elementInputs: Xe,
      deformOutputs: Re,
      analyzeOutputs: Ze
    },
    objects3D: Ke,
    settingsObj: {
      deformedShape: false,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 1,
      custom3D: true,
      loads: true,
      supports: false,
      showCotas: false,
      displayScale: 0.15
    }
  }), Wt = document.createElement("div");
  Wt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const H = new Lo({
    title: "\u{1F9EA} Placa base + col CFT",
    container: Wt,
    expanded: true
  }), h = {
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
  }, gt = (n) => n < 1 ? `${n.toFixed(2)} \u2713` : n < 1.2 ? `${n.toFixed(2)} \u26A0` : `${n.toFixed(2)} \u2717`, Bt = H.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  Bt.addBinding(h, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (n) => n.toExponential(3)
  });
  Bt.addBinding(h, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (n) => n.toExponential(3)
  });
  Bt.addBinding(h, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (n) => n.toFixed(0)
  });
  Bt.addBinding(h, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: gt
  });
  const Pt = H.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  Pt.addBinding(h, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (n) => n.toFixed(4)
  });
  Pt.addBinding(h, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (n) => n.toFixed(4)
  });
  Pt.addBinding(h, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (n) => n.toFixed(0)
  });
  Pt.addBinding(h, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: gt
  });
  const te = H.addFolder({
    title: "DG-1 espesor placa"
  });
  te.addBinding(h, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (n) => n.toFixed(4)
  });
  te.addBinding(h, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (n) => (n * 1e3).toFixed(1)
  });
  te.addBinding(h, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: gt
  });
  const ee = H.addFolder({
    title: "ACI \xA717 anclaje"
  });
  ee.addBinding(h, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (n) => n.toFixed(1)
  });
  ee.addBinding(h, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (n) => n.toFixed(1)
  });
  ee.addBinding(h, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: gt
  });
  const ta = H.addFolder({
    title: "FEM"
  });
  ta.addBinding(h, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (n) => n.toExponential(3)
  });
  const to = H.addFolder({
    title: "Unidades",
    expanded: false
  }), eo = {
    stress: Ye.val,
    disp: $e.val
  };
  to.addBinding(eo, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (n) => {
    Ye.val = n.value;
  });
  to.addBinding(eo, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (n) => {
    $e.val = n.value;
  });
  document.body.append(Wt);
  c.derive(() => {
    const n = Qe.val;
    Object.assign(h, n), H.refresh();
  });
  document.body.append(Zo(r), We, Ko({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => Ro(), 200);
  setTimeout(() => {
    var _a;
    const n = We.__ctx;
    (n == null ? void 0 : n.camera) && (n == null ? void 0 : n.controls) && (n.camera.up.set(0, 0, 1), n.camera.position.set(2, -2, 1.2), n.controls.target.set(0, 0, 0.25), n.controls.update(), (_a = n.render) == null ? void 0 : _a.call(n));
  }, 800);
});
