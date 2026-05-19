import { p as O, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let j;
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
  j = {
    id: "safe-bench-zapata-conectada",
    name: "SAFE Benchmark \xB7 Zapata Conectada 5\xD71m t variable (\u0394 -0.25%)",
    category: "Cimentaciones",
    benchmark: true,
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "displacementZ",
      "bendingXX",
      "bendingYY",
      "vonMises"
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
    build(o, d) {
      const u = o.Lz, h = o.Bz, M = o.t_zap, T = o.t_vig, i = o.Lzap, b = o.ks_tonfm3 * I, w = o.P_tonf * I, x = Math.round(o.nx), v = Math.round(o.ny), c = x + 1, z = v + 1, m = u / x, _ = h / v, p = [];
      for (let e = 0; e < z; ++e) for (let n = 0; n < c; ++n) p.push([
        n * m,
        e * _
      ]);
      const l = [], k = [];
      for (let e = 0; e < v; ++e) for (let n = 0; n < x; ++n) {
        const a = e * c + n;
        l.push([
          a,
          a + 1,
          a + c + 1,
          a + c
        ]);
        const s = (n + 0.5) * m, t = s < i || s > u - i;
        k.push(t ? M : T);
      }
      const r = [];
      for (let e = 0; e < z; ++e) for (let n = 0; n < c; ++n) {
        const a = n === 0 || n === c - 1, s = e === 0 || e === z - 1, t = a && s ? 0.25 : a || s ? 0.5 : 1, f = m * _ * t, g = e * c + n;
        if (r.push({
          node: g,
          dof: 0,
          k: b * f
        }), a && s) {
          const C = 1e-6 * b * m * _;
          r.push({
            node: g,
            dof: 1,
            k: C
          }), r.push({
            node: g,
            dof: 2,
            k: C
          });
        }
      }
      const y = (e, n) => {
        let a = -1, s = 1 / 0;
        for (let t = 0; t < p.length; ++t) {
          const f = (p[t][0] - e) ** 2 + (p[t][1] - n) ** 2;
          f < s && (s = f, a = t);
        }
        return a;
      }, Z = [
        {
          node: y(i / 2, h / 2),
          dof: 0,
          value: -w
        },
        {
          node: y(u - i / 2, h / 2),
          dof: 0,
          value: -w
        }
      ], L = 24855e3, E = 0.2, S = O({
        E: L,
        nu: E,
        thickness: M,
        theoryType: 0,
        bcType: "none",
        nodes: p,
        elements: l,
        bcs: [],
        pointLoads: Z,
        springs: r,
        thicknesses: k
      }), A = p.map((e) => [
        e[0],
        e[1],
        0
      ]);
      d.nodes.val = A, d.elements.val = l, d.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, d.elementInputs.val = {
        elasticities: new Map(l.map((e, n) => [
          n,
          L
        ])),
        poissonsRatios: new Map(l.map((e, n) => [
          n,
          E
        ])),
        thicknesses: new Map(l.map((e, n) => [
          n,
          k[n]
        ]))
      };
      const B = /* @__PURE__ */ new Map();
      for (const e of S.nodeResults) B.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      d.deformOutputs.val = {
        deformations: B,
        reactions: /* @__PURE__ */ new Map()
      };
      const N = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
      for (let e = 0; e < l.length; ++e) {
        const n = [], a = [];
        for (const s of l[e]) {
          const t = S.nodeResults[s];
          n.push(t.w * 1e3), a.push(b * t.w);
        }
        R.set(e, n), N.set(e, a);
      }
      d.analyzeOutputs.val = {
        displacementZ: R,
        pressure: N
      };
    }
  };
});
export {
  __tla,
  j as s
};
