import { L as Ve, V as M, a as Ie, B as Be } from "./Text-Dh9LKuSL.js";
import { v as it } from "./theme-CzzIlc4y.js";
import { a as mt } from "./analyze-ClLKGn9k.js";
import { m as dt, d as ut, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { a as _e } from "./exampleVersion-D1A_5i59.js";
let kt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let T, R, Ee, Z, pt, Pe, Ne, ft, ht, vt;
  T = 25e6;
  R = 0.2;
  Ee = T / (2 * (1 + R));
  Z = 24;
  pt = 0.2;
  Pe = 0.035;
  Ne = 8;
  ft = 0.04;
  ht = new Ve({
    color: 16711731,
    linewidth: 2
  });
  vt = new Ve({
    color: 52224,
    linewidth: 2
  });
  kt = {
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
        default: 25,
        min: 1,
        max: 200,
        step: 1,
        label: "P1 axial (tonf)"
      },
      M1x: {
        default: 1,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1x (tonf\xB7m)"
      },
      M1y: {
        default: 2.5,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1y (tonf\xB7m)"
      },
      P2: {
        default: 40,
        min: 1,
        max: 200,
        step: 1,
        label: "P2 axial (tonf)"
      },
      M2x: {
        default: 1,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2x (tonf\xB7m)"
      },
      M2y: {
        default: 2.5,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2y (tonf\xB7m)"
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
      var _a;
      const y = s.Lz1, L = s.Bz1, I = s.Lv, S = s.Bv, w = s.Hv, z = s.Lz2, D = s.Bz2, q = s.tz, k = s.bc, Ce = s.Hp, B = 9.80665, He = s.P1 * B, Oe = s.P2 * B, _ = s.ks, Ae = (s.M1x ?? 0) * B, Ge = (s.M1y ?? 0) * B, Te = (s.M2x ?? 0) * B, Re = (s.M2y ?? 0) * B, j = Math.round(s.nSubX), F = Math.round(s.nSubY), W = 0.2, X = L / 2, J = y + I + z / 2, $ = D / 2, ve = (X + $) / 2;
      function Y(e, t, n, c) {
        const a = [
          e,
          ...n.filter((l) => l > e && l < t),
          t
        ].sort((l, m) => l - m), f = [];
        for (let l = 0; l < a.length - 1; l++) {
          const m = a[l], r = a[l + 1], d = Math.max(1, Math.round((r - m) / ((t - e) / c)));
          for (let h = 0; h < d; h++) f.push(m + (r - m) * h / d);
        }
        return f.push(a[a.length - 1]), f;
      }
      const P = Y(0, y, [
        W
      ], j), N = Y(0, L, [
        X,
        ve
      ], F), V = Y(y + I, y + I + z, [
        J
      ], j), C = Y(0, D, [
        $,
        ve
      ], F), K = [], g = [], je = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), E = (e, t, n) => {
        const c = `${e.toFixed(4)},${t.toFixed(4)},${n.toFixed(4)}`;
        if (le.has(c)) return le.get(c);
        const a = K.length;
        return K.push([
          e,
          t,
          n
        ]), le.set(c, a), a;
      }, i = [];
      for (let e = 0; e < N.length; e++) {
        const t = [];
        for (let n = 0; n < P.length; n++) t.push(E(P[n], N[e], 0));
        i.push(t);
      }
      for (let e = 0; e < N.length - 1; e++) for (let t = 0; t < P.length - 1; t++) {
        const n = g.length;
        g.push([
          i[e][t],
          i[e][t + 1],
          i[e + 1][t + 1],
          i[e + 1][t]
        ]), ee.set(n, q), H.set(n, T), O.set(n, R), A.set(n, Z);
      }
      const x = [];
      for (let e = 0; e < C.length; e++) {
        const t = [];
        for (let n = 0; n < V.length; n++) t.push(E(V[n], C[e], 0));
        x.push(t);
      }
      for (let e = 0; e < C.length - 1; e++) for (let t = 0; t < V.length - 1; t++) {
        const n = g.length;
        g.push([
          x[e][t],
          x[e][t + 1],
          x[e + 1][t + 1],
          x[e + 1][t]
        ]), ee.set(n, q), H.set(n, T), O.set(n, R), A.set(n, Z);
      }
      const ge = Math.round(s.vigaLevel) === 0 ? q : Ce, Fe = E(W, X, 0), ce = E(W, X, ge), Xe = E(J, $, 0), re = E(J, $, ge);
      for (const [e, t] of [
        [
          Fe,
          ce
        ],
        [
          Xe,
          re
        ]
      ]) {
        const n = g.length;
        g.push([
          e,
          t
        ]), H.set(n, T), O.set(n, R), se.set(n, Ee), Q.set(n, k * k), te.set(n, k ** 4 / 12), ne.set(n, k ** 4 / 12), oe.set(n, 0.14 * k ** 4), A.set(n, Z), ae.set(n, {
          type: "rect",
          b: k,
          h: k
        });
      }
      const b = g.length;
      g.push([
        ce,
        re
      ]), H.set(b, T), O.set(b, R), se.set(b, Ee), Q.set(b, S * w), te.set(b, S * w ** 3 / 12), ne.set(b, w * S ** 3 / 12), oe.set(b, 0.28 * S * w ** 3), A.set(b, Z), ae.set(b, {
        type: "rect",
        b: S,
        h: w
      }), U.set(ce, [
        0,
        0,
        -He,
        Ae,
        Ge,
        0
      ]), U.set(re, [
        0,
        0,
        -Oe,
        Te,
        Re,
        0
      ]);
      const xe = y / j, be = L / F, $e = z / j, Ye = D / F, Me = 0.5, p = [], G = [];
      for (let e = 0; e < N.length; e++) for (let t = 0; t < P.length; t++) {
        const n = xe * be * (t === 0 || t === P.length - 1 ? 0.5 : 1) * (e === 0 || e === N.length - 1 ? 0.5 : 1), c = _ * n, a = _ * n * Me;
        p.push({
          node: i[e][t],
          dof: 0,
          k: a
        }), p.push({
          node: i[e][t],
          dof: 1,
          k: a
        }), p.push({
          node: i[e][t],
          dof: 2,
          k: c
        }), G.push(i[e][t]);
      }
      for (let e = 0; e < C.length; e++) for (let t = 0; t < V.length; t++) {
        const n = $e * Ye * (t === 0 || t === V.length - 1 ? 0.5 : 1) * (e === 0 || e === C.length - 1 ? 0.5 : 1), c = _ * n, a = _ * n * Me;
        p.push({
          node: x[e][t],
          dof: 0,
          k: a
        }), p.push({
          node: x[e][t],
          dof: 1,
          k: a
        }), p.push({
          node: x[e][t],
          dof: 2,
          k: c
        }), G.push(x[e][t]);
      }
      const ie = _ * xe * be * 1e-4;
      p.push({
        node: i[0][0],
        dof: 3,
        k: ie
      }), p.push({
        node: i[0][0],
        dof: 4,
        k: ie
      }), p.push({
        node: i[0][0],
        dof: 5,
        k: ie
      }), o.nodes.val = K.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), o.elements.val = g, o.nodeInputs.val = {
        supports: je,
        loads: U
      }, o.elementInputs.val = {
        elasticities: H,
        poissonsRatios: O,
        areas: Q,
        momentsOfInertiaZ: te,
        momentsOfInertiaY: ne,
        torsionalConstants: oe,
        shearModuli: se,
        thicknesses: ee,
        densities: A,
        sectionShapes: ae
      };
      try {
        o.deformOutputs.val = ut(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, p);
        const e = mt(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), t = o.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        o.elements.rawVal.forEach((c, a) => {
          if (c.length !== 4) return;
          const f = [];
          for (const l of c) {
            const m = t == null ? void 0 : t.get(l), r = m ? m[2] : 0;
            f.push(-_ * r);
          }
          n.set(a, f);
        }), e.pressure = n, o.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const we = o.deformOutputs.rawVal.deformations;
      let me = 1e-9;
      for (const e of G) {
        const t = we == null ? void 0 : we.get(e);
        t && Number.isFinite(t[2]) && (me = Math.max(me, Math.abs(t[2])));
      }
      const Ze = new Set(G), de = Ne * 12, ue = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, ze = (e, t) => {
        const n = e ? t : 0, a = -(me * Math.max(n, 1) + pt), f = [];
        for (const l of G) {
          if (!Ze.has(l)) continue;
          const m = o.nodes.rawVal[l];
          if (!m) continue;
          const r = m[0], d = m[1], h = we == null ? void 0 : we.get(l), pe = (u) => Number.isFinite(u) ? u : 0, qe = h ? pe(h[0]) : 0, We = h ? pe(h[1]) : 0, Je = h ? pe(h[2]) : 0, ye = r + qe * n, Se = d + We * n, ke = 0 + Je * n, Ke = ke - a, fe = (u) => [
            r + (ye - r) * u,
            d + (Se - d) * u,
            a + Ke * u
          ], [Ue, Qe, et] = fe(0), [tt, nt, ot] = fe(0.05), he = [
            new M(Ue, Qe, et),
            new M(tt, nt, ot)
          ];
          for (let u = 0; u <= de; u++) {
            const at = 0.05 + 0.9 * (u / de), [lt, ct, rt] = fe(at), Le = 2 * Math.PI * Ne * (u / de);
            he.push(new M(lt + Pe * Math.cos(Le), ct + Pe * Math.sin(Le), rt));
          }
          he.push(new M(ye, Se, ke)), f.push(new Ie(new Be().setFromPoints(he), ht));
          const v = ft, st = [
            new M(r - v, d - v, a),
            new M(r + v, d - v, a),
            new M(r + v, d + v, a),
            new M(r - v, d + v, a),
            new M(r - v, d - v, a)
          ];
          f.push(new Ie(new Be().setFromPoints(st), vt));
        }
        return f;
      }, De = _e.v;
      ue ? it.derive(() => {
        const e = ue.deformedShape.val, t = ue.deformScale.val;
        _e.v === De && (o.objects3D.val = ze(e, t));
      }) : o.objects3D.val = ze(true, 1);
    },
    runModal(s, o, y) {
      var _a, _b;
      const L = o.nodes.val, I = o.elements.val, S = o.nodeInputs.val, w = o.elementInputs.val;
      if (!(!L.length || !I.length || !((_a = w.densities) == null ? void 0 : _a.size))) try {
        const z = dt(L, I, S, w, 12);
        y.render(z, {
          title: `Zapata + Viga amarre Lv=${s.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${s.Bv}\xD7${s.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = z.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (z) {
        console.warn("Modal zapata-viga error:", z.message);
      }
    }
  };
});
export {
  __tla,
  kt as z
};
