import { a as v } from "./analyze-ClLKGn9k.js";
import { m as y, d as M, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let E;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  E = {
    id: "shell-thin",
    name: "Shell Thin (Kirchhoff-Love)",
    category: "C\xE1scaras",
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
      const n = Math.round(t.nx), a = Math.round(t.ny), i = [];
      for (let e = 0; e <= a; e++) for (let l = 0; l <= n; l++) i.push([
        l * t.Lx / n,
        e * t.Ly / a,
        0
      ]);
      const r = [];
      for (let e = 0; e < a; e++) for (let l = 0; l < n; l++) {
        const u = e * (n + 1) + l;
        r.push([
          u,
          u + 1,
          u + 1 + (n + 1),
          u + (n + 1)
        ]);
      }
      const o = /* @__PURE__ */ new Map();
      for (let e = 0; e <= n; e++) o.set(e, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), o.set(a * (n + 1) + e, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let e = 0; e <= a; e++) o.set(e * (n + 1), [
        true,
        true,
        true,
        false,
        false,
        false
      ]), o.set(e * (n + 1) + n, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const m = t.Lx / n * (t.Ly / a), c = /* @__PURE__ */ new Map();
      for (let e = 0; e <= a; e++) for (let l = 0; l <= n; l++) {
        const u = e * (n + 1) + l, x = (l === 0 || l === n) && (e === 0 || e === a) ? 0.25 : l === 0 || l === n || e === 0 || e === a ? 0.5 : 1, b = -t.q * m * x;
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
      r.forEach((e, l) => {
        d.set(l, t.t), f.set(l, t.E), p.set(l, t.nu), h.set(l, 24);
      }), s.nodes.val = i, s.elements.val = r, s.nodeInputs.val = {
        supports: o,
        loads: c
      }, s.elementInputs.val = {
        thicknesses: d,
        elasticities: f,
        poissonsRatios: p,
        densities: h
      };
      try {
        s.deformOutputs.val = M(i, r, {
          supports: o,
          loads: c
        }, s.elementInputs.val), s.analyzeOutputs.val = v(i, r, s.elementInputs.val, s.deformOutputs.val);
      } catch (e) {
        console.error("Shell thin solver error:", e);
      }
      s.objects3D.val = [];
    },
    runModal(t, s, n) {
      var _a, _b, _c;
      const a = s.nodes.val, i = s.elements.val, r = s.nodeInputs.val, o = s.elementInputs.val;
      if (!(!a.length || !i.length || !((_a = r.supports) == null ? void 0 : _a.size) || !((_b = o.densities) == null ? void 0 : _b.size))) try {
        const m = y(a, i, r, o, 12);
        n.render(m, {
          title: `Shell Thin ${t.Lx}\xD7${t.Ly}m t=${t.t}m`,
          properties: [
            `E=${(t.E / 1e6).toFixed(1)} GPa  \u03BD=${t.nu}  \u03C1=24 kN/m\xB3`
          ]
        }), console.log(`[Shell Thin Modal] f\u2081=${(_c = m.frequencies[0]) == null ? void 0 : _c.toFixed(4)} Hz`);
      } catch (m) {
        console.warn("Modal shell-thin error:", m.message);
      }
    }
  };
});
export {
  __tla,
  E as s
};
