import { b as se, c as ae, E as le, L as ce } from "./theme-DDCjfe25.js";
import { p as me, __tla as __tla_0 } from "./didacticCpp-jx4SQtmt.js";
let pe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ie = {
    sigma_uniforme_tm2: 19.96
  }, _e = {
    manual_libro: ie
  }, f = 9.80665, re = 1 / f;
  function Z(t, c, i, s) {
    const m = new se(s, s, i), _ = new ae(new le(m), new ce({
      color: 11579568,
      linewidth: 2
    }));
    return _.position.set(t, c, i / 2), [
      _
    ];
  }
  pe = {
    id: "guerra-ej5-zapata-combinada-trapezoidal",
    name: "Ej.5 \xB7 Zapata Trapezoidal (L=5, B1=3.75\u2192B2=1.60)",
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
      "EJ.5 pag.93-112. Zapata combinada TRAPEZOIDAL.",
      "L=5m, ancho varia linealmente de B1=3.75 (col1) a B2=1.60 (col2).",
      "Cols 50\xD750cm. Col 1: P_D=108 M_D=-4.3, P_L=45 M_L=-2. Col 2: P_D=78 M_D=3.2 P_L=36 M_L=2.4",
      "Libro pag.95: \u03C3 uniforme = 19.96 t/m\xB2 (< q_adm=20)."
    ],
    params: {
      L: {
        default: 5,
        min: 3,
        max: 7,
        step: 0.05,
        label: "L (m)"
      },
      B1: {
        default: 3.75,
        min: 2,
        max: 5,
        step: 0.05,
        label: "B1 (m)"
      },
      B2: {
        default: 1.6,
        min: 1,
        max: 3,
        step: 0.05,
        label: "B2 (m)"
      },
      h: {
        default: 1.15,
        min: 0.5,
        max: 1.5,
        step: 0.05,
        label: "h espesor (m)"
      },
      col1_x: {
        default: 0.25,
        min: 0.1,
        max: 1.5,
        step: 0.05,
        label: "col1 x (m)"
      },
      col2_x: {
        default: 4.75,
        min: 3,
        max: 6,
        step: 0.05,
        label: "col2 x (m)"
      },
      col_size: {
        default: 0.5,
        min: 0.2,
        max: 1,
        step: 0.05,
        label: "col lado (m)"
      },
      ks_tm3: {
        default: 2920,
        min: 500,
        max: 8e3,
        step: 50,
        label: "ks (tonf/m\xB3)"
      },
      P_D_C1: {
        default: 108,
        min: 0,
        max: 300,
        step: 1,
        label: "P_D col1 (tonf)"
      },
      M_D_C1: {
        default: -4.3,
        min: -30,
        max: 30,
        step: 0.5,
        label: "M_D col1 (tonf\xB7m)"
      },
      P_L_C1: {
        default: 45,
        min: 0,
        max: 150,
        step: 1,
        label: "P_L col1 (tonf)"
      },
      M_L_C1: {
        default: -2,
        min: -30,
        max: 30,
        step: 0.5,
        label: "M_L col1 (tonf\xB7m)"
      },
      P_D_C2: {
        default: 78,
        min: 0,
        max: 300,
        step: 1,
        label: "P_D col2 (tonf)"
      },
      M_D_C2: {
        default: 3.2,
        min: -30,
        max: 30,
        step: 0.5,
        label: "M_D col2 (tonf\xB7m)"
      },
      P_L_C2: {
        default: 36,
        min: 0,
        max: 150,
        step: 1,
        label: "P_L col2 (tonf)"
      },
      M_L_C2: {
        default: 2.4,
        min: -30,
        max: 30,
        step: 0.5,
        label: "M_L col2 (tonf\xB7m)"
      },
      fc_kgcm2: {
        default: 210,
        min: 175,
        max: 600,
        step: 5,
        label: "f'c (kg/cm\xB2)"
      },
      nx: {
        default: 24,
        min: 12,
        max: 40,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 14,
        min: 6,
        max: 24,
        step: 2,
        label: "ny mesh"
      },
      h_col: {
        default: 0.6,
        min: 0.2,
        max: 2,
        step: 0.1,
        label: "Hcol viz (m)"
      }
    },
    build(t, c) {
      const i = t.L, s = t.B1, m = t.B2, _ = Math.max(s, m), M = t.h, p = Math.round(t.nx), x = Math.round(t.ny), a = p + 1, C = x + 1, h = i / p, y = _ / x, K = (t.P_D_C1 + t.P_L_C1) * f, q = (t.M_D_C1 + t.M_L_C1) * f, H = (t.P_D_C2 + t.P_L_C2) * f, $ = (t.M_D_C2 + t.M_L_C2) * f, w = t.ks_tm3 * f, B = 14100 * Math.sqrt(t.fc_kgcm2) * 98.0665, E = 0.2, J = (e) => (s + (m - s) * (e / i)) / 2, Q = (e, o) => {
        const n = J(e), l = _ / 2;
        return Math.abs(o - l) <= n + 1e-6;
      }, d = [];
      for (let e = 0; e < C; ++e) for (let o = 0; o < a; ++o) d.push([
        o * h,
        e * y
      ]);
      const r = [];
      for (let e = 0; e < x; ++e) for (let o = 0; o < p; ++o) {
        const n = e * a + o;
        r.push([
          n,
          n + 1,
          n + a + 1,
          n + a
        ]);
      }
      const U = 2.4 * f * M, g = [], T = [];
      for (let e = 0; e < C; ++e) for (let o = 0; o < a; ++o) {
        const n = o === 0 || o === a - 1, l = e === 0 || e === C - 1, b = n && l ? 0.25 : n || l ? 0.5 : 1, X = h * y * b, v = e * a + o, ne = o * h, oe = e * y, Y = Q(ne, oe), te = Y ? w * X : 0;
        if (g.push({
          node: v,
          dof: 0,
          k: Math.max(te, 1e-6)
        }), Y && T.push({
          node: v,
          dof: 0,
          value: -U * X
        }), n && l) {
          const S = 1e-6 * w * h * y;
          g.push({
            node: v,
            dof: 1,
            k: S
          }), g.push({
            node: v,
            dof: 2,
            k: S
          });
        }
      }
      const P = _ / 2, j = (e) => {
        const o = [];
        for (let n = 0; n < d.length; n++) {
          const l = d[n][0], b = d[n][1];
          Math.abs(l - e) <= t.col_size / 2 + 1e-6 && Math.abs(b - P) <= t.col_size / 2 + 1e-6 && o.push(n);
        }
        return o;
      }, L = j(t.col1_x), k = j(t.col2_x), u = [];
      if (L.length > 0) {
        const e = K / L.length, o = q / L.length;
        for (const n of L) u.push({
          node: n,
          dof: 0,
          value: -e
        }), u.push({
          node: n,
          dof: 1,
          value: o
        });
      }
      if (k.length > 0) {
        const e = H / k.length, o = $ / k.length;
        for (const n of k) u.push({
          node: n,
          dof: 0,
          value: -e
        }), u.push({
          node: n,
          dof: 1,
          value: o
        });
      }
      const V = [
        ...u,
        ...T
      ], D = me({
        E: B,
        nu: E,
        thickness: M,
        theoryType: 0,
        bcType: "none",
        nodes: d,
        elements: r,
        bcs: [],
        pointLoads: V,
        springs: g
      }), A = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
      r.forEach((e, o) => {
        A.set(o, e.map((b) => -Math.abs(w * D.nodeResults[b].w)));
        const n = D.elementResults[o];
        I.set(o, [
          n.Mxx,
          n.Mxx,
          n.Mxx,
          n.Mxx
        ]), O.set(o, [
          n.Myy,
          n.Myy,
          n.Myy,
          n.Myy
        ]), R.set(o, [
          n.Mxy,
          n.Mxy,
          n.Mxy,
          n.Mxy
        ]);
        const l = Math.sqrt(n.Mxx ** 2 + n.Myy ** 2 - n.Mxx * n.Myy + 3 * n.Mxy ** 2);
        F.set(o, [
          l,
          l,
          l,
          l
        ]);
      });
      const W = d.map((e) => [
        e[0],
        e[1],
        0
      ]);
      c.nodes.val = W, c.elements.val = r;
      const N = /* @__PURE__ */ new Map(), ee = [
        2,
        3,
        4
      ];
      for (const e of u) {
        const o = N.get(e.node) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        o[ee[e.dof] ?? 2] += e.value, N.set(e.node, o);
      }
      c.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: N
      }, c.elementInputs.val = {
        elasticities: new Map(r.map((e, o) => [
          o,
          B
        ])),
        poissonsRatios: new Map(r.map((e, o) => [
          o,
          E
        ])),
        thicknesses: new Map(r.map((e, o) => [
          o,
          M
        ]))
      };
      const G = /* @__PURE__ */ new Map();
      for (const e of D.nodeResults) G.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      c.deformOutputs.val = {
        deformations: G,
        reactions: /* @__PURE__ */ new Map()
      }, c.analyzeOutputs.val = {
        pressure: A,
        bendingXX: I,
        bendingYY: O,
        bendingXY: R,
        vonMises: F
      };
      const z = [];
      z.push(...Z(t.col1_x, P, t.h_col, t.col_size)), z.push(...Z(t.col2_x, P, t.h_col, t.col_size)), c.objects3D.val = z;
    },
    computedLabels(t, c) {
      var _a;
      const i = c.analyzeOutputs.val.pressure;
      let s = -1 / 0, m = 1 / 0;
      if (i) for (const p of i.values()) for (const x of p) {
        const a = Math.abs(x) * re;
        a > s && (s = a), a < m && (m = a);
      }
      s === -1 / 0 && (s = 0, m = 0);
      const M = (_a = _e == null ? void 0 : _e.manual_libro) == null ? void 0 : _a.sigma_uniforme_tm2;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${s.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${m.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3 uniforme libro p.95": `${M.toFixed(2)} t/m\xB2`,
        "\u26A0\uFE0F Trapezoidal": "Geometria aproximada con mesh rect + mask"
      };
    }
  };
});
export {
  __tla,
  pe as g
};
