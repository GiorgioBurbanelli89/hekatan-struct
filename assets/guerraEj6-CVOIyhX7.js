import { b as H, c as D, E as J, L as U } from "./Text-BmY6zyQy.js";
import { p as $, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
let te;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const x = 9.80665, Q = 1 / x;
  function Y(o, a, r, l) {
    const c = new H(l, l, r), m = new D(new J(c), new U({
      color: 11579568,
      linewidth: 2
    }));
    return m.position.set(o, a, r / 2), [
      m
    ];
  }
  te = {
    id: "guerra-ej6-zapata-unida-viga-amarre",
    name: "Ej.6 \xB7 Zapata Unida con Viga de Amarre",
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
      "EJ.6 pag.113-130. Zapata medianera + interna conectadas por viga.",
      "Col 1 (medianera, x=0.25 in F1): P=110t. Col 2 (interna en F2): P=140t.",
      "L entre cols = 5m. Cols 50\xD750cm. f'c=290."
    ],
    params: {
      L_tot: {
        default: 5.5,
        min: 4,
        max: 8,
        step: 0.05,
        label: "L total bbox (m)"
      },
      B: {
        default: 3.15,
        min: 2,
        max: 4.5,
        step: 0.05,
        label: "B (m)"
      },
      h: {
        default: 0.5,
        min: 0.3,
        max: 0.9,
        step: 0.05,
        label: "h (m)"
      },
      col1_x: {
        default: 0.25,
        min: 0.1,
        max: 1.5,
        step: 0.05,
        label: "col1 x (m)"
      },
      col2_x: {
        default: 5.25,
        min: 3,
        max: 7,
        step: 0.05,
        label: "col2 x (m)"
      },
      col_size: {
        default: 0.5,
        min: 0.2,
        max: 1,
        step: 0.05,
        label: "col lado (m)"
      },
      ks_tm3: {
        default: 3800,
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
        label: "P col1 (tonf)"
      },
      P_col2: {
        default: 140,
        min: 0,
        max: 400,
        step: 1,
        label: "P col2 (tonf)"
      },
      fc_kgcm2: {
        default: 290,
        min: 175,
        max: 600,
        step: 5,
        label: "f'c (kg/cm\xB2)"
      },
      nx: {
        default: 24,
        min: 12,
        max: 40,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 12,
        min: 6,
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
    build(o, a) {
      const r = o.L_tot, l = o.B, c = o.h, m = Math.round(o.nx), f = Math.round(o.ny), s = m + 1, h = f + 1, b = r / m, y = l / f, G = o.P_col1 * x, S = o.P_col2 * x, g = o.ks_tm3 * x, P = 14100 * Math.sqrt(o.fc_kgcm2) * 98.0665, E = 0.2, u = [];
      for (let n = 0; n < h; ++n) for (let e = 0; e < s; ++e) u.push([
        e * b,
        n * y
      ]);
      const d = [];
      for (let n = 0; n < f; ++n) for (let e = 0; e < m; ++e) {
        const t = n * s + e;
        d.push([
          t,
          t + 1,
          t + s + 1,
          t + s
        ]);
      }
      const K = 2.4 * x * c, _ = [], j = [];
      for (let n = 0; n < h; ++n) for (let e = 0; e < s; ++e) {
        const t = e === 0 || e === s - 1, i = n === 0 || n === h - 1, p = t && i ? 0.25 : t || i ? 0.5 : 1, T = b * y * p, M = n * s + e;
        if (_.push({
          node: M,
          dof: 0,
          k: g * T
        }), j.push({
          node: M,
          dof: 0,
          value: -K * T
        }), t && i) {
          const X = 1e-6 * g * b * y;
          _.push({
            node: M,
            dof: 1,
            k: X
          }), _.push({
            node: M,
            dof: 2,
            k: X
          });
        }
      }
      const k = l / 2, F = (n) => {
        const e = [];
        for (let t = 0; t < u.length; t++) {
          const i = u[t][0], p = u[t][1];
          Math.abs(i - n) <= o.col_size / 2 + 1e-6 && Math.abs(p - k) <= o.col_size / 2 + 1e-6 && e.push(t);
        }
        return e;
      }, v = F(o.col1_x), w = F(o.col2_x), N = [];
      if (v.length > 0) {
        const n = G / v.length;
        for (const e of v) N.push({
          node: e,
          dof: 0,
          value: -n
        });
      }
      if (w.length > 0) {
        const n = S / w.length;
        for (const e of w) N.push({
          node: e,
          dof: 0,
          value: -n
        });
      }
      const Z = [
        ...N,
        ...j
      ], L = $({
        E: P,
        nu: E,
        thickness: c,
        theoryType: 0,
        bcType: "none",
        nodes: u,
        elements: d,
        bcs: [],
        pointLoads: Z,
        springs: _
      }), A = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map();
      d.forEach((n, e) => {
        A.set(e, n.map((p) => -Math.abs(g * L.nodeResults[p].w)));
        const t = L.elementResults[e];
        C.set(e, [
          t.Mxx,
          t.Mxx,
          t.Mxx,
          t.Mxx
        ]), I.set(e, [
          t.Myy,
          t.Myy,
          t.Myy,
          t.Myy
        ]), O.set(e, [
          t.Mxy,
          t.Mxy,
          t.Mxy,
          t.Mxy
        ]);
        const i = Math.sqrt(t.Mxx ** 2 + t.Myy ** 2 - t.Mxx * t.Myy + 3 * t.Mxy ** 2);
        B.set(e, [
          i,
          i,
          i,
          i
        ]);
      });
      const q = u.map((n) => [
        n[0],
        n[1],
        0
      ]);
      a.nodes.val = q, a.elements.val = d, a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, a.elementInputs.val = {
        elasticities: new Map(d.map((n, e) => [
          e,
          P
        ])),
        poissonsRatios: new Map(d.map((n, e) => [
          e,
          E
        ])),
        thicknesses: new Map(d.map((n, e) => [
          e,
          c
        ]))
      };
      const R = /* @__PURE__ */ new Map();
      for (const n of L.nodeResults) R.set(n.node, [
        0,
        0,
        n.w,
        n.bx,
        n.by,
        0
      ]);
      a.deformOutputs.val = {
        deformations: R,
        reactions: /* @__PURE__ */ new Map()
      }, a.analyzeOutputs.val = {
        pressure: A,
        bendingXX: C,
        bendingYY: I,
        bendingXY: O,
        vonMises: B
      };
      const z = [];
      z.push(...Y(o.col1_x, k, o.h_col, o.col_size)), z.push(...Y(o.col2_x, k, o.h_col, o.col_size)), a.objects3D.val = z;
    },
    computedLabels(o, a) {
      const r = a.analyzeOutputs.val.pressure;
      let l = -1 / 0, c = 1 / 0;
      if (r) for (const m of r.values()) for (const f of m) {
        const s = Math.abs(f) * Q;
        s > l && (l = s), s < c && (c = s);
      }
      return l === -1 / 0 && (l = 0, c = 0), {
        "\u{1F4CA} \u03C3_max Hekatan": `${l.toFixed(3)} t/m\xB2`,
        "\u{1F4CA} \u03C3_min Hekatan": `${c.toFixed(3)} t/m\xB2`,
        "\u{1F4D8} q_adm libro": "19.00 t/m\xB2"
      };
    }
  };
});
export {
  __tla,
  te as g
};
