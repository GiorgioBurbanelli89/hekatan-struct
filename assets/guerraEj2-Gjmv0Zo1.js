import { b as V, c as W, E as U, L as ee } from "./theme-DDCjfe25.js";
import { p as ne, __tla as __tla_0 } from "./didacticCpp-pa3uOomD.js";
let re;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const oe = {
    e_DL_m: 0.79,
    e_DLS_m: 0.84,
    L_sobre_6_m: 0.65,
    iteration_1: {
      sigma_max_tm2: 21.07
    }
  }, te = {
    manual_libro: oe
  }, b = 9.80665, se = 1 / b;
  function ae(t, s, i, a, l) {
    const m = new V(a, l, i), r = new W(new U(m), new ee({
      color: 11579568,
      linewidth: 2
    }));
    return r.position.set(t, s, i / 2), [
      r
    ];
  }
  re = {
    id: "guerra-ej2-zapata-rectangular-sismo",
    name: "Ej.2 \xB7 Zapata Rectangular + Sismo (4.60\xD74.00\xD70.55)",
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
    build(t, s) {
      const i = t.L, a = t.B, l = t.h, m = Math.round(t.nx), r = Math.round(t.ny), c = m + 1, M = r + 1, x = i / m, p = a / r, v = Math.round(t.combo);
      let d, k;
      v === 1 ? (d = t.P_dead + t.P_live + t.P_sismo, k = t.M_dead + t.M_live + t.M_sismo) : (d = t.P_dead + t.P_live, k = t.M_dead + t.M_live);
      const Y = d * b, $ = k * b, w = t.ks_tm3 * b, S = 14100 * Math.sqrt(t.fc_kgcm2) * 98.0665, N = 0.2, f = [];
      for (let e = 0; e < M; ++e) for (let n = 0; n < c; ++n) f.push([
        n * x,
        e * p
      ]);
      const u = [];
      for (let e = 0; e < r; ++e) for (let n = 0; n < m; ++n) {
        const o = e * c + n;
        u.push([
          o,
          o + 1,
          o + c + 1,
          o + c
        ]);
      }
      const K = 2.4 * b * l, g = [], z = [];
      for (let e = 0; e < M; ++e) for (let n = 0; n < c; ++n) {
        const o = n === 0 || n === c - 1, _ = e === 0 || e === M - 1, P = o && _ ? 0.25 : o || _ ? 0.5 : 1, G = x * p * P, L = e * c + n;
        if (g.push({
          node: L,
          dof: 0,
          k: w * G
        }), z.push({
          node: L,
          dof: 0,
          value: -K * G
        }), o && _) {
          const X = 1e-6 * w * x * p;
          g.push({
            node: L,
            dof: 1,
            k: X
          }), g.push({
            node: L,
            dof: 2,
            k: X
          });
        }
      }
      const F = i / 2, j = a / 2, y = [];
      for (let e = 0; e < f.length; e++) {
        const n = f[e][0], o = f[e][1];
        Math.abs(n - F) <= t.col_x / 2 + 1e-6 && Math.abs(o - j) <= t.col_y / 2 + 1e-6 && y.push(e);
      }
      const Z = Y / y.length, q = $ / y.length, h = [];
      for (const e of y) h.push({
        node: e,
        dof: 0,
        value: -Z
      }), h.push({
        node: e,
        dof: 1,
        value: q
      });
      const H = [
        ...h,
        ...z
      ], D = ne({
        E: S,
        nu: N,
        thickness: l,
        theoryType: 0,
        bcType: "none",
        nodes: f,
        elements: u,
        bcs: [],
        pointLoads: H,
        springs: g
      }), I = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
      u.forEach((e, n) => {
        I.set(n, e.map((P) => -Math.abs(w * D.nodeResults[P].w)));
        const o = D.elementResults[n];
        R.set(n, [
          o.Mxx,
          o.Mxx,
          o.Mxx,
          o.Mxx
        ]), B.set(n, [
          o.Myy,
          o.Myy,
          o.Myy,
          o.Myy
        ]), A.set(n, [
          o.Mxy,
          o.Mxy,
          o.Mxy,
          o.Mxy
        ]);
        const _ = Math.sqrt(o.Mxx ** 2 + o.Myy ** 2 - o.Mxx * o.Myy + 3 * o.Mxy ** 2);
        O.set(n, [
          _,
          _,
          _,
          _
        ]);
      });
      const J = f.map((e) => [
        e[0],
        e[1],
        0
      ]);
      s.nodes.val = J, s.elements.val = u;
      const E = /* @__PURE__ */ new Map(), Q = [
        2,
        3,
        4
      ];
      for (const e of h) {
        const n = E.get(e.node) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        n[Q[e.dof] ?? 2] += e.value, E.set(e.node, n);
      }
      s.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: E
      }, s.elementInputs.val = {
        elasticities: new Map(u.map((e, n) => [
          n,
          S
        ])),
        poissonsRatios: new Map(u.map((e, n) => [
          n,
          N
        ])),
        thicknesses: new Map(u.map((e, n) => [
          n,
          l
        ]))
      };
      const T = /* @__PURE__ */ new Map();
      for (const e of D.nodeResults) T.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      s.deformOutputs.val = {
        deformations: T,
        reactions: /* @__PURE__ */ new Map()
      }, s.analyzeOutputs.val = {
        pressure: I,
        bendingXX: R,
        bendingYY: B,
        bendingXY: A,
        vonMises: O
      };
      const C = [];
      C.push(...ae(F, j, t.h_col, t.col_x, t.col_y)), s.objects3D.val = C;
    },
    computedLabels(t, s) {
      var _a, _b, _c, _d, _e;
      const i = s.analyzeOutputs.val.pressure;
      let a = -1 / 0, l = 1 / 0;
      if (i) for (const p of i.values()) for (const v of p) {
        const d = Math.abs(v) * se;
        d > a && (a = d), d < l && (l = d);
      }
      a === -1 / 0 && (a = 0, l = 0);
      const m = te, r = (_b = (_a = m == null ? void 0 : m.manual_libro) == null ? void 0 : _a.iteration_1) == null ? void 0 : _b.sigma_max_tm2, c = (_c = m == null ? void 0 : m.manual_libro) == null ? void 0 : _c.e_DL_m, M = (_d = m == null ? void 0 : m.manual_libro) == null ? void 0 : _d.e_DLS_m, x = (_e = m == null ? void 0 : m.manual_libro) == null ? void 0 : _e.L_sobre_6_m;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${a.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${l.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max iter1 (libro)": `${r.toFixed(2)} t/m\xB2 (L=3.90)`,
        "\u{1F4D8} e (D+L) libro": `${c.toFixed(3)} m`,
        "\u{1F4D8} e (D+L+S) libro": `${M.toFixed(3)} m`,
        "\u{1F4D8} L/6": `${x.toFixed(3)} m`,
        "\u26A0\uFE0F Excentricidad": "e > L/6 \u2192 zona de despegue (libro pag.43)"
      };
    }
  };
});
export {
  __tla,
  re as g
};
