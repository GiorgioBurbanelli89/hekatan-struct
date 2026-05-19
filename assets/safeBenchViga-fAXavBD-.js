import { p as F, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let T;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let j;
  j = 9.80665;
  T = {
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
      }
    },
    build(a, l) {
      const k = a.Lz, w = a.Bz, v = a.tz, f = a.ks_tonfm3 * j, B = a.P_tonf * j, _ = Math.round(a.nCols), x = Math.round(a.nx), M = Math.round(a.ny), c = x + 1, y = M + 1, b = k / x, h = w / M, z = [];
      for (let e = 1; e <= _; ++e) {
        const n = e * k / (_ + 1);
        z.push([
          n,
          w / 2
        ]);
      }
      const m = [];
      for (let e = 0; e < y; ++e) for (let n = 0; n < c; ++n) m.push([
        n * b,
        e * h
      ]);
      const i = [];
      for (let e = 0; e < M; ++e) for (let n = 0; n < x; ++n) {
        const s = e * c + n;
        i.push([
          s,
          s + 1,
          s + c + 1,
          s + c
        ]);
      }
      const p = [];
      for (let e = 0; e < y; ++e) for (let n = 0; n < c; ++n) {
        const s = n === 0 || n === c - 1, o = e === 0 || e === y - 1, t = s && o ? 0.25 : s || o ? 0.5 : 1, u = b * h * t, d = e * c + n;
        if (p.push({
          node: d,
          dof: 0,
          k: f * u
        }), s && o) {
          const r = 1e-6 * f * b * h;
          p.push({
            node: d,
            dof: 1,
            k: r
          }), p.push({
            node: d,
            dof: 2,
            k: r
          });
        }
      }
      const X = (e, n) => {
        let s = -1, o = 1 / 0;
        for (let t = 0; t < m.length; ++t) {
          const u = m[t][0] - e, d = m[t][1] - n, r = u * u + d * d;
          r < o && (o = r, s = t);
        }
        return s;
      }, Y = z.map(([e, n]) => ({
        node: X(e, n),
        dof: 0,
        value: -B
      })), C = 24855e3, E = 0.2, g = F({
        E: C,
        nu: E,
        thickness: v,
        theoryType: 0,
        bcType: "none",
        nodes: m,
        elements: i,
        bcs: [],
        pointLoads: Y,
        springs: p
      }), D = m.map((e) => [
        e[0],
        e[1],
        0
      ]);
      l.nodes.val = D, l.elements.val = i, l.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, l.elementInputs.val = {
        elasticities: new Map(i.map((e, n) => [
          n,
          C
        ])),
        poissonsRatios: new Map(i.map((e, n) => [
          n,
          E
        ])),
        thicknesses: new Map(i.map((e, n) => [
          n,
          v
        ]))
      };
      const N = /* @__PURE__ */ new Map();
      for (const e of g.nodeResults) N.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      l.deformOutputs.val = {
        deformations: N,
        reactions: /* @__PURE__ */ new Map()
      };
      const R = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
      i.forEach((e, n) => {
        R.set(n, e.map((t) => f * g.nodeResults[t].w));
        const s = g.elementResults[n];
        A.set(n, [
          s.Mxx,
          s.Mxx,
          s.Mxx,
          s.Mxx
        ]), I.set(n, [
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
        const o = Math.sqrt(s.Mxx ** 2 + s.Myy ** 2 - s.Mxx * s.Myy + 3 * s.Mxy ** 2);
        S.set(n, [
          o,
          o,
          o,
          o
        ]);
      }), l.analyzeOutputs.val = {
        pressure: R,
        bendingXX: A,
        bendingYY: I,
        bendingXY: P,
        vonMises: S
      }, l.objects3D.val = [];
    }
  };
});
export {
  __tla,
  T as s
};
