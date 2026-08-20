import { b as q, L as J, E as Q, a as V } from "./theme-Co6w-pfC.js";
import { p as U, __tla as __tla_0 } from "./didacticCpp-Bg32IAmg.js";
import { c as ee } from "./cargaColumnaConsistente-DPcPMAlx.js";
let de;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ae = {
    with_self_weight: {
      sigma_max_servicio_tm2: 13.264,
      sigma_min_servicio_tm2: 7.305
    },
    without_self_weight: {
      sigma_max_servicio_tm2: 11.86
    }
  }, se = {
    sigma_max_tm2: 13.94,
    sigma_min_tm2: 8.28
  }, ne = {
    sigma_max_servicio_tm2: 13.163
  }, te = {
    safe_api_live: ae,
    manual_libro_pag_19: se,
    safe_libro_pag_36: ne
  }, A = 9.80665, oe = 1 / A;
  function ie(n, l, d, t) {
    const i = new q(t, t, d), o = new J(new Q(i), new V({
      color: 11579568,
      linewidth: 2
    }));
    return o.position.set(n, l, d / 2), [
      o
    ];
  }
  de = {
    id: "guerra-ej1-zapata-cuadrada",
    name: "Ej.1 \xB7 Zapata Aislada Cuadrada (3.45\xD73.45\xD70.45)",
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
    build(n, l) {
      const d = n.B, t = n.B, i = n.h, o = Math.round(n.nx), b = Math.round(n.ny), c = o + 1, y = b + 1, h = d / o, v = t / b, E = (n.P_dead + n.P_live) * A, u = (n.M_dead + n.M_live) * A, p = n.ks_tm3 * A, M = 14100 * Math.sqrt(n.fc_kgcm2) * 98.0665, C = 0.2, _ = [];
      for (let e = 0; e < y; ++e) for (let a = 0; a < c; ++a) _.push([
        a * h,
        e * v
      ]);
      const f = [];
      for (let e = 0; e < b; ++e) for (let a = 0; a < o; ++a) {
        const s = e * c + a;
        f.push([
          s,
          s + 1,
          s + c + 1,
          s + c
        ]);
      }
      const H = 2.4 * A * i, F = [], D = [];
      for (let e = 0; e < y; ++e) for (let a = 0; a < c; ++a) {
        const s = a === 0 || a === c - 1, m = e === 0 || e === y - 1, r = s && m ? 0.25 : s || m ? 0.5 : 1, w = h * v * r, g = e * c + a;
        if (F.push({
          node: g,
          dof: 0,
          k: p * w
        }), D.push({
          node: g,
          dof: 0,
          value: -H * w
        }), s && m) {
          const k = 1e-6 * p * h * v;
          F.push({
            node: g,
            dof: 1,
            k
          }), F.push({
            node: g,
            dof: 2,
            k
          });
        }
      }
      const S = d / 2, N = t / 2;
      ((e, a) => {
        let s = -1, m = 1 / 0;
        for (let r = 0; r < _.length; ++r) {
          const w = _[r][0] - e, g = _[r][1] - a, k = w * w + g * g;
          k < m && (m = k, s = r);
        }
        return s;
      })(S, N);
      const L = [];
      for (let e = 0; e < _.length; e++) {
        const a = _[e][0], s = _[e][1];
        Math.abs(a - S) <= n.col_size / 2 + 1e-6 && Math.abs(s - N) <= n.col_size / 2 + 1e-6 && L.push(e);
      }
      const T = ee(_, f, E, S, N, n.col_size, n.col_size), Y = u / L.length, P = [
        ...T.pointLoads
      ];
      for (const e of L) P.push({
        node: e,
        dof: 1,
        value: Y
      });
      const G = [
        ...P,
        ...D
      ], I = U({
        E: M,
        nu: C,
        thickness: i,
        theoryType: 0,
        bcType: "none",
        nodes: _,
        elements: f,
        bcs: [],
        pointLoads: G,
        springs: F
      }), K = _.map((e) => [
        e[0],
        e[1],
        0
      ]);
      l.nodes.val = K, l.elements.val = f;
      const z = /* @__PURE__ */ new Map(), Z = [
        2,
        3,
        4
      ];
      for (const e of P) {
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
        elasticities: new Map(f.map((e, a) => [
          a,
          M
        ])),
        poissonsRatios: new Map(f.map((e, a) => [
          a,
          C
        ])),
        thicknesses: new Map(f.map((e, a) => [
          a,
          i
        ]))
      };
      const W = /* @__PURE__ */ new Map();
      I.nodeResults.forEach((e, a) => W.set(a, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ])), l.deformOutputs.val = {
        deformations: W,
        reactions: /* @__PURE__ */ new Map()
      };
      const $ = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
      f.forEach((e, a) => {
        $.set(a, e.map((r) => -Math.abs(p * I.nodeResults[r].w)));
        const s = I.elementResults[a];
        j.set(a, [
          s.Mxx,
          s.Mxx,
          s.Mxx,
          s.Mxx
        ]), B.set(a, [
          s.Myy,
          s.Myy,
          s.Myy,
          s.Myy
        ]), O.set(a, [
          s.Mxy,
          s.Mxy,
          s.Mxy,
          s.Mxy
        ]);
        const m = Math.sqrt(s.Mxx ** 2 + s.Myy ** 2 - s.Mxx * s.Myy + 3 * s.Mxy ** 2);
        R.set(a, [
          m,
          m,
          m,
          m
        ]);
      }), l.analyzeOutputs.val = {
        pressure: $,
        bendingXX: j,
        bendingYY: B,
        bendingXY: O,
        vonMises: R
      };
      const X = [];
      X.push(...ie(S, N, n.h_col, n.col_size)), l.objects3D.val = X;
    },
    computedLabels(n, l) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const d = l.analyzeOutputs.val.pressure;
      let t = -1 / 0, i = 1 / 0;
      if (d) for (const p of d.values()) for (const x of p) {
        const M = Math.abs(x) * oe;
        M > t && (t = M), M < i && (i = M);
      }
      t === -1 / 0 && (t = 0, i = 0);
      const o = te, b = (_b = (_a = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _a.with_self_weight) == null ? void 0 : _b.sigma_max_servicio_tm2, c = (_d = (_c = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _c.with_self_weight) == null ? void 0 : _d.sigma_min_servicio_tm2, y = (_f = (_e = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _e.without_self_weight) == null ? void 0 : _f.sigma_max_servicio_tm2, h = (_g = o == null ? void 0 : o.safe_libro_pag_36) == null ? void 0 : _g.sigma_max_servicio_tm2, v = (_h = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _h.sigma_max_tm2, E = (_i = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _i.sigma_min_tm2, u = (p, x) => x === void 0 || x === 0 ? "\u2014" : `${((p - x) / x * 100).toFixed(2)} %`;
      return {
        "\u{1F4CA} \u03C3_max Hekatan (con SW)": `${t.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_max SAFE API (con SW)": `${b.toFixed(3)} t/m\xB2`,
        "\u{1F7E1} \u03C3_max SAFE API (sin SW)": `${y.toFixed(3)} t/m\xB2`,
        "\u{1F4DA} \u03C3_max SAFE (libro p.36)": `${h.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max manual (libro p.19)": `${v.toFixed(3)} t/m\xB2`,
        "\u0394 Hekatan vs SAFE API": u(t, b),
        "\u0394 Hekatan vs SAFE libro": u(t, h),
        "\u0394 Hekatan vs manual": u(t, v),
        "\u{1F4CA} \u03C3_min Hekatan": `${i.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_min SAFE API (con SW)": `${c.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_min manual (libro p.19)": `${E.toFixed(3)} t/m\xB2`,
        "\u0394 \u03C3_min vs SAFE API": u(i, c),
        "\u0394 \u03C3_min vs manual": u(i, E)
      };
    }
  };
});
export {
  __tla,
  de as g
};
