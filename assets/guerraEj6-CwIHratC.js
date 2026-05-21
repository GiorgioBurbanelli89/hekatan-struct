import { B as de, V as k, a as pe, L as ce, b as xe, c as be, E as ge } from "./Text-BmY6zyQy.js";
import { p as Me, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
let ze;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const he = {
    sigma_max_zapata1_tm2: 26.179,
    sigma_min_zapata1_tm2: 15.386,
    sigma_zapata2_avg_tm2: 16.734
  }, ye = {
    manual_libro: he
  }, z = 9.80665, ve = 1 / z;
  function le(a, s, c, l) {
    const i = new xe(l, l, c), r = new be(new ge(i), new ce({
      color: 11579568,
      linewidth: 2
    }));
    return r.position.set(a, s, c / 2), [
      r
    ];
  }
  function G(a, s, c, l, i) {
    const r = new de().setFromPoints([
      new k(a, s, i),
      new k(a + c, s, i),
      new k(a + c, s + l, i),
      new k(a, s + l, i),
      new k(a, s, i)
    ]);
    return new pe(r, new ce({
      color: 16498468,
      linewidth: 2
    }));
  }
  ze = {
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
    build(a, s) {
      const c = a.L1, l = a.B1, i = a.L2, r = a.B2, d = a.L_viga, y = c + d + i, m = Math.max(l, r), E = a.h, Z = Math.round(a.nx), B = Math.round(a.ny), _ = Z + 1, F = B + 1, v = y / Z, w = m / B, ie = a.P_col1 * z, me = a.P_col2 * z, I = a.ks_tm3 * z, V = 14100 * Math.sqrt(a.fc_kgcm2) * 98.0665, X = 0.2, p = {
        x0: 0,
        y0: (m - l) / 2,
        x1: c,
        y1: (m + l) / 2
      }, x = {
        x0: c + d,
        y0: (m - r) / 2,
        x1: y,
        y1: (m + r) / 2
      }, b = {
        x0: c,
        y0: (m - a.b_viga) / 2,
        x1: c + d,
        y1: (m + a.b_viga) / 2
      }, Y = (e, n) => e >= p.x0 - 1e-6 && e <= p.x1 + 1e-6 && n >= p.y0 - 1e-6 && n <= p.y1 + 1e-6, C = (e, n) => e >= x.x0 - 1e-6 && e <= x.x1 + 1e-6 && n >= x.y0 - 1e-6 && n <= x.y1 + 1e-6, D = (e, n) => e >= b.x0 - 1e-6 && e <= b.x1 + 1e-6 && n >= b.y0 - 1e-6 && n <= b.y1 + 1e-6, g = [];
      for (let e = 0; e < F; ++e) for (let n = 0; n < _; ++n) g.push([
        n * v,
        e * w
      ]);
      const f = [];
      for (let e = 0; e < B; ++e) for (let n = 0; n < Z; ++n) {
        const t = (n + 0.5) * v, o = (e + 0.5) * w;
        if (!(Y(t, o) || C(t, o) || D(t, o))) continue;
        const u = e * _ + n;
        f.push([
          u,
          u + 1,
          u + _ + 1,
          u + _
        ]);
      }
      const $ = 2.4 * z, re = $ * E, P = [], R = [];
      for (let e = 0; e < F; ++e) for (let n = 0; n < _; ++n) {
        const t = n === 0 || n === _ - 1, o = e === 0 || e === F - 1, h = t && o ? 0.25 : t || o ? 0.5 : 1, u = v * w * h, L = e * _ + n, A = n * v, N = e * w, oe = (Y(A, N) || C(A, N)) && !D(A, N), fe = oe ? I * u : 1e-6;
        if (P.push({
          node: L,
          dof: 0,
          k: fe
        }), oe ? R.push({
          node: L,
          dof: 0,
          value: -re * u
        }) : D(A, N) && R.push({
          node: L,
          dof: 0,
          value: -$ * 0.95 * u
        }), t && o) {
          const se = 1e-6 * I * v * w;
          P.push({
            node: L,
            dof: 1,
            k: se
          }), P.push({
            node: L,
            dof: 2,
            k: se
          });
        }
      }
      const q = 0.25, H = m / 2, K = y - 0.25, U = m / 2, J = (e, n) => {
        const t = [];
        for (let o = 0; o < g.length; o++) {
          const h = g[o][0], u = g[o][1];
          Math.abs(h - e) <= a.col_size / 2 + 1e-6 && Math.abs(u - n) <= a.col_size / 2 + 1e-6 && t.push(o);
        }
        return t;
      }, O = J(q, H), j = J(K, U), S = [];
      if (O.length > 0) {
        const e = ie / O.length;
        for (const n of O) S.push({
          node: n,
          dof: 0,
          value: -e
        });
      }
      if (j.length > 0) {
        const e = me / j.length;
        for (const n of j) S.push({
          node: n,
          dof: 0,
          value: -e
        });
      }
      const ue = [
        ...S,
        ...R
      ], T = Me({
        E: V,
        nu: X,
        thickness: E,
        theoryType: 0,
        bcType: "none",
        nodes: g,
        elements: f,
        bcs: [],
        pointLoads: ue,
        springs: P
      }), Q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map();
      f.forEach((e, n) => {
        Q.set(n, e.map((h) => -Math.abs(I * T.nodeResults[h].w)));
        const t = T.elementResults[n];
        W.set(n, [
          t.Mxx,
          t.Mxx,
          t.Mxx,
          t.Mxx
        ]), ee.set(n, [
          t.Myy,
          t.Myy,
          t.Myy,
          t.Myy
        ]), ne.set(n, [
          t.Mxy,
          t.Mxy,
          t.Mxy,
          t.Mxy
        ]);
        const o = Math.sqrt(t.Mxx ** 2 + t.Myy ** 2 - t.Mxx * t.Myy + 3 * t.Mxy ** 2);
        ae.set(n, [
          o,
          o,
          o,
          o
        ]);
      });
      const _e = g.map((e) => [
        e[0],
        e[1],
        0
      ]);
      s.nodes.val = _e, s.elements.val = f, s.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, s.elementInputs.val = {
        elasticities: new Map(f.map((e, n) => [
          n,
          V
        ])),
        poissonsRatios: new Map(f.map((e, n) => [
          n,
          X
        ])),
        thicknesses: new Map(f.map((e, n) => [
          n,
          E
        ]))
      };
      const te = /* @__PURE__ */ new Map();
      for (const e of T.nodeResults) te.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      s.deformOutputs.val = {
        deformations: te,
        reactions: /* @__PURE__ */ new Map()
      }, s.analyzeOutputs.val = {
        pressure: Q,
        bendingXX: W,
        bendingYY: ee,
        bendingXY: ne,
        vonMises: ae
      };
      const M = [];
      M.push(G(p.x0, p.y0, c, l, 0.01)), M.push(G(x.x0, x.y0, i, r, 0.01)), M.push(G(b.x0, b.y0, d, a.b_viga, 0.02)), M.push(...le(q, H, a.h_col, a.col_size)), M.push(...le(K, U, a.h_col, a.col_size)), s.objects3D.val = M;
    },
    computedLabels(a, s) {
      var _a, _b, _c;
      const c = s.analyzeOutputs.val.pressure;
      let l = -1 / 0, i = 1 / 0;
      if (c) for (const d of c.values()) for (const y of d) {
        const m = Math.abs(y) * ve;
        m > l && (l = m), m < i && (i = m);
      }
      l === -1 / 0 && (l = 0, i = 0);
      const r = ye;
      return {
        "\u{1F4CA} \u03C3_max Hekatan": `${l.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${i.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} \u03C3_max Zapata1 libro": `${(_a = r == null ? void 0 : r.manual_libro) == null ? void 0 : _a.sigma_max_zapata1_tm2} t/m\xB2`,
        "\u{1F4D8} \u03C3_min Zapata1 libro": `${(_b = r == null ? void 0 : r.manual_libro) == null ? void 0 : _b.sigma_min_zapata1_tm2} t/m\xB2`,
        "\u{1F4D8} \u03C3 avg Zapata2 libro": `${(_c = r == null ? void 0 : r.manual_libro) == null ? void 0 : _c.sigma_zapata2_avg_tm2} t/m\xB2`
      };
    }
  };
});
export {
  __tla,
  ze as g
};
