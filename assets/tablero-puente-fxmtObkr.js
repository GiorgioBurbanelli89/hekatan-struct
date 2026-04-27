import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as Qt } from "./theme-2eEBQPmF.js";
import { M as Xt, b as j, c as z } from "./Text-QYN3x2IP.js";
import { a as $t } from "./analyze-BydHtRcI.js";
import { d as te, __tla as __tla_0 } from "./didacticCpp-B5f-GyHC.js";
import { g as ee, a as ht, e as _t } from "./getViewer-Dy0KV9h6.js";
import { e as ae } from "./makeDraggable-zx2br6Yh.js";
import { g as se } from "./getParameters-CIJBOwMB.js";
import { g as oe } from "./styles-Cjdl64P4.js";
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
  const et = 25e6, at = 0.2, vt = et / (2 * (1 + at)), bt = 24 / 9.80665, r = {
    L: {
      value: l.state(15),
      min: 5,
      max: 30,
      step: 0.5,
      label: "L luz (m)"
    },
    W: {
      value: l.state(6),
      min: 4,
      max: 12,
      step: 0.5,
      label: "W ancho (m)"
    },
    t_s: {
      value: l.state(0.2),
      min: 0.1,
      max: 0.4,
      step: 0.01,
      label: "t losa (m)"
    },
    s_b: {
      value: l.state(2),
      min: 1,
      max: 4,
      step: 0.1,
      label: "spacing vigas (m)"
    },
    bf: {
      value: l.state(0.4),
      min: 0.2,
      max: 0.8,
      step: 0.02,
      label: "bf alas (m)"
    },
    tf: {
      value: l.state(0.05),
      min: 0.02,
      max: 0.12,
      step: 0.01,
      label: "tf alas (m)"
    },
    hw: {
      value: l.state(0.8),
      min: 0.3,
      max: 1.5,
      step: 0.05,
      label: "hw alma (m)"
    },
    tw: {
      value: l.state(0.025),
      min: 0.01,
      max: 0.08,
      step: 5e-3,
      label: "tw alma (m)"
    },
    modo: {
      value: l.state(1),
      options: {
        "0 \u2014 Naive (doble-T completa)": 0,
        "1 \u2014 Solar (alma+pat\xEDn inf)": 1,
        "2 \u2014 Eccentric (offset rigid link)": 2
      },
      label: "Modo viga-losa"
    },
    q: {
      value: l.state(15),
      min: 1,
      max: 50,
      step: 0.5,
      label: "q losa (kN/m\xB2)"
    },
    nx: {
      value: l.state(20),
      min: 8,
      max: 40,
      step: 2,
      label: "Mesh nx (long)"
    },
    ny: {
      value: l.state(12),
      min: 4,
      max: 24,
      step: 2,
      label: "Mesh ny (transv)"
    }
  }, Mt = l.state([]), xt = l.state([]), gt = l.state({}), wt = l.state({}), yt = l.state({}), Bt = l.state({}), It = l.state([]), St = l.state({
    modo: "\u2014",
    M_max_kNm: 0,
    V_max_kN: 0,
    delta_mm: 0,
    vM_slab_max: 0,
    ratio_naive: 1,
    A_beam: 0,
    Iz_beam: 0
  });
  l.derive(() => {
    var _a, _b;
    const a = r.L.value.val, h = r.W.value.val, u = r.t_s.value.val, x = r.s_b.value.val, d = r.bf.value.val, n = r.tf.value.val, m = r.hw.value.val, v = r.tw.value.val, _ = Math.round(r.modo.value.val), lt = r.q.value.val, f = Math.round(r.nx.value.val), g = Math.round(r.ny.value.val), L = 2 * d * n + m * v, zt = 2 * n + m, it = 2 * (d * n * Math.pow(m / 2 + n / 2, 2)) + v * Math.pow(m, 3) / 12, At = (d * Math.pow(n, 3) + d * Math.pow(n, 3) + m * Math.pow(v, 3)) / 3, mt = d * n + m * v, ct = (d * n * (n / 2) + m * v * (n + m / 2)) / mt, Et = d * Math.pow(n, 3) / 12 + d * n * Math.pow(ct - n / 2, 2), Ot = v * Math.pow(m, 3) / 12 + m * v * Math.pow(n + m / 2 - ct, 2), Ft = Et + Ot, Rt = (d * Math.pow(n, 3) + m * Math.pow(v, 3)) / 3, Lt = _ === 1 ? mt : L, Pt = _ === 1 ? Ft : it, Tt = _ === 1 ? Rt : At, I = [], M = [], P = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map();
    function Vt(t, e, s) {
      return I.push([
        t,
        e,
        s
      ]), I.length - 1;
    }
    function Wt(t, e, s, i, c) {
      M.push([
        t,
        e,
        s,
        i
      ]);
      const o = M.length - 1;
      P.set(o, c), T.set(o, et), V.set(o, at), W.set(o, bt), q.set(o, vt), C.set(o, 0), J.set(o, 0), D.set(o, 0), G.set(o, 0);
    }
    function qt(t, e, s, i, c) {
      M.push([
        t,
        e
      ]);
      const o = M.length - 1;
      T.set(o, et), V.set(o, at), W.set(o, bt), q.set(o, vt), C.set(o, s), J.set(o, i), D.set(o, i), G.set(o, c), P.set(o, 0);
    }
    const rt = [
      h / 2 - x,
      h / 2,
      h / 2 + x
    ], U = a / f, Y = h / g, O = [];
    for (let t = 0; t <= g; t++) O.push(t * Y);
    const F = [];
    for (const t of rt) {
      let e = 0, s = 1 / 0;
      for (let i = 0; i <= g; i++) {
        const c = Math.abs(O[i] - t);
        c < s && (s = c, e = i);
      }
      O[e] = t, F.push(e);
    }
    const p = [];
    for (let t = 0; t <= g; t++) {
      const e = [];
      for (let s = 0; s <= f; s++) e.push(Vt(s * U, O[t], 0));
      p.push(e);
    }
    for (let t = 0; t < g; t++) for (let e = 0; e < f; e++) Wt(p[t][e], p[t][e + 1], p[t + 1][e + 1], p[t + 1][e], u);
    let Z = Pt, H = Lt;
    if (_ === 2) {
      const t = u / 2 + zt / 2;
      Z = it + L * t * t, H = L;
    }
    const K = [];
    for (const t of F) for (let e = 0; e < f; e++) {
      const s = p[t][e], i = p[t][e + 1];
      qt(s, i, H, Z, Tt), K.push(M.length - 1);
    }
    const Q = /* @__PURE__ */ new Map();
    for (const t of F) {
      const e = p[t][0], s = p[t][f];
      Q.set(e, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), Q.set(s, [
        false,
        true,
        true,
        false,
        false,
        false
      ]);
    }
    const dt = /* @__PURE__ */ new Map();
    for (let t = 0; t <= g; t++) for (let e = 0; e <= f; e++) {
      const s = t === 0 || t === g ? Y / 2 : Y, c = (e === 0 || e === f ? U / 2 : U) * s, o = -lt * c, y = p[t][e];
      dt.set(y, [
        0,
        0,
        o,
        0,
        0,
        0
      ]);
    }
    const ft = {
      supports: Q,
      loads: dt
    }, X = {
      elasticities: T,
      shearModuli: q,
      areas: C,
      momentsOfInertiaZ: D,
      momentsOfInertiaY: J,
      torsionalConstants: G,
      densities: W,
      poissonsRatios: V,
      thicknesses: P
    };
    let R = {}, $ = {};
    try {
      R = te(I, M, ft, X), $ = $t(I, M, X, R);
    } catch (t) {
      console.warn("tablero-puente:", (t == null ? void 0 : t.message) ?? t);
    }
    let w = 0, S = 0;
    const k = $, Ct = k == null ? void 0 : k.bendingsY, Dt = k == null ? void 0 : k.shearsZ, Jt = F[1], Gt = Math.round(f / 2), pt = f;
    for (let t = 0; t < f; t++) {
      const e = K[pt + t], s = Ct == null ? void 0 : Ct.get(e), i = Dt == null ? void 0 : Dt.get(e);
      if (s) for (const c of s) Math.abs(c) > w && (w = Math.abs(c));
      if (i) for (const c of i) Math.abs(c) > S && (S = Math.abs(c));
    }
    if (w === 0) {
      const t = k == null ? void 0 : k.bendingsZ, e = k == null ? void 0 : k.shearsY;
      for (let s = 0; s < f; s++) {
        const i = K[pt + s], c = t == null ? void 0 : t.get(i), o = e == null ? void 0 : e.get(i);
        if (c) for (const y of c) Math.abs(y) > w && (w = Math.abs(y));
        if (o) for (const y of o) Math.abs(y) > S && (S = Math.abs(y));
      }
    }
    const Ut = p[Jt][Gt], Yt = ((_b = (_a = R == null ? void 0 : R.deformations) == null ? void 0 : _a.get(Ut)) == null ? void 0 : _b[2]) ?? 0, Zt = Math.abs(Yt * 1e3);
    let tt = 0;
    const ut = k == null ? void 0 : k.vonMises;
    ut && ut.forEach((t) => t.forEach((e) => {
      e > tt && (tt = e);
    }));
    const Ht = lt * x * a * a / 8, Kt = w / Math.max(1e-3, Ht);
    St.val = {
      modo: [
        "0 \u2014 Naive (doble-T)",
        "1 \u2014 Solar (alma+pat\xEDn inf)",
        "2 \u2014 Eccentric (offset)"
      ][_],
      M_max_kNm: w,
      V_max_kN: S,
      delta_mm: Zt,
      vM_slab_max: tt,
      ratio_naive: Kt,
      A_beam: H,
      Iz_beam: Z
    };
    const B = [], N = new Xt({
      color: _ === 0 ? 16746496 : _ === 1 ? 52479 : 8978244,
      transparent: true,
      opacity: 0.7
    });
    for (const t of rt) if (_ === 1) {
      const e = new j(new z(a, v, m), N);
      e.position.set(a / 2, t, -u / 2 - m / 2), B.push(e);
      const s = new j(new z(a, d, n), N);
      s.position.set(a / 2, t, -u / 2 - m - n / 2), B.push(s);
    } else {
      const e = new j(new z(a, v, m), N);
      e.position.set(a / 2, t, -u / 2 - m / 2 - n), B.push(e);
      const s = new j(new z(a, d, n), N);
      s.position.set(a / 2, t, -u / 2 - n / 2), B.push(s);
      const i = new j(new z(a, d, n), N);
      i.position.set(a / 2, t, -u / 2 - m - n - n / 2), B.push(i);
    }
    Mt.val = I, xt.val = M, gt.val = ft, wt.val = X, yt.val = R, Bt.val = $, It.val = B;
  });
  const kt = ee({
    mesh: {
      nodes: Mt,
      elements: xt,
      nodeInputs: gt,
      elementInputs: wt,
      deformOutputs: yt,
      analyzeOutputs: Bt
    },
    objects3D: It,
    settingsObj: {
      deformedShape: false,
      shellResults: "vonMises",
      gridSize: 2,
      deformScale: 5,
      custom3D: true,
      loads: false,
      supports: true,
      showCotas: false,
      displayScale: 0.3
    }
  }), st = document.createElement("div");
  st.style.cssText = "position:fixed;top:8px;right:8px;width:340px;max-height:85vh;overflow-y:auto;z-index:9999;";
  const A = new Qt({
    title: "\u{1F309} Tablero puente \u2014 vigas+losa",
    container: st,
    expanded: true
  }), b = {
    modo: "\u2014",
    M_max_kNm: 0,
    V_max_kN: 0,
    delta_mm: 0,
    vM_slab_max: 0,
    ratio_naive: 1,
    A_beam: 0,
    Iz_beam: 0
  }, ot = A.addFolder({
    title: "\u2139\uFE0F Recomendaci\xF3n Solar"
  });
  ot.addBinding({
    msg: "Modo 1 (Solar) coincide con SAP2000"
  }, "msg", {
    readonly: true,
    view: "text",
    interval: 0
  });
  ot.addBinding({
    msg: "Modo 0 SOBRE-rigidiza por ~2x"
  }, "msg", {
    readonly: true,
    view: "text",
    interval: 0
  });
  ot.addBinding({
    msg: "Modo 2 (Eccentric) \u2248 Modo 1 si offset bien"
  }, "msg", {
    readonly: true,
    view: "text",
    interval: 0
  });
  const nt = A.addFolder({
    title: "\u{1F4D0} Secci\xF3n viga FRAME usada"
  });
  nt.addBinding(b, "modo", {
    readonly: true,
    label: "Modo activo",
    view: "text",
    interval: 0
  });
  nt.addBinding(b, "A_beam", {
    readonly: true,
    label: "A (m\xB2)",
    format: (a) => a.toFixed(5)
  });
  nt.addBinding(b, "Iz_beam", {
    readonly: true,
    label: "Iz (m\u2074)",
    format: (a) => a.toExponential(3)
  });
  const E = A.addFolder({
    title: "\u{1F4CA} Resultados an\xE1lisis"
  });
  E.addBinding(b, "M_max_kNm", {
    readonly: true,
    label: "M max viga (kN\xB7m)",
    format: (a) => a.toFixed(1)
  });
  E.addBinding(b, "V_max_kN", {
    readonly: true,
    label: "V max viga (kN)",
    format: (a) => a.toFixed(1)
  });
  E.addBinding(b, "delta_mm", {
    readonly: true,
    label: "\u03B4 midspan (mm)",
    format: (a) => a.toFixed(2)
  });
  E.addBinding(b, "vM_slab_max", {
    readonly: true,
    label: "\u03C3vM losa max (kN/m\xB2)",
    format: (a) => a.toExponential(3)
  });
  E.addBinding(b, "ratio_naive", {
    readonly: true,
    label: "M / (qL\xB2/8)",
    format: (a) => a.toFixed(3)
  });
  const Nt = A.addFolder({
    title: "Unidades",
    expanded: false
  }), jt = {
    stress: _t.val,
    disp: ht.val
  };
  Nt.addBinding(jt, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      ksi: "ksi"
    },
    label: "\u03C3"
  }).on("change", (a) => {
    _t.val = a.value;
  });
  Nt.addBinding(jt, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm"
    },
    label: "u"
  }).on("change", (a) => {
    ht.val = a.value;
  });
  document.body.append(st);
  l.derive(() => {
    Object.assign(b, St.val), A.refresh();
  });
  document.body.append(se(r), kt, oe({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/tablero-puente/main.ts"
  }));
  setTimeout(() => ae(), 200);
  setTimeout(() => {
    var _a;
    const a = kt.__ctx;
    if ((a == null ? void 0 : a.camera) && (a == null ? void 0 : a.controls)) {
      a.camera.up.set(0, 0, 1);
      const h = r.L.value.val, u = r.W.value.val, x = Math.max(h, u) * 1.8;
      a.camera.position.set(h / 2 + x, -x * 0.6, x * 0.4), a.controls.target.set(h / 2, u / 2, -0.5), a.controls.update(), (_a = a.render) == null ? void 0 : _a.call(a);
    }
  }, 800);
});
