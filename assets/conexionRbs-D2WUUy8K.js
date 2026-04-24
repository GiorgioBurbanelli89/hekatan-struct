import { a as lt } from "./analyze-ClLKGn9k.js";
import { d as ct, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as it, m as rt, i as dt } from "./menegottoPinto-B-C2cxus.js";
import { s as De, __tla as __tla_1 } from "./secantPlasticity-B1VMR3_i.js";
import { L as U, B as W, a as T, p as Ge, e as Ne, c as V, V as Y, b as de, d as mt, E as ft, M as q, T as Be } from "./Text-Dh9LKuSL.js";
let zt;
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
  function _t(e) {
    var _a, _b;
    const n = e.nSteps ?? 10, c = e.maxIterPerStep ?? 8, f = e.softeningFactor, g = [], r = [], _ = [], b = [], x = [];
    let u = -1, l = {}, i = {};
    for (let y = 1; y <= n; y++) {
      const M = y / n, S = e.buildLoads(M), z = {
        supports: e.supports,
        loads: S
      }, h = De({
        nodes: e.nodes,
        elements: e.elements,
        nodeInputs: z,
        elementInputs: e.elementInputs,
        Fy: e.Fy,
        maxIter: c,
        tol: 0.03,
        softeningFactor: f
      }), R = (_a = h.deformOutputs) == null ? void 0 : _a.deformations;
      let v = 0;
      if (R) {
        const F = R.get(e.trackNode);
        F && (v = Math.abs(F[e.trackDof] ?? 0));
      }
      let s = 0;
      const m = (_b = h.analyzeOutputs) == null ? void 0 : _b.vonMises;
      if (m) for (const F of m.values()) for (const I of F) {
        const O = Math.abs(I);
        O > s && (s = O);
      }
      g.push(M), r.push(v), _.push(s), b.push(h.elementsYielded), x.push(h.converged), u < 0 && h.elementsYielded > 0 && (u = y - 1), l = h.deformOutputs, i = h.analyzeOutputs;
    }
    const p = r[0] > 1e-12 ? g[0] / r[0] : 0;
    return {
      lambdas: g,
      displacements: r,
      vonMisesMax: _,
      elementsYielded: b,
      firstYieldStep: u,
      finalDeformOutputs: l,
      finalAnalyzeOutputs: i,
      ultimateLoadFactor: g[g.length - 1] ?? 0,
      elasticStiffness: p,
      converged: x
    };
  }
  function bt(e) {
    const n = e.size ?? 1.5, c = [], f = e.lambdas.length;
    if (f === 0) return c;
    const g = Math.max(...e.displacements, 1e-9), r = Math.max(...e.lambdas, 1e-9), _ = e.displacements.map((s) => s / g * n), b = e.lambdas.map((s) => s / r * n), [x, u, l] = e.center, i = (s, m) => new Y(x + s, u, l + m), p = new U({
      color: 11184810
    }), y = new W().setFromPoints([
      i(0, 0),
      i(n * 1.05, 0)
    ]), M = new W().setFromPoints([
      i(0, 0),
      i(0, n * 1.05)
    ]);
    c.push(new T(y, p)), c.push(new T(M, p));
    const S = new U({
      color: 5592405,
      transparent: true,
      opacity: 0.4
    });
    for (let s = 1; s <= 5; s++) {
      const m = s / 5 * n, F = new W().setFromPoints([
        i(0, m),
        i(n, m)
      ]);
      c.push(new T(F, S));
    }
    const z = new U({
      color: 65484,
      linewidth: 3
    }), h = [
      i(0, 0)
    ];
    for (let s = 0; s < f; s++) h.push(i(_[s], b[s]));
    const R = new W().setFromPoints(h);
    c.push(new T(R, z));
    const v = new Ge(n * 0.015, 8, 6);
    for (let s = 0; s < f; s++) {
      const F = s === e.firstYieldStep ? 16776960 : 65484, I = new Ne({
        color: F
      }), O = new V(v, I);
      O.position.copy(i(_[s], b[s])), c.push(O);
    }
    if (e.firstYieldStep >= 0) {
      const s = e.firstYieldStep, m = i(_[s], b[s]), F = new U({
        color: 16711680
      }), I = n * 0.04, O = new W().setFromPoints([
        m.clone().add(new Y(-I, 0, -I)),
        m.clone().add(new Y(+I, 0, +I))
      ]), oe = new W().setFromPoints([
        m.clone().add(new Y(-I, 0, +I)),
        m.clone().add(new Y(+I, 0, -I))
      ]);
      c.push(new T(O, F)), c.push(new T(oe, F));
    }
    return c;
  }
  function ut(e) {
    const n = /* @__PURE__ */ new Map(), c = e.weld_tol ?? e.tf_beam * 1.5;
    for (let f = 0; f < e.elements.length; f++) {
      const g = e.elements[f];
      let r = 0, _ = 0, b = 0;
      for (const m of g) r += e.nodes[m][0], _ += e.nodes[m][1], b += e.nodes[m][2];
      r /= g.length, _ /= g.length, b /= g.length;
      const x = Math.abs(r), u = Math.abs(_), l = Math.abs(b), i = Math.abs(r - (e.d_col / 2 - e.tf_col / 2)) < c, p = Math.abs(r - (-e.d_col / 2 + e.tf_col / 2)) < c, y = u < 1e-3 && x <= e.d_col / 2 && l <= e.d_col, M = r > e.x_col_face - c, S = M && Math.abs(b - (e.d_beam / 2 - e.tf_beam / 2)) < c, z = M && Math.abs(b - (-e.d_beam / 2 + e.tf_beam / 2)) < c, h = M && u < 1e-3 && l < e.d_beam / 2 - e.tf_beam / 2, R = M && r < e.x_col_face + c * 2, v = r >= e.x_rbs_start && r <= e.x_rbs_end;
      let s = "other";
      R && (S || z || h) ? s = "weld_zone" : S && v ? s = "RBS_top" : z && v ? s = "RBS_bot" : S ? s = "beam_flange_top" : z ? s = "beam_flange_bot" : h ? s = "beam_web" : i ? s = "col_flange_front" : p ? s = "col_flange_back" : y && (s = "col_web"), n.set(f, s);
    }
    return n;
  }
  const ht = {
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
  function gt(e, n, c) {
    const f = /* @__PURE__ */ new Map();
    for (const [r, _] of e.entries()) {
      const b = n.get(r);
      if (!b || b.length === 0) continue;
      let x = 0;
      for (const l of b) {
        const i = Math.abs(l);
        i > x && (x = i);
      }
      let u = f.get(_);
      u || (u = {
        vmValues: [],
        count: 0
      }, f.set(_, u)), u.vmValues.push(x), u.count++;
    }
    const g = [];
    for (const [r, _] of f.entries()) {
      if (_.vmValues.length === 0) continue;
      const b = Math.max(..._.vmValues), x = _.vmValues.reduce((p, y) => p + y, 0) / _.vmValues.length, u = b / c;
      let l = "green", i = "\u{1F7E2}";
      u > 1 ? (l = "red", i = "\u{1F534}") : u > 0.8 && (l = "yellow", i = "\u{1F7E1}"), g.push({
        zone: r,
        label: ht[r],
        nElements: _.count,
        maxVm: b,
        meanVm: x,
        ratio: u,
        status: l,
        statusIcon: i
      });
    }
    return g.sort((r, _) => _.ratio - r.ratio), g;
  }
  function xt(e) {
    return e.length > 0 ? e[0] : null;
  }
  function Mt(e) {
    return e ? e.ratio < 0.5 ? "Sin esfuerzo significativo (aument\xE1 carga)" : e.ratio < 0.8 ? "Rango el\xE1stico seguro" : e.ratio < 1 ? `Cerca del l\xEDmite \u2014 governing: ${e.label}` : e.ratio < 1.5 ? `\u26A0 Fluencia en: ${e.label}` : `\u2717 COLAPSO en: ${e.label} (\u03C3=${e.ratio.toFixed(1)}\xD7Fy)` : "\u2014";
  }
  function pt(e, n, c, f) {
    if (!f) return [];
    let g = 1 / 0, r = 1 / 0, _ = 1 / 0, b = -1 / 0, x = -1 / 0, u = -1 / 0, l = 0;
    for (const [z, h] of c.entries()) {
      if (h !== f) continue;
      const R = n[z];
      for (const v of R) {
        const [s, m, F] = e[v];
        s < g && (g = s), m < r && (r = m), F < _ && (_ = F), s > b && (b = s), m > x && (x = m), F > u && (u = F);
      }
      l++;
    }
    if (l === 0) return [];
    const i = 0.015;
    g -= i, r -= i, _ -= i, b += i, x += i, u += i;
    const p = new de(b - g, x - r, u - _), y = new Ne({
      color: 16711748,
      transparent: true,
      opacity: 0.15,
      wireframe: false
    }), M = new V(p, y);
    M.position.set((g + b) / 2, (r + x) / 2, (_ + u) / 2);
    const S = new mt(new ft(p), new U({
      color: 16711748,
      linewidth: 2
    }));
    return S.position.copy(M.position), [
      M,
      S
    ];
  }
  zt = {
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
        default: 0.1,
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
      const c = [], f = [], g = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), y = e.E_steel / 2.6, M = 77, S = 1e-4, z = /* @__PURE__ */ new Map(), h = (t, o, a) => {
        const d = Math.round(t / S), w = Math.round(o / S), $ = Math.round(a / S), C = `${d},${w},${$}`;
        let E = z.get(C);
        return E === void 0 && (c.push([
          t,
          o,
          a
        ]), E = c.length - 1, z.set(C, E)), E;
      }, R = (t, o, a, d, w) => {
        f.push([
          t,
          o,
          a,
          d
        ]);
        const $ = f.length - 1;
        g.set($, w), r.set($, e.E_steel), _.set($, 0.3), b.set($, M), x.set($, 0), u.set($, 0), l.set($, 0), i.set($, 0), p.set($, y);
      }, v = e.story_h, s = Math.max(1, Math.round(e.mesh_density)), m = 6 * s, F = 2 * s, I = s + 1, O = +e.d_col / 2 - e.tf_col / 2, oe = -e.d_col / 2 + e.tf_col / 2, xe = oe, Ve = O, Q = [];
      for (let t = 0; t <= m; t++) {
        const o = -v / 2 + t * v / m, a = [];
        for (let d = 0; d <= F; d++) {
          const w = -e.bf_col / 2 + d * e.bf_col / F;
          a.push(h(O, w, o));
        }
        Q.push(a);
      }
      for (let t = 0; t < m; t++) for (let o = 0; o < F; o++) R(Q[t][o], Q[t][o + 1], Q[t + 1][o + 1], Q[t + 1][o], e.tf_col);
      const ee = [];
      for (let t = 0; t <= m; t++) {
        const o = -v / 2 + t * v / m, a = [];
        for (let d = 0; d <= F; d++) {
          const w = -e.bf_col / 2 + d * e.bf_col / F;
          a.push(h(oe, w, o));
        }
        ee.push(a);
      }
      for (let t = 0; t < m; t++) for (let o = 0; o < F; o++) R(ee[t][o], ee[t][o + 1], ee[t + 1][o + 1], ee[t + 1][o], e.tf_col);
      const te = [];
      for (let t = 0; t <= m; t++) {
        const o = -v / 2 + t * v / m, a = [];
        for (let d = 0; d <= I; d++) {
          const w = xe + (Ve - xe) * (d / I);
          a.push(h(w, 0, o));
        }
        te.push(a);
      }
      for (let t = 0; t < m; t++) for (let o = 0; o < I; o++) R(te[t][o], te[t][o + 1], te[t + 1][o + 1], te[t + 1][o], e.tw_col);
      const L = e.d_col / 2, D = e.a_rbs * e.bf_beam, G = D + e.b_rbs * e.d_beam, Me = (D + G) / 2, ne = e.c_rbs * e.bf_beam, pe = e.b_rbs * e.d_beam, me = (4 * ne * ne + pe * pe) / (8 * ne), we = (t) => {
        if (t < D || t > G) return e.bf_beam;
        const o = t - Me, a = Math.sqrt(Math.max(0, me * me - o * o)) - (me - ne);
        return e.bf_beam - 2 * Math.max(0, a);
      }, Z = [
        0
      ], ye = 2 * s;
      for (let t = 1; t <= ye; t++) Z.push(D * t / ye);
      const Fe = 8 * s + 4;
      for (let t = 1; t < Fe; t++) Z.push(D + (G - D) * t / Fe);
      Z.push(G);
      const ve = 5 * s;
      for (let t = 1; t <= ve; t++) Z.push(G + (e.L_beam - G) * t / ve);
      Z.sort((t, o) => t - o);
      const X = [];
      for (const t of Z) (X.length === 0 || X[X.length - 1] < t - 1e-6) && X.push(t);
      const Se = +e.d_beam / 2 - e.tf_beam / 2, fe = -e.d_beam / 2 + e.tf_beam / 2, k = [], j = [], J = [], N = 2 * s, ae = 2 * s;
      for (const t of X) {
        const o = we(t), a = L + t, d = [], w = [];
        for (let C = 0; C <= N; C++) {
          const E = -o / 2 + C * o / N;
          d.push(h(a, E, Se)), w.push(h(a, E, fe));
        }
        k.push(d), j.push(w);
        const $ = [];
        for (let C = 0; C <= ae; C++) {
          const E = fe + (Se - fe) * (C / ae);
          $.push(h(a, 0, E));
        }
        J.push($);
      }
      for (let t = 0; t < X.length - 1; t++) {
        for (let o = 0; o < N; o++) R(k[t][o], k[t][o + 1], k[t + 1][o + 1], k[t + 1][o], e.tf_beam), R(j[t][o], j[t][o + 1], j[t + 1][o + 1], j[t + 1][o], e.tf_beam);
        for (let o = 0; o < ae; o++) R(J[t][o], J[t][o + 1], J[t + 1][o + 1], J[t + 1][o], e.tw_beam);
      }
      const B = /* @__PURE__ */ new Map(), _e = 0;
      for (let t = 0; t <= N; t++) B.set(k[_e][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), B.set(j[_e][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t <= ae; t++) B.set(J[_e][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t < c.length; t++) {
        const o = c[t][2], a = Math.abs(c[t][0]) > e.d_col / 2 - 1e-4 - 1e-6 || Math.abs(c[t][1]) < 1e-6;
        Math.abs(Math.abs(o) - v / 2) < 1e-4 && a && c[t][0] <= e.d_col / 2 + 1e-4 && (B.has(t) || B.set(t, [
          true,
          true,
          true,
          true,
          true,
          true
        ]));
      }
      const Xe = e.bf_beam * (1 - 2 * e.c_rbs) * e.tf_beam * (e.d_beam - e.tf_beam), We = e.Fy * Xe, Te = e.L_beam - e.a_rbs * e.bf_beam - e.b_rbs * e.d_beam / 2, $e = e.load_factor * We / Math.max(Te, 0.5), se = /* @__PURE__ */ new Map(), be = X.length - 1, Ze = $e / (N + 1);
      for (let t = 0; t <= N; t++) se.set(k[be][t], [
        0,
        0,
        -Ze,
        0,
        0,
        0
      ]);
      n.nodes.val = c, n.elements.val = f, n.nodeInputs.val = {
        supports: B,
        loads: se
      }, n.elementInputs.val = {
        thicknesses: g,
        elasticities: r,
        poissonsRatios: _,
        densities: b,
        areas: x,
        momentsOfInertiaY: u,
        momentsOfInertiaZ: l,
        torsionalConstants: i,
        shearModuli: p
      };
      try {
        const t = Math.round(e.use_nonlinear);
        if (t === 2) {
          const o = k[be][0], a = _t({
            nodes: c,
            elements: f,
            supports: B,
            elementInputs: n.elementInputs.val,
            buildLoads: (C) => {
              const E = /* @__PURE__ */ new Map(), A = $e * C / (N + 1);
              for (let K = 0; K <= N; K++) E.set(k[be][K], [
                0,
                0,
                -A,
                0,
                0,
                0
              ]);
              return E;
            },
            Fy: e.Fy,
            trackNode: o,
            trackDof: 2,
            nSteps: Math.round(e.idea_steps),
            maxIterPerStep: Math.round(e.nl_max_iter),
            softeningFactor: 0.9
          });
          n.deformOutputs.val = a.finalDeformOutputs;
          const d = a.finalAnalyzeOutputs;
          d.colorMapRanges = {
            ...d.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = d, n.__ideaInfo = a, n.__nlInfo = null;
          const w = [
            L + e.L_beam * 0.55,
            -e.bf_beam * 2.5,
            0
          ], $ = bt({
            lambdas: a.lambdas,
            displacements: a.displacements,
            firstYieldStep: a.firstYieldStep,
            center: w,
            size: Math.max(e.L_beam * 0.4, 1),
            plane: "xz"
          });
          n.objects3D.val = [
            ...n.objects3D.val,
            ...$
          ], console.log(`[conexion-rbs IDEA] ${a.lambdas.length} pasos | \u03BB_max=${a.ultimateLoadFactor.toFixed(2)} | \u03B4_max=${(a.displacements[a.displacements.length - 1] * 1e3).toFixed(2)}mm | 1er yield en paso ${a.firstYieldStep + 1}/${a.lambdas.length} | k_el\xE1stica=${a.elasticStiffness.toFixed(1)}`);
        } else if (t === 1) {
          const o = De({
            nodes: c,
            elements: f,
            nodeInputs: {
              supports: B,
              loads: se
            },
            elementInputs: n.elementInputs.val,
            Fy: e.Fy,
            maxIter: Math.round(e.nl_max_iter),
            tol: 0.03,
            softeningFactor: 0.9
          });
          n.deformOutputs.val = o.deformOutputs;
          const a = o.analyzeOutputs;
          a.colorMapRanges = {
            ...a.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = a, n.__nlInfo = {
            iterations: o.iterations,
            converged: o.converged,
            elementsYielded: o.elementsYielded,
            maxRatio: o.maxRatio
          }, n.__ideaInfo = null;
        } else {
          const o = ct(c, f, {
            supports: B,
            loads: se
          }, n.elementInputs.val);
          n.deformOutputs.val = o;
          const a = lt(c, f, n.elementInputs.val, o);
          a.colorMapRanges = {
            ...a.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = a, n.__nlInfo = null, n.__ideaInfo = null;
        }
      } catch (t) {
        console.error("[conexion-rbs] solver error:", (t == null ? void 0 : t.message) || t, t), n.deformOutputs.val = {}, n.analyzeOutputs.val = {};
      }
      try {
        const t = ut({
          nodes: c,
          elements: f,
          x_col_face: L,
          d_col: e.d_col,
          bf_col: e.bf_col,
          tf_col: e.tf_col,
          d_beam: e.d_beam,
          bf_beam: e.bf_beam,
          tf_beam: e.tf_beam,
          x_rbs_start: L + D,
          x_rbs_end: L + G,
          weld_tol: e.tf_beam * 1.5
        }), o = (_a = n.analyzeOutputs.val) == null ? void 0 : _a.vonMises;
        if (o) {
          const a = gt(t, o, e.Fy), d = xt(a), w = Mt(d);
          if (n.__componentRatios = a, n.__governingComponent = d, n.__failureMode = w, e.colormap_mode > 0.5) {
            const C = /* @__PURE__ */ new Map();
            for (const A of a) C.set(A.zone, A.ratio);
            const E = /* @__PURE__ */ new Map();
            for (let A = 0; A < f.length; A++) {
              const K = t.get(A), nt = K ? C.get(K) ?? 0 : 0, at = f[A].length, st = new Array(at).fill(nt * e.Fy);
              E.set(A, st);
            }
            n.analyzeOutputs.val.vonMises = E, n.analyzeOutputs.val.colorMapRanges = {
              ...n.analyzeOutputs.val.colorMapRanges,
              vonMises: [
                0,
                e.Fy
              ]
            };
          }
          const $ = pt(c, f, t, (d == null ? void 0 : d.zone) ?? null);
          n.objects3D.val = [
            ...n.objects3D.val,
            ...$
          ];
        }
      } catch (t) {
        console.warn("[conexion-rbs] component analysis skipped:", (t == null ? void 0 : t.message) || t);
      }
      const P = [], ze = L + Me, Re = Math.min(e.bf_beam, e.d_beam) * 0.28, je = new Ge(Re, 20, 16), Je = new q({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), Ie = new V(je, Je);
      Ie.position.set(ze, 0, 0), P.push(Ie);
      const He = new Be(Re * 1.25, 0.015, 12, 32), Ke = new q({
        color: 16755200,
        emissive: 4465152
      }), ue = new V(He, Ke);
      ue.position.set(ze, 0, 0), ue.rotation.y = Math.PI / 2, P.push(ue);
      const Ce = e.weld_type < 0.5 ? 16755200 : e.weld_type < 1.5 ? 16742144 : 16733440, H = e.weld_type < 0.5 ? e.tf_beam * 0.95 : e.weld_type < 1.5 ? e.tf_beam * 0.6 : e.weld_throat, Ee = (t) => {
        const o = new de(H * 1.1, e.bf_beam, H * 1.2), a = new q({
          color: Ce,
          emissive: 3346688,
          metalness: 0.7,
          roughness: 0.45
        }), d = new V(o, a);
        return d.position.set(L - H / 2, 0, t), d;
      };
      P.push(Ee(+e.d_beam / 2 - e.tf_beam / 2)), P.push(Ee(-e.d_beam / 2 + e.tf_beam / 2));
      const qe = e.d_beam - 2 * e.tf_beam - (e.weld_access_hole > 0.5 ? 2 * (e.tf_beam * 1.5) : 0), Ue = new de(H * 1.1, H * 1.2, qe), Qe = new q({
        color: Ce,
        emissive: 3346688,
        metalness: 0.7,
        roughness: 0.45
      }), Le = new V(Ue, Qe);
      if (Le.position.set(L - H / 2, 0, 0), P.push(Le), e.weld_access_hole > 0.5) {
        const t = e.tf_beam * 1.2;
        for (const o of [
          +e.d_beam / 2 - e.tf_beam - t,
          -e.d_beam / 2 + e.tf_beam + t
        ]) {
          const a = new Be(t, 3e-3, 10, 24), d = new q({
            color: 3355443,
            metalness: 0.5,
            roughness: 0.6
          }), w = new V(a, d);
          w.position.set(L + 2e-3, 0, o), w.rotation.y = Math.PI / 2, P.push(w);
        }
      }
      if (e.weld_type < 0.5) {
        const t = new de(0.025, e.bf_beam + 0.02, 0.01), o = new q({
          color: 5588019,
          metalness: 0.3,
          roughness: 0.8
        });
        for (const a of [
          +e.d_beam / 2 - e.tf_beam / 2,
          -e.d_beam / 2 + e.tf_beam / 2
        ]) {
          const d = new V(t, o), w = a > 0 ? -1 : 1;
          d.position.set(L - 0.015, 0, a + w * e.tf_beam * 0.7), P.push(d);
        }
      }
      const Oe = (t) => {
        const o = we(t), a = L + t, d = [
          new Y(a, -o / 2, +e.d_beam / 2 + 5e-3),
          new Y(a, +o / 2, +e.d_beam / 2 + 5e-3),
          new Y(a, +o / 2, -e.d_beam / 2 - 5e-3),
          new Y(a, -o / 2, -e.d_beam / 2 - 5e-3),
          new Y(a, -o / 2, +e.d_beam / 2 + 5e-3)
        ], w = new W().setFromPoints(d), $ = new U({
          color: 16776960
        });
        return new T(w, $);
      };
      P.push(Oe(D)), P.push(Oe(G)), n.objects3D.val = P;
      const le = e.classification < 0.5 ? 0.02 : e.classification < 1.5 ? 0.04 : 0.06, et = it(e.story_h, Math.round(e.steps_per_cycle), le), tt = e.b_rbs * e.d_beam, ot = e.d_beam / 2 / tt, Pe = {
        Fy: e.Fy,
        E: e.E_steel,
        b: e.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, Ae = e.bf_beam * (1 - 2 * e.c_rbs), Ye = Ae * e.tf_beam * (e.d_beam - e.tf_beam), he = e.Fy * Ye, ce = [], ie = [];
      let ge = dt(Pe);
      for (const t of et) {
        const o = t * ot;
        ge = rt(o, ge, Pe), ce.push(t), ie.push(ge.sigma * Ye);
      }
      n.__rbsHistory = {
        theta: ce,
        M: ie,
        Mp: he,
        targetDrift: le,
        classification: e.classification < 0.5 ? "IMF" : e.classification < 1.5 ? "SMF" : "Extended"
      };
      let re = 0;
      for (let t = 0; t < ce.length; t++) Math.abs(ce[t] - le) < 5e-3 && Math.abs(ie[t]) > Math.abs(re) && (re = ie[t]);
      const ke = Math.abs(re) / he;
      console.log(`[RBS AISC 358-22] Shells=${f.length}, Nodos=${c.length}
  bf_rbs=${Ae.toFixed(3)}m, Mp_rbs=${he.toFixed(1)} kN\xB7m
  M@${(le * 100).toFixed(1)}%=${re.toFixed(1)} kN\xB7m \xB7 Ratio=${ke.toFixed(3)} \u2192 ${ke >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(e, n) {
      const c = n.__rbsHistory;
      if (!c) return {
        Status: "\u2014"
      };
      const f = e.bf_beam * (1 - 2 * e.c_rbs), g = f * e.tf_beam * (e.d_beam - e.tf_beam), r = c.Mp, _ = c.targetDrift;
      let b = 0;
      for (const l of c.M) Math.abs(l) > Math.abs(b) && (b = l);
      let x = 0;
      for (let l = 0; l < c.theta.length; l++) Math.abs(c.theta[l] - _) < 5e-3 && Math.abs(c.M[l]) > Math.abs(x) && (x = c.M[l]);
      const u = Math.abs(x) / r;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": c.classification,
        "Target drift \u03B8": `${(_ * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(e.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(f * 1e3).toFixed(0)} mm (-${(e.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(e.a_rbs * e.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(e.b_rbs * e.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(e.c_rbs * e.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(g * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${r.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(b).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(x).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${u.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${u >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${c.classification}`,
        "Data points generados": `${c.theta.length}`,
        "\u2500\u2500 Soldadura AISC 360 \xA7J2 \u2500\u2500": "",
        ...(() => {
          const l = e.weld_type < 0.5 ? "CJP" : e.weld_type < 1.5 ? "PJP" : "Filete", i = e.weld_type < 0.5 ? e.tf_beam : e.weld_type < 1.5 ? e.tf_beam * 0.7 : e.weld_throat, p = e.electrode_Fexx, y = 0.75, M = e.bf_beam, S = i * M, z = e.weld_type < 0.5 ? e.Fy * e.bf_beam * e.tf_beam : 0.6 * p * S, h = y * z, v = 0.8 * r / Math.max(e.d_beam - e.tf_beam, 0.1), s = v / h, m = p < 44e4 ? "E60XX" : p < 52e4 ? "E70XX" : "E80XX";
          return {
            "Tipo soldadura": l,
            Electrodo: `${m} (Fexx=${(p / 1e3).toFixed(0)} MPa)`,
            "Garganta efectiva": `${(i * 1e3).toFixed(1)} mm`,
            "L cord\xF3n (pat\xEDn)": `${(M * 1e3).toFixed(0)} mm`,
            "Ae (pat\xEDn)": `${(S * 1e6).toFixed(0)} mm\xB2`,
            "Rn cord\xF3n (nominal)": `${z.toFixed(0)} kN`,
            "\u03C6Rn (dise\xF1o)": `${h.toFixed(0)} kN`,
            "F_demand en pat\xEDn (0.8Mp)": `${v.toFixed(0)} kN`,
            "Ratio F/\u03C6Rn": `${s.toFixed(3)} ${s <= 1 ? "\u2713" : "\u2717"}`,
            "Weld access hole": e.weld_access_hole > 0.5 ? "S\xED (AWS D1.8 \xA76.10)" : "No",
            "Dictamen soldadura": e.weld_type < 0.5 ? "CJP \u2713 Demand-critical (AISC 358 \xA73.7)" : s <= 1 ? "\u2713 OK" : "\u2717 REVISAR garganta / electrodo"
          };
        })(),
        ...(() => {
          const l = n.__componentRatios, i = n.__governingComponent, p = n.__failureMode;
          if (!l || l.length === 0) return {};
          const y = {
            "\u2500\u2500 Componentes (\u03C3vm/Fy) tipo IDEA StatiCa \u2500\u2500": ""
          };
          for (const M of l.slice(0, 8)) y[`${M.statusIcon} ${M.label}`] = `${(M.ratio * 100).toFixed(0)}% (${M.nElements} shells)`;
          return i && (y["\u{1F3AF} Componente gobernante"] = i.label), p && (y["\u{1F50E} Modo de falla estimado"] = p), y;
        })(),
        ...(() => {
          const l = n.__ideaInfo, i = n.__nlInfo;
          if (l) {
            const p = l.displacements[l.displacements.length - 1] ?? 0, y = l.lambdas[l.lambdas.length - 1] ?? 0, M = l.firstYieldStep >= 0 ? l.lambdas[l.firstYieldStep] : null, S = l.firstYieldStep >= 0 ? l.displacements[l.firstYieldStep] : null, z = Math.max(...l.vonMisesMax), h = l.elementsYielded[l.elementsYielded.length - 1] ?? 0, R = l.converged.every((v) => v);
            return {
              "\u2500\u2500 IDEA StatiCa (pushover incremental) \u2500\u2500": "",
              "Pasos ejecutados": `${l.lambdas.length}`,
              Convergencia: R ? "\u2713 todos los pasos" : "\u2717 alg\xFAn paso no convergi\xF3",
              "\u03BB inicio fluencia": M !== null ? `${(M * 100).toFixed(0)}% (paso ${l.firstYieldStep + 1})` : "no fluy\xF3",
              "\u03B4 @ 1er yield": S !== null ? `${(S * 1e3).toFixed(2)} mm` : "\u2014",
              "\u03BB final": `${(y * 100).toFixed(0)}%`,
              "\u03B4 final (tip)": `${(p * 1e3).toFixed(2)} mm`,
              "k el\xE1stica (\u03BB/\u03B4)": `${l.elasticStiffness.toFixed(2)} 1/m`,
              "\u03C3vm_max (todo el pushover)": `${(z / 1e3).toFixed(1)} MPa`,
              "\u03C3vm / Fy": `${(z / e.Fy).toFixed(2)}`,
              "Shells plastificados (final)": `${h}`,
              "Modo falla (estimado)": h > 0 ? "RBS (dogbone) \u2014 donde concentra plastificaci\xF3n" : "Rango el\xE1stico (aument\xE1 load_factor)"
            };
          }
          return i ? {
            "\u2500\u2500 Solver FEM shells (NO-LINEAL J2) \u2500\u2500": "",
            "Iteraciones NL": `${i.iterations}${i.converged ? " \u2713 convergi\xF3" : " \u2717 max-iter"}`,
            "Elementos plastificados": `${i.elementsYielded}`,
            "Max \u03C3/Fy (lineal inicial)": i.maxRatio.toFixed(2),
            Interpretaci\u00F3n: i.elementsYielded > 0 ? `${i.elementsYielded} shells fluyeron \u2192 redistribuci\xF3n` : "Rango el\xE1stico (sin plastificar)"
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
  zt as c
};
