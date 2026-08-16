import { a as L } from "./analyze-Baqb28rE.js";
import { m as N, d as Y, __tla as __tla_0 } from "./didacticCpp-PqvqKlgs.js";
let J;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let O, $, F, P, Z, j, i;
  O = 2e8;
  $ = 0.3;
  F = O / (2 * (1 + $));
  P = 78;
  Z = 9.81;
  j = P / Z;
  i = (n, o, u, p, c, m) => ({
    default: u,
    min: p,
    max: c,
    step: m,
    label: o,
    folder: n
  });
  J = {
    id: "galpon",
    name: "Galp\xF3n (nave industrial)",
    category: "\u{1F3D7} P\xF3rticos y barras",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      span: i("Geometr\xEDa", "Luz (m)", 12, 6, 30, 0.5),
      length: i("Geometr\xEDa", "Largo (m)", 20, 6, 60, 1),
      height: i("Geometr\xEDa", "Altura columna (m)", 6, 3, 15, 0.5),
      archRise: i("Geometr\xEDa", "Flecha arco (m)", 3, 0.5, 8, 0.25),
      xDiv: i("Geometr\xEDa", "Div. X (arco)", 8, 4, 20, 1),
      yDiv: i("Geometr\xEDa", "Div. Y (longitud)", 4, 2, 12, 1),
      barA: i("Secciones", "\xC1rea barra (m\xB2)", 2e-3, 5e-4, 0.02, 5e-4),
      barI: i("Secciones", "Inercia barra (cm\u2074)", 869, 10, 2e4, 10),
      CM: i("Cargas", "CM por nodo (kN)", -1, -10, 0, 0.1)
    },
    build(n, o) {
      const u = n.span, p = n.length, c = n.height, m = n.archRise, d = Math.round(n.xDiv), h = Math.round(n.yDiv), S = (e) => c + m * (1 - Math.pow(2 * e / u - 1, 2)), g = h + 1, s = [], a = [];
      for (let e = 0; e < g; e++) {
        const t = [], r = p / h * e;
        t.push(s.length), s.push([
          0,
          r,
          0
        ]), t.push(s.length), s.push([
          u,
          r,
          0
        ]), t.push(s.length), s.push([
          0,
          r,
          c
        ]);
        for (let M = 1; M < d; M++) {
          const z = u / d * M;
          t.push(s.length), s.push([
            z,
            r,
            S(z)
          ]);
        }
        t.push(s.length), s.push([
          u,
          r,
          c
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
      const y = /* @__PURE__ */ new Map();
      if (n.CM !== 0) for (let e = 0; e < g; e++) for (let t = 2; t < a[e].length; t++) y.set(a[e][t], [
        0,
        0,
        n.CM,
        0,
        0,
        0
      ]);
      const _ = n.barA, v = (n.barI ?? 869) * 1e-8, I = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
      for (let e = 0; e < l.length; e++) I.set(e, O), w.set(e, F), R.set(e, $), C.set(e, j), b.set(e, _), G.set(e, v), D.set(e, v), A.set(e, 2 * v);
      o.nodes.val = s, o.elements.val = l, o.nodeInputs.val = {
        supports: f,
        loads: y
      }, o.elementInputs.val = {
        elasticities: I,
        shearModuli: w,
        areas: b,
        momentsOfInertiaY: G,
        momentsOfInertiaZ: D,
        torsionalConstants: A,
        densities: C,
        poissonsRatios: R
      };
      const x = Y(s, l, o.nodeInputs.val, o.elementInputs.val);
      o.deformOutputs.val = x, o.analyzeOutputs.val = L(s, l, o.elementInputs.val, x), o.objects3D.val = [];
    },
    runModal(n, o, u) {
      var _a, _b;
      const p = o.nodes.val, c = o.elements.val, m = o.nodeInputs.val, d = o.elementInputs.val;
      if (!(!p.length || !c.length || !((_a = m.supports) == null ? void 0 : _a.size) || !((_b = d.densities) == null ? void 0 : _b.size))) try {
        const h = N(p, c, m, d, 12);
        u.render(h, {
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
  J as g
};
