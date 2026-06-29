import { g as q, h as J, E as Q, L as V } from "./theme-Buj43zQ_.js";
import { p as U, __tla as __tla_0 } from "./didacticCpp-BebR7qv7.js";
let _e;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ee = {
    with_self_weight: {
      sigma_max_servicio_tm2: 13.264,
      sigma_min_servicio_tm2: 7.305
    },
    without_self_weight: {
      sigma_max_servicio_tm2: 11.86
    }
  }, ae = {
    sigma_max_tm2: 13.94,
    sigma_min_tm2: 8.28
  }, ne = {
    sigma_max_servicio_tm2: 13.163
  }, se = {
    safe_api_live: ee,
    manual_libro_pag_19: ae,
    safe_libro_pag_36: ne
  }, E = 9.80665, oe = 1 / E;
  function te(s, l, d, o) {
    const i = new q(o, o, d), t = new J(new Q(i), new V({
      color: 11579568,
      linewidth: 2
    }));
    return t.position.set(s, l, d / 2), [
      t
    ];
  }
  _e = {
    id: "guerra-ej1-zapata-cuadrada",
    name: "Ej.1 \xB7 Zapata Aislada Cuadrada (3.45\xD73.45\xD70.45)",
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
      "EJ.1 del libro Guerra MDI \u2014 pag. 17-42 (modelado en SAFE: pag. 29-38)",
      "Zapata cuadrada 3.45\xD73.45 m, h=0.45 m, sobre Winkler ks=2920 t/m\xB3",
      "Cargas: D=91tonf+12tonf\xB7m, L=30tonf+5tonf\xB7m (sobre columna 45\xD745cm)",
      "Combo servicio: 1.0D+1.0L \u2192 \u03C3_max libro = 13.163 t/m\xB2 (SAFE) vs 13.94 t/m\xB2 (manual)",
      "Pressure colormap: FEM raw (ks\xB7w nodal) \u2192 patron CURVADO/radial como SAFE.",
      "  La placa flexible concentra la presion cerca de la columna y decae.",
      "  \u03C3_max al lado +X (magenta, max compresion), \u03C3_min al -X (cyan).",
      "Bending Mxx/Myy/Mxy: salida FEM cruda (plate Q4 Hekatan)."
    ],
    params: {
      B: {
        default: 3.45,
        min: 2.5,
        max: 5,
        step: 0.05,
        label: "B = L (m)"
      },
      h: {
        default: 0.45,
        min: 0.3,
        max: 0.8,
        step: 0.05,
        label: "h espesor (m)"
      },
      col_size: {
        default: 0.45,
        min: 0.2,
        max: 0.8,
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
      P_dead: {
        default: 91,
        min: 0,
        max: 300,
        step: 1,
        label: "P_D (tonf)"
      },
      M_dead: {
        default: 12,
        min: -40,
        max: 40,
        step: 0.5,
        label: "M_D (tonf\xB7m)"
      },
      P_live: {
        default: 30,
        min: 0,
        max: 200,
        step: 1,
        label: "P_L (tonf)"
      },
      M_live: {
        default: 5,
        min: -40,
        max: 40,
        step: 0.5,
        label: "M_L (tonf\xB7m)"
      },
      fc_kgcm2: {
        default: 280,
        min: 175,
        max: 600,
        step: 5,
        label: "f'c (kg/cm\xB2)"
      },
      nx: {
        default: 16,
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
    build(s, l) {
      const d = s.B, o = s.B, i = s.h, t = Math.round(s.nx), f = Math.round(s.ny), m = t + 1, y = f + 1, u = d / t, p = o / f, w = (s.P_dead + s.P_live) * E, x = (s.M_dead + s.M_live) * E, M = s.ks_tm3 * E, v = 14100 * Math.sqrt(s.fc_kgcm2) * 98.0665, D = 0.2, _ = [];
      for (let e = 0; e < y; ++e) for (let a = 0; a < m; ++a) _.push([
        a * u,
        e * p
      ]);
      const b = [];
      for (let e = 0; e < f; ++e) for (let a = 0; a < t; ++a) {
        const n = e * m + a;
        b.push([
          n,
          n + 1,
          n + m + 1,
          n + m
        ]);
      }
      const H = 2.4 * E * i, F = [], W = [];
      for (let e = 0; e < y; ++e) for (let a = 0; a < m; ++a) {
        const n = a === 0 || a === m - 1, c = e === 0 || e === y - 1, r = n && c ? 0.25 : n || c ? 0.5 : 1, k = u * p * r, h = e * m + a;
        if (F.push({
          node: h,
          dof: 0,
          k: M * k
        }), W.push({
          node: h,
          dof: 0,
          value: -H * k
        }), n && c) {
          const A = 1e-6 * M * u * p;
          F.push({
            node: h,
            dof: 1,
            k: A
          }), F.push({
            node: h,
            dof: 2,
            k: A
          });
        }
      }
      const L = d / 2, P = o / 2;
      ((e, a) => {
        let n = -1, c = 1 / 0;
        for (let r = 0; r < _.length; ++r) {
          const k = _[r][0] - e, h = _[r][1] - a, A = k * k + h * h;
          A < c && (c = A, n = r);
        }
        return n;
      })(L, P);
      const S = [];
      for (let e = 0; e < _.length; e++) {
        const a = _[e][0], n = _[e][1];
        Math.abs(a - L) <= s.col_size / 2 + 1e-6 && Math.abs(n - P) <= s.col_size / 2 + 1e-6 && S.push(e);
      }
      const T = w / S.length, G = x / S.length, N = [];
      for (const e of S) N.push({
        node: e,
        dof: 0,
        value: -T
      }), N.push({
        node: e,
        dof: 1,
        value: G
      });
      const Y = [
        ...N,
        ...W
      ], I = U({
        E: v,
        nu: D,
        thickness: i,
        theoryType: 0,
        bcType: "none",
        nodes: _,
        elements: b,
        bcs: [],
        pointLoads: Y,
        springs: F
      }), K = _.map((e) => [
        e[0],
        e[1],
        0
      ]);
      l.nodes.val = K, l.elements.val = b;
      const z = /* @__PURE__ */ new Map(), Z = [
        2,
        3,
        4
      ];
      for (const e of N) {
        const a = z.get(e.node) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        a[Z[e.dof] ?? 2] += e.value, z.set(e.node, a);
      }
      l.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: z
      }, l.elementInputs.val = {
        elasticities: new Map(b.map((e, a) => [
          a,
          v
        ])),
        poissonsRatios: new Map(b.map((e, a) => [
          a,
          D
        ])),
        thicknesses: new Map(b.map((e, a) => [
          a,
          i
        ]))
      };
      const $ = /* @__PURE__ */ new Map();
      for (const e of I.nodeResults) $.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      l.deformOutputs.val = {
        deformations: $,
        reactions: /* @__PURE__ */ new Map()
      };
      const j = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
      b.forEach((e, a) => {
        j.set(a, e.map((r) => -Math.abs(M * I.nodeResults[r].w)));
        const n = I.elementResults[a];
        B.set(a, [
          n.Mxx,
          n.Mxx,
          n.Mxx,
          n.Mxx
        ]), C.set(a, [
          n.Myy,
          n.Myy,
          n.Myy,
          n.Myy
        ]), O.set(a, [
          n.Mxy,
          n.Mxy,
          n.Mxy,
          n.Mxy
        ]);
        const c = Math.sqrt(n.Mxx ** 2 + n.Myy ** 2 - n.Mxx * n.Myy + 3 * n.Mxy ** 2);
        R.set(a, [
          c,
          c,
          c,
          c
        ]);
      }), l.analyzeOutputs.val = {
        pressure: j,
        bendingXX: B,
        bendingYY: C,
        bendingXY: O,
        vonMises: R
      };
      const X = [];
      X.push(...te(L, P, s.h_col, s.col_size)), l.objects3D.val = X;
    },
    computedLabels(s, l) {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
      const d = l.analyzeOutputs.val.pressure;
      let o = -1 / 0, i = 1 / 0;
      if (d) for (const M of d.values()) for (const g of M) {
        const v = Math.abs(g) * oe;
        v > o && (o = v), v < i && (i = v);
      }
      o === -1 / 0 && (o = 0, i = 0);
      const t = se, f = (_b = (_a = t == null ? void 0 : t.safe_api_live) == null ? void 0 : _a.with_self_weight) == null ? void 0 : _b.sigma_max_servicio_tm2, m = (_d = (_c = t == null ? void 0 : t.safe_api_live) == null ? void 0 : _c.with_self_weight) == null ? void 0 : _d.sigma_min_servicio_tm2, y = (_f = (_e2 = t == null ? void 0 : t.safe_api_live) == null ? void 0 : _e2.without_self_weight) == null ? void 0 : _f.sigma_max_servicio_tm2, u = (_g = t == null ? void 0 : t.safe_libro_pag_36) == null ? void 0 : _g.sigma_max_servicio_tm2, p = (_h = t == null ? void 0 : t.manual_libro_pag_19) == null ? void 0 : _h.sigma_max_tm2, w = (_i = t == null ? void 0 : t.manual_libro_pag_19) == null ? void 0 : _i.sigma_min_tm2, x = (M, g) => g === void 0 || g === 0 ? "\u2014" : `${((M - g) / g * 100).toFixed(2)} %`;
      return {
        "\u{1F4CA} \u03C3_max Hekatan (con SW)": `${o.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_max SAFE API (con SW)": f !== void 0 ? `${f.toFixed(3)} t/m\xB2` : "\u2014",
        "\u{1F7E1} \u03C3_max SAFE API (sin SW)": y !== void 0 ? `${y.toFixed(3)} t/m\xB2` : "\u2014",
        "\u{1F4DA} \u03C3_max SAFE (libro p.36)": u !== void 0 ? `${u.toFixed(3)} t/m\xB2` : "\u2014",
        "\u{1F4D8} \u03C3_max manual (libro p.19)": p !== void 0 ? `${p.toFixed(3)} t/m\xB2` : "\u2014",
        "\u0394 Hekatan vs SAFE API": x(o, f),
        "\u0394 Hekatan vs SAFE libro": x(o, u),
        "\u0394 Hekatan vs manual": x(o, p),
        "\u{1F4CA} \u03C3_min Hekatan": `${i.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_min SAFE API (con SW)": m !== void 0 ? `${m.toFixed(3)} t/m\xB2` : "\u2014",
        "\u{1F4D8} \u03C3_min manual (libro p.19)": w !== void 0 ? `${w.toFixed(3)} t/m\xB2` : "\u2014",
        "\u0394 \u03C3_min vs SAFE API": x(i, m),
        "\u0394 \u03C3_min vs manual": x(i, w)
      };
    }
  };
});
export {
  __tla,
  _e as g
};
