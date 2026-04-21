import { a as _e, V as A, L as Ue, B as Ne, h as We } from "./Text-CBH-tcJP.js";
import { v as Je } from "./theme-CzzIlc4y.js";
import { a as Ke } from "./analyze-ClLKGn9k.js";
import { m as Qe, d as et, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let ft;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let G, O, Pe, U, tt, Be, Ee, nt, st, ot;
  G = 25e6;
  O = 0.2;
  Pe = G / (2 * (1 + O));
  U = 24;
  tt = 0.2;
  Be = 0.035;
  Ee = 8;
  nt = 0.04;
  st = new _e({
    color: 16711731,
    linewidth: 2
  });
  ot = new _e({
    color: 52224,
    linewidth: 2
  });
  ft = {
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
      const b = o.Lz1, z = o.Bz1, S = o.Lv, L = o.Bv, x = o.Hv, p = o.Lz2, R = o.Bz2, W = o.tz, k = o.bc, fe = o.Hp, Ce = o.P1, He = o.P2, j = o.ks, Ve = o.M1x ?? 0, Ae = o.M1y ?? 0, Ge = o.M2x ?? 0, Oe = o.M2y ?? 0, T = Math.round(o.nSubX), X = Math.round(o.nSubY), J = 0.2, $ = z / 2, K = b + S + p / 2, F = R / 2, he = ($ + F) / 2;
      function Y(e, t, n, v) {
        const a = [
          e,
          ...n.filter((i) => i > e && i < t),
          t
        ].sort((i, m) => i - m), u = [];
        for (let i = 0; i < a.length - 1; i++) {
          const m = a[i], c = a[i + 1], r = Math.max(1, Math.round((c - m) / ((t - e) / v)));
          for (let P = 0; P < r; P++) u.push(m + (c - m) * P / r);
        }
        return u.push(a[a.length - 1]), u;
      }
      const B = Y(0, b, [
        J
      ], T), E = Y(0, z, [
        $,
        he
      ], X), y = Y(b + S, b + S + p, [
        K
      ], T), I = Y(0, R, [
        F,
        he
      ], X), Q = [], f = [], Re = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), N = (e, t, n) => {
        const v = `${e.toFixed(4)},${t.toFixed(4)},${n.toFixed(4)}`;
        if (ie.has(v)) return ie.get(v);
        const a = Q.length;
        return Q.push([
          e,
          t,
          n
        ]), ie.set(v, a), a;
      }, d = [];
      for (let e = 0; e < E.length; e++) {
        const t = [];
        for (let n = 0; n < B.length; n++) t.push(N(B[n], E[e], 0));
        d.push(t);
      }
      for (let e = 0; e < E.length - 1; e++) for (let t = 0; t < B.length - 1; t++) {
        const n = f.length;
        f.push([
          d[e][t],
          d[e][t + 1],
          d[e + 1][t + 1],
          d[e + 1][t]
        ]), ne.set(n, W), _.set(n, G), C.set(n, O), H.set(n, U);
      }
      const w = [];
      for (let e = 0; e < I.length; e++) {
        const t = [];
        for (let n = 0; n < y.length; n++) t.push(N(y[n], I[e], 0));
        w.push(t);
      }
      for (let e = 0; e < I.length - 1; e++) for (let t = 0; t < y.length - 1; t++) {
        const n = f.length;
        f.push([
          w[e][t],
          w[e][t + 1],
          w[e + 1][t + 1],
          w[e + 1][t]
        ]), ne.set(n, W), _.set(n, G), C.set(n, O), H.set(n, U);
      }
      const ge = Math.round(o.vigaLevel) === 0 ? W : fe, je = N(J, $, 0), re = N(J, $, ge), Te = N(K, F, 0), de = N(K, F, ge);
      for (const [e, t] of [
        [
          je,
          re
        ],
        [
          Te,
          de
        ]
      ]) {
        const n = f.length;
        f.push([
          e,
          t
        ]), _.set(n, G), C.set(n, O), le.set(n, Pe), te.set(n, k * k), se.set(n, k ** 4 / 12), oe.set(n, k ** 4 / 12), ae.set(n, 0.14 * k ** 4), H.set(n, U), ce.set(n, {
          type: "rect",
          b: k,
          h: k
        });
      }
      const h = f.length;
      f.push([
        re,
        de
      ]), _.set(h, G), C.set(h, O), le.set(h, Pe), te.set(h, L * x), se.set(h, L * x ** 3 / 12), oe.set(h, x * L ** 3 / 12), ae.set(h, 0.28 * L * x ** 3), H.set(h, U), ce.set(h, {
        type: "rect",
        b: L,
        h: x
      }), ee.set(re, [
        0,
        0,
        -Ce,
        Ve,
        Ae,
        0
      ]), ee.set(de, [
        0,
        0,
        -He,
        Ge,
        Oe,
        0
      ]);
      const ve = b / T, Me = z / X, Xe = p / T, $e = R / X, g = [], V = [];
      for (let e = 0; e < E.length; e++) for (let t = 0; t < B.length; t++) {
        const n = ve * Me * (t === 0 || t === B.length - 1 ? 0.5 : 1) * (e === 0 || e === E.length - 1 ? 0.5 : 1);
        g.push({
          node: d[e][t],
          dof: 2,
          k: j * n
        }), V.push(d[e][t]);
      }
      for (let e = 0; e < I.length; e++) for (let t = 0; t < y.length; t++) {
        const n = Xe * $e * (t === 0 || t === y.length - 1 ? 0.5 : 1) * (e === 0 || e === I.length - 1 ? 0.5 : 1);
        g.push({
          node: w[e][t],
          dof: 2,
          k: j * n
        }), V.push(w[e][t]);
      }
      const Z = j * ve * Me * 0.01, me = Z * 0.01;
      g.push({
        node: d[0][0],
        dof: 0,
        k: Z
      }), g.push({
        node: d[0][0],
        dof: 1,
        k: Z
      }), g.push({
        node: d[0][0],
        dof: 3,
        k: me
      }), g.push({
        node: d[0][0],
        dof: 4,
        k: me
      }), g.push({
        node: d[0][0],
        dof: 5,
        k: me
      }), g.push({
        node: w[I.length - 1][y.length - 1],
        dof: 1,
        k: Z
      }), s.nodes.val = Q.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), s.elements.val = f, s.nodeInputs.val = {
        supports: Re,
        loads: ee
      }, s.elementInputs.val = {
        elasticities: _,
        poissonsRatios: C,
        areas: te,
        momentsOfInertiaZ: se,
        momentsOfInertiaY: oe,
        torsionalConstants: ae,
        shearModuli: le,
        thicknesses: ne,
        densities: H,
        sectionShapes: ce
      };
      try {
        s.deformOutputs.val = et(s.nodes.val, s.elements.val, s.nodeInputs.val, s.elementInputs.val, g);
        const e = Ke(s.nodes.val, s.elements.val, s.elementInputs.val, s.deformOutputs.val), t = s.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        s.elements.rawVal.forEach((v, a) => {
          if (v.length !== 4) return;
          const u = [];
          for (const i of v) {
            const m = t == null ? void 0 : t.get(i), c = m ? m[2] : 0;
            u.push(-j * c);
          }
          n.set(a, u);
        }), e.pressure = n, s.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const be = s.deformOutputs.rawVal.deformations;
      let q = 1e-9;
      for (const e of V) {
        const t = be == null ? void 0 : be.get(e);
        t && (q = Math.max(q, Math.abs(t[2])));
      }
      const Fe = b + S + p, Ye = Math.max(z, R), xe = 0.07 * Math.sqrt(Fe ** 2 + Ye ** 2 + fe ** 2) / q, Ze = new Set(V), we = Ee * 12, ue = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, ze = (e, t) => {
        const n = e ? xe * t : 0, a = -(q * Math.max(n, xe) + tt), u = [];
        for (const i of V) {
          if (!Ze.has(i)) continue;
          const m = s.nodes.rawVal[i];
          if (!m) continue;
          const c = m[0], r = m[1], P = be == null ? void 0 : be.get(i), Se = 0 + (P ? P[2] : 0) * n, Le = Se - a, pe = [
            new A(c, r, a),
            new A(c, r, a + Le * 0.05)
          ];
          for (let M = 0; M <= we; M++) {
            const D = M / we, Ie = 2 * Math.PI * Ee * D, De = a + Le * (0.05 + 0.9 * D);
            pe.push(new A(c + Be * Math.cos(Ie), r + Be * Math.sin(Ie), De));
          }
          pe.push(new A(c, r, Se)), u.push(new Ue(new Ne().setFromPoints(pe), st));
          const l = nt, ke = [
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
          ].map((M) => new A(M[0], M[1], M[2])), qe = [
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
          ], ye = [];
          for (const [M, D] of qe) ye.push(ke[M], ke[D]);
          u.push(new We(new Ne().setFromPoints(ye), ot));
        }
        return u;
      };
      ue ? Je.derive(() => {
        const e = ue.deformedShape.val, t = ue.displayScale.val, n = t === 0 ? 1 : t > 0 ? t : -1 / t;
        s.objects3D.val = ze(e, n);
      }) : s.objects3D.val = ze(true, 1);
    },
    runModal(o, s, b) {
      var _a, _b;
      const z = s.nodes.val, S = s.elements.val, L = s.nodeInputs.val, x = s.elementInputs.val;
      if (!(!z.length || !S.length || !((_a = x.densities) == null ? void 0 : _a.size))) try {
        const p = Qe(z, S, L, x, 12);
        b.render(p, {
          title: `Zapata + Viga amarre Lv=${o.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${o.Bv}\xD7${o.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = p.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (p) {
        console.warn("Modal zapata-viga error:", p.message);
      }
    }
  };
});
export {
  __tla,
  ft as z
};
