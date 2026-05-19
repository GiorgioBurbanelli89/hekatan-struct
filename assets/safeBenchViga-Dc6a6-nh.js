import { p as D, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let L;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let P;
  P = 9.80665;
  L = {
    id: "safe-bench-viga-cimentacion",
    name: "SAFE Benchmark \xB7 Viga Cimentaci\xF3n 8\xD71\xD70.50m, 4 cols (\u0394 +0.01%)",
    category: "Cimentaciones",
    benchmark: true,
    defaultShellResult: "bendingXX",
    availableShellResults: [
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "vonMises",
      "displacementZ"
    ],
    hasModal: false,
    guide: [
      "Caso 5 del framework Hekatan vs SAFE \u2014 PARIDAD CASI PERFECTA <0.01%",
      "Viga corrida 8\xD71m \xD7 0.50m espesor, 4 columnas alineadas en eje x",
      "Cargas: 4 cols \xD7 20 tonf en (1, 0.5), (3, 0.5), (5, 0.5), (7, 0.5)",
      "Resultado: w_max bajo col interiores -5.11 mm (Hekatan = SAFE)",
      "Comportamiento cuasi-r\xEDgido: ratio w_max/w_teorico \u2248 1.02"
    ],
    params: {
      Lz: {
        default: 8,
        min: 4,
        max: 20,
        step: 0.5,
        label: "Lz longitudinal (m)"
      },
      Bz: {
        default: 1,
        min: 0.5,
        max: 3,
        step: 0.25,
        label: "Bz ancho (m)"
      },
      tz: {
        default: 0.5,
        min: 0.2,
        max: 1.5,
        step: 0.05,
        label: "t espesor (m)"
      },
      ks_tonfm3: {
        default: 2e3,
        min: 500,
        max: 1e4,
        step: 100,
        label: "ks (tonf/m\xB3)"
      },
      P_tonf: {
        default: 20,
        min: 1,
        max: 100,
        step: 1,
        label: "P por col (tonf)"
      },
      nCols: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "N columnas"
      },
      nx: {
        default: 32,
        min: 8,
        max: 64,
        step: 4,
        label: "nx mesh (longitudinal)"
      },
      ny: {
        default: 4,
        min: 2,
        max: 10,
        step: 1,
        label: "ny mesh (transversal)"
      }
    },
    build(t, s) {
      const h = t.Lz, g = t.Bz, k = t.tz, v = t.ks_tonfm3 * P, S = t.P_tonf * P, w = Math.round(t.nCols), x = Math.round(t.nx), M = Math.round(t.ny), a = x + 1, r = M + 1, y = h / x, b = g / M, _ = [];
      for (let n = 1; n <= w; ++n) {
        const e = n * h / (w + 1);
        _.push([
          e,
          g / 2
        ]);
      }
      const c = [];
      for (let n = 0; n < r; ++n) for (let e = 0; e < a; ++e) c.push([
        e * y,
        n * b
      ]);
      const i = [];
      for (let n = 0; n < M; ++n) for (let e = 0; e < x; ++e) {
        const o = n * a + e;
        i.push([
          o,
          o + 1,
          o + a + 1,
          o + a
        ]);
      }
      const f = [];
      for (let n = 0; n < r; ++n) for (let e = 0; e < a; ++e) {
        const o = e === 0 || e === a - 1, d = n === 0 || n === r - 1, l = o && d ? 0.25 : o || d ? 0.5 : 1, u = y * b * l, m = n * a + e;
        if (f.push({
          node: m,
          dof: 0,
          k: v * u
        }), o && d) {
          const p = 1e-6 * v * y * b;
          f.push({
            node: m,
            dof: 1,
            k: p
          }), f.push({
            node: m,
            dof: 2,
            k: p
          });
        }
      }
      const j = (n, e) => {
        let o = -1, d = 1 / 0;
        for (let l = 0; l < c.length; ++l) {
          const u = c[l][0] - n, m = c[l][1] - e, p = u * u + m * m;
          p < d && (d = p, o = l);
        }
        return o;
      }, B = _.map(([n, e]) => ({
        node: j(n, e),
        dof: 0,
        value: -S
      })), z = 24855e3, C = 0.2, E = D({
        E: z,
        nu: C,
        thickness: k,
        theoryType: 0,
        bcType: "none",
        nodes: c,
        elements: i,
        bcs: [],
        pointLoads: B,
        springs: f
      }), Y = c.map((n) => [
        n[0],
        n[1],
        0
      ]);
      s.nodes.val = Y, s.elements.val = i, s.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, s.elementInputs.val = {
        elasticities: new Map(i.map((n, e) => [
          e,
          z
        ])),
        poissonsRatios: new Map(i.map((n, e) => [
          e,
          C
        ])),
        thicknesses: new Map(i.map((n, e) => [
          e,
          k
        ]))
      };
      const N = /* @__PURE__ */ new Map();
      for (const n of E.nodeResults) N.set(n.node, [
        0,
        0,
        n.w,
        n.bx,
        n.by,
        0
      ]);
      s.deformOutputs.val = {
        deformations: N,
        reactions: /* @__PURE__ */ new Map()
      };
      const A = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
      E.elementResults.forEach((n, e) => {
        A.set(e, [
          n.Mxx,
          n.Mxx,
          n.Mxx,
          n.Mxx
        ]), R.set(e, [
          n.Myy,
          n.Myy,
          n.Myy,
          n.Myy
        ]), X.set(e, [
          n.Mxy,
          n.Mxy,
          n.Mxy,
          n.Mxy
        ]);
        const o = Math.sqrt(n.Mxx ** 2 + n.Myy ** 2 - n.Mxx * n.Myy + 3 * n.Mxy ** 2);
        I.set(e, [
          o,
          o,
          o,
          o
        ]);
      }), s.analyzeOutputs.val = {
        bendingXX: A,
        bendingYY: R,
        bendingXY: X,
        vonMises: I
      }, s.objects3D.val = [];
    }
  };
});
export {
  __tla,
  L as s
};
