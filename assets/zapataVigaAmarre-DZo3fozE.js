import { a as Pe, V as re, B as Ve, L as Ce } from "./Text-CBH-tcJP.js";
import { a as Ae } from "./analyze-ClLKGn9k.js";
import { d as He, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let Te;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let P, V, fe, X, _e, he, je, Oe;
  P = 25e6;
  V = 0.2;
  fe = P / (2 * (1 + V));
  X = 24;
  _e = 0.1;
  he = 6;
  je = new Pe({
    color: 16711731,
    linewidth: 3
  });
  Oe = 10;
  Te = {
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
      const z = s.Lz1, Y = s.Bz1, T = s.Lv, w = s.Bv, k = s.Hv, F = s.Lz2, D = s.Bz2, E = s.tz, f = s.bc, ge = s.Hp, be = s.P1, ve = s.P2, C = s.ks, xe = s.M1x ?? 0, Me = s.M1y ?? 0, ze = s.M2x ?? 0, we = s.M2y ?? 0, A = Math.round(s.nSubX), H = Math.round(s.nSubY), Z = 0.2, _ = Y / 2, $ = z + T + F / 2, j = D / 2, ie = (_ + j) / 2;
      function O(e, t, n, r) {
        const l = [
          e,
          ...n.filter((a) => a > e && a < t),
          t
        ].sort((a, i) => a - i), h = [];
        for (let a = 0; a < l.length - 1; a++) {
          const i = l[a], x = l[a + 1], M = Math.max(1, Math.round((x - i) / ((t - e) / r)));
          for (let N = 0; N < M; N++) h.push(i + (x - i) * N / M);
        }
        return h.push(l[l.length - 1]), h;
      }
      const y = O(0, z, [
        Z
      ], A), L = O(0, Y, [
        _,
        ie
      ], H), g = O(z + T, z + T + F, [
        $
      ], A), b = O(0, D, [
        j,
        ie
      ], H), W = [], d = [], ke = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), v = (e, t, n) => {
        const r = `${e.toFixed(4)},${t.toFixed(4)},${n.toFixed(4)}`;
        if (se.has(r)) return se.get(r);
        const l = W.length;
        return W.push([
          e,
          t,
          n
        ]), se.set(r, l), l;
      }, c = [];
      for (let e = 0; e < L.length; e++) {
        const t = [];
        for (let n = 0; n < y.length; n++) t.push(v(y[n], L[e], 0));
        c.push(t);
      }
      for (let e = 0; e < L.length - 1; e++) for (let t = 0; t < y.length - 1; t++) {
        const n = d.length;
        d.push([
          c[e][t],
          c[e][t + 1],
          c[e + 1][t + 1],
          c[e + 1][t]
        ]), U.set(n, E), B.set(n, P), S.set(n, V), I.set(n, X);
      }
      const p = [];
      for (let e = 0; e < b.length; e++) {
        const t = [];
        for (let n = 0; n < g.length; n++) t.push(v(g[n], b[e], 0));
        p.push(t);
      }
      for (let e = 0; e < b.length - 1; e++) for (let t = 0; t < g.length - 1; t++) {
        const n = d.length;
        d.push([
          p[e][t],
          p[e][t + 1],
          p[e + 1][t + 1],
          p[e + 1][t]
        ]), U.set(n, E), B.set(n, P), S.set(n, V), I.set(n, X);
      }
      const de = Math.round(s.vigaLevel) === 0 ? E : ge, ye = v(Z, _, 0), oe = v(Z, _, de), Le = v($, j, 0), ae = v($, j, de);
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
        ]), B.set(n, P), S.set(n, V), te.set(n, fe), J.set(n, f * f), K.set(n, f ** 4 / 12), Q.set(n, f ** 4 / 12), ee.set(n, 0.14 * f ** 4), I.set(n, X), ne.set(n, {
          type: "rect",
          b: f,
          h: f
        });
      }
      const m = d.length;
      d.push([
        oe,
        ae
      ]), B.set(m, P), S.set(m, V), te.set(m, fe), J.set(m, w * k), K.set(m, w * k ** 3 / 12), Q.set(m, k * w ** 3 / 12), ee.set(m, 0.28 * w * k ** 3), I.set(m, X), ne.set(m, {
        type: "rect",
        b: w,
        h: k
      }), q.set(oe, [
        0,
        0,
        -be,
        xe,
        Me,
        0
      ]), q.set(ae, [
        0,
        0,
        -ve,
        ze,
        we,
        0
      ]);
      const me = z / A, ue = Y / H, Be = F / A, Se = D / H, u = [], le = [];
      for (let e = 0; e < L.length; e++) for (let t = 0; t < y.length; t++) {
        const n = me * ue * (t === 0 || t === y.length - 1 ? 0.5 : 1) * (e === 0 || e === L.length - 1 ? 0.5 : 1);
        u.push({
          node: c[e][t],
          dof: 2,
          k: C * n
        }), le.push(c[e][t]);
      }
      for (let e = 0; e < b.length; e++) for (let t = 0; t < g.length; t++) {
        const n = Be * Se * (t === 0 || t === g.length - 1 ? 0.5 : 1) * (e === 0 || e === b.length - 1 ? 0.5 : 1);
        u.push({
          node: p[e][t],
          dof: 2,
          k: C * n
        }), le.push(p[e][t]);
      }
      const G = C * me * ue * 0.01, ce = G * 0.01;
      u.push({
        node: c[0][0],
        dof: 0,
        k: G
      }), u.push({
        node: c[0][0],
        dof: 1,
        k: G
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
        node: p[b.length - 1][g.length - 1],
        dof: 1,
        k: G
      }), o.nodes.val = W.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), o.elements.val = d, o.nodeInputs.val = {
        supports: ke,
        loads: q
      }, o.elementInputs.val = {
        elasticities: B,
        poissonsRatios: S,
        areas: J,
        momentsOfInertiaZ: K,
        momentsOfInertiaY: Q,
        torsionalConstants: ee,
        shearModuli: te,
        thicknesses: U,
        densities: I,
        sectionShapes: ne
      };
      try {
        o.deformOutputs.val = He(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, u);
        const e = Ae(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), t = o.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        o.elements.rawVal.forEach((r, l) => {
          if (r.length !== 4) return;
          const h = [];
          for (const a of r) {
            const i = t == null ? void 0 : t.get(a), x = i ? i[2] : 0;
            h.push(-C * x);
          }
          n.set(l, h);
        }), e.pressure = n, o.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const pe = [], Ie = o.deformOutputs.rawVal.deformations;
      for (const e of le) {
        const t = o.nodes.rawVal[e];
        if (!t) continue;
        const n = t[0], r = t[1], l = Ie == null ? void 0 : Ie.get(e), a = 0 + (l ? l[2] : 0) * Oe, i = -0.3, x = (a - i) / he, M = [
          new re(n, r, a)
        ];
        for (let R = 1; R < he; R++) {
          const Ne = R % 2 === 0 ? _e : -0.1;
          M.push(new re(n + Ne, r, a - R * x));
        }
        M.push(new re(n, r, i));
        const N = new Ve().setFromPoints(M);
        pe.push(new Ce(N, je));
      }
      o.objects3D.val = pe;
    }
  };
});
export {
  __tla,
  Te as z
};
