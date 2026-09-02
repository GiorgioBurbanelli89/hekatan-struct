import { b as V, L as W, E as U, a as ee } from "./theme-Co6w-pfC.js";
import { p as ne, __tla as __tla_0 } from "./didacticCpp-tPsbfU7x.js";
import { c as oe } from "./cargaColumnaConsistente-DPcPMAlx.js";
let _e;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const te = {
    e_DL_m: 0.79,
    e_DLS_m: 0.84,
    L_sobre_6_m: 0.65,
    iteration_1: {
      sigma_max_tm2: 21.07
    }
  }, ae = {
    manual_libro: te
  }, b = 9.80665, se = 1 / b;
  function le(o, a, r, s, l) {
    const m = new V(s, l, r), i = new W(new U(m), new ee({
      color: 11579568,
      linewidth: 2
    }));
    return i.position.set(o, a, r / 2), [
      i
    ];
  }
  _e = {
    id: "guerra-ej2-zapata-rectangular-sismo",
    name: "Ej.2 \xB7 Zapata Rectangular + Sismo (4.60\xD74.00\xD70.55)",
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
      "EJ.2 Guerra MDI - pag. 42-58. Zapata rectangular bajo carga s\xEDsmica.",
      "L=4.60m, B=4.00m, h=0.55m. Columna 1.20\xD70.60m (rectangular).",
      "Cargas D+L+S: P=124t, M=105t\xB7m \u2192 excentricidad e=0.84m > L/6=0.65m",
      "Excentricidad grande \u2192 zona de despegue (parte de zapata no en contacto).",
      "Libro: \u03C3_max iter1 (L=3.90, B=3.30) = 21.07 t/m\xB2 >q_adm. Iter2 dimensiones finales.",
      "Combo seleccion: D+L (servicio) o D+L+S (servicio+sismo) en el slider 'combo'."
    ],
    params: {
      L: {
        default: 4.6,
        min: 3.5,
        max: 6,
        step: 0.05,
        label: "L (m)"
      },
      B: {
        default: 4,
        min: 3,
        max: 5.5,
        step: 0.05,
        label: "B (m)"
      },
      h: {
        default: 0.55,
        min: 0.4,
        max: 0.9,
        step: 0.05,
        label: "h espesor (m)"
      },
      col_x: {
        default: 1.2,
        min: 0.4,
        max: 2,
        step: 0.05,
        label: "col Lx (m)"
      },
      col_y: {
        default: 0.6,
        min: 0.3,
        max: 1.5,
        step: 0.05,
        label: "col Ly (m)"
      },
      ks_tm3: {
        default: 2920,
        min: 500,
        max: 8e3,
        step: 50,
        label: "ks (tonf/m\xB3)"
      },
      P_dead: {
        default: 91,
        min: 0,
        max: 300,
        step: 1,
        label: "P_D (tonf)"
      },
      M_dead: {
        default: 60,
        min: 0,
        max: 200,
        step: 1,
        label: "M_D (tonf\xB7m)"
      },
      P_live: {
        default: 30,
        min: 0,
        max: 150,
        step: 1,
        label: "P_L (tonf)"
      },
      M_live: {
        default: 36,
        min: 0,
        max: 100,
        step: 1,
        label: "M_L (tonf\xB7m)"
      },
      P_sismo: {
        default: 3,
        min: 0,
        max: 100,
        step: 0.5,
        label: "P_S (tonf)"
      },
      M_sismo: {
        default: 9,
        min: 0,
        max: 80,
        step: 0.5,
        label: "M_S (tonf\xB7m)"
      },
      combo: {
        default: 1,
        min: 0,
        max: 1,
        step: 1,
        label: "combo (0=DL, 1=DLS)"
      },
      fc_kgcm2: {
        default: 280,
        min: 175,
        max: 600,
        step: 5,
        label: "f'c (kg/cm\xB2)"
      },
      nx: {
        default: 18,
        min: 8,
        max: 32,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 16,
        min: 8,
        max: 32,
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
    build(o, a) {
      const r = o.L, s = o.B, l = o.h, m = Math.round(o.nx), i = Math.round(o.ny), c = m + 1, M = i + 1, x = r / m, p = s / i, h = Math.round(o.combo);
      let d, L;
      h === 1 ? (d = o.P_dead + o.P_live + o.P_sismo, L = o.M_dead + o.M_live + o.M_sismo) : (d = o.P_dead + o.P_live, L = o.M_dead + o.M_live);
      const $ = d * b, G = L * b, v = o.ks_tm3 * b, z = 14100 * Math.sqrt(o.fc_kgcm2) * 98.0665, j = 0.2, f = [];
      for (let e = 0; e < M; ++e) for (let n = 0; n < c; ++n) f.push([
        n * x,
        e * p
      ]);
      const _ = [];
      for (let e = 0; e < i; ++e) for (let n = 0; n < m; ++n) {
        const t = e * c + n;
        _.push([
          t,
          t + 1,
          t + c + 1,
          t + c
        ]);
      }
      const K = 2.4 * b * l, g = [], C = [];
      for (let e = 0; e < M; ++e) for (let n = 0; n < c; ++n) {
        const t = n === 0 || n === c - 1, u = e === 0 || e === M - 1, N = t && u ? 0.25 : t || u ? 0.5 : 1, X = x * p * N, y = e * c + n;
        if (g.push({
          node: y,
          dof: 0,
          k: v * X
        }), C.push({
          node: y,
          dof: 0,
          value: -K * X
        }), t && u) {
          const Y = 1e-6 * v * x * p;
          g.push({
            node: y,
            dof: 1,
            k: Y
          }), g.push({
            node: y,
            dof: 2,
            k: Y
          });
        }
      }
      const k = r / 2, w = s / 2, D = [];
      for (let e = 0; e < f.length; e++) {
        const n = f[e][0], t = f[e][1];
        Math.abs(n - k) <= o.col_x / 2 + 1e-6 && Math.abs(t - w) <= o.col_y / 2 + 1e-6 && D.push(e);
      }
      const Z = oe(f, _, $, k, w, o.col_x, o.col_y), q = G / D.length, E = [
        ...Z.pointLoads
      ];
      for (const e of D) E.push({
        node: e,
        dof: 1,
        value: q
      });
      const H = [
        ...E,
        ...C
      ], P = ne({
        E: z,
        nu: j,
        thickness: l,
        theoryType: 0,
        bcType: "none",
        nodes: f,
        elements: _,
        bcs: [],
        pointLoads: H,
        springs: g
      }), F = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
      _.forEach((e, n) => {
        F.set(n, e.map((N) => -Math.abs(v * P.nodeResults[N].w)));
        const t = P.elementResults[n];
        I.set(n, [
          t.Mxx,
          t.Mxx,
          t.Mxx,
          t.Mxx
        ]), R.set(n, [
          t.Myy,
          t.Myy,
          t.Myy,
          t.Myy
        ]), B.set(n, [
          t.Mxy,
          t.Mxy,
          t.Mxy,
          t.Mxy
        ]);
        const u = Math.sqrt(t.Mxx ** 2 + t.Myy ** 2 - t.Mxx * t.Myy + 3 * t.Mxy ** 2);
        O.set(n, [
          u,
          u,
          u,
          u
        ]);
      });
      const J = f.map((e) => [
        e[0],
        e[1],
        0
      ]);
      a.nodes.val = J, a.elements.val = _;
      const S = /* @__PURE__ */ new Map(), Q = [
        2,
        3,
        4
      ];
      for (const e of E) {
        const n = S.get(e.node) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        n[Q[e.dof] ?? 2] += e.value, S.set(e.node, n);
      }
      a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: S
      }, a.elementInputs.val = {
        elasticities: new Map(_.map((e, n) => [
          n,
          z
        ])),
        poissonsRatios: new Map(_.map((e, n) => [
          n,
          j
        ])),
        thicknesses: new Map(_.map((e, n) => [
          n,
          l
        ]))
      };
      const T = /* @__PURE__ */ new Map();
      P.nodeResults.forEach((e, n) => T.set(n, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ])), a.deformOutputs.val = {
        deformations: T,
        reactions: /* @__PURE__ */ new Map()
      }, a.analyzeOutputs.val = {
        pressure: F,
        bendingXX: I,
        bendingYY: R,
        bendingXY: B,
        vonMises: O
      };
      const A = [];
      A.push(...le(k, w, o.h_col, o.col_x, o.col_y)), a.objects3D.val = A;
    },
    computedLabels(o, a) {
      var _a, _b, _c, _d, _e2;
      const r = a.analyzeOutputs.val.pressure;
      let s = -1 / 0, l = 1 / 0;
      if (r) for (const p of r.values()) for (const h of p) {
        const d = Math.abs(h) * se;
        d > s && (s = d), d < l && (l = d);
      }
      s === -1 / 0 && (s = 0, l = 0);
      const m = ae, i = (_b = (_a = m == null ? void 0 : m.manual_libro) == null ? void 0 : _a.iteration_1) == null ? void 0 : _b.sigma_max_tm2, c = (_c = m == null ? void 0 : m.manual_libro) == null ? void 0 : _c.e_DL_m, M = (_d = m == null ? void 0 : m.manual_libro) == null ? void 0 : _d.e_DLS_m, x = (_e2 = m == null ? void 0 : m.manual_libro) == null ? void 0 : _e2.L_sobre_6_m;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${s.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${l.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max iter1 (libro)": i ? `${i.toFixed(2)} t/m\xB2 (L=3.90)` : "\u2014",
        "\u{1F4D8} e (D+L) libro": c ? `${c.toFixed(3)} m` : "\u2014",
        "\u{1F4D8} e (D+L+S) libro": M ? `${M.toFixed(3)} m` : "\u2014",
        "\u{1F4D8} L/6": x ? `${x.toFixed(3)} m` : "\u2014",
        "\u26A0\uFE0F Excentricidad": "e > L/6 \u2192 zona de despegue (libro pag.43)"
      };
    }
  };
});
export {
  __tla,
  _e as g
};
