import { a as He, V as G, L as it, B as Ne, h as dt } from "./Text-CBH-tcJP.js";
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
  let O, R, Pe, q, ht, Ee, Ce, gt, vt, xt;
  O = 25e6;
  R = 0.2;
  Pe = O / (2 * (1 + R));
  q = 24;
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
    build(a, o) {
      var _a;
      const w = a.Lz1, k = a.Bz1, y = a.Lv, S = a.Bv, z = a.Hv, v = a.Lz2, T = a.Bz2, D = a.tz, L = a.bc, he = a.Hp, Ve = a.P1, Ae = a.P2, I = a.ks, Ge = a.M1x ?? 0, Oe = a.M1y ?? 0, Re = a.M2x ?? 0, Te = a.M2y ?? 0, j = Math.round(a.nSubX), X = Math.round(a.nSubY), U = 0.2, $ = k / 2, W = w + y + v / 2, F = T / 2, ge = ($ + F) / 2;
      function Y(e, t, n, m) {
        const s = [
          e,
          ...n.filter((r) => r > e && r < t),
          t
        ].sort((r, p) => r - p), h = [];
        for (let r = 0; r < s.length - 1; r++) {
          const p = s[r], c = s[r + 1], i = Math.max(1, Math.round((c - p) / ((t - e) / m)));
          for (let g = 0; g < i; g++) h.push(p + (c - p) * g / i);
        }
        return h.push(s[s.length - 1]), h;
      }
      const _ = Y(0, w, [
        U
      ], j), N = Y(0, k, [
        $,
        ge
      ], X), P = Y(w + y, w + y + v, [
        W
      ], j), E = Y(0, T, [
        F,
        ge
      ], X), J = [], x = [], je = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), B = (e, t, n) => {
        const m = `${e.toFixed(4)},${t.toFixed(4)},${n.toFixed(4)}`;
        if (le.has(m)) return le.get(m);
        const s = J.length;
        return J.push([
          e,
          t,
          n
        ]), le.set(m, s), s;
      }, u = [];
      for (let e = 0; e < N.length; e++) {
        const t = [];
        for (let n = 0; n < _.length; n++) t.push(B(_[n], N[e], 0));
        u.push(t);
      }
      for (let e = 0; e < N.length - 1; e++) for (let t = 0; t < _.length - 1; t++) {
        const n = x.length;
        x.push([
          u[e][t],
          u[e][t + 1],
          u[e + 1][t + 1],
          u[e + 1][t]
        ]), ee.set(n, D), C.set(n, O), H.set(n, R), V.set(n, q);
      }
      const M = [];
      for (let e = 0; e < E.length; e++) {
        const t = [];
        for (let n = 0; n < P.length; n++) t.push(B(P[n], E[e], 0));
        M.push(t);
      }
      for (let e = 0; e < E.length - 1; e++) for (let t = 0; t < P.length - 1; t++) {
        const n = x.length;
        x.push([
          M[e][t],
          M[e][t + 1],
          M[e + 1][t + 1],
          M[e + 1][t]
        ]), ee.set(n, D), C.set(n, O), H.set(n, R), V.set(n, q);
      }
      const ve = Math.round(a.vigaLevel) === 0 ? D : he, Xe = B(U, $, 0), ce = B(U, $, ve), $e = B(W, F, 0), re = B(W, F, ve);
      for (const [e, t] of [
        [
          Xe,
          ce
        ],
        [
          $e,
          re
        ]
      ]) {
        const n = x.length;
        x.push([
          e,
          t
        ]), C.set(n, O), H.set(n, R), oe.set(n, Pe), Q.set(n, L * L), te.set(n, L ** 4 / 12), ne.set(n, L ** 4 / 12), se.set(n, 0.14 * L ** 4), V.set(n, q), ae.set(n, {
          type: "rect",
          b: L,
          h: L
        });
      }
      const b = x.length;
      x.push([
        ce,
        re
      ]), C.set(b, O), H.set(b, R), oe.set(b, Pe), Q.set(b, S * z), te.set(b, S * z ** 3 / 12), ne.set(b, z * S ** 3 / 12), se.set(b, 0.28 * S * z ** 3), V.set(b, q), ae.set(b, {
        type: "rect",
        b: S,
        h: z
      }), K.set(ce, [
        0,
        0,
        -Ve,
        Ge,
        Oe,
        0
      ]), K.set(re, [
        0,
        0,
        -Ae,
        Re,
        Te,
        0
      ]);
      const xe = w / j, Me = k / X, Fe = v / j, Ye = T / X, be = 0.5, f = [], A = [];
      for (let e = 0; e < N.length; e++) for (let t = 0; t < _.length; t++) {
        const n = xe * Me * (t === 0 || t === _.length - 1 ? 0.5 : 1) * (e === 0 || e === N.length - 1 ? 0.5 : 1), m = I * n, s = I * n * be;
        f.push({
          node: u[e][t],
          dof: 0,
          k: s
        }), f.push({
          node: u[e][t],
          dof: 1,
          k: s
        }), f.push({
          node: u[e][t],
          dof: 2,
          k: m
        }), A.push(u[e][t]);
      }
      for (let e = 0; e < E.length; e++) for (let t = 0; t < P.length; t++) {
        const n = Fe * Ye * (t === 0 || t === P.length - 1 ? 0.5 : 1) * (e === 0 || e === E.length - 1 ? 0.5 : 1), m = I * n, s = I * n * be;
        f.push({
          node: M[e][t],
          dof: 0,
          k: s
        }), f.push({
          node: M[e][t],
          dof: 1,
          k: s
        }), f.push({
          node: M[e][t],
          dof: 2,
          k: m
        }), A.push(M[e][t]);
      }
      const ie = I * xe * Me * 1e-4;
      f.push({
        node: u[0][0],
        dof: 3,
        k: ie
      }), f.push({
        node: u[0][0],
        dof: 4,
        k: ie
      }), f.push({
        node: u[0][0],
        dof: 5,
        k: ie
      }), o.nodes.val = J.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), o.elements.val = x, o.nodeInputs.val = {
        supports: je,
        loads: K
      }, o.elementInputs.val = {
        elasticities: C,
        poissonsRatios: H,
        areas: Q,
        momentsOfInertiaZ: te,
        momentsOfInertiaY: ne,
        torsionalConstants: se,
        shearModuli: oe,
        thicknesses: ee,
        densities: V,
        sectionShapes: ae
      };
      try {
        o.deformOutputs.val = ft(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, f);
        const e = ut(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), t = o.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        o.elements.rawVal.forEach((m, s) => {
          if (m.length !== 4) return;
          const h = [];
          for (const r of m) {
            const p = t == null ? void 0 : t.get(r), c = p ? p[2] : 0;
            h.push(-I * c);
          }
          n.set(s, h);
        }), e.pressure = n, o.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const we = o.deformOutputs.rawVal.deformations;
      let Z = 1e-9;
      for (const e of A) {
        const t = we == null ? void 0 : we.get(e);
        t && (Z = Math.max(Z, Math.abs(t[2])));
      }
      const Ze = w + y + v, qe = Math.max(k, T), ze = 0.07 * Math.sqrt(Ze ** 2 + qe ** 2 + he ** 2) / Z, De = new Set(A), de = Ce * 12, me = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, ke = (e, t) => {
        const n = e ? ze * t : 0, s = -(Z * Math.max(n, ze) + ht), h = [];
        for (const r of A) {
          if (!De.has(r)) continue;
          const p = o.nodes.rawVal[r];
          if (!p) continue;
          const c = p[0], i = p[1], g = we == null ? void 0 : we.get(r), Ue = g ? g[0] : 0, We = g ? g[1] : 0, Je = g ? g[2] : 0, ye = c + Ue * n, Se = i + We * n, Le = 0 + Je * n, Ke = Le - s, ue = (d) => [
            c + (ye - c) * d,
            i + (Se - i) * d,
            s + Ke * d
          ], [Qe, et, tt] = ue(0), [nt, st, ot] = ue(0.05), pe = [
            new G(Qe, et, tt),
            new G(nt, st, ot)
          ];
          for (let d = 0; d <= de; d++) {
            const fe = 0.05 + 0.9 * (d / de), [lt, ct, rt] = ue(fe), _e = 2 * Math.PI * Ce * (d / de);
            pe.push(new G(lt + Ee * Math.cos(_e), ct + Ee * Math.sin(_e), rt));
          }
          pe.push(new G(ye, Se, Le)), h.push(new it(new Ne().setFromPoints(pe), vt));
          const l = gt, Ie = [
            [
              c - l,
              i - l,
              s - l * 2
            ],
            [
              c + l,
              i - l,
              s - l * 2
            ],
            [
              c + l,
              i + l,
              s - l * 2
            ],
            [
              c - l,
              i + l,
              s - l * 2
            ],
            [
              c - l,
              i - l,
              s
            ],
            [
              c + l,
              i - l,
              s
            ],
            [
              c + l,
              i + l,
              s
            ],
            [
              c - l,
              i + l,
              s
            ]
          ].map((d) => new G(d[0], d[1], d[2])), at = [
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
          for (const [d, fe] of at) Be.push(Ie[d], Ie[fe]);
          h.push(new dt(new Ne().setFromPoints(Be), xt));
        }
        return h;
      };
      me ? mt.derive(() => {
        const e = me.deformedShape.val, t = me.displayScale.val, n = t === 0 ? 1 : t > 0 ? t : -1 / t;
        o.objects3D.val = ke(e, n);
      }) : o.objects3D.val = ke(true, 1);
    },
    runModal(a, o, w) {
      var _a, _b;
      const k = o.nodes.val, y = o.elements.val, S = o.nodeInputs.val, z = o.elementInputs.val;
      if (!(!k.length || !y.length || !((_a = z.densities) == null ? void 0 : _a.size))) try {
        const v = pt(k, y, S, z, 12);
        w.render(v, {
          title: `Zapata + Viga amarre Lv=${a.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${a.Bv}\xD7${a.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = v.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (v) {
        console.warn("Modal zapata-viga error:", v.message);
      }
    }
  };
});
export {
  __tla,
  It as z
};
