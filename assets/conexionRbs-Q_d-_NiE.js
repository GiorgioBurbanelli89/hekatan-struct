import { a as mt } from "./analyze-ClLKGn9k.js";
import { d as dt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as ft, m as _t, i as bt } from "./menegottoPinto-B-C2cxus.js";
import { s as Ve, __tla as __tla_1 } from "./secantPlasticity-B1VMR3_i.js";
import { L, B as P, a as O, p as Xe, e as Te, c as K, V as k, b as _e, d as ut, E as ht, M as ee, T as Ge } from "./Text-Dh9LKuSL.js";
let At;
let __tla = Promise.all([
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
  function Mt(e) {
    var _a, _b;
    const n = e.nSteps ?? 10, c = e.maxIterPerStep ?? 8, m = e.softeningFactor, g = [], d = [], b = [], u = [], p = [];
    let M = -1, l = {}, a = {};
    for (let i = 1; i <= n; i++) {
      const f = i / n, y = e.buildLoads(f), v = {
        supports: e.supports,
        loads: y
      }, x = Ve({
        nodes: e.nodes,
        elements: e.elements,
        nodeInputs: v,
        elementInputs: e.elementInputs,
        Fy: e.Fy,
        maxIter: c,
        tol: 0.03,
        softeningFactor: m
      }), I = (_a = x.deformOutputs) == null ? void 0 : _a.deformations;
      let S = 0;
      if (I) {
        const $ = I.get(e.trackNode);
        $ && (S = Math.abs($[e.trackDof] ?? 0));
      }
      let s = 0;
      const h = (_b = x.analyzeOutputs) == null ? void 0 : _b.vonMises;
      if (h) for (const $ of h.values()) for (const A of $) {
        const Y = Math.abs(A);
        Y > s && (s = Y);
      }
      g.push(f), d.push(S), b.push(s), u.push(x.elementsYielded), p.push(x.converged), M < 0 && x.elementsYielded > 0 && (M = i - 1), l = x.deformOutputs, a = x.analyzeOutputs;
    }
    const w = d[0] > 1e-12 ? g[0] / d[0] : 0;
    return {
      lambdas: g,
      displacements: d,
      vonMisesMax: b,
      elementsYielded: u,
      firstYieldStep: M,
      finalDeformOutputs: l,
      finalAnalyzeOutputs: a,
      ultimateLoadFactor: g[g.length - 1] ?? 0,
      elasticStiffness: w,
      converged: p
    };
  }
  function xt(e) {
    const n = e.size ?? 1.5, c = [], m = e.lambdas.length;
    if (m === 0) return c;
    const g = Math.max(...e.displacements, 1e-9), d = Math.max(...e.lambdas, 1e-9), b = e.displacements.map((s) => s / g * n), u = e.lambdas.map((s) => s / d * n), [p, M, l] = e.center, a = (s, h) => new k(p + s, M, l + h), w = new L({
      color: 11184810
    }), i = new P().setFromPoints([
      a(0, 0),
      a(n * 1.05, 0)
    ]), f = new P().setFromPoints([
      a(0, 0),
      a(0, n * 1.05)
    ]);
    c.push(new O(i, w)), c.push(new O(f, w));
    const y = new L({
      color: 5592405,
      transparent: true,
      opacity: 0.4
    });
    for (let s = 1; s <= 5; s++) {
      const h = s / 5 * n, $ = new P().setFromPoints([
        a(0, h),
        a(n, h)
      ]);
      c.push(new O($, y));
    }
    const v = new L({
      color: 65484,
      linewidth: 3
    }), x = [
      a(0, 0)
    ];
    for (let s = 0; s < m; s++) x.push(a(b[s], u[s]));
    const I = new P().setFromPoints(x);
    c.push(new O(I, v));
    const S = new Xe(n * 0.015, 8, 6);
    for (let s = 0; s < m; s++) {
      const $ = s === e.firstYieldStep ? 16776960 : 65484, A = new Te({
        color: $
      }), Y = new K(S, A);
      Y.position.copy(a(b[s], u[s])), c.push(Y);
    }
    if (e.firstYieldStep >= 0) {
      const s = e.firstYieldStep, h = a(b[s], u[s]), $ = new L({
        color: 16711680
      }), A = n * 0.04, Y = new P().setFromPoints([
        h.clone().add(new k(-A, 0, -A)),
        h.clone().add(new k(+A, 0, +A))
      ]), re = new P().setFromPoints([
        h.clone().add(new k(-A, 0, +A)),
        h.clone().add(new k(+A, 0, -A))
      ]);
      c.push(new O(Y, $)), c.push(new O(re, $));
    }
    return c;
  }
  function gt(e) {
    const n = /* @__PURE__ */ new Map(), c = e.weld_tol ?? e.tf_beam * 1.5;
    for (let m = 0; m < e.elements.length; m++) {
      const g = e.elements[m];
      let d = 0, b = 0, u = 0;
      for (const h of g) d += e.nodes[h][0], b += e.nodes[h][1], u += e.nodes[h][2];
      d /= g.length, b /= g.length, u /= g.length;
      const p = Math.abs(d), M = Math.abs(b), l = Math.abs(u), a = Math.abs(d - (e.d_col / 2 - e.tf_col / 2)) < c, w = Math.abs(d - (-e.d_col / 2 + e.tf_col / 2)) < c, i = M < 1e-3 && p <= e.d_col / 2 && l <= e.d_col, f = d > e.x_col_face - c, y = f && Math.abs(u - (e.d_beam / 2 - e.tf_beam / 2)) < c, v = f && Math.abs(u - (-e.d_beam / 2 + e.tf_beam / 2)) < c, x = f && M < 1e-3 && l < e.d_beam / 2 - e.tf_beam / 2, I = f && d < e.x_col_face + c * 2, S = d >= e.x_rbs_start && d <= e.x_rbs_end;
      let s = "other";
      I && (y || v || x) ? s = "weld_zone" : y && S ? s = "RBS_top" : v && S ? s = "RBS_bot" : y ? s = "beam_flange_top" : v ? s = "beam_flange_bot" : x ? s = "beam_web" : a ? s = "col_flange_front" : w ? s = "col_flange_back" : i && (s = "col_web"), n.set(m, s);
    }
    return n;
  }
  const wt = {
    RBS_top: "RBS \u2014 pat\xEDn sup.",
    RBS_bot: "RBS \u2014 pat\xEDn inf.",
    beam_flange_top: "Viga \u2014 pat\xEDn sup.",
    beam_flange_bot: "Viga \u2014 pat\xEDn inf.",
    beam_web: "Viga \u2014 alma",
    col_flange_front: "Columna \u2014 pat\xEDn frontal",
    col_flange_back: "Columna \u2014 pat\xEDn trasero",
    col_web: "Columna \u2014 alma",
    weld_zone: "Zona soldadura",
    plate_body: "Cuerpo placa",
    plate_around_bolt: "Placa alrededor del perno",
    other: "Otros"
  };
  function pt(e, n, c) {
    const m = /* @__PURE__ */ new Map();
    for (const [d, b] of e.entries()) {
      const u = n.get(d);
      if (!u || u.length === 0) continue;
      let p = 0;
      for (const l of u) {
        const a = Math.abs(l);
        a > p && (p = a);
      }
      let M = m.get(b);
      M || (M = {
        vmValues: [],
        count: 0
      }, m.set(b, M)), M.vmValues.push(p), M.count++;
    }
    const g = [];
    for (const [d, b] of m.entries()) {
      if (b.vmValues.length === 0) continue;
      const u = Math.max(...b.vmValues), p = b.vmValues.reduce((w, i) => w + i, 0) / b.vmValues.length, M = u / c;
      let l = "green", a = "\u{1F7E2}";
      M > 1 ? (l = "red", a = "\u{1F534}") : M > 0.8 && (l = "yellow", a = "\u{1F7E1}"), g.push({
        zone: d,
        label: wt[d],
        nElements: b.count,
        maxVm: u,
        meanVm: p,
        ratio: M,
        status: l,
        statusIcon: a
      });
    }
    return g.sort((d, b) => b.ratio - d.ratio), g;
  }
  function yt(e) {
    return e.length > 0 ? e[0] : null;
  }
  function Ft(e) {
    return e ? e.ratio < 0.5 ? "Sin esfuerzo significativo (aument\xE1 carga)" : e.ratio < 0.8 ? "Rango el\xE1stico seguro" : e.ratio < 1 ? `Cerca del l\xEDmite \u2014 governing: ${e.label}` : e.ratio < 1.5 ? `\u26A0 Fluencia en: ${e.label}` : `\u2717 COLAPSO en: ${e.label} (\u03C3=${e.ratio.toFixed(1)}\xD7Fy)` : "\u2014";
  }
  function vt(e, n, c, m) {
    if (!m) return [];
    let g = 1 / 0, d = 1 / 0, b = 1 / 0, u = -1 / 0, p = -1 / 0, M = -1 / 0, l = 0;
    for (const [v, x] of c.entries()) {
      if (x !== m) continue;
      const I = n[v];
      for (const S of I) {
        const [s, h, $] = e[S];
        s < g && (g = s), h < d && (d = h), $ < b && (b = $), s > u && (u = s), h > p && (p = h), $ > M && (M = $);
      }
      l++;
    }
    if (l === 0) return [];
    const a = 0.015;
    g -= a, d -= a, b -= a, u += a, p += a, M += a;
    const w = new _e(u - g, p - d, M - b), i = new Te({
      color: 16711748,
      transparent: true,
      opacity: 0.15,
      wireframe: false
    }), f = new K(w, i);
    f.position.set((g + u) / 2, (d + p) / 2, (b + M) / 2);
    const y = new ut(new ht(w), new L({
      color: 16711748,
      linewidth: 2
    }));
    return y.position.copy(f.position), [
      f,
      y
    ];
  }
  function St(e) {
    const n = [], c = e.theta.length;
    if (c < 2) return n;
    const m = e.size, g = Math.max(...e.theta.map((s) => Math.abs(s)), 1e-9), d = Math.max(...e.M.map((s) => Math.abs(s)), 1e-9), b = e.theta.map((s) => s / g * (m / 2)), u = e.M.map((s) => s / d * (m / 2)), [p, M, l] = e.center, a = (s, h) => new k(p + s, M, l + h), w = new L({
      color: 6710886
    }), i = m / 2, f = [
      a(-i, -i),
      a(+i, -i),
      a(+i, +i),
      a(-i, +i),
      a(-i, -i)
    ];
    n.push(new O(new P().setFromPoints(f), w));
    const y = new L({
      color: 11184810
    });
    n.push(new O(new P().setFromPoints([
      a(-i, 0),
      a(+i, 0)
    ]), y)), n.push(new O(new P().setFromPoints([
      a(0, -i),
      a(0, +i)
    ]), y));
    const v = 0.8 * e.Mp / d * (m / 2);
    if (Math.abs(v) <= i) {
      const s = new L({
        color: 43520
      });
      n.push(new O(new P().setFromPoints([
        a(-i, +v),
        a(+i, +v)
      ]), s)), n.push(new O(new P().setFromPoints([
        a(-i, -v),
        a(+i, -v)
      ]), s));
    }
    const x = e.targetDrift / g * (m / 2);
    if (Math.abs(x) <= i) {
      const s = new L({
        color: 16746496,
        transparent: true,
        opacity: 0.6
      });
      n.push(new O(new P().setFromPoints([
        a(+x, -i),
        a(+x, +i)
      ]), s)), n.push(new O(new P().setFromPoints([
        a(-x, -i),
        a(-x, +i)
      ]), s));
    }
    const I = [];
    for (let s = 0; s < c; s++) I.push(a(b[s], u[s]));
    const S = new L({
      color: 65484
    });
    return n.push(new O(new P().setFromPoints(I), S)), n;
  }
  function zt(e) {
    const n = [], c = e.drifts.length;
    if (c < 2) return n;
    const m = e.size, g = Math.max(...e.drifts.map((f) => Math.abs(f)), 1e-9), d = e.drifts.map((f, y) => y / (c - 1) * m), b = e.drifts.map((f) => f / g * (m / 2)), [u, p, M] = e.center, l = (f, y) => new k(u + f, p, M + y), a = new L({
      color: 6710886
    }), w = m / 2;
    n.push(new O(new P().setFromPoints([
      l(0, -w),
      l(m, -w),
      l(m, +w),
      l(0, +w),
      l(0, -w)
    ]), a)), n.push(new O(new P().setFromPoints([
      l(0, 0),
      l(m, 0)
    ]), new L({
      color: 11184810
    })));
    const i = [];
    for (let f = 0; f < c; f++) i.push(l(d[f], b[f]));
    return n.push(new O(new P().setFromPoints(i), new L({
      color: 16755200
    }))), n;
  }
  At = {
    id: "conexion-rbs",
    name: "Conexi\xF3n RBS (AISC 358-22 \xB7 Protocolo K3)",
    category: "Conexiones",
    hasModal: false,
    defaultShellResult: "vonMises",
    availableShellResults: [
      "vonMises",
      "membraneXX",
      "membraneYY",
      "membraneXY",
      "bendingXX",
      "bendingYY",
      "displacementZ"
    ],
    params: {
      d_beam: {
        default: 0.6,
        min: 0.3,
        max: 1,
        step: 0.02,
        label: "d viga (m)",
        folder: "Viga"
      },
      bf_beam: {
        default: 0.22,
        min: 0.12,
        max: 0.4,
        step: 0.01,
        label: "bf pat\xEDn viga (m)",
        folder: "Viga"
      },
      tf_beam: {
        default: 0.02,
        min: 0.01,
        max: 0.04,
        step: 2e-3,
        label: "tf pat\xEDn viga (m)",
        folder: "Viga"
      },
      tw_beam: {
        default: 0.012,
        min: 6e-3,
        max: 0.025,
        step: 1e-3,
        label: "tw alma viga (m)",
        folder: "Viga"
      },
      L_beam: {
        default: 3.5,
        min: 2,
        max: 6,
        step: 0.1,
        label: "L viga (m)",
        folder: "Viga"
      },
      d_col: {
        default: 0.42,
        min: 0.3,
        max: 0.7,
        step: 0.02,
        label: "d columna (m)",
        folder: "Columna"
      },
      bf_col: {
        default: 0.4,
        min: 0.25,
        max: 0.6,
        step: 0.01,
        label: "bf pat\xEDn col (m)",
        folder: "Columna"
      },
      tf_col: {
        default: 0.025,
        min: 0.012,
        max: 0.05,
        step: 2e-3,
        label: "tf pat\xEDn col (m)",
        folder: "Columna"
      },
      tw_col: {
        default: 0.018,
        min: 0.01,
        max: 0.035,
        step: 1e-3,
        label: "tw alma col (m)",
        folder: "Columna"
      },
      a_rbs: {
        default: 0.625,
        min: 0.5,
        max: 0.75,
        step: 0.025,
        label: "a/bf",
        folder: "RBS"
      },
      b_rbs: {
        default: 0.75,
        min: 0.65,
        max: 0.85,
        step: 0.025,
        label: "b/d",
        folder: "RBS"
      },
      c_rbs: {
        default: 0.25,
        min: 0.2,
        max: 0.25,
        step: 0.025,
        label: "c/bf (reducci\xF3n)",
        folder: "RBS"
      },
      Fy: {
        default: 345e3,
        min: 25e4,
        max: 45e4,
        step: 5e3,
        label: "Fy (kN/m\xB2)",
        folder: "Material"
      },
      E_steel: {
        default: 2e8,
        min: 19e7,
        max: 21e7,
        step: 1e6,
        label: "E (kN/m\xB2)",
        folder: "Material"
      },
      b_hard: {
        default: 0.01,
        min: 5e-3,
        max: 0.05,
        step: 5e-3,
        label: "b strain hardening",
        folder: "Material"
      },
      weld_type: {
        default: 0,
        label: "Tipo soldadura",
        options: {
          "CJP (penetraci\xF3n completa)": 0,
          "PJP (parcial)": 1,
          Filete: 2
        },
        folder: "Soldadura"
      },
      electrode_Fexx: {
        default: 48e4,
        label: "Electrodo Fexx (kN/m\xB2)",
        options: {
          "E60XX (414 MPa)": 414e3,
          "E70XX (483 MPa)": 483e3,
          "E80XX (552 MPa)": 552e3
        },
        folder: "Soldadura"
      },
      weld_throat: {
        default: 8e-3,
        min: 4e-3,
        max: 0.02,
        step: 1e-3,
        label: "Garganta tw (m, filete/PJP)",
        folder: "Soldadura"
      },
      weld_access_hole: {
        default: 1,
        label: "Weld access hole",
        options: {
          No: 0,
          "S\xED (AWS D1.8)": 1
        },
        folder: "Soldadura"
      },
      classification: {
        default: 1,
        label: "Clasificaci\xF3n sismo",
        options: {
          "IMF (0.02 rad)": 0,
          "SMF (0.04 rad)": 1,
          "Extendido (0.06 rad)": 2
        },
        folder: "Ensayo K3"
      },
      story_h: {
        default: 3.66,
        min: 2.5,
        max: 5,
        step: 0.1,
        label: "h piso (m)",
        folder: "Ensayo K3"
      },
      steps_per_cycle: {
        default: 40,
        min: 20,
        max: 100,
        step: 10,
        label: "Steps/ciclo",
        folder: "Ensayo K3"
      },
      mesh_density: {
        default: 3,
        min: 1,
        max: 5,
        step: 1,
        label: "Densidad malla",
        folder: "Malla"
      },
      use_nonlinear: {
        default: 2,
        label: "Solver",
        options: {
          "Lineal (el\xE1stico)": 0,
          "No-lineal J2 secante": 1,
          "IDEA StatiCa (pushover)": 2
        },
        folder: "Solver"
      },
      nl_max_iter: {
        default: 10,
        min: 3,
        max: 25,
        step: 1,
        label: "Max iter NL",
        folder: "Solver"
      },
      load_factor: {
        default: 0.5,
        min: 0.02,
        max: 0.8,
        step: 0.02,
        label: "Factor carga (\xD7Mp)",
        folder: "Solver"
      },
      idea_steps: {
        default: 12,
        min: 4,
        max: 30,
        step: 1,
        label: "N pasos pushover",
        folder: "Solver"
      },
      animate_k3: {
        default: 0,
        label: "Animaci\xF3n K3",
        options: {
          Off: 0,
          "On (40 Hz)": 1,
          "On (lenta 10 Hz)": 2
        },
        folder: "Solver"
      },
      anim_amp: {
        default: 30,
        min: 5,
        max: 120,
        step: 5,
        label: "Amplificaci\xF3n visual",
        folder: "Solver"
      },
      colormap_mode: {
        default: 0,
        label: "Colormap",
        options: {
          "\u03C3vm por shell (FEM cl\xE1sico)": 0,
          "Utilization por componente (IDEA)": 1
        },
        folder: "Solver"
      }
    },
    build(e, n) {
      var _a;
      const c = [], m = [], g = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), i = e.E_steel / 2.6, f = 77, y = 1e-4, v = /* @__PURE__ */ new Map(), x = (t, o, r) => {
        const _ = Math.round(t / y), F = Math.round(o / y), z = Math.round(r / y), R = `${_},${F},${z}`;
        let C = v.get(R);
        return C === void 0 && (c.push([
          t,
          o,
          r
        ]), C = c.length - 1, v.set(R, C)), C;
      }, I = (t, o, r, _, F) => {
        m.push([
          t,
          o,
          r,
          _
        ]);
        const z = m.length - 1;
        g.set(z, F), d.set(z, e.E_steel), b.set(z, 0.3), u.set(z, f), p.set(z, 0), M.set(z, 0), l.set(z, 0), a.set(z, 0), w.set(z, i);
      }, S = e.story_h, s = Math.max(1, Math.round(e.mesh_density)), h = 6 * s, $ = 2 * s, A = s + 1, Y = +e.d_col / 2 - e.tf_col / 2, re = -e.d_col / 2 + e.tf_col / 2, we = re, We = Y, te = [];
      for (let t = 0; t <= h; t++) {
        const o = -S / 2 + t * S / h, r = [];
        for (let _ = 0; _ <= $; _++) {
          const F = -e.bf_col / 2 + _ * e.bf_col / $;
          r.push(x(Y, F, o));
        }
        te.push(r);
      }
      for (let t = 0; t < h; t++) for (let o = 0; o < $; o++) I(te[t][o], te[t][o + 1], te[t + 1][o + 1], te[t + 1][o], e.tf_col);
      const oe = [];
      for (let t = 0; t <= h; t++) {
        const o = -S / 2 + t * S / h, r = [];
        for (let _ = 0; _ <= $; _++) {
          const F = -e.bf_col / 2 + _ * e.bf_col / $;
          r.push(x(re, F, o));
        }
        oe.push(r);
      }
      for (let t = 0; t < h; t++) for (let o = 0; o < $; o++) I(oe[t][o], oe[t][o + 1], oe[t + 1][o + 1], oe[t + 1][o], e.tf_col);
      const ne = [];
      for (let t = 0; t <= h; t++) {
        const o = -S / 2 + t * S / h, r = [];
        for (let _ = 0; _ <= A; _++) {
          const F = we + (We - we) * (_ / A);
          r.push(x(F, 0, o));
        }
        ne.push(r);
      }
      for (let t = 0; t < h; t++) for (let o = 0; o < A; o++) I(ne[t][o], ne[t][o + 1], ne[t + 1][o + 1], ne[t + 1][o], e.tw_col);
      const D = e.d_col / 2, T = e.a_rbs * e.bf_beam, W = T + e.b_rbs * e.d_beam, pe = (T + W) / 2, ce = e.c_rbs * e.bf_beam, ye = e.b_rbs * e.d_beam, be = (4 * ce * ce + ye * ye) / (8 * ce), Fe = (t) => {
        if (t < T || t > W) return e.bf_beam;
        const o = t - pe, r = Math.sqrt(Math.max(0, be * be - o * o)) - (be - ce);
        return e.bf_beam - 2 * Math.max(0, r);
      }, J = [
        0
      ], ve = 2 * s;
      for (let t = 1; t <= ve; t++) J.push(T * t / ve);
      const Se = 8 * s + 4;
      for (let t = 1; t < Se; t++) J.push(T + (W - T) * t / Se);
      J.push(W);
      const ze = 5 * s;
      for (let t = 1; t <= ze; t++) J.push(W + (e.L_beam - W) * t / ze);
      J.sort((t, o) => t - o);
      const H = [];
      for (const t of J) (H.length === 0 || H[H.length - 1] < t - 1e-6) && H.push(t);
      const $e = +e.d_beam / 2 - e.tf_beam / 2, ue = -e.d_beam / 2 + e.tf_beam / 2, N = [], q = [], U = [], j = 2 * s, ie = 2 * s;
      for (const t of H) {
        const o = Fe(t), r = D + t, _ = [], F = [];
        for (let R = 0; R <= j; R++) {
          const C = -o / 2 + R * o / j;
          _.push(x(r, C, $e)), F.push(x(r, C, ue));
        }
        N.push(_), q.push(F);
        const z = [];
        for (let R = 0; R <= ie; R++) {
          const C = ue + ($e - ue) * (R / ie);
          z.push(x(r, 0, C));
        }
        U.push(z);
      }
      for (let t = 0; t < H.length - 1; t++) {
        for (let o = 0; o < j; o++) I(N[t][o], N[t][o + 1], N[t + 1][o + 1], N[t + 1][o], e.tf_beam), I(q[t][o], q[t][o + 1], q[t + 1][o + 1], q[t + 1][o], e.tf_beam);
        for (let o = 0; o < ie; o++) I(U[t][o], U[t][o + 1], U[t + 1][o + 1], U[t + 1][o], e.tw_beam);
      }
      const G = /* @__PURE__ */ new Map(), he = 0;
      for (let t = 0; t <= j; t++) G.set(N[he][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), G.set(q[he][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t <= ie; t++) G.set(U[he][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t < c.length; t++) {
        const o = c[t][2], r = Math.abs(c[t][0]) > e.d_col / 2 - 1e-4 - 1e-6 || Math.abs(c[t][1]) < 1e-6;
        Math.abs(Math.abs(o) - S / 2) < 1e-4 && r && c[t][0] <= e.d_col / 2 + 1e-4 && (G.has(t) || G.set(t, [
          true,
          true,
          true,
          true,
          true,
          true
        ]));
      }
      const je = e.bf_beam * (1 - 2 * e.c_rbs) * e.tf_beam * (e.d_beam - e.tf_beam), Ke = e.Fy * je, He = e.L_beam - e.a_rbs * e.bf_beam - e.b_rbs * e.d_beam / 2, Ie = e.load_factor * Ke / Math.max(He, 0.5), me = /* @__PURE__ */ new Map(), Me = H.length - 1, Ze = Ie / (j + 1);
      for (let t = 0; t <= j; t++) me.set(N[Me][t], [
        0,
        0,
        -Ze,
        0,
        0,
        0
      ]);
      n.nodes.val = c, n.elements.val = m, n.nodeInputs.val = {
        supports: G,
        loads: me
      }, n.elementInputs.val = {
        thicknesses: g,
        elasticities: d,
        poissonsRatios: b,
        densities: u,
        areas: p,
        momentsOfInertiaY: M,
        momentsOfInertiaZ: l,
        torsionalConstants: a,
        shearModuli: w
      };
      try {
        const t = Math.round(e.use_nonlinear);
        if (t === 2) {
          const o = N[Me][0], r = Mt({
            nodes: c,
            elements: m,
            supports: G,
            elementInputs: n.elementInputs.val,
            buildLoads: (R) => {
              const C = /* @__PURE__ */ new Map(), E = Ie * R / (j + 1);
              for (let X = 0; X <= j; X++) C.set(N[Me][X], [
                0,
                0,
                -E,
                0,
                0,
                0
              ]);
              return C;
            },
            Fy: e.Fy,
            trackNode: o,
            trackDof: 2,
            nSteps: Math.round(e.idea_steps),
            maxIterPerStep: Math.round(e.nl_max_iter),
            softeningFactor: 0.9
          });
          n.deformOutputs.val = r.finalDeformOutputs;
          const _ = r.finalAnalyzeOutputs;
          _.colorMapRanges = {
            ..._.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = _, n.__ideaInfo = r, n.__nlInfo = null;
          const F = [
            D + e.L_beam * 0.55,
            -e.bf_beam * 2.5,
            0
          ], z = xt({
            lambdas: r.lambdas,
            displacements: r.displacements,
            firstYieldStep: r.firstYieldStep,
            center: F,
            size: Math.max(e.L_beam * 0.4, 1),
            plane: "xz"
          });
          n.objects3D.val = [
            ...n.objects3D.val,
            ...z
          ], console.log(`[conexion-rbs IDEA] ${r.lambdas.length} pasos | \u03BB_max=${r.ultimateLoadFactor.toFixed(2)} | \u03B4_max=${(r.displacements[r.displacements.length - 1] * 1e3).toFixed(2)}mm | 1er yield en paso ${r.firstYieldStep + 1}/${r.lambdas.length} | k_el\xE1stica=${r.elasticStiffness.toFixed(1)}`);
        } else if (t === 1) {
          const o = Ve({
            nodes: c,
            elements: m,
            nodeInputs: {
              supports: G,
              loads: me
            },
            elementInputs: n.elementInputs.val,
            Fy: e.Fy,
            maxIter: Math.round(e.nl_max_iter),
            tol: 0.03,
            softeningFactor: 0.9
          });
          n.deformOutputs.val = o.deformOutputs;
          const r = o.analyzeOutputs;
          r.colorMapRanges = {
            ...r.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = r, n.__nlInfo = {
            iterations: o.iterations,
            converged: o.converged,
            elementsYielded: o.elementsYielded,
            maxRatio: o.maxRatio
          }, n.__ideaInfo = null;
        } else {
          const o = dt(c, m, {
            supports: G,
            loads: me
          }, n.elementInputs.val);
          n.deformOutputs.val = o;
          const r = mt(c, m, n.elementInputs.val, o);
          r.colorMapRanges = {
            ...r.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = r, n.__nlInfo = null, n.__ideaInfo = null;
        }
      } catch (t) {
        console.error("[conexion-rbs] solver error:", (t == null ? void 0 : t.message) || t, t), n.deformOutputs.val = {}, n.analyzeOutputs.val = {};
      }
      try {
        const t = gt({
          nodes: c,
          elements: m,
          x_col_face: D,
          d_col: e.d_col,
          bf_col: e.bf_col,
          tf_col: e.tf_col,
          d_beam: e.d_beam,
          bf_beam: e.bf_beam,
          tf_beam: e.tf_beam,
          x_rbs_start: D + T,
          x_rbs_end: D + W,
          weld_tol: e.tf_beam * 1.5
        }), o = (_a = n.analyzeOutputs.val) == null ? void 0 : _a.vonMises;
        if (o) {
          const r = pt(t, o, e.Fy), _ = yt(r), F = Ft(_);
          if (n.__componentRatios = r, n.__governingComponent = _, n.__failureMode = F, e.colormap_mode > 0.5) {
            const R = /* @__PURE__ */ new Map();
            for (const E of r) R.set(E.zone, E.ratio);
            const C = /* @__PURE__ */ new Map();
            for (let E = 0; E < m.length; E++) {
              const X = t.get(E), Z = X ? R.get(X) ?? 0 : 0, ct = m[E].length, it = new Array(ct).fill(Z * e.Fy);
              C.set(E, it);
            }
            n.analyzeOutputs.val.vonMises = C, n.analyzeOutputs.val.colorMapRanges = {
              ...n.analyzeOutputs.val.colorMapRanges,
              vonMises: [
                0,
                e.Fy
              ]
            };
          }
          const z = vt(c, m, t, (_ == null ? void 0 : _.zone) ?? null);
          n.objects3D.val = [
            ...n.objects3D.val,
            ...z
          ];
        }
      } catch (t) {
        console.warn("[conexion-rbs] component analysis skipped:", (t == null ? void 0 : t.message) || t);
      }
      const B = [], Re = D + pe, Ce = Math.min(e.bf_beam, e.d_beam) * 0.28, Je = new Xe(Ce, 20, 16), qe = new ee({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), Pe = new K(Je, qe);
      Pe.position.set(Re, 0, 0), B.push(Pe);
      const Ue = new Ge(Ce * 1.25, 0.015, 12, 32), Qe = new ee({
        color: 16755200,
        emissive: 4465152
      }), xe = new K(Ue, Qe);
      xe.position.set(Re, 0, 0), xe.rotation.y = Math.PI / 2, B.push(xe);
      const Oe = e.weld_type < 0.5 ? 16755200 : e.weld_type < 1.5 ? 16742144 : 16733440, Q = e.weld_type < 0.5 ? e.tf_beam * 0.95 : e.weld_type < 1.5 ? e.tf_beam * 0.6 : e.weld_throat, Ae = (t) => {
        const o = new _e(Q * 1.1, e.bf_beam, Q * 1.2), r = new ee({
          color: Oe,
          emissive: 3346688,
          metalness: 0.7,
          roughness: 0.45
        }), _ = new K(o, r);
        return _.position.set(D - Q / 2, 0, t), _;
      };
      B.push(Ae(+e.d_beam / 2 - e.tf_beam / 2)), B.push(Ae(-e.d_beam / 2 + e.tf_beam / 2));
      const et = e.d_beam - 2 * e.tf_beam - (e.weld_access_hole > 0.5 ? 2 * (e.tf_beam * 1.5) : 0), tt = new _e(Q * 1.1, Q * 1.2, et), ot = new ee({
        color: Oe,
        emissive: 3346688,
        metalness: 0.7,
        roughness: 0.45
      }), Le = new K(tt, ot);
      if (Le.position.set(D - Q / 2, 0, 0), B.push(Le), e.weld_access_hole > 0.5) {
        const t = e.tf_beam * 1.2;
        for (const o of [
          +e.d_beam / 2 - e.tf_beam - t,
          -e.d_beam / 2 + e.tf_beam + t
        ]) {
          const r = new Ge(t, 3e-3, 10, 24), _ = new ee({
            color: 3355443,
            metalness: 0.5,
            roughness: 0.6
          }), F = new K(r, _);
          F.position.set(D + 2e-3, 0, o), F.rotation.y = Math.PI / 2, B.push(F);
        }
      }
      if (e.weld_type < 0.5) {
        const t = new _e(0.025, e.bf_beam + 0.02, 0.01), o = new ee({
          color: 5588019,
          metalness: 0.3,
          roughness: 0.8
        });
        for (const r of [
          +e.d_beam / 2 - e.tf_beam / 2,
          -e.d_beam / 2 + e.tf_beam / 2
        ]) {
          const _ = new K(t, o), F = r > 0 ? -1 : 1;
          _.position.set(D - 0.015, 0, r + F * e.tf_beam * 0.7), B.push(_);
        }
      }
      const De = (t) => {
        const o = Fe(t), r = D + t, _ = [
          new k(r, -o / 2, +e.d_beam / 2 + 5e-3),
          new k(r, +o / 2, +e.d_beam / 2 + 5e-3),
          new k(r, +o / 2, -e.d_beam / 2 - 5e-3),
          new k(r, -o / 2, -e.d_beam / 2 - 5e-3),
          new k(r, -o / 2, +e.d_beam / 2 + 5e-3)
        ], F = new P().setFromPoints(_), z = new L({
          color: 16776960
        });
        return new O(F, z);
      };
      B.push(De(T)), B.push(De(W)), n.objects3D.val = B;
      const se = e.classification < 0.5 ? 0.02 : e.classification < 1.5 ? 0.04 : 0.06, nt = ft(e.story_h, Math.round(e.steps_per_cycle), se), st = e.b_rbs * e.d_beam, at = e.d_beam / 2 / st, Ee = {
        Fy: e.Fy,
        E: e.E_steel,
        b: e.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, ke = e.bf_beam * (1 - 2 * e.c_rbs), Ye = ke * e.tf_beam * (e.d_beam - e.tf_beam), de = e.Fy * Ye, V = [], ae = [];
      let ge = bt(Ee);
      for (const t of nt) {
        const o = t * at;
        ge = _t(o, ge, Ee), V.push(t), ae.push(ge.sigma * Ye);
      }
      n.__rbsHistory = {
        theta: V,
        M: ae,
        Mp: de,
        targetDrift: se,
        classification: e.classification < 0.5 ? "IMF" : e.classification < 1.5 ? "SMF" : "Extended"
      };
      const le = Math.max(e.L_beam * 0.6, 1.5), lt = St({
        theta: V,
        M: ae,
        Mp: de,
        targetDrift: se,
        center: [
          D + e.L_beam + le * 0.7,
          0,
          0
        ],
        size: le
      }), rt = zt({
        drifts: V,
        center: [
          D + e.L_beam * 0.5 - le / 2,
          0,
          -e.story_h / 2 - le * 0.7
        ],
        size: le
      });
      n.objects3D.val = [
        ...n.objects3D.val,
        ...lt,
        ...rt
      ];
      const Be = window.__rbsK3Anim;
      if (Be && (clearInterval(Be), window.__rbsK3Anim = null), e.animate_k3 > 0.5) {
        const t = e.animate_k3 < 1.5 ? 25 : 100, o = Math.max(...V.map((F) => Math.abs(F))), r = e.anim_amp;
        let _ = 0;
        setTimeout(() => {
          const z = (() => {
            const X = document.querySelectorAll("div");
            for (const Z of X) if (Z.__settings && Z.__ctx) return Z;
            return null;
          })();
          if (!z) return;
          const R = z.__settings, C = z.__ctx;
          if (!(R == null ? void 0 : R.deformScale) || !(C == null ? void 0 : C.render)) return;
          R.deformedShape && (R.deformedShape.val = true);
          const E = setInterval(() => {
            var _a2;
            const Z = (V[_] ?? 0) / o * r;
            R.deformScale.val = Z, (_a2 = C.render) == null ? void 0 : _a2.call(C), _ = (_ + 1) % V.length;
          }, t);
          window.__rbsK3Anim = E;
        }, 600);
      }
      let fe = 0;
      for (let t = 0; t < V.length; t++) Math.abs(V[t] - se) < 5e-3 && Math.abs(ae[t]) > Math.abs(fe) && (fe = ae[t]);
      const Ne = Math.abs(fe) / de;
      console.log(`[RBS AISC 358-22] Shells=${m.length}, Nodos=${c.length}
  bf_rbs=${ke.toFixed(3)}m, Mp_rbs=${de.toFixed(1)} kN\xB7m
  M@${(se * 100).toFixed(1)}%=${fe.toFixed(1)} kN\xB7m \xB7 Ratio=${Ne.toFixed(3)} \u2192 ${Ne >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(e, n) {
      const c = n.__rbsHistory;
      if (!c) return {
        Status: "\u2014"
      };
      const m = e.bf_beam * (1 - 2 * e.c_rbs), g = m * e.tf_beam * (e.d_beam - e.tf_beam), d = c.Mp, b = c.targetDrift;
      let u = 0;
      for (const l of c.M) Math.abs(l) > Math.abs(u) && (u = l);
      let p = 0;
      for (let l = 0; l < c.theta.length; l++) Math.abs(c.theta[l] - b) < 5e-3 && Math.abs(c.M[l]) > Math.abs(p) && (p = c.M[l]);
      const M = Math.abs(p) / d;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": c.classification,
        "Target drift \u03B8": `${(b * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(e.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(m * 1e3).toFixed(0)} mm (-${(e.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(e.a_rbs * e.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(e.b_rbs * e.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(e.c_rbs * e.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(g * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${d.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(u).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(p).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${M.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${M >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${c.classification}`,
        "Data points generados": `${c.theta.length}`,
        "\u2500\u2500 Soldadura AISC 360 \xA7J2 \u2500\u2500": "",
        ...(() => {
          const l = e.weld_type < 0.5 ? "CJP" : e.weld_type < 1.5 ? "PJP" : "Filete", a = e.weld_type < 0.5 ? e.tf_beam : e.weld_type < 1.5 ? e.tf_beam * 0.7 : e.weld_throat, w = e.electrode_Fexx, i = 0.75, f = e.bf_beam, y = a * f, v = e.weld_type < 0.5 ? e.Fy * e.bf_beam * e.tf_beam : 0.6 * w * y, x = i * v, S = 0.8 * d / Math.max(e.d_beam - e.tf_beam, 0.1), s = S / x, h = w < 44e4 ? "E60XX" : w < 52e4 ? "E70XX" : "E80XX";
          return {
            "Tipo soldadura": l,
            Electrodo: `${h} (Fexx=${(w / 1e3).toFixed(0)} MPa)`,
            "Garganta efectiva": `${(a * 1e3).toFixed(1)} mm`,
            "L cord\xF3n (pat\xEDn)": `${(f * 1e3).toFixed(0)} mm`,
            "Ae (pat\xEDn)": `${(y * 1e6).toFixed(0)} mm\xB2`,
            "Rn cord\xF3n (nominal)": `${v.toFixed(0)} kN`,
            "\u03C6Rn (dise\xF1o)": `${x.toFixed(0)} kN`,
            "F_demand en pat\xEDn (0.8Mp)": `${S.toFixed(0)} kN`,
            "Ratio F/\u03C6Rn": `${s.toFixed(3)} ${s <= 1 ? "\u2713" : "\u2717"}`,
            "Weld access hole": e.weld_access_hole > 0.5 ? "S\xED (AWS D1.8 \xA76.10)" : "No",
            "Dictamen soldadura": e.weld_type < 0.5 ? "CJP \u2713 Demand-critical (AISC 358 \xA73.7)" : s <= 1 ? "\u2713 OK" : "\u2717 REVISAR garganta / electrodo"
          };
        })(),
        ...(() => {
          const l = n.__componentRatios, a = n.__governingComponent, w = n.__failureMode;
          if (!l || l.length === 0) return {};
          const i = {
            "\u2500\u2500 Componentes (\u03C3vm/Fy) tipo IDEA StatiCa \u2500\u2500": ""
          };
          for (const f of l.slice(0, 8)) i[`${f.statusIcon} ${f.label}`] = `${(f.ratio * 100).toFixed(0)}% (${f.nElements} shells)`;
          return a && (i["\u{1F3AF} Componente gobernante"] = a.label), w && (i["\u{1F50E} Modo de falla estimado"] = w), i;
        })(),
        ...(() => {
          const l = n.__ideaInfo, a = n.__nlInfo;
          if (l) {
            const w = l.displacements[l.displacements.length - 1] ?? 0, i = l.lambdas[l.lambdas.length - 1] ?? 0, f = l.firstYieldStep >= 0 ? l.lambdas[l.firstYieldStep] : null, y = l.firstYieldStep >= 0 ? l.displacements[l.firstYieldStep] : null, v = Math.max(...l.vonMisesMax), x = l.elementsYielded[l.elementsYielded.length - 1] ?? 0, I = l.converged.every((S) => S);
            return {
              "\u2500\u2500 IDEA StatiCa (pushover incremental) \u2500\u2500": "",
              "Pasos ejecutados": `${l.lambdas.length}`,
              Convergencia: I ? "\u2713 todos los pasos" : "\u2717 alg\xFAn paso no convergi\xF3",
              "\u03BB inicio fluencia": f !== null ? `${(f * 100).toFixed(0)}% (paso ${l.firstYieldStep + 1})` : "no fluy\xF3",
              "\u03B4 @ 1er yield": y !== null ? `${(y * 1e3).toFixed(2)} mm` : "\u2014",
              "\u03BB final": `${(i * 100).toFixed(0)}%`,
              "\u03B4 final (tip)": `${(w * 1e3).toFixed(2)} mm`,
              "k el\xE1stica (\u03BB/\u03B4)": `${l.elasticStiffness.toFixed(2)} 1/m`,
              "\u03C3vm_max (todo el pushover)": `${(v / 1e3).toFixed(1)} MPa`,
              "\u03C3vm / Fy": `${(v / e.Fy).toFixed(2)}`,
              "Shells plastificados (final)": `${x}`,
              "Modo falla (estimado)": x > 0 ? "RBS (dogbone) \u2014 donde concentra plastificaci\xF3n" : "Rango el\xE1stico (aument\xE1 load_factor)"
            };
          }
          return a ? {
            "\u2500\u2500 Solver FEM shells (NO-LINEAL J2) \u2500\u2500": "",
            "Iteraciones NL": `${a.iterations}${a.converged ? " \u2713 convergi\xF3" : " \u2717 max-iter"}`,
            "Elementos plastificados": `${a.elementsYielded}`,
            "Max \u03C3/Fy (lineal inicial)": a.maxRatio.toFixed(2),
            Interpretaci\u00F3n: a.elementsYielded > 0 ? `${a.elementsYielded} shells fluyeron \u2192 redistribuci\xF3n` : "Rango el\xE1stico (sin plastificar)"
          } : {
            "\u2500\u2500 Solver FEM shells \u2500\u2500": "",
            Tipo: "Lineal el\xE1stico"
          };
        })()
      };
    }
  };
});
export {
  __tla,
  At as c
};
