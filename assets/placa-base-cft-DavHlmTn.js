import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as c, P as qo } from "./theme-2eEBQPmF.js";
import { L as Oo, M as dt, D as Ho, f as Do, P as Yo, g as Jo, b as U, C as yt, c as Uo, V as Vo, B as Xo, a as Ro } from "./Text-BajK4Ymq.js";
import { a as $o } from "./analyze-BydHtRcI.js";
import { d as Zo, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Ko, a as Je, e as Ue } from "./getViewer-CZ5JMuv5.js";
import { e as Qo } from "./makeDraggable-zx2br6Yh.js";
import { g as Wo } from "./getParameters-CIJBOwMB.js";
import { g as ta } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Rt = 2e8, $t = 0.3, De = Rt / (2 * (1 + $t)), Ye = 78, ea = 25e4, oa = 6e5, r = {
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
  }, Ve = c.state([]), Xe = c.state([]), Re = c.state({}), $e = c.state({}), Ze = c.state({}), Ke = c.state({}), Qe = c.state([]), We = c.state({
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
    const a = r.B.value.val, f = r.H.value.val, j = r.t_plate.value.val, d = r.bc.value.val, p = r.hc.value.val, x = r.t_col.value.val, E = r.L_col.value.val, Wt = Math.round(r.nBoltsX.value.val), Bt = Math.round(r.nBoltsY.value.val), At = r.sx.value.val, te = r.sy.value.val, A = r.d_bolt.value.val, pt = r.L_bolt.value.val, mt = r.L_proj.value.val, ut = r.d_hole.value.val / 2, ht = r.B_ped.value.val, ft = r.H_ped.value.val, Ct = r.h_ped.value.val, V = r.fc.value.val, X = r.Pu.value.val, Nt = r.Mx.value.val, zt = r.My.value.val, R = Math.round(r.nx.value.val), $ = Math.round(r.ny.value.val), M = Math.round(r.nz_col.value.val), u = 0.04, _ = [], v = [], Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map();
    function C(t, e, o) {
      return _.push([
        t,
        e,
        o
      ]), _.length - 1;
    }
    function Y(t, e, o, s, n) {
      v.push([
        t,
        e,
        o,
        s
      ]);
      const l = v.length - 1;
      Z.set(l, n), K.set(l, Rt), Q.set(l, $t), W.set(l, Ye), tt.set(l, De), et.set(l, 0), at.set(l, 0), ot.set(l, 0), st.set(l, 0);
    }
    function ee(t, e, o, s, n) {
      v.push([
        t,
        e
      ]);
      const l = v.length - 1;
      K.set(l, Rt), Q.set(l, $t), W.set(l, Ye), tt.set(l, De), et.set(l, o), at.set(l, s), ot.set(l, s), st.set(l, n), Z.set(l, 0);
    }
    const Ft = a / R, St = f / $, L = [];
    for (let t = 0; t <= $; t++) {
      const e = [];
      for (let o = 0; o <= R; o++) e.push(C(-a / 2 + o * Ft, -f / 2 + t * St, u));
      L.push(e);
    }
    for (let t = 0; t < $; t++) for (let e = 0; e < R; e++) {
      const o = -a / 2 + (e + 0.5) * Ft, s = -f / 2 + (t + 0.5) * St;
      Math.hypot(o, s) < ut || Y(L[t][e], L[t][e + 1], L[t + 1][e + 1], L[t + 1][e], j);
    }
    function G(t, e) {
      let o = -1, s = 1 / 0;
      for (let n = 0; n <= $; n++) for (let l = 0; l <= R; l++) {
        const b = L[n][l], T = Math.hypot(_[b][0] - t, _[b][1] - e);
        T < s && (s = T, o = b);
      }
      return o;
    }
    const y = Math.max(2, Math.round(d / Ft)), g = Math.max(2, Math.round(p / St)), xt = d / y, bt = p / g, nt = E / M, N = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let o = 0; o <= y; o++) {
        const s = -d / 2 + o * xt;
        t === 0 ? e.push(G(s, -p / 2)) : e.push(C(s, -p / 2, u + t * nt));
      }
      N.push(e);
    }
    for (let t = 0; t < M; t++) for (let e = 0; e < y; e++) Y(N[t][e], N[t][e + 1], N[t + 1][e + 1], N[t + 1][e], x);
    const z = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let o = 0; o <= y; o++) {
        const s = -d / 2 + o * xt;
        t === 0 ? e.push(G(s, p / 2)) : e.push(C(s, p / 2, u + t * nt));
      }
      z.push(e);
    }
    for (let t = 0; t < M; t++) for (let e = 0; e < y; e++) Y(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], x);
    const q = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let o = 0; o <= g; o++) {
        const s = -p / 2 + o * bt;
        t === 0 ? e.push(G(-d / 2, s)) : o === 0 ? e.push(N[t][0]) : o === g ? e.push(z[t][0]) : e.push(C(-d / 2, s, u + t * nt));
      }
      q.push(e);
    }
    for (let t = 0; t < M; t++) for (let e = 0; e < g; e++) Y(q[t][e], q[t][e + 1], q[t + 1][e + 1], q[t + 1][e], x);
    const O = [];
    for (let t = 0; t <= M; t++) {
      const e = [];
      for (let o = 0; o <= g; o++) {
        const s = -p / 2 + o * bt;
        t === 0 ? e.push(G(d / 2, s)) : o === 0 ? e.push(N[t][y]) : o === g ? e.push(z[t][y]) : e.push(C(d / 2, s, u + t * nt));
      }
      O.push(e);
    }
    for (let t = 0; t < M; t++) for (let e = 0; e < g; e++) Y(O[t][e], O[t][e + 1], O[t + 1][e + 1], O[t + 1][e], x);
    const oe = 4700 * Math.sqrt(V / 1e3) * 1e3, ae = 0.2, ao = oe / (2 * (1 + ae)), se = d - 2 * x, ne = p - 2 * x, F = 4, S = 4, _t = M, so = se / F, no = ne / S, lo = E / _t, m = [];
    for (let t = 0; t <= _t; t++) {
      const e = [];
      for (let o = 0; o <= S; o++) {
        const s = [];
        for (let n = 0; n <= F; n++) {
          const l = -se / 2 + n * so, b = -ne / 2 + o * no, T = u + j + t * lo;
          t === 0 ? s.push(G(l, b)) : s.push(C(l, b, T));
        }
        e.push(s);
      }
      m.push(e);
    }
    function lt(t, e, o, s) {
      v.push([
        t,
        e,
        o,
        s
      ]);
      const n = v.length - 1;
      Z.set(n, 1e-3), K.set(n, oe), Q.set(n, ae), W.set(n, 24 / 9.80665), tt.set(n, ao), et.set(n, 0), at.set(n, 0), ot.set(n, 0), st.set(n, 0);
    }
    for (let t = 0; t < S; t++) for (let e = 0; e < F; e++) lt(m[0][t][e], m[0][t][e + 1], m[0][t + 1][e + 1], m[0][t + 1][e]);
    for (let t = 0; t < _t; t++) for (let e = 0; e < F; e++) lt(m[t][0][e], m[t][0][e + 1], m[t + 1][0][e + 1], m[t + 1][0][e]), lt(m[t][S][e], m[t][S][e + 1], m[t + 1][S][e + 1], m[t + 1][S][e]);
    for (let t = 0; t < _t; t++) for (let e = 0; e < S; e++) lt(m[t][e][0], m[t][e + 1][0], m[t + 1][e + 1][0], m[t + 1][e][0]), lt(m[t][e][F], m[t][e + 1][F], m[t + 1][e + 1][F], m[t + 1][e][F]);
    const co = Math.min(0.2, E * 0.4), le = Math.min(0.1, (a - d) / 2 * 0.7), ro = Math.max(1, Math.round(co / nt));
    function k(t, e, o, s) {
      const [n, l] = t, [b, T] = e, Vt = o[0][s], Xt = G(n + b * le, l + T * le), He = o[Math.min(ro, o.length - 1)][s];
      Y(Vt, Xt, He, He, x);
    }
    const ce = Math.max(1, Math.round(y * 0.25)), re = Math.max(1, Math.round(g * 0.25)), kt = Math.round(y / 2) - ce, It = Math.round(y / 2) + ce, Tt = Math.round(g / 2) - re, jt = Math.round(g / 2) + re, ie = -d / 2 + kt * xt, de = -d / 2 + It * xt;
    k([
      ie,
      p / 2
    ], [
      0,
      1
    ], z, kt), k([
      de,
      p / 2
    ], [
      0,
      1
    ], z, It), k([
      ie,
      -p / 2
    ], [
      0,
      -1
    ], N, kt), k([
      de,
      -p / 2
    ], [
      0,
      -1
    ], N, It);
    const pe = -p / 2 + Tt * bt, me = -p / 2 + jt * bt;
    k([
      d / 2,
      pe
    ], [
      1,
      0
    ], O, Tt), k([
      d / 2,
      me
    ], [
      1,
      0
    ], O, jt), k([
      -d / 2,
      pe
    ], [
      -1,
      0
    ], q, Tt), k([
      -d / 2,
      me
    ], [
      -1,
      0
    ], q, jt);
    const ue = Math.PI * A * A / 4, Et = Math.PI * A ** 4 / 64, he = 2 * Et, ct = [], io = (a - 2 * At) / Math.max(1, Wt - 1), po = (f - 2 * te) / Math.max(1, Bt - 1);
    for (let t = 0; t < Wt; t++) for (let e = 0; e < Bt; e++) {
      const o = -a / 2 + At + t * io, s = -f / 2 + te + e * po;
      Math.abs(o) < d / 2 + 5e-3 && Math.abs(s) < p / 2 + 5e-3 || ct.push([
        o,
        s
      ]);
    }
    const mo = [
      ...ct
    ], fe = 4700 * Math.sqrt(V / 1e3) * 1e3, xe = 0.2, uo = fe / (2 * (1 + xe)), P = 10, w = 10, B = 6, Lt = ht / P, be = ft / w, ho = Ct / B, fo = [];
    for (let t = 0; t <= $; t++) for (let e = 0; e <= R; e++) {
      const o = L[t][e];
      fo.push({
        id: o,
        x: _[o][0],
        y: _[o][1]
      });
    }
    const i = [];
    for (let t = 0; t <= B; t++) {
      const e = [];
      for (let o = 0; o <= w; o++) {
        const s = [];
        for (let n = 0; n <= P; n++) s.push(C(-ht / 2 + n * Lt, -ft / 2 + o * be, -Ct + t * ho));
        e.push(s);
      }
      i.push(e);
    }
    function J(t, e, o, s) {
      v.push([
        t,
        e,
        o,
        s
      ]);
      const n = v.length - 1;
      Z.set(n, 1e-3), K.set(n, fe), Q.set(n, xe), W.set(n, 24 / 9.80665), tt.set(n, uo), et.set(n, 0), at.set(n, 0), ot.set(n, 0), st.set(n, 0);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < P; e++) J(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]);
    function xo(t, e) {
      for (const [o, s] of ct) if (Math.hypot(t - o, e - s) < Lt * 0.6) return true;
      return false;
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < P; e++) {
      const o = -ht / 2 + (e + 0.5) * Lt, s = -ft / 2 + (t + 0.5) * be;
      xo(o, s) || J(i[B][t][e], i[B][t][e + 1], i[B][t + 1][e + 1], i[B][t + 1][e]);
    }
    for (let t = 0; t < B; t++) for (let e = 0; e < P; e++) J(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < P; e++) J(i[t][w][e], i[t][w][e + 1], i[t + 1][w][e + 1], i[t + 1][w][e]);
    for (let t = 0; t < B; t++) for (let e = 0; e < w; e++) J(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]);
    for (let t = 0; t < B; t++) for (let e = 0; e < w; e++) J(i[t][e][P], i[t][e + 1][P], i[t + 1][e + 1][P], i[t + 1][e][P]);
    for (const [t, e] of mo) {
      const o = C(t, e, u + mt), s = G(t, e), n = C(t, e, u - pt);
      ee(o, s, ue, Et, he), ee(s, n, ue, Et, he);
    }
    const _e = /* @__PURE__ */ new Map();
    _.forEach((t, e) => {
      const o = Math.abs(t[2] - (u - pt)) < 1e-6 && ct.some(([n, l]) => Math.abs(t[0] - n) < 1e-6 && Math.abs(t[1] - l) < 1e-6), s = Math.abs(t[2] - -Ct) < 1e-6;
      (o || s) && _e.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const Gt = [];
    _.forEach((t, e) => {
      Math.abs(t[2] - (u + E)) < 1e-6 && Math.abs(t[0]) <= d / 2 + 1e-6 && Math.abs(t[1]) <= p / 2 + 1e-6 && Gt.push(e);
    });
    const qt = Math.max(1, Gt.length), bo = -X / qt, _o = Nt / qt, vo = zt / qt, ve = /* @__PURE__ */ new Map();
    for (const t of Gt) ve.set(t, [
      0,
      0,
      bo,
      _o,
      vo,
      0
    ]);
    const Me = {
      supports: _e,
      loads: ve
    }, Ot = {
      elasticities: K,
      shearModuli: tt,
      areas: et,
      momentsOfInertiaZ: ot,
      momentsOfInertiaY: at,
      torsionalConstants: st,
      densities: W,
      poissonsRatios: Q,
      thicknesses: Z
    };
    let Ht = {}, Dt = {};
    try {
      Ht = Zo(_, v, Me, Ot), Dt = $o(_, v, Ot, Ht);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const I = [], Mo = new Oo({
      color: 16755200
    });
    function rt(t, e) {
      const s = [];
      for (let b = 0; b <= 5 * 2; b++) {
        const T = b / 10, Vt = u * (1 - T), Xt = b % 2 === 0 ? 0 : 8e-3;
        s.push(new Vo(t + Xt, e, Vt));
      }
      const n = new Xo().setFromPoints(s), l = new Ro(n, Mo);
      I.push(l);
    }
    rt(a / 2 - 0.04, f / 2 - 0.04), rt(-a / 2 + 0.04, f / 2 - 0.04), rt(a / 2 - 0.04, -f / 2 + 0.04), rt(-a / 2 + 0.04, -f / 2 + 0.04), rt(0, 0);
    const yo = new dt({
      color: 12105912,
      metalness: 0.7,
      roughness: 0.4,
      transparent: true,
      opacity: 0.55,
      side: Ho
    }), H = new Do();
    H.moveTo(-a / 2, -f / 2), H.lineTo(a / 2, -f / 2), H.lineTo(a / 2, f / 2), H.lineTo(-a / 2, f / 2), H.closePath();
    const ye = new Yo();
    ye.absarc(0, 0, ut, 0, Math.PI * 2, true), H.holes.push(ye);
    const go = new Jo(H, {
      depth: j,
      bevelEnabled: false
    }), ge = new U(go, yo);
    ge.position.set(0, 0, u), I.push(ge);
    const Po = new dt({
      color: 8930338,
      roughness: 0.6
    }), Pe = 0.012, we = 0.025, vt = d / 2 - x - we, Mt = p / 2 - x - we;
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
      const o = new U(new yt(Pe / 2, Pe / 2, E, 8), Po);
      o.position.set(t, e, u + E / 2 + j), o.rotation.x = Math.PI / 2, I.push(o);
    }
    const Be = new dt({
      color: 12888184,
      transparent: true,
      opacity: 0.55
    }), Ae = u + j, Yt = new U(new yt(ut, ut, Ae, 24), Be);
    Yt.position.set(0, 0, Ae / 2), Yt.rotation.x = Math.PI / 2, I.push(Yt);
    const Ce = u + j, Ne = u + E, ze = new U(new Uo(d - 2 * x, p - 2 * x, Ne - Ce), Be);
    ze.position.set(0, 0, (Ce + Ne) / 2), I.push(ze);
    const wo = new dt({
      color: 6710886,
      metalness: 0.5
    }), Bo = new dt({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), Fe = A * 0.8, Se = A * 0.85, Ao = u + mt + Fe / 2;
    for (const [t, e] of ct) {
      const o = new yt(A / 2, A / 2, pt + mt, 12), s = new U(o, wo);
      s.position.set(t, e, u + (-pt + mt) / 2), s.rotation.x = Math.PI / 2, I.push(s);
      const n = new yt(Se, Se, Fe, 6), l = new U(n, Bo);
      l.position.set(t, e, Ao), l.rotation.x = Math.PI / 2, I.push(l);
    }
    let Jt = 0;
    const ke = Dt == null ? void 0 : Dt.vonMises;
    ke && ke.forEach((t) => t.forEach((e) => {
      e > Jt && (Jt = e);
    }));
    const Co = 0.65, it = a * f, Ie = ht * ft, No = Math.min(2, Math.sqrt(Ie / it)), zo = Math.min(0.85 * V * it * No, 1.7 * V * it), Te = Co * zo, Fo = X / Math.max(1, Te), je = Math.max(0, (a - 0.95 * Math.max(d, p)) / 2), So = X / it, Ee = je * Math.sqrt(2 * Math.max(0, So) / (0.9 * ea)), ko = Ee / Math.max(1e-6, j), Io = Math.max(0.05, a - 2 * At), To = Math.sqrt(Nt * Nt + zt * zt), Le = Math.max(0, To / Io - X / 2) / Math.max(1, Bt), Ge = 0.75 * (0.75 * Math.PI * A * A / 4) * oa, jo = Le / Math.max(1, Ge), Eo = d * p, Ut = (d - 2 * x) * (p - 2 * x), qe = Eo - Ut, Oe = 35e4 * qe + 0.85 * V * Ut, Lo = 0.75 * Oe, Go = X / Math.max(1, Lo);
    We.val = {
      vmMax: Jt,
      A1: it,
      A2: Ie,
      phiPp: Te,
      demandCapPp: Fo,
      m_cant: je,
      t_req: Ee,
      demandCapT: ko,
      T_anchor: Le,
      phiNn: Ge,
      demandCapAnchor: jo,
      As: qe,
      Ac: Ut,
      Pno_composite: Oe,
      demandCapPno: Go
    }, Ve.val = _, Xe.val = v, Re.val = Me, $e.val = Ot, Ze.val = Ht, Ke.val = Dt, Qe.val = I;
  });
  const to = Ko({
    mesh: {
      nodes: Ve,
      elements: Xe,
      nodeInputs: Re,
      elementInputs: $e,
      deformOutputs: Ze,
      analyzeOutputs: Ke
    },
    objects3D: Qe,
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
  }), Zt = document.createElement("div");
  Zt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const D = new qo({
    title: "\u{1F9EA} Placa base + col CFT",
    container: Zt,
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
  }, gt = (a) => a < 1 ? `${a.toFixed(2)} \u2713` : a < 1.2 ? `${a.toFixed(2)} \u26A0` : `${a.toFixed(2)} \u2717`, Pt = D.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  Pt.addBinding(h, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (a) => a.toExponential(3)
  });
  Pt.addBinding(h, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (a) => a.toExponential(3)
  });
  Pt.addBinding(h, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (a) => a.toFixed(0)
  });
  Pt.addBinding(h, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: gt
  });
  const wt = D.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  wt.addBinding(h, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  wt.addBinding(h, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (a) => a.toFixed(4)
  });
  wt.addBinding(h, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (a) => a.toFixed(0)
  });
  wt.addBinding(h, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: gt
  });
  const Kt = D.addFolder({
    title: "DG-1 espesor placa"
  });
  Kt.addBinding(h, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (a) => a.toFixed(4)
  });
  Kt.addBinding(h, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (a) => (a * 1e3).toFixed(1)
  });
  Kt.addBinding(h, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: gt
  });
  const Qt = D.addFolder({
    title: "ACI \xA717 anclaje"
  });
  Qt.addBinding(h, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (a) => a.toFixed(1)
  });
  Qt.addBinding(h, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (a) => a.toFixed(1)
  });
  Qt.addBinding(h, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: gt
  });
  const aa = D.addFolder({
    title: "FEM"
  });
  aa.addBinding(h, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (a) => a.toExponential(3)
  });
  const eo = D.addFolder({
    title: "Unidades",
    expanded: false
  }), oo = {
    stress: Ue.val,
    disp: Je.val
  };
  eo.addBinding(oo, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (a) => {
    Ue.val = a.value;
  });
  eo.addBinding(oo, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (a) => {
    Je.val = a.value;
  });
  document.body.append(Zt);
  c.derive(() => {
    const a = We.val;
    Object.assign(h, a), D.refresh();
  });
  document.body.append(Wo(r), to, ta({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => Qo(), 200);
  setTimeout(() => {
    var _a;
    const a = to.__ctx;
    (a == null ? void 0 : a.camera) && (a == null ? void 0 : a.controls) && (a.camera.up.set(0, 0, 1), a.camera.position.set(2, -2, 1.2), a.controls.target.set(0, 0, 0.25), a.controls.update(), (_a = a.render) == null ? void 0 : _a.call(a));
  }, 800);
});
