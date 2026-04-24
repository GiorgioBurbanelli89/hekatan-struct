import { a as ot } from "./analyze-ClLKGn9k.js";
import { d as st, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as at, m as nt, i as lt } from "./menegottoPinto-B-C2cxus.js";
import { s as De, __tla as __tla_1 } from "./secantPlasticity-B1VMR3_i.js";
import { L as Q, B, a as T, S as Ge, e as it, c as W, V as E, M as j, T as ke, b as he } from "./Text-BA03d7vw.js";
let ht;
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
  function ct(e) {
    var _a, _b;
    const a = e.nSteps ?? 10, l = e.maxIterPerStep ?? 8, u = e.softeningFactor, F = [], p = [], v = [], w = [], S = [];
    let L = -1, i = {}, r = {};
    for (let $ = 1; $ <= a; $++) {
      const I = $ / a, y = e.buildLoads(I), R = {
        supports: e.supports,
        loads: y
      }, m = De({
        nodes: e.nodes,
        elements: e.elements,
        nodeInputs: R,
        elementInputs: e.elementInputs,
        Fy: e.Fy,
        maxIter: l,
        tol: 0.03,
        softeningFactor: u
      }), g = (_a = m.deformOutputs) == null ? void 0 : _a.deformations;
      let h = 0;
      if (g) {
        const b = g.get(e.trackNode);
        b && (h = Math.abs(b[e.trackDof] ?? 0));
      }
      let n = 0;
      const d = (_b = m.analyzeOutputs) == null ? void 0 : _b.vonMises;
      if (d) for (const b of d.values()) for (const x of b) {
        const Y = Math.abs(x);
        Y > n && (n = Y);
      }
      F.push(I), p.push(h), v.push(n), w.push(m.elementsYielded), S.push(m.converged), L < 0 && m.elementsYielded > 0 && (L = $ - 1), i = m.deformOutputs, r = m.analyzeOutputs;
    }
    const M = p[0] > 1e-12 ? F[0] / p[0] : 0;
    return {
      lambdas: F,
      displacements: p,
      vonMisesMax: v,
      elementsYielded: w,
      firstYieldStep: L,
      finalDeformOutputs: i,
      finalAnalyzeOutputs: r,
      ultimateLoadFactor: F[F.length - 1] ?? 0,
      elasticStiffness: M,
      converged: S
    };
  }
  function rt(e) {
    const a = e.size ?? 1.5, l = [], u = e.lambdas.length;
    if (u === 0) return l;
    const F = Math.max(...e.displacements, 1e-9), p = Math.max(...e.lambdas, 1e-9), v = e.displacements.map((n) => n / F * a), w = e.lambdas.map((n) => n / p * a), [S, L, i] = e.center, r = (n, d) => new E(S + n, L, i + d), M = new Q({
      color: 11184810
    }), $ = new B().setFromPoints([
      r(0, 0),
      r(a * 1.05, 0)
    ]), I = new B().setFromPoints([
      r(0, 0),
      r(0, a * 1.05)
    ]);
    l.push(new T($, M)), l.push(new T(I, M));
    const y = new Q({
      color: 5592405,
      transparent: true,
      opacity: 0.4
    });
    for (let n = 1; n <= 5; n++) {
      const d = n / 5 * a, b = new B().setFromPoints([
        r(0, d),
        r(a, d)
      ]);
      l.push(new T(b, y));
    }
    const R = new Q({
      color: 65484,
      linewidth: 3
    }), m = [
      r(0, 0)
    ];
    for (let n = 0; n < u; n++) m.push(r(v[n], w[n]));
    const g = new B().setFromPoints(m);
    l.push(new T(g, R));
    const h = new Ge(a * 0.015, 8, 6);
    for (let n = 0; n < u; n++) {
      const b = n === e.firstYieldStep ? 16776960 : 65484, x = new it({
        color: b
      }), Y = new W(h, x);
      Y.position.copy(r(v[n], w[n])), l.push(Y);
    }
    if (e.firstYieldStep >= 0) {
      const n = e.firstYieldStep, d = r(v[n], w[n]), b = new Q({
        color: 16711680
      }), x = a * 0.04, Y = new B().setFromPoints([
        d.clone().add(new E(-x, 0, -x)),
        d.clone().add(new E(+x, 0, +x))
      ]), ee = new B().setFromPoints([
        d.clone().add(new E(-x, 0, +x)),
        d.clone().add(new E(+x, 0, -x))
      ]);
      l.push(new T(Y, b)), l.push(new T(ee, b));
    }
    return l;
  }
  ht = {
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
    build(e, a) {
      const l = [], u = [], F = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), $ = e.E_steel / 2.6, I = 77, y = 1e-4, R = /* @__PURE__ */ new Map(), m = (t, o, s) => {
        const c = Math.round(t / y), f = Math.round(o / y), _ = Math.round(s / y), z = `${c},${f},${_}`;
        let P = R.get(z);
        return P === void 0 && (l.push([
          t,
          o,
          s
        ]), P = l.length - 1, R.set(z, P)), P;
      }, g = (t, o, s, c, f) => {
        u.push([
          t,
          o,
          s,
          c
        ]);
        const _ = u.length - 1;
        F.set(_, f), p.set(_, e.E_steel), v.set(_, 0.3), w.set(_, I), S.set(_, 0), L.set(_, 0), i.set(_, 0), r.set(_, 0), M.set(_, $);
      }, h = e.story_h, n = Math.max(1, Math.round(e.mesh_density)), d = 6 * n, b = 2 * n, x = n + 1, Y = +e.d_col / 2 - e.tf_col / 2, ee = -e.d_col / 2 + e.tf_col / 2, xe = ee, Ne = Y, Z = [];
      for (let t = 0; t <= d; t++) {
        const o = -h / 2 + t * h / d, s = [];
        for (let c = 0; c <= b; c++) {
          const f = -e.bf_col / 2 + c * e.bf_col / b;
          s.push(m(Y, f, o));
        }
        Z.push(s);
      }
      for (let t = 0; t < d; t++) for (let o = 0; o < b; o++) g(Z[t][o], Z[t][o + 1], Z[t + 1][o + 1], Z[t + 1][o], e.tf_col);
      const q = [];
      for (let t = 0; t <= d; t++) {
        const o = -h / 2 + t * h / d, s = [];
        for (let c = 0; c <= b; c++) {
          const f = -e.bf_col / 2 + c * e.bf_col / b;
          s.push(m(ee, f, o));
        }
        q.push(s);
      }
      for (let t = 0; t < d; t++) for (let o = 0; o < b; o++) g(q[t][o], q[t][o + 1], q[t + 1][o + 1], q[t + 1][o], e.tf_col);
      const U = [];
      for (let t = 0; t <= d; t++) {
        const o = -h / 2 + t * h / d, s = [];
        for (let c = 0; c <= x; c++) {
          const f = xe + (Ne - xe) * (c / x);
          s.push(m(f, 0, o));
        }
        U.push(s);
      }
      for (let t = 0; t < d; t++) for (let o = 0; o < x; o++) g(U[t][o], U[t][o + 1], U[t + 1][o + 1], U[t + 1][o], e.tw_col);
      const k = e.d_col / 2, G = e.a_rbs * e.bf_beam, N = G + e.b_rbs * e.d_beam, Me = (G + N) / 2, te = e.c_rbs * e.bf_beam, ge = e.b_rbs * e.d_beam, ce = (4 * te * te + ge * ge) / (8 * te), pe = (t) => {
        if (t < G || t > N) return e.bf_beam;
        const o = t - Me, s = Math.sqrt(Math.max(0, ce * ce - o * o)) - (ce - te);
        return e.bf_beam - 2 * Math.max(0, s);
      }, J = [
        0
      ], we = 2 * n;
      for (let t = 1; t <= we; t++) J.push(G * t / we);
      const ye = 8 * n + 4;
      for (let t = 1; t < ye; t++) J.push(G + (N - G) * t / ye);
      J.push(N);
      const Fe = 5 * n;
      for (let t = 1; t <= Fe; t++) J.push(N + (e.L_beam - N) * t / Fe);
      J.sort((t, o) => t - o);
      const X = [];
      for (const t of J) (X.length === 0 || X[X.length - 1] < t - 1e-6) && X.push(t);
      const ve = +e.d_beam / 2 - e.tf_beam / 2, re = -e.d_beam / 2 + e.tf_beam / 2, A = [], V = [], H = [], D = 2 * n, oe = 2 * n;
      for (const t of X) {
        const o = pe(t), s = k + t, c = [], f = [];
        for (let z = 0; z <= D; z++) {
          const P = -o / 2 + z * o / D;
          c.push(m(s, P, ve)), f.push(m(s, P, re));
        }
        A.push(c), V.push(f);
        const _ = [];
        for (let z = 0; z <= oe; z++) {
          const P = re + (ve - re) * (z / oe);
          _.push(m(s, 0, P));
        }
        H.push(_);
      }
      for (let t = 0; t < X.length - 1; t++) {
        for (let o = 0; o < D; o++) g(A[t][o], A[t][o + 1], A[t + 1][o + 1], A[t + 1][o], e.tf_beam), g(V[t][o], V[t][o + 1], V[t + 1][o + 1], V[t + 1][o], e.tf_beam);
        for (let o = 0; o < oe; o++) g(H[t][o], H[t][o + 1], H[t + 1][o + 1], H[t + 1][o], e.tw_beam);
      }
      const O = /* @__PURE__ */ new Map(), de = 0;
      for (let t = 0; t <= D; t++) O.set(A[de][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), O.set(V[de][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t <= oe; t++) O.set(H[de][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t < l.length; t++) {
        const o = l[t][2], s = Math.abs(l[t][0]) > e.d_col / 2 - 1e-4 - 1e-6 || Math.abs(l[t][1]) < 1e-6;
        Math.abs(Math.abs(o) - h / 2) < 1e-4 && s && l[t][0] <= e.d_col / 2 + 1e-4 && (O.has(t) || O.set(t, [
          true,
          true,
          true,
          true,
          true,
          true
        ]));
      }
      const Xe = e.bf_beam * (1 - 2 * e.c_rbs) * e.tf_beam * (e.d_beam - e.tf_beam), Be = e.Fy * Xe, Te = e.L_beam - e.a_rbs * e.bf_beam - e.b_rbs * e.d_beam / 2, Se = e.load_factor * Be / Math.max(Te, 0.5), se = /* @__PURE__ */ new Map(), me = X.length - 1, We = Se / (D + 1);
      for (let t = 0; t <= D; t++) se.set(A[me][t], [
        0,
        0,
        -We,
        0,
        0,
        0
      ]);
      a.nodes.val = l, a.elements.val = u, a.nodeInputs.val = {
        supports: O,
        loads: se
      }, a.elementInputs.val = {
        thicknesses: F,
        elasticities: p,
        poissonsRatios: v,
        densities: w,
        areas: S,
        momentsOfInertiaY: L,
        momentsOfInertiaZ: i,
        torsionalConstants: r,
        shearModuli: M
      };
      try {
        const t = Math.round(e.use_nonlinear);
        if (t === 2) {
          const o = A[me][0], s = ct({
            nodes: l,
            elements: u,
            supports: O,
            elementInputs: a.elementInputs.val,
            buildLoads: (z) => {
              const P = /* @__PURE__ */ new Map(), tt = Se * z / (D + 1);
              for (let ue = 0; ue <= D; ue++) P.set(A[me][ue], [
                0,
                0,
                -tt,
                0,
                0,
                0
              ]);
              return P;
            },
            Fy: e.Fy,
            trackNode: o,
            trackDof: 2,
            nSteps: Math.round(e.idea_steps),
            maxIterPerStep: Math.round(e.nl_max_iter),
            softeningFactor: 0.9
          });
          a.deformOutputs.val = s.finalDeformOutputs;
          const c = s.finalAnalyzeOutputs;
          c.colorMapRanges = {
            ...c.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, a.analyzeOutputs.val = c, a.__ideaInfo = s, a.__nlInfo = null;
          const f = [
            k + e.L_beam * 0.55,
            -e.bf_beam * 2.5,
            0
          ], _ = rt({
            lambdas: s.lambdas,
            displacements: s.displacements,
            firstYieldStep: s.firstYieldStep,
            center: f,
            size: Math.max(e.L_beam * 0.4, 1),
            plane: "xz"
          });
          a.objects3D.val = [
            ...a.objects3D.val,
            ..._
          ], console.log(`[conexion-rbs IDEA] ${s.lambdas.length} pasos | \u03BB_max=${s.ultimateLoadFactor.toFixed(2)} | \u03B4_max=${(s.displacements[s.displacements.length - 1] * 1e3).toFixed(2)}mm | 1er yield en paso ${s.firstYieldStep + 1}/${s.lambdas.length} | k_el\xE1stica=${s.elasticStiffness.toFixed(1)}`);
        } else if (t === 1) {
          const o = De({
            nodes: l,
            elements: u,
            nodeInputs: {
              supports: O,
              loads: se
            },
            elementInputs: a.elementInputs.val,
            Fy: e.Fy,
            maxIter: Math.round(e.nl_max_iter),
            tol: 0.03,
            softeningFactor: 0.9
          });
          a.deformOutputs.val = o.deformOutputs;
          const s = o.analyzeOutputs;
          s.colorMapRanges = {
            ...s.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, a.analyzeOutputs.val = s, a.__nlInfo = {
            iterations: o.iterations,
            converged: o.converged,
            elementsYielded: o.elementsYielded,
            maxRatio: o.maxRatio
          }, a.__ideaInfo = null;
        } else {
          const o = st(l, u, {
            supports: O,
            loads: se
          }, a.elementInputs.val);
          a.deformOutputs.val = o;
          const s = ot(l, u, a.elementInputs.val, o);
          s.colorMapRanges = {
            ...s.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, a.analyzeOutputs.val = s, a.__nlInfo = null, a.__ideaInfo = null;
        }
      } catch (t) {
        console.error("[conexion-rbs] solver error:", (t == null ? void 0 : t.message) || t, t), a.deformOutputs.val = {}, a.analyzeOutputs.val = {};
      }
      const C = [], $e = k + Me, Ie = Math.min(e.bf_beam, e.d_beam) * 0.28, Je = new Ge(Ie, 20, 16), Ve = new j({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), Re = new W(Je, Ve);
      Re.position.set($e, 0, 0), C.push(Re);
      const He = new ke(Ie * 1.25, 0.015, 12, 32), Ke = new j({
        color: 16755200,
        emissive: 4465152
      }), fe = new W(He, Ke);
      fe.position.set($e, 0, 0), fe.rotation.y = Math.PI / 2, C.push(fe);
      const ze = e.weld_type < 0.5 ? 16755200 : e.weld_type < 1.5 ? 16742144 : 16733440, K = e.weld_type < 0.5 ? e.tf_beam * 0.95 : e.weld_type < 1.5 ? e.tf_beam * 0.6 : e.weld_throat, Pe = (t) => {
        const o = new he(K * 1.1, e.bf_beam, K * 1.2), s = new j({
          color: ze,
          emissive: 3346688,
          metalness: 0.7,
          roughness: 0.45
        }), c = new W(o, s);
        return c.position.set(k - K / 2, 0, t), c;
      };
      C.push(Pe(+e.d_beam / 2 - e.tf_beam / 2)), C.push(Pe(-e.d_beam / 2 + e.tf_beam / 2));
      const je = e.d_beam - 2 * e.tf_beam - (e.weld_access_hole > 0.5 ? 2 * (e.tf_beam * 1.5) : 0), Ze = new he(K * 1.1, K * 1.2, je), qe = new j({
        color: ze,
        emissive: 3346688,
        metalness: 0.7,
        roughness: 0.45
      }), Le = new W(Ze, qe);
      if (Le.position.set(k - K / 2, 0, 0), C.push(Le), e.weld_access_hole > 0.5) {
        const t = e.tf_beam * 1.2;
        for (const o of [
          +e.d_beam / 2 - e.tf_beam - t,
          -e.d_beam / 2 + e.tf_beam + t
        ]) {
          const s = new ke(t, 3e-3, 10, 24), c = new j({
            color: 3355443,
            metalness: 0.5,
            roughness: 0.6
          }), f = new W(s, c);
          f.position.set(k + 2e-3, 0, o), f.rotation.y = Math.PI / 2, C.push(f);
        }
      }
      if (e.weld_type < 0.5) {
        const t = new he(0.025, e.bf_beam + 0.02, 0.01), o = new j({
          color: 5588019,
          metalness: 0.3,
          roughness: 0.8
        });
        for (const s of [
          +e.d_beam / 2 - e.tf_beam / 2,
          -e.d_beam / 2 + e.tf_beam / 2
        ]) {
          const c = new W(t, o), f = s > 0 ? -1 : 1;
          c.position.set(k - 0.015, 0, s + f * e.tf_beam * 0.7), C.push(c);
        }
      }
      const Ye = (t) => {
        const o = pe(t), s = k + t, c = [
          new E(s, -o / 2, +e.d_beam / 2 + 5e-3),
          new E(s, +o / 2, +e.d_beam / 2 + 5e-3),
          new E(s, +o / 2, -e.d_beam / 2 - 5e-3),
          new E(s, -o / 2, -e.d_beam / 2 - 5e-3),
          new E(s, -o / 2, +e.d_beam / 2 + 5e-3)
        ], f = new B().setFromPoints(c), _ = new Q({
          color: 16776960
        });
        return new T(f, _);
      };
      C.push(Ye(G)), C.push(Ye(N)), a.objects3D.val = C;
      const ae = e.classification < 0.5 ? 0.02 : e.classification < 1.5 ? 0.04 : 0.06, Ue = at(e.story_h, Math.round(e.steps_per_cycle), ae), Qe = e.b_rbs * e.d_beam, et = e.d_beam / 2 / Qe, Ce = {
        Fy: e.Fy,
        E: e.E_steel,
        b: e.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, Ee = e.bf_beam * (1 - 2 * e.c_rbs), Ae = Ee * e.tf_beam * (e.d_beam - e.tf_beam), be = e.Fy * Ae, ne = [], le = [];
      let _e = lt(Ce);
      for (const t of Ue) {
        const o = t * et;
        _e = nt(o, _e, Ce), ne.push(t), le.push(_e.sigma * Ae);
      }
      a.__rbsHistory = {
        theta: ne,
        M: le,
        Mp: be,
        targetDrift: ae,
        classification: e.classification < 0.5 ? "IMF" : e.classification < 1.5 ? "SMF" : "Extended"
      };
      let ie = 0;
      for (let t = 0; t < ne.length; t++) Math.abs(ne[t] - ae) < 5e-3 && Math.abs(le[t]) > Math.abs(ie) && (ie = le[t]);
      const Oe = Math.abs(ie) / be;
      console.log(`[RBS AISC 358-22] Shells=${u.length}, Nodos=${l.length}
  bf_rbs=${Ee.toFixed(3)}m, Mp_rbs=${be.toFixed(1)} kN\xB7m
  M@${(ae * 100).toFixed(1)}%=${ie.toFixed(1)} kN\xB7m \xB7 Ratio=${Oe.toFixed(3)} \u2192 ${Oe >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(e, a) {
      const l = a.__rbsHistory;
      if (!l) return {
        Status: "\u2014"
      };
      const u = e.bf_beam * (1 - 2 * e.c_rbs), F = u * e.tf_beam * (e.d_beam - e.tf_beam), p = l.Mp, v = l.targetDrift;
      let w = 0;
      for (const i of l.M) Math.abs(i) > Math.abs(w) && (w = i);
      let S = 0;
      for (let i = 0; i < l.theta.length; i++) Math.abs(l.theta[i] - v) < 5e-3 && Math.abs(l.M[i]) > Math.abs(S) && (S = l.M[i]);
      const L = Math.abs(S) / p;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": l.classification,
        "Target drift \u03B8": `${(v * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(e.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(u * 1e3).toFixed(0)} mm (-${(e.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(e.a_rbs * e.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(e.b_rbs * e.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(e.c_rbs * e.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(F * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${p.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(w).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(S).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${L.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${L >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${l.classification}`,
        "Data points generados": `${l.theta.length}`,
        "\u2500\u2500 Soldadura AISC 360 \xA7J2 \u2500\u2500": "",
        ...(() => {
          const i = e.weld_type < 0.5 ? "CJP" : e.weld_type < 1.5 ? "PJP" : "Filete", r = e.weld_type < 0.5 ? e.tf_beam : e.weld_type < 1.5 ? e.tf_beam * 0.7 : e.weld_throat, M = e.electrode_Fexx, $ = 0.75, I = e.bf_beam, y = r * I, R = e.weld_type < 0.5 ? e.Fy * e.bf_beam * e.tf_beam : 0.6 * M * y, m = $ * R, h = 0.8 * p / Math.max(e.d_beam - e.tf_beam, 0.1), n = h / m, d = M < 44e4 ? "E60XX" : M < 52e4 ? "E70XX" : "E80XX";
          return {
            "Tipo soldadura": i,
            Electrodo: `${d} (Fexx=${(M / 1e3).toFixed(0)} MPa)`,
            "Garganta efectiva": `${(r * 1e3).toFixed(1)} mm`,
            "L cord\xF3n (pat\xEDn)": `${(I * 1e3).toFixed(0)} mm`,
            "Ae (pat\xEDn)": `${(y * 1e6).toFixed(0)} mm\xB2`,
            "Rn cord\xF3n (nominal)": `${R.toFixed(0)} kN`,
            "\u03C6Rn (dise\xF1o)": `${m.toFixed(0)} kN`,
            "F_demand en pat\xEDn (0.8Mp)": `${h.toFixed(0)} kN`,
            "Ratio F/\u03C6Rn": `${n.toFixed(3)} ${n <= 1 ? "\u2713" : "\u2717"}`,
            "Weld access hole": e.weld_access_hole > 0.5 ? "S\xED (AWS D1.8 \xA76.10)" : "No",
            "Dictamen soldadura": e.weld_type < 0.5 ? "CJP \u2713 Demand-critical (AISC 358 \xA73.7)" : n <= 1 ? "\u2713 OK" : "\u2717 REVISAR garganta / electrodo"
          };
        })(),
        ...(() => {
          const i = a.__ideaInfo, r = a.__nlInfo;
          if (i) {
            const M = i.displacements[i.displacements.length - 1] ?? 0, $ = i.lambdas[i.lambdas.length - 1] ?? 0, I = i.firstYieldStep >= 0 ? i.lambdas[i.firstYieldStep] : null, y = i.firstYieldStep >= 0 ? i.displacements[i.firstYieldStep] : null, R = Math.max(...i.vonMisesMax), m = i.elementsYielded[i.elementsYielded.length - 1] ?? 0, g = i.converged.every((h) => h);
            return {
              "\u2500\u2500 IDEA StatiCa (pushover incremental) \u2500\u2500": "",
              "Pasos ejecutados": `${i.lambdas.length}`,
              Convergencia: g ? "\u2713 todos los pasos" : "\u2717 alg\xFAn paso no convergi\xF3",
              "\u03BB inicio fluencia": I !== null ? `${(I * 100).toFixed(0)}% (paso ${i.firstYieldStep + 1})` : "no fluy\xF3",
              "\u03B4 @ 1er yield": y !== null ? `${(y * 1e3).toFixed(2)} mm` : "\u2014",
              "\u03BB final": `${($ * 100).toFixed(0)}%`,
              "\u03B4 final (tip)": `${(M * 1e3).toFixed(2)} mm`,
              "k el\xE1stica (\u03BB/\u03B4)": `${i.elasticStiffness.toFixed(2)} 1/m`,
              "\u03C3vm_max (todo el pushover)": `${(R / 1e3).toFixed(1)} MPa`,
              "\u03C3vm / Fy": `${(R / e.Fy).toFixed(2)}`,
              "Shells plastificados (final)": `${m}`,
              "Modo falla (estimado)": m > 0 ? "RBS (dogbone) \u2014 donde concentra plastificaci\xF3n" : "Rango el\xE1stico (aument\xE1 load_factor)"
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
  ht as c
};
