import { b as C, c as X, E as Y, L as G } from "./Text-BmY6zyQy.js";
import { p as Z, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
let ne;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const q = {
    sigma_max_servicio_tm2: 12.94,
    sigma_min_servicio_tm2: 8.204
  }, J = {
    sigma_max_tm2: 13.94,
    sigma_min_tm2: 8.28
  }, K = {
    sigma_max_servicio_tm2: 13.163
  }, Q = {
    safe_api_live: q,
    manual_libro_pag_19: J,
    safe_libro_pag_36: K
  }, H = 9.80665, W = 1 / H;
  function U(t, i, d, s) {
    const m = new C(s, s, d), o = new X(new Y(m), new G({
      color: 11579568,
      linewidth: 2
    }));
    return o.position.set(t, i, d / 2), [
      o
    ];
  }
  ne = {
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
    build(t, i) {
      const d = t.B, s = t.B, m = t.h, o = Math.round(t.nx), p = Math.round(t.ny), c = o + 1, x = p + 1, M = d / o, b = s / p, u = t.P_dead + t.P_live, y = t.M_dead + t.M_live, _ = t.ks_tm3 * H, A = 14100 * Math.sqrt(t.fc_kgcm2) * 98.0665, S = 0.2, g = [];
      for (let a = 0; a < x; ++a) for (let n = 0; n < c; ++n) g.push([
        n * M,
        a * b
      ]);
      const f = [];
      for (let a = 0; a < p; ++a) for (let n = 0; n < o; ++n) {
        const e = a * c + n;
        f.push([
          e,
          e + 1,
          e + c + 1,
          e + c
        ]);
      }
      const E = [];
      for (let a = 0; a < x; ++a) for (let n = 0; n < c; ++n) {
        const e = n === 0 || n === c - 1, l = a === 0 || a === x - 1, r = e && l ? 0.25 : e || l ? 0.5 : 1, F = M * b * r, v = a * c + n;
        if (E.push({
          node: v,
          dof: 0,
          k: _ * F
        }), e && l) {
          const k = 1e-6 * _ * M * b;
          E.push({
            node: v,
            dof: 1,
            k
          }), E.push({
            node: v,
            dof: 2,
            k
          });
        }
      }
      const N = d / 2, I = s / 2, P = ((a, n) => {
        let e = -1, l = 1 / 0;
        for (let r = 0; r < g.length; ++r) {
          const F = g[r][0] - a, v = g[r][1] - n, k = F * F + v * v;
          k < l && (l = k, e = r);
        }
        return e;
      })(N, I), O = [
        {
          node: P,
          dof: 0,
          value: -u
        },
        {
          node: P,
          dof: 2,
          value: y
        }
      ], w = Z({
        E: A,
        nu: S,
        thickness: m,
        theoryType: 0,
        bcType: "none",
        nodes: g,
        elements: f,
        bcs: [],
        pointLoads: O,
        springs: E
      }), R = g.map((a) => [
        a[0],
        a[1],
        0
      ]);
      i.nodes.val = R, i.elements.val = f, i.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, i.elementInputs.val = {
        elasticities: new Map(f.map((a, n) => [
          n,
          A
        ])),
        poissonsRatios: new Map(f.map((a, n) => [
          n,
          S
        ])),
        thicknesses: new Map(f.map((a, n) => [
          n,
          m
        ]))
      };
      const L = /* @__PURE__ */ new Map();
      for (const a of w.nodeResults) L.set(a.node, [
        0,
        0,
        a.w,
        a.bx,
        a.by,
        0
      ]);
      i.deformOutputs.val = {
        deformations: L,
        reactions: /* @__PURE__ */ new Map()
      };
      const T = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
      f.forEach((a, n) => {
        T.set(n, a.map((r) => _ * w.nodeResults[r].w));
        const e = w.elementResults[n];
        z.set(n, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), j.set(n, [
          e.Myy,
          e.Myy,
          e.Myy,
          e.Myy
        ]), D.set(n, [
          e.Mxy,
          e.Mxy,
          e.Mxy,
          e.Mxy
        ]);
        const l = Math.sqrt(e.Mxx ** 2 + e.Myy ** 2 - e.Mxx * e.Myy + 3 * e.Mxy ** 2);
        $.set(n, [
          l,
          l,
          l,
          l
        ]);
      }), i.analyzeOutputs.val = {
        pressure: T,
        bendingXX: z,
        bendingYY: j,
        bendingXY: D,
        vonMises: $
      };
      const B = [];
      B.push(...U(N, I, t.h_col, t.col_size)), i.objects3D.val = B;
    },
    computedLabels(t, i) {
      var _a, _b, _c, _d, _e;
      const d = i.analyzeOutputs.val.pressure;
      let s = -1 / 0, m = 1 / 0;
      if (d) for (const y of d.values()) for (const _ of y) {
        const h = Math.abs(_) * W;
        h > s && (s = h), h < m && (m = h);
      }
      s === -1 / 0 && (s = 0, m = 0);
      const o = Q, p = (_a = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _a.sigma_max_servicio_tm2, c = (_b = o == null ? void 0 : o.safe_api_live) == null ? void 0 : _b.sigma_min_servicio_tm2, x = (_c = o == null ? void 0 : o.safe_libro_pag_36) == null ? void 0 : _c.sigma_max_servicio_tm2, M = (_d = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _d.sigma_max_tm2, b = (_e = o == null ? void 0 : o.manual_libro_pag_19) == null ? void 0 : _e.sigma_min_tm2, u = (y, _) => _ === void 0 || _ === 0 ? "\u2014" : `${((y - _) / _ * 100).toFixed(2)} %`;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${s.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_max SAFE API (live)": `${p.toFixed(3)} t/m\xB2`,
        "\u{1F4DA} \u03C3_max SAFE (libro p.36)": `${x.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max manual (libro p.19)": `${M.toFixed(3)} t/m\xB2`,
        "\u0394 Hekatan vs SAFE API": u(s, p),
        "\u0394 Hekatan vs SAFE libro": u(s, x),
        "\u0394 Hekatan vs manual": u(s, M),
        "\u{1F4CA} \u03C3_min Hekatan": `${m.toFixed(3)} t/m\xB2`,
        "\u{1F7E2} \u03C3_min SAFE API (live)": `${c.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_min manual (libro p.19)": `${b.toFixed(3)} t/m\xB2`,
        "\u0394 \u03C3_min vs SAFE API": u(m, c),
        "\u0394 \u03C3_min vs manual": u(m, b)
      };
    }
  };
});
export {
  __tla,
  ne as g
};
