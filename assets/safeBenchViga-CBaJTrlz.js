import { b as D, E as T, c as O, L as H } from "./Text-BmY6zyQy.js";
import { p as V, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let K;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const I = 9.80665;
  function G(o, a, r, p) {
    const x = new D(p, p, r), u = new T(x), M = new O(u, new H({
      color: 8421504,
      linewidth: 2
    }));
    return M.position.set(o, a, r / 2), [
      M
    ];
  }
  K = {
    id: "safe-bench-viga-cimentacion",
    name: "SAFE Benchmark \xB7 Viga Cimentaci\xF3n 8\xD71\xD70.50m, 4 cols (\u0394 +0.01%)",
    category: "Cimentaciones",
    benchmark: true,
    defaultShellResult: "pressure",
    availableShellResults: [
      "pressure",
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
      },
      h_ped: {
        default: 0.5,
        min: 0.2,
        max: 1.5,
        step: 0.05,
        label: "Hp pedestal (m)"
      },
      b_ped: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "lado pedestal (m)"
      }
    },
    build(o, a) {
      const r = o.Lz, p = o.Bz, x = o.tz, u = o.ks_tonfm3 * I, M = o.P_tonf * I, E = Math.round(o.nCols), h = Math.round(o.nx), g = Math.round(o.ny), c = h + 1, w = g + 1, _ = r / h, k = p / g, v = [];
      for (let e = 1; e <= E; ++e) {
        const n = e * r / (E + 1);
        v.push([
          n,
          p / 2
        ]);
      }
      const m = [];
      for (let e = 0; e < w; ++e) for (let n = 0; n < c; ++n) m.push([
        n * _,
        e * k
      ]);
      const i = [];
      for (let e = 0; e < g; ++e) for (let n = 0; n < h; ++n) {
        const s = e * c + n;
        i.push([
          s,
          s + 1,
          s + c + 1,
          s + c
        ]);
      }
      const b = [];
      for (let e = 0; e < w; ++e) for (let n = 0; n < c; ++n) {
        const s = n === 0 || n === c - 1, t = e === 0 || e === w - 1, l = s && t ? 0.25 : s || t ? 0.5 : 1, y = _ * k * l, d = e * c + n;
        if (b.push({
          node: d,
          dof: 0,
          k: u * y
        }), s && t) {
          const f = 1e-6 * u * _ * k;
          b.push({
            node: d,
            dof: 1,
            k: f
          }), b.push({
            node: d,
            dof: 2,
            k: f
          });
        }
      }
      const F = (e, n) => {
        let s = -1, t = 1 / 0;
        for (let l = 0; l < m.length; ++l) {
          const y = m[l][0] - e, d = m[l][1] - n, f = y * y + d * d;
          f < t && (t = f, s = l);
        }
        return s;
      }, X = v.map(([e, n]) => ({
        node: F(e, n),
        dof: 0,
        value: -M
      })), C = 24855e3, N = 0.2, z = V({
        E: C,
        nu: N,
        thickness: x,
        theoryType: 0,
        bcType: "none",
        nodes: m,
        elements: i,
        bcs: [],
        pointLoads: X,
        springs: b
      }), Y = m.map((e) => [
        e[0],
        e[1],
        0
      ]);
      a.nodes.val = Y, a.elements.val = i, a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, a.elementInputs.val = {
        elasticities: new Map(i.map((e, n) => [
          n,
          C
        ])),
        poissonsRatios: new Map(i.map((e, n) => [
          n,
          N
        ])),
        thicknesses: new Map(i.map((e, n) => [
          n,
          x
        ]))
      };
      const R = /* @__PURE__ */ new Map();
      for (const e of z.nodeResults) R.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      a.deformOutputs.val = {
        deformations: R,
        reactions: /* @__PURE__ */ new Map()
      };
      const A = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
      i.forEach((e, n) => {
        A.set(n, e.map((l) => u * z.nodeResults[l].w));
        const s = z.elementResults[n];
        B.set(n, [
          s.Mxx,
          s.Mxx,
          s.Mxx,
          s.Mxx
        ]), L.set(n, [
          s.Myy,
          s.Myy,
          s.Myy,
          s.Myy
        ]), P.set(n, [
          s.Mxy,
          s.Mxy,
          s.Mxy,
          s.Mxy
        ]);
        const t = Math.sqrt(s.Mxx ** 2 + s.Myy ** 2 - s.Mxx * s.Myy + 3 * s.Mxy ** 2);
        S.set(n, [
          t,
          t,
          t,
          t
        ]);
      }), a.analyzeOutputs.val = {
        pressure: A,
        bendingXX: B,
        bendingYY: L,
        bendingXY: P,
        vonMises: S
      };
      const j = [];
      for (const [e, n] of v) j.push(...G(e, n, o.h_ped, o.b_ped));
      a.objects3D.val = j;
    }
  };
});
export {
  __tla,
  K as s
};
