import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as s, P as ya } from "./theme-2eEBQPmF.js";
import { L as Pa, M as $, D as ga, f as wa, P as Ba, g as Aa, b as Z, C as Gt, c as Ca, V as Na, B as Fa, a as Sa } from "./Text-BajK4Ymq.js";
import { a as za } from "./analyze-BydHtRcI.js";
import { d as Ta, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as Ia, a as Se, e as ze } from "./getViewer-CZ5JMuv5.js";
import { e as ka } from "./makeDraggable-zx2br6Yh.js";
import { g as ja } from "./getParameters-CIJBOwMB.js";
import { g as Ea } from "./styles-Cjdl64P4.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Ht = 2e8, Dt = 0.3, Ne = Ht / (2 * (1 + Dt)), Fe = 78, La = 25e4, Oa = 6e5, r = {
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
  }, Te = s.state([]), Ie = s.state([]), ke = s.state({}), je = s.state({}), Ee = s.state({}), Le = s.state({}), Oe = s.state([]), qe = s.state({
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
    const o = r.B.value.val, h = r.H.value.val, H = r.t_plate.value.val, d = r.bc.value.val, m = r.hc.value.val, f = r.t_col.value.val, S = r.L_col.value.val, Vt = Math.round(r.nBoltsX.value.val), vt = Math.round(r.nBoltsY.value.val), Mt = r.sx.value.val, Xt = r.sy.value.val, g = r.d_bolt.value.val, K = r.L_bolt.value.val, Q = r.L_proj.value.val, Rt = r.d_hole.value.val / 2, W = r.B_ped.value.val, tt = r.H_ped.value.val, _t = r.h_ped.value.val, et = r.fc.value.val, D = r.Pu.value.val, yt = r.Mx.value.val, Pt = r.My.value.val, Y = Math.round(r.nx.value.val), J = Math.round(r.ny.value.val), w = Math.round(r.nz_col.value.val), u = 0.04, x = [], B = [], at = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map();
    function N(t, e, a) {
      return x.push([
        t,
        e,
        a
      ]), x.length - 1;
    }
    function L(t, e, a, n, c) {
      B.push([
        t,
        e,
        a,
        n
      ]);
      const l = B.length - 1;
      at.set(l, c), ot.set(l, Ht), nt.set(l, Dt), st.set(l, Fe), lt.set(l, Ne), ct.set(l, 0), it.set(l, 0), rt.set(l, 0), dt.set(l, 0);
    }
    function $t(t, e, a, n, c) {
      B.push([
        t,
        e
      ]);
      const l = B.length - 1;
      ot.set(l, Ht), nt.set(l, Dt), st.set(l, Fe), lt.set(l, Ne), ct.set(l, a), it.set(l, n), rt.set(l, n), dt.set(l, c), at.set(l, 0);
    }
    const gt = o / Y, wt = h / J, z = [];
    for (let t = 0; t <= J; t++) {
      const e = [];
      for (let a = 0; a <= Y; a++) e.push(N(-o / 2 + a * gt, -h / 2 + t * wt, u));
      z.push(e);
    }
    for (let t = 0; t < J; t++) for (let e = 0; e < Y; e++) {
      const a = -o / 2 + (e + 0.5) * gt, n = -h / 2 + (t + 0.5) * wt;
      Math.hypot(a, n) < Rt || L(z[t][e], z[t][e + 1], z[t + 1][e + 1], z[t + 1][e], H);
    }
    function O(t, e) {
      let a = -1, n = 1 / 0;
      for (let c = 0; c <= J; c++) for (let l = 0; l <= Y; l++) {
        const P = z[c][l], G = Math.hypot(x[P][0] - t, x[P][1] - e);
        G < n && (n = G, a = P);
      }
      return a;
    }
    const b = Math.max(2, Math.round(d / gt)), v = Math.max(2, Math.round(m / wt)), mt = d / b, pt = m / v, U = S / w, A = [];
    for (let t = 0; t <= w; t++) {
      const e = [];
      for (let a = 0; a <= b; a++) {
        const n = -d / 2 + a * mt;
        t === 0 ? e.push(O(n, -m / 2)) : e.push(N(n, -m / 2, u + t * U));
      }
      A.push(e);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < b; e++) L(A[t][e], A[t][e + 1], A[t + 1][e + 1], A[t + 1][e], f);
    const C = [];
    for (let t = 0; t <= w; t++) {
      const e = [];
      for (let a = 0; a <= b; a++) {
        const n = -d / 2 + a * mt;
        t === 0 ? e.push(O(n, m / 2)) : e.push(N(n, m / 2, u + t * U));
      }
      C.push(e);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < b; e++) L(C[t][e], C[t][e + 1], C[t + 1][e + 1], C[t + 1][e], f);
    const T = [];
    for (let t = 0; t <= w; t++) {
      const e = [];
      for (let a = 0; a <= v; a++) {
        const n = -m / 2 + a * pt;
        t === 0 ? e.push(O(-d / 2, n)) : a === 0 ? e.push(A[t][0]) : a === v ? e.push(C[t][0]) : e.push(N(-d / 2, n, u + t * U));
      }
      T.push(e);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < v; e++) L(T[t][e], T[t][e + 1], T[t + 1][e + 1], T[t + 1][e], f);
    const I = [];
    for (let t = 0; t <= w; t++) {
      const e = [];
      for (let a = 0; a <= v; a++) {
        const n = -m / 2 + a * pt;
        t === 0 ? e.push(O(d / 2, n)) : a === 0 ? e.push(A[t][b]) : a === v ? e.push(C[t][b]) : e.push(N(d / 2, n, u + t * U));
      }
      I.push(e);
    }
    for (let t = 0; t < w; t++) for (let e = 0; e < v; e++) L(I[t][e], I[t][e + 1], I[t + 1][e + 1], I[t + 1][e], f);
    const Ye = Math.min(0.2, S * 0.4), Zt = Math.min(0.1, (o - d) / 2 * 0.7), Je = Math.max(1, Math.round(Ye / U));
    function F(t, e, a, n) {
      const [c, l] = t, [P, G] = e, Ot = a[0][n], qt = O(c + P * Zt, l + G * Zt), Ce = a[Math.min(Je, a.length - 1)][n];
      L(Ot, qt, Ce, Ce, f);
    }
    const Kt = Math.max(1, Math.round(b * 0.25)), Qt = Math.max(1, Math.round(v * 0.25)), Bt = Math.round(b / 2) - Kt, At = Math.round(b / 2) + Kt, Ct = Math.round(v / 2) - Qt, Nt = Math.round(v / 2) + Qt, Wt = -d / 2 + Bt * mt, te = -d / 2 + At * mt;
    F([
      Wt,
      m / 2
    ], [
      0,
      1
    ], C, Bt), F([
      te,
      m / 2
    ], [
      0,
      1
    ], C, At), F([
      Wt,
      -m / 2
    ], [
      0,
      -1
    ], A, Bt), F([
      te,
      -m / 2
    ], [
      0,
      -1
    ], A, At);
    const ee = -m / 2 + Ct * pt, ae = -m / 2 + Nt * pt;
    F([
      d / 2,
      ee
    ], [
      1,
      0
    ], I, Ct), F([
      d / 2,
      ae
    ], [
      1,
      0
    ], I, Nt), F([
      -d / 2,
      ee
    ], [
      -1,
      0
    ], T, Ct), F([
      -d / 2,
      ae
    ], [
      -1,
      0
    ], T, Nt);
    const oe = Math.PI * g * g / 4, Ft = Math.PI * g ** 4 / 64, ne = 2 * Ft, V = [], Ue = (o - 2 * Mt) / Math.max(1, Vt - 1), Ve = (h - 2 * Xt) / Math.max(1, vt - 1);
    for (let t = 0; t < Vt; t++) for (let e = 0; e < vt; e++) {
      const a = -o / 2 + Mt + t * Ue, n = -h / 2 + Xt + e * Ve;
      Math.abs(a) < d / 2 + 5e-3 && Math.abs(n) < m / 2 + 5e-3 || V.push([
        a,
        n
      ]);
    }
    const Xe = [
      ...V
    ], se = 4700 * Math.sqrt(et / 1e3) * 1e3, le = 0.2, Re = se / (2 * (1 + le)), M = 10, _ = 10, y = 6, St = W / M, ce = tt / _, $e = _t / y, Ze = [];
    for (let t = 0; t <= J; t++) for (let e = 0; e <= Y; e++) {
      const a = z[t][e];
      Ze.push({
        id: a,
        x: x[a][0],
        y: x[a][1]
      });
    }
    const i = [];
    for (let t = 0; t <= y; t++) {
      const e = [];
      for (let a = 0; a <= _; a++) {
        const n = [];
        for (let c = 0; c <= M; c++) n.push(N(-W / 2 + c * St, -tt / 2 + a * ce, -_t + t * $e));
        e.push(n);
      }
      i.push(e);
    }
    function q(t, e, a, n) {
      B.push([
        t,
        e,
        a,
        n
      ]);
      const c = B.length - 1;
      at.set(c, 1e-3), ot.set(c, se), nt.set(c, le), st.set(c, 24 / 9.80665), lt.set(c, Re), ct.set(c, 0), it.set(c, 0), rt.set(c, 0), dt.set(c, 0);
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < M; e++) q(i[0][t][e], i[0][t][e + 1], i[0][t + 1][e + 1], i[0][t + 1][e]);
    function Ke(t, e) {
      for (const [a, n] of V) if (Math.hypot(t - a, e - n) < St * 0.6) return true;
      return false;
    }
    for (let t = 0; t < _; t++) for (let e = 0; e < M; e++) {
      const a = -W / 2 + (e + 0.5) * St, n = -tt / 2 + (t + 0.5) * ce;
      Ke(a, n) || q(i[y][t][e], i[y][t][e + 1], i[y][t + 1][e + 1], i[y][t + 1][e]);
    }
    for (let t = 0; t < y; t++) for (let e = 0; e < M; e++) q(i[t][0][e], i[t][0][e + 1], i[t + 1][0][e + 1], i[t + 1][0][e]);
    for (let t = 0; t < y; t++) for (let e = 0; e < M; e++) q(i[t][_][e], i[t][_][e + 1], i[t + 1][_][e + 1], i[t + 1][_][e]);
    for (let t = 0; t < y; t++) for (let e = 0; e < _; e++) q(i[t][e][0], i[t][e + 1][0], i[t + 1][e + 1][0], i[t + 1][e][0]);
    for (let t = 0; t < y; t++) for (let e = 0; e < _; e++) q(i[t][e][M], i[t][e + 1][M], i[t + 1][e + 1][M], i[t + 1][e][M]);
    for (const [t, e] of Xe) {
      const a = N(t, e, u + Q), n = O(t, e), c = N(t, e, u - K);
      $t(a, n, oe, Ft, ne), $t(n, c, oe, Ft, ne);
    }
    const re = /* @__PURE__ */ new Map();
    x.forEach((t, e) => {
      const a = Math.abs(t[2] - (u - K)) < 1e-6 && V.some(([c, l]) => Math.abs(t[0] - c) < 1e-6 && Math.abs(t[1] - l) < 1e-6), n = Math.abs(t[2] - -_t) < 1e-6;
      (a || n) && re.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });
    const zt = [];
    x.forEach((t, e) => {
      Math.abs(t[2] - (u + S)) < 1e-6 && Math.abs(t[0]) <= d / 2 + 1e-6 && Math.abs(t[1]) <= m / 2 + 1e-6 && zt.push(e);
    });
    const Tt = Math.max(1, zt.length), Qe = -D / Tt, We = yt / Tt, ta = Pt / Tt, ie = /* @__PURE__ */ new Map();
    for (const t of zt) ie.set(t, [
      0,
      0,
      Qe,
      We,
      ta,
      0
    ]);
    const de = {
      supports: re,
      loads: ie
    }, It = {
      elasticities: ot,
      shearModuli: lt,
      areas: ct,
      momentsOfInertiaZ: rt,
      momentsOfInertiaY: it,
      torsionalConstants: dt,
      densities: st,
      poissonsRatios: nt,
      thicknesses: at
    };
    let kt = {}, jt = {};
    try {
      kt = Ta(x, B, de, It), jt = za(x, B, It, kt);
    } catch (t) {
      console.warn("placa-base-hueca:", (t == null ? void 0 : t.message) ?? t);
    }
    const k = [], ea = new Pa({
      color: 16755200
    });
    function X(t, e) {
      const n = [];
      for (let P = 0; P <= 5 * 2; P++) {
        const G = P / 10, Ot = u * (1 - G), qt = P % 2 === 0 ? 0 : 8e-3;
        n.push(new Na(t + qt, e, Ot));
      }
      const c = new Fa().setFromPoints(n), l = new Sa(c, ea);
      k.push(l);
    }
    X(o / 2 - 0.04, h / 2 - 0.04), X(-o / 2 + 0.04, h / 2 - 0.04), X(o / 2 - 0.04, -h / 2 + 0.04), X(-o / 2 + 0.04, -h / 2 + 0.04), X(0, 0);
    const aa = new $({
      color: 12105912,
      metalness: 0.7,
      roughness: 0.4,
      transparent: true,
      opacity: 0.55,
      side: ga
    }), j = new wa();
    j.moveTo(-o / 2, -h / 2), j.lineTo(o / 2, -h / 2), j.lineTo(o / 2, h / 2), j.lineTo(-o / 2, h / 2), j.closePath();
    const me = new Ba();
    me.absarc(0, 0, Rt, 0, Math.PI * 2, true), j.holes.push(me);
    const oa = new Aa(j, {
      depth: H,
      bevelEnabled: false
    }), pe = new Z(oa, aa);
    pe.position.set(0, 0, u), k.push(pe);
    const na = new $({
      color: 8930338,
      roughness: 0.6
    }), ue = 0.012, he = 0.025, ut = d / 2 - f - he, ht = m / 2 - f - he;
    for (const [t, e] of [
      [
        ut,
        ht
      ],
      [
        -ut,
        ht
      ],
      [
        ut,
        -ht
      ],
      [
        -ut,
        -ht
      ]
    ]) {
      const a = new Z(new Gt(ue / 2, ue / 2, S, 8), na);
      a.position.set(t, e, u + S / 2 + H), a.rotation.x = Math.PI / 2, k.push(a);
    }
    const sa = new $({
      color: 12888184,
      transparent: true,
      opacity: 0.45
    }), fe = new Z(new Ca(d - 2 * f, m - 2 * f, S - 5e-3), sa);
    fe.position.set(0, 0, u + S / 2 + H), k.push(fe);
    const la = new $({
      color: 6710886,
      metalness: 0.5
    }), ca = new $({
      color: 4473924,
      metalness: 0.7,
      roughness: 0.3
    }), xe = g * 0.8, be = g * 0.85, ra = u + Q + xe / 2;
    for (const [t, e] of V) {
      const a = new Gt(g / 2, g / 2, K + Q, 12), n = new Z(a, la);
      n.position.set(t, e, u + (-K + Q) / 2), n.rotation.x = Math.PI / 2, k.push(n);
      const c = new Gt(be, be, xe, 6), l = new Z(c, ca);
      l.position.set(t, e, ra), l.rotation.x = Math.PI / 2, k.push(l);
    }
    let Et = 0;
    const ve = jt == null ? void 0 : jt.vonMises;
    ve && ve.forEach((t) => t.forEach((e) => {
      e > Et && (Et = e);
    }));
    const ia = 0.65, R = o * h, Me = W * tt, da = Math.min(2, Math.sqrt(Me / R)), ma = Math.min(0.85 * et * R * da, 1.7 * et * R), _e = ia * ma, pa = D / Math.max(1, _e), ye = Math.max(0, (o - 0.95 * Math.max(d, m)) / 2), ua = D / R, Pe = ye * Math.sqrt(2 * Math.max(0, ua) / (0.9 * La)), ha = Pe / Math.max(1e-6, H), fa = Math.max(0.05, o - 2 * Mt), xa = Math.sqrt(yt * yt + Pt * Pt), ge = Math.max(0, xa / fa - D / 2) / Math.max(1, vt), we = 0.75 * (0.75 * Math.PI * g * g / 4) * Oa, ba = ge / Math.max(1, we), va = d * m, Lt = (d - 2 * f) * (m - 2 * f), Be = va - Lt, Ae = 35e4 * Be + 0.85 * et * Lt, Ma = 0.75 * Ae, _a = D / Math.max(1, Ma);
    qe.val = {
      vmMax: Et,
      A1: R,
      A2: Me,
      phiPp: _e,
      demandCapPp: pa,
      m_cant: ye,
      t_req: Pe,
      demandCapT: ha,
      T_anchor: ge,
      phiNn: we,
      demandCapAnchor: ba,
      As: Be,
      Ac: Lt,
      Pno_composite: Ae,
      demandCapPno: _a
    }, Te.val = x, Ie.val = B, ke.val = de, je.val = It, Ee.val = kt, Le.val = jt, Oe.val = k;
  });
  const Ge = Ia({
    mesh: {
      nodes: Te,
      elements: Ie,
      nodeInputs: ke,
      elementInputs: je,
      deformOutputs: Ee,
      analyzeOutputs: Le
    },
    objects3D: Oe,
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
  }), Yt = document.createElement("div");
  Yt.style.cssText = "position:fixed;top:8px;right:8px;width:300px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const E = new ya({
    title: "\u{1F9EA} Placa base + col CFT",
    container: Yt,
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
  }, ft = (o) => o < 1 ? `${o.toFixed(2)} \u2713` : o < 1.2 ? `${o.toFixed(2)} \u26A0` : `${o.toFixed(2)} \u2717`, xt = E.addFolder({
    title: "AISC \xA7I2.1b composite CFT"
  });
  xt.addBinding(p, "As", {
    readonly: true,
    label: "As acero (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  xt.addBinding(p, "Ac", {
    readonly: true,
    label: "Ac concreto (m\xB2)",
    format: (o) => o.toExponential(3)
  });
  xt.addBinding(p, "Pno_composite", {
    readonly: true,
    label: "Pno (kN)",
    format: (o) => o.toFixed(0)
  });
  xt.addBinding(p, "demandCapPno", {
    readonly: true,
    label: "Pu/\u03C6Pno",
    format: ft
  });
  const bt = E.addFolder({
    title: "AISC \xA7J8 bearing concreto"
  });
  bt.addBinding(p, "A1", {
    readonly: true,
    label: "A1 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  bt.addBinding(p, "A2", {
    readonly: true,
    label: "A2 (m\xB2)",
    format: (o) => o.toFixed(4)
  });
  bt.addBinding(p, "phiPp", {
    readonly: true,
    label: "\u03C6Pp (kN)",
    format: (o) => o.toFixed(0)
  });
  bt.addBinding(p, "demandCapPp", {
    readonly: true,
    label: "Pu/\u03C6Pp",
    format: ft
  });
  const Jt = E.addFolder({
    title: "DG-1 espesor placa"
  });
  Jt.addBinding(p, "m_cant", {
    readonly: true,
    label: "m cant (m)",
    format: (o) => o.toFixed(4)
  });
  Jt.addBinding(p, "t_req", {
    readonly: true,
    label: "t_req (mm)",
    format: (o) => (o * 1e3).toFixed(1)
  });
  Jt.addBinding(p, "demandCapT", {
    readonly: true,
    label: "t_req/t_act",
    format: ft
  });
  const Ut = E.addFolder({
    title: "ACI \xA717 anclaje"
  });
  Ut.addBinding(p, "T_anchor", {
    readonly: true,
    label: "T (kN/perno)",
    format: (o) => o.toFixed(1)
  });
  Ut.addBinding(p, "phiNn", {
    readonly: true,
    label: "\u03C6Nn (kN)",
    format: (o) => o.toFixed(1)
  });
  Ut.addBinding(p, "demandCapAnchor", {
    readonly: true,
    label: "T/\u03C6Nn",
    format: ft
  });
  const qa = E.addFolder({
    title: "FEM"
  });
  qa.addBinding(p, "vmMax", {
    readonly: true,
    label: "\u03C3 vM max (kN/m\xB2)",
    format: (o) => o.toExponential(3)
  });
  const He = E.addFolder({
    title: "Unidades",
    expanded: false
  }), De = {
    stress: ze.val,
    disp: Se.val
  };
  He.addBinding(De, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (o) => {
    ze.val = o.value;
  });
  He.addBinding(De, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (o) => {
    Se.val = o.value;
  });
  document.body.append(Yt);
  s.derive(() => {
    const o = qe.val;
    Object.assign(p, o), E.refresh();
  });
  document.body.append(ja(r), Ge, Ea({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-cft/main.ts"
  }));
  setTimeout(() => ka(), 200);
  setTimeout(() => {
    var _a;
    const o = Ge.__ctx;
    (o == null ? void 0 : o.camera) && (o == null ? void 0 : o.controls) && (o.camera.up.set(0, 0, 1), o.camera.position.set(2, -2, 1.2), o.controls.target.set(0, 0, 0.25), o.controls.update(), (_a = o.render) == null ? void 0 : _a.call(o));
  }, 800);
});
