import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as n } from "./theme-2eEBQPmF.js";
import { a as de } from "./analyze-BydHtRcI.js";
import { d as he, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { g as fe } from "./getViewer-CARv9b4z.js";
import { g as be } from "./getParameters-CIJBOwMB.js";
import { g as ve } from "./styles-Cjdl64P4.js";
import { e as lt, L as ct, C as Ht, b as it, E as kt, d as Ot, V as Yt, a as Ft, B as Xt, c as xe, D as Me } from "./Text-DyNVkyur.js";
import "./pureFunctionsAny.generated-DeJSBP3k.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const rt = 2e8, pt = 0.3, At = rt / (2 * (1 + pt)), Dt = 78, c = {
    B: {
      value: n.state(0.5),
      min: 0.25,
      max: 1.2,
      step: 0.02,
      label: "B placa (m, eje X)"
    },
    H: {
      value: n.state(0.5),
      min: 0.25,
      max: 1.2,
      step: 0.02,
      label: "H placa (m, eje Y)"
    },
    t_plate: {
      value: n.state(0.025),
      min: 0.012,
      max: 0.06,
      step: 2e-3,
      label: "Espesor placa (m)"
    },
    d_col: {
      value: n.state(0.3),
      min: 0.18,
      max: 0.5,
      step: 0.02,
      label: "d columna (m)"
    },
    bf_col: {
      value: n.state(0.25),
      min: 0.15,
      max: 0.4,
      step: 0.01,
      label: "bf columna (m)"
    },
    tf_col: {
      value: n.state(0.022),
      min: 0.012,
      max: 0.04,
      step: 2e-3,
      label: "tf pat\xEDn (m)"
    },
    tw_col: {
      value: n.state(0.014),
      min: 8e-3,
      max: 0.025,
      step: 1e-3,
      label: "tw alma (m)"
    },
    L_col: {
      value: n.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "L stub columna (m)"
    },
    nBoltsX: {
      value: n.state(2),
      min: 2,
      max: 6,
      step: 1,
      label: "Pernos en X (filas)"
    },
    nBoltsY: {
      value: n.state(2),
      min: 2,
      max: 6,
      step: 1,
      label: "Pernos en Y (columnas)"
    },
    sx: {
      value: n.state(0.07),
      min: 0.03,
      max: 0.25,
      step: 0.01,
      label: "sx \u2014 dist borde X (m)"
    },
    sy: {
      value: n.state(0.07),
      min: 0.03,
      max: 0.25,
      step: 0.01,
      label: "sy \u2014 dist borde Y (m)"
    },
    d_bolt: {
      value: n.state(0.024),
      min: 0.012,
      max: 0.05,
      step: 2e-3,
      label: "\xD8 perno (m)"
    },
    L_bolt: {
      value: n.state(0.3),
      min: 0.15,
      max: 0.6,
      step: 0.02,
      label: "L embebido (m)"
    },
    L_proj: {
      value: n.state(0.05),
      min: 0.02,
      max: 0.15,
      step: 5e-3,
      label: "L proyecci\xF3n sobre placa (m, tuerca)"
    },
    B_ped: {
      value: n.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "B pedestal (m)"
    },
    H_ped: {
      value: n.state(0.8),
      min: 0.4,
      max: 1.8,
      step: 0.05,
      label: "H pedestal (m)"
    },
    h_ped: {
      value: n.state(0.5),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "h pedestal (m, profundidad)"
    },
    fc: {
      value: n.state(28e3),
      min: 17e3,
      max: 5e4,
      step: 1e3,
      label: "f'c concreto (kN/m\xB2)"
    },
    Pu: {
      value: n.state(300),
      min: 0,
      max: 5e3,
      step: 25,
      label: "Pu compresi\xF3n (kN)"
    },
    Mu: {
      value: n.state(30),
      min: 0,
      max: 800,
      step: 5,
      label: "Mu momento (kN\xB7m)"
    },
    nx: {
      value: n.state(12),
      min: 6,
      max: 24,
      step: 2,
      label: "Mesh nx (placa)"
    },
    ny: {
      value: n.state(12),
      min: 6,
      max: 24,
      step: 2,
      label: "Mesh ny (placa)"
    }
  }, Tt = n.state([]), $t = n.state([]), Jt = n.state({}), Rt = n.state({}), Vt = n.state({}), Kt = n.state({}), Wt = n.state([]);
  n.derive(() => {
    const r = c.B.value.val, S = c.H.value.val, C = c.t_plate.value.val, G = c.d_col.value.val, _ = c.bf_col.value.val, N = c.tf_col.value.val, qt = c.tw_col.value.val, A = c.L_col.value.val, f = c.d_bolt.value.val, D = c.L_bolt.value.val, g = c.L_proj.value.val, Qt = c.B_ped.value.val, Ut = c.H_ped.value.val, T = c.h_ped.value.val;
    c.fc.value.val;
    const mt = c.sx.value.val, dt = c.sy.value.val, ht = Math.max(2, Math.round(c.nBoltsX.value.val)), ft = Math.max(2, Math.round(c.nBoltsY.value.val)), bt = c.Pu.value.val, vt = c.Mu.value.val, j = Math.round(c.nx.value.val), H = Math.round(c.ny.value.val), b = [], u = [], $ = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
    function x(t, e, o) {
      return b.push([
        t,
        e,
        o
      ]), b.length - 1;
    }
    function k(t, e, o, s, a) {
      u.push([
        t,
        e,
        o,
        s
      ]);
      const l = u.length - 1;
      $.set(l, a), J.set(l, rt), R.set(l, pt), V.set(l, Dt), K.set(l, 0), Z.set(l, 0), W.set(l, 0), q.set(l, 0), Q.set(l, At);
    }
    function xt(t, e, o, s, a) {
      u.push([
        t,
        e
      ]);
      const l = u.length - 1;
      J.set(l, rt), Q.set(l, At), R.set(l, pt), V.set(l, Dt), K.set(l, o), Z.set(l, s), W.set(l, s), q.set(l, a), $.set(l, 0);
    }
    const te = r / j, ee = S / H, M = [];
    for (let t = 0; t <= H; t++) {
      const e = [], o = -S / 2 + t * ee;
      for (let s = 0; s <= j; s++) {
        const a = -r / 2 + s * te;
        e.push(x(a, o, 0));
      }
      M.push(e);
    }
    for (let t = 0; t < H; t++) for (let e = 0; e < j; e++) k(M[t][e], M[t][e + 1], M[t + 1][e + 1], M[t + 1][e], C);
    function O(t, e) {
      let o = -1, s = 1 / 0;
      for (let a = 0; a <= H; a++) for (let l = 0; l <= j; l++) {
        const I = M[a][l], [z, nt, X] = b[I], L = Math.hypot(z - t, nt - e);
        L < s && (s = L, o = I);
      }
      return o;
    }
    const i = 6, p = 4, B = 3, Mt = p / 2, U = +G / 2 - N / 2, Y = -G / 2 + N / 2, m = [];
    for (let t = 0; t <= i; t++) {
      const e = t / i * A + 0, o = [];
      for (let s = 0; s <= p; s++) {
        const a = -_ / 2 + s * _ / p;
        t === 0 ? o.push(O(U, a)) : o.push(x(U, a, e));
      }
      m.push(o);
    }
    for (let t = 0; t < i; t++) for (let e = 0; e < p; e++) k(m[t][e], m[t][e + 1], m[t + 1][e + 1], m[t + 1][e], N);
    const d = [];
    for (let t = 0; t <= i; t++) {
      const e = t / i * A, o = [];
      for (let s = 0; s <= p; s++) {
        const a = -_ / 2 + s * _ / p;
        t === 0 ? o.push(O(Y, a)) : o.push(x(Y, a, e));
      }
      d.push(o);
    }
    for (let t = 0; t < i; t++) for (let e = 0; e < p; e++) k(d[t][e], d[t][e + 1], d[t + 1][e + 1], d[t + 1][e], N);
    const y = [];
    for (let t = 0; t <= i; t++) {
      const e = t / i * A, o = [];
      for (let s = 0; s <= B; s++) {
        const a = Y + s * (U - Y) / B;
        s === 0 ? o.push(d[t][Mt]) : s === B ? o.push(m[t][Mt]) : t === 0 ? o.push(O(a, 0)) : o.push(x(a, 0, e));
      }
      y.push(o);
    }
    for (let t = 0; t < i; t++) for (let e = 0; e < B; e++) k(y[t][e], y[t][e + 1], y[t + 1][e + 1], y[t + 1][e], qt);
    const yt = Math.PI * f * f / 4, tt = Math.PI * Math.pow(f, 4) / 64, wt = 2 * tt, _t = -r / 2 + mt, se = +r / 2 - mt, gt = -S / 2 + dt, oe = +S / 2 - dt, ae = (se - _t) / (ht - 1), ne = (oe - gt) / (ft - 1), et = [];
    for (let t = 0; t < ht; t++) {
      const e = _t + t * ae;
      for (let o = 0; o < ft; o++) {
        const s = gt + o * ne, a = Math.abs(e) < G / 2 + 5e-3, l = Math.abs(s) < _ / 2 + 5e-3;
        a && l || et.push([
          e,
          s
        ]);
      }
    }
    const Bt = [];
    for (const [t, e] of et) {
      const o = O(t, e), s = x(t, e, -D), a = x(t, e, g);
      Bt.push(s), xt(s, o, yt, tt, wt), xt(o, a, yt, tt, wt);
    }
    const h = [], F = f * 1.5 / 2, Pt = f * 1.8 / 2, st = 0.02, le = new lt({
      color: 16746496
    }), ce = new lt({
      color: 16755200
    }), It = new ct({
      color: 16729088,
      linewidth: 3
    }), ie = new ct({
      color: 6706432,
      linewidth: 1
    });
    for (const [t, e] of et) {
      const o = D + g, s = (-D + g) / 2, a = new Ht(f / 2, f / 2, o, 12), l = new it(a, le);
      l.position.set(t, e, s), l.rotation.x = Math.PI / 2, h.push(l);
      const I = new Ht(Pt, Pt, st, 6), z = new it(I, ce);
      z.position.set(t, e, g - st / 2), z.rotation.x = Math.PI / 2, h.push(z);
      const nt = new kt(I), X = new Ot(nt, ie);
      X.position.set(t, e, g - st / 2), X.rotation.x = Math.PI / 2, h.push(X);
      const L = [];
      for (let v = 0; v <= 32; v++) {
        const E = v / 32 * 2 * Math.PI;
        L.push(new Yt(t + F * Math.cos(E), e + F * Math.sin(E), C / 2 + 5e-4));
      }
      h.push(new Ft(new Xt().setFromPoints(L), It));
      const jt = [];
      for (let v = 0; v <= 32; v++) {
        const E = v / 32 * 2 * Math.PI;
        jt.push(new Yt(t + F * Math.cos(E), e + F * Math.sin(E), -C / 2 - 5e-4));
      }
      h.push(new Ft(new Xt().setFromPoints(jt), It));
    }
    const zt = new xe(Qt, Ut, T), re = new lt({
      color: 9079434,
      transparent: true,
      opacity: 0.35,
      side: Me
    }), Lt = new it(zt, re);
    Lt.position.set(0, 0, -T / 2), h.push(Lt);
    const pe = new kt(zt), Et = new Ot(pe, new ct({
      color: 4473924,
      linewidth: 1
    }));
    Et.position.set(0, 0, -T / 2), h.push(Et), Wt.val = h;
    const St = /* @__PURE__ */ new Map(), ue = [
      true,
      true,
      true,
      true,
      true,
      true
    ];
    for (const t of Bt) St.set(t, ue);
    const P = [];
    for (let t = 0; t <= p; t++) P.push(m[i][t]);
    for (let t = 0; t <= p; t++) P.push(d[i][t]);
    for (let t = 1; t < B; t++) P.push(y[i][t]);
    const w = /* @__PURE__ */ new Map(), me = -bt / P.length;
    for (const t of P) w.set(t, [
      0,
      0,
      me,
      0,
      0,
      0
    ]);
    const Ct = vt / G / (p + 1);
    for (let t = 0; t <= p; t++) {
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
        s[2] + Ct,
        s[3],
        s[4],
        s[5]
      ]);
      const a = w.get(o) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      w.set(o, [
        a[0],
        a[1],
        a[2] - Ct,
        a[3],
        a[4],
        a[5]
      ]);
    }
    const Gt = {
      supports: St,
      loads: w
    }, ot = {
      elasticities: J,
      shearModuli: Q,
      areas: K,
      momentsOfInertiaZ: W,
      momentsOfInertiaY: Z,
      torsionalConstants: q,
      densities: V,
      poissonsRatios: R,
      thicknesses: $
    };
    let at = {}, Nt = {};
    try {
      at = he(b, u, Gt, ot), Nt = de(b, u, ot, at), console.log(`Placa base H: ${b.length} nodos, ${u.length} elementos | Pu=${bt}kN, Mu=${vt}kN\xB7m | t_plate=${(C * 1e3).toFixed(0)}mm`);
    } catch (t) {
      console.warn("Placa base deform/analyze:", (t == null ? void 0 : t.message) ?? t);
    }
    Tt.val = b, $t.val = u, Jt.val = Gt, Rt.val = ot, Vt.val = at, Kt.val = Nt;
  });
  const Zt = fe({
    mesh: {
      nodes: Tt,
      elements: $t,
      nodeInputs: Jt,
      elementInputs: Rt,
      deformOutputs: Vt,
      analyzeOutputs: Kt
    },
    objects3D: Wt,
    settingsObj: {
      deformedShape: true,
      shellResults: "vonMises",
      gridSize: 1,
      deformScale: 20,
      custom3D: true
    }
  }), ut = document.createElement("div");
  ut.style.cssText = "position:fixed;top:8px;right:8px;background:rgba(20,20,20,0.92);color:#ddd;font:11px/1.4 ui-monospace,Menlo,monospace;padding:10px 14px;border-radius:6px;border:1px solid #444;z-index:9999;min-width:280px;max-width:360px;";
  ut.innerHTML = `
  <div style="font-weight:bold;color:#ffaa00;margin-bottom:4px;">\u{1F9EA} BENCHMARK \u2014 placa-base-h (CBFEM)</div>
  <ul style="margin:0;padding-left:16px;">
    <li style="color:#aaa">\u26A0 AISC 360-22 \xA7J8 (column base plate strength)</li>
    <li style="color:#aaa">\u26A0 ACI 318-22 \xA717 (anchor bolt design)</li>
    <li style="color:#7eff7e">\u2713 Soldadura alma-patines (nodos compartidos en y=0)</li>
    <li style="color:#7eff7e">\u2713 Pernos parametrizados nBoltsX \xD7 nBoltsY</li>
    <li style="color:#aaa">\u{1F4CA} IDEA StatiCa CBFEM (visual reference)</li>
  </ul>
`;
  document.body.append(ut);
  document.body.append(be(c), Zt, ve({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/placa-base-h/main.ts"
  }));
  setTimeout(() => {
    var _a;
    const r = Zt.__ctx;
    (r == null ? void 0 : r.camera) && (r == null ? void 0 : r.controls) && (r.camera.up.set(0, 0, 1), r.camera.position.set(2, -2, 1.2), r.controls.target.set(0, 0, 0.25), r.controls.update(), (_a = r.render) == null ? void 0 : _a.call(r));
  }, 800);
});
