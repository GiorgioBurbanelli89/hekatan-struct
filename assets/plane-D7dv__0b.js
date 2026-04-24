import { m as W, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { p as X } from "./planeQ4-DGsGKcTr.js";
let N;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  N = {
    id: "plane",
    name: "Plane Element (Q4 plane stress)",
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
        max: 6,
        step: 0.25,
        label: "W ancho X (m)"
      },
      H: {
        default: 6,
        min: 2,
        max: 12,
        step: 0.25,
        label: "H altura Z (m)"
      },
      t: {
        default: 0.3,
        min: 0.05,
        max: 0.6,
        step: 0.05,
        label: "t espesor (m)"
      },
      E: {
        default: 25e6,
        min: 1e7,
        max: 5e7,
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
        default: 200,
        min: 0,
        max: 400,
        step: 10,
        label: "F lateral tope",
        unitType: "force"
      },
      nx: {
        default: 8,
        min: 4,
        max: 20,
        step: 1,
        label: "nx elem X"
      },
      nz: {
        default: 16,
        min: 6,
        max: 30,
        step: 1,
        label: "nz elem Z"
      }
    },
    build(e, n) {
      var _a;
      const m = Math.round(e.nx), i = Math.round(e.nz), u = i * (m + 1) + m, a = X({
        E: e.E,
        nu: e.nu,
        thickness: e.t,
        meshLx: e.W,
        meshLy: e.H,
        meshNx: m,
        meshNy: i,
        bcType: "cantilever-bottom",
        pointLoads: [
          {
            node: u,
            fx: e.F,
            fy: 0
          }
        ]
      }), l = a.nodeResults.map((t) => [
        t.x,
        0,
        t.y
      ]), o = a.elementResults.map((t) => t.nodes);
      n.nodes.val = l, n.elements.val = o;
      const d = /* @__PURE__ */ new Map();
      l.forEach((t, s) => {
        Math.abs(t[2]) < 1e-6 ? d.set(s, [
          true,
          true,
          true,
          true,
          true,
          true
        ]) : d.set(s, [
          false,
          true,
          false,
          true,
          true,
          true
        ]);
      });
      const r = /* @__PURE__ */ new Map(), c = l.findIndex((t) => Math.abs(t[0] - e.W) < 1e-6 && Math.abs(t[2] - e.H) < 1e-6);
      c >= 0 && r.set(c, [
        e.F,
        0,
        0,
        0,
        0,
        0
      ]), n.nodeInputs.val = {
        supports: d,
        loads: r
      };
      const f = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
      o.forEach((t, s) => {
        f.set(s, e.t), M.set(s, e.E), h.set(s, e.nu), p.set(s, 24);
      }), n.elementInputs.val = {
        thicknesses: f,
        elasticities: M,
        poissonsRatios: h,
        densities: p
      };
      const x = /* @__PURE__ */ new Map();
      a.nodeResults.forEach((t, s) => {
        x.set(s, [
          t.ux,
          0,
          t.uy,
          0,
          0,
          0
        ]);
      }), n.deformOutputs.val = {
        deformations: x
      };
      const b = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
      a.elementResults.forEach((t, s) => {
        b.set(s, [
          t.sigma_xx,
          t.sigma_xx,
          t.sigma_xx,
          t.sigma_xx
        ]), v.set(s, [
          t.sigma_yy,
          t.sigma_yy,
          t.sigma_yy,
          t.sigma_yy
        ]), y.set(s, [
          t.tau_xy,
          t.tau_xy,
          t.tau_xy,
          t.tau_xy
        ]), F.set(s, [
          t.vonMises,
          t.vonMises,
          t.vonMises,
          t.vonMises
        ]);
      }), n.analyzeOutputs.val = {
        membraneXX: b,
        membraneYY: v,
        membraneXY: y,
        vonMises: F
      }, n.objects3D.val = [];
      const $ = e.t * Math.pow(e.W, 3) / 12, E = e.t * e.W, w = e.E / (2 * (1 + e.nu)), _ = e.F * Math.pow(e.H, 3) / (3 * e.E * $), g = 1.2 * e.F * e.H / (w * E), H = _ + g, R = c >= 0 ? ((_a = x.get(c)) == null ? void 0 : _a[0]) ?? 0 : 0;
      console.log(`[Plane Q4] W=${e.W}m H=${e.H}m t=${e.t}m F=${e.F}kN \u2192 \u03B4_top FEM=${(R * 1e3).toFixed(3)} mm | te\xF3rico flex+shear=${(H * 1e3).toFixed(3)} mm (flex=${(_ * 1e3).toFixed(3)}, shear=${(g * 1e3).toFixed(3)}) | max \u03C3vm=${a.maxVonMises.toFixed(1)} kN/m\xB2 | nDOF=${a.nDOF}`);
    },
    runModal(e, n, m) {
      var _a, _b, _c;
      const i = n.nodes.val, u = n.elements.val, a = n.nodeInputs.val, l = n.elementInputs.val;
      if (!(!i.length || !u.length || !((_a = a.supports) == null ? void 0 : _a.size) || !((_b = l.densities) == null ? void 0 : _b.size))) try {
        const o = W(i, u, a, l, 12);
        m.render(o, {
          title: `Plane Q4 ${e.W}\xD7${e.H}m t=${e.t}m`,
          properties: [
            `E=${(e.E / 1e6).toFixed(1)} GPa  \u03BD=${e.nu}  \u03C1=24 kN/m\xB3`
          ]
        }), console.log(`[Plane Q4 Modal] f\u2081 = ${(_c = o.frequencies[0]) == null ? void 0 : _c.toFixed(4)} Hz`);
      } catch (o) {
        console.warn("Modal plane error:", o.message);
      }
    }
  };
});
export {
  __tla,
  N as p
};
