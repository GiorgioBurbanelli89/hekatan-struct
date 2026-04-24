import { a as Ze } from "./analyze-ClLKGn9k.js";
import { d as je, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as qe, m as Ue, i as Qe } from "./menegottoPinto-B-C2cxus.js";
import { s as et, __tla as __tla_1 } from "./secantPlasticity-B1VMR3_i.js";
import { S as tt, M as k, b as G, T as Le, c as ce, V as J, B as ot, L as at, a as st } from "./Text-C52Bkp-N.js";
let mt;
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
  mt = {
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
    build(e, r) {
      const n = [], b = [], V = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), te = e.E_steel / 2.6, H = 77, z = 1e-4, W = /* @__PURE__ */ new Map(), h = (t, o, a) => {
        const s = Math.round(t / z), i = Math.round(o / z), c = Math.round(a / z), u = `${s},${i},${c}`;
        let x = W.get(u);
        return x === void 0 && (n.push([
          t,
          o,
          a
        ]), x = n.length - 1, W.set(u, x)), x;
      }, y = (t, o, a, s, i) => {
        b.push([
          t,
          o,
          a,
          s
        ]);
        const c = b.length - 1;
        V.set(c, i), R.set(c, e.E_steel), X.set(c, 0.3), I.set(c, H), g.set(c, 0), O.set(c, 0), l.set(c, 0), B.set(c, 0), w.set(c, te);
      }, _ = e.story_h, d = Math.max(1, Math.round(e.mesh_density)), m = 6 * d, E = 2 * d, oe = d + 1, de = +e.d_col / 2 - e.tf_col / 2, me = -e.d_col / 2 + e.tf_col / 2, be = me, Ce = de, Y = [];
      for (let t = 0; t <= m; t++) {
        const o = -_ / 2 + t * _ / m, a = [];
        for (let s = 0; s <= E; s++) {
          const i = -e.bf_col / 2 + s * e.bf_col / E;
          a.push(h(de, i, o));
        }
        Y.push(a);
      }
      for (let t = 0; t < m; t++) for (let o = 0; o < E; o++) y(Y[t][o], Y[t][o + 1], Y[t + 1][o + 1], Y[t + 1][o], e.tf_col);
      const D = [];
      for (let t = 0; t <= m; t++) {
        const o = -_ / 2 + t * _ / m, a = [];
        for (let s = 0; s <= E; s++) {
          const i = -e.bf_col / 2 + s * e.bf_col / E;
          a.push(h(me, i, o));
        }
        D.push(a);
      }
      for (let t = 0; t < m; t++) for (let o = 0; o < E; o++) y(D[t][o], D[t][o + 1], D[t + 1][o + 1], D[t + 1][o], e.tf_col);
      const T = [];
      for (let t = 0; t <= m; t++) {
        const o = -_ / 2 + t * _ / m, a = [];
        for (let s = 0; s <= oe; s++) {
          const i = be + (Ce - be) * (s / oe);
          a.push(h(i, 0, o));
        }
        T.push(a);
      }
      for (let t = 0; t < m; t++) for (let o = 0; o < oe; o++) y(T[t][o], T[t][o + 1], T[t + 1][o + 1], T[t + 1][o], e.tw_col);
      const F = e.d_col / 2, S = e.a_rbs * e.bf_beam, v = S + e.b_rbs * e.d_beam, _e = (S + v) / 2, K = e.c_rbs * e.bf_beam, fe = e.b_rbs * e.d_beam, ae = (4 * K * K + fe * fe) / (8 * K), ue = (t) => {
        if (t < S || t > v) return e.bf_beam;
        const o = t - _e, a = Math.sqrt(Math.max(0, ae * ae - o * o)) - (ae - K);
        return e.bf_beam - 2 * Math.max(0, a);
      }, L = [
        0
      ], he = 2 * d;
      for (let t = 1; t <= he; t++) L.push(S * t / he);
      const xe = 8 * d + 4;
      for (let t = 1; t < xe; t++) L.push(S + (v - S) * t / xe);
      L.push(v);
      const Me = 5 * d;
      for (let t = 1; t <= Me; t++) L.push(v + (e.L_beam - v) * t / Me);
      L.sort((t, o) => t - o);
      const p = [];
      for (const t of L) (p.length === 0 || p[p.length - 1] < t - 1e-6) && p.push(t);
      const ge = +e.d_beam / 2 - e.tf_beam / 2, se = -e.d_beam / 2 + e.tf_beam / 2, $ = [], C = [], N = [], P = 2 * d, Z = 2 * d;
      for (const t of p) {
        const o = ue(t), a = F + t, s = [], i = [];
        for (let u = 0; u <= P; u++) {
          const x = -o / 2 + u * o / P;
          s.push(h(a, x, ge)), i.push(h(a, x, se));
        }
        $.push(s), C.push(i);
        const c = [];
        for (let u = 0; u <= Z; u++) {
          const x = se + (ge - se) * (u / Z);
          c.push(h(a, 0, x));
        }
        N.push(c);
      }
      for (let t = 0; t < p.length - 1; t++) {
        for (let o = 0; o < P; o++) y($[t][o], $[t][o + 1], $[t + 1][o + 1], $[t + 1][o], e.tf_beam), y(C[t][o], C[t][o + 1], C[t + 1][o + 1], C[t + 1][o], e.tf_beam);
        for (let o = 0; o < Z; o++) y(N[t][o], N[t][o + 1], N[t + 1][o + 1], N[t + 1][o], e.tw_beam);
      }
      const M = /* @__PURE__ */ new Map(), ne = 0;
      for (let t = 0; t <= P; t++) M.set($[ne][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), M.set(C[ne][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t <= Z; t++) M.set(N[ne][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t < n.length; t++) {
        const o = n[t][2], a = Math.abs(n[t][0]) > e.d_col / 2 - 1e-4 - 1e-6 || Math.abs(n[t][1]) < 1e-6;
        Math.abs(Math.abs(o) - _ / 2) < 1e-4 && a && n[t][0] <= e.d_col / 2 + 1e-4 && (M.has(t) || M.set(t, [
          true,
          true,
          true,
          true,
          true,
          true
        ]));
      }
      const Ne = e.bf_beam * (1 - 2 * e.c_rbs) * e.tf_beam * (e.d_beam - e.tf_beam), Pe = e.Fy * Ne, Ae = e.L_beam - e.a_rbs * e.bf_beam - e.b_rbs * e.d_beam / 2, ke = e.load_factor * Pe / Math.max(Ae, 0.5), j = /* @__PURE__ */ new Map(), Ge = p.length - 1, Xe = ke / (P + 1);
      for (let t = 0; t <= P; t++) j.set($[Ge][t], [
        0,
        0,
        -Xe,
        0,
        0,
        0
      ]);
      r.nodes.val = n, r.elements.val = b, r.nodeInputs.val = {
        supports: M,
        loads: j
      }, r.elementInputs.val = {
        thicknesses: V,
        elasticities: R,
        poissonsRatios: X,
        densities: I,
        areas: g,
        momentsOfInertiaY: O,
        momentsOfInertiaZ: l,
        torsionalConstants: B,
        shearModuli: w
      };
      try {
        if (e.use_nonlinear > 0.5) {
          const t = et({
            nodes: n,
            elements: b,
            nodeInputs: {
              supports: M,
              loads: j
            },
            elementInputs: r.elementInputs.val,
            Fy: e.Fy,
            maxIter: Math.round(e.nl_max_iter),
            tol: 0.03,
            softeningFactor: 0.9
          });
          r.deformOutputs.val = t.deformOutputs;
          const o = t.analyzeOutputs;
          o.colorMapRanges = {
            ...o.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, r.analyzeOutputs.val = o, r.__nlInfo = {
            iterations: t.iterations,
            converged: t.converged,
            elementsYielded: t.elementsYielded,
            maxRatio: t.maxRatio
          }, console.log(`[conexion-rbs NL] iter=${t.iterations} conv=${t.converged} yield=${t.elementsYielded} maxRatio=${t.maxRatio.toFixed(2)}`);
        } else {
          const t = je(n, b, {
            supports: M,
            loads: j
          }, r.elementInputs.val);
          r.deformOutputs.val = t;
          const o = Ze(n, b, r.elementInputs.val, t);
          o.colorMapRanges = {
            ...o.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, r.analyzeOutputs.val = o, r.__nlInfo = null;
        }
      } catch (t) {
        console.error("[conexion-rbs] solver error:", (t == null ? void 0 : t.message) || t, t), r.deformOutputs.val = {}, r.analyzeOutputs.val = {};
      }
      const f = [], we = F + _e, ye = Math.min(e.bf_beam, e.d_beam) * 0.28, Oe = new tt(ye, 20, 16), Be = new k({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), Fe = new G(Oe, Be);
      Fe.position.set(we, 0, 0), f.push(Fe);
      const We = new Le(ye * 1.25, 0.015, 12, 32), Ye = new k({
        color: 16755200,
        emissive: 4465152
      }), le = new G(We, Ye);
      le.position.set(we, 0, 0), le.rotation.y = Math.PI / 2, f.push(le);
      const Se = e.weld_type < 0.5 ? 16755200 : e.weld_type < 1.5 ? 16742144 : 16733440, A = e.weld_type < 0.5 ? e.tf_beam * 0.95 : e.weld_type < 1.5 ? e.tf_beam * 0.6 : e.weld_throat, ve = (t) => {
        const o = new ce(A * 1.1, e.bf_beam, A * 1.2), a = new k({
          color: Se,
          emissive: 3346688,
          metalness: 0.7,
          roughness: 0.45
        }), s = new G(o, a);
        return s.position.set(F - A / 2, 0, t), s;
      };
      f.push(ve(+e.d_beam / 2 - e.tf_beam / 2)), f.push(ve(-e.d_beam / 2 + e.tf_beam / 2));
      const De = e.d_beam - 2 * e.tf_beam - (e.weld_access_hole > 0.5 ? 2 * (e.tf_beam * 1.5) : 0), Te = new ce(A * 1.1, A * 1.2, De), Je = new k({
        color: Se,
        emissive: 3346688,
        metalness: 0.7,
        roughness: 0.45
      }), pe = new G(Te, Je);
      if (pe.position.set(F - A / 2, 0, 0), f.push(pe), e.weld_access_hole > 0.5) {
        const t = e.tf_beam * 1.2;
        for (const o of [
          +e.d_beam / 2 - e.tf_beam - t,
          -e.d_beam / 2 + e.tf_beam + t
        ]) {
          const a = new Le(t, 3e-3, 10, 24), s = new k({
            color: 3355443,
            metalness: 0.5,
            roughness: 0.6
          }), i = new G(a, s);
          i.position.set(F + 2e-3, 0, o), i.rotation.y = Math.PI / 2, f.push(i);
        }
      }
      if (e.weld_type < 0.5) {
        const t = new ce(0.025, e.bf_beam + 0.02, 0.01), o = new k({
          color: 5588019,
          metalness: 0.3,
          roughness: 0.8
        });
        for (const a of [
          +e.d_beam / 2 - e.tf_beam / 2,
          -e.d_beam / 2 + e.tf_beam / 2
        ]) {
          const s = new G(t, o), i = a > 0 ? -1 : 1;
          s.position.set(F - 0.015, 0, a + i * e.tf_beam * 0.7), f.push(s);
        }
      }
      const $e = (t) => {
        const o = ue(t), a = F + t, s = [
          new J(a, -o / 2, +e.d_beam / 2 + 5e-3),
          new J(a, +o / 2, +e.d_beam / 2 + 5e-3),
          new J(a, +o / 2, -e.d_beam / 2 - 5e-3),
          new J(a, -o / 2, -e.d_beam / 2 - 5e-3),
          new J(a, -o / 2, +e.d_beam / 2 + 5e-3)
        ], i = new ot().setFromPoints(s), c = new at({
          color: 16776960
        });
        return new st(i, c);
      };
      f.push($e(S)), f.push($e(v)), r.objects3D.val = f;
      const q = e.classification < 0.5 ? 0.02 : e.classification < 1.5 ? 0.04 : 0.06, Ve = qe(e.story_h, Math.round(e.steps_per_cycle), q), He = e.b_rbs * e.d_beam, Ke = e.d_beam / 2 / He, Re = {
        Fy: e.Fy,
        E: e.E_steel,
        b: e.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, Ie = e.bf_beam * (1 - 2 * e.c_rbs), ze = Ie * e.tf_beam * (e.d_beam - e.tf_beam), re = e.Fy * ze, U = [], Q = [];
      let ie = Qe(Re);
      for (const t of Ve) {
        const o = t * Ke;
        ie = Ue(o, ie, Re), U.push(t), Q.push(ie.sigma * ze);
      }
      r.__rbsHistory = {
        theta: U,
        M: Q,
        Mp: re,
        targetDrift: q,
        classification: e.classification < 0.5 ? "IMF" : e.classification < 1.5 ? "SMF" : "Extended"
      };
      let ee = 0;
      for (let t = 0; t < U.length; t++) Math.abs(U[t] - q) < 5e-3 && Math.abs(Q[t]) > Math.abs(ee) && (ee = Q[t]);
      const Ee = Math.abs(ee) / re;
      console.log(`[RBS AISC 358-22] Shells=${b.length}, Nodos=${n.length}
  bf_rbs=${Ie.toFixed(3)}m, Mp_rbs=${re.toFixed(1)} kN\xB7m
  M@${(q * 100).toFixed(1)}%=${ee.toFixed(1)} kN\xB7m \xB7 Ratio=${Ee.toFixed(3)} \u2192 ${Ee >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(e, r) {
      const n = r.__rbsHistory;
      if (!n) return {
        Status: "\u2014"
      };
      const b = e.bf_beam * (1 - 2 * e.c_rbs), V = b * e.tf_beam * (e.d_beam - e.tf_beam), R = n.Mp, X = n.targetDrift;
      let I = 0;
      for (const l of n.M) Math.abs(l) > Math.abs(I) && (I = l);
      let g = 0;
      for (let l = 0; l < n.theta.length; l++) Math.abs(n.theta[l] - X) < 5e-3 && Math.abs(n.M[l]) > Math.abs(g) && (g = n.M[l]);
      const O = Math.abs(g) / R;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": n.classification,
        "Target drift \u03B8": `${(X * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(e.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(b * 1e3).toFixed(0)} mm (-${(e.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(e.a_rbs * e.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(e.b_rbs * e.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(e.c_rbs * e.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(V * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${R.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(I).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(g).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${O.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${O >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${n.classification}`,
        "Data points generados": `${n.theta.length}`,
        "\u2500\u2500 Soldadura AISC 360 \xA7J2 \u2500\u2500": "",
        ...(() => {
          const l = e.weld_type < 0.5 ? "CJP" : e.weld_type < 1.5 ? "PJP" : "Filete", B = e.weld_type < 0.5 ? e.tf_beam : e.weld_type < 1.5 ? e.tf_beam * 0.7 : e.weld_throat, w = e.electrode_Fexx, te = 0.75, H = e.bf_beam, z = B * H, W = e.weld_type < 0.5 ? e.Fy * e.bf_beam * e.tf_beam : 0.6 * w * z, h = te * W, _ = 0.8 * R / Math.max(e.d_beam - e.tf_beam, 0.1), d = _ / h, m = w < 44e4 ? "E60XX" : w < 52e4 ? "E70XX" : "E80XX";
          return {
            "Tipo soldadura": l,
            Electrodo: `${m} (Fexx=${(w / 1e3).toFixed(0)} MPa)`,
            "Garganta efectiva": `${(B * 1e3).toFixed(1)} mm`,
            "L cord\xF3n (pat\xEDn)": `${(H * 1e3).toFixed(0)} mm`,
            "Ae (pat\xEDn)": `${(z * 1e6).toFixed(0)} mm\xB2`,
            "Rn cord\xF3n (nominal)": `${W.toFixed(0)} kN`,
            "\u03C6Rn (dise\xF1o)": `${h.toFixed(0)} kN`,
            "F_demand en pat\xEDn (0.8Mp)": `${_.toFixed(0)} kN`,
            "Ratio F/\u03C6Rn": `${d.toFixed(3)} ${d <= 1 ? "\u2713" : "\u2717"}`,
            "Weld access hole": e.weld_access_hole > 0.5 ? "S\xED (AWS D1.8 \xA76.10)" : "No",
            "Dictamen soldadura": e.weld_type < 0.5 ? "CJP \u2713 Demand-critical (AISC 358 \xA73.7)" : d <= 1 ? "\u2713 OK" : "\u2717 REVISAR garganta / electrodo"
          };
        })(),
        ...(() => {
          const l = r.__nlInfo;
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
  mt as c
};
