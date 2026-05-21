import { B as da, V as N, a as fa, L as ca, b as xa, c as ba, E as ga } from "./Text-BmY6zyQy.js";
import { p as Ma, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
let Na;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ha = {
    sigma_max_zapata1_tm2: 26.179,
    sigma_min_zapata1_tm2: 15.386,
    sigma_zapata2_avg_tm2: 16.734
  }, ya = {
    manual_libro: ha
  }, z = 9.80665, va = 1 / z;
  function la(n, o, l, s) {
    const c = new xa(s, s, l), r = new ba(new ga(c), new ca({
      color: 11579568,
      linewidth: 2
    }));
    return r.position.set(n, o, l / 2), [
      r
    ];
  }
  function G(n, o, l, s, c) {
    const r = new da().setFromPoints([
      new N(n, o, c),
      new N(n + l, o, c),
      new N(n + l, o + s, c),
      new N(n, o + s, c),
      new N(n, o, c)
    ]);
    return new fa(r, new ca({
      color: 16498468,
      linewidth: 2
    }));
  }
  Na = {
    id: "guerra-ej6-zapata-unida-viga-amarre",
    name: "Ej.6 \xB7 Zapata Unida con Viga Amarre (2.38+1.64+2.45)",
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
      "EJ.6 pag.113-130. ZAPATA UNIDA con VIGA DE AMARRE.",
      "DOS zapatas SEPARADAS: medianera (2.38\xD73.00m) + interna (2.45\xD72.45m).",
      "Viga amarre central 1.64m \xD7 0.45\xD70.95cm (solo flexi\xF3n, no suelo).",
      "Col1: P_D=70, P_L=40 \u2192 110t (en medianera).",
      "Col2: P_D=89, P_L=51 \u2192 140t (en interna).",
      "f'c=210, q_adm=19, ks=3820. Libro pag.180: \u03C3_max=26.18 t/m\xB2 (Z1 borde ext)."
    ],
    params: {
      L1: {
        default: 2.38,
        min: 1.5,
        max: 4,
        step: 0.05,
        label: "L1 Zapata1 (m)"
      },
      B1: {
        default: 3,
        min: 2,
        max: 4.5,
        step: 0.05,
        label: "B1 Zapata1 (m)"
      },
      L2: {
        default: 2.45,
        min: 1.5,
        max: 4,
        step: 0.05,
        label: "L2 Zapata2 (m)"
      },
      B2: {
        default: 2.45,
        min: 2,
        max: 4.5,
        step: 0.05,
        label: "B2 Zapata2 (m)"
      },
      L_viga: {
        default: 1.64,
        min: 0.5,
        max: 4,
        step: 0.05,
        label: "L viga amarre (m)"
      },
      b_viga: {
        default: 0.45,
        min: 0.25,
        max: 1.2,
        step: 0.05,
        label: "b viga (m)"
      },
      h: {
        default: 0.55,
        min: 0.3,
        max: 0.9,
        step: 0.05,
        label: "h zapata (m)"
      },
      col_size: {
        default: 0.5,
        min: 0.2,
        max: 1,
        step: 0.05,
        label: "col lado (m)"
      },
      ks_tm3: {
        default: 3820,
        min: 500,
        max: 8e3,
        step: 50,
        label: "ks (tonf/m\xB3)"
      },
      P_col1: {
        default: 110,
        min: 0,
        max: 400,
        step: 1,
        label: "P col1 D+L (tonf)"
      },
      P_col2: {
        default: 140,
        min: 0,
        max: 400,
        step: 1,
        label: "P col2 D+L (tonf)"
      },
      fc_kgcm2: {
        default: 210,
        min: 175,
        max: 600,
        step: 5,
        label: "f'c (kg/cm\xB2)"
      },
      nx: {
        default: 32,
        min: 16,
        max: 48,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 15,
        min: 8,
        max: 24,
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
    build(n, o) {
      const l = n.L1, s = n.B1, c = n.L2, r = n.B2, h = n.L_viga, k = l + h + c, m = Math.max(s, r), E = n.h, Z = Math.round(n.nx), D = Math.round(n.ny), x = Z + 1, F = D + 1, P = k / Z, A = m / D, ia = n.P_col1 * z, ma = n.P_col2 * z, R = n.ks_tm3 * z, X = 14100 * Math.sqrt(n.fc_kgcm2) * 98.0665, Y = 0.2, y = {
        x0: 0,
        y0: (m - s) / 2,
        x1: l,
        y1: (m + s) / 2
      }, v = {
        x0: l + h,
        y0: (m - r) / 2,
        x1: k,
        y1: (m + r) / 2
      }, w = {
        x0: l,
        y0: (m - n.b_viga) / 2,
        x1: l + h,
        y1: (m + n.b_viga) / 2
      }, C = (a, e) => a >= y.x0 - 1e-6 && a <= y.x1 + 1e-6 && e >= y.y0 - 1e-6 && e <= y.y1 + 1e-6, $ = (a, e) => a >= v.x0 - 1e-6 && a <= v.x1 + 1e-6 && e >= v.y0 - 1e-6 && e <= v.y1 + 1e-6, I = (a, e) => a >= w.x0 - 1e-6 && a <= w.x1 + 1e-6 && e >= w.y0 - 1e-6 && e <= w.y1 + 1e-6, p = [];
      for (let a = 0; a < F; ++a) for (let e = 0; e < x; ++e) p.push([
        e * P,
        a * A
      ]);
      const b = [];
      for (let a = 0; a < D; ++a) for (let e = 0; e < Z; ++e) {
        const i = a * x + e;
        b.push([
          i,
          i + 1,
          i + x + 1,
          i + x
        ]);
      }
      const q = 2.4 * z, ra = q * E, B = [], O = [];
      for (let a = 0; a < F; ++a) for (let e = 0; e < x; ++e) {
        const i = e === 0 || e === x - 1, u = a === 0 || a === F - 1, g = i && u ? 0.25 : i || u ? 0.5 : 1, M = P * A * g, t = a * x + e, d = e * P, f = a * A, _ = (C(d, f) || $(d, f)) && !I(d, f), pa = _ ? R * M : 1e-6;
        if (B.push({
          node: t,
          dof: 0,
          k: pa
        }), _ ? O.push({
          node: t,
          dof: 0,
          value: -ra * M
        }) : I(d, f) && O.push({
          node: t,
          dof: 0,
          value: -q * 0.95 * M
        }), i && u) {
          const sa = 1e-6 * R * P * A;
          B.push({
            node: t,
            dof: 1,
            k: sa
          }), B.push({
            node: t,
            dof: 2,
            k: sa
          });
        }
      }
      const H = 0.25, K = m / 2, U = k - 0.25, J = m / 2, Q = (a, e) => {
        const i = [];
        for (let u = 0; u < p.length; u++) {
          const g = p[u][0], M = p[u][1];
          Math.abs(g - a) <= n.col_size / 2 + 1e-6 && Math.abs(M - e) <= n.col_size / 2 + 1e-6 && i.push(u);
        }
        return i;
      }, j = Q(H, K), S = Q(U, J), T = [];
      if (j.length > 0) {
        const a = ia / j.length;
        for (const e of j) T.push({
          node: e,
          dof: 0,
          value: -a
        });
      }
      if (S.length > 0) {
        const a = ma / S.length;
        for (const e of S) T.push({
          node: e,
          dof: 0,
          value: -a
        });
      }
      const ua = [
        ...T,
        ...O
      ], V = Ma({
        E: X,
        nu: Y,
        thickness: E,
        theoryType: 0,
        bcType: "none",
        nodes: p,
        elements: b,
        bcs: [],
        pointLoads: ua,
        springs: B
      }), W = /* @__PURE__ */ new Map(), aa = /* @__PURE__ */ new Map(), ea = /* @__PURE__ */ new Map(), na = /* @__PURE__ */ new Map(), ta = /* @__PURE__ */ new Map();
      b.forEach((a, e) => {
        const i = (p[a[0]][0] + p[a[2]][0]) / 2, u = (p[a[0]][1] + p[a[2]][1]) / 2, g = C(i, u) || $(i, u), M = I(i, u) && !g;
        W.set(e, a.map((_) => g ? -Math.abs(R * V.nodeResults[_].w) : NaN));
        const t = V.elementResults[e], d = g || M;
        aa.set(e, [
          t.Mxx,
          t.Mxx,
          t.Mxx,
          t.Mxx
        ].map((_) => d ? _ : NaN)), ea.set(e, [
          t.Myy,
          t.Myy,
          t.Myy,
          t.Myy
        ].map((_) => d ? _ : NaN)), na.set(e, [
          t.Mxy,
          t.Mxy,
          t.Mxy,
          t.Mxy
        ].map((_) => d ? _ : NaN));
        const f = Math.sqrt(t.Mxx ** 2 + t.Myy ** 2 - t.Mxx * t.Myy + 3 * t.Mxy ** 2);
        ta.set(e, [
          f,
          f,
          f,
          f
        ].map((_) => d ? _ : NaN));
      });
      const _a = p.map((a) => [
        a[0],
        a[1],
        0
      ]);
      o.nodes.val = _a, o.elements.val = b, o.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, o.elementInputs.val = {
        elasticities: new Map(b.map((a, e) => [
          e,
          X
        ])),
        poissonsRatios: new Map(b.map((a, e) => [
          e,
          Y
        ])),
        thicknesses: new Map(b.map((a, e) => [
          e,
          E
        ]))
      };
      const oa = /* @__PURE__ */ new Map();
      for (const a of V.nodeResults) oa.set(a.node, [
        0,
        0,
        a.w,
        a.bx,
        a.by,
        0
      ]);
      o.deformOutputs.val = {
        deformations: oa,
        reactions: /* @__PURE__ */ new Map()
      }, o.analyzeOutputs.val = {
        pressure: W,
        bendingXX: aa,
        bendingYY: ea,
        bendingXY: na,
        vonMises: ta
      };
      const L = [];
      L.push(G(y.x0, y.y0, l, s, 0.01)), L.push(G(v.x0, v.y0, c, r, 0.01)), L.push(G(w.x0, w.y0, h, n.b_viga, 0.02)), L.push(...la(H, K, n.h_col, n.col_size)), L.push(...la(U, J, n.h_col, n.col_size)), o.objects3D.val = L;
    },
    computedLabels(n, o) {
      var _a, _b, _c;
      const l = o.analyzeOutputs.val.pressure;
      let s = -1 / 0, c = 1 / 0;
      if (l) for (const h of l.values()) for (const k of h) {
        const m = Math.abs(k) * va;
        m > s && (s = m), m < c && (c = m);
      }
      s === -1 / 0 && (s = 0, c = 0);
      const r = ya;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${s.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${c.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max Zapata1 libro": `${(_a = r == null ? void 0 : r.manual_libro) == null ? void 0 : _a.sigma_max_zapata1_tm2} t/m\xB2`,
        "\u{1F4D8} \u03C3_min Zapata1 libro": `${(_b = r == null ? void 0 : r.manual_libro) == null ? void 0 : _b.sigma_min_zapata1_tm2} t/m\xB2`,
        "\u{1F4D8} \u03C3 avg Zapata2 libro": `${(_c = r == null ? void 0 : r.manual_libro) == null ? void 0 : _c.sigma_zapata2_avg_tm2} t/m\xB2`
      };
    }
  };
});
export {
  __tla,
  Na as g
};
