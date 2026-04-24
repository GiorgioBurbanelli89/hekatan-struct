import { a as it } from "./analyze-ClLKGn9k.js";
import { d as mt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as dt, m as ft, i as bt } from "./menegottoPinto-B-C2cxus.js";
import { s as Ge, __tla as __tla_1 } from "./secantPlasticity-B1VMR3_i.js";
import { L as O, B as I, a as C, p as Ne, e as Ve, c as W, V as A, b as fe, d as _t, E as ut, M as Q, T as Be } from "./Text-Dh9LKuSL.js";
let Lt;
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
  function ht(e) {
    var _a, _b;
    const n = e.nSteps ?? 10, r = e.maxIterPerStep ?? 8, m = e.softeningFactor, g = [], d = [], b = [], _ = [], p = [];
    let M = -1, l = {}, a = {};
    for (let i = 1; i <= n; i++) {
      const f = i / n, y = e.buildLoads(f), F = {
        supports: e.supports,
        loads: y
      }, x = Ge({
        nodes: e.nodes,
        elements: e.elements,
        nodeInputs: F,
        elementInputs: e.elementInputs,
        Fy: e.Fy,
        maxIter: r,
        tol: 0.03,
        softeningFactor: m
      }), $ = (_a = x.deformOutputs) == null ? void 0 : _a.deformations;
      let v = 0;
      if ($) {
        const z = $.get(e.trackNode);
        z && (v = Math.abs(z[e.trackDof] ?? 0));
      }
      let s = 0;
      const u = (_b = x.analyzeOutputs) == null ? void 0 : _b.vonMises;
      if (u) for (const z of u.values()) for (const P of z) {
        const Y = Math.abs(P);
        Y > s && (s = Y);
      }
      g.push(f), d.push(v), b.push(s), _.push(x.elementsYielded), p.push(x.converged), M < 0 && x.elementsYielded > 0 && (M = i - 1), l = x.deformOutputs, a = x.analyzeOutputs;
    }
    const w = d[0] > 1e-12 ? g[0] / d[0] : 0;
    return {
      lambdas: g,
      displacements: d,
      vonMisesMax: b,
      elementsYielded: _,
      firstYieldStep: M,
      finalDeformOutputs: l,
      finalAnalyzeOutputs: a,
      ultimateLoadFactor: g[g.length - 1] ?? 0,
      elasticStiffness: w,
      converged: p
    };
  }
  function Mt(e) {
    const n = e.size ?? 1.5, r = [], m = e.lambdas.length;
    if (m === 0) return r;
    const g = Math.max(...e.displacements, 1e-9), d = Math.max(...e.lambdas, 1e-9), b = e.displacements.map((s) => s / g * n), _ = e.lambdas.map((s) => s / d * n), [p, M, l] = e.center, a = (s, u) => new A(p + s, M, l + u), w = new O({
      color: 11184810
    }), i = new I().setFromPoints([
      a(0, 0),
      a(n * 1.05, 0)
    ]), f = new I().setFromPoints([
      a(0, 0),
      a(0, n * 1.05)
    ]);
    r.push(new C(i, w)), r.push(new C(f, w));
    const y = new O({
      color: 5592405,
      transparent: true,
      opacity: 0.4
    });
    for (let s = 1; s <= 5; s++) {
      const u = s / 5 * n, z = new I().setFromPoints([
        a(0, u),
        a(n, u)
      ]);
      r.push(new C(z, y));
    }
    const F = new O({
      color: 65484,
      linewidth: 3
    }), x = [
      a(0, 0)
    ];
    for (let s = 0; s < m; s++) x.push(a(b[s], _[s]));
    const $ = new I().setFromPoints(x);
    r.push(new C($, F));
    const v = new Ne(n * 0.015, 8, 6);
    for (let s = 0; s < m; s++) {
      const z = s === e.firstYieldStep ? 16776960 : 65484, P = new Ve({
        color: z
      }), Y = new W(v, P);
      Y.position.copy(a(b[s], _[s])), r.push(Y);
    }
    if (e.firstYieldStep >= 0) {
      const s = e.firstYieldStep, u = a(b[s], _[s]), z = new O({
        color: 16711680
      }), P = n * 0.04, Y = new I().setFromPoints([
        u.clone().add(new A(-P, 0, -P)),
        u.clone().add(new A(+P, 0, +P))
      ]), le = new I().setFromPoints([
        u.clone().add(new A(-P, 0, +P)),
        u.clone().add(new A(+P, 0, -P))
      ]);
      r.push(new C(Y, z)), r.push(new C(le, z));
    }
    return r;
  }
  function xt(e) {
    const n = /* @__PURE__ */ new Map(), r = e.weld_tol ?? e.tf_beam * 1.5;
    for (let m = 0; m < e.elements.length; m++) {
      const g = e.elements[m];
      let d = 0, b = 0, _ = 0;
      for (const u of g) d += e.nodes[u][0], b += e.nodes[u][1], _ += e.nodes[u][2];
      d /= g.length, b /= g.length, _ /= g.length;
      const p = Math.abs(d), M = Math.abs(b), l = Math.abs(_), a = Math.abs(d - (e.d_col / 2 - e.tf_col / 2)) < r, w = Math.abs(d - (-e.d_col / 2 + e.tf_col / 2)) < r, i = M < 1e-3 && p <= e.d_col / 2 && l <= e.d_col, f = d > e.x_col_face - r, y = f && Math.abs(_ - (e.d_beam / 2 - e.tf_beam / 2)) < r, F = f && Math.abs(_ - (-e.d_beam / 2 + e.tf_beam / 2)) < r, x = f && M < 1e-3 && l < e.d_beam / 2 - e.tf_beam / 2, $ = f && d < e.x_col_face + r * 2, v = d >= e.x_rbs_start && d <= e.x_rbs_end;
      let s = "other";
      $ && (y || F || x) ? s = "weld_zone" : y && v ? s = "RBS_top" : F && v ? s = "RBS_bot" : y ? s = "beam_flange_top" : F ? s = "beam_flange_bot" : x ? s = "beam_web" : a ? s = "col_flange_front" : w ? s = "col_flange_back" : i && (s = "col_web"), n.set(m, s);
    }
    return n;
  }
  const gt = {
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
  function wt(e, n, r) {
    const m = /* @__PURE__ */ new Map();
    for (const [d, b] of e.entries()) {
      const _ = n.get(d);
      if (!_ || _.length === 0) continue;
      let p = 0;
      for (const l of _) {
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
      const _ = Math.max(...b.vmValues), p = b.vmValues.reduce((w, i) => w + i, 0) / b.vmValues.length, M = _ / r;
      let l = "green", a = "\u{1F7E2}";
      M > 1 ? (l = "red", a = "\u{1F534}") : M > 0.8 && (l = "yellow", a = "\u{1F7E1}"), g.push({
        zone: d,
        label: gt[d],
        nElements: b.count,
        maxVm: _,
        meanVm: p,
        ratio: M,
        status: l,
        statusIcon: a
      });
    }
    return g.sort((d, b) => b.ratio - d.ratio), g;
  }
  function pt(e) {
    return e.length > 0 ? e[0] : null;
  }
  function yt(e) {
    return e ? e.ratio < 0.5 ? "Sin esfuerzo significativo (aument\xE1 carga)" : e.ratio < 0.8 ? "Rango el\xE1stico seguro" : e.ratio < 1 ? `Cerca del l\xEDmite \u2014 governing: ${e.label}` : e.ratio < 1.5 ? `\u26A0 Fluencia en: ${e.label}` : `\u2717 COLAPSO en: ${e.label} (\u03C3=${e.ratio.toFixed(1)}\xD7Fy)` : "\u2014";
  }
  function Ft(e, n, r, m) {
    if (!m) return [];
    let g = 1 / 0, d = 1 / 0, b = 1 / 0, _ = -1 / 0, p = -1 / 0, M = -1 / 0, l = 0;
    for (const [F, x] of r.entries()) {
      if (x !== m) continue;
      const $ = n[F];
      for (const v of $) {
        const [s, u, z] = e[v];
        s < g && (g = s), u < d && (d = u), z < b && (b = z), s > _ && (_ = s), u > p && (p = u), z > M && (M = z);
      }
      l++;
    }
    if (l === 0) return [];
    const a = 0.015;
    g -= a, d -= a, b -= a, _ += a, p += a, M += a;
    const w = new fe(_ - g, p - d, M - b), i = new Ve({
      color: 16711748,
      transparent: true,
      opacity: 0.15,
      wireframe: false
    }), f = new W(w, i);
    f.position.set((g + _) / 2, (d + p) / 2, (b + M) / 2);
    const y = new _t(new ut(w), new O({
      color: 16711748,
      linewidth: 2
    }));
    return y.position.copy(f.position), [
      f,
      y
    ];
  }
  function vt(e) {
    const n = [], r = e.theta.length;
    if (r < 2) return n;
    const m = e.size, g = Math.max(...e.theta.map((s) => Math.abs(s)), 1e-9), d = Math.max(...e.M.map((s) => Math.abs(s)), 1e-9), b = e.theta.map((s) => s / g * (m / 2)), _ = e.M.map((s) => s / d * (m / 2)), [p, M, l] = e.center, a = (s, u) => new A(p + s, M, l + u), w = new O({
      color: 6710886
    }), i = m / 2, f = [
      a(-i, -i),
      a(+i, -i),
      a(+i, +i),
      a(-i, +i),
      a(-i, -i)
    ];
    n.push(new C(new I().setFromPoints(f), w));
    const y = new O({
      color: 11184810
    });
    n.push(new C(new I().setFromPoints([
      a(-i, 0),
      a(+i, 0)
    ]), y)), n.push(new C(new I().setFromPoints([
      a(0, -i),
      a(0, +i)
    ]), y));
    const F = 0.8 * e.Mp / d * (m / 2);
    if (Math.abs(F) <= i) {
      const s = new O({
        color: 43520
      });
      n.push(new C(new I().setFromPoints([
        a(-i, +F),
        a(+i, +F)
      ]), s)), n.push(new C(new I().setFromPoints([
        a(-i, -F),
        a(+i, -F)
      ]), s));
    }
    const x = e.targetDrift / g * (m / 2);
    if (Math.abs(x) <= i) {
      const s = new O({
        color: 16746496,
        transparent: true,
        opacity: 0.6
      });
      n.push(new C(new I().setFromPoints([
        a(+x, -i),
        a(+x, +i)
      ]), s)), n.push(new C(new I().setFromPoints([
        a(-x, -i),
        a(-x, +i)
      ]), s));
    }
    const $ = [];
    for (let s = 0; s < r; s++) $.push(a(b[s], _[s]));
    const v = new O({
      color: 65484
    });
    return n.push(new C(new I().setFromPoints($), v)), n;
  }
  function St(e) {
    const n = [], r = e.drifts.length;
    if (r < 2) return n;
    const m = e.size, g = Math.max(...e.drifts.map((f) => Math.abs(f)), 1e-9), d = e.drifts.map((f, y) => y / (r - 1) * m), b = e.drifts.map((f) => f / g * (m / 2)), [_, p, M] = e.center, l = (f, y) => new A(_ + f, p, M + y), a = new O({
      color: 6710886
    }), w = m / 2;
    n.push(new C(new I().setFromPoints([
      l(0, -w),
      l(m, -w),
      l(m, +w),
      l(0, +w),
      l(0, -w)
    ]), a)), n.push(new C(new I().setFromPoints([
      l(0, 0),
      l(m, 0)
    ]), new O({
      color: 11184810
    })));
    const i = [];
    for (let f = 0; f < r; f++) i.push(l(d[f], b[f]));
    return n.push(new C(new I().setFromPoints(i), new O({
      color: 16755200
    }))), n;
  }
  Lt = {
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
      colormap_mode: {
        default: 1,
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
      const r = [], m = [], g = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), i = e.E_steel / 2.6, f = 77, y = 1e-4, F = /* @__PURE__ */ new Map(), x = (t, o, c) => {
        const h = Math.round(t / y), S = Math.round(o / y), R = Math.round(c / y), L = `${h},${S},${R}`;
        let D = F.get(L);
        return D === void 0 && (r.push([
          t,
          o,
          c
        ]), D = r.length - 1, F.set(L, D)), D;
      }, $ = (t, o, c, h, S) => {
        m.push([
          t,
          o,
          c,
          h
        ]);
        const R = m.length - 1;
        g.set(R, S), d.set(R, e.E_steel), b.set(R, 0.3), _.set(R, f), p.set(R, 0), M.set(R, 0), l.set(R, 0), a.set(R, 0), w.set(R, i);
      }, v = e.story_h, s = Math.max(1, Math.round(e.mesh_density)), u = 6 * s, z = 2 * s, P = s + 1, Y = +e.d_col / 2 - e.tf_col / 2, le = -e.d_col / 2 + e.tf_col / 2, ge = le, Xe = Y, ee = [];
      for (let t = 0; t <= u; t++) {
        const o = -v / 2 + t * v / u, c = [];
        for (let h = 0; h <= z; h++) {
          const S = -e.bf_col / 2 + h * e.bf_col / z;
          c.push(x(Y, S, o));
        }
        ee.push(c);
      }
      for (let t = 0; t < u; t++) for (let o = 0; o < z; o++) $(ee[t][o], ee[t][o + 1], ee[t + 1][o + 1], ee[t + 1][o], e.tf_col);
      const te = [];
      for (let t = 0; t <= u; t++) {
        const o = -v / 2 + t * v / u, c = [];
        for (let h = 0; h <= z; h++) {
          const S = -e.bf_col / 2 + h * e.bf_col / z;
          c.push(x(le, S, o));
        }
        te.push(c);
      }
      for (let t = 0; t < u; t++) for (let o = 0; o < z; o++) $(te[t][o], te[t][o + 1], te[t + 1][o + 1], te[t + 1][o], e.tf_col);
      const oe = [];
      for (let t = 0; t <= u; t++) {
        const o = -v / 2 + t * v / u, c = [];
        for (let h = 0; h <= P; h++) {
          const S = ge + (Xe - ge) * (h / P);
          c.push(x(S, 0, o));
        }
        oe.push(c);
      }
      for (let t = 0; t < u; t++) for (let o = 0; o < P; o++) $(oe[t][o], oe[t][o + 1], oe[t + 1][o + 1], oe[t + 1][o], e.tw_col);
      const E = e.d_col / 2, V = e.a_rbs * e.bf_beam, X = V + e.b_rbs * e.d_beam, we = (V + X) / 2, ce = e.c_rbs * e.bf_beam, pe = e.b_rbs * e.d_beam, be = (4 * ce * ce + pe * pe) / (8 * ce), ye = (t) => {
        if (t < V || t > X) return e.bf_beam;
        const o = t - we, c = Math.sqrt(Math.max(0, be * be - o * o)) - (be - ce);
        return e.bf_beam - 2 * Math.max(0, c);
      }, Z = [
        0
      ], Fe = 2 * s;
      for (let t = 1; t <= Fe; t++) Z.push(V * t / Fe);
      const ve = 8 * s + 4;
      for (let t = 1; t < ve; t++) Z.push(V + (X - V) * t / ve);
      Z.push(X);
      const Se = 5 * s;
      for (let t = 1; t <= Se; t++) Z.push(X + (e.L_beam - X) * t / Se);
      Z.sort((t, o) => t - o);
      const j = [];
      for (const t of Z) (j.length === 0 || j[j.length - 1] < t - 1e-6) && j.push(t);
      const ze = +e.d_beam / 2 - e.tf_beam / 2, _e = -e.d_beam / 2 + e.tf_beam / 2, G = [], J = [], H = [], T = 2 * s, re = 2 * s;
      for (const t of j) {
        const o = ye(t), c = E + t, h = [], S = [];
        for (let L = 0; L <= T; L++) {
          const D = -o / 2 + L * o / T;
          h.push(x(c, D, ze)), S.push(x(c, D, _e));
        }
        G.push(h), J.push(S);
        const R = [];
        for (let L = 0; L <= re; L++) {
          const D = _e + (ze - _e) * (L / re);
          R.push(x(c, 0, D));
        }
        H.push(R);
      }
      for (let t = 0; t < j.length - 1; t++) {
        for (let o = 0; o < T; o++) $(G[t][o], G[t][o + 1], G[t + 1][o + 1], G[t + 1][o], e.tf_beam), $(J[t][o], J[t][o + 1], J[t + 1][o + 1], J[t + 1][o], e.tf_beam);
        for (let o = 0; o < re; o++) $(H[t][o], H[t][o + 1], H[t + 1][o + 1], H[t + 1][o], e.tw_beam);
      }
      const N = /* @__PURE__ */ new Map(), ue = 0;
      for (let t = 0; t <= T; t++) N.set(G[ue][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), N.set(J[ue][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t <= re; t++) N.set(H[ue][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t < r.length; t++) {
        const o = r[t][2], c = Math.abs(r[t][0]) > e.d_col / 2 - 1e-4 - 1e-6 || Math.abs(r[t][1]) < 1e-6;
        Math.abs(Math.abs(o) - v / 2) < 1e-4 && c && r[t][0] <= e.d_col / 2 + 1e-4 && (N.has(t) || N.set(t, [
          true,
          true,
          true,
          true,
          true,
          true
        ]));
      }
      const Te = e.bf_beam * (1 - 2 * e.c_rbs) * e.tf_beam * (e.d_beam - e.tf_beam), We = e.Fy * Te, je = e.L_beam - e.a_rbs * e.bf_beam - e.b_rbs * e.d_beam / 2, $e = e.load_factor * We / Math.max(je, 0.5), ie = /* @__PURE__ */ new Map(), he = j.length - 1, Ze = $e / (T + 1);
      for (let t = 0; t <= T; t++) ie.set(G[he][t], [
        0,
        0,
        -Ze,
        0,
        0,
        0
      ]);
      n.nodes.val = r, n.elements.val = m, n.nodeInputs.val = {
        supports: N,
        loads: ie
      }, n.elementInputs.val = {
        thicknesses: g,
        elasticities: d,
        poissonsRatios: b,
        densities: _,
        areas: p,
        momentsOfInertiaY: M,
        momentsOfInertiaZ: l,
        torsionalConstants: a,
        shearModuli: w
      };
      try {
        const t = Math.round(e.use_nonlinear);
        if (t === 2) {
          const o = G[he][0], c = ht({
            nodes: r,
            elements: m,
            supports: N,
            elementInputs: n.elementInputs.val,
            buildLoads: (L) => {
              const D = /* @__PURE__ */ new Map(), B = $e * L / (T + 1);
              for (let U = 0; U <= T; U++) D.set(G[he][U], [
                0,
                0,
                -B,
                0,
                0,
                0
              ]);
              return D;
            },
            Fy: e.Fy,
            trackNode: o,
            trackDof: 2,
            nSteps: Math.round(e.idea_steps),
            maxIterPerStep: Math.round(e.nl_max_iter),
            softeningFactor: 0.9
          });
          n.deformOutputs.val = c.finalDeformOutputs;
          const h = c.finalAnalyzeOutputs;
          h.colorMapRanges = {
            ...h.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = h, n.__ideaInfo = c, n.__nlInfo = null;
          const S = [
            E + e.L_beam * 0.55,
            -e.bf_beam * 2.5,
            0
          ], R = Mt({
            lambdas: c.lambdas,
            displacements: c.displacements,
            firstYieldStep: c.firstYieldStep,
            center: S,
            size: Math.max(e.L_beam * 0.4, 1),
            plane: "xz"
          });
          n.objects3D.val = [
            ...n.objects3D.val,
            ...R
          ], console.log(`[conexion-rbs IDEA] ${c.lambdas.length} pasos | \u03BB_max=${c.ultimateLoadFactor.toFixed(2)} | \u03B4_max=${(c.displacements[c.displacements.length - 1] * 1e3).toFixed(2)}mm | 1er yield en paso ${c.firstYieldStep + 1}/${c.lambdas.length} | k_el\xE1stica=${c.elasticStiffness.toFixed(1)}`);
        } else if (t === 1) {
          const o = Ge({
            nodes: r,
            elements: m,
            nodeInputs: {
              supports: N,
              loads: ie
            },
            elementInputs: n.elementInputs.val,
            Fy: e.Fy,
            maxIter: Math.round(e.nl_max_iter),
            tol: 0.03,
            softeningFactor: 0.9
          });
          n.deformOutputs.val = o.deformOutputs;
          const c = o.analyzeOutputs;
          c.colorMapRanges = {
            ...c.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = c, n.__nlInfo = {
            iterations: o.iterations,
            converged: o.converged,
            elementsYielded: o.elementsYielded,
            maxRatio: o.maxRatio
          }, n.__ideaInfo = null;
        } else {
          const o = mt(r, m, {
            supports: N,
            loads: ie
          }, n.elementInputs.val);
          n.deformOutputs.val = o;
          const c = it(r, m, n.elementInputs.val, o);
          c.colorMapRanges = {
            ...c.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = c, n.__nlInfo = null, n.__ideaInfo = null;
        }
      } catch (t) {
        console.error("[conexion-rbs] solver error:", (t == null ? void 0 : t.message) || t, t), n.deformOutputs.val = {}, n.analyzeOutputs.val = {};
      }
      try {
        const t = xt({
          nodes: r,
          elements: m,
          x_col_face: E,
          d_col: e.d_col,
          bf_col: e.bf_col,
          tf_col: e.tf_col,
          d_beam: e.d_beam,
          bf_beam: e.bf_beam,
          tf_beam: e.tf_beam,
          x_rbs_start: E + V,
          x_rbs_end: E + X,
          weld_tol: e.tf_beam * 1.5
        }), o = (_a = n.analyzeOutputs.val) == null ? void 0 : _a.vonMises;
        if (o) {
          const c = wt(t, o, e.Fy), h = pt(c), S = yt(h);
          if (n.__componentRatios = c, n.__governingComponent = h, n.__failureMode = S, e.colormap_mode > 0.5) {
            const L = /* @__PURE__ */ new Map();
            for (const B of c) L.set(B.zone, B.ratio);
            const D = /* @__PURE__ */ new Map();
            for (let B = 0; B < m.length; B++) {
              const U = t.get(B), lt = U ? L.get(U) ?? 0 : 0, ct = m[B].length, rt = new Array(ct).fill(lt * e.Fy);
              D.set(B, rt);
            }
            n.analyzeOutputs.val.vonMises = D, n.analyzeOutputs.val.colorMapRanges = {
              ...n.analyzeOutputs.val.colorMapRanges,
              vonMises: [
                0,
                e.Fy
              ]
            };
          }
          const R = Ft(r, m, t, (h == null ? void 0 : h.zone) ?? null);
          n.objects3D.val = [
            ...n.objects3D.val,
            ...R
          ];
        }
      } catch (t) {
        console.warn("[conexion-rbs] component analysis skipped:", (t == null ? void 0 : t.message) || t);
      }
      const k = [], Re = E + we, Ie = Math.min(e.bf_beam, e.d_beam) * 0.28, Je = new Ne(Ie, 20, 16), He = new Q({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), Ce = new W(Je, He);
      Ce.position.set(Re, 0, 0), k.push(Ce);
      const Ke = new Be(Ie * 1.25, 0.015, 12, 32), qe = new Q({
        color: 16755200,
        emissive: 4465152
      }), Me = new W(Ke, qe);
      Me.position.set(Re, 0, 0), Me.rotation.y = Math.PI / 2, k.push(Me);
      const Pe = e.weld_type < 0.5 ? 16755200 : e.weld_type < 1.5 ? 16742144 : 16733440, K = e.weld_type < 0.5 ? e.tf_beam * 0.95 : e.weld_type < 1.5 ? e.tf_beam * 0.6 : e.weld_throat, Le = (t) => {
        const o = new fe(K * 1.1, e.bf_beam, K * 1.2), c = new Q({
          color: Pe,
          emissive: 3346688,
          metalness: 0.7,
          roughness: 0.45
        }), h = new W(o, c);
        return h.position.set(E - K / 2, 0, t), h;
      };
      k.push(Le(+e.d_beam / 2 - e.tf_beam / 2)), k.push(Le(-e.d_beam / 2 + e.tf_beam / 2));
      const Ue = e.d_beam - 2 * e.tf_beam - (e.weld_access_hole > 0.5 ? 2 * (e.tf_beam * 1.5) : 0), Qe = new fe(K * 1.1, K * 1.2, Ue), et = new Q({
        color: Pe,
        emissive: 3346688,
        metalness: 0.7,
        roughness: 0.45
      }), De = new W(Qe, et);
      if (De.position.set(E - K / 2, 0, 0), k.push(De), e.weld_access_hole > 0.5) {
        const t = e.tf_beam * 1.2;
        for (const o of [
          +e.d_beam / 2 - e.tf_beam - t,
          -e.d_beam / 2 + e.tf_beam + t
        ]) {
          const c = new Be(t, 3e-3, 10, 24), h = new Q({
            color: 3355443,
            metalness: 0.5,
            roughness: 0.6
          }), S = new W(c, h);
          S.position.set(E + 2e-3, 0, o), S.rotation.y = Math.PI / 2, k.push(S);
        }
      }
      if (e.weld_type < 0.5) {
        const t = new fe(0.025, e.bf_beam + 0.02, 0.01), o = new Q({
          color: 5588019,
          metalness: 0.3,
          roughness: 0.8
        });
        for (const c of [
          +e.d_beam / 2 - e.tf_beam / 2,
          -e.d_beam / 2 + e.tf_beam / 2
        ]) {
          const h = new W(t, o), S = c > 0 ? -1 : 1;
          h.position.set(E - 0.015, 0, c + S * e.tf_beam * 0.7), k.push(h);
        }
      }
      const Oe = (t) => {
        const o = ye(t), c = E + t, h = [
          new A(c, -o / 2, +e.d_beam / 2 + 5e-3),
          new A(c, +o / 2, +e.d_beam / 2 + 5e-3),
          new A(c, +o / 2, -e.d_beam / 2 - 5e-3),
          new A(c, -o / 2, -e.d_beam / 2 - 5e-3),
          new A(c, -o / 2, +e.d_beam / 2 + 5e-3)
        ], S = new I().setFromPoints(h), R = new O({
          color: 16776960
        });
        return new C(S, R);
      };
      k.push(Oe(V)), k.push(Oe(X)), n.objects3D.val = k;
      const ne = e.classification < 0.5 ? 0.02 : e.classification < 1.5 ? 0.04 : 0.06, tt = dt(e.story_h, Math.round(e.steps_per_cycle), ne), ot = e.b_rbs * e.d_beam, nt = e.d_beam / 2 / ot, Ee = {
        Fy: e.Fy,
        E: e.E_steel,
        b: e.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, Ae = e.bf_beam * (1 - 2 * e.c_rbs), Ye = Ae * e.tf_beam * (e.d_beam - e.tf_beam), me = e.Fy * Ye, q = [], se = [];
      let xe = bt(Ee);
      for (const t of tt) {
        const o = t * nt;
        xe = ft(o, xe, Ee), q.push(t), se.push(xe.sigma * Ye);
      }
      n.__rbsHistory = {
        theta: q,
        M: se,
        Mp: me,
        targetDrift: ne,
        classification: e.classification < 0.5 ? "IMF" : e.classification < 1.5 ? "SMF" : "Extended"
      };
      const ae = Math.max(e.L_beam * 0.6, 1.5), st = vt({
        theta: q,
        M: se,
        Mp: me,
        targetDrift: ne,
        center: [
          E + e.L_beam + ae * 0.7,
          0,
          0
        ],
        size: ae
      }), at = St({
        drifts: q,
        center: [
          E + e.L_beam * 0.5 - ae / 2,
          0,
          -e.story_h / 2 - ae * 0.7
        ],
        size: ae
      });
      n.objects3D.val = [
        ...n.objects3D.val,
        ...st,
        ...at
      ];
      let de = 0;
      for (let t = 0; t < q.length; t++) Math.abs(q[t] - ne) < 5e-3 && Math.abs(se[t]) > Math.abs(de) && (de = se[t]);
      const ke = Math.abs(de) / me;
      console.log(`[RBS AISC 358-22] Shells=${m.length}, Nodos=${r.length}
  bf_rbs=${Ae.toFixed(3)}m, Mp_rbs=${me.toFixed(1)} kN\xB7m
  M@${(ne * 100).toFixed(1)}%=${de.toFixed(1)} kN\xB7m \xB7 Ratio=${ke.toFixed(3)} \u2192 ${ke >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(e, n) {
      const r = n.__rbsHistory;
      if (!r) return {
        Status: "\u2014"
      };
      const m = e.bf_beam * (1 - 2 * e.c_rbs), g = m * e.tf_beam * (e.d_beam - e.tf_beam), d = r.Mp, b = r.targetDrift;
      let _ = 0;
      for (const l of r.M) Math.abs(l) > Math.abs(_) && (_ = l);
      let p = 0;
      for (let l = 0; l < r.theta.length; l++) Math.abs(r.theta[l] - b) < 5e-3 && Math.abs(r.M[l]) > Math.abs(p) && (p = r.M[l]);
      const M = Math.abs(p) / d;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": r.classification,
        "Target drift \u03B8": `${(b * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(e.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(m * 1e3).toFixed(0)} mm (-${(e.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(e.a_rbs * e.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(e.b_rbs * e.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(e.c_rbs * e.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(g * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${d.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(_).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(p).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${M.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${M >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${r.classification}`,
        "Data points generados": `${r.theta.length}`,
        "\u2500\u2500 Soldadura AISC 360 \xA7J2 \u2500\u2500": "",
        ...(() => {
          const l = e.weld_type < 0.5 ? "CJP" : e.weld_type < 1.5 ? "PJP" : "Filete", a = e.weld_type < 0.5 ? e.tf_beam : e.weld_type < 1.5 ? e.tf_beam * 0.7 : e.weld_throat, w = e.electrode_Fexx, i = 0.75, f = e.bf_beam, y = a * f, F = e.weld_type < 0.5 ? e.Fy * e.bf_beam * e.tf_beam : 0.6 * w * y, x = i * F, v = 0.8 * d / Math.max(e.d_beam - e.tf_beam, 0.1), s = v / x, u = w < 44e4 ? "E60XX" : w < 52e4 ? "E70XX" : "E80XX";
          return {
            "Tipo soldadura": l,
            Electrodo: `${u} (Fexx=${(w / 1e3).toFixed(0)} MPa)`,
            "Garganta efectiva": `${(a * 1e3).toFixed(1)} mm`,
            "L cord\xF3n (pat\xEDn)": `${(f * 1e3).toFixed(0)} mm`,
            "Ae (pat\xEDn)": `${(y * 1e6).toFixed(0)} mm\xB2`,
            "Rn cord\xF3n (nominal)": `${F.toFixed(0)} kN`,
            "\u03C6Rn (dise\xF1o)": `${x.toFixed(0)} kN`,
            "F_demand en pat\xEDn (0.8Mp)": `${v.toFixed(0)} kN`,
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
            const w = l.displacements[l.displacements.length - 1] ?? 0, i = l.lambdas[l.lambdas.length - 1] ?? 0, f = l.firstYieldStep >= 0 ? l.lambdas[l.firstYieldStep] : null, y = l.firstYieldStep >= 0 ? l.displacements[l.firstYieldStep] : null, F = Math.max(...l.vonMisesMax), x = l.elementsYielded[l.elementsYielded.length - 1] ?? 0, $ = l.converged.every((v) => v);
            return {
              "\u2500\u2500 IDEA StatiCa (pushover incremental) \u2500\u2500": "",
              "Pasos ejecutados": `${l.lambdas.length}`,
              Convergencia: $ ? "\u2713 todos los pasos" : "\u2717 alg\xFAn paso no convergi\xF3",
              "\u03BB inicio fluencia": f !== null ? `${(f * 100).toFixed(0)}% (paso ${l.firstYieldStep + 1})` : "no fluy\xF3",
              "\u03B4 @ 1er yield": y !== null ? `${(y * 1e3).toFixed(2)} mm` : "\u2014",
              "\u03BB final": `${(i * 100).toFixed(0)}%`,
              "\u03B4 final (tip)": `${(w * 1e3).toFixed(2)} mm`,
              "k el\xE1stica (\u03BB/\u03B4)": `${l.elasticStiffness.toFixed(2)} 1/m`,
              "\u03C3vm_max (todo el pushover)": `${(F / 1e3).toFixed(1)} MPa`,
              "\u03C3vm / Fy": `${(F / e.Fy).toFixed(2)}`,
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
  Lt as c
};
