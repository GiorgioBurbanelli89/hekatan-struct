import { a as Ee } from "./analyze-ClLKGn9k.js";
import { d as Ne, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as Ae, m as Oe, i as Ge } from "./menegottoPinto-B-C2cxus.js";
import { s as Ye, __tla as __tla_1 } from "./secantPlasticity-B1VMR3_i.js";
import { S as Be, M as ue, b as he, T as ke, V as G, B as Pe, L as Ve, a as De } from "./Text-C52Bkp-N.js";
let qe;
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
  qe = {
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
      const s = [], m = [], Y = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Me = t.E_steel / 2.6, xe = 77, p = (e, o, a) => (s.push([
        e,
        o,
        a
      ]), s.length - 1), v = (e, o, a, r, c) => {
        m.push([
          e,
          o,
          a,
          r
        ]);
        const i = m.length - 1;
        Y.set(i, c), L.set(i, t.E_steel), z.set(i, 0.3), F.set(i, xe), _.set(i, 0), C.set(i, 0), l.set(i, 0), Q.set(i, 0), ee.set(i, Me);
      }, u = t.story_h, d = Math.max(1, Math.round(t.mesh_density)), b = 6 * d, w = 2 * d, Z = d + 1, E = [];
      for (let e = 0; e <= b; e++) {
        const o = -u / 2 + e * u / b, a = [];
        for (let r = 0; r <= w; r++) {
          const c = -t.bf_col / 2 + r * t.bf_col / w;
          a.push(p(+t.d_col / 2, c, o));
        }
        E.push(a);
      }
      for (let e = 0; e < b; e++) for (let o = 0; o < w; o++) v(E[e][o], E[e][o + 1], E[e + 1][o + 1], E[e + 1][o], t.tf_col);
      const N = [];
      for (let e = 0; e <= b; e++) {
        const o = -u / 2 + e * u / b, a = [];
        for (let r = 0; r <= w; r++) {
          const c = -t.bf_col / 2 + r * t.bf_col / w;
          a.push(p(-t.d_col / 2, c, o));
        }
        N.push(a);
      }
      for (let e = 0; e < b; e++) for (let o = 0; o < w; o++) v(N[e][o], N[e][o + 1], N[e + 1][o + 1], N[e + 1][o], t.tf_col);
      const A = [];
      for (let e = 0; e <= b; e++) {
        const o = -u / 2 + e * u / b, a = [];
        for (let r = 0; r <= Z; r++) {
          const c = -t.d_col / 2 + t.tf_col + (t.d_col - 2 * t.tf_col) * (r / Z);
          a.push(p(c, 0, o));
        }
        A.push(a);
      }
      for (let e = 0; e < b; e++) for (let o = 0; o < Z; o++) v(A[e][o], A[e][o + 1], A[e + 1][o + 1], A[e + 1][o], t.tw_col);
      const X = t.d_col / 2, h = t.a_rbs * t.bf_beam, M = h + t.b_rbs * t.d_beam, te = (h + M) / 2, B = t.c_rbs * t.bf_beam, oe = t.b_rbs * t.d_beam, j = (4 * B * B + oe * oe) / (8 * B), ae = (e) => {
        if (e < h || e > M) return t.bf_beam;
        const o = e - te, a = Math.sqrt(Math.max(0, j * j - o * o)) - (j - B);
        return t.bf_beam - 2 * Math.max(0, a);
      }, S = [
        0
      ], se = 2 * d;
      for (let e = 1; e <= se; e++) S.push(h * e / se);
      const ne = 8 * d + 4;
      for (let e = 1; e < ne; e++) S.push(h + (M - h) * e / ne);
      S.push(M);
      const le = 5 * d;
      for (let e = 1; e <= le; e++) S.push(M + (t.L_beam - M) * e / le);
      S.sort((e, o) => e - o);
      const x = [];
      for (const e of S) (x.length === 0 || x[x.length - 1] < e - 1e-6) && x.push(e);
      const g = [], $ = [], R = [], I = 2 * d, k = 2 * d;
      for (const e of x) {
        const o = ae(e), a = X + e, r = [], c = [];
        for (let y = 0; y <= I; y++) {
          const T = -o / 2 + y * o / I;
          r.push(p(a, T, +t.d_beam / 2)), c.push(p(a, T, -t.d_beam / 2));
        }
        g.push(r), $.push(c);
        const i = [];
        for (let y = 0; y <= k; y++) {
          const T = -t.d_beam / 2 + t.tf_beam + (t.d_beam - 2 * t.tf_beam) * (y / k);
          i.push(p(a, 0, T));
        }
        R.push(i);
      }
      for (let e = 0; e < x.length - 1; e++) {
        for (let o = 0; o < I; o++) v(g[e][o], g[e][o + 1], g[e + 1][o + 1], g[e + 1][o], t.tf_beam), v($[e][o], $[e][o + 1], $[e + 1][o + 1], $[e + 1][o], t.tf_beam);
        for (let o = 0; o < k; o++) v(R[e][o], R[e][o + 1], R[e + 1][o + 1], R[e + 1][o], t.tw_beam);
      }
      const f = /* @__PURE__ */ new Map(), q = 0;
      for (let e = 0; e <= I; e++) f.set(g[q][e], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), f.set($[q][e], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let e = 0; e <= k; e++) f.set(R[q][e], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let e = 0; e < s.length; e++) {
        const o = s[e][2], a = Math.abs(s[e][0]) > t.d_col / 2 - 1e-4 - 1e-6 || Math.abs(s[e][1]) < 1e-6;
        Math.abs(Math.abs(o) - u / 2) < 1e-4 && a && s[e][0] <= t.d_col / 2 + 1e-4 && (f.has(e) || f.set(e, [
          true,
          true,
          true,
          true,
          true,
          true
        ]));
      }
      const ge = t.bf_beam * (1 - 2 * t.c_rbs) * t.tf_beam * (t.d_beam - t.tf_beam), ye = t.Fy * ge, Fe = t.L_beam - t.a_rbs * t.bf_beam - t.b_rbs * t.d_beam / 2, pe = t.load_factor * ye / Math.max(Fe, 0.5), P = /* @__PURE__ */ new Map(), ve = x.length - 1, we = pe / (I + 1);
      for (let e = 0; e <= I; e++) P.set(g[ve][e], [
        0,
        0,
        -we,
        0,
        0,
        0
      ]);
      n.nodes.val = s, n.elements.val = m, n.nodeInputs.val = {
        supports: f,
        loads: P
      }, n.elementInputs.val = {
        thicknesses: Y,
        elasticities: L,
        poissonsRatios: z,
        densities: F,
        areas: _,
        momentsOfInertiaY: C,
        momentsOfInertiaZ: l,
        torsionalConstants: Q,
        shearModuli: ee
      };
      try {
        if (t.use_nonlinear > 0.5) {
          const e = Ye({
            nodes: s,
            elements: m,
            nodeInputs: {
              supports: f,
              loads: P
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
          const e = Ne(s, m, {
            supports: f,
            loads: P
          }, n.elementInputs.val);
          n.deformOutputs.val = e;
          const o = Ee(s, m, n.elementInputs.val, e);
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
      const O = [], re = X + te, ie = Math.min(t.bf_beam, t.d_beam) * 0.28, Se = new Be(ie, 20, 16), $e = new ue({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), ce = new he(Se, $e);
      ce.position.set(re, 0, 0), O.push(ce);
      const Re = new ke(ie * 1.25, 0.015, 12, 32), Ie = new ue({
        color: 16755200,
        emissive: 4465152
      }), J = new he(Re, Ie);
      J.position.set(re, 0, 0), J.rotation.y = Math.PI / 2, O.push(J);
      const me = (e) => {
        const o = ae(e), a = X + e, r = [
          new G(a, -o / 2, +t.d_beam / 2 + 5e-3),
          new G(a, +o / 2, +t.d_beam / 2 + 5e-3),
          new G(a, +o / 2, -t.d_beam / 2 - 5e-3),
          new G(a, -o / 2, -t.d_beam / 2 - 5e-3),
          new G(a, -o / 2, +t.d_beam / 2 + 5e-3)
        ], c = new Pe().setFromPoints(r), i = new Ve({
          color: 16776960
        });
        return new De(c, i);
      };
      O.push(me(h)), O.push(me(M)), n.objects3D.val = O;
      const V = t.classification < 0.5 ? 0.02 : t.classification < 1.5 ? 0.04 : 0.06, Le = Ae(t.story_h, Math.round(t.steps_per_cycle), V), ze = t.b_rbs * t.d_beam, Ce = t.d_beam / 2 / ze, be = {
        Fy: t.Fy,
        E: t.E_steel,
        b: t.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, de = t.bf_beam * (1 - 2 * t.c_rbs), fe = de * t.tf_beam * (t.d_beam - t.tf_beam), U = t.Fy * fe, D = [], H = [];
      let W = Ge(be);
      for (const e of Le) {
        const o = e * Ce;
        W = Oe(o, W, be), D.push(e), H.push(W.sigma * fe);
      }
      n.__rbsHistory = {
        theta: D,
        M: H,
        Mp: U,
        targetDrift: V,
        classification: t.classification < 0.5 ? "IMF" : t.classification < 1.5 ? "SMF" : "Extended"
      };
      let K = 0;
      for (let e = 0; e < D.length; e++) Math.abs(D[e] - V) < 5e-3 && Math.abs(H[e]) > Math.abs(K) && (K = H[e]);
      const _e = Math.abs(K) / U;
      console.log(`[RBS AISC 358-22] Shells=${m.length}, Nodos=${s.length}
  bf_rbs=${de.toFixed(3)}m, Mp_rbs=${U.toFixed(1)} kN\xB7m
  M@${(V * 100).toFixed(1)}%=${K.toFixed(1)} kN\xB7m \xB7 Ratio=${_e.toFixed(3)} \u2192 ${_e >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(t, n) {
      const s = n.__rbsHistory;
      if (!s) return {
        Status: "\u2014"
      };
      const m = t.bf_beam * (1 - 2 * t.c_rbs), Y = m * t.tf_beam * (t.d_beam - t.tf_beam), L = s.Mp, z = s.targetDrift;
      let F = 0;
      for (const l of s.M) Math.abs(l) > Math.abs(F) && (F = l);
      let _ = 0;
      for (let l = 0; l < s.theta.length; l++) Math.abs(s.theta[l] - z) < 5e-3 && Math.abs(s.M[l]) > Math.abs(_) && (_ = s.M[l]);
      const C = Math.abs(_) / L;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": s.classification,
        "Target drift \u03B8": `${(z * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(t.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(m * 1e3).toFixed(0)} mm (-${(t.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(t.a_rbs * t.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(t.b_rbs * t.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(t.c_rbs * t.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(Y * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${L.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(F).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(_).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${C.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${C >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${s.classification}`,
        "Data points generados": `${s.theta.length}`,
        ...(() => {
          const l = n.__nlInfo;
          return l ? {
            "\u2500\u2500 Solver FEM shells (NO-LINEAL J2) \u2500\u2500": "",
            "Iteraciones NL": `${l.iterations}${l.converged ? " \u2713 convergi\xF3" : " \u2717 max-iter"}`,
            "Elementos plastificados": `${l.elementsYielded}`,
            "Max \u03C3/Fy (lineal inicial)": l.maxRatio.toFixed(2),
            Interpretaci\u00F3n: l.elementsYielded > 0 ? `${l.elementsYielded} shells fluyeron \u2192 redistribuci\xF3n` : "Rango el\xE1stico (sin plastificar)"
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
  qe as c
};
