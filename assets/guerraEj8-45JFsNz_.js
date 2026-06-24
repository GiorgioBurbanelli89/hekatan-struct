import { g as X, h as Y, E as S, L as $ } from "./theme-Cr2LU0HL.js";
import { p as K, __tla as __tla_0 } from "./didacticCpp-BkpWNA4I.js";
let oe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const H = {
    q_adm_tm2: 7,
    R_total_servicio_tonf: 2535
  }, J = {
    sigma_promedio_tm2: 5.85
  }, Q = {
    inputs: H,
    manual_libro: J
  }, x = 9.80665, W = 1 / x;
  function Z(t, a, u, l) {
    const m = new X(l, l, u), c = new Y(new S(m), new $({
      color: 11579568,
      linewidth: 2
    }));
    return c.position.set(t, a, u / 2), [
      c
    ];
  }
  let O;
  O = [
    {
      name: "A1",
      x: 1,
      y: 19.4,
      P: 142
    },
    {
      name: "A2",
      x: 1,
      y: 14.9,
      P: 153
    },
    {
      name: "A3",
      x: 1,
      y: 7.1,
      P: 112
    },
    {
      name: "A4",
      x: 1,
      y: 1.6,
      P: 107
    },
    {
      name: "B1",
      x: 7,
      y: 19.4,
      P: 201
    },
    {
      name: "B2",
      x: 7,
      y: 14.9,
      P: 219
    },
    {
      name: "B3",
      x: 7,
      y: 7.1,
      P: 137
    },
    {
      name: "B4",
      x: 7,
      y: 1.6,
      P: 147
    },
    {
      name: "C1",
      x: 14.5,
      y: 19.4,
      P: 233
    },
    {
      name: "C2",
      x: 14.5,
      y: 14.9,
      P: 253
    },
    {
      name: "C3",
      x: 14.5,
      y: 7.1,
      P: 161
    },
    {
      name: "C4",
      x: 14.5,
      y: 1.6,
      P: 164
    },
    {
      name: "D1",
      x: 21.5,
      y: 19.4,
      P: 161
    },
    {
      name: "D2",
      x: 21.5,
      y: 14.9,
      P: 219
    },
    {
      name: "D3",
      x: 21.5,
      y: 7.1,
      P: 129
    },
    {
      name: "D4",
      x: 21.5,
      y: 1.6,
      P: 129
    }
  ];
  oe = {
    id: "guerra-ej8-losa-cimentacion",
    name: "Ej.8 \xB7 Losa de Cimentaci\xF3n (Raft 23\xD721m, 16 cols)",
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
      "EJ.8 pag.149-170. Losa de cimentaci\xF3n (raft).",
      "L=23m \xD7 B=21m, h=0.80m. Grid 4\xD74 = 16 columnas 60\xD760cm.",
      "f'c=240, q_adm=7 (suelo flojo \u2192 losa grande).",
      "Libro pag.151: \u03C3 uniforme ~5.85 t/m\xB2 (entre 5.45-6.01 por col)."
    ],
    params: {
      L: {
        default: 23,
        min: 15,
        max: 35,
        step: 0.5,
        label: "L total (m)"
      },
      B: {
        default: 21,
        min: 15,
        max: 30,
        step: 0.5,
        label: "B total (m)"
      },
      h: {
        default: 0.8,
        min: 0.5,
        max: 1.5,
        step: 0.05,
        label: "h (m)"
      },
      col_size: {
        default: 0.6,
        min: 0.3,
        max: 1,
        step: 0.05,
        label: "col lado (m)"
      },
      ks_tm3: {
        default: 1500,
        min: 500,
        max: 4e3,
        step: 50,
        label: "ks (tonf/m\xB3)"
      },
      fc_kgcm2: {
        default: 240,
        min: 175,
        max: 600,
        step: 5,
        label: "f'c (kg/cm\xB2)"
      },
      P_scale: {
        default: 1,
        min: 0.1,
        max: 2,
        step: 0.1,
        label: "P scale"
      },
      nx: {
        default: 40,
        min: 20,
        max: 64,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 36,
        min: 16,
        max: 56,
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
    build(t, a) {
      const u = t.L, l = t.B, m = t.h, c = Math.round(t.nx), _ = Math.round(t.ny), i = c + 1, r = _ + 1, h = u / c, g = l / _, k = t.ks_tm3 * x, v = 14100 * Math.sqrt(t.fc_kgcm2) * 98.0665, w = 0.2, p = [];
      for (let e = 0; e < r; ++e) for (let o = 0; o < i; ++o) p.push([
        o * h,
        e * g
      ]);
      const d = [];
      for (let e = 0; e < _; ++e) for (let o = 0; o < c; ++o) {
        const n = e * i + o;
        d.push([
          n,
          n + 1,
          n + i + 1,
          n + i
        ]);
      }
      const D = 2.4 * x * m, y = [], L = [];
      for (let e = 0; e < r; ++e) for (let o = 0; o < i; ++o) {
        const n = o === 0 || o === i - 1, s = e === 0 || e === r - 1, f = n && s ? 0.25 : n || s ? 0.5 : 1, M = h * g * f, b = e * i + o;
        if (y.push({
          node: b,
          dof: 0,
          k: k * M
        }), L.push({
          node: b,
          dof: 0,
          value: -D * M
        }), n && s) {
          const I = 1e-6 * k * h * g;
          y.push({
            node: b,
            dof: 1,
            k: I
          }), y.push({
            node: b,
            dof: 2,
            k: I
          });
        }
      }
      const G = (e, o) => {
        const n = [];
        for (let s = 0; s < p.length; s++) {
          const f = p[s][0], M = p[s][1];
          Math.abs(f - e) <= t.col_size / 2 + 1e-6 && Math.abs(M - o) <= t.col_size / 2 + 1e-6 && n.push(s);
        }
        return n;
      }, R = [];
      for (const e of O) {
        const o = e.P * t.P_scale * x, n = G(e.x, e.y);
        if (n.length === 0) continue;
        const s = o / n.length;
        for (const f of n) R.push({
          node: f,
          dof: 0,
          value: -s
        });
      }
      const q = [
        ...R,
        ...L
      ], P = K({
        E: v,
        nu: w,
        thickness: m,
        theoryType: 0,
        bcType: "none",
        nodes: p,
        elements: d,
        bcs: [],
        pointLoads: q,
        springs: y
      }), N = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
      d.forEach((e, o) => {
        N.set(o, e.map((f) => -Math.abs(k * P.nodeResults[f].w)));
        const n = P.elementResults[o];
        B.set(o, [
          n.Mxx,
          n.Mxx,
          n.Mxx,
          n.Mxx
        ]), C.set(o, [
          n.Myy,
          n.Myy,
          n.Myy,
          n.Myy
        ]), E.set(o, [
          n.Mxy,
          n.Mxy,
          n.Mxy,
          n.Mxy
        ]);
        const s = Math.sqrt(n.Mxx ** 2 + n.Myy ** 2 - n.Mxx * n.Myy + 3 * n.Mxy ** 2);
        z.set(o, [
          s,
          s,
          s,
          s
        ]);
      });
      const F = p.map((e) => [
        e[0],
        e[1],
        0
      ]);
      a.nodes.val = F, a.elements.val = d, a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, a.elementInputs.val = {
        elasticities: new Map(d.map((e, o) => [
          o,
          v
        ])),
        poissonsRatios: new Map(d.map((e, o) => [
          o,
          w
        ])),
        thicknesses: new Map(d.map((e, o) => [
          o,
          m
        ]))
      };
      const A = /* @__PURE__ */ new Map();
      for (const e of P.nodeResults) A.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      a.deformOutputs.val = {
        deformations: A,
        reactions: /* @__PURE__ */ new Map()
      };
      const T = {
        pressure: [
          -12 * x,
          -26 * x
        ]
      };
      a.analyzeOutputs.val = {
        pressure: N,
        bendingXX: B,
        bendingYY: C,
        bendingXY: E,
        vonMises: z,
        colorMapRanges: T
      };
      const j = [];
      for (const e of O) j.push(...Z(e.x, e.y, t.h_col, t.col_size));
      a.objects3D.val = j;
    },
    computedLabels(t, a) {
      var _a, _b, _c;
      const u = a.analyzeOutputs.val.pressure;
      let l = -1 / 0, m = 1 / 0;
      if (u) for (const _ of u.values()) for (const i of _) {
        const r = Math.abs(i) * W;
        r > l && (l = r), r < m && (m = r);
      }
      l === -1 / 0 && (l = 0, m = 0);
      const c = Q;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${l.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${m.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3 promedio libro": `${(_a = c == null ? void 0 : c.manual_libro) == null ? void 0 : _a.sigma_promedio_tm2} t/m\xB2`,
        "\u{1F4D8} q_adm libro": `${(_b = c == null ? void 0 : c.inputs) == null ? void 0 : _b.q_adm_tm2} t/m\xB2`,
        "\u{1F4D8} R_total libro": `${(_c = c == null ? void 0 : c.inputs) == null ? void 0 : _c.R_total_servicio_tonf} t`
      };
    }
  };
});
export {
  __tla,
  oe as g
};
