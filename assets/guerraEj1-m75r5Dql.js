import { b as H, c as X, E as Y, L as $ } from "./Text-BmY6zyQy.js";
import { p as G, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
let ae;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Z = {
    sigma_max_tm2: 13.94,
    sigma_min_tm2: 8.28
  }, q = {
    sigma_max_servicio_tm2: 13.163
  }, J = {
    manual_libro_pag_19: Z,
    safe_libro_pag_36: q
  }, O = 9.80665, K = 1 / O;
  function Q(t, o, d, s) {
    const m = new H(s, s, d), i = new X(new Y(m), new $({
      color: 11579568,
      linewidth: 2
    }));
    return i.position.set(t, o, d / 2), [
      i
    ];
  }
  ae = {
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
    build(t, o) {
      const d = t.B, s = t.B, m = t.h, i = Math.round(t.nx), x = Math.round(t.ny), c = i + 1, M = x + 1, _ = d / i, f = s / x, u = t.P_dead + t.P_live, b = t.M_dead + t.M_live, w = t.ks_tm3 * O, F = 14100 * Math.sqrt(t.fc_kgcm2) * 98.0665, N = 0.2, g = [];
      for (let a = 0; a < M; ++a) for (let n = 0; n < c; ++n) g.push([
        n * _,
        a * f
      ]);
      const p = [];
      for (let a = 0; a < x; ++a) for (let n = 0; n < i; ++n) {
        const e = a * c + n;
        p.push([
          e,
          e + 1,
          e + c + 1,
          e + c
        ]);
      }
      const h = [];
      for (let a = 0; a < M; ++a) for (let n = 0; n < c; ++n) {
        const e = n === 0 || n === c - 1, l = a === 0 || a === M - 1, r = e && l ? 0.25 : e || l ? 0.5 : 1, k = _ * f * r, y = a * c + n;
        if (h.push({
          node: y,
          dof: 0,
          k: w * k
        }), e && l) {
          const v = 1e-6 * w * _ * f;
          h.push({
            node: y,
            dof: 1,
            k: v
          }), h.push({
            node: y,
            dof: 2,
            k: v
          });
        }
      }
      const L = d / 2, S = s / 2, T = ((a, n) => {
        let e = -1, l = 1 / 0;
        for (let r = 0; r < g.length; ++r) {
          const k = g[r][0] - a, y = g[r][1] - n, v = k * k + y * y;
          v < l && (l = v, e = r);
        }
        return e;
      })(L, S), R = [
        {
          node: T,
          dof: 0,
          value: -u
        },
        {
          node: T,
          dof: 2,
          value: b
        }
      ], E = G({
        E: F,
        nu: N,
        thickness: m,
        theoryType: 0,
        bcType: "none",
        nodes: g,
        elements: p,
        bcs: [],
        pointLoads: R,
        springs: h
      }), C = g.map((a) => [
        a[0],
        a[1],
        0
      ]);
      o.nodes.val = C, o.elements.val = p, o.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, o.elementInputs.val = {
        elasticities: new Map(p.map((a, n) => [
          n,
          F
        ])),
        poissonsRatios: new Map(p.map((a, n) => [
          n,
          N
        ])),
        thicknesses: new Map(p.map((a, n) => [
          n,
          m
        ]))
      };
      const z = /* @__PURE__ */ new Map();
      for (const a of E.nodeResults) z.set(a.node, [
        0,
        0,
        a.w,
        a.bx,
        a.by,
        0
      ]);
      o.deformOutputs.val = {
        deformations: z,
        reactions: /* @__PURE__ */ new Map()
      };
      const I = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
      p.forEach((a, n) => {
        I.set(n, a.map((r) => w * E.nodeResults[r].w));
        const e = E.elementResults[n];
        P.set(n, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), j.set(n, [
          e.Myy,
          e.Myy,
          e.Myy,
          e.Myy
        ]), A.set(n, [
          e.Mxy,
          e.Mxy,
          e.Mxy,
          e.Mxy
        ]);
        const l = Math.sqrt(e.Mxx ** 2 + e.Myy ** 2 - e.Mxx * e.Myy + 3 * e.Mxy ** 2);
        D.set(n, [
          l,
          l,
          l,
          l
        ]);
      }), o.analyzeOutputs.val = {
        pressure: I,
        bendingXX: P,
        bendingYY: j,
        bendingXY: A,
        vonMises: D
      };
      const B = [];
      B.push(...Q(L, S, t.h_col, t.col_size)), o.objects3D.val = B;
    },
    computedLabels(t, o) {
      var _a, _b, _c;
      const d = o.analyzeOutputs.val.pressure;
      let s = -1 / 0, m = 1 / 0;
      if (d) for (const f of d.values()) for (const u of f) {
        const b = Math.abs(u) * K;
        b > s && (s = b), b < m && (m = b);
      }
      s === -1 / 0 && (s = 0, m = 0);
      const i = J, x = (_a = i == null ? void 0 : i.safe_libro_pag_36) == null ? void 0 : _a.sigma_max_servicio_tm2, c = (_b = i == null ? void 0 : i.manual_libro_pag_19) == null ? void 0 : _b.sigma_max_tm2, M = (_c = i == null ? void 0 : i.manual_libro_pag_19) == null ? void 0 : _c.sigma_min_tm2, _ = (f, u) => u === void 0 || u === 0 ? "\u2014" : `${((f - u) / u * 100).toFixed(2)} %`;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${s.toFixed(3)} t/m\xB2`,
        "\u{1F4DA} \u03C3_max SAFE (libro p.36)": `${x.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max manual (libro p.19)": `${c.toFixed(3)} t/m\xB2`,
        "\u0394 Hekatan vs SAFE": _(s, x),
        "\u0394 Hekatan vs manual": _(s, c),
        "\u{1F4CA} \u03C3_min Hekatan": `${m.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_min manual (libro p.19)": `${M.toFixed(3)} t/m\xB2`,
        "\u0394 \u03C3_min vs manual": _(m, M)
      };
    }
  };
});
export {
  __tla,
  ae as g
};
