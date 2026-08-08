import { b as Q, c as V, E as W, L as ee } from "./theme-DDCjfe25.js";
import { p as ne, __tla as __tla_0 } from "./didacticCpp-BTBicwl0.js";
let re;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const oe = {
    e_DL_m: 1.289,
    e_DLS_m: 1.331,
    L_sobre_6_m: 0.767
  }, te = {
    manual_libro: oe
  }, M = 9.80665, se = 1 / M;
  function ae(t, s, i, a, l) {
    const m = new Q(a, l, i), r = new V(new W(m), new ee({
      color: 11579568,
      linewidth: 2
    }));
    return r.position.set(t, s, i / 2), [
      r
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
    build(t, s) {
      const i = t.L, a = t.B, l = t.h, m = Math.round(t.nx), r = Math.round(t.ny), c = m + 1, d = r + 1, h = i / m, g = a / r, Y = Math.round(t.combo);
      let L, v;
      Y === 1 ? (L = t.P_dead + t.P_live + t.P_sismo, v = t.M_dead + t.M_live + t.M_sismo) : (L = t.P_dead + t.P_live, v = t.M_dead + t.M_live);
      const q = L * M, C = v * M, E = t.ks_tm3 * M, N = 14100 * Math.sqrt(t.fc_kgcm2) * 98.0665, P = 0.2, f = [];
      for (let e = 0; e < d; ++e) for (let n = 0; n < c; ++n) f.push([
        n * h,
        e * g
      ]);
      const u = [];
      for (let e = 0; e < r; ++e) for (let n = 0; n < m; ++n) {
        const o = e * c + n;
        u.push([
          o,
          o + 1,
          o + c + 1,
          o + c
        ]);
      }
      const $ = 2.4 * M * l, p = [], R = [];
      for (let e = 0; e < d; ++e) for (let n = 0; n < c; ++n) {
        const o = n === 0 || n === c - 1, _ = e === 0 || e === d - 1, D = o && _ ? 0.25 : o || _ ? 0.5 : 1, O = h * g * D, y = e * c + n;
        if (p.push({
          node: y,
          dof: 0,
          k: E * O
        }), R.push({
          node: y,
          dof: 0,
          value: -$ * O
        }), o && _) {
          const X = 1e-6 * E * h * g;
          p.push({
            node: y,
            dof: 1,
            k: X
          }), p.push({
            node: y,
            dof: 2,
            k: X
          });
        }
      }
      const S = i / 2, j = a / 2, x = [];
      for (let e = 0; e < f.length; e++) {
        const n = f[e][0], o = f[e][1];
        Math.abs(n - S) <= t.col_x / 2 + 1e-6 && Math.abs(o - j) <= t.col_y / 2 + 1e-6 && x.push(e);
      }
      const K = q / x.length, H = C / x.length, b = [];
      for (const e of x) b.push({
        node: e,
        dof: 0,
        value: -K
      }), b.push({
        node: e,
        dof: 1,
        value: H
      });
      const Z = [
        ...b,
        ...R
      ], k = ne({
        E: N,
        nu: P,
        thickness: l,
        theoryType: 0,
        bcType: "none",
        nodes: f,
        elements: u,
        bcs: [],
        pointLoads: Z,
        springs: p
      }), A = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
      u.forEach((e, n) => {
        A.set(n, e.map((D) => -Math.abs(E * k.nodeResults[D].w)));
        const o = k.elementResults[n];
        G.set(n, [
          o.Mxx,
          o.Mxx,
          o.Mxx,
          o.Mxx
        ]), I.set(n, [
          o.Myy,
          o.Myy,
          o.Myy,
          o.Myy
        ]), F.set(n, [
          o.Mxy,
          o.Mxy,
          o.Mxy,
          o.Mxy
        ]);
        const _ = Math.sqrt(o.Mxx ** 2 + o.Myy ** 2 - o.Mxx * o.Myy + 3 * o.Mxy ** 2);
        z.set(n, [
          _,
          _,
          _,
          _
        ]);
      });
      const J = f.map((e) => [
        e[0],
        e[1],
        0
      ]);
      s.nodes.val = J, s.elements.val = u;
      const w = /* @__PURE__ */ new Map(), U = [
        2,
        3,
        4
      ];
      for (const e of b) {
        const n = w.get(e.node) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        n[U[e.dof] ?? 2] += e.value, w.set(e.node, n);
      }
      s.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: w
      }, s.elementInputs.val = {
        elasticities: new Map(u.map((e, n) => [
          n,
          N
        ])),
        poissonsRatios: new Map(u.map((e, n) => [
          n,
          P
        ])),
        thicknesses: new Map(u.map((e, n) => [
          n,
          l
        ]))
      };
      const T = /* @__PURE__ */ new Map();
      for (const e of k.nodeResults) T.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      s.deformOutputs.val = {
        deformations: T,
        reactions: /* @__PURE__ */ new Map()
      }, s.analyzeOutputs.val = {
        pressure: A,
        bendingXX: G,
        bendingYY: I,
        bendingXY: F,
        vonMises: z
      };
      const B = [];
      B.push(...ae(S, j, t.h_col, t.col_x, t.col_y)), s.objects3D.val = B;
    },
    computedLabels(t, s) {
      var _a, _b, _c, _d, _e, _f;
      const i = s.analyzeOutputs.val.pressure;
      let a = -1 / 0, l = 1 / 0;
      if (i) for (const r of i.values()) for (const c of r) {
        const d = Math.abs(c) * se;
        d > a && (a = d), d < l && (l = d);
      }
      a === -1 / 0 && (a = 0, l = 0);
      const m = te;
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
