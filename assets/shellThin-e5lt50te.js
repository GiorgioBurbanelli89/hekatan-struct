import { a as v } from "./analyze-DNPn2SjO.js";
import { m as y, d as M, __tla as __tla_0 } from "./didacticCpp-CCShk1kX.js";
let S;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  S = {
    id: "shell-thin",
    name: "Shell Thin (Kirchhoff-Love) \u2014 Hekatan vs SAP \u03B4+4.31% M+0.47%",
    category: "\u{1F3C1} Benchmarks \xB7 2\uFE0F\u20E3 \xC1reas",
    benchmark: true,
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "membraneXX",
      "membraneYY",
      "membraneXY",
      "vonMises",
      "displacementZ"
    ],
    hasModal: true,
    params: {
      Lx: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Lx (m)"
      },
      Ly: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Ly (m)"
      },
      t: {
        default: 0.05,
        min: 0.01,
        max: 0.2,
        step: 0.01,
        label: "espesor t (m)"
      },
      E: {
        default: 3e7,
        min: 1e6,
        max: 2e8,
        step: 1e6,
        label: "E (kN/m\xB2)"
      },
      nu: {
        default: 0.2,
        min: 0.1,
        max: 0.4,
        step: 0.01,
        label: "\u03BD"
      },
      q: {
        default: 5,
        min: 1,
        max: 20,
        step: 0.5,
        label: "q presi\xF3n \u2193 (kN/m\xB2)"
      },
      nx: {
        default: 8,
        min: 4,
        max: 16,
        step: 1,
        label: "nx"
      },
      ny: {
        default: 8,
        min: 4,
        max: 16,
        step: 1,
        label: "ny"
      }
    },
    build(t, s) {
      const l = Math.round(t.nx), a = Math.round(t.ny), m = [];
      for (let e = 0; e <= a; e++) for (let n = 0; n <= l; n++) m.push([
        n * t.Lx / l,
        e * t.Ly / a,
        0
      ]);
      const r = [];
      for (let e = 0; e < a; e++) for (let n = 0; n < l; n++) {
        const u = e * (l + 1) + n;
        r.push([
          u,
          u + 1,
          u + 1 + (l + 1),
          u + (l + 1)
        ]);
      }
      const o = /* @__PURE__ */ new Map();
      for (let e = 0; e <= l; e++) o.set(e, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), o.set(a * (l + 1) + e, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let e = 0; e <= a; e++) o.set(e * (l + 1), [
        true,
        true,
        true,
        false,
        false,
        false
      ]), o.set(e * (l + 1) + l, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const i = t.Lx / l * (t.Ly / a), c = /* @__PURE__ */ new Map();
      for (let e = 0; e <= a; e++) for (let n = 0; n <= l; n++) {
        const u = e * (l + 1) + n, x = (n === 0 || n === l) && (e === 0 || e === a) ? 0.25 : n === 0 || n === l || e === 0 || e === a ? 0.5 : 1, b = -t.q * i * x;
        c.set(u, [
          0,
          0,
          b,
          0,
          0,
          0
        ]);
      }
      const d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
      r.forEach((e, n) => {
        d.set(n, t.t), f.set(n, t.E), p.set(n, t.nu), h.set(n, 24);
      }), s.nodes.val = m, s.elements.val = r, s.nodeInputs.val = {
        supports: o,
        loads: c
      }, s.elementInputs.val = {
        thicknesses: d,
        elasticities: f,
        poissonsRatios: p,
        densities: h
      };
      try {
        s.deformOutputs.val = M(m, r, {
          supports: o,
          loads: c
        }, s.elementInputs.val), s.analyzeOutputs.val = v(m, r, s.elementInputs.val, s.deformOutputs.val);
      } catch (e) {
        console.error("Shell thin solver error:", e);
      }
      s.objects3D.val = [];
    },
    runModal(t, s, l) {
      var _a, _b, _c;
      const a = s.nodes.val, m = s.elements.val, r = s.nodeInputs.val, o = s.elementInputs.val;
      if (!(!a.length || !m.length || !((_a = r.supports) == null ? void 0 : _a.size) || !((_b = o.densities) == null ? void 0 : _b.size))) try {
        const i = y(a, m, r, o, 12);
        l.render(i, {
          title: `Shell Thin ${t.Lx}\xD7${t.Ly}m t=${t.t}m`,
          properties: [
            `E=${(t.E / 1e6).toFixed(1)} GPa  \u03BD=${t.nu}  \u03C1=24 kN/m\xB3`
          ]
        }), console.log(`[Shell Thin Modal] f\u2081=${(_c = i.frequencies[0]) == null ? void 0 : _c.toFixed(4)} Hz`);
      } catch (i) {
        console.warn("Modal shell-thin error:", i.message);
      }
    }
  };
});
export {
  __tla,
  S as s
};
