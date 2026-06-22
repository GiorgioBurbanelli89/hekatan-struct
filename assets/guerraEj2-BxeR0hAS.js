import { g as Q, h as W, E as U, L as V } from "./theme-BUyDDEHW.js";
import { p as ee, __tla as __tla_0 } from "./didacticCpp-C0Qfkfmr.js";
let ce;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ne = {
    e_DL_m: 0.79,
    e_DLS_m: 0.84,
    L_sobre_6_m: 0.65,
    iteration_1: {
      sigma_max_tm2: 21.07
    }
  }, oe = {
    manual_libro: ne
  }, f = 9.80665, te = 1 / f;
  function ae(t, a, r, s, l) {
    const m = new Q(s, l, r), c = new W(new U(m), new V({
      color: 11579568,
      linewidth: 2
    }));
    return c.position.set(t, a, r / 2), [
      c
    ];
  }
  ce = {
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
    build(t, a) {
      const r = t.L, s = t.B, l = t.h, m = Math.round(t.nx), c = Math.round(t.ny), i = m + 1, M = c + 1, p = r / m, b = s / c, L = Math.round(t.combo);
      let d, v;
      L === 1 ? (d = t.P_dead + t.P_live + t.P_sismo, v = t.M_dead + t.M_live + t.M_sismo) : (d = t.P_dead + t.P_live, v = t.M_dead + t.M_live);
      const X = d * f, Y = v * f, k = t.ks_tm3 * f, P = 14100 * Math.sqrt(t.fc_kgcm2) * 98.0665, S = 0.2, x = [];
      for (let e = 0; e < M; ++e) for (let n = 0; n < i; ++n) x.push([
        n * p,
        e * b
      ]);
      const u = [];
      for (let e = 0; e < c; ++e) for (let n = 0; n < m; ++n) {
        const o = e * i + n;
        u.push([
          o,
          o + 1,
          o + i + 1,
          o + i
        ]);
      }
      const $ = 2.4 * f * l, g = [], N = [];
      for (let e = 0; e < M; ++e) for (let n = 0; n < i; ++n) {
        const o = n === 0 || n === i - 1, _ = e === 0 || e === M - 1, E = o && _ ? 0.25 : o || _ ? 0.5 : 1, G = p * b * E, y = e * i + n;
        if (g.push({
          node: y,
          dof: 0,
          k: k * G
        }), N.push({
          node: y,
          dof: 0,
          value: -$ * G
        }), o && _) {
          const T = 1e-6 * k * p * b;
          g.push({
            node: y,
            dof: 1,
            k: T
          }), g.push({
            node: y,
            dof: 2,
            k: T
          });
        }
      }
      const z = r / 2, F = s / 2, h = [];
      for (let e = 0; e < x.length; e++) {
        const n = x[e][0], o = x[e][1];
        Math.abs(n - z) <= t.col_x / 2 + 1e-6 && Math.abs(o - F) <= t.col_y / 2 + 1e-6 && h.push(e);
      }
      const K = X / h.length, Z = Y / h.length, w = [];
      for (const e of h) w.push({
        node: e,
        dof: 0,
        value: -K
      }), w.push({
        node: e,
        dof: 1,
        value: Z
      });
      const q = [
        ...w,
        ...N
      ], D = ee({
        E: P,
        nu: S,
        thickness: l,
        theoryType: 0,
        bcType: "none",
        nodes: x,
        elements: u,
        bcs: [],
        pointLoads: q,
        springs: g
      }), R = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
      u.forEach((e, n) => {
        R.set(n, e.map((E) => -Math.abs(k * D.nodeResults[E].w)));
        const o = D.elementResults[n];
        j.set(n, [
          o.Mxx,
          o.Mxx,
          o.Mxx,
          o.Mxx
        ]), I.set(n, [
          o.Myy,
          o.Myy,
          o.Myy,
          o.Myy
        ]), B.set(n, [
          o.Mxy,
          o.Mxy,
          o.Mxy,
          o.Mxy
        ]);
        const _ = Math.sqrt(o.Mxx ** 2 + o.Myy ** 2 - o.Mxx * o.Myy + 3 * o.Mxy ** 2);
        A.set(n, [
          _,
          _,
          _,
          _
        ]);
      });
      const H = x.map((e) => [
        e[0],
        e[1],
        0
      ]);
      a.nodes.val = H, a.elements.val = u, a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, a.elementInputs.val = {
        elasticities: new Map(u.map((e, n) => [
          n,
          P
        ])),
        poissonsRatios: new Map(u.map((e, n) => [
          n,
          S
        ])),
        thicknesses: new Map(u.map((e, n) => [
          n,
          l
        ]))
      };
      const O = /* @__PURE__ */ new Map();
      for (const e of D.nodeResults) O.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      a.deformOutputs.val = {
        deformations: O,
        reactions: /* @__PURE__ */ new Map()
      };
      const J = {
        pressure: [
          -12 * f,
          -26 * f
        ]
      };
      a.analyzeOutputs.val = {
        pressure: R,
        bendingXX: j,
        bendingYY: I,
        bendingXY: B,
        vonMises: A,
        colorMapRanges: J
      };
      const C = [];
      C.push(...ae(z, F, t.h_col, t.col_x, t.col_y)), a.objects3D.val = C;
    },
    computedLabels(t, a) {
      var _a, _b, _c, _d, _e;
      const r = a.analyzeOutputs.val.pressure;
      let s = -1 / 0, l = 1 / 0;
      if (r) for (const b of r.values()) for (const L of b) {
        const d = Math.abs(L) * te;
        d > s && (s = d), d < l && (l = d);
      }
      s === -1 / 0 && (s = 0, l = 0);
      const m = oe, c = (_b = (_a = m == null ? void 0 : m.manual_libro) == null ? void 0 : _a.iteration_1) == null ? void 0 : _b.sigma_max_tm2, i = (_c = m == null ? void 0 : m.manual_libro) == null ? void 0 : _c.e_DL_m, M = (_d = m == null ? void 0 : m.manual_libro) == null ? void 0 : _d.e_DLS_m, p = (_e = m == null ? void 0 : m.manual_libro) == null ? void 0 : _e.L_sobre_6_m;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${s.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${l.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max iter1 (libro)": c ? `${c.toFixed(2)} t/m\xB2 (L=3.90)` : "\u2014",
        "\u{1F4D8} e (D+L) libro": i ? `${i.toFixed(3)} m` : "\u2014",
        "\u{1F4D8} e (D+L+S) libro": M ? `${M.toFixed(3)} m` : "\u2014",
        "\u{1F4D8} L/6": p ? `${p.toFixed(3)} m` : "\u2014",
        "\u26A0\uFE0F Excentricidad": "e > L/6 \u2192 zona de despegue (libro pag.43)"
      };
    }
  };
});
export {
  __tla,
  ce as g
};
