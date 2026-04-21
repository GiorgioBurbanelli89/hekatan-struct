import { a as He, V as A, L as rt, B as Pe, h as dt } from "./Text-CBH-tcJP.js";
import { v as mt } from "./theme-CzzIlc4y.js";
import { a as ut } from "./analyze-ClLKGn9k.js";
import { m as pt, d as ft, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let It;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let G, O, _e, D, ht, Ee, Ce, gt, vt, xt;
  G = 25e6;
  O = 0.2;
  _e = G / (2 * (1 + O));
  D = 24;
  ht = 0.2;
  Ee = 0.035;
  Ce = 8;
  gt = 0.04;
  vt = new He({
    color: 16711731,
    linewidth: 2
  });
  xt = new He({
    color: 52224,
    linewidth: 2
  });
  It = {
    id: "zapata-viga-amarre",
    name: "Zapata + Viga de Amarre + Pedestal",
    category: "Cimentaciones",
    defaultShellResult: "pressure",
    availableShellResults: [
      "pressure",
      "bendingXX",
      "bendingYY",
      "displacementZ",
      "vonMises"
    ],
    hasModal: true,
    params: {
      Lz1: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Lz1 (m)"
      },
      Bz1: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Bz1 (m)"
      },
      Lv: {
        default: 3,
        min: 1,
        max: 6,
        step: 0.1,
        label: "Lv (m)"
      },
      Bv: {
        default: 0.25,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "Bv (m)"
      },
      Hv: {
        default: 0.3,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "Hv canto (m)"
      },
      Lz2: {
        default: 2.5,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Lz2 (m)"
      },
      Bz2: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Bz2 (m)"
      },
      tz: {
        default: 0.5,
        min: 0.2,
        max: 1,
        step: 0.05,
        label: "tz (m)"
      },
      bc: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "bc columna (m)"
      },
      Hp: {
        default: 0.8,
        min: 0.3,
        max: 2,
        step: 0.1,
        label: "Hp pedestal (m)"
      },
      vigaLevel: {
        default: 0,
        min: 0,
        max: 1,
        step: 1,
        label: "Viga: 0=baja 1=alta"
      },
      ks: {
        default: 2e3,
        min: 500,
        max: 3e4,
        step: 500,
        label: "ks Winkler (kN/m\xB3)"
      },
      P1: {
        default: 800,
        min: 100,
        max: 2e3,
        step: 10,
        label: "P1 axial (kN)"
      },
      M1x: {
        default: 0,
        min: -500,
        max: 500,
        step: 10,
        label: "M1x (kN\xB7m)"
      },
      M1y: {
        default: 0,
        min: -500,
        max: 500,
        step: 10,
        label: "M1y (kN\xB7m)"
      },
      P2: {
        default: 1200,
        min: 100,
        max: 2500,
        step: 10,
        label: "P2 axial (kN)"
      },
      M2x: {
        default: 0,
        min: -500,
        max: 500,
        step: 10,
        label: "M2x (kN\xB7m)"
      },
      M2y: {
        default: 0,
        min: -500,
        max: 500,
        step: 10,
        label: "M2y (kN\xB7m)"
      },
      nSubX: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "nx subdiv"
      },
      nSubY: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "ny subdiv"
      }
    },
    build(o, s) {
      var _a;
      const b = o.Lz1, S = o.Bz1, y = o.Lv, L = o.Bv, w = o.Hv, h = o.Lz2, R = o.Bz2, U = o.tz, k = o.bc, ge = o.Hp, Ve = o.P1, Ae = o.P2, T = o.ks, Ge = o.M1x ?? 0, Oe = o.M1y ?? 0, Re = o.M2x ?? 0, Te = o.M2y ?? 0, j = Math.round(o.nSubX), X = Math.round(o.nSubY), W = 0.2, $ = S / 2, J = b + y + h / 2, F = R / 2, ve = ($ + F) / 2;
      function Y(e, t, n, M) {
        const a = [
          e,
          ...n.filter((i) => i > e && i < t),
          t
        ].sort((i, u) => i - u), p = [];
        for (let i = 0; i < a.length - 1; i++) {
          const u = a[i], c = a[i + 1], r = Math.max(1, Math.round((c - u) / ((t - e) / M)));
          for (let f = 0; f < r; f++) p.push(u + (c - u) * f / r);
        }
        return p.push(a[a.length - 1]), p;
      }
      const P = Y(0, b, [
        W
      ], j), _ = Y(0, S, [
        $,
        ve
      ], X), I = Y(b + y, b + y + h, [
        J
      ], j), B = Y(0, R, [
        F,
        ve
      ], X), K = [], g = [], je = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), N = (e, t, n) => {
        const M = `${e.toFixed(4)},${t.toFixed(4)},${n.toFixed(4)}`;
        if (ce.has(M)) return ce.get(M);
        const a = K.length;
        return K.push([
          e,
          t,
          n
        ]), ce.set(M, a), a;
      }, m = [];
      for (let e = 0; e < _.length; e++) {
        const t = [];
        for (let n = 0; n < P.length; n++) t.push(N(P[n], _[e], 0));
        m.push(t);
      }
      for (let e = 0; e < _.length - 1; e++) for (let t = 0; t < P.length - 1; t++) {
        const n = g.length;
        g.push([
          m[e][t],
          m[e][t + 1],
          m[e + 1][t + 1],
          m[e + 1][t]
        ]), te.set(n, U), E.set(n, G), C.set(n, O), H.set(n, D);
      }
      const z = [];
      for (let e = 0; e < B.length; e++) {
        const t = [];
        for (let n = 0; n < I.length; n++) t.push(N(I[n], B[e], 0));
        z.push(t);
      }
      for (let e = 0; e < B.length - 1; e++) for (let t = 0; t < I.length - 1; t++) {
        const n = g.length;
        g.push([
          z[e][t],
          z[e][t + 1],
          z[e + 1][t + 1],
          z[e + 1][t]
        ]), te.set(n, U), E.set(n, G), C.set(n, O), H.set(n, D);
      }
      const xe = Math.round(o.vigaLevel) === 0 ? U : ge, Xe = N(W, $, 0), ie = N(W, $, xe), $e = N(J, F, 0), re = N(J, F, xe);
      for (const [e, t] of [
        [
          Xe,
          ie
        ],
        [
          $e,
          re
        ]
      ]) {
        const n = g.length;
        g.push([
          e,
          t
        ]), E.set(n, G), C.set(n, O), ae.set(n, _e), ee.set(n, k * k), ne.set(n, k ** 4 / 12), se.set(n, k ** 4 / 12), oe.set(n, 0.14 * k ** 4), H.set(n, D), le.set(n, {
          type: "rect",
          b: k,
          h: k
        });
      }
      const v = g.length;
      g.push([
        ie,
        re
      ]), E.set(v, G), C.set(v, O), ae.set(v, _e), ee.set(v, L * w), ne.set(v, L * w ** 3 / 12), se.set(v, w * L ** 3 / 12), oe.set(v, 0.28 * L * w ** 3), H.set(v, D), le.set(v, {
        type: "rect",
        b: L,
        h: w
      }), Q.set(ie, [
        0,
        0,
        -Ve,
        Ge,
        Oe,
        0
      ]), Q.set(re, [
        0,
        0,
        -Ae,
        Re,
        Te,
        0
      ]);
      const Me = b / j, be = S / X, Fe = h / j, Ye = R / X, x = [], V = [];
      for (let e = 0; e < _.length; e++) for (let t = 0; t < P.length; t++) {
        const n = Me * be * (t === 0 || t === P.length - 1 ? 0.5 : 1) * (e === 0 || e === _.length - 1 ? 0.5 : 1);
        x.push({
          node: m[e][t],
          dof: 2,
          k: T * n
        }), V.push(m[e][t]);
      }
      for (let e = 0; e < B.length; e++) for (let t = 0; t < I.length; t++) {
        const n = Fe * Ye * (t === 0 || t === I.length - 1 ? 0.5 : 1) * (e === 0 || e === B.length - 1 ? 0.5 : 1);
        x.push({
          node: z[e][t],
          dof: 2,
          k: T * n
        }), V.push(z[e][t]);
      }
      const Z = T * Me * be * 0.01, de = Z * 0.01;
      x.push({
        node: m[0][0],
        dof: 0,
        k: Z
      }), x.push({
        node: m[0][0],
        dof: 1,
        k: Z
      }), x.push({
        node: m[0][0],
        dof: 3,
        k: de
      }), x.push({
        node: m[0][0],
        dof: 4,
        k: de
      }), x.push({
        node: m[0][0],
        dof: 5,
        k: de
      }), x.push({
        node: z[B.length - 1][I.length - 1],
        dof: 1,
        k: Z
      }), s.nodes.val = K.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), s.elements.val = g, s.nodeInputs.val = {
        supports: je,
        loads: Q
      }, s.elementInputs.val = {
        elasticities: E,
        poissonsRatios: C,
        areas: ee,
        momentsOfInertiaZ: ne,
        momentsOfInertiaY: se,
        torsionalConstants: oe,
        shearModuli: ae,
        thicknesses: te,
        densities: H,
        sectionShapes: le
      };
      try {
        s.deformOutputs.val = ft(s.nodes.val, s.elements.val, s.nodeInputs.val, s.elementInputs.val, x);
        const e = ut(s.nodes.val, s.elements.val, s.elementInputs.val, s.deformOutputs.val), t = s.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        s.elements.rawVal.forEach((M, a) => {
          if (M.length !== 4) return;
          const p = [];
          for (const i of M) {
            const u = t == null ? void 0 : t.get(i), c = u ? u[2] : 0;
            p.push(-T * c);
          }
          n.set(a, p);
        }), e.pressure = n, s.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const we = s.deformOutputs.rawVal.deformations;
      let q = 1e-9;
      for (const e of V) {
        const t = we == null ? void 0 : we.get(e);
        t && (q = Math.max(q, Math.abs(t[2])));
      }
      const Ze = b + y + h, qe = Math.max(S, R), ze = 0.07 * Math.sqrt(Ze ** 2 + qe ** 2 + ge ** 2) / q, De = new Set(V), me = Ce * 12, ue = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Se = (e, t) => {
        const n = e ? ze * t : 0, a = -(q * Math.max(n, ze) + ht), p = [];
        for (const i of V) {
          if (!De.has(i)) continue;
          const u = s.nodes.rawVal[i];
          if (!u) continue;
          const c = u[0], r = u[1], f = we == null ? void 0 : we.get(i), Ue = f ? f[0] : 0, We = f ? f[1] : 0, Je = f ? f[2] : 0, ye = c + Ue * n, Le = r + We * n, ke = 0 + Je * n, Ke = ke - a, pe = (d) => [
            c + (ye - c) * d,
            r + (Le - r) * d,
            a + Ke * d
          ], [Qe, et, tt] = pe(0), [nt, st, ot] = pe(0.05), fe = [
            new A(Qe, et, tt),
            new A(nt, st, ot)
          ];
          for (let d = 0; d <= me; d++) {
            const he = 0.05 + 0.9 * (d / me), [lt, ct, it] = pe(he), Ne = 2 * Math.PI * Ce * (d / me);
            fe.push(new A(lt + Ee * Math.cos(Ne), ct + Ee * Math.sin(Ne), it));
          }
          fe.push(new A(ye, Le, ke)), p.push(new rt(new Pe().setFromPoints(fe), vt));
          const l = gt, Ie = [
            [
              c - l,
              r - l,
              a - l * 2
            ],
            [
              c + l,
              r - l,
              a - l * 2
            ],
            [
              c + l,
              r + l,
              a - l * 2
            ],
            [
              c - l,
              r + l,
              a - l * 2
            ],
            [
              c - l,
              r - l,
              a
            ],
            [
              c + l,
              r - l,
              a
            ],
            [
              c + l,
              r + l,
              a
            ],
            [
              c - l,
              r + l,
              a
            ]
          ].map((d) => new A(d[0], d[1], d[2])), at = [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              0
            ],
            [
              4,
              5
            ],
            [
              5,
              6
            ],
            [
              6,
              7
            ],
            [
              7,
              4
            ],
            [
              0,
              4
            ],
            [
              1,
              5
            ],
            [
              2,
              6
            ],
            [
              3,
              7
            ]
          ], Be = [];
          for (const [d, he] of at) Be.push(Ie[d], Ie[he]);
          p.push(new dt(new Pe().setFromPoints(Be), xt));
        }
        return p;
      };
      ue ? mt.derive(() => {
        const e = ue.deformedShape.val, t = ue.displayScale.val, n = t === 0 ? 1 : t > 0 ? t : -1 / t;
        s.objects3D.val = Se(e, n);
      }) : s.objects3D.val = Se(true, 1);
    },
    runModal(o, s, b) {
      var _a, _b;
      const S = s.nodes.val, y = s.elements.val, L = s.nodeInputs.val, w = s.elementInputs.val;
      if (!(!S.length || !y.length || !((_a = w.densities) == null ? void 0 : _a.size))) try {
        const h = pt(S, y, L, w, 12);
        b.render(h, {
          title: `Zapata + Viga amarre Lv=${o.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${o.Bv}\xD7${o.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = h.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (h) {
        console.warn("Modal zapata-viga error:", h.message);
      }
    }
  };
});
export {
  __tla,
  It as z
};
