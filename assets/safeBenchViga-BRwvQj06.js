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
  let R;
  R = 9.80665;
  T = {
    id: "safe-bench-viga-cimentacion",
    name: "SAFE Benchmark \xB7 Viga Cimentaci\xF3n 8\xD71\xD70.50m, 4 cols (\u0394 +0.01%)",
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
    build(t, i) {
      const w = t.Lz, _ = t.Bz, y = t.tz, u = t.ks_tonfm3 * R, I = t.P_tonf * R, M = Math.round(t.nCols), h = Math.round(t.nx), b = Math.round(t.ny), c = h + 1, x = b + 1, k = w / h, g = _ / b, v = [];
      for (let e = 1; e <= M; ++e) {
        const n = e * w / (M + 1);
        v.push([
          n,
          _ / 2
        ]);
      }
      const d = [];
      for (let e = 0; e < x; ++e) for (let n = 0; n < c; ++n) d.push([
        n * k,
        e * g
      ]);
      const a = [];
      for (let e = 0; e < b; ++e) for (let n = 0; n < h; ++n) {
        const o = e * c + n;
        a.push([
          o,
          o + 1,
          o + c + 1,
          o + c
        ]);
      }
      const p = [];
      for (let e = 0; e < x; ++e) for (let n = 0; n < c; ++n) {
        const o = n === 0 || n === c - 1, l = e === 0 || e === x - 1, s = o && l ? 0.25 : o || l ? 0.5 : 1, f = k * g * s, m = e * c + n;
        if (p.push({
          node: m,
          dof: 0,
          k: u * f
        }), o && l) {
          const r = 1e-6 * u * k * g;
          p.push({
            node: m,
            dof: 1,
            k: r
          }), p.push({
            node: m,
            dof: 2,
            k: r
          });
        }
      }
      const S = (e, n) => {
        let o = -1, l = 1 / 0;
        for (let s = 0; s < d.length; ++s) {
          const f = d[s][0] - e, m = d[s][1] - n, r = f * f + m * m;
          r < l && (l = r, o = s);
        }
        return o;
      }, B = v.map(([e, n]) => ({
        node: S(e, n),
        dof: 0,
        value: -I
      })), z = 24855e3, N = 0.2, C = F({
        E: z,
        nu: N,
        thickness: y,
        theoryType: 0,
        bcType: "none",
        nodes: d,
        elements: a,
        bcs: [],
        pointLoads: B,
        springs: p
      }), j = d.map((e) => [
        e[0],
        e[1],
        0
      ]);
      i.nodes.val = j, i.elements.val = a, i.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, i.elementInputs.val = {
        elasticities: new Map(a.map((e, n) => [
          n,
          z
        ])),
        poissonsRatios: new Map(a.map((e, n) => [
          n,
          N
        ])),
        thicknesses: new Map(a.map((e, n) => [
          n,
          y
        ]))
      };
      const E = /* @__PURE__ */ new Map();
      for (const e of C.nodeResults) E.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      i.deformOutputs.val = {
        deformations: E,
        reactions: /* @__PURE__ */ new Map()
      };
      const P = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
      for (let e = 0; e < a.length; ++e) {
        const n = [], o = [];
        for (const l of a[e]) {
          const s = C.nodeResults[l];
          n.push(s.w * 1e3), o.push(u * s.w);
        }
        A.set(e, n), P.set(e, o);
      }
      i.analyzeOutputs.val = {
        displacementZ: A,
        pressure: P
      };
    }
  };
});
export {
  __tla,
  T as s
};
