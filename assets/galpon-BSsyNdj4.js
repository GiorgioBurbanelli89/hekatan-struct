import { a as N } from "./analyze-ClLKGn9k.js";
import { m as S, d as Y, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
let E;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let $, F, Z, _, c;
  $ = 2e8;
  F = 0.3;
  Z = $ / (2 * (1 + F));
  _ = 78;
  c = (n, o, i, p, u, m) => ({
    default: i,
    min: p,
    max: u,
    step: m,
    label: o,
    folder: n
  });
  E = {
    id: "galpon",
    name: "Galp\xF3n (nave industrial)",
    category: "Frames 1D",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      span: c("Geometr\xEDa", "Luz (m)", 12, 6, 30, 0.5),
      length: c("Geometr\xEDa", "Largo (m)", 20, 6, 60, 1),
      height: c("Geometr\xEDa", "Altura columna (m)", 6, 3, 15, 0.5),
      archRise: c("Geometr\xEDa", "Flecha arco (m)", 3, 0.5, 8, 0.25),
      xDiv: c("Geometr\xEDa", "Div. X (arco)", 8, 4, 20, 1),
      yDiv: c("Geometr\xEDa", "Div. Y (longitud)", 4, 2, 12, 1),
      barA: c("Secciones", "\xC1rea barra (m\xB2)", 2e-3, 5e-4, 0.02, 5e-4),
      CM: c("Cargas", "CM por nodo (kN)", -1, -10, 0, 0.1)
    },
    build(n, o) {
      const i = n.span, p = n.length, u = n.height, m = n.archRise, d = Math.round(n.xDiv), h = Math.round(n.yDiv), L = (e) => u + m * (1 - Math.pow(2 * e / i - 1, 2)), g = h + 1, s = [], a = [];
      for (let e = 0; e < g; e++) {
        const t = [], r = p / h * e;
        t.push(s.length), s.push([
          0,
          r,
          0
        ]), t.push(s.length), s.push([
          i,
          r,
          0
        ]), t.push(s.length), s.push([
          0,
          r,
          u
        ]);
        for (let y = 1; y < d; y++) {
          const O = i / d * y;
          t.push(s.length), s.push([
            O,
            r,
            L(O)
          ]);
        }
        t.push(s.length), s.push([
          i,
          r,
          u
        ]), a.push(t);
      }
      const l = [];
      for (let e = 0; e < g; e++) {
        const t = a[e];
        l.push([
          t[0],
          t[2]
        ]), l.push([
          t[1],
          t[t.length - 1]
        ]);
        for (let r = 2; r < t.length - 1; r++) l.push([
          t[r],
          t[r + 1]
        ]);
      }
      for (let e = 0; e < h; e++) for (let t = 2; t < a[0].length; t++) l.push([
        a[e][t],
        a[e + 1][t]
      ]);
      for (let e = 0; e < h; e++) for (let t = 2; t < a[0].length - 1; t += 2) l.push([
        a[e][t],
        a[e + 1][t + 1]
      ]);
      const f = /* @__PURE__ */ new Map();
      for (let e = 0; e < g; e++) f.set(a[e][0], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), f.set(a[e][1], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const w = /* @__PURE__ */ new Map();
      if (n.CM !== 0) for (let e = 0; e < g; e++) for (let t = 2; t < a[e].length; t++) w.set(a[e][t], [
        0,
        0,
        n.CM,
        0,
        0,
        0
      ]);
      const v = n.barA, M = v * v / 12, I = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
      for (let e = 0; e < l.length; e++) I.set(e, $), D.set(e, Z), R.set(e, F), A.set(e, _), G.set(e, v), C.set(e, M), b.set(e, M), x.set(e, 2 * M);
      o.nodes.val = s, o.elements.val = l, o.nodeInputs.val = {
        supports: f,
        loads: w
      }, o.elementInputs.val = {
        elasticities: I,
        shearModuli: D,
        areas: G,
        momentsOfInertiaZ: C,
        momentsOfInertiaY: b,
        torsionalConstants: x,
        densities: A,
        poissonsRatios: R
      };
      const z = Y(s, l, o.nodeInputs.val, o.elementInputs.val);
      o.deformOutputs.val = z, o.analyzeOutputs.val = N(s, l, o.elementInputs.val, z), o.objects3D.val = [];
    },
    runModal(n, o, i) {
      var _a, _b;
      const p = o.nodes.val, u = o.elements.val, m = o.nodeInputs.val, d = o.elementInputs.val;
      if (!(!p.length || !u.length || !((_a = m.supports) == null ? void 0 : _a.size) || !((_b = d.densities) == null ? void 0 : _b.size))) try {
        const h = S(p, u, m, d, 12);
        i.render(h, {
          title: `Galp\xF3n L=${n.span}m largo=${n.length}m`,
          properties: [
            `Altura ${n.height}m + arco ${n.archRise}m  perfil A=${(n.barA * 1e4).toFixed(1)} cm\xB2  acero`
          ]
        });
      } catch (h) {
        console.warn("Modal galp\xF3n error:", h.message);
      }
    }
  };
});
export {
  __tla,
  E as g
};
