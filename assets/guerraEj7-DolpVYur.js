import { b as K, L as V, E as $, a as H } from "./theme-Co6w-pfC.js";
import { p as q, __tla as __tla_0 } from "./didacticCpp-DaEmtxPu.js";
let se;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const J = {
    Ru_tonf: 971.85,
    x_centroide_m: 8.514
  }, W = {
    manual_libro: J
  }, l = 9.80665, Q = 1 / l;
  function Z(s, a, f, c) {
    const i = new K(c, c, f), m = new V(new $(i), new H({
      color: 11579568,
      linewidth: 2
    }));
    return m.position.set(s, a, f / 2), [
      m
    ];
  }
  se = {
    id: "guerra-ej7-viga-cimentacion-new",
    name: "Ej.7 NEW \xB7 Viga Cimentaci\xF3n L=17.20m (4 cols)",
    category: "2\uFE0F\u20E3 Shells \xB7 \u{1F9F0} Cimentaciones",
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
      "EJ.7 pag.135-148. Viga de cimentaci\xF3n con 4 columnas.",
      "L=17.20m, B=1.50m. Cols 60\xD760cm.",
      "Cargas (P_D, M_D, P_L, M_L): C1(90,3,37.5,1.5), C2(130,4,57.5,2.75), C3(145,-6,65,-3), C4(95,-3,33,-1.5)"
    ],
    params: {
      L: {
        default: 17.2,
        min: 10,
        max: 25,
        step: 0.1,
        label: "L (m)"
      },
      B: {
        default: 1.5,
        min: 1,
        max: 3,
        step: 0.05,
        label: "B (m)"
      },
      h: {
        default: 0.85,
        min: 0.5,
        max: 1.5,
        step: 0.05,
        label: "h (m)"
      },
      col_size: {
        default: 0.6,
        min: 0.3,
        max: 1,
        step: 0.05,
        label: "col lado (m)"
      },
      ks_tm3: {
        default: 3640,
        min: 500,
        max: 8e3,
        step: 50,
        label: "ks (tonf/m\xB3)"
      },
      fc_kgcm2: {
        default: 240,
        min: 175,
        max: 600,
        step: 5,
        label: "f'c (kg/cm\xB2)"
      },
      nx: {
        default: 32,
        min: 12,
        max: 48,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 8,
        min: 4,
        max: 16,
        step: 2,
        label: "ny mesh"
      },
      h_col: {
        default: 0.8,
        min: 0.2,
        max: 2,
        step: 0.1,
        label: "Hcol viz (m)"
      }
    },
    build(s, a) {
      const f = s.L, c = s.B, i = s.h, m = Math.round(s.nx), x = Math.round(s.ny), r = m + 1, u = x + 1, y = f / m, g = c / x, v = s.ks_tm3 * l, L = 14100 * Math.sqrt(s.fc_kgcm2) * 98.0665, C = 0.2, E = [
        {
          x: 0.3,
          P: (90 + 37.5) * l,
          M: (3 + 1.5) * l
        },
        {
          x: 5.3,
          P: (130 + 57.5) * l,
          M: (4 + 2.75) * l
        },
        {
          x: 11.3,
          P: 210 * l,
          M: -9 * l
        },
        {
          x: 16.9,
          P: 128 * l,
          M: (-3 + -1.5) * l
        }
      ], M = [];
      for (let n = 0; n < u; ++n) for (let e = 0; e < r; ++e) M.push([
        e * y,
        n * g
      ]);
      const p = [];
      for (let n = 0; n < x; ++n) for (let e = 0; e < m; ++e) {
        const o = n * r + e;
        p.push([
          o,
          o + 1,
          o + r + 1,
          o + r
        ]);
      }
      const A = 2.4 * l * i, _ = [], N = [];
      for (let n = 0; n < u; ++n) for (let e = 0; e < r; ++e) {
        const o = e === 0 || e === r - 1, t = n === 0 || n === u - 1, d = o && t ? 0.25 : o || t ? 0.5 : 1, X = y * g * d, b = n * r + e;
        if (_.push({
          node: b,
          dof: 0,
          k: v * X
        }), N.push({
          node: b,
          dof: 0,
          value: -A * X
        }), o && t) {
          const Y = 1e-6 * v * y * g;
          _.push({
            node: b,
            dof: 1,
            k: Y
          }), _.push({
            node: b,
            dof: 2,
            k: Y
          });
        }
      }
      const z = c / 2, F = (n) => {
        const e = [];
        for (let o = 0; o < M.length; o++) {
          const t = M[o][0], d = M[o][1];
          Math.abs(t - n) <= s.col_size / 2 + 1e-6 && Math.abs(d - z) <= s.col_size / 2 + 1e-6 && e.push(o);
        }
        return e;
      }, h = [];
      for (const n of E) {
        const e = F(n.x);
        if (e.length === 0) continue;
        const o = n.P / e.length, t = n.M / e.length;
        for (const d of e) h.push({
          node: d,
          dof: 0,
          value: -o
        }), h.push({
          node: d,
          dof: 2,
          value: t
        });
      }
      const S = [
        ...h,
        ...N
      ], w = q({
        E: L,
        nu: C,
        thickness: i,
        theoryType: 0,
        bcType: "none",
        nodes: M,
        elements: p,
        bcs: [],
        pointLoads: S,
        springs: _
      }), R = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
      p.forEach((n, e) => {
        R.set(e, n.map((d) => -Math.abs(v * w.nodeResults[d].w)));
        const o = w.elementResults[e];
        j.set(e, [
          o.Mxx,
          o.Mxx,
          o.Mxx,
          o.Mxx
        ]), P.set(e, [
          o.Myy,
          o.Myy,
          o.Myy,
          o.Myy
        ]), B.set(e, [
          o.Mxy,
          o.Mxy,
          o.Mxy,
          o.Mxy
        ]);
        const t = Math.sqrt(o.Mxx ** 2 + o.Myy ** 2 - o.Mxx * o.Myy + 3 * o.Mxy ** 2);
        I.set(e, [
          t,
          t,
          t,
          t
        ]);
      });
      const D = M.map((n) => [
        n[0],
        n[1],
        0
      ]);
      a.nodes.val = D, a.elements.val = p;
      const k = /* @__PURE__ */ new Map(), G = [
        2,
        3,
        4
      ];
      for (const n of h) {
        const e = k.get(n.node) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        e[G[n.dof] ?? 2] += n.value, k.set(n.node, e);
      }
      a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: k
      }, a.elementInputs.val = {
        elasticities: new Map(p.map((n, e) => [
          e,
          L
        ])),
        poissonsRatios: new Map(p.map((n, e) => [
          e,
          C
        ])),
        thicknesses: new Map(p.map((n, e) => [
          e,
          i
        ]))
      };
      const O = /* @__PURE__ */ new Map();
      w.nodeResults.forEach((n, e) => O.set(e, [
        0,
        0,
        n.w,
        n.bx,
        n.by,
        0
      ])), a.deformOutputs.val = {
        deformations: O,
        reactions: /* @__PURE__ */ new Map()
      }, a.analyzeOutputs.val = {
        pressure: R,
        bendingXX: j,
        bendingYY: P,
        bendingXY: B,
        vonMises: I
      };
      const T = [];
      for (const n of E) T.push(...Z(n.x, z, s.h_col, s.col_size));
      a.objects3D.val = T;
    },
    computedLabels(s, a) {
      var _a, _b;
      const f = a.analyzeOutputs.val.pressure;
      let c = -1 / 0, i = 1 / 0;
      if (f) for (const x of f.values()) for (const r of x) {
        const u = Math.abs(r) * Q;
        u > c && (c = u), u < i && (i = u);
      }
      c === -1 / 0 && (c = 0, i = 0);
      const m = W;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${c.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${i.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} Ru \xFAltimo libro": `${(_a = m == null ? void 0 : m.manual_libro) == null ? void 0 : _a.Ru_tonf} t`,
        "\u{1F4D8} x centroide": `${(_b = m == null ? void 0 : m.manual_libro) == null ? void 0 : _b.x_centroide_m} m`
      };
    }
  };
});
export {
  __tla,
  se as g
};
