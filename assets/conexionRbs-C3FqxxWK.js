import { a as ot } from "./analyze-ClLKGn9k.js";
import { d as at, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as st, m as nt, i as lt } from "./menegottoPinto-B-C2cxus.js";
import { s as Be, __tla as __tla_1 } from "./secantPlasticity-B1VMR3_i.js";
import { L as Q, B as V, a as X, k as De, e as ct, c as W, V as A, M as K, T as ke, b as he } from "./Text-CRSNY_qz.js";
let pt;
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
  function rt(e) {
    var _a, _b;
    const s = e.nSteps ?? 10, c = e.maxIterPerStep ?? 8, f = e.softeningFactor, M = [], d = [], _ = [], b = [], y = [];
    let h = -1, l = {}, r = {};
    for (let p = 1; p <= s; p++) {
      const g = p / s, $ = e.buildLoads(g), R = {
        supports: e.supports,
        loads: $
      }, u = Be({
        nodes: e.nodes,
        elements: e.elements,
        nodeInputs: R,
        elementInputs: e.elementInputs,
        Fy: e.Fy,
        maxIter: c,
        tol: 0.03,
        softeningFactor: f
      }), C = (_a = u.deformOutputs) == null ? void 0 : _a.deformations;
      let F = 0;
      if (C) {
        const v = C.get(e.trackNode);
        v && (F = Math.abs(v[e.trackDof] ?? 0));
      }
      let n = 0;
      const m = (_b = u.analyzeOutputs) == null ? void 0 : _b.vonMises;
      if (m) for (const v of m.values()) for (const I of v) {
        const E = Math.abs(I);
        E > n && (n = E);
      }
      M.push(g), d.push(F), _.push(n), b.push(u.elementsYielded), y.push(u.converged), h < 0 && u.elementsYielded > 0 && (h = p - 1), l = u.deformOutputs, r = u.analyzeOutputs;
    }
    const w = d[0] > 1e-12 ? M[0] / d[0] : 0;
    return {
      lambdas: M,
      displacements: d,
      vonMisesMax: _,
      elementsYielded: b,
      firstYieldStep: h,
      finalDeformOutputs: l,
      finalAnalyzeOutputs: r,
      ultimateLoadFactor: M[M.length - 1] ?? 0,
      elasticStiffness: w,
      converged: y
    };
  }
  function it(e) {
    const s = e.size ?? 1.5, c = [], f = e.lambdas.length;
    if (f === 0) return c;
    const M = Math.max(...e.displacements, 1e-9), d = Math.max(...e.lambdas, 1e-9), _ = e.displacements.map((n) => n / M * s), b = e.lambdas.map((n) => n / d * s), [y, h, l] = e.center, r = (n, m) => new A(y + n, h, l + m), w = new Q({
      color: 11184810
    }), p = new V().setFromPoints([
      r(0, 0),
      r(s * 1.05, 0)
    ]), g = new V().setFromPoints([
      r(0, 0),
      r(0, s * 1.05)
    ]);
    c.push(new X(p, w)), c.push(new X(g, w));
    const $ = new Q({
      color: 5592405,
      transparent: true,
      opacity: 0.4
    });
    for (let n = 1; n <= 5; n++) {
      const m = n / 5 * s, v = new V().setFromPoints([
        r(0, m),
        r(s, m)
      ]);
      c.push(new X(v, $));
    }
    const R = new Q({
      color: 65484,
      linewidth: 3
    }), u = [
      r(0, 0)
    ];
    for (let n = 0; n < f; n++) u.push(r(_[n], b[n]));
    const C = new V().setFromPoints(u);
    c.push(new X(C, R));
    const F = new De(s * 0.015, 8, 6);
    for (let n = 0; n < f; n++) {
      const v = n === e.firstYieldStep ? 16776960 : 65484, I = new ct({
        color: v
      }), E = new W(F, I);
      E.position.copy(r(_[n], b[n])), c.push(E);
    }
    if (e.firstYieldStep >= 0) {
      const n = e.firstYieldStep, m = r(_[n], b[n]), v = new Q({
        color: 16711680
      }), I = s * 0.04, E = new V().setFromPoints([
        m.clone().add(new A(-I, 0, -I)),
        m.clone().add(new A(+I, 0, +I))
      ]), ee = new V().setFromPoints([
        m.clone().add(new A(-I, 0, +I)),
        m.clone().add(new A(+I, 0, -I))
      ]);
      c.push(new X(E, v)), c.push(new X(ee, v));
    }
    return c;
  }
  function dt(e) {
    const s = /* @__PURE__ */ new Map(), c = e.weld_tol ?? e.tf_beam * 1.5;
    for (let f = 0; f < e.elements.length; f++) {
      const M = e.elements[f];
      let d = 0, _ = 0, b = 0;
      for (const m of M) d += e.nodes[m][0], _ += e.nodes[m][1], b += e.nodes[m][2];
      d /= M.length, _ /= M.length, b /= M.length;
      const y = Math.abs(d), h = Math.abs(_), l = Math.abs(b), r = Math.abs(d - (e.d_col / 2 - e.tf_col / 2)) < c, w = Math.abs(d - (-e.d_col / 2 + e.tf_col / 2)) < c, p = h < 1e-3 && y <= e.d_col / 2 && l <= e.d_col, g = d > e.x_col_face - c, $ = g && Math.abs(b - (e.d_beam / 2 - e.tf_beam / 2)) < c, R = g && Math.abs(b - (-e.d_beam / 2 + e.tf_beam / 2)) < c, u = g && h < 1e-3 && l < e.d_beam / 2 - e.tf_beam / 2, C = g && d < e.x_col_face + c * 2, F = d >= e.x_rbs_start && d <= e.x_rbs_end;
      let n = "other";
      C && ($ || R || u) ? n = "weld_zone" : $ && F ? n = "RBS_top" : R && F ? n = "RBS_bot" : $ ? n = "beam_flange_top" : R ? n = "beam_flange_bot" : u ? n = "beam_web" : r ? n = "col_flange_front" : w ? n = "col_flange_back" : p && (n = "col_web"), s.set(f, n);
    }
    return s;
  }
  const mt = {
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
  function ft(e, s, c) {
    const f = /* @__PURE__ */ new Map();
    for (const [d, _] of e.entries()) {
      const b = s.get(d);
      if (!b || b.length === 0) continue;
      let y = 0;
      for (const l of b) {
        const r = Math.abs(l);
        r > y && (y = r);
      }
      let h = f.get(_);
      h || (h = {
        vmValues: [],
        count: 0
      }, f.set(_, h)), h.vmValues.push(y), h.count++;
    }
    const M = [];
    for (const [d, _] of f.entries()) {
      if (_.vmValues.length === 0) continue;
      const b = Math.max(..._.vmValues), y = _.vmValues.reduce((w, p) => w + p, 0) / _.vmValues.length, h = b / c;
      let l = "green", r = "\u{1F7E2}";
      h > 1 ? (l = "red", r = "\u{1F534}") : h > 0.8 && (l = "yellow", r = "\u{1F7E1}"), M.push({
        zone: d,
        label: mt[d],
        nElements: _.count,
        maxVm: b,
        meanVm: y,
        ratio: h,
        status: l,
        statusIcon: r
      });
    }
    return M.sort((d, _) => _.ratio - d.ratio), M;
  }
  function _t(e) {
    return e.length > 0 ? e[0] : null;
  }
  function bt(e) {
    return e ? e.ratio < 0.5 ? "Sin esfuerzo significativo (aument\xE1 carga)" : e.ratio < 0.8 ? "Rango el\xE1stico seguro" : e.ratio < 1 ? `Cerca del l\xEDmite \u2014 governing: ${e.label}` : e.ratio < 1.5 ? `\u26A0 Fluencia en: ${e.label}` : `\u2717 COLAPSO en: ${e.label} (\u03C3=${e.ratio.toFixed(1)}\xD7Fy)` : "\u2014";
  }
  pt = {
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
      }
    },
    build(e, s) {
      var _a;
      const c = [], f = [], M = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), p = e.E_steel / 2.6, g = 77, $ = 1e-4, R = /* @__PURE__ */ new Map(), u = (t, o, a) => {
        const i = Math.round(t / $), x = Math.round(o / $), S = Math.round(a / $), z = `${i},${x},${S}`;
        let L = R.get(z);
        return L === void 0 && (c.push([
          t,
          o,
          a
        ]), L = c.length - 1, R.set(z, L)), L;
      }, C = (t, o, a, i, x) => {
        f.push([
          t,
          o,
          a,
          i
        ]);
        const S = f.length - 1;
        M.set(S, x), d.set(S, e.E_steel), _.set(S, 0.3), b.set(S, g), y.set(S, 0), h.set(S, 0), l.set(S, 0), r.set(S, 0), w.set(S, p);
      }, F = e.story_h, n = Math.max(1, Math.round(e.mesh_density)), m = 6 * n, v = 2 * n, I = n + 1, E = +e.d_col / 2 - e.tf_col / 2, ee = -e.d_col / 2 + e.tf_col / 2, xe = ee, Ne = E, j = [];
      for (let t = 0; t <= m; t++) {
        const o = -F / 2 + t * F / m, a = [];
        for (let i = 0; i <= v; i++) {
          const x = -e.bf_col / 2 + i * e.bf_col / v;
          a.push(u(E, x, o));
        }
        j.push(a);
      }
      for (let t = 0; t < m; t++) for (let o = 0; o < v; o++) C(j[t][o], j[t][o + 1], j[t + 1][o + 1], j[t + 1][o], e.tf_col);
      const q = [];
      for (let t = 0; t <= m; t++) {
        const o = -F / 2 + t * F / m, a = [];
        for (let i = 0; i <= v; i++) {
          const x = -e.bf_col / 2 + i * e.bf_col / v;
          a.push(u(ee, x, o));
        }
        q.push(a);
      }
      for (let t = 0; t < m; t++) for (let o = 0; o < v; o++) C(q[t][o], q[t][o + 1], q[t + 1][o + 1], q[t + 1][o], e.tf_col);
      const U = [];
      for (let t = 0; t <= m; t++) {
        const o = -F / 2 + t * F / m, a = [];
        for (let i = 0; i <= I; i++) {
          const x = xe + (Ne - xe) * (i / I);
          a.push(u(x, 0, o));
        }
        U.push(a);
      }
      for (let t = 0; t < m; t++) for (let o = 0; o < I; o++) C(U[t][o], U[t][o + 1], U[t + 1][o + 1], U[t + 1][o], e.tw_col);
      const P = e.d_col / 2, B = e.a_rbs * e.bf_beam, D = B + e.b_rbs * e.d_beam, ge = (B + D) / 2, te = e.c_rbs * e.bf_beam, Me = e.b_rbs * e.d_beam, re = (4 * te * te + Me * Me) / (8 * te), we = (t) => {
        if (t < B || t > D) return e.bf_beam;
        const o = t - ge, a = Math.sqrt(Math.max(0, re * re - o * o)) - (re - te);
        return e.bf_beam - 2 * Math.max(0, a);
      }, T = [
        0
      ], pe = 2 * n;
      for (let t = 1; t <= pe; t++) T.push(B * t / pe);
      const ye = 8 * n + 4;
      for (let t = 1; t < ye; t++) T.push(B + (D - B) * t / ye);
      T.push(D);
      const Fe = 5 * n;
      for (let t = 1; t <= Fe; t++) T.push(D + (e.L_beam - D) * t / Fe);
      T.sort((t, o) => t - o);
      const G = [];
      for (const t of T) (G.length === 0 || G[G.length - 1] < t - 1e-6) && G.push(t);
      const ve = +e.d_beam / 2 - e.tf_beam / 2, ie = -e.d_beam / 2 + e.tf_beam / 2, Y = [], Z = [], J = [], N = 2 * n, oe = 2 * n;
      for (const t of G) {
        const o = we(t), a = P + t, i = [], x = [];
        for (let z = 0; z <= N; z++) {
          const L = -o / 2 + z * o / N;
          i.push(u(a, L, ve)), x.push(u(a, L, ie));
        }
        Y.push(i), Z.push(x);
        const S = [];
        for (let z = 0; z <= oe; z++) {
          const L = ie + (ve - ie) * (z / oe);
          S.push(u(a, 0, L));
        }
        J.push(S);
      }
      for (let t = 0; t < G.length - 1; t++) {
        for (let o = 0; o < N; o++) C(Y[t][o], Y[t][o + 1], Y[t + 1][o + 1], Y[t + 1][o], e.tf_beam), C(Z[t][o], Z[t][o + 1], Z[t + 1][o + 1], Z[t + 1][o], e.tf_beam);
        for (let o = 0; o < oe; o++) C(J[t][o], J[t][o + 1], J[t + 1][o + 1], J[t + 1][o], e.tw_beam);
      }
      const k = /* @__PURE__ */ new Map(), de = 0;
      for (let t = 0; t <= N; t++) k.set(Y[de][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), k.set(Z[de][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t <= oe; t++) k.set(J[de][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t < c.length; t++) {
        const o = c[t][2], a = Math.abs(c[t][0]) > e.d_col / 2 - 1e-4 - 1e-6 || Math.abs(c[t][1]) < 1e-6;
        Math.abs(Math.abs(o) - F / 2) < 1e-4 && a && c[t][0] <= e.d_col / 2 + 1e-4 && (k.has(t) || k.set(t, [
          true,
          true,
          true,
          true,
          true,
          true
        ]));
      }
      const Ge = e.bf_beam * (1 - 2 * e.c_rbs) * e.tf_beam * (e.d_beam - e.tf_beam), Ve = e.Fy * Ge, Xe = e.L_beam - e.a_rbs * e.bf_beam - e.b_rbs * e.d_beam / 2, Se = e.load_factor * Ve / Math.max(Xe, 0.5), ae = /* @__PURE__ */ new Map(), me = G.length - 1, We = Se / (N + 1);
      for (let t = 0; t <= N; t++) ae.set(Y[me][t], [
        0,
        0,
        -We,
        0,
        0,
        0
      ]);
      s.nodes.val = c, s.elements.val = f, s.nodeInputs.val = {
        supports: k,
        loads: ae
      }, s.elementInputs.val = {
        thicknesses: M,
        elasticities: d,
        poissonsRatios: _,
        densities: b,
        areas: y,
        momentsOfInertiaY: h,
        momentsOfInertiaZ: l,
        torsionalConstants: r,
        shearModuli: w
      };
      try {
        const t = Math.round(e.use_nonlinear);
        if (t === 2) {
          const o = Y[me][0], a = rt({
            nodes: c,
            elements: f,
            supports: k,
            elementInputs: s.elementInputs.val,
            buildLoads: (z) => {
              const L = /* @__PURE__ */ new Map(), tt = Se * z / (N + 1);
              for (let ue = 0; ue <= N; ue++) L.set(Y[me][ue], [
                0,
                0,
                -tt,
                0,
                0,
                0
              ]);
              return L;
            },
            Fy: e.Fy,
            trackNode: o,
            trackDof: 2,
            nSteps: Math.round(e.idea_steps),
            maxIterPerStep: Math.round(e.nl_max_iter),
            softeningFactor: 0.9
          });
          s.deformOutputs.val = a.finalDeformOutputs;
          const i = a.finalAnalyzeOutputs;
          i.colorMapRanges = {
            ...i.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, s.analyzeOutputs.val = i, s.__ideaInfo = a, s.__nlInfo = null;
          const x = [
            P + e.L_beam * 0.55,
            -e.bf_beam * 2.5,
            0
          ], S = it({
            lambdas: a.lambdas,
            displacements: a.displacements,
            firstYieldStep: a.firstYieldStep,
            center: x,
            size: Math.max(e.L_beam * 0.4, 1),
            plane: "xz"
          });
          s.objects3D.val = [
            ...s.objects3D.val,
            ...S
          ], console.log(`[conexion-rbs IDEA] ${a.lambdas.length} pasos | \u03BB_max=${a.ultimateLoadFactor.toFixed(2)} | \u03B4_max=${(a.displacements[a.displacements.length - 1] * 1e3).toFixed(2)}mm | 1er yield en paso ${a.firstYieldStep + 1}/${a.lambdas.length} | k_el\xE1stica=${a.elasticStiffness.toFixed(1)}`);
        } else if (t === 1) {
          const o = Be({
            nodes: c,
            elements: f,
            nodeInputs: {
              supports: k,
              loads: ae
            },
            elementInputs: s.elementInputs.val,
            Fy: e.Fy,
            maxIter: Math.round(e.nl_max_iter),
            tol: 0.03,
            softeningFactor: 0.9
          });
          s.deformOutputs.val = o.deformOutputs;
          const a = o.analyzeOutputs;
          a.colorMapRanges = {
            ...a.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, s.analyzeOutputs.val = a, s.__nlInfo = {
            iterations: o.iterations,
            converged: o.converged,
            elementsYielded: o.elementsYielded,
            maxRatio: o.maxRatio
          }, s.__ideaInfo = null;
        } else {
          const o = at(c, f, {
            supports: k,
            loads: ae
          }, s.elementInputs.val);
          s.deformOutputs.val = o;
          const a = ot(c, f, s.elementInputs.val, o);
          a.colorMapRanges = {
            ...a.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, s.analyzeOutputs.val = a, s.__nlInfo = null, s.__ideaInfo = null;
        }
      } catch (t) {
        console.error("[conexion-rbs] solver error:", (t == null ? void 0 : t.message) || t, t), s.deformOutputs.val = {}, s.analyzeOutputs.val = {};
      }
      try {
        const t = dt({
          nodes: c,
          elements: f,
          x_col_face: P,
          d_col: e.d_col,
          bf_col: e.bf_col,
          tf_col: e.tf_col,
          d_beam: e.d_beam,
          bf_beam: e.bf_beam,
          tf_beam: e.tf_beam,
          x_rbs_start: P + B,
          x_rbs_end: P + D,
          weld_tol: e.tf_beam * 1.5
        }), o = (_a = s.analyzeOutputs.val) == null ? void 0 : _a.vonMises;
        if (o) {
          const a = ft(t, o, e.Fy), i = _t(a), x = bt(i);
          s.__componentRatios = a, s.__governingComponent = i, s.__failureMode = x;
        }
      } catch (t) {
        console.warn("[conexion-rbs] component analysis skipped:", (t == null ? void 0 : t.message) || t);
      }
      const O = [], $e = P + ge, Re = Math.min(e.bf_beam, e.d_beam) * 0.28, Te = new De(Re, 20, 16), Ze = new K({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), Ce = new W(Te, Ze);
      Ce.position.set($e, 0, 0), O.push(Ce);
      const Je = new ke(Re * 1.25, 0.015, 12, 32), He = new K({
        color: 16755200,
        emissive: 4465152
      }), fe = new W(Je, He);
      fe.position.set($e, 0, 0), fe.rotation.y = Math.PI / 2, O.push(fe);
      const Ie = e.weld_type < 0.5 ? 16755200 : e.weld_type < 1.5 ? 16742144 : 16733440, H = e.weld_type < 0.5 ? e.tf_beam * 0.95 : e.weld_type < 1.5 ? e.tf_beam * 0.6 : e.weld_throat, ze = (t) => {
        const o = new he(H * 1.1, e.bf_beam, H * 1.2), a = new K({
          color: Ie,
          emissive: 3346688,
          metalness: 0.7,
          roughness: 0.45
        }), i = new W(o, a);
        return i.position.set(P - H / 2, 0, t), i;
      };
      O.push(ze(+e.d_beam / 2 - e.tf_beam / 2)), O.push(ze(-e.d_beam / 2 + e.tf_beam / 2));
      const Ke = e.d_beam - 2 * e.tf_beam - (e.weld_access_hole > 0.5 ? 2 * (e.tf_beam * 1.5) : 0), je = new he(H * 1.1, H * 1.2, Ke), qe = new K({
        color: Ie,
        emissive: 3346688,
        metalness: 0.7,
        roughness: 0.45
      }), Le = new W(je, qe);
      if (Le.position.set(P - H / 2, 0, 0), O.push(Le), e.weld_access_hole > 0.5) {
        const t = e.tf_beam * 1.2;
        for (const o of [
          +e.d_beam / 2 - e.tf_beam - t,
          -e.d_beam / 2 + e.tf_beam + t
        ]) {
          const a = new ke(t, 3e-3, 10, 24), i = new K({
            color: 3355443,
            metalness: 0.5,
            roughness: 0.6
          }), x = new W(a, i);
          x.position.set(P + 2e-3, 0, o), x.rotation.y = Math.PI / 2, O.push(x);
        }
      }
      if (e.weld_type < 0.5) {
        const t = new he(0.025, e.bf_beam + 0.02, 0.01), o = new K({
          color: 5588019,
          metalness: 0.3,
          roughness: 0.8
        });
        for (const a of [
          +e.d_beam / 2 - e.tf_beam / 2,
          -e.d_beam / 2 + e.tf_beam / 2
        ]) {
          const i = new W(t, o), x = a > 0 ? -1 : 1;
          i.position.set(P - 0.015, 0, a + x * e.tf_beam * 0.7), O.push(i);
        }
      }
      const Pe = (t) => {
        const o = we(t), a = P + t, i = [
          new A(a, -o / 2, +e.d_beam / 2 + 5e-3),
          new A(a, +o / 2, +e.d_beam / 2 + 5e-3),
          new A(a, +o / 2, -e.d_beam / 2 - 5e-3),
          new A(a, -o / 2, -e.d_beam / 2 - 5e-3),
          new A(a, -o / 2, +e.d_beam / 2 + 5e-3)
        ], x = new V().setFromPoints(i), S = new Q({
          color: 16776960
        });
        return new X(x, S);
      };
      O.push(Pe(B)), O.push(Pe(D)), s.objects3D.val = O;
      const se = e.classification < 0.5 ? 0.02 : e.classification < 1.5 ? 0.04 : 0.06, Ue = st(e.story_h, Math.round(e.steps_per_cycle), se), Qe = e.b_rbs * e.d_beam, et = e.d_beam / 2 / Qe, Ee = {
        Fy: e.Fy,
        E: e.E_steel,
        b: e.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, Oe = e.bf_beam * (1 - 2 * e.c_rbs), Ae = Oe * e.tf_beam * (e.d_beam - e.tf_beam), _e = e.Fy * Ae, ne = [], le = [];
      let be = lt(Ee);
      for (const t of Ue) {
        const o = t * et;
        be = nt(o, be, Ee), ne.push(t), le.push(be.sigma * Ae);
      }
      s.__rbsHistory = {
        theta: ne,
        M: le,
        Mp: _e,
        targetDrift: se,
        classification: e.classification < 0.5 ? "IMF" : e.classification < 1.5 ? "SMF" : "Extended"
      };
      let ce = 0;
      for (let t = 0; t < ne.length; t++) Math.abs(ne[t] - se) < 5e-3 && Math.abs(le[t]) > Math.abs(ce) && (ce = le[t]);
      const Ye = Math.abs(ce) / _e;
      console.log(`[RBS AISC 358-22] Shells=${f.length}, Nodos=${c.length}
  bf_rbs=${Oe.toFixed(3)}m, Mp_rbs=${_e.toFixed(1)} kN\xB7m
  M@${(se * 100).toFixed(1)}%=${ce.toFixed(1)} kN\xB7m \xB7 Ratio=${Ye.toFixed(3)} \u2192 ${Ye >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(e, s) {
      const c = s.__rbsHistory;
      if (!c) return {
        Status: "\u2014"
      };
      const f = e.bf_beam * (1 - 2 * e.c_rbs), M = f * e.tf_beam * (e.d_beam - e.tf_beam), d = c.Mp, _ = c.targetDrift;
      let b = 0;
      for (const l of c.M) Math.abs(l) > Math.abs(b) && (b = l);
      let y = 0;
      for (let l = 0; l < c.theta.length; l++) Math.abs(c.theta[l] - _) < 5e-3 && Math.abs(c.M[l]) > Math.abs(y) && (y = c.M[l]);
      const h = Math.abs(y) / d;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": c.classification,
        "Target drift \u03B8": `${(_ * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(e.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(f * 1e3).toFixed(0)} mm (-${(e.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(e.a_rbs * e.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(e.b_rbs * e.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(e.c_rbs * e.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(M * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${d.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(b).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(y).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${h.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${h >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${c.classification}`,
        "Data points generados": `${c.theta.length}`,
        "\u2500\u2500 Soldadura AISC 360 \xA7J2 \u2500\u2500": "",
        ...(() => {
          const l = e.weld_type < 0.5 ? "CJP" : e.weld_type < 1.5 ? "PJP" : "Filete", r = e.weld_type < 0.5 ? e.tf_beam : e.weld_type < 1.5 ? e.tf_beam * 0.7 : e.weld_throat, w = e.electrode_Fexx, p = 0.75, g = e.bf_beam, $ = r * g, R = e.weld_type < 0.5 ? e.Fy * e.bf_beam * e.tf_beam : 0.6 * w * $, u = p * R, F = 0.8 * d / Math.max(e.d_beam - e.tf_beam, 0.1), n = F / u, m = w < 44e4 ? "E60XX" : w < 52e4 ? "E70XX" : "E80XX";
          return {
            "Tipo soldadura": l,
            Electrodo: `${m} (Fexx=${(w / 1e3).toFixed(0)} MPa)`,
            "Garganta efectiva": `${(r * 1e3).toFixed(1)} mm`,
            "L cord\xF3n (pat\xEDn)": `${(g * 1e3).toFixed(0)} mm`,
            "Ae (pat\xEDn)": `${($ * 1e6).toFixed(0)} mm\xB2`,
            "Rn cord\xF3n (nominal)": `${R.toFixed(0)} kN`,
            "\u03C6Rn (dise\xF1o)": `${u.toFixed(0)} kN`,
            "F_demand en pat\xEDn (0.8Mp)": `${F.toFixed(0)} kN`,
            "Ratio F/\u03C6Rn": `${n.toFixed(3)} ${n <= 1 ? "\u2713" : "\u2717"}`,
            "Weld access hole": e.weld_access_hole > 0.5 ? "S\xED (AWS D1.8 \xA76.10)" : "No",
            "Dictamen soldadura": e.weld_type < 0.5 ? "CJP \u2713 Demand-critical (AISC 358 \xA73.7)" : n <= 1 ? "\u2713 OK" : "\u2717 REVISAR garganta / electrodo"
          };
        })(),
        ...(() => {
          const l = s.__componentRatios, r = s.__governingComponent, w = s.__failureMode;
          if (!l || l.length === 0) return {};
          const p = {
            "\u2500\u2500 Componentes (\u03C3vm/Fy) tipo IDEA StatiCa \u2500\u2500": ""
          };
          for (const g of l.slice(0, 8)) p[`${g.statusIcon} ${g.label}`] = `${(g.ratio * 100).toFixed(0)}% (${g.nElements} shells)`;
          return r && (p["\u{1F3AF} Componente gobernante"] = r.label), w && (p["\u{1F50E} Modo de falla estimado"] = w), p;
        })(),
        ...(() => {
          const l = s.__ideaInfo, r = s.__nlInfo;
          if (l) {
            const w = l.displacements[l.displacements.length - 1] ?? 0, p = l.lambdas[l.lambdas.length - 1] ?? 0, g = l.firstYieldStep >= 0 ? l.lambdas[l.firstYieldStep] : null, $ = l.firstYieldStep >= 0 ? l.displacements[l.firstYieldStep] : null, R = Math.max(...l.vonMisesMax), u = l.elementsYielded[l.elementsYielded.length - 1] ?? 0, C = l.converged.every((F) => F);
            return {
              "\u2500\u2500 IDEA StatiCa (pushover incremental) \u2500\u2500": "",
              "Pasos ejecutados": `${l.lambdas.length}`,
              Convergencia: C ? "\u2713 todos los pasos" : "\u2717 alg\xFAn paso no convergi\xF3",
              "\u03BB inicio fluencia": g !== null ? `${(g * 100).toFixed(0)}% (paso ${l.firstYieldStep + 1})` : "no fluy\xF3",
              "\u03B4 @ 1er yield": $ !== null ? `${($ * 1e3).toFixed(2)} mm` : "\u2014",
              "\u03BB final": `${(p * 100).toFixed(0)}%`,
              "\u03B4 final (tip)": `${(w * 1e3).toFixed(2)} mm`,
              "k el\xE1stica (\u03BB/\u03B4)": `${l.elasticStiffness.toFixed(2)} 1/m`,
              "\u03C3vm_max (todo el pushover)": `${(R / 1e3).toFixed(1)} MPa`,
              "\u03C3vm / Fy": `${(R / e.Fy).toFixed(2)}`,
              "Shells plastificados (final)": `${u}`,
              "Modo falla (estimado)": u > 0 ? "RBS (dogbone) \u2014 donde concentra plastificaci\xF3n" : "Rango el\xE1stico (aument\xE1 load_factor)"
            };
          }
          return r ? {
            "\u2500\u2500 Solver FEM shells (NO-LINEAL J2) \u2500\u2500": "",
            "Iteraciones NL": `${r.iterations}${r.converged ? " \u2713 convergi\xF3" : " \u2717 max-iter"}`,
            "Elementos plastificados": `${r.elementsYielded}`,
            "Max \u03C3/Fy (lineal inicial)": r.maxRatio.toFixed(2),
            Interpretaci\u00F3n: r.elementsYielded > 0 ? `${r.elementsYielded} shells fluyeron \u2192 redistribuci\xF3n` : "Rango el\xE1stico (sin plastificar)"
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
  pt as c
};
