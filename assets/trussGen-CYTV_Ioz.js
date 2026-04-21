import { a as A } from "./analyze-ClLKGn9k.js";
import { m as G, d as y, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let R;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let w, x, O, k;
  w = 2e8;
  x = 0.3;
  O = w / (2 * (1 + x));
  k = 78;
  R = {
    id: "truss-gen",
    name: "Cercha (Warren)",
    category: "Frames 1D",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      span: {
        default: 12,
        min: 4,
        max: 30,
        step: 0.5,
        label: "Luz (m)",
        folder: "Geometr\xEDa"
      },
      divisions: {
        default: 6,
        min: 2,
        max: 20,
        step: 1,
        label: "Divisiones",
        folder: "Geometr\xEDa"
      },
      height: {
        default: 1.5,
        min: 0.5,
        max: 5,
        step: 0.1,
        label: "Altura cercha (m)",
        folder: "Geometr\xEDa"
      },
      barA: {
        default: 4e-3,
        min: 1e-3,
        max: 0.02,
        step: 1e-3,
        label: "\xC1rea barra (m\xB2)",
        folder: "Secciones"
      },
      CM: {
        default: -2,
        min: -20,
        max: 0,
        step: 0.5,
        label: "CM por nodo (kN)",
        folder: "Cargas"
      },
      CV: {
        default: -1,
        min: -20,
        max: 0,
        step: 0.5,
        label: "CV por nodo (kN)",
        folder: "Cargas"
      }
    },
    build(o, t) {
      const s = Math.round(o.divisions), l = o.span / s, i = o.height, a = [];
      for (let e = 0; e <= s; e++) a.push([
        l * e,
        0,
        0
      ]);
      for (let e = 0; e <= s; e++) a.push([
        l * e,
        0,
        i
      ]);
      const r = s + 1, n = [];
      for (let e = 0; e < s; e++) n.push([
        e,
        e + 1
      ]);
      for (let e = 0; e < s; e++) n.push([
        r + e,
        r + e + 1
      ]);
      for (let e = 0; e <= s; e++) n.push([
        e,
        r + e
      ]);
      for (let e = 0; e < s; e++) e < s / 2 ? n.push([
        e,
        r + e + 1
      ]) : n.push([
        r + e,
        e + 1
      ]);
      const z = /* @__PURE__ */ new Map([
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
        ],
        [
          s,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]), p = o.CM + o.CV, c = /* @__PURE__ */ new Map();
      if (p !== 0) for (let e = 0; e <= s; e++) c.set(e, [
        0,
        0,
        p,
        0,
        0,
        0
      ]);
      const d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), u = o.barA, m = u * u / 12;
      for (let e = 0; e < n.length; e++) d.set(e, w), f.set(e, O), I.set(e, x), C.set(e, k), h.set(e, u), v.set(e, m), M.set(e, m), b.set(e, 2 * m);
      t.nodes.val = a, t.elements.val = n, t.nodeInputs.val = {
        supports: z,
        loads: c
      }, t.elementInputs.val = {
        elasticities: d,
        shearModuli: f,
        areas: h,
        momentsOfInertiaZ: v,
        momentsOfInertiaY: M,
        torsionalConstants: b,
        densities: C,
        poissonsRatios: I
      };
      const g = y(a, n, t.nodeInputs.val, t.elementInputs.val);
      t.deformOutputs.val = g, t.analyzeOutputs.val = A(a, n, t.elementInputs.val, g), t.objects3D.val = [];
    },
    runModal(o, t, s) {
      var _a, _b;
      const l = t.nodes.val, i = t.elements.val, a = t.nodeInputs.val, r = t.elementInputs.val;
      if (!(!l.length || !i.length || !((_a = a.supports) == null ? void 0 : _a.size) || !((_b = r.densities) == null ? void 0 : _b.size))) try {
        const n = G(l, i, a, r, 12);
        s.render(n, {
          title: `Cercha Warren L=${o.span}m h=${o.height}m`,
          properties: [
            `E=200 GPa (acero) \u03C1=78 kN/m\xB3  A=${(o.barA * 1e4).toFixed(0)} cm\xB2`
          ]
        });
      } catch (n) {
        console.warn("Modal truss error:", n.message);
      }
    }
  };
});
export {
  __tla,
  R as t
};
