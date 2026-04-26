import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as c, P as ko } from "./theme-2eEBQPmF.js";
import { L as Io, M as Ut, b as Vt, C as Xt, V as So, B as Eo, a as Lo } from "./Text-CRP5ss3E.js";
import { a as qo } from "./analyze-BydHtRcI.js";
import { d as Oo, __tla as __tla_0 } from "./didacticCpp-B5f-GyHC.js";
import { g as Ho, a as Ge, e as De } from "./getViewer-f41G16-n.js";
import { e as Go } from "./makeDraggable-zx2br6Yh.js";
import { g as Do } from "./getParameters-CIJBOwMB.js";
import { g as $o } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
import { __tla as __tla_1 } from "./deform-CGyu4ATa.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const Rt = 2e8, Zt = 0.3, Oe = Rt / (2 * (1 + Zt)), He = 78, Yo = 25e4, Jo = 6e5, d = {
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
  }, $e = c.state([]), Ye = c.state([]), Je = c.state({}), Ue = c.state({}), Ve = c.state({}), Xe = c.state({}), Re = c.state([]), Ze = c.state({
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
    const s = d.B.value.val, w = d.H.value.val, dt = d.t_plate.value.val, p = d.bc.value.val, m = d.hc.value.val, x = d.t_col.value.val, D = d.L_col.value.val, te = Math.round(d.nBoltsX.value.val), gt = Math.round(d.nBoltsY.value.val), Bt = d.sx.value.val, ee = d.sy.value.val, F = d.d_bolt.value.val, pt = d.L_bolt.value.val, mt = d.L_proj.value.val, oe = d.d_hole.value.val / 2, ut = d.B_ped.value.val, ft = d.H_ped.value.val, Pt = d.h_ped.value.val, U = d.fc.value.val, V = d.Pu.value.val, wt = d.Mx.value.val, At = d.My.value.val, X = Math.round(d.nx.value.val), R = Math.round(d.ny.value.val), A = Math.round(d.nz_col.value.val), h = 0.04, b = [], M = [], Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map();
    function j(t, e, o) {
      return b.push([
        t,
        e,
        o
      ]), b.length - 1;
    }
    function $(t, e, o, n, a) {
      M.push([
        t,
        e,
        o,
        n
      ]);
      const l = M.length - 1;
      Z.set(l, a), K.set(l, Rt), Q.set(l, Zt), W.set(l, He), tt.set(l, Oe), et.set(l, 0), nt.set(l, 0), ot.set(l, 0), at.set(l, 0);
    }
    function ne(t, e, o, n, a) {
      M.push([
        t,
        e
      ]);
      const l = M.length - 1;
      K.set(l, Rt), Q.set(l, Zt), W.set(l, He), tt.set(l, Oe), et.set(l, o), nt.set(l, n), ot.set(l, n), at.set(l, a), Z.set(l, 0);
    }
    const Tt = s / X, Ct = w / R, L = [];
    for (let t = 0; t <= R; t++) {
      const e = [];
      for (let o = 0; o <= X; o++) e.push(j(-s / 2 + o * Tt, -w / 2 + t * Ct, h));
      L.push(e);
    }
    for (let t = 0; t < R; t++) for (let e = 0; e < X; e++) {
      const o = -s / 2 + (e + 0.5) * Tt, n = -w / 2 + (t + 0.5) * Ct;
      Math.hypot(o, n) < oe || $(L[t][e], L[t][e + 1], L[t + 1][e + 1], L[t + 1][e], dt);
    }
    function q(t, e) {
      let o = -1, n = 1 / 0;
      for (let a = 0; a <= R; a++) for (let l = 0; l <= X; l++) {
        const u = L[a][l], P = Math.hypot(b[u][0] - t, b[u][1] - e);
        P < n && (n = P, o = u);
      }
      return o;
    }
    const T = Math.max(2, Math.round(p / Tt)), C = Math.max(2, Math.round(m / Ct)), ht = p / T, xt = m / C, st = D / A, k = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= T; o++) {
        const n = -p / 2 + o * ht;
        t === 0 ? e.push(q(n, -m / 2)) : e.push(j(n, -m / 2, h + t * st));
      }
      k.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < T; e++) $(k[t][e], k[t][e + 1], k[t + 1][e + 1], k[t + 1][e], x);
    const I = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= T; o++) {
        const n = -p / 2 + o * ht;
        t === 0 ? e.push(q(n, m / 2)) : e.push(j(n, m / 2, h + t * st));
      }
      I.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < T; e++) $(I[t][e], I[t][e + 1], I[t + 1][e + 1], I[t + 1][e], x);
    const O = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= C; o++) {
        const n = -m / 2 + o * xt;
        t === 0 ? e.push(q(-p / 2, n)) : o === 0 ? e.push(k[t][0]) : o === C ? e.push(I[t][0]) : e.push(j(-p / 2, n, h + t * st));
      }
      O.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < C; e++) $(O[t][e], O[t][e + 1], O[t + 1][e + 1], O[t + 1][e], x);
    const H = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= C; o++) {
        const n = -m / 2 + o * xt;
        t === 0 ? e.push(q(p / 2, n)) : o === 0 ? e.push(k[t][T]) : o === C ? e.push(I[t][T]) : e.push(j(p / 2, n, h + t * st));
      }
      H.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < C; e++) $(H[t][e], H[t][e + 1], H[t + 1][e + 1], H[t + 1][e], x);
    const ae = 4700 * Math.sqrt(U / 1e3) * 1e3, se = 0.2, to = ae / (2 * (1 + se)), le = 2 * x, Nt = p - 2 * x - le, zt = m - 2 * x - le, N = 4, z = 4, S = A, Ft = Nt / N, ce = zt / z, eo = D / S, ie = (t, e) => Math.hypot(t, e) < oe + Ft * 0.5, i = [];
    for (let t = 0; t <= S; t++) {
      const e = [];
      for (let o = 0; o <= z; o++) {
        const n = [];
        for (let a = 0; a <= N; a++) {
          const l = -Nt / 2 + a * Ft, u = -zt / 2 + o * ce, P = h + dt + t * eo;
          t === 0 && !ie(l, u) ? n.push(q(l, u)) : n.push(j(l, u, P));
        }
        e.push(n);
      }
      i.push(e);
    }
    function v(t, e, o, n) {
      M.push([
        t,
        e,
        o,
        n
      ]);
      const a = M.length - 1;
      Z.set(a, 1e-3), K.set(a, ae), Q.set(a, se), W.set(a, 24 / 9.80665), tt.set(a, to), et.set(a, 0), nt.set(a, 0), ot.set(a, 0), at.set(a, 0);
    }
    for (let t = 0; t < z; t++) for (let e = 0; e < N; e++) v(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]), v(i[S][t][e], i[S][t][e + 1], i[S][t + 1][e + 1], i[S][t + 1][e]);
    for (let t = 0; t < S; t++) for (let e = 0; e < N; e++) v(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]), v(i[t][z][e], i[t][z][e + 1], i[t + 1][z][e + 1], i[t + 1][z][e]);
    for (let t = 0; t < S; t++) for (let e = 0; e < z; e++) v(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]), v(i[t][e][N], i[t][e + 1][N], i[t + 1][e + 1][N], i[t + 1][e][N]);
    const oo = Math.min(0.2, D * 0.4), re = Math.min(0.1, (s - p) / 2 * 0.7), no = Math.max(1, Math.round(oo / st));
    function E(t, e, o, n) {
      const [a, l] = t, [u, P] = e, J = o[0][n], Jt = q(a + u * re, l + P * re), qe = o[Math.min(no, o.length - 1)][n];
      $(J, Jt, qe, qe, x);
    }
    const de = Math.max(1, Math.round(T * 0.25)), pe = Math.max(1, Math.round(C * 0.25)), jt = Math.round(T / 2) - de, kt = Math.round(T / 2) + de, It = Math.round(C / 2) - pe, St = Math.round(C / 2) + pe, me = -p / 2 + jt * ht, ue = -p / 2 + kt * ht;
    E([
      me,
      m / 2
    ], [
      0,
      1
    ], I, jt), E([
      ue,
      m / 2
    ], [
      0,
      1
    ], I, kt), E([
      me,
      -m / 2
    ], [
      0,
      -1
    ], k, jt), E([
      ue,
      -m / 2
    ], [
      0,
      -1
    ], k, kt);
    const fe = -m / 2 + It * xt, he = -m / 2 + St * xt;
    E([
      p / 2,
      fe
    ], [
      1,
      0
    ], H, It), E([
      p / 2,
      he
    ], [
      1,
      0
    ], H, St), E([
      -p / 2,
      fe
    ], [
      -1,
      0
    ], O, It), E([
      -p / 2,
      he
    ], [
      -1,
      0
    ], O, St);
    const xe = Math.PI * F * F / 4, Et = Math.PI * F ** 4 / 64, be = 2 * Et, lt = [], ao = (s - 2 * Bt) / Math.max(1, te - 1), so = (w - 2 * ee) / Math.max(1, gt - 1);
    for (let t = 0; t < te; t++) for (let e = 0; e < gt; e++) {
      const o = -s / 2 + Bt + t * ao, n = -w / 2 + ee + e * so;
      Math.abs(o) < p / 2 + 5e-3 && Math.abs(n) < m / 2 + 5e-3 || lt.push([
        o,
        n
      ]);
    }
    const lo = [
      ...lt
    ], ve = 4700 * Math.sqrt(U / 1e3) * 1e3, _e = 0.2, co = ve / (2 * (1 + _e)), y = 10, g = 10, B = 6, Lt = ut / y, Me = ft / g, io = Pt / B, ro = [];
    for (let t = 0; t <= R; t++) for (let e = 0; e <= X; e++) {
      const o = L[t][e];
      ro.push({
        id: o,
        x: b[o][0],
        y: b[o][1]
      });
    }
    const r = [];
    for (let t = 0; t <= B; t++) {
      const e = [];
      for (let o = 0; o <= g; o++) {
        const n = [];
        for (let a = 0; a <= y; a++) n.push(j(-ut / 2 + a * Lt, -ft / 2 + o * Me, -Pt + t * io));
        e.push(n);
      }
      r.push(e);
    }
    function Y(t, e, o, n) {
      M.push([
        t,
        e,
        o,
        n
      ]);
      const a = M.length - 1;
      Z.set(a, 1e-3), K.set(a, ve), Q.set(a, _e), W.set(a, 24 / 9.80665), tt.set(a, co), et.set(a, 0), nt.set(a, 0), ot.set(a, 0), at.set(a, 0);
    }
    for (let t = 0; t < g; t++) for (let e = 0; e < y; e++) Y(r[0][t][e], r[0][t][e + 1], r[0][t + 1][e + 1], r[0][t + 1][e]);
    function po(t, e) {
      for (const [o, n] of lt) if (Math.hypot(t - o, e - n) < Lt * 0.6) return true;
      return false;
    }
    for (let t = 0; t < g; t++) for (let e = 0; e < y; e++) {
      const o = -ut / 2 + (e + 0.5) * Lt, n = -ft / 2 + (t + 0.5) * Me;
      po(o, n) || Y(r[B][t][e], r[B][t][e + 1], r[B][t + 1][e + 1], r[B][t + 1][e]);
    }
    for (let t = 0; t < B; t++) for (let e = 0; e < y; e++) Y(r[t][0][e], r[t][0][e + 1], r[t + 1][0][e + 1], r[t + 1][0][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < y; e++) Y(r[t][g][e], r[t][g][e + 1], r[t + 1][g][e + 1], r[t + 1][g][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < g; e++) Y(r[t][e][0], r[t][e + 1][0], r[t + 1][e + 1][0], r[t + 1][e][0]);
    for (let t = 0; t < B; t++) for (let e = 0; e < g; e++) Y(r[t][e][y], r[t][e + 1][y], r[t + 1][e + 1][y], r[t + 1][e][y]);
    function mo(t, e) {
      let o = -1, n = 1 / 0;
      for (let a = 0; a <= g; a++) for (let l = 0; l <= y; l++) {
        const u = r[B][a][l], P = b[u], J = Math.hypot(P[0] - t, P[1] - e);
        J < n && (n = J, o = u);
      }
      return o;
    }
    const ye = /* @__PURE__ */ new Map();
    for (let t = 0; t <= z; t++) for (let e = 0; e <= N; e++) {
      const o = -Nt / 2 + e * Ft, n = -zt / 2 + t * ce;
      ie(o, n) && ye.set(`${e},${t}`, {
        idTop: i[0][t][e],
        idBot: mo(o, n),
        x: o,
        y: n
      });
    }
    const _ = (t, e) => ye.get(`${t},${e}`) ?? null;
    for (let t = 0; t < z; t++) for (let e = 0; e < N; e++) {
      const o = _(e, t), n = _(e + 1, t), a = _(e, t + 1), l = _(e + 1, t + 1);
      !o || !n || !a || !l || (v(o.idTop, n.idTop, l.idTop, a.idTop), v(o.idBot, n.idBot, l.idBot, a.idBot), (!_(e - 1, t) || !_(e - 1, t + 1)) && v(o.idBot, o.idTop, a.idTop, a.idBot), (!_(e + 2, t) || !_(e + 2, t + 1)) && v(n.idBot, l.idBot, l.idTop, n.idTop), (!_(e, t - 1) || !_(e + 1, t - 1)) && v(o.idBot, n.idBot, n.idTop, o.idTop), (!_(e, t + 2) || !_(e + 1, t + 2)) && v(a.idBot, a.idTop, l.idTop, l.idBot));
    }
    for (const [t, e] of lo) {
      const o = j(t, e, h + mt), n = q(t, e), a = j(t, e, h - pt);
      ne(o, n, xe, Et, be), ne(n, a, xe, Et, be);
    }
    const ge = /* @__PURE__ */ new Map();
    b.forEach((t, e) => {
      const o = Math.abs(t[2] - (h - pt)) < 1e-6 && lt.some(([a, l]) => Math.abs(t[0] - a) < 1e-6 && Math.abs(t[1] - l) < 1e-6), n = Math.abs(t[2] - -Pt) < 1e-6;
      (o || n) && ge.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const qt = [];
    b.forEach((t, e) => {
      Math.abs(t[2] - (h + D)) < 1e-6 && Math.abs(t[0]) <= p / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && qt.push(e);
    });
    const Ot = Math.max(1, qt.length), uo = -V / Ot, fo = wt / Ot, ho = At / Ot, Be = /* @__PURE__ */ new Map();
    for (const t of qt) Be.set(t, [
      0,
      0,
      uo,
      fo,
      ho,
      0
    ]);
    const Pe = {
      supports: ge,
      loads: Be
    }, Ht = {
      elasticities: K,
      shearModuli: tt,
      areas: et,
      momentsOfInertiaZ: ot,
      momentsOfInertiaY: nt,
      torsionalConstants: at,
      densities: W,
      poissonsRatios: Q,
      thicknesses: Z
    };
    let Gt = {}, Dt = {};
    try {
      Gt = Oo(b, M, Pe, Ht), Dt = qo(b, M, Ht, Gt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const ct = [], xo = new Io({
      color: 16755200
    });
    function it(t, e) {
      const n = [];
      for (let u = 0; u <= 5 * 2; u++) {
        const P = u / 10, J = h * (1 - P), Jt = u % 2 === 0 ? 0 : 8e-3;
        n.push(new So(t + Jt, e, J));
      }
      const a = new Eo().setFromPoints(n), l = new Lo(a, xo);
      ct.push(l);
    }
    it(s / 2 - 0.04, w / 2 - 0.04), it(-s / 2 + 0.04, w / 2 - 0.04), it(s / 2 - 0.04, -w / 2 + 0.04), it(-s / 2 + 0.04, -w / 2 + 0.04), it(0, 0);
    const bo = new Ut({
      color: 8930338,
      roughness: 0.6
    }), we = 0.012, Ae = 0.025, bt = p / 2 - x - Ae, vt = m / 2 - x - Ae;
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
      const o = new Vt(new Xt(we / 2, we / 2, D, 8), bo);
      o.position.set(t, e, h + D / 2 + dt), o.rotation.x = Math.PI / 2, ct.push(o);
    }
    const vo = new Ut({
      color: 6710886,
      metalness: 0.5
    }), _o = new Ut({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Te = F * 0.8, Ce = F * 0.85, Mo = h + mt + Te / 2;
    for (const [t, e] of lt) {
      const o = new Xt(F / 2, F / 2, pt + mt, 12), n = new Vt(o, vo);
      n.position.set(t, e, h + (-pt + mt) / 2), n.rotation.x = Math.PI / 2, ct.push(n);
      const a = new Xt(Ce, Ce, Te, 6), l = new Vt(a, _o);
      l.position.set(t, e, Mo), l.rotation.x = Math.PI / 2, ct.push(l);
    }
    let $t = 0;
    const Ne = Dt == null ? void 0 : Dt.vonMises;
    Ne && Ne.forEach((t) => t.forEach((e) => {
      e > $t && ($t = e);
    }));
    const yo = 0.65, rt = s * w, ze = ut * ft, go = Math.min(2, Math.sqrt(ze / rt)), Bo = Math.min(0.85 * U * rt * go, 1.7 * U * rt), Fe = yo * Bo, Po = V / Math.max(1, Fe), je = Math.max(0, (s - 0.95 * Math.max(p, m)) / 2), wo = V / rt, ke = je * Math.sqrt(2 * Math.max(0, wo) / (0.9 * Yo)), Ao = ke / Math.max(1e-6, dt), To = Math.max(0.05, s - 2 * Bt), Co = Math.sqrt(wt * wt + At * At), Ie = Math.max(0, Co / To - V / 2) / Math.max(1, gt), Se = 0.75 * (0.75 * Math.PI * F * F / 4) * Jo, No = Ie / Math.max(1, Se), zo = p * m, Yt = (p - 2 * x) * (m - 2 * x), Ee = zo - Yt, Le = 35e4 * Ee + 0.85 * U * Yt, Fo = 0.75 * Le, jo = V / Math.max(1, Fo);
    Ze.val = {
      vmMax: $t,
      A1: rt,
      A2: ze,
      phiPp: Fe,
      demandCapPp: Po,
      m_cant: je,
      t_req: ke,
      demandCapT: Ao,
      T_anchor: Ie,
      phiNn: Se,
      demandCapAnchor: No,
      As: Ee,
      Ac: Yt,
      Pno_composite: Le,
      demandCapPno: jo
    }, $e.val = b, Ye.val = M, Je.val = Pe, Ue.val = Ht, Ve.val = Gt, Xe.val = Dt, Re.val = ct;
  });
  const Ke = Ho({
    mesh: {
      nodes: $e,
      elements: Ye,
      nodeInputs: Je,
      elementInputs: Ue,
      deformOutputs: Ve,
      analyzeOutputs: Xe
    },
    objects3D: Re,
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
  const G = new ko({
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
  }, _t = (s) => s < 1 ? `${s.toFixed(2)} \u2713` : s < 1.2 ? `${s.toFixed(2)} \u26A0` : `${s.toFixed(2)} \u2717`, Mt = G.addFolder({
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
  const yt = G.addFolder({
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
  const Qt = G.addFolder({
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
  const Wt = G.addFolder({
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
  const Uo = G.addFolder({
    title: "FEM"
  });
  Uo.addBinding(f, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (s) => s.toExponential(3)
  });
  const Qe = G.addFolder({
    title: "Unidades",
    expanded: false
  }), We = {
    stress: De.val,
    disp: Ge.val
  };
  Qe.addBinding(We, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (s) => {
    De.val = s.value;
  });
  Qe.addBinding(We, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (s) => {
    Ge.val = s.value;
  });
  document.body.append(Kt);
  c.derive(() => {
    const s = Ze.val;
    Object.assign(f, s), G.refresh();
  });
  document.body.append(Do(d), Ke, $o({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => Go(), 200);
  setTimeout(() => {
    var _a;
    const s = Ke.__ctx;
    (s == null ? void 0 : s.camera) && (s == null ? void 0 : s.controls) && (s.camera.up.set(0, 0, 1), s.camera.position.set(1.5, -1.5, 2), s.controls.target.set(0, 0, 0.4), s.controls.update(), (_a = s.render) == null ? void 0 : _a.call(s));
  }, 800);
});
