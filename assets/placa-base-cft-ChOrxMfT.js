import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as c, P as jo } from "./theme-2eEBQPmF.js";
import { L as ko, M as Ut, b as Vt, C as Xt, V as Io, B as So, a as Eo } from "./Text-DyNVkyur.js";
import { a as Lo } from "./analyze-BydHtRcI.js";
import { d as qo, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Oo, a as He, e as Ge } from "./getViewer-DnVmZy1T.js";
import { e as Ho } from "./makeDraggable-zx2br6Yh.js";
import { g as Go } from "./getParameters-CIJBOwMB.js";
import { g as Do } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Rt = 2e8, Zt = 0.3, qe = Rt / (2 * (1 + Zt)), Oe = 78, $o = 25e4, Yo = 6e5, r = {
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
  }, De = c.state([]), $e = c.state([]), Ye = c.state({}), Je = c.state({}), Ue = c.state({}), Ve = c.state({}), Xe = c.state([]), Re = c.state({
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
    const s = r.B.value.val, w = r.H.value.val, rt = r.t_plate.value.val, d = r.bc.value.val, m = r.hc.value.val, v = r.t_col.value.val, G = r.L_col.value.val, te = Math.round(r.nBoltsX.value.val), gt = Math.round(r.nBoltsY.value.val), Bt = r.sx.value.val, ee = r.sy.value.val, F = r.d_bolt.value.val, dt = r.L_bolt.value.val, pt = r.L_proj.value.val, oe = r.d_hole.value.val / 2, mt = r.B_ped.value.val, ut = r.H_ped.value.val, Pt = r.h_ped.value.val, J = r.fc.value.val, U = r.Pu.value.val, wt = r.Mx.value.val, At = r.My.value.val, V = Math.round(r.nx.value.val), X = Math.round(r.ny.value.val), A = Math.round(r.nz_col.value.val), h = 0.04, x = [], _ = [], R = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map();
    function j(t, e, o) {
      return x.push([
        t,
        e,
        o
      ]), x.length - 1;
    }
    function D(t, e, o, n, a) {
      _.push([
        t,
        e,
        o,
        n
      ]);
      const l = _.length - 1;
      R.set(l, a), Z.set(l, Rt), K.set(l, Zt), Q.set(l, Oe), W.set(l, qe), tt.set(l, 0), ot.set(l, 0), et.set(l, 0), nt.set(l, 0);
    }
    function ne(t, e, o, n, a) {
      _.push([
        t,
        e
      ]);
      const l = _.length - 1;
      Z.set(l, Rt), K.set(l, Zt), Q.set(l, Oe), W.set(l, qe), tt.set(l, o), ot.set(l, n), et.set(l, n), nt.set(l, a), R.set(l, 0);
    }
    const Tt = s / V, Ct = w / X, E = [];
    for (let t = 0; t <= X; t++) {
      const e = [];
      for (let o = 0; o <= V; o++) e.push(j(-s / 2 + o * Tt, -w / 2 + t * Ct, h));
      E.push(e);
    }
    for (let t = 0; t < X; t++) for (let e = 0; e < V; e++) {
      const o = -s / 2 + (e + 0.5) * Tt, n = -w / 2 + (t + 0.5) * Ct;
      Math.hypot(o, n) < oe || D(E[t][e], E[t][e + 1], E[t + 1][e + 1], E[t + 1][e], rt);
    }
    function L(t, e) {
      let o = -1, n = 1 / 0;
      for (let a = 0; a <= X; a++) for (let l = 0; l <= V; l++) {
        const u = E[a][l], P = Math.hypot(x[u][0] - t, x[u][1] - e);
        P < n && (n = P, o = u);
      }
      return o;
    }
    const T = Math.max(2, Math.round(d / Tt)), C = Math.max(2, Math.round(m / Ct)), ft = d / T, ht = m / C, at = G / A, k = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= T; o++) {
        const n = -d / 2 + o * ft;
        t === 0 ? e.push(L(n, -m / 2)) : e.push(j(n, -m / 2, h + t * at));
      }
      k.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < T; e++) D(k[t][e], k[t][e + 1], k[t + 1][e + 1], k[t + 1][e], v);
    const I = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= T; o++) {
        const n = -d / 2 + o * ft;
        t === 0 ? e.push(L(n, m / 2)) : e.push(j(n, m / 2, h + t * at));
      }
      I.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < T; e++) D(I[t][e], I[t][e + 1], I[t + 1][e + 1], I[t + 1][e], v);
    const q = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= C; o++) {
        const n = -m / 2 + o * ht;
        t === 0 ? e.push(L(-d / 2, n)) : o === 0 ? e.push(k[t][0]) : o === C ? e.push(I[t][0]) : e.push(j(-d / 2, n, h + t * at));
      }
      q.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < C; e++) D(q[t][e], q[t][e + 1], q[t + 1][e + 1], q[t + 1][e], v);
    const O = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= C; o++) {
        const n = -m / 2 + o * ht;
        t === 0 ? e.push(L(d / 2, n)) : o === 0 ? e.push(k[t][T]) : o === C ? e.push(I[t][T]) : e.push(j(d / 2, n, h + t * at));
      }
      O.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < C; e++) D(O[t][e], O[t][e + 1], O[t + 1][e + 1], O[t + 1][e], v);
    const ae = 4700 * Math.sqrt(J / 1e3) * 1e3, se = 0.2, We = ae / (2 * (1 + se)), Nt = d - 2 * v, zt = m - 2 * v, N = 4, z = 4, xt = A, Ft = Nt / N, le = zt / z, to = G / xt, ce = (t, e) => Math.hypot(t, e) < oe + Ft * 0.5, p = [];
    for (let t = 0; t <= xt; t++) {
      const e = [];
      for (let o = 0; o <= z; o++) {
        const n = [];
        for (let a = 0; a <= N; a++) {
          const l = -Nt / 2 + a * Ft, u = -zt / 2 + o * le, P = h + rt + t * to;
          t === 0 && !ce(l, u) ? n.push(L(l, u)) : n.push(j(l, u, P));
        }
        e.push(n);
      }
      p.push(e);
    }
    function M(t, e, o, n) {
      _.push([
        t,
        e,
        o,
        n
      ]);
      const a = _.length - 1;
      R.set(a, 1e-3), Z.set(a, ae), K.set(a, se), Q.set(a, 24 / 9.80665), W.set(a, We), tt.set(a, 0), ot.set(a, 0), et.set(a, 0), nt.set(a, 0);
    }
    for (let t = 0; t < z; t++) for (let e = 0; e < N; e++) M(p[0][t][e], p[0][t][e + 1], p[0][t + 1][e + 1], p[0][t + 1][e]);
    for (let t = 0; t < xt; t++) for (let e = 0; e < N; e++) M(p[t][0][e], p[t][0][e + 1], p[t + 1][0][e + 1], p[t + 1][0][e]), M(p[t][z][e], p[t][z][e + 1], p[t + 1][z][e + 1], p[t + 1][z][e]);
    for (let t = 0; t < xt; t++) for (let e = 0; e < z; e++) M(p[t][e][0], p[t][e + 1][0], p[t + 1][e + 1][0], p[t + 1][e][0]), M(p[t][e][N], p[t][e + 1][N], p[t + 1][e + 1][N], p[t + 1][e][N]);
    const eo = Math.min(0.2, G * 0.4), ie = Math.min(0.1, (s - d) / 2 * 0.7), oo = Math.max(1, Math.round(eo / at));
    function S(t, e, o, n) {
      const [a, l] = t, [u, P] = e, Y = o[0][n], Jt = L(a + u * ie, l + P * ie), Le = o[Math.min(oo, o.length - 1)][n];
      D(Y, Jt, Le, Le, v);
    }
    const re = Math.max(1, Math.round(T * 0.25)), de = Math.max(1, Math.round(C * 0.25)), jt = Math.round(T / 2) - re, kt = Math.round(T / 2) + re, It = Math.round(C / 2) - de, St = Math.round(C / 2) + de, pe = -d / 2 + jt * ft, me = -d / 2 + kt * ft;
    S([
      pe,
      m / 2
    ], [
      0,
      1
    ], I, jt), S([
      me,
      m / 2
    ], [
      0,
      1
    ], I, kt), S([
      pe,
      -m / 2
    ], [
      0,
      -1
    ], k, jt), S([
      me,
      -m / 2
    ], [
      0,
      -1
    ], k, kt);
    const ue = -m / 2 + It * ht, fe = -m / 2 + St * ht;
    S([
      d / 2,
      ue
    ], [
      1,
      0
    ], O, It), S([
      d / 2,
      fe
    ], [
      1,
      0
    ], O, St), S([
      -d / 2,
      ue
    ], [
      -1,
      0
    ], q, It), S([
      -d / 2,
      fe
    ], [
      -1,
      0
    ], q, St);
    const he = Math.PI * F * F / 4, Et = Math.PI * F ** 4 / 64, xe = 2 * Et, st = [], no = (s - 2 * Bt) / Math.max(1, te - 1), ao = (w - 2 * ee) / Math.max(1, gt - 1);
    for (let t = 0; t < te; t++) for (let e = 0; e < gt; e++) {
      const o = -s / 2 + Bt + t * no, n = -w / 2 + ee + e * ao;
      Math.abs(o) < d / 2 + 5e-3 && Math.abs(n) < m / 2 + 5e-3 || st.push([
        o,
        n
      ]);
    }
    const so = [
      ...st
    ], be = 4700 * Math.sqrt(J / 1e3) * 1e3, ve = 0.2, lo = be / (2 * (1 + ve)), y = 10, g = 10, B = 6, Lt = mt / y, _e = ut / g, co = Pt / B, io = [];
    for (let t = 0; t <= X; t++) for (let e = 0; e <= V; e++) {
      const o = E[t][e];
      io.push({
        id: o,
        x: x[o][0],
        y: x[o][1]
      });
    }
    const i = [];
    for (let t = 0; t <= B; t++) {
      const e = [];
      for (let o = 0; o <= g; o++) {
        const n = [];
        for (let a = 0; a <= y; a++) n.push(j(-mt / 2 + a * Lt, -ut / 2 + o * _e, -Pt + t * co));
        e.push(n);
      }
      i.push(e);
    }
    function $(t, e, o, n) {
      _.push([
        t,
        e,
        o,
        n
      ]);
      const a = _.length - 1;
      R.set(a, 1e-3), Z.set(a, be), K.set(a, ve), Q.set(a, 24 / 9.80665), W.set(a, lo), tt.set(a, 0), ot.set(a, 0), et.set(a, 0), nt.set(a, 0);
    }
    for (let t = 0; t < g; t++) for (let e = 0; e < y; e++) $(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]);
    function ro(t, e) {
      for (const [o, n] of st) if (Math.hypot(t - o, e - n) < Lt * 0.6) return true;
      return false;
    }
    for (let t = 0; t < g; t++) for (let e = 0; e < y; e++) {
      const o = -mt / 2 + (e + 0.5) * Lt, n = -ut / 2 + (t + 0.5) * _e;
      ro(o, n) || $(i[B][t][e], i[B][t][e + 1], i[B][t + 1][e + 1], i[B][t + 1][e]);
    }
    for (let t = 0; t < B; t++) for (let e = 0; e < y; e++) $(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < y; e++) $(i[t][g][e], i[t][g][e + 1], i[t + 1][g][e + 1], i[t + 1][g][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < g; e++) $(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]);
    for (let t = 0; t < B; t++) for (let e = 0; e < g; e++) $(i[t][e][y], i[t][e + 1][y], i[t + 1][e + 1][y], i[t + 1][e][y]);
    function po(t, e) {
      let o = -1, n = 1 / 0;
      for (let a = 0; a <= g; a++) for (let l = 0; l <= y; l++) {
        const u = i[B][a][l], P = x[u], Y = Math.hypot(P[0] - t, P[1] - e);
        Y < n && (n = Y, o = u);
      }
      return o;
    }
    const Me = /* @__PURE__ */ new Map();
    for (let t = 0; t <= z; t++) for (let e = 0; e <= N; e++) {
      const o = -Nt / 2 + e * Ft, n = -zt / 2 + t * le;
      ce(o, n) && Me.set(`${e},${t}`, {
        idTop: p[0][t][e],
        idBot: po(o, n),
        x: o,
        y: n
      });
    }
    const b = (t, e) => Me.get(`${t},${e}`) ?? null;
    for (let t = 0; t < z; t++) for (let e = 0; e < N; e++) {
      const o = b(e, t), n = b(e + 1, t), a = b(e, t + 1), l = b(e + 1, t + 1);
      !o || !n || !a || !l || (M(o.idTop, n.idTop, l.idTop, a.idTop), M(o.idBot, n.idBot, l.idBot, a.idBot), (!b(e - 1, t) || !b(e - 1, t + 1)) && M(o.idBot, o.idTop, a.idTop, a.idBot), (!b(e + 2, t) || !b(e + 2, t + 1)) && M(n.idBot, l.idBot, l.idTop, n.idTop), (!b(e, t - 1) || !b(e + 1, t - 1)) && M(o.idBot, n.idBot, n.idTop, o.idTop), (!b(e, t + 2) || !b(e + 1, t + 2)) && M(a.idBot, a.idTop, l.idTop, l.idBot));
    }
    for (const [t, e] of so) {
      const o = j(t, e, h + pt), n = L(t, e), a = j(t, e, h - dt);
      ne(o, n, he, Et, xe), ne(n, a, he, Et, xe);
    }
    const ye = /* @__PURE__ */ new Map();
    x.forEach((t, e) => {
      const o = Math.abs(t[2] - (h - dt)) < 1e-6 && st.some(([a, l]) => Math.abs(t[0] - a) < 1e-6 && Math.abs(t[1] - l) < 1e-6), n = Math.abs(t[2] - -Pt) < 1e-6;
      (o || n) && ye.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const qt = [];
    x.forEach((t, e) => {
      Math.abs(t[2] - (h + G)) < 1e-6 && Math.abs(t[0]) <= d / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && qt.push(e);
    });
    const Ot = Math.max(1, qt.length), mo = -U / Ot, uo = wt / Ot, fo = At / Ot, ge = /* @__PURE__ */ new Map();
    for (const t of qt) ge.set(t, [
      0,
      0,
      mo,
      uo,
      fo,
      0
    ]);
    const Be = {
      supports: ye,
      loads: ge
    }, Ht = {
      elasticities: Z,
      shearModuli: W,
      areas: tt,
      momentsOfInertiaZ: et,
      momentsOfInertiaY: ot,
      torsionalConstants: nt,
      densities: Q,
      poissonsRatios: K,
      thicknesses: R
    };
    let Gt = {}, Dt = {};
    try {
      Gt = qo(x, _, Be, Ht), Dt = Lo(x, _, Ht, Gt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const lt = [], ho = new ko({
      color: 16755200
    });
    function ct(t, e) {
      const n = [];
      for (let u = 0; u <= 5 * 2; u++) {
        const P = u / 10, Y = h * (1 - P), Jt = u % 2 === 0 ? 0 : 8e-3;
        n.push(new Io(t + Jt, e, Y));
      }
      const a = new So().setFromPoints(n), l = new Eo(a, ho);
      lt.push(l);
    }
    ct(s / 2 - 0.04, w / 2 - 0.04), ct(-s / 2 + 0.04, w / 2 - 0.04), ct(s / 2 - 0.04, -w / 2 + 0.04), ct(-s / 2 + 0.04, -w / 2 + 0.04), ct(0, 0);
    const xo = new Ut({
      color: 8930338,
      roughness: 0.6
    }), Pe = 0.012, we = 0.025, bt = d / 2 - v - we, vt = m / 2 - v - we;
    for (const [t, e] of [
      [
        bt,
        vt
      ],
      [
        -bt,
        vt
      ],
      [
        bt,
        -vt
      ],
      [
        -bt,
        -vt
      ]
    ]) {
      const o = new Vt(new Xt(Pe / 2, Pe / 2, G, 8), xo);
      o.position.set(t, e, h + G / 2 + rt), o.rotation.x = Math.PI / 2, lt.push(o);
    }
    const bo = new Ut({
      color: 6710886,
      metalness: 0.5
    }), vo = new Ut({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Ae = F * 0.8, Te = F * 0.85, _o = h + pt + Ae / 2;
    for (const [t, e] of st) {
      const o = new Xt(F / 2, F / 2, dt + pt, 12), n = new Vt(o, bo);
      n.position.set(t, e, h + (-dt + pt) / 2), n.rotation.x = Math.PI / 2, lt.push(n);
      const a = new Xt(Te, Te, Ae, 6), l = new Vt(a, vo);
      l.position.set(t, e, _o), l.rotation.x = Math.PI / 2, lt.push(l);
    }
    let $t = 0;
    const Ce = Dt == null ? void 0 : Dt.vonMises;
    Ce && Ce.forEach((t) => t.forEach((e) => {
      e > $t && ($t = e);
    }));
    const Mo = 0.65, it = s * w, Ne = mt * ut, yo = Math.min(2, Math.sqrt(Ne / it)), go = Math.min(0.85 * J * it * yo, 1.7 * J * it), ze = Mo * go, Bo = U / Math.max(1, ze), Fe = Math.max(0, (s - 0.95 * Math.max(d, m)) / 2), Po = U / it, je = Fe * Math.sqrt(2 * Math.max(0, Po) / (0.9 * $o)), wo = je / Math.max(1e-6, rt), Ao = Math.max(0.05, s - 2 * Bt), To = Math.sqrt(wt * wt + At * At), ke = Math.max(0, To / Ao - U / 2) / Math.max(1, gt), Ie = 0.75 * (0.75 * Math.PI * F * F / 4) * Yo, Co = ke / Math.max(1, Ie), No = d * m, Yt = (d - 2 * v) * (m - 2 * v), Se = No - Yt, Ee = 35e4 * Se + 0.85 * J * Yt, zo = 0.75 * Ee, Fo = U / Math.max(1, zo);
    Re.val = {
      vmMax: $t,
      A1: it,
      A2: Ne,
      phiPp: ze,
      demandCapPp: Bo,
      m_cant: Fe,
      t_req: je,
      demandCapT: wo,
      T_anchor: ke,
      phiNn: Ie,
      demandCapAnchor: Co,
      As: Se,
      Ac: Yt,
      Pno_composite: Ee,
      demandCapPno: Fo
    }, De.val = x, $e.val = _, Ye.val = Be, Je.val = Ht, Ue.val = Gt, Ve.val = Dt, Xe.val = lt;
  });
  const Ze = Oo({
    mesh: {
      nodes: De,
      elements: $e,
      nodeInputs: Ye,
      elementInputs: Je,
      deformOutputs: Ue,
      analyzeOutputs: Ve
    },
    objects3D: Xe,
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
  }), Kt = document.createElement("div");
  Kt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const H = new jo({
    title: "\u{1F9EA} Placa base + col CFT",
    container: Kt,
    expanded: true
  }), f = {
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
  }, _t = (s) => s < 1 ? `${s.toFixed(2)} \u2713` : s < 1.2 ? `${s.toFixed(2)} \u26A0` : `${s.toFixed(2)} \u2717`, Mt = H.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  Mt.addBinding(f, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (s) => s.toExponential(3)
  });
  Mt.addBinding(f, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (s) => s.toExponential(3)
  });
  Mt.addBinding(f, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (s) => s.toFixed(0)
  });
  Mt.addBinding(f, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: _t
  });
  const yt = H.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  yt.addBinding(f, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  yt.addBinding(f, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (s) => s.toFixed(4)
  });
  yt.addBinding(f, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (s) => s.toFixed(0)
  });
  yt.addBinding(f, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: _t
  });
  const Qt = H.addFolder({
    title: "DG-1 espesor placa"
  });
  Qt.addBinding(f, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (s) => s.toFixed(4)
  });
  Qt.addBinding(f, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (s) => (s * 1e3).toFixed(1)
  });
  Qt.addBinding(f, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: _t
  });
  const Wt = H.addFolder({
    title: "ACI \xA717 anclaje"
  });
  Wt.addBinding(f, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (s) => s.toFixed(1)
  });
  Wt.addBinding(f, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (s) => s.toFixed(1)
  });
  Wt.addBinding(f, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: _t
  });
  const Jo = H.addFolder({
    title: "FEM"
  });
  Jo.addBinding(f, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (s) => s.toExponential(3)
  });
  const Ke = H.addFolder({
    title: "Unidades",
    expanded: false
  }), Qe = {
    stress: Ge.val,
    disp: He.val
  };
  Ke.addBinding(Qe, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (s) => {
    Ge.val = s.value;
  });
  Ke.addBinding(Qe, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (s) => {
    He.val = s.value;
  });
  document.body.append(Kt);
  c.derive(() => {
    const s = Re.val;
    Object.assign(f, s), H.refresh();
  });
  document.body.append(Go(r), Ze, Do({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => Ho(), 200);
  setTimeout(() => {
    var _a;
    const s = Ze.__ctx;
    (s == null ? void 0 : s.camera) && (s == null ? void 0 : s.controls) && (s.camera.up.set(0, 0, 1), s.camera.position.set(2, -2, 1.2), s.controls.target.set(0, 0, 0.25), s.controls.update(), (_a = s.render) == null ? void 0 : _a.call(s));
  }, 800);
});
