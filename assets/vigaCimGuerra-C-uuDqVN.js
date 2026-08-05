import { b as T, E as W, c as Y, L as J } from "./theme-DDCjfe25.js";
import { a as fe } from "./analyze-DNPn2SjO.js";
import { d as ue, __tla as __tla_0 } from "./didacticCpp-jx4SQtmt.js";
let he;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const q = 9.80665;
  function pe(t, n, m, l, i, r, a = 9127187) {
    const g = Math.abs(n - t), d = new T(g, i, r), _ = new W(d), x = new Y(_, new J({
      color: a,
      linewidth: 2
    }));
    return x.position.set((t + n) / 2, m, l + r / 2), [
      x
    ];
  }
  function Me(t, n, m, l, i, r = 4620980) {
    const a = new T(i, i, l), g = new W(a), d = new Y(g, new J({
      color: r,
      linewidth: 2
    }));
    return d.position.set(t, n, m + l / 2), [
      d
    ];
  }
  function xe(t, n, m, l = 16747520) {
    const i = new T(t, n, m), r = new W(i), a = new Y(r, new J({
      color: l,
      linewidth: 2
    }));
    return a.position.set(t / 2, n / 2, m / 2), [
      a
    ];
  }
  he = {
    id: "viga-cim-guerra-ej7",
    name: "Ej.7 \xB7 Viga Cimentaci\xF3n (L=17.20m, 4 cols c/M)",
    category: "\u{1F4DA} Libros \xB7 SAFE - Marcelo Guerra",
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
      const n = t.P1 + t.P2 + t.P3 + t.P4, m = t.M1 + t.M2 + t.M3 + t.M4, l = t.L * t.Bz, i = n / l;
      return {
        "\u03A3P (tonf)": n.toFixed(1),
        "\u03A3M (tonf\xB7m)": m.toFixed(2),
        "\xC1rea zapata (m\xB2)": l.toFixed(2),
        "q_med = \u03A3P/A (tonf/m\xB2)": i.toFixed(2),
        "ratio q_med/q_adm": (i / t.q_adm).toFixed(3)
      };
    },
    build(t, n) {
      const m = t.L, l = t.Bz, i = t.t_zap, r = t.b_viga, a = t.h_viga, g = t.h_ped, d = t.b_ped, _ = t.ks_tonfm3 * q, x = Math.round(t.nx), w = Math.round(t.ny), f = x + 1, L = w + 1, D = m / x, j = l / w, h = l / 2, V = Math.round(w / 2), S = [
        [
          t.x1,
          h
        ],
        [
          t.x2,
          h
        ],
        [
          t.x3,
          h
        ],
        [
          t.x4,
          h
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
      ].map((e) => e * q), M = [];
      for (let e = 0; e < L; ++e) for (let o = 0; o < f; ++o) M.push([
        o * D,
        e * j,
        0
      ]);
      const ne = (e, o) => {
        let s = -1, c = 1 / 0;
        for (let p = 0; p < f * L; ++p) {
          const b = (M[p][0] - e) ** 2 + (M[p][1] - o) ** 2;
          b < c && (c = b, s = p);
        }
        return s;
      }, se = a + g, ae = S.map(([e, o]) => ne(e, o)), X = S.map(([e, o]) => (M.push([
        e,
        o,
        se
      ]), M.length - 1)), u = [], Z = 0;
      for (let e = 0; e < w; ++e) for (let o = 0; o < x; ++o) {
        const s = e * f + o;
        u.push([
          s,
          s + 1,
          s + f + 1,
          s + f
        ]);
      }
      const B = u.length;
      for (let e = 0; e < x; ++e) {
        const o = V * f + e, s = V * f + (e + 1);
        u.push([
          o,
          s
        ]);
      }
      const H = u.length;
      ae.forEach((e, o) => u.push([
        e,
        X[o]
      ]));
      const y = [];
      for (let e = 0; e < L; ++e) for (let o = 0; o < f; ++o) {
        const s = o === 0 || o === f - 1, c = e === 0 || e === L - 1, p = s && c ? 0.25 : s || c ? 0.5 : 1, b = D * j * p, P = e * f + o;
        if (y.push({
          node: P,
          dof: 2,
          k: _ * b
        }), s && c) {
          const v = 1e-6 * _ * D * j;
          y.push({
            node: P,
            dof: 3,
            k: v
          }), y.push({
            node: P,
            dof: 4,
            k: v
          });
        }
      }
      const K = /* @__PURE__ */ new Map();
      X.forEach((e, o) => {
        K.set(e, [
          0,
          0,
          -te[o],
          0,
          oe[o],
          0
        ]);
      });
      const C = 228e5, I = 0.2, Q = C / (2 * (1 + I)), le = r * a, me = r * a ** 3 / 12, ie = a * r ** 3 / 12, re = 0.28 * r * a ** 3, ce = d * d, U = d ** 4 / 12, de = 0.141 * d ** 4, k = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
      for (let e = Z; e < B; ++e) k.set(e, C), z.set(e, I), $.set(e, i);
      for (let e = B; e < H; ++e) k.set(e, C), z.set(e, I), F.set(e, le), A.set(e, me), G.set(e, ie), N.set(e, Q), O.set(e, re);
      for (let e = H; e < u.length; ++e) k.set(e, C), z.set(e, I), F.set(e, ce), A.set(e, U), G.set(e, U), N.set(e, Q), O.set(e, de);
      const ee = {
        supports: /* @__PURE__ */ new Map(),
        loads: K
      }, R = {
        elasticities: k,
        poissonsRatios: z,
        thicknesses: $,
        areas: F,
        momentsOfInertiaZ: A,
        momentsOfInertiaY: G,
        shearModuli: N,
        torsionalConstants: O
      };
      n.nodes.val = M, n.elements.val = u, n.nodeInputs.val = ee, n.elementInputs.val = R;
      try {
        const e = ue(M, u, ee, R, y);
        n.deformOutputs.val = e;
        const o = fe(M, u, R, e), s = /* @__PURE__ */ new Map();
        for (let c = Z; c < B; ++c) {
          const p = u[c];
          if (p.length !== 4) continue;
          const b = p.map((P) => {
            var _a;
            const v = (_a = e.deformations) == null ? void 0 : _a.get(P);
            return v ? _ * v[2] : 0;
          });
          s.set(c, b);
        }
        o.pressure = s, o.colorMapRanges = {
          pressure: [
            -t.q_adm * q,
            0
          ]
        }, n.analyzeOutputs.val = o;
      } catch (e) {
        console.error("viga-cim-guerra solver error:", e);
      }
      const E = [];
      E.push(...xe(m, l, i)), E.push(...pe(0, m, h, 0, r, a));
      for (const [e, o] of S) E.push(...Me(e, o, 0, a + g, d));
      n.objects3D.val = E;
    }
  };
});
export {
  __tla,
  he as v
};
