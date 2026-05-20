import { b as q, c as J, E as Q, L as U } from "./Text-BmY6zyQy.js";
import { p as V, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
let ce;
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
      sigma_max_servicio_tm2: 12.907,
      sigma_min_servicio_tm2: 8.168
    },
    without_self_weight: {
      sigma_max_servicio_tm2: 11.86
    }
  }, ae = {
    sigma_max_tm2: 13.94,
    sigma_min_tm2: 8.28
  }, te = {
    sigma_max_servicio_tm2: 13.163
  }, ne = {
    safe_api_live: ee,
    manual_libro_pag_19: ae,
    safe_libro_pag_36: te
  }, S = 9.80665, se = 1 / S;
  function oe(n, m, _, s) {
    const o = new q(s, s, _), i = new J(new Q(o), new U({
      color: 11579568,
      linewidth: 2
    }));
    return i.position.set(n, m, _ / 2), [
      i
    ];
  }
  ce = {
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
      "Pressure colormap: distribucion analitica rigida \u03C3 = (P+W)/A \xB1 M\xB7c/I",
      "  \u2192 \u03C3_max \u2248 12.94 t/m\xB2 en un borde, \u03C3_min \u2248 8.20 t/m\xB2 en el opuesto",
      "  Coincide con SAFE (Soil Pressures smoothed) y libro (formula clasica).",
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
      const _ = n.B, s = n.B, o = n.h, i = Math.round(n.nx), g = Math.round(n.ny), c = i + 1, w = g + 1, b = _ / i, y = s / g, A = n.P_dead + n.P_live, u = n.M_dead + n.M_live, v = n.ks_tm3 * S, p = 14100 * Math.sqrt(n.fc_kgcm2) * 98.0665, N = 0.2, x = [];
      for (let a = 0; a < w; ++a) for (let t = 0; t < c; ++t) x.push([
        t * b,
        a * y
      ]);
      const M = [];
      for (let a = 0; a < g; ++a) for (let t = 0; t < i; ++t) {
        const e = a * c + t;
        M.push([
          e,
          e + 1,
          e + c + 1,
          e + c
        ]);
      }
      const P = 2.4 * S, R = P * o, E = [], I = [];
      for (let a = 0; a < w; ++a) for (let t = 0; t < c; ++t) {
        const e = t === 0 || t === c - 1, l = a === 0 || a === w - 1, r = e && l ? 0.25 : e || l ? 0.5 : 1, h = b * y * r, d = a * c + t;
        if (E.push({
          node: d,
          dof: 0,
          k: v * h
        }), I.push({
          node: d,
          dof: 0,
          value: -R * h
        }), e && l) {
          const k = 1e-6 * v * b * y;
          E.push({
            node: d,
            dof: 1,
            k
          }), E.push({
            node: d,
            dof: 2,
            k
          });
        }
      }
      const F = _ / 2, L = s / 2, W = ((a, t) => {
        let e = -1, l = 1 / 0;
        for (let r = 0; r < x.length; ++r) {
          const h = x[r][0] - a, d = x[r][1] - t, k = h * h + d * d;
          k < l && (l = k, e = r);
        }
        return e;
      })(F, L), X = [
        {
          node: W,
          dof: 0,
          value: -A
        },
        {
          node: W,
          dof: 1,
          value: u
        },
        ...I
      ], T = V({
        E: p,
        nu: N,
        thickness: o,
        theoryType: 0,
        bcType: "none",
        nodes: x,
        elements: M,
        bcs: [],
        pointLoads: X,
        springs: E
      }), Y = x.map((a) => [
        a[0],
        a[1],
        0
      ]);
      m.nodes.val = Y, m.elements.val = M, m.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, m.elementInputs.val = {
        elasticities: new Map(M.map((a, t) => [
          t,
          p
        ])),
        poissonsRatios: new Map(M.map((a, t) => [
          t,
          N
        ])),
        thicknesses: new Map(M.map((a, t) => [
          t,
          o
        ]))
      };
      const z = /* @__PURE__ */ new Map();
      for (const a of T.nodeResults) z.set(a.node, [
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
      const $ = _ * s, G = P * o * $, Z = (A + G) / $, K = s * Math.pow(_, 3) / 12, j = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
      M.forEach((a, t) => {
        j.set(t, a.map((r) => {
          const d = x[r][0] - F;
          return Z + u * d / K;
        }));
        const e = T.elementResults[t];
        B.set(t, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), D.set(t, [
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
        H.set(t, [
          l,
          l,
          l,
          l
        ]);
      }), m.analyzeOutputs.val = {
        pressure: j,
        bendingXX: B,
        bendingYY: D,
        bendingXY: C,
        vonMises: H
      };
      const O = [];
      O.push(...oe(F, L, n.h_col, n.col_size)), m.objects3D.val = O;
    },
    computedLabels(n, m) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _ = m.analyzeOutputs.val.pressure;
      let s = -1 / 0, o = 1 / 0;
      if (_) for (const v of _.values()) for (const f of v) {
        const p = Math.abs(f) * se;
        p > s && (s = p), p < o && (o = p);
      }
      s === -1 / 0 && (s = 0, o = 0);
      const i = ne, g = (_b = (_a = i == null ? void 0 : i.safe_api_live) == null ? void 0 : _a.with_self_weight) == null ? void 0 : _b.sigma_max_servicio_tm2, c = (_d = (_c = i == null ? void 0 : i.safe_api_live) == null ? void 0 : _c.with_self_weight) == null ? void 0 : _d.sigma_min_servicio_tm2, w = (_f = (_e = i == null ? void 0 : i.safe_api_live) == null ? void 0 : _e.without_self_weight) == null ? void 0 : _f.sigma_max_servicio_tm2, b = (_g = i == null ? void 0 : i.safe_libro_pag_36) == null ? void 0 : _g.sigma_max_servicio_tm2, y = (_h = i == null ? void 0 : i.manual_libro_pag_19) == null ? void 0 : _h.sigma_max_tm2, A = (_i = i == null ? void 0 : i.manual_libro_pag_19) == null ? void 0 : _i.sigma_min_tm2, u = (v, f) => f === void 0 || f === 0 ? "\u2014" : `${((v - f) / f * 100).toFixed(2)} %`;
      return {
        "\u{1F4CA} \u03C3_max Hekatan (con SW)": `${s.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_max SAFE API (con SW)": `${g.toFixed(3)} t/m\xB2`,
        "\u{1F7E1} \u03C3_max SAFE API (sin SW)": `${w.toFixed(3)} t/m\xB2`,
        "\u{1F4DA} \u03C3_max SAFE (libro p.36)": `${b.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max manual (libro p.19)": `${y.toFixed(3)} t/m\xB2`,
        "\u0394 Hekatan vs SAFE API": u(s, g),
        "\u0394 Hekatan vs SAFE libro": u(s, b),
        "\u0394 Hekatan vs manual": u(s, y),
        "\u{1F4CA} \u03C3_min Hekatan": `${o.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_min SAFE API (con SW)": `${c.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_min manual (libro p.19)": `${A.toFixed(3)} t/m\xB2`,
        "\u0394 \u03C3_min vs SAFE API": u(o, c),
        "\u0394 \u03C3_min vs manual": u(o, A)
      };
    }
  };
});
export {
  __tla,
  ce as g
};
