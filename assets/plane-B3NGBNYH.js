import { m as g, p as Y, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let _;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  _ = {
    id: "plane",
    name: "Plane Element (2D plane stress)",
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
        default: 6,
        min: 1,
        max: 15,
        step: 0.25,
        label: "H altura Y (m)"
      },
      t: {
        default: 0.3,
        min: 0.05,
        max: 1,
        step: 0.05,
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
      ny: {
        default: 16,
        min: 4,
        max: 30,
        step: 1,
        label: "ny elem Y"
      }
    },
    build(e, n) {
      var _a;
      const m = Y({
        E: e.E,
        nu: e.nu,
        thickness: e.t,
        theoryType: 2,
        meshLx: e.W,
        meshLy: e.H,
        meshNx: Math.round(e.nx),
        meshNy: Math.round(e.ny),
        bcType: "simply-supported",
        pressure: 0
      }), r = m.nodeResults.map((t) => [
        t.x,
        t.y,
        0
      ]), u = m.elementResults.map((t) => t.nodes);
      n.nodes.val = r, n.elements.val = u;
      const d = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      r.forEach((t, s) => {
        Math.abs(t[1]) < 1e-6 && d.set(s, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      });
      const a = r.findIndex((t) => Math.abs(t[0] - e.W) < 1e-6 && Math.abs(t[1] - e.H) < 1e-6);
      a >= 0 && i.set(a, [
        e.F,
        0,
        0,
        0,
        0,
        0
      ]), n.nodeInputs.val = {
        supports: d,
        loads: i
      };
      const x = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      u.forEach((t, s) => {
        x.set(s, e.t), M.set(s, e.E), b.set(s, e.nu), f.set(s, 24);
      }), n.elementInputs.val = {
        thicknesses: x,
        elasticities: M,
        poissonsRatios: b,
        densities: f
      };
      const h = /* @__PURE__ */ new Map();
      m.nodeResults.forEach((t, s) => {
        h.set(s, [
          t.bx ?? 0,
          t.by ?? 0,
          0,
          0,
          0,
          0
        ]);
      }), n.deformOutputs.val = {
        deformations: h
      };
      const y = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
      m.elementResults.forEach((t, s) => {
        const l = t.Mxx, o = t.Myy, c = t.Mxy, p = Math.sqrt(l * l - l * o + o * o + 3 * c * c);
        y.set(s, [
          l,
          l,
          l,
          l
        ]), v.set(s, [
          o,
          o,
          o,
          o
        ]), E.set(s, [
          c,
          c,
          c,
          c
        ]), w.set(s, [
          p,
          p,
          p,
          p
        ]);
      }), n.analyzeOutputs.val = {
        membraneXX: y,
        membraneYY: v,
        membraneXY: E,
        vonMises: w
      }, n.objects3D.val = [];
      const F = e.t * Math.pow(e.W, 3) / 12, $ = e.t * e.W, H = e.E / (2 * (1 + e.nu)), R = e.F * Math.pow(e.H, 3) / (3 * e.E * F), W = 1.2 * e.F * e.H / (H * $), X = a >= 0 ? ((_a = h.get(a)) == null ? void 0 : _a[0]) ?? 0 : 0;
      console.log(`[Plane (2D plane stress)] W=${e.W}m H=${e.H}m t=${e.t}m F=${e.F}kN \u2192 \u03B4_top FEM=${(X * 1e3).toFixed(3)} mm | te\xF3rico flex+shear=${((R + W) * 1e3).toFixed(3)} mm`);
    },
    runModal(e, n, m) {
      var _a, _b;
      const r = n.nodes.val, u = n.elements.val, d = n.nodeInputs.val, i = n.elementInputs.val;
      if (!(!r.length || !u.length || !((_a = d.supports) == null ? void 0 : _a.size) || !((_b = i.densities) == null ? void 0 : _b.size))) try {
        const a = g(r, u, d, i, 12);
        m.render(a, {
          title: `Plane ${e.W}\xD7${e.H}m t=${e.t}m`,
          properties: [
            `E=${(e.E / 1e6).toFixed(1)} GPa  \u03BD=${e.nu}  \u03C1=24 kN/m\xB3`
          ]
        });
      } catch (a) {
        console.warn("Modal plane error:", a.message);
      }
    }
  };
});
export {
  __tla,
  _ as p
};
