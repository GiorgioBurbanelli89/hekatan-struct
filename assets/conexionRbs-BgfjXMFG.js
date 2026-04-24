import { a as Ge } from "./analyze-ClLKGn9k.js";
import { d as Ie, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as Be, m as Ee, i as ke } from "./menegottoPinto-B-C2cxus.js";
import { S as Ne, M as de, b as he, T as Oe, V as E, B as Te, L as Ve, a as De } from "./Text-C52Bkp-N.js";
let Xe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  Xe = {
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
      }
    },
    build(t, l) {
      const a = [], b = [], k = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ue = t.E_steel / 2.6, Me = 77, y = (e, o, s) => (a.push([
        e,
        o,
        s
      ]), a.length - 1), w = (e, o, s, n, i) => {
        b.push([
          e,
          o,
          s,
          n
        ]);
        const r = b.length - 1;
        k.set(r, i), v.set(r, t.E_steel), $.set(r, 0.3), g.set(r, Me), _.set(r, 0), R.set(r, 0), c.set(r, 0), J.set(r, 0), Q.set(r, ue);
      }, d = t.story_h, f = Math.max(1, Math.round(t.mesh_density)), m = 6 * f, p = 2 * f, K = f + 1, z = [];
      for (let e = 0; e <= m; e++) {
        const o = -d / 2 + e * d / m, s = [];
        for (let n = 0; n <= p; n++) {
          const i = -t.bf_col / 2 + n * t.bf_col / p;
          s.push(y(+t.d_col / 2, i, o));
        }
        z.push(s);
      }
      for (let e = 0; e < m; e++) for (let o = 0; o < p; o++) w(z[e][o], z[e][o + 1], z[e + 1][o + 1], z[e + 1][o], t.tf_col);
      const C = [];
      for (let e = 0; e <= m; e++) {
        const o = -d / 2 + e * d / m, s = [];
        for (let n = 0; n <= p; n++) {
          const i = -t.bf_col / 2 + n * t.bf_col / p;
          s.push(y(-t.d_col / 2, i, o));
        }
        C.push(s);
      }
      for (let e = 0; e < m; e++) for (let o = 0; o < p; o++) w(C[e][o], C[e][o + 1], C[e + 1][o + 1], C[e + 1][o], t.tf_col);
      const L = [];
      for (let e = 0; e <= m; e++) {
        const o = -d / 2 + e * d / m, s = [];
        for (let n = 0; n <= K; n++) {
          const i = -t.d_col / 2 + t.tf_col + (t.d_col - 2 * t.tf_col) * (n / K);
          s.push(y(i, 0, o));
        }
        L.push(s);
      }
      for (let e = 0; e < m; e++) for (let o = 0; o < K; o++) w(L[e][o], L[e][o + 1], L[e + 1][o + 1], L[e + 1][o], t.tw_col);
      const P = t.d_col / 2, h = t.a_rbs * t.bf_beam, u = h + t.b_rbs * t.d_beam, ee = (h + u) / 2, N = t.c_rbs * t.bf_beam, te = t.b_rbs * t.d_beam, Y = (4 * N * N + te * te) / (8 * N), oe = (e) => {
        if (e < h || e > u) return t.bf_beam;
        const o = e - ee, s = Math.sqrt(Math.max(0, Y * Y - o * o)) - (Y - N);
        return t.bf_beam - 2 * Math.max(0, s);
      }, F = [
        0
      ], se = 2 * f;
      for (let e = 1; e <= se; e++) F.push(h * e / se);
      const ae = 8 * f + 4;
      for (let e = 1; e < ae; e++) F.push(h + (u - h) * e / ae);
      F.push(u);
      const ne = 5 * f;
      for (let e = 1; e <= ne; e++) F.push(u + (t.L_beam - u) * e / ne);
      F.sort((e, o) => e - o);
      const M = [];
      for (const e of F) (M.length === 0 || M[M.length - 1] < e - 1e-6) && M.push(e);
      const S = [], A = [], G = [], I = 2 * f, Z = 2 * f;
      for (const e of M) {
        const o = oe(e), s = P + e, n = [], i = [];
        for (let x = 0; x <= I; x++) {
          const H = -o / 2 + x * o / I;
          n.push(y(s, H, +t.d_beam / 2)), i.push(y(s, H, -t.d_beam / 2));
        }
        S.push(n), A.push(i);
        const r = [];
        for (let x = 0; x <= Z; x++) {
          const H = -t.d_beam / 2 + t.tf_beam + (t.d_beam - 2 * t.tf_beam) * (x / Z);
          r.push(y(s, 0, H));
        }
        G.push(r);
      }
      for (let e = 0; e < M.length - 1; e++) {
        for (let o = 0; o < I; o++) w(S[e][o], S[e][o + 1], S[e + 1][o + 1], S[e + 1][o], t.tf_beam), w(A[e][o], A[e][o + 1], A[e + 1][o + 1], A[e + 1][o], t.tf_beam);
        for (let o = 0; o < Z; o++) w(G[e][o], G[e][o + 1], G[e + 1][o + 1], G[e + 1][o], t.tw_beam);
      }
      const X = /* @__PURE__ */ new Map();
      for (let e = 0; e < a.length; e++) {
        const o = Math.abs(Math.abs(a[e][2]) - d / 2) < 1e-4, s = Math.abs(Math.abs(a[e][0]) - t.d_col / 2) < 1e-4 || Math.abs(a[e][1]) < 1e-6 && Math.abs(a[e][0]) < t.d_col / 2 + 1e-4;
        o && s && X.set(e, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const xe = t.bf_beam * (1 - 2 * t.c_rbs) * t.tf_beam * (t.d_beam - t.tf_beam), ge = t.Fy * xe, ye = t.L_beam - t.a_rbs * t.bf_beam - t.b_rbs * t.d_beam / 2, we = 0.8 * ge / Math.max(ye, 0.5), j = /* @__PURE__ */ new Map(), pe = M.length - 1, Fe = I + 1, Se = we / Fe;
      for (let e = 0; e <= I; e++) j.set(S[pe][e], [
        0,
        0,
        -Se,
        0,
        0,
        0
      ]);
      l.nodes.val = a, l.elements.val = b, l.nodeInputs.val = {
        supports: X,
        loads: j
      }, l.elementInputs.val = {
        thicknesses: k,
        elasticities: v,
        poissonsRatios: $,
        densities: g,
        areas: _,
        momentsOfInertiaY: R,
        momentsOfInertiaZ: c,
        torsionalConstants: J,
        shearModuli: Q
      };
      try {
        l.deformOutputs.val = Ie(a, b, {
          supports: X,
          loads: j
        }, l.elementInputs.val), l.analyzeOutputs.val = Ge(a, b, l.elementInputs.val, l.deformOutputs.val);
      } catch (e) {
        console.error("[conexion-rbs] solver error:", (e == null ? void 0 : e.message) || e), l.deformOutputs.val = {}, l.analyzeOutputs.val = {};
      }
      const B = [], le = P + ee, re = Math.min(t.bf_beam, t.d_beam) * 0.28, ve = new Ne(re, 20, 16), $e = new de({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), ie = new he(ve, $e);
      ie.position.set(le, 0, 0), B.push(ie);
      const Re = new Oe(re * 1.25, 0.015, 12, 32), ze = new de({
        color: 16755200,
        emissive: 4465152
      }), q = new he(Re, ze);
      q.position.set(le, 0, 0), q.rotation.y = Math.PI / 2, B.push(q);
      const ce = (e) => {
        const o = oe(e), s = P + e, n = [
          new E(s, -o / 2, +t.d_beam / 2 + 5e-3),
          new E(s, +o / 2, +t.d_beam / 2 + 5e-3),
          new E(s, +o / 2, -t.d_beam / 2 - 5e-3),
          new E(s, -o / 2, -t.d_beam / 2 - 5e-3),
          new E(s, -o / 2, +t.d_beam / 2 + 5e-3)
        ], i = new Te().setFromPoints(n), r = new Ve({
          color: 16776960
        });
        return new De(i, r);
      };
      B.push(ce(h)), B.push(ce(u)), l.objects3D.val = B;
      const O = t.classification < 0.5 ? 0.02 : t.classification < 1.5 ? 0.04 : 0.06, Ce = Be(t.story_h, Math.round(t.steps_per_cycle), O), Le = t.b_rbs * t.d_beam, Ae = t.d_beam / 2 / Le, be = {
        Fy: t.Fy,
        E: t.E_steel,
        b: t.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, me = t.bf_beam * (1 - 2 * t.c_rbs), fe = me * t.tf_beam * (t.d_beam - t.tf_beam), U = t.Fy * fe, T = [], V = [];
      let W = ke(be);
      for (const e of Ce) {
        const o = e * Ae;
        W = Ee(o, W, be), T.push(e), V.push(W.sigma * fe);
      }
      l.__rbsHistory = {
        theta: T,
        M: V,
        Mp: U,
        targetDrift: O,
        classification: t.classification < 0.5 ? "IMF" : t.classification < 1.5 ? "SMF" : "Extended"
      };
      let D = 0;
      for (let e = 0; e < T.length; e++) Math.abs(T[e] - O) < 5e-3 && Math.abs(V[e]) > Math.abs(D) && (D = V[e]);
      const _e = Math.abs(D) / U;
      console.log(`[RBS AISC 358-22] Shells=${b.length}, Nodos=${a.length}
  bf_rbs=${me.toFixed(3)}m, Mp_rbs=${U.toFixed(1)} kN\xB7m
  M@${(O * 100).toFixed(1)}%=${D.toFixed(1)} kN\xB7m \xB7 Ratio=${_e.toFixed(3)} \u2192 ${_e >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(t, l) {
      const a = l.__rbsHistory;
      if (!a) return {
        Status: "\u2014"
      };
      const b = t.bf_beam * (1 - 2 * t.c_rbs), k = b * t.tf_beam * (t.d_beam - t.tf_beam), v = a.Mp, $ = a.targetDrift;
      let g = 0;
      for (const c of a.M) Math.abs(c) > Math.abs(g) && (g = c);
      let _ = 0;
      for (let c = 0; c < a.theta.length; c++) Math.abs(a.theta[c] - $) < 5e-3 && Math.abs(a.M[c]) > Math.abs(_) && (_ = a.M[c]);
      const R = Math.abs(_) / v;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": a.classification,
        "Target drift \u03B8": `${($ * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(t.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(b * 1e3).toFixed(0)} mm (-${(t.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(t.a_rbs * t.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(t.b_rbs * t.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(t.c_rbs * t.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(k * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${v.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(g).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(_).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${R.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${R >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${a.classification}`,
        "Data points generados": `${a.theta.length}`
      };
    }
  };
});
export {
  __tla,
  Xe as c
};
