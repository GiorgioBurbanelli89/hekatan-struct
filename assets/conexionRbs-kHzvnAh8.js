import { a as Pe } from "./analyze-ClLKGn9k.js";
import { d as De, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as Te, m as Ve, i as He } from "./menegottoPinto-B-C2cxus.js";
import { s as Ke, __tla as __tla_1 } from "./secantPlasticity-B1VMR3_i.js";
import { S as Ze, M as Fe, b as ve, T as Xe, V as B, B as We, L as je, a as qe } from "./Text-C52Bkp-N.js";
let at;
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
  at = {
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
        default: 0,
        label: "Solver",
        options: {
          "Lineal (el\xE1stico)": 0,
          "No-lineal (plasticidad J2 secante)": 1
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
        max: 0.5,
        step: 0.02,
        label: "Factor carga (\xD7Mp)",
        folder: "Solver"
      }
    },
    build(t, n) {
      const s = [], m = [], G = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), we = t.E_steel / 2.6, Se = 77, Z = 1e-4, ae = /* @__PURE__ */ new Map(), v = (e, o, a) => {
        const l = Math.round(e / Z), c = Math.round(o / Z), i = Math.round(a / Z), b = `${l},${c},${i}`;
        let f = ae.get(b);
        return f === void 0 && (s.push([
          e,
          o,
          a
        ]), f = s.length - 1, ae.set(b, f)), f;
      }, w = (e, o, a, l, c) => {
        m.push([
          e,
          o,
          a,
          l
        ]);
        const i = m.length - 1;
        G.set(i, c), I.set(i, t.E_steel), E.set(i, 0.3), F.set(i, Se), h.set(i, 0), C.set(i, 0), r.set(i, 0), te.set(i, 0), oe.set(i, we);
      }, M = t.story_h, _ = Math.max(1, Math.round(t.mesh_density)), d = 6 * _, S = 2 * _, X = _ + 1, se = +t.d_col / 2 - t.tf_col / 2, ne = -t.d_col / 2 + t.tf_col / 2, le = ne, $e = se, N = [];
      for (let e = 0; e <= d; e++) {
        const o = -M / 2 + e * M / d, a = [];
        for (let l = 0; l <= S; l++) {
          const c = -t.bf_col / 2 + l * t.bf_col / S;
          a.push(v(se, c, o));
        }
        N.push(a);
      }
      for (let e = 0; e < d; e++) for (let o = 0; o < S; o++) w(N[e][o], N[e][o + 1], N[e + 1][o + 1], N[e + 1][o], t.tf_col);
      const O = [];
      for (let e = 0; e <= d; e++) {
        const o = -M / 2 + e * M / d, a = [];
        for (let l = 0; l <= S; l++) {
          const c = -t.bf_col / 2 + l * t.bf_col / S;
          a.push(v(ne, c, o));
        }
        O.push(a);
      }
      for (let e = 0; e < d; e++) for (let o = 0; o < S; o++) w(O[e][o], O[e][o + 1], O[e + 1][o + 1], O[e + 1][o], t.tf_col);
      const k = [];
      for (let e = 0; e <= d; e++) {
        const o = -M / 2 + e * M / d, a = [];
        for (let l = 0; l <= X; l++) {
          const c = le + ($e - le) * (l / X);
          a.push(v(c, 0, o));
        }
        k.push(a);
      }
      for (let e = 0; e < d; e++) for (let o = 0; o < X; o++) w(k[e][o], k[e][o + 1], k[e + 1][o + 1], k[e + 1][o], t.tw_col);
      const W = t.d_col / 2, x = t.a_rbs * t.bf_beam, g = x + t.b_rbs * t.d_beam, re = (x + g) / 2, Y = t.c_rbs * t.bf_beam, ie = t.b_rbs * t.d_beam, j = (4 * Y * Y + ie * ie) / (8 * Y), ce = (e) => {
        if (e < x || e > g) return t.bf_beam;
        const o = e - re, a = Math.sqrt(Math.max(0, j * j - o * o)) - (j - Y);
        return t.bf_beam - 2 * Math.max(0, a);
      }, $ = [
        0
      ], me = 2 * _;
      for (let e = 1; e <= me; e++) $.push(x * e / me);
      const be = 8 * _ + 4;
      for (let e = 1; e < be; e++) $.push(x + (g - x) * e / be);
      $.push(g);
      const de = 5 * _;
      for (let e = 1; e <= de; e++) $.push(g + (t.L_beam - g) * e / de);
      $.sort((e, o) => e - o);
      const y = [];
      for (const e of $) (y.length === 0 || y[y.length - 1] < e - 1e-6) && y.push(e);
      const fe = +t.d_beam / 2 - t.tf_beam / 2, q = -t.d_beam / 2 + t.tf_beam / 2, p = [], R = [], L = [], z = 2 * _, P = 2 * _;
      for (const e of y) {
        const o = ce(e), a = W + e, l = [], c = [];
        for (let b = 0; b <= z; b++) {
          const f = -o / 2 + b * o / z;
          l.push(v(a, f, fe)), c.push(v(a, f, q));
        }
        p.push(l), R.push(c);
        const i = [];
        for (let b = 0; b <= P; b++) {
          const f = q + (fe - q) * (b / P);
          i.push(v(a, 0, f));
        }
        L.push(i);
      }
      for (let e = 0; e < y.length - 1; e++) {
        for (let o = 0; o < z; o++) w(p[e][o], p[e][o + 1], p[e + 1][o + 1], p[e + 1][o], t.tf_beam), w(R[e][o], R[e][o + 1], R[e + 1][o + 1], R[e + 1][o], t.tf_beam);
        for (let o = 0; o < P; o++) w(L[e][o], L[e][o + 1], L[e + 1][o + 1], L[e + 1][o], t.tw_beam);
      }
      const u = /* @__PURE__ */ new Map(), J = 0;
      for (let e = 0; e <= z; e++) u.set(p[J][e], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), u.set(R[J][e], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let e = 0; e <= P; e++) u.set(L[J][e], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let e = 0; e < s.length; e++) {
        const o = s[e][2], a = Math.abs(s[e][0]) > t.d_col / 2 - 1e-4 - 1e-6 || Math.abs(s[e][1]) < 1e-6;
        Math.abs(Math.abs(o) - M / 2) < 1e-4 && a && s[e][0] <= t.d_col / 2 + 1e-4 && (u.has(e) || u.set(e, [
          true,
          true,
          true,
          true,
          true,
          true
        ]));
      }
      const Re = t.bf_beam * (1 - 2 * t.c_rbs) * t.tf_beam * (t.d_beam - t.tf_beam), Le = t.Fy * Re, ze = t.L_beam - t.a_rbs * t.bf_beam - t.b_rbs * t.d_beam / 2, Ie = t.load_factor * Le / Math.max(ze, 0.5), D = /* @__PURE__ */ new Map(), Ee = y.length - 1, Ce = Ie / (z + 1);
      for (let e = 0; e <= z; e++) D.set(p[Ee][e], [
        0,
        0,
        -Ce,
        0,
        0,
        0
      ]);
      n.nodes.val = s, n.elements.val = m, n.nodeInputs.val = {
        supports: u,
        loads: D
      }, n.elementInputs.val = {
        thicknesses: G,
        elasticities: I,
        poissonsRatios: E,
        densities: F,
        areas: h,
        momentsOfInertiaY: C,
        momentsOfInertiaZ: r,
        torsionalConstants: te,
        shearModuli: oe
      };
      try {
        if (t.use_nonlinear > 0.5) {
          const e = Ke({
            nodes: s,
            elements: m,
            nodeInputs: {
              supports: u,
              loads: D
            },
            elementInputs: n.elementInputs.val,
            Fy: t.Fy,
            maxIter: Math.round(t.nl_max_iter),
            tol: 0.03,
            softeningFactor: 0.9
          });
          n.deformOutputs.val = e.deformOutputs;
          const o = e.analyzeOutputs;
          o.colorMapRanges = {
            ...o.colorMapRanges,
            vonMises: [
              0,
              t.Fy
            ]
          }, n.analyzeOutputs.val = o, n.__nlInfo = {
            iterations: e.iterations,
            converged: e.converged,
            elementsYielded: e.elementsYielded,
            maxRatio: e.maxRatio
          }, console.log(`[conexion-rbs NL] iter=${e.iterations} conv=${e.converged} yield=${e.elementsYielded} maxRatio=${e.maxRatio.toFixed(2)}`);
        } else {
          const e = De(s, m, {
            supports: u,
            loads: D
          }, n.elementInputs.val);
          n.deformOutputs.val = e;
          const o = Pe(s, m, n.elementInputs.val, e);
          o.colorMapRanges = {
            ...o.colorMapRanges,
            vonMises: [
              0,
              t.Fy
            ]
          }, n.analyzeOutputs.val = o, n.__nlInfo = null;
        }
      } catch (e) {
        console.error("[conexion-rbs] solver error:", (e == null ? void 0 : e.message) || e, e), n.deformOutputs.val = {}, n.analyzeOutputs.val = {};
      }
      const A = [], _e = W + re, ue = Math.min(t.bf_beam, t.d_beam) * 0.28, Ne = new Ze(ue, 20, 16), Oe = new Fe({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), he = new ve(Ne, Oe);
      he.position.set(_e, 0, 0), A.push(he);
      const ke = new Xe(ue * 1.25, 0.015, 12, 32), Ae = new Fe({
        color: 16755200,
        emissive: 4465152
      }), U = new ve(ke, Ae);
      U.position.set(_e, 0, 0), U.rotation.y = Math.PI / 2, A.push(U);
      const Me = (e) => {
        const o = ce(e), a = W + e, l = [
          new B(a, -o / 2, +t.d_beam / 2 + 5e-3),
          new B(a, +o / 2, +t.d_beam / 2 + 5e-3),
          new B(a, +o / 2, -t.d_beam / 2 - 5e-3),
          new B(a, -o / 2, -t.d_beam / 2 - 5e-3),
          new B(a, -o / 2, +t.d_beam / 2 + 5e-3)
        ], c = new We().setFromPoints(l), i = new je({
          color: 16776960
        });
        return new qe(c, i);
      };
      A.push(Me(x)), A.push(Me(g)), n.objects3D.val = A;
      const T = t.classification < 0.5 ? 0.02 : t.classification < 1.5 ? 0.04 : 0.06, Be = Te(t.story_h, Math.round(t.steps_per_cycle), T), Ge = t.b_rbs * t.d_beam, Ye = t.d_beam / 2 / Ge, xe = {
        Fy: t.Fy,
        E: t.E_steel,
        b: t.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, ge = t.bf_beam * (1 - 2 * t.c_rbs), ye = ge * t.tf_beam * (t.d_beam - t.tf_beam), Q = t.Fy * ye, V = [], H = [];
      let ee = He(xe);
      for (const e of Be) {
        const o = e * Ye;
        ee = Ve(o, ee, xe), V.push(e), H.push(ee.sigma * ye);
      }
      n.__rbsHistory = {
        theta: V,
        M: H,
        Mp: Q,
        targetDrift: T,
        classification: t.classification < 0.5 ? "IMF" : t.classification < 1.5 ? "SMF" : "Extended"
      };
      let K = 0;
      for (let e = 0; e < V.length; e++) Math.abs(V[e] - T) < 5e-3 && Math.abs(H[e]) > Math.abs(K) && (K = H[e]);
      const pe = Math.abs(K) / Q;
      console.log(`[RBS AISC 358-22] Shells=${m.length}, Nodos=${s.length}
  bf_rbs=${ge.toFixed(3)}m, Mp_rbs=${Q.toFixed(1)} kN\xB7m
  M@${(T * 100).toFixed(1)}%=${K.toFixed(1)} kN\xB7m \xB7 Ratio=${pe.toFixed(3)} \u2192 ${pe >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(t, n) {
      const s = n.__rbsHistory;
      if (!s) return {
        Status: "\u2014"
      };
      const m = t.bf_beam * (1 - 2 * t.c_rbs), G = m * t.tf_beam * (t.d_beam - t.tf_beam), I = s.Mp, E = s.targetDrift;
      let F = 0;
      for (const r of s.M) Math.abs(r) > Math.abs(F) && (F = r);
      let h = 0;
      for (let r = 0; r < s.theta.length; r++) Math.abs(s.theta[r] - E) < 5e-3 && Math.abs(s.M[r]) > Math.abs(h) && (h = s.M[r]);
      const C = Math.abs(h) / I;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": s.classification,
        "Target drift \u03B8": `${(E * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(t.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(m * 1e3).toFixed(0)} mm (-${(t.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(t.a_rbs * t.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(t.b_rbs * t.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(t.c_rbs * t.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(G * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${I.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(F).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(h).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${C.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${C >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${s.classification}`,
        "Data points generados": `${s.theta.length}`,
        ...(() => {
          const r = n.__nlInfo;
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
  at as c
};
