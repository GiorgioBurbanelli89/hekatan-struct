import { a as Pe, V as re, B as Ve, L as Ce } from "./Text-CBH-tcJP.js";
import { a as Ae } from "./analyze-ClLKGn9k.js";
import { m as He, d as _e, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let Fe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let A, H, fe, F, je, he, Ge, Oe;
  A = 25e6;
  H = 0.2;
  fe = A / (2 * (1 + H));
  F = 24;
  je = 0.1;
  he = 6;
  Ge = new Pe({
    color: 16711731,
    linewidth: 3
  });
  Oe = 10;
  Fe = {
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
    build(s, o) {
      const g = s.Lz1, x = s.Bz1, z = s.Lv, v = s.Bv, p = s.Hv, f = s.Lz2, T = s.Bz2, Z = s.tz, b = s.bc, ge = s.Hp, ve = s.P1, be = s.P2, _ = s.ks, Me = s.M1x ?? 0, xe = s.M1y ?? 0, ze = s.M2x ?? 0, we = s.M2y ?? 0, j = Math.round(s.nSubX), G = Math.round(s.nSubY), E = 0.2, O = x / 2, D = g + z + f / 2, R = T / 2, ie = (O + R) / 2;
      function $(e, t, n, r) {
        const l = [
          e,
          ...n.filter((a) => a > e && a < t),
          t
        ].sort((a, i) => a - i), M = [];
        for (let a = 0; a < l.length - 1; a++) {
          const i = l[a], L = l[a + 1], B = Math.max(1, Math.round((L - i) / ((t - e) / r)));
          for (let C = 0; C < B; C++) M.push(i + (L - i) * C / B);
        }
        return M.push(l[l.length - 1]), M;
      }
      const I = $(0, g, [
        E
      ], j), S = $(0, x, [
        O,
        ie
      ], G), w = $(g + z, g + z + f, [
        D
      ], j), k = $(0, T, [
        R,
        ie
      ], G), q = [], d = [], ke = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), y = (e, t, n) => {
        const r = `${e.toFixed(4)},${t.toFixed(4)},${n.toFixed(4)}`;
        if (se.has(r)) return se.get(r);
        const l = q.length;
        return q.push([
          e,
          t,
          n
        ]), se.set(r, l), l;
      }, c = [];
      for (let e = 0; e < S.length; e++) {
        const t = [];
        for (let n = 0; n < I.length; n++) t.push(y(I[n], S[e], 0));
        c.push(t);
      }
      for (let e = 0; e < S.length - 1; e++) for (let t = 0; t < I.length - 1; t++) {
        const n = d.length;
        d.push([
          c[e][t],
          c[e][t + 1],
          c[e + 1][t + 1],
          c[e + 1][t]
        ]), U.set(n, Z), N.set(n, A), P.set(n, H), V.set(n, F);
      }
      const h = [];
      for (let e = 0; e < k.length; e++) {
        const t = [];
        for (let n = 0; n < w.length; n++) t.push(y(w[n], k[e], 0));
        h.push(t);
      }
      for (let e = 0; e < k.length - 1; e++) for (let t = 0; t < w.length - 1; t++) {
        const n = d.length;
        d.push([
          h[e][t],
          h[e][t + 1],
          h[e + 1][t + 1],
          h[e + 1][t]
        ]), U.set(n, Z), N.set(n, A), P.set(n, H), V.set(n, F);
      }
      const de = Math.round(s.vigaLevel) === 0 ? Z : ge, ye = y(E, O, 0), oe = y(E, O, de), Le = y(D, R, 0), ae = y(D, R, de);
      for (const [e, t] of [
        [
          ye,
          oe
        ],
        [
          Le,
          ae
        ]
      ]) {
        const n = d.length;
        d.push([
          e,
          t
        ]), N.set(n, A), P.set(n, H), te.set(n, fe), J.set(n, b * b), K.set(n, b ** 4 / 12), Q.set(n, b ** 4 / 12), ee.set(n, 0.14 * b ** 4), V.set(n, F), ne.set(n, {
          type: "rect",
          b,
          h: b
        });
      }
      const m = d.length;
      d.push([
        oe,
        ae
      ]), N.set(m, A), P.set(m, H), te.set(m, fe), J.set(m, v * p), K.set(m, v * p ** 3 / 12), Q.set(m, p * v ** 3 / 12), ee.set(m, 0.28 * v * p ** 3), V.set(m, F), ne.set(m, {
        type: "rect",
        b: v,
        h: p
      }), W.set(oe, [
        0,
        0,
        -ve,
        Me,
        xe,
        0
      ]), W.set(ae, [
        0,
        0,
        -be,
        ze,
        we,
        0
      ]);
      const me = g / j, ue = x / G, Be = f / j, Ie = T / G, u = [], le = [];
      for (let e = 0; e < S.length; e++) for (let t = 0; t < I.length; t++) {
        const n = me * ue * (t === 0 || t === I.length - 1 ? 0.5 : 1) * (e === 0 || e === S.length - 1 ? 0.5 : 1);
        u.push({
          node: c[e][t],
          dof: 2,
          k: _ * n
        }), le.push(c[e][t]);
      }
      for (let e = 0; e < k.length; e++) for (let t = 0; t < w.length; t++) {
        const n = Be * Ie * (t === 0 || t === w.length - 1 ? 0.5 : 1) * (e === 0 || e === k.length - 1 ? 0.5 : 1);
        u.push({
          node: h[e][t],
          dof: 2,
          k: _ * n
        }), le.push(h[e][t]);
      }
      const X = _ * me * ue * 0.01, ce = X * 0.01;
      u.push({
        node: c[0][0],
        dof: 0,
        k: X
      }), u.push({
        node: c[0][0],
        dof: 1,
        k: X
      }), u.push({
        node: c[0][0],
        dof: 3,
        k: ce
      }), u.push({
        node: c[0][0],
        dof: 4,
        k: ce
      }), u.push({
        node: c[0][0],
        dof: 5,
        k: ce
      }), u.push({
        node: h[k.length - 1][w.length - 1],
        dof: 1,
        k: X
      }), o.nodes.val = q.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), o.elements.val = d, o.nodeInputs.val = {
        supports: ke,
        loads: W
      }, o.elementInputs.val = {
        elasticities: N,
        poissonsRatios: P,
        areas: J,
        momentsOfInertiaZ: K,
        momentsOfInertiaY: Q,
        torsionalConstants: ee,
        shearModuli: te,
        thicknesses: U,
        densities: V,
        sectionShapes: ne
      };
      try {
        o.deformOutputs.val = _e(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, u);
        const e = Ae(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), t = o.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        o.elements.rawVal.forEach((r, l) => {
          if (r.length !== 4) return;
          const M = [];
          for (const a of r) {
            const i = t == null ? void 0 : t.get(a), L = i ? i[2] : 0;
            M.push(-_ * L);
          }
          n.set(l, M);
        }), e.pressure = n, o.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const pe = [], Se = o.deformOutputs.rawVal.deformations;
      for (const e of le) {
        const t = o.nodes.rawVal[e];
        if (!t) continue;
        const n = t[0], r = t[1], l = Se == null ? void 0 : Se.get(e), a = 0 + (l ? l[2] : 0) * Oe, i = -0.3, L = (a - i) / he, B = [
          new re(n, r, a)
        ];
        for (let Y = 1; Y < he; Y++) {
          const Ne = Y % 2 === 0 ? je : -0.1;
          B.push(new re(n + Ne, r, a - Y * L));
        }
        B.push(new re(n, r, i));
        const C = new Ve().setFromPoints(B);
        pe.push(new Ce(C, Ge));
      }
      o.objects3D.val = pe;
    },
    runModal(s, o, g) {
      var _a, _b;
      const x = o.nodes.val, z = o.elements.val, v = o.nodeInputs.val, p = o.elementInputs.val;
      if (!(!x.length || !z.length || !((_a = p.densities) == null ? void 0 : _a.size))) try {
        const f = He(x, z, v, p, 12);
        g.render(f, {
          title: `Zapata + Viga amarre Lv=${s.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${s.Bv}\xD7${s.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = f.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (f) {
        console.warn("Modal zapata-viga error:", f.message);
      }
    }
  };
});
export {
  __tla,
  Fe as z
};
