import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as a } from "./theme-2eEBQPmF.js";
import { a as me } from "./analyze-BydHtRcI.js";
import { d as de, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as he } from "./getViewer-CARv9b4z.js";
import { g as fe } from "./getParameters-CIJBOwMB.js";
import { g as ve } from "./styles-Cjdl64P4.js";
import { e as lt, L as ct, C as Ht, b as it, E as Ot, d as kt, V as Ct, a as Yt, B as Xt, c as be, D as xe } from "./Text-DyNVkyur.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const rt = 2e8, ut = 0.3, Ft = rt / (2 * (1 + ut)), Dt = 78, c = {
    B: {
      value: a.state(0.5),
      min: 0.25,
      max: 1.2,
      step: 0.02,
      label: "B placa (m, eje X)"
    },
    H: {
      value: a.state(0.5),
      min: 0.25,
      max: 1.2,
      step: 0.02,
      label: "H placa (m, eje Y)"
    },
    t_plate: {
      value: a.state(0.025),
      min: 0.012,
      max: 0.06,
      step: 2e-3,
      label: "Espesor placa (m)"
    },
    d_col: {
      value: a.state(0.3),
      min: 0.18,
      max: 0.5,
      step: 0.02,
      label: "d columna (m)"
    },
    bf_col: {
      value: a.state(0.25),
      min: 0.15,
      max: 0.4,
      step: 0.01,
      label: "bf columna (m)"
    },
    tf_col: {
      value: a.state(0.022),
      min: 0.012,
      max: 0.04,
      step: 2e-3,
      label: "tf pat\xEDn (m)"
    },
    tw_col: {
      value: a.state(0.014),
      min: 8e-3,
      max: 0.025,
      step: 1e-3,
      label: "tw alma (m)"
    },
    L_col: {
      value: a.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "L stub columna (m)"
    },
    nBoltsX: {
      value: a.state(2),
      min: 2,
      max: 6,
      step: 1,
      label: "Pernos en X (filas)"
    },
    nBoltsY: {
      value: a.state(2),
      min: 2,
      max: 6,
      step: 1,
      label: "Pernos en Y (columnas)"
    },
    sx: {
      value: a.state(0.07),
      min: 0.03,
      max: 0.25,
      step: 0.01,
      label: "sx \u2014 dist borde X (m)"
    },
    sy: {
      value: a.state(0.07),
      min: 0.03,
      max: 0.25,
      step: 0.01,
      label: "sy \u2014 dist borde Y (m)"
    },
    d_bolt: {
      value: a.state(0.024),
      min: 0.012,
      max: 0.05,
      step: 2e-3,
      label: "\xD8 perno (m)"
    },
    L_bolt: {
      value: a.state(0.3),
      min: 0.15,
      max: 0.6,
      step: 0.02,
      label: "L embebido (m)"
    },
    L_proj: {
      value: a.state(0.05),
      min: 0.02,
      max: 0.15,
      step: 5e-3,
      label: "L proyecci\xF3n sobre placa (m, tuerca)"
    },
    B_ped: {
      value: a.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "B pedestal (m)"
    },
    H_ped: {
      value: a.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "H pedestal (m)"
    },
    h_ped: {
      value: a.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "h pedestal (m, profundidad)"
    },
    fc: {
      value: a.state(28e3),
      min: 17e3,
      max: 5e4,
      step: 1e3,
      label: "f'c concreto (kN/m\xB2)"
    },
    Pu: {
      value: a.state(300),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu compresi\xF3n (kN)"
    },
    Mu: {
      value: a.state(30),
      min: 0,
      max: 800,
      step: 5,
      label: "Mu momento (kN\xB7m)"
    },
    nx: {
      value: a.state(12),
      min: 6,
      max: 24,
      step: 2,
      label: "Mesh nx (placa)"
    },
    ny: {
      value: a.state(12),
      min: 6,
      max: 24,
      step: 2,
      label: "Mesh ny (placa)"
    }
  }, $t = a.state([]), Tt = a.state([]), Vt = a.state({}), At = a.state({}), Jt = a.state({}), Rt = a.state({}), Wt = a.state([]);
  a.derive(() => {
    const r = c.B.value.val, S = c.H.value.val, j = c.t_plate.value.val, N = c.d_col.value.val, y = c.bf_col.value.val, E = c.tf_col.value.val, qt = c.tw_col.value.val, D = c.L_col.value.val, f = c.d_bolt.value.val, $ = c.L_bolt.value.val, g = c.L_proj.value.val, Kt = c.B_ped.value.val, Qt = c.H_ped.value.val, T = c.h_ped.value.val;
    c.fc.value.val;
    const pt = c.sx.value.val, mt = c.sy.value.val, dt = Math.max(2, Math.round(c.nBoltsX.value.val)), ht = Math.max(2, Math.round(c.nBoltsY.value.val)), ft = c.Pu.value.val, vt = c.Mu.value.val, H = Math.round(c.nx.value.val), O = Math.round(c.ny.value.val), v = [], p = [], V = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
    function x(t, e, o) {
      return v.push([
        t,
        e,
        o
      ]), v.length - 1;
    }
    function k(t, e, o, s, n) {
      p.push([
        t,
        e,
        o,
        s
      ]);
      const l = p.length - 1;
      V.set(l, n), A.set(l, rt), J.set(l, ut), R.set(l, Dt), W.set(l, 0), q.set(l, 0), Z.set(l, 0), K.set(l, 0), Q.set(l, Ft);
    }
    function bt(t, e, o, s, n) {
      p.push([
        t,
        e
      ]);
      const l = p.length - 1;
      A.set(l, rt), Q.set(l, Ft), J.set(l, ut), R.set(l, Dt), W.set(l, o), q.set(l, s), Z.set(l, s), K.set(l, n), V.set(l, 0);
    }
    const Ut = r / H, te = S / O, M = [];
    for (let t = 0; t <= O; t++) {
      const e = [], o = -S / 2 + t * te;
      for (let s = 0; s <= H; s++) {
        const n = -r / 2 + s * Ut;
        e.push(x(n, o, 0));
      }
      M.push(e);
    }
    for (let t = 0; t < O; t++) for (let e = 0; e < H; e++) k(M[t][e], M[t][e + 1], M[t + 1][e + 1], M[t + 1][e], j);
    function C(t, e) {
      let o = -1, s = 1 / 0;
      for (let n = 0; n <= O; n++) for (let l = 0; l <= H; l++) {
        const I = M[n][l], [z, at, F] = v[I], L = Math.hypot(z - t, at - e);
        L < s && (s = L, o = I);
      }
      return o;
    }
    const i = 6, u = 4, B = 3, xt = u / 2, U = +N / 2 - E / 2, Y = -N / 2 + E / 2, m = [];
    for (let t = 0; t <= i; t++) {
      const e = t / i * D + 0, o = [];
      for (let s = 0; s <= u; s++) {
        const n = -y / 2 + s * y / u;
        t === 0 ? o.push(C(U, n)) : o.push(x(U, n, e));
      }
      m.push(o);
    }
    for (let t = 0; t < i; t++) for (let e = 0; e < u; e++) k(m[t][e], m[t][e + 1], m[t + 1][e + 1], m[t + 1][e], E);
    const d = [];
    for (let t = 0; t <= i; t++) {
      const e = t / i * D, o = [];
      for (let s = 0; s <= u; s++) {
        const n = -y / 2 + s * y / u;
        t === 0 ? o.push(C(Y, n)) : o.push(x(Y, n, e));
      }
      d.push(o);
    }
    for (let t = 0; t < i; t++) for (let e = 0; e < u; e++) k(d[t][e], d[t][e + 1], d[t + 1][e + 1], d[t + 1][e], E);
    const _ = [];
    for (let t = 0; t <= i; t++) {
      const e = t / i * D, o = [];
      for (let s = 0; s <= B; s++) {
        const n = Y + s * (U - Y) / B;
        s === 0 ? o.push(d[t][xt]) : s === B ? o.push(m[t][xt]) : t === 0 ? o.push(C(n, 0)) : o.push(x(n, 0, e));
      }
      _.push(o);
    }
    for (let t = 0; t < i; t++) for (let e = 0; e < B; e++) k(_[t][e], _[t][e + 1], _[t + 1][e + 1], _[t + 1][e], qt);
    const Mt = Math.PI * f * f / 4, tt = Math.PI * Math.pow(f, 4) / 64, _t = 2 * tt, wt = -r / 2 + pt, ee = +r / 2 - pt, yt = -S / 2 + mt, se = +S / 2 - mt, oe = (ee - wt) / (dt - 1), ne = (se - yt) / (ht - 1), et = [];
    for (let t = 0; t < dt; t++) {
      const e = wt + t * oe;
      for (let o = 0; o < ht; o++) {
        const s = yt + o * ne, n = Math.abs(e) < N / 2 + 5e-3, l = Math.abs(s) < y / 2 + 5e-3;
        n && l || et.push([
          e,
          s
        ]);
      }
    }
    const gt = [];
    for (const [t, e] of et) {
      const o = C(t, e), s = x(t, e, -$), n = x(t, e, g);
      gt.push(s), bt(s, o, Mt, tt, _t), bt(o, n, Mt, tt, _t);
    }
    const h = [], X = f * 1.5 / 2, Bt = f * 1.8 / 2, st = 0.02, ae = new lt({
      color: 16746496
    }), le = new lt({
      color: 16755200
    }), Pt = new ct({
      color: 16729088,
      linewidth: 3
    }), ce = new ct({
      color: 6706432,
      linewidth: 1
    });
    for (const [t, e] of et) {
      const o = $ + g, s = (-$ + g) / 2, n = new Ht(f / 2, f / 2, o, 12), l = new it(n, ae);
      l.position.set(t, e, s), l.rotation.x = Math.PI / 2, h.push(l);
      const I = new Ht(Bt, Bt, st, 6), z = new it(I, le);
      z.position.set(t, e, g - st / 2), z.rotation.x = Math.PI / 2, h.push(z);
      const at = new Ot(I), F = new kt(at, ce);
      F.position.set(t, e, g - st / 2), F.rotation.x = Math.PI / 2, h.push(F);
      const L = [];
      for (let b = 0; b <= 32; b++) {
        const G = b / 32 * 2 * Math.PI;
        L.push(new Ct(t + X * Math.cos(G), e + X * Math.sin(G), j / 2 + 5e-4));
      }
      h.push(new Yt(new Xt().setFromPoints(L), Pt));
      const Et = [];
      for (let b = 0; b <= 32; b++) {
        const G = b / 32 * 2 * Math.PI;
        Et.push(new Ct(t + X * Math.cos(G), e + X * Math.sin(G), -j / 2 - 5e-4));
      }
      h.push(new Yt(new Xt().setFromPoints(Et), Pt));
    }
    const It = new be(Kt, Qt, T), ie = new lt({
      color: 9079434,
      transparent: true,
      opacity: 0.35,
      side: xe
    }), zt = new it(It, ie);
    zt.position.set(0, 0, -T / 2), h.push(zt);
    const re = new Ot(It), Lt = new kt(re, new ct({
      color: 4473924,
      linewidth: 1
    }));
    Lt.position.set(0, 0, -T / 2), h.push(Lt), Wt.val = h;
    const Gt = /* @__PURE__ */ new Map(), ue = [
      true,
      true,
      true,
      true,
      true,
      true
    ];
    for (const t of gt) Gt.set(t, ue);
    const P = [];
    for (let t = 0; t <= u; t++) P.push(m[i][t]);
    for (let t = 0; t <= u; t++) P.push(d[i][t]);
    for (let t = 1; t < B; t++) P.push(_[i][t]);
    const w = /* @__PURE__ */ new Map(), pe = -ft / P.length;
    for (const t of P) w.set(t, [
      0,
      0,
      pe,
      0,
      0,
      0
    ]);
    const St = vt / N / (u + 1);
    for (let t = 0; t <= u; t++) {
      const e = m[i][t], o = d[i][t], s = w.get(e) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      w.set(e, [
        s[0],
        s[1],
        s[2] + St,
        s[3],
        s[4],
        s[5]
      ]);
      const n = w.get(o) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      w.set(o, [
        n[0],
        n[1],
        n[2] - St,
        n[3],
        n[4],
        n[5]
      ]);
    }
    const jt = {
      supports: Gt,
      loads: w
    }, ot = {
      elasticities: A,
      shearModuli: Q,
      areas: W,
      momentsOfInertiaZ: Z,
      momentsOfInertiaY: q,
      torsionalConstants: K,
      densities: R,
      poissonsRatios: J,
      thicknesses: V
    };
    let nt = {}, Nt = {};
    try {
      nt = de(v, p, jt, ot), Nt = me(v, p, ot, nt), console.log(`Placa base H: ${v.length} nodos, ${p.length} elementos | Pu=${ft}kN, Mu=${vt}kN\xB7m | t_plate=${(j * 1e3).toFixed(0)}mm`);
    } catch (t) {
      console.warn("Placa base deform/analyze:", (t == null ? void 0 : t.message) ?? t);
    }
    $t.val = v, Tt.val = p, Vt.val = jt, At.val = ot, Jt.val = nt, Rt.val = Nt;
  });
  const Zt = he({
    mesh: {
      nodes: $t,
      elements: Tt,
      nodeInputs: Vt,
      elementInputs: At,
      deformOutputs: Jt,
      analyzeOutputs: Rt
    },
    objects3D: Wt,
    settingsObj: {
      deformedShape: true,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 20,
      custom3D: true
    }
  });
  document.body.append(fe(c), Zt, ve({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-h/main.ts"
  }));
  setTimeout(() => {
    var _a;
    const r = Zt.__ctx;
    (r == null ? void 0 : r.camera) && (r == null ? void 0 : r.controls) && (r.camera.up.set(0, 0, 1), r.camera.position.set(2, -2, 1.2), r.controls.target.set(0, 0, 0.25), r.controls.update(), (_a = r.render) == null ? void 0 : _a.call(r));
  }, 800);
});
