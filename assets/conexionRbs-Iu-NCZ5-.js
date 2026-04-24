import { __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as we, m as Fe, i as ye } from "./menegottoPinto-B-C2cxus.js";
import { S as Se, M as ce, b as re, T as pe, V as A, B as $e, L as Re, a as ze } from "./Text-C52Bkp-N.js";
let Ae;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  Ae = {
    id: "conexion-rbs",
    name: "Conexi\xF3n RBS (AISC 358-22 \xB7 Protocolo K3)",
    category: "Conexiones",
    hasModal: false,
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
      }
    },
    build(t, i) {
      const s = [], f = [], G = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), be = t.E_steel / 2.6, me = 77, c = (e, o, a) => (s.push([
        e,
        o,
        a
      ]), s.length - 1), x = (e, o, a, r, m) => {
        f.push([
          e,
          o,
          a,
          r
        ]);
        const n = f.length - 1;
        G.set(n, m), F.set(n, t.E_steel), y.set(n, 0.3), M.set(n, me), _.set(n, 0), S.set(n, 0), l.set(n, 0), Z.set(n, 0), j.set(n, be);
      }, d = t.story_h, b = 8, p = [];
      for (let e = 0; e <= b; e++) {
        const o = -d / 2 + e * d / b;
        p.push([
          c(+t.d_col / 2, -t.bf_col / 2, o),
          c(+t.d_col / 2, +t.bf_col / 2, o)
        ]);
      }
      for (let e = 0; e < b; e++) x(p[e][0], p[e][1], p[e + 1][1], p[e + 1][0], t.tf_col);
      const $ = [];
      for (let e = 0; e <= b; e++) {
        const o = -d / 2 + e * d / b;
        $.push([
          c(-t.d_col / 2, -t.bf_col / 2, o),
          c(-t.d_col / 2, +t.bf_col / 2, o)
        ]);
      }
      for (let e = 0; e < b; e++) x($[e][0], $[e][1], $[e + 1][1], $[e + 1][0], t.tf_col);
      const V = 2, R = [];
      for (let e = 0; e <= b; e++) {
        const o = -d / 2 + e * d / b, a = [];
        for (let r = 0; r <= V; r++) {
          const m = -t.d_col / 2 + t.tf_col + (t.d_col - 2 * t.tf_col) * (r / V);
          a.push(c(m, 0, o));
        }
        R.push(a);
      }
      for (let e = 0; e < b; e++) for (let o = 0; o < V; o++) x(R[e][o], R[e][o + 1], R[e + 1][o + 1], R[e + 1][o], t.tw_col);
      const H = t.d_col / 2, h = t.a_rbs * t.bf_beam, u = h + t.b_rbs * t.d_beam, q = (h + u) / 2, B = t.c_rbs * t.bf_beam, U = t.b_rbs * t.d_beam, K = (4 * B * B + U * U) / (8 * B), W = (e) => {
        if (e < h || e > u) return t.bf_beam;
        const o = e - q, a = Math.sqrt(Math.max(0, K * K - o * o)) - (K - B);
        return t.bf_beam - 2 * Math.max(0, a);
      }, g = [
        0
      ], Y = 2;
      for (let e = 1; e <= Y; e++) g.push(h * e / Y);
      const J = 14;
      for (let e = 1; e < J; e++) g.push(h + (u - h) * e / J);
      g.push(u);
      const Q = 8;
      for (let e = 1; e <= Q; e++) g.push(u + (t.L_beam - u) * e / Q);
      g.sort((e, o) => e - o);
      const w = [];
      for (const e of g) (w.length === 0 || w[w.length - 1] < e - 1e-6) && w.push(e);
      const z = [], L = [], v = [], P = 2;
      for (const e of w) {
        const o = W(e), a = H + e;
        z.push([
          c(a, -o / 2, +t.d_beam / 2),
          c(a, +o / 2, +t.d_beam / 2)
        ]), L.push([
          c(a, -o / 2, -t.d_beam / 2),
          c(a, +o / 2, -t.d_beam / 2)
        ]);
        const r = [];
        for (let m = 0; m <= P; m++) {
          const n = -t.d_beam / 2 + t.tf_beam + (t.d_beam - 2 * t.tf_beam) * (m / P);
          r.push(c(a, 0, n));
        }
        v.push(r);
      }
      for (let e = 0; e < w.length - 1; e++) {
        x(z[e][0], z[e][1], z[e + 1][1], z[e + 1][0], t.tf_beam), x(L[e][0], L[e][1], L[e + 1][1], L[e + 1][0], t.tf_beam);
        for (let o = 0; o < P; o++) x(v[e][o], v[e][o + 1], v[e + 1][o + 1], v[e + 1][o], t.tw_beam);
      }
      const X = /* @__PURE__ */ new Map();
      for (let e = 0; e < s.length; e++) Math.abs(s[e][2] - -d / 2) < 1e-4 && X.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const fe = /* @__PURE__ */ new Map();
      i.nodes.val = s, i.elements.val = f, i.nodeInputs.val = {
        supports: X,
        loads: fe
      }, i.elementInputs.val = {
        thicknesses: G,
        elasticities: F,
        poissonsRatios: y,
        densities: M,
        areas: _,
        momentsOfInertiaY: S,
        momentsOfInertiaZ: l,
        torsionalConstants: Z,
        shearModuli: j
      }, i.deformOutputs.val = {}, i.analyzeOutputs.val = {};
      const C = [], ee = H + q, te = Math.min(t.bf_beam, t.d_beam) * 0.28, _e = new Se(te, 20, 16), de = new ce({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), oe = new re(_e, de);
      oe.position.set(ee, 0, 0), C.push(oe);
      const he = new pe(te * 1.25, 0.015, 12, 32), ue = new ce({
        color: 16755200,
        emissive: 4465152
      }), D = new re(he, ue);
      D.position.set(ee, 0, 0), D.rotation.y = Math.PI / 2, C.push(D);
      const ae = (e) => {
        const o = W(e), a = H + e, r = [
          new A(a, -o / 2, +t.d_beam / 2 + 5e-3),
          new A(a, +o / 2, +t.d_beam / 2 + 5e-3),
          new A(a, +o / 2, -t.d_beam / 2 - 5e-3),
          new A(a, -o / 2, -t.d_beam / 2 - 5e-3),
          new A(a, -o / 2, +t.d_beam / 2 + 5e-3)
        ], m = new $e().setFromPoints(r), n = new Re({
          color: 16776960
        });
        return new ze(m, n);
      };
      C.push(ae(h)), C.push(ae(u)), i.objects3D.val = C;
      const E = t.classification < 0.5 ? 0.02 : t.classification < 1.5 ? 0.04 : 0.06, Me = we(t.story_h, Math.round(t.steps_per_cycle), E), xe = t.b_rbs * t.d_beam, ge = t.d_beam / 2 / xe, se = {
        Fy: t.Fy,
        E: t.E_steel,
        b: t.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, ne = t.bf_beam * (1 - 2 * t.c_rbs), le = ne * t.tf_beam * (t.d_beam - t.tf_beam), O = t.Fy * le, I = [], k = [];
      let T = ye(se);
      for (const e of Me) {
        const o = e * ge;
        T = Fe(o, T, se), I.push(e), k.push(T.sigma * le);
      }
      i.__rbsHistory = {
        theta: I,
        M: k,
        Mp: O,
        targetDrift: E,
        classification: t.classification < 0.5 ? "IMF" : t.classification < 1.5 ? "SMF" : "Extended"
      };
      let N = 0;
      for (let e = 0; e < I.length; e++) Math.abs(I[e] - E) < 5e-3 && Math.abs(k[e]) > Math.abs(N) && (N = k[e]);
      const ie = Math.abs(N) / O;
      console.log(`[RBS AISC 358-22] Shells=${f.length}, Nodos=${s.length}
  bf_rbs=${ne.toFixed(3)}m, Mp_rbs=${O.toFixed(1)} kN\xB7m
  M@${(E * 100).toFixed(1)}%=${N.toFixed(1)} kN\xB7m \xB7 Ratio=${ie.toFixed(3)} \u2192 ${ie >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(t, i) {
      const s = i.__rbsHistory;
      if (!s) return {
        Status: "\u2014"
      };
      const f = t.bf_beam * (1 - 2 * t.c_rbs), G = f * t.tf_beam * (t.d_beam - t.tf_beam), F = s.Mp, y = s.targetDrift;
      let M = 0;
      for (const l of s.M) Math.abs(l) > Math.abs(M) && (M = l);
      let _ = 0;
      for (let l = 0; l < s.theta.length; l++) Math.abs(s.theta[l] - y) < 5e-3 && Math.abs(s.M[l]) > Math.abs(_) && (_ = s.M[l]);
      const S = Math.abs(_) / F;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": s.classification,
        "Target drift \u03B8": `${(y * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(t.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(f * 1e3).toFixed(0)} mm (-${(t.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(t.a_rbs * t.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(t.b_rbs * t.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(t.c_rbs * t.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(G * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${F.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(M).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(_).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${S.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${S >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${s.classification}`,
        "Data points generados": `${s.theta.length}`
      };
    }
  };
});
export {
  __tla,
  Ae as c
};
