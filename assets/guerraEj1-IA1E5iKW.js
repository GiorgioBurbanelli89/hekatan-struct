import { b as Z, c as q, E as J, L as Q } from "./theme-D5p5K0bJ.js";
import { p as U, __tla as __tla_0 } from "./didacticCpp-C2di29sC.js";
let _e;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const V = {
    with_self_weight: {
      sigma_max_servicio_tm2: 13.264,
      sigma_min_servicio_tm2: 7.305
    },
    without_self_weight: {
      sigma_max_servicio_tm2: 11.86
    }
  }, ee = {
    sigma_max_tm2: 13.94,
    sigma_min_tm2: 8.28
  }, ae = {
    sigma_max_servicio_tm2: 13.163
  }, ne = {
    safe_api_live: V,
    manual_libro_pag_19: ee,
    safe_libro_pag_36: ae
  }, b = 9.80665, se = 1 / b;
  function te(s, l, d, t) {
    const i = new Z(t, t, d), o = new q(new J(i), new Q({
      color: 11579568,
      linewidth: 2
    }));
    return o.position.set(s, l, d / 2), [
      o
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
      const d = s.B, t = s.B, i = s.h, o = Math.round(s.nx), h = Math.round(s.ny), _ = o + 1, w = h + 1, v = d / o, y = t / h, E = (s.P_dead + s.P_live) * b, f = (s.M_dead + s.M_live) * b, p = s.ks_tm3 * b, x = 14100 * Math.sqrt(s.fc_kgcm2) * 98.0665, z = 0.2, c = [];
      for (let e = 0; e < w; ++e) for (let n = 0; n < _; ++n) c.push([
        n * v,
        e * y
      ]);
      const M = [];
      for (let e = 0; e < h; ++e) for (let n = 0; n < o; ++n) {
        const a = e * _ + n;
        M.push([
          a,
          a + 1,
          a + _ + 1,
          a + _
        ]);
      }
      const X = 2.4 * b * i, F = [], D = [];
      for (let e = 0; e < w; ++e) for (let n = 0; n < _; ++n) {
        const a = n === 0 || n === _ - 1, m = e === 0 || e === w - 1, r = a && m ? 0.25 : a || m ? 0.5 : 1, k = v * y * r, g = e * _ + n;
        if (F.push({
          node: g,
          dof: 0,
          k: p * k
        }), D.push({
          node: g,
          dof: 0,
          value: -X * k
        }), a && m) {
          const A = 1e-6 * p * v * y;
          F.push({
            node: g,
            dof: 1,
            k: A
          }), F.push({
            node: g,
            dof: 2,
            k: A
          });
        }
      }
      const N = d / 2, L = t / 2;
      ((e, n) => {
        let a = -1, m = 1 / 0;
        for (let r = 0; r < c.length; ++r) {
          const k = c[r][0] - e, g = c[r][1] - n, A = k * k + g * g;
          A < m && (m = A, a = r);
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
      ], I = U({
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
      const R = /* @__PURE__ */ new Map();
      for (const e of I.nodeResults) R.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      l.deformOutputs.val = {
        deformations: R,
        reactions: /* @__PURE__ */ new Map()
      };
      const W = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
      M.forEach((e, n) => {
        W.set(n, e.map((r) => -Math.abs(p * I.nodeResults[r].w)));
        const a = I.elementResults[n];
        $.set(n, [
          a.Mxx,
          a.Mxx,
          a.Mxx,
          a.Mxx
        ]), j.set(n, [
          a.Myy,
          a.Myy,
          a.Myy,
          a.Myy
        ]), B.set(n, [
          a.Mxy,
          a.Mxy,
          a.Mxy,
          a.Mxy
        ]);
        const m = Math.sqrt(a.Mxx ** 2 + a.Myy ** 2 - a.Mxx * a.Myy + 3 * a.Mxy ** 2);
        C.set(n, [
          m,
          m,
          m,
          m
        ]);
      });
      const K = {
        pressure: [
          -12 * b,
          -26 * b
        ]
      };
      l.analyzeOutputs.val = {
        pressure: W,
        bendingXX: $,
        bendingYY: j,
        bendingXY: B,
        vonMises: C,
        colorMapRanges: K
      };
      const O = [];
      O.push(...te(N, L, s.h_col, s.col_size)), l.objects3D.val = O;
    },
    computedLabels(s, l) {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
      const d = l.analyzeOutputs.val.pressure;
      let t = -1 / 0, i = 1 / 0;
      if (d) for (const p of d.values()) for (const u of p) {
        const x = Math.abs(u) * se;
        x > t && (t = x), x < i && (i = x);
      }
      t === -1 / 0 && (t = 0, i = 0);
      const o = ne, h = (_b = (_a = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _a.with_self_weight) == null ? void 0 : _b.sigma_max_servicio_tm2, _ = (_d = (_c = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _c.with_self_weight) == null ? void 0 : _d.sigma_min_servicio_tm2, w = (_f = (_e2 = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _e2.without_self_weight) == null ? void 0 : _f.sigma_max_servicio_tm2, v = (_g = o == null ? void 0 : o.safe_libro_pag_36) == null ? void 0 : _g.sigma_max_servicio_tm2, y = (_h = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _h.sigma_max_tm2, E = (_i = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _i.sigma_min_tm2, f = (p, u) => u === void 0 || u === 0 ? "\u2014" : `${((p - u) / u * 100).toFixed(2)} %`;
      return {
        "\u{1F4CA} \u03C3_max Hekatan (con SW)": `${t.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_max SAFE API (con SW)": `${h.toFixed(3)} t/m\xB2`,
        "\u{1F7E1} \u03C3_max SAFE API (sin SW)": `${w.toFixed(3)} t/m\xB2`,
        "\u{1F4DA} \u03C3_max SAFE (libro p.36)": `${v.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max manual (libro p.19)": `${y.toFixed(3)} t/m\xB2`,
        "\u0394 Hekatan vs SAFE API": f(t, h),
        "\u0394 Hekatan vs SAFE libro": f(t, v),
        "\u0394 Hekatan vs manual": f(t, y),
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
  _e as g
};
