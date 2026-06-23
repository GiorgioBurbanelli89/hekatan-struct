import { b as K, c as Z, E as q, L as J } from "./theme-BEYHi-uR.js";
import { p as Q, __tla as __tla_0 } from "./didacticCpp-DDG05360.js";
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
  }, A = 9.80665, ne = 1 / A;
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
      const d = s.B, t = s.B, i = s.h, o = Math.round(s.nx), b = Math.round(s.ny), _ = o + 1, y = b + 1, h = d / o, v = t / b, E = (s.P_dead + s.P_live) * A, f = (s.M_dead + s.M_live) * A, p = s.ks_tm3 * A, x = 14100 * Math.sqrt(s.fc_kgcm2) * 98.0665, z = 0.2, c = [];
      for (let e = 0; e < y; ++e) for (let n = 0; n < _; ++n) c.push([
        n * h,
        e * v
      ]);
      const M = [];
      for (let e = 0; e < b; ++e) for (let n = 0; n < o; ++n) {
        const a = e * _ + n;
        M.push([
          a,
          a + 1,
          a + _ + 1,
          a + _
        ]);
      }
      const X = 2.4 * A * i, F = [], D = [];
      for (let e = 0; e < y; ++e) for (let n = 0; n < _; ++n) {
        const a = n === 0 || n === _ - 1, m = e === 0 || e === y - 1, r = a && m ? 0.25 : a || m ? 0.5 : 1, w = h * v * r, g = e * _ + n;
        if (F.push({
          node: g,
          dof: 0,
          k: p * w
        }), D.push({
          node: g,
          dof: 0,
          value: -X * w
        }), a && m) {
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
      const N = d / 2, L = t / 2;
      ((e, n) => {
        let a = -1, m = 1 / 0;
        for (let r = 0; r < c.length; ++r) {
          const w = c[r][0] - e, g = c[r][1] - n, k = w * w + g * g;
          k < m && (m = k, a = r);
        }
        return a;
      })(N, L);
      const S = [];
      for (let e = 0; e < c.length; e++) {
        const n = c[e][0], a = c[e][1];
        Math.abs(n - N) <= s.col_size / 2 + 1e-6 && Math.abs(a - L) <= s.col_size / 2 + 1e-6 && S.push(e);
      }
      const H = E / S.length, G = f / S.length, P = [];
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
        E: x,
        nu: z,
        thickness: i,
        theoryType: 0,
        bcType: "none",
        nodes: c,
        elements: M,
        bcs: [],
        pointLoads: T,
        springs: F
      }), Y = c.map((e) => [
        e[0],
        e[1],
        0
      ]);
      l.nodes.val = Y, l.elements.val = M, l.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, l.elementInputs.val = {
        elasticities: new Map(M.map((e, n) => [
          n,
          x
        ])),
        poissonsRatios: new Map(M.map((e, n) => [
          n,
          z
        ])),
        thicknesses: new Map(M.map((e, n) => [
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
      M.forEach((e, n) => {
        $.set(n, e.map((r) => -Math.abs(p * I.nodeResults[r].w)));
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
        const m = Math.sqrt(a.Mxx ** 2 + a.Myy ** 2 - a.Mxx * a.Myy + 3 * a.Mxy ** 2);
        O.set(n, [
          m,
          m,
          m,
          m
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
      if (d) for (const p of d.values()) for (const u of p) {
        const x = Math.abs(u) * ne;
        x > t && (t = x), x < i && (i = x);
      }
      t === -1 / 0 && (t = 0, i = 0);
      const o = ae, b = (_b = (_a = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _a.with_self_weight) == null ? void 0 : _b.sigma_max_servicio_tm2, _ = (_d = (_c = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _c.with_self_weight) == null ? void 0 : _d.sigma_min_servicio_tm2, y = (_f = (_e = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _e.without_self_weight) == null ? void 0 : _f.sigma_max_servicio_tm2, h = (_g = o == null ? void 0 : o.safe_libro_pag_36) == null ? void 0 : _g.sigma_max_servicio_tm2, v = (_h = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _h.sigma_max_tm2, E = (_i = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _i.sigma_min_tm2, f = (p, u) => u === void 0 || u === 0 ? "\u2014" : `${((p - u) / u * 100).toFixed(2)} %`;
      return {
        "\u{1F4CA} \u03C3_max Hekatan (con SW)": `${t.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_max SAFE API (con SW)": `${b.toFixed(3)} t/m\xB2`,
        "\u{1F7E1} \u03C3_max SAFE API (sin SW)": `${y.toFixed(3)} t/m\xB2`,
        "\u{1F4DA} \u03C3_max SAFE (libro p.36)": `${h.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max manual (libro p.19)": `${v.toFixed(3)} t/m\xB2`,
        "\u0394 Hekatan vs SAFE API": f(t, b),
        "\u0394 Hekatan vs SAFE libro": f(t, h),
        "\u0394 Hekatan vs manual": f(t, v),
        "\u{1F4CA} \u03C3_min Hekatan": `${i.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_min SAFE API (con SW)": `${_.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_min manual (libro p.19)": `${E.toFixed(3)} t/m\xB2`,
        "\u0394 \u03C3_min vs SAFE API": f(i, _),
        "\u0394 \u03C3_min vs manual": f(i, E)
      };
    }
  };
});
export {
  __tla,
  me as g
};
