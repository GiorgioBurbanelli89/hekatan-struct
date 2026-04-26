import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as s, P as Ao } from "./theme-2eEBQPmF.js";
import { L as Co, M as Z, D as No, f as zo, P as Fo, g as So, b as D, C as xt, c as Io, V as To, B as ko, a as jo } from "./Text-BajK4Ymq.js";
import { a as Eo } from "./analyze-BydHtRcI.js";
import { d as Lo, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Oo, a as je, e as Ee } from "./getViewer-CZ5JMuv5.js";
import { e as qo } from "./makeDraggable-zx2br6Yh.js";
import { g as Go } from "./getParameters-CIJBOwMB.js";
import { g as Ho } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Yt = 2e8, Jt = 0.3, Te = Yt / (2 * (1 + Jt)), ke = 78, Do = 25e4, Yo = 6e5, r = {
    B: {
      value: s.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "B placa (m)"
    },
    H: {
      value: s.state(0.5),
      min: 0.3,
      max: 1.2,
      step: 0.02,
      label: "H placa (m)"
    },
    t_plate: {
      value: s.state(0.025),
      min: 0.012,
      max: 0.06,
      step: 2e-3,
      label: "t placa (m)"
    },
    bc: {
      value: s.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "bc col (m)"
    },
    hc: {
      value: s.state(0.3),
      min: 0.2,
      max: 0.5,
      step: 0.02,
      label: "hc col (m)"
    },
    t_col: {
      value: s.state(0.012),
      min: 6e-3,
      max: 0.03,
      step: 2e-3,
      label: "t pared HSS (m)"
    },
    L_col: {
      value: s.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "L stub col (m)"
    },
    nBoltsX: {
      value: s.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en X"
    },
    nBoltsY: {
      value: s.state(2),
      min: 2,
      max: 4,
      step: 1,
      label: "Pernos en Y"
    },
    sx: {
      value: s.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sx borde (m)"
    },
    sy: {
      value: s.state(0.07),
      min: 0.03,
      max: 0.2,
      step: 0.01,
      label: "sy borde (m)"
    },
    d_bolt: {
      value: s.state(0.024),
      min: 0.012,
      max: 0.04,
      step: 2e-3,
      label: "\xD8 perno (m)"
    },
    L_bolt: {
      value: s.state(0.3),
      min: 0.15,
      max: 0.6,
      step: 0.02,
      label: "L embebido (m)"
    },
    L_proj: {
      value: s.state(0.05),
      min: 0.02,
      max: 0.1,
      step: 5e-3,
      label: "L proyec (m)"
    },
    d_hole: {
      value: s.state(0.2),
      min: 0.1,
      max: 0.4,
      step: 0.02,
      label: "\xD8 orificio placa (m)"
    },
    B_ped: {
      value: s.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "B pedestal (m)"
    },
    H_ped: {
      value: s.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "H pedestal (m)"
    },
    h_ped: {
      value: s.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "h pedestal (m)"
    },
    fc: {
      value: s.state(28e3),
      min: 17e3,
      max: 5e4,
      step: 1e3,
      label: "f'c (kN/m\xB2)"
    },
    Pu: {
      value: s.state(300),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu axial (kN)"
    },
    Mx: {
      value: s.state(20),
      min: 0,
      max: 500,
      step: 5,
      label: "Mx (kN\xB7m)"
    },
    My: {
      value: s.state(30),
      min: 0,
      max: 500,
      step: 5,
      label: "My (kN\xB7m)"
    },
    nx: {
      value: s.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh nx"
    },
    ny: {
      value: s.state(10),
      min: 6,
      max: 20,
      step: 2,
      label: "Mesh ny"
    },
    nz_col: {
      value: s.state(6),
      min: 4,
      max: 12,
      step: 2,
      label: "nz col"
    }
  }, Le = s.state([]), Oe = s.state([]), qe = s.state({}), Ge = s.state({}), He = s.state({}), De = s.state({}), Ye = s.state([]), Je = s.state({
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
  s.derive(() => {
    const a = r.B.value.val, h = r.H.value.val, E = r.t_plate.value.val, d = r.bc.value.val, m = r.hc.value.val, f = r.t_col.value.val, L = r.L_col.value.val, Rt = Math.round(r.nBoltsX.value.val), _t = Math.round(r.nBoltsY.value.val), yt = r.sx.value.val, $t = r.sy.value.val, P = r.d_bolt.value.val, K = r.L_bolt.value.val, Q = r.L_proj.value.val, W = r.d_hole.value.val / 2, tt = r.B_ped.value.val, et = r.H_ped.value.val, gt = r.h_ped.value.val, ot = r.fc.value.val, Y = r.Pu.value.val, Pt = r.Mx.value.val, wt = r.My.value.val, J = Math.round(r.nx.value.val), U = Math.round(r.ny.value.val), w = Math.round(r.nz_col.value.val), p = 0.04, x = [], B = [], at = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map();
    function N(t, e, o) {
      return x.push([
        t,
        e,
        o
      ]), x.length - 1;
    }
    function O(t, e, o, n, c) {
      B.push([
        t,
        e,
        o,
        n
      ]);
      const l = B.length - 1;
      at.set(l, c), nt.set(l, Yt), st.set(l, Jt), lt.set(l, ke), ct.set(l, Te), rt.set(l, 0), dt.set(l, 0), it.set(l, 0), mt.set(l, 0);
    }
    function Zt(t, e, o, n, c) {
      B.push([
        t,
        e
      ]);
      const l = B.length - 1;
      nt.set(l, Yt), st.set(l, Jt), lt.set(l, ke), ct.set(l, Te), rt.set(l, o), dt.set(l, n), it.set(l, n), mt.set(l, c), at.set(l, 0);
    }
    const Bt = a / J, At = h / U, S = [];
    for (let t = 0; t <= U; t++) {
      const e = [];
      for (let o = 0; o <= J; o++) e.push(N(-a / 2 + o * Bt, -h / 2 + t * At, p));
      S.push(e);
    }
    for (let t = 0; t < U; t++) for (let e = 0; e < J; e++) {
      const o = -a / 2 + (e + 0.5) * Bt, n = -h / 2 + (t + 0.5) * At;
      Math.hypot(o, n) < W || O(S[t][e], S[t][e + 1], S[t + 1][e + 1], S[t + 1][e], E);
    }
    function q(t, e) {
      let o = -1, n = 1 / 0;
      for (let c = 0; c <= U; c++) for (let l = 0; l <= J; l++) {
        const g = S[c][l], H = Math.hypot(x[g][0] - t, x[g][1] - e);
        H < n && (n = H, o = g);
      }
      return o;
    }
    const b = Math.max(2, Math.round(d / Bt)), v = Math.max(2, Math.round(m / At)), pt = d / b, ut = m / v, V = L / w, A = [];
    for (let t = 0; t <= w; t++) {
      const e = [];
      for (let o = 0; o <= b; o++) {
        const n = -d / 2 + o * pt;
        t === 0 ? e.push(q(n, -m / 2)) : e.push(N(n, -m / 2, p + t * V));
      }
      A.push(e);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < b; e++) O(A[t][e], A[t][e + 1], A[t + 1][e + 1], A[t + 1][e], f);
    const C = [];
    for (let t = 0; t <= w; t++) {
      const e = [];
      for (let o = 0; o <= b; o++) {
        const n = -d / 2 + o * pt;
        t === 0 ? e.push(q(n, m / 2)) : e.push(N(n, m / 2, p + t * V));
      }
      C.push(e);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < b; e++) O(C[t][e], C[t][e + 1], C[t + 1][e + 1], C[t + 1][e], f);
    const I = [];
    for (let t = 0; t <= w; t++) {
      const e = [];
      for (let o = 0; o <= v; o++) {
        const n = -m / 2 + o * ut;
        t === 0 ? e.push(q(-d / 2, n)) : o === 0 ? e.push(A[t][0]) : o === v ? e.push(C[t][0]) : e.push(N(-d / 2, n, p + t * V));
      }
      I.push(e);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < v; e++) O(I[t][e], I[t][e + 1], I[t + 1][e + 1], I[t + 1][e], f);
    const T = [];
    for (let t = 0; t <= w; t++) {
      const e = [];
      for (let o = 0; o <= v; o++) {
        const n = -m / 2 + o * ut;
        t === 0 ? e.push(q(d / 2, n)) : o === 0 ? e.push(A[t][b]) : o === v ? e.push(C[t][b]) : e.push(N(d / 2, n, p + t * V));
      }
      T.push(e);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < v; e++) O(T[t][e], T[t][e + 1], T[t + 1][e + 1], T[t + 1][e], f);
    const Re = Math.min(0.2, L * 0.4), Kt = Math.min(0.1, (a - d) / 2 * 0.7), $e = Math.max(1, Math.round(Re / V));
    function z(t, e, o, n) {
      const [c, l] = t, [g, H] = e, Ht = o[0][n], Dt = q(c + g * Kt, l + H * Kt), Ie = o[Math.min($e, o.length - 1)][n];
      O(Ht, Dt, Ie, Ie, f);
    }
    const Qt = Math.max(1, Math.round(b * 0.25)), Wt = Math.max(1, Math.round(v * 0.25)), Ct = Math.round(b / 2) - Qt, Nt = Math.round(b / 2) + Qt, zt = Math.round(v / 2) - Wt, Ft = Math.round(v / 2) + Wt, te = -d / 2 + Ct * pt, ee = -d / 2 + Nt * pt;
    z([
      te,
      m / 2
    ], [
      0,
      1
    ], C, Ct), z([
      ee,
      m / 2
    ], [
      0,
      1
    ], C, Nt), z([
      te,
      -m / 2
    ], [
      0,
      -1
    ], A, Ct), z([
      ee,
      -m / 2
    ], [
      0,
      -1
    ], A, Nt);
    const oe = -m / 2 + zt * ut, ae = -m / 2 + Ft * ut;
    z([
      d / 2,
      oe
    ], [
      1,
      0
    ], T, zt), z([
      d / 2,
      ae
    ], [
      1,
      0
    ], T, Ft), z([
      -d / 2,
      oe
    ], [
      -1,
      0
    ], I, zt), z([
      -d / 2,
      ae
    ], [
      -1,
      0
    ], I, Ft);
    const ne = Math.PI * P * P / 4, St = Math.PI * P ** 4 / 64, se = 2 * St, X = [], Ze = (a - 2 * yt) / Math.max(1, Rt - 1), Ke = (h - 2 * $t) / Math.max(1, _t - 1);
    for (let t = 0; t < Rt; t++) for (let e = 0; e < _t; e++) {
      const o = -a / 2 + yt + t * Ze, n = -h / 2 + $t + e * Ke;
      Math.abs(o) < d / 2 + 5e-3 && Math.abs(n) < m / 2 + 5e-3 || X.push([
        o,
        n
      ]);
    }
    const Qe = [
      ...X
    ], le = 4700 * Math.sqrt(ot / 1e3) * 1e3, ce = 0.2, We = le / (2 * (1 + ce)), M = 10, _ = 10, y = 6, It = tt / M, re = et / _, to = gt / y, eo = [];
    for (let t = 0; t <= U; t++) for (let e = 0; e <= J; e++) {
      const o = S[t][e];
      eo.push({
        id: o,
        x: x[o][0],
        y: x[o][1]
      });
    }
    const i = [];
    for (let t = 0; t <= y; t++) {
      const e = [];
      for (let o = 0; o <= _; o++) {
        const n = [];
        for (let c = 0; c <= M; c++) n.push(N(-tt / 2 + c * It, -et / 2 + o * re, -gt + t * to));
        e.push(n);
      }
      i.push(e);
    }
    function G(t, e, o, n) {
      B.push([
        t,
        e,
        o,
        n
      ]);
      const c = B.length - 1;
      at.set(c, 1e-3), nt.set(c, le), st.set(c, ce), lt.set(c, 24 / 9.80665), ct.set(c, We), rt.set(c, 0), dt.set(c, 0), it.set(c, 0), mt.set(c, 0);
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < M; e++) G(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]);
    function oo(t, e) {
      for (const [o, n] of X) if (Math.hypot(t - o, e - n) < It * 0.6) return true;
      return false;
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < M; e++) {
      const o = -tt / 2 + (e + 0.5) * It, n = -et / 2 + (t + 0.5) * re;
      oo(o, n) || G(i[y][t][e], i[y][t][e + 1], i[y][t + 1][e + 1], i[y][t + 1][e]);
    }
    for (let t = 0; t < y; t++) for (let e = 0; e < M; e++) G(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]);
    for (let t = 0; t < y; t++) for (let e = 0; e < M; e++) G(i[t][_][e], i[t][_][e + 1], i[t + 1][_][e + 1], i[t + 1][_][e]);
    for (let t = 0; t < y; t++) for (let e = 0; e < _; e++) G(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]);
    for (let t = 0; t < y; t++) for (let e = 0; e < _; e++) G(i[t][e][M], i[t][e + 1][M], i[t + 1][e + 1][M], i[t + 1][e][M]);
    for (const [t, e] of Qe) {
      const o = N(t, e, p + Q), n = q(t, e), c = N(t, e, p - K);
      Zt(o, n, ne, St, se), Zt(n, c, ne, St, se);
    }
    const ie = /* @__PURE__ */ new Map();
    x.forEach((t, e) => {
      const o = Math.abs(t[2] - (p - K)) < 1e-6 && X.some(([c, l]) => Math.abs(t[0] - c) < 1e-6 && Math.abs(t[1] - l) < 1e-6), n = Math.abs(t[2] - -gt) < 1e-6;
      (o || n) && ie.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const Tt = [];
    x.forEach((t, e) => {
      Math.abs(t[2] - (p + L)) < 1e-6 && Math.abs(t[0]) <= d / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && Tt.push(e);
    });
    const kt = Math.max(1, Tt.length), ao = -Y / kt, no = Pt / kt, so = wt / kt, de = /* @__PURE__ */ new Map();
    for (const t of Tt) de.set(t, [
      0,
      0,
      ao,
      no,
      so,
      0
    ]);
    const me = {
      supports: ie,
      loads: de
    }, jt = {
      elasticities: nt,
      shearModuli: ct,
      areas: rt,
      momentsOfInertiaZ: it,
      momentsOfInertiaY: dt,
      torsionalConstants: mt,
      densities: lt,
      poissonsRatios: st,
      thicknesses: at
    };
    let Et = {}, Lt = {};
    try {
      Et = Lo(x, B, me, jt), Lt = Eo(x, B, jt, Et);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const F = [], lo = new Co({
      color: 16755200
    });
    function R(t, e) {
      const n = [];
      for (let g = 0; g <= 5 * 2; g++) {
        const H = g / 10, Ht = p * (1 - H), Dt = g % 2 === 0 ? 0 : 8e-3;
        n.push(new To(t + Dt, e, Ht));
      }
      const c = new ko().setFromPoints(n), l = new jo(c, lo);
      F.push(l);
    }
    R(a / 2 - 0.04, h / 2 - 0.04), R(-a / 2 + 0.04, h / 2 - 0.04), R(a / 2 - 0.04, -h / 2 + 0.04), R(-a / 2 + 0.04, -h / 2 + 0.04), R(0, 0);
    const co = new Z({
      color: 12105912,
      metalness: 0.7,
      roughness: 0.4,
      transparent: true,
      opacity: 0.55,
      side: No
    }), k = new zo();
    k.moveTo(-a / 2, -h / 2), k.lineTo(a / 2, -h / 2), k.lineTo(a / 2, h / 2), k.lineTo(-a / 2, h / 2), k.closePath();
    const pe = new Fo();
    pe.absarc(0, 0, W, 0, Math.PI * 2, true), k.holes.push(pe);
    const ro = new So(k, {
      depth: E,
      bevelEnabled: false
    }), ue = new D(ro, co);
    ue.position.set(0, 0, p), F.push(ue);
    const io = new Z({
      color: 8930338,
      roughness: 0.6
    }), he = 0.012, fe = 0.025, ht = d / 2 - f - fe, ft = m / 2 - f - fe;
    for (const [t, e] of [
      [
        ht,
        ft
      ],
      [
        -ht,
        ft
      ],
      [
        ht,
        -ft
      ],
      [
        -ht,
        -ft
      ]
    ]) {
      const o = new D(new xt(he / 2, he / 2, L, 8), io);
      o.position.set(t, e, p + L / 2 + E), o.rotation.x = Math.PI / 2, F.push(o);
    }
    const xe = new Z({
      color: 12888184,
      transparent: true,
      opacity: 0.55
    }), be = p + E, Ot = new D(new xt(W, W, be, 24), xe);
    Ot.position.set(0, 0, be / 2), Ot.rotation.x = Math.PI / 2, F.push(Ot);
    const ve = p + E, Me = p + L, _e = new D(new Io(d - 2 * f, m - 2 * f, Me - ve), xe);
    _e.position.set(0, 0, (ve + Me) / 2), F.push(_e);
    const mo = new Z({
      color: 6710886,
      metalness: 0.5
    }), po = new Z({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), ye = P * 0.8, ge = P * 0.85, uo = p + Q + ye / 2;
    for (const [t, e] of X) {
      const o = new xt(P / 2, P / 2, K + Q, 12), n = new D(o, mo);
      n.position.set(t, e, p + (-K + Q) / 2), n.rotation.x = Math.PI / 2, F.push(n);
      const c = new xt(ge, ge, ye, 6), l = new D(c, po);
      l.position.set(t, e, uo), l.rotation.x = Math.PI / 2, F.push(l);
    }
    let qt = 0;
    const Pe = Lt == null ? void 0 : Lt.vonMises;
    Pe && Pe.forEach((t) => t.forEach((e) => {
      e > qt && (qt = e);
    }));
    const ho = 0.65, $ = a * h, we = tt * et, fo = Math.min(2, Math.sqrt(we / $)), xo = Math.min(0.85 * ot * $ * fo, 1.7 * ot * $), Be = ho * xo, bo = Y / Math.max(1, Be), Ae = Math.max(0, (a - 0.95 * Math.max(d, m)) / 2), vo = Y / $, Ce = Ae * Math.sqrt(2 * Math.max(0, vo) / (0.9 * Do)), Mo = Ce / Math.max(1e-6, E), _o = Math.max(0.05, a - 2 * yt), yo = Math.sqrt(Pt * Pt + wt * wt), Ne = Math.max(0, yo / _o - Y / 2) / Math.max(1, _t), ze = 0.75 * (0.75 * Math.PI * P * P / 4) * Yo, go = Ne / Math.max(1, ze), Po = d * m, Gt = (d - 2 * f) * (m - 2 * f), Fe = Po - Gt, Se = 35e4 * Fe + 0.85 * ot * Gt, wo = 0.75 * Se, Bo = Y / Math.max(1, wo);
    Je.val = {
      vmMax: qt,
      A1: $,
      A2: we,
      phiPp: Be,
      demandCapPp: bo,
      m_cant: Ae,
      t_req: Ce,
      demandCapT: Mo,
      T_anchor: Ne,
      phiNn: ze,
      demandCapAnchor: go,
      As: Fe,
      Ac: Gt,
      Pno_composite: Se,
      demandCapPno: Bo
    }, Le.val = x, Oe.val = B, qe.val = me, Ge.val = jt, He.val = Et, De.val = Lt, Ye.val = F;
  });
  const Ue = Oo({
    mesh: {
      nodes: Le,
      elements: Oe,
      nodeInputs: qe,
      elementInputs: Ge,
      deformOutputs: He,
      analyzeOutputs: De
    },
    objects3D: Ye,
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
  }), Ut = document.createElement("div");
  Ut.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const j = new Ao({
    title: "\u{1F9EA} Placa base + col CFT",
    container: Ut,
    expanded: true
  }), u = {
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
  }, bt = (a) => a < 1 ? `${a.toFixed(2)} \u2713` : a < 1.2 ? `${a.toFixed(2)} \u26A0` : `${a.toFixed(2)} \u2717`, vt = j.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  vt.addBinding(u, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (a) => a.toExponential(3)
  });
  vt.addBinding(u, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (a) => a.toExponential(3)
  });
  vt.addBinding(u, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (a) => a.toFixed(0)
  });
  vt.addBinding(u, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: bt
  });
  const Mt = j.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  Mt.addBinding(u, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  Mt.addBinding(u, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  Mt.addBinding(u, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (a) => a.toFixed(0)
  });
  Mt.addBinding(u, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: bt
  });
  const Vt = j.addFolder({
    title: "DG-1 espesor placa"
  });
  Vt.addBinding(u, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (a) => a.toFixed(4)
  });
  Vt.addBinding(u, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (a) => (a * 1e3).toFixed(1)
  });
  Vt.addBinding(u, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: bt
  });
  const Xt = j.addFolder({
    title: "ACI \xA717 anclaje"
  });
  Xt.addBinding(u, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (a) => a.toFixed(1)
  });
  Xt.addBinding(u, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (a) => a.toFixed(1)
  });
  Xt.addBinding(u, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: bt
  });
  const Jo = j.addFolder({
    title: "FEM"
  });
  Jo.addBinding(u, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (a) => a.toExponential(3)
  });
  const Ve = j.addFolder({
    title: "Unidades",
    expanded: false
  }), Xe = {
    stress: Ee.val,
    disp: je.val
  };
  Ve.addBinding(Xe, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (a) => {
    Ee.val = a.value;
  });
  Ve.addBinding(Xe, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (a) => {
    je.val = a.value;
  });
  document.body.append(Ut);
  s.derive(() => {
    const a = Je.val;
    Object.assign(u, a), j.refresh();
  });
  document.body.append(Go(r), Ue, Ho({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => qo(), 200);
  setTimeout(() => {
    var _a;
    const a = Ue.__ctx;
    (a == null ? void 0 : a.camera) && (a == null ? void 0 : a.controls) && (a.camera.up.set(0, 0, 1), a.camera.position.set(2, -2, 1.2), a.controls.target.set(0, 0, 0.25), a.controls.update(), (_a = a.render) == null ? void 0 : _a.call(a));
  }, 800);
});
