import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as c, P as Lo } from "./theme-2eEBQPmF.js";
import { L as Oo, M as Pt, D as Go, f as qo, P as Ho, g as Do, b as wt, C as Qt, V as Yo, B as Xo, a as Jo } from "./Text-BajK4Ymq.js";
import { a as Uo } from "./analyze-BydHtRcI.js";
import { d as Vo, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Ro, a as Ye, e as Xe } from "./getViewer-CZ5JMuv5.js";
import { e as $o } from "./makeDraggable-zx2br6Yh.js";
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
  const Wt = 2e8, te = 0.3, He = Wt / (2 * (1 + te)), De = 78, Qo = 25e4, Wo = 6e5, r = {
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
  }, Je = c.state([]), Ue = c.state([]), Ve = c.state({}), Re = c.state({}), $e = c.state({}), Ze = c.state({}), Ke = c.state([]), Qe = c.state({
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
    const a = r.B.value.val, x = r.H.value.val, V = r.t_plate.value.val, d = r.bc.value.val, m = r.hc.value.val, _ = r.t_col.value.val, Y = r.L_col.value.val, se = Math.round(r.nBoltsX.value.val), Nt = Math.round(r.nBoltsY.value.val), zt = r.sx.value.val, ae = r.sy.value.val, S = r.d_bolt.value.val, mt = r.L_bolt.value.val, ut = r.L_proj.value.val, Ft = r.d_hole.value.val / 2, ht = r.B_ped.value.val, ft = r.H_ped.value.val, St = r.h_ped.value.val, R = r.fc.value.val, $ = r.Pu.value.val, jt = r.Mx.value.val, kt = r.My.value.val, Z = Math.round(r.nx.value.val), K = Math.round(r.ny.value.val), A = Math.round(r.nz_col.value.val), f = 0.04, v = [], y = [], Q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map();
    function T(t, e, o) {
      return v.push([
        t,
        e,
        o
      ]), v.length - 1;
    }
    function X(t, e, o, n, s) {
      y.push([
        t,
        e,
        o,
        n
      ]);
      const l = y.length - 1;
      Q.set(l, s), W.set(l, Wt), tt.set(l, te), et.set(l, De), ot.set(l, He), nt.set(l, 0), at.set(l, 0), st.set(l, 0), lt.set(l, 0);
    }
    function le(t, e, o, n, s) {
      y.push([
        t,
        e
      ]);
      const l = y.length - 1;
      W.set(l, Wt), tt.set(l, te), et.set(l, De), ot.set(l, He), nt.set(l, o), at.set(l, n), st.set(l, n), lt.set(l, s), Q.set(l, 0);
    }
    const It = a / Z, Et = x / K, L = [];
    for (let t = 0; t <= K; t++) {
      const e = [];
      for (let o = 0; o <= Z; o++) e.push(T(-a / 2 + o * It, -x / 2 + t * Et, f));
      L.push(e);
    }
    for (let t = 0; t < K; t++) for (let e = 0; e < Z; e++) {
      const o = -a / 2 + (e + 0.5) * It, n = -x / 2 + (t + 0.5) * Et;
      Math.hypot(o, n) < Ft || X(L[t][e], L[t][e + 1], L[t + 1][e + 1], L[t + 1][e], V);
    }
    function O(t, e) {
      let o = -1, n = 1 / 0;
      for (let s = 0; s <= K; s++) for (let l = 0; l <= Z; l++) {
        const u = L[s][l], b = Math.hypot(v[u][0] - t, v[u][1] - e);
        b < n && (n = b, o = u);
      }
      return o;
    }
    const C = Math.max(2, Math.round(d / It)), N = Math.max(2, Math.round(m / Et)), xt = d / C, bt = m / N, ct = Y / A, j = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= C; o++) {
        const n = -d / 2 + o * xt;
        t === 0 ? e.push(O(n, -m / 2)) : e.push(T(n, -m / 2, f + t * ct));
      }
      j.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < C; e++) X(j[t][e], j[t][e + 1], j[t + 1][e + 1], j[t + 1][e], _);
    const k = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= C; o++) {
        const n = -d / 2 + o * xt;
        t === 0 ? e.push(O(n, m / 2)) : e.push(T(n, m / 2, f + t * ct));
      }
      k.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < C; e++) X(k[t][e], k[t][e + 1], k[t + 1][e + 1], k[t + 1][e], _);
    const G = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= N; o++) {
        const n = -m / 2 + o * bt;
        t === 0 ? e.push(O(-d / 2, n)) : o === 0 ? e.push(j[t][0]) : o === N ? e.push(k[t][0]) : e.push(T(-d / 2, n, f + t * ct));
      }
      G.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < N; e++) X(G[t][e], G[t][e + 1], G[t + 1][e + 1], G[t + 1][e], _);
    const q = [];
    for (let t = 0; t <= A; t++) {
      const e = [];
      for (let o = 0; o <= N; o++) {
        const n = -m / 2 + o * bt;
        t === 0 ? e.push(O(d / 2, n)) : o === 0 ? e.push(j[t][C]) : o === N ? e.push(k[t][C]) : e.push(T(d / 2, n, f + t * ct));
      }
      q.push(e);
    }
    for (let t = 0; t < A; t++) for (let e = 0; e < N; e++) X(q[t][e], q[t][e + 1], q[t + 1][e + 1], q[t + 1][e], _);
    const ce = 4700 * Math.sqrt(R / 1e3) * 1e3, ie = 0.2, oo = ce / (2 * (1 + ie)), vt = d - 2 * _, Mt = m - 2 * _, z = 4, F = 4, _t = A, yt = vt / z, Lt = Mt / F, no = Y / _t, Ot = (t, e) => Math.hypot(t, e) < Ft + yt * 0.5;
    function so(t, e) {
      let o = -1, n = 1 / 0;
      for (let s = 0; s <= P; s++) for (let l = 0; l <= B; l++) {
        const u = i[w][s][l], b = v[u], E = Math.hypot(b[0] - t, b[1] - e);
        E < n && (n = E, o = u);
      }
      return o;
    }
    const p = [];
    for (let t = 0; t <= _t; t++) {
      const e = [];
      for (let o = 0; o <= F; o++) {
        const n = [];
        for (let s = 0; s <= z; s++) {
          const l = -vt / 2 + s * yt, u = -Mt / 2 + o * Lt, b = f + V + t * no;
          t === 0 ? Ot(l, u) ? n.push(T(l, u, b)) : n.push(O(l, u)) : n.push(T(l, u, b));
        }
        e.push(n);
      }
      p.push(e);
    }
    const re = [];
    for (let t = 0; t <= F; t++) for (let e = 0; e <= z; e++) {
      const o = -vt / 2 + e * yt, n = -Mt / 2 + t * Lt;
      if (!Ot(o, n)) continue;
      const s = p[0][t][e], l = so(o, n);
      re.push({
        idTop: s,
        idBot: l,
        x: o,
        y: n
      });
    }
    function M(t, e) {
      const o = -vt / 2 + t * yt, n = -Mt / 2 + e * Lt;
      return Ot(o, n) ? re.find((s) => Math.abs(s.x - o) < 1e-6 && Math.abs(s.y - n) < 1e-6) ?? null : null;
    }
    for (let t = 0; t < F; t++) for (let e = 0; e < z; e++) {
      const o = M(e, t), n = M(e + 1, t), s = M(e, t + 1), l = M(e + 1, t + 1);
      if (o && n && s && l) {
        g(o.idTop, n.idTop, l.idTop, s.idTop), g(o.idBot, n.idBot, l.idBot, s.idBot);
        const u = !M(e - 1, t) || !M(e - 1, t + 1), b = !M(e + 2, t) || !M(e + 2, t + 1), E = !M(e, t - 1) || !M(e + 1, t - 1), pt = !M(e, t + 2) || !M(e + 1, t + 2);
        u && g(o.idBot, o.idTop, s.idTop, s.idBot), b && g(n.idBot, l.idBot, l.idTop, n.idTop), E && g(o.idBot, n.idBot, n.idTop, o.idTop), pt && g(s.idBot, s.idTop, l.idTop, l.idBot);
      }
    }
    function g(t, e, o, n) {
      y.push([
        t,
        e,
        o,
        n
      ]);
      const s = y.length - 1;
      Q.set(s, 1e-3), W.set(s, ce), tt.set(s, ie), et.set(s, 24 / 9.80665), ot.set(s, oo), nt.set(s, 0), at.set(s, 0), st.set(s, 0), lt.set(s, 0);
    }
    for (let t = 0; t < F; t++) for (let e = 0; e < z; e++) g(p[0][t][e], p[0][t][e + 1], p[0][t + 1][e + 1], p[0][t + 1][e]);
    for (let t = 0; t < _t; t++) for (let e = 0; e < z; e++) g(p[t][0][e], p[t][0][e + 1], p[t + 1][0][e + 1], p[t + 1][0][e]), g(p[t][F][e], p[t][F][e + 1], p[t + 1][F][e + 1], p[t + 1][F][e]);
    for (let t = 0; t < _t; t++) for (let e = 0; e < F; e++) g(p[t][e][0], p[t][e + 1][0], p[t + 1][e + 1][0], p[t + 1][e][0]), g(p[t][e][z], p[t][e + 1][z], p[t + 1][e + 1][z], p[t + 1][e][z]);
    const ao = Math.min(0.2, Y * 0.4), de = Math.min(0.1, (a - d) / 2 * 0.7), lo = Math.max(1, Math.round(ao / ct));
    function I(t, e, o, n) {
      const [s, l] = t, [u, b] = e, E = o[0][n], pt = O(s + u * de, l + b * de), qe = o[Math.min(lo, o.length - 1)][n];
      X(E, pt, qe, qe, _);
    }
    const pe = Math.max(1, Math.round(C * 0.25)), me = Math.max(1, Math.round(N * 0.25)), Gt = Math.round(C / 2) - pe, qt = Math.round(C / 2) + pe, Ht = Math.round(N / 2) - me, Dt = Math.round(N / 2) + me, ue = -d / 2 + Gt * xt, he = -d / 2 + qt * xt;
    I([
      ue,
      m / 2
    ], [
      0,
      1
    ], k, Gt), I([
      he,
      m / 2
    ], [
      0,
      1
    ], k, qt), I([
      ue,
      -m / 2
    ], [
      0,
      -1
    ], j, Gt), I([
      he,
      -m / 2
    ], [
      0,
      -1
    ], j, qt);
    const fe = -m / 2 + Ht * bt, xe = -m / 2 + Dt * bt;
    I([
      d / 2,
      fe
    ], [
      1,
      0
    ], q, Ht), I([
      d / 2,
      xe
    ], [
      1,
      0
    ], q, Dt), I([
      -d / 2,
      fe
    ], [
      -1,
      0
    ], G, Ht), I([
      -d / 2,
      xe
    ], [
      -1,
      0
    ], G, Dt);
    const be = Math.PI * S * S / 4, Yt = Math.PI * S ** 4 / 64, ve = 2 * Yt, it = [], co = (a - 2 * zt) / Math.max(1, se - 1), io = (x - 2 * ae) / Math.max(1, Nt - 1);
    for (let t = 0; t < se; t++) for (let e = 0; e < Nt; e++) {
      const o = -a / 2 + zt + t * co, n = -x / 2 + ae + e * io;
      Math.abs(o) < d / 2 + 5e-3 && Math.abs(n) < m / 2 + 5e-3 || it.push([
        o,
        n
      ]);
    }
    const ro = [
      ...it
    ], Me = 4700 * Math.sqrt(R / 1e3) * 1e3, _e = 0.2, po = Me / (2 * (1 + _e)), B = 10, P = 10, w = 6, Xt = ht / B, ye = ft / P, mo = St / w, uo = [];
    for (let t = 0; t <= K; t++) for (let e = 0; e <= Z; e++) {
      const o = L[t][e];
      uo.push({
        id: o,
        x: v[o][0],
        y: v[o][1]
      });
    }
    const i = [];
    for (let t = 0; t <= w; t++) {
      const e = [];
      for (let o = 0; o <= P; o++) {
        const n = [];
        for (let s = 0; s <= B; s++) n.push(T(-ht / 2 + s * Xt, -ft / 2 + o * ye, -St + t * mo));
        e.push(n);
      }
      i.push(e);
    }
    function J(t, e, o, n) {
      y.push([
        t,
        e,
        o,
        n
      ]);
      const s = y.length - 1;
      Q.set(s, 1e-3), W.set(s, Me), tt.set(s, _e), et.set(s, 24 / 9.80665), ot.set(s, po), nt.set(s, 0), at.set(s, 0), st.set(s, 0), lt.set(s, 0);
    }
    for (let t = 0; t < P; t++) for (let e = 0; e < B; e++) J(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]);
    function ho(t, e) {
      for (const [o, n] of it) if (Math.hypot(t - o, e - n) < Xt * 0.6) return true;
      return false;
    }
    for (let t = 0; t < P; t++) for (let e = 0; e < B; e++) {
      const o = -ht / 2 + (e + 0.5) * Xt, n = -ft / 2 + (t + 0.5) * ye;
      ho(o, n) || J(i[w][t][e], i[w][t][e + 1], i[w][t + 1][e + 1], i[w][t + 1][e]);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < B; e++) J(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]);
    for (let t = 0; t < w; t++) for (let e = 0; e < B; e++) J(i[t][P][e], i[t][P][e + 1], i[t + 1][P][e + 1], i[t + 1][P][e]);
    for (let t = 0; t < w; t++) for (let e = 0; e < P; e++) J(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]);
    for (let t = 0; t < w; t++) for (let e = 0; e < P; e++) J(i[t][e][B], i[t][e + 1][B], i[t + 1][e + 1][B], i[t + 1][e][B]);
    for (const [t, e] of ro) {
      const o = T(t, e, f + ut), n = O(t, e), s = T(t, e, f - mt);
      le(o, n, be, Yt, ve), le(n, s, be, Yt, ve);
    }
    const ge = /* @__PURE__ */ new Map();
    v.forEach((t, e) => {
      const o = Math.abs(t[2] - (f - mt)) < 1e-6 && it.some(([s, l]) => Math.abs(t[0] - s) < 1e-6 && Math.abs(t[1] - l) < 1e-6), n = Math.abs(t[2] - -St) < 1e-6;
      (o || n) && ge.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const Jt = [];
    v.forEach((t, e) => {
      Math.abs(t[2] - (f + Y)) < 1e-6 && Math.abs(t[0]) <= d / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && Jt.push(e);
    });
    const Ut = Math.max(1, Jt.length), fo = -$ / Ut, xo = jt / Ut, bo = kt / Ut, Be = /* @__PURE__ */ new Map();
    for (const t of Jt) Be.set(t, [
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
    }, Vt = {
      elasticities: W,
      shearModuli: ot,
      areas: nt,
      momentsOfInertiaZ: st,
      momentsOfInertiaY: at,
      torsionalConstants: lt,
      densities: et,
      poissonsRatios: tt,
      thicknesses: Q
    };
    let Rt = {}, $t = {};
    try {
      Rt = Vo(v, y, Pe, Vt), $t = Uo(v, y, Vt, Rt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const U = [], vo = new Oo({
      color: 16755200
    });
    function rt(t, e) {
      const n = [];
      for (let u = 0; u <= 5 * 2; u++) {
        const b = u / 10, E = f * (1 - b), pt = u % 2 === 0 ? 0 : 8e-3;
        n.push(new Yo(t + pt, e, E));
      }
      const s = new Xo().setFromPoints(n), l = new Jo(s, vo);
      U.push(l);
    }
    rt(a / 2 - 0.04, x / 2 - 0.04), rt(-a / 2 + 0.04, x / 2 - 0.04), rt(a / 2 - 0.04, -x / 2 + 0.04), rt(-a / 2 + 0.04, -x / 2 + 0.04), rt(0, 0);
    const Mo = new Pt({
      color: 12105912,
      metalness: 0.7,
      roughness: 0.4,
      transparent: true,
      opacity: 0.55,
      side: Go
    }), H = new qo();
    H.moveTo(-a / 2, -x / 2), H.lineTo(a / 2, -x / 2), H.lineTo(a / 2, x / 2), H.lineTo(-a / 2, x / 2), H.closePath();
    const we = new Ho();
    we.absarc(0, 0, Ft, 0, Math.PI * 2, true), H.holes.push(we);
    const _o = new Do(H, {
      depth: V,
      bevelEnabled: false
    }), Ae = new wt(_o, Mo);
    Ae.position.set(0, 0, f), U.push(Ae);
    const yo = new Pt({
      color: 8930338,
      roughness: 0.6
    }), Te = 0.012, Ce = 0.025, gt = d / 2 - _ - Ce, Bt = m / 2 - _ - Ce;
    for (const [t, e] of [
      [
        gt,
        Bt
      ],
      [
        -gt,
        Bt
      ],
      [
        gt,
        -Bt
      ],
      [
        -gt,
        -Bt
      ]
    ]) {
      const o = new wt(new Qt(Te / 2, Te / 2, Y, 8), yo);
      o.position.set(t, e, f + Y / 2 + V), o.rotation.x = Math.PI / 2, U.push(o);
    }
    const go = new Pt({
      color: 6710886,
      metalness: 0.5
    }), Bo = new Pt({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Ne = S * 0.8, ze = S * 0.85, Po = f + ut + Ne / 2;
    for (const [t, e] of it) {
      const o = new Qt(S / 2, S / 2, mt + ut, 12), n = new wt(o, go);
      n.position.set(t, e, f + (-mt + ut) / 2), n.rotation.x = Math.PI / 2, U.push(n);
      const s = new Qt(ze, ze, Ne, 6), l = new wt(s, Bo);
      l.position.set(t, e, Po), l.rotation.x = Math.PI / 2, U.push(l);
    }
    let Zt = 0;
    const Fe = $t == null ? void 0 : $t.vonMises;
    Fe && Fe.forEach((t) => t.forEach((e) => {
      e > Zt && (Zt = e);
    }));
    const wo = 0.65, dt = a * x, Se = ht * ft, Ao = Math.min(2, Math.sqrt(Se / dt)), To = Math.min(0.85 * R * dt * Ao, 1.7 * R * dt), je = wo * To, Co = $ / Math.max(1, je), ke = Math.max(0, (a - 0.95 * Math.max(d, m)) / 2), No = $ / dt, Ie = ke * Math.sqrt(2 * Math.max(0, No) / (0.9 * Qo)), zo = Ie / Math.max(1e-6, V), Fo = Math.max(0.05, a - 2 * zt), So = Math.sqrt(jt * jt + kt * kt), Ee = Math.max(0, So / Fo - $ / 2) / Math.max(1, Nt), Le = 0.75 * (0.75 * Math.PI * S * S / 4) * Wo, jo = Ee / Math.max(1, Le), ko = d * m, Kt = (d - 2 * _) * (m - 2 * _), Oe = ko - Kt, Ge = 35e4 * Oe + 0.85 * R * Kt, Io = 0.75 * Ge, Eo = $ / Math.max(1, Io);
    Qe.val = {
      vmMax: Zt,
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
      As: Oe,
      Ac: Kt,
      Pno_composite: Ge,
      demandCapPno: Eo
    }, Je.val = v, Ue.val = y, Ve.val = Pe, Re.val = Vt, $e.val = Rt, Ze.val = $t, Ke.val = U;
  });
  const We = Ro({
    mesh: {
      nodes: Je,
      elements: Ue,
      nodeInputs: Ve,
      elementInputs: Re,
      deformOutputs: $e,
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
  }), ee = document.createElement("div");
  ee.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const D = new Lo({
    title: "\u{1F9EA} Placa base + col CFT",
    container: ee,
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
  }, At = (a) => a < 1 ? `${a.toFixed(2)} \u2713` : a < 1.2 ? `${a.toFixed(2)} \u26A0` : `${a.toFixed(2)} \u2717`, Tt = D.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  Tt.addBinding(h, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (a) => a.toExponential(3)
  });
  Tt.addBinding(h, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (a) => a.toExponential(3)
  });
  Tt.addBinding(h, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (a) => a.toFixed(0)
  });
  Tt.addBinding(h, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: At
  });
  const Ct = D.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  Ct.addBinding(h, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  Ct.addBinding(h, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  Ct.addBinding(h, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (a) => a.toFixed(0)
  });
  Ct.addBinding(h, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: At
  });
  const oe = D.addFolder({
    title: "DG-1 espesor placa"
  });
  oe.addBinding(h, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (a) => a.toFixed(4)
  });
  oe.addBinding(h, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (a) => (a * 1e3).toFixed(1)
  });
  oe.addBinding(h, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: At
  });
  const ne = D.addFolder({
    title: "ACI \xA717 anclaje"
  });
  ne.addBinding(h, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (a) => a.toFixed(1)
  });
  ne.addBinding(h, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (a) => a.toFixed(1)
  });
  ne.addBinding(h, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: At
  });
  const tn = D.addFolder({
    title: "FEM"
  });
  tn.addBinding(h, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (a) => a.toExponential(3)
  });
  const to = D.addFolder({
    title: "Unidades",
    expanded: false
  }), eo = {
    stress: Xe.val,
    disp: Ye.val
  };
  to.addBinding(eo, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (a) => {
    Xe.val = a.value;
  });
  to.addBinding(eo, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (a) => {
    Ye.val = a.value;
  });
  document.body.append(ee);
  c.derive(() => {
    const a = Qe.val;
    Object.assign(h, a), D.refresh();
  });
  document.body.append(Zo(r), We, Ko({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => $o(), 200);
  setTimeout(() => {
    var _a;
    const a = We.__ctx;
    (a == null ? void 0 : a.camera) && (a == null ? void 0 : a.controls) && (a.camera.up.set(0, 0, 1), a.camera.position.set(2, -2, 1.2), a.controls.target.set(0, 0, 0.25), a.controls.update(), (_a = a.render) == null ? void 0 : _a.call(a));
  }, 800);
});
