import { a as v } from "./analyze-ClLKGn9k.js";
import { d as y, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let X;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  X = {
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
    build(n, s) {
      const t = Math.round(n.nx), a = Math.round(n.ny), u = [];
      for (let e = 0; e <= a; e++) for (let l = 0; l <= t; l++) u.push([
        l * n.Lx / t,
        e * n.Ly / a,
        0
      ]);
      const m = [];
      for (let e = 0; e < a; e++) for (let l = 0; l < t; l++) {
        const r = e * (t + 1) + l;
        m.push([
          r,
          r + 1,
          r + 1 + (t + 1),
          r + (t + 1)
        ]);
      }
      const o = /* @__PURE__ */ new Map();
      for (let e = 0; e <= t; e++) o.set(e, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), o.set(a * (t + 1) + e, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let e = 0; e <= a; e++) o.set(e * (t + 1), [
        true,
        true,
        true,
        false,
        false,
        false
      ]), o.set(e * (t + 1) + t, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const h = n.Lx / t * (n.Ly / a), f = /* @__PURE__ */ new Map();
      for (let e = 0; e <= a; e++) for (let l = 0; l <= t; l++) {
        const r = e * (t + 1) + l, b = (l === 0 || l === t) && (e === 0 || e === a) ? 0.25 : l === 0 || l === t || e === 0 || e === a ? 0.5 : 1, x = -n.q * h * b;
        f.set(r, [
          0,
          0,
          x,
          0,
          0,
          0
        ]);
      }
      const i = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
      m.forEach((e, l) => {
        i.set(l, n.t), c.set(l, n.E), d.set(l, n.nu), p.set(l, 24);
      }), s.nodes.val = u, s.elements.val = m, s.nodeInputs.val = {
        supports: o,
        loads: f
      }, s.elementInputs.val = {
        thicknesses: i,
        elasticities: c,
        poissonsRatios: d,
        densities: p
      };
      try {
        s.deformOutputs.val = y(u, m, {
          supports: o,
          loads: f
        }, s.elementInputs.val), s.analyzeOutputs.val = v(u, m, s.elementInputs.val, s.deformOutputs.val);
      } catch (e) {
        console.error("Shell thin solver error:", e);
      }
      s.objects3D.val = [];
    }
  };
});
export {
  __tla,
  X as s
};
