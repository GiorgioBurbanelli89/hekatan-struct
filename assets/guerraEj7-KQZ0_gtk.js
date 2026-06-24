import { g as D, h as K, E as $, L as H } from "./theme-N6TOO4-G.js";
import { p as V, __tla as __tla_0 } from "./didacticCpp-C0Qfkfmr.js";
let se;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const q = {
    Ru_tonf: 971.85,
    x_centroide_m: 8.514
  }, J = {
    manual_libro: q
  }, t = 9.80665, W = 1 / t;
  function Q(o, c, f, l) {
    const i = new D(l, l, f), m = new K(new $(i), new H({
      color: 11579568,
      linewidth: 2
    }));
    return m.position.set(o, c, f / 2), [
      m
    ];
  }
  se = {
    id: "guerra-ej7-viga-cimentacion-new",
    name: "Ej.7 NEW \xB7 Viga Cimentaci\xF3n L=17.20m (4 cols)",
    category: "\u{1F4DA} Libros \xB7 SAFE - Marcelo Guerra",
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
    build(o, c) {
      const f = o.L, l = o.B, i = o.h, m = Math.round(o.nx), x = Math.round(o.ny), r = m + 1, u = x + 1, b = f / m, y = l / x, g = o.ks_tm3 * t, w = 14100 * Math.sqrt(o.fc_kgcm2) * 98.0665, L = 0.2, C = [
        {
          x: 0.3,
          P: (90 + 37.5) * t,
          M: (3 + 1.5) * t
        },
        {
          x: 5.3,
          P: (130 + 57.5) * t,
          M: (4 + 2.75) * t
        },
        {
          x: 11.3,
          P: 210 * t,
          M: -9 * t
        },
        {
          x: 16.9,
          P: 128 * t,
          M: (-3 + -1.5) * t
        }
      ], M = [];
      for (let e = 0; e < u; ++e) for (let n = 0; n < r; ++n) M.push([
        n * b,
        e * y
      ]);
      const p = [];
      for (let e = 0; e < x; ++e) for (let n = 0; n < m; ++n) {
        const s = e * r + n;
        p.push([
          s,
          s + 1,
          s + r + 1,
          s + r
        ]);
      }
      const T = 2.4 * t * i, _ = [], E = [];
      for (let e = 0; e < u; ++e) for (let n = 0; n < r; ++n) {
        const s = n === 0 || n === r - 1, a = e === 0 || e === u - 1, d = s && a ? 0.25 : s || a ? 0.5 : 1, A = b * y * d, h = e * r + n;
        if (_.push({
          node: h,
          dof: 0,
          k: g * A
        }), E.push({
          node: h,
          dof: 0,
          value: -T * A
        }), s && a) {
          const F = 1e-6 * g * b * y;
          _.push({
            node: h,
            dof: 1,
            k: F
          }), _.push({
            node: h,
            dof: 2,
            k: F
          });
        }
      }
      const N = l / 2, X = (e) => {
        const n = [];
        for (let s = 0; s < M.length; s++) {
          const a = M[s][0], d = M[s][1];
          Math.abs(a - e) <= o.col_size / 2 + 1e-6 && Math.abs(d - N) <= o.col_size / 2 + 1e-6 && n.push(s);
        }
        return n;
      }, k = [];
      for (const e of C) {
        const n = X(e.x);
        if (n.length === 0) continue;
        const s = e.P / n.length, a = e.M / n.length;
        for (const d of n) k.push({
          node: d,
          dof: 0,
          value: -s
        }), k.push({
          node: d,
          dof: 1,
          value: a
        });
      }
      const Y = [
        ...k,
        ...E
      ], v = V({
        E: w,
        nu: L,
        thickness: i,
        theoryType: 0,
        bcType: "none",
        nodes: M,
        elements: p,
        bcs: [],
        pointLoads: Y,
        springs: _
      }), R = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map();
      p.forEach((e, n) => {
        R.set(n, e.map((d) => -Math.abs(g * v.nodeResults[d].w)));
        const s = v.elementResults[n];
        z.set(n, [
          s.Mxx,
          s.Mxx,
          s.Mxx,
          s.Mxx
        ]), j.set(n, [
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
        const a = Math.sqrt(s.Mxx ** 2 + s.Myy ** 2 - s.Mxx * s.Myy + 3 * s.Mxy ** 2);
        B.set(n, [
          a,
          a,
          a,
          a
        ]);
      });
      const G = M.map((e) => [
        e[0],
        e[1],
        0
      ]);
      c.nodes.val = G, c.elements.val = p, c.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, c.elementInputs.val = {
        elasticities: new Map(p.map((e, n) => [
          n,
          w
        ])),
        poissonsRatios: new Map(p.map((e, n) => [
          n,
          L
        ])),
        thicknesses: new Map(p.map((e, n) => [
          n,
          i
        ]))
      };
      const I = /* @__PURE__ */ new Map();
      for (const e of v.nodeResults) I.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      c.deformOutputs.val = {
        deformations: I,
        reactions: /* @__PURE__ */ new Map()
      };
      const S = {
        pressure: [
          -12 * t,
          -26 * t
        ]
      };
      c.analyzeOutputs.val = {
        pressure: R,
        bendingXX: z,
        bendingYY: j,
        bendingXY: P,
        vonMises: B,
        colorMapRanges: S
      };
      const O = [];
      for (const e of C) O.push(...Q(e.x, N, o.h_col, o.col_size));
      c.objects3D.val = O;
    },
    computedLabels(o, c) {
      var _a, _b;
      const f = c.analyzeOutputs.val.pressure;
      let l = -1 / 0, i = 1 / 0;
      if (f) for (const x of f.values()) for (const r of x) {
        const u = Math.abs(r) * W;
        u > l && (l = u), u < i && (i = u);
      }
      l === -1 / 0 && (l = 0, i = 0);
      const m = J;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${l.toFixed(3)} t/m\xB2`,
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
