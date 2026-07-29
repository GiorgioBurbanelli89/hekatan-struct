import { b as ee, c as ne, E as oe, L as te } from "./theme-DDCjfe25.js";
import { p as se, __tla as __tla_0 } from "./didacticCpp-CCShk1kX.js";
let re;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ae = {
    sigma_max_servicio_tm2: 16.018,
    sigma_min_servicio_tm2: 9.901
  }, le = {
    manual_libro: ae
  }, u = 9.80665, ce = 1 / u;
  function Y(t, a, d, s) {
    const l = new ee(s, s, d), _ = new ne(new oe(l), new te({
      color: 11579568,
      linewidth: 2
    }));
    return _.position.set(t, a, d / 2), [
      _
    ];
  }
  re = {
    id: "guerra-ej4-zapata-combinada-rectangular",
    name: "Ej.4 \xB7 Zapata Combinada Rectangular (7.50\xD72.50)",
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
      "EJ.4 Guerra MDI - pag. 74-90. Zapata COMBINADA con 2 columnas.",
      "L=7.50m, B=2.50m, h=0.50m. Col 45\xD745cm en x=1.00m y x=6.50m.",
      "Col 1: P_D=90, M_D=7, P_L=23, M_L=3 (tonf, tonf\xB7m)",
      "Col 2: P_D=100, M_D=14, P_L=30, M_L=4",
      "Libro pag.76: \u03C3_max=16.018, \u03C3_min=9.901 t/m\xB2 (cumple q_adm=18)."
    ],
    params: {
      L: {
        default: 7.5,
        min: 5,
        max: 10,
        step: 0.1,
        label: "L (m)"
      },
      B: {
        default: 2.5,
        min: 1.5,
        max: 4,
        step: 0.05,
        label: "B (m)"
      },
      h: {
        default: 0.5,
        min: 0.3,
        max: 0.9,
        step: 0.05,
        label: "h espesor (m)"
      },
      col1_x: {
        default: 1,
        min: 0.3,
        max: 3,
        step: 0.05,
        label: "col1 x (m)"
      },
      col2_x: {
        default: 6.5,
        min: 3,
        max: 9,
        step: 0.05,
        label: "col2 x (m)"
      },
      col_size: {
        default: 0.45,
        min: 0.2,
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
      P_dead_c1: {
        default: 90,
        min: 0,
        max: 300,
        step: 1,
        label: "P_D col1 (tonf)"
      },
      M_dead_c1: {
        default: 7,
        min: -50,
        max: 50,
        step: 0.5,
        label: "M_D col1 (tonf\xB7m)"
      },
      P_live_c1: {
        default: 23,
        min: 0,
        max: 100,
        step: 1,
        label: "P_L col1 (tonf)"
      },
      M_live_c1: {
        default: 3,
        min: -30,
        max: 30,
        step: 0.5,
        label: "M_L col1 (tonf\xB7m)"
      },
      P_dead_c2: {
        default: 100,
        min: 0,
        max: 300,
        step: 1,
        label: "P_D col2 (tonf)"
      },
      M_dead_c2: {
        default: 14,
        min: -50,
        max: 50,
        step: 0.5,
        label: "M_D col2 (tonf\xB7m)"
      },
      P_live_c2: {
        default: 30,
        min: 0,
        max: 100,
        step: 1,
        label: "P_L col2 (tonf)"
      },
      M_live_c2: {
        default: 4,
        min: -30,
        max: 30,
        step: 0.5,
        label: "M_L col2 (tonf\xB7m)"
      },
      fc_kgcm2: {
        default: 240,
        min: 175,
        max: 600,
        step: 5,
        label: "f'c (kg/cm\xB2)"
      },
      nx: {
        default: 30,
        min: 12,
        max: 48,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 10,
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
    build(t, a) {
      const d = t.L, s = t.B, l = t.h, _ = Math.round(t.nx), M = Math.round(t.ny), c = _ + 1, x = M + 1, r = d / _, m = s / M, p = (t.P_dead_c1 + t.P_live_c1) * u, S = (t.M_dead_c1 + t.M_live_c1) * u, $ = (t.P_dead_c2 + t.P_live_c2) * u, K = (t.M_dead_c2 + t.M_live_c2) * u, k = t.ks_tm3 * u, E = 14100 * Math.sqrt(t.fc_kgcm2) * 98.0665, C = 0.2, b = [];
      for (let e = 0; e < x; ++e) for (let n = 0; n < c; ++n) b.push([
        n * r,
        e * m
      ]);
      const f = [];
      for (let e = 0; e < M; ++e) for (let n = 0; n < _; ++n) {
        const o = e * c + n;
        f.push([
          o,
          o + 1,
          o + c + 1,
          o + c
        ]);
      }
      const Z = 2.4 * u * l, y = [], F = [];
      for (let e = 0; e < x; ++e) for (let n = 0; n < c; ++n) {
        const o = n === 0 || n === c - 1, i = e === 0 || e === x - 1, v = o && i ? 0.25 : o || i ? 0.5 : 1, G = r * m * v, g = e * c + n;
        if (y.push({
          node: g,
          dof: 0,
          k: k * G
        }), F.push({
          node: g,
          dof: 0,
          value: -Z * G
        }), o && i) {
          const X = 1e-6 * k * r * m;
          y.push({
            node: g,
            dof: 1,
            k: X
          }), y.push({
            node: g,
            dof: 2,
            k: X
          });
        }
      }
      const L = s / 2, I = (e) => {
        const n = [];
        for (let o = 0; o < b.length; o++) {
          const i = b[o][0], v = b[o][1];
          Math.abs(i - e) <= t.col_size / 2 + 1e-6 && Math.abs(v - L) <= t.col_size / 2 + 1e-6 && n.push(o);
        }
        return n;
      }, w = I(t.col1_x), P = I(t.col2_x), h = [], q = p / w.length, H = S / w.length, J = $ / P.length, Q = K / P.length;
      for (const e of w) h.push({
        node: e,
        dof: 0,
        value: -q
      }), h.push({
        node: e,
        dof: 1,
        value: H
      });
      for (const e of P) h.push({
        node: e,
        dof: 0,
        value: -J
      }), h.push({
        node: e,
        dof: 1,
        value: Q
      });
      const V = [
        ...h,
        ...F
      ], N = se({
        E,
        nu: C,
        thickness: l,
        theoryType: 0,
        bcType: "none",
        nodes: b,
        elements: f,
        bcs: [],
        pointLoads: V,
        springs: y
      }), j = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
      f.forEach((e, n) => {
        j.set(n, e.map((v) => -Math.abs(k * N.nodeResults[v].w)));
        const o = N.elementResults[n];
        A.set(n, [
          o.Mxx,
          o.Mxx,
          o.Mxx,
          o.Mxx
        ]), B.set(n, [
          o.Myy,
          o.Myy,
          o.Myy,
          o.Myy
        ]), O.set(n, [
          o.Mxy,
          o.Mxy,
          o.Mxy,
          o.Mxy
        ]);
        const i = Math.sqrt(o.Mxx ** 2 + o.Myy ** 2 - o.Mxx * o.Myy + 3 * o.Mxy ** 2);
        R.set(n, [
          i,
          i,
          i,
          i
        ]);
      });
      const W = b.map((e) => [
        e[0],
        e[1],
        0
      ]);
      a.nodes.val = W, a.elements.val = f;
      const z = /* @__PURE__ */ new Map(), U = [
        2,
        3,
        4
      ];
      for (const e of h) {
        const n = z.get(e.node) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        n[U[e.dof] ?? 2] += e.value, z.set(e.node, n);
      }
      a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: z
      }, a.elementInputs.val = {
        elasticities: new Map(f.map((e, n) => [
          n,
          E
        ])),
        poissonsRatios: new Map(f.map((e, n) => [
          n,
          C
        ])),
        thicknesses: new Map(f.map((e, n) => [
          n,
          l
        ]))
      };
      const T = /* @__PURE__ */ new Map();
      for (const e of N.nodeResults) T.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      a.deformOutputs.val = {
        deformations: T,
        reactions: /* @__PURE__ */ new Map()
      }, a.analyzeOutputs.val = {
        pressure: j,
        bendingXX: A,
        bendingYY: B,
        bendingXY: O,
        vonMises: R
      };
      const D = [];
      D.push(...Y(t.col1_x, L, t.h_col, t.col_size)), D.push(...Y(t.col2_x, L, t.h_col, t.col_size)), a.objects3D.val = D;
    },
    computedLabels(t, a) {
      var _a, _b;
      const d = a.analyzeOutputs.val.pressure;
      let s = -1 / 0, l = 1 / 0;
      if (d) for (const r of d.values()) for (const m of r) {
        const p = Math.abs(m) * ce;
        p > s && (s = p), p < l && (l = p);
      }
      s === -1 / 0 && (s = 0, l = 0);
      const _ = le, M = (_a = _ == null ? void 0 : _.manual_libro) == null ? void 0 : _a.sigma_max_servicio_tm2, c = (_b = _ == null ? void 0 : _.manual_libro) == null ? void 0 : _b.sigma_min_servicio_tm2, x = (r, m) => m === void 0 || m === 0 ? "\u2014" : `${((r - m) / m * 100).toFixed(2)} %`;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${s.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${l.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max libro p.76": `${M.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_min libro p.76": `${c.toFixed(3)} t/m\xB2`,
        "\u0394 \u03C3_max vs libro": x(s, M),
        "\u0394 \u03C3_min vs libro": x(l, c)
      };
    }
  };
});
export {
  __tla,
  re as g
};
