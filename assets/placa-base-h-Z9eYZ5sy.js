import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l } from "./theme-2eEBQPmF.js";
import { a as ee } from "./analyze-BydHtRcI.js";
import { d as se, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as oe } from "./getViewer-CARv9b4z.js";
import { g as ae } from "./getParameters-CIJBOwMB.js";
import { g as ne } from "./styles-Cjdl64P4.js";
import { L as K, V as Q, a as U, B as tt, c as le, e as ce, D as ie, b as re, E as ue, d as pe } from "./Text-DyNVkyur.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const et = 2e8, st = 0.3, Lt = et / (2 * (1 + st)), St = 78, c = {
    B: {
      value: l.state(0.5),
      min: 0.25,
      max: 1.2,
      step: 0.02,
      label: "B placa (m, eje X)"
    },
    H: {
      value: l.state(0.5),
      min: 0.25,
      max: 1.2,
      step: 0.02,
      label: "H placa (m, eje Y)"
    },
    t_plate: {
      value: l.state(0.025),
      min: 0.012,
      max: 0.06,
      step: 2e-3,
      label: "Espesor placa (m)"
    },
    d_col: {
      value: l.state(0.3),
      min: 0.18,
      max: 0.5,
      step: 0.02,
      label: "d columna (m)"
    },
    bf_col: {
      value: l.state(0.25),
      min: 0.15,
      max: 0.4,
      step: 0.01,
      label: "bf columna (m)"
    },
    tf_col: {
      value: l.state(0.022),
      min: 0.012,
      max: 0.04,
      step: 2e-3,
      label: "tf pat\xEDn (m)"
    },
    tw_col: {
      value: l.state(0.014),
      min: 8e-3,
      max: 0.025,
      step: 1e-3,
      label: "tw alma (m)"
    },
    L_col: {
      value: l.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "L stub columna (m)"
    },
    nBoltsX: {
      value: l.state(2),
      min: 2,
      max: 6,
      step: 1,
      label: "Pernos en X (filas)"
    },
    nBoltsY: {
      value: l.state(2),
      min: 2,
      max: 6,
      step: 1,
      label: "Pernos en Y (columnas)"
    },
    sx: {
      value: l.state(0.07),
      min: 0.03,
      max: 0.25,
      step: 0.01,
      label: "sx \u2014 dist borde X (m)"
    },
    sy: {
      value: l.state(0.07),
      min: 0.03,
      max: 0.25,
      step: 0.01,
      label: "sy \u2014 dist borde Y (m)"
    },
    d_bolt: {
      value: l.state(0.024),
      min: 0.012,
      max: 0.05,
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
      max: 0.15,
      step: 5e-3,
      label: "L proyecci\xF3n sobre placa (m, tuerca)"
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
      label: "h pedestal (m, profundidad)"
    },
    fc: {
      value: l.state(28e3),
      min: 17e3,
      max: 5e4,
      step: 1e3,
      label: "f'c concreto (kN/m\xB2)"
    },
    Pu: {
      value: l.state(300),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu compresi\xF3n (kN)"
    },
    Mu: {
      value: l.state(30),
      min: 0,
      max: 800,
      step: 5,
      label: "Mu momento (kN\xB7m)"
    },
    nx: {
      value: l.state(12),
      min: 6,
      max: 24,
      step: 2,
      label: "Mesh nx (placa)"
    },
    ny: {
      value: l.state(12),
      min: 6,
      max: 24,
      step: 2,
      label: "Mesh ny (placa)"
    }
  }, jt = l.state([]), Gt = l.state([]), Ht = l.state({}), Nt = l.state({}), Ot = l.state({}), Et = l.state({}), kt = l.state([]);
  l.derive(() => {
    const r = c.B.value.val, P = c.H.value.val, ot = c.t_plate.value.val, I = c.d_col.value.val, w = c.bf_col.value.val, z = c.tf_col.value.val, Ft = c.tw_col.value.val, O = c.L_col.value.val, y = c.d_bolt.value.val, Xt = c.L_bolt.value.val, E = c.L_proj.value.val, Ct = c.B_ped.value.val, Dt = c.H_ped.value.val, k = c.h_ped.value.val;
    c.fc.value.val;
    const at = c.sx.value.val, nt = c.sy.value.val, lt = Math.max(2, Math.round(c.nBoltsX.value.val)), ct = Math.max(2, Math.round(c.nBoltsY.value.val)), it = c.Pu.value.val, rt = c.Mu.value.val, L = Math.round(c.nx.value.val), S = Math.round(c.ny.value.val), f = [], m = [], Y = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
    function v(t, e, o) {
      return f.push([
        t,
        e,
        o
      ]), f.length - 1;
    }
    function j(t, e, o, s, n) {
      m.push([
        t,
        e,
        o,
        s
      ]);
      const a = m.length - 1;
      Y.set(a, n), F.set(a, et), X.set(a, st), C.set(a, St), D.set(a, 0), T.set(a, 0), $.set(a, 0), V.set(a, 0), A.set(a, Lt);
    }
    function ut(t, e, o, s, n) {
      m.push([
        t,
        e
      ]);
      const a = m.length - 1;
      F.set(a, et), A.set(a, Lt), X.set(a, st), C.set(a, St), D.set(a, o), T.set(a, s), $.set(a, s), V.set(a, n), Y.set(a, 0);
    }
    const $t = r / L, Tt = P / S, b = [];
    for (let t = 0; t <= S; t++) {
      const e = [], o = -P / 2 + t * Tt;
      for (let s = 0; s <= L; s++) {
        const n = -r / 2 + s * $t;
        e.push(v(n, o, 0));
      }
      b.push(e);
    }
    for (let t = 0; t < S; t++) for (let e = 0; e < L; e++) j(b[t][e], b[t][e + 1], b[t + 1][e + 1], b[t + 1][e], ot);
    function G(t, e) {
      let o = -1, s = 1 / 0;
      for (let n = 0; n <= S; n++) for (let a = 0; a <= L; a++) {
        const p = b[n][a], [Ut, te, me] = f[p], zt = Math.hypot(Ut - t, te - e);
        zt < s && (s = zt, o = p);
      }
      return o;
    }
    const i = 6, u = 4, g = 3, pt = u / 2, J = +I / 2 - z / 2, H = -I / 2 + z / 2, d = [];
    for (let t = 0; t <= i; t++) {
      const e = t / i * O + 0, o = [];
      for (let s = 0; s <= u; s++) {
        const n = -w / 2 + s * w / u;
        t === 0 ? o.push(G(J, n)) : o.push(v(J, n, e));
      }
      d.push(o);
    }
    for (let t = 0; t < i; t++) for (let e = 0; e < u; e++) j(d[t][e], d[t][e + 1], d[t + 1][e + 1], d[t + 1][e], z);
    const h = [];
    for (let t = 0; t <= i; t++) {
      const e = t / i * O, o = [];
      for (let s = 0; s <= u; s++) {
        const n = -w / 2 + s * w / u;
        t === 0 ? o.push(G(H, n)) : o.push(v(H, n, e));
      }
      h.push(o);
    }
    for (let t = 0; t < i; t++) for (let e = 0; e < u; e++) j(h[t][e], h[t][e + 1], h[t + 1][e + 1], h[t + 1][e], z);
    const x = [];
    for (let t = 0; t <= i; t++) {
      const e = t / i * O, o = [];
      for (let s = 0; s <= g; s++) {
        const n = H + s * (J - H) / g;
        s === 0 ? o.push(h[t][pt]) : s === g ? o.push(d[t][pt]) : t === 0 ? o.push(G(n, 0)) : o.push(v(n, 0, e));
      }
      x.push(o);
    }
    for (let t = 0; t < i; t++) for (let e = 0; e < g; e++) j(x[t][e], x[t][e + 1], x[t + 1][e + 1], x[t + 1][e], Ft);
    const mt = Math.PI * y * y / 4, R = Math.PI * Math.pow(y, 4) / 64, dt = 2 * R, ht = -r / 2 + at, Vt = +r / 2 - at, ft = -P / 2 + nt, At = +P / 2 - nt, Jt = (Vt - ht) / (lt - 1), Rt = (At - ft) / (ct - 1), W = [];
    for (let t = 0; t < lt; t++) {
      const e = ht + t * Jt;
      for (let o = 0; o < ct; o++) {
        const s = ft + o * Rt, n = Math.abs(e) < I / 2 + 5e-3, a = Math.abs(s) < w / 2 + 5e-3;
        n && a || W.push([
          e,
          s
        ]);
      }
    }
    const vt = [];
    for (const [t, e] of W) {
      const o = G(t, e), s = v(t, e, -Xt), n = v(t, e, E);
      vt.push(s), ut(s, o, mt, R, dt), ut(o, n, mt, R, dt);
    }
    const M = [], bt = 16, Wt = new K({
      color: 16744448,
      linewidth: 2
    }), xt = new K({
      color: 16755200,
      linewidth: 2
    }), Mt = y * 1.5 / 2, N = y * 1.8 / 2;
    for (const [t, e] of W) {
      const o = [];
      for (let a = 0; a <= bt; a++) {
        const p = a / bt * 2 * Math.PI;
        o.push(new Q(t + Mt * Math.cos(p), e + Mt * Math.sin(p), 1e-3));
      }
      M.push(new U(new tt().setFromPoints(o), Wt));
      const s = [];
      for (let a = 0; a <= 6; a++) {
        const p = a / 6 * 2 * Math.PI;
        s.push(new Q(t + N * Math.cos(p), e + N * Math.sin(p), E));
      }
      M.push(new U(new tt().setFromPoints(s), xt));
      const n = [];
      for (let a = 0; a <= 6; a++) {
        const p = a / 6 * 2 * Math.PI;
        n.push(new Q(t + N * Math.cos(p), e + N * Math.sin(p), E - 0.012));
      }
      M.push(new U(new tt().setFromPoints(n), xt));
    }
    const _t = new le(Ct, Dt, k), Zt = new ce({
      color: 9079434,
      transparent: true,
      opacity: 0.35,
      side: ie
    }), wt = new re(_t, Zt);
    wt.position.set(0, 0, -k / 2), M.push(wt);
    const qt = new ue(_t), yt = new pe(qt, new K({
      color: 4473924,
      linewidth: 1
    }));
    yt.position.set(0, 0, -k / 2), M.push(yt), kt.val = M;
    const gt = /* @__PURE__ */ new Map(), Kt = [
      true,
      true,
      true,
      true,
      true,
      true
    ];
    for (const t of vt) gt.set(t, Kt);
    const B = [];
    for (let t = 0; t <= u; t++) B.push(d[i][t]);
    for (let t = 0; t <= u; t++) B.push(h[i][t]);
    for (let t = 1; t < g; t++) B.push(x[i][t]);
    const _ = /* @__PURE__ */ new Map(), Qt = -it / B.length;
    for (const t of B) _.set(t, [
      0,
      0,
      Qt,
      0,
      0,
      0
    ]);
    const Bt = rt / I / (u + 1);
    for (let t = 0; t <= u; t++) {
      const e = d[i][t], o = h[i][t], s = _.get(e) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      _.set(e, [
        s[0],
        s[1],
        s[2] + Bt,
        s[3],
        s[4],
        s[5]
      ]);
      const n = _.get(o) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      _.set(o, [
        n[0],
        n[1],
        n[2] - Bt,
        n[3],
        n[4],
        n[5]
      ]);
    }
    const Pt = {
      supports: gt,
      loads: _
    }, Z = {
      elasticities: F,
      shearModuli: A,
      areas: D,
      momentsOfInertiaZ: $,
      momentsOfInertiaY: T,
      torsionalConstants: V,
      densities: C,
      poissonsRatios: X,
      thicknesses: Y
    };
    let q = {}, It = {};
    try {
      q = se(f, m, Pt, Z), It = ee(f, m, Z, q), console.log(`Placa base H: ${f.length} nodos, ${m.length} elementos | Pu=${it}kN, Mu=${rt}kN\xB7m | t_plate=${(ot * 1e3).toFixed(0)}mm`);
    } catch (t) {
      console.warn("Placa base deform/analyze:", (t == null ? void 0 : t.message) ?? t);
    }
    jt.val = f, Gt.val = m, Ht.val = Pt, Nt.val = Z, Ot.val = q, Et.val = It;
  });
  const Yt = oe({
    mesh: {
      nodes: jt,
      elements: Gt,
      nodeInputs: Ht,
      elementInputs: Nt,
      deformOutputs: Ot,
      analyzeOutputs: Et
    },
    objects3D: kt,
    settingsObj: {
      deformedShape: true,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 20,
      custom3D: true
    }
  });
  document.body.append(ae(c), Yt, ne({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-h/main.ts"
  }));
  setTimeout(() => {
    var _a;
    const r = Yt.__ctx;
    (r == null ? void 0 : r.camera) && (r == null ? void 0 : r.controls) && (r.camera.up.set(0, 0, 1), r.camera.position.set(2, -2, 1.2), r.controls.target.set(0, 0, 0.25), r.controls.update(), (_a = r.render) == null ? void 0 : _a.call(r));
  }, 800);
});
