import { p as O, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let q;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let I;
  I = 9.80665;
  q = {
    id: "safe-bench-zapata-conectada",
    name: "SAFE Benchmark \xB7 Zapata Conectada 5\xD71m t variable (\u0394 -0.25%)",
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
      "Caso 4 del framework Hekatan vs SAFE \u2014 paridad -0.25%",
      "Losa con espesor variable: zapatas extremas t=0.40m, viga centro t=0.20m",
      "2 columnas centradas en cada zapata: x=0.5 y x=4.5",
      "MUESTRA artefacto f\xEDsico: viga delgada genera rotaci\xF3n, esquinas hunden M\xC1S que las cargas"
    ],
    params: {
      Lz: {
        default: 5,
        min: 3,
        max: 10,
        step: 0.25,
        label: "Lz total (m)"
      },
      Bz: {
        default: 1,
        min: 0.5,
        max: 2,
        step: 0.25,
        label: "Bz ancho (m)"
      },
      t_zap: {
        default: 0.4,
        min: 0.2,
        max: 1,
        step: 0.05,
        label: "t zapata (m)"
      },
      t_vig: {
        default: 0.2,
        min: 0.1,
        max: 0.5,
        step: 0.05,
        label: "t viga centro (m)"
      },
      Lzap: {
        default: 1,
        min: 0.5,
        max: 2,
        step: 0.25,
        label: "L zapata extremo (m)"
      },
      ks_tonfm3: {
        default: 105,
        min: 50,
        max: 5e3,
        step: 50,
        label: "ks (tonf/m\xB3)"
      },
      P_tonf: {
        default: 20,
        min: 1,
        max: 50,
        step: 1,
        label: "P por col (tonf)"
      },
      nx: {
        default: 20,
        min: 10,
        max: 40,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "ny mesh"
      }
    },
    build(t, l) {
      const x = t.Lz, M = t.Bz, z = t.t_zap, T = t.t_vig, m = t.Lzap, _ = t.ks_tonfm3 * I, k = t.P_tonf * I, r = Math.round(t.nx), y = Math.round(t.ny), c = r + 1, b = y + 1, p = x / r, h = M / y, d = [];
      for (let n = 0; n < b; ++n) for (let e = 0; e < c; ++e) d.push([
        e * p,
        n * h
      ]);
      const i = [], v = [];
      for (let n = 0; n < y; ++n) for (let e = 0; e < r; ++e) {
        const a = n * c + e;
        i.push([
          a,
          a + 1,
          a + c + 1,
          a + c
        ]);
        const s = (e + 0.5) * p, o = s < m || s > x - m;
        v.push(o ? z : T);
      }
      const f = [];
      for (let n = 0; n < b; ++n) for (let e = 0; e < c; ++e) {
        const a = e === 0 || e === c - 1, s = n === 0 || n === b - 1, o = a && s ? 0.25 : a || s ? 0.5 : 1, u = p * h * o, g = n * c + e;
        if (f.push({
          node: g,
          dof: 0,
          k: _ * u
        }), a && s) {
          const C = 1e-6 * _ * p * h;
          f.push({
            node: g,
            dof: 1,
            k: C
          }), f.push({
            node: g,
            dof: 2,
            k: C
          });
        }
      }
      const w = (n, e) => {
        let a = -1, s = 1 / 0;
        for (let o = 0; o < d.length; ++o) {
          const u = (d[o][0] - n) ** 2 + (d[o][1] - e) ** 2;
          u < s && (s = u, a = o);
        }
        return a;
      }, j = [
        {
          node: w(m / 2, M / 2),
          dof: 0,
          value: -k
        },
        {
          node: w(x - m / 2, M / 2),
          dof: 0,
          value: -k
        }
      ], L = 24855e3, E = 0.2, X = O({
        E: L,
        nu: E,
        thickness: z,
        theoryType: 0,
        bcType: "none",
        nodes: d,
        elements: i,
        bcs: [],
        pointLoads: j,
        springs: f,
        thicknesses: v
      }), A = d.map((n) => [
        n[0],
        n[1],
        0
      ]);
      l.nodes.val = A, l.elements.val = i, l.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, l.elementInputs.val = {
        elasticities: new Map(i.map((n, e) => [
          e,
          L
        ])),
        poissonsRatios: new Map(i.map((n, e) => [
          e,
          E
        ])),
        thicknesses: new Map(i.map((n, e) => [
          e,
          v[e]
        ]))
      };
      const S = /* @__PURE__ */ new Map();
      for (const n of X.nodeResults) S.set(n.node, [
        0,
        0,
        n.w,
        n.bx,
        n.by,
        0
      ]);
      l.deformOutputs.val = {
        deformations: S,
        reactions: /* @__PURE__ */ new Map()
      };
      const B = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map();
      X.elementResults.forEach((n, e) => {
        B.set(e, [
          n.Mxx,
          n.Mxx,
          n.Mxx,
          n.Mxx
        ]), N.set(e, [
          n.Myy,
          n.Myy,
          n.Myy,
          n.Myy
        ]), R.set(e, [
          n.Mxy,
          n.Mxy,
          n.Mxy,
          n.Mxy
        ]);
        const a = Math.sqrt(n.Mxx ** 2 + n.Myy ** 2 - n.Mxx * n.Myy + 3 * n.Mxy ** 2);
        Y.set(e, [
          a,
          a,
          a,
          a
        ]);
      }), l.analyzeOutputs.val = {
        bendingXX: B,
        bendingYY: N,
        bendingXY: R,
        vonMises: Y
      }, l.objects3D.val = [];
    }
  };
});
export {
  __tla,
  q as s
};
