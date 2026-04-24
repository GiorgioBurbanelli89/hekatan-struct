import { a as Ae } from "./analyze-ClLKGn9k.js";
import { d as Ge, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as Ie, m as Be, i as Ee } from "./menegottoPinto-B-C2cxus.js";
import { S as Oe, M as ue, b as he, T as Ne, V as E, B as Ke, L as Ve, a as De } from "./Text-C52Bkp-N.js";
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
      const a = [], b = [], O = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Me = t.E_steel / 2.6, xe = 77, F = (e, o, s) => (a.push([
        e,
        o,
        s
      ]), a.length - 1), p = (e, o, s, n, i) => {
        b.push([
          e,
          o,
          s,
          n
        ]);
        const r = b.length - 1;
        O.set(r, i), C.set(r, t.E_steel), L.set(r, 0.3), w.set(r, xe), d.set(r, 0), k.set(r, 0), c.set(r, 0), Q.set(r, 0), ee.set(r, Me);
      }, u = t.story_h, f = Math.max(1, Math.round(t.mesh_density)), m = 6 * f, S = 2 * f, T = f + 1, A = [];
      for (let e = 0; e <= m; e++) {
        const o = -u / 2 + e * u / m, s = [];
        for (let n = 0; n <= S; n++) {
          const i = -t.bf_col / 2 + n * t.bf_col / S;
          s.push(F(+t.d_col / 2, i, o));
        }
        A.push(s);
      }
      for (let e = 0; e < m; e++) for (let o = 0; o < S; o++) p(A[e][o], A[e][o + 1], A[e + 1][o + 1], A[e + 1][o], t.tf_col);
      const G = [];
      for (let e = 0; e <= m; e++) {
        const o = -u / 2 + e * u / m, s = [];
        for (let n = 0; n <= S; n++) {
          const i = -t.bf_col / 2 + n * t.bf_col / S;
          s.push(F(-t.d_col / 2, i, o));
        }
        G.push(s);
      }
      for (let e = 0; e < m; e++) for (let o = 0; o < S; o++) p(G[e][o], G[e][o + 1], G[e + 1][o + 1], G[e + 1][o], t.tf_col);
      const I = [];
      for (let e = 0; e <= m; e++) {
        const o = -u / 2 + e * u / m, s = [];
        for (let n = 0; n <= T; n++) {
          const i = -t.d_col / 2 + t.tf_col + (t.d_col - 2 * t.tf_col) * (n / T);
          s.push(F(i, 0, o));
        }
        I.push(s);
      }
      for (let e = 0; e < m; e++) for (let o = 0; o < T; o++) p(I[e][o], I[e][o + 1], I[e + 1][o + 1], I[e + 1][o], t.tw_col);
      const X = t.d_col / 2, h = t.a_rbs * t.bf_beam, M = h + t.b_rbs * t.d_beam, te = (h + M) / 2, N = t.c_rbs * t.bf_beam, oe = t.b_rbs * t.d_beam, j = (4 * N * N + oe * oe) / (8 * N), se = (e) => {
        if (e < h || e > M) return t.bf_beam;
        const o = e - te, s = Math.sqrt(Math.max(0, j * j - o * o)) - (j - N);
        return t.bf_beam - 2 * Math.max(0, s);
      }, v = [
        0
      ], ae = 2 * f;
      for (let e = 1; e <= ae; e++) v.push(h * e / ae);
      const ne = 8 * f + 4;
      for (let e = 1; e < ne; e++) v.push(h + (M - h) * e / ne);
      v.push(M);
      const le = 5 * f;
      for (let e = 1; e <= le; e++) v.push(M + (t.L_beam - M) * e / le);
      v.sort((e, o) => e - o);
      const x = [];
      for (const e of v) (x.length === 0 || x[x.length - 1] < e - 1e-6) && x.push(e);
      const g = [], R = [], $ = [], z = 2 * f, K = 2 * f;
      for (const e of x) {
        const o = se(e), s = X + e, n = [], i = [];
        for (let y = 0; y <= z; y++) {
          const Z = -o / 2 + y * o / z;
          n.push(F(s, Z, +t.d_beam / 2)), i.push(F(s, Z, -t.d_beam / 2));
        }
        g.push(n), R.push(i);
        const r = [];
        for (let y = 0; y <= K; y++) {
          const Z = -t.d_beam / 2 + t.tf_beam + (t.d_beam - 2 * t.tf_beam) * (y / K);
          r.push(F(s, 0, Z));
        }
        $.push(r);
      }
      for (let e = 0; e < x.length - 1; e++) {
        for (let o = 0; o < z; o++) p(g[e][o], g[e][o + 1], g[e + 1][o + 1], g[e + 1][o], t.tf_beam), p(R[e][o], R[e][o + 1], R[e + 1][o + 1], R[e + 1][o], t.tf_beam);
        for (let o = 0; o < K; o++) p($[e][o], $[e][o + 1], $[e + 1][o + 1], $[e + 1][o], t.tw_beam);
      }
      const _ = /* @__PURE__ */ new Map(), q = 0;
      for (let e = 0; e <= z; e++) _.set(g[q][e], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), _.set(R[q][e], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let e = 0; e <= K; e++) _.set($[q][e], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let e = 0; e < a.length; e++) {
        const o = a[e][2], s = Math.abs(a[e][0]) > t.d_col / 2 - 1e-4 - 1e-6 || Math.abs(a[e][1]) < 1e-6;
        Math.abs(Math.abs(o) - u / 2) < 1e-4 && s && a[e][0] <= t.d_col / 2 + 1e-4 && (_.has(e) || _.set(e, [
          true,
          true,
          true,
          true,
          true,
          true
        ]));
      }
      const ge = t.bf_beam * (1 - 2 * t.c_rbs) * t.tf_beam * (t.d_beam - t.tf_beam), ye = t.Fy * ge, we = t.L_beam - t.a_rbs * t.bf_beam - t.b_rbs * t.d_beam / 2, Fe = 0.45 * ye / Math.max(we, 0.5), V = /* @__PURE__ */ new Map(), pe = x.length - 1, Se = Fe / (z + 1);
      for (let e = 0; e <= z; e++) V.set(g[pe][e], [
        0,
        0,
        -Se,
        0,
        0,
        0
      ]);
      l.nodes.val = a, l.elements.val = b, l.nodeInputs.val = {
        supports: _,
        loads: V
      }, l.elementInputs.val = {
        thicknesses: O,
        elasticities: C,
        poissonsRatios: L,
        densities: w,
        areas: d,
        momentsOfInertiaY: k,
        momentsOfInertiaZ: c,
        torsionalConstants: Q,
        shearModuli: ee
      }, console.log("[conexion-rbs] Running deform() with", a.length, "nodes,", b.length, "shells,", _.size, "supports,", V.size, "loads");
      try {
        const e = Ge(a, b, {
          supports: _,
          loads: V
        }, l.elementInputs.val);
        console.log("[conexion-rbs] deform() OK \u2192 deformations keys:", e.deformations ? [
          ...e.deformations.keys()
        ].slice(0, 3) : "none"), l.deformOutputs.val = e;
        const o = Ae(a, b, l.elementInputs.val, e);
        o.colorMapRanges = {
          ...o.colorMapRanges,
          vonMises: [
            0,
            t.Fy
          ]
        }, console.log("[conexion-rbs] analyze() OK \u2192 vonMises keys:", o.vonMises ? [
          ...o.vonMises.keys()
        ].slice(0, 3) : "none"), l.analyzeOutputs.val = o;
      } catch (e) {
        console.error("[conexion-rbs] solver error:", (e == null ? void 0 : e.message) || e, e), l.deformOutputs.val = {}, l.analyzeOutputs.val = {};
      }
      const B = [], re = X + te, ie = Math.min(t.bf_beam, t.d_beam) * 0.28, ve = new Oe(ie, 20, 16), Re = new ue({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), ce = new he(ve, Re);
      ce.position.set(re, 0, 0), B.push(ce);
      const $e = new Ne(ie * 1.25, 0.015, 12, 32), ze = new ue({
        color: 16755200,
        emissive: 4465152
      }), U = new he($e, ze);
      U.position.set(re, 0, 0), U.rotation.y = Math.PI / 2, B.push(U);
      const be = (e) => {
        const o = se(e), s = X + e, n = [
          new E(s, -o / 2, +t.d_beam / 2 + 5e-3),
          new E(s, +o / 2, +t.d_beam / 2 + 5e-3),
          new E(s, +o / 2, -t.d_beam / 2 - 5e-3),
          new E(s, -o / 2, -t.d_beam / 2 - 5e-3),
          new E(s, -o / 2, +t.d_beam / 2 + 5e-3)
        ], i = new Ke().setFromPoints(n), r = new Ve({
          color: 16776960
        });
        return new De(i, r);
      };
      B.push(be(h)), B.push(be(M)), l.objects3D.val = B;
      const D = t.classification < 0.5 ? 0.02 : t.classification < 1.5 ? 0.04 : 0.06, Ce = Ie(t.story_h, Math.round(t.steps_per_cycle), D), Le = t.b_rbs * t.d_beam, ke = t.d_beam / 2 / Le, me = {
        Fy: t.Fy,
        E: t.E_steel,
        b: t.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, fe = t.bf_beam * (1 - 2 * t.c_rbs), _e = fe * t.tf_beam * (t.d_beam - t.tf_beam), W = t.Fy * _e, H = [], P = [];
      let J = Ee(me);
      for (const e of Ce) {
        const o = e * ke;
        J = Be(o, J, me), H.push(e), P.push(J.sigma * _e);
      }
      l.__rbsHistory = {
        theta: H,
        M: P,
        Mp: W,
        targetDrift: D,
        classification: t.classification < 0.5 ? "IMF" : t.classification < 1.5 ? "SMF" : "Extended"
      };
      let Y = 0;
      for (let e = 0; e < H.length; e++) Math.abs(H[e] - D) < 5e-3 && Math.abs(P[e]) > Math.abs(Y) && (Y = P[e]);
      const de = Math.abs(Y) / W;
      console.log(`[RBS AISC 358-22] Shells=${b.length}, Nodos=${a.length}
  bf_rbs=${fe.toFixed(3)}m, Mp_rbs=${W.toFixed(1)} kN\xB7m
  M@${(D * 100).toFixed(1)}%=${Y.toFixed(1)} kN\xB7m \xB7 Ratio=${de.toFixed(3)} \u2192 ${de >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(t, l) {
      const a = l.__rbsHistory;
      if (!a) return {
        Status: "\u2014"
      };
      const b = t.bf_beam * (1 - 2 * t.c_rbs), O = b * t.tf_beam * (t.d_beam - t.tf_beam), C = a.Mp, L = a.targetDrift;
      let w = 0;
      for (const c of a.M) Math.abs(c) > Math.abs(w) && (w = c);
      let d = 0;
      for (let c = 0; c < a.theta.length; c++) Math.abs(a.theta[c] - L) < 5e-3 && Math.abs(a.M[c]) > Math.abs(d) && (d = a.M[c]);
      const k = Math.abs(d) / C;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": a.classification,
        "Target drift \u03B8": `${(L * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(t.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(b * 1e3).toFixed(0)} mm (-${(t.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(t.a_rbs * t.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(t.b_rbs * t.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(t.c_rbs * t.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(O * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${C.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(w).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(d).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${k.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${k >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${a.classification}`,
        "Data points generados": `${a.theta.length}`
      };
    }
  };
});
export {
  __tla,
  Xe as c
};
