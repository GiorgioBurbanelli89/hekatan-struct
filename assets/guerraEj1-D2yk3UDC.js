import { b as G, c as T, E as Y, L as K } from "./Text-BmY6zyQy.js";
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
      sigma_max_servicio_tm2: 12.907,
      sigma_min_servicio_tm2: 8.168
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
  }, A = 9.80665, V = 1 / A;
  function ee(t, m, r, s) {
    const i = new G(s, s, r), o = new T(new Y(i), new K({
      color: 11579568,
      linewidth: 2
    }));
    return o.position.set(t, m, r / 2), [
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
    build(t, m) {
      const r = t.B, s = t.B, i = t.h, o = Math.round(t.nx), g = Math.round(t.ny), _ = o + 1, h = g + 1, b = r / o, v = s / g, E = (t.P_dead + t.P_live) * A, d = (t.M_dead + t.M_live) * A, f = t.ks_tm3 * A, u = 14100 * Math.sqrt(t.fc_kgcm2) * 98.0665, N = 0.2, y = [];
      for (let a = 0; a < h; ++a) for (let n = 0; n < _; ++n) y.push([
        n * b,
        a * v
      ]);
      const x = [];
      for (let a = 0; a < g; ++a) for (let n = 0; n < o; ++n) {
        const e = a * _ + n;
        x.push([
          e,
          e + 1,
          e + _ + 1,
          e + _
        ]);
      }
      const R = 2.4 * A * i, F = [], I = [];
      for (let a = 0; a < h; ++a) for (let n = 0; n < _; ++n) {
        const e = n === 0 || n === _ - 1, l = a === 0 || a === h - 1, c = e && l ? 0.25 : e || l ? 0.5 : 1, w = b * v * c, M = a * _ + n;
        if (F.push({
          node: M,
          dof: 0,
          k: f * w
        }), I.push({
          node: M,
          dof: 0,
          value: -R * w
        }), e && l) {
          const k = 1e-6 * f * b * v;
          F.push({
            node: M,
            dof: 1,
            k
          }), F.push({
            node: M,
            dof: 2,
            k
          });
        }
      }
      const L = r / 2, P = s / 2, z = ((a, n) => {
        let e = -1, l = 1 / 0;
        for (let c = 0; c < y.length; ++c) {
          const w = y[c][0] - a, M = y[c][1] - n, k = w * w + M * M;
          k < l && (l = k, e = c);
        }
        return e;
      })(L, P), X = [
        {
          node: z,
          dof: 0,
          value: -E
        },
        {
          node: z,
          dof: 1,
          value: d
        },
        ...I
      ], S = Z({
        E: u,
        nu: N,
        thickness: i,
        theoryType: 0,
        bcType: "none",
        nodes: y,
        elements: x,
        bcs: [],
        pointLoads: X,
        springs: F
      }), H = y.map((a) => [
        a[0],
        a[1],
        0
      ]);
      m.nodes.val = H, m.elements.val = x, m.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, m.elementInputs.val = {
        elasticities: new Map(x.map((a, n) => [
          n,
          u
        ])),
        poissonsRatios: new Map(x.map((a, n) => [
          n,
          N
        ])),
        thicknesses: new Map(x.map((a, n) => [
          n,
          i
        ]))
      };
      const D = /* @__PURE__ */ new Map();
      for (const a of S.nodeResults) D.set(a.node, [
        0,
        0,
        a.w,
        a.bx,
        a.by,
        0
      ]);
      m.deformOutputs.val = {
        deformations: D,
        reactions: /* @__PURE__ */ new Map()
      };
      const W = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
      x.forEach((a, n) => {
        W.set(n, a.map((c) => -Math.abs(f * S.nodeResults[c].w)));
        const e = S.elementResults[n];
        $.set(n, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), j.set(n, [
          e.Myy,
          e.Myy,
          e.Myy,
          e.Myy
        ]), B.set(n, [
          e.Mxy,
          e.Mxy,
          e.Mxy,
          e.Mxy
        ]);
        const l = Math.sqrt(e.Mxx ** 2 + e.Myy ** 2 - e.Mxx * e.Myy + 3 * e.Mxy ** 2);
        C.set(n, [
          l,
          l,
          l,
          l
        ]);
      }), m.analyzeOutputs.val = {
        pressure: W,
        bendingXX: $,
        bendingYY: j,
        bendingXY: B,
        vonMises: C
      };
      const O = [];
      O.push(...ee(L, P, t.h_col, t.col_size)), m.objects3D.val = O;
    },
    computedLabels(t, m) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const r = m.analyzeOutputs.val.pressure;
      let s = -1 / 0, i = 1 / 0;
      if (r) for (const f of r.values()) for (const p of f) {
        const u = Math.abs(p) * V;
        u > s && (s = u), u < i && (i = u);
      }
      s === -1 / 0 && (s = 0, i = 0);
      const o = U, g = (_b = (_a = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _a.with_self_weight) == null ? void 0 : _b.sigma_max_servicio_tm2, _ = (_d = (_c = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _c.with_self_weight) == null ? void 0 : _d.sigma_min_servicio_tm2, h = (_f = (_e = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _e.without_self_weight) == null ? void 0 : _f.sigma_max_servicio_tm2, b = (_g = o == null ? void 0 : o.safe_libro_pag_36) == null ? void 0 : _g.sigma_max_servicio_tm2, v = (_h = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _h.sigma_max_tm2, E = (_i = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _i.sigma_min_tm2, d = (f, p) => p === void 0 || p === 0 ? "\u2014" : `${((f - p) / p * 100).toFixed(2)} %`;
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
        "\u{1F4D8} \u03C3_min manual (libro p.19)": `${E.toFixed(3)} t/m\xB2`,
        "\u0394 \u03C3_min vs SAFE API": d(i, _),
        "\u0394 \u03C3_min vs manual": d(i, E)
      };
    }
  };
});
export {
  __tla,
  oe as g
};
