import { g as U, h as Q, E as W, L as V } from "./theme-BUyDDEHW.js";
import { p as ee, __tla as __tla_0 } from "./didacticCpp-C2di29sC.js";
let re;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ne = {
    e_DL_m: 1.289,
    e_DLS_m: 1.331,
    L_sobre_6_m: 0.767
  }, oe = {
    manual_libro: ne
  }, f = 9.80665, se = 1 / f;
  function te(s, t, r, a, l) {
    const m = new U(a, l, r), i = new Q(new W(m), new V({
      color: 11579568,
      linewidth: 2
    }));
    return i.position.set(s, t, r / 2), [
      i
    ];
  }
  re = {
    id: "guerra-ej3-zapata-rectangular-eccentricidad-grande",
    name: "Ej.3 \xB7 Zapata Rectangular EXCENTRICIDAD GRANDE (4.60\xD74.00\xD70.55)",
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
      "EJ.3 Guerra MDI - pag. 69-72. Excentricidad MUY GRANDE.",
      "Mismas dim Ej.2 (L=4.60, B=4.00) pero M_live=96t\xB7m (vs 36 en Ej.2).",
      "q_adm=20 t/m\xB2 (suelo mejor para soportar la mayor demanda).",
      "e_DL=1.289 m >> L/6=0.767 m \u2192 zona de despegue grande.",
      "El libro pag.69 muestra que aunque e es enorme, \u03C3_max sigue cumpliendo."
    ],
    params: {
      L: {
        default: 4.6,
        min: 3.5,
        max: 6,
        step: 0.05,
        label: "L (m)"
      },
      B: {
        default: 4,
        min: 3,
        max: 5.5,
        step: 0.05,
        label: "B (m)"
      },
      h: {
        default: 0.55,
        min: 0.4,
        max: 0.9,
        step: 0.05,
        label: "h espesor (m)"
      },
      col_x: {
        default: 1.2,
        min: 0.4,
        max: 2,
        step: 0.05,
        label: "col Lx (m)"
      },
      col_y: {
        default: 0.6,
        min: 0.3,
        max: 1.5,
        step: 0.05,
        label: "col Ly (m)"
      },
      ks_tm3: {
        default: 4400,
        min: 500,
        max: 12e3,
        step: 100,
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
        default: 60,
        min: 0,
        max: 200,
        step: 1,
        label: "M_D (tonf\xB7m)"
      },
      P_live: {
        default: 30,
        min: 0,
        max: 150,
        step: 1,
        label: "P_L (tonf)"
      },
      M_live: {
        default: 96,
        min: 0,
        max: 200,
        step: 1,
        label: "M_L (tonf\xB7m)"
      },
      P_sismo: {
        default: 3,
        min: 0,
        max: 100,
        step: 0.5,
        label: "P_S (tonf)"
      },
      M_sismo: {
        default: 9,
        min: 0,
        max: 80,
        step: 0.5,
        label: "M_S (tonf\xB7m)"
      },
      combo: {
        default: 1,
        min: 0,
        max: 1,
        step: 1,
        label: "combo (0=DL, 1=DLS)"
      },
      fc_kgcm2: {
        default: 280,
        min: 175,
        max: 600,
        step: 5,
        label: "f'c (kg/cm\xB2)"
      },
      nx: {
        default: 18,
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
    build(s, t) {
      const r = s.L, a = s.B, l = s.h, m = Math.round(s.nx), i = Math.round(s.ny), c = m + 1, d = i + 1, y = r / m, h = a / i, X = Math.round(s.combo);
      let g, L;
      X === 1 ? (g = s.P_dead + s.P_live + s.P_sismo, L = s.M_dead + s.M_live + s.M_sismo) : (g = s.P_dead + s.P_live, L = s.M_dead + s.M_live);
      const Y = g * f, q = L * f, v = s.ks_tm3 * f, D = 14100 * Math.sqrt(s.fc_kgcm2) * 98.0665, N = 0.2, M = [];
      for (let e = 0; e < d; ++e) for (let n = 0; n < c; ++n) M.push([
        n * y,
        e * h
      ]);
      const u = [];
      for (let e = 0; e < i; ++e) for (let n = 0; n < m; ++n) {
        const o = e * c + n;
        u.push([
          o,
          o + 1,
          o + c + 1,
          o + c
        ]);
      }
      const C = 2.4 * f * l, p = [], P = [];
      for (let e = 0; e < d; ++e) for (let n = 0; n < c; ++n) {
        const o = n === 0 || n === c - 1, _ = e === 0 || e === d - 1, w = o && _ ? 0.25 : o || _ ? 0.5 : 1, O = y * h * w, b = e * c + n;
        if (p.push({
          node: b,
          dof: 0,
          k: v * O
        }), P.push({
          node: b,
          dof: 0,
          value: -C * O
        }), o && _) {
          const T = 1e-6 * v * y * h;
          p.push({
            node: b,
            dof: 1,
            k: T
          }), p.push({
            node: b,
            dof: 2,
            k: T
          });
        }
      }
      const R = r / 2, S = a / 2, x = [];
      for (let e = 0; e < M.length; e++) {
        const n = M[e][0], o = M[e][1];
        Math.abs(n - R) <= s.col_x / 2 + 1e-6 && Math.abs(o - S) <= s.col_y / 2 + 1e-6 && x.push(e);
      }
      const $ = Y / x.length, K = q / x.length, E = [];
      for (const e of x) E.push({
        node: e,
        dof: 0,
        value: -$
      }), E.push({
        node: e,
        dof: 1,
        value: K
      });
      const H = [
        ...E,
        ...P
      ], k = ee({
        E: D,
        nu: N,
        thickness: l,
        theoryType: 0,
        bcType: "none",
        nodes: M,
        elements: u,
        bcs: [],
        pointLoads: H,
        springs: p
      }), j = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
      u.forEach((e, n) => {
        j.set(n, e.map((w) => -Math.abs(v * k.nodeResults[w].w)));
        const o = k.elementResults[n];
        A.set(n, [
          o.Mxx,
          o.Mxx,
          o.Mxx,
          o.Mxx
        ]), G.set(n, [
          o.Myy,
          o.Myy,
          o.Myy,
          o.Myy
        ]), I.set(n, [
          o.Mxy,
          o.Mxy,
          o.Mxy,
          o.Mxy
        ]);
        const _ = Math.sqrt(o.Mxx ** 2 + o.Myy ** 2 - o.Mxx * o.Myy + 3 * o.Mxy ** 2);
        F.set(n, [
          _,
          _,
          _,
          _
        ]);
      });
      const Z = M.map((e) => [
        e[0],
        e[1],
        0
      ]);
      t.nodes.val = Z, t.elements.val = u, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, t.elementInputs.val = {
        elasticities: new Map(u.map((e, n) => [
          n,
          D
        ])),
        poissonsRatios: new Map(u.map((e, n) => [
          n,
          N
        ])),
        thicknesses: new Map(u.map((e, n) => [
          n,
          l
        ]))
      };
      const z = /* @__PURE__ */ new Map();
      for (const e of k.nodeResults) z.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      t.deformOutputs.val = {
        deformations: z,
        reactions: /* @__PURE__ */ new Map()
      };
      const J = {
        pressure: [
          -12 * f,
          -26 * f
        ]
      };
      t.analyzeOutputs.val = {
        pressure: j,
        bendingXX: A,
        bendingYY: G,
        bendingXY: I,
        vonMises: F,
        colorMapRanges: J
      };
      const B = [];
      B.push(...te(R, S, s.h_col, s.col_x, s.col_y)), t.objects3D.val = B;
    },
    computedLabels(s, t) {
      var _a, _b, _c, _d, _e, _f;
      const r = t.analyzeOutputs.val.pressure;
      let a = -1 / 0, l = 1 / 0;
      if (r) for (const i of r.values()) for (const c of i) {
        const d = Math.abs(c) * se;
        d > a && (a = d), d < l && (l = d);
      }
      a === -1 / 0 && (a = 0, l = 0);
      const m = oe;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${a.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${l.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} e (D+L) libro": `${(_b = (_a = m == null ? void 0 : m.manual_libro) == null ? void 0 : _a.e_DL_m) == null ? void 0 : _b.toFixed(3)} m`,
        "\u{1F4D8} e (D+L+S) libro": `${(_d = (_c = m == null ? void 0 : m.manual_libro) == null ? void 0 : _c.e_DLS_m) == null ? void 0 : _d.toFixed(3)} m`,
        "\u{1F4D8} L/6": `${(_f = (_e = m == null ? void 0 : m.manual_libro) == null ? void 0 : _e.L_sobre_6_m) == null ? void 0 : _f.toFixed(3)} m`,
        "\u26A0\uFE0F Excentricidad": "e >> L/6 \u2192 DESPEGUE GRANDE"
      };
    }
  };
});
export {
  __tla,
  re as g
};
