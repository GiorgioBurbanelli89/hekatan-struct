import { b as G, c as X, E as Y, L as K } from "./Text-BmY6zyQy.js";
import { p as Z, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
let oe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const q = {
    with_self_weight: {
      sigma_max_servicio_tm2: 12.94,
      sigma_min_servicio_tm2: 8.204
    },
    without_self_weight: {
      sigma_max_servicio_tm2: 11.86
    }
  }, J = {
    sigma_max_tm2: 13.94,
    sigma_min_tm2: 8.28
  }, Q = {
    sigma_max_servicio_tm2: 13.163
  }, U = {
    safe_api_live: q,
    manual_libro_pag_19: J,
    safe_libro_pag_36: Q
  }, S = 9.80665, V = 1 / S;
  function ee(n, m, r, s) {
    const i = new G(s, s, r), o = new X(new Y(i), new K({
      color: 11579568,
      linewidth: 2
    }));
    return o.position.set(n, m, r / 2), [
      o
    ];
  }
  oe = {
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
      "Panel '\u{1F4CA} Calculados' muestra \u03C3_max/\u03C3_min Hekatan vs SAFE libro"
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
        label: "P_D (tonf)",
        unitType: "force"
      },
      M_dead: {
        default: 12,
        min: -40,
        max: 40,
        step: 0.5,
        label: "M_D (tonf\xB7m)",
        unitType: "moment"
      },
      P_live: {
        default: 30,
        min: 0,
        max: 200,
        step: 1,
        label: "P_L (tonf)",
        unitType: "force"
      },
      M_live: {
        default: 5,
        min: -40,
        max: 40,
        step: 0.5,
        label: "M_L (tonf\xB7m)",
        unitType: "moment"
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
    build(n, m) {
      const r = n.B, s = n.B, i = n.h, o = Math.round(n.nx), g = Math.round(n.ny), _ = o + 1, h = g + 1, b = r / o, v = s / g, A = n.P_dead + n.P_live, d = n.M_dead + n.M_live, f = n.ks_tm3 * S, p = 14100 * Math.sqrt(n.fc_kgcm2) * 98.0665, N = 0.2, y = [];
      for (let a = 0; a < h; ++a) for (let t = 0; t < _; ++t) y.push([
        t * b,
        a * v
      ]);
      const x = [];
      for (let a = 0; a < g; ++a) for (let t = 0; t < o; ++t) {
        const e = a * _ + t;
        x.push([
          e,
          e + 1,
          e + _ + 1,
          e + _
        ]);
      }
      const H = 2.4 * S * i, E = [], I = [];
      for (let a = 0; a < h; ++a) for (let t = 0; t < _; ++t) {
        const e = t === 0 || t === _ - 1, l = a === 0 || a === h - 1, c = e && l ? 0.25 : e || l ? 0.5 : 1, k = b * v * c, M = a * _ + t;
        if (E.push({
          node: M,
          dof: 0,
          k: f * k
        }), I.push({
          node: M,
          dof: 0,
          value: -H * k
        }), e && l) {
          const w = 1e-6 * f * b * v;
          E.push({
            node: M,
            dof: 1,
            k: w
          }), E.push({
            node: M,
            dof: 2,
            k: w
          });
        }
      }
      const P = r / 2, L = s / 2, T = ((a, t) => {
        let e = -1, l = 1 / 0;
        for (let c = 0; c < y.length; ++c) {
          const k = y[c][0] - a, M = y[c][1] - t, w = k * k + M * M;
          w < l && (l = w, e = c);
        }
        return e;
      })(P, L), O = [
        {
          node: T,
          dof: 0,
          value: -A
        },
        {
          node: T,
          dof: 2,
          value: d
        },
        ...I
      ], F = Z({
        E: p,
        nu: N,
        thickness: i,
        theoryType: 0,
        bcType: "none",
        nodes: y,
        elements: x,
        bcs: [],
        pointLoads: O,
        springs: E
      }), R = y.map((a) => [
        a[0],
        a[1],
        0
      ]);
      m.nodes.val = R, m.elements.val = x, m.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, m.elementInputs.val = {
        elasticities: new Map(x.map((a, t) => [
          t,
          p
        ])),
        poissonsRatios: new Map(x.map((a, t) => [
          t,
          N
        ])),
        thicknesses: new Map(x.map((a, t) => [
          t,
          i
        ]))
      };
      const z = /* @__PURE__ */ new Map();
      for (const a of F.nodeResults) z.set(a.node, [
        0,
        0,
        a.w,
        a.bx,
        a.by,
        0
      ]);
      m.deformOutputs.val = {
        deformations: z,
        reactions: /* @__PURE__ */ new Map()
      };
      const W = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
      x.forEach((a, t) => {
        W.set(t, a.map((c) => f * F.nodeResults[c].w));
        const e = F.elementResults[t];
        $.set(t, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), j.set(t, [
          e.Myy,
          e.Myy,
          e.Myy,
          e.Myy
        ]), C.set(t, [
          e.Mxy,
          e.Mxy,
          e.Mxy,
          e.Mxy
        ]);
        const l = Math.sqrt(e.Mxx ** 2 + e.Myy ** 2 - e.Mxx * e.Myy + 3 * e.Mxy ** 2);
        D.set(t, [
          l,
          l,
          l,
          l
        ]);
      }), m.analyzeOutputs.val = {
        pressure: W,
        bendingXX: $,
        bendingYY: j,
        bendingXY: C,
        vonMises: D
      };
      const B = [];
      B.push(...ee(P, L, n.h_col, n.col_size)), m.objects3D.val = B;
    },
    computedLabels(n, m) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const r = m.analyzeOutputs.val.pressure;
      let s = -1 / 0, i = 1 / 0;
      if (r) for (const f of r.values()) for (const u of f) {
        const p = Math.abs(u) * V;
        p > s && (s = p), p < i && (i = p);
      }
      s === -1 / 0 && (s = 0, i = 0);
      const o = U, g = (_b = (_a = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _a.with_self_weight) == null ? void 0 : _b.sigma_max_servicio_tm2, _ = (_d = (_c = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _c.with_self_weight) == null ? void 0 : _d.sigma_min_servicio_tm2, h = (_f = (_e = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _e.without_self_weight) == null ? void 0 : _f.sigma_max_servicio_tm2, b = (_g = o == null ? void 0 : o.safe_libro_pag_36) == null ? void 0 : _g.sigma_max_servicio_tm2, v = (_h = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _h.sigma_max_tm2, A = (_i = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _i.sigma_min_tm2, d = (f, u) => u === void 0 || u === 0 ? "\u2014" : `${((f - u) / u * 100).toFixed(2)} %`;
      return {
        "\u{1F4CA} \u03C3_max Hekatan (con SW)": `${s.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_max SAFE API (con SW)": `${g.toFixed(3)} t/m\xB2`,
        "\u{1F7E1} \u03C3_max SAFE API (sin SW)": `${h.toFixed(3)} t/m\xB2`,
        "\u{1F4DA} \u03C3_max SAFE (libro p.36)": `${b.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max manual (libro p.19)": `${v.toFixed(3)} t/m\xB2`,
        "\u0394 Hekatan vs SAFE API": d(s, g),
        "\u0394 Hekatan vs SAFE libro": d(s, b),
        "\u0394 Hekatan vs manual": d(s, v),
        "\u{1F4CA} \u03C3_min Hekatan": `${i.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_min SAFE API (con SW)": `${_.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_min manual (libro p.19)": `${A.toFixed(3)} t/m\xB2`,
        "\u0394 \u03C3_min vs SAFE API": d(i, _),
        "\u0394 \u03C3_min vs manual": d(i, A)
      };
    }
  };
});
export {
  __tla,
  oe as g
};
