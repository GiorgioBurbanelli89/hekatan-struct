import { a as E } from "./analyze-ClLKGn9k.js";
import { m as F, d as g, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let O;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let A, w, L, $;
  A = 2e8;
  w = 0.3;
  L = A / (2 * (1 + w));
  $ = 78;
  O = {
    id: "barra-axial",
    name: "Barra axial (1D)",
    category: "Frames 1D",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      L: {
        default: 5,
        min: 1,
        max: 20,
        step: 0.5,
        label: "Longitud L (m)",
        folder: "Geometr\xEDa"
      },
      nElem: {
        default: 3,
        min: 1,
        max: 20,
        step: 1,
        label: "N\xB0 elementos",
        folder: "Geometr\xEDa"
      },
      A: {
        default: 0.01,
        min: 1e-3,
        max: 0.05,
        step: 1e-3,
        label: "\xC1rea (m\xB2)",
        folder: "Secci\xF3n"
      },
      E: {
        default: 2e8,
        min: 25e6,
        max: 21e7,
        step: 1e6,
        label: "E (kN/m\xB2)",
        folder: "Secci\xF3n"
      },
      F: {
        default: 100,
        min: -500,
        max: 500,
        step: 10,
        label: "F axial extremo (kN)",
        folder: "Cargas"
      }
    },
    build(n, t) {
      var _a, _b;
      const o = Math.round(n.nElem), r = n.L / o, s = [], a = [];
      for (let e = 0; e <= o; e++) s.push([
        r * e,
        0,
        0
      ]);
      for (let e = 0; e < o; e++) a.push([
        e,
        e + 1
      ]);
      const m = /* @__PURE__ */ new Map([
        [
          0,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]), l = /* @__PURE__ */ new Map([
        [
          o,
          [
            n.F,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ]), c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), i = n.A * n.A / 12;
      for (let e = 0; e < a.length; e++) c.set(e, n.E), u.set(e, L), b.set(e, w), v.set(e, $), p.set(e, n.A), f.set(e, i), x.set(e, i), M.set(e, 2 * i);
      t.nodes.val = s, t.elements.val = a, t.nodeInputs.val = {
        supports: m,
        loads: l
      }, t.elementInputs.val = {
        elasticities: c,
        shearModuli: u,
        areas: p,
        momentsOfInertiaZ: f,
        momentsOfInertiaY: x,
        torsionalConstants: M,
        densities: v,
        poissonsRatios: b
      };
      const d = g(s, a, t.nodeInputs.val, t.elementInputs.val);
      t.deformOutputs.val = d, t.analyzeOutputs.val = E(s, a, t.elementInputs.val, d), t.objects3D.val = [];
      const h = n.F * n.L / (n.A * n.E), I = ((_b = (_a = d.deformations) == null ? void 0 : _a.get(o)) == null ? void 0 : _b[0]) ?? 0;
      console.log(`[Barra axial] \u03B4 te\xF3rico=${(h * 1e3).toFixed(4)} mm  FEM=${(I * 1e3).toFixed(4)} mm  ratio=${(I / h).toFixed(3)}`);
    },
    runModal(n, t, o) {
      var _a, _b;
      const r = t.nodes.val, s = t.elements.val, a = t.nodeInputs.val, m = t.elementInputs.val;
      if (!(!r.length || !s.length || !((_a = a.supports) == null ? void 0 : _a.size) || !((_b = m.densities) == null ? void 0 : _b.size))) try {
        const l = F(r, s, a, m, 8);
        o.render(l, {
          title: `Barra axial L=${n.L}m`,
          properties: [
            `E=${(n.E / 1e6).toFixed(0)} GPa  A=${(n.A * 1e4).toFixed(1)} cm\xB2  \u03C1=78 kN/m\xB3`
          ]
        });
      } catch (l) {
        console.warn("Modal barra error:", l.message);
      }
    }
  };
});
export {
  __tla,
  O as b
};
