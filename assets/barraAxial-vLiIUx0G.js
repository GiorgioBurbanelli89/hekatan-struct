import { a as g } from "./analyze-Baqb28rE.js";
import { m as w, d as E, __tla as __tla_0 } from "./didacticCpp-PqvqKlgs.js";
let y;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let A, I, L, _, O, G;
  A = 2e8;
  I = 0.3;
  L = A / (2 * (1 + I));
  _ = 78;
  O = 9.81;
  G = _ / O;
  y = {
    id: "W1_barra_axial",
    name: "W1 \u2014 Barra axial (1 DOF)",
    category: "\u{1F3C1} Benchmarks \xB7 1\uFE0F\u20E3 Frames \xB7 \u{1F3D7} Vigas \xB7 \u{1F3AF} 1 DOF Axial",
    benchmark: true,
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
    build(a, n) {
      var _a, _b;
      const o = Math.round(a.nElem), r = a.L / o, s = [], t = [];
      for (let e = 0; e <= o; e++) s.push([
        r * e,
        0,
        0
      ]);
      for (let e = 0; e < o; e++) t.push([
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
            a.F,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ]), c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), i = a.A * a.A / 12;
      for (let e = 0; e < t.length; e++) c.set(e, a.E), u.set(e, L), h.set(e, I), v.set(e, G), p.set(e, a.A), f.set(e, i), x.set(e, i), M.set(e, 2 * i);
      n.nodes.val = s, n.elements.val = t, n.nodeInputs.val = {
        supports: m,
        loads: l
      }, n.elementInputs.val = {
        elasticities: c,
        shearModuli: u,
        areas: p,
        momentsOfInertiaY: f,
        momentsOfInertiaZ: x,
        torsionalConstants: M,
        densities: v,
        poissonsRatios: h
      };
      const d = E(s, t, n.nodeInputs.val, n.elementInputs.val);
      n.deformOutputs.val = d, n.analyzeOutputs.val = g(s, t, n.elementInputs.val, d), n.objects3D.val = [];
      const b = a.F * a.L / (a.A * a.E), F = ((_b = (_a = d.deformations) == null ? void 0 : _a.get(o)) == null ? void 0 : _b[0]) ?? 0;
      console.log(`[Barra axial] \u03B4 te\xF3rico=${(b * 1e3).toFixed(4)} mm  FEM=${(F * 1e3).toFixed(4)} mm  ratio=${(F / b).toFixed(3)}`);
    },
    runModal(a, n, o) {
      var _a, _b;
      const r = n.nodes.val, s = n.elements.val, t = n.nodeInputs.val, m = n.elementInputs.val;
      if (!(!r.length || !s.length || !((_a = t.supports) == null ? void 0 : _a.size) || !((_b = m.densities) == null ? void 0 : _b.size))) try {
        const l = w(r, s, t, m, 8);
        o.render(l, {
          title: `Barra axial L=${a.L}m`,
          properties: [
            `E=${(a.E / 1e6).toFixed(0)} GPa  A=${(a.A * 1e4).toFixed(1)} cm\xB2  \u03C1=78 kN/m\xB3`
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
  y as b
};
