import { g as K, h as Z, E as q, L as J } from "./theme-Buj43zQ_.js";
import { p as Q, __tla as __tla_0 } from "./didacticCpp-Blq_L2Iw.js";
let me;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const U = {
    with_self_weight: {
      sigma_max_servicio_tm2: 13.264,
      sigma_min_servicio_tm2: 7.305
    },
    without_self_weight: {
      sigma_max_servicio_tm2: 11.86
    }
  }, V = {
    sigma_max_tm2: 13.94,
    sigma_min_tm2: 8.28
  }, ee = {
    sigma_max_servicio_tm2: 13.163
  }, ae = {
    safe_api_live: U,
    manual_libro_pag_19: V,
    safe_libro_pag_36: ee
  }, E = 9.80665, ne = 1 / E;
  function se(s, l, d, t) {
    const i = new K(t, t, d), o = new Z(new q(i), new J({
      color: 11579568,
      linewidth: 2
    }));
    return o.position.set(s, l, d / 2), [
      o
    ];
  }
  me = {
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
      const d = s.B, t = s.B, i = s.h, o = Math.round(s.nx), f = Math.round(s.ny), m = o + 1, y = f + 1, p = d / o, u = t / f, w = (s.P_dead + s.P_live) * E, x = (s.M_dead + s.M_live) * E, M = s.ks_tm3 * E, b = 14100 * Math.sqrt(s.fc_kgcm2) * 98.0665, z = 0.2, c = [];
      for (let e = 0; e < y; ++e) for (let n = 0; n < m; ++n) c.push([
        n * p,
        e * u
      ]);
      const h = [];
      for (let e = 0; e < f; ++e) for (let n = 0; n < o; ++n) {
        const a = e * m + n;
        h.push([
          a,
          a + 1,
          a + m + 1,
          a + m
        ]);
      }
      const X = 2.4 * E * i, F = [], D = [];
      for (let e = 0; e < y; ++e) for (let n = 0; n < m; ++n) {
        const a = n === 0 || n === m - 1, _ = e === 0 || e === y - 1, r = a && _ ? 0.25 : a || _ ? 0.5 : 1, k = p * u * r, v = e * m + n;
        if (F.push({
          node: v,
          dof: 0,
          k: M * k
        }), D.push({
          node: v,
          dof: 0,
          value: -X * k
        }), a && _) {
          const A = 1e-6 * M * p * u;
          F.push({
            node: v,
            dof: 1,
            k: A
          }), F.push({
            node: v,
            dof: 2,
            k: A
          });
        }
      }
      const N = d / 2, L = t / 2;
      ((e, n) => {
        let a = -1, _ = 1 / 0;
        for (let r = 0; r < c.length; ++r) {
          const k = c[r][0] - e, v = c[r][1] - n, A = k * k + v * v;
          A < _ && (_ = A, a = r);
        }
        return a;
      })(N, L);
      const S = [];
      for (let e = 0; e < c.length; e++) {
        const n = c[e][0], a = c[e][1];
        Math.abs(n - N) <= s.col_size / 2 + 1e-6 && Math.abs(a - L) <= s.col_size / 2 + 1e-6 && S.push(e);
      }
      const H = w / S.length, G = x / S.length, P = [];
      for (const e of S) P.push({
        node: e,
        dof: 0,
        value: -H
      }), P.push({
        node: e,
        dof: 1,
        value: G
      });
      const T = [
        ...P,
        ...D
      ], I = Q({
        E: b,
        nu: z,
        thickness: i,
        theoryType: 0,
        bcType: "none",
        nodes: c,
        elements: h,
        bcs: [],
        pointLoads: T,
        springs: F
      }), Y = c.map((e) => [
        e[0],
        e[1],
        0
      ]);
      l.nodes.val = Y, l.elements.val = h, l.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, l.elementInputs.val = {
        elasticities: new Map(h.map((e, n) => [
          n,
          b
        ])),
        poissonsRatios: new Map(h.map((e, n) => [
          n,
          z
        ])),
        thicknesses: new Map(h.map((e, n) => [
          n,
          i
        ]))
      };
      const W = /* @__PURE__ */ new Map();
      for (const e of I.nodeResults) W.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      l.deformOutputs.val = {
        deformations: W,
        reactions: /* @__PURE__ */ new Map()
      };
      const $ = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
      h.forEach((e, n) => {
        $.set(n, e.map((r) => -Math.abs(M * I.nodeResults[r].w)));
        const a = I.elementResults[n];
        j.set(n, [
          a.Mxx,
          a.Mxx,
          a.Mxx,
          a.Mxx
        ]), B.set(n, [
          a.Myy,
          a.Myy,
          a.Myy,
          a.Myy
        ]), C.set(n, [
          a.Mxy,
          a.Mxy,
          a.Mxy,
          a.Mxy
        ]);
        const _ = Math.sqrt(a.Mxx ** 2 + a.Myy ** 2 - a.Mxx * a.Myy + 3 * a.Mxy ** 2);
        O.set(n, [
          _,
          _,
          _,
          _
        ]);
      }), l.analyzeOutputs.val = {
        pressure: $,
        bendingXX: j,
        bendingYY: B,
        bendingXY: C,
        vonMises: O
      };
      const R = [];
      R.push(...se(N, L, s.h_col, s.col_size)), l.objects3D.val = R;
    },
    computedLabels(s, l) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const d = l.analyzeOutputs.val.pressure;
      let t = -1 / 0, i = 1 / 0;
      if (d) for (const M of d.values()) for (const g of M) {
        const b = Math.abs(g) * ne;
        b > t && (t = b), b < i && (i = b);
      }
      t === -1 / 0 && (t = 0, i = 0);
      const o = ae, f = (_b = (_a = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _a.with_self_weight) == null ? void 0 : _b.sigma_max_servicio_tm2, m = (_d = (_c = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _c.with_self_weight) == null ? void 0 : _d.sigma_min_servicio_tm2, y = (_f = (_e = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _e.without_self_weight) == null ? void 0 : _f.sigma_max_servicio_tm2, p = (_g = o == null ? void 0 : o.safe_libro_pag_36) == null ? void 0 : _g.sigma_max_servicio_tm2, u = (_h = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _h.sigma_max_tm2, w = (_i = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _i.sigma_min_tm2, x = (M, g) => g === void 0 || g === 0 ? "\u2014" : `${((M - g) / g * 100).toFixed(2)} %`;
      return {
        "\u{1F4CA} \u03C3_max Hekatan (con SW)": `${t.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_max SAFE API (con SW)": f !== void 0 ? `${f.toFixed(3)} t/m\xB2` : "\u2014",
        "\u{1F7E1} \u03C3_max SAFE API (sin SW)": y !== void 0 ? `${y.toFixed(3)} t/m\xB2` : "\u2014",
        "\u{1F4DA} \u03C3_max SAFE (libro p.36)": p !== void 0 ? `${p.toFixed(3)} t/m\xB2` : "\u2014",
        "\u{1F4D8} \u03C3_max manual (libro p.19)": u !== void 0 ? `${u.toFixed(3)} t/m\xB2` : "\u2014",
        "\u0394 Hekatan vs SAFE API": x(t, f),
        "\u0394 Hekatan vs SAFE libro": x(t, p),
        "\u0394 Hekatan vs manual": x(t, u),
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
  me as g
};
