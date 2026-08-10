import { a as W } from "./analyze-CDRzE7vM.js";
import { m as Y, d as Z, __tla as __tla_0 } from "./didacticCpp-BTBicwl0.js";
let X;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let b, x, q, F, y, z, K, L, c, Q;
  b = 25e6;
  x = 0.2;
  q = b / (2 * (1 + x));
  F = 24;
  y = 2e8;
  z = 0.3;
  K = y / (2 * (1 + z));
  L = 78;
  c = (e, o, l, s, i, r) => ({
    default: l,
    min: s,
    max: i,
    step: r,
    label: o,
    folder: e
  });
  Q = (e, o, l, s) => ({
    default: l,
    label: o,
    folder: e,
    options: s
  });
  X = {
    id: "portico-2d",
    name: "P\xF3rtico 2D (un piso)",
    category: "\u{1F3D7} P\xF3rticos y barras",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      width: c("Geometr\xEDa", "Ancho vano (m)", 5, 2, 12, 0.5),
      height: c("Geometr\xEDa", "Altura (m)", 3, 2, 6, 0.1),
      nSub: c("Geometr\xEDa", "Div. viga", 4, 1, 10, 1),
      mat: Q("Secciones", "Material", 0, {
        Hormig\u00F3n: 0,
        Acero: 1
      }),
      colB: c("Secciones", "b columna (m)", 0.4, 0.2, 0.8, 0.05),
      colH: c("Secciones", "h columna (m)", 0.4, 0.2, 0.8, 0.05),
      vigaB: c("Secciones", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: c("Secciones", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      CM: c("Cargas", "CM por nodo (kN)", -10, -50, 0, 1),
      CV: c("Cargas", "CV por nodo (kN)", -5, -30, 0, 1),
      Ex: c("Cargas", "Ex lateral tope (kN)", 30, -200, 200, 5)
    },
    build(e, o) {
      const l = e.width, s = e.height, i = Math.max(1, Math.round(e.nSub)), r = e.CM + e.CV, u = e.Ex, a = [
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          s
        ],
        [
          l,
          0,
          s
        ],
        [
          l,
          0,
          0
        ]
      ], n = [], d = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set();
      d.add(n.length), n.push([
        0,
        1
      ]), d.add(n.length), n.push([
        2,
        3
      ]);
      let h = 1;
      for (let t = 1; t < i; t++) {
        const j = t / i, S = a.length;
        a.push([
          j * l,
          0,
          s
        ]), p.add(n.length), n.push([
          h,
          S
        ]), h = S;
      }
      p.add(n.length), n.push([
        h,
        2
      ]);
      const E = /* @__PURE__ */ new Map([
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
          3,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]), m = /* @__PURE__ */ new Map();
      if (r !== 0) for (let t = 1; t < a.length; t++) t !== 3 && m.set(t, [
        0,
        0,
        r,
        0,
        0,
        0
      ]);
      if (u !== 0) {
        const t = m.get(2) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        m.set(2, [
          u,
          0,
          t[2],
          0,
          0,
          0
        ]);
      }
      const $ = e.mat < 0.5 ? b : y, A = e.mat < 0.5 ? q : K, D = e.mat < 0.5 ? x : z, G = e.mat < 0.5 ? F : L, O = e.colB * e.colH, P = e.colB * e.colH ** 3 / 12, k = e.colH * e.colB ** 3 / 12, _ = 0.14 * Math.pow(Math.min(e.colB, e.colH), 4), J = e.vigaB * e.vigaH, N = e.vigaB * e.vigaH ** 3 / 12, R = e.vigaH * e.vigaB ** 3 / 12, V = 0.21 * Math.pow(Math.min(e.vigaB, e.vigaH), 3) * Math.max(e.vigaB, e.vigaH), w = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map();
      for (let t = 0; t < n.length; t++) w.set(t, $), I.set(t, A), B.set(t, D), H.set(t, G), d.has(t) ? (v.set(t, O), g.set(t, k), M.set(t, P), f.set(t, _)) : (v.set(t, J), g.set(t, R), M.set(t, N), f.set(t, V));
      o.nodes.val = a, o.elements.val = n, o.nodeInputs.val = {
        supports: E,
        loads: m
      }, o.elementInputs.val = {
        elasticities: w,
        shearModuli: I,
        areas: v,
        momentsOfInertiaY: g,
        momentsOfInertiaZ: M,
        torsionalConstants: f,
        densities: H,
        poissonsRatios: B
      };
      const C = Z(a, n, o.nodeInputs.val, o.elementInputs.val);
      o.deformOutputs.val = C, o.analyzeOutputs.val = W(a, n, o.elementInputs.val, C), o.objects3D.val = [];
    },
    runModal(e, o, l) {
      var _a, _b;
      const s = o.nodes.val, i = o.elements.val, r = o.nodeInputs.val, u = o.elementInputs.val;
      if (!(!s.length || !i.length || !((_a = r.supports) == null ? void 0 : _a.size) || !((_b = u.densities) == null ? void 0 : _b.size))) try {
        const a = Y(s, i, r, u, 8);
        l.render(a, {
          title: `P\xF3rtico 2D W=${e.width}m H=${e.height}m`,
          properties: [
            `${e.mat < 0.5 ? "Hormig\xF3n" : "Acero"}  col ${e.colB}\xD7${e.colH}  viga ${e.vigaB}\xD7${e.vigaH}`
          ]
        });
      } catch (a) {
        console.warn("Modal p\xF3rtico 2D error:", a.message);
      }
    }
  };
});
export {
  __tla,
  X as p
};
