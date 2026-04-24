import { a as E } from "./analyze-ClLKGn9k.js";
import { m as H, d as _, __tla as __tla_0 } from "./didacticCpp-RemoaQyH.js";
let k;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  k = {
    id: "membrana",
    name: "Membrana (Plane Stress) \u2014 Muro de corte",
    category: "Placas",
    defaultShellResult: "vonMises",
    availableShellResults: [
      "vonMises",
      "membraneXX",
      "membraneYY",
      "membraneXY",
      "displacementX",
      "displacementZ"
    ],
    hasModal: true,
    params: {
      W: {
        default: 3,
        min: 1,
        max: 8,
        step: 0.25,
        label: "W ancho X (m)"
      },
      H: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.25,
        label: "H altura Z (m)"
      },
      t: {
        default: 0.2,
        min: 0.05,
        max: 0.5,
        step: 0.01,
        label: "t espesor (m)"
      },
      E: {
        default: 25e6,
        min: 5e6,
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
      F: {
        default: 100,
        min: 10,
        max: 2e3,
        step: 10,
        label: "F lateral tope (kN)"
      },
      nx: {
        default: 8,
        min: 4,
        max: 20,
        step: 1,
        label: "nx elem X"
      },
      nz: {
        default: 10,
        min: 4,
        max: 30,
        step: 1,
        label: "nz elem Z"
      }
    },
    build(e, o) {
      var _a, _b;
      const s = Math.round(e.nx), a = Math.round(e.nz), d = e.W / s, i = e.H / a, r = [];
      for (let t = 0; t <= a; t++) for (let n = 0; n <= s; n++) r.push([
        n * d,
        0,
        t * i
      ]);
      const l = [];
      for (let t = 0; t < a; t++) for (let n = 0; n < s; n++) {
        const m = t * (s + 1) + n;
        l.push([
          m,
          m + 1,
          m + 1 + (s + 1),
          m + (s + 1)
        ]);
      }
      const c = /* @__PURE__ */ new Map();
      for (let t = 0; t <= s; t++) c.set(t, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const u = /* @__PURE__ */ new Map(), x = a * (s + 1), p = e.F / s;
      for (let t = 0; t <= s; t++) {
        const n = x + t, f = t === 0 || t === s ? p * 0.5 : p;
        u.set(n, [
          f,
          0,
          0,
          0,
          0,
          0
        ]);
      }
      const M = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
      l.forEach((t, n) => {
        M.set(n, e.t), h.set(n, e.E), v.set(n, e.nu), b.set(n, 24);
      }), o.nodes.val = r, o.elements.val = l, o.nodeInputs.val = {
        supports: c,
        loads: u
      }, o.elementInputs.val = {
        thicknesses: M,
        elasticities: h,
        poissonsRatios: v,
        densities: b
      };
      try {
        o.deformOutputs.val = _(r, l, {
          supports: c,
          loads: u
        }, o.elementInputs.val), o.analyzeOutputs.val = E(r, l, o.elementInputs.val, o.deformOutputs.val);
        const t = e.t * Math.pow(e.W, 3) / 12, n = e.t * e.W, m = e.E / (2 * (1 + e.nu)), f = e.F * Math.pow(e.H, 3) / (3 * e.E * t), F = 1.2 * e.F * e.H / (m * n), $ = f + F, z = x + Math.floor(s / 2), w = ((_b = (_a = o.deformOutputs.val.deformations) == null ? void 0 : _a.get(z)) == null ? void 0 : _b[0]) ?? 0;
        console.log(`[Muro Q4] W=${e.W}m H=${e.H}m F=${e.F}kN  \u2192  \u03B4_top FEM=${(w * 1e3).toFixed(3)} mm | te\xF3rico flex+shear=${($ * 1e3).toFixed(3)} mm (flex=${(f * 1e3).toFixed(3)}, shear=${(F * 1e3).toFixed(3)})`);
      } catch (t) {
        console.error("Muro Q4 solver error:", t);
      }
      o.objects3D.val = [];
    },
    runModal(e, o, s) {
      var _a, _b, _c;
      const a = o.nodes.val, d = o.elements.val, i = o.nodeInputs.val, r = o.elementInputs.val;
      if (!(!a.length || !d.length || !((_a = i.supports) == null ? void 0 : _a.size) || !((_b = r.densities) == null ? void 0 : _b.size))) try {
        const l = H(a, d, i, r, 12), c = `Muro de corte ${e.W}\xD7${e.H}m t=${e.t}m`, u = [
          `E=${(e.E / 1e6).toFixed(1)} GPa  \u03BD=${e.nu}  \u03C1=24 kN/m\xB3`
        ];
        s.render(l, {
          title: c,
          properties: u
        }), console.log(`[Muro Modal] f\u2081 = ${(_c = l.frequencies[0]) == null ? void 0 : _c.toFixed(4)} Hz, T\u2081 = ${(1 / l.frequencies[0]).toFixed(4)} s`);
      } catch (l) {
        console.warn("Modal muro error:", l.message);
      }
    }
  };
});
export {
  __tla,
  k as m
};
