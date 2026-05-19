import { b as Q, E as U, c as $, L as ee } from "./Text-BmY6zyQy.js";
import { a as fe } from "./analyze-DNPn2SjO.js";
import { d as ue, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let be;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const q = 9.80665;
  function pe(t, s, u, c, a, i) {
    const l = Math.abs(s - t), M = new Q(l, a, i), x = new U(M), g = new $(x, new ee({
      color: 8421504,
      linewidth: 2
    }));
    return g.position.set((t + s) / 2, u, c + i / 2), [
      g
    ];
  }
  function Me(t, s, u, c, a) {
    const i = new Q(a, a, c), l = new U(i), M = new $(l, new ee({
      color: 8421504,
      linewidth: 2
    }));
    return M.position.set(t, s, u + c / 2), [
      M
    ];
  }
  be = {
    id: "viga-cim-guerra-ej7",
    name: "Viga Cimentaci\xF3n \xB7 Ej.7 Guerra (L=17.20m, 4 cols c/M)",
    category: "Cimentaciones",
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
      "Ejercicio 7 \u2014 Ing. Marcelo Guerra Avenda\xF1o MDI (Figura 190)",
      "Viga de cimentaci\xF3n L = 17.20 m, 4 columnas 60\xD760cm con CM+CV y momentos.",
      "Cargas totales por columna (P, M):",
      "  Col 1: P=127.50 t, M= 4.50 t\xB7m   Col 2: P=187.50 t, M= 6.75 t\xB7m",
      "  Col 3: P=210.00 t, M=-9.00 t\xB7m   Col 4: P=128.00 t, M=-4.50 t\xB7m",
      "Materiales: f'c=240 kg/cm\xB2 (E\u224823 GPa) \xB7 q_adm=18 t/m\xB2 \u2192 ks\u22482160 t/m\xB3 (Bowles 120\xB7q_adm)",
      "Modelo: zapata corrida (shell+Winkler) + viga (frame) + pedestales (frames). \u03A3P=653 t."
    ],
    params: {
      L: {
        default: 17.2,
        min: 10,
        max: 25,
        step: 0.2,
        label: "L viga (m)"
      },
      Bz: {
        default: 2,
        min: 0.8,
        max: 3.5,
        step: 0.1,
        label: "B ancho zapata (m)"
      },
      t_zap: {
        default: 0.4,
        min: 0.2,
        max: 1,
        step: 0.05,
        label: "t_zap espesor (m)"
      },
      b_viga: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "b_viga ancho (m)"
      },
      h_viga: {
        default: 0.8,
        min: 0.4,
        max: 1.5,
        step: 0.05,
        label: "h_viga canto (m)"
      },
      h_ped: {
        default: 0.5,
        min: 0.2,
        max: 1.5,
        step: 0.05,
        label: "Hp pedestal (m)"
      },
      b_ped: {
        default: 0.6,
        min: 0.4,
        max: 0.8,
        step: 0.05,
        label: "b_ped columna (m)"
      },
      x1: {
        default: 3.44,
        min: 0.5,
        max: 8,
        step: 0.1,
        label: "x col 1 (m)",
        folder: "Posiciones"
      },
      x2: {
        default: 6.88,
        min: 0.5,
        max: 12,
        step: 0.1,
        label: "x col 2 (m)",
        folder: "Posiciones"
      },
      x3: {
        default: 10.32,
        min: 0.5,
        max: 16,
        step: 0.1,
        label: "x col 3 (m)",
        folder: "Posiciones"
      },
      x4: {
        default: 13.76,
        min: 0.5,
        max: 17,
        step: 0.1,
        label: "x col 4 (m)",
        folder: "Posiciones"
      },
      P1: {
        default: 127.5,
        min: 0,
        max: 500,
        step: 1,
        label: "P1 (tonf)",
        folder: "Cargas axiales (D+L)"
      },
      P2: {
        default: 187.5,
        min: 0,
        max: 500,
        step: 1,
        label: "P2 (tonf)",
        folder: "Cargas axiales (D+L)"
      },
      P3: {
        default: 210,
        min: 0,
        max: 500,
        step: 1,
        label: "P3 (tonf)",
        folder: "Cargas axiales (D+L)"
      },
      P4: {
        default: 128,
        min: 0,
        max: 500,
        step: 1,
        label: "P4 (tonf)",
        folder: "Cargas axiales (D+L)"
      },
      M1: {
        default: 4.5,
        min: -30,
        max: 30,
        step: 0.1,
        label: "M1 (tonf\xB7m)",
        folder: "Momentos (D+L)"
      },
      M2: {
        default: 6.75,
        min: -30,
        max: 30,
        step: 0.1,
        label: "M2 (tonf\xB7m)",
        folder: "Momentos (D+L)"
      },
      M3: {
        default: -9,
        min: -30,
        max: 30,
        step: 0.1,
        label: "M3 (tonf\xB7m)",
        folder: "Momentos (D+L)"
      },
      M4: {
        default: -4.5,
        min: -30,
        max: 30,
        step: 0.1,
        label: "M4 (tonf\xB7m)",
        folder: "Momentos (D+L)"
      },
      ks_tonfm3: {
        default: 2160,
        min: 500,
        max: 1e4,
        step: 100,
        label: "ks (tonf/m\xB3)",
        folder: "Suelo"
      },
      q_adm: {
        default: 18,
        min: 5,
        max: 50,
        step: 0.5,
        label: "q_adm (tonf/m\xB2)",
        folder: "Suelo"
      },
      nx: {
        default: 48,
        min: 16,
        max: 96,
        step: 4,
        label: "nx mesh (long)",
        folder: "Mesh"
      },
      ny: {
        default: 6,
        min: 4,
        max: 12,
        step: 2,
        label: "ny mesh (transv)",
        folder: "Mesh"
      }
    },
    computedLabels(t) {
      const s = t.P1 + t.P2 + t.P3 + t.P4, u = t.M1 + t.M2 + t.M3 + t.M4, c = t.L * t.Bz, a = s / c;
      return {
        "\u03A3P (tonf)": s.toFixed(1),
        "\u03A3M (tonf\xB7m)": u.toFixed(2),
        "\xC1rea zapata (m\xB2)": c.toFixed(2),
        "q_med = \u03A3P/A (tonf/m\xB2)": a.toFixed(2),
        "ratio q_med/q_adm": (a / t.q_adm).toFixed(3)
      };
    },
    build(t, s) {
      const u = t.L, c = t.Bz, a = t.t_zap, i = t.b_viga, l = t.h_viga, M = t.h_ped, x = t.b_ped, g = t.ks_tonfm3 * q, v = Math.round(t.nx), w = Math.round(t.ny), r = v + 1, L = w + 1, D = u / v, E = c / w, b = c / 2, T = Math.round(w / 2), j = [
        [
          t.x1,
          b
        ],
        [
          t.x2,
          b
        ],
        [
          t.x3,
          b
        ],
        [
          t.x4,
          b
        ]
      ], te = [
        t.P1,
        t.P2,
        t.P3,
        t.P4
      ].map((e) => e * q), oe = [
        t.M1,
        t.M2,
        t.M3,
        t.M4
      ].map((e) => e * q), p = [];
      for (let e = 0; e < L; ++e) for (let o = 0; o < r; ++o) p.push([
        o * D,
        e * E,
        0
      ]);
      const ne = (e, o) => {
        let n = -1, m = 1 / 0;
        for (let f = 0; f < r * L; ++f) {
          const _ = (p[f][0] - e) ** 2 + (p[f][1] - o) ** 2;
          _ < m && (m = _, n = f);
        }
        return n;
      }, se = a + l + M, ae = j.map(([e, o]) => ne(e, o)), Y = j.map(([e, o]) => (p.push([
        e,
        o,
        se
      ]), p.length - 1)), d = [], J = 0;
      for (let e = 0; e < w; ++e) for (let o = 0; o < v; ++o) {
        const n = e * r + o;
        d.push([
          n,
          n + 1,
          n + r + 1,
          n + r
        ]);
      }
      const B = d.length;
      for (let e = 0; e < v; ++e) {
        const o = T * r + e, n = T * r + (e + 1);
        d.push([
          o,
          n
        ]);
      }
      const V = d.length;
      ae.forEach((e, o) => d.push([
        e,
        Y[o]
      ]));
      const C = [];
      for (let e = 0; e < L; ++e) for (let o = 0; o < r; ++o) {
        const n = o === 0 || o === r - 1, m = e === 0 || e === L - 1, f = n && m ? 0.25 : n || m ? 0.5 : 1, _ = D * E * f, h = e * r + o;
        if (C.push({
          node: h,
          dof: 2,
          k: g * _
        }), n && m) {
          const P = 1e-6 * g * D * E;
          C.push({
            node: h,
            dof: 3,
            k: P
          }), C.push({
            node: h,
            dof: 4,
            k: P
          });
        }
      }
      const W = /* @__PURE__ */ new Map();
      Y.forEach((e, o) => {
        W.set(e, [
          0,
          0,
          -te[o],
          0,
          oe[o],
          0
        ]);
      });
      const y = 228e5, I = 0.2, X = y / (2 * (1 + I)), le = i * l, me = i * l ** 3 / 12, ce = l * i ** 3 / 12, ie = 0.28 * i * l ** 3, re = x * x, Z = x ** 4 / 12, de = 0.141 * x ** 4, k = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
      for (let e = J; e < B; ++e) k.set(e, y), z.set(e, I), H.set(e, a);
      for (let e = B; e < V; ++e) k.set(e, y), z.set(e, I), S.set(e, le), F.set(e, me), G.set(e, ce), N.set(e, X), A.set(e, ie);
      for (let e = V; e < d.length; ++e) k.set(e, y), z.set(e, I), S.set(e, re), F.set(e, Z), G.set(e, Z), N.set(e, X), A.set(e, de);
      const K = {
        supports: /* @__PURE__ */ new Map(),
        loads: W
      }, O = {
        elasticities: k,
        poissonsRatios: z,
        thicknesses: H,
        areas: S,
        momentsOfInertiaZ: F,
        momentsOfInertiaY: G,
        shearModuli: N,
        torsionalConstants: A
      };
      s.nodes.val = p, s.elements.val = d, s.nodeInputs.val = K, s.elementInputs.val = O;
      try {
        const e = ue(p, d, K, O, C);
        s.deformOutputs.val = e;
        const o = fe(p, d, O, e), n = /* @__PURE__ */ new Map();
        for (let m = J; m < B; ++m) {
          const f = d[m];
          if (f.length !== 4) continue;
          const _ = f.map((h) => {
            var _a;
            const P = (_a = e.deformations) == null ? void 0 : _a.get(h);
            return P ? g * P[2] : 0;
          });
          n.set(m, _);
        }
        o.pressure = n, o.colorMapRanges = {
          pressure: [
            0,
            -t.q_adm * q
          ]
        }, s.analyzeOutputs.val = o;
      } catch (e) {
        console.error("viga-cim-guerra solver error:", e);
      }
      const R = [];
      R.push(...pe(0, u, b, a, i, l));
      for (const [e, o] of j) R.push(...Me(e, o, a + l, M, x));
      s.objects3D.val = R;
    }
  };
});
export {
  __tla,
  be as v
};
