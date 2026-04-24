import { __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as L, m as k, i as v } from "./menegottoPinto-B-C2cxus.js";
let H;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  H = {
    id: "conexion-rbs",
    name: "Conexi\xF3n RBS (AISC 358-22 \xB7 Protocolo K3)",
    category: "Conexiones",
    hasModal: false,
    params: {
      d_beam: {
        default: 0.6,
        min: 0.3,
        max: 1,
        step: 0.05,
        label: "d viga (m)",
        folder: "Viga"
      },
      bf_beam: {
        default: 0.2,
        min: 0.1,
        max: 0.4,
        step: 0.01,
        label: "bf pat\xEDn (m)",
        folder: "Viga"
      },
      tf_beam: {
        default: 0.02,
        min: 0.01,
        max: 0.04,
        step: 2e-3,
        label: "tf pat\xEDn (m)",
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
    build(e, s) {
      const r = [];
      for (let t = 0; t <= 8; t++) r.push([
        t * (e.L_beam / 8),
        0,
        0
      ]);
      const l = [];
      for (let t = 0; t < 8; t++) l.push([
        t,
        t + 1
      ]);
      e.a_rbs * e.bf_beam + e.b_rbs * e.d_beam / 2;
      const b = /* @__PURE__ */ new Map();
      b.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const f = /* @__PURE__ */ new Map();
      s.nodes.val = r, s.elements.val = l, s.nodeInputs.val = {
        supports: b,
        loads: f
      };
      const m = e.d_beam * e.bf_beam, n = e.bf_beam * Math.pow(e.d_beam, 3) / 12, d = e.d_beam * Math.pow(e.bf_beam, 3) / 12, o = n + d, S = e.E_steel / 2.6, I = 77, i = {
        areas: /* @__PURE__ */ new Map(),
        momentsOfInertiaY: /* @__PURE__ */ new Map(),
        momentsOfInertiaZ: /* @__PURE__ */ new Map(),
        torsionalConstants: /* @__PURE__ */ new Map(),
        elasticities: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map(),
        densities: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map()
      };
      for (let t = 0; t < l.length; t++) i.areas.set(t, m), i.momentsOfInertiaY.set(t, d), i.momentsOfInertiaZ.set(t, n), i.torsionalConstants.set(t, o), i.elasticities.set(t, e.E_steel), i.shearModuli.set(t, S), i.densities.set(t, I), i.thicknesses.set(t, e.tf_beam), i.poissonsRatios.set(t, 0.3);
      s.elementInputs.val = i, s.deformOutputs.val = {}, s.analyzeOutputs.val = {}, s.objects3D.val = [];
      const F = e.classification < 0.5 ? 0.02 : e.classification < 1.5 ? 0.04 : 0.06, A = L(e.story_h, Math.round(e.steps_per_cycle), F), R = e.b_rbs * e.d_beam, C = e.d_beam / 2 / R, g = {
        Fy: e.Fy,
        E: e.E_steel,
        b: e.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, h = e.bf_beam * (1 - 2 * e.c_rbs);
      h * e.tf_beam * (e.d_beam - e.tf_beam) + (e.d_beam - 2 * e.tf_beam) * (e.tf_beam * 2) * (e.d_beam - 2 * e.tf_beam) / 4;
      const p = h * e.tf_beam * (e.d_beam - e.tf_beam), u = e.Fy * p, c = [], _ = [];
      let x = v(g);
      for (const t of A) {
        const E = t * C;
        x = k(E, x, g), c.push(t);
        const N = x.sigma * p;
        _.push(N);
      }
      s.__rbsHistory = {
        theta: c,
        M: _,
        Mp: u,
        targetDrift: F,
        classification: e.classification < 0.5 ? "IMF" : e.classification < 1.5 ? "SMF" : "Extended"
      };
      let M = 0;
      const y = e.classification < 0.5 ? 0.02 : e.classification < 1.5 ? 0.04 : 0.06;
      for (let t = 0; t < c.length; t++) Math.abs(c[t] - y) < 5e-3 && Math.abs(_[t]) > Math.abs(M) && (M = _[t]);
      const $ = Math.abs(M) / u, w = $ >= 0.8;
      console.log(`[Conexi\xF3n RBS AISC 358-22] d=${e.d_beam}m, bf=${e.bf_beam}m (reducido ${h.toFixed(3)}m), Fy=${(e.Fy / 1e3).toFixed(0)}MPa
  Mp_rbs = ${u.toFixed(1)} kN\xB7m \xB7 Target drift = ${(y * 100).toFixed(1)}% \xB7 M@target = ${M.toFixed(1)} kN\xB7m
  Ratio M/Mp = ${$.toFixed(3)} (\u2265 0.80 para ${e.classification < 0.5 ? "IMF" : "SMF"}) \u2192 ${w ? "\u2713 PASA AISC 341 App. K" : "\u2717 FALLA"}`);
    },
    computedLabels(e, s) {
      const a = s.__rbsHistory;
      if (!a) return {
        Status: "\u2014"
      };
      const r = e.bf_beam * (1 - 2 * e.c_rbs), l = r * e.tf_beam * (e.d_beam - e.tf_beam), b = a.Mp, f = a.targetDrift;
      let m = 0;
      for (const o of a.M) Math.abs(o) > Math.abs(m) && (m = o);
      let n = 0;
      for (let o = 0; o < a.theta.length; o++) Math.abs(a.theta[o] - f) < 5e-3 && Math.abs(a.M[o]) > Math.abs(n) && (n = a.M[o]);
      const d = Math.abs(n) / b;
      return {
        "\u2500\u2500 Conexi\xF3n RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": a.classification,
        "Target drift \u03B8": `${(f * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(e.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(r * 1e3).toFixed(0)} mm (-${(e.c_rbs * 100 * 2).toFixed(0)}%)`,
        "L hinge (b\xB7d)": `${(e.b_rbs * e.d_beam * 1e3).toFixed(0)} mm`,
        "Zx_rbs (plastic modulus)": `${(l * 1e6).toFixed(0)} cm\xB3`,
        "Mp_rbs (capacidad)": `${b.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(m).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(n).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${d.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${d >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${a.classification}`,
        "Data points generados": `${a.theta.length}`
      };
    }
  };
});
export {
  __tla,
  H as c
};
