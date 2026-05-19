import { p as Z, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let T;
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
  T = {
    id: "safe-bench-zapata-combinada",
    name: "SAFE Benchmark \xB7 Zapata Combinada 4\xD72\xD70.40m, 2 cols (\u0394 +0.08%)",
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
      "Caso 3 del framework Hekatan vs SAFE \u2014 paridad <0.08%",
      "Zapata rectangular 4\xD72m \xD7 0.40m espesor sobre Winkler arena media",
      "2 columnas alineadas en (1.0, 1.0) y (3.0, 1.0), P=30 tonf c/u",
      "Caso t\xEDpico: medianera o muro de propiedad"
    ],
    params: {
      Lz: {
        default: 4,
        min: 2,
        max: 8,
        step: 0.25,
        label: "Lz (m)"
      },
      Bz: {
        default: 2,
        min: 1,
        max: 5,
        step: 0.25,
        label: "Bz (m)"
      },
      tz: {
        default: 0.4,
        min: 0.2,
        max: 1,
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
        default: 30,
        min: 1,
        max: 100,
        step: 1,
        label: "P por col (tonf)"
      },
      nx: {
        default: 16,
        min: 8,
        max: 32,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 8,
        min: 4,
        max: 16,
        step: 2,
        label: "ny mesh"
      }
    },
    build(l, c) {
      const u = l.Lz, b = l.Bz, M = l.tz, h = l.ks_tonfm3 * P, C = l.P_tonf * P, k = Math.round(l.nx), x = Math.round(l.ny), d = k + 1, y = x + 1, w = u / k, z = b / x, I = [
        [
          u / 4,
          b / 2
        ],
        [
          3 * u / 4,
          b / 2
        ]
      ], m = [];
      for (let e = 0; e < y; ++e) for (let n = 0; n < d; ++n) m.push([
        n * w,
        e * z
      ]);
      const t = [];
      for (let e = 0; e < x; ++e) for (let n = 0; n < k; ++n) {
        const o = e * d + n;
        t.push([
          o,
          o + 1,
          o + d + 1,
          o + d
        ]);
      }
      const r = [];
      for (let e = 0; e < y; ++e) for (let n = 0; n < d; ++n) {
        const o = n === 0 || n === d - 1, a = e === 0 || e === y - 1, s = o && a ? 0.25 : o || a ? 0.5 : 1, f = w * z * s, i = e * d + n;
        if (r.push({
          node: i,
          dof: 0,
          k: h * f
        }), o && a) {
          const p = 1e-6 * h * w * z;
          r.push({
            node: i,
            dof: 1,
            k: p
          }), r.push({
            node: i,
            dof: 2,
            k: p
          });
        }
      }
      const L = (e, n) => {
        let o = -1, a = 1 / 0;
        for (let s = 0; s < m.length; ++s) {
          const f = m[s][0] - e, i = m[s][1] - n, p = f * f + i * i;
          p < a && (a = p, o = s);
        }
        return o;
      }, R = I.map(([e, n]) => ({
        node: L(e, n),
        dof: 0,
        value: -C
      })), _ = 24855e3, v = 0.2, g = Z({
        E: _,
        nu: v,
        thickness: M,
        theoryType: 0,
        bcType: "none",
        nodes: m,
        elements: t,
        bcs: [],
        pointLoads: R,
        springs: r
      }), S = m.map((e) => [
        e[0],
        e[1],
        0
      ]);
      c.nodes.val = S, c.elements.val = t, c.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, c.elementInputs.val = {
        elasticities: new Map(t.map((e, n) => [
          n,
          _
        ])),
        poissonsRatios: new Map(t.map((e, n) => [
          n,
          v
        ])),
        thicknesses: new Map(t.map((e, n) => [
          n,
          M
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
      c.deformOutputs.val = {
        deformations: N,
        reactions: /* @__PURE__ */ new Map()
      };
      const B = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
      for (let e = 0; e < t.length; ++e) {
        const n = [], o = [];
        for (const a of t[e]) {
          const s = g.nodeResults[a];
          n.push(s.w * 1e3), o.push(h * s.w);
        }
        E.set(e, n), B.set(e, o);
      }
      c.analyzeOutputs.val = {
        displacementZ: E,
        pressure: B
      };
    }
  };
});
export {
  __tla,
  T as s
};
