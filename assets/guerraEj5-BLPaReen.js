import { g as oe, h as te, E as se, L as ae } from "./theme-Cr2LU0HL.js";
import { p as le, __tla as __tla_0 } from "./didacticCpp-q5lN0Q74.js";
let ue;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ce = {
    sigma_uniforme_tm2: 19.96
  }, me = {
    manual_libro: ce
  }, f = 9.80665, ie = 1 / f;
  function S(t, c, i, s) {
    const m = new oe(s, s, i), _ = new te(new se(m), new ae({
      color: 11579568,
      linewidth: 2
    }));
    return _.position.set(t, c, i / 2), [
      _
    ];
  }
  ue = {
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
      const i = t.L, s = t.B1, m = t.B2, _ = Math.max(s, m), d = t.h, M = Math.round(t.nx), p = Math.round(t.ny), a = M + 1, C = p + 1, b = i / M, y = _ / p, Z = (t.P_D_C1 + t.P_L_C1) * f, K = (t.M_D_C1 + t.M_L_C1) * f, q = (t.P_D_C2 + t.P_L_C2) * f, H = (t.M_D_C2 + t.M_L_C2) * f, P = t.ks_tm3 * f, z = 14100 * Math.sqrt(t.fc_kgcm2) * 98.0665, B = 0.2, $ = (n) => (s + (m - s) * (n / i)) / 2, J = (n, o) => {
        const e = $(n), l = _ / 2;
        return Math.abs(o - l) <= e + 1e-6;
      }, u = [];
      for (let n = 0; n < C; ++n) for (let o = 0; o < a; ++o) u.push([
        o * b,
        n * y
      ]);
      const r = [];
      for (let n = 0; n < p; ++n) for (let o = 0; o < M; ++o) {
        const e = n * a + o;
        r.push([
          e,
          e + 1,
          e + a + 1,
          e + a
        ]);
      }
      const Q = 2.4 * f * d, g = [], E = [];
      for (let n = 0; n < C; ++n) for (let o = 0; o < a; ++o) {
        const e = o === 0 || o === a - 1, l = n === 0 || n === C - 1, h = e && l ? 0.25 : e || l ? 0.5 : 1, G = b * y * h, v = n * a + o, V = o * b, ee = n * y, X = J(V, ee), ne = X ? P * G : 0;
        if (g.push({
          node: v,
          dof: 0,
          k: Math.max(ne, 1e-6)
        }), X && E.push({
          node: v,
          dof: 0,
          value: -Q * G
        }), e && l) {
          const Y = 1e-6 * P * b * y;
          g.push({
            node: v,
            dof: 1,
            k: Y
          }), g.push({
            node: v,
            dof: 2,
            k: Y
          });
        }
      }
      const w = _ / 2, T = (n) => {
        const o = [];
        for (let e = 0; e < u.length; e++) {
          const l = u[e][0], h = u[e][1];
          Math.abs(l - n) <= t.col_size / 2 + 1e-6 && Math.abs(h - w) <= t.col_size / 2 + 1e-6 && o.push(e);
        }
        return o;
      }, L = T(t.col1_x), k = T(t.col2_x), x = [];
      if (L.length > 0) {
        const n = Z / L.length, o = K / L.length;
        for (const e of L) x.push({
          node: e,
          dof: 0,
          value: -n
        }), x.push({
          node: e,
          dof: 1,
          value: o
        });
      }
      if (k.length > 0) {
        const n = q / k.length, o = H / k.length;
        for (const e of k) x.push({
          node: e,
          dof: 0,
          value: -n
        }), x.push({
          node: e,
          dof: 1,
          value: o
        });
      }
      const U = [
        ...x,
        ...E
      ], D = le({
        E: z,
        nu: B,
        thickness: d,
        theoryType: 0,
        bcType: "none",
        nodes: u,
        elements: r,
        bcs: [],
        pointLoads: U,
        springs: g
      }), j = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
      r.forEach((n, o) => {
        j.set(o, n.map((h) => -Math.abs(P * D.nodeResults[h].w)));
        const e = D.elementResults[o];
        A.set(o, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), I.set(o, [
          e.Myy,
          e.Myy,
          e.Myy,
          e.Myy
        ]), O.set(o, [
          e.Mxy,
          e.Mxy,
          e.Mxy,
          e.Mxy
        ]);
        const l = Math.sqrt(e.Mxx ** 2 + e.Myy ** 2 - e.Mxx * e.Myy + 3 * e.Mxy ** 2);
        R.set(o, [
          l,
          l,
          l,
          l
        ]);
      });
      const W = u.map((n) => [
        n[0],
        n[1],
        0
      ]);
      c.nodes.val = W, c.elements.val = r, c.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, c.elementInputs.val = {
        elasticities: new Map(r.map((n, o) => [
          o,
          z
        ])),
        poissonsRatios: new Map(r.map((n, o) => [
          o,
          B
        ])),
        thicknesses: new Map(r.map((n, o) => [
          o,
          d
        ]))
      };
      const F = /* @__PURE__ */ new Map();
      for (const n of D.nodeResults) F.set(n.node, [
        0,
        0,
        n.w,
        n.bx,
        n.by,
        0
      ]);
      c.deformOutputs.val = {
        deformations: F,
        reactions: /* @__PURE__ */ new Map()
      }, c.analyzeOutputs.val = {
        pressure: j,
        bendingXX: A,
        bendingYY: I,
        bendingXY: O,
        vonMises: R
      };
      const N = [];
      N.push(...S(t.col1_x, w, t.h_col, t.col_size)), N.push(...S(t.col2_x, w, t.h_col, t.col_size)), c.objects3D.val = N;
    },
    computedLabels(t, c) {
      var _a;
      const i = c.analyzeOutputs.val.pressure;
      let s = -1 / 0, m = 1 / 0;
      if (i) for (const M of i.values()) for (const p of M) {
        const a = Math.abs(p) * ie;
        a > s && (s = a), a < m && (m = a);
      }
      s === -1 / 0 && (s = 0, m = 0);
      const d = (_a = me == null ? void 0 : me.manual_libro) == null ? void 0 : _a.sigma_uniforme_tm2;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${s.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${m.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3 uniforme libro p.95": d ? `${d.toFixed(2)} t/m\xB2` : "\u2014",
        "\u26A0\uFE0F Trapezoidal": "Geometria aproximada con mesh rect + mask"
      };
    }
  };
});
export {
  __tla,
  ue as g
};
