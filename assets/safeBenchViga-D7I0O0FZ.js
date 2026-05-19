import { b as U, E as $, c as ee, L as te } from "./Text-BmY6zyQy.js";
import { a as pe } from "./analyze-DNPn2SjO.js";
import { d as me, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let be;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Q = 9.80665;
  function ue(n, o, u, f, p, l) {
    const c = Math.abs(o - n), h = new U(c, p, l), g = new $(h), _ = new ee(g, new te({
      color: 8421504,
      linewidth: 2
    }));
    return _.position.set((n + o) / 2, u, f + l / 2), [
      _
    ];
  }
  function fe(n, o, u, f, p) {
    const l = new U(p, p, f), c = new $(l), h = new ee(c, new te({
      color: 8421504,
      linewidth: 2
    }));
    return h.position.set(n, o, u + f / 2), [
      h
    ];
  }
  be = {
    id: "safe-bench-viga-cimentacion",
    name: "Viga de Cimentaci\xF3n \xB7 Zapata corrida + Viga + Pedestales",
    category: "Cimentaciones",
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
      "Modelo estructural compuesto t\xEDpico de cimentaci\xF3n corrida:",
      " \u2022 Zapata corrida \u2192 shell Q4 sobre Winkler springs (Lz \xD7 Bz \xD7 t_zap)",
      " \u2022 Viga de cimentaci\xF3n \u2192 frame longitudinal a lo largo del eje central (b_viga \xD7 h_viga)",
      " \u2022 Pedestales \u2192 frames verticales cortos debajo del contrapiso (b_ped \xD7 h_ped)",
      "Las cargas P bajan por los pedestales \u2192 viga \u2192 distribuidas a la zapata v\xEDa Winkler."
    ],
    params: {
      Lz: {
        default: 8,
        min: 4,
        max: 20,
        step: 0.5,
        label: "Lz longitudinal (m)"
      },
      Bz: {
        default: 1,
        min: 0.5,
        max: 3,
        step: 0.25,
        label: "Bz ancho zapata (m)"
      },
      t_zap: {
        default: 0.4,
        min: 0.2,
        max: 1,
        step: 0.05,
        label: "t_zap espesor (m)"
      },
      b_viga: {
        default: 0.3,
        min: 0.2,
        max: 0.6,
        step: 0.05,
        label: "b_viga ancho (m)"
      },
      h_viga: {
        default: 0.5,
        min: 0.3,
        max: 1,
        step: 0.05,
        label: "h_viga canto (m)"
      },
      h_ped: {
        default: 0.5,
        min: 0.2,
        max: 1.5,
        step: 0.05,
        label: "Hp pedestal (m)"
      },
      b_ped: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "lado pedestal (m)"
      },
      ks_tonfm3: {
        default: 2e3,
        min: 500,
        max: 1e4,
        step: 100,
        label: "ks (tonf/m\xB3)"
      },
      P_tonf: {
        default: 20,
        min: 1,
        max: 100,
        step: 1,
        label: "P por col (tonf)"
      },
      nCols: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "N pedestales"
      },
      nx: {
        default: 32,
        min: 8,
        max: 64,
        step: 4,
        label: "nx mesh (longitudinal)"
      },
      ny: {
        default: 4,
        min: 2,
        max: 10,
        step: 1,
        label: "ny mesh (transversal)"
      }
    },
    build(n, o) {
      const u = n.Lz, f = n.Bz, p = n.t_zap, l = n.b_viga, c = n.h_viga, h = n.h_ped, g = n.b_ped, _ = n.ks_tonfm3 * Q, ne = n.P_tonf * Q, A = Math.round(n.nCols), w = Math.round(n.nx), M = Math.round(n.ny), i = w + 1, z = M + 1, j = u / w, C = f / M, G = f / 2, J = Math.round(M / 2), k = [];
      for (let e = 1; e <= A; ++e) {
        const t = e * u / (A + 1);
        k.push([
          t,
          G
        ]);
      }
      const m = [];
      for (let e = 0; e < z; ++e) for (let t = 0; t < i; ++t) m.push([
        t * j,
        e * C,
        0
      ]);
      const se = (e, t) => {
        let s = -1, a = 1 / 0;
        for (let d = 0; d < i * z; ++d) {
          const b = (m[d][0] - e) ** 2 + (m[d][1] - t) ** 2;
          b < a && (a = b, s = d);
        }
        return s;
      }, oe = k.map(([e, t]) => se(e, t)), R = k.map(([e, t]) => (m.push([
        e,
        t,
        h
      ]), m.length - 1)), r = [], T = 0;
      for (let e = 0; e < M; ++e) for (let t = 0; t < w; ++t) {
        const s = e * i + t;
        r.push([
          s,
          s + 1,
          s + i + 1,
          s + i
        ]);
      }
      const E = r.length;
      for (let e = 0; e < w; ++e) {
        const t = J * i + e, s = J * i + (e + 1);
        r.push([
          t,
          s
        ]);
      }
      const X = r.length;
      oe.forEach((e, t) => r.push([
        e,
        R[t]
      ]));
      const y = [];
      for (let e = 0; e < z; ++e) for (let t = 0; t < i; ++t) {
        const s = t === 0 || t === i - 1, a = e === 0 || e === z - 1, d = s && a ? 0.25 : s || a ? 0.5 : 1, b = j * C * d, v = e * i + t;
        if (y.push({
          node: v,
          dof: 2,
          k: _ * b
        }), s && a) {
          const x = 1e-6 * _ * j * C;
          y.push({
            node: v,
            dof: 3,
            k: x
          }), y.push({
            node: v,
            dof: 4,
            k: x
          });
        }
      }
      const D = /* @__PURE__ */ new Map();
      R.forEach((e) => D.set(e, [
        0,
        0,
        -ne,
        0,
        0,
        0
      ]));
      const I = 24855e3, B = 0.2, q = I / (2 * (1 + B)), ae = l * c, le = l * c ** 3 / 12, ce = c * l ** 3 / 12, ie = 0.28 * l * c ** 3, re = g * g, F = g ** 4 / 12, de = 0.141 * g ** 4, L = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
      for (let e = T; e < E; ++e) L.set(e, I), P.set(e, B), H.set(e, p);
      for (let e = E; e < X; ++e) L.set(e, I), P.set(e, B), N.set(e, ae), S.set(e, le), O.set(e, ce), V.set(e, q), W.set(e, ie);
      for (let e = X; e < r.length; ++e) L.set(e, I), P.set(e, B), N.set(e, re), S.set(e, F), O.set(e, F), V.set(e, q), W.set(e, de);
      const K = {
        supports: /* @__PURE__ */ new Map(),
        loads: D
      }, Y = {
        elasticities: L,
        poissonsRatios: P,
        thicknesses: H,
        areas: N,
        momentsOfInertiaZ: S,
        momentsOfInertiaY: O,
        shearModuli: V,
        torsionalConstants: W
      };
      o.nodes.val = m, o.elements.val = r, o.nodeInputs.val = K, o.elementInputs.val = Y;
      try {
        const e = me(m, r, K, Y, y);
        o.deformOutputs.val = e;
        const t = pe(m, r, Y, e), s = /* @__PURE__ */ new Map();
        for (let a = T; a < E; ++a) {
          const d = r[a];
          if (d.length !== 4) continue;
          const b = d.map((v) => {
            var _a;
            const x = (_a = e.deformations) == null ? void 0 : _a.get(v);
            return x ? _ * x[2] : 0;
          });
          s.set(a, b);
        }
        t.pressure = s, o.analyzeOutputs.val = t;
      } catch (e) {
        console.error("safe-bench-viga solver error:", e);
      }
      const Z = [];
      Z.push(...ue(0, u, G, p, l, c));
      for (const [e, t] of k) Z.push(...fe(e, t, p + c, h, g));
      o.objects3D.val = Z;
    }
  };
});
export {
  __tla,
  be as s
};
